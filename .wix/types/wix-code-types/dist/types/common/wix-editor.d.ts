/**
 * The wix-editor module contains functionality for working with the site editor from a [Blocks Panel](https://support.wix.com/en/article/creating-custom-panels-for-your-widgets-action-bar-buttons) code.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-editor.html#)
 */
declare module 'wix-editor' {
    /**
     * Gets the viewport currently selected in the Editor.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-editor.html#getCurrentViewport)
     */
    function getCurrentViewport(): Promise<Viewport>;
    /**
     * Gets the `wix-editor` module scoped of an [inner (nested) widget](https://support.wix.com/en/article/wix-blocks-creating-and-managing-widgets-within-widgets).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-editor.html#getScopedWixEditor)
     */
    function getScopedWixEditor(Selector: string): Promise<any>;
    /**
     * Checks if an element is removed from the widget.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-editor.html#isRemoved)
     */
    function isRemoved(selector: string): Promise<void>;
    /**
     * Gets a list of all removed widget elements.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-editor.html#listRemovedElements)
     */
    function listRemovedElements(): Promise<string[]>;
    /**
     * Opens the [Dashboard](https://support.wix.com/en/article/about-your-wix-dashboard) for the current site.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-editor.html#openDashboardPanel)
     */
    function openDashboardPanel(options: DashboardOptions): Promise<void>;
    /**
     * Removes a widget element from the stage.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-editor.html#removeElement)
     */
    function removeElement(selector: string): Promise<void>;
    /**
     * Restores (shows) a widget element on the stage.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-editor.html#restoreElement)
     */
    function restoreElement(selector: string): Promise<void>;
    /**
     * An object representing the Dashboard parameters.
     */
    type DashboardOptions = {
        /**
         * The relative URL to open in the Business Manager.
         */
        url: string;
    };
    /**
     * An object representing the current viewport.
     */
    type Viewport = {
        /**
         * Type of viewport (`DESKTOP`, `MOBILE`, or `TABLET`)
         */
        type: string;
        /**
         * object representing the current viewport's range.
         */
        An: viewportRange;
    };
    /**
     * An object representing the current viewport's range.
     */
    type viewportRange = {
        /**
         * Minimum range in pixels for the current viewport.
         */
        minWidth: number;
        /**
         * Maximum range in pixels for the current viewport.
         */
        maxWidth: number;
    };
}
