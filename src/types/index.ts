import { CountriesState } from "./CountryTypes";
import { CartState } from "./CartTypes";
import { UiReducerState } from "./UiTypes";
export * from "./CountryTypes";
export * from "./CartTypes";
export * from "./UiTypes";

//global App state
export type AppState = {
  countryReducer: CountriesState;
  cartReducer: CartState;
  uiReducer: UiReducerState;
};
