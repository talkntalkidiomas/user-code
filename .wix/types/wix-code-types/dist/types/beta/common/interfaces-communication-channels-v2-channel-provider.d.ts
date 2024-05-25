declare module "interfaces-communication-channels-v2-channel-provider" {
  type BusinessError<T = unknown> = {
      __tag: 'BusinessError';
      httpCode: string;
      errorDescription: string;
      applicationCode: string;
      messageSchema: string;
      data: T;
  };
  
  interface GetChannelConnectionStatusRequest {
      channelKey?: string;
  }
  interface GetChannelConnectionStatusResponse {
      /**
       * todo: check if this isn't something available from the dev center somehow? other providers has to somehow connect as well
       * The connected channel account identifier (such as email address / phone number / facebook page name etc). Has to be human-readable.
       */
      connectedEntityDisplayName?: string | null;
      /** State of the connected channel, indicates if channel is valid for sending and receiving messages */
      status?: ConnectionStatus;
      /** Usage information, can have multiple quotas (regular, booster, etc). */
      quotaInfo?: QuotaInfo[];
  }
  enum ConnectionStatus {
      UNKNOWN_CONNECTION_STATE = "UNKNOWN_CONNECTION_STATE",
      VALID = "VALID",
      DISCONNECTED = "DISCONNECTED",
      INVALID = "INVALID",
      PENDING = "PENDING",
      SUSPENDED = "SUSPENDED",
      SERVICE_UNAVAILABLE = "SERVICE_UNAVAILABLE"
  }
  /** todo: maybe we should align this with automations? https://github.com/wix-private/wix-automations/blob/master/action-spi-provider/src/main/proto/com/wixpress/esb/spi/action/v1/action_quota.proto */
  interface QuotaInfo {
      /** Name of the plan this quote is applied to. */
      planName?: string;
      /** Upcoming renewal date of the plan this quote is applied to. */
      planRenewalDate?: Date;
      /** Quantity usage limitation, for the specific period */
      limit?: string | null;
      /** Period the limitation applies to. */
      period?: FeaturePeriod;
      /** Counted usages until this moment. */
      currentUsage?: string;
      /**
       * Remaining amount that can be used.
       * Will be set to None in case for an unlimited usage feature
       */
      remainingUsage?: string | null;
  }
  /** Determines the cycle of the feature usage. */
  enum FeaturePeriod {
      NO_PERIOD = "NO_PERIOD",
      MILLISECOND = "MILLISECOND",
      SECOND = "SECOND",
      MINUTE = "MINUTE",
      HOUR = "HOUR",
      DAY = "DAY",
      WEEK = "WEEK",
      MONTH = "MONTH",
      YEAR = "YEAR"
  }
  interface GetQuotaInfoRequest {
      channelKey?: string;
  }
  interface GetQuotaInfoResponse {
      quotaInfo?: QuotaInfo[];
  }
  interface CanSendMessageRequest {
      channelKey?: string;
      to?: Recipient;
  }
  interface Recipient extends RecipientRecipientOneOf {
      emailOptions?: string;
      phoneOptions?: string;
      /** participant id (for direct messaging channel) */
      recipientIdOptions?: string;
      /** The recipient id */
      recipientId?: RecipientId;
      /** Identification type. The recipient field's structure is depend on this value */
      type?: IdentificationType;
  }
  /** @oneof */
  interface RecipientRecipientOneOf {
      emailOptions?: string;
      phoneOptions?: string;
      /** participant id (for direct messaging channel) */
      recipientIdOptions?: string;
  }
  interface RecipientId extends RecipientIdIdOneOf {
      /**
       * ID of a site
       * [contact](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fcontacts).
       */
      contactId?: string;
      /** ID of an anonymous site visitor. */
      anonymousVisitorId?: string;
  }
  /** @oneof */
  interface RecipientIdIdOneOf {
      /**
       * ID of a site
       * [contact](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fcontacts).
       */
      contactId?: string;
      /** ID of an anonymous site visitor. */
      anonymousVisitorId?: string;
  }
  enum IdentificationType {
      UNKNOWN_IDENTIFICATION_TYPE = "UNKNOWN_IDENTIFICATION_TYPE",
      EMAIL = "EMAIL",
      PHONE = "PHONE",
      RECIPIENT_ID = "RECIPIENT_ID"
  }
  interface CanSendMessageResponse {
      canSendMessage?: boolean;
      remark?: CanSendRemarkType;
  }
  enum CanSendRemarkType {
      UNKNOWN_ADDITIONAL_INFO_TYPE = "UNKNOWN_ADDITIONAL_INFO_TYPE",
      RECIPIENT_UNSUBSCRIBED = "RECIPIENT_UNSUBSCRIBED",
      RECIPIENT_BLOCKED = "RECIPIENT_BLOCKED",
      INVALID_RECIPIENT = "INVALID_RECIPIENT",
      ADDITIONAL_ACTION_REQUIRED = "ADDITIONAL_ACTION_REQUIRED",
      QUOTA_EXCEEDED = "QUOTA_EXCEEDED",
      TOO_MANY_REQUESTS = "TOO_MANY_REQUESTS",
      ACCOUNT_CONNECTION_NOT_ACTIVE = "ACCOUNT_CONNECTION_NOT_ACTIVE"
  }
  interface SendMessageRequest {
      channelKey?: string;
      to?: Recipient;
      message?: Message;
  }
  interface Message extends MessageContentOneOf {
      directMessageOptions?: DirectMessage;
      emailOptions?: EmailMessage;
      smsOptions?: SmsMessage;
      /** Message identification (will be generated by the host) */
      _id?: string;
      /**
       * The creation date of the message (will be used for idempotency)
       * @readonly
       */
      _createdDate?: Date;
      /** The type of the message (the content will be decided by this type) */
      messageType?: MessageType;
  }
  /** @oneof */
  interface MessageContentOneOf {
      directMessageOptions?: DirectMessage;
      emailOptions?: EmailMessage;
      smsOptions?: SmsMessage;
  }
  enum MessageType {
      UNKNOWN_MESSAGE_TYPE = "UNKNOWN_MESSAGE_TYPE",
      DIRECT_MESSAGE = "DIRECT_MESSAGE",
      EMAIL = "EMAIL",
      SMS = "SMS"
  }
  interface DirectMessage extends DirectMessagePayloadOneOf {
      /** simple messages */
      simpleTextOptions?: PlainTextMessage;
      simpleMediaOptions?: MediaMessage;
      /** templates */
      cardOptions?: CardTemplate;
      minimalOptions?: MinimalTemplate;
      formOptions?: FormTemplate;
      systemOptions?: SystemTemplate;
      /** The type of the message payload. The payload structure will be decided by that value. */
      payloadType?: PayloadType;
  }
  /** @oneof */
  interface DirectMessagePayloadOneOf {
      /** simple messages */
      simpleTextOptions?: PlainTextMessage;
      simpleMediaOptions?: MediaMessage;
      /** templates */
      cardOptions?: CardTemplate;
      minimalOptions?: MinimalTemplate;
      formOptions?: FormTemplate;
      systemOptions?: SystemTemplate;
  }
  enum PayloadType {
      UNKNOWN_MESSAGE_TYPE = "UNKNOWN_MESSAGE_TYPE",
      SIMPLE_TEXT = "SIMPLE_TEXT",
      SIMPLE_MEDIA = "SIMPLE_MEDIA",
      CARD = "CARD",
      MINIMAL = "MINIMAL",
      FORM = "FORM",
      SYSTEM = "SYSTEM"
  }
  interface PlainTextMessage {
      content?: string;
  }
  interface MediaMessage {
      /** The mime-type of the media */
      mimeType?: MediaMimeType;
      /** The URL of the media */
      url?: string | null;
      /** Alternate text for the media */
      altText?: string | null;
      /** The caption of the media */
      caption?: string | null;
      /** The file name of the media */
      fileName?: string | null;
      /** The size of the file in bytes */
      fileSizeInBytes?: string | null;
      /** The length of the media (if available) */
      lengthInMs?: string | null;
  }
  /** Mime type for relevant media entities in channels */
  enum MediaMimeType {
      UNKNOWN_MIME_TYPE = "UNKNOWN_MIME_TYPE",
      IMAGE_JPEG = "IMAGE_JPEG",
      IMAGE_PNG = "IMAGE_PNG",
      IMAGE_WEBP = "IMAGE_WEBP",
      VIDEO_MPEG = "VIDEO_MPEG",
      VIDEO_MP4 = "VIDEO_MP4",
      VIDEO_3GP = "VIDEO_3GP",
      AUDIO_AAC = "AUDIO_AAC",
      AUDIO_MP4 = "AUDIO_MP4",
      AUDIO_MPEG = "AUDIO_MPEG",
      AUDIO_OGG = "AUDIO_OGG",
      AUDIO_OPUS = "AUDIO_OPUS",
      APPLICATION_PDF = "APPLICATION_PDF",
      APPLICATION_OCTET_STREAM = "APPLICATION_OCTET_STREAM"
  }
  interface CardTemplate {
      /** Title displayed in the message. */
      title?: string | null;
      /** List of buttons to display with the message. */
      buttons?: Button[];
      /** Controls whether the message is displayed in portrait or landscape layout. */
      orientation?: Orientation;
      /**
       * an icon key
       * @internal
       */
      icon?: string | null;
      /** List of lines of text */
      textLines?: string[];
      /** URL where the icon is hosted. */
      imageUrl?: string | null;
  }
  interface Button {
      /** The type of the button */
      type?: ButtonType;
      /** The URL of the button to be triggered when clicked */
      url?: string | null;
      /** The title of the button */
      title?: string | null;
  }
  enum ButtonType {
      UNKNOWN_BUTTON_TYPE = "UNKNOWN_BUTTON_TYPE",
      CTA = "CTA"
  }
  enum Orientation {
      UNKNOWN_ORIENTATION = "UNKNOWN_ORIENTATION",
      PORTRAIT = "PORTRAIT",
      LANDSCAPE = "LANDSCAPE"
  }
  interface MinimalTemplate {
      /** Text message */
      text?: string;
      /** Icon URL */
      iconUrl?: string | null;
  }
  interface FormTemplate {
      /** The title of the form */
      title?: string | null;
      /** The fields of the form */
      fields?: FormField[];
  }
  interface FormField {
      /** The label of the field */
      label?: string;
      /** The value of the field */
      value?: string | null;
  }
  interface SystemTemplate {
      /** Text message */
      text?: string;
      /** List of buttons to display with the message */
      buttons?: Button[];
      /** URL where the icon is hosted */
      imageUrl?: string | null;
  }
  interface EmailMessage {
      /** The reply-to email in case it's relevant */
      replyTo?: string | null;
      /** The subject of the email */
      subject?: string;
      /** The content of the email */
      content?: EmailContent[];
      /** The CC recipient in case it's relevant */
      cc?: EmailRecipient[];
      /** The attachments of the email */
      attachments?: EmailAttachment[];
  }
  interface EmailContent {
      /** The email content type (HTML, plain text) */
      mimeType?: string;
      /** The content of the email */
      content?: string | null;
  }
  interface EmailRecipient {
      email?: string;
      name?: string | null;
  }
  interface EmailAttachment {
      /** The id of the attachment */
      _id?: string | null;
      /** Name of the attachment */
      name?: string;
      /** Mime Type of the attachment */
      mimeType?: string | null;
      /** The URL represents the attachment */
      url?: string;
      /** The size of the attachment in bytes */
      fileSizeInBytes?: string | null;
      /** Where should the attachment be presented (inline / attachment) */
      disposition?: AttachmentDisposition;
  }
  enum AttachmentDisposition {
      ATTACHMENT = "ATTACHMENT",
      INLINE = "INLINE"
  }
  interface SmsMessage extends SmsMessageBodyOneOf {
      text?: TextSMS;
      mms?: MediaSMS;
  }
  /** @oneof */
  interface SmsMessageBodyOneOf {
      text?: TextSMS;
      mms?: MediaSMS;
  }
  interface TextSMS {
      /** The encoding of the content */
      encoding?: string | null;
      /** The content of the SMS */
      body?: string | null;
  }
  interface MediaSMS {
      /** The mime-type of the media */
      mimeType?: string | null;
      /** The URLs of the media */
      urls?: string[] | null;
      /** The total files size in bytes */
      totalFilesSizeInBytes?: string | null;
      /** The number of files */
      numberOfFiles?: number | null;
  }
  interface SendMessageResponse {
      /** todo: this will affect the id mapping DB */
      externalMessageId?: string;
  }
  interface InvalidRecipientError {
      fields?: FieldViolation[];
  }
  interface FieldViolation {
      field?: string;
      description?: string;
      violatedRule?: RuleType;
      /** applicable when violated_rule=OTHER */
      ruleName?: string | null;
      data?: Record<string, any> | null;
  }
  enum RuleType {
      VALIDATION = "VALIDATION",
      OTHER = "OTHER",
      MAX = "MAX",
      MIN = "MIN",
      MAX_LENGTH = "MAX_LENGTH",
      MIN_LENGTH = "MIN_LENGTH",
      MAX_SIZE = "MAX_SIZE",
      MIN_SIZE = "MIN_SIZE",
      FORMAT = "FORMAT",
      DECIMAL_LTE = "DECIMAL_LTE",
      DECIMAL_GTE = "DECIMAL_GTE",
      DECIMAL_LT = "DECIMAL_LT",
      DECIMAL_GT = "DECIMAL_GT",
      DECIMAL_MAX_SCALE = "DECIMAL_MAX_SCALE",
      INVALID_ENUM_VALUE = "INVALID_ENUM_VALUE",
      REQUIRED_FIELD = "REQUIRED_FIELD",
      FIELD_NOT_ALLOWED = "FIELD_NOT_ALLOWED",
      ONE_OF_ALIGNMENT = "ONE_OF_ALIGNMENT"
  }
  interface UpdateMessageStatusRequest {
      channelKey?: string;
      to?: Recipient;
      status?: MessageStatus;
  }
  interface MessageStatus {
      /** The timestamp of the status */
      timestamp?: Date;
      /** for DM it's not a must, for email / sms it is */
      messageIdReference?: string | null;
      /** The status of the message */
      statusType?: StatusType;
      /** Descriptive information about the status in case its FAILED */
      failedStatusDescription?: FailedDeliveryStatus;
  }
  enum StatusType {
      UNKNOWN_STATUS_TYPE = "UNKNOWN_STATUS_TYPE",
      SENT = "SENT",
      DELIVERED = "DELIVERED",
      SEEN = "SEEN",
      FAILED = "FAILED",
      DELETED = "DELETED"
  }
  interface FailedDeliveryStatus {
      errorReason?: ErrorCode;
  }
  enum ErrorCode {
      /** General / Service / Provider availability / connectivity errors */
      UNKNOWN_FAILED_CODE = "UNKNOWN_FAILED_CODE",
      /** Provider or the integrator is down / or temporarily down */
      SERVICE_UNAVAILABLE = "SERVICE_UNAVAILABLE",
      /** Generic Error that might be solved by sending again */
      UNEXPECTED_ERROR_RETRY_LATER = "UNEXPECTED_ERROR_RETRY_LATER",
      /** Channel connection got invalid on the provider side, probably need to check the connection or reconnect */
      ACCESS_TOKEN_EXPIRED = "ACCESS_TOKEN_EXPIRED",
      /** Number of messages sent limitation errors */
      RATE_LIMIT_ERROR = "RATE_LIMIT_ERROR",
      /** 429 too many requests, or throttling activated */
      TOO_MANY_REQUESTS = "TOO_MANY_REQUESTS",
      /** Quota limitation was reached or exceeded */
      QUOTA_EXCEEDED = "QUOTA_EXCEEDED",
      /** Recipient Deliverability Errors */
      NO_MATCHING_RECIPIENT_FOUND = "NO_MATCHING_RECIPIENT_FOUND",
      /** Invalid Email Address */
      INVALID_RECIPIENT_ADDRESS = "INVALID_RECIPIENT_ADDRESS",
      /** Invalid Phone Number */
      INVALID_PHONE_NUMBER = "INVALID_PHONE_NUMBER",
      /** Recipient can not receive messages at the moment, try again later */
      RECIPIENT_NOT_AVAILABLE = "RECIPIENT_NOT_AVAILABLE",
      /** Recipient has blocked receiving messages from the business */
      RECIPIENT_BLOCKED_MESSAGES = "RECIPIENT_BLOCKED_MESSAGES",
      /** Message wasn't sent because it’s a landline number */
      LANDLINE_OR_UNREACHABLE_CARRIER = "LANDLINE_OR_UNREACHABLE_CARRIER",
      /** Message Validation Errors */
      INVALID_CHARACTERS = "INVALID_CHARACTERS",
      /** Provider does not support the sent message type */
      UNSUPPORTED_MESSAGE_TYPE = "UNSUPPORTED_MESSAGE_TYPE",
      /** Attachment size is too big */
      ATTACHMENT_SIZE_EXCEEDS_ALLOWED_LIMIT = "ATTACHMENT_SIZE_EXCEEDS_ALLOWED_LIMIT",
      /** Total Attachments combined size is too big */
      TOTAL_ATTACHMENTS_SIZE_EXCEEDS_ALLOWED_LIMIT = "TOTAL_ATTACHMENTS_SIZE_EXCEEDS_ALLOWED_LIMIT",
      /** Receiving phone number can not accept MMS messages */
      MMS_NOT_SUPPORTED_RECEIVING_PHONE_NUMBER = "MMS_NOT_SUPPORTED_RECEIVING_PHONE_NUMBER",
      /** Messages Can not be sent errors */
      ALLOWED_MESSAGING_TIME_WINDOW_EXPIRED = "ALLOWED_MESSAGING_TIME_WINDOW_EXPIRED",
      /** Message Violated Providers Policy */
      POLICY_VIOLATION = "POLICY_VIOLATION",
      /** Message wasn't sent because it was flagged by a carrier / provider for going against their guidelines, or marked as spam */
      MESSAGE_FILTERED = "MESSAGE_FILTERED",
      CAMPAIGN_SUSPENDED = "CAMPAIGN_SUSPENDED"
  }
  interface UpdateMessageStatusResponse {
  }
  interface CommunicationChannelConfiguration {
      /** The main configuration of the channel */
      config?: ChannelConfiguration;
      /** States whether or not specific methods were implemented by the provider in order to know whether to call them in runtime or not */
      implementedMethods?: ImplementedMethods;
  }
  interface ChannelConfiguration extends ChannelConfigurationMessagingConfigOneOf {
      directMessagingOptions?: DirectMessageConfig;
      emailOptions?: EmailMessageConfig;
      smsOptions?: SmsMessageConfig;
      /** Unique identifier in the scope of an app. Must be Camel/Snake case */
      channelKey?: string;
      /** The type of the communication channel */
      type?: ChannelType;
      /** Specific provider branding parameters for the channel */
      branding?: ChannelBranding;
  }
  /** @oneof */
  interface ChannelConfigurationMessagingConfigOneOf {
      directMessagingOptions?: DirectMessageConfig;
      emailOptions?: EmailMessageConfig;
      smsOptions?: SmsMessageConfig;
  }
  /** The type of the communication channel */
  enum ChannelType {
      UNKNOWN_CHANNEL_TYPE = "UNKNOWN_CHANNEL_TYPE",
      DIRECT_MESSAGING = "DIRECT_MESSAGING",
      EMAIL = "EMAIL",
      SMS = "SMS"
  }
  interface DirectMessageConfig {
      /**
       * Direct message types accepted by the provider. only those types will be sent from Wix
       * If all are excepted this field can be left empty and there's no need to explicitly state types
       * When we have new template type - user will have to update the app after the provider updates it
       */
      acceptedMessageTypes?: AcceptedDirectMessageType[];
      /** Elaborates what media types (mime types) and sizes are supported */
      mediaCapabilities?: MediaCapabilities;
      /** Defines whether or not sending messages will be available for recipients without contact Id */
      allowAnonymousRecipients?: boolean;
      /**
       * TODO we might consider changing/removing this field on next phases due to a strong dependency on Wix live site
       * Indicates whether or not the channel requires a live Wix website for a proper end to end channel functionality,
       * (for example, a live site is required for chat use case)
       */
      requireLiveSite?: boolean;
  }
  /**
   * 'TEXT' type is being taken for granted. There is no communication channel that does not support TEXT.
   * All those types are additional to 'TEXT'
   */
  enum AcceptedDirectMessageType {
      UNKNOWN_DIRECT_MESSAGE_TYPE = "UNKNOWN_DIRECT_MESSAGE_TYPE",
      MEDIA = "MEDIA",
      CARD = "CARD",
      MINIMAL = "MINIMAL",
      FORM = "FORM",
      SYSTEM = "SYSTEM"
  }
  interface MediaCapabilities {
      /**
       * When marked as true, there's no need to list the supported types explicitly. The 'supported_media_types' will be ignored.
       * When marked as false, the list below has to be filled explicitly
       */
      allMediaTypes?: boolean;
      /**
       * List for supported media types
       * If all are excepted this field can be left empty and there's no need to explicitly state types
       */
      supportedMediaTypes?: MediaMimeType[];
      /** Maximum file size in bytes of a single file in a message */
      maxFileSizeInBytes?: number | null;
  }
  interface EmailMessageConfig {
      /** Media (Attachment) types accepted by the provider */
      mediaCapabilities?: MediaCapabilities;
      /** Maximum size in bytes of total media items in a message. */
      maxTotalFilesSizeInBytes?: number | null;
  }
  interface SmsMessageConfig {
      /** SMS message types accepted by the provider. only those types will be sent from Wix */
      acceptedMessageTypes?: AcceptedSmsMessageType[];
      /** Elaborates what media types (mime types) and sizes are supported */
      mediaCapabilities?: MediaCapabilities;
      /** Optional - maximum sms message length in characters, if not given, will be unlimited */
      maxCharacters?: string | null;
  }
  enum AcceptedSmsMessageType {
      UNKNOWN_SMS_MESSAGE_TYPE = "UNKNOWN_SMS_MESSAGE_TYPE",
      SMS = "SMS",
      MMS = "MMS"
  }
  interface ChannelBranding {
      /** The name of the channel, e.g. `Facebook` / `SMS` */
      displayName?: string;
      /** The name of the channel provider (Wix, Meta, Google) */
      providerName?: string;
      /** The description of the channel */
      description?: string | null;
      /** Relevant brand icons */
      brandIcons?: BrandIcons;
  }
  /** Brand icons required for correct channel integration */
  interface BrandIcons {
      /** Channel branding vector Icon */
      vector?: string;
      /** Channel branding Black & White Icon */
      bwOutlineVector?: string;
  }
  interface ImplementedMethods {
      /** Implements getQuotaInfo */
      getQuotaInfo?: boolean;
      /** Implements canSendMessage */
      canSendMessage?: boolean;
      /** Implements updateMessageStatus */
      updateMessageStatus?: boolean;
  }
  /**
   * this message is not directly used by any service,
   * it exists to describe the expected parameters that SHOULD be provided to invoked Velo methods as part of open-platform.
   * e.g. SPIs, event-handlers, etc..
   * NOTE: this context object MUST be provided as the last argument in each Velo method signature.
   *
   * Example:
   * ```typescript
   * export function wixStores_onOrderCanceled(event: OrderCanceledEvent, context: Context) {
   * ...
   * }
   * ```
   */
  interface Context {
      /** A unique identifier for each request. Can be used for logging / troubleshooting */
      requestId?: string | null;
      /** 3 capital letters string representing a currency according to ISO-4217 */
      currency?: string | null;
      /** The identification type and identity data */
      identity?: IdentificationData;
      /** A string representing a language and region in the format of "xx-XX". First 2 letters represent the language code according to ISO 639-1. This is followed by a dash "-", and then a by 2 capital letters representing the region according to ISO 3166-2 */
      languages?: string[];
      /** App instance ID of SPI in context */
      instanceId?: string | null;
  }
  enum IdentityType {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  interface IdentificationData extends IdentificationDataIdOneOf {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
      /** @readonly */
      identityType?: IdentityType;
  }
  /** @oneof */
  interface IdentificationDataIdOneOf {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
  }
  interface GetChannelConnectionStatusOptions {
      channelKey?: string;
  }
  interface GetQuotaInfoOptions {
      channelKey?: string;
  }
  interface CanSendMessageOptions {
      channelKey?: string;
      to?: Recipient;
  }
  interface SendMessageOptions {
      channelKey?: string;
      to?: Recipient;
      message?: Message;
  }
  interface UpdateMessageStatusOptions {
      channelKey?: string;
      to?: Recipient;
      status?: MessageStatus;
  }
  
  function invalidRecipient$1(data: InvalidRecipientError): BusinessError<InvalidRecipientError>;
  
  namespace sendMessageSpiErrors_d {
    export {
      invalidRecipient$1 as invalidRecipient,
    };
  }
  
  function invalidRecipient(data: InvalidRecipientError): BusinessError<InvalidRecipientError>;
  
  const updateMessageStatusSpiErrors_d_invalidRecipient: typeof invalidRecipient;
  namespace updateMessageStatusSpiErrors_d {
    export {
      updateMessageStatusSpiErrors_d_invalidRecipient as invalidRecipient,
    };
  }
  
  namespace spiErrorHelpers_d {
    export {
      sendMessageSpiErrors_d as sendMessage,
      updateMessageStatusSpiErrors_d as updateMessageStatus,
    };
  }
  
  export { AcceptedDirectMessageType, AcceptedSmsMessageType, AttachmentDisposition, BrandIcons, BusinessError, Button, ButtonType, CanSendMessageOptions, CanSendMessageRequest, CanSendMessageResponse, CanSendRemarkType, CardTemplate, ChannelBranding, ChannelConfiguration, ChannelConfigurationMessagingConfigOneOf, ChannelType, CommunicationChannelConfiguration, ConnectionStatus, Context, DirectMessage, DirectMessageConfig, DirectMessagePayloadOneOf, EmailAttachment, EmailContent, EmailMessage, EmailMessageConfig, EmailRecipient, ErrorCode, FailedDeliveryStatus, FeaturePeriod, FieldViolation, FormField, FormTemplate, GetChannelConnectionStatusOptions, GetChannelConnectionStatusRequest, GetChannelConnectionStatusResponse, GetQuotaInfoOptions, GetQuotaInfoRequest, GetQuotaInfoResponse, IdentificationData, IdentificationDataIdOneOf, IdentificationType, IdentityType, ImplementedMethods, InvalidRecipientError, MediaCapabilities, MediaMessage, MediaMimeType, MediaSMS, Message, MessageContentOneOf, MessageStatus, MessageType, MinimalTemplate, Orientation, PayloadType, PlainTextMessage, QuotaInfo, Recipient, RecipientId, RecipientIdIdOneOf, RecipientRecipientOneOf, RuleType, SendMessageOptions, SendMessageRequest, SendMessageResponse, SmsMessage, SmsMessageBodyOneOf, SmsMessageConfig, StatusType, SystemTemplate, TextSMS, UpdateMessageStatusOptions, UpdateMessageStatusRequest, UpdateMessageStatusResponse, spiErrorHelpers_d as errorHelpers };
}
