declare module "wix-inbox-conversations.backend.v1" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
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
      participant?: IdentificationData;
      /**
       * List of communication channels where the visitor, contact, or member can receive messages.
       * @readonly
       */
      channels?: ChannelType[];
      /** Display name and avatar for the business. */
      businessDisplayData?: ConversationDisplayData;
      /** Display name and avatar for the visitor, contact, or member. */
      participantDisplayData?: ConversationDisplayData;
  }
  interface IdentificationData extends IdentificationDataIdOneOf {
      /**
       * ID of a site
       * [contact](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fcontacts).
       * @readonly
       */
      contactId?: string | null;
      /** ID of an anonymous site visitor. */
      anonymousVisitorId?: string;
      /**
       * ID of a site
       * [member](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fmember-permissions/members).
       */
      memberId?: string;
  }
  /** @oneof */
  interface IdentificationDataIdOneOf {
      /** ID of an anonymous site visitor. */
      anonymousVisitorId?: string;
      /**
       * ID of a site
       * [member](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fmember-permissions/members).
       */
      memberId?: string;
  }
  enum ChannelType {
      UNKNOWN_CHANNEL_TYPE = "UNKNOWN_CHANNEL_TYPE",
      CHAT = "CHAT",
      EMAIL = "EMAIL",
      SMS = "SMS",
      FACEBOOK = "FACEBOOK",
      INSTAGRAM = "INSTAGRAM",
      WHATSAPP = "WHATSAPP"
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
      /**
       * ID of a site
       * [contact](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fcontacts).
       */
      contactId?: string;
      /** ID of an anonymous site visitor. */
      anonymousVisitorId?: string;
      /**
       * ID of a site
       * [member](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fmember-permissions/members).
       */
      memberId?: string;
  }
  /** @oneof */
  interface ParticipantIdIdOneOf {
      /**
       * ID of a site
       * [contact](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fcontacts).
       */
      contactId?: string;
      /** ID of an anonymous site visitor. */
      anonymousVisitorId?: string;
      /**
       * ID of a site
       * [member](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fmember-permissions/members).
       */
      memberId?: string;
  }
  interface GetOrCreateConversationResponse {
      /** Created or retrieved conversation. */
      conversation?: Conversation;
      /**
       * Indicates whether the conversation was just created.
       *
       * If `true`, the conversation was just created.
       * If `false`, the conversation already existed.
       */
      newConversation?: boolean;
  }
  interface ListConversationsRequest {
      paging?: CursorPaging;
      /** only message time is supported for field name */
      sorting?: Sorting;
  }
  interface CursorPaging {
      /** Number of items to load. */
      limit?: number | null;
      /**
       * Pointer to the next or previous page in the list of results.
       *
       * You can get the relevant cursor token
       * from the `pagingMetadata` object in the previous call's response.
       * Not relevant for the first request.
       */
      cursor?: string | null;
  }
  interface Sorting {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
      order?: SortOrder;
  }
  enum SortOrder {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface ListConversationsResponse {
      conversations?: Conversation[];
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
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
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
      channel?: ChannelType;
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
  interface Empty {
  }
  /**
   * Retrieves a conversation by conversation ID.
   *
   * If you don't have the conversation ID,
   * use [Get Or Create Conversation](#get-or-create-conversation)
   * to retrieve the conversation with the visitor, contact, or member ID.
   * @param conversationId - Conversation ID.
   * @public
   * @requiredField conversationId
   */
  function getConversation(conversationId: string): Promise<GetConversationResponse>;
  /**
   * Retrieves a conversation for the specified visitor, contact, or member ID,
   * or creates one if it doesn't exist.
   * @public */
  function getOrCreateConversation(options?: GetOrCreateConversationOptions): Promise<GetOrCreateConversationResponse>;
  interface GetOrCreateConversationOptions {
      /**
       * ID of the visitor, contact, or member chatting with the business.
       *
       * Required for 3rd-party apps.
       */
      participantId?: ParticipantId;
  }
  function listConversations(options?: ListConversationsOptions): Promise<ListConversationsResponse>;
  interface ListConversationsOptions {
      paging?: CursorPaging;
      /** only message time is supported for field name */
      sorting?: Sorting;
  }
  /** @requiredField conversationId */
  function deleteConversation(conversationId: string): Promise<void>;
  /** @requiredField conversationId */
  function addConversationChannels(conversationId: string, options?: AddConversationChannelsOptions): Promise<void>;
  interface AddConversationChannelsOptions {
      conversationChannels?: ConversationChannel[];
  }
  
  const crmInboxV2Conversation_universal_d___debug: typeof __debug;
  type crmInboxV2Conversation_universal_d_Conversation = Conversation;
  type crmInboxV2Conversation_universal_d_IdentificationData = IdentificationData;
  type crmInboxV2Conversation_universal_d_IdentificationDataIdOneOf = IdentificationDataIdOneOf;
  type crmInboxV2Conversation_universal_d_ChannelType = ChannelType;
  const crmInboxV2Conversation_universal_d_ChannelType: typeof ChannelType;
  type crmInboxV2Conversation_universal_d_ConversationDisplayData = ConversationDisplayData;
  type crmInboxV2Conversation_universal_d_ConversationsMerged = ConversationsMerged;
  type crmInboxV2Conversation_universal_d_GetConversationRequest = GetConversationRequest;
  type crmInboxV2Conversation_universal_d_GetConversationResponse = GetConversationResponse;
  type crmInboxV2Conversation_universal_d_GetOrCreateConversationRequest = GetOrCreateConversationRequest;
  type crmInboxV2Conversation_universal_d_ParticipantId = ParticipantId;
  type crmInboxV2Conversation_universal_d_ParticipantIdIdOneOf = ParticipantIdIdOneOf;
  type crmInboxV2Conversation_universal_d_GetOrCreateConversationResponse = GetOrCreateConversationResponse;
  type crmInboxV2Conversation_universal_d_ListConversationsRequest = ListConversationsRequest;
  type crmInboxV2Conversation_universal_d_CursorPaging = CursorPaging;
  type crmInboxV2Conversation_universal_d_Sorting = Sorting;
  type crmInboxV2Conversation_universal_d_SortOrder = SortOrder;
  const crmInboxV2Conversation_universal_d_SortOrder: typeof SortOrder;
  type crmInboxV2Conversation_universal_d_ListConversationsResponse = ListConversationsResponse;
  type crmInboxV2Conversation_universal_d_PagingMetadataV2 = PagingMetadataV2;
  type crmInboxV2Conversation_universal_d_Cursors = Cursors;
  type crmInboxV2Conversation_universal_d_DeleteConversationRequest = DeleteConversationRequest;
  type crmInboxV2Conversation_universal_d_DeleteConversationResponse = DeleteConversationResponse;
  type crmInboxV2Conversation_universal_d_AddConversationChannelsRequest = AddConversationChannelsRequest;
  type crmInboxV2Conversation_universal_d_ConversationChannel = ConversationChannel;
  type crmInboxV2Conversation_universal_d_AddConversationChannelsResponse = AddConversationChannelsResponse;
  type crmInboxV2Conversation_universal_d_ChatroomsMerged = ChatroomsMerged;
  type crmInboxV2Conversation_universal_d_Empty = Empty;
  const crmInboxV2Conversation_universal_d_getConversation: typeof getConversation;
  const crmInboxV2Conversation_universal_d_getOrCreateConversation: typeof getOrCreateConversation;
  type crmInboxV2Conversation_universal_d_GetOrCreateConversationOptions = GetOrCreateConversationOptions;
  const crmInboxV2Conversation_universal_d_listConversations: typeof listConversations;
  type crmInboxV2Conversation_universal_d_ListConversationsOptions = ListConversationsOptions;
  const crmInboxV2Conversation_universal_d_deleteConversation: typeof deleteConversation;
  const crmInboxV2Conversation_universal_d_addConversationChannels: typeof addConversationChannels;
  type crmInboxV2Conversation_universal_d_AddConversationChannelsOptions = AddConversationChannelsOptions;
  namespace crmInboxV2Conversation_universal_d {
    export {
      crmInboxV2Conversation_universal_d___debug as __debug,
      crmInboxV2Conversation_universal_d_Conversation as Conversation,
      crmInboxV2Conversation_universal_d_IdentificationData as IdentificationData,
      crmInboxV2Conversation_universal_d_IdentificationDataIdOneOf as IdentificationDataIdOneOf,
      crmInboxV2Conversation_universal_d_ChannelType as ChannelType,
      crmInboxV2Conversation_universal_d_ConversationDisplayData as ConversationDisplayData,
      crmInboxV2Conversation_universal_d_ConversationsMerged as ConversationsMerged,
      crmInboxV2Conversation_universal_d_GetConversationRequest as GetConversationRequest,
      crmInboxV2Conversation_universal_d_GetConversationResponse as GetConversationResponse,
      crmInboxV2Conversation_universal_d_GetOrCreateConversationRequest as GetOrCreateConversationRequest,
      crmInboxV2Conversation_universal_d_ParticipantId as ParticipantId,
      crmInboxV2Conversation_universal_d_ParticipantIdIdOneOf as ParticipantIdIdOneOf,
      crmInboxV2Conversation_universal_d_GetOrCreateConversationResponse as GetOrCreateConversationResponse,
      crmInboxV2Conversation_universal_d_ListConversationsRequest as ListConversationsRequest,
      crmInboxV2Conversation_universal_d_CursorPaging as CursorPaging,
      crmInboxV2Conversation_universal_d_Sorting as Sorting,
      crmInboxV2Conversation_universal_d_SortOrder as SortOrder,
      crmInboxV2Conversation_universal_d_ListConversationsResponse as ListConversationsResponse,
      crmInboxV2Conversation_universal_d_PagingMetadataV2 as PagingMetadataV2,
      crmInboxV2Conversation_universal_d_Cursors as Cursors,
      crmInboxV2Conversation_universal_d_DeleteConversationRequest as DeleteConversationRequest,
      crmInboxV2Conversation_universal_d_DeleteConversationResponse as DeleteConversationResponse,
      crmInboxV2Conversation_universal_d_AddConversationChannelsRequest as AddConversationChannelsRequest,
      crmInboxV2Conversation_universal_d_ConversationChannel as ConversationChannel,
      crmInboxV2Conversation_universal_d_AddConversationChannelsResponse as AddConversationChannelsResponse,
      crmInboxV2Conversation_universal_d_ChatroomsMerged as ChatroomsMerged,
      crmInboxV2Conversation_universal_d_Empty as Empty,
      crmInboxV2Conversation_universal_d_getConversation as getConversation,
      crmInboxV2Conversation_universal_d_getOrCreateConversation as getOrCreateConversation,
      crmInboxV2Conversation_universal_d_GetOrCreateConversationOptions as GetOrCreateConversationOptions,
      crmInboxV2Conversation_universal_d_listConversations as listConversations,
      crmInboxV2Conversation_universal_d_ListConversationsOptions as ListConversationsOptions,
      crmInboxV2Conversation_universal_d_deleteConversation as deleteConversation,
      crmInboxV2Conversation_universal_d_addConversationChannels as addConversationChannels,
      crmInboxV2Conversation_universal_d_AddConversationChannelsOptions as AddConversationChannelsOptions,
    };
  }
  
  export { crmInboxV2Conversation_universal_d as inboxConversations };
}
