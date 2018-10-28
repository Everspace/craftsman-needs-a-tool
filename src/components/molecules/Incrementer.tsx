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

  let countAndCallback = function(newNumber: any) {
    if (newNumber !== "") {
      const cast = Number(newNumber)
      setCount(cast)
      callback && callback(cast)
    } else {
      setCount(newNumber)
    }
    if (typeof newNumber === "number") {
    }
  }

  const increment = () => {
    input.current.stepUp()
  }

  const deincrement = () => {
    input.current.stepDown()
  }

  const onChange = e => {
    countAndCallback(e.target.value)
  }

  return (
    <div className={cx(interactiveGroup, className)}>
      <Button onClick={deincrement}>-</Button>
      <input
        ref={input as any}
        max={max}
        min={min}
        step={step}
        className={numberStyle}
        value={count}
        onChange={onChange}
        type="number"
      />
      <Button onClick={increment}>+</Button>
    </div>
  )
}

// const callback = useCallback(e => e)
// const onChange = useCallback(e => e)

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

export default Incrementer
