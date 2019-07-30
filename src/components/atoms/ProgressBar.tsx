/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import React from "react"
import { grey } from "styles/Colors"

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
  ...props
}) => {
  return (
    <div {...props} css={[containerCSS, grey.grey500.cssClass]}>
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
  roundedCorners?: boolean
}

const barDefToComponent = (
  definition: BarSegmentDefintion,
  key: any,
  maxValue = 100,
) => {
  const { value, text, roundedCorners, className, ...props } = definition

  return (
    <BarSegement
      key={key}
      text={text}
      css={roundedCorners ? roundedCornersStyle : {}}
      percent={(value / maxValue) * 100}
      {...props}
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

  return (
    <div css={[barSegmentStyle, { width: `${percent}%` }]} {...otherProps}>
      {text}
    </div>
  )
}
