declare module "wix-ep-plugins.v1" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /** Population status entity represents ... */
  interface PopulationStatus {
      /**
       * Plugin Id
       * @readonly
       */
      _id?: string | null;
  }
  interface GetPopulationStatusRequest {
  }
  interface GetPopulationStatusResponse {
      /** TODO: add real response */
      statuses?: PopulationStatus[];
  }
  /**
   * get widget plugin population status
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function getPopulationStatus(): Promise<GetPopulationStatusResponse>;
  
  const epPluginsV1PopulationStatus_universal_d___debug: typeof __debug;
  type epPluginsV1PopulationStatus_universal_d_PopulationStatus = PopulationStatus;
  type epPluginsV1PopulationStatus_universal_d_GetPopulationStatusRequest = GetPopulationStatusRequest;
  type epPluginsV1PopulationStatus_universal_d_GetPopulationStatusResponse = GetPopulationStatusResponse;
  const epPluginsV1PopulationStatus_universal_d_getPopulationStatus: typeof getPopulationStatus;
  namespace epPluginsV1PopulationStatus_universal_d {
    export {
      epPluginsV1PopulationStatus_universal_d___debug as __debug,
      epPluginsV1PopulationStatus_universal_d_PopulationStatus as PopulationStatus,
      epPluginsV1PopulationStatus_universal_d_GetPopulationStatusRequest as GetPopulationStatusRequest,
      epPluginsV1PopulationStatus_universal_d_GetPopulationStatusResponse as GetPopulationStatusResponse,
      epPluginsV1PopulationStatus_universal_d_getPopulationStatus as getPopulationStatus,
    };
  }
  
  export { epPluginsV1PopulationStatus_universal_d as plugins };
}
