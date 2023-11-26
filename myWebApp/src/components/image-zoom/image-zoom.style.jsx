import styled from "styled-components";

export const ZoomImage = styled.figure`
  width: ${(props) => props.width}px;
  height: ${(props) => props.width}px;
  background-repeat: no-repeat;

  &:hover {
    background: url(${(props) => props.background});
    background-repeat: no-repeat;
    border: 1px solid var(--secondary-color);
  }

  > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    pointer-events: none;
  }

  &:hover img {
    opacity: 0;
  }

  @media (max-width: 760px) {
    width: ${(props) => props.width - 100}px;
    height: ${(props) => props.width - 100}px;
  }

  @media (max-width: 420px) {
    width: ${(props) => props.width - 150}px;
    height: ${(props) => props.width - 150}px;
  }

  @media (max-width: 350px) {
    width: ${(props) => props.width - 250}px;
    height: ${(props) => props.width - 250}px;
  }
`;
