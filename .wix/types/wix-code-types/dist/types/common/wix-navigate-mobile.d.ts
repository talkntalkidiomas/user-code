/**
 * The `wix-navigate-mobile` module contains functionality for navigating in your mobile app.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-navigate-mobile.html#)
 */
declare module 'wix-navigate-mobile' {
    /**
     * Directs the mobile app to open the specified URL in the device's browser.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-navigate-mobile.html#openUrl)
     */
    function openUrl(url: string): Promise<void>;
}
