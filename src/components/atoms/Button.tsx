import React from "react"
import { cx } from "emotion"
import { secondary } from "styles/Colors"
import { interactive } from "styles/Misc"

export const Button: React.SFC<JSXElement<"button">> & Colorable = ({
  className,
  color = secondary,
  ...props
}) => {
  return (
    <button {...props} className={cx(interactive(color as any), className)} />
  )
}
