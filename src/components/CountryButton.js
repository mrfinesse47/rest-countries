import React from "react";

const CountryButton = (props) => {
  const shortedNameIfLong = (name) => {
    if (name.length > 14) {
      return name.slice(0, 14) + "..";
    }
    return name;
  };
  return (
    <div
      className={`Country-button ${
        props.isDarkMode ? "Country-button-dark" : "Country-button-light"
      }`}
      onClick={() => props.setSelectedCountry(props.id)}
    >
      <p>{shortedNameIfLong(props.name)}</p>
    </div>
  );
};

export default CountryButton;
