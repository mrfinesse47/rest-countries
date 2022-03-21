import { React } from "react";
import "../styles.css";

const Country = ({ flag, name, population, capital, region, isDarkMode }) => {
  return (
    <div className={`Country ${isDarkMode ? "Country-dark" : "Country-light"}`}>
      <figure>
        <img src={flag} alt={name} />
      </figure>

      <div className="container">
        <h2>{name}</h2>
        <div className="details">
          <p>
            <strong>Population: </strong>
            {population && population.toLocaleString("en-US")}
          </p>
          <p>
            <strong>Region: </strong>
            {region}
          </p>
          <p>
            <strong>Capital: </strong>
            {capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Country;
