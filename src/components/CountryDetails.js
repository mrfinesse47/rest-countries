import { React, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import CountryButton from "./CountryButton";

const CountryDetails = ({
  country,
  setSelectedCountry,
  findCountryNameByID,
  isDarkMode,
}) => {
  const isIsland = () => {
    if (!country.borders) {
      return true;
    }
    return false;
  };
  const determineNeighbours = () => {
    if (isIsland()) {
      return null; //its an island, ie no neighbours
    }
    return country.borders.map((id) => {
      return { name: findCountryNameByID(id), id };
    });
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

  useEffect(() => {
    window.scrollTo({
      top: 0, //scroll to top if country changes
    });
  }, [country]);

  return (
    <div
      className={`CountryDetails ${
        isDarkMode ? "CountryDetails-dark" : "CountryDetails-light"
      }`}
    >
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
            <p>
              <strong>Capital:</strong> {country.capital}
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
          {!isIsland() && (
            <div>
              <h3>Border Countries:</h3>{" "}
              <div className="container">
                {determineNeighbours().map((neighbour) => (
                  <CountryButton
                    key={neighbour.name}
                    name={neighbour.name}
                    isDarkMode={isDarkMode}
                    setSelectedCountry={setSelectedCountry}
                    id={neighbour.id}
                  />
                ))}
              </div>
            </div>
          )}
        </footer>
      </main>
    </div>
  );
};

export default CountryDetails;
