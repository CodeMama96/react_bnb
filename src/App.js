import React, { Component } from "react";

import DisplayTripsContainer from './displays/DisplayTripsContainer'

import FetchListingsContainer from './displays/DisplayListingsContainer'

import SearchBar from './displays/SearchBar'

import './App.css'


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends Component {

  state = {
    search: ""
  }

  handleInputChange = (e) => {
    const search = e.target.value
    this.setState({search: search}) // will cause a rerender
  }
// search={this.state.search} handleInputChange={this.handleInputChange}
  render(){
    return (
      <div className="App">
          <Router>
              <div>
                <h1 className="title">Welcome to React<b>Bnb</b></h1>
                <div className="background" ></div>
                <div className="search-bar">
                  <SearchBar/>
                 
                        </div>
                      <Switch>
                      
                        <Route exact path='/trips' component={DisplayTripsContainer}>
                        
                        </Route>
                        <Route exact path='/listings' component={FetchListingsContainer}>
                        
                       </Route>
                      </Switch>

                       
              </div>
          </Router>
      </div>
    );
  }
}


export default App;
