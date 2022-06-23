import React, { Component } from 'react';
import Card from './Card';
import pokemons from '../data/data';
import FilterButton from './FilterButton';
import '../app.css';



class App extends Component {
  constructor() {
    super()

    this.state = {
      pokemonNum: 0,
      filter: 'Fire',
    }

    this.nextPokemon = this.nextPokemon.bind(this);
    this.filter = this.filter.bind(this);
  }

  nextPokemon() {
    this.setState((state) => ({
      pokemonNum: state.pokemonNum + 1
    }))
    if (this.state.pokemonNum === 1) {
      this.setState(() => ({
        pokemonNum: 0
      }))
    }
  }

  filter() {
    const filteredPokemons = pokemons.filter((pokemon) => pokemon.type === this.state.filter).map((pokemon) => pokemon);
    return filteredPokemons;
  }

  render() {
    const filteredPokemons = this.filter();
    return (
      <div className="background">
        <div className="pokedex">
         <Card pokemon={filteredPokemons[this.state.pokemonNum]} />
        </div>
        <div className="button-container">
         <button className="next-button" onClick={this.nextPokemon}>Próximo pokemon</button>
        </div>
        <div className="button-container">
          <FilterButton type="Fire" />
          <FilterButton type="Psychic"/>
        </div>
      </div>
    );
  }
}

export default App;
