declare module "wix-autocms-tasks-service-v1" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /** Batch data items change task */
  interface Task extends TaskConfigOneOf {
      /** original DeleteByQueryRequest config if DELETE_BY_QUERY task */
      deleteByQuery?: DeleteByQueryRequest;
      /** config in case if UPDATE_DRAFT_PUBLISH task */
      updateDraftPublish?: UpdateDraftPublishConfig;
      /** original CopyFieldDataRequest config if COPY_FIELD_DATA task */
      copyFieldData?: CopyFieldDataRequest;
      /** @readonly */
      _id?: string;
      /** task type */
      type?: Type;
      /** task status */
      status?: Status;
      /** start time, may be empty if NEW */
      startedAt?: Date;
      /** finish time, may be empty until completed */
      finishedAt?: Date;
      /** estimated number of items to be affected by task */
      taskSize?: number;
      /** number of items already processed */
      itemsProcessed?: number;
      /** number of failed items */
      itemsFailed?: number;
      /** list of encountered errors */
      errors?: Error[];
  }
  /** @oneof */
  interface TaskConfigOneOf {
      /** original DeleteByQueryRequest config if DELETE_BY_QUERY task */
      deleteByQuery?: DeleteByQueryRequest;
      /** config in case if UPDATE_DRAFT_PUBLISH task */
      updateDraftPublish?: UpdateDraftPublishConfig;
      /** original CopyFieldDataRequest config if COPY_FIELD_DATA task */
      copyFieldData?: CopyFieldDataRequest;
  }
  enum Type {
      CHANGE_TYPE = "CHANGE_TYPE",
      DELETE_BY_QUERY = "DELETE_BY_QUERY",
      UPDATE_DRAFT_PUBLISH = "UPDATE_DRAFT_PUBLISH",
      COPY_FIELD_DATA = "COPY_FIELD_DATA"
  }
  enum Status {
      NEW = "NEW",
      RUNNING = "RUNNING",
      COMPLETED = "COMPLETED",
      FAILED = "FAILED"
  }
  interface Error {
      /** error message */
      message?: string;
  }
  interface DeleteByQueryRequest {
      /** collection name to delete from */
      collectionName: string;
      /** segment, by default LIVE */
      segment?: Segment;
      /** AppId, required if SANDBOX segment */
      appId?: string | null;
      /** filter to lookup for items, empty will delete all */
      filter?: Record<string, any> | null;
      /** options */
      options?: Options;
  }
  enum Segment {
      LIVE = "LIVE",
      SANDBOX = "SANDBOX"
  }
  interface Options {
      /** application-specific options */
      appOptions?: Record<string, any> | null;
      /** plugin-specific options */
      pluginOptions?: Record<string, any> | null;
  }
  interface UpdateDraftPublishConfig {
      /** original request */
      request?: UpdateDraftPublishRequest;
      /** time used as published/draft time */
      now?: Date;
      /** last updated record ID */
      lastUpdatedId?: string | null;
      /** optional items to update filter, none or empty means all applicable */
      filter?: Record<string, any> | null;
  }
  interface UpdateDraftPublishRequest extends UpdateDraftPublishRequestOperationOneOf {
      /** Set all items to Draft */
      setToDraft?: Empty;
      /** Set all items to Published */
      setToPublished?: Empty;
      /** Schedule all items to Draft on given date */
      scheduleToDraft?: ScheduleOperation;
      /** Schedule all items to Published on given date */
      scheduleToPublished?: ScheduleOperation;
      /** Remove any publishing schedule */
      removeScheduling?: Empty;
      /** collection to update items */
      collectionName: string;
      /** segment, LIVE by default */
      segment?: Segment;
      /** AppID, required if SANDBOX */
      appId?: string | null;
      /** optional items to update filter, none or empty means all applicable */
      filter?: Record<string, any> | null;
  }
  /** @oneof */
  interface UpdateDraftPublishRequestOperationOneOf {
      /** Set all items to Draft */
      setToDraft?: Empty;
      /** Set all items to Published */
      setToPublished?: Empty;
      /** Schedule all items to Draft on given date */
      scheduleToDraft?: ScheduleOperation;
      /** Schedule all items to Published on given date */
      scheduleToPublished?: ScheduleOperation;
      /** Remove any publishing schedule */
      removeScheduling?: Empty;
  }
  interface Empty {
  }
  interface ScheduleOperation {
      /** scheduled draft/publish date */
      date?: Date;
  }
  interface CopyFieldDataRequest {
      /** collection to update items */
      collectionName: string;
      /** segment, LIVE by default */
      segment?: Segment;
      /** AppID, required if SANDBOX */
      appId?: string | null;
      /** field to copy data from */
      sourceField?: string;
      /** field to copy data to */
      targetField?: string;
  }
  interface ListTasksRequest {
      /** Allow paginating, default: limit = 30 and offset = 0 */
      paging?: Paging;
  }
  interface Paging {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface ListTasksResponse {
      /** requested tasks */
      tasks?: Task[];
      /** paging metadata */
      metadata?: PagingMetadataV2;
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
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  interface GetTaskRequest {
      _id?: string;
      /** task ID */
      taskId: string;
  }
  interface GetTaskResponse {
      /** requested task */
      task?: Task;
  }
  interface CancelTaskRequest {
      /** task ID to cancel */
      taskId: string;
  }
  interface CancelTaskResponse {
      /** current task state */
      task?: Task;
  }
  interface TaskSubmitted {
      /** submitted task ID */
      taskId?: string;
  }
  /**
   * Returns a list of tasks, given the provided paging (offset, limit)
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function listTasks(options?: ListTasksOptions): Promise<ListTasksResponse>;
  interface ListTasksOptions {
      /** Allow paginating, default: limit = 30 and offset = 0 */
      paging?: Paging;
  }
  /**
   * Returns a contact with the provided ID
   * @param taskId - task ID
   * @internal
   * @documentationMaturity preview
   * @requiredField taskId
   * @adminMethod
   * @returns requested task
   */
  function getTask(taskId: string, options?: GetTaskOptions): Promise<Task>;
  interface GetTaskOptions {
      _id?: string;
  }
  /**
   * Interrupts task execution
   * @param taskId - task ID to cancel
   * @internal
   * @documentationMaturity preview
   * @requiredField taskId
   * @adminMethod
   */
  function cancelTask(taskId: string): Promise<CancelTaskResponse>;
  /**
   * Deletes collection items by filter
   * @param collectionName - collection name to delete from
   * @internal
   * @documentationMaturity preview
   * @requiredField collectionName
   * @adminMethod
   */
  function deleteByQuery(collectionName: string, options?: DeleteByQueryOptions): Promise<TaskSubmitted>;
  interface DeleteByQueryOptions {
      /** segment, by default LIVE */
      segment?: Segment;
      /** AppId, required if SANDBOX segment */
      appId?: string | null;
      /** filter to lookup for items, empty will delete all */
      filter?: Record<string, any> | null;
      /** options */
      options?: Options;
  }
  /**
   * Updates Draft/Publish status of all items
   * @param collectionName - collection to update items
   * @internal
   * @documentationMaturity preview
   * @requiredField collectionName
   * @adminMethod
   */
  function updateDraftPublish(collectionName: string, options?: UpdateDraftPublishOptions): Promise<TaskSubmitted>;
  interface UpdateDraftPublishOptions extends UpdateDraftPublishRequestOperationOneOf {
      /** segment, LIVE by default */
      segment?: Segment;
      /** AppID, required if SANDBOX */
      appId?: string | null;
      /** optional items to update filter, none or empty means all applicable */
      filter?: Record<string, any> | null;
      /** Set all items to Draft */
      setToDraft?: Empty;
      /** Set all items to Published */
      setToPublished?: Empty;
      /** Schedule all items to Draft on given date */
      scheduleToDraft?: ScheduleOperation;
      /** Schedule all items to Published on given date */
      scheduleToPublished?: ScheduleOperation;
      /** Remove any publishing schedule */
      removeScheduling?: Empty;
  }
  /**
   * Copies all data from one field to another in same collection
   * @param collectionName - collection to update items
   * @internal
   * @documentationMaturity preview
   * @requiredField collectionName
   * @adminMethod
   */
  function copyFieldData(collectionName: string, options?: CopyFieldDataOptions): Promise<TaskSubmitted>;
  interface CopyFieldDataOptions {
      /** segment, LIVE by default */
      segment?: Segment;
      /** AppID, required if SANDBOX */
      appId?: string | null;
      /** field to copy data from */
      sourceField?: string;
      /** field to copy data to */
      targetField?: string;
  }
  
  const dataAutocmsV2BackgroundTask_universal_d___debug: typeof __debug;
  type dataAutocmsV2BackgroundTask_universal_d_Task = Task;
  type dataAutocmsV2BackgroundTask_universal_d_TaskConfigOneOf = TaskConfigOneOf;
  type dataAutocmsV2BackgroundTask_universal_d_Type = Type;
  const dataAutocmsV2BackgroundTask_universal_d_Type: typeof Type;
  type dataAutocmsV2BackgroundTask_universal_d_Status = Status;
  const dataAutocmsV2BackgroundTask_universal_d_Status: typeof Status;
  type dataAutocmsV2BackgroundTask_universal_d_Error = Error;
  type dataAutocmsV2BackgroundTask_universal_d_DeleteByQueryRequest = DeleteByQueryRequest;
  type dataAutocmsV2BackgroundTask_universal_d_Segment = Segment;
  const dataAutocmsV2BackgroundTask_universal_d_Segment: typeof Segment;
  type dataAutocmsV2BackgroundTask_universal_d_Options = Options;
  type dataAutocmsV2BackgroundTask_universal_d_UpdateDraftPublishConfig = UpdateDraftPublishConfig;
  type dataAutocmsV2BackgroundTask_universal_d_UpdateDraftPublishRequest = UpdateDraftPublishRequest;
  type dataAutocmsV2BackgroundTask_universal_d_UpdateDraftPublishRequestOperationOneOf = UpdateDraftPublishRequestOperationOneOf;
  type dataAutocmsV2BackgroundTask_universal_d_Empty = Empty;
  type dataAutocmsV2BackgroundTask_universal_d_ScheduleOperation = ScheduleOperation;
  type dataAutocmsV2BackgroundTask_universal_d_CopyFieldDataRequest = CopyFieldDataRequest;
  type dataAutocmsV2BackgroundTask_universal_d_ListTasksRequest = ListTasksRequest;
  type dataAutocmsV2BackgroundTask_universal_d_Paging = Paging;
  type dataAutocmsV2BackgroundTask_universal_d_ListTasksResponse = ListTasksResponse;
  type dataAutocmsV2BackgroundTask_universal_d_PagingMetadataV2 = PagingMetadataV2;
  type dataAutocmsV2BackgroundTask_universal_d_Cursors = Cursors;
  type dataAutocmsV2BackgroundTask_universal_d_GetTaskRequest = GetTaskRequest;
  type dataAutocmsV2BackgroundTask_universal_d_GetTaskResponse = GetTaskResponse;
  type dataAutocmsV2BackgroundTask_universal_d_CancelTaskRequest = CancelTaskRequest;
  type dataAutocmsV2BackgroundTask_universal_d_CancelTaskResponse = CancelTaskResponse;
  type dataAutocmsV2BackgroundTask_universal_d_TaskSubmitted = TaskSubmitted;
  const dataAutocmsV2BackgroundTask_universal_d_listTasks: typeof listTasks;
  type dataAutocmsV2BackgroundTask_universal_d_ListTasksOptions = ListTasksOptions;
  const dataAutocmsV2BackgroundTask_universal_d_getTask: typeof getTask;
  type dataAutocmsV2BackgroundTask_universal_d_GetTaskOptions = GetTaskOptions;
  const dataAutocmsV2BackgroundTask_universal_d_cancelTask: typeof cancelTask;
  const dataAutocmsV2BackgroundTask_universal_d_deleteByQuery: typeof deleteByQuery;
  type dataAutocmsV2BackgroundTask_universal_d_DeleteByQueryOptions = DeleteByQueryOptions;
  const dataAutocmsV2BackgroundTask_universal_d_updateDraftPublish: typeof updateDraftPublish;
  type dataAutocmsV2BackgroundTask_universal_d_UpdateDraftPublishOptions = UpdateDraftPublishOptions;
  const dataAutocmsV2BackgroundTask_universal_d_copyFieldData: typeof copyFieldData;
  type dataAutocmsV2BackgroundTask_universal_d_CopyFieldDataOptions = CopyFieldDataOptions;
  namespace dataAutocmsV2BackgroundTask_universal_d {
    export {
      dataAutocmsV2BackgroundTask_universal_d___debug as __debug,
      dataAutocmsV2BackgroundTask_universal_d_Task as Task,
      dataAutocmsV2BackgroundTask_universal_d_TaskConfigOneOf as TaskConfigOneOf,
      dataAutocmsV2BackgroundTask_universal_d_Type as Type,
      dataAutocmsV2BackgroundTask_universal_d_Status as Status,
      dataAutocmsV2BackgroundTask_universal_d_Error as Error,
      dataAutocmsV2BackgroundTask_universal_d_DeleteByQueryRequest as DeleteByQueryRequest,
      dataAutocmsV2BackgroundTask_universal_d_Segment as Segment,
      dataAutocmsV2BackgroundTask_universal_d_Options as Options,
      dataAutocmsV2BackgroundTask_universal_d_UpdateDraftPublishConfig as UpdateDraftPublishConfig,
      dataAutocmsV2BackgroundTask_universal_d_UpdateDraftPublishRequest as UpdateDraftPublishRequest,
      dataAutocmsV2BackgroundTask_universal_d_UpdateDraftPublishRequestOperationOneOf as UpdateDraftPublishRequestOperationOneOf,
      dataAutocmsV2BackgroundTask_universal_d_Empty as Empty,
      dataAutocmsV2BackgroundTask_universal_d_ScheduleOperation as ScheduleOperation,
      dataAutocmsV2BackgroundTask_universal_d_CopyFieldDataRequest as CopyFieldDataRequest,
      dataAutocmsV2BackgroundTask_universal_d_ListTasksRequest as ListTasksRequest,
      dataAutocmsV2BackgroundTask_universal_d_Paging as Paging,
      dataAutocmsV2BackgroundTask_universal_d_ListTasksResponse as ListTasksResponse,
      dataAutocmsV2BackgroundTask_universal_d_PagingMetadataV2 as PagingMetadataV2,
      dataAutocmsV2BackgroundTask_universal_d_Cursors as Cursors,
      dataAutocmsV2BackgroundTask_universal_d_GetTaskRequest as GetTaskRequest,
      dataAutocmsV2BackgroundTask_universal_d_GetTaskResponse as GetTaskResponse,
      dataAutocmsV2BackgroundTask_universal_d_CancelTaskRequest as CancelTaskRequest,
      dataAutocmsV2BackgroundTask_universal_d_CancelTaskResponse as CancelTaskResponse,
      dataAutocmsV2BackgroundTask_universal_d_TaskSubmitted as TaskSubmitted,
      dataAutocmsV2BackgroundTask_universal_d_listTasks as listTasks,
      dataAutocmsV2BackgroundTask_universal_d_ListTasksOptions as ListTasksOptions,
      dataAutocmsV2BackgroundTask_universal_d_getTask as getTask,
      dataAutocmsV2BackgroundTask_universal_d_GetTaskOptions as GetTaskOptions,
      dataAutocmsV2BackgroundTask_universal_d_cancelTask as cancelTask,
      dataAutocmsV2BackgroundTask_universal_d_deleteByQuery as deleteByQuery,
      dataAutocmsV2BackgroundTask_universal_d_DeleteByQueryOptions as DeleteByQueryOptions,
      dataAutocmsV2BackgroundTask_universal_d_updateDraftPublish as updateDraftPublish,
      dataAutocmsV2BackgroundTask_universal_d_UpdateDraftPublishOptions as UpdateDraftPublishOptions,
      dataAutocmsV2BackgroundTask_universal_d_copyFieldData as copyFieldData,
      dataAutocmsV2BackgroundTask_universal_d_CopyFieldDataOptions as CopyFieldDataOptions,
    };
  }
  
  export { dataAutocmsV2BackgroundTask_universal_d as autocms };
}
