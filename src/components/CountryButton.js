import React from "react";

const CountryButton = (props) => {
  const shortedNameIfLong = (name) => {
    if (name === "United States") {
      return "U.S.A.";
    }
    if (name.length > 12) {
      return name.slice(0, 12) + "..";
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
