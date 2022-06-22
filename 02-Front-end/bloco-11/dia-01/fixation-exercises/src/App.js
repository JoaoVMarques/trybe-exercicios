import React from 'react';

function handleClick() {
  console.log('Clicou no botão!');
}

function button2Click() {
  console.log(':)');
}

function button3Click() {
  console.log('hello world');
}

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={handleClick}>Meu botão</button>
        <button onClick={button2Click}>Feliz</button>
        <button onClick={button3Click}>Sucesso para Fama</button>
      </div>
    )
  }
}

export default App;