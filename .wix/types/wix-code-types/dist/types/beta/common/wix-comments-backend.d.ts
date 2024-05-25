declare module "wix-comments-backend" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /** Comment definition */
  interface Comment {
      /**
       * Comment ID
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the time this Comment was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Comment was last updated
       * @readonly
       */
      _updatedDate?: Date;
      /** Owning vertical identifier */
      appId?: string | null;
      /** Verticals context */
      contextId?: string | null;
      /** Vertical context type. A single application can have multiple contexts, and context_type can be used to distinguish in what context comments are being used. Reserved for internal use. */
      contextType?: string | null;
      /** Context resource */
      resourceId?: string | null;
      /** Published comment content */
      content?: CommentContent;
      /** Unpublished comment content */
      draftContent?: CommentContent;
      /**
       * Comment's author
       * @readonly
       */
      author?: CommentAuthor;
      /** Reference to parent comment */
      parentComment?: ParentComment;
      /**
       * Materialized path of comments hierarchy. List of all current comment’s parent ids
       * @internal
       * @readonly
       */
      parentIdsInThread?: string[];
      /**
       * How many published replies comment has
       * @readonly
       */
      replyCount?: number;
      /**
       * Votes summary
       * @readonly
       */
      voteSummary?: VoteSummary;
      /**
       * Comment status
       * @readonly
       */
      status?: Status$1;
      /**
       * Comment rating value
       * @readonly
       */
      rating?: number | null;
      /**
       * Comment reaction summary
       * @readonly
       */
      reactionSummary?: CommentReactionSummary;
      /** Indicates if comment is marked */
      marked?: boolean;
  }
  /** Comment content */
  interface CommentContent {
      /** @internal */
      draftJs?: string | null;
      /** @internal */
      plainText?: string | null;
      richContent?: RichContent;
      mentions?: Mention[];
      /** @internal */
      effects?: Record<string, string>;
      attachments?: Attachment[];
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
      type?: Type$1;
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
  enum Type$1 {
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
  interface Permissions$1 {
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
  interface Settings {
      /** Permissions settings for voting. */
      permissions?: Permissions$1;
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
      settings?: Settings;
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
  interface Mention extends MentionIdentityOneOf {
      userId?: string | null;
      memberId?: string | null;
      visitorId?: string | null;
      groupId?: string | null;
  }
  /** @oneof */
  interface MentionIdentityOneOf {
      userId?: string | null;
      memberId?: string | null;
      visitorId?: string | null;
      groupId?: string | null;
  }
  interface Attachment extends AttachmentMediaOneOf {
      /** Image */
      image?: string;
      /** Video */
      video?: string;
      /** Audio */
      audio?: string;
      /** Document */
      document?: string;
      /** Mime type of attachment. */
      mimeType?: string | null;
  }
  /** @oneof */
  interface AttachmentMediaOneOf {
      /** Image */
      image?: string;
      /** Video */
      video?: string;
      /** Audio */
      audio?: string;
      /** Document */
      document?: string;
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
      /**
       * Video quality. For example: 480p, 720p.
       * @readonly
       */
      quality?: string | null;
      /**
       * Video filename.
       * @readonly
       */
      filename?: string | null;
      /**
       * Video duration in seconds.
       * @readonly
       */
      durationInSeconds?: number | null;
      /**
       * When true, this is a protected asset, and calling the URL will return a 403 error.
       * In order to access private assets, make a request to:
       * `GenerateFileDownloadUrl` with the WixMedia id and specify the asset_key in the request
       * @readonly
       */
      private?: boolean | null;
      /**
       * Key to identify the video resolution's relationship to the original media in WixMedia.
       * Can be used to request a download for the specific video resolution.
       * For example: 480p.mp4, 720p.mp4, 1080p.mp4, trailer-720p.mp4, clip-720p.mp4
       * @readonly
       */
      assetKey?: string | null;
  }
  interface CommentAuthor extends CommentAuthorIdentityOneOf {
      userId?: string | null;
      memberId?: string | null;
      visitorId?: string | null;
  }
  /** @oneof */
  interface CommentAuthorIdentityOneOf {
      userId?: string | null;
      memberId?: string | null;
      visitorId?: string | null;
  }
  interface ParentComment {
      _id?: string | null;
      /** @readonly */
      author?: CommentAuthor;
  }
  interface VoteSummary {
      netVoteCount?: number;
      upvoteCount?: number;
      downvoteCount?: number;
  }
  enum Status$1 {
      UNKNOWN = "UNKNOWN",
      PUBLISHED = "PUBLISHED",
      DELETED = "DELETED",
      PENDING = "PENDING",
      HIDDEN = "HIDDEN"
  }
  interface CommentReactionSummary {
      total?: number;
      reactionCodeCount?: Record<string, number>;
  }
  interface UpdateInternalDocumentsEvent extends UpdateInternalDocumentsEventOperationOneOf {
      /** insert/update documents */
      update?: InternalDocumentUpdateOperation;
      /** delete by document ids */
      deleteByIds?: DeleteByIdsOperation;
      /** delete documents matching filter */
      deleteByFilter?: DeleteByFilterOperation;
      /** update internal documents matching filter */
      updateByFilter?: InternalDocumentUpdateByFilterOperation;
      /** update only existing documents */
      updateExisting?: InternalUpdateExistingOperation;
      /** insert/update documents with versioning */
      versionedUpdate?: VersionedDocumentUpdateOperation;
      /** delete by document ids with versioning */
      versionedDeleteByIds?: VersionedDeleteByIdsOperation;
      /** type of the documents */
      documentType?: string;
      /** language of the documents (mandatory) */
      language?: string | null;
      /** one or more search documents */
      addDocuments?: InternalDocument[];
      /** one or more ids of indexed documents to be removed. Removal will happen before addition (if both provided) */
      removeDocumentIds?: string[];
      /** id to pass to processing notification */
      correlationId?: string | null;
  }
  /** @oneof */
  interface UpdateInternalDocumentsEventOperationOneOf {
      /** insert/update documents */
      update?: InternalDocumentUpdateOperation;
      /** delete by document ids */
      deleteByIds?: DeleteByIdsOperation;
      /** delete documents matching filter */
      deleteByFilter?: DeleteByFilterOperation;
      /** update internal documents matching filter */
      updateByFilter?: InternalDocumentUpdateByFilterOperation;
      /** update only existing documents */
      updateExisting?: InternalUpdateExistingOperation;
      /** insert/update documents with versioning */
      versionedUpdate?: VersionedDocumentUpdateOperation;
      /** delete by document ids with versioning */
      versionedDeleteByIds?: VersionedDeleteByIdsOperation;
  }
  interface InternalDocument {
      /** document with mandatory fields (id) and with fields specific to the type of the document */
      document?: Record<string, any> | null;
  }
  interface InternalDocumentUpdateOperation {
      /** documents to index or update */
      documents?: InternalDocument[];
  }
  interface DeleteByIdsOperation {
      /** ids of the documents to delete */
      documentIds?: string[];
  }
  interface DeleteByFilterOperation {
      /** documents matching this filter wil be deleted. only filterable documents defined in document_type can be used for filtering */
      filter?: Record<string, any> | null;
  }
  interface InternalDocumentUpdateByFilterOperation {
      /** documents matching this filter will be updated */
      filter?: Record<string, any> | null;
      /** partial document to apply */
      document?: InternalDocument;
  }
  interface InternalUpdateExistingOperation {
      /** documents to update */
      documents?: InternalDocument[];
  }
  interface VersionedDocumentUpdateOperation {
      /** documents to create or overwrite */
      documents?: InternalDocument[];
      /** versioning mode to use instead of default */
      versioningMode?: VersioningMode;
  }
  enum VersioningMode {
      /** use default versioning mode agreed with search team */
      DEFAULT = "DEFAULT",
      /** execute only if version is greater than existing */
      GREATER_THAN = "GREATER_THAN",
      /** execute only if version is greater or equal to existing */
      GREATER_OR_EQUAL = "GREATER_OR_EQUAL"
  }
  interface VersionedDeleteByIdsOperation {
      /** ids with version of the documents to delete */
      documentIds?: VersionedDocumentId[];
  }
  interface VersionedDocumentId {
      /** document id */
      documentId?: string;
      /** document version */
      version?: string;
      /** versioning mode to use instead of default */
      versioningMode?: VersioningMode;
  }
  interface CreateCommentRequest {
      /** Comment to create */
      comment?: Comment;
  }
  interface CreateCommentResponse {
      /** The created Comment */
      comment?: Comment;
  }
  interface GetCommentRequest {
      /** Id of the Comment to retrieve */
      commentId: string;
  }
  interface GetCommentResponse {
      /** The retrieved Comment */
      comment?: Comment;
  }
  interface UpdateCommentRequest {
      /** The updated Comment */
      comment?: Comment;
  }
  interface UpdateCommentResponse {
      /** The updated Comment */
      comment?: Comment;
  }
  interface DeleteCommentRequest {
      /** Id of the Comment to delete */
      commentId: string;
      /**
       * The revision of the Comment
       * @internal
       */
      revision?: string | null;
      /**
       * Indicates if child comments must be deleted as well.
       * Will be deprecated and be replaced by BulkCommentDelete
       */
      cascade?: boolean | null;
  }
  interface DeleteCommentResponse {
  }
  interface CommentDeleted {
      comment?: Comment;
  }
  interface ModerateDraftContentRequest {
      /** Id of the Comment to modify */
      commentId: string;
      /** The revision of the Comment */
      revision: string | null;
      /** Action to do regarding draft content */
      draftContentAction?: Action;
  }
  enum Action {
      UNKNOWN = "UNKNOWN",
      /** Approves draft content */
      APPROVE = "APPROVE",
      /** Rejects draft content */
      REJECT = "REJECT"
  }
  interface ModerateDraftContentResponse {
      /** Updated comment */
      comment?: Comment;
  }
  interface CommentPublished {
      comment?: Comment;
      firstPublish?: boolean;
  }
  interface CommentHidden {
      comment?: Comment;
  }
  interface QueryCommentsRequest {
      appId: string;
      /** WQL expression */
      query: CursorQuery$1;
  }
  interface CursorQuery$1 extends CursorQueryPagingMethodOneOf$1 {
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
  interface CursorQueryPagingMethodOneOf$1 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$2;
  }
  interface Sorting$2 {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
      order?: SortOrder$2;
  }
  enum SortOrder$2 {
      ASC = "ASC",
      DESC = "DESC"
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
  interface QueryCommentsResponse {
      /** The retrieved Comments */
      comments?: Comment[];
      /** Paging metadata */
      pagingMetadata?: CursorPagingMetadata$2;
  }
  interface CursorPagingMetadata$2 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      cursors?: Cursors$2;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       */
      hasNext?: boolean | null;
  }
  interface Cursors$2 {
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  interface MarkCommentRequest {
      /** Id of the Comment to mark */
      commentId: string;
      /**
       * The revision of the Comment
       * @internal
       */
      revision?: string | null;
  }
  interface MarkCommentResponse {
      /** The marked Comment */
      comment?: Comment;
  }
  interface CommentMarked {
      comment?: Comment;
  }
  interface UnmarkCommentRequest {
      /** Id of the Comment to mark */
      commentId: string;
      /**
       * The revision of the Comment
       * @internal
       */
      revision?: string | null;
  }
  interface UnmarkCommentResponse {
      /** The unmarked Comment */
      comment?: Comment;
  }
  interface CommentUnmarked {
      comment?: Comment;
  }
  interface HideCommentRequest {
      /** Id of the Comment to hide */
      commentId: string;
  }
  interface HideCommentResponse {
      /** Hidden comment */
      comment?: Comment;
  }
  interface PublishCommentRequest {
      /** Id of the Comment to publish */
      commentId: string;
  }
  interface PublishCommentResponse {
      /** Published comment */
      comment?: Comment;
  }
  interface CountCommentsRequest {
      appId?: string;
      filter?: Record<string, any> | null;
  }
  interface CountCommentsResponse {
      count?: number;
  }
  interface ListCommentsByResourceRequest {
      /** App Id */
      appId: string;
      /** Context Id */
      contextId: string;
      /** Context Type. Reserved for internal use. */
      contextType?: string;
      /** Resource Id */
      resourceId: string;
      /** Comment sorting. Is ignored if cursorPaging.cursor is defined */
      commentSort?: CommentSort;
      /** Reply sorting. Is ignored if cursorPaging.cursor is defined */
      replySort?: ReplySort;
      cursorPaging?: ListCommentsByResourceCursorPaging;
  }
  interface CommentSort {
      /** Sorting */
      order?: Order;
      /**
       * If set to `true`, marked comments are included in the comments list but maintain their original order rather
       * than being moved to the top.
       * Defaults to `false`, which means marked comments, will be prioritized and listed first.
       */
      keepMarkedInOriginalOrder?: boolean;
  }
  enum Order {
      UNKNOWN_ORDER = "UNKNOWN_ORDER",
      OLDEST_FIRST = "OLDEST_FIRST",
      NEWEST_FIRST = "NEWEST_FIRST",
      REACTION_COUNT = "REACTION_COUNT",
      NET_VOTE_COUNT = "NET_VOTE_COUNT",
      RATING = "RATING"
  }
  interface ReplySort {
      /** Sorting */
      order?: ReplySortOrder;
      /**
       * If set to `true`, marked replies are included in the comments list but maintain their original order rather
       * than being moved to the top.
       * Defaults to `false`, which means marked replies, will be prioritized and listed first.
       */
      keepMarkedInOriginalOrder?: boolean;
  }
  enum ReplySortOrder {
      UNKNOWN_ORDER = "UNKNOWN_ORDER",
      OLDEST_FIRST = "OLDEST_FIRST",
      NEWEST_FIRST = "NEWEST_FIRST",
      REACTION_COUNT = "REACTION_COUNT"
  }
  interface ListCommentsByResourceCursorPaging {
      cursor?: string | null;
      limit?: number | null;
      /** Only taken into account if listing root comments */
      repliesLimit?: number | null;
  }
  interface ListCommentsByResourceResponse {
      comments?: Comment[];
      pagingMetadata?: CursorPagingMetadata$2;
      commentReplies?: Record<string, RepliesListResponse>;
  }
  interface RepliesListResponse {
      replies?: Comment[];
      pagingMetadata?: CursorPagingMetadata$2;
  }
  interface GetCommentThreadRequest {
      /** App Id */
      appId?: string;
      /** Comment Id */
      commentId: string;
      /** Comment sorting. */
      commentSort?: CommentSort;
      /** Reply sorting */
      replySort?: ReplySort;
  }
  interface GetCommentThreadResponse {
      comments?: Comment[];
      pagingMetadata?: CursorPagingMetadata$2;
      commentReplies?: Record<string, RepliesListResponse>;
  }
  interface BulkPublishCommentRequest {
      /** Owning vertical identifier */
      appId: string;
      /** Comments to publish */
      filter: Record<string, any> | null;
  }
  interface BulkPublishCommentResponse {
      /** Reference to async job */
      jobId?: string;
  }
  interface BulkHideCommentRequest {
      /** Owning vertical identifier */
      appId: string;
      /** Comments to hide */
      filter: Record<string, any> | null;
  }
  interface BulkHideCommentResponse {
      /** Reference to async job */
      jobId?: string;
  }
  interface BulkDeleteCommentRequest {
      /** Owning vertical identifier */
      appId: string;
      /** Comments to delete */
      filter: Record<string, any> | null;
  }
  interface BulkDeleteCommentResponse {
      /** Reference to async job */
      jobId?: string;
  }
  /**
   * Creates a new Comment.
   * Provided content might be stored to draftContent field depending on moderation settings
   * @internal
   * @documentationMaturity preview
   * @requiredField options.comment.appId
   * @requiredField options.comment.content
   * @requiredField options.comment.contextId
   * @requiredField options.comment.resourceId
   */
  function createComment(options?: CreateCommentOptions): Promise<CreateCommentResponse>;
  interface CreateCommentOptions {
      /** Comment to create */
      comment?: Comment;
  }
  /**
   * Get a Comment by id
   * @param commentId - Id of the Comment to retrieve
   * @internal
   * @documentationMaturity preview
   * @requiredField commentId
   */
  function getComment(commentId: string): Promise<GetCommentResponse>;
  /**
   * Update a Comment
   * Provided content might be stored to draftContent field depending on moderation settings
   * Pass the latest `revision` for a successful update
   * @param _id - Comment ID
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField options.comment.revision
   */
  function updateComment(_id: string | null, options?: UpdateCommentOptions): Promise<UpdateCommentResponse>;
  interface UpdateCommentOptions {
      comment: {
          /**
           * Comment ID
           * @readonly
           */
          _id?: string | null;
          /**
           * Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision
           * @readonly
           */
          revision?: string | null;
          /**
           * Represents the time this Comment was created
           * @readonly
           */
          _createdDate?: Date;
          /**
           * Represents the time this Comment was last updated
           * @readonly
           */
          _updatedDate?: Date;
          /** Owning vertical identifier */
          appId?: string | null;
          /** Verticals context */
          contextId?: string | null;
          /** Vertical context type. A single application can have multiple contexts, and context_type can be used to distinguish in what context comments are being used. Reserved for internal use. */
          contextType?: string | null;
          /** Context resource */
          resourceId?: string | null;
          /** Published comment content */
          content?: CommentContent;
          /** Unpublished comment content */
          draftContent?: CommentContent;
          /**
           * Comment's author
           * @readonly
           */
          author?: CommentAuthor;
          /** Reference to parent comment */
          parentComment?: ParentComment;
          /**
           * Materialized path of comments hierarchy. List of all current comment’s parent ids
           * @internal
           * @readonly
           */
          parentIdsInThread?: string[];
          /**
           * How many published replies comment has
           * @readonly
           */
          replyCount?: number;
          /**
           * Votes summary
           * @readonly
           */
          voteSummary?: VoteSummary;
          /**
           * Comment status
           * @readonly
           */
          status?: Status$1;
          /**
           * Comment rating value
           * @readonly
           */
          rating?: number | null;
          /**
           * Comment reaction summary
           * @readonly
           */
          reactionSummary?: CommentReactionSummary;
          /** Indicates if comment is marked */
          marked?: boolean;
      };
  }
  /**
   * Delete a Comment
   * @param commentId - Id of the Comment to delete
   * @internal
   * @documentationMaturity preview
   * @requiredField commentId
   */
  function deleteComment(commentId: string, options?: DeleteCommentOptions): Promise<void>;
  interface DeleteCommentOptions {
      /**
       * The revision of the Comment
       * @internal
       */
      revision?: string | null;
      /**
       * Indicates if child comments must be deleted as well.
       * Will be deprecated and be replaced by BulkCommentDelete
       */
      cascade?: boolean | null;
  }
  /**
   * Moderates the draft content of a comment.
   *
   * - `APPROVE`: Moves `draftContent` to `content` and updates the comment `status` to `PUBLISHED`.
   * - `REJECT`: Clears `draftContent` if comment `status` is `PUBLISHED` or, if comment `status` is `PENDING` it will keep `draftContent` the same and change `status` to `HIDDEN`.
   * @param commentId - Id of the Comment to modify
   * @param revision - The revision of the Comment
   * @internal
   * @documentationMaturity preview
   * @requiredField commentId
   * @requiredField revision
   */
  function moderateDraftContent(commentId: string, revision: string | null, options?: ModerateDraftContentOptions): Promise<ModerateDraftContentResponse>;
  interface ModerateDraftContentOptions {
      /** Action to do regarding draft content */
      draftContentAction?: Action;
  }
  /**
   * Query Comments using [WQL - Wix Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language)
   * @internal
   * @documentationMaturity preview
   * @requiredField appId
   * @requiredField options
   * @requiredField options.query
   */
  function queryComments(appId: string, options: QueryCommentsOptions): Promise<QueryCommentsResponse>;
  interface QueryCommentsOptions {
      /** WQL expression */
      query: CursorQuery$1;
  }
  /**
   * Mark a Comment
   * @param commentId - Id of the Comment to mark
   * @internal
   * @documentationMaturity preview
   * @requiredField commentId
   */
  function markComment(commentId: string, options?: MarkCommentOptions): Promise<MarkCommentResponse>;
  interface MarkCommentOptions {
      /**
       * The revision of the Comment
       * @internal
       */
      revision?: string | null;
  }
  /**
   * Unmark a Comment
   * @param commentId - Id of the Comment to mark
   * @internal
   * @documentationMaturity preview
   * @requiredField commentId
   */
  function unmarkComment(commentId: string, options?: UnmarkCommentOptions): Promise<UnmarkCommentResponse>;
  interface UnmarkCommentOptions {
      /**
       * The revision of the Comment
       * @internal
       */
      revision?: string | null;
  }
  /**
   * Hide a Comment
   * @param commentId - Id of the Comment to hide
   * @internal
   * @documentationMaturity preview
   * @requiredField commentId
   */
  function hideComment(commentId: string): Promise<HideCommentResponse>;
  /**
   * Publish a Comment
   * @param commentId - Id of the Comment to publish
   * @internal
   * @documentationMaturity preview
   * @requiredField commentId
   */
  function publishComment(commentId: string): Promise<PublishCommentResponse>;
  /**
   * Counts comments that matches given filter
   * @internal
   * @documentationMaturity preview
   */
  function countComments(options?: CountCommentsOptions): Promise<CountCommentsResponse>;
  interface CountCommentsOptions {
      appId?: string;
      filter?: Record<string, any> | null;
  }
  /**
   * Lists published comments and replies
   *
   * API designed to load comments and replies. It return only published comments and replies.
   * Hidden or Deleted comment or reply are not returned unless they have more than one published reply.
   * @param appId - App Id
   * @internal
   * @documentationMaturity preview
   * @requiredField appId
   * @requiredField options
   * @requiredField options.contextId
   * @requiredField options.resourceId
   */
  function listCommentsByResource(appId: string, options: ListCommentsByResourceOptions): Promise<ListCommentsByResourceResponse>;
  interface ListCommentsByResourceOptions {
      /** Context Id */
      contextId: string;
      /** Context Type. Reserved for internal use. */
      contextType?: string;
      /** Resource Id */
      resourceId: string;
      /** Comment sorting. Is ignored if cursorPaging.cursor is defined */
      commentSort?: CommentSort;
      /** Reply sorting. Is ignored if cursorPaging.cursor is defined */
      replySort?: ReplySort;
      cursorPaging?: ListCommentsByResourceCursorPaging;
  }
  /**
   * Return thread of a comment or reply
   *
   * If comment thread requested, the API will return a single comment along with cursors that can be utilized with the
   * ListCommentsByResource API to load previous and subsequent comment pages.
   *
   * In case reply thread requested, the API will return the root parent comment, the reply itself, and cursors that
   * can be utilized with the ListCommentsByResource API to load previous and subsequent pages of comments or replies.
   * @param commentId - Comment Id
   * @internal
   * @documentationMaturity preview
   * @requiredField commentId
   */
  function getCommentThread(commentId: string, options?: GetCommentThreadOptions): Promise<GetCommentThreadResponse>;
  interface GetCommentThreadOptions {
      /** App Id */
      appId?: string;
      /** Comment sorting. */
      commentSort?: CommentSort;
      /** Reply sorting */
      replySort?: ReplySort;
  }
  /**
   * Publishes multiple comments
   * @param appId - Owning vertical identifier
   * @internal
   * @documentationMaturity preview
   * @requiredField appId
   * @requiredField options
   * @requiredField options.filter
   */
  function bulkPublishComment(appId: string, options: BulkPublishCommentOptions): Promise<BulkPublishCommentResponse>;
  interface BulkPublishCommentOptions {
      /** Comments to publish */
      filter: Record<string, any> | null;
  }
  /**
   * Hides multiple comments
   * @param appId - Owning vertical identifier
   * @internal
   * @documentationMaturity preview
   * @requiredField appId
   * @requiredField options
   * @requiredField options.filter
   */
  function bulkHideComment(appId: string, options: BulkHideCommentOptions): Promise<BulkHideCommentResponse>;
  interface BulkHideCommentOptions {
      /** Comments to hide */
      filter: Record<string, any> | null;
  }
  /**
   * Deletes multiple comments
   * @param appId - Owning vertical identifier
   * @internal
   * @documentationMaturity preview
   * @requiredField appId
   * @requiredField options
   * @requiredField options.filter
   */
  function bulkDeleteComment(appId: string, options: BulkDeleteCommentOptions): Promise<BulkDeleteCommentResponse>;
  interface BulkDeleteCommentOptions {
      /** Comments to delete */
      filter: Record<string, any> | null;
  }
  
  const commentsV2Comment_universal_d___debug: typeof __debug;
  type commentsV2Comment_universal_d_Comment = Comment;
  type commentsV2Comment_universal_d_CommentContent = CommentContent;
  type commentsV2Comment_universal_d_RichContent = RichContent;
  type commentsV2Comment_universal_d_Node = Node;
  type commentsV2Comment_universal_d_NodeDataOneOf = NodeDataOneOf;
  type commentsV2Comment_universal_d_NodeType = NodeType;
  const commentsV2Comment_universal_d_NodeType: typeof NodeType;
  type commentsV2Comment_universal_d_NodeStyle = NodeStyle;
  type commentsV2Comment_universal_d_ButtonData = ButtonData;
  type commentsV2Comment_universal_d_Border = Border;
  type commentsV2Comment_universal_d_Colors = Colors;
  type commentsV2Comment_universal_d_PluginContainerData = PluginContainerData;
  type commentsV2Comment_universal_d_WidthType = WidthType;
  const commentsV2Comment_universal_d_WidthType: typeof WidthType;
  type commentsV2Comment_universal_d_PluginContainerDataWidth = PluginContainerDataWidth;
  type commentsV2Comment_universal_d_PluginContainerDataWidthDataOneOf = PluginContainerDataWidthDataOneOf;
  type commentsV2Comment_universal_d_PluginContainerDataAlignment = PluginContainerDataAlignment;
  const commentsV2Comment_universal_d_PluginContainerDataAlignment: typeof PluginContainerDataAlignment;
  type commentsV2Comment_universal_d_Spoiler = Spoiler;
  type commentsV2Comment_universal_d_Height = Height;
  type commentsV2Comment_universal_d_Styles = Styles;
  type commentsV2Comment_universal_d_Link = Link;
  type commentsV2Comment_universal_d_LinkDataOneOf = LinkDataOneOf;
  type commentsV2Comment_universal_d_Target = Target;
  const commentsV2Comment_universal_d_Target: typeof Target;
  type commentsV2Comment_universal_d_Rel = Rel;
  type commentsV2Comment_universal_d_CodeBlockData = CodeBlockData;
  type commentsV2Comment_universal_d_TextStyle = TextStyle;
  type commentsV2Comment_universal_d_TextAlignment = TextAlignment;
  const commentsV2Comment_universal_d_TextAlignment: typeof TextAlignment;
  type commentsV2Comment_universal_d_DividerData = DividerData;
  type commentsV2Comment_universal_d_LineStyle = LineStyle;
  const commentsV2Comment_universal_d_LineStyle: typeof LineStyle;
  type commentsV2Comment_universal_d_Width = Width;
  const commentsV2Comment_universal_d_Width: typeof Width;
  type commentsV2Comment_universal_d_Alignment = Alignment;
  const commentsV2Comment_universal_d_Alignment: typeof Alignment;
  type commentsV2Comment_universal_d_FileData = FileData;
  type commentsV2Comment_universal_d_ViewMode = ViewMode;
  const commentsV2Comment_universal_d_ViewMode: typeof ViewMode;
  type commentsV2Comment_universal_d_FileSource = FileSource;
  type commentsV2Comment_universal_d_FileSourceDataOneOf = FileSourceDataOneOf;
  type commentsV2Comment_universal_d_PDFSettings = PDFSettings;
  type commentsV2Comment_universal_d_GalleryData = GalleryData;
  type commentsV2Comment_universal_d_Media = Media;
  type commentsV2Comment_universal_d_Image = Image;
  type commentsV2Comment_universal_d_Video = Video;
  type commentsV2Comment_universal_d_Item = Item;
  type commentsV2Comment_universal_d_ItemDataOneOf = ItemDataOneOf;
  type commentsV2Comment_universal_d_GalleryOptions = GalleryOptions;
  type commentsV2Comment_universal_d_LayoutType = LayoutType;
  const commentsV2Comment_universal_d_LayoutType: typeof LayoutType;
  type commentsV2Comment_universal_d_Orientation = Orientation;
  const commentsV2Comment_universal_d_Orientation: typeof Orientation;
  type commentsV2Comment_universal_d_Crop = Crop;
  const commentsV2Comment_universal_d_Crop: typeof Crop;
  type commentsV2Comment_universal_d_ThumbnailsAlignment = ThumbnailsAlignment;
  const commentsV2Comment_universal_d_ThumbnailsAlignment: typeof ThumbnailsAlignment;
  type commentsV2Comment_universal_d_Layout = Layout;
  type commentsV2Comment_universal_d_ItemStyle = ItemStyle;
  type commentsV2Comment_universal_d_Thumbnails = Thumbnails;
  type commentsV2Comment_universal_d_GIFData = GIFData;
  type commentsV2Comment_universal_d_GIF = GIF;
  type commentsV2Comment_universal_d_HeadingData = HeadingData;
  type commentsV2Comment_universal_d_HTMLData = HTMLData;
  type commentsV2Comment_universal_d_HTMLDataDataOneOf = HTMLDataDataOneOf;
  type commentsV2Comment_universal_d_Source = Source;
  const commentsV2Comment_universal_d_Source: typeof Source;
  type commentsV2Comment_universal_d_ImageData = ImageData;
  type commentsV2Comment_universal_d_LinkPreviewData = LinkPreviewData;
  type commentsV2Comment_universal_d_MapData = MapData;
  type commentsV2Comment_universal_d_MapSettings = MapSettings;
  type commentsV2Comment_universal_d_MapType = MapType;
  const commentsV2Comment_universal_d_MapType: typeof MapType;
  type commentsV2Comment_universal_d_ParagraphData = ParagraphData;
  type commentsV2Comment_universal_d_PollData = PollData;
  type commentsV2Comment_universal_d_ViewRole = ViewRole;
  const commentsV2Comment_universal_d_ViewRole: typeof ViewRole;
  type commentsV2Comment_universal_d_VoteRole = VoteRole;
  const commentsV2Comment_universal_d_VoteRole: typeof VoteRole;
  type commentsV2Comment_universal_d_Option = Option;
  type commentsV2Comment_universal_d_Settings = Settings;
  type commentsV2Comment_universal_d_PollLayoutType = PollLayoutType;
  const commentsV2Comment_universal_d_PollLayoutType: typeof PollLayoutType;
  type commentsV2Comment_universal_d_PollLayoutDirection = PollLayoutDirection;
  const commentsV2Comment_universal_d_PollLayoutDirection: typeof PollLayoutDirection;
  type commentsV2Comment_universal_d_PollLayout = PollLayout;
  type commentsV2Comment_universal_d_OptionLayout = OptionLayout;
  type commentsV2Comment_universal_d_BackgroundType = BackgroundType;
  const commentsV2Comment_universal_d_BackgroundType: typeof BackgroundType;
  type commentsV2Comment_universal_d_Gradient = Gradient;
  type commentsV2Comment_universal_d_Background = Background;
  type commentsV2Comment_universal_d_BackgroundBackgroundOneOf = BackgroundBackgroundOneOf;
  type commentsV2Comment_universal_d_PollDesign = PollDesign;
  type commentsV2Comment_universal_d_OptionDesign = OptionDesign;
  type commentsV2Comment_universal_d_Poll = Poll;
  type commentsV2Comment_universal_d_PollDataLayout = PollDataLayout;
  type commentsV2Comment_universal_d_Design = Design;
  type commentsV2Comment_universal_d_TextData = TextData;
  type commentsV2Comment_universal_d_Decoration = Decoration;
  type commentsV2Comment_universal_d_DecorationDataOneOf = DecorationDataOneOf;
  type commentsV2Comment_universal_d_DecorationType = DecorationType;
  const commentsV2Comment_universal_d_DecorationType: typeof DecorationType;
  type commentsV2Comment_universal_d_AnchorData = AnchorData;
  type commentsV2Comment_universal_d_ColorData = ColorData;
  type commentsV2Comment_universal_d_LinkData = LinkData;
  type commentsV2Comment_universal_d_MentionData = MentionData;
  type commentsV2Comment_universal_d_FontSizeData = FontSizeData;
  type commentsV2Comment_universal_d_FontType = FontType;
  const commentsV2Comment_universal_d_FontType: typeof FontType;
  type commentsV2Comment_universal_d_AppEmbedData = AppEmbedData;
  type commentsV2Comment_universal_d_AppEmbedDataAppDataOneOf = AppEmbedDataAppDataOneOf;
  type commentsV2Comment_universal_d_AppType = AppType;
  const commentsV2Comment_universal_d_AppType: typeof AppType;
  type commentsV2Comment_universal_d_BookingData = BookingData;
  type commentsV2Comment_universal_d_EventData = EventData;
  type commentsV2Comment_universal_d_VideoData = VideoData;
  type commentsV2Comment_universal_d_PlaybackOptions = PlaybackOptions;
  type commentsV2Comment_universal_d_EmbedData = EmbedData;
  type commentsV2Comment_universal_d_Oembed = Oembed;
  type commentsV2Comment_universal_d_CollapsibleListData = CollapsibleListData;
  type commentsV2Comment_universal_d_InitialExpandedItems = InitialExpandedItems;
  const commentsV2Comment_universal_d_InitialExpandedItems: typeof InitialExpandedItems;
  type commentsV2Comment_universal_d_Direction = Direction;
  const commentsV2Comment_universal_d_Direction: typeof Direction;
  type commentsV2Comment_universal_d_TableData = TableData;
  type commentsV2Comment_universal_d_Dimensions = Dimensions;
  type commentsV2Comment_universal_d_TableCellData = TableCellData;
  type commentsV2Comment_universal_d_VerticalAlignment = VerticalAlignment;
  const commentsV2Comment_universal_d_VerticalAlignment: typeof VerticalAlignment;
  type commentsV2Comment_universal_d_CellStyle = CellStyle;
  type commentsV2Comment_universal_d_BorderColors = BorderColors;
  type commentsV2Comment_universal_d_NullValue = NullValue;
  const commentsV2Comment_universal_d_NullValue: typeof NullValue;
  type commentsV2Comment_universal_d_ListValue = ListValue;
  type commentsV2Comment_universal_d_AudioData = AudioData;
  type commentsV2Comment_universal_d_OrderedListData = OrderedListData;
  type commentsV2Comment_universal_d_BulletedListData = BulletedListData;
  type commentsV2Comment_universal_d_BlockquoteData = BlockquoteData;
  type commentsV2Comment_universal_d_Metadata = Metadata;
  type commentsV2Comment_universal_d_DocumentStyle = DocumentStyle;
  type commentsV2Comment_universal_d_TextNodeStyle = TextNodeStyle;
  type commentsV2Comment_universal_d_Mention = Mention;
  type commentsV2Comment_universal_d_MentionIdentityOneOf = MentionIdentityOneOf;
  type commentsV2Comment_universal_d_Attachment = Attachment;
  type commentsV2Comment_universal_d_AttachmentMediaOneOf = AttachmentMediaOneOf;
  type commentsV2Comment_universal_d_VideoResolution = VideoResolution;
  type commentsV2Comment_universal_d_CommentAuthor = CommentAuthor;
  type commentsV2Comment_universal_d_CommentAuthorIdentityOneOf = CommentAuthorIdentityOneOf;
  type commentsV2Comment_universal_d_ParentComment = ParentComment;
  type commentsV2Comment_universal_d_VoteSummary = VoteSummary;
  type commentsV2Comment_universal_d_CommentReactionSummary = CommentReactionSummary;
  type commentsV2Comment_universal_d_UpdateInternalDocumentsEvent = UpdateInternalDocumentsEvent;
  type commentsV2Comment_universal_d_UpdateInternalDocumentsEventOperationOneOf = UpdateInternalDocumentsEventOperationOneOf;
  type commentsV2Comment_universal_d_InternalDocument = InternalDocument;
  type commentsV2Comment_universal_d_InternalDocumentUpdateOperation = InternalDocumentUpdateOperation;
  type commentsV2Comment_universal_d_DeleteByIdsOperation = DeleteByIdsOperation;
  type commentsV2Comment_universal_d_DeleteByFilterOperation = DeleteByFilterOperation;
  type commentsV2Comment_universal_d_InternalDocumentUpdateByFilterOperation = InternalDocumentUpdateByFilterOperation;
  type commentsV2Comment_universal_d_InternalUpdateExistingOperation = InternalUpdateExistingOperation;
  type commentsV2Comment_universal_d_VersionedDocumentUpdateOperation = VersionedDocumentUpdateOperation;
  type commentsV2Comment_universal_d_VersioningMode = VersioningMode;
  const commentsV2Comment_universal_d_VersioningMode: typeof VersioningMode;
  type commentsV2Comment_universal_d_VersionedDeleteByIdsOperation = VersionedDeleteByIdsOperation;
  type commentsV2Comment_universal_d_VersionedDocumentId = VersionedDocumentId;
  type commentsV2Comment_universal_d_CreateCommentRequest = CreateCommentRequest;
  type commentsV2Comment_universal_d_CreateCommentResponse = CreateCommentResponse;
  type commentsV2Comment_universal_d_GetCommentRequest = GetCommentRequest;
  type commentsV2Comment_universal_d_GetCommentResponse = GetCommentResponse;
  type commentsV2Comment_universal_d_UpdateCommentRequest = UpdateCommentRequest;
  type commentsV2Comment_universal_d_UpdateCommentResponse = UpdateCommentResponse;
  type commentsV2Comment_universal_d_DeleteCommentRequest = DeleteCommentRequest;
  type commentsV2Comment_universal_d_DeleteCommentResponse = DeleteCommentResponse;
  type commentsV2Comment_universal_d_CommentDeleted = CommentDeleted;
  type commentsV2Comment_universal_d_ModerateDraftContentRequest = ModerateDraftContentRequest;
  type commentsV2Comment_universal_d_Action = Action;
  const commentsV2Comment_universal_d_Action: typeof Action;
  type commentsV2Comment_universal_d_ModerateDraftContentResponse = ModerateDraftContentResponse;
  type commentsV2Comment_universal_d_CommentPublished = CommentPublished;
  type commentsV2Comment_universal_d_CommentHidden = CommentHidden;
  type commentsV2Comment_universal_d_QueryCommentsRequest = QueryCommentsRequest;
  type commentsV2Comment_universal_d_QueryCommentsResponse = QueryCommentsResponse;
  type commentsV2Comment_universal_d_MarkCommentRequest = MarkCommentRequest;
  type commentsV2Comment_universal_d_MarkCommentResponse = MarkCommentResponse;
  type commentsV2Comment_universal_d_CommentMarked = CommentMarked;
  type commentsV2Comment_universal_d_UnmarkCommentRequest = UnmarkCommentRequest;
  type commentsV2Comment_universal_d_UnmarkCommentResponse = UnmarkCommentResponse;
  type commentsV2Comment_universal_d_CommentUnmarked = CommentUnmarked;
  type commentsV2Comment_universal_d_HideCommentRequest = HideCommentRequest;
  type commentsV2Comment_universal_d_HideCommentResponse = HideCommentResponse;
  type commentsV2Comment_universal_d_PublishCommentRequest = PublishCommentRequest;
  type commentsV2Comment_universal_d_PublishCommentResponse = PublishCommentResponse;
  type commentsV2Comment_universal_d_CountCommentsRequest = CountCommentsRequest;
  type commentsV2Comment_universal_d_CountCommentsResponse = CountCommentsResponse;
  type commentsV2Comment_universal_d_ListCommentsByResourceRequest = ListCommentsByResourceRequest;
  type commentsV2Comment_universal_d_CommentSort = CommentSort;
  type commentsV2Comment_universal_d_Order = Order;
  const commentsV2Comment_universal_d_Order: typeof Order;
  type commentsV2Comment_universal_d_ReplySort = ReplySort;
  type commentsV2Comment_universal_d_ReplySortOrder = ReplySortOrder;
  const commentsV2Comment_universal_d_ReplySortOrder: typeof ReplySortOrder;
  type commentsV2Comment_universal_d_ListCommentsByResourceCursorPaging = ListCommentsByResourceCursorPaging;
  type commentsV2Comment_universal_d_ListCommentsByResourceResponse = ListCommentsByResourceResponse;
  type commentsV2Comment_universal_d_RepliesListResponse = RepliesListResponse;
  type commentsV2Comment_universal_d_GetCommentThreadRequest = GetCommentThreadRequest;
  type commentsV2Comment_universal_d_GetCommentThreadResponse = GetCommentThreadResponse;
  type commentsV2Comment_universal_d_BulkPublishCommentRequest = BulkPublishCommentRequest;
  type commentsV2Comment_universal_d_BulkPublishCommentResponse = BulkPublishCommentResponse;
  type commentsV2Comment_universal_d_BulkHideCommentRequest = BulkHideCommentRequest;
  type commentsV2Comment_universal_d_BulkHideCommentResponse = BulkHideCommentResponse;
  type commentsV2Comment_universal_d_BulkDeleteCommentRequest = BulkDeleteCommentRequest;
  type commentsV2Comment_universal_d_BulkDeleteCommentResponse = BulkDeleteCommentResponse;
  const commentsV2Comment_universal_d_createComment: typeof createComment;
  type commentsV2Comment_universal_d_CreateCommentOptions = CreateCommentOptions;
  const commentsV2Comment_universal_d_getComment: typeof getComment;
  const commentsV2Comment_universal_d_updateComment: typeof updateComment;
  type commentsV2Comment_universal_d_UpdateCommentOptions = UpdateCommentOptions;
  const commentsV2Comment_universal_d_deleteComment: typeof deleteComment;
  type commentsV2Comment_universal_d_DeleteCommentOptions = DeleteCommentOptions;
  const commentsV2Comment_universal_d_moderateDraftContent: typeof moderateDraftContent;
  type commentsV2Comment_universal_d_ModerateDraftContentOptions = ModerateDraftContentOptions;
  const commentsV2Comment_universal_d_queryComments: typeof queryComments;
  type commentsV2Comment_universal_d_QueryCommentsOptions = QueryCommentsOptions;
  const commentsV2Comment_universal_d_markComment: typeof markComment;
  type commentsV2Comment_universal_d_MarkCommentOptions = MarkCommentOptions;
  const commentsV2Comment_universal_d_unmarkComment: typeof unmarkComment;
  type commentsV2Comment_universal_d_UnmarkCommentOptions = UnmarkCommentOptions;
  const commentsV2Comment_universal_d_hideComment: typeof hideComment;
  const commentsV2Comment_universal_d_publishComment: typeof publishComment;
  const commentsV2Comment_universal_d_countComments: typeof countComments;
  type commentsV2Comment_universal_d_CountCommentsOptions = CountCommentsOptions;
  const commentsV2Comment_universal_d_listCommentsByResource: typeof listCommentsByResource;
  type commentsV2Comment_universal_d_ListCommentsByResourceOptions = ListCommentsByResourceOptions;
  const commentsV2Comment_universal_d_getCommentThread: typeof getCommentThread;
  type commentsV2Comment_universal_d_GetCommentThreadOptions = GetCommentThreadOptions;
  const commentsV2Comment_universal_d_bulkPublishComment: typeof bulkPublishComment;
  type commentsV2Comment_universal_d_BulkPublishCommentOptions = BulkPublishCommentOptions;
  const commentsV2Comment_universal_d_bulkHideComment: typeof bulkHideComment;
  type commentsV2Comment_universal_d_BulkHideCommentOptions = BulkHideCommentOptions;
  const commentsV2Comment_universal_d_bulkDeleteComment: typeof bulkDeleteComment;
  type commentsV2Comment_universal_d_BulkDeleteCommentOptions = BulkDeleteCommentOptions;
  namespace commentsV2Comment_universal_d {
    export {
      commentsV2Comment_universal_d___debug as __debug,
      commentsV2Comment_universal_d_Comment as Comment,
      commentsV2Comment_universal_d_CommentContent as CommentContent,
      commentsV2Comment_universal_d_RichContent as RichContent,
      commentsV2Comment_universal_d_Node as Node,
      commentsV2Comment_universal_d_NodeDataOneOf as NodeDataOneOf,
      commentsV2Comment_universal_d_NodeType as NodeType,
      commentsV2Comment_universal_d_NodeStyle as NodeStyle,
      commentsV2Comment_universal_d_ButtonData as ButtonData,
      commentsV2Comment_universal_d_Border as Border,
      commentsV2Comment_universal_d_Colors as Colors,
      commentsV2Comment_universal_d_PluginContainerData as PluginContainerData,
      commentsV2Comment_universal_d_WidthType as WidthType,
      commentsV2Comment_universal_d_PluginContainerDataWidth as PluginContainerDataWidth,
      commentsV2Comment_universal_d_PluginContainerDataWidthDataOneOf as PluginContainerDataWidthDataOneOf,
      commentsV2Comment_universal_d_PluginContainerDataAlignment as PluginContainerDataAlignment,
      commentsV2Comment_universal_d_Spoiler as Spoiler,
      commentsV2Comment_universal_d_Height as Height,
      Type$1 as Type,
      commentsV2Comment_universal_d_Styles as Styles,
      commentsV2Comment_universal_d_Link as Link,
      commentsV2Comment_universal_d_LinkDataOneOf as LinkDataOneOf,
      commentsV2Comment_universal_d_Target as Target,
      commentsV2Comment_universal_d_Rel as Rel,
      commentsV2Comment_universal_d_CodeBlockData as CodeBlockData,
      commentsV2Comment_universal_d_TextStyle as TextStyle,
      commentsV2Comment_universal_d_TextAlignment as TextAlignment,
      commentsV2Comment_universal_d_DividerData as DividerData,
      commentsV2Comment_universal_d_LineStyle as LineStyle,
      commentsV2Comment_universal_d_Width as Width,
      commentsV2Comment_universal_d_Alignment as Alignment,
      commentsV2Comment_universal_d_FileData as FileData,
      commentsV2Comment_universal_d_ViewMode as ViewMode,
      commentsV2Comment_universal_d_FileSource as FileSource,
      commentsV2Comment_universal_d_FileSourceDataOneOf as FileSourceDataOneOf,
      commentsV2Comment_universal_d_PDFSettings as PDFSettings,
      commentsV2Comment_universal_d_GalleryData as GalleryData,
      commentsV2Comment_universal_d_Media as Media,
      commentsV2Comment_universal_d_Image as Image,
      commentsV2Comment_universal_d_Video as Video,
      commentsV2Comment_universal_d_Item as Item,
      commentsV2Comment_universal_d_ItemDataOneOf as ItemDataOneOf,
      commentsV2Comment_universal_d_GalleryOptions as GalleryOptions,
      commentsV2Comment_universal_d_LayoutType as LayoutType,
      commentsV2Comment_universal_d_Orientation as Orientation,
      commentsV2Comment_universal_d_Crop as Crop,
      commentsV2Comment_universal_d_ThumbnailsAlignment as ThumbnailsAlignment,
      commentsV2Comment_universal_d_Layout as Layout,
      commentsV2Comment_universal_d_ItemStyle as ItemStyle,
      commentsV2Comment_universal_d_Thumbnails as Thumbnails,
      commentsV2Comment_universal_d_GIFData as GIFData,
      commentsV2Comment_universal_d_GIF as GIF,
      commentsV2Comment_universal_d_HeadingData as HeadingData,
      commentsV2Comment_universal_d_HTMLData as HTMLData,
      commentsV2Comment_universal_d_HTMLDataDataOneOf as HTMLDataDataOneOf,
      commentsV2Comment_universal_d_Source as Source,
      commentsV2Comment_universal_d_ImageData as ImageData,
      commentsV2Comment_universal_d_LinkPreviewData as LinkPreviewData,
      commentsV2Comment_universal_d_MapData as MapData,
      commentsV2Comment_universal_d_MapSettings as MapSettings,
      commentsV2Comment_universal_d_MapType as MapType,
      commentsV2Comment_universal_d_ParagraphData as ParagraphData,
      commentsV2Comment_universal_d_PollData as PollData,
      commentsV2Comment_universal_d_ViewRole as ViewRole,
      commentsV2Comment_universal_d_VoteRole as VoteRole,
      Permissions$1 as Permissions,
      commentsV2Comment_universal_d_Option as Option,
      commentsV2Comment_universal_d_Settings as Settings,
      commentsV2Comment_universal_d_PollLayoutType as PollLayoutType,
      commentsV2Comment_universal_d_PollLayoutDirection as PollLayoutDirection,
      commentsV2Comment_universal_d_PollLayout as PollLayout,
      commentsV2Comment_universal_d_OptionLayout as OptionLayout,
      commentsV2Comment_universal_d_BackgroundType as BackgroundType,
      commentsV2Comment_universal_d_Gradient as Gradient,
      commentsV2Comment_universal_d_Background as Background,
      commentsV2Comment_universal_d_BackgroundBackgroundOneOf as BackgroundBackgroundOneOf,
      commentsV2Comment_universal_d_PollDesign as PollDesign,
      commentsV2Comment_universal_d_OptionDesign as OptionDesign,
      commentsV2Comment_universal_d_Poll as Poll,
      commentsV2Comment_universal_d_PollDataLayout as PollDataLayout,
      commentsV2Comment_universal_d_Design as Design,
      commentsV2Comment_universal_d_TextData as TextData,
      commentsV2Comment_universal_d_Decoration as Decoration,
      commentsV2Comment_universal_d_DecorationDataOneOf as DecorationDataOneOf,
      commentsV2Comment_universal_d_DecorationType as DecorationType,
      commentsV2Comment_universal_d_AnchorData as AnchorData,
      commentsV2Comment_universal_d_ColorData as ColorData,
      commentsV2Comment_universal_d_LinkData as LinkData,
      commentsV2Comment_universal_d_MentionData as MentionData,
      commentsV2Comment_universal_d_FontSizeData as FontSizeData,
      commentsV2Comment_universal_d_FontType as FontType,
      commentsV2Comment_universal_d_AppEmbedData as AppEmbedData,
      commentsV2Comment_universal_d_AppEmbedDataAppDataOneOf as AppEmbedDataAppDataOneOf,
      commentsV2Comment_universal_d_AppType as AppType,
      commentsV2Comment_universal_d_BookingData as BookingData,
      commentsV2Comment_universal_d_EventData as EventData,
      commentsV2Comment_universal_d_VideoData as VideoData,
      commentsV2Comment_universal_d_PlaybackOptions as PlaybackOptions,
      commentsV2Comment_universal_d_EmbedData as EmbedData,
      commentsV2Comment_universal_d_Oembed as Oembed,
      commentsV2Comment_universal_d_CollapsibleListData as CollapsibleListData,
      commentsV2Comment_universal_d_InitialExpandedItems as InitialExpandedItems,
      commentsV2Comment_universal_d_Direction as Direction,
      commentsV2Comment_universal_d_TableData as TableData,
      commentsV2Comment_universal_d_Dimensions as Dimensions,
      commentsV2Comment_universal_d_TableCellData as TableCellData,
      commentsV2Comment_universal_d_VerticalAlignment as VerticalAlignment,
      commentsV2Comment_universal_d_CellStyle as CellStyle,
      commentsV2Comment_universal_d_BorderColors as BorderColors,
      commentsV2Comment_universal_d_NullValue as NullValue,
      commentsV2Comment_universal_d_ListValue as ListValue,
      commentsV2Comment_universal_d_AudioData as AudioData,
      commentsV2Comment_universal_d_OrderedListData as OrderedListData,
      commentsV2Comment_universal_d_BulletedListData as BulletedListData,
      commentsV2Comment_universal_d_BlockquoteData as BlockquoteData,
      commentsV2Comment_universal_d_Metadata as Metadata,
      commentsV2Comment_universal_d_DocumentStyle as DocumentStyle,
      commentsV2Comment_universal_d_TextNodeStyle as TextNodeStyle,
      commentsV2Comment_universal_d_Mention as Mention,
      commentsV2Comment_universal_d_MentionIdentityOneOf as MentionIdentityOneOf,
      commentsV2Comment_universal_d_Attachment as Attachment,
      commentsV2Comment_universal_d_AttachmentMediaOneOf as AttachmentMediaOneOf,
      commentsV2Comment_universal_d_VideoResolution as VideoResolution,
      commentsV2Comment_universal_d_CommentAuthor as CommentAuthor,
      commentsV2Comment_universal_d_CommentAuthorIdentityOneOf as CommentAuthorIdentityOneOf,
      commentsV2Comment_universal_d_ParentComment as ParentComment,
      commentsV2Comment_universal_d_VoteSummary as VoteSummary,
      Status$1 as Status,
      commentsV2Comment_universal_d_CommentReactionSummary as CommentReactionSummary,
      commentsV2Comment_universal_d_UpdateInternalDocumentsEvent as UpdateInternalDocumentsEvent,
      commentsV2Comment_universal_d_UpdateInternalDocumentsEventOperationOneOf as UpdateInternalDocumentsEventOperationOneOf,
      commentsV2Comment_universal_d_InternalDocument as InternalDocument,
      commentsV2Comment_universal_d_InternalDocumentUpdateOperation as InternalDocumentUpdateOperation,
      commentsV2Comment_universal_d_DeleteByIdsOperation as DeleteByIdsOperation,
      commentsV2Comment_universal_d_DeleteByFilterOperation as DeleteByFilterOperation,
      commentsV2Comment_universal_d_InternalDocumentUpdateByFilterOperation as InternalDocumentUpdateByFilterOperation,
      commentsV2Comment_universal_d_InternalUpdateExistingOperation as InternalUpdateExistingOperation,
      commentsV2Comment_universal_d_VersionedDocumentUpdateOperation as VersionedDocumentUpdateOperation,
      commentsV2Comment_universal_d_VersioningMode as VersioningMode,
      commentsV2Comment_universal_d_VersionedDeleteByIdsOperation as VersionedDeleteByIdsOperation,
      commentsV2Comment_universal_d_VersionedDocumentId as VersionedDocumentId,
      commentsV2Comment_universal_d_CreateCommentRequest as CreateCommentRequest,
      commentsV2Comment_universal_d_CreateCommentResponse as CreateCommentResponse,
      commentsV2Comment_universal_d_GetCommentRequest as GetCommentRequest,
      commentsV2Comment_universal_d_GetCommentResponse as GetCommentResponse,
      commentsV2Comment_universal_d_UpdateCommentRequest as UpdateCommentRequest,
      commentsV2Comment_universal_d_UpdateCommentResponse as UpdateCommentResponse,
      commentsV2Comment_universal_d_DeleteCommentRequest as DeleteCommentRequest,
      commentsV2Comment_universal_d_DeleteCommentResponse as DeleteCommentResponse,
      commentsV2Comment_universal_d_CommentDeleted as CommentDeleted,
      commentsV2Comment_universal_d_ModerateDraftContentRequest as ModerateDraftContentRequest,
      commentsV2Comment_universal_d_Action as Action,
      commentsV2Comment_universal_d_ModerateDraftContentResponse as ModerateDraftContentResponse,
      commentsV2Comment_universal_d_CommentPublished as CommentPublished,
      commentsV2Comment_universal_d_CommentHidden as CommentHidden,
      commentsV2Comment_universal_d_QueryCommentsRequest as QueryCommentsRequest,
      CursorQuery$1 as CursorQuery,
      CursorQueryPagingMethodOneOf$1 as CursorQueryPagingMethodOneOf,
      Sorting$2 as Sorting,
      SortOrder$2 as SortOrder,
      CursorPaging$2 as CursorPaging,
      commentsV2Comment_universal_d_QueryCommentsResponse as QueryCommentsResponse,
      CursorPagingMetadata$2 as CursorPagingMetadata,
      Cursors$2 as Cursors,
      commentsV2Comment_universal_d_MarkCommentRequest as MarkCommentRequest,
      commentsV2Comment_universal_d_MarkCommentResponse as MarkCommentResponse,
      commentsV2Comment_universal_d_CommentMarked as CommentMarked,
      commentsV2Comment_universal_d_UnmarkCommentRequest as UnmarkCommentRequest,
      commentsV2Comment_universal_d_UnmarkCommentResponse as UnmarkCommentResponse,
      commentsV2Comment_universal_d_CommentUnmarked as CommentUnmarked,
      commentsV2Comment_universal_d_HideCommentRequest as HideCommentRequest,
      commentsV2Comment_universal_d_HideCommentResponse as HideCommentResponse,
      commentsV2Comment_universal_d_PublishCommentRequest as PublishCommentRequest,
      commentsV2Comment_universal_d_PublishCommentResponse as PublishCommentResponse,
      commentsV2Comment_universal_d_CountCommentsRequest as CountCommentsRequest,
      commentsV2Comment_universal_d_CountCommentsResponse as CountCommentsResponse,
      commentsV2Comment_universal_d_ListCommentsByResourceRequest as ListCommentsByResourceRequest,
      commentsV2Comment_universal_d_CommentSort as CommentSort,
      commentsV2Comment_universal_d_Order as Order,
      commentsV2Comment_universal_d_ReplySort as ReplySort,
      commentsV2Comment_universal_d_ReplySortOrder as ReplySortOrder,
      commentsV2Comment_universal_d_ListCommentsByResourceCursorPaging as ListCommentsByResourceCursorPaging,
      commentsV2Comment_universal_d_ListCommentsByResourceResponse as ListCommentsByResourceResponse,
      commentsV2Comment_universal_d_RepliesListResponse as RepliesListResponse,
      commentsV2Comment_universal_d_GetCommentThreadRequest as GetCommentThreadRequest,
      commentsV2Comment_universal_d_GetCommentThreadResponse as GetCommentThreadResponse,
      commentsV2Comment_universal_d_BulkPublishCommentRequest as BulkPublishCommentRequest,
      commentsV2Comment_universal_d_BulkPublishCommentResponse as BulkPublishCommentResponse,
      commentsV2Comment_universal_d_BulkHideCommentRequest as BulkHideCommentRequest,
      commentsV2Comment_universal_d_BulkHideCommentResponse as BulkHideCommentResponse,
      commentsV2Comment_universal_d_BulkDeleteCommentRequest as BulkDeleteCommentRequest,
      commentsV2Comment_universal_d_BulkDeleteCommentResponse as BulkDeleteCommentResponse,
      commentsV2Comment_universal_d_createComment as createComment,
      commentsV2Comment_universal_d_CreateCommentOptions as CreateCommentOptions,
      commentsV2Comment_universal_d_getComment as getComment,
      commentsV2Comment_universal_d_updateComment as updateComment,
      commentsV2Comment_universal_d_UpdateCommentOptions as UpdateCommentOptions,
      commentsV2Comment_universal_d_deleteComment as deleteComment,
      commentsV2Comment_universal_d_DeleteCommentOptions as DeleteCommentOptions,
      commentsV2Comment_universal_d_moderateDraftContent as moderateDraftContent,
      commentsV2Comment_universal_d_ModerateDraftContentOptions as ModerateDraftContentOptions,
      commentsV2Comment_universal_d_queryComments as queryComments,
      commentsV2Comment_universal_d_QueryCommentsOptions as QueryCommentsOptions,
      commentsV2Comment_universal_d_markComment as markComment,
      commentsV2Comment_universal_d_MarkCommentOptions as MarkCommentOptions,
      commentsV2Comment_universal_d_unmarkComment as unmarkComment,
      commentsV2Comment_universal_d_UnmarkCommentOptions as UnmarkCommentOptions,
      commentsV2Comment_universal_d_hideComment as hideComment,
      commentsV2Comment_universal_d_publishComment as publishComment,
      commentsV2Comment_universal_d_countComments as countComments,
      commentsV2Comment_universal_d_CountCommentsOptions as CountCommentsOptions,
      commentsV2Comment_universal_d_listCommentsByResource as listCommentsByResource,
      commentsV2Comment_universal_d_ListCommentsByResourceOptions as ListCommentsByResourceOptions,
      commentsV2Comment_universal_d_getCommentThread as getCommentThread,
      commentsV2Comment_universal_d_GetCommentThreadOptions as GetCommentThreadOptions,
      commentsV2Comment_universal_d_bulkPublishComment as bulkPublishComment,
      commentsV2Comment_universal_d_BulkPublishCommentOptions as BulkPublishCommentOptions,
      commentsV2Comment_universal_d_bulkHideComment as bulkHideComment,
      commentsV2Comment_universal_d_BulkHideCommentOptions as BulkHideCommentOptions,
      commentsV2Comment_universal_d_bulkDeleteComment as bulkDeleteComment,
      commentsV2Comment_universal_d_BulkDeleteCommentOptions as BulkDeleteCommentOptions,
    };
  }
  
  /** CommentsWidget is the main entity of CommentsWidgetRegistry that can be used for lorem ipsum dolor */
  interface CommentsWidget {
      /**
       * CommentsWidget ID
       * @readonly
       */
      _id?: string | null;
      /** Widget category ID */
      categoryId?: string;
      /** Widget resource ID */
      resourceId?: string;
      /** Path to widget location */
      urlPath?: string;
      /** Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision */
      revision?: string | null;
      /**
       * Represents the time this CommentsResource was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this CommentsResource was last updated
       * @readonly
       */
      _updatedDate?: Date;
      /** Component ID of the widget to which the category is attached to */
      componentId?: string | null;
      /** Count indicating how many published comments exist in category and resource */
      commentCount?: number | null;
  }
  interface RegisterCommentsWidgetRequest {
      /** Widget category ID */
      categoryId: string;
      /** Widget resource ID */
      resourceId: string;
      /** Deprecated field */
      componentId?: string;
      /** Dynamic page tittle, if the widget is inside a dynamic page */
      dynamicPageTitle?: string | null;
      /** PageId of the page, which contains the widget */
      pageId?: string | null;
      /** Page Url, provided by the client */
      urlPath?: string | null;
  }
  interface RegisterCommentsWidgetResponse {
      /** The registered CommentsWidget */
      commentsWidget?: CommentsWidget;
  }
  interface QueryCommentsWidgetResourcesRequest {
      /** Cursor query */
      query: CursorQuery;
  }
  interface CursorQuery extends CursorQueryPagingMethodOneOf {
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
  interface CursorQueryPagingMethodOneOf {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$1;
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
  interface CursorPaging$1 {
      /** Maximum number of items to return in the results. */
      limit?: number | null;
      /**
       * Pointer to the next or previous page in the list of results.
       *
       * Pass the relevant cursor token from the `pagingMetadata` object in the previous call's response.
       * Not relevant for the first request.
       */
      cursor?: string | null;
  }
  interface QueryCommentsWidgetResourcesResponse {
      /** List of resources */
      resourceIds?: string[];
      /** Paging metadata */
      pagingMetadata?: CursorPagingMetadata$1;
  }
  interface CursorPagingMetadata$1 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Cursor strings that point to the next page, previous page, or both. */
      cursors?: Cursors$1;
      /**
       * Whether there are more pages to retrieve following the current page.
       *
       * + `true`: Another page of results can be retrieved.
       * + `false`: This is the last page.
       */
      hasNext?: boolean | null;
  }
  interface Cursors$1 {
      /** Cursor string pointing to the next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to the previous page in the list of results. */
      prev?: string | null;
  }
  interface CreateCommentsWidgetRequest {
      /** CommentsWidget to be created */
      commentsWidget: CommentsWidget;
  }
  interface CreateCommentsWidgetResponse {
      /** The created CommentsWidget */
      commentsWidget?: CommentsWidget;
  }
  interface GetCommentsWidgetRequest {
      /** Id of the CommentsWidget to retrieve */
      commentsWidgetId: string;
  }
  interface GetCommentsWidgetResponse {
      /** The retrieved CommentsWidget */
      commentsWidget?: CommentsWidget;
  }
  interface UpdateCommentsWidgetRequest {
      /** CommentsWidget to be updated, may be partial */
      commentsWidget: CommentsWidget;
      /**
       * Explicit list of fields to update
       * @internal
       */
      mask?: string[];
  }
  interface UpdateCommentsWidgetResponse {
      /** The updated CommentsWidget */
      commentsWidget?: CommentsWidget;
  }
  interface DeleteCommentsWidgetRequest {
      /** Id of the CommentsWidget to delete */
      commentsWidgetId: string;
      /** The revision of the CommentsWidget */
      revision?: string;
  }
  interface DeleteCommentsWidgetResponse {
  }
  interface QueryCommentsWidgetRequest {
      /** WQL expression */
      query: QueryV2$1;
  }
  interface QueryV2$1 extends QueryV2PagingMethodOneOf$1 {
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
      /** Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned. */
      fields?: string[];
      /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned. */
      fieldsets?: string[];
  }
  /** @oneof */
  interface QueryV2PagingMethodOneOf$1 {
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
  interface QueryCommentsWidgetResponse {
      /** The retrieved CommentsWidgets */
      commentsWidgets?: CommentsWidget[];
      /** Paging metadata */
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
      cursors?: Cursors$1;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       * @internal
       */
      hasNext?: boolean | null;
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
  interface Empty$2 {
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
  /**
   * Registers CommentsWidget. Whenever a widget is loaded for the first time or its resourceId changes, it saves the new resource information about the widget
   * @param categoryId - Widget category ID
   * @internal
   * @documentationMaturity preview
   * @requiredField categoryId
   * @requiredField options.resourceId
   */
  function registerCommentsWidget(categoryId: string, options?: RegisterCommentsWidgetOptions): Promise<RegisterCommentsWidgetResponse>;
  interface RegisterCommentsWidgetOptions {
      /** Widget resource ID */
      resourceId: string;
      /** Deprecated field */
      componentId?: string;
      /** Dynamic page tittle, if the widget is inside a dynamic page */
      dynamicPageTitle?: string | null;
      /** PageId of the page, which contains the widget */
      pageId?: string | null;
      /** Page Url, provided by the client */
      urlPath?: string | null;
  }
  /**
   * Returns all registered widget resource ids contained in metaSite
   * @param query - Cursor query
   * @internal
   * @documentationMaturity preview
   * @requiredField query
   * @adminMethod
   */
  function queryCommentsWidgetResources(query: CursorQuery): Promise<QueryCommentsWidgetResourcesResponse>;
  /**
   * Creates a new CommentsWidget
   * @param commentsWidget - CommentsWidget to be created
   * @internal
   * @documentationMaturity preview
   * @requiredField commentsWidget
   * @requiredField commentsWidget.categoryId
   * @requiredField commentsWidget.resourceId
   * @adminMethod
   */
  function createCommentsWidget(commentsWidget: CommentsWidget): Promise<CreateCommentsWidgetResponse>;
  /**
   * Get a CommentsWidget by id
   * @param commentsWidgetId - Id of the CommentsWidget to retrieve
   * @internal
   * @documentationMaturity preview
   * @requiredField commentsWidgetId
   */
  function getCommentsWidget(commentsWidgetId: string): Promise<GetCommentsWidgetResponse>;
  /**
   * Update CommentsWidget, supports partial update
   * Pass the latest `revision` for a successful update
   * @param _id - CommentsWidget ID
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField commentsWidget
   * @requiredField commentsWidget.revision
   * @adminMethod
   */
  function updateCommentsWidget(_id: string | null, commentsWidget: UpdateCommentsWidget, options?: UpdateCommentsWidgetOptions): Promise<UpdateCommentsWidgetResponse>;
  interface UpdateCommentsWidget {
      /**
       * CommentsWidget ID
       * @readonly
       */
      _id?: string | null;
      /** Widget category ID */
      categoryId?: string;
      /** Widget resource ID */
      resourceId?: string;
      /** Path to widget location */
      urlPath?: string;
      /** Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision */
      revision?: string | null;
      /**
       * Represents the time this CommentsResource was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this CommentsResource was last updated
       * @readonly
       */
      _updatedDate?: Date;
      /** Component ID of the widget to which the category is attached to */
      componentId?: string | null;
      /** Count indicating how many published comments exist in category and resource */
      commentCount?: number | null;
  }
  interface UpdateCommentsWidgetOptions {
      /**
       * Explicit list of fields to update
       * @internal
       */
      mask?: string[];
  }
  /**
   * Delete a CommentsWidget
   * @param commentsWidgetId - Id of the CommentsWidget to delete
   * @internal
   * @documentationMaturity preview
   * @requiredField commentsWidgetId
   * @adminMethod
   */
  function deleteCommentsWidget(commentsWidgetId: string, options?: DeleteCommentsWidgetOptions): Promise<void>;
  interface DeleteCommentsWidgetOptions {
      /** The revision of the CommentsWidget */
      revision?: string;
  }
  /**
   * Query CommentsWidgets using [WQL - Wix Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language)
   * @param query - WQL expression
   * @internal
   * @documentationMaturity preview
   * @requiredField query
   */
  function queryCommentsWidget(query: QueryV2$1): Promise<QueryCommentsWidgetResponse>;
  
  type commentsCategoriesV1CommentsWidget_universal_d_CommentsWidget = CommentsWidget;
  type commentsCategoriesV1CommentsWidget_universal_d_RegisterCommentsWidgetRequest = RegisterCommentsWidgetRequest;
  type commentsCategoriesV1CommentsWidget_universal_d_RegisterCommentsWidgetResponse = RegisterCommentsWidgetResponse;
  type commentsCategoriesV1CommentsWidget_universal_d_QueryCommentsWidgetResourcesRequest = QueryCommentsWidgetResourcesRequest;
  type commentsCategoriesV1CommentsWidget_universal_d_CursorQuery = CursorQuery;
  type commentsCategoriesV1CommentsWidget_universal_d_CursorQueryPagingMethodOneOf = CursorQueryPagingMethodOneOf;
  type commentsCategoriesV1CommentsWidget_universal_d_QueryCommentsWidgetResourcesResponse = QueryCommentsWidgetResourcesResponse;
  type commentsCategoriesV1CommentsWidget_universal_d_CreateCommentsWidgetRequest = CreateCommentsWidgetRequest;
  type commentsCategoriesV1CommentsWidget_universal_d_CreateCommentsWidgetResponse = CreateCommentsWidgetResponse;
  type commentsCategoriesV1CommentsWidget_universal_d_GetCommentsWidgetRequest = GetCommentsWidgetRequest;
  type commentsCategoriesV1CommentsWidget_universal_d_GetCommentsWidgetResponse = GetCommentsWidgetResponse;
  type commentsCategoriesV1CommentsWidget_universal_d_UpdateCommentsWidgetRequest = UpdateCommentsWidgetRequest;
  type commentsCategoriesV1CommentsWidget_universal_d_UpdateCommentsWidgetResponse = UpdateCommentsWidgetResponse;
  type commentsCategoriesV1CommentsWidget_universal_d_DeleteCommentsWidgetRequest = DeleteCommentsWidgetRequest;
  type commentsCategoriesV1CommentsWidget_universal_d_DeleteCommentsWidgetResponse = DeleteCommentsWidgetResponse;
  type commentsCategoriesV1CommentsWidget_universal_d_QueryCommentsWidgetRequest = QueryCommentsWidgetRequest;
  type commentsCategoriesV1CommentsWidget_universal_d_QueryCommentsWidgetResponse = QueryCommentsWidgetResponse;
  type commentsCategoriesV1CommentsWidget_universal_d_PagingMetadataV2 = PagingMetadataV2;
  const commentsCategoriesV1CommentsWidget_universal_d_registerCommentsWidget: typeof registerCommentsWidget;
  type commentsCategoriesV1CommentsWidget_universal_d_RegisterCommentsWidgetOptions = RegisterCommentsWidgetOptions;
  const commentsCategoriesV1CommentsWidget_universal_d_queryCommentsWidgetResources: typeof queryCommentsWidgetResources;
  const commentsCategoriesV1CommentsWidget_universal_d_createCommentsWidget: typeof createCommentsWidget;
  const commentsCategoriesV1CommentsWidget_universal_d_getCommentsWidget: typeof getCommentsWidget;
  const commentsCategoriesV1CommentsWidget_universal_d_updateCommentsWidget: typeof updateCommentsWidget;
  type commentsCategoriesV1CommentsWidget_universal_d_UpdateCommentsWidget = UpdateCommentsWidget;
  type commentsCategoriesV1CommentsWidget_universal_d_UpdateCommentsWidgetOptions = UpdateCommentsWidgetOptions;
  const commentsCategoriesV1CommentsWidget_universal_d_deleteCommentsWidget: typeof deleteCommentsWidget;
  type commentsCategoriesV1CommentsWidget_universal_d_DeleteCommentsWidgetOptions = DeleteCommentsWidgetOptions;
  const commentsCategoriesV1CommentsWidget_universal_d_queryCommentsWidget: typeof queryCommentsWidget;
  namespace commentsCategoriesV1CommentsWidget_universal_d {
    export {
      commentsCategoriesV1CommentsWidget_universal_d_CommentsWidget as CommentsWidget,
      commentsCategoriesV1CommentsWidget_universal_d_RegisterCommentsWidgetRequest as RegisterCommentsWidgetRequest,
      commentsCategoriesV1CommentsWidget_universal_d_RegisterCommentsWidgetResponse as RegisterCommentsWidgetResponse,
      commentsCategoriesV1CommentsWidget_universal_d_QueryCommentsWidgetResourcesRequest as QueryCommentsWidgetResourcesRequest,
      commentsCategoriesV1CommentsWidget_universal_d_CursorQuery as CursorQuery,
      commentsCategoriesV1CommentsWidget_universal_d_CursorQueryPagingMethodOneOf as CursorQueryPagingMethodOneOf,
      Sorting$1 as Sorting,
      SortOrder$1 as SortOrder,
      CursorPaging$1 as CursorPaging,
      commentsCategoriesV1CommentsWidget_universal_d_QueryCommentsWidgetResourcesResponse as QueryCommentsWidgetResourcesResponse,
      CursorPagingMetadata$1 as CursorPagingMetadata,
      Cursors$1 as Cursors,
      commentsCategoriesV1CommentsWidget_universal_d_CreateCommentsWidgetRequest as CreateCommentsWidgetRequest,
      commentsCategoriesV1CommentsWidget_universal_d_CreateCommentsWidgetResponse as CreateCommentsWidgetResponse,
      commentsCategoriesV1CommentsWidget_universal_d_GetCommentsWidgetRequest as GetCommentsWidgetRequest,
      commentsCategoriesV1CommentsWidget_universal_d_GetCommentsWidgetResponse as GetCommentsWidgetResponse,
      commentsCategoriesV1CommentsWidget_universal_d_UpdateCommentsWidgetRequest as UpdateCommentsWidgetRequest,
      commentsCategoriesV1CommentsWidget_universal_d_UpdateCommentsWidgetResponse as UpdateCommentsWidgetResponse,
      commentsCategoriesV1CommentsWidget_universal_d_DeleteCommentsWidgetRequest as DeleteCommentsWidgetRequest,
      commentsCategoriesV1CommentsWidget_universal_d_DeleteCommentsWidgetResponse as DeleteCommentsWidgetResponse,
      commentsCategoriesV1CommentsWidget_universal_d_QueryCommentsWidgetRequest as QueryCommentsWidgetRequest,
      QueryV2$1 as QueryV2,
      QueryV2PagingMethodOneOf$1 as QueryV2PagingMethodOneOf,
      Paging$1 as Paging,
      commentsCategoriesV1CommentsWidget_universal_d_QueryCommentsWidgetResponse as QueryCommentsWidgetResponse,
      commentsCategoriesV1CommentsWidget_universal_d_PagingMetadataV2 as PagingMetadataV2,
      DomainEvent$2 as DomainEvent,
      DomainEventBodyOneOf$2 as DomainEventBodyOneOf,
      EntityCreatedEvent$2 as EntityCreatedEvent,
      EntityUpdatedEvent$2 as EntityUpdatedEvent,
      EntityDeletedEvent$2 as EntityDeletedEvent,
      ActionEvent$2 as ActionEvent,
      Empty$2 as Empty,
      MessageEnvelope$1 as MessageEnvelope,
      IdentificationData$1 as IdentificationData,
      IdentificationDataIdOneOf$1 as IdentificationDataIdOneOf,
      WebhookIdentityType$1 as WebhookIdentityType,
      commentsCategoriesV1CommentsWidget_universal_d_registerCommentsWidget as registerCommentsWidget,
      commentsCategoriesV1CommentsWidget_universal_d_RegisterCommentsWidgetOptions as RegisterCommentsWidgetOptions,
      commentsCategoriesV1CommentsWidget_universal_d_queryCommentsWidgetResources as queryCommentsWidgetResources,
      commentsCategoriesV1CommentsWidget_universal_d_createCommentsWidget as createCommentsWidget,
      commentsCategoriesV1CommentsWidget_universal_d_getCommentsWidget as getCommentsWidget,
      commentsCategoriesV1CommentsWidget_universal_d_updateCommentsWidget as updateCommentsWidget,
      commentsCategoriesV1CommentsWidget_universal_d_UpdateCommentsWidget as UpdateCommentsWidget,
      commentsCategoriesV1CommentsWidget_universal_d_UpdateCommentsWidgetOptions as UpdateCommentsWidgetOptions,
      commentsCategoriesV1CommentsWidget_universal_d_deleteCommentsWidget as deleteCommentsWidget,
      commentsCategoriesV1CommentsWidget_universal_d_DeleteCommentsWidgetOptions as DeleteCommentsWidgetOptions,
      commentsCategoriesV1CommentsWidget_universal_d_queryCommentsWidget as queryCommentsWidget,
    };
  }
  
  /** Category is the main entity for Comments widget service */
  interface Category {
      /**
       * Category ID
       * @readonly
       */
      _id?: string | null;
      /** Name of the category */
      name?: string | null;
      /** Setting to allow or permit guest commenting */
      guestCommenting?: boolean | null;
      /** Setting to allow or permit guests to add reactions to comments */
      guestReactions?: boolean | null;
      /** The selected type of reactions to be used in comments */
      reactionType?: ReactionTypeType;
      /** The selected type of reactions to be used in replies */
      repliesReactionType?: RepliesReactionTypeType;
      /** The default comment label for marked comment badges */
      markedCommentLabelType?: Type;
      /** Custom label value for marked comment badges */
      customMarkedCommentLabel?: string | null;
      /** The type of icons to be used for comment likes */
      mainReaction?: ReactionIcon;
      /** Category ratings settings. Describes whether ratings are enabled for category and if leaving a rating when placing a comment is mandatory */
      ratingsSettings?: RatingsSettings;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the time this Category was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Category was last updated
       * @readonly
       */
      _updatedDate?: Date;
      /** Category permissions settings. Describes what UoU entities are allowed to perform actions */
      permissionsSettings?: PermissionsSettings;
      /** Indication of whether the category is active and being used in live site */
      active?: boolean | null;
      /** Application owning category */
      appId?: string | null;
  }
  enum ReactionTypeType {
      UNKNOWN = "UNKNOWN",
      VOTE = "VOTE",
      REACTIONS = "REACTIONS",
      MULTIPLE_REACTIONS = "MULTIPLE_REACTIONS"
  }
  enum RepliesReactionTypeType {
      UNKNOWN = "UNKNOWN",
      REACTIONS = "REACTIONS",
      MULTIPLE_REACTIONS = "MULTIPLE_REACTIONS"
  }
  enum Type {
      UNKNOWN = "UNKNOWN",
      FEATURED = "FEATURED",
      BEST_ANSWER = "BEST_ANSWER",
      SOLVED = "SOLVED",
      PINNED = "PINNED",
      CUSTOM = "CUSTOM"
  }
  interface ReactionIcon extends ReactionIconIconsOneOf {
      /** Type of icon to be used for reactions */
      iconType?: IconTypeType;
  }
  /** @oneof */
  interface ReactionIconIconsOneOf {
      /** Type of icon to be used for reactions */
      iconType?: IconTypeType;
  }
  enum IconTypeType {
      UNKNOWN = "UNKNOWN",
      LOVE = "LOVE",
      THUMBS_UP = "THUMBS_UP"
  }
  interface RatingsSettings {
      /** Indicates whether ratings are enabled */
      ratingsEnabled?: boolean;
      /** Indicates whether leaving a rating is required */
      ratingRequired?: boolean;
  }
  interface PermissionsSettings {
      /** Indicates whether commenting is enabled and with what role permissions */
      createComment?: Permissions;
      /** Indicates whether replying is enabled and with what role permissions */
      createReply?: Permissions;
      /** Indicates whether reacting is enabled and with what role permissions */
      createReact?: Permissions;
  }
  interface Permissions {
      /** Defines the role for permissions */
      role?: Role;
  }
  enum Role {
      UNKNOWN_ROLE = "UNKNOWN_ROLE",
      ALL = "ALL",
      MEMBER = "MEMBER",
      ADMIN = "ADMIN"
  }
  interface CreateCategoryRequest {
      /** Category to be created */
      category: Category;
  }
  interface CreateCategoryResponse {
      /** The created Category */
      category?: Category;
  }
  interface GetCategoryRequest {
      /** Id of the Category to retrieve */
      categoryId: string;
  }
  interface GetCategoryResponse {
      /** The retrieved Category */
      category?: Category;
  }
  interface UpdateCategoryRequest {
      /** Category to be updated, may be partial and include only CategoryId and the field to change */
      category: Category;
      /**
       * Explicit list of fields to update
       * @internal
       */
      mask?: string[];
  }
  interface UpdateCategoryResponse {
      /** The updated Category */
      category?: Category;
  }
  interface DeleteCategoryRequest {
      /** Id of the Category to delete */
      categoryId: string;
      /** The revision of the Category */
      revision?: string;
  }
  interface DeleteCategoryResponse {
  }
  interface QueryCategoryRequest {
      /** WQL expression */
      query: QueryV2;
  }
  interface QueryV2 extends QueryV2PagingMethodOneOf {
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
      /** Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned. */
      fields?: string[];
      /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned. */
      fieldsets?: string[];
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
  interface CursorPaging {
      /** Maximum number of items to return in the results. */
      limit?: number | null;
      /**
       * Pointer to the next or previous page in the list of results.
       *
       * Pass the relevant cursor token from the `pagingMetadata` object in the previous call's response.
       * Not relevant for the first request.
       */
      cursor?: string | null;
  }
  interface QueryCategoryResponse {
      /** The retrieved Categories */
      categories?: Category[];
      /** Paging metadata. */
      pagingMetadata?: CursorPagingMetadata;
  }
  interface CursorPagingMetadata {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Cursor strings that point to the next page, previous page, or both. */
      cursors?: Cursors;
      /**
       * Whether there are more pages to retrieve following the current page.
       *
       * + `true`: Another page of results can be retrieved.
       * + `false`: This is the last page.
       */
      hasNext?: boolean | null;
  }
  interface Cursors {
      /** Cursor string pointing to the next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to the previous page in the list of results. */
      prev?: string | null;
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
  interface Empty$1 {
  }
  interface MetaSiteSpecialEvent extends MetaSiteSpecialEventPayloadOneOf {
      /** Emitted on a meta site creation. */
      siteCreated?: SiteCreated;
      /** Emitted on a meta site transfer completion. */
      siteTransferred?: SiteTransferred;
      /** Emitted on a meta site deletion. */
      siteDeleted?: SiteDeleted;
      /** Emitted on a meta site restoration. */
      siteUndeleted?: SiteUndeleted;
      /** Emitted on the first* publish of the meta site (* switching from unpublished to published state). */
      sitePublished?: SitePublished;
      /** Emitted on a meta site unpublish. */
      siteUnpublished?: SiteUnpublished;
      /** Emitted when meta site is marked as template. */
      siteMarkedAsTemplate?: SiteMarkedAsTemplate;
      /** Emitted when meta site is marked as a WixSite. */
      siteMarkedAsWixSite?: SiteMarkedAsWixSite;
      /** Emitted when an application is provisioned (installed). */
      serviceProvisioned?: ServiceProvisioned;
      /** Emitted when an application is removed (uninstalled). */
      serviceRemoved?: ServiceRemoved;
      /** Emitted when meta site name (URL slug) is changed. */
      siteRenamedPayload?: SiteRenamed;
      /** Emitted when meta site was permanently deleted. */
      hardDeleted?: SiteHardDeleted;
      /** Emitted on a namespace change. */
      namespaceChanged?: NamespaceChanged;
      /** Emitted when Studio is attached. */
      studioAssigned?: StudioAssigned;
      /** Emitted when Studio is detached. */
      studioUnassigned?: StudioUnassigned;
      /** A meta site id. */
      metaSiteId?: string;
      /** A meta site version. Monotonically increasing. */
      version?: string;
      /** A timestamp of the event. */
      timestamp?: string;
      /** A list of "assets" (applications). The same as MetaSiteContext. */
      assets?: Asset[];
  }
  /** @oneof */
  interface MetaSiteSpecialEventPayloadOneOf {
      /** Emitted on a meta site creation. */
      siteCreated?: SiteCreated;
      /** Emitted on a meta site transfer completion. */
      siteTransferred?: SiteTransferred;
      /** Emitted on a meta site deletion. */
      siteDeleted?: SiteDeleted;
      /** Emitted on a meta site restoration. */
      siteUndeleted?: SiteUndeleted;
      /** Emitted on the first* publish of the meta site (* switching from unpublished to published state). */
      sitePublished?: SitePublished;
      /** Emitted on a meta site unpublish. */
      siteUnpublished?: SiteUnpublished;
      /** Emitted when meta site is marked as template. */
      siteMarkedAsTemplate?: SiteMarkedAsTemplate;
      /** Emitted when meta site is marked as a WixSite. */
      siteMarkedAsWixSite?: SiteMarkedAsWixSite;
      /** Emitted when an application is provisioned (installed). */
      serviceProvisioned?: ServiceProvisioned;
      /** Emitted when an application is removed (uninstalled). */
      serviceRemoved?: ServiceRemoved;
      /** Emitted when meta site name (URL slug) is changed. */
      siteRenamedPayload?: SiteRenamed;
      /** Emitted when meta site was permanently deleted. */
      hardDeleted?: SiteHardDeleted;
      /** Emitted on a namespace change. */
      namespaceChanged?: NamespaceChanged;
      /** Emitted when Studio is attached. */
      studioAssigned?: StudioAssigned;
      /** Emitted when Studio is detached. */
      studioUnassigned?: StudioUnassigned;
  }
  interface Asset {
      /** An application definition id (app_id in dev-center). For legacy reasons may be UUID or a string (from Java Enum). */
      appDefId?: string;
      /** An instance id. For legacy reasons may be UUID or a string. */
      instanceId?: string;
      /** An application state. */
      state?: State;
  }
  enum State {
      UNKNOWN = "UNKNOWN",
      ENABLED = "ENABLED",
      DISABLED = "DISABLED",
      PENDING = "PENDING",
      DEMO = "DEMO"
  }
  interface SiteCreated {
      /** A template identifier (empty if not created from a template). */
      originTemplateId?: string;
      /** An account id of the owner. */
      ownerId?: string;
      /** A context in which meta site was created. */
      context?: SiteCreatedContext;
      /**
       * A meta site id from which this site was created.
       *
       * In case of a creation from a template it's a template id.
       * In case of a site duplication ("Save As" in dashboard or duplicate in UM) it's an id of a source site.
       */
      originMetaSiteId?: string | null;
      /** A meta site name (URL slug). */
      siteName?: string;
      /** A namespace. */
      namespace?: Namespace;
  }
  enum SiteCreatedContext {
      /** A valid option, we don't expose all reasons why site might be created. */
      OTHER = "OTHER",
      /** A meta site was created from template. */
      FROM_TEMPLATE = "FROM_TEMPLATE",
      /** A meta site was created by copying of the transfferred meta site. */
      DUPLICATE_BY_SITE_TRANSFER = "DUPLICATE_BY_SITE_TRANSFER",
      /** A copy of existing meta site. */
      DUPLICATE = "DUPLICATE",
      /** A meta site was created as a transfferred site (copy of the original), old flow, should die soon. */
      OLD_SITE_TRANSFER = "OLD_SITE_TRANSFER",
      /** deprecated A meta site was created for Flash editor. */
      FLASH = "FLASH"
  }
  enum Namespace {
      UNKNOWN_NAMESPACE = "UNKNOWN_NAMESPACE",
      /** Default namespace for UGC sites. MetaSites with this namespace will be shown in a user's site list by default. */
      WIX = "WIX",
      /** ShoutOut stand alone product. These are siteless (no actual Wix site, no HtmlWeb). MetaSites with this namespace will *not* be shown in a user's site list by default. */
      SHOUT_OUT = "SHOUT_OUT",
      /** MetaSites created by the Albums product, they appear as part of the Albums app. MetaSites with this namespace will *not* be shown in a user's site list by default. */
      ALBUMS = "ALBUMS",
      /** Part of the WixStores migration flow, a user tries to migrate and gets this site to view and if the user likes it then stores removes this namespace and deletes the old site with the old stores. MetaSites with this namespace will *not* be shown in a user's site list by default. */
      WIX_STORES_TEST_DRIVE = "WIX_STORES_TEST_DRIVE",
      /** Hotels standalone (siteless). MetaSites with this namespace will *not* be shown in a user's site list by default. */
      HOTELS = "HOTELS",
      /** Clubs siteless MetaSites, a club without a wix website. MetaSites with this namespace will *not* be shown in a user's site list by default. */
      CLUBS = "CLUBS",
      /** A partially created ADI website. MetaSites with this namespace will *not* be shown in a user's site list by default. */
      ONBOARDING_DRAFT = "ONBOARDING_DRAFT",
      /** AppBuilder for AppStudio / shmite (c). MetaSites with this namespace will *not* be shown in a user's site list by default. */
      DEV_SITE = "DEV_SITE",
      /** LogoMaker websites offered to the user after logo purchase. MetaSites with this namespace will *not* be shown in a user's site list by default. */
      LOGOS = "LOGOS",
      /** VideoMaker websites offered to the user after video purchase. MetaSites with this namespace will *not* be shown in a user's site list by default. */
      VIDEO_MAKER = "VIDEO_MAKER",
      /** MetaSites with this namespace will *not* be shown in a user's site list by default. */
      PARTNER_DASHBOARD = "PARTNER_DASHBOARD",
      /** MetaSites with this namespace will *not* be shown in a user's site list by default. */
      DEV_CENTER_COMPANY = "DEV_CENTER_COMPANY",
      /**
       * A draft created by HTML editor on open. Upon "first save" it will be moved to be of WIX domain.
       *
       * Meta site with this namespace will *not* be shown in a user's site list by default.
       */
      HTML_DRAFT = "HTML_DRAFT",
      /**
       * the user-journey for Fitness users who want to start from managing their business instead of designing their website.
       * Will be accessible from Site List and will not have a website app.
       * Once the user attaches a site, the site will become a regular wixsite.
       */
      SITELESS_BUSINESS = "SITELESS_BUSINESS",
      /** Belongs to "strategic products" company. Supports new product in the creator's economy space. */
      CREATOR_ECONOMY = "CREATOR_ECONOMY",
      /** It is to be used in the Business First efforts. */
      DASHBOARD_FIRST = "DASHBOARD_FIRST",
      /** Bookings business flow with no site. */
      ANYWHERE = "ANYWHERE",
      /** Namespace for Headless Backoffice with no editor */
      HEADLESS = "HEADLESS",
      /**
       * Namespace for master site that will exist in parent account that will be referenced by subaccounts
       * The site will be used for account level CSM feature for enterprise
       */
      ACCOUNT_MASTER_CMS = "ACCOUNT_MASTER_CMS",
      /** Rise.ai Siteless account management for Gift Cards and Store Credit. */
      RISE = "RISE",
      /**
       * As part of the branded app new funnel, users now can create a meta site that will be branded app first.
       * There's a blank site behind the scene but it's blank).
       * The Mobile company will be the owner of this namespace.
       */
      BRANDED_FIRST = "BRANDED_FIRST"
  }
  /** Site transferred to another user. */
  interface SiteTransferred {
      /** A previous owner id (user that transfers meta site). */
      oldOwnerId?: string;
      /** A new owner id (user that accepts meta site). */
      newOwnerId?: string;
  }
  /** Soft deletion of the meta site. Could be restored. */
  interface SiteDeleted {
      /** A deletion context. */
      deleteContext?: DeleteContext;
  }
  interface DeleteContext {
      /** When the meta site was deleted. */
      dateDeleted?: Date;
      /** A status. */
      deleteStatus?: DeleteStatus;
      /** A reason (flow). */
      deleteOrigin?: string;
      /** A service that deleted it. */
      initiatorId?: string | null;
  }
  enum DeleteStatus {
      UNKNOWN = "UNKNOWN",
      TRASH = "TRASH",
      DELETED = "DELETED",
      PENDING_PURGE = "PENDING_PURGE"
  }
  /** Restoration of the meta site. */
  interface SiteUndeleted {
  }
  /** First publish of a meta site. Or subsequent publish after unpublish. */
  interface SitePublished {
  }
  interface SiteUnpublished {
      /** A list of URLs previously associated with the meta site. */
      urls?: string[];
  }
  interface SiteMarkedAsTemplate {
  }
  interface SiteMarkedAsWixSite {
  }
  interface ServiceProvisioned {
      /** Either UUID or EmbeddedServiceType. */
      appDefId?: string;
      /** Not only UUID. Something here could be something weird. */
      instanceId?: string;
      /** An instance id from which this instance is originated. */
      originInstanceId?: string;
      /** A version. */
      version?: string | null;
  }
  interface ServiceRemoved {
      /** Either UUID or EmbeddedServiceType. */
      appDefId?: string;
      /** Not only UUID. Something here could be something weird. */
      instanceId?: string;
      /** A version. */
      version?: string | null;
  }
  /** Rename of the site. Meaning, free public url has been changed as well. */
  interface SiteRenamed {
      /** A new meta site name (URL slug). */
      newSiteName?: string;
      /** A previous meta site name (URL slug). */
      oldSiteName?: string;
  }
  /**
   * Hard deletion of the meta site.
   *
   * Could not be restored. Therefore it's desirable to cleanup data.
   */
  interface SiteHardDeleted {
      /** A deletion context. */
      deleteContext?: DeleteContext;
  }
  interface NamespaceChanged {
      /** A previous namespace. */
      oldNamespace?: Namespace;
      /** A new namespace. */
      newNamespace?: Namespace;
  }
  /** Assigned Studio editor */
  interface StudioAssigned {
  }
  /** Unassigned Studio editor */
  interface StudioUnassigned {
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
   * Creates a new Category
   * @param category - Category to be created
   * @internal
   * @documentationMaturity preview
   * @requiredField category
   * @requiredField category.guestCommenting
   * @requiredField category.guestReactions
   * @requiredField category.name
   * @adminMethod
   * @returns The created Category
   */
  function createCategory(category: Category): Promise<Category>;
  /**
   * Get a Category by id
   * @param categoryId - Id of the Category to retrieve
   * @internal
   * @documentationMaturity preview
   * @requiredField categoryId
   * @adminMethod
   * @returns The retrieved Category
   */
  function getCategory(categoryId: string): Promise<Category>;
  /**
   * Update a Category, supports partial update
   * Pass the latest `revision` for a successful update
   * @param _id - Category ID
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField category
   * @requiredField category.name
   * @requiredField category.revision
   * @adminMethod
   * @returns The updated Category
   */
  function updateCategory(_id: string | null, category: UpdateCategory, options?: UpdateCategoryOptions): Promise<Category>;
  interface UpdateCategory {
      /**
       * Category ID
       * @readonly
       */
      _id?: string | null;
      /** Name of the category */
      name?: string | null;
      /** Setting to allow or permit guest commenting */
      guestCommenting?: boolean | null;
      /** Setting to allow or permit guests to add reactions to comments */
      guestReactions?: boolean | null;
      /** The selected type of reactions to be used in comments */
      reactionType?: ReactionTypeType;
      /** The selected type of reactions to be used in replies */
      repliesReactionType?: RepliesReactionTypeType;
      /** The default comment label for marked comment badges */
      markedCommentLabelType?: Type;
      /** Custom label value for marked comment badges */
      customMarkedCommentLabel?: string | null;
      /** The type of icons to be used for comment likes */
      mainReaction?: ReactionIcon;
      /** Category ratings settings. Describes whether ratings are enabled for category and if leaving a rating when placing a comment is mandatory */
      ratingsSettings?: RatingsSettings;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the time this Category was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Category was last updated
       * @readonly
       */
      _updatedDate?: Date;
      /** Category permissions settings. Describes what UoU entities are allowed to perform actions */
      permissionsSettings?: PermissionsSettings;
      /** Indication of whether the category is active and being used in live site */
      active?: boolean | null;
      /** Application owning category */
      appId?: string | null;
  }
  interface UpdateCategoryOptions {
      /**
       * Explicit list of fields to update
       * @internal
       */
      mask?: string[];
  }
  /**
   * Delete a Category
   * @param categoryId - Id of the Category to delete
   * @internal
   * @documentationMaturity preview
   * @requiredField categoryId
   * @adminMethod
   */
  function deleteCategory(categoryId: string, options?: DeleteCategoryOptions): Promise<void>;
  interface DeleteCategoryOptions {
      /** The revision of the Category */
      revision?: string;
  }
  /**
   * Query Category using [WQL - Wix Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language)
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function queryCategory(): CategoriesQueryBuilder;
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
      eq: (propertyName: '_id' | 'name' | 'reactionType' | 'repliesReactionType' | 'markedCommentLabelType' | 'mainReaction.iconType' | 'ratingsSettings.ratingsEnabled' | 'ratingsSettings.ratingRequired', value: any) => CategoriesQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id' | 'name' | 'reactionType' | 'repliesReactionType' | 'markedCommentLabelType' | 'mainReaction.iconType' | 'ratingsSettings.ratingsEnabled' | 'ratingsSettings.ratingRequired', value: any) => CategoriesQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id' | 'name' | 'reactionType' | 'repliesReactionType' | 'markedCommentLabelType' | 'mainReaction.iconType', value: any) => CategoriesQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'name'>) => CategoriesQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'name'>) => CategoriesQueryBuilder;
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
  
  type commentsV1Category_universal_d_Category = Category;
  type commentsV1Category_universal_d_ReactionTypeType = ReactionTypeType;
  const commentsV1Category_universal_d_ReactionTypeType: typeof ReactionTypeType;
  type commentsV1Category_universal_d_RepliesReactionTypeType = RepliesReactionTypeType;
  const commentsV1Category_universal_d_RepliesReactionTypeType: typeof RepliesReactionTypeType;
  type commentsV1Category_universal_d_Type = Type;
  const commentsV1Category_universal_d_Type: typeof Type;
  type commentsV1Category_universal_d_ReactionIcon = ReactionIcon;
  type commentsV1Category_universal_d_ReactionIconIconsOneOf = ReactionIconIconsOneOf;
  type commentsV1Category_universal_d_IconTypeType = IconTypeType;
  const commentsV1Category_universal_d_IconTypeType: typeof IconTypeType;
  type commentsV1Category_universal_d_RatingsSettings = RatingsSettings;
  type commentsV1Category_universal_d_PermissionsSettings = PermissionsSettings;
  type commentsV1Category_universal_d_Permissions = Permissions;
  type commentsV1Category_universal_d_Role = Role;
  const commentsV1Category_universal_d_Role: typeof Role;
  type commentsV1Category_universal_d_CreateCategoryRequest = CreateCategoryRequest;
  type commentsV1Category_universal_d_CreateCategoryResponse = CreateCategoryResponse;
  type commentsV1Category_universal_d_GetCategoryRequest = GetCategoryRequest;
  type commentsV1Category_universal_d_GetCategoryResponse = GetCategoryResponse;
  type commentsV1Category_universal_d_UpdateCategoryRequest = UpdateCategoryRequest;
  type commentsV1Category_universal_d_UpdateCategoryResponse = UpdateCategoryResponse;
  type commentsV1Category_universal_d_DeleteCategoryRequest = DeleteCategoryRequest;
  type commentsV1Category_universal_d_DeleteCategoryResponse = DeleteCategoryResponse;
  type commentsV1Category_universal_d_QueryCategoryRequest = QueryCategoryRequest;
  type commentsV1Category_universal_d_QueryV2 = QueryV2;
  type commentsV1Category_universal_d_QueryV2PagingMethodOneOf = QueryV2PagingMethodOneOf;
  type commentsV1Category_universal_d_Sorting = Sorting;
  type commentsV1Category_universal_d_SortOrder = SortOrder;
  const commentsV1Category_universal_d_SortOrder: typeof SortOrder;
  type commentsV1Category_universal_d_Paging = Paging;
  type commentsV1Category_universal_d_CursorPaging = CursorPaging;
  type commentsV1Category_universal_d_QueryCategoryResponse = QueryCategoryResponse;
  type commentsV1Category_universal_d_CursorPagingMetadata = CursorPagingMetadata;
  type commentsV1Category_universal_d_Cursors = Cursors;
  type commentsV1Category_universal_d_MetaSiteSpecialEvent = MetaSiteSpecialEvent;
  type commentsV1Category_universal_d_MetaSiteSpecialEventPayloadOneOf = MetaSiteSpecialEventPayloadOneOf;
  type commentsV1Category_universal_d_Asset = Asset;
  type commentsV1Category_universal_d_State = State;
  const commentsV1Category_universal_d_State: typeof State;
  type commentsV1Category_universal_d_SiteCreated = SiteCreated;
  type commentsV1Category_universal_d_SiteCreatedContext = SiteCreatedContext;
  const commentsV1Category_universal_d_SiteCreatedContext: typeof SiteCreatedContext;
  type commentsV1Category_universal_d_Namespace = Namespace;
  const commentsV1Category_universal_d_Namespace: typeof Namespace;
  type commentsV1Category_universal_d_SiteTransferred = SiteTransferred;
  type commentsV1Category_universal_d_SiteDeleted = SiteDeleted;
  type commentsV1Category_universal_d_DeleteContext = DeleteContext;
  type commentsV1Category_universal_d_DeleteStatus = DeleteStatus;
  const commentsV1Category_universal_d_DeleteStatus: typeof DeleteStatus;
  type commentsV1Category_universal_d_SiteUndeleted = SiteUndeleted;
  type commentsV1Category_universal_d_SitePublished = SitePublished;
  type commentsV1Category_universal_d_SiteUnpublished = SiteUnpublished;
  type commentsV1Category_universal_d_SiteMarkedAsTemplate = SiteMarkedAsTemplate;
  type commentsV1Category_universal_d_SiteMarkedAsWixSite = SiteMarkedAsWixSite;
  type commentsV1Category_universal_d_ServiceProvisioned = ServiceProvisioned;
  type commentsV1Category_universal_d_ServiceRemoved = ServiceRemoved;
  type commentsV1Category_universal_d_SiteRenamed = SiteRenamed;
  type commentsV1Category_universal_d_SiteHardDeleted = SiteHardDeleted;
  type commentsV1Category_universal_d_NamespaceChanged = NamespaceChanged;
  type commentsV1Category_universal_d_StudioAssigned = StudioAssigned;
  type commentsV1Category_universal_d_StudioUnassigned = StudioUnassigned;
  type commentsV1Category_universal_d_MessageEnvelope = MessageEnvelope;
  type commentsV1Category_universal_d_IdentificationData = IdentificationData;
  type commentsV1Category_universal_d_IdentificationDataIdOneOf = IdentificationDataIdOneOf;
  type commentsV1Category_universal_d_WebhookIdentityType = WebhookIdentityType;
  const commentsV1Category_universal_d_WebhookIdentityType: typeof WebhookIdentityType;
  const commentsV1Category_universal_d_createCategory: typeof createCategory;
  const commentsV1Category_universal_d_getCategory: typeof getCategory;
  const commentsV1Category_universal_d_updateCategory: typeof updateCategory;
  type commentsV1Category_universal_d_UpdateCategory = UpdateCategory;
  type commentsV1Category_universal_d_UpdateCategoryOptions = UpdateCategoryOptions;
  const commentsV1Category_universal_d_deleteCategory: typeof deleteCategory;
  type commentsV1Category_universal_d_DeleteCategoryOptions = DeleteCategoryOptions;
  const commentsV1Category_universal_d_queryCategory: typeof queryCategory;
  type commentsV1Category_universal_d_CategoriesQueryResult = CategoriesQueryResult;
  type commentsV1Category_universal_d_CategoriesQueryBuilder = CategoriesQueryBuilder;
  namespace commentsV1Category_universal_d {
    export {
      commentsV1Category_universal_d_Category as Category,
      commentsV1Category_universal_d_ReactionTypeType as ReactionTypeType,
      commentsV1Category_universal_d_RepliesReactionTypeType as RepliesReactionTypeType,
      commentsV1Category_universal_d_Type as Type,
      commentsV1Category_universal_d_ReactionIcon as ReactionIcon,
      commentsV1Category_universal_d_ReactionIconIconsOneOf as ReactionIconIconsOneOf,
      commentsV1Category_universal_d_IconTypeType as IconTypeType,
      commentsV1Category_universal_d_RatingsSettings as RatingsSettings,
      commentsV1Category_universal_d_PermissionsSettings as PermissionsSettings,
      commentsV1Category_universal_d_Permissions as Permissions,
      commentsV1Category_universal_d_Role as Role,
      commentsV1Category_universal_d_CreateCategoryRequest as CreateCategoryRequest,
      commentsV1Category_universal_d_CreateCategoryResponse as CreateCategoryResponse,
      commentsV1Category_universal_d_GetCategoryRequest as GetCategoryRequest,
      commentsV1Category_universal_d_GetCategoryResponse as GetCategoryResponse,
      commentsV1Category_universal_d_UpdateCategoryRequest as UpdateCategoryRequest,
      commentsV1Category_universal_d_UpdateCategoryResponse as UpdateCategoryResponse,
      commentsV1Category_universal_d_DeleteCategoryRequest as DeleteCategoryRequest,
      commentsV1Category_universal_d_DeleteCategoryResponse as DeleteCategoryResponse,
      commentsV1Category_universal_d_QueryCategoryRequest as QueryCategoryRequest,
      commentsV1Category_universal_d_QueryV2 as QueryV2,
      commentsV1Category_universal_d_QueryV2PagingMethodOneOf as QueryV2PagingMethodOneOf,
      commentsV1Category_universal_d_Sorting as Sorting,
      commentsV1Category_universal_d_SortOrder as SortOrder,
      commentsV1Category_universal_d_Paging as Paging,
      commentsV1Category_universal_d_CursorPaging as CursorPaging,
      commentsV1Category_universal_d_QueryCategoryResponse as QueryCategoryResponse,
      commentsV1Category_universal_d_CursorPagingMetadata as CursorPagingMetadata,
      commentsV1Category_universal_d_Cursors as Cursors,
      DomainEvent$1 as DomainEvent,
      DomainEventBodyOneOf$1 as DomainEventBodyOneOf,
      EntityCreatedEvent$1 as EntityCreatedEvent,
      EntityUpdatedEvent$1 as EntityUpdatedEvent,
      EntityDeletedEvent$1 as EntityDeletedEvent,
      ActionEvent$1 as ActionEvent,
      Empty$1 as Empty,
      commentsV1Category_universal_d_MetaSiteSpecialEvent as MetaSiteSpecialEvent,
      commentsV1Category_universal_d_MetaSiteSpecialEventPayloadOneOf as MetaSiteSpecialEventPayloadOneOf,
      commentsV1Category_universal_d_Asset as Asset,
      commentsV1Category_universal_d_State as State,
      commentsV1Category_universal_d_SiteCreated as SiteCreated,
      commentsV1Category_universal_d_SiteCreatedContext as SiteCreatedContext,
      commentsV1Category_universal_d_Namespace as Namespace,
      commentsV1Category_universal_d_SiteTransferred as SiteTransferred,
      commentsV1Category_universal_d_SiteDeleted as SiteDeleted,
      commentsV1Category_universal_d_DeleteContext as DeleteContext,
      commentsV1Category_universal_d_DeleteStatus as DeleteStatus,
      commentsV1Category_universal_d_SiteUndeleted as SiteUndeleted,
      commentsV1Category_universal_d_SitePublished as SitePublished,
      commentsV1Category_universal_d_SiteUnpublished as SiteUnpublished,
      commentsV1Category_universal_d_SiteMarkedAsTemplate as SiteMarkedAsTemplate,
      commentsV1Category_universal_d_SiteMarkedAsWixSite as SiteMarkedAsWixSite,
      commentsV1Category_universal_d_ServiceProvisioned as ServiceProvisioned,
      commentsV1Category_universal_d_ServiceRemoved as ServiceRemoved,
      commentsV1Category_universal_d_SiteRenamed as SiteRenamed,
      commentsV1Category_universal_d_SiteHardDeleted as SiteHardDeleted,
      commentsV1Category_universal_d_NamespaceChanged as NamespaceChanged,
      commentsV1Category_universal_d_StudioAssigned as StudioAssigned,
      commentsV1Category_universal_d_StudioUnassigned as StudioUnassigned,
      commentsV1Category_universal_d_MessageEnvelope as MessageEnvelope,
      commentsV1Category_universal_d_IdentificationData as IdentificationData,
      commentsV1Category_universal_d_IdentificationDataIdOneOf as IdentificationDataIdOneOf,
      commentsV1Category_universal_d_WebhookIdentityType as WebhookIdentityType,
      commentsV1Category_universal_d_createCategory as createCategory,
      commentsV1Category_universal_d_getCategory as getCategory,
      commentsV1Category_universal_d_updateCategory as updateCategory,
      commentsV1Category_universal_d_UpdateCategory as UpdateCategory,
      commentsV1Category_universal_d_UpdateCategoryOptions as UpdateCategoryOptions,
      commentsV1Category_universal_d_deleteCategory as deleteCategory,
      commentsV1Category_universal_d_DeleteCategoryOptions as DeleteCategoryOptions,
      commentsV1Category_universal_d_queryCategory as queryCategory,
      commentsV1Category_universal_d_CategoriesQueryResult as CategoriesQueryResult,
      commentsV1Category_universal_d_CategoriesQueryBuilder as CategoriesQueryBuilder,
    };
  }
  
  /** CommentsSubscription is the main entity for Comments subscriptions service */
  interface CommentsSubscription extends CommentsSubscriptionSubscriptionTypeOneOf {
      resource?: ResourceData;
      comment?: CommentData;
      /**
       * Subscription status. Read-only field
       * @readonly
       */
      subscriptionStatus?: Status;
  }
  /** @oneof */
  interface CommentsSubscriptionSubscriptionTypeOneOf {
      resource?: ResourceData;
      comment?: CommentData;
  }
  /** ContextId and resource Id, to which subscriptions are attached to */
  interface ResourceData {
      contextId?: string;
      resourceId?: string;
  }
  /** Context Id, resource Id and comment Id, to which subscriptions are attached to */
  interface CommentData {
      contextId?: string;
      resourceId?: string;
      commentId?: string;
  }
  enum Status {
      UNKNOWN = "UNKNOWN",
      UNSUBSCRIBED = "UNSUBSCRIBED",
      SUBSCRIBED = "SUBSCRIBED"
  }
  interface SubscribeRequest {
      /** Entity to which the user has to be subscribed to */
      subscription: CommentsSubscription;
  }
  interface SubscribeResponse {
  }
  interface UnsubscribeRequest {
      /** Entity from which the user is unsubscribing */
      subscription: CommentsSubscription;
  }
  interface UnsubscribeResponse {
  }
  interface GetSubscriptionRequest {
      /** Entity for which to get subscription status */
      subscription: CommentsSubscription;
  }
  interface GetSubscriptionResponse {
      /** Comments subscription with subscription status data */
      subscription?: CommentsSubscription;
  }
  interface ListSubscriptionsRequest {
      /** Comments subscriptions for which to get subscription statuses */
      subscriptions: CommentsSubscription[];
  }
  interface ListSubscriptionsResponse {
      /** Comments subscriptions with subscription statuses attached */
      subscriptions?: CommentsSubscription[];
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
  interface Empty {
  }
  /**
   * Subscribes user to specified entity topic
   * @param subscription - Entity to which the user has to be subscribed to
   * @internal
   * @documentationMaturity preview
   * @requiredField subscription
   * @adminMethod
   */
  function subscribe(subscription: CommentsSubscription): Promise<void>;
  /**
   * Unsubscribes user from specified entity topic
   * @param subscription - Entity from which the user is unsubscribing
   * @internal
   * @documentationMaturity preview
   * @requiredField subscription
   * @adminMethod
   */
  function unsubscribe(subscription: CommentsSubscription): Promise<void>;
  /**
   * Gets subscription and its status
   * @param subscription - Entity for which to get subscription status
   * @internal
   * @documentationMaturity preview
   * @requiredField subscription
   * @adminMethod
   */
  function getSubscription(subscription: CommentsSubscription): Promise<GetSubscriptionResponse>;
  /**
   * List of subscriptions with their status
   * @param subscriptions - Comments subscriptions for which to get subscription statuses
   * @internal
   * @documentationMaturity preview
   * @requiredField subscriptions
   * @adminMethod
   */
  function listSubscriptions(subscriptions: CommentsSubscription[]): Promise<ListSubscriptionsResponse>;
  
  type commentsV1CommentsSubscription_universal_d_CommentsSubscription = CommentsSubscription;
  type commentsV1CommentsSubscription_universal_d_CommentsSubscriptionSubscriptionTypeOneOf = CommentsSubscriptionSubscriptionTypeOneOf;
  type commentsV1CommentsSubscription_universal_d_ResourceData = ResourceData;
  type commentsV1CommentsSubscription_universal_d_CommentData = CommentData;
  type commentsV1CommentsSubscription_universal_d_Status = Status;
  const commentsV1CommentsSubscription_universal_d_Status: typeof Status;
  type commentsV1CommentsSubscription_universal_d_SubscribeRequest = SubscribeRequest;
  type commentsV1CommentsSubscription_universal_d_SubscribeResponse = SubscribeResponse;
  type commentsV1CommentsSubscription_universal_d_UnsubscribeRequest = UnsubscribeRequest;
  type commentsV1CommentsSubscription_universal_d_UnsubscribeResponse = UnsubscribeResponse;
  type commentsV1CommentsSubscription_universal_d_GetSubscriptionRequest = GetSubscriptionRequest;
  type commentsV1CommentsSubscription_universal_d_GetSubscriptionResponse = GetSubscriptionResponse;
  type commentsV1CommentsSubscription_universal_d_ListSubscriptionsRequest = ListSubscriptionsRequest;
  type commentsV1CommentsSubscription_universal_d_ListSubscriptionsResponse = ListSubscriptionsResponse;
  type commentsV1CommentsSubscription_universal_d_DomainEvent = DomainEvent;
  type commentsV1CommentsSubscription_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type commentsV1CommentsSubscription_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type commentsV1CommentsSubscription_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type commentsV1CommentsSubscription_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type commentsV1CommentsSubscription_universal_d_ActionEvent = ActionEvent;
  type commentsV1CommentsSubscription_universal_d_Empty = Empty;
  const commentsV1CommentsSubscription_universal_d_subscribe: typeof subscribe;
  const commentsV1CommentsSubscription_universal_d_unsubscribe: typeof unsubscribe;
  const commentsV1CommentsSubscription_universal_d_getSubscription: typeof getSubscription;
  const commentsV1CommentsSubscription_universal_d_listSubscriptions: typeof listSubscriptions;
  namespace commentsV1CommentsSubscription_universal_d {
    export {
      commentsV1CommentsSubscription_universal_d_CommentsSubscription as CommentsSubscription,
      commentsV1CommentsSubscription_universal_d_CommentsSubscriptionSubscriptionTypeOneOf as CommentsSubscriptionSubscriptionTypeOneOf,
      commentsV1CommentsSubscription_universal_d_ResourceData as ResourceData,
      commentsV1CommentsSubscription_universal_d_CommentData as CommentData,
      commentsV1CommentsSubscription_universal_d_Status as Status,
      commentsV1CommentsSubscription_universal_d_SubscribeRequest as SubscribeRequest,
      commentsV1CommentsSubscription_universal_d_SubscribeResponse as SubscribeResponse,
      commentsV1CommentsSubscription_universal_d_UnsubscribeRequest as UnsubscribeRequest,
      commentsV1CommentsSubscription_universal_d_UnsubscribeResponse as UnsubscribeResponse,
      commentsV1CommentsSubscription_universal_d_GetSubscriptionRequest as GetSubscriptionRequest,
      commentsV1CommentsSubscription_universal_d_GetSubscriptionResponse as GetSubscriptionResponse,
      commentsV1CommentsSubscription_universal_d_ListSubscriptionsRequest as ListSubscriptionsRequest,
      commentsV1CommentsSubscription_universal_d_ListSubscriptionsResponse as ListSubscriptionsResponse,
      commentsV1CommentsSubscription_universal_d_DomainEvent as DomainEvent,
      commentsV1CommentsSubscription_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      commentsV1CommentsSubscription_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      commentsV1CommentsSubscription_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      commentsV1CommentsSubscription_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      commentsV1CommentsSubscription_universal_d_ActionEvent as ActionEvent,
      commentsV1CommentsSubscription_universal_d_Empty as Empty,
      commentsV1CommentsSubscription_universal_d_subscribe as subscribe,
      commentsV1CommentsSubscription_universal_d_unsubscribe as unsubscribe,
      commentsV1CommentsSubscription_universal_d_getSubscription as getSubscription,
      commentsV1CommentsSubscription_universal_d_listSubscriptions as listSubscriptions,
    };
  }
  
  export { commentsV1Category_universal_d as categories, commentsV2Comment_universal_d as comments, commentsV1CommentsSubscription_universal_d as subscriptions, commentsCategoriesV1CommentsWidget_universal_d as widgets };
}
