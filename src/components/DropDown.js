import { React, useEffect, useState } from "react";

const DropDown = () => {
  const [region, setRegion] = useState("");
  const [isActive, setActive] = useState(false);
  const [selected, setSeleccted] = useState(1);

  useEffect(() => {
    window.addEventListener("click", () => {
      setActive(false);
    });
    return window.removeEventListener("click", () => {
      setActive(false);
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
  return (
    <div className="region-search">
      <ul className={`menu-ctn`} onClick={openMenu}>
        <li id="menu">
          Filter By Region
          <ul
            id={`drop-down`}
            className={`${isActive ? "active" : "in-active"}`}
          >
            <li className={selected === 1 && "selected"}>Option 1</li>
            <li className={selected === 2 && "selected"}>Option 2</li>
            <li className={selected === 3 && "selected"}>Option 3</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
