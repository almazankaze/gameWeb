import { createAction } from "../../utils/reducer/reducer";
import { COOKIES_ACTION_TYPES } from "./cookies-types";

export const setCookies = () => {
  return createAction(COOKIES_ACTION_TYPES.SET_COOKIES, false);
};
