import React, {Component} from 'react';
import { connect } from 'react-redux';

import { fetchListings } from '../actions/listingActions'
import TravelList from '../containers/TravelList'

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
export default connect(mapStateToProps, mapDispatchToProps)(FetchListingsContainer)