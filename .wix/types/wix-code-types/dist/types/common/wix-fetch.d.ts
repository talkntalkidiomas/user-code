/**
 * The wix-fetch module contains functionality for sending HTTPS requests to a server.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-fetch.html#)
 */
declare module 'wix-fetch' {
    /**
     * Retrieves the specified resource from the network using HTTPS.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-fetch.html#fetch)
     */
    function fetch(url: string, options?: WixFetchRequest): Promise<WixFetchResponse>;
    /**
     * Retrieves the specified JSON resource from the network using HTTPS.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-fetch.html#getJSON)
     */
    function getJSON(url: string, options?: WixFetchRequest): Promise<any>;
    /**
     * An object used by the `fetch()` function representing an HTTPS request.
     */
    type WixFetchRequest = {
        /**
         * The [HTTP method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) to use. Defaults to `"GET"`.
         */
        method?: string;
        /**
         * The request headers.
         */
        headers?: any;
        /**
         * The request body.
         */
        body?: string;
        /**
         * The [request mode](https://developer.mozilla.org/en-US/docs/Web/API/Request/mode).
         *
         * One of:
         *
         * + `"cors"`
         * + `"no-cors"`
         * + `"same-origin"`
         */
        mode?: string;
        /**
         * The [request credentials](https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials).
         *
         * One of:
         *
         * + `"omit"`
         * + `"include"`
         * + `"same-origin"`
         */
        credentials?: string;
        /**
         * The [request cache mode](https://developer.mozilla.org/en-US/docs/Web/API/Request/cache).
         *
         * One of:
         *
         * + `"default"`
         * + `"force-cache"`
         * + `"no-cache"`
         * + `"no-store"`
         * + `"only-if-cached"`
         * + `"reload"`
         */
        cache?: string;
    };
    /**
     * An object returned by the `fetch()` function representing
     *  an HTTP response to a fetch.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-fetch.WixFetchResponse.html#)
     */
    interface WixFetchResponse {
        /**
         * Indicates whether the body of the response has been used yet.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-fetch.WixFetchResponse.html#bodyUsed)
         */
        readonly bodyUsed: boolean;
        /**
         * The response headers.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-fetch.WixFetchResponse.html#headers)
         */
        readonly headers: any;
        /**
         * Indicates if the request was successful, meaning its `status` is in the range 2xx.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-fetch.WixFetchResponse.html#ok)
         */
        readonly ok: boolean;
        /**
         * The response [status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).
         * 	[Read more](https://www.wix.com/corvid/reference/wix-fetch.WixFetchResponse.html#status)
         */
        readonly status: number;
        /**
         * The response [status message](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).
         * 	[Read more](https://www.wix.com/corvid/reference/wix-fetch.WixFetchResponse.html#statusText)
         */
        readonly statusText: string;
        /**
         * The response URL.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-fetch.WixFetchResponse.html#url)
         */
        readonly url: string;
        /**
         * Reads the response body as JSON.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-fetch.WixFetchResponse.html#json)
         */
        json(): Promise<any>;
        /**
         * Reads the response body as a string.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-fetch.WixFetchResponse.html#text)
         */
        text(): Promise<string>;
    }
}
