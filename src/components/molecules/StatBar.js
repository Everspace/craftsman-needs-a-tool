import React from "react"
import ProgressBar from "components/atoms/ProgressBar"
import classnames from "lib/Style/classnames"

export default props => {
  return (
    <div
      className={classnames(props.className)}
      key={props.title}
      style={{margin: "0.5rem 0", ...props.style}}
    >
      <div style={{margin: "0.25rem 0"}}>{props.title}</div>
      <ProgressBar
        style={{margin: "0.25rem 0"}}
        key="bar"
        max={props.total}
        bars={props.bars}
      />
      {props.current}/{props.total}
    </div>
  )
}
