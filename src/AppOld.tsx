/** @jsxImportSource @emotion/react */
import { css } from "twin.macro"
import { Component } from "react"
import { ToggleButton } from "components/molecules/ToggleButton"
import Material from "components/atoms/Material"
import { grey } from "styles/Colors"
import Incrementer from "components/molecules/Incrementer"

import { InteractiveGroup as InteractiveGroupOld } from "components/atoms/InteractiveGroupOld"
import { erf } from "mathjs"
import { calculateDiceMean, calculateDiceSigma } from "lib/dice"
import InteractiveGroup from "components/atoms/InteractiveGroup"
import Button from "components/atoms/Button"

// const round = (number, decimals) => Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals)

let spacing = css({
  padding: 10,
  margin: 5,
})

let ButtonBlock: React.FC<{ label?: string }> = ({
  label,
  children,
  ...props
}) => (
  <Material
    css={[
      grey.grey300.cssClass,
      {
        display: "inline-block",
      },
      spacing,
    ]}
    {...props}
  >
    {" "}
    {label ? label + ":" : null} {children}{" "}
  </Material>
)

let InnerBlock = props => (
  <div css={[grey.grey400.cssClass, spacing]} {...props} />
)

let Panel = props => (
  <Material css={[grey.grey300.cssClass, spacing]} {...props} />
)

export type ButtonHolderPanelProps = { label?: String; children }
let ButtonHolderPanel = ({ label, children, ...props }) => (
  <Panel {...props}>
    {label ? <h2 css={spacing}>{label}</h2> : null}
    <InnerBlock>{children}</InnerBlock>
  </Panel>
)

const defaultRegularState = {
  targetNumber: 7,
  double: 10,
  dice: 10,
  difficulty: 0,
  terminus: 1,
  target: 5,
  reroll6: false,
  reroll10: false,
  reroll1: false,
  autoSuccesses: 0,
  willpower: false,
}

// const defaultCraftState = {
//   targetNumber: 7,
//   double: 10,
//   dice: 20,
//   difficulty: 5,
//   terminus: 6,
//   target: 100,
//   reroll6: false,
//   reroll10: false,
//   reroll1: false,
//   autoSuccesses: 0,
//   willpower: true,
// }

class App extends Component {
  state = { ...defaultRegularState }
  //?
  calcVarianceAndMean(state: {
    targetNumber: number
    double: number
    reroll1: boolean
    reroll6: boolean
    reroll10: boolean
    willpower: boolean
  }): { mean: number; variance: number } {
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
    const rerolls: number[] = []
    if (state.reroll1) {
      rerolls.push(1)
    }
    if (state.reroll6) {
      rerolls.push(6)
    }
    if (state.reroll10) {
      rerolls.push(10)
    }

    type Face = {
      probability: number
      reroll: boolean
      value: number
    }

    const faces: Face[] = []
    for (let index = 0; index < 10; index++) {
      let side = index + 1
      let isInTarget = side >= state.targetNumber
      let isDouble = side >= state.double
      faces[index] = {
        probability: 1 / 10,
        reroll: rerolls.includes(side),
        value: isInTarget ? (isDouble ? 2 : 1) : 0,
      }
    }

    const mean = calculateDiceMean(faces)
    const varianceSigma = calculateDiceSigma(faces, mean)

    const variance = varianceSigma - mean * mean

    return { mean, variance }
  }

  calcProb(state: any, calcVarianceAndMean) {
    // Since we need to at least roll Target dice over N terminuses, and success is "meet or exceed",
    // Pnorm is about rolling X or less dice, so we need to calculate what the chances of failing
    // are, which is 1 less than the difficulty
    let failure =
      Math.ceil(state.target / state.terminus) + state.difficulty - 1
    failure -= state.willpower ? 1 : 0
    failure -= state.autoSuccesses

    let continuityCorrection = failure
    const { mean, variance } = calcVarianceAndMean

    let pnorm = this.pnorm(
      continuityCorrection,
      state.dice * mean,
      Math.sqrt(state.dice * variance),
    )

    return 1 - pnorm
  }

  pnorm(x: number, mean: number, standardDeviation: number) {
    let erfResult = erf(
      (x - mean) / (standardDeviation * Math.sqrt(2)),
    ) as number

    return 0.5 * (1 + erfResult)
  }

  wholeRandomize(n: number) {
    return Math.floor(Math.random() * n)
  }

  doThing(n) {
    this.setState(n)
  }

  render() {
    const variance = this.calcVarianceAndMean(this.state)
    const standardDeviations = 2 // 95% of all rolls
    const singleDieDeviation = Math.sqrt(variance.variance) * standardDeviations
    const diceDeviation =
      Math.sqrt(variance.variance * this.state.dice) * standardDeviations
    return (
      <div css={grey.grey500.cssClass}>
        <Material>
          <InteractiveGroup>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
          </InteractiveGroup>
          <InteractiveGroup seperated>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
          </InteractiveGroup>
          <InteractiveGroup seperated>
            <Button>1</Button>
          </InteractiveGroup>
          <InteractiveGroup seperated>
            <Button>1</Button>
          </InteractiveGroup>
        </Material>
        <Material rounded spaced css={grey.grey400.cssClass}>
          {/* <Panel key="toggle area">
              <Button onClick={()=>this.setState({...defaultRegularState})}>
                Difficulty 5
              </Button>
              <Button onClick={()=>this.setState({...defaultCraftState})}>
                Craft 5 dot Artifact
              </Button>
            </Panel> */}
          <Panel key="prob area">
            <p>
              Probability of succeeding difficulty {this.state.target}:{" "}
              {(this.calcProb(this.state, variance) * 100).toFixed()}%
            </p>
            <p>
              Success per die: {variance.mean.toFixed(2)} ±
              {singleDieDeviation.toFixed(2)}
            </p>
            <p>
              Expected successes:{" "}
              {(
                variance.mean * this.state.dice +
                this.state.autoSuccesses +
                (this.state.willpower ? 1 : 0)
              ).toFixed(1)}{" "}
              ±{diceDeviation.toFixed(1)}
            </p>
          </Panel>
          <ButtonHolderPanel label="The Challenge">
            <ButtonBlock label="Target">
              <Incrementer
                initialValue={this.state.target}
                min={1}
                max={200}
                callback={target => this.doThing({ target })}
              />
            </ButtonBlock>

            <ButtonBlock label="Difficulty">
              <Incrementer
                initialValue={this.state.difficulty}
                min={0}
                callback={difficulty => this.doThing({ difficulty })}
              />
            </ButtonBlock>
            <ButtonBlock label="Terminus">
              <Incrementer
                initialValue={this.state.terminus}
                min={1}
                callback={terminus => this.doThing({ terminus })}
              />
            </ButtonBlock>
          </ButtonHolderPanel>
          <ButtonHolderPanel label="Dice Pool">
            <ButtonBlock label="Dice">
              <Incrementer
                initialValue={this.state.dice}
                min={1}
                callback={dice => this.doThing({ dice })}
              />
            </ButtonBlock>
            <ButtonBlock label="Autosuccesses">
              <Incrementer
                initialValue={this.state.autoSuccesses}
                callback={autoSuccesses => this.doThing({ autoSuccesses })}
              />
            </ButtonBlock>
            <ButtonBlock>
              <ToggleButton
                on={this.state.willpower}
                onToggle={willpower => this.setState({ willpower })}
                key="wp"
              >
                Willpower
              </ToggleButton>
            </ButtonBlock>
          </ButtonHolderPanel>

          <ButtonHolderPanel label="Roll Effects">
            <ButtonBlock label="Double">
              <Incrementer
                initialValue={this.state.double}
                min={7}
                max={10}
                callback={double => this.doThing({ double })}
              />
            </ButtonBlock>
            <ButtonBlock label="Reroll">
              <InteractiveGroupOld bordered>
                <ToggleButton
                  onToggle={reroll1 => this.setState({ reroll1 })}
                  key="1s"
                >
                  1s
                </ToggleButton>
                <ToggleButton
                  onToggle={reroll6 => this.setState({ reroll6 })}
                  key="6s"
                >
                  6s
                </ToggleButton>
                <ToggleButton
                  onToggle={reroll10 => this.setState({ reroll10 })}
                  key="10s"
                >
                  10s
                </ToggleButton>
              </InteractiveGroupOld>
            </ButtonBlock>
            <ButtonBlock label="Target Number">
              <Incrementer
                initialValue={this.state.targetNumber}
                min={4}
                max={9}
                callback={targetNumber => this.doThing({ targetNumber })}
              />
            </ButtonBlock>
          </ButtonHolderPanel>
        </Material>
      </div>
    )
  }
}

export { App as AppOld }
