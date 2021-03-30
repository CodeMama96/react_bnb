import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createTrips } from '../actions/tripActions';
import OptionDropDown from '../containers/OptionDropDown'

class SearchBar extends Component{

    state = {
        trips: [],
        listing_id: '',
        startDate: '',
        endDate: '',
        guestNum: ''

    }

    handleSubmit = (event)=>{
        event.preventDefault();
        this.props.createTrips(this.state)
        this.setState({
            trips: [],
            listing_id: '',
            startDate: '',
            endDate: '',
            guestNum: ''
        })
    }

    handleFormChange = (e) =>{
        const name = e.target.name
        const value = e.target.value

        this.setState({
            [name]: value
        }, () => console.log(this.state)
        )
    }

//why is it showing as an array[0] here in console?

render(){
        return(
            <div>
                <form  onSubmit={this.handleSubmit}>
                        <OptionDropDown listings={this.props.listings} handleFormChange={this.handleFormChange}/>
                        <input className="trip-element" type="date" placeholder="Start Date" name="startDate" onChange={this.handleFormChange} value={this.state.startDate}/>
                        <input className="trip-element" type="date" placeholder="End Date" name="endDate" onChange={this.handleFormChange} value={this.state.endDate}/>
                        <input className="trip-element" type="text" placeholder="Number of Guest" name="guestNum" onChange={this.handleFormChange} value={this.state.guestNum}/>
                        <input className="trip-element"type="submit" value="Submit" />
                    </form>
               
               
            </div>
        )
    }
}

///controlled form keeps track of what's written as it's written
const mapStateToProps = state => {
    return {
      listings: state.listingsReducer.listings
    }
}

export default connect(mapStateToProps, {createTrips})(SearchBar)