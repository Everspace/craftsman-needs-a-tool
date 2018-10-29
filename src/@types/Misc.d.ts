declare namespace cnat {
  export type ColorPrimative = {
    r: number
    b: number
    g: number
    a?: number
  }
}

type booleanString = "false" | "true"

type IntrisnicElement = keyof JSX.IntrinsicElements
type JSXElement<K extends IntrisnicElement> = JSX.IntrinsicElements[K]

/**
 * Actual color specification
 */
interface MaterialColorObject {
  /**
   * css classname from xony
   */
  cssClass: string
  /**
   * the color of the text
   */
  text: string
  /**
   * the background color that the object should be
   */
  color: string
}

/**
 * A theme like "primary" or "secondary"
 */
interface MaterialColor {
  light: MaterialColorObject
  dark: MaterialColorObject
  main: MaterialColorObject
}

/**
 * Object accepts a Material color to be.
 */
interface Colorable {
  color?: MaterialColor
}
