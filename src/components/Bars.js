import React from 'react';
import { CentreText } from './Text.js';
import './SuccessBar.css';
import ProgressBar from './ProgressBar.js';

export const SuccessBar = props => {
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

export const MoteBar = props => {
  let total = props.personal + props.peripheral
  let totalPool = props.personalPool + props.peripheralPool;

  let personalBar = {
    value: props.personal,
    text: props.personal,
    style: {
      backgroundColor: "blue",
      color: "white",
    },
  }

  let peripheralBar = {
    value: props.peripheral,
    text: props.peripheral,
    style: {
      backgroundColor: "yellow",
      color: "black",
    },
  }

  return (
    <div className={`${props.className || ''} MoteBar`} key={props.key || "MoteBar"}>
      <CentreText key="header" >Motes</CentreText>
      <ProgressBar max={totalPool} bars={[personalBar, peripheralBar]}/>
      {total}/{totalPool}
    </div>
  );
};
