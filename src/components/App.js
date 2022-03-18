import "../styles.css";
import CountryList from "./CountryList";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    // https://restcountries.com/v3.1/all
    // or https://restcountries.com/v2/name/
    fetch("https://restcountries.com/v3.1/all")
      //brings back an array of results,
      .then((response) => response.json())
      .then((countries) => {
        console.log(countries);
        setCountries(countries);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <CountryList countries={countries} />
    </div>
  );
}

export default App;
