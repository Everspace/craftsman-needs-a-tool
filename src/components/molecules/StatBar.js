import React from "react"
import ProgressBar from "components/atoms/ProgressBar"
import { css, cx } from "emotion"

let containerStyle = css`
  margin: 0.5rem 0;
`

let barStyle = css`
  margin: 0.25rem 0;
`

const StatBar = props => {
  return (
    <div
      className={cx(containerStyle, props.className)}
      key={props.title}
      style={props.style}
    >
      <div>{props.title}</div>
      <ProgressBar
        key="bar"
        max={props.total}
        bars={props.bars}
        className={barStyle}
      />
      {props.current}/{props.total}
    </div>
  )
}

export default StatBar
