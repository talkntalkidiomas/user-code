declare module "wix-fqdn-definitions-backend" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface FqdnDefinition {
      /**
       * name of the fqdn.
       *
       * e.g. wix.stores.v1.catalog
       */
      fqdn?: string;
      entityTransformations?: EntityTransformations;
      /**
       * All EDMs that this FQDN is contained in and its custom transformations, if any.
       *
       * Example:
       *
       * [
       * { "edmName": "wix-dev-backend" },
       * {
       * "edmName": "wix-members-backend",
       * "methodOverrides": [
       * {
       * "originalMethodName": "GetProfile",
       * "edmMethodName": "GetMemberProfile"
       * "return": {
       * "transformations": {
       * simpleMapping: "$.foo.bar"
       * }
       * }
       * }
       * ]
       * }
       * ]
       */
      edmDefinitions?: EdmDefinitionOfFqdn[];
      /** Docs for this entity */
      documentation?: Documentation;
      /**
       * Custom transformation for events.
       *
       * Example:
       *
       * [
       * {
       * "functionName":"wixStores_onProductCreated",
       * "transformations": {
       * "simpleMapping": "$.foo.bar"
       * }
       * }
       * ]
       */
      eventDefinitions?: EventDefinition[];
      /**
       * DB driver definition of fqdn.
       *
       * Example:
       *
       * {
       * "dbDriverName": "Stores",
       * "collectionName": "Products"
       * }
       */
      dbDriverDefinition?: DbDriverDefinitionOfFqdn;
      /** Calculated MD5 hash of the FQDN definition. */
      fqdnDefinitionHash?: string;
  }
  interface EntityTransformations {
      /** From Velo entity to Proto one */
      fromVelo?: Transformation;
      /** From Proto entity to Velo one */
      toVelo?: Transformation;
      /** Paths of [nested] fields to ignore when renaming keys to and from velo style */
      ignorePathsForKeyRenames?: string[];
  }
  interface Transformation extends TransformationKindOneOf {
      /** E.g. { "secret": { "name": "$[0]", "value": "$[1]", "description": "$[2].options.description" } } */
      complexMapping?: Record<string, any> | null;
      /** E.g. "$.id" */
      simpleMapping?: string;
  }
  /** @oneof */
  interface TransformationKindOneOf {
      /** E.g. { "secret": { "name": "$[0]", "value": "$[1]", "description": "$[2].options.description" } } */
      complexMapping?: Record<string, any> | null;
      /** E.g. "$.id" */
      simpleMapping?: string;
  }
  interface EdmDefinitionOfFqdn {
      edmName?: string;
      methodOverrides?: MethodTransform[];
      /** Namespace which the FQDN will be exposed under in the EDM */
      namespace?: string;
      documentation?: Documentation;
      /**
       * By default, the namespace is linked to the FQDN.
       * If you want to link the namespace to a implementing service (the service fqn), you can explicitly specify the fqn.
       */
      service?: string | null;
  }
  interface MethodTransform {
      /** The original method name that should be overriden */
      originalMethodName?: string;
      /** The new method name to be used in the generated EDM, optional */
      edmMethodName?: string;
      /** Any transformations on input arguments */
      input?: Arguments;
      /** Any transformation on return values */
      return?: Arguments;
      /** Example files for the EDM Method */
      examples?: Example[];
      /** Any documentation we need to add / override at the method level */
      documentation?: Documentation;
      /** Any documentation we need to add / override at the method level for any sdk type */
      documentations?: Documentation[];
      /** should be annotated explicitly if the method can be called only with server identity */
      serverOnly?: boolean | null;
      /** should be annotated explicitly if the method should override exposure from proto */
      exposure?: ExposureOverride;
      /** should be annotated explicitly if the documentation of the method has been vetted */
      documentationMaturity?: DocumentationMaturity;
  }
  interface Arguments {
      /** The argument names in the method */
      names?: string[];
      /** Any transformations we need for method arguments */
      transformations?: Transformation;
      /** Any documentation needed for arguments */
      documentation?: Documentation;
  }
  interface Documentation {
      /** Path to a general description file above the entity / method */
      mdFilePath?: string | null;
      /** General descriptor for a complete entity / method */
      description?: string | null;
      /** Opened an issue regarding validations for strings in maps: https://github.com/wix-private/nile-tracker/issues/955 */
      paramOverrides?: Record<string, string>;
      /** Opened an issue regarding validations for strings in maps: https://github.com/wix-private/nile-tracker/issues/955 */
      typeOverrides?: Record<string, string>;
      /** Opened an issue regarding validations for strings in maps: https://github.com/wix-private/nile-tracker/issues/955 */
      eventsTypesOverrides?: Record<string, string>;
      sdkType?: SdkType;
  }
  enum SdkType {
      ALL = "ALL",
      VELO = "VELO",
      PUBLIC_SDK = "PUBLIC_SDK"
  }
  interface Example {
      /** The file path in the EDM definition repo */
      fileName?: string;
      /** The title of the file to be displayed in the DOCs */
      title?: string;
      /** example content */
      content?: string;
      exampleType?: ExampleType;
  }
  enum ExampleType {
      VELO = "VELO",
      PUBLIC_SDK = "PUBLIC_SDK"
  }
  enum ExposureOverride {
      UNKNOWN = "UNKNOWN",
      PRIVATE = "PRIVATE",
      PUBLIC = "PUBLIC"
  }
  enum DocumentationMaturity {
      UNDEFINED = "UNDEFINED",
      PREVIEW = "PREVIEW",
      READY = "READY"
  }
  interface EventDefinition {
      /** event function name E.g. wixStores_onProductCreated */
      functionName?: string;
      /** custom transformation for event */
      transformation?: Transformation;
      /** Any documentation we need to add / override */
      documentation?: EventDocumentation;
      /** examples for event function */
      examples?: Example[];
  }
  interface EventDocumentation {
      /** General descriptor of the event */
      description?: string | null;
      /** Opened an issue regarding validations for strings in maps: https://github.com/wix-private/nile-tracker/issues/955 */
      paramOverrides?: Record<string, string>;
      /** should be annotated explicitly if the documentation of the method has been vetted */
      documentationMaturity?: DocumentationMaturity;
  }
  interface DbDriverDefinitionOfFqdn {
      /** The name of the DB driver that this fqdn will be contained in. */
      dbDriverName?: string;
      /** The name of the collection that this fqdn appears as in the db driver. */
      collectionName?: string;
      /** Opened an issue regarding validations for strings in maps: https://github.com/wix-private/nile-tracker/issues/955 */
      queryOverrides?: Record<string, QueryOverridesFieldValue>;
  }
  interface QueryOverridesFieldValue {
      value?: any;
  }
  interface GetRequest {
      fqdnName?: string;
  }
  interface GetResponse {
      fqdnDefinition?: FqdnDefinition;
  }
  interface GetFqdnDefinitionRequest {
      fqdnName: string;
  }
  interface GetFqdnDefinitionResponse {
      fqdnDefinition?: FqdnDefinition;
  }
  interface DeleteFqdnDefinitionRequest {
      fqdnName?: string;
  }
  interface DeleteFqdnDefinitionResponse {
  }
  interface ResetFqdnDefinitionCacheRequest {
      fqdnName?: string;
  }
  interface ResetFqdnDefinitionCacheResponse {
  }
  interface TriggerFqdnChangeRequest {
      fqdnName?: string;
  }
  interface TriggerFqdnChangeResponse {
  }
  interface RegisterEdmDefinitionToFqdnRequest {
      fqdn?: string;
      edmDefinition?: EdmDefinitionOfFqdn;
  }
  interface RegisterEdmDefinitionToFqdnResponse {
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
  /** @internal
   * @documentationMaturity preview
   * @requiredField fqdnName
   * @adminMethod
   */
  function getFqdnDefinition(fqdnName: string): Promise<GetFqdnDefinitionResponse>;
  
  export { ActionEvent, Arguments, DbDriverDefinitionOfFqdn, DeleteFqdnDefinitionRequest, DeleteFqdnDefinitionResponse, Documentation, DocumentationMaturity, DomainEvent, DomainEventBodyOneOf, EdmDefinitionOfFqdn, EntityCreatedEvent, EntityDeletedEvent, EntityTransformations, EntityUpdatedEvent, EventDefinition, EventDocumentation, Example, ExampleType, ExposureOverride, FqdnDefinition, GetFqdnDefinitionRequest, GetFqdnDefinitionResponse, GetRequest, GetResponse, MethodTransform, QueryOverridesFieldValue, RegisterEdmDefinitionToFqdnRequest, RegisterEdmDefinitionToFqdnResponse, ResetFqdnDefinitionCacheRequest, ResetFqdnDefinitionCacheResponse, SdkType, Transformation, TransformationKindOneOf, TriggerFqdnChangeRequest, TriggerFqdnChangeResponse, __debug, getFqdnDefinition };
}
