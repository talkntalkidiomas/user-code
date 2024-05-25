declare module "wix-seatings-backend" {
  interface SeatingPlan$1 {
      /**
       * Auto generated unique plan id
       * @readonly
       */
      _id?: string | null;
      /**
       * A client defined external id for cross referencing.
       * Can reference external entities.
       * Format: "{fqdn}:{entity guid}"
       */
      externalId?: string | null;
      /** Human friendly plan title */
      title?: string | null;
      /** Sections of the plan. Seating plan is divided in high level sections. */
      sections?: Section$1[];
      /** Categories for plan element grouping. */
      categories?: Category$1[];
      /**
       * Seating plan created timestamp.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Seating plan updated timestamp.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Total capacity
       * @readonly
       */
      totalCapacity?: number | null;
      /**
       * Total categories
       * @readonly
       */
      totalCategories?: number | null;
      /**
       * Places not assigned to categories
       * @readonly
       */
      uncategorizedPlaces?: Place$1[];
      /**
       * A version of the seating plan
       * @readonly
       */
      version?: string | null;
      /** Data extensions */
      extendedFields?: ExtendedFields$1;
      /** Seating Plan UI settings */
      uiProperties?: SeatingPlanUiProperties$1;
      /**
       * Element groups
       * @internal
       */
      elementGroups?: ElementGroup$1[];
  }
  interface Section$1 {
      /** Unique section id */
      _id?: number;
      /** Human readable section title */
      title?: string | null;
      /**
       * Client configuration object
       * @readonly
       */
      config?: Record<string, any> | null;
      /** Elements of the section. */
      elements?: Element$1[];
      /**
       * Total capacity
       * @readonly
       */
      totalCapacity?: number | null;
      /**
       * Is default section
       * @readonly
       */
      default?: boolean;
  }
  interface Element$1 {
      /** Unique element id */
      _id?: number;
      /** User friendly title/label of the element. */
      title?: string | null;
      /** Element type */
      type?: Type$1;
      /** Capacity. None for Shape type Element. */
      capacity?: number | null;
      /** Assigned to a category */
      categoryId?: number | null;
      /** A place numbering meta data */
      sequencing?: Sequencing$1;
      /** Place override (by seq_id) */
      overrides?: Place$1[];
      /**
       * Final place sequence with overrides
       * @readonly
       */
      places?: Place$1[];
      /** Element reservation options */
      reservationOptions?: ReservationOptions$1;
      /** Element UI settings */
      uiProperties?: ElementUiProperties$1;
      /**
       * Element group id
       * @internal
       */
      elementGroupId?: number | null;
      /**
       * Multi row element relevant for MULTI_ROW element type
       * @internal
       */
      multiRowProperties?: MultiRowProperties$1;
  }
  enum Type$1 {
      AREA = "AREA",
      ROW = "ROW",
      MULTI_ROW = "MULTI_ROW",
      TABLE = "TABLE",
      ROUND_TABLE = "ROUND_TABLE",
      SHAPE = "SHAPE"
  }
  interface Sequencing$1 {
      /** First seq element */
      startAt?: string;
      /** Finite generated seq of labels */
      labels?: string[];
      /** If true - direction right to left. Otherwise left to right. */
      reverseOrder?: boolean | null;
  }
  interface Place$1 {
      /** Local id of the place in the sequence */
      index?: number;
      /**
       * Generated composite unique id in the seating plan.
       * @readonly
       */
      _id?: string | null;
      /** Unique label of the place */
      label?: string;
      /**
       * Max capacity per place
       * @readonly
       */
      capacity?: number | null;
      /**
       * Type of the parent element
       * @readonly
       */
      elementType?: Type$1;
      /**
       * Assigned category id
       * @readonly
       */
      categoryId?: number | null;
  }
  interface ReservationOptions$1 {
      /** Indicates whether the entire element must be reserved */
      reserveWholeElement?: boolean;
  }
  interface ElementUiProperties$1 {
      x?: number | null;
      y?: number | null;
      zIndex?: number | null;
      width?: number | null;
      height?: number | null;
      rotationAngle?: number | null;
      shapeType?: ShapeTypeEnumType$1;
      fontSize?: number | null;
      cornerRadius?: number | null;
      seatSpacing?: number | null;
      hideLabel?: boolean | null;
      labelPosition?: Position$1;
      seatLayout?: number[];
      emptyTopSeatSpaces?: number | null;
      /** needs research */
      text?: string | null;
      /** #F0F0F0 */
      color?: string | null;
      /** #F0F0F0 */
      fillColor?: string | null;
      /** #F0F0F0 */
      strokeColor?: string | null;
      /** px */
      strokeWidth?: number | null;
      opacity?: number | null;
      icon?: Icon$1;
      image?: Image$1;
      seatNumbering?: Numbering$1;
  }
  enum ShapeTypeEnumType$1 {
      UNKNOWN_TYPE = "UNKNOWN_TYPE",
      TEXT = "TEXT",
      RECTANGLE = "RECTANGLE",
      ELLIPSE = "ELLIPSE",
      LINE = "LINE",
      ICON = "ICON",
      IMAGE = "IMAGE"
  }
  enum Position$1 {
      UNKNOWN_POSITION = "UNKNOWN_POSITION",
      LEFT = "LEFT",
      RIGHT = "RIGHT",
      BOTH = "BOTH",
      NONE = "NONE"
  }
  enum Icon$1 {
      UNKNOWN_ICON = "UNKNOWN_ICON",
      ENTER = "ENTER",
      EXIT = "EXIT",
      DRINKS = "DRINKS",
      WC = "WC",
      WC_MEN = "WC_MEN",
      WC_WOMEN = "WC_WOMEN",
      FOOD = "FOOD",
      STAIRS = "STAIRS",
      ELEVATOR = "ELEVATOR",
      SMOKING = "SMOKING",
      CHECKROOM = "CHECKROOM",
      STAGE = "STAGE"
  }
  interface Image$1 {
      /** WixMedia image ID. */
      _id?: string;
      /**
       * Original image height.
       * @readonly
       */
      height?: number;
      /**
       * Original image width.
       * @readonly
       */
      width?: number;
      /** WixMedia image URI. */
      uri?: string | null;
  }
  enum Numbering$1 {
      UNKNOWN_NUMBERING = "UNKNOWN_NUMBERING",
      NUMERIC = "NUMERIC",
      ODD_EVEN = "ODD_EVEN",
      ALPHABETICAL = "ALPHABETICAL"
  }
  interface MultiRowProperties$1 {
      /** Individual rows of the multi row element */
      rows?: RowElement$1[];
      /** Meta data for vertical labeling */
      verticalSequencing?: VerticalSequencing$1;
      /** Row spacing */
      rowSpacing?: number | null;
  }
  interface RowElement$1 {
      /** Unique row id */
      _id?: number;
      /** User friendly title/label of the row */
      title?: string | null;
      /** Row capacity */
      capacity?: number | null;
      /** Assigned to a category */
      categoryId?: number | null;
      /** A place numbering meta data for a single row */
      sequencing?: Sequencing$1;
      /** Row UI settings */
      uiProperties?: RowElementUiProperties$1;
  }
  interface RowElementUiProperties$1 {
      /** Relative x position to the parent element */
      relativeX?: number | null;
      /** Seat spacing */
      seatSpacing?: number | null;
      /** Label position */
      labelPosition?: Position$1;
      /** Seat numbering */
      seatNumbering?: Numbering$1;
  }
  interface VerticalSequencing$1 {
      /** First seq element */
      startAt?: string;
      /** Row numbering */
      rowNumbering?: Numbering$1;
      /** If true - direction bottom to top. Otherwise top to bottom. */
      reverseOrder?: boolean | null;
  }
  interface Category$1 {
      /** Local category id within the seating plan */
      _id?: number;
      /**
       * A client defined external id for cross referencing.
       * Can reference external entities.
       * Format: "{entity_fqdn}:{entity_id}"
       */
      externalId?: string | null;
      /** Category label */
      title?: string;
      /**
       * Client configuration object
       * @readonly
       */
      config?: Record<string, any> | null;
      /**
       * Total capacity
       * @readonly
       */
      totalCapacity?: number | null;
      /**
       * Possible places
       * @readonly
       */
      places?: Place$1[];
  }
  interface ExtendedFields$1 {
      /**
       * Extended field data. Each key corresponds to the namespace of the app that created the extended fields.
       * The value of each key is structured according to the schema defined when the extended fields were configured.
       *
       * You can only access fields for which you have the appropriate permissions.
       *
       * Learn more about [extended fields](https://dev.wix.com/docs/rest/articles/getting-started/extended-fields).
       */
      namespaces?: Record<string, Record<string, any>>;
  }
  interface SeatingPlanUiProperties$1 {
      /** #F0F0F0 */
      backgroundColor?: string | null;
      backgroundOpacity?: number | null;
  }
  interface ElementGroup$1 {
      /** Unique element group id */
      _id?: number;
      /** Parent group id */
      parentElementGroupId?: number | null;
      /** Element group UI settings */
      uiProperties?: ElementGroupUiProperties$1;
  }
  interface ElementGroupUiProperties$1 {
      /** x position of the group */
      x?: number | null;
      /** y position of the group */
      y?: number | null;
      /** width of the group */
      width?: number | null;
      /** height of the group */
      height?: number | null;
      /** rotation angle of the group */
      rotationAngle?: number | null;
  }
  interface CreateSeatingPlanRequest {
      /** A plan to be created */
      plan: SeatingPlan$1;
      /**
       * Mutates config field
       * @internal
       */
      updateConfig?: boolean | null;
  }
  interface CreateSeatingPlanResponse {
      /** The created plan */
      plan?: SeatingPlan$1;
  }
  interface CapacityExceededViolation {
      /** Max allowed capacity */
      maxCapacity?: number;
      /** Invalid capacity */
      capacity?: number;
      /** The element id */
      elementId?: number | null;
  }
  interface UpdateSeatingPlanRequest {
      /** The plan updates */
      plan?: SeatingPlan$1;
      /**
       * A set of field paths, specifying which parts of seating plan to update
       * @internal
       */
      fields?: string[];
      /**
       * Mutates config field
       * @internal
       */
      updateConfig?: boolean | null;
  }
  interface UpdateSeatingPlanResponse {
      /** The updated plan */
      plan?: SeatingPlan$1;
  }
  interface CopySeatingPlanRequest {
      /** The id of the plan to be copied */
      _id: string | null;
      /** New plan title */
      title: string | null;
      /** Format: "{fqdn}:{entity guid}" */
      externalId: string | null;
  }
  interface CopySeatingPlanResponse {
      /** The copied plan */
      plan?: SeatingPlan$1;
  }
  interface QuerySeatingPlanRequest {
      /**
       * Generic query object
       * Possible fieldsets: "elements", "categories", "places", "config".
       */
      query: QueryV2$1;
      /** A fieldset for the response */
      fieldset?: Fieldset[];
      /**
       * Consistent read.
       * @internal
       */
      consistentRead?: boolean | null;
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
  interface Paging$1 {
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
  enum Fieldset {
      ELEMENTS = "ELEMENTS",
      CATEGORIES = "CATEGORIES",
      PLACES = "PLACES",
      CONFIG = "CONFIG",
      ELEMENT_GROUPS = "ELEMENT_GROUPS"
  }
  interface QuerySeatingPlanResponse {
      /** Plan results */
      plans?: SeatingPlan$1[];
  }
  interface GetSeatingPlanRequest {
      /** The id of the plan */
      _id: string | null;
      /** A fieldset for the response */
      fieldset?: Fieldset[];
      /**
       * Projection on the result object - list of named projections.
       * Possible values: "elements", "categories", "places", "config".
       */
      fieldsets?: string[];
      /** Seating Plan Mask */
      seatingPlanMask?: SeatingPlanMask;
  }
  interface SeatingPlanMask {
      /** Filter seating plan by place ids */
      placeId?: string[];
  }
  interface GetSeatingPlanResponse {
      /** The plan */
      plan?: SeatingPlan$1;
  }
  interface FindSeatingPlanRequest {
      /** The filter of the plan */
      filter: Record<string, any> | null;
      /** A fieldset for the response */
      fieldset?: Fieldset[];
      /**
       * Projection on the result object - list of named projections.
       * Possible values: "elements", "categories", "places", "config".
       */
      fieldsets?: string[];
      /** Seating Plan Mask */
      seatingPlanMask?: SeatingPlanMask;
      /**
       * Consistent read.
       * @internal
       */
      consistentRead?: boolean | null;
  }
  interface FindSeatingPlanResponse {
      /** The plan */
      plan?: SeatingPlan$1;
  }
  interface DeleteSeatingPlanRequest {
      /** The id of the plan */
      _id: string | null;
  }
  interface DeleteSeatingPlanResponse {
      /** Deleted plan */
      plan?: SeatingPlan$1;
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
  interface UpdateSeatingPlanThumbnailRequest {
      thumbnail: SeatingPlanThumbnail;
  }
  interface SeatingPlanThumbnail {
      /** @readonly */
      _id?: string | null;
      img?: string | null;
  }
  interface UpdateSeatingPlanThumbnailResponse {
      thumbnail?: SeatingPlanThumbnail;
  }
  interface GetSeatingPlanThumbnailRequest {
      /** @readonly */
      _id: string | null;
  }
  interface GetSeatingPlanThumbnailResponse {
      thumbnail?: SeatingPlanThumbnail;
  }
  interface SaveSeatingPlanVersionRequest {
      /** A plan version to be saved */
      plan: SeatingPlan$1;
      /**
       * Parent version of the plan.
       * Use this field to override history of plan versions.
       * The next version of the plan will still be latest version +1,
       * but intermediate versions will be removed. Example:
       * Existing versions [1, 2, 3, 4, 5].
       * Save request with parent_version 2 will yield versions [1, 2, 6].
       */
      parentVersion?: string | null;
  }
  interface SaveSeatingPlanVersionResponse {
      /** Updated plan version */
      plan?: SeatingPlan$1;
  }
  interface QuerySeatingPlanVersionsRequest {
      /**
       * Generic query object
       * Possible fieldsets: "elements", "categories", "places", "config".
       */
      query: QueryV2$1;
  }
  interface QuerySeatingPlanVersionsResponse {
      /** Plan results */
      plans?: SeatingPlan$1[];
      /** Paging meta data */
      metadata?: PagingMetadataV2$1;
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
  interface DiscardSeatingPlanVersionsRequest {
      /** Seating Plan ID */
      seatingPlanId: string | null;
      /** Version from which all higher versions will be discarded. */
      version: string | null;
  }
  interface DiscardSeatingPlanVersionsResponse {
  }
  interface RestoreSeatingPlanRequest {
      /** Seating Plan ID */
      seatingPlanId: string | null;
      /** Version to witch the seating plan should be restored. */
      version: string | null;
  }
  interface RestoreSeatingPlanResponse {
      /** Seating Plan */
      plan?: SeatingPlan$1;
  }
  /**
   * Crates a seating plan
   * @param plan - A plan to be created
   * @public
   * @documentationMaturity preview
   * @requiredField plan
   * @requiredField plan.sections.elements.title
   * @requiredField plan.title
   * @adminMethod
   * @returns The created plan
   */
  function createSeatingPlan(plan: SeatingPlan$1, options?: CreateSeatingPlanOptions): Promise<SeatingPlan$1>;
  interface CreateSeatingPlanOptions {
      /**
       * Mutates config field
       * @internal
       */
      updateConfig?: boolean | null;
  }
  /**
   * Updates the seating plan
   * @public
   * @documentationMaturity preview
   * @requiredField options.plan._id
   * @requiredField options.plan.sections.elements.title
   * @adminMethod
   * @returns The updated plan
   */
  function updateSeatingPlan(options?: UpdateSeatingPlanOptions): Promise<SeatingPlan$1>;
  interface UpdateSeatingPlanOptions {
      /** The plan updates */
      plan?: SeatingPlan$1;
      /**
       * A set of field paths, specifying which parts of seating plan to update
       * @internal
       */
      fields?: string[];
      /**
       * Mutates config field
       * @internal
       */
      updateConfig?: boolean | null;
  }
  /**
   * Copies the seating plan
   * @param _id - The id of the plan to be copied
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField options
   * @requiredField options.externalId
   * @requiredField options.title
   * @adminMethod
   */
  function copySeatingPlan(_id: string | null, options: CopySeatingPlanOptions): Promise<CopySeatingPlanResponse>;
  interface CopySeatingPlanOptions {
      /** New plan title */
      title: string | null;
      /** Format: "{fqdn}:{entity guid}" */
      externalId: string | null;
  }
  /**
   * Lists seating plans by provided query request
   * @public
   * @documentationMaturity preview
   */
  function querySeatingPlan(options?: QuerySeatingPlanOptions): PlansQueryBuilder;
  interface QuerySeatingPlanOptions {
      /** A fieldset for the response */
      fieldset?: Fieldset[] | undefined;
      /**
       * Consistent read.
       * @internal
       */
      consistentRead?: boolean | null | undefined;
  }
  interface QueryCursorResult$1 {
      cursors: Cursors$1;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface PlansQueryResult extends QueryCursorResult$1 {
      items: SeatingPlan$1[];
      query: PlansQueryBuilder;
      next: () => Promise<PlansQueryResult>;
      prev: () => Promise<PlansQueryResult>;
  }
  interface PlansQueryBuilder {
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => PlansQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => PlansQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<PlansQueryResult>;
  }
  /**
   * Returns the seating plan. Fails of not fond.
   * @param _id - The id of the plan
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @returns The plan
   */
  function getSeatingPlan(_id: string | null, options?: GetSeatingPlanOptions): Promise<SeatingPlan$1>;
  interface GetSeatingPlanOptions {
      /** A fieldset for the response */
      fieldset?: Fieldset[];
      /**
       * Projection on the result object - list of named projections.
       * Possible values: "elements", "categories", "places", "config".
       */
      fieldsets?: string[];
      /** Seating Plan Mask */
      seatingPlanMask?: SeatingPlanMask;
  }
  /**
   * Returns the first seating plan found by filter request.
   * @param filter - The filter of the plan
   * @public
   * @documentationMaturity preview
   * @requiredField filter
   */
  function findSeatingPlan(filter: Record<string, any> | null, options?: FindSeatingPlanOptions): Promise<FindSeatingPlanResponse>;
  interface FindSeatingPlanOptions {
      /** A fieldset for the response */
      fieldset?: Fieldset[];
      /**
       * Projection on the result object - list of named projections.
       * Possible values: "elements", "categories", "places", "config".
       */
      fieldsets?: string[];
      /** Seating Plan Mask */
      seatingPlanMask?: SeatingPlanMask;
      /**
       * Consistent read.
       * @internal
       */
      consistentRead?: boolean | null;
  }
  /**
   * Deletes the seating plan.
   * @param _id - The id of the plan
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @adminMethod
   */
  function deleteSeatingPlan(_id: string | null): Promise<DeleteSeatingPlanResponse>;
  /**
   * Updates seating plan thumbnail.
   * @internal
   * @documentationMaturity preview
   * @requiredField thumbnail
   * @requiredField thumbnail._id
   * @requiredField thumbnail.img
   * @adminMethod
   */
  function updateSeatingPlanThumbnail(thumbnail: SeatingPlanThumbnail): Promise<UpdateSeatingPlanThumbnailResponse>;
  /**
   * Get seating plan thumbnail.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @adminMethod
   */
  function getSeatingPlanThumbnail(_id: string | null): Promise<GetSeatingPlanThumbnailResponse>;
  /**
   * Saves seating plan version
   * Increments SeatingPlan.version by 1 on every save.
   * @param plan - A plan version to be saved
   * @internal
   * @documentationMaturity preview
   * @requiredField plan
   * @requiredField plan.sections.elements.title
   * @requiredField plan.sections.title
   * @requiredField plan.title
   * @adminMethod
   */
  function saveSeatingPlanVersion(plan: SeatingPlan$1, options?: SaveSeatingPlanVersionOptions): Promise<SaveSeatingPlanVersionResponse>;
  interface SaveSeatingPlanVersionOptions {
      /**
       * Parent version of the plan.
       * Use this field to override history of plan versions.
       * The next version of the plan will still be latest version +1,
       * but intermediate versions will be removed. Example:
       * Existing versions [1, 2, 3, 4, 5].
       * Save request with parent_version 2 will yield versions [1, 2, 6].
       */
      parentVersion?: string | null;
  }
  /**
   * Lists seating plan versions by provided query request
   * @param query - Generic query object
   * Possible fieldsets: "elements", "categories", "places", "config".
   * @internal
   * @documentationMaturity preview
   * @requiredField query
   */
  function querySeatingPlanVersions(query: QueryV2$1): Promise<QuerySeatingPlanVersionsResponse>;
  /**
   * Discard higher versions than provided one
   * @param seatingPlanId - Seating Plan ID
   * @internal
   * @documentationMaturity preview
   * @requiredField options
   * @requiredField options.version
   * @requiredField seatingPlanId
   * @adminMethod
   */
  function discardSeatingPlanVersions(seatingPlanId: string | null, options: DiscardSeatingPlanVersionsOptions): Promise<void>;
  interface DiscardSeatingPlanVersionsOptions {
      /** Version from which all higher versions will be discarded. */
      version: string | null;
  }
  /**
   * Restores seating plan to given version
   * @param seatingPlanId - Seating Plan ID
   * @internal
   * @documentationMaturity preview
   * @requiredField options
   * @requiredField options.version
   * @requiredField seatingPlanId
   * @adminMethod
   */
  function restoreSeatingPlan(seatingPlanId: string | null, options: RestoreSeatingPlanOptions): Promise<RestoreSeatingPlanResponse>;
  interface RestoreSeatingPlanOptions {
      /** Version to witch the seating plan should be restored. */
      version: string | null;
  }
  
  type seatingV1SeatingPlan_universal_d_CreateSeatingPlanRequest = CreateSeatingPlanRequest;
  type seatingV1SeatingPlan_universal_d_CreateSeatingPlanResponse = CreateSeatingPlanResponse;
  type seatingV1SeatingPlan_universal_d_CapacityExceededViolation = CapacityExceededViolation;
  type seatingV1SeatingPlan_universal_d_UpdateSeatingPlanRequest = UpdateSeatingPlanRequest;
  type seatingV1SeatingPlan_universal_d_UpdateSeatingPlanResponse = UpdateSeatingPlanResponse;
  type seatingV1SeatingPlan_universal_d_CopySeatingPlanRequest = CopySeatingPlanRequest;
  type seatingV1SeatingPlan_universal_d_CopySeatingPlanResponse = CopySeatingPlanResponse;
  type seatingV1SeatingPlan_universal_d_QuerySeatingPlanRequest = QuerySeatingPlanRequest;
  type seatingV1SeatingPlan_universal_d_Fieldset = Fieldset;
  const seatingV1SeatingPlan_universal_d_Fieldset: typeof Fieldset;
  type seatingV1SeatingPlan_universal_d_QuerySeatingPlanResponse = QuerySeatingPlanResponse;
  type seatingV1SeatingPlan_universal_d_GetSeatingPlanRequest = GetSeatingPlanRequest;
  type seatingV1SeatingPlan_universal_d_SeatingPlanMask = SeatingPlanMask;
  type seatingV1SeatingPlan_universal_d_GetSeatingPlanResponse = GetSeatingPlanResponse;
  type seatingV1SeatingPlan_universal_d_FindSeatingPlanRequest = FindSeatingPlanRequest;
  type seatingV1SeatingPlan_universal_d_FindSeatingPlanResponse = FindSeatingPlanResponse;
  type seatingV1SeatingPlan_universal_d_DeleteSeatingPlanRequest = DeleteSeatingPlanRequest;
  type seatingV1SeatingPlan_universal_d_DeleteSeatingPlanResponse = DeleteSeatingPlanResponse;
  type seatingV1SeatingPlan_universal_d_UpdateSeatingPlanThumbnailRequest = UpdateSeatingPlanThumbnailRequest;
  type seatingV1SeatingPlan_universal_d_SeatingPlanThumbnail = SeatingPlanThumbnail;
  type seatingV1SeatingPlan_universal_d_UpdateSeatingPlanThumbnailResponse = UpdateSeatingPlanThumbnailResponse;
  type seatingV1SeatingPlan_universal_d_GetSeatingPlanThumbnailRequest = GetSeatingPlanThumbnailRequest;
  type seatingV1SeatingPlan_universal_d_GetSeatingPlanThumbnailResponse = GetSeatingPlanThumbnailResponse;
  type seatingV1SeatingPlan_universal_d_SaveSeatingPlanVersionRequest = SaveSeatingPlanVersionRequest;
  type seatingV1SeatingPlan_universal_d_SaveSeatingPlanVersionResponse = SaveSeatingPlanVersionResponse;
  type seatingV1SeatingPlan_universal_d_QuerySeatingPlanVersionsRequest = QuerySeatingPlanVersionsRequest;
  type seatingV1SeatingPlan_universal_d_QuerySeatingPlanVersionsResponse = QuerySeatingPlanVersionsResponse;
  type seatingV1SeatingPlan_universal_d_DiscardSeatingPlanVersionsRequest = DiscardSeatingPlanVersionsRequest;
  type seatingV1SeatingPlan_universal_d_DiscardSeatingPlanVersionsResponse = DiscardSeatingPlanVersionsResponse;
  type seatingV1SeatingPlan_universal_d_RestoreSeatingPlanRequest = RestoreSeatingPlanRequest;
  type seatingV1SeatingPlan_universal_d_RestoreSeatingPlanResponse = RestoreSeatingPlanResponse;
  const seatingV1SeatingPlan_universal_d_createSeatingPlan: typeof createSeatingPlan;
  type seatingV1SeatingPlan_universal_d_CreateSeatingPlanOptions = CreateSeatingPlanOptions;
  const seatingV1SeatingPlan_universal_d_updateSeatingPlan: typeof updateSeatingPlan;
  type seatingV1SeatingPlan_universal_d_UpdateSeatingPlanOptions = UpdateSeatingPlanOptions;
  const seatingV1SeatingPlan_universal_d_copySeatingPlan: typeof copySeatingPlan;
  type seatingV1SeatingPlan_universal_d_CopySeatingPlanOptions = CopySeatingPlanOptions;
  const seatingV1SeatingPlan_universal_d_querySeatingPlan: typeof querySeatingPlan;
  type seatingV1SeatingPlan_universal_d_QuerySeatingPlanOptions = QuerySeatingPlanOptions;
  type seatingV1SeatingPlan_universal_d_PlansQueryResult = PlansQueryResult;
  type seatingV1SeatingPlan_universal_d_PlansQueryBuilder = PlansQueryBuilder;
  const seatingV1SeatingPlan_universal_d_getSeatingPlan: typeof getSeatingPlan;
  type seatingV1SeatingPlan_universal_d_GetSeatingPlanOptions = GetSeatingPlanOptions;
  const seatingV1SeatingPlan_universal_d_findSeatingPlan: typeof findSeatingPlan;
  type seatingV1SeatingPlan_universal_d_FindSeatingPlanOptions = FindSeatingPlanOptions;
  const seatingV1SeatingPlan_universal_d_deleteSeatingPlan: typeof deleteSeatingPlan;
  const seatingV1SeatingPlan_universal_d_updateSeatingPlanThumbnail: typeof updateSeatingPlanThumbnail;
  const seatingV1SeatingPlan_universal_d_getSeatingPlanThumbnail: typeof getSeatingPlanThumbnail;
  const seatingV1SeatingPlan_universal_d_saveSeatingPlanVersion: typeof saveSeatingPlanVersion;
  type seatingV1SeatingPlan_universal_d_SaveSeatingPlanVersionOptions = SaveSeatingPlanVersionOptions;
  const seatingV1SeatingPlan_universal_d_querySeatingPlanVersions: typeof querySeatingPlanVersions;
  const seatingV1SeatingPlan_universal_d_discardSeatingPlanVersions: typeof discardSeatingPlanVersions;
  type seatingV1SeatingPlan_universal_d_DiscardSeatingPlanVersionsOptions = DiscardSeatingPlanVersionsOptions;
  const seatingV1SeatingPlan_universal_d_restoreSeatingPlan: typeof restoreSeatingPlan;
  type seatingV1SeatingPlan_universal_d_RestoreSeatingPlanOptions = RestoreSeatingPlanOptions;
  namespace seatingV1SeatingPlan_universal_d {
    export {
      SeatingPlan$1 as SeatingPlan,
      Section$1 as Section,
      Element$1 as Element,
      Type$1 as Type,
      Sequencing$1 as Sequencing,
      Place$1 as Place,
      ReservationOptions$1 as ReservationOptions,
      ElementUiProperties$1 as ElementUiProperties,
      ShapeTypeEnumType$1 as ShapeTypeEnumType,
      Position$1 as Position,
      Icon$1 as Icon,
      Image$1 as Image,
      Numbering$1 as Numbering,
      MultiRowProperties$1 as MultiRowProperties,
      RowElement$1 as RowElement,
      RowElementUiProperties$1 as RowElementUiProperties,
      VerticalSequencing$1 as VerticalSequencing,
      Category$1 as Category,
      ExtendedFields$1 as ExtendedFields,
      SeatingPlanUiProperties$1 as SeatingPlanUiProperties,
      ElementGroup$1 as ElementGroup,
      ElementGroupUiProperties$1 as ElementGroupUiProperties,
      seatingV1SeatingPlan_universal_d_CreateSeatingPlanRequest as CreateSeatingPlanRequest,
      seatingV1SeatingPlan_universal_d_CreateSeatingPlanResponse as CreateSeatingPlanResponse,
      seatingV1SeatingPlan_universal_d_CapacityExceededViolation as CapacityExceededViolation,
      seatingV1SeatingPlan_universal_d_UpdateSeatingPlanRequest as UpdateSeatingPlanRequest,
      seatingV1SeatingPlan_universal_d_UpdateSeatingPlanResponse as UpdateSeatingPlanResponse,
      seatingV1SeatingPlan_universal_d_CopySeatingPlanRequest as CopySeatingPlanRequest,
      seatingV1SeatingPlan_universal_d_CopySeatingPlanResponse as CopySeatingPlanResponse,
      seatingV1SeatingPlan_universal_d_QuerySeatingPlanRequest as QuerySeatingPlanRequest,
      QueryV2$1 as QueryV2,
      QueryV2PagingMethodOneOf$1 as QueryV2PagingMethodOneOf,
      Sorting$1 as Sorting,
      SortOrder$1 as SortOrder,
      Paging$1 as Paging,
      CursorPaging$1 as CursorPaging,
      seatingV1SeatingPlan_universal_d_Fieldset as Fieldset,
      seatingV1SeatingPlan_universal_d_QuerySeatingPlanResponse as QuerySeatingPlanResponse,
      seatingV1SeatingPlan_universal_d_GetSeatingPlanRequest as GetSeatingPlanRequest,
      seatingV1SeatingPlan_universal_d_SeatingPlanMask as SeatingPlanMask,
      seatingV1SeatingPlan_universal_d_GetSeatingPlanResponse as GetSeatingPlanResponse,
      seatingV1SeatingPlan_universal_d_FindSeatingPlanRequest as FindSeatingPlanRequest,
      seatingV1SeatingPlan_universal_d_FindSeatingPlanResponse as FindSeatingPlanResponse,
      seatingV1SeatingPlan_universal_d_DeleteSeatingPlanRequest as DeleteSeatingPlanRequest,
      seatingV1SeatingPlan_universal_d_DeleteSeatingPlanResponse as DeleteSeatingPlanResponse,
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
      seatingV1SeatingPlan_universal_d_UpdateSeatingPlanThumbnailRequest as UpdateSeatingPlanThumbnailRequest,
      seatingV1SeatingPlan_universal_d_SeatingPlanThumbnail as SeatingPlanThumbnail,
      seatingV1SeatingPlan_universal_d_UpdateSeatingPlanThumbnailResponse as UpdateSeatingPlanThumbnailResponse,
      seatingV1SeatingPlan_universal_d_GetSeatingPlanThumbnailRequest as GetSeatingPlanThumbnailRequest,
      seatingV1SeatingPlan_universal_d_GetSeatingPlanThumbnailResponse as GetSeatingPlanThumbnailResponse,
      seatingV1SeatingPlan_universal_d_SaveSeatingPlanVersionRequest as SaveSeatingPlanVersionRequest,
      seatingV1SeatingPlan_universal_d_SaveSeatingPlanVersionResponse as SaveSeatingPlanVersionResponse,
      seatingV1SeatingPlan_universal_d_QuerySeatingPlanVersionsRequest as QuerySeatingPlanVersionsRequest,
      seatingV1SeatingPlan_universal_d_QuerySeatingPlanVersionsResponse as QuerySeatingPlanVersionsResponse,
      PagingMetadataV2$1 as PagingMetadataV2,
      Cursors$1 as Cursors,
      seatingV1SeatingPlan_universal_d_DiscardSeatingPlanVersionsRequest as DiscardSeatingPlanVersionsRequest,
      seatingV1SeatingPlan_universal_d_DiscardSeatingPlanVersionsResponse as DiscardSeatingPlanVersionsResponse,
      seatingV1SeatingPlan_universal_d_RestoreSeatingPlanRequest as RestoreSeatingPlanRequest,
      seatingV1SeatingPlan_universal_d_RestoreSeatingPlanResponse as RestoreSeatingPlanResponse,
      seatingV1SeatingPlan_universal_d_createSeatingPlan as createSeatingPlan,
      seatingV1SeatingPlan_universal_d_CreateSeatingPlanOptions as CreateSeatingPlanOptions,
      seatingV1SeatingPlan_universal_d_updateSeatingPlan as updateSeatingPlan,
      seatingV1SeatingPlan_universal_d_UpdateSeatingPlanOptions as UpdateSeatingPlanOptions,
      seatingV1SeatingPlan_universal_d_copySeatingPlan as copySeatingPlan,
      seatingV1SeatingPlan_universal_d_CopySeatingPlanOptions as CopySeatingPlanOptions,
      seatingV1SeatingPlan_universal_d_querySeatingPlan as querySeatingPlan,
      seatingV1SeatingPlan_universal_d_QuerySeatingPlanOptions as QuerySeatingPlanOptions,
      seatingV1SeatingPlan_universal_d_PlansQueryResult as PlansQueryResult,
      seatingV1SeatingPlan_universal_d_PlansQueryBuilder as PlansQueryBuilder,
      seatingV1SeatingPlan_universal_d_getSeatingPlan as getSeatingPlan,
      seatingV1SeatingPlan_universal_d_GetSeatingPlanOptions as GetSeatingPlanOptions,
      seatingV1SeatingPlan_universal_d_findSeatingPlan as findSeatingPlan,
      seatingV1SeatingPlan_universal_d_FindSeatingPlanOptions as FindSeatingPlanOptions,
      seatingV1SeatingPlan_universal_d_deleteSeatingPlan as deleteSeatingPlan,
      seatingV1SeatingPlan_universal_d_updateSeatingPlanThumbnail as updateSeatingPlanThumbnail,
      seatingV1SeatingPlan_universal_d_getSeatingPlanThumbnail as getSeatingPlanThumbnail,
      seatingV1SeatingPlan_universal_d_saveSeatingPlanVersion as saveSeatingPlanVersion,
      seatingV1SeatingPlan_universal_d_SaveSeatingPlanVersionOptions as SaveSeatingPlanVersionOptions,
      seatingV1SeatingPlan_universal_d_querySeatingPlanVersions as querySeatingPlanVersions,
      seatingV1SeatingPlan_universal_d_discardSeatingPlanVersions as discardSeatingPlanVersions,
      seatingV1SeatingPlan_universal_d_DiscardSeatingPlanVersionsOptions as DiscardSeatingPlanVersionsOptions,
      seatingV1SeatingPlan_universal_d_restoreSeatingPlan as restoreSeatingPlan,
      seatingV1SeatingPlan_universal_d_RestoreSeatingPlanOptions as RestoreSeatingPlanOptions,
    };
  }
  
  interface SeatingReservation {
      /**
       * The id of the reservation
       * @readonly
       */
      _id?: string | null;
      /**
       * The seating plan id
       * @readonly
       */
      seatingPlanId?: string | null;
      /**
       * The external seating plan id
       * @readonly
       */
      externalSeatingPlanId?: string | null;
      /** Reserved places */
      reservedPlaces?: PlaceReservation[];
      /**
       * A client defined external id for cross referencing.
       * Can reference external entities.
       * Format: "{fqdn}:{entity guid}"
       */
      externalId?: string | null;
  }
  interface PlaceReservation {
      /** The place id. */
      _id?: string;
      /**
       * Number of places in the spot. If not provided - defaults to 1.
       * Used to reserve for more that one place in areas.
       */
      capacity?: number | null;
      /**
       * Optional section label.
       * @readonly
       */
      sectionLabel?: string | null;
      /**
       * Area label.
       * @readonly
       */
      areaLabel?: string | null;
      /**
       * Table label.
       * @readonly
       */
      tableLabel?: string | null;
      /**
       * Row label.
       * @readonly
       */
      rowLabel?: string | null;
      /**
       * Seat label in a row or table.
       * @readonly
       */
      seatLabel?: string | null;
  }
  interface SeatingPlanCategoriesSummaryUpdated {
      /** Seating plan id */
      seatingPlanId?: string;
      /** External seating plan id */
      externalSeatingPlanId?: string | null;
      /** Ticket counts by category */
      categories?: CategoryDetails[];
      /**
       * Summary revision.
       * @readonly
       */
      revision?: string | null;
  }
  interface CategoryDetails {
      /**
       * Seating plan id
       * @readonly
       */
      seatingPlanId?: string | null;
      /**
       * External seating plan id
       * @readonly
       */
      externalSeatingPlanId?: string | null;
      /**
       * External category id
       * @readonly
       */
      externalCategoryId?: string | null;
      /**
       * Total capacity in the category
       * @readonly
       */
      totalCapacity?: number | null;
      /**
       * Already reserved capacity
       * @readonly
       */
      reserved?: number | null;
  }
  interface InvalidateCache extends InvalidateCacheGetByOneOf {
      /** Invalidate by msId. NOT recommended, as this will invalidate the entire site cache! */
      metaSiteId?: string;
      /** Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache! */
      siteId?: string;
      /** Invalidate by App */
      app?: App;
      /** Invalidate by page id */
      page?: Page;
      /** Invalidate by URI path */
      uri?: URI;
      /** Invalidate by file (for media files such as PDFs) */
      file?: File;
      /** tell us why you're invalidating the cache. You don't need to add your app name */
      reason?: string | null;
      /** Is local DS */
      localDc?: boolean;
  }
  /** @oneof */
  interface InvalidateCacheGetByOneOf {
      /** Invalidate by msId. NOT recommended, as this will invalidate the entire site cache! */
      metaSiteId?: string;
      /** Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache! */
      siteId?: string;
      /** Invalidate by App */
      app?: App;
      /** Invalidate by page id */
      page?: Page;
      /** Invalidate by URI path */
      uri?: URI;
      /** Invalidate by file (for media files such as PDFs) */
      file?: File;
  }
  interface App {
      /** The AppDefId */
      appDefId?: string;
      /** The instance Id */
      instanceId?: string;
  }
  interface Page {
      /** the msid the page is on */
      metaSiteId?: string;
      /** Invalidate by Page ID */
      pageId?: string;
  }
  interface URI {
      /** the msid the URI is on */
      metaSiteId?: string;
      /** URI path to invalidate (e.g. page/my/path) - without leading/trailing slashes */
      uriPath?: string;
  }
  interface File {
      /** the msid the file is related to */
      metaSiteId?: string;
      /** Invalidate by filename (for media files such as PDFs) */
      fileName?: string;
  }
  interface CreateSeatingReservationRequest {
      /** A reservation to create */
      reservation?: SeatingReservation;
  }
  interface CreateSeatingReservationResponse {
      /** Created reservation */
      reservation?: SeatingReservation;
  }
  interface Places {
      /** Places */
      places?: string[];
  }
  interface UnavailablePlaces {
      /** Places that cannot be reserved */
      unavailablePlaces?: string[];
      /** Reservation error details */
      reservationErrorDetails?: ReservationErrorDetails[];
  }
  interface ReservationErrorDetails {
      /** Place */
      _id?: string;
      /** Available capacity */
      available?: number;
      /** Requested capacity */
      requested?: number;
  }
  interface GetReservationRequest {
      /** The id of the reservation to return */
      _id: string | null;
  }
  interface GetReservationResponse {
      /** Created reservation */
      reservation?: SeatingReservation;
  }
  interface QuerySeatingReservationRequest {
      /** A query object */
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
  interface Paging {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
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
  interface QuerySeatingReservationResponse {
      /** Found reservations */
      reservations?: SeatingReservation[];
      /** Paging meta data */
      metadata?: PagingMetadataV2;
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
  interface DeleteSeatingReservationRequest {
      /** The id of the reservation to delete */
      _id: string | null;
  }
  interface DeleteSeatingReservationResponse {
      /** The deleted reservation */
      reservation?: SeatingReservation;
  }
  interface DeleteSeatingPlaceReservationRequest {
      /** The id of the place reservation to delete */
      _id?: string | null;
      /** The id of the place reservation's reservation */
      reservationId?: string | null;
  }
  interface Empty {
  }
  interface GetReservedPlacesRequest {
      /** Seating plan id */
      _id?: string | null;
  }
  interface GetReservedPlacesResponse {
      /** Reserved places of the plan */
      placeReservations?: PlaceReservation[];
  }
  interface GetSeatingCategoriesSummaryRequest {
      /** Seating plan external id */
      externalId?: string[];
  }
  interface GetSeatingCategoriesSummaryResponse {
      /** Ticket counts by category */
      categories?: CategoryDetails[];
  }
  interface GetSeatingReservationsSummaryRequest {
      /** Filter for seating plan */
      filter: Record<string, any> | null;
  }
  interface GetSeatingReservationsSummaryResponse {
      plan?: SeatingPlan;
      seatingReservationsSummary?: SeatingReservationsSummary;
  }
  interface SeatingPlan {
      /**
       * Auto generated unique plan id
       * @readonly
       */
      _id?: string | null;
      /**
       * A client defined external id for cross referencing.
       * Can reference external entities.
       * Format: "{fqdn}:{entity guid}"
       */
      externalId?: string | null;
      /** Human friendly plan title */
      title?: string | null;
      /** Sections of the plan. Seating plan is divided in high level sections. */
      sections?: Section[];
      /** Categories for plan element grouping. */
      categories?: Category[];
      /**
       * Seating plan created timestamp.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Seating plan updated timestamp.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Total capacity
       * @readonly
       */
      totalCapacity?: number | null;
      /**
       * Total categories
       * @readonly
       */
      totalCategories?: number | null;
      /**
       * Places not assigned to categories
       * @readonly
       */
      uncategorizedPlaces?: Place[];
      /**
       * A version of the seating plan
       * @readonly
       */
      version?: string | null;
      /** Data extensions */
      extendedFields?: ExtendedFields;
      /** Seating Plan UI settings */
      uiProperties?: SeatingPlanUiProperties;
      /**
       * Element groups
       * @internal
       */
      elementGroups?: ElementGroup[];
  }
  interface Section {
      /** Unique section id */
      _id?: number;
      /** Human readable section title */
      title?: string | null;
      /**
       * Client configuration object
       * @readonly
       */
      config?: Record<string, any> | null;
      /** Elements of the section. */
      elements?: Element[];
      /**
       * Total capacity
       * @readonly
       */
      totalCapacity?: number | null;
      /**
       * Is default section
       * @readonly
       */
      default?: boolean;
  }
  interface Element {
      /** Unique element id */
      _id?: number;
      /** User friendly title/label of the element. */
      title?: string | null;
      /** Element type */
      type?: Type;
      /** Capacity. None for Shape type Element. */
      capacity?: number | null;
      /** Assigned to a category */
      categoryId?: number | null;
      /** A place numbering meta data */
      sequencing?: Sequencing;
      /** Place override (by seq_id) */
      overrides?: Place[];
      /**
       * Final place sequence with overrides
       * @readonly
       */
      places?: Place[];
      /** Element reservation options */
      reservationOptions?: ReservationOptions;
      /** Element UI settings */
      uiProperties?: ElementUiProperties;
      /**
       * Element group id
       * @internal
       */
      elementGroupId?: number | null;
      /**
       * Multi row element relevant for MULTI_ROW element type
       * @internal
       */
      multiRowProperties?: MultiRowProperties;
  }
  enum Type {
      AREA = "AREA",
      ROW = "ROW",
      MULTI_ROW = "MULTI_ROW",
      TABLE = "TABLE",
      ROUND_TABLE = "ROUND_TABLE",
      SHAPE = "SHAPE"
  }
  interface Sequencing {
      /** First seq element */
      startAt?: string;
      /** Finite generated seq of labels */
      labels?: string[];
      /** If true - direction right to left. Otherwise left to right. */
      reverseOrder?: boolean | null;
  }
  interface Place {
      /** Local id of the place in the sequence */
      index?: number;
      /**
       * Generated composite unique id in the seating plan.
       * @readonly
       */
      _id?: string | null;
      /** Unique label of the place */
      label?: string;
      /**
       * Max capacity per place
       * @readonly
       */
      capacity?: number | null;
      /**
       * Type of the parent element
       * @readonly
       */
      elementType?: Type;
      /**
       * Assigned category id
       * @readonly
       */
      categoryId?: number | null;
  }
  interface ReservationOptions {
      /** Indicates whether the entire element must be reserved */
      reserveWholeElement?: boolean;
  }
  interface ElementUiProperties {
      x?: number | null;
      y?: number | null;
      zIndex?: number | null;
      width?: number | null;
      height?: number | null;
      rotationAngle?: number | null;
      shapeType?: ShapeTypeEnumType;
      fontSize?: number | null;
      cornerRadius?: number | null;
      seatSpacing?: number | null;
      hideLabel?: boolean | null;
      labelPosition?: Position;
      seatLayout?: number[];
      emptyTopSeatSpaces?: number | null;
      /** needs research */
      text?: string | null;
      /** #F0F0F0 */
      color?: string | null;
      /** #F0F0F0 */
      fillColor?: string | null;
      /** #F0F0F0 */
      strokeColor?: string | null;
      /** px */
      strokeWidth?: number | null;
      opacity?: number | null;
      icon?: Icon;
      image?: Image;
      seatNumbering?: Numbering;
  }
  enum ShapeTypeEnumType {
      UNKNOWN_TYPE = "UNKNOWN_TYPE",
      TEXT = "TEXT",
      RECTANGLE = "RECTANGLE",
      ELLIPSE = "ELLIPSE",
      LINE = "LINE",
      ICON = "ICON",
      IMAGE = "IMAGE"
  }
  enum Position {
      UNKNOWN_POSITION = "UNKNOWN_POSITION",
      LEFT = "LEFT",
      RIGHT = "RIGHT",
      BOTH = "BOTH",
      NONE = "NONE"
  }
  enum Icon {
      UNKNOWN_ICON = "UNKNOWN_ICON",
      ENTER = "ENTER",
      EXIT = "EXIT",
      DRINKS = "DRINKS",
      WC = "WC",
      WC_MEN = "WC_MEN",
      WC_WOMEN = "WC_WOMEN",
      FOOD = "FOOD",
      STAIRS = "STAIRS",
      ELEVATOR = "ELEVATOR",
      SMOKING = "SMOKING",
      CHECKROOM = "CHECKROOM",
      STAGE = "STAGE"
  }
  interface Image {
      /** WixMedia image ID. */
      _id?: string;
      /**
       * Original image height.
       * @readonly
       */
      height?: number;
      /**
       * Original image width.
       * @readonly
       */
      width?: number;
      /** WixMedia image URI. */
      uri?: string | null;
  }
  enum Numbering {
      UNKNOWN_NUMBERING = "UNKNOWN_NUMBERING",
      NUMERIC = "NUMERIC",
      ODD_EVEN = "ODD_EVEN",
      ALPHABETICAL = "ALPHABETICAL"
  }
  interface MultiRowProperties {
      /** Individual rows of the multi row element */
      rows?: RowElement[];
      /** Meta data for vertical labeling */
      verticalSequencing?: VerticalSequencing;
      /** Row spacing */
      rowSpacing?: number | null;
  }
  interface RowElement {
      /** Unique row id */
      _id?: number;
      /** User friendly title/label of the row */
      title?: string | null;
      /** Row capacity */
      capacity?: number | null;
      /** Assigned to a category */
      categoryId?: number | null;
      /** A place numbering meta data for a single row */
      sequencing?: Sequencing;
      /** Row UI settings */
      uiProperties?: RowElementUiProperties;
  }
  interface RowElementUiProperties {
      /** Relative x position to the parent element */
      relativeX?: number | null;
      /** Seat spacing */
      seatSpacing?: number | null;
      /** Label position */
      labelPosition?: Position;
      /** Seat numbering */
      seatNumbering?: Numbering;
  }
  interface VerticalSequencing {
      /** First seq element */
      startAt?: string;
      /** Row numbering */
      rowNumbering?: Numbering;
      /** If true - direction bottom to top. Otherwise top to bottom. */
      reverseOrder?: boolean | null;
  }
  interface Category {
      /** Local category id within the seating plan */
      _id?: number;
      /**
       * A client defined external id for cross referencing.
       * Can reference external entities.
       * Format: "{entity_fqdn}:{entity_id}"
       */
      externalId?: string | null;
      /** Category label */
      title?: string;
      /**
       * Client configuration object
       * @readonly
       */
      config?: Record<string, any> | null;
      /**
       * Total capacity
       * @readonly
       */
      totalCapacity?: number | null;
      /**
       * Possible places
       * @readonly
       */
      places?: Place[];
  }
  interface ExtendedFields {
      /**
       * Extended field data. Each key corresponds to the namespace of the app that created the extended fields.
       * The value of each key is structured according to the schema defined when the extended fields were configured.
       *
       * You can only access fields for which you have the appropriate permissions.
       *
       * Learn more about [extended fields](https://dev.wix.com/docs/rest/articles/getting-started/extended-fields).
       */
      namespaces?: Record<string, Record<string, any>>;
  }
  interface SeatingPlanUiProperties {
      /** #F0F0F0 */
      backgroundColor?: string | null;
      backgroundOpacity?: number | null;
  }
  interface ElementGroup {
      /** Unique element group id */
      _id?: number;
      /** Parent group id */
      parentElementGroupId?: number | null;
      /** Element group UI settings */
      uiProperties?: ElementGroupUiProperties;
  }
  interface ElementGroupUiProperties {
      /** x position of the group */
      x?: number | null;
      /** y position of the group */
      y?: number | null;
      /** width of the group */
      width?: number | null;
      /** height of the group */
      height?: number | null;
      /** rotation angle of the group */
      rotationAngle?: number | null;
  }
  interface SeatingReservationsSummary {
      places?: PlaceReservationDetails[];
  }
  interface PlaceReservationDetails {
      placeId?: string;
      occupied?: number;
  }
  interface RegenerateSummariesRequest {
      /** Seating plan id */
      planId?: string | null;
  }
  interface RegenerateSummariesResponse {
      seatingReservationsSummary?: SeatingReservationsSummary;
      categories?: CategoryDetails[];
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
   * Creates a seating reservation
   * @public
   * @documentationMaturity preview
   * @adminMethod
   * @returns Created reservation
   */
  function createSeatingReservation(options?: CreateSeatingReservationOptions): Promise<SeatingReservation>;
  interface CreateSeatingReservationOptions {
      /** A reservation to create */
      reservation?: SeatingReservation;
  }
  /**
   * Returns available seat counts by category id
   * @param _id - The id of the reservation to return
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @adminMethod
   * @returns Created reservation
   */
  function getReservation(_id: string | null): Promise<SeatingReservation>;
  /**
   * Lists seating reservations by query request
   * @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function querySeatingReservation(): ReservationsQueryBuilder;
  interface QueryCursorResult {
      cursors: Cursors;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface ReservationsQueryResult extends QueryCursorResult {
      items: SeatingReservation[];
      query: ReservationsQueryBuilder;
      next: () => Promise<ReservationsQueryResult>;
      prev: () => Promise<ReservationsQueryResult>;
  }
  interface ReservationsQueryBuilder {
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => ReservationsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => ReservationsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<ReservationsQueryResult>;
  }
  /**
   * Deletes the seating reservation
   * @param _id - The id of the reservation to delete
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @adminMethod
   */
  function deleteSeatingReservation(_id: string | null): Promise<DeleteSeatingReservationResponse>;
  /** @internal
   * @documentationMaturity preview
   */
  function getSeatingCategoriesSummary(options?: GetSeatingCategoriesSummaryOptions): Promise<GetSeatingCategoriesSummaryResponse>;
  interface GetSeatingCategoriesSummaryOptions {
      /** Seating plan external id */
      externalId?: string[];
  }
  /** @param filter - Filter for seating plan
   * @internal
   * @documentationMaturity preview
   * @requiredField filter
   */
  function getSeatingReservationsSummary(filter: Record<string, any> | null): Promise<GetSeatingReservationsSummaryResponse>;
  
  type seatingV1SeatingReservation_universal_d_SeatingReservation = SeatingReservation;
  type seatingV1SeatingReservation_universal_d_PlaceReservation = PlaceReservation;
  type seatingV1SeatingReservation_universal_d_SeatingPlanCategoriesSummaryUpdated = SeatingPlanCategoriesSummaryUpdated;
  type seatingV1SeatingReservation_universal_d_CategoryDetails = CategoryDetails;
  type seatingV1SeatingReservation_universal_d_InvalidateCache = InvalidateCache;
  type seatingV1SeatingReservation_universal_d_InvalidateCacheGetByOneOf = InvalidateCacheGetByOneOf;
  type seatingV1SeatingReservation_universal_d_App = App;
  type seatingV1SeatingReservation_universal_d_Page = Page;
  type seatingV1SeatingReservation_universal_d_URI = URI;
  type seatingV1SeatingReservation_universal_d_File = File;
  type seatingV1SeatingReservation_universal_d_CreateSeatingReservationRequest = CreateSeatingReservationRequest;
  type seatingV1SeatingReservation_universal_d_CreateSeatingReservationResponse = CreateSeatingReservationResponse;
  type seatingV1SeatingReservation_universal_d_Places = Places;
  type seatingV1SeatingReservation_universal_d_UnavailablePlaces = UnavailablePlaces;
  type seatingV1SeatingReservation_universal_d_ReservationErrorDetails = ReservationErrorDetails;
  type seatingV1SeatingReservation_universal_d_GetReservationRequest = GetReservationRequest;
  type seatingV1SeatingReservation_universal_d_GetReservationResponse = GetReservationResponse;
  type seatingV1SeatingReservation_universal_d_QuerySeatingReservationRequest = QuerySeatingReservationRequest;
  type seatingV1SeatingReservation_universal_d_QueryV2 = QueryV2;
  type seatingV1SeatingReservation_universal_d_QueryV2PagingMethodOneOf = QueryV2PagingMethodOneOf;
  type seatingV1SeatingReservation_universal_d_Sorting = Sorting;
  type seatingV1SeatingReservation_universal_d_SortOrder = SortOrder;
  const seatingV1SeatingReservation_universal_d_SortOrder: typeof SortOrder;
  type seatingV1SeatingReservation_universal_d_Paging = Paging;
  type seatingV1SeatingReservation_universal_d_CursorPaging = CursorPaging;
  type seatingV1SeatingReservation_universal_d_QuerySeatingReservationResponse = QuerySeatingReservationResponse;
  type seatingV1SeatingReservation_universal_d_PagingMetadataV2 = PagingMetadataV2;
  type seatingV1SeatingReservation_universal_d_Cursors = Cursors;
  type seatingV1SeatingReservation_universal_d_DeleteSeatingReservationRequest = DeleteSeatingReservationRequest;
  type seatingV1SeatingReservation_universal_d_DeleteSeatingReservationResponse = DeleteSeatingReservationResponse;
  type seatingV1SeatingReservation_universal_d_DeleteSeatingPlaceReservationRequest = DeleteSeatingPlaceReservationRequest;
  type seatingV1SeatingReservation_universal_d_Empty = Empty;
  type seatingV1SeatingReservation_universal_d_GetReservedPlacesRequest = GetReservedPlacesRequest;
  type seatingV1SeatingReservation_universal_d_GetReservedPlacesResponse = GetReservedPlacesResponse;
  type seatingV1SeatingReservation_universal_d_GetSeatingCategoriesSummaryRequest = GetSeatingCategoriesSummaryRequest;
  type seatingV1SeatingReservation_universal_d_GetSeatingCategoriesSummaryResponse = GetSeatingCategoriesSummaryResponse;
  type seatingV1SeatingReservation_universal_d_GetSeatingReservationsSummaryRequest = GetSeatingReservationsSummaryRequest;
  type seatingV1SeatingReservation_universal_d_GetSeatingReservationsSummaryResponse = GetSeatingReservationsSummaryResponse;
  type seatingV1SeatingReservation_universal_d_SeatingPlan = SeatingPlan;
  type seatingV1SeatingReservation_universal_d_Section = Section;
  type seatingV1SeatingReservation_universal_d_Element = Element;
  type seatingV1SeatingReservation_universal_d_Type = Type;
  const seatingV1SeatingReservation_universal_d_Type: typeof Type;
  type seatingV1SeatingReservation_universal_d_Sequencing = Sequencing;
  type seatingV1SeatingReservation_universal_d_Place = Place;
  type seatingV1SeatingReservation_universal_d_ReservationOptions = ReservationOptions;
  type seatingV1SeatingReservation_universal_d_ElementUiProperties = ElementUiProperties;
  type seatingV1SeatingReservation_universal_d_ShapeTypeEnumType = ShapeTypeEnumType;
  const seatingV1SeatingReservation_universal_d_ShapeTypeEnumType: typeof ShapeTypeEnumType;
  type seatingV1SeatingReservation_universal_d_Position = Position;
  const seatingV1SeatingReservation_universal_d_Position: typeof Position;
  type seatingV1SeatingReservation_universal_d_Icon = Icon;
  const seatingV1SeatingReservation_universal_d_Icon: typeof Icon;
  type seatingV1SeatingReservation_universal_d_Image = Image;
  type seatingV1SeatingReservation_universal_d_Numbering = Numbering;
  const seatingV1SeatingReservation_universal_d_Numbering: typeof Numbering;
  type seatingV1SeatingReservation_universal_d_MultiRowProperties = MultiRowProperties;
  type seatingV1SeatingReservation_universal_d_RowElement = RowElement;
  type seatingV1SeatingReservation_universal_d_RowElementUiProperties = RowElementUiProperties;
  type seatingV1SeatingReservation_universal_d_VerticalSequencing = VerticalSequencing;
  type seatingV1SeatingReservation_universal_d_Category = Category;
  type seatingV1SeatingReservation_universal_d_ExtendedFields = ExtendedFields;
  type seatingV1SeatingReservation_universal_d_SeatingPlanUiProperties = SeatingPlanUiProperties;
  type seatingV1SeatingReservation_universal_d_ElementGroup = ElementGroup;
  type seatingV1SeatingReservation_universal_d_ElementGroupUiProperties = ElementGroupUiProperties;
  type seatingV1SeatingReservation_universal_d_SeatingReservationsSummary = SeatingReservationsSummary;
  type seatingV1SeatingReservation_universal_d_PlaceReservationDetails = PlaceReservationDetails;
  type seatingV1SeatingReservation_universal_d_RegenerateSummariesRequest = RegenerateSummariesRequest;
  type seatingV1SeatingReservation_universal_d_RegenerateSummariesResponse = RegenerateSummariesResponse;
  type seatingV1SeatingReservation_universal_d_DomainEvent = DomainEvent;
  type seatingV1SeatingReservation_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type seatingV1SeatingReservation_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type seatingV1SeatingReservation_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type seatingV1SeatingReservation_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type seatingV1SeatingReservation_universal_d_ActionEvent = ActionEvent;
  type seatingV1SeatingReservation_universal_d_MessageEnvelope = MessageEnvelope;
  type seatingV1SeatingReservation_universal_d_IdentificationData = IdentificationData;
  type seatingV1SeatingReservation_universal_d_IdentificationDataIdOneOf = IdentificationDataIdOneOf;
  type seatingV1SeatingReservation_universal_d_WebhookIdentityType = WebhookIdentityType;
  const seatingV1SeatingReservation_universal_d_WebhookIdentityType: typeof WebhookIdentityType;
  const seatingV1SeatingReservation_universal_d_createSeatingReservation: typeof createSeatingReservation;
  type seatingV1SeatingReservation_universal_d_CreateSeatingReservationOptions = CreateSeatingReservationOptions;
  const seatingV1SeatingReservation_universal_d_getReservation: typeof getReservation;
  const seatingV1SeatingReservation_universal_d_querySeatingReservation: typeof querySeatingReservation;
  type seatingV1SeatingReservation_universal_d_ReservationsQueryResult = ReservationsQueryResult;
  type seatingV1SeatingReservation_universal_d_ReservationsQueryBuilder = ReservationsQueryBuilder;
  const seatingV1SeatingReservation_universal_d_deleteSeatingReservation: typeof deleteSeatingReservation;
  const seatingV1SeatingReservation_universal_d_getSeatingCategoriesSummary: typeof getSeatingCategoriesSummary;
  type seatingV1SeatingReservation_universal_d_GetSeatingCategoriesSummaryOptions = GetSeatingCategoriesSummaryOptions;
  const seatingV1SeatingReservation_universal_d_getSeatingReservationsSummary: typeof getSeatingReservationsSummary;
  namespace seatingV1SeatingReservation_universal_d {
    export {
      seatingV1SeatingReservation_universal_d_SeatingReservation as SeatingReservation,
      seatingV1SeatingReservation_universal_d_PlaceReservation as PlaceReservation,
      seatingV1SeatingReservation_universal_d_SeatingPlanCategoriesSummaryUpdated as SeatingPlanCategoriesSummaryUpdated,
      seatingV1SeatingReservation_universal_d_CategoryDetails as CategoryDetails,
      seatingV1SeatingReservation_universal_d_InvalidateCache as InvalidateCache,
      seatingV1SeatingReservation_universal_d_InvalidateCacheGetByOneOf as InvalidateCacheGetByOneOf,
      seatingV1SeatingReservation_universal_d_App as App,
      seatingV1SeatingReservation_universal_d_Page as Page,
      seatingV1SeatingReservation_universal_d_URI as URI,
      seatingV1SeatingReservation_universal_d_File as File,
      seatingV1SeatingReservation_universal_d_CreateSeatingReservationRequest as CreateSeatingReservationRequest,
      seatingV1SeatingReservation_universal_d_CreateSeatingReservationResponse as CreateSeatingReservationResponse,
      seatingV1SeatingReservation_universal_d_Places as Places,
      seatingV1SeatingReservation_universal_d_UnavailablePlaces as UnavailablePlaces,
      seatingV1SeatingReservation_universal_d_ReservationErrorDetails as ReservationErrorDetails,
      seatingV1SeatingReservation_universal_d_GetReservationRequest as GetReservationRequest,
      seatingV1SeatingReservation_universal_d_GetReservationResponse as GetReservationResponse,
      seatingV1SeatingReservation_universal_d_QuerySeatingReservationRequest as QuerySeatingReservationRequest,
      seatingV1SeatingReservation_universal_d_QueryV2 as QueryV2,
      seatingV1SeatingReservation_universal_d_QueryV2PagingMethodOneOf as QueryV2PagingMethodOneOf,
      seatingV1SeatingReservation_universal_d_Sorting as Sorting,
      seatingV1SeatingReservation_universal_d_SortOrder as SortOrder,
      seatingV1SeatingReservation_universal_d_Paging as Paging,
      seatingV1SeatingReservation_universal_d_CursorPaging as CursorPaging,
      seatingV1SeatingReservation_universal_d_QuerySeatingReservationResponse as QuerySeatingReservationResponse,
      seatingV1SeatingReservation_universal_d_PagingMetadataV2 as PagingMetadataV2,
      seatingV1SeatingReservation_universal_d_Cursors as Cursors,
      seatingV1SeatingReservation_universal_d_DeleteSeatingReservationRequest as DeleteSeatingReservationRequest,
      seatingV1SeatingReservation_universal_d_DeleteSeatingReservationResponse as DeleteSeatingReservationResponse,
      seatingV1SeatingReservation_universal_d_DeleteSeatingPlaceReservationRequest as DeleteSeatingPlaceReservationRequest,
      seatingV1SeatingReservation_universal_d_Empty as Empty,
      seatingV1SeatingReservation_universal_d_GetReservedPlacesRequest as GetReservedPlacesRequest,
      seatingV1SeatingReservation_universal_d_GetReservedPlacesResponse as GetReservedPlacesResponse,
      seatingV1SeatingReservation_universal_d_GetSeatingCategoriesSummaryRequest as GetSeatingCategoriesSummaryRequest,
      seatingV1SeatingReservation_universal_d_GetSeatingCategoriesSummaryResponse as GetSeatingCategoriesSummaryResponse,
      seatingV1SeatingReservation_universal_d_GetSeatingReservationsSummaryRequest as GetSeatingReservationsSummaryRequest,
      seatingV1SeatingReservation_universal_d_GetSeatingReservationsSummaryResponse as GetSeatingReservationsSummaryResponse,
      seatingV1SeatingReservation_universal_d_SeatingPlan as SeatingPlan,
      seatingV1SeatingReservation_universal_d_Section as Section,
      seatingV1SeatingReservation_universal_d_Element as Element,
      seatingV1SeatingReservation_universal_d_Type as Type,
      seatingV1SeatingReservation_universal_d_Sequencing as Sequencing,
      seatingV1SeatingReservation_universal_d_Place as Place,
      seatingV1SeatingReservation_universal_d_ReservationOptions as ReservationOptions,
      seatingV1SeatingReservation_universal_d_ElementUiProperties as ElementUiProperties,
      seatingV1SeatingReservation_universal_d_ShapeTypeEnumType as ShapeTypeEnumType,
      seatingV1SeatingReservation_universal_d_Position as Position,
      seatingV1SeatingReservation_universal_d_Icon as Icon,
      seatingV1SeatingReservation_universal_d_Image as Image,
      seatingV1SeatingReservation_universal_d_Numbering as Numbering,
      seatingV1SeatingReservation_universal_d_MultiRowProperties as MultiRowProperties,
      seatingV1SeatingReservation_universal_d_RowElement as RowElement,
      seatingV1SeatingReservation_universal_d_RowElementUiProperties as RowElementUiProperties,
      seatingV1SeatingReservation_universal_d_VerticalSequencing as VerticalSequencing,
      seatingV1SeatingReservation_universal_d_Category as Category,
      seatingV1SeatingReservation_universal_d_ExtendedFields as ExtendedFields,
      seatingV1SeatingReservation_universal_d_SeatingPlanUiProperties as SeatingPlanUiProperties,
      seatingV1SeatingReservation_universal_d_ElementGroup as ElementGroup,
      seatingV1SeatingReservation_universal_d_ElementGroupUiProperties as ElementGroupUiProperties,
      seatingV1SeatingReservation_universal_d_SeatingReservationsSummary as SeatingReservationsSummary,
      seatingV1SeatingReservation_universal_d_PlaceReservationDetails as PlaceReservationDetails,
      seatingV1SeatingReservation_universal_d_RegenerateSummariesRequest as RegenerateSummariesRequest,
      seatingV1SeatingReservation_universal_d_RegenerateSummariesResponse as RegenerateSummariesResponse,
      seatingV1SeatingReservation_universal_d_DomainEvent as DomainEvent,
      seatingV1SeatingReservation_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      seatingV1SeatingReservation_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      seatingV1SeatingReservation_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      seatingV1SeatingReservation_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      seatingV1SeatingReservation_universal_d_ActionEvent as ActionEvent,
      seatingV1SeatingReservation_universal_d_MessageEnvelope as MessageEnvelope,
      seatingV1SeatingReservation_universal_d_IdentificationData as IdentificationData,
      seatingV1SeatingReservation_universal_d_IdentificationDataIdOneOf as IdentificationDataIdOneOf,
      seatingV1SeatingReservation_universal_d_WebhookIdentityType as WebhookIdentityType,
      seatingV1SeatingReservation_universal_d_createSeatingReservation as createSeatingReservation,
      seatingV1SeatingReservation_universal_d_CreateSeatingReservationOptions as CreateSeatingReservationOptions,
      seatingV1SeatingReservation_universal_d_getReservation as getReservation,
      seatingV1SeatingReservation_universal_d_querySeatingReservation as querySeatingReservation,
      seatingV1SeatingReservation_universal_d_ReservationsQueryResult as ReservationsQueryResult,
      seatingV1SeatingReservation_universal_d_ReservationsQueryBuilder as ReservationsQueryBuilder,
      seatingV1SeatingReservation_universal_d_deleteSeatingReservation as deleteSeatingReservation,
      seatingV1SeatingReservation_universal_d_getSeatingCategoriesSummary as getSeatingCategoriesSummary,
      seatingV1SeatingReservation_universal_d_GetSeatingCategoriesSummaryOptions as GetSeatingCategoriesSummaryOptions,
      seatingV1SeatingReservation_universal_d_getSeatingReservationsSummary as getSeatingReservationsSummary,
    };
  }
  
  export { seatingV1SeatingPlan_universal_d as seatingPlan, seatingV1SeatingReservation_universal_d as seatingReservation };
}
