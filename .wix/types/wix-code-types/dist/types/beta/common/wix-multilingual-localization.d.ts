declare module "wix-multilingual-localization" {
  interface LocalizedContent {
      /** UUID identifier for content */
      _id?: string;
      /** Compound key identifier for content */
      key?: LocalizedContentKey;
      /** Localized fields for every language this entity has content */
      fieldsPerLanguage?: LanguageFields[];
      /** Optional field that will group in the UI contents with the same group name */
      groupByName?: string | null;
  }
  interface LocalizedContentKey {
      /** Schema unique key identifier */
      schemaKey?: SchemaKey;
      /** Unique identifier that represents a specific entity in the app */
      entityId?: string;
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
  interface LanguageFields {
      /** Language identifier in IETF BCP 47 tag format. */
      languageTag?: string;
      /** List of fields localized in the given language */
      languageFields?: LocalizedContentField[];
  }
  interface LocalizedContentField extends LocalizedContentFieldValueOneOf {
      /** Field actual localized content as simple text type */
      textValue?: string;
      /** Field actual localized content as rich content editor type */
      wixRichContentEditorValue?: string;
      /** Field actual localized content as media type (image, video or document) */
      mediaValue?: MediaItem;
      /** Field unique identifier. This id must have a matching schema field id */
      _id?: string;
      /** Describes the updater identity (site owner / app / auto translator) */
      updatedBy?: UpdaterIdentity;
      /** Owner of the last change on this field */
      updaterId?: string | null;
      /** Is content published to live site or not */
      published?: boolean;
      /** Status of the field in the workflow (e.g. pending, reviewed, approved). Value is free text - defined by the client and only stored here. */
      status?: string | null;
      /** In case field is reachable via sequence/s, this array represents all the sequences names in the path, and their corresponding item id */
      sequencePath?: FieldSequence[];
  }
  /** @oneof */
  interface LocalizedContentFieldValueOneOf {
      /** Field actual localized content as simple text type */
      textValue?: string;
      /** Field actual localized content as rich content editor type */
      wixRichContentEditorValue?: string;
      /** Field actual localized content as media type (image, video or document) */
      mediaValue?: MediaItem;
  }
  interface MediaItem extends MediaItemMediaOneOf {
      /** Image media item */
      image?: string;
      /** Video media item */
      video?: string;
      /** Document media item */
      document?: string;
  }
  /** @oneof */
  interface MediaItemMediaOneOf {
      /** Image media item */
      image?: string;
      /** Video media item */
      video?: string;
      /** Document media item */
      document?: string;
  }
  interface VideoResolution {
      /** Video URL. */
      url?: string;
      /** Video height. */
      height?: number;
      /** Video width. */
      width?: number;
      /**
       * Deprecated. Use the `posters` property in the parent entity instead.
       * @internal
       */
      poster?: string;
      /** Video format for example, mp4, hls. */
      format?: string;
      /**
       * Deprecated. Use the `urlExpirationDate` property in the parent entity instead.
       * @internal
       */
      urlExpirationDate?: Date;
      /**
       * Deprecated. Use the `sizeInBytes` property in the parent entity instead. Size cannot be provided per resolution.
       * @internal
       */
      sizeInBytes?: string | null;
      /**
       * Video quality. For example: 480p, 720p.
       * @internal
       */
      quality?: string | null;
      /**
       * Video filename.
       * @internal
       */
      filename?: string | null;
      /**
       * Video duration in seconds.
       * @internal
       * @readonly
       */
      durationInSeconds?: number | null;
      /**
       * Video duration in milliseconds.
       * @internal
       * @readonly
       */
      durationInMilliseconds?: number | null;
      /**
       * When true, this is a protected asset, and calling the URL will return a 403 error.
       * In order to access private assets, make a request to:
       * `GenerateFileDownloadUrl` with the WixMedia id and specify the asset_key in the request
       * @internal
       * @readonly
       */
      private?: boolean | null;
      /**
       * Key to identify the video resolution's relationship to the original media in WixMedia.
       * Can be used to request a download for the specific video resolution.
       * For example: 480p.mp4, 720p.mp4, 1080p.mp4, trailer-720p.mp4, clip-720p.mp4
       * @internal
       * @readonly
       */
      assetKey?: string | null;
  }
  enum UpdaterIdentity {
      /** Site Owner identity */
      SITE_OWNER = "SITE_OWNER",
      /** External hired human translator */
      EXTERNAL = "EXTERNAL",
      /** Machine translation like Google Translate */
      MACHINE = "MACHINE"
  }
  interface FieldSequence {
      /** Name of sequence */
      seqName?: string;
      /** Id of relevant item in the sequence */
      itemId?: string;
      /** Optional field - in case set sequences will be ordered by priority index (best effort) */
      priorityIndex?: number | null;
  }
  interface SearchEntityContentRequest {
      schemaKey: SchemaKey;
      primaryLanguage?: string;
      secondaryLanguage?: string;
      fieldSearch?: FieldSearch;
      translationStatus?: TranslationStatus;
      paging?: Paging;
  }
  interface FieldSearch {
      fieldIdToSearch?: string;
      stringToSearch?: string;
  }
  enum TranslationStatus {
      ALL = "ALL",
      AWAIT_TRANSLATION = "AWAIT_TRANSLATION",
      IN_PROGRESS = "IN_PROGRESS",
      TRANSLATED = "TRANSLATED"
  }
  interface Paging {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface SearchEntityContentResponse {
      localizedContents?: LocalizedContent[];
      paging?: Paging;
      total?: number;
  }
  interface Person {
      /**
       * @internal
       * @readonly
       */
      _id?: string;
      /** @internal */
      name?: string;
      /** @internal */
      description?: string;
      /** @internal */
      image?: Image;
      /** @internal */
      birthDate?: string;
      /** @internal */
      genericMessage?: GenericMessage;
      /** @internal */
      hobbies?: Hobby[];
      /** @internal */
      additionalDetails?: Record<string, DetailType>;
  }
  interface Image {
      /**
       * WixMedia image ID
       * @internal
       */
      _id?: string;
      /**
       * URL of image
       * @internal
       */
      url?: string;
      /**
       * Original image width
       * @internal
       */
      height?: number;
      /**
       * Original image height
       * @internal
       */
      width?: number;
  }
  interface GenericMessage {
      /** @internal */
      data1?: string;
      /** @internal */
      data2?: string;
      /** @internal */
      data3?: string;
      /** @internal */
      data4?: string;
  }
  interface Hobby {
      /** @internal */
      name?: string;
      /** @internal */
      category?: string;
  }
  interface DetailType {
      /** @internal */
      name?: string;
  }
  interface AddPersonRequest {
      /** @internal */
      person?: Person;
  }
  interface AddPersonResponse {
  }
  interface UpdatePersonRequest {
      /** @internal */
      person?: Person;
  }
  interface UpdatePersonResponse {
  }
  interface DeletePersonRequest {
      /** @internal */
      personId: string;
  }
  interface DeletePersonResponse {
  }
  interface PersonsListRequest {
  }
  interface PersonsListResponse {
      /** @internal */
      persons?: Person[];
  }
  interface Empty {
  }
  interface LocalizedContentChanged {
      /** The action that changed the content */
      action?: LocalizationContentChangedAction;
      /** token to identify the flow this event is part of and the total number of event in this flow. */
      flowToken?: string | null;
  }
  interface LocalizedLanguageContent {
      /** UUID identifier for the original content */
      localizationRecordId?: string;
      /** Compound key identifier for content */
      key?: LocalizedLanguageContentKey;
      /** Localized fields this entity has content */
      fields?: LocalizedContentField[];
      /** Optional field that will group in the UI contents with the same group name */
      groupByName?: string | null;
  }
  interface LocalizedLanguageContentKey {
      /** Language identifier in IETF BCP 47 tag format. */
      languageTag?: string;
      /** Schema unique key identifier */
      schemaKey?: SchemaKey;
      /** Unique identifier that represents a specific entity in the app */
      entityId?: string;
  }
  interface CreateOrUpdateAction {
      /** The new Localized published state */
      localizedLanguageContent?: LocalizedLanguageContent;
  }
  interface DeleteAction {
      /** UUID identifier for the original content */
      localizationRecordId?: string;
      /** Language identifier in IETF BCP 47 tag format. */
      languageTag?: string;
      /** Compound key identifier for content */
      key?: LocalizedLanguageContentKey;
  }
  interface LocalizationContentChangedAction extends LocalizationContentChangedActionActionOneOf {
      /** Content has changes in its fields */
      createOrUpdateAction?: CreateOrUpdateAction;
      /** Content deleted */
      deleteAction?: DeleteAction;
  }
  /** @oneof */
  interface LocalizationContentChangedActionActionOneOf {
      /** Content has changes in its fields */
      createOrUpdateAction?: CreateOrUpdateAction;
      /** Content deleted */
      deleteAction?: DeleteAction;
  }
  interface CreateOrUpdateContentsByKeyRequest {
      /** Language ID in IETF BCP 47 tag format. */
      languageTag?: string;
      /** List of content for creation/update. */
      languageContents?: LanguageContentByKey[];
      /** When true - uploaded language contents will replace existing language contents */
      overrideData?: boolean;
  }
  interface LanguageContentByKey {
      /** Content unique key identifier */
      contentKey?: LocalizedContentKey;
      /** List of localized fields */
      languageFields?: LocalizedContentField[];
      /** Optional field that will group in the UI contents with the same group name */
      groupByName?: string | null;
  }
  interface CreateOrUpdateContentsResponse {
      /** List of all created/updated content. */
      localizedContents?: LocalizedContent[];
  }
  interface UpdateContentsRequest {
      /** Language ID in IETF BCP 47 tag format. */
      languageTag?: string;
      /** List of content in a given language for update. */
      languageContents?: LanguageContentById[];
      /** When true - uploaded language contents will replace existing language contents */
      overrideData?: boolean;
  }
  interface LanguageContentById {
      /** Content uuid identifier */
      contentId?: string;
      /** List of localized fields */
      languageFields?: LocalizedContentField[];
      /** Optional field that will group in the UI contents with the same group name */
      groupByName?: string | null;
  }
  interface RemoveContentFieldsRequest {
      /** Content IDs for fields removal */
      contentId: string;
      /** Language ID (in IETF BCP 47 tag format) for fields removal, remove from all languages if empty */
      languageTagsMask?: string[];
      /** Field unique identifier to remove */
      fieldsIdentifiers?: ContentFieldIdentifier[];
  }
  interface ContentFieldIdentifier {
      /** This id must have a matching schema field id */
      _id?: string;
      /** In case field is reachable via sequence/s, this array represents all the sequences names in the path, and their corresponding item id */
      sequencePath?: FieldSequence[];
  }
  interface RemoveContentFieldsResponse {
      /** localized contents in its most recent state */
      localizedContent?: LocalizedContent;
  }
  interface RemoveContentFieldsByKeyRequest {
      /** Content key for removal */
      contentKey: LocalizedContentKey;
      /** Language ID (in IETF BCP 47 tag format) for fields removal, remove from all languages if empty */
      languageTagsMask?: string[];
      /** Field unique identifier to remove. */
      fieldsIdentifiers?: ContentFieldIdentifier[];
  }
  interface ListContentsRequest {
      /** Filter object */
      filter?: LocalizedContentFilter;
      /** Paging options. */
      paging?: Paging;
      /** Optional field to order results by. */
      order?: OrderByField;
  }
  interface LocalizedContentFilter {
      /** Optional list of content ids */
      contentIds?: string[];
      /** App def id */
      appId?: string | null;
      /** Type of the connected source entity to the localized content. Using this filter without specifying also app id filter might result in slow queries */
      entityType?: string | null;
      /** Id of the connected source entity to the localized content. Using this filter without specifying also entity type filter might result in slow queries */
      entityId?: string | null;
      /** IETF BCP 47 language tag filter. Show only contents having at least one field localized to this language. Using this filter without specifying also entity id filter might result in slow queries */
      languageTag?: string | null;
      /** Optional list of language tags. Will return partial contents containing only fields that are localized in languages from given list or empty contents if there are no such fields */
      languageMask?: string[];
      groupName?: string | null;
      /** Fetch only contents with given group name */
      groupNames?: string[];
      /** Optional filter to fetch only contents that are in a specific scope */
      scope?: FilterSchemaScope;
  }
  interface FilterSchemaScope {
      /** The scope type of the schema */
      scope?: SchemaScope;
  }
  enum OrderByField {
      UNSPECIFIED_FIELD = "UNSPECIFIED_FIELD",
      ENTITY_ID = "ENTITY_ID"
  }
  interface ListContentsResponse {
      /** Content that meets request conditions. */
      localizedContents?: LocalizedContent[];
  }
  interface RemoveSiteLanguagesRequest {
      /** Optional list of language tags. Will remove only the languages that are listed or empty to remove all languages */
      languagesToRemove?: string[];
  }
  interface RemoveSiteLanguagesResponse {
  }
  interface RemoveContentsByEntityTypeRequest {
      /** The app id of the entity you want to delete */
      appId: string;
      /** The entity type of the entity you want to delete */
      entityType: string;
      /** The secret of the entity you want to delete */
      secret: string;
  }
  interface RemoveContentsResponse {
  }
  interface RepublishSchemaContentRequest {
      /** Schema key of the content to republish. */
      schemaKey?: SchemaKey;
      /** Secret of the content to republish. */
      secret: string;
  }
  interface RepublishSchemaContentResponse {
  }
  interface GetContentHistoryRequest {
      /** Content ID. */
      contentId: string;
      /** Paging options. */
      paging?: Paging;
  }
  interface GetContentHistoryResponse {
      /** List of contents, representing all content's changes through its lifecycle */
      contentHistory?: RevisionLocalizedContent[];
  }
  interface RevisionLocalizedContent {
      /** Content data */
      content?: LocalizedContent;
      /** Revision data */
      revision?: Revision;
  }
  interface Revision {
      /** Identify the localized content point in history. the revision is created during call to Localization.UpdateSiteLocalizedContent */
      version?: number;
      /** Identify the localized content date in history. two revisions can have the same date. */
      date?: Date;
  }
  interface GetContentHistoryByKeyRequest {
      /** Content key. */
      contentKey: LocalizedContentKey;
      /** Paging options. */
      paging?: Paging;
  }
  interface RemoveContentsRequest {
      /** Content IDs to delete. */
      contentIds?: string[];
  }
  interface RemoveContentsByKeyRequest {
      /** Content keys to delete. */
      contentKeys: LocalizedContentKey[];
  }
  interface RemoveContentsByFilterRequest {
      /** Filter object */
      filter?: LocalizedContentFilter;
  }
  interface SetContentGroupsRequest {
      /** Selected content key identifiers for removal */
      contentGroup?: ContentGroupById[];
  }
  interface ContentGroupById {
      /** Content uuid identifier */
      contentId?: string;
      /** Optional field that will group in the UI contents with the same group name. If not set - will delete group name if exists. Case insensitive */
      group?: string | null;
  }
  interface SetContentGroupsResponse {
  }
  interface SetContentGroupsByKeyRequest {
      /** Selected content key identifiers for removal */
      contentGroup?: ContentGroupByKey[];
  }
  interface ContentGroupByKey {
      /** Content unique key identifier */
      contentKey?: LocalizedContentKey;
      /** Optional field that will group in the UI contents with the same group name. If not set - will delete group name if exists. Case insensitive */
      group?: string | null;
  }
  interface GetAppGroupNamesRequest {
      /** App def id of the app this schema belongs to */
      appId: string;
  }
  interface GetAppGroupNamesResponse {
      /** All distinct group names defined for this app's contents */
      groups?: string[];
  }
  interface MetaSiteSpecialEvent extends MetaSiteSpecialEventPayloadOneOf {
      /** Emitted on a meta site creation. */
      siteCreated?: SiteCreated;
      /** Emitted on a meta site transfer completion. */
      siteTransferred?: SiteTransferred;
      /** Emitted on a meta site deletion. */
      siteDeleted?: SiteDeleted;
      /** Emitted on a meta site restoration. */
      siteUndeleted?: SiteUndeleted;
      /** Emitted on the first* publish of the meta site (* switching from unpublished to published state). */
      sitePublished?: SitePublished;
      /** Emitted on a meta site unpublish. */
      siteUnpublished?: SiteUnpublished;
      /** Emitted when meta site is marked as template. */
      siteMarkedAsTemplate?: SiteMarkedAsTemplate;
      /** Emitted when meta site is marked as a WixSite. */
      siteMarkedAsWixSite?: SiteMarkedAsWixSite;
      /** Emitted when an application is provisioned (installed). */
      serviceProvisioned?: ServiceProvisioned;
      /** Emitted when an application is removed (uninstalled). */
      serviceRemoved?: ServiceRemoved;
      /** Emitted when meta site name (URL slug) is changed. */
      siteRenamedPayload?: SiteRenamed;
      /** Emitted when meta site was permanently deleted. */
      hardDeleted?: SiteHardDeleted;
      /** Emitted on a namespace change. */
      namespaceChanged?: NamespaceChanged;
      /** Emitted when Studio is attached. */
      studioAssigned?: StudioAssigned;
      /** Emitted when Studio is detached. */
      studioUnassigned?: StudioUnassigned;
      /** A meta site id. */
      metaSiteId?: string;
      /** A meta site version. Monotonically increasing. */
      version?: string;
      /** A timestamp of the event. */
      timestamp?: string;
      /** A list of "assets" (applications). The same as MetaSiteContext. */
      assets?: Asset[];
  }
  /** @oneof */
  interface MetaSiteSpecialEventPayloadOneOf {
      /** Emitted on a meta site creation. */
      siteCreated?: SiteCreated;
      /** Emitted on a meta site transfer completion. */
      siteTransferred?: SiteTransferred;
      /** Emitted on a meta site deletion. */
      siteDeleted?: SiteDeleted;
      /** Emitted on a meta site restoration. */
      siteUndeleted?: SiteUndeleted;
      /** Emitted on the first* publish of the meta site (* switching from unpublished to published state). */
      sitePublished?: SitePublished;
      /** Emitted on a meta site unpublish. */
      siteUnpublished?: SiteUnpublished;
      /** Emitted when meta site is marked as template. */
      siteMarkedAsTemplate?: SiteMarkedAsTemplate;
      /** Emitted when meta site is marked as a WixSite. */
      siteMarkedAsWixSite?: SiteMarkedAsWixSite;
      /** Emitted when an application is provisioned (installed). */
      serviceProvisioned?: ServiceProvisioned;
      /** Emitted when an application is removed (uninstalled). */
      serviceRemoved?: ServiceRemoved;
      /** Emitted when meta site name (URL slug) is changed. */
      siteRenamedPayload?: SiteRenamed;
      /** Emitted when meta site was permanently deleted. */
      hardDeleted?: SiteHardDeleted;
      /** Emitted on a namespace change. */
      namespaceChanged?: NamespaceChanged;
      /** Emitted when Studio is attached. */
      studioAssigned?: StudioAssigned;
      /** Emitted when Studio is detached. */
      studioUnassigned?: StudioUnassigned;
  }
  interface Asset {
      /** An application definition id (app_id in dev-center). For legacy reasons may be UUID or a string (from Java Enum). */
      appDefId?: string;
      /** An instance id. For legacy reasons may be UUID or a string. */
      instanceId?: string;
      /** An application state. */
      state?: State;
  }
  enum State {
      UNKNOWN = "UNKNOWN",
      ENABLED = "ENABLED",
      DISABLED = "DISABLED",
      PENDING = "PENDING",
      DEMO = "DEMO"
  }
  interface SiteCreated {
      /** A template identifier (empty if not created from a template). */
      originTemplateId?: string;
      /** An account id of the owner. */
      ownerId?: string;
      /** A context in which meta site was created. */
      context?: SiteCreatedContext;
      /**
       * A meta site id from which this site was created.
       *
       * In case of a creation from a template it's a template id.
       * In case of a site duplication ("Save As" in dashboard or duplicate in UM) it's an id of a source site.
       */
      originMetaSiteId?: string | null;
      /** A meta site name (URL slug). */
      siteName?: string;
      /** A namespace. */
      namespace?: Namespace;
  }
  enum SiteCreatedContext {
      /** A valid option, we don't expose all reasons why site might be created. */
      OTHER = "OTHER",
      /** A meta site was created from template. */
      FROM_TEMPLATE = "FROM_TEMPLATE",
      /** A meta site was created by copying of the transfferred meta site. */
      DUPLICATE_BY_SITE_TRANSFER = "DUPLICATE_BY_SITE_TRANSFER",
      /** A copy of existing meta site. */
      DUPLICATE = "DUPLICATE",
      /** A meta site was created as a transfferred site (copy of the original), old flow, should die soon. */
      OLD_SITE_TRANSFER = "OLD_SITE_TRANSFER",
      /** deprecated A meta site was created for Flash editor. */
      FLASH = "FLASH"
  }
  enum Namespace {
      UNKNOWN_NAMESPACE = "UNKNOWN_NAMESPACE",
      /** Default namespace for UGC sites. MetaSites with this namespace will be shown in a user's site list by default. */
      WIX = "WIX",
      /** ShoutOut stand alone product. These are siteless (no actual Wix site, no HtmlWeb). MetaSites with this namespace will *not* be shown in a user's site list by default. */
      SHOUT_OUT = "SHOUT_OUT",
      /** MetaSites created by the Albums product, they appear as part of the Albums app. MetaSites with this namespace will *not* be shown in a user's site list by default. */
      ALBUMS = "ALBUMS",
      /** Part of the WixStores migration flow, a user tries to migrate and gets this site to view and if the user likes it then stores removes this namespace and deletes the old site with the old stores. MetaSites with this namespace will *not* be shown in a user's site list by default. */
      WIX_STORES_TEST_DRIVE = "WIX_STORES_TEST_DRIVE",
      /** Hotels standalone (siteless). MetaSites with this namespace will *not* be shown in a user's site list by default. */
      HOTELS = "HOTELS",
      /** Clubs siteless MetaSites, a club without a wix website. MetaSites with this namespace will *not* be shown in a user's site list by default. */
      CLUBS = "CLUBS",
      /** A partially created ADI website. MetaSites with this namespace will *not* be shown in a user's site list by default. */
      ONBOARDING_DRAFT = "ONBOARDING_DRAFT",
      /** AppBuilder for AppStudio / shmite (c). MetaSites with this namespace will *not* be shown in a user's site list by default. */
      DEV_SITE = "DEV_SITE",
      /** LogoMaker websites offered to the user after logo purchase. MetaSites with this namespace will *not* be shown in a user's site list by default. */
      LOGOS = "LOGOS",
      /** VideoMaker websites offered to the user after video purchase. MetaSites with this namespace will *not* be shown in a user's site list by default. */
      VIDEO_MAKER = "VIDEO_MAKER",
      /** MetaSites with this namespace will *not* be shown in a user's site list by default. */
      PARTNER_DASHBOARD = "PARTNER_DASHBOARD",
      /** MetaSites with this namespace will *not* be shown in a user's site list by default. */
      DEV_CENTER_COMPANY = "DEV_CENTER_COMPANY",
      /**
       * A draft created by HTML editor on open. Upon "first save" it will be moved to be of WIX domain.
       *
       * Meta site with this namespace will *not* be shown in a user's site list by default.
       */
      HTML_DRAFT = "HTML_DRAFT",
      /**
       * the user-journey for Fitness users who want to start from managing their business instead of designing their website.
       * Will be accessible from Site List and will not have a website app.
       * Once the user attaches a site, the site will become a regular wixsite.
       */
      SITELESS_BUSINESS = "SITELESS_BUSINESS",
      /** Belongs to "strategic products" company. Supports new product in the creator's economy space. */
      CREATOR_ECONOMY = "CREATOR_ECONOMY",
      /** It is to be used in the Business First efforts. */
      DASHBOARD_FIRST = "DASHBOARD_FIRST",
      /** Bookings business flow with no site. */
      ANYWHERE = "ANYWHERE",
      /** Namespace for Headless Backoffice with no editor */
      HEADLESS = "HEADLESS",
      /**
       * Namespace for master site that will exist in parent account that will be referenced by subaccounts
       * The site will be used for account level CSM feature for enterprise
       */
      ACCOUNT_MASTER_CMS = "ACCOUNT_MASTER_CMS",
      /** Rise.ai Siteless account management for Gift Cards and Store Credit. */
      RISE = "RISE",
      /**
       * As part of the branded app new funnel, users now can create a meta site that will be branded app first.
       * There's a blank site behind the scene but it's blank).
       * The Mobile company will be the owner of this namespace.
       */
      BRANDED_FIRST = "BRANDED_FIRST"
  }
  /** Site transferred to another user. */
  interface SiteTransferred {
      /** A previous owner id (user that transfers meta site). */
      oldOwnerId?: string;
      /** A new owner id (user that accepts meta site). */
      newOwnerId?: string;
  }
  /** Soft deletion of the meta site. Could be restored. */
  interface SiteDeleted {
      /** A deletion context. */
      deleteContext?: DeleteContext;
  }
  interface DeleteContext {
      /** When the meta site was deleted. */
      dateDeleted?: Date;
      /** A status. */
      deleteStatus?: DeleteStatus;
      /** A reason (flow). */
      deleteOrigin?: string;
      /** A service that deleted it. */
      initiatorId?: string | null;
  }
  enum DeleteStatus {
      UNKNOWN = "UNKNOWN",
      TRASH = "TRASH",
      DELETED = "DELETED",
      PENDING_PURGE = "PENDING_PURGE"
  }
  /** Restoration of the meta site. */
  interface SiteUndeleted {
  }
  /** First publish of a meta site. Or subsequent publish after unpublish. */
  interface SitePublished {
  }
  interface SiteUnpublished {
      /** A list of URLs previously associated with the meta site. */
      urls?: string[];
  }
  interface SiteMarkedAsTemplate {
  }
  interface SiteMarkedAsWixSite {
  }
  interface ServiceProvisioned {
      /** Either UUID or EmbeddedServiceType. */
      appDefId?: string;
      /** Not only UUID. Something here could be something weird. */
      instanceId?: string;
      /** An instance id from which this instance is originated. */
      originInstanceId?: string;
      /** A version. */
      version?: string | null;
  }
  interface ServiceRemoved {
      /** Either UUID or EmbeddedServiceType. */
      appDefId?: string;
      /** Not only UUID. Something here could be something weird. */
      instanceId?: string;
      /** A version. */
      version?: string | null;
  }
  /** Rename of the site. Meaning, free public url has been changed as well. */
  interface SiteRenamed {
      /** A new meta site name (URL slug). */
      newSiteName?: string;
      /** A previous meta site name (URL slug). */
      oldSiteName?: string;
  }
  /**
   * Hard deletion of the meta site.
   *
   * Could not be restored. Therefore it's desirable to cleanup data.
   */
  interface SiteHardDeleted {
      /** A deletion context. */
      deleteContext?: DeleteContext;
  }
  interface NamespaceChanged {
      /** A previous namespace. */
      oldNamespace?: Namespace;
      /** A new namespace. */
      newNamespace?: Namespace;
  }
  /** Assigned Studio editor */
  interface StudioAssigned {
  }
  /** Unassigned Studio editor */
  interface StudioUnassigned {
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
  /** @internal
   * @documentationMaturity preview
   * @requiredField schemaKey
   * @adminMethod
   */
  function searchEntityContent(schemaKey: SchemaKey, options?: SearchEntityContentOptions): Promise<SearchEntityContentResponse>;
  interface SearchEntityContentOptions {
      primaryLanguage?: string;
      secondaryLanguage?: string;
      fieldSearch?: FieldSearch;
      translationStatus?: TranslationStatus;
      paging?: Paging;
  }
  /** @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function addPersonDetails(options?: AddPersonDetailsOptions): Promise<void>;
  interface AddPersonDetailsOptions {
      /** @internal */
      person?: Person;
  }
  /** @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @adminMethod
   */
  function updatePersonDetails(_id: string, options?: UpdatePersonDetailsOptions): Promise<void>;
  interface UpdatePersonDetailsOptions {
      person: {
          /**
           * @internal
           * @readonly
           */
          _id?: string;
          /** @internal */
          name?: string;
          /** @internal */
          description?: string;
          /** @internal */
          image?: Image;
          /** @internal */
          birthDate?: string;
          /** @internal */
          genericMessage?: GenericMessage;
          /** @internal */
          hobbies?: Hobby[];
          /** @internal */
          additionalDetails?: Record<string, DetailType>;
      };
  }
  /** @internal
   * @documentationMaturity preview
   * @requiredField personId
   * @adminMethod
   */
  function deletePersonDetails(personId: string): Promise<void>;
  /** @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function list(): Promise<void>;
  /**
   * Adds or updates a localized content key for a given language.
   * Localized content is identified by its schemaKey and entityId.
   * Partial updates are supported - uploaded fields will be merged with existing language fields.
   * Override is also supported - need to mark explicitly in the request
   * Language content will be merged with entity's list of languages.
   * @public
   * @documentationMaturity preview
   * @requiredField options.languageContents.contentKey
   * @requiredField options.languageContents.contentKey.schemaKey
   * @requiredField options.languageContents.languageFields
   * @adminMethod
   */
  function createOrUpdateContentsByKey(options?: CreateOrUpdateContentsByKeyOptions): Promise<CreateOrUpdateContentsResponse>;
  interface CreateOrUpdateContentsByKeyOptions {
      /** Language ID in IETF BCP 47 tag format. */
      languageTag?: string;
      /** List of content for creation/update. */
      languageContents?: LanguageContentByKey[];
      /** When true - uploaded language contents will replace existing language contents */
      overrideData?: boolean;
  }
  /**
   * Updates existing localized content for a given language by contentId.
   * Partial updates are supported - uploaded fields will be merged with existing language fields.
   * Override is also supported - need to mark explicitly in the request
   * Language content will be merged with entity's list of languages.
   * @internal
   * @documentationMaturity preview
   * @requiredField options.languageContents.languageFields
   * @adminMethod
   */
  function updateContents(options?: UpdateContentsOptions): Promise<CreateOrUpdateContentsResponse>;
  interface UpdateContentsOptions {
      /** Language ID in IETF BCP 47 tag format. */
      languageTag?: string;
      /** List of content in a given language for update. */
      languageContents?: LanguageContentById[];
      /** When true - uploaded language contents will replace existing language contents */
      overrideData?: boolean;
  }
  /**
   * Removes specified content fields from given languages by contentId and sequencePath.
   * If no language is specified, the fields will be removed from all existing languages.
   * No error will be thrown if some fields do not exist in all languages.
   * @param contentId - Content IDs for fields removal
   * @internal
   * @documentationMaturity preview
   * @requiredField contentId
   * @adminMethod
   */
  function removeContentFields(contentId: string, options?: RemoveContentFieldsOptions): Promise<RemoveContentFieldsResponse>;
  interface RemoveContentFieldsOptions {
      /** Language ID (in IETF BCP 47 tag format) for fields removal, remove from all languages if empty */
      languageTagsMask?: string[];
      /** Field unique identifier to remove */
      fieldsIdentifiers?: ContentFieldIdentifier[];
  }
  /**
   * Removes specified content fields from given languages by schemaKey and entityId.
   * If no language is specified the fields will be removed from all existing languages.
   * Field is identified by its id and sequence path
   * No error will be thrown if some fields do not exist in all languages.
   * @param contentKey - Content key for removal
   * @internal
   * @documentationMaturity preview
   * @requiredField contentKey
   * @adminMethod
   */
  function removeContentFieldsByKey(contentKey: LocalizedContentKey, options?: RemoveContentFieldsByKeyOptions): Promise<RemoveContentFieldsResponse>;
  interface RemoveContentFieldsByKeyOptions {
      /** Language ID (in IETF BCP 47 tag format) for fields removal, remove from all languages if empty */
      languageTagsMask?: string[];
      /** Field unique identifier to remove. */
      fieldsIdentifiers?: ContentFieldIdentifier[];
  }
  /**
   * Retrieves localized content, including published and unpublished values, given the provided filtering.
   * @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function listContents(options?: ListContentsOptions): Promise<ListContentsResponse>;
  interface ListContentsOptions {
      /** Filter object */
      filter?: LocalizedContentFilter;
      /** Paging options. */
      paging?: Paging;
      /** Optional field to order results by. */
      order?: OrderByField;
  }
  /**
   * Removes specified languages from given a given site.
   * If no languages specified all languages will be removed.
   * No error will be thrown if some languages do not exist in the site.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function removeSiteLanguages(options?: RemoveSiteLanguagesOptions): Promise<void>;
  interface RemoveSiteLanguagesOptions {
      /** Optional list of language tags. Will remove only the languages that are listed or empty to remove all languages */
      languagesToRemove?: string[];
  }
  /**
   * Removes all content in a given entity type
   * @param appId - The app id of the entity you want to delete
   * @internal
   * @documentationMaturity preview
   * @requiredField appId
   * @requiredField options
   * @requiredField options.entityType
   * @requiredField options.secret
   * @adminMethod
   */
  function removeContentsByEntityType(appId: string, options: RemoveContentsByEntityTypeOptions): Promise<void>;
  interface RemoveContentsByEntityTypeOptions {
      /** The entity type of the entity you want to delete */
      entityType: string;
      /** The secret of the entity you want to delete */
      secret: string;
  }
  /**
   * Start republish all content with a specific schema key
   * @internal
   * @documentationMaturity preview
   * @requiredField options.schemaKey.appId
   * @requiredField options.schemaKey.entityType
   * @requiredField options.secret
   * @adminMethod
   */
  function republishSchemaContent(options?: RepublishSchemaContentOptions): Promise<void>;
  interface RepublishSchemaContentOptions {
      /** Schema key of the content to republish. */
      schemaKey?: SchemaKey;
      /** Secret of the content to republish. */
      secret: string;
  }
  /**
   * Retrieves full content revision history by contentId.
   * Note: If the requested contentId doesn't exist, the API will ignore the request and return successfully - with no error message.
   * @param contentId - Content ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField contentId
   * @adminMethod
   */
  function getContentHistory(contentId: string, options?: GetContentHistoryOptions): Promise<GetContentHistoryResponse>;
  interface GetContentHistoryOptions {
      /** Paging options. */
      paging?: Paging;
  }
  /**
   * Retrieves content full revision history by schemaKey and entityId.
   * Note: If the requested content doesn't exist, the API will ignore the request and return successfully - with no error message.
   * @param contentKey - Content key.
   * @internal
   * @documentationMaturity preview
   * @requiredField contentKey
   * @requiredField contentKey.schemaKey
   * @adminMethod
   */
  function getContentHistoryByKey(contentKey: LocalizedContentKey, options?: GetContentHistoryByKeyOptions): Promise<GetContentHistoryResponse>;
  interface GetContentHistoryByKeyOptions {
      /** Paging options. */
      paging?: Paging;
  }
  /**
   * Removes existing localized content by contentId. Non-existent contentIds are ignored.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function removeContents(options?: RemoveContentsOptions): Promise<void>;
  interface RemoveContentsOptions {
      /** Content IDs to delete. */
      contentIds?: string[];
  }
  /**
   * Removes existing localized content by contentKey. Non-existent contentKeys are ignored.
   * @param contentKeys - Content keys to delete.
   * @public
   * @documentationMaturity preview
   * @requiredField contentKeys
   * @requiredField contentKeys.schemaKey
   * @adminMethod
   */
  function removeContentsByKey(contentKeys: LocalizedContentKey[]): Promise<void>;
  /**
   * Removes existing localized content by filter. Non-matching filters are ignored.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function removeContentsByFilter(options?: RemoveContentsByFilterOptions): Promise<void>;
  interface RemoveContentsByFilterOptions {
      /** Filter object */
      filter?: LocalizedContentFilter;
  }
  /**
   * Set for each content a name to be grouped by in ML TMS UI
   * Identify localized contents by their uuid
   * Ignores non existing ids
   * @internal
   * @documentationMaturity preview
   * @requiredField options.contentGroup.contentId
   * @adminMethod
   */
  function setContentGroups(options?: SetContentGroupsOptions): Promise<void>;
  interface SetContentGroupsOptions {
      /** Selected content key identifiers for removal */
      contentGroup?: ContentGroupById[];
  }
  /**
   * Set for each content a name to be grouped by in ML TMS UI
   * Identify localized contents by their schema and entity
   * Ignores non existing keys
   * @internal
   * @documentationMaturity preview
   * @requiredField options.contentGroup.contentKey
   * @requiredField options.contentGroup.contentKey.schemaKey
   * @adminMethod
   */
  function setContentGroupsByKey(options?: SetContentGroupsByKeyOptions): Promise<void>;
  interface SetContentGroupsByKeyOptions {
      /** Selected content key identifiers for removal */
      contentGroup?: ContentGroupByKey[];
  }
  /**
   * Get all app's group names in a given site
   * Will return empty sequence if no groups exist
   * Results are confined to the site found in the context
   * @param appId - App def id of the app this schema belongs to
   * @internal
   * @documentationMaturity preview
   * @requiredField appId
   * @adminMethod
   */
  function getAppGroupNames(appId: string): Promise<GetAppGroupNamesResponse>;
  
  type multilingualLocalizationV1LocalizedContent_universal_d_LocalizedContent = LocalizedContent;
  type multilingualLocalizationV1LocalizedContent_universal_d_LocalizedContentKey = LocalizedContentKey;
  type multilingualLocalizationV1LocalizedContent_universal_d_SchemaKey = SchemaKey;
  type multilingualLocalizationV1LocalizedContent_universal_d_SchemaScope = SchemaScope;
  const multilingualLocalizationV1LocalizedContent_universal_d_SchemaScope: typeof SchemaScope;
  type multilingualLocalizationV1LocalizedContent_universal_d_LanguageFields = LanguageFields;
  type multilingualLocalizationV1LocalizedContent_universal_d_LocalizedContentField = LocalizedContentField;
  type multilingualLocalizationV1LocalizedContent_universal_d_LocalizedContentFieldValueOneOf = LocalizedContentFieldValueOneOf;
  type multilingualLocalizationV1LocalizedContent_universal_d_MediaItem = MediaItem;
  type multilingualLocalizationV1LocalizedContent_universal_d_MediaItemMediaOneOf = MediaItemMediaOneOf;
  type multilingualLocalizationV1LocalizedContent_universal_d_VideoResolution = VideoResolution;
  type multilingualLocalizationV1LocalizedContent_universal_d_UpdaterIdentity = UpdaterIdentity;
  const multilingualLocalizationV1LocalizedContent_universal_d_UpdaterIdentity: typeof UpdaterIdentity;
  type multilingualLocalizationV1LocalizedContent_universal_d_FieldSequence = FieldSequence;
  type multilingualLocalizationV1LocalizedContent_universal_d_SearchEntityContentRequest = SearchEntityContentRequest;
  type multilingualLocalizationV1LocalizedContent_universal_d_FieldSearch = FieldSearch;
  type multilingualLocalizationV1LocalizedContent_universal_d_TranslationStatus = TranslationStatus;
  const multilingualLocalizationV1LocalizedContent_universal_d_TranslationStatus: typeof TranslationStatus;
  type multilingualLocalizationV1LocalizedContent_universal_d_Paging = Paging;
  type multilingualLocalizationV1LocalizedContent_universal_d_SearchEntityContentResponse = SearchEntityContentResponse;
  type multilingualLocalizationV1LocalizedContent_universal_d_Person = Person;
  type multilingualLocalizationV1LocalizedContent_universal_d_Image = Image;
  type multilingualLocalizationV1LocalizedContent_universal_d_GenericMessage = GenericMessage;
  type multilingualLocalizationV1LocalizedContent_universal_d_Hobby = Hobby;
  type multilingualLocalizationV1LocalizedContent_universal_d_DetailType = DetailType;
  type multilingualLocalizationV1LocalizedContent_universal_d_AddPersonRequest = AddPersonRequest;
  type multilingualLocalizationV1LocalizedContent_universal_d_AddPersonResponse = AddPersonResponse;
  type multilingualLocalizationV1LocalizedContent_universal_d_UpdatePersonRequest = UpdatePersonRequest;
  type multilingualLocalizationV1LocalizedContent_universal_d_UpdatePersonResponse = UpdatePersonResponse;
  type multilingualLocalizationV1LocalizedContent_universal_d_DeletePersonRequest = DeletePersonRequest;
  type multilingualLocalizationV1LocalizedContent_universal_d_DeletePersonResponse = DeletePersonResponse;
  type multilingualLocalizationV1LocalizedContent_universal_d_PersonsListRequest = PersonsListRequest;
  type multilingualLocalizationV1LocalizedContent_universal_d_PersonsListResponse = PersonsListResponse;
  type multilingualLocalizationV1LocalizedContent_universal_d_Empty = Empty;
  type multilingualLocalizationV1LocalizedContent_universal_d_LocalizedContentChanged = LocalizedContentChanged;
  type multilingualLocalizationV1LocalizedContent_universal_d_LocalizedLanguageContent = LocalizedLanguageContent;
  type multilingualLocalizationV1LocalizedContent_universal_d_LocalizedLanguageContentKey = LocalizedLanguageContentKey;
  type multilingualLocalizationV1LocalizedContent_universal_d_CreateOrUpdateAction = CreateOrUpdateAction;
  type multilingualLocalizationV1LocalizedContent_universal_d_DeleteAction = DeleteAction;
  type multilingualLocalizationV1LocalizedContent_universal_d_LocalizationContentChangedAction = LocalizationContentChangedAction;
  type multilingualLocalizationV1LocalizedContent_universal_d_LocalizationContentChangedActionActionOneOf = LocalizationContentChangedActionActionOneOf;
  type multilingualLocalizationV1LocalizedContent_universal_d_CreateOrUpdateContentsByKeyRequest = CreateOrUpdateContentsByKeyRequest;
  type multilingualLocalizationV1LocalizedContent_universal_d_LanguageContentByKey = LanguageContentByKey;
  type multilingualLocalizationV1LocalizedContent_universal_d_CreateOrUpdateContentsResponse = CreateOrUpdateContentsResponse;
  type multilingualLocalizationV1LocalizedContent_universal_d_UpdateContentsRequest = UpdateContentsRequest;
  type multilingualLocalizationV1LocalizedContent_universal_d_LanguageContentById = LanguageContentById;
  type multilingualLocalizationV1LocalizedContent_universal_d_RemoveContentFieldsRequest = RemoveContentFieldsRequest;
  type multilingualLocalizationV1LocalizedContent_universal_d_ContentFieldIdentifier = ContentFieldIdentifier;
  type multilingualLocalizationV1LocalizedContent_universal_d_RemoveContentFieldsResponse = RemoveContentFieldsResponse;
  type multilingualLocalizationV1LocalizedContent_universal_d_RemoveContentFieldsByKeyRequest = RemoveContentFieldsByKeyRequest;
  type multilingualLocalizationV1LocalizedContent_universal_d_ListContentsRequest = ListContentsRequest;
  type multilingualLocalizationV1LocalizedContent_universal_d_LocalizedContentFilter = LocalizedContentFilter;
  type multilingualLocalizationV1LocalizedContent_universal_d_FilterSchemaScope = FilterSchemaScope;
  type multilingualLocalizationV1LocalizedContent_universal_d_OrderByField = OrderByField;
  const multilingualLocalizationV1LocalizedContent_universal_d_OrderByField: typeof OrderByField;
  type multilingualLocalizationV1LocalizedContent_universal_d_ListContentsResponse = ListContentsResponse;
  type multilingualLocalizationV1LocalizedContent_universal_d_RemoveSiteLanguagesRequest = RemoveSiteLanguagesRequest;
  type multilingualLocalizationV1LocalizedContent_universal_d_RemoveSiteLanguagesResponse = RemoveSiteLanguagesResponse;
  type multilingualLocalizationV1LocalizedContent_universal_d_RemoveContentsByEntityTypeRequest = RemoveContentsByEntityTypeRequest;
  type multilingualLocalizationV1LocalizedContent_universal_d_RemoveContentsResponse = RemoveContentsResponse;
  type multilingualLocalizationV1LocalizedContent_universal_d_RepublishSchemaContentRequest = RepublishSchemaContentRequest;
  type multilingualLocalizationV1LocalizedContent_universal_d_RepublishSchemaContentResponse = RepublishSchemaContentResponse;
  type multilingualLocalizationV1LocalizedContent_universal_d_GetContentHistoryRequest = GetContentHistoryRequest;
  type multilingualLocalizationV1LocalizedContent_universal_d_GetContentHistoryResponse = GetContentHistoryResponse;
  type multilingualLocalizationV1LocalizedContent_universal_d_RevisionLocalizedContent = RevisionLocalizedContent;
  type multilingualLocalizationV1LocalizedContent_universal_d_Revision = Revision;
  type multilingualLocalizationV1LocalizedContent_universal_d_GetContentHistoryByKeyRequest = GetContentHistoryByKeyRequest;
  type multilingualLocalizationV1LocalizedContent_universal_d_RemoveContentsRequest = RemoveContentsRequest;
  type multilingualLocalizationV1LocalizedContent_universal_d_RemoveContentsByKeyRequest = RemoveContentsByKeyRequest;
  type multilingualLocalizationV1LocalizedContent_universal_d_RemoveContentsByFilterRequest = RemoveContentsByFilterRequest;
  type multilingualLocalizationV1LocalizedContent_universal_d_SetContentGroupsRequest = SetContentGroupsRequest;
  type multilingualLocalizationV1LocalizedContent_universal_d_ContentGroupById = ContentGroupById;
  type multilingualLocalizationV1LocalizedContent_universal_d_SetContentGroupsResponse = SetContentGroupsResponse;
  type multilingualLocalizationV1LocalizedContent_universal_d_SetContentGroupsByKeyRequest = SetContentGroupsByKeyRequest;
  type multilingualLocalizationV1LocalizedContent_universal_d_ContentGroupByKey = ContentGroupByKey;
  type multilingualLocalizationV1LocalizedContent_universal_d_GetAppGroupNamesRequest = GetAppGroupNamesRequest;
  type multilingualLocalizationV1LocalizedContent_universal_d_GetAppGroupNamesResponse = GetAppGroupNamesResponse;
  type multilingualLocalizationV1LocalizedContent_universal_d_MetaSiteSpecialEvent = MetaSiteSpecialEvent;
  type multilingualLocalizationV1LocalizedContent_universal_d_MetaSiteSpecialEventPayloadOneOf = MetaSiteSpecialEventPayloadOneOf;
  type multilingualLocalizationV1LocalizedContent_universal_d_Asset = Asset;
  type multilingualLocalizationV1LocalizedContent_universal_d_State = State;
  const multilingualLocalizationV1LocalizedContent_universal_d_State: typeof State;
  type multilingualLocalizationV1LocalizedContent_universal_d_SiteCreated = SiteCreated;
  type multilingualLocalizationV1LocalizedContent_universal_d_SiteCreatedContext = SiteCreatedContext;
  const multilingualLocalizationV1LocalizedContent_universal_d_SiteCreatedContext: typeof SiteCreatedContext;
  type multilingualLocalizationV1LocalizedContent_universal_d_Namespace = Namespace;
  const multilingualLocalizationV1LocalizedContent_universal_d_Namespace: typeof Namespace;
  type multilingualLocalizationV1LocalizedContent_universal_d_SiteTransferred = SiteTransferred;
  type multilingualLocalizationV1LocalizedContent_universal_d_SiteDeleted = SiteDeleted;
  type multilingualLocalizationV1LocalizedContent_universal_d_DeleteContext = DeleteContext;
  type multilingualLocalizationV1LocalizedContent_universal_d_DeleteStatus = DeleteStatus;
  const multilingualLocalizationV1LocalizedContent_universal_d_DeleteStatus: typeof DeleteStatus;
  type multilingualLocalizationV1LocalizedContent_universal_d_SiteUndeleted = SiteUndeleted;
  type multilingualLocalizationV1LocalizedContent_universal_d_SitePublished = SitePublished;
  type multilingualLocalizationV1LocalizedContent_universal_d_SiteUnpublished = SiteUnpublished;
  type multilingualLocalizationV1LocalizedContent_universal_d_SiteMarkedAsTemplate = SiteMarkedAsTemplate;
  type multilingualLocalizationV1LocalizedContent_universal_d_SiteMarkedAsWixSite = SiteMarkedAsWixSite;
  type multilingualLocalizationV1LocalizedContent_universal_d_ServiceProvisioned = ServiceProvisioned;
  type multilingualLocalizationV1LocalizedContent_universal_d_ServiceRemoved = ServiceRemoved;
  type multilingualLocalizationV1LocalizedContent_universal_d_SiteRenamed = SiteRenamed;
  type multilingualLocalizationV1LocalizedContent_universal_d_SiteHardDeleted = SiteHardDeleted;
  type multilingualLocalizationV1LocalizedContent_universal_d_NamespaceChanged = NamespaceChanged;
  type multilingualLocalizationV1LocalizedContent_universal_d_StudioAssigned = StudioAssigned;
  type multilingualLocalizationV1LocalizedContent_universal_d_StudioUnassigned = StudioUnassigned;
  type multilingualLocalizationV1LocalizedContent_universal_d_DomainEvent = DomainEvent;
  type multilingualLocalizationV1LocalizedContent_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type multilingualLocalizationV1LocalizedContent_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type multilingualLocalizationV1LocalizedContent_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type multilingualLocalizationV1LocalizedContent_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type multilingualLocalizationV1LocalizedContent_universal_d_ActionEvent = ActionEvent;
  type multilingualLocalizationV1LocalizedContent_universal_d_MessageEnvelope = MessageEnvelope;
  type multilingualLocalizationV1LocalizedContent_universal_d_IdentificationData = IdentificationData;
  type multilingualLocalizationV1LocalizedContent_universal_d_IdentificationDataIdOneOf = IdentificationDataIdOneOf;
  type multilingualLocalizationV1LocalizedContent_universal_d_WebhookIdentityType = WebhookIdentityType;
  const multilingualLocalizationV1LocalizedContent_universal_d_WebhookIdentityType: typeof WebhookIdentityType;
  const multilingualLocalizationV1LocalizedContent_universal_d_searchEntityContent: typeof searchEntityContent;
  type multilingualLocalizationV1LocalizedContent_universal_d_SearchEntityContentOptions = SearchEntityContentOptions;
  const multilingualLocalizationV1LocalizedContent_universal_d_addPersonDetails: typeof addPersonDetails;
  type multilingualLocalizationV1LocalizedContent_universal_d_AddPersonDetailsOptions = AddPersonDetailsOptions;
  const multilingualLocalizationV1LocalizedContent_universal_d_updatePersonDetails: typeof updatePersonDetails;
  type multilingualLocalizationV1LocalizedContent_universal_d_UpdatePersonDetailsOptions = UpdatePersonDetailsOptions;
  const multilingualLocalizationV1LocalizedContent_universal_d_deletePersonDetails: typeof deletePersonDetails;
  const multilingualLocalizationV1LocalizedContent_universal_d_list: typeof list;
  const multilingualLocalizationV1LocalizedContent_universal_d_createOrUpdateContentsByKey: typeof createOrUpdateContentsByKey;
  type multilingualLocalizationV1LocalizedContent_universal_d_CreateOrUpdateContentsByKeyOptions = CreateOrUpdateContentsByKeyOptions;
  const multilingualLocalizationV1LocalizedContent_universal_d_updateContents: typeof updateContents;
  type multilingualLocalizationV1LocalizedContent_universal_d_UpdateContentsOptions = UpdateContentsOptions;
  const multilingualLocalizationV1LocalizedContent_universal_d_removeContentFields: typeof removeContentFields;
  type multilingualLocalizationV1LocalizedContent_universal_d_RemoveContentFieldsOptions = RemoveContentFieldsOptions;
  const multilingualLocalizationV1LocalizedContent_universal_d_removeContentFieldsByKey: typeof removeContentFieldsByKey;
  type multilingualLocalizationV1LocalizedContent_universal_d_RemoveContentFieldsByKeyOptions = RemoveContentFieldsByKeyOptions;
  const multilingualLocalizationV1LocalizedContent_universal_d_listContents: typeof listContents;
  type multilingualLocalizationV1LocalizedContent_universal_d_ListContentsOptions = ListContentsOptions;
  const multilingualLocalizationV1LocalizedContent_universal_d_removeSiteLanguages: typeof removeSiteLanguages;
  type multilingualLocalizationV1LocalizedContent_universal_d_RemoveSiteLanguagesOptions = RemoveSiteLanguagesOptions;
  const multilingualLocalizationV1LocalizedContent_universal_d_removeContentsByEntityType: typeof removeContentsByEntityType;
  type multilingualLocalizationV1LocalizedContent_universal_d_RemoveContentsByEntityTypeOptions = RemoveContentsByEntityTypeOptions;
  const multilingualLocalizationV1LocalizedContent_universal_d_republishSchemaContent: typeof republishSchemaContent;
  type multilingualLocalizationV1LocalizedContent_universal_d_RepublishSchemaContentOptions = RepublishSchemaContentOptions;
  const multilingualLocalizationV1LocalizedContent_universal_d_getContentHistory: typeof getContentHistory;
  type multilingualLocalizationV1LocalizedContent_universal_d_GetContentHistoryOptions = GetContentHistoryOptions;
  const multilingualLocalizationV1LocalizedContent_universal_d_getContentHistoryByKey: typeof getContentHistoryByKey;
  type multilingualLocalizationV1LocalizedContent_universal_d_GetContentHistoryByKeyOptions = GetContentHistoryByKeyOptions;
  const multilingualLocalizationV1LocalizedContent_universal_d_removeContents: typeof removeContents;
  type multilingualLocalizationV1LocalizedContent_universal_d_RemoveContentsOptions = RemoveContentsOptions;
  const multilingualLocalizationV1LocalizedContent_universal_d_removeContentsByKey: typeof removeContentsByKey;
  const multilingualLocalizationV1LocalizedContent_universal_d_removeContentsByFilter: typeof removeContentsByFilter;
  type multilingualLocalizationV1LocalizedContent_universal_d_RemoveContentsByFilterOptions = RemoveContentsByFilterOptions;
  const multilingualLocalizationV1LocalizedContent_universal_d_setContentGroups: typeof setContentGroups;
  type multilingualLocalizationV1LocalizedContent_universal_d_SetContentGroupsOptions = SetContentGroupsOptions;
  const multilingualLocalizationV1LocalizedContent_universal_d_setContentGroupsByKey: typeof setContentGroupsByKey;
  type multilingualLocalizationV1LocalizedContent_universal_d_SetContentGroupsByKeyOptions = SetContentGroupsByKeyOptions;
  const multilingualLocalizationV1LocalizedContent_universal_d_getAppGroupNames: typeof getAppGroupNames;
  namespace multilingualLocalizationV1LocalizedContent_universal_d {
    export {
      multilingualLocalizationV1LocalizedContent_universal_d_LocalizedContent as LocalizedContent,
      multilingualLocalizationV1LocalizedContent_universal_d_LocalizedContentKey as LocalizedContentKey,
      multilingualLocalizationV1LocalizedContent_universal_d_SchemaKey as SchemaKey,
      multilingualLocalizationV1LocalizedContent_universal_d_SchemaScope as SchemaScope,
      multilingualLocalizationV1LocalizedContent_universal_d_LanguageFields as LanguageFields,
      multilingualLocalizationV1LocalizedContent_universal_d_LocalizedContentField as LocalizedContentField,
      multilingualLocalizationV1LocalizedContent_universal_d_LocalizedContentFieldValueOneOf as LocalizedContentFieldValueOneOf,
      multilingualLocalizationV1LocalizedContent_universal_d_MediaItem as MediaItem,
      multilingualLocalizationV1LocalizedContent_universal_d_MediaItemMediaOneOf as MediaItemMediaOneOf,
      multilingualLocalizationV1LocalizedContent_universal_d_VideoResolution as VideoResolution,
      multilingualLocalizationV1LocalizedContent_universal_d_UpdaterIdentity as UpdaterIdentity,
      multilingualLocalizationV1LocalizedContent_universal_d_FieldSequence as FieldSequence,
      multilingualLocalizationV1LocalizedContent_universal_d_SearchEntityContentRequest as SearchEntityContentRequest,
      multilingualLocalizationV1LocalizedContent_universal_d_FieldSearch as FieldSearch,
      multilingualLocalizationV1LocalizedContent_universal_d_TranslationStatus as TranslationStatus,
      multilingualLocalizationV1LocalizedContent_universal_d_Paging as Paging,
      multilingualLocalizationV1LocalizedContent_universal_d_SearchEntityContentResponse as SearchEntityContentResponse,
      multilingualLocalizationV1LocalizedContent_universal_d_Person as Person,
      multilingualLocalizationV1LocalizedContent_universal_d_Image as Image,
      multilingualLocalizationV1LocalizedContent_universal_d_GenericMessage as GenericMessage,
      multilingualLocalizationV1LocalizedContent_universal_d_Hobby as Hobby,
      multilingualLocalizationV1LocalizedContent_universal_d_DetailType as DetailType,
      multilingualLocalizationV1LocalizedContent_universal_d_AddPersonRequest as AddPersonRequest,
      multilingualLocalizationV1LocalizedContent_universal_d_AddPersonResponse as AddPersonResponse,
      multilingualLocalizationV1LocalizedContent_universal_d_UpdatePersonRequest as UpdatePersonRequest,
      multilingualLocalizationV1LocalizedContent_universal_d_UpdatePersonResponse as UpdatePersonResponse,
      multilingualLocalizationV1LocalizedContent_universal_d_DeletePersonRequest as DeletePersonRequest,
      multilingualLocalizationV1LocalizedContent_universal_d_DeletePersonResponse as DeletePersonResponse,
      multilingualLocalizationV1LocalizedContent_universal_d_PersonsListRequest as PersonsListRequest,
      multilingualLocalizationV1LocalizedContent_universal_d_PersonsListResponse as PersonsListResponse,
      multilingualLocalizationV1LocalizedContent_universal_d_Empty as Empty,
      multilingualLocalizationV1LocalizedContent_universal_d_LocalizedContentChanged as LocalizedContentChanged,
      multilingualLocalizationV1LocalizedContent_universal_d_LocalizedLanguageContent as LocalizedLanguageContent,
      multilingualLocalizationV1LocalizedContent_universal_d_LocalizedLanguageContentKey as LocalizedLanguageContentKey,
      multilingualLocalizationV1LocalizedContent_universal_d_CreateOrUpdateAction as CreateOrUpdateAction,
      multilingualLocalizationV1LocalizedContent_universal_d_DeleteAction as DeleteAction,
      multilingualLocalizationV1LocalizedContent_universal_d_LocalizationContentChangedAction as LocalizationContentChangedAction,
      multilingualLocalizationV1LocalizedContent_universal_d_LocalizationContentChangedActionActionOneOf as LocalizationContentChangedActionActionOneOf,
      multilingualLocalizationV1LocalizedContent_universal_d_CreateOrUpdateContentsByKeyRequest as CreateOrUpdateContentsByKeyRequest,
      multilingualLocalizationV1LocalizedContent_universal_d_LanguageContentByKey as LanguageContentByKey,
      multilingualLocalizationV1LocalizedContent_universal_d_CreateOrUpdateContentsResponse as CreateOrUpdateContentsResponse,
      multilingualLocalizationV1LocalizedContent_universal_d_UpdateContentsRequest as UpdateContentsRequest,
      multilingualLocalizationV1LocalizedContent_universal_d_LanguageContentById as LanguageContentById,
      multilingualLocalizationV1LocalizedContent_universal_d_RemoveContentFieldsRequest as RemoveContentFieldsRequest,
      multilingualLocalizationV1LocalizedContent_universal_d_ContentFieldIdentifier as ContentFieldIdentifier,
      multilingualLocalizationV1LocalizedContent_universal_d_RemoveContentFieldsResponse as RemoveContentFieldsResponse,
      multilingualLocalizationV1LocalizedContent_universal_d_RemoveContentFieldsByKeyRequest as RemoveContentFieldsByKeyRequest,
      multilingualLocalizationV1LocalizedContent_universal_d_ListContentsRequest as ListContentsRequest,
      multilingualLocalizationV1LocalizedContent_universal_d_LocalizedContentFilter as LocalizedContentFilter,
      multilingualLocalizationV1LocalizedContent_universal_d_FilterSchemaScope as FilterSchemaScope,
      multilingualLocalizationV1LocalizedContent_universal_d_OrderByField as OrderByField,
      multilingualLocalizationV1LocalizedContent_universal_d_ListContentsResponse as ListContentsResponse,
      multilingualLocalizationV1LocalizedContent_universal_d_RemoveSiteLanguagesRequest as RemoveSiteLanguagesRequest,
      multilingualLocalizationV1LocalizedContent_universal_d_RemoveSiteLanguagesResponse as RemoveSiteLanguagesResponse,
      multilingualLocalizationV1LocalizedContent_universal_d_RemoveContentsByEntityTypeRequest as RemoveContentsByEntityTypeRequest,
      multilingualLocalizationV1LocalizedContent_universal_d_RemoveContentsResponse as RemoveContentsResponse,
      multilingualLocalizationV1LocalizedContent_universal_d_RepublishSchemaContentRequest as RepublishSchemaContentRequest,
      multilingualLocalizationV1LocalizedContent_universal_d_RepublishSchemaContentResponse as RepublishSchemaContentResponse,
      multilingualLocalizationV1LocalizedContent_universal_d_GetContentHistoryRequest as GetContentHistoryRequest,
      multilingualLocalizationV1LocalizedContent_universal_d_GetContentHistoryResponse as GetContentHistoryResponse,
      multilingualLocalizationV1LocalizedContent_universal_d_RevisionLocalizedContent as RevisionLocalizedContent,
      multilingualLocalizationV1LocalizedContent_universal_d_Revision as Revision,
      multilingualLocalizationV1LocalizedContent_universal_d_GetContentHistoryByKeyRequest as GetContentHistoryByKeyRequest,
      multilingualLocalizationV1LocalizedContent_universal_d_RemoveContentsRequest as RemoveContentsRequest,
      multilingualLocalizationV1LocalizedContent_universal_d_RemoveContentsByKeyRequest as RemoveContentsByKeyRequest,
      multilingualLocalizationV1LocalizedContent_universal_d_RemoveContentsByFilterRequest as RemoveContentsByFilterRequest,
      multilingualLocalizationV1LocalizedContent_universal_d_SetContentGroupsRequest as SetContentGroupsRequest,
      multilingualLocalizationV1LocalizedContent_universal_d_ContentGroupById as ContentGroupById,
      multilingualLocalizationV1LocalizedContent_universal_d_SetContentGroupsResponse as SetContentGroupsResponse,
      multilingualLocalizationV1LocalizedContent_universal_d_SetContentGroupsByKeyRequest as SetContentGroupsByKeyRequest,
      multilingualLocalizationV1LocalizedContent_universal_d_ContentGroupByKey as ContentGroupByKey,
      multilingualLocalizationV1LocalizedContent_universal_d_GetAppGroupNamesRequest as GetAppGroupNamesRequest,
      multilingualLocalizationV1LocalizedContent_universal_d_GetAppGroupNamesResponse as GetAppGroupNamesResponse,
      multilingualLocalizationV1LocalizedContent_universal_d_MetaSiteSpecialEvent as MetaSiteSpecialEvent,
      multilingualLocalizationV1LocalizedContent_universal_d_MetaSiteSpecialEventPayloadOneOf as MetaSiteSpecialEventPayloadOneOf,
      multilingualLocalizationV1LocalizedContent_universal_d_Asset as Asset,
      multilingualLocalizationV1LocalizedContent_universal_d_State as State,
      multilingualLocalizationV1LocalizedContent_universal_d_SiteCreated as SiteCreated,
      multilingualLocalizationV1LocalizedContent_universal_d_SiteCreatedContext as SiteCreatedContext,
      multilingualLocalizationV1LocalizedContent_universal_d_Namespace as Namespace,
      multilingualLocalizationV1LocalizedContent_universal_d_SiteTransferred as SiteTransferred,
      multilingualLocalizationV1LocalizedContent_universal_d_SiteDeleted as SiteDeleted,
      multilingualLocalizationV1LocalizedContent_universal_d_DeleteContext as DeleteContext,
      multilingualLocalizationV1LocalizedContent_universal_d_DeleteStatus as DeleteStatus,
      multilingualLocalizationV1LocalizedContent_universal_d_SiteUndeleted as SiteUndeleted,
      multilingualLocalizationV1LocalizedContent_universal_d_SitePublished as SitePublished,
      multilingualLocalizationV1LocalizedContent_universal_d_SiteUnpublished as SiteUnpublished,
      multilingualLocalizationV1LocalizedContent_universal_d_SiteMarkedAsTemplate as SiteMarkedAsTemplate,
      multilingualLocalizationV1LocalizedContent_universal_d_SiteMarkedAsWixSite as SiteMarkedAsWixSite,
      multilingualLocalizationV1LocalizedContent_universal_d_ServiceProvisioned as ServiceProvisioned,
      multilingualLocalizationV1LocalizedContent_universal_d_ServiceRemoved as ServiceRemoved,
      multilingualLocalizationV1LocalizedContent_universal_d_SiteRenamed as SiteRenamed,
      multilingualLocalizationV1LocalizedContent_universal_d_SiteHardDeleted as SiteHardDeleted,
      multilingualLocalizationV1LocalizedContent_universal_d_NamespaceChanged as NamespaceChanged,
      multilingualLocalizationV1LocalizedContent_universal_d_StudioAssigned as StudioAssigned,
      multilingualLocalizationV1LocalizedContent_universal_d_StudioUnassigned as StudioUnassigned,
      multilingualLocalizationV1LocalizedContent_universal_d_DomainEvent as DomainEvent,
      multilingualLocalizationV1LocalizedContent_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      multilingualLocalizationV1LocalizedContent_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      multilingualLocalizationV1LocalizedContent_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      multilingualLocalizationV1LocalizedContent_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      multilingualLocalizationV1LocalizedContent_universal_d_ActionEvent as ActionEvent,
      multilingualLocalizationV1LocalizedContent_universal_d_MessageEnvelope as MessageEnvelope,
      multilingualLocalizationV1LocalizedContent_universal_d_IdentificationData as IdentificationData,
      multilingualLocalizationV1LocalizedContent_universal_d_IdentificationDataIdOneOf as IdentificationDataIdOneOf,
      multilingualLocalizationV1LocalizedContent_universal_d_WebhookIdentityType as WebhookIdentityType,
      multilingualLocalizationV1LocalizedContent_universal_d_searchEntityContent as searchEntityContent,
      multilingualLocalizationV1LocalizedContent_universal_d_SearchEntityContentOptions as SearchEntityContentOptions,
      multilingualLocalizationV1LocalizedContent_universal_d_addPersonDetails as addPersonDetails,
      multilingualLocalizationV1LocalizedContent_universal_d_AddPersonDetailsOptions as AddPersonDetailsOptions,
      multilingualLocalizationV1LocalizedContent_universal_d_updatePersonDetails as updatePersonDetails,
      multilingualLocalizationV1LocalizedContent_universal_d_UpdatePersonDetailsOptions as UpdatePersonDetailsOptions,
      multilingualLocalizationV1LocalizedContent_universal_d_deletePersonDetails as deletePersonDetails,
      multilingualLocalizationV1LocalizedContent_universal_d_list as list,
      multilingualLocalizationV1LocalizedContent_universal_d_createOrUpdateContentsByKey as createOrUpdateContentsByKey,
      multilingualLocalizationV1LocalizedContent_universal_d_CreateOrUpdateContentsByKeyOptions as CreateOrUpdateContentsByKeyOptions,
      multilingualLocalizationV1LocalizedContent_universal_d_updateContents as updateContents,
      multilingualLocalizationV1LocalizedContent_universal_d_UpdateContentsOptions as UpdateContentsOptions,
      multilingualLocalizationV1LocalizedContent_universal_d_removeContentFields as removeContentFields,
      multilingualLocalizationV1LocalizedContent_universal_d_RemoveContentFieldsOptions as RemoveContentFieldsOptions,
      multilingualLocalizationV1LocalizedContent_universal_d_removeContentFieldsByKey as removeContentFieldsByKey,
      multilingualLocalizationV1LocalizedContent_universal_d_RemoveContentFieldsByKeyOptions as RemoveContentFieldsByKeyOptions,
      multilingualLocalizationV1LocalizedContent_universal_d_listContents as listContents,
      multilingualLocalizationV1LocalizedContent_universal_d_ListContentsOptions as ListContentsOptions,
      multilingualLocalizationV1LocalizedContent_universal_d_removeSiteLanguages as removeSiteLanguages,
      multilingualLocalizationV1LocalizedContent_universal_d_RemoveSiteLanguagesOptions as RemoveSiteLanguagesOptions,
      multilingualLocalizationV1LocalizedContent_universal_d_removeContentsByEntityType as removeContentsByEntityType,
      multilingualLocalizationV1LocalizedContent_universal_d_RemoveContentsByEntityTypeOptions as RemoveContentsByEntityTypeOptions,
      multilingualLocalizationV1LocalizedContent_universal_d_republishSchemaContent as republishSchemaContent,
      multilingualLocalizationV1LocalizedContent_universal_d_RepublishSchemaContentOptions as RepublishSchemaContentOptions,
      multilingualLocalizationV1LocalizedContent_universal_d_getContentHistory as getContentHistory,
      multilingualLocalizationV1LocalizedContent_universal_d_GetContentHistoryOptions as GetContentHistoryOptions,
      multilingualLocalizationV1LocalizedContent_universal_d_getContentHistoryByKey as getContentHistoryByKey,
      multilingualLocalizationV1LocalizedContent_universal_d_GetContentHistoryByKeyOptions as GetContentHistoryByKeyOptions,
      multilingualLocalizationV1LocalizedContent_universal_d_removeContents as removeContents,
      multilingualLocalizationV1LocalizedContent_universal_d_RemoveContentsOptions as RemoveContentsOptions,
      multilingualLocalizationV1LocalizedContent_universal_d_removeContentsByKey as removeContentsByKey,
      multilingualLocalizationV1LocalizedContent_universal_d_removeContentsByFilter as removeContentsByFilter,
      multilingualLocalizationV1LocalizedContent_universal_d_RemoveContentsByFilterOptions as RemoveContentsByFilterOptions,
      multilingualLocalizationV1LocalizedContent_universal_d_setContentGroups as setContentGroups,
      multilingualLocalizationV1LocalizedContent_universal_d_SetContentGroupsOptions as SetContentGroupsOptions,
      multilingualLocalizationV1LocalizedContent_universal_d_setContentGroupsByKey as setContentGroupsByKey,
      multilingualLocalizationV1LocalizedContent_universal_d_SetContentGroupsByKeyOptions as SetContentGroupsByKeyOptions,
      multilingualLocalizationV1LocalizedContent_universal_d_getAppGroupNames as getAppGroupNames,
    };
  }
  
  export { multilingualLocalizationV1LocalizedContent_universal_d as localization };
}
