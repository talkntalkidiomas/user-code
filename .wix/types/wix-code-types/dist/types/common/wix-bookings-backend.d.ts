/**
 * The wix-bookings-backend module contains functionality for working with bookings from backend code.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.html#)
 */
declare module 'wix-bookings-backend' {
    /**
     * The Bookings API provides functionality for updating and managing bookings created in the Wix Bookings app.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.html#bookings)
     */
    const bookings: Bookings;
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.html#events)
     */
    const events: Events;
    /**
     * The Resources API provides functionality for creating and managing wix-bookings resources.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.html#resources)
     */
    const resources: Resources;
    /**
     * The Bookings API provides functionality for creating and managing wix-bookings sessions.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.html#sessions)
     */
    const sessions: Sessions;
    /**
     * Custom [address](https://www.wix.com/velo/reference/$w/addressinput/value), used when location_type is `"OWNER_CUSTOM"`.
     */
    type Address = {
        /**
         * String containing the full address of this location.
         */
        formatted: string;
        /**
         * Main address line, usually street and number, as free text.
         */
        addressLine1?: string;
        /**
         * Free text providing more detailed address info. Usually contains Apt, Suite, and Floor.
         */
        addressLine2: string;
        /**
         * Street name, number and apartment number.
         */
        streetAddress?: StreetAddress;
        /**
         * Coordinates of the physical address.
         */
        location: AddressLocation;
        /**
         * City name.
         */
        city: string;
        /**
         * Subdivision. Usually state, region, prefecture or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2).
         */
        subdivision: string;
        /**
         * Country code.
         */
        country: string;
        /**
         * Zip/postal code.
         */
        postalCode: string;
    };
    /**
     * Coordinates of the physical address.
     */
    type AddressLocation = {
        /**
         * Address latitude.
         */
        latitude: number;
        /**
         * Address longitude.
         */
        longitude: number;
    };
    /**
     * Coordinates of the physical address.
     */
    type AddressLocationInfo = {
        /**
         * Address latitude.
         */
        latitude?: number;
        /**
         * Address longitude.
         */
        longitude?: number;
    };
    /**
     * Attendance information.
     */
    type AttendanceInfo = {
        /**
         * Whether the booked contact attended the session.
         */
        attendanceStatus: boolean;
        /**
         * Number of attendees that attended the session. This can be greater than 1 when the booking is made for a group of people.
         */
        numberOfAttendees: number;
    };
    /**
     * The final price, currency, down payment, and amount received.
     */
    type Balance = {
        /**
         * Required payment amount, currency, and any down payment required.
         */
        finalPrice: Price;
        /**
         * Current total amount paid.
         */
        amountReceived: string;
    };
    /**
     * An object describing the entity that was booked.
     */
    type BookedEntity = {
        /**
         * Price options offered to book this session at the time of booking.
         */
        rate: Rate;
        /**
         * Location of the session.
         */
        location: Location;
        /**
         * List of tags for the booking.
         */
        tags: string[];
        /**
         * ID of the booked schedule.
         */
        scheduleId: string;
        /**
         * Session title at the time of booking.
         */
        title: string;
        /**
         * Start and end time of the booked sessions.
         */
        singleSession?: SingleSession;
        /**
         * First start and last end time of the booked sessions.
         */
        setOfSessions?: SetOfSessions;
        /**
         * ID of the booked service.
         */
        serviceId: string;
        /**
         * Online conference information.
         */
        onlineConference?: OnlineConference;
    };
    type BookedResource = {
        /**
         * Booked resource ID.
         */
        _id: string;
        /**
         * Resource's name at the time of booking.
         */
        name: string;
        /**
         * Resource's email at the time of booking.
         */
        email: string;
    };
    type Booking = {
        /**
         * Booking ID.
         */
        _id: string;
        /**
         * An object describing the entity that was booked.
         */
        bookedEntity: BookedEntity;
        /**
         * List of booked resources. Currently, only one is supported. The booked resource would be the staff-member giving the session.
         */
        bookedResources: BookedResource[];
        /**
         * Form information submitted when booking. FormInfo contains contact details, participants, and other form fields, set up for the service.
         */
        formInfo?: Form;
        /**
         * Payment Details.
         */
        paymentDetails?: PaymentDetails;
        /**
         * Booking status.
         *
         *  One of:
         *  - `"PENDING_CHECKOUT"` The booking is waiting to be checked out.
         *  - `"CONFIRMED"` The booking has beed approved by the owner.
         *  - `"CANCELED"` The booking has been canceled.
         *  - `"PENDING"` The booking has been created.
         *  - `"PENDING_APPROVAL"` The booking is waiting for the owner to approve or decline.
         *  - `"DECLINED"` The booking was declined by the owner.
         *
         */
        status: string;
        /**
         * Attendance information.
         */
        attendanceInfo: AttendanceInfo;
        /**
         * An object describing the platform and application that made the booking.
         */
        bookingSource: BookingSource;
        /**
         * External ID provided by the client app on creation.
         */
        externalUserId?: string;
        /**
         * Date and time the booking was created.
         */
        _createdDate: Date;
    };
    /**
     * An object describing the platform and application that made the booking.
     */
    type BookingSource = {
        /**
         * Platform from which a booking was created
         *
         *  One of:
         *  - `"WEB"` Desktop browser.
         *  - `"MOBILE_APP"` Mobile application.
         *
         */
        platform: string;
        /**
         * Actor that created this booking.
         *
         * One of:
         *  - `"BUSINESS"`
         *  - `"CUSTOMER"`
         *
         */
        actor: string;
        /**
         * Wix site ID of the application that created this booking.
         */
        appDefId: string;
        /**
         * Name of the application that created this booking, as saved in Wix-dev-center at the time of booking.
         */
        appName: string;
    };
    /**
     * An object describing the business location.
     */
    type BusinessLocation = {
        /**
         * ID of the location.
         */
        _id: string;
        /**
         * Display name of the location.
         */
        name: string;
        /**
         * Free text describing the location.
         */
        description: string;
        /**
         * Status of the location. Default is `"ACTIVE"`.
         * One of:
         *  + `"ACTIVE"`
         *  + `"IN_ACTIVE"`
         */
        status: string;
        /**
         * Type of the location.
         * One of:
         *  + `"UNKNOWN"`
         *  + `"BRANCH"`
         *  + `"OFFICES"`
         *  + `"RECEPTION"`
         *  + `"HEADQUARTERS"`
         */
        locationType: string;
        /**
         * Fax number.
         */
        fax: string;
        /**
         * Time zone.
         */
        timeZone: string;
        /**
         * Email address.
         */
        email: string;
        /**
         * Phone number.
         */
        phone: string;
        /**
         * Address.
         */
        address: Address;
        /**
         * Location revision, represents the number of changes to the location.
         */
        revision: string;
        /**
         * Whether the location is archived.
         * Archived locations can't be updated.
         */
        archived: boolean;
        /**
         * Whether this is the default location.
         * There can only be one default location per site. Changes to the default location are made on the **Site Properties** page of the dashboard.
         * The default location can't be deleted.
         */
        default: boolean;
    };
    /**
     * An object specifying the start date and time of the session. If the session is a recurring session, `start` must contain a `localDateTime`.
     */
    type CalendarDateTime = {
        /**
         * UTC date-time in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)) format. If a timezone offset is specified, the time is converted to UTC. For example, if you specify  `new Date('2021-01-06T16:00:00.000-07:00')`, the stored value will be `"2021-01-06T23:00:00.000Z"`.
         * Required if `localDateTime` is not specified.
         * If `localDateTime` is specified, `timestamp` is calculated as `localDateTime`, using the business's timezone.
         */
        timestamp: Date;
        /**
         * An object containing the local date and time for the business's timezone.
         */
        localDateTime: LocalDateTime;
    };
    /**
     * An object specifying the start date and time of the session. If the session is a recurring session, `start` must contain a `localDateTime`.
     */
    type CalendarDateTimeInfo = {
        /**
         * UTC date-time in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)) format. If a timezone offset is specified, the time is converted to UTC. For example, if you specify  `new Date('2021-01-06T16:00:00.000-07:00')`, the stored value will be `"2021-01-06T23:00:00.000Z"`.
         * Required if `localDateTime` is not specified.
         * If `localDateTime` is specified, `timestamp` is calculated as `localDateTime`, using the business's timezone.
         */
        timestamp?: Date;
        /**
         * An object containing the local date and time for the business's timezone.
         */
        localDateTime?: LocalDateTimeInfo;
    };
    /**
     * Contact details of the customer making the booking.
     */
    type ContactDetails = {
        /**
         * Contact's ID.
         */
        contactId: string;
        /**
         * Contact's first name. When populated from a standard booking form, this property corresponds to the **Name** field.
         */
        firstName: string;
        /**
         * Contact's last name.
         */
        lastName: string;
        /**
         * Contact's email, used to create a new contact or get existing one from the [CRM API](wix-crm-frontend/introduction).
         */
        email: string;
        /**
         * Contact's phone number.
         */
        phone: string;
        /**
         * Contact's time zone.
         */
        timeZone: string;
        /**
         * Contact's country in [ISO 3166-1 alpha-2 code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
         */
        countryCode: string;
        /**
         * Custom [address](https://www.wix.com/velo/reference/$w/addressinput/value), used when location_type is `"OWNER_CUSTOM"`.
         */
        address: Address;
    };
    /**
     * Coupon details, if a coupon was used to pay for the booking.
     */
    type CouponDetails = {
        /**
         * Coupon name.
         */
        couponName: string;
        /**
         * Coupon code.
         */
        couponCode: string;
        /**
         * Coupon discount amount.
         */
        couponDiscount: string;
        /**
         * Coupon ID.
         */
        couponId: string;
    };
    type CustomFormField = {
        /**
         * ID of the form field as defined in the form.
         */
        _id: string;
        /**
         * Value that was submitted for this field.
         */
        value: string;
        /**
         * Form field's label at the time of submission.
         */
        label: string;
        /**
         *
         * One of:
         *  - `"SHORT_TEXT"`
         *  - `"LONG_TEXT"`
         *  - `"CHECK_BOX"`
         *
         */
        valueType: string;
    };
    type CustomFormFieldInfo = {
        /**
         * ID of the form field as defined in the form.
         */
        _id?: string;
        /**
         * Value that was submitted for this field.
         */
        value?: string;
        /**
         *
         * One of:
         *  - `"SHORT_TEXT"`
         *  - `"LONG_TEXT"`
         *  - `"CHECK_BOX"`
         *
         */
        valueType?: string;
    };
    /**
     * Form information submitted when booking. FormInfo contains contact details, participants, and other form fields, set up for the service.
     */
    type Form = {
        /**
         * Contact details of the customer making the booking.
         */
        contactDetails?: ContactDetails;
        /**
         * List of rates and the number of participants for each rate.
         */
        paymentSelection: PaymentSelection[];
        /**
         * Additional custom fields submitted with the form.
         */
        additionalFields?: CustomFormField[];
    };
    type LinkedResourceScheduleInfo = {
        /**
         * Schedule ID.
         */
        scheduleId?: string;
    };
    /**
     * An object containing the local date and time for the business's timezone.
     */
    type LocalDateTime = {
        /**
         * Year. 4-digit format.
         */
        year: number;
        /**
         * Month number, from 1-12.
         */
        monthOfYear: number;
        /**
         * Day of the month, from 1-31.
         */
        dayOfMonth: number;
        /**
         * Hour of the day in 24-hour format, from 0-23.
         */
        hourOfDay: number;
        /**
         * Minute, from 0-59.
         */
        minutesOfHour: number;
    };
    /**
     * An object containing the local date and time for the business's timezone.
     */
    type LocalDateTimeInfo = {
        /**
         * Year. 4-digit format.
         */
        year?: number;
        /**
         * Month number, from 1-12.
         */
        monthOfYear?: number;
        /**
         * Day of the month, from 1-31.
         */
        dayOfMonth?: number;
        /**
         * Hour of the day in 24-hour format, from 0-23.
         */
        hourOfDay?: number;
        /**
         * Minute, from 0-59.
         */
        minutesOfHour?: number;
    };
    /**
     * The location of the session.
     */
    type Location = {
        /**
         * Location type.
         *
         *  One of:
         *  - `"OWNER_BUSINESS"` The business address as set in the site’s general settings.
         *  - `"OWNER_CUSTOM"` The address as set when creating the service.
         *  - `"CUSTOM"` The address set for the individual session.
         *
         */
        locationType: string;
        /**
         * An object describing the business location.
         * Valid when `locationType` is `"OWNER_BUSINESS"`. Defaults to the business's default location.
         */
        businessLocation: BusinessLocation;
        /**
         * Custom [address](https://www.wix.com/velo/reference/$w/addressinput/value), used when location_type is `"OWNER_CUSTOM"`.
         */
        customAddress: Address;
    };
    /**
     * Online conference information.
     */
    type OnlineConference = {
        /**
         * Participant url.
         */
        guestUrl: string;
        /**
         * Online conference provider identifier.
         */
        providerId: string;
        /**
         * Online conference password.
         */
        password: string;
        /**
         * Online conference description.
         */
        description: string;
    };
    /**
     * Authorization options.
     */
    type Options = {
        /**
         * When `true`, prevents permission checks from running for the operation. Defaults to `false`.
         */
        suppressAuth?: boolean;
    };
    /**
     * Plan details.
     */
    type PaidPlan = {
        /**
         * Order ID when the Pricing Plan was purchased.
         */
        orderId: string;
        /**
         * Benefit ID.
         */
        benefitId: string;
        /**
         * ID of the pricing plan.
         */
        planId: string;
    };
    /**
     * Pricing plan details, if a pricing plan was used to pay for the booking.
     */
    type PaidPlanDetails = {
        /**
         * Plan details.
         */
        plan: PaidPlan;
        /**
         * Plan name.
         */
        planName: string;
        /**
         * Transaction ID created in the Pricing Plans service when the member redeemed a benefit to pay for this booking.
         */
        transactionId: string;
    };
    /**
     * Whether to notify the participants about the booking confirmation, and an optional custom message.
     */
    type ParticipantNotificationInfo = {
        /**
         * Whether to notify participants about the change.
         */
        notifyParticipants?: boolean;
        /**
         * Custom message to send to the participants.
         */
        message?: string;
    };
    /**
     * Payment Details.
     */
    type PaymentDetails = {
        /**
         * Checkout ID.
         */
        _id: string;
        /**
         * Final price, currency, down payment, and amount received.
         */
        balance: Balance;
        /**
         * Coupon details, if a coupon was used to pay for the booking.
         */
        couponDetails: CouponDetails;
        /**
         * Checkout current state.
         *
         *  One of:
         *  - `"COMPLETE"` Amount paid in full.
         *  - `"PENDING_CASHIER"` An online payment is in progress and awaiting a response.
         *  - `"REJECTED"` The checkout request was rejected by the online payment process.
         *  - `"READY"` All online checkout requirements were met. For example, when the service uses pay in person, or a partial or down payment was paid online.
         *  - `"CANCELED"`  Checkout canceled.
         *  - `"REFUNDED"` When using Pricing Plans, if the booking was canceled, it will be automatically refunded.
         *  - `"PENDING_MERCHANT"` An online payment was made, but the owner has not set up the necessary details.
         *  - `"WIX_PAY_FAILURE"` Online payment failure.
         *  - `"PENDING_MARK_AS_PAID"` Offline transaction. The transaction will be complete when explicitly marked as paid.
         *  - `"PENDING_BUYER"`  The transaction started, but is waiting for confirmation on the buyer's side. This can be due to credit or fraud checking on the provider's side, a long bank transfer, or similar processes.
         *
         */
        state: string;
        /**
         * In case of wix-pay service, holds all payment history for a booking.
         */
        wixPayMultipleDetails: WixPayDetails[];
        /**
         * Pricing plan details, if a pricing plan was used to pay for the booking.
         */
        pricingPlanDetails: PaidPlanDetails;
    };
    type PaymentSelection = {
        /**
         * Label corresponding to the booking rate. Default is free/custom.
         */
        rateLabel: string;
        /**
         * Number of participants for this rate.
         */
        numberOfParticipants: number;
    };
    type PaymentSelectionInfo = {
        /**
         * Label corresponding to the booking rate. Default is free/custom.
         */
        rateLabel?: string;
        /**
         * Number of participants for this rate.
         */
        numberOfParticipants?: number;
    };
    /**
     * `key` of type string, `value` of type object
     */
    type Price = {
        /**
         * Required payment amount.
         */
        amount: string;
        /**
         * Currency in which the amount is quoted.
         */
        currency: string;
        /**
         * Amount of a down payment or deposit as part of the transaction.
         */
        downPayAmount: string;
    };
    /**
     * Price options offered to book this session at the time of booking.
     */
    type Rate = {
        /**
         * Set of key-value pairs.Mapping between a named price option, for example, adult or child prices, and the price, currency, and down payment amount.
         */
        labeledPriceOptions: any;
        /**
         * Textual price information used when **Price Per Session** is set to **Custom Price** in the app's service details page.
         */
        priceText: string;
    };
    /**
     * Resource details.
     */
    type Resource = {
        /**
         * Resource ID.
         */
        _id: string;
        /**
         * Resource name.
         */
        name: string;
        /**
         * Resource email address.
         */
        email?: string;
        /**
         * Resource phone number.
         */
        phone?: string;
        /**
         * Resource description.
         */
        description?: string;
        /**
         * Resource tags. Tags are used to identify, group, and filter the different types of resources. For example, 'staff' or 'room'.
         */
        tags?: string[];
        /**
         * List of IDs of schedules owned by this resource.
         */
        scheduleIds: string[];
        /**
         * Resource status.
         *
         *  One of:
         *  - `"CREATED"` Default status.
         *  - `"DELETED"` The resource was deleted.
         *  - `"UPDATED"` The resource was updated.
         *
         */
        status: string;
    };
    /**
     * First start and last end time of the booked sessions.
     */
    type SetOfSessions = {
        /**
         * Start time of the first session.
         */
        firstSessionStart: Date;
        /**
         * End time of the last session.
         */
        lastSessionEnd: Date;
    };
    /**
     * Start and end time of the booked sessions.
     */
    type SingleSession = {
        sessionId: string;
        /**
         * Start time of the session.
         */
        start: Date;
        /**
         * End time of the session.
         */
        end: Date;
    };
    /**
     * Street name, number and apartment number.
     */
    type StreetAddress = {
        /**
         * Street number.
         */
        number: string;
        /**
         * Street name.
         */
        name: string;
        /**
         * Apartment number.
         */
        apt: string;
    };
    /**
     * Street name, number and apartment number.
     */
    type StreetAddressInfo = {
        /**
         * Street number.
         */
        number?: string;
        /**
         * Street name.
         */
        name?: string;
        /**
         * Apartment number.
         */
        apt?: string;
    };
    type WixPayDetails = {
        /**
         * Wix Pay payment transaction ID.
         */
        txId: string;
        /**
         * Wix Pay payment order ID.
         */
        orderId: string;
        /**
         * Order amount sent to the Wix Pay system.
         */
        orderAmount: string;
        /**
         * Transaction status
         *
         *  One of:
         *  - `"CREATED"`  The transaction has been started.
         *  - `"PENDING_MERCHANT"` An online payment was made, but the owner has not set up the necessary details.
         *  - `"COMPLETE"`  The current part of the payment was completed.
         *  - `"FAILED"`  The Wix online payment system is unavailable or failed processing.
         *  - `"DECLINED"` The payment was declined.
         *  - `"PENDING_MARK_AS_PAID"` Offline transaction. The transaction will be complete when explicitly marked as paid.
         *  - `"CANCELED"` The transaction was canceled.
         *
         */
        orderStatus: string;
        /**
         * Date and time that the order was approved.
         */
        orderApprovalTime: Date;
        /**
         * Payment vendor name. The company processing the payment, such as Pay Pal or a credit card company. `inPerson` is used for cash payments.
         */
        paymentVendorName: string;
    };
    /**
     * The Bookings API provides functionality for updating and managing bookings created in the Wix Bookings app.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Bookings.html#)
     */
    interface Bookings {
        /**
         * Cancels an existing booking.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Bookings.html#cancelBooking)
         */
        cancelBooking(bookingId: string, options: Bookings.CancelBookingOptions): Promise<Bookings.CancelBookingResult>;
        /**
         * Confirms a booking request.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Bookings.html#confirmBooking)
         */
        confirmBooking(bookingId: string, options: Bookings.ConfirmBookingOptions): Promise<string>;
        /**
         * Declines a pending booking request.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Bookings.html#declineBooking)
         */
        declineBooking(bookingId: string, options: Bookings.DeclineBookingOptions): Promise<Bookings.DeclineBookingResult>;
        /**
         * Creates a query to retrieve a list of bookings.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Bookings.html#queryBookings)
         */
        queryBookings(): Bookings.BookingsQueryBuilder;
        /**
         * Sets the number of people who actually attended the session for the given booking.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Bookings.html#setAttendance)
         */
        setAttendance(bookingId: string, attendanceInfo: Bookings.AttendanceInfo, options?: Options): Promise<Booking>;
        /**
         * Marks a booking as fully paid.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Bookings.html#setBookingAsPaid)
         */
        setBookingAsPaid(bookingId: string, options?: Options): Promise<Booking>;
        /**
         * Updates the customer's information for a booking.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Bookings.html#updateCustomerInfo)
         */
        updateCustomerInfo(bookingId: string, formInfo: Bookings.FormInfo, options?: Options): Promise<Booking>;
    }
    /**
     * Events that are fired by actions related to Wix Bookings.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Events.html#)
     */
    interface Events {
        /**
         * An event that fires when a booking is canceled.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Events.html#onBookingCanceled)
         */
        onBookingCanceled(event: Events.BookingEvent): void;
        /**
         * An event that fires when a booking request is confirmed.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Events.html#onBookingConfirmed)
         */
        onBookingConfirmed(event: Events.BookingEvent): void;
        /**
         * An event that fires when a booking request is declined.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Events.html#onBookingDeclined)
         */
        onBookingDeclined(event: Events.BookingEvent): void;
        /**
         * An event that fires when a booking request is created.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Events.html#onBookingRequestCreated)
         */
        onBookingRequestCreated(event: Events.BookingEvent): void;
        /**
         * An event that fires when a booking's schedule is updated.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Events.html#onBookingScheduleUpdated)
         */
        onBookingScheduleUpdated(event: Events.BookingEvent): void;
        /**
         * An event that fires when a booking's details are updated.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Events.html#onBookingUpdated)
         */
        onBookingUpdated(event: Events.BookingEvent): void;
    }
    /**
     * The Bookings Resources API provides functionality for creating, managing, and querying resources.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Resources.html#)
     */
    interface Resources {
        /**
         * Creates a resource.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Resources.html#createResource)
         */
        createResource(resourceInfo: Resources.ResourceInfo, scheduleInfo: Resources.ResourceScheduleInfo[], options?: Options): Promise<Resource>;
        /**
         * Deletes a resource.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Resources.html#deleteResource)
         */
        deleteResource(resourceId: string, options?: Options): Promise<string>;
        /**
         * Creates a query to retrieve extended resource information.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Resources.html#queryResourceCatalog)
         */
        queryResourceCatalog(): Resources.ResourceCatalogQueryBuilder;
        /**
         * Updates a resource.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Resources.html#updateResource)
         */
        updateResource(id: string, resourceInfo: Resources.UpdateResourceInfo, options?: Options): Promise<Resource>;
        /**
         * Updates a resource's schedule.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Resources.html#updateResourceSchedule)
         */
        updateResourceSchedule(resourceId: string, scheduleId: string, scheduleInfo: Resources.ResourceScheduleInfo, options?: Options): Promise<Resources.ResourceSchedule>;
    }
    /**
     * The Sessions API provides functionality for creating, managing, and querying sessions.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Sessions.html#)
     */
    interface Sessions {
        /**
         * Creates a session.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Sessions.html#createSession)
         */
        createSession(sessionInfo: Sessions.SessionInfo, options?: Options): Promise<Sessions.Session>;
        /**
         * Deletes a session from a schedule.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Sessions.html#deleteSession)
         */
        deleteSession(sessionId: string, options?: Sessions.DeleteSessionOptions): Promise<string>;
        /**
         * Gets a session.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Sessions.html#getSession)
         */
        getSession(sessionId: string, options?: Options): Promise<Sessions.Session>;
        /**
         * Retrieves a list of the sessions according to the specified filters and paging.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Sessions.html#querySessions)
         */
        querySessions(): Sessions.SessionQueryBuilder;
        /**
         * Updates a session.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Sessions.html#updateSession)
         */
        updateSession(sessionId: string, sessionInfo: Sessions.UpdateSessionInfo, options?: Options): Promise<Sessions.Session>;
    }
    /**
     * The Bookings API provides functionality for updating and managing bookings created in the Wix Bookings app.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Bookings.html#)
     */
    namespace Bookings {
        /**
         * Attendance information for the booking
         */
        type AttendanceInfo = {
            /**
             * Whether the booked contact attended the session.
             */
            attended?: boolean;
            /**
             * Number of attendees that attended the session. This can be greater than 1 when the booking is made for a group of people.
             */
            numberOfAttendees?: number;
        };
        type CancelBookingOptions = {
            /**
             * Whether to notify the participants about the booking confirmation, and an optional custom message.
             */
            participantNotification?: ParticipantNotificationInfo;
            /**
             * Sets the cancel booking flow behavior.
             */
            flowControlSettings?: Bookings.FlowControlSettingsInfo;
            /**
             * When `true`, prevents permission checks from running for the operation. Defaults to `false`.
             */
            suppressAuth?: boolean;
        };
        type CancelBookingResult = {
            /**
             * ID of the canceled booking.
             */
            bookingId: string;
        };
        type ConfirmBookingOptions = {
            /**
             * Whether to notify the participants about the booking confirmation, and an optional custom message.
             */
            participantNotification?: ParticipantNotificationInfo;
            /**
             * When `true`, prevents permission checks from running for the operation. Defaults to `false`.
             */
            suppressAuth?: boolean;
        };
        /**
         * Contact details of the customer making the booking.
         */
        type ContactDetails = {
            /**
             * Contact's ID.
             */
            contactId?: string;
            /**
             * Contact's first name. When populated from a standard booking form, this property corresponds to the **Name** field.
             */
            firstName?: string;
            /**
             * Contact's last name.
             */
            lastName?: string;
            /**
             * Contact's email, used to create a new contact or get existing one from the [CRM API](wix-crm-frontend/introduction).
             */
            email?: string;
            /**
             * Contact's phone number.
             */
            phone?: string;
            /**
             * Contact's time zone.
             */
            timeZone?: string;
            /**
             * Contact's country in [ISO 3166-1 alpha-2 code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
             */
            countryCode?: string;
            /**
             * Contact's full [address](https://www.wix.com/velo/reference/$w/addressinput/value).
             */
            address?: Bookings.OwnerAddress;
        };
        type DeclineBookingOptions = {
            /**
             * Whether to notify the participants about the booking confirmation, and an optional custom message.
             */
            participantNotification?: ParticipantNotificationInfo;
            /**
             * When `true`, prevents permission checks from running for the operation. Defaults to `false`.
             */
            suppressAuth?: boolean;
        };
        type DeclineBookingResult = {
            /**
             * ID of the declined booking.
             */
            bookingId: string;
        };
        /**
         * Sets the cancel booking flow behavior.
         */
        type FlowControlSettingsInfo = {
            /**
             * Whether to ignore the service's cancellation policy.
             *
             *
             *  Requires "Manage Wix Bookings App" and "Manage Bookings' Calendar" [roles](https://support.wix.com/en/article/roles-permissions-overview#bookings-admin).
             *
             */
            ignoreCancellationPolicy?: boolean;
        };
        /**
         * Updated form info and contact details
         */
        type FormInfo = {
            /**
             * List of rates and the number of participants for each rate.
             */
            paymentSelection?: PaymentSelectionInfo[];
            /**
             * Additional custom fields submitted with the form.
             */
            additionalFields?: CustomFormFieldInfo[];
            /**
             * Contact details of the customer making the booking.
             */
            contactDetails?: Bookings.ContactDetails;
        };
        /**
         * Contact full [address](https://www.wix.com/velo/reference/$w/addressinput/value).
         */
        type OwnerAddress = {
            /**
             * Main address line, usually street and number, as free text.
             */
            addressLine1?: string;
            /**
             * Street name, number and apartment number.
             */
            streetAddress?: StreetAddressInfo;
            /**
             * String containing the full address of this location.
             */
            formatted?: string;
            /**
             * Free text providing more detailed address info. Usually contains Apt, Suite, and Floor.
             */
            addressLine2?: string;
            /**
             * Coordinates of the physical address.
             */
            location?: AddressLocationInfo;
            /**
             * City name.
             */
            city?: string;
            /**
             * Subdivision. Usually state, region, prefecture or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2).
             */
            subdivision?: string;
            /**
             * Country code.
             */
            country?: string;
            /**
             * Zip/postal code.
             */
            postalCode?: string;
        };
        /**
         * Contains functionality for refining a Bookings query.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Bookings.BookingsQueryBuilder.html#)
         */
        interface BookingsQueryBuilder {
            /**
             * Adds a sort to a query, sorting by the specified properties in ascending order.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Bookings.BookingsQueryBuilder.html#ascending)
             */
            ascending(...propertyName: string[]): Bookings.BookingsQueryBuilder;
            /**
             * Adds a sort to a query or sort, sorting by the specified properties in descending order.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Bookings.BookingsQueryBuilder.html#descending)
             */
            descending(...propertyName: string[]): Bookings.BookingsQueryBuilder;
            /**
             * Refines a query to match items whose specified property value equals the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Bookings.BookingsQueryBuilder.html#eq)
             */
            eq(propertyName: string, value: any): Bookings.BookingsQueryBuilder;
            /**
             * Returns the bookings that match the query.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Bookings.BookingsQueryBuilder.html#find)
             */
            find(options?: BookingsQueryBuilder.QueryOptions): Promise<Bookings.BookingsQueryResult>;
            /**
             * Refines a query to match items whose specified property value is greater than or equal to the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Bookings.BookingsQueryBuilder.html#ge)
             */
            ge(propertyName: string, value: string | number | Date): Bookings.BookingsQueryBuilder;
            /**
             * Refines a query to match items whose specified property value is greater than the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Bookings.BookingsQueryBuilder.html#gt)
             */
            gt(propertyName: string, value: string | number | Date): Bookings.BookingsQueryBuilder;
            /**
             * Refines a query to match items whose specified property contains any of the specified `value` parameters.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Bookings.BookingsQueryBuilder.html#hasSome)
             */
            hasSome(propertyName: string, value: string[]): Bookings.BookingsQueryBuilder;
            /**
             * Refines a query to match items whose specified property value is less than or equal to the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Bookings.BookingsQueryBuilder.html#le)
             */
            le(propertyName: string, value: string | number | Date): Bookings.BookingsQueryBuilder;
            /**
             * Limits the number of items the query returns.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Bookings.BookingsQueryBuilder.html#limit)
             */
            limit(limit: number): Bookings.BookingsQueryBuilder;
            /**
             * Refines a query to match items whose specified property value is less than the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Bookings.BookingsQueryBuilder.html#lt)
             */
            lt(propertyName: string, value: string | number | Date): Bookings.BookingsQueryBuilder;
            /**
             * Sets the number of items to skip before returning query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Bookings.BookingsQueryBuilder.html#skip)
             */
            skip(skip: number): Bookings.BookingsQueryBuilder;
        }
        /**
         * The results of a bookings query, containing the retrieved items.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Bookings.BookingsQueryResult.html#)
         */
        interface BookingsQueryResult {
            /**
             * Returns the index of the current results page number.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Bookings.BookingsQueryResult.html#currentPage)
             */
            readonly currentPage: number;
            /**
             * Returns an array of bookings that match the query.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Bookings.BookingsQueryResult.html#items)
             */
            readonly items: Booking[];
            /**
             * Returns the number of items in the current results page.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Bookings.BookingsQueryResult.html#length)
             */
            readonly length: number;
            /**
             * Returns the query page size.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Bookings.BookingsQueryResult.html#pageSize)
             */
            readonly pageSize: number;
            /**
             * Returns the BookingsQueryBuilder object used to get the current results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Bookings.BookingsQueryResult.html#query)
             */
            readonly query: Bookings.BookingsQueryBuilder;
            /**
             * Returns the total number of items that match the query.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Bookings.BookingsQueryResult.html#totalCount)
             */
            readonly totalCount: number;
            /**
             * Returns the total number of pages the query produced.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Bookings.BookingsQueryResult.html#totalPages)
             */
            readonly totalPages: number;
            /**
             * Indicates if the query has more results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Bookings.BookingsQueryResult.html#hasNext)
             */
            hasNext(): boolean;
            /**
             * Indicates the query has previous results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Bookings.BookingsQueryResult.html#hasPrev)
             */
            hasPrev(): boolean;
            /**
             * Retrieves the next page of query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Bookings.BookingsQueryResult.html#next)
             */
            next(): Promise<Bookings.BookingsQueryResult>;
            /**
             * Retrieves the previous page of query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Bookings.BookingsQueryResult.html#prev)
             */
            prev(): Promise<Bookings.BookingsQueryResult>;
        }
        /**
         * Contains functionality for refining a Bookings query.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Bookings.BookingsQueryBuilder.html#)
         */
        namespace BookingsQueryBuilder {
            /**
             * Options to use when performing a query.
             */
            type QueryOptions = {
                /**
                 * Prevents permission checks from running for the `find()` operation. Defaults to `false`.
                 */
                suppressAuth?: boolean;
            };
        }
        /**
         * The results of a bookings query, containing the retrieved items.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Bookings.BookingsQueryResult.html#)
         */
        namespace BookingsQueryResult {
        }
    }
    /**
     * Events that are fired by actions related to Wix Bookings.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Events.html#)
     */
    namespace Events {
        /**
         * An object representing a booking event.
         */
        type BookingEvent = {
            /**
             * Action that triggered the event. Each event has its own set of possible trigger values.
             */
            trigger: string;
            /**
             * Booking object after the event was triggered.
             */
            booking: Booking;
            /**
             * Booking object before the event was triggered.
             */
            previousBooking: Booking;
        };
    }
    /**
     * The Bookings Resources API provides functionality for creating, managing, and querying resources.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Resources.html#)
     */
    namespace Resources {
        type LinkedSchedulesInfo = {
            /**
             * Schedule ID.
             */
            scheduleId: string;
            /**
             * Owner ID, of the linked schedule.
             */
            scheduleOwnerId: string;
        };
        /**
         * Resource details.
         */
        type ResourceInfo = {
            /**
             * Resource name.
             */
            name: string;
            /**
             * Resource email address.
             */
            email?: string;
            /**
             * Resource phone number.
             */
            phone?: string;
            /**
             * Resource description.
             */
            description?: string;
            /**
             * Resource tags. Tags are used to identify, group, and filter the different types of resources. For example, 'staff' or 'room'.
             */
            tags?: string[];
        };
        /**
         * ResourceCatalog query results.
         */
        type ResourceQueryResults = {
            /**
             * Resource.
             */
            resource: Resource;
            /**
             * Resource's schedules.
             */
            schedules: Resources.ResourceSchedule[];
            /**
             * History of slugified resource names.
             */
            slugs: Resources.Slug[];
        };
        type ResourceSchedule = {
            /**
             * Schedule ID.
             */
            _id: string;
            /**
             * ID of the schedule's owner entity. This may be a resource ID or a service ID.
             */
            scheduleOwnerId: string;
            /**
             * An object describing how to calculate the schedule's availability.
             * An empty object indicates that the schedule is not available for booking.
             */
            availability: Resources.ResourceScheduleAvailability;
        };
        /**
         * An object describing how to calculate the schedule's availability.
         */
        type ResourceScheduleAvailability = {
            /**
             * Date and time the schedule starts to be available for booking.
             */
            start: Date;
            /**
             * Other schedules that impact the availability calculation. Relevant only when there are availability constraints.
             */
            linkedSchedules: LinkedResourceScheduleInfo[];
        };
        /**
         * An object describing how to calculate the schedule's availability.
         */
        type ResourceScheduleAvailabilityInfo = {
            /**
             * Date and time the schedule starts to be available for booking.
             */
            start?: Date;
            /**
             * Other schedules that impact the availability calculation. Relevant only when there are availability constraints.
             */
            linkedSchedules?: LinkedResourceScheduleInfo[];
        };
        type ResourceScheduleInfo = {
            /**
             * An object describing how to calculate the schedule's availability.
             * An empty object indicates that the schedule is not available for booking.
             */
            availability?: Resources.ResourceScheduleAvailability;
        };
        /**
         * Slugified resource name.
         */
        type Slug = {
            /**
             * Slugified resource name.
             */
            name: string;
            /**
             * Date and time the resource name was created.
             */
            _createdDate: Date;
        };
        /**
         * Resource details.
         */
        type UpdateResourceInfo = {
            /**
             * Resource name.
             */
            name?: string;
            /**
             * Resource email address.
             */
            email?: string;
            /**
             * Resource phone number.
             */
            phone?: string;
            /**
             * Resource description.
             */
            description?: string;
            /**
             * Resource tags. Tags are used to identify, group, and filter the different types of resources. For example, 'staff' or 'room'.
             */
            tags?: string[];
        };
        /**
         * Contains functionality for refining a resource catalog query.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Resources.ResourceCatalogQueryBuilder.html#)
         */
        interface ResourceCatalogQueryBuilder {
            /**
             * Refines a query to match items whose specified property value equals the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Resources.ResourceCatalogQueryBuilder.html#eq)
             */
            eq(propertyName: string, value: string): Resources.ResourceCatalogQueryBuilder;
            /**
             * Returns the resource catalog items that match the query.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Resources.ResourceCatalogQueryBuilder.html#find)
             */
            find(options?: ResourceCatalogQueryBuilder.QueryOptions): Promise<Resources.ResourceCatalogQueryResult>;
            /**
             * Refines a query to match items whose specified property contains any of the specified `value` parameters.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Resources.ResourceCatalogQueryBuilder.html#hasSome)
             */
            hasSome(propertyName: string, value: string[]): Resources.ResourceCatalogQueryBuilder;
            /**
             * Limits the number of items the query returns.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Resources.ResourceCatalogQueryBuilder.html#limit)
             */
            limit(limit: number): Resources.ResourceCatalogQueryBuilder;
            /**
             * Sets the number of items to skip before returning query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Resources.ResourceCatalogQueryBuilder.html#skip)
             */
            skip(skip: number): Resources.ResourceCatalogQueryBuilder;
        }
        /**
         * The results of a resource catalog query, containing the retrieved items.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Resources.ResourceCatalogQueryResult.html#)
         */
        interface ResourceCatalogQueryResult {
            /**
             * Returns the index of the current results page number.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Resources.ResourceCatalogQueryResult.html#currentPage)
             */
            readonly currentPage: number;
            /**
             * Returns an array of resources, slugs, and schedules that match the query.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Resources.ResourceCatalogQueryResult.html#items)
             */
            readonly items: Resources.ResourceQueryResults[];
            /**
             * Returns the number of items in the current results page.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Resources.ResourceCatalogQueryResult.html#length)
             */
            readonly length: number;
            /**
             * Returns the query page size.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Resources.ResourceCatalogQueryResult.html#pageSize)
             */
            readonly pageSize: number;
            /**
             * Returns the ResourceCatalogQueryBuilder object used to get the current results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Resources.ResourceCatalogQueryResult.html#query)
             */
            readonly query: Resources.ResourceCatalogQueryBuilder;
            /**
             * Returns the total number of items that match the query.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Resources.ResourceCatalogQueryResult.html#totalCount)
             */
            readonly totalCount: number;
            /**
             * Returns the total number of pages the query produced.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Resources.ResourceCatalogQueryResult.html#totalPages)
             */
            readonly totalPages: number;
            /**
             * Indicates if the query has more results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Resources.ResourceCatalogQueryResult.html#hasNext)
             */
            hasNext(): boolean;
            /**
             * Indicates the query has previous results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Resources.ResourceCatalogQueryResult.html#hasPrev)
             */
            hasPrev(): boolean;
            /**
             * Retrieves the next page of query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Resources.ResourceCatalogQueryResult.html#next)
             */
            next(): Promise<Resources.ResourceCatalogQueryResult>;
            /**
             * Retrieves the previous page of query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Resources.ResourceCatalogQueryResult.html#prev)
             */
            prev(): Promise<Resources.ResourceCatalogQueryResult>;
        }
        /**
         * Contains functionality for refining a resource catalog query.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Resources.ResourceCatalogQueryBuilder.html#)
         */
        namespace ResourceCatalogQueryBuilder {
            /**
             * Options to use when performing a query.
             */
            type QueryOptions = {
                /**
                 * When `true`, prevents permission checks from running for the operation. Defaults to `false`.
                 */
                suppressAuth?: boolean;
            };
        }
        /**
         * The results of a resource catalog query, containing the retrieved items.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Resources.ResourceCatalogQueryResult.html#)
         */
        namespace ResourceCatalogQueryResult {
        }
    }
    /**
     * The Sessions API provides functionality for creating, managing, and querying sessions.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Sessions.html#)
     */
    namespace Sessions {
        type DeleteSessionOptions = {
            /**
             * Whether to notify participants about the change, and an optional custom message.
             */
            participantNotification?: ParticipantNotificationInfo;
            /**
             * When `true`, prevents permission checks from running for the operation. Defaults to `false`.
             */
            suppressAuth?: boolean;
        };
        type Session = {
            /**
             * Session ID.
             */
            _id: string;
            /**
             * ID of the schedule that the session belongs to.
             */
            scheduleId: string;
            /**
             * ID of the resource or service that the session's schedule belongs to.
             */
            scheduleOwnerId: string;
            /**
             * Tags for the session.
             * The value is inherited from the schedule and can be overridden unless the session is a recurring session.
             */
            tags: string[];
            /**
             * Additional information about the session.
             * Notes are not supported for recurring sessions.
             */
            notes: string;
            /**
             * Session status.
             *
             *  One of:
             *  - `"CONFIRMED"` Default value.
             *  - `"CANCELLED"` The session was deleted.
             *
             */
            status: string;
            /**
             * ID of the recurring session if this session is an instance of a recurrence. Use this ID to update the recurrence and all of the instances.
             */
            recurringSessionId?: string;
            /**
             * Session type.
             *
             *  One of:
             *  - `"EVENT"` Reserved period of time on the schedule. For example, an appointment, class, course, or blocked time. Events are visible in the Dashboard in the Bookings app's [Booking Calendar](https://support.wix.com/en/article/wix-bookings-about-the-wix-bookings-calendar) page.
             *  - `"WORKING_HOURS"` Placeholder for available time on a resource’s schedule.
             *
             */
            type: string;
            /**
             * String representing a recurrence rule (RRULE) for a recurring session, as defined in [iCalendar RFC 5545](https://icalendar.org/iCalendar-RFC-5545/3-3-10-recurrence-rule.html).
             * If the session is an instance of a recurrence pattern, the `instanceOfRecurrence` property will contain the recurrence rule and this property will be empty.
             * The RRULE defines a rule for repeating a session.
             * Supported parameters are:
             *
             * |Keyword|Description|Supported values|
             * |--|--|---|
             * |`FREQ`|The frequency at which the session is recurs. Required.|`WEEKLY`|
             * |`INTERVAL`|How often, in terms of `FREQ`, the session recurs. Default is 1. Optional.|
             * |`UNTIL`|The UTC end date and time of the recurrence. Optional.|
             * |`BYDAY`|Day of the week when the event should recur. Required.|One of: `MO`, `TU`, `WE`, `TH`, `FR`, `SA`, `SU`|
             *
             *
             *  For example, a session that repeats every second week on a Monday until January 7, 2022 at 8 AM:
             * `"FREQ=WEEKLY;INTERVAL=2;BYDAY=MO;UNTIL=20220107T080000Z"`
             *
             *
             */
            recurrence?: string;
            /**
             * String representing a recurrence rule (RRULE) if the session is an instance of a recurrence pattern.
             * Empty when the session is not an instance of a recurrence rule, or if the session defines a recurrence pattern, and `recurrence` is not empty.
             */
            instanceOfRecurrence?: string;
            /**
             * An object specifying the start date and time of the session. If the session is a recurring session, `start` must contain a `localDateTime`.
             */
            start: CalendarDateTime;
            /**
             * An object specifying the end date and time of the session. If the session is a recurring session, `end` must contain a `localDateTime`.
             */
            end: CalendarDateTime;
        };
        /**
         * Session.
         */
        type SessionInfo = {
            /**
             * ID of the schedule that the session belongs to.
             */
            scheduleId: string;
            /**
             * An object specifying the start date and time of the session. If the session is a recurring session, `start` must contain a `localDateTime`.
             */
            start: CalendarDateTimeInfo;
            /**
             * An object specifying the end date and time of the session. If the session is a recurring session, `end` must contain a `localDateTime`.
             */
            end: CalendarDateTimeInfo;
            /**
             * Tags for the session.
             * The value is inherited from the schedule and can be overridden unless the session is a recurring session.
             */
            tags?: string[];
            /**
             * Additional information about the session.
             * Notes are not supported for recurring sessions.
             */
            notes?: string;
            /**
             * Session type.
             *
             *  One of:
             *  - `"EVENT"` Reserved period of time on the schedule. For example, an appointment, class, course, or blocked time. Events are visible in the Dashboard in the Bookings app's [Booking Calendar](https://support.wix.com/en/article/wix-bookings-about-the-wix-bookings-calendar) page.
             *  - `"WORKING_HOURS"` Placeholder for available time on a resource’s schedule.
             *
             */
            type?: string;
            /**
             * String representing a recurrence rule (RRULE) for a recurring session, as defined in [iCalendar RFC 5545](https://icalendar.org/iCalendar-RFC-5545/3-3-10-recurrence-rule.html).
             * If the session is an instance of a recurrence pattern, the `instanceOfRecurrence` property will contain the recurrence rule and this property will be empty.
             * The RRULE defines a rule for repeating a session.
             * Supported parameters are:
             *
             * |Keyword|Description|Supported values|
             * |--|--|---|
             * |`FREQ`|The frequency at which the session is recurs. Required.|`WEEKLY`|
             * |`INTERVAL`|How often, in terms of `FREQ`, the session recurs. Default is 1. Optional.|
             * |`UNTIL`|The UTC end date and time of the recurrence. Optional.|
             * |`BYDAY`|Day of the week when the event should recur. Required.|One of: `MO`, `TU`, `WE`, `TH`, `FR`, `SA`, `SU`|
             *
             *
             *  For example, a session that repeats every second week on a Monday until January 7, 2022 at 8 AM:
             * `"FREQ=WEEKLY;INTERVAL=2;BYDAY=MO;UNTIL=20220107T080000Z"`
             *
             *
             */
            recurrence?: string;
        };
        /**
         * Session.
         */
        type UpdateSessionInfo = {
            /**
             * An object specifying the start date and time of the session. If the session is a recurring session, `start` must contain a `localDateTime`.
             */
            start?: CalendarDateTimeInfo;
            /**
             * An object specifying the start date and time of the session. If the session is a recurring session, `start` must contain a `localDateTime`.
             */
            end?: CalendarDateTimeInfo;
            /**
             * Tags for the session.
             * The value is inherited from the schedule and can be overridden unless the session is a recurring session.
             */
            tags?: string[];
            /**
             * Additional information about the session.
             * Notes are not supported for recurring sessions.
             */
            notes?: string;
            /**
             * Session type.
             *
             *  One of:
             *  - `"EVENT"` Reserved period of time on the schedule. For example, an appointment, class, course, or blocked time. Events are visible in the Dashboard in the Bookings app's [Booking Calendar](https://support.wix.com/en/article/wix-bookings-about-the-wix-bookings-calendar) page.
             *  - `"WORKING_HOURS"` Placeholder for available time on a resource’s schedule.
             *
             */
            type?: string;
            /**
             * String representing a recurrence rule (RRULE) for a recurring session, as defined in [iCalendar RFC 5545](https://icalendar.org/iCalendar-RFC-5545/3-3-10-recurrence-rule.html).
             * If the session is an instance of a recurrence pattern, the `instanceOfRecurrence` property will contain the recurrence rule and this property will be empty.
             * The RRULE defines a rule for repeating a session.
             * Supported parameters are:
             *
             * |Keyword|Description|Supported values|
             * |--|--|---|
             * |`FREQ`|The frequency at which the session is recurs. Required.|`WEEKLY`|
             * |`INTERVAL`|How often, in terms of `FREQ`, the session recurs. Default is 1. Optional.|
             * |`UNTIL`|The UTC end date and time of the recurrence. Optional.|
             * |`BYDAY`|Day of the week when the event should recur. Required.|One of: `MO`, `TU`, `WE`, `TH`, `FR`, `SA`, `SU`|
             *
             *
             *  For example, a session that repeats every second week on a Monday until January 7, 2022 at 8 AM:
             * `"FREQ=WEEKLY;INTERVAL=2;BYDAY=MO;UNTIL=20220107T080000Z"`
             *
             *
             */
            recurrence?: string;
        };
        /**
         * Contains functionality for refining a session query.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Sessions.SessionQueryBuilder.html#)
         */
        interface SessionQueryBuilder {
            /**
             * Refines a query to match items whose specified property value equals the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Sessions.SessionQueryBuilder.html#eq)
             */
            eq(propertyName: string, value: any): Sessions.SessionQueryBuilder;
            /**
             * Returns the bookings that match the query.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Sessions.SessionQueryBuilder.html#find)
             */
            find(options?: SessionQueryBuilder.QueryOptions): Promise<Sessions.SessionQueryResult>;
            /**
             * Refines a query to match items whose specified property value is greater than or equal to the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Sessions.SessionQueryBuilder.html#ge)
             */
            ge(propertyName: string, value: Date): Sessions.SessionQueryBuilder;
            /**
             * Refines a query to match items whose specified property contains any of the specified `value` parameters.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Sessions.SessionQueryBuilder.html#hasSome)
             */
            hasSome(propertyName: string, value: string[]): Sessions.SessionQueryBuilder;
            /**
             * Limits the number of items the query returns.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Sessions.SessionQueryBuilder.html#limit)
             */
            limit(limit: number): Sessions.SessionQueryBuilder;
            /**
             * Refines a query to match items whose specified property value is less than the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Sessions.SessionQueryBuilder.html#lt)
             */
            lt(propertyName: string, value: Date): Sessions.SessionQueryBuilder;
            /**
             * Refines a query to match items whose specified property value does not equal the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Sessions.SessionQueryBuilder.html#ne)
             */
            ne(propertyName: string, value: any): Sessions.SessionQueryBuilder;
            /**
             * Sets the number of items to skip before returning query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Sessions.SessionQueryBuilder.html#skip)
             */
            skip(skip: number): Sessions.SessionQueryBuilder;
        }
        /**
         * The results of a session query, containing the retrieved items.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Sessions.SessionQueryResult.html#)
         */
        interface SessionQueryResult {
            /**
             * Returns the index of the current results page number.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Sessions.SessionQueryResult.html#currentPage)
             */
            readonly currentPage: number;
            /**
             * Returns an array of sessions that match the query.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Sessions.SessionQueryResult.html#items)
             */
            readonly items: Sessions.Session[];
            /**
             * Returns the query page size.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Sessions.SessionQueryResult.html#pageSize)
             */
            readonly pageSize: number;
            /**
             * Returns the `SessionQueryBuilder` object used to get the current results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Sessions.SessionQueryResult.html#query)
             */
            readonly query: Sessions.SessionQueryBuilder;
            /**
             * Returns the total number of items that match the query.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Sessions.SessionQueryResult.html#totalCount)
             */
            readonly totalCount: number;
            /**
             * Returns the total number of pages the query produced.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Sessions.SessionQueryResult.html#totalPages)
             */
            readonly totalPages: number;
            /**
             * Indicates if the query has more results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Sessions.SessionQueryResult.html#hasNext)
             */
            hasNext(): boolean;
            /**
             * Indicates the query has previous results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Sessions.SessionQueryResult.html#hasPrev)
             */
            hasPrev(): boolean;
            /**
             * Retrieves the next page of query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Sessions.SessionQueryResult.html#next)
             */
            next(): Promise<Sessions.SessionQueryResult>;
            /**
             * Retrieves the previous page of query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Sessions.SessionQueryResult.html#prev)
             */
            prev(): Promise<Sessions.SessionQueryResult>;
        }
        /**
         * Contains functionality for refining a session query.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Sessions.SessionQueryBuilder.html#)
         */
        namespace SessionQueryBuilder {
            /**
             * Options to use when performing a query.
             */
            type QueryOptions = {
                /**
                 * When `true`, prevents permission checks from running for the `find()` operation. Defaults to `false`.
                 */
                suppressAuth?: boolean;
            };
        }
        /**
         * The results of a session query, containing the retrieved items.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-backend.Sessions.SessionQueryResult.html#)
         */
        namespace SessionQueryResult {
        }
    }
}
