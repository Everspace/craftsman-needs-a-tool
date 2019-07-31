/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import React, { useMemo } from "react"
import { cornerRadius } from "styles/Misc"
import { grey, secondary } from "styles/Colors"

type InteractiveGroupProps = {
  activeColor?: MaterialColor
  inactiveColor?: MaterialColor
  bordered?: boolean
  seperated?: boolean
}

const middleChildSelector = ":not(:first-child):not(:last-child)"
const childrenTypes = ["input", "button"]
const childrenSelector = "& > " + childrenTypes.join(", & >")

const baseCss = css({
  backgroundColor: "transparent",
  display: "inline-flex",
  padding: 0,
  borderRadius: cornerRadius,
  margin: cornerRadius,
  [childrenSelector]: {
    display: "flex",
    borderRadius: 0,
    border: "none",

    ":first-child": {
      borderTopLeftRadius: cornerRadius,
      borderBottomLeftRadius: cornerRadius,
    },

    ":last-child": {
      borderTopRightRadius: cornerRadius,
      borderBottomRightRadius: cornerRadius,
    },

    [middleChildSelector]: {
      zIndex: 0, // For fixing a dropshadow thing
    },
  },
})

export const InteractiveGroup: React.FC<InteractiveGroupProps> = ({
  activeColor = secondary,
  inactiveColor = grey,
  bordered = false,
  seperated = false,
  ...props
}) => {
  const seperatedStyle = useMemo(
    () =>
      seperated
        ? css({
            [childrenSelector]: {
              [middleChildSelector]: {
                borderRight: `1px dotted ${activeColor.dark.color}`,
                borderLeft: `1px dotted ${activeColor.dark.color}`,
              },
            },
          })
        : null,
    [seperated, activeColor],
  )

  const borderStyle = useMemo(
    () =>
      bordered
        ? css({
            border: `1px solid ${activeColor.main.color}`,
          })
        : null,
    [bordered, activeColor],
  )

  return <div css={[baseCss, seperatedStyle, borderStyle]} {...props} />
}
