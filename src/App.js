import React, { Component } from "react";

import DisplayTripsContainer from './displays/DisplayTripsContainer'

import DisplayListingsContainer from './displays/DisplayListingsContainer'

import SearchBar from './displays/SearchBar'

import './App.css'

import './index.css'
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
render(){
    return (
      <div className="App">
          <Router>
              <div>
                <h1 className="title">Welcome
                <span className="ChangeColor"> To <i>EZ</i>-Bnb</span>
                </h1>
                <div className="background-color">
                <div className="background" ></div>
                </div><br></br>

                <div className="search-bar">
                  <SearchBar/>
                 
                        </div><br></br>
                
                        
                      <Switch>
                      
                        <Route exact path='/trips' component={DisplayTripsContainer}></Route>
                        <Route exact path='/' component={DisplayListingsContainer}></Route>
                      </Switch>

              </div>
          </Router>
      </div>
    );
  }
}


export default App;
