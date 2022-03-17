import { React, useEffect, useState } from "react";
import "../styles.css";

const Country = () => {
  const [country, setCountry] = useState("");
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://restcountries.com/v2/name/ukraine")
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
    <>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <div className={`Country ${"Country-light"}`}>
          <figure>
            <img src={country.flag} alt={country.name} />
          </figure>
          {/* <img
            src="https://flagcdn.com/h240/ca.png"
            height="240"
            alt="Canada"
          ></img> */}

          <div className="container">
            <h2>{country.name}</h2>
            <div className="details">
              <p>
                <strong>Population: </strong>
                {country.population}
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
          {/* <img src="" alt="" /> */}
        </div>
      )}
    </>
  );
};

export default Country;
