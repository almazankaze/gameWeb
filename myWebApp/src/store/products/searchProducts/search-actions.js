import { createAction } from "../../utils/reducer/reducer";

import { PRODUCTS_ACTION_TYPES } from "../products-types";

import * as api from "../api/index";

export const fetchSearchStart = () => {
  return { type: PRODUCTS_ACTION_TYPES.FETCH_SEARCH_START };
};

export const fetchSearchSuccess = (product) =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_SEARCH_SUCCESS, product);

export const fetchSearchFailure = (error) =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_SEARCH_FAILED, error);

export const getSearchProducts = (limit, offset, searchTerm) => {
  return async (dispatch) => {
    dispatch(fetchSearchStart());
    try {
      const { data } = await api.fetchSearchProducts(limit, offset, searchTerm);
      dispatch(fetchSearchSuccess(data));
    } catch (e) {
      dispatch(fetchSearchFailure(e));
    }
  };
};
