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
  transition: opacity ease-in-out 0.8s;
  &.active {
    opacity: 1;
  }
  > .container {
    z-index: 6;
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
