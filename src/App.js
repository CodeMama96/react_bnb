import React, { Component } from "react";
import './App.css';
import ListingContainer from "./components/ListingContainer";
import UserInput from "./components/UserInput";

class App extends Component {
  render(){
    return (

      <div className="App">
        
          <p>
            Welcome to React<b>Bnb</b>
          </p>
        <ListingContainer/>
        <UserInput/>
        
      </div>
    );
  }
}

export default App;
