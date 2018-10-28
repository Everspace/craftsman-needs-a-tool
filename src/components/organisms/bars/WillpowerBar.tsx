import React from "react"
import { primary } from "styles/Colors"
import StatBar from "components/molecules/StatBar"
import { BarSegmentDefintion } from "components/atoms/ProgressBar"

/**
 * willpower
 * willpowerPool
 */
export const WillpowerBar = props => {
  const willpowerBar: BarSegmentDefintion = {
    value: props.willpower,
    text: props.willpower,
    roundedCorners: "true",
    className: primary.main.cssClass,
  }

  return (
    <StatBar
      {...props}
      title="Willpower"
      bars={[willpowerBar]}
      current={props.willpower}
      total={props.willpowerPool}
    />
  )
}
