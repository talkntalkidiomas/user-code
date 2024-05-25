declare module "wix-multilingual-localization-public" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /** content with published data only */
  interface LocalizedPublishedContent {
      /** UUID identifier for content. */
      contentId?: string;
      /** compound key identifier for content. */
      contentKey?: LocalizedContentKey;
      /** holds localized published fields for every language this entity has content */
      publishedFieldsPerLanguage?: LanguagePublishedFields[];
  }
  interface LocalizedContentKey {
      /** Schema unique key identifier */
      schemaKey?: SchemaKey;
      /** Unique identifier that represents a specific entity in the app */
      entityId?: string;
  }
  interface SchemaKey {
      /** ID of app that created the schema. */
      appId?: string;
      /** Unique name defined by the creator app, used to distinguish between different entities in the the app domain. */
      entityType?: string;
      /** Scope schema is defined in (Global/Site) */
      scope?: SchemaScope;
  }
  enum SchemaScope {
      /** Global schema, relevant to all sites */
      GLOBAL = "GLOBAL",
      /** Site schema, relevant to specific site only */
      SITE = "SITE"
  }
  /** Associate language with the published fields localized in that language */
  interface LanguagePublishedFields {
      /** content IETF BCP 47 language tag */
      languageTag?: string;
      /** localized content list of published fields. */
      languagePublishedFields?: LocalizedPublishedContentField[];
  }
  /** contains only information relevant to UoU */
  interface LocalizedPublishedContentField extends LocalizedPublishedContentFieldValueOneOf {
      /** Field actual localized content as simple text type */
      textValue?: string;
      /** Field actual localized content as rich content editor type */
      wixRichContentEditorValue?: string;
      /** Field actual localized content as media type (image, video or document) */
      mediaValue?: MediaItem;
      /** Field unique identifier. This id has to fit to a schema field id. */
      _id?: string;
      /** In case field is reachable via sequence/s, this array represents all the sequences names in the path, and their corresponding item id. */
      sequencePath?: FieldSequence[];
  }
  /** @oneof */
  interface LocalizedPublishedContentFieldValueOneOf {
      /** Field actual localized content as simple text type */
      textValue?: string;
      /** Field actual localized content as rich content editor type */
      wixRichContentEditorValue?: string;
      /** Field actual localized content as media type (image, video or document) */
      mediaValue?: MediaItem;
  }
  interface MediaItem extends MediaItemMediaOneOf {
      /** Image media item */
      image?: string;
      /** Video media item */
      video?: string;
      /** Document media item */
      document?: string;
  }
  /** @oneof */
  interface MediaItemMediaOneOf {
      /** Image media item */
      image?: string;
      /** Video media item */
      video?: string;
      /** Document media item */
      document?: string;
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
  interface FieldSequence {
      /** Name of sequence */
      seqName?: string;
      /** Id of relevant item in the sequence */
      itemId?: string;
      /** Optional field - in case set sequences will be ordered by priority index (best effort) */
      priorityIndex?: number | null;
  }
  interface LocalizedPublishedLanguageContentChanged {
      /** The action that changed the content */
      action?: LocalizationPublicAction;
      /** token to identify the flow this event is part of and the total number of event in this flow. */
      flowToken?: string | null;
  }
  interface LocalizationPublicActionLocalizedPublishedContent {
      /** UUID identifier for content. */
      contentId?: string;
      /** compound key identifier for content. */
      contentKey?: LocalizedContentKey;
      /** content IETF BCP 47 language tag */
      languageTag?: string;
      /** localized content list of published fields. */
      languagePublishedFields?: LocalizedPublishedContentField[];
      /** Optional field that will group in the UI contents with the same group name */
      groupByName?: string | null;
  }
  interface LocalizationPublicActionCreateOrUpdateAction {
      /** The new Localized published state */
      localizedPublishedContent?: LocalizationPublicActionLocalizedPublishedContent;
  }
  interface LocalizationPublicActionDeleteAction {
      /** compound key identifier for removed content. */
      contentKey?: LocalizedContentKey;
      /** content IETF BCP 47 language tag */
      languageTag?: string;
  }
  interface LocalizationPublicAction extends LocalizationPublicActionActionOneOf {
      /** Content has changes in its fields */
      createOrUpdateAction?: LocalizationPublicActionCreateOrUpdateAction;
      /** Content deleted */
      deleteAction?: LocalizationPublicActionDeleteAction;
  }
  /** @oneof */
  interface LocalizationPublicActionActionOneOf {
      /** Content has changes in its fields */
      createOrUpdateAction?: LocalizationPublicActionCreateOrUpdateAction;
      /** Content deleted */
      deleteAction?: LocalizationPublicActionDeleteAction;
  }
  interface GetPublishedContentsRequest {
      /** Selected content ids for fetching published fields */
      contentIds?: string[];
      /** Optional list of language tags. Will return partial contents containing only fields that are localized in languages from given list or empty contents if there are no such fields */
      languageMask?: string[];
  }
  interface GetPublishedContentsResponse {
      /** List of site localized published contents */
      localizedPublishedContents?: LocalizedPublishedContent[];
  }
  interface GetPublishedContentsByKeyRequest {
      /** Selected content keys for fetching published fields */
      contentKeys?: LocalizedContentKey[];
      /** Optional list of language tags. Will return partial contents containing only fields that are localized in languages from given list or empty contents if there are no such fields */
      languageMask?: string[];
  }
  /**
   * Get published contents by id
   * @internal
   * @documentationMaturity preview
   */
  function getPublishedContents(options?: GetPublishedContentsOptions): Promise<GetPublishedContentsResponse>;
  interface GetPublishedContentsOptions {
      /** Selected content ids for fetching published fields */
      contentIds?: string[];
      /** Optional list of language tags. Will return partial contents containing only fields that are localized in languages from given list or empty contents if there are no such fields */
      languageMask?: string[];
  }
  /**
   * Get published contents by key
   * @public
   * @documentationMaturity preview
   * @requiredField options.contentKeys.schemaKey
   */
  function getPublishedContentsByKey(options?: GetPublishedContentsByKeyOptions): Promise<GetPublishedContentsResponse>;
  interface GetPublishedContentsByKeyOptions {
      /** Selected content keys for fetching published fields */
      contentKeys?: LocalizedContentKey[];
      /** Optional list of language tags. Will return partial contents containing only fields that are localized in languages from given list or empty contents if there are no such fields */
      languageMask?: string[];
  }
  
  const multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d___debug: typeof __debug;
  type multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_LocalizedPublishedContent = LocalizedPublishedContent;
  type multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_LocalizedContentKey = LocalizedContentKey;
  type multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_SchemaKey = SchemaKey;
  type multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_SchemaScope = SchemaScope;
  const multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_SchemaScope: typeof SchemaScope;
  type multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_LanguagePublishedFields = LanguagePublishedFields;
  type multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_LocalizedPublishedContentField = LocalizedPublishedContentField;
  type multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_LocalizedPublishedContentFieldValueOneOf = LocalizedPublishedContentFieldValueOneOf;
  type multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_MediaItem = MediaItem;
  type multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_MediaItemMediaOneOf = MediaItemMediaOneOf;
  type multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_VideoResolution = VideoResolution;
  type multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_FieldSequence = FieldSequence;
  type multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_LocalizedPublishedLanguageContentChanged = LocalizedPublishedLanguageContentChanged;
  type multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_LocalizationPublicActionLocalizedPublishedContent = LocalizationPublicActionLocalizedPublishedContent;
  type multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_LocalizationPublicActionCreateOrUpdateAction = LocalizationPublicActionCreateOrUpdateAction;
  type multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_LocalizationPublicActionDeleteAction = LocalizationPublicActionDeleteAction;
  type multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_LocalizationPublicAction = LocalizationPublicAction;
  type multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_LocalizationPublicActionActionOneOf = LocalizationPublicActionActionOneOf;
  type multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_GetPublishedContentsRequest = GetPublishedContentsRequest;
  type multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_GetPublishedContentsResponse = GetPublishedContentsResponse;
  type multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_GetPublishedContentsByKeyRequest = GetPublishedContentsByKeyRequest;
  const multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_getPublishedContents: typeof getPublishedContents;
  type multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_GetPublishedContentsOptions = GetPublishedContentsOptions;
  const multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_getPublishedContentsByKey: typeof getPublishedContentsByKey;
  type multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_GetPublishedContentsByKeyOptions = GetPublishedContentsByKeyOptions;
  namespace multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d {
    export {
      multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d___debug as __debug,
      multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_LocalizedPublishedContent as LocalizedPublishedContent,
      multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_LocalizedContentKey as LocalizedContentKey,
      multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_SchemaKey as SchemaKey,
      multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_SchemaScope as SchemaScope,
      multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_LanguagePublishedFields as LanguagePublishedFields,
      multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_LocalizedPublishedContentField as LocalizedPublishedContentField,
      multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_LocalizedPublishedContentFieldValueOneOf as LocalizedPublishedContentFieldValueOneOf,
      multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_MediaItem as MediaItem,
      multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_MediaItemMediaOneOf as MediaItemMediaOneOf,
      multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_VideoResolution as VideoResolution,
      multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_FieldSequence as FieldSequence,
      multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_LocalizedPublishedLanguageContentChanged as LocalizedPublishedLanguageContentChanged,
      multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_LocalizationPublicActionLocalizedPublishedContent as LocalizationPublicActionLocalizedPublishedContent,
      multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_LocalizationPublicActionCreateOrUpdateAction as LocalizationPublicActionCreateOrUpdateAction,
      multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_LocalizationPublicActionDeleteAction as LocalizationPublicActionDeleteAction,
      multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_LocalizationPublicAction as LocalizationPublicAction,
      multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_LocalizationPublicActionActionOneOf as LocalizationPublicActionActionOneOf,
      multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_GetPublishedContentsRequest as GetPublishedContentsRequest,
      multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_GetPublishedContentsResponse as GetPublishedContentsResponse,
      multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_GetPublishedContentsByKeyRequest as GetPublishedContentsByKeyRequest,
      multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_getPublishedContents as getPublishedContents,
      multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_GetPublishedContentsOptions as GetPublishedContentsOptions,
      multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_getPublishedContentsByKey as getPublishedContentsByKey,
      multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d_GetPublishedContentsByKeyOptions as GetPublishedContentsByKeyOptions,
    };
  }
  
  export { multilingualLocalizationPublicV1LocalizedPublishedContent_universal_d as localizationPublic };
}
