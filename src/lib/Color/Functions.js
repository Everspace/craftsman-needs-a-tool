import { hexToColor, colorToHex } from "./Convert"

/**
 * Functions for manipulating Color
 */

// Thank you Jed Foster for the base formula and general approach
// https://gist.github.com/jedfoster/7939513

let mixFormula = (value1, value2, weight) => {
  let difference = value1 - value2
  difference *= weight / 100.0
  return Math.floor(value2 + difference)
}

/**
 * Combines two hexes. The target is mixed ONTO the base.
 *
 * @param {String} target Color that is blended in
 * @param {String} base   Color that is blended onto
 * @param {Number} weight Percentage as intiger from 0~100
 */
export const mix = function(target, base, weight = 50) {

  let c1 = hexToColor(target)
  let c2 = hexToColor(base)

  let result = ["r", "g", "b"].reduce((memory, color) => {
      memory[color] = mixFormula(c1[color], c2[color], weight)
      return memory
    },
    {r: 0, g: 0, b: 0}
  )

  return colorToHex(result)
}
