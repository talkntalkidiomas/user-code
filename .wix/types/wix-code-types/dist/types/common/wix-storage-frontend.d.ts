/**
 * The wix-storage-frontend module contains functionality for the persistent
 *  storage of key/value data in the site visitor's browser.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-storage-frontend.html#)
 */
declare module 'wix-storage-frontend' {
    /**
     * Used for local storage of data.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-storage-frontend.html#local)
     */
    const local: Storage;
    /**
     * Used for memory storage of data.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-storage-frontend.html#memory)
     */
    const memory: Storage;
    /**
     * Used for session storage of data.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-storage-frontend.html#session)
     */
    const session: Storage;
    /**
     * Used for storing local, session, or memory key/value data in the visitor's browser.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-storage-frontend.Storage.html#)
     */
    interface Storage {
        /**
         * Removes **all** items from local, session, or memory storage.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-storage-frontend.Storage.html#clear)
         */
        clear(): void;
        /**
         * Gets an item from local, session, or memory storage.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-storage-frontend.Storage.html#getItem)
         */
        getItem(key: string): string;
        /**
         * Removes an item from local, session, or memory storage.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-storage-frontend.Storage.html#removeItem)
         */
        removeItem(key: string): void;
        /**
         * Stores an item in local, session, or memory storage.
         *  > **Note:** You can store up to 50kb of data in local and session storage and up to
         *  > 1mb in memory storage.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-storage-frontend.Storage.html#setItem)
         */
        setItem(key: string, value: string | number | string[]): void;
    }
}
