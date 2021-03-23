import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createTrips } from '../actions/tripActions';

class SearchBar extends Component{

state = {
    trips: [],
    startDate: '',
    endDate: '',
    guestNum: ''

}
    handleSubmit = (event)=>{
       
        event.preventDefault();
       
        this.props.createTrips(this.state)
      }


    handleFormChange = (e) =>{

        const name = e.target.name
        const value = e.target.value

        this.setState({
            [name]: value
        }, () => console.log(this.state)
        )

    }



    //binds this will have different context wo the arrow function


    render(){
        console.log(this.props)
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                        <label>
                            Pick your location:
                            <select>
                                <option >Location</option>
                                        {this.props.listings.map((list) => (
                                            <option key={list.id}>{list.location}</option>
                                        )
                                    )
                                    }
                            </select>
                        </label>
                    </form>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="date" placeholder="Start Date" name="startDate" onChange={this.handleFormChange} value={this.state.startDate}/>
                        <input type="date" placeholder="End Date" name="endDate" onChange={this.handleFormChange} value={this.state.endDate}/>
                        <input type="text" placeholder="Number of Guest" name="guestNum" onChange={this.handleFormChange} value={this.state.guestNum}/>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
               
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