declare module "wix-livevideo-backend" {
  const __debug$3: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface ChatMessage {
      /** Message unique ID. */
      _id?: string | null;
      /** Message body. */
      body?: string | null;
      /** Message timestamp. */
      created?: Date;
      /** Creator of this message. */
      participantId?: string | null;
      /** Indicates if message is highlighted. */
      highlighted?: boolean | null;
  }
  interface ManagementListChatMessagesRequest {
      /**
       * Live session unique ID
       * @readonly
       */
      sessionId: string;
      /** Number of messages to load per page. */
      limit?: number;
      /**
       * If defined - messages older than defined message will be returned (exclusive).
       * Otherwise latest messages will be returned.
       */
      messageId?: string | null;
      /** If true - only highlighted messaged will be returned. */
      highlighted?: boolean | null;
  }
  interface ManagementListChatMessagesResponse {
      messages?: ChatMessage[];
  }
  interface DeleteChatMessagesRequest {
      /**
       * Live session unique ID
       * @readonly
       */
      sessionId: string;
      /** Messages to delete. */
      messages: string[];
  }
  interface DeleteChatMessagesResponse {
  }
  interface UpdateChatMessageRequest {
      /**
       * Live session unique ID
       * @readonly
       */
      sessionId: string;
      message: ChatMessage;
      fieldMask?: string[];
  }
  interface UpdateChatMessageResponse {
      message?: ChatMessage;
  }
  interface SendChatMessageRequest {
      /** Token for chat API authorization. */
      authorization: string;
      /** Chat message body. */
      body: string | null;
  }
  interface SendChatMessageResponse {
      message?: ChatMessage;
  }
  interface ListChatMessagesRequest {
      /** Token for chat API authorization. */
      authorization: string;
      /** Number of messages to load per page. */
      limit?: number;
      /**
       * If defined - messages older than defined message will be returned (exclusive).
       * Otherwise latest messages will be returned.
       */
      messageId?: string | null;
      /** If true - only highlighted messaged will be returned. */
      highlighted?: boolean | null;
  }
  interface ListChatMessagesResponse {
      messages?: ChatMessage[];
  }
  /**
   * Endpoint for listing chat messages. Latest messages are returned first.
   * @param sessionId - Live session unique ID
   * @public
   * @documentationMaturity preview
   * @requiredField sessionId
   * @adminMethod
   */
  function listChatMessages(sessionId: string, options?: ListChatMessagesOptions): Promise<ManagementListChatMessagesResponse>;
  interface ListChatMessagesOptions {
      /** Number of messages to load per page. */
      limit?: number;
      /**
       * If defined - messages older than defined message will be returned (exclusive).
       * Otherwise latest messages will be returned.
       */
      messageId?: string | null;
      /** If true - only highlighted messaged will be returned. */
      highlighted?: boolean | null;
  }
  /**
   * Endpoint for deleting chat messages.
   * @param sessionId - Live session unique ID
   * @param messages - Messages to delete.
   * @public
   * @documentationMaturity preview
   * @requiredField messages
   * @requiredField sessionId
   * @adminMethod
   */
  function deleteChatMessages(sessionId: string, messages: string[]): Promise<void>;
  /**
   * Endpoint for updating chat messages.
   * @param sessionId - Live session unique ID
   * @public
   * @documentationMaturity preview
   * @requiredField message
   * @requiredField message._id
   * @requiredField sessionId
   * @adminMethod
   */
  function updateChatMessage(sessionId: string, message: ChatMessage, options?: UpdateChatMessageOptions): Promise<UpdateChatMessageResponse>;
  interface UpdateChatMessageOptions {
      fieldMask?: string[];
  }
  /**
   * Endpoint for creating a chat message.
   * @param authorization - Token for chat API authorization.
   * @public
   * @documentationMaturity preview
   * @requiredField authorization
   * @requiredField options
   * @requiredField options.body
   */
  function sendChatMessage(authorization: string, options: SendChatMessageOptions): Promise<SendChatMessageResponse>;
  interface SendChatMessageOptions {
      /** Chat message body. */
      body: string | null;
  }
  /**
   * Endpoint for listing chat messages. Latest messages are returned first.
   * @param authorization - Token for chat API authorization.
   * @public
   * @documentationMaturity preview
   * @requiredField authorization
   */
  function publicListChatMessages(authorization: string, options?: PublicListChatMessagesOptions): Promise<ListChatMessagesResponse>;
  interface PublicListChatMessagesOptions {
      /** Number of messages to load per page. */
      limit?: number;
      /**
       * If defined - messages older than defined message will be returned (exclusive).
       * Otherwise latest messages will be returned.
       */
      messageId?: string | null;
      /** If true - only highlighted messaged will be returned. */
      highlighted?: boolean | null;
  }
  
  type livevideoV1Chat_universal_d_ChatMessage = ChatMessage;
  type livevideoV1Chat_universal_d_ManagementListChatMessagesRequest = ManagementListChatMessagesRequest;
  type livevideoV1Chat_universal_d_ManagementListChatMessagesResponse = ManagementListChatMessagesResponse;
  type livevideoV1Chat_universal_d_DeleteChatMessagesRequest = DeleteChatMessagesRequest;
  type livevideoV1Chat_universal_d_DeleteChatMessagesResponse = DeleteChatMessagesResponse;
  type livevideoV1Chat_universal_d_UpdateChatMessageRequest = UpdateChatMessageRequest;
  type livevideoV1Chat_universal_d_UpdateChatMessageResponse = UpdateChatMessageResponse;
  type livevideoV1Chat_universal_d_SendChatMessageRequest = SendChatMessageRequest;
  type livevideoV1Chat_universal_d_SendChatMessageResponse = SendChatMessageResponse;
  type livevideoV1Chat_universal_d_ListChatMessagesRequest = ListChatMessagesRequest;
  type livevideoV1Chat_universal_d_ListChatMessagesResponse = ListChatMessagesResponse;
  const livevideoV1Chat_universal_d_listChatMessages: typeof listChatMessages;
  type livevideoV1Chat_universal_d_ListChatMessagesOptions = ListChatMessagesOptions;
  const livevideoV1Chat_universal_d_deleteChatMessages: typeof deleteChatMessages;
  const livevideoV1Chat_universal_d_updateChatMessage: typeof updateChatMessage;
  type livevideoV1Chat_universal_d_UpdateChatMessageOptions = UpdateChatMessageOptions;
  const livevideoV1Chat_universal_d_sendChatMessage: typeof sendChatMessage;
  type livevideoV1Chat_universal_d_SendChatMessageOptions = SendChatMessageOptions;
  const livevideoV1Chat_universal_d_publicListChatMessages: typeof publicListChatMessages;
  type livevideoV1Chat_universal_d_PublicListChatMessagesOptions = PublicListChatMessagesOptions;
  namespace livevideoV1Chat_universal_d {
    export {
      __debug$3 as __debug,
      livevideoV1Chat_universal_d_ChatMessage as ChatMessage,
      livevideoV1Chat_universal_d_ManagementListChatMessagesRequest as ManagementListChatMessagesRequest,
      livevideoV1Chat_universal_d_ManagementListChatMessagesResponse as ManagementListChatMessagesResponse,
      livevideoV1Chat_universal_d_DeleteChatMessagesRequest as DeleteChatMessagesRequest,
      livevideoV1Chat_universal_d_DeleteChatMessagesResponse as DeleteChatMessagesResponse,
      livevideoV1Chat_universal_d_UpdateChatMessageRequest as UpdateChatMessageRequest,
      livevideoV1Chat_universal_d_UpdateChatMessageResponse as UpdateChatMessageResponse,
      livevideoV1Chat_universal_d_SendChatMessageRequest as SendChatMessageRequest,
      livevideoV1Chat_universal_d_SendChatMessageResponse as SendChatMessageResponse,
      livevideoV1Chat_universal_d_ListChatMessagesRequest as ListChatMessagesRequest,
      livevideoV1Chat_universal_d_ListChatMessagesResponse as ListChatMessagesResponse,
      livevideoV1Chat_universal_d_listChatMessages as listChatMessages,
      livevideoV1Chat_universal_d_ListChatMessagesOptions as ListChatMessagesOptions,
      livevideoV1Chat_universal_d_deleteChatMessages as deleteChatMessages,
      livevideoV1Chat_universal_d_updateChatMessage as updateChatMessage,
      livevideoV1Chat_universal_d_UpdateChatMessageOptions as UpdateChatMessageOptions,
      livevideoV1Chat_universal_d_sendChatMessage as sendChatMessage,
      livevideoV1Chat_universal_d_SendChatMessageOptions as SendChatMessageOptions,
      livevideoV1Chat_universal_d_publicListChatMessages as publicListChatMessages,
      livevideoV1Chat_universal_d_PublicListChatMessagesOptions as PublicListChatMessagesOptions,
    };
  }
  
  const __debug$2: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface Participant$1 {
      /** The ID of the session. */
      sessionId?: string;
      participantId?: string;
      /** Participant name */
      name?: string | null;
      /**
       * External id of entrance
       * @readonly
       */
      externalEntranceId?: string | null;
      /** Participant state */
      state?: ParticipantState$1[];
      /** @readonly */
      clientId?: string | null;
      /** @readonly */
      wixUserId?: string | null;
      /** @readonly */
      memberId?: string | null;
      /** @readonly */
      visitorId?: string | null;
  }
  enum ParticipantState$1 {
      /** Participant is a session manager */
      MANAGER = "MANAGER",
      /** Participant is banned */
      BANNED = "BANNED",
      /** Participant is hidden */
      HIDDEN = "HIDDEN",
      /** Participant is video recording bot */
      VIDEO_RECORDER = "VIDEO_RECORDER",
      /** Participant is video streaming bot */
      VIDEO_STREAMER = "VIDEO_STREAMER"
  }
  interface UpdateParticipantRequest$1 {
      participant: Participant$1;
      fieldMask?: string[];
  }
  interface UpdateParticipantResponse$1 {
      /** Updated participant */
      participant?: Participant$1;
  }
  interface RemoveParticipantRequest$1 {
      /** The ID of the session. */
      sessionId: string;
      /** The ID of the participant. */
      participantId: string;
  }
  interface RemoveParticipantResponse$1 {
      participant?: Participant$1;
  }
  interface QueryParticipantsRequest$1 {
      /** Query for listing participants. session_id EQ filter is mandatory. */
      query?: QueryV2$1;
  }
  interface QueryV2$1 extends QueryV2PagingMethodOneOf$1 {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$1;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$1;
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`
       * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
       */
      filter?: Record<string, any> | null;
      /**
       * Sort object in the following format:
       * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
       */
      sort?: Sorting$1[];
      /** Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned. */
      fields?: string[];
      /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned. */
      fieldsets?: string[];
  }
  /** @oneof */
  interface QueryV2PagingMethodOneOf$1 {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$1;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$1;
  }
  interface Sorting$1 {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
      order?: SortOrder$1;
  }
  enum SortOrder$1 {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface Paging$1 {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface CursorPaging$1 {
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
  interface QueryParticipantsResponse$1 {
      /** Participants */
      participants?: Participant$1[];
      metaData?: PagingMetadataV2$1;
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
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  /** @public
   * @documentationMaturity preview
   * @requiredField participant
   * @requiredField participant.participantId
   * @requiredField participant.sessionId
   * @adminMethod
   */
  function updateParticipant(participant: Participant$1, options?: UpdateParticipantOptions): Promise<UpdateParticipantResponse$1>;
  interface UpdateParticipantOptions {
      fieldMask?: string[];
  }
  /** @param sessionId - The ID of the session.
   * @public
   * @documentationMaturity preview
   * @requiredField options
   * @requiredField options.participantId
   * @requiredField sessionId
   * @adminMethod
   */
  function removeParticipant(sessionId: string, options: RemoveParticipantOptions): Promise<RemoveParticipantResponse$1>;
  interface RemoveParticipantOptions {
      /** The ID of the participant. */
      participantId: string;
  }
  /** @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function queryParticipants(options?: QueryParticipantsOptions): Promise<QueryParticipantsResponse$1>;
  interface QueryParticipantsOptions {
      /** Query for listing participants. session_id EQ filter is mandatory. */
      query?: QueryV2$1;
  }
  
  const livevideoV1Participant_universal_d_updateParticipant: typeof updateParticipant;
  type livevideoV1Participant_universal_d_UpdateParticipantOptions = UpdateParticipantOptions;
  const livevideoV1Participant_universal_d_removeParticipant: typeof removeParticipant;
  type livevideoV1Participant_universal_d_RemoveParticipantOptions = RemoveParticipantOptions;
  const livevideoV1Participant_universal_d_queryParticipants: typeof queryParticipants;
  type livevideoV1Participant_universal_d_QueryParticipantsOptions = QueryParticipantsOptions;
  namespace livevideoV1Participant_universal_d {
    export {
      __debug$2 as __debug,
      Participant$1 as Participant,
      ParticipantState$1 as ParticipantState,
      UpdateParticipantRequest$1 as UpdateParticipantRequest,
      UpdateParticipantResponse$1 as UpdateParticipantResponse,
      RemoveParticipantRequest$1 as RemoveParticipantRequest,
      RemoveParticipantResponse$1 as RemoveParticipantResponse,
      QueryParticipantsRequest$1 as QueryParticipantsRequest,
      QueryV2$1 as QueryV2,
      QueryV2PagingMethodOneOf$1 as QueryV2PagingMethodOneOf,
      Sorting$1 as Sorting,
      SortOrder$1 as SortOrder,
      Paging$1 as Paging,
      CursorPaging$1 as CursorPaging,
      QueryParticipantsResponse$1 as QueryParticipantsResponse,
      PagingMetadataV2$1 as PagingMetadataV2,
      Cursors$1 as Cursors,
      livevideoV1Participant_universal_d_updateParticipant as updateParticipant,
      livevideoV1Participant_universal_d_UpdateParticipantOptions as UpdateParticipantOptions,
      livevideoV1Participant_universal_d_removeParticipant as removeParticipant,
      livevideoV1Participant_universal_d_RemoveParticipantOptions as RemoveParticipantOptions,
      livevideoV1Participant_universal_d_queryParticipants as queryParticipants,
      livevideoV1Participant_universal_d_QueryParticipantsOptions as QueryParticipantsOptions,
    };
  }
  
  const __debug$1: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface Reaction {
      /** Reaction unique ID. */
      _id?: string | null;
      /** Reaction emoji. */
      emoji?: string;
      /** Reaction timestamp. */
      created?: Date;
      /** Creator of this reaction. */
      participantId?: string | null;
  }
  interface ManagementListReactionsRequest {
      /**
       * Live session unique ID
       * @readonly
       */
      sessionId: string;
      /** Number of reactions to load per page. */
      limit?: number;
      /** Number of reactions to skip per page. */
      offset?: number;
      /** Filter facets to include in the response. Supported facets: 'emoji' */
      facet?: string[];
  }
  interface ManagementListReactionsResponse {
      reactions?: Reaction[];
      /** Total number of reactions. */
      total?: number;
      /** Facets. */
      facets?: Record<string, ManagementFacetCounts>;
  }
  interface ManagementFacetCounts {
      /** Facet counts aggregated per value. */
      counts?: Record<string, number>;
  }
  interface ReactRequest {
      /** Token for reactions API authorization. */
      authorization: string;
      /**
       * Allowed emojis:
       * :thumbsup:
       * :raisedhand:
       * :heart:
       * :fire:
       * :lolol:
       */
      emoji?: string;
  }
  interface ReactResponse {
      reaction?: Reaction;
  }
  interface ListReactionsRequest {
      /** Token for reactions API authorization. */
      authorization: string;
      /** Number of reactions to load per page. */
      limit?: number;
      /** Number of reactions to skip per page. */
      offset?: number;
      /** Filter facets to include in the response. Supported facets: 'emoji' */
      facet?: string[];
  }
  interface ListReactionsResponse {
      reactions?: Reaction[];
      /** Total number of reactions. */
      total?: number;
      /** Facets. */
      facets?: Record<string, FacetCounts>;
  }
  interface FacetCounts {
      /** Facet counts aggregated per value. */
      counts?: Record<string, number>;
  }
  /**
   * Endpoint for listing reactions.
   * @param sessionId - Live session unique ID
   * @public
   * @documentationMaturity preview
   * @requiredField sessionId
   * @adminMethod
   */
  function backofficeListReactions(sessionId: string, options?: BackofficeListReactionsOptions): Promise<ManagementListReactionsResponse>;
  interface BackofficeListReactionsOptions {
      /** Number of reactions to load per page. */
      limit?: number;
      /** Number of reactions to skip per page. */
      offset?: number;
      /** Filter facets to include in the response. Supported facets: 'emoji' */
      facet?: string[];
  }
  /**
   * Endpoint for sending a reaction.
   * @param authorization - Token for reactions API authorization.
   * @public
   * @documentationMaturity preview
   * @requiredField authorization
   */
  function react(authorization: string, options?: ReactOptions): Promise<ReactResponse>;
  interface ReactOptions {
      /**
       * Allowed emojis:
       * :thumbsup:
       * :raisedhand:
       * :heart:
       * :fire:
       * :lolol:
       */
      emoji?: string;
  }
  /**
   * Endpoint for listing reactions.
   * @param authorization - Token for reactions API authorization.
   * @public
   * @documentationMaturity preview
   * @requiredField authorization
   */
  function listReactions(authorization: string, options?: ListReactionsOptions): Promise<ListReactionsResponse>;
  interface ListReactionsOptions {
      /** Number of reactions to load per page. */
      limit?: number;
      /** Number of reactions to skip per page. */
      offset?: number;
      /** Filter facets to include in the response. Supported facets: 'emoji' */
      facet?: string[];
  }
  
  type livevideoV1Reaction_universal_d_Reaction = Reaction;
  type livevideoV1Reaction_universal_d_ManagementListReactionsRequest = ManagementListReactionsRequest;
  type livevideoV1Reaction_universal_d_ManagementListReactionsResponse = ManagementListReactionsResponse;
  type livevideoV1Reaction_universal_d_ManagementFacetCounts = ManagementFacetCounts;
  type livevideoV1Reaction_universal_d_ReactRequest = ReactRequest;
  type livevideoV1Reaction_universal_d_ReactResponse = ReactResponse;
  type livevideoV1Reaction_universal_d_ListReactionsRequest = ListReactionsRequest;
  type livevideoV1Reaction_universal_d_ListReactionsResponse = ListReactionsResponse;
  type livevideoV1Reaction_universal_d_FacetCounts = FacetCounts;
  const livevideoV1Reaction_universal_d_backofficeListReactions: typeof backofficeListReactions;
  type livevideoV1Reaction_universal_d_BackofficeListReactionsOptions = BackofficeListReactionsOptions;
  const livevideoV1Reaction_universal_d_react: typeof react;
  type livevideoV1Reaction_universal_d_ReactOptions = ReactOptions;
  const livevideoV1Reaction_universal_d_listReactions: typeof listReactions;
  type livevideoV1Reaction_universal_d_ListReactionsOptions = ListReactionsOptions;
  namespace livevideoV1Reaction_universal_d {
    export {
      __debug$1 as __debug,
      livevideoV1Reaction_universal_d_Reaction as Reaction,
      livevideoV1Reaction_universal_d_ManagementListReactionsRequest as ManagementListReactionsRequest,
      livevideoV1Reaction_universal_d_ManagementListReactionsResponse as ManagementListReactionsResponse,
      livevideoV1Reaction_universal_d_ManagementFacetCounts as ManagementFacetCounts,
      livevideoV1Reaction_universal_d_ReactRequest as ReactRequest,
      livevideoV1Reaction_universal_d_ReactResponse as ReactResponse,
      livevideoV1Reaction_universal_d_ListReactionsRequest as ListReactionsRequest,
      livevideoV1Reaction_universal_d_ListReactionsResponse as ListReactionsResponse,
      livevideoV1Reaction_universal_d_FacetCounts as FacetCounts,
      livevideoV1Reaction_universal_d_backofficeListReactions as backofficeListReactions,
      livevideoV1Reaction_universal_d_BackofficeListReactionsOptions as BackofficeListReactionsOptions,
      livevideoV1Reaction_universal_d_react as react,
      livevideoV1Reaction_universal_d_ReactOptions as ReactOptions,
      livevideoV1Reaction_universal_d_listReactions as listReactions,
      livevideoV1Reaction_universal_d_ListReactionsOptions as ListReactionsOptions,
    };
  }
  
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface LiveSession extends LiveSessionBroadcastChannelOneOf {
      /** @readonly */
      meeting?: Meeting;
      /**
       * Live session unique ID
       * @readonly
       */
      _id?: string | null;
      /** Live session name */
      name?: string | null;
      /** Session start timestamp. */
      startDate?: Date;
      /** Duration in minutes */
      duration?: number | null;
      /** Session time zone ID in TZ database format, e.g., `EST`, `America/Los_Angeles`. */
      timeZoneId?: string | null;
      broadcastType?: BroadcastType;
      /** @readonly */
      broadcastState?: BroadcastState;
      /**
       * Session created timestamp.
       * @readonly
       */
      created?: Date;
      /**
       * Session modified timestamp.
       * @readonly
       */
      modified?: Date;
      /**
       * Session entity reference.
       * @internal
       */
      entityReference?: EntityReference;
      /**
       * Session time log.
       * @readonly
       */
      sessionTimeLog?: TimeLog;
      /**
       * Session created timestamp.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Session modified timestamp.
       * @readonly
       */
      modifiedDate?: Date;
      sessionType?: SessionType;
      /** @readonly */
      sessionState?: SessionState;
      sessionFlags?: SessionFlag[];
      /** @readonly */
      messagingChannel?: MessagingChannel[];
      /** Client provided Optional External Id related to live session, e.g., Event, BroadcastChannel Meeting */
      externalId?: string | null;
  }
  /** @oneof */
  interface LiveSessionBroadcastChannelOneOf {
      /** @readonly */
      meeting?: Meeting;
  }
  enum BroadcastType {
      /** Every participant is a publisher of video and audio */
      MEETING = "MEETING",
      /** Only organizers are publishers of video and audio */
      WEBINAR = "WEBINAR"
  }
  enum BroadcastState {
      NOT_STARTED = "NOT_STARTED",
      STARTED = "STARTED",
      ENDED = "ENDED"
  }
  interface Meeting {
      /**
       * External meeting ID
       * @internal
       * @readonly
       */
      externalId?: string | null;
      /**
       * Meeting started
       * @readonly
       */
      created?: Date;
      /**
       * AWS Chime media region
       * @readonly
       */
      region?: string | null;
  }
  interface EntityReference {
      /** App def ID. */
      appDefId?: string;
      /** App instance ID. */
      instanceId?: string;
      /** Entity type. */
      entityType?: string;
      /** Entity ID. Related to entity type. */
      entityId?: string;
      /** Wix App ID. */
      wixAppId?: string | null;
  }
  interface TimeLog {
      /**
       * Time log start timestamp.
       * @readonly
       */
      startDate?: Date;
      /**
       * Time log end timestamp.
       * @readonly
       */
      endDate?: Date;
      /**
       * Time log seconds duration.
       * @readonly
       */
      duration?: number | null;
      /**
       * Time log seconds duration.
       * @readonly
       */
      durationInSeconds?: number | null;
  }
  enum SessionType {
      /** Every participant is a publisher of video and audio */
      MEETING = "MEETING",
      /** Only organizers are publishers of video and audio */
      WEBINAR = "WEBINAR"
  }
  enum SessionState {
      NOT_STARTED = "NOT_STARTED",
      STARTED = "STARTED",
      ENDED = "ENDED"
  }
  enum SessionFlag {
      /** Can be used for filtering out hidden sessions in the UI */
      HIDDEN = "HIDDEN",
      /** Session is created for testing. Participant count and session duration restrictions apply. */
      TEST = "TEST"
  }
  interface MessagingChannel {
      /** @readonly */
      channelName?: string | null;
      /** @readonly */
      resourceId?: string | null;
  }
  interface DescribeEntranceRequest {
      /** The ID of the session. */
      sessionId: string;
      /** Token from entrance_link */
      token: string | null;
  }
  interface DescribeEntranceResponse {
      session?: LiveSession;
      /** Participant details */
      participant?: Participant;
      /** Currently joined participant count */
      joinedParticipantCount?: number | null;
  }
  interface Participant {
      /** The ID of the session. */
      sessionId?: string;
      participantId?: string;
      /** Participant name */
      name?: string | null;
      /**
       * External id of entrance
       * @readonly
       */
      externalEntranceId?: string | null;
      /** Participant state */
      state?: ParticipantState[];
      /** @readonly */
      clientId?: string | null;
      /** @readonly */
      wixUserId?: string | null;
      /** @readonly */
      memberId?: string | null;
      /** @readonly */
      visitorId?: string | null;
  }
  enum ParticipantState {
      /** Participant is a session manager */
      MANAGER = "MANAGER",
      /** Participant is banned */
      BANNED = "BANNED",
      /** Participant is hidden */
      HIDDEN = "HIDDEN",
      /** Participant is video recording bot */
      VIDEO_RECORDER = "VIDEO_RECORDER",
      /** Participant is video streaming bot */
      VIDEO_STREAMER = "VIDEO_STREAMER"
  }
  interface AddParticipantRequest {
      /** The ID of the session. */
      sessionId: string;
      /** Token from entrance_link */
      token?: string | null;
      /** Update participant name */
      name?: string | null;
  }
  interface AddParticipantResponse extends AddParticipantResponseClientPropertiesOneOf {
      props?: PropsV1;
      propsV2?: PropsV2;
      session?: LiveSession;
      /** Participant details */
      participant?: Participant;
      /** Token for participant api authorization */
      authorization?: string;
  }
  /** @oneof */
  interface AddParticipantResponseClientPropertiesOneOf {
      props?: PropsV1;
      propsV2?: PropsV2;
  }
  interface PropsV1 {
      key?: number;
      sid?: string;
      token?: string;
  }
  interface PropsV2 {
      meeting?: Record<string, any> | null;
      attendee?: Record<string, any> | null;
  }
  interface ListParticipantsRequest {
      /** Token for participant api authorization */
      authorization?: string;
      /** Optional participant id  filter */
      participantId?: string[];
  }
  interface ListParticipantsResponse {
      /** Participants */
      participants?: Participant[];
  }
  interface FallbackJoinRequest {
      /** The ID of the session. */
      sessionId: string;
      /** Meta site id. */
      m: string;
      /** Token. */
      t: string;
      /** Request language. */
      lang?: string | null;
  }
  interface RawHttpResponse {
      body?: Uint8Array;
      statusCode?: number | null;
      headers?: HeadersEntry[];
  }
  interface HeadersEntry {
      key?: string;
      value?: string;
  }
  interface DescribeLiveSessionsRequest {
  }
  interface DescribeLiveSessionsResponse {
      /** Limit of sessions to be created and started */
      sessionLimit?: number | null;
  }
  interface GetLiveSessionRequest {
      _id: string;
  }
  interface GetLiveSessionResponse {
      session?: LiveSession;
  }
  interface CreateLiveSessionRequest {
      session: LiveSession;
  }
  interface CreateLiveSessionResponse {
      session?: LiveSession;
  }
  interface UpdateLiveSessionRequest {
      session: LiveSession;
      fieldMask?: string[];
  }
  interface UpdateLiveSessionResponse {
      session?: LiveSession;
  }
  interface DeleteLiveSessionRequest {
      _id: string;
  }
  interface DeleteLiveSessionResponse {
  }
  interface QueryLiveSessionsRequest {
      /**
       * Query for listing LiveSessions, with the following indexes: "LiveSession.id", "LiveSession.tag", "LiveSession.status".
       * The query is optional, if no query is provided then the non-deleted LiveSessions will be returned.
       */
      query?: Query;
  }
  interface Query {
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`
       * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
       */
      filter?: any;
      /**
       * Sort object in the following format:
       * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
       */
      sort?: Sorting[];
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
      /** Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned. */
      fields?: string[];
      /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned. */
      fieldsets?: string[];
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
  interface Paging {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface QueryLiveSessionsResponse {
      entries?: LiveSession[];
      offset?: number;
      totalCount?: number;
      metaData?: PagingMetadata;
  }
  interface PagingMetadata {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      offset?: number | null;
      /** Total number of items that match the query. */
      total?: number | null;
      /** Flag that indicates the server failed to calculate the `total` field. */
      tooManyToCount?: boolean | null;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       * @internal
       */
      hasNext?: boolean | null;
  }
  interface StartLiveSessionRequest {
      /** The ID of the session. */
      sessionId: string;
      /**
       * AWS Chime media region
       * https://docs.aws.amazon.com/chime/latest/dg/chime-sdk-meetings-regions.html
       * default: "us-east-1"
       */
      region?: string | null;
  }
  interface StartLiveSessionResponse {
      session?: LiveSession;
  }
  interface EndLiveSessionRequest {
      /** The ID of the session. */
      sessionId: string;
  }
  interface EndLiveSessionResponse {
      session?: LiveSession;
  }
  interface CreateEntranceLinkRequest {
      /** Session to create an entrance link for */
      sessionId: string;
      /** Single participant use at the time */
      limited?: boolean;
      /** Optional participant name (can be changed later) */
      name?: string | null;
  }
  interface CreateEntranceLinkResponse {
      /** Link to dashboard */
      managementLink?: string;
      /** Format: https://mysite.com/live-video/{session_id}?t={token} */
      entranceLink?: string;
      /** Resolved entrance token */
      entranceToken?: string;
      /** Predefined for limited link */
      participant?: Participant;
  }
  interface CreateEntranceRequest {
      /** Session to create an entrance link for */
      sessionId: string;
      entrances?: Entrance[];
  }
  interface Entrance extends EntranceEntranceTypeOneOf {
      universal?: UniversalEntrance;
      personal?: PersonalEntrance;
      videoRecorder?: VideoRecorderEntrance;
      videoStreamer?: VideoStreamerEntrance;
  }
  /** @oneof */
  interface EntranceEntranceTypeOneOf {
      universal?: UniversalEntrance;
      personal?: PersonalEntrance;
      videoRecorder?: VideoRecorderEntrance;
      videoStreamer?: VideoStreamerEntrance;
  }
  interface UniversalEntrance {
      /**
       * Entrance link
       * @readonly
       */
      link?: EntranceLink;
  }
  interface EntranceLink {
      /**
       * Format: https://mysite.com/live-video/{session_id}?t={token}
       * @readonly
       */
      url?: string | null;
      /**
       * Entrance token
       * @readonly
       */
      token?: string | null;
      /**
       * Format: https://www.wix.com/_api/livevideo-server/v1/join/{session_id}?m={metasiteID}&t={token}
       * @readonly
       */
      fallbackUrl?: string | null;
  }
  interface PersonalEntrance {
      /** Unique per site external person id guarantees idempotent link generation */
      externalId?: string;
      /** Optional participant name (can be changed later) */
      name?: string | null;
      /**
       * Entrance link
       * @readonly
       */
      link?: EntranceLink;
      /**
       * Predefined participant
       * @readonly
       */
      participant?: Participant;
  }
  interface VideoRecorderEntrance {
      /**
       * Entrance link
       * @readonly
       */
      link?: EntranceLink;
      /**
       * Predefined participant
       * @readonly
       */
      participant?: Participant;
  }
  interface VideoStreamerEntrance {
      /**
       * Entrance link
       * @readonly
       */
      link?: EntranceLink;
      /**
       * Predefined participant
       * @readonly
       */
      participant?: Participant;
  }
  interface CreateEntranceResponse {
      /** Created entrances */
      entrances?: Entrance[];
  }
  interface UpdateParticipantRequest {
      participant?: Participant;
      fieldMask?: string[];
  }
  interface UpdateParticipantResponse {
      /** Updated participant */
      participant?: Participant;
  }
  interface RemoveParticipantRequest {
      /** The ID of the session. */
      sessionId?: string;
      /** The ID of the participant. */
      participantId?: string;
  }
  interface RemoveParticipantResponse {
      participant?: Participant;
  }
  interface QueryParticipantsRequest {
      /** Query for listing participants. session_id EQ filter is mandatory. */
      query?: QueryV2;
  }
  interface QueryV2 extends QueryV2PagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`
       * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
       */
      filter?: Record<string, any> | null;
      /**
       * Sort object in the following format:
       * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
       */
      sort?: Sorting[];
      /** Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned. */
      fields?: string[];
      /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned. */
      fieldsets?: string[];
  }
  /** @oneof */
  interface QueryV2PagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
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
  interface QueryParticipantsResponse {
      /** Participants */
      participants?: Participant[];
      metaData?: PagingMetadataV2;
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
  /** @param sessionId - The ID of the session.
   * @public
   * @documentationMaturity preview
   * @requiredField options
   * @requiredField options.token
   * @requiredField sessionId
   */
  function describeEntrance(sessionId: string, options: DescribeEntranceOptions): Promise<DescribeEntranceResponse>;
  interface DescribeEntranceOptions {
      /** Token from entrance_link */
      token: string | null;
  }
  /** @param sessionId - The ID of the session.
   * @public
   * @documentationMaturity preview
   * @requiredField sessionId
   */
  function addParticipant(sessionId: string, options?: AddParticipantOptions): Promise<AddParticipantResponse>;
  interface AddParticipantOptions {
      /** Token from entrance_link */
      token?: string | null;
      /** Update participant name */
      name?: string | null;
  }
  /** @public
   * @documentationMaturity preview
   */
  function listParticipants(options?: ListParticipantsOptions): Promise<ListParticipantsResponse>;
  interface ListParticipantsOptions {
      /** Token for participant api authorization */
      authorization?: string;
      /** Optional participant id  filter */
      participantId?: string[];
  }
  /** @param sessionId - The ID of the session.
   * @param m - Meta site id.
   * @internal
   * @documentationMaturity preview
   * @requiredField m
   * @requiredField options.t
   * @requiredField sessionId
   * @adminMethod
   */
  function fallbackJoin(sessionId: string, m: string, options?: FallbackJoinOptions): Promise<RawHttpResponse>;
  interface FallbackJoinOptions {
      /** Token. */
      t: string;
      /** Request language. */
      lang?: string | null;
  }
  /** @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function describeLiveSessions(): Promise<DescribeLiveSessionsResponse>;
  /** @public
   * @documentationMaturity preview
   * @requiredField _id
   */
  function getLiveSession(_id: string): Promise<GetLiveSessionResponse>;
  /** @public
   * @documentationMaturity preview
   * @requiredField session
   * @requiredField session.duration
   * @requiredField session.name
   * @requiredField session.startDate
   * @adminMethod
   */
  function createLiveSession(session: LiveSession): Promise<CreateLiveSessionResponse>;
  /** @public
   * @documentationMaturity preview
   * @requiredField session
   * @requiredField session._id
   * @adminMethod
   */
  function updateLiveSession(session: LiveSession, options?: UpdateLiveSessionOptions): Promise<UpdateLiveSessionResponse>;
  interface UpdateLiveSessionOptions {
      fieldMask?: string[];
  }
  /** @public
   * @documentationMaturity preview
   * @requiredField _id
   * @adminMethod
   */
  function deleteLiveSession(_id: string): Promise<void>;
  /** @public
   * @documentationMaturity preview
   */
  function queryLiveSessions(options?: QueryLiveSessionsOptions): Promise<QueryLiveSessionsResponse>;
  interface QueryLiveSessionsOptions {
      /**
       * Query for listing LiveSessions, with the following indexes: "LiveSession.id", "LiveSession.tag", "LiveSession.status".
       * The query is optional, if no query is provided then the non-deleted LiveSessions will be returned.
       */
      query?: Query;
  }
  /** @param sessionId - The ID of the session.
   * @public
   * @documentationMaturity preview
   * @requiredField sessionId
   * @adminMethod
   */
  function startLiveSession(sessionId: string, options?: StartLiveSessionOptions): Promise<StartLiveSessionResponse>;
  interface StartLiveSessionOptions {
      /**
       * AWS Chime media region
       * https://docs.aws.amazon.com/chime/latest/dg/chime-sdk-meetings-regions.html
       * default: "us-east-1"
       */
      region?: string | null;
  }
  /** @param sessionId - The ID of the session.
   * @public
   * @documentationMaturity preview
   * @requiredField sessionId
   * @adminMethod
   */
  function endLiveSession(sessionId: string): Promise<EndLiveSessionResponse>;
  /** @param sessionId - Session to create an entrance link for
   * @public
   * @documentationMaturity preview
   * @requiredField sessionId
   * @adminMethod
   */
  function createEntranceLink(sessionId: string, options?: CreateEntranceLinkOptions): Promise<CreateEntranceLinkResponse>;
  interface CreateEntranceLinkOptions {
      /** Single participant use at the time */
      limited?: boolean;
      /** Optional participant name (can be changed later) */
      name?: string | null;
  }
  /** @param sessionId - Session to create an entrance link for
   * @public
   * @documentationMaturity preview
   * @requiredField options.entrances.personal.externalId
   * @requiredField sessionId
   * @adminMethod
   */
  function createEntrance(sessionId: string, options?: CreateEntranceOptions): Promise<CreateEntranceResponse>;
  interface CreateEntranceOptions {
      entrances?: Entrance[];
  }
  
  const livevideoV1Session_universal_d___debug: typeof __debug;
  type livevideoV1Session_universal_d_LiveSession = LiveSession;
  type livevideoV1Session_universal_d_LiveSessionBroadcastChannelOneOf = LiveSessionBroadcastChannelOneOf;
  type livevideoV1Session_universal_d_BroadcastType = BroadcastType;
  const livevideoV1Session_universal_d_BroadcastType: typeof BroadcastType;
  type livevideoV1Session_universal_d_BroadcastState = BroadcastState;
  const livevideoV1Session_universal_d_BroadcastState: typeof BroadcastState;
  type livevideoV1Session_universal_d_Meeting = Meeting;
  type livevideoV1Session_universal_d_EntityReference = EntityReference;
  type livevideoV1Session_universal_d_TimeLog = TimeLog;
  type livevideoV1Session_universal_d_SessionType = SessionType;
  const livevideoV1Session_universal_d_SessionType: typeof SessionType;
  type livevideoV1Session_universal_d_SessionState = SessionState;
  const livevideoV1Session_universal_d_SessionState: typeof SessionState;
  type livevideoV1Session_universal_d_SessionFlag = SessionFlag;
  const livevideoV1Session_universal_d_SessionFlag: typeof SessionFlag;
  type livevideoV1Session_universal_d_MessagingChannel = MessagingChannel;
  type livevideoV1Session_universal_d_DescribeEntranceRequest = DescribeEntranceRequest;
  type livevideoV1Session_universal_d_DescribeEntranceResponse = DescribeEntranceResponse;
  type livevideoV1Session_universal_d_Participant = Participant;
  type livevideoV1Session_universal_d_ParticipantState = ParticipantState;
  const livevideoV1Session_universal_d_ParticipantState: typeof ParticipantState;
  type livevideoV1Session_universal_d_AddParticipantRequest = AddParticipantRequest;
  type livevideoV1Session_universal_d_AddParticipantResponse = AddParticipantResponse;
  type livevideoV1Session_universal_d_AddParticipantResponseClientPropertiesOneOf = AddParticipantResponseClientPropertiesOneOf;
  type livevideoV1Session_universal_d_PropsV1 = PropsV1;
  type livevideoV1Session_universal_d_PropsV2 = PropsV2;
  type livevideoV1Session_universal_d_ListParticipantsRequest = ListParticipantsRequest;
  type livevideoV1Session_universal_d_ListParticipantsResponse = ListParticipantsResponse;
  type livevideoV1Session_universal_d_FallbackJoinRequest = FallbackJoinRequest;
  type livevideoV1Session_universal_d_RawHttpResponse = RawHttpResponse;
  type livevideoV1Session_universal_d_HeadersEntry = HeadersEntry;
  type livevideoV1Session_universal_d_DescribeLiveSessionsRequest = DescribeLiveSessionsRequest;
  type livevideoV1Session_universal_d_DescribeLiveSessionsResponse = DescribeLiveSessionsResponse;
  type livevideoV1Session_universal_d_GetLiveSessionRequest = GetLiveSessionRequest;
  type livevideoV1Session_universal_d_GetLiveSessionResponse = GetLiveSessionResponse;
  type livevideoV1Session_universal_d_CreateLiveSessionRequest = CreateLiveSessionRequest;
  type livevideoV1Session_universal_d_CreateLiveSessionResponse = CreateLiveSessionResponse;
  type livevideoV1Session_universal_d_UpdateLiveSessionRequest = UpdateLiveSessionRequest;
  type livevideoV1Session_universal_d_UpdateLiveSessionResponse = UpdateLiveSessionResponse;
  type livevideoV1Session_universal_d_DeleteLiveSessionRequest = DeleteLiveSessionRequest;
  type livevideoV1Session_universal_d_DeleteLiveSessionResponse = DeleteLiveSessionResponse;
  type livevideoV1Session_universal_d_QueryLiveSessionsRequest = QueryLiveSessionsRequest;
  type livevideoV1Session_universal_d_Query = Query;
  type livevideoV1Session_universal_d_Sorting = Sorting;
  type livevideoV1Session_universal_d_SortOrder = SortOrder;
  const livevideoV1Session_universal_d_SortOrder: typeof SortOrder;
  type livevideoV1Session_universal_d_Paging = Paging;
  type livevideoV1Session_universal_d_QueryLiveSessionsResponse = QueryLiveSessionsResponse;
  type livevideoV1Session_universal_d_PagingMetadata = PagingMetadata;
  type livevideoV1Session_universal_d_StartLiveSessionRequest = StartLiveSessionRequest;
  type livevideoV1Session_universal_d_StartLiveSessionResponse = StartLiveSessionResponse;
  type livevideoV1Session_universal_d_EndLiveSessionRequest = EndLiveSessionRequest;
  type livevideoV1Session_universal_d_EndLiveSessionResponse = EndLiveSessionResponse;
  type livevideoV1Session_universal_d_CreateEntranceLinkRequest = CreateEntranceLinkRequest;
  type livevideoV1Session_universal_d_CreateEntranceLinkResponse = CreateEntranceLinkResponse;
  type livevideoV1Session_universal_d_CreateEntranceRequest = CreateEntranceRequest;
  type livevideoV1Session_universal_d_Entrance = Entrance;
  type livevideoV1Session_universal_d_EntranceEntranceTypeOneOf = EntranceEntranceTypeOneOf;
  type livevideoV1Session_universal_d_UniversalEntrance = UniversalEntrance;
  type livevideoV1Session_universal_d_EntranceLink = EntranceLink;
  type livevideoV1Session_universal_d_PersonalEntrance = PersonalEntrance;
  type livevideoV1Session_universal_d_VideoRecorderEntrance = VideoRecorderEntrance;
  type livevideoV1Session_universal_d_VideoStreamerEntrance = VideoStreamerEntrance;
  type livevideoV1Session_universal_d_CreateEntranceResponse = CreateEntranceResponse;
  type livevideoV1Session_universal_d_UpdateParticipantRequest = UpdateParticipantRequest;
  type livevideoV1Session_universal_d_UpdateParticipantResponse = UpdateParticipantResponse;
  type livevideoV1Session_universal_d_RemoveParticipantRequest = RemoveParticipantRequest;
  type livevideoV1Session_universal_d_RemoveParticipantResponse = RemoveParticipantResponse;
  type livevideoV1Session_universal_d_QueryParticipantsRequest = QueryParticipantsRequest;
  type livevideoV1Session_universal_d_QueryV2 = QueryV2;
  type livevideoV1Session_universal_d_QueryV2PagingMethodOneOf = QueryV2PagingMethodOneOf;
  type livevideoV1Session_universal_d_CursorPaging = CursorPaging;
  type livevideoV1Session_universal_d_QueryParticipantsResponse = QueryParticipantsResponse;
  type livevideoV1Session_universal_d_PagingMetadataV2 = PagingMetadataV2;
  type livevideoV1Session_universal_d_Cursors = Cursors;
  const livevideoV1Session_universal_d_describeEntrance: typeof describeEntrance;
  type livevideoV1Session_universal_d_DescribeEntranceOptions = DescribeEntranceOptions;
  const livevideoV1Session_universal_d_addParticipant: typeof addParticipant;
  type livevideoV1Session_universal_d_AddParticipantOptions = AddParticipantOptions;
  const livevideoV1Session_universal_d_listParticipants: typeof listParticipants;
  type livevideoV1Session_universal_d_ListParticipantsOptions = ListParticipantsOptions;
  const livevideoV1Session_universal_d_fallbackJoin: typeof fallbackJoin;
  type livevideoV1Session_universal_d_FallbackJoinOptions = FallbackJoinOptions;
  const livevideoV1Session_universal_d_describeLiveSessions: typeof describeLiveSessions;
  const livevideoV1Session_universal_d_getLiveSession: typeof getLiveSession;
  const livevideoV1Session_universal_d_createLiveSession: typeof createLiveSession;
  const livevideoV1Session_universal_d_updateLiveSession: typeof updateLiveSession;
  type livevideoV1Session_universal_d_UpdateLiveSessionOptions = UpdateLiveSessionOptions;
  const livevideoV1Session_universal_d_deleteLiveSession: typeof deleteLiveSession;
  const livevideoV1Session_universal_d_queryLiveSessions: typeof queryLiveSessions;
  type livevideoV1Session_universal_d_QueryLiveSessionsOptions = QueryLiveSessionsOptions;
  const livevideoV1Session_universal_d_startLiveSession: typeof startLiveSession;
  type livevideoV1Session_universal_d_StartLiveSessionOptions = StartLiveSessionOptions;
  const livevideoV1Session_universal_d_endLiveSession: typeof endLiveSession;
  const livevideoV1Session_universal_d_createEntranceLink: typeof createEntranceLink;
  type livevideoV1Session_universal_d_CreateEntranceLinkOptions = CreateEntranceLinkOptions;
  const livevideoV1Session_universal_d_createEntrance: typeof createEntrance;
  type livevideoV1Session_universal_d_CreateEntranceOptions = CreateEntranceOptions;
  namespace livevideoV1Session_universal_d {
    export {
      livevideoV1Session_universal_d___debug as __debug,
      livevideoV1Session_universal_d_LiveSession as LiveSession,
      livevideoV1Session_universal_d_LiveSessionBroadcastChannelOneOf as LiveSessionBroadcastChannelOneOf,
      livevideoV1Session_universal_d_BroadcastType as BroadcastType,
      livevideoV1Session_universal_d_BroadcastState as BroadcastState,
      livevideoV1Session_universal_d_Meeting as Meeting,
      livevideoV1Session_universal_d_EntityReference as EntityReference,
      livevideoV1Session_universal_d_TimeLog as TimeLog,
      livevideoV1Session_universal_d_SessionType as SessionType,
      livevideoV1Session_universal_d_SessionState as SessionState,
      livevideoV1Session_universal_d_SessionFlag as SessionFlag,
      livevideoV1Session_universal_d_MessagingChannel as MessagingChannel,
      livevideoV1Session_universal_d_DescribeEntranceRequest as DescribeEntranceRequest,
      livevideoV1Session_universal_d_DescribeEntranceResponse as DescribeEntranceResponse,
      livevideoV1Session_universal_d_Participant as Participant,
      livevideoV1Session_universal_d_ParticipantState as ParticipantState,
      livevideoV1Session_universal_d_AddParticipantRequest as AddParticipantRequest,
      livevideoV1Session_universal_d_AddParticipantResponse as AddParticipantResponse,
      livevideoV1Session_universal_d_AddParticipantResponseClientPropertiesOneOf as AddParticipantResponseClientPropertiesOneOf,
      livevideoV1Session_universal_d_PropsV1 as PropsV1,
      livevideoV1Session_universal_d_PropsV2 as PropsV2,
      livevideoV1Session_universal_d_ListParticipantsRequest as ListParticipantsRequest,
      livevideoV1Session_universal_d_ListParticipantsResponse as ListParticipantsResponse,
      livevideoV1Session_universal_d_FallbackJoinRequest as FallbackJoinRequest,
      livevideoV1Session_universal_d_RawHttpResponse as RawHttpResponse,
      livevideoV1Session_universal_d_HeadersEntry as HeadersEntry,
      livevideoV1Session_universal_d_DescribeLiveSessionsRequest as DescribeLiveSessionsRequest,
      livevideoV1Session_universal_d_DescribeLiveSessionsResponse as DescribeLiveSessionsResponse,
      livevideoV1Session_universal_d_GetLiveSessionRequest as GetLiveSessionRequest,
      livevideoV1Session_universal_d_GetLiveSessionResponse as GetLiveSessionResponse,
      livevideoV1Session_universal_d_CreateLiveSessionRequest as CreateLiveSessionRequest,
      livevideoV1Session_universal_d_CreateLiveSessionResponse as CreateLiveSessionResponse,
      livevideoV1Session_universal_d_UpdateLiveSessionRequest as UpdateLiveSessionRequest,
      livevideoV1Session_universal_d_UpdateLiveSessionResponse as UpdateLiveSessionResponse,
      livevideoV1Session_universal_d_DeleteLiveSessionRequest as DeleteLiveSessionRequest,
      livevideoV1Session_universal_d_DeleteLiveSessionResponse as DeleteLiveSessionResponse,
      livevideoV1Session_universal_d_QueryLiveSessionsRequest as QueryLiveSessionsRequest,
      livevideoV1Session_universal_d_Query as Query,
      livevideoV1Session_universal_d_Sorting as Sorting,
      livevideoV1Session_universal_d_SortOrder as SortOrder,
      livevideoV1Session_universal_d_Paging as Paging,
      livevideoV1Session_universal_d_QueryLiveSessionsResponse as QueryLiveSessionsResponse,
      livevideoV1Session_universal_d_PagingMetadata as PagingMetadata,
      livevideoV1Session_universal_d_StartLiveSessionRequest as StartLiveSessionRequest,
      livevideoV1Session_universal_d_StartLiveSessionResponse as StartLiveSessionResponse,
      livevideoV1Session_universal_d_EndLiveSessionRequest as EndLiveSessionRequest,
      livevideoV1Session_universal_d_EndLiveSessionResponse as EndLiveSessionResponse,
      livevideoV1Session_universal_d_CreateEntranceLinkRequest as CreateEntranceLinkRequest,
      livevideoV1Session_universal_d_CreateEntranceLinkResponse as CreateEntranceLinkResponse,
      livevideoV1Session_universal_d_CreateEntranceRequest as CreateEntranceRequest,
      livevideoV1Session_universal_d_Entrance as Entrance,
      livevideoV1Session_universal_d_EntranceEntranceTypeOneOf as EntranceEntranceTypeOneOf,
      livevideoV1Session_universal_d_UniversalEntrance as UniversalEntrance,
      livevideoV1Session_universal_d_EntranceLink as EntranceLink,
      livevideoV1Session_universal_d_PersonalEntrance as PersonalEntrance,
      livevideoV1Session_universal_d_VideoRecorderEntrance as VideoRecorderEntrance,
      livevideoV1Session_universal_d_VideoStreamerEntrance as VideoStreamerEntrance,
      livevideoV1Session_universal_d_CreateEntranceResponse as CreateEntranceResponse,
      livevideoV1Session_universal_d_UpdateParticipantRequest as UpdateParticipantRequest,
      livevideoV1Session_universal_d_UpdateParticipantResponse as UpdateParticipantResponse,
      livevideoV1Session_universal_d_RemoveParticipantRequest as RemoveParticipantRequest,
      livevideoV1Session_universal_d_RemoveParticipantResponse as RemoveParticipantResponse,
      livevideoV1Session_universal_d_QueryParticipantsRequest as QueryParticipantsRequest,
      livevideoV1Session_universal_d_QueryV2 as QueryV2,
      livevideoV1Session_universal_d_QueryV2PagingMethodOneOf as QueryV2PagingMethodOneOf,
      livevideoV1Session_universal_d_CursorPaging as CursorPaging,
      livevideoV1Session_universal_d_QueryParticipantsResponse as QueryParticipantsResponse,
      livevideoV1Session_universal_d_PagingMetadataV2 as PagingMetadataV2,
      livevideoV1Session_universal_d_Cursors as Cursors,
      livevideoV1Session_universal_d_describeEntrance as describeEntrance,
      livevideoV1Session_universal_d_DescribeEntranceOptions as DescribeEntranceOptions,
      livevideoV1Session_universal_d_addParticipant as addParticipant,
      livevideoV1Session_universal_d_AddParticipantOptions as AddParticipantOptions,
      livevideoV1Session_universal_d_listParticipants as listParticipants,
      livevideoV1Session_universal_d_ListParticipantsOptions as ListParticipantsOptions,
      livevideoV1Session_universal_d_fallbackJoin as fallbackJoin,
      livevideoV1Session_universal_d_FallbackJoinOptions as FallbackJoinOptions,
      livevideoV1Session_universal_d_describeLiveSessions as describeLiveSessions,
      livevideoV1Session_universal_d_getLiveSession as getLiveSession,
      livevideoV1Session_universal_d_createLiveSession as createLiveSession,
      livevideoV1Session_universal_d_updateLiveSession as updateLiveSession,
      livevideoV1Session_universal_d_UpdateLiveSessionOptions as UpdateLiveSessionOptions,
      livevideoV1Session_universal_d_deleteLiveSession as deleteLiveSession,
      livevideoV1Session_universal_d_queryLiveSessions as queryLiveSessions,
      livevideoV1Session_universal_d_QueryLiveSessionsOptions as QueryLiveSessionsOptions,
      livevideoV1Session_universal_d_startLiveSession as startLiveSession,
      livevideoV1Session_universal_d_StartLiveSessionOptions as StartLiveSessionOptions,
      livevideoV1Session_universal_d_endLiveSession as endLiveSession,
      livevideoV1Session_universal_d_createEntranceLink as createEntranceLink,
      livevideoV1Session_universal_d_CreateEntranceLinkOptions as CreateEntranceLinkOptions,
      livevideoV1Session_universal_d_createEntrance as createEntrance,
      livevideoV1Session_universal_d_CreateEntranceOptions as CreateEntranceOptions,
    };
  }
  
  export { livevideoV1Chat_universal_d as chat, livevideoV1Participant_universal_d as participant, livevideoV1Reaction_universal_d as reaction, livevideoV1Session_universal_d as session };
}
