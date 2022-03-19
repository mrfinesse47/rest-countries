import { React, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const DropDown = () => {
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const [region, setRegion] = useState("");
  const [isActive, setActive] = useState(false);
  const [selected, setSeleccted] = useState(2);

  useEffect(() => {
    window.addEventListener("click", () => {
      setActive(false);
    });
    return window.removeEventListener("click", () => {
      setActive(false); //remove event listener when component unmounts
    });
  }, []);

  const openMenu = (event) => {
    event.stopPropagation(); //needed so it doesnt count as a window click
    if (isActive) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  const selectItem = (itemNum) => {
    setSeleccted(itemNum);
  };

  return (
    <div className="region-search">
      <ul className="menu-ctn" onClick={(event) => openMenu(event)}>
        <li id="menu">
          <div className="message">
            <p>Filter By Region</p>
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
