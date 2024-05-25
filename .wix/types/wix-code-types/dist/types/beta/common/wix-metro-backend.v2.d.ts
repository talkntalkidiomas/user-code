declare module "wix-metro-backend.v2" {
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
      /**
       * A string containing the full address of this location.
       * @internal
       */
      formattedAddress?: string | null;
      /**
       * Free text to help find the address.
       * @internal
       */
      hint?: string | null;
      /**
       * Coordinates of the physical address.
       * @internal
       */
      geocode?: AddressLocation;
      /**
       * Country full name.
       * @internal
       */
      countryFullname?: string | null;
      /**
       * Subdivision full name.
       * @internal
       */
      subdivisionFullname?: string | null;
      /**
       * Multi-level subdivisions from top to bottom.
       * @internal
       */
      subdivisions?: Subdivision[];
      /** Street name and number. */
      streetAddress?: StreetAddress;
      /** Main address line, usually street and number as free text. */
      addressLine?: string | null;
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
  interface PageLink {
      /** The page id we want from the site */
      pageId?: string;
      /** Where this link should open, supports _self and _blank or any name the user chooses. _self means same page, _blank means new page. */
      target?: string | null;
  }
  interface Variant {
      name?: string;
      value?: string;
      image?: string;
  }
  interface MyAddress {
      country?: string | null;
      subdivision?: string | null;
      city?: string | null;
      postalCode?: string | null;
      streetAddress?: StreetAddress;
      /** @internal */
      formattedAddress?: string | null;
  }
  type Product = {
      _id: string;
      name: string;
      collectionId: string;
      _createdDate: Date;
      modifiedDate: Date;
      image: string;
      address: Address;
      document: string;
      video: string;
      pageLink: PageLink;
      audio: string;
      color: string | null;
      localDate: string | null;
      localTime: string | null;
      localDateTime: string | null;
      variants: Variant[];
      mainVariant: Variant;
      customAddress: MyAddress;
      guid: string;
  };
  interface CreateProductOptions {
      product?: Product;
  }
  interface UpdateProductOptions {
      product?: Product;
  }
  interface QueryCursorResult {
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface ProductsQueryResult extends QueryCursorResult {
      items: Product[];
      query: ProductsQueryBuilder;
      next: () => Promise<ProductsQueryResult>;
      prev: () => Promise<ProductsQueryResult>;
  }
  interface ProductsQueryBuilder {
      eq: (propertyName: string, value: any) => ProductsQueryBuilder;
      ne: (propertyName: string, value: any) => ProductsQueryBuilder;
      startsWith: (propertyName: string, value: any) => ProductsQueryBuilder;
      hasSome: (propertyName: string, value: any[]) => ProductsQueryBuilder;
      in: (propertyName: string, value: any) => ProductsQueryBuilder;
      exists: (propertyName: string, value: boolean) => ProductsQueryBuilder;
      ascending: (...propertyNames: string[]) => ProductsQueryBuilder;
      descending: (...propertyNames: string[]) => ProductsQueryBuilder;
      limit: (limit: number) => ProductsQueryBuilder;
      find: () => Promise<ProductsQueryResult>;
  }
  
  function createProduct(options?: CreateProductOptions): Promise<Product>;
  function deleteProduct(productId: string): Promise<void>;
  function updateProduct(productId: string, options?: UpdateProductOptions): Promise<Product>;
  function getProduct(productId: string): Promise<Product>;
  function queryProducts(): ProductsQueryBuilder;
  
  const metroinspectorV1Product_backend_d_createProduct: typeof createProduct;
  const metroinspectorV1Product_backend_d_deleteProduct: typeof deleteProduct;
  const metroinspectorV1Product_backend_d_updateProduct: typeof updateProduct;
  const metroinspectorV1Product_backend_d_getProduct: typeof getProduct;
  const metroinspectorV1Product_backend_d_queryProducts: typeof queryProducts;
  namespace metroinspectorV1Product_backend_d {
    export {
      metroinspectorV1Product_backend_d_createProduct as createProduct,
      metroinspectorV1Product_backend_d_deleteProduct as deleteProduct,
      metroinspectorV1Product_backend_d_updateProduct as updateProduct,
      metroinspectorV1Product_backend_d_getProduct as getProduct,
      metroinspectorV1Product_backend_d_queryProducts as queryProducts,
    };
  }
  
  export { metroinspectorV1Product_backend_d as products };
}
