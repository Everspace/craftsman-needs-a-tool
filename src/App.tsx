import React, { Component } from "react"
import { Button } from "./components/atoms/Button"

import Material from "./components/atoms/Material"
import { grey, primary, secondary } from "./styles/Colors"
import StatTracker from "./components/organisms/StatTracker"
import { state, character } from "./state"
import { solar } from "./lib/Exalted/motePool"
import { Provider } from "react-redux"
import { createStore } from "redux"
import motes from "./reducers/motes"
import Incrementer from "./components/molecules/Incrementer"
import { InteractiveGroup } from "./components/atoms/InteractiveGroup"

let poolMaxes = solar(character.essence)

// Perhaps resources is an array with IDs?
let resources: any = {
  ...state.resources,

  willpower: {
    ...state.willpower,
    max: character.willpower_permanent,
  },

  motes: {
    ...state.motes,
    // ...state.character.committedMotes,
    ...poolMaxes,
  },
}

let store = createStore((state: any, action) => {
  let newState = { ...state }

  newState.motes = motes(state.motes, action)

  return newState
}, resources)

let spacing = {
  padding: 10,
  margin: 5,
}

let ButtonBlock: React.FC<{label?: string}> = ({label, children, ...props }) => (
  <Material
    className={grey.grey300.cssClass}
    style={{ display: "inline-block", ...spacing }}
    {...props}
  > {label ? label + ":" : null} {children} </Material>
)

let InnerBlock: React.FC = props => <div style={spacing} className={grey.grey400.cssClass} {...props} />
let Panel: React.FC = props => <Material className={grey.grey300.cssClass} style={spacing} {...props} />
let ButtonHolderPanel: React.FC<{label?: String}> = ({label, children, ...props}) => (
  <Panel {...props}>
    {label ? <h2 style={spacing}>{label}</h2>:null}
    <InnerBlock>
      {children}
    </InnerBlock>
  </Panel>
)

let Header = props => (
  <Material
  className={primary.main.cssClass}
  style={{
    padding: 10,
    zIndex: 1,
    marginBottom: 20,
  }}
>
  <h1>Craftsman Needs a Tool</h1>
</Material>
)

class App extends Component {
  state = {
    targetNumber: 7,
    double: 10,
    dice: 20,
    reroll: []
  }

  wholeRandomize(n: number) {
    return Math.floor(Math.random() * n)
  }

  render() {
    return (
      <Provider store={store}>
        <div className={grey.grey500.cssClass}>
          <Header />
          <Material rounded spaced className={grey.grey400.cssClass}>
            <Panel>
              Probability...
            </Panel>

            <ButtonHolderPanel label="The Craft">

            <ButtonBlock label="Difficulty">
                <Incrementer
                  color={secondary}
                  initialValue={5}
                  min={1}
                  callback={console.log}
                />
              </ButtonBlock>
              <ButtonBlock label="Terminus">
                <Incrementer
                  color={secondary}
                  initialValue={6}
                  min={1}
                  callback={console.log}
                />
              </ButtonBlock>
            </ButtonHolderPanel>

            <ButtonHolderPanel label="Setup">
              <ButtonBlock label="Dice pool">
                <Incrementer
                  color={secondary}
                  initialValue={10}
                  min={1}
                  callback={console.log}
                />
              </ButtonBlock>
              <ButtonBlock label="Non-Charm Autosuccesses">
                <Incrementer
                  color={secondary}
                  initialValue={0}
                  callback={console.log}
                />
              </ButtonBlock>
              <ButtonBlock label="Stunt Rating">
                <InteractiveGroup>
                  <Button>0</Button>
                  <Button>•</Button>
                  <Button>••</Button>
                  <Button>•••</Button>
                </InteractiveGroup>
              </ButtonBlock>
              <ButtonBlock label="Interval">
                <Button>Willpower</Button>
              </ButtonBlock>
              <ButtonBlock label="Double">
                <InteractiveGroup>
                  {Array.from({ length: 4 }, (_, i) => (
                    <Button key={i}>{i + 7}s</Button>
                  ))}
                </InteractiveGroup>
              </ButtonBlock>
              <ButtonBlock label="Reroll">
                <InteractiveGroup>
                  <Button key="1s">1s</Button>
                  <Button key="6s">6s</Button>
                  <Button key="10s">10s</Button>
                </InteractiveGroup>
              </ButtonBlock>
            </ButtonHolderPanel>

            <ButtonHolderPanel>
              <Button>First Word of the Demiurge</Button>
              <Button>Sacrosanct Delerium</Button>
            </ButtonHolderPanel>
            <ButtonHolderPanel>
              <div>Spend:</div>
              <div className={grey.grey400.cssClass}>
                <Button>8</Button>
                <Button>personal ▼</Button>
                <Button>motes</Button>
              </div>
              <div className={grey.grey400.cssClass}>
                <Button>8</Button>
                <Button>peripheral ▼</Button>
                <Button>motes</Button>
              </div>
              <div className={grey.grey400.cssClass}>
                <Button>8</Button>
                <Button>any ▼</Button>
                <Button>motes</Button>
              </div>
              <div className={grey.grey400.cssClass}>
                <Button>1</Button>
                <Button>willpower</Button>
              </div>
            </ButtonHolderPanel>

          </Material>
        </div>
      </Provider>
    )
  }
}

export default App
