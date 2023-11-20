import { createSelector } from "reselect";

const selectToastReducer = (state) => state.toast;

export const selectIsToastOpen = createSelector(
  [selectToastReducer],
  (toastSlice) => toastSlice.showToast
);

export const selectToastMessage = createSelector(
  [selectToastReducer],
  (toastSlice) => toastSlice.message
);

export const selectToastType = createSelector(
  [selectToastReducer],
  (toastSlice) => toastSlice.type
);
