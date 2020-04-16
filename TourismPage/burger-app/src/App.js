import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person/Person';
import UserInput from './Components/UserInput/UserInput';
import UserOutput from './Components/UserOutput/UserOutput';

class App extends Component {
  state = {
    username:'superman'
  }

  inputChangeHandler=(event) =>{
    this.setState({username: event.target.value})  //to update the state with the input value from the user
  }

  render() {
    return (
      <div className="App">
        <h1>Hi this is my First React project</h1>
        <button>Switch Name</button>
        <Person name="Ali" age="25" />  
        <Person name="Ahmed" age="30" /> 
        <Person name="Mahran" age="40" /> 
     
      <UserInput changed={this.inputChangeHandler}/>   
      <UserOutput userName={this.state.username}/>
      <UserOutput userName={this.state.username}/>
      <UserOutput userName="Ahmed"/>
      </div>
    );
  }
}

export default App;
