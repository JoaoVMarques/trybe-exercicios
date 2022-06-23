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
    this.changeFilter = this.changeFilter.bind(this);
    this.resetPokemonNum = this.resetPokemonNum.bind(this);
  }

  nextPokemon(max) {
    this.setState((state) => ({
      pokemonNum: state.pokemonNum + 1
    }))
    if (this.state.pokemonNum === max - 1) {
      this.resetPokemonNum();
    }
  }

  resetPokemonNum() {
    this.setState(() => ({
      pokemonNum: 0
    }))
  }

  changeFilter(filter) {
    this.setState({
      filter: filter
    })
  }

  filter() {
    const filteredPokemons = pokemons.filter((pokemon) => pokemon.type === this.state.filter).map((pokemon) => pokemon);
    if (filteredPokemons.length !== 0) {
      return filteredPokemons;
    }
    return pokemons.map((pokemon) => pokemon);
  }

  render() {
    const filteredPokemons = this.filter();
    return (
      <div className="background">
        <div className="pokedex">
         <Card pokemon={filteredPokemons[this.state.pokemonNum]} />
        </div>
        <div className="button-container">
         <button className="next-button" onClick={() => {this.nextPokemon(filteredPokemons.length)}}>Próximo pokemon</button>
        </div>
        <div className="button-container">
          <FilterButton type="Fire" resetPokemonNum={this.resetPokemonNum} changeFilter={this.changeFilter} />
          <FilterButton type="Psychic" resetPokemonNum={this.resetPokemonNum} changeFilter={this.changeFilter} />
          <FilterButton type="All" resetPokemonNum={this.resetPokemonNum} changeFilter={this.changeFilter} />
        </div>
      </div>
    );
  }
}

export default App;
