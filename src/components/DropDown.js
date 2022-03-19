import { React, useState } from "react";

const DropDown = () => {
  const [region, setRegion] = useState("");
  const [isActive, setActive] = useState(false);
  const openMenu = () => {
    console.log("opening");
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
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
