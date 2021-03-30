

function Trip(props){

    // const handleRemoveTrip = (e, trip) => {
    //     e.stopPropagation();
    //     props.removeTrip(trip);
    //   };
    
    return(
        <div className="trip-search" key={`trip-${props.id}`}>
            <h4>{props.listing.location} {props.startDate} - {props.endDate} - Number of Guest: {props.guest}</h4>
            {/* <button  onClick={e => handleRemoveTrip(e, trip)}>
            X
          </button> */}
        </div>
    )
}

export default Trip