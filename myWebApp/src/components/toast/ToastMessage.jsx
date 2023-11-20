import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setShowToast } from "../../store/toast/toast-actions";
import { useSelector } from "react-redux";
import {
  selectIsToastOpen,
  selectToastMessage,
  selectToastType,
} from "../../store/toast/toast-selector";

import { BaseToast, MessageContainer, ToastProgress } from "./Toast.style";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const ToastMessage = () => {
  const dispatch = useDispatch();

  const closeToast = () => {
    dispatch(setShowToast(false, message, type));
  };

  const isOpen = useSelector(selectIsToastOpen);
  const message = useSelector(selectToastMessage);
  const type = useSelector(selectToastType);

  useEffect(() => {
    const timeId = setTimeout(() => {
      dispatch(setShowToast(false, message, type));
    }, 5000);

    if (isOpen === false) {
      clearTimeout(timeId);
    }

    return () => {
      clearTimeout(timeId);
    };
  }, [isOpen]);

  return (
    <BaseToast className={isOpen ? "active" : ""} type={type}>
      <div className="toast-content">
        {type === "success" ? (
          <CheckIcon className="check" />
        ) : (
          <CloseIcon className="check" />
        )}

        <MessageContainer>
          <span className="title">{type}</span>
          <span className="text">{message}</span>
        </MessageContainer>
        <CloseIcon className="close" onClick={closeToast} />

        <ToastProgress className={isOpen ? "active" : ""} type={type} />
      </div>
    </BaseToast>
  );
};

export default ToastMessage;
