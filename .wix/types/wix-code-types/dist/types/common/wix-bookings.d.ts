/**
 * The wix-bookings module contains functionality for working with
 *  bookings from client-side code.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings.html#)
 */
declare module 'wix-bookings' {
    /**
     * Books a service and processes payment for the service.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings.html#checkoutBooking)
     */
    function checkoutBooking(bookingInfo: BookingInfo, options?: PaymentOptions): Promise<BookingResult>;
    /**
     * Gets the valid checkout options for a service's slot.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings.html#getCheckoutOptions)
     */
    function getCheckoutOptions(checkoutOptionOptions: CheckoutOptionOptions): Promise<CheckoutOption[]>;
    /**
     * Gets the available slots for a specific service.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings.html#getServiceAvailability)
     */
    function getServiceAvailability(serviceId: string, options?: AvailabilityOptions): Promise<ServiceAvailability>;
    /**
     * An object that contains address information.
     */
    type Address = {
        /**
         * Full text address comprised of street name and number, city, subdivision, country, and postal code.
         */
        formatted: string;
        /**
         * Address coordinates.
         */
        location: AddressCoordinates;
        /**
         * Address street address.
         */
        streetAddress: StreetAddress;
        /**
         * Address city.
         */
        city: string;
        /**
         * Address subdivision, state, prefecture, or province.
         */
        subdivision: string;
        /**
         * Address country.
         */
        country: string;
        /**
         * Address postal code.
         */
        postalCode: string;
    };
    /**
     * An object that contains the geographic coordinates of the address.
     */
    type AddressCoordinates = {
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
     * An object used when calling [`getServiceAvailability()`](#getServiceAvailability)
     *  containing options for which slots should be returned.
     */
    type AvailabilityOptions = {
        /**
         * Start date and time of the slots
         *  to be returned. Defaults to the current date and time.
         */
        startDateTime?: Date;
        /**
         * End date and time of the slots to
         *  be returned. Defaults to one week from `startDateTime`, which is one week
         *  from the current date and time if `startDateTime` is also omitted.
         */
        endDateTime?: Date;
    };
    /**
     * An object used when calling [`checkoutBooking()`](#checkoutBooking)
     *  containing information about the slot to be booked.
     */
    type BookingInfo = {
        /**
         * The slot to be booked.
         */
        slot: Slot;
        /**
         * List of form field values required to book the session.
         */
        formFields: FormField[];
        /**
         * Number of spots to book. Defaults to `1`.
         */
        numberOfSpots?: number;
    };
    /**
     * An object representing the result of a call to [`checkoutBooking()`](#checkoutBooking).
     */
    type BookingResult = {
        /**
         * ID of the booking that was checked out.
         */
        bookingId: string;
        /**
         * Status of the booking that was checked out.
         *  One of:
         *
         *  + `"Confirmed"`: Payment was successful or payment is to be done offline.
         *  + `"Pending Payment"`: Payment is pending.
         *  + `"Terminated"`: Payment failed or was cancelled.
         */
        status: string;
    };
    /**
     * An object describing the business location.
     */
    type BusinessLocation = {
        /**
         * Business location ID.
         */
        id: string;
        /**
         * Business location name.
         */
        name: string;
        /**
         * Business location description.
         */
        description: string;
        /**
         * An object describing the address.
         */
        address: Address;
    };
    /**
     * An object returned after calling [`getCheckoutOptions()`](#getCheckoutOptions)
     *  containing information about the available payment options for the service and the logged-in user.
     */
    type CheckoutOption = {
        /**
         * Type of the available payment option. Valid options are:
         *
         *  + `"wixPay_Online"` for online collections
         *  + `"wixPay_Offline"` for offline collections
         *  + `"package"` for a package-type pricing plan
         *  + `"membership"` for a membership-type pricing plan
         */
        type: string;
        /**
         * Name of the plan package or membership. For booking with pricing plans only.
         */
        planName?: string;
        /**
         * Order ID of the plan package or membership. For booking with pricing plans only.
         */
        planOrderId?: string;
        /**
         * ID of the benefit provided by the plan package. For booking with package-type pricing plans only.
         */
        benefitId?: string;
        /**
         * Number of sessions remaining in the plan package. For booking with package-type pricing plans only.
         */
        remainingCredits?: number;
        /**
         * Number of sessions initially provided with the plan package.  For booking with package-type pricing plans only.
         */
        totalCredits?: number;
        /**
         * Date by which the plan package or membership expires. For booking with pricing plans only.
         */
        planExpiration?: Date;
    };
    /**
     * An object used to request checkout options for the service. Currently, you can request the checkout options using the ID of a slot.
     */
    type CheckoutOptionOptions = {
        /**
         * Unique slot identifier.
         */
        slotId: string;
        /**
         * User ID for the customer making the booking. Used for retrieving valid payment plans for the customer for the selected slot.
         */
        userId: string;
    };
    /**
     * An object that defines a booking window for limiting when a member can book a slot. For example,
     *  you can prevent members from booking a service too far in advance, because perhaps the service might
     *  be discontinued by then. Or, you can prevent members from booking a service right before it starts, as
     *  this would make it hard to schedule resources.
     */
    type Constraints = {
        /**
         * Date from which a member is allowed to book a slot.
         */
        bookableFrom: Date;
        /**
         * Date until which a member is allowed to book a slot.
         */
        bookableUntil: Date;
    };
    /**
     * An object used when calling [`checkoutBooking()`](#checkoutBooking)
     *  containing values for form fields required to book the session.
     */
    type FormField = {
        /**
         * ID of the form field from the **form** property in the **Booking/Services** collection.
         */
        _id: string;
        /**
         * Form field value.
         */
        value: string;
    };
    /**
     * The location where a service is offered.
     */
    type Location = {
        /**
         * Location type. Valid options are:
         * - `"OWNER_BUSINESS"` The business address set by the owner. This type is set when choosing **Business Address** in the Service Details page of the dashboard, and populates the businessLocation object.
         * - `"OWNER_CUSTOM"` A custom address set by the owner. This type is set when choosing **Custom Location** in the Service Details page of the dashboard, and populates the `locationText` property.
         * - `"CUSTOM"` An address set for the individual booking, usually chosen by the customer and entered in the booking form.
         */
        type: string;
        /**
         * Text describing the location.
         */
        locationText: string;
        /**
         * An object describing the business location.
         */
        businessLocation: BusinessLocation;
    };
    /**
     * An object used when calling [`checkoutBooking()`](#checkoutBooking)
     *  containing information about the payment options.
     */
    type PaymentOptions = {
        /**
         * A coupon code to be used with the payment.
         */
        couponCode?: string;
        /**
         * Type of payment. Valid options are:
         *
         *   + `"wixPay_Online"` for online collections
         *   + `"wixPay_Offline"` for offline collections
         *   + `"package"` for a package-type pricing plan
         *   + `"membership"` for a membership-type pricing plan
         */
        paymentType: string;
    };
    /**
     * An object returned from [`getServiceAvailability()`](#getServiceAvailability)
     *  containing the available bookings slots.
     */
    type ServiceAvailability = {
        /**
         * List of the available slots.
         *
         * Max: 500 slots
         */
        slots: Slot[];
    };
    /**
     * An object representing a booking slot.
     */
    type Slot = {
        /**
         * Unique slot identifier.
         */
        _id: string;
        /**
         * Starting date and time of the slot.
         */
        startDateTime: Date;
        /**
         * Ending date and time of the slot.
         */
        endDateTime: Date;
        /**
         * ID of the service that the slot belongs to.
         */
        serviceId: string;
        /**
         * Maximum number of participants that can book the service for this slot.
         */
        capacity: number;
        /**
         * Number of remaining spots that can be booked for the slot.
         */
        remainingSpots: number;
        /**
         * ID of the slot's staff member.
         */
        staffMemberId: string;
        /**
         * Whether the slot can be booked right now, meaning today's date is within the booking window defined by `constraints`.
         */
        bookable: boolean;
        /**
         * The dates between which the slot can be booked. The constraints define the booking window. The booking window prevents site members from booking way in advance or just right before the slot starts.
         */
        constraints: Constraints;
        /**
         * The location where this slot is offered.
         */
        location: Location;
    };
    /**
     * An object representing information about the street name and street number of an address.
     */
    type StreetAddress = {
        /**
         * Address street name.
         */
        name: string;
        /**
         * Address street number.
         */
        number: string;
    };
}
