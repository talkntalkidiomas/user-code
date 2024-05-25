declare module "wix-comments.v2" {
  /**
   * A comment is a user-generated message in response to a specific resource. It allows site visitors
   * to share feedback or engage in discussions around different types of resources, including blog posts, forum threads,
   * or other site content. Comments are composed of text, images, videos, or other forms of media.
   */
  interface Comment {
      /**
       * Comment ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Revision number, which increments by 1 each time the comment is updated.
       *
       * To prevent conflicting changes, the current `revision` must be passed when updating the comment.
       * @readonly
       */
      revision?: string | null;
      /**
       * Date and time the comment was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the comment was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** ID of the app that the comment is added to. */
      appId?: string | null;
      /**
       * ID of the specific context the comment is in response to.
       *
       * Within some Wix apps, the `contextId` will be the same as the `resourceId`. For example in Wix Forum,
       * the `forumPostId` is used as both the `contextId` and the `resourceId`.
       */
      contextId?: string | null;
      /** Reserved for internal use. */
      contextType?: string | null;
      /**
       * ID of the specific resource that the comment is in response to.
       *
       * Within some Wix apps, the `resourceId` will be the same as the `contextId`. For example in Wix Forum,
       * the `forumPostId` is used as both the `resourceId` and the `contextId`.
       */
      resourceId?: string | null;
      /** Published comment content. */
      content?: CommentContent;
      /**
       * Unpublished comment content.
       * @internal
       */
      draftContent?: CommentContent;
      /** Comment's author. */
      author?: CommentAuthor;
      /**
       * Parent comment information.
       *
       * See [Terminology](#introduction) for more information about parent comments.
       */
      parentComment?: ParentComment;
      /**
       * Materialized path of comments hierarchy. List of all current comment’s parent IDs.
       * @internal
       * @readonly
       */
      parentIdsInThread?: string[];
      /**
       * Amount of comments that reply to this comment.
       * @readonly
       */
      replyCount?: number;
      /**
       * Summary of votes.
       * @readonly
       */
      voteSummary?: VoteSummary;
      /**
       * Comment status.
       *
       * Supported values:
       * + `"PUBLISHED"`: This comment is published and publicly visible.
       * + `"DELETED"`: This comment is deleted.
       * + `"PENDING"`: This comment is pending moderation. Moderation is not currently supported.
       * + `"HIDDEN"`: This comment has been hidden by a site moderator.
       * @readonly
       */
      status?: Status;
      /**
       * Comment rating.
       * @readonly
       */
      rating?: number | null;
      /**
       * Summary of reactions.
       * @readonly
       */
      reactionSummary?: CommentReactionSummary;
      /** Whether the comment is marked. */
      marked?: boolean;
      /** Indicates the initial creation date of the comment, useful when importing comments */
      commentDate?: Date;
      /** Whether the comment has edited content */
      contentEdited?: boolean | null;
  }
  /** Comment content. */
  interface CommentContent {
      /** @internal */
      draftJs?: string | null;
      /** @internal */
      plainText?: string | null;
      /** Comment rich content. */
      richContent?: RichContent;
      /**
       * Mentions to tag with this comment.
       *
       * Mentions can include users, members, visitors, or groups.
       */
      mentions?: Mention[];
      /** @internal */
      effects?: Record<string, string>;
      /** Content attachments. */
      attachments?: Attachment[];
      /**
       * This field specifies the author who last edited or modified the comment's content.
       * Usually, this is the same author as the comment's original author.
       * It differs from the original author only when the comment has been updated by someone with permissions
       * to modify the comment's content
       * @internal
       * @readonly
       */
      author?: ContentAuthor;
      /**
       * Stores the timestamp when a comment's content was written.
       * This might indicate when the content was created or updated
       * @internal
       * @readonly
       */
      commentDate?: Date;
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
  interface Mention extends MentionIdentityOneOf {
      /** Wix user ID. */
      userId?: string | null;
      /** Member ID. See the Members API for more details. */
      memberId?: string | null;
      /** Visitor ID. */
      visitorId?: string | null;
      /** Group ID. See the Groups API for more details. */
      groupId?: string | null;
  }
  /** @oneof */
  interface MentionIdentityOneOf {
      /** Wix user ID. */
      userId?: string | null;
      /** Member ID. See the Members API for more details. */
      memberId?: string | null;
      /** Visitor ID. */
      visitorId?: string | null;
      /** Group ID. See the Groups API for more details. */
      groupId?: string | null;
  }
  interface Attachment extends AttachmentMediaOneOf {
      /** Information about the image. */
      image?: string;
      /** Information about the video. */
      video?: string;
      /** Information about the audio. */
      audio?: string;
      /** Information about the document. */
      document?: string;
      /** Mime type of attachment. */
      mimeType?: string | null;
  }
  /** @oneof */
  interface AttachmentMediaOneOf {
      /** Information about the image. */
      image?: string;
      /** Information about the video. */
      video?: string;
      /** Information about the audio. */
      audio?: string;
      /** Information about the document. */
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
  interface ContentAuthor extends ContentAuthorAuthorOneOf {
      /** Wix user ID. */
      userId?: string | null;
      /**
       * Member ID. See the [Members API](https://dev.wix.com/api/rest/members/members/member-object)
       * for more details.
       */
      memberId?: string | null;
      /** Visitor ID. */
      visitorId?: string | null;
      /** Application Id */
      appId?: string | null;
  }
  /** @oneof */
  interface ContentAuthorAuthorOneOf {
      /** Wix user ID. */
      userId?: string | null;
      /**
       * Member ID. See the [Members API](https://dev.wix.com/api/rest/members/members/member-object)
       * for more details.
       */
      memberId?: string | null;
      /** Visitor ID. */
      visitorId?: string | null;
      /** Application Id */
      appId?: string | null;
  }
  interface CommentAuthor extends CommentAuthorIdentityOneOf {
      /** Wix user ID. */
      userId?: string | null;
      /** Member ID. See the Members API for more details. */
      memberId?: string | null;
      /** Visitor ID. */
      visitorId?: string | null;
      /**
       * Wix contact ID
       * @internal
       */
      contactId?: string | null;
      /**
       * Name, optional, set by author
       * @internal
       */
      authorName?: string | null;
  }
  /** @oneof */
  interface CommentAuthorIdentityOneOf {
      /** Wix user ID. */
      userId?: string | null;
      /** Member ID. See the Members API for more details. */
      memberId?: string | null;
      /** Visitor ID. */
      visitorId?: string | null;
  }
  interface ParentComment {
      /** Comment ID of the parent comment. */
      _id?: string | null;
      /**
       * Author of the parent comment.
       * @readonly
       */
      author?: CommentAuthor;
      /**
       * Status of the parent comment
       * @readonly
       */
      status?: Status;
  }
  enum Status {
      UNKNOWN = "UNKNOWN",
      PUBLISHED = "PUBLISHED",
      DELETED = "DELETED",
      PENDING = "PENDING",
      HIDDEN = "HIDDEN"
  }
  interface VoteSummary {
      /** Amount of upvotes less downvotes on this comment. */
      netVoteCount?: number;
      /** Amount of upvotes on this comment. */
      upvoteCount?: number;
      /** Amount of downvotes on this comment. */
      downvoteCount?: number;
  }
  interface CommentReactionSummary {
      /** Total amount of reactions. */
      total?: number;
      /**
       * Amounts of each type of reaction. `"key"` is the code for a reaction type and
       * `"value"` is the amount of that reaction type.
       */
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
      /** Comment to create. */
      comment?: Comment;
      /**
       * Additional contact details, provided by UoU
       * @internal
       */
      contactDetails?: ContactDetails;
      /**
       * Captcha token
       * @internal
       */
      captchaToken?: string | null;
  }
  interface ContactDetails {
      /**
       * UoU email address. For internal use
       * @internal
       */
      email?: string | null;
  }
  interface CreateCommentResponse {
      /** Created comment. */
      comment?: Comment;
  }
  interface ResourceCommentCountChanged {
      appId?: string;
      contextId?: string;
      resourceId?: string;
      publishedCommentCount?: number;
  }
  interface GetCommentRequest {
      /** ID of the comment to retrieve. */
      commentId: string;
  }
  interface GetCommentResponse {
      /** Retrieved comment. */
      comment?: Comment;
  }
  /** Comment info to update. */
  interface UpdateCommentRequest {
      /** Comment info to update. */
      comment?: Comment;
  }
  interface UpdateCommentResponse {
      /** Updated comment. */
      comment?: Comment;
      /**
       * Captcha token
       * @internal
       */
      captchaToken?: string | null;
  }
  interface CommentContentChanged {
      commentId?: string;
      previousContent?: CommentContent;
      currentContent?: CommentContent;
  }
  interface DeleteCommentRequest {
      /** ID of the Comment to delete. */
      commentId: string;
      /**
       * Revision of the comment to delete.
       * @internal
       */
      revision?: string | null;
      /**
       * Indicates if child comments must be deleted as well.
       * Will be deprecated and be replaced by BulkCommentDelete
       * @internal
       */
      cascade?: boolean | null;
  }
  interface DeleteCommentResponse {
  }
  interface CommentDeleted {
      comment?: Comment;
  }
  interface ModerateDraftContentRequest {
      /** ID of the comment to moderate. */
      commentId: string;
      /**
       * Revision number, which increments by `1` each time the comment is updated.
       *
       * To prevent conflicting changes, the current `revision` must be passed when updating the comment.
       */
      revision: string | null;
      /** Draft content action. */
      draftContentAction?: Action;
  }
  enum Action {
      UNKNOWN = "UNKNOWN",
      /** Approve draft content. */
      APPROVE = "APPROVE",
      /** Reject draft content. */
      REJECT = "REJECT"
  }
  interface ModerateDraftContentResponse {
      /** Moderated comment. */
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
      /** App ID to query comments for. */
      appId: string;
      /** Query options. */
      query: CursorQuery;
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
  interface QueryCommentsResponse {
      /** Retrieved comments. */
      comments?: Comment[];
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
  interface MarkCommentRequest {
      /** ID of the comment to mark. */
      commentId: string;
      /**
       * Revision of the comment to mark.
       * @internal
       */
      revision?: string | null;
  }
  interface MarkCommentResponse {
      /** Marked comment. */
      comment?: Comment;
  }
  interface CommentMarked {
      comment?: Comment;
  }
  interface UnmarkCommentRequest {
      /** ID of the comment to unmark. */
      commentId: string;
      /**
       * Revision of the comment to unmark.
       * @internal
       */
      revision?: string | null;
  }
  interface UnmarkCommentResponse {
      /** Unmarked comment. */
      comment?: Comment;
  }
  interface CommentUnmarked {
      comment?: Comment;
  }
  interface HideCommentRequest {
      /** ID of the comment to hide. */
      commentId: string;
  }
  interface HideCommentResponse {
      /** Hidden comment. */
      comment?: Comment;
  }
  interface PublishCommentRequest {
      /** ID of the comment to publish. */
      commentId: string;
  }
  interface PublishCommentResponse {
      /** Published comment. */
      comment?: Comment;
  }
  /** Count comments options. */
  interface CountCommentsRequest {
      /** App ID to count the comments of. */
      appId?: string;
      /** Filter options. */
      filter?: Record<string, any> | null;
  }
  interface CountCommentsResponse {
      /** Amount of comments. */
      count?: number;
  }
  interface ListCommentsByResourceRequest {
      /** App ID. */
      appId: string;
      /** Context ID. */
      contextId: string;
      /** Reserved for internal use. */
      contextType?: string;
      /** Resource ID. */
      resourceId: string;
      /** Comment sorting. Is ignored if cursorPaging.cursor is defined. */
      commentSort?: CommentSort;
      /** Reply sorting. Is ignored if cursorPaging.cursor is defined. */
      replySort?: ReplySort;
      /** Cursor paging. */
      cursorPaging?: ListCommentsByResourceCursorPaging;
  }
  interface CommentSort {
      /** Sorting. */
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
      RATING = "RATING",
      NET_VOTE_COUNT_ASC = "NET_VOTE_COUNT_ASC",
      RATING_ASC = "RATING_ASC"
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
      /** Pointer to the next or previous page in the list of results. */
      cursor?: string | null;
      /**
       * Number of items to return.
       *
       * Min: `1`\n
       * Max: `100`
       */
      limit?: number | null;
      /** Only taken into account if listing root comments. */
      repliesLimit?: number | null;
  }
  interface ListCommentsByResourceResponse {
      comments?: Comment[];
      pagingMetadata?: CursorPagingMetadata;
      commentReplies?: Record<string, RepliesListResponse>;
  }
  interface RepliesListResponse {
      replies?: Comment[];
      pagingMetadata?: CursorPagingMetadata;
  }
  interface GetCommentThreadRequest {
      /** App ID. */
      appId?: string;
      /** Comment ID. */
      commentId: string;
      /** Comment sorting. */
      commentSort?: CommentSort;
      /** Reply sorting. */
      replySort?: ReplySort;
  }
  interface GetCommentThreadResponse {
      comments?: Comment[];
      pagingMetadata?: CursorPagingMetadata;
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
  interface BulkModerateDraftContentRequest {
      /** Owning vertical identifier */
      appId: string;
      /** Comments to moderate */
      filter: Record<string, any> | null;
      /** Action to do regarding draft content */
      draftContentAction: Action;
  }
  interface BulkModerateDraftContentResponse {
      /** Reference to async job */
      jobId?: string;
  }
  interface BulkMoveCommentByFilterRequest {
      /** Owning vertical identifier */
      appId: string;
      /** Comments to move */
      filter: Record<string, any> | null;
      /** Information where to move the comment */
      destination?: Destination;
  }
  interface Destination {
      /** Context ID to which to move comment */
      contextId?: string;
      /** Resource ID to which to move comment */
      resourceId?: string;
  }
  interface BulkMoveCommentByFilterResponse {
      /** Reference to async job */
      jobId?: string;
  }
  interface CommentMoved {
      comment?: Comment;
      destination?: Destination;
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
   * Creates a new comment.
   *
   * The `appId`, `contextId`, and `resourceId` are all required and associate the created comment with the specific
   * resource it responds to. See [Integrations](#introduction) for a list of integrated scopes for these fields.
   *
   * If the created comment is a direct response to another comment, the `commentId` of the parent comment should be passed
   * as `parentComment.id` in this comment's request. See [Terminology](#introduction) for additional information on parent comments and replies.
   * @param comment - Comment to create.
   * @public
   * @documentationMaturity preview
   * @requiredField comment
   * @requiredField comment.appId
   * @requiredField comment.content
   * @requiredField comment.contextId
   * @requiredField comment.resourceId
   * @adminMethod
   * @returns Created comment.
   */
  function createComment(comment: Comment, options?: CreateCommentOptions): Promise<Comment>;
  interface CreateCommentOptions {
      /**
       * Additional contact details, provided by UoU
       * @internal
       */
      contactDetails?: ContactDetails;
      /**
       * Captcha token
       * @internal
       */
      captchaToken?: string | null;
  }
  /**
   * Retrieves a comment.
   * @param commentId - ID of the comment to retrieve.
   * @public
   * @documentationMaturity preview
   * @requiredField commentId
   * @adminMethod
   * @returns Retrieved comment.
   */
  function getComment(commentId: string): Promise<Comment>;
  /**
   * Updates a comment.
   *
   * Each time the comment is updated, `revision` increments by 1. The current `revision` must be
   * passed when updating the comment. This ensures you're working with the latest comment and
   * prevents unintended overwrites.
   * @param _id - Comment ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField comment
   * @requiredField comment.revision
   * @adminMethod
   * @returns Updated comment.
   */
  function updateComment(_id: string | null, comment: UpdateComment): Promise<Comment>;
  interface UpdateComment {
      /**
       * Comment ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Revision number, which increments by 1 each time the comment is updated.
       *
       * To prevent conflicting changes, the current `revision` must be passed when updating the comment.
       * @readonly
       */
      revision?: string | null;
      /**
       * Date and time the comment was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the comment was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** ID of the app that the comment is added to. */
      appId?: string | null;
      /**
       * ID of the specific context the comment is in response to.
       *
       * Within some Wix apps, the `contextId` will be the same as the `resourceId`. For example in Wix Forum,
       * the `forumPostId` is used as both the `contextId` and the `resourceId`.
       */
      contextId?: string | null;
      /** Reserved for internal use. */
      contextType?: string | null;
      /**
       * ID of the specific resource that the comment is in response to.
       *
       * Within some Wix apps, the `resourceId` will be the same as the `contextId`. For example in Wix Forum,
       * the `forumPostId` is used as both the `resourceId` and the `contextId`.
       */
      resourceId?: string | null;
      /** Published comment content. */
      content?: CommentContent;
      /**
       * Unpublished comment content.
       * @internal
       */
      draftContent?: CommentContent;
      /** Comment's author. */
      author?: CommentAuthor;
      /**
       * Parent comment information.
       *
       * See [Terminology](#introduction) for more information about parent comments.
       */
      parentComment?: ParentComment;
      /**
       * Materialized path of comments hierarchy. List of all current comment’s parent IDs.
       * @internal
       * @readonly
       */
      parentIdsInThread?: string[];
      /**
       * Amount of comments that reply to this comment.
       * @readonly
       */
      replyCount?: number;
      /**
       * Summary of votes.
       * @readonly
       */
      voteSummary?: VoteSummary;
      /**
       * Comment status.
       *
       * Supported values:
       * + `"PUBLISHED"`: This comment is published and publicly visible.
       * + `"DELETED"`: This comment is deleted.
       * + `"PENDING"`: This comment is pending moderation. Moderation is not currently supported.
       * + `"HIDDEN"`: This comment has been hidden by a site moderator.
       * @readonly
       */
      status?: Status;
      /**
       * Comment rating.
       * @readonly
       */
      rating?: number | null;
      /**
       * Summary of reactions.
       * @readonly
       */
      reactionSummary?: CommentReactionSummary;
      /** Whether the comment is marked. */
      marked?: boolean;
      /** Indicates the initial creation date of the comment, useful when importing comments */
      commentDate?: Date;
      /** Whether the comment has edited content */
      contentEdited?: boolean | null;
  }
  /**
   * Deletes a comment.
   *
   * This endpoint deletes the `content` of the comment and sets its `status` to `DELETED`.
   * @param commentId - ID of the Comment to delete.
   * @public
   * @documentationMaturity preview
   * @requiredField commentId
   * @adminMethod
   */
  function deleteComment(commentId: string, options?: DeleteCommentOptions): Promise<void>;
  interface DeleteCommentOptions {
      /**
       * Revision of the comment to delete.
       * @internal
       */
      revision?: string | null;
      /**
       * Indicates if child comments must be deleted as well.
       * Will be deprecated and be replaced by BulkCommentDelete
       * @internal
       */
      cascade?: boolean | null;
  }
  /**
   * Moderates the draft content of a comment.
   *
   * - `APPROVE`: Moves `draftContent` to `content` and updates the comment `status` to `PUBLISHED`.
   * - `REJECT`: Clears `draftContent` if comment `status` is `PUBLISHED` or, if comment `status` is `PENDING` it will keep `draftContent` the same and change `status` to `HIDDEN`.
   * @param commentId - ID of the comment to moderate.
   * @param revision - Revision number, which increments by `1` each time the comment is updated.
   *
   * To prevent conflicting changes, the current `revision` must be passed when updating the comment.
   * @internal
   * @documentationMaturity preview
   * @requiredField commentId
   * @requiredField revision
   * @adminMethod
   */
  function moderateDraftContent(commentId: string, revision: string | null, options?: ModerateDraftContentOptions): Promise<ModerateDraftContentResponse>;
  interface ModerateDraftContentOptions {
      /** Draft content action. */
      draftContentAction?: Action;
  }
  /**
   * Creates a query to retrieve a list of comments.
   *
   * The `queryComments()` function builds a query to retrieve a list of comments and returns a [`CommentsQueryBuilder`](#commentsquerybuilder) object.
   *
   * The returned object contains the query definition, which is typically used to run the query using the [`find()`](#commentsquerybuilder/find) function.
   *
   * You can refine the query by chaining `CommentsQueryBuilder` functions onto the query. `CommentsQueryBuilder` functions enable you to sort, filter, and control the results that `queryComments()` returns.
   *
   * `queryComments()` runs with the following `CommentsQueryBuilder` default that you can override:
   * + `ascending("_id")`
   *
   * The functions that are chained to `queryComments()` are applied in the order they are called. For example, if you apply `ascending("voteSummary.netVoteCount")` and then `ascending("replyCount")`, the results are sorted first by the `"voteSummary.netVoteCount"`, and then, if there are multiple results with the same `"voteSummary.netVoteCount"`, the items are sorted by `"replyCount"`.
   *
   * The following `CommentsQueryBuilder` functions are supported for the `queryComments()` function. For a full description of the comment object, see the object returned for the [`items`](#commentsqueryresult/items) property in [`CommentsQueryResult`](#commentsqueryresult).
   * @public
   * @documentationMaturity preview
   * @requiredField appId
   * @param appId - App ID to query comments for.
   * @adminMethod
   */
  function queryComments(appId: string): CommentsQueryBuilder;
  interface QueryCursorResult {
      cursors: Cursors;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface CommentsQueryResult extends QueryCursorResult {
      items: Comment[];
      query: CommentsQueryBuilder;
      next: () => Promise<CommentsQueryResult>;
      prev: () => Promise<CommentsQueryResult>;
  }
  interface CommentsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id' | 'contextId' | 'resourceId' | 'author.userId' | 'author.memberId' | 'author.visitorId' | 'parentComment.id' | 'replyCount' | 'voteSummary.netVoteCount' | 'status' | 'rating' | 'reactionSummary.total' | 'marked', value: any) => CommentsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id' | 'contextId' | 'resourceId' | 'author.userId' | 'author.memberId' | 'author.visitorId' | 'parentComment.id' | 'replyCount' | 'voteSummary.netVoteCount' | 'status' | 'rating' | 'reactionSummary.total' | 'marked', value: any) => CommentsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ge: (propertyName: 'replyCount' | 'voteSummary.netVoteCount' | 'rating' | 'reactionSummary.total', value: any) => CommentsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      gt: (propertyName: 'replyCount' | 'voteSummary.netVoteCount' | 'rating' | 'reactionSummary.total', value: any) => CommentsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      le: (propertyName: 'replyCount' | 'voteSummary.netVoteCount' | 'rating' | 'reactionSummary.total', value: any) => CommentsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      lt: (propertyName: 'replyCount' | 'voteSummary.netVoteCount' | 'rating' | 'reactionSummary.total', value: any) => CommentsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id' | 'contextId' | 'resourceId' | 'author.userId' | 'author.memberId' | 'author.visitorId' | 'parentComment.id' | 'status', value: any) => CommentsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'replyCount' | 'voteSummary.netVoteCount' | 'rating' | 'reactionSummary.total' | 'marked'>) => CommentsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'replyCount' | 'voteSummary.netVoteCount' | 'rating' | 'reactionSummary.total' | 'marked'>) => CommentsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => CommentsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => CommentsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<CommentsQueryResult>;
  }
  /**
   * Sets `marked` to `"TRUE"` to mark a comment.
   *
   * You can then filter for marked comments with the [`queryComments()`](#querycomments) function to apply customizations.
   * @param commentId - ID of the comment to mark.
   * @public
   * @documentationMaturity preview
   * @requiredField commentId
   * @adminMethod
   */
  function markComment(commentId: string, options?: MarkCommentOptions): Promise<MarkCommentResponse>;
  interface MarkCommentOptions {
      /**
       * Revision of the comment to mark.
       * @internal
       */
      revision?: string | null;
  }
  /**
   * Sets `marked` to `"FALSE"` to unmark a comment.
   * @param commentId - ID of the comment to unmark.
   * @public
   * @documentationMaturity preview
   * @requiredField commentId
   * @adminMethod
   */
  function unmarkComment(commentId: string, options?: UnmarkCommentOptions): Promise<UnmarkCommentResponse>;
  interface UnmarkCommentOptions {
      /**
       * Revision of the comment to unmark.
       * @internal
       */
      revision?: string | null;
  }
  /**
   * Hides a comment.
   * @param commentId - ID of the comment to hide.
   * @internal
   * @documentationMaturity preview
   * @requiredField commentId
   * @adminMethod
   */
  function hideComment(commentId: string): Promise<HideCommentResponse>;
  /**
   * Publishes a comment.
   * @param commentId - ID of the comment to publish.
   * @internal
   * @documentationMaturity preview
   * @requiredField commentId
   * @adminMethod
   */
  function publishComment(commentId: string): Promise<PublishCommentResponse>;
  /**
   * Counts comments, given the provided filtering.
   *
   * For field support for filters and sorting, see the **Supported Filters & Sorting** table in the [`queryComments()`](/querycomments) function.
   * @param appId - App ID to count the comments of.
   * @public
   * @documentationMaturity preview
   * @requiredField appId
   * @adminMethod
   */
  function countComments(appId: string, options?: CountCommentsOptions): Promise<CountCommentsResponse>;
  interface CountCommentsOptions {
      /** Filter options. */
      filter?: Record<string, any> | null;
  }
  /**
   * Lists published comments and replies
   *
   * API designed to load comments and replies. It return only published comments and replies.
   * Hidden or Deleted comment or reply are not returned unless they have more than one published reply.
   * @param appId - App ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField appId
   * @requiredField options.contextId
   * @requiredField options.resourceId
   * @adminMethod
   */
  function listCommentsByResource(appId: string, options?: ListCommentsByResourceOptions): Promise<ListCommentsByResourceResponse>;
  interface ListCommentsByResourceOptions {
      /** Context ID. */
      contextId: string;
      /** Reserved for internal use. */
      contextType?: string;
      /** Resource ID. */
      resourceId: string;
      /** Comment sorting. Is ignored if cursorPaging.cursor is defined. */
      commentSort?: CommentSort;
      /** Reply sorting. Is ignored if cursorPaging.cursor is defined. */
      replySort?: ReplySort;
      /** Cursor paging. */
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
   * @param commentId - Comment ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField commentId
   * @adminMethod
   */
  function getCommentThread(commentId: string, options?: GetCommentThreadOptions): Promise<GetCommentThreadResponse>;
  interface GetCommentThreadOptions {
      /** App ID. */
      appId?: string;
      /** Comment sorting. */
      commentSort?: CommentSort;
      /** Reply sorting. */
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
   * @adminMethod
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
   * @adminMethod
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
   * @adminMethod
   */
  function bulkDeleteComment(appId: string, options: BulkDeleteCommentOptions): Promise<BulkDeleteCommentResponse>;
  interface BulkDeleteCommentOptions {
      /** Comments to delete */
      filter: Record<string, any> | null;
  }
  /**
   * Moderates the draft content of a multiple comments.
   * @param appId - Owning vertical identifier
   * @internal
   * @documentationMaturity preview
   * @requiredField appId
   * @requiredField options
   * @requiredField options.draftContentAction
   * @requiredField options.filter
   * @adminMethod
   */
  function bulkModerateDraftContent(appId: string, options: BulkModerateDraftContentOptions): Promise<BulkModerateDraftContentResponse>;
  interface BulkModerateDraftContentOptions {
      /** Comments to moderate */
      filter: Record<string, any> | null;
      /** Action to do regarding draft content */
      draftContentAction: Action;
  }
  /**
   * Moves multiple comments
   * @param appId - Owning vertical identifier
   * @internal
   * @documentationMaturity preview
   * @requiredField appId
   * @requiredField options.destination.contextId
   * @requiredField options.destination.resourceId
   * @requiredField options.filter
   * @adminMethod
   */
  function bulkMoveCommentByFilter(appId: string, options?: BulkMoveCommentByFilterOptions): Promise<BulkMoveCommentByFilterResponse>;
  interface BulkMoveCommentByFilterOptions {
      /** Comments to move */
      filter: Record<string, any> | null;
      /** Information where to move the comment */
      destination?: Destination;
  }
  
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
  type commentsV2Comment_universal_d_Type = Type;
  const commentsV2Comment_universal_d_Type: typeof Type;
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
  type commentsV2Comment_universal_d_Permissions = Permissions;
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
  type commentsV2Comment_universal_d_ContentAuthor = ContentAuthor;
  type commentsV2Comment_universal_d_ContentAuthorAuthorOneOf = ContentAuthorAuthorOneOf;
  type commentsV2Comment_universal_d_CommentAuthor = CommentAuthor;
  type commentsV2Comment_universal_d_CommentAuthorIdentityOneOf = CommentAuthorIdentityOneOf;
  type commentsV2Comment_universal_d_ParentComment = ParentComment;
  type commentsV2Comment_universal_d_Status = Status;
  const commentsV2Comment_universal_d_Status: typeof Status;
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
  type commentsV2Comment_universal_d_ContactDetails = ContactDetails;
  type commentsV2Comment_universal_d_CreateCommentResponse = CreateCommentResponse;
  type commentsV2Comment_universal_d_ResourceCommentCountChanged = ResourceCommentCountChanged;
  type commentsV2Comment_universal_d_GetCommentRequest = GetCommentRequest;
  type commentsV2Comment_universal_d_GetCommentResponse = GetCommentResponse;
  type commentsV2Comment_universal_d_UpdateCommentRequest = UpdateCommentRequest;
  type commentsV2Comment_universal_d_UpdateCommentResponse = UpdateCommentResponse;
  type commentsV2Comment_universal_d_CommentContentChanged = CommentContentChanged;
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
  type commentsV2Comment_universal_d_CursorQuery = CursorQuery;
  type commentsV2Comment_universal_d_CursorQueryPagingMethodOneOf = CursorQueryPagingMethodOneOf;
  type commentsV2Comment_universal_d_Sorting = Sorting;
  type commentsV2Comment_universal_d_SortOrder = SortOrder;
  const commentsV2Comment_universal_d_SortOrder: typeof SortOrder;
  type commentsV2Comment_universal_d_CursorPaging = CursorPaging;
  type commentsV2Comment_universal_d_QueryCommentsResponse = QueryCommentsResponse;
  type commentsV2Comment_universal_d_CursorPagingMetadata = CursorPagingMetadata;
  type commentsV2Comment_universal_d_Cursors = Cursors;
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
  type commentsV2Comment_universal_d_BulkModerateDraftContentRequest = BulkModerateDraftContentRequest;
  type commentsV2Comment_universal_d_BulkModerateDraftContentResponse = BulkModerateDraftContentResponse;
  type commentsV2Comment_universal_d_BulkMoveCommentByFilterRequest = BulkMoveCommentByFilterRequest;
  type commentsV2Comment_universal_d_Destination = Destination;
  type commentsV2Comment_universal_d_BulkMoveCommentByFilterResponse = BulkMoveCommentByFilterResponse;
  type commentsV2Comment_universal_d_CommentMoved = CommentMoved;
  type commentsV2Comment_universal_d_DomainEvent = DomainEvent;
  type commentsV2Comment_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type commentsV2Comment_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type commentsV2Comment_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type commentsV2Comment_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type commentsV2Comment_universal_d_ActionEvent = ActionEvent;
  type commentsV2Comment_universal_d_MessageEnvelope = MessageEnvelope;
  type commentsV2Comment_universal_d_IdentificationData = IdentificationData;
  type commentsV2Comment_universal_d_IdentificationDataIdOneOf = IdentificationDataIdOneOf;
  type commentsV2Comment_universal_d_WebhookIdentityType = WebhookIdentityType;
  const commentsV2Comment_universal_d_WebhookIdentityType: typeof WebhookIdentityType;
  const commentsV2Comment_universal_d_createComment: typeof createComment;
  type commentsV2Comment_universal_d_CreateCommentOptions = CreateCommentOptions;
  const commentsV2Comment_universal_d_getComment: typeof getComment;
  const commentsV2Comment_universal_d_updateComment: typeof updateComment;
  type commentsV2Comment_universal_d_UpdateComment = UpdateComment;
  const commentsV2Comment_universal_d_deleteComment: typeof deleteComment;
  type commentsV2Comment_universal_d_DeleteCommentOptions = DeleteCommentOptions;
  const commentsV2Comment_universal_d_moderateDraftContent: typeof moderateDraftContent;
  type commentsV2Comment_universal_d_ModerateDraftContentOptions = ModerateDraftContentOptions;
  const commentsV2Comment_universal_d_queryComments: typeof queryComments;
  type commentsV2Comment_universal_d_CommentsQueryResult = CommentsQueryResult;
  type commentsV2Comment_universal_d_CommentsQueryBuilder = CommentsQueryBuilder;
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
  const commentsV2Comment_universal_d_bulkModerateDraftContent: typeof bulkModerateDraftContent;
  type commentsV2Comment_universal_d_BulkModerateDraftContentOptions = BulkModerateDraftContentOptions;
  const commentsV2Comment_universal_d_bulkMoveCommentByFilter: typeof bulkMoveCommentByFilter;
  type commentsV2Comment_universal_d_BulkMoveCommentByFilterOptions = BulkMoveCommentByFilterOptions;
  namespace commentsV2Comment_universal_d {
    export {
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
      commentsV2Comment_universal_d_Type as Type,
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
      commentsV2Comment_universal_d_Permissions as Permissions,
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
      commentsV2Comment_universal_d_ContentAuthor as ContentAuthor,
      commentsV2Comment_universal_d_ContentAuthorAuthorOneOf as ContentAuthorAuthorOneOf,
      commentsV2Comment_universal_d_CommentAuthor as CommentAuthor,
      commentsV2Comment_universal_d_CommentAuthorIdentityOneOf as CommentAuthorIdentityOneOf,
      commentsV2Comment_universal_d_ParentComment as ParentComment,
      commentsV2Comment_universal_d_Status as Status,
      commentsV2Comment_universal_d_VoteSummary as VoteSummary,
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
      commentsV2Comment_universal_d_ContactDetails as ContactDetails,
      commentsV2Comment_universal_d_CreateCommentResponse as CreateCommentResponse,
      commentsV2Comment_universal_d_ResourceCommentCountChanged as ResourceCommentCountChanged,
      commentsV2Comment_universal_d_GetCommentRequest as GetCommentRequest,
      commentsV2Comment_universal_d_GetCommentResponse as GetCommentResponse,
      commentsV2Comment_universal_d_UpdateCommentRequest as UpdateCommentRequest,
      commentsV2Comment_universal_d_UpdateCommentResponse as UpdateCommentResponse,
      commentsV2Comment_universal_d_CommentContentChanged as CommentContentChanged,
      commentsV2Comment_universal_d_DeleteCommentRequest as DeleteCommentRequest,
      commentsV2Comment_universal_d_DeleteCommentResponse as DeleteCommentResponse,
      commentsV2Comment_universal_d_CommentDeleted as CommentDeleted,
      commentsV2Comment_universal_d_ModerateDraftContentRequest as ModerateDraftContentRequest,
      commentsV2Comment_universal_d_Action as Action,
      commentsV2Comment_universal_d_ModerateDraftContentResponse as ModerateDraftContentResponse,
      commentsV2Comment_universal_d_CommentPublished as CommentPublished,
      commentsV2Comment_universal_d_CommentHidden as CommentHidden,
      commentsV2Comment_universal_d_QueryCommentsRequest as QueryCommentsRequest,
      commentsV2Comment_universal_d_CursorQuery as CursorQuery,
      commentsV2Comment_universal_d_CursorQueryPagingMethodOneOf as CursorQueryPagingMethodOneOf,
      commentsV2Comment_universal_d_Sorting as Sorting,
      commentsV2Comment_universal_d_SortOrder as SortOrder,
      commentsV2Comment_universal_d_CursorPaging as CursorPaging,
      commentsV2Comment_universal_d_QueryCommentsResponse as QueryCommentsResponse,
      commentsV2Comment_universal_d_CursorPagingMetadata as CursorPagingMetadata,
      commentsV2Comment_universal_d_Cursors as Cursors,
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
      commentsV2Comment_universal_d_BulkModerateDraftContentRequest as BulkModerateDraftContentRequest,
      commentsV2Comment_universal_d_BulkModerateDraftContentResponse as BulkModerateDraftContentResponse,
      commentsV2Comment_universal_d_BulkMoveCommentByFilterRequest as BulkMoveCommentByFilterRequest,
      commentsV2Comment_universal_d_Destination as Destination,
      commentsV2Comment_universal_d_BulkMoveCommentByFilterResponse as BulkMoveCommentByFilterResponse,
      commentsV2Comment_universal_d_CommentMoved as CommentMoved,
      commentsV2Comment_universal_d_DomainEvent as DomainEvent,
      commentsV2Comment_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      commentsV2Comment_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      commentsV2Comment_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      commentsV2Comment_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      commentsV2Comment_universal_d_ActionEvent as ActionEvent,
      commentsV2Comment_universal_d_MessageEnvelope as MessageEnvelope,
      commentsV2Comment_universal_d_IdentificationData as IdentificationData,
      commentsV2Comment_universal_d_IdentificationDataIdOneOf as IdentificationDataIdOneOf,
      commentsV2Comment_universal_d_WebhookIdentityType as WebhookIdentityType,
      commentsV2Comment_universal_d_createComment as createComment,
      commentsV2Comment_universal_d_CreateCommentOptions as CreateCommentOptions,
      commentsV2Comment_universal_d_getComment as getComment,
      commentsV2Comment_universal_d_updateComment as updateComment,
      commentsV2Comment_universal_d_UpdateComment as UpdateComment,
      commentsV2Comment_universal_d_deleteComment as deleteComment,
      commentsV2Comment_universal_d_DeleteCommentOptions as DeleteCommentOptions,
      commentsV2Comment_universal_d_moderateDraftContent as moderateDraftContent,
      commentsV2Comment_universal_d_ModerateDraftContentOptions as ModerateDraftContentOptions,
      commentsV2Comment_universal_d_queryComments as queryComments,
      commentsV2Comment_universal_d_CommentsQueryResult as CommentsQueryResult,
      commentsV2Comment_universal_d_CommentsQueryBuilder as CommentsQueryBuilder,
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
      commentsV2Comment_universal_d_bulkModerateDraftContent as bulkModerateDraftContent,
      commentsV2Comment_universal_d_BulkModerateDraftContentOptions as BulkModerateDraftContentOptions,
      commentsV2Comment_universal_d_bulkMoveCommentByFilter as bulkMoveCommentByFilter,
      commentsV2Comment_universal_d_BulkMoveCommentByFilterOptions as BulkMoveCommentByFilterOptions,
    };
  }
  
  export { commentsV2Comment_universal_d as comments };
}
