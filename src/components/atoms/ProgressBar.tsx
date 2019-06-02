import React from "react"
import { css, cx } from "emotion"
import { grey } from "styles/Colors"
import { acceptStyle } from "lib/Style"

interface ProgressBarProps extends HasStyle {
  bars: BarSegmentDefintion[]
  max?: number
}

/**
 * A shameless copy of bootstrap's progress thing.
 */
export const ProgressBar: React.FC<ProgressBarProps> = ({
  bars,
  max = 100,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cx(containerCSS, grey.grey500.cssClass, className)}
    >
      {bars.map((definition, index) =>
        barDefToComponent(definition, index, max),
      )}
    </div>
  )
}

let containerCSS = css`
  display: flex;
  overflow: hidden;
  height: 1em;
  font-size: 0.75em;
  border-radius: 0.25em;
`

let roundedCornersStyle = css`
  border-top-right-radius: 0.25em;
  border-bottom-right-radius: 0.25em;
`

export interface BarSegmentDefintion extends HasStyle {
  value: number
  text?: string
  roundedCorners?: booleanString
}

const barDefToComponent = (
  definition: BarSegmentDefintion,
  key: any,
  maxValue = 100,
) => {
  const { value, text, roundedCorners, className, ...props } = definition

  return (
    <BarSegement
      {...props}
      key={key}
      text={text}
      className={cx(className, {
        [roundedCornersStyle]: roundedCorners,
      })}
      percent={(value / maxValue) * 100}
    />
  )
}

let barSegmentStyle = css`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  transition: width 0.6s ease;
`

export interface BarSegementProps extends HasStyle {
  percent: number
  text?: string
}

const BarSegement: React.FC<BarSegementProps> = props => {
  const { percent, text, ...otherProps } = props
  const styleResult = acceptStyle(props, {
    cx: barSegmentStyle,
    style: { width: `${percent}%` },
  })

  return (
    <div {...otherProps} {...styleResult}>
      {text}
    </div>
  )
}
