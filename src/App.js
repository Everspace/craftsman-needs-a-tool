import React, { Component } from 'react';
import './App.scss';
import { Navbar, Jumbotron, Button, NavbarBrand } from 'reactstrap';

import MoteBar from "components/molecules/MoteBar"
import SuccessBar from "components/molecules/SuccessBar"
import Material from './components/atoms/Material';
import ProgressBar from './components/atoms/ProgressBar';
import { cssClass } from './styles/Colors';

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
        <Navbar>
          <NavbarBrand href="/">React App</NavbarBrand>
        </Navbar>
        <Jumbotron>
          <Material
            className={cssClass.primary.main}
            style={{padding: 10, zIndex: 1, marginBottom: 20}}>
            <h1>Craftsman Needs a Tool</h1>
          </Material>
          <Material
            className={cssClass.grey400}
            style={{padding: 10, margin: 20}}>
            <MoteBar
              personal={this.state.personal}
              personalPool={this.state.personalPool}
              peripheral={this.state.peripheral}
              peripheralPool={this.state.peripheralPool}
            />

            <div className="text-center">Willpower</div>
            <ProgressBar
              max={this.state.willpowerPool}
              bars={[{
                value: this.state.willpower,
                text: this.state.willpower,
                className: cssClass.primary.main,
              }]}
              text={this.state.willpower}
              value={this.state.willpower}
            />

            <SuccessBar
              total={this.state.successesTotal}
              available={this.state.successesUsable}
              target={this.state.successesTarget}
            />

            <Button
              color="secondary"
              size="large"
              target="_blank"
              onClick={() => this.randomize()}
            >
              Do the things
            </Button>
            <Button
              color="secondary"
              size="large"
              target="_blank"
              onClick={() => this.maximize()}
            >
              Max
            </Button>
          </Material>
        </Jumbotron>
      </Material>
    );
  }
}

export default App;
