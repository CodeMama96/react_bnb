import React, {Component} from 'react';
import TripSearch from '../components/TripSearch'
import Listing from '../components/Listing'

class TripFilterBar extends Component {


    renderTrips(){

        let displayedTrips = this.props.trips
        return displayedTrips.map(trip => 
        <TripSearch 
        startDate={trip.start_date}
        endDate={trip.end_date}
        guest={trip.guest_num}

        />
        )
    }

    handleSubmit(event) {
        alert(this.props.value);
        event.preventDefault();
      }

    handleChange(event) {
        this.setState({value: event.target.value});
      }
    


    handleGuestChange(){

    }

    optionList(){
        return this.props.listings.map(list =>
            <Listing
               location={<option value={list.location }>{list.location }</option>
                  } 
            />)
    }
    render(){
        return(
            <div className="trip-search">
            <form onSubmit={this.handleSubmit}>
        <label>
          Pick your location:
          <select name='location'onChange={this.handleChange}>
         
{this.optionList}
                    <option value={this.optionList}>{this.optionList}</option>
                  
                
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
            <div>
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