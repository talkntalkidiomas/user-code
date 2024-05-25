declare module "wix-os-backend" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface Location {
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
      locationType?: LocationType;
      /** Fax number. */
      fax?: string | null;
      /** Timezone in `America/New_York` format. */
      timeZone?: string | null;
      /** Email address. */
      email?: string | null;
      /** Phone number. */
      phone?: string | null;
      /** Address. */
      address?: Address;
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
  enum LocationType {
      UNKNOWN = "UNKNOWN",
      BRANCH = "BRANCH",
      OFFICES = "OFFICES",
      RECEPTION = "RECEPTION",
      HEADQUARTERS = "HEADQUARTERS"
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
  interface CreateLocationRequest {
      /** Location to create. */
      location: Location;
  }
  interface CreateLocationResponse {
      /** Created location. */
      location?: Location;
  }
  interface BulkCreateLocationRequest {
      /** Locations to create. */
      locations: Location[];
  }
  interface BulkCreateLocationResponse {
      /** Locations that were created. */
      successfulLocations?: Location[];
      /** Locations that failed. */
      failedLocations?: FailedCreateLocation[];
  }
  interface FailedCreateLocation {
      /** Location that couldn't be created. */
      location?: Location;
      /** Error message. */
      errorMessage?: string;
  }
  interface GetLocationRequest {
      /** ID of the location to retrieve. */
      _id: string;
  }
  interface GetLocationResponse {
      /** Retrieved location. */
      location?: Location;
  }
  interface ListLocationsRequest {
      /** [Sort order](https://bo.wix.com/wix-docs/rest/crm/contacts/sort-and-filter). */
      sort?: Sorting;
      /** [Pagination](https://bo.wix.com/wix-docs/rest/crm/contacts/pagination), defaults to offset = 0 and limit = 50 (max limit 1,000). */
      paging?: Paging;
      /** Whether to include `archived` locations in the response. Defaults to `false`. */
      includeArchived?: boolean;
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
  interface ListLocationsResponse {
      /** Retrieved locations. */
      locations?: Location[];
      /** Paging info. */
      pagingMetadata?: PagingMetadata;
  }
  interface PagingMetadata {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      offset?: number | null;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       */
      hasNext?: boolean | null;
  }
  interface UpdateLocationRequest {
      /** Location to update. */
      location: Location;
  }
  interface UpdateLocationResponse {
      /** Updated location. */
      location?: Location;
  }
  interface BulkUpdateLocationRequest {
      /** Locations to update. */
      locations: Location[];
  }
  interface BulkUpdateLocationResponse {
      /** Locations that were updated. */
      successfulLocations?: Location[];
      /** Locations that failed. */
      failedLocations?: FailedUpdateLocation[];
  }
  interface FailedUpdateLocation {
      /** Location that couldn't be updated. */
      _id?: string;
      /** Error message. */
      errorMessage?: string;
  }
  interface QueryLocationsRequest {
      /** Information about the filters, sorting, and paging. */
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
  interface QueryLocationsResponse {
      /** Retrieved locations. */
      locations?: Location[];
      /** Paging info. */
      pagingMetadata?: PagingMetadata;
  }
  interface SetDefaultLocationRequest {
      /** ID of the location to set as default. */
      _id: string;
  }
  interface SetDefaultLocationResponse {
      /** New default location. */
      location?: Location;
  }
  interface SetDefaultLocation {
      /** Previous default location id. */
      prevDefaultLocationId?: string;
      /** Current default location id. */
      currDefaultLocationId?: string;
  }
  interface ArchiveLocationRequest {
      /** ID of the location to archive. */
      _id: string;
  }
  interface ArchiveLocationResponse {
      /** Archived location. */
      location?: Location;
  }
  interface ArchiveLocation {
      _id?: string;
  }
  /**
   * Creates a location.
   * @param location - Location to create.
   * @public
   * @documentationMaturity preview
   * @requiredField location
   * @requiredField location.address
   * @requiredField location.name
   * @requiredField location.timeZone
   */
  function createLocation(location: Location): Promise<CreateLocationResponse>;
  /**
   * Creates locations in bulk.
   * @param locations - Locations to create.
   * @documentationMaturity preview
   * @requiredField locations
   */
  function bulkCreateLocation(locations: Location[]): Promise<BulkCreateLocationResponse>;
  /**
   * Retrieves a location.
   * @param _id - ID of the location to retrieve.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   */
  function getLocation(_id: string): Promise<GetLocationResponse>;
  /**
   * Retrieves locations, given the provided filters, sorting, and paging.
   * @public
   * @documentationMaturity preview
   */
  function listLocations(options?: ListLocationsOptions): Promise<ListLocationsResponse>;
  interface ListLocationsOptions {
      /** [Sort order](https://bo.wix.com/wix-docs/rest/crm/contacts/sort-and-filter). */
      sort?: Sorting;
      /** [Pagination](https://bo.wix.com/wix-docs/rest/crm/contacts/pagination), defaults to offset = 0 and limit = 50 (max limit 1,000). */
      paging?: Paging;
      /** Whether to include `archived` locations in the response. Defaults to `false`. */
      includeArchived?: boolean;
  }
  /**
   * Replaces a location.
   *
   * > **Note:** Currently, it isn't possible to partially update a location. Therefore, you'll need to pass the full location object in the body of the call.
   * @param _id - Location ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField location
   * @requiredField location.address
   * @requiredField location.name
   * @requiredField location.timeZone
   */
  function updateLocation(_id: string | null, location: UpdateLocation): Promise<UpdateLocationResponse>;
  interface UpdateLocation {
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
      locationType?: LocationType;
      /** Fax number. */
      fax?: string | null;
      /** Timezone in `America/New_York` format. */
      timeZone?: string | null;
      /** Email address. */
      email?: string | null;
      /** Phone number. */
      phone?: string | null;
      /** Address. */
      address?: Address;
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
  /**
   * Replaces locations in bulk.
   * > **Note:** Currently, it isn't possible to partially update a location. Therefore, you'll need to pass the full location object in the body of the call.
   * @param locations - Locations to update.
   * @documentationMaturity preview
   * @requiredField locations
   */
  function bulkUpdateLocation(locations: Location[]): Promise<BulkUpdateLocationResponse>;
  /**
   * Retrieves locations, given the provided filters, sorting, and paging.
   * @public
   * @documentationMaturity preview
   */
  function queryLocations(options?: QueryLocationsOptions): Promise<QueryLocationsResponse>;
  interface QueryLocationsOptions {
      /** Information about the filters, sorting, and paging. */
      query?: Query;
  }
  /**
   * Sets a new default location.
   *
   * > **Notes:**
   * > + There can only be one default location per site.
   * > + The default location can't be archived.
   * @param _id - ID of the location to set as default.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   */
  function setDefaultLocation(_id: string): Promise<SetDefaultLocationResponse>;
  /**
   * Archives a location.
   *
   * > **Notes:**
   * > + Changes the `archived` boolean of a location to `true`.
   * > + You can't change a location's `status` using this endpoint.
   * > + Archived locations can't be updated.
   * > + Currently, it isn't possible to unarchive locations.
   * > + The `default` location can't be archived.
   * @param _id - ID of the location to archive.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   */
  function archiveLocation(_id: string): Promise<ArchiveLocationResponse>;
  
  const locationsV1Location_universal_d___debug: typeof __debug;
  type locationsV1Location_universal_d_Location = Location;
  type locationsV1Location_universal_d_LocationStatus = LocationStatus;
  const locationsV1Location_universal_d_LocationStatus: typeof LocationStatus;
  type locationsV1Location_universal_d_LocationType = LocationType;
  const locationsV1Location_universal_d_LocationType: typeof LocationType;
  type locationsV1Location_universal_d_Address = Address;
  type locationsV1Location_universal_d_StreetAddress = StreetAddress;
  type locationsV1Location_universal_d_AddressLocation = AddressLocation;
  type locationsV1Location_universal_d_BusinessSchedule = BusinessSchedule;
  type locationsV1Location_universal_d_TimePeriod = TimePeriod;
  type locationsV1Location_universal_d_DayOfWeek = DayOfWeek;
  const locationsV1Location_universal_d_DayOfWeek: typeof DayOfWeek;
  type locationsV1Location_universal_d_SpecialHourPeriod = SpecialHourPeriod;
  type locationsV1Location_universal_d_CreateLocationRequest = CreateLocationRequest;
  type locationsV1Location_universal_d_CreateLocationResponse = CreateLocationResponse;
  type locationsV1Location_universal_d_BulkCreateLocationRequest = BulkCreateLocationRequest;
  type locationsV1Location_universal_d_BulkCreateLocationResponse = BulkCreateLocationResponse;
  type locationsV1Location_universal_d_FailedCreateLocation = FailedCreateLocation;
  type locationsV1Location_universal_d_GetLocationRequest = GetLocationRequest;
  type locationsV1Location_universal_d_GetLocationResponse = GetLocationResponse;
  type locationsV1Location_universal_d_ListLocationsRequest = ListLocationsRequest;
  type locationsV1Location_universal_d_Sorting = Sorting;
  type locationsV1Location_universal_d_SortOrder = SortOrder;
  const locationsV1Location_universal_d_SortOrder: typeof SortOrder;
  type locationsV1Location_universal_d_Paging = Paging;
  type locationsV1Location_universal_d_ListLocationsResponse = ListLocationsResponse;
  type locationsV1Location_universal_d_PagingMetadata = PagingMetadata;
  type locationsV1Location_universal_d_UpdateLocationRequest = UpdateLocationRequest;
  type locationsV1Location_universal_d_UpdateLocationResponse = UpdateLocationResponse;
  type locationsV1Location_universal_d_BulkUpdateLocationRequest = BulkUpdateLocationRequest;
  type locationsV1Location_universal_d_BulkUpdateLocationResponse = BulkUpdateLocationResponse;
  type locationsV1Location_universal_d_FailedUpdateLocation = FailedUpdateLocation;
  type locationsV1Location_universal_d_QueryLocationsRequest = QueryLocationsRequest;
  type locationsV1Location_universal_d_Query = Query;
  type locationsV1Location_universal_d_QueryLocationsResponse = QueryLocationsResponse;
  type locationsV1Location_universal_d_SetDefaultLocationRequest = SetDefaultLocationRequest;
  type locationsV1Location_universal_d_SetDefaultLocationResponse = SetDefaultLocationResponse;
  type locationsV1Location_universal_d_SetDefaultLocation = SetDefaultLocation;
  type locationsV1Location_universal_d_ArchiveLocationRequest = ArchiveLocationRequest;
  type locationsV1Location_universal_d_ArchiveLocationResponse = ArchiveLocationResponse;
  type locationsV1Location_universal_d_ArchiveLocation = ArchiveLocation;
  const locationsV1Location_universal_d_createLocation: typeof createLocation;
  const locationsV1Location_universal_d_bulkCreateLocation: typeof bulkCreateLocation;
  const locationsV1Location_universal_d_getLocation: typeof getLocation;
  const locationsV1Location_universal_d_listLocations: typeof listLocations;
  type locationsV1Location_universal_d_ListLocationsOptions = ListLocationsOptions;
  const locationsV1Location_universal_d_updateLocation: typeof updateLocation;
  type locationsV1Location_universal_d_UpdateLocation = UpdateLocation;
  const locationsV1Location_universal_d_bulkUpdateLocation: typeof bulkUpdateLocation;
  const locationsV1Location_universal_d_queryLocations: typeof queryLocations;
  type locationsV1Location_universal_d_QueryLocationsOptions = QueryLocationsOptions;
  const locationsV1Location_universal_d_setDefaultLocation: typeof setDefaultLocation;
  const locationsV1Location_universal_d_archiveLocation: typeof archiveLocation;
  namespace locationsV1Location_universal_d {
    export {
      locationsV1Location_universal_d___debug as __debug,
      locationsV1Location_universal_d_Location as Location,
      locationsV1Location_universal_d_LocationStatus as LocationStatus,
      locationsV1Location_universal_d_LocationType as LocationType,
      locationsV1Location_universal_d_Address as Address,
      locationsV1Location_universal_d_StreetAddress as StreetAddress,
      locationsV1Location_universal_d_AddressLocation as AddressLocation,
      locationsV1Location_universal_d_BusinessSchedule as BusinessSchedule,
      locationsV1Location_universal_d_TimePeriod as TimePeriod,
      locationsV1Location_universal_d_DayOfWeek as DayOfWeek,
      locationsV1Location_universal_d_SpecialHourPeriod as SpecialHourPeriod,
      locationsV1Location_universal_d_CreateLocationRequest as CreateLocationRequest,
      locationsV1Location_universal_d_CreateLocationResponse as CreateLocationResponse,
      locationsV1Location_universal_d_BulkCreateLocationRequest as BulkCreateLocationRequest,
      locationsV1Location_universal_d_BulkCreateLocationResponse as BulkCreateLocationResponse,
      locationsV1Location_universal_d_FailedCreateLocation as FailedCreateLocation,
      locationsV1Location_universal_d_GetLocationRequest as GetLocationRequest,
      locationsV1Location_universal_d_GetLocationResponse as GetLocationResponse,
      locationsV1Location_universal_d_ListLocationsRequest as ListLocationsRequest,
      locationsV1Location_universal_d_Sorting as Sorting,
      locationsV1Location_universal_d_SortOrder as SortOrder,
      locationsV1Location_universal_d_Paging as Paging,
      locationsV1Location_universal_d_ListLocationsResponse as ListLocationsResponse,
      locationsV1Location_universal_d_PagingMetadata as PagingMetadata,
      locationsV1Location_universal_d_UpdateLocationRequest as UpdateLocationRequest,
      locationsV1Location_universal_d_UpdateLocationResponse as UpdateLocationResponse,
      locationsV1Location_universal_d_BulkUpdateLocationRequest as BulkUpdateLocationRequest,
      locationsV1Location_universal_d_BulkUpdateLocationResponse as BulkUpdateLocationResponse,
      locationsV1Location_universal_d_FailedUpdateLocation as FailedUpdateLocation,
      locationsV1Location_universal_d_QueryLocationsRequest as QueryLocationsRequest,
      locationsV1Location_universal_d_Query as Query,
      locationsV1Location_universal_d_QueryLocationsResponse as QueryLocationsResponse,
      locationsV1Location_universal_d_SetDefaultLocationRequest as SetDefaultLocationRequest,
      locationsV1Location_universal_d_SetDefaultLocationResponse as SetDefaultLocationResponse,
      locationsV1Location_universal_d_SetDefaultLocation as SetDefaultLocation,
      locationsV1Location_universal_d_ArchiveLocationRequest as ArchiveLocationRequest,
      locationsV1Location_universal_d_ArchiveLocationResponse as ArchiveLocationResponse,
      locationsV1Location_universal_d_ArchiveLocation as ArchiveLocation,
      locationsV1Location_universal_d_createLocation as createLocation,
      locationsV1Location_universal_d_bulkCreateLocation as bulkCreateLocation,
      locationsV1Location_universal_d_getLocation as getLocation,
      locationsV1Location_universal_d_listLocations as listLocations,
      locationsV1Location_universal_d_ListLocationsOptions as ListLocationsOptions,
      locationsV1Location_universal_d_updateLocation as updateLocation,
      locationsV1Location_universal_d_UpdateLocation as UpdateLocation,
      locationsV1Location_universal_d_bulkUpdateLocation as bulkUpdateLocation,
      locationsV1Location_universal_d_queryLocations as queryLocations,
      locationsV1Location_universal_d_QueryLocationsOptions as QueryLocationsOptions,
      locationsV1Location_universal_d_setDefaultLocation as setDefaultLocation,
      locationsV1Location_universal_d_archiveLocation as archiveLocation,
    };
  }
  
  export { locationsV1Location_universal_d as siteManagement };
}
