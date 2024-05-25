/**
 * The wix-location module contains functionality for getting information
 *  about the URL of the current page and for navigating to other pages.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-location.html#)
 */
declare module 'wix-location' {
    /**
     * Gets the base URL of the current page.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-location.html#baseUrl)
     */
    const baseUrl: string;
    /**
     * Gets the path of the current page's URL.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-location.html#path)
     */
    const path: string[];
    /**
     * Gets the prefix of a dynamic page's or router page's URL.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-location.html#prefix)
     */
    const prefix: string;
    /**
     * Gets the protocol of the current page's URL.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-location.html#protocol)
     */
    const protocol: string;
    /**
     * Gets an object that represents the query segment of the current page's URL.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-location.html#query)
     */
    const query: any;
    /**
     * Gets an object used to manage the query segment of the current page's URL.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-location.html#queryParams)
     */
    const queryParams: QueryParams;
    /**
     * Gets the full URL of the current page.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-location.html#url)
     */
    const url: string;
    /**
     * Adds an event handler that runs when an application page's URL changes.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-location.html#onChange)
     */
    function onChange(handler: LocationChangeHandler): void;
    /**
     * Directs the browser to navigate to the specified URL.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-location.html#to)
     */
    function to(url: string, options?: NavOptions): void;
    /**
     * An object containing information about a location.
     */
    type Location = {
        /**
         * Location path.
         */
        path: string;
    };
    /**
     * An object containing navigation and scrolling options.
     */
    type NavOptions = {
        /**
         * Whether the page scrolls to the top when navigating to the specified URL for a Wix page. Defaults to `false`. When `true`, the page remains at the same Y-axis position as the previously-viewed page. This setting does not affect scrolling for external URLs.
         */
        disableScrollToTop?: boolean;
    };
    /**
     * Handles location change events.
     */
    type LocationChangeHandler = (event: Location) => void;
    /**
     * An object used to manage the query segment of the current page's URL.
     * * Get hands-on experience with the URL query parameters on our [Hello Query Parameters](https://www.wix.com/velo/example/hello-query-parameters) example page.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-location.QueryParams.html#)
     */
    interface QueryParams {
        /**
         * Adds query parameters to the current page's URL.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-location.QueryParams.html#add)
         */
        add(toAdd: any): void;
        /**
         * Removes query parameters from the current page's URL.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-location.QueryParams.html#remove)
         */
        remove(toRemove: string[]): void;
    }
}
