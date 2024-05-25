declare module "wix-analytics" {
  /** Fetch session ids task. */
  interface Task {
      /** Id. */
      _id?: string;
  }
  /** Filter sessions request. */
  interface FilterSessionsRequest extends FilterSessionsRequestPeriodOneOf, FilterSessionsRequestParamsOneOf {
      /** Custom period with start & end dates provided. */
      customPeriod?: CustomPeriod;
      /** Predefined period. */
      predefinedPeriod?: PredefinedPeriod;
      /** Navigation flow params. */
      navigationFlow?: NavigationFlowSessionsParams;
      /** Conversion funnel sessions params. */
      conversionFunnel?: ConversionFunnelSessionsParams;
      /** Sessions by device params. */
      sessionsByDevice?: SessionsByDeviceParams;
      /** Cache control policy. */
      cacheControl?: CacheControlEnum;
      /** User timezone. If not provided it will be taken from site profile. */
      timezone?: string | null;
  }
  /** @oneof */
  interface FilterSessionsRequestPeriodOneOf {
      /** Custom period with start & end dates provided. */
      customPeriod?: CustomPeriod;
      /** Predefined period. */
      predefinedPeriod?: PredefinedPeriod;
  }
  /** @oneof */
  interface FilterSessionsRequestParamsOneOf {
      /** Navigation flow params. */
      navigationFlow?: NavigationFlowSessionsParams;
      /** Conversion funnel sessions params. */
      conversionFunnel?: ConversionFunnelSessionsParams;
      /** Sessions by device params. */
      sessionsByDevice?: SessionsByDeviceParams;
  }
  /** Cache control policy. */
  enum CacheControlEnum {
      /** Use cache by default. */
      UNDEFINED = "UNDEFINED",
      /** Invalidate data from upstream and write it to cache. */
      INVALIDATE = "INVALIDATE",
      /** Bypass cache. */
      BYPASS = "BYPASS"
  }
  /** Custom period. Doesn't have comparison period, so use with SELECTED_PERIOD. */
  interface CustomPeriod {
      /** Custom period start date in provided timezone. By default in UTC. */
      start?: string;
      /** Custom period end date in provided timezone. By default in UTC. */
      end?: string;
  }
  /** Predefined period. Could be used with comparison period. */
  interface PredefinedPeriod {
      /** Predefined period type. */
      period?: PredefinedPeriodEnum;
  }
  /** Query period. */
  enum PredefinedPeriodEnum {
      /** Today. */
      TODAY = "TODAY",
      /** Yesterday. */
      YESTERDAY = "YESTERDAY",
      /** Last 7 days. */
      LAST_7_DAYS = "LAST_7_DAYS",
      /** Lat 14 days. */
      LAST_14_DAYS = "LAST_14_DAYS",
      /** Last 30 days. */
      LAST_30_DAYS = "LAST_30_DAYS",
      /** Last 90 days. */
      LAST_90_DAYS = "LAST_90_DAYS",
      /** Last 28 days. */
      LAST_28_DAYS = "LAST_28_DAYS",
      /** Last 180 days. */
      LAST_180_DAYS = "LAST_180_DAYS",
      /** Last 365 days. */
      LAST_365_DAYS = "LAST_365_DAYS",
      /** Current week. Week start is Monday. */
      THIS_WEEK = "THIS_WEEK",
      /** Current month. */
      THIS_MONTH = "THIS_MONTH",
      /** Current quater. */
      THIS_QUATER = "THIS_QUATER",
      /** This year. */
      THIS_YEAR = "THIS_YEAR",
      /** Last week (previous week). */
      LAST_WEEK = "LAST_WEEK",
      /** Last month. */
      LAST_MONTH = "LAST_MONTH",
      /** Last quater. */
      LAST_QUATER = "LAST_QUATER",
      /** Last year. */
      LAST_YEAR = "LAST_YEAR",
      /** Last 7 days up until yesterday. */
      LAST_7_DAYS_BEFORE_TODAY = "LAST_7_DAYS_BEFORE_TODAY",
      /** Lat 14 days up until yesterday. */
      LAST_14_DAYS_BEFORE_TODAY = "LAST_14_DAYS_BEFORE_TODAY",
      /** Last 30 days up until yesterday. */
      LAST_30_DAYS_BEFORE_TODAY = "LAST_30_DAYS_BEFORE_TODAY",
      /** Last 90 days up until yesterday. */
      LAST_90_DAYS_BEFORE_TODAY = "LAST_90_DAYS_BEFORE_TODAY",
      /** Last 28 days up until yesterday. */
      LAST_28_DAYS_BEFORE_TODAY = "LAST_28_DAYS_BEFORE_TODAY",
      /** Last 180 days up until yesterday. */
      LAST_180_DAYS_BEFORE_TODAY = "LAST_180_DAYS_BEFORE_TODAY",
      /** Last 365 days up until yesterday. */
      LAST_365_DAYS_BEFORE_TODAY = "LAST_365_DAYS_BEFORE_TODAY",
      /** Last 12 months. */
      LAST_12_MONTHS = "LAST_12_MONTHS"
  }
  /** Navigation flow sessions params. */
  interface NavigationFlowSessionsParams {
      /**
       * Page interactions. E.g.
       * ["/{Homepage}", "__DROP__"] - session ids for /{Homepage} -> dropped off
       * ["", "__DROP__"] - session ids for (any page) -> dropped off
       * ["", "", "__DROP__"] - session ids for (any page) -> (any page) -> dropped off
       */
      pageInteractions?: string[] | null;
  }
  /** Conversion funnel sessions params. */
  interface ConversionFunnelSessionsParams {
      /** Include funnel step. */
      include?: FunnelStep;
      /** Exclude funnel step. */
      exclude?: FunnelStep;
  }
  /** Funnel step. */
  enum FunnelStep {
      /** Not selected. */
      NOT_SELECTED_FUNNEL_STEP = "NOT_SELECTED_FUNNEL_STEP",
      /** Site sessions. */
      SITE_SESSIONS = "SITE_SESSIONS",
      /** Viewed product. */
      VIEWED_PRODUCT = "VIEWED_PRODUCT",
      /** Added to cart. */
      ADDED_TO_CART = "ADDED_TO_CART",
      /** Reached checkout. */
      REACHED_CHECKOUT = "REACHED_CHECKOUT",
      /** Sessions converted. */
      SESSIONS_CONVERTED = "SESSIONS_CONVERTED"
  }
  /** Sessions by device params. */
  interface SessionsByDeviceParams {
      /** Device type. */
      type?: DeviceType;
  }
  /** Device type. */
  enum DeviceType {
      /** Not selected. */
      NOT_SELECTED_DEVICE_TYPE = "NOT_SELECTED_DEVICE_TYPE",
      /** Desktop. */
      DESKTOP = "DESKTOP",
      /** Mobile. */
      MOBILE = "MOBILE",
      /** Tablet. */
      TABLET = "TABLET"
  }
  /** Fitler sessions response. */
  interface FilterSessionsResponse {
      /** Filter sessions task. */
      task?: Task;
  }
  /** Get sessions request. */
  interface GetSessionsRequest {
      /** Filter sessions task id. */
      filterTaskId?: string;
      /** Limit. */
      limit?: number;
      /** Offset. */
      offset?: number;
  }
  /** Get session response. */
  interface GetSessionsResponse {
      /** Fetch sessions task result. */
      result?: TaskResult;
  }
  /** Fetch sessions task result. */
  interface TaskResult {
      /** Task status. */
      status?: TaskStatus;
      /** Total number of sessions. */
      total?: number | null;
      /** Sessions ids. */
      sessionIds?: string[];
  }
  /** Task status. */
  enum TaskStatus {
      /** Unknown. */
      UNKNOWN_TASK_STATUS = "UNKNOWN_TASK_STATUS",
      /** In progress. */
      IN_PROGRESS = "IN_PROGRESS",
      /** Finished. */
      FINISHED = "FINISHED",
      /** Error. */
      ERROR = "ERROR"
  }
  /** Produce session recorded event request. */
  interface ProduceSessionRecordedEventRequest {
      /** Browser session id. */
      sessionId?: string;
  }
  /** Produce session recorded event response. */
  interface ProduceSessionRecordedEventResponse {
  }
  /**
   * Fitler sessions.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   * @returns Fitler sessions response.
   */
  function filterSessions(options?: FilterSessionsOptions): Promise<FilterSessionsResponse>;
  interface FilterSessionsOptions extends FilterSessionsRequestPeriodOneOf, FilterSessionsRequestParamsOneOf {
      /** Cache control policy. */
      cacheControl?: CacheControlEnum;
      /** Custom period with start & end dates provided. */
      customPeriod?: CustomPeriod;
      /** Predefined period. */
      predefinedPeriod?: PredefinedPeriod;
      /** User timezone. If not provided it will be taken from site profile. */
      timezone?: string | null;
      /** Navigation flow params. */
      navigationFlow?: NavigationFlowSessionsParams;
      /** Conversion funnel sessions params. */
      conversionFunnel?: ConversionFunnelSessionsParams;
      /** Sessions by device params. */
      sessionsByDevice?: SessionsByDeviceParams;
  }
  /**
   * Get sessions.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   * @returns Get session response.
   */
  function getSessions(options?: GetSessionsOptions): Promise<GetSessionsResponse>;
  interface GetSessionsOptions {
      /** Filter sessions task id. */
      filterTaskId?: string;
      /** Limit. */
      limit?: number;
      /** Offset. */
      offset?: number;
  }
  /**
   * Mark a current browser session as recorded.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   * @returns Produce session recorded event response.
   */
  function produceSessionRecordedEvent(options?: ProduceSessionRecordedEventOptions): Promise<void>;
  interface ProduceSessionRecordedEventOptions {
      /** Browser session id. */
      sessionId?: string;
  }
  
  type analyticsNgSessionIdsV1Task_universal_d_Task = Task;
  type analyticsNgSessionIdsV1Task_universal_d_FilterSessionsRequest = FilterSessionsRequest;
  type analyticsNgSessionIdsV1Task_universal_d_FilterSessionsRequestPeriodOneOf = FilterSessionsRequestPeriodOneOf;
  type analyticsNgSessionIdsV1Task_universal_d_FilterSessionsRequestParamsOneOf = FilterSessionsRequestParamsOneOf;
  type analyticsNgSessionIdsV1Task_universal_d_CacheControlEnum = CacheControlEnum;
  const analyticsNgSessionIdsV1Task_universal_d_CacheControlEnum: typeof CacheControlEnum;
  type analyticsNgSessionIdsV1Task_universal_d_CustomPeriod = CustomPeriod;
  type analyticsNgSessionIdsV1Task_universal_d_PredefinedPeriod = PredefinedPeriod;
  type analyticsNgSessionIdsV1Task_universal_d_PredefinedPeriodEnum = PredefinedPeriodEnum;
  const analyticsNgSessionIdsV1Task_universal_d_PredefinedPeriodEnum: typeof PredefinedPeriodEnum;
  type analyticsNgSessionIdsV1Task_universal_d_NavigationFlowSessionsParams = NavigationFlowSessionsParams;
  type analyticsNgSessionIdsV1Task_universal_d_ConversionFunnelSessionsParams = ConversionFunnelSessionsParams;
  type analyticsNgSessionIdsV1Task_universal_d_FunnelStep = FunnelStep;
  const analyticsNgSessionIdsV1Task_universal_d_FunnelStep: typeof FunnelStep;
  type analyticsNgSessionIdsV1Task_universal_d_SessionsByDeviceParams = SessionsByDeviceParams;
  type analyticsNgSessionIdsV1Task_universal_d_DeviceType = DeviceType;
  const analyticsNgSessionIdsV1Task_universal_d_DeviceType: typeof DeviceType;
  type analyticsNgSessionIdsV1Task_universal_d_FilterSessionsResponse = FilterSessionsResponse;
  type analyticsNgSessionIdsV1Task_universal_d_GetSessionsRequest = GetSessionsRequest;
  type analyticsNgSessionIdsV1Task_universal_d_GetSessionsResponse = GetSessionsResponse;
  type analyticsNgSessionIdsV1Task_universal_d_TaskResult = TaskResult;
  type analyticsNgSessionIdsV1Task_universal_d_TaskStatus = TaskStatus;
  const analyticsNgSessionIdsV1Task_universal_d_TaskStatus: typeof TaskStatus;
  type analyticsNgSessionIdsV1Task_universal_d_ProduceSessionRecordedEventRequest = ProduceSessionRecordedEventRequest;
  type analyticsNgSessionIdsV1Task_universal_d_ProduceSessionRecordedEventResponse = ProduceSessionRecordedEventResponse;
  const analyticsNgSessionIdsV1Task_universal_d_filterSessions: typeof filterSessions;
  type analyticsNgSessionIdsV1Task_universal_d_FilterSessionsOptions = FilterSessionsOptions;
  const analyticsNgSessionIdsV1Task_universal_d_getSessions: typeof getSessions;
  type analyticsNgSessionIdsV1Task_universal_d_GetSessionsOptions = GetSessionsOptions;
  const analyticsNgSessionIdsV1Task_universal_d_produceSessionRecordedEvent: typeof produceSessionRecordedEvent;
  type analyticsNgSessionIdsV1Task_universal_d_ProduceSessionRecordedEventOptions = ProduceSessionRecordedEventOptions;
  namespace analyticsNgSessionIdsV1Task_universal_d {
    export {
      analyticsNgSessionIdsV1Task_universal_d_Task as Task,
      analyticsNgSessionIdsV1Task_universal_d_FilterSessionsRequest as FilterSessionsRequest,
      analyticsNgSessionIdsV1Task_universal_d_FilterSessionsRequestPeriodOneOf as FilterSessionsRequestPeriodOneOf,
      analyticsNgSessionIdsV1Task_universal_d_FilterSessionsRequestParamsOneOf as FilterSessionsRequestParamsOneOf,
      analyticsNgSessionIdsV1Task_universal_d_CacheControlEnum as CacheControlEnum,
      analyticsNgSessionIdsV1Task_universal_d_CustomPeriod as CustomPeriod,
      analyticsNgSessionIdsV1Task_universal_d_PredefinedPeriod as PredefinedPeriod,
      analyticsNgSessionIdsV1Task_universal_d_PredefinedPeriodEnum as PredefinedPeriodEnum,
      analyticsNgSessionIdsV1Task_universal_d_NavigationFlowSessionsParams as NavigationFlowSessionsParams,
      analyticsNgSessionIdsV1Task_universal_d_ConversionFunnelSessionsParams as ConversionFunnelSessionsParams,
      analyticsNgSessionIdsV1Task_universal_d_FunnelStep as FunnelStep,
      analyticsNgSessionIdsV1Task_universal_d_SessionsByDeviceParams as SessionsByDeviceParams,
      analyticsNgSessionIdsV1Task_universal_d_DeviceType as DeviceType,
      analyticsNgSessionIdsV1Task_universal_d_FilterSessionsResponse as FilterSessionsResponse,
      analyticsNgSessionIdsV1Task_universal_d_GetSessionsRequest as GetSessionsRequest,
      analyticsNgSessionIdsV1Task_universal_d_GetSessionsResponse as GetSessionsResponse,
      analyticsNgSessionIdsV1Task_universal_d_TaskResult as TaskResult,
      analyticsNgSessionIdsV1Task_universal_d_TaskStatus as TaskStatus,
      analyticsNgSessionIdsV1Task_universal_d_ProduceSessionRecordedEventRequest as ProduceSessionRecordedEventRequest,
      analyticsNgSessionIdsV1Task_universal_d_ProduceSessionRecordedEventResponse as ProduceSessionRecordedEventResponse,
      analyticsNgSessionIdsV1Task_universal_d_filterSessions as filterSessions,
      analyticsNgSessionIdsV1Task_universal_d_FilterSessionsOptions as FilterSessionsOptions,
      analyticsNgSessionIdsV1Task_universal_d_getSessions as getSessions,
      analyticsNgSessionIdsV1Task_universal_d_GetSessionsOptions as GetSessionsOptions,
      analyticsNgSessionIdsV1Task_universal_d_produceSessionRecordedEvent as produceSessionRecordedEvent,
      analyticsNgSessionIdsV1Task_universal_d_ProduceSessionRecordedEventOptions as ProduceSessionRecordedEventOptions,
    };
  }
  
  export { analyticsNgSessionIdsV1Task_universal_d as sessionIds };
}
