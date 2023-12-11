import styled from "styled-components";

export const SlideContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.backgrounds[0]});
  background-size: 100% 100%;
  background-position: center;
  position: absolute;
  opacity: 0;
  visibility: hidden;

  transition: opacity 0.5s ease-in, visibility 0.5s ease-in;
  &.active {
    opacity: 1;
    visibility: visible;
  }

  > .container {
    z-index: 1;
  }

  @media (max-width: 500px) {
    background-image: url(${(props) => props.backgrounds[1]});
  }
`;

export const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 60%;
  color: var(--white);

  @media (max-width: 500px) {
    width: 100%;
  }
`;
