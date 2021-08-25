/** @jsxImportSource @emotion/react */
import { css } from "twin.macro"
import React, { useCallback, useEffect, useState, useMemo } from "react"
import Button from "components/atoms/Button"
import { interactive } from "styles/Misc"
import InteractiveGroup from "components/atoms/InteractiveGroup"
import { secondary } from "styles/Colors"
import { useAtom, WritableAtom } from "jotai"
import { createMaxima } from "lib/math"

interface IncrementerProps {
  atom: WritableAtom<number, number>
  max?: number
  min?: number
  step?: number
  className?: string
  color?: any
}

export const Incrementer: React.FC<IncrementerProps> = ({
  max = 99,
  min = -9,
  step = 1,
  atom,
  color = secondary,
}) => {
  const [number, setNumber] = useAtom(atom)
  const [writtenState, setWrittenState] = useState(number.toString())

  const maxima = useMemo(() => createMaxima(min, max), [min, max])

  const setNumberWithMaxima = useCallback(
    (n: number) => {
      setNumber(maxima(n))
    },
    [setNumber, maxima],
  )

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setWrittenState(e.target.value)
      if (e.target.value === "") return // don't go to 0 when empty
      const cast = Number(e.target.value)
      if (isNaN(cast)) return // drop NaN
      setNumberWithMaxima(cast)
    },
    [setWrittenState, setNumberWithMaxima],
  )

  useEffect(() => {
    setWrittenState(number.toString())
  }, [number])

  return (
    <InteractiveGroup seperated>
      <Button
        colour="secondary"
        onClick={() => setNumberWithMaxima(number - step)}
      >
        -
      </Button>
      <input
        type="number"
        value={writtenState}
        step={step}
        onChange={onChange}
        onInput={e => console.log("what")}
        css={[interactive(color), numberInputStyle]}
      />
      <Button
        colour="secondary"
        onClick={() => setNumberWithMaxima(number + step)}
      >
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
