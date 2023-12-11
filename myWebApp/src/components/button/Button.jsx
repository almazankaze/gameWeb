import {
  BaseButton,
  FormButton,
  CartButton,
  HeroButton,
  StackButton,
  DetailButton,
  ClearButton,
  SwitchButton,
  DangerButton,
  GoogleButton,
  LoadingSpinner,
} from "./button.style";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  form: "form",
  cart: "cart-btn",
  heroBtn: "hero-btn",
  stackBtn: "stack-btn",
  detail: "detail-btn",
  clear: "clear-btn",
  switch: "switch-btn",
  google: "google-btn",
  danger: "danger-btn",
};

import googleIcon from "../../assets/home-images/google.png";

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.form]: FormButton,
    [BUTTON_TYPE_CLASSES.cart]: CartButton,
    [BUTTON_TYPE_CLASSES.heroBtn]: HeroButton,
    [BUTTON_TYPE_CLASSES.stackBtn]: StackButton,
    [BUTTON_TYPE_CLASSES.detail]: DetailButton,
    [BUTTON_TYPE_CLASSES.clear]: ClearButton,
    [BUTTON_TYPE_CLASSES.switch]: SwitchButton,
    [BUTTON_TYPE_CLASSES.danger]: DangerButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleButton,
  }[buttonType]);

const Button = ({ children, buttonType, isLoading = false, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {buttonType === BUTTON_TYPE_CLASSES.google && (
            <img src={googleIcon} alt="google"></img>
          )}{" "}
          {children}
        </>
      )}
    </CustomButton>
  );
};

export default Button;
