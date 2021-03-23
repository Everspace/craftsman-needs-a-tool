import { css } from "@emotion/react"

/**
 * Puts X color on Y background
 */
export const xony = (text: string, background: string) =>
  css({
    color: text,
    backgroundColor: background,
  })
