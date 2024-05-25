declare module "wix-multilingual.v2" {
  /**
   * Translatable represents a single unit of content to translate.
   * If was successfully translated by the translation engine, the response will contain the content in the target language as well.
   * Note: A string or rich content node can be up to 5000 characters long. Rich content with nodes containing longer text will be rejected.
   */
  interface TranslatableContent extends TranslatableContentContentOneOf {
      /** Use this field to send plain text string */
      plainTextContent?: string;
      /** Use this field to send HTML-encoded string */
      htmlContent?: string;
      /** Use this field to send rich content. */
      richContent?: RichContent$1;
      /** The original ID of the content item. */
      _id?: string | null;
      /** The format of the content item. */
      format?: Format;
  }
  /** @oneof */
  interface TranslatableContentContentOneOf {
      /** Use this field to send plain text string */
      plainTextContent?: string;
      /** Use this field to send HTML-encoded string */
      htmlContent?: string;
      /** Use this field to send rich content. */
      richContent?: RichContent$1;
  }
  enum Format {
      /** Unspecified format. Is automatically rejected. */
      UNKNOWN_FORMAT = "UNKNOWN_FORMAT",
      /** Plain text content. */
      PLAIN_TEXT = "PLAIN_TEXT",
      /** HTML content. */
      HTML = "HTML",
      /** Rich Content. */
      RICH = "RICH"
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
  interface Settings$1 {
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
      settings?: Settings$1;
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
  interface MachineTranslateRequest {
      /** Original language of the text */
      sourceLanguage: SupportedLanguage;
      /** The language to translate to */
      targetLanguage: SupportedLanguage;
      /** The content item to translate */
      contentToTranslate: TranslatableContent;
  }
  enum SupportedLanguage {
      /** Undefined Language */
      UNDEFINED_SUPPORTED_LANGUAGE = "UNDEFINED_SUPPORTED_LANGUAGE",
      /** Afrikaans */
      AF = "AF",
      /** Albanian */
      SQ = "SQ",
      /** Amharic */
      AM = "AM",
      /** Arabic */
      AR = "AR",
      /** Armenian */
      HY = "HY",
      /** Assamese */
      AS = "AS",
      /** Aymara */
      AY = "AY",
      /** Azerbaijani */
      AZ = "AZ",
      /** Bambara */
      BM = "BM",
      /** Basque */
      EU = "EU",
      /** Belarusian */
      BE = "BE",
      /** Bengali */
      BN = "BN",
      /** Bhojpuri */
      BHO = "BHO",
      /** Bosnian */
      BS = "BS",
      /** Bulgarian */
      BG = "BG",
      /** Catalan */
      CA = "CA",
      /** Cebuano */
      CEB = "CEB",
      /** Chinese (Simplified) */
      ZH_CN = "ZH_CN",
      /** Chinese (Traditional) */
      ZH_TW = "ZH_TW",
      /** Chinese (Simplified) */
      ZH = "ZH",
      /** Corsican */
      CO = "CO",
      /** Croatian */
      HR = "HR",
      /** Czech */
      CS = "CS",
      /** Danish */
      DA = "DA",
      /** Dhivehi */
      DV = "DV",
      /** Dogri */
      DOI = "DOI",
      /** Dutch */
      NL = "NL",
      /** English */
      EN = "EN",
      /** Esperanto */
      EO = "EO",
      /** Estonian */
      ET = "ET",
      /** Ewe */
      EE = "EE",
      /** Filipino (Tagalog) */
      FIL = "FIL",
      /** Finnish */
      FI = "FI",
      /** French */
      FR = "FR",
      /** Frisian */
      FY = "FY",
      /** Galician */
      GL = "GL",
      /** Georgian */
      KA = "KA",
      /** German */
      DE = "DE",
      /** Greek */
      EL = "EL",
      /** Guarani */
      GN = "GN",
      /** Gujarati */
      GU = "GU",
      /** Haitian Creole */
      HT = "HT",
      /** Hausa */
      HA = "HA",
      /** Hawaiian */
      HAW = "HAW",
      /** Hebrew */
      HE = "HE",
      /** Hindi */
      HI = "HI",
      /** Hmong */
      HMN = "HMN",
      /** Hungarian */
      HU = "HU",
      /** Icelandic */
      IS = "IS",
      /** Igbo */
      IG = "IG",
      /** Ilocano */
      ILO = "ILO",
      /** Indonesian */
      ID = "ID",
      /** Irish */
      GA = "GA",
      /** Italian */
      IT = "IT",
      /** Japanese */
      JA = "JA",
      /** Javanese */
      JW = "JW",
      /** Kannada */
      KN = "KN",
      /** Kazakh */
      KK = "KK",
      /** Khmer */
      KM = "KM",
      /** Kinyarwanda */
      RW = "RW",
      /** Konkani */
      GOM = "GOM",
      /** Korean */
      KO = "KO",
      /** Krio */
      KRI = "KRI",
      /** Kurdish */
      KU = "KU",
      /** Kurdish (Sorani) */
      CKB = "CKB",
      /** Kyrgyz */
      KY = "KY",
      /** Lao */
      LO = "LO",
      /** Latin */
      LA = "LA",
      /** Latvian */
      LV = "LV",
      /** Lingala */
      LN = "LN",
      /** Lithuanian */
      LT = "LT",
      /** Luganda */
      LG = "LG",
      /** Luxembourgish */
      LB = "LB",
      /** Macedonian */
      MK = "MK",
      /** Maithili */
      MAI = "MAI",
      /** Malagasy */
      MG = "MG",
      /** Malay */
      MS = "MS",
      /** Malayalam */
      ML = "ML",
      /** Maltese */
      MT = "MT",
      /** Maori */
      MI = "MI",
      /** Marathi */
      MR = "MR",
      /** Mriteilon (Manipuri) */
      MNI_MTEI = "MNI_MTEI",
      /** Mizo */
      LUS = "LUS",
      /** Mongolian */
      MN = "MN",
      /** Myanmar (Burmese) */
      MY = "MY",
      /** Nepali */
      NE = "NE",
      /** Norwegian */
      NO = "NO",
      /** Nyanja (Chichewa) */
      NY = "NY",
      /** Odia (Oriya) */
      OR = "OR",
      /** Oromo */
      OM = "OM",
      /** Pashto */
      PS = "PS",
      /** Persian */
      FA = "FA",
      /** Polish */
      PL = "PL",
      /** Portuguese (Portugal, Brazil) */
      PT = "PT",
      /** Punjabi */
      PA = "PA",
      /** Quechua */
      QU = "QU",
      /** Romanian */
      RO = "RO",
      /** Russian */
      RU = "RU",
      /** Samoan */
      SM = "SM",
      /** Sanskrit */
      SA = "SA",
      /** Scots Gaelic */
      GD = "GD",
      /** Sepedi */
      NSO = "NSO",
      /** Serbian */
      SR = "SR",
      /** Sesotho */
      ST = "ST",
      /** Shona */
      SN = "SN",
      /** Sindhi */
      SD = "SD",
      /** Sinhala (Sinhalese) */
      SI = "SI",
      /** Slovak */
      SK = "SK",
      /** Slovenian */
      SL = "SL",
      /** Somali */
      SO = "SO",
      /** Spanish */
      ES = "ES",
      /** Sundanese */
      SU = "SU",
      /** Swahili */
      SW = "SW",
      /** Swedish */
      SV = "SV",
      /** Tagalog (Filipino) */
      TL = "TL",
      /** Tajik */
      TG = "TG",
      /** Tamil */
      TA = "TA",
      /** Tatar */
      TT = "TT",
      /** Telugu */
      TE = "TE",
      /** Thai */
      TH = "TH",
      /** Tigrinya */
      TI = "TI",
      /** Tsonga */
      TS = "TS",
      /** Turkish */
      TR = "TR",
      /** Turkmen */
      TK = "TK",
      /** Twi (Akan) */
      AK = "AK",
      /** Ukrainian */
      UK = "UK",
      /** Urdu */
      UR = "UR",
      /** Uyghur */
      UG = "UG",
      /** Uzbek */
      UZ = "UZ",
      /** Vietnamese */
      VI = "VI",
      /** Welsh */
      CY = "CY",
      /** Xhosa */
      XH = "XH",
      /** Yiddish */
      YI = "YI",
      /** Yoruba */
      YO = "YO",
      /** Zulu */
      ZU = "ZU"
  }
  interface MachineTranslateResponse {
      /** The item with the content translated by the engine */
      translatedContent?: TranslatableContent;
  }
  interface NotEnoughCreditsError {
      /** The number of credits required to translate the content in the request. */
      creditsRequired?: number;
  }
  interface TextTooLongError {
      /** The maximum length of text that can be translated. */
      maxLength?: number;
      /** The actual length of the text that was sent for translation. */
      actualLength?: number;
  }
  interface UnknownFormatError {
  }
  interface BulkMachineTranslateRequest {
      /** Original language of the text */
      sourceLanguage: SupportedLanguage;
      /** The language to translate to */
      targetLanguage: SupportedLanguage;
      /** A sequence of content items to translate */
      contentToTranslate?: TranslatableContent[];
  }
  interface BulkMachineTranslateResponse {
      /** The bulk translation results. */
      results?: BulkTranslateResult[];
      /** The total translation operation metadata. */
      bulkActionMetadata?: BulkActionMetadata$1;
  }
  interface BulkTranslateResult {
      /** The metadata of the current translate item. */
      itemMetadata?: ItemMetadata$1;
      /** The translated item when the operation is successful */
      item?: TranslatableContent;
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
  /**
   * Translates a single content item from one supported language to another.
   * @param sourceLanguage - Original language of the text
   * @public
   * @documentationMaturity preview
   * @requiredField options
   * @requiredField options.contentToTranslate
   * @requiredField options.targetLanguage
   * @requiredField sourceLanguage
   */
  function machineTranslate(sourceLanguage: SupportedLanguage, options: MachineTranslateOptions): Promise<MachineTranslateResponse>;
  interface MachineTranslateOptions {
      /** The language to translate to */
      targetLanguage: SupportedLanguage;
      /** The content item to translate */
      contentToTranslate: TranslatableContent;
  }
  /**
   * Translates a collection of content items from one supported language to another.
   * @param sourceLanguage - Original language of the text
   * @public
   * @documentationMaturity preview
   * @requiredField options.targetLanguage
   * @requiredField sourceLanguage
   */
  function bulkMachineTranslate(sourceLanguage: SupportedLanguage, options?: BulkMachineTranslateOptions): Promise<BulkMachineTranslateResponse>;
  interface BulkMachineTranslateOptions {
      /** The language to translate to */
      targetLanguage: SupportedLanguage;
      /** A sequence of content items to translate */
      contentToTranslate?: TranslatableContent[];
  }
  
  type multilingualMachineV3TranslatableContent_universal_d_TranslatableContent = TranslatableContent;
  type multilingualMachineV3TranslatableContent_universal_d_TranslatableContentContentOneOf = TranslatableContentContentOneOf;
  type multilingualMachineV3TranslatableContent_universal_d_Format = Format;
  const multilingualMachineV3TranslatableContent_universal_d_Format: typeof Format;
  type multilingualMachineV3TranslatableContent_universal_d_MachineTranslateRequest = MachineTranslateRequest;
  type multilingualMachineV3TranslatableContent_universal_d_SupportedLanguage = SupportedLanguage;
  const multilingualMachineV3TranslatableContent_universal_d_SupportedLanguage: typeof SupportedLanguage;
  type multilingualMachineV3TranslatableContent_universal_d_MachineTranslateResponse = MachineTranslateResponse;
  type multilingualMachineV3TranslatableContent_universal_d_NotEnoughCreditsError = NotEnoughCreditsError;
  type multilingualMachineV3TranslatableContent_universal_d_TextTooLongError = TextTooLongError;
  type multilingualMachineV3TranslatableContent_universal_d_UnknownFormatError = UnknownFormatError;
  type multilingualMachineV3TranslatableContent_universal_d_BulkMachineTranslateRequest = BulkMachineTranslateRequest;
  type multilingualMachineV3TranslatableContent_universal_d_BulkMachineTranslateResponse = BulkMachineTranslateResponse;
  type multilingualMachineV3TranslatableContent_universal_d_BulkTranslateResult = BulkTranslateResult;
  const multilingualMachineV3TranslatableContent_universal_d_machineTranslate: typeof machineTranslate;
  type multilingualMachineV3TranslatableContent_universal_d_MachineTranslateOptions = MachineTranslateOptions;
  const multilingualMachineV3TranslatableContent_universal_d_bulkMachineTranslate: typeof bulkMachineTranslate;
  type multilingualMachineV3TranslatableContent_universal_d_BulkMachineTranslateOptions = BulkMachineTranslateOptions;
  namespace multilingualMachineV3TranslatableContent_universal_d {
    export {
      multilingualMachineV3TranslatableContent_universal_d_TranslatableContent as TranslatableContent,
      multilingualMachineV3TranslatableContent_universal_d_TranslatableContentContentOneOf as TranslatableContentContentOneOf,
      multilingualMachineV3TranslatableContent_universal_d_Format as Format,
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
      Settings$1 as Settings,
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
      multilingualMachineV3TranslatableContent_universal_d_MachineTranslateRequest as MachineTranslateRequest,
      multilingualMachineV3TranslatableContent_universal_d_SupportedLanguage as SupportedLanguage,
      multilingualMachineV3TranslatableContent_universal_d_MachineTranslateResponse as MachineTranslateResponse,
      multilingualMachineV3TranslatableContent_universal_d_NotEnoughCreditsError as NotEnoughCreditsError,
      multilingualMachineV3TranslatableContent_universal_d_TextTooLongError as TextTooLongError,
      multilingualMachineV3TranslatableContent_universal_d_UnknownFormatError as UnknownFormatError,
      multilingualMachineV3TranslatableContent_universal_d_BulkMachineTranslateRequest as BulkMachineTranslateRequest,
      multilingualMachineV3TranslatableContent_universal_d_BulkMachineTranslateResponse as BulkMachineTranslateResponse,
      multilingualMachineV3TranslatableContent_universal_d_BulkTranslateResult as BulkTranslateResult,
      ItemMetadata$1 as ItemMetadata,
      ApplicationError$1 as ApplicationError,
      BulkActionMetadata$1 as BulkActionMetadata,
      multilingualMachineV3TranslatableContent_universal_d_machineTranslate as machineTranslate,
      multilingualMachineV3TranslatableContent_universal_d_MachineTranslateOptions as MachineTranslateOptions,
      multilingualMachineV3TranslatableContent_universal_d_bulkMachineTranslate as bulkMachineTranslate,
      multilingualMachineV3TranslatableContent_universal_d_BulkMachineTranslateOptions as BulkMachineTranslateOptions,
    };
  }
  
  interface Content {
      /**
       * Content ID.
       * @readonly
       */
      _id?: string | null;
      /** Schema unique identifier */
      schemaId?: string;
      /** Unique identifier that represents a specific entity in the app */
      entityId?: string;
      /** Indicates the locale of this content */
      locale?: string;
      /** List of fields localized in the given language */
      fields?: Record<string, ContentField>;
      /** Optional field that will group in the UI contents with the same group name */
      parentEntityId?: string | null;
      /**
       * The aggregated published status across all content fields
       * @readonly
       */
      publishStatus?: PublishStatus;
      /**
       * Contains the value of the preview field according to the schema if exists.
       * @readonly
       */
      previewField?: string | null;
      /** @readonly */
      _createdDate?: Date;
      /** @readonly */
      _updatedDate?: Date;
  }
  interface ContentField extends ContentFieldValueOneOf {
      /** Field actual localized content as simple text type */
      textValue?: string;
      /** Use this field to send rich content. */
      richContent?: RichContent;
      /** Image media item */
      image?: string;
      /** Video media item */
      video?: string;
      /** Document media item */
      document?: string;
      /**
       * Field unique identifier.
       * @readonly
       */
      _id?: string;
      /** Is content published to live site or not */
      published?: boolean;
      /** Describes the updater identity (site owner / app / auto translator) */
      updatedBy?: UpdaterIdentity;
      /**
       * The corresponding field key in the schema in a clean format (nothing between the parenthesis), must have a matching schema field key.
       * @readonly
       */
      schemaFieldKey?: string;
      /**
       * Index is populated according to index of schema field (if exists), and grouping repeated fields.
       * @readonly
       */
      index?: number;
  }
  /** @oneof */
  interface ContentFieldValueOneOf {
      /** Field actual localized content as simple text type */
      textValue?: string;
      /** Use this field to send rich content. */
      richContent?: RichContent;
      /** Image media item */
      image?: string;
      /** Video media item */
      video?: string;
      /** Document media item */
      document?: string;
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
  interface Settings {
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
  enum UpdaterIdentity {
      UNKNOWN_UPDATER_IDENTITY = "UNKNOWN_UPDATER_IDENTITY",
      /** User identity */
      USER = "USER",
      /** External */
      EXTERNAL_APP = "EXTERNAL_APP",
      /** Machine translation like Google Translate */
      MACHINE = "MACHINE"
  }
  enum PublishStatus {
      UNKNOWN_PUBLISH_STATUS = "UNKNOWN_PUBLISH_STATUS",
      /** No fields are published */
      UNPUBLISHED = "UNPUBLISHED",
      /** Some but not all fields are published */
      PARTIALLY_PUBLISHED = "PARTIALLY_PUBLISHED",
      /** All fields are published */
      PUBLISHED = "PUBLISHED"
  }
  interface CreateContentRequest {
      /** Content to be created. */
      content: Content;
  }
  interface CreateContentResponse {
      /** The created Content. */
      content?: Content;
  }
  interface GetContentRequest {
      /** ID of the Content to retrieve. */
      contentId: string;
  }
  interface GetContentResponse {
      /** The requested Content. */
      content?: Content;
  }
  interface UpdateContentRequest {
      /** Content to be updated, may be partial. */
      content: Content;
      /**
       * Set of fields to update.
       *
       * Fields that aren't included in `fieldMask.paths` are ignored.
       * @internal
       */
      fieldMask?: string[];
  }
  interface UpdateContentResponse {
      /** Updated Content. */
      content?: Content;
  }
  interface DeleteContentRequest {
      /** Id of the Content to delete. */
      contentId: string;
  }
  interface DeleteContentResponse {
  }
  interface QueryContentsRequest {
      /** WQL expression. */
      query?: CursorQuery$1;
  }
  interface CursorQuery$1 extends CursorQueryPagingMethodOneOf$1 {
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
  interface CursorQueryPagingMethodOneOf$1 {
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
  interface QueryContentsResponse {
      /** List of Contents. */
      contents?: Content[];
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
  interface QueryContentsLegacyRequest {
      /** WQL expression. */
      query?: QueryV2;
  }
  interface QueryV2 extends QueryV2PagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
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
  interface QueryV2PagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$1;
  }
  interface Paging {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface QueryContentsLegacyResponse {
      /** List of Contents. */
      contents?: Content[];
      /** Paging metadata */
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
      cursors?: Cursors$1;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       * @internal
       */
      hasNext?: boolean | null;
  }
  interface BulkCreateContentRequest {
      /** List of Contents to be created TODO: think again if we want to increase maxSize */
      contents: Content[];
      /** set to `true` if you wish to receive back the created contents in the response */
      returnEntity?: boolean;
  }
  interface BulkCreateContentResponse {
      /** List of results */
      results?: BulkContentResult[];
      /** metadata */
      bulkActionMetadata?: BulkActionMetadata;
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
  interface BulkContentResult {
      /** Defined in wix.commons */
      itemMetadata?: ItemMetadata;
      /** Only exists if `returnEntity` was set to true in the request */
      item?: Content;
  }
  interface BulkActionMetadata {
      /** Number of items that were successfully processed. */
      totalSuccesses?: number;
      /** Number of items that couldn't be processed. */
      totalFailures?: number;
      /** Number of failures without details because detailed failure threshold was exceeded. */
      undetailedFailures?: number;
  }
  interface BulkUpdateContentRequest {
      /** Contents to be updated. TODO: think again if we want to increase maxSize */
      contents: MaskedContent[];
      /** set to `true` if you wish to receive back the created contents in the response */
      returnEntity?: boolean;
  }
  interface MaskedContent {
      /** Content to be updated, may be partial */
      content?: Content;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      fieldMask?: string[];
  }
  interface BulkUpdateContentResponse {
      /** List of results */
      results?: BulkUpdateContentResponseBulkContentResult[];
      /** metadata */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkUpdateContentResponseBulkContentResult {
      /** metadata */
      itemMetadata?: ItemMetadata;
      /** Only exists if `returnEntity` was set to true in the request */
      item?: Content;
  }
  interface BulkDeleteContentRequest {
      /** Content ids to be deleted. TODO: think again if we want to increase maxSize */
      contentIds: string[];
  }
  interface BulkDeleteContentResponse {
      /** List of results */
      results?: BulkDeleteContentResponseBulkContentResult[];
      /** metadata */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkDeleteContentResponseBulkContentResult {
      /** metadata */
      itemMetadata?: ItemMetadata;
  }
  interface MetaSiteSpecialEvent$1 extends MetaSiteSpecialEventPayloadOneOf$1 {
      /** Emitted on a meta site creation. */
      siteCreated?: SiteCreated$1;
      /** Emitted on a meta site transfer completion. */
      siteTransferred?: SiteTransferred$1;
      /** Emitted on a meta site deletion. */
      siteDeleted?: SiteDeleted$1;
      /** Emitted on a meta site restoration. */
      siteUndeleted?: SiteUndeleted$1;
      /** Emitted on the first* publish of the meta site (* switching from unpublished to published state). */
      sitePublished?: SitePublished$1;
      /** Emitted on a meta site unpublish. */
      siteUnpublished?: SiteUnpublished$1;
      /** Emitted when meta site is marked as template. */
      siteMarkedAsTemplate?: SiteMarkedAsTemplate$1;
      /** Emitted when meta site is marked as a WixSite. */
      siteMarkedAsWixSite?: SiteMarkedAsWixSite$1;
      /** Emitted when an application is provisioned (installed). */
      serviceProvisioned?: ServiceProvisioned$1;
      /** Emitted when an application is removed (uninstalled). */
      serviceRemoved?: ServiceRemoved$1;
      /** Emitted when meta site name (URL slug) is changed. */
      siteRenamedPayload?: SiteRenamed$1;
      /** Emitted when meta site was permanently deleted. */
      hardDeleted?: SiteHardDeleted$1;
      /** Emitted on a namespace change. */
      namespaceChanged?: NamespaceChanged$1;
      /** Emitted when Studio is attached. */
      studioAssigned?: StudioAssigned$1;
      /** Emitted when Studio is detached. */
      studioUnassigned?: StudioUnassigned$1;
      /** A meta site id. */
      metaSiteId?: string;
      /** A meta site version. Monotonically increasing. */
      version?: string;
      /** A timestamp of the event. */
      timestamp?: string;
      /** A list of "assets" (applications). The same as MetaSiteContext. */
      assets?: Asset$1[];
  }
  /** @oneof */
  interface MetaSiteSpecialEventPayloadOneOf$1 {
      /** Emitted on a meta site creation. */
      siteCreated?: SiteCreated$1;
      /** Emitted on a meta site transfer completion. */
      siteTransferred?: SiteTransferred$1;
      /** Emitted on a meta site deletion. */
      siteDeleted?: SiteDeleted$1;
      /** Emitted on a meta site restoration. */
      siteUndeleted?: SiteUndeleted$1;
      /** Emitted on the first* publish of the meta site (* switching from unpublished to published state). */
      sitePublished?: SitePublished$1;
      /** Emitted on a meta site unpublish. */
      siteUnpublished?: SiteUnpublished$1;
      /** Emitted when meta site is marked as template. */
      siteMarkedAsTemplate?: SiteMarkedAsTemplate$1;
      /** Emitted when meta site is marked as a WixSite. */
      siteMarkedAsWixSite?: SiteMarkedAsWixSite$1;
      /** Emitted when an application is provisioned (installed). */
      serviceProvisioned?: ServiceProvisioned$1;
      /** Emitted when an application is removed (uninstalled). */
      serviceRemoved?: ServiceRemoved$1;
      /** Emitted when meta site name (URL slug) is changed. */
      siteRenamedPayload?: SiteRenamed$1;
      /** Emitted when meta site was permanently deleted. */
      hardDeleted?: SiteHardDeleted$1;
      /** Emitted on a namespace change. */
      namespaceChanged?: NamespaceChanged$1;
      /** Emitted when Studio is attached. */
      studioAssigned?: StudioAssigned$1;
      /** Emitted when Studio is detached. */
      studioUnassigned?: StudioUnassigned$1;
  }
  interface Asset$1 {
      /** An application definition id (app_id in dev-center). For legacy reasons may be UUID or a string (from Java Enum). */
      appDefId?: string;
      /** An instance id. For legacy reasons may be UUID or a string. */
      instanceId?: string;
      /** An application state. */
      state?: State$1;
  }
  enum State$1 {
      UNKNOWN = "UNKNOWN",
      ENABLED = "ENABLED",
      DISABLED = "DISABLED",
      PENDING = "PENDING",
      DEMO = "DEMO"
  }
  interface SiteCreated$1 {
      /** A template identifier (empty if not created from a template). */
      originTemplateId?: string;
      /** An account id of the owner. */
      ownerId?: string;
      /** A context in which meta site was created. */
      context?: SiteCreatedContext$1;
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
      namespace?: Namespace$1;
  }
  enum SiteCreatedContext$1 {
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
  enum Namespace$1 {
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
  interface SiteTransferred$1 {
      /** A previous owner id (user that transfers meta site). */
      oldOwnerId?: string;
      /** A new owner id (user that accepts meta site). */
      newOwnerId?: string;
  }
  /** Soft deletion of the meta site. Could be restored. */
  interface SiteDeleted$1 {
      /** A deletion context. */
      deleteContext?: DeleteContext$1;
  }
  interface DeleteContext$1 {
      /** When the meta site was deleted. */
      dateDeleted?: Date;
      /** A status. */
      deleteStatus?: DeleteStatus$1;
      /** A reason (flow). */
      deleteOrigin?: string;
      /** A service that deleted it. */
      initiatorId?: string | null;
  }
  enum DeleteStatus$1 {
      UNKNOWN = "UNKNOWN",
      TRASH = "TRASH",
      DELETED = "DELETED",
      PENDING_PURGE = "PENDING_PURGE"
  }
  /** Restoration of the meta site. */
  interface SiteUndeleted$1 {
  }
  /** First publish of a meta site. Or subsequent publish after unpublish. */
  interface SitePublished$1 {
  }
  interface SiteUnpublished$1 {
      /** A list of URLs previously associated with the meta site. */
      urls?: string[];
  }
  interface SiteMarkedAsTemplate$1 {
  }
  interface SiteMarkedAsWixSite$1 {
  }
  interface ServiceProvisioned$1 {
      /** Either UUID or EmbeddedServiceType. */
      appDefId?: string;
      /** Not only UUID. Something here could be something weird. */
      instanceId?: string;
      /** An instance id from which this instance is originated. */
      originInstanceId?: string;
      /** A version. */
      version?: string | null;
  }
  interface ServiceRemoved$1 {
      /** Either UUID or EmbeddedServiceType. */
      appDefId?: string;
      /** Not only UUID. Something here could be something weird. */
      instanceId?: string;
      /** A version. */
      version?: string | null;
  }
  /** Rename of the site. Meaning, free public url has been changed as well. */
  interface SiteRenamed$1 {
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
  interface SiteHardDeleted$1 {
      /** A deletion context. */
      deleteContext?: DeleteContext$1;
  }
  interface NamespaceChanged$1 {
      /** A previous namespace. */
      oldNamespace?: Namespace$1;
      /** A new namespace. */
      newNamespace?: Namespace$1;
  }
  /** Assigned Studio editor */
  interface StudioAssigned$1 {
  }
  /** Unassigned Studio editor */
  interface StudioUnassigned$1 {
  }
  interface Empty$1 {
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
  interface RemoveContentsByFilterRequest {
      /** the query filter content to delete */
      query?: CursorQuery$1;
  }
  interface RemoveContentsByFilterResponse {
      /** follow the remove job. */
      jobId?: string | null;
  }
  interface RepublishContentByFilterRequest {
      /** the query filter content to delete */
      query?: CursorQuery$1;
  }
  interface RepublishContentByFilterResponse {
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
   * Creates a Content.
   *
   * The request body must include schema-id, entity-id and locale.
   * @param content - Content to be created.
   * @internal
   * @documentationMaturity preview
   * @requiredField content
   * @requiredField content.entityId
   * @requiredField content.locale
   * @requiredField content.schemaId
   * @returns The created Content.
   */
  function createContent(content: Content): Promise<Content>;
  /**
   * Retrieves a Content.
   * @param contentId - ID of the Content to retrieve.
   * @internal
   * @documentationMaturity preview
   * @requiredField contentId
   * @returns The requested Content.
   */
  function getContent(contentId: string): Promise<Content>;
  /**
   * Updates a Content. Along with the schema ID, you must supply either the content ID or the entity ID.
   * @param content - Content to be updated, may be partial.
   * @internal
   * @documentationMaturity preview
   * @requiredField content
   * @requiredField content.schemaId
   * @returns Updated Content.
   */
  function updateContent(content: Content, options?: UpdateContentOptions): Promise<Content>;
  interface UpdateContentOptions {
      /**
       * Set of fields to update.
       *
       * Fields that aren't included in `fieldMask.paths` are ignored.
       * @internal
       */
      fieldMask?: string[];
  }
  /**
   * Deletes a Content.
   * @param contentId - Id of the Content to delete.
   * @internal
   * @documentationMaturity preview
   * @requiredField contentId
   */
  function deleteContent(contentId: string): Promise<void>;
  /**
   * Retrieves a list of Contents, given the provided [paging, filtering, and sorting][1].
   * @internal
   * @documentationMaturity preview
   */
  function queryContents(options?: QueryContentsOptions): Promise<QueryContentsResponse>;
  interface QueryContentsOptions {
      /** WQL expression. */
      query?: CursorQuery$1;
  }
  /** @internal
   * @documentationMaturity preview
   */
  function queryContentsLegacy(): ContentsQueryBuilder;
  interface QueryCursorResult$1 {
      cursors: Cursors$1;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface ContentsQueryResult extends QueryCursorResult$1 {
      items: Content[];
      query: ContentsQueryBuilder;
      next: () => Promise<ContentsQueryResult>;
      prev: () => Promise<ContentsQueryResult>;
  }
  interface ContentsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id' | 'schemaId' | 'entityId' | 'locale' | 'parentEntityId' | 'previewField', value: any) => ContentsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id' | 'schemaId' | 'entityId' | 'locale' | 'parentEntityId' | 'previewField', value: any) => ContentsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       * @documentationMaturity preview
       */
      startsWith: (propertyName: '_id' | 'schemaId' | 'entityId' | 'locale' | 'parentEntityId' | 'previewField', value: string) => ContentsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       * @documentationMaturity preview
       */
      hasSome: (propertyName: '_id' | 'schemaId' | 'entityId' | 'locale' | 'parentEntityId' | 'previewField', value: any[]) => ContentsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id' | 'schemaId' | 'entityId' | 'locale' | 'parentEntityId' | 'previewField', value: any) => ContentsQueryBuilder;
      /** @documentationMaturity preview */
      exists: (propertyName: '_id' | 'schemaId' | 'entityId' | 'locale' | 'parentEntityId' | 'previewField', value: boolean) => ContentsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'_id' | 'schemaId' | 'entityId' | 'locale' | 'parentEntityId' | 'previewField'>) => ContentsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'_id' | 'schemaId' | 'entityId' | 'locale' | 'parentEntityId' | 'previewField'>) => ContentsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => ContentsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => ContentsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<ContentsQueryResult>;
  }
  /**
   * create multiple Contents in a single request. Works synchronously.
   * @param contents - List of Contents to be created TODO: think again if we want to increase maxSize
   * @internal
   * @documentationMaturity preview
   * @requiredField contents
   * @requiredField contents.entityId
   * @requiredField contents.locale
   * @requiredField contents.schemaId
   */
  function bulkCreateContent(contents: Content[], options?: BulkCreateContentOptions): Promise<BulkCreateContentResponse>;
  interface BulkCreateContentOptions {
      /** set to `true` if you wish to receive back the created contents in the response */
      returnEntity?: boolean;
  }
  /**
   * update multiple Contents in a single request. Works synchronously. For each item, you must supply along with the schema ID either the content ID or the entity ID.
   * @param contents - Contents to be updated. TODO: think again if we want to increase maxSize
   * @internal
   * @documentationMaturity preview
   * @requiredField contents
   * @requiredField contents.content.schemaId
   */
  function bulkUpdateContent(contents: MaskedContent[], options?: BulkUpdateContentOptions): Promise<BulkUpdateContentResponse>;
  interface BulkUpdateContentOptions {
      /** set to `true` if you wish to receive back the created contents in the response */
      returnEntity?: boolean;
  }
  /**
   * deletes multiple Contents in a single request. Works synchronously.
   * @param contentIds - Content ids to be deleted. TODO: think again if we want to increase maxSize
   * @internal
   * @documentationMaturity preview
   * @requiredField contentIds
   */
  function bulkDeleteContent(contentIds: string[]): Promise<BulkDeleteContentResponse>;
  /**
   * Removes existing content by filter. Non-matching filters are ignored. Optional cursor exists.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function removeContentsByFilter(options?: RemoveContentsByFilterOptions): Promise<RemoveContentsByFilterResponse>;
  interface RemoveContentsByFilterOptions {
      /** the query filter content to delete */
      query?: CursorQuery$1;
  }
  /**
   * Send domain events for purpose of republishing. All contents matching the filter will be sent. Optional cursor exists.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function republishContentByFilter(options?: RepublishContentByFilterOptions): Promise<void>;
  interface RepublishContentByFilterOptions {
      /** the query filter content to delete */
      query?: CursorQuery$1;
  }
  
  type multilingualTranslationV1Content_universal_d_Content = Content;
  type multilingualTranslationV1Content_universal_d_ContentField = ContentField;
  type multilingualTranslationV1Content_universal_d_ContentFieldValueOneOf = ContentFieldValueOneOf;
  type multilingualTranslationV1Content_universal_d_RichContent = RichContent;
  type multilingualTranslationV1Content_universal_d_Node = Node;
  type multilingualTranslationV1Content_universal_d_NodeDataOneOf = NodeDataOneOf;
  type multilingualTranslationV1Content_universal_d_NodeType = NodeType;
  const multilingualTranslationV1Content_universal_d_NodeType: typeof NodeType;
  type multilingualTranslationV1Content_universal_d_NodeStyle = NodeStyle;
  type multilingualTranslationV1Content_universal_d_ButtonData = ButtonData;
  type multilingualTranslationV1Content_universal_d_Border = Border;
  type multilingualTranslationV1Content_universal_d_Colors = Colors;
  type multilingualTranslationV1Content_universal_d_PluginContainerData = PluginContainerData;
  type multilingualTranslationV1Content_universal_d_WidthType = WidthType;
  const multilingualTranslationV1Content_universal_d_WidthType: typeof WidthType;
  type multilingualTranslationV1Content_universal_d_PluginContainerDataWidth = PluginContainerDataWidth;
  type multilingualTranslationV1Content_universal_d_PluginContainerDataWidthDataOneOf = PluginContainerDataWidthDataOneOf;
  type multilingualTranslationV1Content_universal_d_PluginContainerDataAlignment = PluginContainerDataAlignment;
  const multilingualTranslationV1Content_universal_d_PluginContainerDataAlignment: typeof PluginContainerDataAlignment;
  type multilingualTranslationV1Content_universal_d_Spoiler = Spoiler;
  type multilingualTranslationV1Content_universal_d_Height = Height;
  type multilingualTranslationV1Content_universal_d_Type = Type;
  const multilingualTranslationV1Content_universal_d_Type: typeof Type;
  type multilingualTranslationV1Content_universal_d_Styles = Styles;
  type multilingualTranslationV1Content_universal_d_Link = Link;
  type multilingualTranslationV1Content_universal_d_LinkDataOneOf = LinkDataOneOf;
  type multilingualTranslationV1Content_universal_d_Target = Target;
  const multilingualTranslationV1Content_universal_d_Target: typeof Target;
  type multilingualTranslationV1Content_universal_d_Rel = Rel;
  type multilingualTranslationV1Content_universal_d_CodeBlockData = CodeBlockData;
  type multilingualTranslationV1Content_universal_d_TextStyle = TextStyle;
  type multilingualTranslationV1Content_universal_d_TextAlignment = TextAlignment;
  const multilingualTranslationV1Content_universal_d_TextAlignment: typeof TextAlignment;
  type multilingualTranslationV1Content_universal_d_DividerData = DividerData;
  type multilingualTranslationV1Content_universal_d_LineStyle = LineStyle;
  const multilingualTranslationV1Content_universal_d_LineStyle: typeof LineStyle;
  type multilingualTranslationV1Content_universal_d_Width = Width;
  const multilingualTranslationV1Content_universal_d_Width: typeof Width;
  type multilingualTranslationV1Content_universal_d_Alignment = Alignment;
  const multilingualTranslationV1Content_universal_d_Alignment: typeof Alignment;
  type multilingualTranslationV1Content_universal_d_FileData = FileData;
  type multilingualTranslationV1Content_universal_d_ViewMode = ViewMode;
  const multilingualTranslationV1Content_universal_d_ViewMode: typeof ViewMode;
  type multilingualTranslationV1Content_universal_d_FileSource = FileSource;
  type multilingualTranslationV1Content_universal_d_FileSourceDataOneOf = FileSourceDataOneOf;
  type multilingualTranslationV1Content_universal_d_PDFSettings = PDFSettings;
  type multilingualTranslationV1Content_universal_d_GalleryData = GalleryData;
  type multilingualTranslationV1Content_universal_d_Media = Media;
  type multilingualTranslationV1Content_universal_d_Image = Image;
  type multilingualTranslationV1Content_universal_d_Video = Video;
  type multilingualTranslationV1Content_universal_d_Item = Item;
  type multilingualTranslationV1Content_universal_d_ItemDataOneOf = ItemDataOneOf;
  type multilingualTranslationV1Content_universal_d_GalleryOptions = GalleryOptions;
  type multilingualTranslationV1Content_universal_d_LayoutType = LayoutType;
  const multilingualTranslationV1Content_universal_d_LayoutType: typeof LayoutType;
  type multilingualTranslationV1Content_universal_d_Orientation = Orientation;
  const multilingualTranslationV1Content_universal_d_Orientation: typeof Orientation;
  type multilingualTranslationV1Content_universal_d_Crop = Crop;
  const multilingualTranslationV1Content_universal_d_Crop: typeof Crop;
  type multilingualTranslationV1Content_universal_d_ThumbnailsAlignment = ThumbnailsAlignment;
  const multilingualTranslationV1Content_universal_d_ThumbnailsAlignment: typeof ThumbnailsAlignment;
  type multilingualTranslationV1Content_universal_d_Layout = Layout;
  type multilingualTranslationV1Content_universal_d_ItemStyle = ItemStyle;
  type multilingualTranslationV1Content_universal_d_Thumbnails = Thumbnails;
  type multilingualTranslationV1Content_universal_d_GIFData = GIFData;
  type multilingualTranslationV1Content_universal_d_GIF = GIF;
  type multilingualTranslationV1Content_universal_d_HeadingData = HeadingData;
  type multilingualTranslationV1Content_universal_d_HTMLData = HTMLData;
  type multilingualTranslationV1Content_universal_d_HTMLDataDataOneOf = HTMLDataDataOneOf;
  type multilingualTranslationV1Content_universal_d_Source = Source;
  const multilingualTranslationV1Content_universal_d_Source: typeof Source;
  type multilingualTranslationV1Content_universal_d_ImageData = ImageData;
  type multilingualTranslationV1Content_universal_d_LinkPreviewData = LinkPreviewData;
  type multilingualTranslationV1Content_universal_d_MapData = MapData;
  type multilingualTranslationV1Content_universal_d_MapSettings = MapSettings;
  type multilingualTranslationV1Content_universal_d_MapType = MapType;
  const multilingualTranslationV1Content_universal_d_MapType: typeof MapType;
  type multilingualTranslationV1Content_universal_d_ParagraphData = ParagraphData;
  type multilingualTranslationV1Content_universal_d_PollData = PollData;
  type multilingualTranslationV1Content_universal_d_ViewRole = ViewRole;
  const multilingualTranslationV1Content_universal_d_ViewRole: typeof ViewRole;
  type multilingualTranslationV1Content_universal_d_VoteRole = VoteRole;
  const multilingualTranslationV1Content_universal_d_VoteRole: typeof VoteRole;
  type multilingualTranslationV1Content_universal_d_Permissions = Permissions;
  type multilingualTranslationV1Content_universal_d_Option = Option;
  type multilingualTranslationV1Content_universal_d_Settings = Settings;
  type multilingualTranslationV1Content_universal_d_PollLayoutType = PollLayoutType;
  const multilingualTranslationV1Content_universal_d_PollLayoutType: typeof PollLayoutType;
  type multilingualTranslationV1Content_universal_d_PollLayoutDirection = PollLayoutDirection;
  const multilingualTranslationV1Content_universal_d_PollLayoutDirection: typeof PollLayoutDirection;
  type multilingualTranslationV1Content_universal_d_PollLayout = PollLayout;
  type multilingualTranslationV1Content_universal_d_OptionLayout = OptionLayout;
  type multilingualTranslationV1Content_universal_d_BackgroundType = BackgroundType;
  const multilingualTranslationV1Content_universal_d_BackgroundType: typeof BackgroundType;
  type multilingualTranslationV1Content_universal_d_Gradient = Gradient;
  type multilingualTranslationV1Content_universal_d_Background = Background;
  type multilingualTranslationV1Content_universal_d_BackgroundBackgroundOneOf = BackgroundBackgroundOneOf;
  type multilingualTranslationV1Content_universal_d_PollDesign = PollDesign;
  type multilingualTranslationV1Content_universal_d_OptionDesign = OptionDesign;
  type multilingualTranslationV1Content_universal_d_Poll = Poll;
  type multilingualTranslationV1Content_universal_d_PollDataLayout = PollDataLayout;
  type multilingualTranslationV1Content_universal_d_Design = Design;
  type multilingualTranslationV1Content_universal_d_TextData = TextData;
  type multilingualTranslationV1Content_universal_d_Decoration = Decoration;
  type multilingualTranslationV1Content_universal_d_DecorationDataOneOf = DecorationDataOneOf;
  type multilingualTranslationV1Content_universal_d_DecorationType = DecorationType;
  const multilingualTranslationV1Content_universal_d_DecorationType: typeof DecorationType;
  type multilingualTranslationV1Content_universal_d_AnchorData = AnchorData;
  type multilingualTranslationV1Content_universal_d_ColorData = ColorData;
  type multilingualTranslationV1Content_universal_d_LinkData = LinkData;
  type multilingualTranslationV1Content_universal_d_MentionData = MentionData;
  type multilingualTranslationV1Content_universal_d_FontSizeData = FontSizeData;
  type multilingualTranslationV1Content_universal_d_FontType = FontType;
  const multilingualTranslationV1Content_universal_d_FontType: typeof FontType;
  type multilingualTranslationV1Content_universal_d_AppEmbedData = AppEmbedData;
  type multilingualTranslationV1Content_universal_d_AppEmbedDataAppDataOneOf = AppEmbedDataAppDataOneOf;
  type multilingualTranslationV1Content_universal_d_AppType = AppType;
  const multilingualTranslationV1Content_universal_d_AppType: typeof AppType;
  type multilingualTranslationV1Content_universal_d_BookingData = BookingData;
  type multilingualTranslationV1Content_universal_d_EventData = EventData;
  type multilingualTranslationV1Content_universal_d_VideoData = VideoData;
  type multilingualTranslationV1Content_universal_d_PlaybackOptions = PlaybackOptions;
  type multilingualTranslationV1Content_universal_d_EmbedData = EmbedData;
  type multilingualTranslationV1Content_universal_d_Oembed = Oembed;
  type multilingualTranslationV1Content_universal_d_CollapsibleListData = CollapsibleListData;
  type multilingualTranslationV1Content_universal_d_InitialExpandedItems = InitialExpandedItems;
  const multilingualTranslationV1Content_universal_d_InitialExpandedItems: typeof InitialExpandedItems;
  type multilingualTranslationV1Content_universal_d_Direction = Direction;
  const multilingualTranslationV1Content_universal_d_Direction: typeof Direction;
  type multilingualTranslationV1Content_universal_d_TableData = TableData;
  type multilingualTranslationV1Content_universal_d_Dimensions = Dimensions;
  type multilingualTranslationV1Content_universal_d_TableCellData = TableCellData;
  type multilingualTranslationV1Content_universal_d_VerticalAlignment = VerticalAlignment;
  const multilingualTranslationV1Content_universal_d_VerticalAlignment: typeof VerticalAlignment;
  type multilingualTranslationV1Content_universal_d_CellStyle = CellStyle;
  type multilingualTranslationV1Content_universal_d_BorderColors = BorderColors;
  type multilingualTranslationV1Content_universal_d_NullValue = NullValue;
  const multilingualTranslationV1Content_universal_d_NullValue: typeof NullValue;
  type multilingualTranslationV1Content_universal_d_ListValue = ListValue;
  type multilingualTranslationV1Content_universal_d_AudioData = AudioData;
  type multilingualTranslationV1Content_universal_d_OrderedListData = OrderedListData;
  type multilingualTranslationV1Content_universal_d_BulletedListData = BulletedListData;
  type multilingualTranslationV1Content_universal_d_BlockquoteData = BlockquoteData;
  type multilingualTranslationV1Content_universal_d_Metadata = Metadata;
  type multilingualTranslationV1Content_universal_d_DocumentStyle = DocumentStyle;
  type multilingualTranslationV1Content_universal_d_TextNodeStyle = TextNodeStyle;
  type multilingualTranslationV1Content_universal_d_VideoResolution = VideoResolution;
  type multilingualTranslationV1Content_universal_d_UpdaterIdentity = UpdaterIdentity;
  const multilingualTranslationV1Content_universal_d_UpdaterIdentity: typeof UpdaterIdentity;
  type multilingualTranslationV1Content_universal_d_PublishStatus = PublishStatus;
  const multilingualTranslationV1Content_universal_d_PublishStatus: typeof PublishStatus;
  type multilingualTranslationV1Content_universal_d_CreateContentRequest = CreateContentRequest;
  type multilingualTranslationV1Content_universal_d_CreateContentResponse = CreateContentResponse;
  type multilingualTranslationV1Content_universal_d_GetContentRequest = GetContentRequest;
  type multilingualTranslationV1Content_universal_d_GetContentResponse = GetContentResponse;
  type multilingualTranslationV1Content_universal_d_UpdateContentRequest = UpdateContentRequest;
  type multilingualTranslationV1Content_universal_d_UpdateContentResponse = UpdateContentResponse;
  type multilingualTranslationV1Content_universal_d_DeleteContentRequest = DeleteContentRequest;
  type multilingualTranslationV1Content_universal_d_DeleteContentResponse = DeleteContentResponse;
  type multilingualTranslationV1Content_universal_d_QueryContentsRequest = QueryContentsRequest;
  type multilingualTranslationV1Content_universal_d_QueryContentsResponse = QueryContentsResponse;
  type multilingualTranslationV1Content_universal_d_QueryContentsLegacyRequest = QueryContentsLegacyRequest;
  type multilingualTranslationV1Content_universal_d_QueryV2 = QueryV2;
  type multilingualTranslationV1Content_universal_d_QueryV2PagingMethodOneOf = QueryV2PagingMethodOneOf;
  type multilingualTranslationV1Content_universal_d_Paging = Paging;
  type multilingualTranslationV1Content_universal_d_QueryContentsLegacyResponse = QueryContentsLegacyResponse;
  type multilingualTranslationV1Content_universal_d_PagingMetadataV2 = PagingMetadataV2;
  type multilingualTranslationV1Content_universal_d_BulkCreateContentRequest = BulkCreateContentRequest;
  type multilingualTranslationV1Content_universal_d_BulkCreateContentResponse = BulkCreateContentResponse;
  type multilingualTranslationV1Content_universal_d_ItemMetadata = ItemMetadata;
  type multilingualTranslationV1Content_universal_d_ApplicationError = ApplicationError;
  type multilingualTranslationV1Content_universal_d_BulkContentResult = BulkContentResult;
  type multilingualTranslationV1Content_universal_d_BulkActionMetadata = BulkActionMetadata;
  type multilingualTranslationV1Content_universal_d_BulkUpdateContentRequest = BulkUpdateContentRequest;
  type multilingualTranslationV1Content_universal_d_MaskedContent = MaskedContent;
  type multilingualTranslationV1Content_universal_d_BulkUpdateContentResponse = BulkUpdateContentResponse;
  type multilingualTranslationV1Content_universal_d_BulkUpdateContentResponseBulkContentResult = BulkUpdateContentResponseBulkContentResult;
  type multilingualTranslationV1Content_universal_d_BulkDeleteContentRequest = BulkDeleteContentRequest;
  type multilingualTranslationV1Content_universal_d_BulkDeleteContentResponse = BulkDeleteContentResponse;
  type multilingualTranslationV1Content_universal_d_BulkDeleteContentResponseBulkContentResult = BulkDeleteContentResponseBulkContentResult;
  type multilingualTranslationV1Content_universal_d_RemoveContentsByFilterRequest = RemoveContentsByFilterRequest;
  type multilingualTranslationV1Content_universal_d_RemoveContentsByFilterResponse = RemoveContentsByFilterResponse;
  type multilingualTranslationV1Content_universal_d_RepublishContentByFilterRequest = RepublishContentByFilterRequest;
  type multilingualTranslationV1Content_universal_d_RepublishContentByFilterResponse = RepublishContentByFilterResponse;
  const multilingualTranslationV1Content_universal_d_createContent: typeof createContent;
  const multilingualTranslationV1Content_universal_d_getContent: typeof getContent;
  const multilingualTranslationV1Content_universal_d_updateContent: typeof updateContent;
  type multilingualTranslationV1Content_universal_d_UpdateContentOptions = UpdateContentOptions;
  const multilingualTranslationV1Content_universal_d_deleteContent: typeof deleteContent;
  const multilingualTranslationV1Content_universal_d_queryContents: typeof queryContents;
  type multilingualTranslationV1Content_universal_d_QueryContentsOptions = QueryContentsOptions;
  const multilingualTranslationV1Content_universal_d_queryContentsLegacy: typeof queryContentsLegacy;
  type multilingualTranslationV1Content_universal_d_ContentsQueryResult = ContentsQueryResult;
  type multilingualTranslationV1Content_universal_d_ContentsQueryBuilder = ContentsQueryBuilder;
  const multilingualTranslationV1Content_universal_d_bulkCreateContent: typeof bulkCreateContent;
  type multilingualTranslationV1Content_universal_d_BulkCreateContentOptions = BulkCreateContentOptions;
  const multilingualTranslationV1Content_universal_d_bulkUpdateContent: typeof bulkUpdateContent;
  type multilingualTranslationV1Content_universal_d_BulkUpdateContentOptions = BulkUpdateContentOptions;
  const multilingualTranslationV1Content_universal_d_bulkDeleteContent: typeof bulkDeleteContent;
  const multilingualTranslationV1Content_universal_d_removeContentsByFilter: typeof removeContentsByFilter;
  type multilingualTranslationV1Content_universal_d_RemoveContentsByFilterOptions = RemoveContentsByFilterOptions;
  const multilingualTranslationV1Content_universal_d_republishContentByFilter: typeof republishContentByFilter;
  type multilingualTranslationV1Content_universal_d_RepublishContentByFilterOptions = RepublishContentByFilterOptions;
  namespace multilingualTranslationV1Content_universal_d {
    export {
      multilingualTranslationV1Content_universal_d_Content as Content,
      multilingualTranslationV1Content_universal_d_ContentField as ContentField,
      multilingualTranslationV1Content_universal_d_ContentFieldValueOneOf as ContentFieldValueOneOf,
      multilingualTranslationV1Content_universal_d_RichContent as RichContent,
      multilingualTranslationV1Content_universal_d_Node as Node,
      multilingualTranslationV1Content_universal_d_NodeDataOneOf as NodeDataOneOf,
      multilingualTranslationV1Content_universal_d_NodeType as NodeType,
      multilingualTranslationV1Content_universal_d_NodeStyle as NodeStyle,
      multilingualTranslationV1Content_universal_d_ButtonData as ButtonData,
      multilingualTranslationV1Content_universal_d_Border as Border,
      multilingualTranslationV1Content_universal_d_Colors as Colors,
      multilingualTranslationV1Content_universal_d_PluginContainerData as PluginContainerData,
      multilingualTranslationV1Content_universal_d_WidthType as WidthType,
      multilingualTranslationV1Content_universal_d_PluginContainerDataWidth as PluginContainerDataWidth,
      multilingualTranslationV1Content_universal_d_PluginContainerDataWidthDataOneOf as PluginContainerDataWidthDataOneOf,
      multilingualTranslationV1Content_universal_d_PluginContainerDataAlignment as PluginContainerDataAlignment,
      multilingualTranslationV1Content_universal_d_Spoiler as Spoiler,
      multilingualTranslationV1Content_universal_d_Height as Height,
      multilingualTranslationV1Content_universal_d_Type as Type,
      multilingualTranslationV1Content_universal_d_Styles as Styles,
      multilingualTranslationV1Content_universal_d_Link as Link,
      multilingualTranslationV1Content_universal_d_LinkDataOneOf as LinkDataOneOf,
      multilingualTranslationV1Content_universal_d_Target as Target,
      multilingualTranslationV1Content_universal_d_Rel as Rel,
      multilingualTranslationV1Content_universal_d_CodeBlockData as CodeBlockData,
      multilingualTranslationV1Content_universal_d_TextStyle as TextStyle,
      multilingualTranslationV1Content_universal_d_TextAlignment as TextAlignment,
      multilingualTranslationV1Content_universal_d_DividerData as DividerData,
      multilingualTranslationV1Content_universal_d_LineStyle as LineStyle,
      multilingualTranslationV1Content_universal_d_Width as Width,
      multilingualTranslationV1Content_universal_d_Alignment as Alignment,
      multilingualTranslationV1Content_universal_d_FileData as FileData,
      multilingualTranslationV1Content_universal_d_ViewMode as ViewMode,
      multilingualTranslationV1Content_universal_d_FileSource as FileSource,
      multilingualTranslationV1Content_universal_d_FileSourceDataOneOf as FileSourceDataOneOf,
      multilingualTranslationV1Content_universal_d_PDFSettings as PDFSettings,
      multilingualTranslationV1Content_universal_d_GalleryData as GalleryData,
      multilingualTranslationV1Content_universal_d_Media as Media,
      multilingualTranslationV1Content_universal_d_Image as Image,
      multilingualTranslationV1Content_universal_d_Video as Video,
      multilingualTranslationV1Content_universal_d_Item as Item,
      multilingualTranslationV1Content_universal_d_ItemDataOneOf as ItemDataOneOf,
      multilingualTranslationV1Content_universal_d_GalleryOptions as GalleryOptions,
      multilingualTranslationV1Content_universal_d_LayoutType as LayoutType,
      multilingualTranslationV1Content_universal_d_Orientation as Orientation,
      multilingualTranslationV1Content_universal_d_Crop as Crop,
      multilingualTranslationV1Content_universal_d_ThumbnailsAlignment as ThumbnailsAlignment,
      multilingualTranslationV1Content_universal_d_Layout as Layout,
      multilingualTranslationV1Content_universal_d_ItemStyle as ItemStyle,
      multilingualTranslationV1Content_universal_d_Thumbnails as Thumbnails,
      multilingualTranslationV1Content_universal_d_GIFData as GIFData,
      multilingualTranslationV1Content_universal_d_GIF as GIF,
      multilingualTranslationV1Content_universal_d_HeadingData as HeadingData,
      multilingualTranslationV1Content_universal_d_HTMLData as HTMLData,
      multilingualTranslationV1Content_universal_d_HTMLDataDataOneOf as HTMLDataDataOneOf,
      multilingualTranslationV1Content_universal_d_Source as Source,
      multilingualTranslationV1Content_universal_d_ImageData as ImageData,
      multilingualTranslationV1Content_universal_d_LinkPreviewData as LinkPreviewData,
      multilingualTranslationV1Content_universal_d_MapData as MapData,
      multilingualTranslationV1Content_universal_d_MapSettings as MapSettings,
      multilingualTranslationV1Content_universal_d_MapType as MapType,
      multilingualTranslationV1Content_universal_d_ParagraphData as ParagraphData,
      multilingualTranslationV1Content_universal_d_PollData as PollData,
      multilingualTranslationV1Content_universal_d_ViewRole as ViewRole,
      multilingualTranslationV1Content_universal_d_VoteRole as VoteRole,
      multilingualTranslationV1Content_universal_d_Permissions as Permissions,
      multilingualTranslationV1Content_universal_d_Option as Option,
      multilingualTranslationV1Content_universal_d_Settings as Settings,
      multilingualTranslationV1Content_universal_d_PollLayoutType as PollLayoutType,
      multilingualTranslationV1Content_universal_d_PollLayoutDirection as PollLayoutDirection,
      multilingualTranslationV1Content_universal_d_PollLayout as PollLayout,
      multilingualTranslationV1Content_universal_d_OptionLayout as OptionLayout,
      multilingualTranslationV1Content_universal_d_BackgroundType as BackgroundType,
      multilingualTranslationV1Content_universal_d_Gradient as Gradient,
      multilingualTranslationV1Content_universal_d_Background as Background,
      multilingualTranslationV1Content_universal_d_BackgroundBackgroundOneOf as BackgroundBackgroundOneOf,
      multilingualTranslationV1Content_universal_d_PollDesign as PollDesign,
      multilingualTranslationV1Content_universal_d_OptionDesign as OptionDesign,
      multilingualTranslationV1Content_universal_d_Poll as Poll,
      multilingualTranslationV1Content_universal_d_PollDataLayout as PollDataLayout,
      multilingualTranslationV1Content_universal_d_Design as Design,
      multilingualTranslationV1Content_universal_d_TextData as TextData,
      multilingualTranslationV1Content_universal_d_Decoration as Decoration,
      multilingualTranslationV1Content_universal_d_DecorationDataOneOf as DecorationDataOneOf,
      multilingualTranslationV1Content_universal_d_DecorationType as DecorationType,
      multilingualTranslationV1Content_universal_d_AnchorData as AnchorData,
      multilingualTranslationV1Content_universal_d_ColorData as ColorData,
      multilingualTranslationV1Content_universal_d_LinkData as LinkData,
      multilingualTranslationV1Content_universal_d_MentionData as MentionData,
      multilingualTranslationV1Content_universal_d_FontSizeData as FontSizeData,
      multilingualTranslationV1Content_universal_d_FontType as FontType,
      multilingualTranslationV1Content_universal_d_AppEmbedData as AppEmbedData,
      multilingualTranslationV1Content_universal_d_AppEmbedDataAppDataOneOf as AppEmbedDataAppDataOneOf,
      multilingualTranslationV1Content_universal_d_AppType as AppType,
      multilingualTranslationV1Content_universal_d_BookingData as BookingData,
      multilingualTranslationV1Content_universal_d_EventData as EventData,
      multilingualTranslationV1Content_universal_d_VideoData as VideoData,
      multilingualTranslationV1Content_universal_d_PlaybackOptions as PlaybackOptions,
      multilingualTranslationV1Content_universal_d_EmbedData as EmbedData,
      multilingualTranslationV1Content_universal_d_Oembed as Oembed,
      multilingualTranslationV1Content_universal_d_CollapsibleListData as CollapsibleListData,
      multilingualTranslationV1Content_universal_d_InitialExpandedItems as InitialExpandedItems,
      multilingualTranslationV1Content_universal_d_Direction as Direction,
      multilingualTranslationV1Content_universal_d_TableData as TableData,
      multilingualTranslationV1Content_universal_d_Dimensions as Dimensions,
      multilingualTranslationV1Content_universal_d_TableCellData as TableCellData,
      multilingualTranslationV1Content_universal_d_VerticalAlignment as VerticalAlignment,
      multilingualTranslationV1Content_universal_d_CellStyle as CellStyle,
      multilingualTranslationV1Content_universal_d_BorderColors as BorderColors,
      multilingualTranslationV1Content_universal_d_NullValue as NullValue,
      multilingualTranslationV1Content_universal_d_ListValue as ListValue,
      multilingualTranslationV1Content_universal_d_AudioData as AudioData,
      multilingualTranslationV1Content_universal_d_OrderedListData as OrderedListData,
      multilingualTranslationV1Content_universal_d_BulletedListData as BulletedListData,
      multilingualTranslationV1Content_universal_d_BlockquoteData as BlockquoteData,
      multilingualTranslationV1Content_universal_d_Metadata as Metadata,
      multilingualTranslationV1Content_universal_d_DocumentStyle as DocumentStyle,
      multilingualTranslationV1Content_universal_d_TextNodeStyle as TextNodeStyle,
      multilingualTranslationV1Content_universal_d_VideoResolution as VideoResolution,
      multilingualTranslationV1Content_universal_d_UpdaterIdentity as UpdaterIdentity,
      multilingualTranslationV1Content_universal_d_PublishStatus as PublishStatus,
      multilingualTranslationV1Content_universal_d_CreateContentRequest as CreateContentRequest,
      multilingualTranslationV1Content_universal_d_CreateContentResponse as CreateContentResponse,
      multilingualTranslationV1Content_universal_d_GetContentRequest as GetContentRequest,
      multilingualTranslationV1Content_universal_d_GetContentResponse as GetContentResponse,
      multilingualTranslationV1Content_universal_d_UpdateContentRequest as UpdateContentRequest,
      multilingualTranslationV1Content_universal_d_UpdateContentResponse as UpdateContentResponse,
      multilingualTranslationV1Content_universal_d_DeleteContentRequest as DeleteContentRequest,
      multilingualTranslationV1Content_universal_d_DeleteContentResponse as DeleteContentResponse,
      multilingualTranslationV1Content_universal_d_QueryContentsRequest as QueryContentsRequest,
      CursorQuery$1 as CursorQuery,
      CursorQueryPagingMethodOneOf$1 as CursorQueryPagingMethodOneOf,
      Sorting$1 as Sorting,
      SortOrder$1 as SortOrder,
      CursorPaging$1 as CursorPaging,
      multilingualTranslationV1Content_universal_d_QueryContentsResponse as QueryContentsResponse,
      CursorPagingMetadata$1 as CursorPagingMetadata,
      Cursors$1 as Cursors,
      multilingualTranslationV1Content_universal_d_QueryContentsLegacyRequest as QueryContentsLegacyRequest,
      multilingualTranslationV1Content_universal_d_QueryV2 as QueryV2,
      multilingualTranslationV1Content_universal_d_QueryV2PagingMethodOneOf as QueryV2PagingMethodOneOf,
      multilingualTranslationV1Content_universal_d_Paging as Paging,
      multilingualTranslationV1Content_universal_d_QueryContentsLegacyResponse as QueryContentsLegacyResponse,
      multilingualTranslationV1Content_universal_d_PagingMetadataV2 as PagingMetadataV2,
      multilingualTranslationV1Content_universal_d_BulkCreateContentRequest as BulkCreateContentRequest,
      multilingualTranslationV1Content_universal_d_BulkCreateContentResponse as BulkCreateContentResponse,
      multilingualTranslationV1Content_universal_d_ItemMetadata as ItemMetadata,
      multilingualTranslationV1Content_universal_d_ApplicationError as ApplicationError,
      multilingualTranslationV1Content_universal_d_BulkContentResult as BulkContentResult,
      multilingualTranslationV1Content_universal_d_BulkActionMetadata as BulkActionMetadata,
      multilingualTranslationV1Content_universal_d_BulkUpdateContentRequest as BulkUpdateContentRequest,
      multilingualTranslationV1Content_universal_d_MaskedContent as MaskedContent,
      multilingualTranslationV1Content_universal_d_BulkUpdateContentResponse as BulkUpdateContentResponse,
      multilingualTranslationV1Content_universal_d_BulkUpdateContentResponseBulkContentResult as BulkUpdateContentResponseBulkContentResult,
      multilingualTranslationV1Content_universal_d_BulkDeleteContentRequest as BulkDeleteContentRequest,
      multilingualTranslationV1Content_universal_d_BulkDeleteContentResponse as BulkDeleteContentResponse,
      multilingualTranslationV1Content_universal_d_BulkDeleteContentResponseBulkContentResult as BulkDeleteContentResponseBulkContentResult,
      MetaSiteSpecialEvent$1 as MetaSiteSpecialEvent,
      MetaSiteSpecialEventPayloadOneOf$1 as MetaSiteSpecialEventPayloadOneOf,
      Asset$1 as Asset,
      State$1 as State,
      SiteCreated$1 as SiteCreated,
      SiteCreatedContext$1 as SiteCreatedContext,
      Namespace$1 as Namespace,
      SiteTransferred$1 as SiteTransferred,
      SiteDeleted$1 as SiteDeleted,
      DeleteContext$1 as DeleteContext,
      DeleteStatus$1 as DeleteStatus,
      SiteUndeleted$1 as SiteUndeleted,
      SitePublished$1 as SitePublished,
      SiteUnpublished$1 as SiteUnpublished,
      SiteMarkedAsTemplate$1 as SiteMarkedAsTemplate,
      SiteMarkedAsWixSite$1 as SiteMarkedAsWixSite,
      ServiceProvisioned$1 as ServiceProvisioned,
      ServiceRemoved$1 as ServiceRemoved,
      SiteRenamed$1 as SiteRenamed,
      SiteHardDeleted$1 as SiteHardDeleted,
      NamespaceChanged$1 as NamespaceChanged,
      StudioAssigned$1 as StudioAssigned,
      StudioUnassigned$1 as StudioUnassigned,
      Empty$1 as Empty,
      DomainEvent$1 as DomainEvent,
      DomainEventBodyOneOf$1 as DomainEventBodyOneOf,
      EntityCreatedEvent$1 as EntityCreatedEvent,
      EntityUpdatedEvent$1 as EntityUpdatedEvent,
      EntityDeletedEvent$1 as EntityDeletedEvent,
      ActionEvent$1 as ActionEvent,
      multilingualTranslationV1Content_universal_d_RemoveContentsByFilterRequest as RemoveContentsByFilterRequest,
      multilingualTranslationV1Content_universal_d_RemoveContentsByFilterResponse as RemoveContentsByFilterResponse,
      multilingualTranslationV1Content_universal_d_RepublishContentByFilterRequest as RepublishContentByFilterRequest,
      multilingualTranslationV1Content_universal_d_RepublishContentByFilterResponse as RepublishContentByFilterResponse,
      MessageEnvelope$1 as MessageEnvelope,
      IdentificationData$1 as IdentificationData,
      IdentificationDataIdOneOf$1 as IdentificationDataIdOneOf,
      WebhookIdentityType$1 as WebhookIdentityType,
      multilingualTranslationV1Content_universal_d_createContent as createContent,
      multilingualTranslationV1Content_universal_d_getContent as getContent,
      multilingualTranslationV1Content_universal_d_updateContent as updateContent,
      multilingualTranslationV1Content_universal_d_UpdateContentOptions as UpdateContentOptions,
      multilingualTranslationV1Content_universal_d_deleteContent as deleteContent,
      multilingualTranslationV1Content_universal_d_queryContents as queryContents,
      multilingualTranslationV1Content_universal_d_QueryContentsOptions as QueryContentsOptions,
      multilingualTranslationV1Content_universal_d_queryContentsLegacy as queryContentsLegacy,
      multilingualTranslationV1Content_universal_d_ContentsQueryResult as ContentsQueryResult,
      multilingualTranslationV1Content_universal_d_ContentsQueryBuilder as ContentsQueryBuilder,
      multilingualTranslationV1Content_universal_d_bulkCreateContent as bulkCreateContent,
      multilingualTranslationV1Content_universal_d_BulkCreateContentOptions as BulkCreateContentOptions,
      multilingualTranslationV1Content_universal_d_bulkUpdateContent as bulkUpdateContent,
      multilingualTranslationV1Content_universal_d_BulkUpdateContentOptions as BulkUpdateContentOptions,
      multilingualTranslationV1Content_universal_d_bulkDeleteContent as bulkDeleteContent,
      multilingualTranslationV1Content_universal_d_removeContentsByFilter as removeContentsByFilter,
      multilingualTranslationV1Content_universal_d_RemoveContentsByFilterOptions as RemoveContentsByFilterOptions,
      multilingualTranslationV1Content_universal_d_republishContentByFilter as republishContentByFilter,
      multilingualTranslationV1Content_universal_d_RepublishContentByFilterOptions as RepublishContentByFilterOptions,
    };
  }
  
  interface Schema {
      /**
       * Schema ID.
       * @readonly
       */
      _id?: string | null;
      /** (compound key) Schema key. */
      key?: SchemaKey;
      /** A list of unique fields on the entity in the specific language */
      fields?: Record<string, SchemaField>;
      /** Fields that will be displayed in content previews (e.g., product name for products). */
      previewFields?: PreviewFields;
      /** Whether the schema is hidden from the site. */
      hidden?: boolean | null;
      /** The name of the schema */
      displayName?: string | null;
      /** Higher level schema, group_by_name will point to an entity of this schema. */
      parentId?: string | null;
      /** @readonly */
      revision?: string | null;
      /** @readonly */
      _createdDate?: Date;
      /** @readonly */
      _updatedDate?: Date;
      /** indicate if the content should be duplicated when the site is cloned */
      duplicateContent?: boolean | null;
  }
  interface SchemaKey {
      /**
       * ID of app that created the schema.
       * @readonly
       */
      appId?: string;
      /** Unique name defined by the creator app, used to distinguish between different entities in the the app domain. */
      entityType?: string;
      /** Scope schema is defined in (Global/Site) */
      scope?: SchemaScope;
  }
  enum SchemaScope {
      UNKNOWN_SCOPE = "UNKNOWN_SCOPE",
      /** Global schema, relevant to all sites */
      GLOBAL = "GLOBAL",
      /** Site schema, relevant to specific site only */
      SITE = "SITE"
  }
  interface SchemaField {
      /**
       * Field ID.
       * @readonly
       */
      _id?: string;
      /** Field type. */
      type?: FieldType;
      /** Field descriptive name. */
      displayName?: string | null;
      /** Field semantic grouping */
      groupName?: string | null;
      /** Field minimum length (in case of text field) */
      minLength?: number | null;
      /** Field maximum length (in case text field) */
      maxLength?: number | null;
      /** Field format. If set - must be one of the values of wix.api.format as string (case insensitive) */
      format?: string | null;
      /** Whether the field is hidden from the site. Hidden field constraints (type, min/max length) are still active! */
      hidden?: boolean;
      /** Whether the field is for display only and should not allowed to be translated */
      displayOnly?: boolean;
      /** In cases where the order of the fields holds meaning, use this index */
      index?: number | null;
  }
  enum FieldType {
      /** Undefined field type */
      UNDEFINED_TYPE = "UNDEFINED_TYPE",
      /** Short text TEXT */
      SHORT_TEXT = "SHORT_TEXT",
      /** Long Plain Text TEXT */
      LONG_TEXT = "LONG_TEXT",
      /** Long text including styles, images, links and more... HTML */
      HTML = "HTML",
      /** Wix Rich-Content format RICO */
      RICH_CONTENT = "RICH_CONTENT",
      /** Wix Image media item */
      IMAGE = "IMAGE",
      /** Image URL without metadata */
      IMAGE_LINK = "IMAGE_LINK",
      /** contain an XML representation of an entity or part of it */
      JSON = "JSON",
      /** Wix Video media item */
      VIDEO = "VIDEO",
      /** Wix Document media item */
      DOCUMENT = "DOCUMENT"
  }
  interface PreviewFields {
      /** ID of field representing the schema's title. */
      titleFieldId?: string | null;
      /** ID of field representing the schema's image. */
      imageFieldId?: string | null;
  }
  interface CreateSchemaRequest {
      /** Schema to be created. */
      schema: Schema;
      /**
       * This field is in use if you want to override the app-id from the call scope server signature
       * This field is private and allowed only if the request came from Multilingual server signature
       * @internal
       */
      overrideAppId?: string | null;
  }
  interface CreateSchemaResponse {
      /** The created Schema. */
      schema?: Schema;
  }
  interface GetSchemaRequest {
      /** ID of the Schema to retrieve. */
      schemaId: string;
  }
  interface GetSchemaResponse {
      /** The requested Schema. */
      schema?: Schema;
  }
  interface GetSchemaByKeyRequest {
      /** ID of the Schema to retrieve. */
      key: SchemaKey;
  }
  interface GetSchemaByKeyResponse {
      /** The requested Schema. */
      schema?: Schema;
  }
  interface UpdateSchemaRequest {
      /** Schema to be updated, may be partial. */
      schema: Schema;
      /**
       * Set of fields to update.
       *
       * Fields that aren't included in `fieldMask.paths` are ignored.
       * @internal
       */
      fieldMask?: string[];
  }
  interface UpdateSchemaResponse {
      /** Updated Schema. */
      schema?: Schema;
  }
  interface DeleteSchemaRequest {
      /** Id of the Schema to delete. */
      schemaId: string;
  }
  interface DeleteSchemaResponse {
  }
  interface QuerySchemasRequest {
      /** WQL expression. */
      query?: CursorQuery;
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
  interface QuerySchemasResponse {
      /** List of Schemas. */
      schemas?: Schema[];
      /** Paging metadata */
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
  interface ListSiteSchemasRequest {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      paging?: CursorPaging;
  }
  interface ListSiteSchemasResponse {
      /** List of Schemas. */
      schemas?: Schema[];
      /** Paging metadata */
      pagingMetadata?: CursorPagingMetadata;
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
  interface Empty {
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
   * Creates a Schema.
   *
   * The request body must include schema key and fields.
   * @param schema - Schema to be created.
   * @internal
   * @documentationMaturity preview
   * @requiredField schema
   * @requiredField schema.key
   * @adminMethod
   * @returns The created Schema.
   */
  function createSchema(schema: Schema, options?: CreateSchemaOptions): Promise<Schema>;
  interface CreateSchemaOptions {
      /**
       * This field is in use if you want to override the app-id from the call scope server signature
       * This field is private and allowed only if the request came from Multilingual server signature
       * @internal
       */
      overrideAppId?: string | null;
  }
  /**
   * Retrieves a Schema.
   * @param schemaId - ID of the Schema to retrieve.
   * @internal
   * @documentationMaturity preview
   * @requiredField schemaId
   * @adminMethod
   * @returns The requested Schema.
   */
  function getSchema(schemaId: string): Promise<Schema>;
  /**
   * Retrieves a Schema by key.
   * @internal
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.keyAppId
   * @requiredField identifiers.keyEntityType
   * @requiredField identifiers.keyScope
   * @requiredField key
   * @adminMethod
   */
  function getSchemaByKey(identifiers: GetSchemaByKeyIdentifiers, key: GetSchemaByKey): Promise<GetSchemaByKeyResponse>;
  interface GetSchemaByKey {
  }
  interface GetSchemaByKeyIdentifiers {
      /**
       * ID of app that created the schema.
       * @readonly
       */
      keyAppId?: string;
      /** Unique name defined by the creator app, used to distinguish between different entities in the the app domain. */
      keyEntityType?: string;
      /** Scope schema is defined in (Global/Site) */
      keyScope?: SchemaScope;
  }
  /**
   * Updates a Schema.
   * @param _id - Schema ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField schema
   * @requiredField schema.revision
   * @adminMethod
   * @returns Updated Schema.
   */
  function updateSchema(_id: string | null, schema: UpdateSchema, options?: UpdateSchemaOptions): Promise<Schema>;
  interface UpdateSchema {
      /**
       * Schema ID.
       * @readonly
       */
      _id?: string | null;
      /** (compound key) Schema key. */
      key?: SchemaKey;
      /** A list of unique fields on the entity in the specific language */
      fields?: Record<string, SchemaField>;
      /** Fields that will be displayed in content previews (e.g., product name for products). */
      previewFields?: PreviewFields;
      /** Whether the schema is hidden from the site. */
      hidden?: boolean | null;
      /** The name of the schema */
      displayName?: string | null;
      /** Higher level schema, group_by_name will point to an entity of this schema. */
      parentId?: string | null;
      /** @readonly */
      revision?: string | null;
      /** @readonly */
      _createdDate?: Date;
      /** @readonly */
      _updatedDate?: Date;
      /** indicate if the content should be duplicated when the site is cloned */
      duplicateContent?: boolean | null;
  }
  interface UpdateSchemaOptions {
      /**
       * Set of fields to update.
       *
       * Fields that aren't included in `fieldMask.paths` are ignored.
       * @internal
       */
      fieldMask?: string[];
  }
  /**
   * Deletes a Schema.
   * @param schemaId - Id of the Schema to delete.
   * @internal
   * @documentationMaturity preview
   * @requiredField schemaId
   * @adminMethod
   */
  function deleteSchema(schemaId: string): Promise<void>;
  /**
   * Retrieves a list of Schemas, given the provided [paging, filtering, and sorting][1].
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function querySchemas(): SchemasQueryBuilder;
  interface QueryCursorResult {
      cursors: Cursors;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface SchemasQueryResult extends QueryCursorResult {
      items: Schema[];
      query: SchemasQueryBuilder;
      next: () => Promise<SchemasQueryResult>;
      prev: () => Promise<SchemasQueryResult>;
  }
  interface SchemasQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id' | 'key.appId' | 'key.entityType' | 'key.scope' | 'hidden' | 'parentId', value: any) => SchemasQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id' | 'key.appId' | 'key.entityType' | 'key.scope' | 'hidden' | 'parentId', value: any) => SchemasQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       * @documentationMaturity preview
       */
      startsWith: (propertyName: '_id' | 'key.appId' | 'key.entityType' | 'parentId', value: string) => SchemasQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       * @documentationMaturity preview
       */
      hasSome: (propertyName: '_id' | 'key.appId' | 'key.entityType' | 'key.scope' | 'hidden' | 'parentId', value: any[]) => SchemasQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id' | 'key.appId' | 'key.entityType' | 'key.scope' | 'hidden' | 'parentId', value: any) => SchemasQueryBuilder;
      /** @documentationMaturity preview */
      exists: (propertyName: '_id' | 'key.appId' | 'key.entityType' | 'key.scope' | 'hidden' | 'parentId', value: boolean) => SchemasQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'_id' | 'key.appId' | 'key.entityType' | 'key.scope' | 'hidden' | 'parentId'>) => SchemasQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'_id' | 'key.appId' | 'key.entityType' | 'key.scope' | 'hidden' | 'parentId'>) => SchemasQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => SchemasQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => SchemasQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<SchemasQueryResult>;
  }
  /**
   * Retrieves a list of Schemas of app installed on site.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function listSiteSchemas(options?: ListSiteSchemasOptions): Promise<ListSiteSchemasResponse>;
  interface ListSiteSchemasOptions {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      paging?: CursorPaging;
  }
  
  type multilingualTranslationV1Schema_universal_d_Schema = Schema;
  type multilingualTranslationV1Schema_universal_d_SchemaKey = SchemaKey;
  type multilingualTranslationV1Schema_universal_d_SchemaScope = SchemaScope;
  const multilingualTranslationV1Schema_universal_d_SchemaScope: typeof SchemaScope;
  type multilingualTranslationV1Schema_universal_d_SchemaField = SchemaField;
  type multilingualTranslationV1Schema_universal_d_FieldType = FieldType;
  const multilingualTranslationV1Schema_universal_d_FieldType: typeof FieldType;
  type multilingualTranslationV1Schema_universal_d_PreviewFields = PreviewFields;
  type multilingualTranslationV1Schema_universal_d_CreateSchemaRequest = CreateSchemaRequest;
  type multilingualTranslationV1Schema_universal_d_CreateSchemaResponse = CreateSchemaResponse;
  type multilingualTranslationV1Schema_universal_d_GetSchemaRequest = GetSchemaRequest;
  type multilingualTranslationV1Schema_universal_d_GetSchemaResponse = GetSchemaResponse;
  type multilingualTranslationV1Schema_universal_d_GetSchemaByKeyRequest = GetSchemaByKeyRequest;
  type multilingualTranslationV1Schema_universal_d_GetSchemaByKeyResponse = GetSchemaByKeyResponse;
  type multilingualTranslationV1Schema_universal_d_UpdateSchemaRequest = UpdateSchemaRequest;
  type multilingualTranslationV1Schema_universal_d_UpdateSchemaResponse = UpdateSchemaResponse;
  type multilingualTranslationV1Schema_universal_d_DeleteSchemaRequest = DeleteSchemaRequest;
  type multilingualTranslationV1Schema_universal_d_DeleteSchemaResponse = DeleteSchemaResponse;
  type multilingualTranslationV1Schema_universal_d_QuerySchemasRequest = QuerySchemasRequest;
  type multilingualTranslationV1Schema_universal_d_CursorQuery = CursorQuery;
  type multilingualTranslationV1Schema_universal_d_CursorQueryPagingMethodOneOf = CursorQueryPagingMethodOneOf;
  type multilingualTranslationV1Schema_universal_d_Sorting = Sorting;
  type multilingualTranslationV1Schema_universal_d_SortOrder = SortOrder;
  const multilingualTranslationV1Schema_universal_d_SortOrder: typeof SortOrder;
  type multilingualTranslationV1Schema_universal_d_CursorPaging = CursorPaging;
  type multilingualTranslationV1Schema_universal_d_QuerySchemasResponse = QuerySchemasResponse;
  type multilingualTranslationV1Schema_universal_d_CursorPagingMetadata = CursorPagingMetadata;
  type multilingualTranslationV1Schema_universal_d_Cursors = Cursors;
  type multilingualTranslationV1Schema_universal_d_ListSiteSchemasRequest = ListSiteSchemasRequest;
  type multilingualTranslationV1Schema_universal_d_ListSiteSchemasResponse = ListSiteSchemasResponse;
  type multilingualTranslationV1Schema_universal_d_MetaSiteSpecialEvent = MetaSiteSpecialEvent;
  type multilingualTranslationV1Schema_universal_d_MetaSiteSpecialEventPayloadOneOf = MetaSiteSpecialEventPayloadOneOf;
  type multilingualTranslationV1Schema_universal_d_Asset = Asset;
  type multilingualTranslationV1Schema_universal_d_State = State;
  const multilingualTranslationV1Schema_universal_d_State: typeof State;
  type multilingualTranslationV1Schema_universal_d_SiteCreated = SiteCreated;
  type multilingualTranslationV1Schema_universal_d_SiteCreatedContext = SiteCreatedContext;
  const multilingualTranslationV1Schema_universal_d_SiteCreatedContext: typeof SiteCreatedContext;
  type multilingualTranslationV1Schema_universal_d_Namespace = Namespace;
  const multilingualTranslationV1Schema_universal_d_Namespace: typeof Namespace;
  type multilingualTranslationV1Schema_universal_d_SiteTransferred = SiteTransferred;
  type multilingualTranslationV1Schema_universal_d_SiteDeleted = SiteDeleted;
  type multilingualTranslationV1Schema_universal_d_DeleteContext = DeleteContext;
  type multilingualTranslationV1Schema_universal_d_DeleteStatus = DeleteStatus;
  const multilingualTranslationV1Schema_universal_d_DeleteStatus: typeof DeleteStatus;
  type multilingualTranslationV1Schema_universal_d_SiteUndeleted = SiteUndeleted;
  type multilingualTranslationV1Schema_universal_d_SitePublished = SitePublished;
  type multilingualTranslationV1Schema_universal_d_SiteUnpublished = SiteUnpublished;
  type multilingualTranslationV1Schema_universal_d_SiteMarkedAsTemplate = SiteMarkedAsTemplate;
  type multilingualTranslationV1Schema_universal_d_SiteMarkedAsWixSite = SiteMarkedAsWixSite;
  type multilingualTranslationV1Schema_universal_d_ServiceProvisioned = ServiceProvisioned;
  type multilingualTranslationV1Schema_universal_d_ServiceRemoved = ServiceRemoved;
  type multilingualTranslationV1Schema_universal_d_SiteRenamed = SiteRenamed;
  type multilingualTranslationV1Schema_universal_d_SiteHardDeleted = SiteHardDeleted;
  type multilingualTranslationV1Schema_universal_d_NamespaceChanged = NamespaceChanged;
  type multilingualTranslationV1Schema_universal_d_StudioAssigned = StudioAssigned;
  type multilingualTranslationV1Schema_universal_d_StudioUnassigned = StudioUnassigned;
  type multilingualTranslationV1Schema_universal_d_Empty = Empty;
  type multilingualTranslationV1Schema_universal_d_DomainEvent = DomainEvent;
  type multilingualTranslationV1Schema_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type multilingualTranslationV1Schema_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type multilingualTranslationV1Schema_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type multilingualTranslationV1Schema_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type multilingualTranslationV1Schema_universal_d_ActionEvent = ActionEvent;
  type multilingualTranslationV1Schema_universal_d_MessageEnvelope = MessageEnvelope;
  type multilingualTranslationV1Schema_universal_d_IdentificationData = IdentificationData;
  type multilingualTranslationV1Schema_universal_d_IdentificationDataIdOneOf = IdentificationDataIdOneOf;
  type multilingualTranslationV1Schema_universal_d_WebhookIdentityType = WebhookIdentityType;
  const multilingualTranslationV1Schema_universal_d_WebhookIdentityType: typeof WebhookIdentityType;
  const multilingualTranslationV1Schema_universal_d_createSchema: typeof createSchema;
  type multilingualTranslationV1Schema_universal_d_CreateSchemaOptions = CreateSchemaOptions;
  const multilingualTranslationV1Schema_universal_d_getSchema: typeof getSchema;
  const multilingualTranslationV1Schema_universal_d_getSchemaByKey: typeof getSchemaByKey;
  type multilingualTranslationV1Schema_universal_d_GetSchemaByKey = GetSchemaByKey;
  type multilingualTranslationV1Schema_universal_d_GetSchemaByKeyIdentifiers = GetSchemaByKeyIdentifiers;
  const multilingualTranslationV1Schema_universal_d_updateSchema: typeof updateSchema;
  type multilingualTranslationV1Schema_universal_d_UpdateSchema = UpdateSchema;
  type multilingualTranslationV1Schema_universal_d_UpdateSchemaOptions = UpdateSchemaOptions;
  const multilingualTranslationV1Schema_universal_d_deleteSchema: typeof deleteSchema;
  const multilingualTranslationV1Schema_universal_d_querySchemas: typeof querySchemas;
  type multilingualTranslationV1Schema_universal_d_SchemasQueryResult = SchemasQueryResult;
  type multilingualTranslationV1Schema_universal_d_SchemasQueryBuilder = SchemasQueryBuilder;
  const multilingualTranslationV1Schema_universal_d_listSiteSchemas: typeof listSiteSchemas;
  type multilingualTranslationV1Schema_universal_d_ListSiteSchemasOptions = ListSiteSchemasOptions;
  namespace multilingualTranslationV1Schema_universal_d {
    export {
      multilingualTranslationV1Schema_universal_d_Schema as Schema,
      multilingualTranslationV1Schema_universal_d_SchemaKey as SchemaKey,
      multilingualTranslationV1Schema_universal_d_SchemaScope as SchemaScope,
      multilingualTranslationV1Schema_universal_d_SchemaField as SchemaField,
      multilingualTranslationV1Schema_universal_d_FieldType as FieldType,
      multilingualTranslationV1Schema_universal_d_PreviewFields as PreviewFields,
      multilingualTranslationV1Schema_universal_d_CreateSchemaRequest as CreateSchemaRequest,
      multilingualTranslationV1Schema_universal_d_CreateSchemaResponse as CreateSchemaResponse,
      multilingualTranslationV1Schema_universal_d_GetSchemaRequest as GetSchemaRequest,
      multilingualTranslationV1Schema_universal_d_GetSchemaResponse as GetSchemaResponse,
      multilingualTranslationV1Schema_universal_d_GetSchemaByKeyRequest as GetSchemaByKeyRequest,
      multilingualTranslationV1Schema_universal_d_GetSchemaByKeyResponse as GetSchemaByKeyResponse,
      multilingualTranslationV1Schema_universal_d_UpdateSchemaRequest as UpdateSchemaRequest,
      multilingualTranslationV1Schema_universal_d_UpdateSchemaResponse as UpdateSchemaResponse,
      multilingualTranslationV1Schema_universal_d_DeleteSchemaRequest as DeleteSchemaRequest,
      multilingualTranslationV1Schema_universal_d_DeleteSchemaResponse as DeleteSchemaResponse,
      multilingualTranslationV1Schema_universal_d_QuerySchemasRequest as QuerySchemasRequest,
      multilingualTranslationV1Schema_universal_d_CursorQuery as CursorQuery,
      multilingualTranslationV1Schema_universal_d_CursorQueryPagingMethodOneOf as CursorQueryPagingMethodOneOf,
      multilingualTranslationV1Schema_universal_d_Sorting as Sorting,
      multilingualTranslationV1Schema_universal_d_SortOrder as SortOrder,
      multilingualTranslationV1Schema_universal_d_CursorPaging as CursorPaging,
      multilingualTranslationV1Schema_universal_d_QuerySchemasResponse as QuerySchemasResponse,
      multilingualTranslationV1Schema_universal_d_CursorPagingMetadata as CursorPagingMetadata,
      multilingualTranslationV1Schema_universal_d_Cursors as Cursors,
      multilingualTranslationV1Schema_universal_d_ListSiteSchemasRequest as ListSiteSchemasRequest,
      multilingualTranslationV1Schema_universal_d_ListSiteSchemasResponse as ListSiteSchemasResponse,
      multilingualTranslationV1Schema_universal_d_MetaSiteSpecialEvent as MetaSiteSpecialEvent,
      multilingualTranslationV1Schema_universal_d_MetaSiteSpecialEventPayloadOneOf as MetaSiteSpecialEventPayloadOneOf,
      multilingualTranslationV1Schema_universal_d_Asset as Asset,
      multilingualTranslationV1Schema_universal_d_State as State,
      multilingualTranslationV1Schema_universal_d_SiteCreated as SiteCreated,
      multilingualTranslationV1Schema_universal_d_SiteCreatedContext as SiteCreatedContext,
      multilingualTranslationV1Schema_universal_d_Namespace as Namespace,
      multilingualTranslationV1Schema_universal_d_SiteTransferred as SiteTransferred,
      multilingualTranslationV1Schema_universal_d_SiteDeleted as SiteDeleted,
      multilingualTranslationV1Schema_universal_d_DeleteContext as DeleteContext,
      multilingualTranslationV1Schema_universal_d_DeleteStatus as DeleteStatus,
      multilingualTranslationV1Schema_universal_d_SiteUndeleted as SiteUndeleted,
      multilingualTranslationV1Schema_universal_d_SitePublished as SitePublished,
      multilingualTranslationV1Schema_universal_d_SiteUnpublished as SiteUnpublished,
      multilingualTranslationV1Schema_universal_d_SiteMarkedAsTemplate as SiteMarkedAsTemplate,
      multilingualTranslationV1Schema_universal_d_SiteMarkedAsWixSite as SiteMarkedAsWixSite,
      multilingualTranslationV1Schema_universal_d_ServiceProvisioned as ServiceProvisioned,
      multilingualTranslationV1Schema_universal_d_ServiceRemoved as ServiceRemoved,
      multilingualTranslationV1Schema_universal_d_SiteRenamed as SiteRenamed,
      multilingualTranslationV1Schema_universal_d_SiteHardDeleted as SiteHardDeleted,
      multilingualTranslationV1Schema_universal_d_NamespaceChanged as NamespaceChanged,
      multilingualTranslationV1Schema_universal_d_StudioAssigned as StudioAssigned,
      multilingualTranslationV1Schema_universal_d_StudioUnassigned as StudioUnassigned,
      multilingualTranslationV1Schema_universal_d_Empty as Empty,
      multilingualTranslationV1Schema_universal_d_DomainEvent as DomainEvent,
      multilingualTranslationV1Schema_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      multilingualTranslationV1Schema_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      multilingualTranslationV1Schema_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      multilingualTranslationV1Schema_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      multilingualTranslationV1Schema_universal_d_ActionEvent as ActionEvent,
      multilingualTranslationV1Schema_universal_d_MessageEnvelope as MessageEnvelope,
      multilingualTranslationV1Schema_universal_d_IdentificationData as IdentificationData,
      multilingualTranslationV1Schema_universal_d_IdentificationDataIdOneOf as IdentificationDataIdOneOf,
      multilingualTranslationV1Schema_universal_d_WebhookIdentityType as WebhookIdentityType,
      multilingualTranslationV1Schema_universal_d_createSchema as createSchema,
      multilingualTranslationV1Schema_universal_d_CreateSchemaOptions as CreateSchemaOptions,
      multilingualTranslationV1Schema_universal_d_getSchema as getSchema,
      multilingualTranslationV1Schema_universal_d_getSchemaByKey as getSchemaByKey,
      multilingualTranslationV1Schema_universal_d_GetSchemaByKey as GetSchemaByKey,
      multilingualTranslationV1Schema_universal_d_GetSchemaByKeyIdentifiers as GetSchemaByKeyIdentifiers,
      multilingualTranslationV1Schema_universal_d_updateSchema as updateSchema,
      multilingualTranslationV1Schema_universal_d_UpdateSchema as UpdateSchema,
      multilingualTranslationV1Schema_universal_d_UpdateSchemaOptions as UpdateSchemaOptions,
      multilingualTranslationV1Schema_universal_d_deleteSchema as deleteSchema,
      multilingualTranslationV1Schema_universal_d_querySchemas as querySchemas,
      multilingualTranslationV1Schema_universal_d_SchemasQueryResult as SchemasQueryResult,
      multilingualTranslationV1Schema_universal_d_SchemasQueryBuilder as SchemasQueryBuilder,
      multilingualTranslationV1Schema_universal_d_listSiteSchemas as listSiteSchemas,
      multilingualTranslationV1Schema_universal_d_ListSiteSchemasOptions as ListSiteSchemasOptions,
    };
  }
  
  export { multilingualMachineV3TranslatableContent_universal_d as machineTranslation, multilingualTranslationV1Content_universal_d as translationContents, multilingualTranslationV1Schema_universal_d as translationSchemas };
}
