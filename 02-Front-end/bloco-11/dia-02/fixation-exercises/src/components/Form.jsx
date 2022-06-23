import React, { Component } from "react";
import '../styles/form.css'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      comidaFavorita: "",
      idade: 0,
      personagemFavorito: "mario",
      texto: "",
      gostaDeGolfinhos: false,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Formulario super bacana B)</h1>
        <form>
          <fieldset>
            <label>
              Comida favorita:
              <input
                name="comidaFavorita"
                value={this.state.comidaFavorita}
                onChange={this.handleChange}
                type="text"
                placeholder="nham nham"
              />
            </label>
            <label>
              Idade:
              <input
                name="idade"
                value={this.state.idade}
                onChange={this.handleChange}
                type="number"
                placeholder="0"
              />
            </label>
            <label>
              Personagem favorito:
              <select
                name="personagemFavorito"
                value={this.state.personagemFavorito}
                onChange={this.handleChange}
              >
                <option value="mario">Mario</option>
                <option value="luigi">Luigi</option>
                <option value="yoshi">Yoshi</option>
              </select>
            </label>
          </fieldset>
          <fieldset>
            <label>
              Gosta de golfinhos?
              <input
                name="gostaDeGolfinhos"
                value={this.state.gostaDeGolfinhos}
                onChange={this.handleChange}
                type="checkbox"
              />
            </label>
            <label>
              Qual pudim mais bonito voce ja viu?
              <input type="file" />
            </label>
          </fieldset>
          <label>
            Escreva algo legal:
            <textarea
              name="texto"
              value={this.state.texto}
              onChange={this.handleChange}
              cols="30"
              rows="4"
              placeholder="Use suas melhores palavras :)"
            ></textarea>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
