/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { cornerRadius } from "styles/Misc"
import { grey, secondary } from "styles/Colors"

/*
// & > *:not(:first-child):not(:last-child) {
//   margin: 0;
//   border-radius: 0;
//   z-index: 0;
//   ${seperated
//     ? css`
//         border-right: 1px dotted ${colorObj.dark.color};
//         border-left: 1px dotted ${colorObj.dark.color};
//       `
//     : ""};
// }
*/

type InteractiveGroupProps = {
  activeColor?: MaterialColor
  inactiveColor?: MaterialColor
  bordered?: boolean
  seperated?: boolean
}

export const InteractiveGroup: React.FC<InteractiveGroupProps> = ({
  activeColor = secondary,
  inactiveColor = grey,
  bordered = false,
  seperated = false,
  ...props
}) => {
  return (
    <div
      css={[
        {
          backgroundColor: "transparent",
          display: "inline-flex",
          padding: 0,
          borderRadius: cornerRadius,
          margin: cornerRadius,
          "input, button": {
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

            ":not(:first-child):not(:last-child)": [
              {
                zIndex: 0,
              },
              seperated
                ? {
                    borderRight: `1px dotted ${activeColor.dark.color}`,
                    borderLeft: `1px dotted ${activeColor.dark.color}`,
                  }
                : {},
            ],
          },
        },
        bordered
          ? {
              border: `1px solid ${activeColor.main.color}`,
            }
          : {},
      ]}
      {...props}
    />
  )
}
