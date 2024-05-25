declare module "wix-forum.v2" {
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
       * Category header image overlay color.
       * @internal
       */
      headerImageOverlayColor?: ColorComponent;
      /**
       * Category header background color.
       * @internal
       */
      headerBackgroundColor?: ColorComponent;
      /**
       * Category header text color.
       * @internal
       */
      headerTextColor?: ColorComponent;
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
       * @internal
       * @internal */
      postTypes?: PostType$1[];
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
      /**
       * Defines which icon will be used for the main reaction on the comment under the posts created in this category.
       *
       * Default `type`: `"LIKE"`.
       */
      mainCommentReaction?: Reaction;
      /** Defines what additional reactions may be applied on the comment under the posts created in this category. */
      additionalCommentReactions?: Reaction[];
      /** Defines what interactions may be applied on the posts created in this category, like or multiple reactions. */
      postInteraction?: PostInteraction;
      /**
       * Defines which icon will be used for main reaction on the posts created in this category.
       *
       * Default `type`: `"LIKE"`.
       */
      mainPostReaction?: Reaction;
      /** Defines what additional reactions may be applied on the posts created in this category. */
      additionalPostReactions?: Reaction[];
      /**
       * Enables guest commenting under the posts created in this category.
       * Default false.
       * @internal
       */
      guestReactionsEnabled?: boolean;
      /**
       * Enables guest reactions in this category.
       * Default false.
       * @internal
       */
      guestCommentsEnabled?: boolean;
      /**
       * Defines order of comments under the posts created in this category.
       * Default NEWEST.
       * @internal
       */
      commentOrder?: CommentOrder;
      /**
       * Enables replies creation to comments under the posts created in this category.
       * Default true.
       * @internal
       */
      commentRepliesEnabled?: boolean | null;
      /**
       * Comment button label text.
       * @internal
       */
      commentButtonLabel?: string | null;
      /**
       * Comment placeholder text.
       * @internal
       */
      commentPlaceholderText?: string | null;
      /**
       * Comment section header text.
       * @internal
       */
      commentSectionHeader?: string | null;
      /**
       * Category SEO data
       * @internal
       * @readonly
       */
      seoData?: SeoSchema;
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
      /**
       * Array of category fields to be included in the response. By default, any `fieldsToInclude` not passed are not returned. `UNKNOWN` must not be passed.
       * @internal
       */
      fieldsToInclude?: CategoryFieldField[];
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
      /**
       * Array of category fields to be included in the response. By default, any `fieldsToInclude` not passed are not returned. `UNKNOWN` must not be passed.
       * @internal
       */
      fieldsToInclude?: CategoryFieldField[];
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
      /**
       * Array of category fields to be included in the response. By default, any `fieldsToInclude` not passed are not returned. `UNKNOWN` must not be passed.
       * @internal
       */
      fieldsToInclude?: CategoryFieldField[];
      /** Array of extra category fields to be added in the response. `UNKNOWN` must not be passed. */
      extraFields?: Field$1[];
      /**
       * Allows to skip calculating meta data for response.
       * @internal
       */
      skipMetaData?: boolean;
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
      /**
       * Field mask of fields to update.
       * @internal
       */
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
  interface SubscribeContactToCategoryRequest {
      /** Category ID. */
      categoryId: string;
      /** Contact ID. */
      contactId?: string | null;
  }
  interface SubscribeContactToCategoryResponse {
  }
  interface UnsubscribeContactFromCategoryRequest {
      /** Category ID. */
      categoryId: string;
      /** Contact ID. */
      contactId?: string | null;
  }
  interface UnsubscribeContactFromCategoryResponse {
  }
  interface DomainEvent$1 extends DomainEventBodyOneOf$1 {
      createdEvent?: EntityCreatedEvent$1;
      updatedEvent?: EntityUpdatedEvent$1;
      deletedEvent?: EntityDeletedEvent$1;
      actionEvent?: ActionEvent$1;
      /**
       * Unique event ID.
       * Allows clients to ignore duplicate webhooks.
       */
      _id?: string;
      /**
       * Assumes actions are also always typed to an entity_type
       * Example: wix.stores.catalog.product, wix.bookings.session, wix.payments.transaction
       */
      entityFqdn?: string;
      /**
       * This is top level to ease client code dispatching of messages (switch on entity_fqdn+slug)
       * This is although the created/updated/deleted notion is duplication of the oneof types
       * Example: created/updated/deleted/started/completed/email_opened
       */
      slug?: string;
      /** ID of the entity associated with the event. */
      entityId?: string;
      /** Event timestamp. */
      eventTime?: Date;
      /**
       * Whether the event was triggered as a result of a privacy regulation application
       * (for example, GDPR).
       */
      triggeredByAnonymizeRequest?: boolean | null;
      /** If present, indicates the action that triggered the event. */
      originatedFrom?: string | null;
      /**
       * A sequence number defining the order of updates to the underlying entity.
       * For example, given that some entity was updated at 16:00 and than again at 16:01,
       * it is guaranteed that the sequence number of the second update is strictly higher than the first.
       * As the consumer, you can use this value to ensure that you handle messages in the correct order.
       * To do so, you will need to persist this number on your end, and compare the sequence number from the
       * message against the one you have stored. Given that the stored number is higher, you should ignore the message.
       */
      entityEventSequence?: string | null;
  }
  /** @oneof */
  interface DomainEventBodyOneOf$1 {
      createdEvent?: EntityCreatedEvent$1;
      updatedEvent?: EntityUpdatedEvent$1;
      deletedEvent?: EntityDeletedEvent$1;
      actionEvent?: ActionEvent$1;
  }
  interface EntityCreatedEvent$1 {
      entityAsJson?: string;
      /**
       * Indicates the event was triggered by a restore-from-trashbin operation for a previously deleted entity
       * @internal
       */
      triggeredByUndelete?: boolean | null;
  }
  interface EntityUpdatedEvent$1 {
      /**
       * Since platformized APIs only expose PATCH and not PUT we can't assume that the fields sent from the client are the actual diff.
       * This means that to generate a list of changed fields (as opposed to sent fields) one needs to traverse both objects.
       * We don't want to impose this on all developers and so we leave this traversal to the notification recipients which need it.
       */
      currentEntityAsJson?: string;
      /**
       * This field is currently part of the of the EntityUpdatedEvent msg, but scala/node libraries which implements the domain events standard
       * wont populate it / have any reference to it in the API.
       * The main reason for it is that fetching the old entity from the DB will have a performance hit on an update operation so unless truly needed,
       * the developer should send only the new (current) entity.
       * An additional reason is not wanting to send this additional entity over the wire (kafka) since in some cases it can be really big
       * Developers that must reflect the old entity will have to implement their own domain event sender mechanism which will follow the DomainEvent proto message.
       * @internal
       */
      previousEntityAsJson?: string | null;
      /**
       * WIP - This property will hold both names and values of the updated fields of the entity.
       * For more details please see [adr](https://docs.google.com/document/d/1PdqsOM20Ph2HAkmx8zvUnzzk3Sekp3BR9h34wSvsRnI/edit#heading=h.phlw87mh2imx) or [issue](https://github.com/wix-private/nile-tracker/issues/363)
       * @internal
       */
      modifiedFields?: Record<string, any>;
  }
  interface EntityDeletedEvent$1 {
      /**
       * Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled
       * @internal
       */
      movedToTrash?: boolean | null;
      /** Entity that was deleted */
      deletedEntityAsJson?: string | null;
  }
  interface ActionEvent$1 {
      bodyAsJson?: string;
  }
  /**
   * Returns a single category by ID.
   * @param categoryId - ID of the retrieved category.
   * @public
   * @documentationMaturity preview
   * @requiredField categoryId
   * @param options - Options specifying which fields to return.
   * @adminMethod
   * @returns Retrieved category for the provided category ID.
   */
  function getCategory(categoryId: string, options?: GetCategoryOptions): Promise<Category>;
  interface GetCategoryOptions {
      /**
       * Array of category fields to be included in the response. By default, any `fieldsToInclude` not passed are not returned. `UNKNOWN` must not be passed.
       * @internal
       */
      fieldsToInclude?: CategoryFieldField[];
      /**
       * Array of extra category fields to be included in the response.
       *
       * Supported Values: `"URL"`.
       */
      extraFields?: Field$1[];
  }
  /**
   * Returns a single category by URL slug.
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
       * Array of category fields to be included in the response. By default, any `fieldsToInclude` not passed are not returned. `UNKNOWN` must not be passed.
       * @internal
       */
      fieldsToInclude?: CategoryFieldField[];
      /**
       * Array of extra category fields to be included in the response.
       *
       * Supported Values: `"URL"`.
       */
      extraFields?: Field$1[];
  }
  /**
   * Retrieves a list of categories, given the provided paging, filtering, and sorting.
   *
   * Query Categories runs with these defaults, which you can override:
   *
   * - `paging.limit` is `10`
   * - `paging.offset` is `0`
   *
   * For field support for filters and sorting,
   * see [Categories: Supported Filters and Sorting](https://dev.wix.com/docs/rest/api-reference/wix-forum/wix-forum/filter-and-sort#category-api-supported-filters-and-sorting).
   *
   * To learn about working with _Query_ endpoints, see
   * [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language),
   * [Sorting and Paging](https://dev.wix.com/docs/rest/articles/getting-started/sorting-and-paging),
   * and [Field Projection](https://dev.wix.com/api/rest/getting-started/field-projection).
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
       * Array of category fields to be included in the response. By default, any `fieldsToInclude` not passed are not returned. `UNKNOWN` must not be passed.
       * @internal
       */
      fieldsToInclude?: CategoryFieldField[];
      /**
       * Array of extra category fields to be included in the response.
       *
       * Supported Values: `"URL"`.
       */
      extraFields?: Field$1[];
      /**
       * Allows to skip calculating meta data for response.
       * @internal
       */
      skipMetaData?: boolean;
  }
  /**
   * Marks category as read for identity who made a request.
   * @param categoryId - ID of the read category.
   * @internal
   * @documentationMaturity preview
   * @requiredField categoryId
   * @adminMethod
   */
  function markCategoryRead(categoryId: string): Promise<void>;
  /**
   * Marks all category posts as read for identity who made a request. If categoryId is not provided it marks all posts in the forum as read
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function markAllPostsAsRead(options?: MarkAllPostsAsReadOptions): Promise<void>;
  interface MarkAllPostsAsReadOptions {
      /** ID of the read posts category. */
      categoryId?: string;
  }
  /**
   * Creates a new category.
   * @internal
   * @documentationMaturity preview
   * @requiredField options.category.description
   * @requiredField options.category.name
   * @adminMethod
   * @returns Retrieved category for the provided category ID.
   */
  function createCategory(options?: CreateCategoryOptions): Promise<Category>;
  interface CreateCategoryOptions {
      category?: Category;
  }
  /**
   * Updates a category's fields according to `fieldMask`.
   * @param categoryId - ID of category.
   * @internal
   * @documentationMaturity preview
   * @requiredField categoryId
   * @adminMethod
   * @returns Retrieved category for the provided category ID.
   */
  function updateCategory(categoryId: string, options?: UpdateCategoryOptions): Promise<Category>;
  interface UpdateCategoryOptions {
      /**
       * Field mask of fields to update.
       * @internal
       */
      fieldMask?: string[];
      /** Editable category data. */
      category?: Category;
  }
  /**
   * Deletes a category (only if it is not last category).
   * @param categoryId - ID of category.
   * @internal
   * @documentationMaturity preview
   * @requiredField categoryId
   * @adminMethod
   */
  function deleteCategory(categoryId: string): Promise<DeleteCategoryResponse>;
  /**
   * Subscribes a contact to a specific forum category.
   *
   * By default a contact isn't subscribed to any forum categories.
   *
   * By subscribing a contact to a category, the contact receives notifications for that category.
   *
   * If `contactId` is not provided, it is implicitly resolved from the caller's context.
   * @param categoryId - Category ID.
   * @public
   * @documentationMaturity preview
   * @requiredField categoryId
   * @param options - Options for subscribing the contact.
   * @adminMethod
   */
  function subscribeContactToCategory(categoryId: string, options?: SubscribeContactToCategoryOptions): Promise<void>;
  interface SubscribeContactToCategoryOptions {
      /** Contact ID. */
      contactId?: string | null;
  }
  /**
   * Unsubscribes a contact from a specific forum category.
   *
   *
   * By default a contact isn't subscribed to any forum categories.
   *
   * By unsubscribing a contact from a category, the contact won’t receive notifications for that category.
   *
   * If `contactId` is not provided, it is implicitly resolved from the caller's context.
   * @param categoryId - Category ID.
   * @public
   * @documentationMaturity preview
   * @requiredField categoryId
   * @param options - Options for unsubscribing the contact.
   * @adminMethod
   */
  function unsubscribeContactFromCategory(categoryId: string, options?: UnsubscribeContactFromCategoryOptions): Promise<void>;
  interface UnsubscribeContactFromCategoryOptions {
      /** Contact ID. */
      contactId?: string | null;
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
  type forumV1Category_universal_d_SubscribeContactToCategoryRequest = SubscribeContactToCategoryRequest;
  type forumV1Category_universal_d_SubscribeContactToCategoryResponse = SubscribeContactToCategoryResponse;
  type forumV1Category_universal_d_UnsubscribeContactFromCategoryRequest = UnsubscribeContactFromCategoryRequest;
  type forumV1Category_universal_d_UnsubscribeContactFromCategoryResponse = UnsubscribeContactFromCategoryResponse;
  const forumV1Category_universal_d_getCategory: typeof getCategory;
  type forumV1Category_universal_d_GetCategoryOptions = GetCategoryOptions;
  const forumV1Category_universal_d_getCategoryBySlug: typeof getCategoryBySlug;
  type forumV1Category_universal_d_GetCategoryBySlugOptions = GetCategoryBySlugOptions;
  const forumV1Category_universal_d_queryCategories: typeof queryCategories;
  type forumV1Category_universal_d_QueryCategoriesOptions = QueryCategoriesOptions;
  const forumV1Category_universal_d_markCategoryRead: typeof markCategoryRead;
  const forumV1Category_universal_d_markAllPostsAsRead: typeof markAllPostsAsRead;
  type forumV1Category_universal_d_MarkAllPostsAsReadOptions = MarkAllPostsAsReadOptions;
  const forumV1Category_universal_d_createCategory: typeof createCategory;
  type forumV1Category_universal_d_CreateCategoryOptions = CreateCategoryOptions;
  const forumV1Category_universal_d_updateCategory: typeof updateCategory;
  type forumV1Category_universal_d_UpdateCategoryOptions = UpdateCategoryOptions;
  const forumV1Category_universal_d_deleteCategory: typeof deleteCategory;
  const forumV1Category_universal_d_subscribeContactToCategory: typeof subscribeContactToCategory;
  type forumV1Category_universal_d_SubscribeContactToCategoryOptions = SubscribeContactToCategoryOptions;
  const forumV1Category_universal_d_unsubscribeContactFromCategory: typeof unsubscribeContactFromCategory;
  type forumV1Category_universal_d_UnsubscribeContactFromCategoryOptions = UnsubscribeContactFromCategoryOptions;
  namespace forumV1Category_universal_d {
    export {
      forumV1Category_universal_d_Category as Category,
      forumV1Category_universal_d_HeaderType as HeaderType,
      forumV1Category_universal_d_ColorComponent as ColorComponent,
      PostType$1 as PostType,
      forumV1Category_universal_d_Access as Access,
      Interaction$1 as Interaction,
      forumV1Category_universal_d_Reaction as Reaction,
      forumV1Category_universal_d_ReactionReactionOneOf as ReactionReactionOneOf,
      forumV1Category_universal_d_Type as Type,
      forumV1Category_universal_d_PostInteraction as PostInteraction,
      forumV1Category_universal_d_CommentOrder as CommentOrder,
      forumV1Category_universal_d_SeoSchema as SeoSchema,
      forumV1Category_universal_d_Keyword as Keyword,
      forumV1Category_universal_d_Tag as Tag,
      forumV1Category_universal_d_Settings as Settings,
      forumV1Category_universal_d_CategoryRequest as CategoryRequest,
      forumV1Category_universal_d_CategoryFieldField as CategoryFieldField,
      Field$1 as Field,
      forumV1Category_universal_d_CategoryResponse as CategoryResponse,
      forumV1Category_universal_d_CategorySlugRequest as CategorySlugRequest,
      forumV1Category_universal_d_QueryCategoriesRequest as QueryCategoriesRequest,
      forumV1Category_universal_d_CategoriesPaging as CategoriesPaging,
      forumV1Category_universal_d_CategoriesSort as CategoriesSort,
      Order$1 as Order,
      forumV1Category_universal_d_QueryCategoriesResponse as QueryCategoriesResponse,
      forumV1Category_universal_d_QueryCategoriesResponseMetaData as QueryCategoriesResponseMetaData,
      forumV1Category_universal_d_MarkCategoryReadRequest as MarkCategoryReadRequest,
      forumV1Category_universal_d_MarkCategoryReadResponse as MarkCategoryReadResponse,
      forumV1Category_universal_d_MarkAllPostsAsReadRequest as MarkAllPostsAsReadRequest,
      forumV1Category_universal_d_MarkAllPostsAsReadResponse as MarkAllPostsAsReadResponse,
      forumV1Category_universal_d_CreateCategoryRequest as CreateCategoryRequest,
      forumV1Category_universal_d_UpdateCategoryRequest as UpdateCategoryRequest,
      forumV1Category_universal_d_DeleteCategoryRequest as DeleteCategoryRequest,
      forumV1Category_universal_d_DeleteCategoryResponse as DeleteCategoryResponse,
      forumV1Category_universal_d_SubscribeContactToCategoryRequest as SubscribeContactToCategoryRequest,
      forumV1Category_universal_d_SubscribeContactToCategoryResponse as SubscribeContactToCategoryResponse,
      forumV1Category_universal_d_UnsubscribeContactFromCategoryRequest as UnsubscribeContactFromCategoryRequest,
      forumV1Category_universal_d_UnsubscribeContactFromCategoryResponse as UnsubscribeContactFromCategoryResponse,
      DomainEvent$1 as DomainEvent,
      DomainEventBodyOneOf$1 as DomainEventBodyOneOf,
      EntityCreatedEvent$1 as EntityCreatedEvent,
      EntityUpdatedEvent$1 as EntityUpdatedEvent,
      EntityDeletedEvent$1 as EntityDeletedEvent,
      ActionEvent$1 as ActionEvent,
      forumV1Category_universal_d_getCategory as getCategory,
      forumV1Category_universal_d_GetCategoryOptions as GetCategoryOptions,
      forumV1Category_universal_d_getCategoryBySlug as getCategoryBySlug,
      forumV1Category_universal_d_GetCategoryBySlugOptions as GetCategoryBySlugOptions,
      forumV1Category_universal_d_queryCategories as queryCategories,
      forumV1Category_universal_d_QueryCategoriesOptions as QueryCategoriesOptions,
      forumV1Category_universal_d_markCategoryRead as markCategoryRead,
      forumV1Category_universal_d_markAllPostsAsRead as markAllPostsAsRead,
      forumV1Category_universal_d_MarkAllPostsAsReadOptions as MarkAllPostsAsReadOptions,
      forumV1Category_universal_d_createCategory as createCategory,
      forumV1Category_universal_d_CreateCategoryOptions as CreateCategoryOptions,
      forumV1Category_universal_d_updateCategory as updateCategory,
      forumV1Category_universal_d_UpdateCategoryOptions as UpdateCategoryOptions,
      forumV1Category_universal_d_deleteCategory as deleteCategory,
      forumV1Category_universal_d_subscribeContactToCategory as subscribeContactToCategory,
      forumV1Category_universal_d_SubscribeContactToCategoryOptions as SubscribeContactToCategoryOptions,
      forumV1Category_universal_d_unsubscribeContactFromCategory as unsubscribeContactFromCategory,
      forumV1Category_universal_d_UnsubscribeContactFromCategoryOptions as UnsubscribeContactFromCategoryOptions,
    };
  }
  
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
       * @internal
       * @internal
       * @readonly
       */
      bestAnswerCommentId?: string | null;
      /**
       * Post type. Question type posts allows comments to be voted on. This can not be changed after post is created.
       * Deprecated on '2021-08-03'.
       * @internal
       */
      postType?: PostType;
      /**
       * Contact Id of post owner.
       * Currently exposed only in created domain event.
       * @internal
       * @readonly
       */
      ownerContactId?: string | null;
      /**
       * The post content as a stringified RichContent document.
       * @internal
       * @readonly
       */
      content?: string | null;
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
       * Recent activity of post. For example, a comment added to a post.
       * @readonly
       */
      recentActivity?: RecentActivity;
      /**
       * Total number of comment reactions.
       * @internal
       * @readonly
       */
      reactionCount?: number;
      /**
       * List of different reactions counts.
       * @internal
       * @readonly
       */
      reactionCodeCounts?: ReactionCodeCount[];
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
      /**
       * Deprecated. Use the `posters` property in the parent entity instead.
       * @internal
       */
      poster?: string;
      /** Video format for example, mp4, hls. */
      format?: string;
      /**
       * Deprecated. Use the `urlExpirationDate` property in the parent entity instead.
       * @internal
       */
      urlExpirationDate?: Date;
      /**
       * Deprecated. Use the `sizeInBytes` property in the parent entity instead. Size cannot be provided per resolution.
       * @internal
       */
      sizeInBytes?: string | null;
      /**
       * Video quality. For example: 480p, 720p.
       * @internal
       */
      quality?: string | null;
      /**
       * Video filename.
       * @internal
       */
      filename?: string | null;
      /**
       * Video duration in seconds.
       * @internal
       * @readonly
       */
      durationInSeconds?: number | null;
      /**
       * Video duration in milliseconds.
       * @internal
       * @readonly
       */
      durationInMilliseconds?: number | null;
      /**
       * When true, this is a protected asset, and calling the URL will return a 403 error.
       * In order to access private assets, make a request to:
       * `GenerateFileDownloadUrl` with the WixMedia id and specify the asset_key in the request
       * @internal
       * @readonly
       */
      private?: boolean | null;
      /**
       * Key to identify the video resolution's relationship to the original media in WixMedia.
       * Can be used to request a download for the specific video resolution.
       * For example: 480p.mp4, 720p.mp4, 1080p.mp4, trailer-720p.mp4, clip-720p.mp4
       * @internal
       * @readonly
       */
      assetKey?: string | null;
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
      /**
       * Array of post fields to be included in the response. By default, any `fieldsToInclude` not passed are not returned.
       * @internal
       */
      fieldsToInclude?: PostFieldField[];
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
      /**
       * Array of post fields to be included in the response. By default, any `fieldsToInclude` not passed are not returned.
       * @internal
       */
      fieldsToInclude?: PostFieldField[];
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
      /**
       * Array of post fields to be included in the response. By default, any `fieldsToInclude` not passed are not returned.
       * @internal
       */
      fieldsToInclude?: PostFieldField[];
      /** Array of extra post fields to be added in the response. */
      extraFields?: Field[];
      /**
       * Allows to skip calculating meta data for response.
       * @internal
       */
      skipMetaData?: boolean;
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
      /**
       * Field mask of fields to update.
       * @internal
       */
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
  interface DomainEvent extends DomainEventBodyOneOf {
      createdEvent?: EntityCreatedEvent;
      updatedEvent?: EntityUpdatedEvent;
      deletedEvent?: EntityDeletedEvent;
      actionEvent?: ActionEvent;
      /**
       * Unique event ID.
       * Allows clients to ignore duplicate webhooks.
       */
      _id?: string;
      /**
       * Assumes actions are also always typed to an entity_type
       * Example: wix.stores.catalog.product, wix.bookings.session, wix.payments.transaction
       */
      entityFqdn?: string;
      /**
       * This is top level to ease client code dispatching of messages (switch on entity_fqdn+slug)
       * This is although the created/updated/deleted notion is duplication of the oneof types
       * Example: created/updated/deleted/started/completed/email_opened
       */
      slug?: string;
      /** ID of the entity associated with the event. */
      entityId?: string;
      /** Event timestamp. */
      eventTime?: Date;
      /**
       * Whether the event was triggered as a result of a privacy regulation application
       * (for example, GDPR).
       */
      triggeredByAnonymizeRequest?: boolean | null;
      /** If present, indicates the action that triggered the event. */
      originatedFrom?: string | null;
      /**
       * A sequence number defining the order of updates to the underlying entity.
       * For example, given that some entity was updated at 16:00 and than again at 16:01,
       * it is guaranteed that the sequence number of the second update is strictly higher than the first.
       * As the consumer, you can use this value to ensure that you handle messages in the correct order.
       * To do so, you will need to persist this number on your end, and compare the sequence number from the
       * message against the one you have stored. Given that the stored number is higher, you should ignore the message.
       */
      entityEventSequence?: string | null;
  }
  /** @oneof */
  interface DomainEventBodyOneOf {
      createdEvent?: EntityCreatedEvent;
      updatedEvent?: EntityUpdatedEvent;
      deletedEvent?: EntityDeletedEvent;
      actionEvent?: ActionEvent;
  }
  interface EntityCreatedEvent {
      entityAsJson?: string;
      /**
       * Indicates the event was triggered by a restore-from-trashbin operation for a previously deleted entity
       * @internal
       */
      triggeredByUndelete?: boolean | null;
  }
  interface EntityUpdatedEvent {
      /**
       * Since platformized APIs only expose PATCH and not PUT we can't assume that the fields sent from the client are the actual diff.
       * This means that to generate a list of changed fields (as opposed to sent fields) one needs to traverse both objects.
       * We don't want to impose this on all developers and so we leave this traversal to the notification recipients which need it.
       */
      currentEntityAsJson?: string;
      /**
       * This field is currently part of the of the EntityUpdatedEvent msg, but scala/node libraries which implements the domain events standard
       * wont populate it / have any reference to it in the API.
       * The main reason for it is that fetching the old entity from the DB will have a performance hit on an update operation so unless truly needed,
       * the developer should send only the new (current) entity.
       * An additional reason is not wanting to send this additional entity over the wire (kafka) since in some cases it can be really big
       * Developers that must reflect the old entity will have to implement their own domain event sender mechanism which will follow the DomainEvent proto message.
       * @internal
       */
      previousEntityAsJson?: string | null;
      /**
       * WIP - This property will hold both names and values of the updated fields of the entity.
       * For more details please see [adr](https://docs.google.com/document/d/1PdqsOM20Ph2HAkmx8zvUnzzk3Sekp3BR9h34wSvsRnI/edit#heading=h.phlw87mh2imx) or [issue](https://github.com/wix-private/nile-tracker/issues/363)
       * @internal
       */
      modifiedFields?: Record<string, any>;
  }
  interface EntityDeletedEvent {
      /**
       * Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled
       * @internal
       */
      movedToTrash?: boolean | null;
      /** Entity that was deleted */
      deletedEntityAsJson?: string | null;
  }
  interface ActionEvent {
      bodyAsJson?: string;
  }
  /**
   * Retrieves a single post by ID.
   * @param postId - Post ID.
   * @public
   * @documentationMaturity preview
   * @requiredField postId
   * @param options - Options specifying which additional fields to return.
   * @adminMethod
   * @returns Post for the provided post ID.
   */
  function getPost(postId: string, options?: GetPostOptions): Promise<Post>;
  interface GetPostOptions {
      /**
       * Array of post fields to be included in the response. By default, any `fieldsToInclude` not passed are not returned.
       * @internal
       */
      fieldsToInclude?: PostFieldField[];
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
       * Array of post fields to be included in the response. By default, any `fieldsToInclude` not passed are not returned.
       * @internal
       */
      fieldsToInclude?: PostFieldField[];
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
       * Array of post fields to be included in the response. By default, any `fieldsToInclude` not passed are not returned.
       * @internal
       */
      fieldsToInclude?: PostFieldField[];
      /**
       * Array of extra post fields to be included in the response.
       *
       *
       * Supported values: `"IMAGES"`, `"VIDEOS"`, `"URL"`, `"REACTION_IDENTITIES"`.
       */
      extraFields?: Field[];
      /**
       * Allows to skip calculating meta data for response.
       * @internal
       */
      skipMetaData?: boolean;
  }
  /**
   * Increments postViewCount of the post.
   * @param postId - ID of the read post.
   * @internal
   * @documentationMaturity preview
   * @requiredField postId
   * @adminMethod
   */
  function viewPost(postId: string): Promise<void>;
  /**
   * Marks post as read for identity who made a request.
   * @param postId - ID of the read post.
   * @internal
   * @documentationMaturity preview
   * @requiredField postId
   * @adminMethod
   */
  function markPostRead(postId: string): Promise<void>;
  /**
   * Marks posts as seen for identity who made a request.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function markPostsSeen(options?: MarkPostsSeenOptions): Promise<void>;
  interface MarkPostsSeenOptions {
      /** IDs of the seen posts. */
      postsIds?: string[];
  }
  /**
   * Marks post as unread for identity who made a request.
   * @param postId - ID of the unread post.
   * @internal
   * @documentationMaturity preview
   * @requiredField postId
   * @adminMethod
   */
  function markPostUnread(postId: string): Promise<void>;
  /**
   * Creates a new post.
   * @internal
   * @documentationMaturity preview
   * @requiredField options.post.categoryId
   * @requiredField options.post.title
   * @adminMethod
   * @returns Created post.
   */
  function createPost(options?: CreatePostOptions): Promise<Post>;
  interface CreatePostOptions {
      /** New post to create. */
      post?: Post;
  }
  /**
   * Updates post fields according to `fieldMask`.
   * @param postId - ID of the post to update.
   * @internal
   * @documentationMaturity preview
   * @requiredField postId
   * @adminMethod
   * @returns Updated post.
   */
  function updatePost(postId: string, options?: UpdatePostOptions): Promise<Post>;
  interface UpdatePostOptions {
      /**
       * Field mask of fields to update.
       * @internal
       */
      fieldMask?: string[];
      /** Post data with partial data to update. */
      post?: Post;
  }
  /**
   * Deletes a post.
   * @param postId - ID of the post to delete.
   * @internal
   * @documentationMaturity preview
   * @requiredField postId
   * @adminMethod
   */
  function deletePost(postId: string): Promise<DeletePostResponse>;
  /**
   * Sets the "best answer" comment on a post.
   * @param postId - Post ID.
   * @param commentId - ID of the "best answer" comment on the post.
   * @internal
   * @documentationMaturity preview
   * @requiredField commentId
   * @requiredField postId
   * @adminMethod
   */
  function setBestAnswer(postId: string, commentId: string): Promise<void>;
  /**
   * Removes "best answer" from a comment on a post.
   * @param postId - Post ID
   * @internal
   * @documentationMaturity preview
   * @requiredField postId
   * @adminMethod
   */
  function removeBestAnswer(postId: string): Promise<void>;
  /**
   * Pins post
   * @param postId - Post ID
   * @internal
   * @documentationMaturity preview
   * @requiredField postId
   * @adminMethod
   */
  function pinPost(postId: string, options?: PinPostOptions): Promise<void>;
  interface PinPostOptions {
      /** The amount of minutes after which the pin will be removed (unpinned) */
      expiresInMinutes?: number | null;
  }
  /**
   * Unpins post
   * @param postId - Post ID
   * @internal
   * @documentationMaturity preview
   * @requiredField postId
   * @adminMethod
   */
  function unpinPost(postId: string): Promise<void>;
  /**
   * Adds reaction to post
   * @param postId - Post ID
   * @param reactionCode - Code of reaction to add.
   * @internal
   * @documentationMaturity preview
   * @requiredField postId
   * @requiredField reactionCode
   * @adminMethod
   */
  function addReaction(postId: string, reactionCode: string): Promise<AddReactionResponse>;
  /**
   * Removes reaction from post
   * @param postId - Post ID
   * @param reactionCode - Code of reaction to remove.
   * @internal
   * @documentationMaturity preview
   * @requiredField postId
   * @requiredField reactionCode
   * @adminMethod
   */
  function removeReaction(postId: string, reactionCode: string): Promise<RemoveReactionResponse>;
  /**
   * Report post
   * @param postId - Post ID
   * @internal
   * @documentationMaturity preview
   * @requiredField postId
   * @adminMethod
   */
  function reportPost(postId: string, options?: ReportPostOptions): Promise<void>;
  interface ReportPostOptions {
      /** Type of report. */
      reportType?: ReportType;
  }
  
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
  type forumV1Post_universal_d_DomainEvent = DomainEvent;
  type forumV1Post_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type forumV1Post_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type forumV1Post_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type forumV1Post_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type forumV1Post_universal_d_ActionEvent = ActionEvent;
  const forumV1Post_universal_d_getPost: typeof getPost;
  type forumV1Post_universal_d_GetPostOptions = GetPostOptions;
  const forumV1Post_universal_d_getPostBySlug: typeof getPostBySlug;
  type forumV1Post_universal_d_GetPostBySlugOptions = GetPostBySlugOptions;
  const forumV1Post_universal_d_queryPosts: typeof queryPosts;
  type forumV1Post_universal_d_QueryPostsOptions = QueryPostsOptions;
  const forumV1Post_universal_d_viewPost: typeof viewPost;
  const forumV1Post_universal_d_markPostRead: typeof markPostRead;
  const forumV1Post_universal_d_markPostsSeen: typeof markPostsSeen;
  type forumV1Post_universal_d_MarkPostsSeenOptions = MarkPostsSeenOptions;
  const forumV1Post_universal_d_markPostUnread: typeof markPostUnread;
  const forumV1Post_universal_d_createPost: typeof createPost;
  type forumV1Post_universal_d_CreatePostOptions = CreatePostOptions;
  const forumV1Post_universal_d_updatePost: typeof updatePost;
  type forumV1Post_universal_d_UpdatePostOptions = UpdatePostOptions;
  const forumV1Post_universal_d_deletePost: typeof deletePost;
  const forumV1Post_universal_d_setBestAnswer: typeof setBestAnswer;
  const forumV1Post_universal_d_removeBestAnswer: typeof removeBestAnswer;
  const forumV1Post_universal_d_pinPost: typeof pinPost;
  type forumV1Post_universal_d_PinPostOptions = PinPostOptions;
  const forumV1Post_universal_d_unpinPost: typeof unpinPost;
  const forumV1Post_universal_d_addReaction: typeof addReaction;
  const forumV1Post_universal_d_removeReaction: typeof removeReaction;
  const forumV1Post_universal_d_reportPost: typeof reportPost;
  type forumV1Post_universal_d_ReportPostOptions = ReportPostOptions;
  namespace forumV1Post_universal_d {
    export {
      forumV1Post_universal_d_Post as Post,
      forumV1Post_universal_d_PostType as PostType,
      forumV1Post_universal_d_VideoResolution as VideoResolution,
      forumV1Post_universal_d_Interaction as Interaction,
      forumV1Post_universal_d_RecentActivity as RecentActivity,
      forumV1Post_universal_d_RecentActivityInitiatorOneOf as RecentActivityInitiatorOneOf,
      forumV1Post_universal_d_EntityType as EntityType,
      forumV1Post_universal_d_ReactionCodeCount as ReactionCodeCount,
      forumV1Post_universal_d_ReactionIdentity as ReactionIdentity,
      forumV1Post_universal_d_IdentityType as IdentityType,
      forumV1Post_universal_d_Identity as Identity,
      forumV1Post_universal_d_Moved as Moved,
      forumV1Post_universal_d_Liked as Liked,
      forumV1Post_universal_d_Unliked as Unliked,
      forumV1Post_universal_d_Pinned as Pinned,
      forumV1Post_universal_d_Unpinned as Unpinned,
      forumV1Post_universal_d_Closed as Closed,
      forumV1Post_universal_d_Opened as Opened,
      forumV1Post_universal_d_Reported as Reported,
      forumV1Post_universal_d_ReportType as ReportType,
      forumV1Post_universal_d_Reacted as Reacted,
      forumV1Post_universal_d_Unreacted as Unreacted,
      forumV1Post_universal_d_PostRequest as PostRequest,
      forumV1Post_universal_d_PostFieldField as PostFieldField,
      forumV1Post_universal_d_Field as Field,
      forumV1Post_universal_d_PostResponse as PostResponse,
      forumV1Post_universal_d_PostSlugRequest as PostSlugRequest,
      forumV1Post_universal_d_QueryPostsRequest as QueryPostsRequest,
      forumV1Post_universal_d_PostsPaging as PostsPaging,
      forumV1Post_universal_d_PostsSort as PostsSort,
      forumV1Post_universal_d_Order as Order,
      forumV1Post_universal_d_QueryPostsResponse as QueryPostsResponse,
      forumV1Post_universal_d_QueryPostsResponseMetaData as QueryPostsResponseMetaData,
      forumV1Post_universal_d_ViewPostRequest as ViewPostRequest,
      forumV1Post_universal_d_ViewPostResponse as ViewPostResponse,
      forumV1Post_universal_d_MarkPostReadRequest as MarkPostReadRequest,
      forumV1Post_universal_d_MarkPostReadResponse as MarkPostReadResponse,
      forumV1Post_universal_d_MarkPostsSeenRequest as MarkPostsSeenRequest,
      forumV1Post_universal_d_MarkPostsSeenResponse as MarkPostsSeenResponse,
      forumV1Post_universal_d_MarkPostUnreadRequest as MarkPostUnreadRequest,
      forumV1Post_universal_d_MarkPostUnreadResponse as MarkPostUnreadResponse,
      forumV1Post_universal_d_CreatePostRequest as CreatePostRequest,
      forumV1Post_universal_d_CreatePostResponse as CreatePostResponse,
      forumV1Post_universal_d_UpdatePostRequest as UpdatePostRequest,
      forumV1Post_universal_d_UpdatePostResponse as UpdatePostResponse,
      forumV1Post_universal_d_DeletePostRequest as DeletePostRequest,
      forumV1Post_universal_d_DeletePostResponse as DeletePostResponse,
      forumV1Post_universal_d_SetBestAnswerRequest as SetBestAnswerRequest,
      forumV1Post_universal_d_SetBestAnswerResponse as SetBestAnswerResponse,
      forumV1Post_universal_d_RemoveBestAnswerRequest as RemoveBestAnswerRequest,
      forumV1Post_universal_d_RemoveBestAnswerResponse as RemoveBestAnswerResponse,
      forumV1Post_universal_d_PinPostRequest as PinPostRequest,
      forumV1Post_universal_d_PinPostResponse as PinPostResponse,
      forumV1Post_universal_d_UnpinPostRequest as UnpinPostRequest,
      forumV1Post_universal_d_UnpinPostResponse as UnpinPostResponse,
      forumV1Post_universal_d_AddReactionRequest as AddReactionRequest,
      forumV1Post_universal_d_AddReactionResponse as AddReactionResponse,
      forumV1Post_universal_d_RemoveReactionRequest as RemoveReactionRequest,
      forumV1Post_universal_d_RemoveReactionResponse as RemoveReactionResponse,
      forumV1Post_universal_d_ReportPostRequest as ReportPostRequest,
      forumV1Post_universal_d_ReportPostResponse as ReportPostResponse,
      forumV1Post_universal_d_DomainEvent as DomainEvent,
      forumV1Post_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      forumV1Post_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      forumV1Post_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      forumV1Post_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      forumV1Post_universal_d_ActionEvent as ActionEvent,
      forumV1Post_universal_d_getPost as getPost,
      forumV1Post_universal_d_GetPostOptions as GetPostOptions,
      forumV1Post_universal_d_getPostBySlug as getPostBySlug,
      forumV1Post_universal_d_GetPostBySlugOptions as GetPostBySlugOptions,
      forumV1Post_universal_d_queryPosts as queryPosts,
      forumV1Post_universal_d_QueryPostsOptions as QueryPostsOptions,
      forumV1Post_universal_d_viewPost as viewPost,
      forumV1Post_universal_d_markPostRead as markPostRead,
      forumV1Post_universal_d_markPostsSeen as markPostsSeen,
      forumV1Post_universal_d_MarkPostsSeenOptions as MarkPostsSeenOptions,
      forumV1Post_universal_d_markPostUnread as markPostUnread,
      forumV1Post_universal_d_createPost as createPost,
      forumV1Post_universal_d_CreatePostOptions as CreatePostOptions,
      forumV1Post_universal_d_updatePost as updatePost,
      forumV1Post_universal_d_UpdatePostOptions as UpdatePostOptions,
      forumV1Post_universal_d_deletePost as deletePost,
      forumV1Post_universal_d_setBestAnswer as setBestAnswer,
      forumV1Post_universal_d_removeBestAnswer as removeBestAnswer,
      forumV1Post_universal_d_pinPost as pinPost,
      forumV1Post_universal_d_PinPostOptions as PinPostOptions,
      forumV1Post_universal_d_unpinPost as unpinPost,
      forumV1Post_universal_d_addReaction as addReaction,
      forumV1Post_universal_d_removeReaction as removeReaction,
      forumV1Post_universal_d_reportPost as reportPost,
      forumV1Post_universal_d_ReportPostOptions as ReportPostOptions,
    };
  }
  
  export { forumV1Category_universal_d as categories, forumV1Post_universal_d as posts };
}
