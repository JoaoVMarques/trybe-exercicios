import React, { Component } from "react";

class FilterButton extends Component {
  render() {
    const { type } = this.props
    return (
      <>
        <button className="filter-button">{ type }</button>
      </>
    )
  }
}

export default FilterButton;