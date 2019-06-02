import React from "react"
import { waiting } from "styles/Shadows"
import { roundedCorners, spaced as spacedStyle } from "styles/Misc"
import { cx } from "emotion"

interface MaterialProps extends HasStyle {
  rounded?: boolean
  spaced?: boolean
}

const Material: React.FC<MaterialProps> = props => {
  const { rounded, spaced, className, ...otherProps } = props

  return (
    <div
      {...otherProps}
      className={cx(waiting, className, {
        [roundedCorners]: rounded,
        [spacedStyle]: spaced,
      })}
    />
  )
}

export default Material
