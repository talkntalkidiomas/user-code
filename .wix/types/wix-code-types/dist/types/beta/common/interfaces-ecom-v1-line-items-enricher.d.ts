declare module "interfaces-ecom-v1-line-items-enricher" {
  type BusinessError<T = unknown> = {
      __tag: 'BusinessError';
      httpCode: string;
      errorDescription: string;
      applicationCode: string;
      messageSchema: string;
      data: T;
  };
  
  /** typ */
  interface EnrichLineItemsForThankYouPageRequest {
      lineItems: LineItem[];
  }
  interface LineItem {
      /** Line item ID. */
      _id?: string;
      /**
       * References to the line item's origin catalog.
       * This field is empty in the case of a custom line item.
       */
      catalogReference?: CatalogReference;
      /** Line item description lines. Used for display purposes for the cart, checkout and order. */
      descriptionLines?: V1DescriptionLine[];
  }
  /** Used for grouping line items. Sent when an item is added to a cart, checkout, or order. */
  interface CatalogReference {
      /** ID of the item within the catalog it belongs to. */
      catalogItemId?: string;
      /**
       * ID of the app providing the catalog.
       *
       * You can get your app's ID from its page in the [Wix Dev Center](https://dev.wix.com/apps).
       *
       * For items from Wix catalogs, the following values always apply:
       * + Wix Stores: `"215238eb-22a5-4c36-9e7b-e7c08025e04e"`
       * + Wix Bookings: `"13d21c63-b5ec-5912-8397-c3a5ddb27a97"`
       * + Wix Restaurants: `"9a5d83fd-8570-482e-81ab-cfa88942ee60"`
       */
      appId?: string;
      /**
       * Additional item details in key:value pairs. Use this optional field to provide more specificity with item selection. The `options` field values differ depending on which catalog is providing the items.
       *
       * For products and variants from a Wix Stores catalog, learn more about [eCommerce integration](https://dev.wix.com/docs/rest/business-solutions/stores/catalog/e-commerce-integration).
       */
      options?: Record<string, any> | null;
  }
  interface V1DescriptionLine extends V1DescriptionLineValueOneOf, V1DescriptionLineDescriptionLineValueOneOf {
      /** Description line plain text value. */
      plainText?: PlainTextValue;
      /** Description line color value. */
      colorInfo?: Color;
      /**
       * Description line plain text value.
       * @internal
       */
      plainTextValue?: PlainTextValue;
      /**
       * Description line color.
       * @internal
       */
      color?: string;
      /** Description line name. */
      name?: DescriptionLineName;
      /**
       * Description line type.
       * @internal
       */
      lineType?: DescriptionLineType;
  }
  /** @oneof */
  interface V1DescriptionLineValueOneOf {
      /** Description line plain text value. */
      plainText?: PlainTextValue;
      /** Description line color value. */
      colorInfo?: Color;
  }
  /** @oneof */
  interface V1DescriptionLineDescriptionLineValueOneOf {
      /**
       * Description line plain text value.
       * @internal
       */
      plainTextValue?: PlainTextValue;
      /**
       * Description line color.
       * @internal
       */
      color?: string;
  }
  interface DescriptionLineName {
      /** Description line name in the site's default language. */
      original?: string;
      /**
       * Description line name translated into the buyer's language.
       *
       * Default: Same as `original`.
       */
      translated?: string | null;
  }
  interface PlainTextValue {
      /** Description line plain text value in the site's default language. */
      original?: string;
      /**
       * Description line plain text value translated into the buyer's language.
       *
       * Default: Same as `original`.
       */
      translated?: string | null;
  }
  interface Color {
      /** Description line color name in the site's default language. */
      original?: string;
      /**
       * Description line color name translated into the buyer's language.
       *
       * Default: Same as `original`.
       */
      translated?: string | null;
      /** HEX or RGB color code for display. */
      code?: string | null;
  }
  enum DescriptionLineType {
      UNRECOGNISED = "UNRECOGNISED",
      PLAIN_TEXT = "PLAIN_TEXT",
      COLOR = "COLOR"
  }
  interface EnrichLineItemsForThankYouPageResponse {
      enrichedLineItems?: EnrichedLineItemWithActions[];
  }
  interface EnrichedLineItemWithActions {
      /** Line item ID */
      _id?: string;
      /**
       * Description lines to replace the original
       * This is optional - If you do not want to override, do not return this and the original description lines will be used
       * If you do pass it, it overrides the existing description line.
       * If you want to append, copy the original description lines and add your own
       */
      overriddenDescriptionLines?: OverriddenDescriptionLines;
      /** Option to hide specific sections */
      renderingConfig?: LineItemRenderingConfig;
      /**
       * Optional list of actions to be rendered next to the line item
       * Implementation depends on the client (checkout page, mobile)
       */
      actions?: LineItemAction[];
  }
  interface OverriddenDescriptionLines {
      descriptionLines?: V1DescriptionLine[];
  }
  interface LineItemRenderingConfig {
      hidePrice?: boolean;
      hideQuantity?: boolean;
  }
  interface LineItemAction extends LineItemActionTextOneOf {
      /** the key that we use to save the text in the editor settings panel */
      settingsKey?: string;
      /** the translated text to display (i.e. will be shown "as is") */
      label?: string;
      /**
       * URL to navigate to in order to perform the action
       * can be relative e.g "/api/download" or absolute e.g. "http://www.google.com"
       * Note that a specific client may rely on action id and parameters and ignore the URL or the other way around
       */
      url?: string | null;
      /**
       * The unique id of the action
       * for example: DOWNLOAD_LINK, ADD_TO_CALENDAR
       * Note that a specific client may rely on action id and parameters and ignore the URL or the other way around
       */
      actionId?: string;
      /** Parameters for the actions, will be used by the client implementing the action based on actionId */
      actionParameters?: Record<string, any> | null;
  }
  /** @oneof */
  interface LineItemActionTextOneOf {
      /** the key that we use to save the text in the editor settings panel */
      settingsKey?: string;
      /** the translated text to display (i.e. will be shown "as is") */
      label?: string;
  }
  /** typ example lines */
  interface GenerateThankYouPageExampleLineItemsRequest {
  }
  interface GenerateThankYouPageExampleLineItemsResponse {
      lineItems?: TYPEditorExampleLineItem[];
  }
  interface TYPEditorExampleLineItem {
      /** Line item name in the language of the Editor User */
      itemName?: string;
      /** the example lines to present in the editor - in the language of the Editor User */
      descriptionLines?: DescriptionLine[];
      /** name of action in the language of the Editor User // 'Add to calendar'/'Download'... */
      actionLabel?: string | null;
      /** indicate to the Thank You Page if to show quantity */
      hideQuantity?: boolean | null;
      /**
       * The unique id of the action
       * for example: DOWNLOAD_LINK, ADD_TO_CALENDAR
       */
      actionId?: string | null;
  }
  interface DescriptionLine {
      /** an optional name for the line */
      name?: string | null;
      /** the actual description value - in the language of the Editor User */
      value?: string;
  }
  /** invoice */
  interface EnrichLineItemsForInvoiceRequest {
      lineItems: LineItem[];
  }
  interface EnrichLineItemsForInvoiceResponse {
      enrichedLineItems?: EnrichedLineItem[];
  }
  interface EnrichedLineItem {
      /** Line item ID. */
      _id?: string;
      /**
       * Description lines to replace the original
       * This is optional - If you do not want to override, do not return this and the original description lines will be used
       * If you do pass it, it overrides the existing description line.
       * If you want to append, copy the original description lines and add your own
       */
      overriddenDescriptionLines?: OverriddenDescriptionLines;
      /** Option to hide specific sections */
      renderingConfig?: LineItemRenderingConfig;
  }
  /** checkout */
  interface EnrichLineItemsForCheckoutRequest {
      lineItems: LineItem[];
  }
  interface EnrichLineItemsForCheckoutResponse {
      enrichedLineItems?: EnrichedLineItem[];
  }
  /** cart */
  interface EnrichLineItemsForCartRequest {
      lineItems: LineItem[];
  }
  interface EnrichLineItemsForCartResponse {
      enrichedLineItems?: EnrichedLineItem[];
  }
  /** order page */
  interface EnrichLineItemsForOrderPageRequest {
      lineItems: LineItem[];
  }
  interface EnrichLineItemsForOrderPageResponse {
      enrichedLineItems?: EnrichedLineItem[];
  }
  interface LineItemsEnricherConfig {
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
  interface EnrichLineItemsForThankYouPageOptions {
      lineItems: LineItem[];
  }
  interface EnrichLineItemsForInvoiceOptions {
      lineItems: LineItem[];
  }
  interface EnrichLineItemsForCheckoutOptions {
      lineItems: LineItem[];
  }
  interface EnrichLineItemsForCartOptions {
      lineItems: LineItem[];
  }
  interface EnrichLineItemsForOrderPageOptions {
      lineItems: LineItem[];
  }
  
  export { BusinessError, CatalogReference, Color, Context, DescriptionLine, DescriptionLineName, DescriptionLineType, EnrichLineItemsForCartOptions, EnrichLineItemsForCartRequest, EnrichLineItemsForCartResponse, EnrichLineItemsForCheckoutOptions, EnrichLineItemsForCheckoutRequest, EnrichLineItemsForCheckoutResponse, EnrichLineItemsForInvoiceOptions, EnrichLineItemsForInvoiceRequest, EnrichLineItemsForInvoiceResponse, EnrichLineItemsForOrderPageOptions, EnrichLineItemsForOrderPageRequest, EnrichLineItemsForOrderPageResponse, EnrichLineItemsForThankYouPageOptions, EnrichLineItemsForThankYouPageRequest, EnrichLineItemsForThankYouPageResponse, EnrichedLineItem, EnrichedLineItemWithActions, GenerateThankYouPageExampleLineItemsRequest, GenerateThankYouPageExampleLineItemsResponse, IdentificationData, IdentificationDataIdOneOf, IdentityType, LineItem, LineItemAction, LineItemActionTextOneOf, LineItemRenderingConfig, LineItemsEnricherConfig, OverriddenDescriptionLines, PlainTextValue, TYPEditorExampleLineItem, V1DescriptionLine, V1DescriptionLineDescriptionLineValueOneOf, V1DescriptionLineValueOneOf };
}
