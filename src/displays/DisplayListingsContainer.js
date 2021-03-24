import React, {Component} from 'react';
import { connect } from 'react-redux';

import { fetchListings } from '../actions/listingActions'
import TravelList from '../containers/TravelList'

import {
  Link
} from "react-router-dom";


class FetchListingsContainer extends Component {

    componentDidMount() {
  
        this.props.fetchListings()
      }
    
      handleLoading = () => {
        console.log(this.props.loading)
        if(this.props.loading) {
          return <div>Loading...</div>
        } else {
          return <TravelList listings={this.props.listings} />
        }
      }
    
    render(){
        return(
            <div className="ListApp">
            <div><Link to="/trips">Upcoming Trips</Link></div>      
                      
                {this.handleLoading()}
            </div>
        )
    }
}

  // const mapStateToProps = (state, ownProps) => {

  //   const displayLocations = state.listingsReducer.listings.filter((listing) =>  
  //     listing.location.toLowerCase().includes(ownProps.searchTerm.toLowerCase()))
      
  // return {
  //   locations: displayLocations,
  //   loading: state.loading
  // }
  // }
const mapStateToProps = state => {
  console.log(state.listingsReducer.listings.location)


    return {
     
      listings: state.listingsReducer.listings,
      loading: state.listingsReducer.loading
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchListings: () => dispatch(fetchListings())
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(FetchListingsContainer)