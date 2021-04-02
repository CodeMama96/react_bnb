import { connect } from "react-redux";
import {removeTrip} from '../actions/tripActions'
import Likes from '../containers/Likes'

const Trip = props =>{

 

    const handleRemoveTrip = (e) => {
        e.stopPropagation();
        props.removeTrip(props.trip);
      };
   
    return(
        <div className="trip-search" key={`trip-${props.id}`}>
            <h3>{props.listing.location} </h3>
            <h4>From:{props.startDate}   To:{props.endDate}</h4>
            <h4>Number of Guest: {props.guest}
            </h4>
            <button  className='delete-btn' onClick={handleRemoveTrip}>
            X
          </button>
         <Likes/>
        </div>
    )
}

export default connect(null, {removeTrip})(Trip)