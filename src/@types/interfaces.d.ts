/// <reference types="@emotion/css" />

declare namespace cnat {
  type Color = {
    r: number
    b: number
    g: number
    a?: number
  }
}

interface HasStyle {
  className?: string
  style?: React.CSSProperties
}

type booleanString = "false" | "true"

/**
 * Actual color specification
 */
interface MaterialColorObject {
  /**
   * css classname from xony
   */
  cssClass: SerializedStyles
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
  colorStyle?: MaterialColor
}
