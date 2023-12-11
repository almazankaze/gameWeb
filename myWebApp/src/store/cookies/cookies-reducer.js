import { COOKIES_ACTION_TYPES } from "./cookies-types";

const COOKIES_INITIAL_STATE = {
  isPromptOpen: true,
};

export const cookiesReducer = (state = COOKIES_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case COOKIES_ACTION_TYPES.SET_COOKIES:
      return {
        ...state,
        isPromptOpen: payload,
      };

    default:
      return state;
  }
};
