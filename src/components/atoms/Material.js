import React from "react"
import { waiting } from "styles/Shadows"
import classnames from "lib/Style/classnames"
import { roundedCorners, spaced as spacedStyle } from "styles/Misc"

export default props => {
  let classes = [waiting, props.className]
  const { rounded, spaced, ...otherProps } = props

  if (rounded) {
    classes.push(roundedCorners)
  }

  if (spaced) {
    classes.push(spacedStyle)
  }

  return <div {...otherProps} className={classnames(...classes)} />
}
