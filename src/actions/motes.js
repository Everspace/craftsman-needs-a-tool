import {
  MOTES_REMOVE,
  MOTES_SET,
  MOTES_ADD,
  MOTES_FILL_POOLS,
  MOTES_DRIP,
  MOTES_COMMIT,
  MOTES_RELEASE,
} from "../types/motes"

/**
 * Add motes to the mote pool
 * @param {Number} personal
 * @param {Number} periferal
 */
export const addMotes = (personal = 0, periferal = 0) => ({
  type: MOTES_ADD,
  personal,
  periferal,
})

/**
 * Remove motes from the mote pool
 * @param {Number} personal
 * @param {Number} periferal
 */
export const removeMotes = (personal = 0, periferal = 0) => ({
  type: MOTES_REMOVE,
  personal,
  periferal,
})

/**
 * Replenish motes that happen every round or every hour
 * @param {Number} number default: 5
 */
export const dripMotes = (number = 5) => ({ type: MOTES_DRIP, number })

/**
 * Max pools out. Will ignore
 * @param {Boolean} personal
 * @param {Boolean} periferal
 */
export const fillMotePools = (personal = true, periferal = true) => ({
  type: MOTES_FILL_POOLS,
  personal,
  periferal,
})

/**
 * Make the pools exactly "this"
 * @param {Number} personal
 * @param {Number} periferal
 */
export const setMotes = (personal, periferal) => ({
  type: MOTES_SET,
  personal,
  periferal,
})

/**
 * Add motes to the committed pool
 * @param {String} effect the name of the effect
 * @param {Number} personal
 * @param {Number} periferal
 */
export const commitMotes = (effect, personal = 0, periferal = 0) => ({
  type: MOTES_COMMIT,
  effect,
  personal,
  periferal,
})

/**
 * Remove motes from the committed pool
 * @param {Number} effectID the id of the committed effect
 */
export const releaseMotes = effectID => ({ type: MOTES_RELEASE, effectID })
