import { createSelector } from "reselect";

const selectCookiesReducer = (state) => state.cookies;

export const selectIsPromptOpen = createSelector(
  [selectCookiesReducer],
  (cookiesSlice) => cookiesSlice.isPromptOpen
);
