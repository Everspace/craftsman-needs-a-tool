import React from "react"
import { cssClass } from "styles/Colors"
import StatBar from "components/molecules/StatBar";

export default props => {
  let available = props.personal + props.peripheral
  let totalPool = props.personalPool + props.peripheralPool;

  let personalBar = {
    value: props.personal,
    text: props.personal,
    className: cssClass.primary.main,
  }

  let peripheralBar = {
    value: props.peripheral,
    text: props.peripheral,
    className: cssClass.primary.light,
  }

  return <StatBar
    {...props}
    title="Motes"
    bars={[personalBar, peripheralBar]}
    current={available}
    total={totalPool}
  />
}
