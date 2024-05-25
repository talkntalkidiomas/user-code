/**
 * A dataset connects page elements to a set of items in a data collection.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.html#)
 */
declare module 'wix-dataset' {
    import wixData from 'wix-data';
    /**
     * A [dataset](wix-dataset.html) connects page elements to a set of items in a data collection.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#)
     */
    interface Dataset {
        /**
         * Adds a new blank item.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#add)
         */
        add(): Promise<void>;
        /**
         * Returns the current item.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#getCurrentItem)
         */
        getCurrentItem(): any;
        /**
         * Returns the current item's index.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#getCurrentItemIndex)
         */
        getCurrentItemIndex(): number;
        /**
         * Gets the index of the dataset's current page.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#getCurrentPageIndex)
         */
        getCurrentPageIndex(): number;
        /**
         * Returns the selected items.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#getItems)
         */
        getItems(fromIndex: number, numberOfItems: number): Promise<Dataset.GetItemsResult>;
        /**
         * Gets the dataset's page size.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#getPageSize)
         */
        getPageSize(): number;
        /**
         * Returns the number of items in the dataset that match its filter criteria.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#getTotalCount)
         */
        getTotalCount(): number;
        /**
         * Gets the number of pages in the dataset.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#getTotalPageCount)
         */
        getTotalPageCount(): number;
        /**
         * Indicates if there is a next item.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#hasNext)
         */
        hasNext(): boolean;
        /**
         * Indicates if there is a next page of data.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#hasNextPage)
         */
        hasNextPage(): boolean;
        /**
         * Indicates if there is a previous item.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#hasPrevious)
         */
        hasPrevious(): boolean;
        /**
         * Indicates if there is a previous page of data.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#hasPreviousPage)
         */
        hasPreviousPage(): boolean;
        /**
         * Loads the next page of data in addition to the current data.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#loadMore)
         */
        loadMore(): Promise<void>;
        /**
         * Loads the specified page.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#loadPage)
         */
        loadPage(pageIndex: number): Promise<any[]>;
        /**
         * **Deprecated.**
         * This function will continue to work, but a newer version is available. Use the
         * [`add()`](https://www.wix.com/velo/reference/wix-dataset/dataset/add) function instead.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#new)
         */
        new (): Promise<void>;
        /**
         * Saves the current item and moves to the next item.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#next)
         */
        next(): Promise<any>;
        /**
         * Moves to the next page of data.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#nextPage)
         */
        nextPage(): Promise<any[]>;
        /**
         * Adds an event handler that runs just after a save.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#onAfterSave)
         *  @eventType afterSave
         */
        onAfterSave(handler: Dataset.AfterSaveHandler): void;
        /**
         * Adds an event handler that runs just before a save.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#onBeforeSave)
         */
        onBeforeSave(handler: Dataset.BeforeSaveHandler): void;
        /**
         * Adds an event handler that runs when the current index changes.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#onCurrentIndexChanged)
         *  @eventType currentIndexChanged
         */
        onCurrentIndexChanged(handler: Dataset.CurrentIndexChangedHandler): void;
        /**
         * Adds an event handler that runs when an error occurs.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#onError)
         *  @eventType datasetError
         */
        onError(handler: Dataset.ErrorHandler): void;
        /**
         * Adds an event handler that runs when a value of the current item changes.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#onItemValuesChanged)
         *  @eventType itemValuesChanged
         */
        onItemValuesChanged(handler: Dataset.ItemValuesChangedHandler): void;
        /**
         * Adds an event handler that runs when the dataset is ready.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#onReady)
         *  @eventType datasetReady
         */
        onReady(handler: Dataset.ReadyHandler): void;
        /**
         * The `onReadyAsync()` function returns a Promise that resolves when a dataset is ready.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#onReadyAsync)
         */
        onReadyAsync(): Promise<void>;
        /**
         * Saves the current item and moves to the previous item.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#previous)
         */
        previous(): Promise<any>;
        /**
         * Moves to the previous page of data.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#previousPage)
         */
        previousPage(): Promise<any[]>;
        /**
         * Refetches the contents of the dataset from the collection.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#refresh)
         */
        refresh(): Promise<void>;
        /**
         * Removes the current item.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#remove)
         */
        remove(): Promise<void>;
        /**
         * Reverts the current item to its saved value.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#revert)
         */
        revert(): Promise<void>;
        /**
         * Saves the current item.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#save)
         */
        save(): Promise<any>;
        /**
         * Sets the current item by index.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#setCurrentItemIndex)
         */
        setCurrentItemIndex(index: number): Promise<void>;
        /**
         * Updates the value of a field in the current item.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#setFieldValue)
         */
        setFieldValue(fieldKey: string, value: any): void;
        /**
         * Updates the values of a set of fields in the current item.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#setFieldValues)
         */
        setFieldValues(fieldValues: any): void;
        /**
         * Sets the dataset filter.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#setFilter)
         */
        setFilter(filter: wixData.WixDataFilter): Promise<void>;
        /**
         * Sets the dataset's page size.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#setPageSize)
         */
        setPageSize(pageSize: number): Promise<void>;
        /**
         * Sets the dataset sort order.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#setSort)
         */
        setSort(sort: wixData.WixDataSort): Promise<void>;
    }
    /**
     * A [dataset](wix-dataset.html) connects page elements on a dynamic page to a set of items in a data collection.
     *
     * >**Note:** It is not possible to connect page elements on a dynamic page to an item in a [single item collection](https://support.wix.com/en/article/about-collections-with-a-single-item).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.DynamicDataset.html#)
     */
    interface DynamicDataset extends Dataset {
        /**
         * Gets the next dynamic page URL.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.DynamicDataset.html#getNextDynamicPage)
         */
        getNextDynamicPage(): Promise<string>;
        /**
         * Gets the previous dynamic page URL.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.DynamicDataset.html#getPreviousDynamicPage)
         */
        getPreviousDynamicPage(): Promise<string>;
    }
    /**
     * A [dataset](wix-dataset.html) connects page elements to a set of items in a data collection.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-dataset.Dataset.html#)
     */
    namespace Dataset {
        /**
         * An object representing a dataset error.
         */
        type DatasetError = {
            /**
             * Error code.
             */
            code: string;
            /**
             * Error message.
             */
            message: string;
        };
        /**
         * An object used by the `getItems()` function that contains the items retrieved and the total number of items in the dataset that match its filter criteria
         */
        type GetItemsResult = {
            /**
             * List of items objects where key:value pairs are the field IDs and field values of the retrieved items, including all hidden fields.
             */
            items: any[];
            /**
             * The number of items in the dataset that match its filter criteria.
             */
            totalCount: number;
            /**
             * The index in the dataset of the first item in the items property.
             */
            offset: number;
        };
        /**
         * An after save event handler.
         */
        type AfterSaveHandler = (itemBeforeSave: any, itemAfterSave: any) => void;
        /**
         * A before save event handler.
         */
        type BeforeSaveHandler = () => Promise<boolean> | boolean;
        /**
         * A current item index change event handler.
         */
        type CurrentIndexChangedHandler = (index: number) => void;
        /**
         * An error event handler.
         */
        type ErrorHandler = (operation: string, error: Dataset.DatasetError) => void;
        /**
         * A current item value change event handler.
         */
        type ItemValuesChangedHandler = (itemBeforeChange: any, updatedItem: any) => void;
        /**
         * A dataset ready event handler.
         */
        type ReadyHandler = () => void;
    }
}
