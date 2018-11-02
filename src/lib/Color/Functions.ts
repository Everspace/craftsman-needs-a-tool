import { hexToColor, colorToHex } from "./Convert"

/**
 * Functions for manipulating Color
 */
let mixFormula = (value1: number, value2: number, weight = 50) => {
  // Thank you Jed Foster for the base formula and general approach
  // https://gist.github.com/jedfoster/7939513
  let difference = value1 - value2
  difference *= weight / 100.0
  return Math.floor(value2 + difference)
}

/**
 * Combines two hexes. The target is mixed ONTO the base.
 *
 * @param target Color that is blended in
 * @param base   Color that is blended onto
 * @param weight Percentage as intiger from 0~100
 */
export const mix = function(target: string, base: string, weight = 50) {
  if (weight < 0 || weight > 100) {
    throw Error("Weight can only be between 0 and 100")
  }

  let c1 = hexToColor(target)
  let c2 = hexToColor(base)

  let result = ["r", "g", "b"].reduce(
    (memory, color) => {
      memory[color] = mixFormula(c1[color], c2[color], weight)
      return memory
    },
    { r: 0, g: 0, b: 0 },
  )

  return colorToHex(result)
}
