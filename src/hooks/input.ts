import { useRef, useState, useCallback, useEffect } from "react"

export const useNumberInput = (
  initialValue: number,
  callback?: (n: number) => void,
) => {

  const ref = useRef<HTMLInputElement>(null)
  let [value, setCount] = useState<string>(initialValue.toString())

  // Make on change
  let onChange = useCallback( (e: React.ChangeEvent<HTMLInputElement>) => {
    let newNumber = e.target.value
    setCount(newNumber)
  }, [initialValue, callback])

  // Dispatch callback
  useEffect(() => {
    const cast = Number(value)
    if(cast && cast !== NaN) { // if cast is a number
      callback && callback(cast)
    }
  }, [callback, value])

  const inputProps = {
    type: "number",
    ref,
    value,
    onChange
  }

  return { value, setCount: (n:number)=>setCount(n.toString()), ref, inputProps }
}
