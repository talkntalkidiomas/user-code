declare module "wix-secrets-backend.v2" {
  interface Secret {
      /**
       * The secret's unique ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * A unique, meaningful name used for retrieving the secret at runtime with the `getSecretValue()` function. You can use alphanumeric characters and the following special characters: `_+=-@#$`. Spaces are not supported.
       *
       */
      name?: string | null;
      /** An optional text describing the secret's purpose or any other notes about it. */
      description?: string | null;
      /** The confidential value to protect, such as an API key.  */
      value?: string | null;
      /**
       * The date and time the secreted was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * The date and time the secret was last updated.
       * @readonly
       */
      _updatedDate?: Date;
  }
  interface GetSecretValueRequest {
      /** The name of the secret to get the value of. */
      name: string;
  }
  interface GetSecretValueResponse {
      /**
       * The plaintext, unencrypted value of the secret.
       *
       */
      value?: string;
  }
  interface ListSecretInfoRequest {
  }
  interface ListSecretInfoResponse {
      /** Object containing information for each secret.  */
      secrets?: Secret[];
  }
  interface CreateSecretRequest {
      /** The object including the fields of a new secret.  */
      secret: Secret;
  }
  interface CreateSecretResponse {
      /**
       * The globally-unique ID assigned to the secret.
       *
       */
      _id?: string;
  }
  interface DeleteSecretRequest {
      /**
       * The unique ID of the secret to be deleted.
       *
       */
      _id: string;
  }
  interface DeleteSecretResponse {
  }
  interface UpdateSecretRequest {
      /** The unique ID of the secret to be updated. */
      _id: string;
      /** The secret fields to update. */
      secret: Secret;
  }
  interface UpdateSecretResponse {
  }
  interface DomainEvent extends DomainEventBodyOneOf {
      createdEvent?: EntityCreatedEvent;
      updatedEvent?: EntityUpdatedEvent;
      deletedEvent?: EntityDeletedEvent;
      actionEvent?: ActionEvent;
      /**
       * Unique event ID.
       * Allows clients to ignore duplicate webhooks.
       */
      _id?: string;
      /**
       * Assumes actions are also always typed to an entity_type
       * Example: wix.stores.catalog.product, wix.bookings.session, wix.payments.transaction
       */
      entityFqdn?: string;
      /**
       * This is top level to ease client code dispatching of messages (switch on entity_fqdn+slug)
       * This is although the created/updated/deleted notion is duplication of the oneof types
       * Example: created/updated/deleted/started/completed/email_opened
       */
      slug?: string;
      /** ID of the entity associated with the event. */
      entityId?: string;
      /** Event timestamp. */
      eventTime?: Date;
      /**
       * Whether the event was triggered as a result of a privacy regulation application
       * (for example, GDPR).
       */
      triggeredByAnonymizeRequest?: boolean | null;
      /** If present, indicates the action that triggered the event. */
      originatedFrom?: string | null;
      /**
       * A sequence number defining the order of updates to the underlying entity.
       * For example, given that some entity was updated at 16:00 and than again at 16:01,
       * it is guaranteed that the sequence number of the second update is strictly higher than the first.
       * As the consumer, you can use this value to ensure that you handle messages in the correct order.
       * To do so, you will need to persist this number on your end, and compare the sequence number from the
       * message against the one you have stored. Given that the stored number is higher, you should ignore the message.
       */
      entityEventSequence?: string | null;
  }
  /** @oneof */
  interface DomainEventBodyOneOf {
      createdEvent?: EntityCreatedEvent;
      updatedEvent?: EntityUpdatedEvent;
      deletedEvent?: EntityDeletedEvent;
      actionEvent?: ActionEvent;
  }
  interface EntityCreatedEvent {
      entityAsJson?: string;
      /**
       * Indicates the event was triggered by a restore-from-trashbin operation for a previously deleted entity
       * @internal
       */
      triggeredByUndelete?: boolean | null;
  }
  interface EntityUpdatedEvent {
      /**
       * Since platformized APIs only expose PATCH and not PUT we can't assume that the fields sent from the client are the actual diff.
       * This means that to generate a list of changed fields (as opposed to sent fields) one needs to traverse both objects.
       * We don't want to impose this on all developers and so we leave this traversal to the notification recipients which need it.
       */
      currentEntityAsJson?: string;
      /**
       * This field is currently part of the of the EntityUpdatedEvent msg, but scala/node libraries which implements the domain events standard
       * wont populate it / have any reference to it in the API.
       * The main reason for it is that fetching the old entity from the DB will have a performance hit on an update operation so unless truly needed,
       * the developer should send only the new (current) entity.
       * An additional reason is not wanting to send this additional entity over the wire (kafka) since in some cases it can be really big
       * Developers that must reflect the old entity will have to implement their own domain event sender mechanism which will follow the DomainEvent proto message.
       * @internal
       */
      previousEntityAsJson?: string | null;
      /**
       * WIP - This property will hold both names and values of the updated fields of the entity.
       * For more details please see [adr](https://docs.google.com/document/d/1PdqsOM20Ph2HAkmx8zvUnzzk3Sekp3BR9h34wSvsRnI/edit#heading=h.phlw87mh2imx) or [issue](https://github.com/wix-private/nile-tracker/issues/363)
       * @internal
       */
      modifiedFields?: Record<string, any>;
  }
  interface EntityDeletedEvent {
      /**
       * Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled
       * @internal
       */
      movedToTrash?: boolean | null;
      /** Entity that was deleted */
      deletedEntityAsJson?: string | null;
  }
  interface ActionEvent {
      bodyAsJson?: string;
  }
  /**
   * Retrieves the secret value specified by the secret name.
   *
   * The `getSecretValue()` function returns a Promise that resolves to the value of the secret with the specified given name.
   *
   * >**Note:**
   * > Only use a secret's value in the backend code. Returning the secret value in the frontend is a security risk.
   * @public
   * @requiredField name
   * @param name - The name of the secret to get the value of.
   * @adminMethod
   * @returns Fulfilled - The value of the secret. Rejected - Error message.
   */
  function getSecretValue(name: string): Promise<GetSecretValueResponse>;
  /**
   * Retrieves a list of objects containing information about all secrets.
   *
   * The `listSecretInfo()` function returns a Promise that resolves to a list containing information about all secrets stored on your site.
   *
   * > **Note:**
   * > - The secret's value does not get returned for security reasons. To retrieve a secret's value, use the [`getSecretValue()`](#getSecretValue) function.
   * @public
   * @adminMethod
   * @returns Fulfilled - A list of objects containing information about your site's secrets. Rejected - Error message.
   */
  function listSecretInfo(): Promise<ListSecretInfoResponse>;
  /**
   * Creates a new secret.
   *
   * The `createSecret()` function returns a Promise that resolves secret ID when the secret is created.
   *
   * >**Notes:**
   * > - The secret's name cannot start with `'wix'` or be identical to an existing secret's name.
   * > - Don't leave private keys in your code. Leaving them in your code is a security risk. Make sure to delete the keys from the code after running `createSecret()`.
   * @public
   * @requiredField secret
   * @requiredField secret.name
   * @requiredField secret.value
   * @param secret - Fields of a new secret.
   * @adminMethod
   * @returns Fulfilled - The ID of the created secret.
   * Rejected - Error message.
   */
  function createSecret(secret: Secret): Promise<string>;
  /**
   * Deletes an existing secret by ID.
   *
   * The `deleteSecret()` function returns a Promise that resolves when the secret is deleted. You can retrieve the secret `_id` using the [`listSecretInfo()`](#listsecretinfo) function.
   *
   * >**Note:**
   * > Deleting a secret is irreversible and will break all code using the secret.
   *
   * @public
   * @requiredField _id
   * @param _id - The unique ID of the secret to be deleted.
   * @adminMethod
   * @returns Fulfilled - When the secret is successfully deleted. Rejected - Error message.
   */
  function deleteSecret(_id: string): Promise<void>;
  /**
   * Updates all the fields of an existing secret at once
   * @param _id - The unique ID of the secret to be updated.
   * @param secret - The secret fields to update.
   * @internal
   * @requiredField _id
   * @requiredField secret
   * @requiredField secret.name
   * @requiredField secret.value
   * @adminMethod
   * @returns Fulfilled - When the secret is updated.
   * Rejected - Error message.
   */
  function internalUpdateSecret(_id: string, secret: Secret): Promise<void>;
  /**
   * Updates the specified fields of an existing secret by ID.
   *
   *
   * The `updateSecret()` function returns a Promise that resolves when the secret is successfully updated. You can update one or more fields. Only fields passed in the `secret` object will be updated. All other properties will remain unchanged.
   *
   * You can retrieve the `_id` parameter from the [`listSecretInfo()`](#listsecretinfo) function. The secret `_id` is different from the secret `name` used by the [`getSecretValue()`](#getsecretvalue) function.
   *
   * > **Notes:**
   * > - Changing a secret's name or value will break all code using the secret.
   * > - You can't rename the secret with a name of an existing secret.
   * > - Don't leave private keys in your code! Leaving them in is a security risk. Make sure to delete the keys from the code after running `updateSecret()`.
   * @param _id - The unique ID of the secret to be updated.
   * @param secret - The secret fields to update.
   * @public
   * @requiredField _id
   * @requiredField secret
   * @adminMethod
   * @returns Fulfilled - When the secret is updated.
   * Rejected - Error message.
   */
  function updateSecret(_id: string, secret: Secret): Promise<void>;
  
  type veloSecretsVaultV1Secret_universal_d_Secret = Secret;
  type veloSecretsVaultV1Secret_universal_d_GetSecretValueRequest = GetSecretValueRequest;
  type veloSecretsVaultV1Secret_universal_d_GetSecretValueResponse = GetSecretValueResponse;
  type veloSecretsVaultV1Secret_universal_d_ListSecretInfoRequest = ListSecretInfoRequest;
  type veloSecretsVaultV1Secret_universal_d_ListSecretInfoResponse = ListSecretInfoResponse;
  type veloSecretsVaultV1Secret_universal_d_CreateSecretRequest = CreateSecretRequest;
  type veloSecretsVaultV1Secret_universal_d_CreateSecretResponse = CreateSecretResponse;
  type veloSecretsVaultV1Secret_universal_d_DeleteSecretRequest = DeleteSecretRequest;
  type veloSecretsVaultV1Secret_universal_d_DeleteSecretResponse = DeleteSecretResponse;
  type veloSecretsVaultV1Secret_universal_d_UpdateSecretRequest = UpdateSecretRequest;
  type veloSecretsVaultV1Secret_universal_d_UpdateSecretResponse = UpdateSecretResponse;
  type veloSecretsVaultV1Secret_universal_d_DomainEvent = DomainEvent;
  type veloSecretsVaultV1Secret_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type veloSecretsVaultV1Secret_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type veloSecretsVaultV1Secret_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type veloSecretsVaultV1Secret_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type veloSecretsVaultV1Secret_universal_d_ActionEvent = ActionEvent;
  const veloSecretsVaultV1Secret_universal_d_getSecretValue: typeof getSecretValue;
  const veloSecretsVaultV1Secret_universal_d_listSecretInfo: typeof listSecretInfo;
  const veloSecretsVaultV1Secret_universal_d_createSecret: typeof createSecret;
  const veloSecretsVaultV1Secret_universal_d_deleteSecret: typeof deleteSecret;
  const veloSecretsVaultV1Secret_universal_d_internalUpdateSecret: typeof internalUpdateSecret;
  const veloSecretsVaultV1Secret_universal_d_updateSecret: typeof updateSecret;
  namespace veloSecretsVaultV1Secret_universal_d {
    export {
      veloSecretsVaultV1Secret_universal_d_Secret as Secret,
      veloSecretsVaultV1Secret_universal_d_GetSecretValueRequest as GetSecretValueRequest,
      veloSecretsVaultV1Secret_universal_d_GetSecretValueResponse as GetSecretValueResponse,
      veloSecretsVaultV1Secret_universal_d_ListSecretInfoRequest as ListSecretInfoRequest,
      veloSecretsVaultV1Secret_universal_d_ListSecretInfoResponse as ListSecretInfoResponse,
      veloSecretsVaultV1Secret_universal_d_CreateSecretRequest as CreateSecretRequest,
      veloSecretsVaultV1Secret_universal_d_CreateSecretResponse as CreateSecretResponse,
      veloSecretsVaultV1Secret_universal_d_DeleteSecretRequest as DeleteSecretRequest,
      veloSecretsVaultV1Secret_universal_d_DeleteSecretResponse as DeleteSecretResponse,
      veloSecretsVaultV1Secret_universal_d_UpdateSecretRequest as UpdateSecretRequest,
      veloSecretsVaultV1Secret_universal_d_UpdateSecretResponse as UpdateSecretResponse,
      veloSecretsVaultV1Secret_universal_d_DomainEvent as DomainEvent,
      veloSecretsVaultV1Secret_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      veloSecretsVaultV1Secret_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      veloSecretsVaultV1Secret_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      veloSecretsVaultV1Secret_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      veloSecretsVaultV1Secret_universal_d_ActionEvent as ActionEvent,
      veloSecretsVaultV1Secret_universal_d_getSecretValue as getSecretValue,
      veloSecretsVaultV1Secret_universal_d_listSecretInfo as listSecretInfo,
      veloSecretsVaultV1Secret_universal_d_createSecret as createSecret,
      veloSecretsVaultV1Secret_universal_d_deleteSecret as deleteSecret,
      veloSecretsVaultV1Secret_universal_d_internalUpdateSecret as internalUpdateSecret,
      veloSecretsVaultV1Secret_universal_d_updateSecret as updateSecret,
    };
  }
  
  export { veloSecretsVaultV1Secret_universal_d as secrets };
}
