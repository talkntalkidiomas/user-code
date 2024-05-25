declare module "wix-notifications.v3" {
  interface Notification {
      /** The id of the notification */
      _id?: string;
  }
  interface NotifyRequest {
      /**
       * Notification template ID. A notification template specifies the text and recipients for notifications.
       * To obtain a notification template ID, [create a notification template](https://dev.wix.com/api/rest/wix-notifications/notifications/creating-a-notification-template) in the Wix Dev Center.
       */
      notificationTemplateId: string;
      /**
       * Each key is a placeholder name you specify when [creating a notification template](https://dev.wix.com/api/rest/wix-notifications/notifications/creating-a-notification-template).
       * The value is an object containing the text to replace the placeholder in the notifications.
       */
      dynamicValues?: Record<string, DynamicValue>;
  }
  interface DynamicValue extends DynamicValueOfTypeOneOf {
      /** Text to be integrated into the notification. */
      text?: string;
      /**
       * localized money parameter
       * @internal
       */
      money?: Money;
      /**
       * ISO 8601 timestamp
       * @internal
       */
      timestamp?: string;
      /**
       * map
       * @internal
       */
      map?: MapDynamicValue;
      /**
       * array
       * @internal
       */
      array?: ArrayDynamicValue;
      /**
       * Attachment
       * @internal
       */
      attachment?: AttachmentDynamicValue;
  }
  /** @oneof */
  interface DynamicValueOfTypeOneOf {
      /** Text to be integrated into the notification. */
      text?: string;
      /**
       * localized money parameter
       * @internal
       */
      money?: Money;
      /**
       * ISO 8601 timestamp
       * @internal
       */
      timestamp?: string;
      /**
       * map
       * @internal
       */
      map?: MapDynamicValue;
      /**
       * array
       * @internal
       */
      array?: ArrayDynamicValue;
      /**
       * Attachment
       * @internal
       */
      attachment?: AttachmentDynamicValue;
  }
  /**
   * Money.
   * Default format to use. Sufficiently compliant with majority of standards: w3c, ISO 4217, ISO 20022, ISO 8583:2003.
   */
  interface Money {
      /** Monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). Optionally, a single (-), to indicate that the amount is negative. */
      value?: string;
      /** Currency code. Must be valid ISO 4217 currency code (e.g., USD). */
      currency?: string;
      /** Monetary amount. Decimal string in local format (e.g., 1 000,30). Optionally, a single (-), to indicate that the amount is negative. */
      formattedValue?: string | null;
  }
  interface MapDynamicValue {
      /** items */
      items?: Record<string, DynamicValue>;
  }
  interface ArrayDynamicValue {
      /** items */
      items?: DynamicValue[];
  }
  interface AttachmentDynamicValue {
      /** file name */
      fileName?: string;
      /** download url */
      downloadUrl?: string;
  }
  interface NotifyResponse {
      /** ID of the batch of notifications triggered by one request. */
      notificationBatchId?: string;
  }
  interface NotifyByAppRequest {
      /** notification_template_id */
      notificationTemplateId: string;
      /** app_def_id */
      appDefId: string;
      /** dynamic_values */
      dynamicValues?: Record<string, DynamicValue>;
      /** template tenant */
      templateTenant?: string | null;
      /** overrides */
      overrides?: Overrides;
      /** channels content */
      channelsData?: ChannelsData;
  }
  interface Overrides {
      /** excluded_channels */
      excludedChannels?: TemplateChannel[];
      /** excluded_audiences */
      excludedAudiences?: ExcludedAudiences;
      /** content overrides */
      content?: ChannelsContent;
  }
  enum TemplateChannel {
      WEB_FEED = "WEB_FEED",
      MOBILE_FEED = "MOBILE_FEED",
      MOBILE_PUSH = "MOBILE_PUSH",
      BROWSER = "BROWSER",
      SMS = "SMS",
      EMAIL = "EMAIL",
      KAFKA = "KAFKA",
      VOICE = "VOICE"
  }
  interface ExcludedAudiences {
      /** audience_key */
      audienceKey?: string[];
  }
  interface ChannelsContent {
      /** mobile push override */
      mobileContent?: MobileContent;
  }
  interface MobileContent {
      /** title override of mobile push content */
      title?: string;
      /** body override of mobile push content */
      body?: string;
  }
  interface ChannelsData {
      /** email data */
      emailData?: EmailData;
  }
  interface EmailData {
      /** shoutout action config */
      shoutoutActionConfig?: Record<string, any> | null;
  }
  interface NotifyByAppResponse {
      /** notification_batch_id */
      notificationBatchId?: string;
  }
  /**
   * notifyUserLevelTest
   * @param notificationTemplateId - Notification template ID. A notification template specifies the text and recipients for notifications.
   * To obtain a notification template ID, [create a notification template](https://dev.wix.com/api/rest/wix-notifications/notifications/creating-a-notification-template) in the Wix Dev Center.
   * @internal
   * @documentationMaturity preview
   * @requiredField notificationTemplateId
   * @adminMethod
   */
  function notifyUserLevelTest(notificationTemplateId: string, options?: NotifyUserLevelTestOptions): Promise<NotifyResponse>;
  interface NotifyUserLevelTestOptions {
      /**
       * Each key is a placeholder name you specify when [creating a notification template](https://dev.wix.com/api/rest/wix-notifications/notifications/creating-a-notification-template).
       * The value is an object containing the text to replace the placeholder in the notifications.
       */
      dynamicValues?: Record<string, DynamicValue>;
  }
  /**
   * Sends notifications based on the template and dynamic values provided.
   *
   * > This feature is not yet available to all users.
   *
   * An app can call this endpoint up to 100,000 times per month for each site.
   *
   * When you [create a notification template](https://dev.wix.com/api/rest/wix-notifications/notifications/creating-a-notification-template) in the Wix Dev Center, you are given a notification template ID.
   * Call the Notify endpoint with this ID as `notificationTemplateID` to trigger notifications based on the notification template.
   * If the notification template contains placeholders for dynamic values, provide those values as key-value pairs in the `dynamicValues` array.
   * The values you specify are incorporated seamlessly in the notifications sent out.
   * @param notificationTemplateId - Notification template ID. A notification template specifies the text and recipients for notifications.
   * To obtain a notification template ID, [create a notification template](https://dev.wix.com/api/rest/wix-notifications/notifications/creating-a-notification-template) in the Wix Dev Center.
   * @public
   * @documentationMaturity preview
   * @requiredField notificationTemplateId
   * @adminMethod
   */
  function notify(notificationTemplateId: string, options?: NotifyOptions): Promise<NotifyResponse>;
  interface NotifyOptions {
      /**
       * Each key is a placeholder name you specify when [creating a notification template](https://dev.wix.com/api/rest/wix-notifications/notifications/creating-a-notification-template).
       * The value is an object containing the text to replace the placeholder in the notifications.
       */
      dynamicValues?: Record<string, DynamicValue>;
  }
  /**
   * NotifyByApp
   * @param notificationTemplateId - notification_template_id
   * @internal
   * @documentationMaturity preview
   * @requiredField notificationTemplateId
   * @requiredField options.appDefId
   * @adminMethod
   */
  function notifyByApp(notificationTemplateId: string, options?: NotifyByAppOptions): Promise<NotifyByAppResponse>;
  interface NotifyByAppOptions {
      /** app_def_id */
      appDefId: string;
      /** dynamic_values */
      dynamicValues?: Record<string, DynamicValue>;
      /** template tenant */
      templateTenant?: string | null;
      /** overrides */
      overrides?: Overrides;
      /** channels content */
      channelsData?: ChannelsData;
  }
  
  type pingNotificationsV3Notification_universal_d_Notification = Notification;
  type pingNotificationsV3Notification_universal_d_NotifyRequest = NotifyRequest;
  type pingNotificationsV3Notification_universal_d_DynamicValue = DynamicValue;
  type pingNotificationsV3Notification_universal_d_DynamicValueOfTypeOneOf = DynamicValueOfTypeOneOf;
  type pingNotificationsV3Notification_universal_d_Money = Money;
  type pingNotificationsV3Notification_universal_d_MapDynamicValue = MapDynamicValue;
  type pingNotificationsV3Notification_universal_d_ArrayDynamicValue = ArrayDynamicValue;
  type pingNotificationsV3Notification_universal_d_AttachmentDynamicValue = AttachmentDynamicValue;
  type pingNotificationsV3Notification_universal_d_NotifyResponse = NotifyResponse;
  type pingNotificationsV3Notification_universal_d_NotifyByAppRequest = NotifyByAppRequest;
  type pingNotificationsV3Notification_universal_d_Overrides = Overrides;
  type pingNotificationsV3Notification_universal_d_TemplateChannel = TemplateChannel;
  const pingNotificationsV3Notification_universal_d_TemplateChannel: typeof TemplateChannel;
  type pingNotificationsV3Notification_universal_d_ExcludedAudiences = ExcludedAudiences;
  type pingNotificationsV3Notification_universal_d_ChannelsContent = ChannelsContent;
  type pingNotificationsV3Notification_universal_d_MobileContent = MobileContent;
  type pingNotificationsV3Notification_universal_d_ChannelsData = ChannelsData;
  type pingNotificationsV3Notification_universal_d_EmailData = EmailData;
  type pingNotificationsV3Notification_universal_d_NotifyByAppResponse = NotifyByAppResponse;
  const pingNotificationsV3Notification_universal_d_notifyUserLevelTest: typeof notifyUserLevelTest;
  type pingNotificationsV3Notification_universal_d_NotifyUserLevelTestOptions = NotifyUserLevelTestOptions;
  const pingNotificationsV3Notification_universal_d_notify: typeof notify;
  type pingNotificationsV3Notification_universal_d_NotifyOptions = NotifyOptions;
  const pingNotificationsV3Notification_universal_d_notifyByApp: typeof notifyByApp;
  type pingNotificationsV3Notification_universal_d_NotifyByAppOptions = NotifyByAppOptions;
  namespace pingNotificationsV3Notification_universal_d {
    export {
      pingNotificationsV3Notification_universal_d_Notification as Notification,
      pingNotificationsV3Notification_universal_d_NotifyRequest as NotifyRequest,
      pingNotificationsV3Notification_universal_d_DynamicValue as DynamicValue,
      pingNotificationsV3Notification_universal_d_DynamicValueOfTypeOneOf as DynamicValueOfTypeOneOf,
      pingNotificationsV3Notification_universal_d_Money as Money,
      pingNotificationsV3Notification_universal_d_MapDynamicValue as MapDynamicValue,
      pingNotificationsV3Notification_universal_d_ArrayDynamicValue as ArrayDynamicValue,
      pingNotificationsV3Notification_universal_d_AttachmentDynamicValue as AttachmentDynamicValue,
      pingNotificationsV3Notification_universal_d_NotifyResponse as NotifyResponse,
      pingNotificationsV3Notification_universal_d_NotifyByAppRequest as NotifyByAppRequest,
      pingNotificationsV3Notification_universal_d_Overrides as Overrides,
      pingNotificationsV3Notification_universal_d_TemplateChannel as TemplateChannel,
      pingNotificationsV3Notification_universal_d_ExcludedAudiences as ExcludedAudiences,
      pingNotificationsV3Notification_universal_d_ChannelsContent as ChannelsContent,
      pingNotificationsV3Notification_universal_d_MobileContent as MobileContent,
      pingNotificationsV3Notification_universal_d_ChannelsData as ChannelsData,
      pingNotificationsV3Notification_universal_d_EmailData as EmailData,
      pingNotificationsV3Notification_universal_d_NotifyByAppResponse as NotifyByAppResponse,
      pingNotificationsV3Notification_universal_d_notifyUserLevelTest as notifyUserLevelTest,
      pingNotificationsV3Notification_universal_d_NotifyUserLevelTestOptions as NotifyUserLevelTestOptions,
      pingNotificationsV3Notification_universal_d_notify as notify,
      pingNotificationsV3Notification_universal_d_NotifyOptions as NotifyOptions,
      pingNotificationsV3Notification_universal_d_notifyByApp as notifyByApp,
      pingNotificationsV3Notification_universal_d_NotifyByAppOptions as NotifyByAppOptions,
    };
  }
  
  export { pingNotificationsV3Notification_universal_d as notifications };
}
