import { createAction } from "../../utils/reducer/reducer";
import { MODAL_ACTION_TYPES } from "./modal-types";

export const setIsModalOpen = (boolean) =>
  createAction(MODAL_ACTION_TYPES.SET_IS_MODAL_OPEN, boolean);
