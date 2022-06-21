import { Component } from "react";
import Pokemon from "./Pokemon";

class Card extends Component {
  render() {
    return(
      <Pokemon pokemon={this.props.pokemon} />
    )
  }
}

export default Card;