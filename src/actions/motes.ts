/**
 * Add motes to the mote pool
 */
export const addMotes = (personal = 0, periferal = 0) => ({
  type: "MOTES_ADD",
  personal,
  periferal,
})

/**
 * Remove motes from the mote pool
 */
export const removeMotes = (personal = 0, periferal = 0) => ({
  type: "MOTES_REMOVE",
  personal,
  periferal,
})

/**
 * Replenish motes that happen every round or every hour
 * @param number default is 5
 */
export const dripMotes = (number = 5) => ({ type: "MOTES_DRIP", number })

/**
 * Max pools out. Will ignore
 * @param personal
 * @param periferal
 */
export const fillMotePools = (personal = true, periferal = true) => ({
  type: "MOTES_FILL_POOLS",
  personal,
  periferal,
})

/**
 * Make the pools exactly "this"
 */
export const setMotes = (personal, periferal) => ({
  type: "MOTES_SET",
  personal,
  periferal,
})

/**
 * Add motes to the committed pool
 * @param effectID the name of the effect
 * @param personal
 * @param periferal
 */
export const commitMotes = (effectID, personal = 0, periferal = 0) => ({
  type: "MOTES_COMMIT",
  effectID,
  personal,
  periferal,
})

/**
 * Remove motes from the committed pool
 * @param {Number} effectID the id of the committed effect
 */
export const releaseMotes = effectID => ({ type: "MOTES_RELEASE", effectID })
