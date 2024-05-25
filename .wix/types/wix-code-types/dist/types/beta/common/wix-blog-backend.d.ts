declare module "wix-blog-backend" {
  interface Post {
      /**
       * Post ID.
       * @readonly
       */
      _id?: string;
      /** Post title. */
      title?: string;
      /**
       * Post excerpt.
       * Can be selected by a site contributor. By default, it is extracted from the content text's first characters.
       *
       * Max: 500 characters
       */
      excerpt?: string;
      /**
       * The post's content in plain text.
       * @readonly
       */
      contentText?: string | null;
      /** Date the post was first published. */
      firstPublishedDate?: Date;
      /**
       * Date the post was last published.
       * @readonly
       */
      lastPublishedDate?: Date;
      /** Post URL. */
      url?: string;
      /**
       * Part of a post's URL that refers to a specific post.
       *
       *
       * For example, `'https:/example.com/posts/my-post-slug'`.
       *
       */
      slug?: string;
      /** Whether the post is marked as featured. */
      featured?: boolean;
      /** Whether the post is pinned. If `true`, the post is placed at the top of the post list. */
      pinned?: boolean;
      /**
       * [Category IDs](https://www.wix.com/velo/reference/wix-blog-backend/categories) of the post.
       *
       */
      categoryIds?: string[];
      /** Reserved for internal use. */
      coverMedia?: CoverMedia$2;
      /**
       * Post owner's [member ID](https://www.wix.com/velo/reference/wix-members-backend).
       *
       */
      memberId?: string;
      /**
       * Hashtags in the post.
       * @readonly
       */
      hashtags?: string[];
      /** Whether commenting on the post is enabled. */
      commentingEnabled?: boolean;
      /**
       * Dynamic post count info Comment Count, Like Count, View Count.
       * @internal
       */
      postCountInfo?: PostCountInfo;
      /** Estimated reading time. */
      minutesToRead?: number;
      /** Image placed at the top of the blog page. Only displays on mobile devices.  */
      heroImage?: string;
      /**
       * IDs of [tags](https://www.wix.com/velo/reference/wix-blog-backend/tags) the post is tagged with.
       *
       * @readonly
       */
      tagIds?: string[];
      /**
       * IDs of posts related to the post.
       * @readonly
       */
      relatedPostIds?: string[];
      /**
       * Pricing plan IDs.
       *
       *
       * If a post is assigned to a specific pricing plan.
       * @readonly
       */
      pricingPlanIds?: string[];
      /** ID of the post's translations when [Wix Multilingual](https://support.wix.com/en/article/wix-multilingual-translating-your-blog) is installed on a site. All translations of a single post will share the same `translationId`. */
      translationId?: string | null;
      /**
       * Language the post is written in.
       *
       * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       */
      language?: string | null;
      /**
       * Reserved for internal use.
       * @internal
       */
      metrics?: Metrics;
      /** SEO data. */
      seoData?: SeoSchema$3;
      /**
       * Reserved for internal use.
       * @readonly
       */
      content?: string | null;
      /**
       * Post owner's [contact ID](https://www.wix.com/velo/reference/wix-crm-backend/contacts).
       *
       */
      contactId?: string | null;
      /**
       * Post rich content
       * @readonly
       */
      richContent?: RichContent$1;
      /**
       * Whether the returned content is a preview of premium content. Defaults to `false`.
       * A preview displays a limited number of paragraphs of paid content to non-subscribed users.
       * @readonly
       */
      preview?: boolean;
      /** Reserved for internal use. */
      contentId?: string | null;
      /**
       * Reserved for internal use.
       * @readonly
       */
      mostRecentContributorId?: string | null;
      /**
       * Post moderation details.
       *
       *
       * Only relevant to posts submitted by [guest writers](https://support.wix.com/en/article/wix-blog-moderating-blog-posts-from-your-guest-writers). Guest writers have the ability to write posts but not publish them. These posts can be rejected or approved for publishing by a blog editor or site owner.
       * @readonly
       */
      moderationDetails?: ModerationDetails$1;
      /** Post cover media. */
      media?: BlogMedia;
      /**
       * Post rich content as a string
       * @internal
       * @readonly
       */
      richContentString?: string | null;
      /**
       * Post rich content as compressed binary data
       * @internal
       * @readonly
       */
      richContentCompressed?: Uint8Array | null;
      /**
       * Indicates if there is a draft post with changes that have not yet been published.
       * @readonly
       */
      hasUnpublishedChanges?: boolean;
      /**
       * List of the post's translated posts.
       * @internal
       * @readonly
       */
      translations?: PostTranslation[];
      /**
       * Identifies whether excerpt was set by contributor.
       * True - excerpt was set by contributor.
       * False - excerpt was generated from content.
       * @internal
       * @readonly
       */
      customExcerpt?: boolean;
      /**
       * Reserved for internal use.
       * @readonly
       */
      internalId?: string | null;
      /**
       * Reserved for internal use.
       * @readonly
       */
      internalCategoryIds?: string[];
      /**
       * Reserved for internal use.
       * @readonly
       */
      internalRelatedPostIds?: string[];
      /**
       * Identifies if post is created from template
       * Reserved for internal use.
       * @internal
       * @readonly
       */
      isDemo?: boolean | null;
  }
  interface CoverMedia$2 extends CoverMediaMediaOneOf$2 {
      /** Image url. */
      image?: string;
      /** Video url. */
      video?: string;
      /**
       * Is cover media enabled.
       * Selected by user whether to display cover media on the feed
       */
      enabled?: boolean;
      /** Whether cover media is displayed. */
      displayed?: boolean;
      /**
       * Whether the cover media is custom.
       *
       * `false` if the cover media is the first image or video in the post. `true` if set to some other image or video.
       */
      custom?: boolean;
  }
  /** @oneof */
  interface CoverMediaMediaOneOf$2 {
      /** Image url. */
      image?: string;
      /** Video url. */
      video?: string;
  }
  interface PostCountInfo {
      /**
       * Total number of post comments
       * @readonly
       */
      comments?: number;
      /**
       * Total number of post likes
       * @readonly
       */
      likes?: number;
      /**
       * Total number of post views
       * @readonly
       */
      views?: number;
  }
  interface Metrics {
      /**
       * Total number of post comments.
       * @readonly
       */
      comments?: number;
      /**
       * Total number of post likes.
       * @readonly
       */
      likes?: number;
      /**
       * Total number of post views.
       * @readonly
       */
      views?: number;
      /**
       * Total number of post ratings.
       * @internal
       * @readonly
       */
      totalRatings?: number;
      /**
       * Average rating of post from 1 to 5.
       * @internal
       * @readonly
       */
      averageRating?: number;
  }
  /**
   * The SEO schema object contains data about different types of meta tags. It makes sure that the information about your page is presented properly to search engines.
   * The search engines use this information for ranking purposes, or to display snippets in the search results.
   * This data will override other sources of tags (for example patterns) and will be included in the <head> section of the HTML document, while not being displayed on the page itself.
   */
  interface SeoSchema$3 {
      /** SEO tag information. */
      tags?: Tag$3[];
      /** SEO general settings. */
      settings?: Settings$3;
  }
  interface Keyword$3 {
      /** Keyword value. */
      term?: string;
      /** Whether the keyword is the main focus keyword. */
      isMain?: boolean;
  }
  interface Tag$3 {
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
  interface Settings$3 {
      /**
       * Whether the Auto Redirect feature, which creates `301 redirects` on a slug change, is enabled.
       *
       *
       * Default: `false` (Auto Redirect is enabled.)
       */
      preventAutoRedirect?: boolean;
      /** User-selected keyword terms for a specific page. */
      keywords?: Keyword$3[];
  }
  interface RichContent$1 {
      /** Node objects representing a rich content document. */
      nodes?: Node$1[];
      /** Object metadata. */
      metadata?: Metadata$1;
      /** Global styling for header, paragraph, block quote, and code block nodes in the object. */
      documentStyle?: DocumentStyle$1;
  }
  interface Node$1 extends NodeDataOneOf$1 {
      /** Data for a button node. */
      buttonData?: ButtonData$1;
      /** Data for a code block node. */
      codeBlockData?: CodeBlockData$1;
      /** Data for a divider node. */
      dividerData?: DividerData$1;
      /** Data for a file node. */
      fileData?: FileData$1;
      /** Data for a gallery node. */
      galleryData?: GalleryData$1;
      /** Data for a GIF node. */
      gifData?: GIFData$1;
      /** Data for a heading node. */
      headingData?: HeadingData$1;
      /** Data for an embedded HTML node. */
      htmlData?: HTMLData$1;
      /** Data for an image node. */
      imageData?: ImageData$1;
      /** Data for a link preview node. */
      linkPreviewData?: LinkPreviewData$1;
      /** Data for a map node. */
      mapData?: MapData$1;
      /** Data for a paragraph node. */
      paragraphData?: ParagraphData$1;
      /** Data for a poll node. */
      pollData?: PollData$1;
      /** Data for a text node. Used to apply decorations to text. */
      textData?: TextData$1;
      /** Data for an app embed node. */
      appEmbedData?: AppEmbedData$1;
      /** Data for a video node. */
      videoData?: VideoData$1;
      /** Data for an oEmbed node. */
      embedData?: EmbedData$1;
      /** Data for a collapsible list node. */
      collapsibleListData?: CollapsibleListData$1;
      /** Data for a table node. */
      tableData?: TableData$1;
      /** Data for a table cell node. */
      tableCellData?: TableCellData$1;
      /** Data for a custon external node. */
      externalData?: Record<string, any> | null;
      /** Data for an audio node. */
      audioData?: AudioData$1;
      /** Data for an ordered list node. */
      orderedListData?: OrderedListData$1;
      /** Data for a bulleted list node. */
      bulletedListData?: BulletedListData$1;
      /** Data for a block quote node. */
      blockquoteData?: BlockquoteData$1;
      /** Node type. Use `APP_EMBED` for nodes that embed content from other Wix apps. Use `EMBED` to embed content in [oEmbed](https://oembed.com/) format. */
      type?: NodeType$1;
      /** Node ID. */
      _id?: string;
      /** A list of child nodes. */
      nodes?: Node$1[];
      /** Padding and background color styling for the node. */
      style?: NodeStyle$1;
  }
  /** @oneof */
  interface NodeDataOneOf$1 {
      /** Data for a button node. */
      buttonData?: ButtonData$1;
      /** Data for a code block node. */
      codeBlockData?: CodeBlockData$1;
      /** Data for a divider node. */
      dividerData?: DividerData$1;
      /** Data for a file node. */
      fileData?: FileData$1;
      /** Data for a gallery node. */
      galleryData?: GalleryData$1;
      /** Data for a GIF node. */
      gifData?: GIFData$1;
      /** Data for a heading node. */
      headingData?: HeadingData$1;
      /** Data for an embedded HTML node. */
      htmlData?: HTMLData$1;
      /** Data for an image node. */
      imageData?: ImageData$1;
      /** Data for a link preview node. */
      linkPreviewData?: LinkPreviewData$1;
      /** Data for a map node. */
      mapData?: MapData$1;
      /** Data for a paragraph node. */
      paragraphData?: ParagraphData$1;
      /** Data for a poll node. */
      pollData?: PollData$1;
      /** Data for a text node. Used to apply decorations to text. */
      textData?: TextData$1;
      /** Data for an app embed node. */
      appEmbedData?: AppEmbedData$1;
      /** Data for a video node. */
      videoData?: VideoData$1;
      /** Data for an oEmbed node. */
      embedData?: EmbedData$1;
      /** Data for a collapsible list node. */
      collapsibleListData?: CollapsibleListData$1;
      /** Data for a table node. */
      tableData?: TableData$1;
      /** Data for a table cell node. */
      tableCellData?: TableCellData$1;
      /** Data for a custon external node. */
      externalData?: Record<string, any> | null;
      /** Data for an audio node. */
      audioData?: AudioData$1;
      /** Data for an ordered list node. */
      orderedListData?: OrderedListData$1;
      /** Data for a bulleted list node. */
      bulletedListData?: BulletedListData$1;
      /** Data for a block quote node. */
      blockquoteData?: BlockquoteData$1;
  }
  enum NodeType$1 {
      PARAGRAPH = "PARAGRAPH",
      TEXT = "TEXT",
      HEADING = "HEADING",
      BULLETED_LIST = "BULLETED_LIST",
      ORDERED_LIST = "ORDERED_LIST",
      LIST_ITEM = "LIST_ITEM",
      BLOCKQUOTE = "BLOCKQUOTE",
      CODE_BLOCK = "CODE_BLOCK",
      VIDEO = "VIDEO",
      DIVIDER = "DIVIDER",
      FILE = "FILE",
      GALLERY = "GALLERY",
      GIF = "GIF",
      HTML = "HTML",
      IMAGE = "IMAGE",
      LINK_PREVIEW = "LINK_PREVIEW",
      MAP = "MAP",
      POLL = "POLL",
      APP_EMBED = "APP_EMBED",
      BUTTON = "BUTTON",
      COLLAPSIBLE_LIST = "COLLAPSIBLE_LIST",
      TABLE = "TABLE",
      EMBED = "EMBED",
      COLLAPSIBLE_ITEM = "COLLAPSIBLE_ITEM",
      COLLAPSIBLE_ITEM_TITLE = "COLLAPSIBLE_ITEM_TITLE",
      COLLAPSIBLE_ITEM_BODY = "COLLAPSIBLE_ITEM_BODY",
      TABLE_CELL = "TABLE_CELL",
      TABLE_ROW = "TABLE_ROW",
      EXTERNAL = "EXTERNAL",
      AUDIO = "AUDIO"
  }
  interface NodeStyle$1 {
      /** The top padding value in pixels. */
      paddingTop?: string | null;
      /** The bottom padding value in pixels. */
      paddingBottom?: string | null;
      /** The background color as a hexadecimal value. */
      backgroundColor?: string | null;
  }
  interface ButtonData$1 {
      /** Styling for the button's container. */
      containerData?: PluginContainerData$1;
      /** The button type. */
      type?: Type$1;
      /** Styling for the button. */
      styles?: Styles$1;
      /** The text to display on the button. */
      text?: string | null;
      /** Button link details. */
      link?: Link$1;
  }
  interface Border$1 {
      /** Border width in pixels. */
      width?: number | null;
      /** Border radius in pixels. */
      radius?: number | null;
  }
  interface Colors$1 {
      /** The text color as a hexadecimal value. */
      text?: string | null;
      /** The border color as a hexadecimal value. */
      border?: string | null;
      /** The background color as a hexadecimal value. */
      background?: string | null;
  }
  interface PluginContainerData$1 {
      /** The width of the node when it's displayed. */
      width?: PluginContainerDataWidth$1;
      /** The node's alignment within its container. */
      alignment?: PluginContainerDataAlignment$1;
      /** Spoiler cover settings for the node. */
      spoiler?: Spoiler$1;
      /** The height of the node when it's displayed. */
      height?: Height$1;
      /** Sets whether text should wrap around this node when it's displayed. If `textWrap` is `false`, the node takes up the width of its container. */
      textWrap?: boolean | null;
  }
  enum WidthType$1 {
      /** Width matches the content width */
      CONTENT = "CONTENT",
      /** Small Width */
      SMALL = "SMALL",
      /** Width will match the original asset width */
      ORIGINAL = "ORIGINAL",
      /** coast-to-coast display */
      FULL_WIDTH = "FULL_WIDTH"
  }
  interface PluginContainerDataWidth$1 extends PluginContainerDataWidthDataOneOf$1 {
      /**
       * One of the following predefined width options:
       * `CONTENT`: The width of the container matches the content width.
       * `SMALL`: Small width.
       * `ORIGINAL`: The width of the container matches the original asset width.
       * `FULL_WIDTH`: Full width.
       */
      size?: WidthType$1;
      /** A custom width value in pixels. */
      custom?: string | null;
  }
  /** @oneof */
  interface PluginContainerDataWidthDataOneOf$1 {
      /**
       * One of the following predefined width options:
       * `CONTENT`: The width of the container matches the content width.
       * `SMALL`: Small width.
       * `ORIGINAL`: The width of the container matches the original asset width.
       * `FULL_WIDTH`: Full width.
       */
      size?: WidthType$1;
      /** A custom width value in pixels. */
      custom?: string | null;
  }
  enum PluginContainerDataAlignment$1 {
      /** Center Alignment */
      CENTER = "CENTER",
      /** Left Alignment */
      LEFT = "LEFT",
      /** Right Alignment */
      RIGHT = "RIGHT"
  }
  interface Spoiler$1 {
      /** Sets whether the spoiler cover is enabled for this node. */
      enabled?: boolean | null;
      /** The description displayed on top of the spoiler cover. */
      description?: string | null;
      /** The text for the button used to remove the spoiler cover. */
      buttonText?: string | null;
  }
  interface Height$1 {
      /** A custom height value in pixels. */
      custom?: string | null;
  }
  enum Type$1 {
      /** Regular link button */
      LINK = "LINK",
      /** Triggers custom action that is defined in plugin configuration by the consumer */
      ACTION = "ACTION"
  }
  interface Styles$1 {
      /** Border attributes. */
      border?: Border$1;
      /** Color attributes. */
      colors?: Colors$1;
  }
  interface Link$1 extends LinkDataOneOf$1 {
      /** The absolute URL for the linked document. */
      url?: string;
      /** The target node's ID. Used for linking to another node in this object. */
      anchor?: string;
      /**
       * he HTML `target` attribute value for the link. This property defines where the linked document opens as follows:
       * `SELF` - Default. Opens the linked document in the same frame as the link.
       * `BLANK` - Opens the linked document in a new browser tab or window.
       * `PARENT` - Opens the linked document in the link's parent frame.
       * `TOP` - Opens the linked document in the full body of the link's browser tab or window.
       */
      target?: Target$1;
      /** The HTML `rel` attribute value for the link. This object specifies the relationship between the current document and the linked document. */
      rel?: Rel$1;
      /** A serialized object used for a custom or external link panel. */
      customData?: string | null;
  }
  /** @oneof */
  interface LinkDataOneOf$1 {
      /** The absolute URL for the linked document. */
      url?: string;
      /** The target node's ID. Used for linking to another node in this object. */
      anchor?: string;
  }
  enum Target$1 {
      /** Opens the linked document in the same frame as it was clicked (this is default) */
      SELF = "SELF",
      /** Opens the linked document in a new window or tab */
      BLANK = "BLANK",
      /** Opens the linked document in the parent frame */
      PARENT = "PARENT",
      /** Opens the linked document in the full body of the window */
      TOP = "TOP"
  }
  interface Rel$1 {
      /** Indicates to search engine crawlers not to follow the link. */
      nofollow?: boolean | null;
      /** Indicates to search engine crawlers that the link is a paid placement such as sponsored content or an advertisement. */
      sponsored?: boolean | null;
      /** Indicates that this link is user-generated content and isn't necessarily trusted or endorsed by the page’s author. For example, a link in a fourm post. */
      ugc?: boolean | null;
      /** Indicates that this link protect referral information from being passed to the target website. */
      noreferrer?: boolean | null;
  }
  interface CodeBlockData$1 {
      /** Styling for the code block's text. */
      textStyle?: TextStyle$1;
  }
  interface TextStyle$1 {
      /** Text alignment. Defaults to `AUTO`. */
      textAlignment?: TextAlignment$1;
      /** A CSS `line-height` value for the text as a unitless ratio. */
      lineHeight?: string | null;
  }
  enum TextAlignment$1 {
      /** browser default, eqivalent to `initial` */
      AUTO = "AUTO",
      /** Left align */
      LEFT = "LEFT",
      /** Right align */
      RIGHT = "RIGHT",
      /** Center align */
      CENTER = "CENTER",
      /** Text is spaced to line up its left and right edges to the left and right edges of the line box, except for the last line. */
      JUSTIFY = "JUSTIFY"
  }
  interface DividerData$1 {
      /** Styling for the divider's container. */
      containerData?: PluginContainerData$1;
      /** Divider line style. */
      lineStyle?: LineStyle$1;
      /** Divider width. */
      width?: Width$1;
      /** Divider alignment. */
      alignment?: Alignment$1;
  }
  enum LineStyle$1 {
      /** Single Line */
      SINGLE = "SINGLE",
      /** Double Line */
      DOUBLE = "DOUBLE",
      /** Dashed Line */
      DASHED = "DASHED",
      /** Dotted Line */
      DOTTED = "DOTTED"
  }
  enum Width$1 {
      /** Large line */
      LARGE = "LARGE",
      /** Medium line */
      MEDIUM = "MEDIUM",
      /** Small line */
      SMALL = "SMALL"
  }
  enum Alignment$1 {
      /** Center alignment */
      CENTER = "CENTER",
      /** Left alignment */
      LEFT = "LEFT",
      /** Right alignment */
      RIGHT = "RIGHT"
  }
  interface FileData$1 {
      /** Styling for the file's container. */
      containerData?: PluginContainerData$1;
      /** The source for the file's data. */
      src?: FileSource$1;
      /** File name. */
      name?: string | null;
      /** File type. */
      type?: string | null;
      /** File size in KB. */
      size?: number | null;
      /** Settings for PDF files. */
      pdfSettings?: PDFSettings$1;
      /** File MIME type. */
      mimeType?: string | null;
      /** File path. */
      path?: string | null;
  }
  enum ViewMode$1 {
      /** No PDF view */
      NONE = "NONE",
      /** Full PDF view */
      FULL = "FULL",
      /** Mini PDF view */
      MINI = "MINI"
  }
  interface FileSource$1 extends FileSourceDataOneOf$1 {
      /** The absolute URL for the file's source. */
      url?: string | null;
      /** Custom ID. Use `id` instead. */
      custom?: string | null;
      /** An ID that's resolved to a URL by a resolver function. */
      _id?: string | null;
      /** Indicates whether the file's source is private. */
      private?: boolean | null;
  }
  /** @oneof */
  interface FileSourceDataOneOf$1 {
      /** The absolute URL for the file's source. */
      url?: string | null;
      /** Custom ID. Use `id` instead. */
      custom?: string | null;
      /** An ID that's resolved to a URL by a resolver function. */
      _id?: string | null;
  }
  interface PDFSettings$1 {
      /**
       * PDF view mode. One of the following:
       * `NONE` : The PDF isn't displayed.
       * `FULL` : A full page view of the PDF is displayed.
       * `MINI` : A mini view of the PDF is displayed.
       */
      viewMode?: ViewMode$1;
      /** Sets whether the PDF download button is disabled. */
      disableDownload?: boolean | null;
      /** Sets whether the PDF print button is disabled. */
      disablePrint?: boolean | null;
  }
  interface GalleryData$1 {
      /** Styling for the gallery's container. */
      containerData?: PluginContainerData$1;
      /** The items in the gallery. */
      items?: Item$1[];
      /** Options for defining the gallery's appearance. */
      options?: GalleryOptions$1;
      /** Sets whether the gallery's expand button is disabled. */
      disableExpand?: boolean | null;
      /** Sets whether the gallery's download button is disabled. */
      disableDownload?: boolean | null;
  }
  interface Media$1 {
      /** The source for the media's data. */
      src?: FileSource$1;
      /** Media width in pixels. */
      width?: number | null;
      /** Media height in pixels. */
      height?: number | null;
      /** Media duration in seconds. Only relevant for audio and video files. */
      duration?: number | null;
  }
  interface Image$1 {
      /** Image file details. */
      media?: Media$1;
      /** Link details for images that are links. */
      link?: Link$1;
  }
  interface Video$1 {
      /** Video file details. */
      media?: Media$1;
      /** Video thumbnail file details. */
      thumbnail?: Media$1;
  }
  interface Item$1 extends ItemDataOneOf$1 {
      /** An image item. */
      image?: Image$1;
      /** A video item. */
      video?: Video$1;
      /** Item title. */
      title?: string | null;
      /** Item's alternative text. */
      altText?: string | null;
  }
  /** @oneof */
  interface ItemDataOneOf$1 {
      /** An image item. */
      image?: Image$1;
      /** A video item. */
      video?: Video$1;
  }
  interface GalleryOptions$1 {
      /** Gallery layout. */
      layout?: Layout$1;
      /** Styling for gallery items. */
      item?: ItemStyle$1;
      /** Styling for gallery thumbnail images. */
      thumbnails?: Thumbnails$1;
  }
  enum LayoutType$1 {
      /** Collage type */
      COLLAGE = "COLLAGE",
      /** Masonry type */
      MASONRY = "MASONRY",
      /** Grid type */
      GRID = "GRID",
      /** Thumbnail type */
      THUMBNAIL = "THUMBNAIL",
      /** Slider type */
      SLIDER = "SLIDER",
      /** Slideshow type */
      SLIDESHOW = "SLIDESHOW",
      /** Panorama type */
      PANORAMA = "PANORAMA",
      /** Column type */
      COLUMN = "COLUMN",
      /** Magic type */
      MAGIC = "MAGIC",
      /** Fullsize images type */
      FULLSIZE = "FULLSIZE"
  }
  enum Orientation$1 {
      /** Rows Orientation */
      ROWS = "ROWS",
      /** Columns Orientation */
      COLUMNS = "COLUMNS"
  }
  enum Crop$1 {
      /** Crop to fill */
      FILL = "FILL",
      /** Crop to fit */
      FIT = "FIT"
  }
  enum ThumbnailsAlignment$1 {
      /** Top alignment */
      TOP = "TOP",
      /** Right alignment */
      RIGHT = "RIGHT",
      /** Bottom alignment */
      BOTTOM = "BOTTOM",
      /** Left alignment */
      LEFT = "LEFT",
      /** No thumbnail */
      NONE = "NONE"
  }
  interface Layout$1 {
      /** Gallery layout type. */
      type?: LayoutType$1;
      /** Sets whether horizontal scroll is enabled. */
      horizontalScroll?: boolean | null;
      /** Gallery orientation. */
      orientation?: Orientation$1;
      /** The number of columns to display on full size screens. */
      numberOfColumns?: number | null;
      /** The number of columns to display on mobile screens. */
      mobileNumberOfColumns?: number | null;
  }
  interface ItemStyle$1 {
      /** Desirable dimension for each item in pixels (behvaior changes according to gallery type) */
      targetSize?: number | null;
      /** Item ratio */
      ratio?: number | null;
      /** Sets how item images are cropped. */
      crop?: Crop$1;
      /** The spacing between items in pixels. */
      spacing?: number | null;
  }
  interface Thumbnails$1 {
      /** Thumbnail alignment. */
      placement?: ThumbnailsAlignment$1;
      /** Spacing between thumbnails in pixels. */
      spacing?: number | null;
  }
  interface GIFData$1 {
      /** Styling for the GIF's container. */
      containerData?: PluginContainerData$1;
      /** The source of the full size GIF. */
      original?: GIF$1;
      /** The source of the downsized GIF. */
      downsized?: GIF$1;
      /** Height in pixels. */
      height?: number;
      /** Width in pixels. */
      width?: number;
  }
  interface GIF$1 {
      /** GIF format URL. */
      gif?: string | null;
      /** MP4 format URL. */
      mp4?: string | null;
      /** Thumbnail URL. */
      still?: string | null;
  }
  interface HeadingData$1 {
      /** Heading level from 1-6. */
      level?: number;
      /** Styling for the heading text. */
      textStyle?: TextStyle$1;
      /** Indentation level from 1-6. */
      indentation?: number | null;
  }
  interface HTMLData$1 extends HTMLDataDataOneOf$1 {
      /** The URL for the HTML code for the node. */
      url?: string;
      /** The HTML code for the node. */
      html?: string;
      /** Whether this is an AdSense element. Use `source` instead. */
      isAdsense?: boolean | null;
      /** Styling for the HTML node's container. */
      containerData?: PluginContainerData$1;
      /** The type of HTML code. */
      source?: Source$1;
  }
  /** @oneof */
  interface HTMLDataDataOneOf$1 {
      /** The URL for the HTML code for the node. */
      url?: string;
      /** The HTML code for the node. */
      html?: string;
      /** Whether this is an AdSense element. Use `source` instead. */
      isAdsense?: boolean | null;
  }
  enum Source$1 {
      HTML = "HTML",
      ADSENSE = "ADSENSE"
  }
  interface ImageData$1 {
      /** Styling for the image's container. */
      containerData?: PluginContainerData$1;
      /** Image file details. */
      image?: Media$1;
      /** Link details for images that are links. */
      link?: Link$1;
      /** Sets whether the image expands to full screen when clicked. */
      disableExpand?: boolean | null;
      /** Image's alternative text. */
      altText?: string | null;
      /** Image caption. */
      caption?: string | null;
      /** Sets whether the image's download button is disabled. */
      disableDownload?: boolean | null;
  }
  interface LinkPreviewData$1 {
      /** Styling for the link preview's container. */
      containerData?: PluginContainerData$1;
      /** Link details. */
      link?: Link$1;
      /** Preview title. */
      title?: string | null;
      /** Preview thumbnail URL. */
      thumbnailUrl?: string | null;
      /** Preview description. */
      description?: string | null;
      /** The preview content as HTML. */
      html?: string | null;
  }
  interface MapData$1 {
      /** Styling for the map's container. */
      containerData?: PluginContainerData$1;
      /** Map settings. */
      mapSettings?: MapSettings$1;
  }
  interface MapSettings$1 {
      /** The address to display on the map. */
      address?: string | null;
      /** Sets whether the map is draggable. */
      draggable?: boolean | null;
      /** Sets whether the location marker is visible. */
      marker?: boolean | null;
      /** Sets whether street view control is enabled. */
      streetViewControl?: boolean | null;
      /** Sets whether zoom control is enabled. */
      zoomControl?: boolean | null;
      /** Location latitude. */
      lat?: number | null;
      /** Location longitude. */
      lng?: number | null;
      /** Location name. */
      locationName?: string | null;
      /** Sets whether view mode control is enabled. */
      viewModeControl?: boolean | null;
      /** Initial zoom value. */
      initialZoom?: number | null;
      /** Map type. `HYBRID` is a combination of the `ROADMAP` and `SATELLITE` map types. */
      mapType?: MapType$1;
  }
  enum MapType$1 {
      /** Roadmap map type */
      ROADMAP = "ROADMAP",
      /** Satellite map type */
      SATELITE = "SATELITE",
      /** Hybrid map type */
      HYBRID = "HYBRID",
      /** Terrain map type */
      TERRAIN = "TERRAIN"
  }
  interface ParagraphData$1 {
      /** Styling for the paragraph text. */
      textStyle?: TextStyle$1;
      /** Indentation level from 1-6. */
      indentation?: number | null;
  }
  interface PollData$1 {
      /** Styling for the poll's container. */
      containerData?: PluginContainerData$1;
      /** Poll data. */
      poll?: Poll$1;
      /** Layout settings for the poll and voting options. */
      layout?: PollDataLayout$1;
      /** Styling for the poll and voting options. */
      design?: Design$1;
  }
  enum ViewRole$1 {
      /** Only Poll creator can view the results */
      CREATOR = "CREATOR",
      /** Anyone who voted can see the results */
      VOTERS = "VOTERS",
      /** Anyone can see the results, even if one didn't vote */
      EVERYONE = "EVERYONE"
  }
  enum VoteRole$1 {
      /** Logged in member */
      SITE_MEMBERS = "SITE_MEMBERS",
      /** Anyone */
      ALL = "ALL"
  }
  interface Permissions$1 {
      /** Sets who can view the poll results. */
      view?: ViewRole$1;
      /** Sets who can vote. */
      vote?: VoteRole$1;
      /** Sets whether one voter can vote multiple times. */
      allowMultipleVotes?: boolean | null;
  }
  interface Option$1 {
      /** Option ID. */
      _id?: string | null;
      /** Option title. */
      title?: string | null;
      /** The image displayed with the option. */
      image?: Media$1;
  }
  interface PollSettings$1 {
      /** Permissions settings for voting. */
      permissions?: Permissions$1;
      /** Sets whether voters are displayed in the vote results. */
      showVoters?: boolean | null;
      /** Sets whether the vote count is displayed. */
      showVotesCount?: boolean | null;
  }
  enum PollLayoutType$1 {
      /** List */
      LIST = "LIST",
      /** Grid */
      GRID = "GRID"
  }
  enum PollLayoutDirection$1 {
      /** Left-to-right */
      LTR = "LTR",
      /** Right-to-left */
      RTL = "RTL"
  }
  interface PollLayout$1 {
      /** The layout for displaying the voting options. */
      type?: PollLayoutType$1;
      /** The direction of the text displayed in the voting options. Text can be displayed either right-to-left or left-to-right. */
      direction?: PollLayoutDirection$1;
      /** Sets whether to display the main poll image. */
      enableImage?: boolean | null;
  }
  interface OptionLayout$1 {
      /** Sets whether to display option images. */
      enableImage?: boolean | null;
  }
  enum BackgroundType$1 {
      /** Color background type */
      COLOR = "COLOR",
      /** Image background type */
      IMAGE = "IMAGE",
      /** Gradiant background type */
      GRADIENT = "GRADIENT"
  }
  interface Gradient$1 {
      /** The gradient angle in degrees. */
      angle?: number | null;
      /** The start color as a hexademical value. */
      startColor?: string | null;
      /** The end color as a hexademical value. */
      lastColor?: string | null;
  }
  interface Background$1 extends BackgroundBackgroundOneOf$1 {
      /** The background color as a hexademical value. */
      color?: string | null;
      /** An image to use for the background. */
      image?: Media$1;
      /** Details for a gradient background. */
      gradient?: Gradient$1;
      /** Background type. For each option, include the relevant details. */
      type?: BackgroundType$1;
  }
  /** @oneof */
  interface BackgroundBackgroundOneOf$1 {
      /** The background color as a hexademical value. */
      color?: string | null;
      /** An image to use for the background. */
      image?: Media$1;
      /** Details for a gradient background. */
      gradient?: Gradient$1;
  }
  interface PollDesign$1 {
      /** Background styling. */
      background?: Background$1;
      /** Border radius in pixels. */
      borderRadius?: number | null;
  }
  interface OptionDesign$1 {
      /** Border radius in pixels. */
      borderRadius?: number | null;
  }
  interface Poll$1 {
      /** Poll ID. */
      _id?: string | null;
      /** Poll title. */
      title?: string | null;
      /** Poll creator ID. */
      creatorId?: string | null;
      /** Main poll image. */
      image?: Media$1;
      /** Voting options. */
      options?: Option$1[];
      /** The poll's permissions and display settings. */
      settings?: PollSettings$1;
  }
  interface PollDataLayout$1 {
      /** Poll layout settings. */
      poll?: PollLayout$1;
      /** Voting otpions layout settings. */
      options?: OptionLayout$1;
  }
  interface Design$1 {
      /** Styling for the poll. */
      poll?: PollDesign$1;
      /** Styling for voting options. */
      options?: OptionDesign$1;
  }
  interface TextData$1 {
      /** The text to apply decorations to. */
      text?: string;
      /** The decorations to apply. */
      decorations?: Decoration$1[];
  }
  /** Adds appearence changes to text */
  interface Decoration$1 extends DecorationDataOneOf$1 {
      /** Data for an anchor link decoration. */
      anchorData?: AnchorData$1;
      /** Data for a color decoration. */
      colorData?: ColorData$1;
      /** Data for an external link decoration. */
      linkData?: LinkData$1;
      /** Data for a mention decoration. */
      mentionData?: MentionData$1;
      /** Data for a font size decoration. */
      fontSizeData?: FontSizeData$1;
      /** Font weight for a bold decoration. */
      fontWeightValue?: number | null;
      /** Data for an italic decoration. */
      italicData?: boolean | null;
      /** Data for an underline decoration. */
      underlineData?: boolean | null;
      /** The type of decoration to apply. */
      type?: DecorationType$1;
  }
  /** @oneof */
  interface DecorationDataOneOf$1 {
      /** Data for an anchor link decoration. */
      anchorData?: AnchorData$1;
      /** Data for a color decoration. */
      colorData?: ColorData$1;
      /** Data for an external link decoration. */
      linkData?: LinkData$1;
      /** Data for a mention decoration. */
      mentionData?: MentionData$1;
      /** Data for a font size decoration. */
      fontSizeData?: FontSizeData$1;
      /** Font weight for a bold decoration. */
      fontWeightValue?: number | null;
      /** Data for an italic decoration. */
      italicData?: boolean | null;
      /** Data for an underline decoration. */
      underlineData?: boolean | null;
  }
  enum DecorationType$1 {
      BOLD = "BOLD",
      ITALIC = "ITALIC",
      UNDERLINE = "UNDERLINE",
      SPOILER = "SPOILER",
      ANCHOR = "ANCHOR",
      MENTION = "MENTION",
      LINK = "LINK",
      COLOR = "COLOR",
      FONT_SIZE = "FONT_SIZE",
      EXTERNAL = "EXTERNAL"
  }
  interface AnchorData$1 {
      /** The target node's ID. */
      anchor?: string;
  }
  interface ColorData$1 {
      /** The text's background color as a hexadecimal value. */
      background?: string | null;
      /** The text's foreground color as a hexadecimal value. */
      foreground?: string | null;
  }
  interface LinkData$1 {
      /** Link details. */
      link?: Link$1;
  }
  interface MentionData$1 {
      /** The mentioned user's name. */
      name?: string;
      /** The version of the user's name that appears after the `@` character in the mention. */
      slug?: string;
      /** Mentioned user's ID. */
      _id?: string | null;
  }
  interface FontSizeData$1 {
      /** The units used for the font size. */
      unit?: FontType$1;
      /** Font size value. */
      value?: number | null;
  }
  enum FontType$1 {
      PX = "PX",
      EM = "EM"
  }
  interface AppEmbedData$1 extends AppEmbedDataAppDataOneOf$1 {
      /** Data for embedded Wix Bookings content. */
      bookingData?: BookingData$1;
      /** Data for embedded Wix Events content. */
      eventData?: EventData$1;
      /** The type of Wix App content being embedded. */
      type?: AppType$1;
      /** The ID of the embedded content. */
      itemId?: string | null;
      /** The name of the embedded content. */
      name?: string | null;
      /** Deprecated: Use `image` instead. */
      imageSrc?: string | null;
      /** The URL for the embedded content. */
      url?: string | null;
      /** An image for the embedded content. */
      image?: Media$1;
  }
  /** @oneof */
  interface AppEmbedDataAppDataOneOf$1 {
      /** Data for embedded Wix Bookings content. */
      bookingData?: BookingData$1;
      /** Data for embedded Wix Events content. */
      eventData?: EventData$1;
  }
  enum AppType$1 {
      PRODUCT = "PRODUCT",
      EVENT = "EVENT",
      BOOKING = "BOOKING"
  }
  interface BookingData$1 {
      /** Booking duration in minutes. */
      durations?: string | null;
  }
  interface EventData$1 {
      /** Event schedule. */
      scheduling?: string | null;
      /** Event location. */
      location?: string | null;
  }
  interface VideoData$1 {
      /** Styling for the video's container. */
      containerData?: PluginContainerData$1;
      /** Video details. */
      video?: Media$1;
      /** Video thumbnail details. */
      thumbnail?: Media$1;
      /** Sets whether the video's download button is disabled. */
      disableDownload?: boolean | null;
      /** Video title. */
      title?: string | null;
      /** Video options. */
      options?: PlaybackOptions$1;
  }
  interface PlaybackOptions$1 {
      /** Sets whether the media will automatically start playing. */
      autoPlay?: boolean | null;
      /** Sets whether media's will be looped. */
      playInLoop?: boolean | null;
      /** Sets whether media's controls will be shown. */
      showControls?: boolean | null;
  }
  interface EmbedData$1 {
      /** Styling for the oEmbed node's container. */
      containerData?: PluginContainerData$1;
      /** An [oEmbed](https://www.oembed.com) object. */
      oembed?: Oembed$1;
      /** Origin asset source. */
      src?: string | null;
  }
  interface Oembed$1 {
      /** The resource type. */
      type?: string | null;
      /** The width of the resource specified in the `url` property in pixels. */
      width?: number | null;
      /** The height of the resource specified in the `url` property in pixels. */
      height?: number | null;
      /** Resource title. */
      title?: string | null;
      /** The source URL for the resource. */
      url?: string | null;
      /** HTML for embedding a video player. The HTML should have no padding or margins. */
      html?: string | null;
      /** The name of the author or owner of the resource. */
      authorName?: string | null;
      /** The URL for the author or owner of the resource. */
      authorUrl?: string | null;
      /** The name of the resource provider. */
      providerName?: string | null;
      /** The URL for the resource provider. */
      providerUrl?: string | null;
      /** The URL for a thumbnail image for the resource. If this property is defined, `thumbnailWidth` and `thumbnailHeight` must also be defined. */
      thumbnailUrl?: string | null;
      /** The width of the resource's thumbnail image. If this property is defined, `thumbnailUrl` and `thumbnailHeight` must also be defined. */
      thumbnailWidth?: string | null;
      /** The height of the resource's thumbnail image. If this property is defined, `thumbnailUrl` and `thumbnailWidth`must also be defined. */
      thumbnailHeight?: string | null;
      /** The URL for an embedded viedo. */
      videoUrl?: string | null;
      /** The oEmbed version number.  This value must be `1.0`. */
      version?: string | null;
  }
  interface CollapsibleListData$1 {
      /** Styling for the collapsible list's container. */
      containerData?: PluginContainerData$1;
      /** If `true`, only one item can be expanded at a time. */
      expandOnlyOne?: boolean | null;
      /** Sets which items are expanded when the page loads. */
      initialExpandedItems?: InitialExpandedItems$1;
      /** The direction of the text in the list. Either left-to-right or right-to-left. */
      direction?: Direction$1;
      /** If `true`, The collapsible item will appear in search results as an FAQ. */
      isQapageData?: boolean | null;
  }
  enum InitialExpandedItems$1 {
      /** First item will be expended initally */
      FIRST = "FIRST",
      /** All items will expended initally */
      ALL = "ALL",
      /** All items collapsed initally */
      NONE = "NONE"
  }
  enum Direction$1 {
      /** Left-to-right */
      LTR = "LTR",
      /** Right-to-left */
      RTL = "RTL"
  }
  interface TableData$1 {
      /** Styling for the table's container. */
      containerData?: PluginContainerData$1;
      /** The table's dimensions. */
      dimensions?: Dimensions$1;
      /** Deprecated: Use `rowHeader` and `columnHeader` instead. */
      header?: boolean | null;
      /** Sets whether the table's first row is a header. */
      rowHeader?: boolean | null;
      /** Sets whether the table's first column is a header. */
      columnHeader?: boolean | null;
  }
  interface Dimensions$1 {
      /** An array representing relative width of each column in relation to the other columns. */
      colsWidthRatio?: number[];
      /** An array representing the height of each row in pixels. */
      rowsHeight?: number[];
      /** An array representing the minimum width of each column in pixels. */
      colsMinWidth?: number[];
  }
  interface TableCellData$1 {
      /** Styling for the cell's background color and text alignment. */
      cellStyle?: CellStyle$1;
      /** The cell's border colors. */
      borderColors?: BorderColors$1;
  }
  enum VerticalAlignment$1 {
      /** Top alignment */
      TOP = "TOP",
      /** Middle alignment */
      MIDDLE = "MIDDLE",
      /** Bottom alignment */
      BOTTOM = "BOTTOM"
  }
  interface CellStyle$1 {
      /** Vertical alignment for the cell's text. */
      verticalAlignment?: VerticalAlignment$1;
      /** Cell background color as a hexadecimal value. */
      backgroundColor?: string | null;
  }
  interface BorderColors$1 {
      /** Left border color as a hexadecimal value. */
      left?: string | null;
      /** Right border color as a hexadecimal value. */
      right?: string | null;
      /** Top border color as a hexadecimal value. */
      top?: string | null;
      /** Bottom border color as a hexadecimal value. */
      bottom?: string | null;
  }
  /**
   * `NullValue` is a singleton enumeration to represent the null value for the
   * `Value` type union.
   *
   * The JSON representation for `NullValue` is JSON `null`.
   */
  enum NullValue$1 {
      /** Null value. */
      NULL_VALUE = "NULL_VALUE"
  }
  /**
   * `ListValue` is a wrapper around a repeated field of values.
   *
   * The JSON representation for `ListValue` is JSON array.
   */
  interface ListValue$1 {
      /** Repeated field of dynamically typed values. */
      values?: any[];
  }
  interface AudioData$1 {
      /** Styling for the audio node's container. */
      containerData?: PluginContainerData$1;
      /** Audio file details. */
      audio?: Media$1;
      /** Sets whether the audio node's download button is disabled. */
      disableDownload?: boolean | null;
      /** Cover image. */
      coverImage?: Media$1;
      /** Track name. */
      name?: string | null;
      /** Author name. */
      authorName?: string | null;
      /** An HTML version of the audio node. */
      html?: string | null;
  }
  interface OrderedListData$1 {
      /** Indentation level. */
      indentation?: number;
  }
  interface BulletedListData$1 {
      /** Indentation level. */
      indentation?: number;
  }
  interface BlockquoteData$1 {
      /** Indentation level. */
      indentation?: number;
  }
  interface Metadata$1 {
      /** Schema version. */
      version?: number;
      /**
       * When the object was created.
       * @readonly
       */
      createdTimestamp?: Date;
      /** When the object was most recently updated. */
      updatedTimestamp?: Date;
      /** Object ID. */
      _id?: string | null;
  }
  interface DocumentStyle$1 {
      /** Styling for H1 nodes. */
      headerOne?: TextNodeStyle$1;
      /** Styling for H2 nodes. */
      headerTwo?: TextNodeStyle$1;
      /** Styling for H3 nodes. */
      headerThree?: TextNodeStyle$1;
      /** Styling for H4 nodes. */
      headerFour?: TextNodeStyle$1;
      /** Styling for H5 nodes. */
      headerFive?: TextNodeStyle$1;
      /** Styling for H6 nodes. */
      headerSix?: TextNodeStyle$1;
      /** Styling for paragraph nodes. */
      paragraph?: TextNodeStyle$1;
      /** Styling for block quote nodes. */
      blockquote?: TextNodeStyle$1;
      /** Styling for code block nodes. */
      codeBlock?: TextNodeStyle$1;
  }
  interface TextNodeStyle$1 {
      /** The decorations to apply to the node. */
      decorations?: Decoration$1[];
      /** Padding and background color for the node. */
      nodeStyle?: NodeStyle$1;
      /** Line height for text in the node. */
      lineHeight?: string | null;
  }
  interface ModerationDetails$1 {
      /** Member ID of the person who submitted the post. */
      submittedBy?: string;
      /** Date and time the post was submitted for moderation. */
      submittedDate?: Date;
      /**
       * Status indicating whether the submission was approved or rejected by the moderator.
       *
       * Supported values: `'APPROVED'`, `'REJECTED'`, `'PENDING'`.
       */
      status?: ModerationStatusStatus$1;
      /** Member ID of the person who approved or rejected the post. */
      moderatedBy?: string | null;
      /** Date and time the post was approved or rejected by a moderator. */
      moderationDate?: Date;
  }
  enum ModerationStatusStatus$1 {
      UNKNOWN = "UNKNOWN",
      APPROVED = "APPROVED",
      REJECTED = "REJECTED"
  }
  interface BlogMedia extends BlogMediaMediaOneOf {
      /** Wix Media details. */
      wixMedia?: WixMedia$1;
      /** Embed media details. */
      embedMedia?: EmbedMedia$1;
      /** Whether cover media is displayed. */
      displayed?: boolean;
      /**
       * Whether the media is custom.
       *
       *
       * `false` if the media is the first image or video in the post. `true` if set to some other image or video.",
       */
      custom?: boolean;
  }
  /** @oneof */
  interface BlogMediaMediaOneOf {
      /** Wix Media details. */
      wixMedia?: WixMedia$1;
      /** Embed media details. */
      embedMedia?: EmbedMedia$1;
  }
  interface WixMedia$1 {
      /** Image details. */
      image?: string;
      /** Video details. */
      videoV2?: string;
  }
  interface VideoResolution$1 {
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
  interface EmbedMedia$1 {
      /** Thumbnail details. */
      thumbnail?: EmbedThumbnail$1;
      /** Video details. */
      video?: EmbedVideo$1;
  }
  interface EmbedThumbnail$1 {
      /** Thumbnail url. */
      url?: string;
      /** Thumbnail width. */
      width?: number;
      /** Thumbnail height. */
      height?: number;
  }
  interface EmbedVideo$1 {
      /** Video url. */
      url?: string;
      /** Video width. */
      width?: number;
      /** Video height. */
      height?: number;
  }
  interface PostTranslation {
      /** Post ID. */
      _id?: string;
      /** Language the post is written in. */
      language?: string | null;
      /** Post slug. For example, 'post-slug'. */
      slug?: string | null;
      /** SEO data. */
      seoData?: SeoSchema$3;
      /** Post URL. */
      url?: string;
  }
  interface OldBlogMigratedEvent {
      /** Instance id of new version of blog */
      newBlogInstanceId?: string;
      /** Instance id of old version of blog */
      oldBlogInstanceId?: string;
  }
  interface DomainEvent$3 extends DomainEventBodyOneOf$3 {
      createdEvent?: EntityCreatedEvent$3;
      updatedEvent?: EntityUpdatedEvent$3;
      deletedEvent?: EntityDeletedEvent$3;
      actionEvent?: ActionEvent$3;
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
  interface DomainEventBodyOneOf$3 {
      createdEvent?: EntityCreatedEvent$3;
      updatedEvent?: EntityUpdatedEvent$3;
      deletedEvent?: EntityDeletedEvent$3;
      actionEvent?: ActionEvent$3;
  }
  interface EntityCreatedEvent$3 {
      entityAsJson?: string;
      /**
       * Indicates the event was triggered by a restore-from-trashbin operation for a previously deleted entity
       * @internal
       */
      triggeredByUndelete?: boolean | null;
  }
  interface EntityUpdatedEvent$3 {
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
  interface EntityDeletedEvent$3 {
      /**
       * Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled
       * @internal
       */
      movedToTrash?: boolean | null;
      /** Entity that was deleted */
      deletedEntityAsJson?: string | null;
  }
  interface ActionEvent$3 {
      bodyAsJson?: string;
  }
  interface MessageEnvelope$3 {
      /** App instance ID. */
      instanceId?: string | null;
      /** Event type. */
      eventType?: string;
      /** The identification type and identity data. */
      identity?: IdentificationData$3;
      /** Stringify payload. */
      data?: string;
  }
  interface IdentificationData$3 extends IdentificationDataIdOneOf$3 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
      /** @readonly */
      identityType?: WebhookIdentityType$3;
  }
  /** @oneof */
  interface IdentificationDataIdOneOf$3 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
  }
  enum WebhookIdentityType$3 {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  interface ConvertDraftJsToRichContentRequest {
      /** DraftJs content to convert to Rich content. */
      content?: Record<string, any> | null;
  }
  interface ConvertDraftJsToRichContentResponse {
      /** Rich content converted from DraftJs content. */
      richContent?: string;
  }
  interface ConvertRichContentToDraftJsRequest {
      /** Rich content to convert to DraftJs content. */
      richContent?: string;
  }
  interface ConvertRichContentToDraftJsResponse {
      /** DraftJs content converted from Rich content. */
      content?: Record<string, any> | null;
  }
  interface ListDemoPostsRequest {
      /**
       * Whether to return only featured posts.
       *
       * Default: `false`
       */
      featured?: boolean;
      /**
       * Hashtag filter.
       *
       * Pass an array of hashtags to return only posts containing any of the provided hashtags.
       * If omitted, all posts with or without hashtags are returned.
       */
      hashtags?: string[];
      /**
       * Category filter.
       *
       * Pass an array of category IDs to return only posts with any of the provided categories.
       * If omitted, all posts with or without associated categories are returned.
       */
      categoryIds?: string[];
      /**
       * Tag filter.
       *
       * Pass an array of tag IDs to return only posts with any of the provided tags.
       * If omitted, all posts with or without tags are returned.
       */
      tagIds?: string[];
      /**
       * Sorting options.
       *
       * - `FEED`: Ordered by `firstPublishedDate` in descending order with pinned posts first.
       * - `VIEW_COUNT`: Ordered by total number of views in descending order.
       * - `LIKE_COUNT`: Ordered by total number of likes in descending order.
       * - `PUBLISHED_DATE_ASC`: Ordered by `firstPublishedDate` in ascending order.
       * - `PUBLISHED_DATE_DESC`: Ordered by `firstPublishedDate` in descending order.
       * - `TITLE_ASC`: Ordered by `title` in ascening order.
       * - `TITLE_DESC`: Ordered by `title` in descending order.
       * - `RATING`: reserved for internal use.
       *
       * Default: `FEED`
       */
      sort?: GetPostsSort;
      /** Pagination options. */
      paging?: BlogPaging$2;
      /**
       * __Deprecated.__ Use `fieldsets` instead.
       * This parameter will be removed on June 30, 2023.
       *
       * List of post fields to be included in the response.
       */
      fieldsToInclude?: PostFieldField[];
      /**
       * Language filter.
       *
       * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       * Pass a language to only receive posts that are in that language.
       * If omitted, posts in all languages are returned.
       */
      language?: string | null;
      /** Post owner's member ID. */
      memberId?: string | null;
      /**
       * List of additional post fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the post’s base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the post’s base fields are returned.
       */
      fieldsets?: PostFieldField[];
  }
  enum GetPostsSort {
      /** Sorting by publishing date descending with pinned posts first. The default value */
      FEED = "FEED",
      /** Sorting by publishing date ascending */
      PUBLISHED_DATE_ASC = "PUBLISHED_DATE_ASC",
      /** Sorting by publishing date descending */
      PUBLISHED_DATE_DESC = "PUBLISHED_DATE_DESC",
      /** Sorting by view count descending */
      VIEW_COUNT = "VIEW_COUNT",
      /** Sorting by like count descending */
      LIKE_COUNT = "LIKE_COUNT",
      /** Sorting by title ascending */
      TITLE_ASC = "TITLE_ASC",
      /** Sorting by title descending */
      TITLE_DESC = "TITLE_DESC",
      /** Sorting by post rating descending. */
      RATING = "RATING"
  }
  interface BlogPaging$2 {
      /**
       * Number of items to skip in the current sort order.
       *
       *
       * Default: `0`
       */
      offset?: number;
      /**
       * Number of items to return.
       *
       *
       * Default:`50`
       */
      limit?: number;
      /** Pointer to the next or previous page in the list of results. */
      cursor?: string | null;
  }
  enum PostFieldField {
      UNKNOWN = "UNKNOWN",
      /** Deprecated use `METRICS` instead */
      COUNTERS = "COUNTERS",
      /** Includes Post url when present */
      URL = "URL",
      /** Includes Post content text string when present */
      CONTENT_TEXT = "CONTENT_TEXT",
      /** Includes Post metrics when present */
      METRICS = "METRICS",
      /** Includes SEO data */
      SEO = "SEO",
      /**
       * Includes Post content as a stringified DraftJS document
       * Reserved for internal use
       */
      CONTENT = "CONTENT",
      /**
       * Includes internal id field
       * Reserved for internal use
       */
      INTERNAL_ID = "INTERNAL_ID",
      /** Includes post owners Contact Id */
      CONTACT_ID = "CONTACT_ID",
      /** Includes post rich content */
      RICH_CONTENT = "RICH_CONTENT",
      /** Includes post rich content string */
      RICH_CONTENT_STRING = "RICH_CONTENT_STRING",
      /** Includes compressed post rich content string */
      RICH_CONTENT_COMPRESSED = "RICH_CONTENT_COMPRESSED",
      /** Includes post translations */
      TRANSLATIONS = "TRANSLATIONS"
  }
  interface ListDemoPostsResponse {
      /** List of posts. */
      posts?: Post[];
      /** Details on the paged set of results returned. */
      metaData?: MetaData$3;
  }
  interface MetaData$3 {
      /** Number of items returned in this response. */
      count?: number;
      /**
       * Number of items skipped in the current sort order.
       *
       *
       */
      offset?: number;
      /** Total number of items that match the query. */
      total?: number;
      /** Pointer to the next or previous page in the list of results. */
      cursor?: string | null;
  }
  interface ListTemplatesRequest {
      /** Filter post templates by given template category ids */
      categoryIds?: string[];
      /** Filter post templates by provided language */
      language?: string | null;
      /** Returns post template categories when set to TRUE */
      listTemplateCategories?: boolean;
      /** Sort order by ascending/descending publish date. Default is ascending publish date sort */
      sort?: GetPostTemplatesSort;
      /** Pagination options. */
      paging?: BlogPaging$2;
  }
  enum GetPostTemplatesSort {
      /** Sorting by publishing date ascending */
      PUBLISHED_DATE_ASC = "PUBLISHED_DATE_ASC",
      /** Sorting by publishing date descending */
      PUBLISHED_DATE_DESC = "PUBLISHED_DATE_DESC"
  }
  interface ListTemplatesResponse {
      /** Available post templates */
      postTemplates?: Post[];
      /** Details on the paged set of posts templates returned. */
      postTemplatesMetaData?: MetaData$3;
      /** Post template categories. This value is returned empty unless asked explicitly */
      templateCategories?: Category$2[];
  }
  interface Category$2 {
      /**
       * Category ID.
       * @readonly
       */
      _id?: string;
      /** Category label. Displayed in the Category Menu. */
      label?: string;
      /**
       * Number of posts in the category.
       * @readonly
       */
      postCount?: number;
      /**
       * Category URL.
       * @readonly
       */
      url?: string;
      /** Category description. */
      description?: string | null;
      /** Category title. */
      title?: string;
      /**
       * __Deprecated.__ Use `coverImage` instead.
       * This property will be removed on June 30, 2023.
       *
       * Category cover image or video.
       */
      coverMedia?: CoverMedia$2;
      /**
       * Reserved for internal use.
       * @readonly
       */
      oldRank?: number;
      /**
       * __Deprecated.__ Use `displayPosition` instead.
       * This property will be removed on June 30, 2023.
       *
       * Category position in sequence.
       */
      rank?: number | null;
      /**
       * Category position in sequence. Categories with a lower display position are displayed first. Categories with a position of `-1` appear at the end of the sequence.
       *
       * Default: `-1`
       */
      displayPosition?: number | null;
      /**
       * ID of the category's translations. All translations of a single category share the same `translationId`.
       * @readonly
       */
      translationId?: string | null;
      /**
       * Category language.
       *
       * Two-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       */
      language?: string | null;
      /** Category slug. For example, `'category-slug'`. */
      slug?: string;
      /**
       * Reserved for internal use.
       * @readonly
       */
      internalId?: string | null;
      /** SEO data. */
      seoData?: SeoSchema$3;
      /** Category cover image. */
      coverImage?: string;
      /**
       * Category translations.
       * @internal
       * @readonly
       */
      translations?: CategoryTranslation$2[];
      /**
       * Date and time the Category was last updated.
       * @readonly
       */
      _updatedDate?: Date;
  }
  interface CategoryTranslation$2 {
      /** Category ID */
      _id?: string;
      /** Label which is presented in the categories menu on site */
      label?: string | null;
      /** Language of the category */
      language?: string | null;
      /** Url of this category page */
      url?: string;
  }
  interface GetTemplateRequest {
      /** Post template id */
      postTemplateId: string;
  }
  interface GetTemplateResponse {
      /** Post template */
      postTemplate?: Post;
  }
  interface CreateDraftPostFromTemplateRequest {
      /** Post template id */
      postTemplateId: string;
  }
  interface CreateDraftPostFromTemplateResponse {
      /** Created draft post */
      draftPost?: DraftPost$1;
  }
  interface DraftPost$1 {
      /**
       * Draft post ID.
       * @readonly
       */
      _id?: string;
      /** Draft post title. */
      title?: string;
      /**
       * Draft post excerpt.
       *
       * If no excerpt has been manually set, an excerpt is automatically generated from the post's text.
       * This can be retrieved using the `GENERATED_EXCERPT` fieldset.
       */
      excerpt?: string | null;
      /** Whether the draft post is marked as featured. */
      featured?: boolean | null;
      /** Category IDs of the draft post. */
      categoryIds?: string[];
      /**
       * __Deprecated.__ Use `media` instead.
       * This property will be removed on June 6, 2023.
       *
       * Draft post cover media.
       * @internal
       */
      coverMedia?: CoverMedia$2;
      /** Draft post owner's member ID. */
      memberId?: string | null;
      /** Hashtags in the post. */
      hashtags?: string[];
      /** Whether commenting on the draft post is enabled. */
      commentingEnabled?: boolean | null;
      /**
       * Estimated reading time of the draft post (calculated automatically).
       * @readonly
       */
      minutesToRead?: number;
      /** Image placed at the top of the blog page. */
      heroImage?: string;
      /** Tag IDs the draft post is tagged with. */
      tagIds?: string[];
      /** IDs of posts related to this draft post. */
      relatedPostIds?: string[];
      /** [Pricing plan IDs](https://dev.wix.com/api/rest/wix-pricing-plans). Only relevant if a post is assigned to a specific pricing plan. */
      pricingPlanIds?: string[];
      /**
       * ID of the draft post's translations.
       *
       * All translations of a single post share the same `translationId`.
       * Available only if the [Multilingual](https://support.wix.com/en/article/wix-multilingual-an-overview) app is installed.
       */
      translationId?: string | null;
      /**
       * Language the draft post is written in.
       *
       * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       */
      language?: string | null;
      /**
       * Reserved for internal use.
       * @readonly
       */
      changeOrigin?: Origin$1;
      /**
       * Reserved for internal use.
       * @readonly
       */
      contentId?: string | null;
      /** Reserved for internal use. */
      editingSessionId?: string | null;
      /** Draft Post rich content. */
      richContent?: RichContent$1;
      /**
       * Status of the draft post.
       * @readonly
       */
      status?: Status$1;
      /** Details of the draft post in review. Only relevant to posts submitted by guest writers. */
      moderationDetails?: ModerationDetails$1;
      /**
       * Reserved for internal use.
       * @readonly
       */
      mostRecentContributorId?: string | null;
      /**
       * Indicates if there are changes made to the draft post that have not yet been published.
       * @readonly
       */
      hasUnpublishedChanges?: boolean;
      /**
       * Date the draft post was last edited.
       * @readonly
       */
      editedDate?: Date;
      /**
       * Date the draft post is scheduled to be published.
       * @readonly
       */
      scheduledPublishDate?: Date;
      /** Reserved for internal use. */
      content?: Record<string, any> | null;
      /** Date the post was first published. */
      firstPublishedDate?: Date;
      /** SEO data. */
      seoData?: SeoSchema$3;
      /** Reserved for internal use. */
      paidContentParagraph?: number | null;
      /**
       * Reserved for internal use.
       * @readonly
       */
      slugs?: string[];
      /**
       * Draft post URL preview. What the URL will look like once the post is published.
       * @readonly
       */
      url?: string;
      /**
       * Date the draft post was first created.
       * @readonly
       */
      _createdDate?: Date;
      /** SEO slug. */
      seoSlug?: string | null;
      /** Post cover media. */
      media?: BlogMedia;
      /** Number of paragraphs to display in a paid content preview for non-paying users. */
      previewTextParagraph?: number | null;
      /**
       * List of the post's translated posts.
       * @internal
       * @readonly
       */
      translations?: DraftPostTranslation$1[];
      /**
       * Reserved for internal use, not included in base response.
       * @internal
       */
      originPostId?: string | null;
      /**
       * Reserved for internal use, not included in base response.
       * @internal
       */
      originPostInstanceId?: string | null;
      /**
       * Reserved for internal use.
       * @readonly
       */
      internalId?: string | null;
  }
  enum Origin$1 {
      UNKNOWN = "UNKNOWN",
      /** Changed by admin */
      ADMIN = "ADMIN",
      /** Categories were changed */
      ADD_CATEGORIES = "ADD_CATEGORIES",
      /** Saved automatically */
      AUTO_SAVE = "AUTO_SAVE",
      /** Copied from template */
      COPY_TEMPLATE = "COPY_TEMPLATE",
      /** Imported */
      IMPORT = "IMPORT",
      /** Imported in bulk */
      IMPORT_BULK = "IMPORT_BULK",
      /** Imported with html import */
      IMPORT_HTML = "IMPORT_HTML",
      /** Patch import */
      IMPORT_PATCH = "IMPORT_PATCH",
      /** Changed language */
      LANGUAGE_CHANGE = "LANGUAGE_CHANGE",
      /** Saved manually */
      MANUAL_SAVE = "MANUAL_SAVE",
      /** Affected by migration */
      MIGRATION = "MIGRATION",
      /** Affected by moderation */
      MODERATION = "MODERATION",
      /** Moved to trash */
      MOVE_TO_TRASH = "MOVE_TO_TRASH",
      /** Pricing plans were changed */
      PRICING_PLANS_CHANGE = "PRICING_PLANS_CHANGE",
      /** Was provisioned */
      PROVISION = "PROVISION",
      /** Was published */
      PUBLISH = "PUBLISH",
      /** Owner was reassigned */
      REASSIGN_OWNER = "REASSIGN_OWNER",
      /** Was reblogged */
      REBLOG = "REBLOG",
      /** Was restored */
      RESTORE = "RESTORE",
      /** Reverted to draft */
      REVERT_TO_DRAFT = "REVERT_TO_DRAFT",
      /** Was translated */
      TRANSLATION = "TRANSLATION",
      /** Was unpublished */
      UNPUBLISH = "UNPUBLISH",
      /** Was unscheduled */
      UNSCHEDULE = "UNSCHEDULE",
      /** New edit session started which updated editing_session_id id */
      NEW_EDIT_SESSION = "NEW_EDIT_SESSION",
      /** Was scheduled by Later */
      SCHEDULING_SERVICE_SCHEDULE = "SCHEDULING_SERVICE_SCHEDULE",
      /** Was unscheduled by Later */
      SCHEDULING_SERVICE_UNSCHEDULE = "SCHEDULING_SERVICE_UNSCHEDULE",
      /** Was published by Later */
      SCHEDULING_SERVICE_PUBLISH = "SCHEDULING_SERVICE_PUBLISH",
      /** Was scheduled */
      SCHEDULE = "SCHEDULE",
      /** Was removed from moderation */
      REMOVE_FROM_MODERATION = "REMOVE_FROM_MODERATION",
      /** Was rejected from moderation */
      REJECT_FROM_MODERATION = "REJECT_FROM_MODERATION",
      /** Was approved in moderation */
      APPROVE_IN_MODERATION = "APPROVE_IN_MODERATION",
      /** Tag was deleted */
      DELETE_TAG = "DELETE_TAG",
      /** Post was pinned */
      PIN = "PIN",
      /** Post was unpinned */
      UNPIN = "UNPIN",
      /** Saved automatically by AI tool. */
      AI_AUTO_SAVE = "AI_AUTO_SAVE"
  }
  enum Status$1 {
      UNKNOWN = "UNKNOWN",
      /** Status indicating the draft post is published. */
      PUBLISHED = "PUBLISHED",
      /** Status indicating the draft post is unpublished. */
      UNPUBLISHED = "UNPUBLISHED",
      /** Status indicating the draft post is scheduled for publication. */
      SCHEDULED = "SCHEDULED",
      /** Status indicating the draft post is deleted. */
      DELETED = "DELETED",
      /**
       * Deprecated. Use `IN_REVIEW` instead. Status indicating the draft post is in review.
       * Target removal date 2024-06-30
       * Reserved for internal use.
       */
      IN_MODERATION = "IN_MODERATION",
      /** Status indicating the draft post is in review. */
      IN_REVIEW = "IN_REVIEW"
  }
  interface DraftPostTranslation$1 {
      /** Post ID. */
      _id?: string;
      /** Post status. */
      status?: Status$1;
      /** Language the post is written in. */
      language?: string | null;
      /** Post slug. For example, 'post-slug'. */
      slug?: string | null;
      /** SEO data. */
      seoData?: SeoSchema$3;
      /** Post URL. */
      url?: string;
  }
  interface GetTotalLikesPerMemberRequest {
      /** Member ID. */
      memberId: string;
  }
  interface GetTotalLikesPerMemberResponse {
      /** The total number of likes of the member. */
      total?: number;
  }
  interface PostLiked extends PostLikedInitiatorOneOf {
      /** Member ID of person who liked the post (only returned when the member was logged in when liking the post). */
      memberId?: string | null;
      /** Visitor ID of person who liked the post when they are not logged in. */
      anonymousVisitorId?: string | null;
      /** ID of the liked post. */
      postId?: string;
  }
  /** @oneof */
  interface PostLikedInitiatorOneOf {
      /** Member ID of person who liked the post (only returned when the member was logged in when liking the post). */
      memberId?: string | null;
      /** Visitor ID of person who liked the post when they are not logged in. */
      anonymousVisitorId?: string | null;
  }
  interface PostUnliked extends PostUnlikedInitiatorOneOf {
      /** Member ID of person who unliked the post (returned when the member was logged in when unliking the post). */
      memberId?: string | null;
      /** Visitor ID of person who unliked the post when they are not logged in. */
      anonymousVisitorId?: string | null;
      /** ID of the unliked post. */
      postId?: string;
  }
  /** @oneof */
  interface PostUnlikedInitiatorOneOf {
      /** Member ID of person who unliked the post (returned when the member was logged in when unliking the post). */
      memberId?: string | null;
      /** Visitor ID of person who unliked the post when they are not logged in. */
      anonymousVisitorId?: string | null;
  }
  interface PostCountersUpdated extends PostCountersUpdatedInitiatorOneOf {
      /** Member ID of person who triggered the counter update */
      memberId?: string | null;
      /** Visitor ID if person that liked the post is not logged in */
      anonymousVisitorId?: string | null;
      /** ID of the post which counters were updated. */
      postId?: string;
      /**
       * Internal ID of the post which counters were updated.
       * @internal
       */
      postInternalId?: string;
      /** Field of the updated counter. */
      updatedCounterField?: Field$3;
      /** New counter value. */
      counter?: number;
  }
  /** @oneof */
  interface PostCountersUpdatedInitiatorOneOf {
      /** Member ID of person who triggered the counter update */
      memberId?: string | null;
      /** Visitor ID if person that liked the post is not logged in */
      anonymousVisitorId?: string | null;
  }
  enum Field$3 {
      UNKNOWN = "UNKNOWN",
      /** Total comments field. */
      TOTAL_COMMENTS = "TOTAL_COMMENTS",
      /** Like count field. */
      LIKE_COUNT = "LIKE_COUNT",
      /** View count field. */
      VIEW_COUNT = "VIEW_COUNT",
      /** Rating count field */
      RATING_COUNT = "RATING_COUNT"
  }
  interface PostOwnerChanged {
      /**
       * Member ID of the post's owner before the change.
       * @internal
       */
      oldMemberId?: string;
      /**
       * Member ID of the post's owner after the change.
       * @internal
       */
      newMemberId?: string;
  }
  interface InitialPostsCopied {
      /** Number of posts copied. */
      count?: number;
  }
  interface GetPostRequest {
      /** Post ID. */
      postId: string;
      /** Reserved for internal use. */
      fieldsToInclude?: PostFieldField[];
      /**
       * List of post fields to be included in the response. By default, any fields not passed are not returned.
       *
       * Supported Values:
       * `"CONTACT_ID"`, `"CONTENT_TEXT"`, `"METRICS"`, `"SEO"`, and `"URL"`.
       */
      fieldsets?: PostFieldField[];
  }
  interface GetPostResponse {
      /** Post info. */
      post?: Post;
  }
  interface GetPostBySlugRequest {
      /** Slug of the post to retrieve. */
      slug: string;
      /** Reserved for internal use. */
      fieldsToInclude?: PostFieldField[];
      /**
       * List of post fields to be included in the response. By default, any fields not passed are not returned.
       *
       * Supported Values:
       * `"CONTACT_ID"`, `"CONTENT_TEXT"`, `"METRICS"`, `"SEO"`, and `"URL"`.
       */
      fieldsets?: PostFieldField[];
  }
  interface GetPostBySlugResponse {
      /** Post info. */
      post?: Post;
  }
  interface ListPostsRequest {
      /**
       * Whether to return only featured posts.
       *
       * Default: `false`
       */
      featured?: boolean;
      /**
       * Hashtag filter.
       *
       * Pass an array of hashtags to return only posts containing any of the provided hashtags.
       * If omitted, all posts with or without hashtags are returned.
       */
      hashtags?: string[];
      /**
       * Category filter.
       *
       * Pass an array of category IDs to return only posts with any of the provided categories.
       * If omitted, all posts with or without associated categories are returned.
       */
      categoryIds?: string[];
      /**
       * Tag filter.
       *
       * Pass an array of tag IDs to return only posts with any of the provided tags.
       * If omitted, all posts with or without tags are returned.
       */
      tagIds?: string[];
      /** Sort order by descending view count, ascending or descending publish date, or default to descending by publish date with pinned posts first. */
      sort?: GetPostsSort;
      /** Pagination options. */
      paging?: BlogPaging$2;
      /** Reserved for internal use. */
      fieldsToInclude?: PostFieldField[];
      /**
       * Language filter.
       *
       *
       * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       */
      language?: string | null;
      /** Post owner's member ID. */
      memberId?: string | null;
      /**
       * List of post fields to be included in the response. By default, any fields not passed are not returned.
       *
       * Supported Values:
       * `"CONTACT_ID"`, `"CONTENT_TEXT"`, `"METRICS"`, `"SEO"`, and `"URL"`.
       */
      fieldsets?: PostFieldField[];
  }
  interface ListPostsResponse {
      /** List of posts. */
      posts?: Post[];
      /** Details on the paged set of results returned. */
      metaData?: MetaData$3;
  }
  interface QueryPostsRequest {
      /**
       * __Deprecated.__ Use `query` instead.
       * This parameter will be removed on June 30, 2023.
       *
       * Pagination options.
       */
      paging?: BlogPaging$2;
      /**
       * __Deprecated.__ Use `query` instead.
       * This parameter will be removed on June 30, 2023.
       *
       * Filter object.
       */
      filter?: Record<string, any> | null;
      /**
       * __Deprecated.__ Use `query` instead.
       * This parameter will be removed on June 30, 2023.
       *
       * Sorting options. For a list of sortable fields, see [Field Support for Filtering and Sorting](https://dev.wix.com/api/rest/wix-blog/blog/filter-and-sort).
       */
      sort?: Sorting$3[];
      /** Reserved for internal use. */
      fieldsToInclude?: PostFieldField[];
      /** Query options. */
      query?: PlatformQuery$3;
      /**
       * List of post fields to be included in the response. By default, any fields not passed are not returned.
       *
       * Supported Values:
       * `"CONTACT_ID"`, `"CONTENT_TEXT"`, `"METRICS"`, `"SEO"`, and `"URL"`.
       */
      fieldsets?: PostFieldField[];
  }
  interface Sorting$3 {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
      order?: SortOrder$3;
      /**
       * When `field_name` is a property of repeated field that is marked as `MATCH_ITEMS` and sort should be done by
       * a specific element from a collection, filter can/should be provided to ensure correct sort value is picked.
       *
       * If multiple filters are provided, they are combined with AND operator.
       *
       * Example:
       * Given we have document like {"id": "1", "nestedField": [{"price": 10, "region": "EU"}, {"price": 20, "region": "US"}]}
       * and `nestedField` is marked as `MATCH_ITEMS`, to ensure that sorting is done by correct region, filter should be
       * { fieldName: "nestedField.price", "select_items_by": [{"nestedField.region": "US"}] }
       * @internal
       */
      selectItemsBy?: Record<string, any>[] | null;
  }
  enum SortOrder$3 {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface PlatformQuery$3 extends PlatformQueryPagingMethodOneOf$3 {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$3;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$3;
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`
       * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
       */
      filter?: Record<string, any> | null;
      /**
       * Sort object in the following format:
       * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
       */
      sort?: Sorting$3[];
  }
  /** @oneof */
  interface PlatformQueryPagingMethodOneOf$3 {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$3;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$3;
  }
  interface Paging$3 {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface CursorPaging$3 {
      /** Number of items to load. */
      limit?: number | null;
      /**
       * Pointer to the next or previous page in the list of results.
       *
       * You can get the relevant cursor token
       * from the `pagingMetadata` object in the previous call's response.
       * Not relevant for the first request.
       */
      cursor?: string | null;
  }
  interface QueryPostsResponse {
      /** List of posts. */
      posts?: Post[];
      /**
       * __Deprecated.__ Use `pagingMetadata` instead.
       * This property will be removed on June 30, 2023.
       *
       * Details on the paged set of results returned.
       */
      metaData?: MetaData$3;
      /** Details on the paged set of results returned. */
      pagingMetadata?: PagingMetadataV2$3;
  }
  interface PagingMetadataV2$3 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      offset?: number | null;
      /** Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set. */
      total?: number | null;
      /** Flag that indicates the server failed to calculate the `total` field. */
      tooManyToCount?: boolean | null;
      /** Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used. */
      cursors?: Cursors$3;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       * @internal
       */
      hasNext?: boolean | null;
  }
  interface Cursors$3 {
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  interface GetPostMetricsRequest {
      /** Post ID. */
      postId: string;
  }
  interface GetPostMetricsResponse {
      /** Post metrics. */
      metrics?: Metrics;
  }
  interface BulkGetPostMetricsRequest {
      /** Post IDs. */
      postIds: string[];
  }
  interface BulkGetPostMetricsResponse {
      /** Map of post.id to metrics */
      metrics?: Record<string, Metrics>;
  }
  interface ViewPostRequest {
      /** Post ID. */
      postId: string;
  }
  interface ViewPostResponse {
      /** Total number of post views */
      views?: number;
  }
  interface LikePostRequest {
      /** Post ID. */
      postId: string;
      /**
       * List of additional post fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the post’s base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the post’s base fields are returned.
       */
      fieldsets?: PostFieldField[];
  }
  interface LikePostResponse {
      /** Post info. */
      post?: Post;
  }
  interface UnlikePostRequest {
      /** Post ID. */
      postId: string;
      /**
       * List of additional post fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the post’s base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the post’s base fields are returned.
       */
      fieldsets?: PostFieldField[];
  }
  interface UnlikePostResponse {
      /** Post info. */
      post?: Post;
  }
  interface PinPostRequest {
      /** Post ID. */
      postId: string;
      /**
       * List of additional post fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the post’s base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the post’s base fields are returned.
       */
      fieldsets?: PostFieldField[];
  }
  interface PinPostResponse {
      /** Post info. */
      post?: Post;
  }
  interface UnpinPostRequest {
      /** Post ID. */
      postId: string;
      /**
       * List of additional post fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the post’s base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the post’s base fields are returned.
       */
      fieldsets?: PostFieldField[];
  }
  interface UnpinPostResponse {
      /** Post info. */
      post?: Post;
  }
  interface ListPostsArchiveRequest {
      /** Month */
      month: number | null;
      /** Year */
      year: number;
      /** Time zone */
      timeZone?: string | null;
      /** Pagination options. */
      paging?: BlogPaging$2;
      /**
       * Language filter.
       *
       * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       * Pass a language to only receive posts that are in that language.
       * If omitted, posts in all languages are returned.
       */
      language?: string | null;
      /**
       * List of additional post fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the post’s base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the post’s base fields are returned.
       */
      fieldsets?: PostFieldField[];
  }
  interface ListPostsArchiveResponse {
      /** List of posts. */
      posts?: Post[];
      /** Details on the paged set of results returned. */
      metaData?: MetaData$3;
      /** Details on the paged set of results returned. */
      pagingMetadata?: PagingMetadataV2$3;
  }
  interface BulkGetPostReactionsRequest {
      /** Post IDs. */
      postIds: string[];
  }
  interface BulkGetPostReactionsResponse {
      /** Map of post.id to reactions */
      reactionsMap?: Record<string, Reactions>;
  }
  interface Reactions {
      /**
       * Is post liked by the current user
       * @readonly
       */
      liked?: boolean;
  }
  /** Get Blog Publications Count Stats request */
  interface QueryPublicationsCountStatsRequest {
      /** Start of time range to return, in ISO 8601 date and time format. */
      rangeStart?: Date;
      /** Non-inclusive end of time range to return, in ISO 8601 date and time format. */
      rangeEnd?: Date;
      /** Order of the returned results. */
      order?: QueryPublicationsCountStatsRequestOrder;
      /** Number of months to include in the response. */
      months?: number;
      /**
       * Language filter
       *
       * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       */
      language?: string | null;
      /** Timezone of the client. */
      timeZone?: string | null;
  }
  enum QueryPublicationsCountStatsRequestOrder {
      UNKNOWN = "UNKNOWN",
      OLDEST = "OLDEST",
      NEWEST = "NEWEST"
  }
  /** Get Blog Publications Count Stats response */
  interface QueryPublicationsCountStatsResponse {
      /** Chronologically ordered list of publications. */
      stats?: PeriodPublicationsCount[];
  }
  /** Publications count for a specific time period */
  interface PeriodPublicationsCount {
      /** Start of time range in ISO 8601 date and time format. */
      periodStart?: Date;
      /** Number of posts published during this month. */
      publicationsCount?: number;
  }
  /** Get Blog Post Count Stats request */
  interface QueryPostCountStatsRequest {
      /** Start of time range to return, in ISO 8601 date and time format. */
      rangeStart?: Date;
      /**
       * __Deprecated.__ Use `months` instead.
       * This property will be removed on June 30, 2023.
       *
       * Non-inclusive end of time range to return, in ISO 8601 date and time format.
       */
      rangeEnd?: Date;
      /**
       * Order of returned results.
       *
       * - `OLDEST`: posts by date in ascending order.
       * - `NEWEST`: posts by date in descending order.
       *
       * Default: `OLDEST`
       */
      order?: Order;
      /** Number of months to include in response. */
      months?: number;
      /**
       * Language filter.
       *
       *
       * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       */
      language?: string | null;
      /**
       * Time zone to use when calculating the start of the month.
       *
       * [UTC timezone offset](https://en.wikipedia.org/wiki/List_of_UTC_offsets) format. For example, New York time zone is `-05`.
       */
      timeZone?: string | null;
  }
  enum Order {
      UNKNOWN = "UNKNOWN",
      OLDEST = "OLDEST",
      NEWEST = "NEWEST"
  }
  /** Get Blog Post Count Stats response */
  interface QueryPostCountStatsResponse {
      /** List of posts in specified order. */
      stats?: PeriodPostCount[];
  }
  /** Post count for a specific time period */
  interface PeriodPostCount {
      /** Start of time range in ISO 8601 date and time format. */
      periodStart?: Date;
      /** Number of posts published during this month. */
      postCount?: number;
  }
  interface GetTotalPublicationsRequest {
      /** Language filter */
      language?: string | null;
  }
  interface GetTotalPublicationsResponse {
      /** Total amount of publications. */
      total?: number;
  }
  interface GetTotalPostsRequest {
      /**
       * Language filter.
       *
       *
       * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       */
      language?: string | null;
  }
  interface GetTotalPostsResponse {
      /** Total amount of published posts. */
      total?: number;
  }
  interface SendActionEventRequest extends SendActionEventRequestActionOneOf {
      postLikedAction?: PostLiked;
      postCountersUpdated?: PostCountersUpdated;
      entityId?: string;
  }
  /** @oneof */
  interface SendActionEventRequestActionOneOf {
      postLikedAction?: PostLiked;
      postCountersUpdated?: PostCountersUpdated;
  }
  interface SendActionEventResponse {
  }
  /**
   * Retrieves a list of published demo posts.
   * @internal
   * @documentationMaturity preview
   */
  function listDemoPosts(options?: ListDemoPostsOptions): Promise<ListDemoPostsResponse>;
  interface ListDemoPostsOptions {
      /**
       * Whether to return only featured posts.
       *
       * Default: `false`
       */
      featured?: boolean;
      /**
       * Hashtag filter.
       *
       * Pass an array of hashtags to return only posts containing any of the provided hashtags.
       * If omitted, all posts with or without hashtags are returned.
       */
      hashtags?: string[];
      /**
       * Category filter.
       *
       * Pass an array of category IDs to return only posts with any of the provided categories.
       * If omitted, all posts with or without associated categories are returned.
       */
      categoryIds?: string[];
      /**
       * Tag filter.
       *
       * Pass an array of tag IDs to return only posts with any of the provided tags.
       * If omitted, all posts with or without tags are returned.
       */
      tagIds?: string[];
      /**
       * Sorting options.
       *
       * - `FEED`: Ordered by `firstPublishedDate` in descending order with pinned posts first.
       * - `VIEW_COUNT`: Ordered by total number of views in descending order.
       * - `LIKE_COUNT`: Ordered by total number of likes in descending order.
       * - `PUBLISHED_DATE_ASC`: Ordered by `firstPublishedDate` in ascending order.
       * - `PUBLISHED_DATE_DESC`: Ordered by `firstPublishedDate` in descending order.
       * - `TITLE_ASC`: Ordered by `title` in ascening order.
       * - `TITLE_DESC`: Ordered by `title` in descending order.
       * - `RATING`: reserved for internal use.
       *
       * Default: `FEED`
       */
      sort?: GetPostsSort;
      /** Pagination options. */
      paging?: BlogPaging$2;
      /**
       * __Deprecated.__ Use `fieldsets` instead.
       * This parameter will be removed on June 30, 2023.
       *
       * List of post fields to be included in the response.
       */
      fieldsToInclude?: PostFieldField[];
      /**
       * Language filter.
       *
       * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       * Pass a language to only receive posts that are in that language.
       * If omitted, posts in all languages are returned.
       */
      language?: string | null;
      /** Post owner's member ID. */
      memberId?: string | null;
      /**
       * List of additional post fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the post’s base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the post’s base fields are returned.
       */
      fieldsets?: PostFieldField[];
  }
  /**
   * Retrieves available post templates and template categories if asked
   * @internal
   * @documentationMaturity preview
   */
  function listTemplates(options?: ListTemplatesOptions): Promise<ListTemplatesResponse>;
  interface ListTemplatesOptions {
      /** Filter post templates by given template category ids */
      categoryIds?: string[];
      /** Filter post templates by provided language */
      language?: string | null;
      /** Returns post template categories when set to TRUE */
      listTemplateCategories?: boolean;
      /** Sort order by ascending/descending publish date. Default is ascending publish date sort */
      sort?: GetPostTemplatesSort;
      /** Pagination options. */
      paging?: BlogPaging$2;
  }
  /**
   * Gets post template by given id
   * @param postTemplateId - Post template id
   * @internal
   * @documentationMaturity preview
   * @requiredField postTemplateId
   */
  function getTemplate(postTemplateId: string): Promise<GetTemplateResponse>;
  /**
   * Creates draft post from specified post template
   * @param postTemplateId - Post template id
   * @internal
   * @documentationMaturity preview
   * @requiredField postTemplateId
   * @adminMethod
   */
  function createDraftPostFromTemplate(postTemplateId: string): Promise<CreateDraftPostFromTemplateResponse>;
  /**
   * Retrieves total likes of a member.
   * @param memberId - Member ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField memberId
   */
  function getTotalLikesPerMember(memberId: string): Promise<GetTotalLikesPerMemberResponse>;
  /**
   * Gets a post by the specified ID.
   *
   *
   * The `getPost()` function returns a Promise that resolves to a post whose ID matches the given ID.
   *
   * @param postId - Post ID.
   * @public
   * @requiredField postId
   * @param options - Options specifying which fields to return.
   * @returns Fulfilled - The requested post.
   */
  function getPost(postId: string, options?: GetPostOptions): Promise<GetPostResponse>;
  interface GetPostOptions {
      /** @internal */
      fieldsToInclude?: PostFieldField[];
      /**
       * List of post fields to be included in the response. By default, any fields not passed are not returned.
       *
       * Supported Values:
       * `"CONTACT_ID"`, `"CONTENT_TEXT"`, `"METRICS"`, `"SEO"`, and `"URL"`.
       */
      fieldsets?: PostFieldField[];
  }
  /**
   * Gets a post by the provided slug.
   *
   *
   * The `getPostBySlug()` function returns a Promise that resolves to a post whose slug matches the given slug.
   *
   * The `slug` is the end of a post's URL that refers to a specific post. For example, if a post's URL is `https:/example.com/blog/post/my-post-slug`, the slug is `my-post-slug`. The slug is case-sensitive, and is generally derived from the post title, unless specified otherwise.
   * @public
   * @requiredField slug
   * @param options - Options specifying which fields to return.
   * @param slug - Slug of the post to retrieve.
   *
   * The end of a post's URL, for example, `https:/example.com/blog/post/my-post-slug`. Case sensitive and generally based on the post title if not specified.
   * @returns Fulfilled - The requested post.
   */
  function getPostBySlug(slug: string, options?: GetPostBySlugOptions): Promise<GetPostBySlugResponse>;
  interface GetPostBySlugOptions {
      /** @internal */
      fieldsToInclude?: PostFieldField[];
      /**
       * List of post fields to be included in the response. By default, any fields not passed are not returned.
       *
       * Supported Values:
       * `"CONTACT_ID"`, `"CONTENT_TEXT"`, `"METRICS"`, `"SEO"`, and `"URL"`.
       */
      fieldsets?: PostFieldField[];
  }
  /**
   * Retrieves a list of published posts.
   *
   *
   * The `listPosts()` function returns a Promise that resolves to a list of up to 100 published posts.
   *
   * Using the `options` parameter, you can filter your list of posts, set the amount of posts to be returned, and sort your list in a specified order.
   *
   * By default, the list is sorted by `firstPublishedDate` in descending order, and the amount of posts returned is 50.
   * @public
   * @param options - Sort, filter, and paging options.
   * @returns Fulfilled - List of retrieved posts.
   */
  function listPosts(options?: ListPostsOptions): Promise<ListPostsResponse>;
  interface ListPostsOptions {
      /** Featured filter. Whether to return only featured posts. */
      featured?: boolean;
      /**
       * List of hashtags to filter for.
       *
       *
       * Default: All hashtags
       */
      hashtags?: string[];
      /**
       * List of category IDs to filter for.
       *
       *
       * Default: All categories
       */
      categoryIds?: string[];
      /**
       * List of [tag IDs](https://www.wix.com/velo/reference/wix-blog-backend/tags) to filter for.
       *
       *
       * Default: All tags
       */
      tagIds?: string[];
      /**
       * Sort order.
       *
       * Sort by one of the following:
       *  - `'VIEW_COUNT'` descending view count
       *  - `'LIKE_COUNT'` descending like count
       *  - `'PUBLISHED_DATE_ASC'` ascending published date
       *  - `'PUBLISHED_DATE_DESC'` descending published date
       *  - `'TITLE_ASC'` ascending title
       *  - `'TITLE_DESC'` descending title
       *
       *  Default: `'PUBLISHED_DATE_DESC'`
       */
      sort?: GetPostsSort;
      /** Pagination options. */
      paging?: BlogPaging$2;
      /** @internal */
      fieldsToInclude?: PostFieldField[];
      /**
       * Language filter.
       *
       *
       * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       */
      language?: string | null;
      /**
       * Member ID to filter for.
       *
       *
       * Default: All members
       */
      memberId?: string | null;
      /**
       * List of post fields to be included in the response. By default, any fields not passed are not returned.
       *
       * Supported Values:
       * `"CONTACT_ID"`, `"CONTENT_TEXT"`, `"METRICS"`, `"SEO"`, and `"URL"`.
       */
      fieldsets?: PostFieldField[];
  }
  /**
   * Creates a query to retrieve a list of posts.
   *
   *
   * The `queryPosts()` function builds a query to retrieve a list of up to 100 posts, and returns a [`PostsQueryBuilder`](https://www.wix.com/velo/reference/wix-blog-backend/posts/postsquerybuilder) object.
   *
   * The returned object contains the query definition which is typically used to run the query using the [`find()`](https://www.wix.com/velo/reference/wix-blog-backend/posts/postsquerybuilder/find) function.
   *
   * You can refine the query by chaining `PostsQueryBuilder` functions onto the query. `PostsQueryBuilder` functions enable you to sort, filter, and control the results that `queryPosts()` returns.
   *
   * `queryPosts()` runs with these `PostsQueryBuilder` defaults that can be overridden:
   * + [`limit(50)`](https://www.wix.com/velo/reference/wix-blog-backend/posts/postsquerybuilder/limit)
   * + [`descending('firstPublishedDate')`](https://www.wix.com/velo/reference/wix-blog-backend/posts/postsquerybuilder/descending)
   *
   * Note that the default limit is `'50'`, but the max limit is `'100'`.
   *
   * To learn how to query posts, refer to the table below.
   *
   * The following `PostsQueryBuilder` functions are supported for the `queryPosts()` function. For a full description of the Posts object, see the object returned for the [`items`](https://www.wix.com/velo/reference/wix-blog-backend/posts/postsqueryresult/items) property in [`PostsQueryResult`](https://www.wix.com/velo/reference/wix-blog-backend/posts/postsqueryresult).
   * @public
   * @param options - Options specifying which fields to return.
   */
  function queryPosts(options?: QueryPostsOptions): PostsQueryBuilder;
  interface QueryPostsOptions {
      /** @internal */
      paging?: BlogPaging$2 | undefined;
      /** @internal */
      filter?: Record<string, any> | null | undefined;
      /** @internal */
      sort?: Sorting$3[] | undefined;
      /** @internal */
      fieldsToInclude?: PostFieldField[] | undefined;
      /**
       * List of post fields to be included in the response. By default, any fields not passed are not returned.
       *
       * Supported Values:
       * `"CONTACT_ID"`, `"CONTENT_TEXT"`, `"METRICS"`, `"SEO"`, and `"URL"`.
       */
      fieldsets?: PostFieldField[] | undefined;
  }
  interface QueryCursorResult$1 {
      cursors: Cursors$3;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface PostsQueryResult extends QueryCursorResult$1 {
      items: Post[];
      query: PostsQueryBuilder;
      next: () => Promise<PostsQueryResult>;
      prev: () => Promise<PostsQueryResult>;
  }
  interface PostsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      eq: (propertyName: '_id' | 'title' | 'firstPublishedDate' | 'lastPublishedDate' | 'slug' | 'featured' | 'pinned' | 'coverMedia.enabled' | 'memberId' | 'commentingEnabled' | 'minutesToRead' | 'translationId' | 'language' | 'metrics.comments' | 'metrics.likes' | 'metrics.views', value: any) => PostsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      ne: (propertyName: '_id' | 'title' | 'firstPublishedDate' | 'lastPublishedDate' | 'slug' | 'featured' | 'pinned' | 'coverMedia.enabled' | 'memberId' | 'commentingEnabled' | 'minutesToRead' | 'translationId' | 'language' | 'metrics.comments' | 'metrics.likes' | 'metrics.views', value: any) => PostsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      ge: (propertyName: 'firstPublishedDate' | 'lastPublishedDate' | 'minutesToRead' | 'metrics.comments' | 'metrics.likes' | 'metrics.views', value: any) => PostsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      gt: (propertyName: 'firstPublishedDate' | 'lastPublishedDate' | 'minutesToRead' | 'metrics.comments' | 'metrics.likes' | 'metrics.views', value: any) => PostsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      le: (propertyName: 'firstPublishedDate' | 'lastPublishedDate' | 'minutesToRead' | 'metrics.comments' | 'metrics.likes' | 'metrics.views', value: any) => PostsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      lt: (propertyName: 'firstPublishedDate' | 'lastPublishedDate' | 'minutesToRead' | 'metrics.comments' | 'metrics.likes' | 'metrics.views', value: any) => PostsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       */
      startsWith: (propertyName: 'title', value: string) => PostsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       */
      hasSome: (propertyName: '_id' | 'title' | 'slug' | 'categoryIds' | 'memberId' | 'hashtags' | 'tagIds' | 'pricingPlanIds' | 'language', value: any[]) => PostsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       */
      hasAll: (propertyName: 'categoryIds' | 'hashtags' | 'tagIds' | 'pricingPlanIds', value: any[]) => PostsQueryBuilder;
      in: (propertyName: 'title' | 'firstPublishedDate' | 'lastPublishedDate' | 'minutesToRead' | 'translationId' | 'language' | 'metrics.comments' | 'metrics.likes' | 'metrics.views', value: any) => PostsQueryBuilder;
      exists: (propertyName: 'title' | 'translationId' | 'language', value: boolean) => PostsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments. */
      ascending: (...propertyNames: Array<'_id' | 'title' | 'firstPublishedDate' | 'lastPublishedDate' | 'slug' | 'featured' | 'pinned' | 'commentingEnabled' | 'metrics.comments' | 'metrics.likes' | 'metrics.views'>) => PostsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments. */
      descending: (...propertyNames: Array<'_id' | 'title' | 'firstPublishedDate' | 'lastPublishedDate' | 'slug' | 'featured' | 'pinned' | 'commentingEnabled' | 'metrics.comments' | 'metrics.likes' | 'metrics.views'>) => PostsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object. */
      limit: (limit: number) => PostsQueryBuilder;
      /** @param cursor - A pointer to specific record */
      skipTo: (cursor: string) => PostsQueryBuilder;
      find: () => Promise<PostsQueryResult>;
  }
  /**
   * Gets a specified post's metrics.
   *
   *
   * The `getPostMetrics()` function returns a Promise that resolves to the specified post's metrics.
   *
   * A post's metrics include the comments, likes, and views the post receives.
   * @param postId - Post ID.
   * @public
   * @requiredField postId
   * @returns Fulfilled - Post metrics.
   */
  function getPostMetrics(postId: string): Promise<GetPostMetricsResponse>;
  /**
   * Retrieves a specified posts metrics.
   * @param postIds - Post IDs.
   * @internal
   * @documentationMaturity preview
   * @requiredField postIds
   */
  function bulkGetPostMetrics(postIds: string[]): Promise<BulkGetPostMetricsResponse>;
  /**
   * Increment view counter of a post.
   * @param postId - Post ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField postId
   */
  function viewPost(postId: string): Promise<ViewPostResponse>;
  /**
   * Like post
   * @param postId - Post ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField postId
   */
  function likePost(postId: string, options?: LikePostOptions): Promise<LikePostResponse>;
  interface LikePostOptions {
      /**
       * List of additional post fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the post’s base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the post’s base fields are returned.
       */
      fieldsets?: PostFieldField[];
  }
  /**
   * Unlike post
   * @param postId - Post ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField postId
   */
  function unlikePost(postId: string, options?: UnlikePostOptions): Promise<UnlikePostResponse>;
  interface UnlikePostOptions {
      /**
       * List of additional post fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the post’s base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the post’s base fields are returned.
       */
      fieldsets?: PostFieldField[];
  }
  /**
   * Pin post in the feed
   * @param postId - Post ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField postId
   * @adminMethod
   */
  function pinPost(postId: string, options?: PinPostOptions): Promise<PinPostResponse>;
  interface PinPostOptions {
      /**
       * List of additional post fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the post’s base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the post’s base fields are returned.
       */
      fieldsets?: PostFieldField[];
  }
  /**
   * Unpin post in the feed
   * @param postId - Post ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField postId
   * @adminMethod
   */
  function unpinPost(postId: string, options?: UnpinPostOptions): Promise<UnpinPostResponse>;
  interface UnpinPostOptions {
      /**
       * List of additional post fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the post’s base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the post’s base fields are returned.
       */
      fieldsets?: PostFieldField[];
  }
  /**
   * Retrieves a posts archive.
   * @param month - Month
   * @internal
   * @documentationMaturity preview
   * @requiredField month
   * @requiredField options.year
   */
  function listPostsArchive(month: number | null, options?: ListPostsArchiveOptions): Promise<ListPostsArchiveResponse>;
  interface ListPostsArchiveOptions {
      /** Year */
      year: number;
      /** Time zone */
      timeZone?: string | null;
      /** Pagination options. */
      paging?: BlogPaging$2;
      /**
       * Language filter.
       *
       * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       * Pass a language to only receive posts that are in that language.
       * If omitted, posts in all languages are returned.
       */
      language?: string | null;
      /**
       * List of additional post fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the post’s base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the post’s base fields are returned.
       */
      fieldsets?: PostFieldField[];
  }
  /**
   * Retrieves reactions of the current user for specified posts.
   * @param postIds - Post IDs.
   * @internal
   * @documentationMaturity preview
   * @requiredField postIds
   */
  function bulkGetPostReactions(postIds: string[]): Promise<BulkGetPostReactionsResponse>;
  /**
   * Retrieves the number of posts per month published within a specified time span, from first day of a month - ignoring days value in period start field.
   * If `periodStart` value is set to `2018-11-10` and `months` value is set to `1`, the day value is ignored and statistic are returned for one month from
   * `2018-11-01` until `2018-11-30` and not between `2018-11-10` and `2018-12-10`.
   * @internal
   * @documentationMaturity preview
   * @returns Get Blog Publications Count Stats response
   */
  function queryPublicationsCountStats(options?: QueryPublicationsCountStatsOptions): Promise<QueryPublicationsCountStatsResponse>;
  interface QueryPublicationsCountStatsOptions {
      /** Start of time range to return, in ISO 8601 date and time format. */
      rangeStart?: Date;
      /** Non-inclusive end of time range to return, in ISO 8601 date and time format. */
      rangeEnd?: Date;
      /** Order of the returned results. */
      order?: QueryPublicationsCountStatsRequestOrder;
      /** Number of months to include in the response. */
      months?: number;
      /**
       * Language filter
       *
       * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       */
      language?: string | null;
      /** Timezone of the client. */
      timeZone?: string | null;
  }
  /**
   * Retrieves the number of published posts per month within a specified time range.
   *
   *
   * The `queryPostCountStats()` function returns a Promise that resolves to the number of posts per month within the specified time range.
   *
   * You can set the time range using the `rangeStart` and `months` properties. The time range always starts on the 1st day of the month set in `rangeStart` and includes the number of `months` following `rangeStart`. For example, if `rangeStart` is set to `'2022-03-13'` and `months` is set to `4`, the time range will be from `'2022-03-01'` until `'2022-06-30'`. The time range ends on the last day of the month.
   *
   * >**Note:** If there are no published posts in a specific month, that month is not included in the response. For example, let's say a blog has `0` posts dated in February 2022. If `rangeStart` is set to `'2022-01-01'` and `months` is set to `3`, the response includes `postCount` values for January and March, but not February.
   * @public
   * @param options - Options specifying time frame, sort, and filter.
   * @returns Fulfilled - Post count stats.
   */
  function queryPostCountStats(options?: QueryPostCountStatsOptions): Promise<QueryPostCountStatsResponse>;
  interface QueryPostCountStatsOptions {
      /** Start of time range to return, in ISO 8601 date and time format. */
      rangeStart?: Date;
      /** Reserved for internal use. */
      rangeEnd?: Date;
      /**
       * Sort order.
       * Use `'ASC'` for ascending order or `'DESC'` for descending order.
       *
       * Default: `ASC`
       */
      order?: Order;
      /** Number of months to include in response. */
      months?: number;
      /**
       * Language filter.
       *
       *
       * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       */
      language?: string | null;
      /**
       * Time zone to use when calculating the start of the month.
       *
       * [UTC timezone offset](https://en.wikipedia.org/wiki/List_of_UTC_offsets) format. For example, New York time zone is `-05`.
       */
      timeZone?: string | null;
  }
  /**
   * Retrieves the amount of published posts for the current blog.
   * @internal
   * @documentationMaturity preview
   */
  function getTotalPublications(options?: GetTotalPublicationsOptions): Promise<GetTotalPublicationsResponse>;
  interface GetTotalPublicationsOptions {
      /** Language filter */
      language?: string | null;
  }
  /**
   * Gets the total amount of published posts on the blog.
   *
   *
   * The `getTotalPosts()` function returns a Promise that resolves to the total amount of published posts on your blog's site.
   *
   *
   * You can use the `language` option to filter posts for a specified language.
   * @public
   * @param options - Language Options.
   * @returns Fulfilled - Total number of posts.
   */
  function getTotalPosts(options?: GetTotalPostsOptions): Promise<GetTotalPostsResponse>;
  interface GetTotalPostsOptions {
      /**
       * Language filter.
       *
       *
       * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       */
      language?: string | null;
  }
  /** @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function sendActionEvent(options?: SendActionEventOptions): Promise<void>;
  interface SendActionEventOptions extends SendActionEventRequestActionOneOf {
      entityId?: string;
      postLikedAction?: PostLiked;
      postCountersUpdated?: PostCountersUpdated;
  }
  
  type blogV3Post_universal_d_Post = Post;
  type blogV3Post_universal_d_PostCountInfo = PostCountInfo;
  type blogV3Post_universal_d_Metrics = Metrics;
  type blogV3Post_universal_d_BlogMedia = BlogMedia;
  type blogV3Post_universal_d_BlogMediaMediaOneOf = BlogMediaMediaOneOf;
  type blogV3Post_universal_d_PostTranslation = PostTranslation;
  type blogV3Post_universal_d_OldBlogMigratedEvent = OldBlogMigratedEvent;
  type blogV3Post_universal_d_ConvertDraftJsToRichContentRequest = ConvertDraftJsToRichContentRequest;
  type blogV3Post_universal_d_ConvertDraftJsToRichContentResponse = ConvertDraftJsToRichContentResponse;
  type blogV3Post_universal_d_ConvertRichContentToDraftJsRequest = ConvertRichContentToDraftJsRequest;
  type blogV3Post_universal_d_ConvertRichContentToDraftJsResponse = ConvertRichContentToDraftJsResponse;
  type blogV3Post_universal_d_ListDemoPostsRequest = ListDemoPostsRequest;
  type blogV3Post_universal_d_GetPostsSort = GetPostsSort;
  const blogV3Post_universal_d_GetPostsSort: typeof GetPostsSort;
  type blogV3Post_universal_d_PostFieldField = PostFieldField;
  const blogV3Post_universal_d_PostFieldField: typeof PostFieldField;
  type blogV3Post_universal_d_ListDemoPostsResponse = ListDemoPostsResponse;
  type blogV3Post_universal_d_ListTemplatesRequest = ListTemplatesRequest;
  type blogV3Post_universal_d_GetPostTemplatesSort = GetPostTemplatesSort;
  const blogV3Post_universal_d_GetPostTemplatesSort: typeof GetPostTemplatesSort;
  type blogV3Post_universal_d_ListTemplatesResponse = ListTemplatesResponse;
  type blogV3Post_universal_d_GetTemplateRequest = GetTemplateRequest;
  type blogV3Post_universal_d_GetTemplateResponse = GetTemplateResponse;
  type blogV3Post_universal_d_CreateDraftPostFromTemplateRequest = CreateDraftPostFromTemplateRequest;
  type blogV3Post_universal_d_CreateDraftPostFromTemplateResponse = CreateDraftPostFromTemplateResponse;
  type blogV3Post_universal_d_GetTotalLikesPerMemberRequest = GetTotalLikesPerMemberRequest;
  type blogV3Post_universal_d_GetTotalLikesPerMemberResponse = GetTotalLikesPerMemberResponse;
  type blogV3Post_universal_d_PostLiked = PostLiked;
  type blogV3Post_universal_d_PostLikedInitiatorOneOf = PostLikedInitiatorOneOf;
  type blogV3Post_universal_d_PostUnliked = PostUnliked;
  type blogV3Post_universal_d_PostUnlikedInitiatorOneOf = PostUnlikedInitiatorOneOf;
  type blogV3Post_universal_d_PostCountersUpdated = PostCountersUpdated;
  type blogV3Post_universal_d_PostCountersUpdatedInitiatorOneOf = PostCountersUpdatedInitiatorOneOf;
  type blogV3Post_universal_d_PostOwnerChanged = PostOwnerChanged;
  type blogV3Post_universal_d_InitialPostsCopied = InitialPostsCopied;
  type blogV3Post_universal_d_GetPostRequest = GetPostRequest;
  type blogV3Post_universal_d_GetPostResponse = GetPostResponse;
  type blogV3Post_universal_d_GetPostBySlugRequest = GetPostBySlugRequest;
  type blogV3Post_universal_d_GetPostBySlugResponse = GetPostBySlugResponse;
  type blogV3Post_universal_d_ListPostsRequest = ListPostsRequest;
  type blogV3Post_universal_d_ListPostsResponse = ListPostsResponse;
  type blogV3Post_universal_d_QueryPostsRequest = QueryPostsRequest;
  type blogV3Post_universal_d_QueryPostsResponse = QueryPostsResponse;
  type blogV3Post_universal_d_GetPostMetricsRequest = GetPostMetricsRequest;
  type blogV3Post_universal_d_GetPostMetricsResponse = GetPostMetricsResponse;
  type blogV3Post_universal_d_BulkGetPostMetricsRequest = BulkGetPostMetricsRequest;
  type blogV3Post_universal_d_BulkGetPostMetricsResponse = BulkGetPostMetricsResponse;
  type blogV3Post_universal_d_ViewPostRequest = ViewPostRequest;
  type blogV3Post_universal_d_ViewPostResponse = ViewPostResponse;
  type blogV3Post_universal_d_LikePostRequest = LikePostRequest;
  type blogV3Post_universal_d_LikePostResponse = LikePostResponse;
  type blogV3Post_universal_d_UnlikePostRequest = UnlikePostRequest;
  type blogV3Post_universal_d_UnlikePostResponse = UnlikePostResponse;
  type blogV3Post_universal_d_PinPostRequest = PinPostRequest;
  type blogV3Post_universal_d_PinPostResponse = PinPostResponse;
  type blogV3Post_universal_d_UnpinPostRequest = UnpinPostRequest;
  type blogV3Post_universal_d_UnpinPostResponse = UnpinPostResponse;
  type blogV3Post_universal_d_ListPostsArchiveRequest = ListPostsArchiveRequest;
  type blogV3Post_universal_d_ListPostsArchiveResponse = ListPostsArchiveResponse;
  type blogV3Post_universal_d_BulkGetPostReactionsRequest = BulkGetPostReactionsRequest;
  type blogV3Post_universal_d_BulkGetPostReactionsResponse = BulkGetPostReactionsResponse;
  type blogV3Post_universal_d_Reactions = Reactions;
  type blogV3Post_universal_d_QueryPublicationsCountStatsRequest = QueryPublicationsCountStatsRequest;
  type blogV3Post_universal_d_QueryPublicationsCountStatsRequestOrder = QueryPublicationsCountStatsRequestOrder;
  const blogV3Post_universal_d_QueryPublicationsCountStatsRequestOrder: typeof QueryPublicationsCountStatsRequestOrder;
  type blogV3Post_universal_d_QueryPublicationsCountStatsResponse = QueryPublicationsCountStatsResponse;
  type blogV3Post_universal_d_PeriodPublicationsCount = PeriodPublicationsCount;
  type blogV3Post_universal_d_QueryPostCountStatsRequest = QueryPostCountStatsRequest;
  type blogV3Post_universal_d_Order = Order;
  const blogV3Post_universal_d_Order: typeof Order;
  type blogV3Post_universal_d_QueryPostCountStatsResponse = QueryPostCountStatsResponse;
  type blogV3Post_universal_d_PeriodPostCount = PeriodPostCount;
  type blogV3Post_universal_d_GetTotalPublicationsRequest = GetTotalPublicationsRequest;
  type blogV3Post_universal_d_GetTotalPublicationsResponse = GetTotalPublicationsResponse;
  type blogV3Post_universal_d_GetTotalPostsRequest = GetTotalPostsRequest;
  type blogV3Post_universal_d_GetTotalPostsResponse = GetTotalPostsResponse;
  type blogV3Post_universal_d_SendActionEventRequest = SendActionEventRequest;
  type blogV3Post_universal_d_SendActionEventRequestActionOneOf = SendActionEventRequestActionOneOf;
  type blogV3Post_universal_d_SendActionEventResponse = SendActionEventResponse;
  const blogV3Post_universal_d_listDemoPosts: typeof listDemoPosts;
  type blogV3Post_universal_d_ListDemoPostsOptions = ListDemoPostsOptions;
  const blogV3Post_universal_d_listTemplates: typeof listTemplates;
  type blogV3Post_universal_d_ListTemplatesOptions = ListTemplatesOptions;
  const blogV3Post_universal_d_getTemplate: typeof getTemplate;
  const blogV3Post_universal_d_createDraftPostFromTemplate: typeof createDraftPostFromTemplate;
  const blogV3Post_universal_d_getTotalLikesPerMember: typeof getTotalLikesPerMember;
  const blogV3Post_universal_d_getPost: typeof getPost;
  type blogV3Post_universal_d_GetPostOptions = GetPostOptions;
  const blogV3Post_universal_d_getPostBySlug: typeof getPostBySlug;
  type blogV3Post_universal_d_GetPostBySlugOptions = GetPostBySlugOptions;
  const blogV3Post_universal_d_listPosts: typeof listPosts;
  type blogV3Post_universal_d_ListPostsOptions = ListPostsOptions;
  const blogV3Post_universal_d_queryPosts: typeof queryPosts;
  type blogV3Post_universal_d_QueryPostsOptions = QueryPostsOptions;
  type blogV3Post_universal_d_PostsQueryResult = PostsQueryResult;
  type blogV3Post_universal_d_PostsQueryBuilder = PostsQueryBuilder;
  const blogV3Post_universal_d_getPostMetrics: typeof getPostMetrics;
  const blogV3Post_universal_d_bulkGetPostMetrics: typeof bulkGetPostMetrics;
  const blogV3Post_universal_d_viewPost: typeof viewPost;
  const blogV3Post_universal_d_likePost: typeof likePost;
  type blogV3Post_universal_d_LikePostOptions = LikePostOptions;
  const blogV3Post_universal_d_unlikePost: typeof unlikePost;
  type blogV3Post_universal_d_UnlikePostOptions = UnlikePostOptions;
  const blogV3Post_universal_d_pinPost: typeof pinPost;
  type blogV3Post_universal_d_PinPostOptions = PinPostOptions;
  const blogV3Post_universal_d_unpinPost: typeof unpinPost;
  type blogV3Post_universal_d_UnpinPostOptions = UnpinPostOptions;
  const blogV3Post_universal_d_listPostsArchive: typeof listPostsArchive;
  type blogV3Post_universal_d_ListPostsArchiveOptions = ListPostsArchiveOptions;
  const blogV3Post_universal_d_bulkGetPostReactions: typeof bulkGetPostReactions;
  const blogV3Post_universal_d_queryPublicationsCountStats: typeof queryPublicationsCountStats;
  type blogV3Post_universal_d_QueryPublicationsCountStatsOptions = QueryPublicationsCountStatsOptions;
  const blogV3Post_universal_d_queryPostCountStats: typeof queryPostCountStats;
  type blogV3Post_universal_d_QueryPostCountStatsOptions = QueryPostCountStatsOptions;
  const blogV3Post_universal_d_getTotalPublications: typeof getTotalPublications;
  type blogV3Post_universal_d_GetTotalPublicationsOptions = GetTotalPublicationsOptions;
  const blogV3Post_universal_d_getTotalPosts: typeof getTotalPosts;
  type blogV3Post_universal_d_GetTotalPostsOptions = GetTotalPostsOptions;
  const blogV3Post_universal_d_sendActionEvent: typeof sendActionEvent;
  type blogV3Post_universal_d_SendActionEventOptions = SendActionEventOptions;
  namespace blogV3Post_universal_d {
    export {
      blogV3Post_universal_d_Post as Post,
      CoverMedia$2 as CoverMedia,
      CoverMediaMediaOneOf$2 as CoverMediaMediaOneOf,
      blogV3Post_universal_d_PostCountInfo as PostCountInfo,
      blogV3Post_universal_d_Metrics as Metrics,
      SeoSchema$3 as SeoSchema,
      Keyword$3 as Keyword,
      Tag$3 as Tag,
      Settings$3 as Settings,
      RichContent$1 as RichContent,
      Node$1 as Node,
      NodeDataOneOf$1 as NodeDataOneOf,
      NodeType$1 as NodeType,
      NodeStyle$1 as NodeStyle,
      ButtonData$1 as ButtonData,
      Border$1 as Border,
      Colors$1 as Colors,
      PluginContainerData$1 as PluginContainerData,
      WidthType$1 as WidthType,
      PluginContainerDataWidth$1 as PluginContainerDataWidth,
      PluginContainerDataWidthDataOneOf$1 as PluginContainerDataWidthDataOneOf,
      PluginContainerDataAlignment$1 as PluginContainerDataAlignment,
      Spoiler$1 as Spoiler,
      Height$1 as Height,
      Type$1 as Type,
      Styles$1 as Styles,
      Link$1 as Link,
      LinkDataOneOf$1 as LinkDataOneOf,
      Target$1 as Target,
      Rel$1 as Rel,
      CodeBlockData$1 as CodeBlockData,
      TextStyle$1 as TextStyle,
      TextAlignment$1 as TextAlignment,
      DividerData$1 as DividerData,
      LineStyle$1 as LineStyle,
      Width$1 as Width,
      Alignment$1 as Alignment,
      FileData$1 as FileData,
      ViewMode$1 as ViewMode,
      FileSource$1 as FileSource,
      FileSourceDataOneOf$1 as FileSourceDataOneOf,
      PDFSettings$1 as PDFSettings,
      GalleryData$1 as GalleryData,
      Media$1 as Media,
      Image$1 as Image,
      Video$1 as Video,
      Item$1 as Item,
      ItemDataOneOf$1 as ItemDataOneOf,
      GalleryOptions$1 as GalleryOptions,
      LayoutType$1 as LayoutType,
      Orientation$1 as Orientation,
      Crop$1 as Crop,
      ThumbnailsAlignment$1 as ThumbnailsAlignment,
      Layout$1 as Layout,
      ItemStyle$1 as ItemStyle,
      Thumbnails$1 as Thumbnails,
      GIFData$1 as GIFData,
      GIF$1 as GIF,
      HeadingData$1 as HeadingData,
      HTMLData$1 as HTMLData,
      HTMLDataDataOneOf$1 as HTMLDataDataOneOf,
      Source$1 as Source,
      ImageData$1 as ImageData,
      LinkPreviewData$1 as LinkPreviewData,
      MapData$1 as MapData,
      MapSettings$1 as MapSettings,
      MapType$1 as MapType,
      ParagraphData$1 as ParagraphData,
      PollData$1 as PollData,
      ViewRole$1 as ViewRole,
      VoteRole$1 as VoteRole,
      Permissions$1 as Permissions,
      Option$1 as Option,
      PollSettings$1 as PollSettings,
      PollLayoutType$1 as PollLayoutType,
      PollLayoutDirection$1 as PollLayoutDirection,
      PollLayout$1 as PollLayout,
      OptionLayout$1 as OptionLayout,
      BackgroundType$1 as BackgroundType,
      Gradient$1 as Gradient,
      Background$1 as Background,
      BackgroundBackgroundOneOf$1 as BackgroundBackgroundOneOf,
      PollDesign$1 as PollDesign,
      OptionDesign$1 as OptionDesign,
      Poll$1 as Poll,
      PollDataLayout$1 as PollDataLayout,
      Design$1 as Design,
      TextData$1 as TextData,
      Decoration$1 as Decoration,
      DecorationDataOneOf$1 as DecorationDataOneOf,
      DecorationType$1 as DecorationType,
      AnchorData$1 as AnchorData,
      ColorData$1 as ColorData,
      LinkData$1 as LinkData,
      MentionData$1 as MentionData,
      FontSizeData$1 as FontSizeData,
      FontType$1 as FontType,
      AppEmbedData$1 as AppEmbedData,
      AppEmbedDataAppDataOneOf$1 as AppEmbedDataAppDataOneOf,
      AppType$1 as AppType,
      BookingData$1 as BookingData,
      EventData$1 as EventData,
      VideoData$1 as VideoData,
      PlaybackOptions$1 as PlaybackOptions,
      EmbedData$1 as EmbedData,
      Oembed$1 as Oembed,
      CollapsibleListData$1 as CollapsibleListData,
      InitialExpandedItems$1 as InitialExpandedItems,
      Direction$1 as Direction,
      TableData$1 as TableData,
      Dimensions$1 as Dimensions,
      TableCellData$1 as TableCellData,
      VerticalAlignment$1 as VerticalAlignment,
      CellStyle$1 as CellStyle,
      BorderColors$1 as BorderColors,
      NullValue$1 as NullValue,
      ListValue$1 as ListValue,
      AudioData$1 as AudioData,
      OrderedListData$1 as OrderedListData,
      BulletedListData$1 as BulletedListData,
      BlockquoteData$1 as BlockquoteData,
      Metadata$1 as Metadata,
      DocumentStyle$1 as DocumentStyle,
      TextNodeStyle$1 as TextNodeStyle,
      ModerationDetails$1 as ModerationDetails,
      ModerationStatusStatus$1 as ModerationStatusStatus,
      blogV3Post_universal_d_BlogMedia as BlogMedia,
      blogV3Post_universal_d_BlogMediaMediaOneOf as BlogMediaMediaOneOf,
      WixMedia$1 as WixMedia,
      VideoResolution$1 as VideoResolution,
      EmbedMedia$1 as EmbedMedia,
      EmbedThumbnail$1 as EmbedThumbnail,
      EmbedVideo$1 as EmbedVideo,
      blogV3Post_universal_d_PostTranslation as PostTranslation,
      blogV3Post_universal_d_OldBlogMigratedEvent as OldBlogMigratedEvent,
      DomainEvent$3 as DomainEvent,
      DomainEventBodyOneOf$3 as DomainEventBodyOneOf,
      EntityCreatedEvent$3 as EntityCreatedEvent,
      EntityUpdatedEvent$3 as EntityUpdatedEvent,
      EntityDeletedEvent$3 as EntityDeletedEvent,
      ActionEvent$3 as ActionEvent,
      MessageEnvelope$3 as MessageEnvelope,
      IdentificationData$3 as IdentificationData,
      IdentificationDataIdOneOf$3 as IdentificationDataIdOneOf,
      WebhookIdentityType$3 as WebhookIdentityType,
      blogV3Post_universal_d_ConvertDraftJsToRichContentRequest as ConvertDraftJsToRichContentRequest,
      blogV3Post_universal_d_ConvertDraftJsToRichContentResponse as ConvertDraftJsToRichContentResponse,
      blogV3Post_universal_d_ConvertRichContentToDraftJsRequest as ConvertRichContentToDraftJsRequest,
      blogV3Post_universal_d_ConvertRichContentToDraftJsResponse as ConvertRichContentToDraftJsResponse,
      blogV3Post_universal_d_ListDemoPostsRequest as ListDemoPostsRequest,
      blogV3Post_universal_d_GetPostsSort as GetPostsSort,
      BlogPaging$2 as BlogPaging,
      blogV3Post_universal_d_PostFieldField as PostFieldField,
      blogV3Post_universal_d_ListDemoPostsResponse as ListDemoPostsResponse,
      MetaData$3 as MetaData,
      blogV3Post_universal_d_ListTemplatesRequest as ListTemplatesRequest,
      blogV3Post_universal_d_GetPostTemplatesSort as GetPostTemplatesSort,
      blogV3Post_universal_d_ListTemplatesResponse as ListTemplatesResponse,
      Category$2 as Category,
      CategoryTranslation$2 as CategoryTranslation,
      blogV3Post_universal_d_GetTemplateRequest as GetTemplateRequest,
      blogV3Post_universal_d_GetTemplateResponse as GetTemplateResponse,
      blogV3Post_universal_d_CreateDraftPostFromTemplateRequest as CreateDraftPostFromTemplateRequest,
      blogV3Post_universal_d_CreateDraftPostFromTemplateResponse as CreateDraftPostFromTemplateResponse,
      DraftPost$1 as DraftPost,
      Origin$1 as Origin,
      Status$1 as Status,
      DraftPostTranslation$1 as DraftPostTranslation,
      blogV3Post_universal_d_GetTotalLikesPerMemberRequest as GetTotalLikesPerMemberRequest,
      blogV3Post_universal_d_GetTotalLikesPerMemberResponse as GetTotalLikesPerMemberResponse,
      blogV3Post_universal_d_PostLiked as PostLiked,
      blogV3Post_universal_d_PostLikedInitiatorOneOf as PostLikedInitiatorOneOf,
      blogV3Post_universal_d_PostUnliked as PostUnliked,
      blogV3Post_universal_d_PostUnlikedInitiatorOneOf as PostUnlikedInitiatorOneOf,
      blogV3Post_universal_d_PostCountersUpdated as PostCountersUpdated,
      blogV3Post_universal_d_PostCountersUpdatedInitiatorOneOf as PostCountersUpdatedInitiatorOneOf,
      Field$3 as Field,
      blogV3Post_universal_d_PostOwnerChanged as PostOwnerChanged,
      blogV3Post_universal_d_InitialPostsCopied as InitialPostsCopied,
      blogV3Post_universal_d_GetPostRequest as GetPostRequest,
      blogV3Post_universal_d_GetPostResponse as GetPostResponse,
      blogV3Post_universal_d_GetPostBySlugRequest as GetPostBySlugRequest,
      blogV3Post_universal_d_GetPostBySlugResponse as GetPostBySlugResponse,
      blogV3Post_universal_d_ListPostsRequest as ListPostsRequest,
      blogV3Post_universal_d_ListPostsResponse as ListPostsResponse,
      blogV3Post_universal_d_QueryPostsRequest as QueryPostsRequest,
      Sorting$3 as Sorting,
      SortOrder$3 as SortOrder,
      PlatformQuery$3 as PlatformQuery,
      PlatformQueryPagingMethodOneOf$3 as PlatformQueryPagingMethodOneOf,
      Paging$3 as Paging,
      CursorPaging$3 as CursorPaging,
      blogV3Post_universal_d_QueryPostsResponse as QueryPostsResponse,
      PagingMetadataV2$3 as PagingMetadataV2,
      Cursors$3 as Cursors,
      blogV3Post_universal_d_GetPostMetricsRequest as GetPostMetricsRequest,
      blogV3Post_universal_d_GetPostMetricsResponse as GetPostMetricsResponse,
      blogV3Post_universal_d_BulkGetPostMetricsRequest as BulkGetPostMetricsRequest,
      blogV3Post_universal_d_BulkGetPostMetricsResponse as BulkGetPostMetricsResponse,
      blogV3Post_universal_d_ViewPostRequest as ViewPostRequest,
      blogV3Post_universal_d_ViewPostResponse as ViewPostResponse,
      blogV3Post_universal_d_LikePostRequest as LikePostRequest,
      blogV3Post_universal_d_LikePostResponse as LikePostResponse,
      blogV3Post_universal_d_UnlikePostRequest as UnlikePostRequest,
      blogV3Post_universal_d_UnlikePostResponse as UnlikePostResponse,
      blogV3Post_universal_d_PinPostRequest as PinPostRequest,
      blogV3Post_universal_d_PinPostResponse as PinPostResponse,
      blogV3Post_universal_d_UnpinPostRequest as UnpinPostRequest,
      blogV3Post_universal_d_UnpinPostResponse as UnpinPostResponse,
      blogV3Post_universal_d_ListPostsArchiveRequest as ListPostsArchiveRequest,
      blogV3Post_universal_d_ListPostsArchiveResponse as ListPostsArchiveResponse,
      blogV3Post_universal_d_BulkGetPostReactionsRequest as BulkGetPostReactionsRequest,
      blogV3Post_universal_d_BulkGetPostReactionsResponse as BulkGetPostReactionsResponse,
      blogV3Post_universal_d_Reactions as Reactions,
      blogV3Post_universal_d_QueryPublicationsCountStatsRequest as QueryPublicationsCountStatsRequest,
      blogV3Post_universal_d_QueryPublicationsCountStatsRequestOrder as QueryPublicationsCountStatsRequestOrder,
      blogV3Post_universal_d_QueryPublicationsCountStatsResponse as QueryPublicationsCountStatsResponse,
      blogV3Post_universal_d_PeriodPublicationsCount as PeriodPublicationsCount,
      blogV3Post_universal_d_QueryPostCountStatsRequest as QueryPostCountStatsRequest,
      blogV3Post_universal_d_Order as Order,
      blogV3Post_universal_d_QueryPostCountStatsResponse as QueryPostCountStatsResponse,
      blogV3Post_universal_d_PeriodPostCount as PeriodPostCount,
      blogV3Post_universal_d_GetTotalPublicationsRequest as GetTotalPublicationsRequest,
      blogV3Post_universal_d_GetTotalPublicationsResponse as GetTotalPublicationsResponse,
      blogV3Post_universal_d_GetTotalPostsRequest as GetTotalPostsRequest,
      blogV3Post_universal_d_GetTotalPostsResponse as GetTotalPostsResponse,
      blogV3Post_universal_d_SendActionEventRequest as SendActionEventRequest,
      blogV3Post_universal_d_SendActionEventRequestActionOneOf as SendActionEventRequestActionOneOf,
      blogV3Post_universal_d_SendActionEventResponse as SendActionEventResponse,
      blogV3Post_universal_d_listDemoPosts as listDemoPosts,
      blogV3Post_universal_d_ListDemoPostsOptions as ListDemoPostsOptions,
      blogV3Post_universal_d_listTemplates as listTemplates,
      blogV3Post_universal_d_ListTemplatesOptions as ListTemplatesOptions,
      blogV3Post_universal_d_getTemplate as getTemplate,
      blogV3Post_universal_d_createDraftPostFromTemplate as createDraftPostFromTemplate,
      blogV3Post_universal_d_getTotalLikesPerMember as getTotalLikesPerMember,
      blogV3Post_universal_d_getPost as getPost,
      blogV3Post_universal_d_GetPostOptions as GetPostOptions,
      blogV3Post_universal_d_getPostBySlug as getPostBySlug,
      blogV3Post_universal_d_GetPostBySlugOptions as GetPostBySlugOptions,
      blogV3Post_universal_d_listPosts as listPosts,
      blogV3Post_universal_d_ListPostsOptions as ListPostsOptions,
      blogV3Post_universal_d_queryPosts as queryPosts,
      blogV3Post_universal_d_QueryPostsOptions as QueryPostsOptions,
      blogV3Post_universal_d_PostsQueryResult as PostsQueryResult,
      blogV3Post_universal_d_PostsQueryBuilder as PostsQueryBuilder,
      blogV3Post_universal_d_getPostMetrics as getPostMetrics,
      blogV3Post_universal_d_bulkGetPostMetrics as bulkGetPostMetrics,
      blogV3Post_universal_d_viewPost as viewPost,
      blogV3Post_universal_d_likePost as likePost,
      blogV3Post_universal_d_LikePostOptions as LikePostOptions,
      blogV3Post_universal_d_unlikePost as unlikePost,
      blogV3Post_universal_d_UnlikePostOptions as UnlikePostOptions,
      blogV3Post_universal_d_pinPost as pinPost,
      blogV3Post_universal_d_PinPostOptions as PinPostOptions,
      blogV3Post_universal_d_unpinPost as unpinPost,
      blogV3Post_universal_d_UnpinPostOptions as UnpinPostOptions,
      blogV3Post_universal_d_listPostsArchive as listPostsArchive,
      blogV3Post_universal_d_ListPostsArchiveOptions as ListPostsArchiveOptions,
      blogV3Post_universal_d_bulkGetPostReactions as bulkGetPostReactions,
      blogV3Post_universal_d_queryPublicationsCountStats as queryPublicationsCountStats,
      blogV3Post_universal_d_QueryPublicationsCountStatsOptions as QueryPublicationsCountStatsOptions,
      blogV3Post_universal_d_queryPostCountStats as queryPostCountStats,
      blogV3Post_universal_d_QueryPostCountStatsOptions as QueryPostCountStatsOptions,
      blogV3Post_universal_d_getTotalPublications as getTotalPublications,
      blogV3Post_universal_d_GetTotalPublicationsOptions as GetTotalPublicationsOptions,
      blogV3Post_universal_d_getTotalPosts as getTotalPosts,
      blogV3Post_universal_d_GetTotalPostsOptions as GetTotalPostsOptions,
      blogV3Post_universal_d_sendActionEvent as sendActionEvent,
      blogV3Post_universal_d_SendActionEventOptions as SendActionEventOptions,
    };
  }
  
  interface Category$1 {
      /**
       * Category ID.
       * @readonly
       */
      _id?: string;
      /** Category label. Displayed in the Category Menu. */
      label?: string;
      /**
       * Number of posts in the category.
       * @readonly
       */
      postCount?: number;
      /**
       * Category URL.
       *
       *
       * The `url` directs you to a page that lists every post with the specified category.
       *
       * @readonly
       */
      url?: string;
      /** Category description. */
      description?: string | null;
      /** Category title. */
      title?: string;
      /** Reserved for internal use. */
      coverMedia?: CoverMedia$1;
      /**
       * Reserved for internal use.
       * @readonly
       */
      oldRank?: number;
      /** Reserved for internal use. */
      rank?: number | null;
      /** Position of the category in the [Category Menu](https://support.wix.com/en/article/wix-blog-adding-and-customizing-a-category-menu). Categories with lower display position are displayed first. */
      displayPosition?: number | null;
      /** ID of the category's translations when [Wix Multilingual](https://support.wix.com/en/article/wix-multilingual-translating-your-blog) is installed on a site. All translations of a single category will share the same `translationId`.  */
      translationId?: string | null;
      /**
       * Category Language.
       *
       * 2-letter language code in [ISO 639-1 format](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).
       */
      language?: string | null;
      /**
       * Part of a category's URL that refers to a specific category.
       *
       *
       * For example, `'https:/example.com/blog/category/{my-category-slug}'`.
       */
      slug?: string;
      /**
       * Reserved for internal use.
       * @readonly
       */
      internalId?: string | null;
      /** SEO data. */
      seoData?: SeoSchema$2;
      /** Category cover image. */
      coverImage?: string;
      /**
       * Category translations.
       * @internal
       * @readonly
       */
      translations?: CategoryTranslation$1[];
      /**
       * Date and time the Category was last updated.
       * @readonly
       */
      _updatedDate?: Date;
  }
  interface CoverMedia$1 extends CoverMediaMediaOneOf$1 {
      /** Image url. */
      image?: string;
      /** Video url. */
      video?: string;
      /**
       * Is cover media enabled.
       * Selected by user whether to display cover media on the feed
       */
      enabled?: boolean;
      /** Whether cover media is displayed. */
      displayed?: boolean;
      /** If `false`, the cover image is the first media item appearing in the content. */
      custom?: boolean;
  }
  /** @oneof */
  interface CoverMediaMediaOneOf$1 {
      /** Image url. */
      image?: string;
      /** Video url. */
      video?: string;
  }
  /**
   * The SEO schema object contains data about different types of meta tags. It makes sure that the information about your page is presented properly to search engines.
   * The search engines use this information for ranking purposes, or to display snippets in the search results.
   * This data will override other sources of tags (for example patterns) and will be included in the <head> section of the HTML document, while not being displayed on the page itself.
   */
  interface SeoSchema$2 {
      /** SEO tag information. */
      tags?: Tag$2[];
      /** SEO general settings. */
      settings?: Settings$2;
  }
  interface Keyword$2 {
      /** Keyword value. */
      term?: string;
      /** Whether the keyword is the main focus keyword. */
      isMain?: boolean;
  }
  interface Tag$2 {
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
  interface Settings$2 {
      /**
       * Whether the Auto Redirect feature, which creates `301 redirects` on a slug change, is enabled.
       *
       *
       * Default: `false` (Auto Redirect is enabled.)
       */
      preventAutoRedirect?: boolean;
      /** User-selected keyword terms for a specific page. */
      keywords?: Keyword$2[];
  }
  interface CategoryTranslation$1 {
      /** Category ID */
      _id?: string;
      /** Label which is presented in the categories menu on site */
      label?: string | null;
      /** Language of the category */
      language?: string | null;
      /** Url of this category page */
      url?: string;
  }
  interface InitialCategoriesCopied {
      /** Number of categories copied. */
      count?: number;
  }
  interface CreateCategoryRequest {
      /** Category info. */
      category: Category$1;
      /**
       * List of category fields to be included in the response.
       * @internal
       */
      fieldsToInclude?: Field$2[];
      /**
       * List of additional category fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the category’s base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the category’s base fields are returned.
       */
      fieldsets?: Field$2[];
  }
  enum Field$2 {
      UNKNOWN = "UNKNOWN",
      /** Includes Category url. */
      URL = "URL",
      /**
       * Includes internal id field.
       * Reserved for internal use
       */
      INTERNAL_ID = "INTERNAL_ID",
      /** Includes SEO data. */
      SEO = "SEO",
      /** Includes translations. */
      TRANSLATIONS = "TRANSLATIONS"
  }
  interface CreateCategoryResponse {
      /** Category info. */
      category?: Category$1;
  }
  interface BulkCreateCategoriesRequest {
      /** Categories to create. */
      categories: Category$1[];
      /** Whether to return the full created category entities in the response. */
      returnFullEntity?: boolean;
      /**
       * List of category fields to be included in the response.
       * @internal
       */
      fieldsToInclude?: Field$2[];
      /**
       * List of additional category fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the category’s base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the category’s base fields are returned.
       */
      fieldsets?: Field$2[];
  }
  interface BulkCreateCategoriesResponse {
      /** Categories created by bulk action. */
      results?: BulkCategoryResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata$2;
  }
  interface BulkCategoryResult {
      /** Bulk actions metadata for category. */
      itemMetadata?: ItemMetadata$2;
      /** Optional created category. */
      item?: Category$1;
  }
  interface ItemMetadata$2 {
      /** Item ID. Should always be available, unless it's impossible (for example, when failing to create an item). */
      _id?: string | null;
      /** Index of the item within the request array. Allows for correlation between request and response items. */
      originalIndex?: number;
      /** Whether the requested action was successful for this item. When `false`, the `error` field is populated. */
      success?: boolean;
      /** Details about the error in case of failure. */
      error?: ApplicationError$2;
  }
  interface ApplicationError$2 {
      /** Error code. */
      code?: string;
      /** Description of the error. */
      description?: string;
      /** Data related to the error. */
      data?: Record<string, any> | null;
  }
  interface BulkActionMetadata$2 {
      /** Number of items that were successfully processed. */
      totalSuccesses?: number;
      /** Number of items that couldn't be processed. */
      totalFailures?: number;
      /** Number of failures without details because detailed failure threshold was exceeded. */
      undetailedFailures?: number;
  }
  interface BulkUpdateCategoriesRequest {
      /** Categories to update. */
      categories?: MaskedCategory[];
      /** Whether to return the full created category entities in the response. */
      returnFullEntity?: boolean;
      /**
       * List of category fields to be included in the response if the entities are present.
       * Base default fieldset returns all core category properties (all properties that are not a supported fieldset value).
       * For example, when `URL` fieldset is selected, returned category will include the set of base properties and the category's preview url.
       */
      fieldsets?: Field$2[];
  }
  interface MaskedCategory {
      /** Category */
      category?: Category$1;
      /**
       * Field mask of fields to update.
       * @internal
       */
      fieldMask?: string[];
  }
  interface BulkUpdateCategoriesResponse {
      /** Categories updated by bulk action. */
      results?: BulkCategoryResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata$2;
  }
  interface UpdateCategoryRequest {
      /** Category info. */
      category: Category$1;
      /**
       * List of category fields to be included in the response.
       * @internal
       */
      fieldsToInclude?: Field$2[];
      /**
       * Field mask of fields to update.
       * @internal
       */
      fieldMask?: string[];
      /**
       * List of additional category fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the category’s base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the category’s base fields are returned.
       */
      fieldsets?: Field$2[];
  }
  interface UpdateCategoryResponse {
      /** Category info. */
      category?: Category$1;
  }
  interface GetCategoriesCountByLanguageRequest {
  }
  interface GetCategoriesCountByLanguageResponse {
      /** The language and it's count. */
      categoriesLanguageCount?: CategoryLanguageCount[];
  }
  interface CategoryLanguageCount {
      /** 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format. */
      languageCode?: string | null;
      /** The count of Categories for the language. */
      categoryCount?: number | null;
  }
  interface GetCategoryRequest {
      /** Category ID. */
      categoryId: string;
      /**
       * __Deprecated.__ Use `fieldsets` instead.
       * This parameter will be removed on June 30, 2023.
       *
       * List of category fields to be included in the response.
       */
      fieldsToInclude?: Field$2[];
      /**
       * List of additional category fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the category’s base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the category’s base fields are returned.
       */
      fieldsets?: Field$2[];
  }
  interface GetCategoryResponse {
      /** Category info. */
      category?: Category$1;
  }
  interface GetCategoryBySlugRequest {
      /** Slug of the category to retrieve. */
      slug: string;
      /**
       * __Deprecated.__ Use `fieldsets` instead.
       *
       * This parameter will be removed on June 30, 2023.
       * List of category fields to be included in the response.
       */
      fieldsToInclude?: Field$2[];
      /**
       * List of additional category fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the category’s base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the category’s base fields are returned.
       */
      fieldsets?: Field$2[];
      /**
       * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       * Language of the category to retrieve.
       */
      language?: string | null;
  }
  interface GetCategoryBySlugResponse {
      /** Category info. */
      category?: Category$1;
  }
  interface ListCategoriesRequest {
      /** Pagination options. */
      paging?: BlogPaging$1;
      /**
       * __Deprecated.__ Use `fieldsets` instead.
       *
       * This parameter will be removed on June 30, 2023.
       *
       * List of category fields to be included in the response.
       */
      fieldsToInclude?: Field$2[];
      /**
       * List of additional category fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the category’s base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the category’s base fields are returned.
       */
      fieldsets?: Field$2[];
      /**
       * Language filter.
       *
       * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       * Pass a language to only receive categories that are in that language.
       * If omitted, categories in all languages are returned.
       */
      language?: string | null;
  }
  interface BlogPaging$1 {
      /** Number of categories to skip in the list. */
      offset?: number;
      /**
       * Number of items to return.
       *
       * Default: `50`
       *
       * Max: `100`
       */
      limit?: number;
      /** Pointer to the next or previous page in the list of results. */
      cursor?: string | null;
  }
  interface ListCategoriesResponse {
      /** List of categories. */
      categories?: Category$1[];
      /** Details on the paged set of results returned. */
      metaData?: MetaData$2;
  }
  interface MetaData$2 {
      /** Number of items returned in this response. */
      count?: number;
      /** Number of items skipped. */
      offset?: number;
      /** Total number of items that match the query. */
      total?: number;
      /** Pointer to the next or previous page in the list of results. */
      cursor?: string | null;
  }
  interface QueryCategoriesRequest {
      /**
       * __Deprecated.__ Use `query` instead.
       * This parameter will be removed on June 30, 2023.
       *
       * Pagination options.
       */
      paging?: BlogPaging$1;
      /**
       * __Deprecated.__ Use `query` instead.
       * This parameter will be removed on June 30, 2023.
       *
       * Filter object.
       */
      filter?: Record<string, any> | null;
      /**
       * __Deprecated.__ Use `query` instead.
       * This parameter will be removed on June 3, 2023.
       *
       * Sorting options.
       */
      sort?: Sorting$2[];
      /**
       * __Deprecated.__ Use `fieldsets` instead.
       * This parameter will be removed on June 30, 2023.
       *
       * List of category fields to be included in the response.
       */
      fieldsToInclude?: Field$2[];
      /** Query options. */
      query?: PlatformQuery$2;
      /**
       * List of additional category fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the category’s base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the category’s base fields are returned.
       */
      fieldsets?: Field$2[];
  }
  interface Sorting$2 {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
      order?: SortOrder$2;
      /**
       * When `field_name` is a property of repeated field that is marked as `MATCH_ITEMS` and sort should be done by
       * a specific element from a collection, filter can/should be provided to ensure correct sort value is picked.
       *
       * If multiple filters are provided, they are combined with AND operator.
       *
       * Example:
       * Given we have document like {"id": "1", "nestedField": [{"price": 10, "region": "EU"}, {"price": 20, "region": "US"}]}
       * and `nestedField` is marked as `MATCH_ITEMS`, to ensure that sorting is done by correct region, filter should be
       * { fieldName: "nestedField.price", "select_items_by": [{"nestedField.region": "US"}] }
       * @internal
       */
      selectItemsBy?: Record<string, any>[] | null;
  }
  enum SortOrder$2 {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface PlatformQuery$2 extends PlatformQueryPagingMethodOneOf$2 {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$2;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$2;
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`
       * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
       */
      filter?: Record<string, any> | null;
      /**
       * Sort object in the following format:
       * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
       */
      sort?: Sorting$2[];
  }
  /** @oneof */
  interface PlatformQueryPagingMethodOneOf$2 {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$2;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$2;
  }
  interface Paging$2 {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface CursorPaging$2 {
      /** Number of items to load. */
      limit?: number | null;
      /**
       * Pointer to the next or previous page in the list of results.
       *
       * You can get the relevant cursor token
       * from the `pagingMetadata` object in the previous call's response.
       * Not relevant for the first request.
       */
      cursor?: string | null;
  }
  interface QueryCategoriesResponse {
      /** List of categories. */
      categories?: Category$1[];
      /**
       * __Deprecated.__ Use `pagingMetadata` instead.
       * This property will be removed on June 30, 2023.
       *
       * Details on the paged set of results returned.
       */
      metaData?: MetaData$2;
      /** Details on the paged set of results returned. */
      pagingMetadata?: PagingMetadataV2$2;
  }
  interface PagingMetadataV2$2 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      offset?: number | null;
      /** Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set. */
      total?: number | null;
      /** Flag that indicates the server failed to calculate the `total` field. */
      tooManyToCount?: boolean | null;
      /** Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used. */
      cursors?: Cursors$2;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       * @internal
       */
      hasNext?: boolean | null;
  }
  interface Cursors$2 {
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  interface BulkDeleteCategoryRequest {
      /** Category IDs. */
      categoryIds: string[];
      /** Should delete bypassing the trash-bin. */
      permanent?: boolean;
  }
  interface BulkDeleteCategoryResponse {
  }
  interface DeleteCategoryRequest {
      /** Category ID. */
      categoryId: string;
  }
  interface DeleteCategoryResponse {
  }
  interface DomainEvent$2 extends DomainEventBodyOneOf$2 {
      createdEvent?: EntityCreatedEvent$2;
      updatedEvent?: EntityUpdatedEvent$2;
      deletedEvent?: EntityDeletedEvent$2;
      actionEvent?: ActionEvent$2;
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
  interface DomainEventBodyOneOf$2 {
      createdEvent?: EntityCreatedEvent$2;
      updatedEvent?: EntityUpdatedEvent$2;
      deletedEvent?: EntityDeletedEvent$2;
      actionEvent?: ActionEvent$2;
  }
  interface EntityCreatedEvent$2 {
      entityAsJson?: string;
      /**
       * Indicates the event was triggered by a restore-from-trashbin operation for a previously deleted entity
       * @internal
       */
      triggeredByUndelete?: boolean | null;
  }
  interface EntityUpdatedEvent$2 {
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
  interface EntityDeletedEvent$2 {
      /**
       * Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled
       * @internal
       */
      movedToTrash?: boolean | null;
      /** Entity that was deleted */
      deletedEntityAsJson?: string | null;
  }
  interface ActionEvent$2 {
      bodyAsJson?: string;
  }
  interface MessageEnvelope$2 {
      /** App instance ID. */
      instanceId?: string | null;
      /** Event type. */
      eventType?: string;
      /** The identification type and identity data. */
      identity?: IdentificationData$2;
      /** Stringify payload. */
      data?: string;
  }
  interface IdentificationData$2 extends IdentificationDataIdOneOf$2 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
      /** @readonly */
      identityType?: WebhookIdentityType$2;
  }
  /** @oneof */
  interface IdentificationDataIdOneOf$2 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
  }
  enum WebhookIdentityType$2 {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  /**
   * Creates a category.
   * @param category - Category info.
   * @internal
   * @documentationMaturity preview
   * @requiredField category
   * @requiredField category.label
   * @adminMethod
   * @returns Category info.
   */
  function createCategory(category: Category$1, options?: CreateCategoryOptions): Promise<Category$1>;
  interface CreateCategoryOptions {
      /**
       * List of category fields to be included in the response.
       * @internal
       */
      fieldsToInclude?: Field$2[];
      /**
       * List of additional category fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the category’s base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the category’s base fields are returned.
       */
      fieldsets?: Field$2[];
  }
  /**
   * Creates multiple categories.
   * @param categories - Categories to create.
   * @internal
   * @documentationMaturity preview
   * @requiredField categories
   * @requiredField categories.label
   * @adminMethod
   */
  function bulkCreateCategories(categories: Category$1[], options?: BulkCreateCategoriesOptions): Promise<BulkCreateCategoriesResponse>;
  interface BulkCreateCategoriesOptions {
      /** Whether to return the full created category entities in the response. */
      returnFullEntity?: boolean;
      /**
       * List of category fields to be included in the response.
       * @internal
       */
      fieldsToInclude?: Field$2[];
      /**
       * List of additional category fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the category’s base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the category’s base fields are returned.
       */
      fieldsets?: Field$2[];
  }
  /**
   * Updates multiple categories.
   * @internal
   * @documentationMaturity preview
   * @requiredField options.categories.category
   * @requiredField options.categories.category._id
   * @adminMethod
   */
  function bulkUpdateCategories(options?: BulkUpdateCategoriesOptions): Promise<BulkUpdateCategoriesResponse>;
  interface BulkUpdateCategoriesOptions {
      /** Categories to update. */
      categories?: MaskedCategory[];
      /** Whether to return the full created category entities in the response. */
      returnFullEntity?: boolean;
      /**
       * List of category fields to be included in the response if the entities are present.
       * Base default fieldset returns all core category properties (all properties that are not a supported fieldset value).
       * For example, when `URL` fieldset is selected, returned category will include the set of base properties and the category's preview url.
       */
      fieldsets?: Field$2[];
  }
  /**
   * Updates a category.
   * @param _id - Category ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField category
   * @adminMethod
   * @returns Category info.
   */
  function updateCategory(_id: string, category: UpdateCategory, options?: UpdateCategoryOptions): Promise<Category$1>;
  interface UpdateCategory {
      /**
       * Category ID.
       * @readonly
       */
      _id?: string;
      /** Category label. Displayed in the Category Menu. */
      label?: string;
      /**
       * Number of posts in the category.
       * @readonly
       */
      postCount?: number;
      /**
       * Category URL.
       *
       *
       * The `url` directs you to a page that lists every post with the specified category.
       *
       * @readonly
       */
      url?: string;
      /** Category description. */
      description?: string | null;
      /** Category title. */
      title?: string;
      /** Reserved for internal use. */
      coverMedia?: CoverMedia$1;
      /**
       * Reserved for internal use.
       * @readonly
       */
      oldRank?: number;
      /** Reserved for internal use. */
      rank?: number | null;
      /** Position of the category in the [Category Menu](https://support.wix.com/en/article/wix-blog-adding-and-customizing-a-category-menu). Categories with lower display position are displayed first. */
      displayPosition?: number | null;
      /** ID of the category's translations when [Wix Multilingual](https://support.wix.com/en/article/wix-multilingual-translating-your-blog) is installed on a site. All translations of a single category will share the same `translationId`. */
      translationId?: string | null;
      /**
       * Category Language.
       *
       * 2-letter language code in [ISO 639-1 format](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).
       */
      language?: string | null;
      /**
       * Part of a category's URL that refers to a specific category.
       *
       *
       * For example, `'https:/example.com/blog/category/{my-category-slug}'`.
       */
      slug?: string;
      /**
       * Reserved for internal use.
       * @readonly
       */
      internalId?: string | null;
      /** SEO data. */
      seoData?: SeoSchema$2;
      /** Category cover image. */
      coverImage?: string;
      /**
       * Category translations.
       * @internal
       * @readonly
       */
      translations?: CategoryTranslation$1[];
      /**
       * Date and time the Category was last updated.
       * @readonly
       */
      _updatedDate?: Date;
  }
  interface UpdateCategoryOptions {
      /**
       * List of category fields to be included in the response.
       * @internal
       */
      fieldsToInclude?: Field$2[];
      /**
       * Field mask of fields to update.
       * @internal
       */
      fieldMask?: string[];
      /**
       * List of additional category fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the category’s base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the category’s base fields are returned.
       */
      fieldsets?: Field$2[];
  }
  /**
   * Retrieves a count of categories for every site language.
   * @internal
   * @documentationMaturity preview
   */
  function getCategoriesCountByLanguage(): Promise<GetCategoriesCountByLanguageResponse>;
  /**
   * Gets a category by the specified ID.
   *
   *
   * The `getCategory()` function returns a Promise that resolves to a category whose ID matches the specified ID.
   *
   * @param categoryId - Category ID.
   * @public
   * @requiredField categoryId
   * @param options - Options specifying which fields to return.
   */
  function getCategory(categoryId: string, options?: GetCategoryOptions): Promise<GetCategoryResponse>;
  interface GetCategoryOptions {
      /** @internal */
      fieldsToInclude?: Field$2[];
      /**
       * List of category fields to be included in the response. By default, any fields not passed are not returned.
       *
       * Supported Values:
       * `"SEO"` and `"URL"`.
       */
      fieldsets?: Field$2[];
  }
  /**
   * Gets a category by the specified slug.
   *
   *
   * The `getCategoryBySlug()` function returns a Promise that resolves to a category whose slug matches the specified slug.
   *
   * The `slug` is the end of a category's URL that refers to a specific category. For example, if a category's URL is `https://example.com/blog/category/{my-category-slug}`, the slug is `my-post-slug`. The slug is case-sensitive string that is generally derived from the category's `label`, unless specified otherwise.
   *
   * @public
   * @requiredField slug
   * @param slug - Slug of the category to retrieve.
   *
   * The end of a category's URL. For example, `'https:/example.com/blog/category/{my-category-slug}'`. Case sensitive and generally based on the category `label` if not specified.
   * @param options - Options specifying which fields to return.
   */
  function getCategoryBySlug(slug: string, options?: GetCategoryBySlugOptions): Promise<GetCategoryBySlugResponse>;
  interface GetCategoryBySlugOptions {
      /** @internal */
      fieldsToInclude?: Field$2[];
      /**
       * List of category fields to be included in the response. By default, any fields not passed are not returned.
       *
       * Supported Values:
       * `"SEO"` and `"URL"`.
       */
      fieldsets?: Field$2[];
      /**
       * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       * Language of the category to retrieve.
       */
      language?: string | null;
  }
  /**
   * Retrieves a list of categories.
   *
   *
   * The `listCategories()` function returns a Promise that resolves to a list of up to 100 categories per language in order of their `displayPosition` starting with `0`. The `displayPosition` is the position in which the categories are displayed in the Category Menu page. By default, categories get added to the bottom of the Category Menu with a `displayPosition` of `-1`.
   * @public
   * @param options - Filter and paging options.
   */
  function listCategories(options?: ListCategoriesOptions): Promise<ListCategoriesResponse>;
  interface ListCategoriesOptions {
      /** Pagination options. */
      paging?: BlogPaging$1;
      /** @internal */
      fieldsToInclude?: Field$2[];
      /**
       * List of category fields to be included in the response. By default, any fields not passed are not returned.
       *
       * Supported Values:
       * `"SEO"` and `"URL"`.
       */
      fieldsets?: Field$2[];
      /**
       * Language filter.
       *
       * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       * Pass a language to only receive categories that are in that language.
       * If omitted, categories in all languages are returned.
       */
      language?: string | null;
  }
  /**
   * Creates a query to retrieve a list of categories.
   *
   *
   * The `queryCategories()` function builds a query to retrieve a list of up to 100 categories per language, and returns a [`CategoriesQueryBuilder`](https://www.wix.com/velo/reference/wix-blog-backend/categories/categoriesquerybuilder) object.
   *
   * The returned object contains the query definition, which is typically used to run the query using the [`find()`](https://www.wix.com/velo/reference/wix-blog-backend/categories/categoriesquerybuilder/find) function.
   *
   * You can refine the query by chaining `CategoriesQueryBuilder` functions to the query. `CategoriesQueryBuilder` functions enable you to sort, filter, and control the results that `queryCategories` returns. Any functions chained to the `queryCategories()` function are applied in the order that they are called.
   *
   * `queryCategories()` runs with these `CategoriesQueryBuilder` defaults, which you can override.
   * - [`limit(100)`](https://www.wix.com/velo/reference/wix-blog-backend/categories/categoriesquerybuilder/limit)
   * - [`ascending(displayPosition)`](https://www.wix.com/velo/reference/wix-blog-backend/categories/categoriesquerybuilder/ascending)
   *
   * The following `CategoriesQueryBuilder` functions are supported for `queryCategories()`. For a full description of the `Categories` object, see the object returned for the [`items`](https://www.wix.com/velo/reference/wix-blog-backend/categories/categoriesqueryresult/items) property in [`CategoriesQueryResult`](https://www.wix.com/velo/reference/wix-blog-backend/categories/categoriesqueryresult).
   * @public
   * @param options - Options specifying which fields to return.
   */
  function queryCategories(options?: QueryCategoriesOptions): CategoriesQueryBuilder;
  interface QueryCategoriesOptions {
      /** @internal */
      paging?: BlogPaging$1 | undefined;
      /** @internal */
      filter?: Record<string, any> | null | undefined;
      /** @internal */
      sort?: Sorting$2[] | undefined;
      /** @internal */
      fieldsToInclude?: Field$2[] | undefined;
      /**
       * List of category fields to be included in the response. By default, any fields not passed are not returned.
       *
       * Supported Values:
       * `"SEO"` and `"URL"`.
       */
      fieldsets?: Field$2[] | undefined;
  }
  interface QueryOffsetResult$1 {
      currentPage: number | undefined;
      totalPages: number | undefined;
      totalCount: number | undefined;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface CategoriesQueryResult extends QueryOffsetResult$1 {
      items: Category$1[];
      query: CategoriesQueryBuilder;
      next: () => Promise<CategoriesQueryResult>;
      prev: () => Promise<CategoriesQueryResult>;
  }
  interface CategoriesQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      eq: (propertyName: '_id' | 'label' | 'postCount' | 'title' | 'rank' | 'displayPosition' | 'translationId' | 'language', value: any) => CategoriesQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      ne: (propertyName: '_id' | 'label' | 'postCount' | 'title' | 'rank' | 'displayPosition' | 'translationId' | 'language', value: any) => CategoriesQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      ge: (propertyName: 'postCount' | 'rank' | 'displayPosition', value: any) => CategoriesQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      gt: (propertyName: 'postCount' | 'rank' | 'displayPosition', value: any) => CategoriesQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      le: (propertyName: 'postCount' | 'rank' | 'displayPosition', value: any) => CategoriesQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      lt: (propertyName: 'postCount' | 'rank' | 'displayPosition', value: any) => CategoriesQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       */
      startsWith: (propertyName: 'label' | 'title', value: string) => CategoriesQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       */
      hasSome: (propertyName: '_id' | 'label' | 'title' | 'slug', value: any[]) => CategoriesQueryBuilder;
      in: (propertyName: 'label' | 'postCount' | 'title' | 'rank' | 'displayPosition' | 'translationId' | 'language', value: any) => CategoriesQueryBuilder;
      exists: (propertyName: 'label' | 'title' | 'translationId' | 'language', value: boolean) => CategoriesQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments. */
      ascending: (...propertyNames: Array<'label' | 'postCount' | 'title' | 'rank' | 'displayPosition' | 'language' | 'slug'>) => CategoriesQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments. */
      descending: (...propertyNames: Array<'label' | 'postCount' | 'title' | 'rank' | 'displayPosition' | 'language' | 'slug'>) => CategoriesQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object. */
      limit: (limit: number) => CategoriesQueryBuilder;
      /** @param skip - Number of items to skip in the query results before returning the results. */
      skip: (skip: number) => CategoriesQueryBuilder;
      find: () => Promise<CategoriesQueryResult>;
  }
  /**
   * Bulk delete for categories
   * @param categoryIds - Category IDs.
   * @internal
   * @documentationMaturity preview
   * @requiredField categoryIds
   * @adminMethod
   */
  function bulkDeleteCategory(categoryIds: string[], options?: BulkDeleteCategoryOptions): Promise<void>;
  interface BulkDeleteCategoryOptions {
      /** Should delete bypassing the trash-bin. */
      permanent?: boolean;
  }
  /**
   * Deletes a category.
   * @param categoryId - Category ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField categoryId
   * @adminMethod
   */
  function deleteCategory(categoryId: string): Promise<void>;
  
  type blogV3Category_universal_d_InitialCategoriesCopied = InitialCategoriesCopied;
  type blogV3Category_universal_d_CreateCategoryRequest = CreateCategoryRequest;
  type blogV3Category_universal_d_CreateCategoryResponse = CreateCategoryResponse;
  type blogV3Category_universal_d_BulkCreateCategoriesRequest = BulkCreateCategoriesRequest;
  type blogV3Category_universal_d_BulkCreateCategoriesResponse = BulkCreateCategoriesResponse;
  type blogV3Category_universal_d_BulkCategoryResult = BulkCategoryResult;
  type blogV3Category_universal_d_BulkUpdateCategoriesRequest = BulkUpdateCategoriesRequest;
  type blogV3Category_universal_d_MaskedCategory = MaskedCategory;
  type blogV3Category_universal_d_BulkUpdateCategoriesResponse = BulkUpdateCategoriesResponse;
  type blogV3Category_universal_d_UpdateCategoryRequest = UpdateCategoryRequest;
  type blogV3Category_universal_d_UpdateCategoryResponse = UpdateCategoryResponse;
  type blogV3Category_universal_d_GetCategoriesCountByLanguageRequest = GetCategoriesCountByLanguageRequest;
  type blogV3Category_universal_d_GetCategoriesCountByLanguageResponse = GetCategoriesCountByLanguageResponse;
  type blogV3Category_universal_d_CategoryLanguageCount = CategoryLanguageCount;
  type blogV3Category_universal_d_GetCategoryRequest = GetCategoryRequest;
  type blogV3Category_universal_d_GetCategoryResponse = GetCategoryResponse;
  type blogV3Category_universal_d_GetCategoryBySlugRequest = GetCategoryBySlugRequest;
  type blogV3Category_universal_d_GetCategoryBySlugResponse = GetCategoryBySlugResponse;
  type blogV3Category_universal_d_ListCategoriesRequest = ListCategoriesRequest;
  type blogV3Category_universal_d_ListCategoriesResponse = ListCategoriesResponse;
  type blogV3Category_universal_d_QueryCategoriesRequest = QueryCategoriesRequest;
  type blogV3Category_universal_d_QueryCategoriesResponse = QueryCategoriesResponse;
  type blogV3Category_universal_d_BulkDeleteCategoryRequest = BulkDeleteCategoryRequest;
  type blogV3Category_universal_d_BulkDeleteCategoryResponse = BulkDeleteCategoryResponse;
  type blogV3Category_universal_d_DeleteCategoryRequest = DeleteCategoryRequest;
  type blogV3Category_universal_d_DeleteCategoryResponse = DeleteCategoryResponse;
  const blogV3Category_universal_d_createCategory: typeof createCategory;
  type blogV3Category_universal_d_CreateCategoryOptions = CreateCategoryOptions;
  const blogV3Category_universal_d_bulkCreateCategories: typeof bulkCreateCategories;
  type blogV3Category_universal_d_BulkCreateCategoriesOptions = BulkCreateCategoriesOptions;
  const blogV3Category_universal_d_bulkUpdateCategories: typeof bulkUpdateCategories;
  type blogV3Category_universal_d_BulkUpdateCategoriesOptions = BulkUpdateCategoriesOptions;
  const blogV3Category_universal_d_updateCategory: typeof updateCategory;
  type blogV3Category_universal_d_UpdateCategory = UpdateCategory;
  type blogV3Category_universal_d_UpdateCategoryOptions = UpdateCategoryOptions;
  const blogV3Category_universal_d_getCategoriesCountByLanguage: typeof getCategoriesCountByLanguage;
  const blogV3Category_universal_d_getCategory: typeof getCategory;
  type blogV3Category_universal_d_GetCategoryOptions = GetCategoryOptions;
  const blogV3Category_universal_d_getCategoryBySlug: typeof getCategoryBySlug;
  type blogV3Category_universal_d_GetCategoryBySlugOptions = GetCategoryBySlugOptions;
  const blogV3Category_universal_d_listCategories: typeof listCategories;
  type blogV3Category_universal_d_ListCategoriesOptions = ListCategoriesOptions;
  const blogV3Category_universal_d_queryCategories: typeof queryCategories;
  type blogV3Category_universal_d_QueryCategoriesOptions = QueryCategoriesOptions;
  type blogV3Category_universal_d_CategoriesQueryResult = CategoriesQueryResult;
  type blogV3Category_universal_d_CategoriesQueryBuilder = CategoriesQueryBuilder;
  const blogV3Category_universal_d_bulkDeleteCategory: typeof bulkDeleteCategory;
  type blogV3Category_universal_d_BulkDeleteCategoryOptions = BulkDeleteCategoryOptions;
  const blogV3Category_universal_d_deleteCategory: typeof deleteCategory;
  namespace blogV3Category_universal_d {
    export {
      Category$1 as Category,
      CoverMedia$1 as CoverMedia,
      CoverMediaMediaOneOf$1 as CoverMediaMediaOneOf,
      SeoSchema$2 as SeoSchema,
      Keyword$2 as Keyword,
      Tag$2 as Tag,
      Settings$2 as Settings,
      CategoryTranslation$1 as CategoryTranslation,
      blogV3Category_universal_d_InitialCategoriesCopied as InitialCategoriesCopied,
      blogV3Category_universal_d_CreateCategoryRequest as CreateCategoryRequest,
      Field$2 as Field,
      blogV3Category_universal_d_CreateCategoryResponse as CreateCategoryResponse,
      blogV3Category_universal_d_BulkCreateCategoriesRequest as BulkCreateCategoriesRequest,
      blogV3Category_universal_d_BulkCreateCategoriesResponse as BulkCreateCategoriesResponse,
      blogV3Category_universal_d_BulkCategoryResult as BulkCategoryResult,
      ItemMetadata$2 as ItemMetadata,
      ApplicationError$2 as ApplicationError,
      BulkActionMetadata$2 as BulkActionMetadata,
      blogV3Category_universal_d_BulkUpdateCategoriesRequest as BulkUpdateCategoriesRequest,
      blogV3Category_universal_d_MaskedCategory as MaskedCategory,
      blogV3Category_universal_d_BulkUpdateCategoriesResponse as BulkUpdateCategoriesResponse,
      blogV3Category_universal_d_UpdateCategoryRequest as UpdateCategoryRequest,
      blogV3Category_universal_d_UpdateCategoryResponse as UpdateCategoryResponse,
      blogV3Category_universal_d_GetCategoriesCountByLanguageRequest as GetCategoriesCountByLanguageRequest,
      blogV3Category_universal_d_GetCategoriesCountByLanguageResponse as GetCategoriesCountByLanguageResponse,
      blogV3Category_universal_d_CategoryLanguageCount as CategoryLanguageCount,
      blogV3Category_universal_d_GetCategoryRequest as GetCategoryRequest,
      blogV3Category_universal_d_GetCategoryResponse as GetCategoryResponse,
      blogV3Category_universal_d_GetCategoryBySlugRequest as GetCategoryBySlugRequest,
      blogV3Category_universal_d_GetCategoryBySlugResponse as GetCategoryBySlugResponse,
      blogV3Category_universal_d_ListCategoriesRequest as ListCategoriesRequest,
      BlogPaging$1 as BlogPaging,
      blogV3Category_universal_d_ListCategoriesResponse as ListCategoriesResponse,
      MetaData$2 as MetaData,
      blogV3Category_universal_d_QueryCategoriesRequest as QueryCategoriesRequest,
      Sorting$2 as Sorting,
      SortOrder$2 as SortOrder,
      PlatformQuery$2 as PlatformQuery,
      PlatformQueryPagingMethodOneOf$2 as PlatformQueryPagingMethodOneOf,
      Paging$2 as Paging,
      CursorPaging$2 as CursorPaging,
      blogV3Category_universal_d_QueryCategoriesResponse as QueryCategoriesResponse,
      PagingMetadataV2$2 as PagingMetadataV2,
      Cursors$2 as Cursors,
      blogV3Category_universal_d_BulkDeleteCategoryRequest as BulkDeleteCategoryRequest,
      blogV3Category_universal_d_BulkDeleteCategoryResponse as BulkDeleteCategoryResponse,
      blogV3Category_universal_d_DeleteCategoryRequest as DeleteCategoryRequest,
      blogV3Category_universal_d_DeleteCategoryResponse as DeleteCategoryResponse,
      DomainEvent$2 as DomainEvent,
      DomainEventBodyOneOf$2 as DomainEventBodyOneOf,
      EntityCreatedEvent$2 as EntityCreatedEvent,
      EntityUpdatedEvent$2 as EntityUpdatedEvent,
      EntityDeletedEvent$2 as EntityDeletedEvent,
      ActionEvent$2 as ActionEvent,
      MessageEnvelope$2 as MessageEnvelope,
      IdentificationData$2 as IdentificationData,
      IdentificationDataIdOneOf$2 as IdentificationDataIdOneOf,
      WebhookIdentityType$2 as WebhookIdentityType,
      blogV3Category_universal_d_createCategory as createCategory,
      blogV3Category_universal_d_CreateCategoryOptions as CreateCategoryOptions,
      blogV3Category_universal_d_bulkCreateCategories as bulkCreateCategories,
      blogV3Category_universal_d_BulkCreateCategoriesOptions as BulkCreateCategoriesOptions,
      blogV3Category_universal_d_bulkUpdateCategories as bulkUpdateCategories,
      blogV3Category_universal_d_BulkUpdateCategoriesOptions as BulkUpdateCategoriesOptions,
      blogV3Category_universal_d_updateCategory as updateCategory,
      blogV3Category_universal_d_UpdateCategory as UpdateCategory,
      blogV3Category_universal_d_UpdateCategoryOptions as UpdateCategoryOptions,
      blogV3Category_universal_d_getCategoriesCountByLanguage as getCategoriesCountByLanguage,
      blogV3Category_universal_d_getCategory as getCategory,
      blogV3Category_universal_d_GetCategoryOptions as GetCategoryOptions,
      blogV3Category_universal_d_getCategoryBySlug as getCategoryBySlug,
      blogV3Category_universal_d_GetCategoryBySlugOptions as GetCategoryBySlugOptions,
      blogV3Category_universal_d_listCategories as listCategories,
      blogV3Category_universal_d_ListCategoriesOptions as ListCategoriesOptions,
      blogV3Category_universal_d_queryCategories as queryCategories,
      blogV3Category_universal_d_QueryCategoriesOptions as QueryCategoriesOptions,
      blogV3Category_universal_d_CategoriesQueryResult as CategoriesQueryResult,
      blogV3Category_universal_d_CategoriesQueryBuilder as CategoriesQueryBuilder,
      blogV3Category_universal_d_bulkDeleteCategory as bulkDeleteCategory,
      blogV3Category_universal_d_BulkDeleteCategoryOptions as BulkDeleteCategoryOptions,
      blogV3Category_universal_d_deleteCategory as deleteCategory,
    };
  }
  
  interface DraftPost {
      /**
       * Draft post ID.
       * @readonly
       */
      _id?: string;
      /** Draft post title. */
      title?: string;
      /**
       * Draft post excerpt.
       *
       * If no excerpt has been manually set, an excerpt is automatically generated from the post's text.
       * This can be retrieved using the `GENERATED_EXCERPT` fieldset.
       */
      excerpt?: string | null;
      /** Whether the draft post is marked as featured. */
      featured?: boolean | null;
      /** Category IDs of the draft post. */
      categoryIds?: string[];
      /**
       * __Deprecated.__ Use `media` instead.
       * This property will be removed on June 6, 2023.
       *
       * Draft post cover media.
       * @internal
       */
      coverMedia?: CoverMedia;
      /** Draft post owner's member ID. */
      memberId?: string | null;
      /** Hashtags in the draft post. */
      hashtags?: string[];
      /** Whether commenting on the draft post is enabled. */
      commentingEnabled?: boolean | null;
      /**
       * Estimated reading time of the draft post (calculated automatically).
       * @readonly
       */
      minutesToRead?: number;
      /** Image placed at the top of the blog page. */
      heroImage?: string;
      /** Tag IDs the draft post is tagged with. */
      tagIds?: string[];
      /** IDs of posts related to this draft post. */
      relatedPostIds?: string[];
      /** Pricing plan IDs. Only relevant if a post is assigned to a specific pricing plan. */
      pricingPlanIds?: string[];
      /**
       * ID of the draft post's translations.
       *
       * All translations of a single post share the same `translationId`.
       * Available only if the [Multilingual](https://support.wix.com/en/article/wix-multilingual-an-overview) app is installed.
       */
      translationId?: string | null;
      /**
       * Language the draft post is written in.
       *
       * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       */
      language?: string | null;
      /**
       * Reserved for internal use.
       * @readonly
       */
      changeOrigin?: Origin;
      /**
       * Reserved for internal use.
       * @readonly
       */
      contentId?: string | null;
      /** Reserved for internal use. */
      editingSessionId?: string | null;
      /** Draft post rich content. */
      richContent?: RichContent;
      /**
       * Status of the draft post.
       * @readonly
       */
      status?: Status;
      /** Details of the draft post in review. Only relevant to posts submitted by guest writers. */
      moderationDetails?: ModerationDetails;
      /**
       * Reserved for internal use.
       * @readonly
       */
      mostRecentContributorId?: string | null;
      /**
       * Indicates if there are changes made to the draft post that have not yet been published.
       * @readonly
       */
      hasUnpublishedChanges?: boolean;
      /**
       * Date the draft post was last edited.
       * @readonly
       */
      editedDate?: Date;
      /**
       * Date the draft post is scheduled to be published.
       * @readonly
       */
      scheduledPublishDate?: Date;
      /** Reserved for internal use. */
      content?: Record<string, any> | null;
      /** Date the post was first published. */
      firstPublishedDate?: Date;
      /** SEO data. */
      seoData?: SeoSchema$1;
      /**
       * @internal Deprecated.
       * @internal Deprecated. */
      paidContentParagraph?: number | null;
      /**
       * Reserved for internal use.
       * @readonly
       */
      slugs?: string[];
      /**
       * Draft post URL preview. What the URL will look like once the post is published.
       * @readonly
       */
      url?: string;
      /**
       * Date the draft post was first created.
       * @readonly
       */
      _createdDate?: Date;
      /** SEO slug. */
      seoSlug?: string | null;
      /** Post cover media. */
      media?: Media;
      /** Number of paragraphs to display in a paid content preview for non-paying users. */
      previewTextParagraph?: number | null;
      /**
       * List of the post's translated posts.
       * @internal
       * @readonly
       */
      translations?: DraftPostTranslation[];
      /**
       * Reserved for internal use, not included in base response.
       * @internal
       */
      originPostId?: string | null;
      /**
       * Reserved for internal use, not included in base response.
       * @internal
       */
      originPostInstanceId?: string | null;
      /**
       * Reserved for internal use.
       * @readonly
       */
      internalId?: string | null;
  }
  interface CoverMedia extends CoverMediaMediaOneOf {
      /** Image url. */
      image?: string;
      /** Video url. */
      video?: string;
      /**
       * Is cover media enabled.
       * Selected by user whether to display cover media on the feed
       */
      enabled?: boolean;
      /** Whether cover media is displayed. */
      displayed?: boolean;
      /** Whether cover media is custom. If `false` the cover image is set to the first media item that appears in the content. */
      custom?: boolean;
  }
  /** @oneof */
  interface CoverMediaMediaOneOf {
      /** Image url. */
      image?: string;
      /** Video url. */
      video?: string;
  }
  enum Origin {
      UNKNOWN = "UNKNOWN",
      /** Changed by admin */
      ADMIN = "ADMIN",
      /** Categories were changed */
      ADD_CATEGORIES = "ADD_CATEGORIES",
      /** Saved automatically */
      AUTO_SAVE = "AUTO_SAVE",
      /** Copied from template */
      COPY_TEMPLATE = "COPY_TEMPLATE",
      /** Imported */
      IMPORT = "IMPORT",
      /** Imported in bulk */
      IMPORT_BULK = "IMPORT_BULK",
      /** Imported with html import */
      IMPORT_HTML = "IMPORT_HTML",
      /** Patch import */
      IMPORT_PATCH = "IMPORT_PATCH",
      /** Changed language */
      LANGUAGE_CHANGE = "LANGUAGE_CHANGE",
      /** Saved manually */
      MANUAL_SAVE = "MANUAL_SAVE",
      /** Affected by migration */
      MIGRATION = "MIGRATION",
      /** Affected by moderation */
      MODERATION = "MODERATION",
      /** Moved to trash */
      MOVE_TO_TRASH = "MOVE_TO_TRASH",
      /** Pricing plans were changed */
      PRICING_PLANS_CHANGE = "PRICING_PLANS_CHANGE",
      /** Was provisioned */
      PROVISION = "PROVISION",
      /** Was published */
      PUBLISH = "PUBLISH",
      /** Owner was reassigned */
      REASSIGN_OWNER = "REASSIGN_OWNER",
      /** Was reblogged */
      REBLOG = "REBLOG",
      /** Was restored */
      RESTORE = "RESTORE",
      /** Reverted to draft */
      REVERT_TO_DRAFT = "REVERT_TO_DRAFT",
      /** Was translated */
      TRANSLATION = "TRANSLATION",
      /** Was unpublished */
      UNPUBLISH = "UNPUBLISH",
      /** Was unscheduled */
      UNSCHEDULE = "UNSCHEDULE",
      /** New edit session started which updated editing_session_id id */
      NEW_EDIT_SESSION = "NEW_EDIT_SESSION",
      /** Was scheduled by Later */
      SCHEDULING_SERVICE_SCHEDULE = "SCHEDULING_SERVICE_SCHEDULE",
      /** Was unscheduled by Later */
      SCHEDULING_SERVICE_UNSCHEDULE = "SCHEDULING_SERVICE_UNSCHEDULE",
      /** Was published by Later */
      SCHEDULING_SERVICE_PUBLISH = "SCHEDULING_SERVICE_PUBLISH",
      /** Was scheduled */
      SCHEDULE = "SCHEDULE",
      /** Was removed from moderation */
      REMOVE_FROM_MODERATION = "REMOVE_FROM_MODERATION",
      /** Was rejected from moderation */
      REJECT_FROM_MODERATION = "REJECT_FROM_MODERATION",
      /** Was approved in moderation */
      APPROVE_IN_MODERATION = "APPROVE_IN_MODERATION",
      /** Tag was deleted */
      DELETE_TAG = "DELETE_TAG",
      /** Post was pinned */
      PIN = "PIN",
      /** Post was unpinned */
      UNPIN = "UNPIN",
      /** Saved automatically by AI tool. */
      AI_AUTO_SAVE = "AI_AUTO_SAVE"
  }
  interface RichContent {
      /** Node objects representing a rich content document. */
      nodes?: Node[];
      /** Object metadata. */
      metadata?: Metadata;
      /** Global styling for header, paragraph, block quote, and code block nodes in the object. */
      documentStyle?: DocumentStyle;
  }
  interface Node extends NodeDataOneOf {
      /** Data for a button node. */
      buttonData?: ButtonData;
      /** Data for a code block node. */
      codeBlockData?: CodeBlockData;
      /** Data for a divider node. */
      dividerData?: DividerData;
      /** Data for a file node. */
      fileData?: FileData;
      /** Data for a gallery node. */
      galleryData?: GalleryData;
      /** Data for a GIF node. */
      gifData?: GIFData;
      /** Data for a heading node. */
      headingData?: HeadingData;
      /** Data for an embedded HTML node. */
      htmlData?: HTMLData;
      /** Data for an image node. */
      imageData?: ImageData;
      /** Data for a link preview node. */
      linkPreviewData?: LinkPreviewData;
      /** Data for a map node. */
      mapData?: MapData;
      /** Data for a paragraph node. */
      paragraphData?: ParagraphData;
      /** Data for a poll node. */
      pollData?: PollData;
      /** Data for a text node. Used to apply decorations to text. */
      textData?: TextData;
      /** Data for an app embed node. */
      appEmbedData?: AppEmbedData;
      /** Data for a video node. */
      videoData?: VideoData;
      /** Data for an oEmbed node. */
      embedData?: EmbedData;
      /** Data for a collapsible list node. */
      collapsibleListData?: CollapsibleListData;
      /** Data for a table node. */
      tableData?: TableData;
      /** Data for a table cell node. */
      tableCellData?: TableCellData;
      /** Data for a custon external node. */
      externalData?: Record<string, any> | null;
      /** Data for an audio node. */
      audioData?: AudioData;
      /** Data for an ordered list node. */
      orderedListData?: OrderedListData;
      /** Data for a bulleted list node. */
      bulletedListData?: BulletedListData;
      /** Data for a block quote node. */
      blockquoteData?: BlockquoteData;
      /** Node type. Use `APP_EMBED` for nodes that embed content from other Wix apps. Use `EMBED` to embed content in [oEmbed](https://oembed.com/) format. */
      type?: NodeType;
      /** Node ID. */
      _id?: string;
      /** A list of child nodes. */
      nodes?: Node[];
      /** Padding and background color styling for the node. */
      style?: NodeStyle;
  }
  /** @oneof */
  interface NodeDataOneOf {
      /** Data for a button node. */
      buttonData?: ButtonData;
      /** Data for a code block node. */
      codeBlockData?: CodeBlockData;
      /** Data for a divider node. */
      dividerData?: DividerData;
      /** Data for a file node. */
      fileData?: FileData;
      /** Data for a gallery node. */
      galleryData?: GalleryData;
      /** Data for a GIF node. */
      gifData?: GIFData;
      /** Data for a heading node. */
      headingData?: HeadingData;
      /** Data for an embedded HTML node. */
      htmlData?: HTMLData;
      /** Data for an image node. */
      imageData?: ImageData;
      /** Data for a link preview node. */
      linkPreviewData?: LinkPreviewData;
      /** Data for a map node. */
      mapData?: MapData;
      /** Data for a paragraph node. */
      paragraphData?: ParagraphData;
      /** Data for a poll node. */
      pollData?: PollData;
      /** Data for a text node. Used to apply decorations to text. */
      textData?: TextData;
      /** Data for an app embed node. */
      appEmbedData?: AppEmbedData;
      /** Data for a video node. */
      videoData?: VideoData;
      /** Data for an oEmbed node. */
      embedData?: EmbedData;
      /** Data for a collapsible list node. */
      collapsibleListData?: CollapsibleListData;
      /** Data for a table node. */
      tableData?: TableData;
      /** Data for a table cell node. */
      tableCellData?: TableCellData;
      /** Data for a custon external node. */
      externalData?: Record<string, any> | null;
      /** Data for an audio node. */
      audioData?: AudioData;
      /** Data for an ordered list node. */
      orderedListData?: OrderedListData;
      /** Data for a bulleted list node. */
      bulletedListData?: BulletedListData;
      /** Data for a block quote node. */
      blockquoteData?: BlockquoteData;
  }
  enum NodeType {
      PARAGRAPH = "PARAGRAPH",
      TEXT = "TEXT",
      HEADING = "HEADING",
      BULLETED_LIST = "BULLETED_LIST",
      ORDERED_LIST = "ORDERED_LIST",
      LIST_ITEM = "LIST_ITEM",
      BLOCKQUOTE = "BLOCKQUOTE",
      CODE_BLOCK = "CODE_BLOCK",
      VIDEO = "VIDEO",
      DIVIDER = "DIVIDER",
      FILE = "FILE",
      GALLERY = "GALLERY",
      GIF = "GIF",
      HTML = "HTML",
      IMAGE = "IMAGE",
      LINK_PREVIEW = "LINK_PREVIEW",
      MAP = "MAP",
      POLL = "POLL",
      APP_EMBED = "APP_EMBED",
      BUTTON = "BUTTON",
      COLLAPSIBLE_LIST = "COLLAPSIBLE_LIST",
      TABLE = "TABLE",
      EMBED = "EMBED",
      COLLAPSIBLE_ITEM = "COLLAPSIBLE_ITEM",
      COLLAPSIBLE_ITEM_TITLE = "COLLAPSIBLE_ITEM_TITLE",
      COLLAPSIBLE_ITEM_BODY = "COLLAPSIBLE_ITEM_BODY",
      TABLE_CELL = "TABLE_CELL",
      TABLE_ROW = "TABLE_ROW",
      EXTERNAL = "EXTERNAL",
      AUDIO = "AUDIO"
  }
  interface NodeStyle {
      /** The top padding value in pixels. */
      paddingTop?: string | null;
      /** The bottom padding value in pixels. */
      paddingBottom?: string | null;
      /** The background color as a hexadecimal value. */
      backgroundColor?: string | null;
  }
  interface ButtonData {
      /** Styling for the button's container. */
      containerData?: PluginContainerData;
      /** The button type. */
      type?: ButtonDataType;
      /** Styling for the button. */
      styles?: Styles;
      /** The text to display on the button. */
      text?: string | null;
      /** Button link details. */
      link?: Link;
  }
  interface Border {
      /** Border width in pixels. */
      width?: number | null;
      /** Border radius in pixels. */
      radius?: number | null;
  }
  interface Colors {
      /** The text color as a hexadecimal value. */
      text?: string | null;
      /** The border color as a hexadecimal value. */
      border?: string | null;
      /** The background color as a hexadecimal value. */
      background?: string | null;
  }
  interface PluginContainerData {
      /** The width of the node when it's displayed. */
      width?: PluginContainerDataWidth;
      /** The node's alignment within its container. */
      alignment?: PluginContainerDataAlignment;
      /** Spoiler cover settings for the node. */
      spoiler?: Spoiler;
      /** The height of the node when it's displayed. */
      height?: Height;
      /** Sets whether text should wrap around this node when it's displayed. If `textWrap` is `false`, the node takes up the width of its container. */
      textWrap?: boolean | null;
  }
  enum WidthType {
      /** Width matches the content width */
      CONTENT = "CONTENT",
      /** Small Width */
      SMALL = "SMALL",
      /** Width will match the original asset width */
      ORIGINAL = "ORIGINAL",
      /** coast-to-coast display */
      FULL_WIDTH = "FULL_WIDTH"
  }
  interface PluginContainerDataWidth extends PluginContainerDataWidthDataOneOf {
      /**
       * One of the following predefined width options:
       * `CONTENT`: The width of the container matches the content width.
       * `SMALL`: Small width.
       * `ORIGINAL`: The width of the container matches the original asset width.
       * `FULL_WIDTH`: Full width.
       */
      size?: WidthType;
      /** A custom width value in pixels. */
      custom?: string | null;
  }
  /** @oneof */
  interface PluginContainerDataWidthDataOneOf {
      /**
       * One of the following predefined width options:
       * `CONTENT`: The width of the container matches the content width.
       * `SMALL`: Small width.
       * `ORIGINAL`: The width of the container matches the original asset width.
       * `FULL_WIDTH`: Full width.
       */
      size?: WidthType;
      /** A custom width value in pixels. */
      custom?: string | null;
  }
  enum PluginContainerDataAlignment {
      /** Center Alignment */
      CENTER = "CENTER",
      /** Left Alignment */
      LEFT = "LEFT",
      /** Right Alignment */
      RIGHT = "RIGHT"
  }
  interface Spoiler {
      /** Sets whether the spoiler cover is enabled for this node. */
      enabled?: boolean | null;
      /** The description displayed on top of the spoiler cover. */
      description?: string | null;
      /** The text for the button used to remove the spoiler cover. */
      buttonText?: string | null;
  }
  interface Height {
      /** A custom height value in pixels. */
      custom?: string | null;
  }
  enum ButtonDataType {
      /** Regular link button */
      LINK = "LINK",
      /** Triggers custom action that is defined in plugin configuration by the consumer */
      ACTION = "ACTION"
  }
  interface Styles {
      /** Border attributes. */
      border?: Border;
      /** Color attributes. */
      colors?: Colors;
  }
  interface Link extends LinkDataOneOf {
      /** The absolute URL for the linked document. */
      url?: string;
      /** The target node's ID. Used for linking to another node in this object. */
      anchor?: string;
      /**
       * The HTML `target` attribute value for the link. This property defines where the linked document opens as follows:
       * `SELF` - Default. Opens the linked document in the same frame as the link.
       * `BLANK` - Opens the linked document in a new browser tab or window.
       * `PARENT` - Opens the linked document in the link's parent frame.
       * `TOP` - Opens the linked document in the full body of the link's browser tab or window.
       */
      target?: Target;
      /** The HTML `rel` attribute value for the link. This object specifies the relationship between the current document and the linked document. */
      rel?: Rel;
      /** A serialized object used for a custom or external link panel. */
      customData?: string | null;
  }
  /** @oneof */
  interface LinkDataOneOf {
      /** The absolute URL for the linked document. */
      url?: string;
      /** The target node's ID. Used for linking to another node in this object. */
      anchor?: string;
  }
  enum Target {
      /** Opens the linked document in the same frame as it was clicked (this is default) */
      SELF = "SELF",
      /** Opens the linked document in a new window or tab */
      BLANK = "BLANK",
      /** Opens the linked document in the parent frame */
      PARENT = "PARENT",
      /** Opens the linked document in the full body of the window */
      TOP = "TOP"
  }
  interface Rel {
      /** Indicates to search engine crawlers not to follow the link. */
      nofollow?: boolean | null;
      /** Indicates to search engine crawlers that the link is a paid placement such as sponsored content or an advertisement. */
      sponsored?: boolean | null;
      /** Indicates that this link is user-generated content and isn't necessarily trusted or endorsed by the page’s author. For example, a link in a fourm post. */
      ugc?: boolean | null;
      /** Indicates that this link protects referral information from being passed to the target website. */
      noreferrer?: boolean | null;
  }
  interface CodeBlockData {
      /** Styling for the code block's text. */
      textStyle?: TextStyle;
  }
  interface TextStyle {
      /** Text alignment. Defaults to `AUTO`. */
      textAlignment?: TextAlignment;
      /** A CSS `line-height` value for the text as a unitless ratio. */
      lineHeight?: string | null;
  }
  enum TextAlignment {
      /** browser default, eqivalent to `initial` */
      AUTO = "AUTO",
      /** Left align */
      LEFT = "LEFT",
      /** Right align */
      RIGHT = "RIGHT",
      /** Center align */
      CENTER = "CENTER",
      /** Text is spaced to line up its left and right edges to the left and right edges of the line box, except for the last line. */
      JUSTIFY = "JUSTIFY"
  }
  interface DividerData {
      /** Styling for the divider's container. */
      containerData?: PluginContainerData;
      /** Divider line style. */
      lineStyle?: LineStyle;
      /** Divider width. */
      width?: Width;
      /** Divider alignment. */
      alignment?: Alignment;
  }
  enum LineStyle {
      /** Single Line */
      SINGLE = "SINGLE",
      /** Double Line */
      DOUBLE = "DOUBLE",
      /** Dashed Line */
      DASHED = "DASHED",
      /** Dotted Line */
      DOTTED = "DOTTED"
  }
  enum Width {
      /** Large line */
      LARGE = "LARGE",
      /** Medium line */
      MEDIUM = "MEDIUM",
      /** Small line */
      SMALL = "SMALL"
  }
  enum Alignment {
      /** Center alignment */
      CENTER = "CENTER",
      /** Left alignment */
      LEFT = "LEFT",
      /** Right alignment */
      RIGHT = "RIGHT"
  }
  interface FileData {
      /** Styling for the file's container. */
      containerData?: PluginContainerData;
      /** The source for the file's data. */
      src?: FileSource;
      /** File name. */
      name?: string | null;
      /** File type. */
      type?: string | null;
      /** File size in KB. */
      size?: number | null;
      /** Settings for PDF files. */
      pdfSettings?: PDFSettings;
      /** File MIME type. */
      mimeType?: string | null;
      /** File path. */
      path?: string | null;
  }
  enum ViewMode {
      /** No PDF view */
      NONE = "NONE",
      /** Full PDF view */
      FULL = "FULL",
      /** Mini PDF view */
      MINI = "MINI"
  }
  interface FileSource extends FileSourceDataOneOf {
      /** The absolute URL for the file's source. */
      url?: string | null;
      /** Custom ID. Use `id` instead. */
      custom?: string | null;
      /** An ID that's resolved to a URL by a resolver function. */
      _id?: string | null;
      /** Indicates whether the file's source is private. */
      private?: boolean | null;
  }
  /** @oneof */
  interface FileSourceDataOneOf {
      /** The absolute URL for the file's source. */
      url?: string | null;
      /** Custom ID. Use `id` instead. */
      custom?: string | null;
      /** An ID that's resolved to a URL by a resolver function. */
      _id?: string | null;
  }
  interface PDFSettings {
      /**
       * PDF view mode. One of the following:
       * `NONE` : The PDF isn't displayed.
       * `FULL` : A full page view of the PDF is displayed.
       * `MINI` : A mini view of the PDF is displayed.
       */
      viewMode?: ViewMode;
      /** Sets whether the PDF download button is disabled. */
      disableDownload?: boolean | null;
      /** Sets whether the PDF print button is disabled. */
      disablePrint?: boolean | null;
  }
  interface GalleryData {
      /** Styling for the gallery's container. */
      containerData?: PluginContainerData;
      /** The items in the gallery. */
      items?: Item[];
      /** Options for defining the gallery's appearance. */
      options?: GalleryOptions;
      /** Sets whether the gallery's expand button is disabled. */
      disableExpand?: boolean | null;
      /** Sets whether the gallery's download button is disabled. */
      disableDownload?: boolean | null;
  }
  interface V1Media {
      /** The source for the media's data. */
      src?: FileSource;
      /** Media width in pixels. */
      width?: number | null;
      /** Media height in pixels. */
      height?: number | null;
      /** Media duration in seconds. Only relevant for audio and video files. */
      duration?: number | null;
  }
  interface Image {
      /** Image file details. */
      media?: V1Media;
      /** Link details for images that are links. */
      link?: Link;
  }
  interface Video {
      /** Video file details. */
      media?: V1Media;
      /** Video thumbnail file details. */
      thumbnail?: V1Media;
  }
  interface Item extends ItemDataOneOf {
      /** An image item. */
      image?: Image;
      /** A video item. */
      video?: Video;
      /** Item title. */
      title?: string | null;
      /** Item's alternative text. */
      altText?: string | null;
  }
  /** @oneof */
  interface ItemDataOneOf {
      /** An image item. */
      image?: Image;
      /** A video item. */
      video?: Video;
  }
  interface GalleryOptions {
      /** Gallery layout. */
      layout?: Layout;
      /** Styling for gallery items. */
      item?: ItemStyle;
      /** Styling for gallery thumbnail images. */
      thumbnails?: Thumbnails;
  }
  enum LayoutType {
      /** Collage type */
      COLLAGE = "COLLAGE",
      /** Masonry type */
      MASONRY = "MASONRY",
      /** Grid type */
      GRID = "GRID",
      /** Thumbnail type */
      THUMBNAIL = "THUMBNAIL",
      /** Slider type */
      SLIDER = "SLIDER",
      /** Slideshow type */
      SLIDESHOW = "SLIDESHOW",
      /** Panorama type */
      PANORAMA = "PANORAMA",
      /** Column type */
      COLUMN = "COLUMN",
      /** Magic type */
      MAGIC = "MAGIC",
      /** Fullsize images type */
      FULLSIZE = "FULLSIZE"
  }
  enum Orientation {
      /** Rows Orientation */
      ROWS = "ROWS",
      /** Columns Orientation */
      COLUMNS = "COLUMNS"
  }
  enum Crop {
      /** Crop to fill */
      FILL = "FILL",
      /** Crop to fit */
      FIT = "FIT"
  }
  enum ThumbnailsAlignment {
      /** Top alignment */
      TOP = "TOP",
      /** Right alignment */
      RIGHT = "RIGHT",
      /** Bottom alignment */
      BOTTOM = "BOTTOM",
      /** Left alignment */
      LEFT = "LEFT",
      /** No thumbnail */
      NONE = "NONE"
  }
  interface Layout {
      /** Gallery layout type. */
      type?: LayoutType;
      /** Sets whether horizontal scroll is enabled. */
      horizontalScroll?: boolean | null;
      /** Gallery orientation. */
      orientation?: Orientation;
      /** The number of columns to display on full size screens. */
      numberOfColumns?: number | null;
      /** The number of columns to display on mobile screens. */
      mobileNumberOfColumns?: number | null;
  }
  interface ItemStyle {
      /** Desirable dimension for each item in pixels (behvaior changes according to gallery type) */
      targetSize?: number | null;
      /** Item ratio */
      ratio?: number | null;
      /** Sets how item images are cropped. */
      crop?: Crop;
      /** The spacing between items in pixels. */
      spacing?: number | null;
  }
  interface Thumbnails {
      /** Thumbnail alignment. */
      placement?: ThumbnailsAlignment;
      /** Spacing between thumbnails in pixels. */
      spacing?: number | null;
  }
  interface GIFData {
      /** Styling for the GIF's container. */
      containerData?: PluginContainerData;
      /** The source of the full size GIF. */
      original?: GIF;
      /** The source of the downsized GIF. */
      downsized?: GIF;
      /** Height in pixels. */
      height?: number;
      /** Width in pixels. */
      width?: number;
  }
  interface GIF {
      /** GIF format URL. */
      gif?: string | null;
      /** MP4 format URL. */
      mp4?: string | null;
      /** Thumbnail URL. */
      still?: string | null;
  }
  interface HeadingData {
      /** Heading level from 1-6. */
      level?: number;
      /** Styling for the heading text. */
      textStyle?: TextStyle;
      /** Indentation level from 1-6. */
      indentation?: number | null;
  }
  interface HTMLData extends HTMLDataDataOneOf {
      /** The URL for the HTML code for the node. */
      url?: string;
      /** The HTML code for the node. */
      html?: string;
      /** Whether this is an AdSense element. Use `source` instead. */
      isAdsense?: boolean | null;
      /** Styling for the HTML node's container. */
      containerData?: PluginContainerData;
      /** The type of HTML code. */
      source?: Source;
  }
  /** @oneof */
  interface HTMLDataDataOneOf {
      /** The URL for the HTML code for the node. */
      url?: string;
      /** The HTML code for the node. */
      html?: string;
      /** Whether this is an AdSense element. Use `source` instead. */
      isAdsense?: boolean | null;
  }
  enum Source {
      HTML = "HTML",
      ADSENSE = "ADSENSE"
  }
  interface ImageData {
      /** Styling for the image's container. */
      containerData?: PluginContainerData;
      /** Image file details. */
      image?: V1Media;
      /** Link details for images that are links. */
      link?: Link;
      /** Sets whether the image expands to full screen when clicked. */
      disableExpand?: boolean | null;
      /** Image's alternative text. */
      altText?: string | null;
      /** Image caption. */
      caption?: string | null;
      /** Sets whether the image's download button is disabled. */
      disableDownload?: boolean | null;
  }
  interface LinkPreviewData {
      /** Styling for the link preview's container. */
      containerData?: PluginContainerData;
      /** Link details. */
      link?: Link;
      /** Preview title. */
      title?: string | null;
      /** Preview thumbnail URL. */
      thumbnailUrl?: string | null;
      /** Preview description. */
      description?: string | null;
      /** The preview content as HTML. */
      html?: string | null;
  }
  interface MapData {
      /** Styling for the map's container. */
      containerData?: PluginContainerData;
      /** Map settings. */
      mapSettings?: MapSettings;
  }
  interface MapSettings {
      /** The address to display on the map. */
      address?: string | null;
      /** Sets whether the map is draggable. */
      draggable?: boolean | null;
      /** Sets whether the location marker is visible. */
      marker?: boolean | null;
      /** Sets whether street view control is enabled. */
      streetViewControl?: boolean | null;
      /** Sets whether zoom control is enabled. */
      zoomControl?: boolean | null;
      /** Location latitude. */
      lat?: number | null;
      /** Location longitude. */
      lng?: number | null;
      /** Location name. */
      locationName?: string | null;
      /** Sets whether view mode control is enabled. */
      viewModeControl?: boolean | null;
      /** Initial zoom value. */
      initialZoom?: number | null;
      /** Map type. `HYBRID` is a combination of the `ROADMAP` and `SATELLITE` map types. */
      mapType?: MapType;
  }
  enum MapType {
      /** Roadmap map type */
      ROADMAP = "ROADMAP",
      /** Satellite map type */
      SATELITE = "SATELITE",
      /** Hybrid map type */
      HYBRID = "HYBRID",
      /** Terrain map type */
      TERRAIN = "TERRAIN"
  }
  interface ParagraphData {
      /** Styling for the paragraph text. */
      textStyle?: TextStyle;
      /** Indentation level from 1-6. */
      indentation?: number | null;
  }
  interface PollData {
      /** Styling for the poll's container. */
      containerData?: PluginContainerData;
      /** Poll data. */
      poll?: Poll;
      /** Layout settings for the poll and voting options. */
      layout?: PollDataLayout;
      /** Styling for the poll and voting options. */
      design?: Design;
  }
  enum ViewRole {
      /** Only Poll creator can view the results */
      CREATOR = "CREATOR",
      /** Anyone who voted can see the results */
      VOTERS = "VOTERS",
      /** Anyone can see the results, even if one didn't vote */
      EVERYONE = "EVERYONE"
  }
  enum VoteRole {
      /** Logged in member */
      SITE_MEMBERS = "SITE_MEMBERS",
      /** Anyone */
      ALL = "ALL"
  }
  interface Permissions {
      /** Sets who can view the poll results. */
      view?: ViewRole;
      /** Sets who can vote. */
      vote?: VoteRole;
      /** Sets whether one voter can vote multiple times. */
      allowMultipleVotes?: boolean | null;
  }
  interface Option {
      /** Option ID. */
      _id?: string | null;
      /** Option title. */
      title?: string | null;
      /** The image displayed with the option. */
      image?: V1Media;
  }
  interface PollSettings {
      /** Permissions settings for voting. */
      permissions?: Permissions;
      /** Sets whether voters are displayed in the vote results. */
      showVoters?: boolean | null;
      /** Sets whether the vote count is displayed. */
      showVotesCount?: boolean | null;
  }
  enum PollLayoutType {
      /** List */
      LIST = "LIST",
      /** Grid */
      GRID = "GRID"
  }
  enum PollLayoutDirection {
      /** Left-to-right */
      LTR = "LTR",
      /** Right-to-left */
      RTL = "RTL"
  }
  interface PollLayout {
      /** The layout for displaying the voting options. */
      type?: PollLayoutType;
      /** The direction of the text displayed in the voting options. Text can be displayed either right-to-left or left-to-right. */
      direction?: PollLayoutDirection;
      /** Sets whether to display the main poll image. */
      enableImage?: boolean | null;
  }
  interface OptionLayout {
      /** Sets whether to display option images. */
      enableImage?: boolean | null;
  }
  enum BackgroundType {
      /** Color background type */
      COLOR = "COLOR",
      /** Image background type */
      IMAGE = "IMAGE",
      /** Gradiant background type */
      GRADIENT = "GRADIENT"
  }
  interface Gradient {
      /** The gradient angle in degrees. */
      angle?: number | null;
      /** The start color as a hexademical value. */
      startColor?: string | null;
      /** The end color as a hexademical value. */
      lastColor?: string | null;
  }
  interface Background extends BackgroundBackgroundOneOf {
      /** The background color as a hexademical value. */
      color?: string | null;
      /** An image to use for the background. */
      image?: V1Media;
      /** Details for a gradient background. */
      gradient?: Gradient;
      /** Background type. For each option, include the relevant details. */
      type?: BackgroundType;
  }
  /** @oneof */
  interface BackgroundBackgroundOneOf {
      /** The background color as a hexademical value. */
      color?: string | null;
      /** An image to use for the background. */
      image?: V1Media;
      /** Details for a gradient background. */
      gradient?: Gradient;
  }
  interface PollDesign {
      /** Background styling. */
      background?: Background;
      /** Border radius in pixels. */
      borderRadius?: number | null;
  }
  interface OptionDesign {
      /** Border radius in pixels. */
      borderRadius?: number | null;
  }
  interface Poll {
      /** Poll ID. */
      _id?: string | null;
      /** Poll title. */
      title?: string | null;
      /** Poll creator ID. */
      creatorId?: string | null;
      /** Main poll image. */
      image?: V1Media;
      /** Voting options. */
      options?: Option[];
      /** The poll's permissions and display settings. */
      settings?: PollSettings;
  }
  interface PollDataLayout {
      /** Poll layout settings. */
      poll?: PollLayout;
      /** Voting otpions layout settings. */
      options?: OptionLayout;
  }
  interface Design {
      /** Styling for the poll. */
      poll?: PollDesign;
      /** Styling for voting options. */
      options?: OptionDesign;
  }
  interface TextData {
      /** The text to apply decorations to. */
      text?: string;
      /** The decorations to apply. */
      decorations?: Decoration[];
  }
  /** Adds appearence changes to text */
  interface Decoration extends DecorationDataOneOf {
      /** Data for an anchor link decoration. */
      anchorData?: AnchorData;
      /** Data for a color decoration. */
      colorData?: ColorData;
      /** Data for an external link decoration. */
      linkData?: LinkData;
      /** Data for a mention decoration. */
      mentionData?: MentionData;
      /** Data for a font size decoration. */
      fontSizeData?: FontSizeData;
      /** Font weight for a bold decoration. */
      fontWeightValue?: number | null;
      /** Data for an italic decoration. */
      italicData?: boolean | null;
      /** Data for an underline decoration. */
      underlineData?: boolean | null;
      /** The type of decoration to apply. */
      type?: DecorationType;
  }
  /** @oneof */
  interface DecorationDataOneOf {
      /** Data for an anchor link decoration. */
      anchorData?: AnchorData;
      /** Data for a color decoration. */
      colorData?: ColorData;
      /** Data for an external link decoration. */
      linkData?: LinkData;
      /** Data for a mention decoration. */
      mentionData?: MentionData;
      /** Data for a font size decoration. */
      fontSizeData?: FontSizeData;
      /** Font weight for a bold decoration. */
      fontWeightValue?: number | null;
      /** Data for an italic decoration. */
      italicData?: boolean | null;
      /** Data for an underline decoration. */
      underlineData?: boolean | null;
  }
  enum DecorationType {
      BOLD = "BOLD",
      ITALIC = "ITALIC",
      UNDERLINE = "UNDERLINE",
      SPOILER = "SPOILER",
      ANCHOR = "ANCHOR",
      MENTION = "MENTION",
      LINK = "LINK",
      COLOR = "COLOR",
      FONT_SIZE = "FONT_SIZE",
      EXTERNAL = "EXTERNAL"
  }
  interface AnchorData {
      /** The target node's ID. */
      anchor?: string;
  }
  interface ColorData {
      /** The text's background color as a hexadecimal value. */
      background?: string | null;
      /** The text's foreground color as a hexadecimal value. */
      foreground?: string | null;
  }
  interface LinkData {
      /** Link details. */
      link?: Link;
  }
  interface MentionData {
      /** The mentioned user's name. */
      name?: string;
      /** The version of the user's name that appears after the `@` character in the mention. */
      slug?: string;
      /** Mentioned user's ID. */
      _id?: string | null;
  }
  interface FontSizeData {
      /** The units used for the font size. */
      unit?: FontType;
      /** Font size value. */
      value?: number | null;
  }
  enum FontType {
      PX = "PX",
      EM = "EM"
  }
  interface AppEmbedData extends AppEmbedDataAppDataOneOf {
      /** Data for embedded Wix Bookings content. */
      bookingData?: BookingData;
      /** Data for embedded Wix Events content. */
      eventData?: EventData;
      /** The type of Wix App content being embedded. */
      type?: AppType;
      /** The ID of the embedded content. */
      itemId?: string | null;
      /** The name of the embedded content. */
      name?: string | null;
      /** Deprecated: Use `image` instead. */
      imageSrc?: string | null;
      /** The URL for the embedded content. */
      url?: string | null;
      /** An image for the embedded content. */
      image?: V1Media;
  }
  /** @oneof */
  interface AppEmbedDataAppDataOneOf {
      /** Data for embedded Wix Bookings content. */
      bookingData?: BookingData;
      /** Data for embedded Wix Events content. */
      eventData?: EventData;
  }
  enum AppType {
      PRODUCT = "PRODUCT",
      EVENT = "EVENT",
      BOOKING = "BOOKING"
  }
  interface BookingData {
      /** Booking duration in minutes. */
      durations?: string | null;
  }
  interface EventData {
      /** Event schedule. */
      scheduling?: string | null;
      /** Event location. */
      location?: string | null;
  }
  interface VideoData {
      /** Styling for the video's container. */
      containerData?: PluginContainerData;
      /** Video details. */
      video?: V1Media;
      /** Video thumbnail details. */
      thumbnail?: V1Media;
      /** Sets whether the video's download button is disabled. */
      disableDownload?: boolean | null;
      /** Video title. */
      title?: string | null;
      /** Video options. */
      options?: PlaybackOptions;
  }
  interface PlaybackOptions {
      /** Sets whether the media will automatically start playing. */
      autoPlay?: boolean | null;
      /** Sets whether media's will be looped. */
      playInLoop?: boolean | null;
      /** Sets whether media's controls will be shown. */
      showControls?: boolean | null;
  }
  interface EmbedData {
      /** Styling for the oEmbed node's container. */
      containerData?: PluginContainerData;
      /** An [oEmbed](https://www.oembed.com) object. */
      oembed?: Oembed;
      /** Origin asset source. */
      src?: string | null;
  }
  interface Oembed {
      /** The resource type. */
      type?: string | null;
      /** The width of the resource specified in the `url` property in pixels. */
      width?: number | null;
      /** The height of the resource specified in the `url` property in pixels. */
      height?: number | null;
      /** Resource title. */
      title?: string | null;
      /** The source URL for the resource. */
      url?: string | null;
      /** HTML for embedding a video player. The HTML should have no padding or margins. */
      html?: string | null;
      /** The name of the author or owner of the resource. */
      authorName?: string | null;
      /** The URL for the author or owner of the resource. */
      authorUrl?: string | null;
      /** The name of the resource provider. */
      providerName?: string | null;
      /** The URL for the resource provider. */
      providerUrl?: string | null;
      /** The URL for a thumbnail image for the resource. If this property is defined, `thumbnailWidth` and `thumbnailHeight` must also be defined. */
      thumbnailUrl?: string | null;
      /** The width of the resource's thumbnail image. If this property is defined, `thumbnailUrl` and `thumbnailHeight` must also be defined. */
      thumbnailWidth?: string | null;
      /** The height of the resource's thumbnail image. If this property is defined, `thumbnailUrl` and `thumbnailWidth`must also be defined. */
      thumbnailHeight?: string | null;
      /** The URL for an embedded viedo. */
      videoUrl?: string | null;
      /** The oEmbed version number.  This value must be `1.0`. */
      version?: string | null;
  }
  interface CollapsibleListData {
      /** Styling for the collapsible list's container. */
      containerData?: PluginContainerData;
      /** If `true`, only one item can be expanded at a time. */
      expandOnlyOne?: boolean | null;
      /** Sets which items are expanded when the page loads. */
      initialExpandedItems?: InitialExpandedItems;
      /** The direction of the text in the list. Either left-to-right or right-to-left. */
      direction?: Direction;
      /** If `true`, The collapsible item will appear in search results as an FAQ. */
      isQapageData?: boolean | null;
  }
  enum InitialExpandedItems {
      /** First item will be expended initally */
      FIRST = "FIRST",
      /** All items will expended initally */
      ALL = "ALL",
      /** All items collapsed initally */
      NONE = "NONE"
  }
  enum Direction {
      /** Left-to-right */
      LTR = "LTR",
      /** Right-to-left */
      RTL = "RTL"
  }
  interface TableData {
      /** Styling for the table's container. */
      containerData?: PluginContainerData;
      /** The table's dimensions. */
      dimensions?: Dimensions;
      /** Deprecated: Use `rowHeader` and `columnHeader` instead. */
      header?: boolean | null;
      /** Sets whether the table's first row is a header. */
      rowHeader?: boolean | null;
      /** Sets whether the table's first column is a header. */
      columnHeader?: boolean | null;
  }
  interface Dimensions {
      /** An array representing relative width of each column in relation to the other columns. */
      colsWidthRatio?: number[];
      /** An array representing the height of each row in pixels. */
      rowsHeight?: number[];
      /** An array representing the minimum width of each column in pixels. */
      colsMinWidth?: number[];
  }
  interface TableCellData {
      /** Styling for the cell's background color and text alignment. */
      cellStyle?: CellStyle;
      /** The cell's border colors. */
      borderColors?: BorderColors;
  }
  enum VerticalAlignment {
      /** Top alignment */
      TOP = "TOP",
      /** Middle alignment */
      MIDDLE = "MIDDLE",
      /** Bottom alignment */
      BOTTOM = "BOTTOM"
  }
  interface CellStyle {
      /** Vertical alignment for the cell's text. */
      verticalAlignment?: VerticalAlignment;
      /** Cell background color as a hexadecimal value. */
      backgroundColor?: string | null;
  }
  interface BorderColors {
      /** Left border color as a hexadecimal value. */
      left?: string | null;
      /** Right border color as a hexadecimal value. */
      right?: string | null;
      /** Top border color as a hexadecimal value. */
      top?: string | null;
      /** Bottom border color as a hexadecimal value. */
      bottom?: string | null;
  }
  /**
   * `NullValue` is a singleton enumeration to represent the null value for the
   * `Value` type union.
   *
   * The JSON representation for `NullValue` is JSON `null`.
   */
  enum NullValue {
      /** Null value. */
      NULL_VALUE = "NULL_VALUE"
  }
  /**
   * `ListValue` is a wrapper around a repeated field of values.
   *
   * The JSON representation for `ListValue` is JSON array.
   */
  interface ListValue {
      /** Repeated field of dynamically typed values. */
      values?: any[];
  }
  interface AudioData {
      /** Styling for the audio node's container. */
      containerData?: PluginContainerData;
      /** Audio file details. */
      audio?: V1Media;
      /** Sets whether the audio node's download button is disabled. */
      disableDownload?: boolean | null;
      /** Cover image. */
      coverImage?: V1Media;
      /** Track name. */
      name?: string | null;
      /** Author name. */
      authorName?: string | null;
      /** An HTML version of the audio node. */
      html?: string | null;
  }
  interface OrderedListData {
      /** Indentation level. */
      indentation?: number;
  }
  interface BulletedListData {
      /** Indentation level. */
      indentation?: number;
  }
  interface BlockquoteData {
      /** Indentation level. */
      indentation?: number;
  }
  interface Metadata {
      /** Schema version. */
      version?: number;
      /**
       * When the object was created.
       * @readonly
       */
      createdTimestamp?: Date;
      /** When the object was most recently updated. */
      updatedTimestamp?: Date;
      /** Object ID. */
      _id?: string | null;
  }
  interface DocumentStyle {
      /** Styling for H1 nodes. */
      headerOne?: TextNodeStyle;
      /** Styling for H2 nodes. */
      headerTwo?: TextNodeStyle;
      /** Styling for H3 nodes. */
      headerThree?: TextNodeStyle;
      /** Styling for H4 nodes. */
      headerFour?: TextNodeStyle;
      /** Styling for H5 nodes. */
      headerFive?: TextNodeStyle;
      /** Styling for H6 nodes. */
      headerSix?: TextNodeStyle;
      /** Styling for paragraph nodes. */
      paragraph?: TextNodeStyle;
      /** Styling for block quote nodes. */
      blockquote?: TextNodeStyle;
      /** Styling for code block nodes. */
      codeBlock?: TextNodeStyle;
  }
  interface TextNodeStyle {
      /** The decorations to apply to the node. */
      decorations?: Decoration[];
      /** Padding and background color for the node. */
      nodeStyle?: NodeStyle;
      /** Line height for text in the node. */
      lineHeight?: string | null;
  }
  enum Status {
      UNKNOWN = "UNKNOWN",
      /** Status indicating the draft post is published. */
      PUBLISHED = "PUBLISHED",
      /** Status indicating the draft post is unpublished. */
      UNPUBLISHED = "UNPUBLISHED",
      /** Status indicating the draft post is scheduled for publication. */
      SCHEDULED = "SCHEDULED",
      /** Status indicating the draft post is deleted. */
      DELETED = "DELETED",
      /**
       * Deprecated. Use `IN_REVIEW` instead. Status indicating the draft post is in review.
       * Target removal date 2024-06-30
       * Reserved for internal use.
       */
      IN_MODERATION = "IN_MODERATION",
      /** Status indicating the draft post is in review. */
      IN_REVIEW = "IN_REVIEW"
  }
  interface ModerationDetails {
      /** Member ID of the person submitting the draft post for review. */
      submittedBy?: string;
      /** Date the post was submitted for review. */
      submittedDate?: Date;
      /** Status indicating whether the submission was approved or rejected by the moderator. */
      status?: ModerationStatusStatus;
      /** Member ID of the person who approved or rejected the post. */
      moderatedBy?: string | null;
      /** Date the post was approved or rejected. */
      moderationDate?: Date;
  }
  enum ModerationStatusStatus {
      UNKNOWN = "UNKNOWN",
      APPROVED = "APPROVED",
      REJECTED = "REJECTED"
  }
  /**
   * The SEO schema object contains data about different types of meta tags. It makes sure that the information about your page is presented properly to search engines.
   * The search engines use this information for ranking purposes, or to display snippets in the search results.
   * This data will override other sources of tags (for example patterns) and will be included in the <head> section of the HTML document, while not being displayed on the page itself.
   */
  interface SeoSchema$1 {
      /** SEO tag information. */
      tags?: Tag$1[];
      /** SEO general settings. */
      settings?: Settings$1;
  }
  interface Keyword$1 {
      /** Keyword value. */
      term?: string;
      /** Whether the keyword is the main focus keyword. */
      isMain?: boolean;
  }
  interface Tag$1 {
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
  interface Settings$1 {
      /**
       * Whether the Auto Redirect feature, which creates `301 redirects` on a slug change, is enabled.
       *
       *
       * Default: `false` (Auto Redirect is enabled.)
       */
      preventAutoRedirect?: boolean;
      /** User-selected keyword terms for a specific page. */
      keywords?: Keyword$1[];
  }
  interface Media extends MediaMediaOneOf {
      /** Wix Media details. */
      wixMedia?: WixMedia;
      /** Embed media details. */
      embedMedia?: EmbedMedia;
      /** Whether cover media is displayed. */
      displayed?: boolean;
      /** Whether custom cover media has been specified. If `false`, the first media item in the post's content serves as cover media. */
      custom?: boolean;
  }
  /** @oneof */
  interface MediaMediaOneOf {
      /** Wix Media details. */
      wixMedia?: WixMedia;
      /** Embed media details. */
      embedMedia?: EmbedMedia;
  }
  interface WixMedia {
      /** Image details. */
      image?: string;
      /** Video details. */
      videoV2?: string;
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
  interface EmbedMedia {
      /** Thumbnail details. */
      thumbnail?: EmbedThumbnail;
      /** Video details. */
      video?: EmbedVideo;
  }
  interface EmbedThumbnail {
      /** Thumbnail url. */
      url?: string;
      /** Thumbnail width. */
      width?: number;
      /** Thumbnail height. */
      height?: number;
  }
  interface EmbedVideo {
      /** Video url. */
      url?: string;
      /** Video width. */
      width?: number;
      /** Video height. */
      height?: number;
  }
  interface DraftPostTranslation {
      /** Post ID. */
      _id?: string;
      /** Post status. */
      status?: Status;
      /** Language the post is written in. */
      language?: string | null;
      /** Post slug. For example, 'post-slug'. */
      slug?: string | null;
      /** SEO data. */
      seoData?: SeoSchema$1;
      /** Post URL. */
      url?: string;
  }
  interface InitialDraftPostsCopied {
      /** Number of draft posts copied. */
      count?: number;
  }
  interface CreateDraftPostRequest {
      /** Draft post to create. */
      draftPost: DraftPost;
      /**
       * Should publish after creation.
       * @internal
       */
      shouldPublish?: boolean;
      /**
       * Whether the draft post should be published on creation.
       *
       * Default: `false`
       */
      publish?: boolean;
      /**
       * Save type.
       * @internal
       */
      saveType?: Type;
      /**
       * Field mask of fields to be used for draft post creation.
       * @internal
       */
      fieldMask?: string[];
      /**
       * List of draft post fields to be included in the response.
       * @internal
       */
      fieldsToInclude?: Field$1[];
      /**
       * List of additional draft post fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the draft post's base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the draft post's base fields are returned.
       */
      fieldsets?: Field$1[];
  }
  enum Type {
      UNKNOWN = "UNKNOWN",
      /** Manually saved. */
      MANUAL = "MANUAL",
      /** Triggered by autosave. */
      AUTO_SAVE = "AUTO_SAVE",
      /** Copied from template during provisioning flow. */
      PROVISIONING = "PROVISIONING",
      /** Imported from another blog. */
      IMPORT = "IMPORT",
      /** Triggered by autosave when post created by AI tool. */
      AI_AUTO_SAVE = "AI_AUTO_SAVE"
  }
  enum Field$1 {
      UNKNOWN = "UNKNOWN",
      /** Includes draft post preview URL. */
      URL = "URL",
      /**
       * Includes internal id field.
       * Reserved for internal use.
       */
      INTERNAL_ID = "INTERNAL_ID",
      /** Includes content field. */
      CONTENT = "CONTENT",
      /** Includes rich content field. */
      RICH_CONTENT = "RICH_CONTENT",
      /** Includes draft post translations when present. */
      TRANSLATIONS = "TRANSLATIONS",
      /** If the user has not set excerpt, returns the one autogenerated from content. */
      GENERATED_EXCERPT = "GENERATED_EXCERPT"
  }
  interface CreateDraftPostResponse {
      /** Created draft post info. */
      draftPost?: DraftPost;
  }
  interface BulkCreateDraftPostsRequest {
      /** Draft posts to create. */
      draftPosts: DraftPost[];
      /**
       * Should publish after creation.
       * @internal
       */
      shouldPublish?: boolean;
      /** Whether the draft post should be published after creation. */
      publish?: boolean;
      /**
       * Save type.
       * @internal
       */
      saveType?: Type;
      /**
       * Field mask of fields to be used for draft post creation.
       * @internal
       */
      fieldMask?: string[];
      /** Whether to return the full created draft post entities in the response. */
      returnFullEntity?: boolean;
      /**
       * List of draft post fields to be included if entities are present in the response.
       * @internal
       */
      fieldsToInclude?: Field$1[];
      /**
       * List of draft post fields to be included in the response if the entities are present.
       * Base default fieldset returns all core draft post properties (all properties that are not a supported fieldset value).
       * For example,  when `URL` fieldset is selected, returned draft post will include the set of base properties and the draft post's preview url.
       */
      fieldsets?: Field$1[];
  }
  interface BulkCreateDraftPostsResponse {
      /** Draft posts created by bulk action. */
      results?: BulkDraftPostResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata$1;
  }
  interface BulkDraftPostResult {
      /** Bulk actions metadata for draft post. */
      itemMetadata?: ItemMetadata$1;
      /** Optional full draft post. */
      item?: DraftPost;
  }
  interface ItemMetadata$1 {
      /** Item ID. Should always be available, unless it's impossible (for example, when failing to create an item). */
      _id?: string | null;
      /** Index of the item within the request array. Allows for correlation between request and response items. */
      originalIndex?: number;
      /** Whether the requested action was successful for this item. When `false`, the `error` field is populated. */
      success?: boolean;
      /** Details about the error in case of failure. */
      error?: ApplicationError$1;
  }
  interface ApplicationError$1 {
      /** Error code. */
      code?: string;
      /** Description of the error. */
      description?: string;
      /** Data related to the error. */
      data?: Record<string, any> | null;
  }
  interface BulkActionMetadata$1 {
      /** Number of items that were successfully processed. */
      totalSuccesses?: number;
      /** Number of items that couldn't be processed. */
      totalFailures?: number;
      /** Number of failures without details because detailed failure threshold was exceeded. */
      undetailedFailures?: number;
  }
  interface BulkUpdateDraftPostsRequest {
      /** Draft posts to update. */
      draftPosts?: MaskedDraftPosts[];
      /**
       * Action to perform on the posts.
       *
       * - `UPDATE`: Update the draft post.
       * - `UPDATE_PUBLISH`: Update and publish the draft post.
       * - `UPDATE_SCHEDULE`: Update the draft post and schedule a publish date.
       * - `UPDATE_REVERT_TO_DRAFT`: Update the post and revert it to a draft post.
       * - `UPDATE_CANCEL_SCHEDULE`: Update the draft post and cancel the scheduled publish date.
       * - `UPDATE_REJECT`: Update and reject the draft post.
       * - `UPDATE_PUBLICATION`: Update a published post. This creates and updates a draft version of the post. The original post is still published.
       *
       * Default: `UPDATE`
       */
      action?: Action;
      /** Posts' scheduled publish date when `action` is set to `UPDATE_SCHEDULE`. */
      scheduledPublishDate?: Date;
      /**
       * Save type.
       * @internal
       */
      saveType?: Type;
      /** Whether to return the full updated draft post entities in the response. */
      returnFullEntity?: boolean;
      /**
       * List of additional draft post fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the draft post's base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the draft post's base fields are returned.
       */
      fieldsets?: Field$1[];
  }
  interface MaskedDraftPosts {
      /** Draft post info. */
      draftPost?: DraftPost;
      /**
       * Field mask of fields to update.
       * @internal
       */
      fieldMask?: string[];
  }
  enum Action {
      /** Update draft post properties. */
      UPDATE = "UPDATE",
      /** Update and publish draft post. */
      UPDATE_PUBLISH = "UPDATE_PUBLISH",
      /** Update and schedule draft post. */
      UPDATE_SCHEDULE = "UPDATE_SCHEDULE",
      /** Update and revert to draft a published post. */
      UPDATE_REVERT_TO_DRAFT = "UPDATE_REVERT_TO_DRAFT",
      /** Update draft and cancel post scheduling. */
      UPDATE_CANCEL_SCHEDULE = "UPDATE_CANCEL_SCHEDULE",
      /** Update and reject draft post in moderation. */
      UPDATE_REJECT = "UPDATE_REJECT",
      /** Update published draft post. */
      UPDATE_PUBLICATION = "UPDATE_PUBLICATION"
  }
  interface BulkUpdateDraftPostsResponse {
      /** Draft posts updated by bulk action. */
      results?: BulkDraftPostResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata$1;
  }
  interface DraftPostOwnerChanged {
      /**
       * Member ID of the draft post's owner before the change.
       * @internal
       */
      oldMemberId?: string;
      /**
       * Member ID of the draft post's owner after the change.
       * @internal
       */
      newMemberId?: string;
  }
  interface ListDeletedDraftPostsRequest {
      /**
       * Language filter.
       *
       * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       * If omitted, deleted draft posts in all languages are returned.
       */
      language?: string | null;
      /**
       * Sorting options.
       *
       * - `EDITING_DATE_ASC`: `editedDate` in ascending order.
       * - `EDITING_DATE_DESC`: `editedDate` in descending order.
       *
       * Default: `EDITING_DATE_DESCENDING`
       */
      sort?: GetDraftPostsSort;
      /** Pagination options. */
      paging?: BlogPaging;
      /**
       * List of draft post fields to be included in the response.
       * @internal
       */
      fieldsToInclude?: Field$1[];
      /**
       * List of additional draft post fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the draft post's base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the draft post's base fields are returned.
       */
      fieldsets?: Field$1[];
      /** Draft post ids. */
      draftPostIds?: string[];
  }
  enum GetDraftPostsSort {
      /** Sorting by editing date descending. */
      EDITING_DATE_DESC = "EDITING_DATE_DESC",
      /** Sorting by editing date ascending. */
      EDITING_DATE_ASC = "EDITING_DATE_ASC"
  }
  interface BlogPaging {
      /**
       * Number of items to skip in the current sort order.
       *
       *
       * Default: `0`
       */
      offset?: number;
      /**
       * Number of items to return.
       *
       *
       * Default:`50`
       */
      limit?: number;
      /** Pointer to the next or previous page in the list of results. */
      cursor?: string | null;
  }
  interface ListDeletedDraftPostsResponse {
      /** List of draft posts. */
      draftPosts?: DraftPost[];
      /** Details on the paged set of results returned. */
      metaData?: MetaData$1;
  }
  interface MetaData$1 {
      /** Number of items returned in this response. */
      count?: number;
      /** Requested offset. */
      offset?: number;
      /** Total number of items that match the query. */
      total?: number;
      /** Pointer to the next or previous page in the list of results. */
      cursor?: string | null;
  }
  interface GetDraftPostRequest {
      /** Draft post ID. */
      draftPostId: string;
      /**
       * List of draft post fields to be included if entities are present in the response.
       * @internal
       */
      fieldsToInclude?: Field$1[];
      /**
       * List of additional draft post fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the draft post's base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the draft post's base fields are returned.
       */
      fieldsets?: Field$1[];
  }
  interface GetDraftPostResponse {
      /** Draft post info. */
      draftPost?: DraftPost;
  }
  interface UpdateDraftPostContentRequest extends UpdateDraftPostContentRequestDraftContentOneOf {
      /** DraftJs content to update. */
      content?: string;
      /** Draft post rich content. */
      richContent?: RichContent;
      /** Draft post ID. */
      draftPostId: string;
      /** Change origin. */
      changeOrigin?: Origin;
      /**
       * List of draft post fields to be included in the response.
       * @internal
       */
      fieldsToInclude?: Field$1[];
      /**
       * List of draft post fields to be included if entities are present in the response.
       * Base fieldset, which is default, will return all core draft post properties.
       * Example: When URL fieldset is selected, returned draft post will have a set of base properties and draft post preview url.
       */
      fieldsets?: Field$1[];
  }
  /** @oneof */
  interface UpdateDraftPostContentRequestDraftContentOneOf {
      /** DraftJs content to update. */
      content?: string;
      /** Draft post rich content. */
      richContent?: RichContent;
  }
  interface UpdateDraftPostContentResponse {
      /** Updated draft post info. */
      draftPost?: DraftPost;
  }
  interface UpdateDraftPostRequest {
      /** Draft post to update. */
      draftPost: DraftPost;
      /**
       * Field mask of fields to update.
       * @internal
       */
      fieldMask?: string[];
      /**
       * Should publish after update.
       * @internal
       */
      shouldPublish?: boolean;
      /**
       * Save type.
       * @internal
       */
      saveType?: Type;
      /**
       * List of draft post fields to be included in the response.
       * @internal
       */
      fieldsToInclude?: Field$1[];
      /**
       * Action to perform on the post.
       *
       * - `UPDATE`: Update the draft post.
       * - `UPDATE_PUBLISH`: Update and publish a draft post.
       * - `UPDATE_SCHEDULE`: Update the draft post and schedule a publish date.
       * - `UPDATE_REVERT_TO_DRAFT`: Update the post and revert it to draft.
       * - `UPDATE_CANCEL_SCHEDULE`: Update the draft post and cancel the scheduled publish date.
       * - `UPDATE_REJECT`: Update and reject draft post.
       * - `UPDATE_PUBLICATION`: Update a post that's already been published. This creates and updates a draft version of the post. The original post is still published.
       *
       * Default: `UPDATE`
       */
      action?: Action;
      /** Post publish schedule date if `action` is set to `UPDATE_SCHEDULE`. */
      scheduledPublishDate?: Date;
      /**
       * List of additional draft post fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the draft post's base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the draft post's base fields are returned.
       */
      fieldsets?: Field$1[];
  }
  interface UpdateDraftPostResponse {
      /** Updated draft post info. */
      draftPost?: DraftPost;
  }
  interface DeleteDraftPostRequest {
      /** Draft post ID. */
      draftPostId: string;
      /**
       * Whether to bypass the trash bin and delete the post permanently.
       *
       * Default: `false`
       */
      permanent?: boolean;
  }
  interface DeleteDraftPostResponse {
  }
  interface RemoveFromTrashBinRequest {
      /** Draft post ID. */
      draftPostId: string;
  }
  interface RemoveFromTrashBinResponse {
  }
  interface BulkDeleteDraftPostsRequest {
      /** Post IDs. */
      postIds: string[];
      /** Should delete bypassing the trash-bin. */
      permanent?: boolean;
  }
  interface BulkDeleteDraftPostsResponse {
      /** Bulk action results. */
      results?: BulkDraftPostResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata$1;
  }
  interface ListDraftPostsRequest {
      /**
       * Draft post status filter.
       *
       * If omitted, draft posts with all statuses are returned.
       * `IN_MODERATION` is deprecated, use `IN_REVIEW` instead.
       */
      status?: Status;
      /**
       * Language filter.
       *
       * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       * If omitted, draft posts in all languages are returned.
       */
      language?: string | null;
      /**
       * Sort options.
       *
       * - `EDITING_DATE_ASC`: `editedDate` in ascending order.
       * - `EDITING_DATE_DESC`: `editedDate` in descending order.
       *
       * Default: `EDITING_DATE_DESCENDING`
       */
      sort?: GetDraftPostsSort;
      /** Pagination options. */
      paging?: BlogPaging;
      /**
       * List of draft post fields to be included in the response.
       * @internal
       */
      fieldsToInclude?: Field$1[];
      /**
       * List of additional draft post fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the draft post's base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the draft post's base fields are returned.
       */
      fieldsets?: Field$1[];
  }
  interface ListDraftPostsResponse {
      /** List of draft posts. */
      draftPosts?: DraftPost[];
      /** Details on the paged set of results returned. */
      metaData?: MetaData$1;
  }
  interface GetDeletedDraftPostRequest {
      /** Draft post ID. */
      draftPostId: string;
  }
  interface GetDeletedDraftPostResponse {
      /** Draft post info. */
      draftPost?: DraftPost;
  }
  interface RestoreFromTrashBinRequest {
      /** Draft post ID. */
      draftPostId: string;
  }
  interface RestoreFromTrashBinResponse {
      /** Restored draft post info. */
      draftPost?: DraftPost;
  }
  interface QueryDraftPostsRequest {
      /**
       * Pagination options.
       * @internal
       */
      paging?: BlogPaging;
      /**
       * Filter object.
       * For a detailed list of supported filters, see [Field Support for Filtering and Sorting](https://dev.wix.com/api/rest/wix-blog/blog/filter-and-sort).
       * @internal
       */
      filter?: Record<string, any> | null;
      /**
       * Sorting options. For a list of sortable fields, see [Field Support for Filtering and Sorting](https://dev.wix.com/api/rest/wix-blog/blog/filter-and-sort).
       * @internal
       */
      sort?: Sorting$1[];
      /**
       * List of draft post fields to be included in the response.
       * @internal
       */
      fieldsToInclude?: Field$1[];
      /**
       * List of additional draft post fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the draft post's base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the draft post's base fields are returned.
       */
      fieldsets?: Field$1[];
      /** Query options. */
      query?: PlatformQuery$1;
  }
  interface Sorting$1 {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
      order?: SortOrder$1;
      /**
       * When `field_name` is a property of repeated field that is marked as `MATCH_ITEMS` and sort should be done by
       * a specific element from a collection, filter can/should be provided to ensure correct sort value is picked.
       *
       * If multiple filters are provided, they are combined with AND operator.
       *
       * Example:
       * Given we have document like {"id": "1", "nestedField": [{"price": 10, "region": "EU"}, {"price": 20, "region": "US"}]}
       * and `nestedField` is marked as `MATCH_ITEMS`, to ensure that sorting is done by correct region, filter should be
       * { fieldName: "nestedField.price", "select_items_by": [{"nestedField.region": "US"}] }
       * @internal
       */
      selectItemsBy?: Record<string, any>[] | null;
  }
  enum SortOrder$1 {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface PlatformQuery$1 extends PlatformQueryPagingMethodOneOf$1 {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$1;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$1;
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`
       * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
       */
      filter?: Record<string, any> | null;
      /**
       * Sort object in the following format:
       * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
       */
      sort?: Sorting$1[];
  }
  /** @oneof */
  interface PlatformQueryPagingMethodOneOf$1 {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$1;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$1;
  }
  interface Paging$1 {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface CursorPaging$1 {
      /** Number of items to load. */
      limit?: number | null;
      /**
       * Pointer to the next or previous page in the list of results.
       *
       * You can get the relevant cursor token
       * from the `pagingMetadata` object in the previous call's response.
       * Not relevant for the first request.
       */
      cursor?: string | null;
  }
  interface QueryDraftPostsResponse {
      /** List of posts. */
      draftPosts?: DraftPost[];
      /**
       * __Deprecated.__ Use `pagingMetadata` instead.
       * This property will be removed on June 30, 2023.
       *
       * Details on the paged set of results returned.
       */
      metaData?: MetaData$1;
      /** Details on the paged set of results returned. */
      pagingMetadata?: PagingMetadataV2$1;
  }
  interface PagingMetadataV2$1 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      offset?: number | null;
      /** Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set. */
      total?: number | null;
      /** Flag that indicates the server failed to calculate the `total` field. */
      tooManyToCount?: boolean | null;
      /** Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used. */
      cursors?: Cursors$1;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       * @internal
       */
      hasNext?: boolean | null;
  }
  interface Cursors$1 {
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  interface PublishDraftPostRequest {
      /** Draft post ID. */
      draftPostId: string;
  }
  interface PublishDraftPostResponse {
      /** Published post ID. */
      postId?: string;
  }
  interface UnpublishPostRequest {
      /** Draft post ID. */
      draftPostId: string;
  }
  interface UnpublishPostResponse {
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
  interface MessageEnvelope$1 {
      /** App instance ID. */
      instanceId?: string | null;
      /** Event type. */
      eventType?: string;
      /** The identification type and identity data. */
      identity?: IdentificationData$1;
      /** Stringify payload. */
      data?: string;
  }
  interface IdentificationData$1 extends IdentificationDataIdOneOf$1 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
      /** @readonly */
      identityType?: WebhookIdentityType$1;
  }
  /** @oneof */
  interface IdentificationDataIdOneOf$1 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
  }
  enum WebhookIdentityType$1 {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  interface GetDraftPostTotalsRequest {
      /**
       * Group results by fields (defaults to grouping by status).
       * If, for example, grouping by language is passed, language values in response will be filled.
       * If, for example, grouping by language is not passed, null values will be filled in language field in response.
       */
      groupBy?: TotalDraftPostsGroupingField[];
      /** Optional language filter by provided language code. Useful in multilingual context. */
      language?: string | null;
  }
  enum TotalDraftPostsGroupingField {
      /** Groups results by status. */
      STATUS = "STATUS",
      /** Groups results by language. */
      LANGUAGE = "LANGUAGE"
  }
  interface GetDraftPostTotalsResponse {
      /** Draft post totals. */
      totalDraftPosts?: TotalDraftPosts[];
  }
  interface TotalDraftPosts {
      /** Draft post totals in that group. */
      total?: number;
      /** Draft post status (only has value when grouping by status, otherwise null). */
      status?: Status;
      /** Draft post language code (only has value when grouping by language, otherwise null). */
      language?: string | null;
  }
  interface TranslateCategoryRequest {
      /** Source category ID */
      categoryId: string;
      /** Translation language */
      language: string;
  }
  interface TranslateCategoryResponse {
      /** Translated category */
      category?: Category;
      /** Other translations of returned category */
      translations?: CategoryTranslation[];
  }
  interface Category {
      /**
       * Category ID.
       * @readonly
       */
      _id?: string;
      /** Category label. Displayed in the Category Menu. */
      label?: string;
      /**
       * Number of posts in the category.
       * @readonly
       */
      postCount?: number;
      /**
       * Category URL.
       * @readonly
       */
      url?: string;
      /** Category description. */
      description?: string | null;
      /** Category title. */
      title?: string;
      /**
       * __Deprecated.__ Use `coverImage` instead.
       * This property will be removed on June 30, 2023.
       *
       * Category cover image or video.
       */
      coverMedia?: CoverMedia;
      /**
       * Reserved for internal use.
       * @readonly
       */
      oldRank?: number;
      /**
       * __Deprecated.__ Use `displayPosition` instead.
       * This property will be removed on June 30, 2023.
       *
       * Category position in sequence.
       */
      rank?: number | null;
      /**
       * Category position in sequence. Categories with a lower display position are displayed first. Categories with a position of `-1` appear at the end of the sequence.
       *
       * Default: `-1`
       */
      displayPosition?: number | null;
      /** ID of the category's translations. All translations of a single category share the same `translationId`. */
      translationId?: string | null;
      /**
       * Category language.
       *
       * Two-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       */
      language?: string | null;
      /** Category slug. For example, `'category-slug'`. */
      slug?: string;
      /**
       * Reserved for internal use.
       * @readonly
       */
      internalId?: string | null;
      /** SEO data. */
      seoData?: SeoSchema$1;
      /** Category cover image. */
      coverImage?: string;
      /**
       * Category translations.
       * @internal
       * @readonly
       */
      translations?: CategoryTranslation[];
      /**
       * Date and time the Category was last updated.
       * @readonly
       */
      _updatedDate?: Date;
  }
  interface CategoryTranslation {
      /** Category ID */
      _id?: string;
      /** Label which is presented in the categories menu on site */
      label?: string | null;
      /** Language of the category */
      language?: string | null;
      /** Url of this category page */
      url?: string;
  }
  interface TranslateDraftRequest {
      /** Source post or draft ID */
      postId: string;
      /** Translation language */
      language: string;
      /**
       * List of draft post fields to be included if entities are present in the response.
       * Base fieldset, which is default, will return all core draft post properties.
       * Example: When URL fieldset is selected, returned draft post will have a set of base properties and draft post preview url.
       */
      fieldsets?: Field$1[];
      /**
       * Performs automatic translation of the title and the content of the draft post to the target language.
       * @internal
       */
      useAutoTranslation?: boolean;
  }
  interface TranslateDraftResponse {
      /** Draft post. */
      draftPost?: DraftPost;
  }
  interface IsDraftPostAutoTranslatableRequest {
      /** Source post or draft ID. */
      draftPostId: string;
  }
  interface IsDraftPostAutoTranslatableResponse {
      /** Source draft post ID. */
      draftPostId?: string;
      /** Indicates if enough machine translation credits are available for the draft post translation. */
      translatable?: boolean;
      /** Draft post title word count. */
      titleWordCount?: number;
      /** Draft post content word count. */
      contentWordCount?: number;
      /** Word credits available for auto translation. */
      availableAutoTranslateWords?: number;
      /** Word credits available after auto translation would be done. */
      availableAutoTranslateWordsAfter?: number;
  }
  interface UpdateDraftPostLanguageRequest {
      /** Source draft post ID */
      postId: string;
      /** New language to replace to */
      language: string;
      /**
       * List of draft post fields to be included if entities are present in the response.
       * Base fieldset, which is default, will return all core draft post properties.
       * Example: When URL fieldset is selected, returned draft post will have a set of base properties and draft post preview url.
       */
      fieldsets?: Field$1[];
  }
  interface UpdateDraftPostLanguageResponse {
      /** Draft post */
      draftPost?: DraftPost;
  }
  interface BulkUpdateDraftPostLanguageRequest {
      /** Source post or draft IDs */
      ids?: string[];
      /** New language to replace to */
      language: string;
      /** Should full draft post be returned */
      returnFullEntity?: boolean;
      /**
       * List of draft post fields to be included if entities are present in the response.
       * Base fieldset, which is default, will return all core draft post properties.
       * Example: When URL fieldset is selected, returned draft post will have a set of base properties and draft post preview url.
       */
      fieldsets?: Field$1[];
  }
  interface BulkUpdateDraftPostLanguageResponse {
      /** Bulk action results */
      results?: BulkDraftPostResult[];
      /** Bulk action metadata */
      bulkActionMetadata?: BulkActionMetadata$1;
  }
  interface GetPostAmountsByLanguageRequest {
      /** Post status to filter by */
      status: string;
  }
  interface GetPostAmountsByLanguageResponse {
      /** Post amounts by language */
      postAmountsByLanguage?: PostAmountByLanguage[];
  }
  interface PostAmountByLanguage {
      /** Post language code */
      languageCode?: string;
      /** Language flag */
      flag?: string;
      /** Post amount in that language */
      postAmount?: number;
  }
  interface BulkRevertToUnpublishedRequest {
      /** Source post IDs. */
      postIds: string[];
      /** Should full draft post be returned. */
      returnFullEntity?: boolean;
  }
  interface BulkRevertToUnpublishedResponse {
      /** Bulk action results. */
      results?: BulkDraftPostResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata$1;
  }
  interface BulkRejectDraftPostRequest {
      /** Source post IDs. */
      postIds: string[];
      /** Should full draft post be returned. */
      returnFullEntity?: boolean;
  }
  interface BulkRejectDraftPostResponse {
      /** Bulk action results. */
      results?: BulkDraftPostResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata$1;
  }
  interface RevertToUnpublishedRequest {
      /** Source post ID. */
      postId: string;
      /**
       * List of draft post fields to be included in the response.
       * @internal
       */
      fieldsToInclude?: Field$1[];
      /**
       * List of draft post fields to be included if entities are present in the response.
       * Base fieldset, which is default, will return all core draft post properties.
       * Example: When URL fieldset is selected, returned draft post will have a set of base properties and draft post preview url.
       */
      fieldsets?: Field$1[];
  }
  interface RevertToUnpublishedResponse {
      /** Updated post draft. */
      draftPost?: DraftPost;
  }
  interface RejectDraftPostRequest {
      /** Source post ID. */
      postId: string;
      /**
       * List of draft post fields to be included in the response.
       * @internal
       */
      fieldsToInclude?: Field$1[];
      /**
       * List of draft post fields to be included if entities are present in the response.
       * Base fieldset, which is default, will return all core draft post properties.
       * Example: When URL fieldset is selected, returned draft post will have a set of base properties and draft post preview url.
       */
      fieldsets?: Field$1[];
  }
  interface RejectDraftPostResponse {
      /** Draft post. */
      draftPost?: DraftPost;
  }
  interface ApproveDraftPostRequest {
      /** Source post ID. */
      postId: string;
      /** Scheduled publish date if should be not immediately published. */
      scheduledPublishDate?: string | null;
      /**
       * List of draft post fields to be included in the response.
       * @internal
       */
      fieldsToInclude?: Field$1[];
      /**
       * List of draft post fields to be included if entities are present in the response.
       * Base fieldset, which is default, will return all core draft post properties.
       * Example: When URL fieldset is selected, returned draft post will have a set of base properties and draft post preview url.
       */
      fieldsets?: Field$1[];
  }
  interface ApproveDraftPostResponse {
      /** Updated post draft. */
      draftPost?: DraftPost;
  }
  interface MarkPostAsInModerationRequest {
      /** Source post ID. */
      postId: string;
      /**
       * List of draft post fields to be included in the response.
       * @internal
       */
      fieldsToInclude?: Field$1[];
      /**
       * List of draft post fields to be included if entities are present in the response.
       * Base fieldset, which is default, will return all core draft post properties.
       * Example: When URL fieldset is selected, returned draft post will have a set of base properties and draft post preview url.
       */
      fieldsets?: Field$1[];
  }
  interface MarkPostAsInModerationResponse {
      /** Updated post draft. */
      draftPost?: DraftPost;
  }
  /**
   * Creates a draft post.
   *
   * The draft post's `memberId` is required for third-party apps.
   * @param draftPost - Draft post to create.
   * @public
   * @requiredField draftPost
   * @requiredField draftPost.title
   * @param options - Options for creating a draft post.
   * @adminMethod
   */
  function createDraftPost(draftPost: DraftPost, options?: CreateDraftPostOptions): Promise<CreateDraftPostResponse>;
  interface CreateDraftPostOptions {
      /**
       * Should publish after creation.
       * @internal
       */
      shouldPublish?: boolean;
      /**
       * Whether the draft post should be published on creation.
       *
       * Default: `false`
       */
      publish?: boolean;
      /**
       * Save type.
       * @internal
       */
      saveType?: Type;
      /**
       * Field mask of fields to be used for draft post creation.
       * @internal
       */
      fieldMask?: string[];
      /**
       * List of draft post fields to be included in the response.
       * @internal
       */
      fieldsToInclude?: Field$1[];
      /**
       * List of additional draft post fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the draft post's base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the draft post's base fields are returned.
       */
      fieldsets?: Field$1[];
  }
  /**
   * Creates multiple draft posts.
   * @param draftPosts - Draft posts to create.
   * @public
   * @requiredField draftPosts
   * @requiredField draftPosts.title
   * @param options - Options for creating multiple draft posts.
   */
  function bulkCreateDraftPosts(draftPosts: DraftPost[], options?: BulkCreateDraftPostsOptions): Promise<BulkCreateDraftPostsResponse>;
  interface BulkCreateDraftPostsOptions {
      /**
       * Should publish after creation.
       * @internal
       */
      shouldPublish?: boolean;
      /** Whether the draft post should be published after creation. */
      publish?: boolean;
      /**
       * Save type.
       * @internal
       */
      saveType?: Type;
      /**
       * Field mask of fields to be used for draft post creation.
       * @internal
       */
      fieldMask?: string[];
      /** Whether to return the full created draft post entities in the response. */
      returnFullEntity?: boolean;
      /**
       * List of draft post fields to be included if entities are present in the response.
       * @internal
       */
      fieldsToInclude?: Field$1[];
      /**
       * List of draft post fields to be included in the response if the entities are present.
       * Base default fieldset returns all core draft post properties (all properties that are not a supported fieldset value).
       * For example,  when `URL` fieldset is selected, returned draft post will include the set of base properties and the draft post's preview url.
       */
      fieldsets?: Field$1[];
  }
  /**
   * Updates multiple draft posts.
   * @public
   * @requiredField options.draftPosts.draftPost
   * @requiredField options.draftPosts.draftPost._id
   * @param options - Options for updating multiple draft posts.
   */
  function bulkUpdateDraftPosts(options?: BulkUpdateDraftPostsOptions): Promise<BulkUpdateDraftPostsResponse>;
  interface BulkUpdateDraftPostsOptions {
      /** Draft posts to update. */
      draftPosts?: MaskedDraftPosts[];
      /**
       * Action to perform on the posts.
       *
       * - `UPDATE`: Update the draft post.
       * - `UPDATE_PUBLISH`: Update and publish the draft post.
       * - `UPDATE_SCHEDULE`: Update the draft post and schedule a publish date.
       * - `UPDATE_REVERT_TO_DRAFT`: Update the post and revert it to a draft post.
       * - `UPDATE_CANCEL_SCHEDULE`: Update the draft post and cancel the scheduled publish date.
       * - `UPDATE_REJECT`: Update and reject the draft post.
       * - `UPDATE_PUBLICATION`: Update a published post. This creates and updates a draft version of the post. The original post is still published.
       *
       * Default: `UPDATE`
       */
      action?: Action;
      /** Posts' scheduled publish date when `action` is set to `UPDATE_SCHEDULE`. */
      scheduledPublishDate?: Date;
      /**
       * Save type.
       * @internal
       */
      saveType?: Type;
      /** Whether to return the full updated draft post entities in the response. */
      returnFullEntity?: boolean;
      /**
       * List of additional draft post fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the draft post's base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the draft post's base fields are returned.
       */
      fieldsets?: Field$1[];
  }
  /**
   * Retrieves a list of up to 100 deleted draft posts.
   *
   * List Deleted Draft Posts runs with these defaults, which you can override:
   * - `editedDate` is sorted in descending order. In this case,`editedDate` implies the date the post was deleted.
   * - `paging.limit` is `50`.
   * - `paging.offset` is `0`.
   * @public
   * @param options - Options for listing deleted draft posts.
   * @adminMethod
   */
  function listDeletedDraftPosts(options?: ListDeletedDraftPostsOptions): Promise<ListDeletedDraftPostsResponse>;
  interface ListDeletedDraftPostsOptions {
      /**
       * Language filter.
       *
       * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       * If omitted, deleted draft posts in all languages are returned.
       */
      language?: string | null;
      /**
       * Sorting options.
       *
       * - `EDITING_DATE_ASC`: `editedDate` in ascending order.
       * - `EDITING_DATE_DESC`: `editedDate` in descending order.
       *
       * Default: `EDITING_DATE_DESCENDING`
       */
      sort?: GetDraftPostsSort;
      /** Pagination options. */
      paging?: BlogPaging;
      /**
       * List of draft post fields to be included in the response.
       * @internal
       */
      fieldsToInclude?: Field$1[];
      /**
       * List of additional draft post fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the draft post's base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the draft post's base fields are returned.
       */
      fieldsets?: Field$1[];
      /** Draft post ids. */
      draftPostIds?: string[];
  }
  /**
   * Gets a draft post by the provided ID.
   *
   * Uses the provided `draftPostId` to retrieve a draft post.
   * @param draftPostId - Draft post ID.
   * @public
   * @requiredField draftPostId
   * @param options - Options for getting a draft post.
   * @adminMethod
   */
  function getDraftPost(draftPostId: string, options?: GetDraftPostOptions): Promise<GetDraftPostResponse>;
  interface GetDraftPostOptions {
      /**
       * List of draft post fields to be included if entities are present in the response.
       * @internal
       */
      fieldsToInclude?: Field$1[];
      /**
       * List of additional draft post fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the draft post's base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the draft post's base fields are returned.
       */
      fieldsets?: Field$1[];
  }
  /**
   * Updates content of a specified draft post.
   * @param draftPostId - Draft post ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField draftPostId
   * @adminMethod
   */
  function updateDraftPostContent(draftPostId: string, options?: UpdateDraftPostContentOptions): Promise<UpdateDraftPostContentResponse>;
  interface UpdateDraftPostContentOptions extends UpdateDraftPostContentRequestDraftContentOneOf {
      /** DraftJs content to update. */
      content?: string;
      /** Draft post rich content. */
      richContent?: RichContent;
      /** Change origin. */
      changeOrigin?: Origin;
      /**
       * List of draft post fields to be included in the response.
       * @internal
       */
      fieldsToInclude?: Field$1[];
      /**
       * List of draft post fields to be included if entities are present in the response.
       * Base fieldset, which is default, will return all core draft post properties.
       * Example: When URL fieldset is selected, returned draft post will have a set of base properties and draft post preview url.
       */
      fieldsets?: Field$1[];
  }
  /**
   * Updates a draft post.
   * @param _id - Draft post ID.
   * @public
   * @requiredField _id
   * @requiredField draftPost
   * @param options - Options for updating a draft post.
   * @param draftPost - Draft Post info.
   */
  function updateDraftPost(_id: string, draftPost: UpdateDraftPost, options?: UpdateDraftPostOptions): Promise<UpdateDraftPostResponse>;
  interface UpdateDraftPost {
      /**
       * Draft post ID.
       * @readonly
       */
      _id?: string;
      /** Draft post title. */
      title?: string;
      /**
       * Draft post excerpt.
       *
       * If no excerpt has been manually set, an excerpt is automatically generated from the post's text.
       * This can be retrieved using the `GENERATED_EXCERPT` fieldset.
       */
      excerpt?: string | null;
      /** Whether the draft post is marked as featured. */
      featured?: boolean | null;
      /** Category IDs of the draft post. */
      categoryIds?: string[];
      /**
       * __Deprecated.__ Use `media` instead.
       * This property will be removed on June 6, 2023.
       *
       * Draft post cover media.
       * @internal
       */
      coverMedia?: CoverMedia;
      /** Draft post owner's member ID. */
      memberId?: string | null;
      /** Hashtags in the draft post. */
      hashtags?: string[];
      /** Whether commenting on the draft post is enabled. */
      commentingEnabled?: boolean | null;
      /**
       * Estimated reading time of the draft post (calculated automatically).
       * @readonly
       */
      minutesToRead?: number;
      /** Image placed at the top of the blog page. */
      heroImage?: string;
      /** Tag IDs the draft post is tagged with. */
      tagIds?: string[];
      /** IDs of posts related to this draft post. */
      relatedPostIds?: string[];
      /** Pricing plan IDs. Only relevant if a post is assigned to a specific pricing plan. */
      pricingPlanIds?: string[];
      /**
       * ID of the draft post's translations.
       *
       * All translations of a single post share the same `translationId`.
       * Available only if the [Multilingual](https://support.wix.com/en/article/wix-multilingual-an-overview) app is installed.
       */
      translationId?: string | null;
      /**
       * Language the draft post is written in.
       *
       * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       */
      language?: string | null;
      /**
       * Reserved for internal use.
       * @readonly
       */
      changeOrigin?: Origin;
      /**
       * Reserved for internal use.
       * @readonly
       */
      contentId?: string | null;
      /** Reserved for internal use. */
      editingSessionId?: string | null;
      /** Draft post rich content. */
      richContent?: RichContent;
      /**
       * Status of the draft post.
       * @readonly
       */
      status?: Status;
      /** Details of the draft post in review. Only relevant to posts submitted by guest writers. */
      moderationDetails?: ModerationDetails;
      /**
       * Reserved for internal use.
       * @readonly
       */
      mostRecentContributorId?: string | null;
      /**
       * Indicates if there are changes made to the draft post that have not yet been published.
       * @readonly
       */
      hasUnpublishedChanges?: boolean;
      /**
       * Date the draft post was last edited.
       * @readonly
       */
      editedDate?: Date;
      /**
       * Date the draft post is scheduled to be published.
       * @readonly
       */
      scheduledPublishDate?: Date;
      /** Reserved for internal use. */
      content?: Record<string, any> | null;
      /** Date the post was first published. */
      firstPublishedDate?: Date;
      /** SEO data. */
      seoData?: SeoSchema$1;
      /**
       * @internal Deprecated.
       * @internal Deprecated. */
      paidContentParagraph?: number | null;
      /**
       * Reserved for internal use.
       * @readonly
       */
      slugs?: string[];
      /**
       * Draft post URL preview. What the URL will look like once the post is published.
       * @readonly
       */
      url?: string;
      /**
       * Date the draft post was first created.
       * @readonly
       */
      _createdDate?: Date;
      /** SEO slug. */
      seoSlug?: string | null;
      /** Post cover media. */
      media?: Media;
      /** Number of paragraphs to display in a paid content preview for non-paying users. */
      previewTextParagraph?: number | null;
      /**
       * List of the post's translated posts.
       * @internal
       * @readonly
       */
      translations?: DraftPostTranslation[];
      /**
       * Reserved for internal use, not included in base response.
       * @internal
       */
      originPostId?: string | null;
      /**
       * Reserved for internal use, not included in base response.
       * @internal
       */
      originPostInstanceId?: string | null;
      /**
       * Reserved for internal use.
       * @readonly
       */
      internalId?: string | null;
  }
  interface UpdateDraftPostOptions {
      /**
       * Field mask of fields to update.
       * @internal
       */
      fieldMask?: string[];
      /**
       * Should publish after update.
       * @internal
       */
      shouldPublish?: boolean;
      /**
       * Save type.
       * @internal
       */
      saveType?: Type;
      /**
       * List of draft post fields to be included in the response.
       * @internal
       */
      fieldsToInclude?: Field$1[];
      /**
       * Action to perform on the post.
       *
       * - `UPDATE`: Update the draft post.
       * - `UPDATE_PUBLISH`: Update and publish a draft post.
       * - `UPDATE_SCHEDULE`: Update the draft post and schedule a publish date.
       * - `UPDATE_REVERT_TO_DRAFT`: Update the post and revert it to draft.
       * - `UPDATE_CANCEL_SCHEDULE`: Update the draft post and cancel the scheduled publish date.
       * - `UPDATE_REJECT`: Update and reject draft post.
       * - `UPDATE_PUBLICATION`: Update a post that's already been published. This creates and updates a draft version of the post. The original post is still published.
       *
       * Default: `UPDATE`
       */
      action?: Action;
      /** Post publish schedule date if `action` is set to `UPDATE_SCHEDULE`. */
      scheduledPublishDate?: Date;
      /**
       * List of additional draft post fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the draft post's base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the draft post's base fields are returned.
       */
      fieldsets?: Field$1[];
  }
  /**
   * Moves a draft post with the provided ID to the trash bin.
   * A published post can also be deleted by its provided `draftPostId`.
   *
   * The optional `permanent` field enables you to delete a post permanently, bypassing the trash bin. When a draft post is deleted this way, it can't be restored.
   * @param draftPostId - Draft post ID.
   * @public
   * @requiredField draftPostId
   * @param options - Options for deleting a draft post.
   * @adminMethod
   */
  function deleteDraftPost(draftPostId: string, options?: DeleteDraftPostOptions): Promise<void>;
  interface DeleteDraftPostOptions {
      /**
       * Whether to bypass the trash bin and delete the post permanently.
       *
       * Default: `false`
       */
      permanent?: boolean;
  }
  /**
   * Permanently deletes a draft post by the provided ID from the trash bin.
   *
   * Uses the provided `draftPostId` to permanently delete a draft post from the trash bin. This action is permanent and cannot be reversed.
   * @param draftPostId - Draft post ID.
   * @public
   * @requiredField draftPostId
   * @adminMethod
   */
  function removeFromTrashBin(draftPostId: string): Promise<void>;
  /**
   * Deletes multiple draft posts.
   * @param postIds - Post IDs.
   * @public
   * @requiredField postIds
   * @param options - Options for deleting multiple draft posts.
   * @adminMethod
   */
  function bulkDeleteDraftPosts(postIds: string[], options?: BulkDeleteDraftPostsOptions): Promise<BulkDeleteDraftPostsResponse>;
  interface BulkDeleteDraftPostsOptions {
      /** Should delete bypassing the trash-bin. */
      permanent?: boolean;
  }
  /**
   * Retrieves a list of up to 100 draft posts per request.
   *
   * List Draft Posts runs with these defaults, which you can override:
   * - `editedDate` is sorted in descending order.
   * - `paging.limit` is `50`.
   * - `paging.offset` is `0`.
   * @public
   * @param options - Options for listing multiple draft posts.
   * @adminMethod
   */
  function listDraftPosts(options?: ListDraftPostsOptions): Promise<ListDraftPostsResponse>;
  interface ListDraftPostsOptions {
      /**
       * Draft post status filter.
       *
       * If omitted, draft posts with all statuses are returned.
       * `IN_MODERATION` is deprecated, use `IN_REVIEW` instead.
       */
      status?: Status;
      /**
       * Language filter.
       *
       * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       * If omitted, draft posts in all languages are returned.
       */
      language?: string | null;
      /**
       * Sort options.
       *
       * - `EDITING_DATE_ASC`: `editedDate` in ascending order.
       * - `EDITING_DATE_DESC`: `editedDate` in descending order.
       *
       * Default: `EDITING_DATE_DESCENDING`
       */
      sort?: GetDraftPostsSort;
      /** Pagination options. */
      paging?: BlogPaging;
      /**
       * List of draft post fields to be included in the response.
       * @internal
       */
      fieldsToInclude?: Field$1[];
      /**
       * List of additional draft post fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the draft post's base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the draft post's base fields are returned.
       */
      fieldsets?: Field$1[];
  }
  /**
   * Gets a deleted draft post from the trash bin by the provided ID.
   *
   * Uses the provided `draftPostId` to retrieve a previously deleted draft post from the trash bin.
   * @param draftPostId - Draft post ID.
   * @public
   * @requiredField draftPostId
   * @adminMethod
   */
  function getDeletedDraftPost(draftPostId: string): Promise<GetDeletedDraftPostResponse>;
  /**
   * Restores a deleted draft post from the trash bin by the provided ID.
   *
   * Uses the `draftPostId` to restore a deleted draft post from the trash bin.
   * @param draftPostId - Draft post ID.
   * @public
   * @requiredField draftPostId
   * @adminMethod
   */
  function restoreFromTrashBin(draftPostId: string): Promise<RestoreFromTrashBinResponse>;
  /**
   * Retrieves a list of up to 100 draft posts, given the provided paging, filtering, and sorting.
   *
   * Query Draft Posts runs with these defaults, which you can override:
   * - `editedDate` is sorted in `DESC` order.
   * - `paging.limit` is `50`.
   * - `paging.offset` is `0`.
   * @public
   * @param options - Options for querying draft posts.
   * @adminMethod
   */
  function queryDraftPosts(options?: QueryDraftPostsOptions): DraftPostsQueryBuilder;
  interface QueryDraftPostsOptions {
      /**
       * Pagination options.
       * @internal
       */
      paging?: BlogPaging | undefined;
      /**
       * Filter object.
       * For a detailed list of supported filters, see [Field Support for Filtering and Sorting](https://dev.wix.com/api/rest/wix-blog/blog/filter-and-sort).
       * @internal
       */
      filter?: Record<string, any> | null | undefined;
      /**
       * Sorting options. For a list of sortable fields, see [Field Support for Filtering and Sorting](https://dev.wix.com/api/rest/wix-blog/blog/filter-and-sort).
       * @internal
       */
      sort?: Sorting$1[] | undefined;
      /**
       * List of draft post fields to be included in the response.
       * @internal
       */
      fieldsToInclude?: Field$1[] | undefined;
      /**
       * List of additional draft post fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the draft post's base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the draft post's base fields are returned.
       */
      fieldsets?: Field$1[] | undefined;
  }
  interface QueryCursorResult {
      cursors: Cursors$1;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface DraftPostsQueryResult extends QueryCursorResult {
      items: DraftPost[];
      query: DraftPostsQueryBuilder;
      next: () => Promise<DraftPostsQueryResult>;
      prev: () => Promise<DraftPostsQueryResult>;
  }
  interface DraftPostsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      eq: (propertyName: '_id' | 'title' | 'excerpt' | 'featured' | 'memberId' | 'commentingEnabled' | 'minutesToRead' | 'translationId' | 'language' | 'status' | 'hasUnpublishedChanges' | 'editedDate' | 'scheduledPublishDate', value: any) => DraftPostsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      ne: (propertyName: '_id' | 'title' | 'excerpt' | 'featured' | 'memberId' | 'commentingEnabled' | 'minutesToRead' | 'translationId' | 'language' | 'status' | 'hasUnpublishedChanges' | 'editedDate' | 'scheduledPublishDate', value: any) => DraftPostsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      ge: (propertyName: 'minutesToRead' | 'editedDate' | 'scheduledPublishDate', value: any) => DraftPostsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      gt: (propertyName: 'minutesToRead' | 'editedDate' | 'scheduledPublishDate', value: any) => DraftPostsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      le: (propertyName: 'minutesToRead' | 'editedDate' | 'scheduledPublishDate', value: any) => DraftPostsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      lt: (propertyName: 'minutesToRead' | 'editedDate' | 'scheduledPublishDate', value: any) => DraftPostsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       */
      startsWith: (propertyName: 'title' | 'excerpt', value: string) => DraftPostsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       */
      hasSome: (propertyName: '_id' | 'title' | 'excerpt' | 'categoryIds' | 'memberId' | 'hashtags' | 'tagIds' | 'pricingPlanIds' | 'language' | 'status', value: any[]) => DraftPostsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       */
      hasAll: (propertyName: 'categoryIds' | 'hashtags' | 'tagIds' | 'pricingPlanIds', value: any[]) => DraftPostsQueryBuilder;
      in: (propertyName: 'title' | 'excerpt' | 'minutesToRead' | 'translationId' | 'language' | 'status' | 'editedDate' | 'scheduledPublishDate', value: any) => DraftPostsQueryBuilder;
      exists: (propertyName: 'title' | 'excerpt' | 'translationId' | 'language' | 'status', value: boolean) => DraftPostsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments. */
      ascending: (...propertyNames: Array<'_id' | 'title' | 'excerpt' | 'featured' | 'commentingEnabled' | 'status' | 'hasUnpublishedChanges' | 'editedDate' | 'scheduledPublishDate'>) => DraftPostsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments. */
      descending: (...propertyNames: Array<'_id' | 'title' | 'excerpt' | 'featured' | 'commentingEnabled' | 'status' | 'hasUnpublishedChanges' | 'editedDate' | 'scheduledPublishDate'>) => DraftPostsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object. */
      limit: (limit: number) => DraftPostsQueryBuilder;
      /** @param cursor - A pointer to specific record */
      skipTo: (cursor: string) => DraftPostsQueryBuilder;
      find: () => Promise<DraftPostsQueryResult>;
  }
  /**
   * Publishes a specified draft post by ID. This creates a new post entity with the data from the draft post.
   *
   * If the specified draft post was already published, the published post will be updated with the latest values from the draft post entity.
   * @param draftPostId - Draft post ID.
   * @public
   * @requiredField draftPostId
   * @adminMethod
   */
  function publishDraftPost(draftPostId: string): Promise<PublishDraftPostResponse>;
  /**
   * Reverts published post back to draft post making it invisible for the users.
   * @param draftPostId - Draft post ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField draftPostId
   * @adminMethod
   */
  function unpublishPost(draftPostId: string): Promise<void>;
  /**
   * Gets draft post totals grouped by fields.
   * An example usage would be to group by status so one would know how many posts there are that are in PUBLISHED, UNPUBLISHED, DELETED, etc. statuses.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function getDraftPostTotals(options?: GetDraftPostTotalsOptions): Promise<GetDraftPostTotalsResponse>;
  interface GetDraftPostTotalsOptions {
      /**
       * Group results by fields (defaults to grouping by status).
       * If, for example, grouping by language is passed, language values in response will be filled.
       * If, for example, grouping by language is not passed, null values will be filled in language field in response.
       */
      groupBy?: TotalDraftPostsGroupingField[];
      /** Optional language filter by provided language code. Useful in multilingual context. */
      language?: string | null;
  }
  /**
   * Translates and returns translation of category for specified language.
   * @param categoryId - Source category ID
   * @param language - Translation language
   * @internal
   * @documentationMaturity preview
   * @requiredField categoryId
   * @requiredField language
   * @adminMethod
   */
  function translateCategory(categoryId: string, language: string): Promise<TranslateCategoryResponse>;
  /**
   * Creates and returns translation of a draft in specified language.
   * @param postId - Source post or draft ID
   * @param language - Translation language
   * @internal
   * @documentationMaturity preview
   * @requiredField language
   * @requiredField postId
   * @adminMethod
   */
  function translateDraft(postId: string, language: string, options?: TranslateDraftOptions): Promise<TranslateDraftResponse>;
  interface TranslateDraftOptions {
      /**
       * List of draft post fields to be included if entities are present in the response.
       * Base fieldset, which is default, will return all core draft post properties.
       * Example: When URL fieldset is selected, returned draft post will have a set of base properties and draft post preview url.
       */
      fieldsets?: Field$1[];
      /**
       * Performs automatic translation of the title and the content of the draft post to the target language.
       * @internal
       */
      useAutoTranslation?: boolean;
  }
  /**
   * Checks whether enough translation credits are available to auto translate a draft post.
   * @param draftPostId - Source post or draft ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField draftPostId
   * @adminMethod
   */
  function isDraftPostAutoTranslatable(draftPostId: string): Promise<IsDraftPostAutoTranslatableResponse>;
  /**
   * Updates draft post language and replaces its categories to the ones existing in specified language.
   * @param postId - Source draft post ID
   * @param language - New language to replace to
   * @internal
   * @documentationMaturity preview
   * @requiredField language
   * @requiredField postId
   * @adminMethod
   */
  function updateDraftPostLanguage(postId: string, language: string, options?: UpdateDraftPostLanguageOptions): Promise<UpdateDraftPostLanguageResponse>;
  interface UpdateDraftPostLanguageOptions {
      /**
       * List of draft post fields to be included if entities are present in the response.
       * Base fieldset, which is default, will return all core draft post properties.
       * Example: When URL fieldset is selected, returned draft post will have a set of base properties and draft post preview url.
       */
      fieldsets?: Field$1[];
  }
  /**
   * Bulk updates draft post language and replaces its categories to the ones existing in specified language.
   * @internal
   * @documentationMaturity preview
   * @requiredField options.language
   * @adminMethod
   */
  function bulkUpdateDraftPostLanguage(options?: BulkUpdateDraftPostLanguageOptions): Promise<BulkUpdateDraftPostLanguageResponse>;
  interface BulkUpdateDraftPostLanguageOptions {
      /** Source post or draft IDs */
      ids?: string[];
      /** New language to replace to */
      language: string;
      /** Should full draft post be returned */
      returnFullEntity?: boolean;
      /**
       * List of draft post fields to be included if entities are present in the response.
       * Base fieldset, which is default, will return all core draft post properties.
       * Example: When URL fieldset is selected, returned draft post will have a set of base properties and draft post preview url.
       */
      fieldsets?: Field$1[];
  }
  /**
   * Gets post amounts by each language in posts.
   * @param status - Post status to filter by
   * @internal
   * @documentationMaturity preview
   * @requiredField status
   * @adminMethod
   */
  function getPostAmountsByLanguage(status: string): Promise<GetPostAmountsByLanguageResponse>;
  /**
   * Reverts post status back from moderation to unpublished.
   * @param postIds - Source post IDs.
   * @internal
   * @documentationMaturity preview
   * @requiredField postIds
   * @adminMethod
   */
  function bulkRevertToUnpublished(postIds: string[], options?: BulkRevertToUnpublishedOptions): Promise<BulkRevertToUnpublishedResponse>;
  interface BulkRevertToUnpublishedOptions {
      /** Should full draft post be returned. */
      returnFullEntity?: boolean;
  }
  /**
   * Rejects draft post into unpublished status.
   * @param postIds - Source post IDs.
   * @internal
   * @documentationMaturity preview
   * @requiredField postIds
   * @adminMethod
   */
  function bulkRejectDraftPost(postIds: string[], options?: BulkRejectDraftPostOptions): Promise<BulkRejectDraftPostResponse>;
  interface BulkRejectDraftPostOptions {
      /** Should full draft post be returned. */
      returnFullEntity?: boolean;
  }
  /**
   * Reverts post status back from moderation to unpublished.
   * @param postId - Source post ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField postId
   * @adminMethod
   */
  function revertToUnpublished(postId: string, options?: RevertToUnpublishedOptions): Promise<RevertToUnpublishedResponse>;
  interface RevertToUnpublishedOptions {
      /**
       * List of draft post fields to be included in the response.
       * @internal
       */
      fieldsToInclude?: Field$1[];
      /**
       * List of draft post fields to be included if entities are present in the response.
       * Base fieldset, which is default, will return all core draft post properties.
       * Example: When URL fieldset is selected, returned draft post will have a set of base properties and draft post preview url.
       */
      fieldsets?: Field$1[];
  }
  /**
   * Deprecated on '2022-09-01'. Use DraftPostService.UpdateDraftPost.
   * Rejects draft post into unpublished status.
   * @param postId - Source post ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField postId
   * @adminMethod
   */
  function rejectDraftPost(postId: string, options?: RejectDraftPostOptions): Promise<RejectDraftPostResponse>;
  interface RejectDraftPostOptions {
      /**
       * List of draft post fields to be included in the response.
       * @internal
       */
      fieldsToInclude?: Field$1[];
      /**
       * List of draft post fields to be included if entities are present in the response.
       * Base fieldset, which is default, will return all core draft post properties.
       * Example: When URL fieldset is selected, returned draft post will have a set of base properties and draft post preview url.
       */
      fieldsets?: Field$1[];
  }
  /**
   * Deprecated on '2022-09-01'. Use DraftPostService.UpdateDraftPost.
   * Approves draft post by either publishing it or scheduling it for publish.
   * @param postId - Source post ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField postId
   * @adminMethod
   */
  function approveDraftPost(postId: string, options?: ApproveDraftPostOptions): Promise<ApproveDraftPostResponse>;
  interface ApproveDraftPostOptions {
      /** Scheduled publish date if should be not immediately published. */
      scheduledPublishDate?: string | null;
      /**
       * List of draft post fields to be included in the response.
       * @internal
       */
      fieldsToInclude?: Field$1[];
      /**
       * List of draft post fields to be included if entities are present in the response.
       * Base fieldset, which is default, will return all core draft post properties.
       * Example: When URL fieldset is selected, returned draft post will have a set of base properties and draft post preview url.
       */
      fieldsets?: Field$1[];
  }
  /**
   * Updates post statuses to mark post as being in moderation.
   * @param postId - Source post ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField postId
   * @adminMethod
   */
  function markPostAsInModeration(postId: string, options?: MarkPostAsInModerationOptions): Promise<MarkPostAsInModerationResponse>;
  interface MarkPostAsInModerationOptions {
      /**
       * List of draft post fields to be included in the response.
       * @internal
       */
      fieldsToInclude?: Field$1[];
      /**
       * List of draft post fields to be included if entities are present in the response.
       * Base fieldset, which is default, will return all core draft post properties.
       * Example: When URL fieldset is selected, returned draft post will have a set of base properties and draft post preview url.
       */
      fieldsets?: Field$1[];
  }
  
  type blogV3Draft_universal_d_DraftPost = DraftPost;
  type blogV3Draft_universal_d_CoverMedia = CoverMedia;
  type blogV3Draft_universal_d_CoverMediaMediaOneOf = CoverMediaMediaOneOf;
  type blogV3Draft_universal_d_Origin = Origin;
  const blogV3Draft_universal_d_Origin: typeof Origin;
  type blogV3Draft_universal_d_RichContent = RichContent;
  type blogV3Draft_universal_d_Node = Node;
  type blogV3Draft_universal_d_NodeDataOneOf = NodeDataOneOf;
  type blogV3Draft_universal_d_NodeType = NodeType;
  const blogV3Draft_universal_d_NodeType: typeof NodeType;
  type blogV3Draft_universal_d_NodeStyle = NodeStyle;
  type blogV3Draft_universal_d_ButtonData = ButtonData;
  type blogV3Draft_universal_d_Border = Border;
  type blogV3Draft_universal_d_Colors = Colors;
  type blogV3Draft_universal_d_PluginContainerData = PluginContainerData;
  type blogV3Draft_universal_d_WidthType = WidthType;
  const blogV3Draft_universal_d_WidthType: typeof WidthType;
  type blogV3Draft_universal_d_PluginContainerDataWidth = PluginContainerDataWidth;
  type blogV3Draft_universal_d_PluginContainerDataWidthDataOneOf = PluginContainerDataWidthDataOneOf;
  type blogV3Draft_universal_d_PluginContainerDataAlignment = PluginContainerDataAlignment;
  const blogV3Draft_universal_d_PluginContainerDataAlignment: typeof PluginContainerDataAlignment;
  type blogV3Draft_universal_d_Spoiler = Spoiler;
  type blogV3Draft_universal_d_Height = Height;
  type blogV3Draft_universal_d_ButtonDataType = ButtonDataType;
  const blogV3Draft_universal_d_ButtonDataType: typeof ButtonDataType;
  type blogV3Draft_universal_d_Styles = Styles;
  type blogV3Draft_universal_d_Link = Link;
  type blogV3Draft_universal_d_LinkDataOneOf = LinkDataOneOf;
  type blogV3Draft_universal_d_Target = Target;
  const blogV3Draft_universal_d_Target: typeof Target;
  type blogV3Draft_universal_d_Rel = Rel;
  type blogV3Draft_universal_d_CodeBlockData = CodeBlockData;
  type blogV3Draft_universal_d_TextStyle = TextStyle;
  type blogV3Draft_universal_d_TextAlignment = TextAlignment;
  const blogV3Draft_universal_d_TextAlignment: typeof TextAlignment;
  type blogV3Draft_universal_d_DividerData = DividerData;
  type blogV3Draft_universal_d_LineStyle = LineStyle;
  const blogV3Draft_universal_d_LineStyle: typeof LineStyle;
  type blogV3Draft_universal_d_Width = Width;
  const blogV3Draft_universal_d_Width: typeof Width;
  type blogV3Draft_universal_d_Alignment = Alignment;
  const blogV3Draft_universal_d_Alignment: typeof Alignment;
  type blogV3Draft_universal_d_FileData = FileData;
  type blogV3Draft_universal_d_ViewMode = ViewMode;
  const blogV3Draft_universal_d_ViewMode: typeof ViewMode;
  type blogV3Draft_universal_d_FileSource = FileSource;
  type blogV3Draft_universal_d_FileSourceDataOneOf = FileSourceDataOneOf;
  type blogV3Draft_universal_d_PDFSettings = PDFSettings;
  type blogV3Draft_universal_d_GalleryData = GalleryData;
  type blogV3Draft_universal_d_V1Media = V1Media;
  type blogV3Draft_universal_d_Image = Image;
  type blogV3Draft_universal_d_Video = Video;
  type blogV3Draft_universal_d_Item = Item;
  type blogV3Draft_universal_d_ItemDataOneOf = ItemDataOneOf;
  type blogV3Draft_universal_d_GalleryOptions = GalleryOptions;
  type blogV3Draft_universal_d_LayoutType = LayoutType;
  const blogV3Draft_universal_d_LayoutType: typeof LayoutType;
  type blogV3Draft_universal_d_Orientation = Orientation;
  const blogV3Draft_universal_d_Orientation: typeof Orientation;
  type blogV3Draft_universal_d_Crop = Crop;
  const blogV3Draft_universal_d_Crop: typeof Crop;
  type blogV3Draft_universal_d_ThumbnailsAlignment = ThumbnailsAlignment;
  const blogV3Draft_universal_d_ThumbnailsAlignment: typeof ThumbnailsAlignment;
  type blogV3Draft_universal_d_Layout = Layout;
  type blogV3Draft_universal_d_ItemStyle = ItemStyle;
  type blogV3Draft_universal_d_Thumbnails = Thumbnails;
  type blogV3Draft_universal_d_GIFData = GIFData;
  type blogV3Draft_universal_d_GIF = GIF;
  type blogV3Draft_universal_d_HeadingData = HeadingData;
  type blogV3Draft_universal_d_HTMLData = HTMLData;
  type blogV3Draft_universal_d_HTMLDataDataOneOf = HTMLDataDataOneOf;
  type blogV3Draft_universal_d_Source = Source;
  const blogV3Draft_universal_d_Source: typeof Source;
  type blogV3Draft_universal_d_ImageData = ImageData;
  type blogV3Draft_universal_d_LinkPreviewData = LinkPreviewData;
  type blogV3Draft_universal_d_MapData = MapData;
  type blogV3Draft_universal_d_MapSettings = MapSettings;
  type blogV3Draft_universal_d_MapType = MapType;
  const blogV3Draft_universal_d_MapType: typeof MapType;
  type blogV3Draft_universal_d_ParagraphData = ParagraphData;
  type blogV3Draft_universal_d_PollData = PollData;
  type blogV3Draft_universal_d_ViewRole = ViewRole;
  const blogV3Draft_universal_d_ViewRole: typeof ViewRole;
  type blogV3Draft_universal_d_VoteRole = VoteRole;
  const blogV3Draft_universal_d_VoteRole: typeof VoteRole;
  type blogV3Draft_universal_d_Permissions = Permissions;
  type blogV3Draft_universal_d_Option = Option;
  type blogV3Draft_universal_d_PollSettings = PollSettings;
  type blogV3Draft_universal_d_PollLayoutType = PollLayoutType;
  const blogV3Draft_universal_d_PollLayoutType: typeof PollLayoutType;
  type blogV3Draft_universal_d_PollLayoutDirection = PollLayoutDirection;
  const blogV3Draft_universal_d_PollLayoutDirection: typeof PollLayoutDirection;
  type blogV3Draft_universal_d_PollLayout = PollLayout;
  type blogV3Draft_universal_d_OptionLayout = OptionLayout;
  type blogV3Draft_universal_d_BackgroundType = BackgroundType;
  const blogV3Draft_universal_d_BackgroundType: typeof BackgroundType;
  type blogV3Draft_universal_d_Gradient = Gradient;
  type blogV3Draft_universal_d_Background = Background;
  type blogV3Draft_universal_d_BackgroundBackgroundOneOf = BackgroundBackgroundOneOf;
  type blogV3Draft_universal_d_PollDesign = PollDesign;
  type blogV3Draft_universal_d_OptionDesign = OptionDesign;
  type blogV3Draft_universal_d_Poll = Poll;
  type blogV3Draft_universal_d_PollDataLayout = PollDataLayout;
  type blogV3Draft_universal_d_Design = Design;
  type blogV3Draft_universal_d_TextData = TextData;
  type blogV3Draft_universal_d_Decoration = Decoration;
  type blogV3Draft_universal_d_DecorationDataOneOf = DecorationDataOneOf;
  type blogV3Draft_universal_d_DecorationType = DecorationType;
  const blogV3Draft_universal_d_DecorationType: typeof DecorationType;
  type blogV3Draft_universal_d_AnchorData = AnchorData;
  type blogV3Draft_universal_d_ColorData = ColorData;
  type blogV3Draft_universal_d_LinkData = LinkData;
  type blogV3Draft_universal_d_MentionData = MentionData;
  type blogV3Draft_universal_d_FontSizeData = FontSizeData;
  type blogV3Draft_universal_d_FontType = FontType;
  const blogV3Draft_universal_d_FontType: typeof FontType;
  type blogV3Draft_universal_d_AppEmbedData = AppEmbedData;
  type blogV3Draft_universal_d_AppEmbedDataAppDataOneOf = AppEmbedDataAppDataOneOf;
  type blogV3Draft_universal_d_AppType = AppType;
  const blogV3Draft_universal_d_AppType: typeof AppType;
  type blogV3Draft_universal_d_BookingData = BookingData;
  type blogV3Draft_universal_d_EventData = EventData;
  type blogV3Draft_universal_d_VideoData = VideoData;
  type blogV3Draft_universal_d_PlaybackOptions = PlaybackOptions;
  type blogV3Draft_universal_d_EmbedData = EmbedData;
  type blogV3Draft_universal_d_Oembed = Oembed;
  type blogV3Draft_universal_d_CollapsibleListData = CollapsibleListData;
  type blogV3Draft_universal_d_InitialExpandedItems = InitialExpandedItems;
  const blogV3Draft_universal_d_InitialExpandedItems: typeof InitialExpandedItems;
  type blogV3Draft_universal_d_Direction = Direction;
  const blogV3Draft_universal_d_Direction: typeof Direction;
  type blogV3Draft_universal_d_TableData = TableData;
  type blogV3Draft_universal_d_Dimensions = Dimensions;
  type blogV3Draft_universal_d_TableCellData = TableCellData;
  type blogV3Draft_universal_d_VerticalAlignment = VerticalAlignment;
  const blogV3Draft_universal_d_VerticalAlignment: typeof VerticalAlignment;
  type blogV3Draft_universal_d_CellStyle = CellStyle;
  type blogV3Draft_universal_d_BorderColors = BorderColors;
  type blogV3Draft_universal_d_NullValue = NullValue;
  const blogV3Draft_universal_d_NullValue: typeof NullValue;
  type blogV3Draft_universal_d_ListValue = ListValue;
  type blogV3Draft_universal_d_AudioData = AudioData;
  type blogV3Draft_universal_d_OrderedListData = OrderedListData;
  type blogV3Draft_universal_d_BulletedListData = BulletedListData;
  type blogV3Draft_universal_d_BlockquoteData = BlockquoteData;
  type blogV3Draft_universal_d_Metadata = Metadata;
  type blogV3Draft_universal_d_DocumentStyle = DocumentStyle;
  type blogV3Draft_universal_d_TextNodeStyle = TextNodeStyle;
  type blogV3Draft_universal_d_Status = Status;
  const blogV3Draft_universal_d_Status: typeof Status;
  type blogV3Draft_universal_d_ModerationDetails = ModerationDetails;
  type blogV3Draft_universal_d_ModerationStatusStatus = ModerationStatusStatus;
  const blogV3Draft_universal_d_ModerationStatusStatus: typeof ModerationStatusStatus;
  type blogV3Draft_universal_d_Media = Media;
  type blogV3Draft_universal_d_MediaMediaOneOf = MediaMediaOneOf;
  type blogV3Draft_universal_d_WixMedia = WixMedia;
  type blogV3Draft_universal_d_VideoResolution = VideoResolution;
  type blogV3Draft_universal_d_EmbedMedia = EmbedMedia;
  type blogV3Draft_universal_d_EmbedThumbnail = EmbedThumbnail;
  type blogV3Draft_universal_d_EmbedVideo = EmbedVideo;
  type blogV3Draft_universal_d_DraftPostTranslation = DraftPostTranslation;
  type blogV3Draft_universal_d_InitialDraftPostsCopied = InitialDraftPostsCopied;
  type blogV3Draft_universal_d_CreateDraftPostRequest = CreateDraftPostRequest;
  type blogV3Draft_universal_d_Type = Type;
  const blogV3Draft_universal_d_Type: typeof Type;
  type blogV3Draft_universal_d_CreateDraftPostResponse = CreateDraftPostResponse;
  type blogV3Draft_universal_d_BulkCreateDraftPostsRequest = BulkCreateDraftPostsRequest;
  type blogV3Draft_universal_d_BulkCreateDraftPostsResponse = BulkCreateDraftPostsResponse;
  type blogV3Draft_universal_d_BulkDraftPostResult = BulkDraftPostResult;
  type blogV3Draft_universal_d_BulkUpdateDraftPostsRequest = BulkUpdateDraftPostsRequest;
  type blogV3Draft_universal_d_MaskedDraftPosts = MaskedDraftPosts;
  type blogV3Draft_universal_d_Action = Action;
  const blogV3Draft_universal_d_Action: typeof Action;
  type blogV3Draft_universal_d_BulkUpdateDraftPostsResponse = BulkUpdateDraftPostsResponse;
  type blogV3Draft_universal_d_DraftPostOwnerChanged = DraftPostOwnerChanged;
  type blogV3Draft_universal_d_ListDeletedDraftPostsRequest = ListDeletedDraftPostsRequest;
  type blogV3Draft_universal_d_GetDraftPostsSort = GetDraftPostsSort;
  const blogV3Draft_universal_d_GetDraftPostsSort: typeof GetDraftPostsSort;
  type blogV3Draft_universal_d_BlogPaging = BlogPaging;
  type blogV3Draft_universal_d_ListDeletedDraftPostsResponse = ListDeletedDraftPostsResponse;
  type blogV3Draft_universal_d_GetDraftPostRequest = GetDraftPostRequest;
  type blogV3Draft_universal_d_GetDraftPostResponse = GetDraftPostResponse;
  type blogV3Draft_universal_d_UpdateDraftPostContentRequest = UpdateDraftPostContentRequest;
  type blogV3Draft_universal_d_UpdateDraftPostContentRequestDraftContentOneOf = UpdateDraftPostContentRequestDraftContentOneOf;
  type blogV3Draft_universal_d_UpdateDraftPostContentResponse = UpdateDraftPostContentResponse;
  type blogV3Draft_universal_d_UpdateDraftPostRequest = UpdateDraftPostRequest;
  type blogV3Draft_universal_d_UpdateDraftPostResponse = UpdateDraftPostResponse;
  type blogV3Draft_universal_d_DeleteDraftPostRequest = DeleteDraftPostRequest;
  type blogV3Draft_universal_d_DeleteDraftPostResponse = DeleteDraftPostResponse;
  type blogV3Draft_universal_d_RemoveFromTrashBinRequest = RemoveFromTrashBinRequest;
  type blogV3Draft_universal_d_RemoveFromTrashBinResponse = RemoveFromTrashBinResponse;
  type blogV3Draft_universal_d_BulkDeleteDraftPostsRequest = BulkDeleteDraftPostsRequest;
  type blogV3Draft_universal_d_BulkDeleteDraftPostsResponse = BulkDeleteDraftPostsResponse;
  type blogV3Draft_universal_d_ListDraftPostsRequest = ListDraftPostsRequest;
  type blogV3Draft_universal_d_ListDraftPostsResponse = ListDraftPostsResponse;
  type blogV3Draft_universal_d_GetDeletedDraftPostRequest = GetDeletedDraftPostRequest;
  type blogV3Draft_universal_d_GetDeletedDraftPostResponse = GetDeletedDraftPostResponse;
  type blogV3Draft_universal_d_RestoreFromTrashBinRequest = RestoreFromTrashBinRequest;
  type blogV3Draft_universal_d_RestoreFromTrashBinResponse = RestoreFromTrashBinResponse;
  type blogV3Draft_universal_d_QueryDraftPostsRequest = QueryDraftPostsRequest;
  type blogV3Draft_universal_d_QueryDraftPostsResponse = QueryDraftPostsResponse;
  type blogV3Draft_universal_d_PublishDraftPostRequest = PublishDraftPostRequest;
  type blogV3Draft_universal_d_PublishDraftPostResponse = PublishDraftPostResponse;
  type blogV3Draft_universal_d_UnpublishPostRequest = UnpublishPostRequest;
  type blogV3Draft_universal_d_UnpublishPostResponse = UnpublishPostResponse;
  type blogV3Draft_universal_d_GetDraftPostTotalsRequest = GetDraftPostTotalsRequest;
  type blogV3Draft_universal_d_TotalDraftPostsGroupingField = TotalDraftPostsGroupingField;
  const blogV3Draft_universal_d_TotalDraftPostsGroupingField: typeof TotalDraftPostsGroupingField;
  type blogV3Draft_universal_d_GetDraftPostTotalsResponse = GetDraftPostTotalsResponse;
  type blogV3Draft_universal_d_TotalDraftPosts = TotalDraftPosts;
  type blogV3Draft_universal_d_TranslateCategoryRequest = TranslateCategoryRequest;
  type blogV3Draft_universal_d_TranslateCategoryResponse = TranslateCategoryResponse;
  type blogV3Draft_universal_d_Category = Category;
  type blogV3Draft_universal_d_CategoryTranslation = CategoryTranslation;
  type blogV3Draft_universal_d_TranslateDraftRequest = TranslateDraftRequest;
  type blogV3Draft_universal_d_TranslateDraftResponse = TranslateDraftResponse;
  type blogV3Draft_universal_d_IsDraftPostAutoTranslatableRequest = IsDraftPostAutoTranslatableRequest;
  type blogV3Draft_universal_d_IsDraftPostAutoTranslatableResponse = IsDraftPostAutoTranslatableResponse;
  type blogV3Draft_universal_d_UpdateDraftPostLanguageRequest = UpdateDraftPostLanguageRequest;
  type blogV3Draft_universal_d_UpdateDraftPostLanguageResponse = UpdateDraftPostLanguageResponse;
  type blogV3Draft_universal_d_BulkUpdateDraftPostLanguageRequest = BulkUpdateDraftPostLanguageRequest;
  type blogV3Draft_universal_d_BulkUpdateDraftPostLanguageResponse = BulkUpdateDraftPostLanguageResponse;
  type blogV3Draft_universal_d_GetPostAmountsByLanguageRequest = GetPostAmountsByLanguageRequest;
  type blogV3Draft_universal_d_GetPostAmountsByLanguageResponse = GetPostAmountsByLanguageResponse;
  type blogV3Draft_universal_d_PostAmountByLanguage = PostAmountByLanguage;
  type blogV3Draft_universal_d_BulkRevertToUnpublishedRequest = BulkRevertToUnpublishedRequest;
  type blogV3Draft_universal_d_BulkRevertToUnpublishedResponse = BulkRevertToUnpublishedResponse;
  type blogV3Draft_universal_d_BulkRejectDraftPostRequest = BulkRejectDraftPostRequest;
  type blogV3Draft_universal_d_BulkRejectDraftPostResponse = BulkRejectDraftPostResponse;
  type blogV3Draft_universal_d_RevertToUnpublishedRequest = RevertToUnpublishedRequest;
  type blogV3Draft_universal_d_RevertToUnpublishedResponse = RevertToUnpublishedResponse;
  type blogV3Draft_universal_d_RejectDraftPostRequest = RejectDraftPostRequest;
  type blogV3Draft_universal_d_RejectDraftPostResponse = RejectDraftPostResponse;
  type blogV3Draft_universal_d_ApproveDraftPostRequest = ApproveDraftPostRequest;
  type blogV3Draft_universal_d_ApproveDraftPostResponse = ApproveDraftPostResponse;
  type blogV3Draft_universal_d_MarkPostAsInModerationRequest = MarkPostAsInModerationRequest;
  type blogV3Draft_universal_d_MarkPostAsInModerationResponse = MarkPostAsInModerationResponse;
  const blogV3Draft_universal_d_createDraftPost: typeof createDraftPost;
  type blogV3Draft_universal_d_CreateDraftPostOptions = CreateDraftPostOptions;
  const blogV3Draft_universal_d_bulkCreateDraftPosts: typeof bulkCreateDraftPosts;
  type blogV3Draft_universal_d_BulkCreateDraftPostsOptions = BulkCreateDraftPostsOptions;
  const blogV3Draft_universal_d_bulkUpdateDraftPosts: typeof bulkUpdateDraftPosts;
  type blogV3Draft_universal_d_BulkUpdateDraftPostsOptions = BulkUpdateDraftPostsOptions;
  const blogV3Draft_universal_d_listDeletedDraftPosts: typeof listDeletedDraftPosts;
  type blogV3Draft_universal_d_ListDeletedDraftPostsOptions = ListDeletedDraftPostsOptions;
  const blogV3Draft_universal_d_getDraftPost: typeof getDraftPost;
  type blogV3Draft_universal_d_GetDraftPostOptions = GetDraftPostOptions;
  const blogV3Draft_universal_d_updateDraftPostContent: typeof updateDraftPostContent;
  type blogV3Draft_universal_d_UpdateDraftPostContentOptions = UpdateDraftPostContentOptions;
  const blogV3Draft_universal_d_updateDraftPost: typeof updateDraftPost;
  type blogV3Draft_universal_d_UpdateDraftPost = UpdateDraftPost;
  type blogV3Draft_universal_d_UpdateDraftPostOptions = UpdateDraftPostOptions;
  const blogV3Draft_universal_d_deleteDraftPost: typeof deleteDraftPost;
  type blogV3Draft_universal_d_DeleteDraftPostOptions = DeleteDraftPostOptions;
  const blogV3Draft_universal_d_removeFromTrashBin: typeof removeFromTrashBin;
  const blogV3Draft_universal_d_bulkDeleteDraftPosts: typeof bulkDeleteDraftPosts;
  type blogV3Draft_universal_d_BulkDeleteDraftPostsOptions = BulkDeleteDraftPostsOptions;
  const blogV3Draft_universal_d_listDraftPosts: typeof listDraftPosts;
  type blogV3Draft_universal_d_ListDraftPostsOptions = ListDraftPostsOptions;
  const blogV3Draft_universal_d_getDeletedDraftPost: typeof getDeletedDraftPost;
  const blogV3Draft_universal_d_restoreFromTrashBin: typeof restoreFromTrashBin;
  const blogV3Draft_universal_d_queryDraftPosts: typeof queryDraftPosts;
  type blogV3Draft_universal_d_QueryDraftPostsOptions = QueryDraftPostsOptions;
  type blogV3Draft_universal_d_DraftPostsQueryResult = DraftPostsQueryResult;
  type blogV3Draft_universal_d_DraftPostsQueryBuilder = DraftPostsQueryBuilder;
  const blogV3Draft_universal_d_publishDraftPost: typeof publishDraftPost;
  const blogV3Draft_universal_d_unpublishPost: typeof unpublishPost;
  const blogV3Draft_universal_d_getDraftPostTotals: typeof getDraftPostTotals;
  type blogV3Draft_universal_d_GetDraftPostTotalsOptions = GetDraftPostTotalsOptions;
  const blogV3Draft_universal_d_translateCategory: typeof translateCategory;
  const blogV3Draft_universal_d_translateDraft: typeof translateDraft;
  type blogV3Draft_universal_d_TranslateDraftOptions = TranslateDraftOptions;
  const blogV3Draft_universal_d_isDraftPostAutoTranslatable: typeof isDraftPostAutoTranslatable;
  const blogV3Draft_universal_d_updateDraftPostLanguage: typeof updateDraftPostLanguage;
  type blogV3Draft_universal_d_UpdateDraftPostLanguageOptions = UpdateDraftPostLanguageOptions;
  const blogV3Draft_universal_d_bulkUpdateDraftPostLanguage: typeof bulkUpdateDraftPostLanguage;
  type blogV3Draft_universal_d_BulkUpdateDraftPostLanguageOptions = BulkUpdateDraftPostLanguageOptions;
  const blogV3Draft_universal_d_getPostAmountsByLanguage: typeof getPostAmountsByLanguage;
  const blogV3Draft_universal_d_bulkRevertToUnpublished: typeof bulkRevertToUnpublished;
  type blogV3Draft_universal_d_BulkRevertToUnpublishedOptions = BulkRevertToUnpublishedOptions;
  const blogV3Draft_universal_d_bulkRejectDraftPost: typeof bulkRejectDraftPost;
  type blogV3Draft_universal_d_BulkRejectDraftPostOptions = BulkRejectDraftPostOptions;
  const blogV3Draft_universal_d_revertToUnpublished: typeof revertToUnpublished;
  type blogV3Draft_universal_d_RevertToUnpublishedOptions = RevertToUnpublishedOptions;
  const blogV3Draft_universal_d_rejectDraftPost: typeof rejectDraftPost;
  type blogV3Draft_universal_d_RejectDraftPostOptions = RejectDraftPostOptions;
  const blogV3Draft_universal_d_approveDraftPost: typeof approveDraftPost;
  type blogV3Draft_universal_d_ApproveDraftPostOptions = ApproveDraftPostOptions;
  const blogV3Draft_universal_d_markPostAsInModeration: typeof markPostAsInModeration;
  type blogV3Draft_universal_d_MarkPostAsInModerationOptions = MarkPostAsInModerationOptions;
  namespace blogV3Draft_universal_d {
    export {
      blogV3Draft_universal_d_DraftPost as DraftPost,
      blogV3Draft_universal_d_CoverMedia as CoverMedia,
      blogV3Draft_universal_d_CoverMediaMediaOneOf as CoverMediaMediaOneOf,
      blogV3Draft_universal_d_Origin as Origin,
      blogV3Draft_universal_d_RichContent as RichContent,
      blogV3Draft_universal_d_Node as Node,
      blogV3Draft_universal_d_NodeDataOneOf as NodeDataOneOf,
      blogV3Draft_universal_d_NodeType as NodeType,
      blogV3Draft_universal_d_NodeStyle as NodeStyle,
      blogV3Draft_universal_d_ButtonData as ButtonData,
      blogV3Draft_universal_d_Border as Border,
      blogV3Draft_universal_d_Colors as Colors,
      blogV3Draft_universal_d_PluginContainerData as PluginContainerData,
      blogV3Draft_universal_d_WidthType as WidthType,
      blogV3Draft_universal_d_PluginContainerDataWidth as PluginContainerDataWidth,
      blogV3Draft_universal_d_PluginContainerDataWidthDataOneOf as PluginContainerDataWidthDataOneOf,
      blogV3Draft_universal_d_PluginContainerDataAlignment as PluginContainerDataAlignment,
      blogV3Draft_universal_d_Spoiler as Spoiler,
      blogV3Draft_universal_d_Height as Height,
      blogV3Draft_universal_d_ButtonDataType as ButtonDataType,
      blogV3Draft_universal_d_Styles as Styles,
      blogV3Draft_universal_d_Link as Link,
      blogV3Draft_universal_d_LinkDataOneOf as LinkDataOneOf,
      blogV3Draft_universal_d_Target as Target,
      blogV3Draft_universal_d_Rel as Rel,
      blogV3Draft_universal_d_CodeBlockData as CodeBlockData,
      blogV3Draft_universal_d_TextStyle as TextStyle,
      blogV3Draft_universal_d_TextAlignment as TextAlignment,
      blogV3Draft_universal_d_DividerData as DividerData,
      blogV3Draft_universal_d_LineStyle as LineStyle,
      blogV3Draft_universal_d_Width as Width,
      blogV3Draft_universal_d_Alignment as Alignment,
      blogV3Draft_universal_d_FileData as FileData,
      blogV3Draft_universal_d_ViewMode as ViewMode,
      blogV3Draft_universal_d_FileSource as FileSource,
      blogV3Draft_universal_d_FileSourceDataOneOf as FileSourceDataOneOf,
      blogV3Draft_universal_d_PDFSettings as PDFSettings,
      blogV3Draft_universal_d_GalleryData as GalleryData,
      blogV3Draft_universal_d_V1Media as V1Media,
      blogV3Draft_universal_d_Image as Image,
      blogV3Draft_universal_d_Video as Video,
      blogV3Draft_universal_d_Item as Item,
      blogV3Draft_universal_d_ItemDataOneOf as ItemDataOneOf,
      blogV3Draft_universal_d_GalleryOptions as GalleryOptions,
      blogV3Draft_universal_d_LayoutType as LayoutType,
      blogV3Draft_universal_d_Orientation as Orientation,
      blogV3Draft_universal_d_Crop as Crop,
      blogV3Draft_universal_d_ThumbnailsAlignment as ThumbnailsAlignment,
      blogV3Draft_universal_d_Layout as Layout,
      blogV3Draft_universal_d_ItemStyle as ItemStyle,
      blogV3Draft_universal_d_Thumbnails as Thumbnails,
      blogV3Draft_universal_d_GIFData as GIFData,
      blogV3Draft_universal_d_GIF as GIF,
      blogV3Draft_universal_d_HeadingData as HeadingData,
      blogV3Draft_universal_d_HTMLData as HTMLData,
      blogV3Draft_universal_d_HTMLDataDataOneOf as HTMLDataDataOneOf,
      blogV3Draft_universal_d_Source as Source,
      blogV3Draft_universal_d_ImageData as ImageData,
      blogV3Draft_universal_d_LinkPreviewData as LinkPreviewData,
      blogV3Draft_universal_d_MapData as MapData,
      blogV3Draft_universal_d_MapSettings as MapSettings,
      blogV3Draft_universal_d_MapType as MapType,
      blogV3Draft_universal_d_ParagraphData as ParagraphData,
      blogV3Draft_universal_d_PollData as PollData,
      blogV3Draft_universal_d_ViewRole as ViewRole,
      blogV3Draft_universal_d_VoteRole as VoteRole,
      blogV3Draft_universal_d_Permissions as Permissions,
      blogV3Draft_universal_d_Option as Option,
      blogV3Draft_universal_d_PollSettings as PollSettings,
      blogV3Draft_universal_d_PollLayoutType as PollLayoutType,
      blogV3Draft_universal_d_PollLayoutDirection as PollLayoutDirection,
      blogV3Draft_universal_d_PollLayout as PollLayout,
      blogV3Draft_universal_d_OptionLayout as OptionLayout,
      blogV3Draft_universal_d_BackgroundType as BackgroundType,
      blogV3Draft_universal_d_Gradient as Gradient,
      blogV3Draft_universal_d_Background as Background,
      blogV3Draft_universal_d_BackgroundBackgroundOneOf as BackgroundBackgroundOneOf,
      blogV3Draft_universal_d_PollDesign as PollDesign,
      blogV3Draft_universal_d_OptionDesign as OptionDesign,
      blogV3Draft_universal_d_Poll as Poll,
      blogV3Draft_universal_d_PollDataLayout as PollDataLayout,
      blogV3Draft_universal_d_Design as Design,
      blogV3Draft_universal_d_TextData as TextData,
      blogV3Draft_universal_d_Decoration as Decoration,
      blogV3Draft_universal_d_DecorationDataOneOf as DecorationDataOneOf,
      blogV3Draft_universal_d_DecorationType as DecorationType,
      blogV3Draft_universal_d_AnchorData as AnchorData,
      blogV3Draft_universal_d_ColorData as ColorData,
      blogV3Draft_universal_d_LinkData as LinkData,
      blogV3Draft_universal_d_MentionData as MentionData,
      blogV3Draft_universal_d_FontSizeData as FontSizeData,
      blogV3Draft_universal_d_FontType as FontType,
      blogV3Draft_universal_d_AppEmbedData as AppEmbedData,
      blogV3Draft_universal_d_AppEmbedDataAppDataOneOf as AppEmbedDataAppDataOneOf,
      blogV3Draft_universal_d_AppType as AppType,
      blogV3Draft_universal_d_BookingData as BookingData,
      blogV3Draft_universal_d_EventData as EventData,
      blogV3Draft_universal_d_VideoData as VideoData,
      blogV3Draft_universal_d_PlaybackOptions as PlaybackOptions,
      blogV3Draft_universal_d_EmbedData as EmbedData,
      blogV3Draft_universal_d_Oembed as Oembed,
      blogV3Draft_universal_d_CollapsibleListData as CollapsibleListData,
      blogV3Draft_universal_d_InitialExpandedItems as InitialExpandedItems,
      blogV3Draft_universal_d_Direction as Direction,
      blogV3Draft_universal_d_TableData as TableData,
      blogV3Draft_universal_d_Dimensions as Dimensions,
      blogV3Draft_universal_d_TableCellData as TableCellData,
      blogV3Draft_universal_d_VerticalAlignment as VerticalAlignment,
      blogV3Draft_universal_d_CellStyle as CellStyle,
      blogV3Draft_universal_d_BorderColors as BorderColors,
      blogV3Draft_universal_d_NullValue as NullValue,
      blogV3Draft_universal_d_ListValue as ListValue,
      blogV3Draft_universal_d_AudioData as AudioData,
      blogV3Draft_universal_d_OrderedListData as OrderedListData,
      blogV3Draft_universal_d_BulletedListData as BulletedListData,
      blogV3Draft_universal_d_BlockquoteData as BlockquoteData,
      blogV3Draft_universal_d_Metadata as Metadata,
      blogV3Draft_universal_d_DocumentStyle as DocumentStyle,
      blogV3Draft_universal_d_TextNodeStyle as TextNodeStyle,
      blogV3Draft_universal_d_Status as Status,
      blogV3Draft_universal_d_ModerationDetails as ModerationDetails,
      blogV3Draft_universal_d_ModerationStatusStatus as ModerationStatusStatus,
      SeoSchema$1 as SeoSchema,
      Keyword$1 as Keyword,
      Tag$1 as Tag,
      Settings$1 as Settings,
      blogV3Draft_universal_d_Media as Media,
      blogV3Draft_universal_d_MediaMediaOneOf as MediaMediaOneOf,
      blogV3Draft_universal_d_WixMedia as WixMedia,
      blogV3Draft_universal_d_VideoResolution as VideoResolution,
      blogV3Draft_universal_d_EmbedMedia as EmbedMedia,
      blogV3Draft_universal_d_EmbedThumbnail as EmbedThumbnail,
      blogV3Draft_universal_d_EmbedVideo as EmbedVideo,
      blogV3Draft_universal_d_DraftPostTranslation as DraftPostTranslation,
      blogV3Draft_universal_d_InitialDraftPostsCopied as InitialDraftPostsCopied,
      blogV3Draft_universal_d_CreateDraftPostRequest as CreateDraftPostRequest,
      blogV3Draft_universal_d_Type as Type,
      Field$1 as Field,
      blogV3Draft_universal_d_CreateDraftPostResponse as CreateDraftPostResponse,
      blogV3Draft_universal_d_BulkCreateDraftPostsRequest as BulkCreateDraftPostsRequest,
      blogV3Draft_universal_d_BulkCreateDraftPostsResponse as BulkCreateDraftPostsResponse,
      blogV3Draft_universal_d_BulkDraftPostResult as BulkDraftPostResult,
      ItemMetadata$1 as ItemMetadata,
      ApplicationError$1 as ApplicationError,
      BulkActionMetadata$1 as BulkActionMetadata,
      blogV3Draft_universal_d_BulkUpdateDraftPostsRequest as BulkUpdateDraftPostsRequest,
      blogV3Draft_universal_d_MaskedDraftPosts as MaskedDraftPosts,
      blogV3Draft_universal_d_Action as Action,
      blogV3Draft_universal_d_BulkUpdateDraftPostsResponse as BulkUpdateDraftPostsResponse,
      blogV3Draft_universal_d_DraftPostOwnerChanged as DraftPostOwnerChanged,
      blogV3Draft_universal_d_ListDeletedDraftPostsRequest as ListDeletedDraftPostsRequest,
      blogV3Draft_universal_d_GetDraftPostsSort as GetDraftPostsSort,
      blogV3Draft_universal_d_BlogPaging as BlogPaging,
      blogV3Draft_universal_d_ListDeletedDraftPostsResponse as ListDeletedDraftPostsResponse,
      MetaData$1 as MetaData,
      blogV3Draft_universal_d_GetDraftPostRequest as GetDraftPostRequest,
      blogV3Draft_universal_d_GetDraftPostResponse as GetDraftPostResponse,
      blogV3Draft_universal_d_UpdateDraftPostContentRequest as UpdateDraftPostContentRequest,
      blogV3Draft_universal_d_UpdateDraftPostContentRequestDraftContentOneOf as UpdateDraftPostContentRequestDraftContentOneOf,
      blogV3Draft_universal_d_UpdateDraftPostContentResponse as UpdateDraftPostContentResponse,
      blogV3Draft_universal_d_UpdateDraftPostRequest as UpdateDraftPostRequest,
      blogV3Draft_universal_d_UpdateDraftPostResponse as UpdateDraftPostResponse,
      blogV3Draft_universal_d_DeleteDraftPostRequest as DeleteDraftPostRequest,
      blogV3Draft_universal_d_DeleteDraftPostResponse as DeleteDraftPostResponse,
      blogV3Draft_universal_d_RemoveFromTrashBinRequest as RemoveFromTrashBinRequest,
      blogV3Draft_universal_d_RemoveFromTrashBinResponse as RemoveFromTrashBinResponse,
      blogV3Draft_universal_d_BulkDeleteDraftPostsRequest as BulkDeleteDraftPostsRequest,
      blogV3Draft_universal_d_BulkDeleteDraftPostsResponse as BulkDeleteDraftPostsResponse,
      blogV3Draft_universal_d_ListDraftPostsRequest as ListDraftPostsRequest,
      blogV3Draft_universal_d_ListDraftPostsResponse as ListDraftPostsResponse,
      blogV3Draft_universal_d_GetDeletedDraftPostRequest as GetDeletedDraftPostRequest,
      blogV3Draft_universal_d_GetDeletedDraftPostResponse as GetDeletedDraftPostResponse,
      blogV3Draft_universal_d_RestoreFromTrashBinRequest as RestoreFromTrashBinRequest,
      blogV3Draft_universal_d_RestoreFromTrashBinResponse as RestoreFromTrashBinResponse,
      blogV3Draft_universal_d_QueryDraftPostsRequest as QueryDraftPostsRequest,
      Sorting$1 as Sorting,
      SortOrder$1 as SortOrder,
      PlatformQuery$1 as PlatformQuery,
      PlatformQueryPagingMethodOneOf$1 as PlatformQueryPagingMethodOneOf,
      Paging$1 as Paging,
      CursorPaging$1 as CursorPaging,
      blogV3Draft_universal_d_QueryDraftPostsResponse as QueryDraftPostsResponse,
      PagingMetadataV2$1 as PagingMetadataV2,
      Cursors$1 as Cursors,
      blogV3Draft_universal_d_PublishDraftPostRequest as PublishDraftPostRequest,
      blogV3Draft_universal_d_PublishDraftPostResponse as PublishDraftPostResponse,
      blogV3Draft_universal_d_UnpublishPostRequest as UnpublishPostRequest,
      blogV3Draft_universal_d_UnpublishPostResponse as UnpublishPostResponse,
      DomainEvent$1 as DomainEvent,
      DomainEventBodyOneOf$1 as DomainEventBodyOneOf,
      EntityCreatedEvent$1 as EntityCreatedEvent,
      EntityUpdatedEvent$1 as EntityUpdatedEvent,
      EntityDeletedEvent$1 as EntityDeletedEvent,
      ActionEvent$1 as ActionEvent,
      MessageEnvelope$1 as MessageEnvelope,
      IdentificationData$1 as IdentificationData,
      IdentificationDataIdOneOf$1 as IdentificationDataIdOneOf,
      WebhookIdentityType$1 as WebhookIdentityType,
      blogV3Draft_universal_d_GetDraftPostTotalsRequest as GetDraftPostTotalsRequest,
      blogV3Draft_universal_d_TotalDraftPostsGroupingField as TotalDraftPostsGroupingField,
      blogV3Draft_universal_d_GetDraftPostTotalsResponse as GetDraftPostTotalsResponse,
      blogV3Draft_universal_d_TotalDraftPosts as TotalDraftPosts,
      blogV3Draft_universal_d_TranslateCategoryRequest as TranslateCategoryRequest,
      blogV3Draft_universal_d_TranslateCategoryResponse as TranslateCategoryResponse,
      blogV3Draft_universal_d_Category as Category,
      blogV3Draft_universal_d_CategoryTranslation as CategoryTranslation,
      blogV3Draft_universal_d_TranslateDraftRequest as TranslateDraftRequest,
      blogV3Draft_universal_d_TranslateDraftResponse as TranslateDraftResponse,
      blogV3Draft_universal_d_IsDraftPostAutoTranslatableRequest as IsDraftPostAutoTranslatableRequest,
      blogV3Draft_universal_d_IsDraftPostAutoTranslatableResponse as IsDraftPostAutoTranslatableResponse,
      blogV3Draft_universal_d_UpdateDraftPostLanguageRequest as UpdateDraftPostLanguageRequest,
      blogV3Draft_universal_d_UpdateDraftPostLanguageResponse as UpdateDraftPostLanguageResponse,
      blogV3Draft_universal_d_BulkUpdateDraftPostLanguageRequest as BulkUpdateDraftPostLanguageRequest,
      blogV3Draft_universal_d_BulkUpdateDraftPostLanguageResponse as BulkUpdateDraftPostLanguageResponse,
      blogV3Draft_universal_d_GetPostAmountsByLanguageRequest as GetPostAmountsByLanguageRequest,
      blogV3Draft_universal_d_GetPostAmountsByLanguageResponse as GetPostAmountsByLanguageResponse,
      blogV3Draft_universal_d_PostAmountByLanguage as PostAmountByLanguage,
      blogV3Draft_universal_d_BulkRevertToUnpublishedRequest as BulkRevertToUnpublishedRequest,
      blogV3Draft_universal_d_BulkRevertToUnpublishedResponse as BulkRevertToUnpublishedResponse,
      blogV3Draft_universal_d_BulkRejectDraftPostRequest as BulkRejectDraftPostRequest,
      blogV3Draft_universal_d_BulkRejectDraftPostResponse as BulkRejectDraftPostResponse,
      blogV3Draft_universal_d_RevertToUnpublishedRequest as RevertToUnpublishedRequest,
      blogV3Draft_universal_d_RevertToUnpublishedResponse as RevertToUnpublishedResponse,
      blogV3Draft_universal_d_RejectDraftPostRequest as RejectDraftPostRequest,
      blogV3Draft_universal_d_RejectDraftPostResponse as RejectDraftPostResponse,
      blogV3Draft_universal_d_ApproveDraftPostRequest as ApproveDraftPostRequest,
      blogV3Draft_universal_d_ApproveDraftPostResponse as ApproveDraftPostResponse,
      blogV3Draft_universal_d_MarkPostAsInModerationRequest as MarkPostAsInModerationRequest,
      blogV3Draft_universal_d_MarkPostAsInModerationResponse as MarkPostAsInModerationResponse,
      blogV3Draft_universal_d_createDraftPost as createDraftPost,
      blogV3Draft_universal_d_CreateDraftPostOptions as CreateDraftPostOptions,
      blogV3Draft_universal_d_bulkCreateDraftPosts as bulkCreateDraftPosts,
      blogV3Draft_universal_d_BulkCreateDraftPostsOptions as BulkCreateDraftPostsOptions,
      blogV3Draft_universal_d_bulkUpdateDraftPosts as bulkUpdateDraftPosts,
      blogV3Draft_universal_d_BulkUpdateDraftPostsOptions as BulkUpdateDraftPostsOptions,
      blogV3Draft_universal_d_listDeletedDraftPosts as listDeletedDraftPosts,
      blogV3Draft_universal_d_ListDeletedDraftPostsOptions as ListDeletedDraftPostsOptions,
      blogV3Draft_universal_d_getDraftPost as getDraftPost,
      blogV3Draft_universal_d_GetDraftPostOptions as GetDraftPostOptions,
      blogV3Draft_universal_d_updateDraftPostContent as updateDraftPostContent,
      blogV3Draft_universal_d_UpdateDraftPostContentOptions as UpdateDraftPostContentOptions,
      blogV3Draft_universal_d_updateDraftPost as updateDraftPost,
      blogV3Draft_universal_d_UpdateDraftPost as UpdateDraftPost,
      blogV3Draft_universal_d_UpdateDraftPostOptions as UpdateDraftPostOptions,
      blogV3Draft_universal_d_deleteDraftPost as deleteDraftPost,
      blogV3Draft_universal_d_DeleteDraftPostOptions as DeleteDraftPostOptions,
      blogV3Draft_universal_d_removeFromTrashBin as removeFromTrashBin,
      blogV3Draft_universal_d_bulkDeleteDraftPosts as bulkDeleteDraftPosts,
      blogV3Draft_universal_d_BulkDeleteDraftPostsOptions as BulkDeleteDraftPostsOptions,
      blogV3Draft_universal_d_listDraftPosts as listDraftPosts,
      blogV3Draft_universal_d_ListDraftPostsOptions as ListDraftPostsOptions,
      blogV3Draft_universal_d_getDeletedDraftPost as getDeletedDraftPost,
      blogV3Draft_universal_d_restoreFromTrashBin as restoreFromTrashBin,
      blogV3Draft_universal_d_queryDraftPosts as queryDraftPosts,
      blogV3Draft_universal_d_QueryDraftPostsOptions as QueryDraftPostsOptions,
      blogV3Draft_universal_d_DraftPostsQueryResult as DraftPostsQueryResult,
      blogV3Draft_universal_d_DraftPostsQueryBuilder as DraftPostsQueryBuilder,
      blogV3Draft_universal_d_publishDraftPost as publishDraftPost,
      blogV3Draft_universal_d_unpublishPost as unpublishPost,
      blogV3Draft_universal_d_getDraftPostTotals as getDraftPostTotals,
      blogV3Draft_universal_d_GetDraftPostTotalsOptions as GetDraftPostTotalsOptions,
      blogV3Draft_universal_d_translateCategory as translateCategory,
      blogV3Draft_universal_d_translateDraft as translateDraft,
      blogV3Draft_universal_d_TranslateDraftOptions as TranslateDraftOptions,
      blogV3Draft_universal_d_isDraftPostAutoTranslatable as isDraftPostAutoTranslatable,
      blogV3Draft_universal_d_updateDraftPostLanguage as updateDraftPostLanguage,
      blogV3Draft_universal_d_UpdateDraftPostLanguageOptions as UpdateDraftPostLanguageOptions,
      blogV3Draft_universal_d_bulkUpdateDraftPostLanguage as bulkUpdateDraftPostLanguage,
      blogV3Draft_universal_d_BulkUpdateDraftPostLanguageOptions as BulkUpdateDraftPostLanguageOptions,
      blogV3Draft_universal_d_getPostAmountsByLanguage as getPostAmountsByLanguage,
      blogV3Draft_universal_d_bulkRevertToUnpublished as bulkRevertToUnpublished,
      blogV3Draft_universal_d_BulkRevertToUnpublishedOptions as BulkRevertToUnpublishedOptions,
      blogV3Draft_universal_d_bulkRejectDraftPost as bulkRejectDraftPost,
      blogV3Draft_universal_d_BulkRejectDraftPostOptions as BulkRejectDraftPostOptions,
      blogV3Draft_universal_d_revertToUnpublished as revertToUnpublished,
      blogV3Draft_universal_d_RevertToUnpublishedOptions as RevertToUnpublishedOptions,
      blogV3Draft_universal_d_rejectDraftPost as rejectDraftPost,
      blogV3Draft_universal_d_RejectDraftPostOptions as RejectDraftPostOptions,
      blogV3Draft_universal_d_approveDraftPost as approveDraftPost,
      blogV3Draft_universal_d_ApproveDraftPostOptions as ApproveDraftPostOptions,
      blogV3Draft_universal_d_markPostAsInModeration as markPostAsInModeration,
      blogV3Draft_universal_d_MarkPostAsInModerationOptions as MarkPostAsInModerationOptions,
    };
  }
  
  interface Tag {
      /**
       * Tag ID.
       * @readonly
       */
      _id?: string;
      /**
       * Tag label.
       *
       * A blog can't have two tags with the same label.
       */
      label?: string;
      /**
       * Part of a tag's URL that refers to a specific tag.
       *
       *
       * For example, `'https:/example.com/tags/{my-tag-slug}'`.
       */
      slug?: string;
      /**
       * Date the tag was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date the tag was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Reserved for internal use.
       * @readonly
       */
      publicationCount?: number;
      /**
       * Number of posts with this tag, including unpublished draft posts.
       * @readonly
       */
      postCount?: number;
      /**
       * Tag URL.
       *
       *
       * The `url` directs you to a page that lists every post with the specified tag.
       * @readonly
       */
      url?: string;
      /**
       * Number of published posts with this tag.
       * @readonly
       */
      publishedPostCount?: number;
      /**
       * ID of the tag's translations when [Wix Multilingual](https://support.wix.com/en/article/wix-multilingual-translating-your-blog) is installed on a site. All translations of a single tag will share the same `translationId`.
       * @readonly
       */
      translationId?: string | null;
      /**
       * Tag language.
       *
       * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       */
      language?: string | null;
      /**
       * SEO data.
       * @internal
       */
      seoData?: SeoSchema;
  }
  /**
   * The SEO schema object contains data about different types of meta tags. It makes sure that the information about your page is presented properly to search engines.
   * The search engines use this information for ranking purposes, or to display snippets in the search results.
   * This data will override other sources of tags (for example patterns) and will be included in the <head> section of the HTML document, while not being displayed on the page itself.
   */
  interface SeoSchema {
      /** SEO tag information. */
      tags?: SeoSchemaTag[];
      /** SEO general settings. */
      settings?: Settings;
  }
  interface Keyword {
      /** Keyword value. */
      term?: string;
      /** Whether the keyword is the main focus keyword. */
      isMain?: boolean;
  }
  interface SeoSchemaTag {
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
  interface InitialTagsCopied {
      /** Number of tags copied. */
      count?: number;
  }
  interface GetOrCreateTagRequest {
      /** Tag name. Unique per blog. */
      label: string;
      /** Tag language. */
      language?: string | null;
      /**
       * List of tag fields to be included in the response.
       * @internal
       */
      fieldsToInclude?: Field[];
      /**
       * List of tag fields to be included if entities are present in the response.
       * Base fieldset, which is default, will return all core tag properties.
       * Example: When URL fieldset is selected, returned tag will have a set of base properties and tag url.
       */
      fieldsets?: Field[];
      /**
       * SEO data.
       * @internal
       */
      seoData?: SeoSchema;
  }
  enum Field {
      UNKNOWN = "UNKNOWN",
      /** Includes Tag URL when present. */
      URL = "URL",
      /** Includes SEO data. */
      SEO = "SEO"
  }
  interface GetOrCreateTagResponse {
      /** Tag info. */
      tag?: Tag;
  }
  interface CreateTagRequest {
      /** Tag label. The label for each tag in a blog must be unique. */
      label: string;
      /**
       * Tag language.
       *
       * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       */
      language?: string | null;
      /** Preferred tag slug. For example, `'tag-slug'`. */
      slug?: string | null;
      /**
       * List of tag fields to be included in the response.
       * @internal
       */
      fieldsToInclude?: Field[];
      /**
       * List of additional tag fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the tag's base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the tag's base fields are returned.
       */
      fieldsets?: Field[];
      /**
       * SEO data.
       * @internal
       */
      seoData?: SeoSchema;
  }
  interface CreateTagResponse {
      /** Tag info. */
      tag?: Tag;
  }
  interface UpdateTagRequest {
      /** Tag info. */
      tag?: Tag;
      /**
       * Field mask of fields to update.
       * @internal
       */
      fieldMask?: string[];
      /**
       * List of tag fields to be included if entities are present in the response.
       * Base fieldset, which is default, will return all core tag properties.
       * Example: When URL fieldset is selected, returned tag will have a set of base properties and tag url.
       */
      fieldsets?: Field[];
  }
  interface UpdateTagResponse {
      /** Tag info. */
      tag?: Tag;
  }
  interface BulkCreateTagsRequest {
      /** Tags to create. */
      tags: Tag[];
      /** Whether to return the full created tag entities in the response. */
      returnFullEntity?: boolean;
      /**
       * List of tag fields to be included in the response.
       * @internal
       */
      fieldsToInclude?: Field[];
      /**
       * List of tag fields to be included if entities are present in the response.
       * Base fieldset, which is default, will return all core tag properties.
       * Example: When URL fieldset is selected, returned tag will have a set of base properties and tag url.
       */
      fieldsets?: Field[];
  }
  interface BulkCreateTagsResponse {
      /** Tags created by bulk action. */
      results?: BulkTagResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkTagResult {
      /** Bulk actions metadata for tag. */
      itemMetadata?: ItemMetadata;
      /** Optional created tag. */
      item?: Tag;
  }
  interface ItemMetadata {
      /** Item ID. Should always be available, unless it's impossible (for example, when failing to create an item). */
      _id?: string | null;
      /** Index of the item within the request array. Allows for correlation between request and response items. */
      originalIndex?: number;
      /** Whether the requested action was successful for this item. When `false`, the `error` field is populated. */
      success?: boolean;
      /** Details about the error in case of failure. */
      error?: ApplicationError;
  }
  interface ApplicationError {
      /** Error code. */
      code?: string;
      /** Description of the error. */
      description?: string;
      /** Data related to the error. */
      data?: Record<string, any> | null;
  }
  interface BulkActionMetadata {
      /** Number of items that were successfully processed. */
      totalSuccesses?: number;
      /** Number of items that couldn't be processed. */
      totalFailures?: number;
      /** Number of failures without details because detailed failure threshold was exceeded. */
      undetailedFailures?: number;
  }
  interface GetTagsCountByLanguageRequest {
  }
  interface GetTagsCountByLanguageResponse {
      /** The language and it's count. */
      tagsLanguageCount?: TagLanguageCount[];
  }
  interface TagLanguageCount {
      /** 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format. */
      languageCode?: string | null;
      /** The count of tags for the language. */
      tagCount?: number | null;
  }
  interface GetTagByLabelRequest {
      /** Tag label. */
      label: string;
      /**
       * Tag language.
       *
       * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       * If omitted, tags in all languages are returned.
       */
      language?: string | null;
      /**
       * __Deprecated.__ Use `fieldsets` instead.
       * This parameter will be removed on June 30, 2023.
       *
       * List of tag fields to be included in the response.
       */
      fieldsToInclude?: Field[];
      /**
       * List of additional tag fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the tag's base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the tag's base fields are returned.
       */
      fieldsets?: Field[];
  }
  interface GetTagByLabelResponse {
      /** Tag info. */
      tag?: Tag;
  }
  interface GetTagRequest {
      /** Tag ID. */
      tagId: string;
      /**
       * __Deprecated.__ Use `fieldsets` instead.
       * This parameter will be removed on June 30, 2023.
       *
       * List of tag fields to be included in the response.
       */
      fieldsToInclude?: Field[];
      /**
       * List of additional tag fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the tag's base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the tag's base fields are returned.
       */
      fieldsets?: Field[];
  }
  interface GetTagResponse {
      /** Tag info. */
      tag?: Tag;
  }
  interface GetTagBySlugRequest {
      /** Slug of the tag to retrieve. */
      slug: string;
      /**
       * __Deprecated.__ Use `fieldsets` instead.
       * This parameter will be removed on June 30, 2023.
       *
       * List of tag fields to be included in the response.
       */
      fieldsToInclude?: Field[];
      /**
       * List of additional tag fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the tag's base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the tag's base fields are returned.
       */
      fieldsets?: Field[];
  }
  interface GetTagBySlugResponse {
      /** Tag info. */
      tag?: Tag;
  }
  interface QueryTagsRequest {
      /**
       * __Deprecated.__ Use `query` instead.
       * This parameter will be removed on June 30, 2023.
       *
       * Filter object.
       * For a detailed list of supported filters, see [Field Support for Filtering and Sorting](https://dev.wix.com/api/rest/community/blog/filter-and-sort).
       */
      filter?: Record<string, any> | null;
      /**
       * __Deprecated.__ Use `query` instead.
       * This parameter will be removed on June 30, 2023.
       *
       * Sorting options. For a list of sortable fields, see [Field Support for Filtering and Sorting](https://dev.wix.com/api/rest/community/blog/filter-and-sort).
       */
      sort?: Sorting[];
      /**
       * __Deprecated.__ Use `query` instead.
       * This parameter will be removed on June 30, 2023.
       *
       * Pagination options.
       */
      paging?: Paging;
      /**
       * Tag fields to be included in the response.
       * @internal
       * @readonly
       */
      fieldSet?: TagsFieldSet;
      /**
       * __Deprecated.__ Use `fieldsets` instead.
       * This parameter will be removed on June 30, 2023.
       *
       * List of tag fields to be included in the response.
       */
      fieldsToInclude?: Field[];
      /** Query options. */
      query?: PlatformQuery;
      /**
       * List of additional tag fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the tag's base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the tag's base fields are returned.
       */
      fieldsets?: Field[];
  }
  interface Sorting {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
      order?: SortOrder;
      /**
       * When `field_name` is a property of repeated field that is marked as `MATCH_ITEMS` and sort should be done by
       * a specific element from a collection, filter can/should be provided to ensure correct sort value is picked.
       *
       * If multiple filters are provided, they are combined with AND operator.
       *
       * Example:
       * Given we have document like {"id": "1", "nestedField": [{"price": 10, "region": "EU"}, {"price": 20, "region": "US"}]}
       * and `nestedField` is marked as `MATCH_ITEMS`, to ensure that sorting is done by correct region, filter should be
       * { fieldName: "nestedField.price", "select_items_by": [{"nestedField.region": "US"}] }
       * @internal
       */
      selectItemsBy?: Record<string, any>[] | null;
  }
  enum SortOrder {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface Paging {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface TagsFieldSet {
      /** Includes tag URL when TRUE. Defaults to FALSE. */
      includeUrl?: boolean;
      /**
       * Includes SEO data.
       * @internal
       */
      includeSeo?: boolean;
  }
  interface PlatformQuery extends PlatformQueryPagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`
       * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
       */
      filter?: Record<string, any> | null;
      /**
       * Sort object in the following format:
       * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
       */
      sort?: Sorting[];
  }
  /** @oneof */
  interface PlatformQueryPagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
  }
  interface CursorPaging {
      /** Number of items to load. */
      limit?: number | null;
      /**
       * Pointer to the next or previous page in the list of results.
       *
       * You can get the relevant cursor token
       * from the `pagingMetadata` object in the previous call's response.
       * Not relevant for the first request.
       */
      cursor?: string | null;
  }
  interface QueryTagsResponse {
      /** List of tags. */
      tags?: Tag[];
      /**
       * __Deprecated.__ Use `pagingMetadata` instead.
       * This property will be removed on June 30, 2023.
       *
       * Details on the paged set of results returned.
       */
      metaData?: MetaData;
      /** Details on the paged set of results returned. */
      pagingMetadata?: PagingMetadataV2;
  }
  interface MetaData {
      /** Number of items returned in this response. */
      count?: number;
      /** Requested offset. */
      offset?: number;
      /** Total number of items that match the query. */
      total?: number;
      /** Pointer to the next or previous page in the list of results. */
      cursor?: string | null;
  }
  interface PagingMetadataV2 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      offset?: number | null;
      /** Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set. */
      total?: number | null;
      /** Flag that indicates the server failed to calculate the `total` field. */
      tooManyToCount?: boolean | null;
      /** Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used. */
      cursors?: Cursors;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       * @internal
       */
      hasNext?: boolean | null;
  }
  interface Cursors {
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  interface ListTagsRequest extends ListTagsRequestPagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `sort`. */
      cursorPaging?: CursorPaging;
      /** Sorting options. For a list of sortable fields, see [Field Support for Filtering and Sorting](https://dev.wix.com/api/rest/community/blog/filter-and-sort). */
      sort?: Sorting[];
      /**
       * List of tag fields to be included in the response.
       * @internal
       */
      fieldsToInclude?: Field[];
      /**
       * List of tag fields to be included if entities are present in the response.
       * Base fieldset, which is default, will return all core tag properties.
       * Example: When URL fieldset is selected, returned tag will have a set of base properties and tag url.
       */
      fieldsets?: Field[];
  }
  /** @oneof */
  interface ListTagsRequestPagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `sort`. */
      cursorPaging?: CursorPaging;
  }
  interface ListTagsResponse {
      /** List of tags. */
      tags?: Tag[];
      /** Details on the paged set of results returned. */
      metaData?: MetaData;
  }
  interface BulkDeleteTagRequest {
      /** Tag IDs. */
      tagIds: string[];
  }
  interface BulkDeleteTagResponse {
  }
  interface DeleteTagRequest {
      /** Tag ID. */
      tagId: string;
  }
  interface DeleteTagResponse {
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
  interface MessageEnvelope {
      /** App instance ID. */
      instanceId?: string | null;
      /** Event type. */
      eventType?: string;
      /** The identification type and identity data. */
      identity?: IdentificationData;
      /** Stringify payload. */
      data?: string;
  }
  interface IdentificationData extends IdentificationDataIdOneOf {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
      /** @readonly */
      identityType?: WebhookIdentityType;
  }
  /** @oneof */
  interface IdentificationDataIdOneOf {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
  }
  enum WebhookIdentityType {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  /**
   * If a tag already exists with the provided label, returns this tag. Otherwise, the request creates a new tag with the provided label.
   * @param label - Tag name. Unique per blog.
   * @internal
   * @documentationMaturity preview
   * @requiredField label
   */
  function getOrCreateTag(label: string, options?: GetOrCreateTagOptions): Promise<GetOrCreateTagResponse>;
  interface GetOrCreateTagOptions {
      /** Tag language. */
      language?: string | null;
      /**
       * List of tag fields to be included in the response.
       * @internal
       */
      fieldsToInclude?: Field[];
      /**
       * List of tag fields to be included if entities are present in the response.
       * Base fieldset, which is default, will return all core tag properties.
       * Example: When URL fieldset is selected, returned tag will have a set of base properties and tag url.
       */
      fieldsets?: Field[];
      /**
       * SEO data.
       * @internal
       */
      seoData?: SeoSchema;
  }
  /**
   * Creates a new tag with the provided label if a tag with the same label doesn't already exist.
   * @param label - Tag label. The label for each tag in a blog must be unique.
   * @internal
   * @documentationMaturity preview
   * @requiredField label
   * @adminMethod
   */
  function createTag(label: string, options?: CreateTagOptions): Promise<CreateTagResponse>;
  interface CreateTagOptions {
      /**
       * Tag language.
       *
       * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       */
      language?: string | null;
      /** Preferred tag slug. For example, `'tag-slug'`. */
      slug?: string | null;
      /**
       * List of tag fields to be included in the response.
       * @internal
       */
      fieldsToInclude?: Field[];
      /**
       * List of additional tag fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
       * the response in addition to the tag's base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the tag's base fields are returned.
       */
      fieldsets?: Field[];
      /**
       * SEO data.
       * @internal
       */
      seoData?: SeoSchema;
  }
  /**
   * Updates a tag.
   * @param _id - Tag ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @adminMethod
   * @returns Tag info.
   */
  function updateTag(_id: string, options?: UpdateTagOptions): Promise<Tag>;
  interface UpdateTagOptions {
      tag: {
          /**
           * Tag ID.
           * @readonly
           */
          _id?: string;
          /**
           * Tag label.
           *
           * A blog can't have two tags with the same label.
           */
          label?: string;
          /**
           * Part of a tag's URL that refers to a specific tag.
           *
           *
           * For example, `'https:/example.com/tags/{my-tag-slug}'`.
           */
          slug?: string;
          /**
           * Date the tag was created.
           * @readonly
           */
          _createdDate?: Date;
          /**
           * Date the tag was last updated.
           * @readonly
           */
          _updatedDate?: Date;
          /**
           * Reserved for internal use.
           * @readonly
           */
          publicationCount?: number;
          /**
           * Number of posts with this tag, including unpublished draft posts.
           * @readonly
           */
          postCount?: number;
          /**
           * Tag URL.
           *
           *
           * The `url` directs you to a page that lists every post with the specified tag.
           * @readonly
           */
          url?: string;
          /**
           * Number of published posts with this tag.
           * @readonly
           */
          publishedPostCount?: number;
          /**
           * ID of the tag's translations when [Wix Multilingual](https://support.wix.com/en/article/wix-multilingual-translating-your-blog) is installed on a site. All translations of a single tag will share the same `translationId`.
           * @readonly
           */
          translationId?: string | null;
          /**
           * Tag language.
           *
           * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
           */
          language?: string | null;
          /**
           * SEO data.
           * @internal
           */
          seoData?: SeoSchema;
      };
      /**
       * Field mask of fields to update.
       * @internal
       */
      fieldMask?: string[];
      /**
       * List of tag fields to be included if entities are present in the response.
       * Base fieldset, which is default, will return all core tag properties.
       * Example: When URL fieldset is selected, returned tag will have a set of base properties and tag url.
       */
      fieldsets?: Field[];
  }
  /**
   * Creates multiple tags.
   * @param tags - Tags to create.
   * @internal
   * @documentationMaturity preview
   * @requiredField tags
   * @requiredField tags.label
   * @adminMethod
   */
  function bulkCreateTags(tags: Tag[], options?: BulkCreateTagsOptions): Promise<BulkCreateTagsResponse>;
  interface BulkCreateTagsOptions {
      /** Whether to return the full created tag entities in the response. */
      returnFullEntity?: boolean;
      /**
       * List of tag fields to be included in the response.
       * @internal
       */
      fieldsToInclude?: Field[];
      /**
       * List of tag fields to be included if entities are present in the response.
       * Base fieldset, which is default, will return all core tag properties.
       * Example: When URL fieldset is selected, returned tag will have a set of base properties and tag url.
       */
      fieldsets?: Field[];
  }
  /**
   * Retrieves a count of tags for every site language.
   * @internal
   * @documentationMaturity preview
   */
  function getTagsCountByLanguage(): Promise<GetTagsCountByLanguageResponse>;
  /**
   * Gets a tag by the specified label.
   *
   * The `getTagByLabel()` function returns a Promise that resolves to a tag whose label matches the specified label.
   * @param label - Tag label.
   * @public
   * @requiredField label
   * @param options - Options specifying which additional fields to return.
   */
  function getTagByLabel(label: string, options?: GetTagByLabelOptions): Promise<GetTagByLabelResponse>;
  interface GetTagByLabelOptions {
      /**
       * Tag language.
       *
       * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       * If omitted, tags in all languages are returned.
       */
      language?: string | null;
      /** @internal */
      fieldsToInclude?: Field[];
      /**
       * List of additional tag fields to be included in the response. By default, any fields not passed are not returned.
       *
       * Supported Values:
       *  `"URL"`
       */
      fieldsets?: Field[];
  }
  /**
   * Gets a tag by the specified ID.
   *
   *
   * The `getTag()` function returns a Promise that resolves to a tag whose ID matches the specified ID.
   * @param tagId - Tag ID.
   * @public
   * @requiredField tagId
   * @param options - Options specifying which additional fields to return.
   * @returns Tag info.
   */
  function getTag(tagId: string, options?: GetTagOptions): Promise<Tag>;
  interface GetTagOptions {
      /** @internal */
      fieldsToInclude?: Field[];
      /**
       * List of additional tag fields to be included in the response. By default, any fields not passed are not returned.
       *
       * Supported Values:
       *  `"URL"`
       */
      fieldsets?: Field[];
  }
  /**
   * Gets a tag by the specified slug.
   *
   *
   * The `getTagBySlug()` function returns a Promise that resolves to a tag whose slug matches the specified slug.
   *
   * The `slug` is the end of a tag's URL that refers to a specific tag. For example, if a tag's URL is `https://example.com/blog/tag/{my-tag-slug}`, the slug is `my-tag-slug`. The slug is case-sensitive and derived from the tag's `label`.
   * @param slug - Slug of the tag to retrieve.
   * @public
   * @requiredField slug
   * @param options - Options specifying which additional fields to return.
   */
  function getTagBySlug(slug: string, options?: GetTagBySlugOptions): Promise<GetTagBySlugResponse>;
  interface GetTagBySlugOptions {
      /** @internal */
      fieldsToInclude?: Field[];
      /**
       * List of additional tag fields to be included in the response. By default, any fields not passed are not returned.
       *
       * Supported Values:
       *  `"URL"`
       */
      fieldsets?: Field[];
  }
  /**
   * Creates a query to retrieve a list of tags.
   *
   *
   * The `queryTags()` function builds a query to retrieve a list of up to 4,000 tags per language, and returns a [`TagsQueryBuilder`](https://www.wix.com/velo/reference/wix-blog-backend/tags/tagsquerybuilder) object.
   *
   * The returned object contains the query definition, which is typically used to run the query using the [`find()`](https://www.wix.com/velo/reference/wix-blog-backend/tags/tagsquerybuilder/find) function.
   *
   * You can refine the query by chaining `TagsQueryBuilder` functions onto the query. `TagsQueryBuilder` functions enable you to sort, filter, and control the results that `queryTags()` returns.
   *
   * `queryTags()` runs with these `TagsQueryBuilder` defaults that can be overridden:
   * - [`limit(50)`](https://www.wix.com/velo/reference/wix-blog-backend/tags/tagsquerybuilder/limit)
   * - [`ascending('_id')`](https://www.wix.com/velo/reference/wix-blog-backend/tags/tagsquerybuilder/ascending)
   *
   * The following `TagQueryBuilder` functions are supported for `queryTags()`. For a full description of the Tags object, see the object returned for the [`items`](https://www.wix.com/velo/reference/wix-blog-backend/tags/tagsqueryresult/items) property in [`TagsQueryResult`](https://www.wix.com/velo/reference/wix-blog-backend/tags/tagsqueryresult).
   * @public
   * @param options - Options specifying which fields to return.
   */
  function queryTags(options?: QueryTagsOptions): TagsQueryBuilder;
  interface QueryTagsOptions {
      /** @internal */
      filter?: Record<string, any> | null | undefined;
      /** @internal */
      sort?: Sorting[] | undefined;
      /** @internal */
      paging?: Paging | undefined;
      /**
       * @internal
       * @internal
       * @readonly
       */
      fieldSet?: TagsFieldSet | undefined;
      /** @internal */
      fieldsToInclude?: Field[] | undefined;
      /**
       * List of additional tag fields to be included in the response. By default, any fields not passed are not returned.
       *
       * Supported Values:
       *  `"URL"`
       */
      fieldsets?: Field[] | undefined;
  }
  interface QueryOffsetResult {
      currentPage: number | undefined;
      totalPages: number | undefined;
      totalCount: number | undefined;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface TagsQueryResult extends QueryOffsetResult {
      items: Tag[];
      query: TagsQueryBuilder;
      next: () => Promise<TagsQueryResult>;
      prev: () => Promise<TagsQueryResult>;
  }
  interface TagsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      eq: (propertyName: '_id' | 'label' | 'slug' | 'publicationCount' | 'postCount' | 'translationId' | 'language', value: any) => TagsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      ne: (propertyName: '_id' | 'label' | 'slug' | 'publicationCount' | 'postCount' | 'translationId' | 'language', value: any) => TagsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      ge: (propertyName: 'publicationCount' | 'postCount', value: any) => TagsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      gt: (propertyName: 'publicationCount' | 'postCount', value: any) => TagsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      le: (propertyName: 'publicationCount' | 'postCount', value: any) => TagsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      lt: (propertyName: 'publicationCount' | 'postCount', value: any) => TagsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       */
      startsWith: (propertyName: 'label' | 'slug', value: string) => TagsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       */
      hasSome: (propertyName: '_id' | 'label' | 'slug', value: any[]) => TagsQueryBuilder;
      in: (propertyName: 'label' | 'slug' | 'publicationCount' | 'postCount' | 'translationId' | 'language', value: any) => TagsQueryBuilder;
      exists: (propertyName: 'label' | 'slug' | 'translationId' | 'language', value: boolean) => TagsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments. */
      ascending: (...propertyNames: Array<'label' | 'slug' | 'publicationCount' | 'postCount' | 'language'>) => TagsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments. */
      descending: (...propertyNames: Array<'label' | 'slug' | 'publicationCount' | 'postCount' | 'language'>) => TagsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object. */
      limit: (limit: number) => TagsQueryBuilder;
      /** @param skip - Number of items to skip in the query results before returning the results. */
      skip: (skip: number) => TagsQueryBuilder;
      find: () => Promise<TagsQueryResult>;
  }
  /**
   * Lists tags. Default sort is descending by post count and default tag size is 50.
   * @internal
   * @documentationMaturity preview
   */
  function listTags(options?: ListTagsOptions): Promise<ListTagsResponse>;
  interface ListTagsOptions extends ListTagsRequestPagingMethodOneOf {
      /** Sorting options. For a list of sortable fields, see [Field Support for Filtering and Sorting](https://dev.wix.com/api/rest/community/blog/filter-and-sort). */
      sort?: Sorting[];
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `sort`. */
      cursorPaging?: CursorPaging;
      /**
       * List of tag fields to be included in the response.
       * @internal
       */
      fieldsToInclude?: Field[];
      /**
       * List of tag fields to be included if entities are present in the response.
       * Base fieldset, which is default, will return all core tag properties.
       * Example: When URL fieldset is selected, returned tag will have a set of base properties and tag url.
       */
      fieldsets?: Field[];
  }
  /**
   * Bulk delete for tags
   * @param tagIds - Tag IDs.
   * @internal
   * @documentationMaturity preview
   * @requiredField tagIds
   * @adminMethod
   */
  function bulkDeleteTag(tagIds: string[]): Promise<void>;
  /**
   * Deletes a tag. Deleting a tag removes that tag from all blog posts that contain it.
   * @param tagId - Tag ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField tagId
   * @adminMethod
   */
  function deleteTag(tagId: string): Promise<void>;
  
  type blogV3Tag_universal_d_Tag = Tag;
  type blogV3Tag_universal_d_SeoSchema = SeoSchema;
  type blogV3Tag_universal_d_Keyword = Keyword;
  type blogV3Tag_universal_d_SeoSchemaTag = SeoSchemaTag;
  type blogV3Tag_universal_d_Settings = Settings;
  type blogV3Tag_universal_d_InitialTagsCopied = InitialTagsCopied;
  type blogV3Tag_universal_d_GetOrCreateTagRequest = GetOrCreateTagRequest;
  type blogV3Tag_universal_d_Field = Field;
  const blogV3Tag_universal_d_Field: typeof Field;
  type blogV3Tag_universal_d_GetOrCreateTagResponse = GetOrCreateTagResponse;
  type blogV3Tag_universal_d_CreateTagRequest = CreateTagRequest;
  type blogV3Tag_universal_d_CreateTagResponse = CreateTagResponse;
  type blogV3Tag_universal_d_UpdateTagRequest = UpdateTagRequest;
  type blogV3Tag_universal_d_UpdateTagResponse = UpdateTagResponse;
  type blogV3Tag_universal_d_BulkCreateTagsRequest = BulkCreateTagsRequest;
  type blogV3Tag_universal_d_BulkCreateTagsResponse = BulkCreateTagsResponse;
  type blogV3Tag_universal_d_BulkTagResult = BulkTagResult;
  type blogV3Tag_universal_d_ItemMetadata = ItemMetadata;
  type blogV3Tag_universal_d_ApplicationError = ApplicationError;
  type blogV3Tag_universal_d_BulkActionMetadata = BulkActionMetadata;
  type blogV3Tag_universal_d_GetTagsCountByLanguageRequest = GetTagsCountByLanguageRequest;
  type blogV3Tag_universal_d_GetTagsCountByLanguageResponse = GetTagsCountByLanguageResponse;
  type blogV3Tag_universal_d_TagLanguageCount = TagLanguageCount;
  type blogV3Tag_universal_d_GetTagByLabelRequest = GetTagByLabelRequest;
  type blogV3Tag_universal_d_GetTagByLabelResponse = GetTagByLabelResponse;
  type blogV3Tag_universal_d_GetTagRequest = GetTagRequest;
  type blogV3Tag_universal_d_GetTagResponse = GetTagResponse;
  type blogV3Tag_universal_d_GetTagBySlugRequest = GetTagBySlugRequest;
  type blogV3Tag_universal_d_GetTagBySlugResponse = GetTagBySlugResponse;
  type blogV3Tag_universal_d_QueryTagsRequest = QueryTagsRequest;
  type blogV3Tag_universal_d_Sorting = Sorting;
  type blogV3Tag_universal_d_SortOrder = SortOrder;
  const blogV3Tag_universal_d_SortOrder: typeof SortOrder;
  type blogV3Tag_universal_d_Paging = Paging;
  type blogV3Tag_universal_d_TagsFieldSet = TagsFieldSet;
  type blogV3Tag_universal_d_PlatformQuery = PlatformQuery;
  type blogV3Tag_universal_d_PlatformQueryPagingMethodOneOf = PlatformQueryPagingMethodOneOf;
  type blogV3Tag_universal_d_CursorPaging = CursorPaging;
  type blogV3Tag_universal_d_QueryTagsResponse = QueryTagsResponse;
  type blogV3Tag_universal_d_MetaData = MetaData;
  type blogV3Tag_universal_d_PagingMetadataV2 = PagingMetadataV2;
  type blogV3Tag_universal_d_Cursors = Cursors;
  type blogV3Tag_universal_d_ListTagsRequest = ListTagsRequest;
  type blogV3Tag_universal_d_ListTagsRequestPagingMethodOneOf = ListTagsRequestPagingMethodOneOf;
  type blogV3Tag_universal_d_ListTagsResponse = ListTagsResponse;
  type blogV3Tag_universal_d_BulkDeleteTagRequest = BulkDeleteTagRequest;
  type blogV3Tag_universal_d_BulkDeleteTagResponse = BulkDeleteTagResponse;
  type blogV3Tag_universal_d_DeleteTagRequest = DeleteTagRequest;
  type blogV3Tag_universal_d_DeleteTagResponse = DeleteTagResponse;
  type blogV3Tag_universal_d_DomainEvent = DomainEvent;
  type blogV3Tag_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type blogV3Tag_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type blogV3Tag_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type blogV3Tag_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type blogV3Tag_universal_d_ActionEvent = ActionEvent;
  type blogV3Tag_universal_d_MessageEnvelope = MessageEnvelope;
  type blogV3Tag_universal_d_IdentificationData = IdentificationData;
  type blogV3Tag_universal_d_IdentificationDataIdOneOf = IdentificationDataIdOneOf;
  type blogV3Tag_universal_d_WebhookIdentityType = WebhookIdentityType;
  const blogV3Tag_universal_d_WebhookIdentityType: typeof WebhookIdentityType;
  const blogV3Tag_universal_d_getOrCreateTag: typeof getOrCreateTag;
  type blogV3Tag_universal_d_GetOrCreateTagOptions = GetOrCreateTagOptions;
  const blogV3Tag_universal_d_createTag: typeof createTag;
  type blogV3Tag_universal_d_CreateTagOptions = CreateTagOptions;
  const blogV3Tag_universal_d_updateTag: typeof updateTag;
  type blogV3Tag_universal_d_UpdateTagOptions = UpdateTagOptions;
  const blogV3Tag_universal_d_bulkCreateTags: typeof bulkCreateTags;
  type blogV3Tag_universal_d_BulkCreateTagsOptions = BulkCreateTagsOptions;
  const blogV3Tag_universal_d_getTagsCountByLanguage: typeof getTagsCountByLanguage;
  const blogV3Tag_universal_d_getTagByLabel: typeof getTagByLabel;
  type blogV3Tag_universal_d_GetTagByLabelOptions = GetTagByLabelOptions;
  const blogV3Tag_universal_d_getTag: typeof getTag;
  type blogV3Tag_universal_d_GetTagOptions = GetTagOptions;
  const blogV3Tag_universal_d_getTagBySlug: typeof getTagBySlug;
  type blogV3Tag_universal_d_GetTagBySlugOptions = GetTagBySlugOptions;
  const blogV3Tag_universal_d_queryTags: typeof queryTags;
  type blogV3Tag_universal_d_QueryTagsOptions = QueryTagsOptions;
  type blogV3Tag_universal_d_TagsQueryResult = TagsQueryResult;
  type blogV3Tag_universal_d_TagsQueryBuilder = TagsQueryBuilder;
  const blogV3Tag_universal_d_listTags: typeof listTags;
  type blogV3Tag_universal_d_ListTagsOptions = ListTagsOptions;
  const blogV3Tag_universal_d_bulkDeleteTag: typeof bulkDeleteTag;
  const blogV3Tag_universal_d_deleteTag: typeof deleteTag;
  namespace blogV3Tag_universal_d {
    export {
      blogV3Tag_universal_d_Tag as Tag,
      blogV3Tag_universal_d_SeoSchema as SeoSchema,
      blogV3Tag_universal_d_Keyword as Keyword,
      blogV3Tag_universal_d_SeoSchemaTag as SeoSchemaTag,
      blogV3Tag_universal_d_Settings as Settings,
      blogV3Tag_universal_d_InitialTagsCopied as InitialTagsCopied,
      blogV3Tag_universal_d_GetOrCreateTagRequest as GetOrCreateTagRequest,
      blogV3Tag_universal_d_Field as Field,
      blogV3Tag_universal_d_GetOrCreateTagResponse as GetOrCreateTagResponse,
      blogV3Tag_universal_d_CreateTagRequest as CreateTagRequest,
      blogV3Tag_universal_d_CreateTagResponse as CreateTagResponse,
      blogV3Tag_universal_d_UpdateTagRequest as UpdateTagRequest,
      blogV3Tag_universal_d_UpdateTagResponse as UpdateTagResponse,
      blogV3Tag_universal_d_BulkCreateTagsRequest as BulkCreateTagsRequest,
      blogV3Tag_universal_d_BulkCreateTagsResponse as BulkCreateTagsResponse,
      blogV3Tag_universal_d_BulkTagResult as BulkTagResult,
      blogV3Tag_universal_d_ItemMetadata as ItemMetadata,
      blogV3Tag_universal_d_ApplicationError as ApplicationError,
      blogV3Tag_universal_d_BulkActionMetadata as BulkActionMetadata,
      blogV3Tag_universal_d_GetTagsCountByLanguageRequest as GetTagsCountByLanguageRequest,
      blogV3Tag_universal_d_GetTagsCountByLanguageResponse as GetTagsCountByLanguageResponse,
      blogV3Tag_universal_d_TagLanguageCount as TagLanguageCount,
      blogV3Tag_universal_d_GetTagByLabelRequest as GetTagByLabelRequest,
      blogV3Tag_universal_d_GetTagByLabelResponse as GetTagByLabelResponse,
      blogV3Tag_universal_d_GetTagRequest as GetTagRequest,
      blogV3Tag_universal_d_GetTagResponse as GetTagResponse,
      blogV3Tag_universal_d_GetTagBySlugRequest as GetTagBySlugRequest,
      blogV3Tag_universal_d_GetTagBySlugResponse as GetTagBySlugResponse,
      blogV3Tag_universal_d_QueryTagsRequest as QueryTagsRequest,
      blogV3Tag_universal_d_Sorting as Sorting,
      blogV3Tag_universal_d_SortOrder as SortOrder,
      blogV3Tag_universal_d_Paging as Paging,
      blogV3Tag_universal_d_TagsFieldSet as TagsFieldSet,
      blogV3Tag_universal_d_PlatformQuery as PlatformQuery,
      blogV3Tag_universal_d_PlatformQueryPagingMethodOneOf as PlatformQueryPagingMethodOneOf,
      blogV3Tag_universal_d_CursorPaging as CursorPaging,
      blogV3Tag_universal_d_QueryTagsResponse as QueryTagsResponse,
      blogV3Tag_universal_d_MetaData as MetaData,
      blogV3Tag_universal_d_PagingMetadataV2 as PagingMetadataV2,
      blogV3Tag_universal_d_Cursors as Cursors,
      blogV3Tag_universal_d_ListTagsRequest as ListTagsRequest,
      blogV3Tag_universal_d_ListTagsRequestPagingMethodOneOf as ListTagsRequestPagingMethodOneOf,
      blogV3Tag_universal_d_ListTagsResponse as ListTagsResponse,
      blogV3Tag_universal_d_BulkDeleteTagRequest as BulkDeleteTagRequest,
      blogV3Tag_universal_d_BulkDeleteTagResponse as BulkDeleteTagResponse,
      blogV3Tag_universal_d_DeleteTagRequest as DeleteTagRequest,
      blogV3Tag_universal_d_DeleteTagResponse as DeleteTagResponse,
      blogV3Tag_universal_d_DomainEvent as DomainEvent,
      blogV3Tag_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      blogV3Tag_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      blogV3Tag_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      blogV3Tag_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      blogV3Tag_universal_d_ActionEvent as ActionEvent,
      blogV3Tag_universal_d_MessageEnvelope as MessageEnvelope,
      blogV3Tag_universal_d_IdentificationData as IdentificationData,
      blogV3Tag_universal_d_IdentificationDataIdOneOf as IdentificationDataIdOneOf,
      blogV3Tag_universal_d_WebhookIdentityType as WebhookIdentityType,
      blogV3Tag_universal_d_getOrCreateTag as getOrCreateTag,
      blogV3Tag_universal_d_GetOrCreateTagOptions as GetOrCreateTagOptions,
      blogV3Tag_universal_d_createTag as createTag,
      blogV3Tag_universal_d_CreateTagOptions as CreateTagOptions,
      blogV3Tag_universal_d_updateTag as updateTag,
      blogV3Tag_universal_d_UpdateTagOptions as UpdateTagOptions,
      blogV3Tag_universal_d_bulkCreateTags as bulkCreateTags,
      blogV3Tag_universal_d_BulkCreateTagsOptions as BulkCreateTagsOptions,
      blogV3Tag_universal_d_getTagsCountByLanguage as getTagsCountByLanguage,
      blogV3Tag_universal_d_getTagByLabel as getTagByLabel,
      blogV3Tag_universal_d_GetTagByLabelOptions as GetTagByLabelOptions,
      blogV3Tag_universal_d_getTag as getTag,
      blogV3Tag_universal_d_GetTagOptions as GetTagOptions,
      blogV3Tag_universal_d_getTagBySlug as getTagBySlug,
      blogV3Tag_universal_d_GetTagBySlugOptions as GetTagBySlugOptions,
      blogV3Tag_universal_d_queryTags as queryTags,
      blogV3Tag_universal_d_QueryTagsOptions as QueryTagsOptions,
      blogV3Tag_universal_d_TagsQueryResult as TagsQueryResult,
      blogV3Tag_universal_d_TagsQueryBuilder as TagsQueryBuilder,
      blogV3Tag_universal_d_listTags as listTags,
      blogV3Tag_universal_d_ListTagsOptions as ListTagsOptions,
      blogV3Tag_universal_d_bulkDeleteTag as bulkDeleteTag,
      blogV3Tag_universal_d_deleteTag as deleteTag,
    };
  }
  
  export { blogV3Category_universal_d as categories, blogV3Draft_universal_d as draftPosts, blogV3Post_universal_d as posts, blogV3Tag_universal_d as tags };
}
