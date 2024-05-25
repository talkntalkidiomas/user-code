declare module "wix-application-backend" {
    const getDecodedAppInstance: () => Promise<Record<string, any> | null>;
    export { getDecodedAppInstance };
}
