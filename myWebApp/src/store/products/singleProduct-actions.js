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
export const reviewStart = () => {
  return { type: PRODUCTS_ACTION_TYPES.REVIEW_START };
};

export const createReviewSuccess = (review) =>
  createAction(PRODUCTS_ACTION_TYPES.CREATE_REVIEW_SUCCESS, review);

export const deleteReviewSuccess = (review) =>
  createAction(PRODUCTS_ACTION_TYPES.DELETE_REVIEW_SUCCESS, review);

export const reviewFailure = (error) =>
  createAction(PRODUCTS_ACTION_TYPES.REVIEW_FAILED, error);

export const createReview = (id, review, token) => {
  return async (dispatch) => {
    dispatch(reviewStart());
    try {
      const { data } = await api.postReview(id, review, token);
      dispatch(createReviewSuccess(data));
      return true;
    } catch (e) {
      dispatch(reviewFailure(e));
      return false;
    }
  };
};

export const deleteReview = (id, review, token) => {
  return async (dispatch) => {
    dispatch(reviewStart());
    try {
      const { data } = await api.deleteReview(id, review, token);
      dispatch(deleteReviewSuccess(data));
      return true;
    } catch (e) {
      dispatch(reviewFailure(e));
      return false;
    }
  };
};
