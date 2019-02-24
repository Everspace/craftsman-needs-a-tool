import React, { useCallback } from "react"
import { css, cx } from "emotion"
import { Button } from "../../components/atoms/Button"
import { interactive } from "../../styles/Misc"
import { InteractiveGroup } from "../../components/atoms/InteractiveGroup"
import { secondary } from "../../styles/Colors"
import { useNumberInput } from "../../hooks/input"

interface IncrementerProps {
  initialValue?: number
  max?: number
  min?: number
  step?: number
  className?: string
  color?: any
  callback: (number) => void
}

export const Incrementer: React.SFC<IncrementerProps> = ({
  initialValue = 5,
  max = 99,
  min = -9,
  step = 1,
  callback,
  color = secondary,
  className,
}) => {
  const { ref, inputProps } = useNumberInput(initialValue, callback)
  // let {onChange, ref ,type ,value} = inputProps

  let adjustNumber = useCallback((delta:number) => {
    if (!ref.current) return
    let newNumber = Number(ref.current.value) + delta
    ref.current.value = (newNumber).toString()
  }, [ref.current, ref])

  return (
    <InteractiveGroup seperated color={color} className={className}>
      <Button color={color} onClick={()=>adjustNumber(-step)}>
        -
      </Button>
      <input
        {...inputProps}
        max={max}
        min={min}
        step={step}
        className={cx(interactive(color), numberInputStyle)}
      />
      <Button color={color} onClick={()=>adjustNumber(step)}>
        +
      </Button>
    </InteractiveGroup>
  )
}

let numberInputStyle = css`
  width: 2.5em;
  text-align: center;
  box-shadow: none;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }
`

export default Incrementer
