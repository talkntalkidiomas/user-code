/**
 * [Read more](https://www.wix.com/corvid/reference/wix-captcha.v2.html#)
 */
declare module 'wix-captcha.v2' {
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-captcha-v2.html#captcha)
     */
    const captcha: Captcha;
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-captcha-v2.Captcha.html#)
     */
    interface Captcha {
        /**
         * Authorizes the CAPTCHA token.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-captcha-v2.Captcha.html#authorize)
         */
        authorize(token: string): Promise<Captcha.CaptchaResponse>;
    }
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-captcha-v2.Captcha.html#)
     */
    namespace Captcha {
        type AssessmentOptions = {
            /**
             * The CAPTCHA token to authorize.
             */
            token?: string;
        };
        type AssessmentResponse = {
            assessment?: string;
        };
        type AuthorizeOptions = {};
        type AuthorizeWithoutDomainValidationOptions = {
            /**
             * The CAPTCHA token to authorize.
             */
            token?: string;
        };
        type CaptchaEntity = {};
        type CaptchaRequest = {
            /**
             * The CAPTCHA token to authorize.
             */
            token?: string;
        };
        type CaptchaResponse = {
            /**
             * Error information.
             */
            errors?: Captcha.Errors;
            /**
             * Value is `true` when authorization is successful.
             */
            success?: boolean;
        };
        type Errors = {
            /**
             * ID of error.
             */
            errorId?: number;
        };
    }
}
