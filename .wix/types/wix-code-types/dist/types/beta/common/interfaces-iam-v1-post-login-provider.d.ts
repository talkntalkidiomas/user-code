declare module "interfaces-iam-v1-post-login-provider" {
  type BusinessError<T = unknown> = {
      __tag: 'BusinessError';
      httpCode: string;
      errorDescription: string;
      applicationCode: string;
      messageSchema: string;
      data: T;
  };
  
  interface OnPostLoginRequest {
      /** The identity that performed the login */
      identity?: Identity;
  }
  interface Identity {
      /** Identity ID */
      _id?: string | null;
      /** Identifiers */
      identifiers?: Identifier[];
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes.
       * For an update operation to succeed, you MUST pass the latest revision.
       */
      revision?: string | null;
      /**
       * The time this identity was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * The time this identity was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** The identity configured connections to authenticate with. */
      connections?: Connection[];
      /** Identity profile. */
      identityProfile?: IdentityProfile;
      /**
       * Additional information about the identity that can impact user access.
       * This data cannot be set.
       */
      metadata?: Metadata;
      /** Identity email address. */
      email?: Email;
      /** Identity's current status. */
      status?: StatusV2;
  }
  interface Identifier extends IdentifierValueOneOf {
      email?: string;
      userName?: string;
  }
  /** @oneof */
  interface IdentifierValueOneOf {
      email?: string;
      userName?: string;
  }
  interface Connection extends ConnectionTypeOneOf {
      /** IDP connection. */
      idpConnection?: IdpConnection;
      /** Authenticator connection. */
      authenticatorConnection?: AuthenticatorConnection;
  }
  /** @oneof */
  interface ConnectionTypeOneOf {
      /** IDP connection. */
      idpConnection?: IdpConnection;
      /** Authenticator connection. */
      authenticatorConnection?: AuthenticatorConnection;
  }
  interface IdpConnection {
      /** IDP connection ID. */
      idpConnectionId?: string;
      /** IDP user ID. */
      idpUserId?: string;
  }
  interface AuthenticatorConnection {
      /** Authenticator connection ID. */
      authenticatorConnectionId?: string;
      /** Whether re-enrollment is required. */
      reEnrollmentRequired?: boolean;
  }
  interface IdentityProfile {
      /** Profile first name. */
      firstName?: string | null;
      /** Profile last name. */
      lastName?: string | null;
      /** Profile nickname. */
      nickname?: string | null;
      /** Profile picture URL. */
      picture?: string | null;
      /** Deprecated. Use `secondaryEmails` instead. */
      emails?: string[];
      /** Deprecated. Use `phonesV2` instead. */
      phones?: string[];
      /** List of profile labels. */
      labels?: string[];
      /** Profile language. */
      language?: string | null;
      /** Profile privacy status. */
      privacyStatus?: PrivacyStatus;
      /**
       * Any number of custom fields. [Custom fields](https://support.wix.com/en/article/adding-custom-fields-to-contacts)
       * are used to store additional information about your site or app's contacts.
       */
      customFields?: CustomField[];
      /** List of profile email addresses. */
      secondaryEmails?: SecondaryEmail[];
      /** List of profile phone numbers. */
      phonesV2?: Phone[];
      /** List of profile physical addresses. */
      addresses?: AddressWrapper[];
      /** Company name. */
      company?: string | null;
      /** Position within company. */
      position?: string | null;
      /** Profile birthdate. */
      birthdate?: string | null;
  }
  enum PrivacyStatus {
      UNDEFINED = "UNDEFINED",
      PUBLIC = "PUBLIC",
      PRIVATE = "PRIVATE"
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
  interface SecondaryEmail {
      /** Email address. */
      email?: string;
      /** Email tag. */
      tag?: EmailTag;
  }
  enum EmailTag {
      UNTAGGED = "UNTAGGED",
      MAIN = "MAIN",
      HOME = "HOME",
      WORK = "WORK"
  }
  interface Phone {
      /** Phone country code. */
      countryCode?: string | null;
      /** Phone number. */
      phone?: string;
      /** Phone tag. */
      tag?: PhoneTag;
  }
  enum PhoneTag {
      UNTAGGED = "UNTAGGED",
      MAIN = "MAIN",
      HOME = "HOME",
      MOBILE = "MOBILE",
      WORK = "WORK",
      FAX = "FAX"
  }
  interface AddressWrapper {
      /** Address. */
      address?: Address;
      /** Address tag. */
      tag?: AddressTag;
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
  enum AddressTag {
      UNTAGGED = "UNTAGGED",
      HOME = "HOME",
      WORK = "WORK",
      BILLING = "BILLING",
      SHIPPING = "SHIPPING"
  }
  interface Metadata {
      /**
       * represents general tags such as "isOwner", "isContributor"
       * @readonly
       */
      tags?: string[];
  }
  interface Email {
      address?: string;
      isVerified?: boolean;
  }
  interface StatusV2 {
      name?: StatusName;
      reasons?: Reason[];
  }
  enum StatusName {
      UNKNOWN_STATUS = "UNKNOWN_STATUS",
      PENDING = "PENDING",
      ACTIVE = "ACTIVE",
      DELETED = "DELETED",
      BLOCKED = "BLOCKED",
      OFFLINE = "OFFLINE"
  }
  enum Reason {
      UNKNOWN_REASON = "UNKNOWN_REASON",
      PENDING_ADMIN_APPROVAL_REQUIRED = "PENDING_ADMIN_APPROVAL_REQUIRED",
      PENDING_EMAIL_VERIFICATION_REQUIRED = "PENDING_EMAIL_VERIFICATION_REQUIRED"
  }
  interface OnPostLoginResponse {
      /** Enrichment fields the implementor can add to the response of login */
      enrichedFields?: Record<string, CustomValue>;
  }
  interface PostLoginConfig {
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
  interface OnPostLoginOptions {
      /** The identity that performed the login */
      identity?: Identity;
  }
  
  export { Address, AddressTag, AddressWrapper, AuthenticatorConnection, BusinessError, Connection, ConnectionTypeOneOf, Context, CustomField, CustomValue, CustomValueValueOneOf, Email, EmailTag, IdentificationData, IdentificationDataIdOneOf, Identifier, IdentifierValueOneOf, Identity, IdentityProfile, IdentityType, IdpConnection, ListValue, MapValue, Metadata, OnPostLoginOptions, OnPostLoginRequest, OnPostLoginResponse, Phone, PhoneTag, PostLoginConfig, PrivacyStatus, Reason, SecondaryEmail, StatusName, StatusV2 };
}
