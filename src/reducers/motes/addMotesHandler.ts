import { AnyAction } from "redux"

export const addMotesHandler = (state, action: AnyAction) => {
  let { personal, periferal } = action
  let { personalPool, periferalPool } = state
  let personalResult = state.personal
  let periferalResult = state.periferal

  personalResult += personal
  periferalResult += periferal
  // Handle added overflows
  if (personalResult > personalPool) {
    periferalResult += personalResult - personalPool
  }
  if (periferalResult > periferalPool) {
    personalResult += periferalResult - periferalPool
  }
  // Cap them
  if (personalResult > personalPool) {
    personalResult = personalPool
  }
  if (periferalResult > periferalPool) {
    periferalResult = periferalPool
  }

  return {
    ...state,
    personal: personalResult,
    periferal: periferalResult,
  }
}
