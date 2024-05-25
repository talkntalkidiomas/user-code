declare module "wix-restaurants-catalogs-backend" {
  /**
   * Collection of menus and discounts available in a specific location.
   * Use a [draft catalog](https://dev.wix.com/api/rest/wix-restaurants/catalogs/draft-catalogs) to publish multiple changes to a catalog at the same time.
   * You can read more about catalogs in the [introduction](https://dev.wix.com/api/rest/wix-restaurants/catalogs/introduction).
   */
  interface Catalog {
      /**
       * Catalog ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * ID of the location the catalog belongs to. See the [Locations API](https://dev.wix.com/api/rest/business-info/locations/introduction) for more details.
       * @readonly
       */
      locationId?: string | null;
      /**
       * Whether the catalog is archived.
       * __Note:__ Archived catalogs can't be updated.
       * @readonly
       */
      archived?: boolean;
      /**
       * Date and time the last time a draft catalog has been published in `yyyy-mm-ddThh:mm:sssZ` format and [Coordinated Universal Time (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time).
       * @readonly
       */
      draftPublishedDate?: Date;
      /**
       * Revision number. Increments by 1 each time the catalog is updated.
       * To prevent conflicting changes, the existing `revision` must be used when updating a catalog.
       * @internal
       * @readonly
       */
      revision?: string | null;
  }
  interface CreateDraftCatalogResponse {
      /** Created draft catalog. */
      catalog?: Catalog;
  }
  interface PublishDraftCatalogResponse {
      /** Published catalog. */
      catalog?: Catalog;
  }
  interface DiscardDraftCatalogResponse {
  }
  interface NewVariation {
      /** Variation name. */
      name?: string;
  }
  interface BulkCreateVariationsResponse {
      /** Information about the created variations. */
      results?: BulkItemResult[];
      /** Bulk Create Variations metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkItemResult {
      /** Metadata of the item. */
      entityMetadata?: ItemMetadata;
      /** Item. */
      entity?: Item;
  }
  interface ItemMetadata {
      /** Item id. Should always be provided, unless it's impossible (e.g when failing to create an item) */
      _id?: string | null;
      /** The index of the item within the request array to allow the caller to correlate the request and response items */
      originalIndex?: number;
      /** Whether the action requested was successful for this item. When this value is false, error should be populated */
      success?: boolean;
      /** In case of failure, details about the error */
      error?: ApplicationError;
  }
  interface ApplicationError {
      code?: string;
      description?: string;
      data?: Record<string, any> | null;
  }
  /**
   * Anything that customers can buy in the restaurant. Items can be of type `DISH` or `VARIATION`.
   * You can read more about items in the [introduction](https://dev.wix.com/api/rest/wix-restaurants/catalogs/introduction).
   */
  interface Item {
      /**
       * Item ID.
       * @readonly
       */
      _id?: string | null;
      /** Item name. */
      name?: string | null;
      /** Item description. */
      description?: string | null;
      /** Item price. */
      price?: Money;
      /** URL of the item's image file. */
      imageUrl?: string | null;
      /** Item labels. For example spicy, hot, vegan, gluten-free, or organic. */
      labels?: Labels;
      /** Whether the item is in stock. */
      inStock?: boolean | null;
      /** Tax rate of the item in percent. */
      taxRate?: string | null;
      /**
       * Whether the item is archived. Defaults to `false`. **Note:** Archived items can't be updated.
       * @readonly
       */
      archived?: boolean | null;
      /**
       * Visibility criteria that must be met for the item to appear in the live site.
       * In case of multiple visibility criteria, every criterion must be fulfilled.
       */
      visibilityCriteria?: VisibilityCriteria;
      /** Items customers can choose to modify a dish. Can be an extra, selection, or deselection. */
      dishOptions?: DishOptions;
      /** Whether a customer can add a special request when ordering this item. Defaults to `true`. */
      acceptSpecialRequest?: boolean | null;
      /**
       * Item type.
       * @readonly
       */
      type?: ItemType;
  }
  /**
   * Money.
   * Default format to use. Sufficiently compliant with majority of standards: w3c, ISO 4217, ISO 20022, ISO 8583:2003.
   */
  interface Money {
      /** Monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). Optionally, a single (-), to indicate that the amount is negative. */
      value?: string;
      /**
       * Currency code. Must be valid ISO 4217 currency code (e.g., USD).
       * @readonly
       */
      currency?: string;
      /**
       * Monetary amount. Decimal string in local format (e.g., 1 000,30). Optionally, a single (-), to indicate that the amount is negative.
       * @internal
       * @readonly
       */
      formattedValue?: string | null;
  }
  interface Labels {
      values?: string[];
  }
  interface VisibilityCriteria {
      /**
       * Whether the entity appears in the live site. Defaults to `true`.
       * If `false`, the entity isn't rendered in the live site, even if each visibility criterion is fulfilled.
       */
      visible?: boolean | null;
      /** Fulfillment types. */
      fulfillmentTypes?: FulfillmentType[];
      /** Ordering platforms. */
      platforms?: Platform[];
      /** Time periods when the entity is available. */
      availability?: Availability;
  }
  enum FulfillmentType {
      UNSPECIFIED_FULFILLMENT_TYPE = "UNSPECIFIED_FULFILLMENT_TYPE",
      DELIVERY = "DELIVERY",
      PICKUP_OR_DINE_IN = "PICKUP_OR_DINE_IN"
  }
  enum Platform {
      UNSPECIFIED_PLATFORM = "UNSPECIFIED_PLATFORM",
      SITE = "SITE",
      MOBILE_SITE = "MOBILE_SITE",
      WIX_APP = "WIX_APP",
      CALL_CENTER = "CALL_CENTER",
      CHAT_BOT = "CHAT_BOT"
  }
  interface Availability {
      /**
       * Weekly recurring time periods when the entity is available.
       * Limited to 100 time periods.
       */
      periods?: TimePeriod[];
      /** Exceptions to the entity's regular availability. The entity can be available or not available during the special hour period. */
      specialHourPeriods?: SpecialHourPeriod[];
  }
  /** Weekly recurring time periods when the entity is available. */
  interface TimePeriod {
      /** Day of the week the period starts on. */
      openDay?: DayOfWeek;
      /**
       * Time the period starts in 24-hour [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) extended format. Valid values are 00:00-24:00, where 24:00 represents
       * midnight at the end of the specified day.
       */
      openTime?: string;
      /** Day of the week the period ends on. */
      closeDay?: DayOfWeek;
      /**
       * Time the period ends in 24-hour [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) extended format. Valid values are 00:00-24:00, where 24:00 represents
       * midnight at the end of the specified day.
       * __Note:__ If `openDay` and `closeDay` specify the same day of the week `closeTime` must be later than `openTime`.
       */
      closeTime?: string;
  }
  enum DayOfWeek {
      UNDEFINED = "UNDEFINED",
      SUN = "SUN",
      MON = "MON",
      TUE = "TUE",
      WED = "WED",
      THU = "THU",
      FRI = "FRI",
      SAT = "SAT"
  }
  /** Exception to the business's regular hours. The business can be open or closed during the exception. */
  interface SpecialHourPeriod {
      /** Start date and time of the exception in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format and [Coordinated Universal Time (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time). */
      startDate?: string;
      /** End date and time of the exception in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format and [Coordinated Universal Time (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time). */
      endDate?: string;
      /** Whether the item is available during the exception. Defaults to `true`. */
      available?: boolean;
      /** Name of the special hour period. In the Business Manager the special hour period is called event. */
      eventName?: string | null;
  }
  interface DishOptions {
      values?: DishOption[];
  }
  interface DishOption {
      /** Dish option name. */
      name?: string;
      /** @readonly */
      type?: Type;
      /** Item of type `DISH` or `VARIATION` that customers can select. For example a dish size. Customers can choose only a single selection per dish. */
      selection?: Selection;
      /** Item of type `DISH` or `VARIATION` that customers can add to a dish. For example a topping. Customers can add multiple extras per dish. */
      extras?: Extras;
      /** Item of type `DISH` or `VARIATION` that customers can remove from a dish. For example a specific ingredient. Customers can remove multiple deselections per dish. */
      deselection?: Deselection;
  }
  interface DishOptionItem {
      /** Item ID of the dish option. */
      itemId?: string;
      /** Dish option price. `0` for free choices that are included in the dish's price. */
      price?: Money;
  }
  interface Selection {
      /** Item ID of the default choice. */
      defaultChoice?: string | null;
      /** Item IDs of the available choices. */
      availableChoices?: DishOptionItem[];
  }
  interface Extras {
      /** Item IDs of the default choices. */
      defaultChoices?: string[];
      /** Minimum number of extras a customer must choose. Defaults to `0`. Must be lower than or equal to the value of `availableChoices`. */
      minChoices?: number | null;
      /** Maximum number of extras a customer can choose. Defaults to the value of `availableChoices`. Must be greater than or equal to the value of `minChoices`. */
      maxChoices?: number | null;
      /** Item IDs of the available choices. */
      availableChoices?: DishOptionItem[];
  }
  interface Deselection {
      /** Item IDs of the available choices. */
      availableChoices?: DishOptionItem[];
  }
  enum Type {
      UNSPECIFIED_DISH_OPTION_TYPE = "UNSPECIFIED_DISH_OPTION_TYPE",
      SELECTION = "SELECTION",
      EXTRAS = "EXTRAS",
      DESELECTION = "DESELECTION"
  }
  enum ItemType {
      UNSPECIFIED_ITEM_TYPE = "UNSPECIFIED_ITEM_TYPE",
      DISH = "DISH",
      VARIATION = "VARIATION"
  }
  interface BulkActionMetadata {
      /** For how many items the requested action was successful */
      totalSuccesses?: number;
      /** For how many items the requested action was not successful */
      totalFailures?: number;
      /** total number of failures without details because detailed-failure-threshold exceeded */
      undetailedFailures?: number;
  }
  interface BulkUpdateItemsResponse {
      /** Information about the updated items. */
      results?: BulkItemResult[];
      /** Bulk Update Items metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface CreateDishRequest {
      /** ID of the menu the dish will belong to. */
      menuId: string;
      /** ID of the section the dish will belong to. */
      sectionId: string;
      /** Dish to create. */
      dish: Item;
  }
  interface BulkCreateDishesResponse {
      /** Information about the created dishes. */
      results?: BulkItemResult[];
      /** Bulk Create Dishes metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  /**
   * Collection of sections that show what customers can buy in the restaurant.
   * You can read more about menus in the [introduction](https://dev.wix.com/api/rest/wix-restaurants/catalogs/introduction).
   */
  interface Menu {
      /**
       * Menu ID.
       * @readonly
       */
      _id?: string | null;
      /** Menu name. */
      name?: string | null;
      /** Menu description. */
      description?: string | null;
      /** URL of the menu's image file. */
      imageUrl?: string | null;
      /**
       * Visibility criteria that must be met for the menu to appear in the live site.
       * In case of multiple visibility criteria, every criterion must be fulfilled.
       */
      visibilityCriteria?: VisibilityCriteria;
      /** IDs of the sections that are included in the menu. */
      sectionIds?: MenuSectionIds;
      /**
       * Whether the menu is archived. Defaults to `false`. **Note:** Archived menus can't be updated.
       * @readonly
       */
      archived?: boolean | null;
  }
  interface MenuSectionIds {
      values?: string[];
  }
  interface BulkCreateMenusResponse {
      /** Information about the created menus. */
      results?: BulkMenuResult[];
      /** Bulk Create Menus metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkMenuResult {
      /** Menu metadata. */
      entityMetadata?: ItemMetadata;
      /** Menu. */
      entity?: Menu;
  }
  interface BulkUpdateMenusResponse {
      /** Information about the updated menus. */
      results?: BulkMenuResult[];
      /** Bulk Update Menus metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  /**
   * Collection of dishes that customers can buy in the restaurant.
   * You can read more about sections in the [introduction](https://dev.wix.com/api/rest/wix-restaurants/catalogs/introduction).
   */
  interface Section {
      /**
       * Section ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * ID of the menu the section belongs to.
       * @readonly
       */
      menuId?: string | null;
      /** Section name. */
      name?: string | null;
      /** Section description. */
      description?: string | null;
      /** URL of the section's image file. */
      imageUrl?: string | null;
      /** IDs of the items that belong to the section. */
      itemIds?: SectionItemIds;
      /**
       * Visibility criteria that must be met for the section to appear in the live site.
       * In case of multiple visibility criteria, every criterion must be fulfilled.
       */
      visibilityCriteria?: VisibilityCriteria;
      /**
       * Whether the section is archived. Defaults to `false`. **Note:** Archived sections can't be updated.
       * @readonly
       */
      archived?: boolean | null;
  }
  /** Item IDs of the dishes that belong to this section. */
  interface SectionItemIds {
      values?: string[];
  }
  interface CreateSectionRequest {
      /** ID of the menu the section will belong to. */
      menuId: string;
      /** Section to create. */
      section: Section;
  }
  interface BulkCreateSectionsResponse {
      /** Information about the created sections. */
      results?: BulkSectionResult[];
      /** Bulk Create Sections metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkSectionResult {
      /** Section metadata. */
      entityMetadata?: ItemMetadata;
      /** Section. */
      entity?: Section;
  }
  interface UpdateSectionRequest {
      /** ID of the menu the section will belong to. */
      menuId: string;
      /** Section to update. */
      section: Section;
  }
  interface BulkUpdateSectionsResponse {
      /** Information about the updated sections. */
      results?: BulkSectionResult[];
      /** Bulk Update Sections metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkArchiveMenusResponse {
      /** Information about the archived menus. */
      results?: BulkMenuResult[];
      /** Bulk Archive Menus metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkUnarchiveMenusResponse {
      /** Information about the unarchived menus. */
      results?: BulkMenuResult[];
      /** Bulk Unarchive Menus metadata. */
      bulkActionMetadata?: BulkActionMetadata;
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
  interface Paging {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface ListCatalogsResponse {
      /** Retrieved catalogs. */
      catalogs?: Catalog[];
  }
  interface GetMenuResponse {
      /** Retrieved menu. */
      menu?: Menu;
  }
  interface GetSectionResponse {
      /** Retrieved section. */
      section?: Section;
  }
  interface UpdateMenuResponse {
      /** Updated Menu. */
      menu?: Menu;
  }
  interface UpdateSectionResponse {
      /** Updated section. */
      section?: Section;
  }
  interface ListMenusResponse {
      /** Retrieved menus. */
      menus?: Menu[];
  }
  interface ListSectionsResponse {
      /** Sections list. */
      sections?: Section[];
  }
  interface CreateMenuResponse {
      /** Created Menu. */
      menu?: Menu;
  }
  interface ArchiveMenuResponse {
      /** Archived menu. */
      menu?: Menu;
  }
  interface UnarchiveMenuResponse {
      /** Unarchived menu. */
      menu?: Menu;
  }
  interface CreateSectionResponse {
      /** Created section. */
      section?: Section;
  }
  interface GetItemResponse {
      /** Retrieved item. */
      item?: Item;
  }
  interface ListItemsResponse {
      /** Retrieved items. */
      items?: Item[];
  }
  interface UpdateItemResponse {
      /** Updated Item. */
      item?: Item;
  }
  interface CreateDishResponse {
      /** Created Dish. */
      dish?: Item;
  }
  interface CreateVariationResponse {
      /** Created Variation. */
      variation?: Item;
  }
  interface BulkCreateVariationsOptions {
      returnFullEntity?: boolean;
  }
  interface BulkUpdateItemsOptions {
      returnFullEntity?: boolean;
  }
  interface BulkCreateDishesOptions {
      returnFullEntity?: boolean;
  }
  interface BulkCreateMenusOptions {
      returnFullEntity?: boolean;
  }
  interface BulkUpdateMenusOptions {
      returnFullEntity?: boolean;
  }
  interface BulkCreateSectionsOptions {
      returnFullEntity?: boolean;
  }
  interface BulkUpdateSectionsOptions {
      returnFullEntity?: boolean;
  }
  interface BulkArchiveMenusOptions {
      returnFullEntity?: boolean;
  }
  interface BulkUnarchiveMenusOptions {
      returnFullEntity?: boolean;
  }
  interface ListCatalogsOptions {
      sort?: Sorting;
      paging?: Paging;
      archived?: boolean;
      locationIds?: string[];
  }
  interface GetMenuIdentifiers {
      catalogId: string;
      menuId: string;
  }
  interface GetSectionIdentifiers {
      catalogId: string;
      menuId: string;
      sectionId: string;
  }
  interface UpdateMenuIdentifiers {
      catalogId: string;
  }
  interface UpdateMenuOptions {
      menu: Menu;
  }
  interface UpdateSectionIdentifiers {
      catalogId: string;
      menuId: string;
  }
  interface UpdateSectionOptions {
      section: Section;
  }
  interface ListMenusOptions {
      fieldMask?: string[];
      archived?: boolean;
  }
  interface ListSectionsOptions {
      fieldMask?: string[];
      archived?: boolean;
  }
  interface ArchiveMenuIdentifiers {
      catalogId: string;
      menuId: string;
  }
  interface UnarchiveMenuIdentifiers {
      catalogId: string;
      menuId: string;
  }
  interface CreateSectionIdentifiers {
      catalogId: string;
      menuId: string;
  }
  interface GetItemIdentifiers {
      catalogId: string;
      itemId: string;
  }
  interface GetItemOptions {
      includeVisibilityCriteria?: boolean;
  }
  interface ListItemsOptions {
      fieldMask?: string[];
      archived?: boolean;
  }
  interface UpdateItemIdentifiers {
      catalogId: string;
  }
  interface UpdateItemOptions {
      item: Item;
  }
  interface CreateDishIdentifiers {
      catalogId: string;
      menuId: string;
      sectionId: string;
  }
  
  function createDraftCatalog(catalogId: string): Promise<CreateDraftCatalogResponse>;
  function publishDraftCatalog(catalogId: string): Promise<PublishDraftCatalogResponse>;
  function discardDraftCatalog(catalogId: string): Promise<DiscardDraftCatalogResponse>;
  function bulkCreateVariations(catalogId: string, variations: NewVariation[], options: BulkCreateVariationsOptions): Promise<BulkCreateVariationsResponse>;
  function bulkUpdateItems(catalogId: string, items: Item[], options: BulkUpdateItemsOptions): Promise<BulkUpdateItemsResponse>;
  function bulkCreateDishes(catalogId: string, createDishRequests: CreateDishRequest[], options: BulkCreateDishesOptions): Promise<BulkCreateDishesResponse>;
  function bulkCreateMenus(catalogId: string, menus: Menu[], options: BulkCreateMenusOptions): Promise<BulkCreateMenusResponse>;
  function bulkUpdateMenus(catalogId: string, menus: Menu[], options: BulkUpdateMenusOptions): Promise<BulkUpdateMenusResponse>;
  function bulkCreateSections(catalogId: string, createSectionRequests: CreateSectionRequest[], options: BulkCreateSectionsOptions): Promise<BulkCreateSectionsResponse>;
  function bulkUpdateSections(catalogId: string, updateSectionsRequests: UpdateSectionRequest[], options: BulkUpdateSectionsOptions): Promise<BulkUpdateSectionsResponse>;
  function bulkArchiveMenus(catalogId: string, ids: string[], options: BulkArchiveMenusOptions): Promise<BulkArchiveMenusResponse>;
  function bulkUnarchiveMenus(catalogId: string, ids: string[], options: BulkUnarchiveMenusOptions): Promise<BulkUnarchiveMenusResponse>;
  function listCatalogs(options: ListCatalogsOptions): Promise<ListCatalogsResponse>;
  function getMenu(identifiers: GetMenuIdentifiers): Promise<GetMenuResponse>;
  function getSection(identifiers: GetSectionIdentifiers): Promise<GetSectionResponse>;
  function updateMenu(identifiers: UpdateMenuIdentifiers, options: UpdateMenuOptions): Promise<UpdateMenuResponse>;
  function updateSection(identifiers: UpdateSectionIdentifiers, options: UpdateSectionOptions): Promise<UpdateSectionResponse>;
  function listMenus(catalogId: string, options: ListMenusOptions): Promise<ListMenusResponse>;
  function listSections(catalogId: string, options: ListSectionsOptions): Promise<ListSectionsResponse>;
  function createMenu(catalogId: string, menu: Menu): Promise<CreateMenuResponse>;
  function archiveMenu(identifiers: ArchiveMenuIdentifiers): Promise<ArchiveMenuResponse>;
  function unarchiveMenu(identifiers: UnarchiveMenuIdentifiers): Promise<UnarchiveMenuResponse>;
  function createSection(identifiers: CreateSectionIdentifiers, section: Section): Promise<CreateSectionResponse>;
  function getItem(identifiers: GetItemIdentifiers, options: GetItemOptions): Promise<GetItemResponse>;
  function listItems(catalogId: string, options: ListItemsOptions): Promise<ListItemsResponse>;
  function updateItem(identifiers: UpdateItemIdentifiers, options: UpdateItemOptions): Promise<UpdateItemResponse>;
  function createDish(identifiers: CreateDishIdentifiers, dish: Item): Promise<CreateDishResponse>;
  function createVariation(catalogId: string, name: string): Promise<CreateVariationResponse>;
  
  export { archiveMenu, bulkArchiveMenus, bulkCreateDishes, bulkCreateMenus, bulkCreateSections, bulkCreateVariations, bulkUnarchiveMenus, bulkUpdateItems, bulkUpdateMenus, bulkUpdateSections, createDish, createDraftCatalog, createMenu, createSection, createVariation, discardDraftCatalog, getItem, getMenu, getSection, listCatalogs, listItems, listMenus, listSections, publishDraftCatalog, unarchiveMenu, updateItem, updateMenu, updateSection };
}
