/**
 * [Read more](https://www.wix.com/corvid/reference/wix-reviews.v2.html#)
 */
declare module 'wix-reviews.v2' {
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.html#reviews)
     */
    const reviews: Reviews;
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.Events.html#)
     */
    interface Events {
        /**
         * Triggered when a review is created.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.Events.html#onReviewCreated)
         */
        onReviewCreated(event: Events.wixVeloEventsReviewCreated): void;
        /**
         * Triggered when a review is deleted.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.Events.html#onReviewDeleted)
         */
        onReviewDeleted(event: Events.wixVeloEventsReviewDeleted): void;
        /**
         * Triggered when a review's moderation status is changed.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.Events.html#onReviewModerationStatusChanged)
         */
        onReviewModerationStatusChanged(event: Events.wixVeloEventsReviewModerationStatusChanged): void;
        /**
         * Triggered when a review is updated.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.Events.html#onReviewUpdated)
         */
        onReviewUpdated(event: Events.wixVeloEventsReviewUpdated): void;
    }
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.Reviews.html#)
     */
    interface Reviews {
        /**
         * Creates a review.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.Reviews.html#createReview)
         */
        createReview(review: Reviews.Review): Promise<Reviews.Review>;
        /**
         * Deletes a review.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.Reviews.html#deleteReview)
         */
        deleteReview(reviewId: string): Promise<Reviews.DeleteReviewResponse>;
        /**
         * Retrieves a review.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.Reviews.html#getReview)
         */
        getReview(reviewId: string, options: Reviews.GetReviewOptions): Promise<Reviews.Review>;
        /**
         * Creates a query to retrieve a list of reviews.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.Reviews.html#queryReviews)
         */
        queryReviews(options: Reviews.QueryReviewsOptions): Reviews.ReviewsQueryBuilder;
        /**
         * Updates a review.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.Reviews.html#updateReview)
         */
        updateReview(_id: string, review: Reviews.UpdateReview): Promise<Reviews.Review>;
    }
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.Events.html#)
     */
    namespace Events {
        type wixVeloEventsActionEvent = {
            bodyAsJson?: string;
        };
        type wixVeloEventsApplicationError = {
            /**
             * Error code.
             */
            code?: string;
            /**
             * Data related to the error.
             */
            data?: Object;
            /**
             * Description of the error.
             */
            description?: string;
        };
        type wixVeloEventsAsyncSubmitModeratedContentRequest = {
            /**
             * App Def Id of moderated content owner vertical, if not provided, will be taken from CallScope
             */
            appDefId?: string;
            /**
             * Content to moderate
             */
            content?: Events.wixVeloEventsContent;
            /**
             * optional content revision supplied and managed by vertical
             */
            contentRevision?: string;
            /**
             * meta_site_id
             */
            metaSiteId?: string;
        };
        type wixVeloEventsAuthor = {
            /**
             * Display name of the author.
             */
            authorName?: string;
            /**
             * Contact ID of the author.
             */
            contactId?: string;
        };
        type wixVeloEventsAuthorInfo = {
            externalApp?: string;
            service?: string;
            siteMemberId?: string;
            userId?: string;
            visitorId?: string;
        };
        type wixVeloEventsAuthorInfoIdentityOneOf = {
            externalApp?: string;
            service?: string;
            siteMemberId?: string;
            userId?: string;
            visitorId?: string;
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
        type wixVeloEventsBulkActionMetadata = {
            /**
             * Number of items that couldn't be processed.
             */
            totalFailures?: number;
            /**
             * Number of items that were successfully processed.
             */
            totalSuccesses?: number;
            /**
             * Number of failures without details because detailed failure threshold was exceeded.
             */
            undetailedFailures?: number;
        };
        type wixVeloEventsBulkCreateReviewRequest = {
            returnEntity?: boolean;
            /**
             * Reviews to create.
             */
            reviews: Array<Events.wixVeloEventsReview>;
        };
        type wixVeloEventsBulkCreateReviewResponse = {
            bulkActionMetadata?: Events.wixVeloEventsBulkActionMetadata;
            /**
             * Created reviews, only returned if returnEntity is set to true.
             * Items are returned for successful operations and when returnEntity in the request is set to true.
             */
            results?: Array<Events.wixVeloEventsBulkReviewResult>;
        };
        type wixVeloEventsBulkDeleteReviewsRequest = {
            /**
             * Filter object.
             *
             * Possible filters:
             * `$eq`, `$gt`, `$gte`, `$in`, `$lt`, `$lte`, `$ne`.
             *
             * For a detailed list of supported filters, see
             * filtering and sorting for
             * [review properties](https://dev.wix.com/api/rest/reviews/sort-and-filter).
             *
             * Example:
             * `{ "filter": { "namespace":  "$eq": ["stores"] } }`
             */
            filter?: Object;
        };
        type wixVeloEventsBulkDeleteReviewsResponse = {
            /**
             * Bulk job ID.
             */
            jobId?: string;
        };
        type wixVeloEventsBulkReviewResult = {
            /**
             * ItemMetadata
             */
            itemMetadata?: Events.wixVeloEventsItemMetadata;
            /**
             * New Reviews
             */
            review?: Events.wixVeloEventsReview;
        };
        type wixVeloEventsBulkUpdateModerationStatusRequest = {
            /**
             * Reviews to moderate
             */
            filter?: Object;
            /**
             * Moderation status to set
             */
            status?: string;
        };
        type wixVeloEventsBulkUpdateModerationStatusResponse = {
            /**
             * Reference to async job
             */
            jobId?: string;
        };
        type wixVeloEventsClassifierValues = {
            /**
             * classifier type, fqdn if applicable
             */
            type?: string;
            /**
             * applicable value ids
             */
            valueIds?: Array<string>;
        };
        type wixVeloEventsContent = {
            /**
             * time of content creation
             */
            _createdDate?: Date;
            /**
             * content id
             */
            _id?: string;
            /**
             * author info
             */
            authorInfo?: Events.wixVeloEventsAuthorInfo;
            /**
             * classifier values that apply to content (i.e. Blog categories)
             */
            classifierValues?: Array<Events.wixVeloEventsClassifierValues>;
            /**
             * content parts
             */
            contentParts?: Array<Events.wixVeloEventsContentPart>;
            /**
             * optional deep link to content in vertical ui
             */
            deepLink?: Events.wixVeloEventsLink;
            /**
             * fqdn for the content
             */
            fqdn?: string;
            /**
             * parent content info, optional
             */
            parent?: Events.wixVeloEventsParentInfo;
            /**
             * optional content title
             */
            title?: string;
            /**
             * content visibility (read access) settings
             */
            visibility?: Events.wixVeloEventsVisibility;
        };
        type wixVeloEventsContentPart = {
            /**
             * Wix Media item
             */
            attachment?: Events.wixVeloEventsMediaItem;
            /**
             * draftJs content
             */
            draftJs?: string;
            jsonData?: any;
            /**
             * content part name
             */
            name?: string;
            /**
             * content id stored in the future (rich) content server
             */
            storedContentId?: string;
            /**
             * plain text content
             */
            textContent?: string;
        };
        type wixVeloEventsContentPartContentOneOf = {
            /**
             * Wix Media item
             */
            attachment?: Events.wixVeloEventsMediaItem;
            /**
             * draftJs content
             */
            draftJs?: string;
            jsonData?: any;
            /**
             * content id stored in the future (rich) content server
             */
            storedContentId?: string;
            /**
             * plain text content
             */
            textContent?: string;
        };
        type wixVeloEventsCreateReviewAndContactRequest = {
            /**
             * Review content.
             */
            content: Events.wixVeloEventsReviewContent;
            /**
             * Email address of the review author.  Required for 3rd-party apps.
             */
            email?: string;
            /**
             * ID of the entity to review.
             */
            entityId: string;
            /**
             * Name of the review author. Displayed as part of the review. Required for 3rd-party apps.
             */
            name?: string;
            /**
             * Namespace where the review is created.
             */
            namespace: string;
        };
        type wixVeloEventsCreateReviewRequest = {
            /**
             * Review data.
             */
            review: Events.wixVeloEventsReview;
        };
        type wixVeloEventsCreateReviewResponse = {
            /**
             * Created review.
             */
            review?: Events.wixVeloEventsReview;
        };
        type wixVeloEventsCursorPaging = {
            /**
             * Cursor returned in last query response. Should not be provided on first page request.
             */
            cursor?: string;
            /**
             * The number of items to load.
             * Cursor token returned in the query response. To be used on the next query request, but not the first query request.
             *
             * Max: `100`
             * Default: `50`
             */
            limit?: number;
        };
        type wixVeloEventsCursors = {
            /**
             * Cursor pointing to next result page.
             */
            next?: string;
            /**
             * Cursor pointing to previous result page.
             */
            prev?: string;
        };
        type wixVeloEventsDeleteReviewRequest = {
            /**
             * Review ID.
             */
            reviewId: string;
        };
        type wixVeloEventsDeleteReviewResponse = {
            /**
             * Review entity.
             */
            review?: Events.wixVeloEventsReview;
        };
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
        type wixVeloEventsEntityDeletedEvent = {};
        type wixVeloEventsEntityUpdatedEvent = {
            /**
             * Since platformized APIs only expose PATCH and not PUT we can't assume that the fields sent from the client are the actual diff.
             * This means that to generate a list of changed fields (as opposed to sent fields) one needs to traverse both objects.
             * We don't want to impose this on all developers and so we leave this traversal to the notification recipients which need it.
             */
            currentEntityAsJson?: string;
        };
        type wixVeloEventsGetDeletedReviewRequest = {
            /**
             * Review ID.
             */
            reviewId: string;
        };
        type wixVeloEventsGetDeletedReviewResponse = {
            /**
             * Review.
             */
            review?: Events.wixVeloEventsReview;
        };
        type wixVeloEventsGetReviewRequest = {
            /**
             * Whether to return private (unpublished) reviews.
             *
             * Default: `false`
             */
            returnPrivateReviews?: boolean;
            /**
             * Review ID.
             */
            reviewId: string;
        };
        type wixVeloEventsGetReviewResponse = {
            /**
             * Review.
             */
            review?: Events.wixVeloEventsReview;
        };
        type wixVeloEventsItemMetadata = {
            /**
             * Item ID. Should always be available, unless it's impossible (for example, when failing to create an item).
             */
            _id?: string;
            /**
             * Details about the error in case of failure.
             */
            error?: Events.wixVeloEventsApplicationError;
            /**
             * Index of the item within the request array. Allows for correlation between request and response items.
             */
            originalIndex?: number;
            /**
             * Whether the requested action was successful for this item. When `false`, the `error` field is populated.
             */
            success?: boolean;
        };
        type wixVeloEventsLink = {
            /**
             * The mobile deeplink - e.g wix://app/1234-1234-1234-1234/memberships/manager
             */
            mobileLink?: string;
            /**
             * Page url
             */
            url?: string;
        };
        type wixVeloEventsMedia = {
            /**
             * Image media item.
             */
            image?: string;
            /**
             * Video media item.
             */
            video?: string;
        };
        type wixVeloEventsMediaItem = {
            /**
             * WixMedia document
             */
            document?: string;
            /**
             * WixMedia image
             */
            image?: string;
            /**
             * WixMedia video
             */
            video?: string;
        };
        type wixVeloEventsMediaItemMediaOneOf = {
            /**
             * WixMedia document
             */
            document?: string;
            /**
             * WixMedia image
             */
            image?: string;
            /**
             * WixMedia video
             */
            video?: string;
        };
        type wixVeloEventsMediaMediaOneOf = {
            /**
             * Image media item.
             */
            image?: string;
            /**
             * Video media item.
             */
            video?: string;
        };
        type wixVeloEventsModeration = {
            /**
             * Indicates whether a moderator manually changed the `moderationStatus` of the review.
             *
             * If the `moderationStatus` changed automatically because the review
             * passed the moderation rules or if moderation is turned off, this field is set to `false`.
             */
            manuallyChanged?: boolean;
            /**
             * - `APPROVED`: The review is approved and published.
             * - `IN_MODERATION`: The review is pending moderation. Moderation can be applied in the site owner's [Dashboard](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Freviews/pending).
             * - `REJECTED`: The review is rejected and deleted from the site.
             * - `SUBMITTED`: Initial status of the review before the moderation process.
             */
            moderationStatus?: string;
        };
        type wixVeloEventsModerationStatusChanged = {
            /**
             * Review entity
             */
            review?: Events.wixVeloEventsReview;
        };
        type wixVeloEventsOrigin = {
            /**
             * The app ID of the APP review origin.
             * Set only when the review origin is APP.
             */
            appId?: string;
            /**
             * The type of the review origin.
             */
            type?: string;
        };
        type wixVeloEventsPagingMetadataV2 = {
            /**
             * Number of items returned in the response.
             */
            count?: number;
            /**
             * Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used.
             */
            cursors?: Events.wixVeloEventsCursors;
            /**
             * Offset that was requested.
             */
            offset?: number;
            /**
             * Flag that indicates the server failed to calculate the `total` field.
             */
            tooManyToCount?: boolean;
            /**
             * Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set.
             */
            total?: number;
        };
        type wixVeloEventsParentInfo = {
            /**
             * classifier values that apply to parent (i.e. Blog categories)
             */
            classifierValues?: Array<Events.wixVeloEventsClassifierValues>;
            /**
             * classifier values for parent are not known and should be queried from SPI for parent if possible
             */
            classifiersUnknown?: boolean;
            /**
             * fqdn for the parent
             */
            fqdn?: string;
            /**
             * parent id
             */
            parentId?: string;
        };
        type wixVeloEventsQueryReviewsRequest = {
            /**
             * Review query.
             */
            query?: Events.wixVeloEventsQueryV2;
            /**
             * Whether to return private (unpublished) reviews.
             *
             * Default: `false`
             */
            returnPrivateReviews?: boolean;
        };
        type wixVeloEventsQueryReviewsResponse = {
            /**
             * Paging metadata.
             */
            metadata?: Events.wixVeloEventsPagingMetadataV2;
            /**
             * List of returned reviews.
             */
            reviews?: Array<Events.wixVeloEventsReview>;
        };
        type wixVeloEventsQueryV2 = {
            /**
             * Cursor paging options.
             */
            cursorPaging?: Events.wixVeloEventsCursorPaging;
            /**
             * Filter object. See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language) for more information.
             * For a detailed list of supported filters, see [Reviews: Supported Filters and Sorting](https://dev.wix.com/api/rest/reviews/sort-and-filter),
             */
            filter?: Object;
            /**
             * Sorting options. See [Reviews: Supported Filters and Sorting](https://dev.wix.com/api/rest/reviews/sort-and-filter) for more information,
             */
            sort?: Array<Events.wixVeloEventsSorting>;
        };
        type wixVeloEventsRemoveReplyRequest = {
            /**
             * Review ID
             */
            reviewId: string;
        };
        type wixVeloEventsRemoveReplyResponse = {
            /**
             * Review ID
             */
            review?: Events.wixVeloEventsReview;
        };
        type wixVeloEventsReply = {
            /**
             * Date and time the reply was created.
             */
            _createdDate?: Date;
            /**
             * Date and time the reply was updated.
             */
            _updatedDate?: Date;
            /**
             * Reply content.
             */
            message?: string;
        };
        type wixVeloEventsReview = {
            /**
             * Date and time the review was created.
             */
            _createdDate?: Date;
            /**
             * Review ID.
             */
            _id?: string;
            /**
             * Date and time the review was updated.
             */
            _updatedDate?: Date;
            /**
             * Author of the review.
             */
            author?: Events.wixVeloEventsAuthor;
            /**
             * Review content.
             */
            content?: Events.wixVeloEventsReviewContent;
            /**
             * ID of the entity to review. For example, a Wix Stores product ID.
             */
            entityId?: string;
            /**
             * Number of site visitors who found the review helpful.
             */
            foundHelpful?: number;
            /**
             * Number of site visitors who found the review unhelpful.
             */
            foundUnhelpful?: number;
            /**
             * Helpfulness score.
             *
             * Calculated by subtracting `foundUnhelpful` from `foundHelpful`.
             */
            helpfulness?: number;
            /**
             * Moderation status of the review.
             */
            moderation?: Events.wixVeloEventsModeration;
            /**
             * Review namespace. Currently integrated with Wix Stores, as `stores`.
             */
            namespace?: string;
            /**
             * Provides information about the origin of the review.
             * Organic reviews are created by site visitors or members.
             * App reviews are created by apps even though a site visitor or member is the author of the review.
             * Apps can not create or update organic reviews.
             */
            origin?: Events.wixVeloEventsOrigin;
            /**
             * Reply to the review.
             */
            reply?: Events.wixVeloEventsReply;
            /**
             * Date and time then review was written. It should the same time as created_date except for reviews
             * that were imported from the other review system.
             */
            reviewDate?: Date;
            /**
             * Revision number, which increments by 1 each time the review is updated.
             * To prevent conflicting changes,
             * the current revision must be passed when updating the review.
             * Ignored when creating a review.
             */
            revision?: string;
            /**
             * Indicates whether the review has been verified through a Verify Product Purchase call to the Review Product catalog SPI.
             */
            verified?: boolean;
        };
        type wixVeloEventsReviewContent = {
            /**
             * Review body.
             *
             * Max: 3,000 characters
             */
            body?: string;
            /**
             * List of media items associated with the review.
             *
             * Max: 10 items
             */
            media?: Array<Events.wixVeloEventsMedia>;
            /**
             * Rating of the review.
             *
             * Min: `1`
             * Max: `5`
             */
            rating?: number;
            /**
             * Review title.
             */
            title?: string;
        };
        type wixVeloEventsReviewCreated = {
            entity: Events.wixVeloEventsReview;
            metadata: Events.wixVeloEventsBackendEventMetadata;
        };
        type wixVeloEventsReviewDeleted = {
            metadata: Events.wixVeloEventsBackendEventMetadata;
        };
        type wixVeloEventsReviewModerationStatusChanged = {
            data: Events.wixVeloEventsModerationStatusChanged;
            metadata: Events.wixVeloEventsBackendEventMetadata;
        };
        type wixVeloEventsReviewUpdated = {
            entity: Events.wixVeloEventsReview;
            metadata: Events.wixVeloEventsBackendEventMetadata;
        };
        type wixVeloEventsSetReplyRequest = {
            /**
             * Response to review author
             */
            message: string;
            /**
             * Review id
             */
            reviewId: string;
        };
        type wixVeloEventsSetReplyResponse = {
            /**
             * Review entity
             */
            review?: Events.wixVeloEventsReview;
        };
        type wixVeloEventsSorting = {
            /**
             * Name of the field to sort by.
             */
            fieldName?: string;
            /**
             * Sort order.
             *
             * Default: `ASC`.
             */
            order?: string;
        };
        type wixVeloEventsUpdateReviewContentRequest = {
            /**
             * Review content.
             */
            content?: Events.wixVeloEventsReviewContent;
            /**
             * Fieldmask for update.
             * Supported fields: content.title, content.body, content.media, content.rating
             */
            fieldMask?: Array<string>;
            /**
             * Review ID.
             */
            reviewId: string;
        };
        type wixVeloEventsUpdateReviewContentResponse = {
            /**
             * Updated review data.
             */
            review?: Events.wixVeloEventsReview;
        };
        type wixVeloEventsUpdateReviewRequest = {
            /**
             * Review to update.
             */
            review?: Events.wixVeloEventsReview;
        };
        type wixVeloEventsUpdateReviewResponse = {
            /**
             * Updated review data.
             */
            review?: Events.wixVeloEventsReview;
        };
        type wixVeloEventsVideoResolution = {
            /**
             * Video format for example, mp4, hls.
             */
            format?: string;
            /**
             * Video height.
             */
            height?: number;
            /**
             * Video thumbnail.
             */
            poster?: string;
            /**
             * Video URL.
             */
            url?: string;
            /**
             * Video width.
             */
            width?: number;
        };
        type wixVeloEventsVisibility = {
            /**
             * array of permission ids or member groups that can be used with isPermitted to check content visibility
             */
            permissions?: Array<string>;
            /**
             * enum stating content visibility type
             */
            visibilityType?: string;
        };
    }
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.Reviews.html#)
     */
    namespace Reviews {
        type ActionEvent = {
            bodyAsJson?: string;
        };
        type ApplicationError = {
            /**
             * Error code.
             */
            code?: string;
            /**
             * Data related to the error.
             */
            data?: Object;
            /**
             * Description of the error.
             */
            description?: string;
        };
        type AsyncSubmitModeratedContentRequest = {
            /**
             * App Def Id of moderated content owner vertical, if not provided, will be taken from CallScope
             */
            appDefId?: string;
            /**
             * Content to moderate
             */
            content?: Reviews.Content;
            /**
             * optional content revision supplied and managed by vertical
             */
            contentRevision?: string;
            /**
             * meta_site_id
             */
            metaSiteId?: string;
        };
        type Author = {
            /**
             * Display name of the author.
             */
            authorName?: string;
            /**
             * Contact ID of the author.
             */
            contactId?: string;
        };
        type AuthorInfo = {
            externalApp?: string;
            service?: string;
            siteMemberId?: string;
            userId?: string;
            visitorId?: string;
        };
        type AuthorInfoIdentityOneOf = {
            externalApp?: string;
            service?: string;
            siteMemberId?: string;
            userId?: string;
            visitorId?: string;
        };
        type BulkActionMetadata = {
            /**
             * Number of items that couldn't be processed.
             */
            totalFailures?: number;
            /**
             * Number of items that were successfully processed.
             */
            totalSuccesses?: number;
            /**
             * Number of failures without details because detailed failure threshold was exceeded.
             */
            undetailedFailures?: number;
        };
        type BulkCreateReviewOptions = {
            returnEntity?: boolean;
        };
        type BulkCreateReviewRequest = {
            returnEntity?: boolean;
            /**
             * Reviews to create.
             */
            reviews: Array<Reviews.Review>;
        };
        type BulkCreateReviewResponse = {
            bulkActionMetadata?: Reviews.BulkActionMetadata;
            /**
             * Created reviews, only returned if returnEntity is set to true.
             * Items are returned for successful operations and when returnEntity in the request is set to true.
             */
            results?: Array<Reviews.BulkReviewResult>;
        };
        type BulkDeleteReviewsOptions = {
            /**
             * Filter object.
             */
            filter?: Object;
        };
        type BulkDeleteReviewsRequest = {
            /**
             * Filter object.
             */
            filter?: Object;
        };
        type BulkDeleteReviewsResponse = {
            /**
             * Bulk job ID.
             */
            jobId?: string;
        };
        type BulkReviewResult = {
            /**
             * ItemMetadata
             */
            itemMetadata?: Reviews.ItemMetadata;
            /**
             * New Reviews
             */
            review?: Reviews.Review;
        };
        type BulkUpdateModerationStatusOptions = {
            /**
             * Reviews to moderate
             */
            filter?: Object;
            /**
             * Moderation status to set
             */
            status?: string;
        };
        type BulkUpdateModerationStatusRequest = {
            /**
             * Reviews to moderate
             */
            filter?: Object;
            /**
             * Moderation status to set
             */
            status?: string;
        };
        type BulkUpdateModerationStatusResponse = {
            /**
             * Reference to async job
             */
            jobId?: string;
        };
        type ClassifierValues = {
            /**
             * classifier type, fqdn if applicable
             */
            type?: string;
            /**
             * applicable value ids
             */
            valueIds?: Array<string>;
        };
        type Content = {
            /**
             * time of content creation
             */
            _createdDate?: Date;
            /**
             * content id
             */
            _id?: string;
            /**
             * author info
             */
            authorInfo?: Reviews.AuthorInfo;
            /**
             * classifier values that apply to content (i.e. Blog categories)
             */
            classifierValues?: Array<Reviews.ClassifierValues>;
            /**
             * content parts
             */
            contentParts?: Array<Reviews.ContentPart>;
            /**
             * optional deep link to content in vertical ui
             */
            deepLink?: Reviews.Link;
            /**
             * fqdn for the content
             */
            fqdn?: string;
            /**
             * parent content info, optional
             */
            parent?: Reviews.ParentInfo;
            /**
             * optional content title
             */
            title?: string;
            /**
             * content visibility (read access) settings
             */
            visibility?: Reviews.Visibility;
        };
        type ContentPart = {
            /**
             * Wix Media item
             */
            attachment?: Reviews.MediaItem;
            /**
             * draftJs content
             */
            draftJs?: string;
            jsonData?: any;
            /**
             * content part name
             */
            name?: string;
            /**
             * content id stored in the future (rich) content server
             */
            storedContentId?: string;
            /**
             * plain text content
             */
            textContent?: string;
        };
        type ContentPartContentOneOf = {
            /**
             * Wix Media item
             */
            attachment?: Reviews.MediaItem;
            /**
             * draftJs content
             */
            draftJs?: string;
            jsonData?: any;
            /**
             * content id stored in the future (rich) content server
             */
            storedContentId?: string;
            /**
             * plain text content
             */
            textContent?: string;
        };
        type CreateReviewAndContactOptions = {
            /**
             * Email address of the review author.  Required for 3rd-party apps.
             */
            email?: string;
            /**
             * Name of the review author. Displayed as part of the review. Required for 3rd-party apps.
             */
            name?: string;
        };
        type CreateReviewAndContactRequest = {
            /**
             * Review content.
             */
            content: Reviews.ReviewContent;
            /**
             * Email address of the review author.  Required for 3rd-party apps.
             */
            email?: string;
            /**
             * ID of the entity to review.
             */
            entityId: string;
            /**
             * Name of the review author. Displayed as part of the review. Required for 3rd-party apps.
             */
            name?: string;
            /**
             * Namespace where the review is created.
             */
            namespace: string;
        };
        type CreateReviewRequest = {
            /**
             * Review data.
             */
            review: Reviews.Review;
        };
        type CreateReviewResponse = {
            /**
             * Created review.
             */
            review?: Reviews.Review;
        };
        type CursorPaging = {
            /**
             * Cursor returned in last query response. Should not be provided on first page request.
             */
            cursor?: string;
            /**
             * The number of items to load.
             * Cursor token returned in the query response. To be used on the next query request, but not the first query request.
             *
             * Max: `100`
             * Default: `50`
             */
            limit?: number;
        };
        type Cursors = {
            /**
             * Cursor pointing to next result page.
             */
            next?: string;
            /**
             * Cursor pointing to previous result page.
             */
            prev?: string;
        };
        type DeleteReviewRequest = {
            /**
             * Review ID.
             */
            reviewId: string;
        };
        type DeleteReviewResponse = {
            /**
             * Review entity.
             */
            review?: Reviews.Review;
        };
        type DomainEvent = {
            /**
             * Unique event ID.
             * Allows clients to ignore duplicate webhooks.
             */
            _id?: string;
            actionEvent?: Reviews.ActionEvent;
            createdEvent?: Reviews.EntityCreatedEvent;
            deletedEvent?: Reviews.EntityDeletedEvent;
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
            updatedEvent?: Reviews.EntityUpdatedEvent;
        };
        type DomainEventBodyOneOf = {
            actionEvent?: Reviews.ActionEvent;
            createdEvent?: Reviews.EntityCreatedEvent;
            deletedEvent?: Reviews.EntityDeletedEvent;
            updatedEvent?: Reviews.EntityUpdatedEvent;
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
        type GetDeletedReviewRequest = {
            /**
             * Review ID.
             */
            reviewId: string;
        };
        type GetDeletedReviewResponse = {
            /**
             * Review.
             */
            review?: Reviews.Review;
        };
        type GetReviewOptions = {
            /**
             * Whether to return private (unpublished) reviews.
             *
             * Default: `false`
             */
            returnPrivateReviews?: boolean;
        };
        type GetReviewRequest = {
            /**
             * Whether to return private (unpublished) reviews.
             *
             * Default: `false`
             */
            returnPrivateReviews?: boolean;
            /**
             * Review ID.
             */
            reviewId: string;
        };
        type GetReviewResponse = {
            /**
             * Review.
             */
            review?: Reviews.Review;
        };
        type ItemMetadata = {
            /**
             * Item ID. Should always be available, unless it's impossible (for example, when failing to create an item).
             */
            _id?: string;
            /**
             * Details about the error in case of failure.
             */
            error?: Reviews.ApplicationError;
            /**
             * Index of the item within the request array. Allows for correlation between request and response items.
             */
            originalIndex?: number;
            /**
             * Whether the requested action was successful for this item. When `false`, the `error` field is populated.
             */
            success?: boolean;
        };
        type Link = {
            /**
             * The mobile deeplink - e.g wix://app/1234-1234-1234-1234/memberships/manager
             */
            mobileLink?: string;
            /**
             * Page url
             */
            url?: string;
        };
        type Media = {
            /**
             * Image media item.
             */
            image?: string;
            /**
             * Video media item.
             */
            video?: string;
        };
        type MediaItem = {
            /**
             * WixMedia document
             */
            document?: string;
            /**
             * WixMedia image
             */
            image?: string;
            /**
             * WixMedia video
             */
            video?: string;
        };
        type MediaItemMediaOneOf = {
            /**
             * WixMedia document
             */
            document?: string;
            /**
             * WixMedia image
             */
            image?: string;
            /**
             * WixMedia video
             */
            video?: string;
        };
        type MediaMediaOneOf = {
            /**
             * Image media item.
             */
            image?: string;
            /**
             * Video media item.
             */
            video?: string;
        };
        type Moderation = {
            /**
             * Indicates whether a moderator manually changed the `moderationStatus` of the review.
             *
             * If the `moderationStatus` changed automatically because the review
             * passed the moderation rules or if moderation is turned off, this field is set to `false`.
             */
            manuallyChanged?: boolean;
            /**
             * - `APPROVED`: The review is approved and published.
             * - `IN_MODERATION`: The review is pending moderation. Moderation can be applied in the site owner's [Dashboard](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Freviews/pending).
             * - `REJECTED`: The review is rejected and deleted from the site.
             * - `SUBMITTED`: Initial status of the review before the moderation process.
             */
            moderationStatus?: string;
        };
        type ModerationStatusChanged = {
            /**
             * Review entity
             */
            review?: Reviews.Review;
        };
        type Origin = {
            /**
             * The app ID of the APP review origin.
             * Set only when the review origin is APP.
             */
            appId?: string;
            /**
             * The type of the review origin.
             */
            type?: string;
        };
        type PagingMetadataV2 = {
            /**
             * Number of items returned in the response.
             */
            count?: number;
            /**
             * Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used.
             */
            cursors?: Reviews.Cursors;
            /**
             * Offset that was requested.
             */
            offset?: number;
            /**
             * Flag that indicates the server failed to calculate the `total` field.
             */
            tooManyToCount?: boolean;
            /**
             * Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set.
             */
            total?: number;
        };
        type ParentInfo = {
            /**
             * classifier values that apply to parent (i.e. Blog categories)
             */
            classifierValues?: Array<Reviews.ClassifierValues>;
            /**
             * classifier values for parent are not known and should be queried from SPI for parent if possible
             */
            classifiersUnknown?: boolean;
            /**
             * fqdn for the parent
             */
            fqdn?: string;
            /**
             * parent id
             */
            parentId?: string;
        };
        type QueryReviewsOptions = {
            /**
             * Whether to return private (unpublished) reviews.
             *
             * Default: `false`
             */
            returnPrivateReviews?: boolean;
        };
        type QueryReviewsRequest = {
            /**
             * Review query.
             */
            query?: Reviews.QueryV2;
            /**
             * Whether to return private (unpublished) reviews.
             *
             * Default: `false`
             */
            returnPrivateReviews?: boolean;
        };
        type QueryReviewsResponse = {
            /**
             * Paging metadata.
             */
            metadata?: Reviews.PagingMetadataV2;
            /**
             * List of returned reviews.
             */
            reviews?: Array<Reviews.Review>;
        };
        type QueryV2 = {
            /**
             * Cursor paging options.
             */
            cursorPaging?: Reviews.CursorPaging;
            /**
             * Filter object.
             */
            filter?: Object;
            /**
             * Sorting options.
             */
            sort?: Array<Reviews.Sorting>;
        };
        type RemoveReplyRequest = {
            /**
             * Review ID
             */
            reviewId: string;
        };
        type RemoveReplyResponse = {
            /**
             * Review ID
             */
            review?: Reviews.Review;
        };
        type Reply = {
            /**
             * Date and time the reply was created.
             */
            _createdDate?: Date;
            /**
             * Date and time the reply was updated.
             */
            _updatedDate?: Date;
            /**
             * Reply content.
             */
            message?: string;
        };
        type Review = {
            /**
             * Date and time the review was created.
             */
            _createdDate?: Date;
            /**
             * Review ID.
             */
            _id?: string;
            /**
             * Date and time the review was updated.
             */
            _updatedDate?: Date;
            /**
             * Author of the review.
             */
            author?: Reviews.Author;
            /**
             * Review content.
             */
            content?: Reviews.ReviewContent;
            /**
             * ID of the entity to review. For example, a Wix Stores product ID.
             */
            entityId?: string;
            /**
             * Number of site visitors who found the review helpful.
             */
            foundHelpful?: number;
            /**
             * Number of site visitors who found the review unhelpful.
             */
            foundUnhelpful?: number;
            /**
             * Helpfulness score.
             *
             * Calculated by subtracting `foundUnhelpful` from `foundHelpful`.
             */
            helpfulness?: number;
            /**
             * Moderation status of the review.
             */
            moderation?: Reviews.Moderation;
            /**
             * Review namespace. Currently integrated with Wix Stores, as `stores`.
             */
            namespace?: string;
            /**
             * Provides information about the origin of the review.
             * Organic reviews are created by site visitors or members.
             * App reviews are created by apps even though a site visitor or member is the author of the review.
             * Apps can not create or update organic reviews.
             */
            origin?: Reviews.Origin;
            /**
             * Reply to the review.
             */
            reply?: Reviews.Reply;
            /**
             * Date and time then review was written. It should the same time as created_date except for reviews
             * that were imported from the other review system.
             */
            reviewDate?: Date;
            /**
             * Revision number, which increments by 1 each time the review is updated.
             * To prevent conflicting changes,
             * the current revision must be passed when updating the review.
             * Ignored when creating a review.
             */
            revision?: string;
            /**
             * Indicates whether the review has been verified through a Verify Product Purchase call to the Review Product catalog SPI.
             */
            verified?: boolean;
        };
        type ReviewContent = {
            /**
             * Review body.
             *
             * Max: 3,000 characters
             */
            body?: string;
            /**
             * List of media items associated with the review.
             *
             * Max: 10 items
             */
            media?: Array<Reviews.Media>;
            /**
             * Rating of the review.
             *
             * Min: `1`
             *
             * Max: `5`
             */
            rating?: number;
            /**
             * Review title.
             */
            title?: string;
        };
        type SetReplyRequest = {
            /**
             * Response to review author
             */
            message: string;
            /**
             * Review id
             */
            reviewId: string;
        };
        type SetReplyResponse = {
            /**
             * Review entity
             */
            review?: Reviews.Review;
        };
        type Sorting = {
            /**
             * Name of the field to sort by.
             */
            fieldName?: string;
            /**
             * Sort order.
             *
             * Defaults to `ascending`.
             */
            order?: string;
        };
        type UpdateReview = {
            /**
             * Date and time the review was created.
             */
            _createdDate?: Date;
            /**
             * Review ID.
             */
            _id?: string;
            /**
             * Date and time the review was updated.
             */
            _updatedDate?: Date;
            /**
             * Author of the review.
             */
            author?: Reviews.Author;
            /**
             * Review content.
             */
            content?: Reviews.ReviewContent;
            /**
             * ID of the entity to review. For example, a Wix Stores product ID.
             */
            entityId?: string;
            /**
             * Number of site visitors who found the review helpful.
             */
            foundHelpful?: number;
            /**
             * Number of site visitors who found the review unhelpful.
             */
            foundUnhelpful?: number;
            /**
             * Helpfulness score.
             *
             * Calculated by subtracting `foundUnhelpful` from `foundHelpful`.
             */
            helpfulness?: number;
            /**
             * Moderation status of the review.
             */
            moderation?: Reviews.Moderation;
            /**
             * Review namespace. Currently integrated with Wix Stores, as `stores`.
             */
            namespace?: string;
            /**
             * Provides information about the origin of the review.
             * Organic reviews are created by site visitors or members.
             * App reviews are created by apps even though a site visitor or member is the author of the review.
             * Apps can not create or update organic reviews.
             */
            origin?: Reviews.Origin;
            /**
             * Reply to the review.
             */
            reply?: Reviews.Reply;
            /**
             * Date and time then review was written. It should the same time as created_date except for reviews
             * that were imported from the other review system.
             */
            reviewDate?: Date;
            /**
             * Revision number, which increments by 1 each time the review is updated.
             * To prevent conflicting changes,
             * the current revision must be passed when updating the review.
             * Ignored when creating a review.
             */
            revision?: string;
            /**
             * Indicates whether the review has been verified through a Verify Product Purchase call to the Review Product catalog SPI.
             */
            verified?: boolean;
        };
        type UpdateReviewContentOptions = {
            /**
             * Review content.
             */
            content?: Reviews.ReviewContent;
            /**
             * Fieldmask for update.
             * Supported fields: content.title, content.body, content.media, content.rating
             */
            fieldMask?: Array<string>;
        };
        type UpdateReviewContentRequest = {
            /**
             * Review content.
             */
            content?: Reviews.ReviewContent;
            /**
             * Fieldmask for update.
             * Supported fields: content.title, content.body, content.media, content.rating
             */
            fieldMask?: Array<string>;
            /**
             * Review ID.
             */
            reviewId: string;
        };
        type UpdateReviewContentResponse = {
            /**
             * Updated review data.
             */
            review?: Reviews.Review;
        };
        type UpdateReviewOptions = {};
        type UpdateReviewRequest = {
            /**
             * Review to update.
             */
            review?: Reviews.Review;
        };
        type UpdateReviewResponse = {
            /**
             * Updated review data.
             */
            review?: Reviews.Review;
        };
        type VideoResolution = {
            /**
             * Video format for example, mp4, hls.
             */
            format?: string;
            /**
             * Video height.
             */
            height?: number;
            /**
             * Video thumbnail.
             */
            poster?: string;
            /**
             * Video URL.
             */
            url?: string;
            /**
             * Video width.
             */
            width?: number;
        };
        type Visibility = {
            /**
             * array of permission ids or member groups that can be used with isPermitted to check content visibility
             */
            permissions?: Array<string>;
            /**
             * enum stating content visibility type
             */
            visibilityType?: string;
        };
        /**
         * [Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.Reviews.ReviewsQueryBuilder.html#)
         */
        interface ReviewsQueryBuilder {
            /**
             * Adds a sort to a query, sorting by the specified properties in ascending order.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.Reviews.ReviewsQueryBuilder.html#ascending)
             */
            ascending(propertyNames: Array<string>): Reviews.ReviewsQueryBuilder;
            /**
             * Adds a sort to a query, sorting by the specified properties in descending order.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.Reviews.ReviewsQueryBuilder.html#descending)
             */
            descending(propertyNames: Array<string>): Reviews.ReviewsQueryBuilder;
            /**
             * Refines a query to match items where the specified property equals the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.Reviews.ReviewsQueryBuilder.html#eq)
             */
            eq(propertyName: string, value: any): Reviews.ReviewsQueryBuilder;
            /**
             * Returns the query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.Reviews.ReviewsQueryBuilder.html#find)
             */
            find(): Promise<Reviews.ReviewsQueryResult>;
            /**
             * Refines a query to match items where the specified property is greater than or equal to the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.Reviews.ReviewsQueryBuilder.html#ge)
             */
            ge(propertyName: string, value: any): Reviews.ReviewsQueryBuilder;
            /**
             * Refines a query to match items where the specified property is greater than the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.Reviews.ReviewsQueryBuilder.html#gt)
             */
            gt(propertyName: string, value: any): Reviews.ReviewsQueryBuilder;
            /**
             * Refines a query to only match items where the specified property conatins any of the values in the provided array of values.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.Reviews.ReviewsQueryBuilder.html#in)
             */
            in(propertyName: string, value: any): Reviews.ReviewsQueryBuilder;
            /**
             * Refines a query to match items where the specified property is less than or equal to the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.Reviews.ReviewsQueryBuilder.html#le)
             */
            le(propertyName: string, value: any): Reviews.ReviewsQueryBuilder;
            /**
             * Limits the number of items the query returns.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.Reviews.ReviewsQueryBuilder.html#limit)
             */
            limit(limit: number): Reviews.ReviewsQueryBuilder;
            /**
             * Refines a query to match items where the specified property is less than the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.Reviews.ReviewsQueryBuilder.html#lt)
             */
            lt(propertyName: string, value: any): Reviews.ReviewsQueryBuilder;
            /**
             * Refines a query to match items where the specified property doesn't equal the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.Reviews.ReviewsQueryBuilder.html#ne)
             */
            ne(propertyName: string, value: any): Reviews.ReviewsQueryBuilder;
            /**
             * Refines a query that skips to a specific record.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.Reviews.ReviewsQueryBuilder.html#skipTo)
             */
            skipTo(cursor: string): Reviews.ReviewsQueryBuilder;
        }
        /**
         * [Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.Reviews.ReviewsQueryResult.html#)
         */
        interface ReviewsQueryResult {
            /**
             * Returns the query cursors.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.Reviews.ReviewsQueryResult.html#cursors)
             */
            cursors: Reviews.Cursors;
            /**
             * Returns an array of `reviews` items that match the query.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.Reviews.ReviewsQueryResult.html#items)
             */
            items: Array<Reviews.Review>;
            /**
             * Returns the number of items in the current page of results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.Reviews.ReviewsQueryResult.html#length)
             */
            length: number;
            /**
             * Returns the requested page size.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.Reviews.ReviewsQueryResult.html#pageSize)
             */
            pageSize: number;
            /**
             * Returns the `ReviewsQueryBuilder` object used to get the current results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.Reviews.ReviewsQueryResult.html#query)
             */
            query: Reviews.ReviewsQueryBuilder;
            /**
             * Indicates whether the query has more results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.Reviews.ReviewsQueryResult.html#hasNext)
             */
            hasNext(): boolean;
            /**
             * Indicates whether the query has previous results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.Reviews.ReviewsQueryResult.html#hasPrev)
             */
            hasPrev(): boolean;
            /**
             * Retrieves the next page of query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.Reviews.ReviewsQueryResult.html#next)
             */
            next(): Promise<Reviews.ReviewsQueryResult>;
            /**
             * Retrieves the previous page of query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.Reviews.ReviewsQueryResult.html#prev)
             */
            prev(): Promise<Reviews.ReviewsQueryResult>;
        }
        /**
         * [Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.Reviews.ReviewsQueryBuilder.html#)
         */
        namespace ReviewsQueryBuilder {
        }
        /**
         * [Read more](https://www.wix.com/corvid/reference/wix-reviews-v2.Reviews.ReviewsQueryResult.html#)
         */
        namespace ReviewsQueryResult {
        }
    }
}
