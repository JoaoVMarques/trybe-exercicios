import React, { Component } from "react";
import Superior from "./form/Superior";
import Inferior from "./form/Inferior";
import "../styles/form.css";

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);;

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
            <Superior
              handleChange={this.handleChange}
              favoriteFood={this.state.comidaFavorita}
              age={this.state.idade}
              favoriteCharacter={this.state.personagemFavorito}
            />
          </fieldset>
          <fieldset>
            <Inferior 
            handleChange={this.handleChange}
            likeDolphin={this.gostaDeGolfinhos}
            />
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
