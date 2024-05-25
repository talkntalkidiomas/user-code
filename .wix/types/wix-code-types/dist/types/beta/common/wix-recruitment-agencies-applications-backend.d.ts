declare module "wix-recruitment-agencies-applications-backend" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface AgencyApplication {
      /** Candidate's name */
      candidateFirstName?: string;
      /** Candidate's name */
      candidateLastName?: string;
      /** Candidate's email */
      candidateEmail?: string;
      /** Candidate's application short (4 digits) number */
      positionNum?: number;
      /** Candidate's applications title (posting title in People system) */
      positionTitle?: string;
      /** Hiring process short status */
      status?: HiringProcessStatusEnum;
      /** Hiring process long status */
      statusV2?: HiringProcessStatusV2Enum;
      /** Hiring process source - where the process initiated from */
      source?: Source;
      /**
       * PostingId in people system
       * @readonly
       */
      postingId?: string;
      /** is eligible for repeated application */
      isEligibleForRepeatedApplication?: boolean;
      /** @readonly */
      _id?: string;
  }
  interface HiringProcessStatusEnum {
      /** Hiring process status */
      status?: HiringProcessStatus;
  }
  enum HiringProcessStatus {
      ACTIVE = "ACTIVE",
      REJECTED = "REJECTED",
      HIRED = "HIRED"
  }
  interface HiringProcessStatusV2Enum {
      /** Hiring process status */
      status?: HiringProcessStatusV2;
  }
  enum HiringProcessStatusV2 {
      ACTIVE = "ACTIVE",
      AWAITING_REJECTION_NOTIFICATION = "AWAITING_REJECTION_NOTIFICATION",
      REJECTED = "REJECTED",
      KEPT_FOR_LATER = "KEPT_FOR_LATER",
      MOVED_FOR_ANOTHER_POSITION = "MOVED_FOR_ANOTHER_POSITION",
      HIRED = "HIRED",
      HIRED_FOR_ANOTHER_POSITION = "HIRED_FOR_ANOTHER_POSITION",
      STARTED_INTERNAL_PROCESS = "STARTED_INTERNAL_PROCESS"
  }
  interface Source extends SourceValueOneOf {
      /** source type, available values defined in People system */
      type?: string;
      /** source type is referral */
      referral?: Referral;
      /** source type is value selected from list */
      select?: Select;
      /** source type is unstructured text */
      text?: Text;
  }
  /** @oneof */
  interface SourceValueOneOf {
      /** source type is referral */
      referral?: Referral;
      /** source type is value selected from list */
      select?: Select;
      /** source type is unstructured text */
      text?: Text;
  }
  interface Referral {
      _id?: string;
  }
  interface Select {
      /** available options to select */
      option?: string[];
  }
  interface Text {
      /** select values */
      text?: string;
  }
  interface GetAgencyApplicationsRequest {
  }
  interface GetAgencyApplicationsResponse {
      /** agency applications of applicants */
      application?: AgencyApplication[];
  }
  /** GetAgencyPositions return application for agency */
  function getAgencyApplications(): Promise<GetAgencyApplicationsResponse>;
  
  const peopleAgenciesPortalV1AgencyApplication_universal_d___debug: typeof __debug;
  type peopleAgenciesPortalV1AgencyApplication_universal_d_AgencyApplication = AgencyApplication;
  type peopleAgenciesPortalV1AgencyApplication_universal_d_HiringProcessStatusEnum = HiringProcessStatusEnum;
  type peopleAgenciesPortalV1AgencyApplication_universal_d_HiringProcessStatus = HiringProcessStatus;
  const peopleAgenciesPortalV1AgencyApplication_universal_d_HiringProcessStatus: typeof HiringProcessStatus;
  type peopleAgenciesPortalV1AgencyApplication_universal_d_HiringProcessStatusV2Enum = HiringProcessStatusV2Enum;
  type peopleAgenciesPortalV1AgencyApplication_universal_d_HiringProcessStatusV2 = HiringProcessStatusV2;
  const peopleAgenciesPortalV1AgencyApplication_universal_d_HiringProcessStatusV2: typeof HiringProcessStatusV2;
  type peopleAgenciesPortalV1AgencyApplication_universal_d_Source = Source;
  type peopleAgenciesPortalV1AgencyApplication_universal_d_SourceValueOneOf = SourceValueOneOf;
  type peopleAgenciesPortalV1AgencyApplication_universal_d_Referral = Referral;
  type peopleAgenciesPortalV1AgencyApplication_universal_d_Select = Select;
  type peopleAgenciesPortalV1AgencyApplication_universal_d_Text = Text;
  type peopleAgenciesPortalV1AgencyApplication_universal_d_GetAgencyApplicationsRequest = GetAgencyApplicationsRequest;
  type peopleAgenciesPortalV1AgencyApplication_universal_d_GetAgencyApplicationsResponse = GetAgencyApplicationsResponse;
  const peopleAgenciesPortalV1AgencyApplication_universal_d_getAgencyApplications: typeof getAgencyApplications;
  namespace peopleAgenciesPortalV1AgencyApplication_universal_d {
    export {
      peopleAgenciesPortalV1AgencyApplication_universal_d___debug as __debug,
      peopleAgenciesPortalV1AgencyApplication_universal_d_AgencyApplication as AgencyApplication,
      peopleAgenciesPortalV1AgencyApplication_universal_d_HiringProcessStatusEnum as HiringProcessStatusEnum,
      peopleAgenciesPortalV1AgencyApplication_universal_d_HiringProcessStatus as HiringProcessStatus,
      peopleAgenciesPortalV1AgencyApplication_universal_d_HiringProcessStatusV2Enum as HiringProcessStatusV2Enum,
      peopleAgenciesPortalV1AgencyApplication_universal_d_HiringProcessStatusV2 as HiringProcessStatusV2,
      peopleAgenciesPortalV1AgencyApplication_universal_d_Source as Source,
      peopleAgenciesPortalV1AgencyApplication_universal_d_SourceValueOneOf as SourceValueOneOf,
      peopleAgenciesPortalV1AgencyApplication_universal_d_Referral as Referral,
      peopleAgenciesPortalV1AgencyApplication_universal_d_Select as Select,
      peopleAgenciesPortalV1AgencyApplication_universal_d_Text as Text,
      peopleAgenciesPortalV1AgencyApplication_universal_d_GetAgencyApplicationsRequest as GetAgencyApplicationsRequest,
      peopleAgenciesPortalV1AgencyApplication_universal_d_GetAgencyApplicationsResponse as GetAgencyApplicationsResponse,
      peopleAgenciesPortalV1AgencyApplication_universal_d_getAgencyApplications as getAgencyApplications,
    };
  }
  
  export { peopleAgenciesPortalV1AgencyApplication_universal_d as recruitmentAgenciesApplications };
}
