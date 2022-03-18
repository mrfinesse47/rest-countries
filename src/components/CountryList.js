import Country from "./Country";
import { useEffect, useState } from "react";

const CountryList = (props) => {
  //will want to filter ccountries first before mapping
  const [search, setSearch] = useState("");
  // const [region, setRegion]= useState("");//will worry about later
  return (
    <>
      <div className="filters">
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        ></input>
      </div>
      <div className="country-list">
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
