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

export const createReview = (id, review) => {
  return async (dispatch) => {
    dispatch(fetchProductStart());
    try {
      const { data } = await api.postReview(id, review);
      dispatch(fetchProductSuccess(data));
    } catch (e) {
      dispatch(fetchProductFailure(e));
    }
  };
};
