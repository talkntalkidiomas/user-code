/**
 * [Read more](https://www.wix.com/corvid/reference/wix-secrets-backend.v2.html#)
 */
declare module 'wix-secrets-backend.v2' {
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-secrets-backend-v2.html#secrets)
     */
    const secrets: Secrets;
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-secrets-backend-v2.Secrets.html#)
     */
    interface Secrets {
        /**
         * Creates a new secret.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-secrets-backend-v2.Secrets.html#createSecret)
         */
        createSecret(secret: Secrets.Secret): Promise<Secrets.CreateSecretResponse>;
        /**
         * Deletes an existing secret by ID.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-secrets-backend-v2.Secrets.html#deleteSecret)
         */
        deleteSecret(_id: string): Promise<void>;
        /**
         * Retrieves the secret value specified by the secret name.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-secrets-backend-v2.Secrets.html#getSecretValue)
         */
        getSecretValue(name: string): Promise<Secrets.GetSecretValueResponse>;
        /**
         * Retrieves a list of objects containing information about all secrets.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-secrets-backend-v2.Secrets.html#listSecretInfo)
         */
        listSecretInfo(): Promise<Secrets.ListSecretInfoResponse>;
        /**
         * Updates the specified fields of an existing secret by ID.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-secrets-backend-v2.Secrets.html#updateSecret)
         */
        updateSecret(_id: string, secret: Secrets.Secret): Promise<void>;
    }
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-secrets-backend-v2.Secrets.html#)
     */
    namespace Secrets {
        type CreateSecretRequest = {
            /**
             * The object including the fields of a new secret.
             */
            secret: Secrets.Secret;
        };
        type CreateSecretResponse = {
            /**
             * The globally-unique ID assigned to the secret.
             */
            _id?: string;
        };
        type DeleteSecretRequest = {
            /**
             * The unique ID of the secret to be deleted.
             */
            _id: string;
        };
        type DeleteSecretResponse = {};
        type GetSecretValueRequest = {
            /**
             * The name of the secret to get the value of.
             */
            name: string;
        };
        type GetSecretValueResponse = {
            /**
             * The plaintext, unencrypted value of the secret.
             */
            value?: string;
        };
        type ListSecretInfoRequest = {};
        type ListSecretInfoResponse = {
            /**
             * Object containing information for each secret.
             */
            secrets?: Array<Secrets.Secret>;
        };
        type Secret = {
            /**
             * The date and time the secreted was created.
             */
            _createdDate?: Date;
            /**
             * The secret's unique ID.
             */
            _id?: string;
            /**
             * The date and time the secret was last updated.
             */
            _updatedDate?: Date;
            /**
             * An optional text describing the secret's purpose or any other notes about it.
             */
            description?: string;
            /**
             * A unique, meaningful name used for retrieving the secret at runtime with the [`getSecretValue()`](#getsecretvalue) function. You can use alphanumeric characters and the following special characters: `_+=-@#$`. Spaces are not supported.
             */
            name?: string;
        };
        type UpdateSecretRequest = {
            /**
             * The unique ID of the secret to be updated.
             */
            _id: string;
            /**
             * The secret fields to update.
             */
            secret: Secrets.Secret;
        };
        type UpdateSecretResponse = {};
    }
}
