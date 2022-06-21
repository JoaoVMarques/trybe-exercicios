import { Component } from 'react';
import Card from './Card';
import data from '../data/data';
import '../app.css';

const createCard = (data) => data.map((selectedData) => <Card pokemon={selectedData} key={selectedData.id}/>)

class App extends Component {
  render() {
    return (
      <div className="background">
        <div className="pokedex">
         { createCard(data) }
        </div>
      </div>
    );
  }
}

export default App;
