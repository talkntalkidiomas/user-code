declare module "wix-auth-management.v2" {
  /** An intermediary application that authorizes and authenticates an external client to access data on a Wix project or site. */
  interface OAuthApp {
      /**
       * ID of the OAuth app.
       * @readonly
       */
      _id?: string | null;
      /**
       * Date and time the OAuth app was created, in ISO 8601 format.
       * @readonly
       */
      _createdDate?: Date;
      /** Display name of the OAuth app, as it appears in the dashboard. */
      name?: string | null;
      /** Description of the OAuth app, as it appears in the dashboard. */
      description?: string | null;
      /**
       * For internal use only.
       * @readonly
       */
      secret?: string | null;
      /**
       * List of domains to which redirection from Wix is allowed after processes other than authentication.
       *
       * When a client redirects a user to a Wix page (for example, for checkout), the client provides a URL to redirect the user back to.
       * Wix only redirects the user if the URL is in one of the specified domains.
       * @internal
       */
      allowedDomains?: string[];
      /** External login URL to which users are redirected automatically to authenticate. If no login URL is specified, the user is redirected to Wix to authenticate. */
      loginUrl?: string | null;
      /**
       * List of URIs to which redirection from Wix is allowed after authentication.
       *
       * When a client redirects a user to Wix for authentication, the client provides a URI to redirect the user back to after the user has been authenticated.
       * Wix only redirects the user if the exact URI is contained in this array.
       */
      allowedRedirectUris?: string[];
      /**
       * List of domains to which redirection from Wix is allowed after processes other than authentication.
       *
       * When a client redirects a user to a Wix page (for example, for checkout), the client provides a URL to redirect the user back to.
       * Wix only redirects the user if the URL is in one of the specified domains.
       */
      allowedRedirectDomains?: string[];
      /**
       * Whether a secret can be generated for this OAuth app.
       *
       * Default: `true` until a secret has been generated for the OAuth App.
       */
      allowSecretGeneration?: boolean | null;
      /** External logout URL to which we invoke when user logout at wix. If no logout URL is specified, the user is logged out only at Wix. */
      logoutUrl?: string | null;
  }
  interface CreateOAuthAppRequest {
      /** OAuth app to create. */
      oAuthApp: OAuthApp;
  }
  interface CreateOAuthAppResponse {
      /** Created OAuth app info. */
      oAuthApp?: OAuthApp;
  }
  interface GetOAuthAppRequest {
      /** ID of the OAuth app to retrieve. */
      oAuthAppId: string;
  }
  interface GetOAuthAppResponse {
      /** Retrieved OAuth app info. */
      oAuthApp?: OAuthApp;
  }
  interface UpdateOAuthAppRequest {
      /** Updated OAuth app details. May include some or all fields. */
      oAuthApp: OAuthApp;
      /**
       * Explicit list of fields to update. Only fields listed are updated.
       * @internal
       */
      mask?: string[];
  }
  interface UpdateOAuthAppResponse {
      /** Updated OAuth app info. */
      oAuthApp?: OAuthApp;
  }
  interface DeleteOAuthAppRequest {
      /** ID of the OAuth app to delete. */
      oAuthAppId: string;
  }
  interface DeleteOAuthAppResponse {
  }
  interface QueryOAuthAppsRequest {
      /** Query options. */
      query?: PlatformQuery;
  }
  interface PlatformQuery extends PlatformQueryPagingMethodOneOf {
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
       * Example of operators: `$eq`
       */
      filter?: Record<string, any> | null;
      /**
       * Sort object in the following format:
       * `[{"fieldName":"name","order":"ASC"},{"fieldName":"created_date","order":"DESC"}]`
       */
      sort?: Sorting[];
  }
  /** @oneof */
  interface PlatformQueryPagingMethodOneOf {
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
  interface QueryOAuthAppsResponse {
      /** List of OAuth apps matching the query. */
      oAuthApps?: OAuthApp[];
      /** Paging metadata. */
      pagingMetadata?: PagingMetadataV2;
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
  interface GenerateOAuthAppSecretRequest {
      /** ID of the OAuth app to generate a secret for. */
      oAuthAppId: string;
  }
  interface GenerateOAuthAppSecretResponse {
      /** Secret generated. */
      oAuthAppSecret?: string;
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
  interface Empty {
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
  /**
   * Creates a new OAuth app for a Wix Headless client.
   *
   *
   * An OAuth app authorizes an external client app or site, on any platform, to authenticate with a Wix site or project and manage its data.
   *
   * > **Note:** The OAuth app secret is returned only when creating the OAuth app, and can't be retrieved later. Store the secret in a secure location.
   * @param oAuthApp - OAuth app to create.
   * @public
   * @documentationMaturity preview
   * @requiredField oAuthApp
   * @requiredField oAuthApp.name
   * @adminMethod
   * @returns Created OAuth app info.
   */
  function createOAuthApp(oAuthApp: OAuthApp): Promise<OAuthApp>;
  /**
   * Retrieves an OAuth app by ID.
   * @param oAuthAppId - ID of the OAuth app to retrieve.
   * @public
   * @documentationMaturity preview
   * @requiredField oAuthAppId
   * @adminMethod
   * @returns Retrieved OAuth app info.
   */
  function getOAuthApp(oAuthAppId: string): Promise<OAuthApp>;
  /**
   * Updates an OAuth app.
   *
   *
   * Only fields provided in `mask` are updated.
   *
   * You can update the following fields:
   * + `name`
   * + `description`
   * + `allowedDomain`
   * + `loginUrl`
   * + `logoutUrl`
   * @param _id - ID of the OAuth app.
   * @param mask - Explicit list of fields to update. Only fields listed are updated.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField mask
   * @requiredField oAuthApp
   * @adminMethod
   * @returns Updated OAuth app info.
   */
  function updateOAuthApp(_id: string | null, oAuthApp: UpdateOAuthApp, mask: string[]): Promise<OAuthApp>;
  interface UpdateOAuthApp {
      /**
       * ID of the OAuth app.
       * @readonly
       */
      _id?: string | null;
      /**
       * Date and time the OAuth app was created, in ISO 8601 format.
       * @readonly
       */
      _createdDate?: Date;
      /** Display name of the OAuth app, as it appears in the dashboard. */
      name?: string | null;
      /** Description of the OAuth app, as it appears in the dashboard. */
      description?: string | null;
      /**
       * For internal use only.
       * @readonly
       */
      secret?: string | null;
      /**
       * List of domains to which redirection from Wix is allowed after processes other than authentication.
       *
       * When a client redirects a user to a Wix page (for example, for checkout), the client provides a URL to redirect the user back to.
       * Wix only redirects the user if the URL is in one of the specified domains.
       * @internal
       */
      allowedDomains?: string[];
      /** External login URL to which users are redirected automatically to authenticate. If no login URL is specified, the user is redirected to Wix to authenticate. */
      loginUrl?: string | null;
      /**
       * List of URIs to which redirection from Wix is allowed after authentication.
       *
       * When a client redirects a user to Wix for authentication, the client provides a URI to redirect the user back to after the user has been authenticated.
       * Wix only redirects the user if the exact URI is contained in this array.
       */
      allowedRedirectUris?: string[];
      /**
       * List of domains to which redirection from Wix is allowed after processes other than authentication.
       *
       * When a client redirects a user to a Wix page (for example, for checkout), the client provides a URL to redirect the user back to.
       * Wix only redirects the user if the URL is in one of the specified domains.
       */
      allowedRedirectDomains?: string[];
      /**
       * Whether a secret can be generated for this OAuth app.
       *
       * Default: `true` until a secret has been generated for the OAuth App.
       */
      allowSecretGeneration?: boolean | null;
      /** External logout URL to which we invoke when user logout at wix. If no logout URL is specified, the user is logged out only at Wix. */
      logoutUrl?: string | null;
  }
  /**
   * Deletes an OAuth app by ID.
   *
   *
   * > **Note:** After you delete an OAuth app, an external client can no longer make API calls by authenticating with its client ID.
   * @param oAuthAppId - ID of the OAuth app to delete.
   * @internal
   * @documentationMaturity preview
   * @requiredField oAuthAppId
   * @adminMethod
   */
  function deleteOAuthApp(oAuthAppId: string): Promise<void>;
  /**
   * Retrieves a list of OAuth apps, given the provided paging, filtering, and sorting.
   *
   *
   * Query OAuth Apps runs with these defaults, which you can override:
   * + Results are sorted by `id` in descending order.
   * + `paging.offset` is `0`.
   * @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function queryOAuthApps(): OAuthAppsQueryBuilder;
  interface QueryOffsetResult {
      currentPage: number | undefined;
      totalPages: number | undefined;
      totalCount: number | undefined;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface OAuthAppsQueryResult extends QueryOffsetResult {
      items: OAuthApp[];
      query: OAuthAppsQueryBuilder;
      next: () => Promise<OAuthAppsQueryResult>;
      prev: () => Promise<OAuthAppsQueryResult>;
  }
  interface OAuthAppsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id', value: any) => OAuthAppsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'_createdDate' | 'name'>) => OAuthAppsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'_createdDate' | 'name'>) => OAuthAppsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => OAuthAppsQueryBuilder;
      /** @param skip - Number of items to skip in the query results before returning the results.
       * @documentationMaturity preview
       */
      skip: (skip: number) => OAuthAppsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<OAuthAppsQueryResult>;
  }
  /**
   * Generates a secret for an existing OAuth app.
   *
   *
   * > **Note:** You can only generate a secret once for each OAuth app, and the secret can't be retrieved later. Store the secret securely.
   * @param oAuthAppId - ID of the OAuth app to generate a secret for.
   * @internal
   * @documentationMaturity preview
   * @requiredField oAuthAppId
   * @adminMethod
   */
  function generateOAuthAppSecret(oAuthAppId: string): Promise<GenerateOAuthAppSecretResponse>;
  
  type headlessV1OAuthApp_universal_d_OAuthApp = OAuthApp;
  type headlessV1OAuthApp_universal_d_CreateOAuthAppRequest = CreateOAuthAppRequest;
  type headlessV1OAuthApp_universal_d_CreateOAuthAppResponse = CreateOAuthAppResponse;
  type headlessV1OAuthApp_universal_d_GetOAuthAppRequest = GetOAuthAppRequest;
  type headlessV1OAuthApp_universal_d_GetOAuthAppResponse = GetOAuthAppResponse;
  type headlessV1OAuthApp_universal_d_UpdateOAuthAppRequest = UpdateOAuthAppRequest;
  type headlessV1OAuthApp_universal_d_UpdateOAuthAppResponse = UpdateOAuthAppResponse;
  type headlessV1OAuthApp_universal_d_DeleteOAuthAppRequest = DeleteOAuthAppRequest;
  type headlessV1OAuthApp_universal_d_DeleteOAuthAppResponse = DeleteOAuthAppResponse;
  type headlessV1OAuthApp_universal_d_QueryOAuthAppsRequest = QueryOAuthAppsRequest;
  type headlessV1OAuthApp_universal_d_PlatformQuery = PlatformQuery;
  type headlessV1OAuthApp_universal_d_PlatformQueryPagingMethodOneOf = PlatformQueryPagingMethodOneOf;
  type headlessV1OAuthApp_universal_d_Sorting = Sorting;
  type headlessV1OAuthApp_universal_d_SortOrder = SortOrder;
  const headlessV1OAuthApp_universal_d_SortOrder: typeof SortOrder;
  type headlessV1OAuthApp_universal_d_Paging = Paging;
  type headlessV1OAuthApp_universal_d_CursorPaging = CursorPaging;
  type headlessV1OAuthApp_universal_d_QueryOAuthAppsResponse = QueryOAuthAppsResponse;
  type headlessV1OAuthApp_universal_d_PagingMetadataV2 = PagingMetadataV2;
  type headlessV1OAuthApp_universal_d_Cursors = Cursors;
  type headlessV1OAuthApp_universal_d_GenerateOAuthAppSecretRequest = GenerateOAuthAppSecretRequest;
  type headlessV1OAuthApp_universal_d_GenerateOAuthAppSecretResponse = GenerateOAuthAppSecretResponse;
  type headlessV1OAuthApp_universal_d_MetaSiteSpecialEvent = MetaSiteSpecialEvent;
  type headlessV1OAuthApp_universal_d_MetaSiteSpecialEventPayloadOneOf = MetaSiteSpecialEventPayloadOneOf;
  type headlessV1OAuthApp_universal_d_Asset = Asset;
  type headlessV1OAuthApp_universal_d_State = State;
  const headlessV1OAuthApp_universal_d_State: typeof State;
  type headlessV1OAuthApp_universal_d_SiteCreated = SiteCreated;
  type headlessV1OAuthApp_universal_d_SiteCreatedContext = SiteCreatedContext;
  const headlessV1OAuthApp_universal_d_SiteCreatedContext: typeof SiteCreatedContext;
  type headlessV1OAuthApp_universal_d_Namespace = Namespace;
  const headlessV1OAuthApp_universal_d_Namespace: typeof Namespace;
  type headlessV1OAuthApp_universal_d_SiteTransferred = SiteTransferred;
  type headlessV1OAuthApp_universal_d_SiteDeleted = SiteDeleted;
  type headlessV1OAuthApp_universal_d_DeleteContext = DeleteContext;
  type headlessV1OAuthApp_universal_d_DeleteStatus = DeleteStatus;
  const headlessV1OAuthApp_universal_d_DeleteStatus: typeof DeleteStatus;
  type headlessV1OAuthApp_universal_d_SiteUndeleted = SiteUndeleted;
  type headlessV1OAuthApp_universal_d_SitePublished = SitePublished;
  type headlessV1OAuthApp_universal_d_SiteUnpublished = SiteUnpublished;
  type headlessV1OAuthApp_universal_d_SiteMarkedAsTemplate = SiteMarkedAsTemplate;
  type headlessV1OAuthApp_universal_d_SiteMarkedAsWixSite = SiteMarkedAsWixSite;
  type headlessV1OAuthApp_universal_d_ServiceProvisioned = ServiceProvisioned;
  type headlessV1OAuthApp_universal_d_ServiceRemoved = ServiceRemoved;
  type headlessV1OAuthApp_universal_d_SiteRenamed = SiteRenamed;
  type headlessV1OAuthApp_universal_d_SiteHardDeleted = SiteHardDeleted;
  type headlessV1OAuthApp_universal_d_NamespaceChanged = NamespaceChanged;
  type headlessV1OAuthApp_universal_d_StudioAssigned = StudioAssigned;
  type headlessV1OAuthApp_universal_d_StudioUnassigned = StudioUnassigned;
  type headlessV1OAuthApp_universal_d_Empty = Empty;
  type headlessV1OAuthApp_universal_d_DomainEvent = DomainEvent;
  type headlessV1OAuthApp_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type headlessV1OAuthApp_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type headlessV1OAuthApp_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type headlessV1OAuthApp_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type headlessV1OAuthApp_universal_d_ActionEvent = ActionEvent;
  const headlessV1OAuthApp_universal_d_createOAuthApp: typeof createOAuthApp;
  const headlessV1OAuthApp_universal_d_getOAuthApp: typeof getOAuthApp;
  const headlessV1OAuthApp_universal_d_updateOAuthApp: typeof updateOAuthApp;
  type headlessV1OAuthApp_universal_d_UpdateOAuthApp = UpdateOAuthApp;
  const headlessV1OAuthApp_universal_d_deleteOAuthApp: typeof deleteOAuthApp;
  const headlessV1OAuthApp_universal_d_queryOAuthApps: typeof queryOAuthApps;
  type headlessV1OAuthApp_universal_d_OAuthAppsQueryResult = OAuthAppsQueryResult;
  type headlessV1OAuthApp_universal_d_OAuthAppsQueryBuilder = OAuthAppsQueryBuilder;
  const headlessV1OAuthApp_universal_d_generateOAuthAppSecret: typeof generateOAuthAppSecret;
  namespace headlessV1OAuthApp_universal_d {
    export {
      headlessV1OAuthApp_universal_d_OAuthApp as OAuthApp,
      headlessV1OAuthApp_universal_d_CreateOAuthAppRequest as CreateOAuthAppRequest,
      headlessV1OAuthApp_universal_d_CreateOAuthAppResponse as CreateOAuthAppResponse,
      headlessV1OAuthApp_universal_d_GetOAuthAppRequest as GetOAuthAppRequest,
      headlessV1OAuthApp_universal_d_GetOAuthAppResponse as GetOAuthAppResponse,
      headlessV1OAuthApp_universal_d_UpdateOAuthAppRequest as UpdateOAuthAppRequest,
      headlessV1OAuthApp_universal_d_UpdateOAuthAppResponse as UpdateOAuthAppResponse,
      headlessV1OAuthApp_universal_d_DeleteOAuthAppRequest as DeleteOAuthAppRequest,
      headlessV1OAuthApp_universal_d_DeleteOAuthAppResponse as DeleteOAuthAppResponse,
      headlessV1OAuthApp_universal_d_QueryOAuthAppsRequest as QueryOAuthAppsRequest,
      headlessV1OAuthApp_universal_d_PlatformQuery as PlatformQuery,
      headlessV1OAuthApp_universal_d_PlatformQueryPagingMethodOneOf as PlatformQueryPagingMethodOneOf,
      headlessV1OAuthApp_universal_d_Sorting as Sorting,
      headlessV1OAuthApp_universal_d_SortOrder as SortOrder,
      headlessV1OAuthApp_universal_d_Paging as Paging,
      headlessV1OAuthApp_universal_d_CursorPaging as CursorPaging,
      headlessV1OAuthApp_universal_d_QueryOAuthAppsResponse as QueryOAuthAppsResponse,
      headlessV1OAuthApp_universal_d_PagingMetadataV2 as PagingMetadataV2,
      headlessV1OAuthApp_universal_d_Cursors as Cursors,
      headlessV1OAuthApp_universal_d_GenerateOAuthAppSecretRequest as GenerateOAuthAppSecretRequest,
      headlessV1OAuthApp_universal_d_GenerateOAuthAppSecretResponse as GenerateOAuthAppSecretResponse,
      headlessV1OAuthApp_universal_d_MetaSiteSpecialEvent as MetaSiteSpecialEvent,
      headlessV1OAuthApp_universal_d_MetaSiteSpecialEventPayloadOneOf as MetaSiteSpecialEventPayloadOneOf,
      headlessV1OAuthApp_universal_d_Asset as Asset,
      headlessV1OAuthApp_universal_d_State as State,
      headlessV1OAuthApp_universal_d_SiteCreated as SiteCreated,
      headlessV1OAuthApp_universal_d_SiteCreatedContext as SiteCreatedContext,
      headlessV1OAuthApp_universal_d_Namespace as Namespace,
      headlessV1OAuthApp_universal_d_SiteTransferred as SiteTransferred,
      headlessV1OAuthApp_universal_d_SiteDeleted as SiteDeleted,
      headlessV1OAuthApp_universal_d_DeleteContext as DeleteContext,
      headlessV1OAuthApp_universal_d_DeleteStatus as DeleteStatus,
      headlessV1OAuthApp_universal_d_SiteUndeleted as SiteUndeleted,
      headlessV1OAuthApp_universal_d_SitePublished as SitePublished,
      headlessV1OAuthApp_universal_d_SiteUnpublished as SiteUnpublished,
      headlessV1OAuthApp_universal_d_SiteMarkedAsTemplate as SiteMarkedAsTemplate,
      headlessV1OAuthApp_universal_d_SiteMarkedAsWixSite as SiteMarkedAsWixSite,
      headlessV1OAuthApp_universal_d_ServiceProvisioned as ServiceProvisioned,
      headlessV1OAuthApp_universal_d_ServiceRemoved as ServiceRemoved,
      headlessV1OAuthApp_universal_d_SiteRenamed as SiteRenamed,
      headlessV1OAuthApp_universal_d_SiteHardDeleted as SiteHardDeleted,
      headlessV1OAuthApp_universal_d_NamespaceChanged as NamespaceChanged,
      headlessV1OAuthApp_universal_d_StudioAssigned as StudioAssigned,
      headlessV1OAuthApp_universal_d_StudioUnassigned as StudioUnassigned,
      headlessV1OAuthApp_universal_d_Empty as Empty,
      headlessV1OAuthApp_universal_d_DomainEvent as DomainEvent,
      headlessV1OAuthApp_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      headlessV1OAuthApp_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      headlessV1OAuthApp_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      headlessV1OAuthApp_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      headlessV1OAuthApp_universal_d_ActionEvent as ActionEvent,
      headlessV1OAuthApp_universal_d_createOAuthApp as createOAuthApp,
      headlessV1OAuthApp_universal_d_getOAuthApp as getOAuthApp,
      headlessV1OAuthApp_universal_d_updateOAuthApp as updateOAuthApp,
      headlessV1OAuthApp_universal_d_UpdateOAuthApp as UpdateOAuthApp,
      headlessV1OAuthApp_universal_d_deleteOAuthApp as deleteOAuthApp,
      headlessV1OAuthApp_universal_d_queryOAuthApps as queryOAuthApps,
      headlessV1OAuthApp_universal_d_OAuthAppsQueryResult as OAuthAppsQueryResult,
      headlessV1OAuthApp_universal_d_OAuthAppsQueryBuilder as OAuthAppsQueryBuilder,
      headlessV1OAuthApp_universal_d_generateOAuthAppSecret as generateOAuthAppSecret,
    };
  }
  
  export { headlessV1OAuthApp_universal_d as oAuthApps };
}
