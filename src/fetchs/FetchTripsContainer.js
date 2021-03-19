import React, {Component} from 'react';
import { connect } from 'react-redux';

import { fetchTrips } from '../actions/tripActions'
import TripFilterBar from '../containers/TripFilterBar'




class FetchTripsContainer extends Component {
    componentDidMount() {

        this.props.fetchTrips()
      }

    handleLoading = () => {
        console.log(this.props.loading)
        if(this.props.loading) {
            return <div>Loading...</div>
        } else {
            return <TripFilterBar trips={this.props.trips} />
    }
    }
    

    render(){
        return(
            <div className="TripApp">
                 {this.handleLoading()}
            </div>
        )
    }
}

const mapStateToProps = state => {
  console.log(state)
    return {
      trips: state.tripsReducer.trips,
      loading: state.tripsReducer.loading
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchTrips: () => dispatch(fetchTrips())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(FetchTripsContainer)