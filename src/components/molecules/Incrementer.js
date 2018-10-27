import React from "react"
import { css, cx } from "emotion"
import Button from "../atoms/Button"
import { interactiveGroup, interactive } from "styles/Misc"

let style = css``

let numberStyle = css`
  width: 2.5rem;
  appearance: textfield;
  text-align: center;
  height: 100%;
  min-height: 100%;
  position: relative;

  /* TODO: Figure out why +0.5rem fixes problem */
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
`

const Incrementer = props => (
  <div className={cx(interactiveGroup, style)}>
    <Button>-</Button>
    <input
      className={cx(interactive, numberStyle)}
      type="number"
      placeholder={props.value}
    />
    <Button>+</Button>
  </div>
)

export default Incrementer
