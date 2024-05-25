/**
 * The `$widget` namespace contains functionality for working with your Blocks widget's API from within the widget code.
 * 	[Read more](https://www.wix.com/corvid/reference/$widget.html#)
 */
declare module '$widget' {
    /**
     * Sets or gets the [widget's properties](https://support.wix.com/en/article/wix-blocks-widget-api-properties).
     * 	[Read more](https://www.wix.com/corvid/reference/$widget.html#props)
     */
    const props: any;
    /**
     * Fires an event that is defined in the Widget API.
     * 	[Read more](https://www.wix.com/corvid/reference/$widget.html#fireEvent)
     */
    function fireEvent(eventName: string, data: any): void;
    /**
     * Adds an event handler that runs when the value of a widget property is changed.
     * 	[Read more](https://www.wix.com/corvid/reference/$widget.html#onPropsChanged)
     */
    function onPropsChanged(handler: onPropsChangedHandler): any;
    type onPropsChangedHandler = (oldProps: any, newProps: any) => void;
}
