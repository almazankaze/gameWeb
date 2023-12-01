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
        error: null,
        product: {},
        isLoading: true,
      };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, product: payload, error: null };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCT_FAILED:
      return { ...state, isLoading: false, error: payload };

    case PRODUCTS_ACTION_TYPES.REVIEW_START:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case PRODUCTS_ACTION_TYPES.CREATE_REVIEW_SUCCESS:
      return {
        ...state,
        isLoading: false,
        product: {
          ...state.product,
          reviews: [...state.product.reviews, payload],
        },
        error: null,
      };
    case PRODUCTS_ACTION_TYPES.DELETE_REVIEW_SUCCESS:
      return {
        ...state,
        isLoading: false,
        product: {
          ...state.product,
          reviews: state.product.reviews.filter(
            (review) => review._id !== payload._id
          ),
        },
        error: null,
      };
    case PRODUCTS_ACTION_TYPES.REVIEW_FAILED:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};
