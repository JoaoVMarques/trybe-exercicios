import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      comidaFavorita: '',
    }
  }

  handleChange(event) {
    this.setState({
      comidaFavorita: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>Formulario super bacana B)</h1>
        <form>
          <label>
            Comida favorita:
            <input value={this.state.comidaFavorita} onChange={this.handleChange} type="text" placeholder="nham nham" />
          </label>
          <label>
            Idade:
            <input type="number" placeholder="0" />
          </label>
          <label>
            Personagem favorito:
            <select>
              <option value="mario">Mario</option>
              <option value="luigi">Luigi</option>
              <option value="yoshi">Yoshi</option>
            </select>
          </label>
          <label>
            Escreva algo legal:
            <textarea cols="30" rows="4" placeholder="Use suas melhores palavras :)"></textarea>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
