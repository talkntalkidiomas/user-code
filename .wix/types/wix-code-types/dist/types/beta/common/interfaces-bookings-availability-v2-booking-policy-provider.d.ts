declare module "interfaces-bookings-availability-v2-booking-policy-provider" {
  type BusinessError<T = unknown> = {
      __tag: 'BusinessError';
      httpCode: string;
      errorDescription: string;
      applicationCode: string;
      messageSchema: string;
      data: T;
  };
  
  interface GetBookingPoliciesRequest {
      /** IDs of the services for which booking policies are to be retrieved. */
      serviceIds: string[];
  }
  interface GetBookingPoliciesResponse {
      /** The retrieved booking policies. */
      bookingPolicies?: BookingPolicy[];
  }
  interface BookingPolicy {
      /** Service ID. */
      serviceId?: string;
      /** Policy for limiting early bookings. */
      limitEarlyBooking?: LimitEarlyBooking;
      /** Policy for limiting late bookings. */
      limitLateBooking?: LimitLateBooking;
      /** Policy for allowing online bookings. */
      onlineBooking?: OnlineBooking;
      /**
       * Policy for waiting list.
       * Internal - Not supported yet.
       * @internal
       */
      waitingList?: WaitingList;
  }
  interface LimitEarlyBooking {
      /**
       * Whether there is a limit on how early a customer can book.
       * When `false`, there is no limit on the earliest booking time and customers can book in advance, as early as they like.
       * Default: `false`
       */
      enabled?: boolean;
      /**
       * Maximum number of minutes before the start of the slot that a booking can be made.
       * This value must be greater than `latestBookingInMinutes` in the `LimitLateBooking` policy.
       * Default: `10080 minutes` (7 days)
       * Min: `1 minute`
       */
      earliestBookingInMinutes?: number | null;
  }
  interface LimitLateBooking {
      /**
       * Whether there is a limit on how late a customer can book.
       * When `false`, there is no limit on the latest booking time and customers can book up to the last minute.
       * Default: `false`
       */
      enabled?: boolean;
      /**
       * Minimum number of minutes before the start of the slot that a booking can be made.
       * This value must be less than `earliestBookingInMinutes` in the `LimitEarlyBooking` policy.
       * Default: `1440 minutes` (1 day)
       * Min: `1 minute`
       */
      latestBookingInMinutes?: number | null;
  }
  interface OnlineBooking {
      /**
       * Whether this service can be booked online.
       * When set to `true`, customers can book the service online.
       * When set to `false`, customers cannot book the service online.
       * Default: `true`
       */
      enabled?: boolean | null;
  }
  /** TODO: implement default for total_capacity and hold_time_in_minutes */
  interface WaitingList {
      /**
       * Whether the event has a waitlist. If `true`, there is a waitlist.
       * Default: `false`
       */
      enabled?: boolean;
      /**
       * Number of spots available in the waitlist.
       * Default: `10 spots`
       * Min: `1 spot`
       */
      totalCapacity?: number | null;
      /**
       * Amount of time a participant is given to book, once notified that a spot is available.
       * Default: `10 minutes`
       * Min: `1 spot`
       */
      holdTimeInMinutes?: number | null;
  }
  interface ListBookingPoliciesRequest {
      /** IDs of the services for which booking policies are to be retrieved. */
      serviceIds: string[];
  }
  interface ListBookingPoliciesResponse {
      /** The retrieved booking policies. */
      bookingPolicies?: BookingPolicy[];
  }
  interface BookingPolicyProviderConfig {
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
  interface GetBookingPoliciesOptions {
      /** IDs of the services for which booking policies are to be retrieved. */
      serviceIds: string[];
  }
  interface ListBookingPoliciesOptions {
      /** IDs of the services for which booking policies are to be retrieved. */
      serviceIds: string[];
  }
  
  export { AlternativeUri, BookingPolicy, BookingPolicyProviderConfig, BusinessError, Context, GetBookingPoliciesOptions, GetBookingPoliciesRequest, GetBookingPoliciesResponse, IdentificationData, IdentificationDataIdOneOf, IdentityType, LimitEarlyBooking, LimitLateBooking, ListBookingPoliciesOptions, ListBookingPoliciesRequest, ListBookingPoliciesResponse, OnlineBooking, SpiBaseUri, WaitingList };
}
