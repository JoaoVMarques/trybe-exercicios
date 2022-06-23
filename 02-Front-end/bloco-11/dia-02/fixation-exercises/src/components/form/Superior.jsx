import React, { Component } from "react";

class Superior extends Component {
  render() {
    const { handleChange, favoriteFood, age, favoriteCharacter } = this.props;

    let error = undefined
    let ageError = undefined
    if (favoriteFood.length > 50) {
      error = "nome de comida muito grande!"
    } 
    if (age < 18) {
      ageError = "É necessario ter mais de 17 anos para acessar!"
    } 

    return (
      <>
        <label>
          Comida favorita:
          <input
            name="comidaFavorita"
            value={favoriteFood}
            onChange={handleChange}
            type="text"
            placeholder="nham nham"
          />
          <span>{error ? error : ''}</span>
        </label>
        <label>
          Idade:
          <input
            name="idade"
            value={age}
            onChange={handleChange}
            type="number"
            placeholder="0"
          />
          <span>{ageError ? ageError : ''}</span>
        </label>
        <label>
          Personagem favorito:
          <select
            name="personagemFavorito"
            value={favoriteCharacter}
            onChange={handleChange}
          >
            <option value="mario">Mario</option>
            <option value="luigi">Luigi</option>
            <option value="yoshi">Yoshi</option>
          </select>
        </label>
      </>
    );
  }
}

export default Superior;
