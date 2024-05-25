declare module "wix-pro-gallery-backend" {
    interface Gallery {
        /**
         * Gallery ID.
         * @readonly
         */
        _id?: string | null;
        /** Gallery name. */
        name?: string | null;
        /**
         * Total number of items in the gallery.
         * @readonly
         */
        totalItems?: number | null;
        /** Media items in the gallery. */
        items?: Item[];
        /**
         * Gallery sort order.
         * Determines which position a gallery is displayed on the site. <br />
         *
         * Min: `1` <br />
         */
        sortOrder?: number | null;
        /**
         * Date and time the gallery was created.
         * @readonly
         */
        _createdDate?: Date;
    }
    interface Item extends ItemMetadataOneOf {
        /**
         * Item ID.
         * @readonly
         */
        _id?: string | null;
        /**
         * Item sort order.
         * Determines which position a media item is displayed in the gallery. <br />
         *
         * Min: `1` <br />
         * Default: [Epoch](https://www.epoch101.com/) timestamp in descending order (end of the gallery items list). <br />
         *
         * *Note:** If the same sort order number is assigned to more than one media item in a gallery, the first media item to which it was assigned will come first.
         */
        sortOrder?: number | null;
        /** Item title. */
        title?: string | null;
        /** Item description. */
        description?: string | null;
        /** Link from the item. You can link to Wix sites or external URLs. */
        link?: Link;
        /**
         * Item data type. One of: <br /> +"IMAGE" <br /> +"VIDEO" <br /> +"TEXT"
         * @readonly */
        type?: Type;
        /**
         * Date and time the item was created.
         * @readonly
         */
        _createdDate?: Date;
        /**
         * Date and time the item was last updated.
         * @readonly
         */
        _updatedDate?: Date;
        /** Item tags. */
        tags?: Tags;
        /** Details about the image. */
        image?: Image;
        /** Details about the video. */
        video?: Video;
        /** Details about the text file. */
        text?: Text;
    }
    /** @oneof */
    interface ItemMetadataOneOf {
        /** Details about the image. */
        image?: Image;
        /** Details about the video. */
        video?: Video;
        /** Details about the text file. */
        text?: Text;
    }
    interface Link {
        /** Display text of the link. */
        text?: string | null;
        /** Target URL of the link. */
        url?: string | null;
        /**
         * Whether the link opens in a new tab or window. One of:
         * + `_blank`: The link opens in a new tab or window.
         * + `_self`: The link opens in the same tab or window.
         */
        target?: string | null;
    }
    enum Type {
        UNDEFINED = "UNDEFINED",
        IMAGE = "IMAGE",
        VIDEO = "VIDEO",
        TEXT = "TEXT"
    }
    interface Image {
        /** The image's Wix media URL in the following format: `'wix:image://v1/<uri>/<filename>#originWidth=<width>&originHeight=<height>[&watermark=<watermark_manifest_string>]'`. */
        imageInfo?: string;
        /** Focal point of the image. */
        focalPoint?: Point;
        /** Set of key-value pairs describing the media in [Exchangeable Image File format](https://en.wikipedia.org/wiki/Exif). */
        exif?: Record<string, any> | null;
        /**
         * Image compression level. <br />
         *
         * Min: `30` <br />
         * Max: `100`
         */
        quality?: number | null;
        /** [Unsharp masking](https://en.wikipedia.org/wiki/Unsharp_masking) values of the image. */
        unsharpMasking?: UnsharpMasking;
    }
    interface Point {
        /** X-coordinate of the focal point. */
        x?: number;
        /** Y-coordinate of the focal point. */
        y?: number;
    }
    interface UnsharpMasking {
        /**
         * Unsharp masking amount. Controls the sharpening strength. <br />
         *
         * Min: `0` <br />
         * Max: `5`
         */
        amount?: number | null;
        /** Unsharp masking radius in pixels. Controls the sharpening width. */
        radius?: number | null;
        /**
         * Unsharp masking threshold. Controls how different neighboring pixels must be for shapening to apply. <br />
         *
         * Min: `0` <br />
         * Max: `1`
         */
        threshold?: number | null;
    }
    interface Video {
        type?: VideoType;
        /** Information for a Wix Media video or for a video from an external source (YouTube or Vimeo). */
        videoInfo?: string;
        /** Manually defined video duration in milliseconds. */
        durationInMillis?: number | null;
    }
    enum VideoType {
        UNDEFINED = "UNDEFINED",
        WIX_MEDIA = "WIX_MEDIA",
        YOUTUBE = "YOUTUBE",
        VIMEO = "VIMEO"
    }
    interface Text {
        /** Text in HTML format. */
        html?: string | null;
        /**
         * Set of key-value pairs describing the [CSS style](https://en.wikipedia.org/wiki/CSS) of the text.
         *
         * __Note:__ The object structure is customizable. See the [List Gallery Items](https://dev.wix.com/api/rest/site-content/pro-gallery/list-gallery-items) code example for supported values.
         */
        css?: Record<string, any> | null;
        /** Reserved for internal use. */
        editorHtml?: string | null;
        /** Reserved for internal use. */
        editorFontId?: string | null;
    }
    interface Tags {
        /** List of tags assigned to the media item. */
        values?: string[];
    }
    interface ListGalleriesResponse {
        /** Total number of galleries in the site. */
        totalGalleries?: number | null;
        /** List of galleries. Sorted by `_createdDate`. */
        galleries?: Gallery[];
    }
    interface ListGalleryItemsResponse {
        /** List of media items in the gallery. */
        items?: Item[];
    }
    interface DeleteGalleryResponse {
        /**
         * ID of the deleted gallery.
         * @readonly
         */
        galleryId?: string;
    }
    interface DeleteGalleryItemsResponse {
        /** Gallery that previously included the deleted media item. */
        gallery?: Gallery;
    }
    interface DeleteGalleryItemResponse {
        /**
         * ID of the deleted media item.
         * @readonly
         */
        itemId?: string;
    }
    interface PublishGalleryResponse {
        /** Published gallery. */
        gallery?: Gallery;
    }
    interface ListGalleriesOptions {
        /** Number of galleries to list. Defaults to 10. */
        itemLimit?: number | null;
        /** Number of galleries to skip in the returns. Defaults to 0. */
        offset?: number | null;
        /** Number of galleries to list. Defaults to 10. */
        limit?: number | null;
    }
    interface GetGalleryOptions {
        /** Number of media items to skip in the returns. Defaults to 0. */
        itemOffset?: number | null;
        /**
         * Maximum number of media items to return. <br />
         *
         * Min: `1` <br />
         * Max: `100` <br />
         * Default: `50`
         */
        itemLimit?: number | null;
    }
    interface ListGalleryItemsOptions {
        /** Number of media items to skip in the returns. Defaults to 0. */
        itemOffset?: number | null;
        /**
         * Maximum number of media items to return. <br />
         *
         * Min: `1` <br />
         * Max: `100` <br />
         * Default: `50`
         */
        itemLimit?: number | null;
    }
    interface GetGalleryItemIdentifiers {
        /** Gallery ID. */
        galleryId: string;
        /** Item ID. */
        itemId: string;
    }
    interface GetGalleryItemOptions {
    }
    interface CreateGalleryOptions {
        /** Gallery to create. */
        gallery?: Gallery;
        /** Gallery ID to clone from. */
        cloneFromGalleryId?: string | null;
    }
    interface UpdateGallery {
        /**
         * Gallery ID.
         * @readonly
         */
        _id?: string | null;
        /** Gallery name. */
        name?: string | null;
        /**
         * Total number of items in the gallery.
         * @readonly
         */
        totalItems?: number | null;
        /** Media items in the gallery. */
        items?: Item[];
        /**
         * Gallery sort order.
         * Determines which position a gallery is displayed on the site. <br />
         *
         * Min: `1` <br />
         */
        sortOrder?: number | null;
        /**
         * Date and time the gallery was created.
         * @readonly
         */
        _createdDate?: Date;
    }
    interface UpdateGalleryOptions {
    }
    interface DeleteGalleryOptions {
    }
    interface DeleteGalleryItemsOptions {
        /** ID of the media item to delete. */
        itemsIds?: string[];
    }
    interface CreateGalleryItemOptions {
    }
    interface UpdateGalleryItemIdentifiers {
        /** ID of the gallery containing the item to update.  */
        galleryId: string;
        /**
         * ID of the item to update.
         * @readonly
         */
        itemId?: string | null;
    }
    interface UpdateGalleryItem {
        /**
         * Item ID.
         * @readonly
         */
        _id?: string | null;
        /**
         * Item sort order.
         * Determines which position a media item is displayed in the gallery. <br />
         *
         * Min: `1` <br />
         * Default: [Epoch](https://www.epoch101.com/) timestamp in descending order (end of the gallery items list). <br />
         *
         * *Note:** If the same sort order number is assigned to more than one media item in a gallery, the first media item to which it was assigned will come first.
         */
        sortOrder?: number | null;
        /** Item title. */
        title?: string | null;
        /** Item description. */
        description?: string | null;
        /** Link from the item. You can link to Wix sites or external URLs. */
        link?: Link;
        /**
         * Item data type. One of: <br /> +"IMAGE" <br /> +"VIDEO" <br /> +"TEXT"
         * @readonly
         */
        type?: Type;
        /**
         * Date and time the item was created.
         * @readonly
         */
        _createdDate?: Date;
        /**
         * Date and time the item was last updated.
         * @readonly
         */
        _updatedDate?: Date;
        /** Item tags. */
        tags?: Tags;
        /** Details about the image. */
        image?: Image;
        /** Details about the video. */
        video?: Video;
        /** Details about the text file. */
        text?: Text;
    }
    interface UpdateGalleryItemOptions {
    }
    interface DeleteGalleryItemIdentifiers {
        /** Gallery ID. */
        galleryId: string;
        /** ID of the media item to delete. */
        itemId: string;
    }
    interface DeleteGalleryItemOptions {
    }
    function listGalleries(options?: ListGalleriesOptions): Promise<ListGalleriesResponse>;
    function getGallery(galleryId: string, options?: GetGalleryOptions): Promise<Gallery>;
    function listGalleryItems(galleryId: string, options?: ListGalleryItemsOptions): Promise<ListGalleryItemsResponse>;
    function getGalleryItem(identifiers: GetGalleryItemIdentifiers, options?: GetGalleryItemOptions): Promise<Item>;
    function createGallery(options?: CreateGalleryOptions): Promise<Gallery>;
    function updateGallery(_id: string | null, gallery: UpdateGallery, options?: UpdateGalleryOptions): Promise<Gallery>;
    function deleteGallery(galleryId: string, options?: DeleteGalleryOptions): Promise<DeleteGalleryResponse>;
    function deleteGalleryItems(galleryId: string, options?: DeleteGalleryItemsOptions): Promise<DeleteGalleryItemsResponse>;
    function createGalleryItem(galleryId: string, item: Item, options?: CreateGalleryItemOptions): Promise<Item>;
    function updateGalleryItem(identifiers: UpdateGalleryItemIdentifiers, item: UpdateGalleryItem, options?: UpdateGalleryItemOptions): Promise<Item>;
    function deleteGalleryItem(identifiers: DeleteGalleryItemIdentifiers, options?: DeleteGalleryItemOptions): Promise<DeleteGalleryItemResponse>;
    function publishGallery(galleryId: string): Promise<PublishGalleryResponse>;
    const proGalleryV2Gallery_backend_d_listGalleries: typeof listGalleries;
    const proGalleryV2Gallery_backend_d_getGallery: typeof getGallery;
    const proGalleryV2Gallery_backend_d_listGalleryItems: typeof listGalleryItems;
    const proGalleryV2Gallery_backend_d_getGalleryItem: typeof getGalleryItem;
    const proGalleryV2Gallery_backend_d_createGallery: typeof createGallery;
    const proGalleryV2Gallery_backend_d_updateGallery: typeof updateGallery;
    const proGalleryV2Gallery_backend_d_deleteGallery: typeof deleteGallery;
    const proGalleryV2Gallery_backend_d_deleteGalleryItems: typeof deleteGalleryItems;
    const proGalleryV2Gallery_backend_d_createGalleryItem: typeof createGalleryItem;
    const proGalleryV2Gallery_backend_d_updateGalleryItem: typeof updateGalleryItem;
    const proGalleryV2Gallery_backend_d_deleteGalleryItem: typeof deleteGalleryItem;
    const proGalleryV2Gallery_backend_d_publishGallery: typeof publishGallery;
    namespace proGalleryV2Gallery_backend_d {
        export { proGalleryV2Gallery_backend_d_listGalleries as listGalleries, proGalleryV2Gallery_backend_d_getGallery as getGallery, proGalleryV2Gallery_backend_d_listGalleryItems as listGalleryItems, proGalleryV2Gallery_backend_d_getGalleryItem as getGalleryItem, proGalleryV2Gallery_backend_d_createGallery as createGallery, proGalleryV2Gallery_backend_d_updateGallery as updateGallery, proGalleryV2Gallery_backend_d_deleteGallery as deleteGallery, proGalleryV2Gallery_backend_d_deleteGalleryItems as deleteGalleryItems, proGalleryV2Gallery_backend_d_createGalleryItem as createGalleryItem, proGalleryV2Gallery_backend_d_updateGalleryItem as updateGalleryItem, proGalleryV2Gallery_backend_d_deleteGalleryItem as deleteGalleryItem, proGalleryV2Gallery_backend_d_publishGallery as publishGallery, };
    }
    export { proGalleryV2Gallery_backend_d as proGallery };
}
