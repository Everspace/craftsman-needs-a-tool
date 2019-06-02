import reducer from "reducers/motes"
import { addMotes } from "actions/motes"

let initialMotes = {
  personal: 10,
  personalPool: 20,
  periferal: 20,
  periferalPool: 30,
  drip: 5,
}

describe("mote addition", () => {
  it("adds personal motes", () => {
    expect(reducer(initialMotes, addMotes(7))).toEqual({
      personal: 17,
      personalPool: 20,
      periferal: 20,
      periferalPool: 30,
      drip: 5,
    })
  })

  it("adds periferal motes", () => {
    expect(reducer(initialMotes, addMotes(0, 7))).toEqual({
      personal: 10,
      personalPool: 20,
      periferal: 27,
      periferalPool: 30,
      drip: 5,
    })
  })

  it("adds both at once", () => {
    expect(reducer(initialMotes, addMotes(7, 7))).toEqual({
      personal: 17,
      personalPool: 20,
      periferal: 27,
      periferalPool: 30,
      drip: 5,
    })
  })

  it("adds to the other pool when overflowing", () => {
    expect(reducer(initialMotes, addMotes(11))).toEqual({
      personal: 20,
      personalPool: 20,
      periferal: 21,
      periferalPool: 30,
      drip: 5,
    })

    expect(reducer(initialMotes, addMotes(0, 11))).toEqual({
      personal: 11,
      personalPool: 20,
      periferal: 30,
      periferalPool: 30,
      drip: 5,
    })
  })

  it("wont go over maximums", () => {
    let max = {
      personal: 20,
      personalPool: 20,
      periferal: 30,
      periferalPool: 30,
      drip: 5,
    }

    expect(reducer(initialMotes, addMotes(300))).toEqual(max)
    expect(reducer(initialMotes, addMotes(0, 300))).toEqual(max)
  })
})
