declare module "wix-restaurants-backend" {
  const __debug$1: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /**
   * `Operation` is the main entity of `OperationsService`.
   * It represents a restaurant operation and encompasses various aspects of its online ordering.
   */
  interface Operation extends OperationOnlineOrderingStatusOptionsOneOf {
      /** Data related to the `PAUSED_UNTIL` status. */
      pausedUntilOptions?: OnlineOrderingPausedUntilOptions;
      /**
       * The ID of the operation.
       * @readonly
       */
      _id?: string | null;
      /**
       * The current state of an item. Each time the item is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision.
       * @readonly
       */
      revision?: string | null;
      /**
       * Timestamp at which the operation was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Timestamp at which the operation was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** The operation name. */
      name?: string | null;
      /** An indication of whether the operation is enabled or not. */
      enabled?: boolean | null;
      /**
       * The scheduling data for this operation.
       * Scheduling specifies the time-related aspects of order placement.
       */
      scheduling?: Scheduling;
      /**
       * The profile ID associated with this operation.
       * TODO: talk with the tech writer to understand how best to document this field..
       */
      profileId?: string | null;
      /** An indication of whether this operation is the default one. */
      default?: boolean | null;
      /** The ids of the fulfillment methods associated with this operation. */
      fulfillmentIds?: string[] | null;
      /** The ids of the service fee rules associated with this operation. */
      serviceFeeRulesIds?: string[] | null;
      /** The online ordering status of this operation. */
      onlineOrderingStatus?: OnlineOrderingStatusType;
  }
  /** @oneof */
  interface OperationOnlineOrderingStatusOptionsOneOf {
      /** Data related to the `PAUSED_UNTIL` status. */
      pausedUntilOptions?: OnlineOrderingPausedUntilOptions;
  }
  /** Represents the time-related aspects of order placement. */
  interface Scheduling extends SchedulingSchedulingOptionsOneOf {
      /** Data related to the `ASAP` scheduling type. */
      asapOptions?: AsapScheduling;
      /** Data related to the `PREORDER` scheduling type. */
      preorderOptions?: PreorderScheduling;
      /** The scheduling type. */
      type?: SchedulingType;
  }
  /** @oneof */
  interface SchedulingSchedulingOptionsOneOf {
      /** Data related to the `ASAP` scheduling type. */
      asapOptions?: AsapScheduling;
      /** Data related to the `PREORDER` scheduling type. */
      preorderOptions?: PreorderScheduling;
  }
  /** Scheduling type enum. */
  enum SchedulingType {
      /** Unknown scheduling type. */
      UNKNOWN_SCHEDULING = "UNKNOWN_SCHEDULING",
      /**
       * Asap scheduling type.
       * Refers to scheduling orders for as soon as possible handling or for a future time.
       */
      ASAP = "ASAP",
      /**
       * Preorder scheduling type.
       * Refers to scheduling orders for a future time only.
       */
      PREORDER = "PREORDER"
  }
  /** Data related to `ASAP` scheduling type. */
  interface AsapScheduling extends AsapSchedulingPreparationTimeOneOf, AsapSchedulingAsapPreorderOneOf {
      /**
       * Data related to the `MAX` preparation time type.
       * The preparation time is bounded by a maximum time duration.
       */
      maxOptions?: TimeDuration;
      /**
       * Data related to the `RANGE` preparation time type.
       * The preparation time is bounded by a range of time durations.
       */
      rangeOptions?: TimeDurationRange;
      /** Data related to the `BUSINESS_DAYS_PREORDER` asap preorder type. */
      businessDaysPreorderOptions?: BusinessDaysPreorder;
      /** The type of the preparation time. */
      type?: PreparationTimeType;
      /** An indication of whether it is possible to place an order for a later time on the same day. */
      allowSameDayPreorder?: boolean | null;
      /** The type of preorder allowed for the ASAP scheduling. */
      asapPreorderType?: AsapPreorderType;
  }
  /** @oneof */
  interface AsapSchedulingPreparationTimeOneOf {
      /**
       * Data related to the `MAX` preparation time type.
       * The preparation time is bounded by a maximum time duration.
       */
      maxOptions?: TimeDuration;
      /**
       * Data related to the `RANGE` preparation time type.
       * The preparation time is bounded by a range of time durations.
       */
      rangeOptions?: TimeDurationRange;
  }
  /** @oneof */
  interface AsapSchedulingAsapPreorderOneOf {
      /** Data related to the `BUSINESS_DAYS_PREORDER` asap preorder type. */
      businessDaysPreorderOptions?: BusinessDaysPreorder;
  }
  /** Preparation time type enum. */
  enum PreparationTimeType {
      /** Unknown preparation time type. */
      UNKNOWN_PREPARATION_TIME = "UNKNOWN_PREPARATION_TIME",
      /**
       * Max preparation time type.
       * Refers to a preparation time that is bounded by a maximum time.
       */
      MAX = "MAX",
      /**
       * Range preparation time type.
       * Refers to a preparation time that is bounded by a range of times.
       */
      RANGE = "RANGE"
  }
  /** Represents a time duration. */
  interface TimeDuration {
      /** The time unit for the duration. */
      timeUnit?: TimeUnit;
      /**
       * The duration value.
       * Specified in the unit given in the `time_unit` field.
       */
      duration?: number | null;
  }
  /** Time unit enum. */
  enum TimeUnit {
      /** Unknown time unit. */
      UNKNOWN_TIME_UNIT = "UNKNOWN_TIME_UNIT",
      /** Minutes time unit. */
      MINUTES = "MINUTES",
      /** Hours time unit. */
      HOURS = "HOURS",
      /** Days time unit. */
      DAYS = "DAYS"
  }
  /** Represents a time duration range. */
  interface TimeDurationRange {
      /** The time unit for the duration range. */
      timeUnit?: TimeUnit;
      /** Starting time value for the scheduling option. */
      rangeMinimumDuration?: number | null;
      /** Ending time value for the scheduling option. */
      rangeMaximumDuration?: number | null;
      /**
       * The minimum duration value for the duration range.
       * Specified in the unit given in the `time_unit` field.
       */
      minDuration?: number | null;
      /**
       * The maximum duration value for the duration range.
       * Specified in the unit given in the `time_unit` field.
       */
      maxDuration?: number | null;
  }
  /** Asap preorder type enum. */
  enum AsapPreorderType {
      /** Unknown asap preorder type. */
      UNKNOWN_ASAP_PREORDER = "UNKNOWN_ASAP_PREORDER",
      /**
       * No preorder type.
       * Refers to not allowing to preorder.
       */
      NO_PREORDER = "NO_PREORDER",
      /**
       * Business days preorder type.
       * Refers to allowing to preorder for a maximum number of business days in advance.
       */
      BUSINESS_DAYS_PREORDER = "BUSINESS_DAYS_PREORDER"
  }
  /** Represents data related to the `BUSINESS_DAYS_PREORDER` asap preorder type. */
  interface BusinessDaysPreorder {
      /**
       * The maximum number of business days in advance an order can be scheduled.
       * When the given value is 0, it means that an order can be scheduled until the end of the current business day.
       * for any other value, the order can be scheduled until the end of the given number of business days.
       */
      businessDays?: number | null;
  }
  /** Data related to `PREORDER` scheduling type. */
  interface PreorderScheduling {
      /** The preorder method is the way by which preorders can be made. */
      method?: PreorderMethod;
      /** Configuration of how the fulfillment times should be displayed. */
      fulfillmentTimesDisplayConfig?: FulfillmentTimesDisplayConfig;
      /** Configuration of how the fulfillment times should be displayed. */
      fulfillmentTimesDisplay?: FulfillmentTimesDisplayConfig;
  }
  /** Represents the preorder method for `PREORDER` scheduling type. */
  interface PreorderMethod extends PreorderMethodMethodOptionsOneOf {
      /** Data related to the `TIME_BOUNDED` method type. */
      timeBoundedOptions?: TimeBounded;
      /** Data related to the `WEEKLY_SCHEDULE` method type. */
      weeklyScheduleOptions?: WeeklySchedule;
      /**
       * The type of preorder method.
       * Represents the way by which the preorders can be made.
       */
      type?: MethodType;
  }
  /** @oneof */
  interface PreorderMethodMethodOptionsOneOf {
      /** Data related to the `TIME_BOUNDED` method type. */
      timeBoundedOptions?: TimeBounded;
      /** Data related to the `WEEKLY_SCHEDULE` method type. */
      weeklyScheduleOptions?: WeeklySchedule;
  }
  /** Represents a day of week and a time of day. */
  interface DayAndTime {
      /** The day of week. */
      dayOfWeek?: DayOfWeek$6;
      /** The time of day. */
      timeOfDay?: TimeOfDay$1;
  }
  enum DayOfWeek$6 {
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
  interface TimeOfDay$1 {
      /** Hours (0-23) */
      hours?: number;
      /** Minutes (0-59) */
      minutes?: number;
  }
  /** The preorder method type enum. */
  enum MethodType {
      /** Unknown preorder method type. */
      UNKNOWN_TYPE = "UNKNOWN_TYPE",
      /**
       * Time bounded preorder method type.
       * Refers to allowing to preorder for a time bounded by a minimum and maximum time in advance.
       */
      TIME_BOUNDED = "TIME_BOUNDED",
      /**
       * Weekly schedule preorder method type.
       * Refers to allowing to preorder by a weekly schedule given a cutoff time.
       */
      WEEKLY_SCHEDULE = "WEEKLY_SCHEDULE"
  }
  /** Represents data related to `TIME_BOUNDED` preorder method type. */
  interface TimeBounded {
      /** The minimum advance time required for scheduling the order. */
      minimumInAdvanceTime?: TimeDuration;
      /** The maximum advance time allowed for scheduling the order. */
      maximumInAdvanceTime?: TimeDuration;
      /** The minimum advance time required for scheduling the order. */
      minTimeInAdvance?: TimeDuration;
      /** The maximum advance time allowed for scheduling the order. */
      maxTimeInAdvance?: TimeDuration;
  }
  /** Represents data related to `WEEKLY_SCHEDULE` preorder method type. */
  interface WeeklySchedule {
      /**
       * The weekly schedule cutoff time.
       * Orders placed before the cutoff time will be scheduled for the current week.
       * Orders placed after the cutoff time will be scheduled for the next week.
       */
      cutOffTime?: DayAndTime;
  }
  /** Represents the way by which the fulfillment times should be displayed. */
  interface FulfillmentTimesDisplayConfig extends FulfillmentTimesDisplayConfigFulfillmentTimesDisplayOptionsOneOf {
      /** Data related to the `TIME_WINDOWS` fulfillment times type. */
      timeWindowsOptions?: TimeDuration;
      /** The type of the fulfillment times. */
      fulfillmentTimesType?: FulfillmentTimesType;
      /** The type of the fulfillment times. */
      type?: FulfillmentTimesType;
  }
  /** @oneof */
  interface FulfillmentTimesDisplayConfigFulfillmentTimesDisplayOptionsOneOf {
      /** Data related to the `TIME_WINDOWS` fulfillment times type. */
      timeWindowsOptions?: TimeDuration;
  }
  /** The fulfillment times type enum. */
  enum FulfillmentTimesType {
      /** Unknown fulfillment times type. */
      UNKNOWN_TYPE = "UNKNOWN_TYPE",
      /**
       * Time windows fulfillment times type.
       * Refers to displaying fulfillment times as time windows.
       */
      TIME_WINDOWS = "TIME_WINDOWS"
  }
  /** Online ordering status enum. */
  enum OnlineOrderingStatusType {
      /** Online ordering status is undefined. */
      UNDEFINED_ONLINE_ORDERING_STATUS = "UNDEFINED_ONLINE_ORDERING_STATUS",
      /** Online ordering is enabled. */
      ENABLED = "ENABLED",
      /** Online ordering is disabled. */
      DISABLED = "DISABLED",
      /** Online ordering is paused until some timestamp. */
      PAUSED_UNTIL = "PAUSED_UNTIL"
  }
  /** Data related to the `PAUSED_UNTIL` status in the `online_ordering_status` field. */
  interface OnlineOrderingPausedUntilOptions {
      /** Timestamp until which online ordering is paused. */
      onlineOrderingPausedUntil?: Date;
  }
  interface InvalidateCache$2 extends InvalidateCacheGetByOneOf$2 {
      /** Invalidate by msId. NOT recommended, as this will invalidate the entire site cache! */
      metaSiteId?: string;
      /** Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache! */
      siteId?: string;
      /** Invalidate by App */
      app?: App$2;
      /** Invalidate by page id */
      page?: Page$2;
      /** Invalidate by URI path */
      uri?: URI$2;
      /** tell us why you're invalidating the cache. You don't need to add your app name */
      reason?: string | null;
      /** Is local DS */
      localDc?: boolean;
  }
  /** @oneof */
  interface InvalidateCacheGetByOneOf$2 {
      /** Invalidate by msId. NOT recommended, as this will invalidate the entire site cache! */
      metaSiteId?: string;
      /** Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache! */
      siteId?: string;
      /** Invalidate by App */
      app?: App$2;
      /** Invalidate by page id */
      page?: Page$2;
      /** Invalidate by URI path */
      uri?: URI$2;
  }
  interface App$2 {
      /** The AppDefId */
      appDefId?: string;
      /** The instance Id */
      instanceId?: string;
  }
  interface Page$2 {
      /** the msid the page is on */
      metaSiteId?: string;
      /** Invalidate by Page ID */
      pageId?: string;
  }
  interface URI$2 {
      /** the msid the URI is on */
      metaSiteId?: string;
      /** URI path to invalidate (e.g. page/my/path) - without leading/trailing slashes */
      uriPath?: string;
  }
  interface CreateOperationRequest {
      /** Operation to create. */
      operation: Operation;
  }
  interface CreateOperationResponse {
      /** The created operation. */
      operation?: Operation;
  }
  interface GetOperationRequest {
      /** The ID of the operation to retrieve. */
      operationId: string;
  }
  interface GetOperationResponse {
      /** The retrieved operation. */
      operation?: Operation;
  }
  interface UpdateOperationRequest {
      /**
       * Operation to update.
       * The operation update may be partial with the use of `field_mask`.
       */
      operation: Operation;
      /**
       * Field mask of the fields to update.
       * @internal
       */
      mask?: string[];
  }
  interface UpdateOperationResponse {
      /** The updated operation. */
      operation?: Operation;
  }
  interface DeleteOperationRequest {
      /** The ID of the operation to delete. */
      operationId: string;
  }
  interface DeleteOperationResponse {
  }
  interface QueryOperationRequest {
      /** The query by which to select operations. */
      query: CursorQuery$1;
  }
  interface CursorQuery$1 extends CursorQueryPagingMethodOneOf$1 {
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
  interface CursorQueryPagingMethodOneOf$1 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$2;
  }
  interface Sorting$2 {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
      order?: SortOrder$3;
  }
  enum SortOrder$3 {
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
  interface QueryOperationResponse {
      /** The retrieved operations. */
      operations?: Operation[];
      /** The metadata of the paginated results. */
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
  interface ListOperationsRequest {
  }
  interface ListOperationsResponse {
      /** The retrieved operations. */
      operations?: Operation[];
  }
  interface ListAvailableFulfillmentOptionsRequest {
      /**
       * The ID of the operation.
       * The returned fulfillment options will belong to this operation.
       */
      operationId: string;
      /**
       * A delivery address. This parameter is optional.
       * If provided, the returned delivery fulfillment options will be able to deliver to this address.
       */
      deliveryAddress?: Address$4;
  }
  /** Physical address */
  interface Address$4 extends AddressStreetOneOf$1 {
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
      location?: AddressLocation$5;
  }
  /** @oneof */
  interface AddressStreetOneOf$1 {
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
  interface AddressLocation$5 {
      /** Address latitude. */
      latitude?: number | null;
      /** Address longitude. */
      longitude?: number | null;
  }
  interface Subdivision$2 {
      /** Short subdivision code. */
      code?: string;
      /** Subdivision full name. */
      name?: string;
      /**
       * Subdivision level
       * @internal
       */
      type?: SubdivisionType$2;
      /**
       * Free text description of subdivision type.
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
  interface ListAvailableFulfillmentOptionsResponse {
      /** An indication of whether pickup fulfillment method is configured for the requested operation. */
      pickupConfigured?: boolean;
      /** An indication of whether delivery fulfillment method is configured for the requested operation. */
      deliveryConfigured?: boolean;
      /** A list of the available fulfillment options. */
      fulfillmentOptions?: FulfillmentOption[];
  }
  /** Represents a fulfillment method that given its availability and the operation's scheduling configurations, is currently available for fulfilling orders. */
  interface FulfillmentOption extends FulfillmentOptionFulfillmentTimeOptionsOneOf, FulfillmentOptionFulfillmentTimesDisplayOptionsOneOf, FulfillmentOptionFulfillmentTypeOptionsOneOf {
      /** The fulfillment time is bounded by a maximum time. */
      maxTimeOptions?: number;
      /** The fulfillment time is bounded by a duration range. */
      durationRangeOptions?: DurationRange;
      /** Data related to the `TIME_WINDOWS` fulfillment times display type. */
      timeWindowsOptions?: TimeWindowDisplayConfig;
      /** Data related  to the `PICKUP` fulfillment type. */
      pickupOptions?: PickupDetails$1;
      /**
       * The ID of the fulfillment option.
       * This is the ID of the fulfillment method.
       */
      _id?: string | null;
      /** The fulfillment option type. */
      type?: FulfillmentType$3;
      /** The minimum order price to qualify for using this fulfillment option. */
      minOrderPrice?: string | null;
      /** The fee for using this fulfillment option. */
      fee?: string | null;
      /** The availability of this fulfillment option. */
      availability?: FulfillmentOptionAvailability;
      /**
       * The fulfillment time type.
       * This field will only be relevant to ASAP operations
       */
      fulfillmentTimeType?: FulfillmentTimeType;
      /**
       * The fulfillment times display type.
       * This field will only be relevant to Preorder operations.
       */
      fulfillmentTimesDisplayType?: FulfillmentTimesDisplayType;
      /**
       * Threshold for offering free fulfillment.
       * If order price exceeds this threshold, the given `fee` is waived.
       */
      freeFulfillmentPriceThreshold?: string | null;
      /** The instructions for the fulfillment. */
      instructions?: string | null;
  }
  /** @oneof */
  interface FulfillmentOptionFulfillmentTimeOptionsOneOf {
      /** The fulfillment time is bounded by a maximum time. */
      maxTimeOptions?: number;
      /** The fulfillment time is bounded by a duration range. */
      durationRangeOptions?: DurationRange;
  }
  /** @oneof */
  interface FulfillmentOptionFulfillmentTimesDisplayOptionsOneOf {
      /** Data related to the `TIME_WINDOWS` fulfillment times display type. */
      timeWindowsOptions?: TimeWindowDisplayConfig;
  }
  /** @oneof */
  interface FulfillmentOptionFulfillmentTypeOptionsOneOf {
      /** Data related  to the `PICKUP` fulfillment type. */
      pickupOptions?: PickupDetails$1;
  }
  /** The fulfillment type enum. */
  enum FulfillmentType$3 {
      /** Undefined fulfillment type. */
      UNDEFINED_FULFILLMENT_TYPE = "UNDEFINED_FULFILLMENT_TYPE",
      /** Pickup fulfillment. */
      PICKUP = "PICKUP",
      /** Delivery fulfillment. */
      DELIVERY = "DELIVERY"
  }
  /** Represents the availability of the fulfillment option. */
  interface FulfillmentOptionAvailability {
      /** An indication of whether it is possible to submit an order for as soon as possible handling. */
      canSubmitOrderForNow?: boolean;
      /** Timestamp at which the fulfillment option's availability starts. */
      startTime?: Date;
      /** Timestamp at which the fulfillment option's availability ends. */
      endTime?: Date;
      /**
       * A list of availability times for the days of the week.
       * All the given times will be within the range defined by [`start_time`, `end_time`].
       */
      availableTimes?: DayOfWeekAvailability$1[];
      /**
       * A list of availability exception.
       * An availability exception is some availability for a specific time, that is different from the usual availability defined in `available_times`.
       * The availability exception overrides the availability defined in `available_times`.
       * All the given times will be within the range defined by [`start_time`, `end_time`].
       */
      exceptions?: AvailabilityException$1[];
      /** The timezone in which the availability times are given. */
      timeZone?: string | null;
      /** An indication of whether it is possible to submit an order for as soon as possible handling. */
      asapHandlingAvailable?: boolean;
  }
  interface DayOfWeekAvailability$1 {
      /** The day of week this availability relates to. */
      dayOfWeek?: DayOfWeek$6;
      /** A list of time ranges during which the fulfillment should be available. */
      timeRanges?: TimeOfDayRange$1[];
  }
  interface TimeOfDayRange$1 {
      /** The start time in time of day representation. */
      startTime?: TimeOfDay$1;
      /** The end time in time of day representation. */
      endTime?: TimeOfDay$1;
  }
  interface AvailabilityException$1 {
      /** The start time of the availability exception. */
      startTime?: Date;
      /** The end time of the availability exception. */
      endTime?: Date;
      /** An indication whether the exception makes the [`start_time`, `end_time`] range available. */
      available?: boolean;
      /** The reason for the exception. */
      reason?: string | null;
  }
  /** The fulfillment time type enum. */
  enum FulfillmentTimeType {
      /** Undefined fulfillment time type. */
      UNDEFINED_FULFILLMENT_TIME = "UNDEFINED_FULFILLMENT_TIME",
      /** The fulfillment time is bounded by a maximum time. */
      MAX_TIME = "MAX_TIME",
      /** The fulfillment time is bounded by a range of times. */
      DURATION_RANGE = "DURATION_RANGE"
  }
  /** Represents a duration range. */
  interface DurationRange {
      /** Minimum duration in minutes. */
      minDuration?: number;
      /** Maximum duration in minutes. */
      maxDuration?: number;
  }
  /** The fulfillment times display type enum. */
  enum FulfillmentTimesDisplayType {
      /** Undefined fulfillment times display type. */
      UNDEFINED_FULFILLMENT_TIMES_DISPLAY = "UNDEFINED_FULFILLMENT_TIMES_DISPLAY",
      /** The fulfillment times will be displayed as a list of time windows. */
      TIME_WINDOWS = "TIME_WINDOWS"
  }
  /** Represents a time window. */
  interface TimeWindowDisplayConfig {
      /** The time window duration in minutes. */
      durationInMinutes?: number;
  }
  /** Represents data related to the `PICKUP` fulfillment type. */
  interface PickupDetails$1 {
      /**
       * The pickup address.
       * The address of the restaurant will be used.
       */
      address?: Address$4;
  }
  interface ListFirstAvailableTimeSlotForFulfillmentTypesRequest {
      /**
       * The ID of the operation.
       * The returned fulfillment options will belong to this operation.
       */
      operationId: string;
      /**
       * A delivery address. This parameter is optional.
       * If provided, the returned delivery fulfillment options will be able to deliver to this address.
       */
      deliveryAddress?: Address$4;
  }
  interface ListFirstAvailableTimeSlotForFulfillmentTypesResponse {
      /**
       * A list of available time slots for each fulfillment type.
       * Each time slot will be the first available time slot for the given fulfillment type.
       * A fulfillment type of Delivery will only be returned if the delivery address is provided
       */
      timeSlots?: TimeSlot[];
  }
  interface TimeSlot extends TimeSlotFeeOptionsOneOf, TimeSlotFulfillmentTimeOptionsOneOf, TimeSlotMinOrderPriceOptionsOneOf {
      /** A single fee value. */
      valueOptions?: string | null;
      /** A range of fees. */
      rangeOptions?: PriceRange;
      /** The maximum time in minutes it will take to fulfill the order, e.g., 20 minutes. */
      maxTimeOptions?: number;
      /** The duration range in minutes it will take to fulfill the order, e.g., 20 - 30 minutes. */
      durationRangeOptions?: DurationRange;
      /** A single min order price value. */
      priceValueOptions?: string | null;
      /** A range of min order prices. */
      priceRangeOptions?: MinOrderPriceRange;
      /** The start time of the time slot. */
      startTime?: Date;
      /** The end time of the time slot. */
      endTime?: Date;
      /** The type of the fulfillment. */
      fulfilmentType?: FulfillmentType$3;
      /** Indication of whether the time slot starts now. */
      startsNow?: boolean;
      /** The fee type of the time slot. */
      feeType?: FeeType;
      /** The fulfillment time type. */
      fulfillmentTimeType?: FulfillmentTimeType;
      /** The min order price type. */
      minOrderPriceType?: MinOrderPriceType;
  }
  /** @oneof */
  interface TimeSlotFeeOptionsOneOf {
      /** A single fee value. */
      valueOptions?: string | null;
      /** A range of fees. */
      rangeOptions?: PriceRange;
  }
  /** @oneof */
  interface TimeSlotFulfillmentTimeOptionsOneOf {
      /** The maximum time in minutes it will take to fulfill the order, e.g., 20 minutes. */
      maxTimeOptions?: number;
      /** The duration range in minutes it will take to fulfill the order, e.g., 20 - 30 minutes. */
      durationRangeOptions?: DurationRange;
  }
  /** @oneof */
  interface TimeSlotMinOrderPriceOptionsOneOf {
      /** A single min order price value. */
      priceValueOptions?: string | null;
      /** A range of min order prices. */
      priceRangeOptions?: MinOrderPriceRange;
  }
  enum FeeType {
      /** Undefined fee type. */
      UNDEFINED_FEE_TYPE = "UNDEFINED_FEE_TYPE",
      /** Single price value. */
      VALUE = "VALUE",
      /** Range of prices value. */
      RANGE = "RANGE"
  }
  interface PriceRange {
      /** The minimum price of the range. */
      minPrice?: string | null;
      /** The maximum price of the range. */
      maxPrice?: string | null;
  }
  /** Min order price enum. */
  enum MinOrderPriceType {
      /** Undefined min order price type. */
      UNDEFINED_MIN_ORDER_PRICE_TYPE = "UNDEFINED_MIN_ORDER_PRICE_TYPE",
      /** Single min order price value. */
      PRICE_VALUE = "PRICE_VALUE",
      /** Range of min order price values. */
      PRICE_RANGE = "PRICE_RANGE"
  }
  /** Min order price range. */
  interface MinOrderPriceRange {
      /** The lower bound of the min order prices range. */
      lowerBound?: string | null;
      /** The upper bound of the min order prices range. */
      upperBound?: string | null;
  }
  interface ListAvailableTimeSlotsForDateRequest {
      /**
       * The ID of the operation.
       * The returned fulfillment options will belong to this operation.
       */
      operationId: string;
      /**
       * A delivery address. This parameter is optional.
       * If provided, the returned delivery fulfillment options will be able to deliver to this address.
       */
      deliveryAddress?: Address$4;
      /** The date to get the available time slots for. */
      date: _Date;
  }
  interface _Date {
      /** The day of the month. */
      day?: number;
      /** The month of the year. */
      month?: number;
      /** The year of the date. */
      year?: number;
  }
  interface ListAvailableTimeSlotsForDateResponse {
      /** A list of the available time slots in the requested date. */
      timeSlots?: TimeSlot[];
  }
  interface ListAvailableDatesInRangeRequest {
      /**
       * The ID of the operation.
       * The returned fulfillment options will belong to this operation.
       */
      operationId: string;
      /**
       * A delivery address. This parameter is optional.
       * If provided, the returned delivery fulfillment options will be able to deliver to this address.
       */
      deliveryAddress?: Address$4;
      /** The start date of the range. */
      from: _Date;
      /** The end date of the range. */
      until: _Date;
  }
  interface ListAvailableDatesInRangeResponse {
      /** A list of the available dates in descending order. */
      availableDates?: _Date[];
  }
  interface GetExpectedFulfillmentSelectionRequest {
      /** The id of the operation. The returned fulfillment will belong to this operation. */
      operationId: string;
      /**
       * A delivery address. This parameter is optional.
       * If provided, the returned delivery fulfillment will be able to deliver to this address.
       */
      deliveryAddress?: Address$4;
      /** The start time of the time slot. */
      timeslotStartTime?: Date;
      /** The end time of the time slot. */
      timeslotEndTime?: Date;
      /** The type of the fulfillment. */
      fulfilmentType: FulfillmentType$3;
      /** An indication whether it is possible to submit an order for now. */
      canSubmitOrderForNow?: boolean | null;
  }
  interface GetExpectedFulfillmentSelectionResponse {
      /** The expected fulfilment option to be selected. */
      expectedFulfillmentSelections?: FulfillmentOption[];
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
  }
  interface ActionEvent$4 {
      bodyAsJson?: string;
  }
  interface Empty$4 {
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
      /** Set of properties that were updated - corresponds to the fields in "properties". */
      fields?: string[];
      /** Updated properties. */
      properties?: Properties$1;
  }
  interface Properties$1 {
      /** Site categories. */
      categories?: Categories$1;
      /** Site locale. */
      locale?: Locale$2;
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
  interface Locale$2 {
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
  /** Business schedule. Regular and exceptional time periods when the business is open or the service is available. */
  interface BusinessSchedule$1 {
      /** Weekly recurring time periods when the business is regularly open or the service is available. Limited to 100 time periods. */
      periods?: TimePeriod$6[];
      /** Exceptions to the business's regular hours. The business can be open or closed during the exception. */
      specialHourPeriod?: SpecialHourPeriod$6[];
  }
  /** Weekly recurring time periods when the business is regularly open or the service is available. */
  interface TimePeriod$6 {
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
  interface SpecialHourPeriod$6 {
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
      locale?: Locale$2;
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
   * Creates a new operation.
   * @param operation - Operation to create.
   * @internal
   * @documentationMaturity preview
   * @requiredField operation
   * @adminMethod
   * @returns The created operation.
   */
  function createOperation(operation: Operation): Promise<Operation>;
  /**
   * Retrieves an operation.
   * @param operationId - The ID of the operation to retrieve.
   * @internal
   * @documentationMaturity preview
   * @requiredField operationId
   * @returns The retrieved operation.
   */
  function getOperation(operationId: string): Promise<Operation>;
  /**
   * Updates an operation.
   * Partial updates are supported, except for the scheduling field.
   * Each time the operation is updated, the `revision` increments by 1.
   * The existing `revision` must be included in the request when updating the operation.
   * This ensures you're updating the latest version of the operation and it prevents unintended overwrites.
   * @param _id - The ID of the operation.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField operation
   * @requiredField operation.revision
   * @adminMethod
   * @returns The updated operation.
   */
  function updateOperation(_id: string | null, operation: UpdateOperation, options?: UpdateOperationOptions): Promise<Operation>;
  interface UpdateOperation {
      /** Data related to the `PAUSED_UNTIL` status. */
      pausedUntilOptions?: OnlineOrderingPausedUntilOptions;
      /**
       * The ID of the operation.
       * @readonly
       */
      _id?: string | null;
      /**
       * The current state of an item. Each time the item is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision.
       * @readonly
       */
      revision?: string | null;
      /**
       * Timestamp at which the operation was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Timestamp at which the operation was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** The operation name. */
      name?: string | null;
      /** An indication of whether the operation is enabled or not. */
      enabled?: boolean | null;
      /**
       * The scheduling data for this operation.
       * Scheduling specifies the time-related aspects of order placement.
       */
      scheduling?: Scheduling;
      /**
       * The profile ID associated with this operation.
       * TODO: talk with the tech writer to understand how best to document this field..
       */
      profileId?: string | null;
      /** An indication of whether this operation is the default one. */
      default?: boolean | null;
      /** The ids of the fulfillment methods associated with this operation. */
      fulfillmentIds?: string[] | null;
      /** The ids of the service fee rules associated with this operation. */
      serviceFeeRulesIds?: string[] | null;
      /** The online ordering status of this operation. */
      onlineOrderingStatus?: OnlineOrderingStatusType;
  }
  interface UpdateOperationOptions {
      /**
       * Field mask of the fields to update.
       * @internal
       */
      mask?: string[];
  }
  /**
   * Deletes an operation.
   * @param operationId - The ID of the operation to delete.
   * @internal
   * @documentationMaturity preview
   * @requiredField operationId
   * @adminMethod
   */
  function deleteOperation(operationId: string): Promise<void>;
  /**
   * Retrieves a list of operations by a given query.
   * To learn how to query operations, see [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language).
   * Up to 100 operations can be returned per request.
   * @internal
   * @documentationMaturity preview
   */
  function queryOperation(): OperationsQueryBuilder;
  interface QueryCursorResult$1 {
      cursors: Cursors$2;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface OperationsQueryResult extends QueryCursorResult$1 {
      items: Operation[];
      query: OperationsQueryBuilder;
      next: () => Promise<OperationsQueryResult>;
      prev: () => Promise<OperationsQueryResult>;
  }
  interface OperationsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id', value: any) => OperationsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id', value: any) => OperationsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       * @documentationMaturity preview
       */
      startsWith: (propertyName: '_id', value: string) => OperationsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       * @documentationMaturity preview
       */
      hasSome: (propertyName: '_id', value: any[]) => OperationsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id', value: any) => OperationsQueryBuilder;
      /** @documentationMaturity preview */
      exists: (propertyName: '_id', value: boolean) => OperationsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'_id'>) => OperationsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'_id'>) => OperationsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => OperationsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => OperationsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<OperationsQueryResult>;
  }
  /**
   * Retrieves a list of operations.
   * Up to 100 operations can be returned per request.
   * TODO: support pagination
   * @internal
   * @documentationMaturity preview
   */
  function listOperations(): Promise<ListOperationsResponse>;
  /**
   * Retrieves a list of available fulfillment options.
   * What makes a fulfillment option available is whether it's possible to submit an order given the scheduling configurations and the fulfillment method's availability.
   * When a `delivery_address` is not provided in the input, our system retrieves a list encompassing all types of fulfillment methods.
   * Conversely, if a `delivery_address` is given, the response may includes non-delivery fulfillment options along with delivery fulfillment methods that are applicable to the given address, ensuring the address falls within the defined delivery area of these methods.
   * @param operationId - The ID of the operation.
   * The returned fulfillment options will belong to this operation.
   * @internal
   * @documentationMaturity preview
   * @requiredField operationId
   */
  function listAvailableFulfillmentOptions(operationId: string, options?: ListAvailableFulfillmentOptions): Promise<ListAvailableFulfillmentOptionsResponse>;
  interface ListAvailableFulfillmentOptions {
      /**
       * A delivery address. This parameter is optional.
       * If provided, the returned delivery fulfillment options will be able to deliver to this address.
       */
      deliveryAddress?: Address$4;
  }
  /**
   * Retrieves a list of available time slots for each fulfillment type.
   * Each time slot will be the first available time slot for the given fulfillment type.
   * @param operationId - The ID of the operation.
   * The returned fulfillment options will belong to this operation.
   * @internal
   * @documentationMaturity preview
   * @requiredField operationId
   */
  function listFirstAvailableTimeSlotForFulfillmentTypes(operationId: string, options?: ListFirstAvailableTimeSlotForFulfillmentTypesOptions): Promise<ListFirstAvailableTimeSlotForFulfillmentTypesResponse>;
  interface ListFirstAvailableTimeSlotForFulfillmentTypesOptions {
      /**
       * A delivery address. This parameter is optional.
       * If provided, the returned delivery fulfillment options will be able to deliver to this address.
       */
      deliveryAddress?: Address$4;
  }
  /**
   * Retrieves a list of the available time slots for a given date.
   * @param operationId - The ID of the operation.
   * The returned fulfillment options will belong to this operation.
   * @internal
   * @documentationMaturity preview
   * @requiredField operationId
   * @requiredField options.date
   * @requiredField options.date.day
   * @requiredField options.date.month
   * @requiredField options.date.year
   */
  function listAvailableTimeSlotsForDate(operationId: string, options?: ListAvailableTimeSlotsForDateOptions): Promise<ListAvailableTimeSlotsForDateResponse>;
  interface ListAvailableTimeSlotsForDateOptions {
      /**
       * A delivery address. This parameter is optional.
       * If provided, the returned delivery fulfillment options will be able to deliver to this address.
       */
      deliveryAddress?: Address$4;
      /** The date to get the available time slots for. */
      date: _Date;
  }
  /**
   * Retrieves a list of the available dates in a given time range.
   * A date is considered available if it has at least one available time slot.
   * @param operationId - The ID of the operation.
   * The returned fulfillment options will belong to this operation.
   * @internal
   * @documentationMaturity preview
   * @requiredField operationId
   * @requiredField options.from
   * @requiredField options.until
   */
  function listAvailableDatesInRange(operationId: string, options?: ListAvailableDatesInRangeOptions): Promise<ListAvailableDatesInRangeResponse>;
  interface ListAvailableDatesInRangeOptions {
      /**
       * A delivery address. This parameter is optional.
       * If provided, the returned delivery fulfillment options will be able to deliver to this address.
       */
      deliveryAddress?: Address$4;
      /** The start date of the range. */
      from: _Date;
      /** The end date of the range. */
      until: _Date;
  }
  /**
   * Retrieves a list of the fulfillment options that will be available given the provided filters.
   * TODO: probably rename, the implementation took a different direction than the name suggests
   * @param operationId - The id of the operation. The returned fulfillment will belong to this operation.
   * @internal
   * @documentationMaturity preview
   * @requiredField operationId
   * @requiredField options.fulfilmentType
   */
  function getExpectedFulfillmentSelection(operationId: string, options?: GetExpectedFulfillmentSelectionOptions): Promise<GetExpectedFulfillmentSelectionResponse>;
  interface GetExpectedFulfillmentSelectionOptions {
      /**
       * A delivery address. This parameter is optional.
       * If provided, the returned delivery fulfillment will be able to deliver to this address.
       */
      deliveryAddress?: Address$4;
      /** The start time of the time slot. */
      timeslotStartTime?: Date;
      /** The end time of the time slot. */
      timeslotEndTime?: Date;
      /** The type of the fulfillment. */
      fulfilmentType: FulfillmentType$3;
      /** An indication whether it is possible to submit an order for now. */
      canSubmitOrderForNow?: boolean | null;
  }
  
  type restaurantsOperationsV1Operation_universal_d_Operation = Operation;
  type restaurantsOperationsV1Operation_universal_d_OperationOnlineOrderingStatusOptionsOneOf = OperationOnlineOrderingStatusOptionsOneOf;
  type restaurantsOperationsV1Operation_universal_d_Scheduling = Scheduling;
  type restaurantsOperationsV1Operation_universal_d_SchedulingSchedulingOptionsOneOf = SchedulingSchedulingOptionsOneOf;
  type restaurantsOperationsV1Operation_universal_d_SchedulingType = SchedulingType;
  const restaurantsOperationsV1Operation_universal_d_SchedulingType: typeof SchedulingType;
  type restaurantsOperationsV1Operation_universal_d_AsapScheduling = AsapScheduling;
  type restaurantsOperationsV1Operation_universal_d_AsapSchedulingPreparationTimeOneOf = AsapSchedulingPreparationTimeOneOf;
  type restaurantsOperationsV1Operation_universal_d_AsapSchedulingAsapPreorderOneOf = AsapSchedulingAsapPreorderOneOf;
  type restaurantsOperationsV1Operation_universal_d_PreparationTimeType = PreparationTimeType;
  const restaurantsOperationsV1Operation_universal_d_PreparationTimeType: typeof PreparationTimeType;
  type restaurantsOperationsV1Operation_universal_d_TimeDuration = TimeDuration;
  type restaurantsOperationsV1Operation_universal_d_TimeUnit = TimeUnit;
  const restaurantsOperationsV1Operation_universal_d_TimeUnit: typeof TimeUnit;
  type restaurantsOperationsV1Operation_universal_d_TimeDurationRange = TimeDurationRange;
  type restaurantsOperationsV1Operation_universal_d_AsapPreorderType = AsapPreorderType;
  const restaurantsOperationsV1Operation_universal_d_AsapPreorderType: typeof AsapPreorderType;
  type restaurantsOperationsV1Operation_universal_d_BusinessDaysPreorder = BusinessDaysPreorder;
  type restaurantsOperationsV1Operation_universal_d_PreorderScheduling = PreorderScheduling;
  type restaurantsOperationsV1Operation_universal_d_PreorderMethod = PreorderMethod;
  type restaurantsOperationsV1Operation_universal_d_PreorderMethodMethodOptionsOneOf = PreorderMethodMethodOptionsOneOf;
  type restaurantsOperationsV1Operation_universal_d_DayAndTime = DayAndTime;
  type restaurantsOperationsV1Operation_universal_d_MethodType = MethodType;
  const restaurantsOperationsV1Operation_universal_d_MethodType: typeof MethodType;
  type restaurantsOperationsV1Operation_universal_d_TimeBounded = TimeBounded;
  type restaurantsOperationsV1Operation_universal_d_WeeklySchedule = WeeklySchedule;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentTimesDisplayConfig = FulfillmentTimesDisplayConfig;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentTimesDisplayConfigFulfillmentTimesDisplayOptionsOneOf = FulfillmentTimesDisplayConfigFulfillmentTimesDisplayOptionsOneOf;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentTimesType = FulfillmentTimesType;
  const restaurantsOperationsV1Operation_universal_d_FulfillmentTimesType: typeof FulfillmentTimesType;
  type restaurantsOperationsV1Operation_universal_d_OnlineOrderingStatusType = OnlineOrderingStatusType;
  const restaurantsOperationsV1Operation_universal_d_OnlineOrderingStatusType: typeof OnlineOrderingStatusType;
  type restaurantsOperationsV1Operation_universal_d_OnlineOrderingPausedUntilOptions = OnlineOrderingPausedUntilOptions;
  type restaurantsOperationsV1Operation_universal_d_CreateOperationRequest = CreateOperationRequest;
  type restaurantsOperationsV1Operation_universal_d_CreateOperationResponse = CreateOperationResponse;
  type restaurantsOperationsV1Operation_universal_d_GetOperationRequest = GetOperationRequest;
  type restaurantsOperationsV1Operation_universal_d_GetOperationResponse = GetOperationResponse;
  type restaurantsOperationsV1Operation_universal_d_UpdateOperationRequest = UpdateOperationRequest;
  type restaurantsOperationsV1Operation_universal_d_UpdateOperationResponse = UpdateOperationResponse;
  type restaurantsOperationsV1Operation_universal_d_DeleteOperationRequest = DeleteOperationRequest;
  type restaurantsOperationsV1Operation_universal_d_DeleteOperationResponse = DeleteOperationResponse;
  type restaurantsOperationsV1Operation_universal_d_QueryOperationRequest = QueryOperationRequest;
  type restaurantsOperationsV1Operation_universal_d_QueryOperationResponse = QueryOperationResponse;
  type restaurantsOperationsV1Operation_universal_d_ListOperationsRequest = ListOperationsRequest;
  type restaurantsOperationsV1Operation_universal_d_ListOperationsResponse = ListOperationsResponse;
  type restaurantsOperationsV1Operation_universal_d_ListAvailableFulfillmentOptionsRequest = ListAvailableFulfillmentOptionsRequest;
  type restaurantsOperationsV1Operation_universal_d_ListAvailableFulfillmentOptionsResponse = ListAvailableFulfillmentOptionsResponse;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentOption = FulfillmentOption;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentOptionFulfillmentTimeOptionsOneOf = FulfillmentOptionFulfillmentTimeOptionsOneOf;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentOptionFulfillmentTimesDisplayOptionsOneOf = FulfillmentOptionFulfillmentTimesDisplayOptionsOneOf;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentOptionFulfillmentTypeOptionsOneOf = FulfillmentOptionFulfillmentTypeOptionsOneOf;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentOptionAvailability = FulfillmentOptionAvailability;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentTimeType = FulfillmentTimeType;
  const restaurantsOperationsV1Operation_universal_d_FulfillmentTimeType: typeof FulfillmentTimeType;
  type restaurantsOperationsV1Operation_universal_d_DurationRange = DurationRange;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentTimesDisplayType = FulfillmentTimesDisplayType;
  const restaurantsOperationsV1Operation_universal_d_FulfillmentTimesDisplayType: typeof FulfillmentTimesDisplayType;
  type restaurantsOperationsV1Operation_universal_d_TimeWindowDisplayConfig = TimeWindowDisplayConfig;
  type restaurantsOperationsV1Operation_universal_d_ListFirstAvailableTimeSlotForFulfillmentTypesRequest = ListFirstAvailableTimeSlotForFulfillmentTypesRequest;
  type restaurantsOperationsV1Operation_universal_d_ListFirstAvailableTimeSlotForFulfillmentTypesResponse = ListFirstAvailableTimeSlotForFulfillmentTypesResponse;
  type restaurantsOperationsV1Operation_universal_d_TimeSlot = TimeSlot;
  type restaurantsOperationsV1Operation_universal_d_TimeSlotFeeOptionsOneOf = TimeSlotFeeOptionsOneOf;
  type restaurantsOperationsV1Operation_universal_d_TimeSlotFulfillmentTimeOptionsOneOf = TimeSlotFulfillmentTimeOptionsOneOf;
  type restaurantsOperationsV1Operation_universal_d_TimeSlotMinOrderPriceOptionsOneOf = TimeSlotMinOrderPriceOptionsOneOf;
  type restaurantsOperationsV1Operation_universal_d_FeeType = FeeType;
  const restaurantsOperationsV1Operation_universal_d_FeeType: typeof FeeType;
  type restaurantsOperationsV1Operation_universal_d_PriceRange = PriceRange;
  type restaurantsOperationsV1Operation_universal_d_MinOrderPriceType = MinOrderPriceType;
  const restaurantsOperationsV1Operation_universal_d_MinOrderPriceType: typeof MinOrderPriceType;
  type restaurantsOperationsV1Operation_universal_d_MinOrderPriceRange = MinOrderPriceRange;
  type restaurantsOperationsV1Operation_universal_d_ListAvailableTimeSlotsForDateRequest = ListAvailableTimeSlotsForDateRequest;
  type restaurantsOperationsV1Operation_universal_d__Date = _Date;
  type restaurantsOperationsV1Operation_universal_d_ListAvailableTimeSlotsForDateResponse = ListAvailableTimeSlotsForDateResponse;
  type restaurantsOperationsV1Operation_universal_d_ListAvailableDatesInRangeRequest = ListAvailableDatesInRangeRequest;
  type restaurantsOperationsV1Operation_universal_d_ListAvailableDatesInRangeResponse = ListAvailableDatesInRangeResponse;
  type restaurantsOperationsV1Operation_universal_d_GetExpectedFulfillmentSelectionRequest = GetExpectedFulfillmentSelectionRequest;
  type restaurantsOperationsV1Operation_universal_d_GetExpectedFulfillmentSelectionResponse = GetExpectedFulfillmentSelectionResponse;
  type restaurantsOperationsV1Operation_universal_d_V4Address = V4Address;
  type restaurantsOperationsV1Operation_universal_d_V4DayOfWeek = V4DayOfWeek;
  const restaurantsOperationsV1Operation_universal_d_V4DayOfWeek: typeof V4DayOfWeek;
  const restaurantsOperationsV1Operation_universal_d_createOperation: typeof createOperation;
  const restaurantsOperationsV1Operation_universal_d_getOperation: typeof getOperation;
  const restaurantsOperationsV1Operation_universal_d_updateOperation: typeof updateOperation;
  type restaurantsOperationsV1Operation_universal_d_UpdateOperation = UpdateOperation;
  type restaurantsOperationsV1Operation_universal_d_UpdateOperationOptions = UpdateOperationOptions;
  const restaurantsOperationsV1Operation_universal_d_deleteOperation: typeof deleteOperation;
  const restaurantsOperationsV1Operation_universal_d_queryOperation: typeof queryOperation;
  type restaurantsOperationsV1Operation_universal_d_OperationsQueryResult = OperationsQueryResult;
  type restaurantsOperationsV1Operation_universal_d_OperationsQueryBuilder = OperationsQueryBuilder;
  const restaurantsOperationsV1Operation_universal_d_listOperations: typeof listOperations;
  const restaurantsOperationsV1Operation_universal_d_listAvailableFulfillmentOptions: typeof listAvailableFulfillmentOptions;
  type restaurantsOperationsV1Operation_universal_d_ListAvailableFulfillmentOptions = ListAvailableFulfillmentOptions;
  const restaurantsOperationsV1Operation_universal_d_listFirstAvailableTimeSlotForFulfillmentTypes: typeof listFirstAvailableTimeSlotForFulfillmentTypes;
  type restaurantsOperationsV1Operation_universal_d_ListFirstAvailableTimeSlotForFulfillmentTypesOptions = ListFirstAvailableTimeSlotForFulfillmentTypesOptions;
  const restaurantsOperationsV1Operation_universal_d_listAvailableTimeSlotsForDate: typeof listAvailableTimeSlotsForDate;
  type restaurantsOperationsV1Operation_universal_d_ListAvailableTimeSlotsForDateOptions = ListAvailableTimeSlotsForDateOptions;
  const restaurantsOperationsV1Operation_universal_d_listAvailableDatesInRange: typeof listAvailableDatesInRange;
  type restaurantsOperationsV1Operation_universal_d_ListAvailableDatesInRangeOptions = ListAvailableDatesInRangeOptions;
  const restaurantsOperationsV1Operation_universal_d_getExpectedFulfillmentSelection: typeof getExpectedFulfillmentSelection;
  type restaurantsOperationsV1Operation_universal_d_GetExpectedFulfillmentSelectionOptions = GetExpectedFulfillmentSelectionOptions;
  namespace restaurantsOperationsV1Operation_universal_d {
    export {
      __debug$1 as __debug,
      restaurantsOperationsV1Operation_universal_d_Operation as Operation,
      restaurantsOperationsV1Operation_universal_d_OperationOnlineOrderingStatusOptionsOneOf as OperationOnlineOrderingStatusOptionsOneOf,
      restaurantsOperationsV1Operation_universal_d_Scheduling as Scheduling,
      restaurantsOperationsV1Operation_universal_d_SchedulingSchedulingOptionsOneOf as SchedulingSchedulingOptionsOneOf,
      restaurantsOperationsV1Operation_universal_d_SchedulingType as SchedulingType,
      restaurantsOperationsV1Operation_universal_d_AsapScheduling as AsapScheduling,
      restaurantsOperationsV1Operation_universal_d_AsapSchedulingPreparationTimeOneOf as AsapSchedulingPreparationTimeOneOf,
      restaurantsOperationsV1Operation_universal_d_AsapSchedulingAsapPreorderOneOf as AsapSchedulingAsapPreorderOneOf,
      restaurantsOperationsV1Operation_universal_d_PreparationTimeType as PreparationTimeType,
      restaurantsOperationsV1Operation_universal_d_TimeDuration as TimeDuration,
      restaurantsOperationsV1Operation_universal_d_TimeUnit as TimeUnit,
      restaurantsOperationsV1Operation_universal_d_TimeDurationRange as TimeDurationRange,
      restaurantsOperationsV1Operation_universal_d_AsapPreorderType as AsapPreorderType,
      restaurantsOperationsV1Operation_universal_d_BusinessDaysPreorder as BusinessDaysPreorder,
      restaurantsOperationsV1Operation_universal_d_PreorderScheduling as PreorderScheduling,
      restaurantsOperationsV1Operation_universal_d_PreorderMethod as PreorderMethod,
      restaurantsOperationsV1Operation_universal_d_PreorderMethodMethodOptionsOneOf as PreorderMethodMethodOptionsOneOf,
      restaurantsOperationsV1Operation_universal_d_DayAndTime as DayAndTime,
      DayOfWeek$6 as DayOfWeek,
      TimeOfDay$1 as TimeOfDay,
      restaurantsOperationsV1Operation_universal_d_MethodType as MethodType,
      restaurantsOperationsV1Operation_universal_d_TimeBounded as TimeBounded,
      restaurantsOperationsV1Operation_universal_d_WeeklySchedule as WeeklySchedule,
      restaurantsOperationsV1Operation_universal_d_FulfillmentTimesDisplayConfig as FulfillmentTimesDisplayConfig,
      restaurantsOperationsV1Operation_universal_d_FulfillmentTimesDisplayConfigFulfillmentTimesDisplayOptionsOneOf as FulfillmentTimesDisplayConfigFulfillmentTimesDisplayOptionsOneOf,
      restaurantsOperationsV1Operation_universal_d_FulfillmentTimesType as FulfillmentTimesType,
      restaurantsOperationsV1Operation_universal_d_OnlineOrderingStatusType as OnlineOrderingStatusType,
      restaurantsOperationsV1Operation_universal_d_OnlineOrderingPausedUntilOptions as OnlineOrderingPausedUntilOptions,
      InvalidateCache$2 as InvalidateCache,
      InvalidateCacheGetByOneOf$2 as InvalidateCacheGetByOneOf,
      App$2 as App,
      Page$2 as Page,
      URI$2 as URI,
      restaurantsOperationsV1Operation_universal_d_CreateOperationRequest as CreateOperationRequest,
      restaurantsOperationsV1Operation_universal_d_CreateOperationResponse as CreateOperationResponse,
      restaurantsOperationsV1Operation_universal_d_GetOperationRequest as GetOperationRequest,
      restaurantsOperationsV1Operation_universal_d_GetOperationResponse as GetOperationResponse,
      restaurantsOperationsV1Operation_universal_d_UpdateOperationRequest as UpdateOperationRequest,
      restaurantsOperationsV1Operation_universal_d_UpdateOperationResponse as UpdateOperationResponse,
      restaurantsOperationsV1Operation_universal_d_DeleteOperationRequest as DeleteOperationRequest,
      restaurantsOperationsV1Operation_universal_d_DeleteOperationResponse as DeleteOperationResponse,
      restaurantsOperationsV1Operation_universal_d_QueryOperationRequest as QueryOperationRequest,
      CursorQuery$1 as CursorQuery,
      CursorQueryPagingMethodOneOf$1 as CursorQueryPagingMethodOneOf,
      Sorting$2 as Sorting,
      SortOrder$3 as SortOrder,
      CursorPaging$2 as CursorPaging,
      restaurantsOperationsV1Operation_universal_d_QueryOperationResponse as QueryOperationResponse,
      CursorPagingMetadata$1 as CursorPagingMetadata,
      Cursors$2 as Cursors,
      restaurantsOperationsV1Operation_universal_d_ListOperationsRequest as ListOperationsRequest,
      restaurantsOperationsV1Operation_universal_d_ListOperationsResponse as ListOperationsResponse,
      restaurantsOperationsV1Operation_universal_d_ListAvailableFulfillmentOptionsRequest as ListAvailableFulfillmentOptionsRequest,
      Address$4 as Address,
      AddressStreetOneOf$1 as AddressStreetOneOf,
      StreetAddress$4 as StreetAddress,
      AddressLocation$5 as AddressLocation,
      Subdivision$2 as Subdivision,
      SubdivisionType$2 as SubdivisionType,
      restaurantsOperationsV1Operation_universal_d_ListAvailableFulfillmentOptionsResponse as ListAvailableFulfillmentOptionsResponse,
      restaurantsOperationsV1Operation_universal_d_FulfillmentOption as FulfillmentOption,
      restaurantsOperationsV1Operation_universal_d_FulfillmentOptionFulfillmentTimeOptionsOneOf as FulfillmentOptionFulfillmentTimeOptionsOneOf,
      restaurantsOperationsV1Operation_universal_d_FulfillmentOptionFulfillmentTimesDisplayOptionsOneOf as FulfillmentOptionFulfillmentTimesDisplayOptionsOneOf,
      restaurantsOperationsV1Operation_universal_d_FulfillmentOptionFulfillmentTypeOptionsOneOf as FulfillmentOptionFulfillmentTypeOptionsOneOf,
      FulfillmentType$3 as FulfillmentType,
      restaurantsOperationsV1Operation_universal_d_FulfillmentOptionAvailability as FulfillmentOptionAvailability,
      DayOfWeekAvailability$1 as DayOfWeekAvailability,
      TimeOfDayRange$1 as TimeOfDayRange,
      AvailabilityException$1 as AvailabilityException,
      restaurantsOperationsV1Operation_universal_d_FulfillmentTimeType as FulfillmentTimeType,
      restaurantsOperationsV1Operation_universal_d_DurationRange as DurationRange,
      restaurantsOperationsV1Operation_universal_d_FulfillmentTimesDisplayType as FulfillmentTimesDisplayType,
      restaurantsOperationsV1Operation_universal_d_TimeWindowDisplayConfig as TimeWindowDisplayConfig,
      PickupDetails$1 as PickupDetails,
      restaurantsOperationsV1Operation_universal_d_ListFirstAvailableTimeSlotForFulfillmentTypesRequest as ListFirstAvailableTimeSlotForFulfillmentTypesRequest,
      restaurantsOperationsV1Operation_universal_d_ListFirstAvailableTimeSlotForFulfillmentTypesResponse as ListFirstAvailableTimeSlotForFulfillmentTypesResponse,
      restaurantsOperationsV1Operation_universal_d_TimeSlot as TimeSlot,
      restaurantsOperationsV1Operation_universal_d_TimeSlotFeeOptionsOneOf as TimeSlotFeeOptionsOneOf,
      restaurantsOperationsV1Operation_universal_d_TimeSlotFulfillmentTimeOptionsOneOf as TimeSlotFulfillmentTimeOptionsOneOf,
      restaurantsOperationsV1Operation_universal_d_TimeSlotMinOrderPriceOptionsOneOf as TimeSlotMinOrderPriceOptionsOneOf,
      restaurantsOperationsV1Operation_universal_d_FeeType as FeeType,
      restaurantsOperationsV1Operation_universal_d_PriceRange as PriceRange,
      restaurantsOperationsV1Operation_universal_d_MinOrderPriceType as MinOrderPriceType,
      restaurantsOperationsV1Operation_universal_d_MinOrderPriceRange as MinOrderPriceRange,
      restaurantsOperationsV1Operation_universal_d_ListAvailableTimeSlotsForDateRequest as ListAvailableTimeSlotsForDateRequest,
      restaurantsOperationsV1Operation_universal_d__Date as _Date,
      restaurantsOperationsV1Operation_universal_d_ListAvailableTimeSlotsForDateResponse as ListAvailableTimeSlotsForDateResponse,
      restaurantsOperationsV1Operation_universal_d_ListAvailableDatesInRangeRequest as ListAvailableDatesInRangeRequest,
      restaurantsOperationsV1Operation_universal_d_ListAvailableDatesInRangeResponse as ListAvailableDatesInRangeResponse,
      restaurantsOperationsV1Operation_universal_d_GetExpectedFulfillmentSelectionRequest as GetExpectedFulfillmentSelectionRequest,
      restaurantsOperationsV1Operation_universal_d_GetExpectedFulfillmentSelectionResponse as GetExpectedFulfillmentSelectionResponse,
      DomainEvent$4 as DomainEvent,
      DomainEventBodyOneOf$4 as DomainEventBodyOneOf,
      EntityCreatedEvent$4 as EntityCreatedEvent,
      EntityUpdatedEvent$4 as EntityUpdatedEvent,
      EntityDeletedEvent$4 as EntityDeletedEvent,
      ActionEvent$4 as ActionEvent,
      Empty$4 as Empty,
      SitePropertiesNotification$1 as SitePropertiesNotification,
      SitePropertiesEvent$1 as SitePropertiesEvent,
      Properties$1 as Properties,
      Categories$1 as Categories,
      Locale$2 as Locale,
      restaurantsOperationsV1Operation_universal_d_V4Address as V4Address,
      AddressHint$1 as AddressHint,
      PlacementType$1 as PlacementType,
      GeoCoordinates$1 as GeoCoordinates,
      BusinessSchedule$1 as BusinessSchedule,
      TimePeriod$6 as TimePeriod,
      restaurantsOperationsV1Operation_universal_d_V4DayOfWeek as V4DayOfWeek,
      SpecialHourPeriod$6 as SpecialHourPeriod,
      Multilingual$1 as Multilingual,
      SupportedLanguage$1 as SupportedLanguage,
      ResolutionMethod$1 as ResolutionMethod,
      ConsentPolicy$1 as ConsentPolicy,
      Translation$1 as Translation,
      ChangeContext$1 as ChangeContext,
      ChangeContextPayloadOneOf$1 as ChangeContextPayloadOneOf,
      PropertiesChange$1 as PropertiesChange,
      SiteCreated$1 as SiteCreated,
      SiteCloned$1 as SiteCloned,
      restaurantsOperationsV1Operation_universal_d_createOperation as createOperation,
      restaurantsOperationsV1Operation_universal_d_getOperation as getOperation,
      restaurantsOperationsV1Operation_universal_d_updateOperation as updateOperation,
      restaurantsOperationsV1Operation_universal_d_UpdateOperation as UpdateOperation,
      restaurantsOperationsV1Operation_universal_d_UpdateOperationOptions as UpdateOperationOptions,
      restaurantsOperationsV1Operation_universal_d_deleteOperation as deleteOperation,
      restaurantsOperationsV1Operation_universal_d_queryOperation as queryOperation,
      restaurantsOperationsV1Operation_universal_d_OperationsQueryResult as OperationsQueryResult,
      restaurantsOperationsV1Operation_universal_d_OperationsQueryBuilder as OperationsQueryBuilder,
      restaurantsOperationsV1Operation_universal_d_listOperations as listOperations,
      restaurantsOperationsV1Operation_universal_d_listAvailableFulfillmentOptions as listAvailableFulfillmentOptions,
      restaurantsOperationsV1Operation_universal_d_ListAvailableFulfillmentOptions as ListAvailableFulfillmentOptions,
      restaurantsOperationsV1Operation_universal_d_listFirstAvailableTimeSlotForFulfillmentTypes as listFirstAvailableTimeSlotForFulfillmentTypes,
      restaurantsOperationsV1Operation_universal_d_ListFirstAvailableTimeSlotForFulfillmentTypesOptions as ListFirstAvailableTimeSlotForFulfillmentTypesOptions,
      restaurantsOperationsV1Operation_universal_d_listAvailableTimeSlotsForDate as listAvailableTimeSlotsForDate,
      restaurantsOperationsV1Operation_universal_d_ListAvailableTimeSlotsForDateOptions as ListAvailableTimeSlotsForDateOptions,
      restaurantsOperationsV1Operation_universal_d_listAvailableDatesInRange as listAvailableDatesInRange,
      restaurantsOperationsV1Operation_universal_d_ListAvailableDatesInRangeOptions as ListAvailableDatesInRangeOptions,
      restaurantsOperationsV1Operation_universal_d_getExpectedFulfillmentSelection as getExpectedFulfillmentSelection,
      restaurantsOperationsV1Operation_universal_d_GetExpectedFulfillmentSelectionOptions as GetExpectedFulfillmentSelectionOptions,
    };
  }
  
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /** `FulfillmentMethod` is the main entity of `FulfillmentMethodsService' and represents the way of a restaurant to provide orders to its customers. */
  interface FulfillmentMethod$1 extends FulfillmentMethodMethodOptionsOneOf {
      /** Data specific for pickup fulfillment method. */
      pickupOptions?: PickupInfo$2;
      /** Data specific for delivery fulfillment method. */
      deliveryOptions?: DeliveryInfo$1;
      /**
       * The ID of the fulfillment method.
       * @readonly
       */
      _id?: string | null;
      /**
       * The current state of an item. Each time the item is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision.
       * @readonly
       */
      revision?: string | null;
      /**
       * Timestamp at which the fulfillment method was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Timestamp at which the fulfillment method was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** The fulfillment method type. */
      type?: FulfillmentMethodType$1;
      /** The minimum order price to qualify for using this fulfillment method. */
      minimumOrderAmount?: string | null;
      /** The fulfillment method name. */
      name?: string | null;
      /** An indication of whether the fulfillment method is enabled or not. */
      enabled?: boolean | null;
      /** The fee for using this fulfillment method. */
      fee?: string | null;
      /** The availability of this fulfillment method. */
      availability?: Availability$5;
  }
  /** @oneof */
  interface FulfillmentMethodMethodOptionsOneOf {
      /** Data specific for pickup fulfillment method. */
      pickupOptions?: PickupInfo$2;
      /** Data specific for delivery fulfillment method. */
      deliveryOptions?: DeliveryInfo$1;
  }
  enum FulfillmentMethodType$1 {
      /** Missing type due to an error. */
      UNKNOWN_FULFILLMENT_TYPE = "UNKNOWN_FULFILLMENT_TYPE",
      /** Pickup fulfillment method - refers to the customer picking up the order from the restaurant. */
      PICKUP = "PICKUP",
      /** Delivery fulfillment method - refers to the restaurant or someone on behalf of the restaurant delivering the order to the customer. */
      DELIVERY = "DELIVERY"
  }
  interface PickupInfo$2 {
      /** Instructions for the pickup. */
      instructions?: string | null;
      /**
       * Pickup address.
       * The address of the restaurant will be used.
       * @readonly
       */
      address?: CommonAddress;
  }
  /** Physical address */
  interface CommonAddress extends CommonAddressStreetOneOf {
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
      location?: AddressLocation$4;
  }
  /** @oneof */
  interface CommonAddressStreetOneOf {
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
  interface AddressLocation$4 {
      /** Address latitude. */
      latitude?: number | null;
      /** Address longitude. */
      longitude?: number | null;
  }
  interface Subdivision$1 {
      /** Short subdivision code. */
      code?: string;
      /** Subdivision full name. */
      name?: string;
      /**
       * Subdivision level
       * @internal
       */
      type?: SubdivisionType$1;
      /**
       * Free text description of subdivision type.
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
  interface DeliveryInfo$1 {
      /** The estimated delivery time in minutes. */
      deliveryTimeInMinutes?: number | null;
      /**
       * Threshold for offering free delivery.
       * If order price exceeds this threshold, the delivery fee is waived.
       */
      freeDeliveryThreshold?: string | null;
      /** The delivery area that is supported by this delivery fulfillment method. */
      deliveryArea?: DeliveryArea;
  }
  interface DeliveryArea extends DeliveryAreaAreaOptionsOneOf {
      /** Data specific for radius delivery area. */
      radiusOptions?: Radius;
      /** Data specific for postal code delivery area. */
      postalCodeOptions?: PostalCode;
      /** Data specific for custom delivery area. */
      customOptions?: CustomArea;
      /** The type of the delivery area. */
      type?: Type$4;
  }
  /** @oneof */
  interface DeliveryAreaAreaOptionsOneOf {
      /** Data specific for radius delivery area. */
      radiusOptions?: Radius;
      /** Data specific for postal code delivery area. */
      postalCodeOptions?: PostalCode;
      /** Data specific for custom delivery area. */
      customOptions?: CustomArea;
  }
  enum Type$4 {
      /** Unknown delivery area type. */
      UNKNOWN_DELIVERY_AREA = "UNKNOWN_DELIVERY_AREA",
      /**
       * Delivery area that is defined by a radius around an address.
       * The address of the restaurant will be used.
       */
      RADIUS = "RADIUS",
      /** Delivery area that is defined by a list of postal codes. */
      POSTAL_CODE = "POSTAL_CODE",
      /** Delivery area that is defined by a custom polygon. */
      CUSTOM = "CUSTOM"
  }
  interface Radius {
      /**
       * The radius value.
       * The unit of the radius will be given in the `unit` field.
       */
      value?: string | null;
      /**
       * The address of the center of the circle.
       * @readonly
       */
      centerPointAddress?: CommonAddress;
      /** The distance unit of the radius. */
      unit?: Unit;
  }
  enum Unit {
      /** Unknown unit. */
      UNKNOWN_UNIT = "UNKNOWN_UNIT",
      /** Miles. */
      MILES = "MILES",
      /** Kilometers. */
      KILOMETERS = "KILOMETERS"
  }
  interface PostalCode {
      /** The postal code of the delivery area. */
      postalCode?: string | null;
      /**
       * The country code in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
       * @readonly
       */
      countryCode?: string | null;
      /**
       * A list of postal codes and postal code regexes. List of postal codes and postal code regexes. Examples: 10001, 10002 or 1000*
       * A postal code regex will enable you to define a range of postal codes using an asterisk (*).
       * For example, in order to include the postal codes in the range of 10001-10009, 1000* can be used.
       */
      postalCodes?: string[] | null;
  }
  interface CustomArea {
      /** Geocodes of the polygon that defines the delivery area. */
      geocodes?: AddressLocation$4[];
  }
  interface Availability$5 {
      /** A list of availability times for the days of the week. */
      availableTimes?: DayOfWeekAvailability[];
      /**
       * A list of availability exception.
       * An availability exception is some availability for a specific time, that is different from the usual availability defined in `available_times`. The availability exception overrides the availability defined in `available_times`.
       * For example, a restaurants may decide to disable the availability for a specific time range, or to enable the availability for a specific time range that is not available in the usual availability.
       */
      exceptions?: AvailabilityException[];
      /**
       * The timezone in which the availability times are given.
       * @readonly
       */
      timeZone?: string | null;
  }
  interface DayOfWeekAvailability {
      /** The day of week this availability relates to. */
      dayOfWeek?: EntitiesDayOfWeek;
      /** A list of time ranges during which the fulfillment should be available. */
      timeRanges?: TimeOfDayRange[];
  }
  enum EntitiesDayOfWeek {
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
  interface TimeOfDayRange {
      /** The start time in time of day representation. */
      startTime?: TimeOfDay;
      /** The end time in time of day representation. */
      endTime?: TimeOfDay;
  }
  interface TimeOfDay {
      /** Hours (0-23) */
      hours?: number;
      /** Minutes (0-59) */
      minutes?: number;
  }
  interface AvailabilityException {
      /** The start time of the availability exception. */
      startTime?: Date;
      /** The end time of the availability exception. */
      endTime?: Date;
      /** An indication whether the exception makes the [`start_time`, `end_time`] range available. */
      available?: boolean;
      /** The reason for the exception. */
      reason?: string | null;
  }
  interface InvalidateCache$1 extends InvalidateCacheGetByOneOf$1 {
      /** Invalidate by msId. NOT recommended, as this will invalidate the entire site cache! */
      metaSiteId?: string;
      /** Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache! */
      siteId?: string;
      /** Invalidate by App */
      app?: App$1;
      /** Invalidate by page id */
      page?: Page$1;
      /** Invalidate by URI path */
      uri?: URI$1;
      /** tell us why you're invalidating the cache. You don't need to add your app name */
      reason?: string | null;
      /** Is local DS */
      localDc?: boolean;
  }
  /** @oneof */
  interface InvalidateCacheGetByOneOf$1 {
      /** Invalidate by msId. NOT recommended, as this will invalidate the entire site cache! */
      metaSiteId?: string;
      /** Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache! */
      siteId?: string;
      /** Invalidate by App */
      app?: App$1;
      /** Invalidate by page id */
      page?: Page$1;
      /** Invalidate by URI path */
      uri?: URI$1;
  }
  interface App$1 {
      /** The AppDefId */
      appDefId?: string;
      /** The instance Id */
      instanceId?: string;
  }
  interface Page$1 {
      /** the msid the page is on */
      metaSiteId?: string;
      /** Invalidate by Page ID */
      pageId?: string;
  }
  interface URI$1 {
      /** the msid the URI is on */
      metaSiteId?: string;
      /** URI path to invalidate (e.g. page/my/path) - without leading/trailing slashes */
      uriPath?: string;
  }
  interface CreateFulfillmentMethodRequest$1 {
      /** Fulfillment method to create. */
      fulfillmentMethod: FulfillmentMethod$1;
  }
  interface CreateFulfillmentMethodResponse$1 {
      /** The created fulfillment method. */
      fulfillmentMethod?: FulfillmentMethod$1;
  }
  interface GetFulfillmentMethodRequest$1 {
      /** The ID of the fulfillment method to retrieve. */
      fulfillmentMethodId: string;
  }
  interface GetFulfillmentMethodResponse$1 {
      /** The retrieved fulfillment method. */
      fulfillmentMethod?: FulfillmentMethod$1;
  }
  interface UpdateFulfillmentMethodRequest$1 {
      /**
       * Fulfillment method to update.
       * The fulfillment method update may be partial with the use of `field_mask`.
       */
      fulfillmentMethod: FulfillmentMethod$1;
      /**
       * Field mask of the fields to update.
       * @internal
       */
      fieldMask?: string[];
  }
  interface UpdateFulfillmentMethodResponse$1 {
      /** The updated fulfillment method. */
      fulfillmentMethod?: FulfillmentMethod$1;
  }
  interface DeleteFulfillmentMethodRequest$1 {
      /** The ID of the fulfillment method to delete. */
      fulfillmentMethodId: string;
  }
  interface DeleteFulfillmentMethodResponse$1 {
  }
  interface QueryFulfillmentMethodsRequest {
      /** The query by which to select fulfillment methods. */
      query?: CursorQuery;
      /** Projection mask of the fields to return. */
      projectionMask?: string[];
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
       * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
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
  interface Sorting$1 {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
      order?: SortOrder$2;
  }
  enum SortOrder$2 {
      ASC = "ASC",
      DESC = "DESC"
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
  interface QueryFulfillmentMethodsResponse {
      /** The retrieved fulfillment methods. */
      fulfillmentMethods?: FulfillmentMethod$1[];
      /** The metadata of the paginated results. */
      pagingMetadata?: CursorPagingMetadata;
  }
  interface CursorPagingMetadata {
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
  interface ListFulfillmentMethodsRequest$1 {
      /** The address by which to filter delivery fulfillment methods. */
      address?: CommonAddress;
  }
  interface ListFulfillmentMethodsResponse$1 {
      /** The retrieved fulfillment methods. */
      fulfillmentMethods?: FulfillmentMethod$1[];
      /** The metadata of the paginated results. */
      pagingMetadata?: CursorPagingMetadata;
  }
  interface ListAvailableFulfillmentMethodsForAddressRequest {
      /** The address by which to filter delivery fulfillment methods. */
      address?: CommonAddress;
      /** Cursor paging */
      cursorPaging?: CursorPaging$1;
      /** If provided, only fulfillment methods with the given IDs will be returned. */
      fulfillmentMethodIds?: string[];
  }
  interface ListAvailableFulfillmentMethodsForAddressResponse {
      /** The retrieved fulfillment methods. */
      fulfillmentMethods?: FulfillmentMethod$1[];
      /** The metadata of the paginated results. */
      pagingMetadata?: CursorPagingMetadata;
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
      /** Set of properties that were updated - corresponds to the fields in "properties". */
      fields?: string[];
      /** Updated properties. */
      properties?: Properties;
  }
  interface Properties {
      /** Site categories. */
      categories?: Categories;
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
      address?: Address$3;
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
      businessSchedule?: BusinessSchedule;
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
  interface Locale$1 {
      /** Two-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format. */
      languageCode?: string;
      /** Two-letter country code in [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) format. */
      country?: string;
  }
  interface Address$3 {
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
  interface BusinessSchedule {
      /** Weekly recurring time periods when the business is regularly open or the service is available. Limited to 100 time periods. */
      periods?: TimePeriod$5[];
      /** Exceptions to the business's regular hours. The business can be open or closed during the exception. */
      specialHourPeriod?: SpecialHourPeriod$5[];
  }
  /** Weekly recurring time periods when the business is regularly open or the service is available. */
  interface TimePeriod$5 {
      /** Day of the week the period starts on. */
      openDay?: DayOfWeek$5;
      /**
       * Time the period starts in 24-hour [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) extended format. Valid values are `00:00` to `24:00`, where `24:00` represents
       * midnight at the end of the specified day.
       */
      openTime?: string;
      /** Day of the week the period ends on. */
      closeDay?: DayOfWeek$5;
      /**
       * Time the period ends in 24-hour [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) extended format. Valid values are `00:00` to `24:00`, where `24:00` represents
       * midnight at the end of the specified day.
       *
       * __Note:__ If `openDay` and `closeDay` specify the same day of the week `closeTime` must be later than `openTime`.
       */
      closeTime?: string;
  }
  /** Enumerates the days of the week. */
  enum DayOfWeek$5 {
      MONDAY = "MONDAY",
      TUESDAY = "TUESDAY",
      WEDNESDAY = "WEDNESDAY",
      THURSDAY = "THURSDAY",
      FRIDAY = "FRIDAY",
      SATURDAY = "SATURDAY",
      SUNDAY = "SUNDAY"
  }
  /** Exception to the business's regular hours. The business can be open or closed during the exception. */
  interface SpecialHourPeriod$5 {
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
      locale?: Locale$1;
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
  interface Empty$3 {
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
  }
  interface ActionEvent$3 {
      bodyAsJson?: string;
  }
  /**
   * Creates a new fulfillment method.
   *
   * Regardless of the value specified in `fulfillment_method.availability.time_zone`, the timezone will be derived from the site properties.
   * @param fulfillmentMethod - Fulfillment method to create.
   * @internal
   * @documentationMaturity preview
   * @requiredField fulfillmentMethod
   * @requiredField fulfillmentMethod.availability.timeZone
   * @requiredField fulfillmentMethod.deliveryOptions.deliveryArea
   * @requiredField fulfillmentMethod.deliveryOptions.deliveryArea.postalCodeOptions.countryCode
   * @requiredField fulfillmentMethod.deliveryOptions.deliveryArea.radiusOptions.centerPointAddress
   * @requiredField fulfillmentMethod.deliveryOptions.deliveryArea.radiusOptions.value
   * @requiredField fulfillmentMethod.pickupOptions.address
   * @adminMethod
   * @returns The created fulfillment method.
   */
  function createFulfillmentMethod$1(fulfillmentMethod: FulfillmentMethod$1): Promise<FulfillmentMethod$1>;
  /**
   * Retrieves a fulfillment method.
   * @param fulfillmentMethodId - The ID of the fulfillment method to retrieve.
   * @internal
   * @documentationMaturity preview
   * @requiredField fulfillmentMethodId
   * @returns The retrieved fulfillment method.
   */
  function getFulfillmentMethod$1(fulfillmentMethodId: string): Promise<FulfillmentMethod$1>;
  /**
   * Updates a fulfillment method.
   *
   * Each time the fulfillment method is updated, revision increments by 1. The existing revision must be included when updating the fulfillment method. This ensures you're working with the latest fulfillment method information, and it prevents unintended overwrites.
   * @param _id - The ID of the fulfillment method.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField fulfillmentMethod
   * @requiredField fulfillmentMethod.revision
   * @adminMethod
   * @returns The updated fulfillment method.
   */
  function updateFulfillmentMethod$1(_id: string | null, fulfillmentMethod: UpdateFulfillmentMethod$1, options?: UpdateFulfillmentMethodOptions$1): Promise<FulfillmentMethod$1>;
  interface UpdateFulfillmentMethod$1 {
      /** Data specific for pickup fulfillment method. */
      pickupOptions?: PickupInfo$2;
      /** Data specific for delivery fulfillment method. */
      deliveryOptions?: DeliveryInfo$1;
      /**
       * The ID of the fulfillment method.
       * @readonly
       */
      _id?: string | null;
      /**
       * The current state of an item. Each time the item is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision.
       * @readonly
       */
      revision?: string | null;
      /**
       * Timestamp at which the fulfillment method was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Timestamp at which the fulfillment method was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** The fulfillment method type. */
      type?: FulfillmentMethodType$1;
      /** The minimum order price to qualify for using this fulfillment method. */
      minimumOrderAmount?: string | null;
      /** The fulfillment method name. */
      name?: string | null;
      /** An indication of whether the fulfillment method is enabled or not. */
      enabled?: boolean | null;
      /** The fee for using this fulfillment method. */
      fee?: string | null;
      /** The availability of this fulfillment method. */
      availability?: Availability$5;
  }
  interface UpdateFulfillmentMethodOptions$1 {
      /**
       * Field mask of the fields to update.
       * @internal
       */
      fieldMask?: string[];
  }
  /**
   * Deletes a fulfillment method.
   * @param fulfillmentMethodId - The ID of the fulfillment method to delete.
   * @internal
   * @documentationMaturity preview
   * @requiredField fulfillmentMethodId
   * @adminMethod
   */
  function deleteFulfillmentMethod$1(fulfillmentMethodId: string): Promise<void>;
  /**
   * Retrieves a list of fulfillment methods by a given query.
   *
   * To learn how to query fulfillment methods, see [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language).
   *
   * Up to 100 fulfillment methods can be returned per request.
   * @internal
   * @documentationMaturity preview
   */
  function queryFulfillmentMethods(options?: QueryFulfillmentMethodsOptions): FulfillmentMethodsQueryBuilder;
  interface QueryFulfillmentMethodsOptions {
      /** Projection mask of the fields to return. */
      projectionMask?: string[] | undefined;
  }
  interface QueryCursorResult {
      cursors: Cursors$1;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface FulfillmentMethodsQueryResult extends QueryCursorResult {
      items: FulfillmentMethod$1[];
      query: FulfillmentMethodsQueryBuilder;
      next: () => Promise<FulfillmentMethodsQueryResult>;
      prev: () => Promise<FulfillmentMethodsQueryResult>;
  }
  interface FulfillmentMethodsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id', value: any) => FulfillmentMethodsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id', value: any) => FulfillmentMethodsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       * @documentationMaturity preview
       */
      startsWith: (propertyName: '_id', value: string) => FulfillmentMethodsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       * @documentationMaturity preview
       */
      hasSome: (propertyName: '_id', value: any[]) => FulfillmentMethodsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id', value: any) => FulfillmentMethodsQueryBuilder;
      /** @documentationMaturity preview */
      exists: (propertyName: '_id', value: boolean) => FulfillmentMethodsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'_id'>) => FulfillmentMethodsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'_id'>) => FulfillmentMethodsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => FulfillmentMethodsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => FulfillmentMethodsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<FulfillmentMethodsQueryResult>;
  }
  /**
   * Retrieves a list of fulfillment methods.
   *
   * When an address is not provided in the input, our system retrieves a list encompassing all types of fulfillment methods.
   *
   * Conversely, if an address is given, the response includes non-delivery fulfillment methods along with delivery fulfillment methods that are applicable to the given address, ensuring the address falls within the defined delivery area of these methods.
   *
   * Up to 100 fulfillment methods can be returned.
   *
   * TODO: add support for pagination in the request since it's given in the response, and add docs reference regarding how to do the pagination
   * @internal
   * @documentationMaturity preview
   */
  function listFulfillmentMethods$1(options?: ListFulfillmentMethodsOptions$1): Promise<ListFulfillmentMethodsResponse$1>;
  interface ListFulfillmentMethodsOptions$1 {
      /** The address by which to filter delivery fulfillment methods. */
      address?: CommonAddress;
  }
  /**
   * Retrieves a list of fulfillment methods available for a given address.
   *
   * The response includes non-delivery fulfillment methods along with delivery fulfillment methods that are applicable to the given address, ensuring the address falls within the defined delivery area of these methods.
   *
   * Up to 100 fulfillment methods can be returned per request.
   * @internal
   * @documentationMaturity preview
   */
  function listAvailableFulfillmentMethodsForAddress(options?: ListAvailableFulfillmentMethodsForAddressOptions): Promise<ListAvailableFulfillmentMethodsForAddressResponse>;
  interface ListAvailableFulfillmentMethodsForAddressOptions {
      /** The address by which to filter delivery fulfillment methods. */
      address?: CommonAddress;
      /** Cursor paging */
      cursorPaging?: CursorPaging$1;
      /** If provided, only fulfillment methods with the given IDs will be returned. */
      fulfillmentMethodIds?: string[];
  }
  
  const restaurantsV1FulfillmentMethod_universal_d___debug: typeof __debug;
  type restaurantsV1FulfillmentMethod_universal_d_FulfillmentMethodMethodOptionsOneOf = FulfillmentMethodMethodOptionsOneOf;
  type restaurantsV1FulfillmentMethod_universal_d_CommonAddress = CommonAddress;
  type restaurantsV1FulfillmentMethod_universal_d_CommonAddressStreetOneOf = CommonAddressStreetOneOf;
  type restaurantsV1FulfillmentMethod_universal_d_DeliveryArea = DeliveryArea;
  type restaurantsV1FulfillmentMethod_universal_d_DeliveryAreaAreaOptionsOneOf = DeliveryAreaAreaOptionsOneOf;
  type restaurantsV1FulfillmentMethod_universal_d_Radius = Radius;
  type restaurantsV1FulfillmentMethod_universal_d_Unit = Unit;
  const restaurantsV1FulfillmentMethod_universal_d_Unit: typeof Unit;
  type restaurantsV1FulfillmentMethod_universal_d_PostalCode = PostalCode;
  type restaurantsV1FulfillmentMethod_universal_d_CustomArea = CustomArea;
  type restaurantsV1FulfillmentMethod_universal_d_DayOfWeekAvailability = DayOfWeekAvailability;
  type restaurantsV1FulfillmentMethod_universal_d_EntitiesDayOfWeek = EntitiesDayOfWeek;
  const restaurantsV1FulfillmentMethod_universal_d_EntitiesDayOfWeek: typeof EntitiesDayOfWeek;
  type restaurantsV1FulfillmentMethod_universal_d_TimeOfDayRange = TimeOfDayRange;
  type restaurantsV1FulfillmentMethod_universal_d_TimeOfDay = TimeOfDay;
  type restaurantsV1FulfillmentMethod_universal_d_AvailabilityException = AvailabilityException;
  type restaurantsV1FulfillmentMethod_universal_d_QueryFulfillmentMethodsRequest = QueryFulfillmentMethodsRequest;
  type restaurantsV1FulfillmentMethod_universal_d_CursorQuery = CursorQuery;
  type restaurantsV1FulfillmentMethod_universal_d_CursorQueryPagingMethodOneOf = CursorQueryPagingMethodOneOf;
  type restaurantsV1FulfillmentMethod_universal_d_QueryFulfillmentMethodsResponse = QueryFulfillmentMethodsResponse;
  type restaurantsV1FulfillmentMethod_universal_d_CursorPagingMetadata = CursorPagingMetadata;
  type restaurantsV1FulfillmentMethod_universal_d_ListAvailableFulfillmentMethodsForAddressRequest = ListAvailableFulfillmentMethodsForAddressRequest;
  type restaurantsV1FulfillmentMethod_universal_d_ListAvailableFulfillmentMethodsForAddressResponse = ListAvailableFulfillmentMethodsForAddressResponse;
  type restaurantsV1FulfillmentMethod_universal_d_SitePropertiesNotification = SitePropertiesNotification;
  type restaurantsV1FulfillmentMethod_universal_d_SitePropertiesEvent = SitePropertiesEvent;
  type restaurantsV1FulfillmentMethod_universal_d_Properties = Properties;
  type restaurantsV1FulfillmentMethod_universal_d_Categories = Categories;
  type restaurantsV1FulfillmentMethod_universal_d_AddressHint = AddressHint;
  type restaurantsV1FulfillmentMethod_universal_d_PlacementType = PlacementType;
  const restaurantsV1FulfillmentMethod_universal_d_PlacementType: typeof PlacementType;
  type restaurantsV1FulfillmentMethod_universal_d_GeoCoordinates = GeoCoordinates;
  type restaurantsV1FulfillmentMethod_universal_d_BusinessSchedule = BusinessSchedule;
  type restaurantsV1FulfillmentMethod_universal_d_Multilingual = Multilingual;
  type restaurantsV1FulfillmentMethod_universal_d_SupportedLanguage = SupportedLanguage;
  type restaurantsV1FulfillmentMethod_universal_d_ResolutionMethod = ResolutionMethod;
  const restaurantsV1FulfillmentMethod_universal_d_ResolutionMethod: typeof ResolutionMethod;
  type restaurantsV1FulfillmentMethod_universal_d_ConsentPolicy = ConsentPolicy;
  type restaurantsV1FulfillmentMethod_universal_d_Translation = Translation;
  type restaurantsV1FulfillmentMethod_universal_d_ChangeContext = ChangeContext;
  type restaurantsV1FulfillmentMethod_universal_d_ChangeContextPayloadOneOf = ChangeContextPayloadOneOf;
  type restaurantsV1FulfillmentMethod_universal_d_PropertiesChange = PropertiesChange;
  type restaurantsV1FulfillmentMethod_universal_d_SiteCreated = SiteCreated;
  type restaurantsV1FulfillmentMethod_universal_d_SiteCloned = SiteCloned;
  const restaurantsV1FulfillmentMethod_universal_d_queryFulfillmentMethods: typeof queryFulfillmentMethods;
  type restaurantsV1FulfillmentMethod_universal_d_QueryFulfillmentMethodsOptions = QueryFulfillmentMethodsOptions;
  type restaurantsV1FulfillmentMethod_universal_d_FulfillmentMethodsQueryResult = FulfillmentMethodsQueryResult;
  type restaurantsV1FulfillmentMethod_universal_d_FulfillmentMethodsQueryBuilder = FulfillmentMethodsQueryBuilder;
  const restaurantsV1FulfillmentMethod_universal_d_listAvailableFulfillmentMethodsForAddress: typeof listAvailableFulfillmentMethodsForAddress;
  type restaurantsV1FulfillmentMethod_universal_d_ListAvailableFulfillmentMethodsForAddressOptions = ListAvailableFulfillmentMethodsForAddressOptions;
  namespace restaurantsV1FulfillmentMethod_universal_d {
    export {
      restaurantsV1FulfillmentMethod_universal_d___debug as __debug,
      FulfillmentMethod$1 as FulfillmentMethod,
      restaurantsV1FulfillmentMethod_universal_d_FulfillmentMethodMethodOptionsOneOf as FulfillmentMethodMethodOptionsOneOf,
      FulfillmentMethodType$1 as FulfillmentMethodType,
      PickupInfo$2 as PickupInfo,
      restaurantsV1FulfillmentMethod_universal_d_CommonAddress as CommonAddress,
      restaurantsV1FulfillmentMethod_universal_d_CommonAddressStreetOneOf as CommonAddressStreetOneOf,
      StreetAddress$3 as StreetAddress,
      AddressLocation$4 as AddressLocation,
      Subdivision$1 as Subdivision,
      SubdivisionType$1 as SubdivisionType,
      DeliveryInfo$1 as DeliveryInfo,
      restaurantsV1FulfillmentMethod_universal_d_DeliveryArea as DeliveryArea,
      restaurantsV1FulfillmentMethod_universal_d_DeliveryAreaAreaOptionsOneOf as DeliveryAreaAreaOptionsOneOf,
      Type$4 as Type,
      restaurantsV1FulfillmentMethod_universal_d_Radius as Radius,
      restaurantsV1FulfillmentMethod_universal_d_Unit as Unit,
      restaurantsV1FulfillmentMethod_universal_d_PostalCode as PostalCode,
      restaurantsV1FulfillmentMethod_universal_d_CustomArea as CustomArea,
      Availability$5 as Availability,
      restaurantsV1FulfillmentMethod_universal_d_DayOfWeekAvailability as DayOfWeekAvailability,
      restaurantsV1FulfillmentMethod_universal_d_EntitiesDayOfWeek as EntitiesDayOfWeek,
      restaurantsV1FulfillmentMethod_universal_d_TimeOfDayRange as TimeOfDayRange,
      restaurantsV1FulfillmentMethod_universal_d_TimeOfDay as TimeOfDay,
      restaurantsV1FulfillmentMethod_universal_d_AvailabilityException as AvailabilityException,
      InvalidateCache$1 as InvalidateCache,
      InvalidateCacheGetByOneOf$1 as InvalidateCacheGetByOneOf,
      App$1 as App,
      Page$1 as Page,
      URI$1 as URI,
      CreateFulfillmentMethodRequest$1 as CreateFulfillmentMethodRequest,
      CreateFulfillmentMethodResponse$1 as CreateFulfillmentMethodResponse,
      GetFulfillmentMethodRequest$1 as GetFulfillmentMethodRequest,
      GetFulfillmentMethodResponse$1 as GetFulfillmentMethodResponse,
      UpdateFulfillmentMethodRequest$1 as UpdateFulfillmentMethodRequest,
      UpdateFulfillmentMethodResponse$1 as UpdateFulfillmentMethodResponse,
      DeleteFulfillmentMethodRequest$1 as DeleteFulfillmentMethodRequest,
      DeleteFulfillmentMethodResponse$1 as DeleteFulfillmentMethodResponse,
      restaurantsV1FulfillmentMethod_universal_d_QueryFulfillmentMethodsRequest as QueryFulfillmentMethodsRequest,
      restaurantsV1FulfillmentMethod_universal_d_CursorQuery as CursorQuery,
      restaurantsV1FulfillmentMethod_universal_d_CursorQueryPagingMethodOneOf as CursorQueryPagingMethodOneOf,
      Sorting$1 as Sorting,
      SortOrder$2 as SortOrder,
      CursorPaging$1 as CursorPaging,
      restaurantsV1FulfillmentMethod_universal_d_QueryFulfillmentMethodsResponse as QueryFulfillmentMethodsResponse,
      restaurantsV1FulfillmentMethod_universal_d_CursorPagingMetadata as CursorPagingMetadata,
      Cursors$1 as Cursors,
      ListFulfillmentMethodsRequest$1 as ListFulfillmentMethodsRequest,
      ListFulfillmentMethodsResponse$1 as ListFulfillmentMethodsResponse,
      restaurantsV1FulfillmentMethod_universal_d_ListAvailableFulfillmentMethodsForAddressRequest as ListAvailableFulfillmentMethodsForAddressRequest,
      restaurantsV1FulfillmentMethod_universal_d_ListAvailableFulfillmentMethodsForAddressResponse as ListAvailableFulfillmentMethodsForAddressResponse,
      restaurantsV1FulfillmentMethod_universal_d_SitePropertiesNotification as SitePropertiesNotification,
      restaurantsV1FulfillmentMethod_universal_d_SitePropertiesEvent as SitePropertiesEvent,
      restaurantsV1FulfillmentMethod_universal_d_Properties as Properties,
      restaurantsV1FulfillmentMethod_universal_d_Categories as Categories,
      Locale$1 as Locale,
      Address$3 as Address,
      restaurantsV1FulfillmentMethod_universal_d_AddressHint as AddressHint,
      restaurantsV1FulfillmentMethod_universal_d_PlacementType as PlacementType,
      restaurantsV1FulfillmentMethod_universal_d_GeoCoordinates as GeoCoordinates,
      restaurantsV1FulfillmentMethod_universal_d_BusinessSchedule as BusinessSchedule,
      TimePeriod$5 as TimePeriod,
      DayOfWeek$5 as DayOfWeek,
      SpecialHourPeriod$5 as SpecialHourPeriod,
      restaurantsV1FulfillmentMethod_universal_d_Multilingual as Multilingual,
      restaurantsV1FulfillmentMethod_universal_d_SupportedLanguage as SupportedLanguage,
      restaurantsV1FulfillmentMethod_universal_d_ResolutionMethod as ResolutionMethod,
      restaurantsV1FulfillmentMethod_universal_d_ConsentPolicy as ConsentPolicy,
      restaurantsV1FulfillmentMethod_universal_d_Translation as Translation,
      restaurantsV1FulfillmentMethod_universal_d_ChangeContext as ChangeContext,
      restaurantsV1FulfillmentMethod_universal_d_ChangeContextPayloadOneOf as ChangeContextPayloadOneOf,
      restaurantsV1FulfillmentMethod_universal_d_PropertiesChange as PropertiesChange,
      restaurantsV1FulfillmentMethod_universal_d_SiteCreated as SiteCreated,
      restaurantsV1FulfillmentMethod_universal_d_SiteCloned as SiteCloned,
      Empty$3 as Empty,
      DomainEvent$3 as DomainEvent,
      DomainEventBodyOneOf$3 as DomainEventBodyOneOf,
      EntityCreatedEvent$3 as EntityCreatedEvent,
      EntityUpdatedEvent$3 as EntityUpdatedEvent,
      EntityDeletedEvent$3 as EntityDeletedEvent,
      ActionEvent$3 as ActionEvent,
      createFulfillmentMethod$1 as createFulfillmentMethod,
      getFulfillmentMethod$1 as getFulfillmentMethod,
      updateFulfillmentMethod$1 as updateFulfillmentMethod,
      UpdateFulfillmentMethod$1 as UpdateFulfillmentMethod,
      UpdateFulfillmentMethodOptions$1 as UpdateFulfillmentMethodOptions,
      deleteFulfillmentMethod$1 as deleteFulfillmentMethod,
      restaurantsV1FulfillmentMethod_universal_d_queryFulfillmentMethods as queryFulfillmentMethods,
      restaurantsV1FulfillmentMethod_universal_d_QueryFulfillmentMethodsOptions as QueryFulfillmentMethodsOptions,
      restaurantsV1FulfillmentMethod_universal_d_FulfillmentMethodsQueryResult as FulfillmentMethodsQueryResult,
      restaurantsV1FulfillmentMethod_universal_d_FulfillmentMethodsQueryBuilder as FulfillmentMethodsQueryBuilder,
      listFulfillmentMethods$1 as listFulfillmentMethods,
      ListFulfillmentMethodsOptions$1 as ListFulfillmentMethodsOptions,
      restaurantsV1FulfillmentMethod_universal_d_listAvailableFulfillmentMethodsForAddress as listAvailableFulfillmentMethodsForAddress,
      restaurantsV1FulfillmentMethod_universal_d_ListAvailableFulfillmentMethodsForAddressOptions as ListAvailableFulfillmentMethodsForAddressOptions,
    };
  }
  
  interface Tpa$1 {
  }
  interface ListAccountIdsRequest$1 {
      /** Instance ID. */
      instanceId: string;
  }
  interface ListAccountIdsResponse$1 {
      /** Account IDs. */
      accountIds?: string[];
  }
  interface BusinessStatusRequest {
      /** Instance ID. */
      instanceId: string;
      /** Account ID. */
      accountId: string;
  }
  interface BusinessStatusResponse {
      /** List of statue. */
      status?: BusinessStatus$1;
      /** The reason for the error in free text. */
      failureReasonMessage?: string | null;
  }
  /** Business Status. */
  enum BusinessStatus$1 {
      NONE = "NONE",
      READY = "READY",
      PENDING = "PENDING",
      ERROR = "ERROR",
      NOT_STARTED = "NOT_STARTED"
  }
  interface EstimateDeliveryRequest$1 extends EstimateDeliveryRequestDispatchTimeOneOf$1 {
      /** Estimated pickup time. */
      pickupTime?: Date;
      /** Estimated dropoff time. */
      dropoffTime?: Date;
      /** Instance ID. */
      instanceId: string;
      /** Account ID. */
      accountId: string;
      /** Delivery pickup address. */
      pickupAddress?: Address$2;
      /** Delivery dropoff address. */
      dropoffAddress?: Address$2;
      /** Unique identifier of the specific store that the delivery is for. */
      storeLocationId: string;
      /** The subtotal for all items in the order, excluding tax/tip. */
      orderTotal: Money$4;
  }
  /** @oneof */
  interface EstimateDeliveryRequestDispatchTimeOneOf$1 {
      /** Estimated pickup time. */
      pickupTime?: Date;
      /** Estimated dropoff time. */
      dropoffTime?: Date;
  }
  /** Physical address */
  interface Address$2 {
      /** Country code. */
      country?: string;
      /** Subdivision. Usually a state, region, prefecture, or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). */
      subdivision?: string | null;
      /** City name. */
      city?: string;
      /** Zip/postal code. */
      postalCode?: string | null;
      /** Street name and number. */
      streetAddress?: StreetAddress$2;
      /** Free text providing more detailed address info. Usually contains Apt, Suite, and Floor. */
      addressLine2?: string | null;
      /** Coordinates of the physical address. */
      location?: AddressLocation$3;
  }
  interface StreetAddress$2 {
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
  interface AddressLocation$3 {
      /** Address latitude. */
      latitude?: number | null;
      /** Address longitude. */
      longitude?: number | null;
  }
  /**
   * Money.
   * Default format to use. Sufficiently compliant with majority of standards: w3c, ISO 4217, ISO 20022, ISO 8583:2003.
   */
  interface Money$4 {
      /** Monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). Optionally, a single (-), to indicate that the amount is negative. */
      value?: string;
      /** Currency code. Must be valid ISO 4217 currency code (e.g., USD). */
      currency?: string;
      /** Monetary amount. Decimal string in local format (e.g., 1 000,30). Optionally, a single (-), to indicate that the amount is negative. */
      formattedValue?: string | null;
  }
  interface EstimateDeliveryResponse$1 {
      /** Optional. Used as reference to the estimate when creating a new order. */
      _id?: string | null;
      /** Amount that is charged for this delivery. */
      fee?: Money$4;
      /** Estimated pickup time. */
      promisedPickupTime?: Date;
      /** Estimated dropoff time. */
      promisedDropoffTime?: Date;
  }
  interface CreateDeliveryRequest$1 extends CreateDeliveryRequestDispatchTimeOneOf$1 {
      /** The requested time at which the order should be picked up. */
      pickupTime?: Date;
      /** The requested time at which the order should be delivered. */
      dropoffTime?: Date;
      /** Instance ID. */
      instanceId: string;
      /** Account ID. */
      accountId: string;
      /** Unique identifier of the specific store that the delivery is for. */
      storeLocationId: string;
      /** The name of the business where the order should be picked up from. */
      pickupBusinessName: string;
      /** Estimate ID. */
      estimateId?: string | null;
      /** Delivery pickup address. */
      pickupAddress: Address$2;
      /** Delivery dropoff address. */
      dropoffAddress: Address$2;
      /** Phone number of the store where the order should be picked up from. */
      pickupPhoneNumber: string;
      /** Customer details. */
      customer: Customer$2;
      /** Instructions for the courier at the pickup location. */
      pickupInstructions?: string | null;
      /** Instructions for the courier at the dropoff location. */
      dropoffInstructions?: string | null;
      /** Is contactless delivery. */
      contactlessDelivery?: boolean | null;
      /** Order ID. */
      orderId: string;
      /** The subtotal for all items in the order, excluding tax/tip. */
      orderTotal: Money$4;
      /** Amount that will be paid to the courier. */
      orderTip: Money$4;
  }
  /** @oneof */
  interface CreateDeliveryRequestDispatchTimeOneOf$1 {
      /** The requested time at which the order should be picked up. */
      pickupTime?: Date;
      /** The requested time at which the order should be delivered. */
      dropoffTime?: Date;
  }
  interface Customer$2 {
      /** First name. */
      firstName?: string;
      /** Last name. */
      lastName?: string;
      /** Phone number. */
      phoneNumber?: string;
      /** Email address. */
      email?: string;
  }
  interface CreateDeliveryResponse$1 {
      /** The vendor new order id */
      _id?: string;
      /** When a delivery is ready to be picked up. This is the start of the pickup window. */
      pickupWindowStartTime?: Date;
      /** When a delivery must be picked up by. This is the end of the pickup window. */
      pickupWindowEndTime?: Date;
      /** When a delivery is ready to be dropped off. This is the start of the dropoff window. */
      dropoffWindowStartTime?: Date;
      /** When a delivery must be dropped off by. This is the end of the dropoff window. */
      dropoffWindowEndTime?: Date;
      /** Amount that is charged for this delivery. */
      fee?: Money$4;
  }
  /**
   * Retrieves list of account belongs to given instance
   * @param instanceId - Instance ID.
   * @public
   * @documentationMaturity preview
   * @requiredField instanceId
   * @adminMethod
   */
  function listAccountIds$1(instanceId: string): Promise<ListAccountIdsResponse$1>;
  /**
   * Retrieves the delivery vendor business status
   * @param instanceId - Instance ID.
   * @public
   * @documentationMaturity preview
   * @requiredField instanceId
   * @requiredField options
   * @requiredField options.accountId
   * @adminMethod
   */
  function businessStatus(instanceId: string, options: BusinessStatusOptions): Promise<BusinessStatusResponse>;
  interface BusinessStatusOptions {
      /** Account ID. */
      accountId: string;
  }
  /**
   * Retrieves an estimate of the delivery
   * @param instanceId - Instance ID.
   * @public
   * @documentationMaturity preview
   * @requiredField instanceId
   * @requiredField options.accountId
   * @requiredField options.orderTotal
   * @requiredField options.storeLocationId
   * @adminMethod
   */
  function estimateDelivery$1(instanceId: string, options?: EstimateDeliveryOptions$1): Promise<EstimateDeliveryResponse$1>;
  interface EstimateDeliveryOptions$1 extends EstimateDeliveryRequestDispatchTimeOneOf$1 {
      /** Account ID. */
      accountId: string;
      /** Delivery pickup address. */
      pickupAddress?: Address$2;
      /** Delivery dropoff address. */
      dropoffAddress?: Address$2;
      /** Estimated pickup time. */
      pickupTime?: Date;
      /** Estimated dropoff time. */
      dropoffTime?: Date;
      /** Unique identifier of the specific store that the delivery is for. */
      storeLocationId: string;
      /** The subtotal for all items in the order, excluding tax/tip. */
      orderTotal: Money$4;
  }
  /**
   * Creates a new delivery order
   * @param instanceId - Instance ID.
   * @public
   * @documentationMaturity preview
   * @requiredField instanceId
   * @requiredField options.accountId
   * @requiredField options.customer
   * @requiredField options.customer.email
   * @requiredField options.customer.firstName
   * @requiredField options.customer.lastName
   * @requiredField options.customer.phoneNumber
   * @requiredField options.dropoffAddress
   * @requiredField options.orderId
   * @requiredField options.orderTip
   * @requiredField options.orderTotal
   * @requiredField options.pickupAddress
   * @requiredField options.pickupBusinessName
   * @requiredField options.pickupPhoneNumber
   * @requiredField options.storeLocationId
   * @adminMethod
   */
  function createDelivery$1(instanceId: string, options?: CreateDeliveryOptions$1): Promise<CreateDeliveryResponse$1>;
  interface CreateDeliveryOptions$1 extends CreateDeliveryRequestDispatchTimeOneOf$1 {
      /** Account ID. */
      accountId: string;
      /** Unique identifier of the specific store that the delivery is for. */
      storeLocationId: string;
      /** The name of the business where the order should be picked up from. */
      pickupBusinessName: string;
      /** Estimate ID. */
      estimateId?: string | null;
      /** The requested time at which the order should be picked up. */
      pickupTime?: Date;
      /** The requested time at which the order should be delivered. */
      dropoffTime?: Date;
      /** Delivery pickup address. */
      pickupAddress: Address$2;
      /** Delivery dropoff address. */
      dropoffAddress: Address$2;
      /** Phone number of the store where the order should be picked up from. */
      pickupPhoneNumber: string;
      /** Customer details. */
      customer: Customer$2;
      /** Instructions for the courier at the pickup location. */
      pickupInstructions?: string | null;
      /** Instructions for the courier at the dropoff location. */
      dropoffInstructions?: string | null;
      /** Is contactless delivery. */
      contactlessDelivery?: boolean | null;
      /** Order ID. */
      orderId: string;
      /** The subtotal for all items in the order, excluding tax/tip. */
      orderTotal: Money$4;
      /** Amount that will be paid to the courier. */
      orderTip: Money$4;
  }
  
  type localdeliverySpiV1Tpa_universal_d_BusinessStatusRequest = BusinessStatusRequest;
  type localdeliverySpiV1Tpa_universal_d_BusinessStatusResponse = BusinessStatusResponse;
  const localdeliverySpiV1Tpa_universal_d_businessStatus: typeof businessStatus;
  type localdeliverySpiV1Tpa_universal_d_BusinessStatusOptions = BusinessStatusOptions;
  namespace localdeliverySpiV1Tpa_universal_d {
    export {
      Tpa$1 as Tpa,
      ListAccountIdsRequest$1 as ListAccountIdsRequest,
      ListAccountIdsResponse$1 as ListAccountIdsResponse,
      localdeliverySpiV1Tpa_universal_d_BusinessStatusRequest as BusinessStatusRequest,
      localdeliverySpiV1Tpa_universal_d_BusinessStatusResponse as BusinessStatusResponse,
      BusinessStatus$1 as BusinessStatus,
      EstimateDeliveryRequest$1 as EstimateDeliveryRequest,
      EstimateDeliveryRequestDispatchTimeOneOf$1 as EstimateDeliveryRequestDispatchTimeOneOf,
      Address$2 as Address,
      StreetAddress$2 as StreetAddress,
      AddressLocation$3 as AddressLocation,
      Money$4 as Money,
      EstimateDeliveryResponse$1 as EstimateDeliveryResponse,
      CreateDeliveryRequest$1 as CreateDeliveryRequest,
      CreateDeliveryRequestDispatchTimeOneOf$1 as CreateDeliveryRequestDispatchTimeOneOf,
      Customer$2 as Customer,
      CreateDeliveryResponse$1 as CreateDeliveryResponse,
      listAccountIds$1 as listAccountIds,
      localdeliverySpiV1Tpa_universal_d_businessStatus as businessStatus,
      localdeliverySpiV1Tpa_universal_d_BusinessStatusOptions as BusinessStatusOptions,
      estimateDelivery$1 as estimateDelivery,
      EstimateDeliveryOptions$1 as EstimateDeliveryOptions,
      createDelivery$1 as createDelivery,
      CreateDeliveryOptions$1 as CreateDeliveryOptions,
    };
  }
  
  interface Tpa {
      appDefId?: string;
      name?: string;
      businessStatus?: BusinessStatus;
      errorReason?: string;
  }
  enum BusinessStatus {
      NONE = "NONE",
      READY = "READY",
      PENDING = "PENDING",
      ERROR = "ERROR",
      NOT_STARTED = "NOT_STARTED"
  }
  interface ListAccountIdsRequest {
      appDefId: string;
  }
  interface ListAccountIdsResponse {
      accountIds?: string[];
  }
  interface ListAppDefIdsRequest {
  }
  interface ListAppDefIdsResponse {
      appDefIds?: string[];
  }
  interface GetBusinessStatusRequest {
      appDefId: string;
      accountId: string;
  }
  interface GetBusinessStatusResponse {
      status?: BusinessStatus;
      failureReasonMessage?: string | null;
  }
  interface GetRegistrationUrlRequest {
      appDefId: string;
  }
  interface GetRegistrationUrlResponse {
      url?: string;
  }
  interface EstimateDeliveryRequest extends EstimateDeliveryRequestDispatchTimeOneOf {
      pickupTime?: Date;
      dropoffTime?: Date;
      appDefId: string;
      accountId: string;
      pickupAddress?: Address$1;
      dropoffAddress?: Address$1;
      storeLocationId: string;
      orderTotal: Money$3;
  }
  /** @oneof */
  interface EstimateDeliveryRequestDispatchTimeOneOf {
      pickupTime?: Date;
      dropoffTime?: Date;
  }
  /** Physical address */
  interface Address$1 {
      /** Country code. */
      country?: string;
      /** Subdivision. Usually a state, region, prefecture, or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). */
      subdivision?: string | null;
      /** City name. */
      city?: string;
      /** Zip/postal code. */
      postalCode?: string | null;
      /** Street name and number. */
      streetAddress?: StreetAddress$1;
      /** Free text providing more detailed address info. Usually contains Apt, Suite, and Floor. */
      addressLine2?: string | null;
      /** Coordinates of the physical address. */
      location?: AddressLocation$2;
  }
  interface StreetAddress$1 {
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
  interface AddressLocation$2 {
      /** Address latitude. */
      latitude?: number | null;
      /** Address longitude. */
      longitude?: number | null;
  }
  /**
   * Money.
   * Default format to use. Sufficiently compliant with majority of standards: w3c, ISO 4217, ISO 20022, ISO 8583:2003.
   */
  interface Money$3 {
      /** Monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). Optionally, a single (-), to indicate that the amount is negative. */
      value?: string;
      /** Currency code. Must be valid ISO 4217 currency code (e.g., USD). */
      currency?: string;
      /** Monetary amount. Decimal string in local format (e.g., 1 000,30). Optionally, a single (-), to indicate that the amount is negative. */
      formattedValue?: string | null;
  }
  interface EstimateDeliveryResponse {
      /** Optional. Used as reference to the estimate when creating a new order */
      _id?: string | null;
      /** Delivery fee */
      fee?: Money$3;
      promisedPickupTime?: Date;
      promisedDropoffTime?: Date;
  }
  interface CreateDeliveryRequest extends CreateDeliveryRequestDispatchTimeOneOf {
      pickupTime?: Date;
      dropoffTime?: Date;
      appDefId: string;
      accountId: string;
      storeLocationId: string;
      pickupBusinessName: string;
      pickupAddress: Address$1;
      dropoffAddress: Address$1;
      estimateId?: string | null;
      pickupPhoneNumber: string;
      customer: Customer$1;
      pickupInstructions?: string | null;
      dropoffInstructions?: string | null;
      contactlessDelivery?: boolean | null;
      orderId: string;
      orderTotal: Money$3;
      orderTip: Money$3;
  }
  /** @oneof */
  interface CreateDeliveryRequestDispatchTimeOneOf {
      pickupTime?: Date;
      dropoffTime?: Date;
  }
  interface Customer$1 {
      firstName?: string;
      lastName?: string;
      phoneNumber?: string;
      email?: string;
  }
  interface CreateDeliveryResponse {
      /** The vendor new order id */
      _id?: string;
      /** Status of the order creation call */
      pickupWindowStartTime?: Date;
      pickupWindowEndTime?: Date;
      dropoffWindowStartTime?: Date;
      dropoffWindowEndTime?: Date;
      fee?: Money$3;
  }
  /** @internal
   * @documentationMaturity preview
   * @requiredField appDefId
   */
  function listAccountIds(appDefId: string): Promise<ListAccountIdsResponse>;
  /** @internal
   * @documentationMaturity preview
   */
  function listAppDefIds(): Promise<ListAppDefIdsResponse>;
  /** @internal
   * @documentationMaturity preview
   * @requiredField appDefId
   * @requiredField options
   * @requiredField options.accountId
   */
  function getBusinessStatus(appDefId: string, options: GetBusinessStatusOptions): Promise<GetBusinessStatusResponse>;
  interface GetBusinessStatusOptions {
      accountId: string;
  }
  /** @internal
   * @documentationMaturity preview
   * @requiredField appDefId
   */
  function getRegistrationUrl(appDefId: string): Promise<GetRegistrationUrlResponse>;
  /** @internal
   * @documentationMaturity preview
   * @requiredField appDefId
   * @requiredField options.accountId
   * @requiredField options.orderTotal
   * @requiredField options.storeLocationId
   */
  function estimateDelivery(appDefId: string, options?: EstimateDeliveryOptions): Promise<EstimateDeliveryResponse>;
  interface EstimateDeliveryOptions extends EstimateDeliveryRequestDispatchTimeOneOf {
      accountId: string;
      pickupAddress?: Address$1;
      dropoffAddress?: Address$1;
      pickupTime?: Date;
      dropoffTime?: Date;
      storeLocationId: string;
      orderTotal: Money$3;
  }
  /** @internal
   * @documentationMaturity preview
   * @requiredField appDefId
   * @requiredField options.accountId
   * @requiredField options.customer
   * @requiredField options.customer.email
   * @requiredField options.customer.firstName
   * @requiredField options.customer.lastName
   * @requiredField options.customer.phoneNumber
   * @requiredField options.dropoffAddress
   * @requiredField options.orderId
   * @requiredField options.orderTip
   * @requiredField options.orderTotal
   * @requiredField options.pickupAddress
   * @requiredField options.pickupBusinessName
   * @requiredField options.pickupPhoneNumber
   * @requiredField options.storeLocationId
   * @adminMethod
   */
  function createDelivery(appDefId: string, options?: CreateDeliveryOptions): Promise<CreateDeliveryResponse>;
  interface CreateDeliveryOptions extends CreateDeliveryRequestDispatchTimeOneOf {
      accountId: string;
      storeLocationId: string;
      pickupBusinessName: string;
      pickupAddress: Address$1;
      dropoffAddress: Address$1;
      pickupTime?: Date;
      dropoffTime?: Date;
      estimateId?: string | null;
      pickupPhoneNumber: string;
      customer: Customer$1;
      pickupInstructions?: string | null;
      dropoffInstructions?: string | null;
      contactlessDelivery?: boolean | null;
      orderId: string;
      orderTotal: Money$3;
      orderTip: Money$3;
  }
  
  type localdeliveryV1Tpa_universal_d_Tpa = Tpa;
  type localdeliveryV1Tpa_universal_d_BusinessStatus = BusinessStatus;
  const localdeliveryV1Tpa_universal_d_BusinessStatus: typeof BusinessStatus;
  type localdeliveryV1Tpa_universal_d_ListAccountIdsRequest = ListAccountIdsRequest;
  type localdeliveryV1Tpa_universal_d_ListAccountIdsResponse = ListAccountIdsResponse;
  type localdeliveryV1Tpa_universal_d_ListAppDefIdsRequest = ListAppDefIdsRequest;
  type localdeliveryV1Tpa_universal_d_ListAppDefIdsResponse = ListAppDefIdsResponse;
  type localdeliveryV1Tpa_universal_d_GetBusinessStatusRequest = GetBusinessStatusRequest;
  type localdeliveryV1Tpa_universal_d_GetBusinessStatusResponse = GetBusinessStatusResponse;
  type localdeliveryV1Tpa_universal_d_GetRegistrationUrlRequest = GetRegistrationUrlRequest;
  type localdeliveryV1Tpa_universal_d_GetRegistrationUrlResponse = GetRegistrationUrlResponse;
  type localdeliveryV1Tpa_universal_d_EstimateDeliveryRequest = EstimateDeliveryRequest;
  type localdeliveryV1Tpa_universal_d_EstimateDeliveryRequestDispatchTimeOneOf = EstimateDeliveryRequestDispatchTimeOneOf;
  type localdeliveryV1Tpa_universal_d_EstimateDeliveryResponse = EstimateDeliveryResponse;
  type localdeliveryV1Tpa_universal_d_CreateDeliveryRequest = CreateDeliveryRequest;
  type localdeliveryV1Tpa_universal_d_CreateDeliveryRequestDispatchTimeOneOf = CreateDeliveryRequestDispatchTimeOneOf;
  type localdeliveryV1Tpa_universal_d_CreateDeliveryResponse = CreateDeliveryResponse;
  const localdeliveryV1Tpa_universal_d_listAccountIds: typeof listAccountIds;
  const localdeliveryV1Tpa_universal_d_listAppDefIds: typeof listAppDefIds;
  const localdeliveryV1Tpa_universal_d_getBusinessStatus: typeof getBusinessStatus;
  type localdeliveryV1Tpa_universal_d_GetBusinessStatusOptions = GetBusinessStatusOptions;
  const localdeliveryV1Tpa_universal_d_getRegistrationUrl: typeof getRegistrationUrl;
  const localdeliveryV1Tpa_universal_d_estimateDelivery: typeof estimateDelivery;
  type localdeliveryV1Tpa_universal_d_EstimateDeliveryOptions = EstimateDeliveryOptions;
  const localdeliveryV1Tpa_universal_d_createDelivery: typeof createDelivery;
  type localdeliveryV1Tpa_universal_d_CreateDeliveryOptions = CreateDeliveryOptions;
  namespace localdeliveryV1Tpa_universal_d {
    export {
      localdeliveryV1Tpa_universal_d_Tpa as Tpa,
      localdeliveryV1Tpa_universal_d_BusinessStatus as BusinessStatus,
      localdeliveryV1Tpa_universal_d_ListAccountIdsRequest as ListAccountIdsRequest,
      localdeliveryV1Tpa_universal_d_ListAccountIdsResponse as ListAccountIdsResponse,
      localdeliveryV1Tpa_universal_d_ListAppDefIdsRequest as ListAppDefIdsRequest,
      localdeliveryV1Tpa_universal_d_ListAppDefIdsResponse as ListAppDefIdsResponse,
      localdeliveryV1Tpa_universal_d_GetBusinessStatusRequest as GetBusinessStatusRequest,
      localdeliveryV1Tpa_universal_d_GetBusinessStatusResponse as GetBusinessStatusResponse,
      localdeliveryV1Tpa_universal_d_GetRegistrationUrlRequest as GetRegistrationUrlRequest,
      localdeliveryV1Tpa_universal_d_GetRegistrationUrlResponse as GetRegistrationUrlResponse,
      localdeliveryV1Tpa_universal_d_EstimateDeliveryRequest as EstimateDeliveryRequest,
      localdeliveryV1Tpa_universal_d_EstimateDeliveryRequestDispatchTimeOneOf as EstimateDeliveryRequestDispatchTimeOneOf,
      Address$1 as Address,
      StreetAddress$1 as StreetAddress,
      AddressLocation$2 as AddressLocation,
      Money$3 as Money,
      localdeliveryV1Tpa_universal_d_EstimateDeliveryResponse as EstimateDeliveryResponse,
      localdeliveryV1Tpa_universal_d_CreateDeliveryRequest as CreateDeliveryRequest,
      localdeliveryV1Tpa_universal_d_CreateDeliveryRequestDispatchTimeOneOf as CreateDeliveryRequestDispatchTimeOneOf,
      Customer$1 as Customer,
      localdeliveryV1Tpa_universal_d_CreateDeliveryResponse as CreateDeliveryResponse,
      localdeliveryV1Tpa_universal_d_listAccountIds as listAccountIds,
      localdeliveryV1Tpa_universal_d_listAppDefIds as listAppDefIds,
      localdeliveryV1Tpa_universal_d_getBusinessStatus as getBusinessStatus,
      localdeliveryV1Tpa_universal_d_GetBusinessStatusOptions as GetBusinessStatusOptions,
      localdeliveryV1Tpa_universal_d_getRegistrationUrl as getRegistrationUrl,
      localdeliveryV1Tpa_universal_d_estimateDelivery as estimateDelivery,
      localdeliveryV1Tpa_universal_d_EstimateDeliveryOptions as EstimateDeliveryOptions,
      localdeliveryV1Tpa_universal_d_createDelivery as createDelivery,
      localdeliveryV1Tpa_universal_d_CreateDeliveryOptions as CreateDeliveryOptions,
    };
  }
  
  /**
   * Collection of menus and discounts available in a specific location.
   * Use a [draft catalog](https://dev.wix.com/api/rest/wix-restaurants/catalogs/draft-catalogs) to publish multiple changes to a catalog at the same time.
   * You can read more about catalogs in the [introduction](https://dev.wix.com/api/rest/wix-restaurants/catalogs/introduction).
   */
  interface Catalog {
      /**
       * Catalog ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * ID of the location the catalog belongs to. See the [Locations API](https://dev.wix.com/api/rest/business-info/locations/introduction) for more details.
       * @readonly
       */
      locationId?: string | null;
      /**
       * Whether the catalog is archived.
       * __Note:__ Archived catalogs can't be updated.
       * @readonly
       */
      archived?: boolean;
      /**
       * Date and time the last time a draft catalog has been published in `yyyy-mm-ddThh:mm:sssZ` format and [Coordinated Universal Time (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time).
       * @readonly
       */
      draftPublishedDate?: Date;
      /**
       * Revision number. Increments by 1 each time the catalog is updated.
       * To prevent conflicting changes, the existing `revision` must be used when updating a catalog.
       * @internal
       * @readonly
       */
      revision?: string | null;
  }
  interface CreateDraftCatalogRequest {
      /** ID of the catalog to create a draft version for. */
      catalogId: string;
  }
  interface CreateDraftCatalogResponse {
      /** Created draft catalog. */
      catalog?: Catalog;
  }
  interface PublishDraftCatalogRequest {
      /** ID of the draft catalog to publish. */
      catalogId: string;
  }
  interface PublishDraftCatalogResponse {
      /** Published catalog. */
      catalog?: Catalog;
  }
  interface DiscardDraftCatalogRequest {
      /** ID of the draft catalog to discard. */
      catalogId: string;
  }
  interface DiscardDraftCatalogResponse {
  }
  interface BulkCreateVariationsRequest {
      /** ID of the catalog the variations will belong to. */
      catalogId: string;
      /** Variations to create. Limited to 20 variations. */
      variations?: NewVariation[];
      /** Whether the full variation entity is returned. Defaults to `true`. */
      returnFullEntity?: boolean;
  }
  interface NewVariation {
      /** Variation name. */
      name?: string;
  }
  interface BulkCreateVariationsResponse {
      /** Information about the created variations. */
      results?: BulkItemResult[];
      /** Bulk Create Variations metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkItemResult {
      /** Metadata of the item. */
      entityMetadata?: ItemMetadata;
      /** Item. */
      entity?: Item;
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
  /**
   * Anything that customers can buy in the restaurant. Items can be of type `DISH` or `VARIATION`.
   * You can read more about items in the [introduction](https://dev.wix.com/api/rest/wix-restaurants/catalogs/introduction).
   */
  interface Item {
      /**
       * Item ID.
       * @readonly
       */
      _id?: string | null;
      /** Item name. */
      name?: string | null;
      /** Item description. */
      description?: string | null;
      /** Item price. */
      price?: Money$2;
      /** URL of the item's image file. */
      imageUrl?: string | null;
      /** Item labels. For example spicy, hot, vegan, gluten-free, or organic. */
      labels?: Labels;
      /** Whether the item is in stock. */
      inStock?: boolean | null;
      /** Tax rate of the item in percent. */
      taxRate?: string | null;
      /**
       * Whether the item is archived. Defaults to `false`. **Note:** Archived items can't be updated.
       * @readonly
       */
      archived?: boolean | null;
      /**
       * Visibility criteria that must be met for the item to appear in the live site.
       * In case of multiple visibility criteria, every criterion must be fulfilled.
       */
      visibilityCriteria?: VisibilityCriteria;
      /** Items customers can choose to modify a dish. Can be an extra, selection, or deselection. */
      dishOptions?: DishOptions;
      /** Whether a customer can add a special request when ordering this item. Defaults to `true`. */
      acceptSpecialRequest?: boolean | null;
      /**
       * Item type.
       * @readonly
       */
      type?: ItemType;
  }
  /**
   * Money.
   * Default format to use. Sufficiently compliant with majority of standards: w3c, ISO 4217, ISO 20022, ISO 8583:2003.
   */
  interface Money$2 {
      /** Monetary amount in decimal string format. For example, `3.99`, `6`, and `10.5` are all accepted values. */
      value?: string;
      /**
       * Three-letter currency code in [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format.
       * @readonly
       */
      currency?: string;
      /**
       * Monetary amount. This is the number that will be displayed.
       * @internal
       * @readonly
       */
      formattedValue?: string | null;
  }
  interface Labels {
      values?: string[];
  }
  interface VisibilityCriteria {
      /**
       * Whether the entity appears in the live site. Defaults to `true`.
       * If `false`, the entity isn't rendered in the live site, even if each visibility criterion is fulfilled.
       */
      visible?: boolean | null;
      /** Fulfillment types. */
      fulfillmentTypes?: FulfillmentType$2[];
      /** Ordering platforms. */
      platforms?: Platform[];
      /** Time periods when the entity is available. */
      availability?: Availability$4;
  }
  enum FulfillmentType$2 {
      UNSPECIFIED_FULFILLMENT_TYPE = "UNSPECIFIED_FULFILLMENT_TYPE",
      DELIVERY = "DELIVERY",
      PICKUP_OR_DINE_IN = "PICKUP_OR_DINE_IN"
  }
  enum Platform {
      UNSPECIFIED_PLATFORM = "UNSPECIFIED_PLATFORM",
      SITE = "SITE",
      MOBILE_SITE = "MOBILE_SITE",
      WIX_APP = "WIX_APP",
      CALL_CENTER = "CALL_CENTER",
      CHAT_BOT = "CHAT_BOT"
  }
  interface Availability$4 {
      /**
       * Weekly recurring time periods when the entity is available.
       * Limited to 100 time periods.
       */
      periods?: TimePeriod$4[];
      /** Exceptions to the entity's regular availability. The entity can be available or not available during the special hour period. */
      specialHourPeriods?: SpecialHourPeriod$4[];
  }
  /** Weekly recurring time periods when the entity is available. */
  interface TimePeriod$4 {
      /** Day of the week the period starts on. */
      openDay?: DayOfWeek$4;
      /**
       * Time the period starts in 24-hour [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) extended format. Valid values are 00:00-24:00, where 24:00 represents
       * midnight at the end of the specified day.
       */
      openTime?: string;
      /** Day of the week the period ends on. */
      closeDay?: DayOfWeek$4;
      /**
       * Time the period ends in 24-hour [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) extended format. Valid values are 00:00-24:00, where 24:00 represents
       * midnight at the end of the specified day.
       * __Note:__ If `openDay` and `closeDay` specify the same day of the week `closeTime` must be later than `openTime`.
       */
      closeTime?: string;
  }
  enum DayOfWeek$4 {
      UNDEFINED = "UNDEFINED",
      SUN = "SUN",
      MON = "MON",
      TUE = "TUE",
      WED = "WED",
      THU = "THU",
      FRI = "FRI",
      SAT = "SAT"
  }
  /** Exception to the business's regular hours. The business can be open or closed during the exception. */
  interface SpecialHourPeriod$4 {
      /** Start date and time of the exception in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format and [Coordinated Universal Time (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time). */
      startDate?: string;
      /** End date and time of the exception in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format and [Coordinated Universal Time (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time). */
      endDate?: string;
      /** Whether the item is available during the exception. Defaults to `true`. */
      available?: boolean;
      /** Name of the special hour period. In the dashboard, the special hour period is called event. */
      eventName?: string | null;
  }
  interface DishOptions {
      values?: DishOption[];
  }
  interface DishOption extends DishOptionMethodOneOf {
      /** Item of type `DISH` or `VARIATION` that customers can select. For example a dish size. Customers can choose only a single selection per dish. */
      selection?: Selection;
      /** Item of type `DISH` or `VARIATION` that customers can add to a dish. For example a topping. Customers can add multiple extras per dish. */
      extras?: Extras;
      /** Item of type `DISH` or `VARIATION` that customers can remove from a dish. For example a specific ingredient. Customers can remove multiple deselections per dish. */
      deselection?: Deselection;
      /** Dish option name. */
      name?: string;
      /** @readonly */
      type?: Type$3;
  }
  /** @oneof */
  interface DishOptionMethodOneOf {
      /** Item of type `DISH` or `VARIATION` that customers can select. For example a dish size. Customers can choose only a single selection per dish. */
      selection?: Selection;
      /** Item of type `DISH` or `VARIATION` that customers can add to a dish. For example a topping. Customers can add multiple extras per dish. */
      extras?: Extras;
      /** Item of type `DISH` or `VARIATION` that customers can remove from a dish. For example a specific ingredient. Customers can remove multiple deselections per dish. */
      deselection?: Deselection;
  }
  interface DishOptionItem {
      /** Item ID of the dish option. */
      itemId?: string;
      /** Dish option price. `0` for free choices that are included in the dish's price. */
      price?: Money$2;
  }
  interface Selection {
      /** Item ID of the default choice. */
      defaultChoice?: string | null;
      /** Item IDs of the available choices. */
      availableChoices?: DishOptionItem[];
  }
  interface Extras {
      /** Item IDs of the default choices. */
      defaultChoices?: string[];
      /** Minimum number of extras a customer must choose. Defaults to `0`. Must be lower than or equal to the value of `availableChoices`. */
      minChoices?: number | null;
      /** Maximum number of extras a customer can choose. Defaults to the value of `availableChoices`. Must be greater than or equal to the value of `minChoices`. */
      maxChoices?: number | null;
      /** Item IDs of the available choices. */
      availableChoices?: DishOptionItem[];
  }
  interface Deselection {
      /** Item IDs of the available choices. */
      availableChoices?: DishOptionItem[];
  }
  enum Type$3 {
      UNSPECIFIED_DISH_OPTION_TYPE = "UNSPECIFIED_DISH_OPTION_TYPE",
      SELECTION = "SELECTION",
      EXTRAS = "EXTRAS",
      DESELECTION = "DESELECTION"
  }
  enum ItemType {
      UNSPECIFIED_ITEM_TYPE = "UNSPECIFIED_ITEM_TYPE",
      DISH = "DISH",
      VARIATION = "VARIATION"
  }
  interface BulkActionMetadata {
      /** Number of items that were successfully processed. */
      totalSuccesses?: number;
      /** Number of items that couldn't be processed. */
      totalFailures?: number;
      /** Number of failures without details because detailed failure threshold was exceeded. */
      undetailedFailures?: number;
  }
  interface BulkUpdateItemsRequest {
      /** ID of the catalog the items belong to. */
      catalogId: string;
      /** Items to update. Limited to 20 items. */
      items?: Item[];
      /** Whether the full item entity is returned. Defaults to `true`. */
      returnFullEntity?: boolean;
  }
  interface BulkUpdateItemsResponse {
      /** Information about the updated items. */
      results?: BulkItemResult[];
      /** Bulk Update Items metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkCreateDishesRequest {
      /** ID of the catalog the dishes will belong to. */
      catalogId: string;
      /** Information about the dishes to create. Limited to 20 dishes. */
      createDishRequests?: CreateDishRequest[];
      /** Whether the full item entity is returned. Defaults to `true`. */
      returnFullEntity?: boolean;
  }
  interface CreateDishRequest {
      /** ID of the menu the dish will belong to. */
      menuId?: string;
      /** ID of the section the dish will belong to. */
      sectionId?: string;
      /** Dish to create. */
      dish?: Item;
  }
  interface BulkCreateDishesResponse {
      /** Information about the created dishes. */
      results?: BulkItemResult[];
      /** Bulk Create Dishes metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkCreateMenusRequest {
      /** ID of the catalog the menus will belong to. */
      catalogId: string;
      /** Information about the menus to create. Limited to 20 menus. */
      menus?: Menu[];
      /** Whether the full menu entity is returned. Defaults to `true`. */
      returnFullEntity?: boolean;
  }
  /**
   * Collection of sections that show what customers can buy in the restaurant.
   * You can read more about menus in the [introduction](https://dev.wix.com/api/rest/wix-restaurants/catalogs/introduction).
   */
  interface Menu {
      /**
       * Menu ID.
       * @readonly
       */
      _id?: string | null;
      /** Menu name. */
      name?: string | null;
      /** Menu description. */
      description?: string | null;
      /** URL of the menu's image file. */
      imageUrl?: string | null;
      /**
       * Visibility criteria that must be met for the menu to appear in the live site.
       * In case of multiple visibility criteria, every criterion must be fulfilled.
       */
      visibilityCriteria?: VisibilityCriteria;
      /** IDs of the sections that are included in the menu. */
      sectionIds?: MenuSectionIds;
      /**
       * Whether the menu is archived. Defaults to `false`. **Note:** Archived menus can't be updated.
       * @readonly
       */
      archived?: boolean | null;
  }
  interface MenuSectionIds {
      values?: string[];
  }
  interface BulkCreateMenusResponse {
      /** Information about the created menus. */
      results?: BulkMenuResult[];
      /** Bulk Create Menus metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkMenuResult {
      /** Menu metadata. */
      entityMetadata?: ItemMetadata;
      /** Menu. */
      entity?: Menu;
  }
  interface BulkUpdateMenusRequest {
      /** ID of the catalog the menus belong to. */
      catalogId: string;
      /** Menus to update. */
      menus?: Menu[];
      /** Whether the full menu entity is returned. Defaults to `true`. */
      returnFullEntity?: boolean;
  }
  interface BulkUpdateMenusResponse {
      /** Information about the updated menus. */
      results?: BulkMenuResult[];
      /** Bulk Update Menus metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkCreateSectionsRequest {
      /** ID of the catalog the sections will belong to. */
      catalogId: string;
      /** Information about the sections to create. Limited to 20 sections. */
      createSectionRequests?: CreateSectionRequest[];
      /** Whether the full section entity is returned. Defaults to `true`. */
      returnFullEntity?: boolean;
  }
  /**
   * Collection of dishes that customers can buy in the restaurant.
   * You can read more about sections in the [introduction](https://dev.wix.com/api/rest/wix-restaurants/catalogs/introduction).
   */
  interface Section {
      /**
       * Section ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * ID of the menu the section belongs to.
       * @readonly
       */
      menuId?: string | null;
      /** Section name. */
      name?: string | null;
      /** Section description. */
      description?: string | null;
      /** URL of the section's image file. */
      imageUrl?: string | null;
      /** IDs of the items that belong to the section. */
      itemIds?: SectionItemIds;
      /**
       * Visibility criteria that must be met for the section to appear in the live site.
       * In case of multiple visibility criteria, every criterion must be fulfilled.
       */
      visibilityCriteria?: VisibilityCriteria;
      /**
       * Whether the section is archived. Defaults to `false`. **Note:** Archived sections can't be updated.
       * @readonly
       */
      archived?: boolean | null;
  }
  /** Item IDs of the dishes that belong to this section. */
  interface SectionItemIds {
      values?: string[];
  }
  interface CreateSectionRequest {
      /** ID of the menu the section will belong to. */
      menuId?: string;
      /** Section to create. */
      section?: Section;
  }
  interface BulkCreateSectionsResponse {
      /** Information about the created sections. */
      results?: BulkSectionResult[];
      /** Bulk Create Sections metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkSectionResult {
      /** Section metadata. */
      entityMetadata?: ItemMetadata;
      /** Section. */
      entity?: Section;
  }
  interface BulkUpdateSectionsRequest {
      /** ID of the catalog the sections belong to. */
      catalogId: string;
      /** Information about the sections to update. Limited to 20 sections. */
      updateSectionsRequests?: UpdateSectionRequest[];
      /** Whether the full section entity is returned. Defaults to `true`. */
      returnFullEntity?: boolean;
  }
  interface UpdateSectionRequest {
      /** ID of the menu the section will belong to. */
      menuId?: string;
      /** Section to update. */
      section?: Section;
  }
  interface BulkUpdateSectionsResponse {
      /** Information about the updated sections. */
      results?: BulkSectionResult[];
      /** Bulk Update Sections metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkArchiveMenusRequest {
      /** ID of the catalog the menus belong to. */
      catalogId: string;
      /** IDs of the menus to archive. */
      ids?: string[];
      /** Whether the full menu entity is returned. Defaults to `true`. */
      returnFullEntity?: boolean;
  }
  interface BulkArchiveMenusResponse {
      /** Information about the archived menus. */
      results?: BulkMenuResult[];
      /** Bulk Archive Menus metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkUnarchiveMenusRequest {
      /** ID of the catalog the menus belong to. */
      catalogId: string;
      /** IDs of the menus to unarchive. */
      ids?: string[];
      /** Whether the full menu entity is returned. Defaults to `true`. */
      returnFullEntity?: boolean;
  }
  interface BulkUnarchiveMenusResponse {
      /** Information about the unarchived menus. */
      results?: BulkMenuResult[];
      /** Bulk Unarchive Menus metadata. */
      bulkActionMetadata?: BulkActionMetadata;
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
  interface CatalogUpdated {
      metaSiteId?: string;
      locationId?: string | null;
      catalogId?: string | null;
      archived?: boolean;
      catalogItems?: Item[];
      catalogSections?: Section[];
      catalogMenus?: Menu[];
      catalogDiscounts?: Discount$2[];
  }
  /**
   * Customers can use a discount to pay less. Can be an amount or a percentage.
   * You can read more about discounts in the [introduction](https://dev.wix.com/api/rest/wix-restaurants/catalogs/introduction).
   */
  interface Discount$2 extends DiscountValueOneOf$1, DiscountApplyToFilterOneOf$1 {
      /** Discount amount. */
      amount?: Money$2;
      /** Discount percentage. */
      percentage?: string | null;
      /** IDs of the sections the discount applies to. */
      sectionIds?: SectionIds$1;
      /** IDs of the items the discount applies to. **Note:** The items must be of type `dish`. */
      itemIds?: ItemIds$1;
      /**
       * Discount ID.
       * @readonly
       */
      _id?: string | null;
      /** Discount name. */
      name?: string | null;
      /** Discount description. */
      description?: string | null;
      /** Whether the discount is active. Defaults to `true`. */
      active?: boolean | null;
      /** Discount type. */
      type?: DiscountType$2;
      /**
       * Discount condition.
       * All conditions must be met so that a customer can apply the discount.
       */
      condition?: DiscountCondition$1;
  }
  /** @oneof */
  interface DiscountValueOneOf$1 {
      /** Discount amount. */
      amount?: Money$2;
      /** Discount percentage. */
      percentage?: string | null;
  }
  /** @oneof */
  interface DiscountApplyToFilterOneOf$1 {
      /** IDs of the sections the discount applies to. */
      sectionIds?: SectionIds$1;
      /** IDs of the items the discount applies to. **Note:** The items must be of type `dish`. */
      itemIds?: ItemIds$1;
  }
  enum DiscountType$2 {
      UNSPECIFIED_TYPE = "UNSPECIFIED_TYPE",
      OFF_ITEM = "OFF_ITEM",
      OFF_ORDER = "OFF_ORDER"
  }
  interface SectionIds$1 {
      values?: string[];
  }
  interface ItemIds$1 {
      values?: string[];
  }
  interface DiscountCondition$1 {
      /** Which fulfillment types the discount applies to. */
      fulfillmentTypes?: FulfillmentType$2[];
      /** Which ordering platforms the discount applies to. */
      platforms?: DiscountPlatform$1[];
      /** List of times when the discount is available. */
      availability?: Availability$4;
      /** Minimum order price for the discount. */
      minOrderPrice?: Money$2;
      /**
       * Coupon associated with the discount.
       * @readonly
       */
      coupon?: Coupon$2;
  }
  enum DiscountPlatform$1 {
      UNSPECIFIED_PLATFORM = "UNSPECIFIED_PLATFORM",
      SITE = "SITE",
      MOBILE_SITE = "MOBILE_SITE",
      CALL_CENTER = "CALL_CENTER"
  }
  interface Coupon$2 {
      /**
       * Whether the customer needs to enter the coupon code to receive the discount. Defaults to `true`.
       * @readonly
       */
      applied?: boolean | null;
      /**
       * Coupon code.
       * @readonly
       */
      code?: string | null;
  }
  interface PublishCatalogUpdated {
      metaSiteId?: string;
      locationId?: string | null;
      catalogId?: string | null;
      archived?: boolean;
  }
  interface IndexCacheCmd {
      catalogId?: string;
      orgId?: string;
      orgLocale?: string;
      metaSiteId?: string | null;
  }
  interface CatalogChanged {
      /** Changed Catalog. */
      catalog?: Catalog;
  }
  interface ListCatalogsRequest {
      /** Sort order. Defaults to `ASC`. */
      sort?: Sorting;
      /** Paging information. `offset` defaults to `0` and `limit` defaults to `50`. The maximum for limit is `1,000`. */
      paging?: Paging;
      /** Whether archived catalogs are returned. Defaults to `false`. */
      archived?: boolean;
      /** IDs of the locations for which the catalog will be returned. See the [Locations API](https://dev.wix.com/api/rest/business-info/locations/introduction) for more details. */
      locationIds?: string[];
      /**
       * IDs of the restaurant-locations for which the catalog will be returned.
       * @internal
       */
      restaurantLocationIds?: string[];
  }
  interface Sorting {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
      order?: SortOrder$1;
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
  enum SortOrder$1 {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface Paging {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface ListCatalogsResponse {
      /** Retrieved catalogs. */
      catalogs?: Catalog[];
  }
  interface GetMenuRequest {
      /** ID of the catalog the menu belongs to. */
      catalogId: string;
      /** Menu ID. */
      menuId: string;
  }
  interface GetMenuResponse {
      /** Retrieved menu. */
      menu?: Menu;
  }
  interface GetSectionRequest {
      /** ID of the catalog the section belongs to. */
      catalogId: string;
      /** ID of the menu the catalog belongs to. */
      menuId: string;
      /** Section ID. */
      sectionId: string;
  }
  interface GetSectionResponse {
      /** Retrieved section. */
      section?: Section;
  }
  interface UpdateMenuRequest {
      /** ID of the catalog the menu belongs to. */
      catalogId: string;
      /** Menu to update. */
      menu?: Menu;
  }
  interface UpdateMenuResponse {
      /** Updated Menu. */
      menu?: Menu;
  }
  interface V3UpdateSectionRequest {
      /** ID of the catalog the section belongs to. */
      catalogId: string;
      /** Menu ID. */
      menuId: string;
      /** Section to update. */
      section?: Section;
  }
  interface UpdateSectionResponse {
      /** Updated section. */
      section?: Section;
  }
  interface ListMenusRequest {
      /** ID of the catalog the menus belong to. */
      catalogId: string;
      /**
       * Field mask path.
       * @internal
       */
      fieldMask?: string[];
      /** Whether archived menus are returned. Defaults to `false`. */
      archived?: boolean;
      /**
       * Fulfillment types filter
       * @internal
       */
      fulfillmentTypes?: FulfillmentType$2[];
      /**
       * Ordering platforms filter
       * @internal
       */
      platforms?: Platform[];
  }
  interface ListMenusResponse {
      /** Retrieved menus. */
      menus?: Menu[];
  }
  interface ListSectionsRequest {
      /** ID of the catalog the sections belong to. */
      catalogId: string;
      /**
       * Field mask path.
       * @internal
       */
      fieldMask?: string[];
      /** Whether archived sections are returned. Defaults to `false`. */
      archived?: boolean;
      /**
       * Fulfillment types filter
       * @internal
       */
      fulfillmentTypes?: FulfillmentType$2[];
      /**
       * Ordering platforms filter
       * @internal
       */
      platforms?: Platform[];
  }
  interface ListSectionsResponse {
      /** Sections list. */
      sections?: Section[];
  }
  interface CreateMenuRequest {
      /** ID of the catalog the menu will belong to. */
      catalogId: string;
      /** Menu to create. */
      menu: Menu;
  }
  interface CreateMenuResponse {
      /** Created Menu. */
      menu?: Menu;
  }
  interface ArchiveMenuRequest {
      /** ID of the catalog the menu belongs to. */
      catalogId: string;
      /** Menu ID. */
      menuId: string;
  }
  interface ArchiveMenuResponse {
      /** Archived menu. */
      menu?: Menu;
  }
  interface UnarchiveMenuRequest {
      /** ID of the catalog the menu belongs to. */
      catalogId: string;
      /** Menu ID. */
      menuId: string;
  }
  interface UnarchiveMenuResponse {
      /** Unarchived menu. */
      menu?: Menu;
  }
  interface ArchiveSectionRequest {
      /** ID of the catalog the menu belongs to. */
      catalogId: string;
      /** Menu ID. */
      menuId: string;
      /** Section ID. */
      sectionId: string;
  }
  interface ArchiveSectionResponse {
      /** Archived section. */
      section?: Section;
  }
  interface RemoveDishFromSectionRequest {
      /** ID of the catalog the menu belongs to. */
      catalogId: string;
      /** Menu ID. */
      menuId: string;
      /** Section ID. */
      sectionId: string;
      /** Item ID. */
      itemId: string;
  }
  interface RemoveDishFromSectionResponse {
  }
  interface V3CreateSectionRequest {
      /** ID of the catalog the section will belong to. */
      catalogId: string;
      /** ID of the menu the section will belong to. */
      menuId: string;
      /** Section to create. */
      section: Section;
  }
  interface CreateSectionResponse {
      /** Created section. */
      section?: Section;
  }
  interface GetItemRequest {
      /** ID of the catalog the item belongs to. */
      catalogId: string;
      /** Item ID. */
      itemId: string;
      /** Whether `visibilityCriteria` is returned. Defaults to `false`. */
      includeVisibilityCriteria?: boolean;
  }
  interface GetItemResponse {
      /** Retrieved item. */
      item?: Item;
  }
  interface ListItemsRequest {
      /**
       * Field mask path.
       * @internal
       */
      fieldMask?: string[];
      /** ID of the catalog the items belong to. */
      catalogId: string;
      /** Whether archived items are returned. Defaults to `false`. */
      archived?: boolean;
      /**
       * Fulfillment types filter
       * @internal
       */
      fulfillmentTypes?: FulfillmentType$2[];
      /**
       * Ordering platforms filter
       * @internal
       */
      platforms?: Platform[];
  }
  interface ListItemsResponse {
      /** Retrieved items. */
      items?: Item[];
  }
  interface UpdateItemRequest {
      /** ID of the catalog the item belongs to. */
      catalogId: string;
      /** Item to update. */
      item?: Item;
  }
  interface UpdateItemResponse {
      /** Updated Item. */
      item?: Item;
  }
  interface V3CreateDishRequest {
      /** ID of the catalog the dish will belong to. */
      catalogId: string;
      /** ID of the menu the dish will belong to. */
      menuId: string;
      /** ID of the section the dish will belong to. */
      sectionId: string;
      /** Item of type `dish` to create. */
      dish: Item;
  }
  interface CreateDishResponse {
      /** Created Dish. */
      dish?: Item;
  }
  interface CreateVariationRequest {
      /** ID of the catalog the variation will belong to. */
      catalogId: string;
      /** Variation name. */
      name: string;
  }
  interface CreateVariationResponse {
      /** Created Variation. */
      variation?: Item;
  }
  interface MenuUpdated {
      metaSiteId?: string;
      organizationId?: string;
      locationId?: string | null;
  }
  interface Empty$2 {
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
  /**
   * Creates a draft version of the specified catalog.
   * Then you can update and publish the draft catalog by using the endpoints in the [Draft Catalogs category](https://dev.wix.com/api/rest/wix-restaurants/catalogs/draft-catalogs).
   *
   * > **Note:** You can't create more than one draft catalog per location.
   * @param catalogId - ID of the catalog to create a draft version for.
   * @public
   * @documentationMaturity preview
   * @requiredField catalogId
   * @adminMethod
   */
  function createDraftCatalog(catalogId: string): Promise<CreateDraftCatalogResponse>;
  /**
   * Publishes a draft catalog to the live site by replacing the existing catalog.
   * @param catalogId - ID of the draft catalog to publish.
   * @public
   * @documentationMaturity preview
   * @requiredField catalogId
   * @adminMethod
   */
  function publishDraftCatalog(catalogId: string): Promise<PublishDraftCatalogResponse>;
  /**
   * Discards a draft catalog. If you want to continue using [Bulk endpoints](https://dev.wix.com/api/rest/wix-restaurants/catalogs/draft-catalogs) for this catalog, you must first call the [Create Draft Catalog](https://dev.wix.com/api/rest/wix-restaurants/catalogs/draft-catalogs/create-draft-catalog) endpoint again.
   * @param catalogId - ID of the draft catalog to discard.
   * @public
   * @documentationMaturity preview
   * @requiredField catalogId
   * @adminMethod
   */
  function discardDraftCatalog(catalogId: string): Promise<void>;
  /**
   * Adds multiple variations to a draft catalog.
   * @param catalogId - ID of the catalog the variations will belong to.
   * @public
   * @documentationMaturity preview
   * @requiredField catalogId
   * @adminMethod
   */
  function bulkCreateVariations(catalogId: string, options?: BulkCreateVariationsOptions): Promise<BulkCreateVariationsResponse>;
  interface BulkCreateVariationsOptions {
      /** Variations to create. Limited to 20 variations. */
      variations?: NewVariation[];
      /** Whether the full variation entity is returned. Defaults to `true`. */
      returnFullEntity?: boolean;
  }
  /**
   * Updates multiple items in a draft catalog.
   * You can't update archived items.
   * @param catalogId - ID of the catalog the items belong to.
   * @public
   * @documentationMaturity preview
   * @requiredField catalogId
   * @adminMethod
   */
  function bulkUpdateItems(catalogId: string, options?: BulkUpdateItemsOptions): Promise<BulkUpdateItemsResponse>;
  interface BulkUpdateItemsOptions {
      /** Items to update. Limited to 20 items. */
      items?: Item[];
      /** Whether the full item entity is returned. Defaults to `true`. */
      returnFullEntity?: boolean;
  }
  /**
   * Adds multiple dishes to a draft catalog.
   * @param catalogId - ID of the catalog the dishes will belong to.
   * @public
   * @documentationMaturity preview
   * @requiredField catalogId
   * @adminMethod
   */
  function bulkCreateDishes(catalogId: string, options?: BulkCreateDishesOptions): Promise<BulkCreateDishesResponse>;
  interface BulkCreateDishesOptions {
      /** Information about the dishes to create. Limited to 20 dishes. */
      createDishRequests?: CreateDishRequest[];
      /** Whether the full item entity is returned. Defaults to `true`. */
      returnFullEntity?: boolean;
  }
  /**
   * Adds multiple menus to a draft catalog.
   * @param catalogId - ID of the catalog the menus will belong to.
   * @public
   * @documentationMaturity preview
   * @requiredField catalogId
   * @adminMethod
   */
  function bulkCreateMenus(catalogId: string, options?: BulkCreateMenusOptions): Promise<BulkCreateMenusResponse>;
  interface BulkCreateMenusOptions {
      /** Information about the menus to create. Limited to 20 menus. */
      menus?: Menu[];
      /** Whether the full menu entity is returned. Defaults to `true`. */
      returnFullEntity?: boolean;
  }
  /**
   * Updates multiple menus in a draft catalog.
   * You can't update archived menus.
   * @param catalogId - ID of the catalog the menus belong to.
   * @public
   * @documentationMaturity preview
   * @requiredField catalogId
   * @adminMethod
   */
  function bulkUpdateMenus(catalogId: string, options?: BulkUpdateMenusOptions): Promise<BulkUpdateMenusResponse>;
  interface BulkUpdateMenusOptions {
      /** Menus to update. */
      menus?: Menu[];
      /** Whether the full menu entity is returned. Defaults to `true`. */
      returnFullEntity?: boolean;
  }
  /**
   * Adds multiple sections to a draft catalog.
   * @param catalogId - ID of the catalog the sections will belong to.
   * @public
   * @documentationMaturity preview
   * @requiredField catalogId
   * @adminMethod
   */
  function bulkCreateSections(catalogId: string, options?: BulkCreateSectionsOptions): Promise<BulkCreateSectionsResponse>;
  interface BulkCreateSectionsOptions {
      /** Information about the sections to create. Limited to 20 sections. */
      createSectionRequests?: CreateSectionRequest[];
      /** Whether the full section entity is returned. Defaults to `true`. */
      returnFullEntity?: boolean;
  }
  /**
   * Updates multiple sections in a draft catalog.
   * You can't update archived sections.
   * @param catalogId - ID of the catalog the sections belong to.
   * @public
   * @documentationMaturity preview
   * @requiredField catalogId
   * @adminMethod
   */
  function bulkUpdateSections(catalogId: string, options?: BulkUpdateSectionsOptions): Promise<BulkUpdateSectionsResponse>;
  interface BulkUpdateSectionsOptions {
      /** Information about the sections to update. Limited to 20 sections. */
      updateSectionsRequests?: UpdateSectionRequest[];
      /** Whether the full section entity is returned. Defaults to `true`. */
      returnFullEntity?: boolean;
  }
  /**
   * Changes the `archived` boolean to `true` for multiple menus in a draft catalog.
   * @param catalogId - ID of the catalog the menus belong to.
   * @public
   * @documentationMaturity preview
   * @requiredField catalogId
   * @adminMethod
   */
  function bulkArchiveMenus(catalogId: string, options?: BulkArchiveMenusOptions): Promise<BulkArchiveMenusResponse>;
  interface BulkArchiveMenusOptions {
      /** IDs of the menus to archive. */
      ids?: string[];
      /** Whether the full menu entity is returned. Defaults to `true`. */
      returnFullEntity?: boolean;
  }
  /**
   * Changes the `archived` boolean to `false` for multiple menus in a draft catalog.
   * @param catalogId - ID of the catalog the menus belong to.
   * @public
   * @documentationMaturity preview
   * @requiredField catalogId
   * @adminMethod
   */
  function bulkUnarchiveMenus(catalogId: string, options?: BulkUnarchiveMenusOptions): Promise<BulkUnarchiveMenusResponse>;
  interface BulkUnarchiveMenusOptions {
      /** IDs of the menus to unarchive. */
      ids?: string[];
      /** Whether the full menu entity is returned. Defaults to `true`. */
      returnFullEntity?: boolean;
  }
  /**
   * Retrieves catalogs, given the provided filtering, sorting and paging.
   * Note that there is a single catalog per location.
   * @public
   * @documentationMaturity preview
   */
  function listCatalogs(options?: ListCatalogsOptions): Promise<ListCatalogsResponse>;
  interface ListCatalogsOptions {
      /** Sort order. Defaults to `ASC`. */
      sort?: Sorting;
      /** Paging information. `offset` defaults to `0` and `limit` defaults to `50`. The maximum for limit is `1,000`. */
      paging?: Paging;
      /** Whether archived catalogs are returned. Defaults to `false`. */
      archived?: boolean;
      /** IDs of the locations for which the catalog will be returned. See the [Locations API](https://dev.wix.com/api/rest/business-info/locations/introduction) for more details. */
      locationIds?: string[];
      /**
       * IDs of the restaurant-locations for which the catalog will be returned.
       * @internal
       */
      restaurantLocationIds?: string[];
  }
  /**
   * Retrieves a menu.
   * @public
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.catalogId
   * @requiredField identifiers.menuId
   */
  function getMenu(identifiers: GetMenuIdentifiers): Promise<GetMenuResponse>;
  interface GetMenuIdentifiers {
      /** ID of the catalog the menu belongs to. */
      catalogId: string;
      /** Menu ID. */
      menuId: string;
  }
  /**
   * Retrieves a section.
   * @public
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.catalogId
   * @requiredField identifiers.menuId
   * @requiredField identifiers.sectionId
   */
  function getSection(identifiers: GetSectionIdentifiers): Promise<GetSectionResponse>;
  interface GetSectionIdentifiers {
      /** ID of the catalog the section belongs to. */
      catalogId: string;
      /** ID of the menu the catalog belongs to. */
      menuId: string;
      /** Section ID. */
      sectionId: string;
  }
  /**
   * Updates a menu.
   * You can't update archived menus.
   * @public
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.catalogId
   * @requiredField identifiers.menuId
   * @adminMethod
   */
  function updateMenu(identifiers: UpdateMenuIdentifiers, options?: UpdateMenuOptions): Promise<UpdateMenuResponse>;
  interface UpdateMenuIdentifiers {
      /** ID of the catalog the menu belongs to. */
      catalogId: string;
      /**
       * Menu ID.
       * @readonly
       */
      menuId?: string | null;
  }
  interface UpdateMenuOptions {
      menu: {
          /**
           * Menu ID.
           * @readonly
           */
          _id?: string | null;
          /** Menu name. */
          name?: string | null;
          /** Menu description. */
          description?: string | null;
          /** URL of the menu's image file. */
          imageUrl?: string | null;
          /**
           * Visibility criteria that must be met for the menu to appear in the live site.
           * In case of multiple visibility criteria, every criterion must be fulfilled.
           */
          visibilityCriteria?: VisibilityCriteria;
          /** IDs of the sections that are included in the menu. */
          sectionIds?: MenuSectionIds;
          /**
           * Whether the menu is archived. Defaults to `false`. **Note:** Archived menus can't be updated.
           * @readonly
           */
          archived?: boolean | null;
      };
  }
  /**
   * Updates a section.
   * You can't update archived sections. Note that every section belongs to a single menu, you can't add it to another menu.
   * @public
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.catalogId
   * @requiredField identifiers.menuId
   * @requiredField identifiers.sectionId
   * @adminMethod
   */
  function updateSection(identifiers: UpdateSectionIdentifiers, options?: UpdateSectionOptions): Promise<UpdateSectionResponse>;
  interface UpdateSectionIdentifiers {
      /** ID of the catalog the section belongs to. */
      catalogId: string;
      /** Menu ID. */
      menuId: string;
      /**
       * Section ID.
       * @readonly
       */
      sectionId?: string | null;
  }
  interface UpdateSectionOptions {
      section: {
          /**
           * Section ID.
           * @readonly
           */
          _id?: string | null;
          /**
           * ID of the menu the section belongs to.
           * @readonly
           */
          menuId?: string | null;
          /** Section name. */
          name?: string | null;
          /** Section description. */
          description?: string | null;
          /** URL of the section's image file. */
          imageUrl?: string | null;
          /** IDs of the items that belong to the section. */
          itemIds?: SectionItemIds;
          /**
           * Visibility criteria that must be met for the section to appear in the live site.
           * In case of multiple visibility criteria, every criterion must be fulfilled.
           */
          visibilityCriteria?: VisibilityCriteria;
          /**
           * Whether the section is archived. Defaults to `false`. **Note:** Archived sections can't be updated.
           * @readonly
           */
          archived?: boolean | null;
      };
  }
  /**
   * Retrieves menus, given the provided filtering, sorting and paging.
   * @param catalogId - ID of the catalog the menus belong to.
   * @public
   * @documentationMaturity preview
   * @requiredField catalogId
   */
  function listMenus(catalogId: string, options?: ListMenusOptions): Promise<ListMenusResponse>;
  interface ListMenusOptions {
      /**
       * Field mask path.
       * @internal
       */
      fieldMask?: string[];
      /** Whether archived menus are returned. Defaults to `false`. */
      archived?: boolean;
      /**
       * Fulfillment types filter
       * @internal
       */
      fulfillmentTypes?: FulfillmentType$2[];
      /**
       * Ordering platforms filter
       * @internal
       */
      platforms?: Platform[];
  }
  /**
   * Retrieves sections, given the provided filtering, sorting and paging.
   * @param catalogId - ID of the catalog the sections belong to.
   * @public
   * @documentationMaturity preview
   * @requiredField catalogId
   */
  function listSections(catalogId: string, options?: ListSectionsOptions): Promise<ListSectionsResponse>;
  interface ListSectionsOptions {
      /**
       * Field mask path.
       * @internal
       */
      fieldMask?: string[];
      /** Whether archived sections are returned. Defaults to `false`. */
      archived?: boolean;
      /**
       * Fulfillment types filter
       * @internal
       */
      fulfillmentTypes?: FulfillmentType$2[];
      /**
       * Ordering platforms filter
       * @internal
       */
      platforms?: Platform[];
  }
  /**
   * Creates a menu.
   * @param catalogId - ID of the catalog the menu will belong to.
   * @param menu - Menu to create.
   * @public
   * @documentationMaturity preview
   * @requiredField catalogId
   * @requiredField menu
   * @adminMethod
   */
  function createMenu(catalogId: string, menu: Menu): Promise<CreateMenuResponse>;
  /**
   * Archives a menu. You can't update archived menus.
   * @public
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.catalogId
   * @requiredField identifiers.menuId
   * @adminMethod
   */
  function archiveMenu(identifiers: ArchiveMenuIdentifiers): Promise<ArchiveMenuResponse>;
  interface ArchiveMenuIdentifiers {
      /** ID of the catalog the menu belongs to. */
      catalogId: string;
      /** Menu ID. */
      menuId: string;
  }
  /**
   * Unarchives a menu.
   * @public
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.catalogId
   * @requiredField identifiers.menuId
   * @adminMethod
   */
  function unarchiveMenu(identifiers: UnarchiveMenuIdentifiers): Promise<UnarchiveMenuResponse>;
  interface UnarchiveMenuIdentifiers {
      /** ID of the catalog the menu belongs to. */
      catalogId: string;
      /** Menu ID. */
      menuId: string;
  }
  /**
   * Archives a section. You can't update archived sections.
   * @internal
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.catalogId
   * @requiredField identifiers.menuId
   * @requiredField identifiers.sectionId
   * @adminMethod
   */
  function archiveSection(identifiers: ArchiveSectionIdentifiers): Promise<ArchiveSectionResponse>;
  interface ArchiveSectionIdentifiers {
      /** ID of the catalog the menu belongs to. */
      catalogId: string;
      /** Menu ID. */
      menuId: string;
      /** Section ID. */
      sectionId: string;
  }
  /**
   * Remove an item from a section
   * @param itemId - Item ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.catalogId
   * @requiredField identifiers.menuId
   * @requiredField identifiers.sectionId
   * @requiredField itemId
   * @adminMethod
   */
  function removeDishFromSection(identifiers: RemoveDishFromSectionIdentifiers, itemId: string): Promise<void>;
  interface RemoveDishFromSectionIdentifiers {
      /** ID of the catalog the menu belongs to. */
      catalogId: string;
      /** Menu ID. */
      menuId: string;
      /** Section ID. */
      sectionId: string;
  }
  /**
   * Creates a section.
   * You can't add the section to multiple menus, since every section belongs to a single menu.
   * @param section - Section to create.
   * @public
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.catalogId
   * @requiredField identifiers.menuId
   * @requiredField section
   * @adminMethod
   */
  function createSection(identifiers: CreateSectionIdentifiers, section: Section): Promise<CreateSectionResponse>;
  interface CreateSectionIdentifiers {
      /** ID of the catalog the section will belong to. */
      catalogId: string;
      /** ID of the menu the section will belong to. */
      menuId: string;
  }
  /**
   * Retrieves an item.
   * @public
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.catalogId
   * @requiredField identifiers.itemId
   */
  function getItem(identifiers: GetItemIdentifiers, options?: GetItemOptions): Promise<GetItemResponse>;
  interface GetItemIdentifiers {
      /** ID of the catalog the item belongs to. */
      catalogId: string;
      /** Item ID. */
      itemId: string;
  }
  interface GetItemOptions {
      /** Whether `visibilityCriteria` is returned. Defaults to `false`. */
      includeVisibilityCriteria?: boolean;
  }
  /**
   * Retrieves items, given the provided filtering, sorting and paging.
   * @param catalogId - ID of the catalog the items belong to.
   * @public
   * @documentationMaturity preview
   * @requiredField catalogId
   */
  function listItems(catalogId: string, options?: ListItemsOptions): Promise<ListItemsResponse>;
  interface ListItemsOptions {
      /**
       * Field mask path.
       * @internal
       */
      fieldMask?: string[];
      /** Whether archived items are returned. Defaults to `false`. */
      archived?: boolean;
      /**
       * Fulfillment types filter
       * @internal
       */
      fulfillmentTypes?: FulfillmentType$2[];
      /**
       * Ordering platforms filter
       * @internal
       */
      platforms?: Platform[];
  }
  /**
   * Updates an item.
   * You can't update archived items.
   * @public
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.catalogId
   * @requiredField identifiers.itemId
   * @adminMethod
   */
  function updateItem(identifiers: UpdateItemIdentifiers, options?: UpdateItemOptions): Promise<UpdateItemResponse>;
  interface UpdateItemIdentifiers {
      /** ID of the catalog the item belongs to. */
      catalogId: string;
      /**
       * Item ID.
       * @readonly
       */
      itemId?: string | null;
  }
  interface UpdateItemOptions {
      item: {
          /**
           * Item ID.
           * @readonly
           */
          _id?: string | null;
          /** Item name. */
          name?: string | null;
          /** Item description. */
          description?: string | null;
          /** Item price. */
          price?: Money$2;
          /** URL of the item's image file. */
          imageUrl?: string | null;
          /** Item labels. For example spicy, hot, vegan, gluten-free, or organic. */
          labels?: Labels;
          /** Whether the item is in stock. */
          inStock?: boolean | null;
          /** Tax rate of the item in percent. */
          taxRate?: string | null;
          /**
           * Whether the item is archived. Defaults to `false`. **Note:** Archived items can't be updated.
           * @readonly
           */
          archived?: boolean | null;
          /**
           * Visibility criteria that must be met for the item to appear in the live site.
           * In case of multiple visibility criteria, every criterion must be fulfilled.
           */
          visibilityCriteria?: VisibilityCriteria;
          /** Items customers can choose to modify a dish. Can be an extra, selection, or deselection. */
          dishOptions?: DishOptions;
          /** Whether a customer can add a special request when ordering this item. Defaults to `true`. */
          acceptSpecialRequest?: boolean | null;
          /**
           * Item type.
           * @readonly
           */
          type?: ItemType;
      };
  }
  /**
   * Creates a dish.
   * @param dish - Item of type `dish` to create.
   * @public
   * @documentationMaturity preview
   * @requiredField dish
   * @requiredField identifiers
   * @requiredField identifiers.catalogId
   * @requiredField identifiers.menuId
   * @requiredField identifiers.sectionId
   * @adminMethod
   */
  function createDish(identifiers: CreateDishIdentifiers, dish: Item): Promise<CreateDishResponse>;
  interface CreateDishIdentifiers {
      /** ID of the catalog the dish will belong to. */
      catalogId: string;
      /** ID of the menu the dish will belong to. */
      menuId: string;
      /** ID of the section the dish will belong to. */
      sectionId: string;
  }
  /**
   * Creates a variation.
   * @param catalogId - ID of the catalog the variation will belong to.
   * @param name - Variation name.
   * @public
   * @documentationMaturity preview
   * @requiredField catalogId
   * @requiredField name
   * @adminMethod
   */
  function createVariation(catalogId: string, name: string): Promise<CreateVariationResponse>;
  /**
   * Adds multiple variations to a catalog.
   * @param catalogId - ID of the catalog the variations will belong to.
   * @internal
   * @documentationMaturity preview
   * @requiredField catalogId
   * @adminMethod
   */
  function catalogsBulkCreateVariations(catalogId: string, options?: CatalogsBulkCreateVariationsOptions): Promise<BulkCreateVariationsResponse>;
  interface CatalogsBulkCreateVariationsOptions {
      /** Variations to create. Limited to 20 variations. */
      variations?: NewVariation[];
      /** Whether the full variation entity is returned. Defaults to `true`. */
      returnFullEntity?: boolean;
  }
  /**
   * Changes the `archived` boolean to `true` for multiple menus.
   * @param catalogId - ID of the catalog the menus belong to.
   * @internal
   * @documentationMaturity preview
   * @requiredField catalogId
   * @adminMethod
   */
  function catalogsBulkArchiveMenus(catalogId: string, options?: CatalogsBulkArchiveMenusOptions): Promise<BulkArchiveMenusResponse>;
  interface CatalogsBulkArchiveMenusOptions {
      /** IDs of the menus to archive. */
      ids?: string[];
      /** Whether the full menu entity is returned. Defaults to `true`. */
      returnFullEntity?: boolean;
  }
  /**
   * Adds multiple dishes to a catalog.
   * @param catalogId - ID of the catalog the dishes will belong to.
   * @internal
   * @documentationMaturity preview
   * @requiredField catalogId
   * @adminMethod
   */
  function catalogsBulkCreateDishes(catalogId: string, options?: CatalogsBulkCreateDishesOptions): Promise<BulkCreateDishesResponse>;
  interface CatalogsBulkCreateDishesOptions {
      /** Information about the dishes to create. Limited to 20 dishes. */
      createDishRequests?: CreateDishRequest[];
      /** Whether the full item entity is returned. Defaults to `true`. */
      returnFullEntity?: boolean;
  }
  /**
   * Adds multiple sections to a catalog.
   * @param catalogId - ID of the catalog the sections will belong to.
   * @internal
   * @documentationMaturity preview
   * @requiredField catalogId
   * @adminMethod
   */
  function catalogsBulkCreateSections(catalogId: string, options?: CatalogsBulkCreateSectionsOptions): Promise<BulkCreateSectionsResponse>;
  interface CatalogsBulkCreateSectionsOptions {
      /** Information about the sections to create. Limited to 20 sections. */
      createSectionRequests?: CreateSectionRequest[];
      /** Whether the full section entity is returned. Defaults to `true`. */
      returnFullEntity?: boolean;
  }
  
  type restaurantsCatalogsV3Catalog_universal_d_Catalog = Catalog;
  type restaurantsCatalogsV3Catalog_universal_d_CreateDraftCatalogRequest = CreateDraftCatalogRequest;
  type restaurantsCatalogsV3Catalog_universal_d_CreateDraftCatalogResponse = CreateDraftCatalogResponse;
  type restaurantsCatalogsV3Catalog_universal_d_PublishDraftCatalogRequest = PublishDraftCatalogRequest;
  type restaurantsCatalogsV3Catalog_universal_d_PublishDraftCatalogResponse = PublishDraftCatalogResponse;
  type restaurantsCatalogsV3Catalog_universal_d_DiscardDraftCatalogRequest = DiscardDraftCatalogRequest;
  type restaurantsCatalogsV3Catalog_universal_d_DiscardDraftCatalogResponse = DiscardDraftCatalogResponse;
  type restaurantsCatalogsV3Catalog_universal_d_BulkCreateVariationsRequest = BulkCreateVariationsRequest;
  type restaurantsCatalogsV3Catalog_universal_d_NewVariation = NewVariation;
  type restaurantsCatalogsV3Catalog_universal_d_BulkCreateVariationsResponse = BulkCreateVariationsResponse;
  type restaurantsCatalogsV3Catalog_universal_d_BulkItemResult = BulkItemResult;
  type restaurantsCatalogsV3Catalog_universal_d_ItemMetadata = ItemMetadata;
  type restaurantsCatalogsV3Catalog_universal_d_ApplicationError = ApplicationError;
  type restaurantsCatalogsV3Catalog_universal_d_Item = Item;
  type restaurantsCatalogsV3Catalog_universal_d_Labels = Labels;
  type restaurantsCatalogsV3Catalog_universal_d_VisibilityCriteria = VisibilityCriteria;
  type restaurantsCatalogsV3Catalog_universal_d_Platform = Platform;
  const restaurantsCatalogsV3Catalog_universal_d_Platform: typeof Platform;
  type restaurantsCatalogsV3Catalog_universal_d_DishOptions = DishOptions;
  type restaurantsCatalogsV3Catalog_universal_d_DishOption = DishOption;
  type restaurantsCatalogsV3Catalog_universal_d_DishOptionMethodOneOf = DishOptionMethodOneOf;
  type restaurantsCatalogsV3Catalog_universal_d_DishOptionItem = DishOptionItem;
  type restaurantsCatalogsV3Catalog_universal_d_Selection = Selection;
  type restaurantsCatalogsV3Catalog_universal_d_Extras = Extras;
  type restaurantsCatalogsV3Catalog_universal_d_Deselection = Deselection;
  type restaurantsCatalogsV3Catalog_universal_d_ItemType = ItemType;
  const restaurantsCatalogsV3Catalog_universal_d_ItemType: typeof ItemType;
  type restaurantsCatalogsV3Catalog_universal_d_BulkActionMetadata = BulkActionMetadata;
  type restaurantsCatalogsV3Catalog_universal_d_BulkUpdateItemsRequest = BulkUpdateItemsRequest;
  type restaurantsCatalogsV3Catalog_universal_d_BulkUpdateItemsResponse = BulkUpdateItemsResponse;
  type restaurantsCatalogsV3Catalog_universal_d_BulkCreateDishesRequest = BulkCreateDishesRequest;
  type restaurantsCatalogsV3Catalog_universal_d_CreateDishRequest = CreateDishRequest;
  type restaurantsCatalogsV3Catalog_universal_d_BulkCreateDishesResponse = BulkCreateDishesResponse;
  type restaurantsCatalogsV3Catalog_universal_d_BulkCreateMenusRequest = BulkCreateMenusRequest;
  type restaurantsCatalogsV3Catalog_universal_d_Menu = Menu;
  type restaurantsCatalogsV3Catalog_universal_d_MenuSectionIds = MenuSectionIds;
  type restaurantsCatalogsV3Catalog_universal_d_BulkCreateMenusResponse = BulkCreateMenusResponse;
  type restaurantsCatalogsV3Catalog_universal_d_BulkMenuResult = BulkMenuResult;
  type restaurantsCatalogsV3Catalog_universal_d_BulkUpdateMenusRequest = BulkUpdateMenusRequest;
  type restaurantsCatalogsV3Catalog_universal_d_BulkUpdateMenusResponse = BulkUpdateMenusResponse;
  type restaurantsCatalogsV3Catalog_universal_d_BulkCreateSectionsRequest = BulkCreateSectionsRequest;
  type restaurantsCatalogsV3Catalog_universal_d_Section = Section;
  type restaurantsCatalogsV3Catalog_universal_d_SectionItemIds = SectionItemIds;
  type restaurantsCatalogsV3Catalog_universal_d_CreateSectionRequest = CreateSectionRequest;
  type restaurantsCatalogsV3Catalog_universal_d_BulkCreateSectionsResponse = BulkCreateSectionsResponse;
  type restaurantsCatalogsV3Catalog_universal_d_BulkSectionResult = BulkSectionResult;
  type restaurantsCatalogsV3Catalog_universal_d_BulkUpdateSectionsRequest = BulkUpdateSectionsRequest;
  type restaurantsCatalogsV3Catalog_universal_d_UpdateSectionRequest = UpdateSectionRequest;
  type restaurantsCatalogsV3Catalog_universal_d_BulkUpdateSectionsResponse = BulkUpdateSectionsResponse;
  type restaurantsCatalogsV3Catalog_universal_d_BulkArchiveMenusRequest = BulkArchiveMenusRequest;
  type restaurantsCatalogsV3Catalog_universal_d_BulkArchiveMenusResponse = BulkArchiveMenusResponse;
  type restaurantsCatalogsV3Catalog_universal_d_BulkUnarchiveMenusRequest = BulkUnarchiveMenusRequest;
  type restaurantsCatalogsV3Catalog_universal_d_BulkUnarchiveMenusResponse = BulkUnarchiveMenusResponse;
  type restaurantsCatalogsV3Catalog_universal_d_InvalidateCache = InvalidateCache;
  type restaurantsCatalogsV3Catalog_universal_d_InvalidateCacheGetByOneOf = InvalidateCacheGetByOneOf;
  type restaurantsCatalogsV3Catalog_universal_d_App = App;
  type restaurantsCatalogsV3Catalog_universal_d_Page = Page;
  type restaurantsCatalogsV3Catalog_universal_d_URI = URI;
  type restaurantsCatalogsV3Catalog_universal_d_CatalogUpdated = CatalogUpdated;
  type restaurantsCatalogsV3Catalog_universal_d_PublishCatalogUpdated = PublishCatalogUpdated;
  type restaurantsCatalogsV3Catalog_universal_d_IndexCacheCmd = IndexCacheCmd;
  type restaurantsCatalogsV3Catalog_universal_d_CatalogChanged = CatalogChanged;
  type restaurantsCatalogsV3Catalog_universal_d_ListCatalogsRequest = ListCatalogsRequest;
  type restaurantsCatalogsV3Catalog_universal_d_Sorting = Sorting;
  type restaurantsCatalogsV3Catalog_universal_d_Paging = Paging;
  type restaurantsCatalogsV3Catalog_universal_d_ListCatalogsResponse = ListCatalogsResponse;
  type restaurantsCatalogsV3Catalog_universal_d_GetMenuRequest = GetMenuRequest;
  type restaurantsCatalogsV3Catalog_universal_d_GetMenuResponse = GetMenuResponse;
  type restaurantsCatalogsV3Catalog_universal_d_GetSectionRequest = GetSectionRequest;
  type restaurantsCatalogsV3Catalog_universal_d_GetSectionResponse = GetSectionResponse;
  type restaurantsCatalogsV3Catalog_universal_d_UpdateMenuRequest = UpdateMenuRequest;
  type restaurantsCatalogsV3Catalog_universal_d_UpdateMenuResponse = UpdateMenuResponse;
  type restaurantsCatalogsV3Catalog_universal_d_V3UpdateSectionRequest = V3UpdateSectionRequest;
  type restaurantsCatalogsV3Catalog_universal_d_UpdateSectionResponse = UpdateSectionResponse;
  type restaurantsCatalogsV3Catalog_universal_d_ListMenusRequest = ListMenusRequest;
  type restaurantsCatalogsV3Catalog_universal_d_ListMenusResponse = ListMenusResponse;
  type restaurantsCatalogsV3Catalog_universal_d_ListSectionsRequest = ListSectionsRequest;
  type restaurantsCatalogsV3Catalog_universal_d_ListSectionsResponse = ListSectionsResponse;
  type restaurantsCatalogsV3Catalog_universal_d_CreateMenuRequest = CreateMenuRequest;
  type restaurantsCatalogsV3Catalog_universal_d_CreateMenuResponse = CreateMenuResponse;
  type restaurantsCatalogsV3Catalog_universal_d_ArchiveMenuRequest = ArchiveMenuRequest;
  type restaurantsCatalogsV3Catalog_universal_d_ArchiveMenuResponse = ArchiveMenuResponse;
  type restaurantsCatalogsV3Catalog_universal_d_UnarchiveMenuRequest = UnarchiveMenuRequest;
  type restaurantsCatalogsV3Catalog_universal_d_UnarchiveMenuResponse = UnarchiveMenuResponse;
  type restaurantsCatalogsV3Catalog_universal_d_ArchiveSectionRequest = ArchiveSectionRequest;
  type restaurantsCatalogsV3Catalog_universal_d_ArchiveSectionResponse = ArchiveSectionResponse;
  type restaurantsCatalogsV3Catalog_universal_d_RemoveDishFromSectionRequest = RemoveDishFromSectionRequest;
  type restaurantsCatalogsV3Catalog_universal_d_RemoveDishFromSectionResponse = RemoveDishFromSectionResponse;
  type restaurantsCatalogsV3Catalog_universal_d_V3CreateSectionRequest = V3CreateSectionRequest;
  type restaurantsCatalogsV3Catalog_universal_d_CreateSectionResponse = CreateSectionResponse;
  type restaurantsCatalogsV3Catalog_universal_d_GetItemRequest = GetItemRequest;
  type restaurantsCatalogsV3Catalog_universal_d_GetItemResponse = GetItemResponse;
  type restaurantsCatalogsV3Catalog_universal_d_ListItemsRequest = ListItemsRequest;
  type restaurantsCatalogsV3Catalog_universal_d_ListItemsResponse = ListItemsResponse;
  type restaurantsCatalogsV3Catalog_universal_d_UpdateItemRequest = UpdateItemRequest;
  type restaurantsCatalogsV3Catalog_universal_d_UpdateItemResponse = UpdateItemResponse;
  type restaurantsCatalogsV3Catalog_universal_d_V3CreateDishRequest = V3CreateDishRequest;
  type restaurantsCatalogsV3Catalog_universal_d_CreateDishResponse = CreateDishResponse;
  type restaurantsCatalogsV3Catalog_universal_d_CreateVariationRequest = CreateVariationRequest;
  type restaurantsCatalogsV3Catalog_universal_d_CreateVariationResponse = CreateVariationResponse;
  type restaurantsCatalogsV3Catalog_universal_d_MenuUpdated = MenuUpdated;
  const restaurantsCatalogsV3Catalog_universal_d_createDraftCatalog: typeof createDraftCatalog;
  const restaurantsCatalogsV3Catalog_universal_d_publishDraftCatalog: typeof publishDraftCatalog;
  const restaurantsCatalogsV3Catalog_universal_d_discardDraftCatalog: typeof discardDraftCatalog;
  const restaurantsCatalogsV3Catalog_universal_d_bulkCreateVariations: typeof bulkCreateVariations;
  type restaurantsCatalogsV3Catalog_universal_d_BulkCreateVariationsOptions = BulkCreateVariationsOptions;
  const restaurantsCatalogsV3Catalog_universal_d_bulkUpdateItems: typeof bulkUpdateItems;
  type restaurantsCatalogsV3Catalog_universal_d_BulkUpdateItemsOptions = BulkUpdateItemsOptions;
  const restaurantsCatalogsV3Catalog_universal_d_bulkCreateDishes: typeof bulkCreateDishes;
  type restaurantsCatalogsV3Catalog_universal_d_BulkCreateDishesOptions = BulkCreateDishesOptions;
  const restaurantsCatalogsV3Catalog_universal_d_bulkCreateMenus: typeof bulkCreateMenus;
  type restaurantsCatalogsV3Catalog_universal_d_BulkCreateMenusOptions = BulkCreateMenusOptions;
  const restaurantsCatalogsV3Catalog_universal_d_bulkUpdateMenus: typeof bulkUpdateMenus;
  type restaurantsCatalogsV3Catalog_universal_d_BulkUpdateMenusOptions = BulkUpdateMenusOptions;
  const restaurantsCatalogsV3Catalog_universal_d_bulkCreateSections: typeof bulkCreateSections;
  type restaurantsCatalogsV3Catalog_universal_d_BulkCreateSectionsOptions = BulkCreateSectionsOptions;
  const restaurantsCatalogsV3Catalog_universal_d_bulkUpdateSections: typeof bulkUpdateSections;
  type restaurantsCatalogsV3Catalog_universal_d_BulkUpdateSectionsOptions = BulkUpdateSectionsOptions;
  const restaurantsCatalogsV3Catalog_universal_d_bulkArchiveMenus: typeof bulkArchiveMenus;
  type restaurantsCatalogsV3Catalog_universal_d_BulkArchiveMenusOptions = BulkArchiveMenusOptions;
  const restaurantsCatalogsV3Catalog_universal_d_bulkUnarchiveMenus: typeof bulkUnarchiveMenus;
  type restaurantsCatalogsV3Catalog_universal_d_BulkUnarchiveMenusOptions = BulkUnarchiveMenusOptions;
  const restaurantsCatalogsV3Catalog_universal_d_listCatalogs: typeof listCatalogs;
  type restaurantsCatalogsV3Catalog_universal_d_ListCatalogsOptions = ListCatalogsOptions;
  const restaurantsCatalogsV3Catalog_universal_d_getMenu: typeof getMenu;
  type restaurantsCatalogsV3Catalog_universal_d_GetMenuIdentifiers = GetMenuIdentifiers;
  const restaurantsCatalogsV3Catalog_universal_d_getSection: typeof getSection;
  type restaurantsCatalogsV3Catalog_universal_d_GetSectionIdentifiers = GetSectionIdentifiers;
  const restaurantsCatalogsV3Catalog_universal_d_updateMenu: typeof updateMenu;
  type restaurantsCatalogsV3Catalog_universal_d_UpdateMenuIdentifiers = UpdateMenuIdentifiers;
  type restaurantsCatalogsV3Catalog_universal_d_UpdateMenuOptions = UpdateMenuOptions;
  const restaurantsCatalogsV3Catalog_universal_d_updateSection: typeof updateSection;
  type restaurantsCatalogsV3Catalog_universal_d_UpdateSectionIdentifiers = UpdateSectionIdentifiers;
  type restaurantsCatalogsV3Catalog_universal_d_UpdateSectionOptions = UpdateSectionOptions;
  const restaurantsCatalogsV3Catalog_universal_d_listMenus: typeof listMenus;
  type restaurantsCatalogsV3Catalog_universal_d_ListMenusOptions = ListMenusOptions;
  const restaurantsCatalogsV3Catalog_universal_d_listSections: typeof listSections;
  type restaurantsCatalogsV3Catalog_universal_d_ListSectionsOptions = ListSectionsOptions;
  const restaurantsCatalogsV3Catalog_universal_d_createMenu: typeof createMenu;
  const restaurantsCatalogsV3Catalog_universal_d_archiveMenu: typeof archiveMenu;
  type restaurantsCatalogsV3Catalog_universal_d_ArchiveMenuIdentifiers = ArchiveMenuIdentifiers;
  const restaurantsCatalogsV3Catalog_universal_d_unarchiveMenu: typeof unarchiveMenu;
  type restaurantsCatalogsV3Catalog_universal_d_UnarchiveMenuIdentifiers = UnarchiveMenuIdentifiers;
  const restaurantsCatalogsV3Catalog_universal_d_archiveSection: typeof archiveSection;
  type restaurantsCatalogsV3Catalog_universal_d_ArchiveSectionIdentifiers = ArchiveSectionIdentifiers;
  const restaurantsCatalogsV3Catalog_universal_d_removeDishFromSection: typeof removeDishFromSection;
  type restaurantsCatalogsV3Catalog_universal_d_RemoveDishFromSectionIdentifiers = RemoveDishFromSectionIdentifiers;
  const restaurantsCatalogsV3Catalog_universal_d_createSection: typeof createSection;
  type restaurantsCatalogsV3Catalog_universal_d_CreateSectionIdentifiers = CreateSectionIdentifiers;
  const restaurantsCatalogsV3Catalog_universal_d_getItem: typeof getItem;
  type restaurantsCatalogsV3Catalog_universal_d_GetItemIdentifiers = GetItemIdentifiers;
  type restaurantsCatalogsV3Catalog_universal_d_GetItemOptions = GetItemOptions;
  const restaurantsCatalogsV3Catalog_universal_d_listItems: typeof listItems;
  type restaurantsCatalogsV3Catalog_universal_d_ListItemsOptions = ListItemsOptions;
  const restaurantsCatalogsV3Catalog_universal_d_updateItem: typeof updateItem;
  type restaurantsCatalogsV3Catalog_universal_d_UpdateItemIdentifiers = UpdateItemIdentifiers;
  type restaurantsCatalogsV3Catalog_universal_d_UpdateItemOptions = UpdateItemOptions;
  const restaurantsCatalogsV3Catalog_universal_d_createDish: typeof createDish;
  type restaurantsCatalogsV3Catalog_universal_d_CreateDishIdentifiers = CreateDishIdentifiers;
  const restaurantsCatalogsV3Catalog_universal_d_createVariation: typeof createVariation;
  const restaurantsCatalogsV3Catalog_universal_d_catalogsBulkCreateVariations: typeof catalogsBulkCreateVariations;
  type restaurantsCatalogsV3Catalog_universal_d_CatalogsBulkCreateVariationsOptions = CatalogsBulkCreateVariationsOptions;
  const restaurantsCatalogsV3Catalog_universal_d_catalogsBulkArchiveMenus: typeof catalogsBulkArchiveMenus;
  type restaurantsCatalogsV3Catalog_universal_d_CatalogsBulkArchiveMenusOptions = CatalogsBulkArchiveMenusOptions;
  const restaurantsCatalogsV3Catalog_universal_d_catalogsBulkCreateDishes: typeof catalogsBulkCreateDishes;
  type restaurantsCatalogsV3Catalog_universal_d_CatalogsBulkCreateDishesOptions = CatalogsBulkCreateDishesOptions;
  const restaurantsCatalogsV3Catalog_universal_d_catalogsBulkCreateSections: typeof catalogsBulkCreateSections;
  type restaurantsCatalogsV3Catalog_universal_d_CatalogsBulkCreateSectionsOptions = CatalogsBulkCreateSectionsOptions;
  namespace restaurantsCatalogsV3Catalog_universal_d {
    export {
      restaurantsCatalogsV3Catalog_universal_d_Catalog as Catalog,
      restaurantsCatalogsV3Catalog_universal_d_CreateDraftCatalogRequest as CreateDraftCatalogRequest,
      restaurantsCatalogsV3Catalog_universal_d_CreateDraftCatalogResponse as CreateDraftCatalogResponse,
      restaurantsCatalogsV3Catalog_universal_d_PublishDraftCatalogRequest as PublishDraftCatalogRequest,
      restaurantsCatalogsV3Catalog_universal_d_PublishDraftCatalogResponse as PublishDraftCatalogResponse,
      restaurantsCatalogsV3Catalog_universal_d_DiscardDraftCatalogRequest as DiscardDraftCatalogRequest,
      restaurantsCatalogsV3Catalog_universal_d_DiscardDraftCatalogResponse as DiscardDraftCatalogResponse,
      restaurantsCatalogsV3Catalog_universal_d_BulkCreateVariationsRequest as BulkCreateVariationsRequest,
      restaurantsCatalogsV3Catalog_universal_d_NewVariation as NewVariation,
      restaurantsCatalogsV3Catalog_universal_d_BulkCreateVariationsResponse as BulkCreateVariationsResponse,
      restaurantsCatalogsV3Catalog_universal_d_BulkItemResult as BulkItemResult,
      restaurantsCatalogsV3Catalog_universal_d_ItemMetadata as ItemMetadata,
      restaurantsCatalogsV3Catalog_universal_d_ApplicationError as ApplicationError,
      restaurantsCatalogsV3Catalog_universal_d_Item as Item,
      Money$2 as Money,
      restaurantsCatalogsV3Catalog_universal_d_Labels as Labels,
      restaurantsCatalogsV3Catalog_universal_d_VisibilityCriteria as VisibilityCriteria,
      FulfillmentType$2 as FulfillmentType,
      restaurantsCatalogsV3Catalog_universal_d_Platform as Platform,
      Availability$4 as Availability,
      TimePeriod$4 as TimePeriod,
      DayOfWeek$4 as DayOfWeek,
      SpecialHourPeriod$4 as SpecialHourPeriod,
      restaurantsCatalogsV3Catalog_universal_d_DishOptions as DishOptions,
      restaurantsCatalogsV3Catalog_universal_d_DishOption as DishOption,
      restaurantsCatalogsV3Catalog_universal_d_DishOptionMethodOneOf as DishOptionMethodOneOf,
      restaurantsCatalogsV3Catalog_universal_d_DishOptionItem as DishOptionItem,
      restaurantsCatalogsV3Catalog_universal_d_Selection as Selection,
      restaurantsCatalogsV3Catalog_universal_d_Extras as Extras,
      restaurantsCatalogsV3Catalog_universal_d_Deselection as Deselection,
      Type$3 as Type,
      restaurantsCatalogsV3Catalog_universal_d_ItemType as ItemType,
      restaurantsCatalogsV3Catalog_universal_d_BulkActionMetadata as BulkActionMetadata,
      restaurantsCatalogsV3Catalog_universal_d_BulkUpdateItemsRequest as BulkUpdateItemsRequest,
      restaurantsCatalogsV3Catalog_universal_d_BulkUpdateItemsResponse as BulkUpdateItemsResponse,
      restaurantsCatalogsV3Catalog_universal_d_BulkCreateDishesRequest as BulkCreateDishesRequest,
      restaurantsCatalogsV3Catalog_universal_d_CreateDishRequest as CreateDishRequest,
      restaurantsCatalogsV3Catalog_universal_d_BulkCreateDishesResponse as BulkCreateDishesResponse,
      restaurantsCatalogsV3Catalog_universal_d_BulkCreateMenusRequest as BulkCreateMenusRequest,
      restaurantsCatalogsV3Catalog_universal_d_Menu as Menu,
      restaurantsCatalogsV3Catalog_universal_d_MenuSectionIds as MenuSectionIds,
      restaurantsCatalogsV3Catalog_universal_d_BulkCreateMenusResponse as BulkCreateMenusResponse,
      restaurantsCatalogsV3Catalog_universal_d_BulkMenuResult as BulkMenuResult,
      restaurantsCatalogsV3Catalog_universal_d_BulkUpdateMenusRequest as BulkUpdateMenusRequest,
      restaurantsCatalogsV3Catalog_universal_d_BulkUpdateMenusResponse as BulkUpdateMenusResponse,
      restaurantsCatalogsV3Catalog_universal_d_BulkCreateSectionsRequest as BulkCreateSectionsRequest,
      restaurantsCatalogsV3Catalog_universal_d_Section as Section,
      restaurantsCatalogsV3Catalog_universal_d_SectionItemIds as SectionItemIds,
      restaurantsCatalogsV3Catalog_universal_d_CreateSectionRequest as CreateSectionRequest,
      restaurantsCatalogsV3Catalog_universal_d_BulkCreateSectionsResponse as BulkCreateSectionsResponse,
      restaurantsCatalogsV3Catalog_universal_d_BulkSectionResult as BulkSectionResult,
      restaurantsCatalogsV3Catalog_universal_d_BulkUpdateSectionsRequest as BulkUpdateSectionsRequest,
      restaurantsCatalogsV3Catalog_universal_d_UpdateSectionRequest as UpdateSectionRequest,
      restaurantsCatalogsV3Catalog_universal_d_BulkUpdateSectionsResponse as BulkUpdateSectionsResponse,
      restaurantsCatalogsV3Catalog_universal_d_BulkArchiveMenusRequest as BulkArchiveMenusRequest,
      restaurantsCatalogsV3Catalog_universal_d_BulkArchiveMenusResponse as BulkArchiveMenusResponse,
      restaurantsCatalogsV3Catalog_universal_d_BulkUnarchiveMenusRequest as BulkUnarchiveMenusRequest,
      restaurantsCatalogsV3Catalog_universal_d_BulkUnarchiveMenusResponse as BulkUnarchiveMenusResponse,
      restaurantsCatalogsV3Catalog_universal_d_InvalidateCache as InvalidateCache,
      restaurantsCatalogsV3Catalog_universal_d_InvalidateCacheGetByOneOf as InvalidateCacheGetByOneOf,
      restaurantsCatalogsV3Catalog_universal_d_App as App,
      restaurantsCatalogsV3Catalog_universal_d_Page as Page,
      restaurantsCatalogsV3Catalog_universal_d_URI as URI,
      restaurantsCatalogsV3Catalog_universal_d_CatalogUpdated as CatalogUpdated,
      Discount$2 as Discount,
      DiscountValueOneOf$1 as DiscountValueOneOf,
      DiscountApplyToFilterOneOf$1 as DiscountApplyToFilterOneOf,
      DiscountType$2 as DiscountType,
      SectionIds$1 as SectionIds,
      ItemIds$1 as ItemIds,
      DiscountCondition$1 as DiscountCondition,
      DiscountPlatform$1 as DiscountPlatform,
      Coupon$2 as Coupon,
      restaurantsCatalogsV3Catalog_universal_d_PublishCatalogUpdated as PublishCatalogUpdated,
      restaurantsCatalogsV3Catalog_universal_d_IndexCacheCmd as IndexCacheCmd,
      restaurantsCatalogsV3Catalog_universal_d_CatalogChanged as CatalogChanged,
      restaurantsCatalogsV3Catalog_universal_d_ListCatalogsRequest as ListCatalogsRequest,
      restaurantsCatalogsV3Catalog_universal_d_Sorting as Sorting,
      SortOrder$1 as SortOrder,
      restaurantsCatalogsV3Catalog_universal_d_Paging as Paging,
      restaurantsCatalogsV3Catalog_universal_d_ListCatalogsResponse as ListCatalogsResponse,
      restaurantsCatalogsV3Catalog_universal_d_GetMenuRequest as GetMenuRequest,
      restaurantsCatalogsV3Catalog_universal_d_GetMenuResponse as GetMenuResponse,
      restaurantsCatalogsV3Catalog_universal_d_GetSectionRequest as GetSectionRequest,
      restaurantsCatalogsV3Catalog_universal_d_GetSectionResponse as GetSectionResponse,
      restaurantsCatalogsV3Catalog_universal_d_UpdateMenuRequest as UpdateMenuRequest,
      restaurantsCatalogsV3Catalog_universal_d_UpdateMenuResponse as UpdateMenuResponse,
      restaurantsCatalogsV3Catalog_universal_d_V3UpdateSectionRequest as V3UpdateSectionRequest,
      restaurantsCatalogsV3Catalog_universal_d_UpdateSectionResponse as UpdateSectionResponse,
      restaurantsCatalogsV3Catalog_universal_d_ListMenusRequest as ListMenusRequest,
      restaurantsCatalogsV3Catalog_universal_d_ListMenusResponse as ListMenusResponse,
      restaurantsCatalogsV3Catalog_universal_d_ListSectionsRequest as ListSectionsRequest,
      restaurantsCatalogsV3Catalog_universal_d_ListSectionsResponse as ListSectionsResponse,
      restaurantsCatalogsV3Catalog_universal_d_CreateMenuRequest as CreateMenuRequest,
      restaurantsCatalogsV3Catalog_universal_d_CreateMenuResponse as CreateMenuResponse,
      restaurantsCatalogsV3Catalog_universal_d_ArchiveMenuRequest as ArchiveMenuRequest,
      restaurantsCatalogsV3Catalog_universal_d_ArchiveMenuResponse as ArchiveMenuResponse,
      restaurantsCatalogsV3Catalog_universal_d_UnarchiveMenuRequest as UnarchiveMenuRequest,
      restaurantsCatalogsV3Catalog_universal_d_UnarchiveMenuResponse as UnarchiveMenuResponse,
      restaurantsCatalogsV3Catalog_universal_d_ArchiveSectionRequest as ArchiveSectionRequest,
      restaurantsCatalogsV3Catalog_universal_d_ArchiveSectionResponse as ArchiveSectionResponse,
      restaurantsCatalogsV3Catalog_universal_d_RemoveDishFromSectionRequest as RemoveDishFromSectionRequest,
      restaurantsCatalogsV3Catalog_universal_d_RemoveDishFromSectionResponse as RemoveDishFromSectionResponse,
      restaurantsCatalogsV3Catalog_universal_d_V3CreateSectionRequest as V3CreateSectionRequest,
      restaurantsCatalogsV3Catalog_universal_d_CreateSectionResponse as CreateSectionResponse,
      restaurantsCatalogsV3Catalog_universal_d_GetItemRequest as GetItemRequest,
      restaurantsCatalogsV3Catalog_universal_d_GetItemResponse as GetItemResponse,
      restaurantsCatalogsV3Catalog_universal_d_ListItemsRequest as ListItemsRequest,
      restaurantsCatalogsV3Catalog_universal_d_ListItemsResponse as ListItemsResponse,
      restaurantsCatalogsV3Catalog_universal_d_UpdateItemRequest as UpdateItemRequest,
      restaurantsCatalogsV3Catalog_universal_d_UpdateItemResponse as UpdateItemResponse,
      restaurantsCatalogsV3Catalog_universal_d_V3CreateDishRequest as V3CreateDishRequest,
      restaurantsCatalogsV3Catalog_universal_d_CreateDishResponse as CreateDishResponse,
      restaurantsCatalogsV3Catalog_universal_d_CreateVariationRequest as CreateVariationRequest,
      restaurantsCatalogsV3Catalog_universal_d_CreateVariationResponse as CreateVariationResponse,
      restaurantsCatalogsV3Catalog_universal_d_MenuUpdated as MenuUpdated,
      Empty$2 as Empty,
      DomainEvent$2 as DomainEvent,
      DomainEventBodyOneOf$2 as DomainEventBodyOneOf,
      EntityCreatedEvent$2 as EntityCreatedEvent,
      EntityUpdatedEvent$2 as EntityUpdatedEvent,
      EntityDeletedEvent$2 as EntityDeletedEvent,
      ActionEvent$2 as ActionEvent,
      restaurantsCatalogsV3Catalog_universal_d_createDraftCatalog as createDraftCatalog,
      restaurantsCatalogsV3Catalog_universal_d_publishDraftCatalog as publishDraftCatalog,
      restaurantsCatalogsV3Catalog_universal_d_discardDraftCatalog as discardDraftCatalog,
      restaurantsCatalogsV3Catalog_universal_d_bulkCreateVariations as bulkCreateVariations,
      restaurantsCatalogsV3Catalog_universal_d_BulkCreateVariationsOptions as BulkCreateVariationsOptions,
      restaurantsCatalogsV3Catalog_universal_d_bulkUpdateItems as bulkUpdateItems,
      restaurantsCatalogsV3Catalog_universal_d_BulkUpdateItemsOptions as BulkUpdateItemsOptions,
      restaurantsCatalogsV3Catalog_universal_d_bulkCreateDishes as bulkCreateDishes,
      restaurantsCatalogsV3Catalog_universal_d_BulkCreateDishesOptions as BulkCreateDishesOptions,
      restaurantsCatalogsV3Catalog_universal_d_bulkCreateMenus as bulkCreateMenus,
      restaurantsCatalogsV3Catalog_universal_d_BulkCreateMenusOptions as BulkCreateMenusOptions,
      restaurantsCatalogsV3Catalog_universal_d_bulkUpdateMenus as bulkUpdateMenus,
      restaurantsCatalogsV3Catalog_universal_d_BulkUpdateMenusOptions as BulkUpdateMenusOptions,
      restaurantsCatalogsV3Catalog_universal_d_bulkCreateSections as bulkCreateSections,
      restaurantsCatalogsV3Catalog_universal_d_BulkCreateSectionsOptions as BulkCreateSectionsOptions,
      restaurantsCatalogsV3Catalog_universal_d_bulkUpdateSections as bulkUpdateSections,
      restaurantsCatalogsV3Catalog_universal_d_BulkUpdateSectionsOptions as BulkUpdateSectionsOptions,
      restaurantsCatalogsV3Catalog_universal_d_bulkArchiveMenus as bulkArchiveMenus,
      restaurantsCatalogsV3Catalog_universal_d_BulkArchiveMenusOptions as BulkArchiveMenusOptions,
      restaurantsCatalogsV3Catalog_universal_d_bulkUnarchiveMenus as bulkUnarchiveMenus,
      restaurantsCatalogsV3Catalog_universal_d_BulkUnarchiveMenusOptions as BulkUnarchiveMenusOptions,
      restaurantsCatalogsV3Catalog_universal_d_listCatalogs as listCatalogs,
      restaurantsCatalogsV3Catalog_universal_d_ListCatalogsOptions as ListCatalogsOptions,
      restaurantsCatalogsV3Catalog_universal_d_getMenu as getMenu,
      restaurantsCatalogsV3Catalog_universal_d_GetMenuIdentifiers as GetMenuIdentifiers,
      restaurantsCatalogsV3Catalog_universal_d_getSection as getSection,
      restaurantsCatalogsV3Catalog_universal_d_GetSectionIdentifiers as GetSectionIdentifiers,
      restaurantsCatalogsV3Catalog_universal_d_updateMenu as updateMenu,
      restaurantsCatalogsV3Catalog_universal_d_UpdateMenuIdentifiers as UpdateMenuIdentifiers,
      restaurantsCatalogsV3Catalog_universal_d_UpdateMenuOptions as UpdateMenuOptions,
      restaurantsCatalogsV3Catalog_universal_d_updateSection as updateSection,
      restaurantsCatalogsV3Catalog_universal_d_UpdateSectionIdentifiers as UpdateSectionIdentifiers,
      restaurantsCatalogsV3Catalog_universal_d_UpdateSectionOptions as UpdateSectionOptions,
      restaurantsCatalogsV3Catalog_universal_d_listMenus as listMenus,
      restaurantsCatalogsV3Catalog_universal_d_ListMenusOptions as ListMenusOptions,
      restaurantsCatalogsV3Catalog_universal_d_listSections as listSections,
      restaurantsCatalogsV3Catalog_universal_d_ListSectionsOptions as ListSectionsOptions,
      restaurantsCatalogsV3Catalog_universal_d_createMenu as createMenu,
      restaurantsCatalogsV3Catalog_universal_d_archiveMenu as archiveMenu,
      restaurantsCatalogsV3Catalog_universal_d_ArchiveMenuIdentifiers as ArchiveMenuIdentifiers,
      restaurantsCatalogsV3Catalog_universal_d_unarchiveMenu as unarchiveMenu,
      restaurantsCatalogsV3Catalog_universal_d_UnarchiveMenuIdentifiers as UnarchiveMenuIdentifiers,
      restaurantsCatalogsV3Catalog_universal_d_archiveSection as archiveSection,
      restaurantsCatalogsV3Catalog_universal_d_ArchiveSectionIdentifiers as ArchiveSectionIdentifiers,
      restaurantsCatalogsV3Catalog_universal_d_removeDishFromSection as removeDishFromSection,
      restaurantsCatalogsV3Catalog_universal_d_RemoveDishFromSectionIdentifiers as RemoveDishFromSectionIdentifiers,
      restaurantsCatalogsV3Catalog_universal_d_createSection as createSection,
      restaurantsCatalogsV3Catalog_universal_d_CreateSectionIdentifiers as CreateSectionIdentifiers,
      restaurantsCatalogsV3Catalog_universal_d_getItem as getItem,
      restaurantsCatalogsV3Catalog_universal_d_GetItemIdentifiers as GetItemIdentifiers,
      restaurantsCatalogsV3Catalog_universal_d_GetItemOptions as GetItemOptions,
      restaurantsCatalogsV3Catalog_universal_d_listItems as listItems,
      restaurantsCatalogsV3Catalog_universal_d_ListItemsOptions as ListItemsOptions,
      restaurantsCatalogsV3Catalog_universal_d_updateItem as updateItem,
      restaurantsCatalogsV3Catalog_universal_d_UpdateItemIdentifiers as UpdateItemIdentifiers,
      restaurantsCatalogsV3Catalog_universal_d_UpdateItemOptions as UpdateItemOptions,
      restaurantsCatalogsV3Catalog_universal_d_createDish as createDish,
      restaurantsCatalogsV3Catalog_universal_d_CreateDishIdentifiers as CreateDishIdentifiers,
      restaurantsCatalogsV3Catalog_universal_d_createVariation as createVariation,
      restaurantsCatalogsV3Catalog_universal_d_catalogsBulkCreateVariations as catalogsBulkCreateVariations,
      restaurantsCatalogsV3Catalog_universal_d_CatalogsBulkCreateVariationsOptions as CatalogsBulkCreateVariationsOptions,
      restaurantsCatalogsV3Catalog_universal_d_catalogsBulkArchiveMenus as catalogsBulkArchiveMenus,
      restaurantsCatalogsV3Catalog_universal_d_CatalogsBulkArchiveMenusOptions as CatalogsBulkArchiveMenusOptions,
      restaurantsCatalogsV3Catalog_universal_d_catalogsBulkCreateDishes as catalogsBulkCreateDishes,
      restaurantsCatalogsV3Catalog_universal_d_CatalogsBulkCreateDishesOptions as CatalogsBulkCreateDishesOptions,
      restaurantsCatalogsV3Catalog_universal_d_catalogsBulkCreateSections as catalogsBulkCreateSections,
      restaurantsCatalogsV3Catalog_universal_d_CatalogsBulkCreateSectionsOptions as CatalogsBulkCreateSectionsOptions,
    };
  }
  
  /**
   * Customers can use a discount to pay less. Can be an amount or a percentage.
   * You can read more about discounts in the [introduction](https://dev.wix.com/api/rest/wix-restaurants/catalogs/introduction).
   */
  interface Discount$1 extends DiscountValueOneOf, DiscountApplyToFilterOneOf {
      /** Discount amount. */
      amount?: Money$1;
      /** Discount percentage. */
      percentage?: string | null;
      /** IDs of the sections the discount applies to. */
      sectionIds?: SectionIds;
      /** IDs of the items the discount applies to. **Note:** The items must be of type `dish`. */
      itemIds?: ItemIds;
      /**
       * Discount ID.
       * @readonly
       */
      _id?: string | null;
      /** Discount name. */
      name?: string | null;
      /** Discount description. */
      description?: string | null;
      /** Whether the discount is active. Defaults to `true`. */
      active?: boolean | null;
      /** Discount type. */
      type?: DiscountType$1;
      /**
       * Discount condition.
       * All conditions must be met so that a customer can apply the discount.
       */
      condition?: DiscountCondition;
  }
  /** @oneof */
  interface DiscountValueOneOf {
      /** Discount amount. */
      amount?: Money$1;
      /** Discount percentage. */
      percentage?: string | null;
  }
  /** @oneof */
  interface DiscountApplyToFilterOneOf {
      /** IDs of the sections the discount applies to. */
      sectionIds?: SectionIds;
      /** IDs of the items the discount applies to. **Note:** The items must be of type `dish`. */
      itemIds?: ItemIds;
  }
  enum DiscountType$1 {
      UNSPECIFIED_TYPE = "UNSPECIFIED_TYPE",
      OFF_ITEM = "OFF_ITEM",
      OFF_ORDER = "OFF_ORDER"
  }
  /**
   * Money.
   * Default format to use. Sufficiently compliant with majority of standards: w3c, ISO 4217, ISO 20022, ISO 8583:2003.
   */
  interface Money$1 {
      /** Monetary amount in decimal string format. For example, `3.99`, `6`, and `10.5` are all accepted values. */
      value?: string;
      /**
       * Three-letter currency code in [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format.
       * @readonly
       */
      currency?: string;
      /**
       * Monetary amount. This is the number that will be displayed.
       * @internal
       * @readonly
       */
      formattedValue?: string | null;
  }
  interface SectionIds {
      values?: string[];
  }
  interface ItemIds {
      values?: string[];
  }
  interface DiscountCondition {
      /** Which fulfillment types the discount applies to. */
      fulfillmentTypes?: FulfillmentType$1[];
      /** Which ordering platforms the discount applies to. */
      platforms?: DiscountPlatform[];
      /** List of times when the discount is available. */
      availability?: Availability$3;
      /** Minimum order price for the discount. */
      minOrderPrice?: Money$1;
      /**
       * Coupon associated with the discount.
       * @readonly
       */
      coupon?: Coupon$1;
  }
  enum FulfillmentType$1 {
      UNSPECIFIED_FULFILLMENT_TYPE = "UNSPECIFIED_FULFILLMENT_TYPE",
      DELIVERY = "DELIVERY",
      PICKUP_OR_DINE_IN = "PICKUP_OR_DINE_IN"
  }
  enum DiscountPlatform {
      UNSPECIFIED_PLATFORM = "UNSPECIFIED_PLATFORM",
      SITE = "SITE",
      MOBILE_SITE = "MOBILE_SITE",
      CALL_CENTER = "CALL_CENTER"
  }
  interface Availability$3 {
      /**
       * Weekly recurring time periods when the entity is available.
       * Limited to 100 time periods.
       */
      periods?: TimePeriod$3[];
      /** Exceptions to the entity's regular availability. The entity can be available or not available during the special hour period. */
      specialHourPeriods?: SpecialHourPeriod$3[];
  }
  /** Weekly recurring time periods when the entity is available. */
  interface TimePeriod$3 {
      /** Day of the week the period starts on. */
      openDay?: DayOfWeek$3;
      /**
       * Time the period starts in 24-hour [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) extended format. Valid values are 00:00-24:00, where 24:00 represents
       * midnight at the end of the specified day.
       */
      openTime?: string;
      /** Day of the week the period ends on. */
      closeDay?: DayOfWeek$3;
      /**
       * Time the period ends in 24-hour [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) extended format. Valid values are 00:00-24:00, where 24:00 represents
       * midnight at the end of the specified day.
       * __Note:__ If `openDay` and `closeDay` specify the same day of the week `closeTime` must be later than `openTime`.
       */
      closeTime?: string;
  }
  enum DayOfWeek$3 {
      UNDEFINED = "UNDEFINED",
      SUN = "SUN",
      MON = "MON",
      TUE = "TUE",
      WED = "WED",
      THU = "THU",
      FRI = "FRI",
      SAT = "SAT"
  }
  /** Exception to the business's regular hours. The business can be open or closed during the exception. */
  interface SpecialHourPeriod$3 {
      /** Start date and time of the exception in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format and [Coordinated Universal Time (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time). */
      startDate?: string;
      /** End date and time of the exception in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format and [Coordinated Universal Time (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time). */
      endDate?: string;
      /** Whether the item is available during the exception. Defaults to `true`. */
      available?: boolean;
      /** Name of the special hour period. In the dashboard, the special hour period is called event. */
      eventName?: string | null;
  }
  interface Coupon$1 {
      /**
       * Whether the customer needs to enter the coupon code to receive the discount. Defaults to `true`.
       * @readonly
       */
      applied?: boolean | null;
      /**
       * Coupon code.
       * @readonly
       */
      code?: string | null;
  }
  interface GetDiscountRequest {
      /** ID of the discount to retrieve. */
      discountId: string;
      /** ID of the catalog the discount belongs to. */
      catalogId: string;
  }
  interface GetDiscountResponse {
      /** Retrieved discount. */
      discount?: Discount$1;
  }
  interface UpdateDiscountRequest {
      /** Discount to update. */
      discount?: Discount$1;
      /** ID of the catalog the discount belongs to. */
      catalogId: string;
  }
  interface UpdateDiscountResponse {
      /** Updated discount. */
      discount?: Discount$1;
  }
  interface CreateDiscountRequest {
      /** Discount to create. */
      discount?: Discount$1;
      /** ID of the catalog the discount belongs to. */
      catalogId: string;
  }
  interface CreateDiscountResponse {
      /** Created discount. */
      discount?: Discount$1;
  }
  interface ListDiscountsRequest {
      /**
       * Filed mask path.
       * @internal
       */
      fieldMask?: string[];
      /** Whether only active discounts are returned. Defaults to `true`. */
      active?: boolean | null;
      /** ID of the catalog the discounts belong to. */
      catalogId: string;
  }
  interface ListDiscountsResponse {
      /** Retrieved discounts. */
      discounts?: Discount$1[];
  }
  interface AddLoyaltyDiscount {
      locationId?: string | null;
  }
  interface Empty$1 {
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
  /**
   * Retrieves a discount.
   * @public
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.catalogId
   * @requiredField identifiers.discountId
   * @returns Retrieved discount.
   */
  function getDiscount(identifiers: GetDiscountIdentifiers): Promise<Discount$1>;
  interface GetDiscountIdentifiers {
      /** ID of the catalog the discount belongs to. */
      catalogId: string;
      /** ID of the discount to retrieve. */
      discountId: string;
  }
  /**
   * Updates a discount.
   * A discount can belong to a catalog, section, or dish. You can't create a discount that applies to a menu.
   * @public
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.catalogId
   * @requiredField identifiers.discountId
   * @adminMethod
   * @returns Updated discount.
   */
  function updateDiscount(identifiers: UpdateDiscountIdentifiers, options?: UpdateDiscountOptions): Promise<Discount$1>;
  interface UpdateDiscountIdentifiers {
      /** ID of the catalog the discount belongs to. */
      catalogId: string;
      /**
       * Discount ID.
       * @readonly
       */
      discountId?: string | null;
  }
  interface UpdateDiscountOptions {
      discount: {
          /** Discount amount. */
          amount?: Money$1;
          /** Discount percentage. */
          percentage?: string | null;
          /** IDs of the sections the discount applies to. */
          sectionIds?: SectionIds;
          /** IDs of the items the discount applies to. **Note:** The items must be of type `dish`. */
          itemIds?: ItemIds;
          /**
           * Discount ID.
           * @readonly
           */
          _id?: string | null;
          /** Discount name. */
          name?: string | null;
          /** Discount description. */
          description?: string | null;
          /** Whether the discount is active. Defaults to `true`. */
          active?: boolean | null;
          /** Discount type. */
          type?: DiscountType$1;
          /**
           * Discount condition.
           * All conditions must be met so that a customer can apply the discount.
           */
          condition?: DiscountCondition;
      };
  }
  /**
   * Creates a discount.
   * You can create discounts for catalogs, sections, or dishes. You can't create a discount that applies to a menu.
   * @param catalogId - ID of the catalog the discount belongs to.
   * @public
   * @documentationMaturity preview
   * @requiredField catalogId
   * @requiredField options
   * @requiredField options.discount
   * @requiredField options.discount.active
   * @requiredField options.discount.condition.fulfillmentTypes
   * @requiredField options.discount.condition.minOrderPrice
   * @requiredField options.discount.condition.platforms
   * @requiredField options.discount.name
   * @adminMethod
   * @returns Created discount.
   */
  function createDiscount(catalogId: string, options: CreateDiscountOptions): Promise<Discount$1>;
  interface CreateDiscountOptions {
      /** Discount to create. */
      discount?: Discount$1;
  }
  /**
   * Retrieves up to 1000 discounts.
   * @param catalogId - ID of the catalog the discounts belong to.
   * @public
   * @documentationMaturity preview
   * @requiredField catalogId
   */
  function listDiscounts(catalogId: string, options?: ListDiscountsOptions): Promise<ListDiscountsResponse>;
  interface ListDiscountsOptions {
      /**
       * Filed mask path.
       * @internal
       */
      fieldMask?: string[];
      /** Whether only active discounts are returned. Defaults to `true`. */
      active?: boolean | null;
  }
  
  type restaurantsCatalogsV3Discount_universal_d_DiscountValueOneOf = DiscountValueOneOf;
  type restaurantsCatalogsV3Discount_universal_d_DiscountApplyToFilterOneOf = DiscountApplyToFilterOneOf;
  type restaurantsCatalogsV3Discount_universal_d_SectionIds = SectionIds;
  type restaurantsCatalogsV3Discount_universal_d_ItemIds = ItemIds;
  type restaurantsCatalogsV3Discount_universal_d_DiscountCondition = DiscountCondition;
  type restaurantsCatalogsV3Discount_universal_d_DiscountPlatform = DiscountPlatform;
  const restaurantsCatalogsV3Discount_universal_d_DiscountPlatform: typeof DiscountPlatform;
  type restaurantsCatalogsV3Discount_universal_d_GetDiscountRequest = GetDiscountRequest;
  type restaurantsCatalogsV3Discount_universal_d_GetDiscountResponse = GetDiscountResponse;
  type restaurantsCatalogsV3Discount_universal_d_UpdateDiscountRequest = UpdateDiscountRequest;
  type restaurantsCatalogsV3Discount_universal_d_UpdateDiscountResponse = UpdateDiscountResponse;
  type restaurantsCatalogsV3Discount_universal_d_CreateDiscountRequest = CreateDiscountRequest;
  type restaurantsCatalogsV3Discount_universal_d_CreateDiscountResponse = CreateDiscountResponse;
  type restaurantsCatalogsV3Discount_universal_d_ListDiscountsRequest = ListDiscountsRequest;
  type restaurantsCatalogsV3Discount_universal_d_ListDiscountsResponse = ListDiscountsResponse;
  type restaurantsCatalogsV3Discount_universal_d_AddLoyaltyDiscount = AddLoyaltyDiscount;
  const restaurantsCatalogsV3Discount_universal_d_getDiscount: typeof getDiscount;
  type restaurantsCatalogsV3Discount_universal_d_GetDiscountIdentifiers = GetDiscountIdentifiers;
  const restaurantsCatalogsV3Discount_universal_d_updateDiscount: typeof updateDiscount;
  type restaurantsCatalogsV3Discount_universal_d_UpdateDiscountIdentifiers = UpdateDiscountIdentifiers;
  type restaurantsCatalogsV3Discount_universal_d_UpdateDiscountOptions = UpdateDiscountOptions;
  const restaurantsCatalogsV3Discount_universal_d_createDiscount: typeof createDiscount;
  type restaurantsCatalogsV3Discount_universal_d_CreateDiscountOptions = CreateDiscountOptions;
  const restaurantsCatalogsV3Discount_universal_d_listDiscounts: typeof listDiscounts;
  type restaurantsCatalogsV3Discount_universal_d_ListDiscountsOptions = ListDiscountsOptions;
  namespace restaurantsCatalogsV3Discount_universal_d {
    export {
      Discount$1 as Discount,
      restaurantsCatalogsV3Discount_universal_d_DiscountValueOneOf as DiscountValueOneOf,
      restaurantsCatalogsV3Discount_universal_d_DiscountApplyToFilterOneOf as DiscountApplyToFilterOneOf,
      DiscountType$1 as DiscountType,
      Money$1 as Money,
      restaurantsCatalogsV3Discount_universal_d_SectionIds as SectionIds,
      restaurantsCatalogsV3Discount_universal_d_ItemIds as ItemIds,
      restaurantsCatalogsV3Discount_universal_d_DiscountCondition as DiscountCondition,
      FulfillmentType$1 as FulfillmentType,
      restaurantsCatalogsV3Discount_universal_d_DiscountPlatform as DiscountPlatform,
      Availability$3 as Availability,
      TimePeriod$3 as TimePeriod,
      DayOfWeek$3 as DayOfWeek,
      SpecialHourPeriod$3 as SpecialHourPeriod,
      Coupon$1 as Coupon,
      restaurantsCatalogsV3Discount_universal_d_GetDiscountRequest as GetDiscountRequest,
      restaurantsCatalogsV3Discount_universal_d_GetDiscountResponse as GetDiscountResponse,
      restaurantsCatalogsV3Discount_universal_d_UpdateDiscountRequest as UpdateDiscountRequest,
      restaurantsCatalogsV3Discount_universal_d_UpdateDiscountResponse as UpdateDiscountResponse,
      restaurantsCatalogsV3Discount_universal_d_CreateDiscountRequest as CreateDiscountRequest,
      restaurantsCatalogsV3Discount_universal_d_CreateDiscountResponse as CreateDiscountResponse,
      restaurantsCatalogsV3Discount_universal_d_ListDiscountsRequest as ListDiscountsRequest,
      restaurantsCatalogsV3Discount_universal_d_ListDiscountsResponse as ListDiscountsResponse,
      restaurantsCatalogsV3Discount_universal_d_AddLoyaltyDiscount as AddLoyaltyDiscount,
      Empty$1 as Empty,
      DomainEvent$1 as DomainEvent,
      DomainEventBodyOneOf$1 as DomainEventBodyOneOf,
      EntityCreatedEvent$1 as EntityCreatedEvent,
      EntityUpdatedEvent$1 as EntityUpdatedEvent,
      EntityDeletedEvent$1 as EntityDeletedEvent,
      ActionEvent$1 as ActionEvent,
      restaurantsCatalogsV3Discount_universal_d_getDiscount as getDiscount,
      restaurantsCatalogsV3Discount_universal_d_GetDiscountIdentifiers as GetDiscountIdentifiers,
      restaurantsCatalogsV3Discount_universal_d_updateDiscount as updateDiscount,
      restaurantsCatalogsV3Discount_universal_d_UpdateDiscountIdentifiers as UpdateDiscountIdentifiers,
      restaurantsCatalogsV3Discount_universal_d_UpdateDiscountOptions as UpdateDiscountOptions,
      restaurantsCatalogsV3Discount_universal_d_createDiscount as createDiscount,
      restaurantsCatalogsV3Discount_universal_d_CreateDiscountOptions as CreateDiscountOptions,
      restaurantsCatalogsV3Discount_universal_d_listDiscounts as listDiscounts,
      restaurantsCatalogsV3Discount_universal_d_ListDiscountsOptions as ListDiscountsOptions,
    };
  }
  
  /**
   * FulfillmentMethod is the main entity of FulfillmentMethods that can be used to enable restaurant
   * to configure the supported fulfillment methods.
   */
  interface FulfillmentMethod extends FulfillmentMethodMethodInfoOneOf {
      /** Delivery info */
      deliveryInfo?: DeliveryInfo;
      /** Pickup info */
      pickupInfo?: PickupInfo$1;
      /** DineIn info */
      dineInInfo?: DineInInfo;
      /** Fulfillment Id */
      _id?: string | null;
      /** Fulfillment type. */
      type?: FulfillmentMethodType;
      /** The restaurantLocation id this fulfillment method is related to */
      restaurantLocationId?: string | null;
      /** Whether the fulfillment method is active or not - Defaults to `false` */
      enabled?: boolean;
      /** Time periods when the entity is available. */
      availability?: Availability$2;
      /**
       * Current state of this fulfillment method.
       * Each time the fulfillment method is modified, its `revision` changes.
       */
      revision?: string | null;
  }
  /** @oneof */
  interface FulfillmentMethodMethodInfoOneOf {
      /** Delivery info */
      deliveryInfo?: DeliveryInfo;
      /** Pickup info */
      pickupInfo?: PickupInfo$1;
      /** DineIn info */
      dineInInfo?: DineInInfo;
  }
  enum FulfillmentMethodType {
      /** Missing type due to an error */
      UNSPECIFIED_FULFILLMENT_TYPE = "UNSPECIFIED_FULFILLMENT_TYPE",
      /** Pickup */
      PICKUP = "PICKUP",
      /** Delivery */
      DELIVERY = "DELIVERY",
      /** DineIn */
      DINE_IN = "DINE_IN"
  }
  interface Availability$2 {
      /** Weekly recurring time periods when the entity is available. Limited to 100 time periods. */
      periods?: TimePeriod$2[];
      /** Exceptions to the entity's regular availability. The entity can be available or not available during the special hour period. */
      specialHourPeriods?: SpecialHourPeriod$2[];
  }
  /** Weekly recurring time periods when the entity is available. */
  interface TimePeriod$2 {
      /** Day of the week the period starts on. */
      openDay?: DayOfWeek$2;
      /**
       * Time the period starts in 24-hour [ISO 8601](https:en.wikipedia.orgwikiISO_8601) extended format. Valid values are 00:00-24:00, where 24:00 represents
       * midnight at the end of the specified day.
       */
      openTime?: string;
      /** Day of the week the period ends on. */
      closeDay?: DayOfWeek$2;
      /**
       * Time the period ends in 24-hour [ISO 8601](https:en.wikipedia.orgwikiISO_8601) extended format. Valid values are 00:00-24:00, where 24:00 represents
       * midnight at the end of the specified day.
       * __Note:__ If `openDay` and `closeDay` specify the same day of the week `closeTime` must be later than `openTime`.
       */
      closeTime?: string;
  }
  enum DayOfWeek$2 {
      MON = "MON",
      TUE = "TUE",
      WED = "WED",
      THU = "THU",
      FRI = "FRI",
      SAT = "SAT",
      SUN = "SUN"
  }
  /** Exception to the business's regular hours. The business can be open or closed during the exception. */
  interface SpecialHourPeriod$2 {
      /** Start date and time of the exception in [ISO 8601](https:en.wikipedia.orgwikiISO_8601) format and [Coordinated Universal Time (UTC)](https:en.wikipedia.orgwikiCoordinated_Universal_Time). */
      startDate?: string;
      /** End date and time of the exception in [ISO 8601](https:en.wikipedia.orgwikiISO_8601) format and [Coordinated Universal Time (UTC)](https:en.wikipedia.orgwikiCoordinated_Universal_Time). */
      endDate?: string;
      /** Whether the item is available during the exception. Defaults to `false`. */
      available?: boolean;
      /** Name of the special hour period. In the Business Manager the special hour period is called event. */
      eventName?: string | null;
  }
  interface DeliveryInfo extends DeliveryInfoProviderOneOf {
      /** Delivery through the restaurant. */
      restaurant?: Restaurant$1;
      /** Delivery through an external provider. */
      externalProvider?: ExternalProvider$1;
      /** Delivery name */
      name?: string | null;
      /** Estimated delivery time */
      deliveryTime?: number | null;
      /** fulfillment method fee */
      fee?: string | null;
      /** Delivery time display unit */
      deliveryTimeDisplayUnit?: TimeDisplayUnit;
      /** The minimum amount of the order for using this fulfillment method. */
      minimumOrderAmount?: string | null;
  }
  /** @oneof */
  interface DeliveryInfoProviderOneOf {
      /** Delivery through the restaurant. */
      restaurant?: Restaurant$1;
      /** Delivery through an external provider. */
      externalProvider?: ExternalProvider$1;
  }
  interface Restaurant$1 {
      /** Delivery range details */
      deliveryRange?: DeliveryRange;
  }
  interface DeliveryRange extends DeliveryRangeValueOneOf {
      /** radius of the delivery area from the location of the branch. */
      radiusDetails?: RadiusDetails;
      /** radius of the delivery area */
      postalCodeDetails?: PostalCodeDetails;
      /** Custom delivery range */
      customDetails?: CustomDetails;
      /** Area shape type */
      type?: Type$2;
  }
  /** @oneof */
  interface DeliveryRangeValueOneOf {
      /** radius of the delivery area from the location of the branch. */
      radiusDetails?: RadiusDetails;
      /** radius of the delivery area */
      postalCodeDetails?: PostalCodeDetails;
      /** Custom delivery range */
      customDetails?: CustomDetails;
  }
  enum Type$2 {
      UNDEFINED = "UNDEFINED",
      RADIUS = "RADIUS",
      POSTAL_CODE = "POSTAL_CODE",
      CUSTOM = "CUSTOM"
  }
  interface RadiusDetails {
      /** radius of the delivery area from the location of the branch. */
      radius?: string | null;
      /** Geocodes of the delivery area */
      geocode?: AddressLocation$1;
  }
  interface AddressLocation$1 {
      /** Address latitude. */
      latitude?: number | null;
      /** Address longitude. */
      longitude?: number | null;
  }
  interface PostalCodeDetails {
      /** address of the delivery area */
      postalCode?: string | null;
      /**
       * Country code in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
       * @readonly
       */
      countryCode?: string | null;
  }
  interface CustomDetails {
      /** Geocodes of the delivery area */
      geocodes?: AddressLocation$1[];
  }
  interface ExternalProvider$1 {
      /** Restaurant configuration id */
      configurationId?: string;
      /** Fee paid by the restaurant to the external delivery provider. */
      commission?: string | null;
      /** Pickup instructions of the order from the restaurant for the delivery provider */
      pickupInstructions?: string | null;
  }
  enum TimeDisplayUnit {
      UNDEFINED = "UNDEFINED",
      MINUTES = "MINUTES",
      HOURS = "HOURS",
      DAYS = "DAYS"
  }
  interface PickupInfo$1 {
      /** Curbside info */
      curbsideInfo?: CurbsideInfo;
      /** Estimated preparation time */
      prepTime?: number | null;
      /** The minimum amount of the order for using this fulfillment method. */
      minimumOrderAmount?: string | null;
  }
  interface CurbsideInfo {
      /** Whether curbside method is active or not - Defaults to `false` */
      enabled?: boolean;
      /** Curbside pickup instructions. Customers will see these instructions when placing their order. */
      instructions?: string | null;
      /** Additional informational field label. Customers will be required to fill in this field during checkout. */
      additionalInfoLabel?: string | null;
      /** Is the additional information field required */
      additionalInfoLabelRequired?: boolean | null;
  }
  interface DineInInfo {
      /**
       * Estimated preparation time
       * @readonly
       */
      prepTime?: number | null;
      /**
       * DineIn instructions. Customers will see these instructions during checkout.
       * Example: Add your table number to place your order. We'll bring the order to you once ready.
       */
      instructions?: string | null;
      /**
       * Informational field label. Customers will be asked to fill this out while placing their order.
       * Example: Table Number
       */
      additionalInfoLabel?: string | null;
      /**
       * The minimum amount of the order for using this fulfillment method.
       * @readonly
       */
      minimumOrderAmount?: string | null;
  }
  interface CreateFulfillmentMethodRequest {
      /** FulfillmentMethod to be created */
      fulfillmentMethod: FulfillmentMethod;
  }
  interface CreateFulfillmentMethodResponse {
      /** The created FulfillmentMethod */
      fulfillmentMethod?: FulfillmentMethod;
  }
  interface GetFulfillmentMethodRequest {
      /** Id of the FulfillmentMethod to retrieve */
      fulfillmentMethodId: string;
  }
  interface GetFulfillmentMethodResponse {
      /** The retrieved FulfillmentMethod */
      fulfillmentMethod?: FulfillmentMethod;
  }
  interface UpdateFulfillmentMethodRequest {
      /** FulfillmentMethod to be updated, may be partial */
      fulfillmentMethod: FulfillmentMethod;
      /**
       * Explicit list of fields to update
       * @internal
       */
      mask?: string[];
  }
  interface UpdateFulfillmentMethodResponse {
      /** The updated FulfillmentMethod */
      fulfillmentMethod?: FulfillmentMethod;
  }
  interface DeleteFulfillmentMethodRequest {
      /** Id of the FulfillmentMethod to delete */
      fulfillmentMethodId: string;
  }
  interface DeleteFulfillmentMethodResponse {
  }
  interface ListFulfillmentMethodsRequest {
      /** restaurant location ids */
      restaurantLocationIds?: string[] | null;
  }
  interface ListFulfillmentMethodsResponse {
      /** The retrieved fulfillment methods */
      fulfillmentMethods?: FulfillmentMethod[];
  }
  interface FindBestDeliveryAreaRequest {
      /** restaurant location id */
      restaurantLocationId?: string | null;
      /** order geocodes of the delivery area */
      geocode?: AddressLocation$1;
      /** order amount */
      orderAmount?: string | null;
      /** order delivery time */
      deliveryTime?: Date;
      /** category by which best delivery area is selected */
      bestDeliveryByCategory?: BestDeliveryByCategory;
  }
  enum BestDeliveryByCategory {
      /** minimum delivery fee */
      DELIVERY_FEE = "DELIVERY_FEE"
  }
  interface FindBestDeliveryAreaResponse {
      /** delivery info */
      deliveryInfo?: DeliveryInfo;
  }
  /**
   * Creates a new FulfillmentMethod
   * @param fulfillmentMethod - FulfillmentMethod to be created
   * @internal
   * @documentationMaturity preview
   * @requiredField fulfillmentMethod
   * @requiredField fulfillmentMethod.restaurantLocationId
   * @adminMethod
   */
  function createFulfillmentMethod(fulfillmentMethod: FulfillmentMethod): Promise<CreateFulfillmentMethodResponse>;
  /**
   * Get a FulfillmentMethod by id
   * @param fulfillmentMethodId - Id of the FulfillmentMethod to retrieve
   * @internal
   * @documentationMaturity preview
   * @requiredField fulfillmentMethodId
   */
  function getFulfillmentMethod(fulfillmentMethodId: string): Promise<GetFulfillmentMethodResponse>;
  /**
   * Update a FulfillmentMethod, supports partial update
   * @param _id - Fulfillment Id
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField fulfillmentMethod
   * @adminMethod
   */
  function updateFulfillmentMethod(_id: string | null, fulfillmentMethod: UpdateFulfillmentMethod, options?: UpdateFulfillmentMethodOptions): Promise<UpdateFulfillmentMethodResponse>;
  interface UpdateFulfillmentMethod {
      /** Delivery info */
      deliveryInfo?: DeliveryInfo;
      /** Pickup info */
      pickupInfo?: PickupInfo$1;
      /** DineIn info */
      dineInInfo?: DineInInfo;
      /** Fulfillment Id */
      _id?: string | null;
      /** Fulfillment type. */
      type?: FulfillmentMethodType;
      /** The restaurantLocation id this fulfillment method is related to */
      restaurantLocationId?: string | null;
      /** Whether the fulfillment method is active or not - Defaults to `false` */
      enabled?: boolean;
      /** Time periods when the entity is available. */
      availability?: Availability$2;
      /**
       * Current state of this fulfillment method.
       * Each time the fulfillment method is modified, its `revision` changes.
       */
      revision?: string | null;
  }
  interface UpdateFulfillmentMethodOptions {
      /**
       * Explicit list of fields to update
       * @internal
       */
      mask?: string[];
  }
  /**
   * Delete a FulfillmentMethod
   * @param fulfillmentMethodId - Id of the FulfillmentMethod to delete
   * @internal
   * @documentationMaturity preview
   * @requiredField fulfillmentMethodId
   * @adminMethod
   */
  function deleteFulfillmentMethod(fulfillmentMethodId: string): Promise<void>;
  /**
   * List Fulfillment Methods
   * @internal
   * @documentationMaturity preview
   */
  function listFulfillmentMethods(options?: ListFulfillmentMethodsOptions): Promise<ListFulfillmentMethodsResponse>;
  interface ListFulfillmentMethodsOptions {
      /** restaurant location ids */
      restaurantLocationIds?: string[] | null;
  }
  /**
   * Find the best delivery area for a geocoded order address
   * @internal
   * @documentationMaturity preview
   */
  function findBestDeliveryArea(options?: FindBestDeliveryAreaOptions): Promise<FindBestDeliveryAreaResponse>;
  interface FindBestDeliveryAreaOptions {
      /** restaurant location id */
      restaurantLocationId?: string | null;
      /** order geocodes of the delivery area */
      geocode?: AddressLocation$1;
      /** order amount */
      orderAmount?: string | null;
      /** order delivery time */
      deliveryTime?: Date;
      /** category by which best delivery area is selected */
      bestDeliveryByCategory?: BestDeliveryByCategory;
  }
  
  type restaurantsFulfillmentsV3FulfillmentMethod_universal_d_FulfillmentMethod = FulfillmentMethod;
  type restaurantsFulfillmentsV3FulfillmentMethod_universal_d_FulfillmentMethodMethodInfoOneOf = FulfillmentMethodMethodInfoOneOf;
  type restaurantsFulfillmentsV3FulfillmentMethod_universal_d_FulfillmentMethodType = FulfillmentMethodType;
  const restaurantsFulfillmentsV3FulfillmentMethod_universal_d_FulfillmentMethodType: typeof FulfillmentMethodType;
  type restaurantsFulfillmentsV3FulfillmentMethod_universal_d_DeliveryInfo = DeliveryInfo;
  type restaurantsFulfillmentsV3FulfillmentMethod_universal_d_DeliveryInfoProviderOneOf = DeliveryInfoProviderOneOf;
  type restaurantsFulfillmentsV3FulfillmentMethod_universal_d_DeliveryRange = DeliveryRange;
  type restaurantsFulfillmentsV3FulfillmentMethod_universal_d_DeliveryRangeValueOneOf = DeliveryRangeValueOneOf;
  type restaurantsFulfillmentsV3FulfillmentMethod_universal_d_RadiusDetails = RadiusDetails;
  type restaurantsFulfillmentsV3FulfillmentMethod_universal_d_PostalCodeDetails = PostalCodeDetails;
  type restaurantsFulfillmentsV3FulfillmentMethod_universal_d_CustomDetails = CustomDetails;
  type restaurantsFulfillmentsV3FulfillmentMethod_universal_d_TimeDisplayUnit = TimeDisplayUnit;
  const restaurantsFulfillmentsV3FulfillmentMethod_universal_d_TimeDisplayUnit: typeof TimeDisplayUnit;
  type restaurantsFulfillmentsV3FulfillmentMethod_universal_d_CurbsideInfo = CurbsideInfo;
  type restaurantsFulfillmentsV3FulfillmentMethod_universal_d_DineInInfo = DineInInfo;
  type restaurantsFulfillmentsV3FulfillmentMethod_universal_d_CreateFulfillmentMethodRequest = CreateFulfillmentMethodRequest;
  type restaurantsFulfillmentsV3FulfillmentMethod_universal_d_CreateFulfillmentMethodResponse = CreateFulfillmentMethodResponse;
  type restaurantsFulfillmentsV3FulfillmentMethod_universal_d_GetFulfillmentMethodRequest = GetFulfillmentMethodRequest;
  type restaurantsFulfillmentsV3FulfillmentMethod_universal_d_GetFulfillmentMethodResponse = GetFulfillmentMethodResponse;
  type restaurantsFulfillmentsV3FulfillmentMethod_universal_d_UpdateFulfillmentMethodRequest = UpdateFulfillmentMethodRequest;
  type restaurantsFulfillmentsV3FulfillmentMethod_universal_d_UpdateFulfillmentMethodResponse = UpdateFulfillmentMethodResponse;
  type restaurantsFulfillmentsV3FulfillmentMethod_universal_d_DeleteFulfillmentMethodRequest = DeleteFulfillmentMethodRequest;
  type restaurantsFulfillmentsV3FulfillmentMethod_universal_d_DeleteFulfillmentMethodResponse = DeleteFulfillmentMethodResponse;
  type restaurantsFulfillmentsV3FulfillmentMethod_universal_d_ListFulfillmentMethodsRequest = ListFulfillmentMethodsRequest;
  type restaurantsFulfillmentsV3FulfillmentMethod_universal_d_ListFulfillmentMethodsResponse = ListFulfillmentMethodsResponse;
  type restaurantsFulfillmentsV3FulfillmentMethod_universal_d_FindBestDeliveryAreaRequest = FindBestDeliveryAreaRequest;
  type restaurantsFulfillmentsV3FulfillmentMethod_universal_d_BestDeliveryByCategory = BestDeliveryByCategory;
  const restaurantsFulfillmentsV3FulfillmentMethod_universal_d_BestDeliveryByCategory: typeof BestDeliveryByCategory;
  type restaurantsFulfillmentsV3FulfillmentMethod_universal_d_FindBestDeliveryAreaResponse = FindBestDeliveryAreaResponse;
  const restaurantsFulfillmentsV3FulfillmentMethod_universal_d_createFulfillmentMethod: typeof createFulfillmentMethod;
  const restaurantsFulfillmentsV3FulfillmentMethod_universal_d_getFulfillmentMethod: typeof getFulfillmentMethod;
  const restaurantsFulfillmentsV3FulfillmentMethod_universal_d_updateFulfillmentMethod: typeof updateFulfillmentMethod;
  type restaurantsFulfillmentsV3FulfillmentMethod_universal_d_UpdateFulfillmentMethod = UpdateFulfillmentMethod;
  type restaurantsFulfillmentsV3FulfillmentMethod_universal_d_UpdateFulfillmentMethodOptions = UpdateFulfillmentMethodOptions;
  const restaurantsFulfillmentsV3FulfillmentMethod_universal_d_deleteFulfillmentMethod: typeof deleteFulfillmentMethod;
  const restaurantsFulfillmentsV3FulfillmentMethod_universal_d_listFulfillmentMethods: typeof listFulfillmentMethods;
  type restaurantsFulfillmentsV3FulfillmentMethod_universal_d_ListFulfillmentMethodsOptions = ListFulfillmentMethodsOptions;
  const restaurantsFulfillmentsV3FulfillmentMethod_universal_d_findBestDeliveryArea: typeof findBestDeliveryArea;
  type restaurantsFulfillmentsV3FulfillmentMethod_universal_d_FindBestDeliveryAreaOptions = FindBestDeliveryAreaOptions;
  namespace restaurantsFulfillmentsV3FulfillmentMethod_universal_d {
    export {
      restaurantsFulfillmentsV3FulfillmentMethod_universal_d_FulfillmentMethod as FulfillmentMethod,
      restaurantsFulfillmentsV3FulfillmentMethod_universal_d_FulfillmentMethodMethodInfoOneOf as FulfillmentMethodMethodInfoOneOf,
      restaurantsFulfillmentsV3FulfillmentMethod_universal_d_FulfillmentMethodType as FulfillmentMethodType,
      Availability$2 as Availability,
      TimePeriod$2 as TimePeriod,
      DayOfWeek$2 as DayOfWeek,
      SpecialHourPeriod$2 as SpecialHourPeriod,
      restaurantsFulfillmentsV3FulfillmentMethod_universal_d_DeliveryInfo as DeliveryInfo,
      restaurantsFulfillmentsV3FulfillmentMethod_universal_d_DeliveryInfoProviderOneOf as DeliveryInfoProviderOneOf,
      Restaurant$1 as Restaurant,
      restaurantsFulfillmentsV3FulfillmentMethod_universal_d_DeliveryRange as DeliveryRange,
      restaurantsFulfillmentsV3FulfillmentMethod_universal_d_DeliveryRangeValueOneOf as DeliveryRangeValueOneOf,
      Type$2 as Type,
      restaurantsFulfillmentsV3FulfillmentMethod_universal_d_RadiusDetails as RadiusDetails,
      AddressLocation$1 as AddressLocation,
      restaurantsFulfillmentsV3FulfillmentMethod_universal_d_PostalCodeDetails as PostalCodeDetails,
      restaurantsFulfillmentsV3FulfillmentMethod_universal_d_CustomDetails as CustomDetails,
      ExternalProvider$1 as ExternalProvider,
      restaurantsFulfillmentsV3FulfillmentMethod_universal_d_TimeDisplayUnit as TimeDisplayUnit,
      PickupInfo$1 as PickupInfo,
      restaurantsFulfillmentsV3FulfillmentMethod_universal_d_CurbsideInfo as CurbsideInfo,
      restaurantsFulfillmentsV3FulfillmentMethod_universal_d_DineInInfo as DineInInfo,
      restaurantsFulfillmentsV3FulfillmentMethod_universal_d_CreateFulfillmentMethodRequest as CreateFulfillmentMethodRequest,
      restaurantsFulfillmentsV3FulfillmentMethod_universal_d_CreateFulfillmentMethodResponse as CreateFulfillmentMethodResponse,
      restaurantsFulfillmentsV3FulfillmentMethod_universal_d_GetFulfillmentMethodRequest as GetFulfillmentMethodRequest,
      restaurantsFulfillmentsV3FulfillmentMethod_universal_d_GetFulfillmentMethodResponse as GetFulfillmentMethodResponse,
      restaurantsFulfillmentsV3FulfillmentMethod_universal_d_UpdateFulfillmentMethodRequest as UpdateFulfillmentMethodRequest,
      restaurantsFulfillmentsV3FulfillmentMethod_universal_d_UpdateFulfillmentMethodResponse as UpdateFulfillmentMethodResponse,
      restaurantsFulfillmentsV3FulfillmentMethod_universal_d_DeleteFulfillmentMethodRequest as DeleteFulfillmentMethodRequest,
      restaurantsFulfillmentsV3FulfillmentMethod_universal_d_DeleteFulfillmentMethodResponse as DeleteFulfillmentMethodResponse,
      restaurantsFulfillmentsV3FulfillmentMethod_universal_d_ListFulfillmentMethodsRequest as ListFulfillmentMethodsRequest,
      restaurantsFulfillmentsV3FulfillmentMethod_universal_d_ListFulfillmentMethodsResponse as ListFulfillmentMethodsResponse,
      restaurantsFulfillmentsV3FulfillmentMethod_universal_d_FindBestDeliveryAreaRequest as FindBestDeliveryAreaRequest,
      restaurantsFulfillmentsV3FulfillmentMethod_universal_d_BestDeliveryByCategory as BestDeliveryByCategory,
      restaurantsFulfillmentsV3FulfillmentMethod_universal_d_FindBestDeliveryAreaResponse as FindBestDeliveryAreaResponse,
      restaurantsFulfillmentsV3FulfillmentMethod_universal_d_createFulfillmentMethod as createFulfillmentMethod,
      restaurantsFulfillmentsV3FulfillmentMethod_universal_d_getFulfillmentMethod as getFulfillmentMethod,
      restaurantsFulfillmentsV3FulfillmentMethod_universal_d_updateFulfillmentMethod as updateFulfillmentMethod,
      restaurantsFulfillmentsV3FulfillmentMethod_universal_d_UpdateFulfillmentMethod as UpdateFulfillmentMethod,
      restaurantsFulfillmentsV3FulfillmentMethod_universal_d_UpdateFulfillmentMethodOptions as UpdateFulfillmentMethodOptions,
      restaurantsFulfillmentsV3FulfillmentMethod_universal_d_deleteFulfillmentMethod as deleteFulfillmentMethod,
      restaurantsFulfillmentsV3FulfillmentMethod_universal_d_listFulfillmentMethods as listFulfillmentMethods,
      restaurantsFulfillmentsV3FulfillmentMethod_universal_d_ListFulfillmentMethodsOptions as ListFulfillmentMethodsOptions,
      restaurantsFulfillmentsV3FulfillmentMethod_universal_d_findBestDeliveryArea as findBestDeliveryArea,
      restaurantsFulfillmentsV3FulfillmentMethod_universal_d_FindBestDeliveryAreaOptions as FindBestDeliveryAreaOptions,
    };
  }
  
  /** OrderSettings is the main entity of OrderSettings service */
  interface OrderSettings {
      /** Order Settings id */
      _id?: string | null;
      /** Restaurant location id */
      restaurantLocationId?: string | null;
      /** Is Order settings enabled - customers can order through the system */
      enabled?: boolean | null;
      /**
       * should we send a confirmation email to the UOU on new order. default true
       * @internal
       */
      sendOrderConfirmationEmail?: boolean | null;
      /** if UOU need to provide a valid google maps address */
      approximateAddresses?: ApproximateAddresses;
      /** Local regulations may require you to add a policy document to your site. */
      policies?: Policies;
      tips?: Tips;
      futureOrders?: FutureOrdersSettings;
      /** Represents only exceptions of when the user wants to turn off the online ordering for a period of time */
      availability?: Availability$1;
      revision?: string | null;
      /** Restaurant charge rounding strategy */
      chargeRoundingStrategy?: ChargeRoundingStrategy;
  }
  enum ApproximateAddresses {
      EMPTY = "EMPTY",
      BLOCK = "BLOCK",
      ALLOW = "ALLOW"
  }
  /** Local regulations may require you to add a policy document to your site. */
  interface Policies {
      /** Privacy policy */
      privacyPolicy?: Policy;
      /** Terms and Conditions */
      termsAndConditions?: Policy;
      /** Is the Policies feature enabled, default value false */
      enabled?: boolean;
      /** Is the checkbox of the policy agreement marked by default */
      checkedByDefault?: boolean | null;
  }
  interface Policy {
      /** Default Policy type */
      defaultType?: Type$1;
      text?: string | null;
      url?: string | null;
  }
  enum Type$1 {
      /** Add a page to your site and put your policy document there. You can link to it from here. */
      URL = "URL",
      /** The policy will be displayed as plain text in a popup. */
      TEXT = "TEXT"
  }
  /** Customers can leave a tip when placing an order. */
  interface Tips {
      /** Allow customers to leave a custom tips, default `false` */
      allowCustom?: boolean | null;
      /** tip type to display */
      displayType?: TipsType;
      /** Set different tipping suggestion options with exact amounts, for your customers to choose from */
      suggestedAmounts?: TippingRate[];
      /** Set different tipping rate options with percentage values, for your customers to choose from */
      suggestedPercentages?: TippingRate[];
      /** Is the Tips feature enabled, default value false */
      enabled?: boolean;
  }
  enum TipsType {
      /** Tip with exact amount ($) */
      AMOUNT = "AMOUNT",
      /** Tip in percentage */
      PERCENTAGE = "PERCENTAGE"
  }
  interface TippingRate {
      /** Can be exact amount or percentage */
      value?: string;
      /** Is default option */
      default?: boolean;
  }
  interface FutureOrdersSettings {
      /** Is Future Orders enabled */
      enabled?: boolean | null;
      /** latest time in advance in minutes that customers can place an order */
      latestOrderBy?: number | null;
      /** earliest time in advance in minutes that customers can place an order */
      earliestOrderBy?: number | null;
      /**
       * How much time before order delivery to show it in the list, controlled from the advanced options
       * @internal
       */
      displayOrderInAdvanceTime?: number | null;
      /** Allow asap orders or not. If false, only future orders are allowed */
      enableAsapOrders?: boolean | null;
  }
  interface Availability$1 {
      /** Weekly recurring time periods when the entity is available. Limited to 100 time periods. */
      periods?: TimePeriod$1[];
      /** Exceptions to the entity's regular availability. The entity can be available or not available during the special hour period. */
      specialHourPeriods?: SpecialHourPeriod$1[];
  }
  /** Weekly recurring time periods when the entity is available. */
  interface TimePeriod$1 {
      /** Day of the week the period starts on. */
      openDay?: DayOfWeek$1;
      /**
       * Time the period starts in 24-hour [ISO 8601](https:en.wikipedia.orgwikiISO_8601) extended format. Valid values are 00:00-24:00, where 24:00 represents
       * midnight at the end of the specified day.
       */
      openTime?: string;
      /** Day of the week the period ends on. */
      closeDay?: DayOfWeek$1;
      /**
       * Time the period ends in 24-hour [ISO 8601](https:en.wikipedia.orgwikiISO_8601) extended format. Valid values are 00:00-24:00, where 24:00 represents
       * midnight at the end of the specified day.
       * __Note:__ If `openDay` and `closeDay` specify the same day of the week `closeTime` must be later than `openTime`.
       */
      closeTime?: string;
  }
  enum DayOfWeek$1 {
      MON = "MON",
      TUE = "TUE",
      WED = "WED",
      THU = "THU",
      FRI = "FRI",
      SAT = "SAT",
      SUN = "SUN"
  }
  /** Exception to the business's regular hours. The business can be open or closed during the exception. */
  interface SpecialHourPeriod$1 {
      /** Start date and time of the exception in [ISO 8601](https:en.wikipedia.orgwikiISO_8601) format and [Coordinated Universal Time (UTC)](https:en.wikipedia.orgwikiCoordinated_Universal_Time). */
      startDate?: string;
      /** End date and time of the exception in [ISO 8601](https:en.wikipedia.orgwikiISO_8601) format and [Coordinated Universal Time (UTC)](https:en.wikipedia.orgwikiCoordinated_Universal_Time). */
      endDate?: string;
      /** Whether the item is available during the exception. Defaults to `false`. */
      available?: boolean;
      /** Name of the special hour period. In the Business Manager the special hour period is called event. */
      eventName?: string | null;
  }
  enum ChargeRoundingStrategy {
      UNDEFINED = "UNDEFINED",
      /** https://en.wikipedia.org/wiki/Rounding#Round_half_away_from_zero */
      HALF_AWAY_FROM_ZERO = "HALF_AWAY_FROM_ZERO",
      /** https://en.wikipedia.org/wiki/Rounding#Round_half_to_even */
      HALF_EVEN = "HALF_EVEN"
  }
  interface GetOrderSettingsRequest {
      /** Id of the OrderSettings to retrieve */
      orderSettingsId: string;
  }
  interface GetOrderSettingsResponse {
      /** The retrieved OrderSettings */
      orderSettings?: OrderSettings;
  }
  interface UpdateOrderSettingsRequest {
      /** OrderSettings to be updated, may be partial */
      orderSettings: OrderSettings;
      /**
       * Explicit list of fields to update
       * @internal
       */
      mask?: string[];
  }
  interface UpdateOrderSettingsResponse {
      /** The updated OrderSettings */
      orderSettings?: OrderSettings;
  }
  interface ListOrderSettingsRequest {
      /** Ids of the restaurant locations for the OrderSettings to retrieve */
      restaurantLocationIds?: string[];
  }
  interface ListOrderSettingsResponse {
      /** The retrieved order settings */
      orderSettings?: OrderSettings[];
  }
  /**
   * Get a OrderSettings by id
   * @param orderSettingsId - Id of the OrderSettings to retrieve
   * @internal
   * @documentationMaturity preview
   * @requiredField orderSettingsId
   */
  function getOrderSettings(orderSettingsId: string): Promise<GetOrderSettingsResponse>;
  /**
   * Update a OrderSettings, supports partial update
   * @param _id - Order Settings id
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField orderSettings
   * @requiredField orderSettings.revision
   * @adminMethod
   */
  function updateOrderSettings(_id: string | null, orderSettings: UpdateOrderSettings, options?: UpdateOrderSettingsOptions): Promise<UpdateOrderSettingsResponse>;
  interface UpdateOrderSettings {
      /** Order Settings id */
      _id?: string | null;
      /** Restaurant location id */
      restaurantLocationId?: string | null;
      /** Is Order settings enabled - customers can order through the system */
      enabled?: boolean | null;
      /**
       * should we send a confirmation email to the UOU on new order. default true
       * @internal
       */
      sendOrderConfirmationEmail?: boolean | null;
      /** if UOU need to provide a valid google maps address */
      approximateAddresses?: ApproximateAddresses;
      /** Local regulations may require you to add a policy document to your site. */
      policies?: Policies;
      tips?: Tips;
      futureOrders?: FutureOrdersSettings;
      /** Represents only exceptions of when the user wants to turn off the online ordering for a period of time */
      availability?: Availability$1;
      revision?: string | null;
      /** Restaurant charge rounding strategy */
      chargeRoundingStrategy?: ChargeRoundingStrategy;
  }
  interface UpdateOrderSettingsOptions {
      /**
       * Explicit list of fields to update
       * @internal
       */
      mask?: string[];
  }
  /**
   * List Order settings
   * @internal
   * @documentationMaturity preview
   */
  function listOrderSettings(options?: ListOrderSettingsOptions): Promise<ListOrderSettingsResponse>;
  interface ListOrderSettingsOptions {
      /** Ids of the restaurant locations for the OrderSettings to retrieve */
      restaurantLocationIds?: string[];
  }
  
  type restaurantsOrdersettingsV3OrderSettings_universal_d_OrderSettings = OrderSettings;
  type restaurantsOrdersettingsV3OrderSettings_universal_d_ApproximateAddresses = ApproximateAddresses;
  const restaurantsOrdersettingsV3OrderSettings_universal_d_ApproximateAddresses: typeof ApproximateAddresses;
  type restaurantsOrdersettingsV3OrderSettings_universal_d_Policies = Policies;
  type restaurantsOrdersettingsV3OrderSettings_universal_d_Policy = Policy;
  type restaurantsOrdersettingsV3OrderSettings_universal_d_Tips = Tips;
  type restaurantsOrdersettingsV3OrderSettings_universal_d_TipsType = TipsType;
  const restaurantsOrdersettingsV3OrderSettings_universal_d_TipsType: typeof TipsType;
  type restaurantsOrdersettingsV3OrderSettings_universal_d_TippingRate = TippingRate;
  type restaurantsOrdersettingsV3OrderSettings_universal_d_FutureOrdersSettings = FutureOrdersSettings;
  type restaurantsOrdersettingsV3OrderSettings_universal_d_ChargeRoundingStrategy = ChargeRoundingStrategy;
  const restaurantsOrdersettingsV3OrderSettings_universal_d_ChargeRoundingStrategy: typeof ChargeRoundingStrategy;
  type restaurantsOrdersettingsV3OrderSettings_universal_d_GetOrderSettingsRequest = GetOrderSettingsRequest;
  type restaurantsOrdersettingsV3OrderSettings_universal_d_GetOrderSettingsResponse = GetOrderSettingsResponse;
  type restaurantsOrdersettingsV3OrderSettings_universal_d_UpdateOrderSettingsRequest = UpdateOrderSettingsRequest;
  type restaurantsOrdersettingsV3OrderSettings_universal_d_UpdateOrderSettingsResponse = UpdateOrderSettingsResponse;
  type restaurantsOrdersettingsV3OrderSettings_universal_d_ListOrderSettingsRequest = ListOrderSettingsRequest;
  type restaurantsOrdersettingsV3OrderSettings_universal_d_ListOrderSettingsResponse = ListOrderSettingsResponse;
  const restaurantsOrdersettingsV3OrderSettings_universal_d_getOrderSettings: typeof getOrderSettings;
  const restaurantsOrdersettingsV3OrderSettings_universal_d_updateOrderSettings: typeof updateOrderSettings;
  type restaurantsOrdersettingsV3OrderSettings_universal_d_UpdateOrderSettings = UpdateOrderSettings;
  type restaurantsOrdersettingsV3OrderSettings_universal_d_UpdateOrderSettingsOptions = UpdateOrderSettingsOptions;
  const restaurantsOrdersettingsV3OrderSettings_universal_d_listOrderSettings: typeof listOrderSettings;
  type restaurantsOrdersettingsV3OrderSettings_universal_d_ListOrderSettingsOptions = ListOrderSettingsOptions;
  namespace restaurantsOrdersettingsV3OrderSettings_universal_d {
    export {
      restaurantsOrdersettingsV3OrderSettings_universal_d_OrderSettings as OrderSettings,
      restaurantsOrdersettingsV3OrderSettings_universal_d_ApproximateAddresses as ApproximateAddresses,
      restaurantsOrdersettingsV3OrderSettings_universal_d_Policies as Policies,
      restaurantsOrdersettingsV3OrderSettings_universal_d_Policy as Policy,
      Type$1 as Type,
      restaurantsOrdersettingsV3OrderSettings_universal_d_Tips as Tips,
      restaurantsOrdersettingsV3OrderSettings_universal_d_TipsType as TipsType,
      restaurantsOrdersettingsV3OrderSettings_universal_d_TippingRate as TippingRate,
      restaurantsOrdersettingsV3OrderSettings_universal_d_FutureOrdersSettings as FutureOrdersSettings,
      Availability$1 as Availability,
      TimePeriod$1 as TimePeriod,
      DayOfWeek$1 as DayOfWeek,
      SpecialHourPeriod$1 as SpecialHourPeriod,
      restaurantsOrdersettingsV3OrderSettings_universal_d_ChargeRoundingStrategy as ChargeRoundingStrategy,
      restaurantsOrdersettingsV3OrderSettings_universal_d_GetOrderSettingsRequest as GetOrderSettingsRequest,
      restaurantsOrdersettingsV3OrderSettings_universal_d_GetOrderSettingsResponse as GetOrderSettingsResponse,
      restaurantsOrdersettingsV3OrderSettings_universal_d_UpdateOrderSettingsRequest as UpdateOrderSettingsRequest,
      restaurantsOrdersettingsV3OrderSettings_universal_d_UpdateOrderSettingsResponse as UpdateOrderSettingsResponse,
      restaurantsOrdersettingsV3OrderSettings_universal_d_ListOrderSettingsRequest as ListOrderSettingsRequest,
      restaurantsOrdersettingsV3OrderSettings_universal_d_ListOrderSettingsResponse as ListOrderSettingsResponse,
      restaurantsOrdersettingsV3OrderSettings_universal_d_getOrderSettings as getOrderSettings,
      restaurantsOrdersettingsV3OrderSettings_universal_d_updateOrderSettings as updateOrderSettings,
      restaurantsOrdersettingsV3OrderSettings_universal_d_UpdateOrderSettings as UpdateOrderSettings,
      restaurantsOrdersettingsV3OrderSettings_universal_d_UpdateOrderSettingsOptions as UpdateOrderSettingsOptions,
      restaurantsOrdersettingsV3OrderSettings_universal_d_listOrderSettings as listOrderSettings,
      restaurantsOrdersettingsV3OrderSettings_universal_d_ListOrderSettingsOptions as ListOrderSettingsOptions,
    };
  }
  
  interface Configuration {
      /** Configuration ID for the location on the Wix site. */
      _id?: string | null;
      /**
       * The corresponding Wix location for the configuration, as defined for the Wix site using the Business Info's [Locations](https://dev.wix.com/api/rest/business-info/locations) and/or [Site Properties](https://dev.wix.com/api/rest/business-info/site-properties) APIs,
       * or using [Dashboard Settings](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fsettings/business-info).
       */
      location?: Location$1;
      /** Restaurant catalog ID. */
      catalogId?: string;
      /** Whether a configuration is archived. */
      archived?: boolean;
      /** Whether a configuration is enabled. */
      enabled?: boolean;
      /**
       * URL linking to the POS integration settings in the Dashboard
       * if an online POS ordering app is installed.
       */
      integrationSettingsUrl?: string | null;
  }
  interface Location$1 {
      /** The Wix location [name](https://dev.wix.com/api/rest/business-info/locations/location-object). */
      name?: string;
  }
  interface GetConfigurationRequest {
      /** Configuration ID. */
      _id: string;
  }
  interface GetConfigurationResponse {
      /** The merchant's location configuration on Wix. */
      configuration?: Configuration;
  }
  interface ListConfigurationsRequest {
  }
  interface ListConfigurationsResponse {
      /** The merchant's configurations (locations) on Wix. */
      configurations?: Configuration[];
  }
  interface DisconnectAccountRequest {
      /** The app's definition ID. */
      appDefId?: string;
      /** The ID for the account between the merchant and the POS service provider. */
      accountId: string;
  }
  interface DisconnectAccountResponse {
  }
  interface DisconnectConfigurationRequest {
      /** The ID of the merchant's location configuration on Wix. */
      configurationId: string;
  }
  interface DisconnectConfigurationResponse {
  }
  /**
   * This endpoint gets a location configuration by ID on the Wix site.
   * @param _id - Configuration ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @returns The merchant's location configuration on Wix.
   */
  function getConfiguration(_id: string): Promise<Configuration>;
  /**
   * This endpoint retrieves a list of location configurations on the Wix site.
   * @internal
   * @documentationMaturity preview
   */
  function listConfigurations(): Promise<ListConfigurationsResponse>;
  /**
   * This endpoint disconnects the account between the merchant and the POS service provider.
   *
   * The account is not deleted. You can reconnect to the account using the POS integration settings in the Dashboard.
   *
   * Call the [List Account IDs](https://dev.wix.com/api/rest/wix-restaurants/point-of-sale-integration/pos-connectivity-spi/list-account-ids) SPI endpoint to retrieve a list of existing account IDs.
   * @param accountId - The ID for the account between the merchant and the POS service provider.
   * @internal
   * @documentationMaturity preview
   * @requiredField accountId
   * @adminMethod
   */
  function disconnectAccount(accountId: string, options?: DisconnectAccountOptions): Promise<void>;
  interface DisconnectAccountOptions {
      /** The app's definition ID. */
      appDefId?: string;
  }
  /**
   * This endpoint disconnects the Wix location configuration from a POS service provider's location.
   *
   * The configuration is not deleted. You can reconnect to the configuration using the POS integration settings in the Dashboard.
   *
   * Call the [List Configurations](https://dev.wix.com/api/rest/wix-restaurants/point-of-sale-integration/pos-connectivity-api/list-configurations) SPI endpoint to retrieve a list of existing configuration IDs.
   * @param configurationId - The ID of the merchant's location configuration on Wix.
   * @internal
   * @documentationMaturity preview
   * @requiredField configurationId
   * @adminMethod
   */
  function disconnectConfiguration(configurationId: string): Promise<void>;
  
  type restaurantsPostpaapiV1Configuration_universal_d_Configuration = Configuration;
  type restaurantsPostpaapiV1Configuration_universal_d_GetConfigurationRequest = GetConfigurationRequest;
  type restaurantsPostpaapiV1Configuration_universal_d_GetConfigurationResponse = GetConfigurationResponse;
  type restaurantsPostpaapiV1Configuration_universal_d_ListConfigurationsRequest = ListConfigurationsRequest;
  type restaurantsPostpaapiV1Configuration_universal_d_ListConfigurationsResponse = ListConfigurationsResponse;
  type restaurantsPostpaapiV1Configuration_universal_d_DisconnectAccountRequest = DisconnectAccountRequest;
  type restaurantsPostpaapiV1Configuration_universal_d_DisconnectAccountResponse = DisconnectAccountResponse;
  type restaurantsPostpaapiV1Configuration_universal_d_DisconnectConfigurationRequest = DisconnectConfigurationRequest;
  type restaurantsPostpaapiV1Configuration_universal_d_DisconnectConfigurationResponse = DisconnectConfigurationResponse;
  const restaurantsPostpaapiV1Configuration_universal_d_getConfiguration: typeof getConfiguration;
  const restaurantsPostpaapiV1Configuration_universal_d_listConfigurations: typeof listConfigurations;
  const restaurantsPostpaapiV1Configuration_universal_d_disconnectAccount: typeof disconnectAccount;
  type restaurantsPostpaapiV1Configuration_universal_d_DisconnectAccountOptions = DisconnectAccountOptions;
  const restaurantsPostpaapiV1Configuration_universal_d_disconnectConfiguration: typeof disconnectConfiguration;
  namespace restaurantsPostpaapiV1Configuration_universal_d {
    export {
      restaurantsPostpaapiV1Configuration_universal_d_Configuration as Configuration,
      Location$1 as Location,
      restaurantsPostpaapiV1Configuration_universal_d_GetConfigurationRequest as GetConfigurationRequest,
      restaurantsPostpaapiV1Configuration_universal_d_GetConfigurationResponse as GetConfigurationResponse,
      restaurantsPostpaapiV1Configuration_universal_d_ListConfigurationsRequest as ListConfigurationsRequest,
      restaurantsPostpaapiV1Configuration_universal_d_ListConfigurationsResponse as ListConfigurationsResponse,
      restaurantsPostpaapiV1Configuration_universal_d_DisconnectAccountRequest as DisconnectAccountRequest,
      restaurantsPostpaapiV1Configuration_universal_d_DisconnectAccountResponse as DisconnectAccountResponse,
      restaurantsPostpaapiV1Configuration_universal_d_DisconnectConfigurationRequest as DisconnectConfigurationRequest,
      restaurantsPostpaapiV1Configuration_universal_d_DisconnectConfigurationResponse as DisconnectConfigurationResponse,
      restaurantsPostpaapiV1Configuration_universal_d_getConfiguration as getConfiguration,
      restaurantsPostpaapiV1Configuration_universal_d_listConfigurations as listConfigurations,
      restaurantsPostpaapiV1Configuration_universal_d_disconnectAccount as disconnectAccount,
      restaurantsPostpaapiV1Configuration_universal_d_DisconnectAccountOptions as DisconnectAccountOptions,
      restaurantsPostpaapiV1Configuration_universal_d_disconnectConfiguration as disconnectConfiguration,
    };
  }
  
  /** RestaurantLocation is the main entity of RestaurantLocations that can be used for lorem ipsum dolor */
  interface RestaurantLocation {
      /** Restaurant Location ID */
      _id?: string | null;
      /** Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision */
      revision?: string | null;
      /**
       * Whether this restaurant location is active.
       * @readonly
       */
      active?: boolean;
      /**
       * Restaurant location - location
       * @readonly
       */
      location?: Location;
  }
  interface Location {
      /** The associated location id */
      locationId?: string | null;
      /**
       * Whether this is the default restaurant location. There can only be one default restaurant location per site.
       * @readonly
       */
      default?: boolean;
      /**
       * Restaurant location address
       * @readonly
       */
      address?: Address;
      /**
       * Restaurant location contact details
       * @readonly
       */
      contactDetails?: ContactDetails;
      /**
       * Restaurant location timeZone
       * @readonly
       */
      timeZone?: string;
      /**
       * Restaurant location locale
       * @readonly
       */
      locale?: Locale;
      /**
       * Restaurant location name
       * @readonly
       */
      name?: string | null;
      /**
       * Restaurant location currency
       * @readonly
       */
      currency?: string | null;
      /**
       * Restaurant location schedule. Array of weekly recurring time periods when the location is open for restaurant location. Limited to 100 time periods.
       * @readonly
       */
      availability?: Availability;
  }
  /** Physical address */
  interface Address extends AddressStreetOneOf {
      /** Street name and number. */
      streetAddress?: StreetAddress;
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
      location?: AddressLocation;
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
      /**
       * Optional address line 1
       * @internal
       */
      formattedAddressLine?: string | null;
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
  interface ContactDetails {
      /** Restaurant location email */
      email?: string | null;
      /** Restaurant location phone */
      phone?: string | null;
      /** Restaurant location fax */
      fax?: string | null;
  }
  interface Locale {
      /**
       * Locale in [IETF BCP 47 language tag](https://en.wikipedia.org/wiki/IETF_language_tag) format.
       * Typically, this is a lowercase 2-letter language code,
       * followed by a hyphen, followed by an uppercase 2-letter country code.
       * For example, `en-US` for U.S. English, and `de-DE` for Germany German.
       */
      languageCode?: string | null;
      /** 2-letter country code in [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) format. */
      country?: string | null;
  }
  interface Availability {
      /** Weekly recurring time periods when the entity is available. Limited to 100 time periods. */
      periods?: TimePeriod[];
      /** Exceptions to the entity's regular availability. The entity can be available or not available during the special hour period. */
      specialHourPeriods?: SpecialHourPeriod[];
  }
  /** Weekly recurring time periods when the entity is available. */
  interface TimePeriod {
      /** Day of the week the period starts on. */
      openDay?: DayOfWeek;
      /**
       * Time the period starts in 24-hour [ISO 8601](https:en.wikipedia.orgwikiISO_8601) extended format. Valid values are 00:00-24:00, where 24:00 represents
       * midnight at the end of the specified day.
       */
      openTime?: string;
      /** Day of the week the period ends on. */
      closeDay?: DayOfWeek;
      /**
       * Time the period ends in 24-hour [ISO 8601](https:en.wikipedia.orgwikiISO_8601) extended format. Valid values are 00:00-24:00, where 24:00 represents
       * midnight at the end of the specified day.
       * __Note:__ If `openDay` and `closeDay` specify the same day of the week `closeTime` must be later than `openTime`.
       */
      closeTime?: string;
  }
  enum DayOfWeek {
      MON = "MON",
      TUE = "TUE",
      WED = "WED",
      THU = "THU",
      FRI = "FRI",
      SAT = "SAT",
      SUN = "SUN"
  }
  /** Exception to the business's regular hours. The business can be open or closed during the exception. */
  interface SpecialHourPeriod {
      /** Start date and time of the exception in [ISO 8601](https:en.wikipedia.orgwikiISO_8601) format and [Coordinated Universal Time (UTC)](https:en.wikipedia.orgwikiCoordinated_Universal_Time). */
      startDate?: string;
      /** End date and time of the exception in [ISO 8601](https:en.wikipedia.orgwikiISO_8601) format and [Coordinated Universal Time (UTC)](https:en.wikipedia.orgwikiCoordinated_Universal_Time). */
      endDate?: string;
      /** Whether the item is available during the exception. Defaults to `false`. */
      available?: boolean;
      /** Name of the special hour period. In the Business Manager the special hour period is called event. */
      eventName?: string | null;
  }
  interface GetRestaurantLocationRequest {
      /** Id of the Restaurant location to retrieve */
      restaurantLocationId: string;
  }
  interface GetRestaurantLocationResponse {
      /** The retrieved RestaurantLocation */
      restaurantLocation?: RestaurantLocation;
  }
  interface ListRestaurantLocationsRequest {
      /** location ids */
      locationIds?: string[] | null;
      /** Includes archived restaurant locations. Default is false */
      includeArchived?: boolean;
      /** default restaurant location. Default is false */
      default?: boolean;
  }
  interface ListRestaurantLocationsResponse {
      /** The retrieved RestaurantLocation */
      restaurantLocations?: RestaurantLocation[];
  }
  /**
   * Get a RestaurantLocation by id
   * @param restaurantLocationId - Id of the Restaurant location to retrieve
   * @internal
   * @documentationMaturity preview
   * @requiredField restaurantLocationId
   * @returns The retrieved RestaurantLocation
   */
  function getRestaurantLocation(restaurantLocationId: string): Promise<RestaurantLocation>;
  /**
   * Get Restaurant locations
   * @internal
   * @documentationMaturity preview
   */
  function listRestaurantLocations(options?: ListRestaurantLocationsOptions): Promise<ListRestaurantLocationsResponse>;
  interface ListRestaurantLocationsOptions {
      /** location ids */
      locationIds?: string[] | null;
      /** Includes archived restaurant locations. Default is false */
      includeArchived?: boolean;
      /** default restaurant location. Default is false */
      default?: boolean;
  }
  
  type restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_RestaurantLocation = RestaurantLocation;
  type restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_Location = Location;
  type restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_Address = Address;
  type restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_AddressStreetOneOf = AddressStreetOneOf;
  type restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_StreetAddress = StreetAddress;
  type restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_AddressLocation = AddressLocation;
  type restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_Subdivision = Subdivision;
  type restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_SubdivisionType = SubdivisionType;
  const restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_SubdivisionType: typeof SubdivisionType;
  type restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_ContactDetails = ContactDetails;
  type restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_Locale = Locale;
  type restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_Availability = Availability;
  type restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_TimePeriod = TimePeriod;
  type restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_DayOfWeek = DayOfWeek;
  const restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_DayOfWeek: typeof DayOfWeek;
  type restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_SpecialHourPeriod = SpecialHourPeriod;
  type restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_GetRestaurantLocationRequest = GetRestaurantLocationRequest;
  type restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_GetRestaurantLocationResponse = GetRestaurantLocationResponse;
  type restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_ListRestaurantLocationsRequest = ListRestaurantLocationsRequest;
  type restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_ListRestaurantLocationsResponse = ListRestaurantLocationsResponse;
  const restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_getRestaurantLocation: typeof getRestaurantLocation;
  const restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_listRestaurantLocations: typeof listRestaurantLocations;
  type restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_ListRestaurantLocationsOptions = ListRestaurantLocationsOptions;
  namespace restaurantsRestaurantlocationsV3RestaurantLocation_universal_d {
    export {
      restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_RestaurantLocation as RestaurantLocation,
      restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_Location as Location,
      restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_Address as Address,
      restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_AddressStreetOneOf as AddressStreetOneOf,
      restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_StreetAddress as StreetAddress,
      restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_AddressLocation as AddressLocation,
      restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_Subdivision as Subdivision,
      restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_SubdivisionType as SubdivisionType,
      restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_ContactDetails as ContactDetails,
      restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_Locale as Locale,
      restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_Availability as Availability,
      restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_TimePeriod as TimePeriod,
      restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_DayOfWeek as DayOfWeek,
      restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_SpecialHourPeriod as SpecialHourPeriod,
      restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_GetRestaurantLocationRequest as GetRestaurantLocationRequest,
      restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_GetRestaurantLocationResponse as GetRestaurantLocationResponse,
      restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_ListRestaurantLocationsRequest as ListRestaurantLocationsRequest,
      restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_ListRestaurantLocationsResponse as ListRestaurantLocationsResponse,
      restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_getRestaurantLocation as getRestaurantLocation,
      restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_listRestaurantLocations as listRestaurantLocations,
      restaurantsRestaurantlocationsV3RestaurantLocation_universal_d_ListRestaurantLocationsOptions as ListRestaurantLocationsOptions,
    };
  }
  
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
       * ID of the restaurant's location
       * @internal
       */
      restaurantLocationId?: string | null;
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
      /**
       * TEST This is a line item for the order of the property
       *
       */
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
      /**
       * Information about the order’s loyalty points.
       * Learn more about the [Wix Loyalty Program](https://dev.wix.com/api/rest/wix-loyalty-program/introduction).
       */
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
  /** TEST  This is a line item for the order. */
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
      /** Line item name. */
      name?: string | null;
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
      /**
       * Discount description as defined in the catalog.
       *
       * Max: 1,000 characters
       * @readonly
       */
      catalogDiscountDescription?: string;
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
  interface Fulfillment extends FulfillmentDetailsOneOf {
      /** Delivery details. */
      deliveryDetails?: DeliveryDetails;
      /** Pickup details. */
      pickupDetails?: PickupDetails;
      /** Dine-in details */
      dineInDetails?: DineInDetails;
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
  }
  /** @oneof */
  interface FulfillmentDetailsOneOf {
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
  interface DeliveryDetails extends DeliveryDetailsProviderOneOf {
      /** Delivery through the restaurant. */
      restaurant?: Restaurant;
      /** Delivery through an external provider. */
      externalProvider?: ExternalProvider;
      /** Delivery address. */
      address?: DeliveryAddress;
      /** Information about the delivery pickup. */
      pickupInfo?: PickupInfo;
      /**
       * Information about the delivery drop-off.
       * @internal
       */
      dropOffInfo?: DropOffInfo;
  }
  /** @oneof */
  interface DeliveryDetailsProviderOneOf {
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
      /**
       * When a delivery will be drop off. This is the start time of the drop off window.
       * @internal
       */
      windowStartTime?: Date;
      /**
       * When a delivery will be drop off. This is the end time of the drop off window.
       * @internal
       */
      windowEndTime?: Date;
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
  interface Customer extends CustomerIdOneOf {
      /** Member ID. */
      memberId?: string | null;
      /** Visitor ID. */
      visitorId?: string | null;
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
  }
  /** @oneof */
  interface CustomerIdOneOf {
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
      /**
       * Information about the order's service fees.
       * @internal
       */
      serviceFees?: ServiceFee[];
  }
  interface ServiceFee {
      /** The service fee's unique id. */
      ruleId?: string;
      /**
       * The service fee's name.
       * @readonly
       */
      name?: string;
      /** The service fee's fee as Money. */
      fee?: Money;
      /** The service fee's tax as Money. */
      tax?: Money;
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
      /**
       * Wix Loyalty estimated account point balance.
       * Equal to the sum of earned and adjusted points minus redeemed points.
       * The estimated point balance is the value before the order is completed. Following the purchase, the point balance is updated.
       * @readonly
       */
      estimatedAccountBalance?: number | null;
      /**
       * Wix Loyalty estimated total earned points.
       * The estimated total earned points is the value before the order is completed. Following the purchase, the total is updated.
       * @readonly
       */
      estimatedPointsEarned?: number | null;
      /**
       * Associated Wix Loyalty reward revision number, which increments by 1 each time the loyalty account is updated.
       *
       * To prevent conflicting changes, the current revision must be passed when updating the loyalty account.
       * Ignored when creating an account.
       * @readonly
       */
      rewardRevision?: string | null;
  }
  interface PosInfo {
      externalProvider?: PosInfoExternalProvider;
  }
  interface Error {
      /** Error code */
      code?: string;
      /** Error message */
      message?: string;
      /** Error params */
      params?: Record<string, string>;
  }
  interface PosInfoExternalProvider {
      /** ID of the external provider. */
      _id?: string;
      /** ID of the order in the external provider. */
      orderId?: string;
      /** Order creation success */
      success?: boolean;
      /** Order creation errors */
      errors?: Error[];
  }
  interface GetTotalActiveOrdersRequest {
      /** filter response to a specific location, otherwise return totals for all locations. */
      locationId?: string | null;
      organizationId?: string | null;
      /** Order delivery date and time for filtering new orders count, Must include a `gte:` or `lte:` prefix, for example: `gte:2021-10-26T12:48:15Z`. */
      promisedTimeNew?: string | null;
      /** Order delivery date and time for filtering new orders count, Must include a `gte:` or `lte:` prefix, for example: `gte:2021-10-26T12:48:15Z`. */
      promisedTimeInProgress?: string | null;
      /**
       * filter response to a specific Restaurant Location, otherwise return totals for all restaurant locations
       * if the restaurant_location_id is provided, the location_id will be ignored
       * @internal
       */
      restaurantLocationId?: string | null;
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
  interface NewOrder {
      /** New order. */
      order?: Order;
  }
  interface GetOrderRequest {
      /** ID of the order to retrieve. */
      _id: string;
      /**
       * Set of fields to retrieve.
       * Fields that aren't included in `fieldmaks.paths` are ignored.
       * See [the article about field masks](https://dev.wix.com/api/rest/restaurants/orders/supported-field-masks)
       * for more details.
       * @internal
       */
      fieldMask?: string[];
  }
  interface GetOrderResponse {
      /** Retrieved order. */
      order?: Order;
  }
  interface ListOrdersRequest {
      /**
       * Set of fields to retrieve.
       * Fields that aren't included in `fieldmaks.paths` are ignored.
       * See [the article about field masks](https://dev.wix.com/api/rest/restaurants/orders/supported-field-masks)
       * for more details.
       * @internal
       */
      fieldMask?: string[];
      /** Order status. Currently, it is not possible to filter by status `FULFILLED`. */
      status?: Status;
      /** Order creation date and time. Must include a `gte:` or `lte:` prefix, for example: `gte:2021-10-26T12:48:15Z`. */
      _createdDate?: string | null;
      /** Whether the order has been delivered. */
      delivered?: boolean | null;
      /** Location filter. Pass an array of location IDs to return orders with any of the provided locations. */
      locationIds?: string[];
      /** Sorting options. */
      sort?: Sort;
      /** Number of orders to return. The minimum limit is 1, the maximum 1000. */
      limit?: number | null;
      /**
       * paging options (limit and cursor).
       * @internal
       */
      cursorPaging?: CursorPaging;
      /**
       * Order phone number filter. for filtering orders by phone.
       * @internal
       */
      phone?: string | null;
      /**
       * Whether the order should be delivered asap.
       * @internal
       */
      asap?: boolean | null;
      /**
       * Order promised_time. Must include a prefix (`gt`,`gte`,`lte`,`lt`), for example: `gte:2021-10-26T12:48:15Z`.
       * @internal
       */
      promisedTime?: string | null;
      /**
       * Location filter. Pass an array of location IDs to return orders with any of the provided locations.
       * @internal
       */
      restaurantLocationIds?: string[];
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
      /** Cursor string pointing to the next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to the previous page in the list of results. */
      prev?: string | null;
  }
  interface AcceptOrderRequest extends AcceptOrderRequestDeliveryTimeOneOf {
      /**
       * Order pickup time.
       * @internal
       */
      pickupTime?: Date;
      /**
       * Order drop off time.
       * @internal
       */
      dropOffTime?: Date;
      /** ID of the order to mark as `ACCEPTED`. */
      _id: string;
      /** Message when accepting the order. */
      message?: string | null;
  }
  /** @oneof */
  interface AcceptOrderRequestDeliveryTimeOneOf {
      /**
       * Order pickup time.
       * @internal
       */
      pickupTime?: Date;
      /**
       * Order drop off time.
       * @internal
       */
      dropOffTime?: Date;
  }
  interface AcceptOrderResponse {
      /** Accepted order. */
      order?: Order;
  }
  interface OrderAccepted {
      /** Accepted order. */
      order?: Order;
  }
  interface CancelOrderRequest {
      /** ID of the order to mark as `CANCELED`. */
      _id: string;
      /** Message when canceling the order. */
      message?: string | null;
  }
  interface CancelOrderResponse {
      /** Canceled order. */
      order?: Order;
  }
  interface OrderCanceled {
      /** Canceled order. */
      order?: Order;
  }
  interface FulfillOrderRequest {
      /** ID of the order to mark as `FULFILLED`. */
      _id: string;
  }
  interface FulfillOrderResponse {
      /** Fulfilled order. */
      order?: Order;
  }
  interface OrderFulfilled {
      /** Fulfilled order. */
      order?: Order;
  }
  interface CountOrdersRequest {
      /** Count orders only for a specific restaurant location */
      restaurantLocationId?: string | null;
      /** Limit the count only for orders that match the query */
      query?: CountOrdersQuery;
      /** Count orders only for a specific OS location ID */
      locationId?: string | null;
  }
  interface CountOrdersQuery {
      /** Required - filter orders count by status. Supported values: NEW, ACCEPTED */
      status?: Status;
      /**
       * Required - filter orders count by fulfillment promised time. (Latest delivery time promised by the restaurant)
       * Maximum supported range is up to 30 days.
       * NOTE: Count is a slow operation, for better performance request smaller time ranges.
       */
      promisedTime?: DateRangeFilter;
  }
  interface DateRangeFilter {
      /** Filter by date range, starting from given timestamp */
      startTime?: Date;
      /** Filter by date range, ending by a given timestamp */
      endTime?: Date;
  }
  interface CountOrdersResponse {
      /** Number of orders count that match the query */
      count?: number;
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
  interface NotifyOrderEventRequest {
      /** Order ID. */
      _id: string;
      /** Metasite id */
      msid?: string;
      /** Notification event type */
      eventType?: EventType;
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
  interface Empty {
  }
  interface GetOrderByMsidRequest {
      /** Order ID. */
      _id: string;
      /** Metasite id */
      msid: string;
      /**
       * Controls what data is returned in the response
       * @internal
       */
      fieldMask?: string[];
  }
  interface GetOrderByMsidResponse {
      /** Order data. */
      order?: Order;
  }
  interface ListOrdersByMsidRequest {
      /**
       * Controls what data is returned in the response.
       * @internal
       */
      fieldMask?: string[];
      /** Order status to filter by. Currently Status Fulfilled is not supported */
      status?: Status;
      /** Created date of the order epoch time. */
      _createdDate?: string | null;
      delivered?: boolean | null;
      /** Sorting of Orders in response. Default "CREATED_DATE:ASC" */
      sort?: Sort;
      /** limit of records - min: 1 max: 2000 */
      limit?: number | null;
      /** Metasite id */
      msid: string;
  }
  interface ListOrdersByMsidResponse {
      /** Order data. */
      orders?: Order[];
  }
  interface NotifyOrderEventResponse {
  }
  /**
   * return list of orders total amount mapped to each location based on given status.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function getTotalActiveOrders(options?: GetTotalActiveOrdersOptions): Promise<GetTotalActiveOrdersResponse>;
  interface GetTotalActiveOrdersOptions {
      /** filter response to a specific location, otherwise return totals for all locations. */
      locationId?: string | null;
      organizationId?: string | null;
      /** Order delivery date and time for filtering new orders count, Must include a `gte:` or `lte:` prefix, for example: `gte:2021-10-26T12:48:15Z`. */
      promisedTimeNew?: string | null;
      /** Order delivery date and time for filtering new orders count, Must include a `gte:` or `lte:` prefix, for example: `gte:2021-10-26T12:48:15Z`. */
      promisedTimeInProgress?: string | null;
      /**
       * filter response to a specific Restaurant Location, otherwise return totals for all restaurant locations
       * if the restaurant_location_id is provided, the location_id will be ignored
       * @internal
       */
      restaurantLocationId?: string | null;
  }
  /**
   * TEST The `getOrder()` function returns a Promise that is returned when an order is retrieved.
   *
   * 1. First do this.
   * 1. The do that
   *     + This is a bullet
   *     + So is this.
   *
   * > **Note**: This indentation is not how our notes generally look but I will waiit to see the branch preview. I am just trying out some markdown here.
   *
   * @param _id - ID of the order to retrieve.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @adminMethod
   * @returns TEST Curious where this shows up.
   */
  function getOrder(_id: string, options?: GetOrderOptions): Promise<Order>;
  /** TEST The options for the order. */
  interface GetOrderOptions {
      /**
       * Set of fields to retrieve.
       * Fields that aren't included in `fieldmaks.paths` are ignored.
       * See [the article about field masks](https://dev.wix.com/api/rest/restaurants/orders/supported-field-masks)
       * for more details.
       * @internal
       */
      fieldMask?: string[];
  }
  /**
   * Retrieves a list of up to 1000 orders, given the provided filters.
   * @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function listOrders(options?: ListOrdersOptions): Promise<ListOrdersResponse>;
  interface ListOrdersOptions {
      /**
       * Set of fields to retrieve.
       * Fields that aren't included in `fieldmaks.paths` are ignored.
       * See [the article about field masks](https://dev.wix.com/api/rest/restaurants/orders/supported-field-masks)
       * for more details.
       * @internal
       */
      fieldMask?: string[];
      /** Order status. Currently, it is not possible to filter by status `FULFILLED`. */
      status?: Status;
      /** Order creation date and time. Must include a `gte:` or `lte:` prefix, for example: `gte:2021-10-26T12:48:15Z`. */
      _createdDate?: string | null;
      /** Whether the order has been delivered. */
      delivered?: boolean | null;
      /** Location filter. Pass an array of location IDs to return orders with any of the provided locations. */
      locationIds?: string[];
      /** Sorting options. */
      sort?: Sort;
      /** Number of orders to return. The minimum limit is 1, the maximum 1000. */
      limit?: number | null;
      /**
       * paging options (limit and cursor).
       * @internal
       */
      cursorPaging?: CursorPaging;
      /**
       * Order phone number filter. for filtering orders by phone.
       * @internal
       */
      phone?: string | null;
      /**
       * Whether the order should be delivered asap.
       * @internal
       */
      asap?: boolean | null;
      /**
       * Order promised_time. Must include a prefix (`gt`,`gte`,`lte`,`lt`), for example: `gte:2021-10-26T12:48:15Z`.
       * @internal
       */
      promisedTime?: string | null;
      /**
       * Location filter. Pass an array of location IDs to return orders with any of the provided locations.
       * @internal
       */
      restaurantLocationIds?: string[];
  }
  /**
   * Changes the order status to `ACCEPTED`.
   *
   * > **Note:** It is not possible to change the order status from `FULFILLED` to `ACCEPTED`.
   * @param _id - ID of the order to mark as `ACCEPTED`.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @adminMethod
   */
  function acceptOrder(_id: string, options?: AcceptOrderOptions): Promise<AcceptOrderResponse>;
  interface AcceptOrderOptions extends AcceptOrderRequestDeliveryTimeOneOf {
      /** Message when accepting the order. */
      message?: string | null;
      /**
       * Order pickup time.
       * @internal
       */
      pickupTime?: Date;
      /**
       * Order drop off time.
       * @internal
       */
      dropOffTime?: Date;
  }
  /**
   * Changes the order status to `CANCELED`.
   * @param _id - ID of the order to mark as `CANCELED`.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @adminMethod
   */
  function cancelOrder(_id: string, options?: CancelOrderOptions): Promise<CancelOrderResponse>;
  interface CancelOrderOptions {
      /** Message when canceling the order. */
      message?: string | null;
  }
  /**
   * Changes the order status to `FULFILLED`.
   * @param _id - ID of the order to mark as `FULFILLED`.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @adminMethod
   */
  function fulfillOrder(_id: string): Promise<FulfillOrderResponse>;
  /**
   * Returns the number of orders that match the query.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function countOrders(options?: CountOrdersOptions): Promise<CountOrdersResponse>;
  interface CountOrdersOptions {
      /** Count orders only for a specific restaurant location */
      restaurantLocationId?: string | null;
      /** Limit the count only for orders that match the query */
      query?: CountOrdersQuery;
      /** Count orders only for a specific OS location ID */
      locationId?: string | null;
  }
  /**
   * Retrieves an order.
   * @param _id - Order ID.
   * @param msid - Metasite id
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField msid
   * @adminMethod
   */
  function getOrderByMsid(_id: string, msid: string, options?: GetOrderByMsidOptions): Promise<GetOrderByMsidResponse>;
  interface GetOrderByMsidOptions {
      /**
       * Controls what data is returned in the response
       * @internal
       */
      fieldMask?: string[];
  }
  /**
   * Retrieves a list of up to 2000 orders, given the provided filters.
   * @internal
   * @documentationMaturity preview
   * @requiredField options.msid
   * @adminMethod
   */
  function listOrdersByMsid(options?: ListOrdersByMsidOptions): Promise<ListOrdersByMsidResponse>;
  interface ListOrdersByMsidOptions {
      /**
       * Controls what data is returned in the response.
       * @internal
       */
      fieldMask?: string[];
      /** Order status to filter by. Currently Status Fulfilled is not supported */
      status?: Status;
      /** Created date of the order epoch time. */
      _createdDate?: string | null;
      delivered?: boolean | null;
      /** Sorting of Orders in response. Default "CREATED_DATE:ASC" */
      sort?: Sort;
      /** limit of records - min: 1 max: 2000 */
      limit?: number | null;
      /** Metasite id */
      msid: string;
  }
  /** @param _id - Order ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @adminMethod
   */
  function notifyOrderEvent(_id: string, options?: NotifyOrderEventOptions): Promise<void>;
  interface NotifyOrderEventOptions {
      /** Metasite id */
      msid?: string;
      /** Notification event type */
      eventType?: EventType;
  }
  
  type restaurantsV3Order_universal_d_Order = Order;
  type restaurantsV3Order_universal_d_Status = Status;
  const restaurantsV3Order_universal_d_Status: typeof Status;
  type restaurantsV3Order_universal_d_LineItem = LineItem;
  type restaurantsV3Order_universal_d_LineItemOption = LineItemOption;
  type restaurantsV3Order_universal_d_DisplayType = DisplayType;
  const restaurantsV3Order_universal_d_DisplayType: typeof DisplayType;
  type restaurantsV3Order_universal_d_LineItemOptionItem = LineItemOptionItem;
  type restaurantsV3Order_universal_d_CatalogReference = CatalogReference;
  type restaurantsV3Order_universal_d_Discount = Discount;
  type restaurantsV3Order_universal_d_DiscountType = DiscountType;
  const restaurantsV3Order_universal_d_DiscountType: typeof DiscountType;
  type restaurantsV3Order_universal_d_Coupon = Coupon;
  type restaurantsV3Order_universal_d_Payment = Payment;
  type restaurantsV3Order_universal_d_PaymentType = PaymentType;
  const restaurantsV3Order_universal_d_PaymentType: typeof PaymentType;
  type restaurantsV3Order_universal_d_Fulfillment = Fulfillment;
  type restaurantsV3Order_universal_d_FulfillmentDetailsOneOf = FulfillmentDetailsOneOf;
  type restaurantsV3Order_universal_d_FulfillmentType = FulfillmentType;
  const restaurantsV3Order_universal_d_FulfillmentType: typeof FulfillmentType;
  type restaurantsV3Order_universal_d_DeliveryDetails = DeliveryDetails;
  type restaurantsV3Order_universal_d_DeliveryDetailsProviderOneOf = DeliveryDetailsProviderOneOf;
  type restaurantsV3Order_universal_d_DeliveryAddress = DeliveryAddress;
  type restaurantsV3Order_universal_d_OnArrival = OnArrival;
  const restaurantsV3Order_universal_d_OnArrival: typeof OnArrival;
  type restaurantsV3Order_universal_d_DeliveryAddressLocation = DeliveryAddressLocation;
  type restaurantsV3Order_universal_d_Restaurant = Restaurant;
  type restaurantsV3Order_universal_d_ExternalProvider = ExternalProvider;
  type restaurantsV3Order_universal_d_PickupInfo = PickupInfo;
  type restaurantsV3Order_universal_d_DropOffInfo = DropOffInfo;
  type restaurantsV3Order_universal_d_PickupDetails = PickupDetails;
  type restaurantsV3Order_universal_d_Curbside = Curbside;
  type restaurantsV3Order_universal_d_DineInDetails = DineInDetails;
  type restaurantsV3Order_universal_d_Customer = Customer;
  type restaurantsV3Order_universal_d_CustomerIdOneOf = CustomerIdOneOf;
  type restaurantsV3Order_universal_d_Totals = Totals;
  type restaurantsV3Order_universal_d_ServiceFee = ServiceFee;
  type restaurantsV3Order_universal_d_Money = Money;
  type restaurantsV3Order_universal_d_Activity = Activity;
  type restaurantsV3Order_universal_d_ChannelInfo = ChannelInfo;
  type restaurantsV3Order_universal_d_Type = Type;
  const restaurantsV3Order_universal_d_Type: typeof Type;
  type restaurantsV3Order_universal_d_LoyaltyInfo = LoyaltyInfo;
  type restaurantsV3Order_universal_d_PosInfo = PosInfo;
  type restaurantsV3Order_universal_d_Error = Error;
  type restaurantsV3Order_universal_d_PosInfoExternalProvider = PosInfoExternalProvider;
  type restaurantsV3Order_universal_d_GetTotalActiveOrdersRequest = GetTotalActiveOrdersRequest;
  type restaurantsV3Order_universal_d_GetTotalActiveOrdersResponse = GetTotalActiveOrdersResponse;
  type restaurantsV3Order_universal_d_LocationToAmount = LocationToAmount;
  type restaurantsV3Order_universal_d_NewOrder = NewOrder;
  type restaurantsV3Order_universal_d_GetOrderRequest = GetOrderRequest;
  type restaurantsV3Order_universal_d_GetOrderResponse = GetOrderResponse;
  type restaurantsV3Order_universal_d_ListOrdersRequest = ListOrdersRequest;
  type restaurantsV3Order_universal_d_Sort = Sort;
  type restaurantsV3Order_universal_d_FieldName = FieldName;
  const restaurantsV3Order_universal_d_FieldName: typeof FieldName;
  type restaurantsV3Order_universal_d_SortOrder = SortOrder;
  const restaurantsV3Order_universal_d_SortOrder: typeof SortOrder;
  type restaurantsV3Order_universal_d_CursorPaging = CursorPaging;
  type restaurantsV3Order_universal_d_ListOrdersResponse = ListOrdersResponse;
  type restaurantsV3Order_universal_d_PagingMetadataV2 = PagingMetadataV2;
  type restaurantsV3Order_universal_d_Cursors = Cursors;
  type restaurantsV3Order_universal_d_AcceptOrderRequest = AcceptOrderRequest;
  type restaurantsV3Order_universal_d_AcceptOrderRequestDeliveryTimeOneOf = AcceptOrderRequestDeliveryTimeOneOf;
  type restaurantsV3Order_universal_d_AcceptOrderResponse = AcceptOrderResponse;
  type restaurantsV3Order_universal_d_OrderAccepted = OrderAccepted;
  type restaurantsV3Order_universal_d_CancelOrderRequest = CancelOrderRequest;
  type restaurantsV3Order_universal_d_CancelOrderResponse = CancelOrderResponse;
  type restaurantsV3Order_universal_d_OrderCanceled = OrderCanceled;
  type restaurantsV3Order_universal_d_FulfillOrderRequest = FulfillOrderRequest;
  type restaurantsV3Order_universal_d_FulfillOrderResponse = FulfillOrderResponse;
  type restaurantsV3Order_universal_d_OrderFulfilled = OrderFulfilled;
  type restaurantsV3Order_universal_d_CountOrdersRequest = CountOrdersRequest;
  type restaurantsV3Order_universal_d_CountOrdersQuery = CountOrdersQuery;
  type restaurantsV3Order_universal_d_DateRangeFilter = DateRangeFilter;
  type restaurantsV3Order_universal_d_CountOrdersResponse = CountOrdersResponse;
  type restaurantsV3Order_universal_d_DomainEvent = DomainEvent;
  type restaurantsV3Order_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type restaurantsV3Order_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type restaurantsV3Order_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type restaurantsV3Order_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type restaurantsV3Order_universal_d_ActionEvent = ActionEvent;
  type restaurantsV3Order_universal_d_NotifyOrderEventRequest = NotifyOrderEventRequest;
  type restaurantsV3Order_universal_d_EventType = EventType;
  const restaurantsV3Order_universal_d_EventType: typeof EventType;
  type restaurantsV3Order_universal_d_Empty = Empty;
  type restaurantsV3Order_universal_d_GetOrderByMsidRequest = GetOrderByMsidRequest;
  type restaurantsV3Order_universal_d_GetOrderByMsidResponse = GetOrderByMsidResponse;
  type restaurantsV3Order_universal_d_ListOrdersByMsidRequest = ListOrdersByMsidRequest;
  type restaurantsV3Order_universal_d_ListOrdersByMsidResponse = ListOrdersByMsidResponse;
  type restaurantsV3Order_universal_d_NotifyOrderEventResponse = NotifyOrderEventResponse;
  const restaurantsV3Order_universal_d_getTotalActiveOrders: typeof getTotalActiveOrders;
  type restaurantsV3Order_universal_d_GetTotalActiveOrdersOptions = GetTotalActiveOrdersOptions;
  const restaurantsV3Order_universal_d_getOrder: typeof getOrder;
  type restaurantsV3Order_universal_d_GetOrderOptions = GetOrderOptions;
  const restaurantsV3Order_universal_d_listOrders: typeof listOrders;
  type restaurantsV3Order_universal_d_ListOrdersOptions = ListOrdersOptions;
  const restaurantsV3Order_universal_d_acceptOrder: typeof acceptOrder;
  type restaurantsV3Order_universal_d_AcceptOrderOptions = AcceptOrderOptions;
  const restaurantsV3Order_universal_d_cancelOrder: typeof cancelOrder;
  type restaurantsV3Order_universal_d_CancelOrderOptions = CancelOrderOptions;
  const restaurantsV3Order_universal_d_fulfillOrder: typeof fulfillOrder;
  const restaurantsV3Order_universal_d_countOrders: typeof countOrders;
  type restaurantsV3Order_universal_d_CountOrdersOptions = CountOrdersOptions;
  const restaurantsV3Order_universal_d_getOrderByMsid: typeof getOrderByMsid;
  type restaurantsV3Order_universal_d_GetOrderByMsidOptions = GetOrderByMsidOptions;
  const restaurantsV3Order_universal_d_listOrdersByMsid: typeof listOrdersByMsid;
  type restaurantsV3Order_universal_d_ListOrdersByMsidOptions = ListOrdersByMsidOptions;
  const restaurantsV3Order_universal_d_notifyOrderEvent: typeof notifyOrderEvent;
  type restaurantsV3Order_universal_d_NotifyOrderEventOptions = NotifyOrderEventOptions;
  namespace restaurantsV3Order_universal_d {
    export {
      restaurantsV3Order_universal_d_Order as Order,
      restaurantsV3Order_universal_d_Status as Status,
      restaurantsV3Order_universal_d_LineItem as LineItem,
      restaurantsV3Order_universal_d_LineItemOption as LineItemOption,
      restaurantsV3Order_universal_d_DisplayType as DisplayType,
      restaurantsV3Order_universal_d_LineItemOptionItem as LineItemOptionItem,
      restaurantsV3Order_universal_d_CatalogReference as CatalogReference,
      restaurantsV3Order_universal_d_Discount as Discount,
      restaurantsV3Order_universal_d_DiscountType as DiscountType,
      restaurantsV3Order_universal_d_Coupon as Coupon,
      restaurantsV3Order_universal_d_Payment as Payment,
      restaurantsV3Order_universal_d_PaymentType as PaymentType,
      restaurantsV3Order_universal_d_Fulfillment as Fulfillment,
      restaurantsV3Order_universal_d_FulfillmentDetailsOneOf as FulfillmentDetailsOneOf,
      restaurantsV3Order_universal_d_FulfillmentType as FulfillmentType,
      restaurantsV3Order_universal_d_DeliveryDetails as DeliveryDetails,
      restaurantsV3Order_universal_d_DeliveryDetailsProviderOneOf as DeliveryDetailsProviderOneOf,
      restaurantsV3Order_universal_d_DeliveryAddress as DeliveryAddress,
      restaurantsV3Order_universal_d_OnArrival as OnArrival,
      restaurantsV3Order_universal_d_DeliveryAddressLocation as DeliveryAddressLocation,
      restaurantsV3Order_universal_d_Restaurant as Restaurant,
      restaurantsV3Order_universal_d_ExternalProvider as ExternalProvider,
      restaurantsV3Order_universal_d_PickupInfo as PickupInfo,
      restaurantsV3Order_universal_d_DropOffInfo as DropOffInfo,
      restaurantsV3Order_universal_d_PickupDetails as PickupDetails,
      restaurantsV3Order_universal_d_Curbside as Curbside,
      restaurantsV3Order_universal_d_DineInDetails as DineInDetails,
      restaurantsV3Order_universal_d_Customer as Customer,
      restaurantsV3Order_universal_d_CustomerIdOneOf as CustomerIdOneOf,
      restaurantsV3Order_universal_d_Totals as Totals,
      restaurantsV3Order_universal_d_ServiceFee as ServiceFee,
      restaurantsV3Order_universal_d_Money as Money,
      restaurantsV3Order_universal_d_Activity as Activity,
      restaurantsV3Order_universal_d_ChannelInfo as ChannelInfo,
      restaurantsV3Order_universal_d_Type as Type,
      restaurantsV3Order_universal_d_LoyaltyInfo as LoyaltyInfo,
      restaurantsV3Order_universal_d_PosInfo as PosInfo,
      restaurantsV3Order_universal_d_Error as Error,
      restaurantsV3Order_universal_d_PosInfoExternalProvider as PosInfoExternalProvider,
      restaurantsV3Order_universal_d_GetTotalActiveOrdersRequest as GetTotalActiveOrdersRequest,
      restaurantsV3Order_universal_d_GetTotalActiveOrdersResponse as GetTotalActiveOrdersResponse,
      restaurantsV3Order_universal_d_LocationToAmount as LocationToAmount,
      restaurantsV3Order_universal_d_NewOrder as NewOrder,
      restaurantsV3Order_universal_d_GetOrderRequest as GetOrderRequest,
      restaurantsV3Order_universal_d_GetOrderResponse as GetOrderResponse,
      restaurantsV3Order_universal_d_ListOrdersRequest as ListOrdersRequest,
      restaurantsV3Order_universal_d_Sort as Sort,
      restaurantsV3Order_universal_d_FieldName as FieldName,
      restaurantsV3Order_universal_d_SortOrder as SortOrder,
      restaurantsV3Order_universal_d_CursorPaging as CursorPaging,
      restaurantsV3Order_universal_d_ListOrdersResponse as ListOrdersResponse,
      restaurantsV3Order_universal_d_PagingMetadataV2 as PagingMetadataV2,
      restaurantsV3Order_universal_d_Cursors as Cursors,
      restaurantsV3Order_universal_d_AcceptOrderRequest as AcceptOrderRequest,
      restaurantsV3Order_universal_d_AcceptOrderRequestDeliveryTimeOneOf as AcceptOrderRequestDeliveryTimeOneOf,
      restaurantsV3Order_universal_d_AcceptOrderResponse as AcceptOrderResponse,
      restaurantsV3Order_universal_d_OrderAccepted as OrderAccepted,
      restaurantsV3Order_universal_d_CancelOrderRequest as CancelOrderRequest,
      restaurantsV3Order_universal_d_CancelOrderResponse as CancelOrderResponse,
      restaurantsV3Order_universal_d_OrderCanceled as OrderCanceled,
      restaurantsV3Order_universal_d_FulfillOrderRequest as FulfillOrderRequest,
      restaurantsV3Order_universal_d_FulfillOrderResponse as FulfillOrderResponse,
      restaurantsV3Order_universal_d_OrderFulfilled as OrderFulfilled,
      restaurantsV3Order_universal_d_CountOrdersRequest as CountOrdersRequest,
      restaurantsV3Order_universal_d_CountOrdersQuery as CountOrdersQuery,
      restaurantsV3Order_universal_d_DateRangeFilter as DateRangeFilter,
      restaurantsV3Order_universal_d_CountOrdersResponse as CountOrdersResponse,
      restaurantsV3Order_universal_d_DomainEvent as DomainEvent,
      restaurantsV3Order_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      restaurantsV3Order_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      restaurantsV3Order_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      restaurantsV3Order_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      restaurantsV3Order_universal_d_ActionEvent as ActionEvent,
      restaurantsV3Order_universal_d_NotifyOrderEventRequest as NotifyOrderEventRequest,
      restaurantsV3Order_universal_d_EventType as EventType,
      restaurantsV3Order_universal_d_Empty as Empty,
      restaurantsV3Order_universal_d_GetOrderByMsidRequest as GetOrderByMsidRequest,
      restaurantsV3Order_universal_d_GetOrderByMsidResponse as GetOrderByMsidResponse,
      restaurantsV3Order_universal_d_ListOrdersByMsidRequest as ListOrdersByMsidRequest,
      restaurantsV3Order_universal_d_ListOrdersByMsidResponse as ListOrdersByMsidResponse,
      restaurantsV3Order_universal_d_NotifyOrderEventResponse as NotifyOrderEventResponse,
      restaurantsV3Order_universal_d_getTotalActiveOrders as getTotalActiveOrders,
      restaurantsV3Order_universal_d_GetTotalActiveOrdersOptions as GetTotalActiveOrdersOptions,
      restaurantsV3Order_universal_d_getOrder as getOrder,
      restaurantsV3Order_universal_d_GetOrderOptions as GetOrderOptions,
      restaurantsV3Order_universal_d_listOrders as listOrders,
      restaurantsV3Order_universal_d_ListOrdersOptions as ListOrdersOptions,
      restaurantsV3Order_universal_d_acceptOrder as acceptOrder,
      restaurantsV3Order_universal_d_AcceptOrderOptions as AcceptOrderOptions,
      restaurantsV3Order_universal_d_cancelOrder as cancelOrder,
      restaurantsV3Order_universal_d_CancelOrderOptions as CancelOrderOptions,
      restaurantsV3Order_universal_d_fulfillOrder as fulfillOrder,
      restaurantsV3Order_universal_d_countOrders as countOrders,
      restaurantsV3Order_universal_d_CountOrdersOptions as CountOrdersOptions,
      restaurantsV3Order_universal_d_getOrderByMsid as getOrderByMsid,
      restaurantsV3Order_universal_d_GetOrderByMsidOptions as GetOrderByMsidOptions,
      restaurantsV3Order_universal_d_listOrdersByMsid as listOrdersByMsid,
      restaurantsV3Order_universal_d_ListOrdersByMsidOptions as ListOrdersByMsidOptions,
      restaurantsV3Order_universal_d_notifyOrderEvent as notifyOrderEvent,
      restaurantsV3Order_universal_d_NotifyOrderEventOptions as NotifyOrderEventOptions,
    };
  }
  
  export { restaurantsCatalogsV3Catalog_universal_d as catalogs, restaurantsCatalogsV3Discount_universal_d as discount, restaurantsFulfillmentsV3FulfillmentMethod_universal_d as fulfillemtMethods, restaurantsV1FulfillmentMethod_universal_d as fulfillmentMethods, localdeliveryV1Tpa_universal_d as localDelivery, localdeliverySpiV1Tpa_universal_d as localDeliverySpi, restaurantsOperationsV1Operation_universal_d as operations, restaurantsOrdersettingsV3OrderSettings_universal_d as orderSettings, restaurantsV3Order_universal_d as orders, restaurantsPostpaapiV1Configuration_universal_d as posTpa, restaurantsRestaurantlocationsV3RestaurantLocation_universal_d as restaurantLocations };
}
