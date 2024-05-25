declare module "interfaces-bookings-availability-v2-availability-time-slots-configuration-provider" {
  type BusinessError<T = unknown> = {
      __tag: 'BusinessError';
      httpCode: string;
      errorDescription: string;
      applicationCode: string;
      messageSchema: string;
      data: T;
  };
  
  interface ListAvailabilityTimeSlotConfigurationsRequest {
      /**
       * IDs of the services for which configurations are to be retrieved.
       * Deprecated. Use 'services'.
       */
      serviceIds?: string[];
      /** Service IDs paired with selected customer choices. */
      services?: Service[];
  }
  /**
   * Selected customer choices.
   * These choices are selected by the customer during the booking flow and can be utilized to calculate the corresponding service's configuration properties.
   */
  interface CustomerChoices {
      /**
       * The selected customer duration in minutes.
       * Min: `1 minute`
       * Max: `44639 minutes` (30 days, 23 hours, and 59 minutes)
       */
      durationInMinutes?: number | null;
  }
  interface Service {
      /** ID of the service for which configuration is retrieved. */
      serviceId?: string;
      /** Customer selected choices for this service. */
      customerChoices?: CustomerChoices;
  }
  interface ListAvailabilityTimeSlotConfigurationsResponse {
      /** The retrieved configurations. */
      configurations?: AvailabilityTimeSlotsConfiguration[];
  }
  interface AvailabilityTimeSlotsConfiguration {
      /** Service ID. */
      serviceId?: string;
      /** Resource types required to book this service, for instance, booking a room from the "rooms" resource type and a staff member from the "staff" resource type. */
      resourceTypes?: ResourceType[];
      /**
       * The locations this service is offered at.
       * Only multiple locations of type `BUSINESS` are supported. multiple locations of type `CUSTOM` or `CUSTOMER` are not supported.
       */
      locations?: Location[];
      /**
       * The time between available slots' start times.
       * For example, for 5-minute slots, 3:00, 3:05, 3:15 etc. For 1-hour slots, 3:00, 4:00, 5:00 etc.
       */
      splitIntervalInMinutes?: number;
      /** The duration of the service. */
      duration?: Duration;
      /**
       * The number of minutes between the end of a slot and the start of the next.
       * Min: `0 minutes`
       * Max: `720 minutes`
       */
      bufferTimeInMinutes?: number;
  }
  interface ResourceType {
      /** Resource type ID. */
      resourceTypeId?: string | null;
      /**
       * Resource IDs.
       * The potential resources available for booking, with the required number of resources to book defined by 'numberOfResourcesRequired.' These resources may be a subset within the resource type.
       */
      resourceIds?: string[] | null;
      /**
       * The number of resources required to book the service.
       * Optional.
       * Default: `1`
       * Currently only `1` is supported.
       */
      numberOfResourcesRequired?: number | null;
      /**
       * Whether to return the available resources in the response for this particular type.
       * Optional.
       * Default: `true`
       * Internal - Not supported yet.
       * @internal
       */
      returnAvailableResources?: boolean | null;
  }
  interface Location {
      /** Business Location ID. Present if the location is a business location. */
      _id?: string | null;
      /** Location name. */
      name?: string | null;
      /** A string containing the full address of this location. */
      formattedAddress?: string | null;
      /**
       * The type of location:
       * - `CUSTOM`: The location is specific to this service, and is not derived from the business location.
       * - `BUSINESS`: A business location, either the default business address, or locations defined for the business by the Business Info.
       * - `CUSTOMER`: Will be determined by the customer.
       */
      locationType?: LocationType;
  }
  enum LocationType {
      UNKNOWN_LOCATION_TYPE = "UNKNOWN_LOCATION_TYPE",
      /** The location is unique to this service and isn't defined as one of the business locations. */
      CUSTOM = "CUSTOM",
      /** The location is one of the business locations available using the Business Info. */
      BUSINESS = "BUSINESS",
      /** The location can be determined by the customer and is not set up beforehand. */
      CUSTOMER = "CUSTOMER"
  }
  interface Duration {
      /**
       * Default duration in minutes.
       * Min: `1 minute`
       * Max: `44639 minutes` (30 days, 23 hours, and 59 minutes)
       */
      defaultInMinutes?: number;
  }
  interface AvailabilityTimeSlotsProviderConfig {
      /** URI where the SPI Implementer is deployed. */
      deploymentUri?: SpiBaseUri;
      /** User-friendly name of the provider. */
      providerName?: string | null;
  }
  interface SpiBaseUri {
      /** URI that will be used by the host to call the implementer. The path-suffix defined on the method will be appended to it */
      baseUri?: string;
      /** override method mappings per method */
      alternativeUris?: AlternativeUri[];
  }
  interface AlternativeUri {
      /** name of the method as it appears in the proto */
      methodName?: string;
      /** absolute uri that will be used by the host to call that method. The path-suffix mapped from the method http option will NOT be appended to this URI. For TPAs. it must be https */
      absoluteUri?: string;
  }
  /**
   * this message is not directly used by any service,
   * it exists to describe the expected parameters that SHOULD be provided to invoked Velo methods as part of open-platform.
   * e.g. SPIs, event-handlers, etc..
   * NOTE: this context object MUST be provided as the last argument in each Velo method signature.
   *
   * Example:
   * ```typescript
   * export function wixStores_onOrderCanceled(event: OrderCanceledEvent, context: Context) {
   * ...
   * }
   * ```
   */
  interface Context {
      /** A unique identifier for each request. Can be used for logging / troubleshooting */
      requestId?: string | null;
      /** 3 capital letters string representing a currency according to ISO-4217 */
      currency?: string | null;
      /** The identification type and identity data */
      identity?: IdentificationData;
      /** A string representing a language and region in the format of "xx-XX". First 2 letters represent the language code according to ISO 639-1. This is followed by a dash "-", and then a by 2 capital letters representing the region according to ISO 3166-2 */
      languages?: string[];
      /** App instance ID of SPI in context */
      instanceId?: string | null;
  }
  enum IdentityType {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  interface IdentificationData extends IdentificationDataIdOneOf {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
      /** @readonly */
      identityType?: IdentityType;
  }
  /** @oneof */
  interface IdentificationDataIdOneOf {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
  }
  interface ListAvailabilityTimeSlotConfigurationsOptions {
      /**
       * IDs of the services for which configurations are to be retrieved.
       * Deprecated. Use 'services'.
       */
      serviceIds?: string[];
      /** Service IDs paired with selected customer choices. */
      services?: Service[];
  }
  
  export { AlternativeUri, AvailabilityTimeSlotsConfiguration, AvailabilityTimeSlotsProviderConfig, BusinessError, Context, CustomerChoices, Duration, IdentificationData, IdentificationDataIdOneOf, IdentityType, ListAvailabilityTimeSlotConfigurationsOptions, ListAvailabilityTimeSlotConfigurationsRequest, ListAvailabilityTimeSlotConfigurationsResponse, Location, LocationType, ResourceType, Service, SpiBaseUri };
}
