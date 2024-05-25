declare module "wix-members-about.v1" {
  interface MemberAbout {
      /**
       * About ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Revision.
       * @readonly
       */
      revision?: string | null;
      /** Member ID. */
      memberId?: string | null;
      /** https://github.com/wix-private/wix-ricos/blob/master/wix-ricos-schema/src/main/proto/wix/rich_content/v1/rich_content.proto */
      content?: RichContent;
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
  interface CreateMemberAboutRequest {
      memberAbout: MemberAbout;
  }
  interface CreateMemberAboutResponse {
      memberAbout?: MemberAbout;
  }
  interface UpdateMemberAboutRequest {
      memberAbout?: MemberAbout;
  }
  interface UpdateMemberAboutResponse {
      memberAbout?: MemberAbout;
  }
  interface DeleteMemberAboutRequest {
      _id: string;
  }
  interface DeleteMemberAboutResponse {
  }
  interface GetMemberAboutRequest {
      _id: string;
  }
  interface GetMemberAboutResponse {
      memberAbout?: MemberAbout;
  }
  interface GetMyMemberAboutRequest {
  }
  interface GetMyMemberAboutResponse {
      memberAbout?: MemberAbout;
  }
  interface QueryMemberAboutsRequest {
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
  interface QueryMemberAboutsResponse {
      memberAbouts?: MemberAbout[];
      metadata?: CursorPagingMetadata;
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
   * Creates member about.
   * @internal
   * @documentationMaturity preview
   * @requiredField memberAbout
   * @requiredField memberAbout.content
   */
  function createMemberAbout(memberAbout: MemberAbout): Promise<MemberAbout>;
  /**
   * Updates an about content by ID.
   * @param _id - About ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   */
  function updateMemberAbout(_id: string | null, options?: UpdateMemberAboutOptions): Promise<MemberAbout>;
  interface UpdateMemberAboutOptions {
      memberAbout: {
          /**
           * About ID.
           * @readonly
           */
          _id?: string | null;
          /**
           * Revision.
           * @readonly
           */
          revision?: string | null;
          /** Member ID. */
          memberId?: string | null;
          /** https://github.com/wix-private/wix-ricos/blob/master/wix-ricos-schema/src/main/proto/wix/rich_content/v1/rich_content.proto */
          content?: RichContent;
      };
  }
  /**
   * Deletes an about.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   */
  function deleteMemberAbout(_id: string): Promise<void>;
  /**
   * Retrieves an about by ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   */
  function getMemberAbout(_id: string): Promise<MemberAbout>;
  /**
   * Retrieves current logged-in about
   * @internal
   * @documentationMaturity preview
   */
  function getMyMemberAbout(): Promise<GetMyMemberAboutResponse>;
  /**
   * Retries a list of up to 100 abouts, given the provided filters, sorting and paging.
   *
   * Currently supported fields for filtering:
   *
   * - `id`
   * - `member_id`
   * @internal
   * @documentationMaturity preview
   */
  function queryMemberAbouts(): MemberAboutsQueryBuilder;
  interface QueryCursorResult {
      cursors: Cursors;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface MemberAboutsQueryResult extends QueryCursorResult {
      items: MemberAbout[];
      query: MemberAboutsQueryBuilder;
      next: () => Promise<MemberAboutsQueryResult>;
      prev: () => Promise<MemberAboutsQueryResult>;
  }
  interface MemberAboutsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id' | 'memberId', value: any) => MemberAboutsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id' | 'memberId', value: any) => MemberAboutsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       * @documentationMaturity preview
       */
      startsWith: (propertyName: '_id' | 'memberId', value: string) => MemberAboutsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       * @documentationMaturity preview
       */
      hasSome: (propertyName: '_id' | 'memberId', value: any[]) => MemberAboutsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id' | 'memberId', value: any) => MemberAboutsQueryBuilder;
      /** @documentationMaturity preview */
      exists: (propertyName: '_id' | 'memberId', value: boolean) => MemberAboutsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => MemberAboutsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => MemberAboutsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<MemberAboutsQueryResult>;
  }
  
  type membersAboutV2MemberAbout_universal_d_MemberAbout = MemberAbout;
  type membersAboutV2MemberAbout_universal_d_RichContent = RichContent;
  type membersAboutV2MemberAbout_universal_d_Node = Node;
  type membersAboutV2MemberAbout_universal_d_NodeDataOneOf = NodeDataOneOf;
  type membersAboutV2MemberAbout_universal_d_NodeType = NodeType;
  const membersAboutV2MemberAbout_universal_d_NodeType: typeof NodeType;
  type membersAboutV2MemberAbout_universal_d_NodeStyle = NodeStyle;
  type membersAboutV2MemberAbout_universal_d_ButtonData = ButtonData;
  type membersAboutV2MemberAbout_universal_d_Border = Border;
  type membersAboutV2MemberAbout_universal_d_Colors = Colors;
  type membersAboutV2MemberAbout_universal_d_PluginContainerData = PluginContainerData;
  type membersAboutV2MemberAbout_universal_d_WidthType = WidthType;
  const membersAboutV2MemberAbout_universal_d_WidthType: typeof WidthType;
  type membersAboutV2MemberAbout_universal_d_PluginContainerDataWidth = PluginContainerDataWidth;
  type membersAboutV2MemberAbout_universal_d_PluginContainerDataWidthDataOneOf = PluginContainerDataWidthDataOneOf;
  type membersAboutV2MemberAbout_universal_d_PluginContainerDataAlignment = PluginContainerDataAlignment;
  const membersAboutV2MemberAbout_universal_d_PluginContainerDataAlignment: typeof PluginContainerDataAlignment;
  type membersAboutV2MemberAbout_universal_d_Spoiler = Spoiler;
  type membersAboutV2MemberAbout_universal_d_Height = Height;
  type membersAboutV2MemberAbout_universal_d_Type = Type;
  const membersAboutV2MemberAbout_universal_d_Type: typeof Type;
  type membersAboutV2MemberAbout_universal_d_Styles = Styles;
  type membersAboutV2MemberAbout_universal_d_Link = Link;
  type membersAboutV2MemberAbout_universal_d_LinkDataOneOf = LinkDataOneOf;
  type membersAboutV2MemberAbout_universal_d_Target = Target;
  const membersAboutV2MemberAbout_universal_d_Target: typeof Target;
  type membersAboutV2MemberAbout_universal_d_Rel = Rel;
  type membersAboutV2MemberAbout_universal_d_CodeBlockData = CodeBlockData;
  type membersAboutV2MemberAbout_universal_d_TextStyle = TextStyle;
  type membersAboutV2MemberAbout_universal_d_TextAlignment = TextAlignment;
  const membersAboutV2MemberAbout_universal_d_TextAlignment: typeof TextAlignment;
  type membersAboutV2MemberAbout_universal_d_DividerData = DividerData;
  type membersAboutV2MemberAbout_universal_d_LineStyle = LineStyle;
  const membersAboutV2MemberAbout_universal_d_LineStyle: typeof LineStyle;
  type membersAboutV2MemberAbout_universal_d_Width = Width;
  const membersAboutV2MemberAbout_universal_d_Width: typeof Width;
  type membersAboutV2MemberAbout_universal_d_Alignment = Alignment;
  const membersAboutV2MemberAbout_universal_d_Alignment: typeof Alignment;
  type membersAboutV2MemberAbout_universal_d_FileData = FileData;
  type membersAboutV2MemberAbout_universal_d_ViewMode = ViewMode;
  const membersAboutV2MemberAbout_universal_d_ViewMode: typeof ViewMode;
  type membersAboutV2MemberAbout_universal_d_FileSource = FileSource;
  type membersAboutV2MemberAbout_universal_d_FileSourceDataOneOf = FileSourceDataOneOf;
  type membersAboutV2MemberAbout_universal_d_PDFSettings = PDFSettings;
  type membersAboutV2MemberAbout_universal_d_GalleryData = GalleryData;
  type membersAboutV2MemberAbout_universal_d_Media = Media;
  type membersAboutV2MemberAbout_universal_d_Image = Image;
  type membersAboutV2MemberAbout_universal_d_Video = Video;
  type membersAboutV2MemberAbout_universal_d_Item = Item;
  type membersAboutV2MemberAbout_universal_d_ItemDataOneOf = ItemDataOneOf;
  type membersAboutV2MemberAbout_universal_d_GalleryOptions = GalleryOptions;
  type membersAboutV2MemberAbout_universal_d_LayoutType = LayoutType;
  const membersAboutV2MemberAbout_universal_d_LayoutType: typeof LayoutType;
  type membersAboutV2MemberAbout_universal_d_Orientation = Orientation;
  const membersAboutV2MemberAbout_universal_d_Orientation: typeof Orientation;
  type membersAboutV2MemberAbout_universal_d_Crop = Crop;
  const membersAboutV2MemberAbout_universal_d_Crop: typeof Crop;
  type membersAboutV2MemberAbout_universal_d_ThumbnailsAlignment = ThumbnailsAlignment;
  const membersAboutV2MemberAbout_universal_d_ThumbnailsAlignment: typeof ThumbnailsAlignment;
  type membersAboutV2MemberAbout_universal_d_Layout = Layout;
  type membersAboutV2MemberAbout_universal_d_ItemStyle = ItemStyle;
  type membersAboutV2MemberAbout_universal_d_Thumbnails = Thumbnails;
  type membersAboutV2MemberAbout_universal_d_GIFData = GIFData;
  type membersAboutV2MemberAbout_universal_d_GIF = GIF;
  type membersAboutV2MemberAbout_universal_d_HeadingData = HeadingData;
  type membersAboutV2MemberAbout_universal_d_HTMLData = HTMLData;
  type membersAboutV2MemberAbout_universal_d_HTMLDataDataOneOf = HTMLDataDataOneOf;
  type membersAboutV2MemberAbout_universal_d_Source = Source;
  const membersAboutV2MemberAbout_universal_d_Source: typeof Source;
  type membersAboutV2MemberAbout_universal_d_ImageData = ImageData;
  type membersAboutV2MemberAbout_universal_d_LinkPreviewData = LinkPreviewData;
  type membersAboutV2MemberAbout_universal_d_MapData = MapData;
  type membersAboutV2MemberAbout_universal_d_MapSettings = MapSettings;
  type membersAboutV2MemberAbout_universal_d_MapType = MapType;
  const membersAboutV2MemberAbout_universal_d_MapType: typeof MapType;
  type membersAboutV2MemberAbout_universal_d_ParagraphData = ParagraphData;
  type membersAboutV2MemberAbout_universal_d_PollData = PollData;
  type membersAboutV2MemberAbout_universal_d_ViewRole = ViewRole;
  const membersAboutV2MemberAbout_universal_d_ViewRole: typeof ViewRole;
  type membersAboutV2MemberAbout_universal_d_VoteRole = VoteRole;
  const membersAboutV2MemberAbout_universal_d_VoteRole: typeof VoteRole;
  type membersAboutV2MemberAbout_universal_d_Permissions = Permissions;
  type membersAboutV2MemberAbout_universal_d_Option = Option;
  type membersAboutV2MemberAbout_universal_d_Settings = Settings;
  type membersAboutV2MemberAbout_universal_d_PollLayoutType = PollLayoutType;
  const membersAboutV2MemberAbout_universal_d_PollLayoutType: typeof PollLayoutType;
  type membersAboutV2MemberAbout_universal_d_PollLayoutDirection = PollLayoutDirection;
  const membersAboutV2MemberAbout_universal_d_PollLayoutDirection: typeof PollLayoutDirection;
  type membersAboutV2MemberAbout_universal_d_PollLayout = PollLayout;
  type membersAboutV2MemberAbout_universal_d_OptionLayout = OptionLayout;
  type membersAboutV2MemberAbout_universal_d_BackgroundType = BackgroundType;
  const membersAboutV2MemberAbout_universal_d_BackgroundType: typeof BackgroundType;
  type membersAboutV2MemberAbout_universal_d_Gradient = Gradient;
  type membersAboutV2MemberAbout_universal_d_Background = Background;
  type membersAboutV2MemberAbout_universal_d_BackgroundBackgroundOneOf = BackgroundBackgroundOneOf;
  type membersAboutV2MemberAbout_universal_d_PollDesign = PollDesign;
  type membersAboutV2MemberAbout_universal_d_OptionDesign = OptionDesign;
  type membersAboutV2MemberAbout_universal_d_Poll = Poll;
  type membersAboutV2MemberAbout_universal_d_PollDataLayout = PollDataLayout;
  type membersAboutV2MemberAbout_universal_d_Design = Design;
  type membersAboutV2MemberAbout_universal_d_TextData = TextData;
  type membersAboutV2MemberAbout_universal_d_Decoration = Decoration;
  type membersAboutV2MemberAbout_universal_d_DecorationDataOneOf = DecorationDataOneOf;
  type membersAboutV2MemberAbout_universal_d_DecorationType = DecorationType;
  const membersAboutV2MemberAbout_universal_d_DecorationType: typeof DecorationType;
  type membersAboutV2MemberAbout_universal_d_AnchorData = AnchorData;
  type membersAboutV2MemberAbout_universal_d_ColorData = ColorData;
  type membersAboutV2MemberAbout_universal_d_LinkData = LinkData;
  type membersAboutV2MemberAbout_universal_d_MentionData = MentionData;
  type membersAboutV2MemberAbout_universal_d_FontSizeData = FontSizeData;
  type membersAboutV2MemberAbout_universal_d_FontType = FontType;
  const membersAboutV2MemberAbout_universal_d_FontType: typeof FontType;
  type membersAboutV2MemberAbout_universal_d_AppEmbedData = AppEmbedData;
  type membersAboutV2MemberAbout_universal_d_AppEmbedDataAppDataOneOf = AppEmbedDataAppDataOneOf;
  type membersAboutV2MemberAbout_universal_d_AppType = AppType;
  const membersAboutV2MemberAbout_universal_d_AppType: typeof AppType;
  type membersAboutV2MemberAbout_universal_d_BookingData = BookingData;
  type membersAboutV2MemberAbout_universal_d_EventData = EventData;
  type membersAboutV2MemberAbout_universal_d_VideoData = VideoData;
  type membersAboutV2MemberAbout_universal_d_PlaybackOptions = PlaybackOptions;
  type membersAboutV2MemberAbout_universal_d_EmbedData = EmbedData;
  type membersAboutV2MemberAbout_universal_d_Oembed = Oembed;
  type membersAboutV2MemberAbout_universal_d_CollapsibleListData = CollapsibleListData;
  type membersAboutV2MemberAbout_universal_d_InitialExpandedItems = InitialExpandedItems;
  const membersAboutV2MemberAbout_universal_d_InitialExpandedItems: typeof InitialExpandedItems;
  type membersAboutV2MemberAbout_universal_d_Direction = Direction;
  const membersAboutV2MemberAbout_universal_d_Direction: typeof Direction;
  type membersAboutV2MemberAbout_universal_d_TableData = TableData;
  type membersAboutV2MemberAbout_universal_d_Dimensions = Dimensions;
  type membersAboutV2MemberAbout_universal_d_TableCellData = TableCellData;
  type membersAboutV2MemberAbout_universal_d_VerticalAlignment = VerticalAlignment;
  const membersAboutV2MemberAbout_universal_d_VerticalAlignment: typeof VerticalAlignment;
  type membersAboutV2MemberAbout_universal_d_CellStyle = CellStyle;
  type membersAboutV2MemberAbout_universal_d_BorderColors = BorderColors;
  type membersAboutV2MemberAbout_universal_d_NullValue = NullValue;
  const membersAboutV2MemberAbout_universal_d_NullValue: typeof NullValue;
  type membersAboutV2MemberAbout_universal_d_ListValue = ListValue;
  type membersAboutV2MemberAbout_universal_d_AudioData = AudioData;
  type membersAboutV2MemberAbout_universal_d_OrderedListData = OrderedListData;
  type membersAboutV2MemberAbout_universal_d_BulletedListData = BulletedListData;
  type membersAboutV2MemberAbout_universal_d_BlockquoteData = BlockquoteData;
  type membersAboutV2MemberAbout_universal_d_Metadata = Metadata;
  type membersAboutV2MemberAbout_universal_d_DocumentStyle = DocumentStyle;
  type membersAboutV2MemberAbout_universal_d_TextNodeStyle = TextNodeStyle;
  type membersAboutV2MemberAbout_universal_d_CreateMemberAboutRequest = CreateMemberAboutRequest;
  type membersAboutV2MemberAbout_universal_d_CreateMemberAboutResponse = CreateMemberAboutResponse;
  type membersAboutV2MemberAbout_universal_d_UpdateMemberAboutRequest = UpdateMemberAboutRequest;
  type membersAboutV2MemberAbout_universal_d_UpdateMemberAboutResponse = UpdateMemberAboutResponse;
  type membersAboutV2MemberAbout_universal_d_DeleteMemberAboutRequest = DeleteMemberAboutRequest;
  type membersAboutV2MemberAbout_universal_d_DeleteMemberAboutResponse = DeleteMemberAboutResponse;
  type membersAboutV2MemberAbout_universal_d_GetMemberAboutRequest = GetMemberAboutRequest;
  type membersAboutV2MemberAbout_universal_d_GetMemberAboutResponse = GetMemberAboutResponse;
  type membersAboutV2MemberAbout_universal_d_GetMyMemberAboutRequest = GetMyMemberAboutRequest;
  type membersAboutV2MemberAbout_universal_d_GetMyMemberAboutResponse = GetMyMemberAboutResponse;
  type membersAboutV2MemberAbout_universal_d_QueryMemberAboutsRequest = QueryMemberAboutsRequest;
  type membersAboutV2MemberAbout_universal_d_CursorQuery = CursorQuery;
  type membersAboutV2MemberAbout_universal_d_CursorQueryPagingMethodOneOf = CursorQueryPagingMethodOneOf;
  type membersAboutV2MemberAbout_universal_d_Sorting = Sorting;
  type membersAboutV2MemberAbout_universal_d_SortOrder = SortOrder;
  const membersAboutV2MemberAbout_universal_d_SortOrder: typeof SortOrder;
  type membersAboutV2MemberAbout_universal_d_CursorPaging = CursorPaging;
  type membersAboutV2MemberAbout_universal_d_QueryMemberAboutsResponse = QueryMemberAboutsResponse;
  type membersAboutV2MemberAbout_universal_d_CursorPagingMetadata = CursorPagingMetadata;
  type membersAboutV2MemberAbout_universal_d_Cursors = Cursors;
  type membersAboutV2MemberAbout_universal_d_DomainEvent = DomainEvent;
  type membersAboutV2MemberAbout_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type membersAboutV2MemberAbout_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type membersAboutV2MemberAbout_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type membersAboutV2MemberAbout_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type membersAboutV2MemberAbout_universal_d_ActionEvent = ActionEvent;
  type membersAboutV2MemberAbout_universal_d_Empty = Empty;
  const membersAboutV2MemberAbout_universal_d_createMemberAbout: typeof createMemberAbout;
  const membersAboutV2MemberAbout_universal_d_updateMemberAbout: typeof updateMemberAbout;
  type membersAboutV2MemberAbout_universal_d_UpdateMemberAboutOptions = UpdateMemberAboutOptions;
  const membersAboutV2MemberAbout_universal_d_deleteMemberAbout: typeof deleteMemberAbout;
  const membersAboutV2MemberAbout_universal_d_getMemberAbout: typeof getMemberAbout;
  const membersAboutV2MemberAbout_universal_d_getMyMemberAbout: typeof getMyMemberAbout;
  const membersAboutV2MemberAbout_universal_d_queryMemberAbouts: typeof queryMemberAbouts;
  type membersAboutV2MemberAbout_universal_d_MemberAboutsQueryResult = MemberAboutsQueryResult;
  type membersAboutV2MemberAbout_universal_d_MemberAboutsQueryBuilder = MemberAboutsQueryBuilder;
  namespace membersAboutV2MemberAbout_universal_d {
    export {
      membersAboutV2MemberAbout_universal_d_MemberAbout as MemberAbout,
      membersAboutV2MemberAbout_universal_d_RichContent as RichContent,
      membersAboutV2MemberAbout_universal_d_Node as Node,
      membersAboutV2MemberAbout_universal_d_NodeDataOneOf as NodeDataOneOf,
      membersAboutV2MemberAbout_universal_d_NodeType as NodeType,
      membersAboutV2MemberAbout_universal_d_NodeStyle as NodeStyle,
      membersAboutV2MemberAbout_universal_d_ButtonData as ButtonData,
      membersAboutV2MemberAbout_universal_d_Border as Border,
      membersAboutV2MemberAbout_universal_d_Colors as Colors,
      membersAboutV2MemberAbout_universal_d_PluginContainerData as PluginContainerData,
      membersAboutV2MemberAbout_universal_d_WidthType as WidthType,
      membersAboutV2MemberAbout_universal_d_PluginContainerDataWidth as PluginContainerDataWidth,
      membersAboutV2MemberAbout_universal_d_PluginContainerDataWidthDataOneOf as PluginContainerDataWidthDataOneOf,
      membersAboutV2MemberAbout_universal_d_PluginContainerDataAlignment as PluginContainerDataAlignment,
      membersAboutV2MemberAbout_universal_d_Spoiler as Spoiler,
      membersAboutV2MemberAbout_universal_d_Height as Height,
      membersAboutV2MemberAbout_universal_d_Type as Type,
      membersAboutV2MemberAbout_universal_d_Styles as Styles,
      membersAboutV2MemberAbout_universal_d_Link as Link,
      membersAboutV2MemberAbout_universal_d_LinkDataOneOf as LinkDataOneOf,
      membersAboutV2MemberAbout_universal_d_Target as Target,
      membersAboutV2MemberAbout_universal_d_Rel as Rel,
      membersAboutV2MemberAbout_universal_d_CodeBlockData as CodeBlockData,
      membersAboutV2MemberAbout_universal_d_TextStyle as TextStyle,
      membersAboutV2MemberAbout_universal_d_TextAlignment as TextAlignment,
      membersAboutV2MemberAbout_universal_d_DividerData as DividerData,
      membersAboutV2MemberAbout_universal_d_LineStyle as LineStyle,
      membersAboutV2MemberAbout_universal_d_Width as Width,
      membersAboutV2MemberAbout_universal_d_Alignment as Alignment,
      membersAboutV2MemberAbout_universal_d_FileData as FileData,
      membersAboutV2MemberAbout_universal_d_ViewMode as ViewMode,
      membersAboutV2MemberAbout_universal_d_FileSource as FileSource,
      membersAboutV2MemberAbout_universal_d_FileSourceDataOneOf as FileSourceDataOneOf,
      membersAboutV2MemberAbout_universal_d_PDFSettings as PDFSettings,
      membersAboutV2MemberAbout_universal_d_GalleryData as GalleryData,
      membersAboutV2MemberAbout_universal_d_Media as Media,
      membersAboutV2MemberAbout_universal_d_Image as Image,
      membersAboutV2MemberAbout_universal_d_Video as Video,
      membersAboutV2MemberAbout_universal_d_Item as Item,
      membersAboutV2MemberAbout_universal_d_ItemDataOneOf as ItemDataOneOf,
      membersAboutV2MemberAbout_universal_d_GalleryOptions as GalleryOptions,
      membersAboutV2MemberAbout_universal_d_LayoutType as LayoutType,
      membersAboutV2MemberAbout_universal_d_Orientation as Orientation,
      membersAboutV2MemberAbout_universal_d_Crop as Crop,
      membersAboutV2MemberAbout_universal_d_ThumbnailsAlignment as ThumbnailsAlignment,
      membersAboutV2MemberAbout_universal_d_Layout as Layout,
      membersAboutV2MemberAbout_universal_d_ItemStyle as ItemStyle,
      membersAboutV2MemberAbout_universal_d_Thumbnails as Thumbnails,
      membersAboutV2MemberAbout_universal_d_GIFData as GIFData,
      membersAboutV2MemberAbout_universal_d_GIF as GIF,
      membersAboutV2MemberAbout_universal_d_HeadingData as HeadingData,
      membersAboutV2MemberAbout_universal_d_HTMLData as HTMLData,
      membersAboutV2MemberAbout_universal_d_HTMLDataDataOneOf as HTMLDataDataOneOf,
      membersAboutV2MemberAbout_universal_d_Source as Source,
      membersAboutV2MemberAbout_universal_d_ImageData as ImageData,
      membersAboutV2MemberAbout_universal_d_LinkPreviewData as LinkPreviewData,
      membersAboutV2MemberAbout_universal_d_MapData as MapData,
      membersAboutV2MemberAbout_universal_d_MapSettings as MapSettings,
      membersAboutV2MemberAbout_universal_d_MapType as MapType,
      membersAboutV2MemberAbout_universal_d_ParagraphData as ParagraphData,
      membersAboutV2MemberAbout_universal_d_PollData as PollData,
      membersAboutV2MemberAbout_universal_d_ViewRole as ViewRole,
      membersAboutV2MemberAbout_universal_d_VoteRole as VoteRole,
      membersAboutV2MemberAbout_universal_d_Permissions as Permissions,
      membersAboutV2MemberAbout_universal_d_Option as Option,
      membersAboutV2MemberAbout_universal_d_Settings as Settings,
      membersAboutV2MemberAbout_universal_d_PollLayoutType as PollLayoutType,
      membersAboutV2MemberAbout_universal_d_PollLayoutDirection as PollLayoutDirection,
      membersAboutV2MemberAbout_universal_d_PollLayout as PollLayout,
      membersAboutV2MemberAbout_universal_d_OptionLayout as OptionLayout,
      membersAboutV2MemberAbout_universal_d_BackgroundType as BackgroundType,
      membersAboutV2MemberAbout_universal_d_Gradient as Gradient,
      membersAboutV2MemberAbout_universal_d_Background as Background,
      membersAboutV2MemberAbout_universal_d_BackgroundBackgroundOneOf as BackgroundBackgroundOneOf,
      membersAboutV2MemberAbout_universal_d_PollDesign as PollDesign,
      membersAboutV2MemberAbout_universal_d_OptionDesign as OptionDesign,
      membersAboutV2MemberAbout_universal_d_Poll as Poll,
      membersAboutV2MemberAbout_universal_d_PollDataLayout as PollDataLayout,
      membersAboutV2MemberAbout_universal_d_Design as Design,
      membersAboutV2MemberAbout_universal_d_TextData as TextData,
      membersAboutV2MemberAbout_universal_d_Decoration as Decoration,
      membersAboutV2MemberAbout_universal_d_DecorationDataOneOf as DecorationDataOneOf,
      membersAboutV2MemberAbout_universal_d_DecorationType as DecorationType,
      membersAboutV2MemberAbout_universal_d_AnchorData as AnchorData,
      membersAboutV2MemberAbout_universal_d_ColorData as ColorData,
      membersAboutV2MemberAbout_universal_d_LinkData as LinkData,
      membersAboutV2MemberAbout_universal_d_MentionData as MentionData,
      membersAboutV2MemberAbout_universal_d_FontSizeData as FontSizeData,
      membersAboutV2MemberAbout_universal_d_FontType as FontType,
      membersAboutV2MemberAbout_universal_d_AppEmbedData as AppEmbedData,
      membersAboutV2MemberAbout_universal_d_AppEmbedDataAppDataOneOf as AppEmbedDataAppDataOneOf,
      membersAboutV2MemberAbout_universal_d_AppType as AppType,
      membersAboutV2MemberAbout_universal_d_BookingData as BookingData,
      membersAboutV2MemberAbout_universal_d_EventData as EventData,
      membersAboutV2MemberAbout_universal_d_VideoData as VideoData,
      membersAboutV2MemberAbout_universal_d_PlaybackOptions as PlaybackOptions,
      membersAboutV2MemberAbout_universal_d_EmbedData as EmbedData,
      membersAboutV2MemberAbout_universal_d_Oembed as Oembed,
      membersAboutV2MemberAbout_universal_d_CollapsibleListData as CollapsibleListData,
      membersAboutV2MemberAbout_universal_d_InitialExpandedItems as InitialExpandedItems,
      membersAboutV2MemberAbout_universal_d_Direction as Direction,
      membersAboutV2MemberAbout_universal_d_TableData as TableData,
      membersAboutV2MemberAbout_universal_d_Dimensions as Dimensions,
      membersAboutV2MemberAbout_universal_d_TableCellData as TableCellData,
      membersAboutV2MemberAbout_universal_d_VerticalAlignment as VerticalAlignment,
      membersAboutV2MemberAbout_universal_d_CellStyle as CellStyle,
      membersAboutV2MemberAbout_universal_d_BorderColors as BorderColors,
      membersAboutV2MemberAbout_universal_d_NullValue as NullValue,
      membersAboutV2MemberAbout_universal_d_ListValue as ListValue,
      membersAboutV2MemberAbout_universal_d_AudioData as AudioData,
      membersAboutV2MemberAbout_universal_d_OrderedListData as OrderedListData,
      membersAboutV2MemberAbout_universal_d_BulletedListData as BulletedListData,
      membersAboutV2MemberAbout_universal_d_BlockquoteData as BlockquoteData,
      membersAboutV2MemberAbout_universal_d_Metadata as Metadata,
      membersAboutV2MemberAbout_universal_d_DocumentStyle as DocumentStyle,
      membersAboutV2MemberAbout_universal_d_TextNodeStyle as TextNodeStyle,
      membersAboutV2MemberAbout_universal_d_CreateMemberAboutRequest as CreateMemberAboutRequest,
      membersAboutV2MemberAbout_universal_d_CreateMemberAboutResponse as CreateMemberAboutResponse,
      membersAboutV2MemberAbout_universal_d_UpdateMemberAboutRequest as UpdateMemberAboutRequest,
      membersAboutV2MemberAbout_universal_d_UpdateMemberAboutResponse as UpdateMemberAboutResponse,
      membersAboutV2MemberAbout_universal_d_DeleteMemberAboutRequest as DeleteMemberAboutRequest,
      membersAboutV2MemberAbout_universal_d_DeleteMemberAboutResponse as DeleteMemberAboutResponse,
      membersAboutV2MemberAbout_universal_d_GetMemberAboutRequest as GetMemberAboutRequest,
      membersAboutV2MemberAbout_universal_d_GetMemberAboutResponse as GetMemberAboutResponse,
      membersAboutV2MemberAbout_universal_d_GetMyMemberAboutRequest as GetMyMemberAboutRequest,
      membersAboutV2MemberAbout_universal_d_GetMyMemberAboutResponse as GetMyMemberAboutResponse,
      membersAboutV2MemberAbout_universal_d_QueryMemberAboutsRequest as QueryMemberAboutsRequest,
      membersAboutV2MemberAbout_universal_d_CursorQuery as CursorQuery,
      membersAboutV2MemberAbout_universal_d_CursorQueryPagingMethodOneOf as CursorQueryPagingMethodOneOf,
      membersAboutV2MemberAbout_universal_d_Sorting as Sorting,
      membersAboutV2MemberAbout_universal_d_SortOrder as SortOrder,
      membersAboutV2MemberAbout_universal_d_CursorPaging as CursorPaging,
      membersAboutV2MemberAbout_universal_d_QueryMemberAboutsResponse as QueryMemberAboutsResponse,
      membersAboutV2MemberAbout_universal_d_CursorPagingMetadata as CursorPagingMetadata,
      membersAboutV2MemberAbout_universal_d_Cursors as Cursors,
      membersAboutV2MemberAbout_universal_d_DomainEvent as DomainEvent,
      membersAboutV2MemberAbout_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      membersAboutV2MemberAbout_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      membersAboutV2MemberAbout_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      membersAboutV2MemberAbout_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      membersAboutV2MemberAbout_universal_d_ActionEvent as ActionEvent,
      membersAboutV2MemberAbout_universal_d_Empty as Empty,
      membersAboutV2MemberAbout_universal_d_createMemberAbout as createMemberAbout,
      membersAboutV2MemberAbout_universal_d_updateMemberAbout as updateMemberAbout,
      membersAboutV2MemberAbout_universal_d_UpdateMemberAboutOptions as UpdateMemberAboutOptions,
      membersAboutV2MemberAbout_universal_d_deleteMemberAbout as deleteMemberAbout,
      membersAboutV2MemberAbout_universal_d_getMemberAbout as getMemberAbout,
      membersAboutV2MemberAbout_universal_d_getMyMemberAbout as getMyMemberAbout,
      membersAboutV2MemberAbout_universal_d_queryMemberAbouts as queryMemberAbouts,
      membersAboutV2MemberAbout_universal_d_MemberAboutsQueryResult as MemberAboutsQueryResult,
      membersAboutV2MemberAbout_universal_d_MemberAboutsQueryBuilder as MemberAboutsQueryBuilder,
    };
  }
  
  export { membersAboutV2MemberAbout_universal_d as membersAbout };
}
