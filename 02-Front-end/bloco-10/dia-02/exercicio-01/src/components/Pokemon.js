import { Component } from "react";

class Pokemon extends Component {
  render() {
    const { name, type, value } = this.props.pokemon;
    return (
      <>
        <h1>{name}</h1>
        <span>{type}</span>
        <span>{value}</span>
      </>
    )
  }
}

export default Pokemon;