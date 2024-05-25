declare module "wix-multilingual-localization-schema" {
  interface Schema {
      /** Schema ID. */
      _id?: string;
      /** Schema key. */
      key?: SchemaKey;
      /** Schema Data. */
      body?: SchemaBody;
      /** Higher level schema, group_by_name will point to an entity of this schema. */
      referencedSchemaKey?: SchemaKey;
      /** The name of the schema */
      schemaName?: string | null;
  }
  interface SchemaKey {
      /** ID of app that created the schema. */
      appId?: string;
      /** Unique name defined by the creator app, used to distinguish between different entities in the the app domain. */
      entityType?: string;
      /** Scope schema is defined in (Global/Site) */
      scope?: SchemaScope;
  }
  enum SchemaScope {
      /** Global schema, relevant to all sites */
      GLOBAL = "GLOBAL",
      /** Site schema, relevant to specific site only */
      SITE = "SITE"
  }
  interface SchemaBody {
      /** Groupings of meaningful content categories. Optional. */
      groups?: SchemaFieldsGroup[];
      /** Fields that will be displayed in content previews (e.g., product name for products). */
      previewFields?: PreviewFields;
      /** Whether the schema is hidden from the site. */
      hidden?: boolean;
      /** Translation strategy for the schema */
      translationStrategy?: TranslationStrategy;
  }
  interface SchemaFieldsGroup {
      /** Group descriptive name. */
      displayName?: string;
      /** Group fields that contain the actual meta data */
      fields?: SchemaField[];
  }
  interface SchemaField {
      /** Field ID. */
      _id?: string;
      /** Field descriptive name. */
      displayName?: string;
      /** Field type. */
      type?: FieldType;
      /** Field minimum length (in case of text field) */
      minLength?: number | null;
      /** Field maximum length (in case text field) */
      maxLength?: number | null;
      /** Field format. If set - must be one of the values of wix.api.format as string (case insensitive) */
      format?: string | null;
      /** In case field is accessible in schema via sequences, this array represents the name of the sequences by their order */
      sequencePath?: string[];
      /** Whether the field is hidden from the site. Hidden field constraints (type, min/max length) are still active! */
      hidden?: boolean;
      /** Whether the field is for display only and should not allowed to be translated */
      displayOnly?: boolean;
  }
  enum FieldType {
      /** Undefined field type */
      UNDEFINED_TYPE = "UNDEFINED_TYPE",
      /** Short text TEXT */
      SHORT_TEXT = "SHORT_TEXT",
      /** Long Plain Text TEXT */
      LONG_TEXT = "LONG_TEXT",
      /** Long text including styles, images, links and more... HTML */
      RICH_TEXT = "RICH_TEXT",
      /** Wix Rich-Content-Editor format RICO */
      RICH_CONTENT_EDITOR = "RICH_CONTENT_EDITOR",
      /** Choose one from many options CSV TEXT */
      SELECTION = "SELECTION",
      /** Choose multi items from many options */
      MULTI_SELECTION = "MULTI_SELECTION",
      /** Wix document media item */
      DOCUMENT = "DOCUMENT",
      /** Wix Image media item */
      IMAGE = "IMAGE",
      /** Wix Video media item */
      VIDEO = "VIDEO",
      /** Image URL without metadata */
      IMAGE_LINK = "IMAGE_LINK",
      /** contain an XML representation of an entity or part of it */
      XML = "XML"
  }
  interface PreviewFields {
      /** ID of field representing the schema's title. */
      titleFieldId?: string | null;
      /** ID of field representing the schema's image. */
      imageFieldId?: string | null;
      /** ID of field representing the schema's video. */
      videoFieldId?: string | null;
  }
  enum TranslationStrategy {
      /** Standard translation strategy */
      STANDARD = "STANDARD",
      /** Compound entity translation strategy */
      COMPOUND = "COMPOUND"
  }
  interface CreateOrUpdateContentSchemaByKeyRequest {
      /** Schema to add/update. */
      schema: SchemaByKey;
  }
  interface SchemaByKey {
      /** Schema key. */
      key?: SchemaKey;
      /** Schema data. */
      body?: SchemaBody;
      /** Higher level schema, group_by_name will point to an entity of this schema. */
      referencedSchemaKey?: SchemaKey;
      /** The name of the schema */
      schemaName?: string | null;
  }
  interface CreateOrUpdateContentSchemaResponse {
      /** Created/updated schema. */
      schema?: Schema;
  }
  interface UpdateContentSchemaRequest {
      /** Schema to add/update. */
      schema: SchemaById;
  }
  interface SchemaById {
      /** Schema ID. */
      _id?: string;
      /** Schema data. */
      body?: SchemaBody;
      /** Higher level schema, group_by_name will point to an entity of this schema. */
      referencedSchemaKey?: SchemaKey;
      /** The name of the schema */
      schemaName?: string | null;
  }
  interface ListContentSchemasRequest {
      /** Filter object */
      filter?: SchemaFilter;
      /** Paging options. */
      paging?: Paging;
  }
  interface SchemaFilter {
      /** Schema IDs. */
      schemaIds?: string[];
      /** App ID. */
      appId?: string | null;
      /** Entity types */
      entityType?: string | null;
      /** Search for schemas that are applicable to all sites or for this specific site. */
      scope?: SchemaScope;
  }
  interface Paging {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface ListContentSchemasResponse {
      /** Schemas that meet the request conditions. */
      schemas?: Schema[];
  }
  interface GetSiteContentSchemasRequest {
  }
  interface GetSiteContentSchemasResponse {
      /** Schemas that have content. */
      schemas?: Schema[];
  }
  interface RemoveContentSchemaRequest {
      /** Schema ID to delete. */
      schemaId: string;
  }
  interface RemoveContentSchemaResponse {
  }
  interface RemoveContentSchemaByKeyRequest {
      /** Schema key to delete. */
      schemaKey: SchemaKey;
  }
  /**
   * Creates a new content schema or updates an existing one.
   * To update, identify the relvant schema by its appId, entityType and scope.
   * There are no partial updates. Updating a schema will override the existing one.
   * @param schema - Schema to add/update.
   * @internal
   * @documentationMaturity preview
   * @requiredField schema
   * @requiredField schema.body
   * @requiredField schema.key
   * @adminMethod
   */
  function createOrUpdateContentSchemaByKey(schema: SchemaByKey): Promise<CreateOrUpdateContentSchemaResponse>;
  /**
   * Updates an existing content schema by ID.
   * There are no partial updates. Updates to a schema will override the existing one.
   * @param schema - Schema to add/update.
   * @internal
   * @documentationMaturity preview
   * @requiredField schema
   * @requiredField schema.body
   * @adminMethod
   */
  function updateContentSchema(schema: SchemaById): Promise<CreateOrUpdateContentSchemaResponse>;
  /**
   * Retrieves a list of up to 100 content schemas, given the provided paging and filters.
   * @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function listContentSchemas(options?: ListContentSchemasOptions): Promise<ListContentSchemasResponse>;
  interface ListContentSchemasOptions {
      /** Filter object */
      filter?: SchemaFilter;
      /** Paging options. */
      paging?: Paging;
  }
  /**
   * Retrieves all schemas that have at least one content key.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function getSiteContentSchemas(): Promise<GetSiteContentSchemasResponse>;
  /**
   * Deletes an existing content schema by ID.
   * Note: If the requested ID doesn't exist, the API will ignore the request and return successfully - with no error message.
   * @param schemaId - Schema ID to delete.
   * @internal
   * @documentationMaturity preview
   * @requiredField schemaId
   * @adminMethod
   */
  function removeContentSchema(schemaId: string): Promise<void>;
  /**
   * Deletes an existing content schema by schemaKey - including appId, entityType and scope.
   * If the requested key doesn't exist, the API will ignore the request and return successfully - with no error message.
   * @param schemaKey - Schema key to delete.
   * @internal
   * @documentationMaturity preview
   * @requiredField schemaKey
   * @adminMethod
   */
  function removeContentSchemaByKey(schemaKey: SchemaKey): Promise<void>;
  
  type multilingualLocalizationV1Schema_universal_d_Schema = Schema;
  type multilingualLocalizationV1Schema_universal_d_SchemaKey = SchemaKey;
  type multilingualLocalizationV1Schema_universal_d_SchemaScope = SchemaScope;
  const multilingualLocalizationV1Schema_universal_d_SchemaScope: typeof SchemaScope;
  type multilingualLocalizationV1Schema_universal_d_SchemaBody = SchemaBody;
  type multilingualLocalizationV1Schema_universal_d_SchemaFieldsGroup = SchemaFieldsGroup;
  type multilingualLocalizationV1Schema_universal_d_SchemaField = SchemaField;
  type multilingualLocalizationV1Schema_universal_d_FieldType = FieldType;
  const multilingualLocalizationV1Schema_universal_d_FieldType: typeof FieldType;
  type multilingualLocalizationV1Schema_universal_d_PreviewFields = PreviewFields;
  type multilingualLocalizationV1Schema_universal_d_TranslationStrategy = TranslationStrategy;
  const multilingualLocalizationV1Schema_universal_d_TranslationStrategy: typeof TranslationStrategy;
  type multilingualLocalizationV1Schema_universal_d_CreateOrUpdateContentSchemaByKeyRequest = CreateOrUpdateContentSchemaByKeyRequest;
  type multilingualLocalizationV1Schema_universal_d_SchemaByKey = SchemaByKey;
  type multilingualLocalizationV1Schema_universal_d_CreateOrUpdateContentSchemaResponse = CreateOrUpdateContentSchemaResponse;
  type multilingualLocalizationV1Schema_universal_d_UpdateContentSchemaRequest = UpdateContentSchemaRequest;
  type multilingualLocalizationV1Schema_universal_d_SchemaById = SchemaById;
  type multilingualLocalizationV1Schema_universal_d_ListContentSchemasRequest = ListContentSchemasRequest;
  type multilingualLocalizationV1Schema_universal_d_SchemaFilter = SchemaFilter;
  type multilingualLocalizationV1Schema_universal_d_Paging = Paging;
  type multilingualLocalizationV1Schema_universal_d_ListContentSchemasResponse = ListContentSchemasResponse;
  type multilingualLocalizationV1Schema_universal_d_GetSiteContentSchemasRequest = GetSiteContentSchemasRequest;
  type multilingualLocalizationV1Schema_universal_d_GetSiteContentSchemasResponse = GetSiteContentSchemasResponse;
  type multilingualLocalizationV1Schema_universal_d_RemoveContentSchemaRequest = RemoveContentSchemaRequest;
  type multilingualLocalizationV1Schema_universal_d_RemoveContentSchemaResponse = RemoveContentSchemaResponse;
  type multilingualLocalizationV1Schema_universal_d_RemoveContentSchemaByKeyRequest = RemoveContentSchemaByKeyRequest;
  const multilingualLocalizationV1Schema_universal_d_createOrUpdateContentSchemaByKey: typeof createOrUpdateContentSchemaByKey;
  const multilingualLocalizationV1Schema_universal_d_updateContentSchema: typeof updateContentSchema;
  const multilingualLocalizationV1Schema_universal_d_listContentSchemas: typeof listContentSchemas;
  type multilingualLocalizationV1Schema_universal_d_ListContentSchemasOptions = ListContentSchemasOptions;
  const multilingualLocalizationV1Schema_universal_d_getSiteContentSchemas: typeof getSiteContentSchemas;
  const multilingualLocalizationV1Schema_universal_d_removeContentSchema: typeof removeContentSchema;
  const multilingualLocalizationV1Schema_universal_d_removeContentSchemaByKey: typeof removeContentSchemaByKey;
  namespace multilingualLocalizationV1Schema_universal_d {
    export {
      multilingualLocalizationV1Schema_universal_d_Schema as Schema,
      multilingualLocalizationV1Schema_universal_d_SchemaKey as SchemaKey,
      multilingualLocalizationV1Schema_universal_d_SchemaScope as SchemaScope,
      multilingualLocalizationV1Schema_universal_d_SchemaBody as SchemaBody,
      multilingualLocalizationV1Schema_universal_d_SchemaFieldsGroup as SchemaFieldsGroup,
      multilingualLocalizationV1Schema_universal_d_SchemaField as SchemaField,
      multilingualLocalizationV1Schema_universal_d_FieldType as FieldType,
      multilingualLocalizationV1Schema_universal_d_PreviewFields as PreviewFields,
      multilingualLocalizationV1Schema_universal_d_TranslationStrategy as TranslationStrategy,
      multilingualLocalizationV1Schema_universal_d_CreateOrUpdateContentSchemaByKeyRequest as CreateOrUpdateContentSchemaByKeyRequest,
      multilingualLocalizationV1Schema_universal_d_SchemaByKey as SchemaByKey,
      multilingualLocalizationV1Schema_universal_d_CreateOrUpdateContentSchemaResponse as CreateOrUpdateContentSchemaResponse,
      multilingualLocalizationV1Schema_universal_d_UpdateContentSchemaRequest as UpdateContentSchemaRequest,
      multilingualLocalizationV1Schema_universal_d_SchemaById as SchemaById,
      multilingualLocalizationV1Schema_universal_d_ListContentSchemasRequest as ListContentSchemasRequest,
      multilingualLocalizationV1Schema_universal_d_SchemaFilter as SchemaFilter,
      multilingualLocalizationV1Schema_universal_d_Paging as Paging,
      multilingualLocalizationV1Schema_universal_d_ListContentSchemasResponse as ListContentSchemasResponse,
      multilingualLocalizationV1Schema_universal_d_GetSiteContentSchemasRequest as GetSiteContentSchemasRequest,
      multilingualLocalizationV1Schema_universal_d_GetSiteContentSchemasResponse as GetSiteContentSchemasResponse,
      multilingualLocalizationV1Schema_universal_d_RemoveContentSchemaRequest as RemoveContentSchemaRequest,
      multilingualLocalizationV1Schema_universal_d_RemoveContentSchemaResponse as RemoveContentSchemaResponse,
      multilingualLocalizationV1Schema_universal_d_RemoveContentSchemaByKeyRequest as RemoveContentSchemaByKeyRequest,
      multilingualLocalizationV1Schema_universal_d_createOrUpdateContentSchemaByKey as createOrUpdateContentSchemaByKey,
      multilingualLocalizationV1Schema_universal_d_updateContentSchema as updateContentSchema,
      multilingualLocalizationV1Schema_universal_d_listContentSchemas as listContentSchemas,
      multilingualLocalizationV1Schema_universal_d_ListContentSchemasOptions as ListContentSchemasOptions,
      multilingualLocalizationV1Schema_universal_d_getSiteContentSchemas as getSiteContentSchemas,
      multilingualLocalizationV1Schema_universal_d_removeContentSchema as removeContentSchema,
      multilingualLocalizationV1Schema_universal_d_removeContentSchemaByKey as removeContentSchemaByKey,
    };
  }
  
  export { multilingualLocalizationV1Schema_universal_d as localizationSchema };
}
