import { useState, useEffect } from "react";
import { setIsModalOpen } from "../../store/modal/modal-actions";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  selectIsModalOpen,
  selectModalProductId,
  selectModalReviewId,
} from "../../store/modal/modal-selector";
import { deleteReview } from "../../store/products/singleProduct-actions";
import { setShowToast } from "../../store/toast/toast-actions";

import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import {
  BaseModal,
  ModalContainer,
  ModalContent,
  ModalButtons,
  ModalSpinner,
} from "./Modal.style";

export const MODAL_TYPE_CLASSES = {
  base: "base",
};

const getModal = (modalType = MODAL_TYPE_CLASSES.base) =>
  ({
    [MODAL_TYPE_CLASSES.base]: BaseModal,
  }[modalType]);

const Modal = ({ children, modalType, isLoading = false, ...otherProps }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const CustomModal = getModal(modalType);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const isOpen = useSelector(selectIsModalOpen);
  const review = useSelector(selectModalReviewId);
  const product = useSelector(selectModalProductId);

  const removeReview = () => {
    dispatch(deleteReview(product, review, user?.token)).then((resp) => {
      if (resp) {
        dispatch(setShowToast(true, "Succesfully deleted review"));
      } else
        dispatch(
          setShowToast(true, "Could not delete review. Try again.", "Failed")
        );

      closeModal();
    });
  };

  const closeModal = () => {
    dispatch(setIsModalOpen(false));
  };

  return (
    <ModalContainer className={isOpen ? "show-modal" : ""}>
      <CustomModal disabled={isLoading} {...otherProps}>
        {isLoading ? (
          <ModalSpinner />
        ) : (
          <ModalContent>
            <h3>Are you sure you want to delete this review?</h3>
            <ModalButtons>
              <Button
                type="button"
                className="m-medium"
                buttonType={BUTTON_TYPE_CLASSES.danger}
                onClick={removeReview}
              >
                Delete
              </Button>
              <Button type="button" className="m-medium" onClick={closeModal}>
                Cancel
              </Button>
            </ModalButtons>
          </ModalContent>
        )}
      </CustomModal>
    </ModalContainer>
  );
};

export default Modal;
