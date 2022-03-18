import React from "react";
import Country from "./Country";

const CountryList = (props) => {
  return (
    <div>
      {props.countries.map((country, index) => {
        return (
          <Country
            key={index}
            flag={country.flags.svg}
            name={country.name.common}
            population={country.population}
            region={country.region}
          />
        );
      })}
    </div>
  );
};

export default CountryList;
