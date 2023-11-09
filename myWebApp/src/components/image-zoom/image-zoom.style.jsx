import styled from "styled-components";

export const ZoomImage = styled.figure`
  width: ${(props) => props.width};
  height: ${(props) => props.width};
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
`;
