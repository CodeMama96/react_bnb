import React, {Component} from 'react';
import { connect } from 'react-redux';

import { fetchTrips } from '../actions/tripActions'
import TripList from '../containers/TripList'

import {
  Link
} from "react-router-dom";


class DisplayTripsContainer extends Component {
    componentDidMount() {
        this.props.fetchTrips()
    }

    handleLoading = () => {
        if(this.props.loading) {
            return <div>Loading...</div>
        } else {
            return <TripList key={this.props.id} trips={this.props.trips} listings={this.props.listings} />
        }
    }
    

    render(){
        return(
            <div className="TripApp">
                <div><Link to="/">View Listings</Link></div>
                {this.handleLoading()}
                 
            </div>
        )
    }
}


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