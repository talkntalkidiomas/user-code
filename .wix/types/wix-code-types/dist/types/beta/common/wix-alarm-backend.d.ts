declare module "wix-alarm-backend" {
  interface AlarmResponse {
      time?: Date;
  }
  
  function alarm(seconds: number): Promise<AlarmResponse>;
  
  export { alarm };
}
