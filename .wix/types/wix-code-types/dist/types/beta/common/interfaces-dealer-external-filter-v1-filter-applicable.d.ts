declare module "interfaces-dealer-external-filter-v1-filter-applicable" {
  type BusinessError<T = unknown> = {
      __tag: 'BusinessError';
      httpCode: string;
      errorDescription: string;
      applicationCode: string;
      messageSchema: string;
      data: T;
  };
  
  interface ApplyFilterRequest {
      /** specific targeting filter criteria */
      criteria?: ExternalFilterCriteria;
  }
  /** Filter for targeting based on external service */
  interface ExternalFilterCriteria {
      /** Comparator to apply to value (i.e. if value EQUALS, LESS, GREATER than expected value etc.) */
      conditionType?: Enum;
      /**
       * Expected value to be found
       * Please read https://github.com/protocolbuffers/protobuf/blob/main/src/google/protobuf/struct.proto#L62
       */
      expectedValue?: any;
      /** Extra parameters */
      additionalParams?: Record<string, any> | null;
      _id?: string | null;
  }
  enum Enum {
      UNKNOWN = "UNKNOWN",
      EQUAL = "EQUAL",
      GREATER_THAN = "GREATER_THAN",
      SMALLER_THAN = "SMALLER_THAN",
      CONTAINS_ALL = "CONTAINS_ALL",
      CONTAINS_SOME = "CONTAINS_SOME",
      NOT_CONTAINS_SOME = "NOT_CONTAINS_SOME",
      NOT_CONTAINS_ALL = "NOT_CONTAINS_ALL",
      BE_NOTHING = "BE_NOTHING",
      EXISTS = "EXISTS",
      MORE_THAN_DAYS = "MORE_THAN_DAYS",
      WITHIN_DAYS = "WITHIN_DAYS",
      NOT_EQUAL = "NOT_EQUAL"
  }
  interface ApplyFilterResponse {
      /** is filter applicable/eligible/valid to current criteria */
      isApplicable?: boolean;
  }
  interface ApplyFilterListRequest {
      /** specific targeting filter criteria */
      criteriaList?: ExternalFilterCriteria[];
  }
  interface ApplyFilterListResponse {
      /** list of filter results */
      applyFiltersResult?: ApplyFilterResult[];
  }
  interface ApplyFilterResult {
      /** the id of the filter */
      _id?: string;
      /** is filter applicable/eligible/valid to current criteria */
      isApplicable?: boolean;
  }
  interface ExternalFilterProviderConfig {
      /** feature toggle initialized with default value = false. should be true if implemented by spi provider */
      toggleExtendApplyFilterList?: boolean;
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
  interface ApplyFilterOptions {
      /** specific targeting filter criteria */
      criteria?: ExternalFilterCriteria;
  }
  interface ApplyFilterListOptions {
      /** specific targeting filter criteria */
      criteriaList?: ExternalFilterCriteria[];
  }
  
  export { ApplyFilterListOptions, ApplyFilterListRequest, ApplyFilterListResponse, ApplyFilterOptions, ApplyFilterRequest, ApplyFilterResponse, ApplyFilterResult, BusinessError, Context, Enum, ExternalFilterCriteria, ExternalFilterProviderConfig, IdentificationData, IdentificationDataIdOneOf, IdentityType };
}
