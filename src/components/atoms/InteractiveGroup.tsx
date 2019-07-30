/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import React from "react"
import { cornerRadius } from "styles/Misc"
import { secondary } from "styles/Colors"
import { waiting } from "styles/Shadows"

interface InteractiveGroupProps {
  seperated?: boolean
}

const interactiveGroupStyle = (
  colorObj: MaterialColor,
  seperated = false,
) => css`
  /* Redo some of the interactive style */
  background-color: transparent;
  border-radius: ${cornerRadius};
  margin: ${cornerRadius};
  padding: 0;

  ${waiting};
  display: inline-flex;

  & > * {
    /* Allow z-index to work */
    position: relative;

    display: flex;

    /* Reset style */
    border-radius: 0;
    box-shadow: none;
    margin: 0;
  }

  & > *:hover {
    /* Push hovered element above siblings */
    z-index: 1;
  }

  /* Replant corners */
  & > *:first-child {
    border-top-left-radius: ${cornerRadius};
    border-bottom-left-radius: ${cornerRadius};
  }

  & > *:not(:first-child):not(:last-child) {
    margin: 0;
    border-radius: 0;
    z-index: 0;
    ${seperated
      ? css`
          border-right: 1px dotted ${colorObj.dark.color};
          border-left: 1px dotted ${colorObj.dark.color};
        `
      : ""};
  }

  & > *:last-child {
    border-top-right-radius: ${cornerRadius};
    border-bottom-right-radius: ${cornerRadius};
  }
`

export const InteractiveGroup: React.FC<
  InteractiveGroupProps & Colorable & HasStyle
> = ({ colorStyle = secondary, seperated = false, ...props }) => (
  <div css={interactiveGroupStyle(colorStyle, seperated)} {...props} />
)
