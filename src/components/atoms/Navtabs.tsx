/** @jsxImportSource @emotion/react */
import "twin.macro"
import { Interpolation, css } from "@emotion/react"
import { secondary } from "styles/Colors"

type TabNavBarProps = {} & Colorable

export const TabNavBar: React.FC<TabNavBarProps> = ({
  colorStyle = secondary,
  ...props
}) => {
  const hoverStyle: Interpolation<{}> = {
    background: colorStyle.light.color,
  }

  const linkStyle: Interpolation<{}> = {
    display: "box",
    height: "3em",
    padding: "1em",
    minWidth: "75px",
    color: "white",
    textDecoration: "none",

    ":hover": hoverStyle,

    "&.active": {
      backgroundColor: colorStyle.main.color,
      ":hover": hoverStyle,
    },
  }

  const navStyle = css({
    display: "flex",
    backgroundColor: colorStyle.dark.color,
    borderBottom: `4px solid ${colorStyle.main.color}`,
    "& a": linkStyle,
  })

  return <nav css={navStyle} {...props} />
}

export default TabNavBar
