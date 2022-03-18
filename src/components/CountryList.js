import Country from "./Country";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const CountryList = (props) => {
  //will want to filter ccountries first before mapping
  const [search, setSearch] = useState("");

  // const [region, setRegion]= useState("");//will worry about later
  return (
    <>
      <div className="filters">
        <label className="country-search">
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            required
          ></input>
          <div className="placeholder">
            <FontAwesomeIcon icon={faCoffee} /> <div> Enter Text</div>
          </div>
        </label>
      </div>
      <div className="country-list">
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
      </div>
    </>
  );
};

export default CountryList;
