declare module "wix-autocms-folders-service-v1" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /**
   * Folder is a container for other folders and collection references
   * There's always 1 root folder with empty ID
   */
  interface Folder {
      /**
       * unique ID, not present for root folder, mandatory for nested folders
       * @readonly
       */
      _id?: string | null;
      /** display name */
      displayName?: string;
      /** folder description if any */
      description?: string | null;
      /** additional information */
      info?: Record<string, any> | null;
      /** collections in current folder */
      collections?: CollectionReference[];
      /** nested folders */
      folders?: Folder[];
  }
  /**
   * Reference to a collection, contained in a folder
   * Collection may have up to 1 reference per folder
   * and exactly 1 non-shortcut reference overall
   */
  interface CollectionReference {
      /** collection unique name (ID) */
      collectionName?: string;
      /**
       * same collection may have many shortcut references across folders
       * but only one non-shortcut reference
       * by default any collection will have reference at root folder
       */
      shortcut?: boolean;
      /** additional information */
      info?: Record<string, any> | null;
  }
  interface GetFolderRequest {
      /** missing means root */
      folderId?: string | null;
      /**
       * nesting depth to return
       * - 0 means no nested elements, only folder details
       * - none means full folder tree
       */
      depth?: number | null;
      /**
       * if true CollectionReference.schema are not returned,
       * but call is much faster.
       * ignored for root folder request
       */
      skipSchemas?: boolean;
      /** AppID in case of dev env request */
      appId?: string | null;
  }
  interface GetFolderResponse {
      /** requested folder details */
      folder?: Folder;
      /** depth value requested */
      depth?: number | null;
      /** loaded schemas if not skipped, may return more schemas than folder contain */
      schemas?: Schemas;
  }
  interface Schemas {
      schemas?: Record<string, any>[] | null;
      /**
       * contains names of sources that fail to load in case of loading all available schemas
       * if specific schema IDs are specified then request will fail totally
       */
      failedSources?: Source[];
  }
  enum Source {
      OTHER = "OTHER",
      DYNAMIC_APP = "DYNAMIC_APP",
      CONNECTOR = "CONNECTOR",
      DB_DRIVER = "DB_DRIVER",
      STATIC_APP = "STATIC_APP",
      DOCSTORE = "DOCSTORE"
  }
  interface CreateFolderRequest {
      /** parent folder ID or none if root */
      parentFolderId?: string | null;
      /** folder info to create */
      folderInfo?: FolderInfo;
  }
  interface FolderInfo {
      /** display name */
      displayName?: string | null;
      /** description */
      description?: string | null;
      /** additional info */
      info?: Record<string, any> | null;
  }
  interface CreateFolderResponse {
      /** parent of created folder or none for root */
      parentFolderId?: string | null;
      /** created folder */
      folder?: Folder;
  }
  interface UpdateFolderRequest {
      /** Folder ID */
      folderId: string;
      /** Fields to update, partial */
      folderInfo?: FolderInfo;
      /**
       * patch mask, not exposed to JSON
       * @internal
       */
      mask?: string[];
  }
  interface UpdateFolderResponse {
      /**
       * updated folder
       * folder contents (folders and collections) would not be returned
       */
      folder?: Folder;
  }
  interface DeleteFolderRequest {
      /** folder ID to delete */
      folderId: string;
  }
  interface DeleteFolderResponse {
  }
  interface MoveFolderRequest {
      /** folder ID to move */
      folderId: string;
      /** destination folder ID (new parent), none if root */
      parentFolderId?: string | null;
  }
  interface MoveFolderResponse {
  }
  interface ReferenceCollectionRequest {
      /** collection name to reference (ID) */
      collectionName: string;
      /** target folder ID or none if root */
      folderId?: string | null;
      /**
       * if false then single non-shortcut reference to this
       * collection is moved to target folder
       * otherwise new shortcut reference is created
       */
      shortcut?: boolean;
      /**
       * additional information for shortcut reference
       * ignored for non-shortcut reference
       */
      info?: Record<string, any> | null;
  }
  interface ReferenceCollectionResponse {
      /** Folder ID that contains reference or none if root */
      folderId?: string | null;
      /** reference details */
      collectionReference?: CollectionReference;
  }
  interface GetReferencesRequest {
      /** collection name (ID) to get */
      collectionName: string;
      /**
       * if true schema would not be loaded and reference may not be found if collection is in root folder
       * loading schema has performance impact
       */
      skipSchemas?: boolean;
      /** AppID in case of dev env request */
      appId?: string | null;
  }
  interface GetReferencesResponse {
      /** list of references */
      references?: ReferenceLocation[];
      /** loaded schemas if not skipped */
      schemas?: Schemas;
  }
  interface ReferenceLocation {
      /** folder where reference is located */
      folderId?: string | null;
      /** reference details */
      reference?: CollectionReference;
  }
  interface UpdateReferenceInfoRequest {
      /** folder where reference is located, none for root */
      folderId?: string | null;
      /** referenced collection name (ID) */
      collectionName: string;
      /** additional information to set */
      info?: Record<string, any> | null;
  }
  interface UpdateReferenceInfoResponse {
      /** Folder ID that contains reference or none if root */
      folderId?: string | null;
      /** reference details */
      collectionReference?: CollectionReference;
  }
  interface DeleteReferenceRequest {
      /** collection name (ID) to delete */
      collectionName: string;
      /** folder ID where to delete reference or none if root */
      folderId?: string | null;
  }
  interface DeleteReferenceResponse {
  }
  interface SearchRequest {
      /** Search string, matched ignoring case */
      searchTerm?: string;
      /** AppID in case of dev env request */
      appId?: string | null;
  }
  interface SearchResponse {
      /** folders found, no contents are returned */
      folders?: Folder[];
      /** collections found */
      collections?: CollectionReference[];
      /** loaded schemas */
      schemas?: Schemas;
  }
  interface DomainEvent extends DomainEventBodyOneOf {
      createdEvent?: EntityCreatedEvent;
      updatedEvent?: EntityUpdatedEvent;
      deletedEvent?: EntityDeletedEvent;
      actionEvent?: ActionEvent;
      /** random GUID so clients can tell if event was already handled */
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
      /**
       * Assuming that all messages including Actions have id
       * Example: The id of the specific order, the id of a specific campaign
       */
      entityId?: string;
      /** The time of the event. Useful if there was a delay in dispatching */
      eventTime?: Date;
      /**
       * A field that should be set if this event was triggered by an anonymize request.
       * For example you must set it to true when sending an event as a result of a GDPR right to be forgotten request.
       * NOTE: This field is not relevant for `EntityCreatedEvent` but is located here for better ergonomics of consumers.
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
      entityUpdates?: Record<string, any>;
  }
  interface EntityDeletedEvent {
      /**
       * Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled
       * @internal
       */
      movedToTrash?: boolean | null;
  }
  interface ActionEvent {
      bodyAsJson?: string;
  }
  interface Empty {
  }
  interface MetaSiteSpecialEvent extends MetaSiteSpecialEventPayloadOneOf {
      siteCreated?: SiteCreated;
      siteTransferred?: SiteTransferred;
      siteDeleted?: SiteDeleted;
      siteUndeleted?: SiteUndeleted;
      sitePublished?: SitePublished;
      siteUnpublished?: SiteUnpublished;
      siteMarkedAsTemplate?: SiteMarkedAsTemplate;
      siteMarkedAsWixSite?: SiteMarkedAsWixSite;
      serviceProvisioned?: ServiceProvisioned;
      serviceRemoved?: ServiceRemoved;
      siteRenamedPayload?: SiteRenamed;
      hardDeleted?: SiteHardDeleted;
      namespaceChanged?: NamespaceChanged;
      studioAssigned?: StudioAssigned;
      studioUnassigned?: StudioUnassigned;
      metaSiteId?: string;
      version?: string;
      timestamp?: string;
      assets?: Asset[];
  }
  /** @oneof */
  interface MetaSiteSpecialEventPayloadOneOf {
      siteCreated?: SiteCreated;
      siteTransferred?: SiteTransferred;
      siteDeleted?: SiteDeleted;
      siteUndeleted?: SiteUndeleted;
      sitePublished?: SitePublished;
      siteUnpublished?: SiteUnpublished;
      siteMarkedAsTemplate?: SiteMarkedAsTemplate;
      siteMarkedAsWixSite?: SiteMarkedAsWixSite;
      serviceProvisioned?: ServiceProvisioned;
      serviceRemoved?: ServiceRemoved;
      siteRenamedPayload?: SiteRenamed;
      hardDeleted?: SiteHardDeleted;
      namespaceChanged?: NamespaceChanged;
      studioAssigned?: StudioAssigned;
      studioUnassigned?: StudioUnassigned;
  }
  interface Asset {
      appDefId?: string;
      instanceId?: string;
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
      originTemplateId?: string;
      ownerId?: string;
      context?: SiteCreatedContext;
      /**
       * A meta site id from which this site was created.
       *
       * In case of a creation from a template it's a template id.
       * In case of a site duplication ("Save As" in dashboard or duplicate in UM) it's an id of a source site.
       */
      originMetaSiteId?: string | null;
      siteName?: string;
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
      ACCOUNT_MASTER_CMS = "ACCOUNT_MASTER_CMS"
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
      deleteContext?: DeleteContext;
  }
  interface DeleteContext {
      dateDeleted?: Date;
      deleteStatus?: DeleteStatus;
      deleteOrigin?: string;
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
      originInstanceId?: string;
      version?: string | null;
  }
  interface ServiceRemoved {
      appDefId?: string;
      instanceId?: string;
      version?: string | null;
  }
  /** Rename of the site. Meaning, free public url has been changed as well. */
  interface SiteRenamed {
      newSiteName?: string;
      oldSiteName?: string;
  }
  /**
   * Hard deletion of the meta site.
   *
   * Could not be restored. Therefore it's desirable to cleanup data.
   */
  interface SiteHardDeleted {
      deleteContext?: DeleteContext;
  }
  interface NamespaceChanged {
      oldNamespace?: Namespace;
      newNamespace?: Namespace;
  }
  /** Assigned Studio editor */
  interface StudioAssigned {
  }
  /** Unassigned Studio editor */
  interface StudioUnassigned {
  }
  /**
   * gets folder by ID
   * (*) loads schemas for root folder or if not skipped
   * @internal
   * @documentationMaturity preview
   * @returns requested folder details
   */
  function getFolder(options?: GetFolderOptions): Promise<Folder>;
  interface GetFolderOptions {
      /** missing means root */
      folderId?: string | null;
      /**
       * nesting depth to return
       * - 0 means no nested elements, only folder details
       * - none means full folder tree
       */
      depth?: number | null;
      /**
       * if true CollectionReference.schema are not returned,
       * but call is much faster.
       * ignored for root folder request
       */
      skipSchemas?: boolean;
      /** AppID in case of dev env request */
      appId?: string | null;
  }
  /**
   * creates folder
   * folder ID will be ignored and generated
   * @internal
   * @documentationMaturity preview
   * @requiredField options.folderInfo.displayName
   */
  function createFolder(options?: CreateFolderOptions): Promise<CreateFolderResponse>;
  interface CreateFolderOptions {
      /** parent folder ID or none if root */
      parentFolderId?: string | null;
      /** folder info to create */
      folderInfo?: FolderInfo;
  }
  /**
   * updates folder details
   * root folder can't be updated
   * @param folderId - Folder ID
   * @internal
   * @documentationMaturity preview
   * @requiredField folderId
   */
  function updateFolder(folderId: string, options?: UpdateFolderOptions): Promise<UpdateFolderResponse>;
  interface UpdateFolderOptions {
      /** Fields to update, partial */
      folderInfo?: FolderInfo;
      /**
       * patch mask, not exposed to JSON
       * @internal
       */
      mask?: string[];
  }
  /**
   * deletes folder
   * any nested folder would be deleted recursively
   * any shortcut collection references will be deleted
   * any non-shortcut collection references will be moved to root folder
   * root folder can't be deleted
   * @param folderId - folder ID to delete
   * @internal
   * @documentationMaturity preview
   * @requiredField folderId
   */
  function deleteFolder(folderId: string): Promise<void>;
  /**
   * moves folder to different parent with all it's contents
   * @param folderId - folder ID to move
   * @internal
   * @documentationMaturity preview
   * @requiredField folderId
   */
  function moveFolder(folderId: string, options?: MoveFolderOptions): Promise<void>;
  interface MoveFolderOptions {
      /** destination folder ID (new parent), none if root */
      parentFolderId?: string | null;
  }
  /**
   * creates collection reference
   * if reference is non-shortcut it is moved from previous location
   * @param collectionName - collection name to reference (ID)
   * @internal
   * @documentationMaturity preview
   * @requiredField collectionName
   */
  function referenceCollection(collectionName: string, options?: ReferenceCollectionOptions): Promise<ReferenceCollectionResponse>;
  interface ReferenceCollectionOptions {
      /** target folder ID or none if root */
      folderId?: string | null;
      /**
       * if false then single non-shortcut reference to this
       * collection is moved to target folder
       * otherwise new shortcut reference is created
       */
      shortcut?: boolean;
      /**
       * additional information for shortcut reference
       * ignored for non-shortcut reference
       */
      info?: Record<string, any> | null;
  }
  /**
   * returns all references to given collection
   * @param collectionName - collection name (ID) to get
   * @internal
   * @documentationMaturity preview
   * @requiredField collectionName
   */
  function getReferences(collectionName: string, options?: GetReferencesOptions): Promise<GetReferencesResponse>;
  interface GetReferencesOptions {
      /**
       * if true schema would not be loaded and reference may not be found if collection is in root folder
       * loading schema has performance impact
       */
      skipSchemas?: boolean;
      /** AppID in case of dev env request */
      appId?: string | null;
  }
  /**
   * updates reference info
   * @internal
   * @documentationMaturity preview
   * @requiredField options.collectionName
   */
  function updateReferenceInfo(options?: UpdateReferenceInfoOptions): Promise<UpdateReferenceInfoResponse>;
  interface UpdateReferenceInfoOptions {
      /** folder where reference is located, none for root */
      folderId?: string | null;
      /** referenced collection name (ID) */
      collectionName: string;
      /** additional information to set */
      info?: Record<string, any> | null;
  }
  /**
   * deletes references (only shortcuts)
   * @param collectionName - collection name (ID) to delete
   * @internal
   * @documentationMaturity preview
   * @requiredField collectionName
   */
  function deleteReference(collectionName: string, options?: DeleteReferenceOptions): Promise<void>;
  interface DeleteReferenceOptions {
      /** folder ID where to delete reference or none if root */
      folderId?: string | null;
  }
  /**
   * searches folder and collections by name
   * @internal
   * @documentationMaturity preview
   */
  function search(options?: SearchOptions): Promise<SearchResponse>;
  interface SearchOptions {
      /** Search string, matched ignoring case */
      searchTerm?: string;
      /** AppID in case of dev env request */
      appId?: string | null;
  }
  
  const cloudAutocmsV1Folder_universal_d___debug: typeof __debug;
  type cloudAutocmsV1Folder_universal_d_Folder = Folder;
  type cloudAutocmsV1Folder_universal_d_CollectionReference = CollectionReference;
  type cloudAutocmsV1Folder_universal_d_GetFolderRequest = GetFolderRequest;
  type cloudAutocmsV1Folder_universal_d_GetFolderResponse = GetFolderResponse;
  type cloudAutocmsV1Folder_universal_d_Schemas = Schemas;
  type cloudAutocmsV1Folder_universal_d_Source = Source;
  const cloudAutocmsV1Folder_universal_d_Source: typeof Source;
  type cloudAutocmsV1Folder_universal_d_CreateFolderRequest = CreateFolderRequest;
  type cloudAutocmsV1Folder_universal_d_FolderInfo = FolderInfo;
  type cloudAutocmsV1Folder_universal_d_CreateFolderResponse = CreateFolderResponse;
  type cloudAutocmsV1Folder_universal_d_UpdateFolderRequest = UpdateFolderRequest;
  type cloudAutocmsV1Folder_universal_d_UpdateFolderResponse = UpdateFolderResponse;
  type cloudAutocmsV1Folder_universal_d_DeleteFolderRequest = DeleteFolderRequest;
  type cloudAutocmsV1Folder_universal_d_DeleteFolderResponse = DeleteFolderResponse;
  type cloudAutocmsV1Folder_universal_d_MoveFolderRequest = MoveFolderRequest;
  type cloudAutocmsV1Folder_universal_d_MoveFolderResponse = MoveFolderResponse;
  type cloudAutocmsV1Folder_universal_d_ReferenceCollectionRequest = ReferenceCollectionRequest;
  type cloudAutocmsV1Folder_universal_d_ReferenceCollectionResponse = ReferenceCollectionResponse;
  type cloudAutocmsV1Folder_universal_d_GetReferencesRequest = GetReferencesRequest;
  type cloudAutocmsV1Folder_universal_d_GetReferencesResponse = GetReferencesResponse;
  type cloudAutocmsV1Folder_universal_d_ReferenceLocation = ReferenceLocation;
  type cloudAutocmsV1Folder_universal_d_UpdateReferenceInfoRequest = UpdateReferenceInfoRequest;
  type cloudAutocmsV1Folder_universal_d_UpdateReferenceInfoResponse = UpdateReferenceInfoResponse;
  type cloudAutocmsV1Folder_universal_d_DeleteReferenceRequest = DeleteReferenceRequest;
  type cloudAutocmsV1Folder_universal_d_DeleteReferenceResponse = DeleteReferenceResponse;
  type cloudAutocmsV1Folder_universal_d_SearchRequest = SearchRequest;
  type cloudAutocmsV1Folder_universal_d_SearchResponse = SearchResponse;
  type cloudAutocmsV1Folder_universal_d_DomainEvent = DomainEvent;
  type cloudAutocmsV1Folder_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type cloudAutocmsV1Folder_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type cloudAutocmsV1Folder_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type cloudAutocmsV1Folder_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type cloudAutocmsV1Folder_universal_d_ActionEvent = ActionEvent;
  type cloudAutocmsV1Folder_universal_d_Empty = Empty;
  type cloudAutocmsV1Folder_universal_d_MetaSiteSpecialEvent = MetaSiteSpecialEvent;
  type cloudAutocmsV1Folder_universal_d_MetaSiteSpecialEventPayloadOneOf = MetaSiteSpecialEventPayloadOneOf;
  type cloudAutocmsV1Folder_universal_d_Asset = Asset;
  type cloudAutocmsV1Folder_universal_d_State = State;
  const cloudAutocmsV1Folder_universal_d_State: typeof State;
  type cloudAutocmsV1Folder_universal_d_SiteCreated = SiteCreated;
  type cloudAutocmsV1Folder_universal_d_SiteCreatedContext = SiteCreatedContext;
  const cloudAutocmsV1Folder_universal_d_SiteCreatedContext: typeof SiteCreatedContext;
  type cloudAutocmsV1Folder_universal_d_Namespace = Namespace;
  const cloudAutocmsV1Folder_universal_d_Namespace: typeof Namespace;
  type cloudAutocmsV1Folder_universal_d_SiteTransferred = SiteTransferred;
  type cloudAutocmsV1Folder_universal_d_SiteDeleted = SiteDeleted;
  type cloudAutocmsV1Folder_universal_d_DeleteContext = DeleteContext;
  type cloudAutocmsV1Folder_universal_d_DeleteStatus = DeleteStatus;
  const cloudAutocmsV1Folder_universal_d_DeleteStatus: typeof DeleteStatus;
  type cloudAutocmsV1Folder_universal_d_SiteUndeleted = SiteUndeleted;
  type cloudAutocmsV1Folder_universal_d_SitePublished = SitePublished;
  type cloudAutocmsV1Folder_universal_d_SiteUnpublished = SiteUnpublished;
  type cloudAutocmsV1Folder_universal_d_SiteMarkedAsTemplate = SiteMarkedAsTemplate;
  type cloudAutocmsV1Folder_universal_d_SiteMarkedAsWixSite = SiteMarkedAsWixSite;
  type cloudAutocmsV1Folder_universal_d_ServiceProvisioned = ServiceProvisioned;
  type cloudAutocmsV1Folder_universal_d_ServiceRemoved = ServiceRemoved;
  type cloudAutocmsV1Folder_universal_d_SiteRenamed = SiteRenamed;
  type cloudAutocmsV1Folder_universal_d_SiteHardDeleted = SiteHardDeleted;
  type cloudAutocmsV1Folder_universal_d_NamespaceChanged = NamespaceChanged;
  type cloudAutocmsV1Folder_universal_d_StudioAssigned = StudioAssigned;
  type cloudAutocmsV1Folder_universal_d_StudioUnassigned = StudioUnassigned;
  const cloudAutocmsV1Folder_universal_d_getFolder: typeof getFolder;
  type cloudAutocmsV1Folder_universal_d_GetFolderOptions = GetFolderOptions;
  const cloudAutocmsV1Folder_universal_d_createFolder: typeof createFolder;
  type cloudAutocmsV1Folder_universal_d_CreateFolderOptions = CreateFolderOptions;
  const cloudAutocmsV1Folder_universal_d_updateFolder: typeof updateFolder;
  type cloudAutocmsV1Folder_universal_d_UpdateFolderOptions = UpdateFolderOptions;
  const cloudAutocmsV1Folder_universal_d_deleteFolder: typeof deleteFolder;
  const cloudAutocmsV1Folder_universal_d_moveFolder: typeof moveFolder;
  type cloudAutocmsV1Folder_universal_d_MoveFolderOptions = MoveFolderOptions;
  const cloudAutocmsV1Folder_universal_d_referenceCollection: typeof referenceCollection;
  type cloudAutocmsV1Folder_universal_d_ReferenceCollectionOptions = ReferenceCollectionOptions;
  const cloudAutocmsV1Folder_universal_d_getReferences: typeof getReferences;
  type cloudAutocmsV1Folder_universal_d_GetReferencesOptions = GetReferencesOptions;
  const cloudAutocmsV1Folder_universal_d_updateReferenceInfo: typeof updateReferenceInfo;
  type cloudAutocmsV1Folder_universal_d_UpdateReferenceInfoOptions = UpdateReferenceInfoOptions;
  const cloudAutocmsV1Folder_universal_d_deleteReference: typeof deleteReference;
  type cloudAutocmsV1Folder_universal_d_DeleteReferenceOptions = DeleteReferenceOptions;
  const cloudAutocmsV1Folder_universal_d_search: typeof search;
  type cloudAutocmsV1Folder_universal_d_SearchOptions = SearchOptions;
  namespace cloudAutocmsV1Folder_universal_d {
    export {
      cloudAutocmsV1Folder_universal_d___debug as __debug,
      cloudAutocmsV1Folder_universal_d_Folder as Folder,
      cloudAutocmsV1Folder_universal_d_CollectionReference as CollectionReference,
      cloudAutocmsV1Folder_universal_d_GetFolderRequest as GetFolderRequest,
      cloudAutocmsV1Folder_universal_d_GetFolderResponse as GetFolderResponse,
      cloudAutocmsV1Folder_universal_d_Schemas as Schemas,
      cloudAutocmsV1Folder_universal_d_Source as Source,
      cloudAutocmsV1Folder_universal_d_CreateFolderRequest as CreateFolderRequest,
      cloudAutocmsV1Folder_universal_d_FolderInfo as FolderInfo,
      cloudAutocmsV1Folder_universal_d_CreateFolderResponse as CreateFolderResponse,
      cloudAutocmsV1Folder_universal_d_UpdateFolderRequest as UpdateFolderRequest,
      cloudAutocmsV1Folder_universal_d_UpdateFolderResponse as UpdateFolderResponse,
      cloudAutocmsV1Folder_universal_d_DeleteFolderRequest as DeleteFolderRequest,
      cloudAutocmsV1Folder_universal_d_DeleteFolderResponse as DeleteFolderResponse,
      cloudAutocmsV1Folder_universal_d_MoveFolderRequest as MoveFolderRequest,
      cloudAutocmsV1Folder_universal_d_MoveFolderResponse as MoveFolderResponse,
      cloudAutocmsV1Folder_universal_d_ReferenceCollectionRequest as ReferenceCollectionRequest,
      cloudAutocmsV1Folder_universal_d_ReferenceCollectionResponse as ReferenceCollectionResponse,
      cloudAutocmsV1Folder_universal_d_GetReferencesRequest as GetReferencesRequest,
      cloudAutocmsV1Folder_universal_d_GetReferencesResponse as GetReferencesResponse,
      cloudAutocmsV1Folder_universal_d_ReferenceLocation as ReferenceLocation,
      cloudAutocmsV1Folder_universal_d_UpdateReferenceInfoRequest as UpdateReferenceInfoRequest,
      cloudAutocmsV1Folder_universal_d_UpdateReferenceInfoResponse as UpdateReferenceInfoResponse,
      cloudAutocmsV1Folder_universal_d_DeleteReferenceRequest as DeleteReferenceRequest,
      cloudAutocmsV1Folder_universal_d_DeleteReferenceResponse as DeleteReferenceResponse,
      cloudAutocmsV1Folder_universal_d_SearchRequest as SearchRequest,
      cloudAutocmsV1Folder_universal_d_SearchResponse as SearchResponse,
      cloudAutocmsV1Folder_universal_d_DomainEvent as DomainEvent,
      cloudAutocmsV1Folder_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      cloudAutocmsV1Folder_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      cloudAutocmsV1Folder_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      cloudAutocmsV1Folder_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      cloudAutocmsV1Folder_universal_d_ActionEvent as ActionEvent,
      cloudAutocmsV1Folder_universal_d_Empty as Empty,
      cloudAutocmsV1Folder_universal_d_MetaSiteSpecialEvent as MetaSiteSpecialEvent,
      cloudAutocmsV1Folder_universal_d_MetaSiteSpecialEventPayloadOneOf as MetaSiteSpecialEventPayloadOneOf,
      cloudAutocmsV1Folder_universal_d_Asset as Asset,
      cloudAutocmsV1Folder_universal_d_State as State,
      cloudAutocmsV1Folder_universal_d_SiteCreated as SiteCreated,
      cloudAutocmsV1Folder_universal_d_SiteCreatedContext as SiteCreatedContext,
      cloudAutocmsV1Folder_universal_d_Namespace as Namespace,
      cloudAutocmsV1Folder_universal_d_SiteTransferred as SiteTransferred,
      cloudAutocmsV1Folder_universal_d_SiteDeleted as SiteDeleted,
      cloudAutocmsV1Folder_universal_d_DeleteContext as DeleteContext,
      cloudAutocmsV1Folder_universal_d_DeleteStatus as DeleteStatus,
      cloudAutocmsV1Folder_universal_d_SiteUndeleted as SiteUndeleted,
      cloudAutocmsV1Folder_universal_d_SitePublished as SitePublished,
      cloudAutocmsV1Folder_universal_d_SiteUnpublished as SiteUnpublished,
      cloudAutocmsV1Folder_universal_d_SiteMarkedAsTemplate as SiteMarkedAsTemplate,
      cloudAutocmsV1Folder_universal_d_SiteMarkedAsWixSite as SiteMarkedAsWixSite,
      cloudAutocmsV1Folder_universal_d_ServiceProvisioned as ServiceProvisioned,
      cloudAutocmsV1Folder_universal_d_ServiceRemoved as ServiceRemoved,
      cloudAutocmsV1Folder_universal_d_SiteRenamed as SiteRenamed,
      cloudAutocmsV1Folder_universal_d_SiteHardDeleted as SiteHardDeleted,
      cloudAutocmsV1Folder_universal_d_NamespaceChanged as NamespaceChanged,
      cloudAutocmsV1Folder_universal_d_StudioAssigned as StudioAssigned,
      cloudAutocmsV1Folder_universal_d_StudioUnassigned as StudioUnassigned,
      cloudAutocmsV1Folder_universal_d_getFolder as getFolder,
      cloudAutocmsV1Folder_universal_d_GetFolderOptions as GetFolderOptions,
      cloudAutocmsV1Folder_universal_d_createFolder as createFolder,
      cloudAutocmsV1Folder_universal_d_CreateFolderOptions as CreateFolderOptions,
      cloudAutocmsV1Folder_universal_d_updateFolder as updateFolder,
      cloudAutocmsV1Folder_universal_d_UpdateFolderOptions as UpdateFolderOptions,
      cloudAutocmsV1Folder_universal_d_deleteFolder as deleteFolder,
      cloudAutocmsV1Folder_universal_d_moveFolder as moveFolder,
      cloudAutocmsV1Folder_universal_d_MoveFolderOptions as MoveFolderOptions,
      cloudAutocmsV1Folder_universal_d_referenceCollection as referenceCollection,
      cloudAutocmsV1Folder_universal_d_ReferenceCollectionOptions as ReferenceCollectionOptions,
      cloudAutocmsV1Folder_universal_d_getReferences as getReferences,
      cloudAutocmsV1Folder_universal_d_GetReferencesOptions as GetReferencesOptions,
      cloudAutocmsV1Folder_universal_d_updateReferenceInfo as updateReferenceInfo,
      cloudAutocmsV1Folder_universal_d_UpdateReferenceInfoOptions as UpdateReferenceInfoOptions,
      cloudAutocmsV1Folder_universal_d_deleteReference as deleteReference,
      cloudAutocmsV1Folder_universal_d_DeleteReferenceOptions as DeleteReferenceOptions,
      cloudAutocmsV1Folder_universal_d_search as search,
      cloudAutocmsV1Folder_universal_d_SearchOptions as SearchOptions,
    };
  }
  
  export { cloudAutocmsV1Folder_universal_d as autocms };
}
