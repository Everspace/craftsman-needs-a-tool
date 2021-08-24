import Material, { Panel } from "components/atoms/Material"
import ProbabilityDisplay from "components/page/Probability/ProbabilityDisplay"
import { RollState } from "lib/dice"
import { Component } from "react"
import { grey } from "styles/Colors"
import { css } from "twin.macro"
import {
  difficultyAtom,
  targetNumberAtom,
  terminusAtom,
} from "components/page/Probability/state"
import Incrementer from "components/molecules/Incrementer"

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

export type ButtonHolderPanelProps = { label?: String; children }
let ButtonHolderPanel = ({ label, children, ...props }) => (
  <Panel {...props}>
    {label ? <h2 css={spacing}>{label}</h2> : null}
    <InnerBlock>{children}</InnerBlock>
  </Panel>
)

const defaultRegularState: RollState = {
  targetNumber: 7,
  double: 10,
  dice: 10,
  difficulty: 0,
  terminus: 1,
  target: 5,
  reroll: [],
  autoSuccesses: 0,
}

class ProbabilityPage extends Component {
  state = { ...defaultRegularState }

  render() {
    return (
      <div css={grey.grey500.cssClass}>
        <Material rounded spaced css={grey.grey400.cssClass}>
          {/* <Panel key="toggle area">
              <Button onClick={()=>this.setState({...defaultRegularState})}>
                Difficulty 5
              </Button>
              <Button onClick={()=>this.setState({...defaultCraftState})}>
                Craft 5 dot Artifact
              </Button>
            </Panel> */}
          {/* TODO: Remember to add in willpower this.stateAutosuccesses += (state.willpower ? 1 : 0) */}
          <ProbabilityDisplay />
          <ButtonHolderPanel label="The Challenge">hello</ButtonHolderPanel>
          <ButtonHolderPanel label="The Challenge">
            <ButtonBlock label="Target">
              <Incrementer atom={targetNumberAtom} min={1} max={200} />
            </ButtonBlock>

            <ButtonBlock label="Difficulty">
              <Incrementer atom={difficultyAtom} min={0} />
            </ButtonBlock>
            <ButtonBlock label="Terminus">
              <Incrementer atom={terminusAtom} min={1} />
            </ButtonBlock>
          </ButtonHolderPanel>
          {/*
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
              <InteractiveGroup css={tw`border-2 border-yellow-500`}>
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
              </InteractiveGroup>
            </ButtonBlock>
            <ButtonBlock label="Target Number">
              <Incrementer
                initialValue={this.state.targetNumber}
                min={4}
                max={9}
                callback={targetNumber => this.doThing({ targetNumber })}
              />
            </ButtonBlock> */}
          {/* </ButtonHolderPanel> */}
        </Material>
      </div>
    )
  }
}

export { ProbabilityPage }
