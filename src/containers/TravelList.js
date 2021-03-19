import React, {Component} from 'react';
import Listing from '../components/Listing'

class TravelList extends Component {

    travelList() {
       
        let displayedListings = this.props.listings
        return displayedListings.map(img => 
        <Listing 
        location={img.location}
        price={img.price}
        description={img.description}
        image={img.image}
        />
        )
        
    }

    render(){
        return(
            <div className="container">
            {this.travelList()}
            </div>
        )
    }
    
}


export default TravelList