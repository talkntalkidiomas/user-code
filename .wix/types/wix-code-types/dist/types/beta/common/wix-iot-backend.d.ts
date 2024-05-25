declare module "wix-iot-backend" {
  interface State {
      /** @readonly */
      _id?: string;
      /** @readonly */
      entityId?: string;
      state?: string;
      /** @readonly */
      lastChanged?: Date;
      /** @readonly */
      attributes?: Record<string, any> | null;
  }
  interface ListResponse {
      states?: State[];
  }
  interface GetResponse {
      state?: State;
  }
  interface UpdateResponse {
      state?: State;
  }
  interface UpdateOptions {
      state: {
          /** @readonly */
          _id?: string;
          state?: string;
          /** @readonly */
          lastChanged?: Date;
          /** @readonly */
          attributes?: Record<string, any> | null;
      };
  }
  
  function list(): Promise<ListResponse>;
  function get(entityId: string): Promise<GetResponse>;
  function update(entityId: string, options?: UpdateOptions): Promise<UpdateResponse>;
  
  const iotV1State_backend_d_list: typeof list;
  const iotV1State_backend_d_get: typeof get;
  const iotV1State_backend_d_update: typeof update;
  namespace iotV1State_backend_d {
    export {
      iotV1State_backend_d_list as list,
      iotV1State_backend_d_get as get,
      iotV1State_backend_d_update as update,
    };
  }
  
  export { iotV1State_backend_d as state };
}
