import { mix } from "lib/Color/Functions"
import { xony } from "lib/Style/xony";

export const textColor = {
  light: "#F0F0F0",
  dark:  "#0F0F0F",
}

export const primaryColor = {
  light: "#478145",
  main:  "#18541c",
  dark:  "#002a00",
}

export const primaryCSS = {
  light: xony(textColor.light, primaryColor.light),
  main:  xony(textColor.light, primaryColor.main),
  dark:  xony(textColor.light, primaryColor.dark),
}

export const secondaryColor = {
  light: "#f28b3b",
  main:  "#ba5d05",
  dark:  "#843100",
}

export const secondaryCSS = {
  light: xony(textColor.light, secondaryColor.light),
  main:  xony(textColor.light, secondaryColor.main),
  dark:  xony(textColor.light, secondaryColor.dark),
}

const greyTint = primaryColor.main

export const greyColor = {
  grey100: mix(greyTint, "#777", 5),
  grey200: mix(greyTint, "#555", 5),
  grey300: mix(greyTint, "#444", 5),
  grey400: mix(greyTint, "#333", 5),
  grey500: mix(greyTint, "#222", 5),
}

export const greyCSS = {
  grey100: xony(textColor.dark,  greyColor.grey100),
  grey200: xony(textColor.dark,  greyColor.grey200),
  grey300: xony(textColor.light, greyColor.grey300),
  grey400: xony(textColor.light, greyColor.grey400),
  grey500: xony(textColor.light, greyColor.grey500),
}

// Baseline material error Color
export const errorColor = "#B00020"
export const errorCSS   = xony(textColor.light, errorColor)

export const cssClass = {
  primary:   primaryCSS,
  secondary: secondaryCSS,
  ...greyCSS,
  error:     errorCSS,
}

export const color = {
  text:      textColor,
  primary:   primaryColor,
  secondary: secondaryColor,
  grey:      greyColor,
  error:     errorColor,
}

export default { color, cssClass }
