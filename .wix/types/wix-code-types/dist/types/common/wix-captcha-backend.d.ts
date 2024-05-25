/**
 * The wix-captcha-backend module contains functionality for working with the reCAPTCHA element from backend code.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-captcha-backend.html#)
 */
declare module 'wix-captcha-backend' {
    /**
     * Authorizes the CAPTCHA token.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-captcha-backend.html#authorize)
     */
    function authorize(token: string): Promise<SuccessReport>;
    /**
     * An object representing a CAPTCHA authorization error message.
     */
    type ErrorReport = {
        /**
         * Error message.
         */
        error: string;
    };
    /**
     * An object representing a CAPTCHA authorization success message.
     */
    type SuccessReport = {
        /**
         * Value is `true` when authorization is successful.
         */
        success: boolean;
    };
}
