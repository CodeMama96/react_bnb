import React, {Component} from 'react';

class Listing extends Component {


    travelList = () => {
        
        return this.props.travelPics.map(img => 
        <div>
        <p>{img.location}</p>
        <p>${img.price} per night </p>
        <img height="300" width="400" crop= "fill" key={img.id} src={img.image} alt={img.id} description={img.description}/>
        <p>{img.description}</p>
        </div>)
    }
    render(){
        return(
            <div>
            picture list
            {this.travelList()}
            picture end

           
            </div>
        )
    }
   
}

//{this.props.travelPics.map((img, index) => 
//{<img height="300" width="400" crop= "fill" key={img.id} src={img.image} alt={img.id}/>)
export default Listing