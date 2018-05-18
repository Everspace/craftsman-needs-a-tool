import React from "react"
import { cssClass } from "styles/Colors"
import StatBar from "components/molecules/StatBar";

/**
 * willpower
 * willpowerPool
 */
export default props => {
  let willpowerBar = {
    value: props.willpower,
    text: props.willpower,
    className: cssClass.primary.main,
  }

  return <StatBar
    {...props}
    title="Willpower"
    bars={[willpowerBar]}
    current={props.willpower}
    total={props.willpowerPool}
  />
}
