import { useState } from "react";

import {
  RadioButtonsContainer,
  RadioButtonContainer,
  HiddenRadioButton,
  Icon,
  RadioButton,
} from "./RadioButtons.style";

const RadioButtons = ({
  forwardedRef,
  name = "myRadio",
  buttons = [],
  ...otherProps
}) => {
  const [checked, setChecked] = useState(buttons[0]);

  const handleSelectChange = (e) => {
    setChecked(e.target.value);
  };

  return (
    <RadioButtonsContainer ref={forwardedRef} checked={checked} {...otherProps}>
      {buttons.map((button, index) => (
        <RadioButtonContainer key={index}>
          <HiddenRadioButton
            name={name}
            value={button}
            checked={checked === button}
            onChange={handleSelectChange}
          />
          <RadioButton checked={checked === button}>
            <Icon viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </Icon>
          </RadioButton>
          {button}
        </RadioButtonContainer>
      ))}
    </RadioButtonsContainer>
  );
};

export default RadioButtons;
