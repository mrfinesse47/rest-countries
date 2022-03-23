import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import CountryButton from "./CountryButton";

const CountryDetails = ({
  country,
  setSelectedCountry,
  findCountryNameByID,
}) => {
  const isIsland = () => {
    if (!country.borders) {
      return true;
    }
    return false;
  };
  const determineNeighboursNames = () => {
    if (isIsland()) {
      return null; //its an island, ie no neighbours
    }
    return country.borders.map((id) => (
      <div key={id} className="neighbour">
        {findCountryNameByID(id)}
      </div>
    ));
  };

  const getNameOfCurrency = (currencies) => {
    let currenciesString = "";

    for (const key in currencies) {
      currenciesString += " " + currencies[key].name + ",";
    }
    return currenciesString.slice(0, currenciesString.length - 1);
  };

  const getLanguages = (languages) => {
    let languagesString = "";

    for (const key in languages) {
      languagesString += " " + languages[key] + ",";
    }
    return languagesString.slice(0, languagesString.length - 1);
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
          <img src={country.flags.svg} alt={country.name} />
        </div>
        <aside className="details-container">
          <div className="details-1">
            <h1>{country.name.common}</h1>
            <p>
              <strong>Native Name:</strong> {country.name.official}
            </p>
            <p>
              <strong>Population: </strong>
              {country.population.toLocaleString("en-US")}
            </p>
            <p>
              <strong>Region: </strong>
              {country.region}
            </p>
            <p>
              <strong>Sub Region:</strong> {country.subregion}
            </p>
          </div>
          <div className="details-2">
            <p>
              <strong>Top Level Domain:</strong> {country.tld}
            </p>
            <p>
              <strong>Currencies:</strong>{" "}
              {getNameOfCurrency(country.currencies)}
            </p>
            <p>
              <strong>languages:</strong> {getLanguages(country.languages)}
            </p>
          </div>
        </aside>
        <footer className="border-countries">
          {!isIsland() && <h3>Border Countries:</h3>}
          <div className="container">
            {determineNeighboursNames().map((name) => (
              <CountryButton name={name} />
            ))}
          </div>
        </footer>
      </main>
    </div>
  );
};

export default CountryDetails;
