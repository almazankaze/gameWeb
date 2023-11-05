import styled from "styled-components";

export const BaseSelector = styled.div`
  display: flex;
  position: relative;
  border: 2px solid var(--white);
  border-radius: 0.5rem;
  color: var(--white);
  background-color: var(--third-color);
  font-size: 1.25rem;
  padding: 0 0.5rem;
  min-width: 124px;
  max-width: 124px;
  height: 38px;
  cursor: pointer;

  &.dropbox-selected {
    border: 2px solid var(--secondary-color);
  }
`;

export const SelectorTitle = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const SelectorArrow = styled.div`
  position: absolute;
  transform: rotate(180deg);
  bottom: 0;
  left: 100%;
  font-size: 1.375rem;
  color: var(--secondary-color);
  padding: 0.5rem 0.5rem 0;
  font-weight: 600;
  -webkit-transition: -webkit-transform 0.25s ease-out;
  -moz-transition: -moz-transform 0.25s ease-out;
  -o-transition: -o-transform 0.25s ease-out;
  -ms-transition: -ms-transform 0.25s ease-out;
  transition: transform 0.25s ease-out;

  &.rotate-arrow {
    transform: rotate(360deg);
  }
`;

export const SelectContent = styled.div`
  position: absolute;
  display: none;
  opacity: 0;
  height: max-content;
  overflow: hidden;
  top: 40px;
  left: 0;
  min-width: 150px;

  background-color: var(--third-color);
  border: 2px solid var(--white);
  border-radius: 0.5rem;
  z-index: 1;

  > p {
    padding: 0.5rem;
    transition: background-color 0.25s ease-in-out;
  }

  > p:hover {
    background-color: var(--secondary-color);
  }

  &.show-drop-menu {
    display: block;
    opacity: 1;
  }
`;
