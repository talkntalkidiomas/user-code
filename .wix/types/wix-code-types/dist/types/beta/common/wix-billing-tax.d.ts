declare module "wix-billing-tax" {
  const __debug$1: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /**
   * Tax Group represents a tax category for a group of line items.
   * It is used as a way to connect a tax rate to a group of line items.
   */
  interface TaxGroup {
      /**
       * Tax Group ID.
       * @readonly
       */
      _id?: string | null;
      /** Tax Group Name - a non empty string that represents the tax category. */
      name?: string;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes.
       * for an update operation to succeed, you MUST pass the latest revision.
       */
      revision?: string | null;
      /**
       * Represents the time this TaxGroup was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this TaxGroup was last updated.
       * @readonly
       */
      _updatedDate?: Date;
  }
  interface CreateTaxGroupRequest {
      /** Tax Group to be created */
      taxGroup: TaxGroup;
  }
  interface CreateTaxGroupResponse {
      /** The created Tax Group */
      taxGroup?: TaxGroup;
  }
  interface GetTaxGroupRequest {
      /** Id of the Tax Group to retrieve */
      taxGroupId: string;
  }
  interface GetTaxGroupResponse {
      /** The retrieved Tax Group */
      taxGroup?: TaxGroup;
  }
  interface UpdateTaxGroupRequest {
      /** Tax Group to be updated, may be partial */
      taxGroup: TaxGroup;
      /**
       * Explicit list of fields to update
       * @internal
       */
      fieldMask?: string[];
  }
  interface UpdateTaxGroupResponse {
      /** The updated Tax Group */
      taxGroup?: TaxGroup;
  }
  interface DeleteTaxGroupRequest {
      /** Id of the Tax Group to delete */
      taxGroupId: string;
  }
  interface DeleteTaxGroupResponse {
  }
  interface QueryTaxGroupsRequest {
      /** WQL expression */
      query: QueryV2;
  }
  interface QueryV2 extends QueryV2PagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
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
  interface QueryV2PagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
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
  interface Paging {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
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
  interface QueryTaxGroupsResponse {
      /** The retrieved Tax Groups */
      taxGroups?: TaxGroup[];
      /** Paging metadata */
      pagingMetadata?: CursorPagingMetadata$1;
  }
  interface CursorPagingMetadata$1 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Cursor strings that point to the next page, previous page, or both. */
      cursors?: Cursors$1;
      /**
       * Whether there are more pages to retrieve following the current page.
       *
       * + `true`: Another page of results can be retrieved.
       * + `false`: This is the last page.
       */
      hasNext?: boolean | null;
  }
  interface Cursors$1 {
      /** Cursor string pointing to the next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to the previous page in the list of results. */
      prev?: string | null;
  }
  interface ListDefaultTaxGroupsRequest {
  }
  interface ListDefaultTaxGroupsResponse {
      /** The system defined groups for the installed apps (stores will return "all products", "shipping", "fees") */
      taxGroups?: TaxGroup[];
  }
  interface ListDefaultTaxGroupsByAppIdsRequest {
      /** The app ids to get the default tax groups for */
      appIds: string[];
  }
  interface ListDefaultTaxGroupsByAppIdsResponse {
      /** The default tax group for each app */
      results?: ListDefaultTaxGroupsByAppIdsResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata$1;
  }
  interface ListDefaultTaxGroupsByAppIdsResult {
      /** Information about successful action or error for failure. */
      taxGroupMetadata?: ItemMetadata$1;
      /** The default TaxGroup for the app */
      taxGroup?: TaxGroup;
  }
  interface ItemMetadata$1 {
      /** Item ID. Should always be available, unless it's impossible (for example, when failing to create an item). */
      _id?: string | null;
      /** Index of the item within the request array. Allows for correlation between request and response items. */
      originalIndex?: number;
      /** Whether the requested action was successful for this item. When `false`, the `error` field is populated. */
      success?: boolean;
      /** Details about the error in case of failure. */
      error?: ApplicationError$1;
  }
  interface ApplicationError$1 {
      /** Error code. */
      code?: string;
      /** Description of the error. */
      description?: string;
      /** Data related to the error. */
      data?: Record<string, any> | null;
  }
  interface BulkActionMetadata$1 {
      /** Number of items that were successfully processed. */
      totalSuccesses?: number;
      /** Number of items that couldn't be processed. */
      totalFailures?: number;
      /** Number of failures without details because detailed failure threshold was exceeded. */
      undetailedFailures?: number;
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
  /**
   * Create a Tax Group
   * @param taxGroup - Tax Group to be created
   * @internal
   * @documentationMaturity preview
   * @requiredField taxGroup
   * @requiredField taxGroup.name
   * @adminMethod
   * @returns The created Tax Group
   */
  function createTaxGroup(taxGroup: TaxGroup): Promise<TaxGroup>;
  /**
   * Get a Tax Group
   * @param taxGroupId - Id of the Tax Group to retrieve
   * @internal
   * @documentationMaturity preview
   * @requiredField taxGroupId
   * @returns The retrieved Tax Group
   */
  function getTaxGroup(taxGroupId: string): Promise<TaxGroup>;
  /**
   * Update a Tax Group, supports partial update
   * Pass the latest `revision` for a successful update
   * @param _id - Tax Group ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField taxGroup
   * @requiredField taxGroup.name
   * @requiredField taxGroup.revision
   * @adminMethod
   * @returns The updated Tax Group
   */
  function updateTaxGroup(_id: string | null, taxGroup: UpdateTaxGroup, options?: UpdateTaxGroupOptions): Promise<TaxGroup>;
  interface UpdateTaxGroup {
      /**
       * Tax Group ID.
       * @readonly
       */
      _id?: string | null;
      /** Tax Group Name - a non empty string that represents the tax category. */
      name?: string;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes.
       * for an update operation to succeed, you MUST pass the latest revision.
       */
      revision?: string | null;
      /**
       * Represents the time this TaxGroup was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this TaxGroup was last updated.
       * @readonly
       */
      _updatedDate?: Date;
  }
  interface UpdateTaxGroupOptions {
      /**
       * Explicit list of fields to update
       * @internal
       */
      fieldMask?: string[];
  }
  /**
   * Delete a Tax Group
   * @param taxGroupId - Id of the Tax Group to delete
   * @internal
   * @documentationMaturity preview
   * @requiredField taxGroupId
   * @adminMethod
   */
  function deleteTaxGroup(taxGroupId: string): Promise<void>;
  /**
   * Query Tax Groups using [WQL - Wix Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language)
   * @internal
   * @documentationMaturity preview
   */
  function queryTaxGroups(): TaxGroupsQueryBuilder;
  interface QueryCursorResult$1 {
      cursors: Cursors$1;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface TaxGroupsQueryResult extends QueryCursorResult$1 {
      items: TaxGroup[];
      query: TaxGroupsQueryBuilder;
      next: () => Promise<TaxGroupsQueryResult>;
      prev: () => Promise<TaxGroupsQueryResult>;
  }
  interface TaxGroupsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id' | 'name' | '_createdDate' | '_updatedDate', value: any) => TaxGroupsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id' | 'name' | '_createdDate' | '_updatedDate', value: any) => TaxGroupsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ge: (propertyName: '_createdDate' | '_updatedDate', value: any) => TaxGroupsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      gt: (propertyName: '_createdDate' | '_updatedDate', value: any) => TaxGroupsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      le: (propertyName: '_createdDate' | '_updatedDate', value: any) => TaxGroupsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      lt: (propertyName: '_createdDate' | '_updatedDate', value: any) => TaxGroupsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       * @documentationMaturity preview
       */
      hasSome: (propertyName: '_createdDate' | '_updatedDate', value: any[]) => TaxGroupsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id' | 'name' | '_createdDate' | '_updatedDate', value: any) => TaxGroupsQueryBuilder;
      /** @documentationMaturity preview */
      exists: (propertyName: '_createdDate' | '_updatedDate', value: boolean) => TaxGroupsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'_id' | 'name' | '_createdDate' | '_updatedDate'>) => TaxGroupsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'_id' | 'name' | '_createdDate' | '_updatedDate'>) => TaxGroupsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => TaxGroupsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => TaxGroupsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<TaxGroupsQueryResult>;
  }
  /**
   * ListDefaultTaxGroups - will return all default tax groups for the installed apps for the given metasite.
   * for example, if stores is installed then its default tax group - "Products" will be returned.
   * if bookings is installed then its default tax group - "services" will be returned.
   * The language of the default tax group will be the language of the metasite.
   * Default tax groups are defined via the Default Tax Group spi configuration.
   * @internal
   * @documentationMaturity preview
   */
  function listDefaultTaxGroups(): Promise<ListDefaultTaxGroupsResponse>;
  /**
   * ListDefaultTaxGroupsByAppIds - will return all default tax groups for the given app ids if they are installed for the given metasite and the app has default tax groups extension.
   * for example, if online stores is installed and its app id is given then its default tax group - "Products" will be returned.
   * if bookings is not installed, even if you will send its app id you will not get the tax group back.
   * @param appIds - The app ids to get the default tax groups for
   * @internal
   * @documentationMaturity preview
   * @requiredField appIds
   */
  function listDefaultTaxGroupsByAppIds(appIds: string[]): Promise<ListDefaultTaxGroupsByAppIdsResponse>;
  
  type billingV1TaxGroup_universal_d_TaxGroup = TaxGroup;
  type billingV1TaxGroup_universal_d_CreateTaxGroupRequest = CreateTaxGroupRequest;
  type billingV1TaxGroup_universal_d_CreateTaxGroupResponse = CreateTaxGroupResponse;
  type billingV1TaxGroup_universal_d_GetTaxGroupRequest = GetTaxGroupRequest;
  type billingV1TaxGroup_universal_d_GetTaxGroupResponse = GetTaxGroupResponse;
  type billingV1TaxGroup_universal_d_UpdateTaxGroupRequest = UpdateTaxGroupRequest;
  type billingV1TaxGroup_universal_d_UpdateTaxGroupResponse = UpdateTaxGroupResponse;
  type billingV1TaxGroup_universal_d_DeleteTaxGroupRequest = DeleteTaxGroupRequest;
  type billingV1TaxGroup_universal_d_DeleteTaxGroupResponse = DeleteTaxGroupResponse;
  type billingV1TaxGroup_universal_d_QueryTaxGroupsRequest = QueryTaxGroupsRequest;
  type billingV1TaxGroup_universal_d_QueryV2 = QueryV2;
  type billingV1TaxGroup_universal_d_QueryV2PagingMethodOneOf = QueryV2PagingMethodOneOf;
  type billingV1TaxGroup_universal_d_Paging = Paging;
  type billingV1TaxGroup_universal_d_QueryTaxGroupsResponse = QueryTaxGroupsResponse;
  type billingV1TaxGroup_universal_d_ListDefaultTaxGroupsRequest = ListDefaultTaxGroupsRequest;
  type billingV1TaxGroup_universal_d_ListDefaultTaxGroupsResponse = ListDefaultTaxGroupsResponse;
  type billingV1TaxGroup_universal_d_ListDefaultTaxGroupsByAppIdsRequest = ListDefaultTaxGroupsByAppIdsRequest;
  type billingV1TaxGroup_universal_d_ListDefaultTaxGroupsByAppIdsResponse = ListDefaultTaxGroupsByAppIdsResponse;
  type billingV1TaxGroup_universal_d_ListDefaultTaxGroupsByAppIdsResult = ListDefaultTaxGroupsByAppIdsResult;
  const billingV1TaxGroup_universal_d_createTaxGroup: typeof createTaxGroup;
  const billingV1TaxGroup_universal_d_getTaxGroup: typeof getTaxGroup;
  const billingV1TaxGroup_universal_d_updateTaxGroup: typeof updateTaxGroup;
  type billingV1TaxGroup_universal_d_UpdateTaxGroup = UpdateTaxGroup;
  type billingV1TaxGroup_universal_d_UpdateTaxGroupOptions = UpdateTaxGroupOptions;
  const billingV1TaxGroup_universal_d_deleteTaxGroup: typeof deleteTaxGroup;
  const billingV1TaxGroup_universal_d_queryTaxGroups: typeof queryTaxGroups;
  type billingV1TaxGroup_universal_d_TaxGroupsQueryResult = TaxGroupsQueryResult;
  type billingV1TaxGroup_universal_d_TaxGroupsQueryBuilder = TaxGroupsQueryBuilder;
  const billingV1TaxGroup_universal_d_listDefaultTaxGroups: typeof listDefaultTaxGroups;
  const billingV1TaxGroup_universal_d_listDefaultTaxGroupsByAppIds: typeof listDefaultTaxGroupsByAppIds;
  namespace billingV1TaxGroup_universal_d {
    export {
      __debug$1 as __debug,
      billingV1TaxGroup_universal_d_TaxGroup as TaxGroup,
      billingV1TaxGroup_universal_d_CreateTaxGroupRequest as CreateTaxGroupRequest,
      billingV1TaxGroup_universal_d_CreateTaxGroupResponse as CreateTaxGroupResponse,
      billingV1TaxGroup_universal_d_GetTaxGroupRequest as GetTaxGroupRequest,
      billingV1TaxGroup_universal_d_GetTaxGroupResponse as GetTaxGroupResponse,
      billingV1TaxGroup_universal_d_UpdateTaxGroupRequest as UpdateTaxGroupRequest,
      billingV1TaxGroup_universal_d_UpdateTaxGroupResponse as UpdateTaxGroupResponse,
      billingV1TaxGroup_universal_d_DeleteTaxGroupRequest as DeleteTaxGroupRequest,
      billingV1TaxGroup_universal_d_DeleteTaxGroupResponse as DeleteTaxGroupResponse,
      billingV1TaxGroup_universal_d_QueryTaxGroupsRequest as QueryTaxGroupsRequest,
      billingV1TaxGroup_universal_d_QueryV2 as QueryV2,
      billingV1TaxGroup_universal_d_QueryV2PagingMethodOneOf as QueryV2PagingMethodOneOf,
      Sorting$1 as Sorting,
      SortOrder$1 as SortOrder,
      billingV1TaxGroup_universal_d_Paging as Paging,
      CursorPaging$1 as CursorPaging,
      billingV1TaxGroup_universal_d_QueryTaxGroupsResponse as QueryTaxGroupsResponse,
      CursorPagingMetadata$1 as CursorPagingMetadata,
      Cursors$1 as Cursors,
      billingV1TaxGroup_universal_d_ListDefaultTaxGroupsRequest as ListDefaultTaxGroupsRequest,
      billingV1TaxGroup_universal_d_ListDefaultTaxGroupsResponse as ListDefaultTaxGroupsResponse,
      billingV1TaxGroup_universal_d_ListDefaultTaxGroupsByAppIdsRequest as ListDefaultTaxGroupsByAppIdsRequest,
      billingV1TaxGroup_universal_d_ListDefaultTaxGroupsByAppIdsResponse as ListDefaultTaxGroupsByAppIdsResponse,
      billingV1TaxGroup_universal_d_ListDefaultTaxGroupsByAppIdsResult as ListDefaultTaxGroupsByAppIdsResult,
      ItemMetadata$1 as ItemMetadata,
      ApplicationError$1 as ApplicationError,
      BulkActionMetadata$1 as BulkActionMetadata,
      DomainEvent$1 as DomainEvent,
      DomainEventBodyOneOf$1 as DomainEventBodyOneOf,
      EntityCreatedEvent$1 as EntityCreatedEvent,
      EntityUpdatedEvent$1 as EntityUpdatedEvent,
      EntityDeletedEvent$1 as EntityDeletedEvent,
      ActionEvent$1 as ActionEvent,
      billingV1TaxGroup_universal_d_createTaxGroup as createTaxGroup,
      billingV1TaxGroup_universal_d_getTaxGroup as getTaxGroup,
      billingV1TaxGroup_universal_d_updateTaxGroup as updateTaxGroup,
      billingV1TaxGroup_universal_d_UpdateTaxGroup as UpdateTaxGroup,
      billingV1TaxGroup_universal_d_UpdateTaxGroupOptions as UpdateTaxGroupOptions,
      billingV1TaxGroup_universal_d_deleteTaxGroup as deleteTaxGroup,
      billingV1TaxGroup_universal_d_queryTaxGroups as queryTaxGroups,
      billingV1TaxGroup_universal_d_TaxGroupsQueryResult as TaxGroupsQueryResult,
      billingV1TaxGroup_universal_d_TaxGroupsQueryBuilder as TaxGroupsQueryBuilder,
      billingV1TaxGroup_universal_d_listDefaultTaxGroups as listDefaultTaxGroups,
      billingV1TaxGroup_universal_d_listDefaultTaxGroupsByAppIds as listDefaultTaxGroupsByAppIds,
    };
  }
  
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /**
   * TaxRegion is the main entity of TaxRegionsService that can be used to define where you collect taxes and how.
   * Country and subdivision represent the location and the method is referred by the calculator_id.
   * All available calculators can be fetched by TaxService.ListTaxCalculators API.
   */
  interface TaxRegion {
      /**
       * TaxRegion ID
       * @readonly
       */
      _id?: string | null;
      /** Two-letter country code in ISO-3166 alpha-2 format. */
      country?: string;
      /**
       * Code for a subdivision (such as state, prefecture, or province) in ISO 3166-2 format.
       * If tax region is defined for a country, subdivision must be equal to "*". if not provided, it will be set to "*".
       */
      subdivision?: string;
      /**
       * The primary calculator appDefId for this region.
       * Note that for any calculator you should set fallback manual rates to be used in case the calculator fails.
       * e.g For Avalara calculator use "7516f85b-0868-4c23-9fcb-cea7784243df".
       * Since Avalara is a premium service, on downgrade to free plan, the Avalara calculator will be replaced with Manual calculator.
       */
      appId?: string;
      /** indicates if the price for this region includes the tax. In some countries, like in EU, the displayed price must include tax. */
      taxIncludedInPrice?: boolean;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the time this TaxRegion was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this TaxRegion was last updated.
       * @readonly
       */
      _updatedDate?: Date;
  }
  interface CreateTaxRegionRequest {
      /** TaxRegion to be created */
      taxRegion: TaxRegion;
      /**
       * when a region is created by user the site is added to the new tax service. during the migration we want to prevent that.
       * @internal
       */
      updateMigrationManager?: boolean | null;
  }
  interface CreateTaxRegionResponse {
      /** The created TaxRegion */
      taxRegion?: TaxRegion;
  }
  interface ConflictErrorDetails {
      /** reason for conflict */
      reasonForConflict?: string;
  }
  interface BulkCreateTaxRegionRequest {
      /** a sequence of tax regions to be created by bulk */
      taxRegions: TaxRegion[];
      /** Whether to return the full tax_region entity in the response. */
      returnEntity?: boolean;
  }
  interface BulkCreateTaxRegionResponse {
      /** Tax regions created by bulk. */
      results?: BulkCreateTaxRegionResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkCreateTaxRegionResult {
      /** Information about successful action or error for failure. */
      itemMetadata?: ItemMetadata;
      /** The created TaxRegion, Only exists if `returnEntity` was set to true in the request */
      item?: TaxRegion;
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
  interface GetTaxRegionRequest {
      /** Id of the TaxRegion to retrieve */
      taxRegionId: string;
  }
  interface GetTaxRegionResponse {
      /** The retrieved TaxRegion */
      taxRegion?: TaxRegion;
  }
  interface UpdateTaxRegionRequest {
      /** TaxRegion to be updated, may be partial */
      taxRegion: TaxRegion;
      /**
       * Explicit list of fields to update
       * @internal
       */
      fieldMask?: string[];
  }
  interface UpdateTaxRegionResponse {
      /** The updated TaxRegion */
      taxRegion?: TaxRegion;
  }
  interface DeleteTaxRegionRequest {
      /** Id of the TaxRegion to delete */
      taxRegionId: string;
  }
  interface DeleteTaxRegionResponse {
  }
  interface QueryTaxRegionsRequest {
      /** WQL expression */
      query?: CursorQuery;
  }
  interface CursorQuery extends CursorQueryPagingMethodOneOf {
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
  }
  /** @oneof */
  interface CursorQueryPagingMethodOneOf {
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
  interface QueryTaxRegionsResponse {
      /** The retrieved TaxRegions */
      taxRegions?: TaxRegion[];
      /** Paging metadata */
      pagingMetadata?: CursorPagingMetadata;
  }
  interface CursorPagingMetadata {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Cursor strings that point to the next page, previous page, or both. */
      cursors?: Cursors;
      /**
       * Whether there are more pages to retrieve following the current page.
       *
       * + `true`: Another page of results can be retrieved.
       * + `false`: This is the last page.
       */
      hasNext?: boolean | null;
  }
  interface Cursors {
      /** Cursor string pointing to the next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to the previous page in the list of results. */
      prev?: string | null;
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
  /**
   * Creates a new TaxRegion.
   * Once the tax region is created, it is possible to configure the tax group mappings for the tax region.
   * The tax group mappings are used by the built-in calculators to calculate the tax for a given tax group.
   * @param taxRegion - TaxRegion to be created
   * @internal
   * @documentationMaturity preview
   * @requiredField taxRegion
   * @requiredField taxRegion.appId
   * @requiredField taxRegion.country
   * @requiredField taxRegion.taxIncludedInPrice
   * @adminMethod
   * @returns The created TaxRegion
   */
  function createTaxRegion(taxRegion: TaxRegion, options?: CreateTaxRegionOptions): Promise<TaxRegion>;
  interface CreateTaxRegionOptions {
      /**
       * when a region is created by user the site is added to the new tax service. during the migration we want to prevent that.
       * @internal
       */
      updateMigrationManager?: boolean | null;
  }
  /**
   * Create multiple Tax Regions by Bulk
   * @param taxRegions - a sequence of tax regions to be created by bulk
   * @internal
   * @documentationMaturity preview
   * @requiredField taxRegions
   * @adminMethod
   */
  function bulkCreateTaxRegion(taxRegions: TaxRegion[], options?: BulkCreateTaxRegionOptions): Promise<BulkCreateTaxRegionResponse>;
  interface BulkCreateTaxRegionOptions {
      /** Whether to return the full tax_region entity in the response. */
      returnEntity?: boolean;
  }
  /**
   * Get a TaxRegion by id
   * @param taxRegionId - Id of the TaxRegion to retrieve
   * @internal
   * @documentationMaturity preview
   * @requiredField taxRegionId
   * @adminMethod
   * @returns The retrieved TaxRegion
   */
  function getTaxRegion(taxRegionId: string): Promise<TaxRegion>;
  /**
   * Update a TaxRegion, supports partial update
   * Pass the latest `revision` for a successful update
   * @param _id - TaxRegion ID
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField taxRegion
   * @requiredField taxRegion.revision
   * @adminMethod
   * @returns The updated TaxRegion
   */
  function updateTaxRegion(_id: string | null, taxRegion: UpdateTaxRegion, options?: UpdateTaxRegionOptions): Promise<TaxRegion>;
  interface UpdateTaxRegion {
      /**
       * TaxRegion ID
       * @readonly
       */
      _id?: string | null;
      /** Two-letter country code in ISO-3166 alpha-2 format. */
      country?: string;
      /**
       * Code for a subdivision (such as state, prefecture, or province) in ISO 3166-2 format.
       * If tax region is defined for a country, subdivision must be equal to "*". if not provided, it will be set to "*".
       */
      subdivision?: string;
      /**
       * The primary calculator appDefId for this region.
       * Note that for any calculator you should set fallback manual rates to be used in case the calculator fails.
       * e.g For Avalara calculator use "7516f85b-0868-4c23-9fcb-cea7784243df".
       * Since Avalara is a premium service, on downgrade to free plan, the Avalara calculator will be replaced with Manual calculator.
       */
      appId?: string;
      /** indicates if the price for this region includes the tax. In some countries, like in EU, the displayed price must include tax. */
      taxIncludedInPrice?: boolean;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the time this TaxRegion was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this TaxRegion was last updated.
       * @readonly
       */
      _updatedDate?: Date;
  }
  interface UpdateTaxRegionOptions {
      /**
       * Explicit list of fields to update
       * @internal
       */
      fieldMask?: string[];
  }
  /**
   * Delete a TaxRegion
   *
   * Triggers a side effect of deleting all mappings that are associated with this TaxRegion on the built-in calculators.
   * For Avalara calculator, all the mappings that are associated with this TaxRegion will be deleted.
   * For Manual calculator, all the "wix.billing.v1.manual_calc.tax_group_mapping" that are associated with this TaxRegion will be deleted.
   * For external calculators, this side effect is not guaranteed.
   *
   * Deleting a TaxRegion means that tax is not collected for the region anymore and so zero tax will be returned for addresses of this region.
   * @param taxRegionId - Id of the TaxRegion to delete
   * @internal
   * @documentationMaturity preview
   * @requiredField taxRegionId
   * @adminMethod
   */
  function deleteTaxRegion(taxRegionId: string): Promise<void>;
  /**
   * Query TaxRegions using [WQL - Wix Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language)
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function queryTaxRegions(): TaxRegionsQueryBuilder;
  interface QueryCursorResult {
      cursors: Cursors;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface TaxRegionsQueryResult extends QueryCursorResult {
      items: TaxRegion[];
      query: TaxRegionsQueryBuilder;
      next: () => Promise<TaxRegionsQueryResult>;
      prev: () => Promise<TaxRegionsQueryResult>;
  }
  interface TaxRegionsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id' | 'country' | 'subdivision' | 'appId' | '_createdDate' | '_updatedDate', value: any) => TaxRegionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id' | 'country' | 'subdivision' | 'appId' | '_createdDate' | '_updatedDate', value: any) => TaxRegionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ge: (propertyName: '_createdDate' | '_updatedDate', value: any) => TaxRegionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      gt: (propertyName: '_createdDate' | '_updatedDate', value: any) => TaxRegionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      le: (propertyName: '_createdDate' | '_updatedDate', value: any) => TaxRegionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      lt: (propertyName: '_createdDate' | '_updatedDate', value: any) => TaxRegionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       * @documentationMaturity preview
       */
      startsWith: (propertyName: '_id' | 'country' | 'subdivision' | 'appId', value: string) => TaxRegionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       * @documentationMaturity preview
       */
      hasSome: (propertyName: '_id' | 'country' | 'subdivision' | 'appId' | '_createdDate' | '_updatedDate', value: any[]) => TaxRegionsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id' | 'country' | 'subdivision' | 'appId' | '_createdDate' | '_updatedDate', value: any) => TaxRegionsQueryBuilder;
      /** @documentationMaturity preview */
      exists: (propertyName: '_id' | 'country' | 'subdivision' | 'appId' | '_createdDate' | '_updatedDate', value: boolean) => TaxRegionsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'_id' | 'country' | 'subdivision' | 'appId' | '_createdDate' | '_updatedDate'>) => TaxRegionsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'_id' | 'country' | 'subdivision' | 'appId' | '_createdDate' | '_updatedDate'>) => TaxRegionsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => TaxRegionsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => TaxRegionsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<TaxRegionsQueryResult>;
  }
  
  const billingV1TaxRegion_universal_d___debug: typeof __debug;
  type billingV1TaxRegion_universal_d_TaxRegion = TaxRegion;
  type billingV1TaxRegion_universal_d_CreateTaxRegionRequest = CreateTaxRegionRequest;
  type billingV1TaxRegion_universal_d_CreateTaxRegionResponse = CreateTaxRegionResponse;
  type billingV1TaxRegion_universal_d_ConflictErrorDetails = ConflictErrorDetails;
  type billingV1TaxRegion_universal_d_BulkCreateTaxRegionRequest = BulkCreateTaxRegionRequest;
  type billingV1TaxRegion_universal_d_BulkCreateTaxRegionResponse = BulkCreateTaxRegionResponse;
  type billingV1TaxRegion_universal_d_BulkCreateTaxRegionResult = BulkCreateTaxRegionResult;
  type billingV1TaxRegion_universal_d_ItemMetadata = ItemMetadata;
  type billingV1TaxRegion_universal_d_ApplicationError = ApplicationError;
  type billingV1TaxRegion_universal_d_BulkActionMetadata = BulkActionMetadata;
  type billingV1TaxRegion_universal_d_GetTaxRegionRequest = GetTaxRegionRequest;
  type billingV1TaxRegion_universal_d_GetTaxRegionResponse = GetTaxRegionResponse;
  type billingV1TaxRegion_universal_d_UpdateTaxRegionRequest = UpdateTaxRegionRequest;
  type billingV1TaxRegion_universal_d_UpdateTaxRegionResponse = UpdateTaxRegionResponse;
  type billingV1TaxRegion_universal_d_DeleteTaxRegionRequest = DeleteTaxRegionRequest;
  type billingV1TaxRegion_universal_d_DeleteTaxRegionResponse = DeleteTaxRegionResponse;
  type billingV1TaxRegion_universal_d_QueryTaxRegionsRequest = QueryTaxRegionsRequest;
  type billingV1TaxRegion_universal_d_CursorQuery = CursorQuery;
  type billingV1TaxRegion_universal_d_CursorQueryPagingMethodOneOf = CursorQueryPagingMethodOneOf;
  type billingV1TaxRegion_universal_d_Sorting = Sorting;
  type billingV1TaxRegion_universal_d_SortOrder = SortOrder;
  const billingV1TaxRegion_universal_d_SortOrder: typeof SortOrder;
  type billingV1TaxRegion_universal_d_CursorPaging = CursorPaging;
  type billingV1TaxRegion_universal_d_QueryTaxRegionsResponse = QueryTaxRegionsResponse;
  type billingV1TaxRegion_universal_d_CursorPagingMetadata = CursorPagingMetadata;
  type billingV1TaxRegion_universal_d_Cursors = Cursors;
  type billingV1TaxRegion_universal_d_DomainEvent = DomainEvent;
  type billingV1TaxRegion_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type billingV1TaxRegion_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type billingV1TaxRegion_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type billingV1TaxRegion_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type billingV1TaxRegion_universal_d_ActionEvent = ActionEvent;
  const billingV1TaxRegion_universal_d_createTaxRegion: typeof createTaxRegion;
  type billingV1TaxRegion_universal_d_CreateTaxRegionOptions = CreateTaxRegionOptions;
  const billingV1TaxRegion_universal_d_bulkCreateTaxRegion: typeof bulkCreateTaxRegion;
  type billingV1TaxRegion_universal_d_BulkCreateTaxRegionOptions = BulkCreateTaxRegionOptions;
  const billingV1TaxRegion_universal_d_getTaxRegion: typeof getTaxRegion;
  const billingV1TaxRegion_universal_d_updateTaxRegion: typeof updateTaxRegion;
  type billingV1TaxRegion_universal_d_UpdateTaxRegion = UpdateTaxRegion;
  type billingV1TaxRegion_universal_d_UpdateTaxRegionOptions = UpdateTaxRegionOptions;
  const billingV1TaxRegion_universal_d_deleteTaxRegion: typeof deleteTaxRegion;
  const billingV1TaxRegion_universal_d_queryTaxRegions: typeof queryTaxRegions;
  type billingV1TaxRegion_universal_d_TaxRegionsQueryResult = TaxRegionsQueryResult;
  type billingV1TaxRegion_universal_d_TaxRegionsQueryBuilder = TaxRegionsQueryBuilder;
  namespace billingV1TaxRegion_universal_d {
    export {
      billingV1TaxRegion_universal_d___debug as __debug,
      billingV1TaxRegion_universal_d_TaxRegion as TaxRegion,
      billingV1TaxRegion_universal_d_CreateTaxRegionRequest as CreateTaxRegionRequest,
      billingV1TaxRegion_universal_d_CreateTaxRegionResponse as CreateTaxRegionResponse,
      billingV1TaxRegion_universal_d_ConflictErrorDetails as ConflictErrorDetails,
      billingV1TaxRegion_universal_d_BulkCreateTaxRegionRequest as BulkCreateTaxRegionRequest,
      billingV1TaxRegion_universal_d_BulkCreateTaxRegionResponse as BulkCreateTaxRegionResponse,
      billingV1TaxRegion_universal_d_BulkCreateTaxRegionResult as BulkCreateTaxRegionResult,
      billingV1TaxRegion_universal_d_ItemMetadata as ItemMetadata,
      billingV1TaxRegion_universal_d_ApplicationError as ApplicationError,
      billingV1TaxRegion_universal_d_BulkActionMetadata as BulkActionMetadata,
      billingV1TaxRegion_universal_d_GetTaxRegionRequest as GetTaxRegionRequest,
      billingV1TaxRegion_universal_d_GetTaxRegionResponse as GetTaxRegionResponse,
      billingV1TaxRegion_universal_d_UpdateTaxRegionRequest as UpdateTaxRegionRequest,
      billingV1TaxRegion_universal_d_UpdateTaxRegionResponse as UpdateTaxRegionResponse,
      billingV1TaxRegion_universal_d_DeleteTaxRegionRequest as DeleteTaxRegionRequest,
      billingV1TaxRegion_universal_d_DeleteTaxRegionResponse as DeleteTaxRegionResponse,
      billingV1TaxRegion_universal_d_QueryTaxRegionsRequest as QueryTaxRegionsRequest,
      billingV1TaxRegion_universal_d_CursorQuery as CursorQuery,
      billingV1TaxRegion_universal_d_CursorQueryPagingMethodOneOf as CursorQueryPagingMethodOneOf,
      billingV1TaxRegion_universal_d_Sorting as Sorting,
      billingV1TaxRegion_universal_d_SortOrder as SortOrder,
      billingV1TaxRegion_universal_d_CursorPaging as CursorPaging,
      billingV1TaxRegion_universal_d_QueryTaxRegionsResponse as QueryTaxRegionsResponse,
      billingV1TaxRegion_universal_d_CursorPagingMetadata as CursorPagingMetadata,
      billingV1TaxRegion_universal_d_Cursors as Cursors,
      billingV1TaxRegion_universal_d_DomainEvent as DomainEvent,
      billingV1TaxRegion_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      billingV1TaxRegion_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      billingV1TaxRegion_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      billingV1TaxRegion_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      billingV1TaxRegion_universal_d_ActionEvent as ActionEvent,
      billingV1TaxRegion_universal_d_createTaxRegion as createTaxRegion,
      billingV1TaxRegion_universal_d_CreateTaxRegionOptions as CreateTaxRegionOptions,
      billingV1TaxRegion_universal_d_bulkCreateTaxRegion as bulkCreateTaxRegion,
      billingV1TaxRegion_universal_d_BulkCreateTaxRegionOptions as BulkCreateTaxRegionOptions,
      billingV1TaxRegion_universal_d_getTaxRegion as getTaxRegion,
      billingV1TaxRegion_universal_d_updateTaxRegion as updateTaxRegion,
      billingV1TaxRegion_universal_d_UpdateTaxRegion as UpdateTaxRegion,
      billingV1TaxRegion_universal_d_UpdateTaxRegionOptions as UpdateTaxRegionOptions,
      billingV1TaxRegion_universal_d_deleteTaxRegion as deleteTaxRegion,
      billingV1TaxRegion_universal_d_queryTaxRegions as queryTaxRegions,
      billingV1TaxRegion_universal_d_TaxRegionsQueryResult as TaxRegionsQueryResult,
      billingV1TaxRegion_universal_d_TaxRegionsQueryBuilder as TaxRegionsQueryBuilder,
    };
  }
  
  export { billingV1TaxGroup_universal_d as taxGroups, billingV1TaxRegion_universal_d as taxRegions };
}
