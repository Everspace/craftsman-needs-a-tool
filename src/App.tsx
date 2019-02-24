import React, { Component, useEffect, useState } from "react"
import { Button } from "./components/atoms/Button"

import Material from "./components/atoms/Material"
import { grey, primary, secondary } from "./styles/Colors"
import { state, character } from "./state"
import { solar } from "./lib/Exalted/motePool"
import { Provider } from "react-redux"
import { createStore } from "redux"
import motes from "./reducers/motes"
import Incrementer from "./components/molecules/Incrementer"
import { InteractiveGroup } from "./components/atoms/InteractiveGroup"
import mathjs from "mathjs"

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

let ToggleButton: React.FC<{on?:boolean, callback?:(boolean)=>void} & React.ButtonHTMLAttributes<HTMLButtonElement> & Colorable>  = (
  {on = false, callback, onClick, colorStyle = secondary, ...props}
) => {
  let [state, setState] = useState(on)

  useEffect(()=>{
    callback && callback(state)
  }, [state])

  return <Button
    colorStyle={state ? grey: colorStyle}
    {...props}
    onClick={(e)=> {
      onClick && onClick(e)
      setState(!state)
    }}
  />
}


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

const defaultCraftState = {
  targetNumber: 7,
  double: 10,
  dice: 20,
  difficulty: 5,
  terminus: 6,
  target: 100,
  reroll6: false,
  reroll10: false,
  reroll1: false,
  autoSuccesses: 0,
  willpower: true,
}


class App extends Component {
  state = {...defaultRegularState}

  calcProb(state:any) {
    let doubledSides = state.double ? 11 - state.double : 0
    let p2 = doubledSides / 10 // prob of 2 succeses
    let singleSuccessSides = (10 - doubledSides - state.targetNumber + 1)
    let p1 = singleSuccessSides / 10
    let p0 = 1 - p1 - p2
    let availableSides = 10 - (state.reroll6 ? 1:0) - (state.reroll10 ? 1:0) - (state.reroll1 ? 1:0)
    let dice = state.dice * 10 / availableSides
    let mu = p2 * 2 + p1 * 1
    let sigmaSq = p2 * Math.pow(2 - 0.5, 2)
      + p1 * Math.pow(1 - 0.5, 2)
      + p0 * Math.pow(0 - 0.5, 2)

    let desired = Math.ceil(state.target / state.terminus) + state.difficulty - (state.terminus === 1 ? 0 : 1)
    desired -= state.willpower ? 1 : 0
    desired -= state.autoSuccesses

    let continuityCorrection = desired + 0.6

    let pnorm = this.pnorm(continuityCorrection,
      dice * mu,
      Math.sqrt(dice * sigmaSq)
    )

    return 1 - pnorm

  }

  pnorm(x:number, mean:number, standardDeviation:number) {
    let erf = mathjs.erf(
      (x - mean) / (standardDeviation * Math.sqrt(2))
    ) as number

    return 0.5 * (1 + erf)
  }

  wholeRandomize(n: number) {
    return Math.floor(Math.random() * n)
  }

  doThing(n) {
    this.setState(n)
  }

  render() {
    return (
      <Provider store={store}>
        <div className={grey.grey500.cssClass}>
          <Header />
          <Material rounded spaced className={grey.grey400.cssClass}>
            <Panel key="toggle area">
              <Button onClick={()=>this.setState({...defaultRegularState})}>
                Difficulty 5
              </Button>
              <Button onClick={()=>this.setState({...defaultCraftState})}>
                Craft 5 dot Artifact
              </Button>
            </Panel>
            <Panel key="prob area">
              Probability of {this.state.target} successes: {Math.round(this.calcProb(this.state) * 100)}%
            </Panel>

            <ButtonHolderPanel label="The Challenge">
              <ButtonBlock label="Target">
                <Incrementer
                  initialValue={this.state.target}
                  min={1}
                  max={200}
                  callback={(target) => this.doThing({target})}
                />
              </ButtonBlock>

              <ButtonBlock label="Difficulty">
                <Incrementer
                  initialValue={this.state.difficulty}
                  min={0}
                  callback={(difficulty) => this.doThing({difficulty})}
                />
              </ButtonBlock>
              <ButtonBlock label="Terminus">
                <Incrementer
                  initialValue={this.state.terminus}
                  min={1}
                  callback={(terminus) => this.doThing({terminus})}
                />
              </ButtonBlock>
            </ButtonHolderPanel>

            <ButtonHolderPanel label="Roll Effects">
              <ButtonBlock label="Dice pool">
                <Incrementer
                  initialValue={this.state.dice}
                  min={1}
                  callback={(dice) => this.doThing({dice})}
                />
              </ButtonBlock>
              <ButtonBlock label="Autosuccesses">
                <Incrementer
                  initialValue={this.state.autoSuccesses}
                  callback={(autoSuccesses) => this.doThing({autoSuccesses})}
                />
              </ButtonBlock>
              <ButtonBlock>
                <ToggleButton
                    on={this.state.willpower}
                    callback={(willpower)=>this.setState({willpower})}
                  key="wp">Willpower</ToggleButton>
              </ButtonBlock>
              <div key="New row thing">
                <ButtonBlock label="Double">
                  <Incrementer
                    initialValue={this.state.double}
                    min={7}
                    max={10}
                    callback={(double) =>  this.doThing({double})}
                  />
                </ButtonBlock>
                <ButtonBlock label="Target Number">
                  <Incrementer
                    initialValue={this.state.targetNumber}
                    min={4}
                    max={8}
                    callback={(targetNumber) => this.doThing({targetNumber})}
                  />
                </ButtonBlock>
              </div>
            </ButtonHolderPanel>
            <Panel>
              <ButtonBlock label="Stunt Rating">
                <InteractiveGroup>
                  <Button>0</Button>
                  <Button>•</Button>
                  <Button>••</Button>
                  <Button>•••</Button>
                </InteractiveGroup>
              </ButtonBlock>
              <ButtonBlock label="Stuff">
              </ButtonBlock>
              <ButtonBlock label="Reroll">
                <InteractiveGroup>
                  <ToggleButton
                    callback={(reroll1)=>this.setState({reroll1})}
                    key="1s">1s</ToggleButton>
                  <ToggleButton
                  callback={(reroll6)=>this.setState({reroll6})}
                  key="6s">6s</ToggleButton>
                  <ToggleButton callback={(reroll10)=>this.setState({reroll10})}
                  key="10s">10s</ToggleButton>
                </InteractiveGroup>
              </ButtonBlock>
            </Panel>

            {/* <ButtonHolderPanel>
              <Button>First Word of the Demiurge</Button>
              <Button>Sacrosanct Delerium</Button>
            </ButtonHolderPanel> */}
          </Material>
        </div>
      </Provider>
    )
  }
}

export default App
