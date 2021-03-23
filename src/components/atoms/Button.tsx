/** @jsxImportSource @emotion/react */
import "twin.macro"
import React from "react"
import { interactive } from "styles/Misc"
import { secondary } from "styles/Colors"

export interface ButtonProps
  extends React.ComponentPropsWithRef<"button">,
    Colorable {}
export const Button = ({ colorStyle = secondary, ...props }: ButtonProps) => {
  return <button css={interactive(colorStyle)} {...props} />
}
