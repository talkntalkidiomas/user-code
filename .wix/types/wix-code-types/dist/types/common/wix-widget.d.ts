/**
 * The wix-widget module contains functionality for working with Blocks widgets from [Blocks Panel](https://support.wix.com/en/article/creating-custom-panels-for-your-widgets-action-bar-buttons) code.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-widget.html#)
 */
declare module 'wix-widget' {
    /**
     * Gets the widget's current design preset.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-widget.html#getDesignPreset)
     */
    function getDesignPreset(): Promise<string>;
    /**
     * Gets the `wix-widget` module scoped to an [inner (nested) widget](https://support.wix.com/en/article/wix-blocks-creating-and-managing-widgets-within-widgets).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-widget.html#getNestedWidget)
     */
    function getNestedWidget(Selector: string): Promise<any>;
    /**
     * Gets the widget's [properties](https://support.wix.com/en/article/wix-blocks-widget-api-properties).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-widget.html#getProps)
     */
    function getProps(): Promise<any>;
    /**
     * Sets the widget's design preset.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-widget.html#setDesignPreset)
     */
    function setDesignPreset(preset: string): Promise<void>;
    /**
     * Sets the widget's [properties](https://support.wix.com/en/article/wix-blocks-widget-api-properties). You can also assign a partial subset of the widget's properties.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-widget.html#setProps)
     */
    function setProps(props: any): Promise<void>;
}
