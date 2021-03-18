import React, {Component} from 'react';
import TripSearch from '../components/TripSearch'

class TripFilterBar extends Component {


    renderTrips(){
        let displayedTrips = this.state.trips

        return displayedTrips.map(trip => 
        <TripSearch 
        startDate={trip.state_date}
        endDate={trip.end_date}
        guest={trip.guest_num}

        />)
    }

  

    render(){
        return(
            <div className="trip-search">
                <div>
                {this.renderTrips()}
                </div>
          
            </div>
        )
    }
}

export default TripFilterBar