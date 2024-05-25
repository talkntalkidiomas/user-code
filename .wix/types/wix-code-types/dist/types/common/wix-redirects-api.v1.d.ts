declare module "wix-redirects-api.v1" {
    const __debug: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    /** WixUrl is the main entity of WixUrlService that can be used for lorem ipsum dolor */
    interface WixUrl {
        /**
         * The Wix URL to redirect into
         * @readonly
         */
        fullUrl?: string;
    }
    interface CreateWixUrlRequest extends CreateWixUrlRequestUrlParamsOneOf {
        /** The callbacks (URL) allowing the definition of the pages which should be redirected back to the original site during the flow initiated in Wix */
        callbacks?: CallbackParams;
        /** The parameters used in order to generate the URL into the Bookings checkout flow */
        bookingsCheckout?: WixUrlBookingsCheckoutParams;
        /** The parameters used in order to generate the URL into the Ecom checkout flow */
        ecomCheckout?: WixUrlEcomCheckoutParams;
        /** The parameters used in order to generate the URL into the events checkout flow */
        eventsCheckout?: WixUrlEventsCheckoutParams;
        /** The parameters used in order to generate the URL into the paid plans checkout flow */
        paidPlansCheckout?: WixUrlPaidPlansCheckoutParams;
        /** The parameters used in order to generate the URL into the Wix login page */
        login?: WixUrlLoginParams;
    }
    /** @oneof */
    interface CreateWixUrlRequestUrlParamsOneOf {
        /** The parameters used in order to generate the URL into the Bookings checkout flow */
        bookingsCheckout?: WixUrlBookingsCheckoutParams;
        /** The parameters used in order to generate the URL into the Ecom checkout flow */
        ecomCheckout?: WixUrlEcomCheckoutParams;
        /** The parameters used in order to generate the URL into the events checkout flow */
        eventsCheckout?: WixUrlEventsCheckoutParams;
        /** The parameters used in order to generate the URL into the paid plans checkout flow */
        paidPlansCheckout?: WixUrlPaidPlansCheckoutParams;
        /** The parameters used in order to generate the URL into the Wix login page */
        login?: WixUrlLoginParams;
    }
    interface WixUrlBookingsCheckoutParams {
        /** The selected calendar slots to checkout */
        slot?: SlotAvailability[];
        /** The timezone used for presentation and formatting when presenting the selected slot in a human readable format */
        timezone?: string;
        /** The ID of the service used in order to select the slot */
        serviceId?: string;
    }
    interface SlotAvailability {
        /**
         * The slot for the corresponding session, when the session is either a single session
         * or a specific session generated from a recurring session.
         */
        slot?: Slot;
        /**
         * Whether the slot is bookable. Bookability is determined by checking a
         * session's open slots and booking policies. Locks are not taken into
         * account.
         */
        bookable?: boolean;
        /**
         * Total number of spots for this slot.
         * For example, if a session has a total of 10 spots and 3 spots are booked,
         * `spotsTotal` is 10 and `openSpots` is 7.
         */
        totalSpots?: number | null;
        /** Number of open spots for this slot. */
        openSpots?: number | null;
        /** An object describing the slot's waitlist and its occupancy. */
        waitingList?: WaitingList;
        /** Booking policy violations for the slot. */
        bookingPolicyViolations?: BookingPolicyViolations;
        /**
         * Indicates whether the slot is locked because a waitlist exists.
         * When a slot frees up, the slot is offered to the next customer on the waitlist. Read-only.
         */
        locked?: boolean | null;
    }
    interface Slot {
        /**
         * ID for the slot's corresponding session, when the session is either a single session
         * or a specific session generated from a recurring session.
         */
        sessionId?: string | null;
        /** Service ID. */
        serviceId?: string;
        /** Schedule ID. */
        scheduleId?: string;
        /**
         * The start time of this slot in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339)
         * format.
         *
         * If `timezone` is specified,
         * dates are based on the local date/time. This means that the timezone offset
         * in the `start_date` is ignored.
         */
        startDate?: string | null;
        /**
         * The end time of this slot in
         * [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339) format.
         *
         * If `timezone` is specified,
         * dates are based on the local date/time. This means that the timezone offset
         * in the `end_date` is ignored.
         */
        endDate?: string | null;
        /**
         * The timezone for which slot availability is to be calculated.
         *
         * Learn more about [handling Daylight Savings Time (DST) for local time zones](https://dev.wix.com/api/rest/wix-bookings/availability-calendar/query-availability#wix-bookings_availability-calendar_query-availability_handling-daylight-savings-time-dst-for-local-time-zones)
         * when calculating availability.
         */
        timezone?: string | null;
        /**
         * The resource required for this slot. Currently, the only supported resource
         * is the relevant staff member for the slot.
         */
        resource?: SlotResource;
        /** Geographic location of the slot. */
        location?: Location;
    }
    interface SlotResource {
        /**
         * Resource ID.
         * @readonly
         */
        _id?: string | null;
        /** Resource name. Read only. */
        name?: string | null;
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
    interface WaitingList {
        /**
         * Total number of spots and open spots for this waitlist.
         * For example, a Yoga class with 10 waitlist spots and 3 registered
         * on the waitlist has 10 `total_spots` and 7 `open_spots`.
         */
        totalSpots?: number | null;
        /** Number of open spots for this waitlist. */
        openSpots?: number | null;
    }
    interface BookingPolicyViolations {
        /** Bookings policy violation. Too early to book this slot. */
        tooEarlyToBook?: boolean | null;
        /** Bookings policy violation. Too late to book this slot. */
        tooLateToBook?: boolean | null;
        /** Bookings policy violation. Online booking is disabled for this slot. */
        bookOnlineDisabled?: boolean | null;
    }
    interface WixUrlEcomCheckoutParams {
        /** The ID of the checkout entity used in order to start the checkout with */
        checkoutId?: string;
    }
    interface WixUrlEventsCheckoutParams {
        /** The ID of the selected event */
        reservationId?: string;
        /** The slug of the selected event (url friendly name) */
        eventSlug?: string;
    }
    interface WixUrlPaidPlansCheckoutParams {
        /** The ID of the selected paid plan */
        planId?: string;
        /** The encoded string representing the navigation defined for the end of the flow, probably received by */
        navigateToSectionProps?: string;
    }
    interface WixUrlLoginParams {
    }
    interface CallbackParams {
        /** An external thank you page URL, used when the thank you page is implemented outside of Wix */
        thankYouPageUrl?: string;
        /** An external thank you page URL, used when the thank you page is implemented outside of Wix */
        postFlowUrl?: string;
        /** An external thank you page URL, used when the thank you page is implemented outside of Wix */
        plansListUrl?: string;
        /** An external thank you page URL, used when the thank you page is implemented outside of Wix */
        loginUrl?: string;
    }
    interface CreateWixUrlResponse {
        /** The Wix URL details to redirect into */
        wixUrl?: WixUrl;
    }
    /**
     * Creates a new WixUrl
     * @public
     * @documentationMaturity preview
     * @requiredField CreateWixUrlRequest
     */
    function createWixUrl(options?: CreateWixUrlOptions): Promise<CreateWixUrlResponse>;
    interface CreateWixUrlOptions {
        /** The parameters used in order to generate the URL into the Bookings checkout flow */
        bookingsCheckout?: WixUrlBookingsCheckoutParams;
        /** The parameters used in order to generate the URL into the Ecom checkout flow */
        ecomCheckout?: WixUrlEcomCheckoutParams;
        /** The parameters used in order to generate the URL into the events checkout flow */
        eventsCheckout?: WixUrlEventsCheckoutParams;
        /** The parameters used in order to generate the URL into the paid plans checkout flow */
        paidPlansCheckout?: WixUrlPaidPlansCheckoutParams;
        /** The parameters used in order to generate the URL into the Wix login page */
        login?: WixUrlLoginParams;
        /** The callbacks (URL) allowing the definition of the pages which should be redirected back to the original site during the flow initiated in Wix */
        callbacks?: CallbackParams;
    }
    const headlessV1WixUrl_universal_d___debug: typeof __debug;
    type headlessV1WixUrl_universal_d_WixUrl = WixUrl;
    type headlessV1WixUrl_universal_d_CreateWixUrlRequest = CreateWixUrlRequest;
    type headlessV1WixUrl_universal_d_CreateWixUrlRequestUrlParamsOneOf = CreateWixUrlRequestUrlParamsOneOf;
    type headlessV1WixUrl_universal_d_WixUrlBookingsCheckoutParams = WixUrlBookingsCheckoutParams;
    type headlessV1WixUrl_universal_d_SlotAvailability = SlotAvailability;
    type headlessV1WixUrl_universal_d_Slot = Slot;
    type headlessV1WixUrl_universal_d_SlotResource = SlotResource;
    type headlessV1WixUrl_universal_d_Location = Location;
    type headlessV1WixUrl_universal_d_LocationType = LocationType;
    const headlessV1WixUrl_universal_d_LocationType: typeof LocationType;
    type headlessV1WixUrl_universal_d_WaitingList = WaitingList;
    type headlessV1WixUrl_universal_d_BookingPolicyViolations = BookingPolicyViolations;
    type headlessV1WixUrl_universal_d_WixUrlEcomCheckoutParams = WixUrlEcomCheckoutParams;
    type headlessV1WixUrl_universal_d_WixUrlEventsCheckoutParams = WixUrlEventsCheckoutParams;
    type headlessV1WixUrl_universal_d_WixUrlPaidPlansCheckoutParams = WixUrlPaidPlansCheckoutParams;
    type headlessV1WixUrl_universal_d_WixUrlLoginParams = WixUrlLoginParams;
    type headlessV1WixUrl_universal_d_CallbackParams = CallbackParams;
    type headlessV1WixUrl_universal_d_CreateWixUrlResponse = CreateWixUrlResponse;
    const headlessV1WixUrl_universal_d_createWixUrl: typeof createWixUrl;
    type headlessV1WixUrl_universal_d_CreateWixUrlOptions = CreateWixUrlOptions;
    namespace headlessV1WixUrl_universal_d {
        export { headlessV1WixUrl_universal_d___debug as __debug, headlessV1WixUrl_universal_d_WixUrl as WixUrl, headlessV1WixUrl_universal_d_CreateWixUrlRequest as CreateWixUrlRequest, headlessV1WixUrl_universal_d_CreateWixUrlRequestUrlParamsOneOf as CreateWixUrlRequestUrlParamsOneOf, headlessV1WixUrl_universal_d_WixUrlBookingsCheckoutParams as WixUrlBookingsCheckoutParams, headlessV1WixUrl_universal_d_SlotAvailability as SlotAvailability, headlessV1WixUrl_universal_d_Slot as Slot, headlessV1WixUrl_universal_d_SlotResource as SlotResource, headlessV1WixUrl_universal_d_Location as Location, headlessV1WixUrl_universal_d_LocationType as LocationType, headlessV1WixUrl_universal_d_WaitingList as WaitingList, headlessV1WixUrl_universal_d_BookingPolicyViolations as BookingPolicyViolations, headlessV1WixUrl_universal_d_WixUrlEcomCheckoutParams as WixUrlEcomCheckoutParams, headlessV1WixUrl_universal_d_WixUrlEventsCheckoutParams as WixUrlEventsCheckoutParams, headlessV1WixUrl_universal_d_WixUrlPaidPlansCheckoutParams as WixUrlPaidPlansCheckoutParams, headlessV1WixUrl_universal_d_WixUrlLoginParams as WixUrlLoginParams, headlessV1WixUrl_universal_d_CallbackParams as CallbackParams, headlessV1WixUrl_universal_d_CreateWixUrlResponse as CreateWixUrlResponse, headlessV1WixUrl_universal_d_createWixUrl as createWixUrl, headlessV1WixUrl_universal_d_CreateWixUrlOptions as CreateWixUrlOptions, };
    }
    export { headlessV1WixUrl_universal_d as redirects };
}
