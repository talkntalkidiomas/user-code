declare module "wix-atlas-backend" {
  const __debug$2: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface Place {
      /** The given place id */
      placeId?: string;
      /** The Address object */
      address?: Address$1;
      /** The Place type. For example: airport, library etc... */
      types?: string[];
  }
  /** Physical address */
  interface Address$1 extends AddressStreetOneOf$1 {
      /** Street name and number. */
      streetAddress?: StreetAddress$1;
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
      location?: AddressLocation$2;
  }
  /** @oneof */
  interface AddressStreetOneOf$1 {
      /** Street name and number. */
      streetAddress?: StreetAddress$1;
      /** Main address line, usually street and number as free text. */
      addressLine?: string | null;
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
      /**
       * Optional address line 1
       * @internal
       */
      formattedAddressLine?: string | null;
  }
  interface AddressLocation$2 {
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
  interface GetPlaceRequest {
      searchId: string;
      /** A random string which identifies an autocomplete session for billing purposes. The session begins when the user starts typing a query, and concludes when they select a place and a call to Get Place is made. Once a session has concluded, the token is no longer valid. your app must generate a fresh token for each session. */
      sessionToken?: string | null;
  }
  interface GetPlaceResponse {
      place?: Place;
  }
  /**
   * Once you have a search_id from a autocomplete Search, you can request more details about a particular establishment or point of interest by initiating a get place request.
   * @public
   * @documentationMaturity preview
   * @requiredField searchId
   */
  function getPlace(searchId: string, options?: GetPlaceOptions): Promise<GetPlaceResponse>;
  interface GetPlaceOptions {
      /** A random string which identifies an autocomplete session for billing purposes. The session begins when the user starts typing a query, and concludes when they select a place and a call to Get Place is made. Once a session has concluded, the token is no longer valid. your app must generate a fresh token for each session. */
      sessionToken?: string | null;
  }
  
  type atlasV2Place_universal_d_Place = Place;
  type atlasV2Place_universal_d_GetPlaceRequest = GetPlaceRequest;
  type atlasV2Place_universal_d_GetPlaceResponse = GetPlaceResponse;
  const atlasV2Place_universal_d_getPlace: typeof getPlace;
  type atlasV2Place_universal_d_GetPlaceOptions = GetPlaceOptions;
  namespace atlasV2Place_universal_d {
    export {
      __debug$2 as __debug,
      atlasV2Place_universal_d_Place as Place,
      Address$1 as Address,
      AddressStreetOneOf$1 as AddressStreetOneOf,
      StreetAddress$1 as StreetAddress,
      AddressLocation$2 as AddressLocation,
      Subdivision$1 as Subdivision,
      SubdivisionType$1 as SubdivisionType,
      atlasV2Place_universal_d_GetPlaceRequest as GetPlaceRequest,
      atlasV2Place_universal_d_GetPlaceResponse as GetPlaceResponse,
      atlasV2Place_universal_d_getPlace as getPlace,
      atlasV2Place_universal_d_GetPlaceOptions as GetPlaceOptions,
    };
  }
  
  const __debug$1: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface Prediction {
      /** The human-readable name of the prediction */
      description?: string;
      /** The id of the prediction that can be use in place api. Available for short time. */
      searchId?: string;
      /** Contains an array with offset value and length. These describe the location of the entered term in the prediction result text, so that the term can be highlighted if desired */
      matchedSubstrings?: MatchedSubstrings[];
      /** Provides pre-formatted text that can be shown in your autocomplete results */
      textStructure?: TextStructure;
      /** Contains an integer indicating the straight-line distance between the predicted place, and the specified origin point, in meters. */
      distanceInMeters?: number | null;
  }
  interface MatchedSubstrings {
      length?: number;
      offset?: number;
  }
  interface TextStructure {
      /** Contains the main text of a prediction, usually the name of the place */
      mainText?: string;
      /** Contains the secondary text of a prediction, usually the location of the place */
      secondaryText?: string;
      /** Contains an array with offset value and length. These describe the location of the entered term in the prediction result text, so that the term can be highlighted if desired */
      mainTextMatchedSubstrings?: MatchedSubstrings[];
  }
  interface ListPredictionsRequest {
      /** The text the predictions will be based on. */
      input: string;
      /** The origin point from which to calculate straight-line distance to the destination */
      origin?: AddressLocation$1;
      /** The point around which you wish to retrieve place information */
      location?: AddressLocation$1;
      /** The acceptable distance from that location (in meters) */
      radius?: string | null;
      /** Filters the user can add in order to get more accurate results */
      filterBy?: FilterBy$1[];
  }
  interface AddressLocation$1 {
      /** Address latitude. */
      latitude?: number | null;
      /** Address longitude. */
      longitude?: number | null;
  }
  interface FilterBy$1 {
      /** One of the filter types enum */
      filterType?: FilterType$1;
      /** Free text like "us" */
      filterValue?: string;
  }
  enum FilterType$1 {
      /** Filter by zip code */
      zip_code = "zip_code",
      /** Filter by 2-letters or 3-letters country code */
      country_code = "country_code"
  }
  interface ListPredictionsResponse {
      predictions?: Prediction[];
  }
  interface PredictRequest {
      /** The text the predictions will be based on. */
      input: string;
      /** The origin point from which to calculate straight-line distance to the destination */
      origin?: AddressLocation$1;
      /** The point around which you wish to retrieve place information */
      location?: AddressLocation$1;
      /** The acceptable distance from that location (in meters) */
      radius?: string | null;
      /** alpha-2 or alpha-3 ISO-3166 country codes to filter by */
      countryCodes?: string[];
      /** A random string which identifies an autocomplete session for billing purposes. The session begins when the user starts typing a query, and concludes when they select a place and a call to Get Place is made. Once a session has concluded, the token is no longer valid. your app must generate a fresh token for each session. */
      sessionToken?: string | null;
  }
  interface PredictResponse {
      predictions?: Prediction[];
  }
  /**
   * Deprecated!!!!  - Please use /Predict
   * @param input - The text the predictions will be based on.
   * @internal
   * @documentationMaturity preview
   * @requiredField input
   */
  function listPredictions(input: string, options?: ListPredictionsOptions): Promise<ListPredictionsResponse>;
  interface ListPredictionsOptions {
      /** The origin point from which to calculate straight-line distance to the destination */
      origin?: AddressLocation$1;
      /** The point around which you wish to retrieve place information */
      location?: AddressLocation$1;
      /** The acceptable distance from that location (in meters) */
      radius?: string | null;
      /** Filters the user can add in order to get more accurate results */
      filterBy?: FilterBy$1[];
  }
  /**
   * A Predict end-point take an input and returns an list of Prediction object.
   * @param input - The text the predictions will be based on.
   * @public
   * @documentationMaturity preview
   * @requiredField input
   */
  function predict(input: string, options?: PredictOptions): Promise<PredictResponse>;
  interface PredictOptions {
      /** The origin point from which to calculate straight-line distance to the destination */
      origin?: AddressLocation$1;
      /** The point around which you wish to retrieve place information */
      location?: AddressLocation$1;
      /** The acceptable distance from that location (in meters) */
      radius?: string | null;
      /** alpha-2 or alpha-3 ISO-3166 country codes to filter by */
      countryCodes?: string[];
      /** A random string which identifies an autocomplete session for billing purposes. The session begins when the user starts typing a query, and concludes when they select a place and a call to Get Place is made. Once a session has concluded, the token is no longer valid. your app must generate a fresh token for each session. */
      sessionToken?: string | null;
  }
  
  type atlasV2Prediction_universal_d_Prediction = Prediction;
  type atlasV2Prediction_universal_d_MatchedSubstrings = MatchedSubstrings;
  type atlasV2Prediction_universal_d_TextStructure = TextStructure;
  type atlasV2Prediction_universal_d_ListPredictionsRequest = ListPredictionsRequest;
  type atlasV2Prediction_universal_d_ListPredictionsResponse = ListPredictionsResponse;
  type atlasV2Prediction_universal_d_PredictRequest = PredictRequest;
  type atlasV2Prediction_universal_d_PredictResponse = PredictResponse;
  const atlasV2Prediction_universal_d_listPredictions: typeof listPredictions;
  type atlasV2Prediction_universal_d_ListPredictionsOptions = ListPredictionsOptions;
  const atlasV2Prediction_universal_d_predict: typeof predict;
  type atlasV2Prediction_universal_d_PredictOptions = PredictOptions;
  namespace atlasV2Prediction_universal_d {
    export {
      __debug$1 as __debug,
      atlasV2Prediction_universal_d_Prediction as Prediction,
      atlasV2Prediction_universal_d_MatchedSubstrings as MatchedSubstrings,
      atlasV2Prediction_universal_d_TextStructure as TextStructure,
      atlasV2Prediction_universal_d_ListPredictionsRequest as ListPredictionsRequest,
      AddressLocation$1 as AddressLocation,
      FilterBy$1 as FilterBy,
      FilterType$1 as FilterType,
      atlasV2Prediction_universal_d_ListPredictionsResponse as ListPredictionsResponse,
      atlasV2Prediction_universal_d_PredictRequest as PredictRequest,
      atlasV2Prediction_universal_d_PredictResponse as PredictResponse,
      atlasV2Prediction_universal_d_listPredictions as listPredictions,
      atlasV2Prediction_universal_d_ListPredictionsOptions as ListPredictionsOptions,
      atlasV2Prediction_universal_d_predict as predict,
      atlasV2Prediction_universal_d_PredictOptions as PredictOptions,
    };
  }
  
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface SearchResult {
      /** The Address object */
      address?: Address;
      /** stores additional data about the proximity to the specified location */
      proximity?: Proximity;
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
  enum Proximity {
      UNKNOWN_PROXIMITY = "UNKNOWN_PROXIMITY",
      /** indicates that the returned result is a precise geocode for which we have location information accurate down to street address precision */
      PINPOINT = "PINPOINT",
      /** indicates that the returned result is the geometric center of a result */
      APPROXIMATE = "APPROXIMATE",
      /** indicates that the returned result is around an area */
      GENERAL_AREA = "GENERAL_AREA"
  }
  /** User must provide query or filter by parameters */
  interface SearchRequest {
      /** Free text */
      query?: string | null;
      /** Deprecate! - Please use 'zipCode' and 'countryCodes' fields */
      filterBy?: FilterBy[];
      /** Zip code filter the user can add in order to get more accurate results */
      zipCode?: string | null;
      /** Country codes filter the user can add in order to get more accurate results */
      countryCodes?: string[];
  }
  interface FilterBy {
      /** One of the filter types enum */
      filterType?: FilterType;
      /** Free text like "us" */
      filterValue?: string;
  }
  enum FilterType {
      /** Filter by zip code */
      zip_code = "zip_code",
      /** Filter by 2-letters or 3-letters country code */
      country_code = "country_code"
  }
  interface SearchResponse {
      /** List of 'Address' objects */
      searchResults?: SearchResult[];
  }
  interface ReverseGeocodingRequest {
      /** The latitude and longitude values specifying the location for which you wish to obtain the closest, human-readable address. */
      addressLocation: AddressLocation;
  }
  interface ReverseGeocodingResponse {
      searchResults?: SearchResult[];
  }
  /**
   * A Search request takes a free text as an input and returns a list of 'Address' objects.
   * @public
   * @documentationMaturity preview
   */
  function search(options?: SearchOptions): Promise<SearchResponse>;
  interface SearchOptions {
      /** Free text */
      query?: string | null;
      /** Deprecate! - Please use 'zipCode' and 'countryCodes' fields */
      filterBy?: FilterBy[];
      /** Zip code filter the user can add in order to get more accurate results */
      zipCode?: string | null;
      /** Country codes filter the user can add in order to get more accurate results */
      countryCodes?: string[];
  }
  /**
   * A Search request takes 'latitude' and 'longitude' values as an input and returns a list of 'Address' objects.
   * @param addressLocation - The latitude and longitude values specifying the location for which you wish to obtain the closest, human-readable address.
   * @internal
   * @documentationMaturity preview
   * @requiredField addressLocation
   * @requiredField addressLocation.latitude
   * @requiredField addressLocation.longitude
   */
  function reverseGeocoding(addressLocation: AddressLocation): Promise<ReverseGeocodingResponse>;
  
  const atlasV2SearchResult_universal_d___debug: typeof __debug;
  type atlasV2SearchResult_universal_d_SearchResult = SearchResult;
  type atlasV2SearchResult_universal_d_Address = Address;
  type atlasV2SearchResult_universal_d_AddressStreetOneOf = AddressStreetOneOf;
  type atlasV2SearchResult_universal_d_StreetAddress = StreetAddress;
  type atlasV2SearchResult_universal_d_AddressLocation = AddressLocation;
  type atlasV2SearchResult_universal_d_Subdivision = Subdivision;
  type atlasV2SearchResult_universal_d_SubdivisionType = SubdivisionType;
  const atlasV2SearchResult_universal_d_SubdivisionType: typeof SubdivisionType;
  type atlasV2SearchResult_universal_d_Proximity = Proximity;
  const atlasV2SearchResult_universal_d_Proximity: typeof Proximity;
  type atlasV2SearchResult_universal_d_SearchRequest = SearchRequest;
  type atlasV2SearchResult_universal_d_FilterBy = FilterBy;
  type atlasV2SearchResult_universal_d_FilterType = FilterType;
  const atlasV2SearchResult_universal_d_FilterType: typeof FilterType;
  type atlasV2SearchResult_universal_d_SearchResponse = SearchResponse;
  type atlasV2SearchResult_universal_d_ReverseGeocodingRequest = ReverseGeocodingRequest;
  type atlasV2SearchResult_universal_d_ReverseGeocodingResponse = ReverseGeocodingResponse;
  const atlasV2SearchResult_universal_d_search: typeof search;
  type atlasV2SearchResult_universal_d_SearchOptions = SearchOptions;
  const atlasV2SearchResult_universal_d_reverseGeocoding: typeof reverseGeocoding;
  namespace atlasV2SearchResult_universal_d {
    export {
      atlasV2SearchResult_universal_d___debug as __debug,
      atlasV2SearchResult_universal_d_SearchResult as SearchResult,
      atlasV2SearchResult_universal_d_Address as Address,
      atlasV2SearchResult_universal_d_AddressStreetOneOf as AddressStreetOneOf,
      atlasV2SearchResult_universal_d_StreetAddress as StreetAddress,
      atlasV2SearchResult_universal_d_AddressLocation as AddressLocation,
      atlasV2SearchResult_universal_d_Subdivision as Subdivision,
      atlasV2SearchResult_universal_d_SubdivisionType as SubdivisionType,
      atlasV2SearchResult_universal_d_Proximity as Proximity,
      atlasV2SearchResult_universal_d_SearchRequest as SearchRequest,
      atlasV2SearchResult_universal_d_FilterBy as FilterBy,
      atlasV2SearchResult_universal_d_FilterType as FilterType,
      atlasV2SearchResult_universal_d_SearchResponse as SearchResponse,
      atlasV2SearchResult_universal_d_ReverseGeocodingRequest as ReverseGeocodingRequest,
      atlasV2SearchResult_universal_d_ReverseGeocodingResponse as ReverseGeocodingResponse,
      atlasV2SearchResult_universal_d_search as search,
      atlasV2SearchResult_universal_d_SearchOptions as SearchOptions,
      atlasV2SearchResult_universal_d_reverseGeocoding as reverseGeocoding,
    };
  }
  
  export { atlasV2Prediction_universal_d as autocomplete, atlasV2SearchResult_universal_d as location, atlasV2Place_universal_d as places };
}
