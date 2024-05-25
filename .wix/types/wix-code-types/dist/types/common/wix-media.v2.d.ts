declare module "wix-media.v2" {
    const __debug$2: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface GeneratedImage {
        /** a url pointing to the generated image */
        url?: string;
    }
    interface GenerateImageRequest {
        /** Text description of the generated image */
        textPrompt?: string | null;
        /**
         * A string containing information about the style of the generated image
         * Can be taken from the Configuration response
         */
        style?: string | null;
        /** The image width */
        width?: number | null;
        /** The image height */
        height?: number | null;
        /**
         * The client that is making this request, Used for quota enforcement
         * Please contact the media team to add your own client here
         */
        requestSource?: RequestSource;
    }
    enum RequestSource {
        UNDEFINED = "UNDEFINED",
        STORES = "STORES",
        PHOTO_STUDIO = "PHOTO_STUDIO",
        MEDIA_MANAGER = "MEDIA_MANAGER"
    }
    interface GenerateImageResponse {
        /** A list of image objects containing urls for the generated images */
        variations?: GeneratedImage[];
        /** The number of generated images remaining for this site */
        usedQuota?: number | null;
    }
    interface ConfigurationRequest {
    }
    interface ConfigurationResponse {
        /** A list of possible image styles that can be used when generating media */
        generationStyles?: string[] | null;
    }
    interface GetSiteQuotaRecordRequest {
    }
    interface GetSiteQuotaRecordResponse {
        siteQuota?: SiteQuotaRecord;
    }
    interface SiteQuotaRecord {
        /** site id */
        siteId?: string;
        /** number of generated images for the site */
        count?: number;
        /** count of generates images by clients */
        countBySource?: Record<string, any> | null;
    }
    interface GenerateImageOptions {
        /** Text description of the generated image */
        textPrompt?: string | null;
        /**
         * A string containing information about the style of the generated image
         * Can be taken from the Configuration response
         */
        style?: string | null;
        /** The image width */
        width?: number | null;
        /** The image height */
        height?: number | null;
        /**
         * The client that is making this request, Used for quota enforcement
         * Please contact the media team to add your own client here
         */
        requestSource?: RequestSource;
    }
    type mediaGenerationV1GeneratedImage_universal_d_GeneratedImage = GeneratedImage;
    type mediaGenerationV1GeneratedImage_universal_d_GenerateImageRequest = GenerateImageRequest;
    type mediaGenerationV1GeneratedImage_universal_d_RequestSource = RequestSource;
    const mediaGenerationV1GeneratedImage_universal_d_RequestSource: typeof RequestSource;
    type mediaGenerationV1GeneratedImage_universal_d_GenerateImageResponse = GenerateImageResponse;
    type mediaGenerationV1GeneratedImage_universal_d_ConfigurationRequest = ConfigurationRequest;
    type mediaGenerationV1GeneratedImage_universal_d_ConfigurationResponse = ConfigurationResponse;
    type mediaGenerationV1GeneratedImage_universal_d_GetSiteQuotaRecordRequest = GetSiteQuotaRecordRequest;
    type mediaGenerationV1GeneratedImage_universal_d_GetSiteQuotaRecordResponse = GetSiteQuotaRecordResponse;
    type mediaGenerationV1GeneratedImage_universal_d_SiteQuotaRecord = SiteQuotaRecord;
    type mediaGenerationV1GeneratedImage_universal_d_GenerateImageOptions = GenerateImageOptions;
    namespace mediaGenerationV1GeneratedImage_universal_d {
        export { __debug$2 as __debug, mediaGenerationV1GeneratedImage_universal_d_GeneratedImage as GeneratedImage, mediaGenerationV1GeneratedImage_universal_d_GenerateImageRequest as GenerateImageRequest, mediaGenerationV1GeneratedImage_universal_d_RequestSource as RequestSource, mediaGenerationV1GeneratedImage_universal_d_GenerateImageResponse as GenerateImageResponse, mediaGenerationV1GeneratedImage_universal_d_ConfigurationRequest as ConfigurationRequest, mediaGenerationV1GeneratedImage_universal_d_ConfigurationResponse as ConfigurationResponse, mediaGenerationV1GeneratedImage_universal_d_GetSiteQuotaRecordRequest as GetSiteQuotaRecordRequest, mediaGenerationV1GeneratedImage_universal_d_GetSiteQuotaRecordResponse as GetSiteQuotaRecordResponse, mediaGenerationV1GeneratedImage_universal_d_SiteQuotaRecord as SiteQuotaRecord, mediaGenerationV1GeneratedImage_universal_d_GenerateImageOptions as GenerateImageOptions, };
    }
    const __debug$1: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface FileDescriptor {
        /**
         * File ID. Generated when a file is uploaded to the Media Manager.
         * @readonly
         */
        _id?: string;
        /** File name as it appears in the Media Manager. */
        displayName?: string;
        /**
         * Static URL of the file.
         * @readonly
         */
        url?: string;
        /** ID of the file's parent folder. */
        parentFolderId?: string | null;
        /**
         * File hash.
         * @readonly
         */
        hash?: string;
        /**
         * Size of the uploaded file in bytes.
         * @readonly
         */
        sizeInBytes?: string | null;
        /**
         * Whether the link to the uploaded file is public or private. Private links require a token.
         * @readonly
         */
        private?: boolean;
        /**
         * Media file type.
         *
         * Supported values: `"IMAGE"`, `"VIDEO"`, `"AUDIO"`, `"DOCUMENT"`, `"VECTOR"`, `"ARCHIVE"`, `"MODEL3D"`
         * @readonly
         */
        mediaType?: MediaType;
        /**
         * Media file content.
         * @readonly
         */
        media?: FileMedia;
        /**
         * Status of the file that was uploaded.
         *
         * Supported values: `"FAILED"`, `"READY"`, `"PENDING"`
         * * `FAILED`: The file failed to upload, for example, during media post processing.
         * * `READY`: The file uploaded, finished all processing, and is ready for use.
         * * `PENDING`: The file is processing and the URLs are not yet available. This response is returned when importing a file.
         * @readonly
         */
        operationStatus?: OperationStatus;
        /**
         * URL where the file was uploaded from.
         * @readonly
         */
        sourceUrl?: string | null;
        /**
         * URL of the file's thumbnail.
         * @readonly
         */
        thumbnailUrl?: string | null;
        /** Labels assigned to media files that describe and categorize them. Provided by the user, or generated by [Google Vision API](https://cloud.google.com/vision/docs/drag-and-drop) for images. */
        labels?: string[];
        /**
         * Date and time the file was created.
         * @readonly
         */
        _createdDate?: Date;
        /**
         * Date and time the file was updated.
         * @readonly
         */
        _updatedDate?: Date;
        /**
         * The Wix site ID where the media file is stored.
         * @readonly
         */
        siteId?: string;
        /**
         * State of the file.
         *
         * Supported values: `"OK"`, `"DELETED"`
         * @readonly
         */
        state?: State$1;
    }
    enum MediaType {
        UNKNOWN = "UNKNOWN",
        IMAGE = "IMAGE",
        VIDEO = "VIDEO",
        AUDIO = "AUDIO",
        DOCUMENT = "DOCUMENT",
        VECTOR = "VECTOR",
        ARCHIVE = "ARCHIVE",
        MODEL3D = "MODEL3D"
    }
    interface FileMedia extends FileMediaMediaOneOf {
        /** Information about the image. */
        image?: ImageMedia;
        /** Information about the video. */
        video?: string;
        /** Information about the audio. */
        audio?: AudioV2;
        /** Information about the document. */
        document?: string;
        /** Information about the vector. */
        vector?: ImageMedia;
        /** Information about the archive. */
        archive?: Archive;
        /** Information about the 3D Model. */
        model3d?: Model3D;
    }
    /** @oneof */
    interface FileMediaMediaOneOf {
        /** Information about the image. */
        image?: ImageMedia;
        /** Information about the video. */
        video?: string;
        /** Information about the audio. */
        audio?: AudioV2;
        /** Information about the document. */
        document?: string;
        /** Information about the vector. */
        vector?: ImageMedia;
        /** Information about the archive. */
        archive?: Archive;
        /** Information about the 3D Model. */
        model3d?: Model3D;
    }
    interface ImageMedia {
        /** Image data. */
        image?: string;
        /** Image colors. */
        colors?: Colors;
        /** Information about faces in the image. Use to crop images without cutting out faces. */
        faces?: FaceRecognition[];
        /**
         * Information about the image preview.
         * You can use this to display a preview for private images.
         */
        previewImage?: string;
    }
    interface Colors {
        /** Main color of the image. */
        prominent?: Color;
        /** Color palette of the image. */
        palette?: Color[];
    }
    interface Color {
        /** HEX color. */
        hex?: string | null;
        /** RGB color. */
        rgb?: ColorRGB;
    }
    interface ColorRGB {
        /** Red channel. */
        r?: number | null;
        /** Green channel. */
        g?: number | null;
        /** Blue channel. */
        b?: number | null;
    }
    /**
     * Using this object you can crop images while centering on faces
     * ------------------------
     * |                      |
     * |    x,y               |
     * |    *--------         |
     * |    |  .  . |         |
     * |    |   |   | height  |
     * |    |  \ /  |         |
     * |    |       |         |
     * |    ---------         |
     * |     width            |
     * |                      |
     * |______________________|
     */
    interface FaceRecognition {
        /** The accuracy percentage of the face recognition. The likelihood that a face is detected. */
        confidence?: number;
        /** Top left x pixel coordinate of the face. */
        x?: number;
        /** Top left y pixel coordinate of the face. */
        y?: number;
        /** Face pixel height. */
        height?: number;
        /** Face pixel width. */
        width?: number;
    }
    interface VideoResolution {
        /** Video URL. */
        url?: string;
        /** Video height. */
        height?: number;
        /** Video width. */
        width?: number;
        /**
         * Video format
         * Possible values: ['144p.mp4' '144p.webm' '240p.mp4' '240p.webm' '360p.mp4' '360p.webm' '480p.mp4' '480p.webm'
         * '720p.mp4' '720p.webm' '1080p.mp4' '1080p.webm' ]
         */
        format?: string;
    }
    interface AudioV2 {
        /** WixMedia ID. */
        _id?: string;
        /** Audio formats available for this file. */
        assets?: string[];
        /**
         * Audio bitrate. Optional.
         * @readonly
         */
        bitrate?: number | null;
        /**
         * Audio format. Optional.
         * @readonly
         */
        format?: string | null;
        /**
         * Audio duration in seconds. Optional.
         * @readonly
         */
        duration?: number | null;
        /**
         * Audio size in bytes. Optional.
         * @readonly
         */
        sizeInBytes?: string | null;
    }
    interface Archive {
        /** WixMedia ID. */
        _id?: string;
        /** Archive URL. */
        url?: string;
        /**
         * Archive URL expiration date (when relevant).
         * @readonly
         */
        urlExpirationDate?: Date;
        /** Archive size in bytes. */
        sizeInBytes?: string | null;
        /** Archive filename. */
        filename?: string | null;
    }
    interface Model3D {
        /** WixMedia 3D ID. */
        _id?: string;
        /** 3D URL. */
        url?: string;
        /** 3D thumbnail Image */
        thumbnail?: string;
        /** 3D alt text. */
        altText?: string | null;
        /**
         * 3D URL expiration date (when relevant).
         * @readonly
         */
        urlExpirationDate?: Date;
        /**
         * 3D filename.
         * @readonly
         */
        filename?: string | null;
        /**
         * 3D size in bytes.
         * @readonly
         */
        sizeInBytes?: string | null;
    }
    enum OperationStatus {
        /** File upload or processing failed */
        FAILED = "FAILED",
        /** File is ready for consumption */
        READY = "READY",
        /** File is waiting for processing or currently being processed */
        PENDING = "PENDING"
    }
    enum State$1 {
        OK = "OK",
        DELETED = "DELETED"
    }
    interface FileReady {
        /** File entity that is ready with full information */
        file?: FileDescriptor;
        /** External information passed in the file import or upload. */
        externalInfo?: ExternalInfo;
        /** The File was restored from the trash-bin */
        triggeredByUndelete?: boolean;
    }
    interface ExternalInfo {
        /** External information to pass in the [File Ready](https://dev.wix.com/api/rest/media/media-manager/files/file-ready-domain-event) or [File Failed](https://dev.wix.com/api/rest/media/media-manager/files/file-failed-domain-event) events. */
        origin?: string;
        /** External IDs to pass in the [File Ready](https://dev.wix.com/api/rest/media/media-manager/files/file-ready-domain-event) or [File Failed](https://dev.wix.com/api/rest/media/media-manager/files/file-failed-domain-event) events. */
        externalIds?: string[];
    }
    interface FileFailed {
        /** External information passed in the file import or upload. */
        externalInfo?: ExternalInfo;
    }
    interface GenerateFilesDownloadUrlRequest {
        /** IDs of the files to download. */
        fileIds: string[];
    }
    interface GenerateFilesDownloadUrlResponse {
        /** URL for downloading the compressed file containing the specified files in the Media Manager. */
        downloadUrl?: string;
    }
    interface GenerateFileDownloadUrlRequest {
        /** File ID. */
        fileId: string;
        /**
         * Temporary file name used to identify the file type. For example, a file named "myFile.jpeg" identifies as an "image/jpeg" file type. <br />
         *
         * **Note:** The name that appears in the Media Manager is taken from the `filename` query parameter in the upload request.
         */
        downloadFileName?: string | null;
        /**
         * The time that it takes in minutes for the download URL to expire. <br />
         * Default: `600`. <br />
         * Limit: `525600` (1 year).
         */
        expirationInMinutes?: number | null;
        /**
         * The redirect URL for when the temporary download URL with a token expires. <br />
         * Default: A 403 Forbidden response page.
         */
        expirationRedirectUrl?: string | null;
        /**
         * Keys for downloading different assets (format and quality) of a file.
         * Default: `src`, key representing the original file's format and quality.
         */
        assetKeys?: string[] | null;
    }
    interface GenerateFileDownloadUrlResponse {
        /** URL for downloading a specific file in the Media Manager. */
        downloadUrls?: DownloadUrl[];
    }
    interface DownloadUrl {
        /** The file download URL. */
        url?: string;
        /**
         * Key for downloading a different asset (format and quality) of a file.
         * Default: `src`, key representing the original file's format and quality.
         */
        assetKey?: string;
    }
    interface GetFileDescriptorRequest {
        /** File ID. */
        fileId: string;
    }
    interface GetFileDescriptorResponse {
        /** Information about the file. */
        file?: FileDescriptor;
    }
    interface GetFileDescriptorsRequest {
        /** File IDs. */
        fileIds: string[];
    }
    interface GetFileDescriptorsResponse {
        /** Information about the requested files. */
        files?: FileDescriptor[];
    }
    interface UpdateFileRequest {
        /** ID of the file to update. */
        fileId: string;
        /** File name that appears in the Media Manager. */
        displayName?: string | null;
        /**
         * ID of the file's parent folder. <br />
         * Default: `media-root`.
         */
        parentFolderId?: string | null;
        /** Labels assigned to media files that describe and categorize them. Provided by the user, or generated by [Google Vision API](https://cloud.google.com/vision/docs/drag-and-drop) for images. */
        labels?: string[] | null;
    }
    interface UpdateFileResponse {
        /** Information about the updated file. */
        file?: FileDescriptor;
    }
    interface UpdateFileDescriptorRequest {
        /** The file to update. */
        file: FileDescriptor;
    }
    interface UpdateFileDescriptorResponse {
        /** Information about the updated file. */
        file?: FileDescriptor;
    }
    interface GenerateFileUploadUrlRequest {
        /** File mime type. */
        mimeType: string | null;
        /**
         * Temporary file name used to identify the file type. For example, a file named "myFile.jpeg" identifies as an "image/jpeg" file type.
         * <br /> **Note:** The name that appears in the Media Manager is taken from the `filename` query parameter in the upload request.
         */
        fileName?: string | null;
        /** File size in bytes. */
        sizeInBytes?: string | null;
        /**
         * ID of the file's parent folder. <br />
         * Default: `media-root`.
         */
        parentFolderId?: string | null;
        /** Whether the link to the uploaded file is public or private. See `Private Files` in terminology. */
        private?: boolean | null;
        /** Labels assigned to media files that describe and categorize them. Provided by the user, or generated by [Google Vision API](https://cloud.google.com/vision/docs/drag-and-drop) for images. */
        labels?: string[] | null;
        /** A place to map an external entity to an uploaded file in the Wix Media Manager. */
        externalInfo?: ExternalInfo;
    }
    interface GenerateFileUploadUrlResponse {
        /** The URL for uploading a file to the Media Manager. */
        uploadUrl?: string;
    }
    interface GenerateFileResumableUploadUrlRequest {
        /** File mime type. */
        mimeType: string | null;
        /**
         * Temporary file name used to identify the file type. For example, a file named "myFile.jpeg" identifies as an "image/jpeg" file type.
         * <br /> **Note:** The name that appears in the Media Manager is taken from the `filename` query parameter in the upload request.
         */
        fileName?: string | null;
        /** File size in bytes. */
        sizeInBytes?: string | null;
        /**
         * ID of the file's parent folder. <br />
         * Default: `media-root`.
         */
        parentFolderId?: string | null;
        /** Whether the link to the imported file is public or private. See `Private Files` in terminology. */
        private?: boolean | null;
        /** Labels assigned to media files that describe and categorize them. Provided by the user, or generated by [Google Vision API](https://cloud.google.com/vision/docs/drag-and-drop) for images. */
        labels?: string[] | null;
        /** The upload protocol to use for implementing the resumable upload. */
        uploadProtocol?: UploadProtocol;
    }
    enum UploadProtocol {
        /** The upload protocol to use for implementing the resumable upload. */
        TUS = "TUS"
    }
    interface GenerateFileResumableUploadUrlResponse {
        /**
         * The upload protocol to use for implementing the resumable upload.
         *
         * Supported values: `"TUS"`
         */
        uploadProtocol?: UploadProtocol;
        /** The URL for uploading a file to the Media Manager. */
        uploadUrl?: string;
        /** Single-use upload token. */
        uploadToken?: string;
    }
    interface ImportFileRequest {
        /** Publicly accessible external file URL. */
        url: string;
        /**
         * Media type of the file to import.
         *
         * Supported values: `"IMAGE"`, `"VIDEO"`, `"AUDIO"`, `"DOCUMENT"`, `"VECTOR"`, `"ARCHIVE"`, `"MODEL3D"`
         */
        mediaType?: MediaType;
        /** File name that appears in the Media Manager. */
        displayName?: string | null;
        /**
         * ID of the file's parent folder. <br />
         * Default: `media-root`.
         */
        parentFolderId?: string | null;
        /** Whether the link to the imported file is public or private. */
        private?: boolean | null;
        /** Labels assigned to media files that describe and categorize them. Provided by the user, or generated by [Google Vision API](https://cloud.google.com/vision/docs/drag-and-drop) for images. */
        labels?: string[] | null;
        /** File mime type. */
        mimeType?: string;
        /** A place to map an external entity to an imported file in the Wix Media Manager. */
        externalInfo?: ExternalInfo;
        /** Optional parameters that should be sent with the external URL. */
        urlParams?: Record<string, any> | null;
        /** Optional headers that should be sent with the external URL. */
        urlHeaders?: Record<string, any> | null;
    }
    interface ImportFileResponse {
        /** Information about the imported file. */
        file?: FileDescriptor;
    }
    interface BulkImportFilesRequest {
        /** Information about the files to import. */
        importFileRequests: ImportFileRequest[];
    }
    interface BulkImportFilesResponse {
        /** Information about the imported files. */
        files?: FileDescriptor[];
    }
    interface ListFilesRequest {
        /**
         * ID of the file's parent folder. <br />
         * Default:`media-root`.
         */
        parentFolderId?: string | null;
        /** File media type. */
        mediaTypes?: MediaType[];
        /** Whether the link to the imported file is public or private. */
        private?: boolean | null;
        /**
         * Field name and order to sort by. One of: <br />
         * * `displayName`
         * * `updatedDate`
         * Default: `updatedDate` in `desc` order.
         */
        sort?: Sorting$1;
        /** Cursor and paging information. */
        paging?: CursorPaging$1;
    }
    interface Sorting$1 {
        /** Name of the field to sort by. */
        fieldName?: string;
        /**
         * Sort order
         *
         * Supported values: `"ASC"`, `"DESC"`
         */
        order?: SortOrder$1;
    }
    enum SortOrder$1 {
        ASC = "ASC",
        DESC = "DESC"
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
    interface ListFilesResponse {
        /** List of files in the Media Manager. */
        files?: FileDescriptor[];
        /** The next cursor if it exists. */
        nextCursor?: PagingMetadataV2$1;
    }
    interface PagingMetadataV2$1 {
        /** Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used. */
        cursors?: Cursors$1;
    }
    interface Cursors$1 {
        /** Cursor pointing to next page in the list of results. */
        next?: string | null;
    }
    interface SearchFilesRequest {
        /**
         * Term to search for. Possible terms include the value of a file's
         * `displayName`, `mimeType`, and `label`. <br />
         * For example, if a file's label is cat, the search term is 'cat'.
         */
        search?: string | null;
        /**
         * A root folder in the media manager to search in. <br />
         * Default: `MEDIA_ROOT`.
         */
        rootFolder?: RootFolder$1;
        /** File media type. */
        mediaTypes?: MediaType[];
        /** Whether the link to the imported file is public or private. */
        private?: boolean | null;
        /**
         * Field name and order to sort by. One of: <br />
         * * `displayName`
         * * `updatedDate`
         * Default: `updatedDate` in `desc` order.
         */
        sort?: Sorting$1;
        /** Cursor and paging information. */
        paging?: CursorPaging$1;
    }
    enum RootFolder$1 {
        /** Root of all site media */
        MEDIA_ROOT = "MEDIA_ROOT",
        /** Root of the trash system folder */
        TRASH_ROOT = "TRASH_ROOT",
        /** Root of all visitor uploads */
        VISITOR_UPLOADS_ROOT = "VISITOR_UPLOADS_ROOT"
    }
    interface SearchFilesResponse {
        /** Files matching the query. */
        files?: FileDescriptor[];
        /** The next cursor if it exists. */
        nextCursor?: PagingMetadataV2$1;
    }
    interface GenerateVideoStreamingUrlRequest {
        /** File ID. */
        fileId: string;
        /** Video stream format. */
        format?: StreamFormat;
    }
    enum StreamFormat {
        UNKNOWN = "UNKNOWN",
        HLS = "HLS",
        DASH = "DASH"
    }
    interface GenerateVideoStreamingUrlResponse {
        /** URL for streaming a specific file in the Media Manager. */
        downloadUrl?: DownloadUrl;
    }
    interface GenerateWebSocketTokenRequest {
    }
    interface GenerateWebSocketTokenResponse {
        /** The web socket token for the identity in the request */
        token?: string;
    }
    interface BulkDeleteFilesRequest {
        /** IDs of the files to move to the Media Manager's trash bin. */
        fileIds: string[];
        /**
         * Whether the specified files are permanently deleted. <br />
         * Default: `false`
         */
        permanent?: boolean;
    }
    interface BulkDeleteFilesResponse {
    }
    interface BulkRestoreFilesFromTrashBinRequest {
        /** IDs of the files to restore from the Media Manager's trash bin. */
        fileIds: string[];
    }
    interface BulkRestoreFilesFromTrashBinResponse {
    }
    interface ListDeletedFilesRequest {
        /**
         * ID of the file's parent folder. <br />
         * Default: `media-root`.
         */
        parentFolderId?: string | null;
        /** File media type. */
        mediaTypes?: MediaType[];
        /** Whether the link to the imported file is public or private. */
        private?: boolean | null;
        /**
         * Field name and order to sort by. One of: <br />
         * * `displayName`
         * * `updatedDate`
         * Default: `updatedDate` in `desc` order.
         */
        sort?: Sorting$1;
        /** Cursor and paging information. */
        paging?: CursorPaging$1;
    }
    interface ListDeletedFilesResponse {
        /** List of files in the Media Manager's trash bin. */
        files?: FileDescriptor[];
        /** The next cursor if it exists. */
        nextCursor?: PagingMetadataV2$1;
    }
    /**
     * Generates a URL for downloading a compressed file containing specific files in the Media Manager.
     *
     * The compressed file can contain up to 1000 files.
     * @param fileIds - IDs of the files to download.
     * @public
     * @requiredField fileIds
     */
    function generateFilesDownloadUrl(fileIds: string[]): Promise<GenerateFilesDownloadUrlResponse>;
    /**
     * Generates one or more temporary URLs for downloading a specific file in the Media Manager.
     *
     * To download different assets of the file, use the `assetKeys` parameter which generates a download URL for each asset.
     * If no `assetKey` is specified, it defaults to `src`, which generates one download URL in the original file's format and quality.
     *
     * Use this endpoint to grant external clients access to a private media file. Use the `expirationInMinutes` parameter to set the URL expiration time, and the `expirationRedirectUrl` parameter to add a redirect url when the URL expires.
     * @param fileId - File ID.
     * @public
     * @requiredField fileId
     * @param options - Options to use when generating a file's download URL.
     */
    function generateFileDownloadUrl(fileId: string, options?: GenerateFileDownloadUrlOptions): Promise<GenerateFileDownloadUrlResponse>;
    interface GenerateFileDownloadUrlOptions {
        /**
         * Temporary file name used to identify the file type. For example, a file named "myFile.jpeg" identifies as an "image/jpeg" file type. <br />
         *
         * **Note:** The name that appears in the Media Manager is taken from the `filename` query parameter in the upload request.
         */
        downloadFileName?: string | null;
        /**
         * The time that it takes in minutes for the download URL to expire. <br />
         * Default: `600`. <br />
         * Limit: `525600` (1 year).
         */
        expirationInMinutes?: number | null;
        /**
         * The redirect URL for when the temporary download URL with a token expires. <br />
         * Default: A 403 Forbidden response page.
         */
        expirationRedirectUrl?: string | null;
        /**
         * Keys for downloading different assets (format and quality) of a file.
         * Default: `src`, key representing the original file's format and quality.
         */
        assetKeys?: string[] | null;
    }
    /**
     * Gets information about a specific file in the Media Manager.
     * @param fileId - File ID.
     * @public
     * @requiredField fileId
     * @returns Information about the file.
     */
    function getFileDescriptor(fileId: string): Promise<FileDescriptor>;
    /**
     * Gets information about the specified files in the Media Manager.
     * @param fileIds - File IDs.
     * @public
     * @requiredField fileIds
     */
    function getFileDescriptors(fileIds: string[]): Promise<GetFileDescriptorsResponse>;
    interface UpdateFileOptions {
        /** File name that appears in the Media Manager. */
        displayName?: string | null;
        /**
         * ID of the file's parent folder. <br />
         * Default: `media-root`.
         */
        parentFolderId?: string | null;
        /** Labels assigned to media files that describe and categorize them. Provided by the user, or generated by [Google Vision API](https://cloud.google.com/vision/docs/drag-and-drop) for images. */
        labels?: string[] | null;
    }
    /**
     * Updates a file. <br />
     *
     * You can use the `parentFolderId` parameter to move a file from its current folder to a different folder.
     * @param _id - File ID. Generated when a file is uploaded to the Media Manager.
     * @public
     * @requiredField _id
     * @requiredField file
     * @returns Information about the updated file.
     */
    function updateFileDescriptor(_id: string, file: UpdateFileDescriptorFile, options?: UpdateFileDescriptorOptions): Promise<FileDescriptor>;
    interface UpdateFileDescriptorFile {
        /**
         * File ID. Generated when a file is uploaded to the Media Manager.
         * @readonly
         */
        _id?: string;
        /** File name as it appears in the Media Manager. */
        displayName?: string;
        /**
         * Static URL of the file.
         * @readonly
         */
        url?: string;
        /** ID of the file's parent folder. */
        parentFolderId?: string | null;
        /**
         * File hash.
         * @readonly
         */
        hash?: string;
        /**
         * Size of the uploaded file in bytes.
         * @readonly
         */
        sizeInBytes?: string | null;
        /**
         * Whether the link to the uploaded file is public or private. Private links require a token.
         * @readonly
         */
        private?: boolean;
        /**
         * Media file type.
         *
         * Supported values: `"IMAGE"`, `"VIDEO"`, `"AUDIO"`, `"DOCUMENT"`, `"VECTOR"`, `"ARCHIVE"`, `"MODEL3D"`
         * @readonly
         */
        mediaType?: MediaType;
        /**
         * Media file content.
         * @readonly
         */
        media?: FileMedia;
        /**
         * Status of the file that was uploaded.
         *
         * Supported values: `"FAILED"`, `"READY"`, `"PENDING"`
         * * `FAILED`: The file failed to upload, for example, during media post processing.
         * * `READY`: The file uploaded, finished all processing, and is ready for use.
         * * `PENDING`: The file is processing and the URLs are not yet available. This response is returned when importing a file.
         * @readonly
         */
        operationStatus?: OperationStatus;
        /**
         * URL where the file was uploaded from.
         * @readonly
         */
        sourceUrl?: string | null;
        /**
         * URL of the file's thumbnail.
         * @readonly
         */
        thumbnailUrl?: string | null;
        /** Labels assigned to media files that describe and categorize them. Provided by the user, or generated by [Google Vision API](https://cloud.google.com/vision/docs/drag-and-drop) for images. */
        labels?: string[];
        /**
         * Date and time the file was created.
         * @readonly
         */
        _createdDate?: Date;
        /**
         * Date and time the file was updated.
         * @readonly
         */
        _updatedDate?: Date;
        /**
         * The Wix site ID where the media file is stored.
         * @readonly
         */
        siteId?: string;
        /**
         * State of the file.
         *
         * Supported values: `"OK"`, `"DELETED"`
         * @readonly
         */
        state?: State$1;
    }
    interface UpdateFileDescriptorOptions {
    }
    /**
     * Generates an upload URL to allow external clients to upload a file to the Media Manager.
     *
     * To learn how external clients can use the generated upload URL in the response to upload a file to the Media Manager, see the [Upload API](#upload-api).
     *
     * > **Note:** Any interruption in the upload process stops the file upload. For files larger than 10MB, or when network connection is poor, use the [Generate File Resumable Upload Url](#generatefileresumableuploadurl) instead. With the resumable upload URL, any interruption in the upload process pauses the file upload, and resumes the file upload process after the interruption.
     * @param mimeType - File mime type.
     * @public
     * @requiredField mimeType
     * @param options - Options to use when generating a file's upload URL.
     */
    function generateFileUploadUrl(mimeType: string | null, options?: GenerateFileUploadUrlOptions): Promise<GenerateFileUploadUrlResponse>;
    interface GenerateFileUploadUrlOptions {
        /**
         * Temporary file name used to identify the file type. For example, a file named "myFile.jpeg" identifies as an "image/jpeg" file type.
         * <br /> **Note:** The name that appears in the Media Manager is taken from the `filename` query parameter in the upload request.
         */
        fileName?: string | null;
        /** File size in bytes. */
        sizeInBytes?: string | null;
        /**
         * ID of the file's parent folder. <br />
         * Default: `media-root`.
         */
        parentFolderId?: string | null;
        /** Whether the link to the uploaded file is public or private. See `Private Files` in terminology. */
        private?: boolean | null;
        /** Labels assigned to media files that describe and categorize them. Provided by the user, or generated by [Google Vision API](https://cloud.google.com/vision/docs/drag-and-drop) for images. */
        labels?: string[] | null;
        /** A place to map an external entity to an uploaded file in the Wix Media Manager. */
        externalInfo?: ExternalInfo;
    }
    /**
     * Generates a resumable upload URL to allow external clients to easily upload large files over 10MB to the Media Manager.
     *
     * With the resumable upload URL, any interruptions in the upload process pauses the file upload, and resumes the file upload process after the interruption. The resumable upload URL is also helpful when network connection is poor.
     *
     * To learn how external clients can use the generated upload URL in the response to upload large files to the Media Manager, see the [Resumable Upload API](#resumable-upload-api) article.
     * @param mimeType - File mime type.
     * @public
     * @requiredField mimeType
     * @param options - Options to use when generating a resumable upload URL.
     */
    function generateFileResumableUploadUrl(mimeType: string | null, options?: GenerateFileResumableUploadUrlOptions): Promise<GenerateFileResumableUploadUrlResponse>;
    interface GenerateFileResumableUploadUrlOptions {
        /**
         * Temporary file name used to identify the file type. For example, a file named "myFile.jpeg" identifies as an "image/jpeg" file type.
         * <br /> **Note:** The name that appears in the Media Manager is taken from the `filename` query parameter in the upload request.
         */
        fileName?: string | null;
        /** File size in bytes. */
        sizeInBytes?: string | null;
        /**
         * ID of the file's parent folder. <br />
         * Default: `media-root`.
         */
        parentFolderId?: string | null;
        /** Whether the link to the imported file is public or private. See `Private Files` in terminology. */
        private?: boolean | null;
        /** Labels assigned to media files that describe and categorize them. Provided by the user, or generated by [Google Vision API](https://cloud.google.com/vision/docs/drag-and-drop) for images. */
        labels?: string[] | null;
        /**
         * The upload protocol to use for implementing the resumable upload.
         *
         * Supported values: `"TUS"`
         */
        uploadProtocol?: UploadProtocol;
    }
    /**
     * Imports a file to the Media Manager using an external url.
     *
     * This function returns information about the imported file.
     * Use the `parentFolderId` parameter to specify which folder you want the file to be imported to.
     * If no folder is specified, the file is imported to the `media-root` folder.
     *
     * To import a file, you need to provide one of the following:
     * 1. Pass the file's [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) in the `mimeType` parameter of the request. For example, `'image/png'`.
     * 2. Pass the file's name and extension. For example, `'my-image.png'`.
     * 3. If you don't know the file's extension or MIME type, pass its [media type](https://support.wix.com/en/article/wix-media-supported-media-file-types-and-file-sizes) in the `mediaType` parameter of the request. For example, `'IMAGE'`. Note that this option only works if the server hosting the media allows a 'HEAD' request.
     *
     * >**Note:** The `media` property isn't returned in the `files` response object.
     *
     * @param url - Publicly accessible external file URL.
     * @public
     * @requiredField url
     * @param options - Options to use when importing a single file.
     */
    function importFile(url: string, options?: ImportFileOptions): Promise<ImportFileResponse>;
    interface ImportFileOptions {
        /**
         * Media type of the file to import.
         *
         * Supported values: `"IMAGE"`, `"VIDEO"`, `"AUDIO"`, `"DOCUMENT"`, `"VECTOR"`, `"ARCHIVE"`, `"MODEL3D"`
         */
        mediaType?: MediaType;
        /** File name that appears in the Media Manager. */
        displayName?: string | null;
        /**
         * ID of the file's parent folder. <br />
         * Default: `media-root`.
         */
        parentFolderId?: string | null;
        /** Whether the link to the imported file is public or private. */
        private?: boolean | null;
        /** Labels assigned to media files that describe and categorize them. Provided by the user, or generated by [Google Vision API](https://cloud.google.com/vision/docs/drag-and-drop) for images. */
        labels?: string[] | null;
        /** File mime type. */
        mimeType?: string;
        /** A place to map an external entity to an imported file in the Wix Media Manager. */
        externalInfo?: ExternalInfo;
        /** Optional parameters that should be sent with the external URL. */
        urlParams?: Record<string, any> | null;
        /** Optional headers that should be sent with the external URL. */
        urlHeaders?: Record<string, any> | null;
    }
    /**
     * Imports a bulk of files to the Media Manager using external urls.
     *
     * Returns information about the imported files. Use the `parentFolderId` parameter to specify in which folder you want each file to be imported to.
     * If no folder is specified, the file is imported to the `media-root` folder.
     *
     * To import files, you need to provide one of the following:
     * 1. Pass each file's [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) in the `mimeType` parameter of the request. For example, `'image/png'`.
     * 2. Pass each file's name and extension. For example, `'my-image.png'`.
     * 3. If you don't know a file's extension or MIME type, pass its [media type](https://support.wix.com/en/article/wix-media-supported-media-file-types-and-file-sizes) in the `mediaType` parameter of the request. For example, `'IMAGE'`. Note that this option only works if the server hosting the media allows a 'HEAD' request.
     *
     * >**Note:** The `media` property isn't returned in the `files` response object.
     * @param importFileRequests - Information about the files to import.
     * @public
     * @requiredField importFileRequests
     * @requiredField importFileRequests.url
     * @param options - Options to use when uploading multiple files.
     */
    function bulkImportFiles(importFileRequests: ImportFileRequest[]): Promise<BulkImportFilesResponse>;
    /**
     * Retrieves a list of files in the Media Manager.
     *
     * To retrieve a list of files within a specific folder in the Media Manager, pass the folder's ID in the `parentFolderId` parameter. If no folder is specified, the endpoint retrieves the list of files in the root folder of the Media Manager.
     * @public
     * @param options - Options to use when listing media files.
     */
    function listFiles(options?: ListFilesOptions): Promise<ListFilesResponse>;
    interface ListFilesOptions {
        /**
         * ID of the file's parent folder. <br />
         * Default:`media-root`.
         */
        parentFolderId?: string | null;
        /**
         * Media file type.
         *
         * Supported values: `"IMAGE"`, `"VIDEO"`, `"AUDIO"`, `"DOCUMENT"`, `"VECTOR"`, `"ARCHIVE"`, `"MODEL3D"`
         */
        mediaTypes?: MediaType[];
        /** Whether the link to the imported file is public or private. */
        private?: boolean | null;
        /**
         * Field name and order to sort by. One of: <br />
         * * `displayName`
         * * `updatedDate`
         * Default: `updatedDate` in `desc` order.
         */
        sort?: Sorting$1;
        /** Cursor and paging information. */
        paging?: CursorPaging$1;
    }
    /**
     * Searches all folders in the Media Manager and returns a list of files that match the terms specified in the optional parameters.
     *
     * If no parameters are specified, the endpoint returns all files in the `MEDIA_ROOT` folder.
     * @public
     * @param options - Options to specify which folders to search.
     */
    function searchFiles(options?: SearchFilesOptions): Promise<SearchFilesResponse>;
    interface SearchFilesOptions {
        /**
         * Term to search for. Possible terms include the value of a file's
         * `displayName`, `mimeType`, and `label`. <br />
         * For example, if a file's label is cat, the search term is 'cat'.
         */
        search?: string | null;
        /**
         * A root folder in the media manager to search in. <br />
         * Default: `MEDIA_ROOT`.
         */
        rootFolder?: RootFolder$1;
        /**
         * Media file type.
         *
         * Supported values: `"IMAGE"`, `"VIDEO"`, `"AUDIO"`, `"DOCUMENT"`, `"VECTOR"`, `"ARCHIVE"`, `"MODEL3D"`
         */
        mediaTypes?: MediaType[];
        /** Whether the link to the imported file is public or private. */
        private?: boolean | null;
        /**
         * Field name and order to sort by. One of: <br />
         * * `displayName`
         * * `updatedDate`
         * Default: `updatedDate` in `desc` order.
         */
        sort?: Sorting$1;
        /** Cursor and paging information. */
        paging?: CursorPaging$1;
    }
    /**
     * Generates a URL for streaming a specific video file in the Media Manager.
     *
     * To stream different assets of the file, use the `assetKeys` parameter which generates a video streaming URL for each asset. If no assetKey is specified, it defaults to `src`, which generates one video streaming URL in the original file's format and quality.
     * @param fileId - File ID.
     * @public
     * @requiredField fileId
     * @param options - Options to use when generating a video file's streaming URL.
     */
    function generateVideoStreamingUrl(fileId: string, options?: GenerateVideoStreamingUrlOptions): Promise<GenerateVideoStreamingUrlResponse>;
    interface GenerateVideoStreamingUrlOptions {
        /**
         * Video stream format.
         *
         * Supported values: `"UNKNOWN"`, `"HLS"`, `"DASH"`
         *
         *
         */
        format?: StreamFormat;
    }
    /**
     * Deletes the specified files from the Media Manager.
     *
     *
     * The deleted files are moved to the Media Manager's trash bin (`TRASH-ROOT` folder) unless permanently deleted. To permanently delete files, pass the `permanent` parameter with the value `true`. Permanently deleting files isn't reversible, so make sure that these files aren't being used in a site or in any other way as the files will no longer be accessible.
     *
     * >**Notes:**
     * > - The specified files can be from different folders.
     * > - Moving multiple files at once is an asynchronous action, and may take time for the changes to appear in the Media Manager.
     * > - Attempting to delete files that are already in the trash bin doesn't result in an error.
     * > - If your site contains deleted media files, the deleted media files still appear on your site as the files are still in the Media Manager (in the trash bin).
     * > - You can use the [Bulk Restore Files From Trash Bin](#bulkrestorefilesfromtrashbin) endpoint to restore files from the Media Manager's trash bin.
     * @param fileIds - IDs of the files to move to the Media Manager's trash bin.
     * @public
     * @requiredField fileIds
     * @param options - Options to use when deleting files.
     */
    function bulkDeleteFiles(fileIds: string[], options?: BulkDeleteFilesOptions): Promise<void>;
    interface BulkDeleteFilesOptions {
        /**
         * Whether the specified files are permanently deleted. <br />
         * Default: `false`
         */
        permanent?: boolean;
    }
    /**
     * Restores the specified files from the Media Manager's trash bin, and moves them to their original locations in the Media Manager.
     * @param fileIds - IDs of the files to restore from the Media Manager's trash bin.
     * @public
     * @requiredField fileIds
     */
    function bulkRestoreFilesFromTrashBin(fileIds: string[]): Promise<void>;
    /**
     * Retrieves a list of files in the Media Manager's trash bin.
     *
     * >**Note:** The Media Manager's trash bin (`TRASH-ROOT` folder) only contains temporarily deleted files, not permanently deleted files.
     *
     * This function is not a universal function and runs only on the backend.
     * @public
     * @param options - Options to use when listing deleted files from the trash bin.
     */
    function listDeletedFiles(options?: ListDeletedFilesOptions): Promise<ListDeletedFilesResponse>;
    interface ListDeletedFilesOptions {
        /**
         * ID of the file's parent folder. <br />
         * Default: `media-root`.
         */
        parentFolderId?: string | null;
        /**
         * Media file type.
         *
         * Supported values: `"IMAGE"`, `"VIDEO"`, `"AUDIO"`, `"DOCUMENT"`, `"VECTOR"`, `"ARCHIVE"`, `"MODEL3D"`
         */
        mediaTypes?: MediaType[];
        /** Whether the link to the imported file is public or private. */
        private?: boolean | null;
        /**
         * Field name and order to sort by. One of: <br />
         * * `displayName`
         * * `updatedDate`
         * Default: `updatedDate` in `desc` order.
         */
        sort?: Sorting$1;
        /** Cursor and paging information. */
        paging?: CursorPaging$1;
    }
    type mediaSiteMediaV1FileDescriptor_universal_d_FileDescriptor = FileDescriptor;
    type mediaSiteMediaV1FileDescriptor_universal_d_MediaType = MediaType;
    const mediaSiteMediaV1FileDescriptor_universal_d_MediaType: typeof MediaType;
    type mediaSiteMediaV1FileDescriptor_universal_d_FileMedia = FileMedia;
    type mediaSiteMediaV1FileDescriptor_universal_d_FileMediaMediaOneOf = FileMediaMediaOneOf;
    type mediaSiteMediaV1FileDescriptor_universal_d_ImageMedia = ImageMedia;
    type mediaSiteMediaV1FileDescriptor_universal_d_Colors = Colors;
    type mediaSiteMediaV1FileDescriptor_universal_d_Color = Color;
    type mediaSiteMediaV1FileDescriptor_universal_d_ColorRGB = ColorRGB;
    type mediaSiteMediaV1FileDescriptor_universal_d_FaceRecognition = FaceRecognition;
    type mediaSiteMediaV1FileDescriptor_universal_d_VideoResolution = VideoResolution;
    type mediaSiteMediaV1FileDescriptor_universal_d_AudioV2 = AudioV2;
    type mediaSiteMediaV1FileDescriptor_universal_d_Archive = Archive;
    type mediaSiteMediaV1FileDescriptor_universal_d_Model3D = Model3D;
    type mediaSiteMediaV1FileDescriptor_universal_d_OperationStatus = OperationStatus;
    const mediaSiteMediaV1FileDescriptor_universal_d_OperationStatus: typeof OperationStatus;
    type mediaSiteMediaV1FileDescriptor_universal_d_FileReady = FileReady;
    type mediaSiteMediaV1FileDescriptor_universal_d_ExternalInfo = ExternalInfo;
    type mediaSiteMediaV1FileDescriptor_universal_d_FileFailed = FileFailed;
    type mediaSiteMediaV1FileDescriptor_universal_d_GenerateFilesDownloadUrlRequest = GenerateFilesDownloadUrlRequest;
    type mediaSiteMediaV1FileDescriptor_universal_d_GenerateFilesDownloadUrlResponse = GenerateFilesDownloadUrlResponse;
    type mediaSiteMediaV1FileDescriptor_universal_d_GenerateFileDownloadUrlRequest = GenerateFileDownloadUrlRequest;
    type mediaSiteMediaV1FileDescriptor_universal_d_GenerateFileDownloadUrlResponse = GenerateFileDownloadUrlResponse;
    type mediaSiteMediaV1FileDescriptor_universal_d_DownloadUrl = DownloadUrl;
    type mediaSiteMediaV1FileDescriptor_universal_d_GetFileDescriptorRequest = GetFileDescriptorRequest;
    type mediaSiteMediaV1FileDescriptor_universal_d_GetFileDescriptorResponse = GetFileDescriptorResponse;
    type mediaSiteMediaV1FileDescriptor_universal_d_GetFileDescriptorsRequest = GetFileDescriptorsRequest;
    type mediaSiteMediaV1FileDescriptor_universal_d_GetFileDescriptorsResponse = GetFileDescriptorsResponse;
    type mediaSiteMediaV1FileDescriptor_universal_d_UpdateFileRequest = UpdateFileRequest;
    type mediaSiteMediaV1FileDescriptor_universal_d_UpdateFileResponse = UpdateFileResponse;
    type mediaSiteMediaV1FileDescriptor_universal_d_UpdateFileDescriptorRequest = UpdateFileDescriptorRequest;
    type mediaSiteMediaV1FileDescriptor_universal_d_UpdateFileDescriptorResponse = UpdateFileDescriptorResponse;
    type mediaSiteMediaV1FileDescriptor_universal_d_GenerateFileUploadUrlRequest = GenerateFileUploadUrlRequest;
    type mediaSiteMediaV1FileDescriptor_universal_d_GenerateFileUploadUrlResponse = GenerateFileUploadUrlResponse;
    type mediaSiteMediaV1FileDescriptor_universal_d_GenerateFileResumableUploadUrlRequest = GenerateFileResumableUploadUrlRequest;
    type mediaSiteMediaV1FileDescriptor_universal_d_UploadProtocol = UploadProtocol;
    const mediaSiteMediaV1FileDescriptor_universal_d_UploadProtocol: typeof UploadProtocol;
    type mediaSiteMediaV1FileDescriptor_universal_d_GenerateFileResumableUploadUrlResponse = GenerateFileResumableUploadUrlResponse;
    type mediaSiteMediaV1FileDescriptor_universal_d_ImportFileRequest = ImportFileRequest;
    type mediaSiteMediaV1FileDescriptor_universal_d_ImportFileResponse = ImportFileResponse;
    type mediaSiteMediaV1FileDescriptor_universal_d_BulkImportFilesRequest = BulkImportFilesRequest;
    type mediaSiteMediaV1FileDescriptor_universal_d_BulkImportFilesResponse = BulkImportFilesResponse;
    type mediaSiteMediaV1FileDescriptor_universal_d_ListFilesRequest = ListFilesRequest;
    type mediaSiteMediaV1FileDescriptor_universal_d_ListFilesResponse = ListFilesResponse;
    type mediaSiteMediaV1FileDescriptor_universal_d_SearchFilesRequest = SearchFilesRequest;
    type mediaSiteMediaV1FileDescriptor_universal_d_SearchFilesResponse = SearchFilesResponse;
    type mediaSiteMediaV1FileDescriptor_universal_d_GenerateVideoStreamingUrlRequest = GenerateVideoStreamingUrlRequest;
    type mediaSiteMediaV1FileDescriptor_universal_d_StreamFormat = StreamFormat;
    const mediaSiteMediaV1FileDescriptor_universal_d_StreamFormat: typeof StreamFormat;
    type mediaSiteMediaV1FileDescriptor_universal_d_GenerateVideoStreamingUrlResponse = GenerateVideoStreamingUrlResponse;
    type mediaSiteMediaV1FileDescriptor_universal_d_GenerateWebSocketTokenRequest = GenerateWebSocketTokenRequest;
    type mediaSiteMediaV1FileDescriptor_universal_d_GenerateWebSocketTokenResponse = GenerateWebSocketTokenResponse;
    type mediaSiteMediaV1FileDescriptor_universal_d_BulkDeleteFilesRequest = BulkDeleteFilesRequest;
    type mediaSiteMediaV1FileDescriptor_universal_d_BulkDeleteFilesResponse = BulkDeleteFilesResponse;
    type mediaSiteMediaV1FileDescriptor_universal_d_BulkRestoreFilesFromTrashBinRequest = BulkRestoreFilesFromTrashBinRequest;
    type mediaSiteMediaV1FileDescriptor_universal_d_BulkRestoreFilesFromTrashBinResponse = BulkRestoreFilesFromTrashBinResponse;
    type mediaSiteMediaV1FileDescriptor_universal_d_ListDeletedFilesRequest = ListDeletedFilesRequest;
    type mediaSiteMediaV1FileDescriptor_universal_d_ListDeletedFilesResponse = ListDeletedFilesResponse;
    const mediaSiteMediaV1FileDescriptor_universal_d_generateFilesDownloadUrl: typeof generateFilesDownloadUrl;
    const mediaSiteMediaV1FileDescriptor_universal_d_generateFileDownloadUrl: typeof generateFileDownloadUrl;
    type mediaSiteMediaV1FileDescriptor_universal_d_GenerateFileDownloadUrlOptions = GenerateFileDownloadUrlOptions;
    const mediaSiteMediaV1FileDescriptor_universal_d_getFileDescriptor: typeof getFileDescriptor;
    const mediaSiteMediaV1FileDescriptor_universal_d_getFileDescriptors: typeof getFileDescriptors;
    type mediaSiteMediaV1FileDescriptor_universal_d_UpdateFileOptions = UpdateFileOptions;
    const mediaSiteMediaV1FileDescriptor_universal_d_updateFileDescriptor: typeof updateFileDescriptor;
    type mediaSiteMediaV1FileDescriptor_universal_d_UpdateFileDescriptorFile = UpdateFileDescriptorFile;
    type mediaSiteMediaV1FileDescriptor_universal_d_UpdateFileDescriptorOptions = UpdateFileDescriptorOptions;
    const mediaSiteMediaV1FileDescriptor_universal_d_generateFileUploadUrl: typeof generateFileUploadUrl;
    type mediaSiteMediaV1FileDescriptor_universal_d_GenerateFileUploadUrlOptions = GenerateFileUploadUrlOptions;
    const mediaSiteMediaV1FileDescriptor_universal_d_generateFileResumableUploadUrl: typeof generateFileResumableUploadUrl;
    type mediaSiteMediaV1FileDescriptor_universal_d_GenerateFileResumableUploadUrlOptions = GenerateFileResumableUploadUrlOptions;
    const mediaSiteMediaV1FileDescriptor_universal_d_importFile: typeof importFile;
    type mediaSiteMediaV1FileDescriptor_universal_d_ImportFileOptions = ImportFileOptions;
    const mediaSiteMediaV1FileDescriptor_universal_d_bulkImportFiles: typeof bulkImportFiles;
    const mediaSiteMediaV1FileDescriptor_universal_d_listFiles: typeof listFiles;
    type mediaSiteMediaV1FileDescriptor_universal_d_ListFilesOptions = ListFilesOptions;
    const mediaSiteMediaV1FileDescriptor_universal_d_searchFiles: typeof searchFiles;
    type mediaSiteMediaV1FileDescriptor_universal_d_SearchFilesOptions = SearchFilesOptions;
    const mediaSiteMediaV1FileDescriptor_universal_d_generateVideoStreamingUrl: typeof generateVideoStreamingUrl;
    type mediaSiteMediaV1FileDescriptor_universal_d_GenerateVideoStreamingUrlOptions = GenerateVideoStreamingUrlOptions;
    const mediaSiteMediaV1FileDescriptor_universal_d_bulkDeleteFiles: typeof bulkDeleteFiles;
    type mediaSiteMediaV1FileDescriptor_universal_d_BulkDeleteFilesOptions = BulkDeleteFilesOptions;
    const mediaSiteMediaV1FileDescriptor_universal_d_bulkRestoreFilesFromTrashBin: typeof bulkRestoreFilesFromTrashBin;
    const mediaSiteMediaV1FileDescriptor_universal_d_listDeletedFiles: typeof listDeletedFiles;
    type mediaSiteMediaV1FileDescriptor_universal_d_ListDeletedFilesOptions = ListDeletedFilesOptions;
    namespace mediaSiteMediaV1FileDescriptor_universal_d {
        export { __debug$1 as __debug, mediaSiteMediaV1FileDescriptor_universal_d_FileDescriptor as FileDescriptor, mediaSiteMediaV1FileDescriptor_universal_d_MediaType as MediaType, mediaSiteMediaV1FileDescriptor_universal_d_FileMedia as FileMedia, mediaSiteMediaV1FileDescriptor_universal_d_FileMediaMediaOneOf as FileMediaMediaOneOf, mediaSiteMediaV1FileDescriptor_universal_d_ImageMedia as ImageMedia, mediaSiteMediaV1FileDescriptor_universal_d_Colors as Colors, mediaSiteMediaV1FileDescriptor_universal_d_Color as Color, mediaSiteMediaV1FileDescriptor_universal_d_ColorRGB as ColorRGB, mediaSiteMediaV1FileDescriptor_universal_d_FaceRecognition as FaceRecognition, mediaSiteMediaV1FileDescriptor_universal_d_VideoResolution as VideoResolution, mediaSiteMediaV1FileDescriptor_universal_d_AudioV2 as AudioV2, mediaSiteMediaV1FileDescriptor_universal_d_Archive as Archive, mediaSiteMediaV1FileDescriptor_universal_d_Model3D as Model3D, mediaSiteMediaV1FileDescriptor_universal_d_OperationStatus as OperationStatus, State$1 as State, mediaSiteMediaV1FileDescriptor_universal_d_FileReady as FileReady, mediaSiteMediaV1FileDescriptor_universal_d_ExternalInfo as ExternalInfo, mediaSiteMediaV1FileDescriptor_universal_d_FileFailed as FileFailed, mediaSiteMediaV1FileDescriptor_universal_d_GenerateFilesDownloadUrlRequest as GenerateFilesDownloadUrlRequest, mediaSiteMediaV1FileDescriptor_universal_d_GenerateFilesDownloadUrlResponse as GenerateFilesDownloadUrlResponse, mediaSiteMediaV1FileDescriptor_universal_d_GenerateFileDownloadUrlRequest as GenerateFileDownloadUrlRequest, mediaSiteMediaV1FileDescriptor_universal_d_GenerateFileDownloadUrlResponse as GenerateFileDownloadUrlResponse, mediaSiteMediaV1FileDescriptor_universal_d_DownloadUrl as DownloadUrl, mediaSiteMediaV1FileDescriptor_universal_d_GetFileDescriptorRequest as GetFileDescriptorRequest, mediaSiteMediaV1FileDescriptor_universal_d_GetFileDescriptorResponse as GetFileDescriptorResponse, mediaSiteMediaV1FileDescriptor_universal_d_GetFileDescriptorsRequest as GetFileDescriptorsRequest, mediaSiteMediaV1FileDescriptor_universal_d_GetFileDescriptorsResponse as GetFileDescriptorsResponse, mediaSiteMediaV1FileDescriptor_universal_d_UpdateFileRequest as UpdateFileRequest, mediaSiteMediaV1FileDescriptor_universal_d_UpdateFileResponse as UpdateFileResponse, mediaSiteMediaV1FileDescriptor_universal_d_UpdateFileDescriptorRequest as UpdateFileDescriptorRequest, mediaSiteMediaV1FileDescriptor_universal_d_UpdateFileDescriptorResponse as UpdateFileDescriptorResponse, mediaSiteMediaV1FileDescriptor_universal_d_GenerateFileUploadUrlRequest as GenerateFileUploadUrlRequest, mediaSiteMediaV1FileDescriptor_universal_d_GenerateFileUploadUrlResponse as GenerateFileUploadUrlResponse, mediaSiteMediaV1FileDescriptor_universal_d_GenerateFileResumableUploadUrlRequest as GenerateFileResumableUploadUrlRequest, mediaSiteMediaV1FileDescriptor_universal_d_UploadProtocol as UploadProtocol, mediaSiteMediaV1FileDescriptor_universal_d_GenerateFileResumableUploadUrlResponse as GenerateFileResumableUploadUrlResponse, mediaSiteMediaV1FileDescriptor_universal_d_ImportFileRequest as ImportFileRequest, mediaSiteMediaV1FileDescriptor_universal_d_ImportFileResponse as ImportFileResponse, mediaSiteMediaV1FileDescriptor_universal_d_BulkImportFilesRequest as BulkImportFilesRequest, mediaSiteMediaV1FileDescriptor_universal_d_BulkImportFilesResponse as BulkImportFilesResponse, mediaSiteMediaV1FileDescriptor_universal_d_ListFilesRequest as ListFilesRequest, Sorting$1 as Sorting, SortOrder$1 as SortOrder, CursorPaging$1 as CursorPaging, mediaSiteMediaV1FileDescriptor_universal_d_ListFilesResponse as ListFilesResponse, PagingMetadataV2$1 as PagingMetadataV2, Cursors$1 as Cursors, mediaSiteMediaV1FileDescriptor_universal_d_SearchFilesRequest as SearchFilesRequest, RootFolder$1 as RootFolder, mediaSiteMediaV1FileDescriptor_universal_d_SearchFilesResponse as SearchFilesResponse, mediaSiteMediaV1FileDescriptor_universal_d_GenerateVideoStreamingUrlRequest as GenerateVideoStreamingUrlRequest, mediaSiteMediaV1FileDescriptor_universal_d_StreamFormat as StreamFormat, mediaSiteMediaV1FileDescriptor_universal_d_GenerateVideoStreamingUrlResponse as GenerateVideoStreamingUrlResponse, mediaSiteMediaV1FileDescriptor_universal_d_GenerateWebSocketTokenRequest as GenerateWebSocketTokenRequest, mediaSiteMediaV1FileDescriptor_universal_d_GenerateWebSocketTokenResponse as GenerateWebSocketTokenResponse, mediaSiteMediaV1FileDescriptor_universal_d_BulkDeleteFilesRequest as BulkDeleteFilesRequest, mediaSiteMediaV1FileDescriptor_universal_d_BulkDeleteFilesResponse as BulkDeleteFilesResponse, mediaSiteMediaV1FileDescriptor_universal_d_BulkRestoreFilesFromTrashBinRequest as BulkRestoreFilesFromTrashBinRequest, mediaSiteMediaV1FileDescriptor_universal_d_BulkRestoreFilesFromTrashBinResponse as BulkRestoreFilesFromTrashBinResponse, mediaSiteMediaV1FileDescriptor_universal_d_ListDeletedFilesRequest as ListDeletedFilesRequest, mediaSiteMediaV1FileDescriptor_universal_d_ListDeletedFilesResponse as ListDeletedFilesResponse, mediaSiteMediaV1FileDescriptor_universal_d_generateFilesDownloadUrl as generateFilesDownloadUrl, mediaSiteMediaV1FileDescriptor_universal_d_generateFileDownloadUrl as generateFileDownloadUrl, mediaSiteMediaV1FileDescriptor_universal_d_GenerateFileDownloadUrlOptions as GenerateFileDownloadUrlOptions, mediaSiteMediaV1FileDescriptor_universal_d_getFileDescriptor as getFileDescriptor, mediaSiteMediaV1FileDescriptor_universal_d_getFileDescriptors as getFileDescriptors, mediaSiteMediaV1FileDescriptor_universal_d_UpdateFileOptions as UpdateFileOptions, mediaSiteMediaV1FileDescriptor_universal_d_updateFileDescriptor as updateFileDescriptor, mediaSiteMediaV1FileDescriptor_universal_d_UpdateFileDescriptorFile as UpdateFileDescriptorFile, mediaSiteMediaV1FileDescriptor_universal_d_UpdateFileDescriptorOptions as UpdateFileDescriptorOptions, mediaSiteMediaV1FileDescriptor_universal_d_generateFileUploadUrl as generateFileUploadUrl, mediaSiteMediaV1FileDescriptor_universal_d_GenerateFileUploadUrlOptions as GenerateFileUploadUrlOptions, mediaSiteMediaV1FileDescriptor_universal_d_generateFileResumableUploadUrl as generateFileResumableUploadUrl, mediaSiteMediaV1FileDescriptor_universal_d_GenerateFileResumableUploadUrlOptions as GenerateFileResumableUploadUrlOptions, mediaSiteMediaV1FileDescriptor_universal_d_importFile as importFile, mediaSiteMediaV1FileDescriptor_universal_d_ImportFileOptions as ImportFileOptions, mediaSiteMediaV1FileDescriptor_universal_d_bulkImportFiles as bulkImportFiles, mediaSiteMediaV1FileDescriptor_universal_d_listFiles as listFiles, mediaSiteMediaV1FileDescriptor_universal_d_ListFilesOptions as ListFilesOptions, mediaSiteMediaV1FileDescriptor_universal_d_searchFiles as searchFiles, mediaSiteMediaV1FileDescriptor_universal_d_SearchFilesOptions as SearchFilesOptions, mediaSiteMediaV1FileDescriptor_universal_d_generateVideoStreamingUrl as generateVideoStreamingUrl, mediaSiteMediaV1FileDescriptor_universal_d_GenerateVideoStreamingUrlOptions as GenerateVideoStreamingUrlOptions, mediaSiteMediaV1FileDescriptor_universal_d_bulkDeleteFiles as bulkDeleteFiles, mediaSiteMediaV1FileDescriptor_universal_d_BulkDeleteFilesOptions as BulkDeleteFilesOptions, mediaSiteMediaV1FileDescriptor_universal_d_bulkRestoreFilesFromTrashBin as bulkRestoreFilesFromTrashBin, mediaSiteMediaV1FileDescriptor_universal_d_listDeletedFiles as listDeletedFiles, mediaSiteMediaV1FileDescriptor_universal_d_ListDeletedFilesOptions as ListDeletedFilesOptions, };
    }
    const __debug: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface Folder {
        /** Folder ID. Generated when a folder is created in the Media Manager. */
        _id?: string;
        /** Folder name as it appears in the Media Manager. */
        displayName?: string;
        /** ID of the folder's parent folder. <br /> Default: `media-root` folder. */
        parentFolderId?: string;
        /**
         * Date the folder was created.
         * @readonly
         */
        _createdDate?: Date;
        /**
         * Date the folder was updated.
         * @readonly
         */
        _updatedDate?: Date;
        /**
         * State of the folder.
         *
         * Supported values: `"OK"`, `"DELETED"`.
         * @readonly
         */
        state?: State;
    }
    enum State {
        OK = "OK",
        DELETED = "DELETED"
    }
    interface CreateFolderRequest {
        /** Folder name that appears in the Media Manager. */
        displayName: string;
        /** ID of the folder's parent folder. */
        parentFolderId?: string | null;
    }
    interface CreateFolderResponse {
        /** Information about the newly created folder. */
        folder?: Folder;
    }
    interface GetFolderRequest {
        /** Folder ID. */
        folderId: string;
    }
    interface GetFolderResponse {
        /** Information about the folder. */
        folder?: Folder;
    }
    interface ListFoldersRequest {
        /**
         * ID of the folder's parent folder.
         * <br /> Default: `media-root` folder.
         */
        parentFolderId?: string | null;
        /**
         * Field name and order to sort by. One of: <br />
         * * `displayName`
         * * `updatedDate`
         * Default: `updatedDate` in `desc` order.
         */
        sort?: Sorting;
        /** Cursor and paging information. */
        paging?: CursorPaging;
    }
    interface Sorting {
        /** Name of the field to sort by. */
        fieldName?: string;
        /**
         * Sort order.
         *
         * Supported values: `"ASC"`, `"DESC"`
         */
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
    interface ListFoldersResponse {
        /** Information about the folders in the requested folder. */
        folders?: Folder[];
        /** The next cursor if it exists. */
        nextCursor?: PagingMetadataV2;
    }
    interface PagingMetadataV2 {
        /** Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used. */
        cursors?: Cursors;
    }
    interface Cursors {
        /** Cursor pointing to next page in the list of results. */
        next?: string | null;
    }
    interface SearchFoldersRequest {
        /**
         * A root folder in the media manager to search in. <br />
         * Default: `MEDIA_ROOT`.
         */
        rootFolder?: RootFolder;
        /**
         * Field name and order to sort by. One of: <br />
         * * `displayName`
         * * `updatedDate`
         * Default: `updatedDate` in `desc` order.
         */
        sort?: Sorting;
        /** Cursor and paging information. */
        paging?: CursorPaging;
        /**
         * Term to search for, such as the value of a folder's `displayName`. <br />
         * For example, if a folder's `displayName` is 'my-videos-folder', the search term is 'my-videos-folder'.
         */
        search?: string | null;
    }
    enum RootFolder {
        /** Root of all site media */
        MEDIA_ROOT = "MEDIA_ROOT",
        /** Root of the trash system folder */
        TRASH_ROOT = "TRASH_ROOT",
        /** Root of all visitor uploads */
        VISITOR_UPLOADS_ROOT = "VISITOR_UPLOADS_ROOT"
    }
    interface SearchFoldersResponse {
        /** Information about the folders in the requested folder. */
        folders?: Folder[];
        /** The next cursor if it exists. */
        nextCursor?: PagingMetadataV2;
    }
    interface UpdateFolderRequest {
        /** The folder to update. */
        folder: Folder;
    }
    interface UpdateFolderResponse {
        /** Information about the updated folder. */
        folder?: Folder;
    }
    interface GenerateFolderDownloadUrlRequest {
        /** Folder ID. */
        folderId: string;
    }
    interface GenerateFolderDownloadUrlResponse {
        /** URL for downloading a specific folder in the Media Manager. */
        downloadUrl?: string;
    }
    interface BulkDeleteFoldersRequest {
        /** IDs of the folders to move to the Media Manager's trash bin. */
        folderIds: string[];
        /**
         * Whether the specified folders are permanently deleted. <br />
         * Default: `false`
         */
        permanent?: boolean;
    }
    interface BulkDeleteFoldersResponse {
    }
    interface BulkRestoreFoldersFromTrashBinRequest {
        /** IDs of the folders to restore from the Media Manager's trash bin. */
        folderIds: string[];
    }
    interface BulkRestoreFoldersFromTrashBinResponse {
    }
    interface ListDeletedFoldersRequest {
        /** ID of the folder's parent folder. */
        parentFolderId?: string | null;
        /**
         * Field name and order to sort by. One of: <br />
         * * `displayName`
         * * `updatedDate`
         * Default: `updatedDate` in `desc` order.
         */
        sort?: Sorting;
        /** Cursor and paging information. */
        paging?: CursorPaging;
    }
    interface ListDeletedFoldersResponse {
        /** List of folders in the Media Manager's trash bin. */
        folders?: Folder[];
        /** The next cursor if it exists. */
        nextCursor?: PagingMetadataV2;
    }
    /**
     * Creates a new folder in the Media Manager.
     *
     * Use the `parentFolderId` parameter to specify in which existing folder you want the new folder to be created.
     * If no folder is specified, the new folder is created in the `media-root` folder.
     * @param displayName - Folder name that appears in the Media Manager.
     * @public
     * @requiredField displayName
     * @param options - Options for specifying where to create a folder.
     */
    function createFolder(displayName: string, options?: CreateFolderOptions): Promise<CreateFolderResponse>;
    interface CreateFolderOptions {
        /** ID of the folder's parent folder. */
        parentFolderId?: string | null;
    }
    /**
     * Gets information from a specific folder in the Media Manager.
     * @param folderId - Folder ID.
     * @public
     * @requiredField folderId
     * @returns Information about the folder.
     */
    function getFolder(folderId: string): Promise<Folder>;
    /**
     * Retrieves a list of folders in the Media Manager.
     *
     * To retrieve a list of folders within a specific folder in the Media Manager, pass the specific folder's ID in the `parentFolderId` parameter. If no folder is specified, the endpoint retrieves a list of folders within the root folder of the Media Manager.
     * @public
     * @param options - Options to use when listing folders from the Media Manager.
     */
    function listFolders(options?: ListFoldersOptions): Promise<ListFoldersResponse>;
    interface ListFoldersOptions {
        /**
         * ID of the folder's parent folder.
         * <br /> Default: `media-root` folder.
         */
        parentFolderId?: string | null;
        /**
         * Field name and order to sort by. One of: <br />
         * * `displayName`
         * * `updatedDate`
         * Default: `updatedDate` in `desc` order.
         */
        sort?: Sorting;
        /** Cursor and paging information. */
        paging?: CursorPaging;
    }
    /**
     * Searches the Media Manager and returns a list of folders that match the terms specified in the parameters.
     *
     * If no parameters are specified, the endpoint returns all folders in the `MEDIA_ROOT` folder.
     * @public
     * @param options - Options specifying which folders to search.
     */
    function searchFolders(options?: SearchFoldersOptions): Promise<SearchFoldersResponse>;
    interface SearchFoldersOptions {
        /**
         * A root folder in the media manager to search in. <br />
         * Default: `MEDIA_ROOT`.
         */
        rootFolder?: RootFolder;
        /**
         * Field name and order to sort by. One of: <br />
         * * `displayName`
         * * `updatedDate`
         * Default: `updatedDate` in `desc` order.
         */
        sort?: Sorting;
        /** Cursor and paging information. */
        paging?: CursorPaging;
        /**
         * Term to search for, such as the value of a folder's `displayName`.
         *
         * For example, if a folder's `displayName` is 'my-videos-folder', the search term is `'my-videos-folder'`.
         */
        search?: string | null;
    }
    interface UpdateFolder {
        /** Folder ID. Generated when a folder is created in the Media Manager. */
        _id?: string;
        /** Folder name as it appears in the Media Manager. */
        displayName?: string;
        /** ID of the folder's parent folder. <br /> Default: `media-root` folder. */
        parentFolderId?: string;
        /**
         * Date the folder was created.
         * @readonly
         */
        _createdDate?: Date;
        /**
         * Date the folder was updated.
         * @readonly
         */
        _updatedDate?: Date;
        /**
         * State of the folder.
         *
         * Supported values: `"OK"`, `"DELETED"`.
         * @readonly
         */
        state?: State;
    }
    interface UpdateFolderOptions {
    }
    /**
     * Generates a URL for downloading a compressed file containing a specific folder in the Media Manager.
     *
     * The compressed file can contain sub-folders, and up to 1000 files.
     * @param folderId - Folder ID.
     * @public
     * @requiredField folderId
     */
    function generateFolderDownloadUrl(folderId: string): Promise<GenerateFolderDownloadUrlResponse>;
    /**
     * Temporarily deletes the specified folders from the Media Manager.
     *
     * The deleted folders are moved to the Media Manager's `trash-root` folder (trash bin) unless permanently deleted. To permanently delete folders, pass the `permanent` parameter with the value `true`. Permanently deleting folders isn't reversible, so make sure that the files in these folders aren't being used in a site or in any other way as the files will no longer be accessible.
     *
     * >**Notes:**
     * > - When a folder is deleted, the files in that folder are deleted.
     * > - The specified folders can be from different parent folders.
     * > - Moving multiple folders at once is an asynchronous action, and may take time for the changes to appear in the Media Manager.
     * > - Attempting to delete folders that are already in the trash bin doesn't result in an error.
     * > - If your site contains files from a deleted media folder, the files still appear on your site as the deleted folder is still in the Media Manager (in the trash bin).
     * > - You can use the [Bulk Restore Folders From Trash Bin](#bulkrestorefoldersfromtrashbin) endpoint to restore folders from the Media Manager's trash bin.
     * @param folderIds - IDs of the folders to move to the Media Manager's trash bin.
     * @public
     * @requiredField folderIds
     * @param options - Options to use when deleting folders.
     */
    function bulkDeleteFolders(folderIds: string[], options?: BulkDeleteFoldersOptions): Promise<void>;
    interface BulkDeleteFoldersOptions {
        /**
         * Whether the specified folders are permanently deleted. <br />
         * Default: `false`
         */
        permanent?: boolean;
    }
    /**
     * Restores the specified folders from the Media Manager's trash bin, and moves them to their original locations in the Media Manager.
     * @param folderIds - IDs of the folders to restore from the Media Manager's trash bin.
     * @public
     * @requiredField folderIds
     */
    function bulkRestoreFoldersFromTrashBin(folderIds: string[]): Promise<void>;
    /**
     * Retrieves a list of deleted folders from the trash bin.
     *
     * This function is not a universal function and runs only on the backend.
     * @public
     * @param options - Options to use when listing deleted folders from the trash bin.
     */
    function listDeletedFolders(options?: ListDeletedFoldersOptions): Promise<ListDeletedFoldersResponse>;
    interface ListDeletedFoldersOptions {
        /** ID of the folder's parent folder. */
        parentFolderId?: string | null;
        /**
         * Field name and order to sort by. One of: <br />
         * * `displayName`
         * * `updatedDate`
         * Default: `updatedDate` in `desc` order.
         */
        sort?: Sorting;
        /** Cursor and paging information. */
        paging?: CursorPaging;
    }
    const mediaSiteMediaV1Folder_universal_d___debug: typeof __debug;
    type mediaSiteMediaV1Folder_universal_d_Folder = Folder;
    type mediaSiteMediaV1Folder_universal_d_State = State;
    const mediaSiteMediaV1Folder_universal_d_State: typeof State;
    type mediaSiteMediaV1Folder_universal_d_CreateFolderRequest = CreateFolderRequest;
    type mediaSiteMediaV1Folder_universal_d_CreateFolderResponse = CreateFolderResponse;
    type mediaSiteMediaV1Folder_universal_d_GetFolderRequest = GetFolderRequest;
    type mediaSiteMediaV1Folder_universal_d_GetFolderResponse = GetFolderResponse;
    type mediaSiteMediaV1Folder_universal_d_ListFoldersRequest = ListFoldersRequest;
    type mediaSiteMediaV1Folder_universal_d_Sorting = Sorting;
    type mediaSiteMediaV1Folder_universal_d_SortOrder = SortOrder;
    const mediaSiteMediaV1Folder_universal_d_SortOrder: typeof SortOrder;
    type mediaSiteMediaV1Folder_universal_d_CursorPaging = CursorPaging;
    type mediaSiteMediaV1Folder_universal_d_ListFoldersResponse = ListFoldersResponse;
    type mediaSiteMediaV1Folder_universal_d_PagingMetadataV2 = PagingMetadataV2;
    type mediaSiteMediaV1Folder_universal_d_Cursors = Cursors;
    type mediaSiteMediaV1Folder_universal_d_SearchFoldersRequest = SearchFoldersRequest;
    type mediaSiteMediaV1Folder_universal_d_RootFolder = RootFolder;
    const mediaSiteMediaV1Folder_universal_d_RootFolder: typeof RootFolder;
    type mediaSiteMediaV1Folder_universal_d_SearchFoldersResponse = SearchFoldersResponse;
    type mediaSiteMediaV1Folder_universal_d_UpdateFolderRequest = UpdateFolderRequest;
    type mediaSiteMediaV1Folder_universal_d_UpdateFolderResponse = UpdateFolderResponse;
    type mediaSiteMediaV1Folder_universal_d_GenerateFolderDownloadUrlRequest = GenerateFolderDownloadUrlRequest;
    type mediaSiteMediaV1Folder_universal_d_GenerateFolderDownloadUrlResponse = GenerateFolderDownloadUrlResponse;
    type mediaSiteMediaV1Folder_universal_d_BulkDeleteFoldersRequest = BulkDeleteFoldersRequest;
    type mediaSiteMediaV1Folder_universal_d_BulkDeleteFoldersResponse = BulkDeleteFoldersResponse;
    type mediaSiteMediaV1Folder_universal_d_BulkRestoreFoldersFromTrashBinRequest = BulkRestoreFoldersFromTrashBinRequest;
    type mediaSiteMediaV1Folder_universal_d_BulkRestoreFoldersFromTrashBinResponse = BulkRestoreFoldersFromTrashBinResponse;
    type mediaSiteMediaV1Folder_universal_d_ListDeletedFoldersRequest = ListDeletedFoldersRequest;
    type mediaSiteMediaV1Folder_universal_d_ListDeletedFoldersResponse = ListDeletedFoldersResponse;
    const mediaSiteMediaV1Folder_universal_d_createFolder: typeof createFolder;
    type mediaSiteMediaV1Folder_universal_d_CreateFolderOptions = CreateFolderOptions;
    const mediaSiteMediaV1Folder_universal_d_getFolder: typeof getFolder;
    const mediaSiteMediaV1Folder_universal_d_listFolders: typeof listFolders;
    type mediaSiteMediaV1Folder_universal_d_ListFoldersOptions = ListFoldersOptions;
    const mediaSiteMediaV1Folder_universal_d_searchFolders: typeof searchFolders;
    type mediaSiteMediaV1Folder_universal_d_SearchFoldersOptions = SearchFoldersOptions;
    type mediaSiteMediaV1Folder_universal_d_UpdateFolder = UpdateFolder;
    type mediaSiteMediaV1Folder_universal_d_UpdateFolderOptions = UpdateFolderOptions;
    const mediaSiteMediaV1Folder_universal_d_generateFolderDownloadUrl: typeof generateFolderDownloadUrl;
    const mediaSiteMediaV1Folder_universal_d_bulkDeleteFolders: typeof bulkDeleteFolders;
    type mediaSiteMediaV1Folder_universal_d_BulkDeleteFoldersOptions = BulkDeleteFoldersOptions;
    const mediaSiteMediaV1Folder_universal_d_bulkRestoreFoldersFromTrashBin: typeof bulkRestoreFoldersFromTrashBin;
    const mediaSiteMediaV1Folder_universal_d_listDeletedFolders: typeof listDeletedFolders;
    type mediaSiteMediaV1Folder_universal_d_ListDeletedFoldersOptions = ListDeletedFoldersOptions;
    namespace mediaSiteMediaV1Folder_universal_d {
        export { mediaSiteMediaV1Folder_universal_d___debug as __debug, mediaSiteMediaV1Folder_universal_d_Folder as Folder, mediaSiteMediaV1Folder_universal_d_State as State, mediaSiteMediaV1Folder_universal_d_CreateFolderRequest as CreateFolderRequest, mediaSiteMediaV1Folder_universal_d_CreateFolderResponse as CreateFolderResponse, mediaSiteMediaV1Folder_universal_d_GetFolderRequest as GetFolderRequest, mediaSiteMediaV1Folder_universal_d_GetFolderResponse as GetFolderResponse, mediaSiteMediaV1Folder_universal_d_ListFoldersRequest as ListFoldersRequest, mediaSiteMediaV1Folder_universal_d_Sorting as Sorting, mediaSiteMediaV1Folder_universal_d_SortOrder as SortOrder, mediaSiteMediaV1Folder_universal_d_CursorPaging as CursorPaging, mediaSiteMediaV1Folder_universal_d_ListFoldersResponse as ListFoldersResponse, mediaSiteMediaV1Folder_universal_d_PagingMetadataV2 as PagingMetadataV2, mediaSiteMediaV1Folder_universal_d_Cursors as Cursors, mediaSiteMediaV1Folder_universal_d_SearchFoldersRequest as SearchFoldersRequest, mediaSiteMediaV1Folder_universal_d_RootFolder as RootFolder, mediaSiteMediaV1Folder_universal_d_SearchFoldersResponse as SearchFoldersResponse, mediaSiteMediaV1Folder_universal_d_UpdateFolderRequest as UpdateFolderRequest, mediaSiteMediaV1Folder_universal_d_UpdateFolderResponse as UpdateFolderResponse, mediaSiteMediaV1Folder_universal_d_GenerateFolderDownloadUrlRequest as GenerateFolderDownloadUrlRequest, mediaSiteMediaV1Folder_universal_d_GenerateFolderDownloadUrlResponse as GenerateFolderDownloadUrlResponse, mediaSiteMediaV1Folder_universal_d_BulkDeleteFoldersRequest as BulkDeleteFoldersRequest, mediaSiteMediaV1Folder_universal_d_BulkDeleteFoldersResponse as BulkDeleteFoldersResponse, mediaSiteMediaV1Folder_universal_d_BulkRestoreFoldersFromTrashBinRequest as BulkRestoreFoldersFromTrashBinRequest, mediaSiteMediaV1Folder_universal_d_BulkRestoreFoldersFromTrashBinResponse as BulkRestoreFoldersFromTrashBinResponse, mediaSiteMediaV1Folder_universal_d_ListDeletedFoldersRequest as ListDeletedFoldersRequest, mediaSiteMediaV1Folder_universal_d_ListDeletedFoldersResponse as ListDeletedFoldersResponse, mediaSiteMediaV1Folder_universal_d_createFolder as createFolder, mediaSiteMediaV1Folder_universal_d_CreateFolderOptions as CreateFolderOptions, mediaSiteMediaV1Folder_universal_d_getFolder as getFolder, mediaSiteMediaV1Folder_universal_d_listFolders as listFolders, mediaSiteMediaV1Folder_universal_d_ListFoldersOptions as ListFoldersOptions, mediaSiteMediaV1Folder_universal_d_searchFolders as searchFolders, mediaSiteMediaV1Folder_universal_d_SearchFoldersOptions as SearchFoldersOptions, mediaSiteMediaV1Folder_universal_d_UpdateFolder as UpdateFolder, mediaSiteMediaV1Folder_universal_d_UpdateFolderOptions as UpdateFolderOptions, mediaSiteMediaV1Folder_universal_d_generateFolderDownloadUrl as generateFolderDownloadUrl, mediaSiteMediaV1Folder_universal_d_bulkDeleteFolders as bulkDeleteFolders, mediaSiteMediaV1Folder_universal_d_BulkDeleteFoldersOptions as BulkDeleteFoldersOptions, mediaSiteMediaV1Folder_universal_d_bulkRestoreFoldersFromTrashBin as bulkRestoreFoldersFromTrashBin, mediaSiteMediaV1Folder_universal_d_listDeletedFolders as listDeletedFolders, mediaSiteMediaV1Folder_universal_d_ListDeletedFoldersOptions as ListDeletedFoldersOptions, };
    }
    export { mediaSiteMediaV1FileDescriptor_universal_d as files, mediaSiteMediaV1Folder_universal_d as folders, mediaGenerationV1GeneratedImage_universal_d as generation };
}
