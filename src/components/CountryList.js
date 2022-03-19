import Country from "./Country";
import { useState } from "react";
import Search from "./Search";

const CountryList = (props) => {
  //will want to filter ccountries first before mapping
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="filters">
        <Search setSearch={setSearch} search={search} />
      </div>
      <main className="country-list">
        {props.countries.map((country, index) => (
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
