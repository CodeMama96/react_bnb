import React, {Component} from 'react';

class TravelList extends Component {

    travelList = () => {
        
        return this.props.travelPics.map(img => <img key={img.id} src={img.image} alt={img.id}/>)
    }
    render(){
        return(
            <div>
            {this.travelList()}
            </div>
        )
    }
}

export default TravelList