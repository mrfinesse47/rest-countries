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
        <Search
          setSearch={setSearch}
          search={search}
          isDarkMode={props.isDarkMode}
        />
        <DropDown setRegion={setRegion} isDarkMode={props.isDarkMode} />
      </div>
      <main className="country-list">
        {props.countries
          .filter((country) => {
            //first filter for search of country name
            const strimgWithoutRegexSpecChar = search.replace(
              /[-[\]{}()*+?.,\\^$|#\s]/g,
              "\\$&"
            ); //disallows regex  special characters from user
            const regex = new RegExp(strimgWithoutRegexSpecChar, "gi");
            //we search by alt names, common name, and official name
            return (
              country.name.common.match(regex) ||
              country.name.official.match(regex) ||
              country.altSpellings.some((spelling) => spelling.match(regex))
            );
          })
          .filter((country) => {
            if (region.toLowerCase() === "all") {
              return true;
            }
            const regex = new RegExp(region, "gi");
            return country.region.match(regex);
          })
          .map((country) => (
            <Country
              key={country.cca2}
              id={country.cca2}
              flag={country.flags.svg}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
              isDarkMode={props.isDarkMode}
              setSelectedCountry={props.setSelectedCountry}
            />
          ))}
      </main>
    </>
  );
};

export default CountryList;
