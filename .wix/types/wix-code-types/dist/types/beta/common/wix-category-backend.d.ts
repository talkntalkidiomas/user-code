declare module "wix-category-backend" {
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
       * A category's breadcrumbs.
       * Updated on moved to different parent or on renamed.
       * @readonly
       */
      breadcrumbs?: BreadcrumbItem[];
      /** The parent category. */
      parentCategory?: ParentCategory;
      /**
       * A permanent, friendly URL name.
       * When not provided, generated automatically.
       * When provided, validated and should be unique.
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
  }
  interface BreadcrumbItem {
      /** Represents the id of the breadcrumb item. */
      _id?: string;
      /** Represents the name of the breadcrumb item. */
      name?: string;
      /** Represents the slug of the breadcrumb item. */
      slug?: string;
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
      /** SEO tags information. */
      tags?: Tag[];
      /** SEO general settings. */
      settings?: Settings;
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
       * A `{'key':'value'} pair object where each SEO tag property (`'name'`, `'content'`, `'rel'`, `'href'`) contains a value.
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
       * Whether the auto redirects feature creating `301 redirects` on a slug change is enabled.
       *
       *
       * Default: enabled
       */
      preventAutoRedirect?: boolean;
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
      /** Node type. Use `APP_EMBED` for nodes that embed content from other Wix apps. Use `EMBED` to embed content in [oEmbed](https://oembed.com/) format. */
      type?: NodeType;
      /** Node ID. */
      _id?: string;
      /** A list of child nodes. */
      nodes?: Node[];
      /** Padding and background color styling for the node. */
      style?: NodeStyle;
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
      /** The absolute URL for the linked document. */
      url?: string;
      /** The target node's ID. Used for linking to another node in this object. */
      anchor?: string;
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
      /** Indicates whether the file's source is private. */
      private?: boolean | null;
      /** The absolute URL for the file's source. */
      url?: string | null;
      /** Custom ID. Use `id` instead. */
      custom?: string | null;
      /** An ID that's resolved to a URL by a resolver function. */
      _id?: string | null;
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
      /** Item title. */
      title?: string | null;
      /** Item's alternative text. */
      altText?: string | null;
      /** An image item. */
      image?: Image;
      /** A video item. */
      video?: Video;
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
      /** Styling for the HTML node's container. */
      containerData?: PluginContainerData;
      /** The type of HTML code. */
      source?: Source;
      /** The URL for the HTML code for the node. */
      url?: string;
      /** The HTML code for the node. */
      html?: string;
      /** Whether this is an AdSense element. Use `source` instead. */
      isAdsense?: boolean | null;
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
      /** Background type. For each option, include the relevant details. */
      type?: BackgroundType;
      /** The background color as a hexademical value. */
      color?: string | null;
      /** An image to use for the background. */
      image?: Media;
      /** Details for a gradient background. */
      gradient?: Gradient;
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
      /** The type of decoration to apply. */
      type?: DecorationType;
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
      /** Data for embedded Wix Bookings content. */
      bookingData?: BookingData;
      /** Data for embedded Wix Events content. */
      eventData?: EventData;
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
  interface CreateCategoryRequest {
      /** Category to be created. */
      category: Category;
  }
  interface CreateCategoryResponse {
      /** The created Category. */
      category?: Category;
  }
  interface GetCategoryRequest {
      /** Id of the Category to retrieve. */
      categoryId: string;
  }
  interface GetCategoryResponse {
      /** The retrieved Category. */
      category?: Category;
  }
  interface UpdateCategoryRequest {
      /** Category to be updated, may be partial. */
      category: Category;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  interface UpdateCategoryResponse {
      /** The updated Category. */
      category?: Category;
  }
  interface DeleteCategoryRequest {
      /** Id of the Category to delete. */
      categoryId: string;
  }
  interface DeleteCategoryResponse {
  }
  interface QueryCategoriesRequest {
      /** WQL query expression. */
      query: QueryV2;
  }
  interface QueryV2 extends QueryV2PagingMethodOneOf {
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
      /** Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned. */
      fields?: string[];
      /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned. */
      fieldsets?: string[];
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
  }
  /** @oneof */
  interface QueryV2PagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
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
  interface Paging {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
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
      metadata?: PagingMetadataV2;
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
  interface PlaceCategoryInParentCategoryRequest {
      /** ID of category to place. */
      categoryId: string;
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
      position?: PlaceCategoryInParentCategoryRequestPosition;
      /** Required when `position` is `BEFORE`. */
      moveBeforeCategoryId?: string | null;
  }
  enum PlaceCategoryInParentCategoryRequestPosition {
      UNKNOWN = "UNKNOWN",
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
      /** Whether to return the full category entity in the response. */
      returnFullEntity?: boolean;
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
      /** Created category. Optional - returned only if requested with `return_full_entity` set to `true`. */
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
      code?: string;
      description?: string;
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
  interface BulkSetVisibilityRequest {
      /** IDs of categories to be updated. */
      categoryIds: string[];
      /** Whether to return the full category entity in the response. */
      returnFullEntity?: boolean;
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
  }
  interface BulkDeleteCategoriesByFilterResponse {
      /** Token that can be used to query "AsyncJobService" */
      jobId?: string;
  }
  interface AddItemsToCategoryRequest {
      /** Category id. */
      categoryId: string;
      /** List of catalog items with reference info. */
      items?: ItemReference[];
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
  interface AddItemToCategoriesRequest {
      /** Catalog item reference info */
      itemReference: ItemReference;
      /** Category ids. */
      categoryIds?: string[];
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
      items?: ItemReference[];
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
  interface RemoveItemFromCategoriesRequest {
      /** Catalog item reference info */
      itemReference: ItemReference;
      /** Category ids. */
      categoryIds?: string[];
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
      /** Default: `false`. When `true` items arranged by user will be return before all other items. */
      useCategoryArrangement?: boolean;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `use_category_arrangement` or `include_items_from_subcategories`. */
      paging?: CursorPaging;
  }
  interface ListItemsInCategoryResponse {
      /** Items which satisfy query. */
      items?: ItemReference[];
      /** Paging metadata. Contains cursor which can be used in next query */
      metadata?: PagingMetadataV2;
  }
  interface MoveItemInCategoryRequest {
      /**
       * ID of category.
       * Item must be direct child of this category, otherwise error returned
       */
      categoryId: string;
      /** Item to move. */
      item: ItemReference;
      /**
       * Where to move item.
       * `FIRST` - make `item` first item with manual arrangement. If before this operation category already has 100 manually arranged items, the 100th item will be removed from list of items with manual arrangement.
       * `LAST` - make `item` last item with manual arrangement. If before this operation category already has 100 manually arranged items, moving item will be not last but 100th.
       * `BEFORE` - requires `before_item`, `item` will be moved before it. If `before_item` was 100th item in category it will be removed from list of items with manual arrangement.
       * `NONE` - don't use manual arrangement for `item`, it will be shown after all items with manual arrangement according to default sorting.
       */
      position?: Position;
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
  interface PutCategoriesTreeRequest {
      /** The number of categories to put */
      numberOfCategories: number | null;
  }
  interface PutCategoriesTreeResponse {
  }
  interface GetCategoriesTreeRequest {
  }
  interface GetCategoriesTreeResponse {
      /** Categories tree in dynamo */
      categoryTreeNodeDynamo?: CategoryTreeNode;
      /** Categories tree in sdl */
      categoryTreeNodeSdl?: CategoryTreeNode;
      /** Category ids in sdl */
      categoryIdsSdl?: string[];
  }
  /** Represents a node in the view of categories tree */
  interface CategoryTreeNode {
      /** Category ID. */
      _id?: Uint8Array;
      /**
       * The level of the category within the tree.
       * int32 level = 2 [(.wix.api.min) = 0, (.wix.api.max) = 5];
       * The parent category.
       * google.protobuf.StringValue parent_category_id = 3 [(.wix.api.format) = GUID];
       * A list of child category IDs arranged by the index.
       * repeated string subcategory_ids = 4 [(.wix.api.format) = GUID, (.wix.api.maxSize) = 10000];
       * A list of child categories.
       */
      subcategories?: CategoryTreeNode[];
  }
  interface DomainEvent extends DomainEventBodyOneOf {
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
      createdEvent?: EntityCreatedEvent;
      updatedEvent?: EntityUpdatedEvent;
      deletedEvent?: EntityDeletedEvent;
      actionEvent?: ActionEvent;
      extendedFieldsUpdatedEvent?: ExtendedFieldsUpdatedEvent;
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
   * @requiredField category
   * @requiredField category.name
   * @requiredField category.parentCategory._id
   * @returns The created Category.
   */
  function createCategory(category: Category): Promise<Category>;
  /**
   * Retrieves a category with the provided ID.
   * @param categoryId - Id of the Category to retrieve.
   * @requiredField categoryId
   * @returns The retrieved Category.
   */
  function getCategory(categoryId: string): Promise<Category>;
  /**
   * Update a Category, supports partial update.
   * Pass the latest `revision` for a successful update.
   * Each time the category is updated, `revision` increments by 1.
   * @param _id - Category ID.
   * @requiredField _id
   * @requiredField category
   * @requiredField category.revision
   * @returns The updated Category.
   */
  function updateCategory(_id: string | null, category: UpdateCategory, options?: UpdateCategoryOptions): Promise<Category>;
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
       * A category's breadcrumbs.
       * Updated on moved to different parent or on renamed.
       * @readonly
       */
      breadcrumbs?: BreadcrumbItem[];
      /** The parent category. */
      parentCategory?: ParentCategory;
      /**
       * A permanent, friendly URL name.
       * When not provided, generated automatically.
       * When provided, validated and should be unique.
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
  }
  interface UpdateCategoryOptions {
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  /**
   * Deletes a Category.
   * @param categoryId - Id of the Category to delete.
   * @requiredField categoryId
   */
  function deleteCategory(categoryId: string): Promise<void>;
  /** Query Categories using [WQL - Wix Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language) */
  function queryCategories(): CategoriesQueryBuilder;
  interface QueryCursorResult {
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
       */
      eq: (propertyName: string, value: any) => CategoriesQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      ne: (propertyName: string, value: any) => CategoriesQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      gt: (propertyName: string, value: any) => CategoriesQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      lt: (propertyName: string, value: any) => CategoriesQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       */
      startsWith: (propertyName: string, value: string) => CategoriesQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       */
      hasSome: (propertyName: string, value: any[]) => CategoriesQueryBuilder;
      in: (propertyName: string, value: any) => CategoriesQueryBuilder;
      exists: (propertyName: string, value: boolean) => CategoriesQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments. */
      ascending: (...propertyNames: string[]) => CategoriesQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments. */
      descending: (...propertyNames: string[]) => CategoriesQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object. */
      limit: (limit: number) => CategoriesQueryBuilder;
      find: () => Promise<CategoriesQueryResult>;
  }
  /**
   * Places category in parent category.
   * This operation updates `parentCategory` (`id` and `index`) for category with `categoryId`.
   * This endpoint can be used to move category to different parent or to change it's position in current parent.
   * @param categoryId - ID of category to place.
   * @requiredField categoryId
   */
  function placeCategoryInParentCategory(categoryId: string, options?: PlaceCategoryInParentCategoryOptions): Promise<PlaceCategoryInParentCategoryResponse>;
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
      position?: PlaceCategoryInParentCategoryRequestPosition;
      /** Required when `position` is `BEFORE`. */
      moveBeforeCategoryId?: string | null;
  }
  /**
   * Creates multiple categories.
   * @param categories - List of categories to be created.
   * @requiredField categories
   */
  function bulkCreateCategories(categories: Category[], options?: BulkCreateCategoriesOptions): Promise<BulkCreateCategoriesResponse>;
  interface BulkCreateCategoriesOptions {
      /** Whether to return the full category entity in the response. */
      returnFullEntity?: boolean;
  }
  /**
   * Update `visible` field for multiple categories.
   * @param categoryIds - IDs of categories to be updated.
   * @requiredField categoryIds
   */
  function bulkSetVisibility(categoryIds: string[], options?: BulkSetVisibilityOptions): Promise<BulkSetVisibilityResponse>;
  interface BulkSetVisibilityOptions {
      /** Whether to return the full category entity in the response. */
      returnFullEntity?: boolean;
  }
  /**
   * Update `visible` field for categories which satisfy the provided filter.
   * @param filter - Filter object in the following format:
   * `"filter" : {
   * "fieldName1": "value1",
   * "fieldName2":{"$operator":"value2"}
   * }`
   * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
   * @requiredField filter
   */
  function bulkSetVisibilityByFilter(filter: Record<string, any> | null): Promise<BulkSetVisibilityByFilterResponse>;
  /**
   * Deletes multiple categories.
   * @param categoryIds - IDs of categories to be deleted.
   * @requiredField categoryIds
   */
  function bulkDeleteCategories(categoryIds: string[]): Promise<BulkDeleteCategoriesResponse>;
  /**
   * Delete multiple categories which satisfy the provided filter.
   * @param filter - Filter object in the following format:
   * `"filter" : {
   * "fieldName1": "value1",
   * "fieldName2":{"$operator":"value2"}
   * }`
   * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
   * @requiredField filter
   */
  function bulkDeleteCategoriesByFilter(filter: Record<string, any> | null): Promise<BulkDeleteCategoriesByFilterResponse>;
  /**
   * Adds multiple items to single category, fires as many domain events as many items successfully added.
   * @param categoryId - Category id.
   * @requiredField categoryId
   */
  function addItemsToCategory(categoryId: string, options?: AddItemsToCategoryOptions): Promise<AddItemsToCategoryResponse>;
  interface AddItemsToCategoryOptions {
      /** List of catalog items with reference info. */
      items?: ItemReference[];
  }
  /**
   * Adds single item to multiple categories, fires as many domain events as many categories were successfully added.
   * @param itemReference - Catalog item reference info
   * @requiredField itemReference
   */
  function addItemToCategories(itemReference: ItemReference, options?: AddItemToCategoriesOptions): Promise<AddItemToCategoriesResponse>;
  interface AddItemToCategoriesOptions {
      /** Category ids. */
      categoryIds?: string[];
  }
  /**
   * Removed multiple items from single category, fires as many domain events as many items successfully removed.
   * @param categoryId - Category id
   * @requiredField categoryId
   */
  function removeItemsFromCategory(categoryId: string, options?: RemoveItemsFromCategoryOptions): Promise<RemoveItemsFromCategoryResponse>;
  interface RemoveItemsFromCategoryOptions {
      /** List of catalog items with reference info. */
      items?: ItemReference[];
  }
  /**
   * Removes single item from multiple categories, fires as many domain events as many categories were successfully removed.
   * @param itemReference - Catalog item reference info
   * @requiredField itemReference
   */
  function removeItemFromCategories(itemReference: ItemReference, options?: RemoveItemFromCategoriesOptions): Promise<RemoveItemFromCategoriesResponse>;
  interface RemoveItemFromCategoriesOptions {
      /** Category ids. */
      categoryIds?: string[];
  }
  /**
   * Returns up to 100 items related to requested `category_id` sorted by time when item added to category, descending.
   * When items added to category in bulk they considered as added at exactly same time so order will be random but always the same.
   * @param categoryId - ID of category containing items.
   * @requiredField categoryId
   */
  function listItemsInCategory(categoryId: string, options?: ListItemsInCategoryOptions): Promise<ListItemsInCategoryResponse>;
  interface ListItemsInCategoryOptions {
      /** Default: `false`. When `true` items arranged by user will be return before all other items. */
      useCategoryArrangement?: boolean;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `use_category_arrangement` or `include_items_from_subcategories`. */
      paging?: CursorPaging;
  }
  /**
   * Changes position of `item` in category. Will be used when sort items by manual arrangement
   * @param categoryId - ID of category.
   * Item must be direct child of this category, otherwise error returned
   * @param item - Item to move.
   * @requiredField categoryId
   * @requiredField item
   */
  function moveItemInCategory(categoryId: string, item: ItemReference, options?: MoveItemInCategoryOptions): Promise<MoveItemInCategoryResponse>;
  interface MoveItemInCategoryOptions {
      /**
       * Where to move item.
       * `FIRST` - make `item` first item with manual arrangement. If before this operation category already has 100 manually arranged items, the 100th item will be removed from list of items with manual arrangement.
       * `LAST` - make `item` last item with manual arrangement. If before this operation category already has 100 manually arranged items, moving item will be not last but 100th.
       * `BEFORE` - requires `before_item`, `item` will be moved before it. If `before_item` was 100th item in category it will be removed from list of items with manual arrangement.
       * `NONE` - don't use manual arrangement for `item`, it will be shown after all items with manual arrangement according to default sorting.
       */
      position?: Position;
      /** Required when `position` is `BEFORE`. `before_item` must be manually arranged item. */
      beforeItem?: ItemReference;
  }
  /**
   * Save the whole categories tree
   * @param numberOfCategories - The number of categories to put
   * @requiredField numberOfCategories
   */
  function putCategoriesTree(numberOfCategories: number | null): Promise<void>;
  /** Retrieves the whole categories tree */
  function getCategoriesTree(): Promise<GetCategoriesTreeResponse>;
  
  const ecomV1Category_universal_d___debug: typeof __debug;
  type ecomV1Category_universal_d_Category = Category;
  type ecomV1Category_universal_d_BreadcrumbItem = BreadcrumbItem;
  type ecomV1Category_universal_d_ParentCategory = ParentCategory;
  type ecomV1Category_universal_d_SeoSchema = SeoSchema;
  type ecomV1Category_universal_d_Tag = Tag;
  type ecomV1Category_universal_d_Settings = Settings;
  type ecomV1Category_universal_d_RichContent = RichContent;
  type ecomV1Category_universal_d_Node = Node;
  type ecomV1Category_universal_d_NodeDataOneOf = NodeDataOneOf;
  type ecomV1Category_universal_d_NodeType = NodeType;
  const ecomV1Category_universal_d_NodeType: typeof NodeType;
  type ecomV1Category_universal_d_NodeStyle = NodeStyle;
  type ecomV1Category_universal_d_ButtonData = ButtonData;
  type ecomV1Category_universal_d_Border = Border;
  type ecomV1Category_universal_d_Colors = Colors;
  type ecomV1Category_universal_d_PluginContainerData = PluginContainerData;
  type ecomV1Category_universal_d_WidthType = WidthType;
  const ecomV1Category_universal_d_WidthType: typeof WidthType;
  type ecomV1Category_universal_d_PluginContainerDataWidth = PluginContainerDataWidth;
  type ecomV1Category_universal_d_PluginContainerDataWidthDataOneOf = PluginContainerDataWidthDataOneOf;
  type ecomV1Category_universal_d_PluginContainerDataAlignment = PluginContainerDataAlignment;
  const ecomV1Category_universal_d_PluginContainerDataAlignment: typeof PluginContainerDataAlignment;
  type ecomV1Category_universal_d_Spoiler = Spoiler;
  type ecomV1Category_universal_d_Height = Height;
  type ecomV1Category_universal_d_Type = Type;
  const ecomV1Category_universal_d_Type: typeof Type;
  type ecomV1Category_universal_d_Styles = Styles;
  type ecomV1Category_universal_d_Link = Link;
  type ecomV1Category_universal_d_LinkDataOneOf = LinkDataOneOf;
  type ecomV1Category_universal_d_Target = Target;
  const ecomV1Category_universal_d_Target: typeof Target;
  type ecomV1Category_universal_d_Rel = Rel;
  type ecomV1Category_universal_d_CodeBlockData = CodeBlockData;
  type ecomV1Category_universal_d_TextStyle = TextStyle;
  type ecomV1Category_universal_d_TextAlignment = TextAlignment;
  const ecomV1Category_universal_d_TextAlignment: typeof TextAlignment;
  type ecomV1Category_universal_d_DividerData = DividerData;
  type ecomV1Category_universal_d_LineStyle = LineStyle;
  const ecomV1Category_universal_d_LineStyle: typeof LineStyle;
  type ecomV1Category_universal_d_Width = Width;
  const ecomV1Category_universal_d_Width: typeof Width;
  type ecomV1Category_universal_d_Alignment = Alignment;
  const ecomV1Category_universal_d_Alignment: typeof Alignment;
  type ecomV1Category_universal_d_FileData = FileData;
  type ecomV1Category_universal_d_ViewMode = ViewMode;
  const ecomV1Category_universal_d_ViewMode: typeof ViewMode;
  type ecomV1Category_universal_d_FileSource = FileSource;
  type ecomV1Category_universal_d_FileSourceDataOneOf = FileSourceDataOneOf;
  type ecomV1Category_universal_d_PDFSettings = PDFSettings;
  type ecomV1Category_universal_d_GalleryData = GalleryData;
  type ecomV1Category_universal_d_Media = Media;
  type ecomV1Category_universal_d_Image = Image;
  type ecomV1Category_universal_d_Video = Video;
  type ecomV1Category_universal_d_Item = Item;
  type ecomV1Category_universal_d_ItemDataOneOf = ItemDataOneOf;
  type ecomV1Category_universal_d_GalleryOptions = GalleryOptions;
  type ecomV1Category_universal_d_LayoutType = LayoutType;
  const ecomV1Category_universal_d_LayoutType: typeof LayoutType;
  type ecomV1Category_universal_d_Orientation = Orientation;
  const ecomV1Category_universal_d_Orientation: typeof Orientation;
  type ecomV1Category_universal_d_Crop = Crop;
  const ecomV1Category_universal_d_Crop: typeof Crop;
  type ecomV1Category_universal_d_ThumbnailsAlignment = ThumbnailsAlignment;
  const ecomV1Category_universal_d_ThumbnailsAlignment: typeof ThumbnailsAlignment;
  type ecomV1Category_universal_d_Layout = Layout;
  type ecomV1Category_universal_d_ItemStyle = ItemStyle;
  type ecomV1Category_universal_d_Thumbnails = Thumbnails;
  type ecomV1Category_universal_d_GIFData = GIFData;
  type ecomV1Category_universal_d_GIF = GIF;
  type ecomV1Category_universal_d_HeadingData = HeadingData;
  type ecomV1Category_universal_d_HTMLData = HTMLData;
  type ecomV1Category_universal_d_HTMLDataDataOneOf = HTMLDataDataOneOf;
  type ecomV1Category_universal_d_Source = Source;
  const ecomV1Category_universal_d_Source: typeof Source;
  type ecomV1Category_universal_d_ImageData = ImageData;
  type ecomV1Category_universal_d_LinkPreviewData = LinkPreviewData;
  type ecomV1Category_universal_d_MapData = MapData;
  type ecomV1Category_universal_d_MapSettings = MapSettings;
  type ecomV1Category_universal_d_MapType = MapType;
  const ecomV1Category_universal_d_MapType: typeof MapType;
  type ecomV1Category_universal_d_ParagraphData = ParagraphData;
  type ecomV1Category_universal_d_PollData = PollData;
  type ecomV1Category_universal_d_ViewRole = ViewRole;
  const ecomV1Category_universal_d_ViewRole: typeof ViewRole;
  type ecomV1Category_universal_d_VoteRole = VoteRole;
  const ecomV1Category_universal_d_VoteRole: typeof VoteRole;
  type ecomV1Category_universal_d_Permissions = Permissions;
  type ecomV1Category_universal_d_Option = Option;
  type ecomV1Category_universal_d_PollSettings = PollSettings;
  type ecomV1Category_universal_d_PollLayoutType = PollLayoutType;
  const ecomV1Category_universal_d_PollLayoutType: typeof PollLayoutType;
  type ecomV1Category_universal_d_PollLayoutDirection = PollLayoutDirection;
  const ecomV1Category_universal_d_PollLayoutDirection: typeof PollLayoutDirection;
  type ecomV1Category_universal_d_PollLayout = PollLayout;
  type ecomV1Category_universal_d_OptionLayout = OptionLayout;
  type ecomV1Category_universal_d_BackgroundType = BackgroundType;
  const ecomV1Category_universal_d_BackgroundType: typeof BackgroundType;
  type ecomV1Category_universal_d_Gradient = Gradient;
  type ecomV1Category_universal_d_Background = Background;
  type ecomV1Category_universal_d_BackgroundBackgroundOneOf = BackgroundBackgroundOneOf;
  type ecomV1Category_universal_d_PollDesign = PollDesign;
  type ecomV1Category_universal_d_OptionDesign = OptionDesign;
  type ecomV1Category_universal_d_Poll = Poll;
  type ecomV1Category_universal_d_PollDataLayout = PollDataLayout;
  type ecomV1Category_universal_d_Design = Design;
  type ecomV1Category_universal_d_TextData = TextData;
  type ecomV1Category_universal_d_Decoration = Decoration;
  type ecomV1Category_universal_d_DecorationDataOneOf = DecorationDataOneOf;
  type ecomV1Category_universal_d_DecorationType = DecorationType;
  const ecomV1Category_universal_d_DecorationType: typeof DecorationType;
  type ecomV1Category_universal_d_AnchorData = AnchorData;
  type ecomV1Category_universal_d_ColorData = ColorData;
  type ecomV1Category_universal_d_LinkData = LinkData;
  type ecomV1Category_universal_d_MentionData = MentionData;
  type ecomV1Category_universal_d_FontSizeData = FontSizeData;
  type ecomV1Category_universal_d_FontType = FontType;
  const ecomV1Category_universal_d_FontType: typeof FontType;
  type ecomV1Category_universal_d_AppEmbedData = AppEmbedData;
  type ecomV1Category_universal_d_AppEmbedDataAppDataOneOf = AppEmbedDataAppDataOneOf;
  type ecomV1Category_universal_d_AppType = AppType;
  const ecomV1Category_universal_d_AppType: typeof AppType;
  type ecomV1Category_universal_d_BookingData = BookingData;
  type ecomV1Category_universal_d_EventData = EventData;
  type ecomV1Category_universal_d_VideoData = VideoData;
  type ecomV1Category_universal_d_PlaybackOptions = PlaybackOptions;
  type ecomV1Category_universal_d_EmbedData = EmbedData;
  type ecomV1Category_universal_d_Oembed = Oembed;
  type ecomV1Category_universal_d_CollapsibleListData = CollapsibleListData;
  type ecomV1Category_universal_d_InitialExpandedItems = InitialExpandedItems;
  const ecomV1Category_universal_d_InitialExpandedItems: typeof InitialExpandedItems;
  type ecomV1Category_universal_d_Direction = Direction;
  const ecomV1Category_universal_d_Direction: typeof Direction;
  type ecomV1Category_universal_d_TableData = TableData;
  type ecomV1Category_universal_d_Dimensions = Dimensions;
  type ecomV1Category_universal_d_TableCellData = TableCellData;
  type ecomV1Category_universal_d_VerticalAlignment = VerticalAlignment;
  const ecomV1Category_universal_d_VerticalAlignment: typeof VerticalAlignment;
  type ecomV1Category_universal_d_CellStyle = CellStyle;
  type ecomV1Category_universal_d_BorderColors = BorderColors;
  type ecomV1Category_universal_d_NullValue = NullValue;
  const ecomV1Category_universal_d_NullValue: typeof NullValue;
  type ecomV1Category_universal_d_ListValue = ListValue;
  type ecomV1Category_universal_d_AudioData = AudioData;
  type ecomV1Category_universal_d_OrderedListData = OrderedListData;
  type ecomV1Category_universal_d_BulletedListData = BulletedListData;
  type ecomV1Category_universal_d_BlockquoteData = BlockquoteData;
  type ecomV1Category_universal_d_Metadata = Metadata;
  type ecomV1Category_universal_d_DocumentStyle = DocumentStyle;
  type ecomV1Category_universal_d_TextNodeStyle = TextNodeStyle;
  type ecomV1Category_universal_d_CreateCategoryRequest = CreateCategoryRequest;
  type ecomV1Category_universal_d_CreateCategoryResponse = CreateCategoryResponse;
  type ecomV1Category_universal_d_GetCategoryRequest = GetCategoryRequest;
  type ecomV1Category_universal_d_GetCategoryResponse = GetCategoryResponse;
  type ecomV1Category_universal_d_UpdateCategoryRequest = UpdateCategoryRequest;
  type ecomV1Category_universal_d_UpdateCategoryResponse = UpdateCategoryResponse;
  type ecomV1Category_universal_d_DeleteCategoryRequest = DeleteCategoryRequest;
  type ecomV1Category_universal_d_DeleteCategoryResponse = DeleteCategoryResponse;
  type ecomV1Category_universal_d_QueryCategoriesRequest = QueryCategoriesRequest;
  type ecomV1Category_universal_d_QueryV2 = QueryV2;
  type ecomV1Category_universal_d_QueryV2PagingMethodOneOf = QueryV2PagingMethodOneOf;
  type ecomV1Category_universal_d_Sorting = Sorting;
  type ecomV1Category_universal_d_SortOrder = SortOrder;
  const ecomV1Category_universal_d_SortOrder: typeof SortOrder;
  type ecomV1Category_universal_d_Paging = Paging;
  type ecomV1Category_universal_d_CursorPaging = CursorPaging;
  type ecomV1Category_universal_d_QueryCategoriesResponse = QueryCategoriesResponse;
  type ecomV1Category_universal_d_PagingMetadataV2 = PagingMetadataV2;
  type ecomV1Category_universal_d_Cursors = Cursors;
  type ecomV1Category_universal_d_PlaceCategoryInParentCategoryRequest = PlaceCategoryInParentCategoryRequest;
  type ecomV1Category_universal_d_PlaceCategoryInParentCategoryRequestPosition = PlaceCategoryInParentCategoryRequestPosition;
  const ecomV1Category_universal_d_PlaceCategoryInParentCategoryRequestPosition: typeof PlaceCategoryInParentCategoryRequestPosition;
  type ecomV1Category_universal_d_PlaceCategoryInParentCategoryResponse = PlaceCategoryInParentCategoryResponse;
  type ecomV1Category_universal_d_BulkCreateCategoriesRequest = BulkCreateCategoriesRequest;
  type ecomV1Category_universal_d_BulkCreateCategoriesResponse = BulkCreateCategoriesResponse;
  type ecomV1Category_universal_d_BulkCategoriesResult = BulkCategoriesResult;
  type ecomV1Category_universal_d_ItemMetadata = ItemMetadata;
  type ecomV1Category_universal_d_ApplicationError = ApplicationError;
  type ecomV1Category_universal_d_BulkActionMetadata = BulkActionMetadata;
  type ecomV1Category_universal_d_BulkSetVisibilityRequest = BulkSetVisibilityRequest;
  type ecomV1Category_universal_d_BulkSetVisibilityResponse = BulkSetVisibilityResponse;
  type ecomV1Category_universal_d_BulkSetVisibilityByFilterRequest = BulkSetVisibilityByFilterRequest;
  type ecomV1Category_universal_d_BulkSetVisibilityByFilterResponse = BulkSetVisibilityByFilterResponse;
  type ecomV1Category_universal_d_BulkDeleteCategoriesRequest = BulkDeleteCategoriesRequest;
  type ecomV1Category_universal_d_BulkDeleteCategoriesResponse = BulkDeleteCategoriesResponse;
  type ecomV1Category_universal_d_BulkDeleteCategoriesByFilterRequest = BulkDeleteCategoriesByFilterRequest;
  type ecomV1Category_universal_d_BulkDeleteCategoriesByFilterResponse = BulkDeleteCategoriesByFilterResponse;
  type ecomV1Category_universal_d_AddItemsToCategoryRequest = AddItemsToCategoryRequest;
  type ecomV1Category_universal_d_ItemReference = ItemReference;
  type ecomV1Category_universal_d_AddItemsToCategoryResponse = AddItemsToCategoryResponse;
  type ecomV1Category_universal_d_BulkItemsToCategoryResult = BulkItemsToCategoryResult;
  type ecomV1Category_universal_d_ItemReferenceMetadata = ItemReferenceMetadata;
  type ecomV1Category_universal_d_ItemAddedToCategory = ItemAddedToCategory;
  type ecomV1Category_universal_d_AddItemToCategoriesRequest = AddItemToCategoriesRequest;
  type ecomV1Category_universal_d_AddItemToCategoriesResponse = AddItemToCategoriesResponse;
  type ecomV1Category_universal_d_BulkItemToCategoriesResult = BulkItemToCategoriesResult;
  type ecomV1Category_universal_d_RemoveItemsFromCategoryRequest = RemoveItemsFromCategoryRequest;
  type ecomV1Category_universal_d_RemoveItemsFromCategoryResponse = RemoveItemsFromCategoryResponse;
  type ecomV1Category_universal_d_ItemRemovedFromCategory = ItemRemovedFromCategory;
  type ecomV1Category_universal_d_RemoveItemFromCategoriesRequest = RemoveItemFromCategoriesRequest;
  type ecomV1Category_universal_d_RemoveItemFromCategoriesResponse = RemoveItemFromCategoriesResponse;
  type ecomV1Category_universal_d_ListItemsInCategoryRequest = ListItemsInCategoryRequest;
  type ecomV1Category_universal_d_ListItemsInCategoryResponse = ListItemsInCategoryResponse;
  type ecomV1Category_universal_d_MoveItemInCategoryRequest = MoveItemInCategoryRequest;
  type ecomV1Category_universal_d_Position = Position;
  const ecomV1Category_universal_d_Position: typeof Position;
  type ecomV1Category_universal_d_MoveItemInCategoryResponse = MoveItemInCategoryResponse;
  type ecomV1Category_universal_d_PutCategoriesTreeRequest = PutCategoriesTreeRequest;
  type ecomV1Category_universal_d_PutCategoriesTreeResponse = PutCategoriesTreeResponse;
  type ecomV1Category_universal_d_GetCategoriesTreeRequest = GetCategoriesTreeRequest;
  type ecomV1Category_universal_d_GetCategoriesTreeResponse = GetCategoriesTreeResponse;
  type ecomV1Category_universal_d_CategoryTreeNode = CategoryTreeNode;
  type ecomV1Category_universal_d_DomainEvent = DomainEvent;
  type ecomV1Category_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type ecomV1Category_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type ecomV1Category_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type ecomV1Category_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type ecomV1Category_universal_d_ActionEvent = ActionEvent;
  type ecomV1Category_universal_d_ExtendedFieldsUpdatedEvent = ExtendedFieldsUpdatedEvent;
  type ecomV1Category_universal_d_Empty = Empty;
  const ecomV1Category_universal_d_createCategory: typeof createCategory;
  const ecomV1Category_universal_d_getCategory: typeof getCategory;
  const ecomV1Category_universal_d_updateCategory: typeof updateCategory;
  type ecomV1Category_universal_d_UpdateCategory = UpdateCategory;
  type ecomV1Category_universal_d_UpdateCategoryOptions = UpdateCategoryOptions;
  const ecomV1Category_universal_d_deleteCategory: typeof deleteCategory;
  const ecomV1Category_universal_d_queryCategories: typeof queryCategories;
  type ecomV1Category_universal_d_CategoriesQueryResult = CategoriesQueryResult;
  type ecomV1Category_universal_d_CategoriesQueryBuilder = CategoriesQueryBuilder;
  const ecomV1Category_universal_d_placeCategoryInParentCategory: typeof placeCategoryInParentCategory;
  type ecomV1Category_universal_d_PlaceCategoryInParentCategoryOptions = PlaceCategoryInParentCategoryOptions;
  const ecomV1Category_universal_d_bulkCreateCategories: typeof bulkCreateCategories;
  type ecomV1Category_universal_d_BulkCreateCategoriesOptions = BulkCreateCategoriesOptions;
  const ecomV1Category_universal_d_bulkSetVisibility: typeof bulkSetVisibility;
  type ecomV1Category_universal_d_BulkSetVisibilityOptions = BulkSetVisibilityOptions;
  const ecomV1Category_universal_d_bulkSetVisibilityByFilter: typeof bulkSetVisibilityByFilter;
  const ecomV1Category_universal_d_bulkDeleteCategories: typeof bulkDeleteCategories;
  const ecomV1Category_universal_d_bulkDeleteCategoriesByFilter: typeof bulkDeleteCategoriesByFilter;
  const ecomV1Category_universal_d_addItemsToCategory: typeof addItemsToCategory;
  type ecomV1Category_universal_d_AddItemsToCategoryOptions = AddItemsToCategoryOptions;
  const ecomV1Category_universal_d_addItemToCategories: typeof addItemToCategories;
  type ecomV1Category_universal_d_AddItemToCategoriesOptions = AddItemToCategoriesOptions;
  const ecomV1Category_universal_d_removeItemsFromCategory: typeof removeItemsFromCategory;
  type ecomV1Category_universal_d_RemoveItemsFromCategoryOptions = RemoveItemsFromCategoryOptions;
  const ecomV1Category_universal_d_removeItemFromCategories: typeof removeItemFromCategories;
  type ecomV1Category_universal_d_RemoveItemFromCategoriesOptions = RemoveItemFromCategoriesOptions;
  const ecomV1Category_universal_d_listItemsInCategory: typeof listItemsInCategory;
  type ecomV1Category_universal_d_ListItemsInCategoryOptions = ListItemsInCategoryOptions;
  const ecomV1Category_universal_d_moveItemInCategory: typeof moveItemInCategory;
  type ecomV1Category_universal_d_MoveItemInCategoryOptions = MoveItemInCategoryOptions;
  const ecomV1Category_universal_d_putCategoriesTree: typeof putCategoriesTree;
  const ecomV1Category_universal_d_getCategoriesTree: typeof getCategoriesTree;
  namespace ecomV1Category_universal_d {
    export {
      ecomV1Category_universal_d___debug as __debug,
      ecomV1Category_universal_d_Category as Category,
      ecomV1Category_universal_d_BreadcrumbItem as BreadcrumbItem,
      ecomV1Category_universal_d_ParentCategory as ParentCategory,
      ecomV1Category_universal_d_SeoSchema as SeoSchema,
      ecomV1Category_universal_d_Tag as Tag,
      ecomV1Category_universal_d_Settings as Settings,
      ecomV1Category_universal_d_RichContent as RichContent,
      ecomV1Category_universal_d_Node as Node,
      ecomV1Category_universal_d_NodeDataOneOf as NodeDataOneOf,
      ecomV1Category_universal_d_NodeType as NodeType,
      ecomV1Category_universal_d_NodeStyle as NodeStyle,
      ecomV1Category_universal_d_ButtonData as ButtonData,
      ecomV1Category_universal_d_Border as Border,
      ecomV1Category_universal_d_Colors as Colors,
      ecomV1Category_universal_d_PluginContainerData as PluginContainerData,
      ecomV1Category_universal_d_WidthType as WidthType,
      ecomV1Category_universal_d_PluginContainerDataWidth as PluginContainerDataWidth,
      ecomV1Category_universal_d_PluginContainerDataWidthDataOneOf as PluginContainerDataWidthDataOneOf,
      ecomV1Category_universal_d_PluginContainerDataAlignment as PluginContainerDataAlignment,
      ecomV1Category_universal_d_Spoiler as Spoiler,
      ecomV1Category_universal_d_Height as Height,
      ecomV1Category_universal_d_Type as Type,
      ecomV1Category_universal_d_Styles as Styles,
      ecomV1Category_universal_d_Link as Link,
      ecomV1Category_universal_d_LinkDataOneOf as LinkDataOneOf,
      ecomV1Category_universal_d_Target as Target,
      ecomV1Category_universal_d_Rel as Rel,
      ecomV1Category_universal_d_CodeBlockData as CodeBlockData,
      ecomV1Category_universal_d_TextStyle as TextStyle,
      ecomV1Category_universal_d_TextAlignment as TextAlignment,
      ecomV1Category_universal_d_DividerData as DividerData,
      ecomV1Category_universal_d_LineStyle as LineStyle,
      ecomV1Category_universal_d_Width as Width,
      ecomV1Category_universal_d_Alignment as Alignment,
      ecomV1Category_universal_d_FileData as FileData,
      ecomV1Category_universal_d_ViewMode as ViewMode,
      ecomV1Category_universal_d_FileSource as FileSource,
      ecomV1Category_universal_d_FileSourceDataOneOf as FileSourceDataOneOf,
      ecomV1Category_universal_d_PDFSettings as PDFSettings,
      ecomV1Category_universal_d_GalleryData as GalleryData,
      ecomV1Category_universal_d_Media as Media,
      ecomV1Category_universal_d_Image as Image,
      ecomV1Category_universal_d_Video as Video,
      ecomV1Category_universal_d_Item as Item,
      ecomV1Category_universal_d_ItemDataOneOf as ItemDataOneOf,
      ecomV1Category_universal_d_GalleryOptions as GalleryOptions,
      ecomV1Category_universal_d_LayoutType as LayoutType,
      ecomV1Category_universal_d_Orientation as Orientation,
      ecomV1Category_universal_d_Crop as Crop,
      ecomV1Category_universal_d_ThumbnailsAlignment as ThumbnailsAlignment,
      ecomV1Category_universal_d_Layout as Layout,
      ecomV1Category_universal_d_ItemStyle as ItemStyle,
      ecomV1Category_universal_d_Thumbnails as Thumbnails,
      ecomV1Category_universal_d_GIFData as GIFData,
      ecomV1Category_universal_d_GIF as GIF,
      ecomV1Category_universal_d_HeadingData as HeadingData,
      ecomV1Category_universal_d_HTMLData as HTMLData,
      ecomV1Category_universal_d_HTMLDataDataOneOf as HTMLDataDataOneOf,
      ecomV1Category_universal_d_Source as Source,
      ecomV1Category_universal_d_ImageData as ImageData,
      ecomV1Category_universal_d_LinkPreviewData as LinkPreviewData,
      ecomV1Category_universal_d_MapData as MapData,
      ecomV1Category_universal_d_MapSettings as MapSettings,
      ecomV1Category_universal_d_MapType as MapType,
      ecomV1Category_universal_d_ParagraphData as ParagraphData,
      ecomV1Category_universal_d_PollData as PollData,
      ecomV1Category_universal_d_ViewRole as ViewRole,
      ecomV1Category_universal_d_VoteRole as VoteRole,
      ecomV1Category_universal_d_Permissions as Permissions,
      ecomV1Category_universal_d_Option as Option,
      ecomV1Category_universal_d_PollSettings as PollSettings,
      ecomV1Category_universal_d_PollLayoutType as PollLayoutType,
      ecomV1Category_universal_d_PollLayoutDirection as PollLayoutDirection,
      ecomV1Category_universal_d_PollLayout as PollLayout,
      ecomV1Category_universal_d_OptionLayout as OptionLayout,
      ecomV1Category_universal_d_BackgroundType as BackgroundType,
      ecomV1Category_universal_d_Gradient as Gradient,
      ecomV1Category_universal_d_Background as Background,
      ecomV1Category_universal_d_BackgroundBackgroundOneOf as BackgroundBackgroundOneOf,
      ecomV1Category_universal_d_PollDesign as PollDesign,
      ecomV1Category_universal_d_OptionDesign as OptionDesign,
      ecomV1Category_universal_d_Poll as Poll,
      ecomV1Category_universal_d_PollDataLayout as PollDataLayout,
      ecomV1Category_universal_d_Design as Design,
      ecomV1Category_universal_d_TextData as TextData,
      ecomV1Category_universal_d_Decoration as Decoration,
      ecomV1Category_universal_d_DecorationDataOneOf as DecorationDataOneOf,
      ecomV1Category_universal_d_DecorationType as DecorationType,
      ecomV1Category_universal_d_AnchorData as AnchorData,
      ecomV1Category_universal_d_ColorData as ColorData,
      ecomV1Category_universal_d_LinkData as LinkData,
      ecomV1Category_universal_d_MentionData as MentionData,
      ecomV1Category_universal_d_FontSizeData as FontSizeData,
      ecomV1Category_universal_d_FontType as FontType,
      ecomV1Category_universal_d_AppEmbedData as AppEmbedData,
      ecomV1Category_universal_d_AppEmbedDataAppDataOneOf as AppEmbedDataAppDataOneOf,
      ecomV1Category_universal_d_AppType as AppType,
      ecomV1Category_universal_d_BookingData as BookingData,
      ecomV1Category_universal_d_EventData as EventData,
      ecomV1Category_universal_d_VideoData as VideoData,
      ecomV1Category_universal_d_PlaybackOptions as PlaybackOptions,
      ecomV1Category_universal_d_EmbedData as EmbedData,
      ecomV1Category_universal_d_Oembed as Oembed,
      ecomV1Category_universal_d_CollapsibleListData as CollapsibleListData,
      ecomV1Category_universal_d_InitialExpandedItems as InitialExpandedItems,
      ecomV1Category_universal_d_Direction as Direction,
      ecomV1Category_universal_d_TableData as TableData,
      ecomV1Category_universal_d_Dimensions as Dimensions,
      ecomV1Category_universal_d_TableCellData as TableCellData,
      ecomV1Category_universal_d_VerticalAlignment as VerticalAlignment,
      ecomV1Category_universal_d_CellStyle as CellStyle,
      ecomV1Category_universal_d_BorderColors as BorderColors,
      ecomV1Category_universal_d_NullValue as NullValue,
      ecomV1Category_universal_d_ListValue as ListValue,
      ecomV1Category_universal_d_AudioData as AudioData,
      ecomV1Category_universal_d_OrderedListData as OrderedListData,
      ecomV1Category_universal_d_BulletedListData as BulletedListData,
      ecomV1Category_universal_d_BlockquoteData as BlockquoteData,
      ecomV1Category_universal_d_Metadata as Metadata,
      ecomV1Category_universal_d_DocumentStyle as DocumentStyle,
      ecomV1Category_universal_d_TextNodeStyle as TextNodeStyle,
      ecomV1Category_universal_d_CreateCategoryRequest as CreateCategoryRequest,
      ecomV1Category_universal_d_CreateCategoryResponse as CreateCategoryResponse,
      ecomV1Category_universal_d_GetCategoryRequest as GetCategoryRequest,
      ecomV1Category_universal_d_GetCategoryResponse as GetCategoryResponse,
      ecomV1Category_universal_d_UpdateCategoryRequest as UpdateCategoryRequest,
      ecomV1Category_universal_d_UpdateCategoryResponse as UpdateCategoryResponse,
      ecomV1Category_universal_d_DeleteCategoryRequest as DeleteCategoryRequest,
      ecomV1Category_universal_d_DeleteCategoryResponse as DeleteCategoryResponse,
      ecomV1Category_universal_d_QueryCategoriesRequest as QueryCategoriesRequest,
      ecomV1Category_universal_d_QueryV2 as QueryV2,
      ecomV1Category_universal_d_QueryV2PagingMethodOneOf as QueryV2PagingMethodOneOf,
      ecomV1Category_universal_d_Sorting as Sorting,
      ecomV1Category_universal_d_SortOrder as SortOrder,
      ecomV1Category_universal_d_Paging as Paging,
      ecomV1Category_universal_d_CursorPaging as CursorPaging,
      ecomV1Category_universal_d_QueryCategoriesResponse as QueryCategoriesResponse,
      ecomV1Category_universal_d_PagingMetadataV2 as PagingMetadataV2,
      ecomV1Category_universal_d_Cursors as Cursors,
      ecomV1Category_universal_d_PlaceCategoryInParentCategoryRequest as PlaceCategoryInParentCategoryRequest,
      ecomV1Category_universal_d_PlaceCategoryInParentCategoryRequestPosition as PlaceCategoryInParentCategoryRequestPosition,
      ecomV1Category_universal_d_PlaceCategoryInParentCategoryResponse as PlaceCategoryInParentCategoryResponse,
      ecomV1Category_universal_d_BulkCreateCategoriesRequest as BulkCreateCategoriesRequest,
      ecomV1Category_universal_d_BulkCreateCategoriesResponse as BulkCreateCategoriesResponse,
      ecomV1Category_universal_d_BulkCategoriesResult as BulkCategoriesResult,
      ecomV1Category_universal_d_ItemMetadata as ItemMetadata,
      ecomV1Category_universal_d_ApplicationError as ApplicationError,
      ecomV1Category_universal_d_BulkActionMetadata as BulkActionMetadata,
      ecomV1Category_universal_d_BulkSetVisibilityRequest as BulkSetVisibilityRequest,
      ecomV1Category_universal_d_BulkSetVisibilityResponse as BulkSetVisibilityResponse,
      ecomV1Category_universal_d_BulkSetVisibilityByFilterRequest as BulkSetVisibilityByFilterRequest,
      ecomV1Category_universal_d_BulkSetVisibilityByFilterResponse as BulkSetVisibilityByFilterResponse,
      ecomV1Category_universal_d_BulkDeleteCategoriesRequest as BulkDeleteCategoriesRequest,
      ecomV1Category_universal_d_BulkDeleteCategoriesResponse as BulkDeleteCategoriesResponse,
      ecomV1Category_universal_d_BulkDeleteCategoriesByFilterRequest as BulkDeleteCategoriesByFilterRequest,
      ecomV1Category_universal_d_BulkDeleteCategoriesByFilterResponse as BulkDeleteCategoriesByFilterResponse,
      ecomV1Category_universal_d_AddItemsToCategoryRequest as AddItemsToCategoryRequest,
      ecomV1Category_universal_d_ItemReference as ItemReference,
      ecomV1Category_universal_d_AddItemsToCategoryResponse as AddItemsToCategoryResponse,
      ecomV1Category_universal_d_BulkItemsToCategoryResult as BulkItemsToCategoryResult,
      ecomV1Category_universal_d_ItemReferenceMetadata as ItemReferenceMetadata,
      ecomV1Category_universal_d_ItemAddedToCategory as ItemAddedToCategory,
      ecomV1Category_universal_d_AddItemToCategoriesRequest as AddItemToCategoriesRequest,
      ecomV1Category_universal_d_AddItemToCategoriesResponse as AddItemToCategoriesResponse,
      ecomV1Category_universal_d_BulkItemToCategoriesResult as BulkItemToCategoriesResult,
      ecomV1Category_universal_d_RemoveItemsFromCategoryRequest as RemoveItemsFromCategoryRequest,
      ecomV1Category_universal_d_RemoveItemsFromCategoryResponse as RemoveItemsFromCategoryResponse,
      ecomV1Category_universal_d_ItemRemovedFromCategory as ItemRemovedFromCategory,
      ecomV1Category_universal_d_RemoveItemFromCategoriesRequest as RemoveItemFromCategoriesRequest,
      ecomV1Category_universal_d_RemoveItemFromCategoriesResponse as RemoveItemFromCategoriesResponse,
      ecomV1Category_universal_d_ListItemsInCategoryRequest as ListItemsInCategoryRequest,
      ecomV1Category_universal_d_ListItemsInCategoryResponse as ListItemsInCategoryResponse,
      ecomV1Category_universal_d_MoveItemInCategoryRequest as MoveItemInCategoryRequest,
      ecomV1Category_universal_d_Position as Position,
      ecomV1Category_universal_d_MoveItemInCategoryResponse as MoveItemInCategoryResponse,
      ecomV1Category_universal_d_PutCategoriesTreeRequest as PutCategoriesTreeRequest,
      ecomV1Category_universal_d_PutCategoriesTreeResponse as PutCategoriesTreeResponse,
      ecomV1Category_universal_d_GetCategoriesTreeRequest as GetCategoriesTreeRequest,
      ecomV1Category_universal_d_GetCategoriesTreeResponse as GetCategoriesTreeResponse,
      ecomV1Category_universal_d_CategoryTreeNode as CategoryTreeNode,
      ecomV1Category_universal_d_DomainEvent as DomainEvent,
      ecomV1Category_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      ecomV1Category_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      ecomV1Category_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      ecomV1Category_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      ecomV1Category_universal_d_ActionEvent as ActionEvent,
      ecomV1Category_universal_d_ExtendedFieldsUpdatedEvent as ExtendedFieldsUpdatedEvent,
      ecomV1Category_universal_d_Empty as Empty,
      ecomV1Category_universal_d_createCategory as createCategory,
      ecomV1Category_universal_d_getCategory as getCategory,
      ecomV1Category_universal_d_updateCategory as updateCategory,
      ecomV1Category_universal_d_UpdateCategory as UpdateCategory,
      ecomV1Category_universal_d_UpdateCategoryOptions as UpdateCategoryOptions,
      ecomV1Category_universal_d_deleteCategory as deleteCategory,
      ecomV1Category_universal_d_queryCategories as queryCategories,
      ecomV1Category_universal_d_CategoriesQueryResult as CategoriesQueryResult,
      ecomV1Category_universal_d_CategoriesQueryBuilder as CategoriesQueryBuilder,
      ecomV1Category_universal_d_placeCategoryInParentCategory as placeCategoryInParentCategory,
      ecomV1Category_universal_d_PlaceCategoryInParentCategoryOptions as PlaceCategoryInParentCategoryOptions,
      ecomV1Category_universal_d_bulkCreateCategories as bulkCreateCategories,
      ecomV1Category_universal_d_BulkCreateCategoriesOptions as BulkCreateCategoriesOptions,
      ecomV1Category_universal_d_bulkSetVisibility as bulkSetVisibility,
      ecomV1Category_universal_d_BulkSetVisibilityOptions as BulkSetVisibilityOptions,
      ecomV1Category_universal_d_bulkSetVisibilityByFilter as bulkSetVisibilityByFilter,
      ecomV1Category_universal_d_bulkDeleteCategories as bulkDeleteCategories,
      ecomV1Category_universal_d_bulkDeleteCategoriesByFilter as bulkDeleteCategoriesByFilter,
      ecomV1Category_universal_d_addItemsToCategory as addItemsToCategory,
      ecomV1Category_universal_d_AddItemsToCategoryOptions as AddItemsToCategoryOptions,
      ecomV1Category_universal_d_addItemToCategories as addItemToCategories,
      ecomV1Category_universal_d_AddItemToCategoriesOptions as AddItemToCategoriesOptions,
      ecomV1Category_universal_d_removeItemsFromCategory as removeItemsFromCategory,
      ecomV1Category_universal_d_RemoveItemsFromCategoryOptions as RemoveItemsFromCategoryOptions,
      ecomV1Category_universal_d_removeItemFromCategories as removeItemFromCategories,
      ecomV1Category_universal_d_RemoveItemFromCategoriesOptions as RemoveItemFromCategoriesOptions,
      ecomV1Category_universal_d_listItemsInCategory as listItemsInCategory,
      ecomV1Category_universal_d_ListItemsInCategoryOptions as ListItemsInCategoryOptions,
      ecomV1Category_universal_d_moveItemInCategory as moveItemInCategory,
      ecomV1Category_universal_d_MoveItemInCategoryOptions as MoveItemInCategoryOptions,
      ecomV1Category_universal_d_putCategoriesTree as putCategoriesTree,
      ecomV1Category_universal_d_getCategoriesTree as getCategoriesTree,
    };
  }
  
  export { ecomV1Category_universal_d as category };
}
