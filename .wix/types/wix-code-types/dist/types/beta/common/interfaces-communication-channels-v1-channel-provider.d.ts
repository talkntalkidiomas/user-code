declare module "interfaces-communication-channels-v1-channel-provider" {
  type BusinessError<T = unknown> = {
      __tag: 'BusinessError';
      httpCode: string;
      errorDescription: string;
      applicationCode: string;
      messageSchema: string;
      data: T;
  };
  
  interface ChannelProvider {
      _id?: string | null;
  }
  interface GetChannelConnectionStatusRequest {
  }
  interface GetChannelConnectionStatusResponse {
      connectionStatus?: ChannelConnectionStatus;
      /** Usage information, can have multiple quotas (regular, booster, etc). */
      quotaInfo?: QuotaInfo[];
  }
  interface ChannelConnectionStatus {
      /** The connected channel account identifier (such as email address / phone number / facebook pageId etc) */
      identifier?: string | null;
      /** State of the connected channel, indicates if channel is valid for sending and receiving messages */
      status?: ConnectionStatus;
  }
  enum ConnectionStatus {
      UNKNOWN_CONNECTION_STATE = "UNKNOWN_CONNECTION_STATE",
      VALID = "VALID",
      DISCONNECTED = "DISCONNECTED",
      INVALID = "INVALID",
      PENDING = "PENDING",
      SUSPENDED = "SUSPENDED"
  }
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
  }
  interface GetQuotaInfoResponse {
      quotaInfo?: QuotaInfo[];
  }
  interface CanSendMessageRequest {
      to?: string | null;
  }
  interface CanSendMessageResponse {
      canSendMessage?: boolean;
      additionalInfo?: CanSendAdditionalInfo;
  }
  interface CanSendAdditionalInfo {
      type?: CanSendInfoType;
      /** get in the spi, and maybe only for logs and not expose in the API */
      message?: string | null;
  }
  enum CanSendInfoType {
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
      to?: Recipient;
      message?: Message;
  }
  interface Recipient {
      email?: EmailRecipient;
      phone?: string | null;
      recipientId?: string | null;
  }
  interface EmailRecipient {
      address?: string;
      name?: string | null;
  }
  interface Message extends MessageContentOneOf {
      directMessage?: DirectMessage;
      emailMessage?: EmailMessage;
      smsMessage?: SmsMessage;
      _id?: string | null;
      _createdDate?: Date;
      messageIdReference?: string | null;
      summary?: string | null;
      messageType?: MessageType;
  }
  /** @oneof */
  interface MessageContentOneOf {
      directMessage?: DirectMessage;
      emailMessage?: EmailMessage;
      smsMessage?: SmsMessage;
  }
  enum MessageType {
      UNKNOWN_MESSAGE_TYPE = "UNKNOWN_MESSAGE_TYPE",
      DIRECT_MESSAGE = "DIRECT_MESSAGE",
      EMAIL = "EMAIL",
      SMS = "SMS"
  }
  interface DirectMessage extends DirectMessagePayloadOneOf {
      /** simple messages */
      textMessage?: TextMessage;
      mediaMessage?: MediaMessage;
      locationMessage?: LocationMessage;
      /** templates */
      cardTemplate?: CardTemplate;
      announcementTemplate?: AnnouncementTemplate;
      formTemplate?: FormTemplate;
      payloadType?: PayloadType;
  }
  /** @oneof */
  interface DirectMessagePayloadOneOf {
      /** simple messages */
      textMessage?: TextMessage;
      mediaMessage?: MediaMessage;
      locationMessage?: LocationMessage;
      /** templates */
      cardTemplate?: CardTemplate;
      announcementTemplate?: AnnouncementTemplate;
      formTemplate?: FormTemplate;
  }
  enum PayloadType {
      UNKNOWN_MESSAGE_TYPE = "UNKNOWN_MESSAGE_TYPE",
      SIMPLE_TEXT = "SIMPLE_TEXT",
      SIMPLE_MEDIA = "SIMPLE_MEDIA",
      SIMPLE_LOCATION = "SIMPLE_LOCATION",
      CARD = "CARD",
      CONTACT = "CONTACT",
      ANNOUNCEMENT = "ANNOUNCEMENT",
      FORM = "FORM",
      ACTIONABLE_FORM = "ACTIONABLE_FORM"
  }
  interface TextMessage {
      mimeType?: TextMimeType;
      content?: string | null;
  }
  enum TextMimeType {
      TEXT_PLAIN = "TEXT_PLAIN"
  }
  interface MediaMessage {
      mimeType?: MediaMimeType;
      /** or URI ? */
      url?: string | null;
      altText?: string | null;
      caption?: string | null;
      fileName?: string | null;
      fileSizeInBytes?: string | null;
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
  interface LocationMessage {
      coordinates?: Coordinates;
      label?: string | null;
      title?: string | null;
      address?: string | null;
  }
  interface Coordinates {
      longitude?: string | null;
      latitude?: string | null;
  }
  interface CardTemplate {
      title?: string | null;
      description?: string | null;
      imageUrl?: string | null;
      orientation?: Orientation;
      buttons?: Button[];
  }
  enum Orientation {
      PORTRAIT = "PORTRAIT",
      LANDSCAPE = "LANDSCAPE"
  }
  interface Button {
      /** todo: explore action types e.g https://docs.smooch.io/guide/channel-capabilities/ */
      type?: ButtonType;
      url?: string | null;
      title?: string | null;
      postbackPayload?: string | null;
  }
  enum ButtonType {
      CTA = "CTA",
      POSTBACK = "POSTBACK",
      POSTBACK_AND_CTA = "POSTBACK_AND_CTA"
  }
  interface AnnouncementTemplate {
      text?: string;
      iconUrl?: string | null;
  }
  interface FormTemplate {
      title?: string | null;
      fields?: FormField[];
  }
  interface FormField {
      label?: string;
      value?: string | null;
  }
  interface EmailMessage {
      /** todo: how do we put here the in_reply_to */
      replyTo?: string | null;
      subject?: string;
      content?: EmailContent[];
      cc?: EmailRecipient[];
      attachments?: EmailAttachment[];
      sentDate?: Date;
  }
  interface EmailContent {
      mimeType?: string;
      content?: string | null;
  }
  interface EmailAttachment {
      _id?: string | null;
      name?: string;
      mimeType?: string | null;
      url?: string;
      fileSizeInBytes?: string | null;
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
      encoding?: string | null;
      body?: string | null;
  }
  interface MediaSMS {
      mimeType?: string | null;
      urls?: string[] | null;
  }
  interface SendMessageResponse {
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
      to?: Recipient;
      status?: MessageStatus;
  }
  interface MessageStatus extends MessageStatusContentOneOf {
      messageSentStatus?: MessageSentStatus;
      messageDeliveredStatus?: MessageDeliveredStatus;
      messageSeenStatus?: MessageSeenStatus;
      failedDeliveryStatus?: FailedDeliveryStatus;
      messageDeletedStatus?: MessageDeletedStatus;
      _id?: string | null;
      messageIdReference?: string | null;
      statusContext?: StatusContext;
      statusType?: StatusType;
  }
  /** @oneof */
  interface MessageStatusContentOneOf {
      messageSentStatus?: MessageSentStatus;
      messageDeliveredStatus?: MessageDeliveredStatus;
      messageSeenStatus?: MessageSeenStatus;
      failedDeliveryStatus?: FailedDeliveryStatus;
      messageDeletedStatus?: MessageDeletedStatus;
  }
  interface StatusContext {
      initiatorId?: string | null;
      statusChangedDate?: Date;
  }
  enum StatusType {
      UNKNOWN_STATUS_TYPE = "UNKNOWN_STATUS_TYPE",
      SENT = "SENT",
      DELIVERED = "DELIVERED",
      SEEN = "SEEN",
      FAILED = "FAILED",
      DELETED = "DELETED"
  }
  interface MessageSentStatus {
  }
  interface MessageDeliveredStatus {
  }
  interface MessageSeenStatus {
  }
  interface FailedDeliveryStatus {
      errorCode?: ErrorCode;
      cause?: string | null;
  }
  enum ErrorCode {
      UNKNOWN_FAILED_CODE = "UNKNOWN_FAILED_CODE",
      PERMISSION_DENIED = "PERMISSION_DENIED",
      MISSING_PERMISSION = "MISSING_PERMISSION",
      /** RATE_LIMIT_EXCEEDED */
      TOO_MANY_REQUESTS = "TOO_MANY_REQUESTS",
      QUOTA_EXCEEDED = "QUOTA_EXCEEDED",
      INVALID_PARAMETER = "INVALID_PARAMETER",
      EXPIRED_ACCESS_TOKEN = "EXPIRED_ACCESS_TOKEN",
      POLICY_VIOLATION = "POLICY_VIOLATION",
      BLOCKED = "BLOCKED",
      MESSAGE_EXPIRED = "MESSAGE_EXPIRED",
      GENERIC_ERROR = "GENERIC_ERROR",
      UNSUPPORTED_MESSAGE_TYPE = "UNSUPPORTED_MESSAGE_TYPE",
      BACKEND_ERROR = "BACKEND_ERROR"
  }
  interface MessageDeletedStatus {
  }
  interface UpdateMessageStatusResponse {
  }
  interface GetRecipientProfileRequest {
      recipient?: Recipient;
  }
  interface GetRecipientProfileResponse {
      profile?: RecipientProfile;
  }
  interface RecipientProfile {
      recipient?: Recipient;
      name?: string;
      firstName?: string | null;
      lastName?: string | null;
      /** todo: use standard image object decomposition */
      profilePicture?: string | null;
  }
  interface CommunicationChannelConfiguration {
      config?: ChannelConfiguration;
  }
  interface ChannelConfiguration extends ChannelConfigurationMessagingConfigOneOf {
      directMessageConfig?: DirectMessageConfig;
      emailMessageConfig?: EmailMessageConfig;
      smsMessageConfig?: SmsMessageConfig;
      /** The type of the communication channel */
      type?: ChannelType;
      /** Specific provider branding parameters for the channel */
      branding?: ChannelBranding;
      /** Conversation initiation definition */
      conversationLimitations?: ConversationLimitations;
  }
  /** @oneof */
  interface ChannelConfigurationMessagingConfigOneOf {
      directMessageConfig?: DirectMessageConfig;
      emailMessageConfig?: EmailMessageConfig;
      smsMessageConfig?: SmsMessageConfig;
  }
  /** The type of the communication channel */
  enum ChannelType {
      UNKNOWN_CHANNEL_TYPE = "UNKNOWN_CHANNEL_TYPE",
      DIRECT_MESSAGING = "DIRECT_MESSAGING",
      EMAIL = "EMAIL",
      SMS = "SMS"
  }
  interface DirectMessageConfig {
      /** When marked as true, there's no need to list the supported types explicitly */
      acceptAllMessageTypes?: boolean;
      /**
       * Direct message types accepted by the provider. only those types will be sent from Wix
       * If all are excepted this field can be left empty and there's no need to explicitly state types
       */
      acceptedMessageTypes?: AcceptedDirectMessageType[];
      /** Elaborates what media types (mime types) and sizes are supported */
      mediaCapabilities?: MediaCapabilities;
  }
  enum AcceptedDirectMessageType {
      TEXT = "TEXT",
      MEDIA = "MEDIA",
      CARD = "CARD",
      ANNOUNCEMENT = "ANNOUNCEMENT",
      FORM = "FORM"
  }
  interface MediaCapabilities {
      /** When marked as true, there's no need to list the supported types explicitly */
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
      /** When marked as true, there's no need to list the supported types explicitly */
      acceptAllMessageTypes?: boolean;
      /** SMS message types accepted by the provider. only those types will be sent from Wix */
      acceptedMessageTypes?: AcceptedSmsMessageType[];
      /** Elaborates what media types (mime types) and sizes are supported */
      mediaCapabilities?: MediaCapabilities;
  }
  enum AcceptedSmsMessageType {
      SMS = "SMS",
      MMS = "MMS"
  }
  interface ChannelBranding {
      /** The name of the channel, e.g. `Facebook` / `SMS` */
      displayName?: string;
      /** Name of the channel provider (Wix, Meta, Google) */
      providerName?: string | null;
      /** Relevant brand icons, used when the channel is integrated */
      brandIcons?: BrandIcons;
  }
  /**
   * Brand icons required for correct channel integration
   * todo: 1. which ones are required ?
   * todo: 2. we may need to specify Icons specs (i.e. format and sizes)
   */
  interface BrandIcons {
      default?: Icon;
      vector?: Icon;
      bwOutlineVector?: Icon;
  }
  interface Icon {
      /** Specific Icon url */
      url?: string | null;
  }
  interface ConversationLimitations {
      /**
       * Defines who can initiate conversation in this channel.
       * If, `CUSTOMER` is selected, this means that only inbound
       * messages can start a conversation (aka business can only reply and not initiate the first communication).
       */
      initDirection?: InitDirection;
  }
  enum InitDirection {
      UNKNOWN_INIT_DIRECTION = "UNKNOWN_INIT_DIRECTION",
      BUSINESS = "BUSINESS",
      CUSTOMER = "CUSTOMER",
      BOTH = "BOTH"
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
  interface CanSendMessageOptions {
      to?: string | null;
  }
  interface SendMessageOptions {
      to?: Recipient;
      message?: Message;
  }
  interface UpdateMessageStatusOptions {
      to?: Recipient;
      status?: MessageStatus;
  }
  interface GetRecipientProfileOptions {
      recipient?: Recipient;
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
  
  export { AcceptedDirectMessageType, AcceptedSmsMessageType, AnnouncementTemplate, AttachmentDisposition, BrandIcons, BusinessError, Button, ButtonType, CanSendAdditionalInfo, CanSendInfoType, CanSendMessageOptions, CanSendMessageRequest, CanSendMessageResponse, CardTemplate, ChannelBranding, ChannelConfiguration, ChannelConfigurationMessagingConfigOneOf, ChannelConnectionStatus, ChannelProvider, ChannelType, CommunicationChannelConfiguration, ConnectionStatus, Context, ConversationLimitations, Coordinates, DirectMessage, DirectMessageConfig, DirectMessagePayloadOneOf, EmailAttachment, EmailContent, EmailMessage, EmailMessageConfig, EmailRecipient, ErrorCode, FailedDeliveryStatus, FeaturePeriod, FieldViolation, FormField, FormTemplate, GetChannelConnectionStatusRequest, GetChannelConnectionStatusResponse, GetQuotaInfoRequest, GetQuotaInfoResponse, GetRecipientProfileOptions, GetRecipientProfileRequest, GetRecipientProfileResponse, Icon, IdentificationData, IdentificationDataIdOneOf, IdentityType, InitDirection, InvalidRecipientError, LocationMessage, MediaCapabilities, MediaMessage, MediaMimeType, MediaSMS, Message, MessageContentOneOf, MessageDeletedStatus, MessageDeliveredStatus, MessageSeenStatus, MessageSentStatus, MessageStatus, MessageStatusContentOneOf, MessageType, Orientation, PayloadType, QuotaInfo, Recipient, RecipientProfile, RuleType, SendMessageOptions, SendMessageRequest, SendMessageResponse, SmsMessage, SmsMessageBodyOneOf, SmsMessageConfig, StatusContext, StatusType, TextMessage, TextMimeType, TextSMS, UpdateMessageStatusOptions, UpdateMessageStatusRequest, UpdateMessageStatusResponse, spiErrorHelpers_d as errorHelpers };
}
