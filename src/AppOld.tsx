/** @jsxImportSource @emotion/react */
import Material, { Panel } from "components/atoms/Material"
import ProbabilityDisplay from "components/layouts/ProbabilityDisplay"
import { RollState } from "lib/dice"
import { Component } from "react"
import { grey } from "styles/Colors"
import { css } from "twin.macro"

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
          <ProbabilityDisplay state={defaultRegularState} />
          {/* <ButtonHolderPanel label="The Challenge">
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

export { App as AppOld }
