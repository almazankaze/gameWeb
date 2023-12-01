import { createAction } from "../../utils/reducer/reducer";
import { MODAL_ACTION_TYPES } from "./modal-types";

export const setIsModalOpen = (productId = null, reviewId = null, boolean) => {
  const data = {
    productId,
    reviewId,
    boolean,
  };
  return createAction(MODAL_ACTION_TYPES.SET_IS_MODAL_OPEN, data);
};
