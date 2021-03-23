/** @jsxImportSource @emotion/react */
import { css } from "twin.macro"
import React from "react"
import Button from "components/atoms/Button"
import { interactive } from "styles/Misc"
import InteractiveGroup from "components/atoms/InteractiveGroup"
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

export const Incrementer: React.FC<IncrementerProps> = ({
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

  return (
    <InteractiveGroup seperated>
      <Button colour="secondary" onClick={() => setNumber(number - step)}>
        -
      </Button>
      <input
        {...inputProps}
        onInput={e => console.log("what")}
        css={[interactive(color), numberInputStyle]}
      />
      <Button colour="secondary" onClick={() => setNumber(number + step)}>
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
