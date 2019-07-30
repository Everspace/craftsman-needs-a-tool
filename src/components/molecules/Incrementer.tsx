/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import React, { useCallback } from "react"
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
    <InteractiveGroup seperated>
      <Button colorStyle={color} onClick={downNumber}>
        -
      </Button>
      <input {...inputProps} css={[interactive(color), numberInputStyle]} />
      <Button colorStyle={color} onClick={upNumber}>
        +
      </Button>
    </InteractiveGroup>
  )
}

const numberInputStyle = css({
  width: "2.5em",
  padding: "0em",
  textAlign: "center",
  boxShadow: "none",
  "-moz-appearance": "textfield",
  "::-webkit-inner-spin-button, ::-webkit-outer-spin-button": {
    appearance: "none",
    margin: 0,
  },
})

export default Incrementer
