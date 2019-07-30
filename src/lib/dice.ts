import { divideFraction, sumFractions } from "lib/math"

export type RollState = {
  targetNumber: number
  double: number
  dice: number
  difficulty: number
  target: number
  autoSuccesses: number
  reroll: number[]
}

export type Face = {
  probability: number
  reroll: boolean
  value: number
}

export const calculateDiceMean = (faces: Face[]): number => {
  return divideFraction(
    faces
      .map(face => ({
        numerator: face.probability * face.value,
        denominator: face.reroll ? 0 : face.probability,
      }))
      .reduce(sumFractions, { numerator: 0, denominator: 0 }),
  )
}

export const calculateDiceSigma = (faces: Face[], mean: number): number => {
  const varianceFraction = faces
    .map(face => {
      let numerator = face.probability
      if (face.reroll) {
        numerator *= face.value * (2 * mean + face.value)
      } else {
        numerator *= face.value * face.value
      }

      let denominator = face.probability
      if (face.reroll) {
        denominator = 0
      }
      return { numerator, denominator }
    })
    .reduce(sumFractions, { numerator: 0, denominator: 0 })

  return divideFraction(varianceFraction)
}

type VarianceAndMean = { mean: number; variance: number }

export const calcRollVarianceAndMean = (pool: RollState): VarianceAndMean => {
  const faces: Face[] = []
  for (let index = 0; index < 10; index++) {
    let side = index + 1
    let isInTarget = side >= pool.targetNumber
    let isDouble = side >= pool.double
    faces[index] = {
      probability: 1 / 10,
      reroll: pool.reroll.includes(index),
      value: isInTarget ? (isDouble ? 2 : 1) : 0,
    }
  }

  const mean = calculateDiceMean(faces)
  const varianceSigma = calculateDiceSigma(faces, mean)

  return {
    mean,
    variance: varianceSigma - mean * mean,
  }
}
