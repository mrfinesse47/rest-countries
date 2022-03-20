import "../styles.css";
import CountryList from "./CountryList";
import { useEffect, useState } from "react";
import Heading from "./Heading";

function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // https://restcountries.com/v3.1/all
    // or https://restcountries.com/v3.1/name/
    fetch("https://restcountries.com/v3.1/all")
      //brings back an array of results,
      .then((response) => response.json())
      .then((countries) => {
        setCountries(countries);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <Heading setDarkMode={setDarkMode} isDarkMode={isDarkMode} />
      <CountryList countries={countries} isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
