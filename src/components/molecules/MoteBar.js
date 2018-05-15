import React from "react"
import CentreText from "components/atoms/CentreText"
import ProgressBar from "components/atoms/ProgressBar"
import { cssClass } from "../../styles/Colors";

export default props => {
  let total = props.personal + props.peripheral
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
