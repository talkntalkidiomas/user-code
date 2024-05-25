/**
 * The wix-events-frontend module contains functionality for working with
 *  Wix Events from client-side code.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-events-frontend.html#)
 */
declare module 'wix-events-frontend' {
    /**
     * Gets an object containing RSVP functionality.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-events-frontend.html#rsvp)
     */
    const rsvp: Rsvp;
    /**
     * Gets an object containing ticketing functionality.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-events-frontend.html#tickets)
     */
    const tickets: Tickets;
    /**
     * **Deprecated:** Creates a new RSVP form for the specified event.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-events-frontend.html#createEventRsvpForm)
     */
    function createEventRsvpForm(eventId: string): RsvpForm;
    /**
     * Gets a new registration form for the specified event.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-events-frontend.html#getForm)
     */
    function getForm(eventId: string): Promise<Form>;
    /**
     * A registration form for an event.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-events-frontend.Form.html#)
     */
    interface Form {
        /**
         * Gets information about the event's registration form and status.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-frontend.Form.html#formData)
         */
        readonly formData: Form.FormData;
        /**
         * Validates form fields and values against the registration form as defined in the site Dashboard.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-frontend.Form.html#validate)
         */
        validate(formValues: Form.FormValue[]): Promise<Form.ValidationResult>;
        /**
         * Validates an input form field value against the registration form as defined in the site Dashboard.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-frontend.Form.html#validateInput)
         */
        validateInput(inputName: string, formValues: Form.FormValue[]): Form.ValidationResult;
    }
    /**
     * An object containing RSVP functionality.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-events-frontend.Rsvp.html#)
     */
    interface Rsvp {
        /**
         * Creates an RSVP and adds the new guests to an event's guest list.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-frontend.Rsvp.html#createRsvp)
         */
        createRsvp(eventId: string, formValues: Rsvp.FormValue[]): Promise<Rsvp.RsvpResponse>;
    }
    /**
     * **Deprecated:** A form for creating an RSVP to an event.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-events-frontend.RsvpForm.html#)
     */
    interface RsvpForm {
        /**
         * **Deprecated:** Gets information about the event's RSVP form and status.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-frontend.RsvpForm.html#getRsvpData)
         */
        getRsvpData(): Promise<RsvpForm.RsvpData>;
        /**
         * **Deprecated:** Submits an RSVP form and adds the new guests to the event's guest list.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-frontend.RsvpForm.html#submit)
         */
        submit(formValues: RsvpForm.FormValue[]): Promise<RsvpForm.RsvpResponse>;
        /**
         * **Deprecated:** Validates form fields and values against the registration form as defined in the site Dashboard.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-frontend.RsvpForm.html#validate)
         */
        validate(formValues: RsvpForm.FormValue[]): Promise<RsvpForm.ValidationResult>;
        /**
         * **Deprecated:** Validates an input form field value against the registration form as defined in the site Dashboard.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-frontend.RsvpForm.html#validateInput)
         */
        validateInput(inputName: string, formValues: RsvpForm.FormValue[]): Promise<RsvpForm.ValidationResult>;
    }
    /**
     * An object containing ticketing functionality.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-events-frontend.Tickets.html#)
     */
    interface Tickets {
        /**
         * Performs a checkout on reserved tickets.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-frontend.Tickets.html#checkout)
         */
        checkout(eventId: string, reservationId: string, checkoutInfo: Tickets.CheckoutInfo): Promise<Tickets.CheckoutResponse>;
        /**
         * Reserves tickets for an event.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-frontend.Tickets.html#reserve)
         */
        reserve(eventId: string, tickets: Tickets.TicketSelection[]): Promise<Tickets.ReservationResponse>;
        /**
         * Updates a ticket order.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-frontend.Tickets.html#updateOrder)
         */
        updateOrder(eventId: string, orderNumber: string, updateInfo: Tickets.UpdateInfo): Promise<Tickets.UpdateOrderResponse>;
        /**
         * Verifies a ticket coupon.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-events-frontend.Tickets.html#verifyCoupon)
         */
        verifyCoupon(eventId: string, reservationId: string, coupon: string): Promise<Tickets.VerifyCouponResponse>;
    }
    /**
     * A registration form for an event.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-events-frontend.Form.html#)
     */
    namespace Form {
        /**
         * An object containing information about a label for a complex input field type.
         */
        type AdditionalLabel = {
            /**
             * Additional label name.
             */
            name: string;
            /**
             * Additional label value.
             */
            label: string;
        };
        /**
         * An object representing an error that occurred during validation of a registration form's fields.
         */
        type FieldValidationError = {
            /**
             * Error message.
             */
            message: string;
            /**
             * List of fields that caused the error when the form does not pass validation.
             */
            fields: string[];
        };
        /**
         * An object representing the details needed to create a registration form for an event.
         */
        type FormData = {
            /**
             * Information about the input fields needed to create a registration form.
             */
            formInputs: Form.InputItem[];
            /**
             * Allowed RSVP statuses for an event.
             *  One of:
             *
             *  + `"YES_AND_NO"`: Guests can RSVP for the event with a "Yes" or "No".
             *  + `"YES_ONLY"`: Guests can only RSVP for the event with a "Yes".
             *  + `"WAITING"`: The guest limit has been reached, but there is an open waitlist.
             */
            rsvpStatusOptions: string;
            /**
             * Event registration status.
             *  One of:
             *
             *  + `"OPEN_RSVP"`: Registration is open and guest limit has not been reached.
             *  + `"OPEN_RSVP_WAITLIST"`: Registration is open, guest limit has been reached,
             *    and additional registering guests are added to the waitlist.
             *  + `"OPEN_TICKETS"`: Registration is open for a ticketed event and there are still
             *    tickets available.
             *  + `"OPEN_EXTERNAL"`: Registration is open for an event that uses external registration,
             *     not RSVP or ticketed.
             *  + `"CLOSED"`: Registration is closed because the guest limit has been reached.
             *  + `"CLOSED_MANUALLY"`: Registration was closed manually.
             */
            registrationStatus: string;
            /**
             * Whether the event is a ticketed event.
             */
            isTicketed: boolean;
        };
        /**
         * An object containing information about a form value.
         */
        type FormValue = {
            /**
             * Form field name.
             */
            name: string;
            /**
             * Form field value.
             */
            value: string;
        };
        /**
         * An object containing information about an input field in a registration form.
         */
        type InputItem = {
            /**
             * Unique input identifier.
             */
            _id: string;
            /**
             * Whether the input field's value is an array.
             */
            array: boolean;
            /**
             * Input field display label.
             */
            label: string;
            /**
             * Addition field display labels for complex fields.
             */
            additionalLabels: Form.AdditionalLabel[];
            /**
             * List of value options where applicable.
             */
            options: string[];
            /**
             * Maximum length of the input field's value. A value of `0` indicates no maximum length.
             */
            maxLength: number;
            /**
             * Input field name.
             */
            name: string;
            /**
             * Whether the input field is required.
             */
            required: boolean;
            /**
             * The type of the input field.
             *  One of:
             *
             *  + `"NAME"`
             *  + `"INPUT"`
             *  + `"RADIO"`
             *  + `"CHECKBOX"`
             *  + `"DROPDOWN"`
             *  + `"GUEST_CONTROL"`
             *  + `"ADDRESS_FULL"`
             *  + `"TEXTAREA"`
             *  + `"DATE"`
             */
            controlType: string;
        };
        /**
         * An object representing the result of a validation.
         */
        type ValidationResult = {
            /**
             * Indicates that the registration form field(s) are valid.
             */
            valid: boolean;
        };
        /**
         * An object representing an error that occurred during validation of an RSVP form's values.
         */
        type ValueValidationError = {
            /**
             * Error message.
             */
            message: string;
            /**
             * ID of the input field that failed validation.
             */
            inputId: string;
            /**
             * Error type.
             *  One of:
             *
             *  + `"EMPTY_INPUT"`: A required field is missing its value.
             *  + `"INVALID_INPUT_VALUE"`: The value is not valid for the field type.
             *  + `"INPUT_TOO_LONG"`: The value is too long.
             *  + `"INVALID_OPTION"`: The value does not match one of the defined options for the field.
             *  + `"INVALID_STATUS"`: The status value is not valid.
             *  + `"INVALID_NUMBER_OF_GUESTS"`: The number of guests does not match the number defined for the form.
             */
            errorType: string;
        };
    }
    /**
     * An object containing RSVP functionality.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-events-frontend.Rsvp.html#)
     */
    namespace Rsvp {
        /**
         * An object representing an error that occurred during an RSVP creation.
         */
        type CreationError = {
            /**
             * Error message.
             */
            message: string;
            /**
             * Error type.
             *  One of:
             *
             *  + `"RSVP_CLOSED"`: Event registration is closed.
             *  + `"GUEST_LIMIT_REACHED"`: The maximum number of guests has already been reached.
             *  + `"MEMBER_ALREADY_REGISTERED"`: The current registrant is already registered as a guest.
             *  + `"WAITING_LIST_UNAVAILABLE"`: The maximum number of guests has already been reached and
             *    there is no waitlist.
             *  + `"UNKNOWN_ERROR"`: Unknown error.
             */
            errorType: string;
        };
        /**
         * An object containing information about form values.
         */
        type FormValue = {
            /**
             * Form field name.
             */
            name: string;
            /**
             * Form field value.
             */
            value: string;
        };
        /**
         * An object representing a guest on an event RSVP.
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
         * An object representing an RSVP input value.
         */
        type InputValue = {
            /**
             * Name of the input.
             */
            inputName: string;
            /**
             * Value of the input, when there is just one value.
             */
            value: string;
            /**
             * Value of the input, when there are multiple values.
             */
            values: string[];
        };
        /**
         * An object representing an RSVP form.
         */
        type RsvpForm = {
            /**
             * Values that were entered in the RSVP form.
             */
            inputValues: Rsvp.InputValue[];
        };
        /**
         * An object representing a response to creating an RSVP.
         */
        type RsvpResponse = {
            /**
             * RSVP ID
             */
            id: string;
            /**
             * Whether the guest's personal information has been removed.
             */
            anonymized: boolean;
            /**
             * Contact ID of the guest who created the RSVP.
             */
            contactId: string;
            /**
             * Date when the RSVP was created.
             */
            createdDate: Date;
            /**
             * Email address to the guest who created the RSVP.
             */
            email: string;
            /**
             * ID of the event the RSVP is for.
             */
            eventId: string;
            /**
             * First name of the guest who created the RSVP.
             */
            firstName: string;
            /**
             * Last name of the guest who created the RSVP.
             */
            lastName: string;
            /**
             * All of the guests included in the RSVP.
             */
            guests: RsvpForm.Guest[];
            /**
             * A representation of the RSVP form that was created.
             */
            rsvpForm: RsvpForm.RsvpForm;
            /**
             * Member ID of the guest who created the RSVP form if the guest is a site member.
             */
            memberId: string;
            /**
             * Date when RSVP was last modified.
             */
            updatedDate: Date;
            /**
             * RSVP status.
             */
            status: string;
            /**
             * Total number of guests included in the RSVP.
             */
            totalGuests: number;
        };
    }
    /**
     * **Deprecated:** A form for creating an RSVP to an event.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-events-frontend.RsvpForm.html#)
     */
    namespace RsvpForm {
        /**
         * **Deprecated:** An object containing information about a label for a complex input field type.
         */
        type AdditionalLabel = {
            /**
             * Additional label name.
             */
            name: string;
            /**
             * Additional label value.
             */
            label: string;
        };
        /**
         * **Deprecated:** An object representing an error that occurred during validation of an RSVP form's fields.
         */
        type FieldValidationError = {
            /**
             * Error message.
             */
            message: string;
            /**
             * List of fields that caused the error when the form does not pass validation.
             */
            fields: string[];
        };
        /**
         * **Deprecated:** An object containing information about form value to submit.
         */
        type FormValue = {
            /**
             * Form field name.
             */
            name: string;
            /**
             * Form field value.
             */
            value: string;
        };
        /**
         * **Deprecated:** An object representing a guest on an event RSVP.
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
         * **Deprecated:** An object representing a submitted RSVP form input value.
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
             * Value of the form input, when there are multiple values.
             */
            values: string[];
        };
        /**
         * **Deprecated:** An object representing the details needed to create an RSVP form for an event.
         */
        type RsvpData = {
            /**
             * Information about the input fields needed to create an RSVP form.
             */
            rsvpFormInputs: RsvpForm.RsvpInputItem[];
            /**
             * Allowed RSVP statuses for an event.
             *  One of:
             *
             *  + `"YES_AND_NO"`: Guests can RSVP for the event with a "Yes" or "No".
             *  + `"YES_ONLY"`: Guests can only RSVP for the event with a "Yes".
             *  + `"WAITING"`: The guest limit has been reached, but there is an open waitlist.
             */
            rsvpStatusOptions: string;
            /**
             * Event registration status.
             *  One of:
             *
             *  + `"OPEN_RSVP"`: Registration is open and guest limit has not been reached.
             *  + `"OPEN_RSVP_WAITLIST"`: Registration is open, guest limit has been reached,
             *    and additional registering guests are added to the waitlist.
             *  + `"CLOSED"`: Registration is closed because the guest limit has been reached.
             *  + `"CLOSED_MANUALLY"`: Registration was closed manually.
             */
            registrationStatus: string;
        };
        /**
         * **Deprecated:** An object representing a submitted RSVP form.
         */
        type RsvpForm = {
            /**
             * Values that were entered in the RSVP form.
             */
            inputValues: RsvpForm.InputValue[];
        };
        /**
         * **Deprecated:** An object containing information about an input field in an RSVP form.
         */
        type RsvpInputItem = {
            /**
             * Unique input identifier.
             */
            _id: string;
            /**
             * Whether the input field's value is an array.
             */
            array: boolean;
            /**
             * Input field display label.
             */
            label: string;
            /**
             * Addition field display labels for complex fields.
             */
            additionalLabels: RsvpForm.AdditionalLabel[];
            /**
             * List of value options where applicable.
             */
            options: string[];
            /**
             * Maximum length of the input field's value. A value of `0` indicates no maximum length.
             */
            maxLength: number;
            /**
             * Input field name.
             */
            name: string;
            /**
             * Whether the input field is required.
             */
            required: boolean;
            /**
             * The type of the input field.
             *  One of:
             *
             *  + `"NAME"`
             *  + `"INPUT"`
             *  + `"RADIO"`
             *  + `"CHECKBOX"`
             *  + `"DROPDOWN"`
             *  + `"GUEST_CONTROL"`
             *  + `"ADDRESS_FULL"`
             *  + `"TEXTAREA"`
             *  + `"DATE"`
             */
            controlType: string;
        };
        /**
         * **Deprecated:** An object representing a response to submitting an RSVP.
         */
        type RsvpResponse = {
            /**
             * RSVP ID
             */
            id: string;
            /**
             * Indicates whether the guest's personal information has been deleted or not.
             */
            anonymized: boolean;
            /**
             * Contact ID of the guest who submitted the RSVP form.
             */
            contactId: string;
            /**
             * Date when the RSVP was submitted.
             */
            createdDate: Date;
            /**
             * Email address to the guest who submitted the RSVP form.
             */
            email: string;
            /**
             * ID of the event the RSVP is for.
             */
            eventId: string;
            /**
             * First name of the guest who submitted the RSVP form.
             */
            firstName: string;
            /**
             * Last name of the guest who submitted the RSVP form.
             */
            lastName: string;
            /**
             * All of the guests included in the RSVP.
             */
            guests: RsvpForm.Guest[];
            /**
             * A representation of the RSVP form that was submitted.
             */
            rsvpForm: RsvpForm.RsvpForm;
            /**
             * Member ID of the guest who submitted the RSVP form if the guest is a site member.
             */
            memberId: string;
            /**
             * Date when RSVP was last modified.
             */
            updatedDate: Date;
            /**
             * RSVP status.
             */
            status: string;
            /**
             * Total number of guests included in the RSVP.
             */
            totalGuests: number;
        };
        /**
         * **Deprecated:** An object representing an error that occurred during an RSVP form submission.
         */
        type SubmissionError = {
            /**
             * Error message.
             */
            message: string;
            /**
             * Error type.
             *  One of:
             *
             *  + `"RSVP_CLOSED"`: Event registration is closed.
             *  + `"GUEST_LIMIT_REACHED"`: The maximum number of guests has already been reached.
             *  + `"MEMBER_ALREADY_REGISTERED"`: The current registrant is already registered as a guest.
             *  + `"WAITING_LIST_UNAVAILABLE"`: The maximum number of guests has already been reached and
             *    there is no waitlist.
             *  + `"UNKNOWN_ERROR"`: Unknown error.
             */
            errorType: string;
        };
        /**
         * **Deprecated:** An object representing the result of a form validation.
         */
        type ValidationResult = {
            /**
             * Indicates that the RSVP form fields are valid.
             */
            valid: boolean;
        };
        /**
         * **Deprecated:** An object representing an error that occurred during validation of an RSVP form's values.
         */
        type ValueValidationError = {
            /**
             * Error message.
             */
            message: string;
            /**
             * ID of the input field that failed validation.
             */
            inputId: string;
            /**
             * Error type.
             *  One of:
             *
             *  + `"EMPTY_INPUT"`: A required field is missing its value.
             *  + `"INVALID_INPUT_VALUE"`: The value is not valid for the field type.
             *  + `"INPUT_TOO_LONG"`: The value is too long.
             *  + `"INVALID_OPTION"`: The value does not match one of the defined options for the field.
             *  + `"INVALID_STATUS"`: The status value is not valid.
             *  + `"INVALID_NUMBER_OF_GUESTS"`: The number of guests does not match the number defined for the form.
             */
            errorType: string;
        };
    }
    /**
     * An object containing ticketing functionality.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-events-frontend.Tickets.html#)
     */
    namespace Tickets {
        /**
         * An object containing information about a checkout.
         */
        type CheckoutInfo = {
            /**
             * Field names and values for a registration form.
             */
            formValues: Form.FormValue[];
            /**
             * Coupon to be used during checkout.
             */
            coupon?: string;
        };
        /**
         * An object containing information about a checkout performed using the [`checkout()`](#reserve) function.
         */
        type CheckoutResponse = {
            /**
             * Ticket reservations.
             */
            reservations: Tickets.Reservation[];
            /**
             * Ticket order.
             */
            order: Tickets.Order;
            /**
             * Time the reservations expire.
             */
            expirationTime: Date;
        };
        /**
         * An object representing a discount.
         */
        type Discount = {
            /**
             * Discount amount.
             */
            amount: Tickets.Money;
            /**
             * Amount after discount.
             */
            afterDiscount: Tickets.Money;
            /**
             * Discount code.
             */
            code: string;
            /**
             * Discount name.
             */
            name: string;
            /**
             * ID of the coupon used in the discount.
             */
            couponId: string;
        };
        /**
         * An object containing information about a discount error.
         */
        type DiscountError = {
            /**
             * Error code.
             *
             * One of:
             *
             * + `"ERROR_COUPON_DOES_NOT_EXIST"`
             * + `"ERROR_COUPON_IS_DISABLED"`
             * + `"ERROR_COUPON_USAGE_EXCEEDED"`
             * + `"ERROR_COUPON_HAS_EXPIRED"`
             */
            code: string;
        };
        /**
         * An object containing information about discount errors.
         */
        type DiscountErrors = {
            /**
             * Invoice the coupon is used in.
             */
            error: Tickets.DiscountError[];
        };
        /**
         * An object representing a fee.
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
            amount: Tickets.Money;
        };
        /**
         * An object representing a ticket order invoice.
         */
        type Invoice = {
            /**
             * Invoice items.
             */
            items: Tickets.InvoiceItem[];
            /**
             * Invoice total.
             */
            total: Tickets.Money;
            /**
             * Invoice applied discount.
             */
            discount?: Tickets.Discount;
            /**
             * Invoice tax.
             */
            tax?: Tickets.Tax;
            /**
             * Invoice subtotal amount before discount, tax, and fees.
             */
            subTotal: Tickets.Money;
            /**
             * Invoice total amount after discount, tax, and fees.
             *  Grand total is calculated in the following manner:
             *
             *  1. Total price of all items in the cart.
             *  2. Discount is subtracted from the cart (if applicable).
             *  3. Tax is added (if applicable).
             *  4. Wix service fee is added.
             */
            grandTotal: Tickets.Money;
            /**
             * Invoice applied fee charges.
             */
            fees: Tickets.Fee[];
            /**
             * Total revenue with taxes, excluding fees. Payment provider fees are not deducted.
             */
            revenue: Tickets.Money;
        };
        /**
         * An object representing a ticket order invoice item.
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
            price: Tickets.Money;
            /**
             * Invoice item total.
             */
            total: Tickets.Money;
            /**
             * Invoice item applied discount.
             */
            discount?: Tickets.Discount;
            /**
             * Invoice item tax.
             */
            tax?: Tickets.Tax;
            /**
             * Invoice item applied fee charges.
             */
            fees: Tickets.Fee[];
        };
        /**
         * An object representing a monetary amount.
         */
        type Money = {
            /**
             * Decimal amount.
             */
            amount: string;
            /**
             * ISO 4217 currency format. For example, "USD".
             */
            currency: string;
        };
        /**
         * An object containing information about a ticket order.
         */
        type Order = {
            /**
             * Order number.
             */
            orderNumber: string;
            /**
             * ID of the reservation used in the order.
             */
            reservationId: string;
            /**
             * ID of the checkout payment.
             */
            paymentId: string;
            /**
             * ID of the event the tickets are for.
             */
            eventId: string;
            /**
             * ID of the contact associated with the order.
             */
            contactId: string;
            /**
             * ID of the member associated with the order.
             */
            memberId: string;
            /**
             * Time the order was created.
             */
            createdDate: string;
            /**
             * First name associated with the order.
             */
            firstName: string;
            /**
             * Last name associated with the order.
             */
            lastName: string;
            /**
             * Full name associated with the order.
             */
            fullName: string;
            /**
             * Email address associated with the order.
             */
            email: string;
            /**
             * Form values used in the order.
             */
            checkoutForm: Form.FormValue[];
            /**
             * Whether the order is confirmed.
             */
            confirmed: boolean;
            /**
             * Status of the order.
             *
             * One of:
             *
             * + `"INITIATED"`
             * + `"FREE"`
             * + `"PENDING"`
             * + `"PAID"`
             * + `"OFFLINE_PENDING"`
             */
            status: string;
            /**
             * Payment method.
             */
            paymentMethod: string;
            /**
             * Number of tickets in the order.
             */
            ticketQuantity: number;
            /**
             * Order price.
             */
            price: Tickets.Money;
            /**
             * URL of the tickets PDF.
             */
            ticketsPdf: string;
            /**
             * Whether the order is archived.
             */
            archived: boolean;
            /**
             * Indicates whether personal information has been removed.
             */
            anonymized: boolean;
            /**
             * Order invoice.
             */
            invoice: Tickets.Invoice;
            /**
             * Whether all ticket holders in the order have checked in.
             */
            fullyCheckedIn: boolean;
            /**
             * Transaction ID.
             */
            transactionId: string;
        };
        /**
         * An object representing ticket reservations.
         */
        type Reservation = {
            /**
             * Ticket quantity.
             */
            quantity: number;
            /**
             * Reserved ticket.
             */
            ticket: Tickets.Ticket;
        };
        /**
         * An object containing information about a reservation created using the [`reserve()`](#reserve) function.
         */
        type ReservationResponse = {
            /**
             * Reservation ID.
             */
            id: string;
            /**
             * Ticket reservations.
             */
            reservations: Tickets.Reservation[];
            /**
             * Ticket reservations invoice.
             */
            invoice: Tickets.Invoice;
            /**
             * Time the reservations expire.
             */
            expirationTime: Date;
        };
        /**
         * An object representing a tax.
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
            taxable: Tickets.Money;
            /**
             * Total tax amount.
             */
            amount: Tickets.Money;
        };
        /**
         * An object representing a ticket.
         */
        type Ticket = {
            /**
             * Ticket ID.
             */
            _id: number;
            /**
             * Ticket price.
             */
            price: Tickets.Money;
            /**
             * Whether the ticket is free.
             */
            free: boolean;
            /**
             * Ticket name.
             */
            name: string;
            /**
             * Ticket description.
             */
            description: string;
            /**
             * Number of tickets that can be checked out together.
             *  A value of `0` means there is no limit.
             */
            limitPerCheckout: number;
            /**
             * Order index.
             */
            orderIndex: number;
            /**
             * Ticket policy rules.
             */
            policy: string;
            /**
             * ID of the event the ticket is for.
             */
            eventId: string;
        };
        /**
         * An object representing an event ticket.
         */
        type TicketSelection = {
            /**
             * ID of the ticket.
             */
            ticketId: string;
            /**
             * Ticket quantity.
             */
            quantity: number;
        };
        /**
         * An object containing information about an order update.
         */
        type UpdateInfo = {
            /**
             * Field names and values for a registration form.
             */
            formValues: Form.FormValue[];
        };
        /**
         * An object containing information about an order updated using the [`updateOrder()`](#updateOrder) function.
         */
        type UpdateOrderResponse = {
            /**
             * Updated ticket order.
             */
            order: Tickets.Order;
        };
        /**
         * An object containing information about a coupon being verified using the [`verifyCoupon()`](#verifyCoupon) function.
         */
        type VerifyCouponResponse = {
            /**
             * Invoice the coupon is used in.
             */
            invoice?: Tickets.Invoice;
            /**
             * Discount errors.
             */
            discountErrors?: Tickets.DiscountErrors;
        };
    }
}
