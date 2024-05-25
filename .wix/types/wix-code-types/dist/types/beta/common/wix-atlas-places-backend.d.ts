declare module "wix-atlas-places-backend" {
  interface Place {
      placeId?: string;
      address?: Address;
      types?: string[];
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
  interface GetPlaceResponse {
      place?: Place;
  }
  
  function getPlace(searchId: string): Promise<GetPlaceResponse>;
  
  export { getPlace };
}
