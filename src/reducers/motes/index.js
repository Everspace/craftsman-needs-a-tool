
const baseState = {
  commitedMotes: [],

  motes: {
    personal: 0,
    periferal: 0,
  }
}

export default function motes(state, action) {
  switch (action.type) {
    case undefined:
      return {...state, ...baseState}

    default:
      return {...state}
  }
}
