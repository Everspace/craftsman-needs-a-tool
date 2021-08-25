/** @jsxImportSource @emotion/react */
import tw, { css } from "twin.macro"
import Material, { Panel } from "components/atoms/Material"
import { grey } from "styles/Colors"

export const spacing = css({
  padding: 10,
  margin: 5,
})

export const ButtonBlock: React.FC<{ label?: string }> = ({
  label,
  children,
  ...props
}) => (
  <Material
    css={[
      grey.grey300.cssClass,
      {
        display: "inline-block",
      },
      spacing,
    ]}
    {...props}
  >
    {label ? label + ":" : null} {children}
  </Material>
)
export const InnerBlock = props => (
  <div css={[grey.grey400.cssClass, spacing]} {...props} />
)

export type ButtonHolderPanelProps = { label?: String; children }
export const ButtonHolderPanel: React.FC<ButtonHolderPanelProps> = ({
  children,
  ...props
}) => (
  <Panel {...props} css={tw`pt-2.5 pb-5`}>
    {children}
  </Panel>
)
export const Label = ({ label }: { label: string }) => (
  <h2 css={spacing}>{label}</h2>
)
