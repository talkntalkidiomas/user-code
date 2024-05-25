declare module "wix-sender-details.v2" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /**
   * A sender details object contains the information that is displayed as the email sender's name and email address.
   * If sending email campaigns with a public email domain (e.g. @gmail.com or @yahoo.com), the email address will not
   * be displayed in the 'from' header. Instead, the email address is replaced with @wixemails.com (or @wixsitemail.com for free users),
   * and the sender's email is placed in the 'reply-to' header.
   *
   * If sending email campaigns with an email from a Wix managed domain, that email will be displayed in the 'from' header.
   * If sending with an email from a custom domain that is not managed by Wix, a line will be inserted that states that the
   * email was sent via wixemails.com.
   */
  interface SenderDetails {
      /** Display name of sender. */
      fromName?: string;
      /** Email address of sender. */
      fromEmail?: string;
      /**
       * Date and time the sender's email address was verified.
       * @readonly
       */
      dateVerified?: Date;
  }
  interface GetSenderDetailsRequest {
  }
  interface GetSenderDetailsResponse {
      /** Current sender details. */
      senderDetails?: SenderDetails;
  }
  interface UpdateSenderDetailsRequest {
      /** New sender details. */
      senderDetails: SenderDetails;
  }
  interface UpdateSenderDetailsResponse {
      /** Whether email address needs verification. */
      verificationNeeded?: boolean;
  }
  interface VerifySenderEmailRequest {
      /** Verification code. */
      verificationCode: string;
  }
  interface VerifySenderEmailResponse {
  }
  interface ResolveActualFromAddressRequest {
      /** User's provided address from which to send email marketing campaign. */
      fromAddress: string;
  }
  interface ResolveActualFromAddressResponse {
      /** Actual from-address that will be used for email distribution. */
      actualFromAddress?: string;
  }
  /**
   * Retrieves sender details.
   *
   * The sender details include the information displayed as the email sender's name and email address.
   *
   * + If you send an email campaign with a public email domain (e.g. @gmail.com or @yahoo.com), the email address will not be displayed in the 'from' header. Instead, the email address is replaced with @wixemails.com (or @wixsitemail.com for free users), and the sender's email is placed in the 'reply-to' header.
   *
   * + If you send an email campaign with an email from a Wix managed domain, that email will be displayed in the 'from' header.
   *
   * + If you send an email from a custom domain that is not managed by Wix, a line will be inserted that states that the email was sent via wixemails.com.
   *
   *
   * >**Note:** This function is restricted and only runs if you elevate permissions using the [`wix-auth.elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function.
   * @public
   * @documentationMaturity preview
   */
  function getSenderDetails(): Promise<GetSenderDetailsResponse>;
  /**
   * Updates sender details.
   *
   * If the `fromEmail` is changed, a verification code will be sent to the new email address.
   *
   * If verification is needed, a verification email will be sent to the user, and the returned `verificationNeeded` value will be `true`.
   *
   *
   * >**Note:** This function is restricted and only runs if you elevate permissions using the [`wix-auth.elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function.
   * @param senderDetails - New sender details.
   * @public
   * @documentationMaturity preview
   * @requiredField senderDetails
   */
  function updateSenderDetails(senderDetails: SenderDetails): Promise<UpdateSenderDetailsResponse>;
  /**
   * Verifies the sender's email using a verification code sent to the user's email address upon update.
   *
   *
   *
   * >**Note:** This function is restricted and only runs if you elevate permissions using the [`wix-auth.elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function.
   * @param verificationCode - Verification code.
   * @public
   * @documentationMaturity preview
   * @requiredField verificationCode
   */
  function verifyEmail(verificationCode: string): Promise<void>;
  /**
   * Checks if the sender's email address will be used as from-address or replaced (not related to current sender details).
   *
   *
   *
   * >**Note:** This function is restricted and only runs if you elevate permissions using the [`wix-auth.elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function.
   * @param fromAddress - User's provided address from which to send email marketing campaign.
   * @public
   * @documentationMaturity preview
   * @requiredField fromAddress
   */
  function resolveActualFromAddress(fromAddress: string): Promise<ResolveActualFromAddressResponse>;
  
  const emailMarketingV1SenderDetails_universal_d___debug: typeof __debug;
  type emailMarketingV1SenderDetails_universal_d_SenderDetails = SenderDetails;
  type emailMarketingV1SenderDetails_universal_d_GetSenderDetailsRequest = GetSenderDetailsRequest;
  type emailMarketingV1SenderDetails_universal_d_GetSenderDetailsResponse = GetSenderDetailsResponse;
  type emailMarketingV1SenderDetails_universal_d_UpdateSenderDetailsRequest = UpdateSenderDetailsRequest;
  type emailMarketingV1SenderDetails_universal_d_UpdateSenderDetailsResponse = UpdateSenderDetailsResponse;
  type emailMarketingV1SenderDetails_universal_d_VerifySenderEmailRequest = VerifySenderEmailRequest;
  type emailMarketingV1SenderDetails_universal_d_VerifySenderEmailResponse = VerifySenderEmailResponse;
  type emailMarketingV1SenderDetails_universal_d_ResolveActualFromAddressRequest = ResolveActualFromAddressRequest;
  type emailMarketingV1SenderDetails_universal_d_ResolveActualFromAddressResponse = ResolveActualFromAddressResponse;
  const emailMarketingV1SenderDetails_universal_d_getSenderDetails: typeof getSenderDetails;
  const emailMarketingV1SenderDetails_universal_d_updateSenderDetails: typeof updateSenderDetails;
  const emailMarketingV1SenderDetails_universal_d_verifyEmail: typeof verifyEmail;
  const emailMarketingV1SenderDetails_universal_d_resolveActualFromAddress: typeof resolveActualFromAddress;
  namespace emailMarketingV1SenderDetails_universal_d {
    export {
      emailMarketingV1SenderDetails_universal_d___debug as __debug,
      emailMarketingV1SenderDetails_universal_d_SenderDetails as SenderDetails,
      emailMarketingV1SenderDetails_universal_d_GetSenderDetailsRequest as GetSenderDetailsRequest,
      emailMarketingV1SenderDetails_universal_d_GetSenderDetailsResponse as GetSenderDetailsResponse,
      emailMarketingV1SenderDetails_universal_d_UpdateSenderDetailsRequest as UpdateSenderDetailsRequest,
      emailMarketingV1SenderDetails_universal_d_UpdateSenderDetailsResponse as UpdateSenderDetailsResponse,
      emailMarketingV1SenderDetails_universal_d_VerifySenderEmailRequest as VerifySenderEmailRequest,
      emailMarketingV1SenderDetails_universal_d_VerifySenderEmailResponse as VerifySenderEmailResponse,
      emailMarketingV1SenderDetails_universal_d_ResolveActualFromAddressRequest as ResolveActualFromAddressRequest,
      emailMarketingV1SenderDetails_universal_d_ResolveActualFromAddressResponse as ResolveActualFromAddressResponse,
      emailMarketingV1SenderDetails_universal_d_getSenderDetails as getSenderDetails,
      emailMarketingV1SenderDetails_universal_d_updateSenderDetails as updateSenderDetails,
      emailMarketingV1SenderDetails_universal_d_verifyEmail as verifyEmail,
      emailMarketingV1SenderDetails_universal_d_resolveActualFromAddress as resolveActualFromAddress,
    };
  }
  
  export { emailMarketingV1SenderDetails_universal_d as senderDetails };
}
