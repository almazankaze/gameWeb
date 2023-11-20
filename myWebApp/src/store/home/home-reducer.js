import { HOME_ACTION_TYPES } from "./home-types";

export const HOME_INITIAL_STATE = {
  products: [],
  isLoading: false,
  error: null,
};

export const homeReducer = (state = HOME_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case HOME_ACTION_TYPES.FETCH_HOME_PRODUCTS_START:
      return {
        ...state,
        error: null,
        products: [],
        isLoading: true,
      };
    case HOME_ACTION_TYPES.FETCH_HOME_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, products: payload, error: null };
    case HOME_ACTION_TYPES.FETCH_HOME_PRODUCTS_FAILED:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};
