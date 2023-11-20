import { TOAST_ACTION_TYPES } from "./toast-types";

const TOAST_INITIAL_STATE = {
  showToast: false,
  message: "",
  type: "success",
};

export const toastReducer = (state = TOAST_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case TOAST_ACTION_TYPES.SET_SHOW_TOAST:
      return {
        ...state,
        showToast: payload.showToast,
        message: payload.message,
        type: payload.type,
      };
    default:
      return state;
  }
};
