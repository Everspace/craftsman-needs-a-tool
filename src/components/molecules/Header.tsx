/** @jsx jsx */
import { jsx } from "@emotion/core"
import { primary } from "styles/Colors"
import Material from "components/atoms/Material"

export const Header: React.FC = props => (
  <Material
    css={[
      primary.main.cssClass,
      {
        padding: 10,
        zIndex: 1,
      },
    ]}
    {...props}
  />
)
