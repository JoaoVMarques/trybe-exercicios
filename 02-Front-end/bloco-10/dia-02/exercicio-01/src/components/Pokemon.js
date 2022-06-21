import React, { Component } from "react";

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight: { value, measurementUnit }, image } = this.props.pokemon;
    return (
      <div className="card">
        <h1>{name}</h1>
        <p>{type}</p>
        <p>Average Weight: {value} {measurementUnit}</p>
        <img src={image} />
      </div>
    )
  }
}

export default Pokemon;