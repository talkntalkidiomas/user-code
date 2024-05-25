declare module "interfaces-forms-v4-submission" {
  type BusinessError<T = unknown> = {
      __tag: 'BusinessError';
      httpCode: string;
      errorDescription: string;
      applicationCode: string;
      messageSchema: string;
      data: T;
  };
  
  interface ValidateSubmissionRequest extends ValidateSubmissionRequestActionsOneOf {
      /** Payload sent on update action. */
      updateOptions?: UpdateOptions;
      /** Payload sent on create action. */
      createOptions?: CreateOptions;
      /** Submission to be validated */
      submission: FormSubmission;
      /** Form to validate with. */
      form: Form;
      type: ActionType;
  }
  /** @oneof */
  interface ValidateSubmissionRequestActionsOneOf {
      /** Payload sent on update action. */
      updateOptions?: UpdateOptions;
      /** Payload sent on create action. */
      createOptions?: CreateOptions;
  }
  /** Form submission that was created or retrieved. */
  interface FormSubmission {
      /**
       * Submission ID.
       * @readonly
       */
      _id?: string | null;
      /** ID of the form which submission belongs to. */
      formId?: string;
      /**
       * The app which the form submissions belong to. For example, the namespace for the Wix Forms App is `"wix.form_app.form"`. The namespace of a submission can be retrieved using the Get Submission endpoint.
       * @readonly
       */
      namespace?: string;
      /**
       * Status of the submission.
       * - `PENDING`: When a submission has been created, but has not yet been recorded in the submission table of the forms dashboard.
       * - `PAYMENT_WAITING`: When a submission of form, requiring payment, has been created.
       * - `PAYMENT_CANCELED`: When a submission's of form, requiring payment, order has been canceled.
       * - `CONFIRMED`: When a submission is recorded in the submissions table of the forms dashboard.
       */
      status?: SubmissionStatus;
      /** Submission values where key is the form field and value is the data submitted for the given field. */
      submissions?: Record<string, any>;
      /**
       * Date and time the form submission was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the form submission was updated.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Revision number, which increments by 1 each time the form submission is updated. To prevent conflicting changes, the existing revision must be used when updating a form submission.
       * @readonly
       */
      revision?: string | null;
      /**
       * Renamed to submitter
       * @internal
       * @readonly
       */
      owner?: Owner;
      /**
       * ID of the creator of the form submission.
       * @readonly
       */
      submitter?: Submitter;
      /** Whether the submission was read by a site collaborator with permissions to manage submissions. */
      seen?: boolean;
      /**
       * ID of the order related to submission (applicable if form has payments added).
       * @readonly
       */
      orderId?: string | null;
      /** Data extensions ExtendedFields. */
      extendedFields?: ExtendedFields;
  }
  enum SubmissionStatus {
      UNDEFINED = "UNDEFINED",
      PENDING = "PENDING",
      CONFIRMED = "CONFIRMED",
      PAYMENT_WAITING = "PAYMENT_WAITING",
      PAYMENT_CANCELED = "PAYMENT_CANCELED"
  }
  interface Owner extends OwnerOwnerOneOf {
      /** Member ID. */
      memberId?: string | null;
      /** Visitor ID. */
      visitorId?: string | null;
      /** Service ID. */
      applicationId?: string | null;
      /** User ID. */
      userId?: string | null;
  }
  /** @oneof */
  interface OwnerOwnerOneOf {
      /** Member ID. */
      memberId?: string | null;
      /** Visitor ID. */
      visitorId?: string | null;
      /** Service ID. */
      applicationId?: string | null;
      /** User ID. */
      userId?: string | null;
  }
  interface Submitter extends SubmitterSubmitterOneOf {
      /** Member ID. */
      memberId?: string | null;
      /** Visitor ID. */
      visitorId?: string | null;
      /** Application ID. */
      applicationId?: string | null;
      /** User ID. */
      userId?: string | null;
  }
  /** @oneof */
  interface SubmitterSubmitterOneOf {
      /** Member ID. */
      memberId?: string | null;
      /** Visitor ID. */
      visitorId?: string | null;
      /** Application ID. */
      applicationId?: string | null;
      /** User ID. */
      userId?: string | null;
  }
  interface ExtendedFields {
      /**
       * Extended field data. Each key corresponds to the namespace of the app that created the extended fields.
       * The value of each key is structured according to the schema defined when the extended fields were configured.
       *
       * You can only access fields for which you have the appropriate permissions.
       */
      namespaces?: Record<string, Record<string, any>>;
  }
  interface Form {
      /**
       * Form ID.
       * @readonly
       */
      _id?: string | null;
      /** List of form fields that represent input elements. */
      fields?: FormField[];
      /**
       * List of form fields that represent input elements.
       * @readonly
       */
      fieldsV2?: FormFieldV2[];
      /** Defines the layout for form fields in each submission step. */
      steps?: Step[];
      /** Form rules, can be applied to layout and items properties. */
      rules?: FormRule[];
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes. For an update operation to succeed, you MUST pass the latest revision.
       * @readonly
       */
      revision?: string | null;
      /**
       * Date of creation.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date of last update.
       * @readonly
       */
      _updatedDate?: Date;
      /** Properties of the form. */
      properties?: FormProperties;
      /**
       * Fields which were soft deleted.
       * @readonly
       */
      deletedFields?: FormField[];
      /**
       * List of form fields that represent input elements.
       * @readonly
       */
      deletedFieldsV2?: FormFieldV2[];
      /**
       * Regular forms can be freely modified.
       * Extensions are copied from templates and might have restrictions.
       * @readonly
       */
      kind?: Kind;
      /**
       * Defines triggers that will be executed after the submission, for the submissions based on this schema.
       * Forms provide a set of predefined triggers that allow it to assign specific business cases to created forms.
       */
      postSubmissionTriggers?: PostSubmissionTriggers;
      /** Data extensions ExtendedFields. */
      extendedFields?: ExtendedFields;
      /** Identifies the namespace that the form belongs to. */
      namespace?: string;
      /**
       * Nested forms.
       * @internal
       * @readonly
       */
      nestedForms?: NestedForm[];
      /**
       * Media folder ID.
       * @readonly
       */
      mediaFolderId?: string | null;
  }
  interface FormField {
      /** Item ID. */
      _id?: string;
      /** Definition of a target where the value of field belongs. */
      target?: string | null;
      /** Validation of field output value. */
      validation?: Validation;
      /** Mark the field as containing personal information. This will encrypt user data when storing it. */
      pii?: boolean;
      /** Whether the field is hidden. */
      hidden?: boolean;
      /** Field view properties. */
      view?: Record<string, any> | null;
      /**
       * Nested form ID.
       * @internal
       */
      nestedFormId?: string | null;
      /**
       * Nested form overrides.
       * @internal
       */
      nestedFormOverrides?: NestedFormOverrides;
  }
  interface StringType {
      /** Minimum length. */
      minLength?: number | null;
      /** Maximum length. */
      maxLength?: number | null;
      /** Pattern for a regular expression match. */
      pattern?: string | null;
      /** Format of a string. */
      format?: Format;
      /** Custom error messages when validation fails. */
      errorMessages?: StringErrorMessages;
      /** List of allowed values. */
      enum?: string[] | null;
  }
  enum Format {
      UNDEFINED = "UNDEFINED",
      DATE = "DATE",
      TIME = "TIME",
      DATE_TIME = "DATE_TIME",
      EMAIL = "EMAIL",
      URL = "URL",
      UUID = "UUID",
      PHONE = "PHONE",
      URI = "URI",
      HOSTNAME = "HOSTNAME",
      COLOR_HEX = "COLOR_HEX",
      CURRENCY = "CURRENCY",
      LANGUAGE = "LANGUAGE"
  }
  interface StringErrorMessages {
      /** Default error message on invalid validation. */
      default?: string | null;
  }
  interface NumberType {
      /** Inclusive maximum value. */
      maximum?: number | null;
      /** Inclusive minimum value. */
      minimum?: number | null;
      /** Multiple of value. */
      multipleOf?: number | null;
      /** Custom error message when validation fails. */
      errorMessages?: NumberErrorMessages;
      /** List of allowed values. */
      enum?: number[] | null;
  }
  interface NumberErrorMessages {
      /** Default error message on invalid validation. */
      default?: string | null;
  }
  interface IntegerType {
      /** Minimum value. */
      maximum?: number | null;
      /** Maximum value. */
      minimum?: number | null;
      /** Multiple of value. */
      multipleOf?: number | null;
      /** Custom error message when validation fails. */
      errorMessages?: NumberErrorMessages;
      /** List of allowed values. */
      enum?: number[] | null;
  }
  interface BooleanType {
      /** Custom error message when validation fails. */
      errorMessages?: BooleanErrorMessages;
      /** List of allowed values. */
      enum?: boolean[];
  }
  interface BooleanErrorMessages {
      /** Default error message on invalid validation. */
      default?: string | null;
  }
  interface ArrayType {
      /** Maximum amount of array elements. */
      maxItems?: number | null;
      /** Minimum amount of array elements. */
      minItems?: number | null;
      /** Type of items allowed in array. */
      items?: ArrayItems;
      /** Custom error message when validation fails. */
      errorMessages?: ArrayErrorMessages;
  }
  interface ObjectType {
      /** Description of object properties. */
      properties?: Record<string, PropertiesType>;
      /** Custom error message when validation fails. */
      errorMessages?: ObjectErrorMessages;
  }
  interface PropertiesType extends PropertiesTypePropertiesTypeOneOf {
      /** String type validation for property. */
      string?: StringType;
      /** Number type validation for property. */
      number?: NumberType;
      /** Boolean type validation for property. */
      boolean?: BooleanType;
      /** Integer type validation for property. */
      integer?: IntegerType;
      /** Array type validation for property. */
      array?: ArrayType;
      /** Whether the property is required. */
      required?: boolean;
  }
  /** @oneof */
  interface PropertiesTypePropertiesTypeOneOf {
      /** String type validation for property. */
      string?: StringType;
      /** Number type validation for property. */
      number?: NumberType;
      /** Boolean type validation for property. */
      boolean?: BooleanType;
      /** Integer type validation for property. */
      integer?: IntegerType;
      /** Array type validation for property. */
      array?: ArrayType;
  }
  interface ObjectErrorMessages {
      /** Default error message on invalid validation. */
      default?: string | null;
  }
  interface ArrayItems extends ArrayItemsItemsOneOf {
      /** String type validation for items. */
      string?: StringType;
      /** Number type validation for items. */
      number?: NumberType;
      /** Boolean type validation for items. */
      boolean?: BooleanType;
      /** Integer type validation for items. */
      integer?: IntegerType;
      /** Object type validation for items */
      object?: ObjectType;
  }
  /** @oneof */
  interface ArrayItemsItemsOneOf {
      /** String type validation for items. */
      string?: StringType;
      /** Number type validation for items. */
      number?: NumberType;
      /** Boolean type validation for items. */
      boolean?: BooleanType;
      /** Integer type validation for items. */
      integer?: IntegerType;
      /** Object type validation for items */
      object?: ObjectType;
  }
  interface ArrayErrorMessages {
      /** Default error message on invalid validation. */
      default?: string | null;
  }
  interface PredefinedValidation {
      /** Format of predefined validation. */
      format?: ValidationFormat;
  }
  enum ValidationFormat {
      UNDEFINED = "UNDEFINED",
      /** File upload validation. */
      WIX_FILE = "WIX_FILE",
      /** Payment validation (described in payment trigger). */
      PAYMENT = "PAYMENT"
  }
  interface NestedFormFieldOverrides {
      /** Whether the field is required. Leave blank for no override. */
      required?: boolean | null;
      /** Whether the field is hidden. Leave blank for no override. */
      hidden?: boolean | null;
  }
  interface Validation extends ValidationValidationOneOf {
      /** Validation of string type. */
      string?: StringType;
      /** Validation of number type. */
      number?: NumberType;
      /** Validation of integer type. */
      integer?: IntegerType;
      /** Validation of boolean type. */
      boolean?: BooleanType;
      /** Validation of array type. */
      array?: ArrayType;
      /** Validation of object type. */
      object?: ObjectType;
      /** Predefined validation of specific format */
      predefined?: PredefinedValidation;
      /** Whether the field is required. */
      required?: boolean;
  }
  /** @oneof */
  interface ValidationValidationOneOf {
      /** Validation of string type. */
      string?: StringType;
      /** Validation of number type. */
      number?: NumberType;
      /** Validation of integer type. */
      integer?: IntegerType;
      /** Validation of boolean type. */
      boolean?: BooleanType;
      /** Validation of array type. */
      array?: ArrayType;
      /** Validation of object type. */
      object?: ObjectType;
      /** Predefined validation of specific format */
      predefined?: PredefinedValidation;
  }
  interface NestedFormOverrides {
      /** Field overrides by field ID */
      fieldOverrides?: Record<string, NestedFormFieldOverrides>;
  }
  interface FormFieldV2 extends FormFieldV2FieldTypeOptionsOneOf {
      /** Field accept input of data */
      inputOptions?: InputField;
      /** Field for displaying information */
      displayOptions?: DisplayField;
      /** Submit button of the form */
      submitOptions?: SubmitButton;
      /** Field id. */
      _id?: string;
      /**
       * Whether the field is hidden.
       * Default: false
       */
      hidden?: boolean;
      /** Custom identification of field, can be used to specify exceptional behaviour of client for specific field */
      identifier?: string | null;
      /**
       * Type of the field
       * @readonly
       */
      fieldType?: FieldType;
  }
  /** @oneof */
  interface FormFieldV2FieldTypeOptionsOneOf {
      /** Field accept input of data */
      inputOptions?: InputField;
      /** Field for displaying information */
      displayOptions?: DisplayField;
      /** Submit button of the form */
      submitOptions?: SubmitButton;
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
      target?: LinkTarget;
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
  enum LinkTarget {
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
  interface SettingsPermissions {
      /** Sets who can view the poll results. */
      view?: ViewRole;
      /** Sets who can vote. */
      vote?: VoteRole;
      /** Sets whether one voter can vote multiple times. */
      allowMultipleVotes?: boolean | null;
  }
  interface PollOption {
      /** Option ID. */
      _id?: string | null;
      /** Option title. */
      title?: string | null;
      /** The image displayed with the option. */
      image?: Media;
  }
  interface Settings {
      /** Permissions settings for voting. */
      permissions?: SettingsPermissions;
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
      options?: PollOption[];
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
  interface RadioGroupOption {
      /** Selectable option label */
      label?: string | null;
      /** Selectable option value, which is saved to DB. */
      value?: string | null;
      /** Flag identifying that option should be selected by default */
      default?: boolean;
      /** Option id. Used as binding for translations */
      _id?: string;
  }
  interface RadioGroupCustomOption {
      /** Label of custom option input */
      label?: string | null;
      /** Placeholder of custom option input */
      placeholder?: string | null;
  }
  interface DropdownOption {
      /** Selectable option label */
      label?: string | null;
      /** Selectable option value, which is saved to DB. */
      value?: string | null;
      /** Flag identifying that option should be selected by default */
      default?: boolean;
      /** Option id. Used as binding for translations */
      _id?: string;
  }
  interface DropdownCustomOption {
      /** Label of custom option input */
      label?: string | null;
      /** Placeholder of custom option input */
      placeholder?: string | null;
  }
  interface InputFieldStringType {
      /** Minimum length. */
      minLength?: number | null;
      /** Maximum length. */
      maxLength?: number | null;
      /** Pattern for a regular expression match. */
      pattern?: string | null;
      /** Format of a string. */
      format?: FormatEnumFormat;
      /** Custom error messages when validation fails. */
      errorMessages?: InputFieldStringErrorMessages;
      /** List of allowed values. */
      enum?: string[] | null;
  }
  enum FormatEnumFormat {
      UNDEFINED = "UNDEFINED",
      DATE = "DATE",
      TIME = "TIME",
      DATE_TIME = "DATE_TIME",
      EMAIL = "EMAIL",
      URL = "URL",
      UUID = "UUID",
      PHONE = "PHONE",
      URI = "URI",
      HOSTNAME = "HOSTNAME",
      COLOR_HEX = "COLOR_HEX",
      CURRENCY = "CURRENCY",
      LANGUAGE = "LANGUAGE"
  }
  interface InputFieldStringErrorMessages {
      /** Default error message on invalid validation. */
      default?: string | null;
  }
  enum StringComponentType {
      UNKNOWN = "UNKNOWN",
      TEXT_INPUT = "TEXT_INPUT",
      RADIO_GROUP = "RADIO_GROUP",
      DROPDOWN = "DROPDOWN"
  }
  interface TextInput {
      /** Label of the field */
      label?: string | null;
      /** Description of the field */
      description?: RichContent;
      /** Placeholder for the value input */
      placeholder?: string | null;
      /**
       * Flag identifying to hide or not label
       * Default: true
       */
      showLabel?: boolean | null;
  }
  interface RadioGroup {
      /** Label of the field */
      label?: string | null;
      /** Description of the field */
      description?: RichContent;
      /**
       * Flag identifying to show option allowing input custom value
       * List of options to select from
       */
      options?: RadioGroupOption[];
      /**
       * Flag identifying to hide or not label
       * Default: true
       */
      showLabel?: boolean | null;
      /** Option which can be specified by UoU, enabled when this object is specified. */
      customOption?: RadioGroupCustomOption;
  }
  interface Dropdown {
      /** Label of the field */
      label?: string | null;
      /** Description of the field */
      description?: RichContent;
      /** List of options to select from */
      options?: DropdownOption[];
      /**
       * Flag identifying to hide or not label
       * Default: true
       */
      showLabel?: boolean | null;
      /** Option which can be specified by UoU, enabled when this object is specified. */
      customOption?: DropdownCustomOption;
      /** Placeholder of dropdown input */
      placeholder?: string | null;
  }
  interface InputFieldNumberType {
      /** Inclusive maximum value. */
      maximum?: number | null;
      /** Inclusive minimum value. */
      minimum?: number | null;
      /** Multiple of value. */
      multipleOf?: number | null;
      /** Custom error message when validation fails. */
      errorMessages?: InputFieldNumberErrorMessages;
      /** List of allowed values. */
      enum?: number[] | null;
  }
  interface InputFieldNumberErrorMessages {
      /** Default error message on invalid validation. */
      default?: string | null;
  }
  enum NumberComponentType {
      UNKNOWN = "UNKNOWN",
      NUMBER_INPUT = "NUMBER_INPUT"
  }
  interface NumberInput {
      /** Label of the field */
      label?: string | null;
      /** Description of the field */
      description?: RichContent;
      /** Placeholder for the value input */
      placeholder?: string | null;
      /**
       * Flag identifying to hide or not label
       * Default: true
       */
      showLabel?: boolean | null;
  }
  interface InputFieldBooleanType {
      /** Custom error message when validation fails. */
      errorMessages?: InputFieldBooleanErrorMessages;
      /** List of allowed values. */
      enum?: boolean[];
  }
  interface InputFieldBooleanErrorMessages {
      /** Default error message on invalid validation. */
      default?: string | null;
  }
  enum BooleanComponentType {
      UNKNOWN = "UNKNOWN",
      CHECKBOX = "CHECKBOX"
  }
  interface Checkbox {
      /** Label of the field */
      label?: RichContent;
  }
  interface MediaItem extends MediaItemMediaOneOf {
      /** WixMedia image. */
      image?: string;
  }
  /** @oneof */
  interface MediaItemMediaOneOf {
      /** WixMedia image. */
      image?: string;
  }
  interface Option {
      /** Selectable option label */
      label?: string | null;
      /** Selectable option value, which is saved to DB. */
      value?: any;
      /** Flag identifying that option should be selected by default */
      default?: boolean;
      /** Option id. Used as binding for translations */
      _id?: string;
      /** Media item. Media, associated with option, like image. */
      media?: MediaItem;
  }
  interface CustomOption {
      /** Label of custom option input */
      label?: string | null;
      /** Placeholder of custom option input */
      placeholder?: string | null;
  }
  interface InputFieldArrayType {
      /** Maximum amount of array elements. */
      maxItems?: number | null;
      /** Minimum amount of array elements. */
      minItems?: number | null;
      /** Type of items allowed in array. */
      items?: ArrayTypeArrayItems;
      /** Custom error message when validation fails. */
      errorMessages?: InputFieldArrayErrorMessages;
  }
  enum ItemType {
      UNKNOWN = "UNKNOWN",
      STRING = "STRING",
      NUMBER = "NUMBER",
      BOOLEAN = "BOOLEAN",
      INTEGER = "INTEGER",
      OBJECT = "OBJECT"
  }
  interface InputFieldIntegerType {
      /** Maximum value. */
      maximum?: number | null;
      /** Minimum value. */
      minimum?: number | null;
      /** Multiple of value. */
      multipleOf?: number | null;
      /** Custom error message when validation fails. */
      errorMessages?: InputFieldNumberErrorMessages;
      /** List of allowed values. */
      enum?: number[] | null;
  }
  interface InputFieldObjectType {
      /** Description of object properties. */
      properties?: Record<string, ObjectTypePropertiesType>;
      /** Custom error message when validation fails. */
      errorMessages?: InputFieldObjectErrorMessages;
  }
  enum PropertiesTypePropertiesType {
      UNKNOWN = "UNKNOWN",
      STRING = "STRING",
      NUMBER = "NUMBER",
      BOOLEAN = "BOOLEAN",
      INTEGER = "INTEGER",
      ARRAY = "ARRAY"
  }
  interface ObjectTypePropertiesType extends ObjectTypePropertiesTypePropertiesTypeOptionsOneOf {
      /** String type validation for property. */
      stringOptions?: InputFieldStringType;
      /** Number type validation for property. */
      numberOptions?: InputFieldNumberType;
      /** Boolean type validation for property. */
      booleanOptions?: InputFieldBooleanType;
      /** Integer type validation for property. */
      integerOptions?: InputFieldIntegerType;
      /** Array type validation for property. */
      arrayOptions?: InputFieldArrayType;
      /**
       * Type of object properties
       * @readonly
       */
      propertiesType?: PropertiesTypePropertiesType;
      /** Whether the property is required. */
      required?: boolean;
  }
  /** @oneof */
  interface ObjectTypePropertiesTypePropertiesTypeOptionsOneOf {
      /** String type validation for property. */
      stringOptions?: InputFieldStringType;
      /** Number type validation for property. */
      numberOptions?: InputFieldNumberType;
      /** Boolean type validation for property. */
      booleanOptions?: InputFieldBooleanType;
      /** Integer type validation for property. */
      integerOptions?: InputFieldIntegerType;
      /** Array type validation for property. */
      arrayOptions?: InputFieldArrayType;
  }
  interface InputFieldObjectErrorMessages {
      /** Default error message on invalid validation. */
      default?: string | null;
  }
  interface ArrayTypeArrayItems extends ArrayTypeArrayItemsItemTypeOptionsOneOf {
      /** String type validation for items. */
      stringOptions?: InputFieldStringType;
      /** Number type validation for items. */
      numberOptions?: InputFieldNumberType;
      /** Boolean type validation for items. */
      booleanOptions?: InputFieldBooleanType;
      /** Integer type validation for items. */
      integerOptions?: InputFieldIntegerType;
      /** Object type validation for items */
      objectOptions?: InputFieldObjectType;
      /**
       * Type of array items
       * @readonly
       */
      itemType?: ItemType;
  }
  /** @oneof */
  interface ArrayTypeArrayItemsItemTypeOptionsOneOf {
      /** String type validation for items. */
      stringOptions?: InputFieldStringType;
      /** Number type validation for items. */
      numberOptions?: InputFieldNumberType;
      /** Boolean type validation for items. */
      booleanOptions?: InputFieldBooleanType;
      /** Integer type validation for items. */
      integerOptions?: InputFieldIntegerType;
      /** Object type validation for items */
      objectOptions?: InputFieldObjectType;
  }
  interface InputFieldArrayErrorMessages {
      /** Default error message on invalid validation. */
      default?: string | null;
  }
  enum ComponentType {
      UNKNOWN = "UNKNOWN",
      CHECKBOX_GROUP = "CHECKBOX_GROUP"
  }
  interface CheckboxGroup {
      /** Label of the field */
      label?: string | null;
      /** Description of the field */
      description?: RichContent;
      /** List of options to select from */
      options?: Option[];
      /**
       * Flag identifying to hide or not label
       * Default: true
       */
      showLabel?: boolean | null;
      /** Option which can be specified by UoU, enabled when this object is specified. */
      customOption?: CustomOption;
  }
  enum UploadFileFormat {
      UNDEFINED = "UNDEFINED",
      /** Video files */
      VIDEO = "VIDEO",
      /** Image files */
      IMAGE = "IMAGE",
      /** Audio files */
      AUDIO = "AUDIO",
      /** Document files */
      DOCUMENT = "DOCUMENT"
  }
  enum WixFileComponentType {
      UNKNOWN = "UNKNOWN",
      FILE_UPLOAD = "FILE_UPLOAD"
  }
  interface FileUpload {
      /** Selectable option label */
      label?: string | null;
      /** Description of the field */
      description?: RichContent;
      /**
       * Flag identifying to hide or not label
       * Default: true
       */
      showLabel?: boolean | null;
      /** Text on upload button */
      buttonText?: string | null;
      /** Amount of files allowed to upload */
      fileLimit?: number;
      /** Supported file formats for upload */
      uploadFileFormats?: UploadFileFormat[];
      /** Custom text which appears when file is uploaded, if missing file name will be shown */
      explanationText?: string | null;
  }
  interface CheckboxGroupOption {
      /** Selectable option label. */
      label?: string | null;
      /** Selectable option value, which is saved to DB. */
      value?: any;
      /** Option id. Used as binding for translations. Corresponds to product id, found in payment trigger field's products list. */
      _id?: string;
      /** Media item. Media, associated with option, like image. */
      media?: MediaItem;
  }
  enum PaymentComponentType {
      UNKNOWN = "UNKNOWN",
      CHECKBOX_GROUP = "CHECKBOX_GROUP"
  }
  interface PaymentCheckboxGroup {
      /** Label of the field. */
      label?: string | null;
      /** Description of the field. */
      description?: RichContent;
      /** List of options to select from. */
      options?: CheckboxGroupOption[];
  }
  enum InputType {
      UNKNOWN = "UNKNOWN",
      STRING = "STRING",
      NUMBER = "NUMBER",
      BOOLEAN = "BOOLEAN",
      ARRAY = "ARRAY",
      OBJECT = "OBJECT",
      WIX_FILE = "WIX_FILE",
      PAYMENT = "PAYMENT"
  }
  interface _String extends _StringComponentTypeOptionsOneOf {
      /** Text input field */
      textInputOptions?: TextInput;
      /** Selection field as radio group */
      radioGroupOptions?: RadioGroup;
      /** Selection field as drop down */
      dropdownOptions?: Dropdown;
      /** Validation of field output value. */
      validation?: InputFieldStringType;
      /**
       * Component type of the string input field
       * @readonly
       */
      componentType?: StringComponentType;
  }
  /** @oneof */
  interface _StringComponentTypeOptionsOneOf {
      /** Text input field */
      textInputOptions?: TextInput;
      /** Selection field as radio group */
      radioGroupOptions?: RadioGroup;
      /** Selection field as drop down */
      dropdownOptions?: Dropdown;
  }
  interface _Number extends _NumberComponentTypeOptionsOneOf {
      /** Number value input field */
      numberInputOptions?: NumberInput;
      /** Validation of field output value. */
      validation?: InputFieldNumberType;
      /**
       * Component type of the number input field
       * @readonly
       */
      componentType?: NumberComponentType;
  }
  /** @oneof */
  interface _NumberComponentTypeOptionsOneOf {
      /** Number value input field */
      numberInputOptions?: NumberInput;
  }
  interface _Boolean extends _BooleanComponentTypeOptionsOneOf {
      /** Checkbox input field */
      checkboxOptions?: Checkbox;
      /** Validation of field output value. */
      validation?: InputFieldBooleanType;
      /**
       * Component type of the boolean input field
       * @readonly
       */
      componentType?: BooleanComponentType;
  }
  /** @oneof */
  interface _BooleanComponentTypeOptionsOneOf {
      /** Checkbox input field */
      checkboxOptions?: Checkbox;
  }
  interface _Array extends _ArrayComponentTypeOptionsOneOf {
      /** Checkbox group input field */
      checkboxGroupOptions?: CheckboxGroup;
      /** Validation of array type. */
      validation?: InputFieldArrayType;
      /**
       * Component type of the array input field
       * @readonly
       */
      componentType?: ComponentType;
  }
  /** @oneof */
  interface _ArrayComponentTypeOptionsOneOf {
      /** Checkbox group input field */
      checkboxGroupOptions?: CheckboxGroup;
  }
  interface _Object extends _ObjectValidationOneOf {
      /** Validation of object type. */
      object?: InputFieldObjectType;
      /**
       * Nested form ID.
       * @internal
       */
      nestedFormId?: string | null;
  }
  /** @oneof */
  interface _ObjectValidationOneOf {
      /** Validation of object type. */
      object?: InputFieldObjectType;
      /**
       * Nested form ID.
       * @internal
       */
      nestedFormId?: string | null;
  }
  interface WixFile extends WixFileComponentTypeOptionsOneOf {
      /** File upload input field */
      fileUploadOptions?: FileUpload;
      /**
       * Component type of the array input field
       * @readonly
       */
      componentType?: WixFileComponentType;
  }
  /** @oneof */
  interface WixFileComponentTypeOptionsOneOf {
      /** File upload input field */
      fileUploadOptions?: FileUpload;
  }
  interface Payment extends PaymentComponentTypeOptionsOneOf {
      /** Checkbox group input field. */
      checkboxGroupOptions?: PaymentCheckboxGroup;
      /**
       * Component type of the payment input field.
       * @readonly
       */
      componentType?: PaymentComponentType;
  }
  /** @oneof */
  interface PaymentComponentTypeOptionsOneOf {
      /** Checkbox group input field. */
      checkboxGroupOptions?: PaymentCheckboxGroup;
  }
  interface Header {
      /** Content of the header */
      content?: RichContent;
  }
  interface RichText {
      /** Content of the rich text field */
      content?: RichContent;
  }
  enum Target {
      UNDEFINED = "UNDEFINED",
      /** Opened in same browser tab */
      SELF = "SELF",
      /** Url open in new tab */
      BLANK = "BLANK"
  }
  interface ThankYouMessage {
      /** Message show after form submission */
      text?: RichContent;
      /**
       * Duration after how much second it should disappear. If 0, will stay forever.
       * Default: false
       */
      duration?: number | null;
  }
  interface Redirect {
      /** Url to which UoU should be redirected after successful submit of form */
      url?: string | null;
      /** How should url be opened */
      target?: Target;
  }
  enum FieldType {
      UNKNOWN = "UNKNOWN",
      INPUT = "INPUT",
      DISPLAY = "DISPLAY",
      SUBMIT = "SUBMIT"
  }
  interface InputField extends InputFieldInputTypeOptionsOneOf {
      /** Input return string as value */
      stringOptions?: _String;
      /** Input return number as value */
      numberOptions?: _Number;
      /** Input return boolean as value */
      booleanOptions?: _Boolean;
      /** Input return array as value */
      arrayOptions?: _Array;
      /** Input return object as value */
      objectOptions?: _Object;
      /** Input return "Wix file" as value */
      wixFileOptions?: WixFile;
      /** Input returns selected products as value. */
      paymentOptions?: Payment;
      /** Definition of a target where the value of field belongs. */
      target?: string | null;
      /**
       * Mark the field as containing personal information. This will encrypt user data when storing it.
       * Default: false
       */
      pii?: boolean;
      /**
       * Whether the field is required.
       * Default: false
       */
      required?: boolean;
      /**
       * Type of the input field
       * @readonly
       */
      inputType?: InputType;
  }
  /** @oneof */
  interface InputFieldInputTypeOptionsOneOf {
      /** Input return string as value */
      stringOptions?: _String;
      /** Input return number as value */
      numberOptions?: _Number;
      /** Input return boolean as value */
      booleanOptions?: _Boolean;
      /** Input return array as value */
      arrayOptions?: _Array;
      /** Input return object as value */
      objectOptions?: _Object;
      /** Input return "Wix file" as value */
      wixFileOptions?: WixFile;
      /** Input returns selected products as value. */
      paymentOptions?: Payment;
  }
  interface DisplayField extends DisplayFieldComponentTypeOneOf {
      /** Header field */
      header?: Header;
      /** Rich text field */
      richText?: RichText;
  }
  /** @oneof */
  interface DisplayFieldComponentTypeOneOf {
      /** Header field */
      header?: Header;
      /** Rich text field */
      richText?: RichText;
  }
  interface SubmitButton extends SubmitButtonSubmitActionOneOf {
      /** Submit action effect is to show message */
      thankYouMessage?: ThankYouMessage;
      /** Submit action effect is to redirect to */
      redirect?: Redirect;
      /** When button is not on last page it behaves as switch between pages page, text of label to go to next page. */
      nextText?: string | null;
      /** When button is not on last page it behaves as switch between pages page, text of label to go to previous page. */
      previousText?: string | null;
      /** Text on the button when button is submitting a form */
      submitText?: string | null;
  }
  /** @oneof */
  interface SubmitButtonSubmitActionOneOf {
      /** Submit action effect is to show message */
      thankYouMessage?: ThankYouMessage;
      /** Submit action effect is to redirect to */
      redirect?: Redirect;
  }
  interface Step {
      /** Step ID. */
      _id?: string;
      /** Name of the step. */
      name?: string | null;
      /** Is step hidden */
      hidden?: boolean;
      /** Form step properties */
      layout?: FormLayout;
  }
  interface FormLayout {
      /** Layout for large break point. */
      large?: BreakPoint;
      /** Layout for medium break point. */
      medium?: BreakPoint;
      /** Layout for small break point. */
      small?: BreakPoint;
  }
  interface BreakPoint {
      /** Description of layouts for items. */
      items?: ItemLayout[];
      /** Amount of columns of layout grid. */
      columns?: number | null;
      /** Row height of layout grid. */
      rowHeight?: number | null;
      /** Description of elements margins. */
      margin?: Margin;
      /** Description of elements paddings. */
      padding?: Margin;
  }
  interface ItemLayout {
      /** Form field reference id. */
      fieldId?: string;
      /** Horizontal coordinate in the grid. */
      row?: number | null;
      /** Vertical coordinate in the grid. */
      column?: number | null;
      /** Height. */
      width?: number | null;
      /** Width. */
      height?: number | null;
  }
  interface Margin {
      /** Horizontal value. */
      horizontal?: number | null;
      /** Vertical value. */
      vertical?: number | null;
  }
  interface FormRule {
      /** Id of the rule */
      _id?: string;
      /** Rule on which item properties or layouts will be changed. */
      condition?: Record<string, any> | null;
      /**
       * Form items with defined properties that will be
       * changed when given condition is resolved to true.
       */
      overrides?: FormOverride[];
      /** Name of the rule */
      name?: string | null;
  }
  enum OverrideEntityType {
      UNKNOWN = "UNKNOWN",
      FIELD = "FIELD",
      FORM = "FORM",
      NESTED_FORM_FIELD = "NESTED_FORM_FIELD"
  }
  interface FormOverride {
      /** Override entity type. */
      entityType?: OverrideEntityType;
      /** Overridden entity id. Either fieldId, or "{fieldIdWithNestedForm}/{nestedFormFieldId}" */
      entityId?: string | null;
      /** Form entity properties path with new value, that will be changed on condition. */
      valueChanges?: Record<string, any>;
  }
  interface FormProperties {
      /** Form name. */
      name?: string | null;
      /** Identifies if the form is disabled. */
      disabled?: boolean;
  }
  enum Kind {
      REGULAR = "REGULAR",
      EXTENSION = "EXTENSION"
  }
  interface PostSubmissionTriggers {
      /** Upserts a contact from the submission data. */
      upsertContact?: UpsertContact;
      /** Payment trigger. */
      paymentTrigger?: PaymentTrigger;
  }
  interface UpsertContact {
      /** Fields mapping (target field mapped to corresponding contact field). */
      fieldsMapping?: Record<string, FormFieldContactInfo>;
      /**
       * List of contact label keys.
       * [Contact labels](https://support.wix.com/en/article/adding-labels-to-contacts-in-your-contact-list)
       * help categorize contacts.
       */
      labels?: string[];
  }
  interface FormFieldContactInfo extends FormFieldContactInfoAdditionalInfoOneOf {
      /** Email info. */
      emailInfo?: EmailInfo;
      /** Phone info. */
      phoneInfo?: PhoneInfo;
      /** Address info. */
      addressInfo?: AddressInfo;
      /** Custom field info. */
      customFieldInfo?: CustomFieldInfo;
      /** Field mapped to contacts. */
      contactField?: ContactField;
  }
  /** @oneof */
  interface FormFieldContactInfoAdditionalInfoOneOf {
      /** Email info. */
      emailInfo?: EmailInfo;
      /** Phone info. */
      phoneInfo?: PhoneInfo;
      /** Address info. */
      addressInfo?: AddressInfo;
      /** Custom field info. */
      customFieldInfo?: CustomFieldInfo;
  }
  enum EmailInfoTag {
      UNTAGGED = "UNTAGGED",
      MAIN = "MAIN"
  }
  enum PhoneInfoTag {
      UNTAGGED = "UNTAGGED",
      MAIN = "MAIN"
  }
  enum Tag {
      UNTAGGED = "UNTAGGED",
      HOME = "HOME"
  }
  enum ContactField {
      UNDEFINED = "UNDEFINED",
      FIRST_NAME = "FIRST_NAME",
      LAST_NAME = "LAST_NAME",
      COMPANY = "COMPANY",
      POSITION = "POSITION",
      EMAIL = "EMAIL",
      PHONE = "PHONE",
      ADDRESS = "ADDRESS",
      BIRTHDATE = "BIRTHDATE",
      CUSTOM_FIELD = "CUSTOM_FIELD",
      SUBSCRIPTION = "SUBSCRIPTION",
      VAT_ID = "VAT_ID"
  }
  interface EmailInfo {
      /** Email tag. */
      tag?: EmailInfoTag;
  }
  interface PhoneInfo {
      /** Phone tag. */
      tag?: PhoneInfoTag;
  }
  interface AddressInfo {
      /** Address tag. */
      tag?: Tag;
  }
  interface CustomFieldInfo {
      /** Custom field key. */
      key?: string;
  }
  interface PaymentTrigger {
      /** Fields mapping (target field mapped to corresponding payment field). */
      fieldsMapping?: Record<string, FormFieldPaymentInfo>;
  }
  interface FormFieldPaymentInfo {
      /** Field mapped to products. */
      products?: Product[];
      /** Minimum amount of different products. */
      minItems?: number | null;
      /** Maximum amount of different products. */
      maxItems?: number | null;
  }
  enum ProductType {
      UNKNOWN = "UNKNOWN",
      /** Shippable (physical). */
      SHIPPABLE = "SHIPPABLE",
      /** Digital. */
      DIGITAL = "DIGITAL"
  }
  enum PriceType {
      UNKNOWN = "UNKNOWN",
      /** Fixed price. */
      FIXED_PRICE = "FIXED_PRICE",
      /** Dynamic price from price range. */
      DYNAMIC_PRICE = "DYNAMIC_PRICE"
  }
  interface QuantityLimit {
      /** Minimum quantity. */
      minimum?: number | null;
      /** Maximum quantity. */
      maximum?: number | null;
  }
  interface FixedPriceOptions {
      /** Fixed price monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). */
      price?: string;
  }
  interface DynamicPriceOptions {
      /** Minimal price monetary amount. */
      minPrice?: string;
      /** Maximal price monetary amount. */
      maxPrice?: string | null;
  }
  interface Product extends ProductPriceOptionsOneOf {
      /** Fixed price options. */
      fixedPriceOptions?: FixedPriceOptions;
      /** Dynamic price options. */
      dynamicPriceOptions?: DynamicPriceOptions;
      /**
       * Product ID.
       * @readonly
       */
      _id?: string;
      /** Product type. */
      productType?: ProductType;
      /** Price type. */
      priceType?: PriceType;
      /** Quantity limit. */
      quantityLimit?: QuantityLimit;
  }
  /** @oneof */
  interface ProductPriceOptionsOneOf {
      /** Fixed price options. */
      fixedPriceOptions?: FixedPriceOptions;
      /** Dynamic price options. */
      dynamicPriceOptions?: DynamicPriceOptions;
  }
  interface NestedForm {
      /** Targets which have this form. */
      targets?: string[];
      /** Nested form. */
      form?: Form;
  }
  enum ActionType {
      UNKNOWN_ACTION = "UNKNOWN_ACTION",
      UPDATE = "UPDATE",
      CREATE = "CREATE"
  }
  interface UpdateOptions {
      /** Submission object before update was applied. */
      submission?: FormSubmission;
  }
  interface CreateOptions {
  }
  interface ValidateSubmissionResponse {
      /** Submission validation result. */
      validationResult?: ValidationResult;
  }
  interface ValidationResult {
      /** List of validation errors. */
      errors?: ValidationError[];
  }
  interface ValidationError {
      /** Path to cause of the error, e.g. form.fields.target */
      errorPath?: string;
      /** Error type. */
      errorType?: ErrorType;
      /** Error message. */
      errorMessage?: string;
      /** Additional error parameters. */
      params?: Record<string, any> | null;
  }
  enum ErrorType {
      UNKNOWN_ERROR = "UNKNOWN_ERROR",
      TYPE_ERROR = "TYPE_ERROR",
      REQUIRED_VALUE_ERROR = "REQUIRED_VALUE_ERROR",
      UNKNOWN_VALUE_ERROR = "UNKNOWN_VALUE_ERROR",
      MAX_LENGTH_ERROR = "MAX_LENGTH_ERROR",
      MIN_LENGTH_ERROR = "MIN_LENGTH_ERROR",
      PATTERN_ERROR = "PATTERN_ERROR",
      FORMAT_ERROR = "FORMAT_ERROR",
      MAX_VALUE_ERROR = "MAX_VALUE_ERROR",
      MIN_VALUE_ERROR = "MIN_VALUE_ERROR",
      MULTIPLE_OF_VALUE_ERROR = "MULTIPLE_OF_VALUE_ERROR",
      MIN_ITEMS_ERROR = "MIN_ITEMS_ERROR",
      MAX_ITEMS_ERROR = "MAX_ITEMS_ERROR",
      NOT_ALLOWED_VALUE_ERROR = "NOT_ALLOWED_VALUE_ERROR",
      FIELDS_COMPATIBILITY_ERROR = "FIELDS_COMPATIBILITY_ERROR",
      DISABLED_FORM_ERROR = "DISABLED_FORM_ERROR",
      FORMS_COUNT_RESTRICTIONS_ERROR = "FORMS_COUNT_RESTRICTIONS_ERROR",
      FIELDS_COUNT_RESTRICTIONS_ERROR = "FIELDS_COUNT_RESTRICTIONS_ERROR",
      STEPS_COUNT_RESTRICTIONS_ERROR = "STEPS_COUNT_RESTRICTIONS_ERROR",
      RULES_COUNT_RESTRICTIONS_ERROR = "RULES_COUNT_RESTRICTIONS_ERROR",
      FILE_UPLOAD_RESTRICTIONS_ERROR = "FILE_UPLOAD_RESTRICTIONS_ERROR"
  }
  interface FormSubmissionSpiConfig {
      /** Configuration of namespaces known by implementer */
      namespaceConfigs?: FormsSubmissionsNamespaceConfig[];
  }
  interface FormsSubmissionsNamespaceConfig {
      /** Namespace name. */
      namespace?: string;
      /** Permissions associated with this namespace. */
      permissions?: Permissions;
      /** Mark new submission as pending by default. */
      pendingByDefault?: boolean;
      /**
       * Allows to disable automatic contact insert/update on contact mapping provided.
       * On manual contact mapping enabled, the implementer is responsible for mapping the submission to a contact.
       * Out of the box GDPR support is not available for unmapped submissions with contact PII fields.
       */
      manualContactMapping?: boolean;
      /** Delete a PENDING submission after X days. */
      deletePendingAfterDays?: number | null;
      /** Enable submission validation. */
      submissionValidationEnabled?: boolean;
  }
  interface Permissions {
      /** Create permission name */
      create?: string;
      /** Delete permission name */
      delete?: string;
      /** Update permission name */
      update?: string;
      /** Read permission name */
      read?: string;
  }
  /**
   * this message is not directly used by any service,
   * it exists to describe the expected parameters that SHOULD be provided to invoked Velo methods as part of open-platform.
   * e.g. SPIs, event-handlers, etc..
   * NOTE: this context object MUST be provided as the last argument in each Velo method signature.
   *
   * Example:
   * ```typescript
   * export function wixStores_onOrderCanceled(event: OrderCanceledEvent, context: Context) {
   * ...
   * }
   * ```
   */
  interface Context {
      /** A unique identifier for each request. Can be used for logging / troubleshooting */
      requestId?: string | null;
      /** 3 capital letters string representing a currency according to ISO-4217 */
      currency?: string | null;
      /** The identification type and identity data */
      identity?: IdentificationData;
      /** A string representing a language and region in the format of "xx-XX". First 2 letters represent the language code according to ISO 639-1. This is followed by a dash "-", and then a by 2 capital letters representing the region according to ISO 3166-2 */
      languages?: string[];
      /** App instance ID of SPI in context */
      instanceId?: string | null;
  }
  enum IdentityType {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
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
      identityType?: IdentityType;
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
  interface ValidateSubmissionOptions extends ValidateSubmissionRequestActionsOneOf {
      /** Submission to be validated */
      submission: FormSubmission;
      /** Form to validate with. */
      form: Form;
      type: ActionType;
      /** Payload sent on update action. */
      updateOptions?: UpdateOptions;
      /** Payload sent on create action. */
      createOptions?: CreateOptions;
  }
  
  export { ActionType, AddressInfo, Alignment, AnchorData, AppEmbedData, AppEmbedDataAppDataOneOf, AppType, ArrayErrorMessages, ArrayItems, ArrayItemsItemsOneOf, ArrayType, ArrayTypeArrayItems, ArrayTypeArrayItemsItemTypeOptionsOneOf, AudioData, Background, BackgroundBackgroundOneOf, BackgroundType, BlockquoteData, BookingData, BooleanComponentType, BooleanErrorMessages, BooleanType, Border, BorderColors, BreakPoint, BulletedListData, BusinessError, ButtonData, CellStyle, Checkbox, CheckboxGroup, CheckboxGroupOption, CodeBlockData, CollapsibleListData, ColorData, Colors, ComponentType, ContactField, Context, CreateOptions, Crop, CustomFieldInfo, CustomOption, Decoration, DecorationDataOneOf, DecorationType, Design, Dimensions, Direction, DisplayField, DisplayFieldComponentTypeOneOf, DividerData, DocumentStyle, Dropdown, DropdownCustomOption, DropdownOption, DynamicPriceOptions, EmailInfo, EmailInfoTag, EmbedData, ErrorType, EventData, ExtendedFields, FieldType, FileData, FileSource, FileSourceDataOneOf, FileUpload, FixedPriceOptions, FontSizeData, FontType, Form, FormField, FormFieldContactInfo, FormFieldContactInfoAdditionalInfoOneOf, FormFieldPaymentInfo, FormFieldV2, FormFieldV2FieldTypeOptionsOneOf, FormLayout, FormOverride, FormProperties, FormRule, FormSubmission, FormSubmissionSpiConfig, Format, FormatEnumFormat, FormsSubmissionsNamespaceConfig, GIF, GIFData, GalleryData, GalleryOptions, Gradient, HTMLData, HTMLDataDataOneOf, Header, HeadingData, Height, IdentificationData, IdentificationDataIdOneOf, IdentityType, Image, ImageData, InitialExpandedItems, InputField, InputFieldArrayErrorMessages, InputFieldArrayType, InputFieldBooleanErrorMessages, InputFieldBooleanType, InputFieldInputTypeOptionsOneOf, InputFieldIntegerType, InputFieldNumberErrorMessages, InputFieldNumberType, InputFieldObjectErrorMessages, InputFieldObjectType, InputFieldStringErrorMessages, InputFieldStringType, InputType, IntegerType, Item, ItemDataOneOf, ItemLayout, ItemStyle, ItemType, Kind, Layout, LayoutType, LineStyle, Link, LinkData, LinkDataOneOf, LinkPreviewData, LinkTarget, ListValue, MapData, MapSettings, MapType, Margin, Media, MediaItem, MediaItemMediaOneOf, MentionData, Metadata, NestedForm, NestedFormFieldOverrides, NestedFormOverrides, Node, NodeDataOneOf, NodeStyle, NodeType, NullValue, NumberComponentType, NumberErrorMessages, NumberInput, NumberType, ObjectErrorMessages, ObjectType, ObjectTypePropertiesType, ObjectTypePropertiesTypePropertiesTypeOptionsOneOf, Oembed, Option, OptionDesign, OptionLayout, OrderedListData, Orientation, OverrideEntityType, Owner, OwnerOwnerOneOf, PDFSettings, ParagraphData, Payment, PaymentCheckboxGroup, PaymentComponentType, PaymentComponentTypeOptionsOneOf, PaymentTrigger, Permissions, PhoneInfo, PhoneInfoTag, PlaybackOptions, PluginContainerData, PluginContainerDataAlignment, PluginContainerDataWidth, PluginContainerDataWidthDataOneOf, Poll, PollData, PollDataLayout, PollDesign, PollLayout, PollLayoutDirection, PollLayoutType, PollOption, PostSubmissionTriggers, PredefinedValidation, PriceType, Product, ProductPriceOptionsOneOf, ProductType, PropertiesType, PropertiesTypePropertiesType, PropertiesTypePropertiesTypeOneOf, QuantityLimit, RadioGroup, RadioGroupCustomOption, RadioGroupOption, Redirect, Rel, RichContent, RichText, Settings, SettingsPermissions, Source, Spoiler, Step, StringComponentType, StringErrorMessages, StringType, Styles, SubmissionStatus, SubmitButton, SubmitButtonSubmitActionOneOf, Submitter, SubmitterSubmitterOneOf, TableCellData, TableData, Tag, Target, TextAlignment, TextData, TextInput, TextNodeStyle, TextStyle, ThankYouMessage, Thumbnails, ThumbnailsAlignment, Type, UpdateOptions, UploadFileFormat, UpsertContact, ValidateSubmissionOptions, ValidateSubmissionRequest, ValidateSubmissionRequestActionsOneOf, ValidateSubmissionResponse, Validation, ValidationError, ValidationFormat, ValidationResult, ValidationValidationOneOf, VerticalAlignment, Video, VideoData, ViewMode, ViewRole, VoteRole, Width, WidthType, WixFile, WixFileComponentType, WixFileComponentTypeOptionsOneOf, _Array, _ArrayComponentTypeOptionsOneOf, _Boolean, _BooleanComponentTypeOptionsOneOf, _Number, _NumberComponentTypeOptionsOneOf, _Object, _ObjectValidationOneOf, _String, _StringComponentTypeOptionsOneOf };
}
