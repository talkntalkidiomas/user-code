/**
 * The wix-seo-frontend module contains functionality for working with
 *  [your site's SEO](https://support.wix.com/en/article/search-engine-optimization-seo) from
 *  client-side code.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-seo-frontend.html#)
 */
declare module 'wix-seo-frontend' {
    /**
     * Gets the page's SEO-related link tags.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-seo-frontend.html#links)
     */
    const links: Link[];
    /**
     * Gets the page's SEO-related meta tags.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-seo-frontend.html#metaTags)
     */
    const metaTags: MetaTag[];
    /**
     * Gets the page's structured data.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-seo-frontend.html#structuredData)
     */
    const structuredData: any[];
    /**
     * Gets the page's title.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-seo-frontend.html#title)
     */
    const title: string;
    /**
     * Sets the page's SEO-related link tags.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-seo-frontend.html#setLinks)
     */
    function setLinks(links: Link[]): Promise<void>;
    /**
     * Sets the page's SEO-related meta tags.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-seo-frontend.html#setMetaTags)
     */
    function setMetaTags(metaTags: MetaTag[]): Promise<void>;
    /**
     * Sets the page's structured data.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-seo-frontend.html#setStructuredData)
     */
    function setStructuredData(structuredData: any[]): Promise<void>;
    /**
     * Sets the page's title.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-seo-frontend.html#setTitle)
     */
    function setTitle(title: string): Promise<void>;
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
         * Name of the meta tag. Either `name` or `property` are required.
         */
        name?: string;
        /**
         * Name of the meta tag property. Either `property` or `name` are required.
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
