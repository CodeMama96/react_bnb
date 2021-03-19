import React, {Component} from 'react';
import TripSearch from '../components/TripSearch'


class TripFilterBar extends Component {


    renderTrips(){
 
        let displayedTrips = this.props.trips

        return displayedTrips.map(trip => 
        <TripSearch 
        startDate={trip.start_date}
        endDate={trip.end_date}
        guest={trip.guest_num}

        />)
    }

  

    render(){
        return(
            <div className="trip-search">
            
                {this.renderTrips()}
            
            </div>
        )
    }
}

export default TripFilterBar