import React, { Component } from 'react'
import './App.css';


  export default class App extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        color: 'purple',
        clickCounter: 0,
        
      }
    }
// Need the button 2 do things on click, count the counter and change box color
    changeColor = () => {
      this.setState({
        color: 'orange',
        clickCounter: this.state.clickCounter +1,
      })
      
    }
    // Toggle function for when button is clicked, goes back and forth between 2 colors
    handleToggle = () => {
      this.setState({
        color: this.state.color
      })
    }

  render(){

    return(
    <div className="App">
      <div className="Box" style = {{ backgroundColor: this.state.color}}>
    </div>
      <button onClick={this.changeColor}>Click Me!</button>
      {/* calls on the clickCounter function to display here */}
      <p>Click Counter:{this.state.clickCounter}</p>

    </div>)
  }
  
}


