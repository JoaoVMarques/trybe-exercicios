import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.state = {
      clicksButton1: 0,
      clicksButton2: 0,
      clicksButton3: 0,
    }
  }

  handleClick() {
    this.setState((oldState, _props) => ({
      clicksButton1: oldState.clicksButton1 +1
    }))
  }

  handleClick2() {
    this.setState((oldState, _props) => ({
      clicksButton2: oldState.clicksButton2 +1
    }))
  }

  handleClick3() {
    this.setState((oldState, _props) => ({
      clicksButton3: oldState.clicksButton3 +1
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.clicksButton1}</button>
        <button onClick={this.handleClick2}>{this.state.clicksButton2}</button>
        <button onClick={this.handleClick3}>{this.state.clicksButton3}</button>
      </div>
    )
  }
}

export default App;