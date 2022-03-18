import { React, useEffect, useState } from "react";
import "../styles.css";

const Country = () => {
  const [country, setCountry] = useState("");
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://restcountries.com/v2/name/brazil")
      //brings back an array of results,
      .then((response) => response.json())
      .then((countries) => {
        console.log(countries);
        setCountry(countries[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={`Country ${"Country-light"}`}>
      <figure>
        <img src={country.flag} alt={country.name} />
      </figure>

      <div className="container">
        <h2>{country.name}</h2>
        <div className="details">
          <p>
            <strong>Population: </strong>
            {country.population && country.population.toLocaleString("en-US")}
          </p>
          <p>
            <strong>Region: </strong>
            {country.region}
          </p>
          <p>
            <strong>Capital: </strong>
            {country.capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Country;
