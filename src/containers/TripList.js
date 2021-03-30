import React, {Component} from 'react';
import Trip from '../components/Trip'


class TripList extends Component {
    
    renderTrips(){

        let displayedTrips = this.props.trips 
      
        return displayedTrips.map(trip => 
           
        <Trip
            key={trip.id}
            listing={this.props.listings.find(listing => listing.id === trip.listing_id)}
            startDate={trip.start_date}
            endDate={trip.end_date}
            guest={trip.guest_num}
            trip={trip}
        />
        )
    }
//listing_id needs to equal the location...

    render(){
        // debugger
        return(
            <div className="trip-search">
                {this.props.listings.length===0? null: this.renderTrips()}
            </div>
        )
    }
}

export default TripList