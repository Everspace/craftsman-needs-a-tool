import { mix } from "./Functions"

it("doesn't error when no percent is given", () => {
  expect(mix("#000", "#FFF"))
})

it("error when you give it weird shit", () => {
  expect(() => mix("#000", "#honk")).toThrow()
  expect(() => mix("#000", () => "#000")).toThrow()
  expect(() => mix(null, "#000")).toThrow()
})

it("should give full hashes despite it's input", () => {
  expect(mix("#000", "000")).toBe("#000000")
})

it('accepts hashed and unhashed input', () => {
  let unhashed = {
    short: [
      "000",
      "222",
      "486",
      "F2F",
      "f2F",
    ],
    long: [
      "000000",
      "222222",
      "456456",
      "FF6666",
      "b4Dc0f",
    ]
  }

  let hashed = {
    short: [
      "#000",
      "#222",
      "#486",
      "#F2F",
      "#f2F",
    ],
    long: [
      "#000000",
      "#222222",
      "#456456",
      "#FF6666",
      "#b4Dc0f",
    ]
  }

  let allTheBeans = [
    ...unhashed.short,
    ...unhashed.long,
    ...hashed.short,
    ...hashed.long,
  ]

  // Mash them into [222, #222222] pairings
  allTheBeans.reduce(
    (result, item, index) => {
      return [
        ...result,
        allTheBeans.slice(index+1).map(nextItem => [item, nextItem]),
      ]
    },
    []
  ).reduce((memory, value) => memory.concat(value), []) // Flattens it
   .forEach(combo => expect(mix(...combo)) )
})

it("maths correctly", () => {
  expect(mix("#222222", "#000000")).toBe("#111111")
  expect(mix("#000000", "#222222")).toBe("#111111")
  expect(mix( "222222",  "000000")).toBe("#111111")
  expect(mix( "000000",  "222222")).toBe("#111111")

  expect(mix("#222", "#000")).toBe("#111111")
  expect(mix("#000", "#222")).toBe("#111111")
  expect(mix( "222",  "000")).toBe("#111111")
  expect(mix( "000",  "222")).toBe("#111111")

  expect(mix("#222222", "#000000",   0)).toBe("#000000")
  expect(mix("#222222", "#000000", 100)).toBe("#222222")

  //Esoteric combos to follow scss's blending
})
