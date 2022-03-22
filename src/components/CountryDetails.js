import React from "react";

const CountryDetails = ({ country }) => {
  console.log(country);
  return (
    <div className="CountryDetails">
      <div className="go-back"></div>
      <main>
        <div className="flag"></div>
        <aside className="details">
          <img src={country.flags.png} alt={country.name} />
        </aside>
      </main>
      CountryDetails
    </div>
  );
};

export default CountryDetails;
