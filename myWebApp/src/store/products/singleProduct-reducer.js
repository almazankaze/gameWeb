import { PRODUCTS_ACTION_TYPES } from "./products-types";

export const PRODUCT_INITIAL_STATE = {
  product: {},
  isLoading: false,
  error: null,
};

export const productReducer = (state = PRODUCT_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCT_START:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, product: payload };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCT_FAILED:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};
