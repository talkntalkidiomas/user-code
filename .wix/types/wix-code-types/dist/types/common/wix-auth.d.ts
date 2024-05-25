/**
 * The wix-auth module contains functionality for working with permissions.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-auth.html#)
 */
declare module 'wix-auth' {
    /**
     * Allows a site visitor to call a function without the required permissions.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-auth.html#elevate)
     */
    function elevate<T extends (...arg: any) => any>(func: T): (...param: Parameters<T>) => ReturnType<T>;
}
