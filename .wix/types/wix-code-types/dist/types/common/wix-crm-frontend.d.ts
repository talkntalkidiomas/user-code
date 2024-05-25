/**
 * The wix-crm-frontend module contains functionality for working with
 *  [your site's contacts](https://support.wix.com/en/article/about-your-contact-list)
 *  from client-side code.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-frontend.html#)
 */
declare module 'wix-crm-frontend' {
    /**
     * The Contacts API is used to manage a site's contacts.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-frontend.html#contacts)
     */
    const contacts: Contacts;
    /**
     * The Triggered Emails API is used to send triggered emails to your site's contacts and members.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-frontend.html#triggeredEmails)
     */
    const triggeredEmails: TriggeredEmails;
    /**
     * An object that contains information about a site contact.
     */
    type ContactInfo = {
        /**
         * Contact's first name.
         */
        firstName?: string;
        /**
         * Contact's last name.
         */
        lastName?: string;
        /**
         * Contact's image source.
         */
        picture?: string;
        /**
         * List of contact's email addresses.
         *  When creating a contact, if no phone number is
         *  provided, at least one email address must be provided.
         */
        emails?: string[];
        /**
         * Email address the contact who is also
         *  a member uses to log into the system.
         */
        loginEmail?: string;
        /**
         * List of contact's phone numbers.
         *  When creating a contact, if no email is
         *  provided, at least one phone number must be provided.
         */
        phones?: string[];
        /**
         * List of contact's labels. [Labels](https://support.wix.com/en/article/creating-contact-labels)
         *  are used to organize contacts. When setting the `labels` property, you can
         *  only list labels that already exist in your site's [Contacts List](https://support.wix.com/en/article/accessing-your-contact-list).
         */
        labels?: string[];
        /**
         * Any
         *  number of custom fields. [Customs fields](https://support.wix.com/en/article/adding-custom-fields-to-contacts)
         *  are used to store additional information about your site's contacts. When
         *  setting a custom field, use key:value pairs where the key matches the names
         *  defined in your site's [Contacts List](https://support.wix.com/en/article/accessing-your-contact-list).
         *  You can only set values for custom fields that already exist in the Contacts
         *  application.
         */
        customFields?: string | number | Date;
    };
    /**
     * The Contacts API is used to manage a site's contacts.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-frontend.Contacts.html#)
     */
    interface Contacts {
        /**
         * Appends an existing contact or creates a contact if it doesn't exist.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-frontend.Contacts.html#appendOrCreateContact)
         */
        appendOrCreateContact(contactInfo: Contacts.ContactInfo): Promise<Contacts.ContactIdentification>;
    }
    /**
     * The Triggered Emails API is used to send triggered emails to your site's contacts and members.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-frontend.TriggeredEmails.html#)
     */
    interface TriggeredEmails {
        /**
         * Sends a triggered email to the current contact, unless that contact is marked as unsubscribed.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-frontend.TriggeredEmails.html#emailContact)
         */
        emailContact(emailId: string, contactId: string, options?: TriggeredEmails.TriggeredEmailOptions): Promise<void>;
        /**
         * Sends a Triggered Email to the currently logged-in site member.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-frontend.TriggeredEmails.html#emailMember)
         */
        emailMember(emailId: string, memberId: string, options?: TriggeredEmails.TriggeredEmailOptions): Promise<void>;
    }
    /**
     * The Contacts API is used to manage a site's contacts.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-frontend.Contacts.html#)
     */
    namespace Contacts {
        type Address = {
            /**
             * Street address ID.
             */
            _id: string;
            /**
             * Address type.
             * `"UNTAGGED"` is shown as "Other" in the Contact List.
             *
             * One of:
             *
             * - `"UNTAGGED"`
             * - `"HOME"`
             * - `"WORK"`
             * - `"BILLING"`
             * - `"SHIPPING"`
             */
            tag: string;
            /**
             * Street address.
             */
            address: Contacts.AddressDetails;
        };
        /**
         * Street address.
         */
        type AddressDetails = {
            /**
             * Main address line, usually street and number, as free text.
             */
            addressLine1?: string;
            /**
             * Street address object, with number and name in separate fields.
             */
            streetAddress?: Contacts.StreetAddressInfo;
            /**
             * Human-readable address string.
             *  If not provided, the value is generated from the available address data.
             */
            formatted?: string;
            /**
             * Free text providing more detailed address information,
             *  such as apartment, suite, or floor.
             */
            addressLine2?: string;
            /**
             * Coordinates of the physical address.
             */
            location?: Contacts.AddressLocation;
            /**
             * City name.
             */
            city?: string;
            /**
             * Code for a subdivision (such as state, prefecture, or province) in an
             *  [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) format.
             */
            subdivision?: string;
            /**
             * 2-letter country code in an
             *  [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
             */
            country?: string;
            /**
             * Postal or zip code.
             */
            postalCode?: string;
        };
        type AddressInfo = {
            /**
             * Address type.
             * `"UNTAGGED"` is shown as "Other" in the Contact List.
             *
             * One of:
             *
             * - `"UNTAGGED"`
             * - `"HOME"`
             * - `"WORK"`
             * - `"BILLING"`
             * - `"SHIPPING"`
             */
            tag: string;
            /**
             * Street address.
             */
            address: Contacts.AddressDetails;
        };
        /**
         * Coordinates of the physical address.
         */
        type AddressLocation = {
            /**
             * Address's latitude.
             */
            latitude?: number;
            /**
             * Address's longitude.
             */
            longitude?: number;
        };
        type ContactIdentification = {
            /**
             * ID of the contact that was found or created.
             */
            contactId: string;
            /**
             * Identity type of the returned contact.
             *
             * One of:
             *
             * - `"CONTACT"`: The returned contact ID belongs to a new or existing contact.
             * - `"MEMBER"`: The returned contact ID belongs to the currently logged-in site member.
             * - `"NOT_AUTHENTICATED_MEMBER"`: The returned contact ID belongs to a site member who is not currently logged in.
             */
            identityType: string;
        };
        /**
         * Contact's information.
         */
        type ContactInfo = {
            /**
             * Contact's first and last name.
             */
            name?: Contacts.Name;
            /**
             * Contact's company name.
             */
            company?: string;
            /**
             * Contact's job title.
             *  Corresponds to the **Position** field in the Dashboard.
             */
            jobTitle?: string;
            /**
             * Contact's locale, formatted as an
             *  [IETF BCP 47 language tag](https://tools.ietf.org/html/rfc5646).
             *  Typically, this is a lowercase 2-letter language code,
             *  followed by a hyphen,
             *  followed by an uppercase 2-letter country code.
             *
             *  For example, German from Germany is formatted as `de-DE`,
             *  and U.S. English is formatted as `en-US`.
             */
            locale?: string;
            /**
             * Contact's birthdate, formatted as `"YYYY-MM-DD"`.
             *
             *  Example: `"2020-03-15"` for March 15, 2020.
             */
            birthdate?: string;
            /**
             * **Deprecated.** Use `profilePicture` instead.
             */
            picture?: Contacts.Picture;
            /**
             * Contact's profile picture URL.
             */
            profilePicture?: string;
            /**
             * List of up to 50 email addresses.
             */
            emails?: Contacts.EmailInfo[];
            /**
             * List of up to 50 phone numbers.
             */
            phones?: Contacts.PhoneInfo[];
            /**
             * List of up to 50 addresses.
             */
            addresses?: Contacts.AddressInfo[];
            /**
             * List of contact label keys.
             * [Contact labels](https://support.wix.com/en/article/adding-labels-to-contacts-in-your-contact-list)
             * help categorize contacts.
             *
             * Label keys must exist to be added to the contact.
             * Contact labels can be created or retrieved with
             * [`findOrCreateLabel()`](wix-crm-backend/contacts/findorcreatelabel)
             * or
             * [`queryLabels()`](wix-crm-backend/contacts/queryLabels).
             */
            labelKeys?: string[];
            /**
             * Set of key-value pairs.
             *
             * Contact's
             * [extended fields](wix-crm-backend/contacts/introduction#about-extended-fields),
             * which allow you to store additional information about your contacts.
             *
             * To view or create extended fields, use
             * [`findOrCreateExtendedField()`](wix-crm-backend/contacts/findorcreateextendedfield),
             * [`getExtendedField()`](wix-crm-backend/contacts/getextendedfield), or
             * [`queryExtendedFields()`](wix-crm-backend/contacts/queryextendedfields).
             */
            extendedFields?: any;
        };
        /**
         * Contact's profile picture.
         */
        type ContactPicture = {
            /**
             * Image source. Can be either a Media Manager URL or external URL.
             */
            image: string;
            /**
             * Indicates whether the image is retrieved from Wix Media
             * or an external provider.
             *
             * One of:
             *
             * - `"EXTERNAL"`: The image is retrieved from an external provider.
             * - `"WIX_MEDIA"`: The image is retrieved from Wix Media.
             */
            imageProvider: string;
        };
        type Email = {
            /**
             * Email ID.
             */
            _id: string;
            /**
             * Email type.
             *
             * `"UNTAGGED"` is shown as "Other" in the Contact List.
             *
             * One of:
             *
             * - `"UNTAGGED"`
             * - `"MAIN"`
             * - `"HOME"`
             * - `"WORK"`
             */
            tag: string;
            /**
             * Email address.
             */
            email: string;
            /**
             * Indicates whether this is the contact's primary email address.
             *  When changing `primary` to `true` for an email,
             *  the contact's other emails become `false`.
             */
            primary: boolean;
        };
        type EmailInfo = {
            /**
             * Email type.
             *
             * `"UNTAGGED"` is shown as "Other" in the Contact List.
             *
             * One of:
             *
             * - `"UNTAGGED"`
             * - `"MAIN"`
             * - `"HOME"`
             * - `"WORK"`
             */
            tag?: string;
            /**
             * Email address.
             */
            email?: string;
            /**
             * Indicates whether this is the contact's primary email address.
             *  When changing `primary` to `true` for an email,
             *  the contact's other emails become `false`.
             */
            primary?: boolean;
        };
        /**
         * Extended field that was found or created.
         */
        type ExtendedField = {
            /**
             * Extended field ID.
             *
             * When accessing contact data,
             * extended field data is available at `extendedFields[key]`.
             * For example, if the key is "custom.notes",
             * the value can be accessed at `extendedFields["custom.notes"]`.
             *
             * `key` is generated when the extended field is created
             * and cannot be modified, even if `displayName` changes.
             */
            key: string;
            /**
             * Extended field display name shown in the Contact List.
             */
            displayName: string;
            /**
             * Type of data the field holds.
             *
             * One of:
             *
             * - `"TEXT"`: Accepts strings.
             * - `"URL"`: Accepts web addresses. Prepends `https://` if no protocol is included.
             * - `"DATE"`: Accepts dates formatted as `"YYYY-MM-DD"`.
             * - `"NUMBER"`: Accepts floats.
             */
            dataType: string;
            /**
             * Indicates whether the extended field is a
             * [system field or custom field](wix-crm-backend/contacts/introduction#about-extended-fields).
             *
             * One of:
             *
             * - `"SYSTEM"`: The field is a system field managed by Wix. System fields cannot be modified by 3rd-party apps or site contributors.
             * - `"USER_DEFINED"`: The field is a custom field and can be modified by 3rd-party apps or site contributors.
             */
            fieldType: string;
            /**
             * Date and time the field was created.
             */
            _createdDate: Date;
            /**
             * Date and time the field was last updated.
             */
            _updatedDate: Date;
            /**
             * Extended field [namespace](wix-crm-backend/contacts/introduction#the-namespace-and-key-properties-in-labels-and-extended-fields).
             *
             * Extended fields created by site contributors or 3rd-party apps
             * are automatically assigned to the `custom` namespace.
             */
            namespace: string;
            /**
             * Field description, if the field is a system field.
             */
            description: string;
        };
        /**
         * Contact's details.
         */
        type Info = {
            /**
             * Contact's first and last name.
             */
            name?: Contacts.Name;
            /**
             * Contact's company name.
             */
            company?: string;
            /**
             * Contact's job title.
             *  Corresponds to the **Position** field in the Dashboard.
             */
            jobTitle?: string;
            /**
             * Contact's locale, formatted as an
             *  [IETF BCP 47 language tag](https://tools.ietf.org/html/rfc5646).
             *  Typically, this is a lowercase 2-letter language code,
             *  followed by a hyphen,
             *  followed by an uppercase 2-letter country code.
             *
             *  For example, German from Germany is formatted as `de-DE`,
             *  and U.S. English is formatted as `en-US`.
             */
            locale?: string;
            /**
             * Contact's birthdate, formatted as `"YYYY-MM-DD"`.
             *
             *  Example: `"2020-03-15"` for March 15, 2020.
             */
            birthdate?: string;
            /**
             * **Deprecated.** Use `profilePicture` instead.
             */
            picture: Contacts.Picture;
            /**
             * Contact's profile picture URL.
             */
            profilePicture?: string;
            /**
             * List of up to 50 email addresses.
             */
            emails?: Contacts.Email[];
            /**
             * List of up to 50 phone numbers.
             */
            phones?: Contacts.Phone[];
            /**
             * List of up to 50 addresses.
             */
            addresses?: Contacts.Address[];
            /**
             * List of contact label keys.
             * [Contact labels](https://support.wix.com/en/article/adding-labels-to-contacts-in-your-contact-list)
             * help categorize contacts.
             *
             * Label keys must exist to be added to the contact.
             * Contact labels can be created or retrieved with
             * [`findOrCreateLabel()`](wix-crm-backend/contacts/findorcreatelabel)
             * or
             * [`queryLabels()`](wix-crm-backend/contacts/queryLabels).
             */
            labelKeys?: string[];
            /**
             * Set of key-value pairs.
             *
             * Contact's
             * [extended fields](wix-crm-backend/contacts/introduction#about-extended-fields),
             * which allow you to store additional information about your contacts.
             *
             * To view or create extended fields, use
             * [`findOrCreateExtendedField()`](wix-crm-backend/contacts/findorcreateextendedfield),
             * [`getExtendedField()`](wix-crm-backend/contacts/getextendedfield), or
             * [`queryExtendedFields()`](wix-crm-backend/contacts/queryextendedfields).
             */
            extendedFields: any;
        };
        /**
         * Label that was found or created.
         */
        type Label = {
            /**
             * Label key.
             *
             * `key` is generated when the label is created
             * and cannot be modified, even if `displayName` changes.
             */
            key: string;
            /**
             * Label display name shown in the Dashboard.
             */
            displayName: string;
            /**
             * Label type.
             *
             * One of:
             *
             * - `"SYSTEM"`: The label is a predefined system label for the Contact List.
             * - `"USER_DEFINED"`: The label was created by a site contributor or app.
             * - `"WIX_APP_DEFINED"`: The label was created by a Wix app.
             */
            labelType: string;
            /**
             * Date and time the label was created.
             */
            _createdDate: Date;
            /**
             * Date and time the label was last updated.
             */
            _updatedDate: Date;
            /**
             * Label [namespace](wix-crm-backend/contacts/introduction#the-namespace-and-key-properties-in-labels-and-extended-fields).
             *
             * Labels created by site contributors or 3rd-party apps
             * are automatically assigned to the `custom` namespace.
             */
            namespace: string;
        };
        /**
         * Details about the contact's last action in the site.
         */
        type LastActivity = {
            /**
             * Date and time of the last action.
             */
            activityDate: Date;
            /**
             * Contact's last action in the site.
             *
             * Some possible values:
             * `"GENERAL"`, `"CONTACT_CREATED"`, `"MEMBER_LOGIN"`, `"MEMBER_REGISTER"`,
             * `"MEMBER_STATUS_CHANGED"`, `"FORM_SUBMITTED"`, `"INBOX_FORM_SUBMITTED"`,
             * `"INBOX_PAYMENT_REQUEST_PAID"`, `"INBOX_MESSAGE_TO_CUSTOMER"`,
             * `"INBOX_MESSAGE_FROM_CUSTOMER"`, `"NEWSLETTER_SUBSCRIPTION_FORM_SUBMITTED"`,
             * `"NEWSLETTER_SUBSCRIPTION_UNSUBSCRIBE"`, `"ECOM_PURCHASE"`,
             * `"ECOM_CART_ABANDON"`, `"ECOM_CHECKOUT_BUYER"`, `"BOOKINGS_APPOINTMENT"`,
             * `"HOTELS_RESERVATION"`, `"HOTELS_PURCHASE"`, `"HOTELS_CONFIRMATION"`,
             * `"HOTELS_CANCEL"`, `"VIDEO_PURCHASE"`, `"VIDEO_RENT"`,
             * `"CASHIER_BUTTON_PURCHASE"`, `"ARENA_NEW_LEAD"`, `"EVENTS_RSVP"`,
             * `"INVOICE_PAY"`, `"INVOICE_OVERDUE"`, `"PRICE_QUOTE_ACCEPT"`,
             * `"PRICE_QUOTE_EXPIRE"`, `"RESTAURANTS_ORDER"`, `"RESTAURANTS_RESERVATION"`,
             * `"SHOUTOUT_OPEN"`, `"SHOUTOUT_CLICK"`, `"CONTACT_MERGED"`.
             */
            activityType: string;
        };
        /**
         * Contact's first and last name.
         */
        type Name = {
            /**
             * Contact's first name.
             */
            first?: string;
            /**
             * Contact's last name.
             */
            last?: string;
        };
        type Phone = {
            /**
             * Phone ID.
             */
            _id: string;
            /**
             * Phone type.
             *
             * `"UNTAGGED"` is shown as "Other" in the Contact List.
             *
             * One of:
             *
             * - `"UNTAGGED"`
             * - `"MAIN"`
             * - `"HOME"`
             * - `"MOBILE"`
             * - `"WORK"`
             * - `"FAX"`
             */
            tag: string;
            /**
             * [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.
             */
            countryCode?: string;
            /**
             * Phone number.
             */
            phone: string;
            /**
             * [ITU E.164-formatted](https://www.itu.int/rec/T-REC-E.164/)
             *  phone number.
             *  Automatically generated using `phone` and `countryCode`,
             *  as long as both of those values are valid.
             */
            e164Phone?: string;
            /**
             * Whether this is the contact's primary phone number.
             *  When changing `primary` to `true` for a phone,
             *  the contact's other phones become `false`.
             */
            primary: boolean;
        };
        type PhoneInfo = {
            /**
             * Phone type.
             *
             * `"UNTAGGED"` is shown as "Other" in the Contact List.
             *
             * One of:
             *
             * - `"UNTAGGED"`
             * - `"MAIN"`
             * - `"HOME"`
             * - `"MOBILE"`
             * - `"WORK"`
             * - `"FAX"`
             */
            tag?: string;
            /**
             * [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.
             */
            countryCode?: string;
            /**
             * Phone number.
             */
            phone?: string;
            /**
             * Whether this is the contact's primary phone number.
             *  When changing `primary` to `true` for a phone,
             *  the contact's other phones become `false`.
             */
            primary?: boolean;
        };
        /**
         * todo
         */
        type Picture = {
            /**
             * **Deprecated.** Use `profilePicture` instead.
             */
            image?: string;
            /**
             * **Deprecated.**
             */
            imageProvider?: string;
        };
        /**
         * Contact's primary phone and email.
         */
        type PrimaryInfo = {
            /**
             * Primary email address.
             *
             * This property reflects the email address in `contactInfo.emails`
             * where `primary` is `true`.
             */
            email?: string;
            /**
             * Primary phone number.
             *
             * This property reflects the phone number in `contactInfo.phones`
             * where `primary` is `true`.
             */
            phone?: string;
        };
        /**
         * Details about the contact's source.
         */
        type Source = {
            /**
             * Source type.
             *
             * Some possible values:
             * `"OTHER"`, `"ADMIN"`, `"WIX_APP"`, `"IMPORT"`, `"THIRD_PARTY"`,
             * `"WIX_BOOKINGS"`, `"WIX_CHAT"`, `"WIX_EMAIL_MARKETING"`, `"WIX_EVENTS"`,
             * `"WIX_FORMS"`, `"WIX_GROUPS"`, `"WIX_HOTELS"`, `"WIX_MARKET_PLACE"`,
             * `"WIX_MUSIC"`, `"WIX_RESTAURANTS"`, `"WIX_SITE_MEMBERS"`, `"WIX_STORES"`.
             */
            sourceType: string;
            /**
             * App ID, if the contact was created by an app.
             */
            appId: string;
        };
        /**
         * Street address object, with number and name in separate fields.
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
         * Street address object, with number and name in separate fields.
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
    }
    /**
     * The Triggered Emails API is used to send triggered emails to your site's contacts and members.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-crm-frontend.TriggeredEmails.html#)
     */
    namespace TriggeredEmails {
        type TriggeredEmailOptions = {
            /**
             * An object with `key:value` pairs. Each
             *  `key` is a variable in the email template created in Triggered Emails, and its
             *  corresponding `value` is the value to insert into the template in place of the
             *  variable. The values must be strings.
             *
             * Example: `{ firstName: 'John', lastName: 'Doe' }`
             */
            variables: any;
        };
    }
}
