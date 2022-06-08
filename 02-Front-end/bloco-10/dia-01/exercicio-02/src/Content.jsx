import { Component } from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const ShowContent = (contentObj) => {
  return contentObj.map((test) => {
    const { conteudo, bloco, status } = test;
    return (
      <div key={conteudo} className='content-card'>
        <h4>O conteúdo é: {conteudo}</h4>
        <p>Status: {status}</p>
        <p>Bloco: {bloco}</p>
        <hr />
      </div>
    );
  })
}


class Content extends Component {
  render() {
    return (
      ShowContent(conteudos)
    );
  }
}

export default Content;