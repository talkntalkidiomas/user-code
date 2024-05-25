declare module "wix-data-external-database-connections" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /** An external database connection defines a connection between an external database and a Wix site. */
  interface ExternalDatabaseConnection {
      /**
       * Name of the external database connection.
       * An external database connection may connect to one or more external data collections or tables.
       * These are represented as `connectionName/dataCollectionId`.
       */
      name?: string;
      /** Base URL for provisioning and managing data in the external database. For example: `https://example.com/my-external-database`. */
      endpoint?: string;
      /**
       * Settings passed to the external database connection as part of each request.
       * These settings can relate to authentication, tenancy, or provide any other information needed for processing a request.
       * Their content and structure depend on the specific requirements of the external database's API.
       */
      configuration?: Record<string, any> | null;
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
  }
  interface ListExternalDatabaseConnectionsResponse {
      /** List of external database connections. */
      externalDatabaseConnections?: ExternalDatabaseConnection[];
  }
  interface CreateExternalDatabaseConnectionRequest {
      /** External database connection details. */
      externalDatabaseConnection?: ExternalDatabaseConnection;
  }
  interface CreateExternalDatabaseConnectionResponse {
      /** Details of external database connection created. */
      externalDatabaseConnection?: ExternalDatabaseConnection;
  }
  interface UpdateExternalDatabaseConnectionRequest {
      /** Updated external database connection details. The existing collection is replaced with this version. */
      externalDatabaseConnection?: ExternalDatabaseConnection;
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
  /**
   * Retrieves an external database connection by name.
   * @param name - Name of the external database connection to retrieve.
   * @public
   * @documentationMaturity preview
   * @requiredField name
   */
  function getExternalDatabaseConnection(name: string): Promise<GetExternalDatabaseConnectionResponse>;
  /**
   * Retrieves a list of all external database collections associated with the site.
   * @public
   * @documentationMaturity preview
   */
  function listExternalDatabaseConnections(): Promise<ListExternalDatabaseConnectionsResponse>;
  /**
   * Creates a new external database connection.
   *
   * The request body must include a name, base URL, and configuration details for the external database within the `externalDatabaseConnection` body parameter.
   * If any of these are missing, the external database connection isn't created.
   * @public
   * @documentationMaturity preview
   * @requiredField options.externalDatabaseConnection.configuration
   * @requiredField options.externalDatabaseConnection.endpoint
   * @requiredField options.externalDatabaseConnection.name
   */
  function createExternalDatabaseConnection(options?: CreateExternalDatabaseConnectionOptions): Promise<CreateExternalDatabaseConnectionResponse>;
  interface CreateExternalDatabaseConnectionOptions {
      /** External database connection details. */
      externalDatabaseConnection?: ExternalDatabaseConnection;
  }
  /**
   * Updates an external database connection.
   *
   * An external database collection name must be submitted as a path parameter.
   * If an existing external database connection is found with the same name, that connection's details are updated.
   * If no external database connection has that name, the request fails.
   *
   * > **Note:** After an external database connection is updated, it only contains the values provided in the request. All previous values are lost.
   * @param name - Name of the external database connection.
   * An external database connection may connect to one or more external data collections or tables.
   * These are represented as `connectionName/dataCollectionId`.
   * @public
   * @documentationMaturity preview
   * @requiredField name
   * @requiredField options.externalDatabaseConnection.configuration
   * @requiredField options.externalDatabaseConnection.endpoint
   */
  function updateExternalDatabaseConnection(name: string, options?: UpdateExternalDatabaseConnectionOptions): Promise<UpdateExternalDatabaseConnectionResponse>;
  interface UpdateExternalDatabaseConnectionOptions {
      externalDatabaseConnection: {
          /** Base URL for provisioning and managing data in the external database. For example: `https://example.com/my-external-database`. */
          endpoint?: string;
          /**
           * Settings passed to the external database connection as part of each request.
           * These settings can relate to authentication, tenancy, or provide any other information needed for processing a request.
           * Their content and structure depend on the specific requirements of the external database's API.
           */
          configuration?: Record<string, any> | null;
      };
  }
  /**
   * Deletes an external database connection.
   *
   * > **Note:** Once an external database connection is deleted, it can't be restored. To reconnect the database you need to [create a new external database connection](https://dev.wix.com/api/rest/wix-data/wix-data/external-database-connections/create-external-database-connection).
   * @param name - Name of the external database connection to delete.
   * @public
   * @documentationMaturity preview
   * @requiredField name
   */
  function deleteExternalDatabaseConnection(name: string): Promise<void>;
  
  const dataV1ExternalDatabaseConnection_universal_d___debug: typeof __debug;
  type dataV1ExternalDatabaseConnection_universal_d_ExternalDatabaseConnection = ExternalDatabaseConnection;
  type dataV1ExternalDatabaseConnection_universal_d_GetExternalDatabaseConnectionRequest = GetExternalDatabaseConnectionRequest;
  type dataV1ExternalDatabaseConnection_universal_d_GetExternalDatabaseConnectionResponse = GetExternalDatabaseConnectionResponse;
  type dataV1ExternalDatabaseConnection_universal_d_ListExternalDatabaseConnectionsRequest = ListExternalDatabaseConnectionsRequest;
  type dataV1ExternalDatabaseConnection_universal_d_ListExternalDatabaseConnectionsResponse = ListExternalDatabaseConnectionsResponse;
  type dataV1ExternalDatabaseConnection_universal_d_CreateExternalDatabaseConnectionRequest = CreateExternalDatabaseConnectionRequest;
  type dataV1ExternalDatabaseConnection_universal_d_CreateExternalDatabaseConnectionResponse = CreateExternalDatabaseConnectionResponse;
  type dataV1ExternalDatabaseConnection_universal_d_UpdateExternalDatabaseConnectionRequest = UpdateExternalDatabaseConnectionRequest;
  type dataV1ExternalDatabaseConnection_universal_d_UpdateExternalDatabaseConnectionResponse = UpdateExternalDatabaseConnectionResponse;
  type dataV1ExternalDatabaseConnection_universal_d_DeleteExternalDatabaseConnectionRequest = DeleteExternalDatabaseConnectionRequest;
  type dataV1ExternalDatabaseConnection_universal_d_DeleteExternalDatabaseConnectionResponse = DeleteExternalDatabaseConnectionResponse;
  const dataV1ExternalDatabaseConnection_universal_d_getExternalDatabaseConnection: typeof getExternalDatabaseConnection;
  const dataV1ExternalDatabaseConnection_universal_d_listExternalDatabaseConnections: typeof listExternalDatabaseConnections;
  const dataV1ExternalDatabaseConnection_universal_d_createExternalDatabaseConnection: typeof createExternalDatabaseConnection;
  type dataV1ExternalDatabaseConnection_universal_d_CreateExternalDatabaseConnectionOptions = CreateExternalDatabaseConnectionOptions;
  const dataV1ExternalDatabaseConnection_universal_d_updateExternalDatabaseConnection: typeof updateExternalDatabaseConnection;
  type dataV1ExternalDatabaseConnection_universal_d_UpdateExternalDatabaseConnectionOptions = UpdateExternalDatabaseConnectionOptions;
  const dataV1ExternalDatabaseConnection_universal_d_deleteExternalDatabaseConnection: typeof deleteExternalDatabaseConnection;
  namespace dataV1ExternalDatabaseConnection_universal_d {
    export {
      dataV1ExternalDatabaseConnection_universal_d___debug as __debug,
      dataV1ExternalDatabaseConnection_universal_d_ExternalDatabaseConnection as ExternalDatabaseConnection,
      dataV1ExternalDatabaseConnection_universal_d_GetExternalDatabaseConnectionRequest as GetExternalDatabaseConnectionRequest,
      dataV1ExternalDatabaseConnection_universal_d_GetExternalDatabaseConnectionResponse as GetExternalDatabaseConnectionResponse,
      dataV1ExternalDatabaseConnection_universal_d_ListExternalDatabaseConnectionsRequest as ListExternalDatabaseConnectionsRequest,
      dataV1ExternalDatabaseConnection_universal_d_ListExternalDatabaseConnectionsResponse as ListExternalDatabaseConnectionsResponse,
      dataV1ExternalDatabaseConnection_universal_d_CreateExternalDatabaseConnectionRequest as CreateExternalDatabaseConnectionRequest,
      dataV1ExternalDatabaseConnection_universal_d_CreateExternalDatabaseConnectionResponse as CreateExternalDatabaseConnectionResponse,
      dataV1ExternalDatabaseConnection_universal_d_UpdateExternalDatabaseConnectionRequest as UpdateExternalDatabaseConnectionRequest,
      dataV1ExternalDatabaseConnection_universal_d_UpdateExternalDatabaseConnectionResponse as UpdateExternalDatabaseConnectionResponse,
      dataV1ExternalDatabaseConnection_universal_d_DeleteExternalDatabaseConnectionRequest as DeleteExternalDatabaseConnectionRequest,
      dataV1ExternalDatabaseConnection_universal_d_DeleteExternalDatabaseConnectionResponse as DeleteExternalDatabaseConnectionResponse,
      dataV1ExternalDatabaseConnection_universal_d_getExternalDatabaseConnection as getExternalDatabaseConnection,
      dataV1ExternalDatabaseConnection_universal_d_listExternalDatabaseConnections as listExternalDatabaseConnections,
      dataV1ExternalDatabaseConnection_universal_d_createExternalDatabaseConnection as createExternalDatabaseConnection,
      dataV1ExternalDatabaseConnection_universal_d_CreateExternalDatabaseConnectionOptions as CreateExternalDatabaseConnectionOptions,
      dataV1ExternalDatabaseConnection_universal_d_updateExternalDatabaseConnection as updateExternalDatabaseConnection,
      dataV1ExternalDatabaseConnection_universal_d_UpdateExternalDatabaseConnectionOptions as UpdateExternalDatabaseConnectionOptions,
      dataV1ExternalDatabaseConnection_universal_d_deleteExternalDatabaseConnection as deleteExternalDatabaseConnection,
    };
  }
  
  export { dataV1ExternalDatabaseConnection_universal_d as externalDatabaseConnections };
}
