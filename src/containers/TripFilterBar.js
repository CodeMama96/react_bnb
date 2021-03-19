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

    handleSearchChange = (e) => {
        const search = e.target.value
        this.setState({search: search}) // will cause a rerender
    }



    handleGuestChange(){

    }

    render(){
        return(
            <div className="trip-search">
            <div>
                    <input type="text" placeholder="Search Location" onChange={this.handleSearchChange}/>
                    <input type="date" placeholder="Start Date" onChange={this.handleStartDate}/>
                    <input type="date" placeholder="End Date" onChange={this.handleEndDate}/>
                    <input type="text" placeholder="Number of Guest" onChange={this.handleGuestChange}/>
                </div>
                {this.renderTrips()}
            
            </div>
        )
    }
}

export default TripFilterBar