/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useState, useEffect } from "react"
import { Button } from "components/atoms/Button"
import { grey, secondary } from "styles/Colors"

type ToggleButtonProps = {
  on?: boolean
  onToggle: (boolean) => void
}

export const ToggleButton: React.FC<ToggleButtonProps> & typeof Button = ({
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
