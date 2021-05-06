import React, {Component} from 'react';
import { connect } from 'react-redux';

import { fetchTrips } from '../actions/tripActions'
import TripList from '../containers/TripList'


import {
  Link
} from "react-router-dom";


class DisplayTripsContainer extends Component {
    componentDidMount() {
      console.log("a")
        this.props.fetchTrips()
      console.log("b")
    }

    handleLoading = () => {
        if(this.props.loading) {
            return <div>Loading...</div>
        } else {
            return <TripList key={this.props.id} trips={this.props.trips} listings={this.props.listings} />
        }
    }

    addLikes
    
    render(){
        return(
            <div className="TripApp">
            <input type="hidden" value='0' onClick={this.addLikes}></input>
                <div><Link to="/">View Listings</Link></div>
                {this.handleLoading()}


                 
            </div>
        )
    }
}
//Add a button to sort by locations

const mapStateToProps = state => {

    return {
      listings: state.listingsReducer.listings,
      trips: state.tripsReducer.trips,
      loading: state.tripsReducer.loading
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchTrips: () => dispatch(fetchTrips())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTripsContainer)