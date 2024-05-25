declare module "wix-crm.v2" {
    const __debug$8: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface Workflow {
        /** Workflow information and metadata. */
        info?: WorkflowInfo;
        /**
         * Final phase of the workflow.
         * Cards in `winPhase` are treated as if they are not part of the workflow.
         *
         * Normally, a contact can be attached to only 1 card in the workflow.
         * Moving a contact's card to `winPhase`
         * frees up the contact to be attached to another card in the workflow.
         */
        winPhase?: Phase$1;
        /** Phases that make up the workflow. */
        phasesList?: PhasesList;
    }
    interface WorkflowInfo {
        /**
         * Workflow ID.
         * @readonly
         */
        _id?: string | null;
        /** Display name for the workflow. */
        name?: string | null;
        /**
         * Workflow description,
         * shown below the workflow's display name in the dashboard.
         */
        description?: string | null;
        /**
         * Deprecated. Use `createdDate` instead.
         * @readonly
         */
        createdAt?: Date;
        /**
         * Indicates whether the workflow can be deleted.
         * @readonly
         */
        isDeletable?: boolean | null;
        /**
         * Date and time the workflow was created.
         * @readonly
         */
        _createdDate?: Date;
    }
    interface Phase$1 {
        /** Phase information. */
        info?: PhaseInfo$1;
        /** Cards contained in the phase. */
        cardsList?: CardsList$1;
    }
    interface PhaseInfo$1 {
        /**
         * Phase ID.
         * @readonly
         */
        _id?: string | null;
        /** Display name shown at the top of the phase. */
        name?: string | null;
    }
    /** a list of cards (a page) along with the total number */
    interface CardsList$1 {
        /** Total number of cards in the phase. */
        total?: number;
        /**
         * List of cards in the phase.
         * Sorted according to the card display order, from top to bottom.
         */
        cards?: Card$2[];
    }
    interface Card$2 {
        /** Card details. */
        info?: CardInfo$2;
    }
    /** entity representing a card-info */
    interface CardInfo$2 {
        /**
         * Card ID.
         * @readonly
         */
        _id?: string | null;
        /** Display name shown at the top of the card. */
        name?: string | null;
        /** Card description. */
        description?: string | null;
        /** Details about the contact attached to the card. */
        primaryAttachment?: Attachment$2;
        /** Due date. */
        dueDate?: Date;
        /** Name of the app or service that created the contact. */
        source?: string | null;
        /**
         * Deprecated. Use `createdDate` instead.
         * @readonly
         */
        createdAt?: Date;
        /**
         * Deprecated. Use `updatedDate` instead.
         * @readonly
         */
        updatedAt?: Date;
        /**
         * ID of the phase that currently holds the card.
         * @readonly
         */
        phaseId?: string | null;
        /**
         * Date and time the card was created.
         * @readonly
         */
        _createdDate?: Date;
        /**
         * Date and time the card was updated.
         * @readonly
         */
        _updatedDate?: Date;
    }
    interface Attachment$2 {
        /**
         * Attachment ID. For internal use.
         * @readonly
         */
        attachmentId?: string;
        /** Deprecated. Use `contactId` instead. */
        value?: string;
        /** Deprecated. For internal use. */
        attachmentType?: AttachmentType$2;
        /** ID of the contact attached to the card. */
        contactId?: string;
    }
    /** describes the supported types of attachments (currently only supports Contact which is the default type) */
    enum AttachmentType$2 {
        ContactType = "ContactType"
    }
    /** a list of phases (a page) along with the total number */
    interface PhasesList {
        /** Total number of phases in the workflow, excluding `winPhase`. */
        total?: number;
        /**
         * List of phases in the workflow.
         * Sorted according to the phase display order, from left to right.
         */
        phases?: Phase$1[];
    }
    interface ListWorkflowsRequest {
        /**
         * Number of workflows to return.
         * If omitted, all results are returned.
         */
        limit?: number | null;
        /**
         * Number of items to skip in the current sort order.
         *
         * Defaults to `0`.
         */
        offset?: number | null;
        /**
         * Supported fields:
         * `id`, `name`, `description`, `createdDate`
         *
         * List of fields to sort by.
         * Formatted as `field:direction`,
         * where field is the field name
         * and direction is `asc` (ascending) or `desc` (descending).
         *
         * Sorting is applied lexicographically, so `"abc"` comes after `"XYZ"`.
         */
        sort?: string[];
    }
    interface ListWorkflowsResponse {
        /** Retrieved list of workflows. */
        workflows?: WorkflowInfo[];
        /** Metadata for the page of results. */
        pagination?: PaginationResponse$2;
    }
    interface PaginationResponse$2 {
        /** Number of items that were skipped in the current sort order. */
        offset?: number;
        /** Total number of items that matched the filter. */
        total?: number;
        /** Number of returned items. */
        count?: number;
    }
    interface QueryWorkflowsRequest {
        /** Query options. */
        query?: Query$5;
    }
    interface Query$5 {
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
        sort?: Sorting$6[];
        /** Paging options to limit and skip the number of items. */
        paging?: Paging$6;
        /** Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned. */
        fields?: string[];
        /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned. */
        fieldsets?: string[];
    }
    interface Sorting$6 {
        /** Name of the field to sort by. */
        fieldName?: string;
        /** Sort order. */
        order?: SortOrder$6;
    }
    enum SortOrder$6 {
        ASC = "ASC",
        DESC = "DESC"
    }
    interface Paging$6 {
        /** Number of items to load. */
        limit?: number | null;
        /** Number of items to skip in the current sort order. */
        offset?: number | null;
    }
    interface QueryWorkflowsResponse {
        /** List of workflows that matched the query. */
        workflows?: Workflow[];
        /** Metadata for the paginated results. */
        pagination?: PaginationResponse$2;
    }
    interface GetWorkflowRequest {
        /** ID of the workflow to retrieve. */
        _id: string;
        /**
         * Maximum number of cards to return per phase.
         * To retrieve additional pages of cards, use
         * [List Cards](https://dev.wix.com/api/rest/workflows/workflows/cards/list-cards)
         * (in the Cards API).
         *
         * Defaults to `10`.
         */
        cardsPerPhase?: number | null;
    }
    interface GetWorkflowResponse {
        /** Requested workflow. */
        workflow?: Workflow;
    }
    interface UpdateWorkflowRequest {
        /** ID of the workflow to update. */
        _id: string;
        /** Workflow info. */
        workflow?: WorkflowInfo;
    }
    interface UpdateWorkflowResponse {
    }
    interface CreateWorkflowRequest {
        /** Workflow details. */
        workflow?: WorkflowInfo;
    }
    interface CreateWorkflowResponse {
        /** ID of the new workflow. */
        _id?: string | null;
    }
    interface DeleteWorkflowRequest {
        /** ID of the workflow to delete. */
        _id: string;
    }
    interface DeleteWorkflowResponse {
    }
    interface SetupWorkflowRequest {
    }
    interface SetupWorkflowResponse {
    }
    interface ListWorkflowsOptions {
        /**
         * Number of workflows to return.
         * If omitted, all results are returned.
         */
        limit?: number | null;
        /**
         * Number of items to skip in the current sort order.
         *
         * Defaults to `0`.
         */
        offset?: number | null;
        /**
         * Supported fields:
         * `id`, `name`, `description`, `createdDate`
         *
         * List of fields to sort by.
         * Formatted as `field:direction`,
         * where field is the field name
         * and direction is `asc` (ascending) or `desc` (descending).
         *
         * Sorting is applied lexicographically, so `"abc"` comes after `"XYZ"`.
         */
        sort?: string[];
    }
    interface QueryWorkflowsOptions {
        /** Query options. */
        query?: Query$5;
    }
    interface GetWorkflowOptions {
        /**
         * Maximum number of cards to return per phase.
         * To retrieve additional pages of cards, use
         * [List Cards](https://dev.wix.com/api/rest/workflows/workflows/cards/list-cards)
         * (in the Cards API).
         *
         * Defaults to `10`.
         */
        cardsPerPhase?: number | null;
    }
    interface UpdateWorkflowOptions {
        /** Workflow info. */
        workflow?: WorkflowInfo;
    }
    interface CreateWorkflowOptions {
        /** Workflow details. */
        workflow?: WorkflowInfo;
    }
    type workflowsV1Workflow_universal_d_Workflow = Workflow;
    type workflowsV1Workflow_universal_d_WorkflowInfo = WorkflowInfo;
    type workflowsV1Workflow_universal_d_PhasesList = PhasesList;
    type workflowsV1Workflow_universal_d_ListWorkflowsRequest = ListWorkflowsRequest;
    type workflowsV1Workflow_universal_d_ListWorkflowsResponse = ListWorkflowsResponse;
    type workflowsV1Workflow_universal_d_QueryWorkflowsRequest = QueryWorkflowsRequest;
    type workflowsV1Workflow_universal_d_QueryWorkflowsResponse = QueryWorkflowsResponse;
    type workflowsV1Workflow_universal_d_GetWorkflowRequest = GetWorkflowRequest;
    type workflowsV1Workflow_universal_d_GetWorkflowResponse = GetWorkflowResponse;
    type workflowsV1Workflow_universal_d_UpdateWorkflowRequest = UpdateWorkflowRequest;
    type workflowsV1Workflow_universal_d_UpdateWorkflowResponse = UpdateWorkflowResponse;
    type workflowsV1Workflow_universal_d_CreateWorkflowRequest = CreateWorkflowRequest;
    type workflowsV1Workflow_universal_d_CreateWorkflowResponse = CreateWorkflowResponse;
    type workflowsV1Workflow_universal_d_DeleteWorkflowRequest = DeleteWorkflowRequest;
    type workflowsV1Workflow_universal_d_DeleteWorkflowResponse = DeleteWorkflowResponse;
    type workflowsV1Workflow_universal_d_SetupWorkflowRequest = SetupWorkflowRequest;
    type workflowsV1Workflow_universal_d_SetupWorkflowResponse = SetupWorkflowResponse;
    type workflowsV1Workflow_universal_d_ListWorkflowsOptions = ListWorkflowsOptions;
    type workflowsV1Workflow_universal_d_QueryWorkflowsOptions = QueryWorkflowsOptions;
    type workflowsV1Workflow_universal_d_GetWorkflowOptions = GetWorkflowOptions;
    type workflowsV1Workflow_universal_d_UpdateWorkflowOptions = UpdateWorkflowOptions;
    type workflowsV1Workflow_universal_d_CreateWorkflowOptions = CreateWorkflowOptions;
    namespace workflowsV1Workflow_universal_d {
        export { __debug$8 as __debug, workflowsV1Workflow_universal_d_Workflow as Workflow, workflowsV1Workflow_universal_d_WorkflowInfo as WorkflowInfo, Phase$1 as Phase, PhaseInfo$1 as PhaseInfo, CardsList$1 as CardsList, Card$2 as Card, CardInfo$2 as CardInfo, Attachment$2 as Attachment, AttachmentType$2 as AttachmentType, workflowsV1Workflow_universal_d_PhasesList as PhasesList, workflowsV1Workflow_universal_d_ListWorkflowsRequest as ListWorkflowsRequest, workflowsV1Workflow_universal_d_ListWorkflowsResponse as ListWorkflowsResponse, PaginationResponse$2 as PaginationResponse, workflowsV1Workflow_universal_d_QueryWorkflowsRequest as QueryWorkflowsRequest, Query$5 as Query, Sorting$6 as Sorting, SortOrder$6 as SortOrder, Paging$6 as Paging, workflowsV1Workflow_universal_d_QueryWorkflowsResponse as QueryWorkflowsResponse, workflowsV1Workflow_universal_d_GetWorkflowRequest as GetWorkflowRequest, workflowsV1Workflow_universal_d_GetWorkflowResponse as GetWorkflowResponse, workflowsV1Workflow_universal_d_UpdateWorkflowRequest as UpdateWorkflowRequest, workflowsV1Workflow_universal_d_UpdateWorkflowResponse as UpdateWorkflowResponse, workflowsV1Workflow_universal_d_CreateWorkflowRequest as CreateWorkflowRequest, workflowsV1Workflow_universal_d_CreateWorkflowResponse as CreateWorkflowResponse, workflowsV1Workflow_universal_d_DeleteWorkflowRequest as DeleteWorkflowRequest, workflowsV1Workflow_universal_d_DeleteWorkflowResponse as DeleteWorkflowResponse, workflowsV1Workflow_universal_d_SetupWorkflowRequest as SetupWorkflowRequest, workflowsV1Workflow_universal_d_SetupWorkflowResponse as SetupWorkflowResponse, workflowsV1Workflow_universal_d_ListWorkflowsOptions as ListWorkflowsOptions, workflowsV1Workflow_universal_d_QueryWorkflowsOptions as QueryWorkflowsOptions, workflowsV1Workflow_universal_d_GetWorkflowOptions as GetWorkflowOptions, workflowsV1Workflow_universal_d_UpdateWorkflowOptions as UpdateWorkflowOptions, workflowsV1Workflow_universal_d_CreateWorkflowOptions as CreateWorkflowOptions, };
    }
    const __debug$7: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface Card$1 {
        /** Card details. */
        info?: CardInfo$1;
    }
    /** entity representing a card-info */
    interface CardInfo$1 {
        /**
         * Card ID.
         * @readonly
         */
        _id?: string | null;
        /** Display name shown at the top of the card. */
        name?: string | null;
        /** Card description. */
        description?: string | null;
        /** Details about the contact attached to the card. */
        primaryAttachment?: Attachment$1;
        /** Due date. */
        dueDate?: Date;
        /** Name of the app or service that created the contact. */
        source?: string | null;
        /**
         * Deprecated. Use `createdDate` instead.
         * @readonly
         */
        createdAt?: Date;
        /**
         * Deprecated. Use `updatedDate` instead.
         * @readonly
         */
        updatedAt?: Date;
        /**
         * ID of the phase that currently holds the card.
         * @readonly
         */
        phaseId?: string | null;
        /**
         * Date and time the card was created.
         * @readonly
         */
        _createdDate?: Date;
        /**
         * Date and time the card was updated.
         * @readonly
         */
        _updatedDate?: Date;
    }
    interface Attachment$1 {
        /**
         * Attachment ID. For internal use.
         * @readonly
         */
        attachmentId?: string;
        /** Deprecated. Use `contactId` instead. */
        value?: string;
        /** Deprecated. For internal use. */
        attachmentType?: AttachmentType$1;
        /** ID of the contact attached to the card. */
        contactId?: string;
    }
    /** describes the supported types of attachments (currently only supports Contact which is the default type) */
    enum AttachmentType$1 {
        ContactType = "ContactType"
    }
    interface QueryCardsRequest {
        /** Query, sort, and paging options. */
        query?: Query$4;
    }
    interface Query$4 {
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
        sort?: Sorting$5[];
        /** Paging options to limit and skip the number of items. */
        paging?: Paging$5;
        /** Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned. */
        fields?: string[];
        /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned. */
        fieldsets?: string[];
    }
    interface Sorting$5 {
        /** Name of the field to sort by. */
        fieldName?: string;
        /** Sort order. */
        order?: SortOrder$5;
    }
    enum SortOrder$5 {
        ASC = "ASC",
        DESC = "DESC"
    }
    interface Paging$5 {
        /** Number of items to load. */
        limit?: number | null;
        /** Number of items to skip in the current sort order. */
        offset?: number | null;
    }
    interface QueryCardsResponse {
        /** List of cards that matched the query criteria. */
        cards?: Card$1[];
        /** Metadata for the page of results. */
        pagination?: PaginationResponse$1;
    }
    interface PaginationResponse$1 {
        /** Number of items that were skipped in the current sort order. */
        offset?: number;
        /** Total number of items that matched the filter. */
        total?: number;
        /** Number of returned items. */
        count?: number;
    }
    interface ListCardsRequest {
        /** ID of the workflow whose cards will be listed. */
        workflowId: string;
        /** Filters for cards in the specified phase. */
        phaseId?: string | null;
        /**
         * Number of items to return.
         *
         * Defaults to `50`.
         */
        limit?: number | null;
        /**
         * Number of items to skip in the current sort order.
         *
         * Defaults to `0`.
         */
        offset?: number | null;
        /** Filters for cards with the specified contact ID. */
        attachmentValue?: string | null;
        /**
         * Filters for archived cards.
         * If set to `true`,
         * only archived cards are returned.
         * If set to `false`,
         * only cards that are not archived are returned.
         *
         * Defaults to `false`.
         */
        fetchArchived?: boolean | null;
        /**
         * Supported fields:
         * `id`, `name`, `createdDate`, `updatedDate`, `phaseId`
         *
         * List of fields to sort by.
         * Formatted as `field:direction`,
         * where field is the field name
         * and direction is `asc` (ascending) or `desc` (descending).
         *
         * Sorting is applied lexicographically, so `"abc"` comes after `"XYZ"`.
         */
        sort?: string[];
    }
    interface ListCardsResponse {
        /** List of cards. */
        cards?: Card$1[];
        /** Metadata for the page of results. */
        pagination?: PaginationResponse$1;
    }
    interface GetCardRequest {
        /** ID of the card to retrieve. */
        _id: string;
    }
    interface GetCardResponse {
        /** Requested card. */
        card?: Card$1;
    }
    interface UpdateCardRequest {
        /** ID of the card to update. */
        _id: string;
        /** Card details. */
        cardInfo?: CardInfo$1;
    }
    interface UpdateCardResponse {
    }
    interface CreateCardRequest {
        /** ID of the workflow to create the card in. */
        workflowId: string;
        /** ID of the phase to create the card in. */
        phaseId: string;
        /** Card details. */
        card?: CardInfo$1;
        /**
         * Card position, where the first card is `0`.
         *
         * If a card already occupies the specified position,
         * that card and any subsequent cards are shifted to the right by 1.
         *
         * Defaults to the last position.
         */
        position?: number | null;
    }
    interface CreateCardResponse {
        /** ID of the newly created card. */
        _id?: string | null;
    }
    interface DeleteCardRequest {
        /** ID of the card to delete. */
        _id: string;
    }
    interface DeleteCardResponse {
    }
    interface MoveCardRequest {
        /** ID of the card to move. */
        _id: string;
        /** ID of the phase to move the card to. */
        newPhaseId?: string | null;
        /** Position of the card in the phase, where the first card is `0`. */
        newPosition?: number | null;
    }
    interface MoveCardResponse {
    }
    interface RestoreCardRequest {
        /** ID of the card to restore. */
        _id: string;
        /** ID of the phase to restore the card to. */
        newPhaseId: string;
        /**
         * Position of the restored card in the phase,
         * where the first card is `0`.
         */
        newPosition?: number | null;
    }
    interface RestoreCardResponse {
    }
    interface ArchiveCardRequest {
        /** ID of the card to archive. */
        _id: string;
    }
    interface ArchiveCardResponse {
    }
    interface QueryCardsOptions {
        /** Query, sort, and paging options. */
        query?: Query$4;
    }
    interface ListCardsOptions {
        /** Filters for cards in the specified phase. */
        phaseId?: string | null;
        /**
         * Number of items to return.
         *
         * Defaults to `50`.
         */
        limit?: number | null;
        /**
         * Number of items to skip in the current sort order.
         *
         * Defaults to `0`.
         */
        offset?: number | null;
        /** Filters for cards with the specified contact ID. */
        attachmentValue?: string | null;
        /**
         * Filters for archived cards.
         * If set to `true`,
         * only archived cards are returned.
         * If set to `false`,
         * only cards that are not archived are returned.
         *
         * Defaults to `false`.
         */
        fetchArchived?: boolean | null;
        /**
         * Supported fields:
         * `id`, `name`, `createdDate`, `updatedDate`, `phaseId`
         *
         * List of fields to sort by.
         * Formatted as `field:direction`,
         * where field is the field name
         * and direction is `asc` (ascending) or `desc` (descending).
         *
         * Sorting is applied lexicographically, so `"abc"` comes after `"XYZ"`.
         */
        sort?: string[];
    }
    interface UpdateCardOptions {
        /** Card details. */
        cardInfo?: CardInfo$1;
    }
    interface CreateCardIdentifiers {
        /** ID of the workflow to create the card in. */
        workflowId: string;
        /** ID of the phase to create the card in. */
        phaseId: string;
    }
    interface CreateCardOptions {
        /** Card details. */
        card?: CardInfo$1;
        /**
         * Card position, where the first card is `0`.
         *
         * If a card already occupies the specified position,
         * that card and any subsequent cards are shifted to the right by 1.
         *
         * Defaults to the last position.
         */
        position?: number | null;
    }
    interface MoveCardOptions {
        /** ID of the phase to move the card to. */
        newPhaseId?: string | null;
        /** Position of the card in the phase, where the first card is `0`. */
        newPosition?: number | null;
    }
    interface RestoreCardOptions {
        /**
         * Position of the restored card in the phase,
         * where the first card is `0`.
         */
        newPosition?: number | null;
    }
    type workflowsV1Card_universal_d_QueryCardsRequest = QueryCardsRequest;
    type workflowsV1Card_universal_d_QueryCardsResponse = QueryCardsResponse;
    type workflowsV1Card_universal_d_ListCardsRequest = ListCardsRequest;
    type workflowsV1Card_universal_d_ListCardsResponse = ListCardsResponse;
    type workflowsV1Card_universal_d_GetCardRequest = GetCardRequest;
    type workflowsV1Card_universal_d_GetCardResponse = GetCardResponse;
    type workflowsV1Card_universal_d_UpdateCardRequest = UpdateCardRequest;
    type workflowsV1Card_universal_d_UpdateCardResponse = UpdateCardResponse;
    type workflowsV1Card_universal_d_CreateCardRequest = CreateCardRequest;
    type workflowsV1Card_universal_d_CreateCardResponse = CreateCardResponse;
    type workflowsV1Card_universal_d_DeleteCardRequest = DeleteCardRequest;
    type workflowsV1Card_universal_d_DeleteCardResponse = DeleteCardResponse;
    type workflowsV1Card_universal_d_MoveCardRequest = MoveCardRequest;
    type workflowsV1Card_universal_d_MoveCardResponse = MoveCardResponse;
    type workflowsV1Card_universal_d_RestoreCardRequest = RestoreCardRequest;
    type workflowsV1Card_universal_d_RestoreCardResponse = RestoreCardResponse;
    type workflowsV1Card_universal_d_ArchiveCardRequest = ArchiveCardRequest;
    type workflowsV1Card_universal_d_ArchiveCardResponse = ArchiveCardResponse;
    type workflowsV1Card_universal_d_QueryCardsOptions = QueryCardsOptions;
    type workflowsV1Card_universal_d_ListCardsOptions = ListCardsOptions;
    type workflowsV1Card_universal_d_UpdateCardOptions = UpdateCardOptions;
    type workflowsV1Card_universal_d_CreateCardIdentifiers = CreateCardIdentifiers;
    type workflowsV1Card_universal_d_CreateCardOptions = CreateCardOptions;
    type workflowsV1Card_universal_d_MoveCardOptions = MoveCardOptions;
    type workflowsV1Card_universal_d_RestoreCardOptions = RestoreCardOptions;
    namespace workflowsV1Card_universal_d {
        export { __debug$7 as __debug, Card$1 as Card, CardInfo$1 as CardInfo, Attachment$1 as Attachment, AttachmentType$1 as AttachmentType, workflowsV1Card_universal_d_QueryCardsRequest as QueryCardsRequest, Query$4 as Query, Sorting$5 as Sorting, SortOrder$5 as SortOrder, Paging$5 as Paging, workflowsV1Card_universal_d_QueryCardsResponse as QueryCardsResponse, PaginationResponse$1 as PaginationResponse, workflowsV1Card_universal_d_ListCardsRequest as ListCardsRequest, workflowsV1Card_universal_d_ListCardsResponse as ListCardsResponse, workflowsV1Card_universal_d_GetCardRequest as GetCardRequest, workflowsV1Card_universal_d_GetCardResponse as GetCardResponse, workflowsV1Card_universal_d_UpdateCardRequest as UpdateCardRequest, workflowsV1Card_universal_d_UpdateCardResponse as UpdateCardResponse, workflowsV1Card_universal_d_CreateCardRequest as CreateCardRequest, workflowsV1Card_universal_d_CreateCardResponse as CreateCardResponse, workflowsV1Card_universal_d_DeleteCardRequest as DeleteCardRequest, workflowsV1Card_universal_d_DeleteCardResponse as DeleteCardResponse, workflowsV1Card_universal_d_MoveCardRequest as MoveCardRequest, workflowsV1Card_universal_d_MoveCardResponse as MoveCardResponse, workflowsV1Card_universal_d_RestoreCardRequest as RestoreCardRequest, workflowsV1Card_universal_d_RestoreCardResponse as RestoreCardResponse, workflowsV1Card_universal_d_ArchiveCardRequest as ArchiveCardRequest, workflowsV1Card_universal_d_ArchiveCardResponse as ArchiveCardResponse, workflowsV1Card_universal_d_QueryCardsOptions as QueryCardsOptions, workflowsV1Card_universal_d_ListCardsOptions as ListCardsOptions, workflowsV1Card_universal_d_UpdateCardOptions as UpdateCardOptions, workflowsV1Card_universal_d_CreateCardIdentifiers as CreateCardIdentifiers, workflowsV1Card_universal_d_CreateCardOptions as CreateCardOptions, workflowsV1Card_universal_d_MoveCardOptions as MoveCardOptions, workflowsV1Card_universal_d_RestoreCardOptions as RestoreCardOptions, };
    }
    const __debug$6: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface Phase {
        /** Phase information. */
        info?: PhaseInfo;
        /** Cards contained in the phase. */
        cardsList?: CardsList;
    }
    interface PhaseInfo {
        /**
         * Phase ID.
         * @readonly
         */
        _id?: string | null;
        /** Display name shown at the top of the phase. */
        name?: string | null;
    }
    /** a list of cards (a page) along with the total number */
    interface CardsList {
        /** Total number of cards in the phase. */
        total?: number;
        /**
         * List of cards in the phase.
         * Sorted according to the card display order, from top to bottom.
         */
        cards?: Card[];
    }
    interface Card {
        /** Card details. */
        info?: CardInfo;
    }
    /** entity representing a card-info */
    interface CardInfo {
        /**
         * Card ID.
         * @readonly
         */
        _id?: string | null;
        /** Display name shown at the top of the card. */
        name?: string | null;
        /** Card description. */
        description?: string | null;
        /** Details about the contact attached to the card. */
        primaryAttachment?: Attachment;
        /** Due date. */
        dueDate?: Date;
        /** Name of the app or service that created the contact. */
        source?: string | null;
        /**
         * Deprecated. Use `createdDate` instead.
         * @readonly
         */
        createdAt?: Date;
        /**
         * Deprecated. Use `updatedDate` instead.
         * @readonly
         */
        updatedAt?: Date;
        /**
         * ID of the phase that currently holds the card.
         * @readonly
         */
        phaseId?: string | null;
        /**
         * Date and time the card was created.
         * @readonly
         */
        _createdDate?: Date;
        /**
         * Date and time the card was updated.
         * @readonly
         */
        _updatedDate?: Date;
    }
    interface Attachment {
        /**
         * Attachment ID. For internal use.
         * @readonly
         */
        attachmentId?: string;
        /** Deprecated. Use `contactId` instead. */
        value?: string;
        /** Deprecated. For internal use. */
        attachmentType?: AttachmentType;
        /** ID of the contact attached to the card. */
        contactId?: string;
    }
    /** describes the supported types of attachments (currently only supports Contact which is the default type) */
    enum AttachmentType {
        ContactType = "ContactType"
    }
    interface QueryPhasesRequest {
        /** Query, sort, and paging options. */
        query?: Query$3;
    }
    interface Query$3 {
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
        sort?: Sorting$4[];
        /** Paging options to limit and skip the number of items. */
        paging?: Paging$4;
        /** Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned. */
        fields?: string[];
        /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned. */
        fieldsets?: string[];
    }
    interface Sorting$4 {
        /** Name of the field to sort by. */
        fieldName?: string;
        /** Sort order. */
        order?: SortOrder$4;
    }
    enum SortOrder$4 {
        ASC = "ASC",
        DESC = "DESC"
    }
    interface Paging$4 {
        /** Number of items to load. */
        limit?: number | null;
        /** Number of items to skip in the current sort order. */
        offset?: number | null;
    }
    interface QueryPhasesResponse {
        /** List of phases that matched the query criteria. */
        phases?: Phase[];
        /** Metadata for the page of results. */
        pagination?: PaginationResponse;
    }
    interface PaginationResponse {
        /** Number of items that were skipped in the current sort order. */
        offset?: number;
        /** Total number of items that matched the filter. */
        total?: number;
        /** Number of returned items. */
        count?: number;
    }
    interface ListPhasesRequest {
        /** ID of the workflow whose phases will be listed. */
        workflowId: string;
        /** Number of items to return. */
        limit?: number | null;
        /**
         * Number of items to skip in the current sort order.
         *
         * Defaults to `0`.
         */
        offset?: number | null;
        /**
         * Supported fields:
         * `id`, `name`
         *
         * List of fields to sort by.
         * Formatted as `field:direction`,
         * where field is the field name
         * and direction is `asc` (ascending) or `desc` (descending).
         *
         * Sorting is applied lexicographically, so `"abc"` comes after `"XYZ"`.
         */
        sort?: string[];
    }
    interface ListPhasesResponse {
        /** List of phases. */
        phases?: Phase[];
        /** Metadata for the page of results. */
        pagination?: PaginationResponse;
    }
    interface GetPhaseRequest {
        /** ID of the phase to retrieve. */
        _id: string;
    }
    interface GetPhaseResponse {
        /** Requested phase. */
        phase?: Phase;
    }
    interface UpdatePhaseRequest {
        /** ID of the phase to update. */
        _id: string;
        /** Phase details to update. */
        phase?: PhaseInfo;
    }
    interface UpdatePhaseResponse {
    }
    interface CreatePhaseRequest {
        /** ID of the workflow to create the phase in. */
        workflowId: string;
        /** Phase details. */
        phase?: PhaseInfo;
        /**
         * Phase position, where the first phase is `0`.
         *
         * If a phase already occupies the specified position,
         * that phase and any subsequent phases
         * are shifted to the right by 1.
         *
         * Defaults to the last position,
         * which is displayed before the win phase.
         */
        position?: number | null;
    }
    interface CreatePhaseResponse {
        /** ID of the newly created phase. */
        _id?: string | null;
    }
    interface DeletePhaseRequest {
        /** ID of the phase to delete. */
        _id: string;
    }
    interface DeletePhaseResponse {
    }
    interface MovePhaseRequest {
        /** ID of the workflow that contains the phase to move. */
        workflowId: string;
        /** ID of the phase to move. */
        _id: string;
        /**
         * New phase position, where the first phase is `0`.
         *
         * If a phase already occupies the specified position,
         * that phase and any subsequent phases
         * are shifted to the right by 1.
         */
        newPosition: number | null;
    }
    interface MovePhaseResponse {
    }
    interface QueryPhasesOptions {
        /** Query, sort, and paging options. */
        query?: Query$3;
    }
    interface ListPhasesOptions {
        /** Number of items to return. */
        limit?: number | null;
        /**
         * Number of items to skip in the current sort order.
         *
         * Defaults to `0`.
         */
        offset?: number | null;
        /**
         * Supported fields:
         * `id`, `name`
         *
         * List of fields to sort by.
         * Formatted as `field:direction`,
         * where field is the field name
         * and direction is `asc` (ascending) or `desc` (descending).
         *
         * Sorting is applied lexicographically, so `"abc"` comes after `"XYZ"`.
         */
        sort?: string[];
    }
    interface UpdatePhaseOptions {
        /** Phase details to update. */
        phase?: PhaseInfo;
    }
    interface CreatePhaseOptions {
        /** Phase details. */
        phase?: PhaseInfo;
        /**
         * Phase position, where the first phase is `0`.
         *
         * If a phase already occupies the specified position,
         * that phase and any subsequent phases
         * are shifted to the right by 1.
         *
         * Defaults to the last position,
         * which is displayed before the win phase.
         */
        position?: number | null;
    }
    interface MovePhaseIdentifiers {
        /** ID of the workflow that contains the phase to move. */
        workflowId: string;
        /** ID of the phase to move. */
        _id: string;
    }
    type workflowsV1Phase_universal_d_Phase = Phase;
    type workflowsV1Phase_universal_d_PhaseInfo = PhaseInfo;
    type workflowsV1Phase_universal_d_CardsList = CardsList;
    type workflowsV1Phase_universal_d_Card = Card;
    type workflowsV1Phase_universal_d_CardInfo = CardInfo;
    type workflowsV1Phase_universal_d_Attachment = Attachment;
    type workflowsV1Phase_universal_d_AttachmentType = AttachmentType;
    const workflowsV1Phase_universal_d_AttachmentType: typeof AttachmentType;
    type workflowsV1Phase_universal_d_QueryPhasesRequest = QueryPhasesRequest;
    type workflowsV1Phase_universal_d_QueryPhasesResponse = QueryPhasesResponse;
    type workflowsV1Phase_universal_d_PaginationResponse = PaginationResponse;
    type workflowsV1Phase_universal_d_ListPhasesRequest = ListPhasesRequest;
    type workflowsV1Phase_universal_d_ListPhasesResponse = ListPhasesResponse;
    type workflowsV1Phase_universal_d_GetPhaseRequest = GetPhaseRequest;
    type workflowsV1Phase_universal_d_GetPhaseResponse = GetPhaseResponse;
    type workflowsV1Phase_universal_d_UpdatePhaseRequest = UpdatePhaseRequest;
    type workflowsV1Phase_universal_d_UpdatePhaseResponse = UpdatePhaseResponse;
    type workflowsV1Phase_universal_d_CreatePhaseRequest = CreatePhaseRequest;
    type workflowsV1Phase_universal_d_CreatePhaseResponse = CreatePhaseResponse;
    type workflowsV1Phase_universal_d_DeletePhaseRequest = DeletePhaseRequest;
    type workflowsV1Phase_universal_d_DeletePhaseResponse = DeletePhaseResponse;
    type workflowsV1Phase_universal_d_MovePhaseRequest = MovePhaseRequest;
    type workflowsV1Phase_universal_d_MovePhaseResponse = MovePhaseResponse;
    type workflowsV1Phase_universal_d_QueryPhasesOptions = QueryPhasesOptions;
    type workflowsV1Phase_universal_d_ListPhasesOptions = ListPhasesOptions;
    type workflowsV1Phase_universal_d_UpdatePhaseOptions = UpdatePhaseOptions;
    type workflowsV1Phase_universal_d_CreatePhaseOptions = CreatePhaseOptions;
    type workflowsV1Phase_universal_d_MovePhaseIdentifiers = MovePhaseIdentifiers;
    namespace workflowsV1Phase_universal_d {
        export { __debug$6 as __debug, workflowsV1Phase_universal_d_Phase as Phase, workflowsV1Phase_universal_d_PhaseInfo as PhaseInfo, workflowsV1Phase_universal_d_CardsList as CardsList, workflowsV1Phase_universal_d_Card as Card, workflowsV1Phase_universal_d_CardInfo as CardInfo, workflowsV1Phase_universal_d_Attachment as Attachment, workflowsV1Phase_universal_d_AttachmentType as AttachmentType, workflowsV1Phase_universal_d_QueryPhasesRequest as QueryPhasesRequest, Query$3 as Query, Sorting$4 as Sorting, SortOrder$4 as SortOrder, Paging$4 as Paging, workflowsV1Phase_universal_d_QueryPhasesResponse as QueryPhasesResponse, workflowsV1Phase_universal_d_PaginationResponse as PaginationResponse, workflowsV1Phase_universal_d_ListPhasesRequest as ListPhasesRequest, workflowsV1Phase_universal_d_ListPhasesResponse as ListPhasesResponse, workflowsV1Phase_universal_d_GetPhaseRequest as GetPhaseRequest, workflowsV1Phase_universal_d_GetPhaseResponse as GetPhaseResponse, workflowsV1Phase_universal_d_UpdatePhaseRequest as UpdatePhaseRequest, workflowsV1Phase_universal_d_UpdatePhaseResponse as UpdatePhaseResponse, workflowsV1Phase_universal_d_CreatePhaseRequest as CreatePhaseRequest, workflowsV1Phase_universal_d_CreatePhaseResponse as CreatePhaseResponse, workflowsV1Phase_universal_d_DeletePhaseRequest as DeletePhaseRequest, workflowsV1Phase_universal_d_DeletePhaseResponse as DeletePhaseResponse, workflowsV1Phase_universal_d_MovePhaseRequest as MovePhaseRequest, workflowsV1Phase_universal_d_MovePhaseResponse as MovePhaseResponse, workflowsV1Phase_universal_d_QueryPhasesOptions as QueryPhasesOptions, workflowsV1Phase_universal_d_ListPhasesOptions as ListPhasesOptions, workflowsV1Phase_universal_d_UpdatePhaseOptions as UpdatePhaseOptions, workflowsV1Phase_universal_d_CreatePhaseOptions as CreatePhaseOptions, workflowsV1Phase_universal_d_MovePhaseIdentifiers as MovePhaseIdentifiers, };
    }
    const __debug$5: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface Contact {
        /**
         * Contact ID.
         * @readonly
         */
        _id?: string;
        /**
         * Revision number, which increments by 1 each time the contact is updated.
         * To prevent conflicting changes,
         * the existing `revision` must be used when updating a contact.
         * @readonly
         */
        revision?: number;
        /**
         * Details about the contact's source.
         * @readonly
         */
        source?: ContactSource;
        /**
         * Date and time the contact was created.
         * @readonly
         */
        _createdDate?: Date;
        /**
         * Date and time the contact was last updated.
         * @readonly
         */
        _updatedDate?: Date;
        /**
         * Details about the contact's last action in the site.
         * @readonly
         */
        lastActivity?: ContactActivity$1;
        /**
         * Contact's primary phone and email.
         *
         * This property reflects the email address in `contactInfo.emails` where `primary` is `true`.
         * @readonly
         */
        primaryInfo?: PrimaryContactInfo;
        /**
         * Contact's profile picture.
         * This can contain an image URL and a Wix Media image ID.
         *
         * > **Deprecation Notice:**
         * > This property has been replaced with
         * > `info.picture`
         * > and will be removed on March 31, 2022. If your app uses this property,
         * > we recommend updating your code as soon as possible.
         * @readonly
         */
        picture?: string;
        /** Contact's details. */
        info?: ContactInfo$2;
    }
    interface ContactSource {
        /**
         * Some possible values:
         *
         * `"OTHER"`, `"ADMIN"`, `"WIX_APP"`, `"IMPORT"`, `"THIRD_PARTY"`,
         * `"WIX_BOOKINGS"`, `"WIX_CHAT"`, `"WIX_EMAIL_MARKETING"`, `"WIX_EVENTS"`,
         * `"WIX_FORMS"`, `"WIX_GROUPS"`, `"WIX_HOTELS"`, `"WIX_MARKET_PLACE"`,
         * `"WIX_MUSIC"`, `"WIX_RESTAURANTS"`, `"WIX_SITE_MEMBERS"`, `"WIX_STORES"`.
         * @readonly
         */
        sourceType?: ContactSourceType$1;
        /**
         * App ID, if the contact was created by a Wix app.
         *
         * > **Deprecation Notice:**
         * > This property has been replaced with
         * > `appId`
         * > and will be removed on March 31, 2022. If your app uses this property,
         * > we recommend updating your code as soon as possible.
         * @readonly
         */
        wixAppId?: string | null;
        /**
         * App ID, if the contact was created by an app.
         * @readonly
         */
        appId?: string | null;
    }
    enum ContactSourceType$1 {
        OTHER = "OTHER",
        ADMIN = "ADMIN",
        WIX_APP = "WIX_APP",
        IMPORT = "IMPORT",
        THIRD_PARTY = "THIRD_PARTY",
        WIX_BOOKINGS = "WIX_BOOKINGS",
        WIX_CHAT = "WIX_CHAT",
        WIX_EMAIL_MARKETING = "WIX_EMAIL_MARKETING",
        WIX_EVENTS = "WIX_EVENTS",
        WIX_FORMS = "WIX_FORMS",
        WIX_GROUPS = "WIX_GROUPS",
        WIX_HOTELS = "WIX_HOTELS",
        WIX_MARKET_PLACE = "WIX_MARKET_PLACE",
        WIX_MUSIC = "WIX_MUSIC",
        WIX_RESTAURANTS = "WIX_RESTAURANTS",
        WIX_SITE_MEMBERS = "WIX_SITE_MEMBERS",
        WIX_STORES = "WIX_STORES",
        WIX_CODE = "WIX_CODE"
    }
    interface ContactActivity$1 {
        /** Date and time of the last action. */
        activityDate?: Date;
        /**
         * Contact's last action in the site.
         *
         * Some possible values:
         * `"GENERAL"`, `"CONTACT_CREATED"`, `"MEMBER_LOGIN"`, `"MEMBER_REGISTER"`,
         * `"MEMBER_STATUS_CHANGED"`, `"FORM_SUBMITTED"`, `"INBOX_FORM_SUBMITTED"`,
         * `"INBOX_PAYMENT_REQUEST_PAID"`, `"INBOX_MESSAGE_TO_CUSTOMER"`,
         * `"INBOX_MESSAGE_FROM_CUSTOMER"`, `"NEWSLETTER_SUBSCRIPTION_FORM_SUBMITTED"`,
         * `"NEWSLETTER_SUBSCRIPTION_UNSUBSCRIBE"`, `"ECOM_PURCHASE"`,
         * `"ECOM_CART_ABANDON"`, `"ECOM_CHECKOUT_BUYER"`, `"BOOKINGS_APPOINTMENT"`,
         * `"HOTELS_RESERVATION"`, `"HOTELS_PURCHASE"`, `"HOTELS_CONFIRMATION"`,
         * `"HOTELS_CANCEL"`, `"VIDEO_PURCHASE"`, `"VIDEO_RENT"`,
         * `"CASHIER_BUTTON_PURCHASE"`, `"ARENA_NEW_LEAD"`, `"EVENTS_RSVP"`,
         * `"INVOICE_PAY"`, `"INVOICE_OVERDUE"`, `"PRICE_QUOTE_ACCEPT"`,
         * `"PRICE_QUOTE_EXPIRE"`, `"RESTAURANTS_ORDER"`, `"RESTAURANTS_RESERVATION"`,
         * `"SHOUTOUT_OPEN"`, `"SHOUTOUT_CLICK"`, `"CONTACT_MERGED"`.
         */
        activityType?: ContactActivityType$1;
    }
    enum ContactActivityType$1 {
        /** Last visit to your site (any unknown activity) */
        GENERAL = "GENERAL",
        /** This cannot be reported, used when contact created, will throw exception */
        CONTACT_CREATED = "CONTACT_CREATED",
        /** "auth/login" */
        MEMBER_LOGIN = "MEMBER_LOGIN",
        /** "auth/register" */
        MEMBER_REGISTER = "MEMBER_REGISTER",
        /** "auth/status-change" */
        MEMBER_STATUS_CHANGED = "MEMBER_STATUS_CHANGED",
        /** "contact/contact-form", (but also "form/contact-form", "form/form") */
        FORM_SUBMITTED = "FORM_SUBMITTED",
        /** "form/lead-capture-form" */
        INBOX_FORM_SUBMITTED = "INBOX_FORM_SUBMITTED",
        /** "chat/payment-request-paid" */
        INBOX_PAYMENT_REQUEST_PAID = "INBOX_PAYMENT_REQUEST_PAID",
        /** "messaging/email" - Direction BUSINESS_TO_CUSTOMER */
        INBOX_MESSAGE_TO_CUSTOMER = "INBOX_MESSAGE_TO_CUSTOMER",
        /** "messaging/email" - Direction CUSTOMER_TO_BUSINESS */
        INBOX_MESSAGE_FROM_CUSTOMER = "INBOX_MESSAGE_FROM_CUSTOMER",
        /** "contact/subscription-form" (but also "form/subscription-form") */
        NEWSLETTER_SUBSCRIPTION_FORM_SUBMITTED = "NEWSLETTER_SUBSCRIPTION_FORM_SUBMITTED",
        /** "contact/unsubscribe" */
        NEWSLETTER_SUBSCRIPTION_UNSUBSCRIBE = "NEWSLETTER_SUBSCRIPTION_UNSUBSCRIBE",
        /** "e_commerce/purchase" */
        ECOM_PURCHASE = "ECOM_PURCHASE",
        /** "e_commerce/cart-abandon" */
        ECOM_CART_ABANDON = "ECOM_CART_ABANDON",
        /** "e_commerce/checkout-buyer" */
        ECOM_CHECKOUT_BUYER = "ECOM_CHECKOUT_BUYER",
        /** "scheduler/appointment" */
        BOOKINGS_APPOINTMENT = "BOOKINGS_APPOINTMENT",
        /** "hotels/reservation" */
        HOTELS_RESERVATION = "HOTELS_RESERVATION",
        /** "hotels/purchase" */
        HOTELS_PURCHASE = "HOTELS_PURCHASE",
        /** "hotels/confirmation" */
        HOTELS_CONFIRMATION = "HOTELS_CONFIRMATION",
        /** "hotels/cancel" */
        HOTELS_CANCEL = "HOTELS_CANCEL",
        /** "video/purchase" */
        VIDEO_PURCHASE = "VIDEO_PURCHASE",
        /** "video/rent" */
        VIDEO_RENT = "VIDEO_RENT",
        /** "cashier/button_purchase" */
        CASHIER_BUTTON_PURCHASE = "CASHIER_BUTTON_PURCHASE",
        /** "arena/new-lead" */
        ARENA_NEW_LEAD = "ARENA_NEW_LEAD",
        /** "events/rsvp" */
        EVENTS_RSVP = "EVENTS_RSVP",
        /** "invoice/pay" */
        INVOICE_PAY = "INVOICE_PAY",
        /** "invoice/overdue" */
        INVOICE_OVERDUE = "INVOICE_OVERDUE",
        /** "price-quote/accept" */
        PRICE_QUOTE_ACCEPT = "PRICE_QUOTE_ACCEPT",
        /** "price-quote/expire" */
        PRICE_QUOTE_EXPIRE = "PRICE_QUOTE_EXPIRE",
        /** "restaurants/order" */
        RESTAURANTS_ORDER = "RESTAURANTS_ORDER",
        /** "restaurants/reservation" */
        RESTAURANTS_RESERVATION = "RESTAURANTS_RESERVATION",
        /** "shoutout/open" */
        SHOUTOUT_OPEN = "SHOUTOUT_OPEN",
        /** "shoutout/click" */
        SHOUTOUT_CLICK = "SHOUTOUT_CLICK",
        CONTACT_MERGED = "CONTACT_MERGED"
    }
    interface PrimaryContactInfo {
        /**
         * Primary email address.
         *
         * This property reflects the email address in `info.emails`
         * where `primary` is `true`.
         * @readonly
         */
        email?: string | null;
        /**
         * Primary phone number.
         *
         * This property reflects the phone number in `contactInfo.phones` where `primary` is `true`.
         * @readonly
         */
        phone?: string | null;
    }
    interface ContactInfo$2 {
        /** Contact's first and last name. */
        name?: ContactName$1;
        /** Contact's email addresses. */
        emails?: ContactEmailsWrapper$1;
        /** Contact's phone numbers. */
        phones?: ContactPhonesWrapper$1;
        /** Contact's street addresses. */
        addresses?: ContactAddressesWrapper$1;
        /** Contact's company name. */
        company?: string | null;
        /**
         * Contact's job title.
         * Corresponds to the **Position** field in the Dashboard.
         */
        jobTitle?: string | null;
        /** Birth date in `YYYY-MM-DD` format. For example, `2020-03-15`. */
        birthdate?: string | null;
        /**
         * Locale in
         * [IETF BCP 47 language tag](https://en.wikipedia.org/wiki/IETF_language_tag) format.
         * Typically, this is a lowercase 2-letter language code,
         * followed by a hyphen, followed by an uppercase 2-letter country code.
         * For example, `en-US` for U.S. English, and `de-DE` for Germany German.
         */
        locale?: string | null;
        /**
         * List of contact label keys.
         *  [Contact labels](https://support.wix.com/en/article/adding-labels-to-contacts-in-your-contact-list)
         *  help categorize contacts.
         *
         *
         *  Label keys must exist to be added to the contact.
         *  Contact labels can be created or retrieved with
         *  [`findOrCreateLabel()`](wix-crm-backend/contacts/findorcreatelabel)
         *  or
         *  [`queryLabels()`](wix-crm-backend/contacts/queryLabels).
         *
         */
        labelKeys?: LabelsWrapper$1;
        /**
         * Additional custom fields.
         * This includes fields managed by Wix, by 3rd-party apps, and by the site.
         *
         * Empty fields are not returned.
         */
        extendedFields?: ExtendedFieldsWrapper$1;
        /** Contact's profile picture. */
        picture?: ContactPicture$1;
    }
    interface ContactName$1 {
        /** Contact's first name. */
        first?: string | null;
        /** Contact's last name. */
        last?: string | null;
    }
    interface ContactEmailsWrapper$1 {
        /** List of up to 50 email addresses. */
        items?: ContactEmail$1[];
    }
    interface ContactEmail$1 {
        /**
         * Email ID.
         * @readonly
         */
        _id?: string | null;
        /**
         * Email type.
         *
         * `"UNTAGGED"` is shown as "Other" in the Contact List.
         *
         *  One of:
         *
         *  - `"UNTAGGED"`
         * - `"MAIN"`
         * - `"HOME"`
         * - `"WORK"`
         */
        tag?: EmailTag$1;
        /** Email address. */
        email?: string;
        /**
         * Indicates whether this is the contact's primary email address.
         * When changing `primary` to `true` for an email,
         * the contact's other emails become `false`.
         */
        primary?: boolean | null;
    }
    enum EmailTag$1 {
        UNTAGGED = "UNTAGGED",
        MAIN = "MAIN",
        HOME = "HOME",
        WORK = "WORK"
    }
    interface ContactPhonesWrapper$1 {
        /** List of up to 50 phone numbers. */
        items?: ContactPhone$1[];
    }
    interface ContactPhone$1 {
        /**
         * Phone ID.
         * @readonly
         */
        _id?: string | null;
        /**
         * Phone type.
         *
         * `"UNTAGGED"` is shown as "Other" in the Contact List.
         *
         *  One of:
         *
         *  - `"UNTAGGED"`
         * - `"MAIN"`
         * - `"HOME"`
         * - `"MOBILE"`
         * - `"WORK"`
         * - `"FAX"`
         */
        tag?: PhoneTag$1;
        /** [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code. */
        countryCode?: string | null;
        /** Phone number. */
        phone?: string;
        /**
         * [ITU E.164-formatted](https://www.itu.int/rec/T-REC-E.164/)
         * phone number.
         * Automatically generated using `phone` and `countryCode`,
         * as long as both of those values are valid.
         * @readonly
         */
        e164Phone?: string | null;
        /**
         * Whether this is the contact's primary phone number.
         * When changing `primary` to `true` for a phone,
         * the contact's other phones become `false`.
         */
        primary?: boolean | null;
    }
    enum PhoneTag$1 {
        UNTAGGED = "UNTAGGED",
        MAIN = "MAIN",
        HOME = "HOME",
        MOBILE = "MOBILE",
        WORK = "WORK",
        FAX = "FAX"
    }
    interface ContactAddressesWrapper$1 {
        /** List of up to 50 addresses. */
        items?: ContactAddress$1[];
    }
    interface ContactAddress$1 {
        /**
         * Street address ID.
         * @readonly
         */
        _id?: string | null;
        /**
         *  Address type.
         *
         *  `"UNTAGGED"` is shown as "Other" in the Contact List.
         *
         *   One of:
         *
         *   - `"UNTAGGED"`
         *   - `"HOME"`
         *   - `"WORK"`
         *   - `"BILLING"`
         *   - `"SHIPPING"`
         */
        tag?: AddressTag$1;
        /** Street address. */
        address?: Address$1;
    }
    enum AddressTag$1 {
        UNTAGGED = "UNTAGGED",
        HOME = "HOME",
        WORK = "WORK",
        BILLING = "BILLING",
        SHIPPING = "SHIPPING"
    }
    /** Physical address */
    interface Address$1 extends AddressStreetOneOf$1 {
        /** Street address object, with number and name in separate fields. */
        streetAddress?: StreetAddress$1;
        /** Main address line, usually street and number, as free text. */
        addressLine1?: string | null;
        /**
         * 2-letter country code in an
         * [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
         */
        country?: string | null;
        /**
         * Code for a subdivision (such as state, prefecture, or province) in an
         * [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) format.
         */
        subdivision?: string | null;
        /** City name. */
        city?: string | null;
        /** Postal or zip code. */
        postalCode?: string | null;
        /**
         * Free text providing more detailed address information,
         * such as apartment, suite, or floor.
         */
        addressLine2?: string | null;
    }
    /** @oneof */
    interface AddressStreetOneOf$1 {
        /** Street address object, with number and name in separate fields. */
        streetAddress?: StreetAddress$1;
        /** Main address line, usually street and number, as free text. */
        addressLine?: string | null;
    }
    interface StreetAddress$1 {
        /** Street number. */
        number?: string;
        /** Street name. */
        name?: string;
    }
    interface AddressLocation$1 {
        /** Address's latitude. */
        latitude?: number | null;
        /** Address's longitude. */
        longitude?: number | null;
    }
    interface Subdivision$1 {
        /** subdivision short code */
        code?: string;
        /** Full subdivision name. */
        name?: string;
    }
    enum SubdivisionType$1 {
        UNKNOWN_SUBDIVISION_TYPE = "UNKNOWN_SUBDIVISION_TYPE",
        /** state */
        ADMINISTRATIVE_AREA_LEVEL_1 = "ADMINISTRATIVE_AREA_LEVEL_1",
        /** county */
        ADMINISTRATIVE_AREA_LEVEL_2 = "ADMINISTRATIVE_AREA_LEVEL_2",
        /** cities/towns */
        ADMINISTRATIVE_AREA_LEVEL_3 = "ADMINISTRATIVE_AREA_LEVEL_3",
        /** neighborhood/quarter */
        ADMINISTRATIVE_AREA_LEVEL_4 = "ADMINISTRATIVE_AREA_LEVEL_4",
        /** street/block */
        ADMINISTRATIVE_AREA_LEVEL_5 = "ADMINISTRATIVE_AREA_LEVEL_5",
        /** (ADMINISTRATIVE_AREA_LEVEL_0) indicates the national political entity, and is typically the highest order type returned by the Geocoder. */
        COUNTRY = "COUNTRY"
    }
    interface AssigneesWrapper$1 {
        /** List of site contributor user IDs. */
        items?: string[];
    }
    interface LabelsWrapper$1 {
        /**
         * List of contact label keys.
         * [Contact labels](https://support.wix.com/en/article/adding-labels-to-contacts-in-your-contact-list)
         * help categorize contacts.
         *
         * Label keys must exist to be added to the contact.
         * Contact labels can be created or retrieved with
         * [Find or Create Label](https://dev.wix.com/api/rest/contacts/labels/find-or-create-label)
         * or
         * [List Labels](https://dev.wix.com/api/rest/contacts/labels/list-labels)
         */
        items?: string[];
    }
    interface ExtendedFieldsWrapper$1 {
        /**
         * Set of key-value pairs.
         *
         * Contact's
         * [extended fields](wix-crm-backend/contacts/introduction#about-extended-fields),
         * which allow you to store additional information about your contacts.
         *
         *  To view or create extended fields, use
         * [`findOrCreateExtendedField()`](wix-crm-backend/contacts/findorcreateextendedfield),
         * [`getExtendedField()`](wix-crm-backend/contacts/getextendedfield), or
         * [`queryExtendedFields()`](wix-crm-backend/contacts/queryextendedfields).
         */
        items?: Record<string, any>;
    }
    interface LocationsWrapper$1 {
        /** List of location ids. */
        items?: string[];
    }
    /** TEST contact picture description */
    interface ContactPicture$1 {
        /**
         * Image.
         * This can contain an image URL or a Wix Media image ID.
         */
        image?: string;
    }
    enum ImageProvider$1 {
        UNKNOWN = "UNKNOWN",
        /** Image stored outside Wix */
        EXTERNAL = "EXTERNAL",
        /** Stored in wix media platform, Must be uploaded by using `GeneratePictureUploadUrl` */
        WIX_MEDIA = "WIX_MEDIA"
    }
    interface SegmentsWrapper {
        /** List of Contact segment IDs */
        items?: string[];
    }
    interface EstimateFilterSizeRequest {
        /** Contacts filter expression. */
        filter: Record<string, any> | null;
        /** Should "inactive" contacts be excluded or not (default value "false"). */
        activeContactsOnly?: boolean;
        /** Contacts plain text search expression (searches in name, phone and email fields). */
        search?: string | null;
    }
    interface EstimateFilterSizeResponse {
        /** Mailing list size estimation. */
        estimation?: number;
    }
    interface EstimateAudienceSizeRequest {
        /** Contact IDs of a campaign audience. */
        contactIds?: string[];
        /** Label IDs of a campaign audience. */
        labelIds?: string[];
        /** Contacts filter expression (json). */
        contactsFilter?: Record<string, any> | null;
        /** Contacts plain text search expression (searches in name, phone and email fields). */
        search?: string | null;
        /** Segment ids of a campaign audience. */
        segmentIds?: string[];
        /** Should "inactive" contacts be excluded or not (default value "false"). */
        activeContactsOnly?: boolean;
        /** Id of a campaign that is to be resent. */
        resendCampaignId?: string | null;
    }
    interface EstimateAudienceSizeResponse {
        /** Audience size estimation. */
        estimation?: number;
    }
    interface ContactSubmitted {
        /** Pass through data, submitted with the contact */
        passThroughData?: string | null;
        /** Submitted activity */
        activity?: ContactActivity$1;
        /** Submitted Contact (after processing) */
        contact?: Contact;
    }
    interface ContactChanged {
        /** The Contact before the changes */
        previousContact?: Contact;
        /** The Contact after the changes */
        currentContact?: Contact;
    }
    /** Contact creation options. */
    interface CreateContactRequest {
        /** Contact info. */
        info: ContactInfo$2;
        /**
         * Controls whether the call will succeed
         * if the new contact information contains an email or a phone number already used by another contact.
         *
         * If set to `true`,
         * the call will succeed even if an email address or phone number is used by another contact.
         * If set to `false`,
         * the call will fail if the given email address is used by another contact or,
         * if the email address is not given and the given phone number is used by another contact.
         *
         * Defaults to `false`.
         */
        allowDuplicates?: boolean;
    }
    /** Contact. */
    interface CreateContactResponse {
        /** Contact. */
        contact?: Contact;
    }
    interface DuplicateContactExists {
        duplicateContactId?: string | null;
        duplicateEmail?: string | null;
        duplicatePhone?: string | null;
    }
    interface UpdateContactRequest {
        /** ID of the contact to update. */
        contactId: string;
        /**
         * Revision number.
         * When updating, include the existing `revision`
         * to prevent conflicting updates.
         */
        revision: number | null;
        /**
         * Controls whether the call will succeed
         * if the new contact information contains an email or a phone number already used by another contact.
         *
         * If set to `true`,
         * the call will succeed even if an email address or phone number is used by another contact.
         * If set to `false`,
         * the call will fail if the given email address is used by another contact or,
         * if the email address is not given and the given phone number is used by another contact.
         *
         * Defaults to `false`.
         */
        allowDuplicates?: boolean;
        /** Contact info. */
        info: ContactInfo$2;
    }
    /** Updated contact. */
    interface UpdateContactResponse {
        /** Updated contact. */
        contact?: Contact;
    }
    interface MergeContactsRequest {
        /** Target contact ID. */
        targetContactId: string;
        /**
         * Target contact revision number, which increments by 1 each time the contact is updated.
         * To prevent conflicting changes,
         * the target contact's current revision must be passed.
         */
        targetContactRevision: number | null;
        /**
         * IDs of up to 5 contacts to merge into the target contact.
         * If merging more than one source contact,
         * the first source is given precedence, then the second, and so on.
         */
        sourceContactIds?: string[];
    }
    interface MergeContactsResponse {
        /** Updated target contact. */
        contact?: Contact;
    }
    interface ContactMerged {
        /** ID of the contact the source contacts were merged into. */
        targetContactId?: string;
        /** IDs of contacts that were merged into the target contact. */
        sourceContactIds?: string[];
        /** Updated target contact. */
        targetContact?: Contact;
    }
    interface PreviewMergeContactsRequest {
        /** Target contact ID. */
        targetContactId: string;
        /**
         * IDs of up to 5 contacts to merge into the target contact.
         * If merging more than one source contact,
         * the first source is given precedence, then the second, and so on.
         */
        sourceContactIds?: string[];
    }
    interface PreviewMergeContactsResponse {
        /** Preview of the updated target contact. */
        contact?: Contact;
    }
    interface DeleteContactRequest {
        /** ID of the contact to delete. */
        contactId: string;
    }
    interface DeleteContactResponse {
    }
    interface LabelContactRequest {
        /** ID of the contact to add labels to. */
        contactId: string;
        /**
         * List of label keys to add to the contact.
         *
         * Label keys must exist to be added to the contact.
         *  Contact labels can be created or retrieved with
         *  [`findOrCreateLabel()`](wix-crm-backend/contacts/findorcreatelabel)
         *  or
         *  [`queryLabels()`](wix-crm-backend/contacts/queryLabels).
         */
        labelKeys: string[];
    }
    /** Updated contact. */
    interface LabelContactResponse {
        /** Updated contact. */
        contact?: Contact;
    }
    interface UnlabelContactRequest {
        /** ID of the contact to remove labels from. */
        contactId: string;
        /** List of label keys to remove from the contact. */
        labelKeys: string[];
    }
    /** Updated contact. */
    interface UnlabelContactResponse {
        /** Updated contact. */
        contact?: Contact;
    }
    interface LabelAndUnlabelContactRequest {
        /** Contact ID. */
        contactId: string;
        /**
         * List of label keys to add to the contact.
         *
         * Label keys must exist to be added to the contact.
         *  Contact labels can be created or retrieved with
         *  [`findOrCreateLabel()`](wix-crm-backend/contacts/findorcreatelabel)
         *  or
         *  [`queryLabels()`](wix-crm-backend/contacts/queryLabels).
         */
        labelKeysToAdd: string[];
        /** List of label keys to remove from the contact. */
        labelKeysToRemove: string[];
    }
    interface LabelAndUnlabelContactResponse {
        /** Updated contact. */
        contact?: Contact;
    }
    interface ListContactsRequest {
        /** Sort order. */
        sort?: Sorting$3;
        /** Pagination, defaults to offset = 0 and limit = 50 (max limit 1,000). */
        paging?: Paging$3;
        /**
         * List of projected fields to return.
         * If both `fields` and `fieldsets` are sent in the request,
         * the union of both lists is returned.
         * `id` and `revision` are always returned.
         *
         * Supported properties:
         * `source`, `createdDate`, `updatedDate`, `lastActivity`, `primaryInfo`,
         * `info.name`, `info.emails`, `info.phones`, `info.addresses`, `info.company`,
         * `info.jobTitle`, `info.picture`, `info.birthdate`, `info.locale`,
         * `info.labelKeys`, `info.locations`, `info.extendedFields`
         */
        fields?: string[];
        fieldsets?: ContactFieldSet[];
    }
    interface Sorting$3 {
        /**
         * Field to sort by.
         *
         * Supported properties:
         * `createdDate`, `lastActivity.activityDate`, `primaryInfo.email`,
         * `info.name.first`, `info.name.last`, `info.company`, `info.jobTitle`,
         * `info.birthdate`
         */
        fieldName?: string;
        /**
         * Sort order.
         * Use `ASC` for ascending order or `DESC` for descending order.
         *
         * Defaults to `ASC`.
         */
        order?: SortOrder$3;
    }
    enum SortOrder$3 {
        ASC = "ASC",
        DESC = "DESC"
    }
    interface Paging$3 {
        /** Number of items to return. */
        limit?: number | null;
        /** Number of items to skip in the current sort order. */
        offset?: number | null;
    }
    enum ContactFieldSet {
        /** name, primaryEmail, primaryPhone */
        BASIC = "BASIC",
        /** name, phones, emails, addressses */
        COMMUNICATION_DETAILS = "COMMUNICATION_DETAILS",
        /** name, primaryInfo(email, phone), extendedFields */
        EXTENDED = "EXTENDED",
        /** Full contact object */
        FULL = "FULL"
    }
    /** List of contacts. */
    interface ListContactsResponse {
        /** List of contacts. */
        contacts?: Contact[];
        /** Details on the paged set of results returned. */
        pagingMetadata?: PagingMetadata$2;
    }
    interface PagingMetadata$2 {
        /** The number of items returned in this response */
        count?: number | null;
        /** The offset which was requested */
        offset?: number | null;
        /** The total number of items that match the query */
        total?: number | null;
        /** A flag that indicates the server failed to calculate 'total' field */
        tooManyToCount?: boolean | null;
    }
    interface QueryContactsRequest {
        /**
         * Plain text search for an exact match.
         *
         * Supported properties:
         * `info.name.first`, `info.name.last`, `info.emails.email`, `info.phones.phone`
         *
         * Max: 100 characters
         */
        search?: string | null;
        /** Query options. */
        query?: Query$2;
    }
    interface Query$2 {
        /**
         * Filter object.
         * See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language)
         * for more information.
         *
         * For a detailed list of supported filters, see
         * [Supported Filters](https://dev.wix.com/api/rest/contacts/contacts/supported-filters).
         */
        filter?: Record<string, any> | null;
        /**
         * Sorting options.
         * See [Sorting and Paging](https://dev.wix.com/api/rest/getting-started/pagination)
         * for more information.
         *
         * Max: 1 sort object
         */
        sort?: Sorting$3[];
        /** Pagination options. */
        paging?: Paging$3;
        /**
         * List of projected fields to return.
         * If both `fields` and `fieldsets` are sent in the request,
         * the union of both lists is returned.
         * `id` and `revision` are always returned.
         *
         * Supported properties:
         * `source`, `createdDate`, `updatedDate`, `lastActivity`, `primaryInfo`,
         * `info.name`, `info.emails`, `info.phones`, `info.addresses`, `info.company`,
         * `info.jobTitle`, `info.picture`, `info.birthdate`, `info.locale`,
         * `info.labelKeys`, `info.locations`, `info.extendedFields`
         */
        fields?: string[];
        /**
         * Predefined sets of fields to return.
         * If both `fields` and `fieldsets` are sent in the request,
         * the union of both lists is returned.
         *
         * - `BASIC`: Returns `id`, `revision`, `primaryInfo`, `info.name`.
         * - `COMMUNICATION_DETAILS`: Returns `id`, `revision`, `primaryInfo`, `info.name`, `info.emails`, `info.phones`, `info.addresses`.
         * - `EXTENDED`: Returns `id`, `revision`, `primaryInfo`, `info.name`, `info.extendedFields`.
         * - `FULL`: Returns all fields.
         *
         * Default: If `fields` is omitted from the request, `FULL`.
         */
        fieldsets?: ContactFieldSet[];
    }
    /** List of contacts. */
    interface QueryContactsResponse {
        /** List of contacts. */
        contacts?: Contact[];
        /** Details on the paged set of results returned. */
        pagingMetadata?: PagingMetadata$2;
    }
    interface ListFacetsRequest {
        /** Allow paginating, default: offset = 0 and limit = 1000 */
        paging?: Paging$3;
        /** Language for localization */
        language?: string | null;
    }
    interface ListFacetsResponse {
        /** List of facets. */
        facets?: ContactsFacet[];
        /** Details on the paged set of results returned. */
        pagingMetadata?: PagingMetadata$2;
    }
    interface ContactsFacet {
        /** Type of facet. */
        facetType?: ContactsFacetType;
        /**
         * Scope for facet keys.
         * When a facet key exists in a namespace,
         * each key is unique within that namespace.
         *
         * Currently, facets not created by Wix are in the `custom` namespace.
         */
        namespace?: string | null;
        /** Human-readable display name. */
        namespaceDisplayName?: string | null;
        /** Facet key, automatically generated. */
        facetKey?: string | null;
        /** Human-readable name. Shown in the Wix UI. */
        facetDisplayName?: string | null;
        /** Number of contacts the facet is applied to. */
        count?: number | null;
        /** Filter used for query contacts of this facet */
        queryFilter?: Record<string, any> | null;
    }
    enum ContactsFacetType {
        UNKNOWN = "UNKNOWN",
        ALL_CONTACTS = "ALL_CONTACTS",
        NOT_LABELED = "NOT_LABELED",
        LABEL = "LABEL",
        SUBSCRIPTION_STATUS = "SUBSCRIPTION_STATUS",
        MEMBERSHIP_STATUS = "MEMBERSHIP_STATUS"
    }
    interface QueryFacetsRequest {
        /** Allow paginating, default: offset = 0 and limit = 1000 */
        paging?: Paging$3;
        /** Language for localization */
        language?: string | null;
        /**
         * Only allowed fields:
         * #info.extendedFields.emailSubscriptions.effectiveEmail ($exists)
         * #info.extendedFields.emailSubscriptions.deliverabilityStatus ($eq, $ne, $in, $nin)
         * #info.extendedFields.emailSubscriptions.subscriptionStatus ($eq, $ne, $in)
         */
        filter?: Record<string, any> | null;
    }
    interface QueryFacetsResponse {
        /** List of facets. */
        facets?: ContactsFacet[];
        /** Details on the paged set of results returned. */
        pagingMetadata?: PagingMetadata$2;
    }
    interface BulkDeleteContactsRequest {
        /**
         * Filter object.
         *
         * Possible filters:
         * `$eq`, `$exists`, `$gt`, `$gte`, `$hasAll`, `$hasSome`, `$in`, `$lt`, `$lte`, `$ne`, `$startsWith`.
         *
         * For a detailed list of supported filters, see
         * filtering and sorting for
         * [contact properties](https://dev.wix.com/api/rest/contacts/contacts/sorting,-filtering,-and-searching#contact-properties-filtering-sorting-and-searching),
         * [extended fields](https://dev.wix.com/api/rest/contacts/contacts/sorting,-filtering,-and-searching#extended-fields-filtering-sorting-and-searching),
         * and [custom fields](https://dev.wix.com/api/rest/contacts/contacts/sorting,-filtering,-and-searching#custom-fields-filtering-sorting-and-searching).
         *
         * Example:
         * `{ "filter": { "info.name.last": "Smith" } }`
         */
        filter?: Record<string, any> | null;
        /**
         * Plain text search for an exact match, up to 100 characters.
         *
         * Searchable fields:
         *
         * - `info.name.first`
         * - `info.name.last`
         * - `info.emails.email`
         * - `info.phones.phone`
         */
        search?: string | null;
    }
    interface BulkDeleteContactsResponse {
        /**
         * Bulk job ID.
         * The job's status can be retrieved with
         * [Get Bulk Job](https://dev.wix.com/api/rest/contacts/contacts/bulk-jobs/get-bulk-job) or
         * [List Bulk Jobs](https://dev.wix.com/api/rest/contacts/contacts/bulk-jobs/list-bulk-jobs).
         */
        jobId?: string;
    }
    interface BulkUpdateContactsRequest {
        /**
         * Filter object.
         *
         * Possible filters:
         * `$eq`, `$exists`, `$gt`, `$gte`, `$hasAll`, `$hasSome`, `$in`, `$lt`, `$lte`, `$ne`, `$startsWith`.
         *
         * For a detailed list of supported filters, see
         * filtering and sorting for
         * [contact properties](https://dev.wix.com/api/rest/contacts/contacts/sorting,-filtering,-and-searching#contact-properties-filtering-sorting-and-searching),
         * [extended fields](https://dev.wix.com/api/rest/contacts/contacts/sorting,-filtering,-and-searching#extended-fields-filtering-sorting-and-searching),
         * and [custom fields](https://dev.wix.com/api/rest/contacts/contacts/sorting,-filtering,-and-searching#custom-fields-filtering-sorting-and-searching).
         *
         * Example:
         * `{ "filter": { "info.name.last": "Smith" } }`
         */
        filter?: Record<string, any> | null;
        /**
         * Plain text search for an exact match, up to 100 characters.
         *
         * Searchable fields:
         *
         * - `info.name.first`
         * - `info.name.last`
         * - `info.emails.email`
         * - `info.phones.phone`
         */
        search?: string | null;
        /** Contact info. */
        info?: ContactInfo$2;
    }
    interface BulkUpdateContactsResponse {
        /**
         * Bulk job ID.
         * The job's status can be retrieved with
         * [Get Bulk Job](https://dev.wix.com/api/rest/contacts/contacts/bulk-jobs/get-bulk-job) or
         * [List Bulk Jobs](https://dev.wix.com/api/rest/contacts/contacts/bulk-jobs/list-bulk-jobs).
         */
        jobId?: string;
    }
    interface BulkLabelAndUnlabelContactsRequest {
        /**
         * Filter options.
         * Labels will be removed from contacts that meet the `filter` and `search` criteria.
         *
         * See
         * [Field Support for Filtering, Sorting, and Searching](https://dev.wix.com/api/rest/contacts/contacts/sort-and-filter#contacts_contacts_sort-and-filter_field-support-for-filtering-sorting-and-searching)
         * for a list of supported filters and fields.
         */
        filter?: Record<string, any> | null;
        /**
         * Plain text search for an exact match, up to 100 characters.
         * Labels will be removed from contacts that meet the `filter` and `search` criteria.
         *
         * See
         * [Field Support for Filtering, Sorting, and Searching](https://dev.wix.com/api/rest/contacts/contacts/sort-and-filter#contacts_contacts_sort-and-filter_field-support-for-filtering-sorting-and-searching)
         * for a list of searchable fields.
         */
        search?: string | null;
        /**
         * List of label keys to add to the contacts.
         *
         * Label keys must exist to be added to the contact.
         *  Contact labels can be created or retrieved with
         *  [`findOrCreateLabel()`](wix-crm-backend/contacts/findorcreatelabel)
         *  or
         *  [`queryLabels()`](wix-crm-backend/contacts/queryLabels).
         */
        labelKeysToAdd?: string[];
        /** List of label keys to remove from the contacts. */
        labelKeysToRemove?: string[];
    }
    interface BulkLabelAndUnlabelContactsResponse {
        /**
         * Bulk job ID.
         * The job's status can be retrieved with
         * [Get Bulk Job](https://dev.wix.com/api/rest/contacts/contacts/bulk-jobs/get-bulk-job) or
         * [List Bulk Jobs](https://dev.wix.com/api/rest/contacts/contacts/bulk-jobs/list-bulk-jobs).
         */
        jobId?: string;
    }
    interface BulkUpsertContactsRequest {
        info?: ContactInfo$2[];
        returnFullEntity?: boolean;
    }
    interface BulkUpsertContactsResponse {
        results?: Item[];
        metadata?: BulkUpsertContactsResponseMetadata;
    }
    enum Action {
        UNKNOWN = "UNKNOWN",
        UPDATED = "UPDATED",
        CREATED = "CREATED"
    }
    interface Error {
        /** Error code. */
        code?: string;
        /** Error details. */
        message?: string | null;
    }
    interface Metadata {
        _id?: string | null;
        originalIndex?: number;
        action?: Action;
        success?: boolean;
        error?: Error;
    }
    interface Item {
        contact?: Contact;
        metadata?: Metadata;
    }
    interface BulkUpsertContactsResponseMetadata {
        totalSuccess?: number;
        totalFailure?: number;
        totalCreated?: number;
        totalUpdated?: number;
    }
    interface UpsertContactRequest {
        info: ContactInfo$2;
    }
    interface UpsertContactResponse {
        /** Upserted contact. */
        contact?: Contact;
        action?: UpsertContactResponseAction;
    }
    enum UpsertContactResponseAction {
        UNKNOWN = "UNKNOWN",
        UPDATED = "UPDATED",
        CREATED = "CREATED"
    }
    interface GeneratePictureUploadUrlRequest {
        /** ID of the contact whose picture is being updated. */
        contactId: string;
        /**
         * Mime Type. Must be one of:
         * `image/png`, `image/jpeg`.
         * Defaults to `image/png`.
         */
        mimeType?: string | null;
    }
    interface GeneratePictureUploadUrlResponse {
        /** URL to upload the image */
        uploadUrl?: string;
    }
    interface GetContactRequest {
        /** ID of the contact to retrieve. */
        _id: string;
        /**
         * List of projected fields to return.
         * If both `fields` and `fieldsets` are sent in the request,
         * the union of both lists is returned.
         * `id` and `revision` are always returned.
         *
         * Supported properties:
         * `source`, `createdDate`, `updatedDate`, `lastActivity`, `primaryInfo`,
         * `info.name`, `info.emails`, `info.phones`, `info.addresses`, `info.company`,
         * `info.jobTitle`, `info.picture`, `info.birthdate`, `info.locale`,
         * `info.labelKeys`, `info.locations`, `info.extendedFields`
         */
        fields?: string[];
        /**
         * Predefined sets of fields to return.
         * If both `fields` and `fieldsets` are sent in the request,
         * the union of both lists is returned.
         *
         * - `BASIC`: Returns `id`, `revision`, `primaryInfo`, `info.name`.
         * - `COMMUNICATION_DETAILS`: Returns `id`, `revision`, `primaryInfo`, `info.name`, `info.emails`, `info.phones`, `info.addresses`.
         * - `EXTENDED`: Returns `id`, `revision`, `primaryInfo`, `info.name`, `info.extendedFields`.
         * - `FULL`: Returns all fields.
         *
         * Default: If `fields` is omitted from the request, `FULL`.
         */
        fieldsets?: ContactFieldSet[];
    }
    /** The requested contact. */
    interface GetContactResponse {
        /** The requested contact. */
        contact?: Contact;
        /**
         * Contact response type.
         *
         * - `REGULAR`: The specified contact was returned.
         * - `IMPLICIT`: Not used.
         * - `MERGED`: The specified contact was previously merged with another contact, and the new contact was
         */
        responseType?: GetContactResponseType;
    }
    enum GetContactResponseType {
        /** Normal contact */
        REGULAR = "REGULAR",
        /** Contact that id was already allocated for it, but the contact not yet created. */
        IMPLICIT = "IMPLICIT",
        /** Contact was merged into another contact */
        MERGED = "MERGED"
    }
    interface SyncSubmitContactRequest {
        contactInfo?: ContactInfo$2;
        activity?: ContactActivity$1;
        passThroughData?: string | null;
        contactId?: string;
        submitOperation?: SubmitOperation$1;
        /** Need to resolve source in allocator, because of server sign */
        sourceType?: ContactSourceType$1;
        sourceId?: string | null;
        hideFromContactList?: boolean;
    }
    enum SubmitOperation$1 {
        UNKNOWN = "UNKNOWN",
        CREATE = "CREATE",
        UPDATE = "UPDATE"
    }
    interface SyncSubmitContactResponse {
    }
    interface CountContactsRequest {
    }
    interface CountContactsResponse {
        count?: number;
    }
    interface SearchContactsRequest {
        /** Search object. Encapsulates filter, sorting, paging and other details */
        search?: Search;
    }
    interface Search extends SearchPagingMethodOneOf {
        /** Cursor pointing to page of results. 'cursorPaging.cursor' can not be used together with 'filter' or 'sort' */
        cursorPaging?: CursorPaging$1;
        /** A filter object. See documentation [here](https://bo.wix.com/wix-docs/rnd/platformization-guidelines/api-query-language#platformization-guidelines_api-query-language_defining-in-protobuf) */
        filter?: Record<string, any> | null;
        /** Sort object in the form [{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}] */
        sort?: Sorting$3[];
        /**
         * List of projected fields to return.
         *
         * If used in the request,
         * all the fields contained in `fields` and `fieldsets` are returned.
         * If left blank, `fieldsets` is used to determine which fields to return.
         *
         * For a list of valid projected fields, see
         * [Valid Contact Projection Fields](https://dev.wix.com/api/rest/contacts/contacts/fieldsets-and-projected-fields#contacts_contacts_fieldsets-and-projected-fields_valid-contact-projection-fields).
         */
        fields?: string[];
        /**
         * Predefined sets of fields to return.
         *
         * Defaults to `FULL`.
         * Ignored if left empty when `fields` is used in the request.
         *
         * For more information,
         * see [Contact Fieldsets](https://dev.wix.com/api/rest/contacts/contacts/fieldsets-and-projected-fields#contacts_contacts_fieldsets-and-projected-fields_contact-fieldsets).
         */
        fieldsets?: string[];
        /** free text to match in searchable fields */
        search?: SearchDetails;
    }
    /** @oneof */
    interface SearchPagingMethodOneOf {
        /** Cursor pointing to page of results. 'cursorPaging.cursor' can not be used together with 'filter' or 'sort' */
        cursorPaging?: CursorPaging$1;
    }
    interface SearchDetails {
        /** boolean search mode. Default is `OR` */
        mode?: Mode;
        /** search term or expression */
        expression?: string | null;
        /**
         * fields to search in. if empty - server will search in own default fieldsDefault searchable fields:
         *
         * - `info.name.first`
         * - `info.name.last`
         * - `info.emails.email`
         * - `info.phones.phone`
         */
        fields?: string[];
        /** flag if should use auto fuzzy search (allowing typos by a managed proximity algorithm) */
        fuzzy?: boolean;
    }
    enum Mode {
        /** any */
        OR = "OR",
        /** all */
        AND = "AND"
    }
    interface CursorPaging$1 {
        /** The number of contacts to load (default = 50, max = 1000) */
        limit?: number | null;
        /** Cursor returned in last query response. Should not be provided on first page request */
        cursor?: string | null;
    }
    interface SearchContactsResponse {
        /** List of contacts. */
        contacts?: Contact[];
        /** Details on the paged set of results returned. */
        pagingMetadata?: PagingMetadataV2$1;
    }
    interface PagingMetadataV2$1 {
        /** The number of items returned in this response */
        count?: number | null;
        /** The offset which was requested. Returned if offset paging was used */
        offset?: number | null;
        /** The total number of items that match the query. Returned if offset paging was used and 'too_many_to_count' flag is not set */
        total?: number | null;
        /** A flag that indicates the server failed to calculate 'total' field */
        tooManyToCount?: boolean | null;
        /** Cursors to navigate through result pages. Returned if cursor paging was used */
        cursors?: Cursors$1;
    }
    interface Cursors$1 {
        /** Cursor pointing to next result page */
        next?: string | null;
        /** Cursor pointing to previous result page */
        prev?: string | null;
    }
    interface BulkAddSegmentToContactsRequest {
        /** Segment id */
        segmentId?: string;
        /** List of Contact ids */
        contactIds?: string[];
        /** List of existing segment ids */
        existsSegmentIds?: string[];
    }
    interface BulkAddSegmentToContactsResponse {
        /** List of action results */
        results?: ItemMetadata[];
        /** Metadata on the bulk action */
        bulkActionMetadata?: BulkActionMetadata;
    }
    interface ItemMetadata {
        /** Item ID. Should always be available, unless it's impossible (for example, when failing to create an item). */
        _id?: string | null;
        /** Index of the item within the request array. Allows for correlation between request and response items. */
        originalIndex?: number;
        /** Whether the requested action was successful for this item. When `false`, the `error` field is populated. */
        success?: boolean;
        /** Details about the error in case of failure. */
        error?: ApplicationError;
    }
    interface ApplicationError {
        /** Error code. */
        code?: string;
        /** Description of the error. */
        description?: string;
        /** Data related to the error. */
        data?: Record<string, any> | null;
    }
    interface BulkActionMetadata {
        /** Number of items that were successfully processed. */
        totalSuccesses?: number;
        /** Number of items that couldn't be processed. */
        totalFailures?: number;
        /** Number of failures without details because detailed failure threshold was exceeded. */
        undetailedFailures?: number;
    }
    interface ContactAddedToSegment {
        /** Id of the segment to which the contact was added */
        segmentId?: string;
        /** The contact that was added */
        contact?: Contact;
    }
    interface BulkRemoveSegmentFromContactsRequest {
        /** Segment id */
        segmentId?: string;
        /** List of Contact ids */
        contactIds?: string[];
    }
    interface BulkRemoveSegmentFromContactsResponse {
        /** List of action results */
        results?: ItemMetadata[];
        /** Metadata on the bulk action */
        bulkActionMetadata?: BulkActionMetadata;
    }
    interface ContactRemovedFromSegment {
        /** Id of the segment from which the contact was removed */
        segmentId?: string;
        /** The contact that was removed */
        contact?: Contact;
    }
    interface EstimateFilterSizeOptions {
        /** Should "inactive" contacts be excluded or not (default value "false"). */
        activeContactsOnly?: boolean;
        /** Contacts plain text search expression (searches in name, phone and email fields). */
        search?: string | null;
    }
    interface EstimateAudienceSizeOptions {
        /** Contact IDs of a campaign audience. */
        contactIds?: string[];
        /** Label IDs of a campaign audience. */
        labelIds?: string[];
        /** Contacts filter expression (json). */
        contactsFilter?: Record<string, any> | null;
        /** Contacts plain text search expression (searches in name, phone and email fields). */
        search?: string | null;
        /** Segment ids of a campaign audience. */
        segmentIds?: string[];
        /** Should "inactive" contacts be excluded or not (default value "false"). */
        activeContactsOnly?: boolean;
        /** Id of a campaign that is to be resent. */
        resendCampaignId?: string | null;
    }
    /**
     * Creates a new contact.
     *
     *
     * The `createContact()` function returns a Promise
     * that resolves to the new contact when it is created.
     *
     * The `info` parameter object must include a name, phone number, or email address.
     *  If all 3 of these parameters are missing,
     *  the contact won't be created.
     *
     * <!--
     * > **Note:**
     * > Only visitors with
     * > **Manage Contacts** [permissions](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Froles-and-permissions)
     * > can create contacts.
     * > You can override the permissions by setting the `suppressAuth` option to `true`.
     * -->
     *   By default,
     *  if the call contains an email already in use by another contact,
     *  the new contact won't be created.
     *  To override this behavior,
     *  set `allowDuplicates` in the `options` object to `true`.
     *
     * This function is not a universal function and runs only on the backend.
     * @param info - Contact info.
     * @public
     * @documentationMaturity preview
     * @requiredField info
     * @param options - Create contact options.
     * @returns Contact.
     */
    function createContact(info: ContactInfo$2, options?: CreateContactOptions): Promise<CreateContactResponse>;
    interface CreateContactOptions {
        /**
         * Controls whether the call will succeed
         * if the new contact information contains an email or a phone number already used by another contact.
         *
         * If set to `true`,
         * the call will succeed even if an email address or phone number is used by another contact.
         * If set to `false`,
         * the call will fail if the given email address is used by another contact or,
         * if the email address is not given and the given phone number is used by another contact.
         *
         * Defaults to `false`.
         */
        allowDuplicates?: boolean;
    }
    /**
     * Updates a contact's properties.
     *
     * The `updateContact()` function returns a Promise that resolves
     * when the specified contact's information is updated.
     *
     *  Each time the contact is updated,
     * `revision` increments by 1.
     * The existing `revision` must be included when updating the contact.
     * This ensures you're working with the latest contact information,
     * and it prevents unintended overwrites.
     *
     * <!--
     *  > **Note:**
     * > Only visitors with
     * > **Manage Contacts** [permissions](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Froles-and-permissions)
     * > can update contacts.
     * > You can override the permissions by setting the `suppressAuth` option to `true`.
     * -->
     *
     * This function is not a universal function and runs only on the backend.
     * @param contactId - ID of the contact to update.
     * @param info - Contact info.
     * @public
     * @documentationMaturity preview
     * @requiredField contactId
     * @requiredField info
     * @requiredField options
     * @requiredField options.revision
     * @param options - Contact update options.
     * @returns Updated contact.
     */
    function updateContact(contactId: string, info: ContactInfo$2, options: UpdateContactOptions): Promise<UpdateContactResponse>;
    interface UpdateContactOptions {
        /**
         * Revision number.
         * When updating, include the existing `revision`
         * to prevent conflicting updates.
         */
        revision: number | null;
        /**
         * Controls whether the call will succeed if the new contact information contains an email already used by another contact.
         *
         * If set to `true`, the call will succeed even if an email address is used by another contact. If set to `false`, the call will fail if an email address is used by another contact.
         *
         * Defaults to `false`.
         */
        allowDuplicates?: boolean;
    }
    /**
     * Merges source contacts into a target contact.
     *
     * Merging contacts has these effects on the target contact:
     *
     * - No target contact data is overwritten or deleted.
     * - Arrays (emails, phones, addresses, and labels) are merged from the source contacts.
     * - If merging more than one source contact, the 1st source is given precedence, then the 2nd, and so on.
     *
     * <blockquote class="important">
     *
     * __Important:__
     * Merges cannot be undone.
     * Use [Preview Merge Contacts](#preview-merge-contacts)
     * to test before merging.
     *
     * </blockquote>
     *
     * Source contacts are deleted when merging.
     * However, if a source contact is a site member or contributor,
     * the merge fails because site contributors and members can't be deleted.
     * Site members and contributors can be target contacts only.
     *
     * After merging,
     * if you call [Get Contact](#get-contact) with a deleted source contact ID,
     * the target contact ID is returned.
     * This is supported when calling Get Contact only.
     * Deleted source contact IDs are not supported on any other endpoint.
     *
     * Merging contacts triggers these webhooks:
     *
     * - Contact Merged is triggered.
     * - Contact Updated is triggered for the target contact. `originatedFrom` is set to `merge`.
     * - Contact Deleted is triggered for each source contact. `originatedFrom` is set to `merge`.
     *
     * This function is not a universal function and runs only on the backend.
     *
     * This function is not a universal function and runs only on the backend.
     * @param targetContactId - Target contact ID.
     * @param targetContactRevision - Target contact revision number, which increments by 1 each time the contact is updated.
     * To prevent conflicting changes,
     * the target contact's current revision must be passed.
     * @public
     * @documentationMaturity preview
     * @requiredField targetContactId
     * @requiredField targetContactRevision
     * @param options - Merge contacts options.
     */
    function mergeContacts(targetContactId: string, targetContactRevision: number | null, options?: MergeContactsOptions): Promise<MergeContactsResponse>;
    interface MergeContactsOptions {
        /**
         * IDs of up to 5 contacts to merge into the target contact.
         * If merging more than one source contact,
         * the first source is given precedence, then the second, and so on.
         */
        sourceContactIds?: string[];
    }
    interface PreviewMergeContactsOptions {
        /**
         * IDs of up to 5 contacts to merge into the target contact.
         * If merging more than one source contact,
         * the first source is given precedence, then the second, and so on.
         */
        sourceContactIds?: string[];
    }
    /**
     * Deletes a contact who is not a site member or contributor.
     *
     * The `deleteContact()` function returns a Promise
     * that resolves when the specified contact is deleted.
     *
     *  Deleting a contact permanently removes them from your Contact List.
     *
     *  If the contact is also a site member,
     * the member must be deleted first,
     * and then the contact can be deleted.
     *
     * <!--
     *  > **Note:**
     * > Only visitors with
     * > **Manage Contacts** [permissions](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Froles-and-permissions)
     * > can delete contacts.
     * > You can override the permissions by setting the `suppressAuth` option to `true`.
     * -->
     *
     * This function is not a universal function and runs only on the backend.
     * @param contactId - ID of the contact to delete.
     * @public
     * @documentationMaturity preview
     * @requiredField contactId
     */
    function deleteContact(contactId: string): Promise<void>;
    /**
     * Adds labels to a contact.
     *
     *
     * The `labelContact()` function returns a Promise
     * that resolves when the specified labels are added to the contact.
     *  - **To create new labels:** Use [`findOrCreateLabel()`](#contacts/findorcreatelabel).
     * - **To find labels:** Use [`findOrCreateLabel()`](#contacts/findorcreatelabel), [`getLabel()`](#contacts/getlabel), or [`queryLabels()`](#contacts/queryLabels).
     *
     * <!--
     *  > **Note:**
     * > Only visitors with
     * > **Manage Contacts** [permissions](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Froles-and-permissions)
     * > can label contacts.
     * > You can override the permissions by setting the `suppressAuth` option to `true`.
     * -->
     *
     * This function is not a universal function and runs only on the backend.
     * @param contactId - ID of the contact to add labels to.
     * @param labelKeys - List of label keys to add to the contact.
     *
     * Label keys must exist to be added to the contact.
     *  Contact labels can be created or retrieved with
     *  [`findOrCreateLabel()`](wix-crm-backend/contacts/findorcreatelabel)
     *  or
     *  [`queryLabels()`](wix-crm-backend/contacts/queryLabels).
     * @public
     * @documentationMaturity preview
     * @requiredField contactId
     * @requiredField labelKeys
     * @returns Updated contact.
     */
    function labelContact(contactId: string, labelKeys: string[], options?: LabelContactOptions): Promise<LabelContactResponse>;
    interface LabelContactOptions {
    }
    /**
     * Removes labels from a contact.
     *
     *  The `unlabelContact()` function returns a Promise
     *  that resolves when the specified labels are removed from the contact.
     *
     *   If a label is no longer needed
     *  and you want to remove it from all contacts,
     *  you can delete it with Labels
     *  `deleteLabel()`.
     *
     * <!--
     *   > **Note:**
     *  > Only visitors with
     *  > **Manage Contacts** [permissions](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Froles-and-permissions)
     *  > can unlabel contacts.
     *  > You can override the permissions by setting the `suppressAuth` option to `true`.
     * -->
     *
     * This function is not a universal function and runs only on the backend.
     * @param contactId - ID of the contact to remove labels from.
     * @param labelKeys - List of label keys to remove from the contact.
     * @public
     * @documentationMaturity preview
     * @requiredField contactId
     * @requiredField labelKeys
     * @returns Updated contact.
     */
    function unlabelContact(contactId: string, labelKeys: string[], options?: UnlabelContactOptions): Promise<UnlabelContactResponse>;
    interface UnlabelContactOptions {
    }
    interface LabelAndUnlabelContactOptions {
        /** List of label keys to remove from the contact. */
        labelKeysToRemove: string[];
    }
    interface ListContactsOptions {
        /** Sort order. */
        sort?: Sorting$3;
        /** Pagination, defaults to offset = 0 and limit = 50 (max limit 1,000). */
        paging?: Paging$3;
        /**
         * List of projected fields to return.
         * If both `fields` and `fieldsets` are sent in the request,
         * the union of both lists is returned.
         * `id` and `revision` are always returned.
         *
         * Supported properties:
         * `source`, `createdDate`, `updatedDate`, `lastActivity`, `primaryInfo`,
         * `info.name`, `info.emails`, `info.phones`, `info.addresses`, `info.company`,
         * `info.jobTitle`, `info.picture`, `info.birthdate`, `info.locale`,
         * `info.labelKeys`, `info.locations`, `info.extendedFields`
         */
        fields?: string[];
        fieldsets?: ContactFieldSet[];
    }
    /**
     * Creates a query to retrieve a list of contacts.
     *
     * The `queryContacts()` function builds a query to retrieve a list of contacts
     * and returns a
     * [`ContactsQueryBuilder`](#contactsquerybuilder)
     * object.
     *
     * The returned object contains the query definition,
     * which is typically used to run the query using the
     * [`find()`](#contactsquerybuilder/find)
     * function.
     *
     * You can refine the query
     * by chaining `ContactsQueryBuilder` functions onto the query.
     * `ContactsQueryBuilder` functions enable you to sort, filter,
     * and control the results `queryContacts()` returns.
     *
     * `queryContacts()` runs with these `ContactsQueryBuilder` defaults,
     * which you can override:
     *
     * - [`skip(0)`](#contactsquerybuilder/skip)
     * - [`limit(50)`](#contactsquerybuilder/limit)
     * - [`descending("_createdDate")`](#contactsquerybuilder/descending)
     *
     * The functions that are chained to `queryContacts()`
     * are applied in the order they are called.
     * For example, if you apply `ascending('info.company')`
     * and then `descending('info.name.last')`,
     * the results are sorted first by the company name, and then,
     * if there are multiple results with the same company,
     * the items are sorted by last name.
     *
     * <!--
     * > **Note:**
     * > Only visitors with
     * > **Manage Contacts** [permissions](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Froles-and-permissions)
     * > can query contacts.
     * > You can override the permissions by setting the `suppressAuth` option to `true`
     * > in the [`find()`](wix-crm-backend/contacts/contactsquerybuilder/find) function.
     * -->
     *
     * This function is not a universal function and runs only on the backend.
     * @public
     * @documentationMaturity preview
     * @param options - Query contact options.
     */
    function queryContacts(options?: QueryContactsOptions): ContactsQueryBuilder;
    interface QueryContactsOptions {
        /**
         * Plain text search for an exact match.
         *
         * Supported properties:
         * `info.name.first`, `info.name.last`, `info.emails.email`, `info.phones.phone`
         *
         * Max: 100 characters
         */
        search?: string | null | undefined;
    }
    interface QueryOffsetResult$2 {
        currentPage: number;
        totalPages: number;
        totalCount: number;
        hasNext: () => boolean;
        hasPrev: () => boolean;
        length: number;
        pageSize: number;
    }
    interface ContactsQueryResult extends QueryOffsetResult$2 {
        items: Contact[];
        query: ContactsQueryBuilder;
        next: () => Promise<ContactsQueryResult>;
        prev: () => Promise<ContactsQueryResult>;
    }
    interface ContactsQueryBuilder {
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        eq: (propertyName: "_id" | "_createdDate" | "_updatedDate" | "lastActivity.activityDate" | "primaryInfo.email" | "primaryInfo.phone" | "info.name.first" | "info.name.last" | "info.company" | "info.jobTitle" | "info.birthdate" | "info.locale", value: any) => ContactsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        ne: (propertyName: "_id" | "_createdDate" | "_updatedDate" | "lastActivity.activityDate" | "primaryInfo.email" | "primaryInfo.phone" | "info.name.first" | "info.name.last" | "info.company" | "info.jobTitle" | "info.birthdate" | "info.locale", value: any) => ContactsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        gt: (propertyName: "_createdDate" | "_updatedDate" | "lastActivity.activityDate", value: any) => ContactsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        lt: (propertyName: "_createdDate" | "_updatedDate" | "lastActivity.activityDate", value: any) => ContactsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `string`.
         * @param string - String to compare against. Case-insensitive.
         * @documentationMaturity preview
         */
        startsWith: (propertyName: "primaryInfo.email" | "primaryInfo.phone" | "info.name.first" | "info.name.last" | "info.company" | "info.jobTitle", value: string) => ContactsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `values`.
         * @param values - List of values to compare against.
         * @documentationMaturity preview
         */
        hasSome: (propertyName: "_createdDate" | "_updatedDate" | "lastActivity.activityDate" | "primaryInfo.email" | "primaryInfo.phone" | "info.name.first" | "info.name.last" | "info.company" | "info.jobTitle" | "info.labelKeys", value: any[]) => ContactsQueryBuilder;
        /** @documentationMaturity preview */
        in: (propertyName: "_id" | "_createdDate" | "_updatedDate" | "lastActivity.activityDate" | "primaryInfo.email" | "primaryInfo.phone" | "info.name.first" | "info.name.last" | "info.company" | "info.jobTitle" | "info.locale", value: any) => ContactsQueryBuilder;
        /** @documentationMaturity preview */
        exists: (propertyName: "_id" | "_createdDate" | "_updatedDate" | "lastActivity.activityDate" | "primaryInfo.email" | "primaryInfo.phone" | "info.name.first" | "info.name.last" | "info.company" | "info.jobTitle" | "info.locale", value: boolean) => ContactsQueryBuilder;
        /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
         * @documentationMaturity preview
         */
        ascending: (...propertyNames: Array<"_createdDate" | "lastActivity.activityDate" | "primaryInfo.email" | "info.name.first" | "info.name.last" | "info.company" | "info.jobTitle" | "info.birthdate">) => ContactsQueryBuilder;
        /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
         * @documentationMaturity preview
         */
        descending: (...propertyNames: Array<"_createdDate" | "lastActivity.activityDate" | "primaryInfo.email" | "info.name.first" | "info.name.last" | "info.company" | "info.jobTitle" | "info.birthdate">) => ContactsQueryBuilder;
        /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
         * @documentationMaturity preview
         */
        limit: (limit: number) => ContactsQueryBuilder;
        /** @param skip - Number of items to skip in the query results before returning the results.
         * @documentationMaturity preview
         */
        skip: (skip: number) => ContactsQueryBuilder;
        /** @documentationMaturity preview */
        find: () => Promise<ContactsQueryResult>;
    }
    interface ListFacetsOptions {
        /** Allow paginating, default: offset = 0 and limit = 1000 */
        paging?: Paging$3;
        /** Language for localization */
        language?: string | null;
    }
    interface QueryFacetsOptions {
        /** Allow paginating, default: offset = 0 and limit = 1000 */
        paging?: Paging$3;
        /** Language for localization */
        language?: string | null;
        /**
         * Only allowed fields:
         * #info.extendedFields.emailSubscriptions.effectiveEmail ($exists)
         * #info.extendedFields.emailSubscriptions.deliverabilityStatus ($eq, $ne, $in, $nin)
         * #info.extendedFields.emailSubscriptions.subscriptionStatus ($eq, $ne, $in)
         */
        filter?: Record<string, any> | null;
    }
    interface BulkDeleteContactsOptions {
        /**
         * Filter object.
         *
         * Possible filters:
         * `$eq`, `$exists`, `$gt`, `$gte`, `$hasAll`, `$hasSome`, `$in`, `$lt`, `$lte`, `$ne`, `$startsWith`.
         *
         * For a detailed list of supported filters, see
         * filtering and sorting for
         * [contact properties](https://dev.wix.com/api/rest/contacts/contacts/sorting,-filtering,-and-searching#contact-properties-filtering-sorting-and-searching),
         * [extended fields](https://dev.wix.com/api/rest/contacts/contacts/sorting,-filtering,-and-searching#extended-fields-filtering-sorting-and-searching),
         * and [custom fields](https://dev.wix.com/api/rest/contacts/contacts/sorting,-filtering,-and-searching#custom-fields-filtering-sorting-and-searching).
         *
         * Example:
         * `{ "filter": { "info.name.last": "Smith" } }`
         */
        filter?: Record<string, any> | null;
        /**
         * Plain text search for an exact match, up to 100 characters.
         *
         * Searchable fields:
         *
         * - `info.name.first`
         * - `info.name.last`
         * - `info.emails.email`
         * - `info.phones.phone`
         */
        search?: string | null;
    }
    interface BulkUpdateContactsOptions {
        /**
         * Filter object.
         *
         * Possible filters:
         * `$eq`, `$exists`, `$gt`, `$gte`, `$hasAll`, `$hasSome`, `$in`, `$lt`, `$lte`, `$ne`, `$startsWith`.
         *
         * For a detailed list of supported filters, see
         * filtering and sorting for
         * [contact properties](https://dev.wix.com/api/rest/contacts/contacts/sorting,-filtering,-and-searching#contact-properties-filtering-sorting-and-searching),
         * [extended fields](https://dev.wix.com/api/rest/contacts/contacts/sorting,-filtering,-and-searching#extended-fields-filtering-sorting-and-searching),
         * and [custom fields](https://dev.wix.com/api/rest/contacts/contacts/sorting,-filtering,-and-searching#custom-fields-filtering-sorting-and-searching).
         *
         * Example:
         * `{ "filter": { "info.name.last": "Smith" } }`
         */
        filter?: Record<string, any> | null;
        /**
         * Plain text search for an exact match, up to 100 characters.
         *
         * Searchable fields:
         *
         * - `info.name.first`
         * - `info.name.last`
         * - `info.emails.email`
         * - `info.phones.phone`
         */
        search?: string | null;
        /** Contact info. */
        info?: ContactInfo$2;
    }
    interface BulkLabelAndUnlabelContactsOptions {
        /**
         * Filter options.
         * Labels will be removed from contacts that meet the `filter` and `search` criteria.
         *
         * See
         * [Field Support for Filtering, Sorting, and Searching](https://dev.wix.com/api/rest/contacts/contacts/sort-and-filter#contacts_contacts_sort-and-filter_field-support-for-filtering-sorting-and-searching)
         * for a list of supported filters and fields.
         */
        filter?: Record<string, any> | null;
        /**
         * Plain text search for an exact match, up to 100 characters.
         * Labels will be removed from contacts that meet the `filter` and `search` criteria.
         *
         * See
         * [Field Support for Filtering, Sorting, and Searching](https://dev.wix.com/api/rest/contacts/contacts/sort-and-filter#contacts_contacts_sort-and-filter_field-support-for-filtering-sorting-and-searching)
         * for a list of searchable fields.
         */
        search?: string | null;
        /**
         * List of label keys to add to the contacts.
         *
         * Label keys must exist to be added to the contact.
         *  Contact labels can be created or retrieved with
         *  [`findOrCreateLabel()`](wix-crm-backend/contacts/findorcreatelabel)
         *  or
         *  [`queryLabels()`](wix-crm-backend/contacts/queryLabels).
         */
        labelKeysToAdd?: string[];
        /** List of label keys to remove from the contacts. */
        labelKeysToRemove?: string[];
    }
    interface BulkUpsertContactsOptions {
        info?: ContactInfo$2[];
        returnFullEntity?: boolean;
    }
    interface GeneratePictureUploadUrlOptions {
        /**
         * Mime Type. Must be one of:
         * `image/png`, `image/jpeg`.
         * Defaults to `image/png`.
         */
        mimeType?: string | null;
    }
    /**
     * Retrieves a contact.
     *
     *
     * The `getContact()` function returns a Promise
     * that resolves when the contact is found.
     * #### Getting Merged Contacts
     * When a source contact is merged
     * with a target contact, the source contact is deleted.
     * When calling `getContact()` for a merged contact,
     * you can use the source or target contact ID.
     * In both cases, the target contact is returned.
     *
     * This is supported only when calling `getContact()`,
     * and only for merged contacts.
     * Deleted source contact IDs are not supported on any other function.
     *
     * <!-- > - Only visitors with
     * >   **Manage Contacts** [permissions](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Froles-and-permissions)
     * >   can retrieve contacts.
     * >   You can override the permissions by setting the `suppressAuth` option to `true`.
     * -->
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - ID of the contact to retrieve.
     * @public
     * @documentationMaturity preview
     * @requiredField _id
     * @param options - Get contact options.
     * @returns The requested contact.
     */
    function getContact(_id: string, options?: GetContactOptions): Promise<Contact>;
    interface GetContactOptions {
        /**
         * List of projected fields to return.
         * If both `fields` and `fieldsets` are sent in the request,
         * the union of both lists is returned.
         * `id` and `revision` are always returned.
         *
         * Supported properties:
         * `source`, `createdDate`, `updatedDate`, `lastActivity`, `primaryInfo`,
         * `info.name`, `info.emails`, `info.phones`, `info.addresses`, `info.company`,
         * `info.jobTitle`, `info.picture`, `info.birthdate`, `info.locale`,
         * `info.labelKeys`, `info.locations`, `info.extendedFields`
         */
        fields?: string[];
        /**
         * Predefined sets of fields to return.
         * If both `fields` and `fieldsets` are sent in the request,
         * the union of both lists is returned.
         *
         * - `BASIC`: Returns `id`, `revision`, `primaryInfo`, `info.name`.
         * - `COMMUNICATION_DETAILS`: Returns `id`, `revision`, `primaryInfo`, `info.name`, `info.emails`, `info.phones`, `info.addresses`.
         * - `EXTENDED`: Returns `id`, `revision`, `primaryInfo`, `info.name`, `info.extendedFields`.
         * - `FULL`: Returns all fields.
         *
         * Default: If `fields` is omitted from the request, `FULL`.
         */
        fieldsets?: ContactFieldSet[];
    }
    interface SearchContactsOptions {
        /** Search object. Encapsulates filter, sorting, paging and other details */
        search?: Search;
    }
    type contactsV4Contact_universal_d_Contact = Contact;
    type contactsV4Contact_universal_d_ContactSource = ContactSource;
    type contactsV4Contact_universal_d_PrimaryContactInfo = PrimaryContactInfo;
    type contactsV4Contact_universal_d_SegmentsWrapper = SegmentsWrapper;
    type contactsV4Contact_universal_d_EstimateFilterSizeRequest = EstimateFilterSizeRequest;
    type contactsV4Contact_universal_d_EstimateFilterSizeResponse = EstimateFilterSizeResponse;
    type contactsV4Contact_universal_d_EstimateAudienceSizeRequest = EstimateAudienceSizeRequest;
    type contactsV4Contact_universal_d_EstimateAudienceSizeResponse = EstimateAudienceSizeResponse;
    type contactsV4Contact_universal_d_ContactSubmitted = ContactSubmitted;
    type contactsV4Contact_universal_d_ContactChanged = ContactChanged;
    type contactsV4Contact_universal_d_CreateContactRequest = CreateContactRequest;
    type contactsV4Contact_universal_d_CreateContactResponse = CreateContactResponse;
    type contactsV4Contact_universal_d_DuplicateContactExists = DuplicateContactExists;
    type contactsV4Contact_universal_d_UpdateContactRequest = UpdateContactRequest;
    type contactsV4Contact_universal_d_UpdateContactResponse = UpdateContactResponse;
    type contactsV4Contact_universal_d_MergeContactsRequest = MergeContactsRequest;
    type contactsV4Contact_universal_d_MergeContactsResponse = MergeContactsResponse;
    type contactsV4Contact_universal_d_ContactMerged = ContactMerged;
    type contactsV4Contact_universal_d_PreviewMergeContactsRequest = PreviewMergeContactsRequest;
    type contactsV4Contact_universal_d_PreviewMergeContactsResponse = PreviewMergeContactsResponse;
    type contactsV4Contact_universal_d_DeleteContactRequest = DeleteContactRequest;
    type contactsV4Contact_universal_d_DeleteContactResponse = DeleteContactResponse;
    type contactsV4Contact_universal_d_LabelContactRequest = LabelContactRequest;
    type contactsV4Contact_universal_d_LabelContactResponse = LabelContactResponse;
    type contactsV4Contact_universal_d_UnlabelContactRequest = UnlabelContactRequest;
    type contactsV4Contact_universal_d_UnlabelContactResponse = UnlabelContactResponse;
    type contactsV4Contact_universal_d_LabelAndUnlabelContactRequest = LabelAndUnlabelContactRequest;
    type contactsV4Contact_universal_d_LabelAndUnlabelContactResponse = LabelAndUnlabelContactResponse;
    type contactsV4Contact_universal_d_ListContactsRequest = ListContactsRequest;
    type contactsV4Contact_universal_d_ContactFieldSet = ContactFieldSet;
    const contactsV4Contact_universal_d_ContactFieldSet: typeof ContactFieldSet;
    type contactsV4Contact_universal_d_ListContactsResponse = ListContactsResponse;
    type contactsV4Contact_universal_d_QueryContactsRequest = QueryContactsRequest;
    type contactsV4Contact_universal_d_QueryContactsResponse = QueryContactsResponse;
    type contactsV4Contact_universal_d_ListFacetsRequest = ListFacetsRequest;
    type contactsV4Contact_universal_d_ListFacetsResponse = ListFacetsResponse;
    type contactsV4Contact_universal_d_ContactsFacet = ContactsFacet;
    type contactsV4Contact_universal_d_ContactsFacetType = ContactsFacetType;
    const contactsV4Contact_universal_d_ContactsFacetType: typeof ContactsFacetType;
    type contactsV4Contact_universal_d_QueryFacetsRequest = QueryFacetsRequest;
    type contactsV4Contact_universal_d_QueryFacetsResponse = QueryFacetsResponse;
    type contactsV4Contact_universal_d_BulkDeleteContactsRequest = BulkDeleteContactsRequest;
    type contactsV4Contact_universal_d_BulkDeleteContactsResponse = BulkDeleteContactsResponse;
    type contactsV4Contact_universal_d_BulkUpdateContactsRequest = BulkUpdateContactsRequest;
    type contactsV4Contact_universal_d_BulkUpdateContactsResponse = BulkUpdateContactsResponse;
    type contactsV4Contact_universal_d_BulkLabelAndUnlabelContactsRequest = BulkLabelAndUnlabelContactsRequest;
    type contactsV4Contact_universal_d_BulkLabelAndUnlabelContactsResponse = BulkLabelAndUnlabelContactsResponse;
    type contactsV4Contact_universal_d_BulkUpsertContactsRequest = BulkUpsertContactsRequest;
    type contactsV4Contact_universal_d_BulkUpsertContactsResponse = BulkUpsertContactsResponse;
    type contactsV4Contact_universal_d_Action = Action;
    const contactsV4Contact_universal_d_Action: typeof Action;
    type contactsV4Contact_universal_d_Error = Error;
    type contactsV4Contact_universal_d_Metadata = Metadata;
    type contactsV4Contact_universal_d_Item = Item;
    type contactsV4Contact_universal_d_BulkUpsertContactsResponseMetadata = BulkUpsertContactsResponseMetadata;
    type contactsV4Contact_universal_d_UpsertContactRequest = UpsertContactRequest;
    type contactsV4Contact_universal_d_UpsertContactResponse = UpsertContactResponse;
    type contactsV4Contact_universal_d_UpsertContactResponseAction = UpsertContactResponseAction;
    const contactsV4Contact_universal_d_UpsertContactResponseAction: typeof UpsertContactResponseAction;
    type contactsV4Contact_universal_d_GeneratePictureUploadUrlRequest = GeneratePictureUploadUrlRequest;
    type contactsV4Contact_universal_d_GeneratePictureUploadUrlResponse = GeneratePictureUploadUrlResponse;
    type contactsV4Contact_universal_d_GetContactRequest = GetContactRequest;
    type contactsV4Contact_universal_d_GetContactResponse = GetContactResponse;
    type contactsV4Contact_universal_d_GetContactResponseType = GetContactResponseType;
    const contactsV4Contact_universal_d_GetContactResponseType: typeof GetContactResponseType;
    type contactsV4Contact_universal_d_SyncSubmitContactRequest = SyncSubmitContactRequest;
    type contactsV4Contact_universal_d_SyncSubmitContactResponse = SyncSubmitContactResponse;
    type contactsV4Contact_universal_d_CountContactsRequest = CountContactsRequest;
    type contactsV4Contact_universal_d_CountContactsResponse = CountContactsResponse;
    type contactsV4Contact_universal_d_SearchContactsRequest = SearchContactsRequest;
    type contactsV4Contact_universal_d_Search = Search;
    type contactsV4Contact_universal_d_SearchPagingMethodOneOf = SearchPagingMethodOneOf;
    type contactsV4Contact_universal_d_SearchDetails = SearchDetails;
    type contactsV4Contact_universal_d_Mode = Mode;
    const contactsV4Contact_universal_d_Mode: typeof Mode;
    type contactsV4Contact_universal_d_SearchContactsResponse = SearchContactsResponse;
    type contactsV4Contact_universal_d_BulkAddSegmentToContactsRequest = BulkAddSegmentToContactsRequest;
    type contactsV4Contact_universal_d_BulkAddSegmentToContactsResponse = BulkAddSegmentToContactsResponse;
    type contactsV4Contact_universal_d_ItemMetadata = ItemMetadata;
    type contactsV4Contact_universal_d_ApplicationError = ApplicationError;
    type contactsV4Contact_universal_d_BulkActionMetadata = BulkActionMetadata;
    type contactsV4Contact_universal_d_ContactAddedToSegment = ContactAddedToSegment;
    type contactsV4Contact_universal_d_BulkRemoveSegmentFromContactsRequest = BulkRemoveSegmentFromContactsRequest;
    type contactsV4Contact_universal_d_BulkRemoveSegmentFromContactsResponse = BulkRemoveSegmentFromContactsResponse;
    type contactsV4Contact_universal_d_ContactRemovedFromSegment = ContactRemovedFromSegment;
    type contactsV4Contact_universal_d_EstimateFilterSizeOptions = EstimateFilterSizeOptions;
    type contactsV4Contact_universal_d_EstimateAudienceSizeOptions = EstimateAudienceSizeOptions;
    const contactsV4Contact_universal_d_createContact: typeof createContact;
    type contactsV4Contact_universal_d_CreateContactOptions = CreateContactOptions;
    const contactsV4Contact_universal_d_updateContact: typeof updateContact;
    type contactsV4Contact_universal_d_UpdateContactOptions = UpdateContactOptions;
    const contactsV4Contact_universal_d_mergeContacts: typeof mergeContacts;
    type contactsV4Contact_universal_d_MergeContactsOptions = MergeContactsOptions;
    type contactsV4Contact_universal_d_PreviewMergeContactsOptions = PreviewMergeContactsOptions;
    const contactsV4Contact_universal_d_deleteContact: typeof deleteContact;
    const contactsV4Contact_universal_d_labelContact: typeof labelContact;
    type contactsV4Contact_universal_d_LabelContactOptions = LabelContactOptions;
    const contactsV4Contact_universal_d_unlabelContact: typeof unlabelContact;
    type contactsV4Contact_universal_d_UnlabelContactOptions = UnlabelContactOptions;
    type contactsV4Contact_universal_d_LabelAndUnlabelContactOptions = LabelAndUnlabelContactOptions;
    type contactsV4Contact_universal_d_ListContactsOptions = ListContactsOptions;
    const contactsV4Contact_universal_d_queryContacts: typeof queryContacts;
    type contactsV4Contact_universal_d_QueryContactsOptions = QueryContactsOptions;
    type contactsV4Contact_universal_d_ContactsQueryResult = ContactsQueryResult;
    type contactsV4Contact_universal_d_ContactsQueryBuilder = ContactsQueryBuilder;
    type contactsV4Contact_universal_d_ListFacetsOptions = ListFacetsOptions;
    type contactsV4Contact_universal_d_QueryFacetsOptions = QueryFacetsOptions;
    type contactsV4Contact_universal_d_BulkDeleteContactsOptions = BulkDeleteContactsOptions;
    type contactsV4Contact_universal_d_BulkUpdateContactsOptions = BulkUpdateContactsOptions;
    type contactsV4Contact_universal_d_BulkLabelAndUnlabelContactsOptions = BulkLabelAndUnlabelContactsOptions;
    type contactsV4Contact_universal_d_BulkUpsertContactsOptions = BulkUpsertContactsOptions;
    type contactsV4Contact_universal_d_GeneratePictureUploadUrlOptions = GeneratePictureUploadUrlOptions;
    const contactsV4Contact_universal_d_getContact: typeof getContact;
    type contactsV4Contact_universal_d_GetContactOptions = GetContactOptions;
    type contactsV4Contact_universal_d_SearchContactsOptions = SearchContactsOptions;
    namespace contactsV4Contact_universal_d {
        export { __debug$5 as __debug, contactsV4Contact_universal_d_Contact as Contact, contactsV4Contact_universal_d_ContactSource as ContactSource, ContactSourceType$1 as ContactSourceType, ContactActivity$1 as ContactActivity, ContactActivityType$1 as ContactActivityType, contactsV4Contact_universal_d_PrimaryContactInfo as PrimaryContactInfo, ContactInfo$2 as ContactInfo, ContactName$1 as ContactName, ContactEmailsWrapper$1 as ContactEmailsWrapper, ContactEmail$1 as ContactEmail, EmailTag$1 as EmailTag, ContactPhonesWrapper$1 as ContactPhonesWrapper, ContactPhone$1 as ContactPhone, PhoneTag$1 as PhoneTag, ContactAddressesWrapper$1 as ContactAddressesWrapper, ContactAddress$1 as ContactAddress, AddressTag$1 as AddressTag, Address$1 as Address, AddressStreetOneOf$1 as AddressStreetOneOf, StreetAddress$1 as StreetAddress, AddressLocation$1 as AddressLocation, Subdivision$1 as Subdivision, SubdivisionType$1 as SubdivisionType, AssigneesWrapper$1 as AssigneesWrapper, LabelsWrapper$1 as LabelsWrapper, ExtendedFieldsWrapper$1 as ExtendedFieldsWrapper, LocationsWrapper$1 as LocationsWrapper, ContactPicture$1 as ContactPicture, ImageProvider$1 as ImageProvider, contactsV4Contact_universal_d_SegmentsWrapper as SegmentsWrapper, contactsV4Contact_universal_d_EstimateFilterSizeRequest as EstimateFilterSizeRequest, contactsV4Contact_universal_d_EstimateFilterSizeResponse as EstimateFilterSizeResponse, contactsV4Contact_universal_d_EstimateAudienceSizeRequest as EstimateAudienceSizeRequest, contactsV4Contact_universal_d_EstimateAudienceSizeResponse as EstimateAudienceSizeResponse, contactsV4Contact_universal_d_ContactSubmitted as ContactSubmitted, contactsV4Contact_universal_d_ContactChanged as ContactChanged, contactsV4Contact_universal_d_CreateContactRequest as CreateContactRequest, contactsV4Contact_universal_d_CreateContactResponse as CreateContactResponse, contactsV4Contact_universal_d_DuplicateContactExists as DuplicateContactExists, contactsV4Contact_universal_d_UpdateContactRequest as UpdateContactRequest, contactsV4Contact_universal_d_UpdateContactResponse as UpdateContactResponse, contactsV4Contact_universal_d_MergeContactsRequest as MergeContactsRequest, contactsV4Contact_universal_d_MergeContactsResponse as MergeContactsResponse, contactsV4Contact_universal_d_ContactMerged as ContactMerged, contactsV4Contact_universal_d_PreviewMergeContactsRequest as PreviewMergeContactsRequest, contactsV4Contact_universal_d_PreviewMergeContactsResponse as PreviewMergeContactsResponse, contactsV4Contact_universal_d_DeleteContactRequest as DeleteContactRequest, contactsV4Contact_universal_d_DeleteContactResponse as DeleteContactResponse, contactsV4Contact_universal_d_LabelContactRequest as LabelContactRequest, contactsV4Contact_universal_d_LabelContactResponse as LabelContactResponse, contactsV4Contact_universal_d_UnlabelContactRequest as UnlabelContactRequest, contactsV4Contact_universal_d_UnlabelContactResponse as UnlabelContactResponse, contactsV4Contact_universal_d_LabelAndUnlabelContactRequest as LabelAndUnlabelContactRequest, contactsV4Contact_universal_d_LabelAndUnlabelContactResponse as LabelAndUnlabelContactResponse, contactsV4Contact_universal_d_ListContactsRequest as ListContactsRequest, Sorting$3 as Sorting, SortOrder$3 as SortOrder, Paging$3 as Paging, contactsV4Contact_universal_d_ContactFieldSet as ContactFieldSet, contactsV4Contact_universal_d_ListContactsResponse as ListContactsResponse, PagingMetadata$2 as PagingMetadata, contactsV4Contact_universal_d_QueryContactsRequest as QueryContactsRequest, Query$2 as Query, contactsV4Contact_universal_d_QueryContactsResponse as QueryContactsResponse, contactsV4Contact_universal_d_ListFacetsRequest as ListFacetsRequest, contactsV4Contact_universal_d_ListFacetsResponse as ListFacetsResponse, contactsV4Contact_universal_d_ContactsFacet as ContactsFacet, contactsV4Contact_universal_d_ContactsFacetType as ContactsFacetType, contactsV4Contact_universal_d_QueryFacetsRequest as QueryFacetsRequest, contactsV4Contact_universal_d_QueryFacetsResponse as QueryFacetsResponse, contactsV4Contact_universal_d_BulkDeleteContactsRequest as BulkDeleteContactsRequest, contactsV4Contact_universal_d_BulkDeleteContactsResponse as BulkDeleteContactsResponse, contactsV4Contact_universal_d_BulkUpdateContactsRequest as BulkUpdateContactsRequest, contactsV4Contact_universal_d_BulkUpdateContactsResponse as BulkUpdateContactsResponse, contactsV4Contact_universal_d_BulkLabelAndUnlabelContactsRequest as BulkLabelAndUnlabelContactsRequest, contactsV4Contact_universal_d_BulkLabelAndUnlabelContactsResponse as BulkLabelAndUnlabelContactsResponse, contactsV4Contact_universal_d_BulkUpsertContactsRequest as BulkUpsertContactsRequest, contactsV4Contact_universal_d_BulkUpsertContactsResponse as BulkUpsertContactsResponse, contactsV4Contact_universal_d_Action as Action, contactsV4Contact_universal_d_Error as Error, contactsV4Contact_universal_d_Metadata as Metadata, contactsV4Contact_universal_d_Item as Item, contactsV4Contact_universal_d_BulkUpsertContactsResponseMetadata as BulkUpsertContactsResponseMetadata, contactsV4Contact_universal_d_UpsertContactRequest as UpsertContactRequest, contactsV4Contact_universal_d_UpsertContactResponse as UpsertContactResponse, contactsV4Contact_universal_d_UpsertContactResponseAction as UpsertContactResponseAction, contactsV4Contact_universal_d_GeneratePictureUploadUrlRequest as GeneratePictureUploadUrlRequest, contactsV4Contact_universal_d_GeneratePictureUploadUrlResponse as GeneratePictureUploadUrlResponse, contactsV4Contact_universal_d_GetContactRequest as GetContactRequest, contactsV4Contact_universal_d_GetContactResponse as GetContactResponse, contactsV4Contact_universal_d_GetContactResponseType as GetContactResponseType, contactsV4Contact_universal_d_SyncSubmitContactRequest as SyncSubmitContactRequest, SubmitOperation$1 as SubmitOperation, contactsV4Contact_universal_d_SyncSubmitContactResponse as SyncSubmitContactResponse, contactsV4Contact_universal_d_CountContactsRequest as CountContactsRequest, contactsV4Contact_universal_d_CountContactsResponse as CountContactsResponse, contactsV4Contact_universal_d_SearchContactsRequest as SearchContactsRequest, contactsV4Contact_universal_d_Search as Search, contactsV4Contact_universal_d_SearchPagingMethodOneOf as SearchPagingMethodOneOf, contactsV4Contact_universal_d_SearchDetails as SearchDetails, contactsV4Contact_universal_d_Mode as Mode, CursorPaging$1 as CursorPaging, contactsV4Contact_universal_d_SearchContactsResponse as SearchContactsResponse, PagingMetadataV2$1 as PagingMetadataV2, Cursors$1 as Cursors, contactsV4Contact_universal_d_BulkAddSegmentToContactsRequest as BulkAddSegmentToContactsRequest, contactsV4Contact_universal_d_BulkAddSegmentToContactsResponse as BulkAddSegmentToContactsResponse, contactsV4Contact_universal_d_ItemMetadata as ItemMetadata, contactsV4Contact_universal_d_ApplicationError as ApplicationError, contactsV4Contact_universal_d_BulkActionMetadata as BulkActionMetadata, contactsV4Contact_universal_d_ContactAddedToSegment as ContactAddedToSegment, contactsV4Contact_universal_d_BulkRemoveSegmentFromContactsRequest as BulkRemoveSegmentFromContactsRequest, contactsV4Contact_universal_d_BulkRemoveSegmentFromContactsResponse as BulkRemoveSegmentFromContactsResponse, contactsV4Contact_universal_d_ContactRemovedFromSegment as ContactRemovedFromSegment, contactsV4Contact_universal_d_EstimateFilterSizeOptions as EstimateFilterSizeOptions, contactsV4Contact_universal_d_EstimateAudienceSizeOptions as EstimateAudienceSizeOptions, contactsV4Contact_universal_d_createContact as createContact, contactsV4Contact_universal_d_CreateContactOptions as CreateContactOptions, contactsV4Contact_universal_d_updateContact as updateContact, contactsV4Contact_universal_d_UpdateContactOptions as UpdateContactOptions, contactsV4Contact_universal_d_mergeContacts as mergeContacts, contactsV4Contact_universal_d_MergeContactsOptions as MergeContactsOptions, contactsV4Contact_universal_d_PreviewMergeContactsOptions as PreviewMergeContactsOptions, contactsV4Contact_universal_d_deleteContact as deleteContact, contactsV4Contact_universal_d_labelContact as labelContact, contactsV4Contact_universal_d_LabelContactOptions as LabelContactOptions, contactsV4Contact_universal_d_unlabelContact as unlabelContact, contactsV4Contact_universal_d_UnlabelContactOptions as UnlabelContactOptions, contactsV4Contact_universal_d_LabelAndUnlabelContactOptions as LabelAndUnlabelContactOptions, contactsV4Contact_universal_d_ListContactsOptions as ListContactsOptions, contactsV4Contact_universal_d_queryContacts as queryContacts, contactsV4Contact_universal_d_QueryContactsOptions as QueryContactsOptions, contactsV4Contact_universal_d_ContactsQueryResult as ContactsQueryResult, contactsV4Contact_universal_d_ContactsQueryBuilder as ContactsQueryBuilder, contactsV4Contact_universal_d_ListFacetsOptions as ListFacetsOptions, contactsV4Contact_universal_d_QueryFacetsOptions as QueryFacetsOptions, contactsV4Contact_universal_d_BulkDeleteContactsOptions as BulkDeleteContactsOptions, contactsV4Contact_universal_d_BulkUpdateContactsOptions as BulkUpdateContactsOptions, contactsV4Contact_universal_d_BulkLabelAndUnlabelContactsOptions as BulkLabelAndUnlabelContactsOptions, contactsV4Contact_universal_d_BulkUpsertContactsOptions as BulkUpsertContactsOptions, contactsV4Contact_universal_d_GeneratePictureUploadUrlOptions as GeneratePictureUploadUrlOptions, contactsV4Contact_universal_d_getContact as getContact, contactsV4Contact_universal_d_GetContactOptions as GetContactOptions, contactsV4Contact_universal_d_SearchContactsOptions as SearchContactsOptions, };
    }
    const __debug$4: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    /** Extended field that was found or created. */
    interface ExtendedField {
        /**
         * Extended field namespace.
         *
         * Extended fields created by site contributors or 3rd-party apps
         * are automatically assigned to the `custom` namespace.
         * @readonly
         */
        namespace?: string | null;
        /**
         * Extended field key.
         *
         * When accessing contact data,
         * extended field data is available at `extendedFields[key]`.
         * For example, if the key is "custom.notes",
         * the value can be accessed at `extendedFields["custom.notes"]`.
         *
         * `key` is generated when the extended field is created
         * and cannot be modified, even if `displayName` changes.
         * @readonly
         */
        key?: string;
        /** Display name shown in the Contact List. */
        displayName?: string;
        /**
         * Type of data the field holds.
         *
         * - `TEXT`: Accepts strings.
         * - `NUMBER`: Accepts floats.
         * - `DATE`: Accepts dates formatted as `YYYY-MM-DD`.
         * - `URL`: Accepts strings. Prepends `https://` if no protocol is included.
         * @readonly
         */
        dataType?: FieldDataType;
        /**
         * Indicates whether the extended field is a system field or custom field.
         *
         * - `SYSTEM`: The field is a system field managed by Wix. System fields cannot be modified by 3rd-party apps or site contributors.
         * - `USER_DEFINED`: The field is a custom field and can be modified by 3rd-party apps or site contributors.
         * @readonly
         */
        fieldType?: FieldType;
        /**
         * Date and time the field was created.
         * @readonly
         */
        _createdDate?: Date;
        /**
         * Date and time the field was last updated.
         * @readonly
         */
        _updatedDate?: Date;
        /**
         * Field description, if the field is a system field.
         * @readonly
         */
        description?: string | null;
    }
    enum FieldDataType {
        UNKNOWN_DATA_TYPE = "UNKNOWN_DATA_TYPE",
        TEXT = "TEXT",
        NUMBER = "NUMBER",
        DATE = "DATE",
        URL = "URL"
    }
    enum FieldType {
        UNKNOWN = "UNKNOWN",
        SYSTEM = "SYSTEM",
        USER_DEFINED = "USER_DEFINED"
    }
    /** Extended field filter options. */
    interface ListExtendedFieldsRequest {
        /** Filter for fields of the specified type. */
        fieldType?: FieldType;
        /**
         * Filter for fields in the specified namespace.
         * Fields created by site contributors or 3rd-party apps
         * are automatically assigned to the `custom` namespace.
         */
        namespace?: string | null;
        /** Filter for fields where `displayName` starts with the specified case-sensitive string. */
        startsWith?: string | null;
        /** Sorting options. */
        sort?: Sorting$2;
        /** Paging options. */
        paging?: Paging$2;
    }
    interface Sorting$2 {
        /** Name of the field to sort by. */
        fieldName?: string;
        /**
         * Sort order. Use `ASC` for ascending order or `DESC` for descending order.
         *
         * Defaults to `ASC`.
         */
        order?: SortOrder$2;
    }
    enum SortOrder$2 {
        ASC = "ASC",
        DESC = "DESC"
    }
    interface Paging$2 {
        /**
         * Number of items to return.
         *
         * Defaults to `100`.
         */
        limit?: number | null;
        /**
         * Number of items to skip in the current sort order.
         *
         * Defaults to `0`.
         */
        offset?: number | null;
    }
    /** List of extended fields. */
    interface ListExtendedFieldsResponse {
        /** List of extended fields. */
        fields?: ExtendedField[];
        /** Metadata for the page of results. */
        metadata?: PagingMetadata$1;
    }
    interface PagingMetadata$1 {
        /** Number of items returned. */
        count?: number | null;
        /** Requested offset. */
        offset?: number | null;
        /** Number of items that matched the query. */
        total?: number | null;
        /**
         * Indicates if `total` calculation timed out before the response was sent.
         * Typically this happens if there is a large set of results.
         */
        tooManyToCount?: boolean | null;
    }
    /** Custom field to find or create. */
    interface FindOrCreateExtendedFieldRequest {
        /**
         * Display name to find or create.
         *
         * If an existing custom field is an exact match
         * for the specified `displayName`,
         * the existing field is returned.
         * If not, a new field is created and returned.
         */
        displayName: string;
        /**
         * Type of data the field holds.
         * Ignored if an existing field is an exact match
         * for the specified display name.
         *
         * - `TEXT`: Accepts strings.
         * - `NUMBER`: Accepts floats.
         * - `DATE`: Accepts dates formatted as `YYYY-MM-DD`.
         * - `URL`: Accepts strings. Prepends `https://` if no protocol is included.
         */
        dataType?: FieldDataType;
    }
    /** Extended field that was found or created. */
    interface FindOrCreateExtendedFieldResponse {
        /** Extended field that was found or created. */
        field?: ExtendedField;
        /**
         * Indicates whether the extended field was just created or already existed.
         *
         * If the field was just created, returns `true`.
         * If it already existed, returns `false`.
         */
        newField?: boolean;
    }
    interface GetExtendedFieldRequest {
        /**
         * Extended field key.
         *
         * When accessing contact data,
         * extended field values are available at `info.extendedFields.items[key]`.
         * For example, if the key is "custom.patronus",
         * the value can be accessed at `info.extendedFields.items["custom.patronus"]`.
         *
         * Once set, `key` cannot be modified, even if `displayName` changes.
         */
        key: string;
    }
    /** The specified field. */
    interface GetExtendedFieldResponse {
        /** The specified field. */
        field?: ExtendedField;
    }
    interface GetExtendedFieldByLegacyIdRequest {
        legacyId?: string;
    }
    interface GetExtendedFieldByLegacyIdResponse {
        field?: ExtendedField;
    }
    interface UpdateExtendedFieldRequest {
        /** Field to update. */
        field?: ExtendedField;
    }
    /** Updated extended field. */
    interface UpdateExtendedFieldResponse {
        /** Updated extended field. */
        field?: ExtendedField;
    }
    interface DeleteExtendedFieldRequest {
        /** Extended field key. */
        key: string;
    }
    interface DeleteExtendedFieldResponse {
    }
    interface PurgeRequest$1 {
        instanceId?: string;
    }
    interface PurgeResponse$1 {
        deletedItems?: number;
    }
    interface GdprListRequest$1 {
        instanceId?: string;
    }
    interface GdprListResponse$1 {
        fields?: ExtendedField[];
    }
    interface QueryExtendedFieldsRequest {
        /** Query options. */
        query?: Query$1;
    }
    interface Query$1 {
        /**
         * ilter object.
         *
         * Possible filters: `$eq`, `$gt`, `$gte`, `$in`, `$lt`, `$lte`, `$ne`, `$startsWith`.
         *
         * For a detailed list of supported filters, see [sorting and filtering for extended fields](https://dev.wix.com/api/rest/contacts/extended-fields/sort-and-filter).
         *
         * Example: `{ "filter": {
         * "displayName": {
         * "$startsWith": "Referral"
         * }
         * }
         * }`
         */
        filter?: Record<string, any> | null;
        /**
         * Sorting options. Currently supports sorting on one field only.
         *
         * Example: `{ "sort": [{"fieldName": "displayName", "order": "DESC"}] }`
         */
        sort?: Sorting$2[];
        /** Pagination options. */
        paging?: Paging$2;
    }
    interface QueryExtendedFieldsResponse {
        /** List of extended fields. */
        fields?: ExtendedField[];
        /** Details on the paged set of results returned. */
        pagingMetadata?: PagingMetadata$1;
    }
    interface ListExtendedFieldsOptions {
        /** Filter for fields of the specified type. */
        fieldType?: FieldType;
        /**
         * Filter for fields in the specified namespace.
         * Fields created by site contributors or 3rd-party apps
         * are automatically assigned to the `custom` namespace.
         */
        namespace?: string | null;
        /** Filter for fields where `displayName` starts with the specified case-sensitive string. */
        startsWith?: string | null;
        /** Sorting options. */
        sort?: Sorting$2;
        /** Paging options. */
        paging?: Paging$2;
    }
    /**
     * Retrieves a custom field with a given name, or creates one if it doesn't exist.
     *
     * Successful calls to this endpoint always return a field,
     * which can be passed to subsequent requests.
     *
     * To find an existing custom field without potentially creating a new one, use
     * [Get Extended Field](https:dev.wix.com/api/rest/contacts/extended-fields/get-extended-field) or
     * [List Extended Fields](https:dev.wix.com/api/rest/contacts/extended-fields/list-extended-fields).
     *
     * This function is not a universal function and runs only on the backend.
     * @param displayName - Display name to find or create.
     *
     * If an existing custom field is an exact match
     * for the specified `displayName`,
     * the existing field is returned.
     * If not, a new field is created and returned.
     * @public
     * @documentationMaturity preview
     * @requiredField displayName
     * @returns Extended field that was found or created.
     */
    function findOrCreateExtendedField(displayName: string, options?: FindOrCreateExtendedFieldOptions): Promise<FindOrCreateExtendedFieldResponse>;
    interface FindOrCreateExtendedFieldOptions {
        /**
         * Type of data the field holds.
         * Ignored if an existing field is an exact match
         * for the specified display name.
         *
         * - `TEXT`: Accepts strings.
         * - `NUMBER`: Accepts floats.
         * - `DATE`: Accepts dates formatted as `YYYY-MM-DD`.
         * - `URL`: Accepts strings. Prepends `https://` if no protocol is included.
         */
        dataType?: FieldDataType;
    }
    /**
     * Retrieves an extended field.
     *
     * This function is not a universal function and runs only on the backend.
     * @param key - Extended field key.
     *
     * When accessing contact data,
     * extended field values are available at `info.extendedFields.items[key]`.
     * For example, if the key is "custom.patronus",
     * the value can be accessed at `info.extendedFields.items["custom.patronus"]`.
     *
     * Once set, `key` cannot be modified, even if `displayName` changes.
     * @public
     * @documentationMaturity preview
     * @requiredField key
     * @returns The specified field.
     */
    function getExtendedField(key: string): Promise<ExtendedField>;
    /**
     * Updates an extended field's specified properties.
     *
     * This function is not a universal function and runs only on the backend.
     * @param key - Extended field key.
     *
     * When accessing contact data,
     * extended field data is available at `extendedFields[key]`.
     * For example, if the key is "custom.notes",
     * the value can be accessed at `extendedFields["custom.notes"]`.
     *
     * `key` is generated when the extended field is created
     * and cannot be modified, even if `displayName` changes.
     * @public
     * @documentationMaturity preview
     * @requiredField key
     * @requiredField options.field.displayName
     * @returns Updated extended field.
     */
    function renameExtendedField(key: string, options?: RenameExtendedFieldOptions): Promise<ExtendedField>;
    interface RenameExtendedFieldOptions {
        field: {
            /**
             * Extended field namespace.
             *
             * Extended fields created by site contributors or 3rd-party apps
             * are automatically assigned to the `custom` namespace.
             * @readonly
             */
            namespace?: string | null;
            /** Display name shown in the Contact List. */
            displayName?: string;
            /**
             * Type of data the field holds.
             *
             * - `TEXT`: Accepts strings.
             * - `NUMBER`: Accepts floats.
             * - `DATE`: Accepts dates formatted as `YYYY-MM-DD`.
             * - `URL`: Accepts strings. Prepends `https://` if no protocol is included.
             * @readonly
             */
            dataType?: FieldDataType;
            /**
             * Indicates whether the extended field is a system field or custom field.
             *
             * - `SYSTEM`: The field is a system field managed by Wix. System fields cannot be modified by 3rd-party apps or site contributors.
             * - `USER_DEFINED`: The field is a custom field and can be modified by 3rd-party apps or site contributors.
             * @readonly
             */
            fieldType?: FieldType;
            /**
             * Date and time the field was created.
             * @readonly
             */
            _createdDate?: Date;
            /**
             * Date and time the field was last updated.
             * @readonly
             */
            _updatedDate?: Date;
            /**
             * Field description, if the field is a system field.
             * @readonly
             */
            description?: string | null;
        };
    }
    /**
     * Deletes an extended field.
     *
     * When an extended field is deleted,
     * any contact data stored in the field is permanently deleted as well.
     *
     * This function is not a universal function and runs only on the backend.
     * @param key - Extended field key.
     * @public
     * @documentationMaturity preview
     * @requiredField key
     */
    function deleteExtendedField(key: string): Promise<void>;
    /**
     * Retrieves a list of extended fields.
     *
     * For a detailed list of supported operations, see [sorting and filtering for extended fields](https://dev.wix.com/api/rest/contacts/extended-fields/sort-and-filter). To learn more about query language, see
     * [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language).
     *
     * This function is not a universal function and runs only on the backend.
     * @public
     * @documentationMaturity preview
     */
    function queryExtendedFields(): FieldsQueryBuilder;
    interface QueryOffsetResult$1 {
        currentPage: number;
        totalPages: number;
        totalCount: number;
        hasNext: () => boolean;
        hasPrev: () => boolean;
        length: number;
        pageSize: number;
    }
    interface FieldsQueryResult extends QueryOffsetResult$1 {
        items: ExtendedField[];
        query: FieldsQueryBuilder;
        next: () => Promise<FieldsQueryResult>;
        prev: () => Promise<FieldsQueryResult>;
    }
    interface FieldsQueryBuilder {
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        eq: (propertyName: "namespace" | "key" | "displayName" | "dataType" | "fieldType" | "_createdDate" | "_updatedDate", value: any) => FieldsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        ne: (propertyName: "namespace" | "key" | "displayName" | "dataType" | "_createdDate" | "_updatedDate", value: any) => FieldsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        gt: (propertyName: "_createdDate" | "_updatedDate", value: any) => FieldsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        le: (propertyName: "_createdDate" | "_updatedDate", value: any) => FieldsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        lt: (propertyName: "_createdDate" | "_updatedDate", value: any) => FieldsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `string`.
         * @param string - String to compare against. Case-insensitive.
         * @documentationMaturity preview
         */
        startsWith: (propertyName: "displayName", value: string) => FieldsQueryBuilder;
        /** @documentationMaturity preview */
        in: (propertyName: "key" | "displayName", value: any) => FieldsQueryBuilder;
        /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
         * @documentationMaturity preview
         */
        ascending: (...propertyNames: Array<"displayName" | "_createdDate" | "_updatedDate">) => FieldsQueryBuilder;
        /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
         * @documentationMaturity preview
         */
        descending: (...propertyNames: Array<"displayName" | "_createdDate" | "_updatedDate">) => FieldsQueryBuilder;
        /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
         * @documentationMaturity preview
         */
        limit: (limit: number) => FieldsQueryBuilder;
        /** @param skip - Number of items to skip in the query results before returning the results.
         * @documentationMaturity preview
         */
        skip: (skip: number) => FieldsQueryBuilder;
        /** @documentationMaturity preview */
        find: () => Promise<FieldsQueryResult>;
    }
    type contactsV4ExtendedField_universal_d_ExtendedField = ExtendedField;
    type contactsV4ExtendedField_universal_d_FieldDataType = FieldDataType;
    const contactsV4ExtendedField_universal_d_FieldDataType: typeof FieldDataType;
    type contactsV4ExtendedField_universal_d_FieldType = FieldType;
    const contactsV4ExtendedField_universal_d_FieldType: typeof FieldType;
    type contactsV4ExtendedField_universal_d_ListExtendedFieldsRequest = ListExtendedFieldsRequest;
    type contactsV4ExtendedField_universal_d_ListExtendedFieldsResponse = ListExtendedFieldsResponse;
    type contactsV4ExtendedField_universal_d_FindOrCreateExtendedFieldRequest = FindOrCreateExtendedFieldRequest;
    type contactsV4ExtendedField_universal_d_FindOrCreateExtendedFieldResponse = FindOrCreateExtendedFieldResponse;
    type contactsV4ExtendedField_universal_d_GetExtendedFieldRequest = GetExtendedFieldRequest;
    type contactsV4ExtendedField_universal_d_GetExtendedFieldResponse = GetExtendedFieldResponse;
    type contactsV4ExtendedField_universal_d_GetExtendedFieldByLegacyIdRequest = GetExtendedFieldByLegacyIdRequest;
    type contactsV4ExtendedField_universal_d_GetExtendedFieldByLegacyIdResponse = GetExtendedFieldByLegacyIdResponse;
    type contactsV4ExtendedField_universal_d_UpdateExtendedFieldRequest = UpdateExtendedFieldRequest;
    type contactsV4ExtendedField_universal_d_UpdateExtendedFieldResponse = UpdateExtendedFieldResponse;
    type contactsV4ExtendedField_universal_d_DeleteExtendedFieldRequest = DeleteExtendedFieldRequest;
    type contactsV4ExtendedField_universal_d_DeleteExtendedFieldResponse = DeleteExtendedFieldResponse;
    type contactsV4ExtendedField_universal_d_QueryExtendedFieldsRequest = QueryExtendedFieldsRequest;
    type contactsV4ExtendedField_universal_d_QueryExtendedFieldsResponse = QueryExtendedFieldsResponse;
    type contactsV4ExtendedField_universal_d_ListExtendedFieldsOptions = ListExtendedFieldsOptions;
    const contactsV4ExtendedField_universal_d_findOrCreateExtendedField: typeof findOrCreateExtendedField;
    type contactsV4ExtendedField_universal_d_FindOrCreateExtendedFieldOptions = FindOrCreateExtendedFieldOptions;
    const contactsV4ExtendedField_universal_d_getExtendedField: typeof getExtendedField;
    const contactsV4ExtendedField_universal_d_renameExtendedField: typeof renameExtendedField;
    type contactsV4ExtendedField_universal_d_RenameExtendedFieldOptions = RenameExtendedFieldOptions;
    const contactsV4ExtendedField_universal_d_deleteExtendedField: typeof deleteExtendedField;
    const contactsV4ExtendedField_universal_d_queryExtendedFields: typeof queryExtendedFields;
    type contactsV4ExtendedField_universal_d_FieldsQueryResult = FieldsQueryResult;
    type contactsV4ExtendedField_universal_d_FieldsQueryBuilder = FieldsQueryBuilder;
    namespace contactsV4ExtendedField_universal_d {
        export { __debug$4 as __debug, contactsV4ExtendedField_universal_d_ExtendedField as ExtendedField, contactsV4ExtendedField_universal_d_FieldDataType as FieldDataType, contactsV4ExtendedField_universal_d_FieldType as FieldType, contactsV4ExtendedField_universal_d_ListExtendedFieldsRequest as ListExtendedFieldsRequest, Sorting$2 as Sorting, SortOrder$2 as SortOrder, Paging$2 as Paging, contactsV4ExtendedField_universal_d_ListExtendedFieldsResponse as ListExtendedFieldsResponse, PagingMetadata$1 as PagingMetadata, contactsV4ExtendedField_universal_d_FindOrCreateExtendedFieldRequest as FindOrCreateExtendedFieldRequest, contactsV4ExtendedField_universal_d_FindOrCreateExtendedFieldResponse as FindOrCreateExtendedFieldResponse, contactsV4ExtendedField_universal_d_GetExtendedFieldRequest as GetExtendedFieldRequest, contactsV4ExtendedField_universal_d_GetExtendedFieldResponse as GetExtendedFieldResponse, contactsV4ExtendedField_universal_d_GetExtendedFieldByLegacyIdRequest as GetExtendedFieldByLegacyIdRequest, contactsV4ExtendedField_universal_d_GetExtendedFieldByLegacyIdResponse as GetExtendedFieldByLegacyIdResponse, contactsV4ExtendedField_universal_d_UpdateExtendedFieldRequest as UpdateExtendedFieldRequest, contactsV4ExtendedField_universal_d_UpdateExtendedFieldResponse as UpdateExtendedFieldResponse, contactsV4ExtendedField_universal_d_DeleteExtendedFieldRequest as DeleteExtendedFieldRequest, contactsV4ExtendedField_universal_d_DeleteExtendedFieldResponse as DeleteExtendedFieldResponse, PurgeRequest$1 as PurgeRequest, PurgeResponse$1 as PurgeResponse, GdprListRequest$1 as GdprListRequest, GdprListResponse$1 as GdprListResponse, contactsV4ExtendedField_universal_d_QueryExtendedFieldsRequest as QueryExtendedFieldsRequest, Query$1 as Query, contactsV4ExtendedField_universal_d_QueryExtendedFieldsResponse as QueryExtendedFieldsResponse, contactsV4ExtendedField_universal_d_ListExtendedFieldsOptions as ListExtendedFieldsOptions, contactsV4ExtendedField_universal_d_findOrCreateExtendedField as findOrCreateExtendedField, contactsV4ExtendedField_universal_d_FindOrCreateExtendedFieldOptions as FindOrCreateExtendedFieldOptions, contactsV4ExtendedField_universal_d_getExtendedField as getExtendedField, contactsV4ExtendedField_universal_d_renameExtendedField as renameExtendedField, contactsV4ExtendedField_universal_d_RenameExtendedFieldOptions as RenameExtendedFieldOptions, contactsV4ExtendedField_universal_d_deleteExtendedField as deleteExtendedField, contactsV4ExtendedField_universal_d_queryExtendedFields as queryExtendedFields, contactsV4ExtendedField_universal_d_FieldsQueryResult as FieldsQueryResult, contactsV4ExtendedField_universal_d_FieldsQueryBuilder as FieldsQueryBuilder, };
    }
    const __debug$3: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    /** Label that was found or created. */
    interface ContactLabel {
        /**
         * Label namespace.
         *
         * Labels created by site contributors or 3rd-party apps
         * are automatically assigned to the `custom` namespace.
         * @readonly
         */
        namespace?: string | null;
        /**
         * Display name for the namespace,
         * used to organize the list of labels in the site Dashboard.
         * @readonly
         */
        namespaceDisplayName?: string | null;
        /**
         * Label key.
         *
         * `key` is generated when the label is created
         * and cannot be modified, even if `displayName` changes.
         * @readonly
         */
        key?: string;
        /** Label display name shown in the Dashboard. */
        displayName?: string;
        /**
         * Label type.
         *
         * - `SYSTEM`: The label is a default system label for the Contact List.
         * - `USER_DEFINED`: The label was created by a site contributor or 3rd-party app.
         * - `WIX_APP_DEFINED`: The label was created by a Wix app.
         * @readonly
         */
        labelType?: LabelType;
        /**
         * Date and time the label was created.
         * @readonly
         */
        _createdDate?: Date;
        /**
         * Date and time the label was last updated.
         * @readonly
         */
        _updatedDate?: Date;
    }
    enum LabelType {
        /** Need UNKNOWN to be able to fetch all labels */
        UNKNOWN = "UNKNOWN",
        SYSTEM = "SYSTEM",
        USER_DEFINED = "USER_DEFINED",
        WIX_APP_DEFINED = "WIX_APP_DEFINED"
    }
    /** Label filter options. */
    interface ListLabelsRequest {
        /** Filter for labels of the specified type. */
        labelType?: LabelType;
        /** Filter for labels in the specified namespace. */
        namespace?: string | null;
        /** Filter for labels where `displayName` starts with the specified case-sensitive string. */
        startsWith?: string | null;
        /** Sorting options. */
        sort?: Sorting$1;
        /** Paging options. */
        paging?: Paging$1;
        /** Language for localization. */
        language?: string | null;
    }
    interface Sorting$1 {
        /** Name of the field to sort by. */
        fieldName?: string;
        /**
         * Sort order. Use `ASC` for ascending order or `DESC` for descending order.
         *
         * Defaults to `ASC`.
         */
        order?: SortOrder$1;
    }
    enum SortOrder$1 {
        ASC = "ASC",
        DESC = "DESC"
    }
    interface Paging$1 {
        /**
         * Number of items to return.
         *
         * Defaults to `1000`. <br>
         * Maximum: `2000`.
         */
        limit?: number | null;
        /** Number of items to skip in the current sort order. */
        offset?: number | null;
    }
    /** List of labels. */
    interface ListLabelsResponse {
        /** List of labels. */
        labels?: ContactLabel[];
        /** Metadata for the page of results. */
        metadata?: PagingMetadata;
    }
    interface PagingMetadata {
        /** Number of items returned. */
        count?: number | null;
        /** Requested offset. */
        offset?: number | null;
        /** Number of items that matched the query. */
        total?: number | null;
        /**
         * Indicates if `total` calculation timed out before the response was sent.
         * Typically this happens if there is a large set of results.
         */
        tooManyToCount?: boolean | null;
    }
    /** Label to find or create. */
    interface FindOrCreateLabelRequest {
        /**
         * Display name to retrieve or create.
         *
         * If an existing label is an exact match
         * for the specified display name,
         * the existing label is returned.
         * If not, a new label is created and returned.
         */
        displayName: string;
        /** Language for localization. */
        language?: string | null;
    }
    /** Label that was found or created. */
    interface FindOrCreateLabelResponse {
        /** Label that was found or created. */
        label?: ContactLabel;
        /**
         * Indicates whether the label was just created or already existed.
         *
         * If the label was just created, returns `true`.
         * If it already existed, returns `false`.
         */
        newLabel?: boolean;
    }
    interface LabelsQuotaReached {
        labelsQuota?: string | null;
        labelsCurrentTotal?: string | null;
    }
    interface ListLabelNamespacesRequest {
        /** Language for localization */
        language?: string | null;
    }
    interface ListLabelNamespacesResponse {
        namespaces?: ContactLabelNamespace[];
    }
    interface ContactLabelNamespace {
        /**
         * Namespace key
         * @readonly
         */
        key?: string;
        /**
         * Namespace display name
         * @readonly
         */
        displayName?: string | null;
    }
    interface GetLabelRequest {
        /**
         * Label key.
         *
         * `key` is generated when the label is created
         * and cannot be modified, even if `displayName` changes.
         */
        key: string;
        /** Language for localization. */
        language?: string | null;
    }
    /** The specified label. */
    interface GetLabelResponse {
        /** The specified label. */
        label?: ContactLabel;
    }
    interface GetLabelByLegacyIdRequest {
        legacyId?: string;
        /** Language for localization */
        language?: string | null;
    }
    interface GetLabelByLegacyIdResponse {
        label?: ContactLabel;
    }
    interface UpdateLabelRequest {
        /** Label details to update. */
        label?: ContactLabel;
        /** Language for localization. */
        language?: string | null;
    }
    /** Updated label. */
    interface UpdateLabelResponse {
        /** Updated label. */
        label?: ContactLabel;
    }
    interface DeleteLabelRequest {
        /** Label key to delete. */
        key: string;
    }
    interface DeleteLabelResponse {
    }
    interface PurgeRequest {
        instanceId?: string;
        exludingLabelKeys?: string[];
    }
    interface PurgeResponse {
        deletedItems?: number;
    }
    interface GdprListRequest {
        instanceId?: string;
    }
    interface GdprListResponse {
        labels?: ContactLabel[];
    }
    interface QueryLabelsRequest {
        /** Query options. */
        query?: Query;
        /** Language for localization. */
        language?: string | null;
    }
    interface Query {
        /**
         * ilter object.
         *
         * Possible filters: `$eq`, `$gt`, `$gte`, `$in`, `$lt`, `$lte`, `$ne`, `$startsWith`.
         *
         * For a detailed list of supported filters, see [sorting and filtering for labels](https://dev.wix.com/api/rest/contacts/labels/sort-and-filter).
         *
         * Example: `{ "filter": {
         * "displayName": {
         * "$startsWith": "Referral"
         * }
         * }
         * }`
         */
        filter?: Record<string, any> | null;
        /**
         * Sorting options. For a list of fields that can be sorted, see [sorting and filtering for labels](https://dev.wix.com/api/rest/contacts/labels/sort-and-filter).
         *
         * Example: `{ "sort": [{"fieldName": "displayName", "order": "DESC"}] }`
         */
        sort?: Sorting$1[];
        /** Pagination options. */
        paging?: Paging$1;
    }
    interface QueryLabelsResponse {
        /** List of labels */
        labels?: ContactLabel[];
        /** Details on the paged set of results returned. */
        pagingMetadata?: PagingMetadata;
    }
    interface ListLabelsOptions {
        /** Filter for labels of the specified type. */
        labelType?: LabelType;
        /** Filter for labels in the specified namespace. */
        namespace?: string | null;
        /** Filter for labels where `displayName` starts with the specified case-sensitive string. */
        startsWith?: string | null;
        /** Sorting options. */
        sort?: Sorting$1;
        /** Paging options. */
        paging?: Paging$1;
        /** Language for localization. */
        language?: string | null;
    }
    /**
     * Retrieves a label with a given name, or creates one if it doesn't exist.
     *
     * Successful calls to this endpoint always return a label,
     * which can be passed to subsequent requests.
     *
     * For example, in the Contacts API,
     * [Label Contact](https://dev.wix.com/api/rest/contacts/contacts/contacts-v4/label-contact) and
     * [Unlabel Contact](https://dev.wix.com/api/rest/contacts/contacts/contacts-v4/unlabel-contact)
     * requests will fail if you include a nonexistant label.
     * To ensure successful calls, you can call this endpoint first,
     * and then use the response in the label and unlabel requests.
     *
     * To find an existing label without potentially creating a new one, use
     * [Get Label](https://dev.wix.com/api/rest/contacts/labels/get-label) or
     * [List Labels](https://dev.wix.com/api/rest/contacts/labels/list-labels).
     *
     * This function is not a universal function and runs only on the backend.
     * @param displayName - Display name to retrieve or create.
     *
     * If an existing label is an exact match
     * for the specified display name,
     * the existing label is returned.
     * If not, a new label is created and returned.
     * @public
     * @documentationMaturity preview
     * @requiredField displayName
     * @returns Label that was found or created.
     */
    function findOrCreateLabel(displayName: string, options?: FindOrCreateLabelOptions): Promise<FindOrCreateLabelResponse>;
    interface FindOrCreateLabelOptions {
        /** Language for localization. */
        language?: string | null;
    }
    interface ListLabelNamespacesOptions {
        /** Language for localization */
        language?: string | null;
    }
    interface GetLabelOptions {
        /** Language for localization. */
        language?: string | null;
    }
    /**
     * Updates a label's specified properties.
     *
     * This function is not a universal function and runs only on the backend.
     * @param key - Label key.
     *
     * `key` is generated when the label is created
     * and cannot be modified, even if `displayName` changes.
     * @public
     * @documentationMaturity preview
     * @requiredField key
     * @requiredField options.label.displayName
     * @returns Updated label.
     */
    function renameLabel(key: string, options?: RenameLabelOptions): Promise<ContactLabel>;
    interface RenameLabelOptions {
        label: {
            /**
             * Label namespace.
             *
             * Labels created by site contributors or 3rd-party apps
             * are automatically assigned to the `custom` namespace.
             * @readonly
             */
            namespace?: string | null;
            /**
             * Display name for the namespace,
             * used to organize the list of labels in the site Dashboard.
             * @readonly
             */
            namespaceDisplayName?: string | null;
            /** Label display name shown in the Dashboard. */
            displayName?: string;
            /**
             * Label type.
             *
             * - `SYSTEM`: The label is a default system label for the Contact List.
             * - `USER_DEFINED`: The label was created by a site contributor or 3rd-party app.
             * - `WIX_APP_DEFINED`: The label was created by a Wix app.
             * @readonly
             */
            labelType?: LabelType;
            /**
             * Date and time the label was created.
             * @readonly
             */
            _createdDate?: Date;
            /**
             * Date and time the label was last updated.
             * @readonly
             */
            _updatedDate?: Date;
        };
        /** Language for localization. */
        language?: string | null;
    }
    /**
     * Deletes a label from the site and removes it from contacts it applies to.
     *
     * This function is not a universal function and runs only on the backend.
     * @param key - Label key to delete.
     * @public
     * @documentationMaturity preview
     * @requiredField key
     */
    function deleteLabel(key: string): Promise<void>;
    /**
     * Retrieves a list of contact labels. Up to 1000 labels can be returned per request.
     *
     * For a detailed list of supported operations, see [sorting and filtering for labels](https://dev.wix.com/api/rest/contacts/labels/sort-and-filter). To learn how to query labels, see
     * [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language).
     *
     * This function is not a universal function and runs only on the backend.
     * @public
     * @documentationMaturity preview
     */
    function queryLabels(options?: QueryLabelsOptions): LabelsQueryBuilder;
    interface QueryLabelsOptions {
        /** Language for localization. */
        language?: string | null | undefined;
    }
    interface QueryOffsetResult {
        currentPage: number;
        totalPages: number;
        totalCount: number;
        hasNext: () => boolean;
        hasPrev: () => boolean;
        length: number;
        pageSize: number;
    }
    interface LabelsQueryResult extends QueryOffsetResult {
        items: ContactLabel[];
        query: LabelsQueryBuilder;
        next: () => Promise<LabelsQueryResult>;
        prev: () => Promise<LabelsQueryResult>;
    }
    interface LabelsQueryBuilder {
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        eq: (propertyName: "namespace" | "key" | "displayName" | "labelType" | "_createdDate" | "_updatedDate", value: any) => LabelsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        ne: (propertyName: "namespace" | "key" | "displayName" | "_createdDate" | "_updatedDate", value: any) => LabelsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        gt: (propertyName: "_createdDate" | "_updatedDate", value: any) => LabelsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        le: (propertyName: "_createdDate" | "_updatedDate", value: any) => LabelsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        lt: (propertyName: "_createdDate" | "_updatedDate", value: any) => LabelsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `string`.
         * @param string - String to compare against. Case-insensitive.
         * @documentationMaturity preview
         */
        startsWith: (propertyName: "displayName", value: string) => LabelsQueryBuilder;
        /** @documentationMaturity preview */
        in: (propertyName: "key" | "displayName", value: any) => LabelsQueryBuilder;
        /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
         * @documentationMaturity preview
         */
        ascending: (...propertyNames: Array<"displayName" | "_createdDate" | "_updatedDate">) => LabelsQueryBuilder;
        /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
         * @documentationMaturity preview
         */
        descending: (...propertyNames: Array<"displayName" | "_createdDate" | "_updatedDate">) => LabelsQueryBuilder;
        /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
         * @documentationMaturity preview
         */
        limit: (limit: number) => LabelsQueryBuilder;
        /** @param skip - Number of items to skip in the query results before returning the results.
         * @documentationMaturity preview
         */
        skip: (skip: number) => LabelsQueryBuilder;
        /** @documentationMaturity preview */
        find: () => Promise<LabelsQueryResult>;
    }
    type contactsV4Label_universal_d_ContactLabel = ContactLabel;
    type contactsV4Label_universal_d_LabelType = LabelType;
    const contactsV4Label_universal_d_LabelType: typeof LabelType;
    type contactsV4Label_universal_d_ListLabelsRequest = ListLabelsRequest;
    type contactsV4Label_universal_d_ListLabelsResponse = ListLabelsResponse;
    type contactsV4Label_universal_d_PagingMetadata = PagingMetadata;
    type contactsV4Label_universal_d_FindOrCreateLabelRequest = FindOrCreateLabelRequest;
    type contactsV4Label_universal_d_FindOrCreateLabelResponse = FindOrCreateLabelResponse;
    type contactsV4Label_universal_d_LabelsQuotaReached = LabelsQuotaReached;
    type contactsV4Label_universal_d_ListLabelNamespacesRequest = ListLabelNamespacesRequest;
    type contactsV4Label_universal_d_ListLabelNamespacesResponse = ListLabelNamespacesResponse;
    type contactsV4Label_universal_d_ContactLabelNamespace = ContactLabelNamespace;
    type contactsV4Label_universal_d_GetLabelRequest = GetLabelRequest;
    type contactsV4Label_universal_d_GetLabelResponse = GetLabelResponse;
    type contactsV4Label_universal_d_GetLabelByLegacyIdRequest = GetLabelByLegacyIdRequest;
    type contactsV4Label_universal_d_GetLabelByLegacyIdResponse = GetLabelByLegacyIdResponse;
    type contactsV4Label_universal_d_UpdateLabelRequest = UpdateLabelRequest;
    type contactsV4Label_universal_d_UpdateLabelResponse = UpdateLabelResponse;
    type contactsV4Label_universal_d_DeleteLabelRequest = DeleteLabelRequest;
    type contactsV4Label_universal_d_DeleteLabelResponse = DeleteLabelResponse;
    type contactsV4Label_universal_d_PurgeRequest = PurgeRequest;
    type contactsV4Label_universal_d_PurgeResponse = PurgeResponse;
    type contactsV4Label_universal_d_GdprListRequest = GdprListRequest;
    type contactsV4Label_universal_d_GdprListResponse = GdprListResponse;
    type contactsV4Label_universal_d_QueryLabelsRequest = QueryLabelsRequest;
    type contactsV4Label_universal_d_Query = Query;
    type contactsV4Label_universal_d_QueryLabelsResponse = QueryLabelsResponse;
    type contactsV4Label_universal_d_ListLabelsOptions = ListLabelsOptions;
    const contactsV4Label_universal_d_findOrCreateLabel: typeof findOrCreateLabel;
    type contactsV4Label_universal_d_FindOrCreateLabelOptions = FindOrCreateLabelOptions;
    type contactsV4Label_universal_d_ListLabelNamespacesOptions = ListLabelNamespacesOptions;
    type contactsV4Label_universal_d_GetLabelOptions = GetLabelOptions;
    const contactsV4Label_universal_d_renameLabel: typeof renameLabel;
    type contactsV4Label_universal_d_RenameLabelOptions = RenameLabelOptions;
    const contactsV4Label_universal_d_deleteLabel: typeof deleteLabel;
    const contactsV4Label_universal_d_queryLabels: typeof queryLabels;
    type contactsV4Label_universal_d_QueryLabelsOptions = QueryLabelsOptions;
    type contactsV4Label_universal_d_LabelsQueryResult = LabelsQueryResult;
    type contactsV4Label_universal_d_LabelsQueryBuilder = LabelsQueryBuilder;
    namespace contactsV4Label_universal_d {
        export { __debug$3 as __debug, contactsV4Label_universal_d_ContactLabel as ContactLabel, contactsV4Label_universal_d_LabelType as LabelType, contactsV4Label_universal_d_ListLabelsRequest as ListLabelsRequest, Sorting$1 as Sorting, SortOrder$1 as SortOrder, Paging$1 as Paging, contactsV4Label_universal_d_ListLabelsResponse as ListLabelsResponse, contactsV4Label_universal_d_PagingMetadata as PagingMetadata, contactsV4Label_universal_d_FindOrCreateLabelRequest as FindOrCreateLabelRequest, contactsV4Label_universal_d_FindOrCreateLabelResponse as FindOrCreateLabelResponse, contactsV4Label_universal_d_LabelsQuotaReached as LabelsQuotaReached, contactsV4Label_universal_d_ListLabelNamespacesRequest as ListLabelNamespacesRequest, contactsV4Label_universal_d_ListLabelNamespacesResponse as ListLabelNamespacesResponse, contactsV4Label_universal_d_ContactLabelNamespace as ContactLabelNamespace, contactsV4Label_universal_d_GetLabelRequest as GetLabelRequest, contactsV4Label_universal_d_GetLabelResponse as GetLabelResponse, contactsV4Label_universal_d_GetLabelByLegacyIdRequest as GetLabelByLegacyIdRequest, contactsV4Label_universal_d_GetLabelByLegacyIdResponse as GetLabelByLegacyIdResponse, contactsV4Label_universal_d_UpdateLabelRequest as UpdateLabelRequest, contactsV4Label_universal_d_UpdateLabelResponse as UpdateLabelResponse, contactsV4Label_universal_d_DeleteLabelRequest as DeleteLabelRequest, contactsV4Label_universal_d_DeleteLabelResponse as DeleteLabelResponse, contactsV4Label_universal_d_PurgeRequest as PurgeRequest, contactsV4Label_universal_d_PurgeResponse as PurgeResponse, contactsV4Label_universal_d_GdprListRequest as GdprListRequest, contactsV4Label_universal_d_GdprListResponse as GdprListResponse, contactsV4Label_universal_d_QueryLabelsRequest as QueryLabelsRequest, contactsV4Label_universal_d_Query as Query, contactsV4Label_universal_d_QueryLabelsResponse as QueryLabelsResponse, contactsV4Label_universal_d_ListLabelsOptions as ListLabelsOptions, contactsV4Label_universal_d_findOrCreateLabel as findOrCreateLabel, contactsV4Label_universal_d_FindOrCreateLabelOptions as FindOrCreateLabelOptions, contactsV4Label_universal_d_ListLabelNamespacesOptions as ListLabelNamespacesOptions, contactsV4Label_universal_d_GetLabelOptions as GetLabelOptions, contactsV4Label_universal_d_renameLabel as renameLabel, contactsV4Label_universal_d_RenameLabelOptions as RenameLabelOptions, contactsV4Label_universal_d_deleteLabel as deleteLabel, contactsV4Label_universal_d_queryLabels as queryLabels, contactsV4Label_universal_d_QueryLabelsOptions as QueryLabelsOptions, contactsV4Label_universal_d_LabelsQueryResult as LabelsQueryResult, contactsV4Label_universal_d_LabelsQueryBuilder as LabelsQueryBuilder, };
    }
    const __debug$2: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    /** Dummy message for fqdn validation */
    interface SubmitContact {
        /** Submit Contact Id */
        _id?: string | null;
    }
    interface SubmitContactRequest {
        /**
         * Contact's information.
         * To reconcile with an existing contact,
         * a phone or email must be provided,
         * or the current session identity must be attached to a contact or member.
         *
         * If no existing contact can be found,
         * a new contact is created with the specified information.
         *
         * <!--ONLY:REST-->
         * Required if there's no contextual identity or given `contactId`.
         * <!--END:ONLY:REST-->
         */
        info?: ContactInfo$1;
        /** Pass through data, to be posted on Contact Submitted Domain Event (optional). */
        passThroughData?: string | null;
        /**
         * Existing Contact ID (optional).
         * Requires permission `CONTACTS.SUBMIT_WITH_OVERRIDES`
         */
        contactId?: string | null;
    }
    interface ContactInfo$1 {
        /** Contact's first and last name. */
        name?: ContactName;
        /** Contact's email addresses. */
        emails?: ContactEmailsWrapper;
        /** Contact's phone numbers. */
        phones?: ContactPhonesWrapper;
        /** Contact's street addresses. */
        addresses?: ContactAddressesWrapper;
        /** Contact's company name. */
        company?: string | null;
        /**
         * Contact's job title.
         * Corresponds to the **Position** field in the Dashboard.
         */
        jobTitle?: string | null;
        /** Birth date in `YYYY-MM-DD` format. For example, `2020-03-15`. */
        birthdate?: string | null;
        /**
         * Locale in
         * [IETF BCP 47 language tag](https://en.wikipedia.org/wiki/IETF_language_tag) format.
         * Typically, this is a lowercase 2-letter language code,
         * followed by a hyphen, followed by an uppercase 2-letter country code.
         * For example, `en-US` for U.S. English, and `de-DE` for Germany German.
         */
        locale?: string | null;
        /**
         * List of contact's labels.
         * Labels are used to organize contacts.
         * When setting the `labelKeys` property,
         * only labels that already exist in the site's Contacts List can be used.
         * Labels can be added and removed using
         * [Label Contact](https://dev.wix.com/api/rest/contacts/contacts/contacts-v4/label-contact) and
         * [Unlabel Contact](https://dev.wix.com/api/rest/contacts/contacts/contacts-v4/unlabel-contact),
         * respectively.
         *
         * To view or manage site labels, use the
         * [Labels API](https://dev.wix.com/api/rest/contacts/labels).
         */
        labelKeys?: LabelsWrapper;
        /**
         * Additional custom fields.
         * This includes fields managed by Wix, by 3rd-party apps, and by the site.
         *
         * Empty fields are not returned.
         */
        extendedFields?: ExtendedFieldsWrapper;
        /** Contact's profile picture. */
        picture?: ContactPicture;
    }
    interface ContactName {
        /** Contact's first name. */
        first?: string | null;
        /** Contact's last name. */
        last?: string | null;
    }
    interface ContactEmailsWrapper {
        /** List of up to 50 email addresses. */
        items?: ContactEmail[];
    }
    interface ContactEmail {
        /**
         * Email ID.
         * @readonly
         */
        _id?: string | null;
        /**
         * Email type.
         *
         * `UNTAGGED` is shown as "Other" in the Contact List.
         */
        tag?: EmailTag;
        /** Email address. */
        email?: string;
        /**
         * Indicates whether this is the contact's primary email address.
         * When changing `primary` to `true` for an email,
         * the contact's other emails become `false`.
         */
        primary?: boolean | null;
    }
    enum EmailTag {
        UNTAGGED = "UNTAGGED",
        MAIN = "MAIN",
        HOME = "HOME",
        WORK = "WORK"
    }
    interface ContactPhonesWrapper {
        /** List of up to 50 phone numbers. */
        items?: ContactPhone[];
    }
    interface ContactPhone {
        /**
         * Phone ID.
         * @readonly
         */
        _id?: string | null;
        /**
         * Phone type.
         *
         * `UNTAGGED` is shown as "Other" in the Contact List.
         */
        tag?: PhoneTag;
        /** [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code. */
        countryCode?: string | null;
        /** Phone number. */
        phone?: string;
        /**
         * [ITU E.164-formatted](https://www.itu.int/rec/T-REC-E.164/)
         * phone number.
         * Automatically generated using `phone` and `countryCode`,
         * as long as both of those values are valid.
         * @readonly
         */
        e164Phone?: string | null;
        /**
         * Whether this is the contact's primary phone number.
         * When changing `primary` to `true` for a phone,
         * the contact's other phones become `false`.
         */
        primary?: boolean | null;
    }
    enum PhoneTag {
        UNTAGGED = "UNTAGGED",
        MAIN = "MAIN",
        HOME = "HOME",
        MOBILE = "MOBILE",
        WORK = "WORK",
        FAX = "FAX"
    }
    interface ContactAddressesWrapper {
        /** List of up to 50 addresses. */
        items?: ContactAddress[];
    }
    interface ContactAddress {
        /**
         * Street address ID.
         * @readonly
         */
        _id?: string | null;
        /**
         * Address type.
         * `UNTAGGED` is shown as "Other" in the Contact List.
         */
        tag?: AddressTag;
        /** Street address. */
        address?: Address;
    }
    enum AddressTag {
        UNTAGGED = "UNTAGGED",
        HOME = "HOME",
        WORK = "WORK",
        BILLING = "BILLING",
        SHIPPING = "SHIPPING"
    }
    /** Physical address */
    interface Address extends AddressStreetOneOf {
        /** Street address object, with number and name in separate fields. */
        streetAddress?: StreetAddress;
        /** Main address line, usually street and number, as free text. */
        addressLine1?: string | null;
        /**
         * 2-letter country code in an
         * [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
         */
        country?: string | null;
        /**
         * Code for a subdivision (such as state, prefecture, or province) in an
         * [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) format.
         */
        subdivision?: string | null;
        /** City name. */
        city?: string | null;
        /** Postal or zip code. */
        postalCode?: string | null;
        /**
         * Free text providing more detailed address information,
         * such as apartment, suite, or floor.
         */
        addressLine2?: string | null;
    }
    /** @oneof */
    interface AddressStreetOneOf {
        /** Street address object, with number and name in separate fields. */
        streetAddress?: StreetAddress;
        /** Main address line, usually street and number, as free text. */
        addressLine?: string | null;
    }
    interface StreetAddress {
        /** Street number. */
        number?: string;
        /** Street name. */
        name?: string;
    }
    interface AddressLocation {
        /** Address's latitude. */
        latitude?: number | null;
        /** Address's longitude. */
        longitude?: number | null;
    }
    interface Subdivision {
        /** subdivision short code */
        code?: string;
        /** Full subdivision name. */
        name?: string;
    }
    enum SubdivisionType {
        UNKNOWN_SUBDIVISION_TYPE = "UNKNOWN_SUBDIVISION_TYPE",
        /** state */
        ADMINISTRATIVE_AREA_LEVEL_1 = "ADMINISTRATIVE_AREA_LEVEL_1",
        /** county */
        ADMINISTRATIVE_AREA_LEVEL_2 = "ADMINISTRATIVE_AREA_LEVEL_2",
        /** cities/towns */
        ADMINISTRATIVE_AREA_LEVEL_3 = "ADMINISTRATIVE_AREA_LEVEL_3",
        /** neighborhood/quarter */
        ADMINISTRATIVE_AREA_LEVEL_4 = "ADMINISTRATIVE_AREA_LEVEL_4",
        /** street/block */
        ADMINISTRATIVE_AREA_LEVEL_5 = "ADMINISTRATIVE_AREA_LEVEL_5",
        /** (ADMINISTRATIVE_AREA_LEVEL_0) indicates the national political entity, and is typically the highest order type returned by the Geocoder. */
        COUNTRY = "COUNTRY"
    }
    interface AssigneesWrapper {
        /** List of site contributor user IDs. */
        items?: string[];
    }
    interface LabelsWrapper {
        /**
         * List of contact label keys.
         * [Contact labels](https://support.wix.com/en/article/adding-labels-to-contacts-in-your-contact-list)
         * help categorize contacts.
         *
         * Label keys must exist to be added to the contact.
         * Contact labels can be created or retrieved with
         * [Find or Create Label](https://dev.wix.com/api/rest/contacts/labels/find-or-create-label)
         * or
         * [List Labels](https://dev.wix.com/api/rest/contacts/labels/list-labels)
         */
        items?: string[];
    }
    interface ExtendedFieldsWrapper {
        /**
         * Contact's extended fields,
         * where each key is the field key,
         * and each value is the field's value for the contact.
         *
         * To view and manage extended fields, use the
         * [Extended Fields API](https://dev.wix.com/api/rest/contacts/extended-fields).
         */
        items?: Record<string, any>;
    }
    interface LocationsWrapper {
        /** List of location ids. */
        items?: string[];
    }
    /** TEST contact picture description */
    interface ContactPicture {
        /**
         * Image.
         * This can contain an image URL or a Wix Media image ID.
         */
        image?: string;
    }
    enum ImageProvider {
        UNKNOWN = "UNKNOWN",
        /** Image stored outside Wix */
        EXTERNAL = "EXTERNAL",
        /** Stored in wix media platform, Must be uploaded by using `GeneratePictureUploadUrl` */
        WIX_MEDIA = "WIX_MEDIA"
    }
    interface ContactActivity {
        /** Date and time of the last action. */
        activityDate?: Date;
        /**
         * Contact's last action in the site.
         *
         * For descriptions of each value, see
         * [Last Activity Types](https://dev.wix.com/api/rest/contacts/contacts/last-activity-types).
         */
        activityType?: ContactActivityType;
    }
    enum ContactActivityType {
        /** Last visit to your site (any unknown activity) */
        GENERAL = "GENERAL",
        /** This cannot be reported, used when contact created, will throw exception */
        CONTACT_CREATED = "CONTACT_CREATED",
        /** "auth/login" */
        MEMBER_LOGIN = "MEMBER_LOGIN",
        /** "auth/register" */
        MEMBER_REGISTER = "MEMBER_REGISTER",
        /** "auth/status-change" */
        MEMBER_STATUS_CHANGED = "MEMBER_STATUS_CHANGED",
        /** "contact/contact-form", (but also "form/contact-form", "form/form") */
        FORM_SUBMITTED = "FORM_SUBMITTED",
        /** "form/lead-capture-form" */
        INBOX_FORM_SUBMITTED = "INBOX_FORM_SUBMITTED",
        /** "chat/payment-request-paid" */
        INBOX_PAYMENT_REQUEST_PAID = "INBOX_PAYMENT_REQUEST_PAID",
        /** "messaging/email" - Direction BUSINESS_TO_CUSTOMER */
        INBOX_MESSAGE_TO_CUSTOMER = "INBOX_MESSAGE_TO_CUSTOMER",
        /** "messaging/email" - Direction CUSTOMER_TO_BUSINESS */
        INBOX_MESSAGE_FROM_CUSTOMER = "INBOX_MESSAGE_FROM_CUSTOMER",
        /** "contact/subscription-form" (but also "form/subscription-form") */
        NEWSLETTER_SUBSCRIPTION_FORM_SUBMITTED = "NEWSLETTER_SUBSCRIPTION_FORM_SUBMITTED",
        /** "contact/unsubscribe" */
        NEWSLETTER_SUBSCRIPTION_UNSUBSCRIBE = "NEWSLETTER_SUBSCRIPTION_UNSUBSCRIBE",
        /** "e_commerce/purchase" */
        ECOM_PURCHASE = "ECOM_PURCHASE",
        /** "e_commerce/cart-abandon" */
        ECOM_CART_ABANDON = "ECOM_CART_ABANDON",
        /** "e_commerce/checkout-buyer" */
        ECOM_CHECKOUT_BUYER = "ECOM_CHECKOUT_BUYER",
        /** "scheduler/appointment" */
        BOOKINGS_APPOINTMENT = "BOOKINGS_APPOINTMENT",
        /** "hotels/reservation" */
        HOTELS_RESERVATION = "HOTELS_RESERVATION",
        /** "hotels/purchase" */
        HOTELS_PURCHASE = "HOTELS_PURCHASE",
        /** "hotels/confirmation" */
        HOTELS_CONFIRMATION = "HOTELS_CONFIRMATION",
        /** "hotels/cancel" */
        HOTELS_CANCEL = "HOTELS_CANCEL",
        /** "video/purchase" */
        VIDEO_PURCHASE = "VIDEO_PURCHASE",
        /** "video/rent" */
        VIDEO_RENT = "VIDEO_RENT",
        /** "cashier/button_purchase" */
        CASHIER_BUTTON_PURCHASE = "CASHIER_BUTTON_PURCHASE",
        /** "arena/new-lead" */
        ARENA_NEW_LEAD = "ARENA_NEW_LEAD",
        /** "events/rsvp" */
        EVENTS_RSVP = "EVENTS_RSVP",
        /** "invoice/pay" */
        INVOICE_PAY = "INVOICE_PAY",
        /** "invoice/overdue" */
        INVOICE_OVERDUE = "INVOICE_OVERDUE",
        /** "price-quote/accept" */
        PRICE_QUOTE_ACCEPT = "PRICE_QUOTE_ACCEPT",
        /** "price-quote/expire" */
        PRICE_QUOTE_EXPIRE = "PRICE_QUOTE_EXPIRE",
        /** "restaurants/order" */
        RESTAURANTS_ORDER = "RESTAURANTS_ORDER",
        /** "restaurants/reservation" */
        RESTAURANTS_RESERVATION = "RESTAURANTS_RESERVATION",
        /** "shoutout/open" */
        SHOUTOUT_OPEN = "SHOUTOUT_OPEN",
        /** "shoutout/click" */
        SHOUTOUT_CLICK = "SHOUTOUT_CLICK",
        CONTACT_MERGED = "CONTACT_MERGED"
    }
    interface SubmitContactOptions {
        /**
         * Overrides `visitorId`
         * Requires permission `CONTACTS.SUBMIT_WITH_OVERRIDES`
         */
        overrideVisitorId?: string | null;
        /**
         * Overrides `memberId`
         * Requires permission `CONTACTS.SUBMIT_WITH_OVERRIDES`
         */
        overrideMemberId?: string | null;
        /**
         * Overrides `app_id`
         * Requires permission `CONTACTS.SUBMIT_WITH_OVERRIDES`
         */
        overrideAppId?: string | null;
        /**
         * Indicates primary email is verified (first email on contact.emails)
         * Requires permission `CONTACTS.SUBMIT_WITH_OVERRIDES`
         */
        emailVerified?: boolean | null;
        /**
         * Indicates primary phone is verified (first phone on contact.phones)
         * Requires permission `CONTACTS.SUBMIT_WITH_OVERRIDES`
         */
        phoneVerified?: boolean | null;
    }
    interface SubmitContactResponse {
        /** ID of the contact that was found or created. */
        contactId?: string;
        /**
         * Identity type of the returned contact.
         *
         * - `CONTACT`: The returned contact ID belongs to a new or existing contact.
         * - `MEMBER`: The returned contact ID belongs to the currently logged-in site member.
         * - `NOT_AUTHENTICATED_MEMBER`: The returned contact ID belongs to a site member who is not currently logged in.
         */
        identityType?: IdentityType;
        /**
         * Indicates whether the contact was just created or already existed.
         *
         * If the contact was just created, returns `true`.
         * If it already existed, returns `false`.
         */
        newContact?: boolean;
    }
    enum IdentityType {
        UNKNOWN = "UNKNOWN",
        /** Existing or new contact */
        CONTACT = "CONTACT",
        /** Member is logged in, matching logic skipped */
        MEMBER = "MEMBER",
        /** Matching contact is a member, Merge logic won't be applied */
        NOT_AUTHENTICATED_MEMBER = "NOT_AUTHENTICATED_MEMBER"
    }
    interface ContactToSubmit {
        /**
         * reserved  6;
         * reserved  "raw_source";
         */
        contactInfo?: ContactInfo$1;
        /** Last activity */
        activity?: ContactActivity;
        /** Pass through data */
        passThroughData?: string | null;
        /** Contact Id */
        contactId?: string;
        /** Create/Update */
        submitOperation?: SubmitOperation;
        /** Raw source */
        rawSource?: string | null;
        /** Need to resolve source in allocator, because of server sign */
        sourceType?: ContactSourceType;
        /** Source Id */
        sourceId?: string | null;
        /** Hide from contact list (implicit contact) */
        hideFromContactList?: boolean;
    }
    enum SubmitOperation {
        UNKNOWN = "UNKNOWN",
        CREATE = "CREATE",
        UPDATE = "UPDATE"
    }
    enum ContactSourceType {
        OTHER = "OTHER",
        ADMIN = "ADMIN",
        WIX_APP = "WIX_APP",
        IMPORT = "IMPORT",
        THIRD_PARTY = "THIRD_PARTY",
        WIX_BOOKINGS = "WIX_BOOKINGS",
        WIX_CHAT = "WIX_CHAT",
        WIX_EMAIL_MARKETING = "WIX_EMAIL_MARKETING",
        WIX_EVENTS = "WIX_EVENTS",
        WIX_FORMS = "WIX_FORMS",
        WIX_GROUPS = "WIX_GROUPS",
        WIX_HOTELS = "WIX_HOTELS",
        WIX_MARKET_PLACE = "WIX_MARKET_PLACE",
        WIX_MUSIC = "WIX_MUSIC",
        WIX_RESTAURANTS = "WIX_RESTAURANTS",
        WIX_SITE_MEMBERS = "WIX_SITE_MEMBERS",
        WIX_STORES = "WIX_STORES",
        WIX_CODE = "WIX_CODE"
    }
    interface SubmitVisitorIdRequest {
        /** Existing Contact ID */
        contactId: string;
        /** The visitor ID to be attached to the given `contactId` */
        visitorId: string;
    }
    interface SubmitVisitorIdResponse {
        /** The mapped Contact ID */
        contactId?: string;
        /** The mapped visitor ID */
        visitorId?: string;
        /** Date in the `visitorId` was attached to the given `contactId` */
        validFrom?: Date;
    }
    /**
     * Appends an existing contact or creates a contact if it doesn't exist.
     *
     * For internal docs, see
     * [Submit Contacts](crm.contact-submit-service.introduction).
     * @public
     * @documentationMaturity preview
     */
    function appendOrCreateContact(options?: AppendOrCreateContactOptions): Promise<SubmitContactResponse>;
    interface AppendOrCreateContactOptions {
        /**
         * Contact's information.
         * To reconcile with an existing contact,
         * a phone or email must be provided,
         * or the current session identity must be attached to a contact or member.
         *
         * If no existing contact can be found,
         * a new contact is created with the specified information.
         *
         * <!--ONLY:REST-->
         * Required if there's no contextual identity or given `contactId`.
         * <!--END:ONLY:REST-->
         */
        info?: ContactInfo$1;
        /** Pass through data, to be posted on Contact Submitted Domain Event (optional). */
        passThroughData?: string | null;
        /**
         * Existing Contact ID (optional).
         * Requires permission `CONTACTS.SUBMIT_WITH_OVERRIDES`
         */
        contactId?: string | null;
    }
    type contactsV4SubmitContact_universal_d_SubmitContact = SubmitContact;
    type contactsV4SubmitContact_universal_d_SubmitContactRequest = SubmitContactRequest;
    type contactsV4SubmitContact_universal_d_ContactName = ContactName;
    type contactsV4SubmitContact_universal_d_ContactEmailsWrapper = ContactEmailsWrapper;
    type contactsV4SubmitContact_universal_d_ContactEmail = ContactEmail;
    type contactsV4SubmitContact_universal_d_EmailTag = EmailTag;
    const contactsV4SubmitContact_universal_d_EmailTag: typeof EmailTag;
    type contactsV4SubmitContact_universal_d_ContactPhonesWrapper = ContactPhonesWrapper;
    type contactsV4SubmitContact_universal_d_ContactPhone = ContactPhone;
    type contactsV4SubmitContact_universal_d_PhoneTag = PhoneTag;
    const contactsV4SubmitContact_universal_d_PhoneTag: typeof PhoneTag;
    type contactsV4SubmitContact_universal_d_ContactAddressesWrapper = ContactAddressesWrapper;
    type contactsV4SubmitContact_universal_d_ContactAddress = ContactAddress;
    type contactsV4SubmitContact_universal_d_AddressTag = AddressTag;
    const contactsV4SubmitContact_universal_d_AddressTag: typeof AddressTag;
    type contactsV4SubmitContact_universal_d_Address = Address;
    type contactsV4SubmitContact_universal_d_AddressStreetOneOf = AddressStreetOneOf;
    type contactsV4SubmitContact_universal_d_StreetAddress = StreetAddress;
    type contactsV4SubmitContact_universal_d_AddressLocation = AddressLocation;
    type contactsV4SubmitContact_universal_d_Subdivision = Subdivision;
    type contactsV4SubmitContact_universal_d_SubdivisionType = SubdivisionType;
    const contactsV4SubmitContact_universal_d_SubdivisionType: typeof SubdivisionType;
    type contactsV4SubmitContact_universal_d_AssigneesWrapper = AssigneesWrapper;
    type contactsV4SubmitContact_universal_d_LabelsWrapper = LabelsWrapper;
    type contactsV4SubmitContact_universal_d_ExtendedFieldsWrapper = ExtendedFieldsWrapper;
    type contactsV4SubmitContact_universal_d_LocationsWrapper = LocationsWrapper;
    type contactsV4SubmitContact_universal_d_ContactPicture = ContactPicture;
    type contactsV4SubmitContact_universal_d_ImageProvider = ImageProvider;
    const contactsV4SubmitContact_universal_d_ImageProvider: typeof ImageProvider;
    type contactsV4SubmitContact_universal_d_ContactActivity = ContactActivity;
    type contactsV4SubmitContact_universal_d_ContactActivityType = ContactActivityType;
    const contactsV4SubmitContact_universal_d_ContactActivityType: typeof ContactActivityType;
    type contactsV4SubmitContact_universal_d_SubmitContactOptions = SubmitContactOptions;
    type contactsV4SubmitContact_universal_d_SubmitContactResponse = SubmitContactResponse;
    type contactsV4SubmitContact_universal_d_IdentityType = IdentityType;
    const contactsV4SubmitContact_universal_d_IdentityType: typeof IdentityType;
    type contactsV4SubmitContact_universal_d_ContactToSubmit = ContactToSubmit;
    type contactsV4SubmitContact_universal_d_SubmitOperation = SubmitOperation;
    const contactsV4SubmitContact_universal_d_SubmitOperation: typeof SubmitOperation;
    type contactsV4SubmitContact_universal_d_ContactSourceType = ContactSourceType;
    const contactsV4SubmitContact_universal_d_ContactSourceType: typeof ContactSourceType;
    type contactsV4SubmitContact_universal_d_SubmitVisitorIdRequest = SubmitVisitorIdRequest;
    type contactsV4SubmitContact_universal_d_SubmitVisitorIdResponse = SubmitVisitorIdResponse;
    const contactsV4SubmitContact_universal_d_appendOrCreateContact: typeof appendOrCreateContact;
    type contactsV4SubmitContact_universal_d_AppendOrCreateContactOptions = AppendOrCreateContactOptions;
    namespace contactsV4SubmitContact_universal_d {
        export { __debug$2 as __debug, contactsV4SubmitContact_universal_d_SubmitContact as SubmitContact, contactsV4SubmitContact_universal_d_SubmitContactRequest as SubmitContactRequest, ContactInfo$1 as ContactInfo, contactsV4SubmitContact_universal_d_ContactName as ContactName, contactsV4SubmitContact_universal_d_ContactEmailsWrapper as ContactEmailsWrapper, contactsV4SubmitContact_universal_d_ContactEmail as ContactEmail, contactsV4SubmitContact_universal_d_EmailTag as EmailTag, contactsV4SubmitContact_universal_d_ContactPhonesWrapper as ContactPhonesWrapper, contactsV4SubmitContact_universal_d_ContactPhone as ContactPhone, contactsV4SubmitContact_universal_d_PhoneTag as PhoneTag, contactsV4SubmitContact_universal_d_ContactAddressesWrapper as ContactAddressesWrapper, contactsV4SubmitContact_universal_d_ContactAddress as ContactAddress, contactsV4SubmitContact_universal_d_AddressTag as AddressTag, contactsV4SubmitContact_universal_d_Address as Address, contactsV4SubmitContact_universal_d_AddressStreetOneOf as AddressStreetOneOf, contactsV4SubmitContact_universal_d_StreetAddress as StreetAddress, contactsV4SubmitContact_universal_d_AddressLocation as AddressLocation, contactsV4SubmitContact_universal_d_Subdivision as Subdivision, contactsV4SubmitContact_universal_d_SubdivisionType as SubdivisionType, contactsV4SubmitContact_universal_d_AssigneesWrapper as AssigneesWrapper, contactsV4SubmitContact_universal_d_LabelsWrapper as LabelsWrapper, contactsV4SubmitContact_universal_d_ExtendedFieldsWrapper as ExtendedFieldsWrapper, contactsV4SubmitContact_universal_d_LocationsWrapper as LocationsWrapper, contactsV4SubmitContact_universal_d_ContactPicture as ContactPicture, contactsV4SubmitContact_universal_d_ImageProvider as ImageProvider, contactsV4SubmitContact_universal_d_ContactActivity as ContactActivity, contactsV4SubmitContact_universal_d_ContactActivityType as ContactActivityType, contactsV4SubmitContact_universal_d_SubmitContactOptions as SubmitContactOptions, contactsV4SubmitContact_universal_d_SubmitContactResponse as SubmitContactResponse, contactsV4SubmitContact_universal_d_IdentityType as IdentityType, contactsV4SubmitContact_universal_d_ContactToSubmit as ContactToSubmit, contactsV4SubmitContact_universal_d_SubmitOperation as SubmitOperation, contactsV4SubmitContact_universal_d_ContactSourceType as ContactSourceType, contactsV4SubmitContact_universal_d_SubmitVisitorIdRequest as SubmitVisitorIdRequest, contactsV4SubmitContact_universal_d_SubmitVisitorIdResponse as SubmitVisitorIdResponse, contactsV4SubmitContact_universal_d_appendOrCreateContact as appendOrCreateContact, contactsV4SubmitContact_universal_d_AppendOrCreateContactOptions as AppendOrCreateContactOptions, };
    }
    const __debug$1: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface Task {
        /**
         * Task ID
         * @readonly
         */
        _id?: string | null;
        /**
         * Represents the current state of an item. For an update operation, pass the latest revision.
         * @readonly
         */
        revision?: string | null;
        /** The task title */
        title?: string | null;
        /** Description of the task. */
        description?: string | null;
        /**
         * Represents the time this task was created.
         * @readonly
         */
        _createdDate?: Date;
        /**
         * Represents the time this task was last updated.
         * @readonly
         */
        _updatedDate?: Date;
        /** Due Date for the task. */
        dueDate?: Date;
        /** The status of the task. */
        status?: TaskStatus;
        /** Details about the task source. */
        source?: TaskSource;
        /** Id of a user assigned to this task. */
        assigneeId?: string | null;
        /** Details of a contact assigned to this task. */
        contact?: ContactInfo;
    }
    /** Possible statuses in which the task may be. */
    enum TaskStatus {
        UNKNOWN_STATUS = "UNKNOWN_STATUS",
        ACTION_NEEDED = "ACTION_NEEDED",
        COMPLETED = "COMPLETED"
    }
    interface TaskSource {
        /**
         * Type of task creator
         * @readonly
         */
        sourceType?: SourceType;
        /**
         * App ID, if the task was created by an app.
         * @readonly
         */
        appId?: string | null;
        /**
         * User ID, if the task was created by some user.
         * @readonly
         */
        userId?: string | null;
    }
    /** Possible sources how can create task. */
    enum SourceType {
        UNKNOWN_SOURCE_TYPE = "UNKNOWN_SOURCE_TYPE",
        APP = "APP",
        USER = "USER"
    }
    interface ContactInfo {
        /** Id of a Contact this task is assigned to. */
        _id?: string | null;
        /**
         * Contact first name.
         * @readonly
         */
        firstName?: string | null;
        /**
         * Contact last name.
         * @readonly
         */
        lastName?: string | null;
        /**
         * Contact image url
         * @readonly
         */
        imageUrl?: string | null;
    }
    interface RepositionTask {
        /** The id of the last task that was re-positioned */
        taskId?: string | null;
        /** The position of the last task that was re-positioned */
        position?: string | null;
    }
    interface TaskWasOverdue {
        /** The overdue task */
        task?: Task;
    }
    interface CreateTaskRequest {
        /** Task to be created */
        task: Task;
    }
    interface CreateTaskResponse {
        /** The created Task */
        task?: Task;
    }
    interface GetTaskRequest {
        /** Id of the Task to retrieve */
        taskId: string;
    }
    interface GetTaskResponse {
        /** The retrieved Task */
        task?: Task;
    }
    interface UpdateTaskRequest {
        /** Task to be updated, may be partial */
        task: Task;
    }
    interface UpdateTaskResponse {
        /** The updated Task */
        task?: Task;
    }
    interface DeleteTaskRequest {
        /** Id of the Task to delete */
        taskId: string;
    }
    interface DeleteTaskResponse {
    }
    interface QueryTasksRequest {
        /** WQL expression */
        query: QueryV2;
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
    interface QueryTasksResponse {
        /** The retrieved Tasks */
        tasks?: Task[];
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
    }
    interface Cursors {
        /** Cursor pointing to next page in the list of results. */
        next?: string | null;
        /** Cursor pointing to previous page in the list of results. */
        prev?: string | null;
    }
    interface MoveTaskAfterRequest {
        /** The Task id to move */
        taskId: string;
        /**
         * The Task Id to be after
         * If not provided, the task will be positions first
         */
        beforeTaskId?: string | null;
    }
    interface MoveTaskAfterResponse {
    }
    interface TaskNotFoundError {
        /** The task id that was not found */
        taskId?: string;
    }
    interface Empty {
    }
    /**
     * Creates a new Task
     * If dueDate parameter is provided, it must be a future date.
     * @param task - Task to be created
     * @public
     * @documentationMaturity preview
     * @requiredField task
     * @returns The created Task
     */
    function createTask(task: Task): Promise<Task>;
    /**
     * Get a Task.
     * @param taskId - Id of the Task to retrieve
     * @public
     * @documentationMaturity preview
     * @requiredField taskId
     * @returns The retrieved Task
     */
    function getTask(taskId: string): Promise<Task>;
    /**
     * Update a Task, supports partial update
     * If dueDate parameter is provided, it must be a future date.
     * Each time the segment is updated,
     * `revision` increments by 1.
     * The existing `revision` must be included when updating the segment.
     * This ensures you're working with the latest segment
     * and prevents unintended overwrites.
     * @param _id - Task ID
     * @public
     * @documentationMaturity preview
     * @requiredField _id
     * @requiredField task
     * @requiredField task.revision
     * @returns The updated Task
     */
    function updateTask(_id: string | null, task: UpdateTask, options?: UpdateTaskOptions): Promise<Task>;
    interface UpdateTask {
        /**
         * Task ID
         * @readonly
         */
        _id?: string | null;
        /**
         * Represents the current state of an item. For an update operation, pass the latest revision.
         * @readonly
         */
        revision?: string | null;
        /** The task title */
        title?: string | null;
        /** Description of the task. */
        description?: string | null;
        /**
         * Represents the time this task was created.
         * @readonly
         */
        _createdDate?: Date;
        /**
         * Represents the time this task was last updated.
         * @readonly
         */
        _updatedDate?: Date;
        /** Due Date for the task. */
        dueDate?: Date;
        /** The status of the task. */
        status?: TaskStatus;
        /** Details about the task source. */
        source?: TaskSource;
        /** Id of a user assigned to this task. */
        assigneeId?: string | null;
        /** Details of a contact assigned to this task. */
        contact?: ContactInfo;
    }
    interface UpdateTaskOptions {
    }
    /**
     * Deletes a Task
     * @param taskId - Id of the Task to delete
     * @public
     * @documentationMaturity preview
     * @requiredField taskId
     */
    function deleteTask(taskId: string): Promise<void>;
    /**
     * Query Tasks using [WQL - Wix Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language)
     * @public
     * @documentationMaturity preview
     */
    function queryTasks(): TasksQueryBuilder;
    interface QueryCursorResult {
        cursors: Cursors;
        hasNext: () => boolean;
        hasPrev: () => boolean;
        length: number;
        pageSize: number;
    }
    interface TasksQueryResult extends QueryCursorResult {
        items: Task[];
        query: TasksQueryBuilder;
        next: () => Promise<TasksQueryResult>;
        prev: () => Promise<TasksQueryResult>;
    }
    interface TasksQueryBuilder {
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        eq: (propertyName: "_id" | "_createdDate" | "_updatedDate" | "status" | "contact.id", value: any) => TasksQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        ne: (propertyName: "_id" | "_createdDate" | "_updatedDate" | "status" | "contact.id", value: any) => TasksQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        gt: (propertyName: "_createdDate" | "_updatedDate", value: any) => TasksQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        lt: (propertyName: "_createdDate" | "_updatedDate", value: any) => TasksQueryBuilder;
        /** @param propertyName - Property whose value is compared with `string`.
         * @param string - String to compare against. Case-insensitive.
         * @documentationMaturity preview
         */
        startsWith: (propertyName: "_id" | "contact.id", value: string) => TasksQueryBuilder;
        /** @param propertyName - Property whose value is compared with `values`.
         * @param values - List of values to compare against.
         * @documentationMaturity preview
         */
        hasSome: (propertyName: "_id" | "_createdDate" | "_updatedDate" | "status" | "contact.id", value: any[]) => TasksQueryBuilder;
        /** @documentationMaturity preview */
        in: (propertyName: "_id" | "_createdDate" | "_updatedDate" | "status" | "contact.id", value: any) => TasksQueryBuilder;
        /** @documentationMaturity preview */
        exists: (propertyName: "_id" | "_createdDate" | "_updatedDate" | "status" | "contact.id", value: boolean) => TasksQueryBuilder;
        /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
         * @documentationMaturity preview
         */
        ascending: (...propertyNames: Array<"_id" | "_createdDate" | "_updatedDate">) => TasksQueryBuilder;
        /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
         * @documentationMaturity preview
         */
        descending: (...propertyNames: Array<"_id" | "_createdDate" | "_updatedDate">) => TasksQueryBuilder;
        /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
         * @documentationMaturity preview
         */
        limit: (limit: number) => TasksQueryBuilder;
        /** @param cursor - A pointer to specific record
         * @documentationMaturity preview
         */
        skipTo: (cursor: string) => TasksQueryBuilder;
        /** @documentationMaturity preview */
        find: () => Promise<TasksQueryResult>;
    }
    /**
     * Move a Task to be after another Task.
     * If beforeTaskId is not provided, the task will be positioned first.
     * @param taskId - The Task id to move
     * @public
     * @documentationMaturity preview
     * @requiredField taskId
     */
    function moveTaskAfter(taskId: string, options?: MoveTaskAfterOptions): Promise<void>;
    interface MoveTaskAfterOptions {
        /**
         * The Task Id to be after
         * If not provided, the task will be positions first
         */
        beforeTaskId?: string | null;
    }
    type crmTasksV2Task_universal_d_Task = Task;
    type crmTasksV2Task_universal_d_TaskStatus = TaskStatus;
    const crmTasksV2Task_universal_d_TaskStatus: typeof TaskStatus;
    type crmTasksV2Task_universal_d_TaskSource = TaskSource;
    type crmTasksV2Task_universal_d_SourceType = SourceType;
    const crmTasksV2Task_universal_d_SourceType: typeof SourceType;
    type crmTasksV2Task_universal_d_ContactInfo = ContactInfo;
    type crmTasksV2Task_universal_d_RepositionTask = RepositionTask;
    type crmTasksV2Task_universal_d_TaskWasOverdue = TaskWasOverdue;
    type crmTasksV2Task_universal_d_CreateTaskRequest = CreateTaskRequest;
    type crmTasksV2Task_universal_d_CreateTaskResponse = CreateTaskResponse;
    type crmTasksV2Task_universal_d_GetTaskRequest = GetTaskRequest;
    type crmTasksV2Task_universal_d_GetTaskResponse = GetTaskResponse;
    type crmTasksV2Task_universal_d_UpdateTaskRequest = UpdateTaskRequest;
    type crmTasksV2Task_universal_d_UpdateTaskResponse = UpdateTaskResponse;
    type crmTasksV2Task_universal_d_DeleteTaskRequest = DeleteTaskRequest;
    type crmTasksV2Task_universal_d_DeleteTaskResponse = DeleteTaskResponse;
    type crmTasksV2Task_universal_d_QueryTasksRequest = QueryTasksRequest;
    type crmTasksV2Task_universal_d_QueryV2 = QueryV2;
    type crmTasksV2Task_universal_d_QueryV2PagingMethodOneOf = QueryV2PagingMethodOneOf;
    type crmTasksV2Task_universal_d_Sorting = Sorting;
    type crmTasksV2Task_universal_d_SortOrder = SortOrder;
    const crmTasksV2Task_universal_d_SortOrder: typeof SortOrder;
    type crmTasksV2Task_universal_d_Paging = Paging;
    type crmTasksV2Task_universal_d_CursorPaging = CursorPaging;
    type crmTasksV2Task_universal_d_QueryTasksResponse = QueryTasksResponse;
    type crmTasksV2Task_universal_d_PagingMetadataV2 = PagingMetadataV2;
    type crmTasksV2Task_universal_d_Cursors = Cursors;
    type crmTasksV2Task_universal_d_MoveTaskAfterRequest = MoveTaskAfterRequest;
    type crmTasksV2Task_universal_d_MoveTaskAfterResponse = MoveTaskAfterResponse;
    type crmTasksV2Task_universal_d_TaskNotFoundError = TaskNotFoundError;
    type crmTasksV2Task_universal_d_Empty = Empty;
    const crmTasksV2Task_universal_d_createTask: typeof createTask;
    const crmTasksV2Task_universal_d_getTask: typeof getTask;
    const crmTasksV2Task_universal_d_updateTask: typeof updateTask;
    type crmTasksV2Task_universal_d_UpdateTask = UpdateTask;
    type crmTasksV2Task_universal_d_UpdateTaskOptions = UpdateTaskOptions;
    const crmTasksV2Task_universal_d_deleteTask: typeof deleteTask;
    const crmTasksV2Task_universal_d_queryTasks: typeof queryTasks;
    type crmTasksV2Task_universal_d_TasksQueryResult = TasksQueryResult;
    type crmTasksV2Task_universal_d_TasksQueryBuilder = TasksQueryBuilder;
    const crmTasksV2Task_universal_d_moveTaskAfter: typeof moveTaskAfter;
    type crmTasksV2Task_universal_d_MoveTaskAfterOptions = MoveTaskAfterOptions;
    namespace crmTasksV2Task_universal_d {
        export { __debug$1 as __debug, crmTasksV2Task_universal_d_Task as Task, crmTasksV2Task_universal_d_TaskStatus as TaskStatus, crmTasksV2Task_universal_d_TaskSource as TaskSource, crmTasksV2Task_universal_d_SourceType as SourceType, crmTasksV2Task_universal_d_ContactInfo as ContactInfo, crmTasksV2Task_universal_d_RepositionTask as RepositionTask, crmTasksV2Task_universal_d_TaskWasOverdue as TaskWasOverdue, crmTasksV2Task_universal_d_CreateTaskRequest as CreateTaskRequest, crmTasksV2Task_universal_d_CreateTaskResponse as CreateTaskResponse, crmTasksV2Task_universal_d_GetTaskRequest as GetTaskRequest, crmTasksV2Task_universal_d_GetTaskResponse as GetTaskResponse, crmTasksV2Task_universal_d_UpdateTaskRequest as UpdateTaskRequest, crmTasksV2Task_universal_d_UpdateTaskResponse as UpdateTaskResponse, crmTasksV2Task_universal_d_DeleteTaskRequest as DeleteTaskRequest, crmTasksV2Task_universal_d_DeleteTaskResponse as DeleteTaskResponse, crmTasksV2Task_universal_d_QueryTasksRequest as QueryTasksRequest, crmTasksV2Task_universal_d_QueryV2 as QueryV2, crmTasksV2Task_universal_d_QueryV2PagingMethodOneOf as QueryV2PagingMethodOneOf, crmTasksV2Task_universal_d_Sorting as Sorting, crmTasksV2Task_universal_d_SortOrder as SortOrder, crmTasksV2Task_universal_d_Paging as Paging, crmTasksV2Task_universal_d_CursorPaging as CursorPaging, crmTasksV2Task_universal_d_QueryTasksResponse as QueryTasksResponse, crmTasksV2Task_universal_d_PagingMetadataV2 as PagingMetadataV2, crmTasksV2Task_universal_d_Cursors as Cursors, crmTasksV2Task_universal_d_MoveTaskAfterRequest as MoveTaskAfterRequest, crmTasksV2Task_universal_d_MoveTaskAfterResponse as MoveTaskAfterResponse, crmTasksV2Task_universal_d_TaskNotFoundError as TaskNotFoundError, crmTasksV2Task_universal_d_Empty as Empty, crmTasksV2Task_universal_d_createTask as createTask, crmTasksV2Task_universal_d_getTask as getTask, crmTasksV2Task_universal_d_updateTask as updateTask, crmTasksV2Task_universal_d_UpdateTask as UpdateTask, crmTasksV2Task_universal_d_UpdateTaskOptions as UpdateTaskOptions, crmTasksV2Task_universal_d_deleteTask as deleteTask, crmTasksV2Task_universal_d_queryTasks as queryTasks, crmTasksV2Task_universal_d_TasksQueryResult as TasksQueryResult, crmTasksV2Task_universal_d_TasksQueryBuilder as TasksQueryBuilder, crmTasksV2Task_universal_d_moveTaskAfter as moveTaskAfter, crmTasksV2Task_universal_d_MoveTaskAfterOptions as MoveTaskAfterOptions, };
    }
    const __debug: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
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
    }
    /** @oneof */
    interface DynamicValueOfTypeOneOf {
        /** Text to be integrated into the notification. */
        text?: string;
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
    interface NotifyByAppResponse {
        /** notification_batch_id */
        notificationBatchId?: string;
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
     */
    function notify(notificationTemplateId: string, options?: NotifyOptions): Promise<NotifyResponse>;
    interface NotifyOptions {
        /**
         * Each key is a placeholder name you specify when [creating a notification template](https://dev.wix.com/api/rest/wix-notifications/notifications/creating-a-notification-template).
         * The value is an object containing the text to replace the placeholder in the notifications.
         */
        dynamicValues?: Record<string, DynamicValue>;
    }
    interface NotifyByAppOptions {
        /** app_def_id */
        appDefId: string;
        /** dynamic_values */
        dynamicValues?: Record<string, DynamicValue>;
        /** template tenant */
        templateTenant?: string | null;
        /** overrides */
        overrides?: Overrides;
    }
    const pingNotificationsV3Notification_universal_d___debug: typeof __debug;
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
    type pingNotificationsV3Notification_universal_d_NotifyByAppResponse = NotifyByAppResponse;
    const pingNotificationsV3Notification_universal_d_notify: typeof notify;
    type pingNotificationsV3Notification_universal_d_NotifyOptions = NotifyOptions;
    type pingNotificationsV3Notification_universal_d_NotifyByAppOptions = NotifyByAppOptions;
    namespace pingNotificationsV3Notification_universal_d {
        export { pingNotificationsV3Notification_universal_d___debug as __debug, pingNotificationsV3Notification_universal_d_Notification as Notification, pingNotificationsV3Notification_universal_d_NotifyRequest as NotifyRequest, pingNotificationsV3Notification_universal_d_DynamicValue as DynamicValue, pingNotificationsV3Notification_universal_d_DynamicValueOfTypeOneOf as DynamicValueOfTypeOneOf, pingNotificationsV3Notification_universal_d_Money as Money, pingNotificationsV3Notification_universal_d_MapDynamicValue as MapDynamicValue, pingNotificationsV3Notification_universal_d_ArrayDynamicValue as ArrayDynamicValue, pingNotificationsV3Notification_universal_d_AttachmentDynamicValue as AttachmentDynamicValue, pingNotificationsV3Notification_universal_d_NotifyResponse as NotifyResponse, pingNotificationsV3Notification_universal_d_NotifyByAppRequest as NotifyByAppRequest, pingNotificationsV3Notification_universal_d_Overrides as Overrides, pingNotificationsV3Notification_universal_d_TemplateChannel as TemplateChannel, pingNotificationsV3Notification_universal_d_ExcludedAudiences as ExcludedAudiences, pingNotificationsV3Notification_universal_d_ChannelsContent as ChannelsContent, pingNotificationsV3Notification_universal_d_MobileContent as MobileContent, pingNotificationsV3Notification_universal_d_NotifyByAppResponse as NotifyByAppResponse, pingNotificationsV3Notification_universal_d_notify as notify, pingNotificationsV3Notification_universal_d_NotifyOptions as NotifyOptions, pingNotificationsV3Notification_universal_d_NotifyByAppOptions as NotifyByAppOptions, };
    }
    export { workflowsV1Card_universal_d as cards, contactsV4Contact_universal_d as contacts, contactsV4ExtendedField_universal_d as extendedFields, contactsV4Label_universal_d as labels, pingNotificationsV3Notification_universal_d as notifications, workflowsV1Phase_universal_d as phases, contactsV4SubmitContact_universal_d as submittedContact, crmTasksV2Task_universal_d as tasks, workflowsV1Workflow_universal_d as workflows };
}
