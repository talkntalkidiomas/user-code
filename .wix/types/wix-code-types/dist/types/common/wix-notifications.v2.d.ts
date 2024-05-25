/**
 * [Read more](https://www.wix.com/corvid/reference/wix-notifications.v2.html#)
 */
declare module 'wix-notifications.v2' {
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-notifications-v2.html#notifications)
     */
    const notifications: Notifications;
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-notifications-v2.Notifications.html#)
     */
    interface Notifications {
        /**
         * Sends a notification.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-notifications-v2.Notifications.html#notify)
         */
        notify(body: string, channels: Array<string>, options: Notifications.NotifyOptions): Promise<void>;
    }
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-notifications-v2.Notifications.html#)
     */
    namespace Notifications {
        type Empty = {};
        type NotifyOptions = {
            /**
             * Clickable text that links to the `targetUrl` or `targetDashboardPage`. For example, "Click this!".
             *
             * Max: 512 characters
             */
            action?: string;
            /**
             * URL of Dashboard page to navigate to when the `action` text is clicked.
             */
            targetDashboardPage?: string;
            /**
             * URL to navigate to when the `action` text is clicked.
             */
            targetUrl?: string;
            /**
             * Notification title. Only displayed on mobile and browser notifications.
             *
             * Max: 512 characters
             */
            title?: string;
            /**
             * List of contacts to notify.
             */
            toContacts?: Notifications.ToContacts;
            /**
             * List of site contributors to notify.
             */
            toSiteContributors?: Notifications.ToSiteContributors;
            /**
             * Notify contacts who are subscribed to specific topics.
             */
            toTopicsSubscribers?: Notifications.ToTopicsSubscribers;
        };
        type PublicNotifyRequest = {
            /**
             * Clickable text that links to the `targetUrl` or `targetDashboardPage`. For example, "Click this!".
             *
             * Max: 512 characters
             */
            action?: string;
            /**
             * Contents of the notification.
             *
             * Max: 512 characters
             */
            body?: string;
            /**
             * The channels to send the notification on. One or more of:
             *
             * - `"Mobile"`: Sends the notification to the Wix App.
             * - `"Dashboard"`: Sends the notification to the contributor's Wix Dashboard.
             * - `"Browser"`: Sends the notification to the contributor's browser.
             */
            channels?: Array<string>;
            /**
             * URL of Dashboard page to navigate to when the `action` text is clicked.
             */
            targetDashboardPage?: string;
            /**
             * URL to navigate to when the `action` text is clicked.
             */
            targetUrl?: string;
            /**
             * Notification title. Only displayed on mobile and browser notifications.
             *
             * Max: 512 characters
             */
            title?: string;
            /**
             * List of contacts to notify.
             */
            toContacts?: Notifications.ToContacts;
            /**
             * List of site contributors to notify.
             */
            toSiteContributors?: Notifications.ToSiteContributors;
            /**
             * Notify contacts who are subscribed to specific topics.
             */
            toTopicsSubscribers?: Notifications.ToTopicsSubscribers;
        };
        type PublicNotifyRequestActionTargetOneOf = {
            /**
             * URL of Dashboard page to navigate to when the `action` text is clicked.
             */
            targetDashboardPage?: string;
            /**
             * URL to navigate to when the `action` text is clicked.
             */
            targetUrl?: string;
        };
        type PublicNotifyRequestRecipientsFilterOneOf = {
            /**
             * List of contacts to notify.
             */
            toContacts?: Notifications.ToContacts;
            /**
             * List of site contributors to notify.
             */
            toSiteContributors?: Notifications.ToSiteContributors;
            /**
             * Notify contacts who are subscribed to specific topics.
             */
            toTopicsSubscribers?: Notifications.ToTopicsSubscribers;
        };
        type Public_notification = {
            /**
             * id
             */
            _id?: string;
        };
        type ToContacts = {
            /**
             * List of contact IDs.
             */
            contactIds?: Array<string>;
        };
        type ToSiteContributors = {
            /**
             * Roles to receive the notification. One of:
             *
             * - `"All_Contributors"`: All site contributors (default).
             * - `"Owner"`: Only the site owner.
             */
            withRole?: string;
        };
        type ToTopicsSubscribers = {
            /**
             * List of contact IDs to exclude from notification.
             */
            excludedContactIds?: Array<string>;
            /**
             * List of topics.
             */
            topics?: Array<string>;
        };
    }
}
