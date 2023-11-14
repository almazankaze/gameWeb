import { PRODUCTS_ACTION_TYPES } from "../products-types";

export const PRODUCT_INITIAL_STATE = {
  searchResults: [],
  isLoading: false,
  error: null,
};

export const searchReducer = (state = PRODUCT_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCTS_ACTION_TYPES.FETCH_SEARCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCTS_ACTION_TYPES.FETCH_SEARCH_SUCCESS:
      return { ...state, isLoading: false, product: payload };
    case PRODUCTS_ACTION_TYPES.FETCH_SEARCH_FAILED:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};
