import React, {Component} from 'react';
import Listing from './components/Listing'

class TravelList extends Component {

    travelList() {
        let displayedListings = this.props.travelPics
        return displayedListings.map(img => 
        <Listing 
        location={img.location}
        price={img.price}
        description={img.description}
        image={img.image}
        />)
        
    }

    //<img height="300" width="400" crop= "fill" key={img.id} src={img.image} alt={img.id}/> 
    render(){
        return(
            <div className="container">
            {this.travelList()}
            </div>
        )
    }
    
}


export default TravelList