declare module "wix-recruitment-agencies-info-backend" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface Agency {
      /** @readonly */
      _id?: string;
      /** agency user */
      agencyUser?: AgencyUser;
      /** is this message for production or for testing? */
      production?: boolean;
      /** tenant id */
      tenantId?: string;
  }
  interface AgencyUser {
      /** agency user's email */
      email?: string;
      /** agency user's name */
      firstName?: string;
      /** agency user's name */
      lastName?: string;
      /** is agency user active? */
      isActive?: boolean;
  }
  interface DomainEvent extends DomainEventBodyOneOf {
      createdEvent?: EntityCreatedEvent;
      updatedEvent?: EntityUpdatedEvent;
      deletedEvent?: EntityDeletedEvent;
      actionEvent?: ActionEvent;
      extendedFieldsUpdatedEvent?: ExtendedFieldsUpdatedEvent;
      /** random GUID so clients can tell if event was already handled */
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
      /**
       * Assuming that all messages including Actions have id
       * Example: The id of the specific order, the id of a specific campaign
       */
      entityId?: string;
      /** The time of the event. Useful if there was a delay in dispatching */
      eventTime?: Date;
      /**
       * A field that should be set if this event was triggered by an anonymize request.
       * For example you must set it to true when sending an event as a result of a GDPR right to be forgotten request.
       * NOTE: This field is not relevant for `EntityCreatedEvent` but is located here for better ergonomics of consumers.
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
      extendedFieldsUpdatedEvent?: ExtendedFieldsUpdatedEvent;
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
      entityUpdates?: Record<string, any>;
  }
  interface EntityDeletedEvent {
      /**
       * Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled
       * @internal
       */
      movedToTrash?: boolean | null;
  }
  interface ActionEvent {
      bodyAsJson?: string;
  }
  interface ExtendedFieldsUpdatedEvent {
      currentEntityAsJson?: string;
  }
  interface Empty {
  }
  interface GetAgencyInfoRequest {
  }
  interface GetAgencyInfoResponse {
      /** agency info of current user */
      agency?: Agency;
  }
  /**
   * GetAgencyInfo returns current agency info
   * @internal
   * @documentationMaturity preview
   */
  function getAgencyInfo(): Promise<GetAgencyInfoResponse>;
  
  const peopleAgenciesPortalV1Agency_universal_d___debug: typeof __debug;
  type peopleAgenciesPortalV1Agency_universal_d_Agency = Agency;
  type peopleAgenciesPortalV1Agency_universal_d_AgencyUser = AgencyUser;
  type peopleAgenciesPortalV1Agency_universal_d_DomainEvent = DomainEvent;
  type peopleAgenciesPortalV1Agency_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type peopleAgenciesPortalV1Agency_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type peopleAgenciesPortalV1Agency_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type peopleAgenciesPortalV1Agency_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type peopleAgenciesPortalV1Agency_universal_d_ActionEvent = ActionEvent;
  type peopleAgenciesPortalV1Agency_universal_d_ExtendedFieldsUpdatedEvent = ExtendedFieldsUpdatedEvent;
  type peopleAgenciesPortalV1Agency_universal_d_Empty = Empty;
  type peopleAgenciesPortalV1Agency_universal_d_GetAgencyInfoRequest = GetAgencyInfoRequest;
  type peopleAgenciesPortalV1Agency_universal_d_GetAgencyInfoResponse = GetAgencyInfoResponse;
  const peopleAgenciesPortalV1Agency_universal_d_getAgencyInfo: typeof getAgencyInfo;
  namespace peopleAgenciesPortalV1Agency_universal_d {
    export {
      peopleAgenciesPortalV1Agency_universal_d___debug as __debug,
      peopleAgenciesPortalV1Agency_universal_d_Agency as Agency,
      peopleAgenciesPortalV1Agency_universal_d_AgencyUser as AgencyUser,
      peopleAgenciesPortalV1Agency_universal_d_DomainEvent as DomainEvent,
      peopleAgenciesPortalV1Agency_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      peopleAgenciesPortalV1Agency_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      peopleAgenciesPortalV1Agency_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      peopleAgenciesPortalV1Agency_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      peopleAgenciesPortalV1Agency_universal_d_ActionEvent as ActionEvent,
      peopleAgenciesPortalV1Agency_universal_d_ExtendedFieldsUpdatedEvent as ExtendedFieldsUpdatedEvent,
      peopleAgenciesPortalV1Agency_universal_d_Empty as Empty,
      peopleAgenciesPortalV1Agency_universal_d_GetAgencyInfoRequest as GetAgencyInfoRequest,
      peopleAgenciesPortalV1Agency_universal_d_GetAgencyInfoResponse as GetAgencyInfoResponse,
      peopleAgenciesPortalV1Agency_universal_d_getAgencyInfo as getAgencyInfo,
    };
  }
  
  export { peopleAgenciesPortalV1Agency_universal_d as recruitmentAgenciesInfo };
}
