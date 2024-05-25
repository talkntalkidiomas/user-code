declare module "wix-workflows.v2" {
    const __debug$2: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
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
        /** ID of the contact attached to the card. */
        contactId?: string;
    }
    /** describes the supported types of attachments (currently only supports Contact which is the default type) */
    enum AttachmentType$2 {
        ContactType = "ContactType"
    }
    interface QueryCardsRequest {
        /** Query, sort, and paging options. */
        query?: Query$2;
    }
    interface Query$2 {
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
        sort?: Sorting$2[];
        /** Paging options to limit and skip the number of items. */
        paging?: Paging$2;
        /** Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned. */
        fields?: string[];
        /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned. */
        fieldsets?: string[];
    }
    interface Sorting$2 {
        /** Name of the field to sort by. */
        fieldName?: string;
        /** Sort order. */
        order?: SortOrder$2;
    }
    enum SortOrder$2 {
        ASC = "ASC",
        DESC = "DESC"
    }
    interface Paging$2 {
        /** Number of items to load. */
        limit?: number | null;
        /** Number of items to skip in the current sort order. */
        offset?: number | null;
    }
    interface QueryCardsResponse {
        /** List of cards that matched the query criteria. */
        cards?: Card$2[];
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
        cards?: Card$2[];
        /** Metadata for the page of results. */
        pagination?: PaginationResponse$2;
    }
    interface GetCardRequest {
        /** ID of the card to retrieve. */
        _id: string;
    }
    interface GetCardResponse {
        /** Requested card. */
        card?: Card$2;
    }
    interface UpdateCardRequest {
        /** ID of the card to update. */
        _id: string;
        /** Card details. */
        cardInfo?: CardInfo$2;
    }
    interface UpdateCardResponse {
    }
    interface CreateCardRequest {
        /** ID of the workflow to create the card in. */
        workflowId: string;
        /** ID of the phase to create the card in. */
        phaseId: string;
        /** Card details. */
        card?: CardInfo$2;
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
        query?: Query$2;
    }
    /**
     * Retrieves a list of a workflow's cards.
     *
     *
     * The `listCards()` function returns a Promise that resolves to a list of the specified workflow's cards.
     *
     *
     * Use the `options` parameter to specify which cards to retrieve and in which order to retrieve them. Must use either `phaseId` or `fetchOnlyArchived`.
     *
     *
     * Cards can be sorted based on their `"id"`, `"name"`, `"phaseId"`, `"createdDate"`, `"updatedDate"`, `"source"`, and `"position"`.
     *
     *
     * If no `limit` parameter is passed, the first 50 cards are returned.
     *
     *
     * Sort order defaults to by `"phaseId"` and then by `"position"` ascending.
     *
     *
     * This function requires you to specify the ID of a workflow. To learn about retrieving IDs in the Workflows APIs, see [Retrieving IDs](wix-workflows-v2/introduction#retrieving-ids).
     *
     * This function is not a universal function and runs only on the backend.
     * @param workflowId - ID of the workflow whose cards will be listed.
     * @public
     * @requiredField workflowId
     * @param options - Options to use when retrieving the list of cards.
     * @adminMethod
     */
    function listCards(workflowId: string, options?: ListCardsOptions): Promise<ListCardsResponse>;
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
    /**
     * Retrieves a workflow card by ID.
     *
     *
     * The `getCard()` function returns a Promise that resolves to the card with the specified ID.
     *
     *
     * This function requires you to specify the ID of a card. To learn about retrieving IDs in the Workflows APIs, see [Retrieving IDs](wix-workflows-v2/introduction#retrieving-ids).
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - ID of the card to retrieve.
     * @public
     * @requiredField _id
     * @adminMethod
     */
    function getCard(_id: string): Promise<GetCardResponse>;
    /**
     * Updates an existing workflow card.
     *
     *
     * The `updateCard()` function returns a Promise that resolves when the card has been updated with the specified values.
     *
     *
     * `contactId` is not a required field, but if the parameter is not passed, the field will default to empty and the card will not be associated with any contact.
     *
     *
     * This function requires you to specify the ID of a card. To learn about retrieving IDs in the Workflows APIs, see [Retrieving IDs](wix-workflows-v2/introduction#retrieving-ids).
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - ID of the card to update.
     * @param cardInfo - Card details.
     * @public
     * @requiredField _id
     * @requiredField cardInfo
     * @param options - Options to use when updating a card.
     * @adminMethod
     */
    function updateCard(_id: string, cardInfo: CardInfo$2, options?: UpdateCardOptions): Promise<void>;
    interface UpdateCardOptions {
    }
    /**
     * Creates a new workflow card.
     *
     *
     * The `createCard()` function returns a Promise that resolves to the created card's ID when the card is created in the specified workflow phase.
     *
     * Pass a value for the `position` parameter to specify the newly created card's position within the specified phase. Positions are zero-based, meaning the first position is `0`.
     *
     * When omitted, the newly created card is added to the specified phase as the top card within the phase.
     *
     *
     * This function requires you to specify the ID of a workflow and phase. To learn about retrieving IDs in the Workflows APIs, see [Retrieving IDs](wix-workflows-v2/introduction#retrieving-ids).
     *
     *  > **Note:**
     *  > Each workflow is limited to 5,000 cards.
     *  > If this limit is reached, `createCard()` throws an error.
     *  > [Archive cards](#archivecard) when they're no longer needed
     *  > to reduce card count and avoid hitting the limit.
     *
     * This function is not a universal function and runs only on the backend.
     * @param card - Card details.
     * @public
     * @requiredField card
     * @requiredField identifiers
     * @requiredField identifiers.phaseId
     * @requiredField identifiers.workflowId
     * @param options - Options to use when creating a card.
     * @adminMethod
     */
    function createCard(identifiers: CreateCardIdentifiers, card: CardInfo$2, options?: CreateCardOptions): Promise<CreateCardResponse>;
    interface CreateCardIdentifiers {
        /** ID of the workflow to create the card in. */
        workflowId: string;
        /** ID of the phase to create the card in. */
        phaseId: string;
    }
    interface CreateCardOptions {
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
    /**
     * Deletes a workflow card by ID.
     *
     *
     * The `deleteCard()` function returns a Promise when the specified card has been deleted.
     *
     * This function requires you to specify the ID of a card. To learn about retrieving IDs in the Workflows APIs, see [Retrieving IDs](wix-workflows-v2/introduction#retrieving-ids).
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - ID of the card to delete.
     * @public
     * @requiredField _id
     * @adminMethod
     */
    function deleteCard(_id: string): Promise<void>;
    /**
     * Moves a card to a new position within a workflow.
     *
     *
     * The `moveCard()` function returns a Promise when the specified card has been moved to the new position.
     *
     * Use the `options` parameter to specify the phase and position within that phase to move the card to. Positions are zero-based, meaning the first position is `0`.
     *
     * This function requires you to specify the ID of a card. To learn about retrieving IDs in the Workflows APIs, see [Retrieving IDs](wix-workflows-v2/introduction#retrieving-ids).
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - ID of the card to move.
     * @public
     * @requiredField _id
     * @param options - Information about where to move the card.
     * @adminMethod
     */
    function moveCard(_id: string, options?: MoveCardOptions): Promise<void>;
    interface MoveCardOptions {
        /** ID of the phase to move the card to. */
        newPhaseId?: string | null;
        /** Position of the card in the phase, where the first card is `0`. */
        newPosition?: number | null;
    }
    /**
     * Restores an archived workflow card.
     *
     *
     * The `restoreCard()` function returns a Promise that resolves when the archived card has been restored.
     *
     *
     * This function requires you to specify the ID of a card. To learn about retrieving IDs in the Workflows APIs, see [Retrieving IDs](wix-workflows-v2/introduction#retrieving-ids).
     *
     *
     * > **Note:**
     * > Each workflow is limited to 5,000 cards.
     * > If this limit is reached, `createCard()` throws an error.
     * > [Archive cards](#archivecard) when they're no longer needed
     * > to reduce card count and avoid hitting the limit.
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - ID of the card to restore.
     * @param newPhaseId - ID of the phase to restore the card to.
     * @public
     * @requiredField _id
     * @requiredField newPhaseId
     * @param options - Options to use when restoring a card.
     * @adminMethod
     */
    function restoreCard(_id: string, newPhaseId: string, options?: RestoreCardOptions): Promise<void>;
    interface RestoreCardOptions {
        /**
         * Position of the restored card in the phase,
         * where the first card is `0`.
         */
        newPosition?: number | null;
    }
    /**
     * Archives a workflow card.
     *
     *
     * The `archiveCard()` function returns a Promise that resolves when the card has been archived.
     *
     *
     * This function requires you to specify the ID of a card. To learn about retrieving IDs in the Workflows APIs, see [Retrieving IDs](wix-workflows-v2/introduction#retrieving-ids).
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - ID of the card to archive.
     * @public
     * @requiredField _id
     * @adminMethod
     */
    function archiveCard(_id: string): Promise<void>;
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
    const workflowsV1Card_universal_d_listCards: typeof listCards;
    type workflowsV1Card_universal_d_ListCardsOptions = ListCardsOptions;
    const workflowsV1Card_universal_d_getCard: typeof getCard;
    const workflowsV1Card_universal_d_updateCard: typeof updateCard;
    type workflowsV1Card_universal_d_UpdateCardOptions = UpdateCardOptions;
    const workflowsV1Card_universal_d_createCard: typeof createCard;
    type workflowsV1Card_universal_d_CreateCardIdentifiers = CreateCardIdentifiers;
    type workflowsV1Card_universal_d_CreateCardOptions = CreateCardOptions;
    const workflowsV1Card_universal_d_deleteCard: typeof deleteCard;
    const workflowsV1Card_universal_d_moveCard: typeof moveCard;
    type workflowsV1Card_universal_d_MoveCardOptions = MoveCardOptions;
    const workflowsV1Card_universal_d_restoreCard: typeof restoreCard;
    type workflowsV1Card_universal_d_RestoreCardOptions = RestoreCardOptions;
    const workflowsV1Card_universal_d_archiveCard: typeof archiveCard;
    namespace workflowsV1Card_universal_d {
        export { __debug$2 as __debug, Card$2 as Card, CardInfo$2 as CardInfo, Attachment$2 as Attachment, AttachmentType$2 as AttachmentType, workflowsV1Card_universal_d_QueryCardsRequest as QueryCardsRequest, Query$2 as Query, Sorting$2 as Sorting, SortOrder$2 as SortOrder, Paging$2 as Paging, workflowsV1Card_universal_d_QueryCardsResponse as QueryCardsResponse, PaginationResponse$2 as PaginationResponse, workflowsV1Card_universal_d_ListCardsRequest as ListCardsRequest, workflowsV1Card_universal_d_ListCardsResponse as ListCardsResponse, workflowsV1Card_universal_d_GetCardRequest as GetCardRequest, workflowsV1Card_universal_d_GetCardResponse as GetCardResponse, workflowsV1Card_universal_d_UpdateCardRequest as UpdateCardRequest, workflowsV1Card_universal_d_UpdateCardResponse as UpdateCardResponse, workflowsV1Card_universal_d_CreateCardRequest as CreateCardRequest, workflowsV1Card_universal_d_CreateCardResponse as CreateCardResponse, workflowsV1Card_universal_d_DeleteCardRequest as DeleteCardRequest, workflowsV1Card_universal_d_DeleteCardResponse as DeleteCardResponse, workflowsV1Card_universal_d_MoveCardRequest as MoveCardRequest, workflowsV1Card_universal_d_MoveCardResponse as MoveCardResponse, workflowsV1Card_universal_d_RestoreCardRequest as RestoreCardRequest, workflowsV1Card_universal_d_RestoreCardResponse as RestoreCardResponse, workflowsV1Card_universal_d_ArchiveCardRequest as ArchiveCardRequest, workflowsV1Card_universal_d_ArchiveCardResponse as ArchiveCardResponse, workflowsV1Card_universal_d_QueryCardsOptions as QueryCardsOptions, workflowsV1Card_universal_d_listCards as listCards, workflowsV1Card_universal_d_ListCardsOptions as ListCardsOptions, workflowsV1Card_universal_d_getCard as getCard, workflowsV1Card_universal_d_updateCard as updateCard, workflowsV1Card_universal_d_UpdateCardOptions as UpdateCardOptions, workflowsV1Card_universal_d_createCard as createCard, workflowsV1Card_universal_d_CreateCardIdentifiers as CreateCardIdentifiers, workflowsV1Card_universal_d_CreateCardOptions as CreateCardOptions, workflowsV1Card_universal_d_deleteCard as deleteCard, workflowsV1Card_universal_d_moveCard as moveCard, workflowsV1Card_universal_d_MoveCardOptions as MoveCardOptions, workflowsV1Card_universal_d_restoreCard as restoreCard, workflowsV1Card_universal_d_RestoreCardOptions as RestoreCardOptions, workflowsV1Card_universal_d_archiveCard as archiveCard, };
    }
    const __debug$1: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
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
        cards?: Card$1[];
    }
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
        /** ID of the contact attached to the card. */
        contactId?: string;
    }
    /** describes the supported types of attachments (currently only supports Contact which is the default type) */
    enum AttachmentType$1 {
        ContactType = "ContactType"
    }
    interface QueryPhasesRequest {
        /** Query, sort, and paging options. */
        query?: Query$1;
    }
    interface Query$1 {
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
        sort?: Sorting$1[];
        /** Paging options to limit and skip the number of items. */
        paging?: Paging$1;
        /** Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned. */
        fields?: string[];
        /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned. */
        fieldsets?: string[];
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
    interface QueryPhasesResponse {
        /** List of phases that matched the query criteria. */
        phases?: Phase$1[];
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
        phases?: Phase$1[];
        /** Metadata for the page of results. */
        pagination?: PaginationResponse$1;
    }
    interface GetPhaseRequest {
        /** ID of the phase to retrieve. */
        _id: string;
    }
    interface GetPhaseResponse {
        /** Requested phase. */
        phase?: Phase$1;
    }
    interface UpdatePhaseRequest {
        /** ID of the phase to update. */
        _id: string;
        /** Phase details to update. */
        phase?: PhaseInfo$1;
    }
    interface UpdatePhaseResponse {
    }
    interface CreatePhaseRequest {
        /** ID of the workflow to create the phase in. */
        workflowId: string;
        /** Phase details. */
        phase?: PhaseInfo$1;
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
        query?: Query$1;
    }
    /**
     * Retrieves a list of a workflow's phases.
     *
     *
     * The `listPhases()` function returns a Promise that resolves to a list containing information about the specified workflow's phases.
     *
     *
     * Use the `options` parameter to specify which phases to retrieve and in which order to retrieve them. Phases can be sorted based on their `"id"`, `"name"`, and `"position"`. If no `limit` parameter is passed, the first 50 cards are returned. Sort order defaults to by `"position"` ascending.
     *
     *
     * This function requires you to specify the ID of a workflow. To learn about retrieving IDs in the Workflows APIs, see [Retrieving IDs](wix-workflows-v2/introduction#retrieving-ids).
     *
     * This function is not a universal function and runs only on the backend.
     * @param workflowId - ID of the workflow whose phases will be listed.
     * @public
     * @requiredField workflowId
     * @param options - Options to use when retrieving the list of workflow phases.
     * @adminMethod
     */
    function listPhases(workflowId: string, options?: ListPhasesOptions): Promise<ListPhasesResponse>;
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
    /**
     * Retrieves a phase by ID.
     *
     *
     * The `getPhase()` function returns a Promise that resolves to the phase with the specified ID.
     *
     * This function requires you to specify the ID of a phase. To learn about retrieving IDs in the Workflows APIs, see [Retrieving IDs](wix-workflows-v2/introduction#retrieving-ids).
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - ID of the phase to retrieve.
     * @public
     * @requiredField _id
     * @adminMethod
     */
    function getPhase(_id: string): Promise<GetPhaseResponse>;
    /**
     * Updates an existing workflow phase.
     *
     *
     * The `updatePhase()` function returns a Promise that resolves when the phase has been updated with the specified values.
     *
     *
     * Only the properties passed in the `phase` object will be updated. All other properties will remain the same.
     *
     *
     * This function requires you to specify the ID of a phase. To learn about retrieving IDs in the Workflows APIs, see [Retrieving IDs](wix-workflows-v2/introduction#retrieving-ids).
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - ID of the phase to update.
     * @param phase - Phase details to update.
     * @public
     * @requiredField _id
     * @requiredField phase
     * @param options - Phase information to update.
     * @adminMethod
     */
    function updatePhase(_id: string, phase: PhaseInfo$1): Promise<void>;
    /**
     * Creates a new workflow phase.
     *
     *
     * The `createPhase()` function returns a Promise that resolves to the created phase ID when the phase is created in the specified workflow.
     *
     *
     * Pass a value for the `position` parameter to specify the newly created phase's position within the specified workflow. Positions are zero-based, meaning the first position is `0`.
     *
     *
     * When omitted, the newly created phase is added as the last non-win phase.
     *
     *
     * This function requires you to specify the ID of a workflow. To learn about retrieving IDs in the Workflows APIs, see [Retrieving IDs](wix-workflows-v2/introduction#retrieving-ids).
     *
     * This function is not a universal function and runs only on the backend.
     * @param workflowId - ID of the workflow to create the phase in.
     * @param phase - Phase details.
     * @public
     * @requiredField phase
     * @requiredField phase.name
     * @requiredField workflowId
     * @param options - Options to use when creating workflow phases.
     * @adminMethod
     */
    function createPhase(workflowId: string, phase: PhaseInfo$1, options?: CreatePhaseOptions): Promise<CreatePhaseResponse>;
    interface CreatePhaseOptions {
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
    /**
     * Deletes a workflow phase.
     *
     *
     * The `deletePhase()` function returns a Promise when the specified phase has been deleted.
     *
     *
     * This function requires you to specify the ID of a phase. To learn about retrieving IDs in the Workflows APIs, see [Retrieving IDs](wix-workflows-v2/introduction#retrieving-ids).
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - ID of the phase to delete.
     * @public
     * @requiredField _id
     * @adminMethod
     */
    function deletePhase(_id: string): Promise<void>;
    /**
     * Moves a phase to a new position with a workflow.
     *
     *
     * The `movePhase()` function returns a Promise when the specified phase has been moved to the new position.
     *
     *
     * Use the `newPosition` parameter to specify the new phase position within the workflow. Any non-win phase can be moved to any non-win position. The win phase cannot be moved. Positions are zero-based, meaning the first position is `0`.
     *
     *
     * This function requires you to specify the ID of a phase. To learn about retrieving IDs in the Workflows APIs, see [Retrieving IDs](wix-workflows-v2/introduction#retrieving-ids).
     *
     * This function is not a universal function and runs only on the backend.
     * @param newPosition - New phase position, where the first phase is `0`.
     *
     * If a phase already occupies the specified position,
     * that phase and any subsequent phases
     * are shifted to the right by 1.
     * @public
     * @documentationMaturity preview
     * @requiredField identifiers
     * @requiredField identifiers.id
     * @requiredField identifiers.workflowId
     * @requiredField newPosition
     * @adminMethod
     */
    function movePhase(identifiers: MovePhaseIdentifiers, newPosition: number | null): Promise<void>;
    interface MovePhaseIdentifiers {
        /** ID of the workflow that contains the phase to move. */
        workflowId: string;
        /** ID of the phase to move. */
        _id: string;
    }
    type workflowsV1Phase_universal_d_QueryPhasesRequest = QueryPhasesRequest;
    type workflowsV1Phase_universal_d_QueryPhasesResponse = QueryPhasesResponse;
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
    const workflowsV1Phase_universal_d_listPhases: typeof listPhases;
    type workflowsV1Phase_universal_d_ListPhasesOptions = ListPhasesOptions;
    const workflowsV1Phase_universal_d_getPhase: typeof getPhase;
    const workflowsV1Phase_universal_d_updatePhase: typeof updatePhase;
    const workflowsV1Phase_universal_d_createPhase: typeof createPhase;
    type workflowsV1Phase_universal_d_CreatePhaseOptions = CreatePhaseOptions;
    const workflowsV1Phase_universal_d_deletePhase: typeof deletePhase;
    const workflowsV1Phase_universal_d_movePhase: typeof movePhase;
    type workflowsV1Phase_universal_d_MovePhaseIdentifiers = MovePhaseIdentifiers;
    namespace workflowsV1Phase_universal_d {
        export { __debug$1 as __debug, Phase$1 as Phase, PhaseInfo$1 as PhaseInfo, CardsList$1 as CardsList, Card$1 as Card, CardInfo$1 as CardInfo, Attachment$1 as Attachment, AttachmentType$1 as AttachmentType, workflowsV1Phase_universal_d_QueryPhasesRequest as QueryPhasesRequest, Query$1 as Query, Sorting$1 as Sorting, SortOrder$1 as SortOrder, Paging$1 as Paging, workflowsV1Phase_universal_d_QueryPhasesResponse as QueryPhasesResponse, PaginationResponse$1 as PaginationResponse, workflowsV1Phase_universal_d_ListPhasesRequest as ListPhasesRequest, workflowsV1Phase_universal_d_ListPhasesResponse as ListPhasesResponse, workflowsV1Phase_universal_d_GetPhaseRequest as GetPhaseRequest, workflowsV1Phase_universal_d_GetPhaseResponse as GetPhaseResponse, workflowsV1Phase_universal_d_UpdatePhaseRequest as UpdatePhaseRequest, workflowsV1Phase_universal_d_UpdatePhaseResponse as UpdatePhaseResponse, workflowsV1Phase_universal_d_CreatePhaseRequest as CreatePhaseRequest, workflowsV1Phase_universal_d_CreatePhaseResponse as CreatePhaseResponse, workflowsV1Phase_universal_d_DeletePhaseRequest as DeletePhaseRequest, workflowsV1Phase_universal_d_DeletePhaseResponse as DeletePhaseResponse, workflowsV1Phase_universal_d_MovePhaseRequest as MovePhaseRequest, workflowsV1Phase_universal_d_MovePhaseResponse as MovePhaseResponse, workflowsV1Phase_universal_d_QueryPhasesOptions as QueryPhasesOptions, workflowsV1Phase_universal_d_listPhases as listPhases, workflowsV1Phase_universal_d_ListPhasesOptions as ListPhasesOptions, workflowsV1Phase_universal_d_getPhase as getPhase, workflowsV1Phase_universal_d_updatePhase as updatePhase, workflowsV1Phase_universal_d_createPhase as createPhase, workflowsV1Phase_universal_d_CreatePhaseOptions as CreatePhaseOptions, workflowsV1Phase_universal_d_deletePhase as deletePhase, workflowsV1Phase_universal_d_movePhase as movePhase, workflowsV1Phase_universal_d_MovePhaseIdentifiers as MovePhaseIdentifiers, };
    }
    const __debug: {
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
        winPhase?: Phase;
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
        /** ID of the contact attached to the card. */
        contactId?: string;
    }
    /** describes the supported types of attachments (currently only supports Contact which is the default type) */
    enum AttachmentType {
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
        phases?: Phase[];
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
    interface QueryWorkflowsRequest {
        /** Query options. */
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
    interface QueryWorkflowsResponse {
        /** List of workflows that matched the query. */
        workflows?: Workflow[];
        /** Metadata for the paginated results. */
        pagination?: PaginationResponse;
    }
    interface GetWorkflowRequest {
        /** ID of the workflow to retrieve. */
        _id: string;
        /**
         * Maximum number of cards to return per phase.
         * To retrieve additional pages of cards, use
         * [List Cards](../cards/listCards)
         * (in the Cards API).
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
    /**
     * Retrieves a list of the site's workflows info.
     *
     *
     * The `listWorkflows()` function returns a Promise that resolves to a list containing information about the site's workflows.
     *
     *
     * Use the `options` parameter to specify which workflows to retrieve and in which order to retrieve them. Workflows can be sorted based on their `"name"`.
     *
     *
     * If no `limit` parameter is passed, the first 100 workflows are returned. Sort order defaults to by `"name"` ascending.
     *
     * This function is not a universal function and runs only on the backend.
     * @public
     * @param options - Options to use when retrieving a list of workflows.
     * @adminMethod
     */
    function listWorkflows(options?: ListWorkflowsOptions): Promise<ListWorkflowsResponse>;
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
        query?: Query;
    }
    /**
     * Retrieves a workflow by ID.
     *
     *
     * The `getWorkflow()` function returns a Promise that resolves to the workflow info with the specified ID.
     *
     *
     * This function requires you to specify the ID of a workflow. To learn about retrieving IDs in the Workflows APIs, see [Retrieving IDs](wix-workflows-v2/introduction#retrieving-ids).
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - ID of the workflow to retrieve.
     * @param cardsPerPhase - Maximum number of cards to return per phase.
     * To retrieve additional pages of cards, use
     * [List Cards](../cards/listCards)
     * (in the Cards API).
     * @public
     * @requiredField _id
     * @requiredField cardsPerPhase
     * @param options - Options to use when retrieving a workflow.
     * @adminMethod
     */
    function getWorkflow(_id: string, cardsPerPhase: number | null, options?: GetWorkflowOptions): Promise<GetWorkflowResponse>;
    interface GetWorkflowOptions {
    }
    /**
     * Updates an existing workflow.
     *
     *
     * The `updateWorkflow()` function returns a Promise that resolves when the workflow has been updated with the specified values.
     *
     *
     * Only the properties passed in the `workflow` object will be updated. All other properties will remain the same.
     *
     *
     * This function requires you to specify the ID of a workflow. To learn about retrieving IDs in the Workflow API, see [Retrieving IDs](#retrieving-ids).
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - ID of the workflow to update.
     * @param workflow - Workflow info.
     * @public
     * @requiredField _id
     * @requiredField workflow
     * @param options - Options to use when updating a workflow.
     * @adminMethod
     */
    function updateWorkflow(_id: string, workflow: WorkflowInfo): Promise<void>;
    /**
     * Creates a new workflow.
     *
     *
     * The `createWorkflow()` function returns a Promise that resolves to the created workflow ID.
     *
     * This function is not a universal function and runs only on the backend.
     * @param workflow - Workflow details.
     * @public
     * @requiredField workflow
     * @requiredField workflow.name
     * @param options - Options to use when creating a workflow.
     * @adminMethod
     */
    function createWorkflow(workflow: WorkflowInfo): Promise<CreateWorkflowResponse>;
    /**
     * Deletes a workflow.
     *
     *
     * The `deleteWorkflow()` function returns a Promise when the specified workflow has been deleted.
     *
     *
     * This function requires you to specify the ID of a workflow. To learn about retrieving IDs in the Workflows APIs, see [Retrieving IDs](wix-workflows-v2/introduction#retrieving-ids).
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - ID of the workflow to delete.
     * @public
     * @requiredField _id
     * @adminMethod
     */
    function deleteWorkflow(_id: string): Promise<void>;
    const workflowsV1Workflow_universal_d___debug: typeof __debug;
    type workflowsV1Workflow_universal_d_Workflow = Workflow;
    type workflowsV1Workflow_universal_d_WorkflowInfo = WorkflowInfo;
    type workflowsV1Workflow_universal_d_Phase = Phase;
    type workflowsV1Workflow_universal_d_PhaseInfo = PhaseInfo;
    type workflowsV1Workflow_universal_d_CardsList = CardsList;
    type workflowsV1Workflow_universal_d_Card = Card;
    type workflowsV1Workflow_universal_d_CardInfo = CardInfo;
    type workflowsV1Workflow_universal_d_Attachment = Attachment;
    type workflowsV1Workflow_universal_d_AttachmentType = AttachmentType;
    const workflowsV1Workflow_universal_d_AttachmentType: typeof AttachmentType;
    type workflowsV1Workflow_universal_d_PhasesList = PhasesList;
    type workflowsV1Workflow_universal_d_ListWorkflowsRequest = ListWorkflowsRequest;
    type workflowsV1Workflow_universal_d_ListWorkflowsResponse = ListWorkflowsResponse;
    type workflowsV1Workflow_universal_d_PaginationResponse = PaginationResponse;
    type workflowsV1Workflow_universal_d_QueryWorkflowsRequest = QueryWorkflowsRequest;
    type workflowsV1Workflow_universal_d_Query = Query;
    type workflowsV1Workflow_universal_d_Sorting = Sorting;
    type workflowsV1Workflow_universal_d_SortOrder = SortOrder;
    const workflowsV1Workflow_universal_d_SortOrder: typeof SortOrder;
    type workflowsV1Workflow_universal_d_Paging = Paging;
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
    const workflowsV1Workflow_universal_d_listWorkflows: typeof listWorkflows;
    type workflowsV1Workflow_universal_d_ListWorkflowsOptions = ListWorkflowsOptions;
    type workflowsV1Workflow_universal_d_QueryWorkflowsOptions = QueryWorkflowsOptions;
    const workflowsV1Workflow_universal_d_getWorkflow: typeof getWorkflow;
    type workflowsV1Workflow_universal_d_GetWorkflowOptions = GetWorkflowOptions;
    const workflowsV1Workflow_universal_d_updateWorkflow: typeof updateWorkflow;
    const workflowsV1Workflow_universal_d_createWorkflow: typeof createWorkflow;
    const workflowsV1Workflow_universal_d_deleteWorkflow: typeof deleteWorkflow;
    namespace workflowsV1Workflow_universal_d {
        export { workflowsV1Workflow_universal_d___debug as __debug, workflowsV1Workflow_universal_d_Workflow as Workflow, workflowsV1Workflow_universal_d_WorkflowInfo as WorkflowInfo, workflowsV1Workflow_universal_d_Phase as Phase, workflowsV1Workflow_universal_d_PhaseInfo as PhaseInfo, workflowsV1Workflow_universal_d_CardsList as CardsList, workflowsV1Workflow_universal_d_Card as Card, workflowsV1Workflow_universal_d_CardInfo as CardInfo, workflowsV1Workflow_universal_d_Attachment as Attachment, workflowsV1Workflow_universal_d_AttachmentType as AttachmentType, workflowsV1Workflow_universal_d_PhasesList as PhasesList, workflowsV1Workflow_universal_d_ListWorkflowsRequest as ListWorkflowsRequest, workflowsV1Workflow_universal_d_ListWorkflowsResponse as ListWorkflowsResponse, workflowsV1Workflow_universal_d_PaginationResponse as PaginationResponse, workflowsV1Workflow_universal_d_QueryWorkflowsRequest as QueryWorkflowsRequest, workflowsV1Workflow_universal_d_Query as Query, workflowsV1Workflow_universal_d_Sorting as Sorting, workflowsV1Workflow_universal_d_SortOrder as SortOrder, workflowsV1Workflow_universal_d_Paging as Paging, workflowsV1Workflow_universal_d_QueryWorkflowsResponse as QueryWorkflowsResponse, workflowsV1Workflow_universal_d_GetWorkflowRequest as GetWorkflowRequest, workflowsV1Workflow_universal_d_GetWorkflowResponse as GetWorkflowResponse, workflowsV1Workflow_universal_d_UpdateWorkflowRequest as UpdateWorkflowRequest, workflowsV1Workflow_universal_d_UpdateWorkflowResponse as UpdateWorkflowResponse, workflowsV1Workflow_universal_d_CreateWorkflowRequest as CreateWorkflowRequest, workflowsV1Workflow_universal_d_CreateWorkflowResponse as CreateWorkflowResponse, workflowsV1Workflow_universal_d_DeleteWorkflowRequest as DeleteWorkflowRequest, workflowsV1Workflow_universal_d_DeleteWorkflowResponse as DeleteWorkflowResponse, workflowsV1Workflow_universal_d_SetupWorkflowRequest as SetupWorkflowRequest, workflowsV1Workflow_universal_d_SetupWorkflowResponse as SetupWorkflowResponse, workflowsV1Workflow_universal_d_listWorkflows as listWorkflows, workflowsV1Workflow_universal_d_ListWorkflowsOptions as ListWorkflowsOptions, workflowsV1Workflow_universal_d_QueryWorkflowsOptions as QueryWorkflowsOptions, workflowsV1Workflow_universal_d_getWorkflow as getWorkflow, workflowsV1Workflow_universal_d_GetWorkflowOptions as GetWorkflowOptions, workflowsV1Workflow_universal_d_updateWorkflow as updateWorkflow, workflowsV1Workflow_universal_d_createWorkflow as createWorkflow, workflowsV1Workflow_universal_d_deleteWorkflow as deleteWorkflow, };
    }
    export { workflowsV1Card_universal_d as cards, workflowsV1Phase_universal_d as phases, workflowsV1Workflow_universal_d as workflows };
}
