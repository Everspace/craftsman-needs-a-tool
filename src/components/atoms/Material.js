import React from "react"
import { waiting } from "styles/Shadows"
import classnames from "lib/Style/classnames"
import { roundedCorners } from "styles/Misc"

export default props => {
  let classes = [waiting, props.className]

  if (props.rounded) {
    classes.push(roundedCorners)
  }

  return <div
    {...props}
    className={classnames(...classes)}
  />
}
