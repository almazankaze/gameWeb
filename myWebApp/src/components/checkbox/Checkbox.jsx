import { useState } from "react";

import {
  CheckBoxContainer,
  Icon,
  HiddenCheckbox,
  BaseCheckbox,
} from "./Checkbox.style";

const Checkbox = ({ label, ...otherProps }) => {
  const [checked, setChecked] = useState(false);

  return (
    <CheckBoxContainer {...otherProps}>
      <HiddenCheckbox
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
      />
      <BaseCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </BaseCheckbox>
      <span>{label}</span>
    </CheckBoxContainer>
  );
};

export default Checkbox;
