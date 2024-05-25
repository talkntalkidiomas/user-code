declare module "interfaces-editor-deployments-v1-deployment-pipeline-provider" {
  type BusinessError<T = unknown> = {
      __tag: 'BusinessError';
      httpCode: string;
      errorDescription: string;
      applicationCode: string;
      messageSchema: string;
      data: T;
  };
  
  interface InvokeDeploymentPipelineRequest {
      /** The deployment creation process id */
      deploymentId: string;
      /** The deployment pipeline implementer id as appears in the SPI Config */
      deploymentPipelineId: string;
  }
  interface InvokeDeploymentPipelineResponse {
  }
  interface AbortDeploymentPipelineRequest {
      /** The deployment creation process id */
      deploymentId: string;
      /** The deployment pipeline implementer id as appears in the SPI Config */
      deploymentPipelineId: string;
  }
  interface AbortDeploymentPipelineResponse {
  }
  interface GetDeploymentPipelineResultsRequest {
      /** The deployment creation process id */
      deploymentId: string;
      /** The deployment pipeline implementer id as appears in the SPI Config */
      deploymentPipelineId: string;
  }
  interface GetDeploymentPipelineResultsResponse {
      /** The full results - per task. */
      tasksDescriptions?: TaskDescription[];
  }
  interface TaskDescription {
      /** Name of the task for internal references. For example: "user code bundling". */
      taskName?: string;
      /** Description about the tasks results. */
      description?: string | null;
      /** Task status */
      status?: TaskStatus;
  }
  enum TaskStatus {
      UNDEFINED = "UNDEFINED",
      SUCCESS = "SUCCESS",
      ERROR = "ERROR"
  }
  interface DeploymentPipelineProviderConfig {
      /** URI where the SPI Implementer is deployed */
      deploymentPipelineUri?: SpiBaseUri;
      /** The deployment pipeline implementer id */
      deploymentPipelineId?: string;
  }
  interface SpiBaseUri {
      /** URI that will be used by the host to call the implementer. The path-suffix defined on the method will be appended to it */
      baseUri?: string;
      /** override method mappings per method */
      alternativeUris?: AlternativeUri[];
  }
  interface AlternativeUri {
      /** name of the method as it appears in the proto */
      methodName?: string;
      /** absolute uri that will be used by the host to call that method. The path-suffix mapped from the method http option will NOT be appended to this URI. For TPAs. it must be https */
      absoluteUri?: string;
  }
  /**
   * this message is not directly used by any service,
   * it exists to describe the expected parameters that SHOULD be provided to invoked Velo methods as part of open-platform.
   * e.g. SPIs, event-handlers, etc..
   * NOTE: this context object MUST be provided as the last argument in each Velo method signature.
   *
   * Example:
   * ```typescript
   * export function wixStores_onOrderCanceled(event: OrderCanceledEvent, context: Context) {
   * ...
   * }
   * ```
   */
  interface Context {
      /** A unique identifier for each request. Can be used for logging / troubleshooting */
      requestId?: string | null;
      /** 3 capital letters string representing a currency according to ISO-4217 */
      currency?: string | null;
      /** The identification type and identity data */
      identity?: IdentificationData;
      /** A string representing a language and region in the format of "xx-XX". First 2 letters represent the language code according to ISO 639-1. This is followed by a dash "-", and then a by 2 capital letters representing the region according to ISO 3166-2 */
      languages?: string[];
      /** App instance ID of SPI in context */
      instanceId?: string | null;
  }
  enum IdentityType {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  interface IdentificationData extends IdentificationDataIdOneOf {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
      /** @readonly */
      identityType?: IdentityType;
  }
  /** @oneof */
  interface IdentificationDataIdOneOf {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
  }
  interface InvokeDeploymentPipelineOptions {
      /** The deployment pipeline implementer id as appears in the SPI Config */
      deploymentPipelineId: string;
  }
  interface AbortDeploymentPipelineOptions {
      /** The deployment pipeline implementer id as appears in the SPI Config */
      deploymentPipelineId: string;
  }
  interface GetDeploymentPipelineResultsOptions {
      /** The deployment pipeline implementer id as appears in the SPI Config */
      deploymentPipelineId: string;
  }
  
  export { AbortDeploymentPipelineOptions, AbortDeploymentPipelineRequest, AbortDeploymentPipelineResponse, AlternativeUri, BusinessError, Context, DeploymentPipelineProviderConfig, GetDeploymentPipelineResultsOptions, GetDeploymentPipelineResultsRequest, GetDeploymentPipelineResultsResponse, IdentificationData, IdentificationDataIdOneOf, IdentityType, InvokeDeploymentPipelineOptions, InvokeDeploymentPipelineRequest, InvokeDeploymentPipelineResponse, SpiBaseUri, TaskDescription, TaskStatus };
}
