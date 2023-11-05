import { useState, useEffect, useRef } from "react";

import {
  BaseSelector,
  SelectorTitle,
  SelectorArrow,
  SelectContent,
} from "./selectBox.style";

const SelectBox = () => {
  const [showDropMenu, setShowDropMenu] = useState(false);
  const btnRef = useRef();

  useEffect(() => {
    const closeDropdown = (e) => {
      if (
        e.target !== btnRef.current &&
        e.target.innerText !== "Order By" &&
        e.target.innerText !== "^"
      )
        setShowDropMenu(false);
    };

    document.body.addEventListener("click", closeDropdown);

    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <BaseSelector
      ref={btnRef}
      className={showDropMenu ? "dropbox-selected" : ""}
      onClick={() => setShowDropMenu((prev) => !prev)}
    >
      <SelectorTitle>
        <p>Order By</p>
        <SelectorArrow
          className={
            showDropMenu ? "dropdown-arrow rotate-arrow" : "dropdown-arrow"
          }
        >
          <p>^</p>
        </SelectorArrow>
      </SelectorTitle>
      <SelectContent className={showDropMenu ? "show-drop-menu" : ""}>
        <p>Highest Price</p>
        <p>Lowest Price</p>
        <p>Most Popular</p>
      </SelectContent>
    </BaseSelector>
  );
};

export default SelectBox;
