/**
 * The wix-events-backend module contains functionality for working with
 *  your site's [Wix events](https://support.wix.com/en/article/about-wix-events).
 * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.html#)
 */
declare module 'wix-events-backend' {
    /**
     * The Events API provides functionality for updating and managing events created in the Wix Events app or using this Wix Events API.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.html#wixEvents)
     */
    const wixEvents: WixEvents;
    /**
     * Backend events that are fired from Wix events.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.Events.html#)
     */
    interface Events {
        /**
         * A backend event that fires when a Wix event is canceled.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.Events.html#onEventCanceled)
         */
        onEventCanceled(event: Events.CanceledEvent): void;
        /**
         * A backend event that fires when a Wix event is created or copied.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.Events.html#onEventCreated)
         */
        onEventCreated(event: Events.CreatedEvent): void;
        /**
         * A backend event that fires when a Wix event is deleted.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.Events.html#onEventDeleted)
         */
        onEventDeleted(event: Events.DeletedEvent): void;
        /**
         * A backend event that fires when a Wix event ends.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.Events.html#onEventEnded)
         */
        onEventEnded(event: Events.EndedEvent): void;
        /**
         * A backend event that fires when a Wix event's reminders are sent.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.Events.html#onEventReminder)
         */
        onEventReminder(event: Events.EventReminder): void;
        /**
         * A backend event that fires when a Wix event starts.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.Events.html#onEventStarted)
         */
        onEventStarted(event: Events.StartedEvent): void;
        /**
         * A backend event that fires when an existing Wix event is updated.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.Events.html#onEventUpdated)
         */
        onEventUpdated(event: Events.UpdatedEvent): void;
        /**
         * A backend event that fires when a ticket order is confirmed.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.Events.html#onOrderConfirmed)
         */
        onOrderConfirmed(event: Events.OrderConfirmedEvent): void;
        /**
         * A backend event that fires when a ticket order is deleted.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.Events.html#onOrderDeleted)
         */
        onOrderDeleted(event: Events.OrderDeletedEvent): void;
        /**
         * A backend event that fires when a ticket order is initiated.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.Events.html#onOrderInitiated)
         */
        onOrderInitiated(event: Events.OrderInitiatedEvent): void;
        /**
         * A backend event that fires when a ticket order is updated.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.Events.html#onOrderUpdated)
         */
        onOrderUpdated(event: Events.OrderUpdatedEvent): void;
        /**
         * A backend event that fires when a ticket reservation is created.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.Events.html#onReservationCreated)
         */
        onReservationCreated(event: Events.ReservationCreatedEvent): void;
        /**
         * A backend event that fires when a ticket reservation is updated.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.Events.html#onReservationUpdated)
         */
        onReservationUpdated(event: Events.ReservationUpdatedEvent): void;
        /**
         * A backend event that fires when a guest registers to a Wix event.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.Events.html#onRsvpCreated)
         */
        onRsvpCreated(event: Events.RsvpCreatedEvent): void;
        /**
         * A backend event that fires when an RSVP is deleted.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.Events.html#onRsvpDeleted)
         */
        onRsvpDeleted(event: Events.RsvpDeletedEvent): void;
        /**
         * A backend event that fires when an RSVP is updated.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.Events.html#onRsvpUpdated)
         */
        onRsvpUpdated(event: Events.RsvpUpdatedEvent): void;
        /**
         * A backend event that fires when a ticket definition is created.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.Events.html#onTicketDefinitionCreated)
         */
        onTicketDefinitionCreated(event: Events.TicketDefinitionCreatedEvent): void;
        /**
         * A backend event that fires when a ticket definition is deleted.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.Events.html#onTicketDefinitionDeleted)
         */
        onTicketDefinitionDeleted(event: Events.TicketDefinitionDeletedEvent): void;
        /**
         * A backend event that fires when a ticket definition is updated.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.Events.html#onTicketDefinitionUpdated)
         */
        onTicketDefinitionUpdated(event: Events.TicketDefinitionUpdatedEvent): void;
        /**
         * A backend event that fires when a Wix event is canceled.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.Events.html#onWixEventCanceled)
         */
        onWixEventCanceled(event: Events.CanceledWixEvent): void;
    }
    /**
     * The Wix Events API provides functionality for creating, updating, and managing Wix events.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.html#)
     */
    interface WixEvents {
        /**
         * Cancels a Wix event and closes its registration.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.html#cancelEvent)
         */
        cancelEvent(eventId: string): Promise<WixEvents.WixEvent>;
        /**
         * Copies a Wix event.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.html#copyEvent)
         */
        copyEvent(eventId: string): Promise<WixEvents.WixEvent>;
        /**
         * Creates a Wix event.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.html#createEvent)
         */
        createEvent(eventInfo: WixEvents.WixEventInfo, options: WixEvents.WixEventInfoOptions): Promise<WixEvents.WixEvent>;
        /**
         * Deletes a Wix event.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.html#deleteEvent)
         */
        deleteEvent(eventId: string): Promise<void>;
        /**
         * Retrieves a Wix event by ID.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.html#getEvent)
         */
        getEvent(eventId: string): Promise<WixEvents.WixEvent>;
        /**
         * Creates a query to retrieve a list of Wix events.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.html#queryEvents)
         */
        queryEvents(): WixEvents.EventsQueryBuilder;
        /**
         * Updates a Wix event.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.html#updateEvent)
         */
        updateEvent(eventId: string, eventInfo: WixEvents.WixEventUpdateInfo, options: WixEvents.WixEventInfoOptions): Promise<WixEvents.WixEvent>;
    }
    /**
     * Backend events that are fired from Wix events.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.Events.html#)
     */
    namespace Events {
        /**
         * An object representing a Wix event that was canceled.
         */
        type CanceledEvent = {
            /**
             * Time the event was canceled.
             */
            timestamp: Date;
            /**
             * Event ID.
             */
            eventId: string;
            /**
             * Event title.
             */
            title: string;
        };
        /**
         * An object representing a Wix event that was canceled.
         */
        type CanceledWixEvent = {
            /**
             * Time the event was canceled.
             */
            timestamp: Date;
            /**
             * Event ID.
             */
            eventId: string;
            /**
             * Event title.
             */
            title: string;
        };
        /**
         * An object representing guest check-in.
         */
        type CheckIn = {
            /**
             * Time guest was checked-in.
             */
            created: Date;
        };
        /**
         * An object representing the Wix event that was created or copied.
         */
        type CreatedEvent = {
            /**
             * Time the event was created/copied.
             */
            timestamp: Date;
            /**
             * Event ID.
             */
            eventId: string;
            /**
             * Event title.
             */
            title: string;
            /**
             * Event location.
             */
            location: Events.Location;
            /**
             * Event's schedule configuration.
             */
            scheduleConfig: Events.ScheduleConfiguration;
            /**
             * ID of the user who created/copied the event.
             */
            userId: string;
        };
        /**
         * An object representing a Wix event that was deleted.
         */
        type DeletedEvent = {
            /**
             * Time the event was deleted.
             */
            timestamp: Date;
            /**
             * Event ID.
             */
            eventId: string;
            /**
             * Event title.
             */
            title: string;
        };
        /**
         * An object representing an applied discount.
         */
        type Discount = {
            /**
             * Discount amount.
             */
            amount: Events.Money;
            /**
             * Amount after discount.
             */
            afterDiscount: Events.Money;
            /**
             * Discount items.
             */
            discounts: Events.DiscountItem[];
        };
        /**
         * An object representing a coupon discount.
         */
        type DiscountCoupon = {
            /**
             * Coupon name.
             */
            name: string;
            /**
             * Coupon code.
             */
            code: string;
            /**
             * Coupon ID.
             */
            couponId: string;
        };
        /**
         * An object representing an applied discount of specific type.
         */
        type DiscountItem = {
            /**
             * Discount amount.
             */
            amount: Events.Money;
            /**
             * Discount coupon.
             */
            coupon?: Events.DiscountCoupon;
            /**
             * Pricing plan discount.
             */
            paidPlan?: Events.PricingPlanDiscount;
        };
        /**
         * An object representing the event that has ended.
         */
        type EndedEvent = {
            /**
             * Time the event ended.
             */
            timestamp: Date;
            /**
             * The ID of the event.
             */
            eventId: string;
        };
        /**
         * An object representing the Wix event that reminders have been sent for.
         */
        type EventReminder = {
            /**
             * Time the reminder was sent.
             */
            timestamp: Date;
            /**
             * Event ID.
             */
            eventId: string;
            /**
             * Event location.
             */
            location: Events.Location;
            /**
             * Event's schedule configuration.
             */
            scheduleConfig: Events.ScheduleConfiguration;
            /**
             * Event title.
             */
            title: string;
            /**
             * ID of the user who created the event.
             */
            userId: string;
            /**
             * The time between now and the event start.
             */
            startsIn: Events.TimeDuration;
        };
        /**
         * An object representing an applied fee.
         */
        type Fee = {
            /**
             * Fee name. Value is `"WIX_FEE"`: Wix service fee applied to the item.
             */
            name: string;
            /**
             * Fee calculation method.
             *  One of:
             *
             *  + `"FEE_ADDED"`: Fee is added to the ticket price at checkout.
             *  + `"FEE_INCLUDED"`: Seller absorbs the fee. It is deducted from the ticket price.
             */
            type: string;
            /**
             * Rate percentage. Possible values are between `"0.01"` and `"100"`, using up to 2 decimal places.
             */
            rate: string;
            /**
             * Total amount of fee charges.
             */
            amount: Events.Money;
        };
        /**
         * An object representing a submitted guest form.
         */
        type FormResponse = {
            /**
             * Values that were entered in the guest form.
             */
            inputValues: Events.InputValue[];
        };
        /**
         * An object representing a guest of a Wix event's RSVP.
         */
        type Guest = {
            /**
             * Index of the guest in the RSVP guest list. Indices are zero-based.
             */
            index: number;
            /**
             * Guest ID, which is unique within the RSVP.
             */
            id: number;
            /**
             * Full name of the guest.
             */
            fullName: string;
        };
        /**
         * An object representing a guest form input value.
         */
        type InputValue = {
            /**
             * Name of the form input.
             */
            inputName: string;
            /**
             * Value of the form input, when there is just one value.
             */
            value: string;
            /**
             * Values of the form input, when there are multiple values.
             */
            values: string[];
        };
        /**
         * An object representing an order invoice.
         */
        type Invoice = {
            /**
             * Invoice items.
             */
            items: Events.InvoiceItem[];
            /**
             * Invoice applied discount.
             */
            discount?: Events.Discount;
            /**
             * Invoice applied tax.
             */
            tax?: Events.Tax;
            /**
             * Invoice applied fee charges.
             */
            fees: Events.Fee[];
            /**
             * Invoice total amount before discount, tax, and fees.
             */
            subTotal: Events.Money;
            /**
             * Invoice total amount after discount, tax, and fees.
             *  Grand total is calculated in the following manner:
             *
             *  1. Total price of all items in the cart.
             *  2. Discount is subtracted from the cart (if applicable).
             *  3. Tax is added (if applicable).
             *  4. Wix service fee is added.
             */
            grandTotal: Events.Money;
            /**
             * Total revenue with taxes, excluding fees. Payment provider fees are not deducted.
             */
            revenue: Events.Money;
        };
        /**
         * An object representing an order invoice item.
         */
        type InvoiceItem = {
            /**
             * Invoice item ID.
             */
            id: string;
            /**
             * Invoice item quantity.
             */
            quantity: number;
            /**
             * Invoice item name.
             */
            name: string;
            /**
             * Invoice item price.
             */
            price: Events.Money;
            /**
             * Invoice item total.
             */
            total: Events.Money;
            /**
             * Invoice item applied discount.
             */
            discount?: Events.Discount;
            /**
             * Invoice item applied tax.
             */
            tax?: Events.Tax;
            /**
             * Invoice item applied fee charges.
             */
            fees: Events.Fee[];
        };
        /**
         * An object representing the Wix event location.
         */
        type Location = {
            /**
             * Location name.  Maximum allowed characters is 50.
             */
            name: string;
            /**
             * The location's map coordinates.
             */
            coordinates: Events.MapCoordinates;
            /**
             * Single line address representation of the location.
             */
            address: string;
            /**
             * Type of location.
             *  One of:
             *
             *  + `"VENUE"`: Event is hosted in the venue.
             *  + `"ONLINE"`: Event is hosted online.
             */
            type: string;
        };
        /**
         * An object representing an event location's coordinates.
         */
        type MapCoordinates = {
            /**
             * Latitude.
             */
            lat: number;
            /**
             * Longitude.
             */
            lng: number;
        };
        /**
         * An object representing money.
         */
        type Money = {
            /**
             * Decimal amount.
             */
            amount: string;
            /**
             * Currency code. Must be a valid [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code (for example, `USD`).
             */
            currency: string;
        };
        /**
         * An object representing the confirmed order.
         */
        type OrderConfirmedEvent = {
            /**
             * Time order was confirmed.
             */
            timestamp: Date;
            /**
             * Event ID.
             */
            eventId: string;
            /**
             * Unique order number.
             */
            orderNumber: string;
            /**
             * Contact ID associated with this order.
             */
            contactId?: string;
            /**
             * Member ID associated with this order.
             */
            memberId?: string;
            /**
             * Time order was created.
             */
            created: Date;
            /**
             * Buyer first name.
             */
            firstName: string;
            /**
             * Buyer last name.
             */
            lastName: string;
            /**
             * Buyer email.
             */
            email: string;
            /**
             * Checkout form response.
             */
            checkoutForm: Events.FormResponse;
            /**
             * Order status.
             *  One of:
             *
             *  + `"FREE"`: Order is confirmed, no payment required.
             *  + `"PENDING"`: Order was paid, but the payment provider suspended the payment. Eventually changes to `"PAID"`.
             *  + `"PAID"`: Order paid using the payment provider.
             *  + `"OFFLINE_PENDING"`: Order confirmed, but has to be paid offline and status needs to be manually updated to `"PAID"`.
             *  + `"INITIATED"`: Order is awaiting payment.
             */
            status: string;
            /**
             * Payment method used. For example, "payPal" or "creditCard".
             */
            method: string;
            /**
             * Order invoice.
             */
            invoice: Events.Invoice;
            /**
             * Tickets generated after payment.
             */
            tickets: Events.Ticket[];
        };
        /**
         * An object representing the deleted ticket order.
         */
        type OrderDeletedEvent = {
            /**
             * Time order was deleted.
             */
            timestamp: Date;
            /**
             * Event ID.
             */
            eventId: string;
            /**
             * Unique order number.
             */
            orderNumber: string;
            /**
             * Contact ID associated with this order.
             */
            contactId?: string;
            /**
             * Member ID associated with this order.
             */
            memberId?: string;
            /**
             * Whether the order was anonymized by a GDPR delete.
             */
            anonymized: boolean;
            /**
             * Order type.
             *  One of:
             *
             *  + `"UNASSIGNED_TICKETS"`: Buyer form is used for all tickets.
             *  + `"ASSIGNED_TICKETS"`: Each order ticket has its own form.
             */
            orderType: string;
        };
        /**
         * An object representing the initiated order.
         */
        type OrderInitiatedEvent = {
            /**
             * Time order was initiated.
             */
            timestamp: Date;
            /**
             * Event ID.
             */
            eventId: string;
            /**
             * Unique order number.
             */
            orderNumber: string;
            /**
             * Contact ID associated with this order.
             */
            contactId?: string;
            /**
             * Member ID associated with this order.
             */
            memberId?: string;
            /**
             * Buyer first name.
             */
            firstName: string;
            /**
             * Buyer last name.
             */
            lastName: string;
            /**
             * Buyer email.
             */
            email: string;
            /**
             * Checkout form response.
             */
            checkoutForm: Events.FormResponse;
            /**
             * Order status.
             *  One of:
             *
             *  + `"FREE"`: Order is confirmed, no payment required.
             *  + `"PENDING"`: Order was paid, but the payment provider suspended the payment. Eventually changes to `"PAID"`.
             *  + `"PAID"`: Order paid using the payment provider.
             *  + `"OFFLINE_PENDING"`: Order confirmed, but has to be paid offline and status needs to be manually updated to `"PAID"`.
             *  + `"INITIATED"`: Order is awaiting payment.
             */
            status: string;
            /**
             * Order invoice.
             */
            invoice: Events.Invoice;
        };
        /**
         * An object representing the updated order.
         */
        type OrderUpdatedEvent = {
            /**
             * Time order was updated.
             */
            timestamp: Date;
            /**
             * Event ID.
             */
            eventId: string;
            /**
             * Unique order number.
             */
            orderNumber: string;
            /**
             * Contact ID associated with this order.
             */
            contactId?: string;
            /**
             * Member ID associated with this order.
             */
            memberId?: string;
            /**
             * Time order was created.
             */
            created: Date;
            /**
             * Buyer first name.
             */
            firstName: string;
            /**
             * Buyer last name.
             */
            lastName: string;
            /**
             * Buyer email.
             */
            email: string;
            /**
             * Checkout form response.
             */
            checkoutForm: Events.FormResponse;
            /**
             * Whether the order is confirmed An order gets confirmed
             *  when the payment gateway processes the payment and the funds reach the merchant's account.
             */
            confirmed: boolean;
            /**
             * Order status.
             *  One of:
             *
             *  + `"FREE"`: Order is confirmed, no payment required.
             *  + `"PENDING"`: Order was paid, but the payment provider suspended the payment. Eventually changes to `"PAID"`.
             *  + `"PAID"`: Order paid using the payment provider.
             *  + `"OFFLINE_PENDING"`: Order confirmed, but has to be paid offline and status needs to be manually updated to `"PAID"`.
             *  + `"INITIATED"`: Order is awaiting payment.
             */
            status: string;
            /**
             * Payment method used. For example, "payPal" or "creditCard".
             */
            method: string;
            /**
             * Whether the order is archived.
             */
            archived: boolean;
            /**
             * Tickets generated after payment.
             */
            tickets: Events.Ticket[];
        };
        /**
         * An object representing a fixed rate discount.
         */
        type PercentDiscount = {
            /**
             * Discount rate percentage. Possible values are between `"0.01"` and `"100"`, using up to 2 decimal places.
             */
            rate: string;
            /**
             * Number of discounted items.
             */
            quantityDiscounted: number;
        };
        /**
         * An object representing a pricing plan discount.
         */
        type PricingPlanDiscount = {
            /**
             * Pricing plan name.
             */
            name: string;
            /**
             * Percentage applied discount.
             */
            percentDiscount?: Events.PercentDiscount;
        };
        /**
         * An object representing the created ticket reservation.
         */
        type ReservationCreatedEvent = {
            /**
             * Time tickets were reserved.
             */
            timestamp: Date;
            /**
             * Event ID.
             */
            eventId: string;
            /**
             * Reservation ID. Can be used to retrieve an invoice.
             */
            reservationId: string;
            /**
             * Time reservation expires.
             */
            expires: Date;
            /**
             * Reservation status.
             *  One of:
             *
             *  + `"RESERVATION_PENDING"`: Reservation is pending confirmation. It will expire after expiration due time.
             *  + `"RESERVATION_CONFIRMED"`: Reservation was confirmed and will not expire.
             *  + `"RESERVATION_CANCELED"`: Reservation was canceled because of non payment.
             *  + `"RESERVATION_CANCELED_MANUALLY"`: Reservation was canceled manually by the buyer.
             */
            status: string;
        };
        /**
         * An object representing the updated reservation.
         */
        type ReservationUpdatedEvent = {
            /**
             * Time tickets were reserved.
             */
            timestamp: Date;
            /**
             * Event ID.
             */
            eventId: string;
            /**
             * Reservation ID. Can be used to retrieve an invoice.
             */
            reservationId: string;
            /**
             * Reservation status.
             *  One of:
             *
             *  + `"RESERVATION_PENDING"`: Reservation is pending confirmation. It will expire after expiration due time.
             *  + `"RESERVATION_CONFIRMED"`: Reservation was confirmed and will not expire.
             *  + `"RESERVATION_CANCELED"`: Reservation was canceled because of non payment.
             *  + `"RESERVATION_CANCELED_MANUALLY"`: Reservation was canceled manually by the buyer.
             */
            status: string;
        };
        /**
         * An object representing the created RSVP.
         */
        type RsvpCreatedEvent = {
            /**
             * Time the RSVP was created.
             */
            timestamp: Date;
            /**
             * Event ID.
             */
            eventId: string;
            /**
             * RSVP ID.
             */
            rsvpId: string;
            /**
             * Contact ID associated with the RSVP.
             */
            contactId: string;
            /**
             * Member ID associated with the RSVP.
             */
            memberId?: string;
            /**
             * RSVP response status.
             *  One of:
             *
             *  + `"YES"`: Guest is attending.
             *  + `"NO"`: Guest is not attending.
             *  + `"WAITING"`: Guest added to the wait list.
             */
            status: string;
            /**
             * Guest first name.
             */
            firstName: string;
            /**
             * Guest last name.
             */
            lastName: string;
            /**
             * Guest email address.
             */
            email: string;
            /**
             * RSVP form response.
             */
            rsvpForm: Events.FormResponse;
            /**
             * List of guests.
             */
            guests: Events.Guest[];
        };
        /**
         * An object representing the deleted RSVP.
         */
        type RsvpDeletedEvent = {
            /**
             * Time RSVP was deleted.
             */
            timestamp: Date;
            /**
             * Event ID.
             */
            eventId: string;
            /**
             * RSVP ID.
             */
            rsvpId: string;
            /**
             * Contact ID associated with this RSVP.
             */
            contactId: string;
            /**
             * Member ID associated with this RSVP.
             */
            memberId?: string;
            /**
             * Whether the RSVP was anonymized as a result of a GDPR delete.
             */
            anonymized: boolean;
        };
        /**
         * An object representing the updated RSVP.
         */
        type RsvpUpdatedEvent = {
            /**
             * Time the RSVP was updated.
             */
            timestamp: Date;
            /**
             * Time the RSVP was created.
             */
            created: Date;
            /**
             * Event ID.
             */
            eventId: string;
            /**
             * RSVP ID.
             */
            rsvpId: string;
            /**
             * Contact ID associated with this RSVP.
             */
            contactId: string;
            /**
             * Member ID associated with this RSVP.
             */
            memberId?: string;
            /**
             * RSVP response status.
             *  One of:
             *
             *  + `"YES"`: Guest is attending.
             *  + `"NO"`: Guest is not attending.
             *  + `"WAITING"`: Guest added to the wait list.
             */
            status: string;
            /**
             * Guest first name.
             */
            firstName: string;
            /**
             * Guest last name.
             */
            lastName: string;
            /**
             * Guest email.
             */
            email: string;
            /**
             * RSVP form response.
             */
            rsvpForm: Events.FormResponse;
            /**
             * List of guests.
             */
            guests: Events.Guest[];
        };
        /**
         * An object representing an event's schedule configuration.
         */
        type ScheduleConfiguration = {
            /**
             * Whether the event's schedule is to be determined later.
             *
             *  If an event's time is not yet decided, the TBD message is displayed instead of the
             *  start date and end date.
             *
             *  When `scheduleTbd` is `true`, `startDate`, `endDate`, and `timeZoneId` are not required.
             */
            scheduleTbd: boolean;
            /**
             * Schedule TBD message.
             */
            scheduleTbdMessage?: string;
            /**
             * Event start date.
             */
            startDate?: Date;
            /**
             * Event end date.
             */
            endDate?: Date;
            /**
             * ID of the time zone for the Wix event in [tz database format](https://en.wikipedia.org/wiki/Tz_database), such as `EST`, or `America/Los_Angeles`. Optional for TBD events.
             */
            timeZoneId?: string;
        };
        /**
         * An object representing the event that has started.
         */
        type StartedEvent = {
            /**
             * Time the event started.
             */
            timestamp: Date;
            /**
             * Event ID.
             */
            eventId: string;
        };
        /**
         * An object representing an applied tax.
         */
        type Tax = {
            /**
             * Tax type.
             *  One of:
             *
             *  + `"INCLUDED"`: Tax is included in the ticket price.
             *  + `"ADDED"`: Tax is added to the order at checkout.
             */
            type: string;
            /**
             * Tax name.
             */
            name: string;
            /**
             * Rate percentage. Possible values are between `"0.01"` and `"100"`, using up to 2 decimal places.
             */
            rate: string;
            /**
             * Taxable amount.
             */
            taxable: Events.Money;
            /**
             * Total tax amount.
             */
            amount: Events.Money;
        };
        /**
         * An object representing a generated ticket.
         */
        type Ticket = {
            /**
             * Unique ticket number.
             */
            ticketNumber: string;
            /**
             * Ticket definition ID.
             */
            ticketDefinitionId: string;
            /**
             * Ticket check-in.
             */
            checkIn: Events.CheckIn;
            /**
             * Whether the ticket is archived.
             */
            archived: boolean;
            /**
             * Whether the ticket is confirmed.
             */
            confirmed: boolean;
            /**
             * Guest first name.
             */
            firstName?: string;
            /**
             * Guest last name.
             */
            lastName?: string;
            /**
             * Guest email address.
             */
            email?: string;
            /**
             * Contact ID associated with this ticket.
             */
            contactId?: string;
            /**
             * Member ID associated with this ticket.
             */
            memberId?: string;
            /**
             * Ticket form response. Only assigned tickets contain a separate form.
             */
            form?: Events.FormResponse;
        };
        /**
         * An object representing the created ticket definition.
         */
        type TicketDefinitionCreatedEvent = {
            /**
             * Time ticket definition was created.
             */
            timestamp: Date;
            /**
             * Event ID.
             */
            eventId: string;
            /**
             * Ticket definition ID.
             */
            ticketDefinitionId: string;
        };
        /**
         * An object representing the deleted ticket definition.
         */
        type TicketDefinitionDeletedEvent = {
            /**
             * Time ticket definition was deleted.
             */
            timestamp: Date;
            /**
             * Event ID.
             */
            eventId: string;
            /**
             * Ticket definition ID.
             */
            ticketDefinitionId: string;
        };
        /**
         * An object representing the updated ticket definition.
         */
        type TicketDefinitionUpdatedEvent = {
            /**
             * Time ticket definition was updated.
             */
            timestamp: Date;
            /**
             * Event ID.
             */
            eventId: string;
            /**
             * Ticket definition ID.
             */
            ticketDefinitionId: string;
        };
        /**
         * An object representing a time duration.
         */
        type TimeDuration = {
            /**
             * Number of days in the time duration.
             */
            days: number;
            /**
             * Number of hours in the time duration.
             */
            hours: number;
            /**
             * Number of minutes in the time duration.
             */
            minutes: number;
        };
        /**
         * An object representing the Wix event that was updated.
         */
        type UpdatedEvent = {
            /**
             * Time the event was updated.
             */
            timestamp: Date;
            /**
             * Event ID.
             */
            eventId: string;
            /**
             * Event title.
             */
            title: string;
            /**
             * Event location.
             */
            location: Events.Location;
            /**
             * Event's schedule configuration.
             */
            scheduleConfig: Events.ScheduleConfiguration;
            /**
             * Whether the schedule configuration was updated.
             */
            scheduleConfigUpdated: boolean;
        };
    }
    /**
     * The Wix Events API provides functionality for creating, updating, and managing Wix events.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.html#)
     */
    namespace WixEvents {
        /**
         * An object representing additional labels for form fields.
         */
        type AdditionalLabel = {
            /**
             * Field name.
             */
            name: string;
            /**
             * Field label.
             */
            label: string;
        };
        /**
         * An object representing a street address for the Wix event.
         */
        type Address = {
            /**
             * Main address line (usually street and number) as free text. For non-TBD events, either `addressLine1` or `streetAddress` must be entered. Optional for TBD events.
             */
            addressLine1?: string;
            /**
             * Street address object, with number and name in separate fields.  For non-TBD events, either `addressLine1` or `streetAddress` must be entered. Optional for TBD events.
             */
            streetAddress?: WixEvents.StreetAddress;
            /**
             * Human-readable address string. If not provided, the value is generated from the available address data.  If provided, the value is parsed and used to populate other address properties.
             */
            formatted: string;
            /**
             * Free text providing more detailed address information, such as apartment, suite, or floor.
             */
            addressLine2: string;
            /**
             * Coordinates of the physical address.
             */
            location: WixEvents.AddressLocation;
            /**
             * City name.
             */
            city: string;
            /**
             * Code for a subdivision (such as state, prefecture, or province) in an [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) format.
             */
            subdivision: string;
            /**
             * 2-letter country code in an [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
             */
            country: string;
            /**
             * Postal or zip code.
             */
            postalCode: string;
        };
        /**
         * An object for updating a street address.
         */
        type AddressInfo = {
            /**
             * Main address line (usually street and number) as free text. For non-TBD events, either `addressLine1` or `streetAddress` must be entered. Optional for TBD events.
             */
            addressLine1?: string;
            /**
             * Street address object, with number and name in separate fields. For non-TBD events, either `addressLine1` or `streetAddress` must be entered. Optional for TBD events.
             */
            streetAddress?: WixEvents.StreetAddressInfo;
            /**
             * Human-readable address string. If not provided, the value is generated from the available address data. If provided, the value is parsed and used to populate other address properties.
             */
            formatted?: string;
            /**
             * Free text providing more detailed address information, such as apartment, suite, or floor.
             */
            addressLine2?: string;
            /**
             * Coordinates of the physical address.
             */
            location?: WixEvents.AddressLocationInfo;
            /**
             * City name.
             */
            city?: string;
            /**
             * Code for a subdivision (such as state, prefecture, or province) in an [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) format.
             */
            subdivision?: string;
            /**
             * 2-letter country code in an [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
             */
            country?: string;
            /**
             * Postal or zip code.
             */
            postalCode?: string;
        };
        /**
         * An object representing coordinates of the physical address of the Wix event.
         */
        type AddressLocation = {
            /**
             * Address's latitude.
             */
            latitude: number;
            /**
             * Address's longitude.
             */
            longitude: number;
        };
        /**
         * An object for updating coordinates of the physical address of the Wix event.
         */
        type AddressLocationInfo = {
            /**
             * Address's latitude.
             */
            latitude?: number;
            /**
             * Address's longitude.
             */
            longitude?: number;
        };
        /**
         * An object representing the links (URLs) that guests can click to add the Wix event to their calendars.
         */
        type CalendarLinks = {
            /**
             * A URL that guests can use to add the Wix event to their Google calendars.
             */
            google: string;
            /**
             * A URL that guests can use to download ICS calendar files in order to add the Wix event to their calendars.
             */
            ics: string;
        };
        /**
         * An object representing messages on the form for purchasing tickets.
         */
        type CheckoutFormMessages = {
            /**
             * Title for the form for purchasing tickets.
             */
            title: string;
            /**
             * Button label text that directs guests to check out the form when purchasing tickets.
             */
            checkoutLabel: string;
        };
        /**
         * An object representing the ID of a Wix event that was deleted.
         */
        type DeletedWixEvent = {
            /**
             * Deleted event ID.
             */
            _id: string;
        };
        /**
         * An object representing the corresponding registration form for the Wix event.
         */
        type Form = {
            /**
             * A block of fields to group together on the form. For example, you might create a block for first name and last name. These blocks are also called input groups.
             */
            InputGroups: WixEvents.InputGroup[];
            /**
             * Messages you can customize for the form.
             */
            messages: WixEvents.FormMessages;
        };
        /**
         * An object representing a set of configured form messages.
         */
        type FormMessages = {
            /**
             * RSVP form messages.
             */
            rsvp: WixEvents.RsvpFormMessages;
            /**
             * Checkout form messages.
             */
            checkout: WixEvents.CheckoutFormMessages;
            /**
             * Messages to display when event registration is closed.
             */
            registrationClosed: WixEvents.RegistrationClosedMessages;
        };
        /**
         * An object representing the guest list settings for the Wix event.
         */
        type GuestListSettings = {
            /**
             * Whether guests can see other guests attending the Wix event. Defaults to `true`.
             */
            public: boolean;
        };
        /**
         * An object for updating guest list settings for the Wix event.
         */
        type GuestListSettingsInfo = {
            /**
             * Whether guests can see other guests attending the Wix event. Defaults to `true`.
             */
            public?: boolean;
        };
        /**
         * An object representing a field on a form. The field may or may not be included in an `InputGroup` block. Text-type fields can contain one or more values.
         */
        type InputField = {
            /**
             * Field name.
             */
            name: string;
            /**
             * Main field label.
             */
            label: string;
            /**
             * Additional labels for multi-valued fields, such as `ADDRESS` fields.
             */
            additionalLabels: WixEvents.AdditionalLabel[];
            /**
             * Pre-defined text choices for fields, such as the options listed in a dropdown.
             */
            options: string[];
            /**
             * Whether the field is mandatory.
             */
            required: boolean;
            /**
             * Maximum number of characters allowed for the `TEXT` fields.
             */
            maxLength: number;
            /**
             * Type of the field. The type determines the format of the field.
             *  This property is used to validate the values entered on the form when submitting. Defaults to `"TEXT"`.
             * One of:
             *  + `"TEXT"`
             *  + `"NUMBER"`
             *  + `"TEXT_ARRAY"`
             *  + `"DATE_TIME"`
             *  + `"ADDRESS"`
             */
            type: string;
            /**
             * The maximum number of values allowed for `TEXT_ARRAY` fields.
             */
            maxSize: number;
        };
        /**
         * An object representing a block of fields that tend to be grouped together on a form. The block of fields is also called an input group.
         */
        type InputGroup = {
            /**
             * The type of the block of fields. Every field in the block must be of the same type.
             * One of:
             *  + `"INPUT"`
             *  + `"TEXTAREA"`
             *  + `"DROPDOWN"`
             *  + `"RADIO"`
             *  + `"CHECKBOX"`
             *  + `"NAME"`
             *  + `"GUEST_CONTROL"`. This control corresponds to the `Additional Guests` option when customizing the registration form in the Dashboard. The fields for this block include specifying how many guests, adding text for a comment, and whether the guest name is required.
             *  + `"ADDRESS_SHORT"`. This control corresponds to the `Single Line` address option when customizing the registration form in the Dashboard, and the `Address.Location.Address.formatted` property in this API.
             *  + `"ADDRESS_FULL"`. This control corresponds to the `Full Address` address option when customizing the registration form in the Dashboard, and the set of individual address properties (excluding `Address.Location.Address.formatted`) in this API.
             *  + `"DATE"`
             */
            type: string;
            /**
             * Whether the fields in the input group are mandatory (such as name and email). When `true`, you can change only the label for the fields in the block.
             */
            system: boolean;
            /**
             * Fields in the block. Also called child input fields.
             */
            inputs: WixEvents.InputField[];
            /**
             * Fields in the input group are sorted by this value in ascending order.
             */
            orderIndex: number;
            /**
             * Unique ID for the input group.
             */
            _id: string;
        };
        /**
         * An object representing a Wix event location.
         */
        type Location = {
            /**
             * Location name. `name` is required for TBD events (events whose time is yet "to be determined").
             */
            name: string;
            /**
             * Street address for the Wix event.
             *
             *  The `address` property contains the full [address](https://www.wix.com/velo/reference/$w/addressinput/value) of the Wix event. The address is derived from the [`formatted`](#formatted) property.
             *
             *  The `address` is required for non-TBD events. (TBD events are events whose time is yet "to be determined.")
             */
            address: WixEvents.Address;
            /**
             * Location type. Defaults to `"VENUE"`.
             * One of:
             *  + `"VENUE"`. The event is being held at a physical location.
             *  + `"ONLINE"`. The event is being held at a virtual online location, such as with online conferencing.
             */
            type: string;
        };
        /**
         * An object for updating a Wix event's location.
         */
        type LocationInfo = {
            /**
             * Location name. `name` is required for TBD events (events whose time is yet "to be determined").
             */
            name?: string;
            /**
             * Full [address](https://www.wix.com/velo/reference/$w/addressinput/value).
             *  The `address` is required for non-TBD events. (TBD events are events whose time is yet "to be determined.")
             *  You can specify the `address` for non-TBD events in the following ways:
             *  + By entering the `address.formatted` property, which the API then uses to populate the other address properties.
             *  + By entering the individual `address` properties including the `address.addressLine1` property and, if needed, the `address.addressLine2`property. (Do not specify `address.streetAddress`.) The API uses this data to populate the `address.formatted` property.
             *  + By entering the individual `address` properties including `address.streetAddress`. (Do not specify `address.addressLine1`.) The API uses this data to populate the `address.formatted` property.
             */
            address?: WixEvents.AddressInfo;
            /**
             * Location type. Defaults to `"VENUE"`.
             * One of:
             *  + `"VENUE"`. The event is being held at a physical location.
             *  + `"ONLINE"`. The event is being held at a virtual online location, such as with online conferencing.
             */
            type?: string;
        };
        /**
         * An object representing money and its default monetary format.
         */
        type Money = {
            /**
             * Monetary amount represented as a decimal string with a period as the decimal separator (for example, 3.99).
             */
            value: string;
            /**
             * Currency code. Must be a valid [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code (for example, `USD`).
             */
            currency: string;
        };
        /**
         * An object representing online conferencing details for the Wix event.
         */
        type OnlineConferencing = {
            /**
             * Whether online conferencing is enabled. Not supported for Wix events that are TBDs (events whose time is not yet determined).
             *  When enabled, links to join the conference are generated and provided to guests in an email when the guest registers.
             */
            enabled: boolean;
            /**
             * ID of the online conferencing provider.
             */
            providerId: string;
            /**
             * Online conference type.  Defaults to `"MEETING"`.
             * One of:
             *  + `"MEETING"`
             *  + `"WEBINAR"`
             */
            conferenceType: string;
            /**
             * Session details for the Wix event.
             */
            session: WixEvents.Session;
        };
        /**
         * An object for updating online conferencing settings for a Wix event.
         */
        type OnlineConferencingInfo = {
            /**
             * Whether online conferencing is enabled. Not supported for Wix events that are TBDs (events whose time is not yet determined).
             *  When enabled, links to join the conference are generated and provided to guests in an email when the guest registers.
             */
            enabled?: boolean;
            /**
             * ID of the online conferencing provider.
             */
            providerId?: string;
            /**
             * Online conference type. Defaults to `"MEETING"`.
             * One of:
             *  + `"MEETING"`
             *  + `"WEBINAR"`
             */
            conferenceType?: string;
        };
        /**
         * Options to use when performing a query or query count.
         */
        type QueryOptions = {
            /**
             * When `true`, prevents permission checks from running for the operation. Defaults to `false`.
             */
            suppressAuth?: boolean;
        };
        /**
         * An object representing registration details for the Wix event.
         */
        type Registration = {
            /**
             * Registration URL if registration for the Wix event managed externally. Guests go to this URL to register.
             */
            externalRegistrationUrl: string;
            /**
             * Who can register for the Wix event. Defaults to `"MEMBER"`.
             * One of:
             *  + `"MEMBER"`. Only logged-in guests can register.
             *  + `"VISITOR_OR_MEMBER"`. Everyone can register, whether they are logged-in to the site or not.
             */
            restrictedTo: string;
            /**
             * Initial event type, set when creating the Wix event.
             * One of:
             *  + `"RSVP"`. The event is created as an RSVP-type event.
             *  + `"TICKETS"`. The event is created as a ticketed-type event.
             */
            initialType: string;
            /**
             * Read-only type of the Wix event. After initial event creation, the type can change, for example, if event registration is not necessary (`NO_REGISTRATION`) or if event registration is set to be managed externally (`EXTERNAL`).
             *  + `"RSVP"`. The event was initially created as an RSVP-type event.
             *  + `"TICKETS"`. The event was initially created as a ticketed-type event.
             *  + `"EXTERNAL"`. Registration is managed externally, on a different site. Setting the `externalRegistrationUrl` property updates the `type` to this status.
             *  + `"NO_REGISTRATION"`. There is no need to register for this site.  Setting the `registrationDisabled` property updates the `type` to this status.
             */
            type: string;
            /**
             * Wix event registration status.
             * One of:
             *  + `"CLOSED"`. The event was closed (for example, if the maximum number of attendees was reached) or cancelled. Guests cannot register.
             *  + `"CLOSED_MANUALLY"`. Event registration was closed manually by the event manager. Guests cannot register.
             *  + `"OPEN_RSVP"`. Guests can register for the RSVP-type Wix event.
             *  + `"OPEN_RSVP_WAITLIST"`. Guests can register for the RSVP-type Wix event, but are waitlisted.
             *  + `"OPEN_TICKETS"`. Guests can register for the ticketed-type Wix event.
             *  + `"OPEN_EXTERNAL"`. Guests can register externally for the Wix event--not using Wix Events.
             */
            status: string;
            /**
             * Registration details for an RSVP event.
             */
            rsvp: WixEvents.Rsvp;
            /**
             * Registration details for a ticketed event.
             */
            tickets: WixEvents.Tickets;
        };
        /**
         * An object representing messages to display when Wix event registration is closed.
         */
        type RegistrationClosedMessages = {
            /**
             * Message displayed when event registration is closed.
             */
            message: string;
            /**
             * Button label text that directs guests to take other actions, such as a clicking a link to see other Wix events that they can register for.
             */
            exploreEventsLabel: string;
        };
        /**
         * An object representing RSVP registration settings for a Wix event.
         */
        type Rsvp = {
            /**
             * Whether the Wix event accepts `NO` RSVPs in addition to `YES` RSVPs. Defaults to `"YES_ONLY"`.
             * One of:
             *  + `"YES_ONLY"`
             *  + `"YES_AND_NO"`
             */
            rsvpStatusOptions: string;
            /**
             * Maximum number of guests allowed to register to the Wix event. If a guest adds additional guests to the same RSVP, the additional guests are also included when calculating the `limit`.
             */
            limit: number;
            /**
             * Whether to open a waitlist when the guest `limit` for the Wix event is reached. Waitlisted guests are assigned a `WAITING` status.
             */
            waitlist: boolean;
        };
        /**
         * An object representing RSVP form messages.
         */
        type RsvpFormMessages = {
            /**
             * Button label text displayed next to where the guest RSVPs `YES`.
             */
            rsvpYes: string;
            /**
             * Button label text displayed next to where the guest RSVPs `NO`.
             */
            rsvpNo: string;
            /**
             * Messages to display when the RSVP is `YES`.
             */
            yesMessages: WixEvents.RsvpFormPositive;
            /**
             * Messages to display when the RSVP is `YES`, even if the guest is placed on the waitlist. Wait-listed guests receive the same messages as guests who are not on the waitlist.
             */
            waitingMessages: WixEvents.RsvpFormPositive;
            /**
             * Messages to display when the RSVP is `NO`.
             */
            noMessages: WixEvents.RsvpFormNegative;
            /**
             * Button label text that directs guests to submit the RSVP form.
             */
            submitRsvpLabel: string;
        };
        /**
         * An object representing a messages to display when the RSVP is `NO`.
         */
        type RsvpFormNegative = {
            /**
             * Form title for negative RSVPs.
             */
            title: string;
            /**
             * Confirmation message title.
             */
            confirmationTitle: string;
            /**
             * Button label text that suggests guests share the Wix event link with others who might want to attend.
             */
            shareLabel: string;
        };
        /**
         * An object representing a messages to display when the RSVP is `YES`.
         */
        type RsvpFormPositive = {
            /**
             * Form title for positive RSVPs.
             */
            title: string;
            /**
             * Confirmation message title.
             */
            confirmationTitle: string;
            /**
             * Confirmation message text.
             */
            confirmationMessage: string;
            /**
             * Button label text that suggests guests add the Wix event to their calendar using the link.
             */
            addToCalendarLabel: string;
            /**
             * Button label text that suggests guests share the Wix event link with others who might want to attend.
             */
            shareLabel: string;
        };
        /**
         * An object for updating RSVP registration settings for a Wix event.
         */
        type RsvpInfo = {
            /**
             * Whether the Wix event accepts `NO` rsvps in addition to `YES` rsvps. Defaults to `"YES_ONLY"`.
             * One of:
             *  + `"YES_ONLY"`
             *  + `"YES_AND_NO"`
             */
            rsvpStatusOptions?: string;
            /**
             * Maximum number of guests allowed to register to the Wix event. If a guest adds additional guests to the same RSVP, the additional guests are also included when calculating the `limit`.
             */
            limit?: number;
            /**
             * Whether to open a waitlist when the guest `limit` for the Wix event is reached. Waitlisted guests are assigned a `WAITING` status.
             */
            waitlist?: boolean;
        };
        /**
         * An object representing RSVP summary data for the Wix event.
         */
        type RsvpSummary = {
            /**
             * Total number of RSVPs received.
             */
            totalRsvps: number;
            /**
             * Number of accepted RSVPs.
             */
            yesCount: number;
            /**
             * Number of rejected RSVPs.
             */
            noCount: number;
            /**
             * Number of RSVPs in the waitlist.
             */
            waitlistCount: number;
        };
        /**
         * An object representing scheduling settings for a Wix event.
         */
        type Scheduling = {
            /**
             * Whether the event's time is to be determined later. If `true`, the Wix event's schedule is defined as TBD ("to be determined").
             *  Because the Wix event's start and end dates are not yet defined, a message, set in `tbdMessage`, is displayed instead.
             *  `startDate`, `endDate`, and `timeZoneId` are optional for TBD events.
             */
            tbd: boolean;
            /**
             * A message to display for events whose `tbd` property is `true`.
             */
            tbdMessage: string;
            /**
             * Start date and time for the Wix event. Optional for TBD events.
             */
            startDate: Date;
            /**
             * End date and time for the Wix event.  Optional for TBD events.
             */
            endDate: Date;
            /**
             * ID of the time zone for the Wix event in [tz database](https://en.wikipedia.org/wiki/Tz_database) format, such as `EST`, or `America/Los_Angeles`. Optional for TBD events.
             */
            timeZoneId: string;
            /**
             * Whether the time zone is displayed in the formatted schedule.
             */
            showTimeZone: boolean;
            /**
             * Formatted schedule representation.
             */
            formatted: string;
            /**
             * Formatted start date of the event (empty for TBD events).
             */
            startDateFormatted: string;
            /**
             * Formatted start time of the event (empty for TBD events).
             */
            startTimeFormatted: string;
            /**
             * Whether the end date is hidden in the formatted schedule.
             */
            hideEndDate: boolean;
        };
        /**
         * An object for updating scheduling settings for a Wix event.
         */
        type SchedulingInfo = {
            /**
             * Whether the event's time is to be determined later. If `true`, the Wix event's schedule is defined as TBD ("to be determined").
             *  Because the Wix event's start and end dates are not yet defined, a message, set in `tbdMessage`, is displayed instead.
             *  `startDate`, `endDate`, and `timeZoneId` are optional for TBD events.
             */
            tbd?: boolean;
            /**
             * A message to display for events whose `tbd` property is `true`.
             */
            tbdMessage?: string;
            /**
             * Start date and time for the Wix event. Optional for TBD ("to be determined") events.
             */
            startDate?: Date;
            /**
             * End date and time for the Wix event.  Optional for TBD ("to be determined") events.
             */
            endDate?: Date;
            /**
             * ID of the time zone for the Wix event in [tz database format](https://en.wikipedia.org/wiki/Tz_database), such as `EST`, or `America/Los_Angeles`. Optional for TBD events.
             */
            timeZoneId?: string;
            /**
             * Whether the time zone is displayed in the formatted schedule.
             */
            showTimeZone?: boolean;
            /**
             * Whether the end date is hidden in the formatted schedule.
             */
            hideEndDate?: boolean;
        };
        /**
         * An object representing a Wix event session, including links and passwords.
         */
        type Session = {
            /**
             * Link for the event host to use to start the online conference session.
             */
            hostLink: string;
            /**
             * Link for the guests to use to join the online conference session.
             */
            guestLink: string;
            /**
             * The password required to join the online conference session (when relevant). Requiring a password is dependent on the online conferencing provider. For example, Zoom provides passwords for its meetings while LiveVideo does not.
             */
            password: string;
        };
        /**
         * An object representing the site URL for the Wix event, including its base URL and path.
         */
        type SiteUrl = {
            /**
             * Base URL.
             *  + Premium sites: The domain,for example, `https://domain.com`.
             *  + Free sites: The site URL, for example, `https://user_name.wixsite.com/mysite`.
             *  > **Note**: The above URL examples are for a published site. When previewing your site, you receive the Editor URL.
             */
            baseUrl: string;
            /**
             * The path to Wix event page, for example, `/my-events/weekly-meetup-2` for both Premium and free sites.
             */
            path: string;
        };
        /**
         * An object representing the Wix event's street address, with number and name in separate fields.
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
        };
        /**
         * An object for updating the Wix event's street address, with number and name in separate fields.
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
        };
        /**
         * An object representing summary data and statistics for Wix event sales, excluding data pertaining to archived orders.
         */
        type Summaries = {
            /**
             * Summary data for RSVP sales.
             */
            rsvp: WixEvents.RsvpSummary;
            /**
             * Summary data for revenue and tickets sold.
             */
            tickets: WixEvents.TicketsSummary;
        };
        /**
         * An object for updating tax settings for the Wix event.
         */
        type TaxSettingInfo = {
            /**
             * When the tax is applied. Defaults to `"INCLUDED"`.
             * One of:
             *  + `"INCLUDED"`. Tax is built-in to the price.
             *  + `"ADDED_AT_CHECKOUT"`. Tax is added when the guest checks out.
             */
            type?: string;
            /**
             * Tax name.
             */
            name?: string;
            /**
             * Tax rate, such as `21.55`.
             */
            rate?: string;
        };
        /**
         * An object representing tax settings for the Wix event.
         */
        type TaxSettings = {
            /**
             * When the tax is applied. Defaults to `"INCLUDED"`.
             * One of:
             *  + `"INCLUDED"`. Tax is built-in to the price.
             *  + `"ADDED_AT_CHECKOUT"`. Tax is added when the guest checks out.
             */
            type: string;
            /**
             * Tax name.
             */
            name: string;
            /**
             * Tax rate, such as `21.55`.
             */
            rate: string;
        };
        /**
         * An object representing tickets settings for the Wix event.
         */
        type Tickets = {
            /**
             * Currency used for event ordering and transactions.
             */
            currency: string;
            /**
             * When ordering, whether each ticket in the order needs its own order form or if one form covers multiple tickets.
             */
            formAssignedPerTicket: boolean;
            /**
             * Tax settings.
             */
            tax: WixEvents.TaxSettings;
            /**
             * Price of the lowest-priced ticket.
             */
            lowestTicketPrice: WixEvents.Money;
            /**
             * Price of the lowest-priced ticket.
             */
            highestTicketPrice: WixEvents.Money;
            /**
             * Formatted price of the lowest-priced ticket.
             */
            lowestTicketPriceFormatted: string;
            /**
             * Formatted price of the highest-priced ticket.
             */
            highestTicketPriceFormatted: string;
        };
        /**
         * An object for updating tickets settings for the Wix event.
         */
        type TicketsInfo = {
            /**
             * When ordering, whether each ticket in the order needs its own order form or if one form covers multiple tickets.
             */
            formAssignedPerTicket?: boolean;
            /**
             * Tax settings.
             */
            tax?: WixEvents.TaxSettingInfo;
        };
        /**
         * An object representing a summary of the Wix event's revenue and tickets sold.
         */
        type TicketsSummary = {
            /**
             * Total number of tickets sold.
             */
            totalTickets: number;
            /**
             * Total revenue, including taxes and excluding fees. Payment provider fees are not deducted.
             */
            revenue: WixEvents.Money;
            /**
             * Whether currency cannot be changed. The currency is locked after the first order for the event has been created and is set to the currency of that first order.
             */
            currencyLocked: boolean;
            /**
             * Total number of orders placed for the Wix event.
             */
            totalOrders: number;
            /**
             * Total sales balance for confirmed transactions.
             */
            totalSales: WixEvents.Money;
        };
        /**
         * An object representing a Wix event.
         */
        type WixEvent = {
            /**
             * Wix event ID.
             */
            _id: string;
            /**
             * Wix event location details.
             */
            location: WixEvents.Location;
            /**
             * Wix event scheduling details.
             */
            scheduling: WixEvents.Scheduling;
            /**
             * Wix event title.
             */
            title: string;
            /**
             * Wix event description.
             */
            description: string;
            /**
             * Rich-text (HTML) content for the "About Event" section.
             */
            about: string;
            /**
             * The location of an image that represents the Wix event. This image is printed on the ticket (PDF format). The image file must be an image file from the Media Manager.
             *
             *  The URL format is:
             *  `wix:image://v1//#originWidth=&originHeight=[&watermark=]`
             */
            mainImage: string;
            /**
             * URL-friendly version of the Wix event title. Unique across all Wix events in the same site.
             */
            slug: string;
            /**
             * [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code of the Wix event. Use to translate content on forms, and so on.
             */
            language: string;
            /**
             * Date the Wix event was created.
             */
            _createdDate: Date;
            /**
             * Date the Wix event was updated.
             */
            _updatedDate: Date;
            /**
             * Wix event status. Defaults to `"SCHEDULED"`.
             * One of:
             *  + `"SCHEDULED"`. The upcoming Wix event is scheduled but has not yet started.
             *  + `"STARTED"`. The Wix event has started and is in progress.
             *  + `"ENDED"`. The Wix event has ended.
             *  + `"CANCELED"`. The Wix event has been canceled.
             */
            status: string;
            /**
             * Registration details for the Wix event.
             */
            registration: WixEvents.Registration;
            /**
             * "Add to calendar" URLs.
             */
            calendarLinks: WixEvents.CalendarLinks;
            /**
             * Event page URL components.
             */
            eventUrl: WixEvents.SiteUrl;
            /**
             * Registration form for the site guest to fill out with their contact details, and other information, as relevant.
             */
            form: WixEvents.Form;
            /**
             * Summaries of Wix event sales.
             */
            summary: WixEvents.Summaries;
            /**
             * Guest list settings for the Wix event.
             */
            guestList: WixEvents.GuestListSettings;
            /**
             * ID of the creator of the Wix event. If the creator is not logged in when creating the event, the `createdBy` property is empty.
             */
            createdBy: string;
            /**
             * Online conferencing details for the Wix event.
             */
            videoConferencing: WixEvents.OnlineConferencing;
            /**
             * The "Filter by:" drop-down option for filtering contacts by this event
             *  in the Dashboard's [Contact List page](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F8f93447d-7521-4aa1-8c64-4d5a4f025d3f%2Fcontacts%2F%3FreferralInfo%3Dsidebar).
             *  This read-only property is automatically populated to comprise a "custom" prefix, the title of the event, and other suffixes added for uniqueness. Note that even if
             *  the title of an event is updated, the `assignedContactsLabel` does not change.
             */
            assignedContactsLabel: string;
        };
        /**
         * An object for creating a Wix event.
         */
        type WixEventInfo = {
            /**
             * Wix event title.
             */
            title?: string;
            /**
             * Wix event description.
             */
            description?: string;
            /**
             * The location of an image that represents the Wix event. This image is printed on the ticket (PDF format). The image file must be an image file from the Media Manager.
             *
             *  The URL format is:
             *  `wix:image://v1//#originWidth=&originHeight=[&watermark=]`
             */
            mainImage?: string;
            /**
             * Wix event registration settings.
             */
            registration?: WixEvents.WixEventRegistrationInfo;
            /**
             * Wix event guest list settings.
             */
            guestList?: WixEvents.GuestListSettingsInfo;
            /**
             * Rich-text (HTML) content for the "About Event" section.
             */
            about?: string;
            /**
             * Wix event online conferencing settings.
             */
            videoConferencing?: WixEvents.OnlineConferencingInfo;
            /**
             * Wix event location settings.
             *  `location.address` is required for non-TBD events.
             *  `location.name` is required for TBD events.
             *  (TBD events are events whose times are yet "to be determined.")
             */
            location: WixEvents.LocationInfo;
            /**
             * Wix event scheduling settings.
             */
            scheduling: WixEvents.SchedulingInfo;
        };
        /**
         * An object for updating registration options for a Wix event.
         */
        type WixEventInfoOptions = {
            /**
             * Content language code in [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
             *  Used for translating tickets' PDF labels, registration forms, automatic emails, and so on.
             *  Supported languages: `ar`, `bg`, `cs`, `da`, `de`, `el`, `en`, `es`, `fi`, `fr`, `he`, `hi`, `hu`, `id`, `it`, `ja`, `ko`, `ms`, `nl`, `no`, `pl`, `pt`, `ro`, `ru`, `sv`, `th`, `tl`, `tr`, `uk`, `zh`.
             *  Defaults to `en`.
             */
            language?: string;
        };
        /**
         * An object for updating registration settings for the Wix event.
         */
        type WixEventRegistrationInfo = {
            /**
             * Registration URL, if registration for the Wix event is managed externally. Guests go to this URL to register. Setting this property changes the read-only `registration.type` property to `EXTERNAL`.
             */
            externalRegistrationUrl?: string;
            /**
             * Whether to temporarily suspend (pause) registration. For example, you might want to pause registration temporarily if you need to change venues to allow for more attendees.
             */
            registrationPaused?: boolean;
            /**
             * Who can register to the Wix event. Defaults to `"MEMBER"`.
             * One of:
             *  + `"MEMBER"`. Only logged-in guests can register.
             *  + `"VISITOR_OR_MEMBER"`. Everyone can register, whether they are logged-in to the site or not.
             */
            restrictedTo?: string;
            /**
             * Whether to disable registration. For example, you might want to disable registration if you will not have enough supplies on-hand for more attendees. Setting to `true` changes the read-only `registration.type` property to `NO_REGISTRATION`.
             */
            registrationDisabled?: boolean;
            /**
             * Registration settings for the RSVP Wix event.
             */
            rsvp?: WixEvents.RsvpInfo;
            /**
             * Event type. Only RSVP and TICKETS are allowed when creating an event (`initialType`), however after initial event
             * creation the `type` can be changed to other values.
             * One of:
             *  + `"RSVP"`. The Wix event is an RSVP event. It cannot be changed to a ticketed event.
             *  + `"TICKETS"`. The Wix event is a ticketed event. It cannot be changed to an RSVP event.
             *  + `"EXTERNAL"`. If you created a guest list before setting up external registration, the current guest list remains but is likely to be
             *    incomplete. So when sending out messages to the Wix-managed guest list, not all
             *    guests will receive them. Messages should be sent from the external registration system
             *    to the complete guest list.
             *    You can change the value back at any point if you no longer want the event to be managed externally.
             *  + `"NO_REGISTRATION"`. No registration is necessary for the event.
             */
            type?: string;
            /**
             * Registration settings for the ticketed Wix event.
             */
            tickets?: WixEvents.TicketsInfo;
        };
        /**
         * An object for updating a Wix event.
         */
        type WixEventUpdateInfo = {
            /**
             * Wix event title.
             */
            title?: string;
            /**
             * Wix event description.
             */
            description?: string;
            /**
             * Wix event location settings.
             *  Address is required for non-TBD events.
             *  Location name is required for TBD events.
             *  (TBD events are events whose times are yet "to be determined.")
             */
            location?: WixEvents.LocationInfo;
            /**
             * Wix event scheduling settings.
             */
            scheduling?: WixEvents.SchedulingInfo;
            /**
             * The location of an image that represents the Wix event. This image is printed on the ticket (PDF format). The image file must be an image file from the Media Manager.
             *
             *  The URL format is:
             *  `wix:image://v1//#originWidth=&originHeight=[&watermark=]`
             */
            mainImage?: string;
            /**
             * Wix event registration settings.
             */
            registration?: WixEvents.WixEventRegistrationInfo;
            /**
             * Wix event guest list settings.
             */
            guestList?: WixEvents.GuestListSettingsInfo;
            /**
             * Rich-text (HTML) content for the "About Event" section.
             */
            about?: string;
            /**
             * Wix event online conferencing settings.
             */
            videoConferencing?: WixEvents.OnlineConferencingInfo;
        };
        /**
         * Contains functionality for refining a Wix events query.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.EventsQueryBuilder.html#)
         */
        interface EventsQueryBuilder {
            /**
             * Adds an `and` condition to the query.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.EventsQueryBuilder.html#and)
             */
            and(query: WixEvents.EventsQueryBuilder): WixEvents.EventsQueryBuilder;
            /**
             * Adds a sort to a query, sorting by the specified properties in ascending order.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.EventsQueryBuilder.html#ascending)
             */
            ascending(...propertyName: string[]): WixEvents.EventsQueryBuilder;
            /**
             * Refines a query to match items whose specified property value contains a specified string.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.EventsQueryBuilder.html#contains)
             */
            contains(propertyName: string, value: string): WixEvents.EventsQueryBuilder;
            /**
             * Adds a sort to a query, sorting by the specified properties in descending order.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.EventsQueryBuilder.html#descending)
             */
            descending(...propertyName: string[]): WixEvents.EventsQueryBuilder;
            /**
             * Refines a query to match items whose specified property value equals the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.EventsQueryBuilder.html#eq)
             */
            eq(propertyName: string, value: any): WixEvents.EventsQueryBuilder;
            /**
             * Returns the items that match the query.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.EventsQueryBuilder.html#find)
             */
            find(options?: WixEvents.QueryOptions): Promise<WixEvents.EventsQueryResult>;
            /**
             * Refines a query to match items whose specified property value is greater than or equal to the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.EventsQueryBuilder.html#ge)
             */
            ge(propertyName: string, value: string | number | Date): WixEvents.EventsQueryBuilder;
            /**
             * Refines a query to match items whose specified property value is greater than the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.EventsQueryBuilder.html#gt)
             */
            gt(propertyName: string, value: string | number | Date): WixEvents.EventsQueryBuilder;
            /**
             * Refines a query to match items whose specified property value contains any of the specified values.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.EventsQueryBuilder.html#hasSome)
             */
            hasSome(propertyName: string, values: string[]): WixEvents.EventsQueryBuilder;
            /**
             * Refines a query to match items whose specified property value is less than or equal to the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.EventsQueryBuilder.html#le)
             */
            le(propertyName: string, value: string | number | Date): WixEvents.EventsQueryBuilder;
            /**
             * Limits the number of items the query returns.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.EventsQueryBuilder.html#limit)
             */
            limit(limit: string): WixEvents.EventsQueryBuilder;
            /**
             * Refines a query to match items whose specified property value is less than the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.EventsQueryBuilder.html#lt)
             */
            lt(propertyName: string, value: string | number | Date): WixEvents.EventsQueryBuilder;
            /**
             * Refines a query to match items whose specified property value does not equal the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.EventsQueryBuilder.html#ne)
             */
            ne(propertyName: string, value: any): WixEvents.EventsQueryBuilder;
            /**
             * Adds an `not` condition to the query.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.EventsQueryBuilder.html#not)
             */
            not(query: WixEvents.EventsQueryBuilder): WixEvents.EventsQueryBuilder;
            /**
             * Adds an `or` condition to the query.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.EventsQueryBuilder.html#or)
             */
            or(query: WixEvents.EventsQueryBuilder): WixEvents.EventsQueryBuilder;
            /**
             * Sets the number of items to skip before returning query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.EventsQueryBuilder.html#skip)
             */
            skip(skip: string): WixEvents.EventsQueryBuilder;
        }
        /**
         * The results of a Wix events query, containing the retrieved items.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.EventsQueryResult.html#)
         */
        interface EventsQueryResult {
            /**
             * Returns the index of the current results page number.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.EventsQueryResult.html#currentPage)
             */
            readonly currentPage: number;
            /**
             * Returns the items that match the query.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.EventsQueryResult.html#items)
             */
            readonly items: WixEvents.WixEvent[];
            /**
             * Returns the number of items in the current results page.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.EventsQueryResult.html#length)
             */
            readonly length: number;
            /**
             * Returns the query page size.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.EventsQueryResult.html#pageSize)
             */
            readonly pageSize: number;
            /**
             * Contains functionality for refining a Wix events query.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.EventsQueryResult.html#query)
             */
            readonly query: WixEvents.EventsQueryBuilder;
            /**
             * Returns the total number of items that match the query.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.EventsQueryResult.html#totalCount)
             */
            readonly totalCount: number;
            /**
             * Returns the total number of pages the query produced.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.EventsQueryResult.html#totalPages)
             */
            readonly totalPages: number;
            /**
             * Indicates if the query has more results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.EventsQueryResult.html#hasNext)
             */
            hasNext(): boolean;
            /**
             * Indicates if the query has previous results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.EventsQueryResult.html#hasPrev)
             */
            hasPrev(): boolean;
            /**
             * Retrieves the next page of query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.EventsQueryResult.html#next)
             */
            next(): Promise<WixEvents.EventsQueryResult>;
            /**
             * Retrieves the previous page of query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.EventsQueryResult.html#prev)
             */
            prev(): Promise<WixEvents.EventsQueryResult>;
        }
        /**
         * Contains functionality for refining a Wix events query.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.EventsQueryBuilder.html#)
         */
        namespace EventsQueryBuilder {
        }
        /**
         * The results of a Wix events query, containing the retrieved items.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-backend.WixEvents.EventsQueryResult.html#)
         */
        namespace EventsQueryResult {
        }
    }
}
