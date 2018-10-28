import React, { useState, useRef } from "react"
import { css, cx } from "emotion"
import { Button, ButtonStyle } from "components/atoms/Button"
import { interactiveGroup } from "styles/Misc"

interface IncrementerProps {
  initialValue?: number
  max?: number
  min?: number
  step?: number
  className?: string
  callback: (number) => void
}

export const Incrementer: React.SFC<IncrementerProps> = ({
  initialValue = 5,
  max = 99,
  min = -9,
  step = 1,
  callback,
  className,
}) => {
  const [count, setCount] = useState(initialValue)
  const input: any = useRef(null)

  const onChange = e => {
    let newNumber = e.target.value
    if (newNumber !== "") {
      const cast = Number(newNumber)
      setCount(cast)
      callback && callback(cast)
    } else {
      setCount(newNumber)
    }
  }

  return (
    <div className={cx(interactiveGroup, className)}>
      <Button onClick={() => input.current.stepDown()}>-</Button>
      <input
        ref={input as any}
        max={max}
        min={min}
        step={step}
        className={numberInputStyle}
        value={count}
        onChange={onChange}
        type="number"
      />
      <Button onClick={() => input.current.stepUp()}>+</Button>
    </div>
  )
}

let numberInputStyle = css`
  ${ButtonStyle};
  width: 2.5rem;
  text-align: center;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }
`

export default Incrementer
