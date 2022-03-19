import Country from "./Country";
import { useState } from "react";
import Search from "./filters/Search";
import DropDown from "./filters/DropDown";

const CountryList = (props) => {
  //this will be a view in router
  //will want to filter countries first before mapping
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("all");

  return (
    <>
      <div className="filters">
        <Search setSearch={setSearch} search={search} />
        <DropDown setRegion={setRegion} />
      </div>
      <main className="country-list">
        {props.countries
          .filter((country) => {
            const regex = new RegExp(search, "gi");
            return country.name.common.match(regex);
          })
          .map((country, index) => (
            <Country
              key={country.cca2}
              flag={country.flags.svg}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          ))}
      </main>
    </>
  );
};

export default CountryList;
