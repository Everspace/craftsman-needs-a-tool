declare namespace cnat {
  export type Color = {
    r: number
    b: number
    g: number
    a?: number
  }
}

type booleanString = "false" | "true"

type DivComponent = JSX.IntrinsicElements["div"]
type ButtonComponent = JSX.IntrinsicElements["button"]
type InputComponent = JSX.IntrinsicElements["input"]
