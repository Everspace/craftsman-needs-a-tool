import React from 'react'

export const shadowed = (E, level) => {
  let shadow = ""
  switch (level) {
    case 0:
    default:
      shadow = "shadow-none"
      break;
    case 1:
      shadow = "shadow-sm"
      break;
    case 2:
      shadow = "shadow"
      break;
    case 3:
      shadow = "shadow-lg"
      break;
  }

  return props => <E {...props} className={`${shadow} ${props.className}`} />
}

export const ShadowedDiv = shadowed("div", 2)
