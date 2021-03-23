import { useState, useCallback, useEffect } from "react"

type NumberInput = {
  initialValue: number
  max?: number
  min?: number
  step?: number
  callback: (n: number) => void
}

export const useNumberInput = ({
  initialValue,
  max,
  min,
  step,
  callback = () => {},
}: NumberInput) => {
  const [value, setNumber] = useState(initialValue)

  const maxima = useCallback(
    (newNumber: number) => {
      if (max) {
        if (newNumber > max) {
          return max
        }
      }

      if (min) {
        if (newNumber < min) {
          return min
        }
      }

      return newNumber
    },
    [min, max],
  )

  useEffect(() => {
    callback(value)
  }, [value, callback])

  const setNumberWithMaxima = useCallback(
    (n: number) => {
      setNumber(maxima(n))
    },
    [setNumber, maxima],
  )

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value === "") return // don't go to 0 when empty
      const cast = Number(e.target.value)
      if (isNaN(cast)) return // drop NaN
      setNumberWithMaxima(value)
    },
    [setNumberWithMaxima],
  )

  const inputProps = {
    type: "number",
    onChange,
    value: value.toString(),
    max,
    min,
    step,
  }

  return {
    number: value,
    setNumber: setNumberWithMaxima,
    inputProps,
  }
}
