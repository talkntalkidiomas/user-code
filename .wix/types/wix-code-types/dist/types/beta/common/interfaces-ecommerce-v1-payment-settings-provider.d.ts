declare module "interfaces-ecommerce-v1-payment-settings-provider" {
  type BusinessError<T = unknown> = {
      __tag: 'BusinessError';
      httpCode: string;
      errorDescription: string;
      applicationCode: string;
      messageSchema: string;
      data: T;
  };
  
  interface GetPaymentSettingsRequest {
      /** Order. */
      order?: Order;
  }
  interface Order {
      /**
       * Order ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Order number displayed in the site owner's dashboard (auto-generated).
       * @readonly
       */
      number?: string;
      /**
       * Date and time the order was created in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) format.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the order was last updated in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) format.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Order line items.
       * @readonly
       */
      lineItems?: OrderLineItem[];
      /** Buyer information. */
      buyerInfo?: BuyerInfo;
      /**
       * Order payment status.
       * + `NOT_PAID` - This can be an order made online, but not yet paid. In such cases `order.status` will be `INITIALIZED`.
       * + This status also applies when an offline order needs to be manually marked as paid. In such cases `order.status` will be `APPROVED`.
       * + `PAID` - All payments associated with this order are paid. For online payments: [`payment.regularPaymentDetails.status: APPROVED`](https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/order-transactions/order-transactions-object). For gift cards: [`payment.giftCardPaymentDetails.voided: false`](https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/order-transactions/order-transactions-object).
       * + `PARTIALLY_REFUNDED` - Order was refunded, but refund amount is less than order total price.
       * + `FULLY_REFUNDED` - Order fully refunded. Refund amount equals total price.
       * + `PENDING` - Payments received but not yet confirmed by the payment provider.
       * + `PARTIALLY_PAID` -  At least one payment was received and approved, covering less than total price amount.
       */
      paymentStatus?: PaymentStatus;
      /**
       * Order fulfillment status.
       * @readonly
       */
      fulfillmentStatus?: FulfillmentStatus;
      /**
       * Language for communication with the buyer. Defaults to the site language.
       * For a site that supports multiple languages, this is the language the buyer selected.
       */
      buyerLanguage?: string | null;
      /** Weight measurement unit - defaults to site's weight unit. */
      weightUnit?: WeightUnit;
      /** Currency used for the pricing of this order in [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217#List_of_ISO_4217_currency_codes) format. */
      currency?: string | null;
      /** Whether tax is included in line item prices. */
      taxIncludedInPrices?: boolean;
      /**
       * Site language in which original values are shown.
       * @readonly
       */
      siteLanguage?: string | null;
      /**
       * Order price summary.
       * @readonly
       */
      priceSummary?: PriceSummary;
      /** Billing address and contact details. */
      billingInfo?: AddressWithContact;
      /** Shipping info and selected shipping option details. */
      shippingInfo?: ShippingInformation;
      /** [Buyer note](https://support.wix.com/en/article/wix-stores-viewing-buyer-notes) left by the customer. */
      buyerNote?: string | null;
      /**
       * Order status.
       * + `INITIALIZED` - Order was created, but not yet approved or declined.
       * + `APPROVED` - Order was approved. This happens when either the online payment succeeded or the order is an offline order. Once an order is approved, many side effects are triggered. For example, holding of stock in the inventory and sending of notification emails.
       * + `CANCELED` - Order was canceled by the user.
       */
      status?: OrderStatus;
      /** Whether order is archived. */
      archived?: boolean | null;
      /**
       * Tax summary.
       * Deprecated. Use `taxInfo` instead.
       * This field will be removed on September 30, 2024.
       */
      taxSummary?: TaxSummary;
      /**
       * Tax information.
       * @internal
       */
      taxInfo?: OrderTaxInfo;
      /** Applied discounts. */
      appliedDiscounts?: AppliedDiscount[];
      /**
       * Order activities.
       * @readonly
       */
      activities?: Activity[];
      /** Order attribution source. */
      attributionSource?: AttributionSource;
      /**
       * ID of the order's initiator.
       * @readonly
       */
      createdBy?: CreatedBy;
      /** Information about the sales channel that submitted this order. */
      channelInfo?: ChannelInfo;
      /** Whether a human has seen the order. Set when an order is clicked on in the dashboard. */
      seenByAHuman?: boolean | null;
      /** Checkout ID. */
      checkoutId?: string | null;
      /** Custom fields. */
      customFields?: CustomField[];
      /**
       * Cart ID - required by TYP OOI for legacy orders.
       * @internal
       */
      cartId?: string | null;
      /**
       * Private API flag that allows using read-only "id" during order creation.
       * @internal
       */
      isInternalOrderCreate?: boolean;
      /**
       * Pay now price summary. Part of price_summary that must be payed at checkout
       * @internal
       * @readonly
       */
      payNow?: PriceSummary;
      /**
       * Balance summary.
       * @readonly
       */
      balanceSummary?: BalanceSummary;
      /** Additional fees applied to the order. */
      additionalFees?: AdditionalFee[];
      /**
       * Custom string status values aggregated from every fulfillment entity associated with current order
       * @internal
       * @readonly
       */
      fulfillmentStatusesAggregate?: FulfillmentStatusesAggregate;
      /**
       * Custom field data for the order object.
       *
       * [Extended fields](https://dev.wix.com/docs/rest/articles/getting-started/extended-fields) must be configured in the Wix Dev Center before they can be accessed with API calls.
       */
      extendedFields?: ExtendedFields;
      /** Persistent ID that correlates between the various eCommerce elements: cart, checkout, and order. */
      purchaseFlowId?: string | null;
      /**
       * Order recipient address and contact details.
       *
       * This field may differ from the address in `shippingInfo.logistics` when:
       * + The chosen shipping option is pickup point or store pickup.
       * + No shipping option is selected.
       */
      recipientInfo?: AddressWithContact;
      /**
       * Tag ids collections associated with current entity. private_tags requires separate permissions to be accessible and modifiable.
       * @internal
       */
      tags?: Tags;
  }
  interface OrderLineItem {
      /** Line item ID. */
      _id?: string;
      /**
       * Item name.
       * + Stores - `product.name`
       * + Bookings - `service.info.name`
       * + Events - `ticket.name`
       */
      productName?: ProductName;
      /**
       * References to the line item's origin catalog.
       * This field is empty in the case of a custom line item.
       */
      catalogReference?: CatalogReference;
      /** Line item quantity. */
      quantity?: number;
      /**
       * Total discount for this line item's entire quantity.
       * @readonly
       */
      totalDiscount?: Price;
      /** Line item description lines. Used for display purposes for the cart, checkout and order. */
      descriptionLines?: DescriptionLine[];
      /** Line item image. */
      image?: string;
      /** Physical properties of the item. When relevant, contains information such as SKU and item weight. */
      physicalProperties?: PhysicalProperties;
      /** Item type. Either a preset type or custom. */
      itemType?: ItemType;
      /**
       * Fulfiller ID. Field is empty when the line item is self-fulfilled.
       * To get fulfillment information, pass the order ID to [List Fulfillments For Single Order](https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/order-fulfillments/list-fulfillments-for-single-order).
       */
      fulfillerId?: string | null;
      /**
       * Number of items that were refunded.
       * @readonly
       */
      refundQuantity?: number | null;
      /**
       * Number of items restocked.
       * @readonly
       */
      restockQuantity?: number | null;
      /** Line item price after line item discounts for display purposes. */
      price?: Price;
      /**
       * Line item price before line item discounts for display purposes. Defaults to `price` when not provided.
       * @readonly
       */
      priceBeforeDiscounts?: Price;
      /**
       * Total price after discounts, and before tax.
       * @readonly
       */
      totalPriceBeforeTax?: Price;
      /**
       * Total price after all discounts and tax.
       * @readonly
       */
      totalPriceAfterTax?: Price;
      /**
       * Type of selected payment option for current item. Defaults to `FULL_PAYMENT_ONLINE`.
       * + `FULL_PAYMENT_ONLINE` - The entire payment for this item happens as part of the checkout.
       * + `FULL_PAYMENT_OFFLINE` - The entire payment for this item happens after the checkout. For example, when using cash, check, or other offline payment methods.
       * + `MEMBERSHIP` - Payment for this item is done by charging a membership. When this option is used, `lineItem.price.amount` is 0.
       * + `DEPOSIT_ONLINE` - Partial payment for the given item to be paid upfront during the checkout. Eligible for catalog items with type `DEPOSIT_ONLINE` only.
       */
      paymentOption?: PaymentOptionType;
      /**
       * Deprecated. Use `taxInfo` instead.
       * This field will be removed on September 30, 2024.
       * Tax details for this line item.
       */
      taxDetails?: ItemTaxFullDetails;
      /**
       * Represents all the relevant tax details for a specific line item.
       * @internal
       */
      taxInfo?: LineItemTaxInfo;
      /** Digital file identifier, relevant only for items with type DIGITAL. */
      digitalFile?: DigitalFile;
      /** Subscription info. */
      subscriptionInfo?: SubscriptionInfo;
      /** Additional description for the price. For example, when price is 0 but additional details about the actual price are needed - "Starts at $67". */
      priceDescription?: PriceDescription;
      /**
       * Item's price amount to be charged during checkout. Relevant for items with a `paymentOption` value of `"DEPOSIT_ONLINE"`.
       * @readonly
       */
      depositAmount?: Price;
      /**
       * The Item's Delivery Profile Id
       * @internal
       */
      deliveryProfileId?: string | null;
      /** @internal */
      shippingGroupId?: string | null;
      /**
       * Source locations for this line item. The location's total quantity must not exceed the line item quantity.
       * @internal
       */
      locations?: LocationAndQuantity[];
      /**
       * Total price **after** catalog discounts and line item discounts.
       * @internal
       */
      lineItemPrice?: Price;
      /**
       * Whether the line item is custom or from catalog.
       * @internal
       * @readonly
       */
      customLineItem?: boolean | null;
      /**
       * In cases where `catalogReference.catalogItemId` is NOT the actual catalog item ID, this field will return the true item's ID.
       * + For example, for Wix Bookings, `catalogReference.catalogItemId` is the booking ID. Therefore this value is set to the service ID.
       * + In most cases, this field has the same value as `catalogReference.catalogItemId`.
       * @internal
       * @readonly
       */
      rootCatalogItemId?: string | null;
  }
  interface ProductName {
      /**
       * __Required.__ Item name in the site's default language.
       *
       * Min: 1 character.
       * Max: 200 characters.
       */
      original?: string;
      /**
       * Item name translated into the buyer's language.
       *
       * Min: 1 character.
       * Max: 400 characters.
       * Default: Same as `original`.
       */
      translated?: string | null;
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
  interface Price {
      /** Amount. */
      amount?: string;
      /**
       * Amount formatted with currency symbol.
       * @readonly
       */
      formattedAmount?: string;
  }
  interface DescriptionLine extends DescriptionLineValueOneOf, DescriptionLineDescriptionLineValueOneOf {
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
  interface DescriptionLineValueOneOf {
      /** Description line plain text value. */
      plainText?: PlainTextValue;
      /** Description line color value. */
      colorInfo?: Color;
  }
  /** @oneof */
  interface DescriptionLineDescriptionLineValueOneOf {
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
  interface PhysicalProperties {
      /** Line item weight. Measurement unit matches the weight unit specified in `weightUnit` in the request. */
      weight?: number | null;
      /** Stock-keeping unit. Learn more about [SKUs](https://www.wix.com/encyclopedia/definition/stock-keeping-unit-sku). */
      sku?: string | null;
      /** Whether this line item is shippable. */
      shippable?: boolean;
  }
  interface ItemType extends ItemTypeItemTypeDataOneOf {
      /** Preset item type. */
      preset?: ItemTypeItemType;
      /** Custom item type. When none of the preset types are suitable, specifies the custom type. */
      custom?: string;
  }
  /** @oneof */
  interface ItemTypeItemTypeDataOneOf {
      /** Preset item type. */
      preset?: ItemTypeItemType;
      /** Custom item type. When none of the preset types are suitable, specifies the custom type. */
      custom?: string;
  }
  enum ItemTypeItemType {
      UNRECOGNISED = "UNRECOGNISED",
      PHYSICAL = "PHYSICAL",
      DIGITAL = "DIGITAL",
      GIFT_CARD = "GIFT_CARD",
      SERVICE = "SERVICE"
  }
  /** Type of selected payment option for catalog item */
  enum PaymentOptionType {
      /** The entire payment for this item happens as part of the checkout. */
      FULL_PAYMENT_ONLINE = "FULL_PAYMENT_ONLINE",
      /** The entire payment for this item happens after the checkout. For example, when using cash, check, or other offline payment methods. */
      FULL_PAYMENT_OFFLINE = "FULL_PAYMENT_OFFLINE",
      /** Payment for this item is done by charging a membership. When selected, `price` is `0`. */
      MEMBERSHIP = "MEMBERSHIP",
      /** Partial payment to be paid upfront during the checkout. Initial amount to be paid for each line item is specified in `depositAmount`. */
      DEPOSIT_ONLINE = "DEPOSIT_ONLINE",
      /** Payment for this item can only be done by charging a membership and must be manually redeemed in the dashboard by the site admin. When selected, `price` is `0`. */
      MEMBERSHIP_OFFLINE = "MEMBERSHIP_OFFLINE"
  }
  interface ItemTaxFullDetails {
      /** Taxable amount of this line item. */
      taxableAmount?: Price;
      /**
       * ID of the item's tax group, if specified.
       * @internal
       */
      taxGroupId?: string | null;
      /** Tax rate percentage, as a decimal numeral between 0 and 1. For example, `"0.13"`. */
      taxRate?: string;
      /** The calculated tax, based on the `taxableAmount` and `taxRate`. */
      totalTax?: Price;
  }
  interface LineItemTaxInfo {
      /** Calculated tax, based on `taxable_amount` and `tax_rate`. */
      taxAmount?: Price;
      /** Amount for which tax is calculated. */
      taxableAmount?: Price;
      /** Tax rate %, as a decimal point. */
      taxRate?: string | null;
      /**
       * Tax group ID, if specified.
       * @internal
       */
      taxGroupId?: string | null;
      /** Indicates whether the price already includes tax. */
      taxIncludedInPrice?: boolean;
      /**
       * tax information for a line item.
       * @internal
       */
      taxBreakdown?: LineItemTaxBreakdown[];
  }
  /**
   * TaxBreakdown represents tax information for a line item.
   * It holds the tax amount and the tax rate for each tax authority that apply on the line item.
   */
  interface LineItemTaxBreakdown {
      /** Jurisdiction that taxes were calculated for. For example, "New York", or "Quebec". */
      jurisdiction?: string | null;
      /** Tax rate used for this jurisdiction, as a decimal. For example, 10% tax is 0.1000. */
      rate?: string | null;
      /** Amount of tax calculated for this line item. */
      taxAmount?: Price;
      /** The type of tax that was calculated. Depends on the jurisdiction's tax laws. For example, "Sales Tax", "Income Tax", "Value Added Tax", etc. */
      taxType?: string | null;
      /**
       * The name of the tax against which this tax amount was calculated. For example, "NY State Sales Tax", "Quebec GST", etc.
       * This name should be explicit enough to allow the merchant to understand what tax was calculated.
       */
      taxName?: string | null;
      /** Type of jurisdiction that taxes were calculated for. */
      jurisdictionType?: JurisdictionType;
      /** Non-taxable amount of the line item price. */
      nonTaxableAmount?: Price;
      /** Taxable amount of the line item price. */
      taxableAmount?: Price;
  }
  /** JurisdictionType represents the type of the jurisdiction in which this tax detail applies (e.g. Country,State,County,City,Special). */
  enum JurisdictionType {
      UNDEFINED = "UNDEFINED",
      COUNTRY = "COUNTRY",
      STATE = "STATE",
      COUNTY = "COUNTY",
      CITY = "CITY",
      SPECIAL = "SPECIAL"
  }
  interface DigitalFile {
      /** ID of the secure file in media. */
      fileId?: string;
      /** Link will exist after the digital links have been generated on the order. */
      link?: string | null;
      /**
       * Link expiration time and date.
       * @readonly
       */
      expirationDate?: Date;
  }
  interface SubscriptionInfo {
      /** Subscription ID. */
      _id?: string | null;
      /** Subscription cycle. For example, if this order is for the 3rd cycle of a subscription, value will be `3`. */
      cycleNumber?: number;
      /** Subscription option title. For example, `"Monthly coffee Subscription"`. */
      subscriptionOptionTitle?: string;
      /** Subscription option description. For example, `"1kg of selected coffee, once a month"`. */
      subscriptionOptionDescription?: string | null;
      /** Subscription detailed information. */
      subscriptionSettings?: SubscriptionSettings;
  }
  interface SubscriptionSettings {
      /** Frequency of recurring payment. */
      frequency?: SubscriptionFrequency;
      /** Interval of recurring payment. */
      interval?: number | null;
      /** Whether subscription is renewed automatically at the end of each period. */
      autoRenewal?: boolean;
      /** Number of billing cycles before subscription ends. Ignored if `autoRenewal: true`. */
      billingCycles?: number | null;
  }
  /** Frequency unit of recurring payment */
  enum SubscriptionFrequency {
      UNDEFINED = "UNDEFINED",
      DAY = "DAY",
      WEEK = "WEEK",
      MONTH = "MONTH",
      YEAR = "YEAR"
  }
  interface PriceDescription {
      /** __Required.__ Price description in the site's default language. */
      original?: string;
      /**
       * Price description translated into the buyer's language.
       *
       * Default: Same as `original`.
       */
      translated?: string | null;
  }
  interface LocationAndQuantity {
      /** Location id in the associated owner app. */
      _id?: string;
      /** Location owner app, if not provided then the site business info locations will be used. */
      appId?: string | null;
      /** Quantity for specific location. */
      quantity?: number;
  }
  /** Buyer Info */
  interface BuyerInfo extends BuyerInfoIdOneOf {
      /** Visitor ID (if site visitor is not a member). */
      visitorId?: string;
      /** Member ID (if site visitor is a site member). */
      memberId?: string;
      /** Contact ID. Auto-created if one does not yet exist. For more information, see [Contacts API](https://dev.wix.com/api/rest/contacts/contacts/introduction). */
      contactId?: string | null;
      /** Buyer email address. */
      email?: string | null;
  }
  /** @oneof */
  interface BuyerInfoIdOneOf {
      /** Visitor ID (if site visitor is not a member). */
      visitorId?: string;
      /** Member ID (if site visitor is a site member). */
      memberId?: string;
  }
  enum PaymentStatus {
      UNSPECIFIED = "UNSPECIFIED",
      /** Order is not paid */
      NOT_PAID = "NOT_PAID",
      /** Order is paid */
      PAID = "PAID",
      /** Order was refunded, refund amount less than order total price */
      PARTIALLY_REFUNDED = "PARTIALLY_REFUNDED",
      /** Full order total price was refunded */
      FULLY_REFUNDED = "FULLY_REFUNDED",
      /** Payments received but not yet confirmed by the payment provider */
      PENDING = "PENDING",
      /** At least one payment was received and approved, covering less than total price amount */
      PARTIALLY_PAID = "PARTIALLY_PAID"
  }
  enum FulfillmentStatus {
      /** none of the order items are fulfilled or order was manually marked as unfulfilled */
      NOT_FULFILLED = "NOT_FULFILLED",
      /**
       * All of the order items are fulfilled or order was manually marked as fulfilled
       * Orders without shipping info are fulfilled automatically
       */
      FULFILLED = "FULFILLED",
      /** Some, but not all of the order items are fulfilled */
      PARTIALLY_FULFILLED = "PARTIALLY_FULFILLED"
  }
  enum WeightUnit {
      /** Weight unit can't be classified, due to an error */
      UNSPECIFIED_WEIGHT_UNIT = "UNSPECIFIED_WEIGHT_UNIT",
      /** Kilograms */
      KG = "KG",
      /** Pounds */
      LB = "LB"
  }
  interface PriceSummary {
      /** Subtotal of all the line items, before discounts and before tax. */
      subtotal?: Price;
      /** Total shipping price, before discounts and before tax. */
      shipping?: Price;
      /** Total tax on this order. */
      tax?: Price;
      /** Total calculated discount value. */
      discount?: Price;
      /**
       * Deprecated - use `total` instead.
       * @internal
       */
      totalPrice?: Price;
      /** Order’s total price after discounts and tax. */
      total?: Price;
      /**
       * Order's total price including gift card.
       * @internal
       */
      totalWithGiftCard?: Price;
      /**
       * Order's total price after without gift card.
       * @internal
       */
      totalWithoutGiftCard?: Price;
      /** Total price of additional fees before tax. */
      totalAdditionalFees?: Price;
  }
  /** Billing Info and shipping details */
  interface AddressWithContact {
      /** Address. */
      address?: Address;
      /** Contact details. */
      contactDetails?: FullAddressContactDetails;
  }
  /** Physical address */
  interface Address {
      /** Two-letter country code in [ISO-3166 alpha-2](https://www.iso.org/obp/ui/#search/code/) format. */
      country?: string | null;
      /** Code for a subdivision (such as state, prefecture, or province) in [ISO 3166-2](https://www.iso.org/standard/72483.html) format. */
      subdivision?: string | null;
      /** City name. */
      city?: string | null;
      /** Postal or zip code. */
      postalCode?: string | null;
      /** Street address. */
      streetAddress?: StreetAddress;
      /** Main address line (usually street name and number). */
      addressLine1?: string | null;
      /** Free text providing more detailed address info. Usually contains apt, suite, floor. */
      addressLine2?: string | null;
      /** @internal */
      location?: AddressLocation;
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
      /**
       * Optional address line 1
       * @internal
       */
      formattedAddressLine?: string | null;
  }
  interface AddressLocation {
      /** Address latitude. */
      latitude?: number | null;
      /** Address longitude. */
      longitude?: number | null;
  }
  /** Full contact details for an address */
  interface FullAddressContactDetails {
      /** First name. */
      firstName?: string | null;
      /** Last name. */
      lastName?: string | null;
      /** Phone number. */
      phone?: string | null;
      /** Company name. */
      company?: string | null;
      /** Tax information (for Brazil only). If ID is provided, `vatId.type` must also be set, `UNSPECIFIED` is not allowed. */
      vatId?: VatId;
  }
  interface VatId {
      /** Customer's tax ID. */
      _id?: string;
      /**
       * Tax type.
       *
       * Supported values:
       * + `CPF`: for individual tax payers
       * + `CNPJ`: for corporations
       */
      type?: VatType;
  }
  /** tax info types */
  enum VatType {
      UNSPECIFIED = "UNSPECIFIED",
      /** CPF - for individual tax payers. */
      CPF = "CPF",
      /** CNPJ - for corporations */
      CNPJ = "CNPJ"
  }
  interface ShippingInformation {
      /** App Def Id of external provider which was a source of shipping info */
      carrierId?: string | null;
      /** Unique code (or ID) of selected shipping option. For example, `"usps_std_overnight"``. */
      code?: string | null;
      /**
       * Shipping option title.
       * For example, `"USPS Standard Overnight Delivery"`, `"Standard"` or `"First-Class Package International"`.
       */
      title?: string;
      /** Shipping logistics. */
      logistics?: DeliveryLogistics;
      /** Shipping costs. */
      cost?: ShippingPrice;
      /** Shipping region. */
      region?: ShippingRegion;
  }
  interface DeliveryLogistics extends DeliveryLogisticsAddressOneOf {
      /** Shipping address and contact details. */
      shippingDestination?: AddressWithContact;
      /** Pickup details. */
      pickupDetails?: PickupDetails;
      /** Expected delivery time in free text. For example, `"3-5 business days"`. */
      deliveryTime?: string | null;
      /** Instructions for carrier. For example, `"Please knock on the door. If unanswered, please call contact number. Thanks."`. */
      instructions?: string | null;
      /** Deprecated - Latest expected delivery date and time in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) format. */
      deliverByDate?: Date;
      /** Expected delivery time. */
      deliveryTimeSlot?: DeliveryTimeSlot;
  }
  /** @oneof */
  interface DeliveryLogisticsAddressOneOf {
      /** Shipping address and contact details. */
      shippingDestination?: AddressWithContact;
      /** Pickup details. */
      pickupDetails?: PickupDetails;
  }
  interface PickupDetails {
      /** Pickup address. */
      address?: PickupAddress;
      /** Pickup method */
      pickupMethod?: PickupMethod;
  }
  /** Physical address */
  interface PickupAddress {
      /** Two-letter country code in [ISO-3166 alpha-2](https://www.iso.org/obp/ui/#search/code/) format. */
      country?: string | null;
      /** Code for a subdivision (such as state, prefecture, or province) in [ISO 3166-2](https://www.iso.org/standard/72483.html) format. */
      subdivision?: string | null;
      /** City name. */
      city?: string | null;
      /** Postal or zip code. */
      postalCode?: string | null;
      /** Street address object, with number, name, and apartment number in separate fields. */
      streetAddress?: StreetAddress;
      /** Main address line (usually street name and number). */
      addressLine1?: string | null;
      /** Free text providing more detailed address info. Usually contains apt, suite, floor. */
      addressLine2?: string | null;
  }
  enum PickupMethod {
      UNKNOWN_METHOD = "UNKNOWN_METHOD",
      STORE_PICKUP = "STORE_PICKUP",
      PICKUP_POINT = "PICKUP_POINT"
  }
  interface DeliveryTimeSlot {
      /** Delivery slot starting time. */
      from?: Date;
      /** Delivery slot ending time. */
      to?: Date;
  }
  interface ShippingPrice {
      /** Shipping price for display purposes. */
      price?: Price;
      /**
       * Total price of shipping after discounts (when relevant), and before tax.
       * @readonly
       */
      totalPriceBeforeTax?: Price;
      /**
       * Shipping price after all discounts (if any exist), and after tax.
       * @readonly
       */
      totalPriceAfterTax?: Price;
      /** Tax details. */
      taxDetails?: ItemTaxFullDetails;
      /**
       * Shipping discount before tax.
       * @readonly
       */
      discount?: Price;
  }
  interface ShippingRegion {
      /** Name of shipping region. For example, `"Metropolitan London"`, or `"Outer Melbourne suburbs"`. */
      name?: string | null;
  }
  enum OrderStatus {
      INITIALIZED = "INITIALIZED",
      APPROVED = "APPROVED",
      CANCELED = "CANCELED"
  }
  interface TaxSummary {
      /**
       * Total tax.
       * @readonly
       */
      totalTax?: Price;
      /**
       * manual tax rate
       * @internal
       * @readonly
       */
      manualTaxRate?: string | null;
  }
  interface OrderTaxInfo {
      /** Calculated tax, added from line items. */
      totalTax?: Price;
      /** The summary of the tax breakdown for all the line items. It will hold for each tax name, the aggregated tax amount paid for it and the tax rate. */
      taxBreakdown?: OrderTaxBreakdown[];
      /**
       * Manual tax rate
       * @internal
       * @readonly
       */
      manualTaxRate?: string | null;
  }
  /**
   * The summary of the tax breakdown for all the line items. It will hold for each tax name, the aggregated tax amount paid for it and the tax rate.
   * Tax breakdown is the tax amount split to the tax authorities that applied on the line item.
   */
  interface OrderTaxBreakdown {
      /** The name of the tax against which this tax amount was calculated. */
      taxName?: string;
      /** The type of tax that was calculated. Depends on the company's nexus settings as well as the jurisdiction's tax laws. */
      taxType?: string;
      /** The name of the jurisdiction in which this tax detail applies. */
      jurisdiction?: string;
      /** The type of the jurisdiction in which this tax detail applies (e.g. Country,State,County,City,Special). */
      jurisdictionType?: JurisdictionType;
      /** The rate at which this tax detail was calculated. */
      rate?: string;
      /** The sum of all the tax from line items that calculated by the tax identifiers. */
      aggregatedTaxAmount?: Price;
      /** The sum of all the taxable amount from line items for tax identifiers. */
      aggregatedTaxableAmount?: Price;
  }
  interface AppliedDiscount extends AppliedDiscountDiscountSourceOneOf {
      /** Applied coupon info. */
      coupon?: Coupon;
      /** Merchant discount. */
      merchantDiscount?: MerchantDiscount;
      /** Automatic Discount */
      discountRule?: DiscountRule;
      /**
       * Discount type.
       * * `"GLOBAL"` - discount applies to entire order.
       * * `"SPECIFIC-ITEMS"` - discount applies to specific items.
       * * `"SHIPPING"` - discount applies to shipping. For example, free shipping.
       */
      discountType?: DiscountType;
      /**
       * IDs of line items discount applies to.
       * Deprecated. Use `line_item_discounts` instead.
       */
      lineItemIds?: string[];
      /** Discount id. */
      _id?: string | null;
      /**
       * Line items the discount applies to.
       * @internal
       */
      lineItemDiscounts?: LineItemDiscount[];
  }
  /** @oneof */
  interface AppliedDiscountDiscountSourceOneOf {
      /** Applied coupon info. */
      coupon?: Coupon;
      /** Merchant discount. */
      merchantDiscount?: MerchantDiscount;
      /** Automatic Discount */
      discountRule?: DiscountRule;
  }
  enum DiscountType {
      GLOBAL = "GLOBAL",
      SPECIFIC_ITEMS = "SPECIFIC_ITEMS",
      SHIPPING = "SHIPPING"
  }
  /** Coupon */
  interface Coupon {
      /** Coupon ID. */
      _id?: string;
      /** Coupon code. */
      code?: string;
      /** Coupon name. */
      name?: string;
      /** Coupon value. */
      amount?: Price;
  }
  interface MerchantDiscount extends MerchantDiscountMerchantDiscountReasonOneOf {
      /**
       * Pre-defined discount reason (optional).
       * * `"ITEMS_EXCHANGE"` - exchange balance acquired as a result of items exchange.
       */
      discountReason?: DiscountReason;
      /** Discount description as free text (optional). */
      description?: string | null;
      /** Discount amount. */
      amount?: Price;
  }
  /** @oneof */
  interface MerchantDiscountMerchantDiscountReasonOneOf {
      /**
       * Pre-defined discount reason (optional).
       * * `"ITEMS_EXCHANGE"` - exchange balance acquired as a result of items exchange.
       */
      discountReason?: DiscountReason;
      /** Discount description as free text (optional). */
      description?: string | null;
  }
  enum DiscountReason {
      UNSPECIFIED = "UNSPECIFIED",
      EXCHANGED_ITEMS = "EXCHANGED_ITEMS"
  }
  interface DiscountRule {
      /** Discount rule ID */
      _id?: string;
      /** Discount rule name */
      name?: DiscountRuleName;
      /** Discount value. */
      amount?: Price;
  }
  interface DiscountRuleName {
      /** Original discount rule name (in site's default language). */
      original?: string;
      /** Translated discount rule name according to buyer language. Defaults to `original` when not provided. */
      translated?: string | null;
  }
  interface LineItemDiscount {
      /** ID of line item the discount applies to. */
      _id?: string;
      /** Total discount for this line item. */
      totalDiscount?: Price;
  }
  interface Activity extends ActivityContentOneOf {
      /** Custom activity details (optional). `activity.type` must be `CUSTOM_ACTIVITY`. */
      customActivity?: CustomActivity;
      /** Merchant comment details (optional). `activity.type` must be `MERCHANT_COMMENT`. */
      merchantComment?: MerchantComment;
      /** Additional info about order refunded activity (optional). `activity.type` must be `ORDER_REFUNDED`. */
      orderRefunded?: OrderRefunded;
      /**
       * Details of the original order for this exchange order. `activity.type` must be `ORDER_CREATED_FROM_EXCHANGE`.
       * @internal
       */
      orderCreatedFromExchange?: OrderCreatedFromExchange;
      /**
       * Details of an order that was created as a result of an exchange of items in this order. `activity.type` must be `NEW_EXCHANGE_ORDER_CREATED`.
       * @internal
       */
      newExchangeOrderCreated?: NewExchangeOrderCreated;
      /**
       * Details of changes made by the Draft Orders API.
       * @internal
       */
      draftOrderChangesApplied?: DraftOrderChangesApplied;
      /**
       * Details of the payment method saved for order
       * @internal
       */
      savedPaymentMethod?: SavedPaymentMethod;
      /**
       * Activity ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Activity author's email.
       * @readonly
       */
      authorEmail?: string | null;
      /**
       * Activity creation date and time.
       * @readonly
       */
      _createdDate?: Date;
      /** Activity type. */
      type?: ActivityType;
  }
  /** @oneof */
  interface ActivityContentOneOf {
      /** Custom activity details (optional). `activity.type` must be `CUSTOM_ACTIVITY`. */
      customActivity?: CustomActivity;
      /** Merchant comment details (optional). `activity.type` must be `MERCHANT_COMMENT`. */
      merchantComment?: MerchantComment;
      /** Additional info about order refunded activity (optional). `activity.type` must be `ORDER_REFUNDED`. */
      orderRefunded?: OrderRefunded;
      /**
       * Details of the original order for this exchange order. `activity.type` must be `ORDER_CREATED_FROM_EXCHANGE`.
       * @internal
       */
      orderCreatedFromExchange?: OrderCreatedFromExchange;
      /**
       * Details of an order that was created as a result of an exchange of items in this order. `activity.type` must be `NEW_EXCHANGE_ORDER_CREATED`.
       * @internal
       */
      newExchangeOrderCreated?: NewExchangeOrderCreated;
      /**
       * Details of changes made by the Draft Orders API.
       * @internal
       */
      draftOrderChangesApplied?: DraftOrderChangesApplied;
      /**
       * Details of the payment method saved for order
       * @internal
       */
      savedPaymentMethod?: SavedPaymentMethod;
  }
  interface CustomActivity {
      /** ID of the app that created the custom activity. */
      appId?: string;
      /** Custom activity type. For example, `"Ticket number set"`. */
      type?: string;
      /** Additional data in key-value form. For example, `{ "Ticket number": "123456" }`. */
      additionalData?: Record<string, string>;
  }
  /** Store owner added a comment */
  interface MerchantComment {
      /** Merchant comment message. */
      message?: string;
  }
  interface OrderRefunded {
      /** Whether order was refunded manually. For example, via payment provider or using cash. */
      manual?: boolean;
      /** Refund amount. */
      amount?: Price;
      /** Reason for refund. */
      reason?: string;
  }
  interface OrderCreatedFromExchange {
      /** ID of the original order for which the exchange happened. */
      originalOrderId?: string;
  }
  interface NewExchangeOrderCreated {
      /** ID of the new order created as a result of an exchange of items. */
      exchangeOrderId?: string;
      /** IDs of the items that were exchanged. */
      lineItems?: LineItemExchangeData[];
  }
  interface LineItemExchangeData {
      /** ID of the exchanged line item. */
      lineItemId?: string;
      /** Line item quantity being exchanged. */
      quantity?: number;
  }
  interface DraftOrderChangesApplied {
      /** Draft order id. */
      draftOrderId?: string;
      /** Reason for edit, given by user (optional). */
      reason?: string | null;
      /** Changes applied to order. */
      changes?: OrderChange[];
  }
  interface OrderChange extends OrderChangeValueOneOf {
      lineItemChanged?: LineItemChanges;
      lineItemAdded?: ManagedLineItem;
      lineItemRemoved?: ManagedLineItem;
      discountAdded?: ManagedDiscount;
      discountRemoved?: ManagedDiscount;
      additionalFeeAdded?: ManagedAdditionalFee;
      additionalFeeRemoved?: ManagedAdditionalFee;
      totalPriceChanged?: TotalPriceChange;
  }
  /** @oneof */
  interface OrderChangeValueOneOf {
      lineItemChanged?: LineItemChanges;
      lineItemAdded?: ManagedLineItem;
      lineItemRemoved?: ManagedLineItem;
      discountAdded?: ManagedDiscount;
      discountRemoved?: ManagedDiscount;
      additionalFeeAdded?: ManagedAdditionalFee;
      additionalFeeRemoved?: ManagedAdditionalFee;
      totalPriceChanged?: TotalPriceChange;
  }
  interface LineItemChanges {
      /** Line item ID. */
      _id?: string;
      /** Item name. */
      name?: ProductName;
      /** Item quantity change. */
      quantity?: LineItemQuantityChange;
      /** Item price change. */
      price?: LineItemPriceChange;
  }
  interface LineItemQuantityChange {
      /** Item quantity before update. */
      originalQuantity?: number;
      /** Item quantity after update. */
      newQuantity?: number;
      /** Difference between original and new quantity. Absolute value. */
      diff?: number;
      /** Type of quantity change: increase or decrease. */
      deltaType?: LineItemQuantityChangeType;
  }
  enum LineItemQuantityChangeType {
      QUANTITY_INCREASED = "QUANTITY_INCREASED",
      QUANTITY_DECREASED = "QUANTITY_DECREASED"
  }
  interface LineItemPriceChange {
      /** Item price before update. */
      originalPrice?: Price;
      /** Item price after update. */
      newPrice?: Price;
  }
  interface ManagedLineItem {
      /** Line item ID. */
      _id?: string;
      /** Item name. */
      name?: ProductName;
      /** Added or removed item quantity. */
      quantity?: number;
  }
  interface ManagedDiscount {
      /** Discount id. */
      _id?: string;
      /** Discount name: coupon name / discount rule name / merchant discount description. */
      name?: TranslatedValue;
      /** Line items discount applies to. */
      affectedLineItems?: LineItemAmount[];
      /** Discount amount. */
      totalAmount?: Price;
  }
  interface TranslatedValue {
      /** Value in site default language. */
      original?: string;
      /** Translated value. */
      translated?: string | null;
  }
  interface LineItemAmount {
      /** Order line item id */
      _id?: string;
      /** Item name. */
      name?: ProductName;
      /** Amount associated with this item. (Discount amount for item / additional fee amount for item) */
      amount?: Price;
  }
  interface ManagedAdditionalFee {
      /** Additional fee id. */
      _id?: string;
      /** Additional fee name. */
      name?: TranslatedValue;
      /** Line items additional fee applies to. */
      affectedLineItems?: LineItemAmount[];
      /** Additional fee amount. */
      totalAmount?: Price;
  }
  interface TotalPriceChange {
      /** Order’s total price after discounts and tax. Before update */
      originalTotal?: Price;
      /** Order’s total price after discounts and tax. After update */
      newTotal?: Price;
  }
  /** Payment method is saved for order */
  interface SavedPaymentMethod {
      /** Payment method name */
      name?: string;
      /** Payment method description */
      description?: string | null;
  }
  enum ActivityType {
      ORDER_REFUNDED = "ORDER_REFUNDED",
      ORDER_PLACED = "ORDER_PLACED",
      ORDER_PAID = "ORDER_PAID",
      ORDER_FULFILLED = "ORDER_FULFILLED",
      ORDER_NOT_FULFILLED = "ORDER_NOT_FULFILLED",
      ORDER_CANCELED = "ORDER_CANCELED",
      DOWNLOAD_LINK_SENT = "DOWNLOAD_LINK_SENT",
      TRACKING_NUMBER_ADDED = "TRACKING_NUMBER_ADDED",
      TRACKING_NUMBER_EDITED = "TRACKING_NUMBER_EDITED",
      TRACKING_LINK_ADDED = "TRACKING_LINK_ADDED",
      SHIPPING_CONFIRMATION_EMAIL_SENT = "SHIPPING_CONFIRMATION_EMAIL_SENT",
      INVOICE_ADDED = "INVOICE_ADDED",
      INVOICE_REMOVED = "INVOICE_REMOVED",
      INVOICE_SENT = "INVOICE_SENT",
      FULFILLER_EMAIL_SENT = "FULFILLER_EMAIL_SENT",
      SHIPPING_ADDRESS_EDITED = "SHIPPING_ADDRESS_EDITED",
      EMAIL_EDITED = "EMAIL_EDITED",
      PICKUP_READY_EMAIL_SENT = "PICKUP_READY_EMAIL_SENT",
      CUSTOM_ACTIVITY = "CUSTOM_ACTIVITY",
      MERCHANT_COMMENT = "MERCHANT_COMMENT",
      ORDER_CREATED_FROM_EXCHANGE = "ORDER_CREATED_FROM_EXCHANGE",
      NEW_EXCHANGE_ORDER_CREATED = "NEW_EXCHANGE_ORDER_CREATED",
      ORDER_PARTIALLY_PAID = "ORDER_PARTIALLY_PAID",
      DRAFT_ORDER_CHANGES_APPLIED = "DRAFT_ORDER_CHANGES_APPLIED",
      SAVED_PAYMENT_METHOD = "SAVED_PAYMENT_METHOD"
  }
  enum AttributionSource {
      UNSPECIFIED = "UNSPECIFIED",
      FACEBOOK_ADS = "FACEBOOK_ADS"
  }
  interface CreatedBy extends CreatedByStringOneOf {
      /**
       * User ID - when the order was created by a Wix user on behalf of a buyer.
       * For example, via POS (point of service).
       */
      userId?: string;
      /** Member ID - when the order was created by a **logged in** site visitor. */
      memberId?: string;
      /** Visitor ID - when the order was created by a site visitor that was **not** logged in. */
      visitorId?: string;
      /** App ID - when the order was created by an external application. */
      appId?: string;
  }
  /** @oneof */
  interface CreatedByStringOneOf {
      /**
       * User ID - when the order was created by a Wix user on behalf of a buyer.
       * For example, via POS (point of service).
       */
      userId?: string;
      /** Member ID - when the order was created by a **logged in** site visitor. */
      memberId?: string;
      /** Visitor ID - when the order was created by a site visitor that was **not** logged in. */
      visitorId?: string;
      /** App ID - when the order was created by an external application. */
      appId?: string;
  }
  interface ChannelInfo {
      /** Sales channel that submitted the order. */
      type?: ChannelType;
      /** Reference to an order ID from an external system. */
      externalOrderId?: string | null;
      /** URL to the order in the external system. */
      externalOrderUrl?: string | null;
  }
  enum ChannelType {
      UNSPECIFIED = "UNSPECIFIED",
      WEB = "WEB",
      POS = "POS",
      EBAY = "EBAY",
      AMAZON = "AMAZON",
      OTHER_PLATFORM = "OTHER_PLATFORM",
      WIX_APP_STORE = "WIX_APP_STORE",
      WIX_INVOICES = "WIX_INVOICES",
      BACKOFFICE_MERCHANT = "BACKOFFICE_MERCHANT",
      WISH = "WISH",
      CLASS_PASS = "CLASS_PASS",
      GLOBAL_E = "GLOBAL_E",
      FACEBOOK = "FACEBOOK",
      ETSY = "ETSY",
      TIKTOK = "TIKTOK",
      FAIRE_COM = "FAIRE_COM"
  }
  interface CustomField {
      /** Custom field value. */
      value?: any;
      /** Custom field title. */
      title?: string;
      /** Translated custom field title. */
      translatedTitle?: string | null;
  }
  interface BalanceSummary {
      /**
       * Current amount left to pay.
       * @readonly
       */
      balance?: Balance;
      /**
       * Sum of all approved and successful payments.
       *
       * The value includes payments that have subsequently been fully or partially refunded.
       * @readonly
       */
      paid?: Price;
      /**
       * Sum of all successfully refunded payments.
       * @readonly
       */
      refunded?: Price;
  }
  /**
   * Order balance. Reflects amount left to be paid on order and is calculated dynamically. Can be negative per balance definition.
   * `amount` field depends on order payment status:
   * + UNSPECIFIED, NOT_PAID: price_summary.total_price
   * + PARTIALLY_PAID : price_summary.total_price - pay_now.total_price
   * + PENDING, REFUNDED, PARTIALLY_REFUNDED, PAID : 0
   */
  interface Balance {
      /**
       * Balance amount.
       *
       * A negative `amount` represents the amount to be refunded. This can happen due to overcharging or the order being modified after a payment has been made.
       * @readonly
       */
      amount?: string;
      /**
       * Amount formatted with currency symbol.
       * @readonly
       */
      formattedAmount?: string;
  }
  interface AdditionalFee {
      /** Additional fee's unique code for future processing. */
      code?: string | null;
      /** Name of additional fee. */
      name?: string;
      /** Additional fee's price. */
      price?: Price;
      /** Tax details. */
      taxDetails?: ItemTaxFullDetails;
      /** SPI implementer's `appId`. */
      providerAppId?: string | null;
      /** Additional fee's price before tax. */
      priceBeforeTax?: Price;
      /** Additional fee's id. */
      _id?: string;
      /**
       * Optional - Line items associated with this additional fee.
       * If no `lineItemIds` are provided, the fee will be associated with the whole cart/checkout/order.
       */
      lineItemIds?: string[];
  }
  interface FulfillmentStatusesAggregate {
      /** Unique string values based on Fulfillment entities statuses */
      statuses?: string[] | null;
  }
  interface ExtendedFields {
      /**
       * Extended field data. Each key corresponds to the namespace of the app that created the extended fields.
       * The value of each key is structured according to the schema defined when the extended fields were configured.
       *
       * You can only access fields for which you have the appropriate permissions.
       *
       * Learn more about [extended fields](https://dev.wix.com/docs/rest/articles/getting-started/extended-fields).
       */
      namespaces?: Record<string, Record<string, any>>;
  }
  /**
   * Common object for tags.
   * Should be use as in this example:
   * message Foo {
   * string id = 1;
   * ...
   * Tags tags = 5
   * }
   *
   * example of taggable entity
   * {
   * id: "123"
   * tags: {
   * tags: {
   * tag_ids:["11","22"]
   * },
   * private_tags: {
   * tag_ids: ["33", "44"]
   * }
   * }
   * }
   */
  interface Tags {
      /** Tags that require an additional permission in order to access them, normally not given to site members or visitors. */
      privateTags?: TagList;
      /** Tags that are exposed to anyone who has access to the labeled entity itself, including site members and visitors. */
      tags?: TagList;
  }
  interface TagList {
      /** List of tag IDs */
      tagIds?: string[];
  }
  interface GetPaymentSettingsResponse {
      /** Retrieved payment settings. */
      paymentSettings?: PaymentSettings;
  }
  interface PaymentSettings {
      /**
       * Whether to apply [3D Secure](https://support.wix.com/en/article/about-3d-secure-3ds-payments-with-third-party-payment-providers) during the payment process.
       *
       * > __Note:__
       * > + Not all payment providers offer this feature in their Wix integration.
       * > + If the SPI call fails, the value set in the [extension configuration](https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/payment-settings-integration-spi/introduction#configuration) for `fallbackValueForRequires3dSecure` will be used.
       */
      requires3dSecure?: boolean | null;
  }
  interface PaymentSettingsSPIConfig {
      /**
       * The value to set for `paymentSettings.requires3dSecure` if the SPI call fails.
       *
       * Default: `false`
       */
      fallbackValueForRequires3dSecure?: boolean;
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
  interface GetPaymentSettingsOptions {
      /** Order. */
      order?: Order;
  }
  
  export { Activity, ActivityContentOneOf, ActivityType, AdditionalFee, Address, AddressLocation, AddressWithContact, AppliedDiscount, AppliedDiscountDiscountSourceOneOf, AttributionSource, Balance, BalanceSummary, BusinessError, BuyerInfo, BuyerInfoIdOneOf, CatalogReference, ChannelInfo, ChannelType, Color, Context, Coupon, CreatedBy, CreatedByStringOneOf, CustomActivity, CustomField, DeliveryLogistics, DeliveryLogisticsAddressOneOf, DeliveryTimeSlot, DescriptionLine, DescriptionLineDescriptionLineValueOneOf, DescriptionLineName, DescriptionLineType, DescriptionLineValueOneOf, DigitalFile, DiscountReason, DiscountRule, DiscountRuleName, DiscountType, DraftOrderChangesApplied, ExtendedFields, FulfillmentStatus, FulfillmentStatusesAggregate, FullAddressContactDetails, GetPaymentSettingsOptions, GetPaymentSettingsRequest, GetPaymentSettingsResponse, IdentificationData, IdentificationDataIdOneOf, IdentityType, ItemTaxFullDetails, ItemType, ItemTypeItemType, ItemTypeItemTypeDataOneOf, JurisdictionType, LineItemAmount, LineItemChanges, LineItemDiscount, LineItemExchangeData, LineItemPriceChange, LineItemQuantityChange, LineItemQuantityChangeType, LineItemTaxBreakdown, LineItemTaxInfo, LocationAndQuantity, ManagedAdditionalFee, ManagedDiscount, ManagedLineItem, MerchantComment, MerchantDiscount, MerchantDiscountMerchantDiscountReasonOneOf, NewExchangeOrderCreated, Order, OrderChange, OrderChangeValueOneOf, OrderCreatedFromExchange, OrderLineItem, OrderRefunded, OrderStatus, OrderTaxBreakdown, OrderTaxInfo, PaymentOptionType, PaymentSettings, PaymentSettingsSPIConfig, PaymentStatus, PhysicalProperties, PickupAddress, PickupDetails, PickupMethod, PlainTextValue, Price, PriceDescription, PriceSummary, ProductName, SavedPaymentMethod, ShippingInformation, ShippingPrice, ShippingRegion, StreetAddress, SubscriptionFrequency, SubscriptionInfo, SubscriptionSettings, TagList, Tags, TaxSummary, TotalPriceChange, TranslatedValue, VatId, VatType, WeightUnit };
}
