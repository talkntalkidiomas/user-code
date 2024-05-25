/**
 * The wix-members-backend module contains functionality
 * for working with your site members from backend code.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.html#)
 */
declare module 'wix-members-backend' {
    /**
     * The Authentication API contains functionality for authenticating users from backend code.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.html#authentication)
     */
    const authentication: Authentication;
    /**
     * The Authorization API contains functionality for working with
     * [member roles](https://support.wix.com/en/site-members/setting-your-members-permissions)
     * from backend code.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.html#authorization)
     */
    const authorization: Authorization;
    /**
     * The Badges API contains functionality for working with [member badges](https://support.wix.com/en/article/about-member-badges) from backend code.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.html#badges)
     */
    const badges: Badges;
    /**
     * The CurrentMember API contains functionality for viewing and managing site members from backend code.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.html#currentMember)
     */
    const currentMember: CurrentMember;
    /**
     * The Members API contains functionality for viewing and managing site members from backend code.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.html#members)
     */
    const members: Members;
    type AuthOptions = {
        /**
         * Prevents permission checks from running for the operation.
         */
        suppressAuth: boolean;
    };
    /**
     * The Authentication API contains functionality for authenticating users from backend code.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.Authentication.html#)
     */
    interface Authentication {
        /**
         * Approves a pending member using an email address.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.Authentication.html#approveByEmail)
         */
        approveByEmail(email: string): Promise<string>;
        /**
         * Approves a pending member using an approval token.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.Authentication.html#approveByToken)
         */
        approveByToken(token: string): Promise<string>;
        /**
         * Blocks a member from logging in to the site.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.Authentication.html#blockByEmail)
         */
        blockByEmail(email: string): Promise<void>;
        /**
         * Changes a member's login email address.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.Authentication.html#changeLoginEmail)
         */
        changeLoginEmail(memberId: string, newEmail: string): Promise<Members.Member>;
        /**
         * Creates a session token for a member authenticated by a 3rd party.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.Authentication.html#generateSessionToken)
         */
        generateSessionToken(email: string): Promise<string>;
        /**
         * Logs a registered member in with an email and password.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.Authentication.html#login)
         */
        login(email: string, password: string): Promise<string>;
        /**
         * Registers a new site member.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.Authentication.html#register)
         */
        register(email: string, password: string, options?: Authentication.RegistrationOptions): Promise<Authentication.RegistrationResult>;
        /**
         * Sends a site member an email with a link to set their password.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.Authentication.html#sendSetPasswordEmail)
         */
        sendSetPasswordEmail(email: string, options?: Authentication.SetPasswordEmailOptions): Promise<void>;
    }
    /**
     * The Authorization API contains functionality for working with
     * [member roles](https://support.wix.com/en/site-members/setting-your-members-permissions)
     * from backend code.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.Authorization.html#)
     */
    interface Authorization {
        /**
         * Assigns a role to a member.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.Authorization.html#assignRole)
         */
        assignRole(roleId: string, memberId: string, options?: AuthOptions): Promise<void>;
        /**
         * Removes a role from a member.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.Authorization.html#removeRole)
         */
        removeRole(roleId: string, memberId: string, options?: AuthOptions): Promise<void>;
    }
    /**
     * The Badges API contains functionality for working with [member badges](https://support.wix.com/en/article/about-member-badges) from backend code.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.Badges.html#)
     */
    interface Badges {
        /**
         * Assigns a badge to site members.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.Badges.html#assignMembers)
         */
        assignMembers(badgeId: string, memberIds: string[]): Promise<string[]>;
        /**
         * Creates a badge.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.Badges.html#createBadge)
         */
        createBadge(badgeInfo: Badges.BadgeInfo): Promise<Badges.Badge>;
        /**
         * Deletes a badge.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.Badges.html#deleteBadge)
         */
        deleteBadge(badgeId: string): Promise<void>;
        /**
         * Lists the badges assigned to each of the specified site members.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.Badges.html#listMemberBadges)
         */
        listMemberBadges(memberIds: string[]): Promise<Badges.MemberBadges[]>;
        /**
         * Lists the IDs of all members assigned to a badge.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.Badges.html#listMembers)
         */
        listMembers(badgeId: string): Promise<string[]>;
        /**
         * Removes site members from an assigned badge.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.Badges.html#removeMembers)
         */
        removeMembers(badgeId: string, memberIds: string[]): Promise<void>;
        /**
         * Updates a badge.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.Badges.html#updateBadge)
         */
        updateBadge(badgeId: string, badgeInfo: Badges.BadgeInfo): Promise<Badges.Badge>;
    }
    /**
     * The CurrentMember API contains functionality for viewing and managing site members from backend code.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.CurrentMember.html#)
     */
    interface CurrentMember {
        /**
         * Retrieves the currently logged-in member.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.CurrentMember.html#getMember)
         */
        getMember(options?: Members.FieldsetOptions): Promise<Members.Member>;
        /**
         * Retrieves the member's roles.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.CurrentMember.html#getRoles)
         */
        getRoles(): Promise<CurrentMember.Role[]>;
        /**
         * Removes the currently logged-in member from the site community and sets their profile to private.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.CurrentMember.html#makeProfilePrivate)
         */
        makeProfilePrivate(): Promise<Members.Member>;
        /**
         * Joins the currently logged-in member to the site community and sets their profile to public.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.CurrentMember.html#makeProfilePublic)
         */
        makeProfilePublic(): Promise<Members.Member>;
        /**
         * Changes the currently logged-in member's slug.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.CurrentMember.html#updateSlug)
         */
        updateSlug(slug: string): Promise<Members.Member>;
    }
    /**
     * Events that are triggered by actions on a site's members.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.Events.html#)
     */
    interface Events {
        /**
         * An event that is triggered when a site member is created.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.Events.html#onMemberCreated)
         */
        onMemberCreated(event: Events.CreatedMemberEvent): void;
        /**
         * An event that is triggered when a site member is deleted.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.Events.html#onMemberDeleted)
         */
        onMemberDeleted(event: Events.DeletedMemberEvent): void;
        /**
         * An event that is triggered when a site member's information is updated.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.Events.html#onMemberUpdated)
         */
        onMemberUpdated(event: Events.UpdatedMemberEvent): void;
    }
    /**
     * The Members API contains functionality for viewing and managing site members from backend code.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.Members.html#)
     */
    interface Members {
        /**
         * Deletes a member.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.Members.html#deleteMember)
         */
        deleteMember(id: string): Promise<void>;
        /**
         * Deletes a member's street addresses.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.Members.html#deleteMemberAddresses)
         */
        deleteMemberAddresses(id: string): Promise<Members.Member>;
        /**
         * Clears a member's email addresses.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.Members.html#deleteMemberEmails)
         */
        deleteMemberEmails(id: string): Promise<Members.Member>;
        /**
         * Clears a member's phone numbers.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.Members.html#deleteMemberPhones)
         */
        deleteMemberPhones(id: string): Promise<Members.Member>;
        /**
         * Retrieves a member by ID.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.Members.html#getMember)
         */
        getMember(id: string, options?: Members.FieldsetOptions): Promise<Members.Member>;
        /**
         * Updates a member's properties.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.Members.html#updateMember)
         */
        updateMember(id: string, member: Members.MemberInfo): Promise<Members.Member>;
    }
    /**
     * The Authentication API contains functionality for authenticating users from backend code.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.Authentication.html#)
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
             * Any number of custom fields. [Custom fields](https://www.wix.com/velo/reference/wix-members-backend/custom-fields)
             *  are used to store additional information about your site's contacts.
             *
             *  >**Note:** `customFields` is not the name of a field in the `contactInfo` object. Here, it represents any custom fields that you've chosen to implement.
             */
            customFields?: string | number | Date;
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
             * Token for logging in the current visitor
             *  as a site member with the
             * [`applySessionToken()`](wix-members-frontend/authentication/applySessionToken)
             *  function from wix-members-frontend.
             *
             * `sessionToken` is only returned when approval is automatic and the returned `status` is `"ACTIVE"`. See [Automatic vs. Manual Approval](https://www.wix.com/velo/reference/wix-members-backend/authentication/register#wix-members-backend_authentication_register_automatic-vs-manual-approval).
             */
            sessionToken?: string;
            /**
             * Token for approving the member
             * with the [`approveByToken()`](wix-members-backend/authentication/approveByToken)
             * function. `approvalToken` is safe to pass via email or from page code to
             * backend code.
             *
             * `approvalToken` is only returned when manual approval is required and the returned `status` is `"PENDING"`. See [Automatic vs. Manual Approval](https://www.wix.com/velo/reference/wix-members-backend/authentication/register#wix-members-backend_authentication_register_automatic-vs-manual-approval).
             */
            approvalToken?: string;
            /**
             * The registered member.
             */
            member: Members.Member;
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
    }
    /**
     * The Badges API contains functionality for working with [member badges](https://support.wix.com/en/article/about-member-badges) from backend code.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.Badges.html#)
     */
    namespace Badges {
        /**
         * An object representing a member badge.
         */
        type Badge = {
            /**
             * Badge ID.
             */
            _id: string;
            /**
             * Badge title.
             */
            title: string;
            /**
             * Badge's unique URL as used in a dynamic page.
             */
            slug: string;
            /**
             * Badge description.
             */
            description: string;
            /**
             * Badge background color as a hexadecimal RGB color value.
             *
             * Defaults to `"#796EFF"` (purple).
             */
            backgroundColor: string;
            /**
             * Badge text color as a hexadecimal RGB color value.
             *
             * Defaults to `"#FFFFFF"` (white).
             */
            textColor: string;
            /**
             * Badge icon as an SVG image. One of:
             *
             *   - An external web URL in the following format: `http(s)://`.
             *   - The [source URL](wix-media-backend.mediaManager.html#getFileUrl) for a Wix Media Manager file.
             *     Wix Media Manager file names in a `wix:image://...` format are not supported.
             */
            icon: string;
            /**
             * ID of the role that badge members are assigned to.
             */
            roleId: string;
            /**
             * Date and time the badge was created.
             */
            _createdDate: Date;
            /**
             * Date and time the badge was last updated.
             */
            _updatedDate: Date;
        };
        /**
         * Information to use when creating or updating a badge.
         */
        type BadgeInfo = {
            /**
             * Badge title.
             */
            title: string;
            /**
             * Badge description.
             */
            description?: string;
            /**
             * Badge background color as a hexadecimal RGB color value.
             *
             * Defaults to `"#796EFF"` (purple).
             */
            backgroundColor?: string;
            /**
             * Badge text color as a hexadecimal RGB color value.
             *
             * Defaults to `"#FFFFFF"` (white).
             */
            textColor?: string;
            /**
             * Badge icon as an SVG image. One of:
             *
             *   - An external web URL in the following format: `http(s)://`.
             *   - The [source URL](wix-media-backend.mediaManager.html#getFileUrl) for a Wix Media Manager file.
             *     Wix Media Manager file names in a `wix:image://...` format are not supported.
             */
            icon?: string;
        };
        /**
         * An object representing the badges associated with a member.
         */
        type MemberBadges = {
            /**
             * Member ID.
             */
            memberId: string;
            /**
             * List of badge IDs assigned to the member.
             */
            badgeIds: string[];
        };
    }
    /**
     * The CurrentMember API contains functionality for viewing and managing site members from backend code.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.CurrentMember.html#)
     */
    namespace CurrentMember {
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
    }
    /**
     * Events that are triggered by actions on a site's members.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.Events.html#)
     */
    namespace Events {
        /**
         * An object representing the site member that was created.
         */
        type CreatedMemberEvent = {
            /**
             * Event metadata.
             */
            metadata: Events.EventMetadata;
            /**
             * Information about the created member.
             */
            entity: Members.Member;
        };
        /**
         * An object representing the site member deletion event.
         */
        type DeletedMemberEvent = {
            /**
             * Event metadata.
             */
            metadata: Events.EventMetadata;
        };
        /**
         * Event metadata.
         */
        type EventMetadata = {
            /**
             * Event ID.
             */
            id: string;
            /**
             * Member ID associated with this event.
             */
            entityId: string;
            /**
             * Event timestamp.
             */
            eventTime: string;
            /**
             * Whether the event was triggered as a result of a privacy regulation application (for example, [GDPR](https://support.wix.com/en/article/gdpr-frequently-asked-questions)). For advanced users.
             */
            triggeredByAnonymizeRequest?: boolean;
        };
        /**
         * An object representing the site member whose information was updated.
         */
        type UpdatedMemberEvent = {
            /**
             * Event metadata.
             */
            metadata: Events.EventMetadata;
            /**
             * Information about the updated member.
             */
            entity: Members.Member;
        };
    }
    /**
     * The Members API contains functionality for viewing and managing site members from backend code.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-members-backend.Members.html#)
     */
    namespace Members {
        type Address = {
            /**
             * Street address ID.
             */
            _id?: string;
            /**
             * Street address object, with number and name in separate fields.
             */
            streetAddress?: Members.StreetAddress;
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
        type AddressInfo = {
            /**
             * Street address object, with number and name in separate fields.
             */
            streetAddress?: Members.StreetAddressInfo;
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
            addresses: Members.Address[];
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
             * [structured as key:object pairs](wix-members-backend/introduction#data-structure).
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
        /**
         * Member's contact information. Contact information is stored in the
         * [Contact List](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fcontacts).
         *
         *
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
             * List of phone numbers.
             */
            phones?: string[];
            /**
             * List of email addresses.
             */
            emails?: string[];
            /**
             * List of street addresses.
             */
            addresses?: Members.AddressInfo[];
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
             * [structured as key:object pairs](wix-members-frontend/introduction#data-structure).
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
            customFields?: any;
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
             * Defaults to `[ "PUBLIC" ]`.
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
            contactDetails?: Members.ContactDetails;
            /**
             * Profile display info.
             */
            profile: Members.Profile;
        };
        /**
         * Member details to update.
         */
        type MemberInfo = {
            /**
             * Member's contact information. Contact information is stored in the
             * [Contact List](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fcontacts).
             *
             *
             */
            contactDetails?: Members.ContactInfo;
            /**
             * Profile display info.
             */
            profile?: Members.ProfileInfo;
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
            profilePhoto?: Members.Image;
            /**
             * Member's profile photo.
             */
            coverPhoto?: Members.Image;
            /**
             * Member title.
             *
             *
             */
            title?: string;
        };
        /**
         * Member's profile photo.
         */
        type ProfileImageInfo = {
            /**
             * Wix Media image ID,
             *  set when the member selects an image from Wix Media.
             */
            _id?: string;
            /**
             * Image URL.
             */
            url?: string;
            /**
             * Original image width.
             */
            height?: number;
            /**
             * Original image height.
             */
            width?: number;
            /**
             * X-axis offset.
             *
             *  Defaults to `0`.
             */
            offsetX?: number;
            /**
             * Y-axis offset.
             *
             *  Defaults to `0`.
             */
            offsetY?: number;
        };
        /**
         * Profile display info.
         */
        type ProfileInfo = {
            /**
             * Name that identifies the member to other members.
             * Displayed on the member's profile page
             * and interactions in the forum or blog.
             */
            nickname?: string;
            /**
             * Member's profile photo.
             */
            profilePhoto?: Members.ProfileImageInfo;
            /**
             * Member's profile photo.
             */
            coverPhoto?: Members.ProfileImageInfo;
            /**
             * Member title.
             *
             *
             */
            title?: string;
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
}
