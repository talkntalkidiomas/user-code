declare module "wix-showoff-backend" {
  /** TopWebsites is the main entity of ShowOff that can be used for lorem ipsum dolor */
  interface TopWebsites {
      websiteLists?: Websites[];
  }
  interface Websites {
      criteria?: Criteria;
      websites?: Website[];
  }
  enum Criteria {
      UNKNOWN_KEY = "UNKNOWN_KEY",
      LOCALE = "LOCALE",
      TOP_IN_GOOGLE = "TOP_IN_GOOGLE",
      GLOBAL = "GLOBAL",
      BEST_LOOKING = "BEST_LOOKING",
      TRAFFIC = "TRAFFIC"
  }
  interface Website {
      metaSiteId?: string | null;
      /** [(.wix.api.format) = URI]; */
      link?: string | null;
      /** [(.wix.api.format) = URI]; */
      preview?: string | null;
      score?: number | null;
  }
  interface GetTopWebsitesResponse {
      /** The retrieved TopWebsites */
      topWebsites?: TopWebsites;
  }
  interface OptOutResponse {
  }
  interface GetTopWebsitesOptions {
      language: string | null;
  }
  
  function getTopWebsites(structureId: string | null, countryCode: string | null, options: GetTopWebsitesOptions): Promise<GetTopWebsitesResponse>;
  function optOut(metaSiteId: string): Promise<OptOutResponse>;
  
  const showoffV1TopWebsites_backend_d_getTopWebsites: typeof getTopWebsites;
  const showoffV1TopWebsites_backend_d_optOut: typeof optOut;
  namespace showoffV1TopWebsites_backend_d {
    export {
      showoffV1TopWebsites_backend_d_getTopWebsites as getTopWebsites,
      showoffV1TopWebsites_backend_d_optOut as optOut,
    };
  }
  
  export { showoffV1TopWebsites_backend_d as wixShowoff };
}
