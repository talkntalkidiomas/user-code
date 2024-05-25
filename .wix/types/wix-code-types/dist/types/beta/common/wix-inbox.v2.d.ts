declare module "wix-inbox.v2" {
  interface Conversation {
      /**
       * Conversation ID.
       * @readonly
       */
      _id?: string;
      /**
       * ID of the visitor, contact, or member who is chatting with the business.
       * @readonly
       */
      participant?: IdentificationData$1;
      /**
       * List of communication channels where the visitor, contact, or member can receive messages.
       *
       * Supported values: `"CHAT"`, `"EMAIL"`, `"SMS"`, `"FACEBOOK"`, `"INSTAGRAM"`, `"WHATSAPP"`.
       * @readonly
       */
      channels?: ChannelType$1[];
      /** Display name and avatar for the business. */
      businessDisplayData?: ConversationDisplayData;
      /** Display name and avatar for the visitor, contact, or member. */
      participantDisplayData?: ConversationDisplayData;
  }
  interface IdentificationData$1 extends IdentificationDataIdOneOf$1 {
      /** ID of an anonymous site visitor. */
      anonymousVisitorId?: string;
      /** ID of a site member. */
      memberId?: string;
      /**
       * ID of a site contact.
       * @readonly
       */
      contactId?: string | null;
  }
  /** @oneof */
  interface IdentificationDataIdOneOf$1 {
      /** ID of an anonymous site visitor. */
      anonymousVisitorId?: string;
      /** ID of a site member. */
      memberId?: string;
  }
  enum ChannelType$1 {
      UNKNOWN_CHANNEL_TYPE = "UNKNOWN_CHANNEL_TYPE",
      CHAT = "CHAT",
      EMAIL = "EMAIL",
      SMS = "SMS",
      FACEBOOK = "FACEBOOK",
      INSTAGRAM = "INSTAGRAM",
      WHATSAPP = "WHATSAPP",
      AI_ASSISTANT = "AI_ASSISTANT",
      PHONE = "PHONE"
  }
  interface ConversationDisplayData {
      /**
       * Display name.
       * @readonly
       */
      name?: string;
      /**
       * Avatar image URL.
       * @readonly
       */
      imageUrl?: string | null;
  }
  interface ConversationsMerged {
      /** List of old conversation IDs. */
      oldConversationIds?: string[];
      /** New conversation ID. */
      targetConversationId?: string;
  }
  interface GetConversationRequest {
      /** Conversation ID. */
      conversationId: string;
  }
  interface GetConversationResponse {
      /** Retrieved conversation. */
      conversation?: Conversation;
  }
  interface GetOrCreateConversationRequest {
      /**
       * ID of the visitor, contact, or member chatting with the business.
       *
       * Required for 3rd-party apps.
       */
      participantId?: ParticipantId;
  }
  interface ParticipantId extends ParticipantIdIdOneOf {
      /** ID of a site contact. */
      contactId?: string;
      /** ID of an anonymous site visitor. */
      anonymousVisitorId?: string;
      /** ID of a site member. */
      memberId?: string;
  }
  /** @oneof */
  interface ParticipantIdIdOneOf {
      /** ID of a site contact. */
      contactId?: string;
      /** ID of an anonymous site visitor. */
      anonymousVisitorId?: string;
      /** ID of a site member. */
      memberId?: string;
  }
  interface GetOrCreateConversationResponse {
      /** Created or retrieved conversation. */
      conversation?: Conversation;
      /**
       * Indicates whether the conversation previously exists or was just created.
       *
       * If `true`, the conversation was just created.
       * If `false`, the conversation already existed.
       */
      newConversation?: boolean;
  }
  interface ListConversationsRequest {
      paging?: CursorPaging$1;
      /** only message time is supported for field name */
      sorting?: Sorting$1;
  }
  interface CursorPaging$1 {
      /** Maximum number of items to return in the results. */
      limit?: number | null;
      /**
       * Pointer to the next or previous page in the list of results.
       *
       * Pass the relevant cursor token from the `pagingMetadata` object in the previous call's response.
       * Not relevant for the first request.
       */
      cursor?: string | null;
  }
  interface Sorting$1 {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
      order?: SortOrder$1;
      /**
       * When `field_name` is a property of repeated field that is marked as `MATCH_ITEMS` and sort should be done by
       * a specific element from a collection, filter can/should be provided to ensure correct sort value is picked.
       *
       * If multiple filters are provided, they are combined with AND operator.
       *
       * Example:
       * Given we have document like {"id": "1", "nestedField": [{"price": 10, "region": "EU"}, {"price": 20, "region": "US"}]}
       * and `nestedField` is marked as `MATCH_ITEMS`, to ensure that sorting is done by correct region, filter should be
       * { fieldName: "nestedField.price", "select_items_by": [{"nestedField.region": "US"}] }
       * @internal
       */
      selectItemsBy?: Record<string, any>[] | null;
  }
  enum SortOrder$1 {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface ListConversationsResponse {
      conversations?: Conversation[];
      pagingMetadata?: PagingMetadataV2$1;
  }
  interface PagingMetadataV2$1 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      offset?: number | null;
      /** Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set. */
      total?: number | null;
      /** Flag that indicates the server failed to calculate the `total` field. */
      tooManyToCount?: boolean | null;
      /** Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used. */
      cursors?: Cursors$1;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       * @internal
       */
      hasNext?: boolean | null;
  }
  interface Cursors$1 {
      /** Cursor string pointing to the next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to the previous page in the list of results. */
      prev?: string | null;
  }
  interface DeleteConversationRequest {
      conversationId: string;
  }
  interface DeleteConversationResponse {
  }
  interface AddConversationChannelsRequest {
      conversationId: string;
      conversationChannels?: ConversationChannel[];
  }
  interface ConversationChannel {
      channel?: ChannelType$1;
      /** TODO rename? - Shalom */
      recipients?: string[];
  }
  interface AddConversationChannelsResponse {
  }
  interface ChatroomsMerged {
      /** old chatroom ids */
      oldChatroomIds?: string[];
      /** new chatroom id */
      targetChatroomId?: string;
  }
  interface Empty$1 {
  }
  interface DomainEvent$1 extends DomainEventBodyOneOf$1 {
      createdEvent?: EntityCreatedEvent$1;
      updatedEvent?: EntityUpdatedEvent$1;
      deletedEvent?: EntityDeletedEvent$1;
      actionEvent?: ActionEvent$1;
      /**
       * Unique event ID.
       * Allows clients to ignore duplicate webhooks.
       */
      _id?: string;
      /**
       * Assumes actions are also always typed to an entity_type
       * Example: wix.stores.catalog.product, wix.bookings.session, wix.payments.transaction
       */
      entityFqdn?: string;
      /**
       * This is top level to ease client code dispatching of messages (switch on entity_fqdn+slug)
       * This is although the created/updated/deleted notion is duplication of the oneof types
       * Example: created/updated/deleted/started/completed/email_opened
       */
      slug?: string;
      /** ID of the entity associated with the event. */
      entityId?: string;
      /** Event timestamp. */
      eventTime?: Date;
      /**
       * Whether the event was triggered as a result of a privacy regulation application
       * (for example, GDPR).
       */
      triggeredByAnonymizeRequest?: boolean | null;
      /** If present, indicates the action that triggered the event. */
      originatedFrom?: string | null;
      /**
       * A sequence number defining the order of updates to the underlying entity.
       * For example, given that some entity was updated at 16:00 and than again at 16:01,
       * it is guaranteed that the sequence number of the second update is strictly higher than the first.
       * As the consumer, you can use this value to ensure that you handle messages in the correct order.
       * To do so, you will need to persist this number on your end, and compare the sequence number from the
       * message against the one you have stored. Given that the stored number is higher, you should ignore the message.
       */
      entityEventSequence?: string | null;
  }
  /** @oneof */
  interface DomainEventBodyOneOf$1 {
      createdEvent?: EntityCreatedEvent$1;
      updatedEvent?: EntityUpdatedEvent$1;
      deletedEvent?: EntityDeletedEvent$1;
      actionEvent?: ActionEvent$1;
  }
  interface EntityCreatedEvent$1 {
      entityAsJson?: string;
      /**
       * Indicates the event was triggered by a restore-from-trashbin operation for a previously deleted entity
       * @internal
       */
      triggeredByUndelete?: boolean | null;
  }
  interface EntityUpdatedEvent$1 {
      /**
       * Since platformized APIs only expose PATCH and not PUT we can't assume that the fields sent from the client are the actual diff.
       * This means that to generate a list of changed fields (as opposed to sent fields) one needs to traverse both objects.
       * We don't want to impose this on all developers and so we leave this traversal to the notification recipients which need it.
       */
      currentEntityAsJson?: string;
      /**
       * This field is currently part of the of the EntityUpdatedEvent msg, but scala/node libraries which implements the domain events standard
       * wont populate it / have any reference to it in the API.
       * The main reason for it is that fetching the old entity from the DB will have a performance hit on an update operation so unless truly needed,
       * the developer should send only the new (current) entity.
       * An additional reason is not wanting to send this additional entity over the wire (kafka) since in some cases it can be really big
       * Developers that must reflect the old entity will have to implement their own domain event sender mechanism which will follow the DomainEvent proto message.
       * @internal
       */
      previousEntityAsJson?: string | null;
      /**
       * WIP - This property will hold both names and values of the updated fields of the entity.
       * For more details please see [adr](https://docs.google.com/document/d/1PdqsOM20Ph2HAkmx8zvUnzzk3Sekp3BR9h34wSvsRnI/edit#heading=h.phlw87mh2imx) or [issue](https://github.com/wix-private/nile-tracker/issues/363)
       * @internal
       */
      modifiedFields?: Record<string, any>;
  }
  interface EntityDeletedEvent$1 {
      /**
       * Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled
       * @internal
       */
      movedToTrash?: boolean | null;
      /** Entity that was deleted */
      deletedEntityAsJson?: string | null;
  }
  interface ActionEvent$1 {
      bodyAsJson?: string;
  }
  interface MessageEnvelope$1 {
      /** App instance ID. */
      instanceId?: string | null;
      /** Event type. */
      eventType?: string;
      /** The identification type and identity data. */
      identity?: WebhooksIdentificationData$1;
      /** Stringify payload. */
      data?: string;
  }
  interface WebhooksIdentificationData$1 extends WebhooksIdentificationDataIdOneOf$1 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
      /** @readonly */
      identityType?: WebhookIdentityType$1;
  }
  /** @oneof */
  interface WebhooksIdentificationDataIdOneOf$1 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
  }
  enum WebhookIdentityType$1 {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  /**
   * Retrieves a conversation by conversation ID.
   *
   * If you don't have the conversation ID, use `getOrCreateConversation()` to retrieve the conversation using the visitor, contact, or member ID.
   *
   * @param conversationId - Conversation ID.
   * @public
   * @documentationMaturity preview
   * @requiredField conversationId
   * @adminMethod
   * @returns Retrieved conversation.
   */
  function getConversation(conversationId: string): Promise<Conversation>;
  /**
   * Retrieves a conversation by the specified visitor, contact, or member ID. If the conversation does not exist for the provided visitor, contact, or member, the function creates a new conversation.
   * @public
   * @documentationMaturity preview
   * @requiredField participantId
   * @param participantId - ID of the visitor, contact, or member chatting with the business.
   * @adminMethod
   */
  function getOrCreateConversation(participantId: ParticipantId): Promise<GetOrCreateConversationResponse>;
  /** @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function listConversations(options?: ListConversationsOptions): Promise<ListConversationsResponse>;
  interface ListConversationsOptions {
      paging?: CursorPaging$1;
      /** only message time is supported for field name */
      sorting?: Sorting$1;
  }
  /** @internal
   * @documentationMaturity preview
   * @requiredField conversationId
   * @adminMethod
   */
  function deleteConversation(conversationId: string): Promise<void>;
  /** @internal
   * @documentationMaturity preview
   * @requiredField conversationId
   * @adminMethod
   */
  function addConversationChannels(conversationId: string, options?: AddConversationChannelsOptions): Promise<void>;
  interface AddConversationChannelsOptions {
      conversationChannels?: ConversationChannel[];
  }
  
  type crmInboxV2Conversation_universal_d_Conversation = Conversation;
  type crmInboxV2Conversation_universal_d_ConversationDisplayData = ConversationDisplayData;
  type crmInboxV2Conversation_universal_d_ConversationsMerged = ConversationsMerged;
  type crmInboxV2Conversation_universal_d_GetConversationRequest = GetConversationRequest;
  type crmInboxV2Conversation_universal_d_GetConversationResponse = GetConversationResponse;
  type crmInboxV2Conversation_universal_d_GetOrCreateConversationRequest = GetOrCreateConversationRequest;
  type crmInboxV2Conversation_universal_d_ParticipantId = ParticipantId;
  type crmInboxV2Conversation_universal_d_ParticipantIdIdOneOf = ParticipantIdIdOneOf;
  type crmInboxV2Conversation_universal_d_GetOrCreateConversationResponse = GetOrCreateConversationResponse;
  type crmInboxV2Conversation_universal_d_ListConversationsRequest = ListConversationsRequest;
  type crmInboxV2Conversation_universal_d_ListConversationsResponse = ListConversationsResponse;
  type crmInboxV2Conversation_universal_d_DeleteConversationRequest = DeleteConversationRequest;
  type crmInboxV2Conversation_universal_d_DeleteConversationResponse = DeleteConversationResponse;
  type crmInboxV2Conversation_universal_d_AddConversationChannelsRequest = AddConversationChannelsRequest;
  type crmInboxV2Conversation_universal_d_ConversationChannel = ConversationChannel;
  type crmInboxV2Conversation_universal_d_AddConversationChannelsResponse = AddConversationChannelsResponse;
  type crmInboxV2Conversation_universal_d_ChatroomsMerged = ChatroomsMerged;
  const crmInboxV2Conversation_universal_d_getConversation: typeof getConversation;
  const crmInboxV2Conversation_universal_d_getOrCreateConversation: typeof getOrCreateConversation;
  const crmInboxV2Conversation_universal_d_listConversations: typeof listConversations;
  type crmInboxV2Conversation_universal_d_ListConversationsOptions = ListConversationsOptions;
  const crmInboxV2Conversation_universal_d_deleteConversation: typeof deleteConversation;
  const crmInboxV2Conversation_universal_d_addConversationChannels: typeof addConversationChannels;
  type crmInboxV2Conversation_universal_d_AddConversationChannelsOptions = AddConversationChannelsOptions;
  namespace crmInboxV2Conversation_universal_d {
    export {
      crmInboxV2Conversation_universal_d_Conversation as Conversation,
      IdentificationData$1 as IdentificationData,
      IdentificationDataIdOneOf$1 as IdentificationDataIdOneOf,
      ChannelType$1 as ChannelType,
      crmInboxV2Conversation_universal_d_ConversationDisplayData as ConversationDisplayData,
      crmInboxV2Conversation_universal_d_ConversationsMerged as ConversationsMerged,
      crmInboxV2Conversation_universal_d_GetConversationRequest as GetConversationRequest,
      crmInboxV2Conversation_universal_d_GetConversationResponse as GetConversationResponse,
      crmInboxV2Conversation_universal_d_GetOrCreateConversationRequest as GetOrCreateConversationRequest,
      crmInboxV2Conversation_universal_d_ParticipantId as ParticipantId,
      crmInboxV2Conversation_universal_d_ParticipantIdIdOneOf as ParticipantIdIdOneOf,
      crmInboxV2Conversation_universal_d_GetOrCreateConversationResponse as GetOrCreateConversationResponse,
      crmInboxV2Conversation_universal_d_ListConversationsRequest as ListConversationsRequest,
      CursorPaging$1 as CursorPaging,
      Sorting$1 as Sorting,
      SortOrder$1 as SortOrder,
      crmInboxV2Conversation_universal_d_ListConversationsResponse as ListConversationsResponse,
      PagingMetadataV2$1 as PagingMetadataV2,
      Cursors$1 as Cursors,
      crmInboxV2Conversation_universal_d_DeleteConversationRequest as DeleteConversationRequest,
      crmInboxV2Conversation_universal_d_DeleteConversationResponse as DeleteConversationResponse,
      crmInboxV2Conversation_universal_d_AddConversationChannelsRequest as AddConversationChannelsRequest,
      crmInboxV2Conversation_universal_d_ConversationChannel as ConversationChannel,
      crmInboxV2Conversation_universal_d_AddConversationChannelsResponse as AddConversationChannelsResponse,
      crmInboxV2Conversation_universal_d_ChatroomsMerged as ChatroomsMerged,
      Empty$1 as Empty,
      DomainEvent$1 as DomainEvent,
      DomainEventBodyOneOf$1 as DomainEventBodyOneOf,
      EntityCreatedEvent$1 as EntityCreatedEvent,
      EntityUpdatedEvent$1 as EntityUpdatedEvent,
      EntityDeletedEvent$1 as EntityDeletedEvent,
      ActionEvent$1 as ActionEvent,
      MessageEnvelope$1 as MessageEnvelope,
      WebhooksIdentificationData$1 as WebhooksIdentificationData,
      WebhooksIdentificationDataIdOneOf$1 as WebhooksIdentificationDataIdOneOf,
      WebhookIdentityType$1 as WebhookIdentityType,
      crmInboxV2Conversation_universal_d_getConversation as getConversation,
      crmInboxV2Conversation_universal_d_getOrCreateConversation as getOrCreateConversation,
      crmInboxV2Conversation_universal_d_listConversations as listConversations,
      crmInboxV2Conversation_universal_d_ListConversationsOptions as ListConversationsOptions,
      crmInboxV2Conversation_universal_d_deleteConversation as deleteConversation,
      crmInboxV2Conversation_universal_d_addConversationChannels as addConversationChannels,
      crmInboxV2Conversation_universal_d_AddConversationChannelsOptions as AddConversationChannelsOptions,
    };
  }
  
  interface Message {
      /**
       * Message ID.
       * @readonly
       */
      _id?: string | null;
      /** Structured message content. */
      content?: MessageContent;
      /**
       * ID of the message sender.
       *
       * Defaults to the caller's ID using the property that matches their identity type.
       *
       * You can override the default behavior when calling
       * `sendMessage()` by using the `sendAs` field from the `options` object.
       *
       * @readonly
       */
      sender?: IdentificationData;
      /**
       * Optional icon and short text providing additional details about the message,
       * such as the app from which the message was sent, or whether the message was an automated response.
       *
       * Currently only 1 badge is supported.
       */
      badges?: Badge[];
      /**
       * Communication channel to send the message to.
       *
       * Currently messages can be sent to 1 channel only.
       *
       * Supported values: `"CHAT"`, `"EMAIL"`, `"SMS"`, `"FACEBOOK"`, `"INSTAGRAM"`, `"WHATSAPP"`.
       */
      targetChannels?: ChannelType[];
      /**
       * Communication channel the message is sent from.
       *
       * Supported values: `"CHAT"`, `"EMAIL"`, `"SMS"`, `"FACEBOOK"`, `"INSTAGRAM"`, `"WHATSAPP"`.
       */
      sourceChannel?: ChannelType;
      /**
       * Reserved for internal use.
       *
       * ID of the application that sent the message.Omitted if the message was sent with the Chat widget.
       * @readonly
       */
      appId?: string | null;
      /**
       * __Required.__
       * Controls who can see the message.
       *
       * - `"BUSINESS_AND_PARTICIPANT"`: Visible to the participant and site collaborators.
       * - `"BUSINESS"`: Visible to site collaborators only.
       */
      visibility?: MessageVisibility;
      /**
       * Sequential ordering of the message.
       *
       * Ensures more accurate sorting than `createdDate`
       * if two messages are sent at the same time.
       * @readonly
       */
      sequence?: string | null;
      /**
       * __Required.__
       * Message direction.
       *
       * - `"BUSINESS_TO_PARTICIPANT"`: The message was sent from the business to the participant.
       * - `"PARTICIPANT_TO_BUSINESS"`: The message was sent from the participant to the business.
       */
      direction?: MessageDirection;
      /** Date and time the message was sent. */
      _createdDate?: Date;
      /**
       * Sequence of channel IDs required for channels integration via the CC host
       * @internal
       */
      targetChannelIds?: string[];
      /** @internal */
      sourceChannelId?: string | null;
  }
  interface MessageContent extends MessageContentPayloadOneOf {
      /** Plain text, file, or image message. */
      basic?: BasicMessagePayload;
      /**
       * Template containing an image, title, text,
       * and/or up to 10 call-to-action buttons.
       */
      template?: TemplateMessagePayload;
      /**
       * Minimal message containing a single line of text
       * and an optional icon.
       * Often reports an activity that took place.
       */
      minimal?: MinimalMessagePayload;
      /**
       * Message containing submitted form data.
       * Typically sent with a `direction` of `"PARTICIPANT_TO_BUSINESS"`
       * and message `visibility` of `"BUSINESS"`.
       */
      form?: FormMessagePayload;
      /**
       * Reserved for internal use.
       *
       * System message.
       */
      system?: SystemMessagePayload;
      /**
       * Summary of message contents.
       * Displayed in Inbox in the
       * [Message List](https://support.wix.com/en/article/wix-inbox-getting-started#view-your-messages).
       */
      previewText?: string | null;
      /** Message title. */
      title?: string | null;
      /**
       * An enum that says what the Content Type expected to be populated inside payload
       * @internal
       */
      contentType?: ContentType;
  }
  /** @oneof */
  interface MessageContentPayloadOneOf {
      /** Plain text, file, or image message. */
      basic?: BasicMessagePayload;
      /**
       * Template containing an image, title, text,
       * and/or up to 10 call-to-action buttons.
       */
      template?: TemplateMessagePayload;
      /**
       * Minimal message containing a single line of text
       * and an optional icon.
       * Often reports an activity that took place.
       */
      minimal?: MinimalMessagePayload;
      /**
       * Message containing submitted form data.
       * Typically sent with a `direction` of `PARTICIPANT_TO_BUSINESS`
       * and message `visibility` of `BUSINESS`.
       */
      form?: FormMessagePayload;
      /**
       * System message.
       * For internal use.
       */
      system?: SystemMessagePayload;
  }
  interface BasicMessagePayload {
      /**
       * List of plain text messages, images, and/or files.
       * List items are displayed as separate messages
       * in Inbox and the site's chat widget.
       */
      items?: BasicMessageData[];
  }
  interface BasicMessageData extends BasicMessageDataDataOneOf {
      /** Text message. */
      text?: string;
      /**
       * Image message.
       * Can contain an image from Wix Media
       * or from an external provider.
       */
      image?: ImageMessage;
      /**
       * File attachment.
       * Can contain a file from Wix Media or an external provider.
       */
      file?: FileMessage;
  }
  /** @oneof */
  interface BasicMessageDataDataOneOf {
      /** Text message. */
      text?: string;
      /**
       * Image message.
       * Can contain an image from Wix Media
       * or from an external provider.
       */
      image?: ImageMessage;
      /**
       * File attachment.
       * Can contain a file from Wix Media or an external provider.
       */
      file?: FileMessage;
  }
  interface ImageMessage {
      /** Wix Media ID. */
      _id?: string | null;
      /** URL where the image is hosted. */
      url?: string;
      /** File name of the original file. */
      filename?: string | null;
      /**
       * File size, in bytes.
       * @internal
       */
      fileSize?: string | null;
      /** Original image width, in pixels. */
      width?: number;
      /** Original image height, in pixels. */
      height?: number;
  }
  interface FileMessage {
      /** Wix Media ID. */
      _id?: string | null;
      /** URL where the file is hosted. */
      url?: string;
      /** File name of the original file. */
      filename?: string | null;
      /**
       * File size, in bytes.
       * @internal
       */
      fileSize?: string | null;
      /** File [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types). */
      mimeType?: string | null;
  }
  interface TemplateMessagePayload {
      /** Title displayed in the message. */
      title?: string | null;
      /**
       * List of buttons to display with the message.
       * Buttons can either open a URL or pass interaction details to the
       * `onMessageButtonInteracted()` event.
       *
       * Max: 10 buttons.
       */
      buttons?: Button[];
      /**
       * Controls whether the message is displayed in portrait or landscape layout.
       *
       * Supported values: `"PORTRAIT"`, `"LANDSCAPE"`.
       *
       * Default: `PORTRAIT`.
       */
      orientation?: Orientation;
      /**
       * an icon key
       * @internal
       */
      icon?: string | null;
      /**
       * List of lines of text. Each item in the array is displayed on a new line.
       *
       * Max: 10 lines (up to 512 characters per line).
       */
      textLines?: string[];
      /** URL where the icon is hosted. */
      imageUrl?: string | null;
  }
  interface Button {
      /** Button label text. */
      label?: string;
      /** If included, the button launches the specified URL. */
      launchUrl?: string | null;
      /** Properties to pass to the `onMessageButtonInteracted()` event when the button is clicked. */
      postbackProperties?: PostbackProperties;
  }
  interface PostbackProperties {
      /**
       * For internal use.
       *
       * @readonly
       */
      appId?: string | null;
      /** ID you define for the interaction, to be handled by your server. */
      interactionId?: string;
  }
  enum Orientation {
      UNKNOWN_ORIENTATION = "UNKNOWN_ORIENTATION",
      PORTRAIT = "PORTRAIT",
      LANDSCAPE = "LANDSCAPE"
  }
  interface MinimalMessagePayload {
      /** Message text. */
      text?: string;
      /**
       * an icon key
       * @internal
       */
      icon?: string | null;
      /** URL where the icon is hosted. */
      iconUrl?: string | null;
      /** If included, URL the user is redirected to when clicking the message. */
      url?: string | null;
  }
  interface FormMessagePayload {
      /** Form title displayed in the message. */
      title?: string | null;
      /** Form description displayed below the title. */
      description?: string | null;
      /** List of form fields and values. */
      fields?: FormField[];
      /**
       * List of files and/or images attached to the form.
       *
       * List items are displayed as separate messages
       * in Inbox and the site's chat widget.
       */
      media?: MediaItem[];
  }
  interface FormField {
      /** Form field display name. */
      name?: string;
      /** Submitted value. */
      value?: string;
  }
  interface MediaItem extends MediaItemMediaOneOf {
      /**
       * Image message.
       * Can contain an image from Wix Media
       * or from an external provider.
       */
      image?: ImageMessage;
      /**
       * File attachment.
       * Can contain a file from Wix Media or an external provider.
       */
      file?: FileMessage;
  }
  /** @oneof */
  interface MediaItemMediaOneOf {
      /**
       * Image message.
       * Can contain an image from Wix Media
       * or from an external provider.
       */
      image?: ImageMessage;
      /**
       * File attachment.
       * Can contain a file from Wix Media or an external provider.
       */
      file?: FileMessage;
  }
  interface SystemMessagePayload {
      /** Text message. `\n` renders as a line break. */
      text?: string;
      /**
       * List of buttons to display with the message.
       * Buttons can either open a URL or pass interaction details to the
       * `onMessageButtonInteracted()` event.
       *
       * Maximum: 10 buttons.
       */
      buttons?: Button[];
      /** URL where the icon is hosted. */
      imageUrl?: string | null;
  }
  enum ContentType {
      UNKNOWN_CONTENT = "UNKNOWN_CONTENT",
      BASIC = "BASIC",
      TEMPLATE = "TEMPLATE",
      MINIMAL = "MINIMAL",
      FORM = "FORM",
      SYSTEM = "SYSTEM",
      UNSUPPORTED = "UNSUPPORTED"
  }
  interface IdentificationData extends IdentificationDataIdOneOf {
      /** Anonymous site visitor ID. */
      anonymousVisitorId?: string;
      /**
       * Site
       * [member](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fmember-permissions/members)
       * ID.
       */
      memberId?: string;
      /** User ID of the site owner or a site contributor. */
      wixUserId?: string;
      /** App ID. */
      appId?: string;
      /**
       * Optional site
       * [contact](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fcontacts) ID.
       * @readonly
       */
      contactId?: string | null;
  }
  /** @oneof */
  interface IdentificationDataIdOneOf {
      /** Anonymous site visitor ID. */
      anonymousVisitorId?: string;
      /**
       * Site
       * [member](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fmember-permissions/members)
       * ID.
       */
      memberId?: string;
      /** User ID of the site owner or a site contributor. */
      wixUserId?: string;
      /** App ID. */
      appId?: string;
  }
  interface Badge {
      /** Display text. */
      text?: string;
      /**
       * an icon key
       * @internal
       */
      icon?: string | null;
      /** URL where the icon is hosted. */
      iconUrl?: string | null;
      /**
       * Controls whether the badge is visible to the participant.
       * Currently not supported in the Chat widget.
       */
      badgeVisibility?: BadgeVisibility;
  }
  enum BadgeVisibility {
      UNKNOWN_BADGE_VISIBILITY = "UNKNOWN_BADGE_VISIBILITY",
      BUSINESS_AND_PARTICIPANT = "BUSINESS_AND_PARTICIPANT",
      BUSINESS = "BUSINESS"
  }
  enum ChannelType {
      UNKNOWN_CHANNEL_TYPE = "UNKNOWN_CHANNEL_TYPE",
      CHAT = "CHAT",
      EMAIL = "EMAIL",
      SMS = "SMS",
      FACEBOOK = "FACEBOOK",
      INSTAGRAM = "INSTAGRAM",
      WHATSAPP = "WHATSAPP",
      AI_ASSISTANT = "AI_ASSISTANT",
      PHONE = "PHONE"
  }
  enum MessageVisibility {
      UNKNOWN_VISIBILITY = "UNKNOWN_VISIBILITY",
      BUSINESS_AND_PARTICIPANT = "BUSINESS_AND_PARTICIPANT",
      BUSINESS = "BUSINESS"
  }
  enum MessageDirection {
      UNKNOWN_DIRECTION = "UNKNOWN_DIRECTION",
      BUSINESS_TO_PARTICIPANT = "BUSINESS_TO_PARTICIPANT",
      PARTICIPANT_TO_BUSINESS = "PARTICIPANT_TO_BUSINESS"
  }
  interface GetMessageIndicationsRequest {
      conversationId: string;
      messageId: string;
  }
  interface GetMessageIndicationsResponse {
      messageIndications?: MessageIndication[];
  }
  interface MessageIndication {
      /** @readonly */
      conversationId?: string | null;
      /**
       * The time when the message was sent
       * @readonly
       */
      messageId?: string | null;
      /** The type of the indication */
      type?: IndicationType;
      /** The channel to which this indication was added */
      channel?: ChannelType;
      /**
       * The error code when it is an ERROR indication
       * @internal
       */
      errorCode?: string | null;
      /** The time when action happened */
      timestamp?: Date;
  }
  enum IndicationType {
      UNKNOWN_INDICATION_TYPE = "UNKNOWN_INDICATION_TYPE",
      SENT = "SENT",
      SEEN = "SEEN",
      ERROR = "ERROR",
      DELIVERED = "DELIVERED"
  }
  interface AddMessageIndicationsRequest {
      conversationId: string;
      messageIds: string[];
      /** by whom this action was done, defaults to PARTICIPANT in case of UNKNOWN_PERFORMED_BY */
      performedBy?: PerformedBy;
      indication: MessageIndication;
  }
  enum PerformedBy {
      UNKNOWN_PERFORMED_BY = "UNKNOWN_PERFORMED_BY",
      BUSINESS = "BUSINESS",
      PARTICIPANT = "PARTICIPANT"
  }
  interface AddMessageIndicationsResponse {
  }
  interface MessageSentToParticipant {
      /** Conversation ID. */
      conversationId?: string;
      /** Sent message. */
      message?: Message;
      /**
       * Internal data about custom messages
       * @internal
       */
      customMessageData?: CustomMessageData;
  }
  interface CustomMessageData {
      /** Name of the app this message belong to */
      appName?: string | null;
      /** Data set by the sending application */
      appData?: Record<string, string>;
  }
  interface MessageSentToBusiness {
      /** Conversation ID. */
      conversationId?: string;
      /** Sent message. */
      message?: Message;
      /**
       * Internal data about custom messages
       * @internal
       */
      customMessageData?: CustomMessageData;
      /** Optional info about interaction with app done by the user */
      interactionInfo?: InteractionInfo;
  }
  /**
   * Source of interaction message, will be available when message originated by interaction with an application.
   * like clicking a button.
   */
  interface InteractionInfo {
      appId?: string | null;
      interactionId?: string | null;
  }
  interface ButtonInteracted {
      /** Conversation ID. */
      conversationId?: string;
      /** [Your app's](https://dev.wix.com/dc3/my-apps) app ID. */
      appId?: string | null;
      /**
       * ID you define for the interaction,
       * to be handled by your server.
       */
      interactionId?: string | null;
      /** ID of the participant who pressed the button. */
      interactedBy?: IdentificationData;
  }
  interface ListMessagesRequest {
      /** ID of the conversation that contains the intended messages. */
      conversationId: string;
      /**
       * __Required.__
       * Filters for messages with the specified visibility setting.
       *
       * - `"BUSINESS_AND_PARTICIPANT"`: Return messages visible to the business and the participant.
       * - `"BUSINESS"`: Return all messages.
       */
      visibility?: MessageVisibility;
      /** Paging options. */
      paging?: CursorPaging;
      /** Sorting options. */
      sorting?: Sorting;
  }
  interface CursorPaging {
      /** Maximum number of items to return in the results. */
      limit?: number | null;
      /**
       * Pointer to the next or previous page in the list of results.
       *
       * Pass the relevant cursor token from the `pagingMetadata` object in the previous call's response.
       * Not relevant for the first request.
       */
      cursor?: string | null;
  }
  interface Sorting {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
      order?: SortOrder;
      /**
       * When `field_name` is a property of repeated field that is marked as `MATCH_ITEMS` and sort should be done by
       * a specific element from a collection, filter can/should be provided to ensure correct sort value is picked.
       *
       * If multiple filters are provided, they are combined with AND operator.
       *
       * Example:
       * Given we have document like {"id": "1", "nestedField": [{"price": 10, "region": "EU"}, {"price": 20, "region": "US"}]}
       * and `nestedField` is marked as `MATCH_ITEMS`, to ensure that sorting is done by correct region, filter should be
       * { fieldName: "nestedField.price", "select_items_by": [{"nestedField.region": "US"}] }
       * @internal
       */
      selectItemsBy?: Record<string, any>[] | null;
  }
  enum SortOrder {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface ListMessagesResponse {
      /** List of messages between the specified visitor and the site. */
      messages?: Message[];
      /** Details on the paged set of results returned. */
      pagingMetadata?: PagingMetadataV2;
  }
  interface PagingMetadataV2 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      offset?: number | null;
      /** Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set. */
      total?: number | null;
      /** Flag that indicates the server failed to calculate the `total` field. */
      tooManyToCount?: boolean | null;
      /** Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used. */
      cursors?: Cursors;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       * @internal
       */
      hasNext?: boolean | null;
  }
  interface Cursors {
      /** Cursor string pointing to the next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to the previous page in the list of results. */
      prev?: string | null;
  }
  interface SendMessageRequest {
      /** ID of the conversation to add the message to. */
      conversationId: string;
      /** Message to send. */
      message: Message;
      /**
       * Controls whether the message triggers notifications when it's received.
       *
       * Default: `false`
       */
      sendNotifications?: boolean;
      /**
       * Controls whether the unread count and conversation summary
       * are updated in the
       * [Message List](https://support.wix.com/en/article/wix-inbox-getting-started#view-your-messages).
       *
       * If `true`, unread count and conversation summary are not updated.
       *
       * Default: `false`
       */
      silent?: boolean;
      /** @internal */
      typingDelay?: number | null;
      /**
       * Controls which identity to use in the message's `sender` property.
       *
       * - `CALLER`: Uses the identity included in the request header.
       * - `PARTICIPANT`: Uses the `anonymousVisitorId`, `contactId`, or `memberId` of the conversation's participant.
       * - `BUSINESS_USER`: For internal use. Uses the `wixUserId` of the person sending messages on behalf of the business.
       *
       * Default: `CALLER`
       * For 3rd-party apps, the app is the caller.
       */
      sendAs?: OverrideSenderOptions;
      /**
       * Wix user ID of the message sender.
       *
       * Required if `sendAs` is set to `BUSINESS_USER`.
       * @internal
       */
      businessUserId?: string | null;
  }
  enum OverrideSenderOptions {
      CALLER = "CALLER",
      PARTICIPANT = "PARTICIPANT",
      BUSINESS_USER = "BUSINESS_USER"
  }
  interface SendMessageResponse {
      /** Sent message. */
      message?: Message;
  }
  interface Empty {
  }
  interface DomainEvent extends DomainEventBodyOneOf {
      createdEvent?: EntityCreatedEvent;
      updatedEvent?: EntityUpdatedEvent;
      deletedEvent?: EntityDeletedEvent;
      actionEvent?: ActionEvent;
      /**
       * Unique event ID.
       * Allows clients to ignore duplicate webhooks.
       */
      _id?: string;
      /**
       * Assumes actions are also always typed to an entity_type
       * Example: wix.stores.catalog.product, wix.bookings.session, wix.payments.transaction
       */
      entityFqdn?: string;
      /**
       * This is top level to ease client code dispatching of messages (switch on entity_fqdn+slug)
       * This is although the created/updated/deleted notion is duplication of the oneof types
       * Example: created/updated/deleted/started/completed/email_opened
       */
      slug?: string;
      /** ID of the entity associated with the event. */
      entityId?: string;
      /** Event timestamp. */
      eventTime?: Date;
      /**
       * Whether the event was triggered as a result of a privacy regulation application
       * (for example, GDPR).
       */
      triggeredByAnonymizeRequest?: boolean | null;
      /** If present, indicates the action that triggered the event. */
      originatedFrom?: string | null;
      /**
       * A sequence number defining the order of updates to the underlying entity.
       * For example, given that some entity was updated at 16:00 and than again at 16:01,
       * it is guaranteed that the sequence number of the second update is strictly higher than the first.
       * As the consumer, you can use this value to ensure that you handle messages in the correct order.
       * To do so, you will need to persist this number on your end, and compare the sequence number from the
       * message against the one you have stored. Given that the stored number is higher, you should ignore the message.
       */
      entityEventSequence?: string | null;
  }
  /** @oneof */
  interface DomainEventBodyOneOf {
      createdEvent?: EntityCreatedEvent;
      updatedEvent?: EntityUpdatedEvent;
      deletedEvent?: EntityDeletedEvent;
      actionEvent?: ActionEvent;
  }
  interface EntityCreatedEvent {
      entityAsJson?: string;
      /**
       * Indicates the event was triggered by a restore-from-trashbin operation for a previously deleted entity
       * @internal
       */
      triggeredByUndelete?: boolean | null;
  }
  interface EntityUpdatedEvent {
      /**
       * Since platformized APIs only expose PATCH and not PUT we can't assume that the fields sent from the client are the actual diff.
       * This means that to generate a list of changed fields (as opposed to sent fields) one needs to traverse both objects.
       * We don't want to impose this on all developers and so we leave this traversal to the notification recipients which need it.
       */
      currentEntityAsJson?: string;
      /**
       * This field is currently part of the of the EntityUpdatedEvent msg, but scala/node libraries which implements the domain events standard
       * wont populate it / have any reference to it in the API.
       * The main reason for it is that fetching the old entity from the DB will have a performance hit on an update operation so unless truly needed,
       * the developer should send only the new (current) entity.
       * An additional reason is not wanting to send this additional entity over the wire (kafka) since in some cases it can be really big
       * Developers that must reflect the old entity will have to implement their own domain event sender mechanism which will follow the DomainEvent proto message.
       * @internal
       */
      previousEntityAsJson?: string | null;
      /**
       * WIP - This property will hold both names and values of the updated fields of the entity.
       * For more details please see [adr](https://docs.google.com/document/d/1PdqsOM20Ph2HAkmx8zvUnzzk3Sekp3BR9h34wSvsRnI/edit#heading=h.phlw87mh2imx) or [issue](https://github.com/wix-private/nile-tracker/issues/363)
       * @internal
       */
      modifiedFields?: Record<string, any>;
  }
  interface EntityDeletedEvent {
      /**
       * Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled
       * @internal
       */
      movedToTrash?: boolean | null;
      /** Entity that was deleted */
      deletedEntityAsJson?: string | null;
  }
  interface ActionEvent {
      bodyAsJson?: string;
  }
  interface MessageEnvelope {
      /** App instance ID. */
      instanceId?: string | null;
      /** Event type. */
      eventType?: string;
      /** The identification type and identity data. */
      identity?: WebhooksIdentificationData;
      /** Stringify payload. */
      data?: string;
  }
  interface WebhooksIdentificationData extends WebhooksIdentificationDataIdOneOf {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
      /** @readonly */
      identityType?: WebhookIdentityType;
  }
  /** @oneof */
  interface WebhooksIdentificationDataIdOneOf {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
  }
  enum WebhookIdentityType {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  /** @internal
   * @documentationMaturity preview
   * @requiredField conversationId
   * @requiredField messageId
   * @adminMethod
   */
  function getMessageIndications(messageId: string, conversationId: string): Promise<GetMessageIndicationsResponse>;
  /** @internal
   * @documentationMaturity preview
   * @requiredField conversationId
   * @requiredField options.indication
   * @requiredField options.messageIds
   * @adminMethod
   */
  function addMessageIndications(conversationId: string, options?: AddMessageIndicationsOptions): Promise<void>;
  interface AddMessageIndicationsOptions {
      messageIds: string[];
      /** by whom this action was done, defaults to PARTICIPANT in case of UNKNOWN_PERFORMED_BY */
      performedBy?: PerformedBy;
      indication: MessageIndication;
  }
  /**
   * Retrieves messages between the business and participant.
   *
   *
   * Up to 30 messages are returned per request. If the number of messages in a conversation is larger than 30,
   * `pagingMetadata.cursors` is returned in the response, indicating that another page of results is available.
   * To retrieve the next page of messages, pass the `next` cursor value
   * in the next request's `paging.cursor` parameter.
   *
   * To ensure you'll always retrieve the next record,
   * use the same visibility and sorting
   * in the first request and all subsequent requests.
   *
   * By default,
   * 30 messages are retrieved and sorted by `sequence` in descending order
   * (the most recent messages are first in the list).
   * @param conversationId - ID of the conversation that contains the intended messages.
   * @param visibility - __Required.__
   * Filters for messages with the specified visibility setting.
   *
   * - `"BUSINESS_AND_PARTICIPANT"`: Return messages visible to the business and the participant.
   * - `"BUSINESS"`: Return all messages.
   * @public
   * @documentationMaturity preview
   * @requiredField conversationId
   * @requiredField visibility
   * @param options - Additional options for listing messages.
   * @adminMethod
   */
  function listMessages(conversationId: string, visibility: MessageVisibility, options?: ListMessagesOptions): Promise<ListMessagesResponse>;
  interface ListMessagesOptions {
      /** Paging options. */
      paging?: CursorPaging;
      /** Sorting options. */
      sorting?: Sorting;
  }
  /**
   * Sends a message to the business or participant.
   *
   *
   * Specify the message type in `message.content`
   * by including the appropriate object: `basic`, `template`, `minimal`, or `form`.
   * For more information on message types
   * and how each type renders in Inbox and the Chat widget,
   * see [Message Types](#message-types).
   * @param conversationId - ID of the conversation to add the message to.
   * @param message - Message to send.
   * @public
   * @documentationMaturity preview
   * @requiredField conversationId
   * @requiredField message
   * @requiredField message.content
   * @param options - Additional options for sending a message.
   * @adminMethod
   */
  function sendMessage(conversationId: string, message: Message, options?: SendMessageOptions): Promise<SendMessageResponse>;
  interface SendMessageOptions {
      /**
       * Controls whether the message triggers notifications when it's received.
       *
       * Default: `false`
       */
      sendNotifications?: boolean;
      /**
       * Controls whether the unread count and conversation summary
       * are updated in the
       * [Message List](https://support.wix.com/en/article/wix-inbox-getting-started#view-your-messages).
       *
       * If `true`, unread count and conversation summary are not updated.
       *
       * Default: `false`
       */
      silent?: boolean;
      /** @internal */
      typingDelay?: number | null;
      /**
       * Controls which identity to use in the message's `sender` property.
       *
       * - `"CALLER"`: Uses the identity of the initiator of the sent message.
       * - `"PARTICIPANT"`: Uses the `anonymousVisitorId`, `contactId`, or `memberId` of the conversation's participant.
       *
       * Default: `"CALLER"`
       *
       */
      sendAs?: OverrideSenderOptions;
      /**
       * Wix user ID of the message sender.
       *
       * Required if `sendAs` is set to `BUSINESS_USER`.
       * @internal
       */
      businessUserId?: string | null;
  }
  
  type crmInboxV2Message_universal_d_Message = Message;
  type crmInboxV2Message_universal_d_MessageContent = MessageContent;
  type crmInboxV2Message_universal_d_MessageContentPayloadOneOf = MessageContentPayloadOneOf;
  type crmInboxV2Message_universal_d_BasicMessagePayload = BasicMessagePayload;
  type crmInboxV2Message_universal_d_BasicMessageData = BasicMessageData;
  type crmInboxV2Message_universal_d_BasicMessageDataDataOneOf = BasicMessageDataDataOneOf;
  type crmInboxV2Message_universal_d_ImageMessage = ImageMessage;
  type crmInboxV2Message_universal_d_FileMessage = FileMessage;
  type crmInboxV2Message_universal_d_TemplateMessagePayload = TemplateMessagePayload;
  type crmInboxV2Message_universal_d_Button = Button;
  type crmInboxV2Message_universal_d_PostbackProperties = PostbackProperties;
  type crmInboxV2Message_universal_d_Orientation = Orientation;
  const crmInboxV2Message_universal_d_Orientation: typeof Orientation;
  type crmInboxV2Message_universal_d_MinimalMessagePayload = MinimalMessagePayload;
  type crmInboxV2Message_universal_d_FormMessagePayload = FormMessagePayload;
  type crmInboxV2Message_universal_d_FormField = FormField;
  type crmInboxV2Message_universal_d_MediaItem = MediaItem;
  type crmInboxV2Message_universal_d_MediaItemMediaOneOf = MediaItemMediaOneOf;
  type crmInboxV2Message_universal_d_SystemMessagePayload = SystemMessagePayload;
  type crmInboxV2Message_universal_d_ContentType = ContentType;
  const crmInboxV2Message_universal_d_ContentType: typeof ContentType;
  type crmInboxV2Message_universal_d_IdentificationData = IdentificationData;
  type crmInboxV2Message_universal_d_IdentificationDataIdOneOf = IdentificationDataIdOneOf;
  type crmInboxV2Message_universal_d_Badge = Badge;
  type crmInboxV2Message_universal_d_BadgeVisibility = BadgeVisibility;
  const crmInboxV2Message_universal_d_BadgeVisibility: typeof BadgeVisibility;
  type crmInboxV2Message_universal_d_ChannelType = ChannelType;
  const crmInboxV2Message_universal_d_ChannelType: typeof ChannelType;
  type crmInboxV2Message_universal_d_MessageVisibility = MessageVisibility;
  const crmInboxV2Message_universal_d_MessageVisibility: typeof MessageVisibility;
  type crmInboxV2Message_universal_d_MessageDirection = MessageDirection;
  const crmInboxV2Message_universal_d_MessageDirection: typeof MessageDirection;
  type crmInboxV2Message_universal_d_GetMessageIndicationsRequest = GetMessageIndicationsRequest;
  type crmInboxV2Message_universal_d_GetMessageIndicationsResponse = GetMessageIndicationsResponse;
  type crmInboxV2Message_universal_d_MessageIndication = MessageIndication;
  type crmInboxV2Message_universal_d_IndicationType = IndicationType;
  const crmInboxV2Message_universal_d_IndicationType: typeof IndicationType;
  type crmInboxV2Message_universal_d_AddMessageIndicationsRequest = AddMessageIndicationsRequest;
  type crmInboxV2Message_universal_d_PerformedBy = PerformedBy;
  const crmInboxV2Message_universal_d_PerformedBy: typeof PerformedBy;
  type crmInboxV2Message_universal_d_AddMessageIndicationsResponse = AddMessageIndicationsResponse;
  type crmInboxV2Message_universal_d_MessageSentToParticipant = MessageSentToParticipant;
  type crmInboxV2Message_universal_d_CustomMessageData = CustomMessageData;
  type crmInboxV2Message_universal_d_MessageSentToBusiness = MessageSentToBusiness;
  type crmInboxV2Message_universal_d_InteractionInfo = InteractionInfo;
  type crmInboxV2Message_universal_d_ButtonInteracted = ButtonInteracted;
  type crmInboxV2Message_universal_d_ListMessagesRequest = ListMessagesRequest;
  type crmInboxV2Message_universal_d_CursorPaging = CursorPaging;
  type crmInboxV2Message_universal_d_Sorting = Sorting;
  type crmInboxV2Message_universal_d_SortOrder = SortOrder;
  const crmInboxV2Message_universal_d_SortOrder: typeof SortOrder;
  type crmInboxV2Message_universal_d_ListMessagesResponse = ListMessagesResponse;
  type crmInboxV2Message_universal_d_PagingMetadataV2 = PagingMetadataV2;
  type crmInboxV2Message_universal_d_Cursors = Cursors;
  type crmInboxV2Message_universal_d_SendMessageRequest = SendMessageRequest;
  type crmInboxV2Message_universal_d_OverrideSenderOptions = OverrideSenderOptions;
  const crmInboxV2Message_universal_d_OverrideSenderOptions: typeof OverrideSenderOptions;
  type crmInboxV2Message_universal_d_SendMessageResponse = SendMessageResponse;
  type crmInboxV2Message_universal_d_Empty = Empty;
  type crmInboxV2Message_universal_d_DomainEvent = DomainEvent;
  type crmInboxV2Message_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type crmInboxV2Message_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type crmInboxV2Message_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type crmInboxV2Message_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type crmInboxV2Message_universal_d_ActionEvent = ActionEvent;
  type crmInboxV2Message_universal_d_MessageEnvelope = MessageEnvelope;
  type crmInboxV2Message_universal_d_WebhooksIdentificationData = WebhooksIdentificationData;
  type crmInboxV2Message_universal_d_WebhooksIdentificationDataIdOneOf = WebhooksIdentificationDataIdOneOf;
  type crmInboxV2Message_universal_d_WebhookIdentityType = WebhookIdentityType;
  const crmInboxV2Message_universal_d_WebhookIdentityType: typeof WebhookIdentityType;
  const crmInboxV2Message_universal_d_getMessageIndications: typeof getMessageIndications;
  const crmInboxV2Message_universal_d_addMessageIndications: typeof addMessageIndications;
  type crmInboxV2Message_universal_d_AddMessageIndicationsOptions = AddMessageIndicationsOptions;
  const crmInboxV2Message_universal_d_listMessages: typeof listMessages;
  type crmInboxV2Message_universal_d_ListMessagesOptions = ListMessagesOptions;
  const crmInboxV2Message_universal_d_sendMessage: typeof sendMessage;
  type crmInboxV2Message_universal_d_SendMessageOptions = SendMessageOptions;
  namespace crmInboxV2Message_universal_d {
    export {
      crmInboxV2Message_universal_d_Message as Message,
      crmInboxV2Message_universal_d_MessageContent as MessageContent,
      crmInboxV2Message_universal_d_MessageContentPayloadOneOf as MessageContentPayloadOneOf,
      crmInboxV2Message_universal_d_BasicMessagePayload as BasicMessagePayload,
      crmInboxV2Message_universal_d_BasicMessageData as BasicMessageData,
      crmInboxV2Message_universal_d_BasicMessageDataDataOneOf as BasicMessageDataDataOneOf,
      crmInboxV2Message_universal_d_ImageMessage as ImageMessage,
      crmInboxV2Message_universal_d_FileMessage as FileMessage,
      crmInboxV2Message_universal_d_TemplateMessagePayload as TemplateMessagePayload,
      crmInboxV2Message_universal_d_Button as Button,
      crmInboxV2Message_universal_d_PostbackProperties as PostbackProperties,
      crmInboxV2Message_universal_d_Orientation as Orientation,
      crmInboxV2Message_universal_d_MinimalMessagePayload as MinimalMessagePayload,
      crmInboxV2Message_universal_d_FormMessagePayload as FormMessagePayload,
      crmInboxV2Message_universal_d_FormField as FormField,
      crmInboxV2Message_universal_d_MediaItem as MediaItem,
      crmInboxV2Message_universal_d_MediaItemMediaOneOf as MediaItemMediaOneOf,
      crmInboxV2Message_universal_d_SystemMessagePayload as SystemMessagePayload,
      crmInboxV2Message_universal_d_ContentType as ContentType,
      crmInboxV2Message_universal_d_IdentificationData as IdentificationData,
      crmInboxV2Message_universal_d_IdentificationDataIdOneOf as IdentificationDataIdOneOf,
      crmInboxV2Message_universal_d_Badge as Badge,
      crmInboxV2Message_universal_d_BadgeVisibility as BadgeVisibility,
      crmInboxV2Message_universal_d_ChannelType as ChannelType,
      crmInboxV2Message_universal_d_MessageVisibility as MessageVisibility,
      crmInboxV2Message_universal_d_MessageDirection as MessageDirection,
      crmInboxV2Message_universal_d_GetMessageIndicationsRequest as GetMessageIndicationsRequest,
      crmInboxV2Message_universal_d_GetMessageIndicationsResponse as GetMessageIndicationsResponse,
      crmInboxV2Message_universal_d_MessageIndication as MessageIndication,
      crmInboxV2Message_universal_d_IndicationType as IndicationType,
      crmInboxV2Message_universal_d_AddMessageIndicationsRequest as AddMessageIndicationsRequest,
      crmInboxV2Message_universal_d_PerformedBy as PerformedBy,
      crmInboxV2Message_universal_d_AddMessageIndicationsResponse as AddMessageIndicationsResponse,
      crmInboxV2Message_universal_d_MessageSentToParticipant as MessageSentToParticipant,
      crmInboxV2Message_universal_d_CustomMessageData as CustomMessageData,
      crmInboxV2Message_universal_d_MessageSentToBusiness as MessageSentToBusiness,
      crmInboxV2Message_universal_d_InteractionInfo as InteractionInfo,
      crmInboxV2Message_universal_d_ButtonInteracted as ButtonInteracted,
      crmInboxV2Message_universal_d_ListMessagesRequest as ListMessagesRequest,
      crmInboxV2Message_universal_d_CursorPaging as CursorPaging,
      crmInboxV2Message_universal_d_Sorting as Sorting,
      crmInboxV2Message_universal_d_SortOrder as SortOrder,
      crmInboxV2Message_universal_d_ListMessagesResponse as ListMessagesResponse,
      crmInboxV2Message_universal_d_PagingMetadataV2 as PagingMetadataV2,
      crmInboxV2Message_universal_d_Cursors as Cursors,
      crmInboxV2Message_universal_d_SendMessageRequest as SendMessageRequest,
      crmInboxV2Message_universal_d_OverrideSenderOptions as OverrideSenderOptions,
      crmInboxV2Message_universal_d_SendMessageResponse as SendMessageResponse,
      crmInboxV2Message_universal_d_Empty as Empty,
      crmInboxV2Message_universal_d_DomainEvent as DomainEvent,
      crmInboxV2Message_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      crmInboxV2Message_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      crmInboxV2Message_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      crmInboxV2Message_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      crmInboxV2Message_universal_d_ActionEvent as ActionEvent,
      crmInboxV2Message_universal_d_MessageEnvelope as MessageEnvelope,
      crmInboxV2Message_universal_d_WebhooksIdentificationData as WebhooksIdentificationData,
      crmInboxV2Message_universal_d_WebhooksIdentificationDataIdOneOf as WebhooksIdentificationDataIdOneOf,
      crmInboxV2Message_universal_d_WebhookIdentityType as WebhookIdentityType,
      crmInboxV2Message_universal_d_getMessageIndications as getMessageIndications,
      crmInboxV2Message_universal_d_addMessageIndications as addMessageIndications,
      crmInboxV2Message_universal_d_AddMessageIndicationsOptions as AddMessageIndicationsOptions,
      crmInboxV2Message_universal_d_listMessages as listMessages,
      crmInboxV2Message_universal_d_ListMessagesOptions as ListMessagesOptions,
      crmInboxV2Message_universal_d_sendMessage as sendMessage,
      crmInboxV2Message_universal_d_SendMessageOptions as SendMessageOptions,
    };
  }
  
  export { crmInboxV2Conversation_universal_d as conversations, crmInboxV2Message_universal_d as messages };
}
