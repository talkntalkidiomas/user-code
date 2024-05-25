/**
 * The wix-pricing-plans-backend module contains functionality for managing your
 *  site's pricing plans from backend code.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.html#)
 */
declare module 'wix-pricing-plans-backend' {
    /**
     * The Pricing Plans Checkout API provides functionality for ordering and checking out pricing plan orders created in the Wix Pricing Plans app or using this Wix Pricing Plans API.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.html#checkout)
     */
    const checkout: Checkout;
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.html#events)
     */
    const events: Events;
    /**
     * The Pricing Plan Orders API provides functionality for managing pricing plan orders created in the Wix Pricing Plans app or using this Wix Pricing Plans API.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.html#orders)
     */
    const orders: Orders;
    /**
     * Archives a single pricing plan.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.html#archivePlan)
     */
    function archivePlan(id: string): Promise<Plan>;
    /**
     * Changes the display order of the pricing plans on the site page and in the Dashboard.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.html#arrangePlans)
     */
    function arrangePlans(ids: string[]): Promise<void>;
    /**
     * Sets all pricing plans as not primary.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.html#clearPrimary)
     */
    function clearPrimary(): Promise<void>;
    /**
     * Creates a pricing plan.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.html#createPlan)
     */
    function createPlan(planInfo: CreatePlanInfo): Promise<Plan>;
    /**
     * Gets an existing pricing plan by ID.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.html#getPlan)
     */
    function getPlan(id: string): Promise<Plan>;
    /**
     * Gets statistics about the pricing plans.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.html#getPlanStats)
     */
    function getPlanStats(): Promise<PlansStats>;
    /**
     * Lists public pricing plans.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.html#listPublicPlans)
     */
    function listPublicPlans(planIds?: string[], options?: ListPublicPlanOptions): Promise<PublicPlans[]>;
    /**
     * Marks a pricing plan as the primary pricing plan.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.html#makePlanPrimary)
     */
    function makePlanPrimary(id: string): Promise<Plan>;
    /**
     * Creates a query to retrieve a list of public pricing plans.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.html#queryPublicPlans)
     */
    function queryPublicPlans(): Promise<PublicPlansQueryBuilder>;
    /**
     * Sets visibility for non-archived pricing plans. Public plans are plans that are set to visible.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.html#setPlanVisibility)
     */
    function setPlanVisibility(id: string, visible: boolean): Promise<Plan>;
    /**
     * Updates a pricing plan.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.html#updatePlan)
     */
    function updatePlan(planInfo: UpdatePlanInfo): Promise<Plan>;
    type CreatePlanInfo = {
        /**
         * Plan name.
         */
        name: string;
        /**
         * Plan price, payment schedule, and expiration.
         */
        pricing: PricingInfo;
        /**
         * Plan description.
         */
        description?: string;
        /**
         * List of text strings that promote the pricing plan (for example, "Plenty of parking" or "Free gift on your birthday").
         */
        perks?: string[];
        /**
         * Whether the plan is public (visible to site visitors). Defaults to `true`.
         */
        public?: boolean;
        /**
         * Whether the same buyer can purchase the plan multiple times. `1` means the buyer can only purchase the plan once. An empty value or `0` means no limitation. Defaults to empty.
         */
        maxPurchasesPerBuyer?: number;
        /**
         * Whether the buyer can start the plan at a later date. Defaults to `false`.
         */
        allowFutureStartDate?: boolean;
        /**
         * Whether the buyer is allowed to cancel their plan. Defaults to `true`.  If `true`, calling the [`cancelOrder()`](wix-paid-plans/cancelOrder) function returns an error.
         */
        buyerCanCancel?: boolean;
        /**
         * Any terms and conditions that apply to the plan. This information is displayed during checkout.
         */
        termsAndConditions?: string;
    };
    /**
     * Length of one payment cycle, for example, 3 months to have quarterly payments.
     */
    type Duration = {
        /**
         * Number of days, months, weeks, or years.
         */
        count: number;
        /**
         * Days, months, weeks, or years.
         * One of:
         *  + `"DAY"`
         *  + `"WEEK"`
         *  + `"MONTH"`
         *  + `"YEAR"`
         */
        unit: string;
    };
    /**
     * Length of one payment cycle, for example, 3 months to have quarterly payments.
     */
    type DurationInfo = {
        /**
         * Number of days, months, weeks, or years.
         */
        count?: number;
        /**
         * Days, months, weeks, or years.
         * One of:
         *  + `"DAY"`
         *  + `"WEEK"`
         *  + `"MONTH"`
         *  + `"YEAR"`
         */
        unit?: string;
    };
    type ListPublicPlanOptions = {
        /**
         * Number of public pricing plans to list. Defaults to 50.
         */
        limit?: number;
        /**
         * Number of public pricing plans to skip. Defaults to 0.
         */
        skip?: number;
    };
    /**
     * Amount for a single payment. For subscriptions, this is the amount to pay for each single payment cycle and it is required. Otherwise, the single payment for the entire plan.
     */
    type Money = {
        /**
         * Monetary amount. Decimal string with a period as a decimal separator (for example, 3.99). Cannot be negative.
         */
        value: string;
        /**
         * Currency code. Must be a valid [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code (for example, USD).
         */
        currency: string;
    };
    /**
     * Amount for a single payment. For subscriptions, this is the amount to pay for each single payment cycle and it is required. Otherwise, the single payment for the entire plan.
     */
    type MoneyInfo = {
        /**
         * Monetary amount. Decimal string with a period as a decimal separator (for example, 3.99). Cannot be negative.
         */
        value?: string;
        /**
         * Currency code. Must be a valid [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code (for example, USD).
         */
        currency?: string;
    };
    type Options = {
        /**
         * Whether to suppress permission checks from running for the operation.
         *
         * Default: `false`
         */
        suppressAuth?: boolean;
    };
    /**
     * A text string promoting the pricing plan (for example, "Plenty of parking" or "Free gift on your birthday").
     */
    type Perk = {
        /**
         * Text listing one perk of this plan.
         */
        value: string;
    };
    /**
     * List of text strings that promote the pricing plan (for example, "Plenty of parking" or "Free gift on your birthday").
     */
    type Perks = {
        /**
         * A list of strings promoting the pricing plan.
         */
        value?: Perk[];
    };
    type Plan = {
        /**
         * Plan ID.
         */
        _id: string;
        /**
         * Plan name.
         */
        name: string;
        /**
         * Plan description.
         */
        description: string;
        /**
         * List of text strings that promote the pricing plan (for example, "Plenty of parking" or "Free gift on your birthday").
         */
        perks: string[];
        /**
         * Plan price, payment schedule, and expiration.
         */
        pricing: Pricing;
        /**
         * Whether the plan is public (visible to site visitors).
         */
        public: boolean;
        /**
         * Whether the plan is archived. Archived plans are not visible and can't be purchased anymore, but existing purchases remain in effect.
         */
        archived: boolean;
        /**
         * Whether the plan is marked as primary. If `true`, the plan is highlighted on the site with a custom ribbon. Defaults to `false`.
         */
        primary: boolean;
        /**
         * Whether the plan has any orders (including pending and unpaid orders).
         */
        hasOrders: boolean;
        /**
         * Date plan was created.
         */
        _createdDate: Date;
        /**
         * Date plan was last updated.
         */
        _updatedDate: Date;
        /**
         * URL-friendly version of the plan name. Unique across all plans in the same site.
         */
        slug: string;
        /**
         * Whether the buyer can start the plan at a later date.
         */
        allowFutureStartDate: boolean;
        /**
         * Whether the buyer is allowed to cancel their plan. If `false`, calling the [`cancelOrder()`](wix-paid-plans/cancelOrder) function returns an error.
         */
        buyerCanCancel: boolean;
        /**
         * Whether the same buyer can purchase the plan multiple times. `1` means the buyer can only purchase the plan once. An empty value or `0` means no limitation.
         */
        maxPurchasesPerBuyer?: number;
        /**
         * Any terms and conditions that apply to the plan. This information is displayed during checkout.
         */
        termsAndConditions?: string;
    };
    type Plans = {
        /**
         * List of public and hidden pricing plans.
         */
        plans: Plan[];
    };
    type PlansStats = {
        /**
         * Total number of plans created, including active plans (both public and hidden) and archived plans.
         */
        total: number;
    };
    /**
     * Pricing plan's pricing details, such as the plan price, payment schedule, and expiration. The payment schedule and expiration are based on one of three [pricing models](wix-pricing-plans-backend/introduction): `subscription`, `singlePaymentForDuration`, or `singlePaymentUnlimited`. Only one pricing model can be specified per plan.
     */
    type Pricing = {
        /**
         * Pricing model indicating that the plan has recurring payments. This type of subscription is not a "Wix subscription," which encompasses various types of subscriptions, such as Wix Stores subscriptions, Wix invoice subscriptions, and *all* pricing plan models.
         */
        subscription?: Recurrence;
        /**
         * Pricing model indicating that the plan is paid with a single payment per cycle and what the length of the cycle is. The cycle is the duration of the plan, not a payment cycle.
         */
        singlePaymentForDuration?: Duration;
        /**
         * Pricing model indicating that the plan is paid in one single payment and that the plan is valid until canceled.
         */
        singlePaymentUnlimited?: boolean;
        /**
         * Amount for a single payment. For subscriptions, this is the amount to pay for each single payment cycle and it is required. Otherwise, the single payment for the entire plan.
         */
        price: Money;
        /**
         * Free trial period for the plan in days. Available only for recurring plans, meaning plans whose pricing model is `subscription`.
         */
        freeTrialDays?: number;
    };
    /**
     * Pricing plan's pricing details, such as the plan price, payment schedule, and expiration. The payment schedule and expiration are based on one of three [pricing models](wix-pricing-plans-backend/introduction): `subscription`, `singlePaymentForDuration`, or `singlePaymentUnlimited`.
     */
    type PricingInfo = {
        /**
         * Pricing model indicating that the plan has recurring payments.
         */
        subscription?: Recurrence;
        /**
         * Pricing model indicating that the plan is paid with a single payment per cycle and what the Length of the cycle is. The cycle is the duration of the plan, not a payment cycle.
         */
        singlePaymentForDuration?: Duration;
        /**
         * Pricing model indicating that the plan is paid in one single payment and that the plan is valid until canceled.
         */
        singlePaymentUnlimited?: boolean;
        /**
         * Amount for a single payment. For subscriptions, this is the amount to pay for each single payment cycle and it is required. Otherwise, the single payment for the entire plan.
         */
        price?: MoneyInfo;
        /**
         * Free trial period for the plan in days. Available only for recurring plans, meaning plans whose pricing model is `subscription`.
         */
        freeTrialDays?: number;
    };
    /**
     * Public pricing plan entity containing information about the pricing plan. Can be read by any site member or visitor.
     */
    type PublicPlan = {
        /**
         * Plan ID.
         */
        _id: string;
        /**
         * Plan name.
         */
        name: string;
        /**
         * Plan description.
         */
        description: string;
        /**
         * List of text strings that promote the pricing plan (for example, "Plenty of parking" or "Free gift on your birthday").
         */
        perks: string[];
        /**
         * Plan price, payment schedule, and expiration.
         */
        pricing: Pricing;
        /**
         * Whether the plan is marked as primary. If `true`, the plan is highlighted on the site with a custom ribbon. Defaults to `false`.
         */
        primary: boolean;
        /**
         * Date plan was created.
         */
        _createdDate: Date;
        /**
         * Date plan was last updated.
         */
        _updatedDate: Date;
        /**
         * URL-friendly version of the plan name. Unique across all plans in the same site.
         */
        slug: string;
        /**
         * Whether the buyer can start the plan at a later date. Defaults to `false`.
         */
        allowFutureStartDate: boolean;
        /**
         * Whether the buyer is allowed to cancel their plan. Defaults to `false`. If `false`, calling the [`cancelOrder()`](wix-paid-plans/cancelOrder) function returns an error.
         */
        buyerCanCancel: boolean;
        /**
         * Whether the same buyer can purchase the plan multiple times. `1` means the buyer can only purchase the plan once. An empty value or `0` means no limitation. Defaults to empty.
         */
        maxPurchasesPerBuyer?: number;
        /**
         * Any terms and conditions that apply to the plan. This information is displayed during checkout.
         */
        termsAndConditions?: string;
    };
    type PublicPlans = {
        /**
         * List of public pricing plans.
         */
        publicPlans: PublicPlan[];
    };
    /**
     * The pricing plan has recurring payments.
     */
    type Recurrence = {
        /**
         * Length of one payment cycle, for example, 1 month to have monthly payments. Multiply `cycleDuration`'s `count` by `cycleCount` to get the subscription duration. *Currently, only a value of `1` is supported.*
         */
        cycleDuration: Duration;
        /**
         * Number of cycles. Zero for unlimited plans and plans that are valid until canceled.
         */
        cycleCount: number;
    };
    /**
     * The pricing plan has recurring payments.
     */
    type RecurrenceInfo = {
        /**
         * Length of one payment cycle, for example, 1 month to have monthly payments. Multiply `cycleDuration`'s `count` by `cycleCount` to get the subscription duration. *Currently, only a value of `1` is supported.*
         */
        cycleDuration?: DurationInfo;
        /**
         * Number of cycles. Zero for unlimited plans and plans that are valid until canceled.
         */
        cycleCount?: number;
    };
    type UpdatePlanInfo = {
        /**
         * Plan ID.
         */
        _id: string;
        /**
         * Plan name.
         */
        name?: string;
        /**
         * Plan description.
         */
        description?: string;
        /**
         * List of text strings that promote the pricing plan (for example, "Plenty of parking" or "Free gift on your birthday").
         */
        perks?: string[];
        /**
         * Plan price, payment schedule, and expiration.
         */
        pricing?: PricingInfo;
        /**
         * Whether the plan is public (visible to site visitors).
         */
        public?: boolean;
        /**
         * Whether the same buyer can purchase the plan multiple times. `1` means the buyer can only purchase the plan once. An empty value or `0` means no limitation. Defaults to empty.
         */
        maxPurchasesPerBuyer?: number;
        /**
         * Whether the buyer can start the plan at a later date.
         */
        allowFutureStartDate?: boolean;
        /**
         * Whether the buyer is allowed to cancel their plan. If `false`, calling the [`cancelOrder()`](wix-paid-plans/cancelOrder) function returns an error.
         */
        buyerCanCancel?: boolean;
        /**
         * Any terms and conditions that apply to the plan. This information is displayed during checkout.
         */
        termsAndConditions?: string;
    };
    /**
     * The Pricing Plans Checkout API contains functionality for ordering and checking out
     *  your site's pricing plan [orders](https://support.wix.com/en/article/pricing-plans-an-overview).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Checkout.html#)
     */
    interface Checkout {
        /**
         * Applies a coupon to a draft order.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Checkout.html#applyCoupon)
         */
        applyCoupon(orderId: string, couponCode: string): Promise<Checkout.ApplyCoupon>;
        /**
         * Change the start date of a draft order.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Checkout.html#changeStartDate)
         */
        changeStartDate(orderId: string, startDate: Date): Promise<Orders.Order>;
        /**
         * Creates an order for a buyer who purchased the plan with an offline transaction.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Checkout.html#createOfflineOrder)
         */
        createOfflineOrder(planId: string, buyerId: string, options?: Checkout.CreateOfflineOrderOptions): Promise<Orders.Order>;
        /**
         * Creates an order online for currently logged-in member.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Checkout.html#createOnlineOrder)
         */
        createOnlineOrder(planId: string, startDate?: Date, couponCode?: string): Promise<Orders.Order>;
        /**
         * Provides a preview of an offline order as if it was purchased.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Checkout.html#previewOfflineOrder)
         */
        previewOfflineOrder(planId: string, buyerId: string, options?: Checkout.PreviewOfflineOrderOptions): Promise<Checkout.OrderPreview>;
        /**
         * Provides a preview of an online order as if it was purchased.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Checkout.html#previewOnlineOrder)
         */
        previewOnlineOrder(planId: string, options?: Checkout.PreviewOnlineOrderOptions): Promise<Checkout.OrderPreview>;
        /**
         * Provides a preview of an order's pricing as if was purchased.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Checkout.html#previewPrice)
         */
        previewPrice(planId: string, couponCode?: string): Promise<Checkout.PricePreview>;
    }
    /**
     * Events fired by pricing plans.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Events.html#)
     */
    interface Events {
        /**
         * An event that triggers when an order is canceled with `effectiveAt` as `NEXT_PAYMENT_DATE`.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Events.html#onOrderAutoRenewCanceled)
         */
        onOrderAutoRenewCanceled(event: Events.OrderAutoRenewCanceledEvent): void;
        /**
         * An event that triggers when an order is canceled.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Events.html#onOrderCanceled)
         */
        onOrderCanceled(event: Events.OrderCanceledEvent): void;
        /**
         * An event that triggers when an order is created.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Events.html#onOrderCreated)
         */
        onOrderCreated(event: Events.OrderCreatedEvent): void;
        /**
         * An event that triggers at the start of each payment cycle for online orders.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Events.html#onOrderCycleStarted)
         */
        onOrderCycleStarted(event: Events.OrderCycleStartedEvent): void;
        /**
         * An event that triggers when the `endDate` of an order is postponed or made earlier.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Events.html#onOrderEndDatePostponed)
         */
        onOrderEndDatePostponed(event: Events.OrderEndDatePostponedEvent): void;
        /**
         * An event that triggers when an order expires or is canceled immediately.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Events.html#onOrderEnded)
         */
        onOrderEnded(event: Events.OrderEndedEvent): void;
        /**
         * An event that triggers when an offline order is marked as paid.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Events.html#onOrderMarkedAsPaid)
         */
        onOrderMarkedAsPaid(event: Events.OrderMarkedAsPaidEvent): void;
        /**
         * An event that triggers when an order is paused.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Events.html#onOrderPaused)
         */
        onOrderPaused(event: Events.OrderPausedEvent): void;
        /**
         * An event that triggers when an order is purchased.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Events.html#onOrderPurchased)
         */
        onOrderPurchased(event: Events.OrderPurchasedEvent): void;
        /**
         * An event that triggers when an order resumes.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Events.html#onOrderResumed)
         */
        onOrderResumed(event: Events.OrderResumedEvent): void;
        /**
         * An event that triggers when the start date of an order is changed.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Events.html#onOrderStartDateChanged)
         */
        onOrderStartDateChanged(event: Events.OrderStartDateChangedEvent): void;
        /**
         * An event that triggers when the start date of a purchased or free order is reached.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Events.html#onOrderStarted)
         */
        onOrderStarted(event: Events.OrderUpdatedEvent): void;
        /**
         * An event that triggers when an order is changed.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Events.html#onOrderUpdated)
         */
        onOrderUpdated(event: Events.OrderUpdatedEvent): void;
        /**
         * An event that triggers when a pricing plan is archived.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Events.html#onPlanArchived)
         */
        onPlanArchived(event: Events.PlanArchivedEvent): void;
        /**
         * An event that triggers when a pricing plan is created.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Events.html#onPlanCreated)
         */
        onPlanCreated(event: Events.PlanCreatedEvent): void;
        /**
         * An event that triggers when a member purchases a plan.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Events.html#onPlanPurchased)
         */
        onPlanPurchased(event: Events.PlanPurchasedEvent): void;
        /**
         * An event that triggers when a pricing plan is changed.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Events.html#onPlanUpdated)
         */
        onPlanUpdated(event: Events.PlanUpdatedEvent): void;
    }
    /**
     * The Pricing Plans Orders API contains functionality for managing
     *  your site's pricing plan [orders](https://support.wix.com/en/article/pricing-plans-an-overview).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Orders.html#)
     */
    interface Orders {
        /**
         * Cancels an existing order.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Orders.html#cancelOrder)
         */
        cancelOrder(orderId: string, effectiveAt: string, options?: Options): Promise<void>;
        /**
         * Gets an order for the currently logged-in member.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Orders.html#getCurrentMemberOrder)
         */
        getCurrentMemberOrder(orderId: string): Promise<Orders.Order>;
        /**
         * Gets an existing pricing plan order by ID.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Orders.html#getOrder)
         */
        getOrder(orderId: string, options?: Options): Promise<Orders.Order>;
        /**
         * Lists orders for the currently logged-in member.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Orders.html#listCurrentMemberOrders)
         */
        listCurrentMemberOrders(filters?: Orders.CurrentMemberFilterOptions, sorting?: Orders.SortingOptions, paging?: Orders.PaginationOptions): Promise<Orders.Order[]>;
        /**
         * Lists pricing plan orders.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Orders.html#listOrders)
         */
        listOrders(filters?: Orders.FilterOptions, sorting?: Orders.SortingOptions, paging?: Orders.PaginationOptions, options?: Options): Promise<Orders.Order[]>;
        /**
         * Marks an offline pricing plan order as paid.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Orders.html#markAsPaid)
         */
        markAsPaid(orderId: string, options?: Options): Promise<void>;
        /**
         * Pauses a pricing plans order.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Orders.html#pauseOrder)
         */
        pauseOrder(orderId: string, options?: Options): Promise<void>;
        /**
         * Extends the duration of a pricing plan order by postponing the order's `endDate`.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Orders.html#postponeEndDate)
         */
        postponeEndDate(orderId: string, endDate: Date, options?: Options): Promise<void>;
        /**
         * Starts the process of cancelling the logged-in member's pricing plan order.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Orders.html#requestCurrentMemberOrderCancellation)
         */
        requestCurrentMemberOrderCancellation(orderId: string, effectiveAt: string): Promise<void>;
        /**
         * Resumes a paused pricing plan order.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Orders.html#resumeOrder)
         */
        resumeOrder(orderId: string, options?: Options): Promise<void>;
    }
    /**
     * Contains functionality for refining a public pricing plan query.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.PublicPlansQueryBuilder.html#)
     */
    interface PublicPlansQueryBuilder {
        /**
         * Adds an `and` condition to the query.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.PublicPlansQueryBuilder.html#and)
         */
        and(query: PublicPlansQueryBuilder): PublicPlansQueryBuilder;
        /**
         * Adds a sort to a query, sorting by the specified properties in ascending order.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.PublicPlansQueryBuilder.html#ascending)
         */
        ascending(...propertyName: string[]): PublicPlansQueryBuilder;
        /**
         * Refines a query to match items whose specified property value is within a specified range.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.PublicPlansQueryBuilder.html#between)
         */
        between(propertyName: string, rangeStart: string | number | Date, rangeEnd: string | number | Date): PublicPlansQueryBuilder;
        /**
         * Refines a query to match items whose specified property value contains a specified string.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.PublicPlansQueryBuilder.html#contains)
         */
        contains(propertyName: string, string: string): PublicPlansQueryBuilder;
        /**
         * Adds a sort to a query or sort, sorting by the specified properties in descending order.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.PublicPlansQueryBuilder.html#descending)
         */
        descending(...propertyName: string[]): PublicPlansQueryBuilder;
        /**
         * Refines a query to match items whose specified property value ends with a specified string.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.PublicPlansQueryBuilder.html#endsWith)
         */
        endsWith(propertyName: string, string: string): PublicPlansQueryBuilder;
        /**
         * Refines a query to match items whose specified property value equals the specified value.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.PublicPlansQueryBuilder.html#eq)
         */
        eq(propertyName: string, value: any): PublicPlansQueryBuilder;
        /**
         * Returns the items that match the query.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.PublicPlansQueryBuilder.html#find)
         */
        find(): Promise<PublicPlansQueryResult>;
        /**
         * Refines a query to match items whose specified property value is greater than or equal to the specified value.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.PublicPlansQueryBuilder.html#ge)
         */
        ge(propertyName: string, value: string | number | Date): PublicPlansQueryBuilder;
        /**
         * Refines a query to match items whose specified property value is greater than the specified value.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.PublicPlansQueryBuilder.html#gt)
         */
        gt(propertyName: string, value: string | number | Date): PublicPlansQueryBuilder;
        /**
         * Refines a query to match items whose specified property contains any of the specified `value` parameters.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.PublicPlansQueryBuilder.html#hasSome)
         */
        hasSome(propertyName: string, values: string[]): PublicPlansQueryBuilder;
        /**
         * Refines a query to match items whose specified property value is less than or equal to the specified value.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.PublicPlansQueryBuilder.html#le)
         */
        le(propertyName: string, value: string | number | Date): PublicPlansQueryBuilder;
        /**
         * Limits the number of items the query returns.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.PublicPlansQueryBuilder.html#limit)
         */
        limit(limit: number): PublicPlansQueryBuilder;
        /**
         * Refines a query to match items whose specified property value is less than the specified value.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.PublicPlansQueryBuilder.html#lt)
         */
        lt(propertyName: string, value: string | number | Date): PublicPlansQueryBuilder;
        /**
         * Refines a query to match items whose specified property value does not equal the specified value.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.PublicPlansQueryBuilder.html#ne)
         */
        ne(propertyName: string, value: any): PublicPlansQueryBuilder;
        /**
         * Adds a `not` condition to the query.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.PublicPlansQueryBuilder.html#not)
         */
        not(query: PublicPlansQueryBuilder): PublicPlansQueryBuilder;
        /**
         * Adds an `or` condition to the query.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.PublicPlansQueryBuilder.html#or)
         */
        or(query: PublicPlansQueryBuilder): PublicPlansQueryBuilder;
        /**
         * Sets the number of items to skip before returning query results.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.PublicPlansQueryBuilder.html#skip)
         */
        skip(skip: number): PublicPlansQueryBuilder;
        /**
         * Refines a query to match items whose specified property value starts with a specified string.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.PublicPlansQueryBuilder.html#startsWith)
         */
        startsWith(propertyName: string, string: string): PublicPlansQueryBuilder;
    }
    /**
     * The results of a public pricing plans query, containing the retrieved items.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.PublicPlansQueryResult.html#)
     */
    interface PublicPlansQueryResult {
        /**
         * Returns the index of the current results page number.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.PublicPlansQueryResult.html#currentPage)
         */
        readonly currentPage: number;
        /**
         * Returns the items that match the query.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.PublicPlansQueryResult.html#items)
         */
        readonly items: PublicPlansQueryResult.Item[];
        /**
         * Returns the number of items in the current results page.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.PublicPlansQueryResult.html#length)
         */
        readonly length: number;
        /**
         * Returns the query page size.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.PublicPlansQueryResult.html#pageSize)
         */
        readonly pageSize: number;
        /**
         * Returns the query used to get the current results.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.PublicPlansQueryResult.html#query)
         */
        readonly query: PublicPlansQueryBuilder;
        /**
         * Returns the total number of items that match the query.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.PublicPlansQueryResult.html#totalCount)
         */
        readonly totalCount: number;
        /**
         * Returns the total number of pages the query produced.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.PublicPlansQueryResult.html#totalPages)
         */
        readonly totalPages: number;
        /**
         * Indicates if the query has more results.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.PublicPlansQueryResult.html#hasNext)
         */
        hasNext(): boolean;
        /**
         * Indicates the query has previous results.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.PublicPlansQueryResult.html#hasPrev)
         */
        hasPrev(): boolean;
        /**
         * Retrieves the next page of query results.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.PublicPlansQueryResult.html#next)
         */
        next(): Promise<PublicPlansQueryResult>;
        /**
         * Retrieves the previous page of query results.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.PublicPlansQueryResult.html#prev)
         */
        prev(): Promise<PublicPlansQueryResult>;
    }
    /**
     * The Pricing Plans Checkout API contains functionality for ordering and checking out
     *  your site's pricing plan [orders](https://support.wix.com/en/article/pricing-plans-an-overview).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Checkout.html#)
     */
    namespace Checkout {
        type ApplyCoupon = {
            /**
             * The order with the coupon applied.
             */
            order?: Orders.Order;
        };
        type CreateOfflineOrderOptions = {
            /**
             * Start date and time for the ordered plan.
             *
             * Default: Current date and time
             */
            startDate?: Date;
            /**
             * Whether the order is paid.
             *
             * Default: `false`
             */
            paid?: boolean;
            /**
             * Whether to suppress permission checks from running for the operation.
             *
             * Default: `false`
             */
            suppressAuth?: boolean;
            /**
             * Coupon code to apply.
             *
             * To learn more about coupons, see [applyCoupon()](wix-pricing-plans-backend/checkout/applycoupon).
             */
            couponCode?: string;
        };
        type OrderPreview = {
            /**
             * The preview, as if the plan had been ordered.
             */
            order?: Orders.Order;
            /**
             * Whether this previewed order would exceed the permitted amount of purchases
             * available for this plan for this buyer.
             *
             * Always `false` for plans that do not have purchase limits.
             */
            purchaseLimitExceeded: boolean;
        };
        type PreviewOfflineOrderOptions = {
            /**
             * Date from which the plan is active. Defaults to the current date.
             */
            startDate?: Date;
            /**
             * When `true`, prevents permission checks from running for the operation. Defaults to `false`.
             */
            suppressAuth?: boolean;
            /**
             * Coupon code to apply.
             *
             * To learn more about coupons, see [applyCoupon()](wix-pricing-plans-backend/checkout/applycoupon).
             */
            couponCode?: string;
        };
        type PreviewOnlineOrderOptions = {
            /**
             * Date from which the plan is active. Defaults to the current date.
             */
            startDate?: Date;
            /**
             * Coupon code to apply.
             *
             * To learn more about coupons, see [applyCoupon()](wix-pricing-plans-backend/checkout/applycoupon).
             */
            couponCode?: string;
        };
        type PricePreview = {
            /**
             * **Deprecated.** Use `prices` instead.
             */
            price: Orders.PriceDetails;
            /**
             * Pricing details.
             */
            prices: Orders.Prices;
        };
    }
    /**
     * Events fired by pricing plans.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Events.html#)
     */
    namespace Events {
        /**
         * Event data.
         */
        type EventData = {
            /**
             * Plan information.
             */
            plan: Plan;
        };
        /**
         * Event metadata.
         */
        type EventMetadata = {
            /**
             * Event ID.
             */
            id: string;
            /**
             * Plan ID associated with this event.
             */
            entityId: string;
            /**
             * Event timestamp.
             */
            eventTime: string;
            /**
             * Whether the event is triggered as a result of a privacy regulation application. For example, [GDPR](https://support.wix.com/en/article/gdpr-frequently-asked-questions). For advanced users.
             */
            triggeredByAnonymizeRequest?: boolean;
        };
        /**
         * An object representing a new pricing plan order (subscription).
         */
        type Order = {
            /**
             * Order ID of the purchase of the plan, auto-generated when an order is created.
             */
            id: string;
            /**
             * Status of the payment for the plan. Can be `PAID`, `REFUNDED`, `FAILED`, `UNPAID`, and `PAYMENT_STATUS_UNDEFINED`.
             */
            paymentStatus: string;
            /**
             * Date and time until which the plan is valid.
             */
            validUntil: Date;
            /**
             * Object containing the price of the plan.
             */
            price: Events.Price;
            /**
             * If the plan is canceled, the reason why. One of:
             *
             *  + `OWNER_CANCELED`: The owner canceled.
             *  + `PAYMENT_PROVIDER_CANCELED`: The payment provider canceled.
             *  + `PAYMENT_FAILED`: The payment failed.
             *  + `UOU_CANCELED`: The site member canceled.
             *  + `CANCELLATION_REASON_UNDEFINED`: The reason is undefined.
             */
            cancellationReason: string;
            /**
             * If the plan is cancelled, the cause of the cancellation. One of:
             *
             *  + `"UNDEFINED"`: Cancellation initiator undefined.
             *  + `"OWNER"`: Site owner canceled the order.
             *  + `"MEMBER"`: Buyer initiated the cancellation.
             *  + `"PAYMENT_FAILURE"`: Payment transaction failed.
             *  + `"SETUP_FAILURE"`: Buyer's payment details weren't set up correctly.
             */
            cancellationInitiator: string;
            /**
             * Date and time from which the plan is valid.
             */
            validFrom: Date;
            /**
             * Name of the plan.
             */
            planName: string;
            /**
             * ID of the plan for Wix Pay. If plan is free, this ID is blank.
             */
            wixPayOrderId: string;
            /**
             * If the plan is recurring. If true, the price is deducted weekly, monthly, or yearly.
             */
            recurring: boolean;
            /**
             * Date and time the order was created.
             */
            dateCreated: Date;
            /**
             * Status of the order. Can be `ACTIVE`, `PENDING`, `CANCELED`, `EXPIRED`, `PENDING_CANCELLATION`, and `ORDER_STATUS_UNDEFINED`.
             */
            status: string;
            /**
             * Description of the plan.
             */
            planDescription: string;
            /**
             * ID for the member who ordered the plan.
             */
            memberId: string;
            /**
             * How the plan was ordered, either `ONLINE` or `OFFLINE`.
             */
            orderType: string;
            /**
             * ID of the plan.
             */
            planId: string;
            /**
             * Object containing properties about how long the plan is valid.
             */
            validFor: Events.ValidFor;
            /**
             * How many trial days were given to the subscriber of the plan. Available only for orders whose plans are recurring, meaning plans whose pricing model is `subscription`.
             */
            freeTrialDays?: number;
            /**
             * Role assigned after ordering the plan.
             */
            roleId: string;
        };
        /**
         * Information about the event fired when the order auto-renewal is canceled.
         */
        type OrderAutoRenewCanceledEvent = {
            /**
             * Event metadata.
             */
            metadata: Events.OrderEventMetadata;
            /**
             * Data about the order.
             */
            data: Events.OrderEventData;
        };
        /**
         * Information about the order cancellation event.
         */
        type OrderCanceledEvent = {
            /**
             * Event metadata.
             */
            metadata: Events.OrderEventMetadata;
            /**
             * Data about the order.
             */
            data: Events.OrderEventData;
        };
        /**
         * Information about the order's creation event.
         */
        type OrderCreatedEvent = {
            /**
             * Event metadata.
             */
            metadata: Events.OrderEventMetadata;
            /**
             * Order information.
             */
            entity: Orders.Order;
        };
        /**
         * Information about the event fired when the order's payment cycle is triggered. This means the next payment date has arrived.
         */
        type OrderCycleStartedEvent = {
            /**
             * Event metadata.
             */
            metadata: Events.OrderEventMetadata;
            /**
             * Data about the order.
             */
            data: Events.OrderCycleStartedEventData;
        };
        /**
         * Event data.
         */
        type OrderCycleStartedEventData = {
            /**
             * Order information.
             */
            order: Orders.Order;
            /**
             * Number of the payment cycle. Zero for unlimited plan orders and orders whose plans are valid until canceled.
             */
            cycleNumber: number;
        };
        /**
         * Information about the order postponed event.
         */
        type OrderEndDatePostponedEvent = {
            /**
             * Event metadata.
             */
            metadata: Events.OrderEventMetadata;
            /**
             * Data about the order.
             */
            data: Events.OrderEventData;
        };
        /**
         * Information about the order end event.
         */
        type OrderEndedEvent = {
            /**
             * Event metadata.
             */
            metadata: Events.OrderEventMetadata;
            /**
             * Data about the order.
             */
            data: Events.OrderEventData;
        };
        /**
         * Event data.
         */
        type OrderEventData = {
            /**
             * Order information.
             */
            order: Orders.Order;
        };
        /**
         * Event metadata.
         */
        type OrderEventMetadata = {
            /**
             * Event ID.
             */
            id: string;
            /**
             * Order ID associated with this event.
             */
            entityId: string;
            /**
             * Event timestamp.
             */
            eventTime: string;
            /**
             * Whether the event is triggered as a result of a privacy regulation application (for example, [GDPR](https://support.wix.com/en/article/gdpr-frequently-asked-questions)). For advanced users.
             */
            triggeredByAnonymizeRequest?: boolean;
        };
        /**
         * Information about the offline order "marked as paid" event.
         */
        type OrderMarkedAsPaidEvent = {
            /**
             * Event metadata.
             */
            metadata: Events.OrderEventMetadata;
            /**
             * Data about the order.
             */
            data: Events.OrderEventData;
        };
        /**
         * Information about the order pause event.
         */
        type OrderPausedEvent = {
            /**
             * Event metadata.
             */
            metadata: Events.OrderEventMetadata;
            /**
             * Data about the order.
             */
            data: Events.OrderEventData;
        };
        /**
         * Information about the order purchase event.
         */
        type OrderPurchasedEvent = {
            /**
             * Event metadata.
             */
            metadata: Events.OrderEventMetadata;
            /**
             * Data about the order.
             */
            data: Events.OrderEventData;
        };
        /**
         * Information about the order resumption event.
         */
        type OrderResumedEvent = {
            /**
             * Event metadata.
             */
            metadata: Events.OrderEventMetadata;
            /**
             * Data about the order.
             */
            data: Events.OrderEventData;
        };
        /**
         * Information about the order's start date change event.
         */
        type OrderStartDateChangedEvent = {
            /**
             * Event metadata.
             */
            metadata: Events.OrderEventMetadata;
            /**
             * Data about the order.
             */
            data: Events.OrderEventData;
        };
        /**
         * Information about the order update event.
         */
        type OrderUpdatedEvent = {
            /**
             * Event metadata.
             */
            metadata: Events.OrderEventMetadata;
            /**
             * Order information.
             */
            entity: Orders.Order;
        };
        /**
         * An object representing the period for which a plan is valid.
         */
        type Period = {
            /**
             * The number of units until the plan expires.
             */
            amount: number;
            /**
             * Time period for billing the plan, such as `MONTH`.
             */
            unit: string;
        };
        /**
         * Information about the plan archive event.
         */
        type PlanArchivedEvent = {
            /**
             * Event metadata.
             */
            metadata: Events.EventMetadata;
            /**
             * Event data, including information about the archived plan.
             */
            data: Events.EventData;
        };
        /**
         * Information about the create plan event.
         */
        type PlanCreatedEvent = {
            /**
             * Event metadata.
             */
            metadata: Events.EventMetadata;
            /**
             * Plan information.
             */
            entity: Plan;
        };
        /**
         * An object representing a new pricing plan purchase.
         */
        type PlanPurchasedEvent = {
            /**
             * Object containing the details about the plan's order.
             */
            order: Events.Order;
        };
        /**
         * Information about the plan update event.
         */
        type PlanUpdatedEvent = {
            /**
             * Event metadata.
             */
            metadata: Events.EventMetadata;
            /**
             * Plan information.
             */
            entity: Plan;
        };
        /**
         * An object representing the price of the plan.
         */
        type Price = {
            /**
             * Payment currency. A three-letter
             *  [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) currency code.
             */
            currency: string;
            /**
             * The cost of the plan.
             */
            amount: number;
        };
        /**
         * An object representing how long a plan is valid.
         */
        type ValidFor = {
            /**
             * If true, the plan does not expire.
             */
            forever: boolean;
            /**
             * Object containing the period for which the plan is valid.
             */
            period: Events.Period;
        };
    }
    /**
     * The Pricing Plans Orders API contains functionality for managing
     *  your site's pricing plan [orders](https://support.wix.com/en/article/pricing-plans-an-overview).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.Orders.html#)
     */
    namespace Orders {
        /**
         * Buyer details.
         */
        type Buyer = {
            /**
             * Member ID for the buyer. See [`wix-members-backend`](wix-members-backend/introduction) to learn more about a site's members.
             */
            memberId: string;
            /**
             * Contact ID for the buyer. See [Contacts in `wix-crm-backend`](wix-crm-backend/contacts/introduction) to learn more about a site's contacts.
             */
            contactId: string;
        };
        /**
         * Details about the cancellation of an order. Only present if the order `status` is `"CANCELED"`.
         */
        type Cancellation = {
            /**
             * Date and time when the cancellation was requested.
             */
            requestedDate: Date;
            /**
             * The reason for the cancellation.
             * Supported values:
             *  + `"OWNER_ACTION"`. The site owner canceled the order.
             *  + `"MEMBER_ACTION"`. The buyer initiated the cancellation.
             *  + `"PAYMENT_FAILURE"`. A payment transaction failed.
             *  + `"PAYMENT_SETUP_FAILURE"`. The buyer's payment details weren't set up correctly.
             */
            cause: string;
            /**
             * When the cancellation takes effect. This is set when cancelling the order.
             * Supported values:
             *  + `"IMMEDIATELY"`. The cancellation occurs immediately and the buyer can no longer use the plan at this point.
             *  + `"NEXT_PAYMENT_DATE"`. The cancellation occurs at the next payment date and time. The buyer can continue to use the plan until that date and time.
             */
            effectiveAt: string;
        };
        /**
         * Coupon applied to the order.
         *
         * To learn more about coupons, see [applyCoupon()](wix-pricing-plans-backend/checkout/applycoupon).
         */
        type Coupon = {
            /**
             * Code of the applied coupon.
             */
            code: string;
            /**
             * Total discount of the coupon, as a monetary amount.
             */
            amount: string;
            /**
             * Coupon ID.
             */
            id: string;
        };
        /**
         * Current payment cycle for the order.
         *
         * `currentCycle` will be omitted if the order's `status` is `CANCELED` or `ENDED`, or if the `startDate` hasn't been reached yet.
         */
        type CurrentCycle = {
            /**
             * Index of the current payment cycle in the order.
             *
             * `0` when the order is in a free trial period. In all other cases, the index starts with `1`.
             */
            index: number;
            /**
             * Start date and time for the current payment cycle.
             */
            startedDate: Date;
            /**
             * End date and time for the current payment cycle.
             */
            endedDate: Date;
        };
        /**
         * Fields to filter by when listing orders for the current member.
         */
        type CurrentMemberFilterOptions = {
            /**
             * Specific IDs of plans that were ordered by the current member.
             */
            planIds?: string[];
            /**
             * Whether the auto-renewal of the current member's recurring orders was canceled.
             */
            autoRenewCanceled?: boolean;
            /**
             * Specific statuses for the current member's orders.
             *  + `"DRAFT"`. The order has been initiated but payment has not been processed yet. The plan is not yet available for use.
             *  + `"PENDING"`. Payment is being processed.  The plan is not yet available for use.
             *  + `"ACTIVE"`. The order has been processed and paid for.  The plan is available for use.
             *  + `"PAUSED"`. Use of the plan has been [paused](wix-pricing-plans-backend/orders/pauseorder), for example, if the buyer is away. The plan can be [resumed](wix-pricing-plans-backend/orders/resumeorder).
             *  + `"ENDED"`. The order has completed its duration and is no longer available for use.
             *  + `"CANCELED"`. The order has been [canceled](wix-pricing-plans-backend/orders/cancelorder).
             */
            orderStatuses?: string[];
            /**
             * Specific payment statuses for the current member's orders.
             *  + `"PAID"`. The last payment was paid.
             *  + `"REFUNDED"`. The last payment was refunded.
             *  + `"FAILED"`. The last payment transaction did not complete.
             *  + `"UNPAID"`. The last payment was not paid.
             *  + `"PENDING"`. Awaiting payment.
             *  + `"NOT_APPLICABLE"`. No payment was necessary, such as for free plans or free trials.
             */
            paymentStatuses?: string[];
        };
        /**
         * Length of one payment cycle. For example, `1` `MONTH` for monthly payments.
         */
        type Duration = {
            /**
             * The amount of a duration `unit` in a single payment cycle.
             *
             * Currently limited to support only value of `1`.
             */
            count: number;
            /**
             * Unit of time for the cycle duration.
             *
             * Supported values: `"UNDEFINED"`, `"DAY"`, `"WEEK"`, `"MONTH"`, `"YEAR"`
             */
            unit: string;
        };
        /**
         * Fields to filter by when listing orders.
         */
        type FilterOptions = {
            /**
             * Specific member IDs of buyers who ordered a pricing plan.
             */
            buyerIds?: string[];
            /**
             * Specific IDs of plans that were ordered.
             */
            planIds?: string[];
            /**
             * Whether the auto-renewal of recurring orders was canceled.
             */
            autoRenewCanceled?: boolean;
            /**
             * Specific order statuses.
             *  + `"DRAFT"`. The order has been initiated but payment has not been processed yet. The plan is not yet available for use.
             *  + `"PENDING"`. Payment is being processed.  The plan is not yet available for use.
             *  + `"ACTIVE"`. The order has been processed and paid for.  The plan is available for use.
             *  + `"PAUSED"`. Use of the plan has been [paused](wix-pricing-plans-backend/orders/pauseorder), for example, if the buyer is away. The plan can be [resumed](wix-pricing-plans-backend/orders/resumeorder).
             *  + `"ENDED"`. The order has completed its duration and is no longer available for use.
             *  + `"CANCELED"`. The order has been [canceled](wix-pricing-plans-backend/orders/cancelorder).
             */
            orderStatuses?: string[];
            /**
             * Specific payment statuses.
             *  + `"PAID"`. The last payment was paid.
             *  + `"REFUNDED"`. The last payment was refunded.
             *  + `"FAILED"`. The last payment transaction did not complete.
             *  + `"UNPAID"`. The last payment was not paid.
             *  + `"PENDING"`. Awaiting payment.
             *  + `"NOT_APPLICABLE"`. No payment was necessary, such as for free plans or free trials.
             */
            paymentStatuses?: string[];
        };
        type Order = {
            /**
             * Order ID.
             */
            _id: string;
            /**
             * ID of the plan that was ordered.
             */
            planId: string;
            /**
             * ID of the related Wix subscription.
             *
             * Every pricing plan order corresponds to a Wix subscription, including orders for single payment plans. You can see all orders from your site's [Subscriptions](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fsubscriptions%3FreferralInfo%3Dvelo-docs) page in the Dashboard.
             */
            subscriptionId: string;
            /**
             * ID of the associated Wix Pay order.
             *
             * Created by the [`createOnlineOrder()`](wix-pricing-plans-backend/checkout/createonlineorder) or [`createfflineOrder()`](wix-pricing-plans-backend/checkout/createofflineorder) function. For online orders, send this value as a parameter to the Wix Pay [`startPayment()`](wix-pay-frontend/startPayment) function to enable your buyer to pay for the order. `wixPayOrderId` is omitted if the order is free.
             */
            wixPayOrderId?: string;
            /**
             * The buyer's IDs. Includes `memberId` and `contactId`.
             *
             * Currently, Pricing Plan orders are limited to members only. `contactId` is returned, but a buyer will not be able to order a plan without a `memberId`.
             */
            buyer: Orders.Buyer;
            /**
             * **Deprecated.** Use `pricing` instead.
             */
            priceDetails: Orders.PriceDetails;
            /**
             * Order [pricing model](wix-pricing-plans-backend/introduction#pricing-models), price, and payment schedule.
             */
            pricing?: Orders.Pricing;
            /**
             * How the order was processed.
             * Supported values:
             *  + `"ONLINE"`. The buyer ordered the plan using the site.
             *  + `"OFFLINE"`. The buyer made a manual, offline order without using the site.
             */
            type: string;
            /**
             * Status of the order.
             * Supported values:
             *  + `"DRAFT"`. The order has been initiated but payment hasn't been processed yet. The plan isn't yet available for use.
             *  + `"PENDING"`. The order has been processed and its start date is set in the future. The plan isn't yet available for use.
             *  + `"ACTIVE"`. The order has been processed. The plan is available for use.
             *  + `"PAUSED"`. The order, and use of the plan, is [paused](wix-pricing-plans-backend/orders/pauseorder). For example, if the buyer is away. The order, and use of the plan, can be [resumed](wix-pricing-plans-backend/orders/resumeorder).
             *  + `"ENDED"`. The order has completed its duration and is no longer available for use.
             *  + `"CANCELED"`. The order has been [canceled](wix-pricing-plans-backend/orders/cancelorder).
             */
            status: string;
            /**
             * Whether the order will be canceled at the next payment date.
             *
             * If `true`, the order `status` will be `CANCELED` and the next payment won't be charged. Omitted for single payment orders.
             */
            autoRenewCanceled?: boolean;
            /**
             * Details about the cancellation of an order. Only present if the `status` is `"CANCELED"`.
             */
            cancellation?: Orders.Cancellation;
            /**
             * Status of the last payment for the order. This is updated automatically for online orders. The site owner updates this manually for offline orders.
             * Supported values:
             *  + `"PAID"`. The last payment was paid.
             *  + `"REFUNDED"`. The last payment was refunded.
             *  + `"FAILED"`. The last payment transaction didn't complete.
             *  + `"UNPAID"`. The last payment wasn't paid.
             *  + `"PENDING"`. Awaiting payment.
             *  + `"NOT_APPLICABLE"`. No payment was necessary. For example, for free plans or free trials.
             */
            lastPaymentStatus: string;
            /**
             * Start date and time for the ordered plan.
             */
            startDate: Date;
            /**
             * Current date and time the ordered plan will expire.
             *
             * `endDate` may be updated over the course of an order. If the order is [paused](wix-pricing-plans-backend/orders/pauseorder), it will have a later `endDate` once it [resumes](wix-pricing-plans-backend/orders/resumeorder). `endDate` may also be [postponed](wix-pricing-plans-backend/orders/postponeenddate).
             *
             * Omitted if the order is valid until canceled and still `"ACTIVE"`.
             */
            endDate?: Date;
            /**
             * List of periods during which this order is paused.
             */
            pausePeriods: Orders.PausePeriod[];
            /**
             * Free trial period, in days. Only available for recurring plans.
             */
            freeTrialDays?: string;
            /**
             * Earliest end date and time that the plan for this order can expire.
             *
             * This is calculated by adding all pause periods to the original end date. Omitted if the order is active until canceled. Reserved for future use.
             */
            earliestEndDate?: Date;
            /**
             * Current payment cycle for the order.
             *
             * `currentCycle` will be omitted if the order's status is `CANCELED` or `ENDED`, or if the `startDate` hasn't passed yet.
             */
            currentCycle: Orders.CurrentCycle;
            /**
             * Name of the plan at the time of the order.
             */
            planName: string;
            /**
             * Description of the plan at the time of the order.
             */
            planDescription: string;
            /**
             * Plan price as it was at the moment of order creation.
             */
            planPrice: string;
            /**
             * Date and time the order was created.
             */
            _createdDate: Date;
            /**
             * Date and time the order was last updated. For example, the date and time an order was paused, resumed, or canceled.
             */
            _updatedDate: Date;
        };
        /**
         * The order has recurring payments.
         */
        type OrderRecurrence = {
            /**
             * Length of one payment cycle. For example, `1` `MONTH` for monthly payments.
             */
            cycleDuration: Orders.Duration;
            /**
             * Amount of payment cycles this subscription is valid for.
             *
             * `0` for orders of plans that are unlimited or until-canceled.
             */
            cycleCount: number;
        };
        type PaginationOptions = {
            /**
             * Limit the number of orders returned.
             *
             * Default: `50`
             */
            limit?: number;
            /**
             * Number of entries to skip.
             */
            skip?: number;
        };
        /**
         * Period during which the order of a plan is suspended.
         */
        type PausePeriod = {
            /**
             * Status of the pause period.
             * Supported values:
             *  + `"ACTIVE"`. Status while the order is [paused](wix-pricing-plans-backend/orders/pauseorder).
             *  + `"ENDED"`. Status while the order is [resumed](wix-pricing-plans-backend/orders/resumeorder).
             */
            status: string;
            /**
             * Start date and time of the pause period.
             */
            pauseDate: Date;
            /**
             * End date and time of the pause period.
             *
             * Omitted while the pause period remains `"ACTIVE"`.
             */
            resumeDate: Date;
        };
        /**
         * Order price details.
         */
        type Price = {
            /**
             * Price of the order excluding tax, specified as a monetary amount. For example, `"9.99"`.
             */
            subtotal: string;
            /**
             * Coupon applied to the order.
             *
             * To learn more about coupons, see [applyCoupon()](wix-pricing-plans-backend/checkout/applycoupon).
             */
            coupon: Orders.Coupon;
            /**
             * Total discount applied to the order.
             */
            discount: string;
            /**
             * Tax applied to the order.
             */
            tax?: Orders.Tax;
            /**
             * Price after tax and discount is applied, specified as a monetary amount. For example, `"13.98"`.
             *
             * If no tax is applied, this amount is the same as `subtotal`.
             */
            total: string;
            /**
             * Three-letter currency code in [ISO 4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format.
             */
            currency: string;
        };
        /**
         * **Deprecated.** Use `pricing` instead.
         */
        type PriceDetails = {
            /**
             * Price of the order, excluding tax. Specified as a monetary amount, such as `"3.99"`.
             */
            subtotal: string;
            /**
             * Tax applied for the plan. Omitted if no tax was applied.
             */
            tax?: Orders.Tax;
            /**
             * Price after tax is applied. Specified as a monetary amount, such as `"4.98"`. If no tax was applied, this amount is the same as `subtotal`.
             */
            total: string;
            /**
             * Price of the plan when the order was created. This price is the amount for a single payment. For subscriptions, this is the amount to pay for each single payment cycle and the `planPrice` is required. Otherwise, the payment is for the entire plan.
             */
            planPrice: string;
            /**
             * Currency code. Must be a valid [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code (for example, `"USD"`).
             */
            currency: string;
            /**
             * Pricing model indicating that the order has recurring payments. This type of subscription isn't a "Wix subscription," which encompasses various types of subscriptions, such as Wix Stores subscriptions, Wix invoice subscriptions, and *all* pricing plan models.
             */
            subscription?: Orders.OrderRecurrence;
            /**
             * Pricing model indicating that the order is paid with a single payment per cycle and what the length of the cycle is. The cycle is the duration of the order's plan, not a payment cycle.
             */
            singlePaymentForDuration?: Duration;
            /**
             * Pricing model indicating that the order of the plan is paid in one single payment and that the order is active until canceled.
             */
            singlePaymentUnlimited?: boolean;
            /**
             * Free trial period for the order in days. Available only for orders whose plans are recurring, meaning plans whose pricing model is `subscription`.
             */
            freeTrialDays?: number;
        };
        /**
         * Cycle duration to apply `price` for.
         */
        type PriceDuration = {
            /**
             * Price starts to apply with this cycle.
             *
             * `1` is the first payment cycle for all pricing models.
             */
            cycleFrom: number;
            /**
             * Amount of cycles to apply price for.
             *
             * For `subscription` pricing models with a finite number of cycles, the `numberOfCycles` is the same as `pricing.subscription.cycleCount`.
             *
             * For `subscription` pricing models that are unlimited or until-canceled, the `numberOfCycles` is not returned.
             *
             * For `singlePaymentForDuration` and `singlePaymentUnlimited` pricing models, the `numberOfCycles` is `1`.
             */
            numberOfCycles: number;
        };
        /**
         * Pricing details for all pricing models.
         */
        type Prices = {
            /**
             * Cycle duration to apply `price` for.
             *
             * Use with all pricing models. Can apply the same price to multiple payment cycles.
             */
            duration: Orders.PriceDuration;
            /**
             * Order price.
             */
            price: Orders.Price;
        };
        /**
         * Order pricing model, price, and payment schedule.
         */
        type Pricing = {
            /**
             * Pricing model for an order with recurring payment cycles.
             */
            subscription?: Orders.OrderRecurrence;
            /**
             * Pricing model for an order with a one-time payment and the order is valid for a specific amount of time.
             */
            singlePaymentForDuration?: Orders.Duration;
            /**
             * Pricing model for an order with a one-time payment and the order is valid until canceled.
             */
            singlePaymentUnlimited?: boolean;
            /**
             * Pricing details for all pricing models.
             */
            prices: Orders.Prices;
        };
        /**
         * Sorting details.
         */
        type SortingOptions = {
            /**
             * Name of the property to sort by.
             *
             * Supported values: `_createdDate`, `endDate`
             *
             * Default: `_createdDate`
             */
            fieldName?: string;
            /**
             * Sort order.
             *
             * Supported values:
             * + `"ASC"`: Ascending
             * + `"DESC"`: Descending
             *
             * Default: `"ASC"`
             */
            order?: string;
        };
        /**
         * Tax applied to the order. If empty, no tax was applied.
         */
        type Tax = {
            /**
             * Name of the tax. For example, VAT.
             */
            name: string;
            /**
             * Whether tax is included in the original price. When `false`, tax is added at checkout.
             */
            includedInPrice: boolean;
            /**
             * Tax rate percentage, as a number between 0 and 100. For example, a 7% tax rate is `"7.00"`.
             */
            rate: string;
            /**
             * Total tax, specified as a monetary amount. For example, `"3.99"`.
             */
            amount: string;
        };
    }
    /**
     * The results of a public pricing plans query, containing the retrieved items.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans-backend.PublicPlansQueryResult.html#)
     */
    namespace PublicPlansQueryResult {
        /**
         * An item returned by a query.
         */
        type Item = {
            /**
             * An item that matches the query.
             */
            publicPlan: PublicPlan;
        };
    }
}
