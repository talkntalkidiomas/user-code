declare module "wix-echo-backend" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface MessageItem {
      /** inner_message comment from EchoMessage proto def */
      innerMessage?: string;
  }
  interface EchoRequest {
      /** 1st part of the message */
      arg1: string;
      /** 2nd part of the message */
      arg2?: string;
      /** this field test translatable annotation */
      titleField?: string;
      someInt32?: number;
      someDate?: Date;
  }
  interface EchoResponse {
      /**
       * override EchoResponse.echoMessage
       *
       */
      echoMessage?: EchoMessage;
      /** messge reseult as string */
      message?: string;
  }
  interface Dispatched {
      /** the message someone says */
      echo?: EchoMessage;
  }
  interface EchoMessage {
      veloMessage: string;
      id: string;
  }
  /**
   * Another override description function 4
   * @param arg1 - 1st part of the message
   * @public
   * @documentationMaturity preview
   * @requiredField arg1
   * @param arg2 - modified comment for arg2 el hovav
   * @adminMethod
   * @returns ## override return 4
   */
  function echo(arg1: string, options?: EchoOptions): Promise<string>;
  interface EchoOptions {
      /** 2nd part of the message */
      arg2?: string;
      /** this field test translatable annotation */
      titleField?: string;
      someInt32?: number;
      someDate?: Date;
  }
  
  const metroinspectorV1Echo_universal_d___debug: typeof __debug;
  type metroinspectorV1Echo_universal_d_MessageItem = MessageItem;
  type metroinspectorV1Echo_universal_d_EchoRequest = EchoRequest;
  type metroinspectorV1Echo_universal_d_EchoResponse = EchoResponse;
  type metroinspectorV1Echo_universal_d_Dispatched = Dispatched;
  type metroinspectorV1Echo_universal_d_EchoMessage = EchoMessage;
  const metroinspectorV1Echo_universal_d_echo: typeof echo;
  type metroinspectorV1Echo_universal_d_EchoOptions = EchoOptions;
  namespace metroinspectorV1Echo_universal_d {
    export {
      metroinspectorV1Echo_universal_d___debug as __debug,
      metroinspectorV1Echo_universal_d_MessageItem as MessageItem,
      metroinspectorV1Echo_universal_d_EchoRequest as EchoRequest,
      metroinspectorV1Echo_universal_d_EchoResponse as EchoResponse,
      metroinspectorV1Echo_universal_d_Dispatched as Dispatched,
      metroinspectorV1Echo_universal_d_EchoMessage as EchoMessage,
      metroinspectorV1Echo_universal_d_echo as echo,
      metroinspectorV1Echo_universal_d_EchoOptions as EchoOptions,
    };
  }
  
  export { metroinspectorV1Echo_universal_d as metroinspector };
}
