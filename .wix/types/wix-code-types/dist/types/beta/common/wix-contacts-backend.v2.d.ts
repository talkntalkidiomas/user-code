declare module "wix-contacts-backend.v2" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface Contact {
      /**
       * Contact ID.
       * @readonly
       */
      _id?: string;
      /**
       * Revision number, which increments by 1 each time the contact is updated.
       * To prevent conflicting changes,
       * the existing `revision` must be used when updating a contact.
       * @readonly
       */
      revision?: number;
      /**
       * Details about the contact's source.
       * @readonly
       */
      source?: ContactSource;
      /**
       * Date and time the contact was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the contact was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Details about the contact's last action in the site.
       * @readonly
       */
      lastActivity?: ContactActivity;
      /**
       * Contact's primary phone and email.
       *
       * This property reflects the email address in `contactInfo.emails` where `primary` is `true`.
       * @readonly
       */
      primaryInfo?: PrimaryContactInfo;
      /**
       * Contact's profile picture.
       * This can contain an image URL and a Wix Media image ID.
       *
       * > **Deprecation Notice:**
       * > This property has been replaced with
       * > `info.picture`
       * > and will be removed on March 31, 2022. If your app uses this property,
       * > we recommend updating your code as soon as possible.
       * @readonly
       */
      picture?: string;
      /** Contact's details. */
      info?: ContactInfo;
      /**
       * Contact's segment IDs
       * @internal
       * @readonly
       */
      segments?: SegmentsWrapper;
  }
  interface ContactSource {
      /**
       * Some possible values:
       *
       * `"OTHER"`, `"ADMIN"`, `"WIX_APP"`, `"IMPORT"`, `"THIRD_PARTY"`,
       * `"WIX_BOOKINGS"`, `"WIX_CHAT"`, `"WIX_EMAIL_MARKETING"`, `"WIX_EVENTS"`,
       * `"WIX_FORMS"`, `"WIX_GROUPS"`, `"WIX_HOTELS"`, `"WIX_MARKET_PLACE"`,
       * `"WIX_MUSIC"`, `"WIX_RESTAURANTS"`, `"WIX_SITE_MEMBERS"`, `"WIX_STORES"`.
       * @readonly
       */
      sourceType?: ContactSourceType;
      /**
       * App ID, if the contact was created by a Wix app.
       *
       * > **Deprecation Notice:**
       * > This property has been replaced with
       * > `appId`
       * > and will be removed on March 31, 2022. If your app uses this property,
       * > we recommend updating your code as soon as possible.
       * @readonly
       */
      wixAppId?: string | null;
      /**
       * App ID, if the contact was created by an app.
       * @readonly
       */
      appId?: string | null;
  }
  enum ContactSourceType {
      OTHER = "OTHER",
      ADMIN = "ADMIN",
      WIX_APP = "WIX_APP",
      IMPORT = "IMPORT",
      THIRD_PARTY = "THIRD_PARTY",
      WIX_BOOKINGS = "WIX_BOOKINGS",
      WIX_CHAT = "WIX_CHAT",
      WIX_EMAIL_MARKETING = "WIX_EMAIL_MARKETING",
      WIX_EVENTS = "WIX_EVENTS",
      WIX_FORMS = "WIX_FORMS",
      WIX_GROUPS = "WIX_GROUPS",
      WIX_HOTELS = "WIX_HOTELS",
      WIX_MARKET_PLACE = "WIX_MARKET_PLACE",
      WIX_MUSIC = "WIX_MUSIC",
      WIX_RESTAURANTS = "WIX_RESTAURANTS",
      WIX_SITE_MEMBERS = "WIX_SITE_MEMBERS",
      WIX_STORES = "WIX_STORES",
      WIX_CODE = "WIX_CODE"
  }
  interface ContactActivity {
      /** Date and time of the last action. */
      activityDate?: Date;
      /**
       * Contact's last action in the site.
       *
       * Some possible values:
       * `"GENERAL"`, `"CONTACT_CREATED"`, `"MEMBER_LOGIN"`, `"MEMBER_REGISTER"`,
       * `"MEMBER_STATUS_CHANGED"`, `"FORM_SUBMITTED"`, `"INBOX_FORM_SUBMITTED"`,
       * `"INBOX_PAYMENT_REQUEST_PAID"`, `"INBOX_MESSAGE_TO_CUSTOMER"`,
       * `"INBOX_MESSAGE_FROM_CUSTOMER"`, `"NEWSLETTER_SUBSCRIPTION_FORM_SUBMITTED"`,
       * `"NEWSLETTER_SUBSCRIPTION_UNSUBSCRIBE"`, `"ECOM_PURCHASE"`,
       * `"ECOM_CART_ABANDON"`, `"ECOM_CHECKOUT_BUYER"`, `"BOOKINGS_APPOINTMENT"`,
       * `"HOTELS_RESERVATION"`, `"HOTELS_PURCHASE"`, `"HOTELS_CONFIRMATION"`,
       * `"HOTELS_CANCEL"`, `"VIDEO_PURCHASE"`, `"VIDEO_RENT"`,
       * `"CASHIER_BUTTON_PURCHASE"`, `"ARENA_NEW_LEAD"`, `"EVENTS_RSVP"`,
       * `"INVOICE_PAY"`, `"INVOICE_OVERDUE"`, `"PRICE_QUOTE_ACCEPT"`,
       * `"PRICE_QUOTE_EXPIRE"`, `"RESTAURANTS_ORDER"`, `"RESTAURANTS_RESERVATION"`,
       * `"SHOUTOUT_OPEN"`, `"SHOUTOUT_CLICK"`, `"CONTACT_MERGED"`.
       */
      activityType?: ContactActivityType;
  }
  enum ContactActivityType {
      /** Last visit to your site (any unknown activity) */
      GENERAL = "GENERAL",
      /** This cannot be reported, used when contact created, will throw exception */
      CONTACT_CREATED = "CONTACT_CREATED",
      /** "auth/login" */
      MEMBER_LOGIN = "MEMBER_LOGIN",
      /** "auth/register" */
      MEMBER_REGISTER = "MEMBER_REGISTER",
      /** "auth/status-change" */
      MEMBER_STATUS_CHANGED = "MEMBER_STATUS_CHANGED",
      /** "contact/contact-form", (but also "form/contact-form", "form/form") */
      FORM_SUBMITTED = "FORM_SUBMITTED",
      /** "form/lead-capture-form" */
      INBOX_FORM_SUBMITTED = "INBOX_FORM_SUBMITTED",
      /** "chat/payment-request-paid" */
      INBOX_PAYMENT_REQUEST_PAID = "INBOX_PAYMENT_REQUEST_PAID",
      /** "messaging/email" - Direction BUSINESS_TO_CUSTOMER */
      INBOX_MESSAGE_TO_CUSTOMER = "INBOX_MESSAGE_TO_CUSTOMER",
      /** "messaging/email" - Direction CUSTOMER_TO_BUSINESS */
      INBOX_MESSAGE_FROM_CUSTOMER = "INBOX_MESSAGE_FROM_CUSTOMER",
      /** "contact/subscription-form" (but also "form/subscription-form") */
      NEWSLETTER_SUBSCRIPTION_FORM_SUBMITTED = "NEWSLETTER_SUBSCRIPTION_FORM_SUBMITTED",
      /** "contact/unsubscribe" */
      NEWSLETTER_SUBSCRIPTION_UNSUBSCRIBE = "NEWSLETTER_SUBSCRIPTION_UNSUBSCRIBE",
      /** "e_commerce/purchase" */
      ECOM_PURCHASE = "ECOM_PURCHASE",
      /** "e_commerce/cart-abandon" */
      ECOM_CART_ABANDON = "ECOM_CART_ABANDON",
      /** "e_commerce/checkout-buyer" */
      ECOM_CHECKOUT_BUYER = "ECOM_CHECKOUT_BUYER",
      /** "scheduler/appointment" */
      BOOKINGS_APPOINTMENT = "BOOKINGS_APPOINTMENT",
      /** "hotels/reservation" */
      HOTELS_RESERVATION = "HOTELS_RESERVATION",
      /** "hotels/purchase" */
      HOTELS_PURCHASE = "HOTELS_PURCHASE",
      /** "hotels/confirmation" */
      HOTELS_CONFIRMATION = "HOTELS_CONFIRMATION",
      /** "hotels/cancel" */
      HOTELS_CANCEL = "HOTELS_CANCEL",
      /** "video/purchase" */
      VIDEO_PURCHASE = "VIDEO_PURCHASE",
      /** "video/rent" */
      VIDEO_RENT = "VIDEO_RENT",
      /** "cashier/button_purchase" */
      CASHIER_BUTTON_PURCHASE = "CASHIER_BUTTON_PURCHASE",
      /** "arena/new-lead" */
      ARENA_NEW_LEAD = "ARENA_NEW_LEAD",
      /** "events/rsvp" */
      EVENTS_RSVP = "EVENTS_RSVP",
      /** "invoice/pay" */
      INVOICE_PAY = "INVOICE_PAY",
      /** "invoice/overdue" */
      INVOICE_OVERDUE = "INVOICE_OVERDUE",
      /** "price-quote/accept" */
      PRICE_QUOTE_ACCEPT = "PRICE_QUOTE_ACCEPT",
      /** "price-quote/expire" */
      PRICE_QUOTE_EXPIRE = "PRICE_QUOTE_EXPIRE",
      /** "restaurants/order" */
      RESTAURANTS_ORDER = "RESTAURANTS_ORDER",
      /** "restaurants/reservation" */
      RESTAURANTS_RESERVATION = "RESTAURANTS_RESERVATION",
      /** "shoutout/open" */
      SHOUTOUT_OPEN = "SHOUTOUT_OPEN",
      /** "shoutout/click" */
      SHOUTOUT_CLICK = "SHOUTOUT_CLICK",
      CONTACT_MERGED = "CONTACT_MERGED"
  }
  interface PrimaryContactInfo {
      /**
       * Primary email address.
       *
       * This property reflects the email address in `info.emails`
       * where `primary` is `true`.
       * @readonly
       */
      email?: string | null;
      /**
       * Primary phone number.
       *
       * This property reflects the phone number in `contactInfo.phones` where `primary` is `true`.
       * @readonly
       */
      phone?: string | null;
  }
  interface ContactInfo {
      /** Contact's first and last name. */
      name?: ContactName;
      /** Contact's email addresses. */
      emails?: ContactEmailsWrapper;
      /** Contact's phone numbers. */
      phones?: ContactPhonesWrapper;
      /** Contact's street addresses. */
      addresses?: ContactAddressesWrapper;
      /** Contact's company name. */
      company?: string | null;
      /**
       * Contact's job title.
       * Corresponds to the **Position** field in the Dashboard.
       */
      jobTitle?: string | null;
      /** Birth date in `YYYY-MM-DD` format. For example, `2020-03-15`. */
      birthdate?: string | null;
      /**
       * Site contributors
       * who are assigned to manage communication with the contact.
       * @internal
       */
      assignedUserIds?: AssigneesWrapper;
      /**
       * Locale in
       * [IETF BCP 47 language tag](https://en.wikipedia.org/wiki/IETF_language_tag) format.
       * Typically, this is a lowercase 2-letter language code,
       * followed by a hyphen, followed by an uppercase 2-letter country code.
       * For example, `en-US` for U.S. English, and `de-DE` for Germany German.
       */
      locale?: string | null;
      /**
       * List of contact label keys.
       *  [Contact labels](https://support.wix.com/en/article/adding-labels-to-contacts-in-your-contact-list)
       *  help categorize contacts.
       *
       *
       *  Label keys must exist to be added to the contact.
       *  Contact labels can be created or retrieved with
       *  [`findOrCreateLabel()`](wix-crm-backend/contacts/findorcreatelabel)
       *  or
       *  [`queryLabels()`](wix-crm-backend/contacts/queryLabels).
       *
       */
      labelKeys?: LabelsWrapper;
      /**
       * Additional custom fields.
       * This includes fields managed by Wix, by 3rd-party apps, and by the site.
       *
       * Empty fields are not returned.
       */
      extendedFields?: ExtendedFieldsWrapper;
      /**
       * Contact locations
       * @internal
       */
      locations?: LocationsWrapper;
      /** Contact's profile picture. */
      picture?: ContactPicture;
  }
  interface ContactName {
      /** Contact's first name. */
      first?: string | null;
      /** Contact's last name. */
      last?: string | null;
  }
  interface ContactEmailsWrapper {
      /** List of up to 50 email addresses. */
      items?: ContactEmail[];
  }
  interface ContactEmail {
      /**
       * Email ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Email type.
       *
       * `"UNTAGGED"` is shown as "Other" in the Contact List.
       *
       *  One of:
       *
       *  - `"UNTAGGED"`
       * - `"MAIN"`
       * - `"HOME"`
       * - `"WORK"`
       */
      tag?: EmailTag;
      /** Email address. */
      email?: string;
      /**
       * Indicates whether this is the contact's primary email address.
       * When changing `primary` to `true` for an email,
       * the contact's other emails become `false`.
       */
      primary?: boolean | null;
  }
  enum EmailTag {
      UNTAGGED = "UNTAGGED",
      MAIN = "MAIN",
      HOME = "HOME",
      WORK = "WORK"
  }
  interface ContactPhonesWrapper {
      /** List of up to 50 phone numbers. */
      items?: ContactPhone[];
  }
  interface ContactPhone {
      /**
       * Phone ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Phone type.
       *
       * `"UNTAGGED"` is shown as "Other" in the Contact List.
       *
       *  One of:
       *
       *  - `"UNTAGGED"`
       * - `"MAIN"`
       * - `"HOME"`
       * - `"MOBILE"`
       * - `"WORK"`
       * - `"FAX"`
       */
      tag?: PhoneTag;
      /** [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code. */
      countryCode?: string | null;
      /** Phone number. */
      phone?: string;
      /**
       * [ITU E.164-formatted](https://www.itu.int/rec/T-REC-E.164/)
       * phone number.
       * Automatically generated using `phone` and `countryCode`,
       * as long as both of those values are valid.
       * @readonly
       */
      e164Phone?: string | null;
      /**
       * Human-readable phone number.
       * Automatically generated using `phone` and `countryCode`,
       * as long as both of those values are valid.
       * @internal
       * @readonly
       */
      formattedPhone?: string | null;
      /**
       * Whether this is the contact's primary phone number.
       * When changing `primary` to `true` for a phone,
       * the contact's other phones become `false`.
       */
      primary?: boolean | null;
  }
  enum PhoneTag {
      UNTAGGED = "UNTAGGED",
      MAIN = "MAIN",
      HOME = "HOME",
      MOBILE = "MOBILE",
      WORK = "WORK",
      FAX = "FAX"
  }
  interface ContactAddressesWrapper {
      /** List of up to 50 addresses. */
      items?: ContactAddress[];
  }
  interface ContactAddress {
      /**
       * Street address ID.
       * @readonly
       */
      _id?: string | null;
      /**
       *  Address type.
       *
       *  `"UNTAGGED"` is shown as "Other" in the Contact List.
       *
       *   One of:
       *
       *   - `"UNTAGGED"`
       *   - `"HOME"`
       *   - `"WORK"`
       *   - `"BILLING"`
       *   - `"SHIPPING"`
       */
      tag?: AddressTag;
      /** Street address. */
      address?: Address;
  }
  enum AddressTag {
      UNTAGGED = "UNTAGGED",
      HOME = "HOME",
      WORK = "WORK",
      BILLING = "BILLING",
      SHIPPING = "SHIPPING"
  }
  /** Physical address */
  interface Address extends AddressStreetOneOf {
      /** Street address object, with number and name in separate fields. */
      streetAddress?: StreetAddress;
      /** Main address line, usually street and number, as free text. */
      addressLine1?: string | null;
      /**
       * 2-letter country code in an
       * [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
       */
      country?: string | null;
      /**
       * Code for a subdivision (such as state, prefecture, or province) in an
       * [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) format.
       */
      subdivision?: string | null;
      /** City name. */
      city?: string | null;
      /** Postal or zip code. */
      postalCode?: string | null;
      /**
       * Free text providing more detailed address information,
       * such as apartment, suite, or floor.
       */
      addressLine2?: string | null;
  }
  /** @oneof */
  interface AddressStreetOneOf {
      /** Street address object, with number and name in separate fields. */
      streetAddress?: StreetAddress;
      /** Main address line, usually street and number, as free text. */
      addressLine?: string | null;
  }
  interface StreetAddress {
      /** Street number. */
      number?: string;
      /** Street name. */
      name?: string;
      /**
       * Apartment number.
       * @internal
       */
      apt?: string;
  }
  interface AddressLocation {
      /** Address's latitude. */
      latitude?: number | null;
      /** Address's longitude. */
      longitude?: number | null;
  }
  interface Subdivision {
      /** subdivision short code */
      code?: string;
      /** Full subdivision name. */
      name?: string;
      /** @internal */
      type?: SubdivisionType;
      /**
       * Free text that describes the subdivision type.
       *
       * Examples: `"state"`, `"province"`, `"prefecture"`.
       * @internal
       */
      typeInfo?: string | null;
  }
  enum SubdivisionType {
      UNKNOWN_SUBDIVISION_TYPE = "UNKNOWN_SUBDIVISION_TYPE",
      /** state */
      ADMINISTRATIVE_AREA_LEVEL_1 = "ADMINISTRATIVE_AREA_LEVEL_1",
      /** county */
      ADMINISTRATIVE_AREA_LEVEL_2 = "ADMINISTRATIVE_AREA_LEVEL_2",
      /** cities/towns */
      ADMINISTRATIVE_AREA_LEVEL_3 = "ADMINISTRATIVE_AREA_LEVEL_3",
      /** neighborhood/quarter */
      ADMINISTRATIVE_AREA_LEVEL_4 = "ADMINISTRATIVE_AREA_LEVEL_4",
      /** street/block */
      ADMINISTRATIVE_AREA_LEVEL_5 = "ADMINISTRATIVE_AREA_LEVEL_5",
      /** (ADMINISTRATIVE_AREA_LEVEL_0) indicates the national political entity, and is typically the highest order type returned by the Geocoder. */
      COUNTRY = "COUNTRY"
  }
  interface AssigneesWrapper {
      /** List of site contributor user IDs. */
      items?: string[];
  }
  interface LabelsWrapper {
      /**
       * List of contact label keys.
       * [Contact labels](https://support.wix.com/en/article/adding-labels-to-contacts-in-your-contact-list)
       * help categorize contacts.
       *
       * Label keys must exist to be added to the contact.
       * Contact labels can be created or retrieved with
       * [Find or Create Label](https://dev.wix.com/api/rest/contacts/labels/find-or-create-label)
       * or
       * [List Labels](https://dev.wix.com/api/rest/contacts/labels/list-labels)
       */
      items?: string[];
  }
  interface ExtendedFieldsWrapper {
      /**
       * Set of key-value pairs.
       *
       * Contact's
       * [extended fields](wix-crm-backend/contacts/introduction#about-extended-fields),
       * which allow you to store additional information about your contacts.
       *
       *  To view or create extended fields, use
       * [`findOrCreateExtendedField()`](wix-crm-backend/contacts/findorcreateextendedfield),
       * [`getExtendedField()`](wix-crm-backend/contacts/getextendedfield), or
       * [`queryExtendedFields()`](wix-crm-backend/contacts/queryextendedfields).
       */
      items?: Record<string, any>;
  }
  interface LocationsWrapper {
      /** List of location ids. */
      items?: string[];
  }
  /** TEST contact picture description */
  interface ContactPicture {
      /**
       * Image.
       * This can contain an image URL or a Wix Media image ID.
       */
      image?: string;
      /**
       * Indicates whether the image is retrieved from Wix Media
       * or an external provider.
       *
       * - `EXTERNAL`: The image is retrieved from an external provider.
       * - `WIX_MEDIA`: The image is retrieved from Wix Media.
       * @internal
       */
      imageProvider?: ImageProvider;
  }
  enum ImageProvider {
      UNKNOWN = "UNKNOWN",
      /** Image stored outside Wix */
      EXTERNAL = "EXTERNAL",
      /** Stored in wix media platform, Must be uploaded by using `GeneratePictureUploadUrl` */
      WIX_MEDIA = "WIX_MEDIA"
  }
  interface SegmentsWrapper {
      /** List of Contact segment IDs */
      items?: string[];
  }
  interface EstimateFilterSizeRequest {
      /** Contacts filter expression. */
      filter: Record<string, any> | null;
      /** Should "inactive" contacts be excluded or not (default value "false"). */
      activeContactsOnly?: boolean;
      /** Contacts plain text search expression (searches in name, phone and email fields). */
      search?: string | null;
  }
  interface EstimateFilterSizeResponse {
      /** Mailing list size estimation. */
      estimation?: number;
  }
  interface EstimateAudienceSizeRequest {
      /** Contact IDs of a campaign audience. */
      contactIds?: string[];
      /** Label IDs of a campaign audience. */
      labelIds?: string[];
      /** Contacts filter expression (json). */
      contactsFilter?: Record<string, any> | null;
      /** Contacts plain text search expression (searches in name, phone and email fields). */
      search?: string | null;
      /** Segment ids of a campaign audience. */
      segmentIds?: string[];
      /** Should "inactive" contacts be excluded or not (default value "false"). */
      activeContactsOnly?: boolean;
      /** Id of a campaign that is to be resent. */
      resendCampaignId?: string | null;
  }
  interface EstimateAudienceSizeResponse {
      /** Audience size estimation. */
      estimation?: number;
  }
  interface ContactSubmitted {
      /** Pass through data, submitted with the contact */
      passThroughData?: string | null;
      /** Submitted activity */
      activity?: ContactActivity;
      /** Submitted Contact (after processing) */
      contact?: Contact;
  }
  interface ContactChanged {
      /** The Contact before the changes */
      previousContact?: Contact;
      /** The Contact after the changes */
      currentContact?: Contact;
  }
  /** Contact creation options. */
  interface CreateContactRequest {
      /** Contact info. */
      info: ContactInfo;
      /**
       * Controls whether the call will succeed
       * if the new contact information contains an email or a phone number already used by another contact.
       *
       * If set to `true`,
       * the call will succeed even if an email address or phone number is used by another contact.
       * If set to `false`,
       * the call will fail if the given email address is used by another contact or,
       * if the email address is not given and the given phone number is used by another contact.
       *
       * Defaults to `false`.
       */
      allowDuplicates?: boolean;
      /**
       * Language for localization.
       * @internal
       */
      language?: string | null;
  }
  /** Contact. */
  interface CreateContactResponse {
      /** Contact. */
      contact?: Contact;
  }
  interface DuplicateContactExists {
      duplicateContactId?: string | null;
      duplicateEmail?: string | null;
      duplicatePhone?: string | null;
  }
  interface UpdateContactRequest {
      /** ID of the contact to update. */
      contactId: string;
      /**
       * Revision number.
       * When updating, include the existing `revision`
       * to prevent conflicting updates.
       */
      revision: number | null;
      /**
       * Controls whether the call will succeed
       * if the new contact information contains an email or a phone number already used by another contact.
       *
       * If set to `true`,
       * the call will succeed even if an email address or phone number is used by another contact.
       * If set to `false`,
       * the call will fail if the given email address is used by another contact or,
       * if the email address is not given and the given phone number is used by another contact.
       *
       * Defaults to `false`.
       */
      allowDuplicates?: boolean;
      /** Contact info. */
      info: ContactInfo;
      /**
       * Set of fields to update.
       * Fields that aren't included in `fieldMask.paths` are ignored.
       * See
       * [Field Masks in Update Requests](https://dev.wix.com/api/rest/contacts/contacts/field-masks-in-update-requests)
       * for details on working with field masks.
       *
       * > **Deprecation Notice:**
       * > This parameter will be removed on March 31, 2022.
       * > If your app uses this parameter, update your code as soon as possible.
       */
      fieldMask?: string[];
      /**
       * Language for localization.
       * @internal
       */
      language?: string | null;
  }
  /** Updated contact. */
  interface UpdateContactResponse {
      /** Updated contact. */
      contact?: Contact;
  }
  interface MergeContactsRequest {
      /** Target contact ID. */
      targetContactId: string;
      /**
       * Target contact revision number, which increments by 1 each time the contact is updated.
       * To prevent conflicting changes,
       * the target contact's current revision must be passed.
       */
      targetContactRevision: number | null;
      /**
       * IDs of up to 5 contacts to merge into the target contact.
       * If merging more than one source contact,
       * the first source is given precedence, then the second, and so on.
       */
      sourceContactIds?: string[];
      /**
       * Language for localization.
       * @internal
       */
      language?: string | null;
  }
  interface MergeContactsResponse {
      /** Updated target contact. */
      contact?: Contact;
  }
  interface ContactMerged {
      /** ID of the contact the source contacts were merged into. */
      targetContactId?: string;
      /** IDs of contacts that were merged into the target contact. */
      sourceContactIds?: string[];
      /** Updated target contact. */
      targetContact?: Contact;
  }
  interface PreviewMergeContactsRequest {
      /** Target contact ID. */
      targetContactId: string;
      /**
       * IDs of up to 5 contacts to merge into the target contact.
       * If merging more than one source contact,
       * the first source is given precedence, then the second, and so on.
       */
      sourceContactIds?: string[];
      /**
       * Language for localization.
       * @internal
       */
      language?: string | null;
  }
  interface PreviewMergeContactsResponse {
      /** Preview of the updated target contact. */
      contact?: Contact;
  }
  interface DeleteContactRequest {
      /** ID of the contact to delete. */
      contactId: string;
  }
  interface DeleteContactResponse {
  }
  interface LabelContactRequest {
      /** ID of the contact to add labels to. */
      contactId: string;
      /**
       * List of label keys to add to the contact.
       *
       * Label keys must exist to be added to the contact.
       *  Contact labels can be created or retrieved with
       *  [`findOrCreateLabel()`](wix-crm-backend/contacts/findorcreatelabel)
       *  or
       *  [`queryLabels()`](wix-crm-backend/contacts/queryLabels).
       */
      labelKeys: string[];
      /**
       * Language for localization.
       * @internal
       */
      language?: string | null;
  }
  /** Updated contact. */
  interface LabelContactResponse {
      /** Updated contact. */
      contact?: Contact;
  }
  interface UnlabelContactRequest {
      /** ID of the contact to remove labels from. */
      contactId: string;
      /** List of label keys to remove from the contact. */
      labelKeys: string[];
      /**
       * Language for localization.
       * @internal
       */
      language?: string | null;
  }
  /** Updated contact. */
  interface UnlabelContactResponse {
      /** Updated contact. */
      contact?: Contact;
  }
  interface LabelAndUnlabelContactRequest {
      /** Contact ID. */
      contactId: string;
      /**
       * List of label keys to add to the contact.
       *
       * Label keys must exist to be added to the contact.
       *  Contact labels can be created or retrieved with
       *  [`findOrCreateLabel()`](wix-crm-backend/contacts/findorcreatelabel)
       *  or
       *  [`queryLabels()`](wix-crm-backend/contacts/queryLabels).
       */
      labelKeysToAdd: string[];
      /** List of label keys to remove from the contact. */
      labelKeysToRemove: string[];
      /**
       * Language for localization.
       * @internal
       */
      language?: string | null;
  }
  interface LabelAndUnlabelContactResponse {
      /** Updated contact. */
      contact?: Contact;
  }
  interface ListContactsRequest {
      /** Sort order. */
      sort?: Sorting;
      /** Pagination, defaults to offset = 0 and limit = 50 (max limit 1,000). */
      paging?: Paging;
      /**
       * List of projected fields to return.
       * If both `fields` and `fieldsets` are sent in the request,
       * the union of both lists is returned.
       * `id` and `revision` are always returned.
       *
       * Supported properties:
       * `source`, `createdDate`, `updatedDate`, `lastActivity`, `primaryInfo`,
       * `info.name`, `info.emails`, `info.phones`, `info.addresses`, `info.company`,
       * `info.jobTitle`, `info.picture`, `info.birthdate`, `info.locale`,
       * `info.labelKeys`, `info.locations`, `info.extendedFields`
       */
      fields?: string[];
      fieldsets?: ContactFieldSet[];
      /**
       * Language for localization.
       * @internal
       */
      language?: string | null;
  }
  interface Sorting {
      /**
       * Field to sort by.
       *
       * Supported properties:
       * `createdDate`, `lastActivity.activityDate`, `primaryInfo.email`,
       * `info.name.first`, `info.name.last`, `info.company`, `info.jobTitle`,
       * `info.birthdate`
       */
      fieldName?: string;
      /**
       * Sort order.
       * Use `ASC` for ascending order or `DESC` for descending order.
       *
       * Defaults to `ASC`.
       */
      order?: SortOrder;
  }
  enum SortOrder {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface Paging {
      /** Number of items to return. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  enum ContactFieldSet {
      /** name, primaryEmail, primaryPhone */
      BASIC = "BASIC",
      /** name, phones, emails, addressses */
      COMMUNICATION_DETAILS = "COMMUNICATION_DETAILS",
      /** name, primaryInfo(email, phone), extendedFields */
      EXTENDED = "EXTENDED",
      /** Full contact object */
      FULL = "FULL"
  }
  /** List of contacts. */
  interface ListContactsResponse {
      /** List of contacts. */
      contacts?: Contact[];
      /** Details on the paged set of results returned. */
      pagingMetadata?: PagingMetadata;
  }
  interface PagingMetadata {
      /** The number of items returned in this response */
      count?: number | null;
      /** The offset which was requested */
      offset?: number | null;
      /** The total number of items that match the query */
      total?: number | null;
      /** A flag that indicates the server failed to calculate 'total' field */
      tooManyToCount?: boolean | null;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       * @internal
       */
      hasNext?: boolean | null;
  }
  interface QueryContactsRequest {
      /**
       * Plain text search for an exact match.
       *
       * Supported properties:
       * `info.name.first`, `info.name.last`, `info.emails.email`, `info.phones.phone`
       *
       * Max: 100 characters
       */
      search?: string | null;
      /** Query options. */
      query?: Query;
      /**
       * Whether to calculate the total count the number of contacts
       * @internal
       */
      omitTotal?: boolean | null;
      /**
       * Language for localization.
       * @internal
       */
      language?: string | null;
  }
  interface Query {
      /**
       * Filter object.
       * See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language)
       * for more information.
       *
       * For a detailed list of supported filters, see
       * [Supported Filters](https://dev.wix.com/api/rest/contacts/contacts/supported-filters).
       */
      filter?: Record<string, any> | null;
      /**
       * Sorting options.
       * See [Sorting and Paging](https://dev.wix.com/api/rest/getting-started/pagination)
       * for more information.
       *
       * Max: 1 sort object
       */
      sort?: Sorting[];
      /** Pagination options. */
      paging?: Paging;
      /**
       * List of projected fields to return.
       * If both `fields` and `fieldsets` are sent in the request,
       * the union of both lists is returned.
       * `id` and `revision` are always returned.
       *
       * Supported properties:
       * `source`, `createdDate`, `updatedDate`, `lastActivity`, `primaryInfo`,
       * `info.name`, `info.emails`, `info.phones`, `info.addresses`, `info.company`,
       * `info.jobTitle`, `info.picture`, `info.birthdate`, `info.locale`,
       * `info.labelKeys`, `info.locations`, `info.extendedFields`
       */
      fields?: string[];
      /**
       * Predefined sets of fields to return.
       * If both `fields` and `fieldsets` are sent in the request,
       * the union of both lists is returned.
       *
       * - `BASIC`: Returns `id`, `revision`, `primaryInfo`, `info.name`.
       * - `COMMUNICATION_DETAILS`: Returns `id`, `revision`, `primaryInfo`, `info.name`, `info.emails`, `info.phones`, `info.addresses`.
       * - `EXTENDED`: Returns `id`, `revision`, `primaryInfo`, `info.name`, `info.extendedFields`.
       * - `FULL`: Returns all fields.
       *
       * Default: If `fields` is omitted from the request, `FULL`.
       */
      fieldsets?: ContactFieldSet[];
  }
  /** List of contacts. */
  interface QueryContactsResponse {
      /** List of contacts. */
      contacts?: Contact[];
      /** Details on the paged set of results returned. */
      pagingMetadata?: PagingMetadata;
  }
  interface ListFacetsRequest {
      /** Allow paginating, default: offset = 0 and limit = 1000 */
      paging?: Paging;
      /** Language for localization */
      language?: string | null;
      /**
       * Wheter to count the number of contacts per facet
       * @internal
       */
      omitCount?: boolean;
  }
  interface ListFacetsResponse {
      /** List of facets. */
      facets?: ContactsFacet[];
      /** Details on the paged set of results returned. */
      pagingMetadata?: PagingMetadata;
  }
  interface ContactsFacet {
      /** Type of facet. */
      facetType?: ContactsFacetType;
      /**
       * Scope for facet keys.
       * When a facet key exists in a namespace,
       * each key is unique within that namespace.
       *
       * Currently, facets not created by Wix are in the `custom` namespace.
       */
      namespace?: string | null;
      /** Human-readable display name. */
      namespaceDisplayName?: string | null;
      /** Facet key, automatically generated. */
      facetKey?: string | null;
      /** Human-readable name. Shown in the Wix UI. */
      facetDisplayName?: string | null;
      /** Number of contacts the facet is applied to. */
      count?: number | null;
      /**
       * Legacy ID of the facet label
       * @internal
       */
      legacyId?: string | null;
      /** Filter used for query contacts of this facet */
      queryFilter?: Record<string, any> | null;
  }
  enum ContactsFacetType {
      UNKNOWN = "UNKNOWN",
      ALL_CONTACTS = "ALL_CONTACTS",
      NOT_LABELED = "NOT_LABELED",
      LABEL = "LABEL",
      SUBSCRIPTION_STATUS = "SUBSCRIPTION_STATUS",
      MEMBERSHIP_STATUS = "MEMBERSHIP_STATUS"
  }
  interface QueryFacetsRequest {
      /** Allow paginating, default: offset = 0 and limit = 1000 */
      paging?: Paging;
      /** Language for localization */
      language?: string | null;
      /**
       * Wheter to count the number of contacts per facet
       * @internal
       */
      omitCount?: boolean;
      /**
       * Only allowed fields:
       * #info.extendedFields.emailSubscriptions.effectiveEmail ($exists)
       * #info.extendedFields.emailSubscriptions.deliverabilityStatus ($eq, $ne, $in, $nin)
       * #info.extendedFields.emailSubscriptions.subscriptionStatus ($eq, $ne, $in)
       */
      filter?: Record<string, any> | null;
  }
  interface QueryFacetsResponse {
      /** List of facets. */
      facets?: ContactsFacet[];
      /** Details on the paged set of results returned. */
      pagingMetadata?: PagingMetadata;
  }
  interface BulkDeleteContactsRequest {
      /**
       * Filter object.
       *
       * Possible filters:
       * `$eq`, `$exists`, `$gt`, `$gte`, `$hasAll`, `$hasSome`, `$in`, `$lt`, `$lte`, `$ne`, `$startsWith`.
       *
       * For a detailed list of supported filters, see
       * filtering and sorting for
       * [contact properties](https://dev.wix.com/api/rest/contacts/contacts/sorting,-filtering,-and-searching#contact-properties-filtering-sorting-and-searching),
       * [extended fields](https://dev.wix.com/api/rest/contacts/contacts/sorting,-filtering,-and-searching#extended-fields-filtering-sorting-and-searching),
       * and [custom fields](https://dev.wix.com/api/rest/contacts/contacts/sorting,-filtering,-and-searching#custom-fields-filtering-sorting-and-searching).
       *
       * Example:
       * `{ "filter": { "info.name.last": "Smith" } }`
       */
      filter?: Record<string, any> | null;
      /**
       * Plain text search for an exact match, up to 100 characters.
       *
       * Searchable fields:
       *
       * - `info.name.first`
       * - `info.name.last`
       * - `info.emails.email`
       * - `info.phones.phone`
       */
      search?: string | null;
  }
  interface BulkDeleteContactsResponse {
      /**
       * Bulk job ID.
       * The job's status can be retrieved with
       * [Get Bulk Job](https://dev.wix.com/api/rest/contacts/contacts/bulk-jobs/get-bulk-job) or
       * [List Bulk Jobs](https://dev.wix.com/api/rest/contacts/contacts/bulk-jobs/list-bulk-jobs).
       */
      jobId?: string;
  }
  interface BulkUpdateContactsRequest {
      /**
       * Filter object.
       *
       * Possible filters:
       * `$eq`, `$exists`, `$gt`, `$gte`, `$hasAll`, `$hasSome`, `$in`, `$lt`, `$lte`, `$ne`, `$startsWith`.
       *
       * For a detailed list of supported filters, see
       * filtering and sorting for
       * [contact properties](https://dev.wix.com/api/rest/contacts/contacts/sorting,-filtering,-and-searching#contact-properties-filtering-sorting-and-searching),
       * [extended fields](https://dev.wix.com/api/rest/contacts/contacts/sorting,-filtering,-and-searching#extended-fields-filtering-sorting-and-searching),
       * and [custom fields](https://dev.wix.com/api/rest/contacts/contacts/sorting,-filtering,-and-searching#custom-fields-filtering-sorting-and-searching).
       *
       * Example:
       * `{ "filter": { "info.name.last": "Smith" } }`
       */
      filter?: Record<string, any> | null;
      /**
       * Plain text search for an exact match, up to 100 characters.
       *
       * Searchable fields:
       *
       * - `info.name.first`
       * - `info.name.last`
       * - `info.emails.email`
       * - `info.phones.phone`
       */
      search?: string | null;
      /** Contact info. */
      info?: ContactInfo;
      /**
       * Set of fields to update.
       * Fields that aren't included in `fieldMask.paths` are ignored.
       * See
       * [Field Masks in Update Requests](https://dev.wix.com/api/rest/contacts/contacts/field-masks-in-update-requests)
       * for details on working with field masks.
       *
       * > **Deprecation Notice:**
       * > This parameter will be removed on March 31, 2022.
       * > If your app uses this parameter, update your code as soon as possible.
       * @internal
       */
      fieldMask?: string[];
  }
  interface BulkUpdateContactsResponse {
      /**
       * Bulk job ID.
       * The job's status can be retrieved with
       * [Get Bulk Job](https://dev.wix.com/api/rest/contacts/contacts/bulk-jobs/get-bulk-job) or
       * [List Bulk Jobs](https://dev.wix.com/api/rest/contacts/contacts/bulk-jobs/list-bulk-jobs).
       */
      jobId?: string;
  }
  interface BulkLabelAndUnlabelContactsRequest {
      /**
       * Filter options.
       * Labels will be removed from contacts that meet the `filter` and `search` criteria.
       *
       * See
       * [Field Support for Filtering, Sorting, and Searching](https://dev.wix.com/api/rest/contacts/contacts/sort-and-filter#contacts_contacts_sort-and-filter_field-support-for-filtering-sorting-and-searching)
       * for a list of supported filters and fields.
       */
      filter?: Record<string, any> | null;
      /**
       * Plain text search for an exact match, up to 100 characters.
       * Labels will be removed from contacts that meet the `filter` and `search` criteria.
       *
       * See
       * [Field Support for Filtering, Sorting, and Searching](https://dev.wix.com/api/rest/contacts/contacts/sort-and-filter#contacts_contacts_sort-and-filter_field-support-for-filtering-sorting-and-searching)
       * for a list of searchable fields.
       */
      search?: string | null;
      /**
       * List of label keys to add to the contacts.
       *
       * Label keys must exist to be added to the contact.
       *  Contact labels can be created or retrieved with
       *  [`findOrCreateLabel()`](wix-crm-backend/contacts/findorcreatelabel)
       *  or
       *  [`queryLabels()`](wix-crm-backend/contacts/queryLabels).
       */
      labelKeysToAdd?: string[];
      /** List of label keys to remove from the contacts. */
      labelKeysToRemove?: string[];
  }
  interface BulkLabelAndUnlabelContactsResponse {
      /**
       * Bulk job ID.
       * The job's status can be retrieved with
       * [Get Bulk Job](https://dev.wix.com/api/rest/contacts/contacts/bulk-jobs/get-bulk-job) or
       * [List Bulk Jobs](https://dev.wix.com/api/rest/contacts/contacts/bulk-jobs/list-bulk-jobs).
       */
      jobId?: string;
  }
  interface BulkUpsertContactsRequest {
      info?: ContactInfo[];
      returnFullEntity?: boolean;
  }
  interface BulkUpsertContactsResponse {
      results?: Item[];
      metadata?: BulkUpsertContactsResponseMetadata;
  }
  enum Action {
      UNKNOWN = "UNKNOWN",
      UPDATED = "UPDATED",
      CREATED = "CREATED"
  }
  interface Error {
      /** Error code. */
      code?: string;
      /** Error details. */
      message?: string | null;
  }
  interface Metadata {
      _id?: string | null;
      originalIndex?: number;
      action?: Action;
      success?: boolean;
      error?: Error;
  }
  interface Item {
      contact?: Contact;
      metadata?: Metadata;
  }
  interface BulkUpsertContactsResponseMetadata {
      totalSuccess?: number;
      totalFailure?: number;
      totalCreated?: number;
      totalUpdated?: number;
  }
  interface UpsertContactRequest {
      info: ContactInfo;
  }
  interface UpsertContactResponse {
      /** Upserted contact. */
      contact?: Contact;
      action?: UpsertContactResponseAction;
  }
  enum UpsertContactResponseAction {
      UNKNOWN = "UNKNOWN",
      UPDATED = "UPDATED",
      CREATED = "CREATED"
  }
  interface GeneratePictureUploadUrlRequest {
      /** ID of the contact whose picture is being updated. */
      contactId: string;
      /**
       * Mime Type. Must be one of:
       * `image/png`, `image/jpeg`.
       * Defaults to `image/png`.
       */
      mimeType?: string | null;
  }
  interface GeneratePictureUploadUrlResponse {
      /** URL to upload the image */
      uploadUrl?: string;
      /** @internal */
      uploadId?: string;
  }
  interface GetContactRequest {
      /** ID of the contact to retrieve. */
      _id: string;
      /**
       * List of projected fields to return.
       * If both `fields` and `fieldsets` are sent in the request,
       * the union of both lists is returned.
       * `id` and `revision` are always returned.
       *
       * Supported properties:
       * `source`, `createdDate`, `updatedDate`, `lastActivity`, `primaryInfo`,
       * `info.name`, `info.emails`, `info.phones`, `info.addresses`, `info.company`,
       * `info.jobTitle`, `info.picture`, `info.birthdate`, `info.locale`,
       * `info.labelKeys`, `info.locations`, `info.extendedFields`
       */
      fields?: string[];
      /**
       * Predefined sets of fields to return.
       * If both `fields` and `fieldsets` are sent in the request,
       * the union of both lists is returned.
       *
       * - `BASIC`: Returns `id`, `revision`, `primaryInfo`, `info.name`.
       * - `COMMUNICATION_DETAILS`: Returns `id`, `revision`, `primaryInfo`, `info.name`, `info.emails`, `info.phones`, `info.addresses`.
       * - `EXTENDED`: Returns `id`, `revision`, `primaryInfo`, `info.name`, `info.extendedFields`.
       * - `FULL`: Returns all fields.
       *
       * Default: If `fields` is omitted from the request, `FULL`.
       */
      fieldsets?: ContactFieldSet[];
      /**
       * Language for localization.
       * @internal
       */
      language?: string | null;
  }
  /** The requested contact. */
  interface GetContactResponse {
      /** The requested contact. */
      contact?: Contact;
      /**
       * Contact response type.
       *
       * - `REGULAR`: The specified contact was returned.
       * - `IMPLICIT`: Not used.
       * - `MERGED`: The specified contact was previously merged with another contact, and the new contact was
       */
      responseType?: GetContactResponseType;
  }
  enum GetContactResponseType {
      /** Normal contact */
      REGULAR = "REGULAR",
      /** Contact that id was already allocated for it, but the contact not yet created. */
      IMPLICIT = "IMPLICIT",
      /** Contact was merged into another contact */
      MERGED = "MERGED"
  }
  interface SyncSubmitContactRequest {
      contactInfo?: ContactInfo;
      activity?: ContactActivity;
      passThroughData?: string | null;
      contactId?: string;
      submitOperation?: SubmitOperation;
      /** Need to resolve source in allocator, because of server sign */
      sourceType?: ContactSourceType;
      sourceId?: string | null;
      hideFromContactList?: boolean;
  }
  enum SubmitOperation {
      UNKNOWN = "UNKNOWN",
      CREATE = "CREATE",
      UPDATE = "UPDATE"
  }
  interface SyncSubmitContactResponse {
  }
  interface CountContactsRequest {
  }
  interface CountContactsResponse {
      count?: number;
  }
  interface SearchContactsRequest {
      /** Search object. Encapsulates filter, sorting, paging and other details */
      search?: Search;
      /**
       * Language for localization.
       * @internal
       */
      language?: string | null;
  }
  interface Search extends SearchPagingMethodOneOf {
      /** Cursor pointing to page of results. 'cursorPaging.cursor' can not be used together with 'filter' or 'sort' */
      cursorPaging?: CursorPaging;
      /** A filter object. See documentation [here](https://bo.wix.com/wix-docs/rnd/platformization-guidelines/api-query-language#platformization-guidelines_api-query-language_defining-in-protobuf) */
      filter?: Record<string, any> | null;
      /** Sort object in the form [{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}] */
      sort?: Sorting[];
      /**
       * List of projected fields to return.
       *
       * If used in the request,
       * all the fields contained in `fields` and `fieldsets` are returned.
       * If left blank, `fieldsets` is used to determine which fields to return.
       *
       * For a list of valid projected fields, see
       * [Valid Contact Projection Fields](https://dev.wix.com/api/rest/contacts/contacts/fieldsets-and-projected-fields#contacts_contacts_fieldsets-and-projected-fields_valid-contact-projection-fields).
       */
      fields?: string[];
      /**
       * Predefined sets of fields to return.
       *
       * Defaults to `FULL`.
       * Ignored if left empty when `fields` is used in the request.
       *
       * For more information,
       * see [Contact Fieldsets](https://dev.wix.com/api/rest/contacts/contacts/fieldsets-and-projected-fields#contacts_contacts_fieldsets-and-projected-fields_contact-fieldsets).
       */
      fieldsets?: string[];
      /** free text to match in searchable fields */
      search?: SearchDetails;
  }
  /** @oneof */
  interface SearchPagingMethodOneOf {
      /** Cursor pointing to page of results. 'cursorPaging.cursor' can not be used together with 'filter' or 'sort' */
      cursorPaging?: CursorPaging;
  }
  interface SearchDetails {
      /** boolean search mode. Default is `OR` */
      mode?: Mode;
      /** search term or expression */
      expression?: string | null;
      /**
       * fields to search in. if empty - server will search in own default fieldsDefault searchable fields:
       *
       * - `info.name.first`
       * - `info.name.last`
       * - `info.emails.email`
       * - `info.phones.phone`
       */
      fields?: string[];
      /** flag if should use auto fuzzy search (allowing typos by a managed proximity algorithm) */
      fuzzy?: boolean;
  }
  enum Mode {
      /** any */
      OR = "OR",
      /** all */
      AND = "AND"
  }
  interface CursorPaging {
      /** The number of contacts to load (default = 50, max = 1000) */
      limit?: number | null;
      /** Cursor returned in last query response. Should not be provided on first page request */
      cursor?: string | null;
  }
  interface SearchContactsResponse {
      /** List of contacts. */
      contacts?: Contact[];
      /** Details on the paged set of results returned. */
      pagingMetadata?: PagingMetadataV2;
  }
  interface PagingMetadataV2 {
      /** The number of items returned in this response */
      count?: number | null;
      /** The offset which was requested. Returned if offset paging was used */
      offset?: number | null;
      /** The total number of items that match the query. Returned if offset paging was used and 'too_many_to_count' flag is not set */
      total?: number | null;
      /** A flag that indicates the server failed to calculate 'total' field */
      tooManyToCount?: boolean | null;
      /** Cursors to navigate through result pages. Returned if cursor paging was used */
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
      /** Cursor pointing to next result page */
      next?: string | null;
      /** Cursor pointing to previous result page */
      prev?: string | null;
  }
  interface BulkAddSegmentToContactsRequest {
      /** Segment id */
      segmentId?: string;
      /** List of Contact ids */
      contactIds?: string[];
      /** List of existing segment ids */
      existsSegmentIds?: string[];
  }
  interface BulkAddSegmentToContactsResponse {
      /** List of action results */
      results?: ItemMetadata[];
      /** Metadata on the bulk action */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface ItemMetadata {
      /** Item ID. Should always be available, unless it's impossible (for example, when failing to create an item). */
      _id?: string | null;
      /** Index of the item within the request array. Allows for correlation between request and response items. */
      originalIndex?: number;
      /** Whether the requested action was successful for this item. When `false`, the `error` field is populated. */
      success?: boolean;
      /** Details about the error in case of failure. */
      error?: ApplicationError;
  }
  interface ApplicationError {
      /** Error code. */
      code?: string;
      /** Description of the error. */
      description?: string;
      /** Data related to the error. */
      data?: Record<string, any> | null;
  }
  interface BulkActionMetadata {
      /** Number of items that were successfully processed. */
      totalSuccesses?: number;
      /** Number of items that couldn't be processed. */
      totalFailures?: number;
      /** Number of failures without details because detailed failure threshold was exceeded. */
      undetailedFailures?: number;
  }
  interface ContactAddedToSegment {
      /** Id of the segment to which the contact was added */
      segmentId?: string;
      /** The contact that was added */
      contact?: Contact;
  }
  interface BulkRemoveSegmentFromContactsRequest {
      /** Segment id */
      segmentId?: string;
      /** List of Contact ids */
      contactIds?: string[];
  }
  interface BulkRemoveSegmentFromContactsResponse {
      /** List of action results */
      results?: ItemMetadata[];
      /** Metadata on the bulk action */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface ContactRemovedFromSegment {
      /** Id of the segment from which the contact was removed */
      segmentId?: string;
      /** The contact that was removed */
      contact?: Contact;
  }
  /**
   * Estimates number of valid contacts by given filter and (optional) search expressions.
   * In Email Marketing context "valid" means that bounced/unsubscribed/blacklisted contacts are filtered out.
   * @param filter - Contacts filter expression.
   * @internal
   * @documentationMaturity preview
   * @requiredField filter
   */
  function estimateFilterSize(filter: Record<string, any> | null, options?: EstimateFilterSizeOptions): Promise<EstimateFilterSizeResponse>;
  interface EstimateFilterSizeOptions {
      /** Should "inactive" contacts be excluded or not (default value "false"). */
      activeContactsOnly?: boolean;
      /** Contacts plain text search expression (searches in name, phone and email fields). */
      search?: string | null;
  }
  /**
   * Estimates number of contacts of campaign's audience.
   * Audience size depends on various filters and search expressions.
   * @internal
   * @documentationMaturity preview
   */
  function estimateAudienceSize(options?: EstimateAudienceSizeOptions): Promise<EstimateAudienceSizeResponse>;
  interface EstimateAudienceSizeOptions {
      /** Contact IDs of a campaign audience. */
      contactIds?: string[];
      /** Label IDs of a campaign audience. */
      labelIds?: string[];
      /** Contacts filter expression (json). */
      contactsFilter?: Record<string, any> | null;
      /** Contacts plain text search expression (searches in name, phone and email fields). */
      search?: string | null;
      /** Segment ids of a campaign audience. */
      segmentIds?: string[];
      /** Should "inactive" contacts be excluded or not (default value "false"). */
      activeContactsOnly?: boolean;
      /** Id of a campaign that is to be resent. */
      resendCampaignId?: string | null;
  }
  /**
   * Creates a new contact.
   *
   *
   * The `createContact()` function returns a Promise
   * that resolves to the new contact when it is created.
   *   > **Note:**
   *  > This function replaces the deprecated
   *  > `wixCrmBackend.createContact()`.
   *  > The deprecated function will continue to work, but it will not receive updates.
   *  > To keep any existing code compatible with future changes, see the
   *  > [migration instructions](wix-crm-backend/createcontact#migration-instructions).
   *
   * The `contactInfo` parameter object must include a name, phone number, or email address.
   *  If all 3 of these parameters are missing,
   *  the contact won't be created.
   *
   * <!--
   * > **Note:**
   * > Only visitors with
   * > **Manage Contacts** [permissions](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Froles-and-permissions)
   * > can create contacts.
   * > You can override the permissions by setting the `suppressAuth` option to `true`.
   * -->
   *   By default,
   *  if the call contains an email already in use by another contact,
   *  the new contact won't be created.
   *  To override this behavior,
   *  set `allowDuplicates` in the `options` object to `true`.
   * @param info - Contact info.
   * @public
   * @documentationMaturity preview
   * @requiredField info
   * @param options - Create contact options.
   * @returns Contact.
   */
  function createContact(info: ContactInfo, options?: CreateContactOptions): Promise<CreateContactResponse>;
  interface CreateContactOptions {
      /**
       * Controls whether the call will succeed
       * if the new contact information contains an email or a phone number already used by another contact.
       *
       * If set to `true`,
       * the call will succeed even if an email address or phone number is used by another contact.
       * If set to `false`,
       * the call will fail if the given email address is used by another contact or,
       * if the email address is not given and the given phone number is used by another contact.
       *
       * Defaults to `false`.
       */
      allowDuplicates?: boolean;
      /**
       * Language for localization.
       * @internal
       */
      language?: string | null;
  }
  /**
   * Updates a contact's properties.
   *
   * The `updateContact()` function returns a Promise that resolves
   * when the specified contact's information is updated.
   *
   *  > **Note:**
   * > This function replaces the deprecated
   * > `wixCrmBackend.updateContact()`.
   * > The deprecated function will continue to work, but it will not receive updates.
   * > To keep any existing code compatible with future changes, see the
   * > [migration instructions](wix-crm-backend/updatecontact#migration-instructions).
   *
   *  Each time the contact is updated,
   * `revision` increments by 1.
   * The existing `revision` must be included when updating the contact.
   * This ensures you're working with the latest contact information,
   * and it prevents unintended overwrites.
   *
   * <!--
   *  > **Note:**
   * > Only visitors with
   * > **Manage Contacts** [permissions](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Froles-and-permissions)
   * > can update contacts.
   * > You can override the permissions by setting the `suppressAuth` option to `true`.
   * -->
   * @param contactId - ID of the contact to update.
   * @param revision - Revision number.
   * When updating, include the existing `revision`
   * to prevent conflicting updates.
   * @public
   * @documentationMaturity preview
   * @requiredField contactId
   * @requiredField options
   * @requiredField options.info
   * @requiredField revision
   * @param options - Contact update options.
   * @returns Updated contact.
   */
  function updateContact(contactId: string, revision: number | null, options: UpdateContactOptions): Promise<UpdateContactResponse>;
  interface UpdateContactOptions {
      /**
       * Controls whether the call will succeed if the new contact information contains an email already used by another contact.
       *
       * If set to `true`, the call will succeed even if an email address is used by another contact. If set to `false`, the call will fail if an email address is used by another contact.
       *
       * Defaults to `false`.
       */
      allowDuplicates?: boolean;
      /** Contact info. */
      info: ContactInfo;
      /**
       * Set of fields to update.
       * Fields that aren't included in `fieldMask.paths` are ignored.
       * See
       * [Field Masks in Update Requests](https://dev.wix.com/api/rest/contacts/contacts/field-masks-in-update-requests)
       * for details on working with field masks.
       *
       * > **Deprecation Notice:**
       * > This parameter will be removed on March 31, 2022.
       * > If your app uses this parameter, update your code as soon as possible.
       */
      fieldMask?: string[];
      /**
       * Language for localization.
       * @internal
       */
      language?: string | null;
  }
  /**
   * Merges source contacts into a target contact.
   *
   * Merging contacts has these effects on the target contact:
   *
   * - No target contact data is overwritten or deleted.
   * - Arrays (emails, phones, addresses, and labels) are merged from the source contacts.
   * - If merging more than one source contact, the 1st source is given precedence, then the 2nd, and so on.
   *
   * <blockquote class="important">
   *
   * __Important:__
   * Merges cannot be undone.
   * Use [Preview Merge Contacts](#preview-merge-contacts)
   * to test before merging.
   *
   * </blockquote>
   *
   * Source contacts are deleted when merging.
   * However, if a source contact is a site member or contributor,
   * the merge fails because site contributors and members can't be deleted.
   * Site members and contributors can be target contacts only.
   *
   * After merging,
   * if you call [Get Contact](#get-contact) with a deleted source contact ID,
   * the target contact ID is returned.
   * This is supported when calling Get Contact only.
   * Deleted source contact IDs are not supported on any other endpoint.
   *
   * Merging contacts triggers these webhooks:
   *
   * - [Contact Merged](https://dev.wix.com/api/rest/contacts/contacts/contacts-v4/contact-merged-webhook) is triggered.
   * - [Contact Updated](https://dev.wix.com/api/rest/contacts/contacts/contacts-v4/contact-updated-webhook) is triggered for the target contact. `originatedFrom` is set to `merge`.
   * - [Contact Deleted](https://dev.wix.com/api/rest/contacts/contacts/contacts-v4/contact-deleted-webhook) is triggered for each source contact. `originatedFrom` is set to `merge`.
   * @param targetContactId - Target contact ID.
   * @param targetContactRevision - Target contact revision number, which increments by 1 each time the contact is updated.
   * To prevent conflicting changes,
   * the target contact's current revision must be passed.
   * @public
   * @documentationMaturity preview
   * @requiredField targetContactId
   * @requiredField targetContactRevision
   * @param options - Merge contacts options.
   */
  function mergeContacts(targetContactId: string, targetContactRevision: number | null, options?: MergeContactsOptions): Promise<MergeContactsResponse>;
  interface MergeContactsOptions {
      /**
       * IDs of up to 5 contacts to merge into the target contact.
       * If merging more than one source contact,
       * the first source is given precedence, then the second, and so on.
       */
      sourceContactIds?: string[];
      /**
       * Language for localization.
       * @internal
       */
      language?: string | null;
  }
  /**
   * Previews merging source contacts into a target contact.
   *
   * This endpoint performs a dry run without deleting or updating any contacts.
   * A preview of the updated target contact is returned,
   * but no data is changed in the Contact List.
   *
   * To perform the actual merge, use [Merge Contacts](#merge-contacts).
   * @param targetContactId - Target contact ID.
   * @public
   * @documentationMaturity preview
   * @requiredField targetContactId
   * @param options - Preview merge contacts options.
   */
  function previewMergeContacts(targetContactId: string, options?: PreviewMergeContactsOptions): Promise<PreviewMergeContactsResponse>;
  interface PreviewMergeContactsOptions {
      /**
       * IDs of up to 5 contacts to merge into the target contact.
       * If merging more than one source contact,
       * the first source is given precedence, then the second, and so on.
       */
      sourceContactIds?: string[];
      /**
       * Language for localization.
       * @internal
       */
      language?: string | null;
  }
  /**
   * Deletes a contact who is not a site member or contributor.
   *
   * The `deleteContact()` function returns a Promise
   * that resolves when the specified contact is deleted.
   *  > **Note:**
   * > This function replaces the deprecated
   * > `wixCrmBackend.deleteContact()`.
   * > The deprecated function will continue to work, but it will not receive updates.
   * > To keep any existing code compatible with future changes, see the
   * > [migration instructions](wix-crm-backend/deletecontact#migration-instructions).
   *
   *  Deleting a contact permanently removes them from your Contact List.
   *
   *  If the contact is also a site member,
   * the member must be deleted first,
   * and then the contact can be deleted.
   *
   * <!--
   *  > **Note:**
   * > Only visitors with
   * > **Manage Contacts** [permissions](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Froles-and-permissions)
   * > can delete contacts.
   * > You can override the permissions by setting the `suppressAuth` option to `true`.
   * -->
   * @param contactId - ID of the contact to delete.
   * @public
   * @documentationMaturity preview
   * @requiredField contactId
   */
  function deleteContact(contactId: string): Promise<void>;
  /**
   * Adds labels to a contact.
   *
   *
   * The `labelContact()` function returns a Promise
   * that resolves when the specified labels are added to the contact.
   *  - **To create new labels:** Use [`findOrCreateLabel()`](wix-crm-backend/contacts/findorcreatelabel).
   * - **To find labels:** Use [`findOrCreateLabel()`](wix-crm-backend/contacts/findorcreatelabel), [`getLabel()`](wix-crm-backend/contacts/getlabel), or [`queryLabels()`](wix-crm-backend/contacts/queryLabels).
   *
   * <!--
   *  > **Note:**
   * > Only visitors with
   * > **Manage Contacts** [permissions](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Froles-and-permissions)
   * > can label contacts.
   * > You can override the permissions by setting the `suppressAuth` option to `true`.
   * -->
   * @param contactId - ID of the contact to add labels to.
   * @param labelKeys - List of label keys to add to the contact.
   *
   * Label keys must exist to be added to the contact.
   *  Contact labels can be created or retrieved with
   *  [`findOrCreateLabel()`](wix-crm-backend/contacts/findorcreatelabel)
   *  or
   *  [`queryLabels()`](wix-crm-backend/contacts/queryLabels).
   * @public
   * @documentationMaturity preview
   * @requiredField contactId
   * @requiredField labelKeys
   * @returns Updated contact.
   */
  function labelContact(contactId: string, labelKeys: string[], options?: LabelContactOptions): Promise<LabelContactResponse>;
  interface LabelContactOptions {
      /**
       * Language for localization.
       * @internal
       */
      language?: string | null;
  }
  /**
   * Removes labels from a contact.
   *
   *  The `unlabelContact()` function returns a Promise
   *  that resolves when the specified labels are removed from the contact.
   *
   *   If a label is no longer needed
   *  and you want to remove it from all contacts,
   *  you can delete it with
   *  [`deleteLabel()`](wix-crm-backend/contacts/deletelabel).
   *
   * <!--
   *   > **Note:**
   *  > Only visitors with
   *  > **Manage Contacts** [permissions](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Froles-and-permissions)
   *  > can unlabel contacts.
   *  > You can override the permissions by setting the `suppressAuth` option to `true`.
   * -->
   * @param contactId - ID of the contact to remove labels from.
   * @param labelKeys - List of label keys to remove from the contact.
   * @public
   * @documentationMaturity preview
   * @requiredField contactId
   * @requiredField labelKeys
   * @returns Updated contact.
   */
  function unlabelContact(contactId: string, labelKeys: string[], options?: UnlabelContactOptions): Promise<UnlabelContactResponse>;
  interface UnlabelContactOptions {
      /**
       * Language for localization.
       * @internal
       */
      language?: string | null;
  }
  /**
   * Adds and removes labels from a contact.
   * The requested labels must already exist for the site.
   * To create new labels, use
   * [Find or Create Label](https://dev.wix.com/api/rest/contacts/labels/find-or-create-label)
   * (in the Contact Labels API) before running this request.
   * @param contactId - Contact ID.
   * @param labelKeysToAdd - List of label keys to add to the contact.
   *
   * Label keys must exist to be added to the contact.
   *  Contact labels can be created or retrieved with
   *  [`findOrCreateLabel()`](wix-crm-backend/contacts/findorcreatelabel)
   *  or
   *  [`queryLabels()`](wix-crm-backend/contacts/queryLabels).
   * @internal
   * @documentationMaturity preview
   * @requiredField contactId
   * @requiredField labelKeysToAdd
   * @requiredField options
   * @requiredField options.labelKeysToRemove
   */
  function labelAndUnlabelContact(contactId: string, labelKeysToAdd: string[], options: LabelAndUnlabelContactOptions): Promise<LabelAndUnlabelContactResponse>;
  interface LabelAndUnlabelContactOptions {
      /** List of label keys to remove from the contact. */
      labelKeysToRemove: string[];
      /**
       * Language for localization.
       * @internal
       */
      language?: string | null;
  }
  /**
   * Retrieves a list of up to 1,000 contacts per request.
   * @public
   * @documentationMaturity preview
   * @param options - Object containing list of options for retrieving contacts.
   * @returns List of contacts.
   */
  function listContacts(options?: ListContactsOptions): Promise<ListContactsResponse>;
  interface ListContactsOptions {
      /** Sort order. */
      sort?: Sorting;
      /** Pagination, defaults to offset = 0 and limit = 50 (max limit 1,000). */
      paging?: Paging;
      /**
       * List of projected fields to return.
       * If both `fields` and `fieldsets` are sent in the request,
       * the union of both lists is returned.
       * `id` and `revision` are always returned.
       *
       * Supported properties:
       * `source`, `createdDate`, `updatedDate`, `lastActivity`, `primaryInfo`,
       * `info.name`, `info.emails`, `info.phones`, `info.addresses`, `info.company`,
       * `info.jobTitle`, `info.picture`, `info.birthdate`, `info.locale`,
       * `info.labelKeys`, `info.locations`, `info.extendedFields`
       */
      fields?: string[];
      fieldsets?: ContactFieldSet[];
      /**
       * Language for localization.
       * @internal
       */
      language?: string | null;
  }
  /**
   * Creates a query to retrieve a list of contacts.
   *
   * The `queryContacts()` function builds a query to retrieve a list of contacts
   * and returns a
   * [`ContactsQueryBuilder`](wix-crm-backend/contacts/contactsquerybuilder)
   * object.
   *
   * The returned object contains the query definition,
   * which is typically used to run the query using the
   * [`find()`](wix-crm-backend/contacts/contactsquerybuilder/find)
   * function.
   *
   * You can refine the query
   * by chaining `ContactsQueryBuilder` functions onto the query.
   * `ContactsQueryBuilder` functions enable you to sort, filter,
   * and control the results `queryContacts()` returns.
   *
   * `queryContacts()` runs with these `ContactsQueryBuilder` defaults,
   * which you can override:
   *
   * - [`skip(0)`](wix-crm-backend/contacts/contactsquerybuilder/skip)
   * - [`limit(50)`](wix-crm-backend/contacts/contactsquerybuilder/limit)
   * - [`descending("_createdDate")`](wix-crm-backend/contacts/contactsquerybuilder/descending)
   *
   * The functions that are chained to `queryContacts()`
   * are applied in the order they are called.
   * For example, if you apply `ascending('info.company')`
   * and then `descending('info.name.last')`,
   * the results are sorted first by the company name, and then,
   * if there are multiple results with the same company,
   * the items are sorted by last name.
   *
   * <!--
   * > **Note:**
   * > Only visitors with
   * > **Manage Contacts** [permissions](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Froles-and-permissions)
   * > can query contacts.
   * > You can override the permissions by setting the `suppressAuth` option to `true`
   * > in the [`find()`](wix-crm-backend/contacts/contactsquerybuilder/find) function.
   * -->
   *
   * For property support for filters and sorting, see
   * [Query contacts: Supported filters, sorting, and search](wix-crm-backend/contacts/sort-and-filter#query-contacts-supported-filters,-sorting,-and-search).
   *
   * @public
   * @documentationMaturity preview
   * @param options - Query contact options.
   * @returns List of contacts.
   */
  function queryContacts(options?: QueryContactsOptions): Promise<QueryContactsResponse>;
  interface QueryContactsOptions {
      /**
       * Plain text search for an exact match.
       *
       * Supported properties:
       * `info.name.first`, `info.name.last`, `info.emails.email`, `info.phones.phone`
       *
       * Max: 100 characters
       */
      search?: string | null;
      /** Query options. */
      query?: Query;
      /**
       * Whether to calculate the total count the number of contacts
       * @internal
       */
      omitTotal?: boolean | null;
      /**
       * Language for localization.
       * @internal
       */
      language?: string | null;
  }
  /**
   * Lists facets from the site’s Contact List.
   * Facets are labels and subscription statuses.
   * Each facet returns its details (such as `key` and `value`),
   * as well as aggregated `count` of the number of contacts
   * the facet applies to.
   * @public
   * @documentationMaturity preview
   * @param options - List facets options.
   */
  function listFacets(options?: ListFacetsOptions): Promise<ListFacetsResponse>;
  interface ListFacetsOptions {
      /** Allow paginating, default: offset = 0 and limit = 1000 */
      paging?: Paging;
      /** Language for localization */
      language?: string | null;
      /**
       * Wheter to count the number of contacts per facet
       * @internal
       */
      omitCount?: boolean;
  }
  /**
   * Retrieves facets from the site’s Contact List by filter.
   * Facets are labels and subscription statuses.
   * Each facet returns its details (such as `key` and `value`),
   * as well as aggregated `count` of the number of contacts
   * the facet applies to.
   * @public
   * @documentationMaturity preview
   * @param options - Query facets options.
   */
  function queryFacets(options?: QueryFacetsOptions): Promise<QueryFacetsResponse>;
  interface QueryFacetsOptions {
      /** Allow paginating, default: offset = 0 and limit = 1000 */
      paging?: Paging;
      /** Language for localization */
      language?: string | null;
      /**
       * Wheter to count the number of contacts per facet
       * @internal
       */
      omitCount?: boolean;
      /**
       * Only allowed fields:
       * #info.extendedFields.emailSubscriptions.effectiveEmail ($exists)
       * #info.extendedFields.emailSubscriptions.deliverabilityStatus ($eq, $ne, $in, $nin)
       * #info.extendedFields.emailSubscriptions.subscriptionStatus ($eq, $ne, $in)
       */
      filter?: Record<string, any> | null;
  }
  /**
   * Deletes multiple contacts.
   *
   * All contacts that meet the specified `filter` and `search` criteria are deleted.
   * The request should contain a `filter` value or a `search` value, or both.
   * To perform a dry run, use the intended filter options with
   * [Query Contacts](https://dev.wix.com/api/rest/contacts/contacts/contacts-v4/query-contacts).
   *
   * When this endpoint is used, a bulk job is started and the job ID is returned.
   * The job might not complete right away, depending on its size.
   * The job's status can be retrieved with
   * [Get Bulk Job](https://dev.wix.com/api/rest/contacts/contacts/bulk-jobs/get-bulk-job) or
   * [List Bulk Jobs](https://dev.wix.com/api/rest/contacts/contacts/bulk-jobs/list-bulk-jobs).
   * @public
   * @documentationMaturity preview
   * @param options - Bulk delete contacts options.
   */
  function bulkDeleteContacts(options?: BulkDeleteContactsOptions): Promise<BulkDeleteContactsResponse>;
  interface BulkDeleteContactsOptions {
      /**
       * Filter object.
       *
       * Possible filters:
       * `$eq`, `$exists`, `$gt`, `$gte`, `$hasAll`, `$hasSome`, `$in`, `$lt`, `$lte`, `$ne`, `$startsWith`.
       *
       * For a detailed list of supported filters, see
       * filtering and sorting for
       * [contact properties](https://dev.wix.com/api/rest/contacts/contacts/sorting,-filtering,-and-searching#contact-properties-filtering-sorting-and-searching),
       * [extended fields](https://dev.wix.com/api/rest/contacts/contacts/sorting,-filtering,-and-searching#extended-fields-filtering-sorting-and-searching),
       * and [custom fields](https://dev.wix.com/api/rest/contacts/contacts/sorting,-filtering,-and-searching#custom-fields-filtering-sorting-and-searching).
       *
       * Example:
       * `{ "filter": { "info.name.last": "Smith" } }`
       */
      filter?: Record<string, any> | null;
      /**
       * Plain text search for an exact match, up to 100 characters.
       *
       * Searchable fields:
       *
       * - `info.name.first`
       * - `info.name.last`
       * - `info.emails.email`
       * - `info.phones.phone`
       */
      search?: string | null;
  }
  /**
   * Updates the specified properties for multiple contacts.
   * Fields that are included in fieldMask.paths are updated,
   * while all other fields stay the same.
   *
   * All contacts that meet the specified `filter` and `search` criteria are updated.
   * To perform a dry run, use the intended filter options with
   * [Query Contacts](https://dev.wix.com/api/rest/contacts/contacts/contacts-v4/query-contacts).
   *
   * When this endpoint is used, a bulk job is started and the job ID is returned.
   * The job may not complete right away, depending on its size.
   * The job's status can be retrieved with
   * [Get Bulk Job](https://dev.wix.com/api/rest/contacts/contacts/bulk-jobs/get-bulk-job) or
   * [List Bulk Jobs](https://dev.wix.com/api/rest/contacts/contacts/bulk-jobs/list-bulk-jobs).
   * @public
   * @documentationMaturity preview
   * @param options - Bulk update contacts options.
   */
  function bulkUpdateContacts(options?: BulkUpdateContactsOptions): Promise<BulkUpdateContactsResponse>;
  interface BulkUpdateContactsOptions {
      /**
       * Filter object.
       *
       * Possible filters:
       * `$eq`, `$exists`, `$gt`, `$gte`, `$hasAll`, `$hasSome`, `$in`, `$lt`, `$lte`, `$ne`, `$startsWith`.
       *
       * For a detailed list of supported filters, see
       * filtering and sorting for
       * [contact properties](https://dev.wix.com/api/rest/contacts/contacts/sorting,-filtering,-and-searching#contact-properties-filtering-sorting-and-searching),
       * [extended fields](https://dev.wix.com/api/rest/contacts/contacts/sorting,-filtering,-and-searching#extended-fields-filtering-sorting-and-searching),
       * and [custom fields](https://dev.wix.com/api/rest/contacts/contacts/sorting,-filtering,-and-searching#custom-fields-filtering-sorting-and-searching).
       *
       * Example:
       * `{ "filter": { "info.name.last": "Smith" } }`
       */
      filter?: Record<string, any> | null;
      /**
       * Plain text search for an exact match, up to 100 characters.
       *
       * Searchable fields:
       *
       * - `info.name.first`
       * - `info.name.last`
       * - `info.emails.email`
       * - `info.phones.phone`
       */
      search?: string | null;
      /** Contact info. */
      info?: ContactInfo;
      /**
       * Set of fields to update.
       * Fields that aren't included in `fieldMask.paths` are ignored.
       * See
       * [Field Masks in Update Requests](https://dev.wix.com/api/rest/contacts/contacts/field-masks-in-update-requests)
       * for details on working with field masks.
       *
       * > **Deprecation Notice:**
       * > This parameter will be removed on March 31, 2022.
       * > If your app uses this parameter, update your code as soon as possible.
       * @internal
       */
      fieldMask?: string[];
  }
  /**
   * Adds and removes labels from multiple contacts.
   *
   * Labels are added to and removed from all contacts that meet the specified
   * `filter` and `search` criteria.
   * The request should contain a `filter` value or a `search` value, or both.  To perform a dry run, use the intended filter options with
   * [Query Contacts](https://dev.wix.com/api/rest/contacts/contacts/contacts-v4/query-contacts).
   *
   * When this endpoint is used, a bulk job is started and the job ID is returned.
   * The job might not not complete right away, depending on its size.
   * The job's status can be retrieved with
   * [Get Bulk Job](https://dev.wix.com/api/rest/contacts/contacts/bulk-jobs/get-bulk-job) or
   * [List Bulk Jobs](https://dev.wix.com/api/rest/contacts/contacts/bulk-jobs/list-bulk-jobs).
   * @public
   * @documentationMaturity preview
   * @param options - Bulk label and unlabel contacts options.
   */
  function bulkLabelAndUnlabelContacts(options?: BulkLabelAndUnlabelContactsOptions): Promise<BulkLabelAndUnlabelContactsResponse>;
  interface BulkLabelAndUnlabelContactsOptions {
      /**
       * Filter options.
       * Labels will be removed from contacts that meet the `filter` and `search` criteria.
       *
       * See
       * [Field Support for Filtering, Sorting, and Searching](https://dev.wix.com/api/rest/contacts/contacts/sort-and-filter#contacts_contacts_sort-and-filter_field-support-for-filtering-sorting-and-searching)
       * for a list of supported filters and fields.
       */
      filter?: Record<string, any> | null;
      /**
       * Plain text search for an exact match, up to 100 characters.
       * Labels will be removed from contacts that meet the `filter` and `search` criteria.
       *
       * See
       * [Field Support for Filtering, Sorting, and Searching](https://dev.wix.com/api/rest/contacts/contacts/sort-and-filter#contacts_contacts_sort-and-filter_field-support-for-filtering-sorting-and-searching)
       * for a list of searchable fields.
       */
      search?: string | null;
      /**
       * List of label keys to add to the contacts.
       *
       * Label keys must exist to be added to the contact.
       *  Contact labels can be created or retrieved with
       *  [`findOrCreateLabel()`](wix-crm-backend/contacts/findorcreatelabel)
       *  or
       *  [`queryLabels()`](wix-crm-backend/contacts/queryLabels).
       */
      labelKeysToAdd?: string[];
      /** List of label keys to remove from the contacts. */
      labelKeysToRemove?: string[];
  }
  /** @internal
   * @documentationMaturity preview
   */
  function bulkUpsertContacts(options?: BulkUpsertContactsOptions): Promise<BulkUpsertContactsResponse>;
  interface BulkUpsertContactsOptions {
      info?: ContactInfo[];
      returnFullEntity?: boolean;
  }
  /**
   * Update the requested contact, when found by given email and/or phone, otherwise create the contact.
   * @internal
   * @documentationMaturity preview
   * @requiredField info
   */
  function upsertContact(info: ContactInfo): Promise<UpsertContactResponse>;
  /**
   * Generates an URL that can be used to upload a contact picture
   * @param contactId - ID of the contact whose picture is being updated.
   * @internal
   * @documentationMaturity preview
   * @requiredField contactId
   */
  function generatePictureUploadUrl(contactId: string, options?: GeneratePictureUploadUrlOptions): Promise<GeneratePictureUploadUrlResponse>;
  interface GeneratePictureUploadUrlOptions {
      /**
       * Mime Type. Must be one of:
       * `image/png`, `image/jpeg`.
       * Defaults to `image/png`.
       */
      mimeType?: string | null;
  }
  /**
   * Retrieves a contact.
   *
   *
   * The `getContact()` function returns a Promise
   * that resolves when the contact is found.
   * #### Getting Merged Contacts
   * When a source contact is merged
   * with a target contact, the source contact is deleted.
   * When calling `getContact()` for a merged contact,
   * you can use the source or target contact ID.
   * In both cases, the target contact is returned.
   *
   * This is supported only when calling `getContact()`,
   * and only for merged contacts.
   * Deleted source contact IDs are not supported on any other function.
   * > **Notes:**
   * >
   * > - This function replaces the deprecated
   * >   `wixCrmBackend.getContactById()`.
   * >   The deprecated function will continue to work, but it will not receive updates.
   * >   To keep any existing code compatible with future changes, see the
   * >   [migration instructions](wix-crm-backend/getcontactbyid#migration-instructions).
   * <!-- > - Only visitors with
   * >   **Manage Contacts** [permissions](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Froles-and-permissions)
   * >   can retrieve contacts.
   * >   You can override the permissions by setting the `suppressAuth` option to `true`.
   * -->
   * @param _id - ID of the contact to retrieve.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @param options - Get contact options.
   * @returns The requested contact.
   */
  function getContact(_id: string, options?: GetContactOptions): Promise<Contact>;
  interface GetContactOptions {
      /**
       * List of projected fields to return.
       * If both `fields` and `fieldsets` are sent in the request,
       * the union of both lists is returned.
       * `id` and `revision` are always returned.
       *
       * Supported properties:
       * `source`, `createdDate`, `updatedDate`, `lastActivity`, `primaryInfo`,
       * `info.name`, `info.emails`, `info.phones`, `info.addresses`, `info.company`,
       * `info.jobTitle`, `info.picture`, `info.birthdate`, `info.locale`,
       * `info.labelKeys`, `info.locations`, `info.extendedFields`
       */
      fields?: string[];
      /**
       * Predefined sets of fields to return.
       * If both `fields` and `fieldsets` are sent in the request,
       * the union of both lists is returned.
       *
       * - `BASIC`: Returns `id`, `revision`, `primaryInfo`, `info.name`.
       * - `COMMUNICATION_DETAILS`: Returns `id`, `revision`, `primaryInfo`, `info.name`, `info.emails`, `info.phones`, `info.addresses`.
       * - `EXTENDED`: Returns `id`, `revision`, `primaryInfo`, `info.name`, `info.extendedFields`.
       * - `FULL`: Returns all fields.
       *
       * Default: If `fields` is omitted from the request, `FULL`.
       */
      fieldsets?: ContactFieldSet[];
      /**
       * Language for localization.
       * @internal
       */
      language?: string | null;
  }
  /** @internal
   * @documentationMaturity preview
   */
  function countContacts(): Promise<CountContactsResponse>;
  /**
   * Retrieves a list of contacts, given the provided cursorPaging, [filtering, and sorting](https://dev.wix.com/api/rest/contacts/contacts/sorting,-filtering,-and-searching).
   * Up to 1,000 contacts can be returned per request.
   *
   * For a detailed list of supported operations, see
   * filtering and sorting for
   * [contact properties](https://dev.wix.com/api/rest/contacts/contacts/sorting,-filtering,-and-searching#contact-properties-filtering-sorting-and-searching),
   * [extended fields](https://dev.wix.com/api/rest/contacts/contacts/sorting,-filtering,-and-searching#extended-fields-filtering-sorting-and-searching),
   * and [custom fields](https://dev.wix.com/api/rest/contacts/contacts/sorting,-filtering,-and-searching#custom-fields-filtering-sorting-and-searching).
   * To learn how to query contacts, see
   * [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language).
   * @internal
   * @documentationMaturity preview
   */
  function searchContacts(options?: SearchContactsOptions): Promise<SearchContactsResponse>;
  interface SearchContactsOptions {
      /** Search object. Encapsulates filter, sorting, paging and other details */
      search?: Search;
      /**
       * Language for localization.
       * @internal
       */
      language?: string | null;
  }
  
  const contactsV4Contact_universal_d___debug: typeof __debug;
  type contactsV4Contact_universal_d_Contact = Contact;
  type contactsV4Contact_universal_d_ContactSource = ContactSource;
  type contactsV4Contact_universal_d_ContactSourceType = ContactSourceType;
  const contactsV4Contact_universal_d_ContactSourceType: typeof ContactSourceType;
  type contactsV4Contact_universal_d_ContactActivity = ContactActivity;
  type contactsV4Contact_universal_d_ContactActivityType = ContactActivityType;
  const contactsV4Contact_universal_d_ContactActivityType: typeof ContactActivityType;
  type contactsV4Contact_universal_d_PrimaryContactInfo = PrimaryContactInfo;
  type contactsV4Contact_universal_d_ContactInfo = ContactInfo;
  type contactsV4Contact_universal_d_ContactName = ContactName;
  type contactsV4Contact_universal_d_ContactEmailsWrapper = ContactEmailsWrapper;
  type contactsV4Contact_universal_d_ContactEmail = ContactEmail;
  type contactsV4Contact_universal_d_EmailTag = EmailTag;
  const contactsV4Contact_universal_d_EmailTag: typeof EmailTag;
  type contactsV4Contact_universal_d_ContactPhonesWrapper = ContactPhonesWrapper;
  type contactsV4Contact_universal_d_ContactPhone = ContactPhone;
  type contactsV4Contact_universal_d_PhoneTag = PhoneTag;
  const contactsV4Contact_universal_d_PhoneTag: typeof PhoneTag;
  type contactsV4Contact_universal_d_ContactAddressesWrapper = ContactAddressesWrapper;
  type contactsV4Contact_universal_d_ContactAddress = ContactAddress;
  type contactsV4Contact_universal_d_AddressTag = AddressTag;
  const contactsV4Contact_universal_d_AddressTag: typeof AddressTag;
  type contactsV4Contact_universal_d_Address = Address;
  type contactsV4Contact_universal_d_AddressStreetOneOf = AddressStreetOneOf;
  type contactsV4Contact_universal_d_StreetAddress = StreetAddress;
  type contactsV4Contact_universal_d_AddressLocation = AddressLocation;
  type contactsV4Contact_universal_d_Subdivision = Subdivision;
  type contactsV4Contact_universal_d_SubdivisionType = SubdivisionType;
  const contactsV4Contact_universal_d_SubdivisionType: typeof SubdivisionType;
  type contactsV4Contact_universal_d_AssigneesWrapper = AssigneesWrapper;
  type contactsV4Contact_universal_d_LabelsWrapper = LabelsWrapper;
  type contactsV4Contact_universal_d_ExtendedFieldsWrapper = ExtendedFieldsWrapper;
  type contactsV4Contact_universal_d_LocationsWrapper = LocationsWrapper;
  type contactsV4Contact_universal_d_ContactPicture = ContactPicture;
  type contactsV4Contact_universal_d_ImageProvider = ImageProvider;
  const contactsV4Contact_universal_d_ImageProvider: typeof ImageProvider;
  type contactsV4Contact_universal_d_SegmentsWrapper = SegmentsWrapper;
  type contactsV4Contact_universal_d_EstimateFilterSizeRequest = EstimateFilterSizeRequest;
  type contactsV4Contact_universal_d_EstimateFilterSizeResponse = EstimateFilterSizeResponse;
  type contactsV4Contact_universal_d_EstimateAudienceSizeRequest = EstimateAudienceSizeRequest;
  type contactsV4Contact_universal_d_EstimateAudienceSizeResponse = EstimateAudienceSizeResponse;
  type contactsV4Contact_universal_d_ContactSubmitted = ContactSubmitted;
  type contactsV4Contact_universal_d_ContactChanged = ContactChanged;
  type contactsV4Contact_universal_d_CreateContactRequest = CreateContactRequest;
  type contactsV4Contact_universal_d_CreateContactResponse = CreateContactResponse;
  type contactsV4Contact_universal_d_DuplicateContactExists = DuplicateContactExists;
  type contactsV4Contact_universal_d_UpdateContactRequest = UpdateContactRequest;
  type contactsV4Contact_universal_d_UpdateContactResponse = UpdateContactResponse;
  type contactsV4Contact_universal_d_MergeContactsRequest = MergeContactsRequest;
  type contactsV4Contact_universal_d_MergeContactsResponse = MergeContactsResponse;
  type contactsV4Contact_universal_d_ContactMerged = ContactMerged;
  type contactsV4Contact_universal_d_PreviewMergeContactsRequest = PreviewMergeContactsRequest;
  type contactsV4Contact_universal_d_PreviewMergeContactsResponse = PreviewMergeContactsResponse;
  type contactsV4Contact_universal_d_DeleteContactRequest = DeleteContactRequest;
  type contactsV4Contact_universal_d_DeleteContactResponse = DeleteContactResponse;
  type contactsV4Contact_universal_d_LabelContactRequest = LabelContactRequest;
  type contactsV4Contact_universal_d_LabelContactResponse = LabelContactResponse;
  type contactsV4Contact_universal_d_UnlabelContactRequest = UnlabelContactRequest;
  type contactsV4Contact_universal_d_UnlabelContactResponse = UnlabelContactResponse;
  type contactsV4Contact_universal_d_LabelAndUnlabelContactRequest = LabelAndUnlabelContactRequest;
  type contactsV4Contact_universal_d_LabelAndUnlabelContactResponse = LabelAndUnlabelContactResponse;
  type contactsV4Contact_universal_d_ListContactsRequest = ListContactsRequest;
  type contactsV4Contact_universal_d_Sorting = Sorting;
  type contactsV4Contact_universal_d_SortOrder = SortOrder;
  const contactsV4Contact_universal_d_SortOrder: typeof SortOrder;
  type contactsV4Contact_universal_d_Paging = Paging;
  type contactsV4Contact_universal_d_ContactFieldSet = ContactFieldSet;
  const contactsV4Contact_universal_d_ContactFieldSet: typeof ContactFieldSet;
  type contactsV4Contact_universal_d_ListContactsResponse = ListContactsResponse;
  type contactsV4Contact_universal_d_PagingMetadata = PagingMetadata;
  type contactsV4Contact_universal_d_QueryContactsRequest = QueryContactsRequest;
  type contactsV4Contact_universal_d_Query = Query;
  type contactsV4Contact_universal_d_QueryContactsResponse = QueryContactsResponse;
  type contactsV4Contact_universal_d_ListFacetsRequest = ListFacetsRequest;
  type contactsV4Contact_universal_d_ListFacetsResponse = ListFacetsResponse;
  type contactsV4Contact_universal_d_ContactsFacet = ContactsFacet;
  type contactsV4Contact_universal_d_ContactsFacetType = ContactsFacetType;
  const contactsV4Contact_universal_d_ContactsFacetType: typeof ContactsFacetType;
  type contactsV4Contact_universal_d_QueryFacetsRequest = QueryFacetsRequest;
  type contactsV4Contact_universal_d_QueryFacetsResponse = QueryFacetsResponse;
  type contactsV4Contact_universal_d_BulkDeleteContactsRequest = BulkDeleteContactsRequest;
  type contactsV4Contact_universal_d_BulkDeleteContactsResponse = BulkDeleteContactsResponse;
  type contactsV4Contact_universal_d_BulkUpdateContactsRequest = BulkUpdateContactsRequest;
  type contactsV4Contact_universal_d_BulkUpdateContactsResponse = BulkUpdateContactsResponse;
  type contactsV4Contact_universal_d_BulkLabelAndUnlabelContactsRequest = BulkLabelAndUnlabelContactsRequest;
  type contactsV4Contact_universal_d_BulkLabelAndUnlabelContactsResponse = BulkLabelAndUnlabelContactsResponse;
  type contactsV4Contact_universal_d_BulkUpsertContactsRequest = BulkUpsertContactsRequest;
  type contactsV4Contact_universal_d_BulkUpsertContactsResponse = BulkUpsertContactsResponse;
  type contactsV4Contact_universal_d_Action = Action;
  const contactsV4Contact_universal_d_Action: typeof Action;
  type contactsV4Contact_universal_d_Error = Error;
  type contactsV4Contact_universal_d_Metadata = Metadata;
  type contactsV4Contact_universal_d_Item = Item;
  type contactsV4Contact_universal_d_BulkUpsertContactsResponseMetadata = BulkUpsertContactsResponseMetadata;
  type contactsV4Contact_universal_d_UpsertContactRequest = UpsertContactRequest;
  type contactsV4Contact_universal_d_UpsertContactResponse = UpsertContactResponse;
  type contactsV4Contact_universal_d_UpsertContactResponseAction = UpsertContactResponseAction;
  const contactsV4Contact_universal_d_UpsertContactResponseAction: typeof UpsertContactResponseAction;
  type contactsV4Contact_universal_d_GeneratePictureUploadUrlRequest = GeneratePictureUploadUrlRequest;
  type contactsV4Contact_universal_d_GeneratePictureUploadUrlResponse = GeneratePictureUploadUrlResponse;
  type contactsV4Contact_universal_d_GetContactRequest = GetContactRequest;
  type contactsV4Contact_universal_d_GetContactResponse = GetContactResponse;
  type contactsV4Contact_universal_d_GetContactResponseType = GetContactResponseType;
  const contactsV4Contact_universal_d_GetContactResponseType: typeof GetContactResponseType;
  type contactsV4Contact_universal_d_SyncSubmitContactRequest = SyncSubmitContactRequest;
  type contactsV4Contact_universal_d_SubmitOperation = SubmitOperation;
  const contactsV4Contact_universal_d_SubmitOperation: typeof SubmitOperation;
  type contactsV4Contact_universal_d_SyncSubmitContactResponse = SyncSubmitContactResponse;
  type contactsV4Contact_universal_d_CountContactsRequest = CountContactsRequest;
  type contactsV4Contact_universal_d_CountContactsResponse = CountContactsResponse;
  type contactsV4Contact_universal_d_SearchContactsRequest = SearchContactsRequest;
  type contactsV4Contact_universal_d_Search = Search;
  type contactsV4Contact_universal_d_SearchPagingMethodOneOf = SearchPagingMethodOneOf;
  type contactsV4Contact_universal_d_SearchDetails = SearchDetails;
  type contactsV4Contact_universal_d_Mode = Mode;
  const contactsV4Contact_universal_d_Mode: typeof Mode;
  type contactsV4Contact_universal_d_CursorPaging = CursorPaging;
  type contactsV4Contact_universal_d_SearchContactsResponse = SearchContactsResponse;
  type contactsV4Contact_universal_d_PagingMetadataV2 = PagingMetadataV2;
  type contactsV4Contact_universal_d_Cursors = Cursors;
  type contactsV4Contact_universal_d_BulkAddSegmentToContactsRequest = BulkAddSegmentToContactsRequest;
  type contactsV4Contact_universal_d_BulkAddSegmentToContactsResponse = BulkAddSegmentToContactsResponse;
  type contactsV4Contact_universal_d_ItemMetadata = ItemMetadata;
  type contactsV4Contact_universal_d_ApplicationError = ApplicationError;
  type contactsV4Contact_universal_d_BulkActionMetadata = BulkActionMetadata;
  type contactsV4Contact_universal_d_ContactAddedToSegment = ContactAddedToSegment;
  type contactsV4Contact_universal_d_BulkRemoveSegmentFromContactsRequest = BulkRemoveSegmentFromContactsRequest;
  type contactsV4Contact_universal_d_BulkRemoveSegmentFromContactsResponse = BulkRemoveSegmentFromContactsResponse;
  type contactsV4Contact_universal_d_ContactRemovedFromSegment = ContactRemovedFromSegment;
  const contactsV4Contact_universal_d_estimateFilterSize: typeof estimateFilterSize;
  type contactsV4Contact_universal_d_EstimateFilterSizeOptions = EstimateFilterSizeOptions;
  const contactsV4Contact_universal_d_estimateAudienceSize: typeof estimateAudienceSize;
  type contactsV4Contact_universal_d_EstimateAudienceSizeOptions = EstimateAudienceSizeOptions;
  const contactsV4Contact_universal_d_createContact: typeof createContact;
  type contactsV4Contact_universal_d_CreateContactOptions = CreateContactOptions;
  const contactsV4Contact_universal_d_updateContact: typeof updateContact;
  type contactsV4Contact_universal_d_UpdateContactOptions = UpdateContactOptions;
  const contactsV4Contact_universal_d_mergeContacts: typeof mergeContacts;
  type contactsV4Contact_universal_d_MergeContactsOptions = MergeContactsOptions;
  const contactsV4Contact_universal_d_previewMergeContacts: typeof previewMergeContacts;
  type contactsV4Contact_universal_d_PreviewMergeContactsOptions = PreviewMergeContactsOptions;
  const contactsV4Contact_universal_d_deleteContact: typeof deleteContact;
  const contactsV4Contact_universal_d_labelContact: typeof labelContact;
  type contactsV4Contact_universal_d_LabelContactOptions = LabelContactOptions;
  const contactsV4Contact_universal_d_unlabelContact: typeof unlabelContact;
  type contactsV4Contact_universal_d_UnlabelContactOptions = UnlabelContactOptions;
  const contactsV4Contact_universal_d_labelAndUnlabelContact: typeof labelAndUnlabelContact;
  type contactsV4Contact_universal_d_LabelAndUnlabelContactOptions = LabelAndUnlabelContactOptions;
  const contactsV4Contact_universal_d_listContacts: typeof listContacts;
  type contactsV4Contact_universal_d_ListContactsOptions = ListContactsOptions;
  const contactsV4Contact_universal_d_queryContacts: typeof queryContacts;
  type contactsV4Contact_universal_d_QueryContactsOptions = QueryContactsOptions;
  const contactsV4Contact_universal_d_listFacets: typeof listFacets;
  type contactsV4Contact_universal_d_ListFacetsOptions = ListFacetsOptions;
  const contactsV4Contact_universal_d_queryFacets: typeof queryFacets;
  type contactsV4Contact_universal_d_QueryFacetsOptions = QueryFacetsOptions;
  const contactsV4Contact_universal_d_bulkDeleteContacts: typeof bulkDeleteContacts;
  type contactsV4Contact_universal_d_BulkDeleteContactsOptions = BulkDeleteContactsOptions;
  const contactsV4Contact_universal_d_bulkUpdateContacts: typeof bulkUpdateContacts;
  type contactsV4Contact_universal_d_BulkUpdateContactsOptions = BulkUpdateContactsOptions;
  const contactsV4Contact_universal_d_bulkLabelAndUnlabelContacts: typeof bulkLabelAndUnlabelContacts;
  type contactsV4Contact_universal_d_BulkLabelAndUnlabelContactsOptions = BulkLabelAndUnlabelContactsOptions;
  const contactsV4Contact_universal_d_bulkUpsertContacts: typeof bulkUpsertContacts;
  type contactsV4Contact_universal_d_BulkUpsertContactsOptions = BulkUpsertContactsOptions;
  const contactsV4Contact_universal_d_upsertContact: typeof upsertContact;
  const contactsV4Contact_universal_d_generatePictureUploadUrl: typeof generatePictureUploadUrl;
  type contactsV4Contact_universal_d_GeneratePictureUploadUrlOptions = GeneratePictureUploadUrlOptions;
  const contactsV4Contact_universal_d_getContact: typeof getContact;
  type contactsV4Contact_universal_d_GetContactOptions = GetContactOptions;
  const contactsV4Contact_universal_d_countContacts: typeof countContacts;
  const contactsV4Contact_universal_d_searchContacts: typeof searchContacts;
  type contactsV4Contact_universal_d_SearchContactsOptions = SearchContactsOptions;
  namespace contactsV4Contact_universal_d {
    export {
      contactsV4Contact_universal_d___debug as __debug,
      contactsV4Contact_universal_d_Contact as Contact,
      contactsV4Contact_universal_d_ContactSource as ContactSource,
      contactsV4Contact_universal_d_ContactSourceType as ContactSourceType,
      contactsV4Contact_universal_d_ContactActivity as ContactActivity,
      contactsV4Contact_universal_d_ContactActivityType as ContactActivityType,
      contactsV4Contact_universal_d_PrimaryContactInfo as PrimaryContactInfo,
      contactsV4Contact_universal_d_ContactInfo as ContactInfo,
      contactsV4Contact_universal_d_ContactName as ContactName,
      contactsV4Contact_universal_d_ContactEmailsWrapper as ContactEmailsWrapper,
      contactsV4Contact_universal_d_ContactEmail as ContactEmail,
      contactsV4Contact_universal_d_EmailTag as EmailTag,
      contactsV4Contact_universal_d_ContactPhonesWrapper as ContactPhonesWrapper,
      contactsV4Contact_universal_d_ContactPhone as ContactPhone,
      contactsV4Contact_universal_d_PhoneTag as PhoneTag,
      contactsV4Contact_universal_d_ContactAddressesWrapper as ContactAddressesWrapper,
      contactsV4Contact_universal_d_ContactAddress as ContactAddress,
      contactsV4Contact_universal_d_AddressTag as AddressTag,
      contactsV4Contact_universal_d_Address as Address,
      contactsV4Contact_universal_d_AddressStreetOneOf as AddressStreetOneOf,
      contactsV4Contact_universal_d_StreetAddress as StreetAddress,
      contactsV4Contact_universal_d_AddressLocation as AddressLocation,
      contactsV4Contact_universal_d_Subdivision as Subdivision,
      contactsV4Contact_universal_d_SubdivisionType as SubdivisionType,
      contactsV4Contact_universal_d_AssigneesWrapper as AssigneesWrapper,
      contactsV4Contact_universal_d_LabelsWrapper as LabelsWrapper,
      contactsV4Contact_universal_d_ExtendedFieldsWrapper as ExtendedFieldsWrapper,
      contactsV4Contact_universal_d_LocationsWrapper as LocationsWrapper,
      contactsV4Contact_universal_d_ContactPicture as ContactPicture,
      contactsV4Contact_universal_d_ImageProvider as ImageProvider,
      contactsV4Contact_universal_d_SegmentsWrapper as SegmentsWrapper,
      contactsV4Contact_universal_d_EstimateFilterSizeRequest as EstimateFilterSizeRequest,
      contactsV4Contact_universal_d_EstimateFilterSizeResponse as EstimateFilterSizeResponse,
      contactsV4Contact_universal_d_EstimateAudienceSizeRequest as EstimateAudienceSizeRequest,
      contactsV4Contact_universal_d_EstimateAudienceSizeResponse as EstimateAudienceSizeResponse,
      contactsV4Contact_universal_d_ContactSubmitted as ContactSubmitted,
      contactsV4Contact_universal_d_ContactChanged as ContactChanged,
      contactsV4Contact_universal_d_CreateContactRequest as CreateContactRequest,
      contactsV4Contact_universal_d_CreateContactResponse as CreateContactResponse,
      contactsV4Contact_universal_d_DuplicateContactExists as DuplicateContactExists,
      contactsV4Contact_universal_d_UpdateContactRequest as UpdateContactRequest,
      contactsV4Contact_universal_d_UpdateContactResponse as UpdateContactResponse,
      contactsV4Contact_universal_d_MergeContactsRequest as MergeContactsRequest,
      contactsV4Contact_universal_d_MergeContactsResponse as MergeContactsResponse,
      contactsV4Contact_universal_d_ContactMerged as ContactMerged,
      contactsV4Contact_universal_d_PreviewMergeContactsRequest as PreviewMergeContactsRequest,
      contactsV4Contact_universal_d_PreviewMergeContactsResponse as PreviewMergeContactsResponse,
      contactsV4Contact_universal_d_DeleteContactRequest as DeleteContactRequest,
      contactsV4Contact_universal_d_DeleteContactResponse as DeleteContactResponse,
      contactsV4Contact_universal_d_LabelContactRequest as LabelContactRequest,
      contactsV4Contact_universal_d_LabelContactResponse as LabelContactResponse,
      contactsV4Contact_universal_d_UnlabelContactRequest as UnlabelContactRequest,
      contactsV4Contact_universal_d_UnlabelContactResponse as UnlabelContactResponse,
      contactsV4Contact_universal_d_LabelAndUnlabelContactRequest as LabelAndUnlabelContactRequest,
      contactsV4Contact_universal_d_LabelAndUnlabelContactResponse as LabelAndUnlabelContactResponse,
      contactsV4Contact_universal_d_ListContactsRequest as ListContactsRequest,
      contactsV4Contact_universal_d_Sorting as Sorting,
      contactsV4Contact_universal_d_SortOrder as SortOrder,
      contactsV4Contact_universal_d_Paging as Paging,
      contactsV4Contact_universal_d_ContactFieldSet as ContactFieldSet,
      contactsV4Contact_universal_d_ListContactsResponse as ListContactsResponse,
      contactsV4Contact_universal_d_PagingMetadata as PagingMetadata,
      contactsV4Contact_universal_d_QueryContactsRequest as QueryContactsRequest,
      contactsV4Contact_universal_d_Query as Query,
      contactsV4Contact_universal_d_QueryContactsResponse as QueryContactsResponse,
      contactsV4Contact_universal_d_ListFacetsRequest as ListFacetsRequest,
      contactsV4Contact_universal_d_ListFacetsResponse as ListFacetsResponse,
      contactsV4Contact_universal_d_ContactsFacet as ContactsFacet,
      contactsV4Contact_universal_d_ContactsFacetType as ContactsFacetType,
      contactsV4Contact_universal_d_QueryFacetsRequest as QueryFacetsRequest,
      contactsV4Contact_universal_d_QueryFacetsResponse as QueryFacetsResponse,
      contactsV4Contact_universal_d_BulkDeleteContactsRequest as BulkDeleteContactsRequest,
      contactsV4Contact_universal_d_BulkDeleteContactsResponse as BulkDeleteContactsResponse,
      contactsV4Contact_universal_d_BulkUpdateContactsRequest as BulkUpdateContactsRequest,
      contactsV4Contact_universal_d_BulkUpdateContactsResponse as BulkUpdateContactsResponse,
      contactsV4Contact_universal_d_BulkLabelAndUnlabelContactsRequest as BulkLabelAndUnlabelContactsRequest,
      contactsV4Contact_universal_d_BulkLabelAndUnlabelContactsResponse as BulkLabelAndUnlabelContactsResponse,
      contactsV4Contact_universal_d_BulkUpsertContactsRequest as BulkUpsertContactsRequest,
      contactsV4Contact_universal_d_BulkUpsertContactsResponse as BulkUpsertContactsResponse,
      contactsV4Contact_universal_d_Action as Action,
      contactsV4Contact_universal_d_Error as Error,
      contactsV4Contact_universal_d_Metadata as Metadata,
      contactsV4Contact_universal_d_Item as Item,
      contactsV4Contact_universal_d_BulkUpsertContactsResponseMetadata as BulkUpsertContactsResponseMetadata,
      contactsV4Contact_universal_d_UpsertContactRequest as UpsertContactRequest,
      contactsV4Contact_universal_d_UpsertContactResponse as UpsertContactResponse,
      contactsV4Contact_universal_d_UpsertContactResponseAction as UpsertContactResponseAction,
      contactsV4Contact_universal_d_GeneratePictureUploadUrlRequest as GeneratePictureUploadUrlRequest,
      contactsV4Contact_universal_d_GeneratePictureUploadUrlResponse as GeneratePictureUploadUrlResponse,
      contactsV4Contact_universal_d_GetContactRequest as GetContactRequest,
      contactsV4Contact_universal_d_GetContactResponse as GetContactResponse,
      contactsV4Contact_universal_d_GetContactResponseType as GetContactResponseType,
      contactsV4Contact_universal_d_SyncSubmitContactRequest as SyncSubmitContactRequest,
      contactsV4Contact_universal_d_SubmitOperation as SubmitOperation,
      contactsV4Contact_universal_d_SyncSubmitContactResponse as SyncSubmitContactResponse,
      contactsV4Contact_universal_d_CountContactsRequest as CountContactsRequest,
      contactsV4Contact_universal_d_CountContactsResponse as CountContactsResponse,
      contactsV4Contact_universal_d_SearchContactsRequest as SearchContactsRequest,
      contactsV4Contact_universal_d_Search as Search,
      contactsV4Contact_universal_d_SearchPagingMethodOneOf as SearchPagingMethodOneOf,
      contactsV4Contact_universal_d_SearchDetails as SearchDetails,
      contactsV4Contact_universal_d_Mode as Mode,
      contactsV4Contact_universal_d_CursorPaging as CursorPaging,
      contactsV4Contact_universal_d_SearchContactsResponse as SearchContactsResponse,
      contactsV4Contact_universal_d_PagingMetadataV2 as PagingMetadataV2,
      contactsV4Contact_universal_d_Cursors as Cursors,
      contactsV4Contact_universal_d_BulkAddSegmentToContactsRequest as BulkAddSegmentToContactsRequest,
      contactsV4Contact_universal_d_BulkAddSegmentToContactsResponse as BulkAddSegmentToContactsResponse,
      contactsV4Contact_universal_d_ItemMetadata as ItemMetadata,
      contactsV4Contact_universal_d_ApplicationError as ApplicationError,
      contactsV4Contact_universal_d_BulkActionMetadata as BulkActionMetadata,
      contactsV4Contact_universal_d_ContactAddedToSegment as ContactAddedToSegment,
      contactsV4Contact_universal_d_BulkRemoveSegmentFromContactsRequest as BulkRemoveSegmentFromContactsRequest,
      contactsV4Contact_universal_d_BulkRemoveSegmentFromContactsResponse as BulkRemoveSegmentFromContactsResponse,
      contactsV4Contact_universal_d_ContactRemovedFromSegment as ContactRemovedFromSegment,
      contactsV4Contact_universal_d_estimateFilterSize as estimateFilterSize,
      contactsV4Contact_universal_d_EstimateFilterSizeOptions as EstimateFilterSizeOptions,
      contactsV4Contact_universal_d_estimateAudienceSize as estimateAudienceSize,
      contactsV4Contact_universal_d_EstimateAudienceSizeOptions as EstimateAudienceSizeOptions,
      contactsV4Contact_universal_d_createContact as createContact,
      contactsV4Contact_universal_d_CreateContactOptions as CreateContactOptions,
      contactsV4Contact_universal_d_updateContact as updateContact,
      contactsV4Contact_universal_d_UpdateContactOptions as UpdateContactOptions,
      contactsV4Contact_universal_d_mergeContacts as mergeContacts,
      contactsV4Contact_universal_d_MergeContactsOptions as MergeContactsOptions,
      contactsV4Contact_universal_d_previewMergeContacts as previewMergeContacts,
      contactsV4Contact_universal_d_PreviewMergeContactsOptions as PreviewMergeContactsOptions,
      contactsV4Contact_universal_d_deleteContact as deleteContact,
      contactsV4Contact_universal_d_labelContact as labelContact,
      contactsV4Contact_universal_d_LabelContactOptions as LabelContactOptions,
      contactsV4Contact_universal_d_unlabelContact as unlabelContact,
      contactsV4Contact_universal_d_UnlabelContactOptions as UnlabelContactOptions,
      contactsV4Contact_universal_d_labelAndUnlabelContact as labelAndUnlabelContact,
      contactsV4Contact_universal_d_LabelAndUnlabelContactOptions as LabelAndUnlabelContactOptions,
      contactsV4Contact_universal_d_listContacts as listContacts,
      contactsV4Contact_universal_d_ListContactsOptions as ListContactsOptions,
      contactsV4Contact_universal_d_queryContacts as queryContacts,
      contactsV4Contact_universal_d_QueryContactsOptions as QueryContactsOptions,
      contactsV4Contact_universal_d_listFacets as listFacets,
      contactsV4Contact_universal_d_ListFacetsOptions as ListFacetsOptions,
      contactsV4Contact_universal_d_queryFacets as queryFacets,
      contactsV4Contact_universal_d_QueryFacetsOptions as QueryFacetsOptions,
      contactsV4Contact_universal_d_bulkDeleteContacts as bulkDeleteContacts,
      contactsV4Contact_universal_d_BulkDeleteContactsOptions as BulkDeleteContactsOptions,
      contactsV4Contact_universal_d_bulkUpdateContacts as bulkUpdateContacts,
      contactsV4Contact_universal_d_BulkUpdateContactsOptions as BulkUpdateContactsOptions,
      contactsV4Contact_universal_d_bulkLabelAndUnlabelContacts as bulkLabelAndUnlabelContacts,
      contactsV4Contact_universal_d_BulkLabelAndUnlabelContactsOptions as BulkLabelAndUnlabelContactsOptions,
      contactsV4Contact_universal_d_bulkUpsertContacts as bulkUpsertContacts,
      contactsV4Contact_universal_d_BulkUpsertContactsOptions as BulkUpsertContactsOptions,
      contactsV4Contact_universal_d_upsertContact as upsertContact,
      contactsV4Contact_universal_d_generatePictureUploadUrl as generatePictureUploadUrl,
      contactsV4Contact_universal_d_GeneratePictureUploadUrlOptions as GeneratePictureUploadUrlOptions,
      contactsV4Contact_universal_d_getContact as getContact,
      contactsV4Contact_universal_d_GetContactOptions as GetContactOptions,
      contactsV4Contact_universal_d_countContacts as countContacts,
      contactsV4Contact_universal_d_searchContacts as searchContacts,
      contactsV4Contact_universal_d_SearchContactsOptions as SearchContactsOptions,
    };
  }
  
  export { contactsV4Contact_universal_d as contacts };
}
