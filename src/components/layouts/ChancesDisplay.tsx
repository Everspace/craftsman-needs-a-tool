/** @jsx jsx */
import { jsx } from "@emotion/core"
import { RollState, calcRollVarianceAndMean } from "lib/dice"
import { pnorm } from "lib/math"

type ProjectState = {
  target: number
  terminus: number
  difficulty: number
}

const calcSuccessChance = (project: ProjectState, pool: RollState) => {
  let failure =
    Math.ceil(project.target / project.terminus) + project.difficulty + 1
  failure -= pool.autoSuccesses

  const { mean, variance } = calcRollVarianceAndMean(pool)

  const continuityCorrection = 0

  const failureProbability = pnorm(
    pool.dice + continuityCorrection,
    pool.dice * mean,
    Math.sqrt(pool.dice * variance),
  )

  const successProbability = 1 - failureProbability

  return successProbability
}

const ChancesDisplay: React.FC<{}> = props => {
  return <div>Hello World!</div>
}

export { ChancesDisplay }
