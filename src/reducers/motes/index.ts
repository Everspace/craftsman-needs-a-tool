import { addMotes } from "actions/motes"
import { AnyAction } from "redux"
import { addMotesHandler } from "reducers/motes/addMotesHandler"

const baseState = {
  personal: 0,
  periferal: 0,
  personalPool: 0,
  periferalPool: 0,
  drip: 5,
}

export default function motes(state = baseState, action: AnyAction) {
  switch (action.type) {
    case "MOTES_ADD":
      return addMotesHandler(state, action)
    case "MOTES_DRIP":
      return addMotesHandler(state, addMotes(0, state.drip))

    case "MOTES_FILL_POOLS":
      return {
        ...state,
        personal: state.personalPool,
        periferal: state.periferalPool,
      }

    case "MOTES_SET":
      return { ...state, ...baseState }

    default:
      return { ...state }
  }
}
