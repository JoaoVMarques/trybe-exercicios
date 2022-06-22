import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Meu botão</button>
      </div>
    )
  }
}

export default App;