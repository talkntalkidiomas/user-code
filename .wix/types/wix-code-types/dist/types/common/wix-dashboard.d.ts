/**
 * The wix-dashboard module contains functionality for interacting with your site's dashboard in the code for dashboard pages.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-dashboard.html#)
 */
declare module 'wix-dashboard' {
    /**
     * Closes the currently open modal.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-dashboard.html#closeModal)
     */
    function closeModal(closeData?: Serializable): void;
    /**
     * Gets the full URL for a dashboard page.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-dashboard.html#getPageUrl)
     */
    function getPageUrl(destination: Destination): Promise<string>;
    /**
     * Navigates the user to another page in the dashboard.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-dashboard.html#navigate)
     */
    function navigate(destination: Destination): void;
    /**
     * Defines a callback function that receives changes to the state of a dashboard page's environment.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-dashboard.html#observeState)
     */
    function observeState(observer: observeStateCallback): void;
    /**
     *
     *
     * __Important:__
     *
     * This API is in [Developer Preview](https://www.wix.com/velo/reference/api-overview/developer-preview) and is subject to change.
     *
     *
     *
     * Opens the Wix Media Manager in a modal.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-dashboard.html#openMediaManager)
     */
    function openMediaManager(options: OpenMediaManagerOptions): Promise<openMediaManagerReturn>;
    /**
     * Opens a [dashboard modal extension](https://dev.wix.com/docs/build-apps/developer-tools/extensions/dashboard-modal-extensions).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-dashboard.html#openModal)
     */
    function openModal(modalId: string, modalParams?: any): OpenModalReturn;
    /**
     * Displays a toast notification at the top of a dashboard page.
     *
     * ![Toast notification](/images/toast_example.png "Toast notification")
     * 	[Read more](https://www.wix.com/corvid/reference/wix-dashboard.html#showToast)
     */
    function showToast(config: ToastConfig): ToastReturn;
    type Archive = {
        /**
         * WixMedia ID.
         */
        _id: string;
        /**
         * Archive filename.
         */
        filename: string;
        /**
         * Archive size in bytes.
         */
        sizeInBytes: string;
        /**
         * Archive URL.
         */
        url: string;
        /**
         * Archive URL expiration date (when relevant).
         */
        urlExpirationDate: Date;
    };
    type AudioV2 = {
        /**
         * WixMedia ID.
         */
        _id: string;
        /**
         * Audio formats available for this file.
         */
        assets: string[];
        /**
         * Audio bitrate.
         */
        bitrate: number;
        /**
         * Audio duration in seconds.
         */
        duration: number;
        /**
         * Audio format.
         */
        format: string;
        /**
         * Audio size in bytes.
         */
        sizeInBytes: string;
    };
    type Color = {
        /**
         * HEX code.
         */
        hex: string;
        /**
         * RGB color.
         */
        rgb: ColorRGB;
    };
    type ColorRGB = {
        /**
         * Blue channel.
         */
        b: number;
        /**
         * Green channel.
         */
        g: number;
        /**
         * Red channel.
         */
        r: number;
    };
    type Colors = {
        /**
         * Color palette of the image.
         */
        palette: Color[];
        /**
         * Main color of the image.
         */
        prominent: Color;
    };
    /**
     * Destination Object
     */
    type Destination = {
        /**
         * ID of the page to link to. Use the [Dashboard Page IDs](#dashboard-page-ids) table to find the appropriate ID.
         */
        pageId: string;
        /**
         * URL segment to append to the base URL of the selected page. Can include path segments, a query string, and a fragment identifier.
         */
        relativeUrl?: string;
    };
    type Document = {
        /**
         * Information about the document.
         */
        document: string;
    };
    type EnvironmentState = {
        /**
         * User's locale.
         */
        locale: string;
        /**
         * Information about the currently rendered page location.
         */
        pageLocation: PageLocation;
    };
    type FaceRecognition = {
        /**
         * The accuracy percentage of the face recognition. The likelihood that a face is detected.
         */
        confidence: number;
        /**
         * Face pixel height.
         */
        height: number;
        /**
         * Face pixel width.
         */
        width: number;
        /**
         * Top left x pixel coordinate of the face.
         */
        x: number;
        /**
         * Top left y pixel coordinate of the face.
         */
        y: number;
    };
    type FileDescriptor = {
        /**
         * Date and time the file was created.
         */
        _createdDate: Date;
        /**
         * File ID. Generated when a file is uploaded to the Media Manager.
         */
        _id: string;
        /**
         * Date and time the file was updated.
         */
        _updatedDate: Date;
        /**
         * File name as it appears in the Media Manager.
         */
        displayName: string;
        /**
         * File hash.
         */
        hash: string;
        /**
         * Labels assigned to media files that describe and categorize them. Provided by the user, or generated by Google Vision API for images.
         */
        labels: string[];
        /**
         * Media file content.
         */
        media: Archive | AudioV2 | Document | Image | Model3D | Vector | Video;
        /**
         * Media file type.
         *
         * Supported values: `"IMAGE"`, `"VIDEO"`, `"AUDIO"`, `"DOCUMENT"`, `"VECTOR"`, `"ARCHIVE"`, `"MODEL3D"`
         */
        mediaType: string;
        /**
         * Status of the file that was uploaded.
         *
         * Supported values: `"FAILED"`, `"READY"`, `"PENDING"`
         */
        operationStatus: string;
        /**
         * ID of the file's parent folder.
         */
        parentFolderId: string;
        /**
         * Whether the link to the uploaded file is public or private. Private links require a token.
         */
        private: boolean;
        /**
         * The Wix site ID where the media file is stored.
         */
        siteId: string;
        /**
         * Size of the uploaded file in bytes.
         */
        sizeInBytes: string;
        /**
         * URL where the file was uploaded from.
         */
        sourceUrl: string;
        /**
         * State of the file.
         *
         * Supported values: `"OK"`, `"DELETED"`
         */
        state: string;
        /**
         * URL of the file's thumbnail.
         */
        thumbnailUrl: string;
        /**
         * Static URL of the file.
         */
        url: string;
    };
    type Image = {
        /**
         * Information about the image.
         */
        image: ImageMedia;
    };
    type ImageMedia = {
        /**
         * Optional, An AI generated description of the image.
         */
        caption: string;
        /**
         * Image colors.
         */
        colors: Colors;
        /**
         * Information about faces in the image. Use to crop images without cutting out faces.
         */
        faces: FaceRecognition[];
        /**
         * Image data.
         */
        image: string;
        /**
         * Information about the image preview. You can use this to display a preview for private images.
         */
        previewImage: string;
    };
    type Model3D = {
        /**
         * WixMedia 3D ID.
         */
        _id: string;
        /**
         * 3D alt text.
         */
        altText: string;
        /**
         * 3D filename.
         */
        filename: string;
        /**
         * 3D size in bytes.
         */
        sizeInBytes: string;
        /**
         * 3D thumbnail Image.
         */
        thumbnail: string;
        /**
         * 3D URL.
         */
        url: string;
        /**
         * 3D URL expiration date (when relevant).
         */
        urlExpirationDate: Date;
    };
    type OpenMediaManagerOptions = {
        /**
         * The type of media files to display in the modal. If this value is empty, all media types are displayed.
         *
         * Supported values: `"IMAGE"`, `"VIDEO"`, `"MUSIC"`, `"DOCUMENT"`, `"VECTOR_ART"`, `"3D_IMAGE"`
         *
         * By default, all the categories except `"3D_IMAGE"` are displayed.
         */
        category?: string;
        /**
         * Whether multiple files can be selected.Default: `false`
         */
        multiSelect?: boolean;
    };
    /**
     * Open Modal Return Object
     */
    type OpenModalReturn = {
        /**
         * Resolves to the data passed to [`closeModal()`](#closeModal) when the modal is closed.
         */
        modalClosed: Promise<Serializable>;
    };
    /**
     * PageLocation Object
     */
    type PageLocation = {
        /**
         * ID of the rendered page.
         */
        pageId: string;
        /**
         * Any parts of the current URL path appended to the page's full URL.
         */
        pathname: string;
        /**
         * The current URL's query string.
         */
        search?: string;
        /**
         * The current URL's fragment.
         */
        hash?: string;
    };
    type Serializable = {};
    /**
     * ToastAction Object
     */
    type ToastAction = {
        /**
         * Text that appears in the call-to-action.
         */
        text: string;
        /**
         * The type of call-to-action.
         *
         * Options: `"button"`, `"link"`
         *
         * Default: `"button"`
         */
        uiType?: string;
        /**
         * Whether to remove the toast after the call-to-action is clicked.
         *
         * Default: `true`
         */
        removeToastOnClick?: boolean;
        /**
         * Callback function to run after the call-to-action is clicked.
         */
        onClick: Function;
    };
    /**
     * ToastConfig Object
     */
    type ToastConfig = {
        /**
         * Text that appears in the toast.
         */
        message: string;
        /**
         * Whether the toast removes itself.
         *
         * Options:
         * - `"normal"`: The toast removes itself after 6 seconds.
         * - `"none"`: The toast doesn't remove itself.
         *
         * Default: `"normal"`
         */
        timeout?: string;
        /**
         * Toast color and message type.
         *
         * Options:
         * - `"standard"`: Blue toast.
         * - `"success"`: Green toast.
         * - `"warning"`: Yellow warning toast.
         * - `"error"`: Red error toast.
         *
         * Default: `"standard"`
         */
        type?: string;
        /**
         * Priority of the toast. If several toasts are triggered at the same time, they're displayed in the order of their priority levels.
         *
         * Options: `"low"`, `"normal"`, `"high"`
         *
         * Default: `"normal"`
         */
        priority?: string;
        /**
         * Object representing a call-to-action that's displayed in the toast.
         */
        action?: ToastAction;
        /**
         * Callback function to run when the toast is closed by clicking its close button.
         */
        onCloseClick?: Function;
        /**
         * Callback function to run when the toast is seen by the user.
         */
        onToastSeen?: Function;
    };
    /**
     * ShowToast Return Object
     */
    type ToastReturn = {
        /**
         * Removes the displayed toast.
         */
        remove: Function;
    };
    type Vector = {
        /**
         * Information about the vector.
         */
        vector: ImageMedia;
    };
    type Video = {
        /**
         * Information about the video.
         */
        video: string;
    };
    type openMediaManagerReturn = {
        /**
         * An array of file descriptors for the selected media files.
         */
        items: FileDescriptor[];
    };
    type observeStateCallback = (pageParams: any, environmentState: EnvironmentState) => void;
}
