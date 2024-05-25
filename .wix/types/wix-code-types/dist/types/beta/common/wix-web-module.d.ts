declare module "wix-web-module" {
  /* eslint-disable import/group-exports */
  interface CacheOptions {
    tags: string[];
    ttl?: number;
  }
  
  interface WebMethodOptions {
    cache?: CacheOptions;
  }
  
  /**
   * Permissions needed to call the function in frontend code.
   * - Anyone Any site visitor can call the function.
   * - Admin Only site admins can call the function.
   * - SiteMember Only site members can call the function.
   */
  const Permissions: {
    Admin: { allowedRoles: any[] };
    SiteMember: { allowedRoles: any[] };
    Anyone: { allowedRoles: any[] };
  };
  
  /**
   * The `webMethod()` function is a wrapper used to export functions from backend code that can be called from the frontend.
   * Use the function's first parameter to define the permissions needed to call the function in frontend code. You can import
   * the `Permissions` enum from the `wix-web-module` module to define the permissions.
   * The permission options are:
   *  - `Permissions.Anyone`: Any site visitor can call the function.
   *  - `Permissions.Admin`: Only site admins can call the function.
   *  - `Permissions.SiteMember`: Only site members can call the function.
   *
   * Web methods must be defined in files with a `.web.js` extension.
   */
  function webMethod<T extends (...args: any[]) => any>(
    permission: {
      allowedRoles: any[];
    },
    method: T,
    options?: WebMethodOptions
  ): T & {
    permission: {
      allowedRoles: any[];
    };
  };
  
  export { Permissions, webMethod };
}
