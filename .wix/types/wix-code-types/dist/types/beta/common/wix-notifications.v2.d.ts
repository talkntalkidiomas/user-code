declare module "wix-notifications.v2" {
  interface Public_notification {
      /** id */
      _id?: string | null;
  }
  interface PublicNotifyRequest extends PublicNotifyRequestRecipientsFilterOneOf, PublicNotifyRequestActionTargetOneOf {
      /** List of site contributors to notify. */
      toSiteContributors?: ToSiteContributors;
      /** List of contacts to notify. */
      toContacts?: ToContacts;
      /** Notify contacts who are subscribed to specific topics. */
      toTopicsSubscribers?: ToTopicsSubscribers;
      /** URL to navigate to when the `action` text is clicked. */
      targetUrl?: string | null;
      /** URL of Dashboard page to navigate to when the `action` text is clicked. */
      targetDashboardPage?: DashboardPages;
      /**
       * Notification title. Only displayed on mobile and browser notifications.
       *
       * Max: 512 characters
       */
      title?: string | null;
      /**
       * Contents of the notification.
       *
       * Max: 512 characters
       */
      body?: string | null;
      /**
       * Clickable text that links to the `targetUrl` or `targetDashboardPage`. For example, "Click this!".
       *
       * Max: 512 characters
       */
      action?: string | null;
      /**
       * The channels to send the notification on. One or more of:
       *
       * - `"Mobile"`: Sends the notification to the Wix App.
       * - `"Dashboard"`: Sends the notification to the contributor's Wix Dashboard.
       * - `"Browser"`: Sends the notification to the contributor's browser.
       */
      channels?: Channel[];
  }
  /** @oneof */
  interface PublicNotifyRequestRecipientsFilterOneOf {
      /** List of site contributors to notify. */
      toSiteContributors?: ToSiteContributors;
      /** List of contacts to notify. */
      toContacts?: ToContacts;
      /** Notify contacts who are subscribed to specific topics. */
      toTopicsSubscribers?: ToTopicsSubscribers;
  }
  /** @oneof */
  interface PublicNotifyRequestActionTargetOneOf {
      /** URL to navigate to when the `action` text is clicked. */
      targetUrl?: string | null;
      /** URL of Dashboard page to navigate to when the `action` text is clicked. */
      targetDashboardPage?: DashboardPages;
  }
  interface ToSiteContributors {
      /**
       * Roles to receive the notification. One of:
       *
       * - `"All_Contributors"`: All site contributors (default).
       * - `"Owner"`: Only the site owner.
       */
      withRole?: Role;
  }
  enum Role {
      /** All contributors with any role */
      All_Contributors = "All_Contributors",
      /** Only the owner */
      Owner = "Owner"
  }
  interface ToContacts {
      /** List of contact IDs. */
      contactIds?: string[];
  }
  interface ToTopicsSubscribers {
      /** List of topics. */
      topics?: string[];
      /** List of contact IDs to exclude from notification. */
      excludedContactIds?: string[];
  }
  enum Channel {
      /** No Default Channel - need to expilicitly decide on channel */
      Undefined = "Undefined",
      /** The widget inside Wix */
      Dashboard = "Dashboard",
      /** Mobile push to WixApp */
      Mobile = "Mobile",
      /** Browser push to the active browser (Chrome/Safari only) */
      Browser = "Browser"
  }
  enum DashboardPages {
      Undefined_Page = "Undefined_Page",
      /** goes to business manager home */
      Home = "Home"
  }
  interface Empty {
  }
  /**
   * Sends a notification.
   *
   *
   * The `notify()` function sends a [notification](https://support.wix.com/en/article/about-your-dashboard-notifications) to the specified recipients on the specified channels.
   *
   * List the the channels for the notification in the `channels` parameter .
   *
   * List the recipients for the notification in the `toContacts`, `toSiteContributors`, and `toTopicsSubscribers` parameters.
   * @public
   * @documentationMaturity preview
   * @requiredField body
   * @requiredField channels
   * @param options - Notification options.
   * @param body - The body of the notification.
   *
   * Max: 512 characters
   * @param channels - The channels to send the notification on. One or more of:
   *
   * - `"Mobile"`: Sends the notification to the Wix App.
   * - `"Dashboard"`: Sends the notification to the contributor's Wix Dashboard.
   * - `"Browser"`: Sends the notification to the contributor's browser.
   * @adminMethod
   * @returns Fulfilled when the send notification request is received.
   */
  function notify(body: string | null, channels: Channel[], options?: NotifyOptions): Promise<void>;
  interface NotifyOptions extends PublicNotifyRequestRecipientsFilterOneOf, PublicNotifyRequestActionTargetOneOf {
      /** List of site contributors to notify. */
      toSiteContributors?: ToSiteContributors;
      /** List of contacts to notify. */
      toContacts?: ToContacts;
      /** Notify contacts who are subscribed to specific topics. */
      toTopicsSubscribers?: ToTopicsSubscribers;
      /**
       * Notification title. Only displayed on mobile and browser notifications.
       *
       * Max: 512 characters
       */
      title?: string | null;
      /**
       * Clickable text that links to the `targetUrl` or `targetDashboardPage`. For example, "Click this!".
       *
       * Max: 512 characters
       */
      action?: string | null;
      /** URL to navigate to when the `action` text is clicked. */
      targetUrl?: string | null;
      /** URL of Dashboard page to navigate to when the `action` text is clicked. */
      targetDashboardPage?: DashboardPages;
  }
  
  type pingNotificationsV1PublicNotification_universal_d_Public_notification = Public_notification;
  type pingNotificationsV1PublicNotification_universal_d_PublicNotifyRequest = PublicNotifyRequest;
  type pingNotificationsV1PublicNotification_universal_d_PublicNotifyRequestRecipientsFilterOneOf = PublicNotifyRequestRecipientsFilterOneOf;
  type pingNotificationsV1PublicNotification_universal_d_PublicNotifyRequestActionTargetOneOf = PublicNotifyRequestActionTargetOneOf;
  type pingNotificationsV1PublicNotification_universal_d_ToSiteContributors = ToSiteContributors;
  type pingNotificationsV1PublicNotification_universal_d_Role = Role;
  const pingNotificationsV1PublicNotification_universal_d_Role: typeof Role;
  type pingNotificationsV1PublicNotification_universal_d_ToContacts = ToContacts;
  type pingNotificationsV1PublicNotification_universal_d_ToTopicsSubscribers = ToTopicsSubscribers;
  type pingNotificationsV1PublicNotification_universal_d_Channel = Channel;
  const pingNotificationsV1PublicNotification_universal_d_Channel: typeof Channel;
  type pingNotificationsV1PublicNotification_universal_d_DashboardPages = DashboardPages;
  const pingNotificationsV1PublicNotification_universal_d_DashboardPages: typeof DashboardPages;
  type pingNotificationsV1PublicNotification_universal_d_Empty = Empty;
  const pingNotificationsV1PublicNotification_universal_d_notify: typeof notify;
  type pingNotificationsV1PublicNotification_universal_d_NotifyOptions = NotifyOptions;
  namespace pingNotificationsV1PublicNotification_universal_d {
    export {
      pingNotificationsV1PublicNotification_universal_d_Public_notification as Public_notification,
      pingNotificationsV1PublicNotification_universal_d_PublicNotifyRequest as PublicNotifyRequest,
      pingNotificationsV1PublicNotification_universal_d_PublicNotifyRequestRecipientsFilterOneOf as PublicNotifyRequestRecipientsFilterOneOf,
      pingNotificationsV1PublicNotification_universal_d_PublicNotifyRequestActionTargetOneOf as PublicNotifyRequestActionTargetOneOf,
      pingNotificationsV1PublicNotification_universal_d_ToSiteContributors as ToSiteContributors,
      pingNotificationsV1PublicNotification_universal_d_Role as Role,
      pingNotificationsV1PublicNotification_universal_d_ToContacts as ToContacts,
      pingNotificationsV1PublicNotification_universal_d_ToTopicsSubscribers as ToTopicsSubscribers,
      pingNotificationsV1PublicNotification_universal_d_Channel as Channel,
      pingNotificationsV1PublicNotification_universal_d_DashboardPages as DashboardPages,
      pingNotificationsV1PublicNotification_universal_d_Empty as Empty,
      pingNotificationsV1PublicNotification_universal_d_notify as notify,
      pingNotificationsV1PublicNotification_universal_d_NotifyOptions as NotifyOptions,
    };
  }
  
  export { pingNotificationsV1PublicNotification_universal_d as notifications };
}
