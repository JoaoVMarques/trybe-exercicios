import { Component } from "react";
import Pokemon from "./Pokemon";

class Card extends Component {
  render() {
    const { pokemon } = this.props
    return(
      <Pokemon pokemon={pokemon} />
    )
  }
}

export default Card;