import styled from "styled-components";

export const BaseButton = styled.button`
  background-color: var(--secondary-color);
  color: var(--white);
  min-width: 110px;
  text-align: center;
  padding: 0.5em;
  margin: 0;
  display: inline-block;
  transition: all 0.3s linear;
  font-size: 1.125rem;
  font-weight: 700;
  text-transform: uppercase;
  border: 1px solid var(--secondary-color);
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  &:hover {
    background-color: var(--white);
    color: var(--secondary-color);
  }

  &.full-btn {
    width: 100%;
    margin: 0.75rem 0 1.5rem;
  }

  &.m-medium {
    margin: 1rem;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    min-width: 80px;
  }

  @media (max-width: 320px) {
    font-size: 0.875rem;
  }
`;

export const FormButton = styled(BaseButton)`
  margin: 0.625rem 0;
  outline: none;
  border-radius: 1.25rem;
  font-size: 1rem;
  width: 100%;
  text-transform: none;

  &:hover {
    background-color: var(--secondary-color);
    color: var(--white);
  }
`;

export const CartButton = styled(BaseButton)`
  margin: 0.75rem 0;
`;

export const HeroButton = styled(CartButton)``;

export const StackButton = styled(BaseButton)`
  margin: 0.5rem;
  font-size: 0.825rem;
  text-transform: none;
`;

export const DetailButton = styled(CartButton)`
  font-size: 0.875rem;
  font-weight: 800;
  padding: 1em 0.5em;

  @media (max-width: 1025px) {
    font-size: 0.75rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 0.875rem;
  }
`;

export const ClearButton = styled(BaseButton)`
  background: transparent;
  color: var(--white);
  margin: 0;
  font-weight: 500;
  border: 1px solid var(--secondary-color);

  &:hover {
    background-color: var(--secondary-color);
    color: var(--white);
  }
`;

export const SwitchButton = styled(ClearButton)`
  margin-right: 12px;
  border-bottom: none;
  border-radius: 0;

  &:hover {
    background-color: var(--secondary-color);
    border-bottom: none;
  }

  &.active-detail {
    background-color: var(--secondary-color);
    border-bottom: none;
  }

  &.active-detail:hover {
    color: var(--white);
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 0.875rem;
    margin-right: 0;
  }

  @media (max-width: 300px) {
    font-size: 0.75rem;
  }
`;

export const DangerButton = styled(CartButton)`
  background-color: var(--error);
  border: 1px solid var(--error);
  &:hover {
    background-color: transparent;
    color: var(--white);
  }
`;

export const GoogleButton = styled(BaseButton)`
  margin: 0.625rem 0;
  background-color: var(--gray-100);
  color: var(--gray-600);
  font-size: 1rem;
  text-transform: none;
  border: 1px solid var(--gray-100);
  box-shadow: none;

  > img {
    width: 25px;
    height: 25px;
    line-height: 0 !important;
    vertical-align: middle;
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: var(--gray-100);
    color: var(--gray-600);
    box-shadow: 0 6px 18px 7px rgba(249, 170, 1, 0.2);
  }
`;

export const LoadingSpinner = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
