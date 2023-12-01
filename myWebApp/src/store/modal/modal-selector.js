import { createSelector } from "reselect";

const selectModalReducer = (state) => state.modal;

export const selectIsModalOpen = createSelector(
  [selectModalReducer],
  (modalSlice) => modalSlice.isModalOpen
);

export const selectModalReviewId = createSelector(
  [selectModalReducer],
  (modalSlice) => modalSlice.reviewId
);

export const selectModalProductId = createSelector(
  [selectModalReducer],
  (modalSlice) => modalSlice.productId
);
