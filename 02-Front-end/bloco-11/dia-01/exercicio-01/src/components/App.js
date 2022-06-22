import React, { Component } from 'react';
import Card from './Card';
import pokemons from '../data/data';
import '../app.css';



class App extends Component {
  constructor() {
    super()

    this.state = {
      pokemonNum: 0
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      pokemonNum: state.pokemonNum + 1
    }))
    if (this.state.pokemonNum === pokemons.length - 1) {
      this.setState(() => ({
        pokemonNum: 0
      }))
    }
  }

  render() {
    return (
      <div className="background">
        <div className="pokedex">
         <Card pokemon={pokemons[this.state.pokemonNum]} />
        </div>
        <div className='button-container'>
         <button onClick={this.handleClick}>Próximo pokemon</button>
        </div>
      </div>
    );
  }
}

export default App;
