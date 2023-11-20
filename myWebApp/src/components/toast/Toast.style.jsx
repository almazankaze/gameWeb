import styled from "styled-components";

export const BaseToast = styled.div`
  position: fixed;
  z-index: 1000;
  top: 6rem;
  right: 1rem;
  border-radius: 12px;
  border: 1px solid var(--main-color);
  background: var(--third-color);
  padding: 20px 35px 20px 25px;
  box-shadow: 0 6px 20px -5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transform: translateX(calc(100% + 30px));
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.35);

  &.active {
    transform: translateX(0%);
  }

  > .toast-content {
    display: flex;
    align-items: center;
  }

  > .toast-content > .check {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    min-width: 35px;
    background-color: ${(props) =>
      props.type === "success" ? "var(--secondary-color)" : "red"};
    color: #fff;
    font-size: 20px;
    border-radius: 50%;
  }

  > .toast-content > .close {
    position: absolute;
    top: 10px;
    right: 15px;
    padding: 5px;
    cursor: pointer;

    opacity: 0.7;
    transform: scale(1.4);
  }

  > .toast-content > .close:hover {
    opacity: 1;
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1.5rem;

  > .title {
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  > .text {
    font-weight: 400;
  }
`;

export const ToastProgress = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 100%;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-color: var(--secondary-color);
  }

  &.active:before {
    animation: progress 5s linear forwards;
  }

  @keyframes progress {
    100% {
      right: 100%;
    }
  }
`;
