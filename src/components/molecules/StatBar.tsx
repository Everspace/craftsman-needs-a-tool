/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { ProgressBar } from "components/atoms/ProgressBar"

let containerStyle = css`
  margin: 0.5rem 0;
`

let barStyle = css`
  margin: 0.25rem 0;
`

const StatBar = props => {
  const { title, total, bars, current, ...otherProps } = props
  return (
    <div {...otherProps} css={containerStyle} key={title}>
      <div>{title}</div>
      <ProgressBar key="bar" max={total} bars={bars} css={barStyle} />
      {current}/{total}
    </div>
  )
}

export default StatBar
