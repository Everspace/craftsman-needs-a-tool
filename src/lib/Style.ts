import { css, cx } from "emotion"
import { ClassNameArg } from "create-emotion"

/**
 * Puts X color on Y background
 */
export const xony = (text: string, background: string) => css`
  color: ${text};
  background-color: ${background};
`

interface AcceptStyleOptions {
  cx?: ClassNameArg[] | string | null
  style?: React.CSSProperties
}

type acceptStyle = (HasStyle, AcceptStyleOptions) => HasStyle
export const acceptStyle = (props: HasStyle, options: AcceptStyleOptions) => {
  const style = { ...props.style, ...options.style }
  const className = cx(props.className, options.cx)

  return { style, className }
}
