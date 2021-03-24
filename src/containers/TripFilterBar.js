import React, {Component} from 'react';
import TripSearch from '../components/TripSearch'


class TripFilterBar extends Component {


    renderTrips(){

        let displayedTrips = this.props.trips 
        //let displayedListing = this.props.listings((list) => list.location)

        return displayedTrips.map(trip => 

        <TripSearch

            
            startDate={trip.start_date}
            endDate={trip.end_date}
            guest={trip.guest_num}
        />
        )
    }
//listing_id needs to equal the location...

    render(){
        return(
            <div className="trip-search">
              
                {this.renderTrips()}
            </div>
        )
    }
}

export default TripFilterBar


         
// {this.optionList}
//                     <option value={this.optionList}>{this.optionList} something</option>
                  