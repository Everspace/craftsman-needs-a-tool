import { css } from "@emotion/core"

/**
 * Puts X color on Y background
 */
export const xony = (text: string, background: string) =>
  css({
    color: text,
    backgroundColor: background,
  })
