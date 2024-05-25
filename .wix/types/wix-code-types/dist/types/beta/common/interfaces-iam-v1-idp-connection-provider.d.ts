declare module "interfaces-iam-v1-idp-connection-provider" {
  type BusinessError<T = unknown> = {
      __tag: 'BusinessError';
      httpCode: string;
      errorDescription: string;
      applicationCode: string;
      messageSchema: string;
      data: T;
  };
  
  interface AuthorizeRequest {
      /** Config of the specific sso saved by the required_config param */
      config?: Record<string, string>;
      /** Other params coming from the user */
      params?: Record<string, string>;
      /** if need to do a redirect in the process of the SSO then will have to return to this callback url on the second part. */
      callbackUrl?: string;
      /** data that will be needed to put on the state of the request and return on the SSOSuccess response, or on any AuthorizationError thrown */
      customPayload?: Record<string, string>;
  }
  interface AuthorizeResponse {
      response?: SSOResponse;
  }
  interface SSOResponse extends SSOResponseStatusOneOf {
      success?: SSOSuccess;
      redirect?: SSORedirect;
  }
  /** @oneof */
  interface SSOResponseStatusOneOf {
      success?: SSOSuccess;
      redirect?: SSORedirect;
  }
  interface SSOSuccess {
      identityProfile?: IdpProfile;
      customPayload?: Record<string, string>;
  }
  interface IdpProfile {
      idpUserId?: string;
      email?: string | null;
      phone?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      picture?: string | null;
      /** @internal */
      targetTenantId?: string | null;
      /** @internal */
      tenantType?: TenantType;
      nickname?: string | null;
      labels?: string[];
      language?: string | null;
      address?: Address;
      company?: string | null;
      position?: string | null;
      birthdate?: string | null;
      customFields?: CustomField[];
  }
  enum TenantType {
      UNKNOWN_TENANT_TYPE = "UNKNOWN_TENANT_TYPE",
      ACCOUNT = "ACCOUNT",
      SITE = "SITE",
      ROOT = "ROOT"
  }
  /** Physical address */
  interface Address {
      /** Country code. */
      country?: string | null;
      /** Subdivision. Usually a state, region, prefecture, or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). */
      subdivision?: string | null;
      /** City name. */
      city?: string | null;
      /** Zip/postal code. */
      postalCode?: string | null;
      /** Main address line, usually street and number as free text. */
      addressLine1?: string | null;
      /** Free text providing more detailed address info. Usually contains Apt, Suite, and Floor. */
      addressLine2?: string | null;
      /**
       * A string containing the full address of this location.
       * @internal
       */
      formatted?: string | null;
  }
  interface CustomField {
      /**
       * Custom field name. The name must match one of the key properties of the objects returned by
       * [`List Extended Fields`](https://dev.wix.com/docs/rest/api-reference/contacts/extended-fields/list-extended-fields)
       * with the `custom.` prefix removed.
       */
      name?: string;
      /** Custom field value. */
      value?: CustomValue;
  }
  interface CustomValue extends CustomValueValueOneOf {
      /** String value. */
      strValue?: string;
      /** Number value. */
      numValue?: number;
      /** Date value. */
      dateValue?: Date;
      /** List value. */
      listValue?: ListValue;
      /** Map value. */
      mapValue?: MapValue;
  }
  /** @oneof */
  interface CustomValueValueOneOf {
      /** String value. */
      strValue?: string;
      /** Number value. */
      numValue?: number;
      /** Date value. */
      dateValue?: Date;
      /** List value. */
      listValue?: ListValue;
      /** Map value. */
      mapValue?: MapValue;
  }
  interface ListValue {
      /** Custom value. */
      value?: CustomValue[];
  }
  interface MapValue {
      /** Mapped custom value. */
      value?: Record<string, CustomValue>;
  }
  interface SSORedirect {
      redirectUrl?: string;
  }
  interface AuthorizationErrorDetails {
      code?: string;
      customPayload?: Record<string, string>;
  }
  interface AuthorizeWithTokenParamsRequest {
      /** Config of the specific sso saved by the required_config param */
      config?: Record<string, string>;
      /** Other params coming from the user */
      tokenParams?: Record<string, string>;
  }
  interface AuthorizeWithTokenParamsResponse {
      idpProfile?: IdpProfile;
  }
  interface AuthorizeWithTokenParamsErrorDetails {
      code?: string;
  }
  interface IDPConnectionConfig {
      /** Information required from admin when installing the SPI */
      requiredConfig?: Record<string, string>;
      /** Whether the SPI supports the optional AuthorizeWithTokenParams method */
      authorizeTokensImplemented?: boolean;
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
  interface AuthorizeOptions {
      /** Config of the specific sso saved by the required_config param */
      config?: Record<string, string>;
      /** Other params coming from the user */
      params?: Record<string, string>;
      /** if need to do a redirect in the process of the SSO then will have to return to this callback url on the second part. */
      callbackUrl?: string;
      /** data that will be needed to put on the state of the request and return on the SSOSuccess response, or on any AuthorizationError thrown */
      customPayload?: Record<string, string>;
  }
  interface AuthorizeWithTokenParamsOptions {
      /** Config of the specific sso saved by the required_config param */
      config?: Record<string, string>;
      /** Other params coming from the user */
      tokenParams?: Record<string, string>;
  }
  
  function authorizationError(data: AuthorizationErrorDetails): BusinessError<AuthorizationErrorDetails>;
  
  const authorizeSpiErrors_d_authorizationError: typeof authorizationError;
  namespace authorizeSpiErrors_d {
    export {
      authorizeSpiErrors_d_authorizationError as authorizationError,
    };
  }
  
  function authorizeWithTokenParamsError(data: AuthorizeWithTokenParamsErrorDetails): BusinessError<AuthorizeWithTokenParamsErrorDetails>;
  
  const authorizeWithTokenParamsSpiErrors_d_authorizeWithTokenParamsError: typeof authorizeWithTokenParamsError;
  namespace authorizeWithTokenParamsSpiErrors_d {
    export {
      authorizeWithTokenParamsSpiErrors_d_authorizeWithTokenParamsError as authorizeWithTokenParamsError,
    };
  }
  
  namespace spiErrorHelpers_d {
    export {
      authorizeSpiErrors_d as authorize,
      authorizeWithTokenParamsSpiErrors_d as authorizeWithTokenParams,
    };
  }
  
  export { Address, AuthorizationErrorDetails, AuthorizeOptions, AuthorizeRequest, AuthorizeResponse, AuthorizeWithTokenParamsErrorDetails, AuthorizeWithTokenParamsOptions, AuthorizeWithTokenParamsRequest, AuthorizeWithTokenParamsResponse, BusinessError, Context, CustomField, CustomValue, CustomValueValueOneOf, IDPConnectionConfig, IdentificationData, IdentificationDataIdOneOf, IdentityType, IdpProfile, ListValue, MapValue, SSORedirect, SSOResponse, SSOResponseStatusOneOf, SSOSuccess, TenantType, spiErrorHelpers_d as errorHelpers };
}
