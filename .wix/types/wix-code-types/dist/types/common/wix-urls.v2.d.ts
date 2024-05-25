/**
 * [Read more](https://www.wix.com/corvid/reference/wix-urls.v2.html#)
 */
declare module 'wix-urls.v2' {
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-urls-v2.html#editor)
     */
    const editor: Editor;
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-urls-v2.html#site)
     */
    const site: Site;
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-urls-v2.Editor.html#)
     */
    interface Editor {
        /**
         * Retrieves a site's Editor URLs.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-urls-v2.Editor.html#getEditorUrls)
         */
        getEditorUrls(): Promise<Editor.GetEditorUrlsResponse>;
    }
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-urls-v2.Site.html#)
     */
    interface Site {
        /**
         * This function returns a Promise that resolves to an array of the site's published URLs.
         * If a site hasn't been published, the Promise resolves to an empty array.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-urls-v2.Site.html#listPublishedSiteUrls)
         */
        listPublishedSiteUrls(options: Site.ListPublishedSiteUrlsOptions): Promise<Site.ListPublishedSiteUrlsResponse>;
    }
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-urls-v2.Editor.html#)
     */
    namespace Editor {
        type EditorUrls = {
            /**
             * Editor type.
             * Supported values:
             * - `WIX_EDITOR`: The classic Wix Editor.
             * - `EDITOR_X`: Deprecated. Expected sunset date: July 1, 2024.
             * - `WIX_STUDIO`: Wix's Editor built for agencies and enterprises.
             */
            editorType?: string;
            /**
             * Editor URL.
             */
            editorUrl?: string;
            /**
             * Preview URL.
             */
            previewUrl?: string;
        };
        type GetEditorUrlsRequest = {};
        type GetEditorUrlsResponse = {
            /**
             * Editor URL.
             */
            urls?: Editor.EditorUrls;
        };
    }
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-urls-v2.Site.html#)
     */
    namespace Site {
        type Filters = {
            /**
             * Whether to return language subdomains hosted by [Wix Multilingual](https://support.wix.com/article/wix-multilingual-adding-and-setting-up-wix-multilingual).  Default: `true`.
             */
            multilingual?: boolean;
            /**
             * Whether to return only the site's primary URL.  Default: `true`.
             */
            primary?: boolean;
            /**
             * URL type filter.  Supported values:
             *
             *  - `"ALL"`: All URLs.
             *  - `"PREMIUM"`: Only URLs directing to the Premium version of the site.
             *  - `"FREE"`: Only URLs including wixsite.com.
             *
             *  Default: `"ALL"`
             */
            urlType?: string;
        };
        type ListPublishedSiteUrlsOptions = {
            /**
             * Filters for the list.
             */
            filters?: Site.Filters;
        };
        type ListPublishedSiteUrlsRequest = {
            /**
             * Filters for the list.
             */
            filters?: Site.Filters;
        };
        type ListPublishedSiteUrlsResponse = {
            /**
             * List will be empty for non published sites
             */
            urls?: Array<Site.Url>;
        };
        type ListSiteUrlsOptions = {
            filters?: Site.Filters;
        };
        type ListSiteUrlsRequest = {
            filters?: Site.Filters;
        };
        type ListSiteUrlsResponse = {
            /**
             * List of published sites. This array will be empty if the site hasn't been published.
             */
            urls?: Array<Site.Url>;
        };
        type MultilingualInfo = {
            /**
             * Whether this is the site's default language.
             */
            defaultLanguage?: boolean;
            /**
             * Language code in [IETF BCP 47 language tag](https://en.wikipedia.org/wiki/IETF_language_tag) format. Typically, this is a lowercase 2-letter language code, followed by a hyphen, followed by an uppercase 2-letter country code. For example, `en-US` for U.S.-English, and `de-DE` for Germany-German.
             */
            languageCode?: string;
        };
        type PublishedSiteUrls = {
            /**
             * List of published sites. This array will be empty if the site hasn't been published.
             */
            urls?: Array<Site.Url>;
        };
        type Url = {
            /**
             * Language subdomain info hosted by [Wix multilingual](https://support.wix.com/article/wix-multilingual-adding-and-setting-up-wix-multilingual).
             */
            multilingualInfo?: Site.MultilingualInfo;
            /**
             * Whether this is the site's primary URL.
             */
            primary?: boolean;
            /**
             * Published site URL.
             */
            url?: string;
            /**
             * URL type.
             *
             * Supported values:
             *
             *  - `"PREMIUM"`: Only URLs directing to the Premium version of the site.
             *
             *  - `"FREE"`: Only URLs including `wixsite.com`.
             */
            urlType?: string;
        };
    }
}
