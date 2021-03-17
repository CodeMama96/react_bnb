import React, {Component} from 'react';
import Listing from './components/Listing'

class TravelList extends Component {

    // travelList = () => {
        
    //     return this.props.travelPics.map(img => 
    //     <div>
    //     <p>{img.location}</p>
    //     <p>${img.price} per night </p>
    //     <img height="300" width="400" crop= "fill" key={img.id} src={img.image} alt={img.id} description={img.description}/>
    //     <p>{img.description}</p>
    //     </div>)
    // }
    render(){
        return(
            <div>
            

            <Listing/>
            </div>
        )
    }
}

export default TravelList