import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

// population.toLocaleString("en-US")

const CountryDetails = ({ country, setSelectedCountry }) => {
  console.log(country);

  const getNameOfCurrency = (currencies) => {
    let currenciesString = "";

    for (const key in currencies) {
      // console.log(key);
      console.log(currencies[key].name);
      currenciesString += " " + currencies[key].name + ",";
    }
    currenciesString = currenciesString.slice(0, currenciesString.length - 1);

    return currenciesString;
  };
  return (
    <div className="CountryDetails">
      <div className="button" onClick={() => setSelectedCountry(null)}>
        <div className="container">
          <FontAwesomeIcon
            icon={faArrowLeftLong}
            className="arrow-left-icon"
            size="lg"
          />
          Back
        </div>
      </div>
      <main>
        <div className="flag">
          <img src={country.flags.png} alt={country.name} />
        </div>
        <aside className="details-container">
          <div className="details-1">
            <h1>{country.name.common}</h1>
            <p>Native Name: {country.name.official}</p>
            <p>Population: {country.population.toLocaleString("en-US")}</p>
            <p>Region: {country.region}</p>
            <p>Sub Region: {country.subregion}</p>
          </div>
          <div className="details-2">
            <p>Top Level Domain: {country.tld}</p>
            <p>Currencies: {getNameOfCurrency(country.currencies)}</p>
          </div>
        </aside>
        <footer className="border-countries"></footer>
      </main>
    </div>
  );
};

export default CountryDetails;
