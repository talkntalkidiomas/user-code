declare module "wix-events-backend.v2" {
  const __debug$1: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /** Each event can have up to 3 policies - free-text that define terms & conditions, refunds & exchanges and/or other policies, as relevant. */
  interface Policy {
      /**
       * Policy ID. (generated automatically)
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of Policy. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision
       * @readonly
       */
      revision?: string | null;
      /**
       * Date policy was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date policy was updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Policy name. */
      name?: string;
      /** Policy body. */
      body?: string;
      /** Event ID. */
      eventId?: string;
  }
  interface CreatePolicyRequest {
      /** An Event Policy to be created */
      policy: Policy;
  }
  interface CreatePolicyResponse {
      /** The Event Policy that was created */
      policy?: Policy;
  }
  interface UpdatePolicyRequest {
      /** Event Policy to update */
      policy: Policy;
      /**
       * Explicit list of fields to update
       * @internal
       */
      mask?: string[];
  }
  interface UpdatePolicyResponse {
      /** The updated Event Policy */
      policy?: Policy;
  }
  interface UpdatePolicySortIndexRequest {
      /** Policy's ID */
      policyId?: string;
      /** The revision of the Event Policy */
      revision?: string;
      /** the sort index of a policy to set */
      sortIndex?: number;
  }
  interface UpdatePolicySortIndexResponse {
      /** the updated Event Policy */
      policy?: Policy;
  }
  interface DeletePolicyRequest {
      /** Event Policy to delete */
      policyId: string;
      /** The revision of the Event Policy */
      revision?: string;
  }
  interface DeletePolicyResponse {
  }
  interface QueryPoliciesRequest {
      /** WQL expression */
      query: QueryV2$1;
  }
  interface QueryV2$1 extends QueryV2PagingMethodOneOf$1 {
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
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$1;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$1;
  }
  /** @oneof */
  interface QueryV2PagingMethodOneOf$1 {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$1;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$1;
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
  interface Paging$1 {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
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
  interface QueryPoliciesResponse {
      /** Event Policies */
      policies?: Policy[];
      /** Query result's metadata */
      metadata?: PagingMetadataV2$1;
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
  interface Cursors$1 {
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  interface ReorderEventPoliciesRequest extends ReorderEventPoliciesRequestReferencePolicyOneOf {
      /** Event ID */
      eventId?: string;
      /** Event Policy ID */
      policyId?: string;
      /** Move the Event Policy Id before this Event Policy ID */
      beforePolicyId?: string;
      /** Move the Event Policy Id after this Event Policy ID */
      afterPolicyId?: string;
  }
  /** @oneof */
  interface ReorderEventPoliciesRequestReferencePolicyOneOf {
      /** Move the Event Policy Id before this Event Policy ID */
      beforePolicyId?: string;
      /** Move the Event Policy Id after this Event Policy ID */
      afterPolicyId?: string;
  }
  interface ReorderEventPoliciesResponse {
      /** Ordered Event Policies */
      policies?: Policy[];
  }
  interface GetEventPoliciesRequest {
      /** Event Id */
      eventId: string;
  }
  interface GetEventPoliciesResponse {
      /** All policies of a particular event */
      policies?: Policy[];
  }
  interface EventCopied {
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
      /**
       * Map of copied ticket definitions from original event.
       * Key represents ticket def id in the original event.
       * Value represents ticket def id in the newly created event.
       */
      ticketDefinitions?: Record<string, string>;
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
      fullAddress?: Address$1;
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
  interface Address$1 extends AddressStreetOneOf$1 {
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
      /** a break down of the street to number and street name */
      streetAddress?: StreetAddress$1;
      /** Main address line (usually street and number) as free text */
      addressLine1?: string | null;
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
      /** @internal */
      apt?: string;
  }
  interface AddressLocation$1 {
      latitude?: number | null;
      longitude?: number | null;
  }
  interface Subdivision$1 {
      /** subdivision short code */
      code?: string;
      /** subdivision full-name */
      name?: string;
      /** @internal */
      type?: SubdivisionType$1;
      /** @internal */
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
  interface Empty$1 {
  }
  /**
   * Creates a policy for an event.
   * Each event can have up to 3 policies.
   * @param policy - An Event Policy to be created
   * @public
   * @requiredField policy
   * @requiredField policy.body
   * @requiredField policy.eventId
   * @requiredField policy.name
   */
  function createPolicy(policy: Policy): Promise<CreatePolicyResponse>;
  /**
   * Updates a policy.
   * @param _id - Policy ID. (generated automatically)
   * @public
   * @requiredField _id
   * @requiredField policy
   * @requiredField policy.body
   * @requiredField policy.eventId
   * @requiredField policy.name
   */
  function updatePolicy(_id: string | null, policy: UpdatePolicy, options?: UpdatePolicyOptions): Promise<UpdatePolicyResponse>;
  interface UpdatePolicy {
      /**
       * Policy ID. (generated automatically)
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of Policy. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision
       * @readonly
       */
      revision?: string | null;
      /**
       * Date policy was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date policy was updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Policy name. */
      name?: string;
      /** Policy body. */
      body?: string;
      /** Event ID. */
      eventId?: string;
  }
  interface UpdatePolicyOptions {
      /**
       * Explicit list of fields to update
       * @internal
       */
      mask?: string[];
  }
  /**
   * Deletes a policy.
   * @param policyId - Event Policy to delete
   * @public
   * @requiredField policyId
   */
  function deletePolicy(policyId: string, options?: DeletePolicyOptions): Promise<void>;
  interface DeletePolicyOptions {
      /** The revision of the Event Policy */
      revision?: string;
  }
  /**
   * Retrieves a list of policies, given the provided paging and filter.
   * @param query - WQL expression
   * @public
   * @requiredField query
   */
  function queryPolicies(query: QueryV2$1): Promise<QueryPoliciesResponse>;
  /**
   * Change the order of Event Policies
   * @public */
  function reorderEventPolicies(options?: ReorderEventPoliciesOptions): Promise<ReorderEventPoliciesResponse>;
  interface ReorderEventPoliciesOptions {
      /** Event ID */
      eventId?: string;
      /** Event Policy ID */
      policyId?: string;
      /** Move the Event Policy Id before this Event Policy ID */
      beforePolicyId?: string;
      /** Move the Event Policy Id after this Event Policy ID */
      afterPolicyId?: string;
  }
  /**
   * Get all Event Policies of an Event
   * @param eventId - Event Id
   * @public
   * @requiredField eventId
   */
  function getEventPolicies(eventId: string): Promise<GetEventPoliciesResponse>;
  
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
  type eventsV2Policy_universal_d_GetEventPoliciesRequest = GetEventPoliciesRequest;
  type eventsV2Policy_universal_d_GetEventPoliciesResponse = GetEventPoliciesResponse;
  type eventsV2Policy_universal_d_EventCopied = EventCopied;
  type eventsV2Policy_universal_d_Location = Location;
  type eventsV2Policy_universal_d_MapCoordinates = MapCoordinates;
  type eventsV2Policy_universal_d_LocationType = LocationType;
  const eventsV2Policy_universal_d_LocationType: typeof LocationType;
  type eventsV2Policy_universal_d_ScheduleConfig = ScheduleConfig;
  type eventsV2Policy_universal_d_Recurrences = Recurrences;
  type eventsV2Policy_universal_d_Occurrence = Occurrence;
  type eventsV2Policy_universal_d_Status = Status;
  const eventsV2Policy_universal_d_Status: typeof Status;
  type eventsV2Policy_universal_d_EventStatus = EventStatus;
  const eventsV2Policy_universal_d_EventStatus: typeof EventStatus;
  const eventsV2Policy_universal_d_createPolicy: typeof createPolicy;
  const eventsV2Policy_universal_d_updatePolicy: typeof updatePolicy;
  type eventsV2Policy_universal_d_UpdatePolicy = UpdatePolicy;
  type eventsV2Policy_universal_d_UpdatePolicyOptions = UpdatePolicyOptions;
  const eventsV2Policy_universal_d_deletePolicy: typeof deletePolicy;
  type eventsV2Policy_universal_d_DeletePolicyOptions = DeletePolicyOptions;
  const eventsV2Policy_universal_d_queryPolicies: typeof queryPolicies;
  const eventsV2Policy_universal_d_reorderEventPolicies: typeof reorderEventPolicies;
  type eventsV2Policy_universal_d_ReorderEventPoliciesOptions = ReorderEventPoliciesOptions;
  const eventsV2Policy_universal_d_getEventPolicies: typeof getEventPolicies;
  namespace eventsV2Policy_universal_d {
    export {
      __debug$1 as __debug,
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
      QueryV2$1 as QueryV2,
      QueryV2PagingMethodOneOf$1 as QueryV2PagingMethodOneOf,
      Sorting$1 as Sorting,
      SortOrder$1 as SortOrder,
      Paging$1 as Paging,
      CursorPaging$1 as CursorPaging,
      eventsV2Policy_universal_d_QueryPoliciesResponse as QueryPoliciesResponse,
      PagingMetadataV2$1 as PagingMetadataV2,
      Cursors$1 as Cursors,
      eventsV2Policy_universal_d_ReorderEventPoliciesRequest as ReorderEventPoliciesRequest,
      eventsV2Policy_universal_d_ReorderEventPoliciesRequestReferencePolicyOneOf as ReorderEventPoliciesRequestReferencePolicyOneOf,
      eventsV2Policy_universal_d_ReorderEventPoliciesResponse as ReorderEventPoliciesResponse,
      eventsV2Policy_universal_d_GetEventPoliciesRequest as GetEventPoliciesRequest,
      eventsV2Policy_universal_d_GetEventPoliciesResponse as GetEventPoliciesResponse,
      eventsV2Policy_universal_d_EventCopied as EventCopied,
      eventsV2Policy_universal_d_Location as Location,
      eventsV2Policy_universal_d_MapCoordinates as MapCoordinates,
      eventsV2Policy_universal_d_LocationType as LocationType,
      Address$1 as Address,
      AddressStreetOneOf$1 as AddressStreetOneOf,
      StreetAddress$1 as StreetAddress,
      AddressLocation$1 as AddressLocation,
      Subdivision$1 as Subdivision,
      SubdivisionType$1 as SubdivisionType,
      eventsV2Policy_universal_d_ScheduleConfig as ScheduleConfig,
      eventsV2Policy_universal_d_Recurrences as Recurrences,
      eventsV2Policy_universal_d_Occurrence as Occurrence,
      eventsV2Policy_universal_d_Status as Status,
      eventsV2Policy_universal_d_EventStatus as EventStatus,
      Empty$1 as Empty,
      eventsV2Policy_universal_d_createPolicy as createPolicy,
      eventsV2Policy_universal_d_updatePolicy as updatePolicy,
      eventsV2Policy_universal_d_UpdatePolicy as UpdatePolicy,
      eventsV2Policy_universal_d_UpdatePolicyOptions as UpdatePolicyOptions,
      eventsV2Policy_universal_d_deletePolicy as deletePolicy,
      eventsV2Policy_universal_d_DeletePolicyOptions as DeletePolicyOptions,
      eventsV2Policy_universal_d_queryPolicies as queryPolicies,
      eventsV2Policy_universal_d_reorderEventPolicies as reorderEventPolicies,
      eventsV2Policy_universal_d_ReorderEventPoliciesOptions as ReorderEventPoliciesOptions,
      eventsV2Policy_universal_d_getEventPolicies as getEventPolicies,
    };
  }
  
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface EventGuest {
      /** Guest id. */
      _id?: string | null;
      /** Event id. */
      eventId?: string | null;
      /** Rsvp id. Available only when Guest type is RSVP. */
      rsvpId?: string | null;
      /** Order number. Available only when Guest type is ORDER or TICKET. */
      orderNumber?: string | null;
      /** Ticket number. Available only when Guest type is ORDER or TICKET. */
      ticketNumber?: string | null;
      /** List of bought tickets. */
      tickets?: string[];
      /** CRM contact ID for the person who is a guest. */
      contactId?: string | null;
      /** Guest details. */
      guestDetails?: GuestDetails;
      /** Attendance status */
      attendanceStatus?: AttendanceStatus;
      /** Secondary language code. */
      secondaryLanguageCode?: string | null;
      /** Date and time when the guest was created. */
      _createdDate?: Date;
      /** Date and time when the guest was updated. */
      _updatedDate?: Date;
      /** The last date and time when the guest attendance status was updated. */
      attendanceStatusUpdatedDate?: Date;
      /** Site member id. */
      memberId?: string | null;
      /** Guest source. */
      guestSource?: GuestSource;
  }
  interface GuestDetails {
      /** Email. */
      email?: string | null;
      /** First name. */
      firstName?: string | null;
      /** Last name. */
      lastName?: string | null;
      /** Form response. */
      formResponse?: FormResponse;
      /** Indicates if guests is checked in. */
      checkedIn?: boolean;
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
  enum AttendanceStatus {
      /** Not attending. */
      NOT_ATTENDING = "NOT_ATTENDING",
      /** Attending. */
      ATTENDING = "ATTENDING",
      /** In a waiting list. */
      IN_WAITLIST = "IN_WAITLIST"
  }
  enum GuestSource {
      /** Rsvp guest. */
      RSVP = "RSVP",
      /** Order source. */
      ORDER = "ORDER",
      /** Ticket source. */
      TICKET = "TICKET"
  }
  interface QueryEventGuestsRequest {
      /** WQL expression */
      query: QueryV2;
  }
  interface QueryV2 extends QueryV2PagingMethodOneOf {
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
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
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
  interface QueryEventGuestsResponse {
      /** List of guests. */
      guests?: EventGuest[];
      /** Metadata for the paginated results. */
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
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  interface SecondaryLanguagesRequest {
      /** Guest event id. */
      eventId?: string;
  }
  interface SecondaryLanguagesResponse {
      /** Aggregated guests languages. */
      secondaryLanguages?: string[];
  }
  interface RsvpCreated {
      /** RSVP created timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Site language when RSVP created */
      language?: string | null;
      /** Notifications silenced for this domain event. */
      silent?: boolean | null;
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
      rsvpForm?: FormResponse;
      /** RSVP response status. */
      status?: RsvpStatus;
      /** List of all guests. */
      guests?: Guest[];
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
      checkIn?: CheckIn;
      /** Unique guest ID per RSVP. */
      _id?: number;
  }
  interface CheckIn {
      /** Time of check-in */
      created?: Date;
  }
  interface Empty {
  }
  interface RsvpUpdated {
      /** RSVP updated timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Site language when RSVP created */
      language?: string | null;
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
      rsvpForm?: FormResponse;
      /** RSVP response status. */
      status?: RsvpStatus;
      /** List of the guests. */
      guests?: Guest[];
  }
  interface RsvpDeleted {
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
  interface Money {
      /** Decimal amount representation. Deprecated, use `value` instead. */
      amount?: string;
      /** ISO 4217 format of the currency i.e. `USD`. */
      currency?: string;
      /** Monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). Optionally, a single (-), to indicate that the amount is negative. */
      value?: string | null;
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
  /**
   * Query to select guests.
   * Supports efficient filtering by `createdDate`, `eventId`, `attendanceStatus`, `secondaryLanguageCode`, `rsvpId`, `orderNumber`, `ticketNumber`, `memberId` or `guestDetails.checkedIn`
   * @param query - WQL expression
   * @public
   * @requiredField query
   */
  function queryEventGuests(query: QueryV2): Promise<QueryEventGuestsResponse>;
  
  const eventsGuestsV1Guest_universal_d___debug: typeof __debug;
  type eventsGuestsV1Guest_universal_d_EventGuest = EventGuest;
  type eventsGuestsV1Guest_universal_d_GuestDetails = GuestDetails;
  type eventsGuestsV1Guest_universal_d_FormResponse = FormResponse;
  type eventsGuestsV1Guest_universal_d_InputValue = InputValue;
  type eventsGuestsV1Guest_universal_d_FormattedAddress = FormattedAddress;
  type eventsGuestsV1Guest_universal_d_Address = Address;
  type eventsGuestsV1Guest_universal_d_AddressStreetOneOf = AddressStreetOneOf;
  type eventsGuestsV1Guest_universal_d_StreetAddress = StreetAddress;
  type eventsGuestsV1Guest_universal_d_AddressLocation = AddressLocation;
  type eventsGuestsV1Guest_universal_d_Subdivision = Subdivision;
  type eventsGuestsV1Guest_universal_d_SubdivisionType = SubdivisionType;
  const eventsGuestsV1Guest_universal_d_SubdivisionType: typeof SubdivisionType;
  type eventsGuestsV1Guest_universal_d_AttendanceStatus = AttendanceStatus;
  const eventsGuestsV1Guest_universal_d_AttendanceStatus: typeof AttendanceStatus;
  type eventsGuestsV1Guest_universal_d_GuestSource = GuestSource;
  const eventsGuestsV1Guest_universal_d_GuestSource: typeof GuestSource;
  type eventsGuestsV1Guest_universal_d_QueryEventGuestsRequest = QueryEventGuestsRequest;
  type eventsGuestsV1Guest_universal_d_QueryV2 = QueryV2;
  type eventsGuestsV1Guest_universal_d_QueryV2PagingMethodOneOf = QueryV2PagingMethodOneOf;
  type eventsGuestsV1Guest_universal_d_Sorting = Sorting;
  type eventsGuestsV1Guest_universal_d_SortOrder = SortOrder;
  const eventsGuestsV1Guest_universal_d_SortOrder: typeof SortOrder;
  type eventsGuestsV1Guest_universal_d_Paging = Paging;
  type eventsGuestsV1Guest_universal_d_CursorPaging = CursorPaging;
  type eventsGuestsV1Guest_universal_d_QueryEventGuestsResponse = QueryEventGuestsResponse;
  type eventsGuestsV1Guest_universal_d_PagingMetadataV2 = PagingMetadataV2;
  type eventsGuestsV1Guest_universal_d_Cursors = Cursors;
  type eventsGuestsV1Guest_universal_d_SecondaryLanguagesRequest = SecondaryLanguagesRequest;
  type eventsGuestsV1Guest_universal_d_SecondaryLanguagesResponse = SecondaryLanguagesResponse;
  type eventsGuestsV1Guest_universal_d_RsvpCreated = RsvpCreated;
  type eventsGuestsV1Guest_universal_d_RsvpStatus = RsvpStatus;
  const eventsGuestsV1Guest_universal_d_RsvpStatus: typeof RsvpStatus;
  type eventsGuestsV1Guest_universal_d_Guest = Guest;
  type eventsGuestsV1Guest_universal_d_CheckIn = CheckIn;
  type eventsGuestsV1Guest_universal_d_Empty = Empty;
  type eventsGuestsV1Guest_universal_d_RsvpUpdated = RsvpUpdated;
  type eventsGuestsV1Guest_universal_d_RsvpDeleted = RsvpDeleted;
  type eventsGuestsV1Guest_universal_d_OrderUpdated = OrderUpdated;
  type eventsGuestsV1Guest_universal_d_OrderStatus = OrderStatus;
  const eventsGuestsV1Guest_universal_d_OrderStatus: typeof OrderStatus;
  type eventsGuestsV1Guest_universal_d_Ticket = Ticket;
  type eventsGuestsV1Guest_universal_d_Money = Money;
  type eventsGuestsV1Guest_universal_d_OrderDeleted = OrderDeleted;
  type eventsGuestsV1Guest_universal_d_OrderType = OrderType;
  const eventsGuestsV1Guest_universal_d_OrderType: typeof OrderType;
  type eventsGuestsV1Guest_universal_d_Task = Task;
  type eventsGuestsV1Guest_universal_d_TaskKey = TaskKey;
  const eventsGuestsV1Guest_universal_d_queryEventGuests: typeof queryEventGuests;
  namespace eventsGuestsV1Guest_universal_d {
    export {
      eventsGuestsV1Guest_universal_d___debug as __debug,
      eventsGuestsV1Guest_universal_d_EventGuest as EventGuest,
      eventsGuestsV1Guest_universal_d_GuestDetails as GuestDetails,
      eventsGuestsV1Guest_universal_d_FormResponse as FormResponse,
      eventsGuestsV1Guest_universal_d_InputValue as InputValue,
      eventsGuestsV1Guest_universal_d_FormattedAddress as FormattedAddress,
      eventsGuestsV1Guest_universal_d_Address as Address,
      eventsGuestsV1Guest_universal_d_AddressStreetOneOf as AddressStreetOneOf,
      eventsGuestsV1Guest_universal_d_StreetAddress as StreetAddress,
      eventsGuestsV1Guest_universal_d_AddressLocation as AddressLocation,
      eventsGuestsV1Guest_universal_d_Subdivision as Subdivision,
      eventsGuestsV1Guest_universal_d_SubdivisionType as SubdivisionType,
      eventsGuestsV1Guest_universal_d_AttendanceStatus as AttendanceStatus,
      eventsGuestsV1Guest_universal_d_GuestSource as GuestSource,
      eventsGuestsV1Guest_universal_d_QueryEventGuestsRequest as QueryEventGuestsRequest,
      eventsGuestsV1Guest_universal_d_QueryV2 as QueryV2,
      eventsGuestsV1Guest_universal_d_QueryV2PagingMethodOneOf as QueryV2PagingMethodOneOf,
      eventsGuestsV1Guest_universal_d_Sorting as Sorting,
      eventsGuestsV1Guest_universal_d_SortOrder as SortOrder,
      eventsGuestsV1Guest_universal_d_Paging as Paging,
      eventsGuestsV1Guest_universal_d_CursorPaging as CursorPaging,
      eventsGuestsV1Guest_universal_d_QueryEventGuestsResponse as QueryEventGuestsResponse,
      eventsGuestsV1Guest_universal_d_PagingMetadataV2 as PagingMetadataV2,
      eventsGuestsV1Guest_universal_d_Cursors as Cursors,
      eventsGuestsV1Guest_universal_d_SecondaryLanguagesRequest as SecondaryLanguagesRequest,
      eventsGuestsV1Guest_universal_d_SecondaryLanguagesResponse as SecondaryLanguagesResponse,
      eventsGuestsV1Guest_universal_d_RsvpCreated as RsvpCreated,
      eventsGuestsV1Guest_universal_d_RsvpStatus as RsvpStatus,
      eventsGuestsV1Guest_universal_d_Guest as Guest,
      eventsGuestsV1Guest_universal_d_CheckIn as CheckIn,
      eventsGuestsV1Guest_universal_d_Empty as Empty,
      eventsGuestsV1Guest_universal_d_RsvpUpdated as RsvpUpdated,
      eventsGuestsV1Guest_universal_d_RsvpDeleted as RsvpDeleted,
      eventsGuestsV1Guest_universal_d_OrderUpdated as OrderUpdated,
      eventsGuestsV1Guest_universal_d_OrderStatus as OrderStatus,
      eventsGuestsV1Guest_universal_d_Ticket as Ticket,
      eventsGuestsV1Guest_universal_d_Money as Money,
      eventsGuestsV1Guest_universal_d_OrderDeleted as OrderDeleted,
      eventsGuestsV1Guest_universal_d_OrderType as OrderType,
      eventsGuestsV1Guest_universal_d_Task as Task,
      eventsGuestsV1Guest_universal_d_TaskKey as TaskKey,
      eventsGuestsV1Guest_universal_d_queryEventGuests as queryEventGuests,
    };
  }
  
  export { eventsGuestsV1Guest_universal_d as guests, eventsV2Policy_universal_d as policy };
}
