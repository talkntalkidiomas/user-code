declare module "wix-alert-enricher-backend" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /** EnrichmentConfig is the main entity of EnrichmentBo */
  interface EnrichmentConfig {
      /** EnrichmentConfig ID */
      _id?: string | null;
      /** Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision */
      revision?: string | null;
      /**
       * Represents the time this EnrichmentConfig was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this EnrichmentConfig was last updated
       * @readonly
       */
      _updatedDate?: Date;
      show?: boolean | null;
      /** implemented bu core / plugin */
      enrichmentSource?: EnrichmentSource;
      /**
       * one of : base definition/ override /merge. merge may only be set by server
       * @readonly
       */
      configurationType?: EnrichmentConfigType;
      /** reserved 9; */
      artifactId?: string | null;
      /** slack channel */
      channel?: string | null;
      /** core: Last-ga-time/ sled-traffic/ top-exceptions plugin: free-text */
      enrichmentType?: EnrichmentType;
      /** app def id defined in dev-center */
      implementorId?: string | null;
      /** user properties for overrides  exp: last GA in X days */
      enrichmentConfigProperties?: Record<string, string>;
      /** free text */
      description?: string | null;
      /** implementer owner buildup or other */
      owner?: string;
      /** owner-ship tag */
      createdBy?: string;
      /** free -text */
      overrideName?: string;
      /** alert type: Error percentage / Unknown */
      alertTypes?: AlertType[];
  }
  enum EnrichmentSource {
      CORE = "CORE",
      PLUGIN = "PLUGIN"
  }
  enum EnrichmentConfigType {
      OVERRIDE = "OVERRIDE",
      BASE_DEFINITION = "BASE_DEFINITION",
      MERGED = "MERGED"
  }
  enum EnrichmentType {
      UNKNOWN = "UNKNOWN",
      LAST_GA_TIME = "LAST_GA_TIME",
      GRAFANA_LINK_TIMESTAMP = "GRAFANA_LINK_TIMESTAMP",
      TOP_EXCEPTIONS = "TOP_EXCEPTIONS",
      SLED_INFO = "SLED_INFO",
      ERROR_BY_METASITE = "ERROR_BY_METASITE",
      DEBUG_PROD = "DEBUG_PROD",
      LAST_EXPERIMENTS_CHANGES = "LAST_EXPERIMENTS_CHANGES",
      LAST_KUBE_CHANGES = "LAST_KUBE_CHANGES"
  }
  enum AlertType {
      UNKNOWN = "UNKNOWN",
      ERROR_PERCENTAGE = "ERROR_PERCENTAGE",
      ALL = "ALL"
  }
  interface CreateEnrichmentConfigRequest extends CreateEnrichmentConfigRequestCreateWithPropertiesOneOf {
      enrichmentConfigBase?: EnrichmentConfigBase;
      enrichmentConfigOverride?: EnrichmentConfigOverride;
  }
  /** @oneof */
  interface CreateEnrichmentConfigRequestCreateWithPropertiesOneOf {
      enrichmentConfigBase?: EnrichmentConfigBase;
      enrichmentConfigOverride?: EnrichmentConfigOverride;
  }
  interface EnrichmentConfigBase {
      /** implemented by core / plugin */
      enrichmentSource?: EnrichmentSource;
      /** reserve 2 */
      enrichmentType?: EnrichmentType;
      /** app def id defined in dev-center */
      implementorId?: string;
      /** user properties for overrides  exp: last GA in X days */
      enrichmentConfigProperties?: Record<string, string>;
      /** free text */
      description?: string | null;
      /** implementer owner buildup or other */
      owner?: string;
      /** owner tag */
      createdBy?: string;
      /** show enrichment */
      show?: boolean | null;
      /** alert type: Error percentage / Unknown */
      alertTypes?: AlertType[];
  }
  interface EnrichmentConfigOverride {
      /** reserved 9; */
      artifactId?: string | null;
      /** slack channel */
      channel?: string | null;
      enrichmentType?: EnrichmentType;
      /** user properties for overrides  exp: last GA in X days */
      enrichmentConfigProperties?: Record<string, string>;
      /** owner-ship tag */
      createdBy?: string;
      /** free -text */
      overrideName?: string | null;
      show?: boolean | null;
      /** alert type: Error percentage / Unknown */
      alertTypes?: AlertType[];
  }
  interface CreateEnrichmentConfigResponse {
      /** The created EnrichmentConfig */
      enrichmentConfig?: EnrichmentConfig;
  }
  interface GetEnrichmentConfigRequest {
      /** Id of the EnrichmentConfig to retrieve */
      enrichmentConfigId: string;
  }
  interface GetEnrichmentConfigResponse {
      /** The retrieved EnrichmentConfig */
      enrichmentConfig?: EnrichmentConfig;
  }
  interface ListEnrichmentConfigRequest {
      configurationType?: EnrichmentConfigType;
      alertType?: string | null;
      channel?: string | null;
      artifactId?: string | null;
      enrichmentType?: EnrichmentType;
  }
  interface ListEnrichmentConfigResponse {
      enrichmentConfigs?: EnrichmentConfig[];
  }
  interface ListAllEnrichmentConfigRequest {
  }
  interface UpdateEnrichmentConfigRequest extends UpdateEnrichmentConfigRequestEnrichmentConfigUpdateOneOf {
      /** Id of the EnrichmentConfig to retrieve */
      _id: string;
      /** The revision of the EnrichmentConfig */
      revision?: string;
      /** Explicit list of fields to update */
      mask?: string[];
      enrichmentConfigOvr?: EnrichmentConfigOverrideUpdate;
      enrichmentConfigBase?: EnrichmentConfigBaseUpdate;
  }
  /** @oneof */
  interface UpdateEnrichmentConfigRequestEnrichmentConfigUpdateOneOf {
      enrichmentConfigOvr?: EnrichmentConfigOverrideUpdate;
      enrichmentConfigBase?: EnrichmentConfigBaseUpdate;
  }
  interface EnrichmentConfigOverrideUpdate {
      /** reserve 9; */
      artifactId?: string | null;
      /** slack channel */
      channel?: string | null;
      /** user properties for overrides  exp: last GA in X days */
      enrichmentConfigProperties?: Record<string, string>;
      /** owner-ship tag */
      createdBy?: string;
      /** free -text */
      overrideName?: string;
      show?: boolean;
      /** alert type: Error percentage / Unknown */
      alertTypes?: AlertType[];
  }
  interface EnrichmentConfigBaseUpdate {
      /** implemented by core / plugin */
      enrichmentSource?: EnrichmentSource;
      /** reserve 2; */
      enrichmentType?: EnrichmentType;
      /** app def id defined in dev-center */
      implementorId?: string | null;
      /** user properties for overrides  exp: last GA in X days */
      enrichmentConfigProperties?: Record<string, string>;
      /** free text */
      description?: string | null;
      /** implementer owner buildup or other */
      owner?: string;
      /** owner-ship tag */
      createdBy?: string;
      /** show enrichment */
      show?: boolean;
      /** alert type: Error percentage / Unknown */
      alertTypes?: AlertType[];
  }
  interface UpdateEnrichmentConfigResponse {
      /** The updated EnrichmentConfig */
      enrichmentConfig?: EnrichmentConfig;
  }
  interface UpdateEnrichmentConfigShowRequest {
      /** Id of the EnrichmentConfig to retrieve */
      enrichmentConfigId: string;
      /** show property */
      show: boolean;
  }
  interface UpdateEnrichmentConfigShowResponse {
      /** The updated EnrichmentConfig */
      enrichmentConfig?: EnrichmentConfig;
  }
  interface DeleteEnrichmentConfigRequest {
      /** Id of the EnrichmentConfig to delete */
      enrichmentConfigId: string;
      /** The revision of the EnrichmentConfig */
      revision?: string;
  }
  interface DeleteEnrichmentConfigResponse {
  }
  interface QueryEnrichmentConfigRequest {
      /** WQL expression */
      query: QueryV2;
  }
  interface QueryV2 extends QueryV2PagingMethodOneOf {
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
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
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
  interface QueryEnrichmentConfigResponse {
      /** The retrieved EnrichmentConfigs */
      enrichmentConfigs?: EnrichmentConfig[];
  }
  interface GetEnrichmentConfigForRequest {
      channel?: string;
      alertType?: AlertType;
      artifactId?: string | null;
  }
  interface GetEnrichmentConfigForResponse {
      enrichmentConfigs?: EnrichmentConfig[];
  }
  /** @internal
   * @documentationMaturity preview
   */
  function createEnrichmentConfig(options?: CreateEnrichmentConfigOptions): Promise<CreateEnrichmentConfigResponse>;
  interface CreateEnrichmentConfigOptions {
      enrichmentConfigBase?: EnrichmentConfigBase;
      enrichmentConfigOverride?: EnrichmentConfigOverride;
  }
  /**
   * Get a EnrichmentConfig by id
   * @param enrichmentConfigId - Id of the EnrichmentConfig to retrieve
   * @internal
   * @documentationMaturity preview
   * @requiredField enrichmentConfigId
   */
  function getEnrichmentConfig(enrichmentConfigId: string): Promise<GetEnrichmentConfigResponse>;
  /**
   * Get a EnrichmentConfig by ListEnrichmentConfigRequest
   * @internal
   * @documentationMaturity preview
   */
  function listEnrichmentConfig(options?: ListEnrichmentConfigOptions): Promise<ListEnrichmentConfigResponse>;
  interface ListEnrichmentConfigOptions {
      configurationType?: EnrichmentConfigType;
      alertType?: string | null;
      channel?: string | null;
      artifactId?: string | null;
      enrichmentType?: EnrichmentType;
  }
  /**
   * Get a EnrichmentConfig by ListEnrichmentConfigRequest
   * @internal
   * @documentationMaturity preview
   */
  function listAllEnrichmentConfig(): Promise<ListEnrichmentConfigResponse>;
  /** @param _id - Id of the EnrichmentConfig to retrieve
   * @internal
   * @documentationMaturity preview
   * @requiredField UpdateEnrichmentConfigRequest
   * @requiredField _id
   */
  function updateEnrichmentConfig(_id: string, options?: UpdateEnrichmentConfigOptions): Promise<UpdateEnrichmentConfigResponse>;
  interface UpdateEnrichmentConfigOptions {
      /** The revision of the EnrichmentConfig */
      revision?: string;
      enrichmentConfigOvr?: EnrichmentConfigOverrideUpdate;
      enrichmentConfigBase?: EnrichmentConfigBaseUpdate;
      /** Explicit list of fields to update */
      mask?: string[];
  }
  /** @internal
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.enrichmentConfigId
   * @requiredField identifiers.show
   */
  function updateEnrichmentConfigShow(identifiers: UpdateEnrichmentConfigShowIdentifiers): Promise<UpdateEnrichmentConfigShowResponse>;
  interface UpdateEnrichmentConfigShowIdentifiers {
      /** Id of the EnrichmentConfig to retrieve */
      enrichmentConfigId: string;
      /** show property */
      show: boolean;
  }
  /**
   * Delete a EnrichmentConfig
   * @param enrichmentConfigId - Id of the EnrichmentConfig to delete
   * @internal
   * @documentationMaturity preview
   * @requiredField enrichmentConfigId
   */
  function deleteEnrichmentConfig(enrichmentConfigId: string, options?: DeleteEnrichmentConfigOptions): Promise<void>;
  interface DeleteEnrichmentConfigOptions {
      /** The revision of the EnrichmentConfig */
      revision?: string;
  }
  /**
   * Query EnrichmentConfigs using [WQL - Wix Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language)
   * @param query - WQL expression
   * @internal
   * @documentationMaturity preview
   * @requiredField query
   */
  function queryEnrichmentConfig(query: QueryV2): Promise<QueryEnrichmentConfigResponse>;
  /** @internal
   * @documentationMaturity preview
   */
  function getEnrichmentConfigFor(options?: GetEnrichmentConfigForOptions): Promise<GetEnrichmentConfigForResponse>;
  interface GetEnrichmentConfigForOptions {
      channel?: string;
      alertType?: AlertType;
      artifactId?: string | null;
  }
  
  const primeAutoV1EnrichmentConfig_universal_d___debug: typeof __debug;
  type primeAutoV1EnrichmentConfig_universal_d_EnrichmentConfig = EnrichmentConfig;
  type primeAutoV1EnrichmentConfig_universal_d_EnrichmentSource = EnrichmentSource;
  const primeAutoV1EnrichmentConfig_universal_d_EnrichmentSource: typeof EnrichmentSource;
  type primeAutoV1EnrichmentConfig_universal_d_EnrichmentConfigType = EnrichmentConfigType;
  const primeAutoV1EnrichmentConfig_universal_d_EnrichmentConfigType: typeof EnrichmentConfigType;
  type primeAutoV1EnrichmentConfig_universal_d_EnrichmentType = EnrichmentType;
  const primeAutoV1EnrichmentConfig_universal_d_EnrichmentType: typeof EnrichmentType;
  type primeAutoV1EnrichmentConfig_universal_d_AlertType = AlertType;
  const primeAutoV1EnrichmentConfig_universal_d_AlertType: typeof AlertType;
  type primeAutoV1EnrichmentConfig_universal_d_CreateEnrichmentConfigRequest = CreateEnrichmentConfigRequest;
  type primeAutoV1EnrichmentConfig_universal_d_CreateEnrichmentConfigRequestCreateWithPropertiesOneOf = CreateEnrichmentConfigRequestCreateWithPropertiesOneOf;
  type primeAutoV1EnrichmentConfig_universal_d_EnrichmentConfigBase = EnrichmentConfigBase;
  type primeAutoV1EnrichmentConfig_universal_d_EnrichmentConfigOverride = EnrichmentConfigOverride;
  type primeAutoV1EnrichmentConfig_universal_d_CreateEnrichmentConfigResponse = CreateEnrichmentConfigResponse;
  type primeAutoV1EnrichmentConfig_universal_d_GetEnrichmentConfigRequest = GetEnrichmentConfigRequest;
  type primeAutoV1EnrichmentConfig_universal_d_GetEnrichmentConfigResponse = GetEnrichmentConfigResponse;
  type primeAutoV1EnrichmentConfig_universal_d_ListEnrichmentConfigRequest = ListEnrichmentConfigRequest;
  type primeAutoV1EnrichmentConfig_universal_d_ListEnrichmentConfigResponse = ListEnrichmentConfigResponse;
  type primeAutoV1EnrichmentConfig_universal_d_ListAllEnrichmentConfigRequest = ListAllEnrichmentConfigRequest;
  type primeAutoV1EnrichmentConfig_universal_d_UpdateEnrichmentConfigRequest = UpdateEnrichmentConfigRequest;
  type primeAutoV1EnrichmentConfig_universal_d_UpdateEnrichmentConfigRequestEnrichmentConfigUpdateOneOf = UpdateEnrichmentConfigRequestEnrichmentConfigUpdateOneOf;
  type primeAutoV1EnrichmentConfig_universal_d_EnrichmentConfigOverrideUpdate = EnrichmentConfigOverrideUpdate;
  type primeAutoV1EnrichmentConfig_universal_d_EnrichmentConfigBaseUpdate = EnrichmentConfigBaseUpdate;
  type primeAutoV1EnrichmentConfig_universal_d_UpdateEnrichmentConfigResponse = UpdateEnrichmentConfigResponse;
  type primeAutoV1EnrichmentConfig_universal_d_UpdateEnrichmentConfigShowRequest = UpdateEnrichmentConfigShowRequest;
  type primeAutoV1EnrichmentConfig_universal_d_UpdateEnrichmentConfigShowResponse = UpdateEnrichmentConfigShowResponse;
  type primeAutoV1EnrichmentConfig_universal_d_DeleteEnrichmentConfigRequest = DeleteEnrichmentConfigRequest;
  type primeAutoV1EnrichmentConfig_universal_d_DeleteEnrichmentConfigResponse = DeleteEnrichmentConfigResponse;
  type primeAutoV1EnrichmentConfig_universal_d_QueryEnrichmentConfigRequest = QueryEnrichmentConfigRequest;
  type primeAutoV1EnrichmentConfig_universal_d_QueryV2 = QueryV2;
  type primeAutoV1EnrichmentConfig_universal_d_QueryV2PagingMethodOneOf = QueryV2PagingMethodOneOf;
  type primeAutoV1EnrichmentConfig_universal_d_Sorting = Sorting;
  type primeAutoV1EnrichmentConfig_universal_d_SortOrder = SortOrder;
  const primeAutoV1EnrichmentConfig_universal_d_SortOrder: typeof SortOrder;
  type primeAutoV1EnrichmentConfig_universal_d_Paging = Paging;
  type primeAutoV1EnrichmentConfig_universal_d_CursorPaging = CursorPaging;
  type primeAutoV1EnrichmentConfig_universal_d_QueryEnrichmentConfigResponse = QueryEnrichmentConfigResponse;
  type primeAutoV1EnrichmentConfig_universal_d_GetEnrichmentConfigForRequest = GetEnrichmentConfigForRequest;
  type primeAutoV1EnrichmentConfig_universal_d_GetEnrichmentConfigForResponse = GetEnrichmentConfigForResponse;
  const primeAutoV1EnrichmentConfig_universal_d_createEnrichmentConfig: typeof createEnrichmentConfig;
  type primeAutoV1EnrichmentConfig_universal_d_CreateEnrichmentConfigOptions = CreateEnrichmentConfigOptions;
  const primeAutoV1EnrichmentConfig_universal_d_getEnrichmentConfig: typeof getEnrichmentConfig;
  const primeAutoV1EnrichmentConfig_universal_d_listEnrichmentConfig: typeof listEnrichmentConfig;
  type primeAutoV1EnrichmentConfig_universal_d_ListEnrichmentConfigOptions = ListEnrichmentConfigOptions;
  const primeAutoV1EnrichmentConfig_universal_d_listAllEnrichmentConfig: typeof listAllEnrichmentConfig;
  const primeAutoV1EnrichmentConfig_universal_d_updateEnrichmentConfig: typeof updateEnrichmentConfig;
  type primeAutoV1EnrichmentConfig_universal_d_UpdateEnrichmentConfigOptions = UpdateEnrichmentConfigOptions;
  const primeAutoV1EnrichmentConfig_universal_d_updateEnrichmentConfigShow: typeof updateEnrichmentConfigShow;
  type primeAutoV1EnrichmentConfig_universal_d_UpdateEnrichmentConfigShowIdentifiers = UpdateEnrichmentConfigShowIdentifiers;
  const primeAutoV1EnrichmentConfig_universal_d_deleteEnrichmentConfig: typeof deleteEnrichmentConfig;
  type primeAutoV1EnrichmentConfig_universal_d_DeleteEnrichmentConfigOptions = DeleteEnrichmentConfigOptions;
  const primeAutoV1EnrichmentConfig_universal_d_queryEnrichmentConfig: typeof queryEnrichmentConfig;
  const primeAutoV1EnrichmentConfig_universal_d_getEnrichmentConfigFor: typeof getEnrichmentConfigFor;
  type primeAutoV1EnrichmentConfig_universal_d_GetEnrichmentConfigForOptions = GetEnrichmentConfigForOptions;
  namespace primeAutoV1EnrichmentConfig_universal_d {
    export {
      primeAutoV1EnrichmentConfig_universal_d___debug as __debug,
      primeAutoV1EnrichmentConfig_universal_d_EnrichmentConfig as EnrichmentConfig,
      primeAutoV1EnrichmentConfig_universal_d_EnrichmentSource as EnrichmentSource,
      primeAutoV1EnrichmentConfig_universal_d_EnrichmentConfigType as EnrichmentConfigType,
      primeAutoV1EnrichmentConfig_universal_d_EnrichmentType as EnrichmentType,
      primeAutoV1EnrichmentConfig_universal_d_AlertType as AlertType,
      primeAutoV1EnrichmentConfig_universal_d_CreateEnrichmentConfigRequest as CreateEnrichmentConfigRequest,
      primeAutoV1EnrichmentConfig_universal_d_CreateEnrichmentConfigRequestCreateWithPropertiesOneOf as CreateEnrichmentConfigRequestCreateWithPropertiesOneOf,
      primeAutoV1EnrichmentConfig_universal_d_EnrichmentConfigBase as EnrichmentConfigBase,
      primeAutoV1EnrichmentConfig_universal_d_EnrichmentConfigOverride as EnrichmentConfigOverride,
      primeAutoV1EnrichmentConfig_universal_d_CreateEnrichmentConfigResponse as CreateEnrichmentConfigResponse,
      primeAutoV1EnrichmentConfig_universal_d_GetEnrichmentConfigRequest as GetEnrichmentConfigRequest,
      primeAutoV1EnrichmentConfig_universal_d_GetEnrichmentConfigResponse as GetEnrichmentConfigResponse,
      primeAutoV1EnrichmentConfig_universal_d_ListEnrichmentConfigRequest as ListEnrichmentConfigRequest,
      primeAutoV1EnrichmentConfig_universal_d_ListEnrichmentConfigResponse as ListEnrichmentConfigResponse,
      primeAutoV1EnrichmentConfig_universal_d_ListAllEnrichmentConfigRequest as ListAllEnrichmentConfigRequest,
      primeAutoV1EnrichmentConfig_universal_d_UpdateEnrichmentConfigRequest as UpdateEnrichmentConfigRequest,
      primeAutoV1EnrichmentConfig_universal_d_UpdateEnrichmentConfigRequestEnrichmentConfigUpdateOneOf as UpdateEnrichmentConfigRequestEnrichmentConfigUpdateOneOf,
      primeAutoV1EnrichmentConfig_universal_d_EnrichmentConfigOverrideUpdate as EnrichmentConfigOverrideUpdate,
      primeAutoV1EnrichmentConfig_universal_d_EnrichmentConfigBaseUpdate as EnrichmentConfigBaseUpdate,
      primeAutoV1EnrichmentConfig_universal_d_UpdateEnrichmentConfigResponse as UpdateEnrichmentConfigResponse,
      primeAutoV1EnrichmentConfig_universal_d_UpdateEnrichmentConfigShowRequest as UpdateEnrichmentConfigShowRequest,
      primeAutoV1EnrichmentConfig_universal_d_UpdateEnrichmentConfigShowResponse as UpdateEnrichmentConfigShowResponse,
      primeAutoV1EnrichmentConfig_universal_d_DeleteEnrichmentConfigRequest as DeleteEnrichmentConfigRequest,
      primeAutoV1EnrichmentConfig_universal_d_DeleteEnrichmentConfigResponse as DeleteEnrichmentConfigResponse,
      primeAutoV1EnrichmentConfig_universal_d_QueryEnrichmentConfigRequest as QueryEnrichmentConfigRequest,
      primeAutoV1EnrichmentConfig_universal_d_QueryV2 as QueryV2,
      primeAutoV1EnrichmentConfig_universal_d_QueryV2PagingMethodOneOf as QueryV2PagingMethodOneOf,
      primeAutoV1EnrichmentConfig_universal_d_Sorting as Sorting,
      primeAutoV1EnrichmentConfig_universal_d_SortOrder as SortOrder,
      primeAutoV1EnrichmentConfig_universal_d_Paging as Paging,
      primeAutoV1EnrichmentConfig_universal_d_CursorPaging as CursorPaging,
      primeAutoV1EnrichmentConfig_universal_d_QueryEnrichmentConfigResponse as QueryEnrichmentConfigResponse,
      primeAutoV1EnrichmentConfig_universal_d_GetEnrichmentConfigForRequest as GetEnrichmentConfigForRequest,
      primeAutoV1EnrichmentConfig_universal_d_GetEnrichmentConfigForResponse as GetEnrichmentConfigForResponse,
      primeAutoV1EnrichmentConfig_universal_d_createEnrichmentConfig as createEnrichmentConfig,
      primeAutoV1EnrichmentConfig_universal_d_CreateEnrichmentConfigOptions as CreateEnrichmentConfigOptions,
      primeAutoV1EnrichmentConfig_universal_d_getEnrichmentConfig as getEnrichmentConfig,
      primeAutoV1EnrichmentConfig_universal_d_listEnrichmentConfig as listEnrichmentConfig,
      primeAutoV1EnrichmentConfig_universal_d_ListEnrichmentConfigOptions as ListEnrichmentConfigOptions,
      primeAutoV1EnrichmentConfig_universal_d_listAllEnrichmentConfig as listAllEnrichmentConfig,
      primeAutoV1EnrichmentConfig_universal_d_updateEnrichmentConfig as updateEnrichmentConfig,
      primeAutoV1EnrichmentConfig_universal_d_UpdateEnrichmentConfigOptions as UpdateEnrichmentConfigOptions,
      primeAutoV1EnrichmentConfig_universal_d_updateEnrichmentConfigShow as updateEnrichmentConfigShow,
      primeAutoV1EnrichmentConfig_universal_d_UpdateEnrichmentConfigShowIdentifiers as UpdateEnrichmentConfigShowIdentifiers,
      primeAutoV1EnrichmentConfig_universal_d_deleteEnrichmentConfig as deleteEnrichmentConfig,
      primeAutoV1EnrichmentConfig_universal_d_DeleteEnrichmentConfigOptions as DeleteEnrichmentConfigOptions,
      primeAutoV1EnrichmentConfig_universal_d_queryEnrichmentConfig as queryEnrichmentConfig,
      primeAutoV1EnrichmentConfig_universal_d_getEnrichmentConfigFor as getEnrichmentConfigFor,
      primeAutoV1EnrichmentConfig_universal_d_GetEnrichmentConfigForOptions as GetEnrichmentConfigForOptions,
    };
  }
  
  export { primeAutoV1EnrichmentConfig_universal_d as config };
}
