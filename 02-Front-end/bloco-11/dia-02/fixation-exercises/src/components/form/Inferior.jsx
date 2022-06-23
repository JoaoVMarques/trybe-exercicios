import React, { Component } from "react";

class Inferior extends Component {
  render() {
    const { handleChange, likeDolphin } = this.props
    return (
      <>
        <label>
          Gosta de golfinhos?
          <input
            name="gostaDeGolfinhos"
            value={likeDolphin}
            onChange={handleChange}
            type="checkbox"
          />
        </label>
        <label>
          Qual pudim mais bonito voce ja viu?
          <input type="file" />
        </label>
      </>
    );
  }
}

export default Inferior;
