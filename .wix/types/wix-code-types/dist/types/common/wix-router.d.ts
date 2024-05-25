/**
 * This module contains the APIs for code routers and data binding router hooks.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-router.html#)
 */
declare module 'wix-router' {
    import wixData from 'wix-data';
    /**
     * Registers a hook that is called after a router.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-router.html#afterRouter)
     */
    function afterRouter(request: WixRouterRequest, response: WixRouterResponse): Promise<WixRouterResponse>;
    /**
     * Registers a hook that is called after a sitemap is created.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-router.html#afterSitemap)
     */
    function afterSitemap(request: WixRouterSitemapRequest, sitemapEntries: WixRouterSitemapEntry[]): Promise<WixRouterSitemapEntry[]>;
    /**
     * Registers a hook that is called before a router.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-router.html#beforeRouter)
     */
    function beforeRouter(request: WixRouterRequest): Promise<WixRouterResponse>;
    /**
     * Registers a hook that is called after a route is resolved by the data binding router, but before the wix-data query is executed.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-router.html#customizeQuery)
     */
    function customizeQuery(request: WixRouterRequest, route: string, query: wixData.WixDataQuery): wixData.WixDataQuery;
    /**
     * Returns a response with a status code 403 (Forbidden) and instructs the router to show a 403 page.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-router.html#forbidden)
     */
    function forbidden(message?: string): Promise<WixRouterResponse>;
    /**
     * Returns a response that instructs the router to continue.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-router.html#next)
     */
    function next(): Promise<WixRouterResponse>;
    /**
     * Returns a response with a status code 404 (Not Found) and instructs the router to show a 404 page.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-router.html#notFound)
     */
    function notFound(message?: string): Promise<WixRouterResponse>;
    /**
     * Returns a response with a status code 200 (OK) and instructs the router to show the selected page.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-router.html#ok)
     */
    function ok(Page: string | string[], routerReturnedData?: any, head?: WixRouterResponse.HeadOptions): Promise<WixRouterResponse>;
    /**
     * Returns a response with a status code of 301 (Moved Permanently) or 302 (Found) and instructs the router to redirect to the given URL.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-router.html#redirect)
     */
    function redirect(url: string, statusCode?: string): Promise<WixRouterResponse>;
    /**
     * Function containing routing logic for a given URL prefix.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-router.html#router)
     */
    function router(request: WixRouterRequest): Promise<WixRouterResponse>;
    /**
     * Returns a response with the specified HTTP status code with an optional message.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-router.html#sendStatus)
     */
    function sendStatus(statusCode: string, message?: string): Promise<WixRouterResponse>;
    /**
     * Function containing sitemap logic for a given URL prefix.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-router.html#sitemap)
     */
    function sitemap(request: WixRouterSitemapRequest): Promise<WixRouterSitemapEntry[]>;
    /**
     * An object representing an incoming page request received by a router.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-router.WixRouterRequest.html#)
     */
    interface WixRouterRequest {
        /**
         * Returns the base URL of the router request.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-router.WixRouterRequest.html#baseUrl)
         */
        readonly baseUrl: string;
        /**
         * Returns the current environment the router rendering process is running in.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-router.WixRouterRequest.html#env)
         */
        readonly env: string;
        /**
         * Returns the form factor of the device used to make the router request.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-router.WixRouterRequest.html#formFactor)
         */
        readonly formFactor: string;
        /**
         * Returns the remote IP address of the router request.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-router.WixRouterRequest.html#ip)
         */
        readonly ip: string;
        /**
         * Returns the names of the pages associated with this router.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-router.WixRouterRequest.html#pages)
         */
        readonly pages: string[];
        /**
         * Returns the path of the router request URL.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-router.WixRouterRequest.html#path)
         */
        readonly path: string[];
        /**
         * Returns the router prefix of the router request URL.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-router.WixRouterRequest.html#prefix)
         */
        readonly prefix: string;
        /**
         * Returns the protocol of the router request URL.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-router.WixRouterRequest.html#protocol)
         */
        readonly protocol: string;
        /**
         * Returns the query fields and values of the request URL.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-router.WixRouterRequest.html#query)
         */
        readonly query: any;
        /**
         * Returns the `referrer` header from the router request.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-router.WixRouterRequest.html#referrer)
         */
        readonly referrer: string;
        /**
         * Returns the full URL of the router request.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-router.WixRouterRequest.html#url)
         */
        readonly url: string;
        /**
         * Returns the details of the current site user who is logged in.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-router.WixRouterRequest.html#user)
         */
        readonly user: WixRouterUser;
        /**
         * Returns the `user-agent` header as sent from the device used to make the router request.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-router.WixRouterRequest.html#userAgent)
         */
        readonly userAgent: string;
    }
    /**
     * An object representing a response to a request received by a router.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-router.WixRouterResponse.html#)
     */
    interface WixRouterResponse {
        /**
         * Sets or gets the data to pass with the response.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-router.WixRouterResponse.html#data)
         */
        data: any;
        /**
         * Sets or gets the members to be written to the HTML head of the page.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-router.WixRouterResponse.html#head)
         */
        head: WixRouterResponse.HeadOptions;
        /**
         * Sets or gets the response message to be used when responding with status codes 4xx and 5xx.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-router.WixRouterResponse.html#message)
         */
        message: string;
        /**
         * Sets or gets the page to route to.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-router.WixRouterResponse.html#page)
         */
        page: string;
        /**
         * Sets or gets the url to redirect to when responding with status codes 301 and 302.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-router.WixRouterResponse.html#redirectUrl)
         */
        redirectUrl: string;
        /**
         * Sets or gets the response's HTTP status code.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-router.WixRouterResponse.html#status)
         */
        status: number;
    }
    /**
     * An object representing a single entry in a sitemap.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-router.WixRouterSitemapEntry.html#)
     */
    class WixRouterSitemapEntry {
        constructor(...args: any[]);
        /**
         * Sets or gets how frequently the page is likely to change.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-router.WixRouterSitemapEntry.html#changeFrequency)
         */
        changeFrequency: string;
        /**
         * Sets or gets when was the page data last modified.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-router.WixRouterSitemapEntry.html#lastModified)
         */
        lastModified: Date;
        /**
         * Sets or gets the page name.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-router.WixRouterSitemapEntry.html#pageName)
         */
        pageName: string;
        /**
         * Sets or gets the priority of this URL relative to other URLs on your site.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-router.WixRouterSitemapEntry.html#priority)
         */
        priority: number;
        /**
         * Sets or gets the page title.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-router.WixRouterSitemapEntry.html#title)
         */
        title: string;
        /**
         * Sets or gets the relative url of the page.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-router.WixRouterSitemapEntry.html#url)
         */
        url: string;
    }
    /**
     * An object representing a request for a sitemap.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-router.WixRouterSitemapRequest.html#)
     */
    interface WixRouterSitemapRequest {
        /**
         * Returns the base URL of the request.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-router.WixRouterSitemapRequest.html#baseUrl)
         */
        readonly baseUrl: string;
        /**
         * Sets or gets the page name.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-router.WixRouterSitemapRequest.html#pageName)
         */
        readonly pageName: string;
        /**
         * Returns the names of the pages associated with this router.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-router.WixRouterSitemapRequest.html#pages)
         */
        readonly pages: string[];
        /**
         * Returns the router prefix of the request.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-router.WixRouterSitemapRequest.html#prefix)
         */
        readonly prefix: string;
        /**
         * Returns the details of the current site user who is logged in.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-router.WixRouterSitemapRequest.html#user)
         */
        readonly user: WixRouterUser;
    }
    /**
     * An object that contains information about the current site visitor who is logged in.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-router.WixRouterUser.html#)
     */
    interface WixRouterUser {
        /**
         * Gets the user's ID.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-router.WixRouterUser.html#id)
         */
        readonly id: string;
        /**
         * Gets the user's role.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-router.WixRouterUser.html#role)
         */
        readonly role: string;
    }
    /**
     * An object representing a response to a request received by a router.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-router.WixRouterResponse.html#)
     */
    namespace WixRouterResponse {
        /**
         * Members of the HTML head.
         */
        type HeadOptions = {
            /**
             * The page title. Written to the `` tag.
             */
            title?: string;
            /**
             * **Deprecated: Use the new `metaTags` format instead.**
             *
             * The page description.
             */
            description?: string;
            /**
             * **Deprecated: Use the new `metaTags` format instead.**
             *
             *  The page keywords.
             */
            keywords?: string;
            /**
             * **Deprecated: Use the new `metaTags` format instead.**
             *
             *  Indicates whether to add a meta tag that prevents search engines from indexing the
             *  page.
             */
            noIndex?: boolean;
            /**
             * The page's SEO-related meta tags.
             *
             *  The keys in the object represent the keys in the tag and the values in the
             *  object represent the values in the tag.
             *
             *  For example:
             *
             *  ```javascript
             *  {
             *    "property": "og:image",
             *    "content": "https://.../Wix+logo.jpg"
             *  }
             *  ```
             *
             * Produces:
             *
             *  ```html
             *
             *  ```
             *
             *  When setting `og:image` meta tags, the `content` can be an external image URL
             *  or a Media Manager image URL as described [here]($w.Image.html#src).
             *
             *  **Deprecated format:** An object with key:value pairs where the key is the meta tag name
             *  and the value is the content.
             */
            metaTags?: WixRouterResponse.MetaTag[];
            /**
             * The page's SEO-related link tags,
             *  which provide additional SEO information about the page. For example, you can set a
             *  link to a canonical or alternate version of the page.
             */
            links?: WixRouterResponse.Link[];
            /**
             * The page's structured data, which helps search engines
             *  understand more about the page and your business so they can display a richer snippet of the
             *  page in search results.
             */
            structuredData?: any[];
        };
        /**
         * An object representing a link tag.
         */
        type Link = {
            /**
             * The relationship of the linked resource to the current page.
             */
            rel?: string;
            /**
             * The URL of the linked resource.
             */
            href?: string;
        };
        /**
         * An object representing a meta tag.
         */
        type MetaTag = {
            /**
             * Name of the meta tag. Either `name` or `property` is required.
             */
            name?: string;
            /**
             * Name of the meta tag property. Either `property` or `name` is required.
             */
            property?: string;
            /**
             * HTTP header that corresponds to the `content`.
             */
            "http-equiv"?: string;
            /**
             * Meta tag value. For `og:image` meta tags, the `content` can
             *  be an external image URL or a Media Manager image URL as described [here]($w.Image.html#src).
             */
            content: string;
        };
    }
}
