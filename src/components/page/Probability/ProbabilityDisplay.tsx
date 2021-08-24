/** @jsxImportSource @emotion/react */
import "twin.macro"
import { Panel } from "components/atoms/Material"
import { calcProb, calcRollVarianceAndMean } from "lib/dice"
import { rollstateAtom } from "components/page/Probability/state"
import { useAtom } from "jotai"

const ProbabilityDisplay = () => {
  const [state] = useAtom(rollstateAtom)
  const variance = calcRollVarianceAndMean(state)
  const standardDeviations = 2 // 95% of all rolls
  const singleDieDeviation = Math.sqrt(variance.variance) * standardDeviations
  const diceDeviation =
    Math.sqrt(variance.variance * state.dice) * standardDeviations
  return (
    <Panel>
      <p>
        Probability of succeeding difficulty {state.target}:{" "}
        {(calcProb(state, variance) * 100).toFixed()}%
      </p>
      <p>
        Success per die: {variance.mean.toFixed(2)} ±
        {singleDieDeviation.toFixed(2)}
      </p>
      <p>
        Expected successes:{" "}
        {(variance.mean * state.dice + state.autoSuccesses).toFixed(1)} ±
        {diceDeviation.toFixed(1)}
      </p>
    </Panel>
  )
}

export default ProbabilityDisplay
