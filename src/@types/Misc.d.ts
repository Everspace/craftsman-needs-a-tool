declare namespace cnat {
  export type Color = {
    r: number
    b: number
    g: number
    a?: number
  }
}

type booleanString = "false" | "true"

type IntrisnicElement = keyof JSX.IntrinsicElements
type JSXElement<K extends IntrisnicElement> = JSX.IntrinsicElements[K]

