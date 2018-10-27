import { css } from "emotion"

/**
 * Puts X color on Y background
 */
export const xony = (text: string, background: string) => css`
  color: ${text};
  background-color: ${background};
`

// export const xony = (test: cnat.Color, background: cnat.Color) =>
//   xony(convert)
