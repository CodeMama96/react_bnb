import React, {Component} from 'react';
import TripSearch from '../components/TripSearch'


class TripFilterBar extends Component {


    renderTrips(){

        let displayedTrips = this.props.trips 
      
        return displayedTrips.map(trip => 
           
        <TripSearch
            listing={this.props.listings.find(listing => listing.id === trip.listing_id)}
  
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
                {this.props.listings.length===0? null: this.renderTrips()}
            </div>
        )
    }
}

export default TripFilterBar


         
// {this.optionList}
//                     <option value={this.optionList}>{this.optionList} something</option>
                  