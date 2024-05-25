declare module "localdelivery-spi-v2-tpa" {
  interface Tpa {
  }
  interface ListAccountIdsRequest {
  }
  interface ListAccountIdsResponse {
      /** Account IDs. */
      accountIds?: string[];
  }
  interface GetAccountStatusRequest {
      /** Account ID. */
      accountId: string;
  }
  interface GetAccountStatusResponse {
      /** Account status. */
      status?: Status;
  }
  enum Status {
      UNKNOWN = "UNKNOWN",
      CREATED = "CREATED",
      ACTIVE = "ACTIVE",
      INACTIVE = "INACTIVE"
  }
  interface GetDeliveryEstimateRequest {
      /** Account ID. */
      accountId: string;
      /** Delivery pickup address. */
      pickupAddress?: Address;
      /** Delivery drop-off address. */
      dropOffAddress?: Address;
      /** Unique identifier of the specific store location that the delivery is for. */
      configurationId: string;
      /** Wix order details. */
      order: EstimateOrder;
      /** Estimated pickup time. */
      pickupTime?: Date;
      /** Estimated drop-off time. */
      dropOffTime?: Date;
  }
  /** Physical address */
  interface Address {
      /** Country code. */
      country?: string;
      /** Subdivision. Usually a state, region, prefecture, or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). */
      subdivision?: string | null;
      /** City name. */
      city?: string;
      /** Zip/postal code. */
      postalCode?: string | null;
      /** Street name and number. */
      streetAddress?: StreetAddress;
      /** Free text providing more detailed address info. Usually contains Apt, Suite, and Floor. */
      addressLine2?: string | null;
      /** Coordinates of the physical address. */
      geocode?: AddressLocation;
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
  interface EstimateOrder {
      /** The subtotal for all items in the order, excluding tax/tip. */
      subtotal?: Money;
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
  interface GetDeliveryEstimateResponse {
      /** Retrieved Estimate. */
      estimate?: Estimate;
  }
  interface Estimate {
      /** Optional. Used as reference to the estimate when creating a new order. */
      deliveryId?: string | null;
      /** Estimate amount that is charged for this delivery. */
      deliveryFee?: Money;
      /** Estimated pickup time. */
      pickupTime?: Date;
      /** Estimated drop-off time. */
      dropOffTime?: Date;
  }
  interface CreateDeliveryRequest {
      /** Account ID. */
      accountId: string;
      /** Pickup Info in order to create a new delivery. */
      pickupInfo: PickupInfo;
      /** Drop-off Info in order to create a new delivery. */
      dropOffInfo: DropOffInfo;
      /** Optional. Estimate ID if needed. */
      estimateId?: string | null;
      /** Wix order details. */
      order: WixOrder;
      /** Is contactless delivery. */
      contactlessDelivery?: boolean | null;
      /** The requested time at which the order should be picked up. */
      pickupTime?: Date;
      /** The requested time at which the order should be delivered. */
      dropOffTime?: Date;
  }
  interface PickupInfo {
      /** Unique identifier of the specific store location that the delivery is for. */
      configurationId?: string;
      /** The name of the store where the order should be picked up from. */
      storeName?: string;
      /** Delivery pickup address. */
      address?: Address;
      /** Phone number of the store where the order should be picked up from. */
      phone?: string;
      /** Instructions for the courier at the pickup location. */
      instructions?: string | null;
  }
  interface DropOffInfo {
      /** Delivery drop-off address. */
      address?: Address;
      /** Instructions for the courier at the drop-off location. */
      instructions?: string | null;
  }
  interface WixOrder {
      /** Order ID. */
      _id?: string;
      /** Customer details. */
      customer?: Customer;
      /** The subtotal for all items in the order, excluding tax/tip. */
      subtotal?: Money;
      /** Amount that will be paid to the courier. */
      tip?: Money;
      /** Dishes and options included in the order. */
      lineItems?: LineItem[];
  }
  interface CatalogReference {
      /** Line item name as defined in the catalog. */
      catalogItemName?: string | null;
  }
  interface Customer {
      /** First name. */
      firstName?: string;
      /** Last name. */
      lastName?: string;
      /** Phone number. */
      phone?: string;
      /** Email address. */
      email?: string;
  }
  interface LineItem {
      /** Line item quantity. */
      quantity?: number;
      /** References to the line item’s origin catalog. */
      catalogReference?: CatalogReference;
  }
  interface CreateDeliveryResponse {
      /** The vendor new delivery order id */
      deliveryId?: string;
      /** When a delivery is ready to be picked up. This is the start of the pickup window. */
      pickupWindowStartTime?: Date;
      /** When a delivery must be picked up by. This is the end of the pickup window. */
      pickupWindowEndTime?: Date;
      /** When a delivery is ready to be dropped off. This is the start of the drop-off window. */
      dropOffWindowStartTime?: Date;
      /** When a delivery must be dropped off by. This is the end of the drop-off window. */
      dropOffWindowEndTime?: Date;
      /** Amount that is charged for this delivery. */
      deliveryFee?: Money;
  }
  /** Local Delivery component */
  interface LocalDeliveryComponentData {
      /**
       * URL for the Delivery provider registration web page.
       * The App Instance and Account Id query parameters are attached to the registration URL
       * so that you can identify your account when accessing the vendor api. [learn more](https://devforum.wix.com/en/article/app-instance)
       */
      registrationUrl?: string;
  }
  interface GetDeliveryEstimateOptions {
      pickupAddress?: Address;
      dropOffAddress?: Address;
      pickupTime?: Date;
      dropOffTime?: Date;
      configurationId: string;
      order: EstimateOrder;
  }
  interface CreateDeliveryOptions {
      pickupInfo: PickupInfo;
      dropOffInfo: DropOffInfo;
      pickupTime?: Date;
      dropOffTime?: Date;
      estimateId?: string | null;
      order: WixOrder;
      contactlessDelivery?: boolean | null;
  }
  
  export { Address, AddressLocation, CatalogReference, CreateDeliveryOptions, CreateDeliveryRequest, CreateDeliveryResponse, Customer, DropOffInfo, Estimate, EstimateOrder, GetAccountStatusRequest, GetAccountStatusResponse, GetDeliveryEstimateOptions, GetDeliveryEstimateRequest, GetDeliveryEstimateResponse, LineItem, ListAccountIdsRequest, ListAccountIdsResponse, LocalDeliveryComponentData, Money, PickupInfo, Status, StreetAddress, Tpa, WixOrder };
}
