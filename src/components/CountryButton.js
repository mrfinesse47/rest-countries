import React from "react";

const CountryButton = (props) => {
  return (
    <div
      className="Country-button"
      onClick={() => props.setSelectedCountry(props.id)}
    >
      <p>{props.name}</p>
    </div>
  );
};

export default CountryButton;
