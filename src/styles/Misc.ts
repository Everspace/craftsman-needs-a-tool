import { resting, waiting, hovering } from "./Shadows"
import { secondary } from "./Colors"
import { css } from "@emotion/react"

export const cornerRadius = "0.25em"
export const roundedCorners = css({
  borderRadius: cornerRadius,
})

export const spaced = css({
  padding: "1em",
  margin: "1em",
})

export const interactive = (colorObj = secondary) =>
  css([
    {
      background: "none",
      border: "none",
      padding: `${cornerRadius} 0.5em`,
      fontSize: "1.15em",
      fontWeight: 900,
    },
    resting,
    colorObj.main.cssClass,
    roundedCorners,
    {
      transiton: "0.25s all ease-in-out",
      "&:focus": {
        transition: "none",
        outlineColor: colorObj.light.color,
        outlineOffset: `-${cornerRadius}`,
        outlineWidth: "0.15",
      },
      "::placeholder": {
        color: colorObj.main.text,
        opacity: 1, // Firefox fix
      },
      "&:hover": [waiting, colorObj.dark.cssClass],
      "&:active": [hovering, colorObj.dark.cssClass],
    },
  ])
