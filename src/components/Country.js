import { React, useEffect, useState } from "react";
import "../styles.css";

const Country = () => {
  const [country, setCountry] = useState("");
  useEffect(() => {
    fetch("https://restcountries.com/v2/name/canada")
      //brings back an array of results,
      .then((response) => response.json())
      .then((countries) => {
        console.log(countries);
        setCountry(countries[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className={`Country ${"Country-light"}`}>
      <img src={country.flag} alt={country.name} />
      <h1>{country.name}</h1>
      <p>
        <strong>Population:</strong>
        {country.population}
      </p>
      <p>
        <strong>Region:</strong>
        {country.region}
      </p>
      <p>
        <strong>Capital:</strong>
        {country.capital}
      </p>
      {/* <img src="" alt="" /> */}
    </div>
  );
};

export default Country;
