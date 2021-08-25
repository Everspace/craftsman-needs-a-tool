/** @jsxImportSource @emotion/react */
import Button, { ButtonProps } from "components/atoms/Button"

interface ToggleButtonProps extends ButtonProps {
  on?: boolean
  onToggle: (boolean) => void
}

export const ToggleButton = ({
  on = false,
  onToggle,
  colour = "secondary",
  ...props
}: ToggleButtonProps) => {
  return (
    <Button
      colour={on ? colour : "inactive"}
      onClick={e => {
        onToggle(!on)
      }}
      {...props}
    />
  )
}
