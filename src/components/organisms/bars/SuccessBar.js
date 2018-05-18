import React from "react"
import { cssClass } from "styles/Colors"
import StatBar from "components/molecules/StatBar";

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
    rounded: true,
    style: {zIndex: 1},
  }

  let remainingBar = {
    value: remaining,
    text: remaining,
    className: cssClass.grey500,
  }

  return <StatBar
    {...props}
    title="Successes"
    bars={[usedBar, availableBar, remainingBar]}
    current={props.total}
    total={props.target}
  />
}
