import { createSelector } from "reselect";

const selectHomeReducer = (state) => state.home;

export const selectProducts = createSelector(
  [selectHomeReducer],
  (homeSlice) => homeSlice.products
);

export const selectIsLoading = createSelector(
  [selectHomeReducer],
  (homeSlice) => homeSlice.isLoading
);

export const selectProductError = createSelector(
  [selectHomeReducer],
  (homeSlice) => homeSlice.error
);
