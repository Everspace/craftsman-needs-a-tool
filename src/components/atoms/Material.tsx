/** @jsxImportSource @emotion/react */
import tw from "twin.macro"
import { waiting } from "styles/Shadows"
import { roundedCorners, spaced as spacedStyle } from "styles/Misc"
import { grey } from "styles/Colors"

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

export const Panel = props => (
  <Material css={[grey.grey300.cssClass, tw`m-5 p-10`]} {...props} />
)

export default Material
