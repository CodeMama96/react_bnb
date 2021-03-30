import { connect } from "react-redux";
import {removeTrip} from '../actions/tripActions'

const Trip = props =>{

    const handleRemoveTrip = (e) => {
        e.stopPropagation();
        props.removeTrip(props.trip);
      };
   
    return(
        <div className="trip-search" key={`trip-${props.id}`}>
            <h4>{props.listing.location} {props.startDate} - {props.endDate} - Number of Guest: {props.guest}</h4>
            <button  onClick={handleRemoveTrip}>
            Delete
          </button>
        </div>
    )
}

export default connect(null, {removeTrip})(Trip)