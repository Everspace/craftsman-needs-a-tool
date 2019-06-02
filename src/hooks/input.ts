import { useState, useCallback } from "react"

type NumberInput = {
  initialValue: number,
  max?: number,
  min?: number,
  step?: number,
  callback?: (n: number) => void,
}

export const useNumberInput = ({
  initialValue,
  max,
  min,
  step,
  callback,
}: NumberInput) => {
  const [value, setValue] = useState(initialValue.toString())
  const [number, setNumber] = useState(initialValue)

  const maxima = useCallback((newNumber:number) => {
    if (typeof max === 'number') {
      if (newNumber > max) {
        return max
      }
    }

    if (typeof min === 'number') {
      if (newNumber < min) {
        return min
      }
    }

    return newNumber
  }, [min, max])

  const setNumberWrapper = useCallback((number:number) => {
    const newNumber = maxima(number)
    setNumber(newNumber)
    setValue(newNumber.toString())
    callback && callback(newNumber)
  }, [callback, setValue, setNumber])

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    if (e.target.value === "") return // don't go to 0 when empty
    const cast = Number(e.target.value)
    if (isNaN(cast)) return // drop NaN
    setNumberWrapper(cast)
  }, [callback, setNumberWrapper, setValue])

  const inputProps = {
    type: "number",
    onChange,
    value,
    max,
    min,
    step,
  }

  return {
    number,
    setNumber: setNumberWrapper,
    inputProps
  }
}
