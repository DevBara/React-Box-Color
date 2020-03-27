import React, { Component } from 'react'
import './App.css';


  export default class App extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        color: 'purple',
        clickCounter: 0
      }
    }

  render(){

    return(
    <div className="App">
      <div className="Box" style ={{backgroundColor: this.state.color}}>
    </div>
      <button>Click Me!</button>
      <p>Click Counter:{this.state.clickCounter}</p>

    </div>)
  }
  
}


