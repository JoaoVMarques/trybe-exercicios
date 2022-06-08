import './App.css';
import { Component } from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const CreateList = (items) => items.map((item) => Task(item));

const tasks = ['Acordar', 'Café da manha', 'Trybe', 'Jogar', 'Dormir']

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <ul>
          {CreateList(tasks)}
        </ul>
      </div>
    );
  }
}

export default App;
