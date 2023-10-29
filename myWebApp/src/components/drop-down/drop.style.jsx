import styled from "styled-components";
import { Link } from "react-router-dom";

export const DropDownLink = styled(Link)`
  text-decoration: none;
  color: var(--white);
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    color: var(--secondary-color);
  }
`;

export const BaseDropDown = styled.div`
  position: absolute;
  background-color: var(--black);
  box-shadow: 0 6px 18px 7px rgba(249, 170, 1, 0.2);
  min-width: 178px;
  max-width: 225px;
  padding: 0.5rem;
  top: 45px;
  left: 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 10;

  > div {
    width: 100%;
    padding: 0.5rem 0;
  }

  > div > ${DropDownLink} {
    display: flex;
    align-items: center;
  }
`;

export const MultiColDropDown = styled(BaseDropDown)`
  min-width: max-content;
  max-width: max-content;
  cursor: default;
  padding: 1.5rem;
`;

export const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.numCols}, 1fr);
  gap: 1rem;
  padding: 0.75rem;
  cursor: default;

  > div {
    cursor: default;
  }
`;

export const DropDownContainerStyle = styled.div`
  position: relative;

  &:hover ${BaseDropDown} {
    top: 29px;
    opacity: 1;
    visibility: visible;
  }
`;
