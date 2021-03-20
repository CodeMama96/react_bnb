import React, {Component} from 'react';
import Listing from '../components/Listing'
import OptionContainer from '../containers/OptionContainer'
import { fetchListings } from '../actions/listingActions'

class SearchBar extends Component{

    componentDidMount() {
  
        this.props.fetchListings()
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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Pick your location:
                        <OptionContainer listings={this.props.listing}/>

                    </label>
                    <input type="submit" value="Submit" />
                </form>
            <div>
                    <input type="date" placeholder="Start Date" onChange={this.handleStartDate}/>
                    <input type="date" placeholder="End Date" onChange={this.handleEndDate}/>
                    <input type="text" placeholder="Number of Guest" onChange={this.handleGuestChange}/>
            </div>
            </div>
        )
    }
}

export default SearchBar