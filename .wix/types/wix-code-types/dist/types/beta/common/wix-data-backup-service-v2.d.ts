declare module "wix-data-backup-service-v2" {
  interface GCBackup {
      /** @readonly */
      _id?: string;
  }
  interface CreateGCBackupRequest {
      instanceId?: string;
      segment?: Segment;
      clusterId?: string;
      databaseName?: string;
  }
  enum Segment {
      Dev = "Dev",
      Public = "Public"
  }
  interface CreateGCBackupResponse {
      backupId?: string | null;
  }
  interface GetGCBackupRequest {
      backupId?: string;
  }
  interface GCBackupResponse {
      backupId?: string;
      instanceId?: string;
      segment?: Segment;
      clusterId?: string;
      databaseName?: string;
      status?: GCBackupResponseStatus;
      size?: string | null;
      requestedDate?: Date;
      finishedDate?: Date;
      restorations?: GCBackupResponseRestoration[];
  }
  enum GCBackupResponseRestorationStatus {
      PENDING = "PENDING",
      FAILED = "FAILED",
      COMPLETED = "COMPLETED",
      CANCELED = "CANCELED"
  }
  enum GCBackupResponseStatus {
      PENDING = "PENDING",
      READY = "READY",
      FAILED = "FAILED",
      CANCELED = "CANCELED"
  }
  interface GCBackupResponseRestoration {
      restorationId?: string;
      clusterId?: string;
      databaseName?: string;
      status?: GCBackupResponseRestorationStatus;
  }
  interface FindGCBackupRequest {
      instanceId?: string;
      segment?: Segment;
      clusterId?: string;
      databaseName?: string;
  }
  interface FindGCBackupResponse {
      backups?: GCBackupResponse[];
  }
  interface RestoreGCBackupRequest {
      instanceId?: string;
      backupId?: string;
      clusterId?: string;
      databaseName?: string;
  }
  interface RestoreGCBackupResponse {
      restorationId?: string;
  }
  interface CancelGCBackupRequest {
      backupId?: string;
  }
  interface CancelGCBackupResponse {
  }
  interface CancelGCRestorationRequest {
      backupId?: string;
      restorationId?: string;
  }
  interface CancelGCRestorationResponse {
  }
  interface DeleteExpiredBackupRecordsRequest {
  }
  interface DeleteExpiredBackupRecordsResponse {
  }
  interface Backup {
      /**
       * Backup ID.
       * @readonly
       */
      _id?: string;
      /**
       * Backup status.
       * * `PENDING`: Backup creation is in progress.
       * * `READY`: Backup has been created successfully and can be used for data restoration.
       * * `FAILED`: Backup creation has failed.
       * * `DELETED`: Backup has been deleted.
       * * `CANCELED`: Backup has been canceled.
       * @readonly
       */
      status?: Status;
      /**
       * Type of backup, based on how it was triggered.
       * * `ON_DEMAND`: Backup created on demand.
       * * `AUTO`: Backup created automatically on a regular schedule.
       * @readonly
       */
      type?: Type;
      /**
       * Date and time the backup was requested.
       * @readonly
       */
      requestedDate?: Date;
      /**
       * Date and time the backup commenced. Value is `null` until the backup process begins in the background.
       * @readonly
       */
      startedDate?: Date;
      /**
       * Date and time the backup process finished. Value is `null` until the backup process is completed in the background.
       * @readonly
       */
      finishedDate?: Date;
      /**
       * Date and time the backup was deleted. Value is `null` if that backup hasn't been deleted.
       * @readonly
       */
      deletedDate?: Date;
      /**
       * Backup size in bytes. Value is `null` until the backup process is completed.
       * @readonly
       */
      sizeInBytes?: string | null;
      /**
       * IDs and display names of collections the backup contains.
       * @readonly
       */
      collections?: Collection[];
  }
  enum Status {
      /** Backup creation is in progress. */
      PENDING = "PENDING",
      /** Backup has been created successfully and can be used for data restoration. */
      READY = "READY",
      /** Backup creation has failed. */
      FAILED = "FAILED",
      /** Backup has been deleted. */
      DELETED = "DELETED",
      /** Backup has been canceled. */
      CANCELED = "CANCELED"
  }
  enum Type {
      /** Backup taken on demand. */
      ON_DEMAND = "ON_DEMAND",
      /** Automatically triggered backup (taken repeatedly on a regular interval). */
      AUTO = "AUTO"
  }
  interface Collection {
      /**
       * Collection ID.
       * @readonly
       */
      _id?: string;
      /**
       * Collection display name.
       * @readonly
       */
      displayName?: string | null;
  }
  interface DisableInstanceRequest {
      instanceId?: string;
  }
  interface Empty {
  }
  interface EnableInstanceRequest {
      instanceId?: string;
  }
  interface DeleteAllRequest {
      instanceId?: string;
  }
  interface RebuildRequest {
      backupId?: string;
  }
  interface MoveRequest {
      backupId?: string;
  }
  interface RemoveDeletedRequest {
      limit?: number;
  }
  interface FailRestorationRequest {
      restorationId?: string;
  }
  interface TakeBackupRequest {
      instanceId?: string;
      type?: Type;
  }
  interface UpdateBackupMetadataRequest {
      backupId?: string;
      s3Region?: string;
      s3Bucket?: string;
  }
  /** event triggered when backup state is changed (i.e. it was created, started, completed or failed) */
  interface BackupStateChanged {
      /**
       * current state of backup
       * @readonly
       */
      backup?: Backup;
  }
  /** event triggered when backup restoration state is changed (i.e. it was created, started or completed) */
  interface RestorationStateChanged {
      /**
       * current state of restoration
       * @readonly
       */
      restoration?: Restoration;
  }
  interface Restoration {
      /**
       * Restoration ID.
       * @readonly
       */
      _id?: string;
      /**
       * Details of the backup used for the restoration.
       * @readonly
       */
      backup?: Backup;
      /**
       * Status of restoration.
       * * `PENDING`: Restoration from a backup is in progress.
       * * `COMPLETED`: Restoration from a backup has been successful.
       * * `FAILED`: Restoration from a backup has failed.
       * @readonly
       */
      status?: RestorationStatus;
      /**
       * Date and time the restoration was requested.
       * @readonly
       */
      requestedDate?: Date;
      /**
       * Date and time the restoration commenced. Value is `null` until the restoration process begins in the background.
       * @readonly
       */
      startedDate?: Date;
      /**
       * Date and time the restoration finished. Value is `null` until the restoration process is completed in the background.
       * @readonly
       */
      finishedDate?: Date;
      /**
       * List of collections restored.
       * @readonly
       */
      collections?: Collection[];
  }
  enum RestorationStatus {
      /** Restoration from a backup is in progress. */
      PENDING = "PENDING",
      /** Restoration from a backup has been successful. */
      COMPLETED = "COMPLETED",
      /** Restoration from a backup has failed. */
      FAILED = "FAILED"
  }
  interface CreateBackupRequest {
      /**
       * Type of backup to create. Default value is `ON_DEMAND`.
       * @internal
       */
      type?: Type;
  }
  interface CreateBackupResponse {
      /** Details of the requested backup. */
      backup?: Backup;
  }
  interface ListBackupsRequest {
      /**
       * Statuses to filter by.
       * If provided, only backups with the specified statuses are listed.
       * For example, to list only completed backups, use `?status=READY`.
       * To list completed and pending backups, use `?status=READY&status=PENDING`.
       *
       * - **`PENDING`**: A backup that was initiated but isn't yet completed.
       * - **`READY`**: A successfully completed backup.
       * - **`FAILED`**: A backup that was initiated but didn't successfully complete.
       * - **`DELETED`**: A successfully deleted backup.
       * - **`CANCELED`**: A backup that was canceled after being initiated.
       *
       * Default: No filtering
       */
      status?: Status[];
      /**
       * Type to filter by. If provided, only backups of the specified type are listed.
       *
       * - **`AUTO`**: A backup taken automatically by the system on a regular schedule.
       * - **`ON_DEMAND`**: A backup initiated manually.
       *
       * Default: No filtering
       */
      type?: Type[];
      /** Paging preferences. */
      paging?: Paging;
  }
  interface Paging {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface ListBackupsResponse {
      /** Retrieved backups. */
      backups?: Backup[];
      /** Paging information. */
      pagingMetadata?: PagingMetadataV2;
  }
  interface PagingMetadataV2 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      offset?: number | null;
      /** Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set. */
      total?: number | null;
  }
  interface RestoreBackupRequest {
      /** ID of backup to be restored. */
      backupId: string;
  }
  interface RestoreBackupResponse {
      /** Details of data restoration from backup. */
      restoration?: Restoration;
  }
  interface RestorePartialBackupRequest {
      /** ID of backup to be restored. */
      backupId: string;
      /**
       * Collections to be restored.
       *
       * **Note**: If two collections have a multireference relation, the references will be restored only if both collections are restored.
       */
      dataCollectionIds: string[];
  }
  interface ListRestorationsRequest {
      /**
       * Statuses to filter by. If provided, only restorations with the specified statuses are listed.
       * For example, to list only completed restorations, use `?status=COMPLETED`.
       * To list completed and pending restorations, use `?status=COMPLETED&status=PENDING`.
       *
       * - **`PENDING`**: A restoration that was initiated but isn't yet completed.
       * - **`COMPLETED`**: A successfully completed restoration.
       * - **`FAILED`**: A restoration that was initiated but didn't successfully complete.
       *
       * Default: No filtering
       */
      status?: RestorationStatus[];
      /** Offset and limit of items to retrieve. */
      paging?: Paging;
  }
  interface ListRestorationsResponse {
      /** Retrieved restorations. */
      restorations?: Restoration[];
      /** Paging information. */
      pagingMetadata?: PagingMetadataV2;
  }
  interface DeleteBackupRequest {
      /** ID of the backup to be deleted. */
      backupId: string;
  }
  interface DeleteBackupResponse {
  }
  interface CancelBackupRequest {
      /** ID of the backup to be cancelled. */
      backupId: string;
  }
  interface CancelBackupResponse {
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
   * Creates an on-demand backup of live content in a site's collections.
   *
   *
   * By default, all of the site's collections are included in the backup. For a partial backup, specify which collections to include in the `backup.collections` parameter.
   *
   * The process of creating a backup takes time.
   * You can check whether a backup has completed successfully with [List Backups]().
   *
   * You can store up to 3 on-demand backups for each site.
   * If 3 on-demand backups already exist, the oldest existing on-demand backup for the site is deleted when a new one is created. Automated backups are not affected.
   * @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function createBackup(options?: CreateBackupOptions): Promise<CreateBackupResponse>;
  interface CreateBackupOptions {
      /**
       * Type of backup to create. Default value is `ON_DEMAND`.
       * @internal
       */
      type?: Type;
  }
  /**
   * Retrieves a list of all backups for a site.
   *
   * Results are sorted by requested date, with the newest first.
   *
   * You can use this endpoint to check whether a backup initiated with [Create Backup]() has been completed successfully.
   * @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function listBackups(options?: ListBackupsOptions): Promise<ListBackupsResponse>;
  interface ListBackupsOptions {
      /**
       * Statuses to filter by.
       * If provided, only backups with the specified statuses are listed.
       * For example, to list only completed backups, use `?status=READY`.
       * To list completed and pending backups, use `?status=READY&status=PENDING`.
       *
       * - **`PENDING`**: A backup that was initiated but isn't yet completed.
       * - **`READY`**: A successfully completed backup.
       * - **`FAILED`**: A backup that was initiated but didn't successfully complete.
       * - **`DELETED`**: A successfully deleted backup.
       * - **`CANCELED`**: A backup that was canceled after being initiated.
       *
       * Default: No filtering
       */
      status?: Status[];
      /**
       * Type to filter by. If provided, only backups of the specified type are listed.
       *
       * - **`AUTO`**: A backup taken automatically by the system on a regular schedule.
       * - **`ON_DEMAND`**: A backup initiated manually.
       *
       * Default: No filtering
       */
      type?: Type[];
      /** Paging preferences. */
      paging?: Paging;
  }
  /**
   * Restores all data from a backup.
   *
   * The process of restoring data from a backup takes time.
   * You can check whether your restoration has completed successfully with [List Restorations]().
   * @param backupId - ID of backup to be restored.
   * @public
   * @documentationMaturity preview
   * @requiredField backupId
   * @adminMethod
   */
  function restoreBackup(backupId: string): Promise<RestoreBackupResponse>;
  /**
   * Restores specific collections from a backup.
   *
   * The process of restoring data from a backup takes time.
   * You can check whether your restoration has completed successfully with [List Restorations]().
   * @param backupId - ID of backup to be restored.
   * @param dataCollectionIds - Collections to be restored.
   *
   * **Note**: If two collections have a multireference relation, the references will be restored only if both collections are restored.
   * @public
   * @documentationMaturity preview
   * @requiredField backupId
   * @requiredField dataCollectionIds
   * @adminMethod
   */
  function restorePartialBackup(backupId: string, dataCollectionIds: string[]): Promise<RestoreBackupResponse>;
  /**
   * Retrieves a list of all data restorations from backups.
   *
   * Results are sorted by requested date, with the newest first.
   *
   * You can use this endpoint to check whether a restoration initiated with [Restore Backup]() has been completed successfully.
   * @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function listRestorations(options?: ListRestorationsOptions): Promise<ListRestorationsResponse>;
  interface ListRestorationsOptions {
      /**
       * Statuses to filter by. If provided, only restorations with the specified statuses are listed.
       * For example, to list only completed restorations, use `?status=COMPLETED`.
       * To list completed and pending restorations, use `?status=COMPLETED&status=PENDING`.
       *
       * - **`PENDING`**: A restoration that was initiated but isn't yet completed.
       * - **`COMPLETED`**: A successfully completed restoration.
       * - **`FAILED`**: A restoration that was initiated but didn't successfully complete.
       *
       * Default: No filtering
       */
      status?: RestorationStatus[];
      /** Offset and limit of items to retrieve. */
      paging?: Paging;
  }
  /**
   * Deletes a backup.
   *
   * The process of deleting a backup takes time.
   * You can check whether a backup has been deleted successfully with [List Backups]().
   * @param backupId - ID of the backup to be deleted.
   * @public
   * @documentationMaturity preview
   * @requiredField backupId
   * @adminMethod
   */
  function deleteBackup(backupId: string): Promise<void>;
  /**
   * Cancels a backup.
   *
   * This endpoint is used to cancel a backup that was initiated with [Create Backup]() and is still underway.
   * The process of canceling a backup takes time. You can check whether your backup has been canceled successfully with [List Backups]().
   * @param backupId - ID of the backup to be cancelled.
   * @internal
   * @documentationMaturity preview
   * @requiredField backupId
   * @adminMethod
   */
  function cancelBackup(backupId: string): Promise<void>;
  
  type dataV2Backup_universal_d_GCBackup = GCBackup;
  type dataV2Backup_universal_d_CreateGCBackupRequest = CreateGCBackupRequest;
  type dataV2Backup_universal_d_Segment = Segment;
  const dataV2Backup_universal_d_Segment: typeof Segment;
  type dataV2Backup_universal_d_CreateGCBackupResponse = CreateGCBackupResponse;
  type dataV2Backup_universal_d_GetGCBackupRequest = GetGCBackupRequest;
  type dataV2Backup_universal_d_GCBackupResponse = GCBackupResponse;
  type dataV2Backup_universal_d_GCBackupResponseRestorationStatus = GCBackupResponseRestorationStatus;
  const dataV2Backup_universal_d_GCBackupResponseRestorationStatus: typeof GCBackupResponseRestorationStatus;
  type dataV2Backup_universal_d_GCBackupResponseStatus = GCBackupResponseStatus;
  const dataV2Backup_universal_d_GCBackupResponseStatus: typeof GCBackupResponseStatus;
  type dataV2Backup_universal_d_GCBackupResponseRestoration = GCBackupResponseRestoration;
  type dataV2Backup_universal_d_FindGCBackupRequest = FindGCBackupRequest;
  type dataV2Backup_universal_d_FindGCBackupResponse = FindGCBackupResponse;
  type dataV2Backup_universal_d_RestoreGCBackupRequest = RestoreGCBackupRequest;
  type dataV2Backup_universal_d_RestoreGCBackupResponse = RestoreGCBackupResponse;
  type dataV2Backup_universal_d_CancelGCBackupRequest = CancelGCBackupRequest;
  type dataV2Backup_universal_d_CancelGCBackupResponse = CancelGCBackupResponse;
  type dataV2Backup_universal_d_CancelGCRestorationRequest = CancelGCRestorationRequest;
  type dataV2Backup_universal_d_CancelGCRestorationResponse = CancelGCRestorationResponse;
  type dataV2Backup_universal_d_DeleteExpiredBackupRecordsRequest = DeleteExpiredBackupRecordsRequest;
  type dataV2Backup_universal_d_DeleteExpiredBackupRecordsResponse = DeleteExpiredBackupRecordsResponse;
  type dataV2Backup_universal_d_Backup = Backup;
  type dataV2Backup_universal_d_Status = Status;
  const dataV2Backup_universal_d_Status: typeof Status;
  type dataV2Backup_universal_d_Type = Type;
  const dataV2Backup_universal_d_Type: typeof Type;
  type dataV2Backup_universal_d_Collection = Collection;
  type dataV2Backup_universal_d_DisableInstanceRequest = DisableInstanceRequest;
  type dataV2Backup_universal_d_Empty = Empty;
  type dataV2Backup_universal_d_EnableInstanceRequest = EnableInstanceRequest;
  type dataV2Backup_universal_d_DeleteAllRequest = DeleteAllRequest;
  type dataV2Backup_universal_d_RebuildRequest = RebuildRequest;
  type dataV2Backup_universal_d_MoveRequest = MoveRequest;
  type dataV2Backup_universal_d_RemoveDeletedRequest = RemoveDeletedRequest;
  type dataV2Backup_universal_d_FailRestorationRequest = FailRestorationRequest;
  type dataV2Backup_universal_d_TakeBackupRequest = TakeBackupRequest;
  type dataV2Backup_universal_d_UpdateBackupMetadataRequest = UpdateBackupMetadataRequest;
  type dataV2Backup_universal_d_BackupStateChanged = BackupStateChanged;
  type dataV2Backup_universal_d_RestorationStateChanged = RestorationStateChanged;
  type dataV2Backup_universal_d_Restoration = Restoration;
  type dataV2Backup_universal_d_RestorationStatus = RestorationStatus;
  const dataV2Backup_universal_d_RestorationStatus: typeof RestorationStatus;
  type dataV2Backup_universal_d_CreateBackupRequest = CreateBackupRequest;
  type dataV2Backup_universal_d_CreateBackupResponse = CreateBackupResponse;
  type dataV2Backup_universal_d_ListBackupsRequest = ListBackupsRequest;
  type dataV2Backup_universal_d_Paging = Paging;
  type dataV2Backup_universal_d_ListBackupsResponse = ListBackupsResponse;
  type dataV2Backup_universal_d_PagingMetadataV2 = PagingMetadataV2;
  type dataV2Backup_universal_d_RestoreBackupRequest = RestoreBackupRequest;
  type dataV2Backup_universal_d_RestoreBackupResponse = RestoreBackupResponse;
  type dataV2Backup_universal_d_RestorePartialBackupRequest = RestorePartialBackupRequest;
  type dataV2Backup_universal_d_ListRestorationsRequest = ListRestorationsRequest;
  type dataV2Backup_universal_d_ListRestorationsResponse = ListRestorationsResponse;
  type dataV2Backup_universal_d_DeleteBackupRequest = DeleteBackupRequest;
  type dataV2Backup_universal_d_DeleteBackupResponse = DeleteBackupResponse;
  type dataV2Backup_universal_d_CancelBackupRequest = CancelBackupRequest;
  type dataV2Backup_universal_d_CancelBackupResponse = CancelBackupResponse;
  type dataV2Backup_universal_d_DomainEvent = DomainEvent;
  type dataV2Backup_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type dataV2Backup_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type dataV2Backup_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type dataV2Backup_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type dataV2Backup_universal_d_ActionEvent = ActionEvent;
  type dataV2Backup_universal_d_MessageEnvelope = MessageEnvelope;
  type dataV2Backup_universal_d_IdentificationData = IdentificationData;
  type dataV2Backup_universal_d_IdentificationDataIdOneOf = IdentificationDataIdOneOf;
  type dataV2Backup_universal_d_WebhookIdentityType = WebhookIdentityType;
  const dataV2Backup_universal_d_WebhookIdentityType: typeof WebhookIdentityType;
  const dataV2Backup_universal_d_createBackup: typeof createBackup;
  type dataV2Backup_universal_d_CreateBackupOptions = CreateBackupOptions;
  const dataV2Backup_universal_d_listBackups: typeof listBackups;
  type dataV2Backup_universal_d_ListBackupsOptions = ListBackupsOptions;
  const dataV2Backup_universal_d_restoreBackup: typeof restoreBackup;
  const dataV2Backup_universal_d_restorePartialBackup: typeof restorePartialBackup;
  const dataV2Backup_universal_d_listRestorations: typeof listRestorations;
  type dataV2Backup_universal_d_ListRestorationsOptions = ListRestorationsOptions;
  const dataV2Backup_universal_d_deleteBackup: typeof deleteBackup;
  const dataV2Backup_universal_d_cancelBackup: typeof cancelBackup;
  namespace dataV2Backup_universal_d {
    export {
      dataV2Backup_universal_d_GCBackup as GCBackup,
      dataV2Backup_universal_d_CreateGCBackupRequest as CreateGCBackupRequest,
      dataV2Backup_universal_d_Segment as Segment,
      dataV2Backup_universal_d_CreateGCBackupResponse as CreateGCBackupResponse,
      dataV2Backup_universal_d_GetGCBackupRequest as GetGCBackupRequest,
      dataV2Backup_universal_d_GCBackupResponse as GCBackupResponse,
      dataV2Backup_universal_d_GCBackupResponseRestorationStatus as GCBackupResponseRestorationStatus,
      dataV2Backup_universal_d_GCBackupResponseStatus as GCBackupResponseStatus,
      dataV2Backup_universal_d_GCBackupResponseRestoration as GCBackupResponseRestoration,
      dataV2Backup_universal_d_FindGCBackupRequest as FindGCBackupRequest,
      dataV2Backup_universal_d_FindGCBackupResponse as FindGCBackupResponse,
      dataV2Backup_universal_d_RestoreGCBackupRequest as RestoreGCBackupRequest,
      dataV2Backup_universal_d_RestoreGCBackupResponse as RestoreGCBackupResponse,
      dataV2Backup_universal_d_CancelGCBackupRequest as CancelGCBackupRequest,
      dataV2Backup_universal_d_CancelGCBackupResponse as CancelGCBackupResponse,
      dataV2Backup_universal_d_CancelGCRestorationRequest as CancelGCRestorationRequest,
      dataV2Backup_universal_d_CancelGCRestorationResponse as CancelGCRestorationResponse,
      dataV2Backup_universal_d_DeleteExpiredBackupRecordsRequest as DeleteExpiredBackupRecordsRequest,
      dataV2Backup_universal_d_DeleteExpiredBackupRecordsResponse as DeleteExpiredBackupRecordsResponse,
      dataV2Backup_universal_d_Backup as Backup,
      dataV2Backup_universal_d_Status as Status,
      dataV2Backup_universal_d_Type as Type,
      dataV2Backup_universal_d_Collection as Collection,
      dataV2Backup_universal_d_DisableInstanceRequest as DisableInstanceRequest,
      dataV2Backup_universal_d_Empty as Empty,
      dataV2Backup_universal_d_EnableInstanceRequest as EnableInstanceRequest,
      dataV2Backup_universal_d_DeleteAllRequest as DeleteAllRequest,
      dataV2Backup_universal_d_RebuildRequest as RebuildRequest,
      dataV2Backup_universal_d_MoveRequest as MoveRequest,
      dataV2Backup_universal_d_RemoveDeletedRequest as RemoveDeletedRequest,
      dataV2Backup_universal_d_FailRestorationRequest as FailRestorationRequest,
      dataV2Backup_universal_d_TakeBackupRequest as TakeBackupRequest,
      dataV2Backup_universal_d_UpdateBackupMetadataRequest as UpdateBackupMetadataRequest,
      dataV2Backup_universal_d_BackupStateChanged as BackupStateChanged,
      dataV2Backup_universal_d_RestorationStateChanged as RestorationStateChanged,
      dataV2Backup_universal_d_Restoration as Restoration,
      dataV2Backup_universal_d_RestorationStatus as RestorationStatus,
      dataV2Backup_universal_d_CreateBackupRequest as CreateBackupRequest,
      dataV2Backup_universal_d_CreateBackupResponse as CreateBackupResponse,
      dataV2Backup_universal_d_ListBackupsRequest as ListBackupsRequest,
      dataV2Backup_universal_d_Paging as Paging,
      dataV2Backup_universal_d_ListBackupsResponse as ListBackupsResponse,
      dataV2Backup_universal_d_PagingMetadataV2 as PagingMetadataV2,
      dataV2Backup_universal_d_RestoreBackupRequest as RestoreBackupRequest,
      dataV2Backup_universal_d_RestoreBackupResponse as RestoreBackupResponse,
      dataV2Backup_universal_d_RestorePartialBackupRequest as RestorePartialBackupRequest,
      dataV2Backup_universal_d_ListRestorationsRequest as ListRestorationsRequest,
      dataV2Backup_universal_d_ListRestorationsResponse as ListRestorationsResponse,
      dataV2Backup_universal_d_DeleteBackupRequest as DeleteBackupRequest,
      dataV2Backup_universal_d_DeleteBackupResponse as DeleteBackupResponse,
      dataV2Backup_universal_d_CancelBackupRequest as CancelBackupRequest,
      dataV2Backup_universal_d_CancelBackupResponse as CancelBackupResponse,
      dataV2Backup_universal_d_DomainEvent as DomainEvent,
      dataV2Backup_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      dataV2Backup_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      dataV2Backup_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      dataV2Backup_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      dataV2Backup_universal_d_ActionEvent as ActionEvent,
      dataV2Backup_universal_d_MessageEnvelope as MessageEnvelope,
      dataV2Backup_universal_d_IdentificationData as IdentificationData,
      dataV2Backup_universal_d_IdentificationDataIdOneOf as IdentificationDataIdOneOf,
      dataV2Backup_universal_d_WebhookIdentityType as WebhookIdentityType,
      dataV2Backup_universal_d_createBackup as createBackup,
      dataV2Backup_universal_d_CreateBackupOptions as CreateBackupOptions,
      dataV2Backup_universal_d_listBackups as listBackups,
      dataV2Backup_universal_d_ListBackupsOptions as ListBackupsOptions,
      dataV2Backup_universal_d_restoreBackup as restoreBackup,
      dataV2Backup_universal_d_restorePartialBackup as restorePartialBackup,
      dataV2Backup_universal_d_listRestorations as listRestorations,
      dataV2Backup_universal_d_ListRestorationsOptions as ListRestorationsOptions,
      dataV2Backup_universal_d_deleteBackup as deleteBackup,
      dataV2Backup_universal_d_cancelBackup as cancelBackup,
    };
  }
  
  export { dataV2Backup_universal_d as data };
}
