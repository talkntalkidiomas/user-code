declare module "wix-recruitment-agencies-positions-backend" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface Position {
      /** @readonly */
      _id?: string;
      /**
       * postingId in People system - specific job description published instance
       * @readonly
       */
      postingId?: string;
      /** Posting title in People system - specific job description published instance */
      title?: string;
      /** Posting description in People system */
      description?: string;
      /** Posting requirements in People system */
      requirements?: string;
      /** Posting responsibilities in People system */
      responsibilities?: string;
  }
  interface GetAgencyPositionsRequest {
  }
  interface GetAgencyPositionsResponse {
      /** agency positions */
      positions?: Position[];
  }
  /** GetAgencyPositions return positions for agency */
  function getAgencyPositions(): Promise<GetAgencyPositionsResponse>;
  
  const peopleAgenciesPortalV1Position_universal_d___debug: typeof __debug;
  type peopleAgenciesPortalV1Position_universal_d_Position = Position;
  type peopleAgenciesPortalV1Position_universal_d_GetAgencyPositionsRequest = GetAgencyPositionsRequest;
  type peopleAgenciesPortalV1Position_universal_d_GetAgencyPositionsResponse = GetAgencyPositionsResponse;
  const peopleAgenciesPortalV1Position_universal_d_getAgencyPositions: typeof getAgencyPositions;
  namespace peopleAgenciesPortalV1Position_universal_d {
    export {
      peopleAgenciesPortalV1Position_universal_d___debug as __debug,
      peopleAgenciesPortalV1Position_universal_d_Position as Position,
      peopleAgenciesPortalV1Position_universal_d_GetAgencyPositionsRequest as GetAgencyPositionsRequest,
      peopleAgenciesPortalV1Position_universal_d_GetAgencyPositionsResponse as GetAgencyPositionsResponse,
      peopleAgenciesPortalV1Position_universal_d_getAgencyPositions as getAgencyPositions,
    };
  }
  
  export { peopleAgenciesPortalV1Position_universal_d as recruitmentAgenciesPositions };
}
