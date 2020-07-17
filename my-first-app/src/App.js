import React from 'react';
import './App.css';
import Person from './Person/Person'

function App() {
  return (
     <div className="App">
      <h1>My first React app</h1>
      <Person navn="Jonas" alder="49">Jeg lærer React </Person>
      <Person navn="Jeppe" alder="45"/>
      <Person navn="Karina" alder="44"/>

    </div>
  );
}

export default App;
