import React from "react"
import CentreText from "components/atoms/CentreText"
import ProgressBar from "components/atoms/ProgressBar";

export default props => {
  let used = props.total - props.available;
  let remaining = props.target - props.total;

  let usedBar = {
    value: used,
    text: used,
    style: {
      backgroundColor: "blue",
      color: "white",
    }
  }

  let availableBar = {
    value: props.available,
    text: props.available,
    style: {
      backgroundColor: "green",
      color: "white",
    }
  }

  let remainingBar = {
    value: remaining,
    text: remaining,
    style: {
      backgroundColor: "black",
      color: "white",
    }
  }

  return (
    <div className={`${props.className || ''} SuccessBar`} key={props.key}>
      <CentreText>Successes</CentreText>
      <ProgressBar max={props.target} bars={[usedBar, availableBar, remainingBar]}/>
      <div>{props.total}/{props.target}</div>
    </div>
  );
};
