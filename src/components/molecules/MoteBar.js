import React from "react"
import CentreText from "components/atoms/CentreText"
import ProgressBar from "components/atoms/ProgressBar"
import styles from "./MoteBar.module.scss"

export default props => {
  let total = props.personal + props.peripheral
  let totalPool = props.personalPool + props.peripheralPool;

  let personalBar = {
    value: props.personal,
    text: props.personal,
    className: styles.personalBar
  }

  let peripheralBar = {
    value: props.peripheral,
    text: props.peripheral,
    className: styles.peripheralBar,
  }

  return (
    <div
      className={`${props.className || ""} MoteBar`}
      key={props.key || "MoteBar"}
    >
      <CentreText key="header" >Motes</CentreText>
      <ProgressBar max={totalPool} bars={[personalBar, peripheralBar]}/>
      {total}/{totalPool}
    </div>
  );
};
