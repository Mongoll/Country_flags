import { Dispatch } from "redux";
import axios from "axios";

import {
  FETCH_COUNTRIES_SUCCESS,
  CountryActions,
  FETCH_COUNTRIES_FAILURE,
  FETCH_COUNTRIES_LOADING,
  CountriesState,
} from "../../types";

//fetch all countries
export function fetchAllCountriesLoading(): CountryActions {
  return {
    type: FETCH_COUNTRIES_LOADING,
  };
}

// fetch all countries success
export function fetchAllCountriesSuccess(
  countries: CountriesState[]
): CountryActions {
  return {
    type: FETCH_COUNTRIES_SUCCESS,
    payload: countries,
  };
}

// fetch all countries failure
export function fetchAllCountriesFailure(error: string): CountryActions {
  return {
    type: FETCH_COUNTRIES_FAILURE,
    payload: error,
  };
}

// fetch countries data

export function fetchAllCountries() {
  return function (dispatch: Dispatch) {
    dispatch(fetchAllCountriesLoading());
    //axios call
    axios
      .get("https://restcountries.com/v2/all")
      .then((res) => {
        const countries = res.data as CountriesState[];
        dispatch(fetchAllCountriesSuccess(countries));
      })
      .catch((err) => {
        dispatch(fetchAllCountriesFailure(err));
      });
  };
}
