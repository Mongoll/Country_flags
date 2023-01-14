//reducer case constants
export const FETCH_COUNTRIES_LOADING = "FETCH_COUNTRIES_LOADING";
export const FETCH_COUNTRIES_SUCCESS = "FETCH_COUNTRIES_SUCCESS";
export const FETCH_COUNTRIES_FAILURE = "FETCH_COUNTRIES_FAILURE";

//types
export type CountriesState = {
  countries: Country[];
  isLoading: boolean;
  error: string;
};

//country state
export type Country = {
  name: string;
  nativeName: string;
  region: string;
  population: number;
  flags: {
    png: string;
    svg: string;
  };
  capital: string[];
  languages: {
    name: string;
    nativeName: string;
  }[];
};

//action types
export type FetchAllCountriesLoadingAction = {
  type: typeof FETCH_COUNTRIES_LOADING;
  payload?: string;
};
export type FetchAllCountriesSuccessAction = {
  type: typeof FETCH_COUNTRIES_SUCCESS;
  payload: CountriesState[];
};
export type FetchAllCountriesFailureAction = {
  type: typeof FETCH_COUNTRIES_FAILURE;
  payload: string;
};

export type CountryActions =
  | FetchAllCountriesLoadingAction
  | FetchAllCountriesSuccessAction
  | FetchAllCountriesFailureAction;
