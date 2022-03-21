import "../styles.css";
import CountryList from "./CountryList";
import { useEffect, useState } from "react";
import Heading from "./Heading";
import useStateWithLocalStorage from "../customHooks/useStateWithLocalStorage";

function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isDarkMode, setDarkMode] = useStateWithLocalStorage(
    "isDarkMode",
    false
  );

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
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
      <CountryList countries={countries} isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
