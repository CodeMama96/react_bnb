
function TripSearch(props){

    
console.log(props)
    return(
        <div className="trip-search" key={`trip-${props.id}`}>
            <h4>{props.listing.location} {props.startDate} - {props.endDate} - Number of Guest: {props.guest}</h4>
            
        </div>
    )
}

//will need this to be a seperate link
export default TripSearch