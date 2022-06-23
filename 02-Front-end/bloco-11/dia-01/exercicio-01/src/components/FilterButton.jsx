import React, { Component } from "react";

class FilterButton extends Component {
  render() {
    let { type, changeFilter, resetPokemonNum } = this.props
    
    return (
      <>
        <button onClick={() => {changeFilter(type); resetPokemonNum() }} className="filter-button">{ type }</button>
      </>
    )
  }
}

export default FilterButton;