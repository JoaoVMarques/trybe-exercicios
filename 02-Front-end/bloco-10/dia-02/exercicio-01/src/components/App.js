import { Component } from 'react';
import Card from './Card';
import data from '../data/data';
import '../app.css';

class App extends Component {
  render() {
    return (
      <div className="background">
        <div className="pokedex">
          <Card pokemon={data[0]}/>
        </div>
      </div>
    );
  }
}

export default App;
