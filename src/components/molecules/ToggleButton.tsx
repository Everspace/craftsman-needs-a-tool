/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react"
import React, { useState, useEffect } from "react"
import Button, { ButtonProps } from "components/atoms/Button"
import { grey, secondary } from "styles/Colors"

interface ToggleButtonProps extends ButtonProps {
  on?: boolean
  onToggle: (boolean) => void
}

export const ToggleButton = ({
  on = false,
  onToggle,
  colour = "secondary",
  onClick,
  ...props
}: ToggleButtonProps) => {
  let [state, setState] = useState(on)

  useEffect(() => {
    onToggle(state)
  }, [onToggle, state])

  return (
    <Button
      colour={state ? colour : "inactive"}
      onClick={e => {
        setState(!state)
        onClick && onClick(e)
      }}
      {...props}
    />
  )
}
