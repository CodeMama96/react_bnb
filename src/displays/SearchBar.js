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

//seperate stateless
//select listing and use that ID when making the trip

//connect trips bar to the store, if I want to put it in a different form
//keep track of what they type in the store
//react - form parent comp would have the information of the function and how it would change state and pass down to child and then child would call function
 //54 - displaying but no value, this.setState, use name and value.
 //this.props.handleChange get from parent -

 //matters where fetches, fetch listings 
 //draw structure of application 

render(){
        console.log(this.props)
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                            <select name="listing_id" onChange={this.handleFormChange}>
                                <option>Location</option>
                                        {this.props.listings.map((list) => (
                                            <option value={list.id}>{list.location}</option>
                                        )
                                    )
                                    }
                            </select>
                       
                  
                
                    
                        <input type="date" placeholder="Start Date" name="startDate" onChange={this.handleFormChange} value={this.state.startDate}/>
                        <input type="date" placeholder="End Date" name="endDate" onChange={this.handleFormChange} value={this.state.endDate}/>
                        <input type="text" placeholder="Number of Guest" name="guestNum" onChange={this.handleFormChange} value={this.state.guestNum}/>
                        <input type="submit" value="Submit" />
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