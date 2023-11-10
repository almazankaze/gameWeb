import {
  BaseButton,
  FormButton,
  CartButton,
  HeroButton,
  DetailButton,
  ClearButton,
  SwitchButton,
  LoadingSpinner,
} from "./button.style";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  form: "form",
  cart: "cart-btn",
  heroBtn: "hero-btn",
  detail: "detail-btn",
  clear: "clear-btn",
  switch: "switch-btn",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.form]: FormButton,
    [BUTTON_TYPE_CLASSES.cart]: CartButton,
    [BUTTON_TYPE_CLASSES.heroBtn]: HeroButton,
    [BUTTON_TYPE_CLASSES.detail]: DetailButton,
    [BUTTON_TYPE_CLASSES.clear]: ClearButton,
    [BUTTON_TYPE_CLASSES.switch]: SwitchButton,
  }[buttonType]);

const Button = ({ children, buttonType, isLoading = false, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <LoadingSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
