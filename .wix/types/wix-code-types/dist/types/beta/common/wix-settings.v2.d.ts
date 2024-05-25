declare module "wix-settings.v2" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface AppSettings {
      /** The state of the component */
      state?: State;
      /** Where this data is relevant */
      host?: Host;
      /** The app global settings */
      settings?: Record<string, any> | null;
      /** Translatable textual assets - not using a collection because this type only the get flow (which should return a single value) */
      translations?: Record<string, string>;
  }
  /** The state of the settings (Saved or Published) */
  enum State {
      /** Not relevant */
      NR = "NR",
      SAVED = "SAVED",
      PUBLISHED = "PUBLISHED"
  }
  /** The host in which the settings are displayed */
  enum Host {
      NA = "NA",
      VIEWER = "VIEWER",
      BUSINESS_MANAGER = "BUSINESS_MANAGER",
      ONE_APP = "ONE_APP"
  }
  interface SetComponentSettingsRequest {
      /** The component Id */
      componentId: string | null;
      /** The data we'd like to store for this component */
      settings?: Record<string, any> | null;
      /** The state to set in. ** THIS IS A DEPRECATED FIELD, PLEASE USE THE "states" FIELD ** */
      state?: State;
      /** Where this data is relevant */
      host?: Host;
      /** Translatable textual assets (pass empty key as default) */
      translations?: TranslatedLanguage[];
      /** The states to set in */
      states?: State[];
  }
  /** The translated language that contains the key and its translations */
  interface TranslatedLanguage {
      /** The key of the translations' language */
      languageKey?: LanguageKey;
      /** Key-value pair mapping of textual assets */
      translations?: Record<string, string>;
  }
  /** The language key of the saved multilingual data */
  interface LanguageKey {
      /** e.g. en */
      languageCode?: string;
      /** e.g. us */
      regionCode?: string;
      /** default: '' */
      scriptVariant?: string;
  }
  interface SetComponentSettingsResponse {
      /** Echo of the component settings */
      settings?: Record<string, any> | null;
      /** Where this data is relevant */
      host?: Host;
      /** Translatable textual assets (pass empty key as default) */
      translations?: TranslatedLanguage[];
      /** The states this was set in */
      states?: State[];
  }
  interface SetComponentSettingsForMigrationRequest {
      /** The component Id */
      componentId?: string | null;
      /** The data we'd like to store for this component */
      settings?: Record<string, any> | null;
      /** The state to set in. ** THIS IS A DEPRECATED FIELD, PLEASE USE THE "states" FIELD ** */
      state?: State;
      /** Where this data is relevant */
      host?: Host;
      /** Translatable textual assets (pass empty key as default) */
      translations?: TranslatedLanguage[];
      /** The states to set in */
      states?: State[];
      /** The appDefId for migration */
      appDefId?: string;
      /** The instanceId for migration (msid) */
      instanceId?: string;
  }
  interface SetComponentSettingsForMigrationResponse {
      /** Echo of the component settings */
      settings?: Record<string, any> | null;
      /** Where this data is relevant */
      host?: Host;
      /** Translatable textual assets (pass empty key as default) */
      translations?: TranslatedLanguage[];
      /** The states this was set in */
      states?: State[];
  }
  interface GetComponentSettingsRequest {
      /** The component we want data for. Component ids can be from the site or oneApp */
      componentId: string | null;
      /** The state of the component */
      state?: State;
      /** Where this data is relevant */
      host?: Host;
      /** The language key of the translation (allow filtering translations explicitly) */
      languageKey?: LanguageKey;
      /** Whether it is critical to get Global Settings as well */
      includeGlobalSettings?: boolean;
  }
  interface GetComponentSettingsResponse {
      /** Component settings for the requested component id */
      settings?: Record<string, any> | null;
      /** The data state of the response */
      state?: State;
      /** Where this data is relevant */
      host?: Host;
      /** based on x-wix-language or fallback */
      translations?: Record<string, string>;
      /** Optional. The global app settings */
      globalSettings?: AppSettings;
  }
  interface BulkGetComponentSettingsRequest {
      /** The component we want data for. Component ids can be from the site or oneApp */
      componentIds?: string[];
      /** The state of the component */
      state?: State;
      /** Where this data is relevant */
      host?: Host;
      /** The language key of the translation (allow filtering translations explicitly) */
      languageKey?: LanguageKey;
  }
  interface BulkGetComponentSettingsResponse {
      componentSettings?: ComponentSettings[];
  }
  interface ComponentSettings {
      componentId?: string;
      /** Component settings for the requested component id */
      settings?: Record<string, any> | null;
      /** The data state of the response */
      state?: State;
      /** Where this data is relevant */
      host?: Host;
      /** based on x-wix-language or fallback */
      translations?: Record<string, string>;
  }
  interface SetGlobalSettingsRequest {
      /** The global settings for the app */
      settings?: Record<string, any> | null;
      /** Any components we would like to set */
      componentSettings?: SetComponentSettingsItem[];
      /** The state this is set in. ** THIS IS A DEPRECATED FIELD, PLEASE USE THE "states" FIELD ** */
      state?: State;
      /** Where this data is relevant */
      host?: Host;
      /** Translatable textual assets (pass empty key as default) */
      translations?: TranslatedLanguage[];
      /** The states this was set in */
      states?: State[];
  }
  interface SetComponentSettingsItem {
      /** The state of the component */
      state?: State;
      /** Where this data is relevant */
      host?: Host;
      /** The component we want data for. Component ids can be from the site or oneApp */
      componentId?: string | null;
      /** The component settings */
      settings?: Record<string, any> | null;
      /** Translatable textual assets (pass empty key as default) */
      translations?: TranslatedLanguage[];
  }
  interface SetGlobalSettingsResponse {
      /** The data we have not for the App */
      settings?: Record<string, any> | null;
      /** The data we have for the components */
      componentSettings?: SetComponentSettingsItem[];
      /** Where this data is relevant */
      host?: Host;
      /** Translatable textual assets (pass empty key as default) */
      translations?: TranslatedLanguage[];
      /** The states this was set in */
      states?: State[];
  }
  interface GetGlobalSettingsRequest {
      /** The requested state, default is published */
      state?: State;
      /** Allow to filter by host to get only components for that host */
      host?: Host;
      /** If component settings data should also be returned */
      includeComponentSettings?: boolean;
      /** The language key of the translation (allow filtering translations explicitly) */
      languageKey?: LanguageKey;
  }
  interface GetGlobalSettingsResponse {
      /** The state of the app */
      state?: State;
      /** Where this data is relevant */
      host?: Host;
      /** The global app settings */
      settings?: Record<string, any> | null;
      /** Optional. All components listed. may include components from the site or oneApp */
      componentSettings?: GetComponentSettingsItem[];
      /** based on x-wix-language or fallback */
      translations?: Record<string, string>;
  }
  interface GetComponentSettingsItem {
      /** The state of the component */
      state?: State;
      /** Where this data is relevant */
      host?: Host;
      /** The component we want data for. Component ids can be from the site or oneApp */
      componentId?: string | null;
      /** The component settings */
      settings?: Record<string, any> | null;
      /** Translatable textual assets - not using a collection because this type only the get flow (which should return a single value) */
      translations?: Record<string, string>;
  }
  interface SetGlobalSettingsForMigrationRequest {
      /** The global settings for the app */
      settings?: Record<string, any> | null;
      /** Any components we would like to set */
      componentSettings?: SetComponentSettingsItem[];
      /** The state this is set in. ** THIS IS A DEPRECATED FIELD, PLEASE USE THE "states" FIELD ** */
      state?: State;
      /** Where this data is relevant */
      host?: Host;
      /** Translatable textual assets (pass empty key as default) */
      translations?: TranslatedLanguage[];
      /** The states this was set in */
      states?: State[];
      /** The appDefId for migration */
      appDefId?: string;
      /** The instanceId for migration (msid) */
      instanceId?: string;
  }
  interface SetGlobalSettingsForMigrationResponse {
      /** The data we have not for the App */
      settings?: Record<string, any> | null;
      /** The data we have for the components */
      componentSettings?: SetComponentSettingsItem[];
      /** Where this data is relevant */
      host?: Host;
      /** Translatable textual assets (pass empty key as default) */
      translations?: TranslatedLanguage[];
      /** The states this was set in */
      states?: State[];
  }
  interface GetGlobalSettingsForMigrationRequest {
      /** The requested state, default is published */
      state?: State;
      /** Allow to filter by host to get only components for that host */
      host?: Host;
      /** If component settings data should also be returned */
      includeComponentSettings?: boolean;
      /** The language key of the translation (allow filtering translations explicitly) */
      languageKey?: LanguageKey;
      /** The appDefId for migration */
      appDefId?: string;
      /** The instanceId for migration (msid) */
      instanceId?: string;
  }
  interface GetGlobalSettingsForMigrationResponse {
      /** The state of the app */
      state?: State;
      /** Where this data is relevant */
      host?: Host;
      /** The global app settings */
      settings?: Record<string, any> | null;
      /** Optional. All components listed. may include components from the site or oneApp */
      componentSettings?: GetComponentSettingsItem[];
      /** Translatable textual assets (returns unfiltered global translations when languageKey is omitted) */
      translations?: TranslatedLanguage[];
  }
  interface GetRequest {
      /** id of app-scoped settings */
      externalAppId?: string | null;
      /** id of component-scoped settings */
      externalComponentId?: string | null;
      /** desired fields to retrieve on either GetResponse.app_settings or GetResponse.component_settings */
      fields?: string[];
  }
  interface GetResponse {
      /** app-scoped settings; */
      appSettings?: Record<string, any> | null;
      /** component-scoped settings; */
      componentSettings?: Record<string, any> | null;
  }
  interface SetRequest {
      /** id of settings snapshot */
      externalId: string | null;
      /** scope of settings to store */
      scope: Scope;
      /** settings themselves; */
      data: Record<string, any> | null;
  }
  /** scope of settings when creating/updating; */
  enum Scope {
      /** multiple instances of a tpa can share same settings; */
      APP = "APP",
      /** scoped to a single component of an app; */
      COMPONENT = "COMPONENT"
  }
  interface SetResponse {
  }
  interface UpdateRequest {
      /** id of settings snapshot */
      externalId: string | null;
      /** scope of settings to update */
      scope: Scope;
      /** changed fields in provided data */
      fields: string[];
      /** data itself */
      data: Record<string, any> | null;
  }
  interface UpdateResponse {
      /** new if of stored settings snapshot */
      newExternalId?: string | null;
  }
  /**
   * Set component settings by componentId
   * @param componentId - The component Id
   * @public
   * @documentationMaturity preview
   * @requiredField componentId
   * @adminMethod
   */
  function setComponentSettings(componentId: string | null, options?: SetComponentSettingsOptions): Promise<SetComponentSettingsResponse>;
  interface SetComponentSettingsOptions {
      /** The data we'd like to store for this component */
      settings?: Record<string, any> | null;
      /** The state to set in. ** THIS IS A DEPRECATED FIELD, PLEASE USE THE "states" FIELD */
      state?: State;
      /** Where this data is relevant */
      host?: Host;
      /** Translatable textual assets (pass empty key as default) */
      translations?: TranslatedLanguage[];
      /** The states to set in */
      states?: State[];
  }
  /**
   * Get component settings by componentId
   * @param componentId - The component we want data for. Component ids can be from the site or oneApp
   * @public
   * @documentationMaturity preview
   * @requiredField componentId
   * @adminMethod
   */
  function getComponentSettings(componentId: string | null, options?: GetComponentSettingsOptions): Promise<GetComponentSettingsResponse>;
  interface GetComponentSettingsOptions {
      /** The state of the component */
      state?: State;
      /** Where this data is relevant */
      host?: Host;
      /** The language key of the translation (allow filtering translations explicitly) */
      languageKey?: LanguageKey;
      /** Whether it is critical to get Global Settings as well */
      includeGlobalSettings?: boolean;
  }
  /**
   * Get component settings by componentId
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function bulkGetComponentSettings(options?: BulkGetComponentSettingsOptions): Promise<BulkGetComponentSettingsResponse>;
  interface BulkGetComponentSettingsOptions {
      /** The component we want data for. Component ids can be from the site or oneApp */
      componentIds?: string[];
      /** The state of the component */
      state?: State;
      /** Where this data is relevant */
      host?: Host;
      /** The language key of the translation (allow filtering translations explicitly) */
      languageKey?: LanguageKey;
  }
  /**
   * Set global settings by instanceId (extracted from Authorization)
   * @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function setGlobalSettings(options?: SetGlobalSettingsOptions): Promise<SetGlobalSettingsResponse>;
  interface SetGlobalSettingsOptions {
      /** The global settings for the app */
      settings?: Record<string, any> | null;
      /** Any components we would like to set */
      componentSettings?: SetComponentSettingsItem[];
      /** The state this is set in. ** THIS IS A DEPRECATED FIELD, PLEASE USE THE "states" FIELD */
      state?: State;
      /** Where this data is relevant */
      host?: Host;
      /** Translatable textual assets (pass empty key as default) */
      translations?: TranslatedLanguage[];
      /** The states this was set in */
      states?: State[];
  }
  /**
   * Get global settings by instanceId (extracted from Authorization)
   * @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function getGlobalSettings(options?: GetGlobalSettingsOptions): Promise<GetGlobalSettingsResponse>;
  interface GetGlobalSettingsOptions {
      /** The requested state, default is published */
      state?: State;
      /** Allow to filter by host to get only components for that host */
      host?: Host;
      /** If component settings data should also be returned */
      includeComponentSettings?: boolean;
      /** The language key of the translation (allow filtering translations explicitly) */
      languageKey?: LanguageKey;
  }
  /**
   * retrieve settings for site. app and component-scoped settings ids can be provided.
   * looks-up settings for one or both ids provided.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function get(options?: GetOptions): Promise<GetResponse>;
  interface GetOptions {
      /** id of app-scoped settings */
      externalAppId?: string | null;
      /** id of component-scoped settings */
      externalComponentId?: string | null;
      /** desired fields to retrieve on either GetResponse.app_settings or GetResponse.component_settings */
      fields?: string[];
  }
  /**
   * store new snapshot of settings on server
   * @param data - settings themselves;
   * @internal
   * @documentationMaturity preview
   * @requiredField data
   * @requiredField identifiers
   * @requiredField identifiers.externalId
   * @requiredField identifiers.scope
   * @adminMethod
   */
  function set(identifiers: SetIdentifiers, data: Record<string, any> | null): Promise<void>;
  interface SetIdentifiers {
      /** scope of settings to store */
      scope: Scope;
      /** id of settings snapshot */
      externalId: string | null;
  }
  /**
   * create new snapshot of settings (patch)
   * @param fields - changed fields in provided data
   * @internal
   * @documentationMaturity preview
   * @requiredField fields
   * @requiredField identifiers
   * @requiredField identifiers.externalId
   * @requiredField identifiers.scope
   * @requiredField options
   * @requiredField options.data
   * @adminMethod
   */
  function update(identifiers: UpdateIdentifiers, fields: string[], options: UpdateOptions): Promise<UpdateResponse>;
  interface UpdateIdentifiers {
      /** scope of settings to update */
      scope: Scope;
      /** id of settings snapshot */
      externalId: string | null;
  }
  interface UpdateOptions {
      /** data itself */
      data: Record<string, any> | null;
  }
  
  const appSettingsV1Settings_universal_d___debug: typeof __debug;
  type appSettingsV1Settings_universal_d_AppSettings = AppSettings;
  type appSettingsV1Settings_universal_d_State = State;
  const appSettingsV1Settings_universal_d_State: typeof State;
  type appSettingsV1Settings_universal_d_Host = Host;
  const appSettingsV1Settings_universal_d_Host: typeof Host;
  type appSettingsV1Settings_universal_d_SetComponentSettingsRequest = SetComponentSettingsRequest;
  type appSettingsV1Settings_universal_d_TranslatedLanguage = TranslatedLanguage;
  type appSettingsV1Settings_universal_d_LanguageKey = LanguageKey;
  type appSettingsV1Settings_universal_d_SetComponentSettingsResponse = SetComponentSettingsResponse;
  type appSettingsV1Settings_universal_d_SetComponentSettingsForMigrationRequest = SetComponentSettingsForMigrationRequest;
  type appSettingsV1Settings_universal_d_SetComponentSettingsForMigrationResponse = SetComponentSettingsForMigrationResponse;
  type appSettingsV1Settings_universal_d_GetComponentSettingsRequest = GetComponentSettingsRequest;
  type appSettingsV1Settings_universal_d_GetComponentSettingsResponse = GetComponentSettingsResponse;
  type appSettingsV1Settings_universal_d_BulkGetComponentSettingsRequest = BulkGetComponentSettingsRequest;
  type appSettingsV1Settings_universal_d_BulkGetComponentSettingsResponse = BulkGetComponentSettingsResponse;
  type appSettingsV1Settings_universal_d_ComponentSettings = ComponentSettings;
  type appSettingsV1Settings_universal_d_SetGlobalSettingsRequest = SetGlobalSettingsRequest;
  type appSettingsV1Settings_universal_d_SetComponentSettingsItem = SetComponentSettingsItem;
  type appSettingsV1Settings_universal_d_SetGlobalSettingsResponse = SetGlobalSettingsResponse;
  type appSettingsV1Settings_universal_d_GetGlobalSettingsRequest = GetGlobalSettingsRequest;
  type appSettingsV1Settings_universal_d_GetGlobalSettingsResponse = GetGlobalSettingsResponse;
  type appSettingsV1Settings_universal_d_GetComponentSettingsItem = GetComponentSettingsItem;
  type appSettingsV1Settings_universal_d_SetGlobalSettingsForMigrationRequest = SetGlobalSettingsForMigrationRequest;
  type appSettingsV1Settings_universal_d_SetGlobalSettingsForMigrationResponse = SetGlobalSettingsForMigrationResponse;
  type appSettingsV1Settings_universal_d_GetGlobalSettingsForMigrationRequest = GetGlobalSettingsForMigrationRequest;
  type appSettingsV1Settings_universal_d_GetGlobalSettingsForMigrationResponse = GetGlobalSettingsForMigrationResponse;
  type appSettingsV1Settings_universal_d_GetRequest = GetRequest;
  type appSettingsV1Settings_universal_d_GetResponse = GetResponse;
  type appSettingsV1Settings_universal_d_SetRequest = SetRequest;
  type appSettingsV1Settings_universal_d_Scope = Scope;
  const appSettingsV1Settings_universal_d_Scope: typeof Scope;
  type appSettingsV1Settings_universal_d_SetResponse = SetResponse;
  type appSettingsV1Settings_universal_d_UpdateRequest = UpdateRequest;
  type appSettingsV1Settings_universal_d_UpdateResponse = UpdateResponse;
  const appSettingsV1Settings_universal_d_setComponentSettings: typeof setComponentSettings;
  type appSettingsV1Settings_universal_d_SetComponentSettingsOptions = SetComponentSettingsOptions;
  const appSettingsV1Settings_universal_d_getComponentSettings: typeof getComponentSettings;
  type appSettingsV1Settings_universal_d_GetComponentSettingsOptions = GetComponentSettingsOptions;
  const appSettingsV1Settings_universal_d_bulkGetComponentSettings: typeof bulkGetComponentSettings;
  type appSettingsV1Settings_universal_d_BulkGetComponentSettingsOptions = BulkGetComponentSettingsOptions;
  const appSettingsV1Settings_universal_d_setGlobalSettings: typeof setGlobalSettings;
  type appSettingsV1Settings_universal_d_SetGlobalSettingsOptions = SetGlobalSettingsOptions;
  const appSettingsV1Settings_universal_d_getGlobalSettings: typeof getGlobalSettings;
  type appSettingsV1Settings_universal_d_GetGlobalSettingsOptions = GetGlobalSettingsOptions;
  const appSettingsV1Settings_universal_d_get: typeof get;
  type appSettingsV1Settings_universal_d_GetOptions = GetOptions;
  const appSettingsV1Settings_universal_d_set: typeof set;
  type appSettingsV1Settings_universal_d_SetIdentifiers = SetIdentifiers;
  const appSettingsV1Settings_universal_d_update: typeof update;
  type appSettingsV1Settings_universal_d_UpdateIdentifiers = UpdateIdentifiers;
  type appSettingsV1Settings_universal_d_UpdateOptions = UpdateOptions;
  namespace appSettingsV1Settings_universal_d {
    export {
      appSettingsV1Settings_universal_d___debug as __debug,
      appSettingsV1Settings_universal_d_AppSettings as AppSettings,
      appSettingsV1Settings_universal_d_State as State,
      appSettingsV1Settings_universal_d_Host as Host,
      appSettingsV1Settings_universal_d_SetComponentSettingsRequest as SetComponentSettingsRequest,
      appSettingsV1Settings_universal_d_TranslatedLanguage as TranslatedLanguage,
      appSettingsV1Settings_universal_d_LanguageKey as LanguageKey,
      appSettingsV1Settings_universal_d_SetComponentSettingsResponse as SetComponentSettingsResponse,
      appSettingsV1Settings_universal_d_SetComponentSettingsForMigrationRequest as SetComponentSettingsForMigrationRequest,
      appSettingsV1Settings_universal_d_SetComponentSettingsForMigrationResponse as SetComponentSettingsForMigrationResponse,
      appSettingsV1Settings_universal_d_GetComponentSettingsRequest as GetComponentSettingsRequest,
      appSettingsV1Settings_universal_d_GetComponentSettingsResponse as GetComponentSettingsResponse,
      appSettingsV1Settings_universal_d_BulkGetComponentSettingsRequest as BulkGetComponentSettingsRequest,
      appSettingsV1Settings_universal_d_BulkGetComponentSettingsResponse as BulkGetComponentSettingsResponse,
      appSettingsV1Settings_universal_d_ComponentSettings as ComponentSettings,
      appSettingsV1Settings_universal_d_SetGlobalSettingsRequest as SetGlobalSettingsRequest,
      appSettingsV1Settings_universal_d_SetComponentSettingsItem as SetComponentSettingsItem,
      appSettingsV1Settings_universal_d_SetGlobalSettingsResponse as SetGlobalSettingsResponse,
      appSettingsV1Settings_universal_d_GetGlobalSettingsRequest as GetGlobalSettingsRequest,
      appSettingsV1Settings_universal_d_GetGlobalSettingsResponse as GetGlobalSettingsResponse,
      appSettingsV1Settings_universal_d_GetComponentSettingsItem as GetComponentSettingsItem,
      appSettingsV1Settings_universal_d_SetGlobalSettingsForMigrationRequest as SetGlobalSettingsForMigrationRequest,
      appSettingsV1Settings_universal_d_SetGlobalSettingsForMigrationResponse as SetGlobalSettingsForMigrationResponse,
      appSettingsV1Settings_universal_d_GetGlobalSettingsForMigrationRequest as GetGlobalSettingsForMigrationRequest,
      appSettingsV1Settings_universal_d_GetGlobalSettingsForMigrationResponse as GetGlobalSettingsForMigrationResponse,
      appSettingsV1Settings_universal_d_GetRequest as GetRequest,
      appSettingsV1Settings_universal_d_GetResponse as GetResponse,
      appSettingsV1Settings_universal_d_SetRequest as SetRequest,
      appSettingsV1Settings_universal_d_Scope as Scope,
      appSettingsV1Settings_universal_d_SetResponse as SetResponse,
      appSettingsV1Settings_universal_d_UpdateRequest as UpdateRequest,
      appSettingsV1Settings_universal_d_UpdateResponse as UpdateResponse,
      appSettingsV1Settings_universal_d_setComponentSettings as setComponentSettings,
      appSettingsV1Settings_universal_d_SetComponentSettingsOptions as SetComponentSettingsOptions,
      appSettingsV1Settings_universal_d_getComponentSettings as getComponentSettings,
      appSettingsV1Settings_universal_d_GetComponentSettingsOptions as GetComponentSettingsOptions,
      appSettingsV1Settings_universal_d_bulkGetComponentSettings as bulkGetComponentSettings,
      appSettingsV1Settings_universal_d_BulkGetComponentSettingsOptions as BulkGetComponentSettingsOptions,
      appSettingsV1Settings_universal_d_setGlobalSettings as setGlobalSettings,
      appSettingsV1Settings_universal_d_SetGlobalSettingsOptions as SetGlobalSettingsOptions,
      appSettingsV1Settings_universal_d_getGlobalSettings as getGlobalSettings,
      appSettingsV1Settings_universal_d_GetGlobalSettingsOptions as GetGlobalSettingsOptions,
      appSettingsV1Settings_universal_d_get as get,
      appSettingsV1Settings_universal_d_GetOptions as GetOptions,
      appSettingsV1Settings_universal_d_set as set,
      appSettingsV1Settings_universal_d_SetIdentifiers as SetIdentifiers,
      appSettingsV1Settings_universal_d_update as update,
      appSettingsV1Settings_universal_d_UpdateIdentifiers as UpdateIdentifiers,
      appSettingsV1Settings_universal_d_UpdateOptions as UpdateOptions,
    };
  }
  
  export { appSettingsV1Settings_universal_d as appSettings };
}
