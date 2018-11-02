import { useRef, useState } from "react"

export const useNumberInput = (
  initialValue: number,
  callback?: (number) => void,
) => {
  const ref = useRef<HTMLInputElement>()
  let [value, setCount] = useState(initialValue, [callback])
  value = value

  const inputProps = {
    type: "number",
    ref,
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      let newNumber = e.target.value
      if (newNumber !== "") {
        const cast = Number(newNumber)
        setCount(cast)
        callback && callback(cast)
      } else {
        setCount(newNumber)
      }
    },
  }

  return { value, setCount, ref, inputProps }
}
