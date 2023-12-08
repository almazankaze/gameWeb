import { useState, useEffect, useRef } from "react";

import {
  BaseSelector,
  SelectorTitle,
  SelectorArrow,
  SelectContent,
} from "./selectBox.style";

const SelectBox = () => {
  const [showDropMenu, setShowDropMenu] = useState(false);
  const [dropDownText, setDropDownText] = useState("Order By");
  const btnRef = useRef();

  useEffect(() => {
    const closeDropdown = (e) => {
      if (
        e.target !== btnRef.current &&
        e.target.innerText !== "Order By" &&
        e.target.innerText !== "Highest Price" &&
        e.target.innerText !== "Lowest Price" &&
        e.target.innerText !== "Most Popular" &&
        e.target.innerText !== "^"
      )
        setShowDropMenu(false);
    };

    document.body.addEventListener("click", closeDropdown);

    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  const handleDropdownClick = (text) => {
    if (dropDownText === text) setDropDownText("Order By");
    else setDropDownText(text);
  };

  return (
    <BaseSelector
      ref={btnRef}
      className={showDropMenu ? "dropbox-selected" : ""}
      onClick={() => setShowDropMenu((prev) => !prev)}
    >
      <SelectorTitle>
        <p>{dropDownText}</p>
        <SelectorArrow
          className={
            showDropMenu ? "dropdown-arrow rotate-arrow" : "dropdown-arrow"
          }
        >
          <p>^</p>
        </SelectorArrow>
      </SelectorTitle>
      <SelectContent className={showDropMenu ? "show-drop-menu" : ""}>
        <p onClick={() => handleDropdownClick("Highest Price")}>
          Highest Price
        </p>
        <p onClick={() => handleDropdownClick("Lowest Price")}>Lowest Price</p>
        <p onClick={() => handleDropdownClick("Most Popular")}>Most Popular</p>
      </SelectContent>
    </BaseSelector>
  );
};

export default SelectBox;
