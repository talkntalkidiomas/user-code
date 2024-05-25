declare module "wix-currencies.v2" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface CurrencyRate {
  }
  interface ListCurrenciesRequest {
  }
  interface ListCurrenciesResponse {
      /** Supported currencies */
      currencies?: Currency[];
  }
  interface Currency {
      /** Currency code. */
      code?: string;
      /** Currency symbol. */
      symbol?: string;
  }
  interface ConvertCurrencyRequest {
      /** Amounts to convert. */
      amounts?: DecimalValue[];
      /** Original currency. */
      from: string;
      /** Target currency. */
      to: string;
  }
  interface DecimalValue {
      /** Value without decimals (e.g., for 10.95 value will be 1095). */
      value?: string;
      /** Decimal places to apply (e.g., for 10.95 decimal_places will be 2). */
      decimalPlaces?: number;
  }
  interface ConvertCurrencyResponse {
      /** Converted amounts. */
      amounts?: DecimalValue[];
      /** Date and time the conversion rate was last updated. */
      rateTimestamp?: Date;
  }
  interface ConversionRateRequest {
      /** Original currency. */
      from: string;
      /** Target currency. */
      to: string;
  }
  interface ConversionRateResponse {
      /** Conversion rate between 2 currencies. */
      rate?: DecimalValue;
      /** Date and time the conversion rate was last updated. */
      rateTimestamp?: Date;
  }
  /**
   * Returns all currencies currently supported by Wix.
   * @public
   * @documentationMaturity preview
   */
  function listCurrencies(): Promise<ListCurrenciesResponse>;
  /**
   * Returns a list of converted amounts, from the original (from) currency to the target (to) currency.
   * @public
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.from
   * @requiredField identifiers.to
   */
  function convertCurrency(identifiers: ConvertCurrencyIdentifiers, options?: ConvertCurrencyOptions): Promise<ConvertCurrencyResponse>;
  interface ConvertCurrencyIdentifiers {
      /** Original currency. */
      from: string;
      /** Target currency. */
      to: string;
  }
  interface ConvertCurrencyOptions {
      /** Amounts to convert. */
      amounts?: DecimalValue[];
  }
  /**
   * Returns the conversion rate between 2 currencies.
   * @public
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.from
   * @requiredField identifiers.to
   */
  function conversionRate(identifiers: ConversionRateIdentifiers): Promise<ConversionRateResponse>;
  interface ConversionRateIdentifiers {
      /** Original currency. */
      from: string;
      /** Target currency. */
      to: string;
  }
  
  const ecommerceCurrencyConverterV1CurrencyRate_universal_d___debug: typeof __debug;
  type ecommerceCurrencyConverterV1CurrencyRate_universal_d_CurrencyRate = CurrencyRate;
  type ecommerceCurrencyConverterV1CurrencyRate_universal_d_ListCurrenciesRequest = ListCurrenciesRequest;
  type ecommerceCurrencyConverterV1CurrencyRate_universal_d_ListCurrenciesResponse = ListCurrenciesResponse;
  type ecommerceCurrencyConverterV1CurrencyRate_universal_d_Currency = Currency;
  type ecommerceCurrencyConverterV1CurrencyRate_universal_d_ConvertCurrencyRequest = ConvertCurrencyRequest;
  type ecommerceCurrencyConverterV1CurrencyRate_universal_d_DecimalValue = DecimalValue;
  type ecommerceCurrencyConverterV1CurrencyRate_universal_d_ConvertCurrencyResponse = ConvertCurrencyResponse;
  type ecommerceCurrencyConverterV1CurrencyRate_universal_d_ConversionRateRequest = ConversionRateRequest;
  type ecommerceCurrencyConverterV1CurrencyRate_universal_d_ConversionRateResponse = ConversionRateResponse;
  const ecommerceCurrencyConverterV1CurrencyRate_universal_d_listCurrencies: typeof listCurrencies;
  const ecommerceCurrencyConverterV1CurrencyRate_universal_d_convertCurrency: typeof convertCurrency;
  type ecommerceCurrencyConverterV1CurrencyRate_universal_d_ConvertCurrencyIdentifiers = ConvertCurrencyIdentifiers;
  type ecommerceCurrencyConverterV1CurrencyRate_universal_d_ConvertCurrencyOptions = ConvertCurrencyOptions;
  const ecommerceCurrencyConverterV1CurrencyRate_universal_d_conversionRate: typeof conversionRate;
  type ecommerceCurrencyConverterV1CurrencyRate_universal_d_ConversionRateIdentifiers = ConversionRateIdentifiers;
  namespace ecommerceCurrencyConverterV1CurrencyRate_universal_d {
    export {
      ecommerceCurrencyConverterV1CurrencyRate_universal_d___debug as __debug,
      ecommerceCurrencyConverterV1CurrencyRate_universal_d_CurrencyRate as CurrencyRate,
      ecommerceCurrencyConverterV1CurrencyRate_universal_d_ListCurrenciesRequest as ListCurrenciesRequest,
      ecommerceCurrencyConverterV1CurrencyRate_universal_d_ListCurrenciesResponse as ListCurrenciesResponse,
      ecommerceCurrencyConverterV1CurrencyRate_universal_d_Currency as Currency,
      ecommerceCurrencyConverterV1CurrencyRate_universal_d_ConvertCurrencyRequest as ConvertCurrencyRequest,
      ecommerceCurrencyConverterV1CurrencyRate_universal_d_DecimalValue as DecimalValue,
      ecommerceCurrencyConverterV1CurrencyRate_universal_d_ConvertCurrencyResponse as ConvertCurrencyResponse,
      ecommerceCurrencyConverterV1CurrencyRate_universal_d_ConversionRateRequest as ConversionRateRequest,
      ecommerceCurrencyConverterV1CurrencyRate_universal_d_ConversionRateResponse as ConversionRateResponse,
      ecommerceCurrencyConverterV1CurrencyRate_universal_d_listCurrencies as listCurrencies,
      ecommerceCurrencyConverterV1CurrencyRate_universal_d_convertCurrency as convertCurrency,
      ecommerceCurrencyConverterV1CurrencyRate_universal_d_ConvertCurrencyIdentifiers as ConvertCurrencyIdentifiers,
      ecommerceCurrencyConverterV1CurrencyRate_universal_d_ConvertCurrencyOptions as ConvertCurrencyOptions,
      ecommerceCurrencyConverterV1CurrencyRate_universal_d_conversionRate as conversionRate,
      ecommerceCurrencyConverterV1CurrencyRate_universal_d_ConversionRateIdentifiers as ConversionRateIdentifiers,
    };
  }
  
  export { ecommerceCurrencyConverterV1CurrencyRate_universal_d as currencyConverter };
}
