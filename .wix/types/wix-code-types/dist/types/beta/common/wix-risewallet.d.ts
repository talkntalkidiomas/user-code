declare module "wix-risewallet" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /** Wallet is the main entity of WalletService that contains GiftCard and customer references */
  interface Wallet {
      /**
       * Wallet ID
       * @readonly
       */
      _id?: string | null;
      /** Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision */
      revision?: string | null;
      /**
       * Represents the Gift Card associated with this Wallet
       * @readonly
       */
      giftCardId?: string;
      /**
       * Customer references
       * @readonly
       */
      customerRefs?: CustomerRef[];
      /**
       * Represents the time this Wallet was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Wallet was last updated
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Gift Card info
       * @readonly
       */
      giftCardInfo?: GiftCardInfo;
  }
  interface CustomerRef {
      /** Source channel, i.e. Shopify */
      sourceChannel?: string;
      /** Tenant ID in Source, i.e. shop ID */
      sourceTenantId?: string;
      /** Customer ID in Source */
      sourceCustomerId?: string;
      /** First name */
      firstName?: string | null;
      /** Last name */
      lastName?: string | null;
      /** Phone */
      phone?: string | null;
      /** Email */
      email?: string;
  }
  interface GiftCardInfo {
      /** Gift Card Code */
      code?: string;
      /** Current Gift Card Balance */
      balance?: string;
      /** Gift Card Currency */
      currency?: string | null;
  }
  interface CreateWalletRequest {
      /** Customer reference */
      customerRef: CustomerRef;
      /** Initial amount */
      initialValue?: string | null;
      /** Currency */
      currency?: string | null;
  }
  interface CreateWalletResponse {
      /** wallet */
      wallet?: Wallet;
  }
  interface CreateCustomerRefRequest {
      /** Customer reference */
      customerRef: CustomerRef;
  }
  interface CreateCustomerRefResponse {
      /** Customer reference */
      customerRef?: CustomerRef;
  }
  interface GetCustomerRefRequest {
      /** Query */
      query: CustomerRefQuery;
  }
  interface CustomerRefQuery {
      /** CustomerRef source */
      customerRefSource?: Source;
  }
  interface Source {
      /** Source channel, i.e. Shopify */
      sourceChannel?: string;
      /** Tenant ID in Source, i.e. shop ID */
      sourceTenantId?: string;
      /** Customer ID in Source */
      sourceCustomerId?: string;
  }
  interface GetCustomerRefResponse {
      /** Customer reference */
      customerRef?: CustomerRef;
  }
  interface UpdateCustomerRefRequest {
      /** PII information of CustomerRef will be updated. CustomerRef is identified by ID or source. */
      customerRef: CustomerRef;
  }
  interface UpdateCustomerRefResponse {
      /** Customer reference */
      customerRef?: CustomerRef;
  }
  interface DeleteCustomerRefRequest {
      /** Query */
      query: CustomerRefQuery;
  }
  interface DeleteCustomerRefResponse {
  }
  interface GetWalletRequest {
      /** Query */
      query: WalletQuery;
  }
  interface WalletQuery extends WalletQueryByOneOf {
      /** Wallet id */
      walletId?: string;
      /** Email */
      email?: string;
      /** CustomerRef source */
      customerRefSource?: Source;
  }
  /** @oneof */
  interface WalletQueryByOneOf {
      /** Wallet id */
      walletId?: string;
      /** Email */
      email?: string;
      /** CustomerRef source */
      customerRefSource?: Source;
  }
  interface GetWalletResponse {
      /** The retrieved Wallet */
      wallet?: Wallet;
  }
  interface GetWalletGiftCardRequest {
      /** ID of the Wallet for which to retrieve the associated Gift Card */
      query: WalletQuery;
  }
  interface GetWalletGiftCardResponse {
      /** The retrieved Gift Card */
      giftCard?: GiftCard;
  }
  /** GiftCard is the main entity of GiftCardService that matches between code and credit balance */
  interface GiftCard {
      /**
       * Gift Card unique id
       * @readonly
       */
      _id?: string | null;
      /** Gift Card code */
      code?: string | null;
      /** Gift Card initial value */
      initialValue?: string;
      /**
       * Gift Card balance
       * @readonly
       */
      balance?: string | null;
      /** Gift Card contact id */
      contactId?: string | null;
      /** Gift card meta data */
      meta?: GiftCardMeta;
      /** Gift Card revision */
      revision?: string | null;
      /** Gift Card currency */
      currency?: string | null;
      /** Gift Card expiration date */
      expiresAt?: Date;
      /**
       * Gift Card creation date
       * @readonly
       */
      createdAt?: Date;
      /**
       * Gift Card last update date
       * @readonly
       */
      updatedAt?: Date;
      /**
       * Last Transaction id
       * @readonly
       */
      lastTransactionId?: string | null;
  }
  interface GiftCardMeta extends GiftCardMetaGiftCardOptionsOneOf {
      /** Gift Card purchase */
      orderOptions?: OrderOptions;
      /** Bulk Options */
      campaignOptions?: CampaignOptions;
      /** Migration Options (migrating from another gift card) */
      migrationOptions?: MigrationOptions;
      /** Store Credit Options */
      storeCreditOptions?: StoreCreditOptions;
      type?: GiftCardType;
      /** The Tenant ID that is associated with the gift card creation */
      sourceId?: string | null;
  }
  /** @oneof */
  interface GiftCardMetaGiftCardOptionsOneOf {
      /** Gift Card purchase */
      orderOptions?: OrderOptions;
      /** Bulk Options */
      campaignOptions?: CampaignOptions;
      /** Migration Options (migrating from another gift card) */
      migrationOptions?: MigrationOptions;
      /** Store Credit Options */
      storeCreditOptions?: StoreCreditOptions;
  }
  enum GiftCardType {
      UNKNOWN = "UNKNOWN",
      ORDER = "ORDER",
      CAMPAIGN = "CAMPAIGN",
      MIGRATION = "MIGRATION",
      STORE_CREDIT = "STORE_CREDIT",
      MANUAL = "MANUAL"
  }
  interface OrderOptions {
      orderId?: string;
  }
  interface CampaignOptions {
      campaignId?: string;
  }
  interface MigrationOptions {
      previousId?: string;
  }
  interface StoreCreditOptions {
      walletId?: string;
  }
  interface QueryWalletsRequest {
      /** WQL expression for filtering Wallet entity */
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
  interface QueryWalletsResponse {
      /**
       * list of wallets with gift card info
       * @readonly
       */
      wallets?: Wallet[];
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
  
  const riseV1Wallet_universal_d___debug: typeof __debug;
  type riseV1Wallet_universal_d_Wallet = Wallet;
  type riseV1Wallet_universal_d_CustomerRef = CustomerRef;
  type riseV1Wallet_universal_d_GiftCardInfo = GiftCardInfo;
  type riseV1Wallet_universal_d_CreateWalletRequest = CreateWalletRequest;
  type riseV1Wallet_universal_d_CreateWalletResponse = CreateWalletResponse;
  type riseV1Wallet_universal_d_CreateCustomerRefRequest = CreateCustomerRefRequest;
  type riseV1Wallet_universal_d_CreateCustomerRefResponse = CreateCustomerRefResponse;
  type riseV1Wallet_universal_d_GetCustomerRefRequest = GetCustomerRefRequest;
  type riseV1Wallet_universal_d_CustomerRefQuery = CustomerRefQuery;
  type riseV1Wallet_universal_d_Source = Source;
  type riseV1Wallet_universal_d_GetCustomerRefResponse = GetCustomerRefResponse;
  type riseV1Wallet_universal_d_UpdateCustomerRefRequest = UpdateCustomerRefRequest;
  type riseV1Wallet_universal_d_UpdateCustomerRefResponse = UpdateCustomerRefResponse;
  type riseV1Wallet_universal_d_DeleteCustomerRefRequest = DeleteCustomerRefRequest;
  type riseV1Wallet_universal_d_DeleteCustomerRefResponse = DeleteCustomerRefResponse;
  type riseV1Wallet_universal_d_GetWalletRequest = GetWalletRequest;
  type riseV1Wallet_universal_d_WalletQuery = WalletQuery;
  type riseV1Wallet_universal_d_WalletQueryByOneOf = WalletQueryByOneOf;
  type riseV1Wallet_universal_d_GetWalletResponse = GetWalletResponse;
  type riseV1Wallet_universal_d_GetWalletGiftCardRequest = GetWalletGiftCardRequest;
  type riseV1Wallet_universal_d_GetWalletGiftCardResponse = GetWalletGiftCardResponse;
  type riseV1Wallet_universal_d_GiftCard = GiftCard;
  type riseV1Wallet_universal_d_GiftCardMeta = GiftCardMeta;
  type riseV1Wallet_universal_d_GiftCardMetaGiftCardOptionsOneOf = GiftCardMetaGiftCardOptionsOneOf;
  type riseV1Wallet_universal_d_GiftCardType = GiftCardType;
  const riseV1Wallet_universal_d_GiftCardType: typeof GiftCardType;
  type riseV1Wallet_universal_d_OrderOptions = OrderOptions;
  type riseV1Wallet_universal_d_CampaignOptions = CampaignOptions;
  type riseV1Wallet_universal_d_MigrationOptions = MigrationOptions;
  type riseV1Wallet_universal_d_StoreCreditOptions = StoreCreditOptions;
  type riseV1Wallet_universal_d_QueryWalletsRequest = QueryWalletsRequest;
  type riseV1Wallet_universal_d_QueryV2 = QueryV2;
  type riseV1Wallet_universal_d_QueryV2PagingMethodOneOf = QueryV2PagingMethodOneOf;
  type riseV1Wallet_universal_d_Sorting = Sorting;
  type riseV1Wallet_universal_d_SortOrder = SortOrder;
  const riseV1Wallet_universal_d_SortOrder: typeof SortOrder;
  type riseV1Wallet_universal_d_Paging = Paging;
  type riseV1Wallet_universal_d_CursorPaging = CursorPaging;
  type riseV1Wallet_universal_d_QueryWalletsResponse = QueryWalletsResponse;
  type riseV1Wallet_universal_d_PagingMetadataV2 = PagingMetadataV2;
  type riseV1Wallet_universal_d_Cursors = Cursors;
  namespace riseV1Wallet_universal_d {
    export {
      riseV1Wallet_universal_d___debug as __debug,
      riseV1Wallet_universal_d_Wallet as Wallet,
      riseV1Wallet_universal_d_CustomerRef as CustomerRef,
      riseV1Wallet_universal_d_GiftCardInfo as GiftCardInfo,
      riseV1Wallet_universal_d_CreateWalletRequest as CreateWalletRequest,
      riseV1Wallet_universal_d_CreateWalletResponse as CreateWalletResponse,
      riseV1Wallet_universal_d_CreateCustomerRefRequest as CreateCustomerRefRequest,
      riseV1Wallet_universal_d_CreateCustomerRefResponse as CreateCustomerRefResponse,
      riseV1Wallet_universal_d_GetCustomerRefRequest as GetCustomerRefRequest,
      riseV1Wallet_universal_d_CustomerRefQuery as CustomerRefQuery,
      riseV1Wallet_universal_d_Source as Source,
      riseV1Wallet_universal_d_GetCustomerRefResponse as GetCustomerRefResponse,
      riseV1Wallet_universal_d_UpdateCustomerRefRequest as UpdateCustomerRefRequest,
      riseV1Wallet_universal_d_UpdateCustomerRefResponse as UpdateCustomerRefResponse,
      riseV1Wallet_universal_d_DeleteCustomerRefRequest as DeleteCustomerRefRequest,
      riseV1Wallet_universal_d_DeleteCustomerRefResponse as DeleteCustomerRefResponse,
      riseV1Wallet_universal_d_GetWalletRequest as GetWalletRequest,
      riseV1Wallet_universal_d_WalletQuery as WalletQuery,
      riseV1Wallet_universal_d_WalletQueryByOneOf as WalletQueryByOneOf,
      riseV1Wallet_universal_d_GetWalletResponse as GetWalletResponse,
      riseV1Wallet_universal_d_GetWalletGiftCardRequest as GetWalletGiftCardRequest,
      riseV1Wallet_universal_d_GetWalletGiftCardResponse as GetWalletGiftCardResponse,
      riseV1Wallet_universal_d_GiftCard as GiftCard,
      riseV1Wallet_universal_d_GiftCardMeta as GiftCardMeta,
      riseV1Wallet_universal_d_GiftCardMetaGiftCardOptionsOneOf as GiftCardMetaGiftCardOptionsOneOf,
      riseV1Wallet_universal_d_GiftCardType as GiftCardType,
      riseV1Wallet_universal_d_OrderOptions as OrderOptions,
      riseV1Wallet_universal_d_CampaignOptions as CampaignOptions,
      riseV1Wallet_universal_d_MigrationOptions as MigrationOptions,
      riseV1Wallet_universal_d_StoreCreditOptions as StoreCreditOptions,
      riseV1Wallet_universal_d_QueryWalletsRequest as QueryWalletsRequest,
      riseV1Wallet_universal_d_QueryV2 as QueryV2,
      riseV1Wallet_universal_d_QueryV2PagingMethodOneOf as QueryV2PagingMethodOneOf,
      riseV1Wallet_universal_d_Sorting as Sorting,
      riseV1Wallet_universal_d_SortOrder as SortOrder,
      riseV1Wallet_universal_d_Paging as Paging,
      riseV1Wallet_universal_d_CursorPaging as CursorPaging,
      riseV1Wallet_universal_d_QueryWalletsResponse as QueryWalletsResponse,
      riseV1Wallet_universal_d_PagingMetadataV2 as PagingMetadataV2,
      riseV1Wallet_universal_d_Cursors as Cursors,
    };
  }
  
  export { riseV1Wallet_universal_d as wallet };
}
