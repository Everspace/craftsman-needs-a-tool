import React from "react"
import CentreText from "components/atoms/CentreText"
import ProgressBar from "components/atoms/ProgressBar"
import { cssClass } from "styles/Colors"

export default props => {
  let used = props.total - props.available
  let remaining = props.target - props.total

  let usedBar = {
    value: used,
    text: used,
    className: cssClass.primary.main,
  }

  let availableBar = {
    value: props.available,
    text: props.available,
    className: cssClass.primary.light,
    style: {
      borderTopRightRadius: "0.25rem",
      borderBottomRightRadius: "0.25rem",
      zIndex: 1,
    }
  }

  let remainingBar = {
    value: remaining,
    text: remaining,
    className: cssClass.grey500,
  }

  return (
    <div className={`${props.className || ''}`} key={props.key}>
      <CentreText>Successes</CentreText>
      <ProgressBar
        className={cssClass.grey500}
        max={props.target}
        bars={[usedBar, availableBar, remainingBar]}
      />
      <div>{props.total}/{props.target}</div>
    </div>
  )
}
