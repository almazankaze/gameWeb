import { createAction } from "../../utils/reducer/reducer";

import { HOME_ACTION_TYPES } from "./home-types";

import * as api from "../api/index";

export const fetchProductStart = () => {
  return { type: HOME_ACTION_TYPES.FETCH_HOME_PRODUCTS_START };
};

export const fetchProductSuccess = (products) =>
  createAction(HOME_ACTION_TYPES.FETCH_HOME_PRODUCTS_SUCCESS, products);

export const fetchProductFailure = (error) =>
  createAction(HOME_ACTION_TYPES.FETCH_HOME_PRODUCTS_FAILED, error);

export const getProducts = () => {
  return async (dispatch) => {
    dispatch(fetchProductStart());
    try {
      const { data } = await api.fetchHomeProduct();
      dispatch(fetchProductSuccess(data));
    } catch (e) {
      dispatch(fetchProductFailure(e));
    }
  };
};
