import React from 'react';
import { Progress } from 'reactstrap';
import { CentreText } from './Text.js';
import './SuccessBar.css';

export const ValueBar = props => <Progress bar {...props}>{props.value}</Progress>

export const SuccessBar = props => {
  let used = props.total - props.available;
  let remaining = props.target - props.total;

  return (
    <div className={`${props.className || ''} SuccessBar`} key={props.key}>
      <CentreText>Successes</CentreText>
      <Progress multi max={props.target}>
        <ValueBar value={used} />
        <ValueBar
          animated
          color="success"
          className=""
          value={props.available}
        />
        <ValueBar color="dark" value={remaining} />
      </Progress>
      <div>/{props.target}</div>
    </div>
  );
};

export const MoteBar = props => {
  let totalPool = props.personalPool + props.peripheralPool;
  let total = props.personal + props.peripheral;
  return (
    <div className={`${props.className || ''} MoteBar`} key={props.key}>
      <CentreText>Motes</CentreText>
      <Progress color="success" value={total} max={totalPool}>
        {total}
      </Progress>
      <Progress multi max={totalPool}>
        <ValueBar value={props.personal} />
        <ValueBar
          value={props.peripheral}
          color="warning"
          className="text-dark"
        />
      </Progress>
    </div>
  );
};
