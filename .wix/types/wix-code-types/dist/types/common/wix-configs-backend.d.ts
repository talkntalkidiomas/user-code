/**
 * The wix-configs-backend module contains functionality for working with user-configured data in Velo package code.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-configs-backend.html#)
 */
declare module 'wix-configs-backend' {
    /**
     * Retrieves the value of a specific key in a package's `config.json` file.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-configs-backend.html#getPackageConfig)
     */
    function getPackageConfig(key: string): Promise<any>;
}
