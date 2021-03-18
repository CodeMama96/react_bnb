import React, {Component} from 'react';
import { fetchTrips} from './actions/tripActions'
import TripFilterBar from './containers/TripFilterBar'




class FetchTripsContainer extends Component {
    componentDidMount() {
  
        this.props.fetchTrips()
      }

    render(){
        return(
            <div>
                
            </div>
        )
    }
}

export default FetchTripsContainer 