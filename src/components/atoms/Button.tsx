/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { interactive } from "styles/Misc"
import { secondary } from "styles/Colors"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & Colorable

export const Button: React.FC<ButtonProps> = ({
  colorStyle = secondary,
  style,
  ...props
}) => {
  return <button {...props} css={interactive(colorStyle)} />
}
