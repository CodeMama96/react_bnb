import React, {Component} from 'react';
import { connect } from 'react-redux';

import TravelList from '../containers/TravelList'

import { fetchListings } from '../actions/listingActions'

class FetchListingsContainer extends Component {

    componentDidMount() {
  
        this.props.fetchListings()
      }
    
      handleLoading = () => {
        console.log(this.props.loading)
        if(this.props.loading) {
          return <div>Loading...</div>
        } else {
          return <TravelList travelPics={this.props.travelPics} />
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
      travelPics: state.listings,
      loading: state.loading
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchListings: () => dispatch(fetchListings())
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(FetchListingsContainer)