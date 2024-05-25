/**
 * HTTP functions are used to expose an API of your site's functionality.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-http-functions.html#)
 */
declare module 'wix-http-functions' {
    /**
     * An object representing an incoming request received by a call to an HTTP function.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-http-functions.html#wixHttpFunctionRequest)
     */
    const wixHttpFunctionRequest: WixHttpFunctionRequest;
    /**
     * Returns a response with status code 400 (Bad Request) and the information from the options parameter.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-http-functions.html#badRequest)
     */
    function badRequest(options?: WixHttpFunctionResponseOptions): WixHttpFunctionResponse;
    /**
     * Returns a response with status code 201 (Created) and the information from the options parameter.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-http-functions.html#created)
     */
    function created(options?: WixHttpFunctionResponseOptions): WixHttpFunctionResponse;
    /**
     * A function that responds to requests made with the HTTP DELETE method.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-http-functions.html#delete)
     */
    /* Illegal function name 'delete' can't be used here
    function delete(request: WixHttpFunctionRequest): WixHttpFunctionResponse;
    */
    /**
     * Returns a response with status code 403 (Forbidden) and the information from the options parameter.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-http-functions.html#forbidden)
     */
    function forbidden(options?: WixHttpFunctionResponseOptions): WixHttpFunctionResponse;
    /**
     * A function that responds to requests made with the HTTP GET method.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-http-functions.html#get)
     */
    function get(request: WixHttpFunctionRequest): WixHttpFunctionResponse;
    /**
     * Returns a response with status code 404 (Not Found) and the information from the options parameter.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-http-functions.html#notFound)
     */
    function notFound(options?: WixHttpFunctionResponseOptions): WixHttpFunctionResponse;
    /**
     * Returns a response with status code 200 (OK) and the information from the options parameter.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-http-functions.html#ok)
     */
    function ok(options?: WixHttpFunctionResponseOptions): WixHttpFunctionResponse;
    /**
     * A function that responds to requests made with the HTTP OPTIONS method.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-http-functions.html#options)
     */
    function options(request: WixHttpFunctionRequest): WixHttpFunctionResponse;
    /**
     * A function that responds to requests made with the HTTP POST method.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-http-functions.html#post)
     */
    function post(request: WixHttpFunctionRequest): WixHttpFunctionResponse;
    /**
     * A function that responds to requests made with the HTTP PUT method.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-http-functions.html#put)
     */
    function put(request: WixHttpFunctionRequest): WixHttpFunctionResponse;
    /**
     * Returns a response populated with the information from the options parameter.
     *  The `response()` function creates a custom response built with the
     *  information passed to the `options` parameter in a `WixHttpFunctionCustomResponseOptions`
     *  object.
     *
     *  Use the `response()` function to create a response to return from an HTTP
     *  function.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-http-functions.html#response)
     */
    function response(options: WixHttpFunctionCustomResponseOptions): WixHttpFunctionResponse;
    /**
     * Returns a response with status code 500 (Internal Server Error) and the information from the options parameter.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-http-functions.html#serverError)
     */
    function serverError(options?: WixHttpFunctionResponseOptions): WixHttpFunctionResponse;
    /**
     * A function that responds to requests made with any HTTP method.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-http-functions.html#use)
     */
    function use(request: WixHttpFunctionRequest): WixHttpFunctionResponse;
    /**
     * An object used to customize a response to an HTTP function call, including a HTTP response code you select.
     */
    type WixHttpFunctionCustomResponseOptions = {
        /**
         * The response's HTTP status code.
         */
        status?: number;
        /**
         * The response's body.
         */
        body?: string | Buffer | any;
        /**
         * The response's header fields. The `headers` property contains an object of `key:value` pairs where the `key` is the header field name and the `value` is the header field value.
         */
        headers?: any;
    };
    /**
     * An object used to set up a standard response to an HTTP function call, including a pre-set (unchangeable) HTTP response code.
     */
    type WixHttpFunctionResponseOptions = {
        /**
         * The response's body.
         */
        body?: string | Buffer | any;
        /**
         * The response's header fields. The `headers` property contains an object of `key:value` pairs where the `key` is the header field name and the `value` is the header field value.
         */
        headers?: any;
    };
    /**
     * An object representing an incoming request received by a call to an HTTP function.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-http-functions.WixHttpFunctionRequest.html#)
     */
    interface WixHttpFunctionRequest {
        /**
         * Returns the base URL of a call to an HTTP function.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-http-functions.WixHttpFunctionRequest.html#baseUrl)
         */
        readonly baseUrl: string;
        /**
         * Returns an object representing the body of the incoming call to an HTTP function.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-http-functions.WixHttpFunctionRequest.html#body)
         */
        readonly body: WixHttpFunctionRequest.WixHttpFunctionRequestBody;
        /**
         * Returns the function name of a call to an HTTP function.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-http-functions.WixHttpFunctionRequest.html#functionName)
         */
        readonly functionName: string;
        /**
         * Returns the HTTP header fields used in a call to an HTTP function.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-http-functions.WixHttpFunctionRequest.html#headers)
         */
        readonly headers: any;
        /**
         * Returns the IP address of the client who called the HTTP function.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-http-functions.WixHttpFunctionRequest.html#ip)
         */
        readonly ip: string;
        /**
         * Returns the HTTP method used in calling an HTTP function.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-http-functions.WixHttpFunctionRequest.html#method)
         */
        readonly method: string;
        /**
         * Returns the path of the URL used to call an HTTP function.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-http-functions.WixHttpFunctionRequest.html#path)
         */
        readonly path: string[];
        /**
         * Returns the query fields and values of the URL used to call an HTTP function.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-http-functions.WixHttpFunctionRequest.html#query)
         */
        readonly query: any;
        /**
         * Returns the full URL of a call to an HTTP function.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-http-functions.WixHttpFunctionRequest.html#url)
         */
        readonly url: string;
    }
    /**
     * An object representing a response to an HTTP function request.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-http-functions.WixHttpFunctionResponse.html#)
     */
    interface WixHttpFunctionResponse {
        /**
         * Sets or gets the body of the response as a string, object or binary buffer.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-http-functions.WixHttpFunctionResponse.html#body)
         */
        body: string | Buffer | any;
        /**
         * Sets or gets the HTTP response header fields.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-http-functions.WixHttpFunctionResponse.html#headers)
         */
        headers: any;
        /**
         * Sets or gets the HTTP status code of the response.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-http-functions.WixHttpFunctionResponse.html#status)
         */
        status: number;
    }
    /**
     * An object representing an incoming request received by a call to an HTTP function.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-http-functions.WixHttpFunctionRequest.html#)
     */
    namespace WixHttpFunctionRequest {
        /**
         * [Read more](https://www.wix.com/corvid/reference/wix-http-functions.WixHttpFunctionRequest.WixHttpFunctionRequestBody.html#)
         */
        interface WixHttpFunctionRequestBody {
            /**
             * Returns a Promise which resolves to the body of the call in binary as a Node.js [Buffer](https://nodejs.org/docs/latest-v14.x/api/buffer.html) object.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-http-functions.WixHttpFunctionRequest.WixHttpFunctionRequestBody.html#buffer)
             */
            buffer(): Promise<any>;
            /**
             * Returns a Promise which resolves to the body of the call as a JSON object.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-http-functions.WixHttpFunctionRequest.WixHttpFunctionRequestBody.html#json)
             */
            json(): Promise<any>;
            /**
             * Returns a Promise which resolves to the body of the call as a string.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-http-functions.WixHttpFunctionRequest.WixHttpFunctionRequestBody.html#text)
             */
            text(): Promise<string>;
        }
        /**
         * [Read more](https://www.wix.com/corvid/reference/wix-http-functions.WixHttpFunctionRequest.WixHttpFunctionRequestBody.html#)
         */
        namespace WixHttpFunctionRequestBody {
        }
    }
}
