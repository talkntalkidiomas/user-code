declare module "wix-stores-backend.v3" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /** Product is the main entity of ProductService that can be used for lorem ipsum dolor */
  interface Product extends ProductTypedPropertiesOneOf {
      /** Physical properties, can be provided only when `product_type` is PHYSICAL */
      physicalOptions?: PhysicalProperties;
      /** Product ID. Auto-generated on product creation. */
      _id?: string | null;
      /** Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision */
      revision?: string | null;
      /**
       * Represents the time this Product was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Product was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Product name. Translatable. */
      name?: string | null;
      /**
       * A permanent, friendly URL name.
       * If not provided, on create generated automatically.
       * When provided, validated and must be unique.
       */
      slug?: string | null;
      /**
       * URL to product page on the site.
       * Missing page url also?
       * @readonly
       */
      url?: string;
      /**
       * Optional - Product description which supports rich content.
       * In order to use this field you have to integrate with "Ricos" on frontend side. To learn how to do it visit https://ricos.js.org/.
       * @internal
       */
      description?: RichContent;
      /** Whether the product is visible to site visitors in Online Stores. Default: `true` */
      visible?: boolean | null;
      /** Whether the product is visible in POS (point of sale app). Default: `true` */
      visibleInPos?: boolean | null;
      /** Media items (images, videos etc) associated with this product. */
      media?: Media;
      /** Custom SEO data for the product. */
      seoData?: SeoSchema;
      /**
       * Tax group id
       * @internal
       */
      taxGroupId?: string | null;
      /**
       * Custom text fields allows to collect custom input from UoUs. For example greeting text on birthday cake or text that should be print on T-shirt.
       * Don't get used to it. Will be migrated to other field soon.
       * @internal
       */
      customFields?: CustomText[];
      /** Product options */
      options?: ConnectedOption[];
      /** Product Modifiers */
      modifiers?: ConnectedModifier[];
      /** Optional - Brand. To assign existing brand to product provide `brand.id`. */
      brand?: Brand;
      /** Product info sections. */
      infoSections?: InfoSection[];
      /** Product subscription options. */
      subscriptionOptions?: SubscriptionOptionInfo[];
      /** Default: `false`. Can be `true` only when `subscription_options` not empty and means that product can be purchased only as subscription but not as individual product. */
      subscriptionOnly?: boolean;
      /**
       * Product customizations. Replaces `customFields` from v1 API.
       * @internal
       */
      customizations?: Customization[];
      /** Product ribbon. */
      ribbon?: Ribbon;
      /**
       * A list of categories that this product is included in directly. Updated automatically when product added/removed from category, when an item is moved within the category or when category deleted.
       * @readonly
       */
      directCategories?: ProductCategory[];
      /**
       * A list of all categories that this product is included in directly and their parent category ids. For example, product included in category "Shoes", "Shoes" has parent category "Women", product is not included in category "Women" directly but it still will be returned in this list because product included in it's subcategory.
       * @readonly
       */
      allCategories?: ProductCategory[];
      /**
       * Main category id. If product belongs to more than one category main category defines `breadcrumbs` on product page.
       * By default first category from `category_ids` list. Provided value MUST be in `category_ids`
       * Can be empty only in case if product doesn't belong to any category.
       */
      mainCategoryId?: string | null;
      /**
       * Breadcrumb, Calculated by the breadcrumbs of the `main_category_id` when it changes.
       * @readonly
       */
      breadcrumbs?: BreadCrumb[];
      /**
       * Product base price range. The minimum and maximum prices of all the variants.
       * @readonly
       */
      basePriceRange?: PriceRange;
      /**
       * Product discounted price range. The minimum and maximum prices of all the variants.
       * @readonly
       */
      discountedPriceRange?: PriceRange;
      /**
       * Product cost range. The minimum and maximum costs of all the variants.
       * Requires admin permissions to read
       * @readonly
       */
      costRange?: PriceRange;
      /**
       * Product inventory per location (a materialized view by listening to inventory domain events).
       * @readonly
       */
      inventory?: Inventory[];
      /** Product type. Affects which properties product has. Also defines type of variants which allowed to be associated with this product. Product type must be provided on creation and cannot be changed. */
      productType?: ProductType;
      /**
       * Currency code in ISO 4217 format (e.g., USD). All prices in responses are in this currency.
       * @readonly
       */
      currency?: string | null;
      /**
       * List of related variants.
       * On update product request with variants product options must be provided
       */
      variants?: Variant[];
      /** Extensions enabling users to save custom data related to the product. */
      extendedFields?: ExtendedFields;
      /**
       * SEO title extracted from `seo_data` for backward compatibility.
       * @internal
       * @readonly
       */
      seoTitle?: string | null;
      /**
       * SEO description extracted from `seo_data` for backward compatibility.
       * @internal
       * @readonly
       */
      seoDescription?: string | null;
      /** Product subscription based purchases. */
      subscription?: Subscription;
  }
  /** @oneof */
  interface ProductTypedPropertiesOneOf {
      /** Physical properties, can be provided only when `product_type` is PHYSICAL */
      physicalOptions?: PhysicalProperties;
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
  interface Media {
      /**
       * Primary media (image, video etc) associated with this product.
       * @readonly
       */
      main?: ProductMedia;
      /** Media (images, videos etc) associated with this product. */
      items?: ProductMedia[];
  }
  interface ProductMedia extends ProductMediaSetByOneOf, ProductMediaMediaOneOf {
      /** Image ID from Media Manager. Use when you already uploaded media in Media Manager. */
      _id?: string;
      /** URL of image to be uploaded. Upload by url is async process so expect product to be created without any media. If upload successful then media will appear in product later. */
      url?: string;
      /**
       * Product image.
       * @readonly
       */
      image?: string;
      /**
       * Product video.
       * @readonly
       */
      video?: string;
      /**
       * ID used to upload media to Wix Media Manager. When media item provided with id `correlation_id` will be the same. When media provided with url only `correlation_id` will be auto-generated.
       * @readonly
       */
      correlationId?: string;
      /** Image alt text. Relevant only for images. */
      altText?: string | null;
  }
  /** @oneof */
  interface ProductMediaSetByOneOf {
      /** Image ID from Media Manager. Use when you already uploaded media in Media Manager. */
      _id?: string;
      /** URL of image to be uploaded. Upload by url is async process so expect product to be created without any media. If upload successful then media will appear in product later. */
      url?: string;
  }
  /** @oneof */
  interface ProductMediaMediaOneOf {
      /**
       * Product image.
       * @readonly
       */
      image?: string;
      /**
       * Product video.
       * @readonly
       */
      video?: string;
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
      /**
       * Video format
       * Possible values: ['144p.mp4' '144p.webm' '240p.mp4' '240p.webm' '360p.mp4' '360p.webm' '480p.mp4' '480p.webm'
       * '720p.mp4' '720p.webm' '1080p.mp4' '1080p.webm', 'hls' ]
       */
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
  interface CustomText {
      /** Custom text title */
      title?: string;
      /**
       * Key is autogenerated from title
       * @readonly
       */
      key?: string;
      /** Max length of input */
      maxLength?: number;
      /** Whether input is mandatory */
      mandatory?: boolean;
  }
  interface ConnectedOption extends ConnectedOptionOptionSettingsOneOf {
      /** TextChoices modifier settings */
      textChoicesSettings?: TextChoicesSettings;
      /** SwatchChoices modifier settings */
      swatchChoicesSettings?: SwatchChoicesSettings;
      /** The id of the option */
      optionId?: string | null;
      /** Option title. Materialized view field */
      name?: string | null;
      /** Option settings type */
      optionSettingsType?: OptionSettingsType;
      /**
       * Option key. TODO: Materialized view field
       * @readonly
       */
      key?: string;
  }
  /** @oneof */
  interface ConnectedOptionOptionSettingsOneOf {
      /** TextChoices modifier settings */
      textChoicesSettings?: TextChoicesSettings;
      /** SwatchChoices modifier settings */
      swatchChoicesSettings?: SwatchChoicesSettings;
  }
  enum OptionSettingsType {
      UNKNOWN_OPTION_SETTINGS_TYPE = "UNKNOWN_OPTION_SETTINGS_TYPE",
      FREE_TEXT = "FREE_TEXT",
      TEXT_CHOICES = "TEXT_CHOICES",
      SWATCH_CHOICES = "SWATCH_CHOICES"
  }
  interface TextChoicesSettings {
      /**
       * A list of choices available for this Option.
       * To update choices for existing Option, use SetProductOptionChoices, AddProductOptionChoices, DeleteProductOptionChoices and BulkAddProductOptionChoices endpoints
       */
      choices?: ConnectedChoice[];
  }
  interface ConnectedChoice extends ConnectedChoiceValueOneOf {
      /** One color - HEX (#RRGGBB) color code for display. */
      colorCode?: string;
      /**
       * Multiple colors  - HEX (#RRGGBB) color code
       * @internal
       */
      colorCodes?: MultipleColors;
      /**
       * Image
       * @internal
       */
      image?: string;
      /** The id of the choice. */
      choiceId?: string | null;
      /**
       * Product media overrides. When not empty only these images will be shown when such choices selected by customer. Otherwise all images of product.
       * When several choices from different options selected only media filter present in `media_overrides` of ALL choices will be shown.
       * For example if Color:red has images 1,2,3 and Material:Silk has images 2,3,5 then only images 2,3 will be shown when both of them selected.
       */
      linkedMedia?: ProductMedia[];
      /** The type of this choice. Materialized view field */
      choiceType?: ChoiceType;
      /**
       * A key based the choice name that will be used for CatalogSPI endpoints. Materialized view field.
       * @readonly
       */
      key?: string;
      /** Choice name.  Materialized view field. */
      name?: string | null;
      /** Price added to product price for this Choice when Option is assigned to Product as Modifier. */
      addedPrice?: string | null;
  }
  /** @oneof */
  interface ConnectedChoiceValueOneOf {
      /** One color - HEX (#RRGGBB) color code for display. */
      colorCode?: string;
      /**
       * Multiple colors  - HEX (#RRGGBB) color code
       * @internal
       */
      colorCodes?: MultipleColors;
      /**
       * Image
       * @internal
       */
      image?: string;
  }
  enum ChoiceType {
      UNKNOWN_CHOICE_TYPE = "UNKNOWN_CHOICE_TYPE",
      CHOICE_TEXT = "CHOICE_TEXT",
      ONE_COLOR = "ONE_COLOR",
      MULTIPLE_COLORS = "MULTIPLE_COLORS",
      IMAGE = "IMAGE"
  }
  interface MultipleColors {
      /** A list of color codes. */
      colorCodes?: string[];
  }
  interface SwatchChoicesSettings {
      /**
       * A list of choices available for this Option.
       * To update choices for existing Option, use SetProductOptionChoices, AddProductOptionChoices, DeleteProductOptionChoices and BulkAddProductOptionChoices endpoints
       */
      choices?: ConnectedChoice[];
  }
  interface ConnectedModifier extends ConnectedModifierOptionSettingsOneOf {
      /** Free Text modifier settings */
      freeTextSettings?: FreeTextSettings;
      /** TextChoices modifier settings */
      textChoicesSettings?: TextChoicesSettings;
      /** SwatchChoices modifier settings */
      swatchChoicesSettings?: SwatchChoicesSettings;
      /** The id of the option */
      optionId?: string | null;
      /** Modifier title. Materialized view field */
      name?: string | null;
      /** Option settings type */
      optionSettingsType?: OptionSettingsType;
      /** User input is required. */
      mandatory?: boolean;
      /**
       * Modifier key. TODO: Materialized view field
       * @readonly
       */
      key?: string;
  }
  /** @oneof */
  interface ConnectedModifierOptionSettingsOneOf {
      /** Free Text modifier settings */
      freeTextSettings?: FreeTextSettings;
      /** TextChoices modifier settings */
      textChoicesSettings?: TextChoicesSettings;
      /** SwatchChoices modifier settings */
      swatchChoicesSettings?: SwatchChoicesSettings;
  }
  interface FreeTextSettings {
      /** minimum text length */
      minCharCount?: number;
      /** maximum text length */
      maxCharCount?: number;
      /** Price added to product price. */
      defaultAddedPrice?: string | null;
  }
  interface Brand {
      /** brand ID */
      _id?: string | null;
      /** brand name. Translatable. Materialized field view. */
      name?: string | null;
  }
  interface InfoSection {
      /** info section id */
      _id?: string | null;
      /** Product info section title. Translatable. Materialized view field. */
      uniqueName?: string | null;
      /**
       * Product info section title. Translatable. Materialized view field.
       * @readonly
       */
      title?: string | null;
      /**
       * Product info section description. Translatable. Materialized view field.
       * In order to use this field you have to integrate with "Ricos" on frontend side. To learn how to do it visit https://ricos.js.org/.
       * @readonly
       */
      description?: RichContent;
  }
  interface SubscriptionOptionInfo {
      /** The id of the subscription_option */
      _id?: string | null;
      /** The visibility of the subscription_option. Default: true */
      visible?: boolean | null;
      /** Subscription option title as materialized view */
      title?: string | null;
      /** Subscription option description (optional) as materialized view */
      description?: string | null;
      /** Subscription charge times. For example, if `frequency: MONTH` and `billingCycles: 6`; payment will be made monthly for 6 months. */
      settings?: SubscriptionSettings;
      /**
       * Discount info (optional).
       * For example, a $20 discount would be `value: 20`, `type: AMOUNT`.
       */
      discount?: Discount;
  }
  interface SubscriptionSettings {
      /** Frequency of recurring payment. */
      frequency?: SubscriptionFrequency;
      /**
       * Interval of recurring payment (optional: default value 1 will be used if not provided)
       * @internal
       */
      interval?: number | null;
      /** Whether subscription is renewed automatically at the end of each period. */
      autoRenewal?: boolean;
      /** Number of billing cycles before subscription ends. Ignored if `autoRenewal: true`. */
      billingCycles?: number | null;
  }
  /** Frequency unit of recurring payment */
  enum SubscriptionFrequency {
      UNDEFINED = "UNDEFINED",
      DAY = "DAY",
      WEEK = "WEEK",
      MONTH = "MONTH",
      YEAR = "YEAR"
  }
  interface Discount {
      /** Discount type. */
      type?: DiscountType;
      /** Discount value. */
      value?: number;
  }
  enum DiscountType {
      UNDEFINED = "UNDEFINED",
      /** No discount */
      AMOUNT = "AMOUNT",
      PERCENT = "PERCENT"
  }
  interface Customization extends CustomizationValueOneOf {
      /** Text input configuration. Required when `type` is TEXT_INPUT. */
      textInputOptions?: TextInputValue;
      /** Title */
      title?: string;
      /** Type. */
      customizationType?: CustomizationType;
      /** Whether customer's input is mandatory. */
      mandatory?: boolean;
  }
  /** @oneof */
  interface CustomizationValueOneOf {
      /** Text input configuration. Required when `type` is TEXT_INPUT. */
      textInputOptions?: TextInputValue;
  }
  enum CustomizationType {
      UNKNOWN_TYPE = "UNKNOWN_TYPE",
      /** Represents text box for the customer to add a message to their order (e.g., customization request). */
      TEXT_INPUT = "TEXT_INPUT",
      CHECKBOX = "CHECKBOX"
  }
  interface TextInputValue {
      /** Customer's input max length */
      maxLength?: number;
  }
  interface Ribbon {
      /** ribbon ID */
      _id?: string;
      /** ribbon name. Translatable. Materialized field view. */
      name?: string;
  }
  interface ProductCategory {
      /** Id of the category */
      _id?: string;
      /** Location of the product within the category (sorted lowest to highest) */
      index?: number | null;
  }
  interface BreadCrumb {
      /** Category ID. */
      categoryId?: string;
      /** Category name. Translatable */
      categoryName?: string;
      /** A permanent, friendly URL name of category. */
      categorySlug?: string;
  }
  interface PriceRange {
      /** Minimum value. */
      minValue?: FixedMonetaryAmount;
      /** Maximum value. */
      maxValue?: FixedMonetaryAmount;
  }
  interface FixedMonetaryAmount {
      /** Monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). Optionally, a single (-), to indicate that the amount is negative. */
      value?: string;
      /**
       * Monetary amount. Decimal string in local format (e.g., 1 000,30). Optionally, a single (-), to indicate that the amount is negative.
       * For example, €10.00
       * @readonly
       */
      formattedValue?: string | null;
  }
  interface Inventory {
      /**
       * Location Id
       * @readonly
       */
      locationId?: string;
      /**
       * The current purchase availability status calculated based on variants
       * @readonly
       */
      purchaseAvailabilityStatus?: PurchaseAvailabilityStatus;
      /**
       * The current preorder status calculated based on variants
       * @readonly
       */
      preorderAvailabilityStatus?: PreorderStatus;
  }
  enum PurchaseAvailabilityStatus {
      UNKNOWN_PURCHASE_AVAILABILITY_STATUS = "UNKNOWN_PURCHASE_AVAILABILITY_STATUS",
      /** All variants in stock and available for purchase */
      IN_STOCK = "IN_STOCK",
      /** All variants out of stock */
      OUT_OF_STOCK = "OUT_OF_STOCK",
      /** Some ouf variants out of stock and some of them are in stock */
      PARTIALLY_OUT_OF_STOCK = "PARTIALLY_OUT_OF_STOCK"
  }
  enum PreorderStatus {
      UNKNOWN_PREORDER_STATUS = "UNKNOWN_PREORDER_STATUS",
      /** All variants available for preorder */
      ALL_VARIANTS = "ALL_VARIANTS",
      /** No variants available for preorder */
      NO_VARIANTS = "NO_VARIANTS",
      /** Some variants available for preorder */
      SOME_VARIANTS = "SOME_VARIANTS"
  }
  enum ProductType {
      UNKNOWN_PRODUCT_TYPE = "UNKNOWN_PRODUCT_TYPE",
      PHYSICAL = "PHYSICAL",
      DIGITAL = "DIGITAL"
  }
  interface PhysicalProperties {
      /**
       * Price per unit settings - base measurement unit and quantity in order to show price per unit data on the product page.
       * This setting is fixed for a product. The specific price per unit value for each variant is set on each variant
       * For example if one sells cheese and price per unit settings is 100 gr. then we will display price per 100 gr. of cheese.
       */
      pricePerUnit?: PricePerUnitSettings;
      /** Fulfiller id */
      fulfillerId?: string | null;
      /**
       * Shipping group id
       * @internal
       */
      shippingGroupId?: string | null;
      /**
       * Product weight range. The minimum and maximum weights of all the variants.
       * this is needed for bulk adjust product properties action, and also exist in the current API.
       * @readonly
       */
      shippingWeightRange?: WeightRange;
  }
  interface PricePerUnitSettings {
      /** Quantity value. e.g to define price per unit product setting to price per 100 gr. Set this value to 100. */
      quantity?: number;
      /** Measurement unit, e.g to define price per unit product setting to price per 100 gr. Set this value to "G". */
      measurementUnit?: MeasurementUnit;
  }
  enum MeasurementUnit {
      UNSPECIFIED = "UNSPECIFIED",
      ML = "ML",
      CL = "CL",
      L = "L",
      CBM = "CBM",
      MG = "MG",
      G = "G",
      KG = "KG",
      MM = "MM",
      CM = "CM",
      M = "M",
      SQM = "SQM",
      OZ = "OZ",
      LB = "LB",
      FLOZ = "FLOZ",
      PT = "PT",
      QT = "QT",
      GAL = "GAL",
      IN = "IN",
      FT = "FT",
      YD = "YD",
      SQFT = "SQFT"
  }
  interface WeightRange {
      /** Minimum weight across all variants associated with product. */
      minValue?: number;
      /** Maximum weight across all variants associated with product. */
      maxValue?: number;
  }
  interface Variant extends VariantTypedPropertiesOneOf {
      /** Physical properties. Can be provided when `product_type` PHYSICAL */
      physicalOptions?: VariantPhysicalProperties;
      /** Digital properties. Can be provided when `product_type` DIGITAL */
      digitalOptions?: VariantDigitalProperties;
      /** Variant id. */
      _id?: string | null;
      /** Whether the variant is visible to site visitors in Online Stores. Default: `true` */
      visible?: boolean | null;
      /**
       * A list of options with a selection of choice per option
       * In case this list is empty, this is the default variant of an unmanaged product
       */
      choices?: OptionChoice[];
      /** Variant price */
      price?: PriceInfo;
      /** Variant revenue details. Requires admin permissions to read */
      revenueDetails?: RevenueDetails;
      /**
       * Variant name. Generated automatically based on product name and option choice names
       * not sure it's needed here. maybe only on the view entity
       * @readonly
       */
      name?: string | null;
      /**
       * The main media of the variant.
       * If product has overrides per choices this is the first image applicable for `choices` of this variant.
       * Otherwise - main image of product.
       * @readonly
       */
      media?: ProductMedia;
      /**
       * Subscription plans prices calculated by applying subscription plan discount to the variant `price.discounted_price`
       * @readonly
       */
      subscriptionPlansPrices?: SubscriptionPlanPrice[];
  }
  /** @oneof */
  interface VariantTypedPropertiesOneOf {
      /** Physical properties. Can be provided when `product_type` PHYSICAL */
      physicalOptions?: VariantPhysicalProperties;
      /** Digital properties. Can be provided when `product_type` DIGITAL */
      digitalOptions?: VariantDigitalProperties;
  }
  interface OptionChoice {
      /** The name of the option, */
      optionName?: string;
      /** The name of the choice selected for this option */
      choiceName?: string;
      /** Option setting type. */
      optionSettingsType?: OptionSettingsType;
  }
  interface PriceInfo {
      /** Variant price. Must be greater or equal to 0. */
      basePrice?: FixedMonetaryAmount;
      /** Discounted variant price. If not provided will be equal to `base_price`. Must be greater or equal to 0. */
      discountedPrice?: FixedMonetaryAmount;
  }
  interface RevenueDetails {
      /** Item cost. */
      cost?: FixedMonetaryAmount;
      /**
       * Profit. Calculated by reducing `cost` from `discounted_price`.
       * @readonly
       */
      profit?: FixedMonetaryAmount;
      /**
       * Profit Margin. Calculated by dividing `profit` by `discounted_price`.
       * The result is rounded to 4 decimal places.
       * @readonly
       */
      profitMargin?: number;
  }
  interface VariantPhysicalProperties {
      /** Variant shipping weight. */
      weight?: number | null;
      /**
       * Price per unit info, in order to show price per unit on the product page.
       * For example if one sells cheese and defines 100g here then we know that buying this variant buyer receives 100g of cheese.
       * But on product page price will be displayed for units defined on product level. See `pricePerUnit.value` to understand how it's calculated.
       */
      pricePerUnit?: PricePerUnit;
      /** Variant SKU (stock keeping unit) */
      sku?: string | null;
      /** Variant barcode. */
      barcode?: string | null;
  }
  interface PricePerUnit {
      /**
       * Price per unit data for this variant
       * measurement_unit value must be corresponding to the measurement unit set on the product,
       * for example if the base measurement unit is Kg. the variants value of total_measurement_unit must be mg, g, or kg
       */
      settings?: PricePerUnitSettings;
      /**
       * Calculated value of price per unit. Takes into account pricePerUnit settings of parent product, of this variants and discounted price of variant.
       * For example if discounted price is 2$, product's price per unit setting is 1 Kg, variant price per unit setting is 0.5 Kg then this value is 4$ (means variant weight is 0.5 Kg and it costs 2$ but we want to show price per 1 Kg so we show 4$).
       * @readonly
       */
      value?: number;
      /**
       * Price per unit info in the format of variant specific data / product setting, for example €4.00 / 1 Kg
       * @readonly
       */
      description?: string | null;
  }
  interface VariantDigitalProperties {
      /**
       * Digital file which will be downloaded by buyer after successful purchase. Requires admin permissions to read.
       * @internal
       */
      digitalFile?: SecuredMedia;
  }
  interface SecuredMedia {
      /** Media ID in media manager. */
      _id?: string;
      /**
       * Original file name.
       * @readonly
       */
      fileName?: string;
      /**
       * File type.
       * @readonly
       */
      fileType?: FileType;
  }
  enum FileType {
      UNSPECIFIED = "UNSPECIFIED",
      SECURE_PICTURE = "SECURE_PICTURE",
      SECURE_VIDEO = "SECURE_VIDEO",
      SECURE_DOCUMENT = "SECURE_DOCUMENT",
      SECURE_MUSIC = "SECURE_MUSIC",
      SECURE_ARCHIVE = "SECURE_ARCHIVE"
  }
  interface SubscriptionPlanPrice {
      /**
       * Subscription plan ID (auto-generated upon subscription plan creation).
       * @readonly
       */
      planId?: string | null;
      /**
       * Subscription plan price calculated by applying subscription plan discount to the variant `price.discounted_price`
       * @readonly
       */
      price?: FixedMonetaryAmount;
  }
  interface ExtendedFields {
      /**
       * Extended field data. Each key corresponds to the namespace of the app that created the extended fields.
       * The value of each key is structured according to the schema defined when the extended fields were configured.
       *
       * You can only access fields for which you have the appropriate permissions.
       *
       * Learn more about [extended fields](https://dev.wix.com/docs/rest/articles/getting-started/extended-fields).
       */
      namespaces?: Record<string, Record<string, any>>;
  }
  interface Subscription {
      /** Subscription plans. */
      subscriptionPlans?: SubscriptionPlan[];
      /** Product could be purchased as individual product in addition to a subscription based purchases. Default: `false`. */
      allowOneTimePurchases?: boolean | null;
  }
  interface SubscriptionPlan {
      /** Subscription plan ID (auto-generated upon subscription plan creation). */
      _id?: string | null;
      /** Subscription plan title. */
      title?: string;
      /** Subscription plan description (optional). */
      description?: string | null;
      /** Whether the plan is visible to site visitors in Online Stores. Default: `true` */
      visible?: boolean | null;
      /** Subscription charge times. For example, if `frequency: MONTH` and `billingCycles: 6`; payment will be made monthly for 6 months. */
      subscriptionSettings?: V3SubscriptionSettings;
      /**
       * Discount info (optional).
       * For example, a $20 discount would be `amount: 20`, `type: AMOUNT`.
       */
      discount?: SubscriptionPlanDiscount;
  }
  interface V3SubscriptionSettings extends V3SubscriptionSettingsCyclesOneOf {
      /** Whether subscription is renewed automatically at the end of each period. */
      autoRenewal?: boolean;
      /** Number of billing cycles before subscription ends. */
      billingCycles?: number;
      /** Frequency of recurring payment. */
      frequency?: SubscriptionFrequency;
      /** Interval of recurring payment. Default: `1` */
      interval?: number | null;
  }
  /** @oneof */
  interface V3SubscriptionSettingsCyclesOneOf {
      /** Whether subscription is renewed automatically at the end of each period. */
      autoRenewal?: boolean;
      /** Number of billing cycles before subscription ends. */
      billingCycles?: number;
  }
  interface SubscriptionPlanDiscount extends SubscriptionPlanDiscountDiscountOneOf {
      /** Amount to discount from the variant discounted_price. */
      amountOff?: string;
      /** Percentage to discount from variant discounted_price. */
      percentOff?: number;
      /** Discount type. */
      type?: SubscriptionPlanDiscountDiscountType;
  }
  /** @oneof */
  interface SubscriptionPlanDiscountDiscountOneOf {
      /** Amount to discount from the variant discounted_price. */
      amountOff?: string;
      /** Percentage to discount from variant discounted_price. */
      percentOff?: number;
  }
  enum SubscriptionPlanDiscountDiscountType {
      UNKNOWN_DISCOUNT = "UNKNOWN_DISCOUNT",
      AMOUNT = "AMOUNT",
      PERCENT = "PERCENT"
  }
  interface UpdateDocumentsEvent extends UpdateDocumentsEventOperationOneOf {
      /** insert/update documents */
      update?: DocumentUpdateOperation;
      /** delete by document ids */
      deleteByIds?: DeleteByIdsOperation;
      /** delete documents matching filter */
      deleteByFilter?: DeleteByFilterOperation;
      /** update documents matching filter */
      updateByFilter?: UpdateByFilterOperation;
      /** update only existing documents */
      updateExisting?: UpdateExistingOperation;
      /** application which owns documents */
      appDefId?: string | null;
      /** type of the documents */
      documentType?: string | null;
      /** language of the documents */
      language?: string | null;
      /** site documents belong to */
      msId?: string | null;
  }
  /** @oneof */
  interface UpdateDocumentsEventOperationOneOf {
      /** insert/update documents */
      update?: DocumentUpdateOperation;
      /** delete by document ids */
      deleteByIds?: DeleteByIdsOperation;
      /** delete documents matching filter */
      deleteByFilter?: DeleteByFilterOperation;
      /** update documents matching filter */
      updateByFilter?: UpdateByFilterOperation;
      /** update only existing documents */
      updateExisting?: UpdateExistingOperation;
  }
  interface DocumentUpdateOperation {
      /** documents to index or update */
      documents?: IndexDocument[];
  }
  interface IndexDocument {
      /** data bag with non-searchable fields (url, image) */
      payload?: DocumentPayload;
      /** what type of users should documents be visible to */
      exposure?: Enum;
      /** document with mandatory fields (id, title, description) and with fields specific to the type of the document */
      document?: Record<string, any> | null;
      /** what member groups is the document exposed to. Used only with GROUP_PROTECTED exposure */
      permittedMemberGroups?: string[];
      /** if true SEO is disabled for this document */
      seoHidden?: boolean | null;
      /** if true the page is a lightbox popup */
      isPopup?: boolean | null;
  }
  interface DocumentPayload {
      /** url of the page representing the document */
      url?: string | null;
      /** image which represents the document */
      documentImage?: DocumentImage;
  }
  interface DocumentImage {
      /** the name of the image */
      name?: string;
      /** the width of the image */
      width?: number;
      /** the height of the image */
      height?: number;
  }
  enum Enum {
      /** Default value. Means that permission not set */
      UNKNOWN = "UNKNOWN",
      /** Protected exposure. Exposed to members and owners */
      PROTECTED = "PROTECTED",
      /** Private exposure. Exposed to owners */
      PRIVATE = "PRIVATE",
      /** Public exposure. Visible to everyone */
      PUBLIC = "PUBLIC",
      /** Used for partial updates, to state that exposure is not changing */
      UNCHANGED = "UNCHANGED",
      /** Protected to members of permitted groups and owners */
      GROUP_PROTECTED = "GROUP_PROTECTED"
  }
  interface DeleteByIdsOperation {
      /** ids of the documents to delete */
      documentIds?: string[];
  }
  interface DeleteByFilterOperation {
      /** documents matching this filter wil be deleted. only filterable documents defined in document_type can be used for filtering */
      filter?: Record<string, any> | null;
  }
  interface UpdateByFilterOperation {
      /** documents matching this filter will be updated */
      filter?: Record<string, any> | null;
      /** partial document to apply */
      document?: IndexDocument;
  }
  interface UpdateExistingOperation {
      /** documents to update */
      documents?: IndexDocument[];
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
  interface SearchIndexingNotification {
      /** new state of indexing for the site specified in ms_id */
      indexState?: State;
      /** type of the document the notification is targeted for. Applies to all types if not provided */
      documentType?: string | null;
      /** languaInternalDocumentUpdateByFilterOperationge the notification is targeted for. Applies to all languages if not provided */
      language?: string | null;
      /** site for which notification is targeted */
      msId?: string | null;
  }
  enum State {
      /** default state */
      Unknown = "Unknown",
      /** metasite does not require site search indexing */
      Off = "Off",
      /** metasite requires site search indexing */
      On = "On"
  }
  interface CreateProductRequest {
      /**
       * Product to be created.
       * At least one variant must be provided and each variant must have relevant item in `choices` field for every item in `options`.
       * In case if `options` is empty one default variant must be provided with empty `choices` list.
       */
      product: ProductComposite;
      /** Whether to return the full product, variant and inventory entities in the response. Default: false */
      returnEntity?: boolean;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields[];
  }
  interface ProductComposite extends ProductCompositeTypedPropertiesOneOf {
      /** Physical properties, can be provided only when `product_type` is PHYSICAL */
      physicalOptions?: PhysicalProperties;
      /**
       * Product ID. Auto-generated on product creation.
       * @readonly
       */
      _id?: string | null;
      /** Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision */
      revision?: string | null;
      /** Product name. Translatable. */
      name?: string | null;
      /**
       * A permanent, friendly URL name.
       * If not provided, on create generated automatically.
       * When provided, validated and must be unique.
       */
      slug?: string | null;
      /**
       * Optional - Product description which supports rich content.
       * In order to use this field you have to integrate with "Ricos" on frontend side. To learn how to do it visit https://ricos.js.org/.
       * @internal
       */
      description?: RichContent;
      /** Whether the product is visible to site visitors in Online Stores. Default: `true` */
      visible?: boolean | null;
      /** Whether the product is visible in POS (point of sale app). Default: `true` */
      visibleInPos?: boolean | null;
      /** Media items (images, videos etc) associated with this product. */
      media?: Media;
      /** Custom SEO data for the product. */
      seoData?: SeoSchema;
      /**
       * Tax group id
       * @internal
       */
      taxGroupId?: string | null;
      /**
       * Custom text fields allows to collect custom input from UoUs. For example greeting text on birthday cake or text that should be print on T-shirt.
       * Don't get used to it. Will be migrated to other field soon.
       * @internal
       */
      customFields?: CustomText[];
      /** Product options */
      options?: ConnectedOption[];
      /** Product Modifiers */
      modifiers?: ConnectedModifier[];
      /** Optional - Brand. To assign existing brand to product provide `brand.id`. */
      brand?: Brand;
      /** Product info sections. */
      infoSections?: InfoSection[];
      /**
       * Product customizations. Replaces `customFields` from v1 API.
       * @internal
       */
      customizations?: Customization[];
      /** Product ribbon. */
      ribbon?: Ribbon;
      /**
       * Main category id. If product belongs to more than one category main category defines `breadcrumbs` on product page.
       * By default first category from `category_ids` list. Provided value MUST be in `category_ids`
       * Can be empty only in case if product doesn't belong to any category.
       */
      mainCategoryId?: string | null;
      /** Product type. Affects which properties product has. Also defines type of variants which allowed to be associated with this product. Product type must be provided on creation and cannot be changed. */
      productType?: ProductType;
      /**
       * List of related variants.
       * On update product request with variants product options must be provided
       */
      variants?: VariantComposite[];
      subscription?: Subscription;
  }
  /** @oneof */
  interface ProductCompositeTypedPropertiesOneOf {
      /** Physical properties, can be provided only when `product_type` is PHYSICAL */
      physicalOptions?: PhysicalProperties;
  }
  interface VariantComposite extends VariantCompositeTypedPropertiesOneOf {
      /** Physical properties. Can be provided when `product_type` PHYSICAL */
      physicalOptions?: VariantPhysicalProperties;
      /** Digital properties. Can be provided when `product_type` DIGITAL */
      digitalOptions?: VariantDigitalProperties;
      /** Variant id. */
      _id?: string | null;
      /** Whether the variant is visible to site visitors in Online Stores. Default: `true` */
      visible?: boolean | null;
      /** Variant price */
      price?: PriceInfo;
      /** Variant revenue details. Requires admin permissions to read */
      revenueDetails?: RevenueDetails;
      /** Inventory item of the variant on the default location. */
      inventoryItem?: InventoryItemComposite;
      /**
       * A list of options with a selection of choice per option
       * In case this list is empty, this is the default variant of an unmanaged product
       */
      choices?: OptionChoiceReferences[];
  }
  /** @oneof */
  interface VariantCompositeTypedPropertiesOneOf {
      /** Physical properties. Can be provided when `product_type` PHYSICAL */
      physicalOptions?: VariantPhysicalProperties;
      /** Digital properties. Can be provided when `product_type` DIGITAL */
      digitalOptions?: VariantDigitalProperties;
  }
  interface InventoryItemComposite extends InventoryItemCompositeTrackingMethodOneOf {
      /** Inventory tracking status, when set to true, item is available for sale without quantity limit. */
      inStock?: boolean;
      /**
       * Quantity currently left in inventory.
       * In some scenarios, quantity could go negative, for example when decreasing inventory for an order that has already been paid.
       */
      quantity?: number;
      /**
       * InventoryItem ID. Auto-generated on inventory creation.
       * @readonly
       */
      _id?: string | null;
      /**
       * InventoryItem revision. Auto-generated on inventory creation. incremented on each update
       * @readonly
       */
      revision?: string | null;
      /** Item preorder info. */
      preorderInfo?: PreorderInfo;
  }
  /** @oneof */
  interface InventoryItemCompositeTrackingMethodOneOf {
      /** Inventory tracking status, when set to true, item is available for sale without quantity limit. */
      inStock?: boolean;
      /**
       * Quantity currently left in inventory.
       * In some scenarios, quantity could go negative, for example when decreasing inventory for an order that has already been paid.
       */
      quantity?: number;
  }
  interface PreorderInfo {
      /** Whether the item is available for preorder. */
      enabled?: boolean;
      /** Optional - A message the buyer will see when the item is out of stock and preorder is enabled. */
      message?: string | null;
      /**
       * Optional - Number of products that can be purchased as preorder after stock reaches zero.
       * If not defined -100,000 products can be purchased as preorder.
       */
      limit?: number | null;
      /**
       * How many times this item was purchased as a preorder, limited by the value of PreorderSettings.limit.
       * It may cross the limit if the restrict_inventory_value = false.
       * @readonly
       */
      counter?: number | null;
  }
  interface OptionChoiceReferences {
      /** The name of the option, */
      optionName?: string;
      /** The name of the choice selected for this option */
      choiceName?: string;
      /** Option setting type. */
      optionSettingsType?: OptionSettingsType;
  }
  enum RequestedFields {
      UNKNOWN_REQUESTED_FIELD = "UNKNOWN_REQUESTED_FIELD",
      URL = "URL",
      CURRENCY = "CURRENCY",
      INFO_SECTION = "INFO_SECTION",
      BREADCRUMBS = "BREADCRUMBS",
      /** You can request merchant data only if you have `WIX_STORES.PRODUCT_READ_MERCHANT_DATA` permission. */
      MERCHANT_DATA = "MERCHANT_DATA",
      VARIANTS = "VARIANTS",
      SUBSCRIPTION_PLANS_PRICES = "SUBSCRIPTION_PLANS_PRICES"
  }
  interface CreateProductResponse {
      /** The created Product */
      product?: Product;
      /** Inventories created by bulk action. */
      inventoryResults?: BulkInventoryItemResults;
  }
  interface BulkInventoryItemResults {
      /**
       * todo need to change min to 1
       * Inventories by bulk action.
       */
      results?: BulkInventoryItemResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkInventoryItemResult {
      /** Information about successful action or error for failure. */
      itemMetadata?: ItemMetadata;
      /** Created or updated inventory item. Optional - returned only if requested with `return_entity` set to `true`. */
      item?: InventoryItem;
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
  /** InventoryItem is the main entity of InventoryService */
  interface InventoryItem extends InventoryItemTrackingMethodOneOf {
      /** Inventory tracking status, when set to true, item is available for sale without quantity limit. */
      inStock?: boolean;
      /**
       * Quantity currently left in inventory.
       * In some scenarios, quantity could go negative, for example when decreasing inventory for an order that has already been paid.
       */
      quantity?: number;
      /**
       * Inventory ID
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision.
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the time this Inventory was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Inventory was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Variant ID. */
      variantId?: string;
      /** Location ID, location_id with variant_id is unique. */
      locationId?: string | null;
      /** Product ID. */
      productId?: string;
      /**
       * Whether the quantity is being tracked.
       * @readonly
       */
      trackQuantity?: boolean;
      /**
       * Item availability, availability is combination of status and available quantity.
       * @readonly
       */
      availability?: ItemAvailability;
      /** Item preorder info. */
      preorderInfo?: PreorderInfo;
      /** Extensions enabling users to save custom data related to the inventory item. */
      extendedFields?: ExtendedFields;
  }
  /** @oneof */
  interface InventoryItemTrackingMethodOneOf {
      /** Inventory tracking status, when set to true, item is available for sale without quantity limit. */
      inStock?: boolean;
      /**
       * Quantity currently left in inventory.
       * In some scenarios, quantity could go negative, for example when decreasing inventory for an order that has already been paid.
       */
      quantity?: number;
  }
  interface ItemAvailability {
      /**
       * If `AvailableStatus` is NOT_AVAILABLE the item is not available
       * If `AvailableStatus` is PURCHASE and available_quantity is N then up to N items can be purchased right now
       * If `AvailableStatus` is PURCHASE and available_quantity is not defined then unlimited number of items can be purchased right now
       * If `AvailableStatus` is PREORDER and available_quantity is N then up to N items can be purchased as preorder
       * If `AvailableStatus` is PREORDER and available_quantity is not defined then unlimited number of items can be purchased as preorder
       * @readonly
       */
      status?: AvailabilityStatus;
      /**
       * Available quantity, when not defined then unlimited number of items can be purchased.
       * @readonly
       */
      quantity?: number | null;
  }
  /** Item availability status. */
  enum AvailabilityStatus {
      UNKNOWN = "UNKNOWN",
      NOT_AVAILABLE = "NOT_AVAILABLE",
      PURCHASE = "PURCHASE",
      /**
       * Whether the variant is available for preorder. InventoryItem will be available only when all below conditions are met:
       * 1. the variant is out of stock
       * 2. preorder is enabled on inventory item level (preorder_setting.enabled is true)
       * 3. preorder limit wasn't reached (preorder_setting.limit)
       */
      PREORDER = "PREORDER"
  }
  interface BulkActionMetadata {
      /** Number of items that were successfully processed. */
      totalSuccesses?: number;
      /** Number of items that couldn't be processed. */
      totalFailures?: number;
      /** Number of failures without details because detailed failure threshold was exceeded. */
      undetailedFailures?: number;
  }
  interface VariantsNotAlignedWithProduct {
      /** Variants not aligned with product */
      variants?: VariantNotAlignedWithProduct[];
  }
  interface VariantNotAlignedWithProduct {
      /** variant id */
      variantId?: string;
      /** what's wrong with this specific variant */
      errorDescription?: string;
  }
  interface VariantBulkErrors {
      /** errors occurred in variants service */
      variantErrors?: ItemMetadata[];
  }
  interface InventoryBulkErrors {
      /** errors occurred in inventory service */
      inventoryErrors?: ItemMetadata[];
  }
  interface UpdateProductRequest {
      /** Product to be updated, may be partial */
      product: ProductComposite;
      /**
       * Explicit list of fields to update in product
       * @internal
       */
      fieldMask?: string[];
      /** Whether to return the variant and inventory entities in the response. Relevant only if variants and inventory were provided in request. Otherwise this parameter will be ignored. Default: false */
      returnEntity?: boolean;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields[];
  }
  interface UpdateProductResponse {
      /** The updated Product */
      product?: Product;
      /** Inventories updated by bulk action. */
      inventoryResults?: BulkInventoryItemResults;
  }
  interface UnsupportedFieldMasks {
      /** Field masks provided in request but not supported */
      fieldMasks?: string[];
  }
  interface BulkCreateProductsRequest {
      products?: ProductComposite[];
      /** Whether to return the full product, variant and inventory entities in the response. Default: false */
      returnEntity?: boolean;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields[];
  }
  interface BulkCreateProductsResponse {
      /** Products created by bulk action. */
      productResults?: BulkProductResults;
      /** Inventories created by bulk action. */
      inventoryResults?: BulkInventoryItemResults;
  }
  interface BulkProductResults {
      /** Products by bulk action. */
      results?: BulkProductResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkProductResult {
      /** Information about successful action or error for failure. */
      itemMetadata?: ItemMetadata;
      /** Product after bulk operation. Optional - returned only if requested with `return_entity` set to `true`. */
      item?: Product;
  }
  interface BulkUpdateProductsRequest {
      products: MaskedProductComposite[];
      /** Whether to return the full product entity in the response. Default: false */
      returnEntity?: boolean;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields[];
  }
  interface MaskedProductComposite {
      /** product to be updated, may be partial. */
      product?: ProductComposite;
      /**
       * Explicit list of fields to update in product
       * @internal
       */
      fieldMask?: string[];
  }
  interface BulkUpdateProductsResponse {
      /** Products updated by bulk action. */
      productResults?: BulkProductResults;
      /** Inventories updated by bulk action. */
      inventoryResults?: BulkInventoryItemResults;
  }
  interface InvalidateCache extends InvalidateCacheGetByOneOf {
      /** Invalidate by msId. NOT recommended, as this will invalidate the entire site cache! */
      metaSiteId?: string;
      /** Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache! */
      siteId?: string;
      /** Invalidate by App */
      app?: App;
      /** Invalidate by page id */
      page?: Page;
      /** Invalidate by URI path */
      uri?: URI;
      /** tell us why you're invalidating the cache. You don't need to add your app name */
      reason?: string | null;
      /** Is local DS */
      localDc?: boolean;
  }
  /** @oneof */
  interface InvalidateCacheGetByOneOf {
      /** Invalidate by msId. NOT recommended, as this will invalidate the entire site cache! */
      metaSiteId?: string;
      /** Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache! */
      siteId?: string;
      /** Invalidate by App */
      app?: App;
      /** Invalidate by page id */
      page?: Page;
      /** Invalidate by URI path */
      uri?: URI;
  }
  interface App {
      /** The AppDefId */
      appDefId?: string;
      /** The instance Id */
      instanceId?: string;
  }
  interface Page {
      /** the msid the page is on */
      metaSiteId?: string;
      /** Invalidate by Page ID */
      pageId?: string;
  }
  interface URI {
      /** the msid the URI is on */
      metaSiteId?: string;
      /** URI path to invalidate (e.g. page/my/path) - without leading/trailing slashes */
      uriPath?: string;
  }
  interface DoNotCallCreateProductRequest {
      /** Product to be created */
      product?: Product;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields[];
  }
  interface DoNotCallCreateProductResponse {
      /** The created Product */
      product?: Product;
  }
  interface VariantAdded {
      variant?: Variant;
  }
  interface GetProductRequest {
      /** Id of the Product to retrieve */
      productId: string;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields[];
      /**
       * Indicates if the read should be done consistent or not. Default is false
       * @internal
       */
      consistent?: boolean | null;
  }
  interface GetProductResponse {
      /** The retrieved Product */
      product?: Product;
  }
  interface GetProductBySlugRequest {
      /** Product slug. A permanent, friendly URL name unique per store. */
      slug: string;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields[];
  }
  interface GetProductBySlugResponse {
      /** The retrieved Product */
      product?: Product;
  }
  interface DoNotCallUpdateProductRequest {
      /** Product to be updated, may be partial */
      product?: Product;
      /**
       * Explicit list of fields to update
       * @internal
       */
      fieldMask?: string[];
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields[];
  }
  interface DoNotCallUpdateProductResponse {
      /** The updated Product */
      product?: Product;
  }
  interface VariantUpdated {
      previous?: Variant;
      current?: Variant;
  }
  interface VariantRemoved {
      variant?: Variant;
  }
  interface DeleteProductRequest {
      /** Id of the Product to delete */
      productId: string;
  }
  interface DeleteProductResponse {
  }
  interface SearchProductsRequest {
      /**
       * WQL expression. Please pay attention that unlike other arrays when you want to filter by `inventory`, `options` or `variants` instead of standard array operators you must use `$matchItems` (for usage see examples).
       * It means that product will be returned only if one or more items satisfy all filters specified in $matchItems.
       * For example, if you have 2 variants: one visible with price 10 and another one not visible with price 20, when inside $matchItems you specify `visible:true` and `price > 15` nothing will be returned because there are no variants which satisfy both conditions.
       * You still can use `$isEmpty` and `$exists` operators for fields listed above.
       * See examples to understand supported capabilities.
       */
      search?: CursorSearch;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields[];
      /** Whether to return products with `visible:false`. Default: false so only visible products will be in response. When true `WIX_STORES.PRODUCT_READ_NOT_VISIBLE` permission required. */
      includeNotVisibleProducts?: boolean;
  }
  interface CursorSearch extends CursorSearchPagingMethodOneOf {
      /** Cursor pointing to page of results. Can't be used together with 'paging'. 'cursor_paging.cursor' can not be used together with 'filter' or 'sort' */
      cursorPaging?: CursorPaging;
      /** A filter object. See documentation [here](https://bo.wix.com/wix-docs/rnd/platformization-guidelines/api-query-language#platformization-guidelines_api-query-language_defining-in-protobuf) */
      filter?: Record<string, any> | null;
      /** Sort object in the form [{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}] */
      sort?: Sorting[];
      /** Aggregations | Faceted search: refers to a way to explore large amounts of data by displaying summaries about various partitions of the data and later allowing to narrow the navigation to a specific partition. */
      aggregations?: Aggregation[];
      /** free text to match in searchable fields */
      search?: SearchDetails;
      /**
       * UTC offset or IANA time zone. Valid values are
       * ISO 8601 UTC offsets, such as +02:00 or -06:00,
       * and IANA time zone IDs, such as Europe/Rome
       *
       * Affects all filters and aggregations returned values.
       * You may override this behavior in a specific filter by providing
       * timestamps including time zone. e.g. `"2023-12-20T10:52:34.795Z"`
       */
      timeZone?: string | null;
  }
  /** @oneof */
  interface CursorSearchPagingMethodOneOf {
      /** Cursor pointing to page of results. Can't be used together with 'paging'. 'cursor_paging.cursor' can not be used together with 'filter' or 'sort' */
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
  interface Aggregation extends AggregationKindOneOf {
      value?: ValueAggregation;
      range?: RangeAggregation;
      scalar?: ScalarAggregation;
      dateHistogram?: DateHistogramAggregation;
      nested?: NestedAggregation;
      name?: string | null;
      type?: AggregationType;
      fieldPath?: string;
      groupBy?: GroupByAggregation;
  }
  /** @oneof */
  interface AggregationKindOneOf {
      value?: ValueAggregation;
      range?: RangeAggregation;
      scalar?: ScalarAggregation;
      dateHistogram?: DateHistogramAggregation;
      nested?: NestedAggregation;
  }
  interface RangeBucket {
      /** Inclusive lower bound of the range. Required if to is not given. */
      from?: number | null;
      /** Exclusive upper bound of the range. Required if from is not given. */
      to?: number | null;
  }
  enum SortType {
      COUNT = "COUNT",
      VALUE = "VALUE"
  }
  enum SortDirection {
      DESC = "DESC",
      ASC = "ASC"
  }
  enum MissingValues {
      EXCLUDE = "EXCLUDE",
      INCLUDE = "INCLUDE"
  }
  interface IncludeMissingValuesOptions {
      /** can specify custom bucket name. Defaults are [string -> "N/A"], [int -> "0"], [bool -> "false"] ... */
      addToBucket?: string;
  }
  enum ScalarType {
      UNKNOWN_SCALAR_TYPE = "UNKNOWN_SCALAR_TYPE",
      COUNT_DISTINCT = "COUNT_DISTINCT",
      MIN = "MIN",
      MAX = "MAX",
      SUM = "SUM",
      AVG = "AVG"
  }
  interface ValueAggregation extends ValueAggregationOptionsOneOf {
      /** options for including missing values */
      includeOptions?: IncludeMissingValuesOptions;
      sortType?: SortType;
      sortDirection?: SortDirection;
      /** How many aggregations would you like to return? Can be between 1 and 250. 10 is the default. */
      limit?: number | null;
      /** should missing values be included or excluded from the aggregation results. Default is EXCLUDE */
      missingValues?: MissingValues;
  }
  /** @oneof */
  interface ValueAggregationOptionsOneOf {
      /** options for including missing values */
      includeOptions?: IncludeMissingValuesOptions;
  }
  enum NestedAggregationType {
      UNKNOWN_AGGREGATION_TYPE = "UNKNOWN_AGGREGATION_TYPE",
      VALUE = "VALUE",
      RANGE = "RANGE",
      SCALAR = "SCALAR",
      DATE_HISTOGRAM = "DATE_HISTOGRAM"
  }
  interface RangeAggregation {
      buckets?: RangeBucket[];
  }
  interface ScalarAggregation {
      type?: ScalarType;
  }
  interface DateHistogramAggregation {
      interval?: Interval;
  }
  enum Interval {
      UNKNOWN_INTERVAL = "UNKNOWN_INTERVAL",
      YEAR = "YEAR",
      MONTH = "MONTH",
      WEEK = "WEEK",
      DAY = "DAY",
      HOUR = "HOUR",
      MINUTE = "MINUTE",
      SECOND = "SECOND"
  }
  interface NestedAggregationItem extends NestedAggregationItemKindOneOf {
      value?: ValueAggregation;
      range?: RangeAggregation;
      scalar?: ScalarAggregation;
      dateHistogram?: DateHistogramAggregation;
      name?: string | null;
      type?: NestedAggregationType;
      fieldPath?: string;
  }
  /** @oneof */
  interface NestedAggregationItemKindOneOf {
      value?: ValueAggregation;
      range?: RangeAggregation;
      scalar?: ScalarAggregation;
      dateHistogram?: DateHistogramAggregation;
  }
  enum AggregationType {
      UNKNOWN_AGGREGATION_TYPE = "UNKNOWN_AGGREGATION_TYPE",
      VALUE = "VALUE",
      RANGE = "RANGE",
      SCALAR = "SCALAR",
      DATE_HISTOGRAM = "DATE_HISTOGRAM",
      NESTED = "NESTED"
  }
  /** nested aggregation expressed through a list of aggregation where each next aggregation is nested within previous one */
  interface NestedAggregation {
      nestedAggregations?: NestedAggregationItem[];
  }
  interface GroupByAggregation extends GroupByAggregationKindOneOf {
      value?: ValueAggregation;
      name?: string | null;
      fieldPath?: string;
  }
  /** @oneof */
  interface GroupByAggregationKindOneOf {
      value?: ValueAggregation;
  }
  interface SearchDetails {
      /** boolean search mode */
      mode?: Mode;
      /** search term or expression */
      expression?: string | null;
      /** fields to search in. if empty - server will search in own default fields */
      fields?: string[];
      /** flag if should use auto fuzzy search (allowing typos by a managed proximity algorithm) */
      fuzzy?: boolean;
  }
  enum Mode {
      /** any */
      OR = "OR",
      /** all */
      AND = "AND"
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
  interface SearchProductsResponse {
      /** Products which satisfy the provided query. */
      products?: Product[];
      /** Paging metadata. Contains cursor which can be used in next query. */
      pagingMetadata?: CursorPagingMetadata;
      /** Aggregation data. */
      aggregationData?: AggregationData;
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
  interface AggregationData {
      /** key = aggregation name (as derived from search request) */
      results?: AggregationResults[];
  }
  interface ValueAggregationResult {
      value?: string;
      count?: number;
  }
  interface RangeAggregationResult {
      from?: number | null;
      to?: number | null;
      count?: number;
  }
  interface NestedAggregationResults extends NestedAggregationResultsResultOneOf {
      values?: ValueResults;
      ranges?: RangeResults;
      scalar?: ScalarResult;
      name?: string;
      type?: AggregationType;
      fieldPath?: string;
  }
  /** @oneof */
  interface NestedAggregationResultsResultOneOf {
      values?: ValueResults;
      ranges?: RangeResults;
      scalar?: ScalarResult;
  }
  interface ValueResults {
      results?: ValueAggregationResult[];
  }
  interface RangeResults {
      results?: RangeAggregationResult[];
  }
  interface ScalarResult {
      type?: ScalarType;
      value?: number;
  }
  interface NestedValueAggregationResult {
      value?: string;
      nestedResults?: NestedAggregationResults;
  }
  interface ValueResult {
      value?: string;
      count?: number | null;
  }
  interface RangeResult {
      from?: number | null;
      to?: number | null;
      count?: number | null;
  }
  interface NestedResultsScalarResult {
      value?: number;
  }
  interface NestedResultValue extends NestedResultValueResultOneOf {
      value?: ValueResult;
      range?: RangeResult;
      scalar?: NestedResultsScalarResult;
      dateHistogram?: ValueResult;
  }
  /** @oneof */
  interface NestedResultValueResultOneOf {
      value?: ValueResult;
      range?: RangeResult;
      scalar?: NestedResultsScalarResult;
      dateHistogram?: ValueResult;
  }
  interface Results {
      results?: Record<string, NestedResultValue>;
  }
  interface DateHistogramResult {
      /** date in ISO 8601 format */
      value?: string;
      /** count of documents in the bucket */
      count?: number;
  }
  interface GroupByValueResults {
      results?: NestedValueAggregationResult[];
  }
  interface DateHistogramResults {
      results?: DateHistogramResult[];
  }
  /**
   * results of `NESTED` aggregation type in a flattened form
   * aggregations in resulting array are keyed by requested aggregation `name`.
   */
  interface NestedResults {
      results?: Results[];
  }
  interface AggregationResults extends AggregationResultsResultOneOf {
      values?: ValueResults;
      ranges?: RangeResults;
      scalar?: ScalarResult;
      groupedByValue?: GroupByValueResults;
      dateHistogram?: DateHistogramResults;
      nested?: NestedResults;
      name?: string;
      type?: AggregationType;
      fieldPath?: string;
  }
  /** @oneof */
  interface AggregationResultsResultOneOf {
      values?: ValueResults;
      ranges?: RangeResults;
      scalar?: ScalarResult;
      groupedByValue?: GroupByValueResults;
      dateHistogram?: DateHistogramResults;
      nested?: NestedResults;
  }
  interface EventuallyConsistentQueryProductsRequest {
      /**
       * WQL expression. Please pay attention that unlike other arrays when you want to filter by `inventory`, `options` or `variants` instead of standard array operators you must use `$matchItems` (for usage see examples).
       * It means that product will be returned only if one or more items satisfy all filters specified in $matchItems.
       * For example, if you have 2 variants: one visible with price 10 and another one not visible with price 20, when inside $matchItems you specify `visible:true` and `price > 15` nothing will be returned because there are no variants which satisfy both conditions.
       * You still can use `$isEmpty` and `$exists` operators for fields listed above.
       * See examples to understand supported capabilities.
       */
      query?: CursorQuery;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields[];
      /** Whether to return products with `visible:false`. Default: false so only visible products will be in response. When true `WIX_STORES.PRODUCT_READ_NOT_VISIBLE` permission required. */
      includeNotVisibleProducts?: boolean;
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
  interface EventuallyConsistentQueryProductsResponse {
      /** Products which satisfy the provided query. */
      products?: Product[];
      /** Paging metadata. Contains cursor which can be used in next query. */
      pagingMetadata?: CursorPagingMetadata;
  }
  interface DeprecatedSearchProductsWithOffsetRequest {
      search?: PlatformOffsetSearch;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields[];
      /** Whether to return products with `visible:false`. Default: false so only visible products will be in response. When true `WIX_STORES.PRODUCT_READ_NOT_VISIBLE` permission required. */
      includeNotVisibleProducts?: boolean;
  }
  interface PlatformOffsetSearch extends PlatformOffsetSearchPagingMethodOneOf {
      /** Pointer to page of results using offset. Can not be used together with 'cursor_paging' */
      paging?: PlatformPaging;
      /** A filter object. See documentation [here](https://bo.wix.com/wix-docs/rnd/platformization-guidelines/api-query-language#platformization-guidelines_api-query-language_defining-in-protobuf) */
      filter?: Record<string, any> | null;
      /** Sort object in the form [{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}] */
      sort?: Sorting[];
      /** Aggregations | Faceted search: refers to a way to explore large amounts of data by displaying summaries about various partitions of the data and later allowing to narrow the navigation to a specific partition. */
      aggregations?: Aggregation[];
      /** free text to match in searchable fields */
      search?: SearchDetails;
  }
  /** @oneof */
  interface PlatformOffsetSearchPagingMethodOneOf {
      /** Pointer to page of results using offset. Can not be used together with 'cursor_paging' */
      paging?: PlatformPaging;
  }
  interface PlatformPaging {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface DeprecatedSearchProductsWithOffsetResponse {
      /** Products which satisfy the provided query. */
      products?: Product[];
      /** Paging metadata. */
      pagingMetadata?: PagingMetadata;
      /** Aggregation data. */
      aggregationData?: AggregationData;
  }
  interface PagingMetadata {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      offset?: number | null;
      /** Total number of items that match the query. */
      total?: number | null;
      /** Flag that indicates the server failed to calculate the `total` field. */
      tooManyToCount?: boolean | null;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       * @internal
       */
      hasNext?: boolean | null;
  }
  interface CountProductsRequest {
      /**
       * A filter object. See documentation [here](https://bo.wix.com/wix-docs/rnd/platformization-guidelines/api-query-language#platformization-guidelines_api-query-language_defining-in-protobuf)
       * To understand supported filters and limitations see `SearchProducts` method.
       */
      filter?: Record<string, any> | null;
      /** free text to match in searchable fields */
      search?: SearchDetails;
      /** Whether to return products with `visible:false`. Default: false so only visible products will be in response. When true `WIX_STORES.PRODUCT_READ_NOT_VISIBLE` permission required. */
      includeNotVisibleProducts?: boolean;
  }
  interface CountProductsResponse {
      count?: number;
  }
  interface DoNotCallBulkCreateProductsRequest {
      /** List of products to be created. */
      products?: Product[];
      /** Whether to return the full product entity in the response. */
      returnEntity?: boolean;
      /** A list of requested fields to be included in the response. Relevant only if `return_entity` true. */
      fields?: RequestedFields[];
  }
  interface DoNotCallBulkCreateProductsResponse {
      /** Products created by bulk action. */
      results?: BulkProductResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface DoNotCallBulkUpdateProductsRequest {
      /** List of products to be updated. */
      products?: MaskedProduct[];
      /** Whether to return the full product entity in the response. */
      returnEntity?: boolean;
      /** A list of requested fields to be included in the response. Relevant only if `return_entity` true. */
      fields?: RequestedFields[];
  }
  interface MaskedProduct {
      /** product to be updated, may be partial. */
      product?: Product;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      fieldMask?: string[];
  }
  interface DoNotCallBulkUpdateProductsResponse {
      /** Products updated by bulk action. */
      results?: BulkProductResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkUpdateProductsByFilterRequest {
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "name": "value1",
       * "categoryIds":{"$in":["categoryId1", "categoryId2"]}
       * }`
       * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
       */
      filter: Record<string, any> | null;
      /** Product with new field values. */
      product: Product;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      fieldMask?: string[];
  }
  interface BulkUpdateProductsByFilterResponse {
      /** Token that can be used to query "AsyncJobService" */
      jobId?: string;
  }
  interface BulkDeleteProductsRequest {
      /** IDs of products to be deleted. */
      productIds: string[];
  }
  interface BulkDeleteProductsResponse {
      /** Products deleted by bulk action. */
      results?: BulkProductResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkDeleteProductsByFilterRequest {
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "name": "value1",
       * "categoryIds":{"$in":["categoryId1", "categoryId2"]}
       * }`
       * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
       */
      filter: Record<string, any> | null;
  }
  interface BulkDeleteProductsByFilterResponse {
      /** Token that can be used to query "AsyncJobService" */
      jobId?: string;
  }
  interface BulkAddInfoSectionsToProductsByFilterRequest {
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "name": "value1",
       * "categoryIds":{"$in":["categoryId1", "categoryId2"]}
       * }`
       * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
       */
      filter: Record<string, any> | null;
      /** Info sections to be added */
      infoSectionIds: string[];
  }
  interface BulkAddInfoSectionsToProductsByFilterResponse {
      /** Token that can be used to query "AsyncJobService" */
      jobId?: string;
  }
  interface BulkAddInfoSectionsToProductsRequest {
      /** IDs of products to be updated. */
      productIds: ProductIdWithRevision[];
      /** Info section to be added */
      infoSectionIds: string[];
      /** Whether to return all updated product entities in the response. Default: false */
      returnEntity?: boolean;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields[];
  }
  interface ProductIdWithRevision {
      /** ID of product. */
      productId?: string;
      /** The revision of the Product */
      revision?: string;
  }
  interface BulkAddInfoSectionsToProductsResponse {
      /** Products updated by bulk action. */
      results?: BulkProductResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkRemoveInfoSectionsFromProductsByFilterRequest {
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "name": "value1",
       * "categoryIds":{"$in":["categoryId1", "categoryId2"]}
       * }`
       * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
       */
      filter: Record<string, any> | null;
      /** Info sections to be removed */
      infoSectionIds: string[];
  }
  interface BulkRemoveInfoSectionsFromProductsByFilterResponse {
      /** Token that can be used to query "AsyncJobService" */
      jobId?: string;
  }
  interface BulkRemoveInfoSectionsFromProductsRequest {
      /** IDs of products to be updated. */
      productIds: ProductIdWithRevision[];
      /** Info section to be removed. */
      infoSectionIds: string[];
      /** Whether to return all updated product entities in the response. Default: false */
      returnEntity?: boolean;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields[];
  }
  interface BulkRemoveInfoSectionsFromProductsResponse {
      /** Products updated by bulk action. */
      results?: BulkProductResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkUpdateVariantsByFilterRequest {
      /** Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains` */
      filter: Record<string, any> | null;
      /** Variant with new field values. */
      variant: Variant;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      fieldMask?: string[];
  }
  interface BulkUpdateVariantsByFilterResponse {
      /** Token that can be used to query "AsyncJobService" */
      jobId?: string;
  }
  interface BulkAdjustVariantsByFilterRequest {
      /** Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains` */
      filter: Record<string, any> | null;
      /** The amount or percentage to change the variants price by */
      basePrice?: AdjustValue;
      /** The amount or percentage to change the variants discounted price by */
      discountedPrice?: AdjustValue;
      /** The amount or percentage to change the variants cost by */
      cost?: AdjustValue;
      /**
       * Set variant discounted price from base price by applying provided discount to it.
       * For example variant base price 100$, variant discounted price 95$, requested `discounted_price_from_base_price.percentage` is 10, then old discounted price ignored and new discounted price set to 90 (100$ - 10%)
       * @internal
       */
      discountedPriceFromBasePrice?: UnsignedAdjustValue;
  }
  interface AdjustValue extends AdjustValueAdjustValueOneOf {
      /** A decimal value to increase or reduce from the original value, can be negative. */
      amount?: string;
      /** The percentage value to increase or reduce from the current value, can be negative. */
      percentage?: number;
  }
  /** @oneof */
  interface AdjustValueAdjustValueOneOf {
      /** A decimal value to increase or reduce from the original value, can be negative. */
      amount?: string;
      /** The percentage value to increase or reduce from the current value, can be negative. */
      percentage?: number;
  }
  interface UnsignedAdjustValue extends UnsignedAdjustValueAdjustValueOneOf {
      /** A decimal value to reduce from the original value. */
      amount?: string;
      /** The percentage value to reduce from the original value. */
      percentage?: number;
  }
  /** @oneof */
  interface UnsignedAdjustValueAdjustValueOneOf {
      /** A decimal value to reduce from the original value. */
      amount?: string;
      /** The percentage value to reduce from the original value. */
      percentage?: number;
  }
  interface BulkAdjustVariantsByFilterResponse {
      /** Token that can be used to query "AsyncJobService" */
      jobId?: string;
  }
  /**
   * Creates a new Product with variants and inventory.
   * If any variant or inventory item creation failed entire request will fail.
   *
   * Permissions: Requires WIX_STORES.PRODUCT_CREATE and WIX_STORES.INVENTORY_CREATE permissions.
   * If together with product you create other entities then you might need also WIX_STORES.BRAND_CREATE, WIX_STORES.RIBBON_CREATE, WIX_STORES.PRODUCT_OPTION_CREATE, WIX_STORES.INFO_SECTION_CREATE, WIX_STORES.MODIFY_SUBSCRIPTION_OPTIONS
   * @param product - Product to be created.
   * At least one variant must be provided and each variant must have relevant item in `choices` field for every item in `options`.
   * In case if `options` is empty one default variant must be provided with empty `choices` list.
   * @internal
   * @documentationMaturity preview
   * @requiredField product
   * @requiredField product.media.items
   * @requiredField product.media.main
   * @requiredField product.name
   * @requiredField product.productType
   * @requiredField product.subscription.subscriptionPlans
   * @requiredField product.subscription.subscriptionPlans.discount
   * @requiredField product.subscription.subscriptionPlans.discount.type
   * @requiredField product.subscription.subscriptionPlans.subscriptionSettings
   * @requiredField product.subscription.subscriptionPlans.subscriptionSettings.frequency
   * @requiredField product.subscription.subscriptionPlans.title
   * @adminMethod
   * @returns The created Product
   */
  function catalogCreateProduct(product: ProductComposite, options?: CatalogCreateProductOptions): Promise<Product>;
  interface CatalogCreateProductOptions {
      /** Whether to return the full product, variant and inventory entities in the response. Default: false */
      returnEntity?: boolean;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields[];
  }
  /**
   * Update a Product, supports partial update.
   * Pass the latest `revision` for a successful update.
   * If you don't need to update product's `options`, variants and inventory you can stop reading.
   *
   * If product options updated and any option in request or in product before request had generateVariants=true then `item.variants` must be provided.
   * If `item.variants` provided they will replace all variants and inventory items for given product.
   * If you want update existing variant make sure to provide `id` with new data. If `id` field isn't provided then new variants with new ID will be created.
   * If you don't want to update variants omit `variants` field.
   * If you don't want to update inventory items for specific variants don't provide inventory items for it. If you provide at least one inventory item it will override all existing inventory items for this variant.
   * If any variant or inventory item update failed then entire request will fail.
   *
   * Permissions: Always requires WIX_STORES.PRODUCT_UPDATE. If you provide variants with inventory in request then you also need  WIX_STORES.INVENTORY_UPDATE permission.
   * If together with product you provide other entities then you might need also WIX_STORES.BRAND_CREATE, WIX_STORES.RIBBON_CREATE, WIX_STORES.PRODUCT_OPTION_CREATE or WIX_STORES.PRODUCT_OPTION_UPDATE, WIX_STORES.INFO_SECTION_CREATE or WIX_STORES.INFO_SECTION_UPDATE, WIX_STORES.MODIFY_SUBSCRIPTION_OPTIONS
   * @param _id - Product ID. Auto-generated on product creation.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField product
   * @requiredField product.media.items
   * @requiredField product.media.main
   * @requiredField product.revision
   * @requiredField product.subscription.subscriptionPlans
   * @requiredField product.subscription.subscriptionPlans.discount
   * @requiredField product.subscription.subscriptionPlans.discount.type
   * @requiredField product.subscription.subscriptionPlans.subscriptionSettings
   * @requiredField product.subscription.subscriptionPlans.subscriptionSettings.frequency
   * @requiredField product.subscription.subscriptionPlans.title
   * @requiredField product.variants.price
   * @requiredField product.variants.price.basePrice
   * @adminMethod
   * @returns The updated Product
   */
  function catalogUpdateProduct(_id: string | null, product: CatalogUpdateProduct, options?: CatalogUpdateProductOptions): Promise<Product>;
  interface CatalogUpdateProduct {
      /** Physical properties, can be provided only when `product_type` is PHYSICAL */
      physicalOptions?: PhysicalProperties;
      /**
       * Product ID. Auto-generated on product creation.
       * @readonly
       */
      _id?: string | null;
      /** Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision */
      revision?: string | null;
      /** Product name. Translatable. */
      name?: string | null;
      /**
       * A permanent, friendly URL name.
       * If not provided, on create generated automatically.
       * When provided, validated and must be unique.
       */
      slug?: string | null;
      /**
       * Optional - Product description which supports rich content.
       * In order to use this field you have to integrate with "Ricos" on frontend side. To learn how to do it visit https://ricos.js.org/.
       * @internal
       */
      description?: RichContent;
      /** Whether the product is visible to site visitors in Online Stores. Default: `true` */
      visible?: boolean | null;
      /** Whether the product is visible in POS (point of sale app). Default: `true` */
      visibleInPos?: boolean | null;
      /** Media items (images, videos etc) associated with this product. */
      media?: Media;
      /** Custom SEO data for the product. */
      seoData?: SeoSchema;
      /**
       * Tax group id
       * @internal
       */
      taxGroupId?: string | null;
      /**
       * Custom text fields allows to collect custom input from UoUs. For example greeting text on birthday cake or text that should be print on T-shirt.
       * Don't get used to it. Will be migrated to other field soon.
       * @internal
       */
      customFields?: CustomText[];
      /** Product options */
      options?: ConnectedOption[];
      /** Product Modifiers */
      modifiers?: ConnectedModifier[];
      /** Optional - Brand. To assign existing brand to product provide `brand.id`. */
      brand?: Brand;
      /** Product info sections. */
      infoSections?: InfoSection[];
      /**
       * Product customizations. Replaces `customFields` from v1 API.
       * @internal
       */
      customizations?: Customization[];
      /** Product ribbon. */
      ribbon?: Ribbon;
      /**
       * Main category id. If product belongs to more than one category main category defines `breadcrumbs` on product page.
       * By default first category from `category_ids` list. Provided value MUST be in `category_ids`
       * Can be empty only in case if product doesn't belong to any category.
       */
      mainCategoryId?: string | null;
      /** Product type. Affects which properties product has. Also defines type of variants which allowed to be associated with this product. Product type must be provided on creation and cannot be changed. */
      productType?: ProductType;
      /**
       * List of related variants.
       * On update product request with variants product options must be provided
       */
      variants?: VariantComposite[];
      subscription?: Subscription;
  }
  interface CatalogUpdateProductOptions {
      /**
       * Explicit list of fields to update in product
       * @internal
       */
      fieldMask?: string[];
      /** Whether to return the variant and inventory entities in the response. Relevant only if variants and inventory were provided in request. Otherwise this parameter will be ignored. Default: false */
      returnEntity?: boolean;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields[];
  }
  /**
   * Creates products in bulk. Support partial success.
   * Limitations. In one request you can pass limited number of entities in total for all products:
   * - options - 100
   * - infoSections - 100
   * - subscriptionOptions - 100
   * - variants - 1000
   * For example, you can create 100 products with up to 10 variants in each (100*10 = 1000) or one product with 1000 variants.
   * Permissions: Requires WIX_STORES.PRODUCT_CREATE permission.
   * If together with product you create other entities then you might need also WIX_STORES.BRAND_CREATE, WIX_STORES.RIBBON_CREATE, WIX_STORES.PRODUCT_OPTION_CREATE, WIX_STORES.INFO_SECTION_CREATE, WIX_STORES.MODIFY_SUBSCRIPTION_OPTIONS
   * @internal
   * @documentationMaturity preview
   * @requiredField options.products.subscription.subscriptionPlans
   * @requiredField options.products.subscription.subscriptionPlans.discount
   * @requiredField options.products.subscription.subscriptionPlans.discount.type
   * @requiredField options.products.subscription.subscriptionPlans.subscriptionSettings
   * @requiredField options.products.subscription.subscriptionPlans.subscriptionSettings.frequency
   * @requiredField options.products.subscription.subscriptionPlans.title
   * @adminMethod
   */
  function catalogBulkCreateProducts(options?: CatalogBulkCreateProductsOptions): Promise<BulkCreateProductsResponse>;
  interface CatalogBulkCreateProductsOptions {
      products?: ProductComposite[];
      /** Whether to return the full product, variant and inventory entities in the response. Default: false */
      returnEntity?: boolean;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields[];
  }
  /**
   * Bulk update up to 100 products. Can return partial success.
   * If you don't need to update product's `options`, variants and inventory you can stop reading.
   *
   * Limitations. In one request you can pass limited number of entities in total for all products:
   * - options - 100
   * - infoSections - 100
   * - subscriptionOptions - 100
   * - variants - 1000
   * For example, you can update 100 products with up to 10 variants in each (100*10 = 1000) or one product with 1000 variants.
   *
   * Permissions: Always requires WIX_STORES.PRODUCT_UPDATE.
   * If together with product you provide other entities then you might need also WIX_STORES.BRAND_CREATE, WIX_STORES.RIBBON_CREATE, WIX_STORES.PRODUCT_OPTION_CREATE or WIX_STORES.PRODUCT_OPTION_UPDATE, WIX_STORES.INFO_SECTION_CREATE, WIX_STORES.MODIFY_SUBSCRIPTION_OPTIONS
   * @internal
   * @documentationMaturity preview
   * @requiredField products
   * @requiredField products.product
   * @requiredField products.product._id
   * @requiredField products.product.media.items
   * @requiredField products.product.media.main
   * @requiredField products.product.revision
   * @requiredField products.product.subscription.subscriptionPlans
   * @requiredField products.product.subscription.subscriptionPlans.discount
   * @requiredField products.product.subscription.subscriptionPlans.discount.type
   * @requiredField products.product.subscription.subscriptionPlans.subscriptionSettings
   * @requiredField products.product.subscription.subscriptionPlans.subscriptionSettings.frequency
   * @requiredField products.product.subscription.subscriptionPlans.title
   * @requiredField products.product.variants.price
   * @requiredField products.product.variants.price.basePrice
   * @adminMethod
   */
  function catalogBulkUpdateProducts(products: MaskedProductComposite[], options?: CatalogBulkUpdateProductsOptions): Promise<BulkUpdateProductsResponse>;
  interface CatalogBulkUpdateProductsOptions {
      /** Whether to return the full product entity in the response. Default: false */
      returnEntity?: boolean;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields[];
  }
  /**
   * Get a Product by id. If product exist but has `visible:false` it will be returned only if caller has additional permission `WIX_STORES.PRODUCT_READ_ADMIN`, otherwise NOT_FOUND error will be thrown.
   * @param productId - Id of the Product to retrieve
   * @internal
   * @documentationMaturity preview
   * @requiredField productId
   * @returns The retrieved Product
   */
  function getProduct(productId: string, options?: GetProductOptions): Promise<Product>;
  interface GetProductOptions {
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields[];
      /**
       * Indicates if the read should be done consistent or not. Default is false
       * @internal
       */
      consistent?: boolean | null;
  }
  /**
   * Retrieves product by slug. If product exist but has `visible:false` it will be returned only if caller has additional permission `WIX_STORES.PRODUCT_READ_NOT_VISIBLE`, otherwise NOT_FOUND error will be thrown.
   * @param slug - Product slug. A permanent, friendly URL name unique per store.
   * @internal
   * @documentationMaturity preview
   * @requiredField slug
   */
  function getProductBySlug(slug: string, options?: GetProductBySlugOptions): Promise<GetProductBySlugResponse>;
  interface GetProductBySlugOptions {
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields[];
  }
  /**
   * Delete a Product and all related variants
   * @param productId - Id of the Product to delete
   * @internal
   * @documentationMaturity preview
   * @requiredField productId
   * @adminMethod
   */
  function deleteProduct(productId: string): Promise<void>;
  /**
   * Search Products using [WQL - Wix Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language)
   * @internal
   * @documentationMaturity preview
   */
  function searchProducts(options?: SearchProductsOptions): Promise<SearchProductsResponse>;
  interface SearchProductsOptions {
      /**
       * WQL expression. Please pay attention that unlike other arrays when you want to filter by `inventory`, `options` or `variants` instead of standard array operators you must use `$matchItems` (for usage see examples).
       * It means that product will be returned only if one or more items satisfy all filters specified in $matchItems.
       * For example, if you have 2 variants: one visible with price 10 and another one not visible with price 20, when inside $matchItems you specify `visible:true` and `price > 15` nothing will be returned because there are no variants which satisfy both conditions.
       * You still can use `$isEmpty` and `$exists` operators for fields listed above.
       * See examples to understand supported capabilities.
       */
      search?: CursorSearch;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields[];
      /** Whether to return products with `visible:false`. Default: false so only visible products will be in response. When true `WIX_STORES.PRODUCT_READ_NOT_VISIBLE` permission required. */
      includeNotVisibleProducts?: boolean;
  }
  /** @internal
   * @documentationMaturity preview
   */
  function eventuallyConsistentQueryProducts(options?: EventuallyConsistentQueryProductsOptions): ProductsQueryBuilder;
  interface EventuallyConsistentQueryProductsOptions {
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields[] | undefined;
      /** Whether to return products with `visible:false`. Default: false so only visible products will be in response. When true `WIX_STORES.PRODUCT_READ_NOT_VISIBLE` permission required. */
      includeNotVisibleProducts?: boolean | undefined;
  }
  interface QueryCursorResult {
      cursors: Cursors;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface ProductsQueryResult extends QueryCursorResult {
      items: Product[];
      query: ProductsQueryBuilder;
      next: () => Promise<ProductsQueryResult>;
      prev: () => Promise<ProductsQueryResult>;
  }
  interface ProductsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: 'physicalOptions.fulfillerId' | 'physicalOptions.shippingWeightRange.minValue' | 'physicalOptions.shippingWeightRange.maxValue' | '_id' | '_createdDate' | '_updatedDate' | 'name' | 'slug' | 'visible' | 'visibleInPos' | 'options.textChoicesSettings.choices.choiceId' | 'options.swatchChoicesSettings.choices.choiceId' | 'options.optionId' | 'brand.id' | 'infoSections.id' | 'infoSections.uniqueName' | 'subscriptionOptions.id' | 'subscriptionOptions.visible' | 'subscriptionOnly' | 'directCategories.id' | 'directCategories.index' | 'allCategories.id' | 'allCategories.index' | 'basePriceRange.minValue.value' | 'basePriceRange.maxValue.value' | 'inventory.locationId' | 'inventory.purchaseAvailabilityStatus' | 'productType' | 'variants.physicalOptions.weight' | 'variants.physicalOptions.sku' | 'variants.physicalOptions.barcode' | 'variants.visible' | 'variants.choices.optionName' | 'variants.choices.choiceName' | 'variants.price.basePrice.value' | 'variants.price.discountedPrice.value' | 'subscription.allowOneTimePurchases', value: any) => ProductsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: 'physicalOptions.fulfillerId' | 'physicalOptions.shippingWeightRange.minValue' | 'physicalOptions.shippingWeightRange.maxValue' | '_id' | '_createdDate' | '_updatedDate' | 'name' | 'slug' | 'visible' | 'visibleInPos' | 'options.textChoicesSettings.choices.choiceId' | 'options.swatchChoicesSettings.choices.choiceId' | 'options.optionId' | 'brand.id' | 'infoSections.id' | 'infoSections.uniqueName' | 'subscriptionOptions.id' | 'subscriptionOptions.visible' | 'subscriptionOnly' | 'directCategories.id' | 'directCategories.index' | 'allCategories.id' | 'allCategories.index' | 'basePriceRange.minValue.value' | 'basePriceRange.maxValue.value' | 'inventory.locationId' | 'inventory.purchaseAvailabilityStatus' | 'productType' | 'variants.physicalOptions.weight' | 'variants.physicalOptions.sku' | 'variants.physicalOptions.barcode' | 'variants.visible' | 'variants.choices.optionName' | 'variants.choices.choiceName' | 'variants.price.basePrice.value' | 'variants.price.discountedPrice.value' | 'subscription.allowOneTimePurchases', value: any) => ProductsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ge: (propertyName: 'physicalOptions.shippingWeightRange.minValue' | 'physicalOptions.shippingWeightRange.maxValue' | '_createdDate' | '_updatedDate' | 'directCategories.index' | 'allCategories.index' | 'variants.physicalOptions.weight', value: any) => ProductsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      gt: (propertyName: 'physicalOptions.shippingWeightRange.minValue' | 'physicalOptions.shippingWeightRange.maxValue' | '_createdDate' | '_updatedDate' | 'directCategories.index' | 'allCategories.index' | 'variants.physicalOptions.weight', value: any) => ProductsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      le: (propertyName: 'physicalOptions.shippingWeightRange.minValue' | 'physicalOptions.shippingWeightRange.maxValue' | '_createdDate' | '_updatedDate' | 'directCategories.index' | 'allCategories.index' | 'variants.physicalOptions.weight', value: any) => ProductsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      lt: (propertyName: 'physicalOptions.shippingWeightRange.minValue' | 'physicalOptions.shippingWeightRange.maxValue' | '_createdDate' | '_updatedDate' | 'directCategories.index' | 'allCategories.index' | 'variants.physicalOptions.weight', value: any) => ProductsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       * @documentationMaturity preview
       */
      startsWith: (propertyName: 'physicalOptions.fulfillerId' | '_id' | 'name' | 'slug' | 'options.textChoicesSettings.choices.choiceId' | 'options.swatchChoicesSettings.choices.choiceId' | 'options.optionId' | 'brand.id' | 'infoSections.id' | 'infoSections.uniqueName' | 'subscriptionOptions.id' | 'directCategories.id' | 'allCategories.id' | 'basePriceRange.minValue.value' | 'basePriceRange.maxValue.value' | 'inventory.locationId' | 'variants.physicalOptions.sku' | 'variants.physicalOptions.barcode' | 'variants.choices.optionName' | 'variants.choices.choiceName' | 'variants.price.basePrice.value' | 'variants.price.discountedPrice.value', value: string) => ProductsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       * @documentationMaturity preview
       */
      hasSome: (propertyName: 'physicalOptions.fulfillerId' | 'physicalOptions.shippingWeightRange.minValue' | 'physicalOptions.shippingWeightRange.maxValue' | '_id' | '_createdDate' | '_updatedDate' | 'name' | 'slug' | 'visible' | 'visibleInPos' | 'options.textChoicesSettings.choices.choiceId' | 'options.swatchChoicesSettings.choices.choiceId' | 'options.optionId' | 'brand.id' | 'infoSections.id' | 'infoSections.uniqueName' | 'subscriptionOptions.id' | 'subscriptionOptions.visible' | 'subscriptionOnly' | 'directCategories.id' | 'directCategories.index' | 'allCategories.id' | 'allCategories.index' | 'basePriceRange.minValue.value' | 'basePriceRange.maxValue.value' | 'inventory.locationId' | 'inventory.purchaseAvailabilityStatus' | 'productType' | 'variants.physicalOptions.weight' | 'variants.physicalOptions.sku' | 'variants.physicalOptions.barcode' | 'variants.visible' | 'variants.choices.optionName' | 'variants.choices.choiceName' | 'variants.price.basePrice.value' | 'variants.price.discountedPrice.value' | 'subscription.allowOneTimePurchases', value: any[]) => ProductsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: 'physicalOptions.fulfillerId' | 'physicalOptions.shippingWeightRange.minValue' | 'physicalOptions.shippingWeightRange.maxValue' | '_id' | '_createdDate' | '_updatedDate' | 'name' | 'slug' | 'visible' | 'visibleInPos' | 'options.textChoicesSettings.choices.choiceId' | 'options.swatchChoicesSettings.choices.choiceId' | 'options.optionId' | 'brand.id' | 'infoSections.id' | 'infoSections.uniqueName' | 'subscriptionOptions.id' | 'subscriptionOptions.visible' | 'subscriptionOnly' | 'directCategories.id' | 'directCategories.index' | 'allCategories.id' | 'allCategories.index' | 'basePriceRange.minValue.value' | 'basePriceRange.maxValue.value' | 'inventory.locationId' | 'inventory.purchaseAvailabilityStatus' | 'productType' | 'variants.physicalOptions.weight' | 'variants.physicalOptions.sku' | 'variants.physicalOptions.barcode' | 'variants.visible' | 'variants.choices.optionName' | 'variants.choices.choiceName' | 'variants.price.basePrice.value' | 'variants.price.discountedPrice.value' | 'subscription.allowOneTimePurchases', value: any) => ProductsQueryBuilder;
      /** @documentationMaturity preview */
      exists: (propertyName: 'physicalOptions.fulfillerId' | 'physicalOptions.shippingWeightRange.minValue' | 'physicalOptions.shippingWeightRange.maxValue' | '_id' | '_createdDate' | '_updatedDate' | 'name' | 'slug' | 'visible' | 'visibleInPos' | 'options.textChoicesSettings.choices.choiceId' | 'options.swatchChoicesSettings.choices.choiceId' | 'options.optionId' | 'brand.id' | 'infoSections.id' | 'infoSections.uniqueName' | 'subscriptionOptions.id' | 'subscriptionOptions.visible' | 'subscriptionOnly' | 'directCategories.id' | 'directCategories.index' | 'allCategories.id' | 'allCategories.index' | 'basePriceRange.minValue.value' | 'basePriceRange.maxValue.value' | 'inventory.locationId' | 'inventory.purchaseAvailabilityStatus' | 'productType' | 'variants.physicalOptions.weight' | 'variants.physicalOptions.sku' | 'variants.physicalOptions.barcode' | 'variants.visible' | 'variants.choices.optionName' | 'variants.choices.choiceName' | 'variants.price.basePrice.value' | 'variants.price.discountedPrice.value' | 'subscription.allowOneTimePurchases', value: boolean) => ProductsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'physicalOptions.shippingWeightRange.minValue' | 'physicalOptions.shippingWeightRange.maxValue' | '_createdDate' | '_updatedDate' | 'name' | 'directCategories.index' | 'allCategories.index' | 'basePriceRange.minValue.value' | 'basePriceRange.maxValue.value'>) => ProductsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'physicalOptions.shippingWeightRange.minValue' | 'physicalOptions.shippingWeightRange.maxValue' | '_createdDate' | '_updatedDate' | 'name' | 'directCategories.index' | 'allCategories.index' | 'basePriceRange.minValue.value' | 'basePriceRange.maxValue.value'>) => ProductsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => ProductsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => ProductsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<ProductsQueryResult>;
  }
  /**
   * Returns total count of products satisfying filter and/or search
   * @internal
   * @documentationMaturity preview
   */
  function countProducts(options?: CountProductsOptions): Promise<CountProductsResponse>;
  interface CountProductsOptions {
      /**
       * A filter object. See documentation [here](https://bo.wix.com/wix-docs/rnd/platformization-guidelines/api-query-language#platformization-guidelines_api-query-language_defining-in-protobuf)
       * To understand supported filters and limitations see `SearchProducts` method.
       */
      filter?: Record<string, any> | null;
      /** free text to match in searchable fields */
      search?: SearchDetails;
      /** Whether to return products with `visible:false`. Default: false so only visible products will be in response. When true `WIX_STORES.PRODUCT_READ_NOT_VISIBLE` permission required. */
      includeNotVisibleProducts?: boolean;
  }
  /**
   * Bulk update products by filter.
   * Async method with returns job_id which can be used to retrieve update results.
   * Can be partially successful.
   * Doesn't require revision and don't use optimistic locking.
   * @param filter - Filter object in the following format:
   * `"filter" : {
   * "name": "value1",
   * "categoryIds":{"$in":["categoryId1", "categoryId2"]}
   * }`
   * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
   * @internal
   * @documentationMaturity preview
   * @requiredField filter
   * @requiredField options.product
   * @requiredField options.product.physicalOptions.pricePerUnit.measurementUnit
   * @requiredField options.product.subscription.subscriptionPlans
   * @requiredField options.product.subscription.subscriptionPlans.discount
   * @requiredField options.product.subscription.subscriptionPlans.discount.type
   * @requiredField options.product.subscription.subscriptionPlans.subscriptionSettings
   * @requiredField options.product.subscription.subscriptionPlans.subscriptionSettings.frequency
   * @requiredField options.product.subscription.subscriptionPlans.title
   * @requiredField options.product.variants.physicalOptions.pricePerUnit.settings.measurementUnit
   * @requiredField options.product.variants.price
   * @requiredField options.product.variants.price.basePrice
   * @adminMethod
   */
  function bulkUpdateProductsByFilter(filter: Record<string, any> | null, options?: BulkUpdateProductsByFilterOptions): Promise<BulkUpdateProductsByFilterResponse>;
  interface BulkUpdateProductsByFilterOptions {
      /** Product with new field values. */
      product: Product;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      fieldMask?: string[];
  }
  /**
   * Deletes up to 100 products with variants.
   * @param productIds - IDs of products to be deleted.
   * @internal
   * @documentationMaturity preview
   * @requiredField productIds
   * @adminMethod
   */
  function bulkDeleteProducts(productIds: string[]): Promise<BulkDeleteProductsResponse>;
  /**
   * Delete multiple products which satisfy the provided filter.
   * Async method with returns job_id which can be used to retrieve results.
   * @param filter - Filter object in the following format:
   * `"filter" : {
   * "name": "value1",
   * "categoryIds":{"$in":["categoryId1", "categoryId2"]}
   * }`
   * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
   * @internal
   * @documentationMaturity preview
   * @requiredField filter
   * @adminMethod
   */
  function bulkDeleteProductsByFilter(filter: Record<string, any> | null): Promise<BulkDeleteProductsByFilterResponse>;
  /**
   * Adds info sections to the end of info sections list of multiple products which satisfy filter.
   * Can be partially successful.
   * Async method, returns job_id which can be used to retrieve results.
   * @param filter - Filter object in the following format:
   * `"filter" : {
   * "name": "value1",
   * "categoryIds":{"$in":["categoryId1", "categoryId2"]}
   * }`
   * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
   * @internal
   * @documentationMaturity preview
   * @requiredField filter
   * @requiredField options
   * @requiredField options.infoSectionIds
   * @adminMethod
   */
  function bulkAddInfoSectionsToProductsByFilter(filter: Record<string, any> | null, options: BulkAddInfoSectionsToProductsByFilterOptions): Promise<BulkAddInfoSectionsToProductsByFilterResponse>;
  interface BulkAddInfoSectionsToProductsByFilterOptions {
      /** Info sections to be added */
      infoSectionIds: string[];
  }
  /**
   * Adds info sections to the end of info sections list of multiple products.
   * Can be partially successful.
   * @param productIds - IDs of products to be updated.
   * @internal
   * @documentationMaturity preview
   * @requiredField options.infoSectionIds
   * @requiredField productIds
   * @adminMethod
   */
  function bulkAddInfoSectionsToProducts(productIds: ProductIdWithRevision[], options?: BulkAddInfoSectionsToProductsOptions): Promise<BulkAddInfoSectionsToProductsResponse>;
  interface BulkAddInfoSectionsToProductsOptions {
      /** Info section to be added */
      infoSectionIds: string[];
      /** Whether to return all updated product entities in the response. Default: false */
      returnEntity?: boolean;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields[];
  }
  /**
   * Removes info sections from info sections list of multiple products which satisfy filter.
   * Can be partially successful.
   * Async method, returns job_id which can be used to retrieve results.
   * @param filter - Filter object in the following format:
   * `"filter" : {
   * "name": "value1",
   * "categoryIds":{"$in":["categoryId1", "categoryId2"]}
   * }`
   * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
   * @internal
   * @documentationMaturity preview
   * @requiredField filter
   * @requiredField options
   * @requiredField options.infoSectionIds
   * @adminMethod
   */
  function bulkRemoveInfoSectionsFromProductsByFilter(filter: Record<string, any> | null, options: BulkRemoveInfoSectionsFromProductsByFilterOptions): Promise<BulkRemoveInfoSectionsFromProductsByFilterResponse>;
  interface BulkRemoveInfoSectionsFromProductsByFilterOptions {
      /** Info sections to be removed */
      infoSectionIds: string[];
  }
  /**
   * Removes info sections from info sections list of multiple products.
   * Can be partially successful.
   * @param productIds - IDs of products to be updated.
   * @internal
   * @documentationMaturity preview
   * @requiredField options.infoSectionIds
   * @requiredField productIds
   * @adminMethod
   */
  function bulkRemoveInfoSectionsFromProducts(productIds: ProductIdWithRevision[], options?: BulkRemoveInfoSectionsFromProductsOptions): Promise<BulkRemoveInfoSectionsFromProductsResponse>;
  interface BulkRemoveInfoSectionsFromProductsOptions {
      /** Info section to be removed. */
      infoSectionIds: string[];
      /** Whether to return all updated product entities in the response. Default: false */
      returnEntity?: boolean;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields[];
  }
  /**
   * Update multiple variants which satisfy the provided product filter and meet the following conditions:
   * + `typed_properties` of variants must correlate with `product_type`.
   * + `typed_properties.price_per_unit.measurement_unit` of product and variant must be aligned.
   * Async method that returns job_id which can be used to retrieve update results.
   * Can be partially successful.
   * Doesn't require revision and don't use optimistic locking.
   * @param filter - Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
   * @internal
   * @documentationMaturity preview
   * @requiredField filter
   * @requiredField options.variant
   * @adminMethod
   */
  function bulkUpdateVariantsByFilter(filter: Record<string, any> | null, options?: BulkUpdateVariantsByFilterOptions): Promise<BulkUpdateVariantsByFilterResponse>;
  interface BulkUpdateVariantsByFilterOptions {
      /** Variant with new field values. */
      variant: Variant;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      fieldMask?: string[];
  }
  /**
   * Adjust the price, cost and weight of multiple variants, which satisfy the provided product filter.
   * Allowed actions: Increase/reduce price, discounted price, cost of goods and weight by amount or by percentage,
   * To set a exact new value for multiple variants, use BulkUpdateVariantsByFilter.
   * @param filter - Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
   * @internal
   * @documentationMaturity preview
   * @requiredField filter
   * @adminMethod
   */
  function bulkAdjustVariantsByFilter(filter: Record<string, any> | null, options?: BulkAdjustVariantsByFilterOptions): Promise<BulkAdjustVariantsByFilterResponse>;
  interface BulkAdjustVariantsByFilterOptions {
      /** The amount or percentage to change the variants price by */
      basePrice?: AdjustValue;
      /** The amount or percentage to change the variants discounted price by */
      discountedPrice?: AdjustValue;
      /** The amount or percentage to change the variants cost by */
      cost?: AdjustValue;
      /**
       * Set variant discounted price from base price by applying provided discount to it.
       * For example variant base price 100$, variant discounted price 95$, requested `discounted_price_from_base_price.percentage` is 10, then old discounted price ignored and new discounted price set to 90 (100$ - 10%)
       * @internal
       */
      discountedPriceFromBasePrice?: UnsignedAdjustValue;
  }
  
  const storesCatalogV3Product_universal_d___debug: typeof __debug;
  type storesCatalogV3Product_universal_d_Product = Product;
  type storesCatalogV3Product_universal_d_ProductTypedPropertiesOneOf = ProductTypedPropertiesOneOf;
  type storesCatalogV3Product_universal_d_RichContent = RichContent;
  type storesCatalogV3Product_universal_d_Node = Node;
  type storesCatalogV3Product_universal_d_NodeDataOneOf = NodeDataOneOf;
  type storesCatalogV3Product_universal_d_NodeType = NodeType;
  const storesCatalogV3Product_universal_d_NodeType: typeof NodeType;
  type storesCatalogV3Product_universal_d_NodeStyle = NodeStyle;
  type storesCatalogV3Product_universal_d_ButtonData = ButtonData;
  type storesCatalogV3Product_universal_d_Border = Border;
  type storesCatalogV3Product_universal_d_Colors = Colors;
  type storesCatalogV3Product_universal_d_PluginContainerData = PluginContainerData;
  type storesCatalogV3Product_universal_d_WidthType = WidthType;
  const storesCatalogV3Product_universal_d_WidthType: typeof WidthType;
  type storesCatalogV3Product_universal_d_PluginContainerDataWidth = PluginContainerDataWidth;
  type storesCatalogV3Product_universal_d_PluginContainerDataWidthDataOneOf = PluginContainerDataWidthDataOneOf;
  type storesCatalogV3Product_universal_d_PluginContainerDataAlignment = PluginContainerDataAlignment;
  const storesCatalogV3Product_universal_d_PluginContainerDataAlignment: typeof PluginContainerDataAlignment;
  type storesCatalogV3Product_universal_d_Spoiler = Spoiler;
  type storesCatalogV3Product_universal_d_Height = Height;
  type storesCatalogV3Product_universal_d_Type = Type;
  const storesCatalogV3Product_universal_d_Type: typeof Type;
  type storesCatalogV3Product_universal_d_Styles = Styles;
  type storesCatalogV3Product_universal_d_Link = Link;
  type storesCatalogV3Product_universal_d_LinkDataOneOf = LinkDataOneOf;
  type storesCatalogV3Product_universal_d_Target = Target;
  const storesCatalogV3Product_universal_d_Target: typeof Target;
  type storesCatalogV3Product_universal_d_Rel = Rel;
  type storesCatalogV3Product_universal_d_CodeBlockData = CodeBlockData;
  type storesCatalogV3Product_universal_d_TextStyle = TextStyle;
  type storesCatalogV3Product_universal_d_TextAlignment = TextAlignment;
  const storesCatalogV3Product_universal_d_TextAlignment: typeof TextAlignment;
  type storesCatalogV3Product_universal_d_DividerData = DividerData;
  type storesCatalogV3Product_universal_d_LineStyle = LineStyle;
  const storesCatalogV3Product_universal_d_LineStyle: typeof LineStyle;
  type storesCatalogV3Product_universal_d_Width = Width;
  const storesCatalogV3Product_universal_d_Width: typeof Width;
  type storesCatalogV3Product_universal_d_Alignment = Alignment;
  const storesCatalogV3Product_universal_d_Alignment: typeof Alignment;
  type storesCatalogV3Product_universal_d_FileData = FileData;
  type storesCatalogV3Product_universal_d_ViewMode = ViewMode;
  const storesCatalogV3Product_universal_d_ViewMode: typeof ViewMode;
  type storesCatalogV3Product_universal_d_FileSource = FileSource;
  type storesCatalogV3Product_universal_d_FileSourceDataOneOf = FileSourceDataOneOf;
  type storesCatalogV3Product_universal_d_PDFSettings = PDFSettings;
  type storesCatalogV3Product_universal_d_GalleryData = GalleryData;
  type storesCatalogV3Product_universal_d_V1Media = V1Media;
  type storesCatalogV3Product_universal_d_Image = Image;
  type storesCatalogV3Product_universal_d_Video = Video;
  type storesCatalogV3Product_universal_d_Item = Item;
  type storesCatalogV3Product_universal_d_ItemDataOneOf = ItemDataOneOf;
  type storesCatalogV3Product_universal_d_GalleryOptions = GalleryOptions;
  type storesCatalogV3Product_universal_d_LayoutType = LayoutType;
  const storesCatalogV3Product_universal_d_LayoutType: typeof LayoutType;
  type storesCatalogV3Product_universal_d_Orientation = Orientation;
  const storesCatalogV3Product_universal_d_Orientation: typeof Orientation;
  type storesCatalogV3Product_universal_d_Crop = Crop;
  const storesCatalogV3Product_universal_d_Crop: typeof Crop;
  type storesCatalogV3Product_universal_d_ThumbnailsAlignment = ThumbnailsAlignment;
  const storesCatalogV3Product_universal_d_ThumbnailsAlignment: typeof ThumbnailsAlignment;
  type storesCatalogV3Product_universal_d_Layout = Layout;
  type storesCatalogV3Product_universal_d_ItemStyle = ItemStyle;
  type storesCatalogV3Product_universal_d_Thumbnails = Thumbnails;
  type storesCatalogV3Product_universal_d_GIFData = GIFData;
  type storesCatalogV3Product_universal_d_GIF = GIF;
  type storesCatalogV3Product_universal_d_HeadingData = HeadingData;
  type storesCatalogV3Product_universal_d_HTMLData = HTMLData;
  type storesCatalogV3Product_universal_d_HTMLDataDataOneOf = HTMLDataDataOneOf;
  type storesCatalogV3Product_universal_d_Source = Source;
  const storesCatalogV3Product_universal_d_Source: typeof Source;
  type storesCatalogV3Product_universal_d_ImageData = ImageData;
  type storesCatalogV3Product_universal_d_LinkPreviewData = LinkPreviewData;
  type storesCatalogV3Product_universal_d_MapData = MapData;
  type storesCatalogV3Product_universal_d_MapSettings = MapSettings;
  type storesCatalogV3Product_universal_d_MapType = MapType;
  const storesCatalogV3Product_universal_d_MapType: typeof MapType;
  type storesCatalogV3Product_universal_d_ParagraphData = ParagraphData;
  type storesCatalogV3Product_universal_d_PollData = PollData;
  type storesCatalogV3Product_universal_d_ViewRole = ViewRole;
  const storesCatalogV3Product_universal_d_ViewRole: typeof ViewRole;
  type storesCatalogV3Product_universal_d_VoteRole = VoteRole;
  const storesCatalogV3Product_universal_d_VoteRole: typeof VoteRole;
  type storesCatalogV3Product_universal_d_Permissions = Permissions;
  type storesCatalogV3Product_universal_d_Option = Option;
  type storesCatalogV3Product_universal_d_PollSettings = PollSettings;
  type storesCatalogV3Product_universal_d_PollLayoutType = PollLayoutType;
  const storesCatalogV3Product_universal_d_PollLayoutType: typeof PollLayoutType;
  type storesCatalogV3Product_universal_d_PollLayoutDirection = PollLayoutDirection;
  const storesCatalogV3Product_universal_d_PollLayoutDirection: typeof PollLayoutDirection;
  type storesCatalogV3Product_universal_d_PollLayout = PollLayout;
  type storesCatalogV3Product_universal_d_OptionLayout = OptionLayout;
  type storesCatalogV3Product_universal_d_BackgroundType = BackgroundType;
  const storesCatalogV3Product_universal_d_BackgroundType: typeof BackgroundType;
  type storesCatalogV3Product_universal_d_Gradient = Gradient;
  type storesCatalogV3Product_universal_d_Background = Background;
  type storesCatalogV3Product_universal_d_BackgroundBackgroundOneOf = BackgroundBackgroundOneOf;
  type storesCatalogV3Product_universal_d_PollDesign = PollDesign;
  type storesCatalogV3Product_universal_d_OptionDesign = OptionDesign;
  type storesCatalogV3Product_universal_d_Poll = Poll;
  type storesCatalogV3Product_universal_d_PollDataLayout = PollDataLayout;
  type storesCatalogV3Product_universal_d_Design = Design;
  type storesCatalogV3Product_universal_d_TextData = TextData;
  type storesCatalogV3Product_universal_d_Decoration = Decoration;
  type storesCatalogV3Product_universal_d_DecorationDataOneOf = DecorationDataOneOf;
  type storesCatalogV3Product_universal_d_DecorationType = DecorationType;
  const storesCatalogV3Product_universal_d_DecorationType: typeof DecorationType;
  type storesCatalogV3Product_universal_d_AnchorData = AnchorData;
  type storesCatalogV3Product_universal_d_ColorData = ColorData;
  type storesCatalogV3Product_universal_d_LinkData = LinkData;
  type storesCatalogV3Product_universal_d_MentionData = MentionData;
  type storesCatalogV3Product_universal_d_FontSizeData = FontSizeData;
  type storesCatalogV3Product_universal_d_FontType = FontType;
  const storesCatalogV3Product_universal_d_FontType: typeof FontType;
  type storesCatalogV3Product_universal_d_AppEmbedData = AppEmbedData;
  type storesCatalogV3Product_universal_d_AppEmbedDataAppDataOneOf = AppEmbedDataAppDataOneOf;
  type storesCatalogV3Product_universal_d_AppType = AppType;
  const storesCatalogV3Product_universal_d_AppType: typeof AppType;
  type storesCatalogV3Product_universal_d_BookingData = BookingData;
  type storesCatalogV3Product_universal_d_EventData = EventData;
  type storesCatalogV3Product_universal_d_VideoData = VideoData;
  type storesCatalogV3Product_universal_d_PlaybackOptions = PlaybackOptions;
  type storesCatalogV3Product_universal_d_EmbedData = EmbedData;
  type storesCatalogV3Product_universal_d_Oembed = Oembed;
  type storesCatalogV3Product_universal_d_CollapsibleListData = CollapsibleListData;
  type storesCatalogV3Product_universal_d_InitialExpandedItems = InitialExpandedItems;
  const storesCatalogV3Product_universal_d_InitialExpandedItems: typeof InitialExpandedItems;
  type storesCatalogV3Product_universal_d_Direction = Direction;
  const storesCatalogV3Product_universal_d_Direction: typeof Direction;
  type storesCatalogV3Product_universal_d_TableData = TableData;
  type storesCatalogV3Product_universal_d_Dimensions = Dimensions;
  type storesCatalogV3Product_universal_d_TableCellData = TableCellData;
  type storesCatalogV3Product_universal_d_VerticalAlignment = VerticalAlignment;
  const storesCatalogV3Product_universal_d_VerticalAlignment: typeof VerticalAlignment;
  type storesCatalogV3Product_universal_d_CellStyle = CellStyle;
  type storesCatalogV3Product_universal_d_BorderColors = BorderColors;
  type storesCatalogV3Product_universal_d_NullValue = NullValue;
  const storesCatalogV3Product_universal_d_NullValue: typeof NullValue;
  type storesCatalogV3Product_universal_d_ListValue = ListValue;
  type storesCatalogV3Product_universal_d_AudioData = AudioData;
  type storesCatalogV3Product_universal_d_OrderedListData = OrderedListData;
  type storesCatalogV3Product_universal_d_BulletedListData = BulletedListData;
  type storesCatalogV3Product_universal_d_BlockquoteData = BlockquoteData;
  type storesCatalogV3Product_universal_d_Metadata = Metadata;
  type storesCatalogV3Product_universal_d_DocumentStyle = DocumentStyle;
  type storesCatalogV3Product_universal_d_TextNodeStyle = TextNodeStyle;
  type storesCatalogV3Product_universal_d_Media = Media;
  type storesCatalogV3Product_universal_d_ProductMedia = ProductMedia;
  type storesCatalogV3Product_universal_d_ProductMediaSetByOneOf = ProductMediaSetByOneOf;
  type storesCatalogV3Product_universal_d_ProductMediaMediaOneOf = ProductMediaMediaOneOf;
  type storesCatalogV3Product_universal_d_VideoResolution = VideoResolution;
  type storesCatalogV3Product_universal_d_SeoSchema = SeoSchema;
  type storesCatalogV3Product_universal_d_Keyword = Keyword;
  type storesCatalogV3Product_universal_d_Tag = Tag;
  type storesCatalogV3Product_universal_d_Settings = Settings;
  type storesCatalogV3Product_universal_d_CustomText = CustomText;
  type storesCatalogV3Product_universal_d_ConnectedOption = ConnectedOption;
  type storesCatalogV3Product_universal_d_ConnectedOptionOptionSettingsOneOf = ConnectedOptionOptionSettingsOneOf;
  type storesCatalogV3Product_universal_d_OptionSettingsType = OptionSettingsType;
  const storesCatalogV3Product_universal_d_OptionSettingsType: typeof OptionSettingsType;
  type storesCatalogV3Product_universal_d_TextChoicesSettings = TextChoicesSettings;
  type storesCatalogV3Product_universal_d_ConnectedChoice = ConnectedChoice;
  type storesCatalogV3Product_universal_d_ConnectedChoiceValueOneOf = ConnectedChoiceValueOneOf;
  type storesCatalogV3Product_universal_d_ChoiceType = ChoiceType;
  const storesCatalogV3Product_universal_d_ChoiceType: typeof ChoiceType;
  type storesCatalogV3Product_universal_d_MultipleColors = MultipleColors;
  type storesCatalogV3Product_universal_d_SwatchChoicesSettings = SwatchChoicesSettings;
  type storesCatalogV3Product_universal_d_ConnectedModifier = ConnectedModifier;
  type storesCatalogV3Product_universal_d_ConnectedModifierOptionSettingsOneOf = ConnectedModifierOptionSettingsOneOf;
  type storesCatalogV3Product_universal_d_FreeTextSettings = FreeTextSettings;
  type storesCatalogV3Product_universal_d_Brand = Brand;
  type storesCatalogV3Product_universal_d_InfoSection = InfoSection;
  type storesCatalogV3Product_universal_d_SubscriptionOptionInfo = SubscriptionOptionInfo;
  type storesCatalogV3Product_universal_d_SubscriptionSettings = SubscriptionSettings;
  type storesCatalogV3Product_universal_d_SubscriptionFrequency = SubscriptionFrequency;
  const storesCatalogV3Product_universal_d_SubscriptionFrequency: typeof SubscriptionFrequency;
  type storesCatalogV3Product_universal_d_Discount = Discount;
  type storesCatalogV3Product_universal_d_DiscountType = DiscountType;
  const storesCatalogV3Product_universal_d_DiscountType: typeof DiscountType;
  type storesCatalogV3Product_universal_d_Customization = Customization;
  type storesCatalogV3Product_universal_d_CustomizationValueOneOf = CustomizationValueOneOf;
  type storesCatalogV3Product_universal_d_CustomizationType = CustomizationType;
  const storesCatalogV3Product_universal_d_CustomizationType: typeof CustomizationType;
  type storesCatalogV3Product_universal_d_TextInputValue = TextInputValue;
  type storesCatalogV3Product_universal_d_Ribbon = Ribbon;
  type storesCatalogV3Product_universal_d_ProductCategory = ProductCategory;
  type storesCatalogV3Product_universal_d_BreadCrumb = BreadCrumb;
  type storesCatalogV3Product_universal_d_PriceRange = PriceRange;
  type storesCatalogV3Product_universal_d_FixedMonetaryAmount = FixedMonetaryAmount;
  type storesCatalogV3Product_universal_d_Inventory = Inventory;
  type storesCatalogV3Product_universal_d_PurchaseAvailabilityStatus = PurchaseAvailabilityStatus;
  const storesCatalogV3Product_universal_d_PurchaseAvailabilityStatus: typeof PurchaseAvailabilityStatus;
  type storesCatalogV3Product_universal_d_PreorderStatus = PreorderStatus;
  const storesCatalogV3Product_universal_d_PreorderStatus: typeof PreorderStatus;
  type storesCatalogV3Product_universal_d_ProductType = ProductType;
  const storesCatalogV3Product_universal_d_ProductType: typeof ProductType;
  type storesCatalogV3Product_universal_d_PhysicalProperties = PhysicalProperties;
  type storesCatalogV3Product_universal_d_PricePerUnitSettings = PricePerUnitSettings;
  type storesCatalogV3Product_universal_d_MeasurementUnit = MeasurementUnit;
  const storesCatalogV3Product_universal_d_MeasurementUnit: typeof MeasurementUnit;
  type storesCatalogV3Product_universal_d_WeightRange = WeightRange;
  type storesCatalogV3Product_universal_d_Variant = Variant;
  type storesCatalogV3Product_universal_d_VariantTypedPropertiesOneOf = VariantTypedPropertiesOneOf;
  type storesCatalogV3Product_universal_d_OptionChoice = OptionChoice;
  type storesCatalogV3Product_universal_d_PriceInfo = PriceInfo;
  type storesCatalogV3Product_universal_d_RevenueDetails = RevenueDetails;
  type storesCatalogV3Product_universal_d_VariantPhysicalProperties = VariantPhysicalProperties;
  type storesCatalogV3Product_universal_d_PricePerUnit = PricePerUnit;
  type storesCatalogV3Product_universal_d_VariantDigitalProperties = VariantDigitalProperties;
  type storesCatalogV3Product_universal_d_SecuredMedia = SecuredMedia;
  type storesCatalogV3Product_universal_d_FileType = FileType;
  const storesCatalogV3Product_universal_d_FileType: typeof FileType;
  type storesCatalogV3Product_universal_d_SubscriptionPlanPrice = SubscriptionPlanPrice;
  type storesCatalogV3Product_universal_d_ExtendedFields = ExtendedFields;
  type storesCatalogV3Product_universal_d_Subscription = Subscription;
  type storesCatalogV3Product_universal_d_SubscriptionPlan = SubscriptionPlan;
  type storesCatalogV3Product_universal_d_V3SubscriptionSettings = V3SubscriptionSettings;
  type storesCatalogV3Product_universal_d_V3SubscriptionSettingsCyclesOneOf = V3SubscriptionSettingsCyclesOneOf;
  type storesCatalogV3Product_universal_d_SubscriptionPlanDiscount = SubscriptionPlanDiscount;
  type storesCatalogV3Product_universal_d_SubscriptionPlanDiscountDiscountOneOf = SubscriptionPlanDiscountDiscountOneOf;
  type storesCatalogV3Product_universal_d_SubscriptionPlanDiscountDiscountType = SubscriptionPlanDiscountDiscountType;
  const storesCatalogV3Product_universal_d_SubscriptionPlanDiscountDiscountType: typeof SubscriptionPlanDiscountDiscountType;
  type storesCatalogV3Product_universal_d_UpdateDocumentsEvent = UpdateDocumentsEvent;
  type storesCatalogV3Product_universal_d_UpdateDocumentsEventOperationOneOf = UpdateDocumentsEventOperationOneOf;
  type storesCatalogV3Product_universal_d_DocumentUpdateOperation = DocumentUpdateOperation;
  type storesCatalogV3Product_universal_d_IndexDocument = IndexDocument;
  type storesCatalogV3Product_universal_d_DocumentPayload = DocumentPayload;
  type storesCatalogV3Product_universal_d_DocumentImage = DocumentImage;
  type storesCatalogV3Product_universal_d_Enum = Enum;
  const storesCatalogV3Product_universal_d_Enum: typeof Enum;
  type storesCatalogV3Product_universal_d_DeleteByIdsOperation = DeleteByIdsOperation;
  type storesCatalogV3Product_universal_d_DeleteByFilterOperation = DeleteByFilterOperation;
  type storesCatalogV3Product_universal_d_UpdateByFilterOperation = UpdateByFilterOperation;
  type storesCatalogV3Product_universal_d_UpdateExistingOperation = UpdateExistingOperation;
  type storesCatalogV3Product_universal_d_DomainEvent = DomainEvent;
  type storesCatalogV3Product_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type storesCatalogV3Product_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type storesCatalogV3Product_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type storesCatalogV3Product_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type storesCatalogV3Product_universal_d_ActionEvent = ActionEvent;
  type storesCatalogV3Product_universal_d_Empty = Empty;
  type storesCatalogV3Product_universal_d_SearchIndexingNotification = SearchIndexingNotification;
  type storesCatalogV3Product_universal_d_State = State;
  const storesCatalogV3Product_universal_d_State: typeof State;
  type storesCatalogV3Product_universal_d_CreateProductRequest = CreateProductRequest;
  type storesCatalogV3Product_universal_d_ProductComposite = ProductComposite;
  type storesCatalogV3Product_universal_d_ProductCompositeTypedPropertiesOneOf = ProductCompositeTypedPropertiesOneOf;
  type storesCatalogV3Product_universal_d_VariantComposite = VariantComposite;
  type storesCatalogV3Product_universal_d_VariantCompositeTypedPropertiesOneOf = VariantCompositeTypedPropertiesOneOf;
  type storesCatalogV3Product_universal_d_InventoryItemComposite = InventoryItemComposite;
  type storesCatalogV3Product_universal_d_InventoryItemCompositeTrackingMethodOneOf = InventoryItemCompositeTrackingMethodOneOf;
  type storesCatalogV3Product_universal_d_PreorderInfo = PreorderInfo;
  type storesCatalogV3Product_universal_d_OptionChoiceReferences = OptionChoiceReferences;
  type storesCatalogV3Product_universal_d_RequestedFields = RequestedFields;
  const storesCatalogV3Product_universal_d_RequestedFields: typeof RequestedFields;
  type storesCatalogV3Product_universal_d_CreateProductResponse = CreateProductResponse;
  type storesCatalogV3Product_universal_d_BulkInventoryItemResults = BulkInventoryItemResults;
  type storesCatalogV3Product_universal_d_BulkInventoryItemResult = BulkInventoryItemResult;
  type storesCatalogV3Product_universal_d_ItemMetadata = ItemMetadata;
  type storesCatalogV3Product_universal_d_ApplicationError = ApplicationError;
  type storesCatalogV3Product_universal_d_InventoryItem = InventoryItem;
  type storesCatalogV3Product_universal_d_InventoryItemTrackingMethodOneOf = InventoryItemTrackingMethodOneOf;
  type storesCatalogV3Product_universal_d_ItemAvailability = ItemAvailability;
  type storesCatalogV3Product_universal_d_AvailabilityStatus = AvailabilityStatus;
  const storesCatalogV3Product_universal_d_AvailabilityStatus: typeof AvailabilityStatus;
  type storesCatalogV3Product_universal_d_BulkActionMetadata = BulkActionMetadata;
  type storesCatalogV3Product_universal_d_VariantsNotAlignedWithProduct = VariantsNotAlignedWithProduct;
  type storesCatalogV3Product_universal_d_VariantNotAlignedWithProduct = VariantNotAlignedWithProduct;
  type storesCatalogV3Product_universal_d_VariantBulkErrors = VariantBulkErrors;
  type storesCatalogV3Product_universal_d_InventoryBulkErrors = InventoryBulkErrors;
  type storesCatalogV3Product_universal_d_UpdateProductRequest = UpdateProductRequest;
  type storesCatalogV3Product_universal_d_UpdateProductResponse = UpdateProductResponse;
  type storesCatalogV3Product_universal_d_UnsupportedFieldMasks = UnsupportedFieldMasks;
  type storesCatalogV3Product_universal_d_BulkCreateProductsRequest = BulkCreateProductsRequest;
  type storesCatalogV3Product_universal_d_BulkCreateProductsResponse = BulkCreateProductsResponse;
  type storesCatalogV3Product_universal_d_BulkProductResults = BulkProductResults;
  type storesCatalogV3Product_universal_d_BulkProductResult = BulkProductResult;
  type storesCatalogV3Product_universal_d_BulkUpdateProductsRequest = BulkUpdateProductsRequest;
  type storesCatalogV3Product_universal_d_MaskedProductComposite = MaskedProductComposite;
  type storesCatalogV3Product_universal_d_BulkUpdateProductsResponse = BulkUpdateProductsResponse;
  type storesCatalogV3Product_universal_d_InvalidateCache = InvalidateCache;
  type storesCatalogV3Product_universal_d_InvalidateCacheGetByOneOf = InvalidateCacheGetByOneOf;
  type storesCatalogV3Product_universal_d_App = App;
  type storesCatalogV3Product_universal_d_Page = Page;
  type storesCatalogV3Product_universal_d_URI = URI;
  type storesCatalogV3Product_universal_d_DoNotCallCreateProductRequest = DoNotCallCreateProductRequest;
  type storesCatalogV3Product_universal_d_DoNotCallCreateProductResponse = DoNotCallCreateProductResponse;
  type storesCatalogV3Product_universal_d_VariantAdded = VariantAdded;
  type storesCatalogV3Product_universal_d_GetProductRequest = GetProductRequest;
  type storesCatalogV3Product_universal_d_GetProductResponse = GetProductResponse;
  type storesCatalogV3Product_universal_d_GetProductBySlugRequest = GetProductBySlugRequest;
  type storesCatalogV3Product_universal_d_GetProductBySlugResponse = GetProductBySlugResponse;
  type storesCatalogV3Product_universal_d_DoNotCallUpdateProductRequest = DoNotCallUpdateProductRequest;
  type storesCatalogV3Product_universal_d_DoNotCallUpdateProductResponse = DoNotCallUpdateProductResponse;
  type storesCatalogV3Product_universal_d_VariantUpdated = VariantUpdated;
  type storesCatalogV3Product_universal_d_VariantRemoved = VariantRemoved;
  type storesCatalogV3Product_universal_d_DeleteProductRequest = DeleteProductRequest;
  type storesCatalogV3Product_universal_d_DeleteProductResponse = DeleteProductResponse;
  type storesCatalogV3Product_universal_d_SearchProductsRequest = SearchProductsRequest;
  type storesCatalogV3Product_universal_d_CursorSearch = CursorSearch;
  type storesCatalogV3Product_universal_d_CursorSearchPagingMethodOneOf = CursorSearchPagingMethodOneOf;
  type storesCatalogV3Product_universal_d_Sorting = Sorting;
  type storesCatalogV3Product_universal_d_SortOrder = SortOrder;
  const storesCatalogV3Product_universal_d_SortOrder: typeof SortOrder;
  type storesCatalogV3Product_universal_d_Aggregation = Aggregation;
  type storesCatalogV3Product_universal_d_AggregationKindOneOf = AggregationKindOneOf;
  type storesCatalogV3Product_universal_d_RangeBucket = RangeBucket;
  type storesCatalogV3Product_universal_d_SortType = SortType;
  const storesCatalogV3Product_universal_d_SortType: typeof SortType;
  type storesCatalogV3Product_universal_d_SortDirection = SortDirection;
  const storesCatalogV3Product_universal_d_SortDirection: typeof SortDirection;
  type storesCatalogV3Product_universal_d_MissingValues = MissingValues;
  const storesCatalogV3Product_universal_d_MissingValues: typeof MissingValues;
  type storesCatalogV3Product_universal_d_IncludeMissingValuesOptions = IncludeMissingValuesOptions;
  type storesCatalogV3Product_universal_d_ScalarType = ScalarType;
  const storesCatalogV3Product_universal_d_ScalarType: typeof ScalarType;
  type storesCatalogV3Product_universal_d_ValueAggregation = ValueAggregation;
  type storesCatalogV3Product_universal_d_ValueAggregationOptionsOneOf = ValueAggregationOptionsOneOf;
  type storesCatalogV3Product_universal_d_NestedAggregationType = NestedAggregationType;
  const storesCatalogV3Product_universal_d_NestedAggregationType: typeof NestedAggregationType;
  type storesCatalogV3Product_universal_d_RangeAggregation = RangeAggregation;
  type storesCatalogV3Product_universal_d_ScalarAggregation = ScalarAggregation;
  type storesCatalogV3Product_universal_d_DateHistogramAggregation = DateHistogramAggregation;
  type storesCatalogV3Product_universal_d_Interval = Interval;
  const storesCatalogV3Product_universal_d_Interval: typeof Interval;
  type storesCatalogV3Product_universal_d_NestedAggregationItem = NestedAggregationItem;
  type storesCatalogV3Product_universal_d_NestedAggregationItemKindOneOf = NestedAggregationItemKindOneOf;
  type storesCatalogV3Product_universal_d_AggregationType = AggregationType;
  const storesCatalogV3Product_universal_d_AggregationType: typeof AggregationType;
  type storesCatalogV3Product_universal_d_NestedAggregation = NestedAggregation;
  type storesCatalogV3Product_universal_d_GroupByAggregation = GroupByAggregation;
  type storesCatalogV3Product_universal_d_GroupByAggregationKindOneOf = GroupByAggregationKindOneOf;
  type storesCatalogV3Product_universal_d_SearchDetails = SearchDetails;
  type storesCatalogV3Product_universal_d_Mode = Mode;
  const storesCatalogV3Product_universal_d_Mode: typeof Mode;
  type storesCatalogV3Product_universal_d_CursorPaging = CursorPaging;
  type storesCatalogV3Product_universal_d_SearchProductsResponse = SearchProductsResponse;
  type storesCatalogV3Product_universal_d_CursorPagingMetadata = CursorPagingMetadata;
  type storesCatalogV3Product_universal_d_Cursors = Cursors;
  type storesCatalogV3Product_universal_d_AggregationData = AggregationData;
  type storesCatalogV3Product_universal_d_ValueAggregationResult = ValueAggregationResult;
  type storesCatalogV3Product_universal_d_RangeAggregationResult = RangeAggregationResult;
  type storesCatalogV3Product_universal_d_NestedAggregationResults = NestedAggregationResults;
  type storesCatalogV3Product_universal_d_NestedAggregationResultsResultOneOf = NestedAggregationResultsResultOneOf;
  type storesCatalogV3Product_universal_d_ValueResults = ValueResults;
  type storesCatalogV3Product_universal_d_RangeResults = RangeResults;
  type storesCatalogV3Product_universal_d_ScalarResult = ScalarResult;
  type storesCatalogV3Product_universal_d_NestedValueAggregationResult = NestedValueAggregationResult;
  type storesCatalogV3Product_universal_d_ValueResult = ValueResult;
  type storesCatalogV3Product_universal_d_RangeResult = RangeResult;
  type storesCatalogV3Product_universal_d_NestedResultsScalarResult = NestedResultsScalarResult;
  type storesCatalogV3Product_universal_d_NestedResultValue = NestedResultValue;
  type storesCatalogV3Product_universal_d_NestedResultValueResultOneOf = NestedResultValueResultOneOf;
  type storesCatalogV3Product_universal_d_Results = Results;
  type storesCatalogV3Product_universal_d_DateHistogramResult = DateHistogramResult;
  type storesCatalogV3Product_universal_d_GroupByValueResults = GroupByValueResults;
  type storesCatalogV3Product_universal_d_DateHistogramResults = DateHistogramResults;
  type storesCatalogV3Product_universal_d_NestedResults = NestedResults;
  type storesCatalogV3Product_universal_d_AggregationResults = AggregationResults;
  type storesCatalogV3Product_universal_d_AggregationResultsResultOneOf = AggregationResultsResultOneOf;
  type storesCatalogV3Product_universal_d_EventuallyConsistentQueryProductsRequest = EventuallyConsistentQueryProductsRequest;
  type storesCatalogV3Product_universal_d_CursorQuery = CursorQuery;
  type storesCatalogV3Product_universal_d_CursorQueryPagingMethodOneOf = CursorQueryPagingMethodOneOf;
  type storesCatalogV3Product_universal_d_EventuallyConsistentQueryProductsResponse = EventuallyConsistentQueryProductsResponse;
  type storesCatalogV3Product_universal_d_DeprecatedSearchProductsWithOffsetRequest = DeprecatedSearchProductsWithOffsetRequest;
  type storesCatalogV3Product_universal_d_PlatformOffsetSearch = PlatformOffsetSearch;
  type storesCatalogV3Product_universal_d_PlatformOffsetSearchPagingMethodOneOf = PlatformOffsetSearchPagingMethodOneOf;
  type storesCatalogV3Product_universal_d_PlatformPaging = PlatformPaging;
  type storesCatalogV3Product_universal_d_DeprecatedSearchProductsWithOffsetResponse = DeprecatedSearchProductsWithOffsetResponse;
  type storesCatalogV3Product_universal_d_PagingMetadata = PagingMetadata;
  type storesCatalogV3Product_universal_d_CountProductsRequest = CountProductsRequest;
  type storesCatalogV3Product_universal_d_CountProductsResponse = CountProductsResponse;
  type storesCatalogV3Product_universal_d_DoNotCallBulkCreateProductsRequest = DoNotCallBulkCreateProductsRequest;
  type storesCatalogV3Product_universal_d_DoNotCallBulkCreateProductsResponse = DoNotCallBulkCreateProductsResponse;
  type storesCatalogV3Product_universal_d_DoNotCallBulkUpdateProductsRequest = DoNotCallBulkUpdateProductsRequest;
  type storesCatalogV3Product_universal_d_MaskedProduct = MaskedProduct;
  type storesCatalogV3Product_universal_d_DoNotCallBulkUpdateProductsResponse = DoNotCallBulkUpdateProductsResponse;
  type storesCatalogV3Product_universal_d_BulkUpdateProductsByFilterRequest = BulkUpdateProductsByFilterRequest;
  type storesCatalogV3Product_universal_d_BulkUpdateProductsByFilterResponse = BulkUpdateProductsByFilterResponse;
  type storesCatalogV3Product_universal_d_BulkDeleteProductsRequest = BulkDeleteProductsRequest;
  type storesCatalogV3Product_universal_d_BulkDeleteProductsResponse = BulkDeleteProductsResponse;
  type storesCatalogV3Product_universal_d_BulkDeleteProductsByFilterRequest = BulkDeleteProductsByFilterRequest;
  type storesCatalogV3Product_universal_d_BulkDeleteProductsByFilterResponse = BulkDeleteProductsByFilterResponse;
  type storesCatalogV3Product_universal_d_BulkAddInfoSectionsToProductsByFilterRequest = BulkAddInfoSectionsToProductsByFilterRequest;
  type storesCatalogV3Product_universal_d_BulkAddInfoSectionsToProductsByFilterResponse = BulkAddInfoSectionsToProductsByFilterResponse;
  type storesCatalogV3Product_universal_d_BulkAddInfoSectionsToProductsRequest = BulkAddInfoSectionsToProductsRequest;
  type storesCatalogV3Product_universal_d_ProductIdWithRevision = ProductIdWithRevision;
  type storesCatalogV3Product_universal_d_BulkAddInfoSectionsToProductsResponse = BulkAddInfoSectionsToProductsResponse;
  type storesCatalogV3Product_universal_d_BulkRemoveInfoSectionsFromProductsByFilterRequest = BulkRemoveInfoSectionsFromProductsByFilterRequest;
  type storesCatalogV3Product_universal_d_BulkRemoveInfoSectionsFromProductsByFilterResponse = BulkRemoveInfoSectionsFromProductsByFilterResponse;
  type storesCatalogV3Product_universal_d_BulkRemoveInfoSectionsFromProductsRequest = BulkRemoveInfoSectionsFromProductsRequest;
  type storesCatalogV3Product_universal_d_BulkRemoveInfoSectionsFromProductsResponse = BulkRemoveInfoSectionsFromProductsResponse;
  type storesCatalogV3Product_universal_d_BulkUpdateVariantsByFilterRequest = BulkUpdateVariantsByFilterRequest;
  type storesCatalogV3Product_universal_d_BulkUpdateVariantsByFilterResponse = BulkUpdateVariantsByFilterResponse;
  type storesCatalogV3Product_universal_d_BulkAdjustVariantsByFilterRequest = BulkAdjustVariantsByFilterRequest;
  type storesCatalogV3Product_universal_d_AdjustValue = AdjustValue;
  type storesCatalogV3Product_universal_d_AdjustValueAdjustValueOneOf = AdjustValueAdjustValueOneOf;
  type storesCatalogV3Product_universal_d_UnsignedAdjustValue = UnsignedAdjustValue;
  type storesCatalogV3Product_universal_d_UnsignedAdjustValueAdjustValueOneOf = UnsignedAdjustValueAdjustValueOneOf;
  type storesCatalogV3Product_universal_d_BulkAdjustVariantsByFilterResponse = BulkAdjustVariantsByFilterResponse;
  const storesCatalogV3Product_universal_d_catalogCreateProduct: typeof catalogCreateProduct;
  type storesCatalogV3Product_universal_d_CatalogCreateProductOptions = CatalogCreateProductOptions;
  const storesCatalogV3Product_universal_d_catalogUpdateProduct: typeof catalogUpdateProduct;
  type storesCatalogV3Product_universal_d_CatalogUpdateProduct = CatalogUpdateProduct;
  type storesCatalogV3Product_universal_d_CatalogUpdateProductOptions = CatalogUpdateProductOptions;
  const storesCatalogV3Product_universal_d_catalogBulkCreateProducts: typeof catalogBulkCreateProducts;
  type storesCatalogV3Product_universal_d_CatalogBulkCreateProductsOptions = CatalogBulkCreateProductsOptions;
  const storesCatalogV3Product_universal_d_catalogBulkUpdateProducts: typeof catalogBulkUpdateProducts;
  type storesCatalogV3Product_universal_d_CatalogBulkUpdateProductsOptions = CatalogBulkUpdateProductsOptions;
  const storesCatalogV3Product_universal_d_getProduct: typeof getProduct;
  type storesCatalogV3Product_universal_d_GetProductOptions = GetProductOptions;
  const storesCatalogV3Product_universal_d_getProductBySlug: typeof getProductBySlug;
  type storesCatalogV3Product_universal_d_GetProductBySlugOptions = GetProductBySlugOptions;
  const storesCatalogV3Product_universal_d_deleteProduct: typeof deleteProduct;
  const storesCatalogV3Product_universal_d_searchProducts: typeof searchProducts;
  type storesCatalogV3Product_universal_d_SearchProductsOptions = SearchProductsOptions;
  const storesCatalogV3Product_universal_d_eventuallyConsistentQueryProducts: typeof eventuallyConsistentQueryProducts;
  type storesCatalogV3Product_universal_d_EventuallyConsistentQueryProductsOptions = EventuallyConsistentQueryProductsOptions;
  type storesCatalogV3Product_universal_d_ProductsQueryResult = ProductsQueryResult;
  type storesCatalogV3Product_universal_d_ProductsQueryBuilder = ProductsQueryBuilder;
  const storesCatalogV3Product_universal_d_countProducts: typeof countProducts;
  type storesCatalogV3Product_universal_d_CountProductsOptions = CountProductsOptions;
  const storesCatalogV3Product_universal_d_bulkUpdateProductsByFilter: typeof bulkUpdateProductsByFilter;
  type storesCatalogV3Product_universal_d_BulkUpdateProductsByFilterOptions = BulkUpdateProductsByFilterOptions;
  const storesCatalogV3Product_universal_d_bulkDeleteProducts: typeof bulkDeleteProducts;
  const storesCatalogV3Product_universal_d_bulkDeleteProductsByFilter: typeof bulkDeleteProductsByFilter;
  const storesCatalogV3Product_universal_d_bulkAddInfoSectionsToProductsByFilter: typeof bulkAddInfoSectionsToProductsByFilter;
  type storesCatalogV3Product_universal_d_BulkAddInfoSectionsToProductsByFilterOptions = BulkAddInfoSectionsToProductsByFilterOptions;
  const storesCatalogV3Product_universal_d_bulkAddInfoSectionsToProducts: typeof bulkAddInfoSectionsToProducts;
  type storesCatalogV3Product_universal_d_BulkAddInfoSectionsToProductsOptions = BulkAddInfoSectionsToProductsOptions;
  const storesCatalogV3Product_universal_d_bulkRemoveInfoSectionsFromProductsByFilter: typeof bulkRemoveInfoSectionsFromProductsByFilter;
  type storesCatalogV3Product_universal_d_BulkRemoveInfoSectionsFromProductsByFilterOptions = BulkRemoveInfoSectionsFromProductsByFilterOptions;
  const storesCatalogV3Product_universal_d_bulkRemoveInfoSectionsFromProducts: typeof bulkRemoveInfoSectionsFromProducts;
  type storesCatalogV3Product_universal_d_BulkRemoveInfoSectionsFromProductsOptions = BulkRemoveInfoSectionsFromProductsOptions;
  const storesCatalogV3Product_universal_d_bulkUpdateVariantsByFilter: typeof bulkUpdateVariantsByFilter;
  type storesCatalogV3Product_universal_d_BulkUpdateVariantsByFilterOptions = BulkUpdateVariantsByFilterOptions;
  const storesCatalogV3Product_universal_d_bulkAdjustVariantsByFilter: typeof bulkAdjustVariantsByFilter;
  type storesCatalogV3Product_universal_d_BulkAdjustVariantsByFilterOptions = BulkAdjustVariantsByFilterOptions;
  namespace storesCatalogV3Product_universal_d {
    export {
      storesCatalogV3Product_universal_d___debug as __debug,
      storesCatalogV3Product_universal_d_Product as Product,
      storesCatalogV3Product_universal_d_ProductTypedPropertiesOneOf as ProductTypedPropertiesOneOf,
      storesCatalogV3Product_universal_d_RichContent as RichContent,
      storesCatalogV3Product_universal_d_Node as Node,
      storesCatalogV3Product_universal_d_NodeDataOneOf as NodeDataOneOf,
      storesCatalogV3Product_universal_d_NodeType as NodeType,
      storesCatalogV3Product_universal_d_NodeStyle as NodeStyle,
      storesCatalogV3Product_universal_d_ButtonData as ButtonData,
      storesCatalogV3Product_universal_d_Border as Border,
      storesCatalogV3Product_universal_d_Colors as Colors,
      storesCatalogV3Product_universal_d_PluginContainerData as PluginContainerData,
      storesCatalogV3Product_universal_d_WidthType as WidthType,
      storesCatalogV3Product_universal_d_PluginContainerDataWidth as PluginContainerDataWidth,
      storesCatalogV3Product_universal_d_PluginContainerDataWidthDataOneOf as PluginContainerDataWidthDataOneOf,
      storesCatalogV3Product_universal_d_PluginContainerDataAlignment as PluginContainerDataAlignment,
      storesCatalogV3Product_universal_d_Spoiler as Spoiler,
      storesCatalogV3Product_universal_d_Height as Height,
      storesCatalogV3Product_universal_d_Type as Type,
      storesCatalogV3Product_universal_d_Styles as Styles,
      storesCatalogV3Product_universal_d_Link as Link,
      storesCatalogV3Product_universal_d_LinkDataOneOf as LinkDataOneOf,
      storesCatalogV3Product_universal_d_Target as Target,
      storesCatalogV3Product_universal_d_Rel as Rel,
      storesCatalogV3Product_universal_d_CodeBlockData as CodeBlockData,
      storesCatalogV3Product_universal_d_TextStyle as TextStyle,
      storesCatalogV3Product_universal_d_TextAlignment as TextAlignment,
      storesCatalogV3Product_universal_d_DividerData as DividerData,
      storesCatalogV3Product_universal_d_LineStyle as LineStyle,
      storesCatalogV3Product_universal_d_Width as Width,
      storesCatalogV3Product_universal_d_Alignment as Alignment,
      storesCatalogV3Product_universal_d_FileData as FileData,
      storesCatalogV3Product_universal_d_ViewMode as ViewMode,
      storesCatalogV3Product_universal_d_FileSource as FileSource,
      storesCatalogV3Product_universal_d_FileSourceDataOneOf as FileSourceDataOneOf,
      storesCatalogV3Product_universal_d_PDFSettings as PDFSettings,
      storesCatalogV3Product_universal_d_GalleryData as GalleryData,
      storesCatalogV3Product_universal_d_V1Media as V1Media,
      storesCatalogV3Product_universal_d_Image as Image,
      storesCatalogV3Product_universal_d_Video as Video,
      storesCatalogV3Product_universal_d_Item as Item,
      storesCatalogV3Product_universal_d_ItemDataOneOf as ItemDataOneOf,
      storesCatalogV3Product_universal_d_GalleryOptions as GalleryOptions,
      storesCatalogV3Product_universal_d_LayoutType as LayoutType,
      storesCatalogV3Product_universal_d_Orientation as Orientation,
      storesCatalogV3Product_universal_d_Crop as Crop,
      storesCatalogV3Product_universal_d_ThumbnailsAlignment as ThumbnailsAlignment,
      storesCatalogV3Product_universal_d_Layout as Layout,
      storesCatalogV3Product_universal_d_ItemStyle as ItemStyle,
      storesCatalogV3Product_universal_d_Thumbnails as Thumbnails,
      storesCatalogV3Product_universal_d_GIFData as GIFData,
      storesCatalogV3Product_universal_d_GIF as GIF,
      storesCatalogV3Product_universal_d_HeadingData as HeadingData,
      storesCatalogV3Product_universal_d_HTMLData as HTMLData,
      storesCatalogV3Product_universal_d_HTMLDataDataOneOf as HTMLDataDataOneOf,
      storesCatalogV3Product_universal_d_Source as Source,
      storesCatalogV3Product_universal_d_ImageData as ImageData,
      storesCatalogV3Product_universal_d_LinkPreviewData as LinkPreviewData,
      storesCatalogV3Product_universal_d_MapData as MapData,
      storesCatalogV3Product_universal_d_MapSettings as MapSettings,
      storesCatalogV3Product_universal_d_MapType as MapType,
      storesCatalogV3Product_universal_d_ParagraphData as ParagraphData,
      storesCatalogV3Product_universal_d_PollData as PollData,
      storesCatalogV3Product_universal_d_ViewRole as ViewRole,
      storesCatalogV3Product_universal_d_VoteRole as VoteRole,
      storesCatalogV3Product_universal_d_Permissions as Permissions,
      storesCatalogV3Product_universal_d_Option as Option,
      storesCatalogV3Product_universal_d_PollSettings as PollSettings,
      storesCatalogV3Product_universal_d_PollLayoutType as PollLayoutType,
      storesCatalogV3Product_universal_d_PollLayoutDirection as PollLayoutDirection,
      storesCatalogV3Product_universal_d_PollLayout as PollLayout,
      storesCatalogV3Product_universal_d_OptionLayout as OptionLayout,
      storesCatalogV3Product_universal_d_BackgroundType as BackgroundType,
      storesCatalogV3Product_universal_d_Gradient as Gradient,
      storesCatalogV3Product_universal_d_Background as Background,
      storesCatalogV3Product_universal_d_BackgroundBackgroundOneOf as BackgroundBackgroundOneOf,
      storesCatalogV3Product_universal_d_PollDesign as PollDesign,
      storesCatalogV3Product_universal_d_OptionDesign as OptionDesign,
      storesCatalogV3Product_universal_d_Poll as Poll,
      storesCatalogV3Product_universal_d_PollDataLayout as PollDataLayout,
      storesCatalogV3Product_universal_d_Design as Design,
      storesCatalogV3Product_universal_d_TextData as TextData,
      storesCatalogV3Product_universal_d_Decoration as Decoration,
      storesCatalogV3Product_universal_d_DecorationDataOneOf as DecorationDataOneOf,
      storesCatalogV3Product_universal_d_DecorationType as DecorationType,
      storesCatalogV3Product_universal_d_AnchorData as AnchorData,
      storesCatalogV3Product_universal_d_ColorData as ColorData,
      storesCatalogV3Product_universal_d_LinkData as LinkData,
      storesCatalogV3Product_universal_d_MentionData as MentionData,
      storesCatalogV3Product_universal_d_FontSizeData as FontSizeData,
      storesCatalogV3Product_universal_d_FontType as FontType,
      storesCatalogV3Product_universal_d_AppEmbedData as AppEmbedData,
      storesCatalogV3Product_universal_d_AppEmbedDataAppDataOneOf as AppEmbedDataAppDataOneOf,
      storesCatalogV3Product_universal_d_AppType as AppType,
      storesCatalogV3Product_universal_d_BookingData as BookingData,
      storesCatalogV3Product_universal_d_EventData as EventData,
      storesCatalogV3Product_universal_d_VideoData as VideoData,
      storesCatalogV3Product_universal_d_PlaybackOptions as PlaybackOptions,
      storesCatalogV3Product_universal_d_EmbedData as EmbedData,
      storesCatalogV3Product_universal_d_Oembed as Oembed,
      storesCatalogV3Product_universal_d_CollapsibleListData as CollapsibleListData,
      storesCatalogV3Product_universal_d_InitialExpandedItems as InitialExpandedItems,
      storesCatalogV3Product_universal_d_Direction as Direction,
      storesCatalogV3Product_universal_d_TableData as TableData,
      storesCatalogV3Product_universal_d_Dimensions as Dimensions,
      storesCatalogV3Product_universal_d_TableCellData as TableCellData,
      storesCatalogV3Product_universal_d_VerticalAlignment as VerticalAlignment,
      storesCatalogV3Product_universal_d_CellStyle as CellStyle,
      storesCatalogV3Product_universal_d_BorderColors as BorderColors,
      storesCatalogV3Product_universal_d_NullValue as NullValue,
      storesCatalogV3Product_universal_d_ListValue as ListValue,
      storesCatalogV3Product_universal_d_AudioData as AudioData,
      storesCatalogV3Product_universal_d_OrderedListData as OrderedListData,
      storesCatalogV3Product_universal_d_BulletedListData as BulletedListData,
      storesCatalogV3Product_universal_d_BlockquoteData as BlockquoteData,
      storesCatalogV3Product_universal_d_Metadata as Metadata,
      storesCatalogV3Product_universal_d_DocumentStyle as DocumentStyle,
      storesCatalogV3Product_universal_d_TextNodeStyle as TextNodeStyle,
      storesCatalogV3Product_universal_d_Media as Media,
      storesCatalogV3Product_universal_d_ProductMedia as ProductMedia,
      storesCatalogV3Product_universal_d_ProductMediaSetByOneOf as ProductMediaSetByOneOf,
      storesCatalogV3Product_universal_d_ProductMediaMediaOneOf as ProductMediaMediaOneOf,
      storesCatalogV3Product_universal_d_VideoResolution as VideoResolution,
      storesCatalogV3Product_universal_d_SeoSchema as SeoSchema,
      storesCatalogV3Product_universal_d_Keyword as Keyword,
      storesCatalogV3Product_universal_d_Tag as Tag,
      storesCatalogV3Product_universal_d_Settings as Settings,
      storesCatalogV3Product_universal_d_CustomText as CustomText,
      storesCatalogV3Product_universal_d_ConnectedOption as ConnectedOption,
      storesCatalogV3Product_universal_d_ConnectedOptionOptionSettingsOneOf as ConnectedOptionOptionSettingsOneOf,
      storesCatalogV3Product_universal_d_OptionSettingsType as OptionSettingsType,
      storesCatalogV3Product_universal_d_TextChoicesSettings as TextChoicesSettings,
      storesCatalogV3Product_universal_d_ConnectedChoice as ConnectedChoice,
      storesCatalogV3Product_universal_d_ConnectedChoiceValueOneOf as ConnectedChoiceValueOneOf,
      storesCatalogV3Product_universal_d_ChoiceType as ChoiceType,
      storesCatalogV3Product_universal_d_MultipleColors as MultipleColors,
      storesCatalogV3Product_universal_d_SwatchChoicesSettings as SwatchChoicesSettings,
      storesCatalogV3Product_universal_d_ConnectedModifier as ConnectedModifier,
      storesCatalogV3Product_universal_d_ConnectedModifierOptionSettingsOneOf as ConnectedModifierOptionSettingsOneOf,
      storesCatalogV3Product_universal_d_FreeTextSettings as FreeTextSettings,
      storesCatalogV3Product_universal_d_Brand as Brand,
      storesCatalogV3Product_universal_d_InfoSection as InfoSection,
      storesCatalogV3Product_universal_d_SubscriptionOptionInfo as SubscriptionOptionInfo,
      storesCatalogV3Product_universal_d_SubscriptionSettings as SubscriptionSettings,
      storesCatalogV3Product_universal_d_SubscriptionFrequency as SubscriptionFrequency,
      storesCatalogV3Product_universal_d_Discount as Discount,
      storesCatalogV3Product_universal_d_DiscountType as DiscountType,
      storesCatalogV3Product_universal_d_Customization as Customization,
      storesCatalogV3Product_universal_d_CustomizationValueOneOf as CustomizationValueOneOf,
      storesCatalogV3Product_universal_d_CustomizationType as CustomizationType,
      storesCatalogV3Product_universal_d_TextInputValue as TextInputValue,
      storesCatalogV3Product_universal_d_Ribbon as Ribbon,
      storesCatalogV3Product_universal_d_ProductCategory as ProductCategory,
      storesCatalogV3Product_universal_d_BreadCrumb as BreadCrumb,
      storesCatalogV3Product_universal_d_PriceRange as PriceRange,
      storesCatalogV3Product_universal_d_FixedMonetaryAmount as FixedMonetaryAmount,
      storesCatalogV3Product_universal_d_Inventory as Inventory,
      storesCatalogV3Product_universal_d_PurchaseAvailabilityStatus as PurchaseAvailabilityStatus,
      storesCatalogV3Product_universal_d_PreorderStatus as PreorderStatus,
      storesCatalogV3Product_universal_d_ProductType as ProductType,
      storesCatalogV3Product_universal_d_PhysicalProperties as PhysicalProperties,
      storesCatalogV3Product_universal_d_PricePerUnitSettings as PricePerUnitSettings,
      storesCatalogV3Product_universal_d_MeasurementUnit as MeasurementUnit,
      storesCatalogV3Product_universal_d_WeightRange as WeightRange,
      storesCatalogV3Product_universal_d_Variant as Variant,
      storesCatalogV3Product_universal_d_VariantTypedPropertiesOneOf as VariantTypedPropertiesOneOf,
      storesCatalogV3Product_universal_d_OptionChoice as OptionChoice,
      storesCatalogV3Product_universal_d_PriceInfo as PriceInfo,
      storesCatalogV3Product_universal_d_RevenueDetails as RevenueDetails,
      storesCatalogV3Product_universal_d_VariantPhysicalProperties as VariantPhysicalProperties,
      storesCatalogV3Product_universal_d_PricePerUnit as PricePerUnit,
      storesCatalogV3Product_universal_d_VariantDigitalProperties as VariantDigitalProperties,
      storesCatalogV3Product_universal_d_SecuredMedia as SecuredMedia,
      storesCatalogV3Product_universal_d_FileType as FileType,
      storesCatalogV3Product_universal_d_SubscriptionPlanPrice as SubscriptionPlanPrice,
      storesCatalogV3Product_universal_d_ExtendedFields as ExtendedFields,
      storesCatalogV3Product_universal_d_Subscription as Subscription,
      storesCatalogV3Product_universal_d_SubscriptionPlan as SubscriptionPlan,
      storesCatalogV3Product_universal_d_V3SubscriptionSettings as V3SubscriptionSettings,
      storesCatalogV3Product_universal_d_V3SubscriptionSettingsCyclesOneOf as V3SubscriptionSettingsCyclesOneOf,
      storesCatalogV3Product_universal_d_SubscriptionPlanDiscount as SubscriptionPlanDiscount,
      storesCatalogV3Product_universal_d_SubscriptionPlanDiscountDiscountOneOf as SubscriptionPlanDiscountDiscountOneOf,
      storesCatalogV3Product_universal_d_SubscriptionPlanDiscountDiscountType as SubscriptionPlanDiscountDiscountType,
      storesCatalogV3Product_universal_d_UpdateDocumentsEvent as UpdateDocumentsEvent,
      storesCatalogV3Product_universal_d_UpdateDocumentsEventOperationOneOf as UpdateDocumentsEventOperationOneOf,
      storesCatalogV3Product_universal_d_DocumentUpdateOperation as DocumentUpdateOperation,
      storesCatalogV3Product_universal_d_IndexDocument as IndexDocument,
      storesCatalogV3Product_universal_d_DocumentPayload as DocumentPayload,
      storesCatalogV3Product_universal_d_DocumentImage as DocumentImage,
      storesCatalogV3Product_universal_d_Enum as Enum,
      storesCatalogV3Product_universal_d_DeleteByIdsOperation as DeleteByIdsOperation,
      storesCatalogV3Product_universal_d_DeleteByFilterOperation as DeleteByFilterOperation,
      storesCatalogV3Product_universal_d_UpdateByFilterOperation as UpdateByFilterOperation,
      storesCatalogV3Product_universal_d_UpdateExistingOperation as UpdateExistingOperation,
      storesCatalogV3Product_universal_d_DomainEvent as DomainEvent,
      storesCatalogV3Product_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      storesCatalogV3Product_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      storesCatalogV3Product_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      storesCatalogV3Product_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      storesCatalogV3Product_universal_d_ActionEvent as ActionEvent,
      storesCatalogV3Product_universal_d_Empty as Empty,
      storesCatalogV3Product_universal_d_SearchIndexingNotification as SearchIndexingNotification,
      storesCatalogV3Product_universal_d_State as State,
      storesCatalogV3Product_universal_d_CreateProductRequest as CreateProductRequest,
      storesCatalogV3Product_universal_d_ProductComposite as ProductComposite,
      storesCatalogV3Product_universal_d_ProductCompositeTypedPropertiesOneOf as ProductCompositeTypedPropertiesOneOf,
      storesCatalogV3Product_universal_d_VariantComposite as VariantComposite,
      storesCatalogV3Product_universal_d_VariantCompositeTypedPropertiesOneOf as VariantCompositeTypedPropertiesOneOf,
      storesCatalogV3Product_universal_d_InventoryItemComposite as InventoryItemComposite,
      storesCatalogV3Product_universal_d_InventoryItemCompositeTrackingMethodOneOf as InventoryItemCompositeTrackingMethodOneOf,
      storesCatalogV3Product_universal_d_PreorderInfo as PreorderInfo,
      storesCatalogV3Product_universal_d_OptionChoiceReferences as OptionChoiceReferences,
      storesCatalogV3Product_universal_d_RequestedFields as RequestedFields,
      storesCatalogV3Product_universal_d_CreateProductResponse as CreateProductResponse,
      storesCatalogV3Product_universal_d_BulkInventoryItemResults as BulkInventoryItemResults,
      storesCatalogV3Product_universal_d_BulkInventoryItemResult as BulkInventoryItemResult,
      storesCatalogV3Product_universal_d_ItemMetadata as ItemMetadata,
      storesCatalogV3Product_universal_d_ApplicationError as ApplicationError,
      storesCatalogV3Product_universal_d_InventoryItem as InventoryItem,
      storesCatalogV3Product_universal_d_InventoryItemTrackingMethodOneOf as InventoryItemTrackingMethodOneOf,
      storesCatalogV3Product_universal_d_ItemAvailability as ItemAvailability,
      storesCatalogV3Product_universal_d_AvailabilityStatus as AvailabilityStatus,
      storesCatalogV3Product_universal_d_BulkActionMetadata as BulkActionMetadata,
      storesCatalogV3Product_universal_d_VariantsNotAlignedWithProduct as VariantsNotAlignedWithProduct,
      storesCatalogV3Product_universal_d_VariantNotAlignedWithProduct as VariantNotAlignedWithProduct,
      storesCatalogV3Product_universal_d_VariantBulkErrors as VariantBulkErrors,
      storesCatalogV3Product_universal_d_InventoryBulkErrors as InventoryBulkErrors,
      storesCatalogV3Product_universal_d_UpdateProductRequest as UpdateProductRequest,
      storesCatalogV3Product_universal_d_UpdateProductResponse as UpdateProductResponse,
      storesCatalogV3Product_universal_d_UnsupportedFieldMasks as UnsupportedFieldMasks,
      storesCatalogV3Product_universal_d_BulkCreateProductsRequest as BulkCreateProductsRequest,
      storesCatalogV3Product_universal_d_BulkCreateProductsResponse as BulkCreateProductsResponse,
      storesCatalogV3Product_universal_d_BulkProductResults as BulkProductResults,
      storesCatalogV3Product_universal_d_BulkProductResult as BulkProductResult,
      storesCatalogV3Product_universal_d_BulkUpdateProductsRequest as BulkUpdateProductsRequest,
      storesCatalogV3Product_universal_d_MaskedProductComposite as MaskedProductComposite,
      storesCatalogV3Product_universal_d_BulkUpdateProductsResponse as BulkUpdateProductsResponse,
      storesCatalogV3Product_universal_d_InvalidateCache as InvalidateCache,
      storesCatalogV3Product_universal_d_InvalidateCacheGetByOneOf as InvalidateCacheGetByOneOf,
      storesCatalogV3Product_universal_d_App as App,
      storesCatalogV3Product_universal_d_Page as Page,
      storesCatalogV3Product_universal_d_URI as URI,
      storesCatalogV3Product_universal_d_DoNotCallCreateProductRequest as DoNotCallCreateProductRequest,
      storesCatalogV3Product_universal_d_DoNotCallCreateProductResponse as DoNotCallCreateProductResponse,
      storesCatalogV3Product_universal_d_VariantAdded as VariantAdded,
      storesCatalogV3Product_universal_d_GetProductRequest as GetProductRequest,
      storesCatalogV3Product_universal_d_GetProductResponse as GetProductResponse,
      storesCatalogV3Product_universal_d_GetProductBySlugRequest as GetProductBySlugRequest,
      storesCatalogV3Product_universal_d_GetProductBySlugResponse as GetProductBySlugResponse,
      storesCatalogV3Product_universal_d_DoNotCallUpdateProductRequest as DoNotCallUpdateProductRequest,
      storesCatalogV3Product_universal_d_DoNotCallUpdateProductResponse as DoNotCallUpdateProductResponse,
      storesCatalogV3Product_universal_d_VariantUpdated as VariantUpdated,
      storesCatalogV3Product_universal_d_VariantRemoved as VariantRemoved,
      storesCatalogV3Product_universal_d_DeleteProductRequest as DeleteProductRequest,
      storesCatalogV3Product_universal_d_DeleteProductResponse as DeleteProductResponse,
      storesCatalogV3Product_universal_d_SearchProductsRequest as SearchProductsRequest,
      storesCatalogV3Product_universal_d_CursorSearch as CursorSearch,
      storesCatalogV3Product_universal_d_CursorSearchPagingMethodOneOf as CursorSearchPagingMethodOneOf,
      storesCatalogV3Product_universal_d_Sorting as Sorting,
      storesCatalogV3Product_universal_d_SortOrder as SortOrder,
      storesCatalogV3Product_universal_d_Aggregation as Aggregation,
      storesCatalogV3Product_universal_d_AggregationKindOneOf as AggregationKindOneOf,
      storesCatalogV3Product_universal_d_RangeBucket as RangeBucket,
      storesCatalogV3Product_universal_d_SortType as SortType,
      storesCatalogV3Product_universal_d_SortDirection as SortDirection,
      storesCatalogV3Product_universal_d_MissingValues as MissingValues,
      storesCatalogV3Product_universal_d_IncludeMissingValuesOptions as IncludeMissingValuesOptions,
      storesCatalogV3Product_universal_d_ScalarType as ScalarType,
      storesCatalogV3Product_universal_d_ValueAggregation as ValueAggregation,
      storesCatalogV3Product_universal_d_ValueAggregationOptionsOneOf as ValueAggregationOptionsOneOf,
      storesCatalogV3Product_universal_d_NestedAggregationType as NestedAggregationType,
      storesCatalogV3Product_universal_d_RangeAggregation as RangeAggregation,
      storesCatalogV3Product_universal_d_ScalarAggregation as ScalarAggregation,
      storesCatalogV3Product_universal_d_DateHistogramAggregation as DateHistogramAggregation,
      storesCatalogV3Product_universal_d_Interval as Interval,
      storesCatalogV3Product_universal_d_NestedAggregationItem as NestedAggregationItem,
      storesCatalogV3Product_universal_d_NestedAggregationItemKindOneOf as NestedAggregationItemKindOneOf,
      storesCatalogV3Product_universal_d_AggregationType as AggregationType,
      storesCatalogV3Product_universal_d_NestedAggregation as NestedAggregation,
      storesCatalogV3Product_universal_d_GroupByAggregation as GroupByAggregation,
      storesCatalogV3Product_universal_d_GroupByAggregationKindOneOf as GroupByAggregationKindOneOf,
      storesCatalogV3Product_universal_d_SearchDetails as SearchDetails,
      storesCatalogV3Product_universal_d_Mode as Mode,
      storesCatalogV3Product_universal_d_CursorPaging as CursorPaging,
      storesCatalogV3Product_universal_d_SearchProductsResponse as SearchProductsResponse,
      storesCatalogV3Product_universal_d_CursorPagingMetadata as CursorPagingMetadata,
      storesCatalogV3Product_universal_d_Cursors as Cursors,
      storesCatalogV3Product_universal_d_AggregationData as AggregationData,
      storesCatalogV3Product_universal_d_ValueAggregationResult as ValueAggregationResult,
      storesCatalogV3Product_universal_d_RangeAggregationResult as RangeAggregationResult,
      storesCatalogV3Product_universal_d_NestedAggregationResults as NestedAggregationResults,
      storesCatalogV3Product_universal_d_NestedAggregationResultsResultOneOf as NestedAggregationResultsResultOneOf,
      storesCatalogV3Product_universal_d_ValueResults as ValueResults,
      storesCatalogV3Product_universal_d_RangeResults as RangeResults,
      storesCatalogV3Product_universal_d_ScalarResult as ScalarResult,
      storesCatalogV3Product_universal_d_NestedValueAggregationResult as NestedValueAggregationResult,
      storesCatalogV3Product_universal_d_ValueResult as ValueResult,
      storesCatalogV3Product_universal_d_RangeResult as RangeResult,
      storesCatalogV3Product_universal_d_NestedResultsScalarResult as NestedResultsScalarResult,
      storesCatalogV3Product_universal_d_NestedResultValue as NestedResultValue,
      storesCatalogV3Product_universal_d_NestedResultValueResultOneOf as NestedResultValueResultOneOf,
      storesCatalogV3Product_universal_d_Results as Results,
      storesCatalogV3Product_universal_d_DateHistogramResult as DateHistogramResult,
      storesCatalogV3Product_universal_d_GroupByValueResults as GroupByValueResults,
      storesCatalogV3Product_universal_d_DateHistogramResults as DateHistogramResults,
      storesCatalogV3Product_universal_d_NestedResults as NestedResults,
      storesCatalogV3Product_universal_d_AggregationResults as AggregationResults,
      storesCatalogV3Product_universal_d_AggregationResultsResultOneOf as AggregationResultsResultOneOf,
      storesCatalogV3Product_universal_d_EventuallyConsistentQueryProductsRequest as EventuallyConsistentQueryProductsRequest,
      storesCatalogV3Product_universal_d_CursorQuery as CursorQuery,
      storesCatalogV3Product_universal_d_CursorQueryPagingMethodOneOf as CursorQueryPagingMethodOneOf,
      storesCatalogV3Product_universal_d_EventuallyConsistentQueryProductsResponse as EventuallyConsistentQueryProductsResponse,
      storesCatalogV3Product_universal_d_DeprecatedSearchProductsWithOffsetRequest as DeprecatedSearchProductsWithOffsetRequest,
      storesCatalogV3Product_universal_d_PlatformOffsetSearch as PlatformOffsetSearch,
      storesCatalogV3Product_universal_d_PlatformOffsetSearchPagingMethodOneOf as PlatformOffsetSearchPagingMethodOneOf,
      storesCatalogV3Product_universal_d_PlatformPaging as PlatformPaging,
      storesCatalogV3Product_universal_d_DeprecatedSearchProductsWithOffsetResponse as DeprecatedSearchProductsWithOffsetResponse,
      storesCatalogV3Product_universal_d_PagingMetadata as PagingMetadata,
      storesCatalogV3Product_universal_d_CountProductsRequest as CountProductsRequest,
      storesCatalogV3Product_universal_d_CountProductsResponse as CountProductsResponse,
      storesCatalogV3Product_universal_d_DoNotCallBulkCreateProductsRequest as DoNotCallBulkCreateProductsRequest,
      storesCatalogV3Product_universal_d_DoNotCallBulkCreateProductsResponse as DoNotCallBulkCreateProductsResponse,
      storesCatalogV3Product_universal_d_DoNotCallBulkUpdateProductsRequest as DoNotCallBulkUpdateProductsRequest,
      storesCatalogV3Product_universal_d_MaskedProduct as MaskedProduct,
      storesCatalogV3Product_universal_d_DoNotCallBulkUpdateProductsResponse as DoNotCallBulkUpdateProductsResponse,
      storesCatalogV3Product_universal_d_BulkUpdateProductsByFilterRequest as BulkUpdateProductsByFilterRequest,
      storesCatalogV3Product_universal_d_BulkUpdateProductsByFilterResponse as BulkUpdateProductsByFilterResponse,
      storesCatalogV3Product_universal_d_BulkDeleteProductsRequest as BulkDeleteProductsRequest,
      storesCatalogV3Product_universal_d_BulkDeleteProductsResponse as BulkDeleteProductsResponse,
      storesCatalogV3Product_universal_d_BulkDeleteProductsByFilterRequest as BulkDeleteProductsByFilterRequest,
      storesCatalogV3Product_universal_d_BulkDeleteProductsByFilterResponse as BulkDeleteProductsByFilterResponse,
      storesCatalogV3Product_universal_d_BulkAddInfoSectionsToProductsByFilterRequest as BulkAddInfoSectionsToProductsByFilterRequest,
      storesCatalogV3Product_universal_d_BulkAddInfoSectionsToProductsByFilterResponse as BulkAddInfoSectionsToProductsByFilterResponse,
      storesCatalogV3Product_universal_d_BulkAddInfoSectionsToProductsRequest as BulkAddInfoSectionsToProductsRequest,
      storesCatalogV3Product_universal_d_ProductIdWithRevision as ProductIdWithRevision,
      storesCatalogV3Product_universal_d_BulkAddInfoSectionsToProductsResponse as BulkAddInfoSectionsToProductsResponse,
      storesCatalogV3Product_universal_d_BulkRemoveInfoSectionsFromProductsByFilterRequest as BulkRemoveInfoSectionsFromProductsByFilterRequest,
      storesCatalogV3Product_universal_d_BulkRemoveInfoSectionsFromProductsByFilterResponse as BulkRemoveInfoSectionsFromProductsByFilterResponse,
      storesCatalogV3Product_universal_d_BulkRemoveInfoSectionsFromProductsRequest as BulkRemoveInfoSectionsFromProductsRequest,
      storesCatalogV3Product_universal_d_BulkRemoveInfoSectionsFromProductsResponse as BulkRemoveInfoSectionsFromProductsResponse,
      storesCatalogV3Product_universal_d_BulkUpdateVariantsByFilterRequest as BulkUpdateVariantsByFilterRequest,
      storesCatalogV3Product_universal_d_BulkUpdateVariantsByFilterResponse as BulkUpdateVariantsByFilterResponse,
      storesCatalogV3Product_universal_d_BulkAdjustVariantsByFilterRequest as BulkAdjustVariantsByFilterRequest,
      storesCatalogV3Product_universal_d_AdjustValue as AdjustValue,
      storesCatalogV3Product_universal_d_AdjustValueAdjustValueOneOf as AdjustValueAdjustValueOneOf,
      storesCatalogV3Product_universal_d_UnsignedAdjustValue as UnsignedAdjustValue,
      storesCatalogV3Product_universal_d_UnsignedAdjustValueAdjustValueOneOf as UnsignedAdjustValueAdjustValueOneOf,
      storesCatalogV3Product_universal_d_BulkAdjustVariantsByFilterResponse as BulkAdjustVariantsByFilterResponse,
      storesCatalogV3Product_universal_d_catalogCreateProduct as catalogCreateProduct,
      storesCatalogV3Product_universal_d_CatalogCreateProductOptions as CatalogCreateProductOptions,
      storesCatalogV3Product_universal_d_catalogUpdateProduct as catalogUpdateProduct,
      storesCatalogV3Product_universal_d_CatalogUpdateProduct as CatalogUpdateProduct,
      storesCatalogV3Product_universal_d_CatalogUpdateProductOptions as CatalogUpdateProductOptions,
      storesCatalogV3Product_universal_d_catalogBulkCreateProducts as catalogBulkCreateProducts,
      storesCatalogV3Product_universal_d_CatalogBulkCreateProductsOptions as CatalogBulkCreateProductsOptions,
      storesCatalogV3Product_universal_d_catalogBulkUpdateProducts as catalogBulkUpdateProducts,
      storesCatalogV3Product_universal_d_CatalogBulkUpdateProductsOptions as CatalogBulkUpdateProductsOptions,
      storesCatalogV3Product_universal_d_getProduct as getProduct,
      storesCatalogV3Product_universal_d_GetProductOptions as GetProductOptions,
      storesCatalogV3Product_universal_d_getProductBySlug as getProductBySlug,
      storesCatalogV3Product_universal_d_GetProductBySlugOptions as GetProductBySlugOptions,
      storesCatalogV3Product_universal_d_deleteProduct as deleteProduct,
      storesCatalogV3Product_universal_d_searchProducts as searchProducts,
      storesCatalogV3Product_universal_d_SearchProductsOptions as SearchProductsOptions,
      storesCatalogV3Product_universal_d_eventuallyConsistentQueryProducts as eventuallyConsistentQueryProducts,
      storesCatalogV3Product_universal_d_EventuallyConsistentQueryProductsOptions as EventuallyConsistentQueryProductsOptions,
      storesCatalogV3Product_universal_d_ProductsQueryResult as ProductsQueryResult,
      storesCatalogV3Product_universal_d_ProductsQueryBuilder as ProductsQueryBuilder,
      storesCatalogV3Product_universal_d_countProducts as countProducts,
      storesCatalogV3Product_universal_d_CountProductsOptions as CountProductsOptions,
      storesCatalogV3Product_universal_d_bulkUpdateProductsByFilter as bulkUpdateProductsByFilter,
      storesCatalogV3Product_universal_d_BulkUpdateProductsByFilterOptions as BulkUpdateProductsByFilterOptions,
      storesCatalogV3Product_universal_d_bulkDeleteProducts as bulkDeleteProducts,
      storesCatalogV3Product_universal_d_bulkDeleteProductsByFilter as bulkDeleteProductsByFilter,
      storesCatalogV3Product_universal_d_bulkAddInfoSectionsToProductsByFilter as bulkAddInfoSectionsToProductsByFilter,
      storesCatalogV3Product_universal_d_BulkAddInfoSectionsToProductsByFilterOptions as BulkAddInfoSectionsToProductsByFilterOptions,
      storesCatalogV3Product_universal_d_bulkAddInfoSectionsToProducts as bulkAddInfoSectionsToProducts,
      storesCatalogV3Product_universal_d_BulkAddInfoSectionsToProductsOptions as BulkAddInfoSectionsToProductsOptions,
      storesCatalogV3Product_universal_d_bulkRemoveInfoSectionsFromProductsByFilter as bulkRemoveInfoSectionsFromProductsByFilter,
      storesCatalogV3Product_universal_d_BulkRemoveInfoSectionsFromProductsByFilterOptions as BulkRemoveInfoSectionsFromProductsByFilterOptions,
      storesCatalogV3Product_universal_d_bulkRemoveInfoSectionsFromProducts as bulkRemoveInfoSectionsFromProducts,
      storesCatalogV3Product_universal_d_BulkRemoveInfoSectionsFromProductsOptions as BulkRemoveInfoSectionsFromProductsOptions,
      storesCatalogV3Product_universal_d_bulkUpdateVariantsByFilter as bulkUpdateVariantsByFilter,
      storesCatalogV3Product_universal_d_BulkUpdateVariantsByFilterOptions as BulkUpdateVariantsByFilterOptions,
      storesCatalogV3Product_universal_d_bulkAdjustVariantsByFilter as bulkAdjustVariantsByFilter,
      storesCatalogV3Product_universal_d_BulkAdjustVariantsByFilterOptions as BulkAdjustVariantsByFilterOptions,
    };
  }
  
  export { storesCatalogV3Product_universal_d as product };
}
