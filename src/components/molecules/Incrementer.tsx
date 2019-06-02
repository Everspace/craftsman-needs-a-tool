import React, { useCallback } from "react"
import { css, cx } from "emotion"
import { Button } from "components/atoms/Button"
import { interactive } from "styles/Misc"
import { InteractiveGroup } from "components/atoms/InteractiveGroup"
import { secondary } from "styles/Colors"
import { useNumberInput } from "hooks/input"

interface IncrementerProps {
  initialValue?: number
  max?: number
  min?: number
  step?: number
  className?: string
  color?: any
  callback: (n: number) => void
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
  const { number, setNumber, inputProps } = useNumberInput({
    initialValue,
    max,
    min,
    step,
    callback,
  })

  const upNumber = useCallback(
    (e: React.MouseEvent) => {
      setNumber(number + step)
    },
    [number, setNumber, step],
  )

  const downNumber = useCallback(
    (e: React.MouseEvent) => {
      setNumber(number - step)
    },
    [number, setNumber, step],
  )

  return (
    <InteractiveGroup seperated className={className}>
      <Button colorStyle={color} onClick={downNumber}>
        -
      </Button>
      <input
        {...inputProps}
        className={cx(interactive(color), numberInputStyle)}
      />
      <Button colorStyle={color} onClick={upNumber}>
        +
      </Button>
    </InteractiveGroup>
  )
}

let numberInputStyle = css`
  width: 2.5em;
  padding: 0em;
  text-align: center;
  box-shadow: none;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }
`

export default Incrementer
