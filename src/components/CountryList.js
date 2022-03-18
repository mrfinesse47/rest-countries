import Country from "./Country";
import { useEffect, useState } from "react";

const CountryList = (props) => {
  const [filter, setFilter] = useState({ region: "all", countries: "all" });
  //will want to filter ccountries first before mapping
  return (
    <>
      <div></div>
      <div>
        {props.countries.map((country, index) => {
          return (
            <Country
              key={index}
              flag={country.flags.svg}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          );
        })}
      </div>
    </>
  );
};

export default CountryList;
