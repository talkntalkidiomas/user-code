/**
 * **Deprecated.**
 * The wix-users-backend module will continue to work, but a newer version is available at
 * [wix-members-backend](https://www.wix.com/velo/reference/wix-members-backend).
 * 	[Read more](https://www.wix.com/corvid/reference/wix-users-backend.html#)
 */
declare module 'wix-users-backend' {
    /**
     * **Deprecated.**
     * This code will continue to work, but a newer version is available at
     * [wix-members-backend.badges](https://www.wix.com/velo/reference/wix-members-backend/badges).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-users-backend.html#badges)
     */
    const badges: Badges;
    /**
     * **Deprecated.**
     * This object will continue to work, but a newer version is available at
     * [wix-members-backend.currentMember.getMember()](https://www.wix.com/velo/reference/wix-members-backend/currentmember/getmember).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-users-backend.html#currentUser)
     */
    const currentUser: User;
    /**
     * **Deprecated.**
     * This code will continue to work, but a newer version is available at
     * [wix-members-backend.authorization](https://www.wix.com/velo/reference/wix-members-backend/authorization).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-users-backend.html#roles)
     */
    const roles: Roles;
    /**
     * **Deprecated.**
     * This function will continue to work, but a newer version is available at
     * [wix-members-backend.authentication.approveByEmail()](https://www.wix.com/velo/reference/wix-members-backend/authentication/approvebyemail).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-users-backend.html#approveByEmail)
     */
    function approveByEmail(email: string): Promise<string>;
    /**
     * **Deprecated.**
     * This function will continue to work, but a newer version is available at
     * [wix-members-backend.authentication.approveByToken()](https://www.wix.com/velo/reference/wix-members-backend/authentication/approvebytoken).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-users-backend.html#approveByToken)
     */
    function approveByToken(token: string): Promise<string>;
    /**
     * **Deprecated.**
     * This function will continue to work, but a newer version is available at
     * [wix-members-backend.authentication.blockByEmail()](https://www.wix.com/velo/reference/wix-members-backend/authentication/blockbyemail).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-users-backend.html#blockByEmail)
     */
    function blockByEmail(email: string): Promise<void>;
    /**
     * **Deprecated.**
     * This function will continue to work, but a newer version is available at
     * [wix-members-backend.members.deleteMember()](https://www.wix.com/velo/reference/wix-members-backend/members/deletemember).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-users-backend.html#deleteUser)
     */
    function deleteUser(userId: string): Promise<void>;
    /**
     * **Deprecated.**
     * This function will continue to work, but a newer version is available at
     * [wix-crm-backend.triggeredEmails.emailMember()](https://www.wix.com/velo/reference/wix-crm-backend/triggeredemails/emailmember).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-users-backend.html#emailUser)
     */
    function emailUser(emailId: string, toUser: string, options?: TriggeredEmailOptions): Promise<void>;
    /**
     * **Deprecated.**
     * This function will continue to work, but a newer version is available at
     * [wix-members-backend.authentication.generateSessionToken()](https://www.wix.com/velo/reference/wix-members-backend/authentication/generatesessiontoken).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-users-backend.html#generateSessionToken)
     */
    function generateSessionToken(email: string): Promise<string>;
    /**
     * **Deprecated.**
     * This function will continue to work, but a newer version is available at
     * [wix-members-backend.members.getMember()](https://www.wix.com/velo/reference/wix-members-backend/members/getmember).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-users-backend.html#getUser)
     */
    function getUser(userId: string): Promise<RetrievedUser>;
    /**
     * **Deprecated.**
     * This function will continue to work, but a newer version is available at
     * [wix-members-backend.authentication.login()](https://www.wix.com/velo/reference/wix-members-backend/authentication/login).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-users-backend.html#login)
     */
    function login(email: string, password: string): Promise<string>;
    /**
     * **Deprecated.**
     * This function will continue to work, but a newer version is available at
     * [wix-members-backend.authentication.register()](https://www.wix.com/velo/reference/wix-members-backend/authentication/register).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-users-backend.html#register)
     */
    function register(email: string, password: string, options?: RegistrationOptions): Promise<RegistrationResult>;
    /**
     * **Deprecated.**
     * This function will continue to work, but a newer version is available at
     * [wix-members-backend.members.updateMember()](https://www.wix.com/velo/reference/wix-members-backend/members/updatemember).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-users-backend.html#updateUserFields)
     */
    function updateUserFields(userId: string, userInfo: UserInfo): Promise<void>;
    /**
     * An object that contains information about a site member's address.
     */
    type Address = {
        /**
         * Address street address.
         */
        street: string;
        /**
         * Address city.
         */
        city: string;
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
     * An object that contains information about a site member's picture.
     */
    type Picture = {
        /**
         * Member's image URL.
         */
        url: string;
    };
    /**
     * An object that contains information about a site registration.
     */
    type RegistrationOptions = {
        /**
         * Contact information.
         */
        contactInfo?: ContactInfo;
        /**
         * Sets the [privacy status](https://support.wix.com/en/article/member-privacy-settings-for-groups) of a new member upon registration.
         * One of:
         *
         *  + `"PUBLIC"`: Sets the new member status to public. A member whose status is public is a member of the site's community.
         *  + `"PRIVATE"`: Sets the new member status to private. A member whose status is private is not a member of the site's community. The default is set to private.
         */
        privacyStatus?: string;
    };
    /**
     * An object that contains information about the results of a site registration.
     */
    type RegistrationResult = {
        /**
         * Registration status. Either "Pending" or "Active".
         */
        status: string;
        /**
         * A token used to log in the current
         *  user as a site member. Pass the token from your backend code to client-side
         *  code and use it when calling the [applySessionToken()](wix-users.html#applySessionToken)
         *  function. The token is only available when `status` is "Active".
         */
        sessionToken?: string;
        /**
         * A token for approving the user as
         *  a site member using the [approveByToken()](wix-users-backend.html#approveByToken)
         *  function. The token is safe to pass via email or from client-side code to
         *  backend code. The token is only available when `status` is "Pending". The token
         *  expires 30 hours after it is created.
         */
        approvalToken?: string;
        /**
         * The user that has been registered.
         */
        user: User;
    };
    /**
     * An object that contains information about a site member.
     */
    type RetrievedUser = {
        /**
         * Member's unique id.
         */
        id: string;
        /**
         * The member's full name. This information is concatenated from the `firstName` and `lastName` properties. This field will not be returned if the member registered with an email but without a name.
         */
        memberName?: string;
        /**
         * Member's first name.
         */
        firstName: string;
        /**
         * Member's last name.
         */
        lastName: string;
        /**
         * The email address the member uses to log in to your site. This is the address they supplied when they signed up.
         */
        loginEmail: string;
        /**
         * The name the member specified on their profile.
         */
        nickname: string;
        /**
         * The member's URL-friendly name that is unique across your site. Typically this is made up of the member's email prefix.
         */
        slug: string;
        /**
         * The member's locale based on their last login.
         */
        language: string;
        /**
         * Indicates the member's current status, between `Applicant`, `Active`, `Blocked`.
         */
        status: string;
        /**
         * The date and time the member registered to the site.
         */
        creationDate: Date;
        /**
         * The last date and time the member's details were updated.
         */
        lastUpdateDate: Date;
        /**
         * The date and time when the member last logged in.
         */
        lastLoginDate: Date;
        /**
         * List of the member's email addresses.
         */
        emails: string[];
        /**
         * List of the member's phone numbers.
         */
        phones: string[];
        /**
         * List of the member's labels. [Labels](https://support.wix.com/en/article/creating-contact-labels)
         *  are used to organize contacts. When setting the `labels` property, you can
         *  only list labels that already exist in your site's [Contacts List](https://support.wix.com/en/article/accessing-your-contact-list).
         */
        labels: string[];
        /**
         * Member's picture.
         */
        picture: Picture;
        /**
         * Any
         *  number of custom fields. [Custom fields](https://support.wix.com/en/article/adding-custom-fields-to-contacts)
         *  are used to store additional information about your site's contacts. When
         *  setting a custom field, use key:value pairs where the key matches the display names
         *  in your site's [Contacts List](https://support.wix.com/en/article/accessing-your-contact-list).
         *  You can only set values for custom fields that already exist in the Contacts
         *  application.
         */
        customFields: string | number | Date;
    };
    /**
     * An object used when sending a Triggered Email.
     */
    type TriggeredEmailOptions = {
        /**
         * An object with `key:value` pairs where each
         *  `key` is a variable in the email template created in Triggered Emails and its
         *  corresponding `value` is the value to insert into the template in place of
         *  variable. The values must be strings.
         */
        variables: any;
    };
    /**
     * An object that contains information about a site member.
     */
    type UserInfo = {
        /**
         * Member's first name.
         */
        firstName?: string;
        /**
         * Member's last name.
         */
        lastName?: string;
        /**
         * The name the member specified on their profile.
         */
        nickname?: string;
        /**
         * The member's URL-friendly name that is unique across your site. Typically this is made up of the member's email prefix.
         */
        slug?: string;
        /**
         * List of the member's email addresses.
         */
        emails?: string[];
        /**
         * List of the member's phone numbers.
         */
        phones?: string[];
        /**
         * List of the member's labels. [Labels](https://support.wix.com/en/article/creating-contact-labels)
         *  are used to organize contacts. When setting the `labels` property, you can
         *  only list labels that already exist in your site's [Contacts List](https://support.wix.com/en/article/accessing-your-contact-list).
         */
        labels?: string[];
        /**
         * Member's picture.
         */
        picture?: Picture;
        /**
         * Any
         *  number of custom fields. [Custom fields](https://support.wix.com/en/article/adding-custom-fields-to-contacts)
         *  are used to store additional information about your site's contacts. When
         *  setting a custom field, use key:value pairs where the key matches the display names
         *  in your site's [Contacts List](https://support.wix.com/en/article/accessing-your-contact-list).
         *  You can only set values for custom fields that already exist in the Contacts
         *  application.
         */
        customFields?: string | number | Date;
    } & AnyProperties;
    /**
     * **Deprecated.**
     * This code will continue to work, but a newer version is available at
     * [wix-members-backend.badges](https://www.wix.com/velo/reference/wix-members-backend/badges).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-users-backend.Badges.html#)
     */
    interface Badges {
        /**
         * **Deprecated.**
         * This function will continue to work, but a newer version is available at
         * [wix-members-backend.badges.assignMembers()](https://www.wix.com/velo/reference/wix-members-backend/badges/assignmembers).
         * 	[Read more](https://www.wix.com/corvid/reference/wix-users-backend.Badges.html#assignMembers)
         */
        assignMembers(badgeId: string, memberIds: string[]): Promise<string[]>;
        /**
         * **Deprecated.**
         * This function will continue to work, but a newer version is available at
         * [wix-members-backend.badges.createBadge()](https://www.wix.com/velo/reference/wix-members-backend/badges/createbadge).
         * 	[Read more](https://www.wix.com/corvid/reference/wix-users-backend.Badges.html#createBadge)
         */
        createBadge(badgeInfo: Badges.BadgeInfo): Promise<Badges.Badge>;
        /**
         * **Deprecated.**
         * This function will continue to work, but a newer version is available at
         * [wix-members-backend.badges.deleteBadge()](https://www.wix.com/velo/reference/wix-members-backend/badges/deletebadge).
         * 	[Read more](https://www.wix.com/corvid/reference/wix-users-backend.Badges.html#deleteBadge)
         */
        deleteBadge(badgeId: string): Promise<void>;
        /**
         * **Deprecated.**
         * This function will continue to work, but a newer version is available at
         * [wix-members-backend.badges.listMemberBadges()](https://www.wix.com/velo/reference/wix-members-backend/badges/listmemberbadges).
         * 	[Read more](https://www.wix.com/corvid/reference/wix-users-backend.Badges.html#listMemberBadges)
         */
        listMemberBadges(memberIds: string[]): Promise<Badges.MemberBadges[]>;
        /**
         * **Deprecated.**
         * This function will continue to work, but a newer version is available at
         * [wix-members-backend.badges.listMembers()](https://www.wix.com/velo/reference/wix-members-backend/badges/listmembers).
         * 	[Read more](https://www.wix.com/corvid/reference/wix-users-backend.Badges.html#listMembers)
         */
        listMembers(badgeId: string): Promise<string[]>;
        /**
         * **Deprecated.**
         * This function will continue to work, but a newer version is available at
         * [wix-members-backend.badges.removeMembers()](https://www.wix.com/velo/reference/wix-members-backend/badges/removemembers).
         * 	[Read more](https://www.wix.com/corvid/reference/wix-users-backend.Badges.html#removeMembers)
         */
        removeMembers(badgeId: string, memberIds: string[]): Promise<void>;
        /**
         * **Deprecated.**
         * This function will continue to work, but a newer version is available at
         * [wix-members-backend.badges.updateBadge()](https://www.wix.com/velo/reference/wix-members-backend/badges/updatebadge).
         * 	[Read more](https://www.wix.com/corvid/reference/wix-users-backend.Badges.html#updateBadge)
         */
        updateBadge(badgeId: string, badgeInfo: Badges.BadgeInfo): Promise<Badges.Badge>;
    }
    /**
     * **Deprecated.**
     * This code will continue to work, but a newer version is available at
     * [wix-members-backend.authorization](https://www.wix.com/velo/reference/wix-members-backend/authorization).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-users-backend.Roles.html#)
     */
    interface Roles {
        /**
         * **Deprecated.**
         * This function will continue to work, but a newer version is available at
         * [wix-members-backend.authorization.assignRole()](https://www.wix.com/velo/reference/wix-members-backend/authorization/assignrole).
         * 	[Read more](https://www.wix.com/corvid/reference/wix-users-backend.Roles.html#assignRole)
         */
        assignRole(roleId: string, memberId: string, options?: Roles.WixRolesOptions): Promise<void>;
        /**
         * **Deprecated.**
         * This function will continue to work, but a newer version is available at
         * [wix-members-backend.authorization.removeRole()](https://www.wix.com/velo/reference/wix-members-backend/authorization/removerole).
         * 	[Read more](https://www.wix.com/corvid/reference/wix-users-backend.Roles.html#removeRole)
         */
        removeRole(roleId: string, memberId: string, options?: Roles.WixRolesOptions): Promise<void>;
    }
    /**
     * A site member.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-users-backend.User.html#)
     */
    interface User {
        /**
         * **Deprecated.**
         * This property will continue to work, but a newer version is available at
         * [wix-members-backend.currentMember.getMember()](https://www.wix.com/velo/reference/wix-members-backend/currentmember/getmember).
         * 	[Read more](https://www.wix.com/corvid/reference/wix-users-backend.User.html#id)
         */
        readonly id: string;
        /**
         * **Deprecated.**
         * This property will continue to work, but a newer version is available at
         * [wix-members-backend.currentMember.getMember()](https://www.wix.com/velo/reference/wix-members-backend/currentmember/getmember).
         * 	[Read more](https://www.wix.com/corvid/reference/wix-users-backend.User.html#loggedIn)
         */
        readonly loggedIn: boolean;
        /**
         * **Deprecated.**
         * This function will continue to work, but a newer version is available at
         * [wix-members-backend.currentMember.getRoles()](https://www.wix.com/velo/reference/wix-members-backend/currentmember/getroles).
         * 	[Read more](https://www.wix.com/corvid/reference/wix-users-backend.User.html#role)
         */
        readonly role: string;
        /**
         * **Deprecated.**
         * This function will continue to work, but a newer version is available at
         * [wix-members-backend.currentMember.getMember()](https://www.wix.com/velo/reference/wix-members-backend/currentmember/getmember).
         * 	[Read more](https://www.wix.com/corvid/reference/wix-users-backend.User.html#getEmail)
         */
        getEmail(): Promise<string>;
        /**
         * Gets the current member's pricing plan.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-users-backend.User.html#getPricingPlans)
         */
        getPricingPlans(): Promise<User.PricingPlan[]>;
        /**
         * **Deprecated.**
         * This function will continue to work, but a newer version is available at
         * [wix-members-backend.currentMember.getRoles()](https://www.wix.com/velo/reference/wix-members-backend/currentmember/getroles).
         * 	[Read more](https://www.wix.com/corvid/reference/wix-users-backend.User.html#getRoles)
         */
        getRoles(): Promise<User.UserRole[]>;
    }
    /**
     * **Deprecated.**
     * This code will continue to work, but a newer version is available at
     * [wix-members-backend.badges](https://www.wix.com/velo/reference/wix-members-backend/badges).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-users-backend.Badges.html#)
     */
    namespace Badges {
        /**
         * An object representing a member badge.
         */
        type Badge = {
            /**
             * Badge ID.
             */
            id: string;
            /**
             * Badge title.
             */
            title: string;
            /**
             * Badge description.
             */
            description: string;
            /**
             * Background color of the badge as a hexadecimal rgb color value. The default color is `#796EFF` (purple).
             */
            backgroundColor: string;
            /**
             * Text color of the badge as a hexadecimal rgb color value. The default color is `#FFFFFF` (white).
             */
            textColor: string;
            /**
             * Badge icon as an SVG image. One of the following:
             *
             *   + An external web URL in the following format: `http(s)://`.
             *   + The [source URL](wix-media-backend.mediaManager.html#getFileUrl) for a Wix Media Manager file. Wix Media Manager file names in a `wix:image://...` format are not supported.
             */
            icon: string;
            /**
             * ID of the role that badge members are assigned to.
             */
            roleId: string;
            /**
             * Badge's unique URL as used in a dynamic page.
             */
            slug: string;
            /**
             * Date and time the badge was created.
             */
            createdDate: Date;
            /**
             * Date and time the badge was last updated.
             */
            updatedDate: Date;
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
             * Background color of the badge as a hexadecimal rgb color value. The default color is `#796EFF` (purple).
             */
            backgroundColor?: string;
            /**
             * Text color of the badge as a hexadecimal rgb color value. The default color is `#FFFFFF` (white).
             */
            textColor?: string;
            /**
             * Badge icon as an SVG image. One of the following:
             *
             *   + An external web URL in the following format: `http(s)://`.
             *   + The [source URL](wix-media-backend.mediaManager.html#getFileUrl) for a Wix Media Manager file. Wix Media Manager file names in a `wix:image://...` format are not supported.
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
             * IDs of all badges assigned to the specified member.
             */
            badgeIds: string[];
        };
    }
    /**
     * **Deprecated.**
     * This code will continue to work, but a newer version is available at
     * [wix-members-backend.authorization](https://www.wix.com/velo/reference/wix-members-backend/authorization).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-users-backend.Roles.html#)
     */
    namespace Roles {
        /**
         * An object that you pass as the `options` parameter that modifies how an operation is performed.
         */
        type WixRolesOptions = {
            /**
             * Prevents permission checks from running for the operation. Defaults to `false`.
             */
            suppressAuth: boolean;
        };
    }
    /**
     * A site member.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-users-backend.User.html#)
     */
    namespace User {
        /**
         * An object returned by the `getPricingPlans()` function representing a user's [pricing plans](https://support.wix.com/en/article/adding-and-setting-up-the-paid-plans-app).
         */
        type PricingPlan = {
            /**
             * The pricing plan's name.
             */
            name: string;
            /**
             * The pricing plan's start date.
             */
            startDate?: Date;
            /**
             * The pricing plan's expiry date.
             */
            expiryDate?: Date;
        };
        /**
         * An object returned by the `getRoles()` function representing a user's [roles](https://support.wix.com/en/article/creating-member-roles-6943237).
         */
        type UserRole = {
            /**
             * Role name as defined in the site's dashboard or one of "Admin" or "Member".
             */
            name: string;
            /**
             * Role description, if defined in the site's dashboard.
             */
            description?: string;
        };
    }
}
