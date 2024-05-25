/**
 * [Read more](https://www.wix.com/corvid/reference/wix-ecom.v2.html#)
 */
declare module 'wix-ecom.v2' {
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-ecom-v2.html#backInStockNotification)
     */
    const backInStockNotification: BackInStockNotification;
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-ecom-v2.html#currencies)
     */
    const currencies: Currencies;
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-ecom-v2.BackInStockNotification.html#)
     */
    interface BackInStockNotification {
        /**
         * Create a BackInStockNotificationRequest. May not create new entry if there is existing non resolved request
         * for same CatalogReference and email (will return existing request in response)
         * 	[Read more](https://www.wix.com/corvid/reference/wix-ecom-v2.BackInStockNotification.html#createBackInStockNotificationRequest)
         */
        createBackInStockNotificationRequest(request: BackInStockNotification.BackInStockNotificationRequest, options: BackInStockNotification.CreateBackInStockNotificationRequestOptions): Promise<BackInStockNotification.BackInStockNotificationRequest>;
        /**
         * Delete BackInStockNotificationRequest by id
         * 	[Read more](https://www.wix.com/corvid/reference/wix-ecom-v2.BackInStockNotification.html#deleteBackInStockNotificationRequest)
         */
        deleteBackInStockNotificationRequest(_id: string): Promise<void>;
        /**
         * Get BackInStockNotificationRequest by id
         * 	[Read more](https://www.wix.com/corvid/reference/wix-ecom-v2.BackInStockNotification.html#getBackInStockNotificationRequest)
         */
        getBackInStockNotificationRequest(_id: string): Promise<BackInStockNotification.BackInStockNotificationRequest>;
        /**
         * Returns the number of BackInStockNotificationRequests for a given CatalogReferences.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-ecom-v2.BackInStockNotification.html#getBackInStockNotificationRequestsCountByCatalogReferences)
         */
        getBackInStockNotificationRequestsCountByCatalogReferences(catalogReferences: Array<BackInStockNotification.CatalogReference>): Promise<BackInStockNotification.GetBackInStockNotificationRequestsCountByCatalogReferencesResponse>;
        /**
         * Update BackInStockNotificationRequest status to `NOTIFICATION_SENT`
         * 	[Read more](https://www.wix.com/corvid/reference/wix-ecom-v2.BackInStockNotification.html#markAsNotificationSent)
         */
        markAsNotificationSent(_id: string): Promise<BackInStockNotification.MarkAsNotificationSentResponse>;
        /**
         * Will handle all BackInStockNotificationRequests referencing given item (if `catalog_reference` parameter is present)
         * Otherwise (if `request_ids` parameter present) will handle BackInStockNotificationRequests with given ids
         * 	[Read more](https://www.wix.com/corvid/reference/wix-ecom-v2.BackInStockNotification.html#reportItemsBackInStock)
         */
        reportItemsBackInStock(options: BackInStockNotification.ReportItemsBackInStockOptions): Promise<void>;
    }
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-ecom-v2.Currencies.html#)
     */
    interface Currencies {
        /**
         * Returns an array of amounts converted from the original (`from`) currency to the target (`to`) currency and the timestamp for the conversion rate used.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-ecom-v2.Currencies.html#convertCurrency)
         */
        convertCurrency(identifiers: Currencies.ConvertCurrencyIdentifiers, amounts: Array<Currencies.DecimalValue>): Promise<Currencies.ConvertCurrencyResponse>;
        /**
         * Returns the conversion rate between 2 currencies.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-ecom-v2.Currencies.html#getConversionRate)
         */
        getConversionRate(identifiers: Currencies.GetConversionRateIdentifiers): Promise<Currencies.ConversionRateResponse>;
        /**
         * Returns an array of currencies. The array lists all currencies for which Wix supports conversion and their symbols.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-ecom-v2.Currencies.html#listCurrencies)
         */
        listCurrencies(): Promise<Currencies.ListCurrenciesResponse>;
    }
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-ecom-v2.Events.html#)
     */
    interface Events {
        /**
         * Triggered when a back in stock notification request is created.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-ecom-v2.Events.html#onBackInStockNotificationRequestCreated)
         */
        onBackInStockNotificationRequestCreated(event: Events.wixVeloEventsBackInStockNotificationRequestCreated): void;
        /**
         * Triggered when a back in stock notification request is deleted.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-ecom-v2.Events.html#onBackInStockNotificationRequestDeleted)
         */
        onBackInStockNotificationRequestDeleted(event: Events.wixVeloEventsBackInStockNotificationRequestDeleted): void;
        /**
         * Triggered when a back in stock notification request is updated.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-ecom-v2.Events.html#onBackInStockNotificationRequestUpdated)
         */
        onBackInStockNotificationRequestUpdated(event: Events.wixVeloEventsBackInStockNotificationRequestUpdated): void;
    }
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-ecom-v2.BackInStockNotification.html#)
     */
    namespace BackInStockNotification {
        type ActionEvent = {
            bodyAsJson?: string;
        };
        type App = {
            /**
             * The AppDefId
             */
            appDefId?: string;
            /**
             * The instance Id
             */
            instanceId?: string;
        };
        type BackInStockItemDetails = {
            /**
             * Item image
             */
            image?: string;
            /**
             * Item name
             */
            name?: string;
            /**
             * Item price
             */
            price?: string;
        };
        type BackInStockNotificationRequest = {
            /**
             * Order creation date and time.
             */
            _createdDate?: Date;
            /**
             * Request id (autogenerated upon creation)
             */
            _id?: string;
            /**
             * Describes how notification was made: automatically or manually by store owner
             */
            autoNotified?: boolean;
            /**
             * Item identifier
             */
            catalogReference?: BackInStockNotification.CatalogReference;
            /**
             * Contact id (autogenerated upon creation) which is associated with given email. Will receive all notifications
             */
            contactId?: string;
            /**
             * Email that will receive notification about item being back in stock
             */
            email?: string;
            /**
             * override default item url returned from the implementer
             */
            itemUrl?: string;
            /**
             * Request status
             */
            status?: string;
        };
        type BackInStockNotificationRequestsCount = {
            /**
             * Catalog and item reference. Holds IDs for the item and the catalog it came from.
             */
            catalogReference?: BackInStockNotification.CatalogReference;
            /**
             * The number of unique occurrences of back in stock requests for given CatalogReference.
             */
            count?: number;
        };
        type CatalogReference = {
            /**
             * ID of the catalog app. For items from Wix apps, the following values always apply:
             * + Wix Stores: `"215238eb-22a5-4c36-9e7b-e7c08025e04e"`
             * + Wix Bookings: `"13d21c63-b5ec-5912-8397-c3a5ddb27a97"`
             */
            appId?: string;
            /**
             * ID of the item within its Wix or 3rd-party catalog. For example, `productId` for Wix Stores or `bookingId` for Wix Bookings.
             */
            catalogItemId?: string;
            /**
             * Additional info in key:value form. For example, to specify Wix Stores product options or variants:
             * + `{"options": {"options": {"Size": "M", "Color": "Red"}}}`
             * + `{"options": {"variantId": ""}}`
             */
            options?: Object;
        };
        type CreateBackInStockNotificationRequestOptions = {
            /**
             * Item data used in email and chat notifications
             */
            itemDetails: BackInStockNotification.BackInStockItemDetails;
        };
        type CreateBackInStockNotificationRequestRequest = {
            /**
             * Item data used in email and chat notifications
             */
            itemDetails: BackInStockNotification.BackInStockItemDetails;
            /**
             * Notification request data (id is ignored, as it's generated by server)
             */
            request: BackInStockNotification.BackInStockNotificationRequest;
        };
        type CreateBackInStockNotificationRequestResponse = {
            /**
             * Created BackInStockNotificationRequest
             */
            request?: BackInStockNotification.BackInStockNotificationRequest;
        };
        type CursorPaging = {
            /**
             * Pointer to the next or previous page in the list of results.
             *
             * You can get the relevant cursor token
             * from the `pagingMetadata` object in the previous call's response.
             * Not relevant for the first request.
             */
            cursor?: string;
            /**
             * Number of items to load.
             */
            limit?: number;
        };
        type Cursors = {
            /**
             * Cursor pointing to next page in the list of results.
             */
            next?: string;
            /**
             * Cursor pointing to previous page in the list of results.
             */
            prev?: string;
        };
        type DeleteBackInStockNotificationRequestRequest = {
            /**
             * BackInStockNotificationRequest id
             */
            _id: string;
        };
        type DeleteBackInStockNotificationRequestResponse = {};
        type DomainEvent = {
            /**
             * random GUID so clients can tell if event was already handled
             */
            _id?: string;
            actionEvent?: BackInStockNotification.ActionEvent;
            createdEvent?: BackInStockNotification.EntityCreatedEvent;
            deletedEvent?: BackInStockNotification.EntityDeletedEvent;
            /**
             * A sequence number defining the order of updates to the underlying entity.
             * For example, given that some entity was updated at 16:00 and than again at 16:01,
             * it is guaranteed that the sequence number of the second update is strictly higher than the first.
             * As the consumer, you can use this value to ensure that you handle messages in the correct order.
             * To do so, you will need to persist this number on your end, and compare the sequence number from the
             * message against the one you have stored. Given that the stored number is higher, you should ignore the message.
             */
            entityEventSequence?: string;
            /**
             * Assumes actions are also always typed to an entity_type
             * Example: wix.stores.catalog.product, wix.bookings.session, wix.payments.transaction
             */
            entityFqdn?: string;
            /**
             * Assuming that all messages including Actions have id
             * Example: The id of the specific order, the id of a specific campaign
             */
            entityId?: string;
            /**
             * The time of the event. Useful if there was a delay in dispatching
             */
            eventTime?: Date;
            extendedFieldsUpdatedEvent?: BackInStockNotification.ExtendedFieldsUpdatedEvent;
            /**
             * If present, indicates the action that triggered the event.
             */
            originatedFrom?: string;
            /**
             * This is top level to ease client code dispatching of messages (switch on entity_fqdn+slug)
             * This is although the created/updated/deleted notion is duplication of the oneof types
             * Example: created/updated/deleted/started/completed/email_opened
             */
            slug?: string;
            /**
             * A field that should be set if this event was triggered by an anonymize request.
             * For example you must set it to true when sending an event as a result of a GDPR right to be forgotten request.
             * NOTE: This field is not relevant for `EntityCreatedEvent` but is located here for better ergonomics of consumers.
             */
            triggeredByAnonymizeRequest?: boolean;
            updatedEvent?: BackInStockNotification.EntityUpdatedEvent;
        };
        type DomainEventBodyOneOf = {
            actionEvent?: BackInStockNotification.ActionEvent;
            createdEvent?: BackInStockNotification.EntityCreatedEvent;
            deletedEvent?: BackInStockNotification.EntityDeletedEvent;
            extendedFieldsUpdatedEvent?: BackInStockNotification.ExtendedFieldsUpdatedEvent;
            updatedEvent?: BackInStockNotification.EntityUpdatedEvent;
        };
        type Empty = {};
        type EntityCreatedEvent = {
            entityAsJson?: string;
        };
        type EntityDeletedEvent = {};
        type EntityUpdatedEvent = {
            /**
             * Since platformized APIs only expose PATCH and not PUT we can't assume that the fields sent from the client are the actual diff.
             * This means that to generate a list of changed fields (as opposed to sent fields) one needs to traverse both objects.
             * We don't want to impose this on all developers and so we leave this traversal to the notification recipients which need it.
             */
            currentEntityAsJson?: string;
        };
        type ExtendedFieldsUpdatedEvent = {
            currentEntityAsJson?: string;
        };
        type GetBackInStockNotificationRequestRequest = {
            /**
             * BackInStockNotificationRequest id
             */
            _id: string;
        };
        type GetBackInStockNotificationRequestResponse = {
            /**
             * Requested BackInStockNotificationRequest
             */
            request?: BackInStockNotification.BackInStockNotificationRequest;
        };
        type GetBackInStockNotificationRequestsCountByCatalogReferencesRequest = {
            /**
             * Back in stock requests to be counted identified by their CatalogReference.
             */
            catalogReferences: Array<BackInStockNotification.CatalogReference>;
        };
        type GetBackInStockNotificationRequestsCountByCatalogReferencesResponse = {
            /**
             * The number of back in stock notifications for each of the catalog references requested.
             */
            countsPerCatalogReference?: Array<BackInStockNotification.BackInStockNotificationRequestsCount>;
        };
        type InvalidateCache = {
            /**
             * Invalidate by App
             */
            app?: BackInStockNotification.App;
            /**
             * Is local DS
             */
            localDc?: boolean;
            /**
             * Invalidate by msId. NOT recommended, as this will invalidate the entire site cache!
             */
            metaSiteId?: string;
            /**
             * Invalidate by page id
             */
            page?: BackInStockNotification.Page;
            /**
             * tell us why you're invalidating the cache. You don't need to add your app name
             */
            reason?: string;
            /**
             * Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache!
             */
            siteId?: string;
            /**
             * Invalidate by URI path
             */
            uri?: BackInStockNotification.URI;
        };
        type InvalidateCacheGetByOneOf = {
            /**
             * Invalidate by App
             */
            app?: BackInStockNotification.App;
            /**
             * Invalidate by msId. NOT recommended, as this will invalidate the entire site cache!
             */
            metaSiteId?: string;
            /**
             * Invalidate by page id
             */
            page?: BackInStockNotification.Page;
            /**
             * Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache!
             */
            siteId?: string;
            /**
             * Invalidate by URI path
             */
            uri?: BackInStockNotification.URI;
        };
        type MarkAsNotificationSentRequest = {
            /**
             * BackInStockNotificationRequest id
             */
            _id: string;
        };
        type MarkAsNotificationSentResponse = {
            /**
             * Updated BackInStockNotificationRequest
             */
            request?: BackInStockNotification.BackInStockNotificationRequest;
        };
        type Page = {
            /**
             * the msid the page is on
             */
            metaSiteId?: string;
            /**
             * Invalidate by Page ID
             */
            pageId?: string;
        };
        type PlatformPaging = {
            /**
             * Number of items to load.
             */
            limit?: number;
            /**
             * Number of items to skip in the current sort order.
             */
            offset?: number;
        };
        type PlatformPagingMetadata = {
            /**
             * The number of items returned in this response.
             */
            count?: number;
            /**
             * Cursors to navigate through result pages. Returned if cursor paging was used.
             */
            cursors?: BackInStockNotification.Cursors;
            /**
             * The offset which was requested. Returned if offset paging was used.
             */
            offset?: number;
            /**
             * The total number of items that match the query. Returned if offset paging was used.
             */
            total?: number;
        };
        type PlatformQuery = {
            /**
             * Cursor pointing to page of results. Cannot be used together with `paging`. `cursorPaging.cursor` can not be used together with `filter` or `sort`.
             */
            cursorPaging?: BackInStockNotification.CursorPaging;
            /**
             * Filter object.
             */
            filter?: Object;
            /**
             * Pointer to page of results using offset. Cannot be used together with `cursorPaging`.
             */
            paging?: BackInStockNotification.PlatformPaging;
            /**
             * Sorting options. For example, `[{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}]`.
             */
            sort?: Array<BackInStockNotification.Sorting>;
        };
        type PlatformQueryPagingMethodOneOf = {
            /**
             * Cursor pointing to page of results. Cannot be used together with `paging`. `cursorPaging.cursor` can not be used together with `filter` or `sort`.
             */
            cursorPaging?: BackInStockNotification.CursorPaging;
            /**
             * Pointer to page of results using offset. Cannot be used together with `cursorPaging`.
             */
            paging?: BackInStockNotification.PlatformPaging;
        };
        type QueryBackInStockNotificationRequestsRequest = {
            /**
             * Query options
             */
            query: BackInStockNotification.PlatformQuery;
        };
        type QueryBackInStockNotificationRequestsResponse = {
            /**
             * Details on the paged set of results returned.
             */
            metadata?: BackInStockNotification.PlatformPagingMetadata;
            /**
             * Matching BackInStockNotificationRequests
             */
            requests?: Array<BackInStockNotification.BackInStockNotificationRequest>;
        };
        type ReportItemsBackInStockOptions = {
            /**
             * Item identifier. All BackInStockNotificationRequests for this item identifier will be processed.
             * Cannot be used with `request_ids`.
             */
            catalogReference?: BackInStockNotification.CatalogReference;
            /**
             * Extra key-value pairs that will be passed to back in stock notification email template
             * [`item.price`, `item.name`, `item.image.url`] placeholder values that are taken from item_details field may be overridden by values from this map
             */
            extraAutomationTemplateParameters?: Record<string, string>;
            /**
             * Item data used in email and chat notifications.
             * Item details values will also be passed into automation template which is used for actual back in stock notification to User of User
             * (item_details.price will be passed as `item.price`, item_details.name - as `item.name`, item_details.image.url as `item.image.url`
             * In case when automation template contains only [`item.price`, `item.name`, `item.image.url`] placeholders,
             * `extra_automation_template_parameters` may be left empty
             * In case when automation template is defined without using [`item.price`, `item.name`, `item.image.url`] placeholders,
             * values should be passed in `extra_automation_template_parameters`
             */
            itemDetails: BackInStockNotification.BackInStockItemDetails;
            /**
             * Identifiers of BackInStockNotificationRequest that need to be handled.
             * Cannot be used with `catalog_reference`.
             */
            requestIds?: Array<string>;
        };
        type ReportItemsBackInStockRequest = {
            /**
             * Item identifier. All BackInStockNotificationRequests for this item identifier will be processed.
             * Cannot be used with `request_ids`.
             */
            catalogReference?: BackInStockNotification.CatalogReference;
            /**
             * Extra key-value pairs that will be passed to back in stock notification email template
             * [`item.price`, `item.name`, `item.image.url`] placeholder values that are taken from item_details field may be overridden by values from this map
             */
            extraAutomationTemplateParameters?: Record<string, string>;
            /**
             * Item data used in email and chat notifications.
             * Item details values will also be passed into automation template which is used for actual back in stock notification to User of User
             * (item_details.price will be passed as `item.price`, item_details.name - as `item.name`, item_details.image.url as `item.image.url`
             * In case when automation template contains only [`item.price`, `item.name`, `item.image.url`] placeholders,
             * `extra_automation_template_parameters` may be left empty
             * In case when automation template is defined without using [`item.price`, `item.name`, `item.image.url`] placeholders,
             * values should be passed in `extra_automation_template_parameters`
             */
            itemDetails: BackInStockNotification.BackInStockItemDetails;
            /**
             * Identifiers of BackInStockNotificationRequest that need to be handled.
             * Cannot be used with `catalog_reference`.
             */
            requestIds?: Array<string>;
        };
        type ReportItemsBackInStockResponse = {};
        type Sorting = {
            /**
             * Name of the field to sort by.
             */
            fieldName?: string;
            /**
             * Sort order.
             */
            order?: string;
        };
        type URI = {
            /**
             * the msid the URI is on
             */
            metaSiteId?: string;
            /**
             * URI path to invalidate (e.g. page/my/path) - without leading/trailing slashes
             */
            uriPath?: string;
        };
    }
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-ecom-v2.Currencies.html#)
     */
    namespace Currencies {
        type ConversionRateRequest = {
            /**
             * Original currency to get the rate for as a 3-letter [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) code. The `from` currency code must exist in the array returned by the [`listCurrencies()`](#listcurrencies) function.
             */
            from: string;
            /**
             * Target currency to get the rate for as a 3-letter [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) code. The `to` currency code must exist in the array returned by the [`listCurrencies()`](#listcurrencies) function.
             */
            to: string;
        };
        type ConversionRateResponse = {
            /**
             * Conversion rate between 2 currencies.
             */
            rate?: Currencies.DecimalValue;
            /**
             * Date and time the conversion rate was last updated.
             */
            rateTimestamp?: Date;
        };
        type ConvertCurrencyIdentifiers = {
            /**
             * Original currency to convert from as a 3-letter [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) code. The `from` currency code must exist in the array returned by the [`listCurrencies()`](#listcurrencies) function.
             */
            from: string;
            /**
             * Target currency to convert to as a 3-letter [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) code.  The `to` currency code must exist in the array returned by the [`listCurrencies()`](#listcurrencies) function.
             */
            to: string;
        };
        type ConvertCurrencyRequest = {
            /**
             * Amounts to convert.
             */
            amounts?: Array<Currencies.DecimalValue>;
            /**
             * Original currency to convert from as a 3-letter [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) code. The `from` currency code must exist in the array returned by the [`listCurrencies()`](#listcurrencies) function.
             */
            from: string;
            /**
             * Target currency to convert to as a 3-letter [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) code. The `to` currency code must exist in the array returned by the [`listCurrencies()`](#listcurrencies) function.
             */
            to: string;
        };
        type ConvertCurrencyResponse = {
            /**
             * Converted amounts.
             */
            amounts?: Array<Currencies.DecimalValue>;
            /**
             * Date and time the conversion rate was last updated.
             */
            rateTimestamp?: Date;
        };
        type Currency = {
            /**
             * A 3-letter [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) currency code.
             */
            code?: string;
            /**
             * Currency symbol.
             */
            symbol?: string;
        };
        type CurrencyRate = {};
        type DecimalValue = {
            /**
             * Decimal places to apply. For example, the number of decimal places for `10.95`  is `2`.
             */
            decimalPlaces?: number;
            /**
             * The value without decimal points. For example, the number `10.95` becomes `1095`.
             */
            value?: string;
        };
        type GetConversionRateIdentifiers = {
            /**
             * Original currency to get the rate for as a 3-letter [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) code. The `from` currency code must exist in the array returned by the [`listCurrencies()`](#listcurrencies) function.
             */
            from: string;
            /**
             * Target currency to get the rate for as a 3-letter [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) code. The `to` currency code must exist in the array returned by the [`listCurrencies()`](#listcurrencies) function.
             */
            to: string;
        };
        type ListCurrenciesRequest = {};
        type ListCurrenciesResponse = {
            /**
             * Supported currencies.
             */
            currencies?: Array<Currencies.Currency>;
        };
    }
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-ecom-v2.Events.html#)
     */
    namespace Events {
        type wixVeloEventsActionEvent = {
            bodyAsJson?: string;
        };
        type wixVeloEventsApp = {
            /**
             * The AppDefId
             */
            appDefId?: string;
            /**
             * The instance Id
             */
            instanceId?: string;
        };
        type wixVeloEventsBackInStockItemDetails = {
            /**
             * Item image.
             */
            image?: string;
            /**
             * Item name.
             */
            name?: string;
            /**
             * Item price.
             */
            price?: string;
        };
        type wixVeloEventsBackInStockNotificationRequest = {
            /**
             * Date and time the notification request was created.
             */
            _createdDate?: Date;
            /**
             * Request ID.
             */
            _id?: string;
            /**
             * Whether a notification was sent automatically.
             *
             * `autoNotified` is empty when the notification request is created and is not returned until
             * the field has a value. `autoNotified` receives a value when a notification email is sent for this request object.
             *
             * `autoNotified` sets to `TRUE` if the notification is sent through the site, either automatically or with [Report Items Back In Stock](/report-items-back-in-stock).
             * If the notification email is sent offline but the `status` is updated with [Mark As Notification Sent](/mark-as-notification-sent),
             * then `autoNotified` sets to `FALSE`.
             */
            autoNotified?: boolean;
            /**
             * Catalog and item reference that the notification request is for.
             *
             * Includes IDs for the catalog and item it came from, as well as additional, optional information.
             */
            catalogReference?: Events.wixVeloEventsCatalogReference;
            /**
             * Contact ID for the contact with this `email`.
             *
             * If a contact does not already exist with the email address submitted when creating this request, then a new contact is created.
             * For more information about contacts, see the [Contacts API](https://dev.wix.com/docs/rest/api-reference/contacts/introduction).
             */
            contactId?: string;
            /**
             * Email address to send notification to about item being back in stock.
             */
            email?: string;
            /**
             * Item URL for this request.
             */
            itemUrl?: string;
            /**
             * Status of the notification.
             *
             * `status` is set to `RECEIVED` when the notification request is created.
             * The `status` changes once a notification email is sent for this request object:
             * + When a notification email is sent through the site, either automatically or with [Report Items Back In Stock](/report-items-back-in-stock), then the `status` is briefly set to `PROCESSING` and then set to `NOTIFICATION_SENT` if the email is successul, and `FAILED` if it fails.
             * + When a notification email is sent offline, use [Mark As Notification Sent](/mark-as-notification-sent) to set `status` to `NOTIFICATION_SENT`.
             */
            status?: string;
        };
        type wixVeloEventsBackInStockNotificationRequestCreated = {
            /**
             * The back in stock notification request that was created.
             */
            entity: Events.wixVeloEventsBackInStockNotificationRequest;
            /**
             * Event metadata.
             */
            metadata: Events.wixVeloEventsBackendEventMetadata;
        };
        type wixVeloEventsBackInStockNotificationRequestDeleted = {
            /**
             * Event metadata.
             */
            metadata: Events.wixVeloEventsBackendEventMetadata;
        };
        type wixVeloEventsBackInStockNotificationRequestUpdated = {
            /**
             * The back in stock notification request that was updated.
             */
            entity: Events.wixVeloEventsBackInStockNotificationRequest;
            /**
             * Event metadata.
             */
            metadata: Events.wixVeloEventsBackendEventMetadata;
        };
        type wixVeloEventsBackInStockNotificationRequestsCount = {
            /**
             * Catalog and item reference.
             *
             * Includes IDs and additional, optional information related to the item.
             */
            catalogReference?: Events.wixVeloEventsCatalogReference;
            /**
             * The number of unique back in stock requests for given `catalogReference`.
             */
            count?: number;
        };
        type wixVeloEventsBackendEventMetadata = {
            /**
             * ID of the entity associated with the event.
             */
            entityId: string;
            /**
             * Event timestamp.
             */
            eventTime: string;
            /**
             * Event ID.
             */
            id: string;
            /**
             * Whether the event was triggered as a result of a privacy regulation application (for example, [GDPR](https://support.wix.com/en/article/gdpr-frequently-asked-questions)). For advanced users.
             */
            triggeredByAnonymizeRequest: boolean;
        };
        type wixVeloEventsCatalogReference = {
            /**
             * ID of the app providing the catalog.
             *
             * You can get your app's ID from its page in the [Wix Dev Center](https://dev.wix.com/apps).
             *
             * For items from Wix catalogs, the following values always apply:
             * + Wix Stores: `"215238eb-22a5-4c36-9e7b-e7c08025e04e"`
             * + Wix Bookings: `"13d21c63-b5ec-5912-8397-c3a5ddb27a97"`
             * + Wix Restaurants: `"9a5d83fd-8570-482e-81ab-cfa88942ee60"`
             */
            appId?: string;
            /**
             * ID of the item within the catalog it belongs to.
             */
            catalogItemId?: string;
            /**
             * Additional item details in key:value pairs.
             *
             * Use this optional field to specify a variant of the item or add custom details. There are several ways to use `options`:
             * + Pass specific information about the item variant in this field. For example, size and color of an item of clothing: `"options": {"Size": "M", "Color": "Red"}`.
             * + Create a separate API for creating item variants that stores the details and generates a unique ID for each item variant. Then pass only the variant ID in this field. For example: `"options": {"variantId": ""}`.
             */
            options?: Object;
        };
        type wixVeloEventsCreateBackInStockNotificationRequestRequest = {
            /**
             * Item details to include in the notification when the item is back in stock.
             */
            itemDetails: Events.wixVeloEventsBackInStockItemDetails;
            /**
             * Notification request information.
             *
             * Includes details for the out of stock item and the email address
             * requesting to be notified when it's back in stock.
             */
            request: Events.wixVeloEventsBackInStockNotificationRequest;
        };
        type wixVeloEventsCreateBackInStockNotificationRequestResponse = {
            /**
             * Created back in stock notification request.
             */
            request?: Events.wixVeloEventsBackInStockNotificationRequest;
        };
        type wixVeloEventsCursorPaging = {
            /**
             * Pointer to the next or previous page in the list of results.
             *
             * Pass the relevant cursor token from the `pagingMetadata` object in the previous call's response.
             * Not relevant for the first request.
             */
            cursor?: string;
            /**
             * Maximum number of items to return in the results.
             */
            limit?: number;
        };
        type wixVeloEventsCursors = {
            /**
             * Cursor string pointing to the next page in the list of results.
             */
            next?: string;
            /**
             * Cursor pointing to the previous page in the list of results.
             */
            prev?: string;
        };
        type wixVeloEventsDeleteBackInStockNotificationRequestRequest = {
            /**
             * ID of the notification request to delete.
             */
            _id: string;
        };
        type wixVeloEventsDeleteBackInStockNotificationRequestResponse = {};
        type wixVeloEventsDomainEvent = {
            /**
             * Unique event ID.
             * Allows clients to ignore duplicate webhooks.
             */
            _id?: string;
            actionEvent?: Events.wixVeloEventsActionEvent;
            createdEvent?: Events.wixVeloEventsEntityCreatedEvent;
            deletedEvent?: Events.wixVeloEventsEntityDeletedEvent;
            /**
             * A sequence number defining the order of updates to the underlying entity.
             * For example, given that some entity was updated at 16:00 and than again at 16:01,
             * it is guaranteed that the sequence number of the second update is strictly higher than the first.
             * As the consumer, you can use this value to ensure that you handle messages in the correct order.
             * To do so, you will need to persist this number on your end, and compare the sequence number from the
             * message against the one you have stored. Given that the stored number is higher, you should ignore the message.
             */
            entityEventSequence?: string;
            /**
             * Assumes actions are also always typed to an entity_type
             * Example: wix.stores.catalog.product, wix.bookings.session, wix.payments.transaction
             */
            entityFqdn?: string;
            /**
             * ID of the entity associated with the event.
             */
            entityId?: string;
            /**
             * Event timestamp.
             */
            eventTime?: Date;
            /**
             * If present, indicates the action that triggered the event.
             */
            originatedFrom?: string;
            /**
             * This is top level to ease client code dispatching of messages (switch on entity_fqdn+slug)
             * This is although the created/updated/deleted notion is duplication of the oneof types
             * Example: created/updated/deleted/started/completed/email_opened
             */
            slug?: string;
            /**
             * Whether the event was triggered as a result of a privacy regulation application
             * (for example, GDPR).
             */
            triggeredByAnonymizeRequest?: boolean;
            updatedEvent?: Events.wixVeloEventsEntityUpdatedEvent;
        };
        type wixVeloEventsDomainEventBodyOneOf = {
            actionEvent?: Events.wixVeloEventsActionEvent;
            createdEvent?: Events.wixVeloEventsEntityCreatedEvent;
            deletedEvent?: Events.wixVeloEventsEntityDeletedEvent;
            updatedEvent?: Events.wixVeloEventsEntityUpdatedEvent;
        };
        type wixVeloEventsEmpty = {};
        type wixVeloEventsEntityCreatedEvent = {
            entityAsJson?: string;
        };
        type wixVeloEventsEntityDeletedEvent = {
            /**
             * Entity that was deleted
             */
            deletedEntityAsJson?: string;
        };
        type wixVeloEventsEntityUpdatedEvent = {
            /**
             * Since platformized APIs only expose PATCH and not PUT we can't assume that the fields sent from the client are the actual diff.
             * This means that to generate a list of changed fields (as opposed to sent fields) one needs to traverse both objects.
             * We don't want to impose this on all developers and so we leave this traversal to the notification recipients which need it.
             */
            currentEntityAsJson?: string;
        };
        type wixVeloEventsGetBackInStockNotificationRequestRequest = {
            /**
             * ID of the notification request to retrieve.
             */
            _id: string;
        };
        type wixVeloEventsGetBackInStockNotificationRequestResponse = {
            /**
             * Retrieved back in stock notification request.
             */
            request?: Events.wixVeloEventsBackInStockNotificationRequest;
        };
        type wixVeloEventsGetBackInStockNotificationRequestsCountByCatalogReferencesRequest = {
            /**
             * `catalogReference` items to retrieve the notification request for.
             */
            catalogReferences: Array<Events.wixVeloEventsCatalogReference>;
        };
        type wixVeloEventsGetBackInStockNotificationRequestsCountByCatalogReferencesResponse = {
            /**
             * Amount of back in stock notifications for each of the retrieved `catalogReference` items.
             */
            countsPerCatalogReference?: Array<Events.wixVeloEventsBackInStockNotificationRequestsCount>;
        };
        type wixVeloEventsInvalidateCache = {
            /**
             * Invalidate by App
             */
            app?: Events.wixVeloEventsApp;
            /**
             * Is local DS
             */
            localDc?: boolean;
            /**
             * Invalidate by msId. NOT recommended, as this will invalidate the entire site cache!
             */
            metaSiteId?: string;
            /**
             * Invalidate by page id
             */
            page?: Events.wixVeloEventsPage;
            /**
             * tell us why you're invalidating the cache. You don't need to add your app name
             */
            reason?: string;
            /**
             * Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache!
             */
            siteId?: string;
            /**
             * Invalidate by URI path
             */
            uri?: Events.wixVeloEventsUri;
        };
        type wixVeloEventsInvalidateCacheGetByOneOf = {
            /**
             * Invalidate by App
             */
            app?: Events.wixVeloEventsApp;
            /**
             * Invalidate by msId. NOT recommended, as this will invalidate the entire site cache!
             */
            metaSiteId?: string;
            /**
             * Invalidate by page id
             */
            page?: Events.wixVeloEventsPage;
            /**
             * Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache!
             */
            siteId?: string;
            /**
             * Invalidate by URI path
             */
            uri?: Events.wixVeloEventsUri;
        };
        type wixVeloEventsMarkAsNotificationSentRequest = {
            /**
             * ID of the notification request to mark.
             */
            _id: string;
        };
        type wixVeloEventsMarkAsNotificationSentResponse = {
            /**
             * Marked back in stock notification request.
             */
            request?: Events.wixVeloEventsBackInStockNotificationRequest;
        };
        type wixVeloEventsPage = {
            /**
             * the msid the page is on
             */
            metaSiteId?: string;
            /**
             * Invalidate by Page ID
             */
            pageId?: string;
        };
        type wixVeloEventsPlatformPaging = {
            /**
             * Number of items to load.
             */
            limit?: number;
            /**
             * Number of items to skip in the current sort order.
             */
            offset?: number;
        };
        type wixVeloEventsPlatformPagingMetadata = {
            /**
             * The number of items returned in this response.
             */
            count?: number;
            /**
             * Cursors to navigate through result pages. Returned if cursor paging was used.
             */
            cursors?: Events.wixVeloEventsCursors;
            /**
             * The offset which was requested. Returned if offset paging was used.
             */
            offset?: number;
            /**
             * The total number of items that match the query. Returned if offset paging was used.
             */
            total?: number;
        };
        type wixVeloEventsPlatformQuery = {
            /**
             * Cursor pointing to page of results. Cannot be used together with `paging`. `cursorPaging.cursor` can not be used together with `filter` or `sort`.
             */
            cursorPaging?: Events.wixVeloEventsCursorPaging;
            /**
             * Filter object.
             */
            filter?: Object;
            /**
             * Pointer to page of results using offset. Cannot be used together with `cursorPaging`.
             */
            paging?: Events.wixVeloEventsPlatformPaging;
            /**
             * Sorting options. For example, `[{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}]`.
             */
            sort?: Array<Events.wixVeloEventsSorting>;
        };
        type wixVeloEventsPlatformQueryPagingMethodOneOf = {
            /**
             * Cursor pointing to page of results. Cannot be used together with `paging`. `cursorPaging.cursor` can not be used together with `filter` or `sort`.
             */
            cursorPaging?: Events.wixVeloEventsCursorPaging;
            /**
             * Pointer to page of results using offset. Cannot be used together with `cursorPaging`.
             */
            paging?: Events.wixVeloEventsPlatformPaging;
        };
        type wixVeloEventsQueryBackInStockNotificationRequestsRequest = {
            /**
             * Query options.
             */
            query: Events.wixVeloEventsPlatformQuery;
        };
        type wixVeloEventsQueryBackInStockNotificationRequestsResponse = {
            /**
             * Details on the paged set of results returned.
             */
            metadata?: Events.wixVeloEventsPlatformPagingMetadata;
            /**
             * Retrieved back in stock requests.
             */
            requests?: Array<Events.wixVeloEventsBackInStockNotificationRequest>;
        };
        type wixVeloEventsReportItemsBackInStockRequest = {
            /**
             * `catalogReference` item to send notifications for.
             *
             * Cannot be used with `requestIds`.
             */
            catalogReference?: Events.wixVeloEventsCatalogReference;
            /**
             * Additional key-value pairs to pass to the back in stock notification template.
             */
            extraAutomationTemplateParameters?: Record<string, string>;
            /**
             * Item details to use in notifications.
             *
             * `itemDetails` may populate dynamic valyes in the notification template, as follows:
             * + `itemDetails.name` passes to the template as `item.name`
             * + `itemDetails.price` passes to the template as `item.price`
             * + `itemDetails.image.url` passes to the template as `item.image.url`
             *
             * Use `extraAutomationTemplateParameters` to pass additional dynamic values.
             */
            itemDetails: Events.wixVeloEventsBackInStockItemDetails;
            /**
             * IDs of requests to send notifications for.
             *
             * Cannot be used with `catalogReference`.
             */
            requestIds?: Array<string>;
        };
        type wixVeloEventsReportItemsBackInStockResponse = {};
        type wixVeloEventsSorting = {
            /**
             * Name of the field to sort by.
             */
            fieldName?: string;
            /**
             * Sort order.
             */
            order?: string;
        };
        type wixVeloEventsUri = {
            /**
             * the msid the URI is on
             */
            metaSiteId?: string;
            /**
             * URI path to invalidate (e.g. page/my/path) - without leading/trailing slashes
             */
            uriPath?: string;
        };
    }
}
