declare module "wix-forum.v2" {
    const __debug$1: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface Category {
        /**
         * Category ID.
         * @readonly
         */
        _id?: string | null;
        /** Category parent ID. */
        parentId?: string | null;
        /** Category name. */
        name?: string | null;
        /** Category header title. */
        headerTitle?: string | null;
        /**
         * Category header type.
         *
         * Supported values: `"NONE"`, `"COLOR"`, `"IMAGE"`.
         */
        headerType?: HeaderType;
        /** Category header image. */
        headerImage?: string;
        /**
         * The position of the category in the display order.
         * @readonly
         */
        rank?: number | null;
        /**
         * Total number of posts in category.
         * @readonly
         */
        postCount?: number | null;
        /**
         * Total number of post views in category.
         * @readonly
         */
        postViewCount?: number | null;
        /**
         * Category slug.
         * @readonly
         */
        slug?: string | null;
        /**
         * Category URL.
         * @readonly
         */
        url?: string;
        /** Category description. */
        description?: string;
        /**
         * Date category was created.
         * @readonly
         */
        _createdDate?: Date;
        /**
         * Whether all site visitors and members (`PUBLIC`), all members (`MEMBERS_ONLY`), or only specific members and groups of members with roles, badges or paid subscriptions (`PRIVATE`) can access posts in category.
         *
         * Supported values: `"UNKNOWN"`, `"PUBLIC"`, `"MEMBERS_ONLY"`, `"PRIVATE"`.
         * @readonly
         */
        categoryAccess?: Access;
        /** Date category was updated. */
        _updatedDate?: Date;
        /** Whether only admins and moderators can write posts in category. */
        noMemberPosting?: boolean;
        /**
         * IDs of groups which can access category if `categoryAccess` is `'PRIVATE'`.
         *
         * @readonly
         */
        groups?: string[];
        /**
         * Defines what interactions may be applied on the comment under the posts created in this category.
         *
         * Supported values: `"REACTION"`, `"VOTE"`.
         */
        commentInteraction?: Interaction$1;
        /** Defines which icon will be used for main reaction (like) on the comment under the posts created in this category. */
        mainCommentReaction?: Reaction;
        /** Defines what additional reactions may be applied on the comment under the posts created in this category. */
        additionalCommentReactions?: Reaction[];
        /** Defines what interactions may be applied on the posts created in this category, like or multiple reactions. */
        postInteraction?: PostInteraction;
        /** Defines which icon will be used for main reaction (like) on the posts created in this category. */
        mainPostReaction?: Reaction;
        /** Defines what additional reactions may be applied on the posts created in this category. */
        additionalPostReactions?: Reaction[];
    }
    enum HeaderType {
        NONE = "NONE",
        COLOR = "COLOR",
        IMAGE = "IMAGE"
    }
    interface ColorComponent {
        /** Hex Color Code */
        color?: string | null;
        /** Opacity (from 0 to 1) */
        opacity?: number | null;
    }
    enum PostType$1 {
        DISCUSSION = "DISCUSSION",
        QUESTION = "QUESTION"
    }
    enum Access {
        UNKNOWN = "UNKNOWN",
        PUBLIC = "PUBLIC",
        MEMBERS_ONLY = "MEMBERS_ONLY",
        PRIVATE = "PRIVATE"
    }
    enum Interaction$1 {
        UNKNOWN = "UNKNOWN",
        REACTION = "REACTION",
        VOTE = "VOTE",
        NONE = "NONE"
    }
    interface Reaction extends ReactionReactionOneOf {
        type?: Type;
        /** @readonly */
        code?: string | null;
    }
    /** @oneof */
    interface ReactionReactionOneOf {
        type?: Type;
    }
    enum Type {
        LIKE = "LIKE",
        ANGRY = "ANGRY",
        CLAP = "CLAP",
        LOVE = "LOVE",
        HAHA = "HAHA",
        SAD = "SAD",
        SMILE = "SMILE",
        WOW = "WOW",
        THINKING = "THINKING",
        THUMBS_UP = "THUMBS_UP",
        THUMBS_DOWN = "THUMBS_DOWN"
    }
    enum PostInteraction {
        UNKNOWN = "UNKNOWN",
        REACTION = "REACTION",
        NONE = "NONE"
    }
    enum CommentOrder {
        UNKNOWN = "UNKNOWN",
        OLDEST = "OLDEST",
        NEWEST = "NEWEST",
        MOST_VOTES = "MOST_VOTES",
        LEAST_VOTES = "LEAST_VOTES",
        LOWEST_RATED = "LOWEST_RATED",
        HIGHEST_RATED = "HIGHEST_RATED",
        MOST_REACTIONS = "MOST_REACTIONS"
    }
    /**
     * The SEO schema object contains data about different types of meta tags. It makes sure that the information about your page is presented properly to search engines.
     * The search engines use this information for ranking purposes, or to display snippets in the search results.
     * This data will override other sources of tags (for example patterns) and will be included in the <head> section of the HTML document, while not being displayed on the page itself.
     */
    interface SeoSchema {
        /** SEO tag information. */
        tags?: Tag[];
        /** SEO general settings. */
        settings?: Settings;
    }
    interface Keyword {
        /** Keyword value. */
        term?: string;
        /** Whether the keyword is the main focus keyword. */
        isMain?: boolean;
    }
    interface Tag {
        /**
         * SEO tag type.
         *
         *
         * Supported values: `title`, `meta`, `script`, `link`.
         */
        type?: string;
        /**
         * A `{'key':'value'}` pair object where each SEO tag property (`'name'`, `'content'`, `'rel'`, `'href'`) contains a value.
         * For example: `{'name': 'description', 'content': 'the description itself'}`.
         */
        props?: Record<string, any> | null;
        /** SEO tag meta data. For example, `{height: 300, width: 240}`. */
        meta?: Record<string, any> | null;
        /** SEO tag inner content. For example, `<title> inner content </title>`. */
        children?: string;
        /** Whether the tag is a custom tag. */
        custom?: boolean;
        /** Whether the tag is disabled. */
        disabled?: boolean;
    }
    interface Settings {
        /**
         * Whether the Auto Redirect feature, which creates `301 redirects` on a slug change, is enabled.
         *
         *
         * Default: `false` (Auto Redirect is enabled.)
         */
        preventAutoRedirect?: boolean;
        /** User-selected keyword terms for a specific page. */
        keywords?: Keyword[];
    }
    interface CategoryRequest {
        /** ID of the retrieved category. */
        categoryId: string;
        /** Array of extra category fields to be added in the response. `UNKNOWN` must not be passed. */
        extraFields?: Field$1[];
    }
    enum CategoryFieldField {
        UNKNOWN = "UNKNOWN",
        /** Includes the category's URL. */
        URL = "URL"
    }
    enum Field$1 {
        UNKNOWN = "UNKNOWN",
        /** URL of the category. */
        URL = "URL"
    }
    interface CategoryResponse {
        /** Retrieved category for the provided category ID. */
        category?: Category;
    }
    interface CategorySlugRequest {
        /** URL slug. */
        slug: string;
        /** Array of extra category fields to be added in the response. `UNKNOWN` must not be passed. */
        extraFields?: Field$1[];
    }
    interface QueryCategoriesRequest {
        /** Paging object (e.g., {limit: 10, offset: 100 } ) */
        paging?: CategoriesPaging;
        /** Filter object (e.g., { $and: [{ postViewCount: { $gt: 0 } }, { postCount: { $gt: 0 }] } ) */
        filter?: Record<string, any> | null;
        /** Array of sort objects (e.g.,  [{ fieldName: rank, order: Order.ASC }] ) */
        sort?: CategoriesSort[];
        /** Array of extra category fields to be added in the response. `UNKNOWN` must not be passed. */
        extraFields?: Field$1[];
    }
    interface CategoriesPaging {
        /** The number of items to load. */
        limit?: number;
        /** Number of items to skip in the current sort order. */
        offset?: number;
    }
    interface CategoriesSort {
        /**
         * Records can be sorted by:
         * rank
         * postCount
         * postViewCount
         */
        fieldName?: string;
        /** Records can be sorted in ascending (default) or descending order. */
        order?: Order$1;
    }
    enum Order$1 {
        ASC = "ASC",
        DESC = "DESC"
    }
    interface QueryCategoriesResponse {
        /** List of categories. */
        categories?: Category[];
        /** Pagination. */
        metaData?: QueryCategoriesResponseMetaData;
    }
    interface QueryCategoriesResponseMetaData {
        /** Total number of records returned. */
        count?: number;
        /** Offset of records. */
        offset?: number;
        /** Total number of records that match the filters. */
        total?: number;
    }
    interface MarkCategoryReadRequest {
        /** ID of the read category. */
        categoryId: string;
    }
    interface MarkCategoryReadResponse {
    }
    interface MarkAllPostsAsReadRequest {
        /** ID of the read posts category. */
        categoryId?: string;
    }
    interface MarkAllPostsAsReadResponse {
    }
    interface CreateCategoryRequest {
        category?: Category;
    }
    interface UpdateCategoryRequest {
        /** ID of category. */
        categoryId: string;
        /** Field mask of fields to update. */
        fieldMask?: string[];
        /** Editable category data. */
        category?: Category;
    }
    interface DeleteCategoryRequest {
        /** ID of category. */
        categoryId: string;
    }
    interface DeleteCategoryResponse {
        category?: Category;
    }
    /**
     * Returns a single category by ID.
     *
     * This function is not a universal function and runs only on the backend.
     * @param categoryId - ID of the retrieved category.
     * @public
     * @documentationMaturity preview
     * @requiredField categoryId
     * @param options - Options specifying which fields to return.
     * @adminMethod
     */
    function getCategory(categoryId: string, options?: GetCategoryOptions): Promise<CategoryResponse>;
    interface GetCategoryOptions {
        /**
         * Array of extra category fields to be included in the response.
         *
         * Supported Values: `"URL"`.
         */
        extraFields?: Field$1[];
    }
    /**
     * Returns a single category by URL slug.
     *
     * This function is not a universal function and runs only on the backend.
     * @param slug - URL slug.
     * @public
     * @documentationMaturity preview
     * @requiredField slug
     * @param options - Options specifying which fields to return.
     * @adminMethod
     */
    function getCategoryBySlug(slug: string, options?: GetCategoryBySlugOptions): Promise<CategoryResponse>;
    interface GetCategoryBySlugOptions {
        /**
         * Array of extra category fields to be included in the response.
         *
         * Supported Values: `"URL"`.
         */
        extraFields?: Field$1[];
    }
    /**
     * Returns a list of categories by [query](https://github.com/wix-private/platformization-guidelines/blob/master/Server/API-Query.md)
     *
     * Paging
     * - limit: default - 10, min - 0, max - 100
     * - offset: default - 0, min - 0
     *
     * Filterable fields:
     * - id
     * - parentId
     * - name
     * - rank
     * - headerTitle
     * - headerType
     * - headerDescription
     * - postCount
     * - postViewCount
     * - slug
     *
     * Sortable fields:
     * - rank
     * - postCount
     * - postViewCount
     *
     * This function is not a universal function and runs only on the backend.
     * @public
     * @documentationMaturity preview
     * @param options - Options for sorting, filtering, paging, and specifying return fields.
     * @adminMethod
     */
    function queryCategories(options?: QueryCategoriesOptions): Promise<QueryCategoriesResponse>;
    interface QueryCategoriesOptions {
        /** Paging object (e.g., {limit: 10, offset: 100 } ) */
        paging?: CategoriesPaging;
        /** Filter object (e.g., { $and: [{ postViewCount: { $gt: 0 } }, { postCount: { $gt: 0 }] } ) */
        filter?: Record<string, any> | null;
        /** Array of sort objects (e.g.,  [{ fieldName: rank, order: Order.ASC }] ) */
        sort?: CategoriesSort[];
        /**
         * Array of extra category fields to be included in the response.
         *
         * Supported Values: `"URL"`.
         */
        extraFields?: Field$1[];
    }
    interface MarkAllPostsAsReadOptions {
        /** ID of the read posts category. */
        categoryId?: string;
    }
    interface CreateCategoryOptions {
        category?: Category;
    }
    interface UpdateCategoryOptions {
        /** Field mask of fields to update. */
        fieldMask?: string[];
        /** Editable category data. */
        category?: Category;
    }
    type forumV1Category_universal_d_Category = Category;
    type forumV1Category_universal_d_HeaderType = HeaderType;
    const forumV1Category_universal_d_HeaderType: typeof HeaderType;
    type forumV1Category_universal_d_ColorComponent = ColorComponent;
    type forumV1Category_universal_d_Access = Access;
    const forumV1Category_universal_d_Access: typeof Access;
    type forumV1Category_universal_d_Reaction = Reaction;
    type forumV1Category_universal_d_ReactionReactionOneOf = ReactionReactionOneOf;
    type forumV1Category_universal_d_Type = Type;
    const forumV1Category_universal_d_Type: typeof Type;
    type forumV1Category_universal_d_PostInteraction = PostInteraction;
    const forumV1Category_universal_d_PostInteraction: typeof PostInteraction;
    type forumV1Category_universal_d_CommentOrder = CommentOrder;
    const forumV1Category_universal_d_CommentOrder: typeof CommentOrder;
    type forumV1Category_universal_d_SeoSchema = SeoSchema;
    type forumV1Category_universal_d_Keyword = Keyword;
    type forumV1Category_universal_d_Tag = Tag;
    type forumV1Category_universal_d_Settings = Settings;
    type forumV1Category_universal_d_CategoryRequest = CategoryRequest;
    type forumV1Category_universal_d_CategoryFieldField = CategoryFieldField;
    const forumV1Category_universal_d_CategoryFieldField: typeof CategoryFieldField;
    type forumV1Category_universal_d_CategoryResponse = CategoryResponse;
    type forumV1Category_universal_d_CategorySlugRequest = CategorySlugRequest;
    type forumV1Category_universal_d_QueryCategoriesRequest = QueryCategoriesRequest;
    type forumV1Category_universal_d_CategoriesPaging = CategoriesPaging;
    type forumV1Category_universal_d_CategoriesSort = CategoriesSort;
    type forumV1Category_universal_d_QueryCategoriesResponse = QueryCategoriesResponse;
    type forumV1Category_universal_d_QueryCategoriesResponseMetaData = QueryCategoriesResponseMetaData;
    type forumV1Category_universal_d_MarkCategoryReadRequest = MarkCategoryReadRequest;
    type forumV1Category_universal_d_MarkCategoryReadResponse = MarkCategoryReadResponse;
    type forumV1Category_universal_d_MarkAllPostsAsReadRequest = MarkAllPostsAsReadRequest;
    type forumV1Category_universal_d_MarkAllPostsAsReadResponse = MarkAllPostsAsReadResponse;
    type forumV1Category_universal_d_CreateCategoryRequest = CreateCategoryRequest;
    type forumV1Category_universal_d_UpdateCategoryRequest = UpdateCategoryRequest;
    type forumV1Category_universal_d_DeleteCategoryRequest = DeleteCategoryRequest;
    type forumV1Category_universal_d_DeleteCategoryResponse = DeleteCategoryResponse;
    const forumV1Category_universal_d_getCategory: typeof getCategory;
    type forumV1Category_universal_d_GetCategoryOptions = GetCategoryOptions;
    const forumV1Category_universal_d_getCategoryBySlug: typeof getCategoryBySlug;
    type forumV1Category_universal_d_GetCategoryBySlugOptions = GetCategoryBySlugOptions;
    const forumV1Category_universal_d_queryCategories: typeof queryCategories;
    type forumV1Category_universal_d_QueryCategoriesOptions = QueryCategoriesOptions;
    type forumV1Category_universal_d_MarkAllPostsAsReadOptions = MarkAllPostsAsReadOptions;
    type forumV1Category_universal_d_CreateCategoryOptions = CreateCategoryOptions;
    type forumV1Category_universal_d_UpdateCategoryOptions = UpdateCategoryOptions;
    namespace forumV1Category_universal_d {
        export { __debug$1 as __debug, forumV1Category_universal_d_Category as Category, forumV1Category_universal_d_HeaderType as HeaderType, forumV1Category_universal_d_ColorComponent as ColorComponent, PostType$1 as PostType, forumV1Category_universal_d_Access as Access, Interaction$1 as Interaction, forumV1Category_universal_d_Reaction as Reaction, forumV1Category_universal_d_ReactionReactionOneOf as ReactionReactionOneOf, forumV1Category_universal_d_Type as Type, forumV1Category_universal_d_PostInteraction as PostInteraction, forumV1Category_universal_d_CommentOrder as CommentOrder, forumV1Category_universal_d_SeoSchema as SeoSchema, forumV1Category_universal_d_Keyword as Keyword, forumV1Category_universal_d_Tag as Tag, forumV1Category_universal_d_Settings as Settings, forumV1Category_universal_d_CategoryRequest as CategoryRequest, forumV1Category_universal_d_CategoryFieldField as CategoryFieldField, Field$1 as Field, forumV1Category_universal_d_CategoryResponse as CategoryResponse, forumV1Category_universal_d_CategorySlugRequest as CategorySlugRequest, forumV1Category_universal_d_QueryCategoriesRequest as QueryCategoriesRequest, forumV1Category_universal_d_CategoriesPaging as CategoriesPaging, forumV1Category_universal_d_CategoriesSort as CategoriesSort, Order$1 as Order, forumV1Category_universal_d_QueryCategoriesResponse as QueryCategoriesResponse, forumV1Category_universal_d_QueryCategoriesResponseMetaData as QueryCategoriesResponseMetaData, forumV1Category_universal_d_MarkCategoryReadRequest as MarkCategoryReadRequest, forumV1Category_universal_d_MarkCategoryReadResponse as MarkCategoryReadResponse, forumV1Category_universal_d_MarkAllPostsAsReadRequest as MarkAllPostsAsReadRequest, forumV1Category_universal_d_MarkAllPostsAsReadResponse as MarkAllPostsAsReadResponse, forumV1Category_universal_d_CreateCategoryRequest as CreateCategoryRequest, forumV1Category_universal_d_UpdateCategoryRequest as UpdateCategoryRequest, forumV1Category_universal_d_DeleteCategoryRequest as DeleteCategoryRequest, forumV1Category_universal_d_DeleteCategoryResponse as DeleteCategoryResponse, forumV1Category_universal_d_getCategory as getCategory, forumV1Category_universal_d_GetCategoryOptions as GetCategoryOptions, forumV1Category_universal_d_getCategoryBySlug as getCategoryBySlug, forumV1Category_universal_d_GetCategoryBySlugOptions as GetCategoryBySlugOptions, forumV1Category_universal_d_queryCategories as queryCategories, forumV1Category_universal_d_QueryCategoriesOptions as QueryCategoriesOptions, forumV1Category_universal_d_MarkAllPostsAsReadOptions as MarkAllPostsAsReadOptions, forumV1Category_universal_d_CreateCategoryOptions as CreateCategoryOptions, forumV1Category_universal_d_UpdateCategoryOptions as UpdateCategoryOptions, };
    }
    const __debug: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface Post {
        /**
         * Post ID.
         * @readonly
         */
        _id?: string | null;
        /** Category ID the post is listed under. */
        categoryId?: string;
        /**
         * Post owner's member ID.
         * @readonly
         */
        ownerId?: string | null;
        /** Post title. */
        title?: string | null;
        /** The post content in plain text. */
        contentText?: string | null;
        /**
         * Total number of post comments.
         * @readonly
         */
        commentCount?: number | null;
        /**
         * Total number of post likes.
         * @readonly
         */
        likeCount?: number | null;
        /**
         * Total number of post views.
         * @readonly
         */
        viewCount?: number | null;
        /**
         * Date post was created.
         * @readonly
         */
        _createdDate?: Date;
        /**
         * Date of latest activity on this post. For example, date the latest comment was added to post.
         *
         * @readonly
         */
        lastActivityDate?: Date;
        /**
         * Post URL.
         * @readonly
         */
        url?: string;
        /**
         * Post slug.
         * @readonly
         */
        slug?: string | null;
        /**
         * Images from post content.
         * @readonly
         */
        images?: string[];
        /**
         * Videos from post content.
         * @readonly
         */
        videos?: string[];
        /** Whether the post is pinned. Places the post at the top of the post list. */
        pinned?: boolean | null;
        /** Whether post is closed and commenting is disabled. */
        closed?: boolean | null;
        /** Date post was updated. */
        _updatedDate?: Date;
        /**
         * Defines what interactions may be applied on the comment under the post.
         *
         * Supported values: `"REACTION"`, `"VOTE"`.
         *
         */
        commentInteraction?: Interaction;
        /**
         * IDs of the marked comments for this post (selected by forum admin or post owner).
         *
         * @readonly
         */
        markedComments?: string[];
        /**
         * Recent activity of post (e.g., activity of the latest comment was added to post).
         * @readonly
         */
        recentActivity?: RecentActivity;
        /**
         * List of reaction identities grouped by reaction code.
         * @readonly
         */
        reactionIdentities?: ReactionIdentity[];
    }
    enum PostType {
        DISCUSSION = "DISCUSSION",
        QUESTION = "QUESTION"
    }
    interface VideoResolution {
        /** Video URL. */
        url?: string;
        /** Video height. */
        height?: number;
        /** Video width. */
        width?: number;
        /** Video format for example, mp4, hls. */
        format?: string;
    }
    enum Interaction {
        UNKNOWN = "UNKNOWN",
        REACTION = "REACTION",
        VOTE = "VOTE",
        NONE = "NONE"
    }
    interface RecentActivity extends RecentActivityInitiatorOneOf {
        /** Site member ID. */
        memberId?: string;
        /** ID of recent activity entity. */
        entityId?: string;
        /** Type of entity. */
        type?: EntityType;
        /** Date activity was created. */
        activityDate?: string;
    }
    /** @oneof */
    interface RecentActivityInitiatorOneOf {
        /** Site member ID. */
        memberId?: string;
    }
    enum EntityType {
        UNKNOWN = "UNKNOWN",
        COMMENT = "COMMENT",
        REPLY = "REPLY"
    }
    interface ReactionCodeCount {
        /** Reaction code. */
        reactionCode?: string;
        /** Total number of reaction. */
        count?: number;
    }
    interface ReactionIdentity {
        /** Reaction code. */
        reactionCode?: string;
        /**
         * Reacted identities.
         * @readonly
         */
        identities?: Identity[];
        /** Total number of reacted identities count. */
        count?: number;
    }
    enum IdentityType {
        UNKNOWN = "UNKNOWN",
        VISITOR = "VISITOR",
        MEMBER = "MEMBER"
    }
    interface Identity {
        /** Identity ID. */
        identityId?: string;
        /** Reacted identity type. */
        identityType?: IdentityType;
    }
    interface Moved {
        /** Old category ID. */
        oldCategoryId?: string;
        /** New current category ID. */
        currentCategoryId?: string;
        /** ID of the moved post. */
        postId?: string;
    }
    interface Liked {
        /** ID of the liked post. */
        postId?: string;
    }
    interface Unliked {
        /** ID of the unliked post. */
        postId?: string;
    }
    interface Pinned {
        /** ID of the pinned post. */
        postId?: string;
    }
    interface Unpinned {
        /** ID of the unpinned post. */
        postId?: string;
    }
    interface Closed {
        /** ID of the closed post. */
        postId?: string;
    }
    interface Opened {
        /** ID of the opened post. */
        postId?: string;
    }
    interface Reported {
        /** Type of report. */
        reportType?: ReportType;
        /** ID of the reported post. */
        postId?: string;
    }
    enum ReportType {
        OFFENSIVE_CONTENT = "OFFENSIVE_CONTENT",
        OFFENSIVE_MEDIA = "OFFENSIVE_MEDIA",
        SPAM = "SPAM"
    }
    interface Reacted {
        postId?: string;
        reactionCode?: string;
    }
    interface Unreacted {
        postId?: string;
        reactionCode?: string;
    }
    interface PostRequest {
        /** Post ID. */
        postId: string;
        /** Array of extra post fields to be added in the response. */
        extraFields?: Field[];
    }
    enum PostFieldField {
        UNKNOWN = "UNKNOWN",
        /** Includes Post content as a stringified DraftJS document (internal only). */
        CONTENT = "CONTENT",
        /** Includes images from Post content (internal only). */
        IMAGES = "IMAGES",
        /** Includes videos from Post content (internal only). */
        VIDEOS = "VIDEOS",
        /** Includes Post URL. */
        URL = "URL",
        /** Includes Post content as a stringified Rich Content document (internal only). */
        RICH_CONTENT = "RICH_CONTENT"
    }
    enum Field {
        UNKNOWN = "UNKNOWN",
        /** Includes images from Post content. */
        IMAGES = "IMAGES",
        /** Includes videos from Post content. */
        VIDEOS = "VIDEOS",
        /** Post URL. */
        URL = "URL",
        /** Includes reaction identities. */
        REACTION_IDENTITIES = "REACTION_IDENTITIES"
    }
    interface PostResponse {
        /** Post for the provided post ID. */
        post?: Post;
    }
    interface PostSlugRequest {
        /** URL slug. */
        slug: string;
        /** Array of extra post fields to be added in the response. */
        extraFields?: Field[];
    }
    interface QueryPostsRequest {
        /** Paging object (e.g., { limit: 10, offset: 100 } ). */
        paging?: PostsPaging;
        /** Filter object (e.g., { $and: [{ ownerId: { eq: 'ownerId' } }, { likeCount: { $gt: 0 }] } ). */
        filter?: Record<string, any> | null;
        /** Array of sort objects (e.g.,  [{ fieldName: createdDate, order: Order.ASC }] ). */
        sort?: PostsSort[];
        /** Array of extra post fields to be added in the response. */
        extraFields?: Field[];
    }
    interface PostsPaging {
        /** The number of items to load. */
        limit?: number;
        /** Number of items to skip in the current sort order. */
        offset?: number;
    }
    interface PostsSort {
        /**
         * Records can be sorted by:
         * lastActivityDate
         * createdDate
         * commentCount
         * viewCount
         * likeCount
         * isPinned
         */
        fieldName?: string;
        /** Records can be sorted in ascending (default) or descending order. */
        order?: Order;
    }
    enum Order {
        ASC = "ASC",
        DESC = "DESC"
    }
    interface QueryPostsResponse {
        /** List of posts. */
        posts?: Post[];
        /** Pagination. */
        metaData?: QueryPostsResponseMetaData;
    }
    interface QueryPostsResponseMetaData {
        /** Total number of records returned. */
        count?: number;
        /** Offset of records. */
        offset?: number;
        /** Total number of records that match the filters. */
        total?: number;
    }
    interface ViewPostRequest {
        /** ID of the read post. */
        postId: string;
    }
    interface ViewPostResponse {
    }
    interface MarkPostReadRequest {
        /** ID of the read post. */
        postId: string;
    }
    interface MarkPostReadResponse {
    }
    interface MarkPostsSeenRequest {
        /** IDs of the seen posts. */
        postsIds?: string[];
    }
    interface MarkPostsSeenResponse {
    }
    interface MarkPostUnreadRequest {
        /** ID of the unread post. */
        postId: string;
    }
    interface MarkPostUnreadResponse {
    }
    interface CreatePostRequest {
        /** New post to create. */
        post?: Post;
    }
    interface CreatePostResponse {
        /** Created post. */
        post?: Post;
    }
    interface UpdatePostRequest {
        /** ID of the post to update. */
        postId: string;
        /** Field mask of fields to update. */
        fieldMask?: string[];
        /** Post data with partial data to update. */
        post?: Post;
    }
    interface UpdatePostResponse {
        /** Updated post. */
        post?: Post;
    }
    interface DeletePostRequest {
        /** ID of the post to delete. */
        postId: string;
    }
    interface DeletePostResponse {
        /** Deleted post. */
        post?: Post;
    }
    interface SetBestAnswerRequest {
        /** Post ID. */
        postId: string;
        /** ID of the "best answer" comment on the post. */
        commentId: string;
    }
    interface SetBestAnswerResponse {
    }
    interface RemoveBestAnswerRequest {
        /** Post ID */
        postId: string;
    }
    interface RemoveBestAnswerResponse {
    }
    interface PinPostRequest {
        /** Post ID */
        postId: string;
        /** The amount of minutes after which the pin will be removed (unpinned) */
        expiresInMinutes?: number | null;
    }
    interface PinPostResponse {
    }
    interface UnpinPostRequest {
        /** Post ID */
        postId: string;
    }
    interface UnpinPostResponse {
    }
    interface AddReactionRequest {
        /** Post ID */
        postId: string;
        /** Code of reaction to add. */
        reactionCode: string;
    }
    interface AddReactionResponse {
        /**
         * Total number of comment reactions.
         * @readonly
         */
        reactionCount?: number;
        /**
         * List of reacted identities grouped by reaction code.
         * @readonly
         */
        reactionIdentities?: ReactionIdentity[];
    }
    interface RemoveReactionRequest {
        /** Post ID */
        postId: string;
        /** Code of reaction to remove. */
        reactionCode: string;
    }
    interface RemoveReactionResponse {
        /**
         * Total number of comment reactions.
         * @readonly
         */
        reactionCount?: number;
        /**
         * List of reacted identities grouped by reaction code.
         * @readonly
         */
        reactionIdentities?: ReactionIdentity[];
    }
    interface ReportPostRequest {
        /** Post ID */
        postId: string;
        /** Type of report. */
        reportType?: ReportType;
    }
    interface ReportPostResponse {
    }
    /**
     * Retrieves a single post by ID.
     *
     * This function is not a universal function and runs only on the backend.
     * @param postId - Post ID.
     * @public
     * @documentationMaturity preview
     * @requiredField postId
     * @param options - Options specifying which additional fields to return.
     * @adminMethod
     */
    function getPost(postId: string, options?: GetPostOptions): Promise<PostResponse>;
    interface GetPostOptions {
        /**
         * Array of extra post fields to be included in the response.
         *
         *
         * Supported values: `"IMAGES"`, `"VIDEOS"`, `"URL"`, `"REACTION_IDENTITIES"`.
         */
        extraFields?: Field[];
    }
    /**
     * Retrieves a single post by URL slug.
     *
     * This function is not a universal function and runs only on the backend.
     * @param slug - URL slug.
     * @public
     * @documentationMaturity preview
     * @requiredField slug
     * @param options - Options specifying which additional fields to return.
     * @adminMethod
     */
    function getPostBySlug(slug: string, options?: GetPostBySlugOptions): Promise<PostResponse>;
    interface GetPostBySlugOptions {
        /**
         * Array of extra post fields to be included in the response.
         *
         *
         * Supported values: `"IMAGES"`, `"VIDEOS"`, `"URL"`, `"REACTION_IDENTITIES"`.
         */
        extraFields?: Field[];
    }
    /**
     * Returns a list of posts by query.
     *
     * Paging
     * - limit: default - 10, min - 0, max - 100
     * - offset: default - 0, min - 0
     *
     * Filterable fields:
     * - id
     * - categoryId
     * - ownerId
     * - title
     * - contentText
     * - bestAnswerCommentId
     * - pinned
     * - commentingEnabled
     * - commentCount
     * - likeCount
     * - viewCount
     * - createdDate
     * - editedDate
     * - lastActivityDate
     * - slug
     *
     * Sortable fields:
     * - lastActivityDate
     * - createdDate
     * - commentCount
     * - viewCount
     * - likeCount
     * - pinned
     *
     * This function is not a universal function and runs only on the backend.
     * @public
     * @documentationMaturity preview
     * @param options - Options for sorting, filtering, paging, and specifying return fields.
     * @adminMethod
     */
    function queryPosts(options?: QueryPostsOptions): Promise<QueryPostsResponse>;
    interface QueryPostsOptions {
        /** Paging object (e.g., { limit: 10, offset: 100 } ). */
        paging?: PostsPaging;
        /** Filter object (e.g., { $and: [{ ownerId: { eq: 'ownerId' } }, { likeCount: { $gt: 0 }] } ). */
        filter?: Record<string, any> | null;
        /** Array of sort objects (e.g.,  [{ fieldName: createdDate, order: Order.ASC }] ). */
        sort?: PostsSort[];
        /**
         * Array of extra post fields to be included in the response.
         *
         *
         * Supported values: `"IMAGES"`, `"VIDEOS"`, `"URL"`, `"REACTION_IDENTITIES"`.
         */
        extraFields?: Field[];
    }
    interface MarkPostsSeenOptions {
        /** IDs of the seen posts. */
        postsIds?: string[];
    }
    interface CreatePostOptions {
        /** New post to create. */
        post?: Post;
    }
    interface UpdatePostOptions {
        /** Field mask of fields to update. */
        fieldMask?: string[];
        /** Post data with partial data to update. */
        post?: Post;
    }
    interface PinPostOptions {
        /** The amount of minutes after which the pin will be removed (unpinned) */
        expiresInMinutes?: number | null;
    }
    interface ReportPostOptions {
        /** Type of report. */
        reportType?: ReportType;
    }
    const forumV1Post_universal_d___debug: typeof __debug;
    type forumV1Post_universal_d_Post = Post;
    type forumV1Post_universal_d_PostType = PostType;
    const forumV1Post_universal_d_PostType: typeof PostType;
    type forumV1Post_universal_d_VideoResolution = VideoResolution;
    type forumV1Post_universal_d_Interaction = Interaction;
    const forumV1Post_universal_d_Interaction: typeof Interaction;
    type forumV1Post_universal_d_RecentActivity = RecentActivity;
    type forumV1Post_universal_d_RecentActivityInitiatorOneOf = RecentActivityInitiatorOneOf;
    type forumV1Post_universal_d_EntityType = EntityType;
    const forumV1Post_universal_d_EntityType: typeof EntityType;
    type forumV1Post_universal_d_ReactionCodeCount = ReactionCodeCount;
    type forumV1Post_universal_d_ReactionIdentity = ReactionIdentity;
    type forumV1Post_universal_d_IdentityType = IdentityType;
    const forumV1Post_universal_d_IdentityType: typeof IdentityType;
    type forumV1Post_universal_d_Identity = Identity;
    type forumV1Post_universal_d_Moved = Moved;
    type forumV1Post_universal_d_Liked = Liked;
    type forumV1Post_universal_d_Unliked = Unliked;
    type forumV1Post_universal_d_Pinned = Pinned;
    type forumV1Post_universal_d_Unpinned = Unpinned;
    type forumV1Post_universal_d_Closed = Closed;
    type forumV1Post_universal_d_Opened = Opened;
    type forumV1Post_universal_d_Reported = Reported;
    type forumV1Post_universal_d_ReportType = ReportType;
    const forumV1Post_universal_d_ReportType: typeof ReportType;
    type forumV1Post_universal_d_Reacted = Reacted;
    type forumV1Post_universal_d_Unreacted = Unreacted;
    type forumV1Post_universal_d_PostRequest = PostRequest;
    type forumV1Post_universal_d_PostFieldField = PostFieldField;
    const forumV1Post_universal_d_PostFieldField: typeof PostFieldField;
    type forumV1Post_universal_d_Field = Field;
    const forumV1Post_universal_d_Field: typeof Field;
    type forumV1Post_universal_d_PostResponse = PostResponse;
    type forumV1Post_universal_d_PostSlugRequest = PostSlugRequest;
    type forumV1Post_universal_d_QueryPostsRequest = QueryPostsRequest;
    type forumV1Post_universal_d_PostsPaging = PostsPaging;
    type forumV1Post_universal_d_PostsSort = PostsSort;
    type forumV1Post_universal_d_Order = Order;
    const forumV1Post_universal_d_Order: typeof Order;
    type forumV1Post_universal_d_QueryPostsResponse = QueryPostsResponse;
    type forumV1Post_universal_d_QueryPostsResponseMetaData = QueryPostsResponseMetaData;
    type forumV1Post_universal_d_ViewPostRequest = ViewPostRequest;
    type forumV1Post_universal_d_ViewPostResponse = ViewPostResponse;
    type forumV1Post_universal_d_MarkPostReadRequest = MarkPostReadRequest;
    type forumV1Post_universal_d_MarkPostReadResponse = MarkPostReadResponse;
    type forumV1Post_universal_d_MarkPostsSeenRequest = MarkPostsSeenRequest;
    type forumV1Post_universal_d_MarkPostsSeenResponse = MarkPostsSeenResponse;
    type forumV1Post_universal_d_MarkPostUnreadRequest = MarkPostUnreadRequest;
    type forumV1Post_universal_d_MarkPostUnreadResponse = MarkPostUnreadResponse;
    type forumV1Post_universal_d_CreatePostRequest = CreatePostRequest;
    type forumV1Post_universal_d_CreatePostResponse = CreatePostResponse;
    type forumV1Post_universal_d_UpdatePostRequest = UpdatePostRequest;
    type forumV1Post_universal_d_UpdatePostResponse = UpdatePostResponse;
    type forumV1Post_universal_d_DeletePostRequest = DeletePostRequest;
    type forumV1Post_universal_d_DeletePostResponse = DeletePostResponse;
    type forumV1Post_universal_d_SetBestAnswerRequest = SetBestAnswerRequest;
    type forumV1Post_universal_d_SetBestAnswerResponse = SetBestAnswerResponse;
    type forumV1Post_universal_d_RemoveBestAnswerRequest = RemoveBestAnswerRequest;
    type forumV1Post_universal_d_RemoveBestAnswerResponse = RemoveBestAnswerResponse;
    type forumV1Post_universal_d_PinPostRequest = PinPostRequest;
    type forumV1Post_universal_d_PinPostResponse = PinPostResponse;
    type forumV1Post_universal_d_UnpinPostRequest = UnpinPostRequest;
    type forumV1Post_universal_d_UnpinPostResponse = UnpinPostResponse;
    type forumV1Post_universal_d_AddReactionRequest = AddReactionRequest;
    type forumV1Post_universal_d_AddReactionResponse = AddReactionResponse;
    type forumV1Post_universal_d_RemoveReactionRequest = RemoveReactionRequest;
    type forumV1Post_universal_d_RemoveReactionResponse = RemoveReactionResponse;
    type forumV1Post_universal_d_ReportPostRequest = ReportPostRequest;
    type forumV1Post_universal_d_ReportPostResponse = ReportPostResponse;
    const forumV1Post_universal_d_getPost: typeof getPost;
    type forumV1Post_universal_d_GetPostOptions = GetPostOptions;
    const forumV1Post_universal_d_getPostBySlug: typeof getPostBySlug;
    type forumV1Post_universal_d_GetPostBySlugOptions = GetPostBySlugOptions;
    const forumV1Post_universal_d_queryPosts: typeof queryPosts;
    type forumV1Post_universal_d_QueryPostsOptions = QueryPostsOptions;
    type forumV1Post_universal_d_MarkPostsSeenOptions = MarkPostsSeenOptions;
    type forumV1Post_universal_d_CreatePostOptions = CreatePostOptions;
    type forumV1Post_universal_d_UpdatePostOptions = UpdatePostOptions;
    type forumV1Post_universal_d_PinPostOptions = PinPostOptions;
    type forumV1Post_universal_d_ReportPostOptions = ReportPostOptions;
    namespace forumV1Post_universal_d {
        export { forumV1Post_universal_d___debug as __debug, forumV1Post_universal_d_Post as Post, forumV1Post_universal_d_PostType as PostType, forumV1Post_universal_d_VideoResolution as VideoResolution, forumV1Post_universal_d_Interaction as Interaction, forumV1Post_universal_d_RecentActivity as RecentActivity, forumV1Post_universal_d_RecentActivityInitiatorOneOf as RecentActivityInitiatorOneOf, forumV1Post_universal_d_EntityType as EntityType, forumV1Post_universal_d_ReactionCodeCount as ReactionCodeCount, forumV1Post_universal_d_ReactionIdentity as ReactionIdentity, forumV1Post_universal_d_IdentityType as IdentityType, forumV1Post_universal_d_Identity as Identity, forumV1Post_universal_d_Moved as Moved, forumV1Post_universal_d_Liked as Liked, forumV1Post_universal_d_Unliked as Unliked, forumV1Post_universal_d_Pinned as Pinned, forumV1Post_universal_d_Unpinned as Unpinned, forumV1Post_universal_d_Closed as Closed, forumV1Post_universal_d_Opened as Opened, forumV1Post_universal_d_Reported as Reported, forumV1Post_universal_d_ReportType as ReportType, forumV1Post_universal_d_Reacted as Reacted, forumV1Post_universal_d_Unreacted as Unreacted, forumV1Post_universal_d_PostRequest as PostRequest, forumV1Post_universal_d_PostFieldField as PostFieldField, forumV1Post_universal_d_Field as Field, forumV1Post_universal_d_PostResponse as PostResponse, forumV1Post_universal_d_PostSlugRequest as PostSlugRequest, forumV1Post_universal_d_QueryPostsRequest as QueryPostsRequest, forumV1Post_universal_d_PostsPaging as PostsPaging, forumV1Post_universal_d_PostsSort as PostsSort, forumV1Post_universal_d_Order as Order, forumV1Post_universal_d_QueryPostsResponse as QueryPostsResponse, forumV1Post_universal_d_QueryPostsResponseMetaData as QueryPostsResponseMetaData, forumV1Post_universal_d_ViewPostRequest as ViewPostRequest, forumV1Post_universal_d_ViewPostResponse as ViewPostResponse, forumV1Post_universal_d_MarkPostReadRequest as MarkPostReadRequest, forumV1Post_universal_d_MarkPostReadResponse as MarkPostReadResponse, forumV1Post_universal_d_MarkPostsSeenRequest as MarkPostsSeenRequest, forumV1Post_universal_d_MarkPostsSeenResponse as MarkPostsSeenResponse, forumV1Post_universal_d_MarkPostUnreadRequest as MarkPostUnreadRequest, forumV1Post_universal_d_MarkPostUnreadResponse as MarkPostUnreadResponse, forumV1Post_universal_d_CreatePostRequest as CreatePostRequest, forumV1Post_universal_d_CreatePostResponse as CreatePostResponse, forumV1Post_universal_d_UpdatePostRequest as UpdatePostRequest, forumV1Post_universal_d_UpdatePostResponse as UpdatePostResponse, forumV1Post_universal_d_DeletePostRequest as DeletePostRequest, forumV1Post_universal_d_DeletePostResponse as DeletePostResponse, forumV1Post_universal_d_SetBestAnswerRequest as SetBestAnswerRequest, forumV1Post_universal_d_SetBestAnswerResponse as SetBestAnswerResponse, forumV1Post_universal_d_RemoveBestAnswerRequest as RemoveBestAnswerRequest, forumV1Post_universal_d_RemoveBestAnswerResponse as RemoveBestAnswerResponse, forumV1Post_universal_d_PinPostRequest as PinPostRequest, forumV1Post_universal_d_PinPostResponse as PinPostResponse, forumV1Post_universal_d_UnpinPostRequest as UnpinPostRequest, forumV1Post_universal_d_UnpinPostResponse as UnpinPostResponse, forumV1Post_universal_d_AddReactionRequest as AddReactionRequest, forumV1Post_universal_d_AddReactionResponse as AddReactionResponse, forumV1Post_universal_d_RemoveReactionRequest as RemoveReactionRequest, forumV1Post_universal_d_RemoveReactionResponse as RemoveReactionResponse, forumV1Post_universal_d_ReportPostRequest as ReportPostRequest, forumV1Post_universal_d_ReportPostResponse as ReportPostResponse, forumV1Post_universal_d_getPost as getPost, forumV1Post_universal_d_GetPostOptions as GetPostOptions, forumV1Post_universal_d_getPostBySlug as getPostBySlug, forumV1Post_universal_d_GetPostBySlugOptions as GetPostBySlugOptions, forumV1Post_universal_d_queryPosts as queryPosts, forumV1Post_universal_d_QueryPostsOptions as QueryPostsOptions, forumV1Post_universal_d_MarkPostsSeenOptions as MarkPostsSeenOptions, forumV1Post_universal_d_CreatePostOptions as CreatePostOptions, forumV1Post_universal_d_UpdatePostOptions as UpdatePostOptions, forumV1Post_universal_d_PinPostOptions as PinPostOptions, forumV1Post_universal_d_ReportPostOptions as ReportPostOptions, };
    }
    export { forumV1Category_universal_d as categories, forumV1Post_universal_d as posts };
}
