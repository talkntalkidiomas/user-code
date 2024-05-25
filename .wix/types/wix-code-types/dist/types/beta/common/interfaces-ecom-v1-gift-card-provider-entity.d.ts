declare module "interfaces-ecom-v1-gift-card-provider-entity" {
  interface GiftCardProviderEntity {
  }
  interface GetBalanceRequest {
      /** Gift Card unique code */
      code?: string;
      /** Gift Card provider app instance id */
      appInstanceId?: string;
  }
  interface GetBalanceResponse {
      /** Current Gift Card balance */
      balance?: number;
      /** The currency code of the Gift Card */
      currencyCode?: string;
  }
  interface RedeemRequest {
      /** Gift Card unique code */
      code?: string;
      /** Gift Card provider app instance id */
      appInstanceId?: string;
      /** Amount to redeem from the given Gift Card */
      amount?: number;
      /** Idempotency key for the current transaction */
      orderId?: string;
      /** The currency code to redeem */
      currencyCode?: string;
  }
  interface RedeemResponse {
      /** Remaining balance of the Gift Card after the redeem */
      remainingBalance?: number;
      /** The currency code of the Gift Card */
      currencyCode?: string;
      /** Id of the redeem transaction */
      transactionId?: string;
  }
  interface VoidRequest {
      /** Gift Card provider app instance id */
      appInstanceId?: string;
      /** Transaction id to void */
      transactionId?: string;
  }
  interface VoidResponse {
      /** Remaining balance of the Gift Card after void */
      remainingBalance?: number;
      /** The currency code of the Gift Card */
      currencyCode?: string;
  }
  interface GiftCardProviderConfig {
  }
  interface GetBalanceOptions {
      /** Gift Card unique code */
      code?: string;
      /** Gift Card provider app instance id */
      appInstanceId?: string;
  }
  interface RedeemOptions {
      /** Gift Card unique code */
      code?: string;
      /** Gift Card provider app instance id */
      appInstanceId?: string;
      /** Amount to redeem from the given Gift Card */
      amount?: number;
      /** Idempotency key for the current transaction */
      orderId?: string;
      /** The currency code to redeem */
      currencyCode?: string;
  }
  interface VoidOptions {
      /** Gift Card provider app instance id */
      appInstanceId?: string;
      /** Transaction id to void */
      transactionId?: string;
  }
  
  export { GetBalanceOptions, GetBalanceRequest, GetBalanceResponse, GiftCardProviderConfig, GiftCardProviderEntity, RedeemOptions, RedeemRequest, RedeemResponse, VoidOptions, VoidRequest, VoidResponse };
}
