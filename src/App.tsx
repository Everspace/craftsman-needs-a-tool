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

let ButtonBlock = props => (
  <Material
    className={grey.grey300.cssClass}
    style={{ display: "inline-block", ...spacing }}
    {...props}
  />
)

class App extends Component {
  state = {
    personal: 13,
    personalPool: 13,
    peripheral: 5,
    peripheralPool: 32,
    willpower: 3,
    willpowerPool: 5,
    successesTotal: 65,
    successesUsable: 12,
    successesTarget: 100,
  }

  wholeRandomize(n) {
    return Math.floor(Math.random() * n)
  }

  randomize() {
    let successes = this.wholeRandomize(this.state.successesTarget)
    let useable = this.wholeRandomize(successes)

    this.setState({
      personal: this.wholeRandomize(this.state.personalPool),
      peripheral: this.wholeRandomize(this.state.peripheralPool),
      willpower: this.wholeRandomize(this.state.willpowerPool),
      successesTotal: successes,
      successesUsable: useable,
    })
  }

  maximize() {
    let successes = this.state.successesTarget
    let useable = Math.floor(successes / 2)

    this.setState({
      personal: this.state.personalPool,
      peripheral: this.state.peripheralPool,
      willpower: this.state.willpowerPool,
      successesTotal: successes,
      successesUsable: useable,
    })
  }

  render() {
    return (
      <Provider store={store}>
        <div className={grey.grey500.cssClass}>
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
          <StatTracker {...this.state}>
            <Material className={grey.grey300.cssClass} style={spacing}>
              <Button onClick={() => this.randomize()}>Do the things</Button>
              <Button onClick={() => this.maximize()}>Max</Button>
              <Incrementer
                color={primary}
                initialValue={5}
                callback={console.log}
              />
              <Incrementer
                color={secondary}
                initialValue={5}
                callback={console.log}
              />
              <Incrementer
                color={grey}
                initialValue={5}
                callback={console.log}
              />
            </Material>

            <Material className={grey.grey300.cssClass} style={spacing}>
              <h2 style={spacing}>Setup</h2>
              <div style={spacing} className={grey.grey400.cssClass}>
                <div>
                  <ButtonBlock>
                    Rating:
                    <Button>••••• ▼</Button>
                  </ButtonBlock>
                  <ButtonBlock>
                    Dice Pool:
                    <Button>9</Button>
                  </ButtonBlock>
                  <ButtonBlock>
                    Stunt Rating:
                    <Button>••• ▼</Button>
                  </ButtonBlock>
                  <ButtonBlock>
                    Interval:
                    <Button>3</Button>
                    <Button>Next</Button>
                    <Button>Complete</Button>
                  </ButtonBlock>
                </div>
                <div>
                  <ButtonBlock>
                    Double:
                    <Button>9</Button>
                    <Button>8</Button>
                    <Button>7</Button>
                  </ButtonBlock>
                  <ButtonBlock>
                    Explode:
                    <InteractiveGroup>
                      {Array.from({ length: 10 }, (_, i) => (
                        <Button key={i}>{10 - i}s</Button>
                      )).reverse()}
                    </InteractiveGroup>
                  </ButtonBlock>
                </div>
              </div>
            </Material>

            <Material className={grey.grey300.cssClass} style={spacing}>
              <Button>First Word of the Demiurge</Button>
              <Button>Sacrosanct Delerium</Button>
            </Material>
            <Material className={grey.grey300.cssClass} style={spacing}>
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
            </Material>
          </StatTracker>
        </div>
      </Provider>
    )
  }
}

export default App
