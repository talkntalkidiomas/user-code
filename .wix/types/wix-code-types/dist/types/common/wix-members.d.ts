/**
 * The wix-members module contains functionality
 * for working with your site members from frontend page code.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-members.html#)
 */
declare module 'wix-members' {
    /**
     * The Authentication API contains functionality for authenticating members from frontend code.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-members.html#authentication)
     */
    const authentication: Authentication;
    /**
     * The CurrentMember API contains functionality for viewing and managing site members from frontend code.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-members.html#currentMember)
     */
    const currentMember: CurrentMember;
    /**
     * The Authentication API contains functionality for authenticating members from frontend code.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-members.Authentication.html#)
     */
    interface Authentication {
        /**
         * Logs the current member into the site using the given session token.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members.Authentication.html#applySessionToken)
         */
        applySessionToken(sessionToken: string): Promise<void>;
        /**
         * Indicates whether the site visitor is a logged-in member.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members.Authentication.html#loggedIn)
         */
        loggedIn(): boolean;
        /**
         * Logs a registered member in with an email and password.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members.Authentication.html#login)
         */
        login(email: string, password: string): Promise<void>;
        /**
         * Logs the current member out of the site.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members.Authentication.html#logout)
         */
        logout(): void;
        /**
         * Sets the function that runs when a member logs in.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members.Authentication.html#onLogin)
         */
        onLogin(handler: Authentication.LoginHandler): void;
        /**
         * Sets the function that runs when a member logs out.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members.Authentication.html#onLogout)
         */
        onLogout(handler: Authentication.LogoutHandler): void;
        /**
         * Prompts the current site visitor with a password reset modal.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members.Authentication.html#promptForgotPassword)
         */
        promptForgotPassword(): Promise<void>;
        /**
         * Prompts the current visitor to log in as a site member.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members.Authentication.html#promptLogin)
         */
        promptLogin(options?: Authentication.LoginOptions): Promise<void>;
        /**
         * Registers a new site member.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members.Authentication.html#register)
         */
        register(email: string, password: string, options?: Authentication.RegistrationOptions): Promise<Authentication.RegistrationResult>;
        /**
         * Sends a site member an email with a link to set their password.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members.Authentication.html#sendSetPasswordEmail)
         */
        sendSetPasswordEmail(email: string, options?: Authentication.SetPasswordEmailOptions): Promise<boolean>;
    }
    /**
     * The CurrentMember API contains functionality for viewing and managing site members from frontend code.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-members.CurrentMember.html#)
     */
    interface CurrentMember {
        /**
         * Retrieves the currently logged-in member.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members.CurrentMember.html#getMember)
         */
        getMember(options?: CurrentMember.FieldsetOptions): Promise<CurrentMember.Member>;
        /**
         * Retrieves the member's roles.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members.CurrentMember.html#getRoles)
         */
        getRoles(): Promise<CurrentMember.Role[]>;
        /**
         * Removes the currently logged-in member from the site community and sets their profile to private.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members.CurrentMember.html#makeProfilePrivate)
         */
        makeProfilePrivate(): Promise<CurrentMember.Member>;
        /**
         * Joins the currently logged-in member to the site community and sets their profile to public.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members.CurrentMember.html#makeProfilePublic)
         */
        makeProfilePublic(): Promise<CurrentMember.Member>;
    }
    /**
     * The Authentication API contains functionality for authenticating members from frontend code.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-members.Authentication.html#)
     */
    namespace Authentication {
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
             * Contact's image source URL.
             */
            picture?: string;
            /**
             * List of contact's email addresses.
             *  When creating a contact, if no phone number is
             *  provided, at least 1 email address must be provided.
             */
            emails?: string[];
            /**
             * List of contact's phone numbers.
             *  When creating a contact, if no email is
             *  provided, at least 1 phone number must be provided.
             */
            phones?: string[];
            /**
             * List of contact's labels. [Labels](https://support.wix.com/en/article/creating-contact-labels)
             *  are used to organize contacts. When setting the `labels` property, you can
             *  only list labels that already exist in your site's [Contact List](https://support.wix.com/en/article/accessing-your-contact-list).
             */
            labels?: string[];
            /**
             * Contact's language.
             */
            language?: string;
            /**
             * Any
             *  number of custom fields. [Custom fields](https://support.wix.com/en/article/adding-custom-fields-to-contacts)
             *  are used to store additional information about your site's contacts. When
             *  setting a custom field, use a key:value pair. The key must match one of the `key` properties of the [objects](wix-crm-backend/contacts/extendedfieldsqueryresult/items)
             *  returned by [queryExtendedFields()](/wix-crm-backend/contacts/queryextendedfields) with the `custom.` prefix removed.
             *  You can only set values for custom fields that already exist in the Contacts
             *  application.
             */
            customFields?: string | number | Date;
        };
        type LoginOptions = {
            /**
             * Whether to display the `"login"` or `"signup"` prompt.
             *
             * Defaults to `"signup"`.
             */
            mode?: string;
            /**
             * Whether the login form should be modal (`true`)
             * or full screen (`false`).
             *
             * Defaults to `false` (full screen).
             */
            modal?: boolean;
        };
        /**
         * An object that contains information about a site registration.
         */
        type RegistrationOptions = {
            /**
             * Contact information.
             */
            contactInfo?: Authentication.ContactInfo;
            /**
             * Sets the [privacy status](https://support.wix.com/en/article/member-privacy-settings-for-groups) of a new member upon registration.
             * One of:
             *
             *  - `"PUBLIC"`: Sets the new member status to public. A member whose status is public is a member of the site's community.
             *  - `"PRIVATE"`: Sets the new member status to private. A member whose status is private is not a member of the site's community.
             *
             * Defaults to `"PRIVATE"`.
             */
            privacyStatus?: string;
        };
        type RegistrationResult = {
            /**
             * Registration status.
             *
             * One of:
             *
             * - `"PENDING"`: The member must be approved before they can log in to the site.
             * - `"ACTIVE"`: The member is approved and can log in to the site.
             */
            status: string;
            /**
             * Token for approving the member
             * with the [`approveByToken()`](wix-members-backend/authentication/approveByToken)
             * function. `approvalToken` is safe to pass via email or from page code to
             * backend code.
             *
             * Returned when `status` is `"PENDING"`.
             */
            approvalToken?: string;
            /**
             * The registered member.
             *
             * Returned when `status` is `"ACTIVE"`.
             */
            member?: CurrentMember.Member;
        };
        type SetPasswordEmailOptions = {
            /**
             * Whether to hide the "ignore this email" message.
             *
             * If `false`, the email tells the member
             * they can safely ignore
             * if they did not request the password change.
             *
             * Defaults to `false`.
             */
            hideIgnoreMessage?: boolean;
        };
        type LoginHandler = (currentMember: CurrentMember) => void;
        type LogoutHandler = () => void;
    }
    /**
     * The CurrentMember API contains functionality for viewing and managing site members from frontend code.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-members.CurrentMember.html#)
     */
    namespace CurrentMember {
        type Address = {
            /**
             * Street address ID.
             */
            _id?: string;
            /**
             * Street address object, with number and name in separate fields.
             */
            streetAddress?: CurrentMember.StreetAddress;
            /**
             * Main address line, usually street and number, as free text.
             */
            addressLine?: string;
            /**
             * Free text providing more detailed address information,
             *  such as apartment, suite, or floor.
             */
            addressLine2?: string;
            /**
             * City name.
             */
            city?: string;
            /**
             * Code for a subdivision (such as state, prefecture, or province) in an
             * [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) format.
             */
            subdivision?: string;
            /**
             * 2-letter country code in an
             * [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
             */
            country?: string;
            /**
             * Postal code.
             */
            postalCode?: string;
        };
        /**
         * Member's contact information. Contact information is stored in the
         */
        type ContactDetails = {
            /**
             * Contact's first name.
             */
            firstName?: string;
            /**
             * Contact's last name.
             */
            lastName?: string;
            /**
             * List of phone numbers.
             */
            phones: string[];
            /**
             * List of email addresses.
             */
            emails: string[];
            /**
             * List of street addresses.
             */
            addresses: CurrentMember.Address[];
            /**
             * Contact's birthdate, formatted as `"YYYY-MM-DD"`.
             *
             *  Example: `"2020-03-15"` for March 15, 2020.
             */
            birthdate?: string;
            /**
             * Contact's company name.
             */
            company?: string;
            /**
             * Contact's job title.
             */
            jobTitle?: string;
            /**
             * Custom fields,
             * [structured as key:object pairs](wix-members/introduction#data-structure).
             * Custom field IDs are defined in the
             * [Contacts Extended Fields API](wix-crm-backend/contacts).
             * The paired object contains the `name` and `value` properties,
             * where `name` is the display name and `value` is the value stored for the member.
             *
             * Only custom fields
             * [added to the member profile in the Dashboard](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fmembers-account)
             * are available through the Members API.
             * Empty fields are not returned.
             *
             * When updating a member, `name` is ignored.
             */
            customFields: object;
        };
        type FieldsetOptions = {
            /**
             * Predefined sets of fields to return.
             * When multiple fieldsets are provided, the union of all the included fields is returned.
             *
             * Predefined fieldsets are one of:
             *
             * - `"FULL"`: Returns all fields.
             * - `"PUBLIC"`: Returns `_id` and all fields under `profile`. With this fieldset, `profile.status`, `profile.privacyStatus`, and `profile.activityStatus` are returned as `"UNKNOWN"`.
             *
             * Defaults to `[ "FULL" ]`.
             */
            fieldsets: string[];
        };
        /**
         * Member's profile photo.
         */
        type Image = {
            /**
             * **Deprecated.** Wix Media image ID,
             *  set when the member selects an image from Wix Media.
             */
            _id: string;
            /**
             * Image URL.
             */
            url: string;
            /**
             * Original image width.
             */
            height: number;
            /**
             * Original image height.
             */
            width: number;
            /**
             * X-axis offset.
             *
             *  Defaults to `0`.
             */
            offsetX: number;
            /**
             * Y-axis offset.
             *
             *  Defaults to `0`.
             */
            offsetY: number;
        };
        /**
         * Updated member.
         */
        type Member = {
            /**
             * Member ID.
             */
            _id: string;
            /**
             * Email used by the member to log in to the site.
             */
            loginEmail?: string;
            /**
             * Member site access status.
             *
             *
             *
             * One of:
             *
             * - `"PENDING"`: Member created and is waiting for approval by site owner.
             * - `"APPROVED"`: Member can log in to the site.
             * - `"OFFLINE"`: Member is a [guest author](https://support.wix.com/en/article/wix-blog-adding-guest-authors-to-your-blog) for the site blog and cannot log in to the site.
             * - `"BLOCKED"`: Member is blocked and cannot log in to the site.
             * - `"UNKNOWN"`: Insufficient permissions to get the status.
             *
             */
            status: string;
            /**
             * Contact ID.
             */
            contactId: string;
            /**
             * Member privacy status.
             *
             *
             *
             *
             * One of:
             *
             * - `"PUBLIC"`: Member is visible to everyone.
             * - `"PRIVATE"`: Member is hidden from site visitors and other site members. Member is returned only to site contributors and apps with the appropriate permissions.
             * - `"UNKNOWN"`: Insufficient permissions to get the status.
             *
             */
            privacyStatus: string;
            /**
             * Member activity status.
             *
             *
             *
             *
             * One of:
             *
             * - `"ACTIVE"`: Member can write forum posts and blog comments.
             * - `"MUTED"`: Member cannot write forum posts or blog comments.
             * - `"UNKNOWN"`: Insufficient permissions to get the status.
             *
             */
            activityStatus: string;
            /**
             * Date and time when the member was created.
             */
            _createdDate: Date;
            /**
             * Date and time when the member was updated.
             */
            _updatedDate: Date;
            /**
             * Date and time when the member last logged in to the site.
             */
            lastLoginDate?: Date;
            /**
             * Member's contact information. Contact information is stored in the
             * [Contact List](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fcontacts).
             *
             *
             */
            contactDetails?: CurrentMember.ContactDetails;
            /**
             * Profile display info.
             */
            profile: CurrentMember.Profile;
        };
        /**
         * Profile display info.
         */
        type Profile = {
            /**
             * Name that identifies the member to other members.
             * Displayed on the member's profile page
             * and interactions in the forum or blog.
             */
            nickname: string;
            /**
             * Slug that determines the member's profile page URL.
             */
            slug: string;
            /**
             * Member's profile photo.
             */
            profilePhoto?: CurrentMember.Image;
            /**
             * Member's profile photo.
             */
            coverPhoto?: CurrentMember.Image;
            /**
             * Member title.
             *
             *
             */
            title?: string;
        };
        type Role = {
            /**
             * Role ID.
             */
            _id: string;
            /**
             * Role name as defined in the site's
             *  [Member Permissions](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fmember-permissions/roles)
             *  page or one of `"Admin"` or `"Member"`.
             */
            title: string;
            /**
             * Role description, if defined in the site's dashboard.
             */
            description?: string;
            /**
             * Role color, as defined in the site's
             * [Member Permissions](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fmember-permissions/roles)
             * page.
             *
             * One of:
             *
             * - `"DARK_BLUE"`
             * - `"LIGHT_BLUE"`
             * - `"TEAL"`
             * - `"LIGHT_GREEN"`
             * - `"YELLOW"`
             * - `"ORANGE"`
             * - `"RED"`
             * - `"VIOLET"`
             * - `"PURPLE"`
             */
            color: string;
            /**
             * Date and time the role was created.
             */
            _createdDate?: Date;
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
    }
}
