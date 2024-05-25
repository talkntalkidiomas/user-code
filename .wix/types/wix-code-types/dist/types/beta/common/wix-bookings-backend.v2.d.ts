declare module "wix-bookings-backend.v2" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface Resource {
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
      schedules?: Schedule[];
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
  interface Schedule {
      /** Schedule ID. */
      _id?: string;
      /** ID of the schedule's owner entity. This may be a resource ID or a service ID. */
      scheduleOwnerId?: string | null;
      /**
       * Start time of the first session in the schedule.
       * @internal
       * @readonly
       */
      firstSessionStart?: Date;
      /**
       * End time of the last session in the schedule.
       * @internal
       * @readonly
       */
      lastSessionEnd?: Date;
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
       * Tags for grouping schedules. These tags are the default tags for the schedule's sessions.
       * The Wix Bookings app uses the following predefined tags to set schedule type: `"INDIVIDUAL"`, `"GROUP"`, and `"COURSE"`. Once the schedule type is set using these tags, you cannot update it. In addition to the app's tags, you can create and update your own tags.
       */
      tags?: string[] | null;
      /** Default location for the schedule's sessions. */
      location?: Location;
      /**
       * Maximum number of participants that can be added to the schedule's sessions.
       * Must be at most `1` for schedule whose availability is affected by another schedule. E.g, appointment schedules of the Wix Bookings app.
       */
      capacity?: number | null;
      /** Deprecated. Please use the [Booking Services V2](https://dev.wix.com/api/rest/wix-bookings/services-v2) payment instead. */
      rate?: Rate;
      /** Deprecated and will be removed soon. */
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
      /** Deprecated and will be removed soon. */
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
       * The schedule version, updated each time the schedule or the schedule participants are updated.
       * @internal
       * @readonly
       */
      versions?: Version;
      /**
       * Fields which were inherited from the Business Info page under Settings in the Dashboard.
       * @readonly
       */
      inheritedFields?: string[];
      /** Deprecated and will be removed soon. */
      conferenceProvider?: ConferenceProvider;
      /**
       * A conference created for the schedule. This is used when a participant is added to a schedule.
       * **Partially deprecated.** Only `hostUrl` and `guestUrl` are to be supported.
       */
      calendarConference?: CalendarConference;
      /**
       * The name of the schedule owner. It may be a resource name or a service name. Optional.
       * @internal
       */
      scheduleOwnerName?: string | null;
      /**
       * The user id of the schedule owner. Optional.
       * Currently, in Bookings system, it would be present when the schedule is owned by a staff resource and the resource is connected to a user.
       * NOT IMPLEMENTED. YET.
       * @internal
       * @readonly
       */
      scheduleOwnerUserId?: string | null;
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
      /** The duration of the interval in minutes. Required. Part of the session end time calculation. minimum: 1, maximum: 86400. */
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
      /**
       * The name of the linked schedule owner. It may be a resource name or a service name. Optional.
       * This field is inherited from the schedule identified by scheduleId above.
       * @internal
       * @readonly
       */
      scheduleOwnerName?: string | null;
      /**
       * The user id of the linked schedule owner. Optional.
       * This field is inherited from the schedule identified by scheduleId above.
       * NOT IMPLEMENTED. YET.
       * @internal
       * @readonly
       */
      scheduleOwnerUserId?: string | null;
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
  interface Location {
      /**
       * Location type.
       * One of:
       * - `"OWNER_BUSINESS"` The business address as set in the site’s general settings.
       * - `"OWNER_CUSTOM"` The address as set when creating the service.
       * - `"CUSTOM"` The address set for the individual session.
       */
      locationType?: LocationType;
      /** Free text address used when locationType is `OWNER_CUSTOM`. */
      address?: string | null;
      /** Custom address, used when locationType is `"OWNER_CUSTOM"`. Might be used when locationType is `"CUSTOM"` in case the owner sets a custom address for the session which is different from the default. */
      customAddress?: Address;
      /**
       * The Wix Business location formatted address.
       * Valid when `locationType` is `OWNER_BUSINESS`. Defaults to the business's location.
       * To retrieve the full location data please use the [Locations API](https://dev.wix.com/api/rest/business-info/locations).
       * @internal
       */
      businessLocation?: LocationsLocation;
  }
  enum LocationType {
      UNDEFINED = "UNDEFINED",
      OWNER_BUSINESS = "OWNER_BUSINESS",
      OWNER_CUSTOM = "OWNER_CUSTOM",
      CUSTOM = "CUSTOM"
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
      /** Location type. **Note:** Currently not supported. */
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
      HEADQUARTERS = "HEADQUARTERS"
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
      /**
       * Default service price. Always vailable when a service has
       * [variants](https://dev.wix.com/api/rest/wix-bookings/service-options-and-variants/introduction).
       * Sometimes also available for services without variants.
       * Ignored in [updates to a service](https://dev.wix.com/api/rest/wix-bookings/services/service/update-service),
       * when either `labeled_price_options` or `price_text` is also specified.
       * @internal
       */
      defaultVariedPrice?: Price;
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
      /**
       * Not supported yet.
       * A list of possible locations for the session when `use_default_location` is set to `false`. Slots are generated for each location. Only one of the possible locations can be chosen by the customer.
       *
       * **NOTE**: When using the `locations` parameter, the default location is not automatically included in the list.
       * @internal
       */
      locations?: Location[];
      /**
       * Not supported yet.
       * Whether the schedule's slots are only available at the schedule's default location, as set in `schedule.location`. If set to `false`, the `locations` array is used to set the possible locations of the schedule's sessions.
       * Default is `true`.
       * @internal
       */
      useDefaultLocation?: boolean | null;
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
  enum ResourceStatus {
      UNDEFINED = "UNDEFINED",
      /** Default status. */
      CREATED = "CREATED",
      /** The resource was deleted. */
      DELETED = "DELETED",
      /** The resource was updated. */
      UPDATED = "UPDATED"
  }
  interface ListResourcesRequest {
      query?: Query;
  }
  interface Query {
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
       * Sort object in the following format:
       * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
       */
      sort?: Sorting[];
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
      /** Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned. */
      fields?: string[];
      /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned. */
      fieldsets?: string[];
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
  interface ListResourcesResponse {
      /** List of resources matching the query object. */
      resources?: Resource[];
      metadata?: QueryMetaData;
      pagingMetadata?: PagingMetadataV2;
  }
  interface QueryMetaData {
      items?: number;
      offset?: number;
      totalCount?: number;
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
  interface QueryResourcesRequest {
      query?: QueryV2;
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
  interface QueryResourcesResponse {
      /** List of resources matching the query object. */
      resources?: Resource[];
      pagingMetadata?: PagingMetadataV2;
  }
  interface CreateResourceRequest {
      /** Resource details. */
      resource: Resource;
      /**
       * List of schedules to be assigned for the created resource. Currently only a single schedule is allowed.
       * If provided, any schedules in the resource entity will be ignored.
       */
      schedules?: Schedule[];
  }
  interface CreateResourceResponse {
      /** Resource details. */
      resource?: Resource;
  }
  interface ResourceNotification {
      /**
       * Updated resource entity.
       * 'resource.schedules' is deprecated and will not be returned. Please use 'resource.scheduleIds' instead.
       */
      resource?: Resource;
      /** Event type. */
      event?: Event;
  }
  enum Event {
      UNDEFINED = "UNDEFINED",
      Updated = "Updated",
      Deleted = "Deleted",
      Created = "Created",
      Schedule_Updated = "Schedule_Updated"
  }
  interface BatchCreateResourceRequest {
      /** List of resource entities to create. */
      resources?: Resource[];
      /** Optional. If provided, the resources field is ignored. */
      batchedResources?: CreateResourceRequest[];
  }
  interface BatchCreateResourceResponse {
      /** List of the created resources. */
      resources?: Resource[];
  }
  interface UpdateResourceRequest {
      /** Resource details. */
      resource?: Resource;
      /** Field mask of fields to update. */
      fieldMask?: string[];
      /**
       * Actions to perform on the resources schedules. Can contain schedules to create, update, and cancel.
       * Either the 'schedules' or 'schedule_actions' should be specified but not both. If both are provided, the schedules in the resource entity is ignored.
       * @internal
       */
      scheduleActions?: BatchRequest;
  }
  interface BatchRequest {
      /** Create multiple schedules. */
      createRequests?: CreateScheduleRequest[];
      /** Update multiple schedules. Not Supported yet. */
      updateRequests?: UpdateScheduleRequest[];
      /**
       * Cancel multiple schedules.
       * The given schedules move to a CANCELLED status which means that all sessions up until
       * the cancellation point in time are kept, while removing all following sessions.
       */
      cancelRequests?: CancelScheduleRequest[];
  }
  /** schedule */
  interface CreateScheduleRequest {
      /** Schedule. */
      schedule?: Schedule;
  }
  interface UpdateScheduleRequest {
      /** Schedule. */
      schedule?: Schedule;
      /** Field mask of fields to update. */
      fieldMask?: string[];
      /** Optional. Defaults to false. In case of updated intervals' start time, this field indicates whether to align those interval's time exceptions. */
      alignTimeExceptions?: boolean;
      /** Deprecated, use participant_notification. */
      notifyParticipants?: boolean;
      /** Whether to notify participants about the change, and an optional custom message. */
      participantNotification?: ParticipantNotification;
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
  interface CancelScheduleRequest {
      /** Schedule ID. */
      scheduleId?: string;
      /** Time to cancel the sessions from. Optional. If this field is empty, all of this schedule's sessions will be canceled. */
      from?: Date;
      /** Whether to preserve future sessions with reservations. Defaults to false. */
      preserveFutureSessionsWithParticipants?: boolean;
      /** Deprecated, use participant_notification */
      notifyParticipants?: boolean;
      /** Whether to notify participants about the change, and an optional custom message. */
      participantNotification?: ParticipantNotification;
  }
  interface UpdateResourceResponse {
      /** Resource details. */
      resource?: Resource;
      /** Updated Schedules */
      schedules?: BatchResponse;
  }
  interface BatchResponse {
      /** Created schedules. */
      created?: Schedule[];
      /** Updated schedules. */
      updated?: Schedule[];
      /** Cancelled schedules. */
      cancelled?: Schedule[];
  }
  interface ResourceUpdateScheduleRequest {
      /** Resource id to update. */
      resourceId: string | null;
      /** Fieldmask for schedule */
      fieldmask?: string[];
      /** The schedule to update */
      schedule?: Schedule;
  }
  interface UpdateScheduleResponse {
      /** The updated schedule. */
      schedule?: Schedule;
  }
  interface DeleteResourceRequest {
      /** ID of the resource to delete. */
      _id: string;
  }
  interface DeleteResourceResponse {
      /** Deleted resource id */
      _id?: string;
  }
  interface BatchDeleteResourceRequest {
      /** List of resource IDs to delete. */
      ids: string[];
  }
  interface BatchDeleteResourceResponse {
  }
  interface LinkResourceToUserRequest {
      /** The id of the resource to link. */
      resourceId: string | null;
      /** The id of Wix user to link. */
      userId: string | null;
  }
  interface LinkResourceToUserResponse {
      /** The updated resource. */
      resource?: Resource;
  }
  interface UnLinkResourceFromOwnerRequest {
      /** The id of the resource to unlink. */
      resourceId: string | null;
  }
  interface UnLinkResourceFromOwnerResponse {
      /** The updated resource. */
      resource?: Resource;
  }
  /**
   * > **Deprecation Notice**
   * >
   * > **This endpoint has been replaced with [Query Resource](https://dev.wix.com/api/rest/wix-bookings/resources/list-resources/query-resource) and will be removed on March 31, 2022.**
   * > **If your app uses this endpoint, we recommend updating your code as soon as possible.**
   *
   * Retrieves a list of the resources according to the provided filters and paging.
   * <!--ONLY:REST-->
   * This query is optional. If no query is provided than all non-deleted resources are returned.
   *
   * |Property|Is supported|
   * |--|--|
   * |filter | supports `resource.id`, `resource.tag`, `resource.status`|
   * |paging | supported |
   * |fields | supported |
   * |fieldsets | **not supported** |
   * |sort| **not supported** |
   *
   * > **Permissions**
   * > This endpoint requires the Read Bookings Calendar, Read Bookings - Public Data, Read Bookings - Including Participants or Manage Bookings permission scope.
   * <!--END:ONLY:REST-->
   * @public
   * @documentationMaturity preview
   */
  function list(options?: ListOptions): Promise<ListResourcesResponse>;
  interface ListOptions {
      query?: Query;
  }
  /**
   * Retrieves a list of the resources according to the specified filters and paging.
   *
   * The query parameter is optional. If no query is provided than all non-deleted resources are returned.
   *
   * |Property|Is supported|
   * |--|--|
   * |filter | supported fields: `resource.id`, `resource.tags`, `resource.status`|
   * |paging | supported |
   * |fields | supported |
   * |fieldsets | **not supported**  |
   * |sort | **not supported**  |
   *
   *
   * >**Notes:**
   * > + The following objects in the `query` parameter are not supported for this query:
   * >    - `sort`
   * >    - `fieldsets`
   *
   * > **Permissions**
   * > This endpoint requires the Read Bookings Calendar, Read Bookings - Public Data, Read Bookings - Including Participants or Manage Bookings permission scope.
   * @public
   * @documentationMaturity preview
   */
  function query(options?: QueryOptions): Promise<QueryResourcesResponse>;
  interface QueryOptions {
      query?: QueryV2;
  }
  /**
   * Creates a resource.
   * <!--ONLY:VELO
   * The `createResource()` function returns a Promise that resolves to the created resource.
   * <!--END:ONLY:VELO-->
   *
   * Bookings resources are created with a schedule. The schedule and its sessions determine the resource's availability. Note that the schedule must contain a start date in the `availability.start` property.
   * For resources that are available during the business's default hours, add the business's schedule as a linked schedule in the resource's schedule. For resources that have their own hours, create sessions with type `"WORKING_HOURS"` using the resource's schedule.
   * You can use both individual and recurring sessions to define resource availability. You cannot use availability constraints for resource schedules.
   *
   * <!--ONLY:VELO
   * When creating a resource using `createResource()`, include the resource's schedule information. Set the schedule information as follows:
   * + If the resource uses the default business hours, get the business resource's schedule ID  and include it in the `scheduleInfo.availability.linkedSchedules` array in the `scheduleInfo` parameter. The default hours can bee found in the Dashboard under **Settings** in the **Bookings** section, on the **Appointment hours** page.
   * + If the resource has its own custom working hours, create the resource, then create sessions of type `"WORKING_HOURS"` using the [`createSession()`](wix-bookings-backend.Sessions/createsession) function. Use the `scheduleId` returned from `createResource()` when creating the sessions. These session can be single sessions or recurring sessions.
   * + You can have both default business hours and custom hours for the same resource schedule by combining the steps above.
   *
   * > **Notes:**
   * > + The Wix Bookings app does not show both default business hours and custom hours on the **Staff** page in the dashboard. If you've set up both custom and default business hours, only the default business hours will appear in the app, although both are working.
   * > + The Wix Bookings app does not show non-recurring `WORKING_HOURS` sessions in the resource calendar.
   * > + You can only add the business resource's schedule as a linked schedule for a resource.
   * > + A resource can have one schedule only.
   * > + You can have up to 135 active resources and an additional 135 deleted resources.
   * > + Only users with the **Bookings Admin** [role](https://support.wix.com/en/article/roles-permissions-overview#bookings-admin) can create a resource. You can override the role permissions by setting the `options.suppressAuth` parameter to `true`.
   * <!--END:ONLY:VELO-->
   *
   * <!--ONLY:REST-->
   * Use the following steps to create resources:
   * - Create the resource using including schedule information.
   * - If the resource uses the default business hours, get the business resource's schedule ID  and include it in the `scheduleInfo.availability.linkedSchedules` array in the in the schedule parameters.
   * - If the resource has its own custom working hours, create sessions of type `"WORKING_HOURS"`. Use the `scheduleId` of the new resource when creating the sessions. These session can be single sessions or recurring sessions. You can have both business hours and custom hours for the same resource schedule.
   *
   * >**Notes:**
   * > + A resource can have one schedule only.
   * > + You can have up to 135 active resources and an additional 135 deleted resources.
   * > + The `businessLocation.businessSchedule` object in the `schedule.location` object is not supported.
   *
   *
   *
   * >**Permissions:**
   * > This endpoint requires the Manage Bookings [permission scope](https://devforum.wix.com/kb/en/article/available-permissions).
   * <!--END:ONLY:REST-->
   * @param resource - Resource details.
   * @public
   * @documentationMaturity preview
   * @requiredField options.schedules.availability.start
   * @requiredField options.schedules.intervals.start
   * @requiredField resource
   * @requiredField resource.name
   */
  function create(resource: Resource, options?: CreateOptions): Promise<CreateResourceResponse>;
  interface CreateOptions {
      /**
       * List of schedules to be assigned for the created resource. Currently only a single schedule is allowed.
       * If provided, any schedules in the resource entity will be ignored.
       */
      schedules?: Schedule[];
  }
  /**
   * Creates multiple resources with corresponding schedules.
   * @internal
   * @documentationMaturity preview
   */
  function batchCreate(options?: BatchCreateOptions): Promise<BatchCreateResourceResponse>;
  interface BatchCreateOptions {
      /** List of resource entities to create. */
      resources?: Resource[];
      /** Optional. If provided, the resources field is ignored. */
      batchedResources?: CreateResourceRequest[];
  }
  /**
   * Updates a resource.
   * <!--ONLY:VELO
   * The `updateResource()` function returns a Promise that resolves when a resource is updated.
   * Use this function to update all bookings resource information except for the resource's schedule. To update a resource's schedule use [`updateResourceSchedule()`](wix-bookings-backend/resource/updateresourceschedule).
   *
   * >**Notes:**
   * > + When updating a resource you cannot change the system tags used by the Wix Bookings app. Tags used by the app have the values `"business"` and `"staff"`.
   * > + Only users with the **Bookings Admin** [role](https://support.wix.com/en/article/roles-permissions-overview#bookings-admin) can update a resource. You can override the role permissions by setting the `options.suppressAuth` parameter to `true`.
   * <!--END:ONLY:VELO-->
   * <!--ONLY:REST-->
   * Use this endpoint to update all resource information except for the resource's schedule. To update a resource's schedule use
   * the [Update Schedule](https://dev.wix.com/api/rest/wix-bookings/resources/update-schedule) endpoint.
   *
   * >**Notes:**
   * > + When updating a resource you cannot change the system tags used by the Wix Bookings app. Tags used by the app have the values `"business"` and `"staff"`.
   * > + When updating a resource's schedule you cannot change the resource tag used by the Wix Bookings app. Tags used by the app have the values `"INDIVIDUAL"`, `"GROUP"`, and `"COURSE”`.
   * > + The `businessLocation.businessSchedule` object in the `schedule.location` object is not supported.
   *
   * >**Permissions:**
   * > This endpoint requires the Manage Bookings [permission scope](https://devforum.wix.com/kb/en/article/available-permissions).
   * <!--END:ONLY:REST-->
   * @param _id - Resource ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField options.scheduleActions.cancelRequests.scheduleId
   * @requiredField options.scheduleActions.createRequests.schedule.availability.start
   * @requiredField options.scheduleActions.createRequests.schedule.intervals.start
   * @requiredField options.scheduleActions.createRequests.schedule.scheduleOwnerId
   * @requiredField options.scheduleActions.updateRequests.schedule._id
   */
  function update(_id: string | null, options?: UpdateOptions): Promise<UpdateResourceResponse>;
  interface UpdateOptions {
      resource: {
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
          schedules?: Schedule[];
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
      };
      /** Field mask of fields to update. */
      fieldMask?: string[];
      /**
       * Actions to perform on the resources schedules. Can contain schedules to create, update, and cancel.
       * Either the 'schedules' or 'schedule_actions' should be specified but not both. If both are provided, the schedules in the resource entity is ignored.
       * @internal
       */
      scheduleActions?: BatchRequest;
  }
  /**
   * Updates a resource's schedule
   * <!--ONLY:VELO
   * The `updateResourceSchedule()` function returns a Promise that resolves when a resource's schedule has been updated.
   * Use this function to update the bookings resource's schedule. To update other resource details  use [`updateResource()`]  (wix-bookings-backend/resources/updateresource).
   * The following schedule properties can be updated:
   * + `availability.start`
   * + `availability.linkedSchedules`
   * <!--END:ONLY:VELO-->
   *
   * To update a resource's schedule to remove business hours and add custom hours:
   * <!--ONLY:REST-->
   * + Update the resource's schedule to remove the business's `scheduleId` from the `availability.linkedSchedules` array.
   * + Create a set of recurring sessions of type `"WORKING_HOURS"` to define the resource's new hours.
   * <!--END:ONLY:REST-->
   * <!--ONLY:VELO
   * + Use [`updateResourceSchedule()`](wix-bookings-backend.Resources/updateresourcesession) to remove the business's scheduleId from the   `availability.linkedSchedules` array.
   * + Use [`createSession()`](wix-bookings-backend.Sessions/createsession) to create a set of recurring sessions of type `"WORKING_HOURS"` to   define the resource's new hours.
   * <!--END:ONLY:VELO-->
   *
   * To update a resource's schedule to add default business hours, and keep or remove custom hours:
   * <!--ONLY:REST-->
   * + Update the resource's schedule to add the business resource's `scheduleId` to the `availability.linkedSchedules` array.
   * + If you want to remove the custom sessions, delete the resource's sessions of type `"WORKING_HOURS"`.
   * You do not have to delete exiting custom sessions. Custom session that are not deleted will continue to be included in availability  calculations and can still be booked.
   * <!--END:ONLY:REST-->
   * <!--ONLY:VELO
   * + Use [`updateResourceSchedule()`](wix-bookings-backend.Resources/updateresourcesession) to add the business resource's `scheduleId` to   the `availability.linkedSchedules` array.
   * + If you want to remove the custom sessions, use [`deleteSession()`](wix-bookings-backend.Sessions/deletesession) to delete the   resource's sessions of type `"WORKING_HOURS"`. You do not have to delete exiting custom sessions. You can have both default working hours   and custom hours for the same schedule. Custom sessions that are not deleted will continue to be included in availability calculations  and can still be booked.
   *
   * > **Notes:**
   * > + The Wix Bookings app does not show both default business hours and custom hours on the **Staff** page in the dashboard. If you've set   up both custom and default business hours, only the default business hours will appear in the app, although both are working.
   * > + A resource can have one schedule only.
   * > + A resource can have both default business hours and custom hours in its schedule.
   * > + When updating a resource's schedule you cannot change the system tags used by the Wix Bookings app. Tags used by the app have the   values `"INDIVIDUAL"`, `"GROUP"`, and `"COURSE”`.
   * > + Only users with the **Bookings Admin** [role](https://support.wix.com/en/article/roles-permissions-overview#bookings-admin) can   update a resource schedule. You can override the role permissions by setting the `options.suppressAuth` parameter to `true`.
   * @snippet [updateResourceScheduleDefaultToCustom.es6=Update a resource's schedule from business to custom hours]
   * Update a resource's schedule from the business's default working hours to 2 custom days per week.
   * @snippet [updateResourceScheduleCustomToDefault.es6=Update a resource's schedule from custom to business hours]
   * <!--END:ONLY:VELO-->
   * <!--ONLY:REST-->
   * >**Notes:**
   * > + A resource can have one schedule only.
   * > + A resource can have both default business hours and custom hours in its schedule.
   * > + When updating a resource's schedule you cannot change the system tags used by the Wix Bookings app. Tags used by the app have the   values `"INDIVIDUAL"`, `"GROUP"`, and `"COURSE”`.
   * > + The `businessLocation.businessSchedule` object in the `schedule.location` object is not supported.
   *
   *
   *
   * >**Permissions:**
   * > This endpoint requires the Manage Bookings [permission scope](https://devforum.wix.com/kb/en/article/available-permissions).
   * <!--END:ONLY:REST-->
   * @param resourceId - Resource id to update.
   * @public
   * @documentationMaturity preview
   * @requiredField options.schedule._id
   * @requiredField resourceId
   */
  function updateSchedule(resourceId: string | null, options?: UpdateScheduleOptions): Promise<UpdateScheduleResponse>;
  interface UpdateScheduleOptions {
      /** Fieldmask for schedule */
      fieldmask?: string[];
      /** The schedule to update */
      schedule?: Schedule;
  }
  /**
   * Deletes a resource.
   * <!--ONLY:VELO
   * The `deleteResource()` function returns a Promise that is resolved when a resource is deleted.
   * <!--END:ONLY:VELO-->
   * Deleting a resource updates its `status` to `"DELETED"`.
   *
   * You cannot delete a resource if it has booked sessions.
   *
   * <!--ONLY:VELO
   * >**Notes:**
   * > + The Bookings app automatically creates a resource with a name and tag of value `"business"``. This resource is used for the business's schedule and working hours and cannot be deleted.
   * > + You can have up to 135 active resources and an additional 135 deleted resources.
   * > + Only users with the **Bookings Admin** [role](https://support.wix.com/en/article/roles-permissions-overview#bookings-admin) can delete a resource. You can override the role permissions by setting the `options.suppressAuth` parameter to `true`.
   * <!--END:ONLY:VELO-->
   *
   * <!--ONLY:REST-->
   * >**Notes:**
   * > + The Bookings app creates a resource with `"business"` in name and tag values. This resource is used for the business's schedule and working hours and cannot be deleted.
   * > + You can have up to 135 active resources and an additional 135 deleted resources.
   *
   * >**Permissions:**
   * > This endpoint requires the Manage Bookings [permission scope](https://devforum.wix.com/kb/en/article/available-permissions).
   * <!--END:ONLY:REST-->
   * @param _id - ID of the resource to delete.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   */
  function _delete(_id: string): Promise<DeleteResourceResponse>;
  /** @param ids - List of resource IDs to delete.
   * @internal
   * @documentationMaturity preview
   * @requiredField ids
   */
  function batchDelete(ids: string[]): Promise<void>;
  /**
   * Links a resource to a Wix user.
   * The user will be assigned with the `Bookings Staff Member` role, via the `SitePoliciesManagement.AssignPolicies` API.
   *
   * Preconditions:
   * - The resource must not be linked to a user, or an active invite.
   * - The user must be a site contributor
   * - The user must not be linked to another resource.
   *
   * Note:
   * The site owner may be linked to a resource, but will not be assigned with the 'Bookings Staff Member' role.
   * @param resourceId - The id of the resource to link.
   * @param userId - The id of Wix user to link.
   * @internal
   * @documentationMaturity preview
   * @requiredField resourceId
   * @requiredField userId
   */
  function linkResourceToUser(resourceId: string | null, userId: string | null): Promise<LinkResourceToUserResponse>;
  /**
   * Unlink a resource from the site owner.
   * @param resourceId - The id of the resource to unlink.
   * @internal
   * @documentationMaturity preview
   * @requiredField resourceId
   */
  function unLinkResourceFromOwner(resourceId: string | null): Promise<UnLinkResourceFromOwnerResponse>;
  
  const bookingsCatalogV1Resource_universal_d___debug: typeof __debug;
  type bookingsCatalogV1Resource_universal_d_Resource = Resource;
  type bookingsCatalogV1Resource_universal_d_Schedule = Schedule;
  type bookingsCatalogV1Resource_universal_d_RecurringInterval = RecurringInterval;
  type bookingsCatalogV1Resource_universal_d_Interval = Interval;
  type bookingsCatalogV1Resource_universal_d_Day = Day;
  const bookingsCatalogV1Resource_universal_d_Day: typeof Day;
  type bookingsCatalogV1Resource_universal_d_Frequency = Frequency;
  type bookingsCatalogV1Resource_universal_d_LinkedSchedule = LinkedSchedule;
  type bookingsCatalogV1Resource_universal_d_Transparency = Transparency;
  const bookingsCatalogV1Resource_universal_d_Transparency: typeof Transparency;
  type bookingsCatalogV1Resource_universal_d_RecurringIntervalType = RecurringIntervalType;
  const bookingsCatalogV1Resource_universal_d_RecurringIntervalType: typeof RecurringIntervalType;
  type bookingsCatalogV1Resource_universal_d_Location = Location;
  type bookingsCatalogV1Resource_universal_d_LocationType = LocationType;
  const bookingsCatalogV1Resource_universal_d_LocationType: typeof LocationType;
  type bookingsCatalogV1Resource_universal_d_Address = Address;
  type bookingsCatalogV1Resource_universal_d_AddressStreetOneOf = AddressStreetOneOf;
  type bookingsCatalogV1Resource_universal_d_StreetAddress = StreetAddress;
  type bookingsCatalogV1Resource_universal_d_AddressLocation = AddressLocation;
  type bookingsCatalogV1Resource_universal_d_Subdivision = Subdivision;
  type bookingsCatalogV1Resource_universal_d_LocationsLocation = LocationsLocation;
  type bookingsCatalogV1Resource_universal_d_LocationStatus = LocationStatus;
  const bookingsCatalogV1Resource_universal_d_LocationStatus: typeof LocationStatus;
  type bookingsCatalogV1Resource_universal_d_LocationsLocationType = LocationsLocationType;
  const bookingsCatalogV1Resource_universal_d_LocationsLocationType: typeof LocationsLocationType;
  type bookingsCatalogV1Resource_universal_d_LocationsAddress = LocationsAddress;
  type bookingsCatalogV1Resource_universal_d_LocationsStreetAddress = LocationsStreetAddress;
  type bookingsCatalogV1Resource_universal_d_LocationsAddressLocation = LocationsAddressLocation;
  type bookingsCatalogV1Resource_universal_d_BusinessSchedule = BusinessSchedule;
  type bookingsCatalogV1Resource_universal_d_TimePeriod = TimePeriod;
  type bookingsCatalogV1Resource_universal_d_DayOfWeek = DayOfWeek;
  const bookingsCatalogV1Resource_universal_d_DayOfWeek: typeof DayOfWeek;
  type bookingsCatalogV1Resource_universal_d_SpecialHourPeriod = SpecialHourPeriod;
  type bookingsCatalogV1Resource_universal_d_Rate = Rate;
  type bookingsCatalogV1Resource_universal_d_Price = Price;
  type bookingsCatalogV1Resource_universal_d_Availability = Availability;
  type bookingsCatalogV1Resource_universal_d_AvailabilityConstraints = AvailabilityConstraints;
  type bookingsCatalogV1Resource_universal_d_SplitInterval = SplitInterval;
  type bookingsCatalogV1Resource_universal_d_Participant = Participant;
  type bookingsCatalogV1Resource_universal_d_ApprovalStatus = ApprovalStatus;
  const bookingsCatalogV1Resource_universal_d_ApprovalStatus: typeof ApprovalStatus;
  type bookingsCatalogV1Resource_universal_d_ExternalCalendarOverrides = ExternalCalendarOverrides;
  type bookingsCatalogV1Resource_universal_d_ScheduleStatus = ScheduleStatus;
  const bookingsCatalogV1Resource_universal_d_ScheduleStatus: typeof ScheduleStatus;
  type bookingsCatalogV1Resource_universal_d_Version = Version;
  type bookingsCatalogV1Resource_universal_d_ConferenceProvider = ConferenceProvider;
  type bookingsCatalogV1Resource_universal_d_CalendarConference = CalendarConference;
  type bookingsCatalogV1Resource_universal_d_ConferenceType = ConferenceType;
  const bookingsCatalogV1Resource_universal_d_ConferenceType: typeof ConferenceType;
  type bookingsCatalogV1Resource_universal_d_ResourceStatus = ResourceStatus;
  const bookingsCatalogV1Resource_universal_d_ResourceStatus: typeof ResourceStatus;
  type bookingsCatalogV1Resource_universal_d_ListResourcesRequest = ListResourcesRequest;
  type bookingsCatalogV1Resource_universal_d_Query = Query;
  type bookingsCatalogV1Resource_universal_d_Sorting = Sorting;
  type bookingsCatalogV1Resource_universal_d_SortOrder = SortOrder;
  const bookingsCatalogV1Resource_universal_d_SortOrder: typeof SortOrder;
  type bookingsCatalogV1Resource_universal_d_Paging = Paging;
  type bookingsCatalogV1Resource_universal_d_ListResourcesResponse = ListResourcesResponse;
  type bookingsCatalogV1Resource_universal_d_QueryMetaData = QueryMetaData;
  type bookingsCatalogV1Resource_universal_d_PagingMetadataV2 = PagingMetadataV2;
  type bookingsCatalogV1Resource_universal_d_Cursors = Cursors;
  type bookingsCatalogV1Resource_universal_d_QueryResourcesRequest = QueryResourcesRequest;
  type bookingsCatalogV1Resource_universal_d_QueryV2 = QueryV2;
  type bookingsCatalogV1Resource_universal_d_QueryV2PagingMethodOneOf = QueryV2PagingMethodOneOf;
  type bookingsCatalogV1Resource_universal_d_CursorPaging = CursorPaging;
  type bookingsCatalogV1Resource_universal_d_QueryResourcesResponse = QueryResourcesResponse;
  type bookingsCatalogV1Resource_universal_d_CreateResourceRequest = CreateResourceRequest;
  type bookingsCatalogV1Resource_universal_d_CreateResourceResponse = CreateResourceResponse;
  type bookingsCatalogV1Resource_universal_d_ResourceNotification = ResourceNotification;
  type bookingsCatalogV1Resource_universal_d_Event = Event;
  const bookingsCatalogV1Resource_universal_d_Event: typeof Event;
  type bookingsCatalogV1Resource_universal_d_BatchCreateResourceRequest = BatchCreateResourceRequest;
  type bookingsCatalogV1Resource_universal_d_BatchCreateResourceResponse = BatchCreateResourceResponse;
  type bookingsCatalogV1Resource_universal_d_UpdateResourceRequest = UpdateResourceRequest;
  type bookingsCatalogV1Resource_universal_d_BatchRequest = BatchRequest;
  type bookingsCatalogV1Resource_universal_d_CreateScheduleRequest = CreateScheduleRequest;
  type bookingsCatalogV1Resource_universal_d_UpdateScheduleRequest = UpdateScheduleRequest;
  type bookingsCatalogV1Resource_universal_d_ParticipantNotification = ParticipantNotification;
  type bookingsCatalogV1Resource_universal_d_CancelScheduleRequest = CancelScheduleRequest;
  type bookingsCatalogV1Resource_universal_d_UpdateResourceResponse = UpdateResourceResponse;
  type bookingsCatalogV1Resource_universal_d_BatchResponse = BatchResponse;
  type bookingsCatalogV1Resource_universal_d_ResourceUpdateScheduleRequest = ResourceUpdateScheduleRequest;
  type bookingsCatalogV1Resource_universal_d_UpdateScheduleResponse = UpdateScheduleResponse;
  type bookingsCatalogV1Resource_universal_d_DeleteResourceRequest = DeleteResourceRequest;
  type bookingsCatalogV1Resource_universal_d_DeleteResourceResponse = DeleteResourceResponse;
  type bookingsCatalogV1Resource_universal_d_BatchDeleteResourceRequest = BatchDeleteResourceRequest;
  type bookingsCatalogV1Resource_universal_d_BatchDeleteResourceResponse = BatchDeleteResourceResponse;
  type bookingsCatalogV1Resource_universal_d_LinkResourceToUserRequest = LinkResourceToUserRequest;
  type bookingsCatalogV1Resource_universal_d_LinkResourceToUserResponse = LinkResourceToUserResponse;
  type bookingsCatalogV1Resource_universal_d_UnLinkResourceFromOwnerRequest = UnLinkResourceFromOwnerRequest;
  type bookingsCatalogV1Resource_universal_d_UnLinkResourceFromOwnerResponse = UnLinkResourceFromOwnerResponse;
  const bookingsCatalogV1Resource_universal_d_list: typeof list;
  type bookingsCatalogV1Resource_universal_d_ListOptions = ListOptions;
  const bookingsCatalogV1Resource_universal_d_query: typeof query;
  type bookingsCatalogV1Resource_universal_d_QueryOptions = QueryOptions;
  const bookingsCatalogV1Resource_universal_d_create: typeof create;
  type bookingsCatalogV1Resource_universal_d_CreateOptions = CreateOptions;
  const bookingsCatalogV1Resource_universal_d_batchCreate: typeof batchCreate;
  type bookingsCatalogV1Resource_universal_d_BatchCreateOptions = BatchCreateOptions;
  const bookingsCatalogV1Resource_universal_d_update: typeof update;
  type bookingsCatalogV1Resource_universal_d_UpdateOptions = UpdateOptions;
  const bookingsCatalogV1Resource_universal_d_updateSchedule: typeof updateSchedule;
  type bookingsCatalogV1Resource_universal_d_UpdateScheduleOptions = UpdateScheduleOptions;
  const bookingsCatalogV1Resource_universal_d__delete: typeof _delete;
  const bookingsCatalogV1Resource_universal_d_batchDelete: typeof batchDelete;
  const bookingsCatalogV1Resource_universal_d_linkResourceToUser: typeof linkResourceToUser;
  const bookingsCatalogV1Resource_universal_d_unLinkResourceFromOwner: typeof unLinkResourceFromOwner;
  namespace bookingsCatalogV1Resource_universal_d {
    export {
      bookingsCatalogV1Resource_universal_d___debug as __debug,
      bookingsCatalogV1Resource_universal_d_Resource as Resource,
      bookingsCatalogV1Resource_universal_d_Schedule as Schedule,
      bookingsCatalogV1Resource_universal_d_RecurringInterval as RecurringInterval,
      bookingsCatalogV1Resource_universal_d_Interval as Interval,
      bookingsCatalogV1Resource_universal_d_Day as Day,
      bookingsCatalogV1Resource_universal_d_Frequency as Frequency,
      bookingsCatalogV1Resource_universal_d_LinkedSchedule as LinkedSchedule,
      bookingsCatalogV1Resource_universal_d_Transparency as Transparency,
      bookingsCatalogV1Resource_universal_d_RecurringIntervalType as RecurringIntervalType,
      bookingsCatalogV1Resource_universal_d_Location as Location,
      bookingsCatalogV1Resource_universal_d_LocationType as LocationType,
      bookingsCatalogV1Resource_universal_d_Address as Address,
      bookingsCatalogV1Resource_universal_d_AddressStreetOneOf as AddressStreetOneOf,
      bookingsCatalogV1Resource_universal_d_StreetAddress as StreetAddress,
      bookingsCatalogV1Resource_universal_d_AddressLocation as AddressLocation,
      bookingsCatalogV1Resource_universal_d_Subdivision as Subdivision,
      bookingsCatalogV1Resource_universal_d_LocationsLocation as LocationsLocation,
      bookingsCatalogV1Resource_universal_d_LocationStatus as LocationStatus,
      bookingsCatalogV1Resource_universal_d_LocationsLocationType as LocationsLocationType,
      bookingsCatalogV1Resource_universal_d_LocationsAddress as LocationsAddress,
      bookingsCatalogV1Resource_universal_d_LocationsStreetAddress as LocationsStreetAddress,
      bookingsCatalogV1Resource_universal_d_LocationsAddressLocation as LocationsAddressLocation,
      bookingsCatalogV1Resource_universal_d_BusinessSchedule as BusinessSchedule,
      bookingsCatalogV1Resource_universal_d_TimePeriod as TimePeriod,
      bookingsCatalogV1Resource_universal_d_DayOfWeek as DayOfWeek,
      bookingsCatalogV1Resource_universal_d_SpecialHourPeriod as SpecialHourPeriod,
      bookingsCatalogV1Resource_universal_d_Rate as Rate,
      bookingsCatalogV1Resource_universal_d_Price as Price,
      bookingsCatalogV1Resource_universal_d_Availability as Availability,
      bookingsCatalogV1Resource_universal_d_AvailabilityConstraints as AvailabilityConstraints,
      bookingsCatalogV1Resource_universal_d_SplitInterval as SplitInterval,
      bookingsCatalogV1Resource_universal_d_Participant as Participant,
      bookingsCatalogV1Resource_universal_d_ApprovalStatus as ApprovalStatus,
      bookingsCatalogV1Resource_universal_d_ExternalCalendarOverrides as ExternalCalendarOverrides,
      bookingsCatalogV1Resource_universal_d_ScheduleStatus as ScheduleStatus,
      bookingsCatalogV1Resource_universal_d_Version as Version,
      bookingsCatalogV1Resource_universal_d_ConferenceProvider as ConferenceProvider,
      bookingsCatalogV1Resource_universal_d_CalendarConference as CalendarConference,
      bookingsCatalogV1Resource_universal_d_ConferenceType as ConferenceType,
      bookingsCatalogV1Resource_universal_d_ResourceStatus as ResourceStatus,
      bookingsCatalogV1Resource_universal_d_ListResourcesRequest as ListResourcesRequest,
      bookingsCatalogV1Resource_universal_d_Query as Query,
      bookingsCatalogV1Resource_universal_d_Sorting as Sorting,
      bookingsCatalogV1Resource_universal_d_SortOrder as SortOrder,
      bookingsCatalogV1Resource_universal_d_Paging as Paging,
      bookingsCatalogV1Resource_universal_d_ListResourcesResponse as ListResourcesResponse,
      bookingsCatalogV1Resource_universal_d_QueryMetaData as QueryMetaData,
      bookingsCatalogV1Resource_universal_d_PagingMetadataV2 as PagingMetadataV2,
      bookingsCatalogV1Resource_universal_d_Cursors as Cursors,
      bookingsCatalogV1Resource_universal_d_QueryResourcesRequest as QueryResourcesRequest,
      bookingsCatalogV1Resource_universal_d_QueryV2 as QueryV2,
      bookingsCatalogV1Resource_universal_d_QueryV2PagingMethodOneOf as QueryV2PagingMethodOneOf,
      bookingsCatalogV1Resource_universal_d_CursorPaging as CursorPaging,
      bookingsCatalogV1Resource_universal_d_QueryResourcesResponse as QueryResourcesResponse,
      bookingsCatalogV1Resource_universal_d_CreateResourceRequest as CreateResourceRequest,
      bookingsCatalogV1Resource_universal_d_CreateResourceResponse as CreateResourceResponse,
      bookingsCatalogV1Resource_universal_d_ResourceNotification as ResourceNotification,
      bookingsCatalogV1Resource_universal_d_Event as Event,
      bookingsCatalogV1Resource_universal_d_BatchCreateResourceRequest as BatchCreateResourceRequest,
      bookingsCatalogV1Resource_universal_d_BatchCreateResourceResponse as BatchCreateResourceResponse,
      bookingsCatalogV1Resource_universal_d_UpdateResourceRequest as UpdateResourceRequest,
      bookingsCatalogV1Resource_universal_d_BatchRequest as BatchRequest,
      bookingsCatalogV1Resource_universal_d_CreateScheduleRequest as CreateScheduleRequest,
      bookingsCatalogV1Resource_universal_d_UpdateScheduleRequest as UpdateScheduleRequest,
      bookingsCatalogV1Resource_universal_d_ParticipantNotification as ParticipantNotification,
      bookingsCatalogV1Resource_universal_d_CancelScheduleRequest as CancelScheduleRequest,
      bookingsCatalogV1Resource_universal_d_UpdateResourceResponse as UpdateResourceResponse,
      bookingsCatalogV1Resource_universal_d_BatchResponse as BatchResponse,
      bookingsCatalogV1Resource_universal_d_ResourceUpdateScheduleRequest as ResourceUpdateScheduleRequest,
      bookingsCatalogV1Resource_universal_d_UpdateScheduleResponse as UpdateScheduleResponse,
      bookingsCatalogV1Resource_universal_d_DeleteResourceRequest as DeleteResourceRequest,
      bookingsCatalogV1Resource_universal_d_DeleteResourceResponse as DeleteResourceResponse,
      bookingsCatalogV1Resource_universal_d_BatchDeleteResourceRequest as BatchDeleteResourceRequest,
      bookingsCatalogV1Resource_universal_d_BatchDeleteResourceResponse as BatchDeleteResourceResponse,
      bookingsCatalogV1Resource_universal_d_LinkResourceToUserRequest as LinkResourceToUserRequest,
      bookingsCatalogV1Resource_universal_d_LinkResourceToUserResponse as LinkResourceToUserResponse,
      bookingsCatalogV1Resource_universal_d_UnLinkResourceFromOwnerRequest as UnLinkResourceFromOwnerRequest,
      bookingsCatalogV1Resource_universal_d_UnLinkResourceFromOwnerResponse as UnLinkResourceFromOwnerResponse,
      bookingsCatalogV1Resource_universal_d_list as list,
      bookingsCatalogV1Resource_universal_d_ListOptions as ListOptions,
      bookingsCatalogV1Resource_universal_d_query as query,
      bookingsCatalogV1Resource_universal_d_QueryOptions as QueryOptions,
      bookingsCatalogV1Resource_universal_d_create as create,
      bookingsCatalogV1Resource_universal_d_CreateOptions as CreateOptions,
      bookingsCatalogV1Resource_universal_d_batchCreate as batchCreate,
      bookingsCatalogV1Resource_universal_d_BatchCreateOptions as BatchCreateOptions,
      bookingsCatalogV1Resource_universal_d_update as update,
      bookingsCatalogV1Resource_universal_d_UpdateOptions as UpdateOptions,
      bookingsCatalogV1Resource_universal_d_updateSchedule as updateSchedule,
      bookingsCatalogV1Resource_universal_d_UpdateScheduleOptions as UpdateScheduleOptions,
      bookingsCatalogV1Resource_universal_d__delete as _delete,
      bookingsCatalogV1Resource_universal_d_batchDelete as batchDelete,
      bookingsCatalogV1Resource_universal_d_linkResourceToUser as linkResourceToUser,
      bookingsCatalogV1Resource_universal_d_unLinkResourceFromOwner as unLinkResourceFromOwner,
    };
  }
  
  export { bookingsCatalogV1Resource_universal_d as resources };
}
