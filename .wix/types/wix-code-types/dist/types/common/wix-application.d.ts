/**
 * The wix-application module contains functionality for getting information about a Blocks application that is installed on a site.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-application.html#)
 */
declare module 'wix-application' {
    /**
     * Gets the URL of the new page that was added by a Blocks app, when installed on a site.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-application.html#getAppPageUrl)
     */
    function getAppPageUrl(pageId: string): Promise<string>;
    /**
     * Gets the Wix Blocks App data as a decoded Json Web Token (JWT) object.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-application.html#getDecodedAppInstance)
     */
    function getDecodedAppInstance(): Promise<decodedAppInstance>;
    /**
     * Opens a lightbox that was added to a site by the Blocks app, during the app installation process and optionally passes it data.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-application.html#openAppLightbox)
     */
    function openAppLightbox(lightboxId: string, data?: any): Promise<any>;
    /**
     * An object with data about the installation of your app on a specific site.
     */
    type decodedAppInstance = {
        /**
         * The unique idenfitier of your app.
         */
        appDefId: string;
        /**
         * The ID of your app on this specific site.
         */
        instanceId: string;
        /**
         * The Plan ID of the app purchased by the site. NULL if there is no plan.
         */
        vendorProductId: string;
    };
}
