import React, { useCallback, useEffect, useState, useRef } from "react"
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
  const [value, setValue] = useState(initialValue)
  const ref = useRef<HTMLInputElement>(null)

  let maxima = (newNumber:number) => {
    if (newNumber > max) return max
    if (newNumber < min) return min
    return newNumber
  }

  let adjustNumber = (delta:number) => {
    if (!ref.current) return
    let newNumber = Number(ref.current.value) + delta
    setValue(maxima(newNumber))
  }

  let onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!ref.current) return
    if (e.target.value === "") return // don't go to 0 when empty
    let cast = Number(e.target.value)
    if (isNaN(cast)) return
    setValue(maxima(cast))
  }

  useEffect(()=> {
    if (!ref.current) return
    ref.current.value = value.toString()
    callback && callback(value)
  }, [value])

  return (
    <InteractiveGroup seperated color={color} className={className}>
      <Button colorStyle={color} onClick={()=>adjustNumber(-step)}>
        -
      </Button>
      <input
        max={max}
        min={min}
        step={step}
        ref={ref}
        className={cx(interactive(color), numberInputStyle)}
        onChange={onChange}
      />
      <Button colorStyle={color} onClick={()=>adjustNumber(step)}>
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
