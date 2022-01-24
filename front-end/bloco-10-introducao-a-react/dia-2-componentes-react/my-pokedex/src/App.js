import pokemons from './data';
import './App.css';
import React from 'react';
import Pokedex from './Pokedex';

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <Pokedex pokemons={pokemons} />
        <footer><h6>Code Implemented by Quesia Mendes</h6></footer>
      </div>
  )
  }
}

export default App;
