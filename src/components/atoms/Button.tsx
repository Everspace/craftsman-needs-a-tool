import React from "react"
import { cx } from "emotion"
import { interactive } from "styles/Misc"
import { secondary } from "styles/Colors";

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & Colorable> = ({
  className,
  colorStyle = secondary,
  style,
  ...props
}) => {
  return (
    <button {...props} className={cx(interactive(colorStyle), className)} />
  )
}
