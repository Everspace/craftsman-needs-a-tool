import { css } from "emotion";
import { resting, waiting, hovering } from "./Shadows";
import { cssClass, color } from "./Colors";

export const cornerRadius = "0.25rem"
export const roundedCorners = css`
  border-radius: ${cornerRadius};
`

export const spaced = css`
  padding: 1rem;
  margin:  1rem;
`

export const interactive = css`
  background: none;
  border: none;
  padding: ${cornerRadius} 0.5rem;
  margin:  ${cornerRadius};

  font-size: 1.15rem;
  font-weight: 900;

  ${resting};
  ${cssClass.secondary.main};

  ${roundedCorners}
  transition: 0.25s all ease-in-out;

  &:focus {
    transition: none;
    outline-style: dotted;
    outline-color: ${color.secondary.light};
    outline-offset: -${cornerRadius};
    outline-width:   0.15rem;
  }

  &:hover {
    ${waiting};
    ${cssClass.secondary.dark};
  }

  &:active {
    ${hovering};
    ${cssClass.secondary.light};
  }
`

export const interactiveGroup = css`
  /* Redo some of the interactive style */
  background-color: transparent;
  border-radius: ${cornerRadius};
  margin: ${cornerRadius};
  padding: 0;

  ${waiting}

  & > * {
    /* Allow z-index to work */
    position: relative;

    /* Reset style */
    border-radius: 0;
    box-shadow: none;
    margin: 0;

  }

  & > *:hover {
    /* Push hovered element above siblings */
    z-index: 1; 
  }

  /* Replant corners */
  & > *:first-child {
    border-top-left-radius: ${cornerRadius};
    border-bottom-left-radius: ${cornerRadius}; 
  }

  & > *:last-child {
    border-top-right-radius: ${cornerRadius};
    border-bottom-right-radius: ${cornerRadius};
  }
`