import { React, useEffect, useState } from "react";
import "../styles.css";

const Country = (props) => {
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
        <img src={props.flag} alt={props.name} />
      </figure>

      <div className="container">
        <h2>{props.name}</h2>
        <div className="details">
          <p>
            <strong>Population: </strong>
            {props.population && props.population.toLocaleString("en-US")}
          </p>
          <p>
            <strong>Region: </strong>
            {props.region}
          </p>
          <p>
            <strong>Capital: </strong>
            {props.capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Country;
