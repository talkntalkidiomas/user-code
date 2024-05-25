declare module "wix-site-media-backend" {
  const __debug$1: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface Folder {
      /** ID of the folder. Internal name (unique identifier) which is generated when a folder is created by the Media Manager */
      _id?: string;
      /** The display name that appears in the Media Manager. */
      displayName?: string;
      /** ID of the folder's parent folder */
      parentFolderId?: string;
      /** Date the folder was created */
      _createdDate?: Date;
      /** Date the folder was updated */
      _updatedDate?: Date;
  }
  interface CreateFolderRequest {
      /** Folder name */
      displayName: string;
      /**
       * Optional - A folder id
       * If provided, nest the created folder under this folder
       * If not this folder will be under the media_root system folder
       */
      parentFolderId?: string | null;
  }
  interface CreateFolderResponse {
      /** A folder object containing the newly created folder info */
      folder?: Folder;
  }
  interface GetFolderRequest {
      /** The folder id to get the information of */
      folderId: string;
  }
  interface GetFolderResponse {
      /** The information for the requested folder */
      folder?: Folder;
  }
  interface ListFoldersRequest {
      /** Optional list folders in a specific folder */
      parentFolderId?: string | null;
      /**
       * Optional one of "displayName"/"updatedDate"
       * Default updatedDate desc
       */
      sort?: Sorting$1;
      /** Optional current cursor of the request if it exist */
      cursorPaging?: CursorPaging$1;
  }
  interface Sorting$1 {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
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
  interface ListFoldersResponse {
      /** The information for the subfolders of the requested folder */
      folders?: Folder[];
      /** The next cursor if one exists */
      nextCursor?: PagingMetadataV2$1;
  }
  interface PagingMetadataV2$1 {
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
  interface Cursors$1 {
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
  }
  interface UpdateFolderRequest {
      /** The id of the folder to update */
      folderId: string;
      /** Optional - Folder name */
      displayName?: string | null;
      /**
       * Optional - A folder id
       * If provided, nest the folder under this folder, effectively moving the folder
       */
      parentFolderId?: string | null;
  }
  interface UpdateFolderResponse {
      /** A folder object containing the newly updated folder info */
      folder?: Folder;
  }
  interface GenerateFolderDownloadUrlRequest {
      /** The ID of the folder to download */
      folderId: string;
  }
  interface GenerateFolderDownloadUrlResponse {
      /** The download URL of the folder */
      downloadUrl?: string;
  }
  interface BulkDeleteFoldersRequest {
      /** List of folder ids to move to Media Manager's trash */
      folderIds?: string[];
  }
  interface BulkDeleteFoldersResponse {
  }
  interface BulkRemoveFoldersFromTrashBinRequest {
      /** List of folder ids to remove from Media Manager's trash - permanently delete files */
      folderIds?: string[];
  }
  interface BulkRemoveFoldersFromTrashBinResponse {
  }
  interface BulkRestoreFoldersFromTrashBinRequest {
      /** List of folder ids to restore from Media Manager's trash */
      folderIds?: string[];
  }
  interface BulkRestoreFoldersFromTrashBinResponse {
  }
  interface ListDeletedFoldersRequest {
      /** Optional list folders in a specific folder */
      parentFolderId?: string | null;
      /**
       * Optional one of "displayName"/"updatedDate"
       * Default updatedDate desc
       */
      sort?: Sorting$1;
      /** Optional current cursor of the request if it exist */
      cursorPaging?: CursorPaging$1;
  }
  interface ListDeletedFoldersResponse {
      /** List of file info that will be restored */
      folders?: Folder[];
      /** The next cursor if one exists */
      nextCursor?: PagingMetadataV2$1;
  }
  /**
   * Create a new folder
   * @param displayName - Folder name
   * @requiredField displayName
   */
  function createFolder(displayName: string, options?: CreateFolderOptions): Promise<CreateFolderResponse>;
  interface CreateFolderOptions {
      /**
       * Optional - A folder id
       * If provided, nest the created folder under this folder
       * If not this folder will be under the media_root system folder
       */
      parentFolderId?: string | null;
  }
  /**
   * Gets the folder's information
   * @param folderId - The folder id to get the information of
   * @requiredField folderId
   */
  function getFolder(folderId: string): Promise<GetFolderResponse>;
  /** Return a list of subfolders of the requested folder */
  function listFolders(options?: ListFoldersOptions): Promise<ListFoldersResponse>;
  interface ListFoldersOptions {
      /** Optional list folders in a specific folder */
      parentFolderId?: string | null;
      /**
       * Optional one of "displayName"/"updatedDate"
       * Default updatedDate desc
       */
      sort?: Sorting$1;
      /** Optional current cursor of the request if it exist */
      cursorPaging?: CursorPaging$1;
  }
  /**
   * Update the folder, allowing renaming and moving the folder
   * @param folderId - The id of the folder to update
   * @requiredField folderId
   */
  function updateFolder(folderId: string, options?: UpdateFolderOptions): Promise<UpdateFolderResponse>;
  interface UpdateFolderOptions {
      /** Optional - Folder name */
      displayName?: string | null;
      /**
       * Optional - A folder id
       * If provided, nest the folder under this folder, effectively moving the folder
       */
      parentFolderId?: string | null;
  }
  /**
   * Generates a temporary URL that can be used to download a compressed file containing the requested folder
   * The compressed file can contain up to 1000 files. Sub-folders are included
   * The name of the top-level folder requested for download is not included.
   * @param folderId - The ID of the folder to download
   * @requiredField folderId
   */
  function generateFolderDownloadUrl(folderId: string): Promise<GenerateFolderDownloadUrlResponse>;
  /**
   * Move folders listed to Media Manager's trash
   * Moving many folders to trash at once is an asynchronous action. It may take some time for the results to be seen in the Media Manager.
   * Attempting to move already-trashed folders to trash again doesn't result in an error.
   */
  function bulkDeleteFolders(options?: BulkDeleteFoldersOptions): Promise<void>;
  interface BulkDeleteFoldersOptions {
      /** List of folder ids to move to Media Manager's trash */
      folderIds?: string[];
  }
  /**
   * Permanently deletes a folder from the site media, this action is not reversible
   * Make sure this folder is not used in a site or in any other way as it will break
   */
  function bulkRemoveFoldersFromTrashBin(options?: BulkRemoveFoldersFromTrashBinOptions): Promise<void>;
  interface BulkRemoveFoldersFromTrashBinOptions {
      /** List of folder ids to remove from Media Manager's trash - permanently delete files */
      folderIds?: string[];
  }
  /** Restore a folder to its original location in the site media. */
  function bulkRestoreFoldersFromTrashBin(options?: BulkRestoreFoldersFromTrashBinOptions): Promise<void>;
  interface BulkRestoreFoldersFromTrashBinOptions {
      /** List of folder ids to restore from Media Manager's trash */
      folderIds?: string[];
  }
  /** Returns a list of the folder infos of all the deleted folders as directed by the filter. */
  function listDeletedFolders(options?: ListDeletedFoldersOptions): Promise<ListDeletedFoldersResponse>;
  interface ListDeletedFoldersOptions {
      /** Optional list folders in a specific folder */
      parentFolderId?: string | null;
      /**
       * Optional one of "displayName"/"updatedDate"
       * Default updatedDate desc
       */
      sort?: Sorting$1;
      /** Optional current cursor of the request if it exist */
      cursorPaging?: CursorPaging$1;
  }
  
  type mediaSiteMediaV1Folder_universal_d_Folder = Folder;
  type mediaSiteMediaV1Folder_universal_d_CreateFolderRequest = CreateFolderRequest;
  type mediaSiteMediaV1Folder_universal_d_CreateFolderResponse = CreateFolderResponse;
  type mediaSiteMediaV1Folder_universal_d_GetFolderRequest = GetFolderRequest;
  type mediaSiteMediaV1Folder_universal_d_GetFolderResponse = GetFolderResponse;
  type mediaSiteMediaV1Folder_universal_d_ListFoldersRequest = ListFoldersRequest;
  type mediaSiteMediaV1Folder_universal_d_ListFoldersResponse = ListFoldersResponse;
  type mediaSiteMediaV1Folder_universal_d_UpdateFolderRequest = UpdateFolderRequest;
  type mediaSiteMediaV1Folder_universal_d_UpdateFolderResponse = UpdateFolderResponse;
  type mediaSiteMediaV1Folder_universal_d_GenerateFolderDownloadUrlRequest = GenerateFolderDownloadUrlRequest;
  type mediaSiteMediaV1Folder_universal_d_GenerateFolderDownloadUrlResponse = GenerateFolderDownloadUrlResponse;
  type mediaSiteMediaV1Folder_universal_d_BulkDeleteFoldersRequest = BulkDeleteFoldersRequest;
  type mediaSiteMediaV1Folder_universal_d_BulkDeleteFoldersResponse = BulkDeleteFoldersResponse;
  type mediaSiteMediaV1Folder_universal_d_BulkRemoveFoldersFromTrashBinRequest = BulkRemoveFoldersFromTrashBinRequest;
  type mediaSiteMediaV1Folder_universal_d_BulkRemoveFoldersFromTrashBinResponse = BulkRemoveFoldersFromTrashBinResponse;
  type mediaSiteMediaV1Folder_universal_d_BulkRestoreFoldersFromTrashBinRequest = BulkRestoreFoldersFromTrashBinRequest;
  type mediaSiteMediaV1Folder_universal_d_BulkRestoreFoldersFromTrashBinResponse = BulkRestoreFoldersFromTrashBinResponse;
  type mediaSiteMediaV1Folder_universal_d_ListDeletedFoldersRequest = ListDeletedFoldersRequest;
  type mediaSiteMediaV1Folder_universal_d_ListDeletedFoldersResponse = ListDeletedFoldersResponse;
  const mediaSiteMediaV1Folder_universal_d_createFolder: typeof createFolder;
  type mediaSiteMediaV1Folder_universal_d_CreateFolderOptions = CreateFolderOptions;
  const mediaSiteMediaV1Folder_universal_d_getFolder: typeof getFolder;
  const mediaSiteMediaV1Folder_universal_d_listFolders: typeof listFolders;
  type mediaSiteMediaV1Folder_universal_d_ListFoldersOptions = ListFoldersOptions;
  const mediaSiteMediaV1Folder_universal_d_updateFolder: typeof updateFolder;
  type mediaSiteMediaV1Folder_universal_d_UpdateFolderOptions = UpdateFolderOptions;
  const mediaSiteMediaV1Folder_universal_d_generateFolderDownloadUrl: typeof generateFolderDownloadUrl;
  const mediaSiteMediaV1Folder_universal_d_bulkDeleteFolders: typeof bulkDeleteFolders;
  type mediaSiteMediaV1Folder_universal_d_BulkDeleteFoldersOptions = BulkDeleteFoldersOptions;
  const mediaSiteMediaV1Folder_universal_d_bulkRemoveFoldersFromTrashBin: typeof bulkRemoveFoldersFromTrashBin;
  type mediaSiteMediaV1Folder_universal_d_BulkRemoveFoldersFromTrashBinOptions = BulkRemoveFoldersFromTrashBinOptions;
  const mediaSiteMediaV1Folder_universal_d_bulkRestoreFoldersFromTrashBin: typeof bulkRestoreFoldersFromTrashBin;
  type mediaSiteMediaV1Folder_universal_d_BulkRestoreFoldersFromTrashBinOptions = BulkRestoreFoldersFromTrashBinOptions;
  const mediaSiteMediaV1Folder_universal_d_listDeletedFolders: typeof listDeletedFolders;
  type mediaSiteMediaV1Folder_universal_d_ListDeletedFoldersOptions = ListDeletedFoldersOptions;
  namespace mediaSiteMediaV1Folder_universal_d {
    export {
      __debug$1 as __debug,
      mediaSiteMediaV1Folder_universal_d_Folder as Folder,
      mediaSiteMediaV1Folder_universal_d_CreateFolderRequest as CreateFolderRequest,
      mediaSiteMediaV1Folder_universal_d_CreateFolderResponse as CreateFolderResponse,
      mediaSiteMediaV1Folder_universal_d_GetFolderRequest as GetFolderRequest,
      mediaSiteMediaV1Folder_universal_d_GetFolderResponse as GetFolderResponse,
      mediaSiteMediaV1Folder_universal_d_ListFoldersRequest as ListFoldersRequest,
      Sorting$1 as Sorting,
      SortOrder$1 as SortOrder,
      CursorPaging$1 as CursorPaging,
      mediaSiteMediaV1Folder_universal_d_ListFoldersResponse as ListFoldersResponse,
      PagingMetadataV2$1 as PagingMetadataV2,
      Cursors$1 as Cursors,
      mediaSiteMediaV1Folder_universal_d_UpdateFolderRequest as UpdateFolderRequest,
      mediaSiteMediaV1Folder_universal_d_UpdateFolderResponse as UpdateFolderResponse,
      mediaSiteMediaV1Folder_universal_d_GenerateFolderDownloadUrlRequest as GenerateFolderDownloadUrlRequest,
      mediaSiteMediaV1Folder_universal_d_GenerateFolderDownloadUrlResponse as GenerateFolderDownloadUrlResponse,
      mediaSiteMediaV1Folder_universal_d_BulkDeleteFoldersRequest as BulkDeleteFoldersRequest,
      mediaSiteMediaV1Folder_universal_d_BulkDeleteFoldersResponse as BulkDeleteFoldersResponse,
      mediaSiteMediaV1Folder_universal_d_BulkRemoveFoldersFromTrashBinRequest as BulkRemoveFoldersFromTrashBinRequest,
      mediaSiteMediaV1Folder_universal_d_BulkRemoveFoldersFromTrashBinResponse as BulkRemoveFoldersFromTrashBinResponse,
      mediaSiteMediaV1Folder_universal_d_BulkRestoreFoldersFromTrashBinRequest as BulkRestoreFoldersFromTrashBinRequest,
      mediaSiteMediaV1Folder_universal_d_BulkRestoreFoldersFromTrashBinResponse as BulkRestoreFoldersFromTrashBinResponse,
      mediaSiteMediaV1Folder_universal_d_ListDeletedFoldersRequest as ListDeletedFoldersRequest,
      mediaSiteMediaV1Folder_universal_d_ListDeletedFoldersResponse as ListDeletedFoldersResponse,
      mediaSiteMediaV1Folder_universal_d_createFolder as createFolder,
      mediaSiteMediaV1Folder_universal_d_CreateFolderOptions as CreateFolderOptions,
      mediaSiteMediaV1Folder_universal_d_getFolder as getFolder,
      mediaSiteMediaV1Folder_universal_d_listFolders as listFolders,
      mediaSiteMediaV1Folder_universal_d_ListFoldersOptions as ListFoldersOptions,
      mediaSiteMediaV1Folder_universal_d_updateFolder as updateFolder,
      mediaSiteMediaV1Folder_universal_d_UpdateFolderOptions as UpdateFolderOptions,
      mediaSiteMediaV1Folder_universal_d_generateFolderDownloadUrl as generateFolderDownloadUrl,
      mediaSiteMediaV1Folder_universal_d_bulkDeleteFolders as bulkDeleteFolders,
      mediaSiteMediaV1Folder_universal_d_BulkDeleteFoldersOptions as BulkDeleteFoldersOptions,
      mediaSiteMediaV1Folder_universal_d_bulkRemoveFoldersFromTrashBin as bulkRemoveFoldersFromTrashBin,
      mediaSiteMediaV1Folder_universal_d_BulkRemoveFoldersFromTrashBinOptions as BulkRemoveFoldersFromTrashBinOptions,
      mediaSiteMediaV1Folder_universal_d_bulkRestoreFoldersFromTrashBin as bulkRestoreFoldersFromTrashBin,
      mediaSiteMediaV1Folder_universal_d_BulkRestoreFoldersFromTrashBinOptions as BulkRestoreFoldersFromTrashBinOptions,
      mediaSiteMediaV1Folder_universal_d_listDeletedFolders as listDeletedFolders,
      mediaSiteMediaV1Folder_universal_d_ListDeletedFoldersOptions as ListDeletedFoldersOptions,
    };
  }
  
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface FileDescriptor {
      /** Internal name (unique identifier) which is generated when a file is uploaded by the Media Manager */
      _id?: string;
      /** The display name that appears in the Media Manager. (original_file_name in private media api) */
      displayName?: string;
      /** URL of the file. */
      url?: string;
      /** ID of the file's parent folder */
      parentFolderId?: string | null;
      /** File hash. */
      hash?: string;
      /**
       * Size of the uploaded file in bytes
       * @internal
       * @readonly
       */
      sizeInBytes?: string | null;
      /**
       * Whether the link to the uploaded file is public or private. Private links require a token to be used
       * @readonly
       */
      private?: boolean;
      /** Type of the file that was uploaded. */
      mediaType?: MediaType;
      /** The content of the file */
      media?: FileMedia;
      /** Status of the file that was uploaded */
      operationStatus?: OperationStatus;
      /** URL where the file was uploaded from */
      sourceUrl?: string | null;
      /** URL of the file's icon */
      thumbnailUrl?: string | null;
      /** A list of terms that describe the media item, generated by an artificial intelligence service or provided by user. */
      labels?: string[];
      /** Date the file was created */
      _createdDate?: Date;
      /** Date the file was updated */
      _updatedDate?: Date;
      /** The site id where the file is stored */
      siteId?: string;
  }
  enum MediaType {
      UNKNOWN = "UNKNOWN",
      IMAGE = "IMAGE",
      VIDEO = "VIDEO",
      AUDIO = "AUDIO",
      DOCUMENT = "DOCUMENT",
      VECTOR = "VECTOR"
  }
  interface FileMedia extends FileMediaMediaOneOf {
      /** Image media information */
      image?: ImageMedia;
      /** video media information */
      video?: string;
      /** Audio media information */
      audio?: AudioV2;
      /** Document media information */
      document?: string;
      /** Vector media information */
      vector?: ImageMedia;
  }
  /** @oneof */
  interface FileMediaMediaOneOf {
      /** Image media information */
      image?: ImageMedia;
      /** video media information */
      video?: string;
      /** Audio media information */
      audio?: AudioV2;
      /** Document media information */
      document?: string;
      /** Vector media information */
      vector?: ImageMedia;
  }
  interface ImageMedia {
      /** Image media information */
      image?: string;
      /** A representation of the colors in the image, Optional */
      colors?: Colors;
      /**
       * An array with information about faces in the image
       * Use to crop images without cutting faces
       * Optional
       */
      faces?: FaceRecognition[];
      /**
       * Image media information for a preview of the original image
       * Use this to display a preview for private images
       * Optional
       */
      previewImage?: string;
  }
  interface Colors {
      /** Main prominent color */
      prominent?: Color;
      /** Color palette */
      palette?: Color[];
  }
  interface Color {
      /** HEX color */
      hex?: string | null;
      /** RGB color */
      rgb?: ColorRGB;
  }
  interface ColorRGB {
      /** Red channel */
      r?: number | null;
      /** Green channel */
      g?: number | null;
      /** Blue channel */
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
      /** The accuracy percentage of the face recognition - The likelihood that a face was detected */
      confidence?: number;
      /** Top left x pixel coordinate of the face */
      x?: number;
      /** Top left y pixel coordinate of the face */
      y?: number;
      /** The pixel height of the face */
      height?: number;
      /** The pixel width of the face */
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
  interface AudioV2 {
      /** WixMedia ID. */
      _id?: string;
      /** Audio formats available for this file. */
      assets?: string[];
      /**
       * Audio bitrate. Optional.
       * @internal
       * @readonly
       */
      bitrate?: number | null;
      /**
       * Audio format. Optional.
       * @internal
       * @readonly
       */
      format?: string | null;
      /**
       * Audio duration in seconds. Optional.
       * @internal
       * @readonly
       */
      duration?: number | null;
      /**
       * Audio size in bytes. Optional.
       * @internal
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
  interface FileReady {
  }
  interface FileFailed {
  }
  interface GenerateFilesDownloadUrlRequest {
      /** A list of file urls to download */
      fileIds?: string[];
  }
  interface GenerateFilesDownloadUrlResponse {
      /** The download URL for the file(s) */
      downloadUrl?: string;
  }
  interface GenerateFileDownloadUrlRequest {
      /** Internal name (unique identifier) which is generated when a file is uploaded by the Media Manager */
      fileId: string;
      /** The downloaded file's name. Defaults to the file's name displayed in the Media Manager */
      downloadFileName?: string | null;
      /** The time (in minutes) it takes for the download URL to expire. Defaults to 600. Limit is 525600 (1 year). */
      expirationInMinutes?: number | null;
      /** The redirect URL for when the download URL with a token has expired. Defaults to a 403 Forbidden response page. */
      expirationRedirectUrl?: string | null;
      /**
       * Optional Asset key
       * The asset key is used to download a specific asset of the file
       * A special asset key called `src` is used as a default, and describe the original file
       */
      assetKeys?: string[] | null;
  }
  interface GenerateFileDownloadUrlResponse {
      /** A list containing requested download formats of the file */
      downloadUrls?: DownloadUrl[];
  }
  interface DownloadUrl {
      /** The download URL for the file */
      url?: string;
      /** The asset key of the file that this url points to, `src` is the original asset */
      assetKey?: string;
  }
  interface GetFileDescriptorRequest {
      /** Internal name (unique identifier) which is generated when a file is uploaded by the Media Manager */
      fileId: string;
  }
  interface GetFileDescriptorResponse {
      /** The information of the file */
      file?: FileDescriptor;
  }
  interface UpdateFileRequest {
      /** The id of the file to update */
      fileId: string;
      /** Optional - New file name */
      displayName?: string | null;
      /**
       * Optional - A folder id
       * If provided, nest the file under this folder, effectively moving the file
       */
      parentFolderId?: string | null;
      /**
       * Optional - A list of terms that describe the media item.
       * The labels of the item will be replaced with the value provided here
       */
      labels?: string[] | null;
  }
  interface UpdateFileResponse {
      /** A file object containing the newly updated file info */
      file?: FileDescriptor;
  }
  interface GenerateFileUploadUrlRequest {
      /** The mime type of the file that will be uploaded */
      mimeType: string | null;
      /**
       * Optional - The current file name used to identify the file type
       * The actual display name will get taken from the upload request
       */
      fileName?: string | null;
      /** Size of the uploaded file in bytes */
      sizeInBytes?: string | null;
      /**
       * Optional - A folder id
       * If provided, nest the file under this folder
       */
      parentFolderId?: string | null;
      /**
       * Optional - if set to true, make the file private
       * See `Private Files` in terminology
       */
      private?: boolean | null;
      /** Optional - a list of file labels */
      labels?: string[] | null;
  }
  interface GenerateFileUploadUrlResponse {
      /** The single use upload url */
      uploadUrl?: string;
  }
  interface GenerateFileResumableUploadUrlRequest {
      /** The mime type of the file that will be uploaded */
      mimeType: string | null;
      /** Optional -The display name that appears in the Media Manager. */
      fileName?: string | null;
      /** Size of the uploaded file in bytes */
      sizeInBytes?: string | null;
      /**
       * Optional - A folder id
       * If provided, nest the file under this folder
       */
      parentFolderId?: string | null;
      /**
       * Optional - if set to true, make the file private
       * See `Private Files` in terminology
       */
      private?: boolean | null;
      /**
       * Optional - A list of terms that describe the media item.
       * The labels of the item will be replaced with the value provided here
       */
      labels?: string[] | null;
      /**
       * Optional - default to TUS
       * The upload protocol that should be used when interacting with the resumable upload url that will be returned
       */
      uploadProtocol?: UploadProtocol;
  }
  enum UploadProtocol {
      /** Use upload protocol */
      TUS = "TUS"
  }
  interface GenerateFileResumableUploadUrlResponse {
      /** The upload protocol that should be used when interacting with the url in the response */
      uploadProtocol?: UploadProtocol;
      /** The single use upload url */
      uploadUrl?: string;
      /** The single use upload token */
      uploadToken?: string;
  }
  interface ImportFileRequest {
      /** A publicly accessible url of the file to be imported */
      url: string;
      /** Optional -The display name that appears in the Media Manager. */
      displayName?: string | null;
      /**
       * Optional - A folder id
       * If provided, nest the file under this folder
       */
      parentFolderId?: string | null;
      /**
       * Optional - if set to true, make the file private
       * See `Private Files` in terminology
       */
      private?: boolean | null;
      /**
       * Optional - A list of terms that describe the media item.
       * The labels of the item will be replaced with the value provided here
       */
      labels?: string[] | null;
      /** The mime type of the file that will be imported */
      mimeType?: string;
  }
  interface ImportFileResponse {
      /**
       * A file object containing initial details on the file that will be imported
       * This object will not contain the "media" property of the File object
       */
      file?: FileDescriptor;
  }
  interface BulkImportFilesRequest {
      /** A list of import requests */
      importFileRequests?: ImportFileRequest[];
  }
  interface BulkImportFilesResponse {
      /**
       * A list of file objects containing initial details on the files that will be imported
       * Each object will not contain the "media" property of the File object
       */
      files?: FileDescriptor[];
  }
  interface ListFilesRequest {
      /** Optional list files in a specific folder */
      parentFolderId?: string | null;
      /** Optional list of media types */
      mediaTypes?: MediaType[];
      /** Optional list only private or non-private files */
      private?: boolean | null;
      /**
       * Optional one of "displayName"/"updatedDate"
       * Default updatedDate desc
       */
      sort?: Sorting;
      /** Optional current cursor of the request if it exist */
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
  interface ListFilesResponse {
      /** The information for the files matching the query */
      files?: FileDescriptor[];
      /** The next cursor if one exists */
      nextCursor?: PagingMetadataV2;
  }
  interface PagingMetadataV2 {
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
  }
  interface GenerateVideoStreamingUrlRequest {
      /** Internal name (unique identifier) which is generated when a file is uploaded by the Media Manager */
      fileId: string;
      /** The information for the files matching the query */
      format?: StreamFormat;
  }
  enum StreamFormat {
      UNKNOWN = "UNKNOWN",
      HLS = "HLS",
      DASH = "DASH"
  }
  interface GenerateVideoStreamingUrlResponse {
      /** A url for the requested streaming format */
      downloadUrl?: DownloadUrl;
  }
  interface GenerateWebSocketTokenRequest {
  }
  interface GenerateWebSocketTokenResponse {
      /** The web socket token for the identity in the request */
      token?: string;
  }
  interface BulkDeleteFilesRequest {
      /** List of file urls to move to Media Manager's trash */
      fileIds?: string[];
  }
  interface BulkDeleteFilesResponse {
  }
  interface BulkRemoveFilesFromTrashBinRequest {
      /** List of file ids to remove from Media Manager's trash - permanently delete files */
      fileIds?: string[];
  }
  interface BulkRemoveFilesFromTrashBinResponse {
  }
  interface BulkRestoreFilesFromTrashBinRequest {
      /** List of file ids to restore from Media Manager's trash */
      fileIds?: string[];
  }
  interface BulkRestoreFilesFromTrashBinResponse {
  }
  interface ListDeletedFilesRequest {
      /** Optional list files in a specific folder */
      parentFolderId?: string | null;
      /** Optional list of media types */
      mediaTypes?: MediaType[];
      /** Optional list only private or non-private files */
      private?: boolean | null;
      /**
       * Optional one of "displayName"/"updatedDate"
       * Default updatedDate desc
       */
      sort?: Sorting;
      /** Optional current cursor of the request if it exist */
      cursorPaging?: CursorPaging;
  }
  interface ListDeletedFilesResponse {
      /** List of file info that will be restored */
      files?: FileDescriptor[];
      /** The next cursor if one exists */
      nextCursor?: PagingMetadataV2;
  }
  /**
   * Returns a download URL for downloading a compressed file containing all the requested files.
   * The compressed file can contain up to 1000 files
   */
  function generateFilesDownloadUrl(options?: GenerateFilesDownloadUrlOptions): Promise<GenerateFilesDownloadUrlResponse>;
  interface GenerateFilesDownloadUrlOptions {
      /** A list of file urls to download */
      fileIds?: string[];
  }
  /**
   * Gets a download URL that includes a temporary token from the Media Manager for a specified file
   * Use this to grant access to a private file, or to provide a redirect url after the token expiration
   * @param fileId - Internal name (unique identifier) which is generated when a file is uploaded by the Media Manager
   * @requiredField fileId
   */
  function generateFileDownloadUrl(fileId: string, options?: GenerateFileDownloadUrlOptions): Promise<GenerateFileDownloadUrlResponse>;
  interface GenerateFileDownloadUrlOptions {
      /** The downloaded file's name. Defaults to the file's name displayed in the Media Manager */
      downloadFileName?: string | null;
      /** The time (in minutes) it takes for the download URL to expire. Defaults to 600. Limit is 525600 (1 year). */
      expirationInMinutes?: number | null;
      /** The redirect URL for when the download URL with a token has expired. Defaults to a 403 Forbidden response page. */
      expirationRedirectUrl?: string | null;
      /**
       * Optional Asset key
       * The asset key is used to download a specific asset of the file
       * A special asset key called `src` is used as a default, and describe the original file
       */
      assetKeys?: string[] | null;
  }
  /**
   * Gets a file's information from the Media Manager
   * @param fileId - Internal name (unique identifier) which is generated when a file is uploaded by the Media Manager
   * @requiredField fileId
   */
  function getFileDescriptor(fileId: string): Promise<GetFileDescriptorResponse>;
  /**
   * Update the file, allowing renaming and moving the file
   * @param fileId - The id of the file to update
   * @requiredField fileId
   */
  function updateFile(fileId: string, options?: UpdateFileOptions): Promise<UpdateFileResponse>;
  interface UpdateFileOptions {
      /** Optional - New file name */
      displayName?: string | null;
      /**
       * Optional - A folder id
       * If provided, nest the file under this folder, effectively moving the file
       */
      parentFolderId?: string | null;
      /**
       * Optional - A list of terms that describe the media item.
       * The labels of the item will be replaced with the value provided here
       */
      labels?: string[] | null;
  }
  /**
   * Returns an upload URL to allow an external client to upload a single file to the site's Media
   * @param mimeType - The mime type of the file that will be uploaded
   * @requiredField mimeType
   */
  function generateFileUploadUrl(mimeType: string | null, options?: GenerateFileUploadUrlOptions): Promise<GenerateFileUploadUrlResponse>;
  interface GenerateFileUploadUrlOptions {
      /**
       * Optional - The current file name used to identify the file type
       * The actual display name will get taken from the upload request
       */
      fileName?: string | null;
      /** Size of the uploaded file in bytes */
      sizeInBytes?: string | null;
      /**
       * Optional - A folder id
       * If provided, nest the file under this folder
       */
      parentFolderId?: string | null;
      /**
       * Optional - if set to true, make the file private
       * See `Private Files` in terminology
       */
      private?: boolean | null;
      /** Optional - a list of file labels */
      labels?: string[] | null;
  }
  /**
   * Returns an resumable upload URL to allow an external client to upload a single file to the site's Media
   * Resumable upload is recommended for files larger then 10MB or when network connection is poor
   * Wix supports TUS protocol - https://tus.io/
   * This protocol has implementations in multiple languages that can be used to manage the resumable upload processza
   * @param mimeType - The mime type of the file that will be uploaded
   * @requiredField mimeType
   */
  function generateFileResumableUploadUrl(mimeType: string | null, options?: GenerateFileResumableUploadUrlOptions): Promise<GenerateFileResumableUploadUrlResponse>;
  interface GenerateFileResumableUploadUrlOptions {
      /** Optional -The display name that appears in the Media Manager. */
      fileName?: string | null;
      /** Size of the uploaded file in bytes */
      sizeInBytes?: string | null;
      /**
       * Optional - A folder id
       * If provided, nest the file under this folder
       */
      parentFolderId?: string | null;
      /**
       * Optional - if set to true, make the file private
       * See `Private Files` in terminology
       */
      private?: boolean | null;
      /**
       * Optional - A list of terms that describe the media item.
       * The labels of the item will be replaced with the value provided here
       */
      labels?: string[] | null;
      /**
       * Optional - default to TUS
       * The upload protocol that should be used when interacting with the resumable upload url that will be returned
       */
      uploadProtocol?: UploadProtocol;
  }
  /**
   * Returns partial file info of the file that will be imported
   * @param url - A publicly accessible url of the file to be imported
   * @requiredField url
   */
  function importFile(url: string, options?: ImportFileOptions): Promise<ImportFileResponse>;
  interface ImportFileOptions {
      /** Optional -The display name that appears in the Media Manager. */
      displayName?: string | null;
      /**
       * Optional - A folder id
       * If provided, nest the file under this folder
       */
      parentFolderId?: string | null;
      /**
       * Optional - if set to true, make the file private
       * See `Private Files` in terminology
       */
      private?: boolean | null;
      /**
       * Optional - A list of terms that describe the media item.
       * The labels of the item will be replaced with the value provided here
       */
      labels?: string[] | null;
      /** The mime type of the file that will be imported */
      mimeType?: string;
  }
  /** Bulk import files from external URLs, returns partial file info of the file that will be imported */
  function bulkImportFiles(options?: BulkImportFilesOptions): Promise<BulkImportFilesResponse>;
  interface BulkImportFilesOptions {
      /** A list of import requests */
      importFileRequests?: ImportFileRequest[];
  }
  /** Return a list of files matching the query */
  function listFiles(options?: ListFilesOptions): Promise<ListFilesResponse>;
  interface ListFilesOptions {
      /** Optional list files in a specific folder */
      parentFolderId?: string | null;
      /** Optional list of media types */
      mediaTypes?: MediaType[];
      /** Optional list only private or non-private files */
      private?: boolean | null;
      /**
       * Optional one of "displayName"/"updatedDate"
       * Default updatedDate desc
       */
      sort?: Sorting;
      /** Optional current cursor of the request if it exist */
      cursorPaging?: CursorPaging;
  }
  /**
   * Return a url info object containing the stream url
   * @param fileId - Internal name (unique identifier) which is generated when a file is uploaded by the Media Manager
   * @requiredField fileId
   */
  function generateVideoStreamingUrl(fileId: string, options?: GenerateVideoStreamingUrlOptions): Promise<GenerateVideoStreamingUrlResponse>;
  interface GenerateVideoStreamingUrlOptions {
      /** The information for the files matching the query */
      format?: StreamFormat;
  }
  /**
   * Return a token for a direct web socket notification channel
   * This API is not platformized (Contact the Media team for use instructions)
   * This API should be internal only
   */
  function generateWebSocketToken(): Promise<GenerateWebSocketTokenResponse>;
  /**
   * Move files listed to Media Manager's trash
   * Moving many files to trash at once is an asynchronous action. It may take some time for the results to be seen in the Media Manager.
   * Attempting to move already-trashed files to trash again doesn't result in an error.
   */
  function bulkDeleteFiles(options?: BulkDeleteFilesOptions): Promise<void>;
  interface BulkDeleteFilesOptions {
      /** List of file urls to move to Media Manager's trash */
      fileIds?: string[];
  }
  /**
   * Permanently deletes a file from the site media, this action is not reversible
   * Make sure this file is not used in a site or in any other way as it will break
   */
  function bulkRemoveFilesFromTrashBin(options?: BulkRemoveFilesFromTrashBinOptions): Promise<void>;
  interface BulkRemoveFilesFromTrashBinOptions {
      /** List of file ids to remove from Media Manager's trash - permanently delete files */
      fileIds?: string[];
  }
  /** Restore a file to its original location in the site media. */
  function bulkRestoreFilesFromTrashBin(options?: BulkRestoreFilesFromTrashBinOptions): Promise<void>;
  interface BulkRestoreFilesFromTrashBinOptions {
      /** List of file ids to restore from Media Manager's trash */
      fileIds?: string[];
  }
  /** Returns a list of the file infos of all the deleted files as directed by the filter. */
  function listDeletedFiles(options?: ListDeletedFilesOptions): Promise<ListDeletedFilesResponse>;
  interface ListDeletedFilesOptions {
      /** Optional list files in a specific folder */
      parentFolderId?: string | null;
      /** Optional list of media types */
      mediaTypes?: MediaType[];
      /** Optional list only private or non-private files */
      private?: boolean | null;
      /**
       * Optional one of "displayName"/"updatedDate"
       * Default updatedDate desc
       */
      sort?: Sorting;
      /** Optional current cursor of the request if it exist */
      cursorPaging?: CursorPaging;
  }
  
  const mediaSiteMediaV1FileDescriptor_universal_d___debug: typeof __debug;
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
  type mediaSiteMediaV1FileDescriptor_universal_d_OperationStatus = OperationStatus;
  const mediaSiteMediaV1FileDescriptor_universal_d_OperationStatus: typeof OperationStatus;
  type mediaSiteMediaV1FileDescriptor_universal_d_FileReady = FileReady;
  type mediaSiteMediaV1FileDescriptor_universal_d_FileFailed = FileFailed;
  type mediaSiteMediaV1FileDescriptor_universal_d_GenerateFilesDownloadUrlRequest = GenerateFilesDownloadUrlRequest;
  type mediaSiteMediaV1FileDescriptor_universal_d_GenerateFilesDownloadUrlResponse = GenerateFilesDownloadUrlResponse;
  type mediaSiteMediaV1FileDescriptor_universal_d_GenerateFileDownloadUrlRequest = GenerateFileDownloadUrlRequest;
  type mediaSiteMediaV1FileDescriptor_universal_d_GenerateFileDownloadUrlResponse = GenerateFileDownloadUrlResponse;
  type mediaSiteMediaV1FileDescriptor_universal_d_DownloadUrl = DownloadUrl;
  type mediaSiteMediaV1FileDescriptor_universal_d_GetFileDescriptorRequest = GetFileDescriptorRequest;
  type mediaSiteMediaV1FileDescriptor_universal_d_GetFileDescriptorResponse = GetFileDescriptorResponse;
  type mediaSiteMediaV1FileDescriptor_universal_d_UpdateFileRequest = UpdateFileRequest;
  type mediaSiteMediaV1FileDescriptor_universal_d_UpdateFileResponse = UpdateFileResponse;
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
  type mediaSiteMediaV1FileDescriptor_universal_d_Sorting = Sorting;
  type mediaSiteMediaV1FileDescriptor_universal_d_SortOrder = SortOrder;
  const mediaSiteMediaV1FileDescriptor_universal_d_SortOrder: typeof SortOrder;
  type mediaSiteMediaV1FileDescriptor_universal_d_CursorPaging = CursorPaging;
  type mediaSiteMediaV1FileDescriptor_universal_d_ListFilesResponse = ListFilesResponse;
  type mediaSiteMediaV1FileDescriptor_universal_d_PagingMetadataV2 = PagingMetadataV2;
  type mediaSiteMediaV1FileDescriptor_universal_d_Cursors = Cursors;
  type mediaSiteMediaV1FileDescriptor_universal_d_GenerateVideoStreamingUrlRequest = GenerateVideoStreamingUrlRequest;
  type mediaSiteMediaV1FileDescriptor_universal_d_StreamFormat = StreamFormat;
  const mediaSiteMediaV1FileDescriptor_universal_d_StreamFormat: typeof StreamFormat;
  type mediaSiteMediaV1FileDescriptor_universal_d_GenerateVideoStreamingUrlResponse = GenerateVideoStreamingUrlResponse;
  type mediaSiteMediaV1FileDescriptor_universal_d_GenerateWebSocketTokenRequest = GenerateWebSocketTokenRequest;
  type mediaSiteMediaV1FileDescriptor_universal_d_GenerateWebSocketTokenResponse = GenerateWebSocketTokenResponse;
  type mediaSiteMediaV1FileDescriptor_universal_d_BulkDeleteFilesRequest = BulkDeleteFilesRequest;
  type mediaSiteMediaV1FileDescriptor_universal_d_BulkDeleteFilesResponse = BulkDeleteFilesResponse;
  type mediaSiteMediaV1FileDescriptor_universal_d_BulkRemoveFilesFromTrashBinRequest = BulkRemoveFilesFromTrashBinRequest;
  type mediaSiteMediaV1FileDescriptor_universal_d_BulkRemoveFilesFromTrashBinResponse = BulkRemoveFilesFromTrashBinResponse;
  type mediaSiteMediaV1FileDescriptor_universal_d_BulkRestoreFilesFromTrashBinRequest = BulkRestoreFilesFromTrashBinRequest;
  type mediaSiteMediaV1FileDescriptor_universal_d_BulkRestoreFilesFromTrashBinResponse = BulkRestoreFilesFromTrashBinResponse;
  type mediaSiteMediaV1FileDescriptor_universal_d_ListDeletedFilesRequest = ListDeletedFilesRequest;
  type mediaSiteMediaV1FileDescriptor_universal_d_ListDeletedFilesResponse = ListDeletedFilesResponse;
  const mediaSiteMediaV1FileDescriptor_universal_d_generateFilesDownloadUrl: typeof generateFilesDownloadUrl;
  type mediaSiteMediaV1FileDescriptor_universal_d_GenerateFilesDownloadUrlOptions = GenerateFilesDownloadUrlOptions;
  const mediaSiteMediaV1FileDescriptor_universal_d_generateFileDownloadUrl: typeof generateFileDownloadUrl;
  type mediaSiteMediaV1FileDescriptor_universal_d_GenerateFileDownloadUrlOptions = GenerateFileDownloadUrlOptions;
  const mediaSiteMediaV1FileDescriptor_universal_d_getFileDescriptor: typeof getFileDescriptor;
  const mediaSiteMediaV1FileDescriptor_universal_d_updateFile: typeof updateFile;
  type mediaSiteMediaV1FileDescriptor_universal_d_UpdateFileOptions = UpdateFileOptions;
  const mediaSiteMediaV1FileDescriptor_universal_d_generateFileUploadUrl: typeof generateFileUploadUrl;
  type mediaSiteMediaV1FileDescriptor_universal_d_GenerateFileUploadUrlOptions = GenerateFileUploadUrlOptions;
  const mediaSiteMediaV1FileDescriptor_universal_d_generateFileResumableUploadUrl: typeof generateFileResumableUploadUrl;
  type mediaSiteMediaV1FileDescriptor_universal_d_GenerateFileResumableUploadUrlOptions = GenerateFileResumableUploadUrlOptions;
  const mediaSiteMediaV1FileDescriptor_universal_d_importFile: typeof importFile;
  type mediaSiteMediaV1FileDescriptor_universal_d_ImportFileOptions = ImportFileOptions;
  const mediaSiteMediaV1FileDescriptor_universal_d_bulkImportFiles: typeof bulkImportFiles;
  type mediaSiteMediaV1FileDescriptor_universal_d_BulkImportFilesOptions = BulkImportFilesOptions;
  const mediaSiteMediaV1FileDescriptor_universal_d_listFiles: typeof listFiles;
  type mediaSiteMediaV1FileDescriptor_universal_d_ListFilesOptions = ListFilesOptions;
  const mediaSiteMediaV1FileDescriptor_universal_d_generateVideoStreamingUrl: typeof generateVideoStreamingUrl;
  type mediaSiteMediaV1FileDescriptor_universal_d_GenerateVideoStreamingUrlOptions = GenerateVideoStreamingUrlOptions;
  const mediaSiteMediaV1FileDescriptor_universal_d_generateWebSocketToken: typeof generateWebSocketToken;
  const mediaSiteMediaV1FileDescriptor_universal_d_bulkDeleteFiles: typeof bulkDeleteFiles;
  type mediaSiteMediaV1FileDescriptor_universal_d_BulkDeleteFilesOptions = BulkDeleteFilesOptions;
  const mediaSiteMediaV1FileDescriptor_universal_d_bulkRemoveFilesFromTrashBin: typeof bulkRemoveFilesFromTrashBin;
  type mediaSiteMediaV1FileDescriptor_universal_d_BulkRemoveFilesFromTrashBinOptions = BulkRemoveFilesFromTrashBinOptions;
  const mediaSiteMediaV1FileDescriptor_universal_d_bulkRestoreFilesFromTrashBin: typeof bulkRestoreFilesFromTrashBin;
  type mediaSiteMediaV1FileDescriptor_universal_d_BulkRestoreFilesFromTrashBinOptions = BulkRestoreFilesFromTrashBinOptions;
  const mediaSiteMediaV1FileDescriptor_universal_d_listDeletedFiles: typeof listDeletedFiles;
  type mediaSiteMediaV1FileDescriptor_universal_d_ListDeletedFilesOptions = ListDeletedFilesOptions;
  namespace mediaSiteMediaV1FileDescriptor_universal_d {
    export {
      mediaSiteMediaV1FileDescriptor_universal_d___debug as __debug,
      mediaSiteMediaV1FileDescriptor_universal_d_FileDescriptor as FileDescriptor,
      mediaSiteMediaV1FileDescriptor_universal_d_MediaType as MediaType,
      mediaSiteMediaV1FileDescriptor_universal_d_FileMedia as FileMedia,
      mediaSiteMediaV1FileDescriptor_universal_d_FileMediaMediaOneOf as FileMediaMediaOneOf,
      mediaSiteMediaV1FileDescriptor_universal_d_ImageMedia as ImageMedia,
      mediaSiteMediaV1FileDescriptor_universal_d_Colors as Colors,
      mediaSiteMediaV1FileDescriptor_universal_d_Color as Color,
      mediaSiteMediaV1FileDescriptor_universal_d_ColorRGB as ColorRGB,
      mediaSiteMediaV1FileDescriptor_universal_d_FaceRecognition as FaceRecognition,
      mediaSiteMediaV1FileDescriptor_universal_d_VideoResolution as VideoResolution,
      mediaSiteMediaV1FileDescriptor_universal_d_AudioV2 as AudioV2,
      mediaSiteMediaV1FileDescriptor_universal_d_OperationStatus as OperationStatus,
      mediaSiteMediaV1FileDescriptor_universal_d_FileReady as FileReady,
      mediaSiteMediaV1FileDescriptor_universal_d_FileFailed as FileFailed,
      mediaSiteMediaV1FileDescriptor_universal_d_GenerateFilesDownloadUrlRequest as GenerateFilesDownloadUrlRequest,
      mediaSiteMediaV1FileDescriptor_universal_d_GenerateFilesDownloadUrlResponse as GenerateFilesDownloadUrlResponse,
      mediaSiteMediaV1FileDescriptor_universal_d_GenerateFileDownloadUrlRequest as GenerateFileDownloadUrlRequest,
      mediaSiteMediaV1FileDescriptor_universal_d_GenerateFileDownloadUrlResponse as GenerateFileDownloadUrlResponse,
      mediaSiteMediaV1FileDescriptor_universal_d_DownloadUrl as DownloadUrl,
      mediaSiteMediaV1FileDescriptor_universal_d_GetFileDescriptorRequest as GetFileDescriptorRequest,
      mediaSiteMediaV1FileDescriptor_universal_d_GetFileDescriptorResponse as GetFileDescriptorResponse,
      mediaSiteMediaV1FileDescriptor_universal_d_UpdateFileRequest as UpdateFileRequest,
      mediaSiteMediaV1FileDescriptor_universal_d_UpdateFileResponse as UpdateFileResponse,
      mediaSiteMediaV1FileDescriptor_universal_d_GenerateFileUploadUrlRequest as GenerateFileUploadUrlRequest,
      mediaSiteMediaV1FileDescriptor_universal_d_GenerateFileUploadUrlResponse as GenerateFileUploadUrlResponse,
      mediaSiteMediaV1FileDescriptor_universal_d_GenerateFileResumableUploadUrlRequest as GenerateFileResumableUploadUrlRequest,
      mediaSiteMediaV1FileDescriptor_universal_d_UploadProtocol as UploadProtocol,
      mediaSiteMediaV1FileDescriptor_universal_d_GenerateFileResumableUploadUrlResponse as GenerateFileResumableUploadUrlResponse,
      mediaSiteMediaV1FileDescriptor_universal_d_ImportFileRequest as ImportFileRequest,
      mediaSiteMediaV1FileDescriptor_universal_d_ImportFileResponse as ImportFileResponse,
      mediaSiteMediaV1FileDescriptor_universal_d_BulkImportFilesRequest as BulkImportFilesRequest,
      mediaSiteMediaV1FileDescriptor_universal_d_BulkImportFilesResponse as BulkImportFilesResponse,
      mediaSiteMediaV1FileDescriptor_universal_d_ListFilesRequest as ListFilesRequest,
      mediaSiteMediaV1FileDescriptor_universal_d_Sorting as Sorting,
      mediaSiteMediaV1FileDescriptor_universal_d_SortOrder as SortOrder,
      mediaSiteMediaV1FileDescriptor_universal_d_CursorPaging as CursorPaging,
      mediaSiteMediaV1FileDescriptor_universal_d_ListFilesResponse as ListFilesResponse,
      mediaSiteMediaV1FileDescriptor_universal_d_PagingMetadataV2 as PagingMetadataV2,
      mediaSiteMediaV1FileDescriptor_universal_d_Cursors as Cursors,
      mediaSiteMediaV1FileDescriptor_universal_d_GenerateVideoStreamingUrlRequest as GenerateVideoStreamingUrlRequest,
      mediaSiteMediaV1FileDescriptor_universal_d_StreamFormat as StreamFormat,
      mediaSiteMediaV1FileDescriptor_universal_d_GenerateVideoStreamingUrlResponse as GenerateVideoStreamingUrlResponse,
      mediaSiteMediaV1FileDescriptor_universal_d_GenerateWebSocketTokenRequest as GenerateWebSocketTokenRequest,
      mediaSiteMediaV1FileDescriptor_universal_d_GenerateWebSocketTokenResponse as GenerateWebSocketTokenResponse,
      mediaSiteMediaV1FileDescriptor_universal_d_BulkDeleteFilesRequest as BulkDeleteFilesRequest,
      mediaSiteMediaV1FileDescriptor_universal_d_BulkDeleteFilesResponse as BulkDeleteFilesResponse,
      mediaSiteMediaV1FileDescriptor_universal_d_BulkRemoveFilesFromTrashBinRequest as BulkRemoveFilesFromTrashBinRequest,
      mediaSiteMediaV1FileDescriptor_universal_d_BulkRemoveFilesFromTrashBinResponse as BulkRemoveFilesFromTrashBinResponse,
      mediaSiteMediaV1FileDescriptor_universal_d_BulkRestoreFilesFromTrashBinRequest as BulkRestoreFilesFromTrashBinRequest,
      mediaSiteMediaV1FileDescriptor_universal_d_BulkRestoreFilesFromTrashBinResponse as BulkRestoreFilesFromTrashBinResponse,
      mediaSiteMediaV1FileDescriptor_universal_d_ListDeletedFilesRequest as ListDeletedFilesRequest,
      mediaSiteMediaV1FileDescriptor_universal_d_ListDeletedFilesResponse as ListDeletedFilesResponse,
      mediaSiteMediaV1FileDescriptor_universal_d_generateFilesDownloadUrl as generateFilesDownloadUrl,
      mediaSiteMediaV1FileDescriptor_universal_d_GenerateFilesDownloadUrlOptions as GenerateFilesDownloadUrlOptions,
      mediaSiteMediaV1FileDescriptor_universal_d_generateFileDownloadUrl as generateFileDownloadUrl,
      mediaSiteMediaV1FileDescriptor_universal_d_GenerateFileDownloadUrlOptions as GenerateFileDownloadUrlOptions,
      mediaSiteMediaV1FileDescriptor_universal_d_getFileDescriptor as getFileDescriptor,
      mediaSiteMediaV1FileDescriptor_universal_d_updateFile as updateFile,
      mediaSiteMediaV1FileDescriptor_universal_d_UpdateFileOptions as UpdateFileOptions,
      mediaSiteMediaV1FileDescriptor_universal_d_generateFileUploadUrl as generateFileUploadUrl,
      mediaSiteMediaV1FileDescriptor_universal_d_GenerateFileUploadUrlOptions as GenerateFileUploadUrlOptions,
      mediaSiteMediaV1FileDescriptor_universal_d_generateFileResumableUploadUrl as generateFileResumableUploadUrl,
      mediaSiteMediaV1FileDescriptor_universal_d_GenerateFileResumableUploadUrlOptions as GenerateFileResumableUploadUrlOptions,
      mediaSiteMediaV1FileDescriptor_universal_d_importFile as importFile,
      mediaSiteMediaV1FileDescriptor_universal_d_ImportFileOptions as ImportFileOptions,
      mediaSiteMediaV1FileDescriptor_universal_d_bulkImportFiles as bulkImportFiles,
      mediaSiteMediaV1FileDescriptor_universal_d_BulkImportFilesOptions as BulkImportFilesOptions,
      mediaSiteMediaV1FileDescriptor_universal_d_listFiles as listFiles,
      mediaSiteMediaV1FileDescriptor_universal_d_ListFilesOptions as ListFilesOptions,
      mediaSiteMediaV1FileDescriptor_universal_d_generateVideoStreamingUrl as generateVideoStreamingUrl,
      mediaSiteMediaV1FileDescriptor_universal_d_GenerateVideoStreamingUrlOptions as GenerateVideoStreamingUrlOptions,
      mediaSiteMediaV1FileDescriptor_universal_d_generateWebSocketToken as generateWebSocketToken,
      mediaSiteMediaV1FileDescriptor_universal_d_bulkDeleteFiles as bulkDeleteFiles,
      mediaSiteMediaV1FileDescriptor_universal_d_BulkDeleteFilesOptions as BulkDeleteFilesOptions,
      mediaSiteMediaV1FileDescriptor_universal_d_bulkRemoveFilesFromTrashBin as bulkRemoveFilesFromTrashBin,
      mediaSiteMediaV1FileDescriptor_universal_d_BulkRemoveFilesFromTrashBinOptions as BulkRemoveFilesFromTrashBinOptions,
      mediaSiteMediaV1FileDescriptor_universal_d_bulkRestoreFilesFromTrashBin as bulkRestoreFilesFromTrashBin,
      mediaSiteMediaV1FileDescriptor_universal_d_BulkRestoreFilesFromTrashBinOptions as BulkRestoreFilesFromTrashBinOptions,
      mediaSiteMediaV1FileDescriptor_universal_d_listDeletedFiles as listDeletedFiles,
      mediaSiteMediaV1FileDescriptor_universal_d_ListDeletedFilesOptions as ListDeletedFilesOptions,
    };
  }
  
  export { mediaSiteMediaV1FileDescriptor_universal_d as files, mediaSiteMediaV1Folder_universal_d as folders };
}
