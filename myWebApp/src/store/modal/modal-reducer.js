import { MODAL_ACTION_TYPES } from "./modal-types";

const MODAL_INITIAL_STATE = {
  isMoodalOpen: false,
};

export const modalReducer = (state = MODAL_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case MODAL_ACTION_TYPES.SET_IS_MODAL_OPEN:
      return {
        ...state,
        isModalOpen: payload,
      };
    default:
      return state;
  }
};
