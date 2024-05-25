declare module "wix-billing.v2" {
  /**
   * A tax group is a category of specific line items grouped together based on their tax treatment.
   * You can create new tax groups to apply distinct tax rates and rules.
   */
  interface TaxGroup {
      /**
       * Tax group ID.
       * @readonly
       */
      _id?: string | null;
      /** Tax group name. */
      name?: string;
      /**
       * Revision number, which increments by 1 each time the tax group is updated. To prevent conflicting changes,
       * the current revision must be passed when updating the tax group.
       *
       * Ignored when creating a tax group.
       */
      revision?: string | null;
      /**
       * Date and time the tax group was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the tax group was last updated.
       * @readonly
       */
      _updatedDate?: Date;
  }
  interface CreateTaxGroupRequest {
      /** Tax group to create. */
      taxGroup: TaxGroup;
  }
  interface CreateTaxGroupResponse {
      /** Created tax group. */
      taxGroup?: TaxGroup;
  }
  interface GetTaxGroupRequest {
      /** ID of the tax group to retrieve. */
      taxGroupId: string;
  }
  interface GetTaxGroupResponse {
      /** Retrieved tax group. */
      taxGroup?: TaxGroup;
  }
  interface UpdateTaxGroupRequest {
      /** Tax group info to update. */
      taxGroup: TaxGroup;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      fieldMask?: string[];
  }
  interface UpdateTaxGroupResponse {
      /** Updated tax group. */
      taxGroup?: TaxGroup;
  }
  interface DeleteTaxGroupRequest {
      /** ID of the tax group to delete. */
      taxGroupId: string;
  }
  interface DeleteTaxGroupResponse {
  }
  interface QueryTaxGroupsRequest {
      /** Query options. */
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
      /** Retrieved default tax groups. */
      taxGroups?: TaxGroup[];
      /** Paging metadata. */
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
      /** Retrieved default tax groups. */
      taxGroups?: TaxGroup[];
  }
  interface ListDefaultTaxGroupsByAppIdsRequest {
      /** App IDs to retrieve default tax groups for. */
      appIds: string[];
  }
  interface ListDefaultTaxGroupsByAppIdsResponse {
      /** Retrieved default tax groups. */
      results?: ListDefaultTaxGroupsByAppIdsResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata$1;
  }
  interface ListDefaultTaxGroupsByAppIdsResult {
      /** Information about success or failure to retrieve default tax groups. */
      taxGroupMetadata?: ItemMetadata$1;
      /** Retrieved default tax groups. */
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
      error?: ApplicationError$2;
  }
  interface ApplicationError$2 {
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
  interface MessageEnvelope$1 {
      /** App instance ID. */
      instanceId?: string | null;
      /** Event type. */
      eventType?: string;
      /** The identification type and identity data. */
      identity?: IdentificationData$1;
      /** Stringify payload. */
      data?: string;
  }
  interface IdentificationData$1 extends IdentificationDataIdOneOf$1 {
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
  interface IdentificationDataIdOneOf$1 {
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
   * Creates a tax group.
   *
   * Add the `taxGroupId` to specific Stores products to categorize a group based on distinct tax treatment. Wix uses tax groups to `calculateTax()`.
   *
   * In addition to tax groups you create, default tax groups are already included in all Wix catalogs. Use `listDefaultTaxGroups()` to retrieve them. You can also use the Tax Groups SPI to create new default tax groups that can be applied directly to an entire catalog of products.
   * @param taxGroup - Tax group to create.
   * @public
   * @documentationMaturity preview
   * @requiredField taxGroup
   * @requiredField taxGroup.name
   * @adminMethod
   * @returns Created tax group.
   */
  function createTaxGroup(taxGroup: TaxGroup): Promise<TaxGroup>;
  /**
   * Retrieves a tax group.
   * @param taxGroupId - ID of the tax group to retrieve.
   * @public
   * @documentationMaturity preview
   * @requiredField taxGroupId
   * @returns Retrieved tax group.
   */
  function getTaxGroup(taxGroupId: string): Promise<TaxGroup>;
  /**
   * Updates a tax group.
   *
   * Each time the tax group is updated, `revision` increments by 1.
   * The current `revision` must be passed when updating the tax group.
   * This ensures you're working with the latest tax group and prevents
   * unintended overwrites.
   * @param _id - Tax group ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField taxGroup
   * @requiredField taxGroup.name
   * @requiredField taxGroup.revision
   * @param taxGroup - Tax group info.
   * @adminMethod
   * @returns Updated tax group.
   */
  function updateTaxGroup(_id: string | null, taxGroup: UpdateTaxGroup, options?: UpdateTaxGroupOptions): Promise<TaxGroup>;
  interface UpdateTaxGroup {
      /**
       * Tax group ID.
       * @readonly
       */
      _id?: string | null;
      /** Tax group name. */
      name?: string;
      /**
       * Revision number, which increments by 1 each time the tax group is updated. To prevent conflicting changes,
       * the current revision must be passed when updating the tax group.
       *
       * Ignored when creating a tax group.
       */
      revision?: string | null;
      /**
       * Date and time the tax group was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the tax group was last updated.
       * @readonly
       */
      _updatedDate?: Date;
  }
  interface UpdateTaxGroupOptions {
      /**
       * Explicit list of fields to update.
       * @internal
       */
      fieldMask?: string[];
  }
  /**
   * Deletes a tax group.
   *
   * If a tax group is deleted but the `taxGroupId` is still assigned to a Stores product then the default tax group is used to calculate tax.
   * @param taxGroupId - ID of the tax group to delete.
   * @public
   * @documentationMaturity preview
   * @requiredField taxGroupId
   * @adminMethod
   */
  function deleteTaxGroup(taxGroupId: string): Promise<void>;
  /**
   * Creates a query to retrieve a list of tax groups.
   *
   * The `queryTaxGroups()` function builds a query to retrieve a list of tax groups and returns a `TaxGroupsQueryBuilder` object.
   *
   * The returned object contains the query definition, which is typically used to run the query using the `find()` function.
   *
   * You can refine the query by chaining `TaxGroupsQueryBuilder` functions onto the query. `TaxGroupsQueryBuilder` functions enable you to sort, filter, and control the results that `queryTaxGroups()` returns.
   *
   * `queryTaxGroups()` runs with the following `TaxGroupsQueryBuilder` default that you can override:
   * + `ascending("_id")`
   *
   * The functions that are chained to `queryTaxGroups()` are applied in the order they are called. For example, if you apply `ascending("name")` and then `ascending("_createdDate")`, the results are sorted first by the `"name"`, and then, if there are multiple results with the same `"name"`, the items are sorted by `"_createdDate"`.
   *
   * The following `TaxGroupsQueryBuilder` functions are supported for the `queryTaxGroups()` function. For a full description of the tax group object, see the object returned for the `items` property in `TaxGroupsQueryResult`.
   * @public
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
   * Retrieves a list of default tax groups.
   *
   * The default tax groups for a site are inherited by the apps installed on the site. For example, the Wix Stores app includes a `"Products"` tax group by default.
   *
   * Add additional default tax groups with the Tax Groups SPI.
   * @public
   * @documentationMaturity preview
   */
  function listDefaultTaxGroups(): Promise<ListDefaultTaxGroupsResponse>;
  /**
   * Retrieves default tax groups for specific apps.
   * @param appIds - App IDs to retrieve default tax groups for.
   * @public
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
      ApplicationError$2 as ApplicationError,
      BulkActionMetadata$1 as BulkActionMetadata,
      DomainEvent$1 as DomainEvent,
      DomainEventBodyOneOf$1 as DomainEventBodyOneOf,
      EntityCreatedEvent$1 as EntityCreatedEvent,
      EntityUpdatedEvent$1 as EntityUpdatedEvent,
      EntityDeletedEvent$1 as EntityDeletedEvent,
      ActionEvent$1 as ActionEvent,
      MessageEnvelope$1 as MessageEnvelope,
      IdentificationData$1 as IdentificationData,
      IdentificationDataIdOneOf$1 as IdentificationDataIdOneOf,
      WebhookIdentityType$1 as WebhookIdentityType,
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
  
  /**
   * A tax region uses a location to define a specific tax treatment.
   * A location is defined by `country` and `subdivision`. The tax region also
   * dictates whether or not tax is included in the displayed price.
   */
  interface TaxRegion {
      /**
       * Tax region ID.
       * @readonly
       */
      _id?: string | null;
      /** 2-letter country code in [ISO-3166 alpha-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) format. */
      country?: string;
      /** Subdivision (such as state, prefecture, or province) in [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-2) format. */
      subdivision?: string;
      /**
       * The tax calculator ID to use to calculate tax for this region.
       *
       * Use `listTaxCalculators()` in Tax Calculation to retrieve a list of available calculators for your site.
       */
      appId?: string;
      /** Whether tax is included in the price. */
      taxIncludedInPrice?: boolean;
      /**
       * Revision number, which increments by 1 each time the tax region is updated.
       * To prevent conflicting changes, the current revision must be passed when updating the tax region.
       *
       * Ignored when creating a tax region.
       * @readonly
       */
      revision?: string | null;
      /**
       * Date and time the tax region was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the tax region was last updated.
       * @readonly
       */
      _updatedDate?: Date;
  }
  interface CreateTaxRegionRequest {
      /** Tax region to create. */
      taxRegion: TaxRegion;
      /** @internal */
      updateMigrationManager?: boolean | null;
  }
  interface CreateTaxRegionResponse {
      /** Created tax region. */
      taxRegion?: TaxRegion;
  }
  interface ConflictErrorDetails {
      /** Conflict details. */
      reasonForConflict?: string;
  }
  interface BulkCreateTaxRegionRequest {
      /** Tax regions to create. */
      taxRegions: TaxRegion[];
      /**
       * Whether to return the full tax region objects in the response.
       *
       * Default: `true`
       */
      returnEntity?: boolean;
  }
  interface BulkCreateTaxRegionResponse {
      /** Tax regions created by bulk action. */
      results?: BulkCreateTaxRegionResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkCreateTaxRegionResult {
      /** Item metadata. */
      itemMetadata?: ItemMetadata;
      /**
       * Tax region.
       *
       * This field is returned if the operation was successful and
       * `returnEntity` is set to `true`.
       */
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
  interface BulkActionMetadata {
      /** Number of items that were successfully processed. */
      totalSuccesses?: number;
      /** Number of items that couldn't be processed. */
      totalFailures?: number;
      /** Number of failures without details because detailed failure threshold was exceeded. */
      undetailedFailures?: number;
  }
  interface GetTaxRegionRequest {
      /** ID of the tax region to retrieve. */
      taxRegionId: string;
  }
  interface GetTaxRegionResponse {
      /** Retrieved tax region. */
      taxRegion?: TaxRegion;
  }
  interface UpdateTaxRegionRequest {
      /** Tax region info to update. */
      taxRegion: TaxRegion;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      fieldMask?: string[];
  }
  interface UpdateTaxRegionResponse {
      /** Updated tax region. */
      taxRegion?: TaxRegion;
  }
  interface DeleteTaxRegionRequest {
      /** ID of the tax region to delete. */
      taxRegionId: string;
  }
  interface DeleteTaxRegionResponse {
  }
  interface QueryTaxRegionsRequest {
      /** Query options. */
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
      /** Retrieved tax regions. */
      taxRegions?: TaxRegion[];
      /** Paging metadata. */
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
  interface MessageEnvelope {
      /** App instance ID. */
      instanceId?: string | null;
      /** Event type. */
      eventType?: string;
      /** The identification type and identity data. */
      identity?: IdentificationData;
      /** Stringify payload. */
      data?: string;
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
      identityType?: WebhookIdentityType;
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
  enum WebhookIdentityType {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  /**
   * Creates a tax region.
   *
   * Tax regions require a tax calculator `appId`. Use
   * `listTaxCalculators()` in Tax Calculation to retrieve a list of available calculators for a site.
   *
   * Wix uses tax regions to `calculateTax()`.
   * @param taxRegion - Tax region to create.
   * @public
   * @documentationMaturity preview
   * @requiredField taxRegion
   * @requiredField taxRegion.appId
   * @requiredField taxRegion.country
   * @requiredField taxRegion.taxIncludedInPrice
   * @adminMethod
   * @returns Created tax region.
   */
  function createTaxRegion(taxRegion: TaxRegion, options?: CreateTaxRegionOptions): Promise<TaxRegion>;
  interface CreateTaxRegionOptions {
      /** @internal */
      updateMigrationManager?: boolean | null;
  }
  /**
   * Create multiple Tax Regions by Bulk
   * @param taxRegions - Tax regions to create.
   * @internal
   * @documentationMaturity preview
   * @requiredField taxRegions
   * @adminMethod
   */
  function bulkCreateTaxRegion(taxRegions: TaxRegion[], options?: BulkCreateTaxRegionOptions): Promise<BulkCreateTaxRegionResponse>;
  interface BulkCreateTaxRegionOptions {
      /**
       * Whether to return the full tax region objects in the response.
       *
       * Default: `true`
       */
      returnEntity?: boolean;
  }
  /**
   * Retrieves a tax region.
   * @param taxRegionId - ID of the tax region to retrieve.
   * @public
   * @documentationMaturity preview
   * @requiredField taxRegionId
   * @returns Retrieved tax region.
   */
  function getTaxRegion(taxRegionId: string): Promise<TaxRegion>;
  /**
   * Updates a tax region.
   *
   * Each time the tax region is updated, `revision` increments by 1.
   * The current `revision` must be passed when updating the tax region.
   * This ensures you're working with the latest tax region and prevents
   * unintended overwrites.
   * @param _id - Tax region ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField taxRegion
   * @requiredField taxRegion.revision
   * @param taxRegion - Tax region info.
   * @adminMethod
   * @returns Updated tax region.
   */
  function updateTaxRegion(_id: string | null, taxRegion: UpdateTaxRegion, options?: UpdateTaxRegionOptions): Promise<TaxRegion>;
  interface UpdateTaxRegion {
      /**
       * Tax region ID.
       * @readonly
       */
      _id?: string | null;
      /** 2-letter country code in [ISO-3166 alpha-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) format. */
      country?: string;
      /** Subdivision (such as state, prefecture, or province) in [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-2) format. */
      subdivision?: string;
      /**
       * The tax calculator ID to use to calculate tax for this region.
       *
       * Use `listTaxCalculators()` in Tax Calculation to retrieve a list of available calculators for your site.
       */
      appId?: string;
      /** Whether tax is included in the price. */
      taxIncludedInPrice?: boolean;
      /**
       * Revision number, which increments by 1 each time the tax region is updated.
       * To prevent conflicting changes, the current revision must be passed when updating the tax region.
       *
       * Ignored when creating a tax region.
       * @readonly
       */
      revision?: string | null;
      /**
       * Date and time the tax region was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the tax region was last updated.
       * @readonly
       */
      _updatedDate?: Date;
  }
  interface UpdateTaxRegionOptions {
      /**
       * Explicit list of fields to update.
       * @internal
       */
      fieldMask?: string[];
  }
  /**
   * Deletes a tax region.
   *
   * When a tax region is deleted, tax is not calculated and zero tax will be returned for addresses in this region.
   * @param taxRegionId - ID of the tax region to delete.
   * @public
   * @documentationMaturity preview
   * @requiredField taxRegionId
   * @adminMethod
   */
  function deleteTaxRegion(taxRegionId: string): Promise<void>;
  /**
   * Creates a query to retrieve a list of tax regions.
   *
   * The `queryTaxRegions()` function builds a query to retrieve a list of tax regions and returns a `TaxRegionsQueryBuilder` object.
   *
   * The returned object contains the query definition, which is typically used to run the query using the `find()` function.
   *
   * You can refine the query by chaining `TaxRegionsQueryBuilder` functions onto the query. `TaxRegionsQueryBuilder` functions enable you to sort, filter, and control the results that `queryTaxRegions()` returns.
   *
   * `queryTaxRegions()` runs with the following `TaxRegionsQueryBuilder` default that you can override:
   * + `ascending("_id")`
   *
   * The functions that are chained to `queryTaxRegions()` are applied in the order they are called. For example, if you apply `ascending("country")` and then `ascending("subdivision")`, the results are sorted first by the `"country"`, and then, if there are multiple results with the same `"country"`, the items are sorted by `"subdivision"`.
   *
   * The following `TaxRegionsQueryBuilder` functions are supported for the `queryTaxRegions()` function. For a full description of the tax region object, see the object returned for the `items` property in `TaxRegionsQueryResult`.
   * @public
   * @documentationMaturity preview
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
  
  type billingV1TaxRegion_universal_d_TaxRegion = TaxRegion;
  type billingV1TaxRegion_universal_d_CreateTaxRegionRequest = CreateTaxRegionRequest;
  type billingV1TaxRegion_universal_d_CreateTaxRegionResponse = CreateTaxRegionResponse;
  type billingV1TaxRegion_universal_d_ConflictErrorDetails = ConflictErrorDetails;
  type billingV1TaxRegion_universal_d_BulkCreateTaxRegionRequest = BulkCreateTaxRegionRequest;
  type billingV1TaxRegion_universal_d_BulkCreateTaxRegionResponse = BulkCreateTaxRegionResponse;
  type billingV1TaxRegion_universal_d_BulkCreateTaxRegionResult = BulkCreateTaxRegionResult;
  type billingV1TaxRegion_universal_d_ItemMetadata = ItemMetadata;
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
  type billingV1TaxRegion_universal_d_MessageEnvelope = MessageEnvelope;
  type billingV1TaxRegion_universal_d_IdentificationData = IdentificationData;
  type billingV1TaxRegion_universal_d_IdentificationDataIdOneOf = IdentificationDataIdOneOf;
  type billingV1TaxRegion_universal_d_WebhookIdentityType = WebhookIdentityType;
  const billingV1TaxRegion_universal_d_WebhookIdentityType: typeof WebhookIdentityType;
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
      billingV1TaxRegion_universal_d_TaxRegion as TaxRegion,
      billingV1TaxRegion_universal_d_CreateTaxRegionRequest as CreateTaxRegionRequest,
      billingV1TaxRegion_universal_d_CreateTaxRegionResponse as CreateTaxRegionResponse,
      billingV1TaxRegion_universal_d_ConflictErrorDetails as ConflictErrorDetails,
      billingV1TaxRegion_universal_d_BulkCreateTaxRegionRequest as BulkCreateTaxRegionRequest,
      billingV1TaxRegion_universal_d_BulkCreateTaxRegionResponse as BulkCreateTaxRegionResponse,
      billingV1TaxRegion_universal_d_BulkCreateTaxRegionResult as BulkCreateTaxRegionResult,
      billingV1TaxRegion_universal_d_ItemMetadata as ItemMetadata,
      ApplicationError$1 as ApplicationError,
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
      billingV1TaxRegion_universal_d_MessageEnvelope as MessageEnvelope,
      billingV1TaxRegion_universal_d_IdentificationData as IdentificationData,
      billingV1TaxRegion_universal_d_IdentificationDataIdOneOf as IdentificationDataIdOneOf,
      billingV1TaxRegion_universal_d_WebhookIdentityType as WebhookIdentityType,
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
  
  interface TaxCalculationGateway {
      _id?: string | null;
  }
  interface CalculateTaxRequest {
      /** Optional ID of the entity that tax is being calculated for. For example, a cart ID. */
      externalId?: string | null;
      /** 3-letter currency code in [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format. */
      currency?: string;
      /** Array of addresses. Each line item can individually reference the address to apply with `lineItems.addressIndex`. */
      addresses: Address[];
      /** Line items to calculate tax for. */
      lineItems: LineItem[];
  }
  /** Wix common address format for physical address to use if you plan to store addresses in your service. */
  interface Address {
      /** 2-letter country code in [ISO-3166 alpha-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) format. */
      country?: string | null;
      /** Subdivision (such as state, prefecture, or province) in [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-2) format. */
      subdivision?: string | null;
      /** City name. */
      city?: string | null;
      /** Postal or zip code. */
      postalCode?: string | null;
      /** Main address line, usually street and number as free text. */
      addressLine1?: string | null;
      /** Free text providing more detailed address information, such as apartment, suite, or floor. */
      addressLine2?: string | null;
  }
  /** Line items to calculate tax for. */
  interface LineItem {
      /** Line item ID. */
      _id?: string;
      /** Line item name to display. */
      itemName?: string | null;
      /** Line item quantity. */
      quantity?: number;
      /** Line item price. */
      price?: string;
      /** Stock keeping unit for this line item. Learn more about [SKUs](https://www.wix.com/encyclopedia/definition/stock-keeping-unit-sku). */
      itemCode?: string | null;
      /** Tax group ID for this line item. If not provided, the default tax group applies. */
      taxGroupId?: string | null;
      /**
       * ID of the app providing the catalog for this line item.
       *
       * You can get your app's ID from its page in the [Wix Dev Center](https://dev.wix.com/apps).
       *
       * For items from Wix catalogs, the following values always apply:
       * + Wix Stores: `"215238eb-22a5-4c36-9e7b-e7c08025e04e"`
       * + Wix Bookings: `"13d21c63-b5ec-5912-8397-c3a5ddb27a97"`
       * + Wix Restaurants: `"9a5d83fd-8570-482e-81ab-cfa88942ee60"`
       */
      appId?: string | null;
      /** Whether tax is included in the price. */
      taxIncludedInPrice?: boolean | null;
      /** Index of the address from `addresses` to use to calculate tax for this specific line item. The index is zero-based. */
      addressIndex?: AddressIndex;
  }
  /** Index of the address from `addresses` to use to calculate tax for this specific line item. The index is zero-based. */
  interface AddressIndex extends AddressIndexAddressIndexOptionsOneOf {
      /** Single address to use for a sale location when only one address is required for tax calculations. The index is zero-based. */
      singleAddress?: number;
      /**
       * Multiple addresses to use for a sale. For example, some tax calculations may require both the address where an item is shipped from,
       * as well as the address the item is shipped to.
       */
      multipleAddresses?: MultipleAddresses;
  }
  /** @oneof */
  interface AddressIndexAddressIndexOptionsOneOf {
      /** Single address to use for a sale location when only one address is required for tax calculations. The index is zero-based. */
      singleAddress?: number;
      /**
       * Multiple addresses to use for a sale. For example, some tax calculations may require both the address where an item is shipped from,
       * as well as the address the item is shipped to.
       */
      multipleAddresses?: MultipleAddresses;
  }
  /**
   * MultipleAddresses are used for example for tax calculation of items shipped from store warehouse to a shipping address.
   * In this case origin is the warehouse address and destination is the shipping address.
   */
  interface MultipleAddresses {
      /** Index of the origin address. */
      origin?: number;
      /** Index of the destination address. */
      destination?: number;
  }
  interface CalculateTaxResponse {
      /** Optional ID of the entity that tax is being calculated for. For example, a cart ID. */
      externalId?: string | null;
      /** 3-letter currency code in [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format. */
      currency?: string;
      /** Array of addresses. Each line item can individually reference the address to apply with `lineItems.addressIndex`. */
      addresses?: Address[];
      /** Summary of the tax calculated. */
      taxSummary?: TaxSummary;
      /** Details of each tax applied to each line item. */
      lineItemTaxDetails?: LineItemTaxDetails[];
      /** Errors that occurred during the tax calculation. */
      errors?: ApplicationError[];
  }
  interface TaxSummary {
      /** Total price for all line items. */
      totalAmount?: string;
      /**
       * Total amount of tax calculated for all line items.
       * Note that due to rounding, `totalTax` may not equal the sum of `lineItemTaxDetails.taxSummary.taxAmount`.
       */
      totalTax?: string;
      /** Total taxable amount for all line items. */
      totalTaxableAmount?: string;
      /** Total amount of `totalTax` that is included in price. Applies to line items with `taxIncludedInPrice` set to `true`. */
      totalTaxIncludedInPrice?: string;
      /** Array of each tax applied, grouped by `"jurisdiction"`, `"jurisdiction_type"`, `"tax_type"`, `"tax_name"` and `"tax_rate"`. */
      aggregatedTaxBreakdown?: AggregatedTaxBreakdown[];
  }
  /**
   * The summary of the tax breakdown for all the line items. It will hold for each tax name, the aggregated tax amount paid for it and the tax rate.
   * Tax breakdown is the tax amount split to the tax authorities that applied on the line item.
   *
   * Note: Because that the tax is calculated only on the taxable amount, the tax amount may be looks strange.
   * e.g. if you pay 100$ and the tax applies only on 50$ from it with tax rate of 10%,
   * then the tax rate will be remain 10% but tax amount in the breakdown will be 5$ instead of 10$.
   */
  interface AggregatedTaxBreakdown {
      /** Name of the tax that was calculated. */
      taxName?: string;
      /** Type of tax that was calculated. */
      taxType?: string;
      /** Jurisdiction that taxes were calculated for. */
      jurisdiction?: string;
      /** Type of jurisdiction that taxes were calculated for. */
      jurisdictionType?: JurisdictionType;
      /** Tax rate used for this jurisdiction, as a decimal. For example, 10% tax is `"0.1000"` and 200% tax is `"2.0000"`. */
      rate?: string;
      /** Total amount of this tax for this jurisdiction. */
      aggregatedTaxAmount?: string;
      /**
       * Total taxable amount of this tax
       * @internal
       */
      aggregatedTaxableAmount?: string;
  }
  /** JurisdictionType represents the type of the jurisdiction in which this tax detail applies (e.g. Country,State,County,City,Special). */
  enum JurisdictionType {
      UNDEFINED = "UNDEFINED",
      COUNTRY = "COUNTRY",
      STATE = "STATE",
      COUNTY = "COUNTY",
      CITY = "CITY",
      SPECIAL = "SPECIAL"
  }
  /** Tax details for a specific line item. */
  interface LineItemTaxDetails {
      /** Line item ID. */
      _id?: string;
      /** Line item name to display. */
      itemName?: string | null;
      /** Line item quantity. */
      quantity?: number;
      /** Array of each tax applied, grouped by `jurisdiction`. */
      taxBreakdown?: TaxBreakdown[];
      /** Summary of this line item's total price and tax. */
      taxSummary?: LineItemTaxSummary;
      /** Index of the address from `addresses` to use to calculate tax for this specific line item. The index is zero-based. */
      addressIndex?: AddressIndex;
      /** Whether tax is included in the price. */
      taxIncludedInPrice?: boolean;
  }
  /** A detailed description of all the tax authorities applied on this item. */
  interface TaxBreakdown {
      /** Jurisdiction that taxes were calculated for. */
      jurisdiction?: string | null;
      /** Non-taxable amount of the price. */
      nonTaxableAmount?: string | null;
      /** Tax rate used for this jurisdiction, as a decimal. For example, 10% tax is `"0.1000"` and 200% tax is `"2.0000"`. */
      rate?: string | null;
      /** Amount of this tax calculated for this jurisdiction. */
      taxAmount?: string | null;
      /** Taxable amount of the price. */
      taxableAmount?: string | null;
      /** Type of tax that was calculated. For example, `"Sales Tax"`, `"Income Tax"`, `"Value Added Tax"`, etc. */
      taxType?: string | null;
      /** Name of the tax that was calculated. For example, `"NY State Sales Tax"`, `"Quebec GST"`, etc. */
      taxName?: string | null;
      /** Type of jurisdiction that taxes were calculated for. For example, `"State"`, `"Çounty"`, `"City"`, `"Special"`, etc. */
      jurisdictionType?: JurisdictionType;
  }
  interface LineItemTaxSummary {
      /**
       * Total price for this line item.
       * To determine the price for each individual unit of this line item, divide by `quantity`.
       */
      fullPrice?: string | null;
      /** Total amount of tax calculated for this line item. */
      taxAmount?: string;
      /** Total taxable amount for this line item. */
      taxableAmount?: string;
      /** ID of the calculator app that calculated tax for this line item. */
      appId?: string | null;
  }
  interface ApplicationError {
      /** Error code. */
      code?: string;
      /** Description of the error. */
      description?: string;
      /** Data related to the error. */
      data?: Record<string, any> | null;
  }
  interface ListTaxCalculatorsRequest {
  }
  interface ListTaxCalculatorsResponse {
      /** Retrieved tax calculators. */
      taxCalculatorDetails?: TaxCalculatorDetails[];
  }
  interface TaxCalculatorDetails {
      /** ID of the tax calculator. */
      appId?: string;
      /** Display name of the tax calculator. */
      displayName?: string;
      /** List of countries, in [ISO-3166 alpha-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) format, that the calculator does not support. */
      unsupportedCountries?: string[];
  }
  /**
   * Calculates tax for the provided line items.
   *
   * Tax is calculated for each line item based on the [tax region](https://dev.wix.com/docs/rest/business-management/payments/tax/tax-regions)
   * that corresponds to the address provided in `lineItems.addressIndex` and the tax group in `taxGroupId`. If no tax region is found for
   * the line item's address then no tax will be calculated for this line item. If no tax group with that `taxGroupId` is found then the
   * [default tax group](https://dev.wix.com/docs/rest/business-management/payments/tax/tax-groups/list-default-tax-groups) is used to calculate tax.
   *
   * The tax is calculated by a tax calculator app installed on the site.
   * Use [List Tax Calculators](https://dev.wix.com/docs/rest/business-management/payments/tax/tax-calculation/list-tax-calculators)
   * to see which tax calculators are available. To provide your own tax calculations, use the [Tax Calculation Integration SPI](https://dev.wix.com/docs/rest/business-management/payments/tax/tax-calculation-integration-spi).
   *
   * The breakdown of calculated tax returned, includes:
   * + `taxSummary`: The overall total tax calculated.
   * + `taxSummary.aggregatedTaxBreakdown`: The total tax calculated for each jurisdiction.
   * + `lineItemTaxDetails.taxSummary`: The total tax calculated for each line item.
   * + `lineItemTaxDetails.taxBreakdown`: The tax calculated for each line item in each jurisdiction.
   * @public
   * @documentationMaturity preview
   * @requiredField options.addresses
   * @requiredField options.lineItems
   * @requiredField options.lineItems._id
   * @requiredField options.lineItems.addressIndex
   * @requiredField options.lineItems.price
   * @param options - Calculate tax options.
   */
  function calculateTax(options?: CalculateTaxOptions): Promise<CalculateTaxResponse>;
  interface CalculateTaxOptions {
      /** Optional ID of the entity that tax is being calculated for. For example, a cart ID. */
      externalId?: string | null;
      /** 3-letter currency code in [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format. */
      currency?: string;
      /** Array of addresses. Each line item can individually reference the address to apply with `lineItems.addressIndex`. */
      addresses: Address[];
      /** Line items to calculate tax for. */
      lineItems: LineItem[];
  }
  /**
   * Retrieves a list of installed tax calculators.
   *
   * Wix uses these calculators to `calculateTax()`.
   * @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function listTaxCalculators(): Promise<ListTaxCalculatorsResponse>;
  
  type gatewaysBillingV1TaxCalculationGateway_universal_d_TaxCalculationGateway = TaxCalculationGateway;
  type gatewaysBillingV1TaxCalculationGateway_universal_d_CalculateTaxRequest = CalculateTaxRequest;
  type gatewaysBillingV1TaxCalculationGateway_universal_d_Address = Address;
  type gatewaysBillingV1TaxCalculationGateway_universal_d_LineItem = LineItem;
  type gatewaysBillingV1TaxCalculationGateway_universal_d_AddressIndex = AddressIndex;
  type gatewaysBillingV1TaxCalculationGateway_universal_d_AddressIndexAddressIndexOptionsOneOf = AddressIndexAddressIndexOptionsOneOf;
  type gatewaysBillingV1TaxCalculationGateway_universal_d_MultipleAddresses = MultipleAddresses;
  type gatewaysBillingV1TaxCalculationGateway_universal_d_CalculateTaxResponse = CalculateTaxResponse;
  type gatewaysBillingV1TaxCalculationGateway_universal_d_TaxSummary = TaxSummary;
  type gatewaysBillingV1TaxCalculationGateway_universal_d_AggregatedTaxBreakdown = AggregatedTaxBreakdown;
  type gatewaysBillingV1TaxCalculationGateway_universal_d_JurisdictionType = JurisdictionType;
  const gatewaysBillingV1TaxCalculationGateway_universal_d_JurisdictionType: typeof JurisdictionType;
  type gatewaysBillingV1TaxCalculationGateway_universal_d_LineItemTaxDetails = LineItemTaxDetails;
  type gatewaysBillingV1TaxCalculationGateway_universal_d_TaxBreakdown = TaxBreakdown;
  type gatewaysBillingV1TaxCalculationGateway_universal_d_LineItemTaxSummary = LineItemTaxSummary;
  type gatewaysBillingV1TaxCalculationGateway_universal_d_ApplicationError = ApplicationError;
  type gatewaysBillingV1TaxCalculationGateway_universal_d_ListTaxCalculatorsRequest = ListTaxCalculatorsRequest;
  type gatewaysBillingV1TaxCalculationGateway_universal_d_ListTaxCalculatorsResponse = ListTaxCalculatorsResponse;
  type gatewaysBillingV1TaxCalculationGateway_universal_d_TaxCalculatorDetails = TaxCalculatorDetails;
  const gatewaysBillingV1TaxCalculationGateway_universal_d_calculateTax: typeof calculateTax;
  type gatewaysBillingV1TaxCalculationGateway_universal_d_CalculateTaxOptions = CalculateTaxOptions;
  const gatewaysBillingV1TaxCalculationGateway_universal_d_listTaxCalculators: typeof listTaxCalculators;
  namespace gatewaysBillingV1TaxCalculationGateway_universal_d {
    export {
      gatewaysBillingV1TaxCalculationGateway_universal_d_TaxCalculationGateway as TaxCalculationGateway,
      gatewaysBillingV1TaxCalculationGateway_universal_d_CalculateTaxRequest as CalculateTaxRequest,
      gatewaysBillingV1TaxCalculationGateway_universal_d_Address as Address,
      gatewaysBillingV1TaxCalculationGateway_universal_d_LineItem as LineItem,
      gatewaysBillingV1TaxCalculationGateway_universal_d_AddressIndex as AddressIndex,
      gatewaysBillingV1TaxCalculationGateway_universal_d_AddressIndexAddressIndexOptionsOneOf as AddressIndexAddressIndexOptionsOneOf,
      gatewaysBillingV1TaxCalculationGateway_universal_d_MultipleAddresses as MultipleAddresses,
      gatewaysBillingV1TaxCalculationGateway_universal_d_CalculateTaxResponse as CalculateTaxResponse,
      gatewaysBillingV1TaxCalculationGateway_universal_d_TaxSummary as TaxSummary,
      gatewaysBillingV1TaxCalculationGateway_universal_d_AggregatedTaxBreakdown as AggregatedTaxBreakdown,
      gatewaysBillingV1TaxCalculationGateway_universal_d_JurisdictionType as JurisdictionType,
      gatewaysBillingV1TaxCalculationGateway_universal_d_LineItemTaxDetails as LineItemTaxDetails,
      gatewaysBillingV1TaxCalculationGateway_universal_d_TaxBreakdown as TaxBreakdown,
      gatewaysBillingV1TaxCalculationGateway_universal_d_LineItemTaxSummary as LineItemTaxSummary,
      gatewaysBillingV1TaxCalculationGateway_universal_d_ApplicationError as ApplicationError,
      gatewaysBillingV1TaxCalculationGateway_universal_d_ListTaxCalculatorsRequest as ListTaxCalculatorsRequest,
      gatewaysBillingV1TaxCalculationGateway_universal_d_ListTaxCalculatorsResponse as ListTaxCalculatorsResponse,
      gatewaysBillingV1TaxCalculationGateway_universal_d_TaxCalculatorDetails as TaxCalculatorDetails,
      gatewaysBillingV1TaxCalculationGateway_universal_d_calculateTax as calculateTax,
      gatewaysBillingV1TaxCalculationGateway_universal_d_CalculateTaxOptions as CalculateTaxOptions,
      gatewaysBillingV1TaxCalculationGateway_universal_d_listTaxCalculators as listTaxCalculators,
    };
  }
  
  export { gatewaysBillingV1TaxCalculationGateway_universal_d as taxCalculation, billingV1TaxGroup_universal_d as taxGroups, billingV1TaxRegion_universal_d as taxRegions };
}
