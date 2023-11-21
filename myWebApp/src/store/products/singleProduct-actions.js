import { createAction } from "../../utils/reducer/reducer";

import { PRODUCTS_ACTION_TYPES } from "./products-types";

import * as api from "../api/index";

export const fetchProductStart = () => {
  return { type: PRODUCTS_ACTION_TYPES.FETCH_PRODUCT_START };
};

export const fetchProductSuccess = (product) =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCT_SUCCESS, product);

export const fetchProductFailure = (error) =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCT_FAILED, error);

export const getProduct = (id) => {
  return async (dispatch) => {
    dispatch(fetchProductStart());
    try {
      const { data } = await api.fetchProduct(id);
      dispatch(fetchProductSuccess(data));
    } catch (e) {
      dispatch(fetchProductFailure(e));
    }
  };
};

// reviews
export const createReviewStart = () => {
  return { type: PRODUCTS_ACTION_TYPES.CREATE_REVIEW_START };
};

export const createReviewSuccess = (review) =>
  createAction(PRODUCTS_ACTION_TYPES.CREATE_REVIEW_SUCCESS, review);

export const createReviewFailure = (error) =>
  createAction(PRODUCTS_ACTION_TYPES.CREATE_REVIEW_FAILED, error);

export const createReview = (id, review) => {
  return async (dispatch) => {
    dispatch(createReviewStart());
    try {
      const { data } = await api.postReview(id, review);
      dispatch(createReviewSuccess(data));
      return true;
    } catch (e) {
      dispatch(createReviewFailure(e));
      return false;
    }
  };
};
