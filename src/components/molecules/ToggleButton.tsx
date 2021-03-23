/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react"
import React, { useState, useEffect } from "react"
import { Button, ButtonProps } from "components/atoms/Button"
import { grey, secondary } from "styles/Colors"

interface ToggleButtonProps extends ButtonProps {
  on?: boolean
  onToggle: (boolean) => void
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  on = false,
  onToggle,
  colorStyle = secondary,
  onClick,
  ...props
}) => {
  let [state, setState] = useState(on)

  useEffect(() => {
    onToggle(state)
  }, [onToggle, state])

  return (
    <Button
      css={state ? colorStyle.main.cssClass : grey.main.cssClass}
      onClick={e => {
        setState(!state)
        onClick && onClick(e)
      }}
      {...props}
    />
  )
}
