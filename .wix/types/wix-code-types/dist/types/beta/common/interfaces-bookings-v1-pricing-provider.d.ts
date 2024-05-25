declare module "interfaces-bookings-v1-pricing-provider" {
  interface PricingProvider {
  }
  interface CalculatePriceRequest {
      /** Booking to calculate the price for. */
      booking?: Booking;
  }
  /** The booking object, version 2. */
  interface Booking extends BookingParticipantsInfoOneOf {
      /** Total number of participants. Available only when the booking includes a single service variant. */
      totalParticipants?: number;
      /**
       * Information about the booked service choices and participants.
       * Available only when the booking includes multiple service variants.
       */
      participantsChoices?: ParticipantChoices;
      /**
       * Booking ID.
       * @readonly
       */
      _id?: string | null;
      /** An object describing the slot or schedule that was booked. */
      bookedEntity?: BookedEntity;
      /** Contact details of the site visitor or member making the booking. */
      contactDetails?: ContactDetails;
      /** Additional custom fields submitted with the booking form. */
      additionalFields?: CustomFormField[];
      /**
       * Number of participants.
       * @internal
       */
      numberOfParticipants?: number | null;
      /**
       * Internal business note
       * @internal
       */
      internalBusinessNote?: string | null;
      /**
       * Booking status.
       * One of:
       * - `"CREATED"` - The booking was created.
       * - `"UPDATED"` - The booking was updated.
       * - `"CONFIRMED"` - The booking was confirmed and appears on the bookings calendar.
       * A booking can be manually confirmed using the [`Confirm Or Decline API`](www.example.com).
       * A booking can be automatically confirmed when the following requirements are met:
       * + The service is configured as automatically confirmed.
       * + The system invoked the eCommerce checkout API and created an order.
       * - `"CANCELED"` - The booking has been canceled and synced to the bookings calendar.
       * The booking can be canceled using [`Cancel Booking API`](www.example.com).
       * - `"PENDING"` - The booking is waiting to be confirmed or declined by the owner and the booking is synced to the bookings calendar.
       * Bookings can be manually set as `PENDING` using the [`setAsPending` API](www.example.com), by those with Manage Booking Status permissions scopes.
       * Bookings can be automatically set as `PENDING` when the following requirements are met:
       * + The service is configured as manually confirmed.
       * + Invoking the eCommerce checkout API and an order has been created.
       * - `"WAITING_LIST"` - The booking is on a waiting list.
       * - `"DECLINED"` - The booking was declined by the owner and synced to the Bookings calendar.
       * Bookings can be manually declined using the [`Decline Booking` API](www.example.com) by those with Manage Booking Status permissions scopes.
       * Booking can be automatically declined when one of the following requirements are met:
       * + Invoking the `eCommerce checkout` API and the order declined event has been sent.
       * + Invoking the `eCommerce checkout` API and order approved event has been sent, but the booking is offline and the booking causes a double booking.
       */
      status?: BookingStatus;
      /**
       * Payment status.
       * One of:
       * - `"NOT_PAID"` The booking is not paid for.
       * - `"PAID"` The booking is fully paid.
       * - `"PARTIALLY_PAID"` The booking is partially paid.
       * - `"REFUNDED"` The booking is refunded.
       * @readonly
       */
      paymentStatus?: PaymentStatus;
      /**
       * Selected payment option.
       * One of the payment options offered by the service, or another option if `skipSelectedPaymentOptionValidation` is `true`.
       * When undefined, the payment option is resolved by the service configuration on checkout.
       */
      selectedPaymentOption?: SelectedPaymentOption;
      /**
       * Date and time the booking was created.
       * @readonly
       */
      _createdDate?: Date;
      /** External ID provided by the client app on creation. */
      externalUserId?: string | null;
      /**
       * An object describing the platform and application that made the booking.
       * @internal
       */
      bookingSource?: BookingSource;
      /**
       * The last notification used by Cancel, Confirm, Decline, or Reschedule Booking.
       * @internal
       */
      participantNotification?: ParticipantNotification;
      /**
       * When value is set to True, an SMS reminder would be sent to the phone number specified in the ContactDetails, 24 hours before the session starts.
       * @internal
       */
      sendSmsReminder?: boolean | null;
      /** Revision number to be used when updating, rescheduling, or cancelling the booking. Revision number, which increments by 1 each time the booking is updated, rescheduled, or canceled. To prevent conflicting changes,the current revision must be passed when updating the booking. */
      revision?: string | null;
      /**
       * ID of the creator of the Booking.
       * If `appId` and another ID are present, the other ID takes precedence.
       * @readonly
       */
      createdBy?: IdentificationData;
      /**
       * The start date of this booking. For a slot, this is the start date of the slot. For a schedule, this is the start date of the first session.
       * @readonly
       */
      startDate?: Date;
      /**
       * The end date of this booking. For a slot, this is the end date of the slot. For a schedule, this is the end date of the last session.
       * @readonly
       */
      endDate?: Date;
      /**
       * Sets the booking flow behavior. Some behaviors require permissions.
       * @internal
       */
      flowControlSettings?: FlowControlSettings;
      /**
       * Date and time the booking was updated.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Additional custom fields. This includes fields managed by Wix, by 3rd-party apps, and by the site.
       *
       * Empty fields are not returned.
       */
      extendedFields?: ExtendedFields;
      /**
       * Whether this booking overlaps another existing confirmed booking. Returned when: `true`
       * @readonly
       */
      doubleBooked?: boolean | null;
  }
  /** @oneof */
  interface BookingParticipantsInfoOneOf {
      /** Total number of participants. Available only when the booking includes a single service variant. */
      totalParticipants?: number;
      /**
       * Information about the booked service choices and participants.
       * Available only when the booking includes multiple service variants.
       */
      participantsChoices?: ParticipantChoices;
  }
  interface BookedEntity extends BookedEntityItemOneOf {
      /** The booked slot, once booked becomes a session, The booking is automatically assigned to the session if it already exists, or creates a session if one doesn't already exist. */
      slot?: BookedSlot;
      /** The booked schedule. The booking is automatically assigned to the schedule's sessions. */
      schedule?: BookedSchedule;
      /** Session title at the time of booking. */
      title?: string | null;
      /**
       * List of tags for the booking.
       * System-assigned tags for sessions and schedules are:
       * + "INDIVIDUAL" Appointments, including appointments with more than 1 participant.
       * + "GROUP" Individual classes.
       * + "COURSE" Courses.
       */
      tags?: string[] | null;
  }
  /** @oneof */
  interface BookedEntityItemOneOf {
      /** The booked slot, once booked becomes a session, The booking is automatically assigned to the session if it already exists, or creates a session if one doesn't already exist. */
      slot?: BookedSlot;
      /** The booked schedule. The booking is automatically assigned to the schedule's sessions. */
      schedule?: BookedSchedule;
  }
  interface BookedSlot {
      /**
       * ID of the underlying session when session is a single session or generated from a recurring session.
       * If `sessionId` is defined in the `Create Booking` request, the `startDate`, `endDate`, `timezone`, `resource`, and `location` fields are ignored and populated from the existing session's information.
       */
      sessionId?: string | null;
      /** Service ID. */
      serviceId?: string;
      /** Schedule ID. Required. */
      scheduleId?: string;
      /**
       * The start time of this slot in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339)
       * format.
       */
      startDate?: string | null;
      /**
       * The end time of this slot in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339)
       * format.
       */
      endDate?: string | null;
      /** The timezone according to which the slot was shown to the user when booking, and should be shown in future. */
      timezone?: string | null;
      /** The resource assigned to the slot. */
      resource?: BookedResource;
      /** Location where the slot's session takes place. */
      location?: Location;
  }
  interface BookedResource {
      /** Booked resource ID. */
      _id?: string;
      /** Resource's name at the time of booking. */
      name?: string | null;
      /** Resource's email at the time of booking. */
      email?: string | null;
      /** Resource's schedule ID. */
      scheduleId?: string | null;
  }
  interface Location {
      /**
       * Business location ID. Available only for locations that are business locations,
       * meaning the `location_type` is `"OWNER_BUSINESS"`.
       */
      _id?: string | null;
      /** Location name. */
      name?: string | null;
      /** The full address of this location. */
      formattedAddress?: string | null;
      /**
       * Location type.
       *
       * - `"OWNER_BUSINESS"`: The business address, as set in the site’s general settings.
       * - `"OWNER_CUSTOM"`: The address as set when creating the service.
       * - `"CUSTOM"`: The address as set for the individual session.
       */
      locationType?: LocationType;
  }
  enum LocationType {
      UNDEFINED = "UNDEFINED",
      OWNER_BUSINESS = "OWNER_BUSINESS",
      OWNER_CUSTOM = "OWNER_CUSTOM",
      CUSTOM = "CUSTOM"
  }
  interface BookedSchedule {
      /** Schedule ID. */
      scheduleId?: string;
      /** Booked service ID. */
      serviceId?: string | null;
      /**
       * Location where the schedule's sessions take place. Read only.
       * @readonly
       */
      location?: Location;
      /** The timezone according to which the slot was shown to the user when booking, and should be shown in future. */
      timezone?: string | null;
      /**
       * The start time of the first session in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339)
       * format. Required.
       * @readonly
       */
      firstSessionStart?: string | null;
      /**
       * The end time of the last session in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339)
       * format. Required.
       * @readonly
       */
      lastSessionEnd?: string | null;
  }
  interface ContactDetails {
      /** Contact's ID. */
      contactId?: string | null;
      /** Contact's first name. When populated from a standard booking form, this property corresponds to the **Name** field. */
      firstName?: string | null;
      /** Contact's last name. */
      lastName?: string | null;
      /** Contact's email, used to create a new contact or get existing one from the [Contacts API](https://dev.wix.com/api/rest/contacts/contacts). Used to validate coupon usage limitations per contact. If not passed, the coupon usage limitation will not be enforced. (Coupon usage limitation validation is not supported yet). */
      email?: string | null;
      /** Contact's phone number. */
      phone?: string | null;
      /** Contact's full address. */
      fullAddress?: Address;
      /** Contact's time zone. */
      timeZone?: string | null;
      /** Contact's country in [ISO 3166-1 alpha-2 code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. */
      countryCode?: string | null;
  }
  /** Physical address */
  interface Address extends AddressStreetOneOf {
      /** Street name, number and apartment number. */
      streetAddress?: StreetAddress;
      /** Main address line, usually street and number, as free text. */
      addressLine?: string | null;
      /** Country code. */
      country?: string | null;
      /** Subdivision. Usually state, region, prefecture or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). */
      subdivision?: string | null;
      /** City name. */
      city?: string | null;
      /** Zip/postal code. */
      postalCode?: string | null;
      /** Free text providing more detailed address info. Usually contains Apt, Suite, and Floor. */
      addressLine2?: string | null;
      /** A string containing the full address of this location. */
      formattedAddress?: string | null;
      /** Free text to help find the address. */
      hint?: string | null;
      /** Coordinates of the physical address. */
      geocode?: AddressLocation;
      /** Country full name. */
      countryFullname?: string | null;
      /** Multi-level subdivisions from top to bottom. */
      subdivisions?: Subdivision[];
  }
  /** @oneof */
  interface AddressStreetOneOf {
      /** Street name, number and apartment number. */
      streetAddress?: StreetAddress;
      /** Main address line, usually street and number, as free text. */
      addressLine?: string | null;
  }
  interface StreetAddress {
      /** Street number. */
      number?: string;
      /** Street name. */
      name?: string;
      /** Apartment number. */
      apt?: string;
  }
  interface AddressLocation {
      /** Address latitude. */
      latitude?: number | null;
      /** Address longitude. */
      longitude?: number | null;
  }
  interface Subdivision {
      /** Subdivision code. Usually state, region, prefecture or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). */
      code?: string;
      /** Subdivision full name. */
      name?: string;
  }
  interface CustomFormField {
      /** ID of the form field as defined in the form. */
      _id?: string;
      /** Value that was submitted for this field. */
      value?: string | null;
      /**
       * Form field's label at the time of submission.
       * @readonly
       */
      label?: string | null;
      /**
       * <!--ONLY:VELO
       * One of:
       * - `"SHORT_TEXT"`
       * - `"LONG_TEXT"`
       * - `"CHECK_BOX"`
       * <!--END:ONLY:VELO-->
       */
      valueType?: ValueType;
  }
  enum ValueType {
      /** Short text. This is the default value type. */
      SHORT_TEXT = "SHORT_TEXT",
      /** Long text */
      LONG_TEXT = "LONG_TEXT",
      /** a text that represent the check box value: if selected the value is "true", otherwise "false". */
      CHECK_BOX = "CHECK_BOX"
  }
  /** Booking status. */
  enum BookingStatus {
      CREATED = "CREATED",
      CONFIRMED = "CONFIRMED",
      CANCELED = "CANCELED",
      PENDING = "PENDING",
      DECLINED = "DECLINED",
      WAITING_LIST = "WAITING_LIST"
  }
  /**
   * Payment status.
   * Automatically updated when using eCom checkout APIs.
   */
  enum PaymentStatus {
      UNDEFINED = "UNDEFINED",
      NOT_PAID = "NOT_PAID",
      PAID = "PAID",
      /** not supported yet. */
      PARTIALLY_PAID = "PARTIALLY_PAID",
      /** not supported yet */
      REFUNDED = "REFUNDED",
      EXEMPT = "EXEMPT"
  }
  /**
   * The selected payment option.
   * One of the payment options offered by the service.
   * This field is be set when the user selects an option during booking.
   * If left undefined, the payment option is resolved by the service configuration on checkout.
   */
  enum SelectedPaymentOption {
      UNDEFINED = "UNDEFINED",
      OFFLINE = "OFFLINE",
      ONLINE = "ONLINE",
      MEMBERSHIP = "MEMBERSHIP",
      /** Payment can only be done using a membership and must be manually redeemed in the dashboard by the site owner. */
      MEMBERSHIP_OFFLINE = "MEMBERSHIP_OFFLINE"
  }
  interface BookingSource {
      /**
       * Platform from which a booking was created
       * <!--ONLY:VELO
       * One of:
       * - `"WEB"` Desktop browser.
       * - `"MOBILE_APP"` Mobile application.
       * <!--END:ONLY:VELO-->
       */
      platform?: Platform;
      /**
       * Actor that created this booking.
       * <!--ONLY:VELO
       * One of:
       * - `"BUSINESS"`
       * - `"CUSTOMER"`
       * <!--END:ONLY:VELO-->
       */
      actor?: Actor;
      /**
       * Wix site ID of the application that created the booking.
       * @readonly
       */
      appDefId?: string | null;
      /**
       * Name of the application that created the booking, as saved in Wix Developers Center at the time of booking.
       * @readonly
       */
      appName?: string | null;
  }
  enum Platform {
      UNDEFINED_PLATFORM = "UNDEFINED_PLATFORM",
      WEB = "WEB",
      MOBILE_APP = "MOBILE_APP"
  }
  enum Actor {
      UNDEFINED_ACTOR = "UNDEFINED_ACTOR",
      BUSINESS = "BUSINESS",
      CUSTOMER = "CUSTOMER"
  }
  interface ParticipantNotification {
      /**
       * Whether to send the message about the changes to the customer.
       *
       * Default: `false`
       */
      notifyParticipants?: boolean;
      /** Custom message to send to the participants about the changes to the booking. */
      message?: string | null;
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
      /** ID of of a contact in the site's [CRM by Ascend](https://www.wix.com/ascend/crm) system. */
      contactId?: string | null;
      /**
       * @internal
       * @readonly
       */
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
  enum IdentityType {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  interface FlowControlSettings {
      /**
       * When true, skips the service defined booking-window in the booking policy.
       * Requires BOOKINGS.IGNORE_BOOKING_POLICY permissions.
       * private because it's confusing to external users - collides with skip_availability_validation
       * and yet, clients send it (though always with skip_availability_validation=true) so we're not just removing it
       * When removing, we need to use proto's `reserved` field
       * @internal
       */
      ignoreBookingWindow?: boolean;
      /**
       * When true, skips availability checking and allows booking.
       * Requires BOOKINGS.OVERRIDE_AVAILABILITY permissions.
       */
      skipAvailabilityValidation?: boolean;
      /**
       * When true, allows booking a confirmation-required service without requiring confirmation.
       * Requires BOOKINGS.IGNORE_BOOKING_POLICY permissions.
       */
      skipBusinessConfirmation?: boolean;
      /**
       * When true, skips selected payment option checking as defined in `selectedPaymentOption` field
       * and allows booking.
       * Requires BOOKINGS.MANAGE_PAYMENTS permissions.
       */
      skipSelectedPaymentOptionValidation?: boolean;
      /** When true, refunds the booking's payment when the booking is canceled. */
      withRefund?: boolean | null;
  }
  interface ExtendedFields {
      /**
       * Data Extensions extended fields
       * Key: Namespace
       * Value: extended fields data in Struct format
       */
      namespaces?: Record<string, Record<string, any>>;
  }
  interface ParticipantChoices {
      /** Information about the booked service choices. Includes the number of participants. */
      serviceChoices?: ServiceChoices[];
  }
  interface ServiceChoices {
      /** Number of participants for this variant. */
      numberOfParticipants?: number | null;
      /** Service choices for these participants. */
      choices?: ServiceChoice[];
  }
  interface ServiceChoice extends ServiceChoiceChoiceOneOf {
      /**
       * Value for one of the choices in the [`CustomServiceOption.choices`](https://example.com) list.
       * Choices are specific values for an option the customer can choose to book. For example,
       * the option `ageGroup` may have these choices: `child`, `student`, `adult`, and `senior`.
       * Each choice may have a different price.
       */
      custom?: string;
      /**
       * ID of the corresponding option for the choice. For example, the choice `child`
       * could correspond to the option `ageGroup`. In this case, `optionId` is the ID
       * for the `ageGroup` option.
       */
      optionId?: string;
  }
  /** @oneof */
  interface ServiceChoiceChoiceOneOf {
      /**
       * Value for one of the choices in the [`CustomServiceOption.choices`](https://example.com) list.
       * Choices are specific values for an option the customer can choose to book. For example,
       * the option `ageGroup` may have these choices: `child`, `student`, `adult`, and `senior`.
       * Each choice may have a different price.
       */
      custom?: string;
  }
  interface CalculatePriceResponse extends CalculatePriceResponseTotalPriceOneOf {
      /**
       * Calculated total price. Available only when the
       * [service](https://dev.wix.com/api/rest/wix-bookings/services/service/create-service)'s
       * price has been set up as numerical value in the
       * `schedule.rate.labeledPriceOptions` object.
       */
      calculatedPrice?: number;
      /**
       * Description of the total price. Available only when the
       * [service](https://dev.wix.com/api/rest/wix-bookings/services/service/create-service)'s
       * price has been set up as text value in the
       * `schedule.rate.priceText` field.
       */
      priceDescription?: string;
      /**
       * List of line items, including information about the number of participants and
       * the price per participant.
       */
      bookingLineItems?: BookingLineItem[];
      /**
       * Total deposit the customer must pay when booking the service. Provide only when
       * the service includes a deposit. Returning a `deposit` is optional. If you
       * return a `deposit` that's greater than the `calculatedPrice`, the deposit's
       * value is ignored. Instead, the customer must pay the total `calculatedPrice`
       * in full upfront as if it was a deposit.
       */
      deposit?: number | null;
      /**
       * 3-letter currency code in
       * [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes)
       * format. If you return a `currency`, it must be the one specified in the
       * [Site Properties](https://dev.wix.com/api/rest/business-info/site-properties/properties/get-site-properties).
       * @internal
       */
      currency?: string | null;
  }
  /** @oneof */
  interface CalculatePriceResponseTotalPriceOneOf {
      /**
       * Calculated total price. Available only when the
       * [service](https://dev.wix.com/api/rest/wix-bookings/services/service/create-service)'s
       * price has been set up as numerical value in the
       * `schedule.rate.labeledPriceOptions` object.
       */
      calculatedPrice?: number;
      /**
       * Description of the total price. Available only when the
       * [service](https://dev.wix.com/api/rest/wix-bookings/services/service/create-service)'s
       * price has been set up as text value in the
       * `schedule.rate.priceText` field.
       */
      priceDescription?: string;
  }
  interface BookingLineItem {
      /** Service ID. */
      serviceId?: string | null;
      /** Resource ID. Required for classes and appointments. */
      resourceId?: string | null;
      /** Custom [service choices](https://dev.wix.com/api/rest/wix-bookings/service-options-and-variants/introduction). */
      choices?: ServiceChoice[];
      /** Number of participants. */
      numberOfParticipants?: number | null;
      /** Price per participant. */
      pricePerParticipant?: number | null;
  }
  interface BookingsPricingProviderConfig {
      /** Human-readable name of the your pricing integration app. */
      pricingProviderName?: string;
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
      identity?: ContextIdentificationData;
      /** A string representing a language and region in the format of "xx-XX". First 2 letters represent the language code according to ISO 639-1. This is followed by a dash "-", and then a by 2 capital letters representing the region according to ISO 3166-2 */
      languages?: string[];
      /** App instance ID of SPI in context */
      instanceId?: string | null;
  }
  enum IdentificationDataIdentityType {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  interface ContextIdentificationData extends ContextIdentificationDataIdOneOf {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
      /** @readonly */
      identityType?: IdentificationDataIdentityType;
  }
  /** @oneof */
  interface ContextIdentificationDataIdOneOf {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
  }
  interface CalculatePriceOptions {
      /** Booking to calculate the price for. */
      booking?: Booking;
  }
  
  export { Actor, Address, AddressLocation, AddressStreetOneOf, BookedEntity, BookedEntityItemOneOf, BookedResource, BookedSchedule, BookedSlot, Booking, BookingLineItem, BookingParticipantsInfoOneOf, BookingSource, BookingStatus, BookingsPricingProviderConfig, CalculatePriceOptions, CalculatePriceRequest, CalculatePriceResponse, CalculatePriceResponseTotalPriceOneOf, ContactDetails, Context, ContextIdentificationData, ContextIdentificationDataIdOneOf, CustomFormField, ExtendedFields, FlowControlSettings, IdentificationData, IdentificationDataIdOneOf, IdentificationDataIdentityType, IdentityType, Location, LocationType, ParticipantChoices, ParticipantNotification, PaymentStatus, Platform, PricingProvider, SelectedPaymentOption, ServiceChoice, ServiceChoiceChoiceOneOf, ServiceChoices, StreetAddress, Subdivision, ValueType };
}
