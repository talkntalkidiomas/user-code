declare module "wix-autocms-collection-rules-service-v1" {
  /**
   * CollectionRules contains validation/initialization rules for certain data collection.
   * Rules and default values can be incompatible with collection schema but still persisted.
   */
  interface CollectionRules {
      /** collection ID (previously collection name) */
      dataCollectionId?: string;
      /** rules */
      rules?: Rule[];
      /** field default values */
      defaultValues?: DefaultValue[];
  }
  interface Rule extends RuleOptionsOneOf {
      /** options for ENUMERATED rule type */
      enumeratedOptions?: EnumeratedOptions;
      /** options for STRING_LENGTH rule type */
      stringLengthOptions?: StringLengthOptions;
      /** field key this rule applies to */
      field?: string;
      /** rule type */
      type?: Type;
      /**
       * Query filter that passes for valid values
       * @readonly
       */
      queryFilter?: Record<string, any> | null;
      /**
       * rule may be disabled automatically if schema was changed and rule is no more compatible with it
       * i.e. field was deleted or it's type was changed
       * @readonly
       */
      incompatible?: boolean;
  }
  /** @oneof */
  interface RuleOptionsOneOf {
      /** options for ENUMERATED rule type */
      enumeratedOptions?: EnumeratedOptions;
      /** options for STRING_LENGTH rule type */
      stringLengthOptions?: StringLengthOptions;
  }
  enum Type {
      /** should not be used */
      UNDEFINED = "UNDEFINED",
      /** value may be not null, missing or empty value of any type */
      NON_EMPTY = "NON_EMPTY",
      /** value must be one of predefined list */
      ENUMERATED = "ENUMERATED",
      /** string min/max length limitations */
      STRING_LENGTH = "STRING_LENGTH"
  }
  interface EnumeratedOptions {
      /** allowed values list */
      allowedValues?: any[];
  }
  interface StringLengthOptions {
      /** Minimum string length required */
      minLength?: number | null;
      /** Maximum string length allowed */
      maxLength?: number | null;
  }
  interface DefaultValue {
      /** field key */
      field?: string;
      /** default value */
      defaultValue?: any;
      /**
       * disabled automatically if schema was changed and field was deleted
       * @readonly
       */
      incompatible?: boolean;
  }
  interface SaveCollectionRulesRequest {
      /** collection rules to save */
      rules: CollectionRules;
  }
  interface SaveCollectionRulesResponse {
      /** saved collection rules */
      rules?: CollectionRules;
  }
  interface CollectionSchemaMismatchErrorData {
      /** collection rules saved entity */
      rules?: CollectionRules;
  }
  interface GetCollectionRulesRequest {
      /** collection ID to get rules for */
      dataCollectionId?: string;
  }
  interface GetCollectionRulesResponse {
      /** retrieved collection rules */
      rules?: CollectionRules;
  }
  interface ListCollectionRulesRequest {
  }
  interface ListCollectionRulesResponse {
      /** retrieved collection rules */
      rules?: CollectionRules[];
  }
  interface ValidateRequest {
      /** collection ID */
      dataCollectionId?: string;
      /** data items to validate */
      items?: Record<string, any>[] | null;
  }
  interface ValidateResponse {
      /** validation results of items in same order */
      validationResults?: ValidationResult[];
  }
  interface ValidationFailure {
      /** failed rule */
      rule?: Rule;
      /** validation message */
      message?: string;
  }
  interface ValidationResult {
      /** validation failures, empty if item is valid */
      failures?: ValidationFailure[];
      /** original item index in request */
      originalIndex?: number;
      /** true if no validation failures found */
      success?: boolean;
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
  interface Empty {
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
  /**
   * Updates collection rules.
   *
   * ### Errors:
   * - `COLLECTION_NOT_FOUND` if no such data collection found
   * - `INVALID_RULE` when provided rules are invalid
   * - `COLLECTION_SCHEMA_MISMATCH` when rules are valid, but not compatible with collection
   * schema (i.e. no such field in the schema). In such case rules are marked as "incompatible"
   * but are saved and returned in error body as "rule" property.
   * @param rules - collection rules to save
   * @internal
   * @documentationMaturity preview
   * @requiredField rules
   * @adminMethod
   */
  function saveCollectionRules(rules: CollectionRules): Promise<SaveCollectionRulesResponse>;
  /**
   * Get collection rules by collection id.
   * NOTE if requested collection doesn't exists it returns empty rules instance
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function getCollectionRules(options?: GetCollectionRulesOptions): Promise<GetCollectionRulesResponse>;
  interface GetCollectionRulesOptions {
      /** collection ID to get rules for */
      dataCollectionId?: string;
  }
  /**
   * Get all non-empty collection rules for current tenant
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function listCollectionRules(): Promise<ListCollectionRulesResponse>;
  /**
   * Validates data items and returns list of failed rules.
   * NOTE if collection doesn't exist all data is treated as valid
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function validate(options?: ValidateOptions): Promise<ValidateResponse>;
  interface ValidateOptions {
      /** collection ID */
      dataCollectionId?: string;
      /** data items to validate */
      items?: Record<string, any>[] | null;
  }
  
  type cloudAutocmsV1CollectionRules_universal_d_CollectionRules = CollectionRules;
  type cloudAutocmsV1CollectionRules_universal_d_Rule = Rule;
  type cloudAutocmsV1CollectionRules_universal_d_RuleOptionsOneOf = RuleOptionsOneOf;
  type cloudAutocmsV1CollectionRules_universal_d_Type = Type;
  const cloudAutocmsV1CollectionRules_universal_d_Type: typeof Type;
  type cloudAutocmsV1CollectionRules_universal_d_EnumeratedOptions = EnumeratedOptions;
  type cloudAutocmsV1CollectionRules_universal_d_StringLengthOptions = StringLengthOptions;
  type cloudAutocmsV1CollectionRules_universal_d_DefaultValue = DefaultValue;
  type cloudAutocmsV1CollectionRules_universal_d_SaveCollectionRulesRequest = SaveCollectionRulesRequest;
  type cloudAutocmsV1CollectionRules_universal_d_SaveCollectionRulesResponse = SaveCollectionRulesResponse;
  type cloudAutocmsV1CollectionRules_universal_d_CollectionSchemaMismatchErrorData = CollectionSchemaMismatchErrorData;
  type cloudAutocmsV1CollectionRules_universal_d_GetCollectionRulesRequest = GetCollectionRulesRequest;
  type cloudAutocmsV1CollectionRules_universal_d_GetCollectionRulesResponse = GetCollectionRulesResponse;
  type cloudAutocmsV1CollectionRules_universal_d_ListCollectionRulesRequest = ListCollectionRulesRequest;
  type cloudAutocmsV1CollectionRules_universal_d_ListCollectionRulesResponse = ListCollectionRulesResponse;
  type cloudAutocmsV1CollectionRules_universal_d_ValidateRequest = ValidateRequest;
  type cloudAutocmsV1CollectionRules_universal_d_ValidateResponse = ValidateResponse;
  type cloudAutocmsV1CollectionRules_universal_d_ValidationFailure = ValidationFailure;
  type cloudAutocmsV1CollectionRules_universal_d_ValidationResult = ValidationResult;
  type cloudAutocmsV1CollectionRules_universal_d_DomainEvent = DomainEvent;
  type cloudAutocmsV1CollectionRules_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type cloudAutocmsV1CollectionRules_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type cloudAutocmsV1CollectionRules_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type cloudAutocmsV1CollectionRules_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type cloudAutocmsV1CollectionRules_universal_d_ActionEvent = ActionEvent;
  type cloudAutocmsV1CollectionRules_universal_d_Empty = Empty;
  type cloudAutocmsV1CollectionRules_universal_d_MetaSiteSpecialEvent = MetaSiteSpecialEvent;
  type cloudAutocmsV1CollectionRules_universal_d_MetaSiteSpecialEventPayloadOneOf = MetaSiteSpecialEventPayloadOneOf;
  type cloudAutocmsV1CollectionRules_universal_d_Asset = Asset;
  type cloudAutocmsV1CollectionRules_universal_d_State = State;
  const cloudAutocmsV1CollectionRules_universal_d_State: typeof State;
  type cloudAutocmsV1CollectionRules_universal_d_SiteCreated = SiteCreated;
  type cloudAutocmsV1CollectionRules_universal_d_SiteCreatedContext = SiteCreatedContext;
  const cloudAutocmsV1CollectionRules_universal_d_SiteCreatedContext: typeof SiteCreatedContext;
  type cloudAutocmsV1CollectionRules_universal_d_Namespace = Namespace;
  const cloudAutocmsV1CollectionRules_universal_d_Namespace: typeof Namespace;
  type cloudAutocmsV1CollectionRules_universal_d_SiteTransferred = SiteTransferred;
  type cloudAutocmsV1CollectionRules_universal_d_SiteDeleted = SiteDeleted;
  type cloudAutocmsV1CollectionRules_universal_d_DeleteContext = DeleteContext;
  type cloudAutocmsV1CollectionRules_universal_d_DeleteStatus = DeleteStatus;
  const cloudAutocmsV1CollectionRules_universal_d_DeleteStatus: typeof DeleteStatus;
  type cloudAutocmsV1CollectionRules_universal_d_SiteUndeleted = SiteUndeleted;
  type cloudAutocmsV1CollectionRules_universal_d_SitePublished = SitePublished;
  type cloudAutocmsV1CollectionRules_universal_d_SiteUnpublished = SiteUnpublished;
  type cloudAutocmsV1CollectionRules_universal_d_SiteMarkedAsTemplate = SiteMarkedAsTemplate;
  type cloudAutocmsV1CollectionRules_universal_d_SiteMarkedAsWixSite = SiteMarkedAsWixSite;
  type cloudAutocmsV1CollectionRules_universal_d_ServiceProvisioned = ServiceProvisioned;
  type cloudAutocmsV1CollectionRules_universal_d_ServiceRemoved = ServiceRemoved;
  type cloudAutocmsV1CollectionRules_universal_d_SiteRenamed = SiteRenamed;
  type cloudAutocmsV1CollectionRules_universal_d_SiteHardDeleted = SiteHardDeleted;
  type cloudAutocmsV1CollectionRules_universal_d_NamespaceChanged = NamespaceChanged;
  type cloudAutocmsV1CollectionRules_universal_d_StudioAssigned = StudioAssigned;
  type cloudAutocmsV1CollectionRules_universal_d_StudioUnassigned = StudioUnassigned;
  const cloudAutocmsV1CollectionRules_universal_d_saveCollectionRules: typeof saveCollectionRules;
  const cloudAutocmsV1CollectionRules_universal_d_getCollectionRules: typeof getCollectionRules;
  type cloudAutocmsV1CollectionRules_universal_d_GetCollectionRulesOptions = GetCollectionRulesOptions;
  const cloudAutocmsV1CollectionRules_universal_d_listCollectionRules: typeof listCollectionRules;
  const cloudAutocmsV1CollectionRules_universal_d_validate: typeof validate;
  type cloudAutocmsV1CollectionRules_universal_d_ValidateOptions = ValidateOptions;
  namespace cloudAutocmsV1CollectionRules_universal_d {
    export {
      cloudAutocmsV1CollectionRules_universal_d_CollectionRules as CollectionRules,
      cloudAutocmsV1CollectionRules_universal_d_Rule as Rule,
      cloudAutocmsV1CollectionRules_universal_d_RuleOptionsOneOf as RuleOptionsOneOf,
      cloudAutocmsV1CollectionRules_universal_d_Type as Type,
      cloudAutocmsV1CollectionRules_universal_d_EnumeratedOptions as EnumeratedOptions,
      cloudAutocmsV1CollectionRules_universal_d_StringLengthOptions as StringLengthOptions,
      cloudAutocmsV1CollectionRules_universal_d_DefaultValue as DefaultValue,
      cloudAutocmsV1CollectionRules_universal_d_SaveCollectionRulesRequest as SaveCollectionRulesRequest,
      cloudAutocmsV1CollectionRules_universal_d_SaveCollectionRulesResponse as SaveCollectionRulesResponse,
      cloudAutocmsV1CollectionRules_universal_d_CollectionSchemaMismatchErrorData as CollectionSchemaMismatchErrorData,
      cloudAutocmsV1CollectionRules_universal_d_GetCollectionRulesRequest as GetCollectionRulesRequest,
      cloudAutocmsV1CollectionRules_universal_d_GetCollectionRulesResponse as GetCollectionRulesResponse,
      cloudAutocmsV1CollectionRules_universal_d_ListCollectionRulesRequest as ListCollectionRulesRequest,
      cloudAutocmsV1CollectionRules_universal_d_ListCollectionRulesResponse as ListCollectionRulesResponse,
      cloudAutocmsV1CollectionRules_universal_d_ValidateRequest as ValidateRequest,
      cloudAutocmsV1CollectionRules_universal_d_ValidateResponse as ValidateResponse,
      cloudAutocmsV1CollectionRules_universal_d_ValidationFailure as ValidationFailure,
      cloudAutocmsV1CollectionRules_universal_d_ValidationResult as ValidationResult,
      cloudAutocmsV1CollectionRules_universal_d_DomainEvent as DomainEvent,
      cloudAutocmsV1CollectionRules_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      cloudAutocmsV1CollectionRules_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      cloudAutocmsV1CollectionRules_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      cloudAutocmsV1CollectionRules_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      cloudAutocmsV1CollectionRules_universal_d_ActionEvent as ActionEvent,
      cloudAutocmsV1CollectionRules_universal_d_Empty as Empty,
      cloudAutocmsV1CollectionRules_universal_d_MetaSiteSpecialEvent as MetaSiteSpecialEvent,
      cloudAutocmsV1CollectionRules_universal_d_MetaSiteSpecialEventPayloadOneOf as MetaSiteSpecialEventPayloadOneOf,
      cloudAutocmsV1CollectionRules_universal_d_Asset as Asset,
      cloudAutocmsV1CollectionRules_universal_d_State as State,
      cloudAutocmsV1CollectionRules_universal_d_SiteCreated as SiteCreated,
      cloudAutocmsV1CollectionRules_universal_d_SiteCreatedContext as SiteCreatedContext,
      cloudAutocmsV1CollectionRules_universal_d_Namespace as Namespace,
      cloudAutocmsV1CollectionRules_universal_d_SiteTransferred as SiteTransferred,
      cloudAutocmsV1CollectionRules_universal_d_SiteDeleted as SiteDeleted,
      cloudAutocmsV1CollectionRules_universal_d_DeleteContext as DeleteContext,
      cloudAutocmsV1CollectionRules_universal_d_DeleteStatus as DeleteStatus,
      cloudAutocmsV1CollectionRules_universal_d_SiteUndeleted as SiteUndeleted,
      cloudAutocmsV1CollectionRules_universal_d_SitePublished as SitePublished,
      cloudAutocmsV1CollectionRules_universal_d_SiteUnpublished as SiteUnpublished,
      cloudAutocmsV1CollectionRules_universal_d_SiteMarkedAsTemplate as SiteMarkedAsTemplate,
      cloudAutocmsV1CollectionRules_universal_d_SiteMarkedAsWixSite as SiteMarkedAsWixSite,
      cloudAutocmsV1CollectionRules_universal_d_ServiceProvisioned as ServiceProvisioned,
      cloudAutocmsV1CollectionRules_universal_d_ServiceRemoved as ServiceRemoved,
      cloudAutocmsV1CollectionRules_universal_d_SiteRenamed as SiteRenamed,
      cloudAutocmsV1CollectionRules_universal_d_SiteHardDeleted as SiteHardDeleted,
      cloudAutocmsV1CollectionRules_universal_d_NamespaceChanged as NamespaceChanged,
      cloudAutocmsV1CollectionRules_universal_d_StudioAssigned as StudioAssigned,
      cloudAutocmsV1CollectionRules_universal_d_StudioUnassigned as StudioUnassigned,
      cloudAutocmsV1CollectionRules_universal_d_saveCollectionRules as saveCollectionRules,
      cloudAutocmsV1CollectionRules_universal_d_getCollectionRules as getCollectionRules,
      cloudAutocmsV1CollectionRules_universal_d_GetCollectionRulesOptions as GetCollectionRulesOptions,
      cloudAutocmsV1CollectionRules_universal_d_listCollectionRules as listCollectionRules,
      cloudAutocmsV1CollectionRules_universal_d_validate as validate,
      cloudAutocmsV1CollectionRules_universal_d_ValidateOptions as ValidateOptions,
    };
  }
  
  export { cloudAutocmsV1CollectionRules_universal_d as autocms };
}
