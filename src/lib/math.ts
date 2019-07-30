import { erf } from "mathjs"

export type Fraction = {
  numerator: number
  denominator: number
}

export const sumFractions = (a: Fraction, b: Fraction): Fraction => ({
  numerator: a.numerator + b.numerator,
  denominator: a.denominator + b.denominator,
})

export const divideFraction = (f: Fraction): number =>
  f.numerator / f.denominator

export const pnorm = (x: number, mean: number, standardDeviation: number) => {
  let erfResult = erf((x - mean) / (standardDeviation * Math.sqrt(2))) as number

  return 0.5 * (1 + erfResult)
}
