import React from "react"
import { cx } from "emotion"
import { secondary } from "styles/Colors"
import { interactive } from "styles/Misc"

interface ButtonProps extends ButtonComponent {
  color?: any
}

export const Button: React.SFC<ButtonProps> = ({
  className,
  color = secondary,
  ...props
}) => {
  return (
    <button {...props} className={cx(interactive(color as any), className)} />
  )
}
