import { createSelector } from "reselect";

const selectSearchReducer = (state) => state.search;

export const selectSearch = createSelector(
  [selectSearchReducer],
  (searchSlice) => searchSlice.searchResults
);

export const selectIsLoading = createSelector(
  [selectSearchReducer],
  (searchSlice) => searchSlice.isLoading
);

export const selectPath = createSelector(
  [selectSearchReducer],
  (searchSlice) => searchSlice.searchResults.path
);
