import React from "react"
import CentreText from "components/atoms/CentreText"
import ProgressBar from "components/atoms/ProgressBar"
import styles from './SuccessBar.module.scss'

export default props => {
  let used = props.total - props.available
  let remaining = props.target - props.total

  let usedBar = {
    value: used,
    text: used,
    className: styles.usedBar,
  }

  let availableBar = {
    value: props.available,
    text: props.available,
    className: styles.availableBar
  }

  let remainingBar = {
    value: remaining,
    text: remaining,
    className: styles.remainingBar,
  }

  return (
    <div className={`${props.className || ''} SuccessBar`} key={props.key}>
      <CentreText>Successes</CentreText>
      <ProgressBar max={props.target} bars={[usedBar, availableBar, remainingBar]}/>
      <div>{props.total}/{props.target}</div>
    </div>
  )
}
