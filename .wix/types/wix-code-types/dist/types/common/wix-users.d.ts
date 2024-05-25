/**
 * **Deprecated.**
 * The wix-users module will continue to work, but a newer version is available at
 * [wix-members](https://www.wix.com/velo/reference/wix-members).
 * 	[Read more](https://www.wix.com/corvid/reference/wix-users.html#)
 */
declare module 'wix-users' {
    import wixCrm from 'wix-crm';
    /**
     * **Deprecated.**
     * This object will continue to work, but a newer version is available at
     * [wix-members.currentMember.getMember()](https://www.wix.com/velo/reference/wix-members/currentmember/getmember).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-users.html#currentUser)
     */
    const currentUser: User;
    /**
     * **Deprecated.**
     * This function will continue to work, but a newer version is available at
     * [wix-members.authentication.applySessionToken()](https://www.wix.com/velo/reference/wix-members/authentication/applysessiontoken).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-users.html#applySessionToken)
     */
    function applySessionToken(sessionToken: string): Promise<void>;
    /**
     * **Deprecated.**
     * This function will continue to work, but a newer version is available at
     * [wix-crm.triggeredEmails.emailMember()](https://www.wix.com/velo/reference/wix-crm/triggeredemails/emailmember).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-users.html#emailUser)
     */
    function emailUser(emailId: string, toUser: string, options?: TriggeredEmailOptions): Promise<void>;
    /**
     * **Deprecated.**
     * This function will continue to work, but a newer version is available at
     * [wix-window.consentPolicy.getCurrentConsentPolicy()](https://www.wix.com/velo/reference/wix-window/consentpolicy/getcurrentconsentpolicy).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-users.html#getCurrentConsentPolicy)
     */
    function getCurrentConsentPolicy(): PolicyDetails;
    /**
     * **Deprecated.**
     * This function will continue to work, but a newer version is available at
     * [wix-members.authentication.login()](https://www.wix.com/velo/reference/wix-members/authentication/login).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-users.html#login)
     */
    function login(email: string, password: string): Promise<void>;
    /**
     * **Deprecated.**
     * This function will continue to work, but a newer version is available at
     * [wix-members.authentication.logout()](https://www.wix.com/velo/reference/wix-members/authentication/logout).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-users.html#logout)
     */
    function logout(): void;
    /**
     * **Deprecated.**
     * This function will continue to work, but a newer version is available at
     * [wix-window.consentPolicy.onConsentPolicyChanged()](https://www.wix.com/velo/reference/wix-window/consentpolicy/onconsentpolicychanged).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-users.html#onConsentPolicyChanged)
     */
    function onConsentPolicyChanged(handler: ConsentPolicyChangedHandler): void;
    /**
     * **Deprecated.**
     * This function will continue to work, but a newer version is available at
     * [wix-members.authentication.onLogin()](https://www.wix.com/velo/reference/wix-members/authentication/onlogin).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-users.html#onLogin)
     */
    function onLogin(handler: LoginHandler): void;
    /**
     * **Deprecated.**
     * This function will continue to work, but a newer version is available at
     * [wix-members.authentication.promptForgotPassword()](https://www.wix.com/velo/reference/wix-members/authentication/promptforgotpassword).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-users.html#promptForgotPassword)
     */
    function promptForgotPassword(language?: string): Promise<void>;
    /**
     * **Deprecated.**
     * This function will continue to work, but a newer version is available at
     * [wix-members.authentication.promptLogin()](https://www.wix.com/velo/reference/wix-members/authentication/promptlogin).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-users.html#promptLogin)
     */
    function promptLogin(options?: LoginOptions): Promise<User>;
    /**
     * **Deprecated.**
     * This function will continue to work, but a newer version is available at
     * [wix-members.authentication.register()](https://www.wix.com/velo/reference/wix-members/authentication/register).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-users.html#register)
     */
    function register(email: string, password: string, options?: RegistrationOptions): Promise<RegistrationResult>;
    /**
     * **Deprecated.**
     * This function will continue to work, but a newer version is available at
     * [wix-window.consentPolicy.resetConsentPolicy()](https://www.wix.com/velo/reference/wix-window/consentpolicy/resetconsentpolicy).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-users.html#resetConsentPolicy)
     */
    function resetConsentPolicy(): Promise<void>;
    /**
     * **Deprecated.**
     * This function will continue to work, but a newer version is available at
     * [wix-window.consentPolicy.setConsentPolicy()](https://www.wix.com/velo/reference/wix-window/consentpolicy/setconsentpolicy).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-users.html#setConsentPolicy)
     */
    function setConsentPolicy(policy: Policy): Promise<PolicyDetails>;
    /**
     * The event that occurred when the consent policy changed.
     */
    type ConsentPolicyChangedEvent = {};
    /**
     * An object used by the `promptLogin()` function to determine how the login dialog box appears.
     */
    type LoginOptions = {
        /**
         * What type of login experience to present: `"login"` or `"signup"`. Defaults to the option chosen in the Member Signup Settings panel in the Editor.
         */
        mode?: string;
        /**
         * Deprecated.
         */
        lang?: string;
        /**
         * Whether the login form should be modal (`true`) or full screen (`false`). Defaults to `false` if the property doesn't exist.
         */
        modal?: boolean;
    };
    /**
     * The current visitor's  consent policy settings.
     */
    type Policy = {
        /**
         * Consent for mandatory cookies for Wix websites, such as for security cookies. Wix places these cookies on your device and these cookies do not require visitor consent. Always `true`.
         */
        essential: boolean;
        /**
         * Consent for cookies placed on the visitor's device that "remember" visitor settings to improve visitor experience. For example, an indication that the visitor dismissed a popup. The default is `true`.
         */
        functional: boolean;
        /**
         * Consent for cookies used for analytics, such as Wix analytics, Google Analytics, Yandex Metrica, and so on. The default is `true`.
         */
        analytics: boolean;
        /**
         * Consent for cookies used for advertising purposes. This includes 3rd-party scripts and pixels that may potentially place advertising cookies on the device (such as Twitter page view and Facebook Pixel). The default is `true`.
         */
        advertising: boolean;
        /**
         * Consent for a visitor's personal data to be transferred to a 3rd party (such as Google Analytics, Facebook Pixel, and FullStory). The default is `true`.
         */
        dataToThirdParty: boolean;
    };
    /**
     * The complete details of the current user's consent policy.
     */
    type PolicyDetails = {
        /**
         * Whether the policy is the default consent policy set by the site owner. If `true`, either the user has not set a policy or the site owner has reset the policy.
         */
        defaultPolicy: boolean;
        /**
         * An object representing the visitor's current consent policy.
         */
        policy: Policy;
        /**
         * If a cookie exists in the browser defining the current consent policy, the date the policy was set. Otherwise, undefined.
         */
        createdDate?: Date;
    };
    /**
     * An object that contains information about a site registration.
     */
    type RegistrationOptions = {
        /**
         * Contact information.
         */
        contactInfo?: wixCrm.ContactInfo;
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
         * A token for approving the user as
         *  a site member using the [approveByToken()](wix-users-backend.html#approveByToken)
         *  function. The token is safe to pass via email or from client-side code to
         *  backend code. The token is only available when `status` is "Pending".
         */
        approvalToken?: string;
        /**
         * The user that has been registered.
         */
        user: User;
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
     * Function that runs when a visitor's consent policy was changed using [`setConsentPolicy()`](#setConsentPolicy).
     */
    type ConsentPolicyChangedHandler = (event: ConsentPolicyChangedEvent) => void;
    /**
     * Function that runs when a user has logged in.
     */
    type LoginHandler = (user: User) => void;
    /**
     * A site user.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-users.User.html#)
     */
    interface User {
        /**
         * **Deprecated.**
         * This property will continue to work, but a newer version is available at
         * [wix-members.currentMember.getMember()](https://www.wix.com/velo/reference/wix-members/currentmember/getmember).
         * 	[Read more](https://www.wix.com/corvid/reference/wix-users.User.html#id)
         */
        readonly id: string;
        /**
         * **Deprecated.**
         * This property will continue to work, but a newer version is available at
         * [wix-members.currentMember.getMember()](https://www.wix.com/velo/reference/wix-members/currentmember/getmember).
         * 	[Read more](https://www.wix.com/corvid/reference/wix-users.User.html#loggedIn)
         */
        readonly loggedIn: boolean;
        /**
         * **Deprecated.**
         * This property will continue to work, but a newer version is available at
         * [wix-members.currentMember.getRoles()](https://www.wix.com/velo/reference/wix-members/currentmember/getroles).
         * 	[Read more](https://www.wix.com/corvid/reference/wix-users.User.html#role)
         */
        readonly role: string;
        /**
         * **Deprecated.**
         * This function will continue to work, but a newer version is available at
         * [wix-members.currentMember.getMember()](https://www.wix.com/velo/reference/wix-members/currentmember/getmember).
         * 	[Read more](https://www.wix.com/corvid/reference/wix-users.User.html#getEmail)
         */
        getEmail(): Promise<string>;
        /**
         * Gets the user's member pricing plan.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-users.User.html#getPricingPlans)
         */
        getPricingPlans(): Promise<User.PricingPlan[]>;
        /**
         * **Deprecated.**
         * This function will continue to work, but a newer version is available at
         * [wix-members.currentMember.getRoles()](https://www.wix.com/velo/reference/wix-members/currentmember/getroles).
         * 	[Read more](https://www.wix.com/corvid/reference/wix-users.User.html#getRoles)
         */
        getRoles(): Promise<User.UserRole[]>;
    }
    /**
     * A site user.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-users.User.html#)
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
