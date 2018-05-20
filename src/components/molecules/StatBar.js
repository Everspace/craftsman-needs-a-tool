import React from "react"
import ProgressBar from "components/atoms/ProgressBar"
import classnames from "lib/Style/classnames"
import { css } from "emotion";

let containerStyle = css`
  margin: 0.5rem 0;
`

let barStyle = css`
  margin: 0.25rem 0;
`

export default props => {
  return (
    <div
      className={classnames(containerStyle, props.className)}
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
