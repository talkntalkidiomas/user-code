declare module "wix-iot-devices-backend" {
  interface Device {
      /** @readonly */
      deviceId?: string;
      /** @readonly */
      gatewayId?: string;
      title?: string;
      iconUrl?: string;
      gatewayDeviceId?: string;
      entities?: Entity[];
  }
  interface Entity extends EntityKindOneOf {
      entityId?: string;
      thermometer?: Thermometer;
      switch?: Switch;
      presenceSensor?: PresenceSensor;
  }
  /** @oneof */
  interface EntityKindOneOf {
      thermometer?: Thermometer;
      switch?: Switch;
      presenceSensor?: PresenceSensor;
  }
  interface Thermometer {
      temperature?: number;
  }
  interface Switch {
      on?: boolean;
  }
  interface PresenceSensor {
      present?: boolean;
  }
  interface ListDevicesResponse {
      devices?: Device[];
  }
  interface AddDeviceResponse {
      device?: Device;
  }
  interface RemoveDeviceResponse {
  }
  interface ListDiscoveredDevicesResponse {
      devices?: Device[];
  }
  interface SetDeviceStateResponse {
      device?: Device;
  }
  interface TestResponse {
  }
  interface AddDeviceOptions {
      deviceId?: string | null;
      gatewayDeviceId?: string;
      gatewayId?: string;
      title?: string;
  }
  interface SetDeviceStateOptions {
      deviceId?: string;
      switch?: Switch;
  }
  
  function listDevices(): Promise<ListDevicesResponse>;
  function addDevice(options?: AddDeviceOptions): Promise<AddDeviceResponse>;
  function removeDevice(deviceId: string): Promise<RemoveDeviceResponse>;
  function listDiscoveredDevices(): Promise<ListDiscoveredDevicesResponse>;
  function setDeviceState(options?: SetDeviceStateOptions): Promise<SetDeviceStateResponse>;
  function test(): Promise<TestResponse>;
  
  const iotV1Device_backend_d_listDevices: typeof listDevices;
  const iotV1Device_backend_d_addDevice: typeof addDevice;
  const iotV1Device_backend_d_removeDevice: typeof removeDevice;
  const iotV1Device_backend_d_listDiscoveredDevices: typeof listDiscoveredDevices;
  const iotV1Device_backend_d_setDeviceState: typeof setDeviceState;
  const iotV1Device_backend_d_test: typeof test;
  namespace iotV1Device_backend_d {
    export {
      iotV1Device_backend_d_listDevices as listDevices,
      iotV1Device_backend_d_addDevice as addDevice,
      iotV1Device_backend_d_removeDevice as removeDevice,
      iotV1Device_backend_d_listDiscoveredDevices as listDiscoveredDevices,
      iotV1Device_backend_d_setDeviceState as setDeviceState,
      iotV1Device_backend_d_test as test,
    };
  }
  
  export { iotV1Device_backend_d as state };
}
