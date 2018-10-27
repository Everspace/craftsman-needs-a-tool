import React from "react"
import Material from "components/atoms/Material"
import { cssClass } from "styles/Colors"
import MoteBar from "components/organisms/bars/MoteBar"
import WillpowerBar from "components/organisms/bars/WillpowerBar"
import SuccessBar from "components/organisms/bars/SuccessBar"

const StatTracker = props => {
  return (
    <Material rounded spaced className={cssClass.grey400}>
      <MoteBar
        personal={props.personal}
        personalPool={props.personalPool}
        peripheral={props.peripheral}
        peripheralPool={props.peripheralPool}
      />

      <WillpowerBar
        willpower={props.willpower}
        willpowerPool={props.willpowerPool}
      />

      <SuccessBar
        total={props.successesTotal}
        available={props.successesUsable}
        target={props.successesTarget}
      />
      {props.children ? <div>{props.children}</div> : null}
    </Material>
  )
}

export default StatTracker
