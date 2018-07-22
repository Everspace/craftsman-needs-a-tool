import React from "react"
import { css } from "emotion";
import classnames from "lib/Style/classnames";
import Button from "../atoms/Button";
import { interactiveGroup, interactive } from "styles/Misc";

let style = css`
`

let numberStyle = css`
  width: 2.5rem;
  appearance: textfield;
  text-align: center;
  height: 100%;
  min-height: 100%;
  position: relative;

  /* TODO: Figure out why +0.5rem fixes problem */
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
`

export default class Incrementer extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className={classnames(interactiveGroup, style)}>
        <Button>-</Button>
        <input className={classnames(interactive, numberStyle)} type="number" placeholder={this.props.value}/>
        <Button>+</Button>
      </div>
    )
  }
}