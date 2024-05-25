declare module "wix-core-services-dev" {
  interface LongMessage {
      int64Field?: string;
      uint64Field?: string;
      int64ValueField?: string | null;
      uint64ValueField?: string | null;
      sint64Field?: string;
      sfixed64Field?: string;
      fixed64Field?: string;
      durationField?: GoogleProtoDuration;
      _id?: string | null;
  }
  type GoogleProtoDuration = any;
  /**
   * echo given arg1 and arg2
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function longEcho(options?: LongEchoOptions): Promise<LongMessage>;
  interface LongEchoOptions {
      int64Field?: string;
      uint64Field?: string;
      int64ValueField?: string | null;
      uint64ValueField?: string | null;
      sint64Field?: string;
      sfixed64Field?: string;
      fixed64Field?: string;
      durationField?: GoogleProtoDuration;
      _id?: string | null;
  }
  /**
   * echo given arg1 and arg2
   * @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function publicLongEcho(options?: PublicLongEchoOptions): Promise<LongMessage>;
  interface PublicLongEchoOptions {
      int64Field?: string;
      uint64Field?: string;
      int64ValueField?: string | null;
      uint64ValueField?: string | null;
      sint64Field?: string;
      sfixed64Field?: string;
      fixed64Field?: string;
      durationField?: GoogleProtoDuration;
      _id?: string | null;
  }
  
  type metroinspectorV1Long_universal_d_LongMessage = LongMessage;
  const metroinspectorV1Long_universal_d_longEcho: typeof longEcho;
  type metroinspectorV1Long_universal_d_LongEchoOptions = LongEchoOptions;
  const metroinspectorV1Long_universal_d_publicLongEcho: typeof publicLongEcho;
  type metroinspectorV1Long_universal_d_PublicLongEchoOptions = PublicLongEchoOptions;
  namespace metroinspectorV1Long_universal_d {
    export {
      metroinspectorV1Long_universal_d_LongMessage as LongMessage,
      metroinspectorV1Long_universal_d_longEcho as longEcho,
      metroinspectorV1Long_universal_d_LongEchoOptions as LongEchoOptions,
      metroinspectorV1Long_universal_d_publicLongEcho as publicLongEcho,
      metroinspectorV1Long_universal_d_PublicLongEchoOptions as PublicLongEchoOptions,
    };
  }
  
  export { metroinspectorV1Long_universal_d as echo };
}
