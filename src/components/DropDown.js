import { React, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const DropDown = () => {
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
            <li
              className={selected === 1 && "selected"}
              onClick={() => selectItem(1)}
            >
              Option 1
            </li>
            <li
              className={selected === 2 && "selected"}
              onClick={() => selectItem(2)}
            >
              Option 2
            </li>
            <li
              className={selected === 3 && "selected"}
              onClick={() => selectItem(3)}
            >
              Option 3
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
