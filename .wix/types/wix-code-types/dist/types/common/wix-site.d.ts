/**
 * The wix-site module contains functionality for obtaining information about your site and its pages.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-site.html#)
 */
declare module 'wix-site' {
    /**
     * Gets a code representing the site's currency.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-site.html#currency)
     */
    const currency: string;
    /**
     * Gets information about the current page or lightbox.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-site.html#currentPage)
     */
    const currentPage: StructurePage | StructureLightbox;
    /**
     * Gets a code representing the site's language.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-site.html#language)
     */
    const language: string;
    /**
     * Gets the site's regional settings.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-site.html#regionalSettings)
     */
    const regionalSettings: string;
    /**
     * Gets the site revision ID.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-site.html#revision)
     */
    const revision: string;
    /**
     * Gets the site's timezone.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-site.html#timezone)
     */
    const timezone: string;
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-site.html#wixRouterSitemapEntry)
     */
    const wixRouterSitemapEntry: WixRouterSitemapEntry;
    /**
     * Gets the site display name.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-site.html#getSiteDisplayName)
     */
    function getSiteDisplayName(): string;
    /**
     * Returns information about the site's pages, prefixes, and lightboxes.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-site.html#getSiteStructure)
     */
    function getSiteStructure(): SiteStructure;
    /**
     * Optimizes resource fetching of pages and lightboxes in the site so they will load faster.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-site.html#prefetchPageResources)
     */
    function prefetchPageResources(prefetchItems: PrefetchItems): PrefetchResult;
    /**
     * Returns the sitemap for a router or dynamic page prefix.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-site.html#routerSitemap)
     */
    function routerSitemap(routerPrefix: string): Promise<WixRouterSitemapEntry[]>;
    /**
     * An object that contains information about which pages and lightboxes to
     *  prefetch resources for.
     */
    type PrefetchItems = {
        /**
         * The relative or absolute URLs of the pages in your site
         *  to prefetch resources for.
         */
        pages?: string[];
        /**
         * The names of the lightboxes in your site to prefetch
         *  resources for.
         *
         *  > **Note:** Pages are listed by relative or absolute URL, but lightboxes are listed by name.
         *  See [`wix-location.to()`](wix-location.html#to) to learn how to find a page's relative
         *  URL. You can find a lightbox's name by selecting the lightbox and clicking the settings button.
         */
        lightboxes?: string[];
    };
    /**
     * An object that is returned from a prefetch request.
     */
    type PrefetchResult = {
        /**
         * A success or failure message.
         */
        message: string;
        /**
         * The errors that occurred.
         */
        errors: PrefetchResultError;
    };
    /**
     * An object that is returned when a resource prefetch is unsuccessful.
     */
    type PrefetchResultError = {
        /**
         * The names of the pages for which prefetch failed.
         */
        pages: string[];
        /**
         * The names of the lightbox for which prefetch failed.
         */
        lightboxes: string[];
    };
    /**
     * An object that contains information about the site's prefixes.
     */
    type Prefix = {
        /**
         * The name of the prefix.
         */
        name: string;
        /**
         * The type of the prefix.
         *
         *  A site's routers, dynamic pages, and app pages all have prefixes.
         *
         *  One of:
         *
         *  + `"dynamicPages"`
         *  + `"router"`
         *  + `"app"`
         */
        type: string;
        /**
         * The prefix.
         */
        prefix: string;
        /**
         * If the prefix is an app's prefix, the `applicationId` property is the app's ID.
         */
        applicationId?: string;
    };
    /**
     * An object that contains information about the site's pages, prefixes, and lightboxes.
     */
    type SiteStructure = {
        /**
         * The pages of the site.
         *  Pages can be regular pages, dynamic pages, router pages, or pages from an app.
         */
        pages: StructurePage[];
        /**
         * The prefixes of the site's routers and dynamic pages.
         */
        prefixes: Prefix[];
        /**
         * The site's lightboxes.
         */
        lightboxes: StructureLightbox[];
    };
    /**
     * An object that contains information about a lightbox on the site.
     */
    type StructureLightbox = {
        /**
         * The name of the lightbox.
         */
        name: string;
    };
    /**
     * An object that contains information about a page on the site.
     */
    type StructurePage = {
        /**
         * The name of the page.
         */
        name: string;
        /**
         * The type of the page: `"static"` or `"template"`.
         */
        type: string;
        /**
         * The URL of the page. If the page is a `static` page the `url` property is the page's SEO URL.
         */
        url?: string;
        /**
         * If the page is an app page, the `applicationId` property is the app's ID.
         */
        applicationId?: string;
        /**
         * If the page is a router or dynamic page, the `prefix` property is the page's prefix.
         */
        prefix?: string;
        /**
         * If the page is the Home page, `isHomePage` is `true`. Otherwise, it does not exist.
         */
        isHomePage?: boolean;
    };
    /**
     * An object representing a single entry in a sitemap.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-site.WixRouterSitemapEntry.html#)
     */
    interface WixRouterSitemapEntry {
        /**
         * Gets how frequently the page is likely to change.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-site.WixRouterSitemapEntry.html#changeFrequency)
         */
        readonly changeFrequency: string;
        /**
         * Gets when the page data was last modified.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-site.WixRouterSitemapEntry.html#lastModified)
         */
        readonly lastModified: Date;
        /**
         * Gets the page name.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-site.WixRouterSitemapEntry.html#pageName)
         */
        readonly pageName: string;
        /**
         * Gets the priority of this URL relative to other URLs on your site.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-site.WixRouterSitemapEntry.html#priority)
         */
        readonly priority: number;
        /**
         * Gets the page title.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-site.WixRouterSitemapEntry.html#title)
         */
        readonly title: string;
        /**
         * Gets the relative url of the page.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-site.WixRouterSitemapEntry.html#url)
         */
        readonly url: string;
    }
}
