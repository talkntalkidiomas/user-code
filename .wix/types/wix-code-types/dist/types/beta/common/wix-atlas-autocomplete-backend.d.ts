declare module "wix-atlas-autocomplete-backend" {
  interface Prediction {
      /** The human-readable name of the prediction */
      description?: string;
      /** The id of the prediction that can be use in place api. Available for short time. */
      searchId?: string;
      /** Contains an array with offset value and length. These describe the location of the entered term in the prediction result text, so that the term can be highlighted if desired */
      matchedSubstrings?: MatchedSubstrings[];
      /** Provides pre-formatted text that can be shown in your autocomplete results */
      textStructure?: TextStructure;
      /** Contains an integer indicating the straight-line distance between the predicted place, and the specified origin point, in meters. */
      distanceInMeters?: number | null;
  }
  interface MatchedSubstrings {
      length?: number;
      offset?: number;
  }
  interface TextStructure {
      /** Contains the main text of a prediction, usually the name of the place */
      mainText?: string;
      /** Contains the secondary text of a prediction, usually the location of the place */
      secondaryText?: string;
      /** Contains an array with offset value and length. These describe the location of the entered term in the prediction result text, so that the term can be highlighted if desired */
      mainTextMatchedSubstrings?: MatchedSubstrings[];
  }
  interface AddressLocation {
      latitude?: number | null;
      longitude?: number | null;
  }
  interface FilterBy {
      /** One of the filter types enum */
      filterType?: FilterType;
      /** Free text like "us" */
      filterValue?: string;
  }
  enum FilterType {
      /** Filter by zip code */
      zip_code = "zip_code",
      /** Filter by 2-letters or 3-letters country code */
      country_code = "country_code"
  }
  interface ListPredictionsResponse {
      predictions?: Prediction[];
  }
  interface PredictResponse {
      predictions?: Prediction[];
  }
  interface ListPredictionsOptions {
      origin?: AddressLocation;
      location?: AddressLocation;
      radius?: string | null;
      filterBy?: FilterBy[];
  }
  interface PredictOptions {
      origin?: AddressLocation;
      location?: AddressLocation;
      radius?: string | null;
      countryCodes?: string[];
  }
  
  function listPredictions(input: string, options: ListPredictionsOptions): Promise<ListPredictionsResponse>;
  function predict(input: string, options: PredictOptions): Promise<PredictResponse>;
  
  export { listPredictions, predict };
}
