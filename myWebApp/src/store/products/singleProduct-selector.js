import { createSelector } from "reselect";

const selectProductReducer = (state) => state.product;

export const selectProduct = createSelector(
  [selectProductReducer],
  (productSlice) => productSlice.product
);

export const selectIsLoading = createSelector(
  [selectProductReducer],
  (productSlice) => productSlice.isLoading
);
