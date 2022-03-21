import React from "react";

const CountryDetails = (props) => {
  console.log(props.country);
  return <div>CountryDetails {props.selectedCountry}</div>;
};

export default CountryDetails;
