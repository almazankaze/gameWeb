import { createAction } from "../../utils/reducer/reducer";
import { TOAST_ACTION_TYPES } from "./toast-types";

export const setShowToast = (showToast, message = "", type = "success") =>
  createAction(TOAST_ACTION_TYPES.SET_SHOW_TOAST, { showToast, message, type });
