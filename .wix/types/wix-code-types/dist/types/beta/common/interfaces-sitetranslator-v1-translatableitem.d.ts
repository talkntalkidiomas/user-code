declare module "interfaces-sitetranslator-v1-translatableitem" {
  type BusinessError<T = unknown> = {
      __tag: 'BusinessError';
      httpCode: string;
      errorDescription: string;
      applicationCode: string;
      messageSchema: string;
      data: T;
  };
  
  interface TranslatableItem {
      /** Unique specifier of the item in the implementer */
      _id?: string;
      /** Value of the translatable item */
      value?: string;
      /** Format of the text sent to translation */
      format?: TextFormat;
  }
  enum TextFormat {
      UNKNOWN = "UNKNOWN",
      TEXT = "TEXT",
      RICH_CONTENT_EDITOR = "RICH_CONTENT_EDITOR",
      HTML = "HTML"
  }
  interface CountNumberOfWordsRequest {
      /** the locale on which to count number of words */
      sourceLanguage: Locale;
      /** the locale will be translate to (optional) */
      targetLanguage?: Locale;
  }
  interface Locale {
      /** A two-character identifier of the language */
      language?: string;
      /** Flag of the language. Only significant for Chinese dialects */
      flag?: Flag;
  }
  enum Flag {
      UNDEFINED_FLAG_CODE = "UNDEFINED_FLAG_CODE",
      AFG = "AFG",
      AGO = "AGO",
      AIA = "AIA",
      ALA = "ALA",
      ALB = "ALB",
      AND = "AND",
      ARE = "ARE",
      ARG = "ARG",
      ARM = "ARM",
      ASM = "ASM",
      ATF = "ATF",
      ATG = "ATG",
      AUS = "AUS",
      AUT = "AUT",
      AZE = "AZE",
      BDI = "BDI",
      BEL = "BEL",
      BEN = "BEN",
      BES = "BES",
      BFA = "BFA",
      BGD = "BGD",
      BGR = "BGR",
      BHR = "BHR",
      BHS = "BHS",
      BIH = "BIH",
      BLM = "BLM",
      BLR = "BLR",
      BLZ = "BLZ",
      BMU = "BMU",
      BOL = "BOL",
      BRA = "BRA",
      BRB = "BRB",
      BRN = "BRN",
      BRT = "BRT",
      BTN = "BTN",
      BWA = "BWA",
      CAF = "CAF",
      CAN = "CAN",
      CAT = "CAT",
      CHE = "CHE",
      CHL = "CHL",
      CHN = "CHN",
      CIV = "CIV",
      CMR = "CMR",
      COD = "COD",
      COG = "COG",
      COL = "COL",
      COM = "COM",
      COR = "COR",
      CPV = "CPV",
      CRI = "CRI",
      CUB = "CUB",
      CUW = "CUW",
      CYM = "CYM",
      CZE = "CZE",
      DEU = "DEU",
      DJI = "DJI",
      DMA = "DMA",
      DNK = "DNK",
      DOM = "DOM",
      DZA = "DZA",
      ECU = "ECU",
      EGY = "EGY",
      ERI = "ERI",
      ESP = "ESP",
      EST = "EST",
      ETH = "ETH",
      EUR = "EUR",
      EUS = "EUS",
      FIN = "FIN",
      FJI = "FJI",
      FLK = "FLK",
      FRA = "FRA",
      FRO = "FRO",
      FSM = "FSM",
      GAB = "GAB",
      GBR = "GBR",
      GEO = "GEO",
      GGY = "GGY",
      GHA = "GHA",
      GIB = "GIB",
      GIN = "GIN",
      GLG = "GLG",
      GLO = "GLO",
      GLP = "GLP",
      GMB = "GMB",
      GNB = "GNB",
      GNQ = "GNQ",
      GRC = "GRC",
      GRD = "GRD",
      GRL = "GRL",
      GTM = "GTM",
      GUM = "GUM",
      GUY = "GUY",
      HKG = "HKG",
      HND = "HND",
      HRV = "HRV",
      HTI = "HTI",
      HUN = "HUN",
      IDN = "IDN",
      IMN = "IMN",
      IND = "IND",
      IOT = "IOT",
      IRL = "IRL",
      IRN = "IRN",
      IRQ = "IRQ",
      ISL = "ISL",
      ISR = "ISR",
      ITA = "ITA",
      JAM = "JAM",
      JEY = "JEY",
      JOR = "JOR",
      JPN = "JPN",
      KAZ = "KAZ",
      KEN = "KEN",
      KGZ = "KGZ",
      KHM = "KHM",
      KIR = "KIR",
      KNA = "KNA",
      KOR = "KOR",
      KUR = "KUR",
      KWT = "KWT",
      LAO = "LAO",
      LBN = "LBN",
      LBR = "LBR",
      LBY = "LBY",
      LCA = "LCA",
      LIE = "LIE",
      LKA = "LKA",
      LSO = "LSO",
      LTU = "LTU",
      LUX = "LUX",
      LVA = "LVA",
      MAC = "MAC",
      MAF = "MAF",
      MAR = "MAR",
      MCO = "MCO",
      MDA = "MDA",
      MDG = "MDG",
      MDV = "MDV",
      MEX = "MEX",
      MHL = "MHL",
      MKD = "MKD",
      MLI = "MLI",
      MLT = "MLT",
      MMR = "MMR",
      MNE = "MNE",
      MNG = "MNG",
      MNP = "MNP",
      MOZ = "MOZ",
      MRT = "MRT",
      MSR = "MSR",
      MTQ = "MTQ",
      MWI = "MWI",
      MYS = "MYS",
      MYT = "MYT",
      NAM = "NAM",
      NCL = "NCL",
      NER = "NER",
      NFK = "NFK",
      NGA = "NGA",
      NIC = "NIC",
      NIU = "NIU",
      NLD = "NLD",
      NOR = "NOR",
      NPL = "NPL",
      NRU = "NRU",
      NZL = "NZL",
      OMN = "OMN",
      PAK = "PAK",
      PAN = "PAN",
      PCN = "PCN",
      PER = "PER",
      PHL = "PHL",
      PLW = "PLW",
      PNG = "PNG",
      POL = "POL",
      PRI = "PRI",
      PRK = "PRK",
      PRT = "PRT",
      PRY = "PRY",
      PSE = "PSE",
      PYF = "PYF",
      QAT = "QAT",
      REU = "REU",
      ROU = "ROU",
      RUS = "RUS",
      RWA = "RWA",
      SAU = "SAU",
      SDN = "SDN",
      SEN = "SEN",
      SGP = "SGP",
      SGS = "SGS",
      SHN = "SHN",
      SJM = "SJM",
      SLB = "SLB",
      SLE = "SLE",
      SLV = "SLV",
      SMR = "SMR",
      SOM = "SOM",
      SPM = "SPM",
      SRB = "SRB",
      SSD = "SSD",
      STP = "STP",
      SUR = "SUR",
      SVK = "SVK",
      SVN = "SVN",
      SWE = "SWE",
      SWZ = "SWZ",
      SXM = "SXM",
      SYC = "SYC",
      SYR = "SYR",
      TCA = "TCA",
      TCD = "TCD",
      TGO = "TGO",
      THA = "THA",
      TJK = "TJK",
      TKL = "TKL",
      TKM = "TKM",
      TLS = "TLS",
      TON = "TON",
      TTO = "TTO",
      TUN = "TUN",
      TUR = "TUR",
      TUV = "TUV",
      TWN = "TWN",
      TZA = "TZA",
      UGA = "UGA",
      UKR = "UKR",
      URY = "URY",
      USA = "USA",
      UZB = "UZB",
      VAT = "VAT",
      VCT = "VCT",
      VEN = "VEN",
      VGB = "VGB",
      VIR = "VIR",
      VLC = "VLC",
      VNM = "VNM",
      VUT = "VUT",
      WLF = "WLF",
      WLS = "WLS",
      YEM = "YEM",
      ZAF = "ZAF",
      ZMB = "ZMB",
      ZWE = "ZWE"
  }
  interface CountNumberOfWordsResponse {
      /** count of all source_language words */
      allNumberOfWords?: number;
      /** count of all source_language items */
      allNumberOfItems?: number;
      /** count of translated to target_language words */
      translatedNumberOfWords?: number;
      /** count of translated to target_language items */
      translatedNumberOfItems?: number;
      /** translatable properties distributed be application */
      properties?: ApplicationProperties[];
  }
  interface ApplicationProperties {
      /** Unique identifier of application ID */
      appId?: string;
      /** count of all source_language words of a specific application */
      allNumberOfWords?: number;
      /** count of all source_language items of a specific application */
      allNumberOfItems?: number;
      /** count of translated to target_language words of a specific application */
      translatedNumberOfWords?: number;
      /** count of translated to target_language items of a specific application */
      translatedNumberOfItems?: number;
  }
  interface ReadContentRequest {
      /** The locale of the requested items */
      sourceLanguage: Locale;
      /** the locale will be translate to (optional) */
      targetLanguage?: Locale;
      /** Paging options. */
      paging?: Paging;
      /** Specific app ids to get their data; */
      include?: IncludedAppIds;
  }
  interface Paging {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface IncludedAppIds {
      appIds?: string[];
  }
  interface ReadContentResponse {
      /** items to be translated */
      items?: TranslatableItem[];
  }
  interface UpdateContentRequest {
      /** The locale to update items */
      language: Locale;
      /** items to be updated */
      items?: TranslatableItem[];
  }
  interface UpdateContentResponse {
  }
  interface ContentProviderConfig {
      /** a human readable name of the provider */
      providerName?: string;
      /** the maximum items allowed to read and update in a single request */
      maximumReadingBulkSize?: number | null;
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
  interface CountNumberOfWordsOptions {
      /** the locale on which to count number of words */
      sourceLanguage: Locale;
      /** the locale will be translate to (optional) */
      targetLanguage?: Locale;
  }
  interface ReadContentOptions {
      /** The locale of the requested items */
      sourceLanguage: Locale;
      /** the locale will be translate to (optional) */
      targetLanguage?: Locale;
      /** Paging options. */
      paging?: Paging;
      /** Specific app ids to get their data; */
      include?: IncludedAppIds;
  }
  interface UpdateContentOptions {
      /** The locale to update items */
      language: Locale;
      /** items to be updated */
      items?: TranslatableItem[];
  }
  
  export { ApplicationProperties, BusinessError, ContentProviderConfig, Context, CountNumberOfWordsOptions, CountNumberOfWordsRequest, CountNumberOfWordsResponse, Flag, IdentificationData, IdentificationDataIdOneOf, IdentityType, IncludedAppIds, Locale, Paging, ReadContentOptions, ReadContentRequest, ReadContentResponse, TextFormat, TranslatableItem, UpdateContentOptions, UpdateContentRequest, UpdateContentResponse };
}
