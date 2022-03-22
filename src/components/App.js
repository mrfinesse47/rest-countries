import "../styles.css";
import CountryList from "./CountryList";
import { useEffect, useState } from "react";
import Heading from "./Heading";
import CountryDetails from "./CountryDetails";
import useStateWithLocalStorage from "../customHooks/useStateWithLocalStorage";

function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState(null);
  //would use React Router For a larger project
  const [isDarkMode, setDarkMode] = useStateWithLocalStorage(
    "isDarkMode",
    false
  );

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const findCountryByID = (id) => {
    // console.log("find country" + id);
    return countries.filter((country) => country.cca3 === id)[0];
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      //brings back an array of results,
      .then((response) => response.json())
      //convert the JSON response into a JS object
      .then((countries) => {
        setCountries(countries);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className={`App ${isDarkMode ? "App-dark" : "App-light"}`}>
      <Heading toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      {selectedCountry === null ? (
        <CountryList
          countries={countries}
          isDarkMode={isDarkMode}
          setSelectedCountry={setSelectedCountry}
        />
      ) : (
        <CountryDetails
          country={findCountryByID(selectedCountry)}
          setSelectedCountry={setSelectedCountry}
        />
      )}
    </div>
  );
}

export default App;
