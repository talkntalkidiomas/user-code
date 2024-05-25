/**
 * The `wix-mobile` module contains functionality for working with your mobile app.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-mobile.html#)
 */
declare module 'wix-mobile' {
    /**
     * Creates and opens an alert modal on your mobile app.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-mobile.html#showAlert)
     */
    function showAlert(title: string, message: string, actions: Actions): Promise<AlertResult>;
    /**
     * Alert actions.
     */
    type Actions = {
        /**
         * Positive alert action.
         */
        positive: PositiveAction;
        /**
         * Negative alert action.
         */
        negative?: NegativeAction;
        /**
         * Neutral alert action.  **Note:** This parameter only works if you use it in conjunction with both the `positive` and `negative` parameters.
         */
        neutral?: NeutralAction;
    };
    /**
     * Alert's result based on the app user's selected action.
     */
    type AlertResult = {
        /**
         * Unique key for identifying the selected action.
         */
        key: string;
    };
    /**
     * Negative alert action.
     */
    type NegativeAction = {
        /**
         * The negative action button's label. For example, 'Delete'.
         */
        label: string;
        /**
         * Unique key for identifying a negative action. For example, 'delete'.
         */
        key: string;
        /**
         * **For iOs only.** Whether the action is classified as destructive. If `true`, the app user should carefully consider whether to press the action button.
         */
        destructive?: boolean;
    };
    /**
     * Neutral alert action. >**Note:** This parameter only works if you use it in conjunction with both the `positive` and `negative` parameters.
     */
    type NeutralAction = {
        /**
         * The neutral action button's label. For example, 'Remind Me Later'.
         */
        label: string;
        /**
         * Unique key for identifying a neutral action. For example, 'later'.
         */
        key: string;
        /**
         * **For iOs only.** Whether the action is classified as destructive. If `true`, the app user should carefully consider whether to press the action button.
         */
        destructive?: boolean;
    };
    /**
     * Positive alert action.
     */
    type PositiveAction = {
        /**
         * The positive action button's label. For example, 'Save Now'.
         */
        label: string;
        /**
         * Unique key for identifying a positive action. For example, 'save'.
         */
        key: string;
        /**
         * **For iOs only.** Whether the action is classified as destructive. If `true`, the app user should carefully consider whether to press the action button.
         */
        destructive?: boolean;
    };
}
