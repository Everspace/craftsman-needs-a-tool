/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { waiting } from "styles/Shadows"
import { roundedCorners, spaced as spacedStyle } from "styles/Misc"

interface MaterialProps {
  rounded?: boolean
  spaced?: boolean
}

const Material: React.FC<MaterialProps> = props => {
  const { rounded, spaced, ...otherProps } = props

  return (
    <div
      css={[waiting, rounded ? roundedCorners : {}, spaced ? spacedStyle : {}]}
      {...otherProps}
    />
  )
}

export default Material
