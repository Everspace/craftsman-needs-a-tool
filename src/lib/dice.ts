import { divideFraction, sumFractions } from "lib/math"
import { erf } from "mathjs"

export interface RollState {
  targetNumber: number
  double: number
  dice: number
  autoSuccesses: number
  reroll: number[]
}

export interface ChallengeState {
  difficulty: number
  target: number
  terminus: number
}

export interface ProbabilityState extends RollState, ChallengeState {}

export interface Face {
  probability: number
  reroll: boolean
  value: number
}

export const allFaces = Object.freeze([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

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
  // Thanks AG from the Exalted discord for the formula/base code this is derived from.
  //
  // let p0 = chance of 0 with no reroll
  // let r0 = chance of 0 with reroll
  // p1/r1, p2/r2 etc.
  // E[X^2] = p0 * 0^2 + r0 * E[X^2] + p1 * 1^2 + r1 * E[(X + 1)^2] + p2 * 2^2 + r2 * E[(X + 2)^2]
  // E[(X + k)^2] = E[X^2 + 2 * X * k + k^2] = E[X^2] + 2 * k * E[X] + k^2
  // =>
  // E[X^2] * (1 - r0 - r1 - r2) = p1 * 1^2 + r1 * (2 * 1 * E[X] + 1^2) + p2 * 2^2 + r2 * (2 * 2 * E[X] + 2^2)
  // E[X^2] -> variance

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

export const pnorm = (x: number, mean: number, standardDeviation: number) => {
  let erfResult = erf((x - mean) / (standardDeviation * Math.sqrt(2))) as number

  return 0.5 * (1 + erfResult)
}

export const calcProb = (
  state: ProbabilityState,
  calcVarianceAndMean: VarianceAndMean,
) => {
  // Since we need to at least roll Target dice over N terminuses, and success is "meet or exceed",
  // Pnorm is about rolling X or less dice, so we need to calculate what the chances of failing
  // are, which is 1 less than the difficulty
  let failure =
    Math.ceil(state.target / state.terminus) +
    (state.difficulty - 1) -
    state.autoSuccesses

  const continuityCorrection = failure
  const { mean, variance } = calcVarianceAndMean

  const pnormResult = pnorm(
    continuityCorrection,
    state.dice * mean,
    Math.sqrt(state.dice * variance),
  )

  return 1 - pnormResult
}
