/**
 * The `wix-media-backend` module contains functionality for working with
 *  media from backend code.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-media-backend.html#)
 */
declare module 'wix-media-backend' {
    /**
     * The `mediaManager` module contains functionality for working with
     *  the media that is stored in your site's [Media Manager](https://support.wix.com/en/article/about-the-media-manager-568956).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-media-backend.html#mediaManager)
     */
    const mediaManager: MediaManager;
    /**
     * Events triggered by the Wix Media API.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-media-backend.Events.html#)
     */
    interface Events {
        /**
         * An event that triggers when an audio file has completed transcoding.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-media-backend.Events.html#onAudioTranscoded)
         */
        onAudioTranscoded(event: Events.FileEvent): void;
        /**
         * An event that triggers when a file has completed uploading.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-media-backend.Events.html#onFileUploaded)
         */
        onFileUploaded(event: Events.FileEvent): void;
        /**
         * An event that triggers when a video file has completed transcoding.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-media-backend.Events.html#onVideoTranscoded)
         */
        onVideoTranscoded(event: Events.FileEvent): void;
    }
    /**
     * The `mediaManager` module contains functionality for working with
     *  the media that is stored in your site's [Media Manager](https://support.wix.com/en/article/about-the-media-manager-568956).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-media-backend.MediaManager.html#)
     */
    interface MediaManager {
        /**
         * Returns a download URL for downloading files from the Media Manager.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-media-backend.MediaManager.html#downloadFiles)
         */
        downloadFiles(fileUrls: string[]): Promise<string>;
        /**
         * Returns a download URL for downloading a folder from the Media Manager.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-media-backend.MediaManager.html#downloadFolder)
         */
        downloadFolder(folderId: string): Promise<string>;
        /**
         * Gets a temporary download URL with a token for a specified file in the Media Manager.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-media-backend.MediaManager.html#getDownloadUrl)
         */
        getDownloadUrl(fileUrl: string, expirationTime?: number, downloadedFileName?: string, expiredTokenRedirectUrl?: string): Promise<string>;
        /**
         * Gets a file's information from the Media Manager by `fileUrl`.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-media-backend.MediaManager.html#getFileInfo)
         */
        getFileInfo(fileUrl: string): Promise<MediaManager.FileInfo>;
        /**
         * **Deprecated.**
         * This function will continue to work, but a newer version is available. Use the [`getDownloadUrl`](https://www.wix.com/velo/reference/wix-media-backend/mediamanager-obj/getdownloadurl) function instead.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-media-backend.MediaManager.html#getFileUrl)
         */
        getFileUrl(fileUrl: string): Promise<string>;
        /**
         * Gets a folder's information from the Media Manager by `folderId`.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-media-backend.MediaManager.html#getFolderInfo)
         */
        getFolderInfo(folderId: string): Promise<MediaManager.FolderInfo>;
        /**
         * Gets an upload URL for uploading a file to the media manager.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-media-backend.MediaManager.html#getUploadUrl)
         */
        getUploadUrl(path: string, options: MediaManager.UploadOptions): Promise<MediaManager.UploadUrl>;
        /**
         * Gets a video file's playback URL from the Media Manager.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-media-backend.MediaManager.html#getVideoPlaybackUrl)
         */
        getVideoPlaybackUrl(fileUrl: string, format: string): Promise<string>;
        /**
         * Imports a file to the Media Manager from a URL.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-media-backend.MediaManager.html#importFile)
         */
        importFile(path: string, url: string, options: MediaManager.UploadOptions): Promise<MediaManager.FileInfo>;
        /**
         * Gets a list of files from the Media Manager by `parentFolderId` (or root).
         * 	[Read more](https://www.wix.com/corvid/reference/wix-media-backend.MediaManager.html#listFiles)
         */
        listFiles(filters?: MediaManager.FileFilterOptions, sorting?: MediaManager.SortingOptions, paging?: MediaManager.PagingOptions): Promise<MediaManager.File[]>;
        /**
         * Gets a list of folders from the Media Manager by `parentFolderId` (or root).
         * 	[Read more](https://www.wix.com/corvid/reference/wix-media-backend.MediaManager.html#listFolders)
         */
        listFolders(filters?: MediaManager.FolderFilterOptions, sorting?: MediaManager.SortingOptions, paging?: MediaManager.PagingOptions): Promise<MediaManager.FolderInfo[]>;
        /**
         * Moves single or multiple files to the Media Manager's trash.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-media-backend.MediaManager.html#moveFilesToTrash)
         */
        moveFilesToTrash(fileUrls: string[]): Promise<void>;
        /**
         * Moves single or multiple folders, including their files and sub-folders, to the Media Manager's trash.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-media-backend.MediaManager.html#moveFoldersToTrash)
         */
        moveFoldersToTrash(folderIds: string[]): Promise<void>;
        /**
         * Uploads a file to the Media Manager from a [buffer](https://nodejs.org/api/buffer.html#buffer_static_method_buffer_from_string_encoding).
         * 	[Read more](https://www.wix.com/corvid/reference/wix-media-backend.MediaManager.html#upload)
         */
        upload(path: string, fileContent: Buffer, fileName: string, options: MediaManager.UploadOptions): Promise<MediaManager.FileInfo>;
    }
    /**
     * Events triggered by the Wix Media API.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-media-backend.Events.html#)
     */
    namespace Events {
        /**
         * An object representing an uploaded file and upload context.
         */
        type FileEvent = {
            /**
             * Information about the uploaded file.
             */
            fileInfo: MediaManager.FileInfo;
            /**
             * An object of key:value string pairs that was sent
             *  when the file was uploaded.
             */
            context: any;
        };
    }
    /**
     * The `mediaManager` module contains functionality for working with
     *  the media that is stored in your site's [Media Manager](https://support.wix.com/en/article/about-the-media-manager-568956).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-media-backend.MediaManager.html#)
     */
    namespace MediaManager {
        /**
         * An object containing information about the file that was listed.
         */
        type File = {
            /**
             * **Deprecated**. Use the `fileUrl` property instead.
             *
             * The `fileName` property is the internal name (unique identifier) which is generated when a file is uploaded by the Media Manager, returned from the [`importFile()`](#importFile), or [`upload()`](#upload) functions. The name is the string located in the file's URL. Click [here](https://www.wix.com/velo/forum/tips-tutorials-examples/creating-a-url-for-a-media-file-or-the-truth-about-getfileurl) to learn more. Use this name when calling the [`getFileInfo()`](#getFileInfo), [`getFileUrl()`](#getFileUrl),
             * and [`getVideoPlaybackUrl()`](#getVideoPlaybackUrl) functions.
             */
            fileName: string;
            /**
             * The file's Wix media URL in the following format: `'wix:image://v1//#originWidth=&originHeight=[&watermark=]'`.
             */
            fileUrl: string;
            /**
             * File hash.
             */
            hash: string;
            /**
             * Size of the listed file in bytes.
             */
            sizeInBytes: number;
            /**
             * [Mime type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of
             *  the listed file.
             */
            mimeType: string;
            /**
             * Media type of the listed file.
             *  One of:
             *
             *  + `"audio"`
             *  + `"document"`
             *  + `"image"`
             *  + `"shape"`
             *  + `"video"`
             */
            mediaType: string;
            /**
             * Whether the link to the listed file is
             *  public or private. Private links require a token to be used.
             */
            isPrivate: boolean;
            /**
             * ID of the file's parent folder.
             */
            parentFolderId: string;
            /**
             * Original name of the uploaded file. This is the display name
             *  that appears in the Media Manager.
             */
            originalFileName: string;
            /**
             * URL of the file's icon.
             */
            iconUrl: string;
            /**
             * List of labels assigned to the file by the Media Manager.
             */
            labels: string[];
            /**
             * Media height.
             */
            height: string;
            /**
             * Media width.
             */
            width: string;
            /**
             * Date the file was created.
             */
            _createdDate: Date;
            /**
             * Date the file was updated.
             */
            _updatedDate: Date;
        };
        /**
         * File filter options.
         */
        type FileFilterOptions = {
            /**
             * ID of the parent folder of the files to list.
             */
            parentFolderId?: string;
            /**
             * Media type of the files to list. Leave blank to list files of all media types.
             *  One of:
             *
             *  + `"audio"`
             *  + `"document"`
             *  + `"image"`
             *  + `"shape"`
             *  + `"video"`
             */
            mediaType?: string;
            /**
             * Whether the link to the files you want to list is public or private. Leave blank to include both public and private files.
             */
            isPrivate?: boolean;
        };
        /**
         * An object containing information about the file that was uploaded.
         */
        type FileInfo = {
            /**
             * **Deprecated**. Use the `fileUrl` property instead.
             *
             * The `fileName` property is the internal name (unique identifier) which is generated when a file is uploaded by the Media Manager, returned from the [`importFile()`](#importFile), or [`upload()`](#upload) functions. The name is the string located in the file's URL. Click [here](https://www.wix.com/velo/forum/tips-tutorials-examples/creating-a-url-for-a-media-file-or-the-truth-about-getfileurl) to learn more. Use this name when calling the [`getFileInfo()`](#getFileInfo), [`getFileUrl()`](#getFileUrl),
             * and [`getVideoPlaybackUrl()`](#getVideoPlaybackUrl) functions.
             */
            fileName: string;
            /**
             * The file's Wix media URL in the following format: `'wix:image://v1//#originWidth=&originHeight=[&watermark=]'`.
             */
            fileUrl: string;
            /**
             * File hash.
             */
            hash: string;
            /**
             * Size of the uploaded file in bytes.
             */
            sizeInBytes: number;
            /**
             * [Mime type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of
             *  the uploaded file.
             */
            mimeType: string;
            /**
             * Type of the file that was uploaded.
             *  One of:
             *
             *  + `"audio"`
             *  + `"document"`
             *  + `"image"`
             *  + `"shape"`
             *  + `"video"`
             */
            mediaType: string;
            /**
             * Whether the link to the uploaded file is
             *  public or private. Private links require a token to be used.
             */
            isPrivate: boolean;
            /**
             * ID of the file's parent folder.
             */
            parentFolderId: string;
            /**
             * Original name of the uploaded file. This is the display name
             *  that appears in the Media Manager.
             */
            originalFileName: string;
            /**
             * Status of the file that was uploaded.
             *  One of:
             *
             *  + `"IN-DOWNLOAD-QUEUE"`
             *  + `"IN-QUEUE"`
             *  + `"READY"`
             */
            opStatus: string;
            /**
             * URL where the file was uploaded from.
             */
            sourceURL: string;
            /**
             * URL of the file's icon.
             */
            iconUrl: string;
            /**
             * List of labels assigned to the file by the Media Manager.
             */
            labels: string[];
            /**
             * Media height.
             */
            height: string;
            /**
             * Media width.
             */
            width: string;
            /**
             * Date the file was created.
             */
            _createdDate: Date;
            /**
             * Date the file was updated.
             */
            _updatedDate: Date;
        };
        /**
         * Folder filter options.
         */
        type FolderFilterOptions = {
            /**
             * ID of the parent folder of the folders to list.
             */
            parentFolderId?: string;
        };
        /**
         * An object containing information about the folder.
         */
        type FolderInfo = {
            /**
             * ID of the folder. Internal name (unique identifier) which is generated when a folder is created by the Media Manager. Use this ID when calling the [`listFiles()`](#listFiles), and [`listFolders()`](#listFolders) functions.
             */
            folderId: string;
            /**
             * Name of the folder.
             */
            folderName: string;
            /**
             * ID of the folder's parent folder. Use this ID when calling the [`listFiles()`](#listFiles), and [`listFolders()`](#listFolders) functions.
             */
            parentFolderId: string;
            /**
             * Date the folder was created.
             */
            _createdDate: Date;
            /**
             * Date the folder was updated.
             */
            _updatedDate: Date;
        };
        /**
         * An object containing information about the media options of a file to upload.
         */
        type MediaOptions = {
            /**
             * Type of file to upload.
             *  One of:
             *
             *  + `"audio"`
             *  + `"document"`
             *  + `"image"`
             *  + `"shape"`
             *  + `"video"`
             */
            mediaType?: string;
            /**
             * [Mime type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of
             *  the file to import. The specified value must match the actual mime type of
             *  the file's content.
             */
            mimeType?: string;
        };
        /**
         * An object containing information about the metadata options of a file to upload.
         */
        type MetadataOptions = {
            /**
             * Whether the link to the uploaded file will
             *  be public or private. Private links require a token to be used. Defaults to
             *  `false`.
             */
            isPrivate?: boolean;
            /**
             * Indicates if the file was uploaded by a
             *  site visitor. When `true`, the uploaded files are:
             *  + Stored in the Visitor Uploads folder of the Media Manager (`visitor-uploads`). See the `path` property for more details.
             *  + Tagged in the Media Manager as added by a visitor.
             *  Defaults to `true`.
             */
            isVisitorUpload?: boolean;
            /**
             * An object of key:value string pairs that is sent
             *  back in the [`onFileUploaded()`](wix-media-backend.Events.html#onFileUploaded)
             *  event.
             */
            context?: any;
            /**
             * In this case the fileName is the name you would like your file to appear as in the Media Manager.
             */
            fileName?: string;
        };
        /**
         * Paging options.
         */
        type PagingOptions = {
            /**
             * Amount of records to retrieve. Defaults to 20.
             */
            limit?: number;
            /**
             * Number of records to skip.
             */
            skip?: number;
        };
        /**
         * Sorting options. **Note:** When sorting by '`originalFileName`', folders and file names that begin with capital letters come before lowercase in '`asc`' order.
         */
        type SortingOptions = {
            /**
             * Direction of sort: `"asc"` or `"desc"`. Defaults to `"asc"`.
             */
            order?: string;
            /**
             * Field to sort by: `"originalFileName"` or `"_updatedDate"`. Defaults to `"_updatedDate"`.
             */
            field?: string;
        };
        /**
         * An object containing information about the options of a file to upload.
         */
        type UploadOptions = {
            /**
             * Media options of the file to upload.
             */
            mediaOptions?: MediaManager.MediaOptions;
            /**
             * Metadata options of the file to upload.
             */
            metadataOptions?: MediaManager.MetadataOptions;
        };
        /**
         * An object containing information about an upload URL.
         */
        type UploadUrl = {
            /**
             * The URL used for sending a POST or PUT request to upload a file to the Media Manager.
             */
            uploadUrl: string;
            /**
             * **Deprecated.** Use the `uploadUrl` property instead.
             *
             * The token to use with the file POST.
             *
             * **Note:** The `uploadToken` property returns empty, as the token is now included in the upload URL. The `uploadToken` property will continue to work, but we recommend that you use the updated `uploadUrl` parameter instead.
             */
            uploadToken: string;
        };
    }
}
