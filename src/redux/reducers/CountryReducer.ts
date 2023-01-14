import {
  CountriesState,
  FETCH_COUNTRIES_LOADING,
  FETCH_COUNTRIES_FAILURE,
  FETCH_COUNTRIES_SUCCESS,
  CountryActions,
} from "../../types";

const initiState: CountriesState = {
  countries: [],
  isLoading: false,
  error: "",
};

export default function countryReducer(
  state: CountriesState = initiState,
  actions: CountryActions
) {
  switch (actions.type) {
    // fetch country, loading true
    case FETCH_COUNTRIES_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    //if fetching is successful
    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        countries: actions.payload,
        error: "",
      };
    //if fetching has any errors
    case FETCH_COUNTRIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: actions.payload,
      };
    default:
      return state;
  }
}
