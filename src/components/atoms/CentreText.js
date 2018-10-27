import React from "react"
import { cx } from "emotion"

const CenterText = props => (
  <div {...props} className={cx(`text-center`, props.className)} />
)

export default CenterText
