import React, {Component} from 'react';
import TripSearch from './components/TripSearch'

class TripFilterBar extends Component {
    render(){
        return(
            <div className="trip-search">
            <TripSearch/>
          
            </div>
        )
    }
}

export default TripFilterBar