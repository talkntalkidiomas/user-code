declare module "wix-ssr-cache-invalidation-backend.v1" {
  interface InvalidateCacheRequest {
      /** The method by which to invalidate the cache. All sites containing any of these tags will be invalidated. */
      invalidationMethods?: InvalidationMethods[];
      /** tell us why you're invalidating the cache. You don't need to add your app name */
      reason?: string | null;
      /** Is local DC */
      localDc?: boolean;
  }
  interface InvalidationMethods extends InvalidationMethodsInvalidateByOneOf {
      /** Tag to invalidate by */
      tag?: string;
  }
  /** @oneof */
  interface InvalidationMethodsInvalidateByOneOf {
      /** Tag to invalidate by */
      tag?: string;
  }
  interface InvalidateCacheResponse {
  }
  /**
   * Clear SSR Cache by tags
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function invalidateCache(options?: InvalidateCacheOptions): Promise<void>;
  interface InvalidateCacheOptions {
      /** The method by which to invalidate the cache. All sites containing any of these tags will be invalidated. */
      invalidationMethods?: InvalidationMethods[];
      /** tell us why you're invalidating the cache. You don't need to add your app name */
      reason?: string | null;
      /** Is local DC */
      localDc?: boolean;
  }
  
  type ssrV1InvalidateCacheRequest_universal_d_InvalidateCacheRequest = InvalidateCacheRequest;
  type ssrV1InvalidateCacheRequest_universal_d_InvalidationMethods = InvalidationMethods;
  type ssrV1InvalidateCacheRequest_universal_d_InvalidationMethodsInvalidateByOneOf = InvalidationMethodsInvalidateByOneOf;
  type ssrV1InvalidateCacheRequest_universal_d_InvalidateCacheResponse = InvalidateCacheResponse;
  const ssrV1InvalidateCacheRequest_universal_d_invalidateCache: typeof invalidateCache;
  type ssrV1InvalidateCacheRequest_universal_d_InvalidateCacheOptions = InvalidateCacheOptions;
  namespace ssrV1InvalidateCacheRequest_universal_d {
    export {
      ssrV1InvalidateCacheRequest_universal_d_InvalidateCacheRequest as InvalidateCacheRequest,
      ssrV1InvalidateCacheRequest_universal_d_InvalidationMethods as InvalidationMethods,
      ssrV1InvalidateCacheRequest_universal_d_InvalidationMethodsInvalidateByOneOf as InvalidationMethodsInvalidateByOneOf,
      ssrV1InvalidateCacheRequest_universal_d_InvalidateCacheResponse as InvalidateCacheResponse,
      ssrV1InvalidateCacheRequest_universal_d_invalidateCache as invalidateCache,
      ssrV1InvalidateCacheRequest_universal_d_InvalidateCacheOptions as InvalidateCacheOptions,
    };
  }
  
  export { ssrV1InvalidateCacheRequest_universal_d as ssr };
}
