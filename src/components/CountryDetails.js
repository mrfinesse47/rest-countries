import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

{
  /* <i class="fa-solid fa-arrow-left-long"></i>; */
}

const CountryDetails = ({ country }) => {
  console.log(country);
  return (
    <div className="CountryDetails">
      <div className="button">
        <div className="container">
          <FontAwesomeIcon
            icon={faArrowLeftLong}
            className="arrow-left-icon"
            size="lg"
          />
          Back
        </div>
      </div>
      <main>
        <div className="flag">
          <img src={country.flags.png} alt={country.name} />
        </div>
        <aside className="details"></aside>
      </main>
      CountryDetails
    </div>
  );
};

export default CountryDetails;
