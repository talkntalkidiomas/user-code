declare module "wix-ratings-definition-backend" {
  /** Definitions provide settings for ratings. */
  interface Definition {
      /**
       * Definition ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision.
       * @readonly
       */
      revision?: string | null;
      /** Definition's namespace (the context of rated entities e.g. store). */
      namespace?: string;
      /** Definition's entity ID (the specific category of rated entities within their context, e.g. sports shoes). */
      entityId?: string;
      /** Attribute settings. */
      attributeSettings?: AttributeSetting[];
      /**
       * Represents the time this definition was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this definition was last updated.
       * @readonly
       */
      _updatedDate?: Date;
  }
  interface AttributeSetting {
      /** Attribute ID. Must be unique across all attributes in definition. */
      _id?: string | null;
      /** Range settings. */
      rangeSetting?: RangeSetting;
  }
  interface RangeSetting {
      /** Minimum (inclusive) value for this attribute. */
      from?: number;
      /** Maximum (inclusive) value for this attribute. */
      to?: number;
  }
  interface CreateDefinitionResponse {
      /** The created definition. */
      definition?: Definition;
  }
  interface GetDefinitionResponse {
      /** The retrieved definition. */
      definition?: Definition;
  }
  interface GetEntityDefinitionResponse {
      /** The retrieved definition. */
      definition?: Definition;
  }
  interface UpdateDefinitionResponse {
      /** The updated definition. */
      definition?: Definition;
  }
  interface DeleteDefinitionResponse {
  }
  interface GetEntityDefinitionIdentifiers {
      namespace: string;
      entityId: string;
  }
  interface UpdateDefinitionDefinition {
      /**
       * Definition ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision.
       * @readonly
       */
      revision?: string | null;
      /** Definition's namespace (the context of rated entities e.g. store). */
      namespace?: string;
      /** Definition's entity ID (the specific category of rated entities within their context, e.g. sports shoes). */
      entityId?: string;
      /** Attribute settings. */
      attributeSettings?: AttributeSetting[];
      /**
       * Represents the time this definition was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this definition was last updated.
       * @readonly
       */
      _updatedDate?: Date;
  }
  interface UpdateDefinitionOptions {
      mask?: string[];
  }
  
  function createDefinition(definition: Definition): Promise<CreateDefinitionResponse>;
  function getDefinition(definitionId: string): Promise<GetDefinitionResponse>;
  function getEntityDefinition(identifiers: GetEntityDefinitionIdentifiers): Promise<GetEntityDefinitionResponse>;
  function updateDefinition(_id: string | null, definition: UpdateDefinitionDefinition, options: UpdateDefinitionOptions): Promise<UpdateDefinitionResponse>;
  function deleteDefinition(definitionId: string, revision: string): Promise<DeleteDefinitionResponse>;
  
  export { createDefinition, deleteDefinition, getDefinition, getEntityDefinition, updateDefinition };
}
