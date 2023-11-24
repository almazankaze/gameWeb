import { USER_ACTION_TYPES } from "./user-types";

const USER_INITIAL_DATA = {
  userData: {},
  isLoading: false,
  error: null,
};

export const userReducer = (state = USER_INITIAL_DATA, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.USER_START:
      return {
        ...state,
        userData: {},
        isLoading: true,
        error: null,
      };
    case USER_ACTION_TYPES.USER_SUCCESS:
      localStorage.setItem("profile", JSON.stringify(payload));
      return {
        ...state,
        userData: {},
        isLoading: false,
        error: null,
      };

    case USER_ACTION_TYPES.USER_LOGOUT_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case USER_ACTION_TYPES.USER_LOGOUT:
      localStorage.clear();
      return {
        ...state,
        userData: {},
        isLoading: false,
        error: null,
      };

    case USER_ACTION_TYPES.USER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
