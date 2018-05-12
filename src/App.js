import React, { Component } from 'react';
import './App.css';
import './Custom.css';
import { Navbar, Jumbotron, Button, NavbarBrand, Progress } from 'reactstrap';
import { ShadowedDiv } from "./components/BootstrapExtras"

import MoteBar from "components/molecules/MoteBar"
import SuccessBar from "components/molecules/SuccessBar"

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
    let useable = this.wholeRandomize(successes);

    this.setState({
      personal: this.wholeRandomize(this.state.personalPool),
      peripheral: this.wholeRandomize(this.state.peripheralPool),
      willpower: this.wholeRandomize(this.state.willpowerPool),
      successesTotal: successes,
      successesUsable: useable
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
    return (
      <div>
        <Navbar>
          <NavbarBrand href="/">React App</NavbarBrand>
        </Navbar>
        <Jumbotron>
          <ShadowedDiv style={{padding: 10, zIndex: 1, marginBottom: 20}}>
            <h1>Craftsman Needs a Tool</h1>
          </ShadowedDiv>
          <ShadowedDiv style={{padding: 10}}>
            <MoteBar
              personal={this.state.personal}
              personalPool={this.state.personalPool}
              peripheral={this.state.peripheral}
              peripheralPool={this.state.peripheralPool}
            />

            <div className="text-center">Willpower</div>
            <Progress value={this.state.willpower} max={this.state.willpowerPool}>
              {this.state.willpower}
            </Progress>

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
          </ShadowedDiv>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
