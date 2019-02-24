import { makeActionCreator } from "../../lib/redux/actions"
import {
  ADD_SUCCESSES,
  SET_SUCCESSES,
  USE_SUCCESSES,
  REMOVE_SUCCESSES,
} from "types/successes"

export const addSuccesses = makeActionCreator(ADD_SUCCESSES, "number")
export const removeSuccesses = makeActionCreator(REMOVE_SUCCESSES, "number")

export const setSuccesses = (current, used = 0) => ({
  type: SET_SUCCESSES,
  current,
  used,
})
export const useSuccesses = makeActionCreator(USE_SUCCESSES, "number")
