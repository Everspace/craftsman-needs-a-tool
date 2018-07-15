import { MOTES_ADD, MOTES_DRIP, MOTES_FILL_POOLS } from "types/motes"
import addMotesHandler from "./addMotesHandler"
import { addMotes } from "actions/motes";

const baseState = {
  personal: 0,
  periferal: 0,
  personalPool: 0,
  periferalPool: 0,
  drip: 5,
}

export default function motes(state = baseState, action) {
  switch (action.type) {
    case MOTES_ADD:
      return addMotesHandler(state, action)

    case MOTES_DRIP:
      return addMotesHandler(state, addMotes(0, state.drip))

    case MOTES_FILL_POOLS:
      return {
        ...state,
        personal: state.personalPool,
        periferal: state.periferalPool,
      }

    case undefined:
      return {...state, ...baseState}

    default:
      return {...state}
  }
}
