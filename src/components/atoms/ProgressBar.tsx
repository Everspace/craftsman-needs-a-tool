import React, { SFC, SFCElement } from "react"
import { css, cx } from "emotion"
import { cssClass } from "styles/Colors"

//
// A shameless copy of bootstrap's progress thing.
//

let containerCSS = css`
  display: flex;
  overflow: hidden;
  height: 1rem;
  font-size: 0.75rem;
  border-radius: 0.25rem;
`

let barCSS = css`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  transition: width 0.6s ease;
`

let roundedCorners = css`
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
`

type booleanString = "false" | "true"

interface BarProps extends Partial<HTMLDivElement> {
  rounded?: booleanString
  percent: number
  text?: string
}

const Bar: SFC<BarProps> = props => {
  const { rounded, percent, text, className, ...otherProps } = props
  return (
    <div
      {...otherProps as object}
      className={cx(barCSS, className)}
      style={{ width: `${percent}%` }}
    >
      {text}
    </div>
  )
}

interface BarDefinition {
  value: number
  text?: string
  className?: string
  props?: object // TODO BETTER TYPING
}

type BarConverter = (bars: BarDefinition[], maxValue?: number) => JSX.Element[]

const barsToElements: BarConverter = (bars, maxValue = 100) => {
  return bars.map((element, index) => {
    const { value, text, className, props } = element

    return (
      <Bar
        {...(props || {}) as object}
        key={index}
        text={text}
        className={cx(className, {
          [roundedCorners]: index === bars.length - 1,
        })}
        percent={(value / maxValue) * 100}
      />
    )
  })
}

interface ProgressBarProps extends HTMLDivElement {
  bars: BarDefinition[]
  max?: number
}

const ProgressBar: SFC<ProgressBarProps> = ({
  bars,
  className,
  max,
  ...otherProps
}) => {
  return (
    <div
      {...otherProps as object}
      className={cx(containerCSS, cssClass.grey500, className)}
    >
      {barsToElements(bars, max)}
    </div>
  )
}

export default ProgressBar
