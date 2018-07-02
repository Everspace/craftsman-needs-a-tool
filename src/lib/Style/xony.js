import { css } from "emotion"

/**
 * Puts X color on Y background
 * @param {Color} text
 * @param {Color} background
 */
export const xony = (text, background) => css`
  color: ${text};
  background-color: ${background};
`
