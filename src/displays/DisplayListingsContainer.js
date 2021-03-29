import React, {Component} from 'react';
import { connect } from 'react-redux';

import { fetchListings } from '../actions/listingActions'
import TravelList from '../containers/TravelList'

import {
  Link
} from "react-router-dom";


class DisplayListingsContainer extends Component {

    componentDidMount() {
  
        this.props.fetchListings()
      }
    
      handleLoading = () => {
        if(this.props.loading) {
          return <div>Loading...</div>
        } else {
          return <TravelList listings={this.props.listings} />
        }
      }
    
    render(){
        return(
            <div className="ListApp">
            <div><Link to="/trips">Upcoming Trips</Link></div><br></br>    
                      
                {this.handleLoading()}
            </div>
        )
    }
}

const mapStateToProps = state => {
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
export default connect(mapStateToProps, mapDispatchToProps)(DisplayListingsContainer)