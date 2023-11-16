import styled from "styled-components";

export const RadioButtonsContainer = styled.div``;

export const RadioButtonContainer = styled.label`
  display: flex;
  padding: 0.25rem;
  cursor: pointer;
  gap: 0.5rem;
  user-select: none;
  -moz-user-select: none;
  -webkit-text-select: none;
  -webkit-user-select: none;
  transition: all 0.25s ease-in-out;

  &:hover {
    color: var(--secondary-color);
  }
`;

export const HiddenRadioButton = styled.input.attrs({ type: "radio" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 12px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 12px;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

export const RadioButton = styled.div`
  display: inline-block;
  height: 1rem;
  width: 1rem;
  border-radius: 0.25rem;
  border: 1px solid var(--secondary-color);
  background: ${(props) =>
    props.checked ? "var(--secondary-color)" : "var(--third-color)"};

  ${HiddenRadioButton}:focus + & {
    box-shadow: 0 0 0 2px #f1ce80;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;
