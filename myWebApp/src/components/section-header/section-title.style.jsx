import styled from "styled-components";

export const SectionHeaderContainer = styled.div`
  margin-bottom: 3rem;

  > h1 {
    text-align: center;
    text-transform: uppercase;
    text-decoration: underline var(--secondary-color);
    text-underline-offset: 1.4rem;
    font-weight: 800;
    font-size: 1.625rem;
  }

  > hr {
    border: 1px solid var(--third-color);
    overflow: visible;
    margin: 0;
  }
`;
