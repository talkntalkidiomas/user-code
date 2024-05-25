/**
 * The wix-site-backend module contains functionality for working with
 *  your site and its pages from backend code.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-site-backend.html#)
 */
declare module 'wix-site-backend' {
    /**
     * The generalInfo API contains functionality for getting
     *  [the information about your business](https://support.wix.com/en/article/adding-your-sites-business-info) that
     *  has been entered in the **General Info** section of your site's [**Dashboard**](https://support.wix.com/en/article/wix-dashboard-overview).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-site-backend.html#generalInfo)
     */
    const generalInfo: GeneralInfo;
    /**
     * Invalidates the cache for a site.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-site-backend.html#invalidateCache)
     */
    function invalidateCache(): Promise<void>;
    /**
     * The generalInfo API contains functionality for getting
     *  [the information about your business](https://support.wix.com/en/article/adding-your-sites-business-info) that
     *  has been entered in the **General Info** section of your site's [**Dashboard**](https://support.wix.com/en/article/wix-dashboard-overview).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-site-backend.GeneralInfo.html#)
     */
    interface GeneralInfo {
        /**
         * Gets the physical address of the site's business.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-site-backend.GeneralInfo.html#getAddress)
         */
        getAddress(): Promise<GeneralInfo.GeneralInfoAddress>;
        /**
         * Gets the site business name.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-site-backend.GeneralInfo.html#getBusinessName)
         */
        getBusinessName(): Promise<string>;
        /**
         * Gets the business hours of the site's business.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-site-backend.GeneralInfo.html#getBusinessSchedule)
         */
        getBusinessSchedule(): Promise<GeneralInfo.GeneralInfoSchedule>;
        /**
         * Gets the site category information.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-site-backend.GeneralInfo.html#getCategories)
         */
        getCategories(): Promise<GeneralInfo.GeneralInfoCategories>;
        /**
         * Gets the site description.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-site-backend.GeneralInfo.html#getDescription)
         */
        getDescription(): Promise<string>;
        /**
         * Gets the email address used for notifications of activities on your site.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-site-backend.GeneralInfo.html#getEmail)
         */
        getEmail(): Promise<string>;
        /**
         * Gets the fax number used for notifications of activities on your site.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-site-backend.GeneralInfo.html#getFax)
         */
        getFax(): Promise<string>;
        /**
         * Gets site language information.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-site-backend.GeneralInfo.html#getLanguage)
         */
        getLanguage(): Promise<string>;
        /**
         * Gets site locale information.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-site-backend.GeneralInfo.html#getLocale)
         */
        getLocale(): Promise<GeneralInfo.GeneralInfoLocale>;
        /**
         * Gets the site logo file name.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-site-backend.GeneralInfo.html#getLogo)
         */
        getLogo(): Promise<string>;
        /**
         * Gets site multilingual information.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-site-backend.GeneralInfo.html#getMultilingual)
         */
        getMultilingual(): Promise<GeneralInfo.GeneralInfoLanguages>;
        /**
         * Gets site payment currency information.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-site-backend.GeneralInfo.html#getPaymentCurrency)
         */
        getPaymentCurrency(): Promise<string>;
        /**
         * Gets the phone number used for notifications of activities on your site.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-site-backend.GeneralInfo.html#getPhone)
         */
        getPhone(): Promise<string>;
        /**
         * Gets the site display name.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-site-backend.GeneralInfo.html#getSiteDisplayName)
         */
        getSiteDisplayName(): Promise<string>;
        /**
         * Gets site time zone information.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-site-backend.GeneralInfo.html#getTimeZone)
         */
        getTimeZone(): Promise<string>;
    }
    /**
     * The generalInfo API contains functionality for getting
     *  [the information about your business](https://support.wix.com/en/article/adding-your-sites-business-info) that
     *  has been entered in the **General Info** section of your site's [**Dashboard**](https://support.wix.com/en/article/wix-dashboard-overview).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-site-backend.GeneralInfo.html#)
     */
    namespace GeneralInfo {
        /**
         * An object representing a site's corresponding physical address.
         */
        type GeneralInfoAddress = {
            /**
             * Address street.
             */
            street: string;
            /**
             * Address city.
             */
            city: string;
            /**
             * Address country.
             */
            country: string;
            /**
             * Address state.
             */
            state: string;
            /**
             * Address zip code.
             */
            zip: string;
            /**
             * Address description.
             */
            hint: GeneralInfo.GeneralInfoAddressHint;
            /**
             * Whether the business has a physical address.
             */
            isPhysical: boolean;
            /**
             * Address as formatted by Google.
             */
            googleFormattedAddress: string;
            /**
             * Address street number.
             */
            streetNumber: string;
            /**
             * Address apartment number.
             */
            apartmentNumber: string;
            /**
             * Address coordinates.
             */
            coordinates: GeneralInfo.GeneralInfoAddressCoordinates;
        };
        /**
         * An object representing the coordinates of the site address.
         */
        type GeneralInfoAddressCoordinates = {
            /**
             * Address latitude.
             */
            latitude: string;
            /**
             * Address longitude.
             */
            longitude: string;
        };
        /**
         * An object representing a description of a site's address.
         */
        type GeneralInfoAddressHint = {
            /**
             * Address description.
             */
            text: string;
            /**
             * Whether description is shown before, after, or instead of the actual address.
             */
            placement: string;
        };
        /**
         * An object representing the categories that describe your site's business.
         */
        type GeneralInfoCategories = {
            /**
             * Primary site category.
             */
            primary: string;
            /**
             * List of secondary site categories.
             */
            secondary: string[];
        };
        /**
         * An object representing the site's languages.
         */
        type GeneralInfoLanguages = {
            /**
             * List supported languages.
             */
            supportedLanguages: GeneralInfo.GeneralInfoLanguagesSupported[];
            /**
             * Whether to automatically redirect users based on their browser's settings.
             */
            autoRedirect: boolean;
        };
        /**
         * An object representing the site's supported languages.
         */
        type GeneralInfoLanguagesSupported = {
            /**
             * Language code.
             */
            languageCode: string;
            /**
             * Language locale.
             */
            locale: GeneralInfo.GeneralInfoLocale;
            /**
             * Country Code for the Language icon.
             */
            countryCode: string;
            /**
             * Whether the language is the primary language.
             */
            isPrimary: boolean;
        };
        /**
         * An object representing a site's locale.
         */
        type GeneralInfoLocale = {
            /**
             * Site country.
             */
            country: string;
            /**
             * Site language code.
             */
            languageCode: string;
        };
        /**
         * An object representing business hours.
         */
        type GeneralInfoSchedule = {
            /**
             * List of opening and closing days and times.
             */
            periods: GeneralInfo.GeneralInfoSchedulePeriods[];
            /**
             * Special hours.
             */
            specialHourPeriod: GeneralInfo.GeneralInfoScheduleSpecial[];
        };
        /**
         * An object representing business opened and closed hours.
         */
        type GeneralInfoSchedulePeriods = {
            /**
             * Business opening day.
             */
            openDay: string;
            /**
             * Business opening time.
             */
            openTime: string;
            /**
             * Business closing day.
             */
            closeDay: string;
            /**
             * Business closing time.
             */
            closeTime: string;
        };
        /**
         * An object representing special business hours.
         */
        type GeneralInfoScheduleSpecial = {
            /**
             * Special hours start date.
             */
            startDate: string;
            /**
             * Special hours end date.
             */
            endDate: string;
            /**
             * Whether the business is closed.
             */
            isClosed: boolean;
            /**
             * Special hours comment.
             */
            comment: string;
        };
    }
}
