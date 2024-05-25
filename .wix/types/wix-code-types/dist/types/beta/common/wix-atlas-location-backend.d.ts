declare module "wix-atlas-location-backend" {
  interface SearchResult {
      address?: Address;
      /** stores additional data about the proximity to the specified location */
      proximity?: Proximity;
  }
  /** Physical address */
  interface Address {
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
      /** A string containing the human-readable address of this location */
      formattedAddress?: string | null;
      /** Free text for human-to-human textual orientation aid purposes */
      hint?: string | null;
      /** coordinates of the physical address */
      geocode?: AddressLocation;
      /** country full-name */
      countryFullname?: string | null;
      /** multi-level subdivisions from top to bottom */
      subdivisions?: Subdivision[];
      /** a break down of the street to number and street name */
      streetAddress?: StreetAddress;
      /** Main address line (usually street and number) as free text */
      addressLine?: string | null;
  }
  interface StreetAddress {
      /** street number */
      number?: string;
      /** street name */
      name?: string;
      /** apartment number */
      apt?: string;
  }
  interface AddressLocation {
      latitude?: number | null;
      longitude?: number | null;
  }
  interface Subdivision {
      /** subdivision short code */
      code?: string;
      /** subdivision full-name */
      name?: string;
      type?: SubdivisionType;
      /** a free-text description of subdivision type */
      typeInfo?: string | null;
  }
  enum SubdivisionType {
      UNKNOWN_SUBDIVISION_TYPE = "UNKNOWN_SUBDIVISION_TYPE",
      /** state */
      ADMINISTRATIVE_AREA_LEVEL_1 = "ADMINISTRATIVE_AREA_LEVEL_1",
      /** county */
      ADMINISTRATIVE_AREA_LEVEL_2 = "ADMINISTRATIVE_AREA_LEVEL_2",
      /** cities/towns */
      ADMINISTRATIVE_AREA_LEVEL_3 = "ADMINISTRATIVE_AREA_LEVEL_3",
      /** neighborhood/quarter */
      ADMINISTRATIVE_AREA_LEVEL_4 = "ADMINISTRATIVE_AREA_LEVEL_4",
      /** street/block */
      ADMINISTRATIVE_AREA_LEVEL_5 = "ADMINISTRATIVE_AREA_LEVEL_5",
      /** (ADMINISTRATIVE_AREA_LEVEL_0) indicates the national political entity, and is typically the highest order type returned by the Geocoder. */
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
  interface ReverseGeocodingResponse {
      searchResults?: SearchResult[];
  }
  interface SearchOptions {
      query?: string | null;
      filterBy?: FilterBy[];
      zipCode?: string | null;
      countryCodes?: string[];
  }
  
  function search(options: SearchOptions): Promise<SearchResponse>;
  function reverseGeocoding(addressLocation: AddressLocation): Promise<ReverseGeocodingResponse>;
  
  export { reverseGeocoding, search };
}
