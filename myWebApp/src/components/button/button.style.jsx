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
  border: none;
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
`;

export const CartButton = styled(BaseButton)`
  margin: 0.75rem 0;
`;

export const HeroButton = styled(CartButton)``;

export const DetailButton = styled(BaseButton)`
  background: transparent;
  color: var(--black);
  margin: 0;
  margin-right: 12px;
  font-weight: 500;
  border: 1px solid var(--gray-500);
  border-bottom: none;

  &:hover {
    background: transparent;
    border: 1px solid var(--gray-500);
    border-bottom: none;
  }

  &.active-detail {
    background-color: #fff200;
    border: 1px solid #fff200;
    border-bottom: none;
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
