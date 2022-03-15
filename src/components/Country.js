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
    <div className="Country">
      <h1>{country.name}</h1>
      {/* <img src="" alt="" /> */}
    </div>
  );
};

export default Country;
