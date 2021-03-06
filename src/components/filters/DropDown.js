import { React, useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const DropDown = (props) => {
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania", "All"];
  const [isActive, setActive] = useState(false);
  const [selected, setSeleccted] = useState(-1);

  useEffect(() => {
    const pageClickEvent = () => {
      setActive(!isActive);
    };
    // If the item is active (ie open) then listen for clicks
    // if its closed dont listen
    if (isActive) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
    //for every click when the menu is open it removes the listener right away
  }, [isActive]);

  const openMenu = (event) => {
    event.stopPropagation(); //needed so it doesnt count as a window click
    setActive(!isActive);
  };

  const selectItem = (itemNum) => {
    setSeleccted(itemNum);
    props.setRegion(regions[itemNum]);
  };

  return (
    <div
      className={`region-search ${
        props.isDarkMode ? "region-search-dark" : "region-search-light"
      }`}
    >
      <ul className="menu-ctn" onClick={(event) => openMenu(event)}>
        <li id="menu">
          <div className="message">
            <p>{selected !== -1 ? regions[selected] : "Filter By Region"}</p>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <ul id="drop-down" className={`${isActive ? "active" : "in-active"}`}>
            {regions.map((region, index) => (
              <li
                key={index}
                className={selected === index ? "selected" : ""}
                onClick={() => selectItem(index)}
              >
                {region}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
