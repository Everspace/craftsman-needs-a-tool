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
        marginBottom: 20,
      },
    ]}
  >
    <h1>Craftsman Needs a Tool</h1>
    <sub>1.0.0</sub>
  </Material>
)
