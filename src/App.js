import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchListings } from './actions/listingActions'
import TravelList from './TravelList'
import Navbar from './components/Navbar'
import TripFilterBar from './TripFilterBar'



class App extends Component {

  componentDidMount() {
  
    this.props.fetchListings()
  }

  handleLoading = () => {
    console.log(this.props.loading)
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <TravelList travelPics={this.props.travelPics} />
    }
  }

  render(){
    return (

      <div className="App">

         <Navbar/>
            <div>
            <h1 className="title">Welcome to React<b>Bnb</b></h1>
            <TripFilterBar/>
            {this.handleLoading()}
            </div>
       
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    travelPics: state.listings,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchListings: () => dispatch(fetchListings())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
