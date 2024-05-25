declare module "wix-business-tools.v2" {
    const __debug$1: {
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
         * Location status.
         *
         * Supported values: `ACTIVE`, `INACTIVE`.
         *
         * Default: `ACTIVE`
         *
         * __Notes:__
         * - [Archiving a location](#archivelocation)
         * doesn't affect the location's status.
         * - `INACTIVE` status is currently not supported.
         */
        status?: LocationStatus;
        /**
         * Location type.
         *
         * Supported values: `BRANCH`, `OFFICES`, `RECEPTION`, `HEADQUARTERS`.
         *
         * **Note**: This field is currently not supported.
         */
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
        address?: Address$1;
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
         *
         * __Note:__ [Archiving a location](#archivelocation)
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
    interface Address$1 {
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
        /** Full address of the location. */
        formatted?: string | null;
        /** Geographic coordinates of location. */
        location?: AddressLocation;
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
        /** Sort order. */
        sort?: Sorting;
        /**
         * Pagination.
         *
         * Default values:
         * `offset`: 0
         * `limit`: 50 (Max: 1000)
         */
        paging?: Paging;
        /**
         * Whether to include `archived` locations in the response.
         *
         * Default: `false`
         */
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
        /**
         * Number of items to load.
         *
         * Default: `50`
         *
         * Max: `1000`
         */
        limit?: number | null;
        /**
         * Number of items to skip in the current sort order.
         *
         * Default: `0`
         */
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
        /** ID of the location to set as the default location. */
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
     *
     * This function is not a universal function and runs only on the backend.
     * @param location - Location to create.
     * @public
     * @documentationMaturity preview
     * @requiredField location
     * @requiredField location.address
     * @requiredField location.name
     * @requiredField location.timeZone
     * @adminMethod
     * @returns Created location.
     */
    function createLocation(location: Location): Promise<Location>;
    /**
     * Retrieves a location.
     *
     * Retrieves a location by the specified location ID.
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - ID of the location to retrieve.
     * @public
     * @documentationMaturity preview
     * @requiredField _id
     * @adminMethod
     * @returns Retrieved location.
     */
    function getLocation(_id: string): Promise<Location>;
    /**
     * Retrieves a list of locations.
     *
     *
     * Retrieves a list of up to 1,000 locations, given the provided filters, sorting, and paging.
     *
     * This function is not a universal function and runs only on the backend.
     * @public
     * @documentationMaturity preview
     * @param options - Options to use when retrieving a list of locations.
     * @adminMethod
     */
    function listLocations(options?: ListLocationsOptions): Promise<ListLocationsResponse>;
    interface ListLocationsOptions {
        /** Sort order. */
        sort?: Sorting;
        /** Pagination options. */
        paging?: Paging;
        /**
         * Whether to include `archived` locations in the response.
         *
         * Default: `false`
         */
        includeArchived?: boolean;
    }
    /**
     * Replaces a location.
     *
     *
     * Replaces a location.
     *
     * > **Note:**
     * > + Currently, it isn't possible to partially update a location. You must pass the full location object in the `location` parameter.
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - Location ID.
     * @public
     * @documentationMaturity preview
     * @requiredField _id
     * @requiredField location
     * @requiredField location.address
     * @requiredField location.name
     * @requiredField location.timeZone
     * @param location - Updated location details.
     * @adminMethod
     * @returns Updated location.
     */
    function updateLocation(_id: string | null, location: UpdateLocation): Promise<Location>;
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
         * Location status.
         *
         * Supported values: `ACTIVE`, `INACTIVE`.
         *
         * Default: `ACTIVE`
         *
         * __Notes:__
         * - [Archiving a location](#archivelocation)
         * doesn't affect the location's status.
         * - `INACTIVE` status is currently not supported.
         */
        status?: LocationStatus;
        /**
         * Location type.
         *
         * Supported values: `BRANCH`, `OFFICES`, `RECEPTION`, `HEADQUARTERS`.
         *
         * **Note**: This field is currently not supported.
         */
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
        address?: Address$1;
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
         *
         * __Note:__ [Archiving a location](#archivelocation)
         * doesn't affect its `status`.
         * @readonly
         */
        archived?: boolean;
    }
    /**
     * Creates a query to retrieve a list of up to 1,000 locations.
     *
     * The `queryLocations()` function builds a query to retrieve a list of locations and returns a [`LocationsQueryBuilder`](#locationsquerybuilder) object.
     *
     * The returned object contains the query definition which is typically used to run the query using the [`find()`](#locationsquerybuilder/find) function.
     *
     * You can refine the query by chaining `LocationsQueryBuilder` functions onto the query. `LocationsQueryBuilder` functions enable you to sort, filter, and control the results that `queryLocations()` returns. The functions that are chained to `queryLocations()` are applied in the order they are called.
     *
     * `queryLocations()` runs with the following `LocationsQueryBuilder` defaults that you can override:
     * - [`skip`](#locationsquerybuilder/skip): `0`
     * - [`limit`](#locationsquerybuilder/limit): `50`
     *
     * The following `QueryLocationsBuilder` functions are supported for the `queryLocations()` function. For a full description of the Locations object, see the object returned for the [`items`](#locationsqueryresult/items) property in [`LocationsQueryResult`](#locationsqueryresult).
     *
     * This function is not a universal function and runs only on the backend.
     * @public
     * @documentationMaturity preview
     * @param options - Options to use when querying locations.
     * @adminMethod
     */
    function queryLocations(): LocationsQueryBuilder;
    interface QueryOffsetResult {
        currentPage: number;
        totalPages: number;
        totalCount: number;
        hasNext: () => boolean;
        hasPrev: () => boolean;
        length: number;
        pageSize: number;
    }
    interface LocationsQueryResult extends QueryOffsetResult {
        items: Location[];
        query: LocationsQueryBuilder;
        next: () => Promise<LocationsQueryResult>;
        prev: () => Promise<LocationsQueryResult>;
    }
    interface LocationsQueryBuilder {
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        eq: (propertyName: "_id" | "name" | "description" | "default" | "status" | "locationType" | "fax" | "timeZone" | "email" | "phone" | "address.country" | "address.subdivision" | "address.city" | "address.postalCode" | "address.streetAddress.number" | "address.streetAddress.name" | "address.streetAddress.apt" | "address.formattedAddress" | "address.hint" | "address.geocode.latitude" | "address.geocode.longitude" | "businessSchedule.periods.openDay" | "businessSchedule.periods.openTime" | "businessSchedule.periods.closeDay" | "businessSchedule.periods.closeTime" | "businessSchedule.specialHourPeriod.startDate" | "businessSchedule.specialHourPeriod.endDate" | "businessSchedule.specialHourPeriod.isClosed" | "businessSchedule.specialHourPeriod.comment" | "revision" | "archived", value: any) => LocationsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        ne: (propertyName: "_id" | "name" | "description" | "default" | "status" | "locationType" | "fax" | "timeZone" | "email" | "phone" | "address.country" | "address.subdivision" | "address.city" | "address.postalCode" | "address.streetAddress.number" | "address.streetAddress.name" | "address.streetAddress.apt" | "address.formattedAddress" | "address.hint" | "address.geocode.latitude" | "address.geocode.longitude" | "businessSchedule.periods.openDay" | "businessSchedule.periods.openTime" | "businessSchedule.periods.closeDay" | "businessSchedule.periods.closeTime" | "businessSchedule.specialHourPeriod.startDate" | "businessSchedule.specialHourPeriod.endDate" | "businessSchedule.specialHourPeriod.isClosed" | "businessSchedule.specialHourPeriod.comment" | "revision" | "archived", value: any) => LocationsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        ge: (propertyName: "address.geocode.latitude" | "address.geocode.longitude" | "revision", value: any) => LocationsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        gt: (propertyName: "address.geocode.latitude" | "address.geocode.longitude" | "revision", value: any) => LocationsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        le: (propertyName: "address.geocode.latitude" | "address.geocode.longitude" | "revision", value: any) => LocationsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        lt: (propertyName: "address.geocode.latitude" | "address.geocode.longitude" | "revision", value: any) => LocationsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `string`.
         * @param string - String to compare against. Case-insensitive.
         * @documentationMaturity preview
         */
        startsWith: (propertyName: "_id" | "name" | "description" | "fax" | "timeZone" | "email" | "phone" | "address.country" | "address.subdivision" | "address.city" | "address.postalCode" | "address.streetAddress.number" | "address.streetAddress.name" | "address.streetAddress.apt" | "address.formattedAddress" | "address.hint" | "businessSchedule.periods.openTime" | "businessSchedule.periods.closeTime" | "businessSchedule.specialHourPeriod.startDate" | "businessSchedule.specialHourPeriod.endDate" | "businessSchedule.specialHourPeriod.comment", value: string) => LocationsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `values`.
         * @param values - List of values to compare against.
         * @documentationMaturity preview
         */
        hasSome: (propertyName: "_id" | "name" | "description" | "default" | "status" | "locationType" | "fax" | "timeZone" | "email" | "phone" | "address.country" | "address.subdivision" | "address.city" | "address.postalCode" | "address.streetAddress.number" | "address.streetAddress.name" | "address.streetAddress.apt" | "address.formattedAddress" | "address.hint" | "address.geocode.latitude" | "address.geocode.longitude" | "businessSchedule.periods.openDay" | "businessSchedule.periods.openTime" | "businessSchedule.periods.closeDay" | "businessSchedule.periods.closeTime" | "businessSchedule.specialHourPeriod.startDate" | "businessSchedule.specialHourPeriod.endDate" | "businessSchedule.specialHourPeriod.isClosed" | "businessSchedule.specialHourPeriod.comment" | "revision" | "archived", value: any[]) => LocationsQueryBuilder;
        /** @documentationMaturity preview */
        in: (propertyName: "_id" | "name" | "description" | "default" | "status" | "locationType" | "fax" | "timeZone" | "email" | "phone" | "address.country" | "address.subdivision" | "address.city" | "address.postalCode" | "address.streetAddress.number" | "address.streetAddress.name" | "address.streetAddress.apt" | "address.formattedAddress" | "address.hint" | "address.geocode.latitude" | "address.geocode.longitude" | "businessSchedule.periods.openDay" | "businessSchedule.periods.openTime" | "businessSchedule.periods.closeDay" | "businessSchedule.periods.closeTime" | "businessSchedule.specialHourPeriod.startDate" | "businessSchedule.specialHourPeriod.endDate" | "businessSchedule.specialHourPeriod.isClosed" | "businessSchedule.specialHourPeriod.comment" | "revision" | "archived", value: any) => LocationsQueryBuilder;
        /** @documentationMaturity preview */
        exists: (propertyName: "_id" | "name" | "description" | "default" | "status" | "locationType" | "fax" | "timeZone" | "email" | "phone" | "address.country" | "address.subdivision" | "address.city" | "address.postalCode" | "address.streetAddress.number" | "address.streetAddress.name" | "address.streetAddress.apt" | "address.formattedAddress" | "address.hint" | "address.geocode.latitude" | "address.geocode.longitude" | "businessSchedule.periods.openDay" | "businessSchedule.periods.openTime" | "businessSchedule.periods.closeDay" | "businessSchedule.periods.closeTime" | "businessSchedule.specialHourPeriod.startDate" | "businessSchedule.specialHourPeriod.endDate" | "businessSchedule.specialHourPeriod.isClosed" | "businessSchedule.specialHourPeriod.comment" | "revision" | "archived", value: boolean) => LocationsQueryBuilder;
        /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
         * @documentationMaturity preview
         */
        limit: (limit: number) => LocationsQueryBuilder;
        /** @param skip - Number of items to skip in the query results before returning the results.
         * @documentationMaturity preview
         */
        skip: (skip: number) => LocationsQueryBuilder;
        /** @documentationMaturity preview */
        find: () => Promise<LocationsQueryResult>;
    }
    /**
     * Sets a new default location.
     *
     *
     * Sets a new default location.
     *
     * > **Notes:**
     * > + There can only be one default location per site.
     * > + The default location can't be archived.
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - ID of the location to set as the default location.
     * @public
     * @documentationMaturity preview
     * @requiredField _id
     * @adminMethod
     */
    function setDefaultLocation(_id: string): Promise<SetDefaultLocationResponse>;
    /**
     * Archives a location.
     *
     * The `archiveLocation()` function changes a location's `archived` property to `true`.
     *
     * > **Notes:**
     * > + A location's `status` isn't affected by this function.
     * > + An archived location can't be updated.
     * > + It's currently not possible to unarchive locations.
     * > + A `default` location can't be archived.
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - ID of the location to archive.
     * @public
     * @documentationMaturity preview
     * @requiredField _id
     * @adminMethod
     */
    function archiveLocation(_id: string): Promise<ArchiveLocationResponse>;
    type locationsV1Location_universal_d_Location = Location;
    type locationsV1Location_universal_d_LocationStatus = LocationStatus;
    const locationsV1Location_universal_d_LocationStatus: typeof LocationStatus;
    type locationsV1Location_universal_d_LocationType = LocationType;
    const locationsV1Location_universal_d_LocationType: typeof LocationType;
    type locationsV1Location_universal_d_StreetAddress = StreetAddress;
    type locationsV1Location_universal_d_AddressLocation = AddressLocation;
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
    const locationsV1Location_universal_d_getLocation: typeof getLocation;
    const locationsV1Location_universal_d_listLocations: typeof listLocations;
    type locationsV1Location_universal_d_ListLocationsOptions = ListLocationsOptions;
    const locationsV1Location_universal_d_updateLocation: typeof updateLocation;
    type locationsV1Location_universal_d_UpdateLocation = UpdateLocation;
    const locationsV1Location_universal_d_queryLocations: typeof queryLocations;
    type locationsV1Location_universal_d_LocationsQueryResult = LocationsQueryResult;
    type locationsV1Location_universal_d_LocationsQueryBuilder = LocationsQueryBuilder;
    const locationsV1Location_universal_d_setDefaultLocation: typeof setDefaultLocation;
    const locationsV1Location_universal_d_archiveLocation: typeof archiveLocation;
    namespace locationsV1Location_universal_d {
        export { __debug$1 as __debug, locationsV1Location_universal_d_Location as Location, locationsV1Location_universal_d_LocationStatus as LocationStatus, locationsV1Location_universal_d_LocationType as LocationType, Address$1 as Address, locationsV1Location_universal_d_StreetAddress as StreetAddress, locationsV1Location_universal_d_AddressLocation as AddressLocation, BusinessSchedule$1 as BusinessSchedule, TimePeriod$1 as TimePeriod, DayOfWeek$1 as DayOfWeek, SpecialHourPeriod$1 as SpecialHourPeriod, locationsV1Location_universal_d_CreateLocationRequest as CreateLocationRequest, locationsV1Location_universal_d_CreateLocationResponse as CreateLocationResponse, locationsV1Location_universal_d_BulkCreateLocationRequest as BulkCreateLocationRequest, locationsV1Location_universal_d_BulkCreateLocationResponse as BulkCreateLocationResponse, locationsV1Location_universal_d_FailedCreateLocation as FailedCreateLocation, locationsV1Location_universal_d_GetLocationRequest as GetLocationRequest, locationsV1Location_universal_d_GetLocationResponse as GetLocationResponse, locationsV1Location_universal_d_ListLocationsRequest as ListLocationsRequest, locationsV1Location_universal_d_Sorting as Sorting, locationsV1Location_universal_d_SortOrder as SortOrder, locationsV1Location_universal_d_Paging as Paging, locationsV1Location_universal_d_ListLocationsResponse as ListLocationsResponse, locationsV1Location_universal_d_PagingMetadata as PagingMetadata, locationsV1Location_universal_d_UpdateLocationRequest as UpdateLocationRequest, locationsV1Location_universal_d_UpdateLocationResponse as UpdateLocationResponse, locationsV1Location_universal_d_BulkUpdateLocationRequest as BulkUpdateLocationRequest, locationsV1Location_universal_d_BulkUpdateLocationResponse as BulkUpdateLocationResponse, locationsV1Location_universal_d_FailedUpdateLocation as FailedUpdateLocation, locationsV1Location_universal_d_QueryLocationsRequest as QueryLocationsRequest, locationsV1Location_universal_d_Query as Query, locationsV1Location_universal_d_QueryLocationsResponse as QueryLocationsResponse, locationsV1Location_universal_d_SetDefaultLocationRequest as SetDefaultLocationRequest, locationsV1Location_universal_d_SetDefaultLocationResponse as SetDefaultLocationResponse, locationsV1Location_universal_d_SetDefaultLocation as SetDefaultLocation, locationsV1Location_universal_d_ArchiveLocationRequest as ArchiveLocationRequest, locationsV1Location_universal_d_ArchiveLocationResponse as ArchiveLocationResponse, locationsV1Location_universal_d_ArchiveLocation as ArchiveLocation, locationsV1Location_universal_d_createLocation as createLocation, locationsV1Location_universal_d_getLocation as getLocation, locationsV1Location_universal_d_listLocations as listLocations, locationsV1Location_universal_d_ListLocationsOptions as ListLocationsOptions, locationsV1Location_universal_d_updateLocation as updateLocation, locationsV1Location_universal_d_UpdateLocation as UpdateLocation, locationsV1Location_universal_d_queryLocations as queryLocations, locationsV1Location_universal_d_LocationsQueryResult as LocationsQueryResult, locationsV1Location_universal_d_LocationsQueryBuilder as LocationsQueryBuilder, locationsV1Location_universal_d_setDefaultLocation as setDefaultLocation, locationsV1Location_universal_d_archiveLocation as archiveLocation, };
    }
    const __debug: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
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
        address?: Address;
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
    interface Locale {
        /** Two-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format. */
        languageCode?: string;
        /** Two-letter country code in [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) format. */
        country?: string;
    }
    interface Address {
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
    /** The parameters of a site properties read request. */
    interface PropertiesReadRequest {
        /**
         * List of fields to return.
         * If omitted, all fields are returned.
         */
        fields?: string[];
    }
    /** The resulting properties for the requested site. */
    interface PropertiesReadResponse {
        /** Current version of the stored property site. For internal use. */
        version?: string;
        /** Properties for the requested site. */
        properties?: Properties;
    }
    /** The request used to update a site's properties. */
    interface PropertiesUpdateRequest {
        properties?: Properties;
        /** The properties to be updated. Properties not explicitly specified here are ignored. Properties included here but excluded from `properties` are cleared. */
        fields?: string[];
    }
    /** The details resulting from an update operation. */
    interface PropertiesUpdateResponse {
        /** The new version of the stored properties after the update. For internal use. */
        version?: string;
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
    /** Encapsulates all changes when site properties are updated */
    interface SitePropertiesUpdated {
        /** ID of the Wix site that has been updated. */
        metasiteId?: string;
        /** Update details. */
        event?: SitePropertiesEvent;
    }
    /** Snapshot of latest site properties. */
    interface SitePropertiesFullNotification {
        /** The site ID for which this snapshot applies. */
        metaSiteId?: string;
        /** Version of the site's properties current snapshot. */
        version?: number;
        /** Snapshot properties. */
        properties?: Properties;
        /** Context of the notification */
        changeContext?: ChangeContext;
    }
    interface UpdateBusinessProfileRequest {
        /** The site's business profile. */
        businessProfile?: BusinessProfileData;
        /** The properties of `businessProfile` to be updated. Properties not explicitly specified here are ignored. Properties included here but excluded from `businessProfile` are cleared. */
        fields?: string[];
    }
    interface BusinessProfileData {
        /** Site display name. */
        siteDisplayName?: string | null;
        /** Business name. */
        businessName?: string | null;
        /** Path to the site's logo in Wix Media (without Wix Media base URL). */
        logo?: string | null;
        /** Site description. */
        description?: string | null;
    }
    interface UpdateBusinessProfileResponse {
    }
    interface UpdateBusinessContactRequest {
        /** The site's business contact information. */
        businessContact?: BusinessContactData;
        /** The properties of `businessContact` to be updated. Properties not explicitly specified here are ignored. Properties included here but excluded from `businessContact` are cleared. */
        fields?: string[];
    }
    interface BusinessContactData {
        /** Publicly-available business email address. */
        email?: string | null;
        /** Publicly-available business phone number. */
        phone?: string | null;
        /** Publicly-available business fax number. */
        fax?: string | null;
        /** Publicly-available business address. */
        address?: Address;
    }
    interface UpdateBusinessContactResponse {
    }
    interface UpdateBusinessScheduleRequest {
        /** The site's business schedule in the site time zone. */
        businessSchedule?: BusinessSchedule;
    }
    interface UpdateBusinessScheduleResponse {
    }
    /** The request used to update site's default consent policy */
    interface UpdateConsentPolicyRequest {
        /** Default consent policy defined by the site owner. Can be further limited by site visitors. */
        consentPolicy?: ConsentPolicy;
    }
    interface UpdateConsentPolicyResponse {
    }
    interface BulkPropertiesReadRequest {
        /** Sites ids. */
        sites?: string[];
    }
    /** The resulting properties for the requested site. */
    interface BulkPropertiesReadResponse {
        /** The ID of the resolved MetaSite for the request. */
        sites?: Record<string, PropertiesReadResponse>;
    }
    /**
     * Retrieves a current snapshot of a site's properties.
     *
     * This function is not a universal function and runs only on the backend.
     * @public
     * @documentationMaturity preview
     * @param options - Field options.
     * @adminMethod
     * @returns The resulting properties for the requested site.
     */
    function getSiteProperties(options?: GetSitePropertiesOptions): Promise<PropertiesReadResponse>;
    interface GetSitePropertiesOptions {
        /**
         * List of fields to return.
         * If omitted, all fields are returned.
         */
        fields?: string[];
    }
    interface UpdateOptions {
        properties?: Properties;
        /** The properties to be updated. Properties not explicitly specified here are ignored. Properties included here but excluded from `properties` are cleared. */
        fields?: string[];
    }
    /**
     * Updates a site's business profile.
     *
     * This function is not a universal function and runs only on the backend.
     * @param businessProfile - The site's business profile.
     * @param fields - The properties of `businessProfile` to be updated. Properties not explicitly specified here are ignored. Properties included here but excluded from `businessProfile` are cleared.
     * @public
     * @documentationMaturity preview
     * @requiredField businessProfile
     * @requiredField fields
     * @adminMethod
     */
    function updateBusinessProfile(businessProfile: BusinessProfileData, fields: string[]): Promise<void>;
    /**
     * Updates a site's business contact information.
     *
     * This function is not a universal function and runs only on the backend.
     * @param businessContact - The site's business contact information.
     * @param fields - The properties of `businessContact` to be updated. Properties not explicitly specified here are ignored. Properties included here but excluded from `businessContact` are cleared.
     * @public
     * @documentationMaturity preview
     * @requiredField businessContact
     * @requiredField fields
     * @adminMethod
     */
    function updateBusinessContact(businessContact: BusinessContactData, fields: string[]): Promise<void>;
    /**
     * Updates a site's business schedule.
     *
     * This function is not a universal function and runs only on the backend.
     * @param businessSchedule - The site's business schedule in the site time zone.
     * @public
     * @documentationMaturity preview
     * @requiredField businessSchedule
     * @adminMethod
     */
    function updateBusinessSchedule(businessSchedule: BusinessSchedule): Promise<void>;
    /**
     * Updates a site's default consent policy.
     *
     * This function is not a universal function and runs only on the backend.
     * @param consentPolicy - Default consent policy defined by the site owner. Can be further limited by site visitors.
     * @public
     * @documentationMaturity preview
     * @requiredField consentPolicy
     * @adminMethod
     */
    function updateConsentPolicy(consentPolicy: ConsentPolicy): Promise<void>;
    const sitepropertiesV4Properties_universal_d___debug: typeof __debug;
    type sitepropertiesV4Properties_universal_d_Properties = Properties;
    type sitepropertiesV4Properties_universal_d_Categories = Categories;
    type sitepropertiesV4Properties_universal_d_Locale = Locale;
    type sitepropertiesV4Properties_universal_d_Address = Address;
    type sitepropertiesV4Properties_universal_d_AddressHint = AddressHint;
    type sitepropertiesV4Properties_universal_d_PlacementType = PlacementType;
    const sitepropertiesV4Properties_universal_d_PlacementType: typeof PlacementType;
    type sitepropertiesV4Properties_universal_d_GeoCoordinates = GeoCoordinates;
    type sitepropertiesV4Properties_universal_d_BusinessSchedule = BusinessSchedule;
    type sitepropertiesV4Properties_universal_d_TimePeriod = TimePeriod;
    type sitepropertiesV4Properties_universal_d_DayOfWeek = DayOfWeek;
    const sitepropertiesV4Properties_universal_d_DayOfWeek: typeof DayOfWeek;
    type sitepropertiesV4Properties_universal_d_SpecialHourPeriod = SpecialHourPeriod;
    type sitepropertiesV4Properties_universal_d_Multilingual = Multilingual;
    type sitepropertiesV4Properties_universal_d_SupportedLanguage = SupportedLanguage;
    type sitepropertiesV4Properties_universal_d_ResolutionMethod = ResolutionMethod;
    const sitepropertiesV4Properties_universal_d_ResolutionMethod: typeof ResolutionMethod;
    type sitepropertiesV4Properties_universal_d_ConsentPolicy = ConsentPolicy;
    type sitepropertiesV4Properties_universal_d_PropertiesReadRequest = PropertiesReadRequest;
    type sitepropertiesV4Properties_universal_d_PropertiesReadResponse = PropertiesReadResponse;
    type sitepropertiesV4Properties_universal_d_PropertiesUpdateRequest = PropertiesUpdateRequest;
    type sitepropertiesV4Properties_universal_d_PropertiesUpdateResponse = PropertiesUpdateResponse;
    type sitepropertiesV4Properties_universal_d_SitePropertiesNotification = SitePropertiesNotification;
    type sitepropertiesV4Properties_universal_d_SitePropertiesEvent = SitePropertiesEvent;
    type sitepropertiesV4Properties_universal_d_Translation = Translation;
    type sitepropertiesV4Properties_universal_d_ChangeContext = ChangeContext;
    type sitepropertiesV4Properties_universal_d_ChangeContextPayloadOneOf = ChangeContextPayloadOneOf;
    type sitepropertiesV4Properties_universal_d_PropertiesChange = PropertiesChange;
    type sitepropertiesV4Properties_universal_d_SiteCreated = SiteCreated;
    type sitepropertiesV4Properties_universal_d_SiteCloned = SiteCloned;
    type sitepropertiesV4Properties_universal_d_SitePropertiesUpdated = SitePropertiesUpdated;
    type sitepropertiesV4Properties_universal_d_SitePropertiesFullNotification = SitePropertiesFullNotification;
    type sitepropertiesV4Properties_universal_d_UpdateBusinessProfileRequest = UpdateBusinessProfileRequest;
    type sitepropertiesV4Properties_universal_d_BusinessProfileData = BusinessProfileData;
    type sitepropertiesV4Properties_universal_d_UpdateBusinessProfileResponse = UpdateBusinessProfileResponse;
    type sitepropertiesV4Properties_universal_d_UpdateBusinessContactRequest = UpdateBusinessContactRequest;
    type sitepropertiesV4Properties_universal_d_BusinessContactData = BusinessContactData;
    type sitepropertiesV4Properties_universal_d_UpdateBusinessContactResponse = UpdateBusinessContactResponse;
    type sitepropertiesV4Properties_universal_d_UpdateBusinessScheduleRequest = UpdateBusinessScheduleRequest;
    type sitepropertiesV4Properties_universal_d_UpdateBusinessScheduleResponse = UpdateBusinessScheduleResponse;
    type sitepropertiesV4Properties_universal_d_UpdateConsentPolicyRequest = UpdateConsentPolicyRequest;
    type sitepropertiesV4Properties_universal_d_UpdateConsentPolicyResponse = UpdateConsentPolicyResponse;
    type sitepropertiesV4Properties_universal_d_BulkPropertiesReadRequest = BulkPropertiesReadRequest;
    type sitepropertiesV4Properties_universal_d_BulkPropertiesReadResponse = BulkPropertiesReadResponse;
    const sitepropertiesV4Properties_universal_d_getSiteProperties: typeof getSiteProperties;
    type sitepropertiesV4Properties_universal_d_GetSitePropertiesOptions = GetSitePropertiesOptions;
    type sitepropertiesV4Properties_universal_d_UpdateOptions = UpdateOptions;
    const sitepropertiesV4Properties_universal_d_updateBusinessProfile: typeof updateBusinessProfile;
    const sitepropertiesV4Properties_universal_d_updateBusinessContact: typeof updateBusinessContact;
    const sitepropertiesV4Properties_universal_d_updateBusinessSchedule: typeof updateBusinessSchedule;
    const sitepropertiesV4Properties_universal_d_updateConsentPolicy: typeof updateConsentPolicy;
    namespace sitepropertiesV4Properties_universal_d {
        export { sitepropertiesV4Properties_universal_d___debug as __debug, sitepropertiesV4Properties_universal_d_Properties as Properties, sitepropertiesV4Properties_universal_d_Categories as Categories, sitepropertiesV4Properties_universal_d_Locale as Locale, sitepropertiesV4Properties_universal_d_Address as Address, sitepropertiesV4Properties_universal_d_AddressHint as AddressHint, sitepropertiesV4Properties_universal_d_PlacementType as PlacementType, sitepropertiesV4Properties_universal_d_GeoCoordinates as GeoCoordinates, sitepropertiesV4Properties_universal_d_BusinessSchedule as BusinessSchedule, sitepropertiesV4Properties_universal_d_TimePeriod as TimePeriod, sitepropertiesV4Properties_universal_d_DayOfWeek as DayOfWeek, sitepropertiesV4Properties_universal_d_SpecialHourPeriod as SpecialHourPeriod, sitepropertiesV4Properties_universal_d_Multilingual as Multilingual, sitepropertiesV4Properties_universal_d_SupportedLanguage as SupportedLanguage, sitepropertiesV4Properties_universal_d_ResolutionMethod as ResolutionMethod, sitepropertiesV4Properties_universal_d_ConsentPolicy as ConsentPolicy, sitepropertiesV4Properties_universal_d_PropertiesReadRequest as PropertiesReadRequest, sitepropertiesV4Properties_universal_d_PropertiesReadResponse as PropertiesReadResponse, sitepropertiesV4Properties_universal_d_PropertiesUpdateRequest as PropertiesUpdateRequest, sitepropertiesV4Properties_universal_d_PropertiesUpdateResponse as PropertiesUpdateResponse, sitepropertiesV4Properties_universal_d_SitePropertiesNotification as SitePropertiesNotification, sitepropertiesV4Properties_universal_d_SitePropertiesEvent as SitePropertiesEvent, sitepropertiesV4Properties_universal_d_Translation as Translation, sitepropertiesV4Properties_universal_d_ChangeContext as ChangeContext, sitepropertiesV4Properties_universal_d_ChangeContextPayloadOneOf as ChangeContextPayloadOneOf, sitepropertiesV4Properties_universal_d_PropertiesChange as PropertiesChange, sitepropertiesV4Properties_universal_d_SiteCreated as SiteCreated, sitepropertiesV4Properties_universal_d_SiteCloned as SiteCloned, sitepropertiesV4Properties_universal_d_SitePropertiesUpdated as SitePropertiesUpdated, sitepropertiesV4Properties_universal_d_SitePropertiesFullNotification as SitePropertiesFullNotification, sitepropertiesV4Properties_universal_d_UpdateBusinessProfileRequest as UpdateBusinessProfileRequest, sitepropertiesV4Properties_universal_d_BusinessProfileData as BusinessProfileData, sitepropertiesV4Properties_universal_d_UpdateBusinessProfileResponse as UpdateBusinessProfileResponse, sitepropertiesV4Properties_universal_d_UpdateBusinessContactRequest as UpdateBusinessContactRequest, sitepropertiesV4Properties_universal_d_BusinessContactData as BusinessContactData, sitepropertiesV4Properties_universal_d_UpdateBusinessContactResponse as UpdateBusinessContactResponse, sitepropertiesV4Properties_universal_d_UpdateBusinessScheduleRequest as UpdateBusinessScheduleRequest, sitepropertiesV4Properties_universal_d_UpdateBusinessScheduleResponse as UpdateBusinessScheduleResponse, sitepropertiesV4Properties_universal_d_UpdateConsentPolicyRequest as UpdateConsentPolicyRequest, sitepropertiesV4Properties_universal_d_UpdateConsentPolicyResponse as UpdateConsentPolicyResponse, sitepropertiesV4Properties_universal_d_BulkPropertiesReadRequest as BulkPropertiesReadRequest, sitepropertiesV4Properties_universal_d_BulkPropertiesReadResponse as BulkPropertiesReadResponse, sitepropertiesV4Properties_universal_d_getSiteProperties as getSiteProperties, sitepropertiesV4Properties_universal_d_GetSitePropertiesOptions as GetSitePropertiesOptions, sitepropertiesV4Properties_universal_d_UpdateOptions as UpdateOptions, sitepropertiesV4Properties_universal_d_updateBusinessProfile as updateBusinessProfile, sitepropertiesV4Properties_universal_d_updateBusinessContact as updateBusinessContact, sitepropertiesV4Properties_universal_d_updateBusinessSchedule as updateBusinessSchedule, sitepropertiesV4Properties_universal_d_updateConsentPolicy as updateConsentPolicy, };
    }
    export { locationsV1Location_universal_d as locations, sitepropertiesV4Properties_universal_d as properties };
}
