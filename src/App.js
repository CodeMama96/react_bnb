import React, { Component } from "react";

import Navbar from './components/Navbar'

import FetchTripsContainer from './containers/FetchTripsContainer'

import FetchListingsContainer from './containers/FetchListingsContainer'





class App extends Component {


  render(){
    return (

      <div className="App">

         <Navbar/>
            <div>
            <h1 className="title">Welcome to React<b>Bnb</b></h1>
            <FetchTripsContainer/>

            <FetchListingsContainer/>

          
            </div>
       
      </div>
    );
  }
}



export default App;
