import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  State = {
    personer: [{
        navn: 'Jonas',
        alder: 49
      },
      {
        navn: 'Jeppe',
        alder: 45
      },
      {
        navn: 'Karina',
        alder: 44
      }
    ],
    andenState: 'En hele helt anden tråd'
  };

skiftNavnHandler = () => {
  this.setState({
      personer: [{
          navn: 'Jonas Frank',
          alder: 49
        },
        {
          navn: 'Jeppe Frank',
          alder: 45
        },
        {
          navn: 'Karina Frank',
          alder: 44
        }
      ]
    })

  }

  render () {
  return ( 
  <div className = "App" >
    <h1 > Min første React app </h1> 
    <p > Og den virker </p> 
    <button onClick = {this.skiftNavnHandler}> Skift navn </button> 
    <Person 
      navn = {this.personer[0].navn}
      alder = {this.personer[0].alder}> Jeg lærer React </Person> 
    <Person 
      navn = {this.personer[1].navn}
      alder = {this.personer[1].alder}
    /> 
    <Person 
      navn = {this.personer[2].navn}
      alder = {this.personer[2].alder}
    /> 
    </div>
  );
}
}


export default App;




  // GØR IKKE SÅDAN HER this.state.personer[0].navn = 'Jonas Frank';



/* 
Klassisk måde at ændre state
class App extends Component {
state = {
  personer: [
    {navn: 'Jonas', alder: 49},
    {navn: 'Jeppe', alder: 45},
    {navn: 'Karina', alder: 44}
  ]
}; 



state = {
  personer: [
    {navn: 'Jonas', alder: 49},
    {navn: 'Jeppe', alder: 45},
    {navn: 'Karina', alder: 44}
  ]
};

 */