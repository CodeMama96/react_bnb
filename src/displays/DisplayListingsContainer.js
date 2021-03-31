import React, {Component} from 'react';
import { connect } from 'react-redux';

import TravelList from '../containers/TravelList'

import {
  Link
} from "react-router-dom";


class DisplayListingsContainer extends Component {
    
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
            <div><Link to="/about">About EZ Bnb</Link></div><br></br>
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
  
export default connect(mapStateToProps)(DisplayListingsContainer)