import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchAllCountries } from "../../redux/actions";
import { AppState } from "../../types";
import "../../styles/country.css";

const Country = () => {
  const { name } = useParams() as any;
  const dispatch = useDispatch();
  const countries = useSelector(
    (state: AppState) => state.countryReducer.countries
  );
  const [currentCountry, setCurrentCountry] = React.useState(
    countries.filter((country) => country.name === name)[0]
  );
  //dispatch fetchAllCountries when page loads
  React.useEffect(() => {
    dispatch(fetchAllCountries() as any);
  }, [dispatch]);
  //update currentCountry when we have countries data
  React.useEffect(() => {
    setCurrentCountry(countries.filter((country) => country.name === name)[0]);
  }, [countries, name]);

  return (
    <article className="country-page">
      {currentCountry && currentCountry.name && (
        <div className="country-page__details">
          <div className="country-page__title">
            <h2 className="country-card__name">{currentCountry.name}</h2>
          </div>
          <div className="country-page__main">
            <div className="country-page-img">
              <img src={currentCountry.flags.png} alt={currentCountry.name} />
            </div>
            <div className="country-page-text">
              <div className="country-page-right-list">
                <p>Population: </p>
                <p className="right">
                  {currentCountry.population.toLocaleString("en")}
                </p>
              </div>
              <div className="country-page-right-list">
                <p>Native name: </p>
                <p className="right">{currentCountry.nativeName}</p>
              </div>
              <div className="country-page-right-list">
                <p>Capital city: </p>
                <p className="right">{currentCountry.capital}</p>
              </div>
              <div className="country-page-lang-list">
                <div className="country-page-lang-title">
                  <span>Language(s):</span>
                </div>
                <div className="country-page-lang-name">
                  {currentCountry.languages.map((language) => (
                    <p className="right">{language.name}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default Country;
