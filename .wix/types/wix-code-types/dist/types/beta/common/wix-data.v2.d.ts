declare module "wix-data.v2" {
  /** An external database connection defines a connection between an external database and a Wix site or project. */
  interface ExternalDatabaseConnection {
      /**
       * Name of the external database connection.
       * An external database connection may connect to one or more external data collections or tables.
       * These are represented as `connectionName/dataCollectionId`.
       */
      name?: string;
      /** Base URL for provisioning and managing data in the external database. For example: `https://example.com/my-external-database`. */
      endpoint?: string | null;
      /**
       * Settings passed to the external database connection as part of each request.
       * These settings can relate to authentication, tenancy, or provide any other information needed for processing a request.
       * Their content and structure depend on the specific requirements of the external database's API.
       */
      configuration?: Record<string, any> | null;
      /**
       * Status of the external database connection. Includes whether the connection was established successfully, and if not, the reason for the failure.
       * @readonly
       */
      connectionStatus?: ConnectionStatus;
      /**
       * The protocol version of the external database connection.
       *
       * Supported values: `V1`, `V2`, `V3`.
       * @internal
       * @readonly
       */
      protocolVersion?: ProtocolVersion;
      /**
       * The public key used to validate requests to the external database. Applicable only when the protocol version is `V3`.
       * @internal
       * @readonly
       */
      publicKey?: string | null;
      /**
       * The external database's capabilities.
       * @readonly
       */
      capabilities?: Capabilities;
      /**
       * The ID of the Dev Center app used to integrate this external database.
       * @internal
       * @readonly
       */
      applicationId?: string | null;
  }
  enum CauseOfFailure {
      /** No connection failure. */
      NONE = "NONE",
      /** General communication failure. */
      COMMUNICATION_FAILURE = "COMMUNICATION_FAILURE",
      /** External database host is unreachable. */
      DESTINATION_HOST_UNREACHABLE = "DESTINATION_HOST_UNREACHABLE",
      /** Unauthorized to access the external database. */
      UNAUTHORIZED = "UNAUTHORIZED",
      /** `endpoint` is not set. */
      DESTINATION_ENDPOINT_NOT_DEFINED = "DESTINATION_ENDPOINT_NOT_DEFINED"
  }
  enum CollectionsFound {
      UNKNOWN = "UNKNOWN",
      YES = "YES",
      NO = "NO"
  }
  enum FieldType$1 {
      UNKNOWN_FIELD_TYPE = "UNKNOWN_FIELD_TYPE",
      TEXT = "TEXT",
      NUMBER = "NUMBER",
      DATE = "DATE",
      DATETIME = "DATETIME",
      IMAGE = "IMAGE",
      BOOLEAN = "BOOLEAN",
      DOCUMENT = "DOCUMENT",
      URL = "URL",
      RICH_TEXT = "RICH_TEXT",
      VIDEO = "VIDEO",
      ANY = "ANY",
      ARRAY_STRING = "ARRAY_STRING",
      ARRAY_DOCUMENT = "ARRAY_DOCUMENT",
      AUDIO = "AUDIO",
      TIME = "TIME",
      LANGUAGE = "LANGUAGE",
      RICH_CONTENT = "RICH_CONTENT",
      MEDIA_GALLERY = "MEDIA_GALLERY",
      ADDRESS = "ADDRESS",
      PAGE_LINK = "PAGE_LINK",
      REFERENCE = "REFERENCE",
      MULTI_REFERENCE = "MULTI_REFERENCE",
      OBJECT = "OBJECT",
      ARRAY = "ARRAY",
      /** Deprecated - can’t be added to collections. Can only appear in older collections. */
      LEGACY_TIME = "LEGACY_TIME",
      /** Deprecated - can’t be added to collections. Can only appear in older collections. */
      LEGACY_BOOK = "LEGACY_BOOK",
      /** Deprecated - can’t be added to collections. Can only appear in older collections. */
      LEGACY_EXTERNAL_URL = "LEGACY_EXTERNAL_URL",
      /** Deprecated - can’t be added to collections. Can only appear in older collections. */
      LEGACY_BROKEN_REFERENCE = "LEGACY_BROKEN_REFERENCE",
      /** Deprecated - can’t be added to collections. Can only appear in older collections. */
      LEGACY_IMAGE = "LEGACY_IMAGE",
      /** Deprecated - can’t be added to collections. Can only appear in older collections. */
      LEGACY_COLOR = "LEGACY_COLOR",
      /** Deprecated - can’t be added to collections. Can only appear in older collections. */
      LEGACY_EXTERNAL_VIDEO = "LEGACY_EXTERNAL_VIDEO"
  }
  interface ConnectionStatus {
      /** Whether the connection was established successfully. */
      successful?: boolean;
      /**
       * If and why a connection attempt failed.
       * + `NONE`: No connection failure.
       * + `COMMUNICATION_FAILURE`: General communication failure.
       * + `DESTINATION_HOST_UNREACHABLE`: External database host is unreachable.
       * + `UNAUTHORIZED`: Unauthorized to access external database.
       * + `DESTINATION_ENDPOINT_NOT_DEFINED`: `Endpoint` property is not set.
       */
      causeOfFailure?: CauseOfFailure;
      /**
       * Whether the external database has existing collections. Possible values are:
       * + `UNKNOWN`: The attempt to connect to the external database failed, so status is unknown.
       * + `NO`: External database does not have any existing collections.
       * + `YES`: External database has existing collections.
       * @readonly
       */
      hasCollections?: CollectionsFound;
  }
  enum ProtocolVersion {
      UNKNOWN_PROTOCOL_VERSION = "UNKNOWN_PROTOCOL_VERSION",
      V1 = "V1",
      V2 = "V2",
      V3 = "V3"
  }
  interface Capabilities {
      /** Whether the external database supports creating new collections, updating the structure of existing collections, or deleting them. */
      collectionModificationsSupported?: boolean;
      /**
       * Field types the external database supports.
       * This field only applies when `collectionModificationsSupported` is `true`.
       */
      fieldTypes?: FieldType$1[];
  }
  interface GetExternalDatabaseConnectionRequest {
      /** Name of the external database connection to retrieve. */
      name: string;
  }
  interface GetExternalDatabaseConnectionResponse {
      /** Details of the external database connection requested. */
      externalDatabaseConnection?: ExternalDatabaseConnection;
  }
  interface ListExternalDatabaseConnectionsRequest {
      /** Paging */
      paging?: Paging$3;
  }
  interface Paging$3 {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface ListExternalDatabaseConnectionsResponse {
      /** List of external database connections. */
      externalDatabaseConnections?: ExternalDatabaseConnection[];
      /** Paging metadata */
      pagingMetadata?: PagingMetadata$1;
  }
  interface PagingMetadata$1 {
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
  interface CreateExternalDatabaseConnectionRequest {
      /** External database connection details. */
      externalDatabaseConnection: ExternalDatabaseConnection;
      /** Connection type. */
      connectionType: ConnectionType;
      /**
       * Indicates if database is managed by WIX.
       * @internal
       */
      databaseManagedByWix?: boolean;
  }
  enum ConnectionType {
      /** Unknown connection type. */
      UNKNOWN_CONNECTION_TYPE = "UNKNOWN_CONNECTION_TYPE",
      /**
       * Connection to database adapter that implements legacy External Database Collections SPI (protocol version 1 or 2)
       * https://www.wix.com/velo/reference/spis/external-database-collections/introduction
       */
      STANDALONE = "STANDALONE",
      /**
       * Connection to database adapter that implements External Database SPI (protocol version 3)
       * https://dev.wix.com/docs/rest/internal-only/wix-data/external-database-spi/introduction
       * https://dev.wix.com/docs/rest/articles/getting-started/service-provider-interface
       */
      WIX_SPI = "WIX_SPI"
  }
  interface CreateExternalDatabaseConnectionResponse {
      /** Details of external database connection created. */
      externalDatabaseConnection?: ExternalDatabaseConnection;
  }
  interface UpdateExternalDatabaseConnectionRequest {
      /** Updated external database connection details. The existing connection is replaced with this version. */
      externalDatabaseConnection: ExternalDatabaseConnection;
  }
  interface UpdateExternalDatabaseConnectionResponse {
      /** Updated external database connection details. */
      externalDatabaseConnection?: ExternalDatabaseConnection;
  }
  interface DeleteExternalDatabaseConnectionRequest {
      /** Name of the external database connection to delete. */
      name: string;
  }
  interface DeleteExternalDatabaseConnectionResponse {
  }
  interface DomainEvent$2 extends DomainEventBodyOneOf$2 {
      createdEvent?: EntityCreatedEvent$2;
      updatedEvent?: EntityUpdatedEvent$2;
      deletedEvent?: EntityDeletedEvent$2;
      actionEvent?: ActionEvent$2;
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
  interface DomainEventBodyOneOf$2 {
      createdEvent?: EntityCreatedEvent$2;
      updatedEvent?: EntityUpdatedEvent$2;
      deletedEvent?: EntityDeletedEvent$2;
      actionEvent?: ActionEvent$2;
  }
  interface EntityCreatedEvent$2 {
      entityAsJson?: string;
      /**
       * Indicates the event was triggered by a restore-from-trashbin operation for a previously deleted entity
       * @internal
       */
      triggeredByUndelete?: boolean | null;
  }
  interface EntityUpdatedEvent$2 {
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
  interface EntityDeletedEvent$2 {
      /**
       * Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled
       * @internal
       */
      movedToTrash?: boolean | null;
      /** Entity that was deleted */
      deletedEntityAsJson?: string | null;
  }
  interface ActionEvent$2 {
      bodyAsJson?: string;
  }
  interface MessageEnvelope$2 {
      /** App instance ID. */
      instanceId?: string | null;
      /** Event type. */
      eventType?: string;
      /** The identification type and identity data. */
      identity?: IdentificationData$2;
      /** Stringify payload. */
      data?: string;
  }
  interface IdentificationData$2 extends IdentificationDataIdOneOf$2 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
      /** @readonly */
      identityType?: WebhookIdentityType$2;
  }
  /** @oneof */
  interface IdentificationDataIdOneOf$2 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
  }
  enum WebhookIdentityType$2 {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  /**
   * Retrieves an external database connection by name.
   * @param name - Name of the external database connection to retrieve.
   * @public
   * @documentationMaturity preview
   * @requiredField name
   * @adminMethod
   * @returns Details of the external database connection requested.
   */
  function getExternalDatabaseConnection(name: string): Promise<ExternalDatabaseConnection>;
  /**
   * Retrieves a list of all external database collections associated with the site or project.
   * @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function listExternalDatabaseConnections(options?: ListExternalDatabaseConnectionsOptions): Promise<ListExternalDatabaseConnectionsResponse>;
  interface ListExternalDatabaseConnectionsOptions {
      /** Paging */
      paging?: Paging$3;
  }
  /**
   * Creates a new external database connection.
   *
   * The `externalDatabaseConnection` parameter must include a `name`, `endpoint`, and `configuration` details for the external database.
   * If any of these are missing, the external database connection isn't created.
   * @param externalDatabaseConnection - External database connection details.
   * @public
   * @documentationMaturity preview
   * @requiredField externalDatabaseConnection
   * @requiredField externalDatabaseConnection.name
   * @requiredField options.connectionType
   * @param options - Options for creating an external database connection.
   * @adminMethod
   * @returns Details of external database connection created.
   */
  function createExternalDatabaseConnection(externalDatabaseConnection: ExternalDatabaseConnection, options?: CreateExternalDatabaseConnectionOptions): Promise<ExternalDatabaseConnection>;
  interface CreateExternalDatabaseConnectionOptions {
      /** Connection type. */
      connectionType: ConnectionType;
      /**
       * Indicates if database is managed by WIX.
       * @internal
       */
      databaseManagedByWix?: boolean;
  }
  /**
   * Updates an external database connection.
   *
   * An external database collection name must be provided in `name`.
   * If an existing external database connection is found with the same name, that connection's details are updated.
   * If no external database connection has that name, the request fails.
   *
   * > **Note:** After an external database connection is updated, it only contains the values provided in the request. All previous values are lost.
   * @param name - Name of the external database connection.
   * An external database connection may connect to one or more external data collections or tables.
   * These are represented as `connectionName/dataCollectionId`.
   * @public
   * @documentationMaturity preview
   * @requiredField externalDatabaseConnection
   * @requiredField name
   * @param options - Options for updating an external database connection.
   * @param externalDatabaseConnection - Updated external database connection details. The existing connection is replaced with this version.
   * @adminMethod
   * @returns Updated external database connection details.
   */
  function updateExternalDatabaseConnection(name: string, externalDatabaseConnection: UpdateExternalDatabaseConnection): Promise<ExternalDatabaseConnection>;
  interface UpdateExternalDatabaseConnection {
      /** Base URL for provisioning and managing data in the external database. For example: `https://example.com/my-external-database`. */
      endpoint?: string | null;
      /**
       * Settings passed to the external database connection as part of each request.
       * These settings can relate to authentication, tenancy, or provide any other information needed for processing a request.
       * Their content and structure depend on the specific requirements of the external database's API.
       */
      configuration?: Record<string, any> | null;
      /**
       * Status of the external database connection. Includes whether the connection was established successfully, and if not, the reason for the failure.
       * @readonly
       */
      connectionStatus?: ConnectionStatus;
      /**
       * The protocol version of the external database connection.
       *
       * Supported values: `V1`, `V2`, `V3`.
       * @internal
       * @readonly
       */
      protocolVersion?: ProtocolVersion;
      /**
       * The public key used to validate requests to the external database. Applicable only when the protocol version is `V3`.
       * @internal
       * @readonly
       */
      publicKey?: string | null;
      /**
       * The external database's capabilities.
       * @readonly
       */
      capabilities?: Capabilities;
      /**
       * The ID of the Dev Center app used to integrate this external database.
       * @internal
       * @readonly
       */
      applicationId?: string | null;
  }
  /**
   * Deletes an external database connection.
   *
   * > **Note:** Once an external database connection is deleted, it can't be restored. To reconnect the database you need to create a new external database connection.
   * @param name - Name of the external database connection to delete.
   * @public
   * @documentationMaturity preview
   * @requiredField name
   * @adminMethod
   */
  function deleteExternalDatabaseConnection(name: string): Promise<void>;
  
  type dataV1ExternalDatabaseConnection_universal_d_ExternalDatabaseConnection = ExternalDatabaseConnection;
  type dataV1ExternalDatabaseConnection_universal_d_CauseOfFailure = CauseOfFailure;
  const dataV1ExternalDatabaseConnection_universal_d_CauseOfFailure: typeof CauseOfFailure;
  type dataV1ExternalDatabaseConnection_universal_d_CollectionsFound = CollectionsFound;
  const dataV1ExternalDatabaseConnection_universal_d_CollectionsFound: typeof CollectionsFound;
  type dataV1ExternalDatabaseConnection_universal_d_ConnectionStatus = ConnectionStatus;
  type dataV1ExternalDatabaseConnection_universal_d_ProtocolVersion = ProtocolVersion;
  const dataV1ExternalDatabaseConnection_universal_d_ProtocolVersion: typeof ProtocolVersion;
  type dataV1ExternalDatabaseConnection_universal_d_Capabilities = Capabilities;
  type dataV1ExternalDatabaseConnection_universal_d_GetExternalDatabaseConnectionRequest = GetExternalDatabaseConnectionRequest;
  type dataV1ExternalDatabaseConnection_universal_d_GetExternalDatabaseConnectionResponse = GetExternalDatabaseConnectionResponse;
  type dataV1ExternalDatabaseConnection_universal_d_ListExternalDatabaseConnectionsRequest = ListExternalDatabaseConnectionsRequest;
  type dataV1ExternalDatabaseConnection_universal_d_ListExternalDatabaseConnectionsResponse = ListExternalDatabaseConnectionsResponse;
  type dataV1ExternalDatabaseConnection_universal_d_CreateExternalDatabaseConnectionRequest = CreateExternalDatabaseConnectionRequest;
  type dataV1ExternalDatabaseConnection_universal_d_ConnectionType = ConnectionType;
  const dataV1ExternalDatabaseConnection_universal_d_ConnectionType: typeof ConnectionType;
  type dataV1ExternalDatabaseConnection_universal_d_CreateExternalDatabaseConnectionResponse = CreateExternalDatabaseConnectionResponse;
  type dataV1ExternalDatabaseConnection_universal_d_UpdateExternalDatabaseConnectionRequest = UpdateExternalDatabaseConnectionRequest;
  type dataV1ExternalDatabaseConnection_universal_d_UpdateExternalDatabaseConnectionResponse = UpdateExternalDatabaseConnectionResponse;
  type dataV1ExternalDatabaseConnection_universal_d_DeleteExternalDatabaseConnectionRequest = DeleteExternalDatabaseConnectionRequest;
  type dataV1ExternalDatabaseConnection_universal_d_DeleteExternalDatabaseConnectionResponse = DeleteExternalDatabaseConnectionResponse;
  const dataV1ExternalDatabaseConnection_universal_d_getExternalDatabaseConnection: typeof getExternalDatabaseConnection;
  const dataV1ExternalDatabaseConnection_universal_d_listExternalDatabaseConnections: typeof listExternalDatabaseConnections;
  type dataV1ExternalDatabaseConnection_universal_d_ListExternalDatabaseConnectionsOptions = ListExternalDatabaseConnectionsOptions;
  const dataV1ExternalDatabaseConnection_universal_d_createExternalDatabaseConnection: typeof createExternalDatabaseConnection;
  type dataV1ExternalDatabaseConnection_universal_d_CreateExternalDatabaseConnectionOptions = CreateExternalDatabaseConnectionOptions;
  const dataV1ExternalDatabaseConnection_universal_d_updateExternalDatabaseConnection: typeof updateExternalDatabaseConnection;
  type dataV1ExternalDatabaseConnection_universal_d_UpdateExternalDatabaseConnection = UpdateExternalDatabaseConnection;
  const dataV1ExternalDatabaseConnection_universal_d_deleteExternalDatabaseConnection: typeof deleteExternalDatabaseConnection;
  namespace dataV1ExternalDatabaseConnection_universal_d {
    export {
      dataV1ExternalDatabaseConnection_universal_d_ExternalDatabaseConnection as ExternalDatabaseConnection,
      dataV1ExternalDatabaseConnection_universal_d_CauseOfFailure as CauseOfFailure,
      dataV1ExternalDatabaseConnection_universal_d_CollectionsFound as CollectionsFound,
      FieldType$1 as FieldType,
      dataV1ExternalDatabaseConnection_universal_d_ConnectionStatus as ConnectionStatus,
      dataV1ExternalDatabaseConnection_universal_d_ProtocolVersion as ProtocolVersion,
      dataV1ExternalDatabaseConnection_universal_d_Capabilities as Capabilities,
      dataV1ExternalDatabaseConnection_universal_d_GetExternalDatabaseConnectionRequest as GetExternalDatabaseConnectionRequest,
      dataV1ExternalDatabaseConnection_universal_d_GetExternalDatabaseConnectionResponse as GetExternalDatabaseConnectionResponse,
      dataV1ExternalDatabaseConnection_universal_d_ListExternalDatabaseConnectionsRequest as ListExternalDatabaseConnectionsRequest,
      Paging$3 as Paging,
      dataV1ExternalDatabaseConnection_universal_d_ListExternalDatabaseConnectionsResponse as ListExternalDatabaseConnectionsResponse,
      PagingMetadata$1 as PagingMetadata,
      dataV1ExternalDatabaseConnection_universal_d_CreateExternalDatabaseConnectionRequest as CreateExternalDatabaseConnectionRequest,
      dataV1ExternalDatabaseConnection_universal_d_ConnectionType as ConnectionType,
      dataV1ExternalDatabaseConnection_universal_d_CreateExternalDatabaseConnectionResponse as CreateExternalDatabaseConnectionResponse,
      dataV1ExternalDatabaseConnection_universal_d_UpdateExternalDatabaseConnectionRequest as UpdateExternalDatabaseConnectionRequest,
      dataV1ExternalDatabaseConnection_universal_d_UpdateExternalDatabaseConnectionResponse as UpdateExternalDatabaseConnectionResponse,
      dataV1ExternalDatabaseConnection_universal_d_DeleteExternalDatabaseConnectionRequest as DeleteExternalDatabaseConnectionRequest,
      dataV1ExternalDatabaseConnection_universal_d_DeleteExternalDatabaseConnectionResponse as DeleteExternalDatabaseConnectionResponse,
      DomainEvent$2 as DomainEvent,
      DomainEventBodyOneOf$2 as DomainEventBodyOneOf,
      EntityCreatedEvent$2 as EntityCreatedEvent,
      EntityUpdatedEvent$2 as EntityUpdatedEvent,
      EntityDeletedEvent$2 as EntityDeletedEvent,
      ActionEvent$2 as ActionEvent,
      MessageEnvelope$2 as MessageEnvelope,
      IdentificationData$2 as IdentificationData,
      IdentificationDataIdOneOf$2 as IdentificationDataIdOneOf,
      WebhookIdentityType$2 as WebhookIdentityType,
      dataV1ExternalDatabaseConnection_universal_d_getExternalDatabaseConnection as getExternalDatabaseConnection,
      dataV1ExternalDatabaseConnection_universal_d_listExternalDatabaseConnections as listExternalDatabaseConnections,
      dataV1ExternalDatabaseConnection_universal_d_ListExternalDatabaseConnectionsOptions as ListExternalDatabaseConnectionsOptions,
      dataV1ExternalDatabaseConnection_universal_d_createExternalDatabaseConnection as createExternalDatabaseConnection,
      dataV1ExternalDatabaseConnection_universal_d_CreateExternalDatabaseConnectionOptions as CreateExternalDatabaseConnectionOptions,
      dataV1ExternalDatabaseConnection_universal_d_updateExternalDatabaseConnection as updateExternalDatabaseConnection,
      dataV1ExternalDatabaseConnection_universal_d_UpdateExternalDatabaseConnection as UpdateExternalDatabaseConnection,
      dataV1ExternalDatabaseConnection_universal_d_deleteExternalDatabaseConnection as deleteExternalDatabaseConnection,
    };
  }
  
  /** A data collection determines the structure of data to be stored in a database. */
  interface DataCollection {
      /** Collection ID. For example, `my-first-collection`. May include a namespace. */
      _id?: string;
      /**
       * Collection type. Indicates how the collection was created and is stored.
       *
       * * `NATIVE`: User-created collection.
       * * `WIX_APP`: [Collection](https://support.wix.com/en/article/velo-working-with-wix-app-collections-and-code#what-are-wix-app-collections) created by a Wix app, including [starter collections](https://support.wix.com/en/article/velo-working-with-wix-app-collections-and-code#what-are-wix-app-starter-collections) created when a Wix app is installed.
       * * `BLOCKS_APP`: Collection created by a Wix Blocks app.
       * * `EXTERNAL`: Collection located in externally connected storage.
       * @readonly
       */
      collectionType?: CollectionType;
      /**
       * ID of the app that defined this collection. For user-defined collections, this value is null.
       * @readonly
       */
      ownerAppId?: string | null;
      /**
       * Maximum number of items returned in a single query, based on the underlying storage.
       * Native collections have a maximum page size of 1000 for offset-based queries or 100 for cursor-based queries.
       * External collections' maximum page size defaults to 50, but an external provider can set any maximum value up to 1000.
       * @readonly
       */
      maxPageSize?: number | null;
      /** Collection's display name as shown in the CMS. For example, `My First Collection`. */
      displayName?: string | null;
      /**
       * Indicates how the collection's items are sorted by default when a query doesn't specify an order.
       * @readonly
       */
      defaultDisplayOrder?: Sort;
      /**
       * UI-friendly namespace of the Wix app with which the data collection is associated, such as Stores or Bookings.
       * Empty for all data collections not owned by internal Wix apps.
       * @readonly
       */
      displayNamespace?: string | null;
      /** The field whose value the CMS displays to represent the collection item when referenced in a different collection. */
      displayField?: string | null;
      /**
       * Capabilities the collection supports.
       * @readonly
       */
      capabilities?: CollectionCapabilities;
      /** Collection's field structure. */
      fields?: Field$1[];
      /** Levels of permission for accessing and modifying data, defined by lowest role needed to perform each action. */
      permissions?: Permissions;
      /**
       * Collection's current revision number, which increments each time the collection is updated. For an update operation to succeed, you must pass the latest revision number.
       * @readonly
       */
      revision?: string | null;
      /** All plugins the collection uses. Plugins apply additional capabilities to the collection or extend its functionality. */
      plugins?: Plugin[];
      /**
       * All paging modes the collection supports. In native collections, offset-based paging is supported by default.
       * @readonly
       */
      pagingModes?: PagingMode[];
      /**
       * Date the collection was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date the collection was last updated.
       * @readonly
       */
      _updatedDate?: Date;
  }
  enum CollectionType {
      /** User-created collection. */
      NATIVE = "NATIVE",
      /** [Collection](https://support.wix.com/en/article/velo-working-with-wix-app-collections-and-code#what-are-wix-app-collections) created by a Wix app when it is installed. This type of collection can be modified dynamically by that app (for example, Wix Forms). */
      WIX_APP = "WIX_APP",
      /** Collection created by a Wix Blocks app. */
      BLOCKS_APP = "BLOCKS_APP",
      /** Collection located in externally connected storage. */
      EXTERNAL = "EXTERNAL"
  }
  interface Sort {
      /** Field to sort by. */
      fieldKey?: string;
      /**
       * Sort order. Use `ASC` for ascending order or `DESC` for descending order.
       *
       * Default: `ASC`
       */
      direction?: Direction;
  }
  enum Direction {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface CollectionCapabilities {
      /**
       * Data operations the collection supports. The listed operations can be performed on data the collection contains.
       *
       * Supported values: `AGGREGATE`, `BULK_INSERT`, `BULK_REMOVE`, `BULK_SAVE`, `BULK_UPDATE`, `COUNT`, `DISTINCT`, `FIND`, `GET`, `INSERT`, `INSERT_REFERENCE`, `IS_REFERENCED`, `QUERY_REFERENCED`, `REMOVE`, `REMOVE_REFERENCE`, `REPLACE_REFERENCES`, `SAVE`, `TRUNCATE`, `UPDATE`.
       */
      dataOperations?: DataOperation[];
      /**
       * Collection operations supported. The listed operations can be performed on the collection itself.
       * + `UPDATE`: Allows updating the collection's structure, for example adding, updating, or deleting fields. If not included, the collection's structure can't be changed.
       * + `REMOVE`: Allows deleting the entire collection. If not included, the collection can't be deleted.
       */
      collectionOperations?: CollectionOperation[];
      /** Maximum number of indexes for the collection. */
      indexLimits?: IndexLimits;
  }
  enum DataOperation {
      AGGREGATE = "AGGREGATE",
      BULK_INSERT = "BULK_INSERT",
      BULK_REMOVE = "BULK_REMOVE",
      BULK_SAVE = "BULK_SAVE",
      BULK_UPDATE = "BULK_UPDATE",
      COUNT = "COUNT",
      DISTINCT = "DISTINCT",
      FIND = "FIND",
      GET = "GET",
      INSERT = "INSERT",
      INSERT_REFERENCE = "INSERT_REFERENCE",
      IS_REFERENCED = "IS_REFERENCED",
      QUERY_REFERENCED = "QUERY_REFERENCED",
      REMOVE = "REMOVE",
      REMOVE_REFERENCE = "REMOVE_REFERENCE",
      REPLACE_REFERENCES = "REPLACE_REFERENCES",
      SAVE = "SAVE",
      TRUNCATE = "TRUNCATE",
      UPDATE = "UPDATE"
  }
  enum CollectionOperation {
      /** Supports updating this collection. */
      UPDATE = "UPDATE",
      /** Supports removing this collections. */
      REMOVE = "REMOVE"
  }
  interface IndexLimits {
      /** Maximum number of regular (non-unique) indexes allowed for this collection. */
      regular?: number;
      /** Maximum number of unique indexes allowed for this collection. */
      unique?: number;
      /** Maximum number of regular and unique indexes allowed for this collection. */
      total?: number;
  }
  interface Field$1 extends FieldRangeValidationsOneOf {
      /** Range of possible values for a numerical field. */
      numberRange?: NumberRange;
      /** Length range permitted for a text field. Relevant for fields that hold strings, such as those of type `TEXT` or `RICH_TEXT`. */
      stringLengthRange?: StringLengthRange;
      /** Array size range permitted. Relevant for fields that hold arrays, such as those of type `ARRAY`, `ARRAY_STRING`, or `ARRAY_DOCUMENT`. */
      arraySizeRange?: ArraySizeRange;
      /** Unique identifier for the field. For example, `firstName`. */
      key?: string;
      /** Field's display name when shown in the CMS. For example, `First Name`. */
      displayName?: string | null;
      /**
       * Field's data type.
       *
       * Supported values: `TEXT`, `NUMBER`, `DATE`, `DATETIME`, `IMAGE`, `BOOLEAN`, `DOCUMENT`, `URL`, `RICH_TEXT`, `VIDEO`, `ANY`, `ARRAY_STRING`, `ARRAY_DOCUMENT`, `AUDIO`, `TIME`, `LANGUAGE`, `RICH_CONTENT`, `MEDIA_GALLERY`, `ADDRESS`, `PAGE_LINK`, `REFERENCE`, `MULTI_REFERENCE`, `OBJECT`, `ARRAY`, `LEGACY_TIME`, `LEGACY_BOOK`, `LEGACY_EXTERNAL_URL`, `LEGACY_BROKEN_REFERENCE`, `LEGACY_IMAGE`, `LEGACY_COLOR`, `LEGACY_EXTERNAL_VIDEO`.
       */
      type?: FieldType;
      /** Metadata for complex data types. This property only exists for references, multi-references, objects, and arrays. */
      typeMetadata?: TypeMetadata;
      /**
       * Whether the field is a system field (created automatically).
       * @readonly
       */
      systemField?: boolean;
      /**
       * Capabilities the field supports.
       * @readonly
       */
      capabilities?: FieldCapabilities;
      /** Indicates if field is encrypted. */
      encrypted?: boolean;
      /** Description of the field. */
      description?: string | null;
      plugin?: string | null;
      /**
       * Whether the field is read-only. A read-only field can't be changed.
       *
       * Default: `false`
       */
      readOnly?: boolean | null;
      /**
       * Whether the field is immutable. An immutable field can be set once, but then cannot be updated.
       *
       * Default: `false`
       */
      immutable?: boolean | null;
      /**
       * Whether the field is required.
       *
       * Default: `false`
       */
      required?: boolean | null;
      /** Additional optional plugins for the field. */
      plugins?: FieldPlugin[];
      /**
       * Whether the field is deleted. Returned only when `include_deleted_fields = true`.
       * @internal
       * @readonly
       */
      deleted?: boolean | null;
  }
  /** @oneof */
  interface FieldRangeValidationsOneOf {
      /** Range of possible values for a numerical field. */
      numberRange?: NumberRange;
      /** Length range permitted for a text field. Relevant for fields that hold strings, such as those of type `TEXT` or `RICH_TEXT`. */
      stringLengthRange?: StringLengthRange;
      /** Array size range permitted. Relevant for fields that hold arrays, such as those of type `ARRAY`, `ARRAY_STRING`, or `ARRAY_DOCUMENT`. */
      arraySizeRange?: ArraySizeRange;
  }
  enum FieldType {
      UNKNOWN_FIELD_TYPE = "UNKNOWN_FIELD_TYPE",
      TEXT = "TEXT",
      NUMBER = "NUMBER",
      DATE = "DATE",
      DATETIME = "DATETIME",
      IMAGE = "IMAGE",
      BOOLEAN = "BOOLEAN",
      DOCUMENT = "DOCUMENT",
      URL = "URL",
      RICH_TEXT = "RICH_TEXT",
      VIDEO = "VIDEO",
      ANY = "ANY",
      ARRAY_STRING = "ARRAY_STRING",
      ARRAY_DOCUMENT = "ARRAY_DOCUMENT",
      AUDIO = "AUDIO",
      TIME = "TIME",
      LANGUAGE = "LANGUAGE",
      RICH_CONTENT = "RICH_CONTENT",
      MEDIA_GALLERY = "MEDIA_GALLERY",
      ADDRESS = "ADDRESS",
      PAGE_LINK = "PAGE_LINK",
      REFERENCE = "REFERENCE",
      MULTI_REFERENCE = "MULTI_REFERENCE",
      OBJECT = "OBJECT",
      ARRAY = "ARRAY",
      /** Deprecated - can’t be added to collections. Can only appear in older collections. */
      LEGACY_TIME = "LEGACY_TIME",
      /** Deprecated - can’t be added to collections. Can only appear in older collections. */
      LEGACY_BOOK = "LEGACY_BOOK",
      /** Deprecated - can’t be added to collections. Can only appear in older collections. */
      LEGACY_EXTERNAL_URL = "LEGACY_EXTERNAL_URL",
      /** Deprecated - can’t be added to collections. Can only appear in older collections. */
      LEGACY_BROKEN_REFERENCE = "LEGACY_BROKEN_REFERENCE",
      /** Deprecated - can’t be added to collections. Can only appear in older collections. */
      LEGACY_IMAGE = "LEGACY_IMAGE",
      /** Deprecated - can’t be added to collections. Can only appear in older collections. */
      LEGACY_COLOR = "LEGACY_COLOR",
      /** Deprecated - can’t be added to collections. Can only appear in older collections. */
      LEGACY_EXTERNAL_VIDEO = "LEGACY_EXTERNAL_VIDEO"
  }
  interface TypeMetadata extends TypeMetadataMetadataOneOf {
      /** Metadata for a reference field. */
      reference?: Reference;
      /** Metadata for a multi-reference field. */
      multiReference?: MultiReference;
      /** Metadata for an object field. */
      object?: Object$1;
      /** Metadata for an array field. */
      array?: Array$1;
      /** Metadata for a page link field. */
      pageLink?: PageLink;
  }
  /** @oneof */
  interface TypeMetadataMetadataOneOf {
      /** Metadata for a reference field. */
      reference?: Reference;
      /** Metadata for a multi-reference field. */
      multiReference?: MultiReference;
      /** Metadata for an object field. */
      object?: Object$1;
      /** Metadata for an array field. */
      array?: Array$1;
      /** Metadata for a page link field. */
      pageLink?: PageLink;
  }
  interface FieldCapabilities {
      /**
       * Whether the collection can be sorted by this field.
       *
       * Default: `false`
       */
      sortable?: boolean;
      /**
       * Query operators that can be used for this field.
       *
       * Supported values: `EQ`, `LT`, `GT`, `NE`, `LTE`, `GTE`, `STARTS_WITH`, `ENDS_WITH`, `CONTAINS`, `HAS_SOME`, `HAS_ALL`, `EXISTS`, `URLIZED`.
       */
      queryOperators?: QueryOperator[];
  }
  enum QueryOperator {
      EQ = "EQ",
      LT = "LT",
      GT = "GT",
      NE = "NE",
      LTE = "LTE",
      GTE = "GTE",
      STARTS_WITH = "STARTS_WITH",
      ENDS_WITH = "ENDS_WITH",
      CONTAINS = "CONTAINS",
      HAS_SOME = "HAS_SOME",
      HAS_ALL = "HAS_ALL",
      EXISTS = "EXISTS",
      URLIZED = "URLIZED"
  }
  interface ObjectField {
      /** Field key. */
      key?: string;
      /** Display name for the field. */
      displayName?: string | null;
      /** Field type. */
      type?: FieldType;
      /** Metadata for complex data types. This property only exists for references, multi-references, objects, and arrays. */
      typeMetadata?: TypeMetadata;
      /**
       * Capabilities the object field supports.
       * @readonly
       */
      capabilities?: FieldCapabilities;
  }
  interface FieldsPattern {
      pattern?: string;
      lowercase?: boolean;
  }
  interface UrlizedOnlyPattern {
      pattern?: string;
  }
  interface Calculator extends CalculatorPatternOneOf {
      /** Value is calculated according to pattern, whitespaces are replaced with dash [-]. */
      fieldsPattern?: FieldsPattern;
      /** Value is only URL encoded. */
      urlizedOnlyPattern?: UrlizedOnlyPattern;
  }
  /** @oneof */
  interface CalculatorPatternOneOf {
      /** Value is calculated according to pattern, whitespaces are replaced with dash [-]. */
      fieldsPattern?: FieldsPattern;
      /** Value is only URL encoded. */
      urlizedOnlyPattern?: UrlizedOnlyPattern;
  }
  interface Reference {
      /** Referenced collection ID. */
      referencedCollectionId?: string;
  }
  interface MultiReference {
      /** Referenced collection ID. */
      referencedCollectionId?: string;
      /** Referencing field key. */
      referencingFieldKey?: string;
      /** Display name in the CMS for the referenced data. */
      referencingDisplayName?: string;
  }
  interface Object$1 {
      /** Fields within the object. */
      fields?: ObjectField[];
  }
  interface Array$1 {
      /**
       * Element's data type.
       *
       * Supported values: `TEXT`, `NUMBER`, `DATE`, `DATETIME`, `IMAGE`, `BOOLEAN`, `DOCUMENT`, `URL`, `RICH_TEXT`, `VIDEO`, `ANY`, `ARRAY_STRING`, `ARRAY_DOCUMENT`, `AUDIO`, `TIME`, `LANGUAGE`, `RICH_CONTENT`, `MEDIA_GALLERY`, `ADDRESS`, `PAGE_LINK`, `REFERENCE`, `MULTI_REFERENCE`, `OBJECT`, `ARRAY`, `LEGACY_TIME`, `LEGACY_BOOK`, `LEGACY_EXTERNAL_URL`, `LEGACY_BROKEN_REFERENCE`, `LEGACY_IMAGE`, `LEGACY_COLOR`, `LEGACY_EXTERNAL_VIDEO`.
       */
      elementType?: FieldType;
      /** Metadata for complex data types. This property only exists for references, multi-references, objects, and arrays. */
      typeMetadata?: TypeMetadata;
  }
  interface PageLink {
      calculator?: Calculator;
      /** Defines reference to router pattern in the site document. */
      linkedRouterPage?: string | null;
  }
  interface NumberRange {
      /**
       * Minimum permitted value for a numerical field.
       *
       * Default: No validation
       */
      min?: number | null;
      /**
       * Maximum permitted value for a numerical field.
       *
       * Default: No validation
       */
      max?: number | null;
  }
  interface StringLengthRange {
      /**
       * Minimum permitted length for a text field.
       *
       * Default: No validation
       */
      minLength?: number | null;
      /**
       * Maximum permitted length for a text field.
       *
       * Default: No validation
       */
      maxLength?: number | null;
  }
  interface ArraySizeRange {
      /**
       * Minimum permitted number of items in an array field. Relevant for fields that hold arrays, such as those of type `ARRAY`, `ARRAY_STRING`, or `ARRAY_DOCUMENT`.
       *
       * Default: No validation
       */
      minSize?: number | null;
      /**
       * Maximum permitted number of items in an array field. Relevant for fields that hold arrays, such as those of type `ARRAY`, `ARRAY_STRING`, or `ARRAY_DOCUMENT`.
       *
       * Default: No validation
       */
      maxSize?: number | null;
  }
  /** Optional plug-in aspects for fields */
  interface FieldPlugin extends FieldPluginOptionsOneOf {
      /** Options for the CMS plugin. */
      cmsOptions?: CmsOptions;
      type?: FieldPluginType;
  }
  /** @oneof */
  interface FieldPluginOptionsOneOf {
      /** Options for the CMS plugin. */
      cmsOptions?: CmsOptions;
  }
  enum FieldPluginType {
      UNKNOWN = "UNKNOWN",
      /** CMS-related field attributes */
      CMS = "CMS"
  }
  /** Options for the CMS plugin. */
  interface CmsOptions {
      /**
       * Indicates an internal CMS field. The CMS does not display internal fields.
       *
       * Default: `false`
       */
      internal?: boolean;
  }
  /** Permissions defined by the lowest role needed to perform each action. */
  interface Permissions {
      /**
       * Lowest role needed to add a collection.
       *
       * Supported values: `ADMIN`, `SITE_MEMBER_AUTHOR`, `SITE_MEMBER`, `ANYONE`.
       */
      insert?: Role;
      /**
       * Lowest role needed to update a collection.
       *
       * Supported values: `ADMIN`, `SITE_MEMBER_AUTHOR`, `SITE_MEMBER`, `ANYONE`.
       */
      update?: Role;
      /**
       * Lowest role needed to remove a collection.
       *
       * Supported values: `ADMIN`, `SITE_MEMBER_AUTHOR`, `SITE_MEMBER`, `ANYONE`.
       */
      remove?: Role;
      /**
       * Lowest role needed to read a collection.
       *
       * Supported values: `ADMIN`, `SITE_MEMBER_AUTHOR`, `SITE_MEMBER`, `ANYONE`.
       */
      read?: Role;
  }
  enum Role {
      /** Unknown. */
      UNKNOWN_ROLE = "UNKNOWN_ROLE",
      /** Site administrator. */
      ADMIN = "ADMIN",
      /** Signed-in user who added content to this collection. */
      SITE_MEMBER_AUTHOR = "SITE_MEMBER_AUTHOR",
      /** Any signed-in user. */
      SITE_MEMBER = "SITE_MEMBER",
      /** Any site visitor. */
      ANYONE = "ANYONE"
  }
  interface Plugin extends PluginOptionsOneOf {
      /** Options for the Publish plugin. */
      publishOptions?: PublishPluginOptions$1;
      /** Options for the Single Item plugin. */
      singleItemOptions?: SingleItemPluginOptions;
      /** Options for the Urlized plugin. */
      urlizedOptions?: UrlizedPluginOptions;
      /** Options for the Multilingual plugin. */
      multilingualOptions?: MultilingualOptions;
      /** Options for the PageLink plugin. */
      editablePageLinkOptions?: PageLinkPluginOptions;
      /** Options for the CMS plugin. */
      cmsOptions?: PluginCmsOptions;
      /**
       * Plugin types. The following plugins are supported:
       *
       * * `PUBLISH`: Allows items to be marked as either draft or published. For each item you can set a publishing time when the item will become visible to site visitors.
       * * `SINGLE_ITEM`: Ensures the collection can have one item at most. Can only be applied to a new collection.
       * * `URLIZED`: Generates item URLs for collections used by dynamic pages.
       * * `MULTILINGUAL`: Indicates that the collection is translatable. This allows you to manage translation for selected fields using [Wix Multilingual](https://www.wix.com/app-market/wix-multilingual).
       * * `CMS`: Contains CMS-related collection attributes
       */
      type?: Type;
  }
  /** @oneof */
  interface PluginOptionsOneOf {
      /** Options for the Publish plugin. */
      publishOptions?: PublishPluginOptions$1;
      /** Options for the Single Item plugin. */
      singleItemOptions?: SingleItemPluginOptions;
      /** Options for the Urlized plugin. */
      urlizedOptions?: UrlizedPluginOptions;
      /** Options for the Multilingual plugin. */
      multilingualOptions?: MultilingualOptions;
      /** Options for the PageLink plugin. */
      editablePageLinkOptions?: PageLinkPluginOptions;
      /** Options for the CMS plugin. */
      cmsOptions?: PluginCmsOptions;
  }
  enum Status$1 {
      UNKNOWN_PUBLISH_PLUGIN_STATUS = "UNKNOWN_PUBLISH_PLUGIN_STATUS",
      PUBLISHED = "PUBLISHED",
      DRAFT = "DRAFT"
  }
  enum Format {
      UNKNOWN_URLIZED_PLUGIN_FORMAT = "UNKNOWN_URLIZED_PLUGIN_FORMAT",
      ORIGINAL = "ORIGINAL",
      PLAIN = "PLAIN"
  }
  /** if CMS-defined sort is enabled and should be used in site */
  interface SiteSort {
      /** Field and order for the site sort. */
      sort?: Sort[];
  }
  enum Type {
      /** Unknown plugin type. */
      UNKNOWN_PLUGIN_TYPE = "UNKNOWN_PLUGIN_TYPE",
      /** Allows items to be marked as either draft or published. For each item you can set a publishing time when the item will become visible to site visitors. */
      PUBLISH = "PUBLISH",
      /** Ensures the collection can have one item at most. Can only be applied to a new collection. */
      SINGLE_ITEM = "SINGLE_ITEM",
      /** Generates item URLs for collections used by dynamic pages. */
      URLIZED = "URLIZED",
      /** Deprecated. Will be removed in the future. */
      GRIDAPPLESS = "GRIDAPPLESS",
      /** Indicates that the collection is translatable. This allows you to manage translation for selected fields using [Wix Multilingual](https://www.wix.com/app-market/wix-multilingual). */
      MULTILINGUAL = "MULTILINGUAL",
      /** Indicates that collection is shared with current site */
      SHARED = "SHARED",
      /** Indicates that page link fields are persisted and can be updated */
      EDITABLE_PAGE_LINK = "EDITABLE_PAGE_LINK",
      /** CMS-specific collection properties */
      CMS = "CMS"
  }
  interface PublishPluginOptions$1 {
      /**
       * Default status.
       *
       * Supported values: `PUBLISHED`, `DRAFT`.
       */
      defaultStatus?: Status$1;
  }
  interface SingleItemPluginOptions {
      /** ID of the single item in this collection. If you insert or update an item, its ID value is always changed to this. */
      singleItemId?: string;
  }
  interface UrlizedPluginOptions {
      /**
       * Encoding method for generating a URL in ASCII characters.
       *
       * * `ORIGINAL`: Letters are converted to lower case and spaces are replaced with dashes before generating the encoded URL.
       * * `PLAIN`: No changes are made before generating the encoded URL.
       */
      format?: Format;
  }
  interface MultilingualOptions {
      /** IDs of fields to allow translation. */
      translatableFieldKeys?: string[];
  }
  interface PageLinkPluginOptions {
      isPersisted?: boolean;
      isMutable?: boolean;
  }
  interface PluginCmsOptions {
      /** CMS sort, applied when a collection is displayed on a site. */
      siteSort?: SiteSort;
  }
  enum PagingMode {
      /** Offset-based paging. */
      OFFSET = "OFFSET",
      /** Cursor-based paging. */
      CURSOR = "CURSOR"
  }
  interface DataCollectionClonedEvent {
      /** original instance collection is cloned from */
      originInstanceId?: string;
      /** original collection ID, may be same as current one */
      originId?: string;
  }
  interface DataCollectionChangedEvent {
      /** list of new fields */
      fieldsAdded?: Field$1[];
      /** list of changed fields */
      fieldsUpdated?: FieldUpdate[];
      /** list of removed fields */
      fieldsRemoved?: Field$1[];
      /** list of new plugins */
      pluginsAdded?: Plugin[];
      /** list of changed plugins */
      pluginsUpdated?: PluginUpdate[];
      /** list of removed plugins */
      pluginsRemoved?: Plugin[];
  }
  interface FieldUpdate {
      /** previous state of the field */
      previous?: Field$1;
      /** current state of the field */
      current?: Field$1;
  }
  interface PluginUpdate {
      /** previous state of the plugin */
      previous?: Plugin;
      /** current state of the plugin */
      current?: Plugin;
  }
  interface CreateDataCollectionRequest {
      /** Collection details. */
      collection: DataCollection;
  }
  interface CreateDataCollectionResponse {
      /** Details of collection created. */
      collection?: DataCollection;
  }
  interface GetDataCollectionRequest {
      /** ID of the collection to retrieve. */
      dataCollectionId: string;
      /**
       * Whether to return all collections referenced by the requested collection.
       *
       * Default: `false`
       * @internal
       */
      includeReferencedCollections?: boolean;
      /**
       * Whether to retrieve data from the primary database instance.
       * This decreases performance but ensures data retrieved is up to date even immediately after an update.
       * Learn more about [Wix Data and eventual consistency](https://dev.wix.com/api/rest/wix-data/wix-data/eventual-consistency).
       *
       * Default: `false`
       */
      consistentRead?: boolean;
      /**
       * Whether to return deleted fields.
       *
       * Default: `false`
       * @internal
       */
      includeDeletedFields?: boolean;
  }
  interface GetDataCollectionResponse {
      /** Details of the collection requested. */
      collection?: DataCollection;
      /**
       * Details of collections referenced by the collection requested.
       * Only populated when `includeReferencedCollections` is `true` in the request.
       */
      referencedCollections?: DataCollection[];
  }
  interface ListDataCollectionsRequest {
      /**
       * Defines how collections in the response are sorted.
       *
       * Default: Ordered by ID in ascending order.
       */
      sort?: Sorting$1;
      /** Pagination information. */
      paging?: Paging$2;
      /**
       * Whether to retrieve data from the primary database instance.
       * This decreases performance but ensures data retrieved is up to date even immediately after an update.
       * Learn more about [Wix Data and eventual consistency](https://dev.wix.com/api/rest/wix-data/wix-data/eventual-consistency).
       *
       * Default: `false`
       */
      consistentRead?: boolean;
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
  interface Paging$2 {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface ListDataCollectionsResponse {
      /** List of collections. */
      collections?: DataCollection[];
      /** Paging information. */
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
  }
  interface BulkGetDataCollectionsRequest {
      /** IDs of the collections to retrieve. */
      dataCollectionIds?: string[];
      /**
       * Whether to include deleted collections.
       *
       * Default: `false`
       */
      showDeletedCollections?: boolean;
      /**
       * Whether the returned collection list should include referenced collections.
       *
       * Default: `false`
       */
      includeReferencedCollections?: boolean;
      /** Sorting preferences. */
      sort?: Sorting$1;
      /**
       * Whether to retrieve data from the primary database instance.
       * This decreases performance but ensures data retrieved is up to date even immediately after an update.
       * Learn more about [Wix Data and eventual consistency](https://dev.wix.com/api/rest/wix-data/wix-data/eventual-consistency).
       *
       * Default: `false`
       */
      consistentRead?: boolean;
  }
  interface BulkGetDataCollectionsResponse {
      /**
       * List of requested collections.
       * When `include_referenced_collections` is `true` in the request, referenced collections are included here.
       */
      activeCollections?: DataCollection[];
      /** List of requested deleted collections. Only populated when `showDeletedCollections` is true in the request. */
      deletedCollections?: DataCollection[];
  }
  interface UpdateDataCollectionRequest {
      /** Updated collection details. The existing collection is replaced with this version. */
      collection: DataCollection;
  }
  interface UpdateDataCollectionResponse {
      /** Updated collection details. */
      collection?: DataCollection;
  }
  interface DeleteDataCollectionRequest {
      /** ID of the collection to delete. */
      dataCollectionId: string;
  }
  interface DeleteDataCollectionResponse {
  }
  interface CreateDataCollectionFieldRequest {
      /** ID of data collection to update */
      dataCollectionId: string;
      /** field to create */
      field: Field$1;
  }
  interface CreateDataCollectionFieldResponse {
      /** updated data collection */
      dataCollection?: DataCollection;
  }
  interface UpdateDataCollectionFieldRequest {
      /** ID of data collection to update */
      dataCollectionId: string;
      /** Field to update */
      field: Field$1;
  }
  interface UpdateDataCollectionFieldResponse {
      /** updated data collection */
      dataCollection?: DataCollection;
  }
  interface DeleteDataCollectionFieldRequest {
      /** ID of data collection to update */
      dataCollectionId: string;
      /** Field key to delete */
      fieldKey: string;
  }
  interface DeleteDataCollectionFieldResponse {
      /** updated data collection */
      dataCollection?: DataCollection;
  }
  interface BulkGetDataCollectionsPageBySnapshotsRequest {
      /** Ids of schema snapshot */
      snapshotIds?: string[];
      /** Pagination information. */
      paging?: Paging$2;
  }
  interface BulkGetDataCollectionsPageBySnapshotsResponse {
      /** List of snapshot collection map */
      snapshotCollections?: SnapshotCollection[];
      /** Paging information. */
      pagingMetadata?: PagingMetadataV2$1;
  }
  interface SnapshotCollection {
      /** snapshot to which collection belongs */
      snapshotId?: string;
      /** snapshot collection */
      collection?: DataCollection;
      /** snapshot of collection indexes */
      indexes?: Index$1[];
  }
  /** An index is a map of a collection's data, organized according to specific fields to increase query speed. */
  interface Index$1 {
      /** Name of the index. */
      name?: string;
      /**
       * Fields for which the index is defined.
       *
       * Max: 3 fields (for a unique index: 1 field)
       */
      fields?: IndexField[];
      /**
       * Current status of the index.
       * - `BUILDING`: Index creation is in progress.
       * - `ACTIVE`: Index has been successfully created and can be used in queries.
       * - `DROPPING`: Index is in the process of being dropped.
       * - `DROPPED`: Index has been dropped successfully.
       * - `FAILED`: Index creation has failed.
       * - `INVALID`: Index contains incorrectly indexed data.
       * @readonly
       */
      status?: IndexStatus;
      /**
       * Contains details about the reasons for failure when `status` is `FAILED`.
       * @readonly
       */
      failure?: Failure$1;
      /**
       * Whether the index enforces uniqueness of values in the field for which it is defined.
       * If `true`, the index can have only one field.
       *
       * Default: `false`
       */
      unique?: boolean;
      /**
       * Whether the index ignores case.
       *
       * Default: `false`
       */
      caseInsensitive?: boolean;
  }
  /**
   * Order determines how values are ordered in the index. This is important when
   * ordering and/or range querying by indexed fields.
   */
  enum Order$1 {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface IndexField {
      /** Path of the field to index. For example: `title` or `options.price`. */
      path?: string;
      /**
       * Sort order for the index. Base on how the data is regularly queried.
       *
       * Default: `ASC`
       */
      order?: Order$1;
  }
  enum IndexStatus {
      /** Place holder. Never returned by the service. */
      UNKNOWN = "UNKNOWN",
      /** Index creation is in progress. */
      BUILDING = "BUILDING",
      /** Index has been successfully created and can be used in queries. */
      ACTIVE = "ACTIVE",
      /** Index is in the process of being dropped. */
      DROPPING = "DROPPING",
      /** Index has been dropped successfully. */
      DROPPED = "DROPPED",
      /** Index creation has failed. */
      FAILED = "FAILED",
      /** Index contains incorrectly indexed data. */
      INVALID = "INVALID"
  }
  interface Failure$1 {
      /**
       * Error code.
       * - `WDE0112`: Unknown error while building collection index.
       * - `WDE0113`: Duplicate key error while building collection index.
       * - `WDE0114`: Document too large while building collection index.
       */
      code?: string;
      /**
       * Broad error code.
       * - `WD_UNKNOWN_ERROR`: Unknown error.
       * @internal
       */
      broadCode?: string;
      /** Description of the failure. */
      description?: string;
      /**
       * ID of the data item that caused the failure.
       * For example, if `unique` is `true`, the ID of an item containing a duplicate value.
       */
      itemId?: string | null;
  }
  interface CreateDataCollectionsSnapshotRequest {
  }
  interface CreateDataCollectionsSnapshotResponse {
      /** created snapshot ID */
      snapshotId?: string;
      /** data collections in snapshot */
      snapshotCollections?: DataCollection[];
  }
  interface RestoreDataCollectionsFromSnapshotRequest {
      /** snapshot ID to restore */
      snapshotId?: string;
      /** collection IDs to restore, if empty – all collections would be restored */
      dataCollectionIds?: string[];
  }
  interface RestoreDataCollectionsFromSnapshotResponse {
      /** restored collections */
      restoredCollections?: DataCollection[];
  }
  interface DeleteDataCollectionsSnapshotRequest {
      /** snapshot ID to delete */
      snapshotId?: string;
  }
  interface DeleteDataCollectionsSnapshotResponse {
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
   * Creates a new data collection.
   *
   * The request body must include an ID, details for at least 1 field, and a permissions object. If any of these are missing, the collection isn't created.
   * @param collection - Collection details.
   * @public
   * @requiredField collection
   * @requiredField collection._id
   * @requiredField collection.fields.key
   * @requiredField collection.fields.type
   * @requiredField collection.permissions.insert
   * @requiredField collection.permissions.read
   * @requiredField collection.permissions.remove
   * @requiredField collection.permissions.update
   * @param options - Options for creating a data collection.
   * @adminMethod
   * @returns Details of collection created.
   */
  function createDataCollection(collection: DataCollection): Promise<DataCollection>;
  /**
   * Retrieves a data collection by ID.
   * @param dataCollectionId - ID of the collection to retrieve.
   * @public
   * @requiredField dataCollectionId
   * @param options - Options for retrieving a data collection.
   * @returns Details of the collection requested.
   */
  function getDataCollection(dataCollectionId: string, options?: GetDataCollectionOptions): Promise<DataCollection>;
  interface GetDataCollectionOptions {
      /**
       * Whether to return all collections referenced by the requested collection.
       *
       * Default: `false`
       * @internal
       */
      includeReferencedCollections?: boolean;
      /**
       * Whether to retrieve data from the primary database instance.
       * This decreases performance but ensures data retrieved is up to date even immediately after an update.
       * Learn more about [Wix Data and eventual consistency](https://dev.wix.com/api/rest/wix-data/wix-data/eventual-consistency).
       *
       * Default: `false`
       */
      consistentRead?: boolean;
      /**
       * Whether to return deleted fields.
       *
       * Default: `false`
       * @internal
       */
      includeDeletedFields?: boolean;
  }
  /**
   * Retrieves a list of all data collections associated with the site or project.
   *
   * By default, the list is ordered by ID in ascending order.
   * @public
   * @param options - Options for retrieving a list of data collections.
   * @adminMethod
   */
  function listDataCollections(options?: ListDataCollectionsOptions): Promise<ListDataCollectionsResponse>;
  interface ListDataCollectionsOptions {
      /**
       * Defines how collections in the response are sorted.
       *
       * Default: Ordered by ID in ascending order.
       */
      sort?: Sorting$1;
      /** Pagination information. */
      paging?: Paging$2;
      /**
       * Whether to retrieve data from the primary database instance.
       * This decreases performance but ensures data retrieved is up to date even immediately after an update.
       * Learn more about [Wix Data and eventual consistency](https://dev.wix.com/api/rest/wix-data/wix-data/eventual-consistency).
       *
       * Default: `false`
       */
      consistentRead?: boolean;
  }
  /**
   * Retrieves multiple data collections by ID.
   * Used in frontend databinding to load multiple specific collections at once. For internal use only.
   * @internal
   * @documentationMaturity preview
   */
  function bulkGetDataCollections(options?: BulkGetDataCollectionsOptions): Promise<BulkGetDataCollectionsResponse>;
  interface BulkGetDataCollectionsOptions {
      /** IDs of the collections to retrieve. */
      dataCollectionIds?: string[];
      /**
       * Whether to include deleted collections.
       *
       * Default: `false`
       */
      showDeletedCollections?: boolean;
      /**
       * Whether the returned collection list should include referenced collections.
       *
       * Default: `false`
       */
      includeReferencedCollections?: boolean;
      /** Sorting preferences. */
      sort?: Sorting$1;
      /**
       * Whether to retrieve data from the primary database instance.
       * This decreases performance but ensures data retrieved is up to date even immediately after an update.
       * Learn more about [Wix Data and eventual consistency](https://dev.wix.com/api/rest/wix-data/wix-data/eventual-consistency).
       *
       * Default: `false`
       */
      consistentRead?: boolean;
  }
  /**
   * Updates a data collection.
   *
   * A collection ID, revision number, permissions, and at least 1 field must be provided within `options.collection`.
   * If a collection with that ID exists, and if its current `revision` number matches the one provided, it is updated.
   * Otherwise, the request fails.
   *
   * When a collection is updated, its `_updatedDate` property is changed to the current date and its `revision` property is incremented.
   *
   * > **Note:**
   * > After a collection is updated, it only contains the properties included in the `updateDataCollection()` call. If the existing collection has properties with values and those properties
   * > aren't included in the updated collection details, their values are lost.
   * @param collection - Updated collection details. The existing collection is replaced with this version.
   * @public
   * @requiredField collection
   * @requiredField collection._id
   * @requiredField collection.fields.key
   * @requiredField collection.fields.type
   * @requiredField collection.permissions.insert
   * @requiredField collection.permissions.read
   * @requiredField collection.permissions.remove
   * @requiredField collection.permissions.update
   * @requiredField collection.revision
   * @param options - Options for updating a data collection.
   * @adminMethod
   * @returns Updated collection details.
   */
  function updateDataCollection(collection: DataCollection): Promise<DataCollection>;
  /**
   * Deletes a data collection.
   *
   * > **Note:**
   * > Once a collection is deleted, it can't be restored.
   * @param dataCollectionId - ID of the collection to delete.
   * @public
   * @requiredField dataCollectionId
   * @adminMethod
   */
  function deleteDataCollection(dataCollectionId: string): Promise<void>;
  /**
   * Adds new field to data collection schema
   * @param dataCollectionId - ID of data collection to update
   * @internal
   * @documentationMaturity preview
   * @requiredField dataCollectionId
   * @requiredField options
   * @requiredField options.field
   * @adminMethod
   */
  function createDataCollectionField(dataCollectionId: string, options: CreateDataCollectionFieldOptions): Promise<CreateDataCollectionFieldResponse>;
  interface CreateDataCollectionFieldOptions {
      /** field to create */
      field: Field$1;
  }
  /**
   * Updates data collection field
   * @param dataCollectionId - ID of data collection to update
   * @internal
   * @documentationMaturity preview
   * @requiredField dataCollectionId
   * @requiredField options
   * @requiredField options.field
   * @adminMethod
   */
  function updateDataCollectionField(dataCollectionId: string, options: UpdateDataCollectionFieldOptions): Promise<UpdateDataCollectionFieldResponse>;
  interface UpdateDataCollectionFieldOptions {
      /** Field to update */
      field: Field$1;
  }
  /**
   * Deletes data collection field
   * @param dataCollectionId - ID of data collection to update
   * @internal
   * @documentationMaturity preview
   * @requiredField dataCollectionId
   * @requiredField options
   * @requiredField options.fieldKey
   * @adminMethod
   */
  function deleteDataCollectionField(dataCollectionId: string, options: DeleteDataCollectionFieldOptions): Promise<DeleteDataCollectionFieldResponse>;
  interface DeleteDataCollectionFieldOptions {
      /** Field key to delete */
      fieldKey: string;
  }
  
  type dataV2DataCollection_universal_d_DataCollection = DataCollection;
  type dataV2DataCollection_universal_d_CollectionType = CollectionType;
  const dataV2DataCollection_universal_d_CollectionType: typeof CollectionType;
  type dataV2DataCollection_universal_d_Sort = Sort;
  type dataV2DataCollection_universal_d_Direction = Direction;
  const dataV2DataCollection_universal_d_Direction: typeof Direction;
  type dataV2DataCollection_universal_d_CollectionCapabilities = CollectionCapabilities;
  type dataV2DataCollection_universal_d_DataOperation = DataOperation;
  const dataV2DataCollection_universal_d_DataOperation: typeof DataOperation;
  type dataV2DataCollection_universal_d_CollectionOperation = CollectionOperation;
  const dataV2DataCollection_universal_d_CollectionOperation: typeof CollectionOperation;
  type dataV2DataCollection_universal_d_IndexLimits = IndexLimits;
  type dataV2DataCollection_universal_d_FieldRangeValidationsOneOf = FieldRangeValidationsOneOf;
  type dataV2DataCollection_universal_d_FieldType = FieldType;
  const dataV2DataCollection_universal_d_FieldType: typeof FieldType;
  type dataV2DataCollection_universal_d_TypeMetadata = TypeMetadata;
  type dataV2DataCollection_universal_d_TypeMetadataMetadataOneOf = TypeMetadataMetadataOneOf;
  type dataV2DataCollection_universal_d_FieldCapabilities = FieldCapabilities;
  type dataV2DataCollection_universal_d_QueryOperator = QueryOperator;
  const dataV2DataCollection_universal_d_QueryOperator: typeof QueryOperator;
  type dataV2DataCollection_universal_d_ObjectField = ObjectField;
  type dataV2DataCollection_universal_d_FieldsPattern = FieldsPattern;
  type dataV2DataCollection_universal_d_UrlizedOnlyPattern = UrlizedOnlyPattern;
  type dataV2DataCollection_universal_d_Calculator = Calculator;
  type dataV2DataCollection_universal_d_CalculatorPatternOneOf = CalculatorPatternOneOf;
  type dataV2DataCollection_universal_d_Reference = Reference;
  type dataV2DataCollection_universal_d_MultiReference = MultiReference;
  type dataV2DataCollection_universal_d_PageLink = PageLink;
  type dataV2DataCollection_universal_d_NumberRange = NumberRange;
  type dataV2DataCollection_universal_d_StringLengthRange = StringLengthRange;
  type dataV2DataCollection_universal_d_ArraySizeRange = ArraySizeRange;
  type dataV2DataCollection_universal_d_FieldPlugin = FieldPlugin;
  type dataV2DataCollection_universal_d_FieldPluginOptionsOneOf = FieldPluginOptionsOneOf;
  type dataV2DataCollection_universal_d_FieldPluginType = FieldPluginType;
  const dataV2DataCollection_universal_d_FieldPluginType: typeof FieldPluginType;
  type dataV2DataCollection_universal_d_CmsOptions = CmsOptions;
  type dataV2DataCollection_universal_d_Permissions = Permissions;
  type dataV2DataCollection_universal_d_Role = Role;
  const dataV2DataCollection_universal_d_Role: typeof Role;
  type dataV2DataCollection_universal_d_Plugin = Plugin;
  type dataV2DataCollection_universal_d_PluginOptionsOneOf = PluginOptionsOneOf;
  type dataV2DataCollection_universal_d_Format = Format;
  const dataV2DataCollection_universal_d_Format: typeof Format;
  type dataV2DataCollection_universal_d_SiteSort = SiteSort;
  type dataV2DataCollection_universal_d_Type = Type;
  const dataV2DataCollection_universal_d_Type: typeof Type;
  type dataV2DataCollection_universal_d_SingleItemPluginOptions = SingleItemPluginOptions;
  type dataV2DataCollection_universal_d_UrlizedPluginOptions = UrlizedPluginOptions;
  type dataV2DataCollection_universal_d_MultilingualOptions = MultilingualOptions;
  type dataV2DataCollection_universal_d_PageLinkPluginOptions = PageLinkPluginOptions;
  type dataV2DataCollection_universal_d_PluginCmsOptions = PluginCmsOptions;
  type dataV2DataCollection_universal_d_PagingMode = PagingMode;
  const dataV2DataCollection_universal_d_PagingMode: typeof PagingMode;
  type dataV2DataCollection_universal_d_DataCollectionClonedEvent = DataCollectionClonedEvent;
  type dataV2DataCollection_universal_d_DataCollectionChangedEvent = DataCollectionChangedEvent;
  type dataV2DataCollection_universal_d_FieldUpdate = FieldUpdate;
  type dataV2DataCollection_universal_d_PluginUpdate = PluginUpdate;
  type dataV2DataCollection_universal_d_CreateDataCollectionRequest = CreateDataCollectionRequest;
  type dataV2DataCollection_universal_d_CreateDataCollectionResponse = CreateDataCollectionResponse;
  type dataV2DataCollection_universal_d_GetDataCollectionRequest = GetDataCollectionRequest;
  type dataV2DataCollection_universal_d_GetDataCollectionResponse = GetDataCollectionResponse;
  type dataV2DataCollection_universal_d_ListDataCollectionsRequest = ListDataCollectionsRequest;
  type dataV2DataCollection_universal_d_ListDataCollectionsResponse = ListDataCollectionsResponse;
  type dataV2DataCollection_universal_d_BulkGetDataCollectionsRequest = BulkGetDataCollectionsRequest;
  type dataV2DataCollection_universal_d_BulkGetDataCollectionsResponse = BulkGetDataCollectionsResponse;
  type dataV2DataCollection_universal_d_UpdateDataCollectionRequest = UpdateDataCollectionRequest;
  type dataV2DataCollection_universal_d_UpdateDataCollectionResponse = UpdateDataCollectionResponse;
  type dataV2DataCollection_universal_d_DeleteDataCollectionRequest = DeleteDataCollectionRequest;
  type dataV2DataCollection_universal_d_DeleteDataCollectionResponse = DeleteDataCollectionResponse;
  type dataV2DataCollection_universal_d_CreateDataCollectionFieldRequest = CreateDataCollectionFieldRequest;
  type dataV2DataCollection_universal_d_CreateDataCollectionFieldResponse = CreateDataCollectionFieldResponse;
  type dataV2DataCollection_universal_d_UpdateDataCollectionFieldRequest = UpdateDataCollectionFieldRequest;
  type dataV2DataCollection_universal_d_UpdateDataCollectionFieldResponse = UpdateDataCollectionFieldResponse;
  type dataV2DataCollection_universal_d_DeleteDataCollectionFieldRequest = DeleteDataCollectionFieldRequest;
  type dataV2DataCollection_universal_d_DeleteDataCollectionFieldResponse = DeleteDataCollectionFieldResponse;
  type dataV2DataCollection_universal_d_BulkGetDataCollectionsPageBySnapshotsRequest = BulkGetDataCollectionsPageBySnapshotsRequest;
  type dataV2DataCollection_universal_d_BulkGetDataCollectionsPageBySnapshotsResponse = BulkGetDataCollectionsPageBySnapshotsResponse;
  type dataV2DataCollection_universal_d_SnapshotCollection = SnapshotCollection;
  type dataV2DataCollection_universal_d_IndexField = IndexField;
  type dataV2DataCollection_universal_d_IndexStatus = IndexStatus;
  const dataV2DataCollection_universal_d_IndexStatus: typeof IndexStatus;
  type dataV2DataCollection_universal_d_CreateDataCollectionsSnapshotRequest = CreateDataCollectionsSnapshotRequest;
  type dataV2DataCollection_universal_d_CreateDataCollectionsSnapshotResponse = CreateDataCollectionsSnapshotResponse;
  type dataV2DataCollection_universal_d_RestoreDataCollectionsFromSnapshotRequest = RestoreDataCollectionsFromSnapshotRequest;
  type dataV2DataCollection_universal_d_RestoreDataCollectionsFromSnapshotResponse = RestoreDataCollectionsFromSnapshotResponse;
  type dataV2DataCollection_universal_d_DeleteDataCollectionsSnapshotRequest = DeleteDataCollectionsSnapshotRequest;
  type dataV2DataCollection_universal_d_DeleteDataCollectionsSnapshotResponse = DeleteDataCollectionsSnapshotResponse;
  const dataV2DataCollection_universal_d_createDataCollection: typeof createDataCollection;
  const dataV2DataCollection_universal_d_getDataCollection: typeof getDataCollection;
  type dataV2DataCollection_universal_d_GetDataCollectionOptions = GetDataCollectionOptions;
  const dataV2DataCollection_universal_d_listDataCollections: typeof listDataCollections;
  type dataV2DataCollection_universal_d_ListDataCollectionsOptions = ListDataCollectionsOptions;
  const dataV2DataCollection_universal_d_bulkGetDataCollections: typeof bulkGetDataCollections;
  type dataV2DataCollection_universal_d_BulkGetDataCollectionsOptions = BulkGetDataCollectionsOptions;
  const dataV2DataCollection_universal_d_updateDataCollection: typeof updateDataCollection;
  const dataV2DataCollection_universal_d_deleteDataCollection: typeof deleteDataCollection;
  const dataV2DataCollection_universal_d_createDataCollectionField: typeof createDataCollectionField;
  type dataV2DataCollection_universal_d_CreateDataCollectionFieldOptions = CreateDataCollectionFieldOptions;
  const dataV2DataCollection_universal_d_updateDataCollectionField: typeof updateDataCollectionField;
  type dataV2DataCollection_universal_d_UpdateDataCollectionFieldOptions = UpdateDataCollectionFieldOptions;
  const dataV2DataCollection_universal_d_deleteDataCollectionField: typeof deleteDataCollectionField;
  type dataV2DataCollection_universal_d_DeleteDataCollectionFieldOptions = DeleteDataCollectionFieldOptions;
  namespace dataV2DataCollection_universal_d {
    export {
      dataV2DataCollection_universal_d_DataCollection as DataCollection,
      dataV2DataCollection_universal_d_CollectionType as CollectionType,
      dataV2DataCollection_universal_d_Sort as Sort,
      dataV2DataCollection_universal_d_Direction as Direction,
      dataV2DataCollection_universal_d_CollectionCapabilities as CollectionCapabilities,
      dataV2DataCollection_universal_d_DataOperation as DataOperation,
      dataV2DataCollection_universal_d_CollectionOperation as CollectionOperation,
      dataV2DataCollection_universal_d_IndexLimits as IndexLimits,
      Field$1 as Field,
      dataV2DataCollection_universal_d_FieldRangeValidationsOneOf as FieldRangeValidationsOneOf,
      dataV2DataCollection_universal_d_FieldType as FieldType,
      dataV2DataCollection_universal_d_TypeMetadata as TypeMetadata,
      dataV2DataCollection_universal_d_TypeMetadataMetadataOneOf as TypeMetadataMetadataOneOf,
      dataV2DataCollection_universal_d_FieldCapabilities as FieldCapabilities,
      dataV2DataCollection_universal_d_QueryOperator as QueryOperator,
      dataV2DataCollection_universal_d_ObjectField as ObjectField,
      dataV2DataCollection_universal_d_FieldsPattern as FieldsPattern,
      dataV2DataCollection_universal_d_UrlizedOnlyPattern as UrlizedOnlyPattern,
      dataV2DataCollection_universal_d_Calculator as Calculator,
      dataV2DataCollection_universal_d_CalculatorPatternOneOf as CalculatorPatternOneOf,
      dataV2DataCollection_universal_d_Reference as Reference,
      dataV2DataCollection_universal_d_MultiReference as MultiReference,
      Object$1 as Object,
      Array$1 as Array,
      dataV2DataCollection_universal_d_PageLink as PageLink,
      dataV2DataCollection_universal_d_NumberRange as NumberRange,
      dataV2DataCollection_universal_d_StringLengthRange as StringLengthRange,
      dataV2DataCollection_universal_d_ArraySizeRange as ArraySizeRange,
      dataV2DataCollection_universal_d_FieldPlugin as FieldPlugin,
      dataV2DataCollection_universal_d_FieldPluginOptionsOneOf as FieldPluginOptionsOneOf,
      dataV2DataCollection_universal_d_FieldPluginType as FieldPluginType,
      dataV2DataCollection_universal_d_CmsOptions as CmsOptions,
      dataV2DataCollection_universal_d_Permissions as Permissions,
      dataV2DataCollection_universal_d_Role as Role,
      dataV2DataCollection_universal_d_Plugin as Plugin,
      dataV2DataCollection_universal_d_PluginOptionsOneOf as PluginOptionsOneOf,
      Status$1 as Status,
      dataV2DataCollection_universal_d_Format as Format,
      dataV2DataCollection_universal_d_SiteSort as SiteSort,
      dataV2DataCollection_universal_d_Type as Type,
      PublishPluginOptions$1 as PublishPluginOptions,
      dataV2DataCollection_universal_d_SingleItemPluginOptions as SingleItemPluginOptions,
      dataV2DataCollection_universal_d_UrlizedPluginOptions as UrlizedPluginOptions,
      dataV2DataCollection_universal_d_MultilingualOptions as MultilingualOptions,
      dataV2DataCollection_universal_d_PageLinkPluginOptions as PageLinkPluginOptions,
      dataV2DataCollection_universal_d_PluginCmsOptions as PluginCmsOptions,
      dataV2DataCollection_universal_d_PagingMode as PagingMode,
      dataV2DataCollection_universal_d_DataCollectionClonedEvent as DataCollectionClonedEvent,
      dataV2DataCollection_universal_d_DataCollectionChangedEvent as DataCollectionChangedEvent,
      dataV2DataCollection_universal_d_FieldUpdate as FieldUpdate,
      dataV2DataCollection_universal_d_PluginUpdate as PluginUpdate,
      dataV2DataCollection_universal_d_CreateDataCollectionRequest as CreateDataCollectionRequest,
      dataV2DataCollection_universal_d_CreateDataCollectionResponse as CreateDataCollectionResponse,
      dataV2DataCollection_universal_d_GetDataCollectionRequest as GetDataCollectionRequest,
      dataV2DataCollection_universal_d_GetDataCollectionResponse as GetDataCollectionResponse,
      dataV2DataCollection_universal_d_ListDataCollectionsRequest as ListDataCollectionsRequest,
      Sorting$1 as Sorting,
      SortOrder$1 as SortOrder,
      Paging$2 as Paging,
      dataV2DataCollection_universal_d_ListDataCollectionsResponse as ListDataCollectionsResponse,
      PagingMetadataV2$1 as PagingMetadataV2,
      dataV2DataCollection_universal_d_BulkGetDataCollectionsRequest as BulkGetDataCollectionsRequest,
      dataV2DataCollection_universal_d_BulkGetDataCollectionsResponse as BulkGetDataCollectionsResponse,
      dataV2DataCollection_universal_d_UpdateDataCollectionRequest as UpdateDataCollectionRequest,
      dataV2DataCollection_universal_d_UpdateDataCollectionResponse as UpdateDataCollectionResponse,
      dataV2DataCollection_universal_d_DeleteDataCollectionRequest as DeleteDataCollectionRequest,
      dataV2DataCollection_universal_d_DeleteDataCollectionResponse as DeleteDataCollectionResponse,
      dataV2DataCollection_universal_d_CreateDataCollectionFieldRequest as CreateDataCollectionFieldRequest,
      dataV2DataCollection_universal_d_CreateDataCollectionFieldResponse as CreateDataCollectionFieldResponse,
      dataV2DataCollection_universal_d_UpdateDataCollectionFieldRequest as UpdateDataCollectionFieldRequest,
      dataV2DataCollection_universal_d_UpdateDataCollectionFieldResponse as UpdateDataCollectionFieldResponse,
      dataV2DataCollection_universal_d_DeleteDataCollectionFieldRequest as DeleteDataCollectionFieldRequest,
      dataV2DataCollection_universal_d_DeleteDataCollectionFieldResponse as DeleteDataCollectionFieldResponse,
      dataV2DataCollection_universal_d_BulkGetDataCollectionsPageBySnapshotsRequest as BulkGetDataCollectionsPageBySnapshotsRequest,
      dataV2DataCollection_universal_d_BulkGetDataCollectionsPageBySnapshotsResponse as BulkGetDataCollectionsPageBySnapshotsResponse,
      dataV2DataCollection_universal_d_SnapshotCollection as SnapshotCollection,
      Index$1 as Index,
      Order$1 as Order,
      dataV2DataCollection_universal_d_IndexField as IndexField,
      dataV2DataCollection_universal_d_IndexStatus as IndexStatus,
      Failure$1 as Failure,
      dataV2DataCollection_universal_d_CreateDataCollectionsSnapshotRequest as CreateDataCollectionsSnapshotRequest,
      dataV2DataCollection_universal_d_CreateDataCollectionsSnapshotResponse as CreateDataCollectionsSnapshotResponse,
      dataV2DataCollection_universal_d_RestoreDataCollectionsFromSnapshotRequest as RestoreDataCollectionsFromSnapshotRequest,
      dataV2DataCollection_universal_d_RestoreDataCollectionsFromSnapshotResponse as RestoreDataCollectionsFromSnapshotResponse,
      dataV2DataCollection_universal_d_DeleteDataCollectionsSnapshotRequest as DeleteDataCollectionsSnapshotRequest,
      dataV2DataCollection_universal_d_DeleteDataCollectionsSnapshotResponse as DeleteDataCollectionsSnapshotResponse,
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
      dataV2DataCollection_universal_d_createDataCollection as createDataCollection,
      dataV2DataCollection_universal_d_getDataCollection as getDataCollection,
      dataV2DataCollection_universal_d_GetDataCollectionOptions as GetDataCollectionOptions,
      dataV2DataCollection_universal_d_listDataCollections as listDataCollections,
      dataV2DataCollection_universal_d_ListDataCollectionsOptions as ListDataCollectionsOptions,
      dataV2DataCollection_universal_d_bulkGetDataCollections as bulkGetDataCollections,
      dataV2DataCollection_universal_d_BulkGetDataCollectionsOptions as BulkGetDataCollectionsOptions,
      dataV2DataCollection_universal_d_updateDataCollection as updateDataCollection,
      dataV2DataCollection_universal_d_deleteDataCollection as deleteDataCollection,
      dataV2DataCollection_universal_d_createDataCollectionField as createDataCollectionField,
      dataV2DataCollection_universal_d_CreateDataCollectionFieldOptions as CreateDataCollectionFieldOptions,
      dataV2DataCollection_universal_d_updateDataCollectionField as updateDataCollectionField,
      dataV2DataCollection_universal_d_UpdateDataCollectionFieldOptions as UpdateDataCollectionFieldOptions,
      dataV2DataCollection_universal_d_deleteDataCollectionField as deleteDataCollectionField,
      dataV2DataCollection_universal_d_DeleteDataCollectionFieldOptions as DeleteDataCollectionFieldOptions,
    };
  }
  
  interface DataItem {
      /** Data item ID. */
      _id?: string;
      /**
       * ID of the collection this item belongs to
       * @readonly
       */
      dataCollectionId?: string;
      /**
       * Data item contents.
       *
       * Property-value pairs representing the data item's payload. When retrieving a data item, it also includes the following read-only fields:
       *
       * + `_id`: Item ID.
       * + `_createdDate`: Date and time the item was added to the collection.
       * + `_updatedDate`: Date and time the item was last modified. When the item is first inserted, `_createdDate` and `_updatedDate` have the same value.
       * + `_ownerId`: ID of the user who created the item. Can be modified with site owner permissions.
       */
      data?: Record<string, any> | null;
  }
  interface InsertDataItemRequest {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection in which to insert the item. */
      dataCollectionId: string;
      /** Item to insert. */
      dataItem: DataItem;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * If true, referenced items will be included.
       * @internal
       */
      includeReferencedItems?: boolean;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  enum Environment$1 {
      LIVE = "LIVE",
      SANDBOX = "SANDBOX"
  }
  interface Options {
      /**
       * Should hooks execution be suppressed.
       * This option can only be used with Corvid backend
       * code identity.
       * @internal
       */
      suppressHooks?: boolean;
      /** @internal */
      appOptions?: Record<string, any> | null;
      /** @internal */
      publishPluginOptions?: PublishPluginOptions;
  }
  interface PublishPluginOptions {
      showDraftItems?: boolean;
  }
  interface InsertDataItemResponse {
      /** Inserted data item. */
      dataItem?: DataItem;
  }
  interface UpdateDataItemRequest {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection containing the existing item. */
      dataCollectionId: string;
      /** Updated data item content. The existing data item's content is replaced entirely. */
      dataItem: DataItem;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * If true, referenced items will be included.
       * @internal
       */
      includeReferencedItems?: boolean;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  interface UpdateDataItemResponse {
      /** Updated data item. */
      dataItem?: DataItem;
  }
  interface SaveDataItemRequest {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection in which to insert or update the item. */
      dataCollectionId: string;
      /** Data item to insert or update. */
      dataItem: DataItem;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * If true, referenced items will be included.
       * @internal
       */
      includeReferencedItems?: boolean;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  interface SaveDataItemResponse {
      /**
       * The action carried out for the item.
       *
       * + `INSERTED`: A new item was added to the collection.
       * + `UPDATED`: An existing item in the collection was updated.
       */
      action?: Action;
      /** Inserted or updated data item. */
      dataItem?: DataItem;
  }
  enum Action {
      UNKNOWN_ACTION = "UNKNOWN_ACTION",
      INSERTED = "INSERTED",
      UPDATED = "UPDATED"
  }
  interface GetDataItemRequest {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection from which to retrieve the data item. */
      dataCollectionId: string;
      /** ID of the data item to retrieve. */
      dataItemId: string;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Whether to retrieve data from the primary database instance.
       * This decreases performance but ensures data retrieved is up to date even immediately after an update.
       *
       * Default: `false`
       */
      consistentRead?: boolean;
      /**
       * Language to translate result text into, in [IETF BCP 47 language tag](https://en.wikipedia.org/wiki/IETF_language_tag) format.
       * If provided, the result text is returned in the specified language.
       * **Note:** Translation for the specified language must be enabled for the collection in [Wix Multilingual](https://www.wix.com/app-market/wix-multilingual).
       *
       * If not provided, result text is not translated.
       */
      language?: string | null;
      /** Array of projected fields. A list of specific field names to return. */
      fields?: string[];
  }
  interface GetDataItemResponse {
      /** Retrieved item. */
      dataItem?: DataItem;
  }
  interface RemoveDataItemRequest {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection from which to remove the item. */
      dataCollectionId: string;
      /** ID of the item to remove. */
      dataItemId: string;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  interface RemoveDataItemResponse {
      /** Removed item. */
      dataItem?: DataItem;
  }
  interface TruncateDataItemsRequest {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection to truncate. */
      dataCollectionId: string;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  interface TruncateDataItemsResponse {
  }
  interface QueryDataItemsRequest {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection to query. */
      dataCollectionId: string;
      /** Query preferences. For more details on using queries, see [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language). */
      query?: QueryV2;
      /**
       * Whether to return the total count in the response for a query with offset paging.
       * When `true`, the `pagingMetadata` object in the response contains a `total` field.
       *
       * Default: `false`
       */
      returnTotalCount?: boolean;
      /**
       * Properties for which to include referenced items in the query's results.
       * Up to 50 referenced items can be included for each item that matches the query.
       */
      includeReferencedItems?: string[];
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Whether to retrieve data from the primary database instance.
       * This decreases performance but ensures data retrieved is up to date even immediately after an update.
       *
       * Default: `false`
       */
      consistentRead?: boolean;
      /**
       * Language to translate result text into, in [IETF BCP 47 language tag](https://en.wikipedia.org/wiki/IETF_language_tag) format.
       * If provided, the result text is returned in the specified language.
       * **Note:** Translation for the specified language must be enabled for the collection in [Wix Multilingual](https://www.wix.com/app-market/wix-multilingual).
       *
       * If not provided, result text is not translated.
       */
      language?: string | null;
  }
  interface QueryV2 extends QueryV2PagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$1;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
      /**
       * Filter object in the following format:
       *
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`
       *
       * Examples of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
       */
      filter?: Record<string, any> | null;
      /**
       * Sort object in the following format:
       * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
       */
      sort?: Sorting[];
      /** Array of projected fields. A list of specific field names to return. */
      fields?: string[];
  }
  /** @oneof */
  interface QueryV2PagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$1;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
  }
  interface Sorting {
      /** Name of the field to sort by. */
      fieldName?: string;
      /**
       * Sort order.
       *
       * Supported values: `ASC`, `DESC`.
       */
      order?: SortOrder;
  }
  enum SortOrder {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface Paging$1 {
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
  interface QueryDataItemsResponse {
      /** Retrieved items. */
      dataItems?: DataItem[];
      /** Paging information. */
      pagingMetadata?: PagingMetadataV2;
  }
  interface PagingMetadataV2 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      offset?: number | null;
      /** Total number of items that match the query. Returned if offset paging is used, `returnTotalCount` is `true` in the request, and `tooManyToCount` is false. */
      total?: number | null;
      /** Whether the server failed to calculate the `total` field. */
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
  interface AggregateDataItemsRequest extends AggregateDataItemsRequestPagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$1;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection on which to run the aggregation. */
      dataCollectionId: string;
      /** Filter applied to the collection's data prior to running the aggregation. See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language#getting-started_api-query-language_the-filter-section) for information on how to structure a filter object. */
      initialFilter?: Record<string, any> | null;
      /** Aggregation applied to the data. */
      aggregation?: Aggregation;
      /** Filter applied to the processed data following the aggregation. See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language#getting-started_api-query-language_the-filter-section) for information on how to structure a filter object. */
      finalFilter?: Record<string, any> | null;
      /**
       * Sort object in the following format:
       * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
       */
      sort?: Sorting[];
      /**
       * Whether to return the total count in the response for a query with offset paging.
       * When `true`, the `pagingMetadata` object in the response contains a `total` field.
       *
       * Default: `false`
       */
      returnTotalCount?: boolean;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Whether to retrieve data from the primary database instance.
       * This decreases performance but ensures data retrieved is up to date even immediately after an update.
       *
       * Default: `false`
       */
      consistentRead?: boolean;
      /**
       * Language to translate result text into, in [IETF BCP 47 language tag](https://en.wikipedia.org/wiki/IETF_language_tag) format.
       * If provided, the result text is returned in the specified language.
       * **Note:** Translation for the specified language must be enabled for the collection in [Wix Multilingual](https://www.wix.com/app-market/wix-multilingual).
       *
       * If not provided, result text is not translated.
       */
      language?: string | null;
  }
  /** @oneof */
  interface AggregateDataItemsRequestPagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$1;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
  }
  interface Average {
      /** Name of the field for which to calculate the average value. */
      itemFieldName?: string;
  }
  interface Min {
      /** Name of the field for which to calculate the minimum value. */
      itemFieldName?: string;
  }
  interface Max {
      /** Name of the field for which to calculate the maximum value. */
      itemFieldName?: string;
  }
  interface Sum {
      /** Name of the field for which to calculate the sum. */
      itemFieldName?: string;
  }
  interface Count {
  }
  interface Operation extends OperationCalculateOneOf {
      /** Calculate the average value of a specified field for all items in the grouping. */
      average?: Average;
      /** Calculate the minimum value of a specified field for all items in the grouping. */
      min?: Min;
      /** Calculate the maximum value of a specified field for all items in the grouping. */
      max?: Max;
      /** Calculate the sum of values of a specified field for all items in the grouping. */
      sum?: Sum;
      /** Calculate the number of items in the grouping. */
      itemCount?: Count;
      /** Name of the field containing results of the operation. */
      resultFieldName?: string;
  }
  /** @oneof */
  interface OperationCalculateOneOf {
      /** Calculate the average value of a specified field for all items in the grouping. */
      average?: Average;
      /** Calculate the minimum value of a specified field for all items in the grouping. */
      min?: Min;
      /** Calculate the maximum value of a specified field for all items in the grouping. */
      max?: Max;
      /** Calculate the sum of values of a specified field for all items in the grouping. */
      sum?: Sum;
      /** Calculate the number of items in the grouping. */
      itemCount?: Count;
  }
  interface Aggregation {
      /** Fields by which to group items for the aggregation. If empty, the aggregation is carried out on all items in the collection. */
      groupingFields?: string[];
      /** Operations to carry out on the data in each grouping. */
      operations?: Operation[];
  }
  interface AggregateDataItemsResponse {
      /** Aggregation results. */
      results?: Record<string, any>[] | null;
      /** Paging information. */
      pagingMetadata?: PagingMetadataV2;
  }
  interface CountDataItemsRequest {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection for which to count query results. */
      dataCollectionId: string;
      /**
       * Filter object in the following format:
       *
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`.
       *
       * Examples of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`.
       */
      filter?: Record<string, any> | null;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Whether to retrieve data from the primary database instance.
       * This decreases performance but ensures data retrieved is up to date even immediately after an update.
       *
       * Default: `false`
       */
      consistentRead?: boolean;
      /**
       * Language to translate result text into, in [IETF BCP 47 language tag](https://en.wikipedia.org/wiki/IETF_language_tag) format.
       * If provided, the result text is returned in the specified language.
       * **Note:** Translation for the specified language must be enabled for the collection in [Wix Multilingual](https://www.wix.com/app-market/wix-multilingual).
       *
       * If not provided, result text is not translated.
       */
      language?: string | null;
  }
  interface CountDataItemsResponse {
      /** Number of items matching the query. */
      totalCount?: number;
  }
  interface QueryDistinctValuesRequest extends QueryDistinctValuesRequestPagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$1;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection to query. */
      dataCollectionId: string;
      /** Item field name for which to return all distinct values. */
      fieldName?: string;
      /**
       * Filter object in the following format:
       *
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`.
       *
       * Examples of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`.
       */
      filter?: Record<string, any> | null;
      /**
       * Sort order.
       *
       * Supported values: `ASC`, `DESC`.
       */
      order?: SortOrder;
      /**
       * Whether to return the total count in the response for a query with offset paging.
       * When `true`, the `pagingMetadata` object in the response contains a `total` field.
       *
       * Default: `false`
       */
      returnTotalCount?: boolean;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Whether to retrieve data from the primary database instance.
       * This decreases performance but ensures data retrieved is up to date even immediately after an update.
       *
       * Default: `false`
       */
      consistentRead?: boolean;
      /**
       * Language to translate result text into, in [IETF BCP 47 language tag](https://en.wikipedia.org/wiki/IETF_language_tag) format.
       * If provided, the result text is returned in the specified language.
       * **Note:** Translation for the specified language must be enabled for the collection in [Wix Multilingual](https://www.wix.com/app-market/wix-multilingual).
       *
       * If not provided, result text is not translated.
       */
      language?: string | null;
  }
  /** @oneof */
  interface QueryDistinctValuesRequestPagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$1;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
  }
  interface QueryDistinctValuesResponse {
      /** List of distinct values contained in the field specified in `fieldName`. */
      distinctValues?: any[];
      /** Paging information. */
      pagingMetadata?: PagingMetadataV2;
  }
  interface BulkInsertDataItemsRequest {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection in which to insert the items. */
      dataCollectionId: string;
      /** Data items to insert. */
      dataItems: DataItem[];
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options.
       * @internal
       */
      options?: Options;
      /**
       * Whether to return the inserted data items.
       * When `true`, the `results` objects contain a `dataItem` field.
       *
       * Default: `false`
       */
      returnEntity?: boolean;
  }
  interface BulkInsertDataItemsResponse {
      /** Information about the inserted items. */
      results?: BulkDataItemResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkDataItemResult {
      /**
       * The action attempted for the data item.
       *
       * Supported values: `UNKNOWN_ACTION_TYPE`, `INSERT`, `UPDATE`, `DELETE`.
       */
      action?: BulkActionType;
      /** Metadata related to the data item for which the action was attempted. */
      itemMetadata?: ItemMetadata;
      /** The data item for which the action was attempted. Only returned if `returnEntity` is `true` in the request and the action is successful. */
      dataItem?: DataItem;
  }
  enum BulkActionType {
      UNKNOWN_ACTION_TYPE = "UNKNOWN_ACTION_TYPE",
      INSERT = "INSERT",
      UPDATE = "UPDATE",
      DELETE = "DELETE"
  }
  interface ItemMetadata {
      /** Item ID. This field doesn't appear if there is no item ID, for example, when item creation fails. */
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
      /** Number of items successfully processed. */
      totalSuccesses?: number;
      /** Number of items that couldn't be processed. */
      totalFailures?: number;
  }
  interface BulkUpdateDataItemsRequest {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection in which to update items. */
      dataCollectionId: string;
      /** Data items to update. */
      dataItems: DataItem[];
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Whether to return the updated data items.
       * When `true`, the `results` objects contain a `dataItem` field.
       *
       * Default: `false`
       */
      returnEntity?: boolean;
  }
  interface BulkUpdateDataItemsResponse {
      /** Information about the updated items. */
      results?: BulkDataItemResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkSaveDataItemsRequest {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection in which to insert or update the items. */
      dataCollectionId: string;
      /** Data items to insert or update. */
      dataItems: DataItem[];
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Whether to return the saved data item.
       * When `true`, the `results` objects contain a `dataItem` field.
       *
       * Default: `false`
       */
      returnEntity?: boolean;
  }
  interface BulkSaveDataItemsResponse {
      /** Information about the saved items. */
      results?: BulkDataItemResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkRemoveDataItemsRequest {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection from which to remove the item. */
      dataCollectionId: string;
      /** IDs of data items to remove. */
      dataItemIds: string[];
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  interface BulkRemoveDataItemsResponse {
      /** Information about the removed data items. */
      results?: BulkDataItemResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface QueryReferencedDataItemsRequest extends QueryReferencedDataItemsRequestPagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$1;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection containing the referring item. */
      dataCollectionId: string;
      /** ID of the referring item. */
      referringItemId?: string;
      /** Field containing references in the referring item. */
      referringItemFieldName?: string;
      /** Order of the returned referenced items. Sorted by the date each item was referenced. */
      order?: SortOrder;
      /**
       * Whether to return the total count in the response.
       * When `true`, the `pagingMetadata` object in the response contains a `total` field.
       *
       * Default: `false`
       */
      returnTotalCount?: boolean;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Whether to retrieve data from the primary database instance.
       * This decreases performance but ensures data retrieved is up to date even immediately after an update.
       *
       * Default: `false`
       */
      consistentRead?: boolean;
      /**
       * Language to translate result text into, in [IETF BCP 47 language tag](https://en.wikipedia.org/wiki/IETF_language_tag) format.
       * If provided, the result text is returned in the specified language.
       * **Note:** Translation for the specified language must be enabled for the collection in [Wix Multilingual](https://www.wix.com/app-market/wix-multilingual).
       *
       * If not provided, result text is not translated.
       */
      language?: string | null;
      /** Array of projected fields. A list of specific field names to return. */
      fields?: string[];
  }
  /** @oneof */
  interface QueryReferencedDataItemsRequestPagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$1;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
  }
  interface QueryReferencedDataItemsResponse {
      /** Referenced items and/or IDs. For successfully resolved references, the referenced data item is returned. For references that can't be resolved, the ID is returned. */
      results?: ReferencedResult[];
      /** Paging information. */
      pagingMetadata?: PagingMetadataV2;
  }
  interface UnresolvedReference {
      /** ID of the referring item. */
      referringItemId?: string;
      /** Field specified to query for references. */
      referringItemFieldName?: string;
  }
  interface ReferencedResult extends ReferencedResultEntityOneOf {
      /** Data item referenced. */
      dataItem?: DataItem;
      /** Unresolved reference. Appears instead of the data item when the reference doesn't resolve, for example, when an ID isn't found or if an item is in draft state. */
      unresolvedReference?: UnresolvedReference;
  }
  /** @oneof */
  interface ReferencedResultEntityOneOf {
      /** Data item referenced. */
      dataItem?: DataItem;
      /** Unresolved reference. Appears instead of the data item when the reference doesn't resolve, for example, when an ID isn't found or if an item is in draft state. */
      unresolvedReference?: UnresolvedReference;
  }
  interface IsReferencedDataItemRequest {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection containing the referring data item. */
      dataCollectionId: string;
      /** Field to check for a reference to the item that may be referenced. */
      referringItemFieldName: string;
      /** ID of the referring item. */
      referringItemId: string;
      /** ID of the item that may be referenced. */
      referencedItemId: string;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Whether to retrieve data from the primary database instance.
       * This decreases performance but ensures data retrieved is up to date even immediately after an update.
       *
       * Default: `false`
       */
      consistentRead?: boolean;
  }
  interface IsReferencedDataItemResponse {
      /** Whether the specified reference exists. */
      isReferenced?: boolean;
  }
  interface InsertDataItemReferenceRequest {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection in which to insert the reference. */
      dataCollectionId: string;
      /** Reference to insert */
      dataItemReference?: DataItemReference;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  interface DataItemReference {
      /** Referring item field containing the references to the referenced items. */
      referringItemFieldName?: string;
      /** ID of the referring item. */
      referringItemId?: string;
      /** ID of the referenced item. */
      referencedItemId?: string;
  }
  interface InsertDataItemReferenceResponse {
      /** Inserted reference. */
      dataItemReference?: DataItemReference;
  }
  interface RemoveDataItemReferenceRequest {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection containing the referring item. */
      dataCollectionId: string;
      /** Reference to remove. */
      dataItemReference: DataItemReference;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  interface RemoveDataItemReferenceResponse {
      /** Removed reference. */
      dataItemReference?: DataItemReference;
  }
  interface BulkInsertDataItemReferencesRequest {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection containing the referring items. */
      dataCollectionId: string;
      /** References to insert. */
      dataItemReferences: DataItemReference[];
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Whether to return the inserted data item references.
       * When `true`, the `results` objects contain a `dataItemReference` field.
       *
       * Default: `false`
       */
      returnEntity?: boolean;
  }
  interface BulkInsertDataItemReferencesResponse {
      /** Information about the inserted references. */
      results?: BulkDataItemReferenceResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkDataItemReferenceResult {
      /**
       * The action attempted for the reference.
       *
       * Supported values: `UNKNOWN_ACTION_TYPE`, `INSERT`, `UPDATE`, `DELETE`.
       */
      action?: BulkActionType;
      /** Metadata related to the reference for which the action was attempted. */
      referenceMetadata?: ItemMetadata;
      /** The reference for which the action was attempted. Only returned if `returnEntity` is `true` in the request and the action is successful. */
      dataItemReference?: DataItemReference;
  }
  interface BulkRemoveDataItemReferencesRequest {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection containing the referring items. */
      dataCollectionId: string;
      /** References to remove. */
      dataItemReferences: DataItemReference[];
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  interface BulkRemoveDataItemReferencesResponse {
      /** Information about the removed references. */
      results?: BulkDataItemReferenceResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface ReplaceDataItemReferencesRequest {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection containing the referring item. */
      dataCollectionId: string;
      /** Field containing references in the referring item. */
      referringItemFieldName: string;
      /** ID of the referring item. */
      referringItemId: string;
      /** List of new referenced item IDs to replace the existing ones. */
      newReferencedItemIds?: string[];
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  interface ReplaceDataItemReferencesResponse {
      /** Updated references. */
      dataItemReferences?: DataItemReference[];
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
   * Adds an item to a collection.
   *
   *
   * An item can only be inserted into an existing connection.
   * You can create a new collection using the Data Collections API.
   *
   * When an item is inserted into a collection, the item's ID is automatically assigned a random value.
   * You can optionally provide a custom ID in `dataItem.id` when inserting the item.
   * If you specify an ID that already exists in the collection, the insertion will fail.
   *
   * If `options.dataItem.data` is empty, a new item is created with no data fields.
   * @public
   * @documentationMaturity preview
   * @requiredField options.dataCollectionId
   * @requiredField options.dataItem
   * @param options - Options for adding an item to a collection.
   * @adminMethod
   */
  function insertDataItem(options?: InsertDataItemOptions): Promise<InsertDataItemResponse>;
  interface InsertDataItemOptions {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection in which to insert the item. */
      dataCollectionId: string;
      /** Item to insert. */
      dataItem: DataItem;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * If true, referenced items will be included.
       * @internal
       */
      includeReferencedItems?: boolean;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  /**
   * Updates an item in a collection.
   *
   *
   * This function replaces the data item's existing data with the payload provided in `options.dataItem.data` in the request.
   *
   * To update an item, you need to specify an item ID and a collection ID.
   * If an item is found in the specified collection with the specified ID, that item is updated.
   * If the collection doesn't contain an item with that ID, the request fails.
   *
   * When an item is updated, its `data._updatedDate` field is changed to the current date and time.
   *
   * > **Note:**
   * > After an item is updated, it only contains the fields included in the `options.dataItem.data` payload in the `updateDataItem()` call.
   * > If the existing item has fields with values and those fields aren't included in the updated item, their values are lost.
   * @param _id - Data item ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField options.dataCollectionId
   * @requiredField options.dataItem
   * @param options - Options for updating an item in a collection.
   * @adminMethod
   */
  function updateDataItem(_id: string, options?: UpdateDataItemOptions): Promise<UpdateDataItemResponse>;
  interface UpdateDataItemOptions {
      /** Updated data item content. The existing data item's content is replaced entirely. */
      dataItem: {
          /** Data item ID. */
          _id?: string;
          /**
           * ID of the collection this item belongs to
           * @readonly
           */
          dataCollectionId?: string;
          /**
           * Data item contents.
           *
           * Property-value pairs representing the data item's payload. When retrieving a data item, it also includes the following read-only fields:
           *
           * + `_id`: Item ID.
           * + `_createdDate`: Date and time the item was added to the collection.
           * + `_updatedDate`: Date and time the item was last modified. When the item is first inserted, `_createdDate` and `_updatedDate` have the same value.
           * + `_ownerId`: ID of the user who created the item. Can be modified with site owner permissions.
           */
          data?: Record<string, any> | null;
      };
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection containing the existing item. */
      dataCollectionId: string;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * If true, referenced items will be included.
       * @internal
       */
      includeReferencedItems?: boolean;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  /**
   * Inserts or updates an item in a collection.
   *
   *
   * The `saveDataItem()` function inserts or updates the specified item, depending on whether it already exists in the collection.
   *
   * + If you don't provide an ID, a new item is created.
   *
   * + If you provide an ID that does not exist in the collection, a new item is created with that ID.
   *
   * + If an item with the ID you provide already exists in the collection, that item is updated. When an item is updated, its `data._updatedDate` field is changed to the current date and time.
   *
   * > **Note:** When you provide an item with an ID that already exists in the collection, the payload you provide in `options.dataItem.data` replaces the existing item with that ID.
   * > This means that the item's previous fields and values are lost.
   * @public
   * @documentationMaturity preview
   * @requiredField options.dataCollectionId
   * @requiredField options.dataItem
   * @param options - Options for saving an item in a collection.
   * @adminMethod
   */
  function saveDataItem(options?: SaveDataItemOptions): Promise<SaveDataItemResponse>;
  interface SaveDataItemOptions {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection in which to insert or update the item. */
      dataCollectionId: string;
      /** Data item to insert or update. */
      dataItem: DataItem;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * If true, referenced items will be included.
       * @internal
       */
      includeReferencedItems?: boolean;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  /**
   * Retrieves an item from a collection.
   *
   *
   * > **Note**: When calling `getDataItem()` following an update to your collection, the data retrieved may not contain the most recent changes. If you need the most up-to-date data, set `options.consistentRead` to `true`.
   * @param dataItemId - ID of the data item to retrieve.
   * @public
   * @documentationMaturity preview
   * @requiredField dataItemId
   * @requiredField options.dataCollectionId
   * @param options - Options for retrieving an item from a collection.
   * @adminMethod
   * @returns Retrieved item.
   */
  function getDataItem(dataItemId: string, options?: GetDataItemOptions): Promise<DataItem>;
  interface GetDataItemOptions {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection from which to retrieve the data item. */
      dataCollectionId: string;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Whether to retrieve data from the primary database instance.
       * This decreases performance but ensures data retrieved is up to date even immediately after an update.
       *
       * Default: `false`
       */
      consistentRead?: boolean;
      /**
       * Language to translate result text into, in [IETF BCP 47 language tag](https://en.wikipedia.org/wiki/IETF_language_tag) format.
       * If provided, the result text is returned in the specified language.
       * **Note:** Translation for the specified language must be enabled for the collection in [Wix Multilingual](https://www.wix.com/app-market/wix-multilingual).
       *
       * If not provided, result text is not translated.
       */
      language?: string | null;
      /** Array of projected fields. A list of specific field names to return. */
      fields?: string[];
  }
  /**
   * Removes an item from a collection.
   *
   *
   * If any items in other collections reference the removed item in reference or multi-reference fields, those fields are cleared.
   *
   * > **Note:**
   * > Once an item has been removed from a collection, it can't be restored.
   * @param dataItemId - ID of the item to remove.
   * @public
   * @documentationMaturity preview
   * @requiredField dataItemId
   * @requiredField options.dataCollectionId
   * @param options - Options for removing an item from a collection.
   * @adminMethod
   */
  function removeDataItem(dataItemId: string, options?: RemoveDataItemOptions): Promise<RemoveDataItemResponse>;
  interface RemoveDataItemOptions {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection from which to remove the item. */
      dataCollectionId: string;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  /**
   * Removes all items from a collection.
   *
   *
   * If any items in other collections reference the removed items in reference or multi-reference fields, those fields are cleared.
   *
   * > **Note:**
   * > Once items have been removed from a collection, they can't be restored.
   * @public
   * @documentationMaturity preview
   * @requiredField options.dataCollectionId
   * @param options - Options for truncating data items from a collection.
   * @adminMethod
   */
  function truncateDataItems(options?: TruncateDataItemsOptions): Promise<void>;
  interface TruncateDataItemsOptions {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection to truncate. */
      dataCollectionId: string;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  /**
   * Creates a query to retrieve items from a database collection.
   *
   * The `queryDataItems()` function builds a query to retrieve data items from a collection and returns a `DataItemsQueryBuilder` object.
   *
   * The returned object contains the query definition which is typically used to run the query using the `find()` function.
   *
   * You can refine the query by chaining `DataItemsQueryBuilder` functions onto the query. `DataItemsQueryBuilder` functions enable you to sort, filter, and control the results that `queryDataItems()` returns.
   *
   * The `queryDataItems()` function runs with the following `DataItemsQueryBuilder` defaults that you can override:
   *
   * + `skip`: 0
   * + `limit`: 50
   * + `descending`: by `_createdDate`
   *
   * The functions that are chained to `queryDataItems()` are applied in the order they are called. For example, if you sort on an `age` field in ascending order and then on a `name` field in descending order, the results are sorted first by the age of the items and then, if there are multiple results with the same age, the items are sorted by name in descending order, per age value.
   *
   * If the collection that you are querying has references to other collections, by default the data from referenced collections is not retrieved. To get the data from referenced items, specify them in the `options.includeReferencedItems` parameter.
   *
   * > **Note**: When calling `queryDataItems()` following an update to your collection, the data retrieved may not contain the most recent changes. If you need the most up-to-date data, set `options.consistentRead` to `true`.
   *
   *
   * @public
   * @documentationMaturity preview
   * @requiredField options.options.dataCollectionId
   * @param options - Options for querying data items.
   * @adminMethod
   */
  function queryDataItems(options: QueryDataItemsOptions): DataItemsQueryBuilder;
  interface QueryDataItemsOptions {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1 | undefined;
      /** ID of the collection to query. */
      dataCollectionId: string;
      /**
       * Whether to return the total count in the response for a query with offset paging.
       * When `true`, the `pagingMetadata` object in the response contains a `total` field.
       *
       * Default: `false`
       */
      returnTotalCount?: boolean | undefined;
      /**
       * Properties for which to include referenced items in the query's results.
       * Up to 50 referenced items can be included for each item that matches the query.
       */
      includeReferencedItems?: string[] | undefined;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null | undefined;
      /**
       * Data access options
       * @internal
       */
      options?: Options | undefined;
      /**
       * Whether to retrieve data from the primary database instance.
       * This decreases performance but ensures data retrieved is up to date even immediately after an update.
       *
       * Default: `false`
       */
      consistentRead?: boolean | undefined;
      /**
       * Language to translate result text into, in [IETF BCP 47 language tag](https://en.wikipedia.org/wiki/IETF_language_tag) format.
       * If provided, the result text is returned in the specified language.
       * **Note:** Translation for the specified language must be enabled for the collection in [Wix Multilingual](https://www.wix.com/app-market/wix-multilingual).
       *
       * If not provided, result text is not translated.
       */
      language?: string | null | undefined;
  }
  interface QueryOffsetResult {
      currentPage: number | undefined;
      totalPages: number | undefined;
      totalCount: number | undefined;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface DataItemsQueryResult extends QueryOffsetResult {
      items: DataItem[];
      query: DataItemsQueryBuilder;
      next: () => Promise<DataItemsQueryResult>;
      prev: () => Promise<DataItemsQueryResult>;
  }
  interface DataItemsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id' | 'dataCollectionId' | 'data' | string, value: any) => DataItemsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id' | 'dataCollectionId' | 'data' | string, value: any) => DataItemsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       * @documentationMaturity preview
       */
      startsWith: (propertyName: '_id' | 'dataCollectionId' | string, value: string) => DataItemsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id' | 'dataCollectionId' | 'data' | string, value: any) => DataItemsQueryBuilder;
      /** @documentationMaturity preview */
      exists: (propertyName: '_id' | 'dataCollectionId' | 'data' | string, value: boolean) => DataItemsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'_id' | 'dataCollectionId' | 'data' | string>) => DataItemsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'_id' | 'dataCollectionId' | 'data' | string>) => DataItemsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => DataItemsQueryBuilder;
      /** @param skip - Number of items to skip in the query results before returning the results.
       * @documentationMaturity preview
       */
      skip: (skip: number) => DataItemsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<DataItemsQueryResult>;
  }
  /**
   * Runs an aggregation on a data collection and returns the resulting list of items.
   *
   *
   * An aggregation enables you to perform certain calculations on your collection data, or on groups of items that you define, to retrieve meaningful summaries.
   * You can also add paging, filtering, and sorting preferences to your aggregation to retrieve exactly what you need.
   * @public
   * @documentationMaturity preview
   * @requiredField options.dataCollectionId
   * @param options - Options for running an aggregation.
   * @adminMethod
   */
  function aggregateDataItems(options?: AggregateDataItemsOptions): Promise<AggregateDataItemsResponse>;
  interface AggregateDataItemsOptions extends AggregateDataItemsRequestPagingMethodOneOf {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection on which to run the aggregation. */
      dataCollectionId: string;
      /** Filter applied to the collection's data prior to running the aggregation. See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language#getting-started_api-query-language_the-filter-section) for information on how to structure a filter object. */
      initialFilter?: Record<string, any> | null;
      /** Aggregation applied to the data. */
      aggregation?: Aggregation;
      /** Filter applied to the processed data following the aggregation. See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language#getting-started_api-query-language_the-filter-section) for information on how to structure a filter object. */
      finalFilter?: Record<string, any> | null;
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$1;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
      /**
       * Sort object in the following format:
       * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
       */
      sort?: Sorting[];
      /**
       * Whether to return the total count in the response for a query with offset paging.
       * When `true`, the `pagingMetadata` object in the response contains a `total` field.
       *
       * Default: `false`
       */
      returnTotalCount?: boolean;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Whether to retrieve data from the primary database instance.
       * This decreases performance but ensures data retrieved is up to date even immediately after an update.
       *
       * Default: `false`
       */
      consistentRead?: boolean;
      /**
       * Language to translate result text into, in [IETF BCP 47 language tag](https://en.wikipedia.org/wiki/IETF_language_tag) format.
       * If provided, the result text is returned in the specified language.
       * **Note:** Translation for the specified language must be enabled for the collection in [Wix Multilingual](https://www.wix.com/app-market/wix-multilingual).
       *
       * If not provided, result text is not translated.
       */
      language?: string | null;
  }
  /**
   * Counts the number of items in a data collection that match the provided filtering preferences.
   *
   * > **Note**: When calling `countDataItems()` following an update to your collection, the result returned may not reflect the most recent changes. If you need the most up-to-date data, set `options.consistentRead` to `true`.
   * @public
   * @documentationMaturity preview
   * @requiredField options.dataCollectionId
   * @param options - Options for counting the number of items in a data collection.
   * @adminMethod
   */
  function countDataItems(options?: CountDataItemsOptions): Promise<CountDataItemsResponse>;
  interface CountDataItemsOptions {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection for which to count query results. */
      dataCollectionId: string;
      /**
       * Filter object in the following format:
       *
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`.
       *
       * Examples of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`.
       */
      filter?: Record<string, any> | null;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Whether to retrieve data from the primary database instance.
       * This decreases performance but ensures data retrieved is up to date even immediately after an update.
       *
       * Default: `false`
       */
      consistentRead?: boolean;
      /**
       * Language to translate result text into, in [IETF BCP 47 language tag](https://en.wikipedia.org/wiki/IETF_language_tag) format.
       * If provided, the result text is returned in the specified language.
       * **Note:** Translation for the specified language must be enabled for the collection in [Wix Multilingual](https://www.wix.com/app-market/wix-multilingual).
       *
       * If not provided, result text is not translated.
       */
      language?: string | null;
  }
  /**
   * Retrieves a list of distinct values for a given field in all items that match a query, without duplicates.
   *
   *
   * As with `queryDataItems()`, this endpoint retrieves items based on the filtering, sorting, and paging preferences you provide.
   * However, `queryDistinctValues()` doesn't return all of the full items that match the query.
   * Rather, it returns all unique values of the field you specify in `options.fieldName` for items that match the query.
   * If more than one item has the same value for that field, that value appears only once.
   *
   * For more details on using queries, see [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language).
   *
   * > **Note**: When calling `queryDistinctValues()` following an update to your collection, the data retrieved may not reflect the most recent changes. If you need the most up-to-date data, set `options.consistentRead` to `true`.
   * @public
   * @documentationMaturity preview
   * @requiredField options.dataCollectionId
   * @param options - Options for querying distinct values.
   * @adminMethod
   */
  function queryDistinctValues(options?: QueryDistinctValuesOptions): Promise<QueryDistinctValuesResponse>;
  interface QueryDistinctValuesOptions extends QueryDistinctValuesRequestPagingMethodOneOf {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection to query. */
      dataCollectionId: string;
      /** Item field name for which to return all distinct values. */
      fieldName?: string;
      /**
       * Filter object in the following format:
       *
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`.
       *
       * Examples of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`.
       */
      filter?: Record<string, any> | null;
      /**
       * Sort order.
       *
       * Supported values: `ASC`, `DESC`.
       */
      order?: SortOrder;
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$1;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
      /**
       * Whether to return the total count in the response for a query with offset paging.
       * When `true`, the `pagingMetadata` object in the response contains a `total` field.
       *
       * Default: `false`
       */
      returnTotalCount?: boolean;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Whether to retrieve data from the primary database instance.
       * This decreases performance but ensures data retrieved is up to date even immediately after an update.
       *
       * Default: `false`
       */
      consistentRead?: boolean;
      /**
       * Language to translate result text into, in [IETF BCP 47 language tag](https://en.wikipedia.org/wiki/IETF_language_tag) format.
       * If provided, the result text is returned in the specified language.
       * **Note:** Translation for the specified language must be enabled for the collection in [Wix Multilingual](https://www.wix.com/app-market/wix-multilingual).
       *
       * If not provided, result text is not translated.
       */
      language?: string | null;
  }
  /**
   * Adds multiple items to a collection.
   *
   *
   * When each item is inserted into a collection, its ID is automatically assigned a random value.
   * You can optionally provide your own ID when inserting the item. If you specify an ID that already exists in the collection, the insertion will fail.
   * @public
   * @documentationMaturity preview
   * @requiredField options.dataCollectionId
   * @requiredField options.dataItems
   * @param options - Options for adding multiple items to a collection.
   * @adminMethod
   */
  function bulkInsertDataItems(options?: BulkInsertDataItemsOptions): Promise<BulkInsertDataItemsResponse>;
  interface BulkInsertDataItemsOptions {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection in which to insert the items. */
      dataCollectionId: string;
      /** Data items to insert. */
      dataItems: DataItem[];
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options.
       * @internal
       */
      options?: Options;
      /**
       * Whether to return the inserted data items.
       * When `true`, the `results` objects contain a `dataItem` field.
       *
       * Default: `false`
       */
      returnEntity?: boolean;
  }
  /**
   * Updates multiple items in a collection.
   *
   *
   * This function replaces each specified data item's existing data with the payload provided in the request.
   *
   * Each item in the request must include an ID. If an item is found in the specified collection with
   * the same ID, that item is updated. If the collection doesn't contain an item with that ID, the update fails.
   *
   * When an item is updated, its `data._updatedDate` field is changed to the current date and time.
   *
   * > **Note:**
   * > After each item is updated, it only contains the fields included in the request. If the existing item has fields with values and those fields
   * > aren't included in the updated item, their values are lost.
   * @public
   * @documentationMaturity preview
   * @requiredField options.dataCollectionId
   * @requiredField options.dataItems
   * @param options - Options for updating multiple items in a collection.
   * @adminMethod
   */
  function bulkUpdateDataItems(options?: BulkUpdateDataItemsOptions): Promise<BulkUpdateDataItemsResponse>;
  interface BulkUpdateDataItemsOptions {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection in which to update items. */
      dataCollectionId: string;
      /** Data items to update. */
      dataItems: DataItem[];
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Whether to return the updated data items.
       * When `true`, the `results` objects contain a `dataItem` field.
       *
       * Default: `false`
       */
      returnEntity?: boolean;
  }
  /**
   * Inserts or updates multiple items in a collection.
   *
   *
   * This function inserts or updates each item provided, depending on whether it already exists in the collection. For each item:
   *
   * + If you don't provide an ID, a new item is created.
   *
   * + If you provide an ID that doesn't exist in the collection, a new item is created with that ID.
   *
   * + If an item with the ID you provide already exists in the collection, that item is updated. When an item is updated, its `data._updatedDate` field is changed to the current date and time.
   *
   * > **Note:** When you provide an item with an ID that already exists in the collection, the item you provide completely replaces the existing item with that ID.
   * > This means that all of the item's previous fields and values are lost.
   * @public
   * @documentationMaturity preview
   * @requiredField options.dataCollectionId
   * @requiredField options.dataItems
   * @param options - Options for saving multiple items in a collection.
   * @adminMethod
   */
  function bulkSaveDataItems(options?: BulkSaveDataItemsOptions): Promise<BulkSaveDataItemsResponse>;
  interface BulkSaveDataItemsOptions {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection in which to insert or update the items. */
      dataCollectionId: string;
      /** Data items to insert or update. */
      dataItems: DataItem[];
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Whether to return the saved data item.
       * When `true`, the `results` objects contain a `dataItem` field.
       *
       * Default: `false`
       */
      returnEntity?: boolean;
  }
  /**
   * Removes multiple items from a collection.
   *
   *
   * If any items in other collections reference the removed items in reference or multi-reference fields, those fields are cleared.
   *
   * > **Note:** Once an item has been removed from a collection, it can't be restored.
   * @public
   * @documentationMaturity preview
   * @requiredField options.dataCollectionId
   * @requiredField options.dataItemIds
   * @param options - Options for removing multiple items from a collection.
   * @adminMethod
   */
  function bulkRemoveDataItems(options?: BulkRemoveDataItemsOptions): Promise<BulkRemoveDataItemsResponse>;
  interface BulkRemoveDataItemsOptions {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection from which to remove the item. */
      dataCollectionId: string;
      /** IDs of data items to remove. */
      dataItemIds: string[];
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  /**
   * Retrieves the full items referenced in the specified field of an item.
   *
   *
   * Reference and multi-reference fields refer to items in different collections.
   * Use this function to retrieve the full details of the referenced items themselves.
   *
   * For example, suppose you have a **Movies** collection with an **Actors** field that contains references to items in a **People** collection.
   * Querying the **Movies** collection using `queryReferencedDataItems()` returns the relevant **People** items referenced in the **Actors** field of the specified **Movie** item.
   * This gives you information from the **People** collection about each of the actors in the specified movie.
   *
   * > **Note**: When calling `queryReferencedDataItems()` following an update to your collection, the data retrieved may not contain the most recent changes. If you need the most up-to-date data, set `options.consistentRead` to `true`.
   * @public
   * @documentationMaturity preview
   * @requiredField options.dataCollectionId
   * @param options - Options for querying referenced data items.
   * @adminMethod
   */
  function queryReferencedDataItems(options?: QueryReferencedDataItemsOptions): Promise<QueryReferencedDataItemsResponse>;
  interface QueryReferencedDataItemsOptions extends QueryReferencedDataItemsRequestPagingMethodOneOf {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection containing the referring item. */
      dataCollectionId: string;
      /** ID of the referring item. */
      referringItemId?: string;
      /** Field containing references in the referring item. */
      referringItemFieldName?: string;
      /** Order of the returned referenced items. Sorted by the date each item was referenced. */
      order?: SortOrder;
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$1;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
      /**
       * Whether to return the total count in the response.
       * When `true`, the `pagingMetadata` object in the response contains a `total` field.
       *
       * Default: `false`
       */
      returnTotalCount?: boolean;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Whether to retrieve data from the primary database instance.
       * This decreases performance but ensures data retrieved is up to date even immediately after an update.
       *
       * Default: `false`
       */
      consistentRead?: boolean;
      /**
       * Language to translate result text into, in [IETF BCP 47 language tag](https://en.wikipedia.org/wiki/IETF_language_tag) format.
       * If provided, the result text is returned in the specified language.
       * **Note:** Translation for the specified language must be enabled for the collection in [Wix Multilingual](https://www.wix.com/app-market/wix-multilingual).
       *
       * If not provided, result text is not translated.
       */
      language?: string | null;
      /** Array of projected fields. A list of specific field names to return. */
      fields?: string[];
  }
  /**
   * Checks whether a field in a referring item contains a reference to a specified item.
   *
   * > **Note**: When calling `isReferencedDataItem()` following an update to your collection, the result returned may not reflect the most recent changes. If you need the most up-to-date data, set `options.consistentRead` to `true`.
   * @public
   * @documentationMaturity preview
   * @requiredField options.dataCollectionId
   * @requiredField options.referencedItemId
   * @requiredField options.referringItemFieldName
   * @requiredField options.referringItemId
   * @param options - Options for checking whether a field contains a reference to an item.
   * @adminMethod
   */
  function isReferencedDataItem(options?: IsReferencedDataItemOptions): Promise<IsReferencedDataItemResponse>;
  interface IsReferencedDataItemOptions {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection containing the referring data item. */
      dataCollectionId: string;
      /** Field to check for a reference to the item that may be referenced. */
      referringItemFieldName: string;
      /** ID of the referring item. */
      referringItemId: string;
      /** ID of the item that may be referenced. */
      referencedItemId: string;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Whether to retrieve data from the primary database instance.
       * This decreases performance but ensures data retrieved is up to date even immediately after an update.
       *
       * Default: `false`
       */
      consistentRead?: boolean;
  }
  /**
   * Inserts a reference in the specified field in an item in a collection.
   *
   *
   * A reference in `options.dataItemReference` specifies a referring item's ID, the field in which to insert the reference, and the ID of the referenced item.
   * @public
   * @documentationMaturity preview
   * @requiredField options.dataCollectionId
   * @requiredField options.dataItemReference.referencedItemId
   * @requiredField options.dataItemReference.referringItemFieldName
   * @requiredField options.dataItemReference.referringItemId
   * @param options - Options for inserting a reference.
   * @adminMethod
   */
  function insertDataItemReference(options?: InsertDataItemReferenceOptions): Promise<InsertDataItemReferenceResponse>;
  interface InsertDataItemReferenceOptions {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection in which to insert the reference. */
      dataCollectionId: string;
      /** Reference to insert */
      dataItemReference?: DataItemReference;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  /**
   * Removes the specified reference from the specified field.
   * @public
   * @documentationMaturity preview
   * @requiredField options.dataCollectionId
   * @requiredField options.dataItemReference
   * @requiredField options.dataItemReference.referencedItemId
   * @requiredField options.dataItemReference.referringItemFieldName
   * @requiredField options.dataItemReference.referringItemId
   * @param options - Options for removing a reference.
   * @adminMethod
   */
  function removeDataItemReference(options?: RemoveDataItemReferenceOptions): Promise<RemoveDataItemReferenceResponse>;
  interface RemoveDataItemReferenceOptions {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection containing the referring item. */
      dataCollectionId: string;
      /** Reference to remove. */
      dataItemReference: DataItemReference;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  /**
   * Inserts one or more references in the specified fields of items in a collection.
   *
   *
   * This endpoint adds one or more references to a collection.
   * Each new reference in `options.dataItemReferences` specifies a referring item's ID, the field in which to insert the reference, and the ID of the referenced item.
   * @public
   * @documentationMaturity preview
   * @requiredField options.dataCollectionId
   * @requiredField options.dataItemReferences
   * @requiredField options.dataItemReferences.referencedItemId
   * @requiredField options.dataItemReferences.referringItemFieldName
   * @requiredField options.dataItemReferences.referringItemId
   * @param options - Options for inserting one or more references.
   * @adminMethod
   */
  function bulkInsertDataItemReferences(options?: BulkInsertDataItemReferencesOptions): Promise<BulkInsertDataItemReferencesResponse>;
  interface BulkInsertDataItemReferencesOptions {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection containing the referring items. */
      dataCollectionId: string;
      /** References to insert. */
      dataItemReferences: DataItemReference[];
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Whether to return the inserted data item references.
       * When `true`, the `results` objects contain a `dataItemReference` field.
       *
       * Default: `false`
       */
      returnEntity?: boolean;
  }
  /**
   * Removes one or more references.
   * @public
   * @documentationMaturity preview
   * @requiredField options.dataCollectionId
   * @requiredField options.dataItemReferences
   * @requiredField options.dataItemReferences.referencedItemId
   * @requiredField options.dataItemReferences.referringItemFieldName
   * @requiredField options.dataItemReferences.referringItemId
   * @param options - Options for removing one or more references.
   * @adminMethod
   */
  function bulkRemoveDataItemReferences(options?: BulkRemoveDataItemReferencesOptions): Promise<BulkRemoveDataItemReferencesResponse>;
  interface BulkRemoveDataItemReferencesOptions {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection containing the referring items. */
      dataCollectionId: string;
      /** References to remove. */
      dataItemReferences: DataItemReference[];
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  /**
   * Replaces references in a specified field of a specified data item.
   *
   *
   * This function replaces the existing reference or references contained in the field specified in `options.referringItemFieldName` within the data item specified in `options.referringItemId`.
   * The function removes existing references and in their place it adds references to the items specified in `options.newReferencedItemIds`.
   *
   * > **Note:** If you pass an empty array in `options.newReferencedItemIds`, all existing references are removed.
   * @public
   * @documentationMaturity preview
   * @requiredField options.dataCollectionId
   * @requiredField options.referringItemFieldName
   * @requiredField options.referringItemId
   * @param options - Options for replacing references.
   * @adminMethod
   */
  function replaceDataItemReferences(options?: ReplaceDataItemReferencesOptions): Promise<ReplaceDataItemReferencesResponse>;
  interface ReplaceDataItemReferencesOptions {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment$1;
      /** ID of the collection containing the referring item. */
      dataCollectionId: string;
      /** Field containing references in the referring item. */
      referringItemFieldName: string;
      /** ID of the referring item. */
      referringItemId: string;
      /** List of new referenced item IDs to replace the existing ones. */
      newReferencedItemIds?: string[];
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  
  type dataV2DataItem_universal_d_DataItem = DataItem;
  type dataV2DataItem_universal_d_InsertDataItemRequest = InsertDataItemRequest;
  type dataV2DataItem_universal_d_Options = Options;
  type dataV2DataItem_universal_d_PublishPluginOptions = PublishPluginOptions;
  type dataV2DataItem_universal_d_InsertDataItemResponse = InsertDataItemResponse;
  type dataV2DataItem_universal_d_UpdateDataItemRequest = UpdateDataItemRequest;
  type dataV2DataItem_universal_d_UpdateDataItemResponse = UpdateDataItemResponse;
  type dataV2DataItem_universal_d_SaveDataItemRequest = SaveDataItemRequest;
  type dataV2DataItem_universal_d_SaveDataItemResponse = SaveDataItemResponse;
  type dataV2DataItem_universal_d_Action = Action;
  const dataV2DataItem_universal_d_Action: typeof Action;
  type dataV2DataItem_universal_d_GetDataItemRequest = GetDataItemRequest;
  type dataV2DataItem_universal_d_GetDataItemResponse = GetDataItemResponse;
  type dataV2DataItem_universal_d_RemoveDataItemRequest = RemoveDataItemRequest;
  type dataV2DataItem_universal_d_RemoveDataItemResponse = RemoveDataItemResponse;
  type dataV2DataItem_universal_d_TruncateDataItemsRequest = TruncateDataItemsRequest;
  type dataV2DataItem_universal_d_TruncateDataItemsResponse = TruncateDataItemsResponse;
  type dataV2DataItem_universal_d_QueryDataItemsRequest = QueryDataItemsRequest;
  type dataV2DataItem_universal_d_QueryV2 = QueryV2;
  type dataV2DataItem_universal_d_QueryV2PagingMethodOneOf = QueryV2PagingMethodOneOf;
  type dataV2DataItem_universal_d_Sorting = Sorting;
  type dataV2DataItem_universal_d_SortOrder = SortOrder;
  const dataV2DataItem_universal_d_SortOrder: typeof SortOrder;
  type dataV2DataItem_universal_d_CursorPaging = CursorPaging;
  type dataV2DataItem_universal_d_QueryDataItemsResponse = QueryDataItemsResponse;
  type dataV2DataItem_universal_d_PagingMetadataV2 = PagingMetadataV2;
  type dataV2DataItem_universal_d_Cursors = Cursors;
  type dataV2DataItem_universal_d_AggregateDataItemsRequest = AggregateDataItemsRequest;
  type dataV2DataItem_universal_d_AggregateDataItemsRequestPagingMethodOneOf = AggregateDataItemsRequestPagingMethodOneOf;
  type dataV2DataItem_universal_d_Average = Average;
  type dataV2DataItem_universal_d_Min = Min;
  type dataV2DataItem_universal_d_Max = Max;
  type dataV2DataItem_universal_d_Sum = Sum;
  type dataV2DataItem_universal_d_Count = Count;
  type dataV2DataItem_universal_d_Operation = Operation;
  type dataV2DataItem_universal_d_OperationCalculateOneOf = OperationCalculateOneOf;
  type dataV2DataItem_universal_d_Aggregation = Aggregation;
  type dataV2DataItem_universal_d_AggregateDataItemsResponse = AggregateDataItemsResponse;
  type dataV2DataItem_universal_d_CountDataItemsRequest = CountDataItemsRequest;
  type dataV2DataItem_universal_d_CountDataItemsResponse = CountDataItemsResponse;
  type dataV2DataItem_universal_d_QueryDistinctValuesRequest = QueryDistinctValuesRequest;
  type dataV2DataItem_universal_d_QueryDistinctValuesRequestPagingMethodOneOf = QueryDistinctValuesRequestPagingMethodOneOf;
  type dataV2DataItem_universal_d_QueryDistinctValuesResponse = QueryDistinctValuesResponse;
  type dataV2DataItem_universal_d_BulkInsertDataItemsRequest = BulkInsertDataItemsRequest;
  type dataV2DataItem_universal_d_BulkInsertDataItemsResponse = BulkInsertDataItemsResponse;
  type dataV2DataItem_universal_d_BulkDataItemResult = BulkDataItemResult;
  type dataV2DataItem_universal_d_BulkActionType = BulkActionType;
  const dataV2DataItem_universal_d_BulkActionType: typeof BulkActionType;
  type dataV2DataItem_universal_d_ItemMetadata = ItemMetadata;
  type dataV2DataItem_universal_d_ApplicationError = ApplicationError;
  type dataV2DataItem_universal_d_BulkActionMetadata = BulkActionMetadata;
  type dataV2DataItem_universal_d_BulkUpdateDataItemsRequest = BulkUpdateDataItemsRequest;
  type dataV2DataItem_universal_d_BulkUpdateDataItemsResponse = BulkUpdateDataItemsResponse;
  type dataV2DataItem_universal_d_BulkSaveDataItemsRequest = BulkSaveDataItemsRequest;
  type dataV2DataItem_universal_d_BulkSaveDataItemsResponse = BulkSaveDataItemsResponse;
  type dataV2DataItem_universal_d_BulkRemoveDataItemsRequest = BulkRemoveDataItemsRequest;
  type dataV2DataItem_universal_d_BulkRemoveDataItemsResponse = BulkRemoveDataItemsResponse;
  type dataV2DataItem_universal_d_QueryReferencedDataItemsRequest = QueryReferencedDataItemsRequest;
  type dataV2DataItem_universal_d_QueryReferencedDataItemsRequestPagingMethodOneOf = QueryReferencedDataItemsRequestPagingMethodOneOf;
  type dataV2DataItem_universal_d_QueryReferencedDataItemsResponse = QueryReferencedDataItemsResponse;
  type dataV2DataItem_universal_d_UnresolvedReference = UnresolvedReference;
  type dataV2DataItem_universal_d_ReferencedResult = ReferencedResult;
  type dataV2DataItem_universal_d_ReferencedResultEntityOneOf = ReferencedResultEntityOneOf;
  type dataV2DataItem_universal_d_IsReferencedDataItemRequest = IsReferencedDataItemRequest;
  type dataV2DataItem_universal_d_IsReferencedDataItemResponse = IsReferencedDataItemResponse;
  type dataV2DataItem_universal_d_InsertDataItemReferenceRequest = InsertDataItemReferenceRequest;
  type dataV2DataItem_universal_d_DataItemReference = DataItemReference;
  type dataV2DataItem_universal_d_InsertDataItemReferenceResponse = InsertDataItemReferenceResponse;
  type dataV2DataItem_universal_d_RemoveDataItemReferenceRequest = RemoveDataItemReferenceRequest;
  type dataV2DataItem_universal_d_RemoveDataItemReferenceResponse = RemoveDataItemReferenceResponse;
  type dataV2DataItem_universal_d_BulkInsertDataItemReferencesRequest = BulkInsertDataItemReferencesRequest;
  type dataV2DataItem_universal_d_BulkInsertDataItemReferencesResponse = BulkInsertDataItemReferencesResponse;
  type dataV2DataItem_universal_d_BulkDataItemReferenceResult = BulkDataItemReferenceResult;
  type dataV2DataItem_universal_d_BulkRemoveDataItemReferencesRequest = BulkRemoveDataItemReferencesRequest;
  type dataV2DataItem_universal_d_BulkRemoveDataItemReferencesResponse = BulkRemoveDataItemReferencesResponse;
  type dataV2DataItem_universal_d_ReplaceDataItemReferencesRequest = ReplaceDataItemReferencesRequest;
  type dataV2DataItem_universal_d_ReplaceDataItemReferencesResponse = ReplaceDataItemReferencesResponse;
  type dataV2DataItem_universal_d_DomainEvent = DomainEvent;
  type dataV2DataItem_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type dataV2DataItem_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type dataV2DataItem_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type dataV2DataItem_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type dataV2DataItem_universal_d_ActionEvent = ActionEvent;
  type dataV2DataItem_universal_d_MessageEnvelope = MessageEnvelope;
  type dataV2DataItem_universal_d_IdentificationData = IdentificationData;
  type dataV2DataItem_universal_d_IdentificationDataIdOneOf = IdentificationDataIdOneOf;
  type dataV2DataItem_universal_d_WebhookIdentityType = WebhookIdentityType;
  const dataV2DataItem_universal_d_WebhookIdentityType: typeof WebhookIdentityType;
  const dataV2DataItem_universal_d_insertDataItem: typeof insertDataItem;
  type dataV2DataItem_universal_d_InsertDataItemOptions = InsertDataItemOptions;
  const dataV2DataItem_universal_d_updateDataItem: typeof updateDataItem;
  type dataV2DataItem_universal_d_UpdateDataItemOptions = UpdateDataItemOptions;
  const dataV2DataItem_universal_d_saveDataItem: typeof saveDataItem;
  type dataV2DataItem_universal_d_SaveDataItemOptions = SaveDataItemOptions;
  const dataV2DataItem_universal_d_getDataItem: typeof getDataItem;
  type dataV2DataItem_universal_d_GetDataItemOptions = GetDataItemOptions;
  const dataV2DataItem_universal_d_removeDataItem: typeof removeDataItem;
  type dataV2DataItem_universal_d_RemoveDataItemOptions = RemoveDataItemOptions;
  const dataV2DataItem_universal_d_truncateDataItems: typeof truncateDataItems;
  type dataV2DataItem_universal_d_TruncateDataItemsOptions = TruncateDataItemsOptions;
  const dataV2DataItem_universal_d_queryDataItems: typeof queryDataItems;
  type dataV2DataItem_universal_d_QueryDataItemsOptions = QueryDataItemsOptions;
  type dataV2DataItem_universal_d_DataItemsQueryResult = DataItemsQueryResult;
  type dataV2DataItem_universal_d_DataItemsQueryBuilder = DataItemsQueryBuilder;
  const dataV2DataItem_universal_d_aggregateDataItems: typeof aggregateDataItems;
  type dataV2DataItem_universal_d_AggregateDataItemsOptions = AggregateDataItemsOptions;
  const dataV2DataItem_universal_d_countDataItems: typeof countDataItems;
  type dataV2DataItem_universal_d_CountDataItemsOptions = CountDataItemsOptions;
  const dataV2DataItem_universal_d_queryDistinctValues: typeof queryDistinctValues;
  type dataV2DataItem_universal_d_QueryDistinctValuesOptions = QueryDistinctValuesOptions;
  const dataV2DataItem_universal_d_bulkInsertDataItems: typeof bulkInsertDataItems;
  type dataV2DataItem_universal_d_BulkInsertDataItemsOptions = BulkInsertDataItemsOptions;
  const dataV2DataItem_universal_d_bulkUpdateDataItems: typeof bulkUpdateDataItems;
  type dataV2DataItem_universal_d_BulkUpdateDataItemsOptions = BulkUpdateDataItemsOptions;
  const dataV2DataItem_universal_d_bulkSaveDataItems: typeof bulkSaveDataItems;
  type dataV2DataItem_universal_d_BulkSaveDataItemsOptions = BulkSaveDataItemsOptions;
  const dataV2DataItem_universal_d_bulkRemoveDataItems: typeof bulkRemoveDataItems;
  type dataV2DataItem_universal_d_BulkRemoveDataItemsOptions = BulkRemoveDataItemsOptions;
  const dataV2DataItem_universal_d_queryReferencedDataItems: typeof queryReferencedDataItems;
  type dataV2DataItem_universal_d_QueryReferencedDataItemsOptions = QueryReferencedDataItemsOptions;
  const dataV2DataItem_universal_d_isReferencedDataItem: typeof isReferencedDataItem;
  type dataV2DataItem_universal_d_IsReferencedDataItemOptions = IsReferencedDataItemOptions;
  const dataV2DataItem_universal_d_insertDataItemReference: typeof insertDataItemReference;
  type dataV2DataItem_universal_d_InsertDataItemReferenceOptions = InsertDataItemReferenceOptions;
  const dataV2DataItem_universal_d_removeDataItemReference: typeof removeDataItemReference;
  type dataV2DataItem_universal_d_RemoveDataItemReferenceOptions = RemoveDataItemReferenceOptions;
  const dataV2DataItem_universal_d_bulkInsertDataItemReferences: typeof bulkInsertDataItemReferences;
  type dataV2DataItem_universal_d_BulkInsertDataItemReferencesOptions = BulkInsertDataItemReferencesOptions;
  const dataV2DataItem_universal_d_bulkRemoveDataItemReferences: typeof bulkRemoveDataItemReferences;
  type dataV2DataItem_universal_d_BulkRemoveDataItemReferencesOptions = BulkRemoveDataItemReferencesOptions;
  const dataV2DataItem_universal_d_replaceDataItemReferences: typeof replaceDataItemReferences;
  type dataV2DataItem_universal_d_ReplaceDataItemReferencesOptions = ReplaceDataItemReferencesOptions;
  namespace dataV2DataItem_universal_d {
    export {
      dataV2DataItem_universal_d_DataItem as DataItem,
      dataV2DataItem_universal_d_InsertDataItemRequest as InsertDataItemRequest,
      Environment$1 as Environment,
      dataV2DataItem_universal_d_Options as Options,
      dataV2DataItem_universal_d_PublishPluginOptions as PublishPluginOptions,
      dataV2DataItem_universal_d_InsertDataItemResponse as InsertDataItemResponse,
      dataV2DataItem_universal_d_UpdateDataItemRequest as UpdateDataItemRequest,
      dataV2DataItem_universal_d_UpdateDataItemResponse as UpdateDataItemResponse,
      dataV2DataItem_universal_d_SaveDataItemRequest as SaveDataItemRequest,
      dataV2DataItem_universal_d_SaveDataItemResponse as SaveDataItemResponse,
      dataV2DataItem_universal_d_Action as Action,
      dataV2DataItem_universal_d_GetDataItemRequest as GetDataItemRequest,
      dataV2DataItem_universal_d_GetDataItemResponse as GetDataItemResponse,
      dataV2DataItem_universal_d_RemoveDataItemRequest as RemoveDataItemRequest,
      dataV2DataItem_universal_d_RemoveDataItemResponse as RemoveDataItemResponse,
      dataV2DataItem_universal_d_TruncateDataItemsRequest as TruncateDataItemsRequest,
      dataV2DataItem_universal_d_TruncateDataItemsResponse as TruncateDataItemsResponse,
      dataV2DataItem_universal_d_QueryDataItemsRequest as QueryDataItemsRequest,
      dataV2DataItem_universal_d_QueryV2 as QueryV2,
      dataV2DataItem_universal_d_QueryV2PagingMethodOneOf as QueryV2PagingMethodOneOf,
      dataV2DataItem_universal_d_Sorting as Sorting,
      dataV2DataItem_universal_d_SortOrder as SortOrder,
      Paging$1 as Paging,
      dataV2DataItem_universal_d_CursorPaging as CursorPaging,
      dataV2DataItem_universal_d_QueryDataItemsResponse as QueryDataItemsResponse,
      dataV2DataItem_universal_d_PagingMetadataV2 as PagingMetadataV2,
      dataV2DataItem_universal_d_Cursors as Cursors,
      dataV2DataItem_universal_d_AggregateDataItemsRequest as AggregateDataItemsRequest,
      dataV2DataItem_universal_d_AggregateDataItemsRequestPagingMethodOneOf as AggregateDataItemsRequestPagingMethodOneOf,
      dataV2DataItem_universal_d_Average as Average,
      dataV2DataItem_universal_d_Min as Min,
      dataV2DataItem_universal_d_Max as Max,
      dataV2DataItem_universal_d_Sum as Sum,
      dataV2DataItem_universal_d_Count as Count,
      dataV2DataItem_universal_d_Operation as Operation,
      dataV2DataItem_universal_d_OperationCalculateOneOf as OperationCalculateOneOf,
      dataV2DataItem_universal_d_Aggregation as Aggregation,
      dataV2DataItem_universal_d_AggregateDataItemsResponse as AggregateDataItemsResponse,
      dataV2DataItem_universal_d_CountDataItemsRequest as CountDataItemsRequest,
      dataV2DataItem_universal_d_CountDataItemsResponse as CountDataItemsResponse,
      dataV2DataItem_universal_d_QueryDistinctValuesRequest as QueryDistinctValuesRequest,
      dataV2DataItem_universal_d_QueryDistinctValuesRequestPagingMethodOneOf as QueryDistinctValuesRequestPagingMethodOneOf,
      dataV2DataItem_universal_d_QueryDistinctValuesResponse as QueryDistinctValuesResponse,
      dataV2DataItem_universal_d_BulkInsertDataItemsRequest as BulkInsertDataItemsRequest,
      dataV2DataItem_universal_d_BulkInsertDataItemsResponse as BulkInsertDataItemsResponse,
      dataV2DataItem_universal_d_BulkDataItemResult as BulkDataItemResult,
      dataV2DataItem_universal_d_BulkActionType as BulkActionType,
      dataV2DataItem_universal_d_ItemMetadata as ItemMetadata,
      dataV2DataItem_universal_d_ApplicationError as ApplicationError,
      dataV2DataItem_universal_d_BulkActionMetadata as BulkActionMetadata,
      dataV2DataItem_universal_d_BulkUpdateDataItemsRequest as BulkUpdateDataItemsRequest,
      dataV2DataItem_universal_d_BulkUpdateDataItemsResponse as BulkUpdateDataItemsResponse,
      dataV2DataItem_universal_d_BulkSaveDataItemsRequest as BulkSaveDataItemsRequest,
      dataV2DataItem_universal_d_BulkSaveDataItemsResponse as BulkSaveDataItemsResponse,
      dataV2DataItem_universal_d_BulkRemoveDataItemsRequest as BulkRemoveDataItemsRequest,
      dataV2DataItem_universal_d_BulkRemoveDataItemsResponse as BulkRemoveDataItemsResponse,
      dataV2DataItem_universal_d_QueryReferencedDataItemsRequest as QueryReferencedDataItemsRequest,
      dataV2DataItem_universal_d_QueryReferencedDataItemsRequestPagingMethodOneOf as QueryReferencedDataItemsRequestPagingMethodOneOf,
      dataV2DataItem_universal_d_QueryReferencedDataItemsResponse as QueryReferencedDataItemsResponse,
      dataV2DataItem_universal_d_UnresolvedReference as UnresolvedReference,
      dataV2DataItem_universal_d_ReferencedResult as ReferencedResult,
      dataV2DataItem_universal_d_ReferencedResultEntityOneOf as ReferencedResultEntityOneOf,
      dataV2DataItem_universal_d_IsReferencedDataItemRequest as IsReferencedDataItemRequest,
      dataV2DataItem_universal_d_IsReferencedDataItemResponse as IsReferencedDataItemResponse,
      dataV2DataItem_universal_d_InsertDataItemReferenceRequest as InsertDataItemReferenceRequest,
      dataV2DataItem_universal_d_DataItemReference as DataItemReference,
      dataV2DataItem_universal_d_InsertDataItemReferenceResponse as InsertDataItemReferenceResponse,
      dataV2DataItem_universal_d_RemoveDataItemReferenceRequest as RemoveDataItemReferenceRequest,
      dataV2DataItem_universal_d_RemoveDataItemReferenceResponse as RemoveDataItemReferenceResponse,
      dataV2DataItem_universal_d_BulkInsertDataItemReferencesRequest as BulkInsertDataItemReferencesRequest,
      dataV2DataItem_universal_d_BulkInsertDataItemReferencesResponse as BulkInsertDataItemReferencesResponse,
      dataV2DataItem_universal_d_BulkDataItemReferenceResult as BulkDataItemReferenceResult,
      dataV2DataItem_universal_d_BulkRemoveDataItemReferencesRequest as BulkRemoveDataItemReferencesRequest,
      dataV2DataItem_universal_d_BulkRemoveDataItemReferencesResponse as BulkRemoveDataItemReferencesResponse,
      dataV2DataItem_universal_d_ReplaceDataItemReferencesRequest as ReplaceDataItemReferencesRequest,
      dataV2DataItem_universal_d_ReplaceDataItemReferencesResponse as ReplaceDataItemReferencesResponse,
      dataV2DataItem_universal_d_DomainEvent as DomainEvent,
      dataV2DataItem_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      dataV2DataItem_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      dataV2DataItem_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      dataV2DataItem_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      dataV2DataItem_universal_d_ActionEvent as ActionEvent,
      dataV2DataItem_universal_d_MessageEnvelope as MessageEnvelope,
      dataV2DataItem_universal_d_IdentificationData as IdentificationData,
      dataV2DataItem_universal_d_IdentificationDataIdOneOf as IdentificationDataIdOneOf,
      dataV2DataItem_universal_d_WebhookIdentityType as WebhookIdentityType,
      dataV2DataItem_universal_d_insertDataItem as insertDataItem,
      dataV2DataItem_universal_d_InsertDataItemOptions as InsertDataItemOptions,
      dataV2DataItem_universal_d_updateDataItem as updateDataItem,
      dataV2DataItem_universal_d_UpdateDataItemOptions as UpdateDataItemOptions,
      dataV2DataItem_universal_d_saveDataItem as saveDataItem,
      dataV2DataItem_universal_d_SaveDataItemOptions as SaveDataItemOptions,
      dataV2DataItem_universal_d_getDataItem as getDataItem,
      dataV2DataItem_universal_d_GetDataItemOptions as GetDataItemOptions,
      dataV2DataItem_universal_d_removeDataItem as removeDataItem,
      dataV2DataItem_universal_d_RemoveDataItemOptions as RemoveDataItemOptions,
      dataV2DataItem_universal_d_truncateDataItems as truncateDataItems,
      dataV2DataItem_universal_d_TruncateDataItemsOptions as TruncateDataItemsOptions,
      dataV2DataItem_universal_d_queryDataItems as queryDataItems,
      dataV2DataItem_universal_d_QueryDataItemsOptions as QueryDataItemsOptions,
      dataV2DataItem_universal_d_DataItemsQueryResult as DataItemsQueryResult,
      dataV2DataItem_universal_d_DataItemsQueryBuilder as DataItemsQueryBuilder,
      dataV2DataItem_universal_d_aggregateDataItems as aggregateDataItems,
      dataV2DataItem_universal_d_AggregateDataItemsOptions as AggregateDataItemsOptions,
      dataV2DataItem_universal_d_countDataItems as countDataItems,
      dataV2DataItem_universal_d_CountDataItemsOptions as CountDataItemsOptions,
      dataV2DataItem_universal_d_queryDistinctValues as queryDistinctValues,
      dataV2DataItem_universal_d_QueryDistinctValuesOptions as QueryDistinctValuesOptions,
      dataV2DataItem_universal_d_bulkInsertDataItems as bulkInsertDataItems,
      dataV2DataItem_universal_d_BulkInsertDataItemsOptions as BulkInsertDataItemsOptions,
      dataV2DataItem_universal_d_bulkUpdateDataItems as bulkUpdateDataItems,
      dataV2DataItem_universal_d_BulkUpdateDataItemsOptions as BulkUpdateDataItemsOptions,
      dataV2DataItem_universal_d_bulkSaveDataItems as bulkSaveDataItems,
      dataV2DataItem_universal_d_BulkSaveDataItemsOptions as BulkSaveDataItemsOptions,
      dataV2DataItem_universal_d_bulkRemoveDataItems as bulkRemoveDataItems,
      dataV2DataItem_universal_d_BulkRemoveDataItemsOptions as BulkRemoveDataItemsOptions,
      dataV2DataItem_universal_d_queryReferencedDataItems as queryReferencedDataItems,
      dataV2DataItem_universal_d_QueryReferencedDataItemsOptions as QueryReferencedDataItemsOptions,
      dataV2DataItem_universal_d_isReferencedDataItem as isReferencedDataItem,
      dataV2DataItem_universal_d_IsReferencedDataItemOptions as IsReferencedDataItemOptions,
      dataV2DataItem_universal_d_insertDataItemReference as insertDataItemReference,
      dataV2DataItem_universal_d_InsertDataItemReferenceOptions as InsertDataItemReferenceOptions,
      dataV2DataItem_universal_d_removeDataItemReference as removeDataItemReference,
      dataV2DataItem_universal_d_RemoveDataItemReferenceOptions as RemoveDataItemReferenceOptions,
      dataV2DataItem_universal_d_bulkInsertDataItemReferences as bulkInsertDataItemReferences,
      dataV2DataItem_universal_d_BulkInsertDataItemReferencesOptions as BulkInsertDataItemReferencesOptions,
      dataV2DataItem_universal_d_bulkRemoveDataItemReferences as bulkRemoveDataItemReferences,
      dataV2DataItem_universal_d_BulkRemoveDataItemReferencesOptions as BulkRemoveDataItemReferencesOptions,
      dataV2DataItem_universal_d_replaceDataItemReferences as replaceDataItemReferences,
      dataV2DataItem_universal_d_ReplaceDataItemReferencesOptions as ReplaceDataItemReferencesOptions,
    };
  }
  
  /** An index is a map of a collection's data, organized according to specific fields to increase query speed. */
  interface Index {
      /** Name of the index. */
      name?: string;
      /**
       * Fields for which the index is defined.
       *
       * Max: 3 fields (for a unique index: 1 field)
       */
      fields?: Field[];
      /**
       * Current status of the index.
       * - `BUILDING`: Index creation is in progress.
       * - `ACTIVE`: Index has been successfully created and can be used in queries.
       * - `DROPPING`: Index is in the process of being dropped.
       * - `DROPPED`: Index has been dropped successfully.
       * - `FAILED`: Index creation has failed.
       * - `INVALID`: Index contains incorrectly indexed data.
       * @readonly
       */
      status?: Status;
      /**
       * Contains details about the reasons for failure when `status` is `FAILED`.
       * @readonly
       */
      failure?: Failure;
      /**
       * Whether the index enforces uniqueness of values in the field for which it is defined.
       * If `true`, the index can have only one field.
       *
       * Default: `false`
       */
      unique?: boolean;
      /**
       * Whether the index ignores case.
       *
       * Default: `false`
       */
      caseInsensitive?: boolean;
  }
  /**
   * Order determines how values are ordered in the index. This is important when
   * ordering and/or range querying by indexed fields.
   */
  enum Order {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface Field {
      /** Path of the field to index. For example: `title` or `options.price`. */
      path?: string;
      /**
       * Sort order for the index. Base on how the data is regularly queried.
       *
       * Supported values: `ASC`, `DESC`.
       *
       * Default: `ASC`
       */
      order?: Order;
  }
  enum Status {
      /** Place holder. Never returned by the service. */
      UNKNOWN = "UNKNOWN",
      /** Index creation is in progress. */
      BUILDING = "BUILDING",
      /** Index has been successfully created and can be used in queries. */
      ACTIVE = "ACTIVE",
      /** Index is in the process of being dropped. */
      DROPPING = "DROPPING",
      /** Index has been dropped successfully. */
      DROPPED = "DROPPED",
      /** Index creation has failed. */
      FAILED = "FAILED",
      /** Index contains incorrectly indexed data. */
      INVALID = "INVALID"
  }
  interface Failure {
      /**
       * Error code.
       * - `WDE0112`: Unknown error while building collection index.
       * - `WDE0113`: Duplicate key error while building collection index.
       * - `WDE0114`: Document too large while building collection index.
       */
      code?: string;
      /**
       * Broad error code.
       * - `WD_UNKNOWN_ERROR`: Unknown error.
       * @internal
       */
      broadCode?: string;
      /** Description of the failure. */
      description?: string;
      /**
       * ID of the data item that caused the failure.
       * For example, if `unique` is `true`, the ID of an item containing a duplicate value.
       */
      itemId?: string | null;
  }
  interface CreateIndexRequest {
      /**
       * Environment on which to define the index. Default value is LIVE.
       * @internal
       */
      environment?: Environment;
      /** Details of the index to be created. */
      index: Index;
      /** ID of the data collection for which to generate the index. */
      dataCollectionId: string;
  }
  enum Environment {
      LIVE = "LIVE",
      SANDBOX = "SANDBOX"
  }
  interface CreateIndexResponse {
      /** Details of the index being generated. */
      index?: Index;
  }
  interface DropIndexRequest {
      /**
       * Environment on which the index is defined. Default value is LIVE.
       * @internal
       */
      environment?: Environment;
      /** Name of the index to drop. */
      indexName: string;
      /** ID of the data collection for which the index to be dropped is defined. */
      dataCollectionId: string;
  }
  interface DropIndexResponse {
  }
  interface ListIndexesRequest {
      /**
       * Environment to list indexes for
       * @internal
       */
      environment?: Environment;
      /**
       * slower read but consistent with recent updates
       * @internal
       */
      consistentRead?: boolean;
      /**
       * ID of the data collection for which to list indexes.
       *
       */
      dataCollectionId: string;
      /** paging */
      paging?: Paging;
  }
  interface Paging {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface ListIndexesResponse {
      /** List of all indexes for the requested data collection. */
      indexes?: Index[];
      /** Paging metadata */
      pagingMetadata?: PagingMetadata;
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
  /**
   * Creates an index for a data collection.
   *
   * The index can't be used immediately, as the process of generating the index takes time.
   * You can check whether your index is ready using `listIndexes()`.
   *
   * Note that when an index fails to create, the failed index still occupies a slot.
   * To remove the failed index and free up the slot for a new index, use `dropIndex()`.
   * @param dataCollectionId - ID of the data collection for which to generate the index.
   * @param index - Details of the index to be created.
   * @public
   * @requiredField dataCollectionId
   * @requiredField index
   * @requiredField index.fields
   * @requiredField index.fields.path
   * @requiredField index.name
   * @param options - Options for creating an index.
   * @adminMethod
   * @returns Details of the index being generated.
   */
  function createIndex(dataCollectionId: string, index: Index, options?: CreateIndexOptions): Promise<Index>;
  interface CreateIndexOptions {
      /**
       * Environment on which to define the index. Default value is LIVE.
       * @internal
       */
      environment?: Environment;
  }
  /**
   * Removes an index from a data collection.
   *
   * The process of dropping an index from a collection takes time.
   * You can check whether your index has been dropped by calling `listIndexes()`.
   * @param dataCollectionId - ID of the data collection for which the index to be dropped is defined.
   * @param indexName - Name of the index to drop.
   * @public
   * @requiredField dataCollectionId
   * @requiredField indexName
   * @param options - Options for dropping an index.
   * @adminMethod
   */
  function dropIndex(dataCollectionId: string, indexName: string, options?: DropIndexOptions): Promise<void>;
  interface DropIndexOptions {
      /**
       * Environment on which the index is defined. Default value is LIVE.
       * @internal
       */
      environment?: Environment;
  }
  /**
   * Lists all indexes defined for a data collection.
   *
   * When an index's status is `ACTIVE`, it is ready to use.
   * While it is still being created, its status is `BUILDING`.
   *
   * When an index's status is `DROPPED`, it has been dropped successfully.
   * While it is still in the process of being removed, its status is `DROPPING`.
   * @param dataCollectionId - ID of the data collection for which to list indexes.
   * @public
   * @requiredField dataCollectionId
   * @param options - Options for retrieving a list of indexes.
   * @adminMethod
   */
  function listIndexes(dataCollectionId: string, options?: ListIndexesOptions): Promise<ListIndexesResponse>;
  interface ListIndexesOptions {
      /**
       * Environment to list indexes for
       * @internal
       */
      environment?: Environment;
      /**
       * slower read but consistent with recent updates
       * @internal
       */
      consistentRead?: boolean;
      /** paging */
      paging?: Paging;
  }
  
  type dataV2Index_universal_d_Index = Index;
  type dataV2Index_universal_d_Order = Order;
  const dataV2Index_universal_d_Order: typeof Order;
  type dataV2Index_universal_d_Field = Field;
  type dataV2Index_universal_d_Status = Status;
  const dataV2Index_universal_d_Status: typeof Status;
  type dataV2Index_universal_d_Failure = Failure;
  type dataV2Index_universal_d_CreateIndexRequest = CreateIndexRequest;
  type dataV2Index_universal_d_Environment = Environment;
  const dataV2Index_universal_d_Environment: typeof Environment;
  type dataV2Index_universal_d_CreateIndexResponse = CreateIndexResponse;
  type dataV2Index_universal_d_DropIndexRequest = DropIndexRequest;
  type dataV2Index_universal_d_DropIndexResponse = DropIndexResponse;
  type dataV2Index_universal_d_ListIndexesRequest = ListIndexesRequest;
  type dataV2Index_universal_d_Paging = Paging;
  type dataV2Index_universal_d_ListIndexesResponse = ListIndexesResponse;
  type dataV2Index_universal_d_PagingMetadata = PagingMetadata;
  const dataV2Index_universal_d_createIndex: typeof createIndex;
  type dataV2Index_universal_d_CreateIndexOptions = CreateIndexOptions;
  const dataV2Index_universal_d_dropIndex: typeof dropIndex;
  type dataV2Index_universal_d_DropIndexOptions = DropIndexOptions;
  const dataV2Index_universal_d_listIndexes: typeof listIndexes;
  type dataV2Index_universal_d_ListIndexesOptions = ListIndexesOptions;
  namespace dataV2Index_universal_d {
    export {
      dataV2Index_universal_d_Index as Index,
      dataV2Index_universal_d_Order as Order,
      dataV2Index_universal_d_Field as Field,
      dataV2Index_universal_d_Status as Status,
      dataV2Index_universal_d_Failure as Failure,
      dataV2Index_universal_d_CreateIndexRequest as CreateIndexRequest,
      dataV2Index_universal_d_Environment as Environment,
      dataV2Index_universal_d_CreateIndexResponse as CreateIndexResponse,
      dataV2Index_universal_d_DropIndexRequest as DropIndexRequest,
      dataV2Index_universal_d_DropIndexResponse as DropIndexResponse,
      dataV2Index_universal_d_ListIndexesRequest as ListIndexesRequest,
      dataV2Index_universal_d_Paging as Paging,
      dataV2Index_universal_d_ListIndexesResponse as ListIndexesResponse,
      dataV2Index_universal_d_PagingMetadata as PagingMetadata,
      dataV2Index_universal_d_createIndex as createIndex,
      dataV2Index_universal_d_CreateIndexOptions as CreateIndexOptions,
      dataV2Index_universal_d_dropIndex as dropIndex,
      dataV2Index_universal_d_DropIndexOptions as DropIndexOptions,
      dataV2Index_universal_d_listIndexes as listIndexes,
      dataV2Index_universal_d_ListIndexesOptions as ListIndexesOptions,
    };
  }
  
  export { dataV2DataCollection_universal_d as collections, dataV1ExternalDatabaseConnection_universal_d as externalDatabaseConnections, dataV2Index_universal_d as indexes, dataV2DataItem_universal_d as items };
}
