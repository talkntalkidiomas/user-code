/**
 * The wix-data module contains functionality for working with data in collections.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#)
 */
declare module 'wix-data' {
    /**
     * Creates an aggregation.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#aggregate)
     */
    function aggregate(collectionId: string): WixDataAggregate;
    /**
     * Adds a number of items to a collection.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#bulkInsert)
     */
    function bulkInsert(collectionId: string, items: any[], options?: WixDataOptions): Promise<WixDataBulkResult>;
    /**
     * Removes a number of items from a collection.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#bulkRemove)
     */
    function bulkRemove(collectionId: string, itemIds: string[], options?: WixDataOptions): Promise<WixDataBulkRemoveResult>;
    /**
     * Inserts or updates a number of items in a collection.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#bulkSave)
     */
    function bulkSave(collectionId: string, items: any[], options?: WixDataOptions): Promise<WixDataBulkResult>;
    /**
     * Updates a number of items in a collection.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#bulkUpdate)
     */
    function bulkUpdate(collectionId: string, items: any[], options?: WixDataOptions): Promise<WixDataBulkResult>;
    /**
     * Creates a filter to be used with datasets and aggregations.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#filter)
     */
    function filter(): WixDataFilter;
    /**
     * Retrieves an item from a collection.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#get)
     */
    function get(collectionId: string, itemId: string, options?: WixDataOptions): Promise<any>;
    /**
     * Adds an item to a collection.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#insert)
     */
    function insert(collectionId: string, item: any, options?: WixDataOptions): Promise<any>;
    /**
     * Inserts a reference in the specified property.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#insertReference)
     */
    function insertReference(collectionId: string, propertyName: string, referringItem: any | string, referencedItem: any | string | any[] | string[], options?: WixDataOptions): Promise<void>;
    /**
     * Checks if a reference to the referenced item exists in the specified
     *   property of the referring item.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#isReferenced)
     */
    function isReferenced(collectionId: string, propertyName: string, referringItem: any | string, referencedItem: any | string, options?: WixDataOptions): Promise<boolean>;
    /**
     * Creates a query for retrieving items from a database collection.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#query)
     */
    function query(collectionId: string): WixDataQuery;
    /**
     * Gets the full items referenced in the specified property.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#queryReferenced)
     */
    function queryReferenced(collectionId: string, item: any | string, propertyName: string, options?: WixDataQueryReferencedOptions): Promise<WixDataQueryReferencedResult>;
    /**
     * Removes an item from a collection.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#remove)
     */
    function remove(collectionId: string, itemId: string, options?: WixDataOptions): Promise<any>;
    /**
     * Removes a reference from the specified property.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#removeReference)
     */
    function removeReference(collectionId: string, propertyName: string, referringItem: any | string, referencedItem: any | string | any[] | string[], options?: WixDataOptions): Promise<void>;
    /**
     * Replaces current references with references in the specified property.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#replaceReferences)
     */
    function replaceReferences(collectionId: string, propertyName: string, referringItem: any | string, referencedItem: any | string | any[] | string[], options?: WixDataOptions): Promise<void>;
    /**
     * Inserts or updates an item in a collection.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#save)
     */
    function save(collectionId: string, item: any, options?: WixDataOptions): Promise<any>;
    /**
     * Creates a sort to be used with the dataset `setSort()` function.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#sort)
     */
    function sort(): WixDataSort;
    /**
     * Removes all items from a collection.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#truncate)
     */
    function truncate(collectionId: string, options?: WixDataOptions): Promise<null>;
    /**
     * Updates an item in a collection.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-data.html#update)
     */
    function update(collectionId: string, item: any, options?: WixDataOptions): Promise<any>;
    /**
     * An object returned by the `bulkRemove()` function.
     */
    type WixDataBulkRemoveResult = {
        /**
         * The number of removed items.
         */
        removed: number;
        /**
         * The number of skipped items.
         */
        skipped: number;
        /**
         * List of IDs of removed items.
         */
        removedItemIds: string[];
        /**
         * List of errors.
         */
        errors: Error[];
    };
    /**
     * An object returned by Wix Data bulk operations.
     */
    type WixDataBulkResult = {
        /**
         * The number of inserted items.
         */
        inserted: number;
        /**
         * The number of updated items.
         */
        updated: number;
        /**
         * The number of skipped items.
         */
        skipped: number;
        /**
         * List of IDs of inserted items.
         */
        insertedItemIds: string[];
        /**
         * List of IDs of updated items.
         */
        updatedItemIds: string[];
        /**
         * List of errors.
         */
        errors: Error[];
    };
    /**
     * An object that you pass as the `options` parameter that modifies how an operation is performed.
     */
    type WixDataOptions = {
        /**
         * Prevents [permission](https://support.wix.com/en/article/about-collection-permissions) checks from running for the operation. Defaults to `false`. Can only be used in backend code.
         */
        suppressAuth?: boolean;
        /**
         * Prevents [hooks](https://support.wix.com/en/article/wix-code-how-to-use-data-hooks) from running for the operation. Can only be used in backend code.
         */
        suppressHooks?: boolean;
        /**
         * Optional filters specific to querying [Wix Stores Products Collection Fields](https://support.wix.com/en/article/velo-wix-stores-products-collection-fields).
         */
        appOptions?: WixStoresProductQuery;
        /**
         * When `true`, reads data from the primary database instance.
         * This decreases performance but ensures data retrieved is up to date even immediately after an update.
         * See [Wix Data and Eventual Consistency](https://www.wix.com/velo/reference/wix-data/introduction#wix-data_introduction_wix-data-and-eventual-consistency) for more information.
         *
         * Default: `false`
         */
        consistentRead?: boolean;
    };
    /**
     * An object that you pass as the `options` parameter that modifies how an operation is performed.
     */
    type WixDataQueryOptions = {
        /**
         * Prevents [permission](https://support.wix.com/en/article/about-collection-permissions) checks from running for the operation. Defaults to `false`. Can only be used in backend code.
         */
        suppressAuth?: boolean;
        /**
         * Prevents [hooks](https://support.wix.com/en/article/wix-code-how-to-use-data-hooks) from running for the operation. Can only be used in backend code.
         */
        suppressHooks?: boolean;
        /**
         * When `true`, reads data from the primary database instance.
         * This decreases performance but ensures data retrieved is up to date even immediately after an update.
         * See [Wix Data and Eventual Consistency](https://www.wix.com/velo/reference/wix-data/introduction#wix-data_introduction_wix-data-and-eventual-consistency) for more information.
         *
         * Default: `false`
         */
        consistentRead?: boolean;
        /**
         * When `true`, the query result does not include a `totalCount` property containing the total number of items matching the query.
         * This speeds up the query.
         *
         * Default: `false`
         */
        omitTotalCount?: boolean;
        /**
         * Optional filters specific to querying [Wix Stores Products Collection Fields](https://support.wix.com/en/article/velo-wix-stores-products-collection-fields).
         */
        appOptions?: WixStoresProductQuery;
        /**
         * Language to translate result text into, in [IETF BCP 47 language tag](https://en.wikipedia.org/wiki/IETF_language_tag) format.
         * If provided, the result text is returned in the specified language. **Note:** Translation for the specified language must be enabled for the collection in [Wix Multilingual](https://www.wix.com/app-market/wix-multilingual).
         * If not provided, result text is not translated.
         */
        language?: string;
    };
    /**
     * An object for controlling the order of returned referenced items.
     */
    type WixDataQueryReferencedOptions = {
        /**
         * Order of the returned referenced items. Sorted by the date each item was referenced.
         *
         * Supported values:
         * - `'asc'`: Ascending
         * - `'desc'`: Descending
         */
        order?: string;
        /**
         * Prevents [permission](https://support.wix.com/en/article/about-collection-permissions) checks from running for the operation. Defaults to `false`. Can only be used in backend code.
         */
        suppressAuth?: boolean;
        /**
         * When `true`, reads data from the primary database instance.
         * This decreases performance but ensures data retrieved is up to date even immediately after an update.
         * See [Wix Data and Eventual Consistency](https://www.wix.com/velo/reference/wix-data/introduction#wix-data_introduction_wix-data-and-eventual-consistency) for more information.
         *
         * Default: `false`
         */
        consistentRead?: boolean;
        /**
         * When `true`, the query result does not include a `totalCount` property containing the total number of items matching the query.
         * This speeds up the query.
         *
         * Default: `false`
         */
        omitTotalCount?: boolean;
    };
    /**
     * An object that you pass as the `options.appOptions` parameter that allows for Wix Stores/Products query specificity.
     */
    type WixStoresProductQuery = {
        /**
         * Whether to include product variants in the query. Default is `false`.
         */
        includeVariants?: boolean;
        /**
         * Whether to include [hidden products](https://support.wix.com/en/article/wix-stores-changing-the-visibility-of-a-product) in the query. Default is `false`.
         */
        includeHiddenProducts?: boolean;
    };
    /**
     * Hooks that can be added to wix-data operations.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-data.Hooks.html#)
     */
    interface Hooks {
        /**
         * A hook that is triggered after a `count()` operation.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.Hooks.html#afterCount)
         */
        afterCount(count: number, context: Hooks.HookContext): Promise<number> & number;
        /**
         * A hook that is triggered after a `get()` operation.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.Hooks.html#afterGet)
         */
        afterGet(item: any, context: Hooks.HookContext): Promise<any> & any;
        /**
         * A hook that is triggered after an `insert()` operation.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.Hooks.html#afterInsert)
         */
        afterInsert(item: any, context: Hooks.HookContext): Promise<any> & any;
        /**
         * A hook that is triggered after a `find` operation, for each of the items in the query results.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.Hooks.html#afterQuery)
         */
        afterQuery(item: any, context: Hooks.HookContext): Promise<any> & any;
        /**
         * A hook that is triggered after a `remove()` operation.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.Hooks.html#afterRemove)
         */
        afterRemove(item: any, context: Hooks.HookContext): Promise<any> & any;
        /**
         * A hook that is triggered after an `update()` operation.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.Hooks.html#afterUpdate)
         */
        afterUpdate(item: any, context: Hooks.UpdateHookContext): Promise<any> & any;
        /**
         * A hook that is triggered before a `count()` operation.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.Hooks.html#beforeCount)
         */
        beforeCount(query: WixDataQuery, context: Hooks.HookContext): Promise<WixDataQuery> & WixDataQuery;
        /**
         * A hook that is triggered before a `get()` operation.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.Hooks.html#beforeGet)
         */
        beforeGet(itemId: string, context: Hooks.HookContext): Promise<string> & string;
        /**
         * A hook that is triggered before an `insert()` operation.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.Hooks.html#beforeInsert)
         */
        beforeInsert(item: any, context: Hooks.HookContext): Promise<any> & any;
        /**
         * A hook that is triggered before a `find()` operation.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.Hooks.html#beforeQuery)
         */
        beforeQuery(query: WixDataQuery, context: Hooks.HookContext): Promise<WixDataQuery> & WixDataQuery;
        /**
         * A hook that is called before a `remove()` operation.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.Hooks.html#beforeRemove)
         */
        beforeRemove(itemId: string, context: Hooks.UpdateHookContext): Promise<string> & string;
        /**
         * A hook that is triggered before an `update()` operation.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.Hooks.html#beforeUpdate)
         */
        beforeUpdate(item: any, context: Hooks.UpdateHookContext): Promise<any> & any;
        /**
         * A hook that is triggered on any error or rejected Promise from any of the wix-data operations.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.Hooks.html#onFailure)
         */
        onFailure(error: Error, context: Hooks.HookContext): Promise<any>;
    }
    /**
     * Provides functionality for performing aggregations on collection data.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregate.html#)
     */
    interface WixDataAggregate {
        /**
         * Adds a sort to an aggregation, sorting by the items or groups by the specified properties in ascending order.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregate.html#ascending)
         */
        ascending(...propertyName: string[]): WixDataAggregate;
        /**
         * Refines a `WixDataAggregate` to only contain the average value from each aggregation group.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregate.html#avg)
         */
        avg(propertyName: string, projectedName?: string): WixDataAggregate;
        /**
         * Refines a `WixDataAggregate` to contain the item count of each group in the aggregation.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregate.html#count)
         */
        count(): WixDataAggregate;
        /**
         * Adds a sort to an aggregation, sorting by the items or groups by the specified properties in descending order.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregate.html#descending)
         */
        descending(...propertyName: string[]): WixDataAggregate;
        /**
         * Filters out items from being used in an aggregation.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregate.html#filter)
         */
        filter(filter: WixDataFilter): WixDataAggregate;
        /**
         * Groups items together in an aggregation.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregate.html#group)
         */
        group(...propertyName: string[]): WixDataAggregate;
        /**
         * Filters out groups from being returned from an aggregation.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregate.html#having)
         */
        having(filter: WixDataFilter): WixDataAggregate;
        /**
         * Limits the number of items or groups the aggregation returns.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregate.html#limit)
         */
        limit(limit: number): WixDataAggregate;
        /**
         * Refines a `WixDataAggregate` to only contain the maximum value from each aggregation group.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregate.html#max)
         */
        max(propertyName: string, projectedName?: string): WixDataAggregate;
        /**
         * Refines a `WixDataAggregate` to only contain the minimum value from each aggregation group.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregate.html#min)
         */
        min(propertyName: string, projectedName?: string): WixDataAggregate;
        /**
         * Runs the aggregation and returns the results.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregate.html#run)
         */
        run(options?: WixDataAggregate.RunOptions): Promise<WixDataAggregateResult>;
        /**
         * Sets the number of items or groups to skip before returning aggregation results.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregate.html#skip)
         */
        skip(skip: number): WixDataAggregate;
        /**
         * Refines a `WixDataAggregate` to contain the sum from each aggregation group.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregate.html#sum)
         */
        sum(propertyName: string, projectedName?: string): WixDataAggregate;
    }
    /**
     * The results of an aggregation, containing the aggregated values.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregateResult.html#)
     */
    interface WixDataAggregateResult {
        /**
         * Gets the aggregated values.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregateResult.html#items)
         */
        readonly items: any[];
        /**
         * Returns the number of values in the aggregate results.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregateResult.html#length)
         */
        readonly length: number;
        /**
         * Indicates if the aggregation has more results.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregateResult.html#hasNext)
         */
        hasNext(): boolean;
        /**
         * Retrieves the next page of aggregate results.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregateResult.html#next)
         */
        next(): Promise<WixDataAggregateResult>;
    }
    /**
     * Provides functionality for refining a filter.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataFilter.html#)
     */
    interface WixDataFilter {
        /**
         * Adds an `and` condition to the query or filter.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataFilter.html#and)
         */
        and(query: WixDataQuery): WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property value is within a specified range.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataFilter.html#between)
         */
        between(propertyName: string, rangeStart: string | number | Date, rangeEnd: string | number | Date): WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property value contains a specified string.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataFilter.html#contains)
         */
        contains(propertyName: string, string: string): WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property value ends with a specified string.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataFilter.html#endsWith)
         */
        endsWith(propertyName: string, string: string): WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property value equals the specified value.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataFilter.html#eq)
         */
        eq(propertyName: string, value: any): WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property value is greater than or equal to the specified value.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataFilter.html#ge)
         */
        ge(propertyName: string, value: string | number | Date): WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property value is greater than the specified value.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataFilter.html#gt)
         */
        gt(propertyName: string, value: string | number | Date): WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property values equals all of the specified `value` parameters.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataFilter.html#hasAll)
         */
        hasAll(propertyName: string, value: string | number | Date | any[]): WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property value equals any of the specified `value` parameters.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataFilter.html#hasSome)
         */
        hasSome(propertyName: string, value: string | number | Date | any[]): WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property does not exist or does not have any value.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataFilter.html#isEmpty)
         */
        isEmpty(propertyName: string): WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property has any value.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataFilter.html#isNotEmpty)
         */
        isNotEmpty(propertyName: string): WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property value is less than or equal to the specified value.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataFilter.html#le)
         */
        le(propertyName: string, value: string | number | Date): WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property value is less than the specified value.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataFilter.html#lt)
         */
        lt(propertyName: string, value: string | number | Date): WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property value does not equal the specified value.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataFilter.html#ne)
         */
        ne(propertyName: string, value: any): WixDataQuery;
        /**
         * Adds a `not` condition to the query or filter.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataFilter.html#not)
         */
        not(query: WixDataQuery): WixDataQuery;
        /**
         * Adds an `or` condition to the query or filter.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataFilter.html#or)
         */
        or(query: WixDataQuery): WixDataQuery;
        /**
         * Refines a query or filter to match items whose specified property value starts with a specified string.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataFilter.html#startsWith)
         */
        startsWith(propertyName: string, string: string): WixDataQuery;
    }
    /**
     * Contains functionality for refining a data query.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQuery.html#)
     */
    interface WixDataQuery extends WixDataFilter {
        /**
         * Adds a sort to a query or sort, sorting by the specified properties in ascending order.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQuery.html#ascending)
         */
        ascending(...propertyName: string[]): WixDataQuery;
        /**
         * Returns the number of items that match the query.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQuery.html#count)
         */
        count(options?: WixDataOptions): Promise<number>;
        /**
         * Adds a sort to a query or sort, sorting by the specified properties in descending order.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQuery.html#descending)
         */
        descending(...propertyName: string[]): WixDataQuery;
        /**
         * Returns the distinct values that match the query, without duplicates.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQuery.html#distinct)
         */
        distinct(propertyName: string, options?: WixDataQueryOptions): Promise<WixDataQueryResult>;
        /**
         * Lists the fields to return in a query's results.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQuery.html#fields)
         */
        fields(...propertyName: string[]): WixDataQuery;
        /**
         * Returns the items that match the query.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQuery.html#find)
         */
        find(options?: WixDataQueryOptions): Promise<WixDataQueryResult>;
        /**
         * Includes referenced items for the specified properties in a query's results.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQuery.html#include)
         */
        include(...propertyName: string[]): WixDataQuery;
        /**
         * Limits the number of items the query returns.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQuery.html#limit)
         */
        limit(limit: number): WixDataQuery;
        /**
         * Sets the number of items to skip before returning query results.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQuery.html#skip)
         */
        skip(skip: number): WixDataQuery;
    }
    /**
     * The results of a data reference query, containing the retrieved items.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryReferencedResult.html#)
     */
    interface WixDataQueryReferencedResult {
        /**
         * Returns the items that match the reference query.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryReferencedResult.html#items)
         */
        readonly items: any[];
        /**
         * Returns the total number of items that match the reference query.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryReferencedResult.html#totalCount)
         */
        readonly totalCount: number;
        /**
         * Indicates if the reference query has more results.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryReferencedResult.html#hasNext)
         */
        hasNext(): boolean;
        /**
         * Indicates if the reference query has previous results.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryReferencedResult.html#hasPrev)
         */
        hasPrev(): boolean;
        /**
         * Retrieves the next page of reference query results.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryReferencedResult.html#next)
         */
        next(): Promise<WixDataQueryReferencedResult>;
        /**
         * Retrieves the previous page of reference query results.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryReferencedResult.html#prev)
         */
        prev(): Promise<WixDataQueryReferencedResult>;
    }
    /**
     * The results of a data query, containing the retrieved items.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryResult.html#)
     */
    interface WixDataQueryResult {
        /**
         * Returns the index of the current results page number.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryResult.html#currentPage)
         */
        readonly currentPage: number;
        /**
         * Returns the items that match the query.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryResult.html#items)
         */
        readonly items: any[];
        /**
         * Returns the number of items in the current results page.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryResult.html#length)
         */
        readonly length: number;
        /**
         * Returns the query page size.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryResult.html#pageSize)
         */
        readonly pageSize: number;
        /**
         * Indicates if referenced items have been trimmed from the results.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryResult.html#partialIncludes)
         */
        readonly partialIncludes: boolean;
        /**
         * Returns the query used to get the current results.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryResult.html#query)
         */
        readonly query: WixDataQuery;
        /**
         * Returns the total number of items that match the query.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryResult.html#totalCount)
         */
        readonly totalCount: number;
        /**
         * Returns the total number of pages the query produced.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryResult.html#totalPages)
         */
        readonly totalPages: number;
        /**
         * Indicates if the query has more results.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryResult.html#hasNext)
         */
        hasNext(): boolean;
        /**
         * Indicates the query has previous results.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryResult.html#hasPrev)
         */
        hasPrev(): boolean;
        /**
         * Retrieves the next page of query results.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryResult.html#next)
         */
        next(): Promise<WixDataQueryResult>;
        /**
         * Retrieves the previous page of query results.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataQueryResult.html#prev)
         */
        prev(): Promise<WixDataQueryResult>;
    }
    /**
     * Provides functionality for sorting a query.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataSort.html#)
     */
    interface WixDataSort {
        /**
         * Adds a sort to a query or sort, sorting by the specified properties in ascending order.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataSort.html#ascending)
         */
        ascending(...propertyName: string[]): WixDataQuery;
        /**
         * Adds a sort to a query or sort, sorting by the specified properties in descending order.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataSort.html#descending)
         */
        descending(...propertyName: string[]): WixDataQuery;
    }
    /**
     * Hooks that can be added to wix-data operations.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-data.Hooks.html#)
     */
    namespace Hooks {
        /**
         * An object that contains contextual information about the hook being called.
         */
        type HookContext = {
            /**
             * The ID of the collection the hook affects.
             */
            collectionName: string;
            /**
             * The current site user ID. If no user is logged in to the site it may be null.
             */
            userId: string;
            /**
             * The permissions role of the current user. Possibilities are: `anonymous`, `siteMember`, and `siteOwner`.
             */
            userRole: string;
        };
        /**
         * An object that contains contextual information when calling the `beforeUpdate()`, `beforeRemove()`, or `afterUpdate()` hooks.
         */
        type UpdateHookContext = {
            /**
             * The ID of the collection the hook affects.
             */
            collectionName: string;
            /**
             * The current site user ID. If no user is logged in to the site it may be null.
             */
            userId: string;
            /**
             * The permissions role of the current user. Possibilities are: `anonymous`, `siteMember`, and `siteOwner`.
             */
            userRole: string;
            /**
             * The item stored in the database collection before an update or delete operation.
             */
            currentItem: any;
        };
    }
    /**
     * Provides functionality for performing aggregations on collection data.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-data.WixDataAggregate.html#)
     */
    namespace WixDataAggregate {
        /**
         * Options to use when running an aggregation.
         */
        type RunOptions = {
            /**
             * When `true`, prevents permission checks from running for the `run()` operation. Defaults to `false`.
             */
            suppressAuth?: boolean;
            /**
             * When `true`, reads data from the primary database instance.
             * This decreases performance but ensures data retrieved is up to date even immediately after an update.
             * See [Wix Data and Eventual Consistency](https://www.wix.com/velo/reference/wix-data/introduction#wix-data_introduction_wix-data-and-eventual-consistency) for more information.
             *
             * Default: `false`
             */
            consistentRead?: boolean;
            /**
             * Language to translate result text into, in [IETF BCP 47 language tag](https://en.wikipedia.org/wiki/IETF_language_tag) format.
             * If provided, the result text is returned in the specified language. **Note:** Translation for the specified language must be enabled for the collection in [Wix Multilingual](https://www.wix.com/app-market/wix-multilingual).
             * If not provided, result text is not translated.
             */
            language?: string;
        };
    }
}
