declare module "wix-cache-backend" {
  interface InvalidateCacheRequest {
      /** The method by which to invalidate the cache. All sites containing any of these tags will be invalidated. */
      invalidationMethods?: InvalidationMethods[];
      /**
       * tell us why you're invalidating the cache. You don't need to add your app name
       * @internal
       */
      reason?: string | null;
      /**
       * Is local DC
       * @internal
       */
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
   * @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function invalidateCache(options?: InvalidateCacheOptions): Promise<void>;
  interface InvalidateCacheOptions {
      /** The method by which to invalidate the cache. All sites containing any of these tags will be invalidated. */
      invalidationMethods?: InvalidationMethods[];
      /**
       * tell us why you're invalidating the cache. You don't need to add your app name
       * @internal
       */
      reason?: string | null;
      /**
       * Is local DC
       * @internal
       */
      localDc?: boolean;
  }
  
  export { InvalidateCacheOptions, InvalidateCacheRequest, InvalidateCacheResponse, InvalidationMethods, InvalidationMethodsInvalidateByOneOf, invalidateCache };
}
