import React, { Component } from "react";
import Button from "components/atoms/Button"

import Material from "components/atoms/Material"
import { cssClass } from "styles/Colors"
import StatTracker from "components/organisms/StatTracker";
import state from "state.json"
import { solar } from "lib/Exalted/motePool"

let poolMaxes = solar(state.character.essence)

// Perhaps resources is an array with IDs?
let resources = {
  ...state.resources,

  willpower: {
    ...state.resources.willpower,
    max: state.character.willpowerMax,
  },

  motes: {
    ...state.resources.motes,
    ...state.character.committedMotes,
    ...poolMaxes,
  }
}

console.log(resources)

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
    successesTarget: 100
  };

  wholeRandomize(n) {
    return Math.floor(Math.random() * n);
  }

  randomize() {
    let successes = this.wholeRandomize(this.state.successesTarget);
    let useable   = this.wholeRandomize(successes);

    this.setState({
      personal:   this.wholeRandomize(this.state.personalPool),
      peripheral: this.wholeRandomize(this.state.peripheralPool),
      willpower:  this.wholeRandomize(this.state.willpowerPool),
      successesTotal: successes,
      successesUsable: useable,
    });
  }

  maximize() {
    let successes = this.state.successesTarget;
    let useable = Math.floor(successes / 2);

    this.setState({
      personal: this.state.personalPool,
      peripheral: this.state.peripheralPool,
      willpower: this.state.willpowerPool,
      successesTotal: successes,
      successesUsable: useable
    });
  }

  render() {
    let wholeScreen = {
      width: "100%",
      height: "100%",
      minWidth: "100%",
      minHeight: "100%",
    }

    return (
      <Material className={cssClass.grey500} style={wholeScreen} >
        <Material
          className={cssClass.primary.main}
          style={{padding: 10, zIndex: 1, marginBottom: 20}}
        >
          <h1>Craftsman Needs a Tool</h1>
        </Material>
        <StatTracker {...this.state}>
          <Material className={cssClass.grey300} style={{padding: 10, margin: 5}}>
            <div>Setup</div>
            <Material style={{padding: 10, margin: 5}}>
              Rating:
              <Button>
                ••••• ▼
              </Button>
            </Material>

            <Material style={{padding: 10, margin: 5}}>
              <div>
                Double
              </div>
              <Button>9</Button>
              <Button>8</Button>
              <Button>7</Button>
            </Material>
            <Material style={{padding: 10, margin: 5}}>
              <div>
                Explode
              </div>
              {
                Array.from(
                  {length: 10},
                  (_, i) => <Button key={i} active={i % 3 === 0} >{10 - i}s</Button>
                ).reverse()
              }
            </Material>
          </Material>

          <Material className={cssClass.grey300} style={{padding: 10, margin: 5} }>
            <Button>
              First Word of the Demiurge
            </Button>
            <Button>
              Sacrosanct Delerium
            </Button>
          </Material>
          <Material className={cssClass.grey300} style={{padding: 10, margin: 5} }>
            <div>Spend:</div>
            <div className={cssClass.grey400}>
              <Button>8</Button><Button>personal ▼</Button><Button>motes</Button>
            </div>
            <div className={cssClass.grey400}>
              <Button>8</Button><Button>peripheral ▼</Button><Button>motes</Button>
            </div>
            <div className={cssClass.grey400}>
              <Button>8</Button><Button>any ▼</Button><Button>motes</Button>
            </div>
            <div className={cssClass.grey400}>
              <Button>1</Button><Button>willpower</Button>
            </div>
          </Material>
          <Button onClick={() => this.randomize()}>
            Do the things
          </Button>
          <Button onClick={() => this.maximize()}>
            Max
          </Button>
        </StatTracker>
      </Material>
    );
  }
}

export default App;
