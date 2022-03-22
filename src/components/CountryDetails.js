import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

// population.toLocaleString("en-US")

const CountryDetails = ({
  country,
  setSelectedCountry,
  findCountryNameByID,
}) => {
  //for this get top 3 most populous the demo only list 3 for belgium but not luxemborg
  //so may have to move into a component of neighbour buttons list
  const neighbours = country.borders.map((id) => (
    <div key={id} className="neighbour">
      {findCountryNameByID(id)}
    </div>
  ));

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
            <p>languages: {getLanguages(country.languages)}</p>
          </div>
        </aside>
        <footer className="border-countries">
          <h3>Border Countries:</h3>
          {neighbours}
        </footer>
      </main>
    </div>
  );
};

export default CountryDetails;
