declare module "wix-data-resourceusage-service-v1" {
  /** ResourceUsage describes site-wide resource limits and usage */
  interface ResourceUsage {
      /**
       * Used storage sum of Sandbox and Live environments, bytes
       * Replaced by live_used_storage_in_bytes
       */
      totalUsedStorageInBytes?: string | null;
      /** Max storage, bytes */
      totalUsedStorageInBytesLimit?: string | null;
      /** Total number of native collections created */
      collectionCount?: number | null;
      /** Max number of native collections allowed */
      collectionCountLimit?: number | null;
      /**
       * Total number of items in native collections sum of Sandbox and Live environments
       * Replaced by live_item_count
       */
      totalItemCount?: string | null;
      /** Max number of items in native collections */
      totalItemCountLimit?: string | null;
      /** Resource usages per data collection */
      dataCollectionUsages?: DataCollectionResourceUsage[];
      /** Used storage in Live environment */
      liveUsedStorageInBytes?: string | null;
      /** Number of items in native collections in Live environment */
      liveItemCount?: string | null;
      /** Used storage in Sandbox environment */
      sandboxUsedStorageInBytes?: string | null;
      /** Number of items in native collections in Sandbox environment */
      sandboxItemCount?: string | null;
  }
  interface DataCollectionResourceUsage {
      /** Data Collection ID */
      dataCollectionId?: string;
      /** Data Collection display name */
      displayName?: string | null;
      /** Data Collection item count in the live environment */
      liveItemCount?: string;
      /** Data Collection item count in the sandbox environment, none if disabled */
      sandboxItemCount?: string | null;
      /** Data Collection used storage in bytes in the live environment */
      liveUsedStorageInBytes?: string;
      /** Data Collection used storage in bytes in the sandbox environment, none if disabled */
      sandboxUsedStorageInBytes?: string | null;
      /** Type of data collection, currently only NATIVE or BLOCKS_APP are returned in this API */
      dataCollectionType?: CollectionType;
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
  interface GetResourceUsageRequest {
      /** ResourceUsage fields to return, if empty all are returned */
      fields?: string[];
      /** If true, operation queries collections for up-to-date values (rather than using cached values) */
      consistentRead?: boolean;
  }
  interface GetResourceUsageResponse {
      /** The retrieved ResourceUsage */
      resourceUsage?: ResourceUsage;
  }
  interface BulkUpdateUsagesRequest {
      updates?: InstanceUsageUpdate[];
  }
  interface DataCollectionResourceUsageUpdate {
      /** Data Collection ID */
      dataCollectionId?: string;
      /** if true present values are added to existing, otherwise values are replaced */
      relative?: boolean;
      /** Data Collection item count in the live environment */
      liveItemCount?: string | null;
      /** Data Collection item count in the sandbox environment */
      sandboxItemCount?: string | null;
      /** Data Collection used storage in bytes in the live environment */
      liveUsedStorageInBytes?: string | null;
      /** Data Collection used storage in bytes in the sandbox environment */
      sandboxUsedStorageInBytes?: string | null;
  }
  enum Segment {
      BOTH = "BOTH",
      LIVE = "LIVE",
      SANDBOX = "SANDBOX"
  }
  interface InstanceUsageUpdate {
      /** Data Instance ID */
      instanceId?: string;
      /** Usage updates per collection */
      collections?: DataCollectionResourceUsageUpdate[];
      /** if true all collections not in the list assumed to have 0 usage */
      allCollectionsPresent?: boolean;
      /** Indicates which segment is being updated */
      segment?: Segment;
  }
  interface BulkUpdateUsagesResponse {
  }
  interface GetStoredUsageRequest {
      instanceId?: string;
  }
  interface GetStoredUsageResponse {
      usages?: DataCollectionResourceUsage[];
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
  interface DataChangeEvent extends DataChangeEventEventOneOf {
      dataChanged?: DataChanged;
      /** resume point is lost so some changes may be lost */
      changesLost?: ChangesLost;
      referenceChanged?: ReferenceChanged;
      /** segment access or mapping changed */
      segmentChanged?: SegmentChanged;
      /** segment migration started to new physical location */
      segmentMigrationStarted?: SegmentMigrationStarted;
  }
  /** @oneof */
  interface DataChangeEventEventOneOf {
      dataChanged?: DataChanged;
      /** resume point is lost so some changes may be lost */
      changesLost?: ChangesLost;
      referenceChanged?: ReferenceChanged;
      /** segment access or mapping changed */
      segmentChanged?: SegmentChanged;
      /** segment migration started to new physical location */
      segmentMigrationStarted?: SegmentMigrationStarted;
  }
  interface DataChanged extends DataChangedChangeOneOf {
      /** inserted document */
      inserted?: Record<string, any> | null;
      /** full replaced document */
      replaced?: Record<string, any> | null;
      /** partial update, removed fields are set to Empty */
      partial?: Record<string, any> | null;
      /** deleted document ID */
      removedId?: string;
      /** physical cluster ID */
      clusterId?: string;
      /**
       * physical source
       * db.collection for MongoDB
       */
      source?: string;
      /** instance ID */
      tenantId?: string;
      /** logical collection name */
      collectionName?: string;
      dataStore?: DataStore;
      documentId?: string;
      clusterTime?: Date;
      /** raw resume token BSON */
      resumeToken?: string;
      /** Initiator of the request */
      initiator?: Initiator;
  }
  /** @oneof */
  interface DataChangedChangeOneOf {
      /** inserted document */
      inserted?: Record<string, any> | null;
      /** full replaced document */
      replaced?: Record<string, any> | null;
      /** partial update, removed fields are set to Empty */
      partial?: Record<string, any> | null;
      /** deleted document ID */
      removedId?: string;
  }
  enum Type {
      /** Initiator is unknown */
      Unknown = "Unknown",
      /** Indicated that write has been initiated by SSR indexer */
      SsrIndexer = "SsrIndexer"
  }
  enum DataStore {
      Dev = "Dev",
      Public = "Public"
  }
  interface Initiator {
      type?: Type;
  }
  interface ChangesLost {
      clusterId?: string;
  }
  interface ReferenceChanged {
      /** physical cluster ID */
      clusterId?: string;
      /**
       * physical source
       * db.collection for MongoDB
       */
      source?: string;
      /** instance ID */
      tenantId?: string;
      dataStore?: DataStore;
      relationshipName?: string;
      leftId?: string;
      rightId?: string;
      /** if reference is set or unset */
      isRemoved?: boolean;
      clusterTime?: Date;
      /** raw resume token BSON */
      resumeToken?: string;
      /** ref created date */
      createdAt?: Date;
  }
  interface SegmentChanged {
      /** physical cluster ID */
      clusterId?: string;
      /**
       * physical source
       * db.collection for MongoDB
       */
      source?: string;
      /** instance ID */
      tenantId?: string;
      /** segment */
      dataStore?: DataStore;
      /** new db name if changed */
      newDatabase?: string | null;
      /** new cluster if changed */
      newClusterId?: string | null;
      /** read permissions if changed */
      readsEnabled?: boolean | null;
      /** write permissions if changed */
      writesEnabled?: boolean | null;
      /** event time */
      clusterTime?: Date;
      /** raw resume token BSON */
      resumeToken?: string;
  }
  interface SegmentMigrationStarted {
      /** physical cluster ID */
      clusterId?: string;
      /**
       * physical source
       * db.collection for MongoDB
       */
      source?: string;
      /** instance ID */
      tenantId?: string;
      /** segment */
      dataStore?: DataStore;
      /** new db name if changed */
      newDatabase?: string;
      /** new cluster if changed */
      newClusterId?: string;
      /** event time */
      clusterTime?: Date;
      /** raw resume token BSON */
      resumeToken?: string;
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
   * Get current Resource Usage
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function getResourceUsage(options?: GetResourceUsageOptions): Promise<GetResourceUsageResponse>;
  interface GetResourceUsageOptions {
      /** ResourceUsage fields to return, if empty all are returned */
      fields?: string[];
      /** If true, operation queries collections for up-to-date values (rather than using cached values) */
      consistentRead?: boolean;
  }
  
  type cloudResourceusageV1ResourceUsage_universal_d_ResourceUsage = ResourceUsage;
  type cloudResourceusageV1ResourceUsage_universal_d_DataCollectionResourceUsage = DataCollectionResourceUsage;
  type cloudResourceusageV1ResourceUsage_universal_d_CollectionType = CollectionType;
  const cloudResourceusageV1ResourceUsage_universal_d_CollectionType: typeof CollectionType;
  type cloudResourceusageV1ResourceUsage_universal_d_GetResourceUsageRequest = GetResourceUsageRequest;
  type cloudResourceusageV1ResourceUsage_universal_d_GetResourceUsageResponse = GetResourceUsageResponse;
  type cloudResourceusageV1ResourceUsage_universal_d_BulkUpdateUsagesRequest = BulkUpdateUsagesRequest;
  type cloudResourceusageV1ResourceUsage_universal_d_DataCollectionResourceUsageUpdate = DataCollectionResourceUsageUpdate;
  type cloudResourceusageV1ResourceUsage_universal_d_Segment = Segment;
  const cloudResourceusageV1ResourceUsage_universal_d_Segment: typeof Segment;
  type cloudResourceusageV1ResourceUsage_universal_d_InstanceUsageUpdate = InstanceUsageUpdate;
  type cloudResourceusageV1ResourceUsage_universal_d_BulkUpdateUsagesResponse = BulkUpdateUsagesResponse;
  type cloudResourceusageV1ResourceUsage_universal_d_GetStoredUsageRequest = GetStoredUsageRequest;
  type cloudResourceusageV1ResourceUsage_universal_d_GetStoredUsageResponse = GetStoredUsageResponse;
  type cloudResourceusageV1ResourceUsage_universal_d_DomainEvent = DomainEvent;
  type cloudResourceusageV1ResourceUsage_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type cloudResourceusageV1ResourceUsage_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type cloudResourceusageV1ResourceUsage_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type cloudResourceusageV1ResourceUsage_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type cloudResourceusageV1ResourceUsage_universal_d_ActionEvent = ActionEvent;
  type cloudResourceusageV1ResourceUsage_universal_d_Empty = Empty;
  type cloudResourceusageV1ResourceUsage_universal_d_DataChangeEvent = DataChangeEvent;
  type cloudResourceusageV1ResourceUsage_universal_d_DataChangeEventEventOneOf = DataChangeEventEventOneOf;
  type cloudResourceusageV1ResourceUsage_universal_d_DataChanged = DataChanged;
  type cloudResourceusageV1ResourceUsage_universal_d_DataChangedChangeOneOf = DataChangedChangeOneOf;
  type cloudResourceusageV1ResourceUsage_universal_d_Type = Type;
  const cloudResourceusageV1ResourceUsage_universal_d_Type: typeof Type;
  type cloudResourceusageV1ResourceUsage_universal_d_DataStore = DataStore;
  const cloudResourceusageV1ResourceUsage_universal_d_DataStore: typeof DataStore;
  type cloudResourceusageV1ResourceUsage_universal_d_Initiator = Initiator;
  type cloudResourceusageV1ResourceUsage_universal_d_ChangesLost = ChangesLost;
  type cloudResourceusageV1ResourceUsage_universal_d_ReferenceChanged = ReferenceChanged;
  type cloudResourceusageV1ResourceUsage_universal_d_SegmentChanged = SegmentChanged;
  type cloudResourceusageV1ResourceUsage_universal_d_SegmentMigrationStarted = SegmentMigrationStarted;
  type cloudResourceusageV1ResourceUsage_universal_d_MessageEnvelope = MessageEnvelope;
  type cloudResourceusageV1ResourceUsage_universal_d_IdentificationData = IdentificationData;
  type cloudResourceusageV1ResourceUsage_universal_d_IdentificationDataIdOneOf = IdentificationDataIdOneOf;
  type cloudResourceusageV1ResourceUsage_universal_d_WebhookIdentityType = WebhookIdentityType;
  const cloudResourceusageV1ResourceUsage_universal_d_WebhookIdentityType: typeof WebhookIdentityType;
  const cloudResourceusageV1ResourceUsage_universal_d_getResourceUsage: typeof getResourceUsage;
  type cloudResourceusageV1ResourceUsage_universal_d_GetResourceUsageOptions = GetResourceUsageOptions;
  namespace cloudResourceusageV1ResourceUsage_universal_d {
    export {
      cloudResourceusageV1ResourceUsage_universal_d_ResourceUsage as ResourceUsage,
      cloudResourceusageV1ResourceUsage_universal_d_DataCollectionResourceUsage as DataCollectionResourceUsage,
      cloudResourceusageV1ResourceUsage_universal_d_CollectionType as CollectionType,
      cloudResourceusageV1ResourceUsage_universal_d_GetResourceUsageRequest as GetResourceUsageRequest,
      cloudResourceusageV1ResourceUsage_universal_d_GetResourceUsageResponse as GetResourceUsageResponse,
      cloudResourceusageV1ResourceUsage_universal_d_BulkUpdateUsagesRequest as BulkUpdateUsagesRequest,
      cloudResourceusageV1ResourceUsage_universal_d_DataCollectionResourceUsageUpdate as DataCollectionResourceUsageUpdate,
      cloudResourceusageV1ResourceUsage_universal_d_Segment as Segment,
      cloudResourceusageV1ResourceUsage_universal_d_InstanceUsageUpdate as InstanceUsageUpdate,
      cloudResourceusageV1ResourceUsage_universal_d_BulkUpdateUsagesResponse as BulkUpdateUsagesResponse,
      cloudResourceusageV1ResourceUsage_universal_d_GetStoredUsageRequest as GetStoredUsageRequest,
      cloudResourceusageV1ResourceUsage_universal_d_GetStoredUsageResponse as GetStoredUsageResponse,
      cloudResourceusageV1ResourceUsage_universal_d_DomainEvent as DomainEvent,
      cloudResourceusageV1ResourceUsage_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      cloudResourceusageV1ResourceUsage_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      cloudResourceusageV1ResourceUsage_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      cloudResourceusageV1ResourceUsage_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      cloudResourceusageV1ResourceUsage_universal_d_ActionEvent as ActionEvent,
      cloudResourceusageV1ResourceUsage_universal_d_Empty as Empty,
      cloudResourceusageV1ResourceUsage_universal_d_DataChangeEvent as DataChangeEvent,
      cloudResourceusageV1ResourceUsage_universal_d_DataChangeEventEventOneOf as DataChangeEventEventOneOf,
      cloudResourceusageV1ResourceUsage_universal_d_DataChanged as DataChanged,
      cloudResourceusageV1ResourceUsage_universal_d_DataChangedChangeOneOf as DataChangedChangeOneOf,
      cloudResourceusageV1ResourceUsage_universal_d_Type as Type,
      cloudResourceusageV1ResourceUsage_universal_d_DataStore as DataStore,
      cloudResourceusageV1ResourceUsage_universal_d_Initiator as Initiator,
      cloudResourceusageV1ResourceUsage_universal_d_ChangesLost as ChangesLost,
      cloudResourceusageV1ResourceUsage_universal_d_ReferenceChanged as ReferenceChanged,
      cloudResourceusageV1ResourceUsage_universal_d_SegmentChanged as SegmentChanged,
      cloudResourceusageV1ResourceUsage_universal_d_SegmentMigrationStarted as SegmentMigrationStarted,
      cloudResourceusageV1ResourceUsage_universal_d_MessageEnvelope as MessageEnvelope,
      cloudResourceusageV1ResourceUsage_universal_d_IdentificationData as IdentificationData,
      cloudResourceusageV1ResourceUsage_universal_d_IdentificationDataIdOneOf as IdentificationDataIdOneOf,
      cloudResourceusageV1ResourceUsage_universal_d_WebhookIdentityType as WebhookIdentityType,
      cloudResourceusageV1ResourceUsage_universal_d_getResourceUsage as getResourceUsage,
      cloudResourceusageV1ResourceUsage_universal_d_GetResourceUsageOptions as GetResourceUsageOptions,
    };
  }
  
  export { cloudResourceusageV1ResourceUsage_universal_d as data };
}
