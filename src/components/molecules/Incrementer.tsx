import React from "react"
import { css, cx } from "emotion"
import { Button, ButtonStyle } from "components/atoms/Button"
import { interactiveGroup } from "styles/Misc"

let numberStyle = css`
  ${ButtonStyle};
  width: 2.5rem;
  text-align: center;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }
`

//
// height: 100%;
// min-height: 100%;
// position: relative;

// Explode:
// <div className={interactiveGroup}>
//   {Array.from({ length: 10 }, (_, i) => (
//     <Button key={i} active={(i % 3 === 0).toString()}>
//       {10 - i}s
//     </Button>
//   )).reverse()}
// </div>

export const Incrementer = props => (
  <div className={cx(interactiveGroup, props.className)}>
    <Button>-</Button>
    <input className={numberStyle} type="number" placeholder={props.value} />
    <Button>+</Button>
  </div>
)

export default Incrementer
