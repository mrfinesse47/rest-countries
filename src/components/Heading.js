import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon as faoMoon } from "@fortawesome/free-regular-svg-icons";

const Heading = (props) => {
  return (
    <header
      className={`Heading ${
        props.isDarkMode ? "Heading-dark" : "Heading-light"
      }`}
    >
      <div className="container">
        <h1>Where In The World?</h1>
        <div
          className="mode"
          onClick={() => props.setDarkMode(!props.isDarkMode)}
        >
          <FontAwesomeIcon
            icon={props.isDarkMode ? faMoon : faoMoon}
            className="placeholder-icon"
            size="1x"
            transform={{ rotate: -25 }}
          />
          <h3>Dark Mode</h3>
        </div>
      </div>
    </header>
  );
};

export default Heading;
