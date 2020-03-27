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
        color: 'purple' //this.state.color was not responding on click- hard coded to purple
      })
    }

  render(){

    return(
    <div className="App">
      <div className="Box" onClick ={this.handleToggle} style = {{ backgroundColor: this.state.color}}>
    </div>
      <button onClick={this.changeColor}>Click Me!</button>
      {/* calls on the clickCounter function to display here */}
      <p>Click Counter:{this.state.clickCounter}</p>

    </div>)
  }
  
}

// Challenges:
//connecting toggle function to function properly
//Currently toggle works when you click on the box itself. 
//So if you clicked on the button, it changes colors, if you click on the box, it changes back to its state