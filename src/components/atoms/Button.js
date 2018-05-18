import React from "react"
import { css } from "emotion";
import { resting, waiting, hovering } from "styles/Shadows"
import { cssClass } from "styles/Colors"
import classnames from "lib/Style/classnames";

let style = css`
  background: none;
  border: none;
  padding: 0.25rem 0.5rem;
  margin: 0.25rem;

  font-size: 1.15rem;
  font-weight: 900;

  ${waiting}
  ${cssClass.secondary.dark}

  border-radius: 0.25rem;
  transition: 0.25s all ease-in-out;

  &:focus {
    outline: 0;
  }

  &:hover {
    ${hovering};
  }

  &:active {
    ${resting};
    ${cssClass.secondary.main};
  }
`

export default props => {
  return <button
    {...props}
    className={classnames(style, props.className)}
  />
}
