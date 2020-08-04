import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    personer: [
      { navn: 'Jonas', alder: 49 },
      { navn: 'Jeppe', alder: 45 },
      { navn: 'Karina', alder: 44 }
    ],
    otherState: 'some other value'
  }

skiftNavnHandler = (nytNavn) => {
  this.setState( {
      personer: [
        {
          navn: nytNavn,
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


  aendretNavnHandler = (event) => {
    this.setState( {
      personer: [
        {
          navn: 'Jonas Frank',
          alder: 49
        },
        {
          navn: event.target.value,
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

    const style = {
      backgroundColor: 'blue',
      color: 'white',
      fontSize: '1.2 em',
      fontWeight: 'bold',
      border: '1px solid #000',
      padding: '.9em',
      cursor: 'pointer',
    }

  return ( 
  <div className = "App" >
    <h1 > Min første React app </h1> 
    <p > Og den virker </p> 
    <button 
    style = {style}
    onClick = {() => this.skiftNavnHandler('Jonas Krat Frank!!!')}> Skift navn </button> 
    <Person 
      navn = {this.state.personer[0].navn}
      alder = {this.state.personer[0].alder} > Jeg lærer React </Person> 
    < Person
      navn = {this.state.personer[1].navn}
      alder = {this.state.personer[1].alder}
      click={this.skiftNavnHandler.bind(this, 'Luther Matthäus')}
      changed={this.aendretNavnHandler}
    /> 
    <Person 
      navn = {this.state.personer[2].navn}
      alder = {this.state.personer[2].alder}
    /> 
    </div>
  );
}
}


export default App;