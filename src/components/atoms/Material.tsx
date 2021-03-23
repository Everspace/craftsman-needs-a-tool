/** @jsxImportSource @emotion/react */
import "twin.macro"
import { waiting } from "styles/Shadows"
import { roundedCorners, spaced as spacedStyle } from "styles/Misc"

interface MaterialProps extends React.ComponentPropsWithRef<"div">, Colorable {
  rounded?: boolean
  spaced?: boolean
}

const Material = (props: MaterialProps) => {
  const { rounded, spaced, ...otherProps } = props

  return (
    <div
      css={[waiting, rounded ? roundedCorners : {}, spaced ? spacedStyle : {}]}
      {...otherProps}
    />
  )
}

export default Material
