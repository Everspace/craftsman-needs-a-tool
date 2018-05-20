import React from "react"
import { waiting } from "styles/Shadows"
import classnames from "lib/Style/classnames"
import { roundedCorners, spaced } from "styles/Misc"

export default props => {
  let classes = [waiting, props.className]

  if (props.rounded) {
    classes.push(roundedCorners)
  }

  if (props.spaced) {
    classes.push(spaced)
  }

  return <div
    {...props}
    className={classnames(...classes)}
  />
}
