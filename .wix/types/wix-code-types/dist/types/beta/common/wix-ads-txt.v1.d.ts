declare module "wix-ads-txt.v1" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface AdsTxt {
      /** Content of Ads.txt. */
      content?: string;
      /** Whether current Ads.txt is Wix's default. */
      default?: boolean;
      /** Subdomain of Ads.txt, for example `www`, `es`, `fr`. Default is `www`. */
      subdomain?: string;
      /**
       * entity Id
       * @internal
       */
      _id?: string;
  }
  /** The request to get the Ads.txt file content */
  interface GetAdsTxtRequest {
      /** Subdomain of Ads.txt, for example `www`, `es`, `fr`. Default is `www`. */
      subdomain?: string;
  }
  /** The response of the Ads.txt file request */
  interface GetAdsTxtResponse {
      /** Ads txt object */
      adsTxt?: AdsTxt;
  }
  /** The request to update the content of the Ads.txt file */
  interface UpdateAdsTxtRequest {
      /**
       * Submitted `adsTxT` object will replace the existing Ads.txt file.
       * To reset Ads.txt to Wix's default, submit `default:true` without a `content` object.
       */
      adsTxt?: AdsTxt;
  }
  interface UpdateAdsTxtResponse {
      /** Updated Ads txt object */
      adsTxt?: AdsTxt;
  }
  /** The request to append the content of the Ads.txt file */
  interface AppendAdsTxtRequest {
      /**
       * Submitted `content` object will be appended to the existing Ads.txt file.
       * To reset Ads.txt to Wix's default, submit `default:true` without a `content` object.
       */
      adsTxt?: AdsTxt;
  }
  interface AppendAdsTxtResponse {
      /** Appended Ads.txt file. */
      adsTxt?: AdsTxt;
  }
  /**
   * Retrieves the Ads.txt file.
   *
   * This function is not a universal function and runs only on the backend.
   * @public
   * @documentationMaturity preview
   * @adminMethod
   * @returns The response of the Ads.txt file request
   */
  function getAdsTxt(options?: GetAdsTxtOptions): Promise<GetAdsTxtResponse>;
  interface GetAdsTxtOptions {
      /** Subdomain of Ads.txt, for example `www`, `es`, `fr`. Default is `www`. */
      subdomain?: string;
  }
  /**
   * Updates the Ads.txt file.
   * When setting the `content` object to an empty string, an empty Ads.txt file will be created.
   * In order to reset Ads.txt to Wix's default, send `default: true` without a `content` object.
   *
   * This function is not a universal function and runs only on the backend.
   * @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function updateAdsTxt(options?: UpdateAdsTxtOptions): Promise<UpdateAdsTxtResponse>;
  interface UpdateAdsTxtOptions {
      /**
       * Submitted `adsTxT` object will replace the existing Ads.txt file.
       * To reset Ads.txt to Wix's default, submit `default:true` without a `content` object.
       */
      adsTxt?: AdsTxt;
  }
  /**
   * Appends the submitted `content` object to Ads.txt.
   * In order to reset Ads.txt to Wix's default, send `default: true` without a `content` object.
   *
   * This function is not a universal function and runs only on the backend.
   * @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function appendAdsTxt(options?: AppendAdsTxtOptions): Promise<AppendAdsTxtResponse>;
  interface AppendAdsTxtOptions {
      /**
       * Submitted `content` object will be appended to the existing Ads.txt file.
       * To reset Ads.txt to Wix's default, submit `default:true` without a `content` object.
       */
      adsTxt?: AdsTxt;
  }
  
  export { AdsTxt, AppendAdsTxtOptions, AppendAdsTxtRequest, AppendAdsTxtResponse, GetAdsTxtOptions, GetAdsTxtRequest, GetAdsTxtResponse, UpdateAdsTxtOptions, UpdateAdsTxtRequest, UpdateAdsTxtResponse, __debug, appendAdsTxt, getAdsTxt, updateAdsTxt };
}
