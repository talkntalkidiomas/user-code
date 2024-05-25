declare module "wix-activity-counters-backend" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface ActivityCounter {
      /** Member ID. */
      memberId?: string;
      /** App ID. */
      appId?: string;
      /** Counters for this member and this app. */
      counters?: Counter[];
  }
  interface Counter {
      /** Key of the counter. Must be unique within a given app. */
      key?: string;
      /** Whether count is available to all (if `public` is false, the counter is only available to the data owner; the site member, or the third party app that created the counter). */
      public?: boolean;
      /** Count of activity. */
      count?: number;
  }
  interface SetActivityCountersRequest {
      memberId: string;
      /** Site member ID whose counter will be set. */
      counter: Counter;
  }
  interface SetActivityCountersResponse {
      activityCounter?: ActivityCounter;
  }
  interface IncrementActivityCountersRequest {
      memberId: string;
      /** Site member ID whose counter will be increment. */
      counter: Counter;
  }
  interface IncrementActivityCountersResponse {
      activityCounter?: ActivityCounter;
  }
  interface GetActivityCountersRequest {
      memberId: string;
  }
  interface GetActivityCountersResponse {
      activityCounters?: ActivityCounter[];
  }
  interface QueryActivityCountersRequest {
      query?: Query;
  }
  interface Query {
      /** A filter object. */
      filter?: any;
      /** Limit number of results. */
      paging?: Paging;
  }
  interface Paging {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface QueryActivityCountersResponse {
      activityCounters?: ActivityCounter[];
      /** Retrieved activity counters. */
      metadata?: PagingMetadata;
  }
  interface PagingMetadata {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      offset?: number | null;
      /** Total number of items that match the query. */
      total?: number | null;
      /** Flag that indicates the server failed to calculate the `total` field. */
      tooManyToCount?: boolean | null;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       * @internal
       */
      hasNext?: boolean | null;
  }
  /**
   * Sets activity counters for a requested site member.
   *
   * If a counter does not yet exist, it will be created.
   *
   * Counters are set under a custom key, which is an ID for the counter, and is unique per app.
   * @param counter - Site member ID whose counter will be set.
   * @public
   * @documentationMaturity preview
   * @requiredField counter
   * @requiredField memberId
   */
  function setActivityCounters(memberId: string, counter: Counter): Promise<SetActivityCountersResponse>;
  /**
   * Increments activity counters for a requested site member by the count provided in counter.
   *
   * If a counter does not yet exist, it will be created.
   *
   * Counters are incremented under a custom key, which is an ID for the counter, and is unique per app.
   * @param counter - Site member ID whose counter will be increment.
   * @documentationMaturity preview
   * @requiredField counter
   * @requiredField memberId
   */
  function incrementActivityCounters(memberId: string, counter: Counter): Promise<IncrementActivityCountersResponse>;
  /**
   * Returns activity counters for a requested site member.
   * A third party can read all the public counters, set by any apps. However, third parties can only read their own private counters, not those from others' apps.
   * @public
   * @documentationMaturity preview
   * @requiredField memberId
   */
  function getActivityCounters(memberId: string): Promise<GetActivityCountersResponse>;
  /**
   * Returns up to 100 activity counters for the provided filter and paging.
   *
   * Service will return only counters that are marked as public, or private counters from apps created by the requesting third party.
   *
   * Supported fields for filtering:
   * - memberId
   *
   * Supported operations:
   * Comparison:
   * - $eq
   * - $ne
   * - $in
   * Logical:
   * - $and
   * - $not
   * - $or
   * @public
   * @documentationMaturity preview
   */
  function queryActivityCounters(options?: QueryActivityCountersOptions): Promise<QueryActivityCountersResponse>;
  interface QueryActivityCountersOptions {
      query?: Query;
  }
  
  export { ActivityCounter, Counter, GetActivityCountersRequest, GetActivityCountersResponse, IncrementActivityCountersRequest, IncrementActivityCountersResponse, Paging, PagingMetadata, Query, QueryActivityCountersOptions, QueryActivityCountersRequest, QueryActivityCountersResponse, SetActivityCountersRequest, SetActivityCountersResponse, __debug, getActivityCounters, incrementActivityCounters, queryActivityCounters, setActivityCounters };
}
