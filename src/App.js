import React, { Component } from "react";

import Navbar from './components/Navbar'

import FetchTripsContainer from './fetchs/FetchTripsContainer'

import FetchListingsContainer from './fetchs/FetchListingsContainer'

import SearchBar from './fetchs/SearchBar'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {

  render(){
    return (
      <div className="App">
          <Router>
            <Navbar/>
            
              <div>
                <h1 className="title">Welcome to React<b>Bnb</b></h1>
                <SearchBar/>
                    <div><Link to="/trips">Upcoming Trips</Link></div>
                        
                        <div><Link to="/listings">View Listings</Link></div>
                     
                      <Switch>
                        <Route exact path='/trips' component={FetchTripsContainer}>
                         
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
