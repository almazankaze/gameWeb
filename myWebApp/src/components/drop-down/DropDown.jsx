import {
  BaseDropDown,
  MultiColDropDown,
  DropDownLink,
  MenuGrid,
} from "./drop.style";

export const DROPDOWN_TYPE_CLASSES = {
  base: "base",
  multicol: "multicol",
};

const getDropDown = (dropdownType = DROPDOWN_TYPE_CLASSES.base) =>
  ({
    [DROPDOWN_TYPE_CLASSES.base]: BaseDropDown,
    [DROPDOWN_TYPE_CLASSES.multicol]: MultiColDropDown,
  }[dropdownType]);

const DropDown = ({ dropdownType, itemList, numCols = 1, ...otherProps }) => {
  const CustomDropDown = getDropDown(dropdownType);
  return (
    <CustomDropDown {...otherProps}>
      {numCols >= 2 ? (
        <MenuGrid numCols={numCols}>
          {itemList.map((item, index) => (
            <div key={index}>
              <DropDownLink to="/"> {item} </DropDownLink>
            </div>
          ))}
        </MenuGrid>
      ) : (
        itemList.map((item, index) => (
          <div key={index}>
            <DropDownLink to="/"> {item} </DropDownLink>
          </div>
        ))
      )}
    </CustomDropDown>
  );
};

export default DropDown;
