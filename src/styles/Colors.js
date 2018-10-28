import { mix } from "lib/Color/Functions"
import { xony } from "lib/Style/xony"

const textColor = {
  light: "#F0F0F0",
  dark: "#0F0F0F",
}

const primaryColor = {
  light: "#478145",
  main: "#18541c",
  dark: "#002a00",
}

const secondaryColor = {
  light: "#f28b3b",
  main: "#ba5d05",
  dark: "#843100",
}

const greyTint = primaryColor.main

const greyColor = {
  grey100: mix(greyTint, "#777", 5),
  grey200: mix(greyTint, "#555", 5),
  grey300: mix(greyTint, "#444", 5),
  grey400: mix(greyTint, "#333", 5),
  grey500: mix(greyTint, "#222", 5),
}

export const primary = {
  light: {
    cssClass: xony(textColor.light, primaryColor.light),
    text: textColor.light,
    color: primaryColor.light,
  },
  main: {
    cssClass: xony(textColor.light, primaryColor.main),
    text: textColor.light,
    color: primaryColor.main,
  },
  dark: {
    cssClass: xony(textColor.light, primaryColor.dark),
    text: textColor.light,
    color: primaryColor.dark,
  },
}

export const secondary = {
  light: {
    cssClass: xony(textColor.light, secondaryColor.light),
    text: textColor.light,
    color: secondaryColor.light,
  },
  main: {
    cssClass: xony(textColor.light, secondaryColor.main),
    text: textColor.light,
    color: secondaryColor.main,
  },
  dark: {
    cssClass: xony(textColor.light, secondaryColor.dark),
    text: textColor.light,
    color: secondaryColor.dark,
  },
}

const greys = {
  grey100: {
    cssClass: xony(textColor.dark, greyColor.grey100),
    text: textColor.dark,
    color: greyColor.grey100,
  },
  grey200: {
    cssClass: xony(textColor.light, greyColor.grey200),
    text: textColor.light,
    color: greyColor.grey200,
  },
  grey300: {
    cssClass: xony(textColor.light, greyColor.grey300),
    text: textColor.light,
    color: greyColor.grey300,
  },
  grey400: {
    cssClass: xony(textColor.light, greyColor.grey400),
    text: textColor.light,
    color: greyColor.grey400,
  },
  grey500: {
    cssClass: xony(textColor.light, greyColor.grey500),
    text: textColor.light,
    color: greyColor.grey500,
  },
}

export const grey = {
  ...greys,
  light: greys.grey500,
  main: greys.grey300,
  dark: greys.grey100,
}

// Baseline material error Color
export const errorColor = "#B00020"
export const errorCSS = xony(textColor.light, errorColor)
