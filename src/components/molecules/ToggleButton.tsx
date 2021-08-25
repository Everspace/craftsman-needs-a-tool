/** @jsxImportSource @emotion/react */
import React, { useState } from "react"
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
  let [state, setState] = useState(on)

  return (
    <Button
      colour={state ? colour : "inactive"}
      onClick={e => {
        setState(!state)
        onToggle(!state)
      }}
      {...props}
    />
  )
}
