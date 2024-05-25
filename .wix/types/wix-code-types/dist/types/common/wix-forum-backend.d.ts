/**
 * The wix-forum-backend module contains functionality for working with
 *  your site's [forum](https://support.wix.com/en/article/wix-forum-about-wix-forum).
 * 	[Read more](https://www.wix.com/corvid/reference/wix-forum-backend.html#)
 */
declare module 'wix-forum-backend' {
    /**
     * Events that are fired from a Wix Forum.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-forum-backend.Events.html#)
     */
    interface Events {
        /**
         * A backend event that fires when a new forum category is created.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-forum-backend.Events.html#onCategoryCreated)
         */
        onCategoryCreated(event: Events.CreatedCategory): void;
        /**
         * A backend event that fires when a forum category is deleted.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-forum-backend.Events.html#onCategoryDeleted)
         */
        onCategoryDeleted(event: Events.DeletedCategory): void;
        /**
         * A backend event that fires when a forum category is updated.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-forum-backend.Events.html#onCategoryUpdated)
         */
        onCategoryUpdated(event: Events.UpdatedCategory): void;
        /**
         * A backend event that fires when a new forum comment is created.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-forum-backend.Events.html#onCommentCreated)
         */
        onCommentCreated(event: Events.CreatedComment): void;
        /**
         * A backend event that fires when a forum comment is deleted.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-forum-backend.Events.html#onCommentDeleted)
         */
        onCommentDeleted(event: Events.DeletedComment): void;
        /**
         * A backend event that fires when a forum comment is downvoted.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-forum-backend.Events.html#onCommentDownvoted)
         */
        onCommentDownvoted(event: Events.DownvotedComment): void;
        /**
         * A backend event that fires when a forum comment is liked.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-forum-backend.Events.html#onCommentLiked)
         */
        onCommentLiked(event: Events.LikedComment): void;
        /**
         * A backend event that fires when a forum comment is marked as best.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-forum-backend.Events.html#onCommentMarkedAsBest)
         */
        onCommentMarkedAsBest(event: Events.MarkedAsBestComment): void;
        /**
         * A backend event that fires when a forum comment is reported.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-forum-backend.Events.html#onCommentReported)
         */
        onCommentReported(event: Events.ReportedComment): void;
        /**
         * A backend event that fires when a forum comment is unliked.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-forum-backend.Events.html#onCommentUnliked)
         */
        onCommentUnliked(event: Events.UnlikedComment): void;
        /**
         * A backend event that fires when a forum comment is unmarked as best.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-forum-backend.Events.html#onCommentUnmarkedAsBest)
         */
        onCommentUnmarkedAsBest(event: Events.UnmarkedAsBestComment): void;
        /**
         * A backend event that fires when a vote is removed from a forum comment.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-forum-backend.Events.html#onCommentUnvoted)
         */
        onCommentUnvoted(event: Events.UnvotedComment): void;
        /**
         * A backend event that fires when a forum comment is updated.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-forum-backend.Events.html#onCommentUpdated)
         */
        onCommentUpdated(event: Events.UpdatedComment): void;
        /**
         * A backend event that fires when a forum comment is upvoted.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-forum-backend.Events.html#onCommentUpvoted)
         */
        onCommentUpvoted(event: Events.UpvotedComment): void;
        /**
         * A backend event that fires when a forum post is closed.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-forum-backend.Events.html#onPostClosed)
         */
        onPostClosed(event: Events.ClosedPost): void;
        /**
         * A backend event that fires when a new forum post is created.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-forum-backend.Events.html#onPostCreated)
         */
        onPostCreated(event: Events.CreatedPost): void;
        /**
         * A backend event that fires when a forum post is deleted.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-forum-backend.Events.html#onPostDeleted)
         */
        onPostDeleted(event: Events.DeletedPost): void;
        /**
         * A backend event that fires when a forum post is liked.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-forum-backend.Events.html#onPostLiked)
         */
        onPostLiked(event: Events.LikedPost): void;
        /**
         * A backend event that fires when a forum post is moved.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-forum-backend.Events.html#onPostMoved)
         */
        onPostMoved(event: Events.MovedPost): void;
        /**
         * A backend event that fires when a forum post is opened.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-forum-backend.Events.html#onPostOpened)
         */
        onPostOpened(event: Events.OpenedPost): void;
        /**
         * A backend event that fires when a forum post is pinned.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-forum-backend.Events.html#onPostPinned)
         */
        onPostPinned(event: Events.PinnedPost): void;
        /**
         * A backend event that fires when a forum post is reported.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-forum-backend.Events.html#onPostReported)
         */
        onPostReported(event: Events.ReportedPost): void;
        /**
         * A backend event that fires when a forum post is unliked.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-forum-backend.Events.html#onPostUnliked)
         */
        onPostUnliked(event: Events.UnlikedPost): void;
        /**
         * A backend event that fires when a forum post is unpinned.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-forum-backend.Events.html#onPostUnpinned)
         */
        onPostUnpinned(event: Events.UnpinnedPost): void;
        /**
         * A backend event that fires when a forum post is updated.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-forum-backend.Events.html#onPostUpdated)
         */
        onPostUpdated(event: Events.UpdatedPost): void;
    }
    /**
     * Events that are fired from a Wix Forum.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-forum-backend.Events.html#)
     */
    namespace Events {
        /**
         * An object representing a forum category.
         */
        type Category = {
            /**
             * Category ID.
             */
            _id: string;
            /**
             * Category name. Appears on the forum home page and in the navigation menu.
             */
            name: string;
            /**
             * Category header title. Appears in the category page header.
             */
            headerTitle: string;
            /**
             * Short description of the category.
             */
            description: string;
            /**
             * Type of header background.
             * One of the following:
             *
             *  + `"IMAGE"`: Category header background is an image.
             *  + `"COLOR"`: Category header background is a color.
             *
             *
             * The default value is `"COLOR"`.
             */
            headerType: string;
            /**
             * Category header background [image source](https://www.wix.com/velo/reference/$w/image/src). Applicable only if `headerType` is an image.
             */
            headerImage: string;
            /**
             * Forum category header image overlay color. Applicable only when `headerType` is `"IMAGE"`.
             */
            headerImageOverlayColor: Events.Color;
            /**
             * Forum category header background color.
             */
            headerBackgroundColor: Events.Color;
            /**
             * Forum category header text color.
             */
            headerTextColor: Events.Color;
            /**
             * Position in the list of categories on the forum home page. `0` indicates the first category.
             */
            rank: number;
            /**
             * Relative URL of the category page.
             */
            pageUrl: string;
            /**
             * URL-friendly name of the category that is unique across the forum.
             */
            slug: string;
            /**
             * Number of posts in the category.
             */
            postCount: number;
            /**
             * Total views of all posts in the category.
             */
            postViewCount: number;
            /**
             * Only admins and moderators can post in this category.
             */
            writeProtected: boolean;
            /**
             * Date and time the category was created.
             */
            _createdDate: Date;
            /**
             * Date and time the category was last updated.
             */
            _updatedDate: Date;
            /**
             * Type of category.
             * One of the following:
             *
             *
             *  + `"DISCUSSION"`: Conversational discussion with other members.
             *  + `"QUESTION"`: Specific question with answers from the community.
             */
            categoryType: string;
        };
        /**
         * An object representing a post that was closed.
         */
        type ClosedPost = {
            /**
             * Post ID.
             */
            postId: string;
        };
        /**
         * An object representing a color used in a forum header.
         */
        type Color = {
            /**
             * Hexadecimal rgb color value.
             */
            color: string;
            /**
             * Opacity percentage as a decimal between 0 and 1.
             */
            opacity: number;
        };
        /**
         * An object representing a forum comment.
         */
        type Comment = {
            /**
             * Comment ID.
             */
            _id: string;
            /**
             * ID of the post commented on.
             */
            postId: string;
            /**
             * ID of the comment author.
             */
            _ownerId: string;
            /**
             * Plain text of the comment.
             */
            plainContent: string;
            /**
             * Number of replies to the comment.
             */
            replyCount: number;
            /**
             * Number of likes the comment received.
             */
            likeCount: number;
            /**
             * Number of upvotes the comment received. Only applicable to comments on posts with a `postType` value of `"QUESTION"`.
             */
            upvoteCount: number;
            /**
             * Number of downvotes the comment received. Only applicable to comments on posts with a `postType` value of `"QUESTION"`.
             */
            downvoteCount: number;
            /**
             * Number of upvotes subtracted by the number of downvotes. May be a negative number. Only applicable to comments on posts with a `postType` value of `"QUESTION"`.
             */
            score: number;
            /**
             * Date and time the comment was created.
             */
            _createdDate: Date;
            /**
             * Date and time the comment was last edited.
             */
            _editedDate: Date;
            /**
             * Date and time of the last activity performed on the comment.
             */
            _lastActivityDate: Date;
            /**
             * Relative URL of the post page containing the comment.
             */
            pageUrl: string;
        };
        /**
         * An object representing a category that was created.
         */
        type CreatedCategory = {
            /**
             * Category ID.
             */
            categoryId: string;
            /**
             * Forum category that was created.
             */
            category: Events.Category;
        };
        /**
         * An object representing a comment that was created.
         */
        type CreatedComment = {
            /**
             * Comment ID.
             */
            commentId: string;
            /**
             * Forum comment that was created.
             */
            comment: Events.Comment;
        };
        /**
         * An object representing a post that was created.
         */
        type CreatedPost = {
            /**
             * Post ID.
             */
            postId: string;
            /**
             * Forum post that was created.
             */
            post: Events.Post;
        };
        /**
         * An object representing a category that was deleted.
         */
        type DeletedCategory = {
            /**
             * Category ID.
             */
            categoryId: string;
        };
        /**
         * An object representing a comment that was deleted.
         */
        type DeletedComment = {
            /**
             * Comment ID.
             */
            commentId: string;
        };
        /**
         * An object representing a post that was deleted.
         */
        type DeletedPost = {
            /**
             * Post ID.
             */
            postId: string;
        };
        /**
         * An object representing a comment that was downvoted.
         */
        type DownvotedComment = {
            /**
             * Comment ID.
             */
            commentId: string;
        };
        /**
         * An object representing a comment that was liked.
         */
        type LikedComment = {
            /**
             * Comment ID.
             */
            commentId: string;
        };
        /**
         * An object representing a post that was liked.
         */
        type LikedPost = {
            /**
             * Post ID.
             */
            postId: string;
        };
        /**
         * An object representing a comment that was marked as best.
         */
        type MarkedAsBestComment = {
            /**
             * Comment ID.
             */
            commentId: string;
        };
        /**
         * An object representing a post that was moved to a different category.
         */
        type MovedPost = {
            /**
             * Post ID.
             */
            postId: string;
            /**
             * ID of the category the post moved from.
             */
            previousCategoryId: string;
            /**
             * ID of the category the post moved to.
             */
            currentCategoryId: string;
        };
        /**
         * An object representing a post that was opened.
         */
        type OpenedPost = {
            /**
             * Post ID.
             */
            postId: string;
        };
        /**
         * An object representing a post that was pinned.
         */
        type PinnedPost = {
            /**
             * Post ID.
             */
            postId: string;
        };
        /**
         * An object representing a forum post.
         */
        type Post = {
            /**
             * Post ID.
             */
            _id: string;
            /**
             * ID of the post author.
             */
            _ownerId: string;
            /**
             * ID of the category the post belongs to.
             */
            categoryId: string;
            /**
             * Post title.
             */
            title: string;
            /**
             * Plain text of the post.
             */
            plainContent: string;
            /**
             * Whether the post is pinned. Only forum admins can pin and unpin posts.
             */
            pinned: boolean;
            /**
             * Whether comments are disabled for the post (the post was closed).
             */
            commentingDisabled: boolean;
            /**
             * Number of comments on the post.
             */
            commentCount: number;
            /**
             * Number of likes the post received.
             */
            likeCount: number;
            /**
             * Number of times the post was viewed.
             */
            viewCount: number;
            /**
             * Date and time the post was created.
             */
            _createdDate: Date;
            /**
             * Date and time the post was last edited.
             */
            _editedDate: Date;
            /**
             * Date and time of the last activity performed on the post.
             */
            _lastActivityDate: Date;
            /**
             * Relative URL of the post page.
             */
            pageUrl: string;
            /**
             * URL-friendly name of the post that is unique across the forum.
             */
            slug: string;
            /**
             * Type of post.
             * One of the following:
             *
             *
             *  + `"DISCUSSION"`: Conversational discussion with other members.
             *  + `"QUESTION"`: Specific question with answers from the community.
             */
            postType: string;
            /**
             * ID of comment marked as best answer to the post question. Applicable only for posts with a `postType` of `"QUESTION"`.
             */
            bestAnswerCommentId: string;
        };
        /**
         * An object representing a comment that was reported.
         */
        type ReportedComment = {
            /**
             * Comment ID.
             */
            commentId: string;
            /**
             * Type of report.
             * One of the following:
             *
             *
             *  + `"OFFENSIVE_CONTENT"`: Content that is offensive.
             *  + `"OFFENSIVE_MEDIA"`: Media content that is offensive.
             *  + `"SPAM"`: Comments with unrelated or unwanted information.
             */
            reportType: string;
        };
        /**
         * An object representing a post that was reported.
         */
        type ReportedPost = {
            /**
             * Post ID.
             */
            postId: string;
            /**
             * Type of report.
             * One of the following:
             *
             *
             *  + `"OFFENSIVE_CONTENT"`: Content that is offensive.
             *  + `"OFFENSIVE_MEDIA"`: Media content that is offensive.
             *  + `"SPAM"`: Posts with unrelated or unwanted information.
             */
            reportType: string;
        };
        /**
         * An object representing a comment that was unliked.
         */
        type UnlikedComment = {
            /**
             * Comment ID.
             */
            commentId: string;
        };
        /**
         * An object representing a post that was unliked.
         */
        type UnlikedPost = {
            /**
             * Post ID.
             */
            postId: string;
        };
        /**
         * An object representing a comment that was marked as best.
         */
        type UnmarkedAsBestComment = {
            /**
             * Comment ID.
             */
            commentId: string;
        };
        /**
         * An object representing a post that was unpinned.
         */
        type UnpinnedPost = {
            /**
             * Post ID.
             */
            postId: string;
        };
        /**
         * An object representing a comment that was unvoted.
         */
        type UnvotedComment = {
            /**
             * Comment ID.
             */
            commentId: string;
        };
        /**
         * An object representing a category that was updated.
         */
        type UpdatedCategory = {
            /**
             * Category ID.
             */
            categoryId: string;
            /**
             * Forum category that was updated.
             */
            category: Events.Category;
        };
        /**
         * An object representing a comment that was updated.
         */
        type UpdatedComment = {
            /**
             * Comment ID.
             */
            commentId: string;
            /**
             * Forum comment that was updated.
             */
            comment: Events.Comment;
        };
        /**
         * An object representing a post that was updated.
         */
        type UpdatedPost = {
            /**
             * Post ID.
             */
            postId: string;
            /**
             * Forum post that was updated.
             */
            post: Events.Post;
        };
        /**
         * An object representing a comment that was upvoted.
         */
        type UpvotedComment = {
            /**
             * Comment ID.
             */
            commentId: string;
        };
    }
}
