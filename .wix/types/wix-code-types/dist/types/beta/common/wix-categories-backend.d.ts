declare module "wix-categories-backend" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface Category {
      /** Category ID. */
      _id?: string | null;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the time this Category was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Category was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Category name. */
      name?: string | null;
      /**
       * Category image.
       * Pass existing media ID for image previously saved in Wix media manager.
       * Pass full image URL to upload an image to Wix media manager.
       * In case of full url the image will be updated eventually.
       */
      image?: string;
      /**
       * Number of items in this category alone.
       * @readonly
       */
      numberOfItems?: number;
      /**
       * Number of items including all items in subcategories.
       * @internal
       * @readonly
       */
      totalNumberOfItems?: number;
      /** Category description. */
      description?: string | null;
      /**
       * Whether the category is visible to site visitors in dynamic pages (If not passed, the default is `false`).
       * Even if visible is `false`, it can still be added manually to static page.
       * If parent visibility is updated to `false`, all the children visibility will be updated eventually to `false`.
       * It is not allowed to set visible as `true` if at least one of the parent categories has visible `false`.
       */
      visible?: boolean | null;
      /**
       * A category's breadcrumbs, Updated on moved to different parent or on renamed.
       * This field will only be returned if request.fields contains `BREADCRUMBS`
       * @readonly
       */
      breadcrumbs?: BreadcrumbItemValues;
      /** The parent category. */
      parentCategory?: ParentCategory;
      /**
       * A permanent, friendly URL name.
       * If not provided, on create generated automatically.
       * When provided, validated and must be unique.
       */
      slug?: string | null;
      /**
       * Custom SEO data for the category.
       * @internal
       */
      seoData?: SeoSchema;
      /**
       * Category description which supports rich content. It is independent from `description` field and can be used instead of it or in addition to it.
       * In order to use this field you have to integrate with "Ricos" on frontend side. To learn how to do it visit https://ricos.js.org/.
       */
      richContentDescription?: RichContent;
      /**
       * Data related to the tree that contains the category.
       * @internal
       * @readonly
       */
      treeReference?: TreeReference;
      /** Extensions enabling users to save custom data related to the category. */
      extendedFields?: ExtendedFields;
  }
  /** Wrapper for optional BreadcrumbItem values */
  interface BreadcrumbItemValues {
      /**
       * The wrapped BreadcrumbItem values
       * @readonly
       */
      values?: BreadcrumbItem[];
  }
  interface BreadcrumbItem {
      /** Represents the id of the category. */
      categoryId?: string;
      /** Represents the name of the category. Translatable */
      categoryName?: string;
      /** Represents the slug. A permanent, friendly URL name of the category. */
      categorySlug?: string;
  }
  interface ParentCategory {
      /**
       * Represents the id of the parent category.
       * If not passed, the default is the root category.
       */
      _id?: string | null;
      /**
       * Represents the index of current category within the parent category.
       * @readonly
       */
      index?: number | null;
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
      type?: Type;
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
  enum Type {
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
       * he HTML `target` attribute value for the link. This property defines where the linked document opens as follows:
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
      /** Indicates that this link protect referral information from being passed to the target website. */
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
      /** Text is spaced to line up its left and right edges to the left and right edges of the line box, except for the last line */
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
  interface Media {
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
      media?: Media;
      /** Link details for images that are links. */
      link?: Link;
  }
  interface Video {
      /** Video file details. */
      media?: Media;
      /** Video thumbnail file details. */
      thumbnail?: Media;
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
      image?: Media;
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
      image?: Media;
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
      image?: Media;
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
      image?: Media;
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
      image?: Media;
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
      image?: Media;
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
      video?: Media;
      /** Video thumbnail details. */
      thumbnail?: Media;
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
      audio?: Media;
      /** Sets whether the audio node's download button is disabled. */
      disableDownload?: boolean | null;
      /** Cover image. */
      coverImage?: Media;
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
  interface TreeReference {
      /** The unique namespace of the app. */
      appNamespace?: string;
      /** Optional - The key of the tree. Must be provided when single app manages more than one tree. */
      treeKey?: string | null;
  }
  interface ExtendedFields {
      /**
       * Extended field data as key:object pairs. Each key corresponds to the namespace of the app that created the extended fields.
       * The value of each key is structured according to the schema defined when the extended fields were created.
       *
       * You can only access fields for which you have the appropriate permissions.
       */
      namespaces?: Record<string, Record<string, any>>;
  }
  interface CreateCategoryRequest {
      /** Category to be created. */
      category: Category;
      /** A reference to the tree that contains this category. */
      treeReference: TreeReference;
      /** Fields to return in the response. When not provided, these fields are not returned. */
      fields?: RequestedFields[];
  }
  enum RequestedFields {
      UNKNOWN_REQUESTED_FIELD = "UNKNOWN_REQUESTED_FIELD",
      BREADCRUMBS = "BREADCRUMBS"
  }
  interface CreateCategoryResponse {
      /** The created Category. */
      category?: Category;
  }
  interface GetCategoryRequest {
      /** Id of the Category to retrieve. */
      categoryId: string;
      /** A reference to the tree that contains this category. */
      treeReference: TreeReference;
      /** Fields to return in the response. When not provided, these fields are not returned. */
      fields?: RequestedFields[];
  }
  interface GetCategoryResponse {
      /** The retrieved Category. */
      category?: Category;
  }
  interface UpdateCategoryRequest {
      /** Category to be updated, may be partial. */
      category: Category;
      /** A reference to the tree that contains this category. */
      treeReference: TreeReference;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      fieldMask?: string[];
      /** Fields to return in the response. When not provided, these fields are not returned. */
      fields?: RequestedFields[];
  }
  interface UpdateCategoryResponse {
      /** The updated Category. */
      category?: Category;
  }
  interface DeleteCategoryRequest {
      /** Id of the Category to delete. */
      categoryId: string;
      /** A reference to the tree that contains this category. */
      treeReference: TreeReference;
  }
  interface DeleteCategoryResponse {
  }
  interface QueryCategoriesRequest {
      /** WQL query expression. */
      query: CursorQuery;
      /**
       * A reference to the tree that contains this category.
       * Used only in the first request. Following requests use the cursor token.
       */
      treeReference: TreeReference;
      /**
       * Whether hidden categories should be included in the response. Default is `false`.
       * Used only in the first request. Following requests use the cursor token.
       */
      includeHidden?: boolean;
      /** Fields to return in the response. When not provided, these fields are not returned. */
      fields?: RequestedFields[];
  }
  interface CursorQuery extends CursorQueryPagingMethodOneOf {
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
  interface CursorQueryPagingMethodOneOf {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
  }
  interface Sorting {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
      order?: SortOrder;
  }
  enum SortOrder {
      ASC = "ASC",
      DESC = "DESC"
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
  interface QueryCategoriesResponse {
      /** Categories which satisfy the provided query. */
      categories?: Category[];
      /** Paging metadata. Contains cursor which can be used in next query. */
      pagingMetadata?: CursorPagingMetadata;
  }
  interface CursorPagingMetadata {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      cursors?: Cursors;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       */
      hasNext?: boolean | null;
  }
  interface Cursors {
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  interface PlaceCategoryInParentCategoryRequest {
      /** ID of category to place. */
      categoryId: string;
      /** A reference to the tree that contains this category. */
      treeReference: TreeReference;
      /**
       * ID of parent category.
       * Optional. When not passed it will fallback to the root category
       */
      parentCategoryId?: string | null;
      /**
       * Where to place the subcategory.
       * `FIRST` - make category with `category_id` first subcategory with manual arrangement.
       * `LAST` - make category with `category_id` last subcategory with manual arrangement.
       * `BEFORE` - requires `move_before_category_id`, category with `category_id` will be moved before it.
       */
      position: PlaceCategoryInParentCategoryRequestPosition;
      /** Required when `position` is `BEFORE`. Otherwise ignored */
      moveBeforeCategoryId?: string | null;
  }
  enum PlaceCategoryInParentCategoryRequestPosition {
      UNKNOWN_POSITION = "UNKNOWN_POSITION",
      FIRST = "FIRST",
      LAST = "LAST",
      BEFORE = "BEFORE"
  }
  interface PlaceCategoryInParentCategoryResponse {
      /** ID of parent category. */
      parentCategoryId?: string | null;
      /** Information about manually arranged categories after move. */
      arrangedCategoriesAfterMove?: string[];
  }
  interface BulkCreateCategoriesRequest {
      /** List of categories to be created. */
      categories: Category[];
      /** A reference to the tree that contains the categories. */
      treeReference: TreeReference;
      /** Whether to return the category entity in the response. */
      returnEntity?: boolean;
  }
  interface BulkCreateCategoriesResponse {
      /** Categories created by bulk action. */
      results?: BulkCategoriesResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkCategoriesResult {
      /** Information about successful action or error for failure. */
      itemMetadata?: ItemMetadata;
      /** Created or updated category. Optional - returned only if requested with `return_entity` set to `true`. */
      category?: Category;
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
  interface BulkUpdateCategoriesRequest {
      /** List of categories to be updated. */
      categories: MaskedCategory[];
      /** A reference to the tree that contains the categories. */
      treeReference: TreeReference;
      /** Whether to return the category entity in the response. */
      returnEntity?: boolean;
  }
  interface MaskedCategory {
      /** Category to be updated, may be partial. */
      category?: Category;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      fieldMask?: string[];
  }
  interface BulkUpdateCategoriesResponse {
      /** Categories updated by bulk action. */
      results?: BulkCategoriesResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface UpdateCategoryVisibilityRequest {
      /** ID of category to be updated */
      categoryId: string;
      /** value to set `visible` to */
      visible: boolean;
      /** A reference to the tree that contains this category. */
      treeReference: TreeReference;
      /** Latest revision of the category. */
      revision: string | null;
  }
  interface UpdateCategoryVisibilityResponse {
      /** The updated Category. */
      category?: Category;
  }
  interface BulkSetVisibilityRequest {
      /** IDs of categories to be updated. */
      categoryIds: string[];
      /** value to set `visible` to. This value will be set for all categories in the request */
      visible: boolean;
      /** A reference to the tree that contains this category. */
      treeReference: TreeReference;
      /** Whether to return the category entity in the response. */
      returnEntity?: boolean;
  }
  interface BulkSetVisibilityResponse {
      /** Categories updated by bulk action. */
      results?: BulkCategoriesResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkSetVisibilityByFilterRequest {
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`
       * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
       */
      filter: Record<string, any> | null;
      /** A reference to the tree that contains the categories. */
      treeReference: TreeReference;
      /** value to set `visible` to. This value will be set for all categories that match the filter */
      visible: boolean;
  }
  interface BulkSetVisibilityByFilterResponse {
      /** Token that can be used to query "AsyncJobService" */
      jobId?: string;
  }
  interface BulkDeleteCategoriesRequest {
      /** IDs of categories to be deleted. */
      categoryIds: string[];
  }
  interface BulkDeleteCategoriesResponse {
      /** Categories deleted by bulk action. */
      results?: BulkCategoriesResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkDeleteCategoriesByFilterRequest {
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`
       * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
       */
      filter: Record<string, any> | null;
      /** A reference to the tree that contains the categories. */
      treeReference: TreeReference;
  }
  interface BulkDeleteCategoriesByFilterResponse {
      /** Token that can be used to query "AsyncJobService" */
      jobId?: string;
  }
  interface AddItemsToCategoryRequest {
      /** Category id. */
      categoryId: string;
      /** List of catalog items with reference info. */
      items: ItemReference[];
      /** A reference to the tree that contains this category. */
      treeReference: TreeReference;
  }
  interface ItemReference {
      /** ID of the item within its Wix or 3rd-party catalog. For example, `productId` for Wix Stores or `eventId` for Wix Events. */
      catalogItemId?: string;
      /** ID of the catalog app. For example, the Wix Stores `appId`, or the 3rd-party `appId`. */
      appId?: string;
  }
  interface AddItemsToCategoryResponse {
      /** Items added by bulk action. */
      results?: BulkItemsToCategoryResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkItemsToCategoryResult {
      /** Information about items that were added successfully and errors for failed items. */
      itemMetadata?: ItemReferenceMetadata;
  }
  interface ItemReferenceMetadata {
      /** Item reference from request. */
      itemReference?: ItemReference;
      /** Index of the item within the request array. Allows for correlation between request and response items. */
      originalIndex?: number;
      /** Whether the requested action was successful for this item. When `false`, the `error` field is populated. */
      success?: boolean;
      /** Details about the error in case of failure. */
      error?: ApplicationError;
  }
  interface ItemAddedToCategory {
      /** Category ID. */
      categoryId?: string;
      /** Catalog item reference info. */
      itemReference?: ItemReference;
  }
  interface ItemsAddedToCategory {
      /** Category ID. */
      categoryId?: string;
      /** List of catalog items with reference info. */
      items?: ItemReference[];
  }
  interface AddItemToCategoriesRequest {
      /** Catalog item reference info */
      itemReference: ItemReference;
      /** Category ids. */
      categoryIds: string[];
      /** A reference to the tree that contains the categories. */
      treeReference: TreeReference;
  }
  interface AddItemToCategoriesResponse {
      /** Items added by bulk action. */
      results?: BulkItemToCategoriesResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkItemToCategoriesResult {
      /** Information about categories to which item was added successfully and errors for failed items. `id` is ID of category. */
      itemMetadata?: ItemMetadata;
  }
  interface RemoveItemsFromCategoryRequest {
      /** Category id */
      categoryId: string;
      /** List of catalog items with reference info. */
      items: ItemReference[];
      /** A reference to the tree that contains this category. */
      treeReference: TreeReference;
  }
  interface RemoveItemsFromCategoryResponse {
      /** Items removed by bulk action. */
      results?: BulkItemsToCategoryResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface ItemRemovedFromCategory {
      /** Category ID. */
      categoryId?: string;
      /** Catalog item reference info. */
      itemReference?: ItemReference;
  }
  interface ItemsRemovedFromCategory {
      /** Category ID. */
      categoryId?: string;
      /** List of catalog items with reference info. */
      items?: ItemReference[];
  }
  interface RemoveItemFromCategoriesRequest {
      /** Catalog item reference info */
      itemReference: ItemReference;
      /** Category ids. */
      categoryIds: string[];
      /** A reference to the tree that contains the categories. */
      treeReference: TreeReference;
  }
  interface RemoveItemFromCategoriesResponse {
      /** Items removed by bulk action. */
      results?: BulkItemToCategoriesResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface ListItemsInCategoryRequest {
      /** ID of category containing items. */
      categoryId: string;
      /** A reference to the tree that contains this category. */
      treeReference: TreeReference;
      /** Default: `false`. When `true` items arranged by user will be return before all other items. */
      useCategoryArrangement?: boolean;
      /** Default: `false`. When `false` only direct items of category will be returned. When `true` response contains also items from all subcategories which current category contains */
      includeItemsFromSubcategories?: boolean;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `use_category_arrangement` or `include_items_from_subcategories`. */
      paging?: CursorPaging;
  }
  interface ListItemsInCategoryResponse {
      /** Items which satisfy query. */
      items?: ItemReference[];
      /** Paging metadata. Contains cursor which can be used in next query */
      pagingMetadata?: PagingMetadataV2;
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
  interface ListCategoriesForItemRequest {
      /** Catalog item reference info. */
      itemReference: ItemReference;
      /** A reference to the tree that contains the categories. */
      treeReference: TreeReference;
  }
  interface ListCategoriesForItemResponse {
      /** A list of category IDs that contain this item directly. */
      directCategoryIds?: string[];
      /** A list of category IDs that contain this item directly and their parent category IDs. */
      allCategoryIds?: string[];
  }
  interface MoveItemInCategoryRequest {
      /**
       * ID of category.
       * Item must be direct child of this category, otherwise error returned
       */
      categoryId: string;
      /** A reference to the tree that contains this category. */
      treeReference: TreeReference;
      /** Item to move. */
      item: ItemReference;
      /**
       * Where to move item.
       * `FIRST` - make `item` first item with manual arrangement. If before this operation category already has 100 manually arranged items, the 100th item will be removed from list of items with manual arrangement.
       * `LAST` - make `item` last item with manual arrangement. If before this operation category already has 100 manually arranged items, moving item will be not last but 100th.
       * `BEFORE` - requires `before_item`, `item` will be moved before it. If `before_item` was 100th item in category it will be removed from list of items with manual arrangement.
       * `NONE` - don't use manual arrangement for `item`, it will be shown after all items with manual arrangement according to default sorting.
       */
      position: Position;
      /** Required when `position` is `BEFORE`. `before_item` must be manually arranged item. */
      beforeItem?: ItemReference;
  }
  enum Position {
      UNKNOWN_POSITION = "UNKNOWN_POSITION",
      FIRST = "FIRST",
      LAST = "LAST",
      BEFORE = "BEFORE",
      NONE = "NONE"
  }
  interface MoveItemInCategoryResponse {
      /** Information about manually arranged items after move. */
      arrangedItemsAfterMove?: ItemReference[];
  }
  interface SetArrangedItemsRequest {
      /** ID of category. */
      categoryId: string;
      /** A reference to the tree that contains this category. */
      treeReference: TreeReference;
      /**
       * List of arranged items to set.
       * All items must be direct children of category with `category_id`, otherwise error returned.
       */
      items?: ItemReference[];
  }
  interface SetArrangedItemsResponse {
      /** The updated list of arranged items in category. */
      items?: ItemReference[];
  }
  interface GetArrangedItemsRequest {
      /** ID of category. */
      categoryId: string;
      /** A reference to the tree that contains this category. */
      treeReference: TreeReference;
  }
  interface GetArrangedItemsResponse {
      /** List of arranged items in category. */
      items?: ItemReference[];
  }
  interface GetCategoriesTreeRequest {
      /** The ID of the tree. */
      treeId?: string;
  }
  interface GetCategoriesTreeResponse {
      /** Categories tree. */
      categoriesTree?: CategoryTreeNode[];
  }
  /** Represents a node in the view of categories tree */
  interface CategoryTreeNode {
      /** Category ID. */
      _id?: Uint8Array;
      /** A list of child categories. */
      subcategories?: CategoryTreeNode[];
  }
  interface DomainEvent extends DomainEventBodyOneOf {
      createdEvent?: EntityCreatedEvent;
      updatedEvent?: EntityUpdatedEvent;
      deletedEvent?: EntityDeletedEvent;
      actionEvent?: ActionEvent;
      extendedFieldsUpdatedEvent?: ExtendedFieldsUpdatedEvent;
      /** random GUID so clients can tell if event was already handled */
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
      /**
       * Assuming that all messages including Actions have id
       * Example: The id of the specific order, the id of a specific campaign
       */
      entityId?: string;
      /** The time of the event. Useful if there was a delay in dispatching */
      eventTime?: Date;
      /**
       * A field that should be set if this event was triggered by an anonymize request.
       * For example you must set it to true when sending an event as a result of a GDPR right to be forgotten request.
       * NOTE: This field is not relevant for `EntityCreatedEvent` but is located here for better ergonomics of consumers.
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
      extendedFieldsUpdatedEvent?: ExtendedFieldsUpdatedEvent;
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
  }
  interface EntityDeletedEvent {
      /**
       * Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled
       * @internal
       */
      movedToTrash?: boolean | null;
  }
  interface ActionEvent {
      bodyAsJson?: string;
  }
  interface ExtendedFieldsUpdatedEvent {
      currentEntityAsJson?: string;
  }
  interface Empty {
  }
  /**
   * Creates a new Category.
   * @param category - Category to be created.
   * @internal
   * @documentationMaturity preview
   * @requiredField category
   * @requiredField category.name
   * @requiredField category.parentCategory._id
   * @requiredField options
   * @requiredField options.treeReference
   * @requiredField options.treeReference.appNamespace
   * @returns The created Category.
   */
  function createCategory(category: Category, options: CreateCategoryOptions): Promise<Category>;
  interface CreateCategoryOptions {
      /** A reference to the tree that contains this category. */
      treeReference: TreeReference;
      /** Fields to return in the response. When not provided, these fields are not returned. */
      fields?: RequestedFields[];
  }
  /**
   * Retrieves a category with the provided ID.
   * @param categoryId - Id of the Category to retrieve.
   * @param treeReference - A reference to the tree that contains this category.
   * @internal
   * @documentationMaturity preview
   * @requiredField categoryId
   * @requiredField treeReference
   * @requiredField treeReference.appNamespace
   * @returns The retrieved Category.
   */
  function getCategory(categoryId: string, treeReference: TreeReference, options?: GetCategoryOptions): Promise<Category>;
  interface GetCategoryOptions {
      /** Fields to return in the response. When not provided, these fields are not returned. */
      fields?: RequestedFields[];
  }
  /**
   * Update a Category, supports partial update.
   * Pass the latest `revision` for a successful update.
   * Each time the category is updated, `revision` increments by 1.
   * @param _id - Category ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField category
   * @requiredField category.revision
   * @requiredField options
   * @requiredField options.treeReference
   * @requiredField options.treeReference.appNamespace
   * @returns The updated Category.
   */
  function updateCategory(_id: string | null, category: UpdateCategory, options: UpdateCategoryOptions): Promise<Category>;
  interface UpdateCategory {
      /** Category ID. */
      _id?: string | null;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the time this Category was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Category was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Category name. */
      name?: string | null;
      /**
       * Category image.
       * Pass existing media ID for image previously saved in Wix media manager.
       * Pass full image URL to upload an image to Wix media manager.
       * In case of full url the image will be updated eventually.
       */
      image?: string;
      /**
       * Number of items in this category alone.
       * @readonly
       */
      numberOfItems?: number;
      /**
       * Number of items including all items in subcategories.
       * @internal
       * @readonly
       */
      totalNumberOfItems?: number;
      /** Category description. */
      description?: string | null;
      /**
       * Whether the category is visible to site visitors in dynamic pages (If not passed, the default is `false`).
       * Even if visible is `false`, it can still be added manually to static page.
       * If parent visibility is updated to `false`, all the children visibility will be updated eventually to `false`.
       * It is not allowed to set visible as `true` if at least one of the parent categories has visible `false`.
       */
      visible?: boolean | null;
      /**
       * A category's breadcrumbs, Updated on moved to different parent or on renamed.
       * This field will only be returned if request.fields contains `BREADCRUMBS`
       * @readonly
       */
      breadcrumbs?: BreadcrumbItemValues;
      /** The parent category. */
      parentCategory?: ParentCategory;
      /**
       * A permanent, friendly URL name.
       * If not provided, on create generated automatically.
       * When provided, validated and must be unique.
       */
      slug?: string | null;
      /**
       * Custom SEO data for the category.
       * @internal
       */
      seoData?: SeoSchema;
      /**
       * Category description which supports rich content. It is independent from `description` field and can be used instead of it or in addition to it.
       * In order to use this field you have to integrate with "Ricos" on frontend side. To learn how to do it visit https://ricos.js.org/.
       */
      richContentDescription?: RichContent;
      /**
       * Data related to the tree that contains the category.
       * @internal
       * @readonly
       */
      treeReference?: TreeReference;
      /** Extensions enabling users to save custom data related to the category. */
      extendedFields?: ExtendedFields;
  }
  interface UpdateCategoryOptions {
      /** A reference to the tree that contains this category. */
      treeReference: TreeReference;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      fieldMask?: string[];
      /** Fields to return in the response. When not provided, these fields are not returned. */
      fields?: RequestedFields[];
  }
  /**
   * Deletes a Category.
   * @param categoryId - Id of the Category to delete.
   * @param treeReference - A reference to the tree that contains this category.
   * @internal
   * @documentationMaturity preview
   * @requiredField categoryId
   * @requiredField treeReference
   * @requiredField treeReference.appNamespace
   */
  function deleteCategory(categoryId: string, treeReference: TreeReference): Promise<void>;
  /**
   * Query Categories using [WQL - Wix Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language)
   * @internal
   * @documentationMaturity preview
   */
  function queryCategories(options: QueryCategoriesOptions): CategoriesQueryBuilder;
  interface QueryCategoriesOptions {
      /**
       * A reference to the tree that contains this category.
       * Used only in the first request. Following requests use the cursor token.
       */
      treeReference: TreeReference;
      /**
       * Whether hidden categories should be included in the response. Default is `false`.
       * Used only in the first request. Following requests use the cursor token.
       */
      includeHidden?: boolean | undefined;
      /** Fields to return in the response. When not provided, these fields are not returned. */
      fields?: RequestedFields[] | undefined;
  }
  interface QueryCursorResult {
      cursors: Cursors;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface CategoriesQueryResult extends QueryCursorResult {
      items: Category[];
      query: CategoriesQueryBuilder;
      next: () => Promise<CategoriesQueryResult>;
      prev: () => Promise<CategoriesQueryResult>;
  }
  interface CategoriesQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'name' | 'description' | 'slug', value: any) => CategoriesQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'name' | 'description' | 'slug', value: any) => CategoriesQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      gt: (propertyName: '_createdDate' | '_updatedDate', value: any) => CategoriesQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      lt: (propertyName: '_createdDate' | '_updatedDate', value: any) => CategoriesQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       * @documentationMaturity preview
       */
      startsWith: (propertyName: '_id' | 'name' | 'description' | 'slug', value: string) => CategoriesQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       * @documentationMaturity preview
       */
      hasSome: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'name' | 'description' | 'slug', value: any[]) => CategoriesQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'name' | 'description' | 'slug', value: any) => CategoriesQueryBuilder;
      /** @documentationMaturity preview */
      exists: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'name' | 'description' | 'slug', value: boolean) => CategoriesQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'_id' | '_createdDate' | '_updatedDate' | 'name' | 'slug'>) => CategoriesQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'_id' | '_createdDate' | '_updatedDate' | 'name' | 'slug'>) => CategoriesQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => CategoriesQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => CategoriesQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<CategoriesQueryResult>;
  }
  /**
   * Places category in parent category.
   * This operation updates `parentCategory` (`id` and `index`) for category with `categoryId` in tree with `treeId`.
   * This endpoint can be used to move category to different parent in the same tree or to change it's position in current parent.
   * @param categoryId - ID of category to place.
   * @param treeReference - A reference to the tree that contains this category.
   * @internal
   * @documentationMaturity preview
   * @requiredField categoryId
   * @requiredField options
   * @requiredField options.position
   * @requiredField treeReference
   * @requiredField treeReference.appNamespace
   */
  function placeCategoryInParentCategory(categoryId: string, treeReference: TreeReference, options: PlaceCategoryInParentCategoryOptions): Promise<PlaceCategoryInParentCategoryResponse>;
  interface PlaceCategoryInParentCategoryOptions {
      /**
       * ID of parent category.
       * Optional. When not passed it will fallback to the root category
       */
      parentCategoryId?: string | null;
      /**
       * Where to place the subcategory.
       * `FIRST` - make category with `category_id` first subcategory with manual arrangement.
       * `LAST` - make category with `category_id` last subcategory with manual arrangement.
       * `BEFORE` - requires `move_before_category_id`, category with `category_id` will be moved before it.
       */
      position: PlaceCategoryInParentCategoryRequestPosition;
      /** Required when `position` is `BEFORE`. Otherwise ignored */
      moveBeforeCategoryId?: string | null;
  }
  /**
   * Creates multiple categories.
   * Phase 2
   * @param categories - List of categories to be created.
   * @internal
   * @documentationMaturity preview
   * @requiredField categories
   * @requiredField options
   * @requiredField options.treeReference
   * @requiredField options.treeReference.appNamespace
   */
  function bulkCreateCategories(categories: Category[], options: BulkCreateCategoriesOptions): Promise<BulkCreateCategoriesResponse>;
  interface BulkCreateCategoriesOptions {
      /** A reference to the tree that contains the categories. */
      treeReference: TreeReference;
      /** Whether to return the category entity in the response. */
      returnEntity?: boolean;
  }
  /**
   * Update multiple Categories, supports partial update.
   * Pass the latest `revision` for a successful update.
   * To update visibility, call the BulkUpdateCategoryVisibility endpoint.
   * @param categories - List of categories to be updated.
   * @internal
   * @documentationMaturity preview
   * @requiredField categories
   * @requiredField categories.category
   * @requiredField categories.category._id
   * @requiredField categories.category.revision
   * @requiredField options
   * @requiredField options.treeReference
   * @requiredField options.treeReference.appNamespace
   */
  function bulkUpdateCategories(categories: MaskedCategory[], options: BulkUpdateCategoriesOptions): Promise<BulkUpdateCategoriesResponse>;
  interface BulkUpdateCategoriesOptions {
      /** A reference to the tree that contains the categories. */
      treeReference: TreeReference;
      /** Whether to return the category entity in the response. */
      returnEntity?: boolean;
  }
  /**
   * Update `visible` field. If visible is set to false, all subcategories will be set to `visible=false`
   * @param categoryId - ID of category to be updated
   * @internal
   * @documentationMaturity preview
   * @requiredField categoryId
   * @requiredField options
   * @requiredField options.revision
   * @requiredField options.treeReference
   * @requiredField options.treeReference.appNamespace
   * @requiredField options.visible
   */
  function updateCategoryVisibility(categoryId: string, options: UpdateCategoryVisibilityOptions): Promise<UpdateCategoryVisibilityResponse>;
  interface UpdateCategoryVisibilityOptions {
      /** value to set `visible` to */
      visible: boolean;
      /** A reference to the tree that contains this category. */
      treeReference: TreeReference;
      /** Latest revision of the category. */
      revision: string | null;
  }
  /**
   * Update `visible` field for multiple categories. If visible is set to false, all subcategories will be set to `visible=false`
   * Phase 2
   * @param categoryIds - IDs of categories to be updated.
   * @internal
   * @documentationMaturity preview
   * @requiredField categoryIds
   * @requiredField options
   * @requiredField options.treeReference
   * @requiredField options.treeReference.appNamespace
   * @requiredField options.visible
   */
  function bulkSetVisibility(categoryIds: string[], options: BulkSetVisibilityOptions): Promise<BulkSetVisibilityResponse>;
  interface BulkSetVisibilityOptions {
      /** value to set `visible` to. This value will be set for all categories in the request */
      visible: boolean;
      /** A reference to the tree that contains this category. */
      treeReference: TreeReference;
      /** Whether to return the category entity in the response. */
      returnEntity?: boolean;
  }
  /**
   * Update `visible` field for categories which satisfy the provided filter. If visible is set to false, all subcategories will be set to `visible=false` as well
   * Phase 2
   * @param filter - Filter object in the following format:
   * `"filter" : {
   * "fieldName1": "value1",
   * "fieldName2":{"$operator":"value2"}
   * }`
   * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
   * @internal
   * @documentationMaturity preview
   * @requiredField filter
   * @requiredField options
   * @requiredField options.treeReference
   * @requiredField options.treeReference.appNamespace
   * @requiredField options.visible
   */
  function bulkSetVisibilityByFilter(filter: Record<string, any> | null, options: BulkSetVisibilityByFilterOptions): Promise<BulkSetVisibilityByFilterResponse>;
  interface BulkSetVisibilityByFilterOptions {
      /** A reference to the tree that contains the categories. */
      treeReference: TreeReference;
      /** value to set `visible` to. This value will be set for all categories that match the filter */
      visible: boolean;
  }
  /**
   * Deletes multiple categories.
   * Phase 2
   * @param categoryIds - IDs of categories to be deleted.
   * @internal
   * @documentationMaturity preview
   * @requiredField categoryIds
   */
  function bulkDeleteCategories(categoryIds: string[]): Promise<BulkDeleteCategoriesResponse>;
  /**
   * Delete multiple categories which satisfy the provided filter.
   * Phase 2
   * @param filter - Filter object in the following format:
   * `"filter" : {
   * "fieldName1": "value1",
   * "fieldName2":{"$operator":"value2"}
   * }`
   * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
   * @internal
   * @documentationMaturity preview
   * @requiredField filter
   * @requiredField options
   * @requiredField options.treeReference
   * @requiredField options.treeReference.appNamespace
   */
  function bulkDeleteCategoriesByFilter(filter: Record<string, any> | null, options: BulkDeleteCategoriesByFilterOptions): Promise<BulkDeleteCategoriesByFilterResponse>;
  interface BulkDeleteCategoriesByFilterOptions {
      /** A reference to the tree that contains the categories. */
      treeReference: TreeReference;
  }
  /**
   * Adds multiple items to single category, fires as many domain events as many items successfully added.
   * @param categoryId - Category id.
   * @param items - List of catalog items with reference info.
   * @internal
   * @documentationMaturity preview
   * @requiredField categoryId
   * @requiredField items
   * @requiredField items.appId
   * @requiredField items.catalogItemId
   * @requiredField options
   * @requiredField options.treeReference
   * @requiredField options.treeReference.appNamespace
   */
  function addItemsToCategory(categoryId: string, items: ItemReference[], options: AddItemsToCategoryOptions): Promise<AddItemsToCategoryResponse>;
  interface AddItemsToCategoryOptions {
      /** A reference to the tree that contains this category. */
      treeReference: TreeReference;
  }
  /**
   * Adds single item to multiple categories, fires as many domain events as many categories were successfully added.
   * @param itemReference - Catalog item reference info
   * @internal
   * @documentationMaturity preview
   * @requiredField itemReference
   * @requiredField itemReference.appId
   * @requiredField itemReference.catalogItemId
   * @requiredField options
   * @requiredField options.categoryIds
   * @requiredField options.treeReference
   * @requiredField options.treeReference.appNamespace
   */
  function addItemToCategories(itemReference: ItemReference, options: AddItemToCategoriesOptions): Promise<AddItemToCategoriesResponse>;
  interface AddItemToCategoriesOptions {
      /** Category ids. */
      categoryIds: string[];
      /** A reference to the tree that contains the categories. */
      treeReference: TreeReference;
  }
  /**
   * Removed multiple items from single category, fires as many domain events as many items successfully removed.
   * @param categoryId - Category id
   * @param items - List of catalog items with reference info.
   * @internal
   * @documentationMaturity preview
   * @requiredField categoryId
   * @requiredField items
   * @requiredField items.appId
   * @requiredField items.catalogItemId
   * @requiredField options
   * @requiredField options.treeReference
   * @requiredField options.treeReference.appNamespace
   */
  function removeItemsFromCategory(categoryId: string, items: ItemReference[], options: RemoveItemsFromCategoryOptions): Promise<RemoveItemsFromCategoryResponse>;
  interface RemoveItemsFromCategoryOptions {
      /** A reference to the tree that contains this category. */
      treeReference: TreeReference;
  }
  /**
   * Removes single item from multiple categories, fires as many domain events as many categories were successfully removed.
   * @param itemReference - Catalog item reference info
   * @internal
   * @documentationMaturity preview
   * @requiredField itemReference
   * @requiredField itemReference.appId
   * @requiredField itemReference.catalogItemId
   * @requiredField options
   * @requiredField options.categoryIds
   * @requiredField options.treeReference
   * @requiredField options.treeReference.appNamespace
   */
  function removeItemFromCategories(itemReference: ItemReference, options: RemoveItemFromCategoriesOptions): Promise<RemoveItemFromCategoriesResponse>;
  interface RemoveItemFromCategoriesOptions {
      /** Category ids. */
      categoryIds: string[];
      /** A reference to the tree that contains the categories. */
      treeReference: TreeReference;
  }
  /**
   * Returns up to 100 items related to requested `category_id` sorted by time when item added to category, descending.
   * When items added to category in bulk they considered as added at exactly same time so order will be random but always the same.
   * @param categoryId - ID of category containing items.
   * @param treeReference - A reference to the tree that contains this category.
   * @internal
   * @documentationMaturity preview
   * @requiredField categoryId
   * @requiredField treeReference
   * @requiredField treeReference.appNamespace
   */
  function listItemsInCategory(categoryId: string, treeReference: TreeReference, options?: ListItemsInCategoryOptions): Promise<ListItemsInCategoryResponse>;
  interface ListItemsInCategoryOptions {
      /** Default: `false`. When `true` items arranged by user will be return before all other items. */
      useCategoryArrangement?: boolean;
      /** Default: `false`. When `false` only direct items of category will be returned. When `true` response contains also items from all subcategories which current category contains */
      includeItemsFromSubcategories?: boolean;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `use_category_arrangement` or `include_items_from_subcategories`. */
      paging?: CursorPaging;
  }
  /**
   * Returns all category IDs that contain the item and their parent category IDs.
   * @param itemReference - Catalog item reference info.
   * @internal
   * @documentationMaturity preview
   * @requiredField itemReference
   * @requiredField options
   * @requiredField options.treeReference
   * @requiredField options.treeReference.appNamespace
   */
  function listCategoriesForItem(itemReference: ItemReference, options: ListCategoriesForItemOptions): Promise<ListCategoriesForItemResponse>;
  interface ListCategoriesForItemOptions {
      /** A reference to the tree that contains the categories. */
      treeReference: TreeReference;
  }
  /**
   * Changes position of `item` in category. Will be used when sort items by manual arrangement
   * @param categoryId - ID of category.
   * Item must be direct child of this category, otherwise error returned
   * @param treeReference - A reference to the tree that contains this category.
   * @internal
   * @documentationMaturity preview
   * @requiredField categoryId
   * @requiredField options
   * @requiredField options.item
   * @requiredField options.position
   * @requiredField treeReference
   * @requiredField treeReference.appNamespace
   */
  function moveItemInCategory(categoryId: string, treeReference: TreeReference, options: MoveItemInCategoryOptions): Promise<MoveItemInCategoryResponse>;
  interface MoveItemInCategoryOptions {
      /** Item to move. */
      item: ItemReference;
      /**
       * Where to move item.
       * `FIRST` - make `item` first item with manual arrangement. If before this operation category already has 100 manually arranged items, the 100th item will be removed from list of items with manual arrangement.
       * `LAST` - make `item` last item with manual arrangement. If before this operation category already has 100 manually arranged items, moving item will be not last but 100th.
       * `BEFORE` - requires `before_item`, `item` will be moved before it. If `before_item` was 100th item in category it will be removed from list of items with manual arrangement.
       * `NONE` - don't use manual arrangement for `item`, it will be shown after all items with manual arrangement according to default sorting.
       */
      position: Position;
      /** Required when `position` is `BEFORE`. `before_item` must be manually arranged item. */
      beforeItem?: ItemReference;
  }
  /**
   * Set arranged items in category. Will be used when sort items by manual arrangement.
   * Calling this endpoint overrides existing list of arranged items in category.
   * @param categoryId - ID of category.
   * @param treeReference - A reference to the tree that contains this category.
   * @internal
   * @documentationMaturity preview
   * @requiredField categoryId
   * @requiredField treeReference
   * @requiredField treeReference.appNamespace
   */
  function setArrangedItems(categoryId: string, treeReference: TreeReference, options?: SetArrangedItemsOptions): Promise<SetArrangedItemsResponse>;
  interface SetArrangedItemsOptions {
      /**
       * List of arranged items to set.
       * All items must be direct children of category with `category_id`, otherwise error returned.
       */
      items?: ItemReference[];
  }
  /**
   * Returns arranged items in category
   * @param categoryId - ID of category.
   * @param treeReference - A reference to the tree that contains this category.
   * @internal
   * @documentationMaturity preview
   * @requiredField categoryId
   * @requiredField treeReference
   * @requiredField treeReference.appNamespace
   */
  function getArrangedItems(categoryId: string, treeReference: TreeReference): Promise<GetArrangedItemsResponse>;
  /**
   * Retrieves the whole categories tree
   * @internal
   * @documentationMaturity preview
   */
  function getCategoriesTree(options?: GetCategoriesTreeOptions): Promise<GetCategoriesTreeResponse>;
  interface GetCategoriesTreeOptions {
      /** The ID of the tree. */
      treeId?: string;
  }
  
  const categoriesV1Category_universal_d___debug: typeof __debug;
  type categoriesV1Category_universal_d_Category = Category;
  type categoriesV1Category_universal_d_BreadcrumbItemValues = BreadcrumbItemValues;
  type categoriesV1Category_universal_d_BreadcrumbItem = BreadcrumbItem;
  type categoriesV1Category_universal_d_ParentCategory = ParentCategory;
  type categoriesV1Category_universal_d_SeoSchema = SeoSchema;
  type categoriesV1Category_universal_d_Keyword = Keyword;
  type categoriesV1Category_universal_d_Tag = Tag;
  type categoriesV1Category_universal_d_Settings = Settings;
  type categoriesV1Category_universal_d_RichContent = RichContent;
  type categoriesV1Category_universal_d_Node = Node;
  type categoriesV1Category_universal_d_NodeDataOneOf = NodeDataOneOf;
  type categoriesV1Category_universal_d_NodeType = NodeType;
  const categoriesV1Category_universal_d_NodeType: typeof NodeType;
  type categoriesV1Category_universal_d_NodeStyle = NodeStyle;
  type categoriesV1Category_universal_d_ButtonData = ButtonData;
  type categoriesV1Category_universal_d_Border = Border;
  type categoriesV1Category_universal_d_Colors = Colors;
  type categoriesV1Category_universal_d_PluginContainerData = PluginContainerData;
  type categoriesV1Category_universal_d_WidthType = WidthType;
  const categoriesV1Category_universal_d_WidthType: typeof WidthType;
  type categoriesV1Category_universal_d_PluginContainerDataWidth = PluginContainerDataWidth;
  type categoriesV1Category_universal_d_PluginContainerDataWidthDataOneOf = PluginContainerDataWidthDataOneOf;
  type categoriesV1Category_universal_d_PluginContainerDataAlignment = PluginContainerDataAlignment;
  const categoriesV1Category_universal_d_PluginContainerDataAlignment: typeof PluginContainerDataAlignment;
  type categoriesV1Category_universal_d_Spoiler = Spoiler;
  type categoriesV1Category_universal_d_Height = Height;
  type categoriesV1Category_universal_d_Type = Type;
  const categoriesV1Category_universal_d_Type: typeof Type;
  type categoriesV1Category_universal_d_Styles = Styles;
  type categoriesV1Category_universal_d_Link = Link;
  type categoriesV1Category_universal_d_LinkDataOneOf = LinkDataOneOf;
  type categoriesV1Category_universal_d_Target = Target;
  const categoriesV1Category_universal_d_Target: typeof Target;
  type categoriesV1Category_universal_d_Rel = Rel;
  type categoriesV1Category_universal_d_CodeBlockData = CodeBlockData;
  type categoriesV1Category_universal_d_TextStyle = TextStyle;
  type categoriesV1Category_universal_d_TextAlignment = TextAlignment;
  const categoriesV1Category_universal_d_TextAlignment: typeof TextAlignment;
  type categoriesV1Category_universal_d_DividerData = DividerData;
  type categoriesV1Category_universal_d_LineStyle = LineStyle;
  const categoriesV1Category_universal_d_LineStyle: typeof LineStyle;
  type categoriesV1Category_universal_d_Width = Width;
  const categoriesV1Category_universal_d_Width: typeof Width;
  type categoriesV1Category_universal_d_Alignment = Alignment;
  const categoriesV1Category_universal_d_Alignment: typeof Alignment;
  type categoriesV1Category_universal_d_FileData = FileData;
  type categoriesV1Category_universal_d_ViewMode = ViewMode;
  const categoriesV1Category_universal_d_ViewMode: typeof ViewMode;
  type categoriesV1Category_universal_d_FileSource = FileSource;
  type categoriesV1Category_universal_d_FileSourceDataOneOf = FileSourceDataOneOf;
  type categoriesV1Category_universal_d_PDFSettings = PDFSettings;
  type categoriesV1Category_universal_d_GalleryData = GalleryData;
  type categoriesV1Category_universal_d_Media = Media;
  type categoriesV1Category_universal_d_Image = Image;
  type categoriesV1Category_universal_d_Video = Video;
  type categoriesV1Category_universal_d_Item = Item;
  type categoriesV1Category_universal_d_ItemDataOneOf = ItemDataOneOf;
  type categoriesV1Category_universal_d_GalleryOptions = GalleryOptions;
  type categoriesV1Category_universal_d_LayoutType = LayoutType;
  const categoriesV1Category_universal_d_LayoutType: typeof LayoutType;
  type categoriesV1Category_universal_d_Orientation = Orientation;
  const categoriesV1Category_universal_d_Orientation: typeof Orientation;
  type categoriesV1Category_universal_d_Crop = Crop;
  const categoriesV1Category_universal_d_Crop: typeof Crop;
  type categoriesV1Category_universal_d_ThumbnailsAlignment = ThumbnailsAlignment;
  const categoriesV1Category_universal_d_ThumbnailsAlignment: typeof ThumbnailsAlignment;
  type categoriesV1Category_universal_d_Layout = Layout;
  type categoriesV1Category_universal_d_ItemStyle = ItemStyle;
  type categoriesV1Category_universal_d_Thumbnails = Thumbnails;
  type categoriesV1Category_universal_d_GIFData = GIFData;
  type categoriesV1Category_universal_d_GIF = GIF;
  type categoriesV1Category_universal_d_HeadingData = HeadingData;
  type categoriesV1Category_universal_d_HTMLData = HTMLData;
  type categoriesV1Category_universal_d_HTMLDataDataOneOf = HTMLDataDataOneOf;
  type categoriesV1Category_universal_d_Source = Source;
  const categoriesV1Category_universal_d_Source: typeof Source;
  type categoriesV1Category_universal_d_ImageData = ImageData;
  type categoriesV1Category_universal_d_LinkPreviewData = LinkPreviewData;
  type categoriesV1Category_universal_d_MapData = MapData;
  type categoriesV1Category_universal_d_MapSettings = MapSettings;
  type categoriesV1Category_universal_d_MapType = MapType;
  const categoriesV1Category_universal_d_MapType: typeof MapType;
  type categoriesV1Category_universal_d_ParagraphData = ParagraphData;
  type categoriesV1Category_universal_d_PollData = PollData;
  type categoriesV1Category_universal_d_ViewRole = ViewRole;
  const categoriesV1Category_universal_d_ViewRole: typeof ViewRole;
  type categoriesV1Category_universal_d_VoteRole = VoteRole;
  const categoriesV1Category_universal_d_VoteRole: typeof VoteRole;
  type categoriesV1Category_universal_d_Permissions = Permissions;
  type categoriesV1Category_universal_d_Option = Option;
  type categoriesV1Category_universal_d_PollSettings = PollSettings;
  type categoriesV1Category_universal_d_PollLayoutType = PollLayoutType;
  const categoriesV1Category_universal_d_PollLayoutType: typeof PollLayoutType;
  type categoriesV1Category_universal_d_PollLayoutDirection = PollLayoutDirection;
  const categoriesV1Category_universal_d_PollLayoutDirection: typeof PollLayoutDirection;
  type categoriesV1Category_universal_d_PollLayout = PollLayout;
  type categoriesV1Category_universal_d_OptionLayout = OptionLayout;
  type categoriesV1Category_universal_d_BackgroundType = BackgroundType;
  const categoriesV1Category_universal_d_BackgroundType: typeof BackgroundType;
  type categoriesV1Category_universal_d_Gradient = Gradient;
  type categoriesV1Category_universal_d_Background = Background;
  type categoriesV1Category_universal_d_BackgroundBackgroundOneOf = BackgroundBackgroundOneOf;
  type categoriesV1Category_universal_d_PollDesign = PollDesign;
  type categoriesV1Category_universal_d_OptionDesign = OptionDesign;
  type categoriesV1Category_universal_d_Poll = Poll;
  type categoriesV1Category_universal_d_PollDataLayout = PollDataLayout;
  type categoriesV1Category_universal_d_Design = Design;
  type categoriesV1Category_universal_d_TextData = TextData;
  type categoriesV1Category_universal_d_Decoration = Decoration;
  type categoriesV1Category_universal_d_DecorationDataOneOf = DecorationDataOneOf;
  type categoriesV1Category_universal_d_DecorationType = DecorationType;
  const categoriesV1Category_universal_d_DecorationType: typeof DecorationType;
  type categoriesV1Category_universal_d_AnchorData = AnchorData;
  type categoriesV1Category_universal_d_ColorData = ColorData;
  type categoriesV1Category_universal_d_LinkData = LinkData;
  type categoriesV1Category_universal_d_MentionData = MentionData;
  type categoriesV1Category_universal_d_FontSizeData = FontSizeData;
  type categoriesV1Category_universal_d_FontType = FontType;
  const categoriesV1Category_universal_d_FontType: typeof FontType;
  type categoriesV1Category_universal_d_AppEmbedData = AppEmbedData;
  type categoriesV1Category_universal_d_AppEmbedDataAppDataOneOf = AppEmbedDataAppDataOneOf;
  type categoriesV1Category_universal_d_AppType = AppType;
  const categoriesV1Category_universal_d_AppType: typeof AppType;
  type categoriesV1Category_universal_d_BookingData = BookingData;
  type categoriesV1Category_universal_d_EventData = EventData;
  type categoriesV1Category_universal_d_VideoData = VideoData;
  type categoriesV1Category_universal_d_PlaybackOptions = PlaybackOptions;
  type categoriesV1Category_universal_d_EmbedData = EmbedData;
  type categoriesV1Category_universal_d_Oembed = Oembed;
  type categoriesV1Category_universal_d_CollapsibleListData = CollapsibleListData;
  type categoriesV1Category_universal_d_InitialExpandedItems = InitialExpandedItems;
  const categoriesV1Category_universal_d_InitialExpandedItems: typeof InitialExpandedItems;
  type categoriesV1Category_universal_d_Direction = Direction;
  const categoriesV1Category_universal_d_Direction: typeof Direction;
  type categoriesV1Category_universal_d_TableData = TableData;
  type categoriesV1Category_universal_d_Dimensions = Dimensions;
  type categoriesV1Category_universal_d_TableCellData = TableCellData;
  type categoriesV1Category_universal_d_VerticalAlignment = VerticalAlignment;
  const categoriesV1Category_universal_d_VerticalAlignment: typeof VerticalAlignment;
  type categoriesV1Category_universal_d_CellStyle = CellStyle;
  type categoriesV1Category_universal_d_BorderColors = BorderColors;
  type categoriesV1Category_universal_d_NullValue = NullValue;
  const categoriesV1Category_universal_d_NullValue: typeof NullValue;
  type categoriesV1Category_universal_d_ListValue = ListValue;
  type categoriesV1Category_universal_d_AudioData = AudioData;
  type categoriesV1Category_universal_d_OrderedListData = OrderedListData;
  type categoriesV1Category_universal_d_BulletedListData = BulletedListData;
  type categoriesV1Category_universal_d_BlockquoteData = BlockquoteData;
  type categoriesV1Category_universal_d_Metadata = Metadata;
  type categoriesV1Category_universal_d_DocumentStyle = DocumentStyle;
  type categoriesV1Category_universal_d_TextNodeStyle = TextNodeStyle;
  type categoriesV1Category_universal_d_TreeReference = TreeReference;
  type categoriesV1Category_universal_d_ExtendedFields = ExtendedFields;
  type categoriesV1Category_universal_d_CreateCategoryRequest = CreateCategoryRequest;
  type categoriesV1Category_universal_d_RequestedFields = RequestedFields;
  const categoriesV1Category_universal_d_RequestedFields: typeof RequestedFields;
  type categoriesV1Category_universal_d_CreateCategoryResponse = CreateCategoryResponse;
  type categoriesV1Category_universal_d_GetCategoryRequest = GetCategoryRequest;
  type categoriesV1Category_universal_d_GetCategoryResponse = GetCategoryResponse;
  type categoriesV1Category_universal_d_UpdateCategoryRequest = UpdateCategoryRequest;
  type categoriesV1Category_universal_d_UpdateCategoryResponse = UpdateCategoryResponse;
  type categoriesV1Category_universal_d_DeleteCategoryRequest = DeleteCategoryRequest;
  type categoriesV1Category_universal_d_DeleteCategoryResponse = DeleteCategoryResponse;
  type categoriesV1Category_universal_d_QueryCategoriesRequest = QueryCategoriesRequest;
  type categoriesV1Category_universal_d_CursorQuery = CursorQuery;
  type categoriesV1Category_universal_d_CursorQueryPagingMethodOneOf = CursorQueryPagingMethodOneOf;
  type categoriesV1Category_universal_d_Sorting = Sorting;
  type categoriesV1Category_universal_d_SortOrder = SortOrder;
  const categoriesV1Category_universal_d_SortOrder: typeof SortOrder;
  type categoriesV1Category_universal_d_CursorPaging = CursorPaging;
  type categoriesV1Category_universal_d_QueryCategoriesResponse = QueryCategoriesResponse;
  type categoriesV1Category_universal_d_CursorPagingMetadata = CursorPagingMetadata;
  type categoriesV1Category_universal_d_Cursors = Cursors;
  type categoriesV1Category_universal_d_PlaceCategoryInParentCategoryRequest = PlaceCategoryInParentCategoryRequest;
  type categoriesV1Category_universal_d_PlaceCategoryInParentCategoryRequestPosition = PlaceCategoryInParentCategoryRequestPosition;
  const categoriesV1Category_universal_d_PlaceCategoryInParentCategoryRequestPosition: typeof PlaceCategoryInParentCategoryRequestPosition;
  type categoriesV1Category_universal_d_PlaceCategoryInParentCategoryResponse = PlaceCategoryInParentCategoryResponse;
  type categoriesV1Category_universal_d_BulkCreateCategoriesRequest = BulkCreateCategoriesRequest;
  type categoriesV1Category_universal_d_BulkCreateCategoriesResponse = BulkCreateCategoriesResponse;
  type categoriesV1Category_universal_d_BulkCategoriesResult = BulkCategoriesResult;
  type categoriesV1Category_universal_d_ItemMetadata = ItemMetadata;
  type categoriesV1Category_universal_d_ApplicationError = ApplicationError;
  type categoriesV1Category_universal_d_BulkActionMetadata = BulkActionMetadata;
  type categoriesV1Category_universal_d_BulkUpdateCategoriesRequest = BulkUpdateCategoriesRequest;
  type categoriesV1Category_universal_d_MaskedCategory = MaskedCategory;
  type categoriesV1Category_universal_d_BulkUpdateCategoriesResponse = BulkUpdateCategoriesResponse;
  type categoriesV1Category_universal_d_UpdateCategoryVisibilityRequest = UpdateCategoryVisibilityRequest;
  type categoriesV1Category_universal_d_UpdateCategoryVisibilityResponse = UpdateCategoryVisibilityResponse;
  type categoriesV1Category_universal_d_BulkSetVisibilityRequest = BulkSetVisibilityRequest;
  type categoriesV1Category_universal_d_BulkSetVisibilityResponse = BulkSetVisibilityResponse;
  type categoriesV1Category_universal_d_BulkSetVisibilityByFilterRequest = BulkSetVisibilityByFilterRequest;
  type categoriesV1Category_universal_d_BulkSetVisibilityByFilterResponse = BulkSetVisibilityByFilterResponse;
  type categoriesV1Category_universal_d_BulkDeleteCategoriesRequest = BulkDeleteCategoriesRequest;
  type categoriesV1Category_universal_d_BulkDeleteCategoriesResponse = BulkDeleteCategoriesResponse;
  type categoriesV1Category_universal_d_BulkDeleteCategoriesByFilterRequest = BulkDeleteCategoriesByFilterRequest;
  type categoriesV1Category_universal_d_BulkDeleteCategoriesByFilterResponse = BulkDeleteCategoriesByFilterResponse;
  type categoriesV1Category_universal_d_AddItemsToCategoryRequest = AddItemsToCategoryRequest;
  type categoriesV1Category_universal_d_ItemReference = ItemReference;
  type categoriesV1Category_universal_d_AddItemsToCategoryResponse = AddItemsToCategoryResponse;
  type categoriesV1Category_universal_d_BulkItemsToCategoryResult = BulkItemsToCategoryResult;
  type categoriesV1Category_universal_d_ItemReferenceMetadata = ItemReferenceMetadata;
  type categoriesV1Category_universal_d_ItemAddedToCategory = ItemAddedToCategory;
  type categoriesV1Category_universal_d_ItemsAddedToCategory = ItemsAddedToCategory;
  type categoriesV1Category_universal_d_AddItemToCategoriesRequest = AddItemToCategoriesRequest;
  type categoriesV1Category_universal_d_AddItemToCategoriesResponse = AddItemToCategoriesResponse;
  type categoriesV1Category_universal_d_BulkItemToCategoriesResult = BulkItemToCategoriesResult;
  type categoriesV1Category_universal_d_RemoveItemsFromCategoryRequest = RemoveItemsFromCategoryRequest;
  type categoriesV1Category_universal_d_RemoveItemsFromCategoryResponse = RemoveItemsFromCategoryResponse;
  type categoriesV1Category_universal_d_ItemRemovedFromCategory = ItemRemovedFromCategory;
  type categoriesV1Category_universal_d_ItemsRemovedFromCategory = ItemsRemovedFromCategory;
  type categoriesV1Category_universal_d_RemoveItemFromCategoriesRequest = RemoveItemFromCategoriesRequest;
  type categoriesV1Category_universal_d_RemoveItemFromCategoriesResponse = RemoveItemFromCategoriesResponse;
  type categoriesV1Category_universal_d_ListItemsInCategoryRequest = ListItemsInCategoryRequest;
  type categoriesV1Category_universal_d_ListItemsInCategoryResponse = ListItemsInCategoryResponse;
  type categoriesV1Category_universal_d_PagingMetadataV2 = PagingMetadataV2;
  type categoriesV1Category_universal_d_ListCategoriesForItemRequest = ListCategoriesForItemRequest;
  type categoriesV1Category_universal_d_ListCategoriesForItemResponse = ListCategoriesForItemResponse;
  type categoriesV1Category_universal_d_MoveItemInCategoryRequest = MoveItemInCategoryRequest;
  type categoriesV1Category_universal_d_Position = Position;
  const categoriesV1Category_universal_d_Position: typeof Position;
  type categoriesV1Category_universal_d_MoveItemInCategoryResponse = MoveItemInCategoryResponse;
  type categoriesV1Category_universal_d_SetArrangedItemsRequest = SetArrangedItemsRequest;
  type categoriesV1Category_universal_d_SetArrangedItemsResponse = SetArrangedItemsResponse;
  type categoriesV1Category_universal_d_GetArrangedItemsRequest = GetArrangedItemsRequest;
  type categoriesV1Category_universal_d_GetArrangedItemsResponse = GetArrangedItemsResponse;
  type categoriesV1Category_universal_d_GetCategoriesTreeRequest = GetCategoriesTreeRequest;
  type categoriesV1Category_universal_d_GetCategoriesTreeResponse = GetCategoriesTreeResponse;
  type categoriesV1Category_universal_d_CategoryTreeNode = CategoryTreeNode;
  type categoriesV1Category_universal_d_DomainEvent = DomainEvent;
  type categoriesV1Category_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type categoriesV1Category_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type categoriesV1Category_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type categoriesV1Category_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type categoriesV1Category_universal_d_ActionEvent = ActionEvent;
  type categoriesV1Category_universal_d_ExtendedFieldsUpdatedEvent = ExtendedFieldsUpdatedEvent;
  type categoriesV1Category_universal_d_Empty = Empty;
  const categoriesV1Category_universal_d_createCategory: typeof createCategory;
  type categoriesV1Category_universal_d_CreateCategoryOptions = CreateCategoryOptions;
  const categoriesV1Category_universal_d_getCategory: typeof getCategory;
  type categoriesV1Category_universal_d_GetCategoryOptions = GetCategoryOptions;
  const categoriesV1Category_universal_d_updateCategory: typeof updateCategory;
  type categoriesV1Category_universal_d_UpdateCategory = UpdateCategory;
  type categoriesV1Category_universal_d_UpdateCategoryOptions = UpdateCategoryOptions;
  const categoriesV1Category_universal_d_deleteCategory: typeof deleteCategory;
  const categoriesV1Category_universal_d_queryCategories: typeof queryCategories;
  type categoriesV1Category_universal_d_QueryCategoriesOptions = QueryCategoriesOptions;
  type categoriesV1Category_universal_d_CategoriesQueryResult = CategoriesQueryResult;
  type categoriesV1Category_universal_d_CategoriesQueryBuilder = CategoriesQueryBuilder;
  const categoriesV1Category_universal_d_placeCategoryInParentCategory: typeof placeCategoryInParentCategory;
  type categoriesV1Category_universal_d_PlaceCategoryInParentCategoryOptions = PlaceCategoryInParentCategoryOptions;
  const categoriesV1Category_universal_d_bulkCreateCategories: typeof bulkCreateCategories;
  type categoriesV1Category_universal_d_BulkCreateCategoriesOptions = BulkCreateCategoriesOptions;
  const categoriesV1Category_universal_d_bulkUpdateCategories: typeof bulkUpdateCategories;
  type categoriesV1Category_universal_d_BulkUpdateCategoriesOptions = BulkUpdateCategoriesOptions;
  const categoriesV1Category_universal_d_updateCategoryVisibility: typeof updateCategoryVisibility;
  type categoriesV1Category_universal_d_UpdateCategoryVisibilityOptions = UpdateCategoryVisibilityOptions;
  const categoriesV1Category_universal_d_bulkSetVisibility: typeof bulkSetVisibility;
  type categoriesV1Category_universal_d_BulkSetVisibilityOptions = BulkSetVisibilityOptions;
  const categoriesV1Category_universal_d_bulkSetVisibilityByFilter: typeof bulkSetVisibilityByFilter;
  type categoriesV1Category_universal_d_BulkSetVisibilityByFilterOptions = BulkSetVisibilityByFilterOptions;
  const categoriesV1Category_universal_d_bulkDeleteCategories: typeof bulkDeleteCategories;
  const categoriesV1Category_universal_d_bulkDeleteCategoriesByFilter: typeof bulkDeleteCategoriesByFilter;
  type categoriesV1Category_universal_d_BulkDeleteCategoriesByFilterOptions = BulkDeleteCategoriesByFilterOptions;
  const categoriesV1Category_universal_d_addItemsToCategory: typeof addItemsToCategory;
  type categoriesV1Category_universal_d_AddItemsToCategoryOptions = AddItemsToCategoryOptions;
  const categoriesV1Category_universal_d_addItemToCategories: typeof addItemToCategories;
  type categoriesV1Category_universal_d_AddItemToCategoriesOptions = AddItemToCategoriesOptions;
  const categoriesV1Category_universal_d_removeItemsFromCategory: typeof removeItemsFromCategory;
  type categoriesV1Category_universal_d_RemoveItemsFromCategoryOptions = RemoveItemsFromCategoryOptions;
  const categoriesV1Category_universal_d_removeItemFromCategories: typeof removeItemFromCategories;
  type categoriesV1Category_universal_d_RemoveItemFromCategoriesOptions = RemoveItemFromCategoriesOptions;
  const categoriesV1Category_universal_d_listItemsInCategory: typeof listItemsInCategory;
  type categoriesV1Category_universal_d_ListItemsInCategoryOptions = ListItemsInCategoryOptions;
  const categoriesV1Category_universal_d_listCategoriesForItem: typeof listCategoriesForItem;
  type categoriesV1Category_universal_d_ListCategoriesForItemOptions = ListCategoriesForItemOptions;
  const categoriesV1Category_universal_d_moveItemInCategory: typeof moveItemInCategory;
  type categoriesV1Category_universal_d_MoveItemInCategoryOptions = MoveItemInCategoryOptions;
  const categoriesV1Category_universal_d_setArrangedItems: typeof setArrangedItems;
  type categoriesV1Category_universal_d_SetArrangedItemsOptions = SetArrangedItemsOptions;
  const categoriesV1Category_universal_d_getArrangedItems: typeof getArrangedItems;
  const categoriesV1Category_universal_d_getCategoriesTree: typeof getCategoriesTree;
  type categoriesV1Category_universal_d_GetCategoriesTreeOptions = GetCategoriesTreeOptions;
  namespace categoriesV1Category_universal_d {
    export {
      categoriesV1Category_universal_d___debug as __debug,
      categoriesV1Category_universal_d_Category as Category,
      categoriesV1Category_universal_d_BreadcrumbItemValues as BreadcrumbItemValues,
      categoriesV1Category_universal_d_BreadcrumbItem as BreadcrumbItem,
      categoriesV1Category_universal_d_ParentCategory as ParentCategory,
      categoriesV1Category_universal_d_SeoSchema as SeoSchema,
      categoriesV1Category_universal_d_Keyword as Keyword,
      categoriesV1Category_universal_d_Tag as Tag,
      categoriesV1Category_universal_d_Settings as Settings,
      categoriesV1Category_universal_d_RichContent as RichContent,
      categoriesV1Category_universal_d_Node as Node,
      categoriesV1Category_universal_d_NodeDataOneOf as NodeDataOneOf,
      categoriesV1Category_universal_d_NodeType as NodeType,
      categoriesV1Category_universal_d_NodeStyle as NodeStyle,
      categoriesV1Category_universal_d_ButtonData as ButtonData,
      categoriesV1Category_universal_d_Border as Border,
      categoriesV1Category_universal_d_Colors as Colors,
      categoriesV1Category_universal_d_PluginContainerData as PluginContainerData,
      categoriesV1Category_universal_d_WidthType as WidthType,
      categoriesV1Category_universal_d_PluginContainerDataWidth as PluginContainerDataWidth,
      categoriesV1Category_universal_d_PluginContainerDataWidthDataOneOf as PluginContainerDataWidthDataOneOf,
      categoriesV1Category_universal_d_PluginContainerDataAlignment as PluginContainerDataAlignment,
      categoriesV1Category_universal_d_Spoiler as Spoiler,
      categoriesV1Category_universal_d_Height as Height,
      categoriesV1Category_universal_d_Type as Type,
      categoriesV1Category_universal_d_Styles as Styles,
      categoriesV1Category_universal_d_Link as Link,
      categoriesV1Category_universal_d_LinkDataOneOf as LinkDataOneOf,
      categoriesV1Category_universal_d_Target as Target,
      categoriesV1Category_universal_d_Rel as Rel,
      categoriesV1Category_universal_d_CodeBlockData as CodeBlockData,
      categoriesV1Category_universal_d_TextStyle as TextStyle,
      categoriesV1Category_universal_d_TextAlignment as TextAlignment,
      categoriesV1Category_universal_d_DividerData as DividerData,
      categoriesV1Category_universal_d_LineStyle as LineStyle,
      categoriesV1Category_universal_d_Width as Width,
      categoriesV1Category_universal_d_Alignment as Alignment,
      categoriesV1Category_universal_d_FileData as FileData,
      categoriesV1Category_universal_d_ViewMode as ViewMode,
      categoriesV1Category_universal_d_FileSource as FileSource,
      categoriesV1Category_universal_d_FileSourceDataOneOf as FileSourceDataOneOf,
      categoriesV1Category_universal_d_PDFSettings as PDFSettings,
      categoriesV1Category_universal_d_GalleryData as GalleryData,
      categoriesV1Category_universal_d_Media as Media,
      categoriesV1Category_universal_d_Image as Image,
      categoriesV1Category_universal_d_Video as Video,
      categoriesV1Category_universal_d_Item as Item,
      categoriesV1Category_universal_d_ItemDataOneOf as ItemDataOneOf,
      categoriesV1Category_universal_d_GalleryOptions as GalleryOptions,
      categoriesV1Category_universal_d_LayoutType as LayoutType,
      categoriesV1Category_universal_d_Orientation as Orientation,
      categoriesV1Category_universal_d_Crop as Crop,
      categoriesV1Category_universal_d_ThumbnailsAlignment as ThumbnailsAlignment,
      categoriesV1Category_universal_d_Layout as Layout,
      categoriesV1Category_universal_d_ItemStyle as ItemStyle,
      categoriesV1Category_universal_d_Thumbnails as Thumbnails,
      categoriesV1Category_universal_d_GIFData as GIFData,
      categoriesV1Category_universal_d_GIF as GIF,
      categoriesV1Category_universal_d_HeadingData as HeadingData,
      categoriesV1Category_universal_d_HTMLData as HTMLData,
      categoriesV1Category_universal_d_HTMLDataDataOneOf as HTMLDataDataOneOf,
      categoriesV1Category_universal_d_Source as Source,
      categoriesV1Category_universal_d_ImageData as ImageData,
      categoriesV1Category_universal_d_LinkPreviewData as LinkPreviewData,
      categoriesV1Category_universal_d_MapData as MapData,
      categoriesV1Category_universal_d_MapSettings as MapSettings,
      categoriesV1Category_universal_d_MapType as MapType,
      categoriesV1Category_universal_d_ParagraphData as ParagraphData,
      categoriesV1Category_universal_d_PollData as PollData,
      categoriesV1Category_universal_d_ViewRole as ViewRole,
      categoriesV1Category_universal_d_VoteRole as VoteRole,
      categoriesV1Category_universal_d_Permissions as Permissions,
      categoriesV1Category_universal_d_Option as Option,
      categoriesV1Category_universal_d_PollSettings as PollSettings,
      categoriesV1Category_universal_d_PollLayoutType as PollLayoutType,
      categoriesV1Category_universal_d_PollLayoutDirection as PollLayoutDirection,
      categoriesV1Category_universal_d_PollLayout as PollLayout,
      categoriesV1Category_universal_d_OptionLayout as OptionLayout,
      categoriesV1Category_universal_d_BackgroundType as BackgroundType,
      categoriesV1Category_universal_d_Gradient as Gradient,
      categoriesV1Category_universal_d_Background as Background,
      categoriesV1Category_universal_d_BackgroundBackgroundOneOf as BackgroundBackgroundOneOf,
      categoriesV1Category_universal_d_PollDesign as PollDesign,
      categoriesV1Category_universal_d_OptionDesign as OptionDesign,
      categoriesV1Category_universal_d_Poll as Poll,
      categoriesV1Category_universal_d_PollDataLayout as PollDataLayout,
      categoriesV1Category_universal_d_Design as Design,
      categoriesV1Category_universal_d_TextData as TextData,
      categoriesV1Category_universal_d_Decoration as Decoration,
      categoriesV1Category_universal_d_DecorationDataOneOf as DecorationDataOneOf,
      categoriesV1Category_universal_d_DecorationType as DecorationType,
      categoriesV1Category_universal_d_AnchorData as AnchorData,
      categoriesV1Category_universal_d_ColorData as ColorData,
      categoriesV1Category_universal_d_LinkData as LinkData,
      categoriesV1Category_universal_d_MentionData as MentionData,
      categoriesV1Category_universal_d_FontSizeData as FontSizeData,
      categoriesV1Category_universal_d_FontType as FontType,
      categoriesV1Category_universal_d_AppEmbedData as AppEmbedData,
      categoriesV1Category_universal_d_AppEmbedDataAppDataOneOf as AppEmbedDataAppDataOneOf,
      categoriesV1Category_universal_d_AppType as AppType,
      categoriesV1Category_universal_d_BookingData as BookingData,
      categoriesV1Category_universal_d_EventData as EventData,
      categoriesV1Category_universal_d_VideoData as VideoData,
      categoriesV1Category_universal_d_PlaybackOptions as PlaybackOptions,
      categoriesV1Category_universal_d_EmbedData as EmbedData,
      categoriesV1Category_universal_d_Oembed as Oembed,
      categoriesV1Category_universal_d_CollapsibleListData as CollapsibleListData,
      categoriesV1Category_universal_d_InitialExpandedItems as InitialExpandedItems,
      categoriesV1Category_universal_d_Direction as Direction,
      categoriesV1Category_universal_d_TableData as TableData,
      categoriesV1Category_universal_d_Dimensions as Dimensions,
      categoriesV1Category_universal_d_TableCellData as TableCellData,
      categoriesV1Category_universal_d_VerticalAlignment as VerticalAlignment,
      categoriesV1Category_universal_d_CellStyle as CellStyle,
      categoriesV1Category_universal_d_BorderColors as BorderColors,
      categoriesV1Category_universal_d_NullValue as NullValue,
      categoriesV1Category_universal_d_ListValue as ListValue,
      categoriesV1Category_universal_d_AudioData as AudioData,
      categoriesV1Category_universal_d_OrderedListData as OrderedListData,
      categoriesV1Category_universal_d_BulletedListData as BulletedListData,
      categoriesV1Category_universal_d_BlockquoteData as BlockquoteData,
      categoriesV1Category_universal_d_Metadata as Metadata,
      categoriesV1Category_universal_d_DocumentStyle as DocumentStyle,
      categoriesV1Category_universal_d_TextNodeStyle as TextNodeStyle,
      categoriesV1Category_universal_d_TreeReference as TreeReference,
      categoriesV1Category_universal_d_ExtendedFields as ExtendedFields,
      categoriesV1Category_universal_d_CreateCategoryRequest as CreateCategoryRequest,
      categoriesV1Category_universal_d_RequestedFields as RequestedFields,
      categoriesV1Category_universal_d_CreateCategoryResponse as CreateCategoryResponse,
      categoriesV1Category_universal_d_GetCategoryRequest as GetCategoryRequest,
      categoriesV1Category_universal_d_GetCategoryResponse as GetCategoryResponse,
      categoriesV1Category_universal_d_UpdateCategoryRequest as UpdateCategoryRequest,
      categoriesV1Category_universal_d_UpdateCategoryResponse as UpdateCategoryResponse,
      categoriesV1Category_universal_d_DeleteCategoryRequest as DeleteCategoryRequest,
      categoriesV1Category_universal_d_DeleteCategoryResponse as DeleteCategoryResponse,
      categoriesV1Category_universal_d_QueryCategoriesRequest as QueryCategoriesRequest,
      categoriesV1Category_universal_d_CursorQuery as CursorQuery,
      categoriesV1Category_universal_d_CursorQueryPagingMethodOneOf as CursorQueryPagingMethodOneOf,
      categoriesV1Category_universal_d_Sorting as Sorting,
      categoriesV1Category_universal_d_SortOrder as SortOrder,
      categoriesV1Category_universal_d_CursorPaging as CursorPaging,
      categoriesV1Category_universal_d_QueryCategoriesResponse as QueryCategoriesResponse,
      categoriesV1Category_universal_d_CursorPagingMetadata as CursorPagingMetadata,
      categoriesV1Category_universal_d_Cursors as Cursors,
      categoriesV1Category_universal_d_PlaceCategoryInParentCategoryRequest as PlaceCategoryInParentCategoryRequest,
      categoriesV1Category_universal_d_PlaceCategoryInParentCategoryRequestPosition as PlaceCategoryInParentCategoryRequestPosition,
      categoriesV1Category_universal_d_PlaceCategoryInParentCategoryResponse as PlaceCategoryInParentCategoryResponse,
      categoriesV1Category_universal_d_BulkCreateCategoriesRequest as BulkCreateCategoriesRequest,
      categoriesV1Category_universal_d_BulkCreateCategoriesResponse as BulkCreateCategoriesResponse,
      categoriesV1Category_universal_d_BulkCategoriesResult as BulkCategoriesResult,
      categoriesV1Category_universal_d_ItemMetadata as ItemMetadata,
      categoriesV1Category_universal_d_ApplicationError as ApplicationError,
      categoriesV1Category_universal_d_BulkActionMetadata as BulkActionMetadata,
      categoriesV1Category_universal_d_BulkUpdateCategoriesRequest as BulkUpdateCategoriesRequest,
      categoriesV1Category_universal_d_MaskedCategory as MaskedCategory,
      categoriesV1Category_universal_d_BulkUpdateCategoriesResponse as BulkUpdateCategoriesResponse,
      categoriesV1Category_universal_d_UpdateCategoryVisibilityRequest as UpdateCategoryVisibilityRequest,
      categoriesV1Category_universal_d_UpdateCategoryVisibilityResponse as UpdateCategoryVisibilityResponse,
      categoriesV1Category_universal_d_BulkSetVisibilityRequest as BulkSetVisibilityRequest,
      categoriesV1Category_universal_d_BulkSetVisibilityResponse as BulkSetVisibilityResponse,
      categoriesV1Category_universal_d_BulkSetVisibilityByFilterRequest as BulkSetVisibilityByFilterRequest,
      categoriesV1Category_universal_d_BulkSetVisibilityByFilterResponse as BulkSetVisibilityByFilterResponse,
      categoriesV1Category_universal_d_BulkDeleteCategoriesRequest as BulkDeleteCategoriesRequest,
      categoriesV1Category_universal_d_BulkDeleteCategoriesResponse as BulkDeleteCategoriesResponse,
      categoriesV1Category_universal_d_BulkDeleteCategoriesByFilterRequest as BulkDeleteCategoriesByFilterRequest,
      categoriesV1Category_universal_d_BulkDeleteCategoriesByFilterResponse as BulkDeleteCategoriesByFilterResponse,
      categoriesV1Category_universal_d_AddItemsToCategoryRequest as AddItemsToCategoryRequest,
      categoriesV1Category_universal_d_ItemReference as ItemReference,
      categoriesV1Category_universal_d_AddItemsToCategoryResponse as AddItemsToCategoryResponse,
      categoriesV1Category_universal_d_BulkItemsToCategoryResult as BulkItemsToCategoryResult,
      categoriesV1Category_universal_d_ItemReferenceMetadata as ItemReferenceMetadata,
      categoriesV1Category_universal_d_ItemAddedToCategory as ItemAddedToCategory,
      categoriesV1Category_universal_d_ItemsAddedToCategory as ItemsAddedToCategory,
      categoriesV1Category_universal_d_AddItemToCategoriesRequest as AddItemToCategoriesRequest,
      categoriesV1Category_universal_d_AddItemToCategoriesResponse as AddItemToCategoriesResponse,
      categoriesV1Category_universal_d_BulkItemToCategoriesResult as BulkItemToCategoriesResult,
      categoriesV1Category_universal_d_RemoveItemsFromCategoryRequest as RemoveItemsFromCategoryRequest,
      categoriesV1Category_universal_d_RemoveItemsFromCategoryResponse as RemoveItemsFromCategoryResponse,
      categoriesV1Category_universal_d_ItemRemovedFromCategory as ItemRemovedFromCategory,
      categoriesV1Category_universal_d_ItemsRemovedFromCategory as ItemsRemovedFromCategory,
      categoriesV1Category_universal_d_RemoveItemFromCategoriesRequest as RemoveItemFromCategoriesRequest,
      categoriesV1Category_universal_d_RemoveItemFromCategoriesResponse as RemoveItemFromCategoriesResponse,
      categoriesV1Category_universal_d_ListItemsInCategoryRequest as ListItemsInCategoryRequest,
      categoriesV1Category_universal_d_ListItemsInCategoryResponse as ListItemsInCategoryResponse,
      categoriesV1Category_universal_d_PagingMetadataV2 as PagingMetadataV2,
      categoriesV1Category_universal_d_ListCategoriesForItemRequest as ListCategoriesForItemRequest,
      categoriesV1Category_universal_d_ListCategoriesForItemResponse as ListCategoriesForItemResponse,
      categoriesV1Category_universal_d_MoveItemInCategoryRequest as MoveItemInCategoryRequest,
      categoriesV1Category_universal_d_Position as Position,
      categoriesV1Category_universal_d_MoveItemInCategoryResponse as MoveItemInCategoryResponse,
      categoriesV1Category_universal_d_SetArrangedItemsRequest as SetArrangedItemsRequest,
      categoriesV1Category_universal_d_SetArrangedItemsResponse as SetArrangedItemsResponse,
      categoriesV1Category_universal_d_GetArrangedItemsRequest as GetArrangedItemsRequest,
      categoriesV1Category_universal_d_GetArrangedItemsResponse as GetArrangedItemsResponse,
      categoriesV1Category_universal_d_GetCategoriesTreeRequest as GetCategoriesTreeRequest,
      categoriesV1Category_universal_d_GetCategoriesTreeResponse as GetCategoriesTreeResponse,
      categoriesV1Category_universal_d_CategoryTreeNode as CategoryTreeNode,
      categoriesV1Category_universal_d_DomainEvent as DomainEvent,
      categoriesV1Category_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      categoriesV1Category_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      categoriesV1Category_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      categoriesV1Category_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      categoriesV1Category_universal_d_ActionEvent as ActionEvent,
      categoriesV1Category_universal_d_ExtendedFieldsUpdatedEvent as ExtendedFieldsUpdatedEvent,
      categoriesV1Category_universal_d_Empty as Empty,
      categoriesV1Category_universal_d_createCategory as createCategory,
      categoriesV1Category_universal_d_CreateCategoryOptions as CreateCategoryOptions,
      categoriesV1Category_universal_d_getCategory as getCategory,
      categoriesV1Category_universal_d_GetCategoryOptions as GetCategoryOptions,
      categoriesV1Category_universal_d_updateCategory as updateCategory,
      categoriesV1Category_universal_d_UpdateCategory as UpdateCategory,
      categoriesV1Category_universal_d_UpdateCategoryOptions as UpdateCategoryOptions,
      categoriesV1Category_universal_d_deleteCategory as deleteCategory,
      categoriesV1Category_universal_d_queryCategories as queryCategories,
      categoriesV1Category_universal_d_QueryCategoriesOptions as QueryCategoriesOptions,
      categoriesV1Category_universal_d_CategoriesQueryResult as CategoriesQueryResult,
      categoriesV1Category_universal_d_CategoriesQueryBuilder as CategoriesQueryBuilder,
      categoriesV1Category_universal_d_placeCategoryInParentCategory as placeCategoryInParentCategory,
      categoriesV1Category_universal_d_PlaceCategoryInParentCategoryOptions as PlaceCategoryInParentCategoryOptions,
      categoriesV1Category_universal_d_bulkCreateCategories as bulkCreateCategories,
      categoriesV1Category_universal_d_BulkCreateCategoriesOptions as BulkCreateCategoriesOptions,
      categoriesV1Category_universal_d_bulkUpdateCategories as bulkUpdateCategories,
      categoriesV1Category_universal_d_BulkUpdateCategoriesOptions as BulkUpdateCategoriesOptions,
      categoriesV1Category_universal_d_updateCategoryVisibility as updateCategoryVisibility,
      categoriesV1Category_universal_d_UpdateCategoryVisibilityOptions as UpdateCategoryVisibilityOptions,
      categoriesV1Category_universal_d_bulkSetVisibility as bulkSetVisibility,
      categoriesV1Category_universal_d_BulkSetVisibilityOptions as BulkSetVisibilityOptions,
      categoriesV1Category_universal_d_bulkSetVisibilityByFilter as bulkSetVisibilityByFilter,
      categoriesV1Category_universal_d_BulkSetVisibilityByFilterOptions as BulkSetVisibilityByFilterOptions,
      categoriesV1Category_universal_d_bulkDeleteCategories as bulkDeleteCategories,
      categoriesV1Category_universal_d_bulkDeleteCategoriesByFilter as bulkDeleteCategoriesByFilter,
      categoriesV1Category_universal_d_BulkDeleteCategoriesByFilterOptions as BulkDeleteCategoriesByFilterOptions,
      categoriesV1Category_universal_d_addItemsToCategory as addItemsToCategory,
      categoriesV1Category_universal_d_AddItemsToCategoryOptions as AddItemsToCategoryOptions,
      categoriesV1Category_universal_d_addItemToCategories as addItemToCategories,
      categoriesV1Category_universal_d_AddItemToCategoriesOptions as AddItemToCategoriesOptions,
      categoriesV1Category_universal_d_removeItemsFromCategory as removeItemsFromCategory,
      categoriesV1Category_universal_d_RemoveItemsFromCategoryOptions as RemoveItemsFromCategoryOptions,
      categoriesV1Category_universal_d_removeItemFromCategories as removeItemFromCategories,
      categoriesV1Category_universal_d_RemoveItemFromCategoriesOptions as RemoveItemFromCategoriesOptions,
      categoriesV1Category_universal_d_listItemsInCategory as listItemsInCategory,
      categoriesV1Category_universal_d_ListItemsInCategoryOptions as ListItemsInCategoryOptions,
      categoriesV1Category_universal_d_listCategoriesForItem as listCategoriesForItem,
      categoriesV1Category_universal_d_ListCategoriesForItemOptions as ListCategoriesForItemOptions,
      categoriesV1Category_universal_d_moveItemInCategory as moveItemInCategory,
      categoriesV1Category_universal_d_MoveItemInCategoryOptions as MoveItemInCategoryOptions,
      categoriesV1Category_universal_d_setArrangedItems as setArrangedItems,
      categoriesV1Category_universal_d_SetArrangedItemsOptions as SetArrangedItemsOptions,
      categoriesV1Category_universal_d_getArrangedItems as getArrangedItems,
      categoriesV1Category_universal_d_getCategoriesTree as getCategoriesTree,
      categoriesV1Category_universal_d_GetCategoriesTreeOptions as GetCategoriesTreeOptions,
    };
  }
  
  export { categoriesV1Category_universal_d as categories };
}
