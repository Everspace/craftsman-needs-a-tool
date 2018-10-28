import { css } from "emotion"
import { resting, waiting, hovering } from "./Shadows"
import { secondary } from "./Colors"

export const cornerRadius = "0.25em"
export const roundedCorners = css`
  border-radius: ${cornerRadius};
`

export const spaced = css`
  padding: 1em;
  margin: 1em;
`

export const interactive = (colorObj = secondary) => css`
  background: none;
  border: none;
  /* TODO write multiplaction function */
  padding: ${cornerRadius} 0.5em;
  margin: ${cornerRadius};

  font-size: 1.15em;
  font-weight: 900;

  ${resting};
  ${colorObj.main.cssClass};

  ${roundedCorners};
  transition: 0.25s all ease-in-out;

  &:focus {
    transition: none;
    outline-style: dotted;
    outline-color: ${colorObj.light.color};
    outline-offset: -${cornerRadius};
    outline-width: 0.15em;
  }

  ::placeholder {
    color: ${colorObj.main.text};
    opacity: 1; /* Firefox */
  }

  &:hover {
    ${waiting};
    ${colorObj.dark.cssClass};
  }

  &:active {
    ${hovering};
    ${colorObj.light.cssClass};
  }
`
