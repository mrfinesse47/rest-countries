import { React, useEffect, useState } from "react";
import "../styles.css";

const Country = ({ flag, name, population, capital, region }) => {
  // const [country, setCountry] = useState("");
  // const [isLoading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch("https://restcountries.com/v2/name/brazil")
  //     //brings back an array of results,
  //     .then((response) => response.json())
  //     .then((countries) => {
  //       console.log(countries);
  //       setCountry(countries[0]);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div className={`Country ${"Country-light"}`}>
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
