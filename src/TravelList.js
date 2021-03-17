import React, {Component} from 'react';
import Image from './components/Image'

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
            

            <Image/>
            </div>
        )
    }
}

export default TravelList